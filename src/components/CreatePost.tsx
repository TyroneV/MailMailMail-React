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
      datecreated: null,
    };
    try {
      const a = await axios.post(
        configData.SERVER_URL + "/postSave.app",
        newPost
      );
      console.log(a.data);
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
                  src={configData.S3_URL +user.photo}
                  width="150"
                  roundedCircle
                />
              </Col>
              <Col>
                <h5>
                  {user.firstName} {user.lastName}
                </h5>
                <Form onSubmit={submitPost}>
                  <Container>
                    <Row>
                      <Col>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Write post here..."
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Form.Group className="w-100">
                        <Form.File className="mb-3" id="formcheck-api-regular">
                          <Form.File.Input />
                        </Form.File>
                        <Button type="submit" className="blue float-right">
                          Create Post
                        </Button>
                      </Form.Group>
                    </Row>
                  </Container>
                </Form>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};
