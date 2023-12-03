import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderComponent from '../Header/Header';
import FooterComponent from '../Footer/Footer';
import FreeRePageitem from './FreeRePageitem';
import FreeReTable from './FreeReTable';
import { adminStore } from '../../store';
//글목록페이지

function FreeRePage() {
   const [data, setData] = useState([]);
   const { setAdmin } = adminStore();

   useEffect(() => {
      axios
         .get('/api/isAdmin', { withCredentials: true })
         .then(response => {
            setAdmin(true);
         })
         .catch(error => {
            console.error(error);
            setAdmin(false);
         });
   }, []);

   useEffect(() => {
      axios
         .get('api/FreeRe')
         .then(response => {
            setData(response.data);
         })
         .catch(error => {
            console.error('데이터를 가져오는 중 오류 발생:', error);
         });
   }, []);

   return (
      <div>
         <HeaderComponent />
         <FreeRePageitem FreeReDatas={data} />
         <FreeReTable FreeReDatas={data} />
         <FooterComponent />
      </div>
   );
}

export default FreeRePage;
