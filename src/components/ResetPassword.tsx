import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import configData from "../config.json";

const axios = require("axios");

export const ResetPassword: React.FC = () => {
  const history = useHistory();

  const submitReset = async (event: any) => {
    event.preventDefault();
    const re = "/reset/pass/";
    const email = window.location.pathname.replace(re, "");
    const url = configData.SERVER_URL + "/userByEmail.app?email=";
    const code = event.currentTarget[0].value;
    const pass1 = event.currentTarget[1].value;
    const pass2 = event.currentTarget[2].value;
    try {
      const data = await axios.get(url + email);
      const targetCode = data.data.password;
      const newUser = data.data;
      if (code === targetCode) {
        if (pass1 === pass2) {
          newUser.password = pass2;
          console.log(newUser);
          try {
            await axios.put(
              configData.SERVER_URL +"/updateUser.app",
              newUser
            );
            alert("New Password set!");
          } catch (error) {
            alert("Failed to update!");
          }
          history.push("/");
        } else {
          alert("Password does not match!");
        }
      } else {
        alert("Code does not match!");
      }
    } catch (error) {
      console.log(error);
      alert("Invalid Email!");
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="mt-5">
            <Card>
              <Card.Header className="blue">Password Reset</Card.Header>
              <Card.Body>
                <Form onSubmit={submitReset}>
                  <Form.Group>
                    <Form.Label>Enter your Reset Code</Form.Label>
                    <Form.Control type="text" placeholder="Enter your code" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="New Password" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </Form.Group>
                  <Button className="blue" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
