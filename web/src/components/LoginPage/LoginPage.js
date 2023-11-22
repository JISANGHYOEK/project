import React, { useState } from 'react';
import './LoginPage.css';
import HeaderComponent from "../Header/Header";
import FooterComponent from '../Footer/Footer';

const LoginPage = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // 로그인 처리 로직을 추가하세요 (예: 서버로 요청을 보내거나 상태를 변경하여 로그인 여부 판단 등)
        console.log('Email:', email);
        console.log('Password:', password);
        // 이후 로그인 성공 시 다음 단계로 넘어갈 수 있습니다.
    };
    
    return (
        <div className="Header">
        <HeaderComponent/>
            <div className="login-page">
                <div className="login-form"> 
                    <form onSubmit={handleLogin}>
                        <div>
                            <input type="email" value={email} onChange={handleEmailChange} placeholder='아이디' />
                        </div>
                        <div>
                            <input type="password" value={password} onChange={handlePasswordChange} placeholder='비밀번호'/>
                        </div>
                        <div>
                            <button type="submit">로그인</button>
                        </div>
                    </form>
                </div>
            </div>
        <FooterComponent/>
        </div>
    );
};

export default LoginPage;
