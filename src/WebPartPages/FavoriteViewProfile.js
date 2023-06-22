import React, { useState } from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import SideBar from "../Components/SideBar";
import './WebPartPages.css';
import VPAbout from "../Components/ViewProfile/VPAbout";
import VPRigthBarSub1 from "../Components/ViewProfile/VPRigthBarSub1";
import VPRigthBarSub2ViewProfileWhite from "../Components/ViewProfile/VPRightBarSub2ViewProfileWhite";
import VPRigthBarSub2ViewProfile from "../Components/ViewProfile/VPRightBarSub2ViewProfile";
import MyCommentsEditProfileViewProfile from "../Components/ViewProfile/MyCommentsEditProfileViewProfile";
import TopBarViewProfile from "../Components/TopBarViewProfile";
import VPRightTopBarViewProfile from "../Components/ViewProfile/VPRightTopBarViewProfile";
import VPRightBarSubTopBarViewProfile from "../Components/ViewProfile/VPRightBarSubTopBarViewProfile";
import VPRigthBarSub11 from "../Components/ViewProfile/VPRigthBarSub11";
import Sub3Logo from '../assets/mobil_banner_a2f8d.png';
import MyCommentsEditProfileViewProfile1 from "../Components/ViewProfile/MyCommentsEditProfileViewProfile1";
import VPRigthBarSub1Green from "../Components/ViewProfile/VPRigthBarSub1Green";
import VPRigthBarSub1Yellow from "../Components/ViewProfile/VPRigthBarSub1Yellow";
import VPRigthBarSub41 from "../Components/ViewProfile/VPRightBarSub41";
import VPRigthBarSub41White from "../Components/ViewProfile/VPRightBarSub41White";
import MyCommentsEditProfileViewProfile2 from "../Components/ViewProfile/MyCommentsEditProfileViewProfile2";
import TopBarViewProfileWhite from "../Components/TopBarViewProfileWhite";
import SideBarWhite from "../Components/SideBarWhite";
import MyCommentsEditProfileViewProfileWhite from "../Components/ViewProfile/MyCommentsEditProfileViewProfileWhite";
import MyCommentsEditProfileViewProfile1White from "../Components/ViewProfile/MyCommentsEditProfileViewProfile1White";
import MyCommentsEditProfileViewProfile2White from "../Components/ViewProfile/MyCommentsEditProfileViewProfile2White";
import VPAboutWhite from "../Components/ViewProfile/VPAboutWhite";
import VPRightTopBarViewProfileWhite from "../Components/ViewProfile/VPRightTopBarViewProfileWhite";
import VPRightBarSubTopBarViewProfileWhite from "../Components/ViewProfile/VPRightBarSubTopBarViewProfileWhite";
import VPRigthBarSub1White from "../Components/ViewProfile/VPRigthBarSub1White";
import VPRigthBarSub1GreenWhite from "../Components/ViewProfile/VPRigthBarSub1GreenWhite";
import VPRigthBarSub1YellowWhite from "../Components/ViewProfile/VPRigthBarSub1YellowWhite";
const FavoriteViewProfile = ({ checked, setChecked, checkedFavourite, setCheckedFavourite }) => {
    const [checkedVPball, setCheckedVpball] = useState(1);
    const [checkedVPSubTopBar, setCheckedVPSubTopBar] = useState(1);
    const displaycase = () => {
        if (checkedVPSubTopBar === 1) return <>
            <MyCommentsEditProfileViewProfile checkedVPSubTopBar={checkedVPSubTopBar} setCheckedVPSubTopBar={setCheckedVPSubTopBar} />
        </>
        if (checkedVPSubTopBar === 2) return <>
            <MyCommentsEditProfileViewProfile1 checkedVPball={checkedVPball} setCheckedVpball={setCheckedVpball} checkedVPSubTopBar={checkedVPSubTopBar} setCheckedVPSubTopBar={setCheckedVPSubTopBar} />
        </>
        if (checkedVPSubTopBar === 3) return <>
            <MyCommentsEditProfileViewProfile2 checkedVPball={checkedVPball} setCheckedVpball={setCheckedVpball} checkedVPSubTopBar={checkedVPSubTopBar} setCheckedVPSubTopBar={setCheckedVPSubTopBar} />
        </>
    }
    const displaycaseWhite = () => {
        if (checkedVPSubTopBar === 1) return <>
            <MyCommentsEditProfileViewProfileWhite checkedVPSubTopBar={checkedVPSubTopBar} setCheckedVPSubTopBar={setCheckedVPSubTopBar} />
        </>
        if (checkedVPSubTopBar === 2) return <>
            <MyCommentsEditProfileViewProfile1White checkedVPball={checkedVPball} setCheckedVpball={setCheckedVpball} checkedVPSubTopBar={checkedVPSubTopBar} setCheckedVPSubTopBar={setCheckedVPSubTopBar} />
        </>
        if (checkedVPSubTopBar === 3) return <>
            <MyCommentsEditProfileViewProfile2White checkedVPball={checkedVPball} setCheckedVpball={setCheckedVpball} checkedVPSubTopBar={checkedVPSubTopBar} setCheckedVPSubTopBar={setCheckedVPSubTopBar} />
        </>
    }
    const displaysubtitle = () => {
        if (checkedVPSubTopBar === 1) return <>
            <VPRigthBarSub1 />
            <VPRigthBarSub11 />
        </>
        if (checkedVPSubTopBar === 2) return <>
            <VPRigthBarSub1Green />
            <VPRigthBarSub1Yellow />
        </>
        if (checkedVPSubTopBar === 3) return <>
            <VPRigthBarSub41 checkedVPball={checkedVPball} setCheckedVpball={setCheckedVpball} />
        </>
    }
    const displaysubtitleWhite = () => {
        if (checkedVPSubTopBar === 1) return <>
            <VPRigthBarSub1White />
            <VPRigthBarSub1White />
        </>
        if (checkedVPSubTopBar === 2) return <>
            <VPRigthBarSub1GreenWhite />
            <VPRigthBarSub1YellowWhite />
        </>
        if (checkedVPSubTopBar === 3) return <>
            <VPRigthBarSub41White checkedVPball={checkedVPball} setCheckedVpball={setCheckedVpball} />
        </>
    }
    return (
        <>
            {checked ?
                <>
                    <TopBarViewProfileWhite checked={checked} setChecked={setChecked} />
                    <div className="d-flex">
                        <div className="SideBar_Home_out">
                            <SideBarWhite />
                        </div>
                        <div className="ViewProfile_Mycomments_1">
                            {displaycaseWhite()}
                            <VPAboutWhite />
                        </div>
                        <div className="ViewProfile_Mycomments_2">
                            <VPRightTopBarViewProfileWhite />
                            <div className="d-flex">
                                <div className="VP_RightBarSub1_out">
                                    <VPRightBarSubTopBarViewProfileWhite checkedVPSubTopBar={checkedVPSubTopBar} setCheckedVPSubTopBar={setCheckedVPSubTopBar} />
                                    {displaysubtitleWhite()}
                                </div>
                                <div className="VP_RightBarSub2_out">
                                    <VPRigthBarSub2ViewProfileWhite />
                                    <img src={Sub3Logo} alt="Sub3Logo" className="Sub3Logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                :
                <>
                    <TopBarViewProfile checked={checked} setChecked={setChecked}/>
                    <div className="d-flex">
                        <div className="SideBar_Home_out">
                            <SideBar />
                        </div>
                        <div className="ViewProfile_Mycomments_1">
                            {displaycase()}
                            <VPAbout />
                        </div>
                        <div className="ViewProfile_Mycomments_2">
                            <VPRightTopBarViewProfile />
                            <div className="d-flex">
                                <div className="VP_RightBarSub1_out">
                                    <VPRightBarSubTopBarViewProfile checkedVPSubTopBar={checkedVPSubTopBar} setCheckedVPSubTopBar={setCheckedVPSubTopBar} />
                                    {displaysubtitle()}
                                </div>
                                <div className="VP_RightBarSub2_out">
                                    <VPRigthBarSub2ViewProfile />
                                    <img src={Sub3Logo} alt="Sub3Logo" className="Sub3Logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
};
export default FavoriteViewProfile;
