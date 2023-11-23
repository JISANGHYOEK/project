import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeaderComponent from "../Header/Header";
import FooterComponent from '../Footer/Footer';

const LoginPage = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (!id || !password) {
            alert('아이디와 비밀번호를 모두 입력해주세요.');
            return;
        }
        // 로그인 처리 로직을 추가하세요 (예: 서버로 요청을 보내거나 상태를 변경하여 로그인 여부 판단 등)
        console.log('Id:', id);
        console.log('Password:', password);
        // 이후 로그인 성공 시 다음 단계로 넘어갈 수 있습니다.
    };
    
    return (
        <div>
            <div className="Header">
                <HeaderComponent />
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
                            <StyledLink to="/forgot-password">비밀번호 찾기</StyledLink>
                            <StyledLink to="/forgot-username">아이디 찾기</StyledLink>  
                            <StyledLink to="/TermsAgree">회원가입하기</StyledLink>
                        </div>
                    </LoginForm>
                </div>
            </StyledLoginPage>
            </div>
            <FooterComponent/>
        </div>
    );
};

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
        margin-bottom: 150px;
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
    background-color: blue;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-botton: 10px;

    &:hover {
        background-color: blue;
        text-decoration: underline;
    }
`;

export default LoginPage;