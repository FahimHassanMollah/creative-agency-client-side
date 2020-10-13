import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceCard = (props) => {
    return (
       
             <Col md={4} className="mb-5 text-muted">
            <Link className="btn " to={'/dashboardOrder'}>
            <div className="">
                <div style={{height:'80px'}} className="text-center mb-4">
                    <img style={{height:'80px',width:'80px'}} src={props.singleServiceInformation.image} alt="ima"/>
                </div>
                <div className="text-center mt-2">
                    <h5>{props.singleServiceInformation.title}</h5>
                    <p className="mt-3">{props.singleServiceInformation.description}</p>
                </div>
            </div>
            </Link>
        </Col>
       
    );
};

export default ServiceCard;