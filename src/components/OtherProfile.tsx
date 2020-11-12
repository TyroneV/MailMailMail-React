import React from "react";
import { Card, Col, Container, Navbar, Row, Image } from "react-bootstrap";
import { Redirect } from "react-router";
import { EditProfile } from "./EditProfile";
import { NavBar } from "./NavBar";
import { Feed } from "./Feed";
import { useSelector } from "react-redux";
import { RootStore } from "../reducers";


export const OtherProfile: React.FC = () => {
const user = useSelector((state: RootStore) => state.otherUser);



  return (
    !sessionStorage.getItem('user') ? <Redirect to="/" /> :
      <>
        <NavBar />
        <Container>
          <Row>
            <Col
              className="mt-5"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card style={{ width: "60rem" }}>
                <Card.Body>
                  <Container className="margin-20">
                    <Row>
                      <Col sm={3}>
                        <Image src={"https://mailmailmail-images.s3.us-east-2.amazonaws.com/"+user.user.photo} width="150" rounded />
                      </Col>
                      <Col sm={9}>
                        <div>
                          <Card.Title>
                            {user.user.firstName} {user.user.lastName}
                          </Card.Title>
                          {/* <Card.Subtitle className="mb-2" id="birthdayCard">
                          Birthday
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-2" id="jobCard">
                          Job Title
                        </Card.Subtitle> */}
                          <EditProfile />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <Navbar className="blue" variant="dark">
                    <Navbar.Brand className="mr-auto" href="#home">
                    {user.user.firstName}'s Posts
                  </Navbar.Brand>
                  </Navbar>
                  {/* Posts here */}
                  <Feed id={user.user.id} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
  );
};
