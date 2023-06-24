import React, { useState } from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import TopBar from "../Components/TopBar";
import SideBar from "../Components/SideBar";
import './WebPartPages.css';
import MyCommentsEditProfileViewProfile2 from "../Components/ViewProfile/MyCommentsEditProfileViewProfile2";
import MyCommentsEditProfile from "../Components/ViewProfile/MyCommentsEditProfile";
import VPAbout from "../Components/ViewProfile/VPAbout";
import VPRightTopBar from "../Components/ViewProfile/VPRightTopBar";

import VPRigthBarSub2 from "../Components/ViewProfile/VPRightBarSub2";
import VPRigthBarSub2White from "../Components/ViewProfile/VPRightBarSub2White";
import VPRigthBarSub3 from "../Components/ViewProfile/VPRightBarSub3";
import VPRigthBarSub3White from "../Components/ViewProfile/VPRightBarSub3White";

import VPRigthBarSub4 from "../Components/ViewProfile/VPRightBarSub4";
import VPRigthBarSub4White from "../Components/ViewProfile/VPRightBarSub4White";
import VPAbout1 from "../Components/ViewProfile/VPAbout1";
import TopBarWhite from "../Components/TopBarWhite";
import SideBarWhite from "../Components/SideBarWhite";
import MyCommentsEditProfileWhite from "../Components/ViewProfile/MyCommentsEditProfileWhite";
import VPAboutWhite from "../Components/ViewProfile/VPAboutWhite";
import VPAbout1White from "../Components/ViewProfile/VPAbout1White";
import VPRightTopBarWhite from "../Components/ViewProfile/VPRightTopBarWhite";
import VPRightBarSubTopBar from "../Components/ViewProfile/VPRightBarSubTopBar";
import VPRightBarSubTopBarWhite from "../Components/ViewProfile/VPRightBarSubTopBarWhite";
import MyCommentsEditProfileViewProfile2White from "../Components/ViewProfile/MyCommentsEditProfileViewProfile2White";

const EditProfilePage = ({  checked, setChecked, checkedMainOption, setCheckedMainOption }) => {
    
    const [checkedComment, setCheckedComment] = useState(1);
    const [checkedBall, setCheckedBall] = useState(true);
    const [checkedSubComment, setCheckedSubComment] = useState(1);
    
    return (
        <>
            {checked ?
                <>
                    <TopBarWhite checked={checked} setChecked={setChecked} />
                    <div className="d-flex">
                        <div className="SideBar_Home_out">
                            <SideBarWhite checkedMainOption={checkedMainOption} setCheckedMainOption={setCheckedMainOption} />
                        </div>
                        <div className="ViewProfile_Mycomments_1">
                            {checkedBall === true ?
                                <>
                                    <MyCommentsEditProfileViewProfile2White checkedBall={checkedBall} setCheckedBall={setCheckedBall} checkedSubComment={checkedSubComment} setCheckedSubComment={setCheckedSubComment} />
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
                                    <VPRightBarSubTopBarWhite checkedSubComment={checkedSubComment} setCheckedSubComment={setCheckedSubComment} />
                                    <VPRigthBarSub4White checkedBall={checkedBall} setCheckedBall={setCheckedBall} />
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
                    <TopBar checked={checked} setChecked={setChecked} />
                    <div className="d-flex">
                        <div className="SideBar_Home_out">
                            <SideBar checkedMainOption={checkedMainOption} setCheckedMainOption={setCheckedMainOption} />
                        </div>
                        <div className="ViewProfile_Mycomments_1">
                            {checkedBall === true ?
                                <>
                                    <MyCommentsEditProfileViewProfile2 checkedBall={checkedBall} setCheckedBall={setCheckedBall} checkedSubComment={checkedSubComment} setCheckedSubComment={setCheckedSubComment} />
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
                                    <VPRightBarSubTopBar checkedSubComment={checkedSubComment} setCheckedSubComment={setCheckedSubComment} />
                                    <VPRigthBarSub4 checkedBall={checkedBall} setCheckedBall={setCheckedBall} />
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
export default EditProfilePage;
