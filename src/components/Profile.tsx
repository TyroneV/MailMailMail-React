import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Navbar,
  Row,
} from "react-bootstrap";
import { NavBar } from "./NavBar";
import { Post } from "./Post";

export const Profile: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col
            className="margin-50"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card style={{ width: "60rem" }}>
              <Card.Body>
                <Container className="margin-20">
                  <Row>
                    <Col sm={3}>
                      <img
                        src="/defaultImage.svg"
                        width="150"
                        height="150"
                        id="userImageCard"
                      />
                    </Col>
                    <Col sm={9}>
                      <div>
                        <Card.Title>Name Here</Card.Title>
                        <Card.Subtitle className="mb-2" id="birthdayCard">
                          Birthday
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-2" id="jobCard">
                          Job Title
                        </Card.Subtitle>
                        <Button className="blue">Add M3</Button>
                      </div>
                    </Col>
                  </Row>
                </Container>
                <Navbar className="blue" variant="dark">
                  <Navbar.Brand className="mr-auto" href="#home">Posts</Navbar.Brand>
                  <Navbar.Brand className="mr-auto" href="#home">Photos</Navbar.Brand>
                  <Navbar.Brand className="mr-auto" href="#home">About</Navbar.Brand>
                  <Navbar.Brand href="#home">Friends</Navbar.Brand>
                </Navbar>
                {/* Posts here */}
                <Post/>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
