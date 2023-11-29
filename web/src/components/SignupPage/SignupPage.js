import React from "react";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import SignupPageitem from "./SignupPageitem";

function SignupPage() {

  return (
    <div>
      <HeaderComponent />
      <SignupPageitem />
      <FooterComponent />
    </div>
  );
};

export default SignupPage;
