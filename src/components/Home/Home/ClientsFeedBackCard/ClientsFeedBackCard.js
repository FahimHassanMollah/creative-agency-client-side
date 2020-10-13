import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ClientsFeedBackCard = (props) => {
    return (

        <Col md={4} className="mb-5 text-muted">
            <Link to={'/hi'} className="btn ">
            <div className="card">
                <div className="card-body">
                    <div>
                        <div className="d-flex">
                            <div className="w-25">
                                <img className="img-fluid w-75" src={props.clientInfo.image} alt="" />
                            </div>
                            <div className="text-left">
                                <h5 className="font-weight-bold">{props.clientInfo.name}</h5>
                                <h6>{props.clientInfo.position}</h6>
                            </div>
                        </div>
                        <div className="pt-2">
                            <p className="text-justify text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, veritatis!</p>
                        </div>
                    </div>

                </div>
            </div>
            </Link>
        </Col>


    );
};

export default ClientsFeedBackCard;