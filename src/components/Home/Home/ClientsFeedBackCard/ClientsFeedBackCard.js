import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ClientsFeedBackCard = (props) => {
    
    return (

        <Col md={4} className="mb-5 text-muted ">
            
            <div className="card h-100">
                <div className="card-body">
                    <div>
                        <div className="d-flex">
                            <div className="w-25">
                                <img className="img-fluid w-75 rounded-circle" src={props.clientInfo.userPhoto} alt="" />
                            </div>
                            <div className="text-left">
                                <h6 className="font-weight-bold">{props.clientInfo.name}</h6>
                                <h6>{props.clientInfo.designation}</h6>
                            </div>
                        </div>
                        <div className="pt-2">
                            <p className="text-justify text-muted">{props.clientInfo.description}</p>
                        </div>
                    </div>

                </div>
            </div>
          
        </Col>


    );
};

export default ClientsFeedBackCard;