import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import TurkeyLogo from '../../assets/Roundel_flag_of_Turkey.svg1111.png';
import RightLogo from '../../assets/Path 501-white.png';
import MainMiddleBarFooter1White from "../MainMiddleBarFooter1White";
const VPRigthBarSub1White = () => {
    return (
        <div className="VPRigthBarSub1_out_white">
            <div className="VPRigthBarSub1_1_white">
                2012  yılından beri profesyonel olarak maçları takip ediyorum. Premier lig konusunda uzmanım.
                Yorumlarımı takip ettiğiniz için teşekkürler. 2012  yılından beri profesyonel olarak maçları takip
                ediyorum. Premier lig konusunda uzmanım. Yorumlarımı takip ettiğiniz için teşekkürler.
            </div>
            <div className="VPRigthBarSub1_2_white">
                <div className="d-flex">
                    <img src={TurkeyLogo} alt="TurkeyLogo" className="TurkeyLogo" />
                    <div className="VPRigthBarSub1_3_white">
                        Süper Lig
                    </div>
                </div>
                <div className="d-flex RightBar_VP">
                    <div className="VPRigthBarSub1_4_white">
                        Antalyaspor
                    </div>
                    <div className="VPRigthBarSub1_4_white" style={{ marginLeft: "133.1px" }}>
                        Başakşehir
                    </div>
                </div>
                <div className="VPRigthBarSub1_5">
                    <img src={RightLogo} alt="RightLogo" className="RightLogo" />
                    <div className="VPRigthBarSub1_6_white">
                        07.05.2023
                    </div>
                    <div className="VPRigthBarSub1_7_white">
                        14:30
                    </div>
                </div>
                <div className="d-flex justify-content-end" style={{marginTop: "25px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="262.29" height="43.773" viewBox="0 0 262.29 43.773">
                        <rect id="Rectangle_1306" data-name="Rectangle 1306" width="262.29" height="43.773" rx="6" fill="#FFFFFF" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="186" height="40" viewBox="0 0 186 27">
                            <text id="FT_-_Home_-_2.5_Over" data-name="FT - Home - 2.5 Over" transform="translate(0 22)" fill="#0D2A53" font-size="20" font-family="SegoeUI, Segoe UI"><tspan x="22" y="0">FT-Home-2.5 Over</tspan></text>
                        </svg>
                        <rect id="Rectangle_2376" data-name="Rectangle 2376" x="200" y="4" width="3" height="36" fill="#F6F6F6" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="460" height="40" viewBox="0 0 37 40">
                            <text id="_2.40" data-name="2.40" transform="translate(0 30)" fill="#0D2A53" font-size="20" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">2.40</tspan></text>
                        </svg>
                    </svg>
                </div>
            </div>
            <div style={{ marginTop: "-16px" }}>
                <MainMiddleBarFooter1White />
            </div>
        </div>
    );
};
export default VPRigthBarSub1White;