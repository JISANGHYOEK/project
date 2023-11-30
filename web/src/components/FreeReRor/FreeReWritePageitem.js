import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RorWrite.css";

function RorWritePageitem() {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [stationId, setStationId] = useState("ST-4");

  //   useEffect(() => {
  //     axios
  //       .get("http://10000mr.com:8080/RorPage/RorWrtiePage")
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
        "http://10000mr.com:8080/RorPage/RorWritePage",
        {
          title: title,
          content: content,
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
    <div>
      <h2 align="center">게시글 작성</h2>
      <div className="Ror-view-wrapper">
        <div className="Ror-view-row">
          <label>제목</label>
          <input onChange={(event) => setTitle(event.target.value)}></input>
        </div>
        <div className="Ror-view-row">
          <label>내용</label>
          <textarea
            onChange={(event) => setContent(event.target.value)}
          ></textarea>
        </div>
        <button className="Ror-view-go-list-btn" onClick={HandleQuestionSubmit}>
          등록
        </button>
      </div>
    </div>
  );
}

export default RorWritePageitem;
