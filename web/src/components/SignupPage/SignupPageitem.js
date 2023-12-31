import React, { useState }  from "react";
import './SignupPage.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ReCAPTCHA from 'react-google-recaptcha';

function SignupPageitem(){
    function onChange(value) {
        console.log('Captcha value:', value);
        }

        const navigate = useNavigate();
        // 입력 값 상태 관리
        const [userInfo, setUserInfo] = useState({
        UserID: "",
        Username: "",
        Password: "",
        confirmPassword: "",
        Email: "",
        PhoneNumber: "",
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

        // 모든 유효성 검사를 통과한 경우
        axios
            .post("http://10000mr.com:8080/api/signupPage", userInfo, {
            withCredentials: true
            })
            .then((response) => {
            if (response.status === 200) {
                alert("회원 가입이 성공적으로 완료되었습니다.");
                navigate("/login");
                return;
            } else if (response.status === 409) {
                alert("이미 사용 중인 아이디입니다.");
            } else if (response.status === 400) {
                alert("비밀번호가 일치하지 않습니다.");
            } else {
                alert("회원 가입에 실패했습니다. 다시.");
                
            }
            })
            .catch((error) => {
            console.error("There was an error!", error);
            alert("회원 가입에 실패했습니다. 다시 시도해주세요.");
            });
        };
    return(
        <div className="signup-page">
            <label className="signup-label1">미래투자 회원가입</label>
            <br />
            <form className="signup-form" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="Username">이름</label>
                    <input
                        type="text"
                        id="Username"
                        name="Username"
                        value={userInfo.Username}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="UserID">아이디</label>
                    <input
                        type="text"
                        id="UserID"
                        name="UserID"
                        value={userInfo.UserID}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="Email">이메일</label>
                    <input
                        type="email"
                        id="Email"
                        name="Email"
                        value={userInfo.Email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="Password">비밀번호</label>
                    <input
                        type="password"
                        id="Password"
                        name="Password"
                        value={userInfo.Password}
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
                    <label htmlFor="PhoneNumber">휴대폰번호</label>
                    <input
                        type="text"
                        id="PhoneNumber"
                        name="PhoneNumber"
                        value={userInfo.PhoneNumber}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-field">
                    <ReCAPTCHA
                        sitekey="6Le4JB4pAAAAAIqoYyHGLT-Be5RF-6QOanBePmMV"
                        onChange={onChange}
                    />
                </div>
                <div className="form-field">
                    <button className="signup-button" type="submit">
                        가입하기
                    </button>
                    <span className="signup-separator">|</span>
                    <Link to="/" className="cancel-link">
                        취소
                    </Link>
                </div>
            </form>
        </div>

    )
}

export default SignupPageitem;