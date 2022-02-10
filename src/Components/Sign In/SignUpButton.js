import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import NewUser from './NewUser';
 import './SignUpButton.css';

const SignUpButton = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="form">
            <Button
            variant="light"
                onClick={handleShow}
                className="NewAcc"
            >
                Create Account
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title >
                    Create Account
               </Modal.Title>
                </Modal.Header>
                <Modal.Body>
<NewUser/>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default SignUpButton;
