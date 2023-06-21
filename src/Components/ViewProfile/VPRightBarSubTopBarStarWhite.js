import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const VPRightBarSubTopBarStarWhite = ({ checkedCommentStar, setcheckedCommentStar }) => {
    console.log("checkedCommentStar", checkedCommentStar)
    return (
        <div className="VPRightBarSubTopBar_out_white d-flex">
            <div className="VPRightBarSubTopBar_1">
                My Subscriptions
            </div>
        </div>
    );
};
export default VPRightBarSubTopBarStarWhite;