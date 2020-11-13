import React from "react";
import { Card, Col, Container, Navbar, Row, Image } from "react-bootstrap";
import { Redirect } from "react-router";
import { EditProfile } from "./EditProfile";
import { NavBar } from "./NavBar";
import { Feed } from "./Feed";
import { useSelector } from "react-redux";
import { RootStore } from "../reducers";
import configData from "../config.json";

export const Profile: React.FC = () => {
  const user = useSelector((state: RootStore) => state.login);
  return (
    !sessionStorage.getItem('user')?<Redirect to="/"/>:
    <>
      <NavBar />
      <Container>
        <p></p>
        <Row>
          <Col
            className="mt-5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card style={{ width: "60rem" }}>
              <Card.Body>
                <Container className="m-4">
                  <Row>
                    <Col sm={3}>
                      <Image src={configData.S3_URL +user.photo} height="150" width="150" roundedCircle/>
                    </Col>
                    <Col sm={9}>
                      <div>
                        <Card.Title>
                          {user.firstName} {user.lastName}
                        </Card.Title>

                        <EditProfile />
                      </div>
                    </Col>
                  </Row>
                </Container>
                <Navbar className="blue" variant="dark">
                  <Navbar.Brand className="mr-auto" href="#home">
                    {user.firstName}'s Posts
                  </Navbar.Brand>
                </Navbar>
                {/* Posts here */}
                <Feed id={user.id}/>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
