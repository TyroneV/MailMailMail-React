import React, { useEffect } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { onLogin } from "../actions/actions";
import { RootStore } from "../reducers";
import { UserState } from "../states/states";

export const Login: React.FC = () => {
  const dispatch = useDispatch();

  const user = useSelector((state: RootStore) => state.login);

  useEffect(() => {
    createSession();
  }, [user]);

  const createSession = () => {
    if (user.email) {
      window.sessionStorage.setItem("email", user.email);
    }
  };

  /*
   * Callback that calls the dispatcher
   */
  const setUser = (u: UserState) => {
    dispatch(onLogin(u));
  };

  const loginSubmit = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    setUser({
      email: form[0].value,
      password: form[1].value,
    });
  };

  return (
    <div>
      <Container className="fill border white">
        <Row>
          <Col>
            <img src={"/longTitle.svg"} width="1000"/>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Header as="h5" className="orange">
                Login
              </Card.Header>
              <Card.Body>
                <Form onSubmit={loginSubmit}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                  </Form.Group>
                  <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                    />
                  </Form.Group>
                  <Button className="orange" variant="warning" type="submit">
                    Login
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
