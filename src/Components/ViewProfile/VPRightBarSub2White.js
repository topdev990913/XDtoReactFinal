import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import VPRightBarHighlightWhite from "./VPRightBarHighlightWhite";
import VPRightBarHighlight1White from "./VPRightBarHighlight1White";
import VPRightBarHighlight2White from "./VPRightBarHighlight2White";
const VPRightBarSub2White = () => {
    return (
        <div className="VPRigthBarSub2_out_white">
            <div className="VPRigthBarSub2_1_white">
                <span className="VPRigthBarSub2_2_white">21</span> New Notification
            </div>
            <VPRightBarHighlightWhite />
            <VPRightBarHighlight1White />
            <VPRightBarHighlight2White />
        </div>
    );
};
export default VPRightBarSub2White;