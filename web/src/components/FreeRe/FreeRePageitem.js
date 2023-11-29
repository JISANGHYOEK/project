import React, { useEffect, useState } from "react";
import axios from "axios";
import FreeReTable from "./FreeReTable";
import FreeReTableColumn from "./FreeReTableColumn";
import FreeReTableRow from "./FreeReTableRow";
import FreeReWriteHeader from "./FreeReWriteHeader";
import { Link } from "react-router-dom";

import "./FreeRe.css";

function FreeRePageitem() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://10000mr.com:8080/FreeRepage")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      });
  }, []);

  const item = Object.values(data).map((item) => (
    <FreeReTableRow key={item.id}>
      <FreeReTableColumn>{item.id}</FreeReTableColumn>
      <FreeReTableColumn>
        <Link to={`/FreeRePage/${item.id}`}>{item.title}</Link>
      </FreeReTableColumn>
      <FreeReTableColumn>{item.createAt}</FreeReTableColumn>
    </FreeReTableRow>
  ));

  return (
    <div className="form-container">
      <FreeReWriteHeader />
      {item}
    </div>
  );
}

export default FreeRePageitem;
