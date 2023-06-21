import React from "react";
import "./VPSubscriber.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const VPSubTransactionCardWhite = ({ checkedSubscriber, setCheckedSubscriber }) => {
    return (
        <div className="VPSubTransactionCard_out_white">
            <div className="VPSubTransactionCard_1_white">
            New Subscription
            </div>
            <div className="VPSubTransactionCard_2_white">
            melih1905
            </div>
            <div className="VPSubTransactionCard_1_white">
            1 Month
            </div>
            <div className="VPSubTransactionCard_1_white">
            22.04.2023 - 16:38
            </div>
            <div className="VPSubTransactionCard_3_white">
            75.00<span className="VPSubTransactionCard_4">₺</span>
            </div>
        </div>
    );
};
export default VPSubTransactionCardWhite;
