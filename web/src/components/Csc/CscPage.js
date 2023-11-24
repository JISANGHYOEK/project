import React from 'react';
import MainHeaderComponent from '../Header/Header';
import FooterComponent from '../Footer/Footer';
import './CscPage.css'; // CSS 파일 경로에 맞게 수정

const CscPage = () => {

    return(
        <div className="csc-container">
            <MainHeaderComponent />

            <div className="csc-content">
                <h1 className="csc-title">고객센터</h1>

                <p className="csc-description">
                    고객센터에 오신 것을 환영합니다. 문의 사항이 있으시면 아래 연락처로 연락 주시거나, 자주 묻는 질문을 확인해주세요.
                </p>

                <div className="csc-contact">
                    <h3>연락처</h3>
                    <p>전화번호: 123-456-7890</p>
                    <p>이메일: contact@example.com</p>
                </div>

                {/* 기타 고객센터 내용 추가 */}
            </div>

            <div className="Footer">
                <FooterComponent />
            </div>
        </div>
    );
}

export default CscPage;