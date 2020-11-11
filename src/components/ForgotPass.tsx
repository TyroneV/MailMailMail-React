import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const axios = require("axios");

export const ForgotPass: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const resetPass = (event: any) => {
    event.preventDefault();
    try {
      const url =
        "http://18.191.119.230:8081/Project2-1.0.0/forgotPass?email=" +
        event.currentTarget[0].value;
      axios.post(url);
      alert("Password reset instruction is sent to your email!");
    } catch (error) {
      alert("Account does not exist!");
    }
  };

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Forgot password?
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="blue" closeButton>
          <Modal.Title>Reset Password</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={resetPass}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your account's email..."
              />
            </Form.Group>
            <Button className="blue" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
