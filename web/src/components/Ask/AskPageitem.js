import React, { useState } from "react";
import "./AskPage.css";

function AskPageitem() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ask, setAsk] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleAskChange = (e) => {
    setAsk(e.target.value);
  };

  const handleSubmit = (e) => {
    // 폼이 제출되었을 때 할 작업들을 처리하는 함수
    // 여기에 제출된 데이터를 어딘가에 저장하거나 다른 동작을 수행할 수 있습니다.
    e.preventDefault();
    if (!title) alert("제목을 입력해주세요.");
    else if (!name) alert("이름을 입력해주세요.");
    else if (!email) alert("이메일을 입력해주세요.");
    else if (!ask) alert("문의내용을 입력해주세요.");
  };

  // 서버로 보낼 데이터
  const data = { AskTitle: title, AskName: name, AskEmail: email, AskAsk: ask };

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
              name="ask"
              rows="4"
              cols="50"
              value={ask}
              onChange={handleAskChange}
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
