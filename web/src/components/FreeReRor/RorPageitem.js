import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import axios from "axios";
import { Rors } from "./RorData";
import RorTable from "./RorTable";
import "./Ror.css";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";

function RorPageitem({ Ror: propRor }) {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const Ror = propRor ? propRor : Rors.find((item) => item.id === Number(id));

  useEffect(() => {
    const sortedData = Rors.slice().sort((a, b) => {
      return new Date(b.createAt) - new Date(a.createAt);
    });
    setData(sortedData);
  }, []);

  if (!Ror) {
    return <div></div>;
  }

  // useEffect(() => {
  //   axios
  //     .get("http://10000mr.com:8080/Rorpage")
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
      <RorTable Rors={data} />
      <FooterComponent />
    </div>
  );
}

export default RorPageitem;
