import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function HeaderComponent2(props) {
  return (
    <Navigation>
      <StyledLink to="/VipPage">
      <NavItem>V.I.P 회원</NavItem>
      </StyledLink>
      <NavItem>무료 추천 종목</NavItem>
      <NavItem>무료 추천 종목 수익률</NavItem>
      <StyledLink to="/CscPage">
        <NavItem>고객 센터</NavItem>
      </StyledLink>
      <StyledLink to="/AskPage">
        <NavItem>
          문의하기
          <DropdownMenu>
            <Link to="/faq">문의 내역</Link>
          </DropdownMenu>
        </NavItem>
      </StyledLink>
    </Navigation>
  );
}

const DropdownMenu = styled.div`
  display: none;
  position: absolute
  top: 100%;
  left: 0;
  width: auto; // 수정된 코드
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  a {
    text-decoration: none;
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
    & > div {
      display: block;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default HeaderComponent2;
