import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './FreeReView.css';
import HeaderComponent from '../Header/Header';
import FooterComponent from '../Footer/Footer';
import FreeReWriteHeader from './FreeReWriteHeader';
//상세보기 페이지

function FreeReViewPage() {
   const params = useParams();
   const [Fre, setFre] = useState([]);

   useEffect(() => {
      axios
         .get('http://10000mr.com/api/FreeRe/' + params.id, { withCredentials: true })
         .then(response => {
            setFre(response.data);
         })
         .catch(error => {
            console.error(error);
         });
   }, []);

   if (Fre.length < 1) return <></>;

   return (
      <div>
         <HeaderComponent />
         <h2 align="center">게시글 상세정보</h2>
         <div className="FreeRe-view-wrapper">
            <div className="FreeRe-view-row">
               <label>제목</label>
               <label>{Fre[0].title}</label>
            </div>
            <div className="FreeRe-view-row">
               <label>작성일</label>
               <label>{Fre[0].created_At}</label> {/* createDate 대신 created_At로 수정합니다. */}
            </div>
            <div className="FreeRe-view-row">
               <label>내용</label>
               <div>{Fre[0].content}</div>
            </div>
         </div>
         <FooterComponent />
      </div>
   );
}

export default FreeReViewPage;
