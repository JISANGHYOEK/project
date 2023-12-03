import React from "react";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import RorPageitem from "./RorPageitem";
import RorTable from "./RorTable";
import { useState, useEffect } from "react";
import { adminStore } from "../../store";
import axios from "axios";
//글목록페이지

function RorPage({ Rors }) {
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
      <RorPageitem Rors={Rors} />
      <RorTable Rors={Rors} />
      <FooterComponent />
    </div>
  );
}

export default RorPage;
