import React from "react";
import MainHeaderComponent from "../Header/MainHeader";
import Sectioncomponent from "../Section/Section";
import FooterComponent from "../Footer/Footer";

function MainPage() {

    return(
        <div>
            <MainHeaderComponent />
            <Sectioncomponent />
            <FooterComponent />
        </div>
    );
}

export default MainPage;