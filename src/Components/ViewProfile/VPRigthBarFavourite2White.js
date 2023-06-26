import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import VPFavouriteCardWhite from "./VPSubscriber/VPFavouriteCardWhite";
const VPRigthBarFavourite2White = ({checkedViewProfileGo, setCheckedViewProfileGo}) => {
    return (
        <div className="VPRightBarSubscriber1_out_white">
            <VPFavouriteCardWhite checkedViewProfileGo={checkedViewProfileGo} setCheckedViewProfileGo={setCheckedViewProfileGo} />
            <VPFavouriteCardWhite checkedViewProfileGo={checkedViewProfileGo} setCheckedViewProfileGo={setCheckedViewProfileGo} />
            <VPFavouriteCardWhite checkedViewProfileGo={checkedViewProfileGo} setCheckedViewProfileGo={setCheckedViewProfileGo} />
            <VPFavouriteCardWhite checkedViewProfileGo={checkedViewProfileGo} setCheckedViewProfileGo={setCheckedViewProfileGo} />
            <VPFavouriteCardWhite checkedViewProfileGo={checkedViewProfileGo} setCheckedViewProfileGo={setCheckedViewProfileGo} />
            <VPFavouriteCardWhite checkedViewProfileGo={checkedViewProfileGo} setCheckedViewProfileGo={setCheckedViewProfileGo} />
            <VPFavouriteCardWhite checkedViewProfileGo={checkedViewProfileGo} setCheckedViewProfileGo={setCheckedViewProfileGo} />
        </div>
    );
};
export default VPRigthBarFavourite2White;