import React from "react";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import RorWritePageitem from "./RorWritePageitem";

//관리자 무료추천 종목 글쓰기 페이지

function RorWritePage() {
  return (
    <div>
      <HeaderComponent />
      <RorWritePageitem />
      <FooterComponent />
    </div>
  );
}

export default RorWritePage;
