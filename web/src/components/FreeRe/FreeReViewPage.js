import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './FreeReView.css';
import HeaderComponent from '../Header/Header';
import FooterComponent from '../Footer/Footer';
import FreeReWriteHeader from './FreeReWriteHeader';
//상세보기 페이지

function FreeReViewPage({}) {
   const [Fre, setFre] = useState();
   const { id } = useParams(); // 현재 URL에서 id 파라미터를 가져옵니다.

   const getFreeReview = async () => {
      const response = await axios.get(`api/FreeRe/${id}`); // 요청 URL에 id를 포함합니다.
      setFre(response.data);
   };

   useEffect(() => {
      getFreeReview();
   }, [id]); // id가 변경될 때마다 게시글 정보를 다시 불러옵니다.

   if (!Fre) return null; // 게시글 정보가 아직 없으면 아무것도 보여주지 않습니다.

   return (
      <div>
         <HeaderComponent />
         <h2 align="center">게시글 상세정보</h2>
         <div className="FreeRe-view-wrapper">
            <div className="FreeRe-view-row">
               <label>제목</label>
               <label>{Fre.title}</label>
            </div>
            <div className="FreeRe-view-row">
               <label>작성일</label>
               <label>{Fre.created_At}</label> {/* createDate 대신 created_At로 수정합니다. */}
            </div>
            <div className="FreeRe-view-row">
               <label>내용</label>
               <div>{Fre.content}</div>
            </div>
         </div>
         <FooterComponent />
      </div>
   );
}

export default FreeReViewPage;
