import React, { useState } from 'react';

const SignupPage = () => {
  // 입력 값 상태 관리
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [agreement, setAgreement] = useState(false);

    // 입력 값 변경 핸들러
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
        ...userInfo,
        [name]: value,
        });
    };

    // 약관 동의 핸들러
    const handleAgreementChange = () => {
        setAgreement(!agreement);
    };

    // 회원가입 제출 핸들러
    const handleSubmit = (e) => {
        e.preventDefault();
        if (agreement) {
        // 여기에 회원가입 로직 추가
        console.log('가입 정보:', userInfo);
        console.log('약관 동의:', agreement);
        // 회원가입 API 호출 또는 처리 로직 추가
        } else {
        alert('약관에 동의해주세요!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <label>
            아이디:
            <input
            type="text"
            name="username"
            value={userInfo.username}
            onChange={handleInputChange}
            />
        </label>
        <br />
        <label>
            이메일:
            <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
            />
        </label>
        <br />
        <label>
            비밀번호:
            <input
            type="password"
            name="password"
            value={userInfo.password}
            onChange={handleInputChange}
            />
        </label>
        <br />
        <label>
            <input
            type="checkbox"
            checked={agreement}
            onChange={handleAgreementChange}
            />
            약관에 동의합니다.
        </label>
        <br />
        <button type="submit">가입하기</button>
        </form>
    );
};

export default SignupPage;