import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import VPFavouriteCard from "./VPSubscriber/VPFavouriteCard";
const VPRigthBarFavourite2 = ({checkedViewProfileGo, setCheckedViewProfileGo}) => {
    return (
        <div className="VPRightBarSubscriber1_out">
            <VPFavouriteCard checkedViewProfileGo={checkedViewProfileGo} setCheckedViewProfileGo={setCheckedViewProfileGo} />
            <VPFavouriteCard checkedViewProfileGo={checkedViewProfileGo} setCheckedViewProfileGo={setCheckedViewProfileGo} />
            <VPFavouriteCard checkedViewProfileGo={checkedViewProfileGo} setCheckedViewProfileGo={setCheckedViewProfileGo} />
            <VPFavouriteCard checkedViewProfileGo={checkedViewProfileGo} setCheckedViewProfileGo={setCheckedViewProfileGo} />
            <VPFavouriteCard checkedViewProfileGo={checkedViewProfileGo} setCheckedViewProfileGo={setCheckedViewProfileGo} />
            <VPFavouriteCard checkedViewProfileGo={checkedViewProfileGo} setCheckedViewProfileGo={setCheckedViewProfileGo} />
            <VPFavouriteCard checkedViewProfileGo={checkedViewProfileGo} setCheckedViewProfileGo={setCheckedViewProfileGo} />
        </div>
    );
};
export default VPRigthBarFavourite2;