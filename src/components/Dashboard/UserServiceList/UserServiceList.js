import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BeatLoader } from 'react-spinners';
import { UserContext } from '../../../App';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';
import UseerServiceListCard from '../UserServiceListCard/UseerServiceListCard';

const UserServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [serviceList, setServiceList] = useState([]);
    const [serviceImageList, setServiceImageList] = useState([]);
    useEffect(() => {
        fetch('https://cryptic-headland-71782.herokuapp.com/getUserServiceListByEmail/' + loggedInUser.email)
            .then(res => res.json())
            .then(result => setServiceList(result));

    }, [loggedInUser.email])
    useEffect(() => {
        fetch('https://cryptic-headland-71782.herokuapp.com/getServiceImage')
            .then(res => res.json())
            .then(result => {

                setServiceImageList(result)
            });
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
                                (serviceImageList.length > 0 && serviceList.length > 0) ? serviceList.map((service, index) => <UseerServiceListCard serviceImageList={serviceImageList} service={service} key={index} ></UseerServiceListCard>)
                                    : <Container>
                                        <Row className="justify-content-md-center">
                                            <Col md={3} >
                                               
                                                <BeatLoader
                                                    className="text-center" size={15} margin={1} ></BeatLoader>
                                            </Col>
                                        </Row>
                                    </Container>




                            }
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default UserServiceList;