import React, { useState } from "react";
import "./Userinfo.css";

function ForgotPwd() {
  const [id, setId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에서 이메일과 아이디를 서버로 전송하여 비밀번호 재설정 링크를 요청하세요.
    // 요청이 성공하면, 비밀번호 재설정 페이지로 이동합니다.
  };

  return (
    <div className="Userinfo-container">
      <div className="Userinfo-form">
        <h4>비밀번호 찾기</h4>
        <form onSubmit={handleSubmit}>
          <label>
            아이디:
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            전화번호:
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </label>
          <br />
          <br />
          <button type="submit">비밀번호 찾기</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPwd;
