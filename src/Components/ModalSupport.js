import React from "react";
import Modal from 'react-bootstrap/Modal';
import "../Css/Components.css";
import "../Css/Modal.css"
import { Button } from "reactstrap";
const ModalSupport = () => {
    return (
        <>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div className="Filter_Modal_Label">
                    Department
                </div>
                <div className="crypto_dropdown">
                    <select class="form-select form-select-lg mb-3" id="Select_out" aria-label=".form-select-lg example">
                        <option value="" hidden disabled selected>Select Department</option>
                        <option value="0" className="Selected_item">All</option>
                        <option value="1" className="Selected_item">Manchester United  - Arsenal</option>
                    </select>
                </div>
                <div className="ModalSupport_1">
                    Subject
                </div>
                <input type="text" alt="search" className="subject_out" />
                <div className="ModalSupport_1">
                    Message
                </div>
                <input type="text" alt="search" className="message_out" />
                <div className="d-flex justify-content-center">
                    <Button type="submit" className="Support_send_button" outline>Send</Button>
                </div>
                <div className="d-flex justify-content-center ModalSupport_2">
                    The Support Department<br/>
                    operates from 10:00 am to 18:00 pm during business hours.
                </div>
            </Modal.Body>
            <Modal.Footer style={{ display: "flex", justifyContent: "center", marginTop: "-10px" }}>

            </Modal.Footer>
        </>
    );
};
export default ModalSupport;