import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import RightBarhighlightLogo from '../../assets/couple-of-lovers-hugging-on-the-beach-party-on-sum-2021-08-26-17-31-01-utc.png';
const VPRightBarHighlightWhite = () => {
    return (
        <div className="VPRightBarHighlight_out_white">
            <img src={RightBarhighlightLogo} alt="RightBarhighlightLogo" className="RightBarhighlightLogo" />
            <div className="VPRightBarHighlight_1">
                <div className="d-flex display_highlight">
                    <div className="VPRightBarHighlight_2_white">
                        ahmetvardar
                    </div>
                    <div className="VPRightBarHighlight_3_white">
                        10 min ago
                    </div>
                </div>
                <div className="VPRightBarHighlight_4_white">
                    liked the prediction Liverpool - Manchester
                    United
                </div>
            </div>

        </div>
    );
};
export default VPRightBarHighlightWhite;