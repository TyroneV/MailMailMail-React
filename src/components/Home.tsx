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
        <Row>
            <Col>
                <Feed/>
            </Col>
        </Row>
      </Container>
    </>
  );
};
