import React, { useEffect } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { onLogin } from "../actions/actions";
import { RootStore } from "../reducers";
import { UserState } from "../states/states";

export const CreatePost: React.FC = () => {
  const userString = sessionStorage.getItem("user");
  const sessionUser = JSON.parse(userString||"");
  const dispatch = useDispatch();
  const user = useSelector((state: RootStore) => state.login);

  // useEffect(() => {
  //   setUser(sessionUser);
  // }, []);

  const setUser = (u: UserState) => {
    dispatch(onLogin(u));
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Container>
            <Row>
              <Col lg={2}>
                <Image
                  className="mb-2 mr-2"
                  src="images/defaultImage.svg"
                  width="150"
                  rounded
                />
              </Col>
              <Col>
                <h5>
                  {user.firstName} {user.lastName}
                </h5>
                <Form>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Write post here..."
                    />
                  </Form.Group>
                  <Form.Group>
                    <Container>
                      <Row>
                        <Col>
                          <Form.File id="formcheck-api-regular">
                            <Form.File.Input />
                          </Form.File>
                        </Col>
                        <Col>
                          <Button className="blue float-right">
                            Create Post
                          </Button>
                        </Col>
                      </Row>
                    </Container>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};
