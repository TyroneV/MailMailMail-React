import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { UserState } from "../states/states";

interface loginProps{
  //Prop that will later receive the 
  submit(note:UserState):void;
}


export const Login: React.FC<loginProps> = ({submit}) => {

  const loginSubmit=(event:any) => {
    event.preventDefault();
    const form = event.currentTarget;
    submit({
      username:form[0].value,
      password:form[1].value
    });
  }


  return (
    <Container>
      <Row>
        <Col xs={10} md={10}>
          <Form onSubmit={loginSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
