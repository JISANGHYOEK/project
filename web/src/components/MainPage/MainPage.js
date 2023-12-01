import React from "react";
// import MainHeaderComponent from "../Header/MainHeader";
import Sectioncomponent from "../Section/Section";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";

function MainPage() {
  return (
    <div>
      {/* <MainHeaderComponent /> */}
      <HeaderComponent />
      <Sectioncomponent />
      <FooterComponent />
    </div>
  );
}

export default MainPage;
