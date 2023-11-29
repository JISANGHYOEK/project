import React, { useEffect, useState } from "react";
import axios from "axios";

import "./FreeReWrite.css";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";

function FreeReWritePage() {
  const [category, setCategory] = useState({});
  const [categoryId, setCategoryId] = useState(1);
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [stationId, setStationId] = useState("ST-4");

  //   useEffect(() => {
  //     axios
  //       .get("http://10000mr.com:8080/FreeRePage/FreeReWrtiePage")
  //       .then((response) => {
  //         setCategory(response.data);
  //       });
  //   }, []);

  //   const categories = Object.values(category).map((item) => (
  //     <option key={item.id} value={item.id}>
  //       {item.displayName}
  //     </option>
  //   ));

  const HandleQuestionSubmit = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer cognito 의 access token",
    };

    try {
      const response = await axios.post(
        "http://10000mr.com:8080/FreeRePage/FreeReWritePage",
        {
          categoryId: categoryId,
          title: title,
          content: content,
          email: email,
          stationId: stationId,
        },
        { headers: headers }
      );

      console.log("status: " + response.status);
    } catch (error) {
      console.log("error: " + error);
    }
  };

  return (
    <>
      <HeaderComponent />
      <h2 align="center">게시글 작성</h2>
      <div className="FreeRe-view-wrapper">
        <div className="FreeRe-view-row">
          <label>문의 유형</label>
          <select
            onChange={(event) => setCategoryId(parseInt(event.target.value))}
          >
            {/* {categories} */}
          </select>
        </div>
        <div className="FreeRe-view-row">
          <label>email</label>
          <input onChange={(event) => setEmail(event.target.value)}></input>
        </div>
        <div className="FreeRe-view-row">
          <label>제목</label>
          <input onChange={(event) => setTitle(event.target.value)}></input>
        </div>
        <div className="FreeRe-view-row">
          <label>내용</label>
          <textarea
            onChange={(event) => setContent(event.target.value)}
          ></textarea>
        </div>
        <button
          className="FreeRe-view-go-list-btn"
          onClick={HandleQuestionSubmit}
        >
          등록
        </button>
        <FooterComponent />
      </div>
    </>
  );
}

export default FreeReWritePage;
