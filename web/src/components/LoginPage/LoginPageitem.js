import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useStore } from "../../store";

function LoginPageitem() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useStore();

  const handleEmailChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!id || !password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    // 서버로 보낼 데이터
    const data = { UserID: id, Password: password };

    // axios를 사용하여 서버에 로그인 요청을 보냅니다.
    // axios.post("/api/login", data, { withCredentials: true });
    logIn(data)
      .then((response) => {
        console.log(response);
        navigate("/MainPage");

        // 로그인 성공 시 처리 로직을 작성하세요.
        // 예: 로그인 상태를 관리하는 상태를 변경하거나, 메인 페이지로 이동 등
      })
      .catch((error) => {
        console.error(error);
        // 로그인 실패 시 처리 로직을 작성하세요.
        // 예: 에러 메시지를 표시하거나, 입력 필드를 초기화 등
      });
  };
  const openpwd = () => {
    const url = "/forgot-pwd"; // 원하는 URL로 변경하세요.
    const windowFeatures = "menubar=no,location=no,resizable=yes,status=yes";
    const popup = window.open(url, "_blank", windowFeatures);

    popup.addEventListener("load", () => {
      popup.document.documentElement.style.overflow = "hidden";
      popup.resizeTo(500, 600);
    });
  };
  const openid = () => {
    const url = "/forgot-id"; // 원하는 URL로 변경하세요.
    const windowFeatures = "menubar=no,location=no,resizable=yes,status=yes";
    const popup = window.open(url, "_blank", windowFeatures);

    popup.addEventListener("load", () => {
      popup.document.documentElement.style.overflow = "hidden";
      popup.resizeTo(500, 600);
    });
  };

  return (
    <StyledLoginPage>
      <div className="login-page">
        <LoginForm onSubmit={handleLogin}>
          <div>
            <StyledInput
              type="id"
              value={id}
              onChange={handleEmailChange}
              placeholder="아이디"
            />
          </div>
          <div>
            <StyledInput
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="비밀번호"
            />
          </div>
          <div>
            <StyledButton type="submit">로그인</StyledButton>
          </div>
          <div>
            <StyledLink onClick={openpwd}>비밀번호 찾기</StyledLink>
            <StyledLink onClick={openid}>아이디 찾기</StyledLink>
            <StyledLink to="/TermsAgree">회원가입하기</StyledLink>
          </div>
        </LoginForm>
      </div>
    </StyledLoginPage>
  );
}

const StyledLink = styled(Link)`
  color: #555; /* 링크 색상 */
  cursor: pointer;
  text-decoration: none; /* 밑줄 제거 */
  display: inline-block; /* 줄바꿈 없는 인라인 블록 요소로 지정 */
  margin-right: 10px; /* 각 링크 사이 여백 설정 */
  margin-left: 10px;
  margin-top: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledLoginPage = styled.div`
  .login-page {
    margin-top: 120px; /* 로그인 폼과 헤더 간 여백 설정 */
    margin-bottom: 350px;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const StyledInput = styled.input`
  width: 300px; /* 원하는 너비로 조절하세요 */
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
`;

const StyledButton = styled.button`
  width: 320px; /* 원하는 너비로 조절하세요 */
  height: 50px; /* 원하는 높이로 조절하세요*/
  padding: 10px;
  font-size: 16px;
  background-color: orangered;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-botton: 10px;

  &:hover {
    background-color: orangered;
    text-decoration: underline;
  }
`;

export default LoginPageitem;
