import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import VPRightBarSub4Card_UK from "../../assets/indir_final.png";
import VPRightBarSub4Card_Italy from "../../assets/indir_italy_final.png";
import VPRightBarSub4Card_Turkey from "../../assets/Roundel_flag_of_Turkey.svg.png";
import VPRightBarSub4Card_Spain from "../../assets/indir (3).png";
import VPRightBarSub4Card_Germany from "../../assets/indir_German_final.png";
import VPRightBarSub4Card_France from "../../assets/indir (5).png";
import VPRightBarSub4Card_Poland from "../../assets/indir (6).png";
import VPRightBarSub4CardWhite from "./VPRightBarSub4CardWhite";
import VPRightBarSub4Card1White from "./VPRightBarSub4Card1White";
import VPRightBarSub4Card2White from "./VPRightBarSub4Card2White";
import VPRightBarSub4Card3White from "./VPRightBarSub4Card3White";
const VPRightBarSub4White = ({ checkedBall, setCheckedBall }) => {
    return (
        <div className="VPRigthBarSub4_out_white">
            <div className="d-flex justify-content-end">
                <div className={checkedBall ? "VPRigthBarSub4_1" : "VPRigthBarSub4_1_1_white"} onClick={() => { setCheckedBall(true) }}>
                    Football
                </div>
                <div className={checkedBall ? "VPRigthBarSub4_2_white" : "VPRigthBarSub4_2_1"} onClick={() => { setCheckedBall(false) }}>
                    Basketball
                </div>
            </div>
            <div className="VPRigthBarSub4_3_white">
                Comment Type
            </div>
            <div className="VPRigthBarSub4_4">
                <VPRightBarSub4CardWhite />
                <VPRightBarSub4Card1White />
                <VPRightBarSub4Card2White />
                <VPRightBarSub4Card3White />
            </div>
            <div className="VPRigthBarSub4_5_white">
                Comment Journey
            </div>
            <div className="d-flex justify-content-end">
                <div className="VPRigthBarSub4_6_white">
                    According to the last 30 comments
                </div>
                <div className="VPRigthBarSub4_7">
                    %62
                </div>
            </div>
            <div className="d-flex VPRigthBarSub4_8">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2206" data-name="Rectangle 2206" fill="#37ff80" stroke="#fff" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2196" data-name="Rectangle 2196" fill="#ff5757" stroke="#fff" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2187" data-name="Rectangle 2187" fill="#37ff80" stroke="#fff" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2190" data-name="Rectangle 2190" fill="#37ff80" stroke="#fff" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="16" viewBox="0 0 31 16">
                    <g id="Rectangle_2193" data-name="Rectangle 2193" fill="#37ff80" stroke="#fff" stroke-width="2">
                        <rect width="31" height="16" stroke="none" />
                        <rect x="1" y="1" width="29" height="14" fill="none" />
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2200" data-name="Rectangle 2200" fill="#ff5757" stroke="#fff" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="16" viewBox="0 0 31 16">
                    <g id="Rectangle_2203" data-name="Rectangle 2203" fill="#ff5757" stroke="#fff" stroke-width="2">
                        <rect width="31" height="16" stroke="none" />
                        <rect x="1" y="1" width="29" height="14" fill="none" />
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2185" data-name="Rectangle 2185" fill="#37ff80" stroke="#fff" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="16" viewBox="0 0 31 16">
                    <g id="Rectangle_2198" data-name="Rectangle 2198" fill="#ff5757" stroke="#fff" stroke-width="2">
                        <rect width="31" height="16" stroke="none" />
                        <rect x="1" y="1" width="29" height="14" fill="none" />
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2189" data-name="Rectangle 2189" fill="#37ff80" stroke="#fff" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2192" data-name="Rectangle 2192" fill="#37ff80" stroke="#fff" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2195" data-name="Rectangle 2195" fill="#37ff80" stroke="#fff" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2202" data-name="Rectangle 2202" fill="#ff5757" stroke="#fff" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2205" data-name="Rectangle 2205" fill="#ff5757" stroke="#fff" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2184" data-name="Rectangle 2184" fill="#37ff80" stroke="#fff" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2197" data-name="Rectangle 2197" fill="#ff5757" stroke="#fff" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2188" data-name="Rectangle 2188" fill="#37ff80" stroke="#fff" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2191" data-name="Rectangle 2191" fill="#37ff80" stroke="#fff" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2194" data-name="Rectangle 2194" fill="#37ff80" stroke="#fff" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2201" data-name="Rectangle 2201" fill="#ff5757" stroke="#fff" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2204" data-name="Rectangle 2204" fill="#ff5757" stroke="#fff" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2186" data-name="Rectangle 2186" fill="#f6f6f6" stroke="#fff" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2199" data-name="Rectangle 2199" fill="#f6f6f6" stroke="#fff" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>

            </div>
            <div className="VPRigthBarSub4_9_white">
                Leagues
            </div>
            <div className="VPRigthBarSub4_10">
                <div className="d-flex">
                    <img src={VPRightBarSub4Card_UK} alt="VPRightBarSub4Card_UK" className="VPRightBarSub4Card_UK" />
                    <div className="VPRigthBarSub4_11_white">
                        Premier League 28
                    </div>
                </div>
                <div className="d-flex">
                    <img src={VPRightBarSub4Card_Italy} alt="VPRightBarSub4Card_UK" className="VPRightBarSub4Card_UK" />
                    <div className="VPRigthBarSub4_12_white">
                        Seria A 28
                    </div>
                </div>
                <div className="d-flex">
                    <img src={VPRightBarSub4Card_Turkey} alt="VPRightBarSub4Card_UK" className="VPRightBarSub4Card_UK" />
                    <div className="VPRigthBarSub4_13_white">
                        Süper Lig 28
                    </div>
                </div>
                <div className="d-flex">
                    <img src={VPRightBarSub4Card_Spain} alt="VPRightBarSub4Card_UK" className="VPRightBarSub4Card_UK" />
                    <div className="VPRigthBarSub4_14_white">
                        La Liga 28
                    </div>
                </div>
            </div>
            <div className="VPRigthBarSub4_10_1">
                <div className="d-flex">
                    <img src={VPRightBarSub4Card_Germany} alt="VPRightBarSub4Card_UK" className="VPRightBarSub4Card_UK" />
                    <div className="VPRigthBarSub4_15_white">
                        Bundesliga 28
                    </div>
                </div>
                <div className="d-flex">
                    <img src={VPRightBarSub4Card_UK} alt="VPRightBarSub4Card_UK" className="VPRightBarSub4Card_UK" />
                    <div className="VPRigthBarSub4_11_white">
                        Championship 28
                    </div>
                </div>
                <div className="d-flex" style={{ marginLeft: "19px" }}>
                    <img src={VPRightBarSub4Card_Italy} alt="VPRightBarSub4Card_UK" className="VPRightBarSub4Card_UK" />
                    <div className="VPRigthBarSub4_12_white">
                        Seria B 28
                    </div>
                </div>
                <div className="d-flex" style={{ marginLeft: "44px" }}>
                    <img src={VPRightBarSub4Card_France} alt="VPRightBarSub4Card_UK" className="VPRightBarSub4Card_UK" />
                    <div className="VPRigthBarSub4_16_white">
                        League 1 28
                    </div>
                </div>
            </div>
            <div className="VPRigthBarSub4_17">
                <div className="d-flex">
                    <img src={VPRightBarSub4Card_Turkey} alt="VPRightBarSub4Card_UK" className="VPRightBarSub4Card_UK" />
                    <div className="VPRigthBarSub4_13_white">
                        PTT 1.Lig 28
                    </div>
                </div>
                <div className="d-flex">
                    <img src={VPRightBarSub4Card_Poland} alt="VPRightBarSub4Card_UK" className="VPRightBarSub4Card_UK" />
                    <div className="VPRigthBarSub4_18_white">
                        Ekstraklasa 28
                    </div>
                </div>
            </div>

        </div>
    );
};
export default VPRightBarSub4White;