import React from "react";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";// CSS 파일 경로에 맞게 수정
import CscPageitem from "./CscPageitem";

function CscPage (){

  return (
    <div>
      <HeaderComponent />
      <CscPageitem />
      <FooterComponent />
    </div>
  );
};

export default CscPage;
