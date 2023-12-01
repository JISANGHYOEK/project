import React, { useState } from "react";
import "./AskPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AskPageitem() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    // 폼이 제출되었을 때 할 작업들을 처리하는 함수
    // 여기에 제출된 데이터를 어딘가에 저장하거나 다른 동작을 수행할 수 있습니다.
    e.preventDefault();
    if (!title) alert("제목을 입력해주세요.");
    else if (!name) alert("이름을 입력해주세요.");
    else if (!email) alert("이메일을 입력해주세요.");
    else if (!content) alert("문의내용을 입력해주세요.");

    axios
      .post("http://10000mr.com:8080/api/AskPage", data, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        navigate("/faq");
        alert("문의가 접수되었습니다.");
        // 문의제출 성공 시 처리 로직을 작성하세요.
        // 예: 로그인 상태를 관리하는 상태를 변경하거나, 메인 페이지로 이동 등
      })
      .catch((error) => {
        console.error(error);
        // 로그인 실패 시 처리 로직을 작성하세요.
        // 예: 에러 메시지를 표시하거나, 입력 필드를 초기화 등
      });
  };

  // 서버로 보낼 데이터
  const data = {
    title: title,
    Username: name,
    email: email,
    content: content,
  };

  // axios를 사용하여 서버에 로그인 요청을 보냅니다.

  return (
    <div>
      <div className="title-label">
        <label>1:1 문의하기</label>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            제목:
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleTitleChange}
            />
          </label>
          <label>
            이름:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <br />
          <label>
            이메일:
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
          <br />
          <label>
            문의 내용:
            <textarea
              name="content"
              value={content}
              rows="4"
              cols="50"
              onChange={handleContentChange}
            />
          </label>
          <br />
          <button type="submit">제출하기</button>
        </form>
      </div>
    </div>
  );
}

export default AskPageitem;
