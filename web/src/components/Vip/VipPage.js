import React from "react";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import './VipPage.css'
const VipPage = () =>{



    return(
        <div>
            <HeaderComponent/>
            <div className="container">
                <div className="form">
                <label className="label-title">미래투자 <span>V.I.P</span> 회원서비스 운영방식</label>
                <p className="vipt">V.I.P 서비스 안내 1</p>
                <p> 매매법을 개인에게 맞추어 만들어낸 특별한 VIP 시스템입니다.</p>

<p> 대한민국에서 이러한 방법으로 매매하는 곳은 오직 미래투자연구소뿐이며,
이 관리 시스템은 지난 20여년간의 주식 노하우가 집약되어 있는 시스템입니다.</p>

<p className="vipt">V.I.P 서비스 안내 2</p>
<p> 연 수익률 원금대비 50~200%를 기대치로 놓고 매매하는 LOW 리스크 HIGH 리턴 전략입니다.</p>

<p> 올려드린 전략표대로 매매가 진행될 시 시장의 상승/하락,
 그리고 종목에 대한 리스크를 줄이면서 수익을 누적시킬 수가 있습니다.</p>

<p className="vipt">V.I.P 서비스 안내 3</p>
<p> V.I.P 회원들은 이곳에 추천 되어지는 종목으로 포트폴리오를 구성하여 매매합니다.</p>

<p className="vipt">V.I.P 서비스 안내 4</p>
<p> 모든 V.I.P 추천종목들은 단기, 중기, 장기의 성향으로 구분되어져 있고 비중 또한 기록되어 있습니다.

비중과 기간을 본인의 자금에 맞추어 본인만의 포트폴리오를 구성하시길 바랍니다.</p>

<p className="vipt">V.I.P 서비스 안내 5</p>
<p>모든 V.I.P 추천종목들은 기본적으로 분할매수가 원칙입니다.

올려드린 표에 맞추어 매수한 종목이 있을 시 반드시 분할매수에 맞추어 진행하시길 바랍니다.</p>

<p className="vipt">V.I.P 서비스 안내 6</p>
<p>추천종목들의 전략에 맞추어 매매를 진행할 시 손절확률과 리스크 확률은 20% 이내입니다.

매매비중과 전략대로 매매할 시 손절확률과 리스크가 극도로 낮아지며,
이는 장기적으로 수익이 나는 필승매매법이 됩니다.</p>

<p className="vipt">V.I.P 서비스 안내 7</p>
<p>추천되어진 종목은 매수가 아래에서는 언제든 매수가 가능합니다.

단, 매수가 위에서는 절대 매수하지 마시고 다음 종목을 기다리세요.</p>

            </div>

        </div>
        <FooterComponent/>
    </div>
    );
}
export default VipPage;