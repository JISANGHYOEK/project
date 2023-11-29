import React from "react";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import LoginPageitem from "./LoginPageitem";

function LoginPage(){

  return (
    <div>
        <HeaderComponent />
        <LoginPageitem/>
        <FooterComponent />
    </div>
  );
};



export default LoginPage;
