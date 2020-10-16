import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import frame from '../../../../images/logos/Frame.png'

const HeaderMain = () => {
    return (
        <div>
            <Container className="mt-3" style={{paddingBottom:"150px"}}>
                <Row>
                    <Col md={5}>
                        <div className="mt-5 pt-4">
                            <h1 className="font-weight-bold pb-0 mb-0" style={{color:"#111430",fontSize:"50px"}}>Let’s Grow Your <br />
                            Brand To The <br /> Next Level</h1>
                            <p style={{color:"#111430"}} className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                            <Link style={{backgroundColor:"#111430"}} className='btn btn-primary px-5 py-2'>Hire us</Link>
                        </div>
                    </Col>
                    <Col md={7}>
                        <div>
                            <img className="img-fluid" src={frame} alt="this is frame"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeaderMain;