import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export const Register: React.FC = (props: any) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button size="lg" className="blue" onClick={handleShow}>
        Create New Account
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="blue">
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" required/>
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" required/>
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" required/>
            </Form.Group>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" required/>
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" required/>
            </Form.Group>
            {/* <Form.Group controlId="formDate">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" required/>
            </Form.Group >
            <Form.Group controlId="formJobTitle">
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Job Title" />
            </Form.Group> */}
            <Button className="blue" type="submit">
            Submit
          </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
