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
import configData from "../config.json";
import { RootStore } from "../reducers";

const axios = require("axios");

export const CreatePost: React.FC = () => {
  const user = useSelector((state: RootStore) => state.login);

  const submitPost = async (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form);
    const newPost = {
      content: form[0].value,
      photo: form[1].value,
      authorId: user.id,
    };
    if (!newPost.photo) {
      newPost.photo = "https://www.mailpile.is/img/icon-512x512.png";
    }
    try {
      await axios.put(
        configData.SERVER_URL+"/postSave.app",
        newPost
      );
    } catch (error) {
      console.log(error);
    }
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
                <Form onSubmit={submitPost}>
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
                          <Button type="submit" className="blue float-right">
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
