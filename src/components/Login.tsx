import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { UserState } from "../states/states";

interface loginProps{
  //Prop that will later receive the 
  submit(note:UserState):void;
}

interface User{
  username: string,
  password: string
}


export const Login: React.FC<loginProps> = ({submit}) => {

  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  //const [user,setUser] = useState({username:"", password:""});

  const loginSubmit = (event:any) => {
    event.preventDefault();
    let form = event.currentTarget;
    // setUser ({
    //   username : form[0].value,
    //   password : form[1].value

    // });
    setUsername(form[0].value);
    setPassword(form[1].value);
    console.log(username + "hello")

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
