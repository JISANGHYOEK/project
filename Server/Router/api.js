const express = require("express");
const router = express.Router();
const { con, app } = require("../db");
const bcrypt = require("bcrypt");

router.post("/signupPage", (req, res) => {
  const { Username, UserID, Password, confirmPassword, Email, PhoneNumber } =
    req.body;

  // 다른 회원의 아이디와 중복 여부 확인
  const checkDuplicateQuery = "SELECT * FROM Users WHERE UserID = ?";
  con.query(checkDuplicateQuery, [UserID], (err, rows) => {
    if (err) {
      console.error("회원 중복 확인 오류:", err);
      return res.status(500).json({ error: "회원 중복 확인에 실패했습니다." });
    }
    // 중복된 아이디가 이미 존재하는 경우
    if (rows.length > 0) {
      return res.status(409).json({ error: "이미 사용 중인 아이디입니다." });
    }

    // 비밀번호 확인
    if (Password !== confirmPassword) {
      return res.status(400).json({ error: "비밀번호가 일치하지 않습니다." });
    }

    // 비밀번호 해싱
    bcrypt.hash(Password, 10, (err, hashedPassword) => {
      if (err) {
        console.error("비밀번호 해싱 오류:", err);
        return res.status(500).json({ error: "비밀번호 해싱에 실패했습니다." });
      }

      // 회원가입 정보를 데이터베이스에 저장
      const query =
        "INSERT INTO Users (Username, UserID, Password, Email, PhoneNumber) VALUES (?, ?, ?, ?, ?)";
      con.query(
        query,
        [Username, UserID, hashedPassword, Email, PhoneNumber],
        (err, result) => {
          if (err) {
            console.error("회원가입 오류:", err);
            return res.status(500).json({ error: "회원가입에 실패했습니다." });
          }
          //세션생성
          console.log(req.session);
          req.session.userID = UserID;

          // 세션 저장
          req.session.save(function (err) {
            if (err) {
              console.error("세션 저장 오류:", err);
              return res.status(500).json({
                error: "회원 가입은 성공했지만  로그인에 실패했습니다.",
              });
            }
            res.status(200).json({ message: "회원가입이 완료되었습니다." });
          });
        }
      );
    });
  });
});

router.post("/login", (req, res) => {
  const { UserID, Password } = req.body;

  // 사용자 아이디가 데이터베이스에 존재하는지 확인
  const checkUserQuery = "SELECT * FROM Users WHERE UserID = ?";
  con.query(checkUserQuery, [UserID], (err, rows) => {
    if (err) {
      console.error("사용자 확인 오류:", err);
      return res.status(500).json({ error: "사용자 확인에 실패했습니다." });
    }

    // 아이디에 해당하는 사용자가 존재하지 않는 경우
    if (rows.length === 0) {
      return res
        .status(401)
        .json({ error: "아이디 혹은 비밀번호가 잘못되었습니다." });
    }

    // 비밀번호 확인
    bcrypt.compare(Password, rows[0].Password, (err, isMatch) => {
      if (err) {
        console.error("비밀번호 확인 오류:", err);
        return res.status(500).json({ error: "비밀번호 확인에 실패했습니다." });
      }

      // 비밀번호가 일치하지 않는 경우
      if (!isMatch) {
        return res
          .status(401)
          .json({ error: "아이디 혹은 비밀번호가 잘못되었습니다." });
      }

      // 세션 생성
      console.log(req.session);
      req.session.userID = UserID;

      // 세션 저장
      req.session.save(function (err) {
        if (err) {
          console.error("세션 저장 오류:", err);
          return res.status(500).json({ error: "세션 저장에 실패했습니다." });
        }
        res
          .status(200)
          .json({ message: "로그인이 성공적으로 완료되었습니다." });
      });
    });
  });
});

router.post("/logout", (req, res) => {
  if (req.session) {
    // 세션 삭제
    req.session.destroy((err) => {
      if (err) {
        console.error("세션 삭제 오류:", err);
        return res.status(500).json({ error: "로그아웃에 실패했습니다." });
      }
      // 세션 삭제 성공
      res.status(200).json({ message: "성공적으로 로그아웃되었습니다." });
    });
  } else {
    // 이미 로그아웃 상태인 경우
    res.status(400).json({ error: "이미 로그아웃 상태입니다." });
  }
});

module.exports = router;