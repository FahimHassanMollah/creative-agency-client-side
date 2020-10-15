import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './UserServiceCard.css'
const UseerServiceListCard = (props) => {
    const [serviceImage, setServiceImage] = useState();
    let imageArray= props.serviceImageList.find((singleService)=>singleService.title===props.service.service);
    // console.log(imageArray);
    return (
    
            <Col md={4} className="mb-3 text-muted">

                <div className="card h-100 " style={{borderRadius:"20px"}}>
                    <div className="card-body">
                        <div>
                            <div className="d-flex d-flex justify-content-between">
                                <div className="w-25">
                                    
                                    {/* <img className="img-fluid w-75 rounded-circle" src={imageArray.image} alt=""/> */}
                                    <img className="img-fluid w-75 rounded-circle" src={`data:image/jpeg;base64,${imageArray.image.img}`} alt=""/>
                                  
                                </div>
                                <div className="text-left">
                                    <h6 className={(props.service.status==='pending'&&'pending px-3 py-2 mt-1')||(props.service.status==='done'&&'done px-3 py-2 mt-1')||(props.service.status==='ongoing'&&'ongoing px-3 py-2 mt-1')} >{props.service.status}</h6>
                                </div>
                            </div>
                            <div className="pt-2">
                                <h6 className="font-weight-bold">{props.service.service}</h6>
                                <p className="text-justify text-muted">{props.service.description}</p>
                            </div>
                        </div>

                    </div>
                </div>

            </Col>
       
    );
};

export default UseerServiceListCard;