import React, { useState } from "react";
import { Button, Form, Modal, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootStore } from "../reducers";
import configData from "../config.json";
import ImageUpload from "../jsfunction/ImageUpload";

export const EditProfile: React.FC = (props: any) => {
  const axios = require("axios");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = useSelector((state: RootStore) => state.login);

  const submit = async (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form[0].value.trim()) {
      user.password = form[0].value.trim();
    }
    if (form[1].value.trim()) {
      user.firstName = form[1].value.trim();
    }
    if (form[2].value.trim()) {
      user.lastName = form[2].value.trim();
    }
    if (
      form[0].value.trim() ||
      form[1].value.trim() ||
      form[2].value.trim() ||
      form[3].files.length
    ) {
      try{
        if (form[3].files.length) {
          console.log(form[3].files);
          const data = await ImageUpload(form[3]);
          user.photo = data.key;
          alert('Image updated!')
        }
      await axios.put(configData.SERVER_URL + "/updateUser.app", user);
        alert('User Updated!');
      }catch(error){
        alert('UPDATE FAILED!');
      }

    }
  };
  return (
    <>
      <Button size="lg" className="blue" onClick={handleShow}>
        Edit M3
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="blue">
          <Modal.Title>Edit Your Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submit}>
            <Form.Group controlId="formPassword">
              <Form.Label>Password: </Form.Label>
              <Form.Control type="password" placeholder="Enter new password" />
            </Form.Group>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name: </Form.Label>
              <Form.Control type="text" placeholder="Enter new first name" />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name: </Form.Label>
              <Form.Control type="text" placeholder="Enter new last name" />
            </Form.Group>
            <Form.Group controlId="formPhoto">
              <Form.Label>Profile Picture:</Form.Label>
              <Image src={configData.S3_URL + user.photo} width="150" />
              <Form.File label="New photo:" />
            </Form.Group>
            <Button className="blue" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
