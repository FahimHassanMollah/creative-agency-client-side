import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';
const DashboardOrder = () => {
    return (
        <div style={{overflow:"hidden"}}>
            <DashboardHeader></DashboardHeader>
           
                <Row className="" style={{paddingLeft:"25px"}}>
                    <Col md={3} className="mt-4 p-0">
                        <Sidebar></Sidebar>
                    </Col>
                    <Col md={9} style={{backgroundColor:"#f4f7fc",height:"100vh"}}>
                        <div style={{ paddingRight: "200px",paddingTop:"60px",paddingLeft:"20px" }}>
                            <form>
                                <div className="mb-3">
                                    <input type="email" name="email" className="form-control " placeholder="Your name / company's name" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" name="adress" className="form-control " placeholder="Your email adress" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" name="service" className="form-control " placeholder="" />
                                </div>
                                <div className="mb-3">
                                    <textarea class="form-control" name="description" placeholder="project details" rows="4"></textarea>
                                </div>
                                <div className="form-row">
                                    <div class="form-group col-md-6">
                                        <input type="number" name="price" className="form-control " placeholder="price" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <input type="file" class="form-control-file" />
                                    </div>


                                </div>
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </form>
                        </div>
                    </Col>
                </Row>
           
        </div>
    );
};
export default DashboardOrder;