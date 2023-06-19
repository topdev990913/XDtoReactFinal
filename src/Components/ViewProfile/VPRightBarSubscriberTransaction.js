import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import VPSubTransactionCard from "./VPSubscriber/VPSubTransactionCard";
const VPRightBarSubscriberTransaction = ({ checkedSubscriber, setCheckedSubscriber }) => {
    return (
        <div className="VPRightBarSubscriber1_out">
            <div className="VPRightBarSubscriberTransaction_1">
                Transaction History
            </div>
            <VPSubTransactionCard />
            <VPSubTransactionCard />
            <VPSubTransactionCard />
            <VPSubTransactionCard />
            <VPSubTransactionCard />
            <VPSubTransactionCard />
        </div>
    );
};
export default VPRightBarSubscriberTransaction;