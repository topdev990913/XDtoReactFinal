import React, { useState } from "react";
import { Container, Row, Col, Form, Navbar } from "reactstrap";
import "../Css/Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Modal from 'react-bootstrap/Modal';
import ModalNotificationWhite from "./ModalNotificationWhite";
import header_logo from '../assets/portrait-of-happy-and-cheerful-handsome-adult-man-2022-02-07-02-02-56-utc.png'
const TopBarViewProfileWhite = ({ checked, setChecked }) => {
    const [show1, setShow1] = useState(false);
    const handleShow1 = () => setShow1(true);
    const handleClose1 = () => setShow1(false);
    return (
        <Navbar expand="xs" className="header_style_white position-relative">
            <Container style={{ marginRight: "0px" }}>
                <Row noGutters className="position-relative p-0 w-100 align-items-center">
                    <Col className="d-lg-flex justify-content-end">
                        <Form inline className="d-flex align-items-center">
                            <svg id="moon" xmlns="http://www.w3.org/2000/svg" width="35.321" height="35.321" viewBox="0 0 35.321 35.321" style={{ marginLeft: "10px" }} onClick={() => setChecked()}>
                                <path id="Path_690" data-name="Path 690" d="M0,0H35.321V35.321H0Z" fill="none" />
                                <path id="Path_691" data-name="Path 691" d="M16.245,3h.578A11.038,11.038,0,0,0,28.479,21.321,13.245,13.245,0,1,1,16.245,2.992Z" transform="translate(1.416 1.411)" fill="none" stroke="#0d2a53" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            </svg>
                            <svg id="bell-ringing" xmlns="http://www.w3.org/2000/svg" width="35.676" height="35.676" viewBox="0 0 35.676 35.676" style={{ marginLeft: "10px" }} onClick={handleShow1}>
                                <path id="Path_102" data-name="Path 102" d="M0,0H35.676V35.676H0Z" fill="none" />
                                <path id="Path_103" data-name="Path 103" d="M12.879,6A2.96,2.96,0,1,1,18.8,6a10.5,10.5,0,0,1,5.919,9v4.5a6,6,0,0,0,2.96,4.5H4a6,6,0,0,0,2.96-4.5V15a10.5,10.5,0,0,1,5.919-9" transform="translate(1.999 1.5)" fill="none" stroke="#0d2a53" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                <path id="Path_104" data-name="Path 104" d="M9,17v1.5a4.5,4.5,0,1,0,9,0V17" transform="translate(4.337 8.498)" fill="none" stroke="#0d2a53" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                <path id="Path_105" data-name="Path 105" d="M22.4,8.59A16.573,16.573,0,0,0,18.206,3" transform="translate(8.78 1.5)" fill="none" stroke="#0d2a53" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                <path id="Path_106" data-name="Path 106" d="M3,8.59A16.573,16.573,0,0,1,7.188,3" transform="translate(1.5 1.5)" fill="none" stroke="#0d2a53" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            </svg>
                            <Modal show={show1} onHide={handleClose1} dialogClassName="modal_out1" id="notification_white">
                                <ModalNotificationWhite />
                            </Modal>
                            <div className="header_dashboard_out_white" style={{ marginLeft: "10px" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="97" height="27" viewBox="0 0 97 27">
                                    <text id="Dashboard" transform="translate(0 22)" fill="#0d2a53" font-size="20" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Dashboard</tspan></text>
                                </svg>
                            </div>
                            <img src={header_logo} alt="header_logo" className="header_logo" />
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};
export default TopBarViewProfileWhite;
