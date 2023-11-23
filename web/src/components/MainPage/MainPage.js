import React from "react";
import MainHeaderComponent from "../Header/MainHeader";
import Sectioncomponent from "../Section/Section";
import FooterComponent from "../Footer/Footer";

const  MainPage = () =>{

    return(
        <div className="App">
            <MainHeaderComponent />
            <Sectioncomponent />
            <div className="Footer">
                <FooterComponent />
            </div>
        </div>
    );
}

export default MainPage;