import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import VPSubscriberCardWhite from "./VPSubscriber/VPSubscriberCardWhite";
import VPSubscriberCard1White from "./VPSubscriber/VPSubscriberCard1White";
import VPSubscriberCard2White from "./VPSubscriber/VPSubscriberCard2White";
const VPRightBarSubscriber1White = ({checkedSubscriber, setCheckedSubscriber}) => {
    return (
        <div className="VPRightBarSubscriber1_out_white">
            <VPSubscriberCardWhite />
            <VPSubscriberCard1White />
            <VPSubscriberCardWhite />
            <VPSubscriberCard2White />
            <VPSubscriberCardWhite />
            <VPSubscriberCard1White />
            <VPSubscriberCardWhite />
            <VPSubscriberCard2White />
        </div>
    );
};
export default VPRightBarSubscriber1White;