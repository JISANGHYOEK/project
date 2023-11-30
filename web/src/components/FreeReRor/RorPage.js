import React from "react";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import RorPageitem from "./RorPageitem";
import RorTable from "./RorTable";
//글목록페이지

function RorPage({ Rors }) {
  return (
    <div>
      <HeaderComponent />
      <RorPageitem Rors={Rors} />
      <RorTable Rors={Rors} />
      <FooterComponent />
    </div>
  );
}

export default RorPage;
