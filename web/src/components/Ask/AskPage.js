import React from "react";
// import MainHeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import AskPageitem from "./AskPageitem";
import HeaderComponent from "../Header/Header";

function AskPage() {
  return (
    <div>
      {/* <MainHeaderComponent /> */}
      <HeaderComponent />
      <AskPageitem />
      <FooterComponent />
    </div>
  );
}

export default AskPage;
