import * as React from "react";
import styled from "styled-components";

function HeaderComponent(props) {
  return (
    <Div>
      <Div2>
        <Div3>로그인</Div3>
        <Div4>회원가입</Div4>
      </Div2>
    </Div>
  );
}

const Div = styled.div`
  margin: 0;
  justify-content: flex-end;
  align-items: end;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const Div2 = styled.div`
  display: flex;
  margin-right: 340px;
  width: 123px;
  max-width: 100%;
  gap: 0px;
  @media (max-width: 991px) {
    margin-right: 10px;
  }
`;

const Div3 = styled.div`
  justify-content: center;
  color: #000;
  letter-spacing: -0.56px;
  white-space: nowrap;
  border-left: 1px solid #ddd;
  aspect-ratio: 1.5714285714285714;
  padding: 12px 11px;
  font: 400 12px/280% NanumGothic, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div4 = styled.div`
  justify-content: center;
  color: #000;
  letter-spacing: -0.56px;
  white-space: nowrap;
  align-items: start;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
  aspect-ratio: 1.9428571428571428;
  padding: 12px 11px;
  font: 400 13px/278% NanumGothic, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export default HeaderComponent;
