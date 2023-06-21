import React, { useState } from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import TopBar from "../Components/TopBar";
import SideBar from "../Components/SideBar";
import './WebPartPages.css';
import MainTopBar from "../Components/MainTopBar";
import AdvertisementBanner from "../Components/AdvertisementBanner";
import LeftBarHighlight from "../Components/LeftBarHighlight";
import MainMiddleBar from "../Components/MainMiddleBar";
import MainBarEdit from "../Components/MainBar_Edit";
import MainBarComments from "../Components/MainBarComments";
import VPRigthBarSub2White from "../Components/ViewProfile/VPRightBarSub2White";
import VPRigthBarSub2 from "../Components/ViewProfile/VPRightBarSub2";
import VPRigthBarSub3 from "../Components/ViewProfile/VPRightBarSub3";
import VPRigthBarSub3White from "../Components/ViewProfile/VPRightBarSub3White";
import MyCommentsEditProfileStar from "../Components/ViewProfile/MyCommentsEditProfileStar";
import VPRightTopBarStar from "../Components/ViewProfile/VPRightTopBarStar";
import VPRightBarSubTopBarStar from "../Components/ViewProfile/VPRightBarSubTopBarStar";
import VPRightBarSubTopBarStar1 from "../Components/ViewProfile/VPRightBarSubTopBarStar1";
import VPRightBarSubTopBarFavourite from "../Components/ViewProfile/VPRightBarSubTopBarFavourite";
import VPRightBarSubscriber2 from "../Components/ViewProfile/VPRightBarSubscriber2";
import VPRightBarSubscriberTransaction from "../Components/ViewProfile/VPRightBarSubscriberTransaction";
import MyCommentsEditProfileStar1 from "../Components/ViewProfile/MyCommentsEditProfileStar1";
import VPRigthBarFavourite1 from "../Components/ViewProfile/VPRigthBarFavourite1";
import VPRigthBarFavourite2 from "../Components/ViewProfile/VPRigthBarFavourite2";
import TopBarWhite from "../Components/TopBarWhite";
import SideBarWhite from "../Components/SideBarWhite";
import MainTopBarWhite from "../Components/MainTopBarWhite";
import MainMiddleBarWhite from "../Components/MainMiddleBarWhite";
import AdvertisementBannerWhite from "../Components/AdvertisementBannerWhite";
import LeftBarHighlightWhite from "../Components/LeftBarHighlightWhite";
import MainBarEditWhite from "../Components/MainBarEditWhite";
import MainBarCommentsWhite from "../Components/MainBarCommentsWhite";
import MyCommentsEditProfileStarWhite from "../Components/ViewProfile/MyCommentsEditProfileStarWhite";
import MyCommentsEditProfileStar1White from "../Components/ViewProfile/MyCommentsEditProfileStar1White";
import VPRightTopBarStarWhite from "../Components/ViewProfile/VPRightTopBarStarWhite";
import VPRightBarSubTopBarStarWhite from "../Components/ViewProfile/VPRightBarSubTopBarStarWhite";
import VPRightBarSubTopBarFavouriteWhite from "../Components/ViewProfile/VPRightBarSubTopBarFavouriteWhite";
import VPRightBarSubscriber2White from "../Components/ViewProfile/VPRightBarSubscriber2White";
import VPRightBarSubscriberTransactionWhite from "../Components/ViewProfile/VPRightBarSubscriberTransactionWhite";
import VPRigthBarFavourite1White from "../Components/ViewProfile/VPRigthBarFavourite1White";
import VPRigthBarFavourite2White from "../Components/ViewProfile/VPRigthBarFavourite2White";
const Home = ({ checkedFavourite, setCheckedFavourite, checked, setChecked }) => {
    const [checkedCommentStar, setCheckedCommentStar] = useState(1)
    const [checkedForYou, setCheckedForYou] = useState(1);
    const [checkedMainOption, setCheckedMainOption] = useState(1)
    const displayCase = () => {
        if (checkedMainOption === 1) return <>
            <MainTopBar checkedForYou={checkedForYou} setCheckedForYou={setCheckedForYou} />
            <MainMiddleBar checkedForYou={checkedForYou} setCheckedForYou={setCheckedForYou} />
            <MainMiddleBar checkedForYou={checkedForYou} setCheckedForYou={setCheckedForYou} />
        </>
        if (checkedMainOption === 2) return <MainBarEdit />
        if (checkedMainOption === 3) return <MainBarComments />

    }
    const displayCaseWhite = () => {
        if (checkedMainOption === 1) return <>
            <MainTopBarWhite checkedForYou={checkedForYou} setCheckedForYou={setCheckedForYou} />
            <MainMiddleBarWhite checkedForYou={checkedForYou} setCheckedForYou={setCheckedForYou} />
            <MainMiddleBarWhite checkedForYou={checkedForYou} setCheckedForYou={setCheckedForYou} />
        </>
        if (checkedMainOption === 2) return <MainBarEditWhite />
        if (checkedMainOption === 3) return <MainBarCommentsWhite />

    }
    const displaystarsubtopbar = () => {
        if (checkedCommentStar === 1) return <VPRightBarSubTopBarStar />
        if (checkedCommentStar === 2) return <VPRightBarSubTopBarStar1 />
        if (checkedCommentStar === 3) return <VPRightBarSubTopBarFavourite checkedFavourite={checkedFavourite} setCheckedFavourite={setCheckedFavourite} />
    }
    const displaystarsubtopbarWhite = () => {
        if (checkedCommentStar === 1) return <VPRightBarSubTopBarStarWhite />
        if (checkedCommentStar === 2) return <VPRightBarSubTopBarStar1 />
        if (checkedCommentStar === 3) return <VPRightBarSubTopBarFavouriteWhite checkedFavourite={checkedFavourite} setCheckedFavourite={setCheckedFavourite} />
    }
    const displaysubtitle1 = () => {
        if (checkedCommentStar === 1) return <>
            <VPRightBarSubscriber2 />
        </>
        if (checkedCommentStar === 2) return <>
            <VPRightBarSubscriberTransaction />
        </>
        if (checkedCommentStar === 3 & checkedFavourite === true) return <>
            <VPRigthBarFavourite1 />
            <VPRigthBarFavourite1 />
        </>
        if (checkedCommentStar === 3 & checkedFavourite === false) return <>
            <VPRigthBarFavourite2 />
        </>
    }
    const displaysubtitle1White = () => {
        if (checkedCommentStar === 1) return <>
            <VPRightBarSubscriber2White />
        </>
        if (checkedCommentStar === 2) return <>
            <VPRightBarSubscriberTransactionWhite />
        </>
        if (checkedCommentStar === 3 & checkedFavourite === true) return <>
            <VPRigthBarFavourite1White />
            <VPRigthBarFavourite1White />
        </>
        if (checkedCommentStar === 3 & checkedFavourite === false) return <>
            <VPRigthBarFavourite2White />
        </>
    }
    const displaystar = () => {
        if (checkedMainOption === 4) return <>

            <div className="ViewProfile_Mycomments_1">
                {checkedCommentStar === 1 ?
                    <MyCommentsEditProfileStar />
                    :
                    <MyCommentsEditProfileStar1 />
                }
            </div>
            <div className="ViewProfile_Mycomments_2">
                <VPRightTopBarStar checkedCommentStar={checkedCommentStar} setCheckedCommentStar={setCheckedCommentStar} />
                <div className="d-flex">
                    <div className="VP_RightBarSub1_out">
                        {displaystarsubtopbar()}
                        {displaysubtitle1()}
                    </div>
                    <div className="VP_RightBarSub2_out">
                        <VPRigthBarSub2 />
                        <VPRigthBarSub3 />
                    </div>
                </div>
            </div>
        </>
        else return <>
            <div style={{ width: "calc(100% - 74px)" }}>
                <div className="row">
                    <div className="MainBar_out">
                        {displayCase()}
                    </div>
                    <div className="RightBar_out">
                        <AdvertisementBanner />
                        <LeftBarHighlight />
                    </div>
                </div>
            </div>
        </>
    }
    const displaystarWhite = () => {
        if (checkedMainOption === 4) return <>

            <div className="ViewProfile_Mycomments_1">
                {checkedCommentStar === 1 ?
                    <MyCommentsEditProfileStarWhite />
                    :
                    <MyCommentsEditProfileStar1White />
                }
            </div>
            <div className="ViewProfile_Mycomments_2">
                <VPRightTopBarStarWhite checkedCommentStar={checkedCommentStar} setCheckedCommentStar={setCheckedCommentStar} />
                <div className="d-flex">
                    <div className="VP_RightBarSub1_out">
                        {displaystarsubtopbarWhite()}
                        {displaysubtitle1White()}
                    </div>
                    <div className="VP_RightBarSub2_out">
                        <VPRigthBarSub2White />
                        <VPRigthBarSub3White />
                    </div>
                </div>
            </div>
        </>
        else return <>
            <div style={{ width: "calc(100% - 74px)" }}>
                <div className="row">
                    <div className="MainBar_out">
                        {displayCaseWhite()}
                    </div>
                    <div className="RightBar_out">
                        <AdvertisementBannerWhite />
                        <LeftBarHighlightWhite />
                    </div>
                </div>
            </div>
        </>
    }
    return (<>
        {checked ?
            <>
                <TopBarWhite checked={checked} setChecked={setChecked} />
                <div className="d-flex">
                    <div className="SideBar_Home_out">
                        <SideBarWhite checkedMainOption={checkedMainOption} setCheckedMainOption={setCheckedMainOption} />
                    </div>
                    {displaystarWhite()}
                </div>
            </>
            :
            <>
                <TopBar checked={checked} setChecked={setChecked} />
                <div className="d-flex">
                    <div className="SideBar_Home_out">
                        <SideBar checkedMainOption={checkedMainOption} setCheckedMainOption={setCheckedMainOption} />
                    </div>
                    {displaystar()}
                </div>
            </>
        }
    </>
    );
};
export default Home;
