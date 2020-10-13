import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#fbd062" }}>
            <Container>
                <Row style={{paddingTop:"80px"}}>
                    <Col md={6}>
                        <div className='px-5'>
                            <h1 style={{color:'#2d2d2d'}} className="font-weight-bold">Let us handle your project, professionally.</h1>
                            <small>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</small>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control size="lg" type="email" placeholder="Your email adress" />

                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control size="lg" type="text" placeholder="Your name / company’s name " />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control  size="lg" as="textarea" rows="8" placeholder="Your message" />
                                </Form.Group>
                                
                                <button style={{backgroundColor:"#111430"}} className="btn px-5 text-white" type="submit">
                                    Send
                                 </button>
                            </Form>
                        </div>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
        </div>
    );
};

export default Footer;