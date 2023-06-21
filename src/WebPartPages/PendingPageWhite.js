import React from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './WebPartPages.css';
import VPRigthBarSub2White from "../Components/ViewProfile/VPRightBarSub2White";
import VPRigthBarSub3White from "../Components/ViewProfile/VPRightBarSub3White";
import TopBarWhite from "../Components/TopBarWhite";
import SideBarWhite from "../Components/SideBarWhite";
import MyCommentsEditProfileWhite from "../Components/ViewProfile/MyCommentsEditProfileWhite";
import VPAboutWhite from "../Components/ViewProfile/VPAboutWhite";
import VPRightTopBarWhite from "../Components/ViewProfile/VPRightTopBarWhite";
import VPRightBarSubTopBarWalletWhite from "../Components/ViewProfile/VPRightBarSubTopBarWalletWhite";
import VPRightBarWalletTransactionPendingWhite from "../Components/ViewProfile/VPRightBarWalletTransactionPendingWhite";
const PendingPageWhite = () => {   
    return (
        <>
            <TopBarWhite />
            <div className="d-flex">
                <div className="SideBar_Home_out">
                    <SideBarWhite />
                </div>
                <div className="ViewProfile_Mycomments_1">
                    <MyCommentsEditProfileWhite />
                    <VPAboutWhite />
                </div>
                <div className="ViewProfile_Mycomments_2">
                    <VPRightTopBarWhite />
                    <div className="d-flex">
                        <div className="VP_RightBarSub1_out">
                            <VPRightBarSubTopBarWalletWhite />
                            <VPRightBarWalletTransactionPendingWhite />
                        </div>
                        <div className="VP_RightBarSub2_out">
                            <VPRigthBarSub2White />
                            <VPRigthBarSub3White />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default PendingPageWhite;
