import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import SignInForm from "./SignInForm";
import "./SignInButton.css";

const SignInButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="light" className="Login" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignInForm />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SignInButton;
