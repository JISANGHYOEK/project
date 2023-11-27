import React from "react";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import './VipPage.css'
const VipPage = () =>{



    return(
        <div>
            <HeaderComponent/>
            <div className="form">
                <label className="label-title">미래투자 V.I.P 회원서비스<br/>운영방식과 매매법에 관하여</label>

            </div>
            <FooterComponent/>
        </div>

    );
}
export default VipPage;