import React from 'react';
import styled from 'styled-components';

function HeaderComponent2(props) {
   return (
      <Navigation>
         <NavItem>
            V.I.P 매매
            <DropdownMenu>
               <MenuItem>vip 추천 종목</MenuItem>
               <MenuItem>vip 매매 결산</MenuItem>
               <MenuItem>vip 회원 가격</MenuItem>
               <MenuItem>vip 특가 이벤트</MenuItem>
            </DropdownMenu>
         </NavItem>
         <NavItem>
            만랩 트레이더
            <DropdownMenu>
               <MenuItem>무료 프로그램 신청</MenuItem>
               <MenuItem>프로그램 가격</MenuItem>
               <MenuItem>프로그램 매매 결산</MenuItem>
            </DropdownMenu>
         </NavItem>
         {/* <NavItem>
            무료 추천 종목
            <DropdownMenu>
               <MenuItem>항목 1</MenuItem>
               <MenuItem>항목 2</MenuItem>
               <MenuItem>항목 3</MenuItem>
            </DropdownMenu>
         </NavItem> */}
         <NavItem>
            무료 추천 종목 수익률
            <DropdownMenu>
               <MenuItem>2023매매 수익 결산</MenuItem>
            </DropdownMenu>
         </NavItem>
         <NavItem>
            고객 센터
            <DropdownMenu>
               <MenuItem>공지사항</MenuItem>
               <MenuItem>Q&A</MenuItem>
            </DropdownMenu>
         </NavItem>
      </Navigation>
   );
}

const Navigation = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 10px 20px;
   margin: 0 50px; /* 좌우 여백을 조절합니다 */
   background-color: #f8f9fa;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const NavItem = styled.div`
   position: relative;
   font: 600 20px/123% Inter, sans-serif;
   color: #343a40;
   font-size: 18px;
   cursor: pointer;
   margin: 0 50px; /* 좌우 여백을 조절합니다 */
   transition: color 0.2s;

   &:hover {
      color: #f03e3e;
      & > div {
         display: block;
      }
   }
`;
const DropdownMenu = styled.div`
   display: none;
   position: absolute;
   top: 100%;
   left: 0;
   background-color: #fff;
   width: 200px; /* 원하는 너비로 조절 */
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const MenuItem = styled.div`
   padding: 5px 16px; /* 크기를 좀 더 작게 조절합니다 */
   color: #212529; /* 연한 색상으로 조절합니다 */
   width: 80px;
   text-align: center;
   white-space: nowrap; /* 글자가 길어질 경우 줄바꿈을 방지합니다 */
   font-weight: normal; /* 굵게 효과를 없앱니다 */
   font-size: 18px;
   &:hover {
      background-color: #f8f9fa;
   }
`;

export default HeaderComponent2;
