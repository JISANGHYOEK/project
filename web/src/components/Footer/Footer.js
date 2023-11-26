import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Footer.css";

function FooterComponent() {
  return (
    <FooterContainer>
      <FooterContent>
        <Link to="/TermsPage" className="FooterItemLink">
          <FooterItem>이용약관</FooterItem>
        </Link>
        <Link to="/PersonalPage" className="FooterItemLink">
          <FooterItem>개인정보 처리방침</FooterItem>
        </Link>
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
  margin-bottom: -20px; /* 여백 제거 */
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
