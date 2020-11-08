import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import { NavBar } from "./NavBar";
import { Post } from "./Post";

export const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container className="mt-5">
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Container>
                  <Row>
                    <Col lg={2}>
                      <Image
                        className="mb-2 mr-2"
                        src="/defaultImage.svg"
                        width="150"
                        rounded
                      />
                    </Col>
                    <Col>
                      <h5>Author</h5>
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
                                <Button className="blue float-right">Create Post</Button>
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
          </Col>
        </Row>
        <Row>
            <Col>
                {/* Post Here */}
                <Post/>
                <Post/>
            </Col>
        </Row>
      </Container>
    </>
  );
};
