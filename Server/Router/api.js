const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");

router.post("/signupPage", (req, res) => {
  const { Username, UserID, Password, confirmPassword, Email, PhoneNumber } =
    req.body;

  // 다른 회원의 아이디와 중복 여부 확인
  const checkDuplicateQuery = "SELECT * FROM Users WHERE UserID = ?";
  db.query(checkDuplicateQuery, [UserID], (err, rows) => {
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
      db.query(
        query,
        [Username, UserID, hashedPassword, Email, PhoneNumber],
        (err, result) => {
          if (err) {
            console.error("회원가입 오류:", err);
            return res.status(500).json({ error: "회원가입에 실패했습니다." });
          }
          res.status(200).json({ message: "회원가입이 완료되었습니다." });
        }
      );
    });
  });
});

module.exports = router;
