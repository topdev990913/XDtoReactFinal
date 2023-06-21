import React from "react";
import Modal from 'react-bootstrap/Modal';
import "../Css/Components.css";
import "../Css/Modal.css"
import { Button } from "reactstrap";
const ModalWithdrawalWhite = () => {
    return (
        <>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex ModalWithdrawal_0">
                    <div>
                        <div className="ModalWithdrawal_1_white">
                            Total Balance
                        </div>
                        <div className="ModalWithdrawal_2_white">
                            3.500
                        </div>
                    </div>
                    <div>
                        <div className="ModalWithdrawal_1_white">
                            Pending Balance
                        </div>
                        <div className="ModalWithdrawal_2_white">
                            3.500
                        </div>
                    </div>
                </div>
                <div className="ModalWithdrawal_3_white">
                    Bank Details
                </div>
                <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                    <div className="ModalWithdrawal_4_white">
                        TR 08 0545 1200 0000 0145 65 52
                    </div>
                </div>
                <div className="ModalWithdrawal_5_white">
                    Withdrawable Balance
                </div>
                <div className="d-flex justify-content-center ModalWithdrawal_6_white">
                    3.500<span className="ModalWithdrawal_7">₺</span>
                </div>
                <div className="d-flex justify-content-center">
                    <Button type="submit" className="Withdrawal_button_white" outline>Withdraw</Button>
                </div>
                <div className="ModalWithdrawal_8_white">
                    Withdrawal requests are processed within 1 business day
                </div>
                <div className="ModalWithdrawal_9_white">
                    If the registered bank information and the personal information of the
                    user do not match the transaction is suspended.
                </div>
            </Modal.Body>
            <Modal.Footer style={{ display: "flex", justifyContent: "center", marginTop: "-10px" }}>

            </Modal.Footer>
        </>
    );
};
export default ModalWithdrawalWhite;