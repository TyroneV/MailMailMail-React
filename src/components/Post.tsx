import React from "react";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootStore } from "../reducers";
import { UserComment } from "./UserComment";

//Refers to the post-id
interface IProps{
  id:number
}



export const Post: React.FC<IProps> = (props:IProps) => {

  const postState = useSelector((state:RootStore) => state.posts[props.id]);


  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <img src="/defaultImage.svg" width="50" />
            <p className="m-2 d-inline">Author</p>
          </Card.Title>
          <Card.Img variant="top" src="/apost.jpg" />
          <Card className="mb-4">
            <Container>
              <Row>
                <Col className="m-4">
                  <Card.Text>My post is from australia.</Card.Text>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <input
                    type="image"
                    src="/thumbsUP.svg"
                    width="30"
                    className="d-inline"
                  />
                  <h6 className="m-2 d-inline">100</h6>
                </Col>
              </Row>
            </Container>
          </Card>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0" className="blue">
                Comments
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  {/* Comments here */}
                  <UserComment />
                  <UserComment />
                  <UserComment />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Form className="mt-4">
            <Form.Group controlId="postComment">
              <Form.Control type="text" />
            </Form.Group>
            <Button className="blue">Enter comment</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};
