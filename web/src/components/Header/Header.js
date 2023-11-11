import * as React from 'react';
import styled from 'styled-components';
import HeaderComponent2 from './HeaderList';

function HeaderComponent(props) {
   return (
      <Divheader>
         <Div2>
            <Div3>로그인</Div3>
            <Div4>회원가입</Div4>
         </Div2>
         <DivImg>
            <Img loading="lazy" srcSet="mainimg.png" />
         </DivImg>
         <HeaderComponent2></HeaderComponent2>
      </Divheader>
   );
}

const Img = styled.img`
   aspect-ratio: 6.23;
   object-fit: contain;
   object-position: center;
   width: 45%;
   overflow: hidden;
`;

const Divheader = styled.div`
   margin: 0;
   display: flex;
   flex-direction: column;
   padding: 0 20px;
`;

const DivImg = styled.div`
   display: flex;
   justify-content: center;
   margin-bottom: 10px;
`;

const Div2 = styled.div`
   display: flex;
   justify-content: flex-end;

   margin-bottom: 10px;
   width: 100%;
   gap: 0px;
   border-bottom: 1px solid #ddd;
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
`;

const Div4 = styled.div`
   justify-content: center;
   color: #000;
   letter-spacing: -0.56px;
   white-space: nowrap;
   align-items: center;
   border-right: 1px solid #ddd;
   border-left: 1px solid #ddd;
   aspect-ratio: 1.9428571428571428;
   padding: 12px 11px;
   font: 400 13px/278% NanumGothic, sans-serif;
`;

export default HeaderComponent;
