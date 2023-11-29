import React from "react";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import VipPageitem from "./VipPageitem";

function VipPage() {
    return(
        <div>
            <HeaderComponent/>
            <VipPageitem />    
            <FooterComponent/>
    </div>
    );
}
export default VipPage;