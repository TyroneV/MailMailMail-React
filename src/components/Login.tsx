import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { UserState } from "../reducers/loginReducer";

interface loginProps{
  submit(note:UserState):void;
}


export const Login: React.FC<loginProps> = ({submit}) => {

  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const loginSubmit = (event:any) => {
    event.preventDefault();
    let form = event.currentTarget;
    setUsername(form[0].value);
    setPassword(form[1].value);
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
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" />
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
