import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const VPRightBarSubTopBarViewProfileWhite = ({checkedVPSubTopBar, setCheckedVPSubTopBar}) => {
    return (
        <div className="VPRightBarSubTopBar_out_white d-flex">
                <div className={checkedVPSubTopBar === 1?"VPRightBarSubTopBar_1":"VPRightBarSubTopBar_1_uncomment_white"} onClick={() => {setCheckedVPSubTopBar(1)}}>
                    Active Comments
                </div>
                <div className={checkedVPSubTopBar === 2?"VPRightBarSubTopBar_2_uncomment":"VPRightBarSubTopBar_2_white"} onClick={() => {setCheckedVPSubTopBar(2)}}>
                    Resolved Comments
                </div>
                <div className={checkedVPSubTopBar === 3?"VPRightBarSubTopBar_2_uncomment":"VPRightBarSubTopBar_2_white"} onClick={() => {setCheckedVPSubTopBar(3)}}>
                    Statistics
                </div>
        </div>
    );
};
export default VPRightBarSubTopBarViewProfileWhite;