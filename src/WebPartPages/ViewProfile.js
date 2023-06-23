import React, { useState } from "react";
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
import VPRightBarSubTopBar from "../Components/ViewProfile/VPRightBarSubTopBar";
import VPRigthBarSub1 from "../Components/ViewProfile/VPRigthBarSub1";
import VPRigthBarSub2 from "../Components/ViewProfile/VPRightBarSub2";
import VPRigthBarSub2White from "../Components/ViewProfile/VPRightBarSub2White";
import VPRigthBarSub3 from "../Components/ViewProfile/VPRightBarSub3";
import VPRigthBarSub3White from "../Components/ViewProfile/VPRightBarSub3White";
import VPRigthBarSub1Green from "../Components/ViewProfile/VPRigthBarSub1Green";
import VPRigthBarSub1Yellow from "../Components/ViewProfile/VPRigthBarSub1Yellow";
import VPRigthBarSub4 from "../Components/ViewProfile/VPRightBarSub4";
import VPRigthBarSub4White from "../Components/ViewProfile/VPRightBarSub4White";
import VPAbout1 from "../Components/ViewProfile/VPAbout1";
import VPRightBarSubTopBarSubscriber from "../Components/ViewProfile/VPRightBarSubTopBarSubscriber";
import VPRightBarSubscriber1 from "../Components/ViewProfile/VPRightBarSubscriber1";
import VPRightBarSubscriber2 from "../Components/ViewProfile/VPRightBarSubscriber2";
import VPRightBarSubTopBarWallet from "../Components/ViewProfile/VPRightBarSubTopBarWallet";
import VPRightBarWalletTransaction from "../Components/ViewProfile/VPRightBarWalletTransaction";
import VPRightBarWalletAccount from "../Components/ViewProfile/VPRightBarWalletAccount";
import VPRightBarSubTopBarFavourite from "../Components/ViewProfile/VPRightBarSubTopBarFavourite";
import VPRigthBarFavourite1 from "../Components/ViewProfile/VPRigthBarFavourite1";
import VPRigthBarFavourite2 from "../Components/ViewProfile/VPRigthBarFavourite2";
import TopBarWhite from "../Components/TopBarWhite";
import SideBarWhite from "../Components/SideBarWhite";
import MyCommentsEditProfileWhite from "../Components/ViewProfile/MyCommentsEditProfileWhite";
import VPAboutWhite from "../Components/ViewProfile/VPAboutWhite";
import VPAbout1White from "../Components/ViewProfile/VPAbout1White";
import VPRightTopBarWhite from "../Components/ViewProfile/VPRightTopBarWhite";
import VPRightBarSubTopBarWhite from "../Components/ViewProfile/VPRightBarSubTopBarWhite";
import VPRightBarSubTopBarSubscriberWhite from "../Components/ViewProfile/VPRightBarSubTopBarSubscriberWhite";
import VPRightBarSubTopBarWalletWhite from "../Components/ViewProfile/VPRightBarSubTopBarWalletWhite";
import VPRightBarSubTopBarFavouriteWhite from "../Components/ViewProfile/VPRightBarSubTopBarFavouriteWhite";
import VPRigthBarSub1White from "../Components/ViewProfile/VPRigthBarSub1White";
import VPRigthBarSub1GreenWhite from "../Components/ViewProfile/VPRigthBarSub1GreenWhite";
import VPRigthBarSub1YellowWhite from "../Components/ViewProfile/VPRigthBarSub1YellowWhite";
import VPRightBarSubscriber1White from "../Components/ViewProfile/VPRightBarSubscriber1White";
import VPRightBarSubscriber2White from "../Components/ViewProfile/VPRightBarSubscriber2White";
import VPRightBarWalletTransactionWhite from "../Components/ViewProfile/VPRightBarWalletTransactionWhite";
import VPRigthBarFavourite1White from "../Components/ViewProfile/VPRigthBarFavourite1White";
import VPRightBarWalletAccountWhite from "../Components/ViewProfile/VPRightBarWalletAccountWhite";
import VPRigthBarFavourite2White from "../Components/ViewProfile/VPRigthBarFavourite2White";
const ViewProfile = ({ checkedFavourite, setCheckedFavourite, checked, setChecked, checkedMainOption, setCheckedMainOption }) => {
    const [checkedWallet, setCheckedWallet] = useState(true)
    const [checkedSubscriber, setCheckedSubscriber] = useState(true);
    const [checkedComment, setCheckedComment] = useState(1);
    const [checkedBall, setCheckedBall] = useState(true);
    const [checkedSubComment, setCheckedSubComment] = useState(1);
    const displaySubComment = () => {
        if (checkedComment === 1 & checkedSubComment === 1) return <>
            <VPRigthBarSub1 checkedSubComment={checkedSubComment} setCheckedSubComment={setCheckedSubComment} />
            <VPRigthBarSub1 checkedSubComment={checkedSubComment} setCheckedSubComment={setCheckedSubComment} />
        </>
        if (checkedComment === 1 & checkedSubComment === 2) return <>
            <VPRigthBarSub1Green checkedSubComment={checkedSubComment} setCheckedSubComment={setCheckedSubComment} />
            <VPRigthBarSub1Yellow checkedSubComment={checkedSubComment} setCheckedSubComment={setCheckedSubComment} />
        </>
        if (checkedComment === 1 & checkedSubComment === 3) return <VPRigthBarSub4 checkedBall={checkedBall} setCheckedBall={setCheckedBall} />
        if (checkedComment === 2 & checkedSubscriber === true) return <VPRightBarSubscriber1 checkedComment={checkedComment} setCheckedComment={setCheckedComment} checkedSubscriber={checkedSubscriber} setCheckedSubscriber={setCheckedSubscriber} />
        if (checkedComment === 2 & checkedSubscriber === false) return <VPRightBarSubscriber2 checkedComment={checkedComment} setCheckedComment={setCheckedComment} checkedSubscriber={checkedSubscriber} setCheckedSubscriber={setCheckedSubscriber} />
        if (checkedComment === 3 & checkedWallet === true) return <VPRightBarWalletTransaction checkedComment={checkedComment} setCheckedComment={setCheckedComment} checkedWallet={checkedWallet} setCheckedWallet={setCheckedWallet} />
        if (checkedComment === 3 & checkedWallet === false) return <VPRightBarWalletAccount checkedComment={checkedComment} setCheckedComment={setCheckedComment} checkedWallet={checkedWallet} setCheckedWallet={setCheckedWallet} />
        if (checkedComment === 4 & checkedFavourite === true) return <>
            <VPRigthBarFavourite1 checkedComment={checkedComment} setCheckedComment={setCheckedComment} checkedFavourite={checkedFavourite} setCheckedFavourite={setCheckedFavourite} />
            <VPRigthBarFavourite1 checkedComment={checkedComment} setCheckedComment={setCheckedComment} checkedFavourite={checkedFavourite} setCheckedFavourite={setCheckedFavourite} />
        </>
        if (checkedComment === 4 & checkedFavourite === false) return <VPRigthBarFavourite2 checkedComment={checkedComment} setCheckedComment={setCheckedComment} checkedFavourite={checkedFavourite} setCheckedFavourite={setCheckedFavourite} />
    }
    const displaySubCommentwhite = () => {
        if (checkedComment === 1 & checkedSubComment === 1) return <>
            <VPRigthBarSub1White checkedSubComment={checkedSubComment} setCheckedSubComment={setCheckedSubComment} />
            <VPRigthBarSub1White checkedSubComment={checkedSubComment} setCheckedSubComment={setCheckedSubComment} />
        </>
        if (checkedComment === 1 & checkedSubComment === 2) return <>
            <VPRigthBarSub1GreenWhite checkedSubComment={checkedSubComment} setCheckedSubComment={setCheckedSubComment} />
            <VPRigthBarSub1YellowWhite checkedSubComment={checkedSubComment} setCheckedSubComment={setCheckedSubComment} />
        </>
        if (checkedComment === 1 & checkedSubComment === 3) return <VPRigthBarSub4White checkedBall={checkedBall} setCheckedBall={setCheckedBall} />
        if (checkedComment === 2 & checkedSubscriber === true) return <VPRightBarSubscriber1White checkedComment={checkedComment} setCheckedComment={setCheckedComment} checkedSubscriber={checkedSubscriber} setCheckedSubscriber={setCheckedSubscriber} />
        if (checkedComment === 2 & checkedSubscriber === false) return <VPRightBarSubscriber2White checkedComment={checkedComment} setCheckedComment={setCheckedComment} checkedSubscriber={checkedSubscriber} setCheckedSubscriber={setCheckedSubscriber} />
        if (checkedComment === 3 & checkedWallet === true) return <VPRightBarWalletTransactionWhite checkedComment={checkedComment} setCheckedComment={setCheckedComment} checkedWallet={checkedWallet} setCheckedWallet={setCheckedWallet} />
        if (checkedComment === 3 & checkedWallet === false) return <VPRightBarWalletAccountWhite checkedComment={checkedComment} setCheckedComment={setCheckedComment} checkedWallet={checkedWallet} setCheckedWallet={setCheckedWallet} />
        if (checkedComment === 4 & checkedFavourite === true) return <>
            <VPRigthBarFavourite1White checkedComment={checkedComment} setCheckedComment={setCheckedComment} checkedFavourite={checkedFavourite} setCheckedFavourite={setCheckedFavourite} />
            <VPRigthBarFavourite1White checkedComment={checkedComment} setCheckedComment={setCheckedComment} checkedFavourite={checkedFavourite} setCheckedFavourite={setCheckedFavourite} />
        </>
        if (checkedComment === 4 & checkedFavourite === false) return <VPRigthBarFavourite2White checkedComment={checkedComment} setCheckedComment={setCheckedComment} checkedFavourite={checkedFavourite} setCheckedFavourite={setCheckedFavourite} />
    }
    const displayCommentTopBar = () => {
        switch (checkedComment) {
            case 1: return <>
                <VPRightBarSubTopBar checkedSubComment={checkedSubComment} setCheckedSubComment={setCheckedSubComment} />
            </>
            case 2: return <>
                <VPRightBarSubTopBarSubscriber checkedSubscriber={checkedSubscriber} setCheckedSubscriber={setCheckedSubscriber} />
            </>
            case 3: return <>
                <VPRightBarSubTopBarWallet checkedWallet={checkedWallet} setCheckedWallet={setCheckedWallet} />
            </>
            case 4: return <>
                <VPRightBarSubTopBarFavourite checkedFavourite={checkedFavourite} setCheckedFavourite={setCheckedFavourite} />
            </>
            default: return <>
                <VPRightBarSubTopBar checkedSubComment={checkedSubComment} setCheckedSubComment={setCheckedSubComment} />
            </>
        }
    }
    const displayCommentTopBarwhite = () => {
        switch (checkedComment) {
            case 1: return <>
                <VPRightBarSubTopBarWhite checkedSubComment={checkedSubComment} setCheckedSubComment={setCheckedSubComment} />
            </>
            case 2: return <>
                <VPRightBarSubTopBarSubscriberWhite checkedSubscriber={checkedSubscriber} setCheckedSubscriber={setCheckedSubscriber} />
            </>
            case 3: return <>
                <VPRightBarSubTopBarWalletWhite checkedWallet={checkedWallet} setCheckedWallet={setCheckedWallet} />
            </>
            case 4: return <>
                <VPRightBarSubTopBarFavouriteWhite checkedFavourite={checkedFavourite} setCheckedFavourite={setCheckedFavourite} />
            </>
            default: return <>
                <VPRightBarSubTopBar checkedSubComment={checkedSubComment} setCheckedSubComment={setCheckedSubComment} />
            </>
        }
    }
    return (
        <>
            {checked ?
                <>
                    <TopBarWhite checked={checked} setChecked={setChecked}/>
                    <div className="d-flex">
                        <div className="SideBar_Home_out">
                            <SideBarWhite checkedMainOption={checkedMainOption} setCheckedMainOption={setCheckedMainOption}/>
                        </div>
                        <div className="ViewProfile_Mycomments_1">
                            {checkedSubComment === 3 && checkedBall === true ?
                                <>
                                    <MyCommentsEditProfileWhite checkedBall={checkedBall} setCheckedBall={setCheckedBall} checkedSubComment={checkedSubComment} setCheckedSubComment={setCheckedSubComment} />
                                    <VPAbout1White checkedBall={checkedBall} setCheckedBall={setCheckedBall} checkedSubComment={checkedSubComment} setCheckedSubComment={setCheckedSubComment} />
                                </>
                                :
                                <>
                                    <MyCommentsEditProfileWhite />
                                    <VPAboutWhite />
                                </>
                            }

                        </div>
                        <div className="ViewProfile_Mycomments_2">
                            <VPRightTopBarWhite checkedComment={checkedComment} setCheckedComment={setCheckedComment} />
                            <div className="d-flex">
                                <div className="VP_RightBarSub1_out">
                                    {displayCommentTopBarwhite()}
                                    {displaySubCommentwhite()}
                                </div>
                                <div className="VP_RightBarSub2_out">
                                    <VPRigthBarSub2White />
                                    <VPRigthBarSub3White />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                :
                <>
                    <TopBar checked={checked} setChecked={setChecked}/>
                    <div className="d-flex">
                        <div className="SideBar_Home_out">
                            <SideBar checkedMainOption={checkedMainOption} setCheckedMainOption={setCheckedMainOption}/>
                        </div>
                        <div className="ViewProfile_Mycomments_1">
                            {checkedSubComment === 3 && checkedBall === true ?
                                <>
                                    <MyCommentsEditProfile checkedBall={checkedBall} setCheckedBall={setCheckedBall} checkedSubComment={checkedSubComment} setCheckedSubComment={setCheckedSubComment} />
                                    <VPAbout1 checkedBall={checkedBall} setCheckedBall={setCheckedBall} checkedSubComment={checkedSubComment} setCheckedSubComment={setCheckedSubComment} />
                                </>
                                :
                                <>
                                    <MyCommentsEditProfile />
                                    <VPAbout />
                                </>
                            }

                        </div>
                        <div className="ViewProfile_Mycomments_2">
                            <VPRightTopBar checkedComment={checkedComment} setCheckedComment={setCheckedComment} />
                            <div className="d-flex">
                                <div className="VP_RightBarSub1_out">
                                    {displayCommentTopBar()}
                                    {displaySubComment()}
                                </div>
                                <div className="VP_RightBarSub2_out">
                                    <VPRigthBarSub2 />
                                    <VPRigthBarSub3 />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
};
export default ViewProfile;
