import React from "react";
import MainHeaderComponent from "../Header/MainHeader";
import FooterComponent from "../Footer/Footer";
import FreeRePageitem from "./FreeRePageitem";

//글목록페이지

function FreeRePage() {
  return (
    <div>
      <MainHeaderComponent />
      <FreeRePageitem />
      <FooterComponent />
    </div>
  );
}

export default FreeRePage;
