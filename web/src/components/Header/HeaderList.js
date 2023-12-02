import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function HeaderComponent2(props) {
  return (
    <Navigation>
      <NavItem>
        <StyledLink to="/VipPage">V.I.P 회원</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/FreeRePage">무료 추천 종목</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/RorPage">무료 추천 종목 수익률</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/CscPage">고객 센터</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink>문의</StyledLink>
        <DropdownList>
          <DropdownItem to="/AskPage">문의 하기</DropdownItem>
          <DropdownItem to="/faq">문의 내역</DropdownItem>
        </DropdownList>
      </NavItem>
    </Navigation>
  );
}

const DropdownList = styled.div`
   display: none;
   position: absolute;
   left: -32px;
   width: 80px;
   padding: 10px;
   background-color: #f8f9fa;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #f03e3e;
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin: 0 50px;
  background-color: #f8f9fa;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const NavItem = styled.div`
  position: relative;
  font: 600 20px/123% Inter, sans-serif;
  color: #343a40;
  font-size: 18px;
  cursor: pointer;
  margin: 0 50px;
  transition: color 0.2s;

  &:hover {
    color: #f03e3e;
  }

  &:hover > div {
    display: block;
    color: black;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default HeaderComponent2;
