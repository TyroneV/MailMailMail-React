import React, { useState } from "react";
import { Button, Form, Modal, Image} from "react-bootstrap";

export const EditProfile: React.FC = (props: any) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



//   const [password, setPassword] = useState(props.password);
//   const [fname, setFname] = useState(props.fname);
//   const [lname, setLname] = useState(props.lname);
//   const [photo, setPhoto] = useState(props.photo);
const [password, setPassword] = useState("wasspord");
const [fname, setFname] = useState("Enoch");
const [lname, setLname] = useState("Cho");
const [photo, setPhoto] = useState("/images/defaultImage.svg");
const [changed, setChanged] = useState(true);


  const submit = (event:any) => {
      setShow(false);
      event.preventDefault();
      const form = event.currentTarget;
      if(form[0].value.trim()){
          setPassword(form[0].value.trim());
      }
      if(form[1].value.trim()){
          setFname(form[1].value.trim());
      }
      if(form[2].value.trim()){
          setLname(form[2].value.trim());
      }
      if(form[3].value.trim()){
          setPhoto(form[3].value);
      }
      setChanged(!changed);
  }
  


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
          <Form onSubmit= {submit}>
            <Form.Group controlId="formPassword">
              <Form.Label>Password: {password}</Form.Label>
              <Form.Control type="password" placeholder="Enter new password"/>
            </Form.Group>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name: {fname}</Form.Label>
              <Form.Control type="text" placeholder="Enter new first name"/>
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name: {lname}</Form.Label>
              <Form.Control type="text" placeholder="Enter new last name"/>
            </Form.Group>
            <Form.Group controlId="formPhoto">
              <Form.Label>Profile Picture:</Form.Label>
              <Image
                        src= {photo}
                        width="150"
                        rounded
                      />
              <Form.File id="newPic"/>
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
