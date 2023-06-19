import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const VPRightBarSubTopBarStar1 = ({ checkedCommentStar, setcheckedCommentStar }) => {
    console.log("checkedCommentStar", checkedCommentStar)
    return (
        <div className="VPRightBarSubTopBar_out d-none">
            <div className="VPRightBarSubTopBar_1">
                My Subscriptions
            </div>
        </div>
    );
};
export default VPRightBarSubTopBarStar1;