import React, {useState} from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Button } from "reactstrap";
import Modal from 'react-bootstrap/Modal';
import ModalWithdrawalWhite from "../ModalWithdrawalWhite";
const VPRightBarSubTopBarWalletWhite = ({ checkedWallet, setCheckedWallet }) => {
    const [show1, setShow1] = useState(false);
    const handleShow1 = () => setShow1(true);
    const handleClose1 = () => setShow1(false);
    console.log("checkedWallet", checkedWallet)
    return (
        <div className="VPRightBarSubTopBar_out_white d-flex">
            <div className={checkedWallet ? "VPRightBarSubTopBar_1" : "VPRightBarSubTopBar_1_1_white"} onClick={() => { setCheckedWallet(true) }}>
                Transactions
            </div>
            <div className={checkedWallet ? "VPRightBarSubTopBar_2_white" : "VPRightBarSubTopBar_2_1"} onClick={() => { setCheckedWallet(false) }}>
                Account Status
            </div>
            <Button type="submit" className="request_withdrawl_button_white" onClick={handleShow1} outline>Request Withdrawal</Button>
            <Modal show={show1} onHide={handleClose1} dialogClassName="modal_out1" id="Withdrawal_white">
                <ModalWithdrawalWhite />
            </Modal>
        </div>
    );
};
export default VPRightBarSubTopBarWalletWhite;