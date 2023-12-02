import React from "react";
import MainHeaderComponent from "../Header/MainHeader";
import FooterComponent from "../Footer/Footer";
import CscPageitem from "./CscPageitem";
import HeaderComponent from "../Header/Header";

function MainCscPage() {
  return (
    <div>
      {/* <MainHeaderComponent /> */}
      <HeaderComponent />
      <CscPageitem />
      <FooterComponent />
    </div>
  );
}

export default MainCscPage;
