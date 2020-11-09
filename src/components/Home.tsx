import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CreatePost } from "./CreatePost";
import { Feed } from "./Feed";
import { NavBar } from "./NavBar";

const userString = sessionStorage.getItem("user");
let user: any;


const createPost = () => {
  if (userString) {
    user = JSON.parse(userString || "");
  }
  return <CreatePost user={user} />;
};

export const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container className="mt-5">
        <Row>
          <Col>{createPost()}</Col>
        </Row>
        {/* Post Here */}
        <Row className="mt-5">
          <Col>
            <Feed />
          </Col>
        </Row>
      </Container>
    </>
  );
};
