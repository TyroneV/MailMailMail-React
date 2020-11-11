import React from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import { useSelector } from "react-redux";

import { RootStore } from "../reducers";


export const CreatePost: React.FC = () => {
  const user = useSelector((state: RootStore) => state.login);


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
