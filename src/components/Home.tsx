import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavBar } from './NavBar';

export const Home: React.FC = () => {





    return (
        <>
            <Container fluid>
                <Row>
                    <Col id="navcolumn">
                        <NavBar />
                    </Col>
                </Row>
            </Container>
        </>
    )
}