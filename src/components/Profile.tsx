import React, { useEffect } from "react";
import { Card, Col, Container, Navbar, Row, Image } from "react-bootstrap";
import { Redirect } from "react-router";
import { EditProfile } from "./EditProfile";
import { NavBar } from "./NavBar";
import { Feed } from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../reducers";
import { onLogin } from "../actions/actions";
import { UserState } from "../states/states";

export const Profile: React.FC = () => {
  const userString = sessionStorage.getItem("user");
  const sessionUser = JSON.parse(userString||"");
  const dispatch = useDispatch();
  const user = useSelector((state: RootStore) => state.login);

  useEffect(() => {
    setUser(sessionUser);
  }, []);
  
  const setUser = (u: UserState) => {
    dispatch(onLogin(u));
  };

  return (
    !sessionStorage.getItem('user')?<Redirect to="/"/>:
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
                      <Image src="/images/defaultImage.svg" width="150" rounded />
                    </Col>
                    <Col sm={9}>
                      <div>
                        <Card.Title>
                          {user.firstName} {user.lastName}
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
                    Posts
                  </Navbar.Brand>
                  <Navbar.Brand className="mr-auto" href="#home">
                    Photos
                  </Navbar.Brand>
                  <Navbar.Brand className="mr-auto" href="#home">
                    About
                  </Navbar.Brand>
                  <Navbar.Brand href="#home">Friends</Navbar.Brand>
                </Navbar>
                {/* Posts here */}
                <Feed/>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
