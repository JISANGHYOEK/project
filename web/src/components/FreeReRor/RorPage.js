import React from 'react';
import { useState, useEffect } from 'react';
import HeaderComponent from '../Header/Header';
import FooterComponent from '../Footer/Footer';
import RorPageitem from './RorPageitem';
import RorTable from './RorTable';
import { adminStore } from '../../store';
import axios from 'axios';

function RorPage() {
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
         .get('api/Ror')
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
         <RorPageitem Rors={data} />
         <RorTable Rors={data} />
         <FooterComponent />
      </div>
   );
}

export default RorPage;
