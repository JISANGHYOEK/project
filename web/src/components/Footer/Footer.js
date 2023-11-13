import React from 'react';
import styled from 'styled-components';

function FooterComponent() {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterItem>이용약관</FooterItem>
                <FooterItem>개인정보 처리방침</FooterItem>
                <FooterItem>문의하기</FooterItem>
            </FooterContent>
        <Copyright>&copy; 2023 만랩파트너스</Copyright>
        </FooterContainer>
        );
}

const FooterContainer = styled.div`
    background-color: #f0f0f0;
    padding: 20px 0;
    text-align: center;
    `;

    const FooterContent = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    `;

    const FooterItem = styled.div`
    color: #555;
    font-size: 14px;
    cursor: pointer;
    `;

    const Copyright = styled.div`
    margin-top: 10px;
    color: #888;
    font-size: 12px;
    `;
    
export default FooterComponent;