import React from 'react';
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import TermsPageitem from './TermsPageitem';

function TermsPage() {

    return(
        <div className="App">
        <HeaderComponent />
        <TermsPageitem/>
        <FooterComponent/>
        </div>
    )
}

export default TermsPage;