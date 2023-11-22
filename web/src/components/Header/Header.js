import * as React from 'react';
import styled from 'styled-components';
import HeaderComponent2 from './HeaderList';
import { Link } from 'react-router-dom';


function HeaderComponent(props) {
   return (
      <>
         <Div2>
            <Div3><Link to = "/login">로그인</Link></Div3>
            <Div4><Link to = "/signup">회원가입</Link></Div4>
         </Div2>
         <Divheader>
            <Link to="/"> {/* LandingPage 경로 지정 */}
               <DivImg>
                  <Img loading="lazy" srcSet="mainimg.png" />
               </DivImg>
            </Link>
            <HeaderComponent2></HeaderComponent2>
         </Divheader>
      </>
   );
}

const Img = styled.img`
   aspect-ratio: 6.23;
   object-fit: contain;
   object-position: center;
   width: 45%;
   overflow: hidden;
   margin-top: 10px; /* 원하는 여백을 추가합니다 */
   margin-bottom: 10px; /* 원하는 여백을 추가합니다 */
`;

const Divheader = styled.div`
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   padding: 0 130px;
   
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
   padding: 2px 11px;
   font: 400 12px/280% NanumGothic, sans-serif;
   a {
      text-decoration: none; /* 밑줄 제거 */
      color: inherit; /* 상위 요소에서 상속한 색상 사용 */
      &:hover {
         color: #f00; /* 호버 상태일 때 색상 변경 */
      }
   }
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
   padding: 1px 11px;
   font: 400 13px/278% NanumGothic, sans-serif;
   a {
      text-decoration: none; /* 밑줄 제거 */
      color: inherit; /* 상위 요소에서 상속한 색상 사용 */
      &:hover {
         color: #f00; /* 호버 상태일 때 색상 변경 */
      }
   }
   
`;

export default HeaderComponent;
