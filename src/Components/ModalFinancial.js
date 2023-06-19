import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import "../Css/Components.css";
import "../Css/Modal.css"
import { Button } from "reactstrap";
const ModalFinancial = () => {
    const [show1, setShow1] = useState(false);
    const handleShow1 = () => setShow1(true);
    const handleClose1 = () => setShow1(false);
    return (
        <>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex ModalFinancial_1" style={{ marginTop: "51px" }}>
                    <div className="ModalFinancial_2">
                        Financial Department
                    </div>
                    <div className="ModalFinancial_3">
                        30.05.2023 - 16:38
                    </div>
                </div>
                <div className="d-flex" style={{ gridGap: "20px", marginTop: "14px" }}>
                    <div className="ModalFinancial_3">
                        Subject
                    </div>
                    <div className="ModalFinancial_3">
                        Withdrawal Request
                    </div>
                </div>
                <div className="d-flex" style={{ gridGap: "20px", marginTop: "14px" }}>
                    <div className="ModalFinancial_3">
                        Transaction Status
                    </div>
                    <div className="ModalFinancial_4">
                        Progress
                    </div>
                </div>
                <div className="ModalFinancial_5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum ullamcorper nisi ut tortor efficitur, id commodo
                    lacus porttitor. Pellentesque habitant morbi tristique
                    senectus et netus et malesuada fames ac turpis egestas.
                    Quisque lacinia mi a urna posuere.
                </div>
                <div className="d-flex justify-content-center" style={{ gridGap: "25px", marginTop: "34.8px" }}>
                    <Button type="submit" className="Financail_reply_button" onClick={handleShow1} outline>Reply</Button>
                    <Modal show={show1} onHide={handleClose1} dialogClassName="modal_out1" id="Reply">
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="d-flex ModalFinancial_1" style={{ marginTop: "51px" }}>
                                <div className="ModalFinancial_2">
                                    Financial Department
                                </div>
                                <div className="ModalFinancial_3">
                                    30.05.2023 - 16:38
                                </div>
                            </div>
                            <div className="d-flex" style={{ gridGap: "20px", marginTop: "14px" }}>
                                <div className="ModalFinancial_3">
                                    Subject
                                </div>
                                <div className="ModalFinancial_3">
                                    Withdrawal Request
                                </div>
                            </div>
                            <div className="d-flex" style={{ gridGap: "20px", marginTop: "14px" }}>
                                <div className="ModalFinancial_3">
                                    Transaction Status
                                </div>
                                <div className="ModalFinancial_4">
                                    Progress
                                </div>
                            </div>
                            <div className="ModalFinancial_5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Vestibulum ullamcorper nisi ut tortor efficitur, id commodo
                                lacus porttitor. Pellentesque habitant morbi tristique
                                senectus et netus et malesuada fames ac turpis egestas.
                                Quisque lacinia mi a urna posuere.
                            </div>
                            <div className="ModalFinancial_3" style={{ marginTop: "20px" }}>
                                Reply
                            </div>
                            <input type="text" alt="search" className="message_out" />
                            <div className="d-flex justify-content-center" style={{ gridGap: "25px", marginTop: "34.8px" }}>
                                <Button type="submit" className="Financail_reply_button" onClick={handleShow1} outline>Send</Button>
                                <Button type="submit" className="Financial_CloseRequest_button" outline>Close Request</Button>
                            </div>
                            <div className="d-flex justify-content-center ModalSupport_2">
                                The Support Department<br />
                                operates from 10:00 am to 18:00 pm during business hours.
                            </div>
                        </Modal.Body>
                        <Modal.Footer style={{ display: "flex", justifyContent: "center", marginTop: "-10px" }}>

                        </Modal.Footer>
                    </Modal>
                    <Button type="submit" className="Financial_CloseRequest_button" outline>Close Request</Button>
                </div>
                <div className="d-flex justify-content-center ModalSupport_2">
                    The Support Department<br />
                    operates from 10:00 am to 18:00 pm during business hours.
                </div>
            </Modal.Body>
            <Modal.Footer style={{ display: "flex", justifyContent: "center", marginTop: "-10px" }}>

            </Modal.Footer>
        </>
    );
};
export default ModalFinancial;