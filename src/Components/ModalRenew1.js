import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import "../Css/Components.css";
import "../Css/Modal.css"
import { Button, Row } from "reactstrap";
import Renew_avatar from '../assets/Renew_avatar.png';
import Renew_crawn from '../assets/Renew_crawn.png';
const ModalRenew1 = () => {
    const [show1, setShow1] = useState(false);
    const handleShow1 = () => {
        setShow1(true);
    }
    const handleClose1 = () => setShow1(false);
    return (
        <>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex ModalRenew_1">
                    <div>
                        <div className="d-flex justify-content-center ModalRenew_2">
                            Success Rate
                        </div>
                        <div className="d-flex justify-content-center ModalRenew_3">
                            67.6<span className="ModalRenew_4">%</span>
                        </div>
                        <div className="d-flex justify-content-center ModalRenew_2" style={{ marginTop: "30px" }}>
                            Win
                        </div>
                        <div className="d-flex justify-content-center ModalRenew_5">
                            256
                        </div>
                    </div>
                    <div>
                        <div className="d-flex justify-content-center ModalRenew_6">
                            <img src={Renew_avatar} alt="Renew_avatar" className="Renew_avatar" />
                            <img src={Renew_crawn} alt="Renew_crawn" className="Renew_crawn" />
                        </div>
                        <div className="d-flex justify-content-center" style={{ marginTop: "115px", alignItems: "center", gridGap: "3px" }}>
                            <div className="ModalRenew_7">
                                ahmetvardar
                            </div>
                            <div className="ModalRenew_8">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23.969" height="22.804" viewBox="0 0 23.969 22.804">
                                    <path id="Path_check-decagram" data-name="Path / check-decagram" d="M24.969,12.936,22.311,9.908l.37-4.009L18.748,5,16.689,1.54l-3.7,1.591L9.28,1.54,7.221,5l-3.933.883L3.658,9.9,1,12.936l2.658,3.029-.37,4.02,3.933.893L9.28,24.344l3.7-1.6,3.7,1.591,2.059-3.465,3.933-.893-.37-4.009,2.658-3.029M10.806,18.384,6.448,14.026,7.984,12.49,10.806,15.3l7.18-7.18,1.536,1.547Z" transform="translate(-1 -1.54)" fill="#00d4ff" />
                                </svg>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center ModalRenew_9">
                            Ankara/Türkiye
                        </div>
                        <div className="d-flex justify-content-center ModalRenew_9">
                            22.04.2022
                        </div>
                        <div className="d-flex justify-content-center ModalRenew_11">
                            <svg id="ball-basketball_1_" data-name="ball-basketball (1)" xmlns="http://www.w3.org/2000/svg" width="42.543" height="42.543" viewBox="0 0 42.543 42.543">
                                <path id="Path_58" data-name="Path 58" d="M0,0H42.543V42.543H0Z" transform="translate(0 0)" fill="none" />
                                <path id="Path_59" data-name="Path 59" d="M18.919,18.919,3,18.919A15.919,15.919,0,1,0,18.919,3,15.919,15.919,0,0,0,3,18.919" transform="translate(2.352 2.352)" fill="none" stroke="#ff9100" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                <path id="Path_60" data-name="Path 60" d="M5.65,5.65,28.032,28.032" transform="translate(4.43 4.43)" fill="none" stroke="#ff9100" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                <path id="Path_61" data-name="Path 61" d="M5.65,28.032,28.032,5.65" transform="translate(4.43 4.43)" fill="none" stroke="#ff9100" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                <path id="Path_62" data-name="Path 62" d="M12,3A16.057,16.057,0,0,0,28.057,19.057" transform="translate(9.133 2.352)" fill="none" stroke="#ff9100" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                <path id="Path_63" data-name="Path 63" d="M3,12A16.057,16.057,0,0,1,19.057,28.057" transform="translate(2.352 9.133)" fill="none" stroke="#ff9100" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            </svg>
                            <svg id="ball-football_1_" data-name="ball-football (1)" xmlns="http://www.w3.org/2000/svg" width="42.543" height="42.543" viewBox="0 0 42.543 42.543">
                                <path id="Path_54" data-name="Path 54" d="M0,0H42.543V42.543H0Z" transform="translate(0)" fill="none" />
                                <path id="Path_55" data-name="Path 55" d="M18.876,18.876,3,18.876A15.876,15.876,0,1,0,18.876,3,15.876,15.876,0,0,0,3,18.876" transform="translate(2.395 2.395)" fill="none" stroke="#00c936" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                <path id="Path_56" data-name="Path 56" d="M15.8,7l8.561,6.2L21.2,23.186H10.405L7.24,13.2Z" transform="translate(5.471 5.3)" fill="none" stroke="#00c936" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                <path id="Path_57" data-name="Path 57" d="M18.477,10.194V3m5.286,23.38,4.4,5.4M26.864,16.4l6.59-2.608M13.3,26.47,8.786,31.775M10.09,16.4,3.5,13.791" transform="translate(2.795 2.395)" fill="none" stroke="#00c936" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex justify-content-center ModalRenew_2">
                            Score Points
                        </div>
                        <div className="d-flex justify-content-center ModalRenew_12">
                            256
                        </div>
                        <div className="d-flex justify-content-center ModalRenew_2" style={{ marginTop: "30px" }}>
                            Lose
                        </div>
                        <div className="d-flex justify-content-center ModalRenew_13">
                            256
                        </div>
                    </div>
                </div>
                <div className="ModalRenew_14">
                    Membership Plan
                </div>
                <div className="d-flex modal_PromoteMe_4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29.666" height="29.666" viewBox="0 0 29.666 29.666">
                        <g id="Ellipse_58" data-name="Ellipse 58" fill="none" stroke="#d2db08" stroke-width="2">
                            <circle cx="14.833" cy="14.833" r="14.833" stroke="none" />
                            <circle cx="14.833" cy="14.833" r="13.833" fill="none" />
                        </g>
                    </svg>
                    <div className="modal_PromoteMe_5">
                        1 Month
                    </div>
                    <div className="modal_PromoteMe_6">
                        229.90<span className="modal_PromoteMe_7">₺</span>
                    </div>
                </div>

                <div className="d-flex justify-content-center modal_PromoteMe_12" style={{ marginTop: "50px" }}>
                    Total Amount
                </div>
                <div className="d-flex justify-content-center modal_PromoteMe_13">
                    229.90<span className="d-flex align-items-center modal_PromoteMe_14">₺</span>
                </div>
                <div className="d-flex justify-content-center">
                    <svg id="checkbox" xmlns="http://www.w3.org/2000/svg" width="52.642" height="52.642" viewBox="0 0 52.642 52.642">
                        <path id="Path_227" data-name="Path 227" d="M0,0H52.642V52.642H0Z" fill="none" />
                        <path id="Path_228" data-name="Path 228" d="M9,16.967l6.58,6.58L33.127,6" transform="translate(10.741 7.16)" fill="none" stroke="#37ff80" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                        <path id="Path_229" data-name="Path 229" d="M39.094,21.547v13.16a4.387,4.387,0,0,1-4.387,4.387H8.387A4.387,4.387,0,0,1,4,34.708V8.387A4.387,4.387,0,0,1,8.387,4H28.127" transform="translate(4.774 4.774)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                    </svg>
                    <div className="d-flex align-items-center modal_PromoteMe_15">
                        I have read and agree to the <span className="modal_PromoteMe_16" onClick={handleShow1}> Terms of Use</span>
                        <Modal show={show1} onHide={handleClose1} dialogClassName="modal_out">
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                                <Row style={{ marginTop: "10px" }}>
                                    <div className="Filter_Modal_Label">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32.8" height="29.656" viewBox="0 0 32.8 29.656" onClick={handleClose1}>
                                            <g id="Group_323" data-name="Group 323" transform="translate(1208.459 -4676.619)">
                                                <path id="Path_612" data-name="Path 612" d="M0,12,12,0,24,12" transform="translate(-1206.459 4703.447) rotate(-90)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" />
                                                <path id="Path_613" data-name="Path 613" d="M0,0V28.8" transform="translate(-1206.459 4691.447) rotate(-90)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" />
                                            </g>
                                        </svg>

                                    </div>
                                </Row>
                                <Row>
                                    <div className="Terms_modal_1">
                                        Terms of Use
                                    </div>
                                </Row>
                                <Row>
                                    <div className="Terms_modal_2">
                                        <div className="Terms_modal_3">
                                            <div>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Nulla et est facilisis, malesuada tellus sed, tempor justo.
                                                Donec nec enim mauris. Duis auctor arcu et neque
                                                malesuada tristique. Sed ac sem nec metus ultrices
                                                tincidunt. Aenean id nisl eget odio sollicitudin viverra.
                                                Cras quis tellus vel ligula euismod dapibus. Integer eu
                                                rutrum eros. Sed efficitur nulla id justo aliquet tempus.
                                            </div>
                                            <div>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Nulla et est facilisis, malesuada tellus sed, tempor justo.
                                                Donec nec enim mauris. Duis auctor arcu et neque
                                                malesuada tristique. Sed ac sem nec metus ultrices
                                                tincidunt. Aenean id nisl eget odio sollicitudin viverra.
                                                Cras quis tellus vel ligula euismod dapibus. Integer eu
                                                rutrum eros. Sed efficitur nulla id justo aliquet tempus.
                                            </div>
                                            <div>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Nulla et est facilisis, malesuada tellus sed, tempor justo.
                                                Donec nec enim mauris. Duis auctor arcu et neque
                                                malesuada tristique. Sed ac sem nec metus ultrices
                                                tincidunt. Aenean id nisl eget odio sollicitudin viverra.
                                                Cras quis tellus vel ligula euismod dapibus. Integer eu
                                                rutrum eros. Sed efficitur nulla id justo aliquet tempus.
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </Modal.Body>
                            <Modal.Footer style={{ display: "flex", justifyContent: "center", marginTop: "-10px" }}>
                                <Button type="submit" color="info" className="modal_Footer_Button" outline>Approve</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
                <div className="d-flex justify-content-center" style={{ marginTop: "-20px" }}>
                    <Button type="submit" className="HighLight_Checkout_button" outline>Renew</Button>
                </div>
                <div className="d-flex justify-content-center modal_PromoteMe_17" style={{ marginTop: "5px" }}>
                    With Highlights, your profile and contents will be prominently displayed
                    at the top of the lists for the duration of the plan you purchased.
                </div>
            </Modal.Body>
            <Modal.Footer style={{ display: "flex", justifyContent: "center", marginTop: "-10px" }}>

            </Modal.Footer>
        </>
    );
};
export default ModalRenew1;