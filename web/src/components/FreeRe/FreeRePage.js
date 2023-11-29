import React from "react";
import MainHeaderComponent from "../Header/MainHeader";
import FooterComponent from "../Footer/Footer";
import './FreeRe.css'
import FreeRePageitem from "./FreeRePageitem";


function FreeRePage() {

    return(
        <div>
            <MainHeaderComponent />
            <FreeRePageitem />
            <FooterComponent />
        </div>
    );
}

export default FreeRePage;