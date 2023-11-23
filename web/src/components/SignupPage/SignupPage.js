import React, { useState } from 'react';

const SignupPage2 = () => {
  // 입력 값 상태 관리
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        password: '',
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
        <button type="submit">가입하기</button>
        </form>
    );
};

export default SignupPage2;