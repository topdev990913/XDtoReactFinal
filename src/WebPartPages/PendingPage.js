import React from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import TopBar from "../Components/TopBar";
import SideBar from "../Components/SideBar";
import './WebPartPages.css';
import MyCommentsEditProfile from "../Components/ViewProfile/MyCommentsEditProfile";
import VPAbout from "../Components/ViewProfile/VPAbout";
import VPRightTopBar from "../Components/ViewProfile/VPRightTopBar";
import VPRigthBarSub2 from "../Components/ViewProfile/VPRightBarSub2";
import VPRigthBarSub3 from "../Components/ViewProfile/VPRightBarSub3";
import VPRightBarSubTopBarWallet from "../Components/ViewProfile/VPRightBarSubTopBarWallet";
import VPRightBarWalletTransactionPending from "../Components/ViewProfile/VPRightBarWalletTransactionPending";
const PendingPage = () => {   
    return (
        <>
            <TopBar />
            <div className="d-flex">
                <div className="SideBar_Home_out">
                    <SideBar />
                </div>
                <div className="ViewProfile_Mycomments_1">
                    <MyCommentsEditProfile />
                    <VPAbout />
                </div>
                <div className="ViewProfile_Mycomments_2">
                    <VPRightTopBar />
                    <div className="d-flex">
                        <div className="VP_RightBarSub1_out">
                            <VPRightBarSubTopBarWallet />
                            <VPRightBarWalletTransactionPending />
                        </div>
                        <div className="VP_RightBarSub2_out">
                            <VPRigthBarSub2 />
                            <VPRigthBarSub3 />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default PendingPage;
