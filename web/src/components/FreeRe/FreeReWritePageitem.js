import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FreeReWrite.css';

function FreeReWritePageitem() {
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');
   // const [image_path, setImage_path] = useState("");

   const navigate = useNavigate();

   const handleTitleChange = e => {
      setTitle(e.target.value);
   };
   const handleContentChange = e => {
      setContent(e.target.value);
   };
   // const handImage_pathChange = (e) => {
   //   setImage_path(e.target.value);
   // };

   const handleSubmit = e => {
      // 폼이 제출되었을 때 할 작업들을 처리하는 함수
      // 여기에 제출된 데이터를 어딘가에 저장하거나 다른 동작을 수행할 수 있습니다.
      e.preventDefault();
      if (!title) {
         alert('제목을 입력해주세요.');
         return;
      }
      if (!content) {
         alert('내용을 입력해주세요.');
         return;
      }

      const data = {
         title: title,
         content: content,
         // image_path: image_path,
      };

      axios
         .post('http://10000mr.com:8080/api/FreeRe', data, {
            withCredentials: true,
         })
         .then(response => {
            console.log(response);
            navigate('/FreeRePage');
            alert('게시물이 게시되었습니다.');
         })
         .catch(error => {
            console.error(error);
            alert('에러가 발생하였습니다.');
         });
   };

   return (
      <div>
         <h2 align="center">게시글 작성</h2>
         <div className="FreeRe-view-wrapper">
            <div className="FreeRe-view-row">
               <label>제목</label>
               <input type="text" name="title" value={title} onChange={handleTitleChange} />
            </div>
            <div className="FreeRe-view-row">
               <label>내용</label>
               <textarea name="content" value={content} rows="4" cols="50" onChange={handleContentChange} />
            </div>
            <button className="FreeRe-view-go-list-btn" onClick={handleSubmit}>
               등록
            </button>
         </div>
      </div>
   );
}

export default FreeReWritePageitem;
