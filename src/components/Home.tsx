import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CreatePost } from "./CreatePost";
import { Feed } from "./Feed";
import { NavBar } from "./NavBar";



export const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container className="mt-5">
        <Row>
          <Col>
            <CreatePost/>
          </Col>
        </Row>
        {/* Post Here */}
        <Row className="mt-5">
            <Col>
                <Feed/>
            </Col>
        </Row>
      </Container>
    </>
  );
};
