import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import NavBar from '../Home/NavBar/NavBar';
import './ComingSoon.css'
const ComingSoon = () => {
    return (
        <div>
            <div className="">
                <NavBar></NavBar>
                <Container>
                    <Row>
                        <Col sm={6} className="mx-auto">
                            <img className="blog-body" src={`https://traversecityboardgamers.com/wp-content/uploads/2019/04/istockphoto-516590789-612x612.jpg`} alt="" />
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    );
};

export default ComingSoon;