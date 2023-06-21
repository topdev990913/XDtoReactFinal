import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import VPSubscriptionCardWhite from "./VPSubscriber/VPSubscriptionCardWhite";
import VPSubscriptionCard1White from "./VPSubscriber/VPSubscriptionCard1White";
const VPRightBarSubscriber2White = ({ checkedSubscriber, setCheckedSubscriber }) => {
    return (
        <div className="VPRightBarSubscriber1_out_white">
            <VPSubscriptionCardWhite />
            <VPSubscriptionCard1White />
            <VPSubscriptionCardWhite />
            <VPSubscriptionCard1White />
            <VPSubscriptionCard1White />
            <VPSubscriptionCardWhite />
            <VPSubscriptionCard1White />
        </div>
    );
};
export default VPRightBarSubscriber2White;