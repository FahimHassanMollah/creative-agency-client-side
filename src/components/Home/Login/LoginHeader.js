import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/creativeagency.png'
const LoginHeader = () => {
    return (
        <div>
             <Container>
                <Row>
                    <Col className="mx-auto" md={8}>
                        <Navbar bg="" variant="">
                            <div className="mx-auto">
                                <Link to={'/'}>
                                <Navbar.Brand>
                                    <img
                                        alt="logo"
                                        src={logo}
                                        width="200"
                                        className="d-inline-block align-top"
                                    />
                                </Navbar.Brand>
                                </Link>
                            </div>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginHeader;