import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./RorView.css";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";

//상세보기 페이지

function RorViewPage() {
  const { RorId } = useParams();
  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState({});

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(
  //           `http://10000mr.com:8080/RorPage/${RorId}`
  //         );
  //         setQuestion(response.data.question);
  //         setAnswer(response.data.answer);
  //       } catch (error) {
  //         console.error("데이터를 가져오는 중 오류 발생:", error);
  //       }
  //     };

  //     fetchData();
  //   }, [RorId]);

  return (
    <div>
      <HeaderComponent />
      <h2 align="center">게시글 상세정보</h2>
      <div className="Ror-view-wrapper">
        <div className="Ror-view-row">
          <label>제목</label>
          <label>{question.title}</label>
        </div>
        <div className="Ror-view-row">
          <label>작성일</label>
          <label>{question.createDate}</label>
        </div>
        <div className="Ror-view-row">
          <label>내용</label>
          <div>{question.content}</div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default RorViewPage;