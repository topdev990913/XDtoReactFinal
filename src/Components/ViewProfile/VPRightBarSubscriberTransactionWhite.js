import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import VPSubTransactionCardWhite from "./VPSubscriber/VPSubTransactionCardWhite";
const VPRightBarSubscriberTransactionWhite = ({ checkedSubscriber, setCheckedSubscriber }) => {
    return (
        <div className="VPRightBarSubscriber1_out_white">
            <div className="VPRightBarSubscriberTransaction_1_white">
                Transaction History
            </div>
            <VPSubTransactionCardWhite />
            <VPSubTransactionCardWhite />
            <VPSubTransactionCardWhite />
            <VPSubTransactionCardWhite />
            <VPSubTransactionCardWhite />
            <VPSubTransactionCardWhite />
        </div>
    );
};
export default VPRightBarSubscriberTransactionWhite;