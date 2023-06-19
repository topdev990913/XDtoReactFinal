import React from "react";
import Modal from 'react-bootstrap/Modal';
import "../Css/Components.css";
import "../Css/Modal.css"
import VPRightBarHighlight11 from "./ViewProfile/VPRightBarHighlight11";
import VPRightBarHighlight111 from "./ViewProfile/VPRightBarHighlight111";
import VPRightBarHighlight21 from "./ViewProfile/VPRightBarHighlight21";
const ModalNotification = () => {
    return (
        <><Modal.Header closeButton>
            <div className="modal_notification_1">
                21 <span className="modal_notification_2"> New Notification</span>
            </div>
        </Modal.Header>
            <Modal.Body>
                <VPRightBarHighlight11 />
                <VPRightBarHighlight111 />
                <VPRightBarHighlight21 />
                <VPRightBarHighlight11 />
                <VPRightBarHighlight111 />
            </Modal.Body>
            <Modal.Footer style={{ display: "flex", justifyContent: "center", marginTop: "-10px" }}>

            </Modal.Footer>
        </>
    );
};
export default ModalNotification;