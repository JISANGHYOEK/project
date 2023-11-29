import React from "react";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import FreeReWritePageitem from "./FreeReWritePageitem";

//관리자 무료추천 종목 글쓰기 페이지

function FreeReWritePage() {
  return (
    <div>
      <HeaderComponent />
      <FreeReWritePageitem />
      <FooterComponent />
    </div>
  );
}

export default FreeReWritePage;
