import React, { useState } from 'react';
import './SignupPage.css';
import HeaderComponent from '../Header/Header';
import FooterComponent from '../Footer/Footer';
import { Link } from 'react-router-dom';

const SignupPage = () => {
    // 입력 값 상태 관리
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    // 입력 값 변경 핸들러
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // 기본 제출 동작 방지
        // 여기에 폼 제출 로직을 추가하세요
        // 예: 서버에 데이터를 보내거나 다른 작업을 수행할 수 있습니다.
        if (userInfo.password !== userInfo.confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
    };

    return (
        <div>
            <HeaderComponent />
            <div className="signup-page">
                <label className="signup-label1">만랩파트너스 회원가입</label><br/>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="username">아이디</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={userInfo.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="email">이메일</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={userInfo.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="password">비밀번호</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={userInfo.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="confirmPassword">비밀번호 확인</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={userInfo.confirmPassword}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-field">
                        <button className="signup-button" type="submit">가입하기</button>
                        <span className="signup-separator">|</span>
                        <Link to="/" className="cancel-link">취소</Link>
                    </div>
                </form>
            </div>
            <FooterComponent />
        </div>
    );
};

export default SignupPage;