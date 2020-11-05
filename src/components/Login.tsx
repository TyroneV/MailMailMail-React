import React, { useEffect } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { onLogin } from "../actions/actions";
import { RootStore } from "../reducers";
import { UserState } from "../states/states";


export const Login: React.FC = () => {

  const dispatch = useDispatch();
  
  const user = useSelector((state:RootStore)=>state.login);

  useEffect(() => {
    createSession();
  }, [user]);

  const createSession = () =>{
    if(user.username){
      window.sessionStorage.setItem('username',user.username);
    }
  }


  /*
  * Callback that calls the dispatcher
  */
  const showUsername = (u:UserState) =>{
    dispatch(onLogin(u));
  }

  const loginSubmit = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    showUsername({
      username: form[0].value,
      password: form[1].value,
    });
    
  };

  return (
    <div>
      <Container>
        <Row>
          <Col><img src={'../../public/longTitle.svg'}
          /></Col>
          <Col md={{ span: 6, offset: 6 }}>
            <Card>
              <Card.Header as="h5">Login</Card.Header>
              <Card.Body>
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
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
