import React, { useEffect, useState } from "react";
// import axios from "axios";
import FreeReTableColumn from "./FreeReTableColumn";
import { Link } from "react-router-dom";

import "./FreeRe.css";

function FreeRePageitem() {
  const [data, setData] = useState([]);

  const temporaryData = [
    {id:1, title: "임시 제목 1", createAt: "2023-11-29" },
    {id:2, title: "임시 제목 2", createAt: "2023-11-30" },
    {id:3, title: "임시 제목 3", createAt: "2023-11-31" }
    // 추가적인 임시 데이터
  ];

  
  useEffect(() => {
    // Axios 요청 대신 임시 데이터 사용
    setData(temporaryData);
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://10000mr.com:8080/FreeRepage")
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("데이터를 가져오는 중 오류 발생:", error);
  //     });
  // }, []);

  return (
<div className="container">
      <div className="header">
        <h1 className="title">미래투자 무료추천종목</h1>
      </div>
      <div className="item-list">
        {data.map((item) => (
          <div key={item.id} className="item">
            <div className="item-content">
              <FreeReTableColumn>
                <Link to={`/FreeRePage/id=${item.id}`}>{item.title}</Link>
                <span className="item-date">{item.createAt}</span>
              </FreeReTableColumn>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FreeRePageitem;
