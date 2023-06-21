import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const VPRightBarSubTopBarSubscriberWhite = ({ checkedSubscriber, setCheckedSubscriber }) => {
    return (
        <div className="VPRightBarSubTopBar_out_white d-flex">
            <div className={checkedSubscriber?"VPRightBarSubTopBar_1":"VPRightBarSubTopBar_1_1_white"} onClick={() => {setCheckedSubscriber(true)}}>
                My Subscribers
            </div>
            <div className={checkedSubscriber?"VPRightBarSubTopBar_2_white":"VPRightBarSubTopBar_2_1"} onClick={() => {setCheckedSubscriber(false)}}>
                My Subscriptions
            </div>
        </div>
    );
};
export default VPRightBarSubTopBarSubscriberWhite;