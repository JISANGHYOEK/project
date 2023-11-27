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
        tel: '',
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
        if (userInfo.username === '') {
            alert('아이디를 입력해주세요.');
            return;
        }
        else if (userInfo.email === '') {
            alert('이메일을 입력해주세요.');
            return;
        }
        else if (userInfo.password === '') {
            alert('비밀번호를 입력해주세요.');
            return;
        }
        else if (userInfo.tel === '') {
            alert('전화번호를 입력해주세요.');
            return;
        }
        if (userInfo.password !== userInfo.confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(userInfo.email)) {
            alert('올바른 이메일 형식이 아닙니다.');
            return;
        }
    };

    return (
        <div>
            <HeaderComponent />
            <div className="signup-page">
                <label className="signup-label1">미래투자 회원가입</label><br/>
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
                </form>
                <br/>
                <form className="signup-form" onSubmit={handleSubmit}>
                <div className="form-field">
                        <label htmlFor="tel">휴대폰번호</label>
                        <input
                            type="tel"
                            id="tel"
                            name="tel"
                            value={userInfo.tel}
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