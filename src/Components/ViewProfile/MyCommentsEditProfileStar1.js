import React, {useState} from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import User_Profile_Blue_Logo from '../../assets/user-edit.png';
import User_Star_Logo from '../../assets/portrait-of-happy-and-cheerful-handsome-adult-man-2022-02-07-02-02-56-utc199.png';
const MyCommentsEditProfileStar1 = () => {
    const [checkedIcon, setCheckedIcon] = useState(true)
    const [checkedIcon1, setCheckedIcon1] = useState(true)
    const [checkedIcon2, setCheckedIcon2] = useState(true)
    return (
        <div className="VP_MC_EP_out_star">
            <div className="d-flex justify-content-end VP_MC_EP_out_star_1">
                <img src={User_Profile_Blue_Logo} alt="User_Profile_Blue_Logo" className="User_Profile_Blue_Logo" />
                <div className="VP_MC_EP_out_star_2_1">Edit Profile</div>
            </div>
            <div className="d-flex justify-content-center">
                <img src={User_Star_Logo} alt="User_Star_Logo" className="User_Star_Logo" />
            </div>
            <div className="VP_MC_EP_out_star_3">
                kingof35
            </div>
            <div className="VP_MC_EP_out_star_4">
                22.04.2022
            </div>
            <div className="d-flex VP_MC_EP_out_star_5">
                <div className="VP_MC_EP_out_star_0">
                    <div className="VP_MC_EP_out_star_6">
                        Subscriptions
                    </div>
                    <div className="VP_MC_EP_out_star_7">
                        1.369
                    </div>
                </div>
                <div className="VP_MC_EP_out_star_0">
                    <div className="VP_MC_EP_out_star_6">
                        Following
                    </div>
                    <div className="VP_MC_EP_out_star_7">
                        1.369
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center VP_MC_EP_out_star_101">
                <div className="d-flex align-items-center">
                    {checkedIcon ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="45.558" height="45.558" viewBox="0 0 45.558 45.558" onClick={() => { setCheckedIcon(false) }}>
                            <g id="heart" transform="translate(0)">
                                <path id="Path_307" data-name="Path 307" d="M0,0H45.558V45.558H0Z" transform="translate(0)" fill="none" />
                                <path id="Path_308" data-name="Path 308" d="M33.795,19.863,19.8,33.6,5.81,19.863a9.191,9.191,0,0,1-2.4-9.373A9.361,9.361,0,0,1,19.8,7.72a9.361,9.361,0,0,1,16.36,2.8,9.191,9.191,0,0,1-2.368,9.353" transform="translate(2.993 3.986)" fill="none" stroke="#ff5757" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            </g>
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="45.558" height="45.558" viewBox="0 0 45.558 45.558" onClick={() => { setCheckedIcon(true) }}>
                            <g id="heart" transform="translate(0)">
                                <path id="Path_307" data-name="Path 307" d="M0,0H45.558V45.558H0Z" transform="translate(0)" fill="none" />
                                <path id="Path_308" data-name="Path 308" d="M33.795,19.863,19.8,33.6,5.81,19.863a9.191,9.191,0,0,1-2.4-9.373A9.361,9.361,0,0,1,19.8,7.72a9.361,9.361,0,0,1,16.36,2.8,9.191,9.191,0,0,1-2.368,9.353" transform="translate(2.993 3.986)" fill="none" stroke="#E6E6E6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            </g>
                        </svg>
                    }
                    <div className="VP_MC_EP_out_star_100">
                        238
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    {checkedIcon1 ?
                        <svg id="star" xmlns="http://www.w3.org/2000/svg" width="39.863" height="39.864" viewBox="0 0 39.863 39.864" style={{ marginLeft: "21.68px" }} onClick={() => { setCheckedIcon1(false) }}>
                            <path id="Path_272" data-name="Path 272" d="M0,0H39.863V39.864H0Z" fill="none" />
                            <path id="Path_273" data-name="Path 273" d="M18.189,27.3,8.194,32.515,10.1,21.473l-8.1-7.819L13.18,12.048,18.178,2l5,10.046,11.173,1.607-8.1,7.819,1.909,11.042Z" transform="translate(1.741 1.737)" fill="none" stroke="#FFDD00" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </svg>
                        :
                        <svg id="star" xmlns="http://www.w3.org/2000/svg" width="39.863" height="39.864" viewBox="0 0 39.863 39.864" style={{ marginLeft: "21.68px" }} onClick={() => { setCheckedIcon1(true) }}>
                            <path id="Path_272" data-name="Path 272" d="M0,0H39.863V39.864H0Z" fill="none" />
                            <path id="Path_273" data-name="Path 273" d="M18.189,27.3,8.194,32.515,10.1,21.473l-8.1-7.819L13.18,12.048,18.178,2l5,10.046,11.173,1.607-8.1,7.819,1.909,11.042Z" transform="translate(1.741 1.737)" fill="none" stroke="#E6E6E6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </svg>
                    }
                    <div className="VP_MC_EP_out_star_100">
                        238
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    {checkedIcon2 ?
                        <svg id="clap-svgrepo-com" xmlns="http://www.w3.org/2000/svg" width="34.63" height="34.63" viewBox="0 0 34.63 34.63" style={{ marginLeft: "21.68px" }} onClick={() => { setCheckedIcon2(false) }}>
                            <path id="Path_450" data-name="Path 450" d="M262.15,23.2a.7.7,0,0,0-.8-1.137L259.607,23.3a.7.7,0,1,0,.8,1.137Z" transform="translate(-229.083 -19.459)" fill="#4dd5ff" />
                            <path id="Path_451" data-name="Path 451" d="M240.625,3.93a.7.7,0,0,0,.9-.407l.75-1.994a.7.7,0,0,0-1.3-.49l-.75,1.994A.7.7,0,0,0,240.625,3.93Z" transform="translate(-212.165 -0.587)" fill="#4dd5ff" />
                            <path id="Path_452" data-name="Path 452" d="M269.7,55.611h-.014l-2.13.018a.676.676,0,0,0-.682.687.7.7,0,0,0,.7.688h.014l2.13-.036a.689.689,0,0,0,.682-.7A.673.673,0,0,0,269.7,55.611Z" transform="translate(-235.763 -49.173)" fill="#4dd5ff" />
                            <path id="Path_453" data-name="Path 453" d="M29.631,18.652a2.91,2.91,0,0,0-1.231-.569c.03-.054.057-.109.083-.164l.281-.282a3,3,0,0,0,.264-3.973A2.94,2.94,0,0,0,27.3,12.6c.048-.089.091-.181.13-.273a2.988,2.988,0,0,0-.091-3.542,2.94,2.94,0,0,0-1.727-1.066,2.979,2.979,0,0,0-.259-3.267,2.956,2.956,0,0,0-4.28-.387,2.948,2.948,0,0,0-2.907-2.434h0a2.933,2.933,0,0,0-2.092.868L8.984,9.614l-.027-.95a2.943,2.943,0,0,0-5.884-.088L1.657,18.906.493,20.263a2.074,2.074,0,0,0,.107,2.8L2.329,24.8a2.075,2.075,0,0,0,.257,2.6l8.121,8.137a2.037,2.037,0,0,0,1.451.6,2.06,2.06,0,0,0,1.251-.426l1.7-1.306a16.043,16.043,0,0,0,5.347-2.612,41.556,41.556,0,0,0,5.4-4.66l4.037-4.051a2.98,2.98,0,0,0-.259-4.43Zm-7.7-13.469a1.56,1.56,0,0,1,2.329.138A1.6,1.6,0,0,1,24.1,7.43l-.72.722a2.936,2.936,0,0,0-.32.244,2.948,2.948,0,0,0-2.039-2.3ZM17.065,3.489a1.56,1.56,0,0,1,2.329.139,1.6,1.6,0,0,1-.156,2.109l-8.267,8.21L10.943,13a2.953,2.953,0,0,0-1.091-2.27ZM1.588,22.072a.659.659,0,0,1-.034-.894l1.432-1.67v0L4.469,8.687a1.544,1.544,0,1,1,3.088,0l.04,1.408a2.954,2.954,0,0,0-2.539,2.814L3.644,23.239l-.412.481Zm27.313.017L24.864,26.14c-3.448,3.46-7.052,6.237-10.218,6.929a.666.666,0,0,0-.265.122L12.557,34.6a.653.653,0,0,1-.861-.056L3.574,26.405a.659.659,0,0,1-.034-.894l1.431-1.67,0,0L6.456,13.02a1.544,1.544,0,1,1,3.088,0l.073,2.553a.717.717,0,0,0,.722.7.7.7,0,0,0,.5-.212l8.21-8.239a1.56,1.56,0,0,1,2.329.138,1.6,1.6,0,0,1-.156,2.109l-5.656,5.675a.756.756,0,0,0,0,1.067h0a.759.759,0,0,0,1.076,0l7.271-7.3a1.56,1.56,0,0,1,2.329.139,1.6,1.6,0,0,1-.156,2.109l-7.237,7.262a.767.767,0,0,0,0,1.082.749.749,0,0,0,1.062,0L25.6,14.4a1.56,1.56,0,0,1,2.329.139,1.6,1.6,0,0,1-.156,2.109L22.14,22.3a.784.784,0,0,0,0,1.106l.009.009a.719.719,0,0,0,1.019,0l3.494-3.506a1.638,1.638,0,0,1,1.156-.483,1.51,1.51,0,0,1,.945.326A1.573,1.573,0,0,1,28.9,22.089Z" transform="translate(0 -1.508)" fill="#4dd5ff" />
                        </svg>
                        :
                        <svg id="clap-svgrepo-com" xmlns="http://www.w3.org/2000/svg" width="34.63" height="34.63" viewBox="0 0 34.63 34.63" style={{ marginLeft: "21.68px" }} onClick={() => { setCheckedIcon2(true) }}>
                            <path id="Path_450" data-name="Path 450" d="M262.15,23.2a.7.7,0,0,0-.8-1.137L259.607,23.3a.7.7,0,1,0,.8,1.137Z" transform="translate(-229.083 -19.459)" fill="#E6E6E6" />
                            <path id="Path_451" data-name="Path 451" d="M240.625,3.93a.7.7,0,0,0,.9-.407l.75-1.994a.7.7,0,0,0-1.3-.49l-.75,1.994A.7.7,0,0,0,240.625,3.93Z" transform="translate(-212.165 -0.587)" fill="#E6E6E6" />
                            <path id="Path_452" data-name="Path 452" d="M269.7,55.611h-.014l-2.13.018a.676.676,0,0,0-.682.687.7.7,0,0,0,.7.688h.014l2.13-.036a.689.689,0,0,0,.682-.7A.673.673,0,0,0,269.7,55.611Z" transform="translate(-235.763 -49.173)" fill="#E6E6E6" />
                            <path id="Path_453" data-name="Path 453" d="M29.631,18.652a2.91,2.91,0,0,0-1.231-.569c.03-.054.057-.109.083-.164l.281-.282a3,3,0,0,0,.264-3.973A2.94,2.94,0,0,0,27.3,12.6c.048-.089.091-.181.13-.273a2.988,2.988,0,0,0-.091-3.542,2.94,2.94,0,0,0-1.727-1.066,2.979,2.979,0,0,0-.259-3.267,2.956,2.956,0,0,0-4.28-.387,2.948,2.948,0,0,0-2.907-2.434h0a2.933,2.933,0,0,0-2.092.868L8.984,9.614l-.027-.95a2.943,2.943,0,0,0-5.884-.088L1.657,18.906.493,20.263a2.074,2.074,0,0,0,.107,2.8L2.329,24.8a2.075,2.075,0,0,0,.257,2.6l8.121,8.137a2.037,2.037,0,0,0,1.451.6,2.06,2.06,0,0,0,1.251-.426l1.7-1.306a16.043,16.043,0,0,0,5.347-2.612,41.556,41.556,0,0,0,5.4-4.66l4.037-4.051a2.98,2.98,0,0,0-.259-4.43Zm-7.7-13.469a1.56,1.56,0,0,1,2.329.138A1.6,1.6,0,0,1,24.1,7.43l-.72.722a2.936,2.936,0,0,0-.32.244,2.948,2.948,0,0,0-2.039-2.3ZM17.065,3.489a1.56,1.56,0,0,1,2.329.139,1.6,1.6,0,0,1-.156,2.109l-8.267,8.21L10.943,13a2.953,2.953,0,0,0-1.091-2.27ZM1.588,22.072a.659.659,0,0,1-.034-.894l1.432-1.67v0L4.469,8.687a1.544,1.544,0,1,1,3.088,0l.04,1.408a2.954,2.954,0,0,0-2.539,2.814L3.644,23.239l-.412.481Zm27.313.017L24.864,26.14c-3.448,3.46-7.052,6.237-10.218,6.929a.666.666,0,0,0-.265.122L12.557,34.6a.653.653,0,0,1-.861-.056L3.574,26.405a.659.659,0,0,1-.034-.894l1.431-1.67,0,0L6.456,13.02a1.544,1.544,0,1,1,3.088,0l.073,2.553a.717.717,0,0,0,.722.7.7.7,0,0,0,.5-.212l8.21-8.239a1.56,1.56,0,0,1,2.329.138,1.6,1.6,0,0,1-.156,2.109l-5.656,5.675a.756.756,0,0,0,0,1.067h0a.759.759,0,0,0,1.076,0l7.271-7.3a1.56,1.56,0,0,1,2.329.139,1.6,1.6,0,0,1-.156,2.109l-7.237,7.262a.767.767,0,0,0,0,1.082.749.749,0,0,0,1.062,0L25.6,14.4a1.56,1.56,0,0,1,2.329.139,1.6,1.6,0,0,1-.156,2.109L22.14,22.3a.784.784,0,0,0,0,1.106l.009.009a.719.719,0,0,0,1.019,0l3.494-3.506a1.638,1.638,0,0,1,1.156-.483,1.51,1.51,0,0,1,.945.326A1.573,1.573,0,0,1,28.9,22.089Z" transform="translate(0 -1.508)" fill="#E6E6E6" />
                        </svg>
                    }
                    <div className="VP_MC_EP_out_star_100">
                        238
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MyCommentsEditProfileStar1;