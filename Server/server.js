const express = require("express");
const api = require("./Router/api");
const { db, app } = require("./db");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://10000mr.com",
    credentials: true,
  })
);
app.use(express.json());
app.use("/api", api);

const port = 80; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// app.get("/write/:id", (req, res) => {
//   // /write/:id - 경로
//   let sql = `SELECT * FROM post WHERE id = ?`; // ? - SQL 쿼리 내 parmas
//   db.query(sql, [req.params.id], (err, result) => {
//     if (err) console.log(err);
//     else {
//       if (result.length == 0) {
//         res.status(400).send("이상한 URL 입력함");
//       } else {
//         res.render("write.ejs", { result: result[0] });
//       }
//     }
//   });
// });

// // 글 수정
// app.get("/edit/:id", (req, res) => {
//   // /edit/:id - 경로
//   let sql = `SELECT * FROM post WHERE id = ?`; // ? - SQL 쿼리 내 parmas
//   db.query(sql, [req.params.id], (err, result) => {
//     if (err) console.log(err);
//     else {
//       if (result.length == 0) {
//         res.status(400).send("이상한 URL 입력함");
//       } else {
//         res.render("edit.ejs", { result: result[0] });
//       }
//     }
//   });
// });

// app.post("/edit/:id", (req, res) => {
//   // /edit/:id - 경로
//   let sql = `UPDATE post SET title = ?, content = ? WHERE id = ?`; // ? - SQL 쿼리 내 parmas
//   let values = [req.body.title, req.body.content, req.params.id];
//   db.query(sql, values, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(400).send("이상한 URL 입력함");
//     } else {
//       res.redirect("/list");
//     }
//   });
// });

// // 글 삭제
// db.connect((err) => {
//   if (err) throw err;
//   console.log("Connected to MySQL");
// });

// app.delete("/delete", (req, res) => {
//   let docid = req.query.docid;
//   if (!docid) {
//     res.status(400).send("docid is required");
//     return;
//   }

//   let sql = `DELETE FROM post WHERE id = ?`;
//   db.query(sql, [docid], (err, result) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send("Database error");
//     } else {
//       res.status(200).send("삭제되었습니다.");
//     }
//   });
// });

// // 글 삭제
// db.connect((err) => {
//   if (err) throw err;
//   console.log("Connected to MySQL");
// });

// app.delete("/delete", (req, res) => {
//   let docid = req.query.docid;
//   if (!docid) {
//     res.status(400).send("docid is required");
//     return;
//   }

//   let sql = `DELETE FROM post WHERE id = ?`;
//   db.query(sql, [docid], (err, result) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send("Database error");
//     } else {
//       res.status(200).send("삭제되었습니다.");
//     }
//   });
// });

// // 회원가입 처리 - passport 라이브러리 사용
// //npm install express-session passport passport-local
// const session = require("express-session");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");

// app.use(passport.initialize());
// app.use(
//   session({
//     secret: "암호화에 쓸 비번", // session 암호화, 이거 털리면 개인정보 다털림
//     resave: false, // 유저가 서버로 요청할 때마다 세션 갱신 여부
//     saveUninitialized: false, // 유저가 로그인 안해도 세션 만들것인지 여부
//   })
// );

// app.use(passport.session());
// //로그인 페이지 띄워주기
// app.get("/login", async (req, res) => {
//   res.render("login.ejs");
// });

// //passport 라이브러리 - DB 내 존재하는 아이디 비밀번호 검증(Hashing)
// passport.use(
//   new LocalStrategy(async (입력한아이디, 입력한비번, cb) => {
//     let result = await db
//       .collection("user")
//       .findOne({ username: 입력한아이디 });
//     if (!result) {
//       return cb(null, false, { message: "아이디 DB에 없음" });
//     }

//     if (await bcrypt.compare(입력한비번, result.password)) {
//       // Hashing 한 상태로 비교
//       return cb(null, result);
//     } else {
//       return cb(null, false, { message: "비번불일치" });
//     }
//   })
// );

// //세션 만들기
// passport.serializeUser((user, done) => {
//   // 로그인 성공시 세션 자동 생성
//   process.nextTick(() => {
//     done(null, { id: user._id, username: user.username });
//   });
// });

// passport.deserializeUser(async (user, done) => {
//   // 유저가 보낸 쿠키 분석
//   let result = await db
//     .collection("user")
//     .findOne({ _id: new ObjectId(user.id) }); // DB조회 후 최신 유저 정보 반영
//   delete result.password; // 보안 위해서 비밀번호 정보는 삭제
//   process.nextTick(() => {
//     return done(null, result);
//   });
// });
