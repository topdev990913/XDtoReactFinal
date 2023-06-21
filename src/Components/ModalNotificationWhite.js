import React from "react";
import Modal from 'react-bootstrap/Modal';
import "../Css/Components.css";
import "../Css/Modal.css"
import VPRightBarHighlight11White from "./ViewProfile/VPRightBarHighlight11White";
import VPRightBarHighlight111White from "./ViewProfile/VPRightBarHighlight111White";
import VPRightBarHighlight21White from "./ViewProfile/VPRightBarHighlight21White";
const ModalNotificationWhite = () => {
    return (
        <><Modal.Header closeButton>
            <div className="modal_notification_1_white">
                21 <span className="modal_notification_2_white"> New Notification</span>
            </div>
        </Modal.Header>
            <Modal.Body>
                <VPRightBarHighlight11White />
                <VPRightBarHighlight111White />
                <VPRightBarHighlight21White />
                <VPRightBarHighlight11White />
                <VPRightBarHighlight111White />
            </Modal.Body>
            <Modal.Footer style={{ display: "flex", justifyContent: "center", marginTop: "-10px" }}>

            </Modal.Footer>
        </>
    );
};
export default ModalNotificationWhite;