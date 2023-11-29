import React from "react";
import HeaderComponent from "../Header/Header";
import FooterComponent from '../Footer/Footer';
import TermsAgreeitem from "./TermsAgreeitem";

function TermsAgreePage() {
return (
    <div>
        <HeaderComponent />
        <TermsAgreeitem/>
        <FooterComponent/>
    </div>
);
}

export default TermsAgreePage;