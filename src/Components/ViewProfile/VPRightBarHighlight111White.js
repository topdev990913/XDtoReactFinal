import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import RightBarhighlightLogo_back from '../../assets/couple-of-lovers-hugging-on-the-beach-party-on-sum-2021-08-26-17-31-01-utc1.png';
import RightBarhighlightLogo from '../../assets/Logo.png';
const VPRightBarHighlight111White = () => {
    return (
        <div className="VPRightBarHighlight_out_white">
            <img src={RightBarhighlightLogo_back} alt="RightBarhighlightLogo" className="RightBarhighlightLogo_back" />
            <img src={RightBarhighlightLogo} alt="RightBarhighlightLogo" className="RightBarhighlightLogo1" />
            <div className="VPRightBarHighlight_1" style={{ marginLeft: "70px", paddingTop: "10px" }}>
                <div className="d-flex display_highlight">
                    <div className="VPRightBarHighlight_2_win">
                        You're Win!
                    </div>
                    <div className="VPRightBarHighlight_3_white">
                        10 min ago
                    </div>
                </div>
                <div className="VPRightBarHighlight_4_1_white">
                    Your prediction for Liverpool - Manchester
                    Unitedwas correct.
                </div>
            </div>

        </div>
    );
};
export default VPRightBarHighlight111White;