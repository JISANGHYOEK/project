import React from 'react';
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import PersonalPageitem from './PersonalPageitem';

function TermsPage (){

    return(
        <div className="App">
        <HeaderComponent />
        <PersonalPageitem/>
        <FooterComponent/>
        </div>
    )
}

export default TermsPage;