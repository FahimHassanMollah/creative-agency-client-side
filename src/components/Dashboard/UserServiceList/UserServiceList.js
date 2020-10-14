import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';
import UseerServiceListCard from '../UserServiceListCard/UseerServiceListCard';

const UserServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [serviceList, setServiceList] = useState([]);
    const [serviceImageList, setServiceImageList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/getUserServiceListByEmail/'+loggedInUser.email)
        .then(res=>res.json())
        .then(result=>setServiceList(result));
        
    }, [loggedInUser.email])
    useEffect(() => {
        fetch('http://localhost:8080/getServiceImage')
        .then(res=>res.json())
        .then(result=>{
           
            setServiceImageList(result)});
    }, [loggedInUser.email])
    return (
        <div style={{ overflow: "hidden" }}>
            <DashboardHeader></DashboardHeader>
            <Row className="" style={{ paddingLeft: "25px" }}>
                <Col md={3} className="mt-4 p-0">
                    <Sidebar></Sidebar>
                </Col>
                <Col md={9} style={{ backgroundColor: "#f4f7fc", height: "400vh" }}>
                    <div style={{ paddingRight: "20px", paddingTop: "60px", paddingLeft: "20px" }}>
                      <Row>
                      {
                    (serviceImageList.length>0 && serviceList.length>0)?serviceList.map((service,index)=><UseerServiceListCard serviceImageList={serviceImageList} service={service} key={index} ></UseerServiceListCard>):""
                       }
                      </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default UserServiceList;