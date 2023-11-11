import React from 'react';
import styled from 'styled-components';

function HeaderComponent2(props) {
   return (
      <Navigation>
         <NavItem>
            V.I.P 매매
            <DropdownMenu>
               <MenuItem>항목 1</MenuItem>
               <MenuItem>항목 2</MenuItem>
               <MenuItem>항목 3</MenuItem>
            </DropdownMenu>
         </NavItem>
         <NavItem>
            만랩 트레이더
            <DropdownMenu>
               <MenuItem>항목 1</MenuItem>
               <MenuItem>항목 2</MenuItem>
               <MenuItem>항목 3</MenuItem>
            </DropdownMenu>
         </NavItem>
         <NavItem>
            무료 추천 종목
            <DropdownMenu>
               <MenuItem>항목 1</MenuItem>
               <MenuItem>항목 2</MenuItem>
               <MenuItem>항목 3</MenuItem>
            </DropdownMenu>
         </NavItem>
         <NavItem>
            무료 추천 종목 수익률
            <DropdownMenu>
               <MenuItem>항목 1</MenuItem>
               <MenuItem>항목 2</MenuItem>
               <MenuItem>항목 3</MenuItem>
            </DropdownMenu>
         </NavItem>
         <NavItem>
            고객 센터
            <DropdownMenu>
               <MenuItem>항목 1</MenuItem>
               <MenuItem>항목 2</MenuItem>
               <MenuItem>항목 3</MenuItem>
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
   background-color: #f8f9fa;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const NavItem = styled.div`
   position: relative;
   font: 600 20px/123% Inter, sans-serif;
   color: #343a40;
   font-size: 18px;
   cursor: pointer;
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
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const MenuItem = styled.div`
   padding: 10px 20px;
   color: #343a40;
   width: 80px;
   text-align: center;

   &:hover {
      background-color: #f8f9fa;
   }
`;

export default HeaderComponent2;
