const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { con, app } = require('../db');

router.post('/signupPage', (req, res) => {
   const { Username, UserID, Password, confirmPassword, Email, PhoneNumber } = req.body;

   // 다른 회원의 아이디와 중복 여부 확인
   const checkDuplicateQuery = 'SELECT * FROM Users WHERE UserID = ?';
   con.query(checkDuplicateQuery, [UserID], (err, rows) => {
      if (err) {
         console.error('회원 중복 확인 오류:', err);
         return res.status(500).json({ error: '회원 중복 확인에 실패했습니다.' });
      }
      // 중복된 아이디가 이미 존재하는 경우
      if (rows.length > 0) {
         return res.status(409).json({ error: '이미 사용 중인 아이디입니다.' });
      }

      // 비밀번호 확인
      if (Password !== confirmPassword) {
         return res.status(400).json({ error: '비밀번호가 일치하지 않습니다.' });
      }

      // 비밀번호 해싱
      bcrypt.hash(Password, 10, (err, hashedPassword) => {
         if (err) {
            console.error('비밀번호 해싱 오류:', err);
            return res.status(500).json({ error: '비밀번호 해싱에 실패했습니다.' });
         }

         // 회원가입 정보를 데이터베이스에 저장
         const query = 'INSERT INTO Users (Username, UserID, Password, Email, PhoneNumber) VALUES (?, ?, ?, ?, ?)';
         con.query(query, [Username, UserID, hashedPassword, Email, PhoneNumber], (err, result) => {
            if (err) {
               console.error('회원가입 오류:', err);
               return res.status(500).json({ error: '회원가입에 실패했습니다.' });
            }
            //세션생성
            console.log(req.session);
            req.session.userID = UserID;

            // 세션 저장
            req.session.save(function (err) {
               if (err) {
                  console.error('세션 저장 오류:', err);
                  return res.status(500).json({
                     error: '회원 가입은 성공했지만  로그인에 실패했습니다.',
                  });
               }
               res.status(200).json({ message: '회원가입이 완료되었습니다.' });
            });
         });
      });
   });
});

router.post('/login', (req, res) => {
   const { UserID, Password } = req.body;

   // 사용자 아이디가 데이터베이스에 존재하는지 확인
   const checkUserQuery = 'SELECT * FROM Users WHERE UserID = ?';
   con.query(checkUserQuery, [UserID], (err, rows) => {
      if (err) {
         console.error('사용자 확인 오류:', err);
         return res.status(500).json({ error: '사용자 확인에 실패했습니다.' });
      }

      // 아이디에 해당하는 사용자가 존재하지 않는 경우
      if (rows.length === 0) {
         return res.status(401).json({ error: '아이디 혹은 비밀번호가 잘못되었습니다.' });
      }

      // 비밀번호 확인
      bcrypt.compare(Password, rows[0].Password, (err, isMatch) => {
         if (err) {
            console.error('비밀번호 확인 오류:', err);
            return res.status(500).json({ error: '비밀번호 확인에 실패했습니다.' });
         }

         // 비밀번호가 일치하지 않는 경우
         if (!isMatch) {
            return res.status(401).json({ error: '아이디 혹은 비밀번호가 잘못되었습니다.' });
         }

         // 세션 생성
         // console.log(req.session);
         req.session.userID = UserID;

         // 세션 저장
         req.session.save(function (err) {
            if (err) {
               console.error('세션 저장 오류:', err);
               return res.status(500).json({ error: '세션 저장에 실패했습니다.' });
            }
            res.status(200).json({ message: '로그인이 성공적으로 완료되었습니다.' });
         });
      });
   });
});

router.post('/logout', (req, res) => {
   if (req.session) {
      // 세션 삭제
      req.session.destroy(err => {
         if (err) {
            console.error('세션 삭제 오류:', err);
            return res.status(500).json({ error: '로그아웃에 실패했습니다.' });
         }
         // 세션 삭제 성공
         res.status(200).json({ message: '성공적으로 로그아웃되었습니다.' });
      });
   } else {
      // 이미 로그아웃 상태인 경우
      res.status(400).json({ error: '이미 로그아웃 상태입니다.' });
   }
});

router.get('/isAdmin', (req, res) => {
   if (!req.session.userID) {
      res.status(401).json({ message: '사용자 확인에 실패했습니다.' });
      return;
   }

   const sql = 'SELECT * FROM Users WHERE UserID = ?';
   con.query(sql, [req.session.userID], (err, result) => {
      if (err) {
         throw err;
      }

      if (!result[0].Admin) {
         res.status(401).json({ message: '사용자 확인에 실패했습니다.' });
         return;
      }

      res.status(200).json({ message: '사용자 확인에 성공했습니다.' });
   });
});

// 글 목록
router.get('/AskPage', (req, res) => {
   if (!req.session.userID) {
      res.status(401).json({ message: '로그인 후 이용 가능합니다.' });
      return;
   }

   let sql = 'SELECT * FROM FAQ';

   con.query(sql, (err, result) => {
      if (err) {
         throw err;
      }
      res.status(200).json(result);
   });
});

// 글 작성
router.post('/AskPage', (req, res) => {
   if (!req.session.userID) {
      res.status(401).json({ message: '로그인 후 이용 가능합니다.' });
      return;
   }

   let newPost = {
      title: req.body.title,
      username: req.body.username,
      email: req.body.email,
      content: req.body.content,
      created_At: new Date(),
   };

   let sql = 'INSERT INTO FAQ SET ?';

   con.query(sql, newPost, (err, result) => {
      if (err) {
         throw err;
      }
      res.status(200).json(result);
   });
});

// 글 수정
router.put('/AskPage/:id', (req, res) => {
   if (!req.session.userID) {
      res.status(401).json({ message: '로그인 후 이용 가능합니다.' });
      return;
   }

   let newPost = {
      title: req.body.title,
      username: req.body.username,
      email: req.body.email,
      content: req.body.content,
   };

   let sql = 'UPDATE FAQ SET ? WHERE id = ?';

   con.query(sql, [newPost, req.params.id], (err, result) => {
      if (err) {
         throw err;
      }
      res.status(200).json(result);
   });
});

// 글 삭제
router.delete('/AskPage/:id', (req, res) => {
   if (!req.session.userID) {
      res.status(401).json({ message: '로그인 후 이용 가능합니다.' });
      return;
   }

   let sql = 'DELETE FROM FAQ WHERE id = ?';

   con.query(sql, [req.params.id], (err, result) => {
      if (err) {
         throw err;
      }
      res.status(200).json(result);
   });
});

//admin 글 작성
router.post('/AdminAskPage/:id', (req, res) => {
   if (!req.session.userID) {
      res.status(401).json({ message: '로그인 후 이용 가능합니다.' });
      return;
   }

   let sql = 'UPDATE FAQ SET answer = ? WHERE id = ?';

   con.query(sql, [req.body.answer, req.params.id], (err, result) => {
      if (err) {
         throw err;
      }
      res.status(200).json(result);
   });
});

// //admin 글 불러오기
// router.get("/AdminAskPage/:id", (req, res) => {
//   let sql = "SELECT answer FROM FAQ WHERE id = ?";

//   con.query(sql, req.params.id, (err, result) => {
//     if (err) {
//       throw err;
//     }
//     res.status(200).json(result);
//   });
// });

//무료추천종목 글 작성
router.post('/FreeRe', (req, res) => {
   if (!req.session.userID) {
      res.status(401).json({ message: '로그인 후 이용 가능합니다.' });
      return;
   }

   let newPost = {
      title: req.body.title,
      content: req.body.content,
      image_path: req.body.image_path,
      created_At: new Date(),
   };

   let sql = 'INSERT INTO FRboard SET ?';

   con.query(sql, newPost, (err, result) => {
      if (err) {
         throw err;
      }
      res.status(200).json(result);
   });
});

//무료추천종목리스트
router.get('/FreeRe', (req, res) => {
   //  if (!req.session.userID) {
   //     res.status(401).json({ message: '로그인 후 이용 가능합니다.' });
   //     return;
   //  }

   let sql = 'SELECT * FROM FRboard';

   con.query(sql, (err, result) => {
      if (err) {
         throw err;
      }
      res.status(200).json(result);
   });
});

//무료추천종목내용
router.get('/FreeRe/:id', (req, res) => {
   //  if (!req.session.userID) {
   //     res.status(401).json({ message: '로그인 후 이용 가능합니다.' });
   //     return;
   //  }

   let sql = 'SELECT * FROM FRboard WHERE id = ?';

   con.query(sql, [req.params.id], (err, result) => {
      if (err) {
         throw err;
      }
      res.status(200).json(result);
   });
});

//무료추천종목수익률 리스트
router.post('/Ror', (req, res) => {
   if (!req.session.userID) {
      res.status(401).json({ message: '로그인 후 이용 가능합니다.' });
      return;
   }

   let newPost = {
      title: req.body.title,
      content: req.body.content,
      image_path: req.body.image_path,
      created_At: new Date(),
   };

   let sql = 'INSERT INTO Rorboard SET ?';

   con.query(sql, newPost, (err, result) => {
      if (err) {
         throw err;
      }
      res.status(200).json(result);
   });
});

//아이디 찾기
router.post('/findId', function (req, res, next) {
   var Email = req.body.email;
   var PhoneNumber = req.body.phone;

   con.query(
      'SELECT UserID FROM Users WHERE Email = ? AND PhoneNumber = ?',
      [Email, PhoneNumber],
      function (error, results, fields) {
         if (error) {
            res.status(500).send('다시 시도해주세요.'); // fetching 오류
         } else {
            if (results.length > 0) {
               res.json({
                  id: results[0].UserID,
               });
            } else {
               res.status(400).send('이메일 또는 전화번호가 잘못되었습니다.');
            }
         }
      },
   );
});

// 비밀번호 재설정 페이지로 이동
router.post('/resetPassword', function (req, res, next) {
   var UserID = req.body.id;
   var PhoneNumber = req.body.phone;

   con.query(
      'SELECT Email FROM Users WHERE UserID = ? AND PhoneNumber = ?',
      [UserID, PhoneNumber],
      function (error, results, fields) {
         if (error) {
            res.status(500).send('다시 시도해 주세요.');
         } else {
            if (results.length > 0) {
               // 아이디와 전화번호가 일치하는 사용자가 있는 경우 비밀번호 재설정 페이지로 이동
               //res.redirect("/changePassword");
               res.json({
                  email: results[0].Email,
               });
            } else {
               res.status(400).send('잘못된 아이디 또는 전화번호입니다.');
            }
         }
      },
   );
});

// 비밀번호 재설정
router.post('/changePassword', function (req, res, next) {
   var UserID = req.body.id;
   var newPassword = req.body.newPassword;

   bcrypt.hash(newPassword, 10, function (err, hash) {
      if (err) {
         res.status(500).send('비밀번호 해싱 중 오류 발생');
      } else {
         con.query('UPDATE Users SET Password = ? WHERE UserID = ?', [hash, UserID], function (error, results, fields) {
            if (error) {
               res.status(500).send('비밀번호 초기화 중 오류 발생.');
            } else {
               res.send('성공적으로 변경되었습니다.');
            }
         });
      }
   });
});

module.exports = router;
