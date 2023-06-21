import React from "react";
import Modal from 'react-bootstrap/Modal';
import "../Css/Components.css";
import "../Css/Modal.css"
import { Button } from "reactstrap";
const ModalSupportWhite = () => {
    return (
        <>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div className="Filter_Modal_Label_white">
                    Department
                </div>
                <div className="crypto_dropdown">
                    <select class="form-select form-select-lg mb-3 white3" id="select-out" aria-label=".form-select-lg example" style={{backgroundColor: "#F6F6F6", color: "#0D2A53"}}>
                        <option value="" hidden disabled selected>Select Department</option>
                        <option value="0" className="Selected_item">All</option>
                        <option value="1" className="Selected_item">Manchester United  - Arsenal</option>
                    </select>
                </div>
                <div className="ModalSupport_1_white">
                    Subject
                </div>
                <input type="text" alt="search" className="subject_out_white" />
                <div className="ModalSupport_1_white">
                    Message
                </div>
                <input type="text" alt="search" className="message_out_white" />
                <div className="d-flex justify-content-center">
                    <Button type="submit" className="Support_send_button_white" outline>Send</Button>
                </div>
                <div className="d-flex justify-content-center ModalSupport_2_white">
                    The Support Department<br/>
                    operates from 10:00 am to 18:00 pm during business hours.
                </div>
            </Modal.Body>
            <Modal.Footer style={{ display: "flex", justifyContent: "center", marginTop: "-10px" }}>

            </Modal.Footer>
        </>
    );
};
export default ModalSupportWhite;