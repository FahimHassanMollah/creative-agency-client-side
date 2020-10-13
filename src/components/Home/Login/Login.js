import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginHeader from './LoginHeader';

const Login = () => {
    const googleSignInBtn = (params) => {

    }
    return (
        <div>
            <LoginHeader></LoginHeader>
            <Container>
                <Row className="mt-2">
                    <Col md={7} className="mx-auto">
                      
                            <div className="d-flex align-items-center justify-content-center" style={{ height: '450px', border: '1px solid #ababab' }}>
                                <div className="">
                                    <h3 className="text-center pb-3 font-weight-bold">Login With</h3>
                                    <div className="d-flex justify-content-center">
                                        <Button className="" style={{ fontSize: "20px" }} variant="outline-info" onClick={googleSignInBtn}><img className="px-4 mx-2" src="https://img.icons8.com/color/30/000000/google-logo.png" alt="Google" /> Continue with Google</Button>
                                    </div>
                                    <h6 className="pt-2">Don’t have an account? <Link  >Create an account</Link></h6>
                                </div>
                            </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;