import React from "react";
import MainHeaderComponent from "../Header/MainHeader";
import FooterComponent from "../Footer/Footer";
import CscPageitem from "./CscPageitem";

const MainCscPage = () => {

  return (
    <div>
      <MainHeaderComponent />
      <CscPageitem/>
      <FooterComponent />
    </div>
  );
};

export default MainCscPage;
