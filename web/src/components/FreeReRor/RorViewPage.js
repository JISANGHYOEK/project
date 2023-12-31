import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./RorView.css";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";

//상세보기 페이지

function getDate(time) {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = ("0" + (1 + date.getMonth())).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return year + "-" + month + "-" + day;
}

function RorViewPage() {
  const params = useParams();
  const [Ror, setRor] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://10000mr.com/api/Ror/" + params.id, {
        withCredentials: true,
      })
      .then((response) => {
        setRor(response.data);
        setLoading(false);
        console.log("Loading finished.");
        console.log(response.data);
        console.log(response.data.content);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (Ror.length < 1) return <></>;
  else {
    return (
      <div>
        <HeaderComponent />
        <h2 align="center">게시글 상세정보</h2>
        <div className="Ror-view-wrapper">
          <div className="Ror-view-row">
            <label>제목</label>
            <label>{Ror.title}</label>
          </div>
          <div className="Ror-view-row">
            <label>작성일</label>
            <label>{Ror.created_At}</label>{" "}
          </div>
          <div className="Ror-view-row">
            <label>내용</label>
            <div dangerouslySetInnerHTML={{ __html: Ror.content }}></div>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default RorViewPage;
