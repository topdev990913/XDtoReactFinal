import React from "react";
import "./VPSubscriber.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const VPSubTransactionCard = ({ checkedSubscriber, setCheckedSubscriber }) => {
    return (
        <div className="VPSubTransactionCard_out">
            <div className="VPSubTransactionCard_1">
            New Subscription
            </div>
            <div className="VPSubTransactionCard_2">
            melih1905
            </div>
            <div className="VPSubTransactionCard_1">
            1 Month
            </div>
            <div className="VPSubTransactionCard_1">
            22.04.2023 - 16:38
            </div>
            <div className="VPSubTransactionCard_3">
            75.00<span className="VPSubTransactionCard_4">₺</span>
            </div>
        </div>
    );
};
export default VPSubTransactionCard;
