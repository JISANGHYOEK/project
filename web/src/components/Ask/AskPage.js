import React from 'react';
import MainHeaderComponent from '../Header/Header';
import FooterComponent from '../Footer/Footer';
import AskPageitem from './AskPageitem';

function AskPage (){
    
    return (
        <div>
        <MainHeaderComponent />
        <AskPageitem/>
        <FooterComponent />
        </div>

    );
}

export default AskPage;