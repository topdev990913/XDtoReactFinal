import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import "../Css/Components.css";
import "../Css/Modal.css"
import { Button, Row } from "reactstrap";
const ModalPromoteMe = () => {
    const [show1, setShow1] = useState(false);
    const handleShow1 = () => setShow1(true);
    const handleClose1 = () => setShow1(false);
    return (
        <><Modal.Header closeButton>
        </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-center">
                    <svg id="star" xmlns="http://www.w3.org/2000/svg" width="48.859" height="48.858" viewBox="0 0 48.859 48.858">
                        <path id="Path_272" data-name="Path 272" d="M0,0H48.859V48.859H0Z" fill="none" />
                        <path id="Path_273" data-name="Path 273" d="M21.84,33.01,9.591,39.4l2.34-13.533L2.007,16.283,15.7,14.314,21.826,2l6.125,12.312,13.695,1.969-9.924,9.583L34.062,39.4Z" transform="translate(2.587 2.58)" fill="none" stroke="#fd0" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                    </svg>
                </div>
                <div className="d-flex justify-content-center modal_PromoteMe">
                    <svg id="star" xmlns="http://www.w3.org/2000/svg" width="40.062" height="40.062" viewBox="0 0 40.062 40.062">
                        <path id="Path_272" data-name="Path 272" d="M0,0H40.062V40.062H0Z" fill="none" />
                        <path id="Path_273" data-name="Path 273" d="M18.269,27.428,8.225,32.667l1.919-11.1L2.007,13.712,13.236,12.1,18.258,2,23.28,12.1l11.229,1.615L26.372,21.57l1.919,11.1Z" transform="translate(1.76 1.755)" fill="none" stroke="#fd0" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                    </svg>
                    <svg id="star" xmlns="http://www.w3.org/2000/svg" width="40.062" height="40.062" viewBox="0 0 40.062 40.062">
                        <path id="Path_272" data-name="Path 272" d="M0,0H40.062V40.062H0Z" fill="none" />
                        <path id="Path_273" data-name="Path 273" d="M18.269,27.428,8.225,32.667l1.919-11.1L2.007,13.712,13.236,12.1,18.258,2,23.28,12.1l11.229,1.615L26.372,21.57l1.919,11.1Z" transform="translate(1.76 1.755)" fill="none" stroke="#fd0" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                    </svg>
                </div>
                <div className="d-flex justify-content-center modal_PromoteMe_1">
                    Highlights
                </div>
                <div className="d-flex justify-content-center modal_PromoteMe_2">
                    Stand out among the best
                    increase your interactions!
                </div>
                <div className="modal_PromoteMe_3">
                    Highlighted Plans
                </div>
                <div className="d-flex modal_PromoteMe_4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29.666" height="29.666" viewBox="0 0 29.666 29.666">
                        <g id="Ellipse_58" data-name="Ellipse 58" fill="none" stroke="#d2db08" stroke-width="2">
                            <circle cx="14.833" cy="14.833" r="14.833" stroke="none" />
                            <circle cx="14.833" cy="14.833" r="13.833" fill="none" />
                        </g>
                    </svg>
                    <div className="modal_PromoteMe_5">
                        1 Week
                    </div>
                    <div className="modal_PromoteMe_6">
                        69.90<span className="modal_PromoteMe_7">₺</span>
                    </div>
                </div>
                <div className="d-flex modal_PromoteMe_4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29.666" height="29.666" viewBox="0 0 29.666 29.666">
                        <g id="Ellipse_58" data-name="Ellipse 58" fill="none" stroke="#d2db08" stroke-width="2">
                            <circle cx="14.833" cy="14.833" r="14.833" stroke="none" />
                            <circle cx="14.833" cy="14.833" r="13.833" fill="none" />
                        </g>
                    </svg>
                    <div className="modal_PromoteMe_5">
                        <div>2 Week</div>
                        <div className="modal_PromoteMe_9">20<span className="modal_PromoteMe_10">%</span><span className="modal_PromoteMe_11">Save!</span></div>
                    </div>
                    <div className="modal_PromoteMe_6">
                        129.90<span className="modal_PromoteMe_7">₺</span>
                    </div>
                </div>
                <div className="d-flex modal_PromoteMe_4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29.666" height="29.666" viewBox="0 0 29.666 29.666">
                        <g id="Ellipse_60" data-name="Ellipse 60" fill="#d2db08" stroke="#d2db08" stroke-width="2">
                            <circle cx="14.833" cy="14.833" r="14.833" stroke="none" />
                            <circle cx="14.833" cy="14.833" r="13.833" fill="none" />
                        </g>
                    </svg>
                    <div className="modal_PromoteMe_5">
                        <div>4 Week</div>
                        <div className="modal_PromoteMe_9">30<span className="modal_PromoteMe_10">%</span><span className="modal_PromoteMe_11">Save!</span></div>
                    </div>
                    <div className="modal_PromoteMe_6">
                        229.90<span className="modal_PromoteMe_7">₺</span>
                    </div>
                </div>
                <div className="d-flex justify-content-center modal_PromoteMe_12">
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
                <div className="d-flex justify-content-center">
                    <Button type="submit" className="HighLight_Checkout_button" outline>Checkout</Button>
                </div>
                <div className="d-flex justify-content-center modal_PromoteMe_17">
                    With Highlights, your profile and contents will be prominently displayed
                    at the top of the lists for the duration of the plan you purchased.
                </div>

            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </>
    );
};
export default ModalPromoteMe;