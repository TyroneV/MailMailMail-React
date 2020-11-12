import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Image} from "react-bootstrap";
import { ImageUpload } from "./ImageUpload";
import { useSelector } from "react-redux";
import { RootStore } from "../reducers";
import Axios from "axios";



export const EditProfile: React.FC = (props: any) => {
  const axios = require("axios");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = useSelector((state: RootStore) => state.login);
  // let tester = sessionStorage.getItem('user');
  // JSON.parse(tester);
//   const [password, setPassword] = useState(props.password);
//   const [fname, setFname] = useState(props.fname);
//   const [lname, setLname] = useState(props.lname);
//   const [photo, setPhoto] = useState(props.photo);
  const [password, setPassword] = useState("wasspord");
  const [fname, setFname] = useState("Enoch");
  const [lname, setLname] = useState("Cho");
  const [photo, setPhoto] = useState("https://mailmailmail-images.s3.us-east-2.amazonaws.com/"+user.photo);
  const [changed, setChanged] = useState(true);

  useEffect( ()=> {
      console.log("password: " + password);
      console.log("fname: " + fname);
      console.log("lname: " + lname);
      console.log("photo: " + photo);
      //dispatch(someaction);
  }, [changed])

  const submit = async (event:any) => {
      setShow(false);
      event.preventDefault();
      const form = event.currentTarget;
      if(form[0].value.trim()){
          setPassword(form[0].value.trim());
          user.password = form[0].value.trim();
      }
      if(form[1].value.trim()){
          setFname(form[1].value.trim());
          user.firstName = form[1].value.trim();
      }
      if(form[2].value.trim()){
          setLname(form[2].value.trim());
          user.lastName = form[2].value.trim();
      }
      setChanged(!changed);

      await axios.put("http://3.129.45.151:8081/Project2-1.0.0" + "/updateUser.app", user); 
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
              <Form.Label>Password: </Form.Label>
              <Form.Control type="password" placeholder="Enter new password"/>
            </Form.Group>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name: </Form.Label>
              <Form.Control type="text" placeholder="Enter new first name"/>
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name: </Form.Label>
              <Form.Control type="text" placeholder="Enter new last name"/>
            </Form.Group>
            <Form.Group controlId="formPhoto">
              <Form.Label>Profile Picture:</Form.Label>
              <Image
                        src= {photo}
                        width="150"
                        rounded
                      />
              <ImageUpload ></ImageUpload>
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
