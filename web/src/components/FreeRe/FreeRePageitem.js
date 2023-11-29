import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import axios from "axios";
import { FreeReDatas } from "./FreeReData";
import FreeReTable from "./FreeReTable";
import "./FreeRe.css";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";

function FreeRePageitem({ FreeReData: propFreeReData }) {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const FreeReData = propFreeReData
    ? propFreeReData
    : FreeReDatas.find((item) => item.id === Number(id));

  useEffect(() => {
    const sortedData = FreeReDatas.slice().sort((a, b) => {
      return new Date(b.createAt) - new Date(a.createAt);
    });
    setData(sortedData);
  }, []);

  if (!FreeReData) {
    return <div></div>;
  }

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
    <div>
      <HeaderComponent />
      <FreeReTable FreeReDatas={data} />
      <FooterComponent />
    </div>
  );
}

export default FreeRePageitem;
