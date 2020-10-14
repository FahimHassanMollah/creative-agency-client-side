import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
const DashboardOrder = () => {
    const {serviceName,serviceDescription}=useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = { from: { pathname: "/dashboardUserServiceList" } };
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        data.userPhoto=loggedInUser.photo;
        data.status='pending';
        console.log(data);
        fetch('http://localhost:8080/saveOrderInformations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                history.replace(from);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    return (
        <div style={{ overflow: "hidden" }}>
            <DashboardHeader></DashboardHeader>
            <Row className="" style={{ paddingLeft: "25px" }}>
                <Col md={3} className="mt-4 p-0">
                    <Sidebar></Sidebar>
                </Col>
                <Col md={9} style={{ backgroundColor: "#f4f7fc", height: "100vh" }}>
                    <div style={{ paddingRight: "200px", paddingTop: "60px", paddingLeft: "20px" }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <input  ref={register({ required: true })} type="text" name="name" value={loggedInUser.name} className="form-control " placeholder="Your name / company's name" />
                            </div>
                            <div className="mb-3">
                                <input  ref={register({ required: true })} type="email" name="email" value={loggedInUser.email} className="form-control " placeholder="Your email adress" />
                            </div>
                            <div className="mb-3">
                                <input  ref={register({ required: true })} value={serviceName} type="text" name="service" className="form-control " placeholder="Enter service name" />
                            </div>
                            <div className="mb-3">
                                <textarea  ref={register({ required: true })} value={serviceDescription} className="form-control" name="description" placeholder="project details" rows="4"></textarea>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <input ref={register({ required: true })} type="number" name="price" className="form-control " placeholder="Enter price(Tk)" />
                                </div>
                                <div className="form-group col-md-9">
                                </div>
                            </div>
                            <button style={{ backgroundColor: "#111430" }} className="btn px-5 text-white py-2" type="submit">
                                Send
                                 </button>
                        </form>
                    </div>
                </Col>
            </Row>
        </div>
    );
};
export default DashboardOrder;