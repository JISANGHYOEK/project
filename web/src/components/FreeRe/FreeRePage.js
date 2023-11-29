import React from "react";
import MainHeaderComponent from "../Header/MainHeader";
import FooterComponent from "../Footer/Footer";
import FreeRePageitem from "./FreeRePageitem";
import FreeReTable from "./FreeReTable";
//글목록페이지

function FreeRePage({ FreeReDatas }) {
  return (
    <div>
      <MainHeaderComponent />
      <FreeRePageitem FreeReDatas={FreeReDatas} />
      <FreeReTable FreeReDatas={FreeReDatas} />
      <FooterComponent />
    </div>
  );
}

export default FreeRePage;
