import React, { useEffect } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { onLogin } from "../actions/actions";
import { RootStore } from "../reducers";
import { UserState } from "../states/states";
import { Register } from "./Register";

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
      <Container  className="fill border white width">
        <Row>
          <Col className="margin-50" style={{display: 'flex', justifyContent: 'center'}}>
            <img src={"/longTitle.svg"} width="1000"/>
          </Col>
        </Row>
        <Row className="margin-50">
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Header as="h5" className="blue">
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

                  <Button className="blue" type="submit" block>
                    Login
                  </Button>
                  <Container>
                    <Row>
                    <Col className="margin-20" style={{display: 'flex', justifyContent: 'center'}}>
                    <a href="/password/reset">Forgot password?</a>
                    </Col>
                    </Row>
                    <Row>
                    <Col style={{display: 'flex', justifyContent: 'center'}}>
                    <Register/>
                    </Col>
                    </Row>
                  </Container>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
