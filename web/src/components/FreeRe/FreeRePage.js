import React from "react";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import FreeRePageitem from "./FreeRePageitem";
import FreeReTable from "./FreeReTable";
//글목록페이지

function FreeRePage({ FreeReDatas }) {
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
