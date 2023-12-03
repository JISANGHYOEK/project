import React from 'react';
import { Link } from 'react-router-dom';
import './RorWrite.css';

function RorWriteHeader(props) {
   const { headersName, children } = props;

   return (
      <div className="Ror-header">
         <Link to="/RorPage/RorWritePage">
            <button align="right" className="Ror-view-go-list-btn">
               게시글 작성
            </button>
         </Link>
      </div>
   );
}

export default RorWriteHeader;
