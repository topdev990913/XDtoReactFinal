import React, {useState} from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Button } from "reactstrap";
import Modal from 'react-bootstrap/Modal';
import ModalWithdrawal from "../ModalWithdrawal";
const VPRightBarSubTopBarWallet = ({ checkedWallet, setCheckedWallet }) => {
    const [show1, setShow1] = useState(false);
    const handleShow1 = () => setShow1(true);
    const handleClose1 = () => setShow1(false);
    console.log("checkedWallet", checkedWallet)
    return (
        <div className="VPRightBarSubTopBar_out d-flex">
            <div className={checkedWallet ? "VPRightBarSubTopBar_1" : "VPRightBarSubTopBar_1_1"} onClick={() => { setCheckedWallet(true) }}>
                Transactions
            </div>
            <div className={checkedWallet ? "VPRightBarSubTopBar_2" : "VPRightBarSubTopBar_2_1"} onClick={() => { setCheckedWallet(false) }}>
                Account Status
            </div>
            <Button type="submit" className="request_withdrawl_button" onClick={handleShow1} outline>Request Withdrawal</Button>
            <Modal show={show1} onHide={handleClose1} dialogClassName="modal_out1" id="Withdrawal">
                <ModalWithdrawal />
            </Modal>
        </div>
    );
};
export default VPRightBarSubTopBarWallet;