import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import FreeRePageitem from "./FreeRePageitem";
import FreeReTable from "./FreeReTable";
import { adminStore } from "../../store";
//글목록페이지

function FreeRePage({ FreeReDatas }) {
  const [data, setData] = useState([]);
  const { setAdmin } = adminStore();

  useEffect(() => {
    axios
      .get("/api/isAdmin", { withCredentials: true })
      .then((response) => {
        setAdmin(true);
      })
      .catch((error) => {
        console.error(error);
        setAdmin(false);
      });
  }, []);

  return (
    <div>
      <HeaderComponent />
      <FreeRePageitem FreeReDatas={FreeReDatas} />
      <FreeReTable FreeReDatas={FreeReDatas} />
      <FooterComponent />
    </div>
  );
}

export default FreeRePage;
