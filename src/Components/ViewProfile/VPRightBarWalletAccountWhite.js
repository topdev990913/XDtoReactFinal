import React, {useState} from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Button } from "reactstrap";
import CrownLogo from '../../assets/Path - crown-circle-outline.png'
import Logo1 from '../../assets/Path 205.png';
import Logo2 from '../../assets/Path 206.png';
import Modal from 'react-bootstrap/Modal';
import CheckLogo from '../../assets/Path - check-decagram.png';
import ModalRenew1White from "../ModalRenew1White";
// import { MDBRange } from "mdb-react-ui-kit";
const VPRightBarWalletAccountWhite = ({ checkedWallet, setCheckedWallet }) => {
    const [show1, setShow1] = useState(false);
    const handleShow1 = () => setShow1(true);
    const handleClose1 = () => setShow1(false);
    return (
        <div className="VPRightBarWallet_out_white">
            <div className="d-flex">
                <div className="VPRightBarWalletAccount_1_white">
                    <Button type="submit" className="Journeyman_button" outline>Journeyman</Button>
                    <img src={CrownLogo} alt="CrownLogo" className="CrownLogo" />
                    <div className="d-flex">
                        <div className="VPRightBarWalletAccount_3_white">
                            Account Status
                        </div>
                        <div className="VPRightBarWalletAccount_4">
                            Active
                        </div>
                    </div>
                </div>

                <div className="VPRightBarWalletAccount_2_white">
                    <div className="d-flex">
                        <div className="VPRightBarWalletAccount_5">
                            Journeyman
                        </div>
                        <div className="VPRightBarWalletAccount_6_white">
                            Earnings Plan
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="VPRightBarWalletAccount_7">
                            <div className="VPRightBarWalletAccount_8_white">
                                1 Month Subscription
                            </div>
                            <div className="VPRightBarWalletAccount_9_white">
                                49.90<span className="VPRightBarWalletAccount_10_white">₺</span>
                            </div>
                            <div className="VPRightBarWalletAccount_8_white">
                                6 Month Subscription
                            </div>
                            <div className="VPRightBarWalletAccount_9_white">
                                229.90<span className="VPRightBarWalletAccount_10_white">₺</span>
                            </div>
                            <div className="VPRightBarWalletAccount_11_white">
                                Commission Rate<span className="VPRightBarWalletAccount_12">%25</span>
                            </div>
                        </div>
                        <div className="VPRightBarWalletAccount_7">
                            <div className="VPRightBarWalletAccount_8_white">
                                3 Month Subscription
                            </div>
                            <div className="VPRightBarWalletAccount_9_white">
                                129.90<span className="VPRightBarWalletAccount_10_white">₺</span>
                            </div>
                            <div className="VPRightBarWalletAccount_8_white">
                                1 Year Subscription
                            </div>
                            <div className="VPRightBarWalletAccount_9_white">
                                399.90<span className="VPRightBarWalletAccount_10_white">₺</span>
                            </div>
                        </div>
                        <div className="VPRightBarWalletAccount_7">
                            <div className="VPRightBarWalletAccount_15">
                                43.8<span className="VPRightBarWalletAccount_18">%</span>
                            </div>
                            <div className="VPRightBarWalletAccount_16_white">
                                Next Level<span className="VPRightBarWalletAccount_17">EXPERT</span>
                            </div>
                            <img src={Logo1} alt="Logo1" className="Logo1" />
                            <img src={Logo2} alt="Logo2" className="Logo2" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex" style={{ marginTop: "20px" }}>
                <div className="VPRightBarWalletAccount_19_white">
                    <img src={CheckLogo} alt="CheckLogo" className="CheckLogo" />
                    <div className="VPRightBarWalletAccount_20_white">
                        Unverified Account
                    </div>
                    <Button type="submit" className="Verify_account_button" outline>Verify Your Account</Button>
                </div>

                <div className="VPRightBarWalletAccount_13">
                    <div className="VPRightBarWalletAccount_27_white">
                        <div className="d-flex" style={{ textAlign: "center", justifyContent: "space-evenly", marginTop: "10px" }}>
                            <div>
                                <div className="VPRightBarWalletAccount_22">
                                    EXPERT
                                </div>
                                <div className="VPRightBarWalletAccount_23_white">
                                    Earnings Plan
                                </div>
                            </div>
                            <div>
                                <div className="VPRightBarWalletAccount_24_white">
                                    1 Month
                                </div>
                                <div className="VPRightBarWalletAccount_25">
                                    99.90<span className="VPRightBarWalletAccount_26">₺</span>
                                </div>
                            </div>
                            <div>
                                <div className="VPRightBarWalletAccount_24_white">
                                    1 Month
                                </div>
                                <div className="VPRightBarWalletAccount_25">
                                    99.90<span className="VPRightBarWalletAccount_26">₺</span>
                                </div>
                            </div>
                            <div>
                                <div className="VPRightBarWalletAccount_24_white">
                                    1 Month
                                </div>
                                <div className="VPRightBarWalletAccount_25">
                                    99.90<span className="VPRightBarWalletAccount_26">₺</span>
                                </div>
                            </div>
                            <div>
                                <div className="VPRightBarWalletAccount_24_white">
                                    1 Month
                                </div>
                                <div className="VPRightBarWalletAccount_25">
                                    99.90<span className="VPRightBarWalletAccount_26">₺</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="VPRightBarWalletAccount_27_white" style={{ marginTop: "20px" }}>
                        <div className="d-flex" style={{ justifyContent: "space-between" }}>
                            <div className="VPRightBarWalletAccount_28_white" style={{ marginLeft: "23.9px", marginTop: "6px" }}>
                                Estimated Earnings
                            </div>
                            <div className="d-flex">
                                <div className="VPRightBarWalletAccount_29" style={{ marginRight: "11.6px" }}>
                                    Journeyman
                                </div>
                                <div className="VPRightBarWalletAccount_30_white" style={{ marginRight: "11.6px" }}>
                                    Expert
                                </div>
                                <div className="VPRightBarWalletAccount_30_white" style={{ marginRight: "28.1px" }}>
                                    Maestro
                                </div>
                            </div>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="495" height="50" viewBox="0 0 471 4" style={{ marginTop: "-15px" }}>
                            <path id="Path_748" data-name="Path 748" d="M0,0H467" transform="translate(24 2)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-width="4" />
                            <circle id="Ellipse_2" data-name="Ellipse 2" cx="194" cy="1" r="11.5" fill="#4dd5ff" />
                            <path id="Path_207" data-name="Path 207" d="M22.035,0h168" transform="translate(2 2)" fill="none" stroke="#4dd5ff" stroke-linecap="round" stroke-width="4" />
                        </svg>
                        <div className="d-flex" style={{ justifyContent: "space-evenly", marginTop: "-10px" }}>
                            <div className="VPRightBarWalletAccount_31_white">
                                Subscriber Count<span className="VPRightBarWalletAccount_32_white">1356</span>
                            </div>
                            <div className="VPRightBarWalletAccount_31_white">
                                Earnings<span className="VPRightBarWalletAccount_32_white">21.610</span><span className="VPRightBarWalletAccount_33">₺</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                <div className="VPRightBarWalletAccount_40_white">
                    <div className="VPRightBarWalletAccount_34_white">
                        Membership Date 22.05.2023
                    </div>
                    <div className="d-flex" style={{ marginTop: "5px" }}>
                        <div className="VPRightBarWalletAccount_35_white">
                            Active Level
                        </div>
                        <div className="VPRightBarWalletAccount_36" style={{ marginLeft: "3.8px" }}>
                            Journeyman
                        </div>
                        <div className="VPRightBarWalletAccount_35_white" style={{ marginLeft: "12.2px" }}>
                            Membership Plan Price
                        </div>
                        <div className="VPRightBarWalletAccount_32_white" style={{ marginLeft: "14.9px" }}>
                            249.90<span className="VPRightBarWalletAccount_33">₺</span>
                        </div>
                        <Button type="submit" className="Account_Renew_button_white" outline style={{ marginLeft: "21.8px", marginTop: "-10px" }} onClick={handleShow1}>Renew</Button>
                        <Modal show={show1} onHide={handleClose1} dialogClassName="modal_out1" id="Renew1_white">
                            <ModalRenew1White />
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default VPRightBarWalletAccountWhite;