import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export const Login: React.FC<any> = () => {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const loginSubmit = (event:any) => {
    event.preventDefault();
    let form = event.currentTarget;
    setUsername(form[0].value);
    setPassword(form[1].value);
  }

  return (
    <Container>
      <Row>
        <Col xs={10} md={10}>
          <Form onSubmit={loginSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" />
              <Form.Text className="text-muted"></Form.Text>
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
      <p>{username}</p>
      <p>{password}</p>
    </Container>
  );
};
