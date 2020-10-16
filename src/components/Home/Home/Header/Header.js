import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../NavBar/NavBar';
import './Header.css';
import slack from '../../../../images/logos/slack.png';
import google from '../../../../images/logos/google.png';
import uber from '../../../../images/logos/uber.png';
import netflix from '../../../../images/logos/netflix.png';
import airnb from '../../../../images/logos/airbnb.png';
const Header = () => {
    return (
        <div>
            <div className="background-image height">
                <NavBar></NavBar>
                <HeaderMain></HeaderMain>
            </div>
            <Container style={{paddingTop:"90px"}}>
                <Row className="d-flex justify-content-center">
                    <Col md={10} className="">
                       <div className="d-flex justify-content-between text-center">
                        <div><img className="img-fluid w-70 "style={{height:'40px',width:'100px'}}  src={slack} alt=""/></div>
                        <div><img className="img-fluid w-70" style={{height:'40px',width:'100px'}} src={google} alt=""/></div>
                        <div><img className="img-fluid w-70" style={{height:'40px',width:'100px'}} src={uber} alt=""/></div>
                        <div><img className="img-fluid w-70" style={{height:'40px',width:'100px'}} src={netflix} alt=""/></div>
                        <div><img className="img-fluid w-70" style={{height:'40px',width:'100px'}} src={airnb} alt=""/></div>
                       </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;