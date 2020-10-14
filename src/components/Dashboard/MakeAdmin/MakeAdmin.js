import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';
const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = { from: { pathname: "/" } };
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => {
        // console.log(data);
        fetch('http://localhost:8080/addAdmin', {
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
    }
    return (
        <div style={{ overflow: "hidden" }}>
            <DashboardHeader></DashboardHeader>
            <Row className="" style={{ paddingLeft: "25px" }}>
                <Col md={3} className="mt-4 p-0">
                    <Sidebar></Sidebar>
                </Col>
                <Col md={9} style={{ backgroundColor: "#f4f7fc", height: "100vh" }}>
                    <div style={{ paddingRight: "300px", paddingTop: "60px", paddingLeft: "20px" }}>
                        
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h4>Email</h4>
                            <div className="form-row mb-3">
                            
                                <div className="form-group col-md-6 ">
                                   
                                    <input ref={register({ required: true })} type="email" name="email" className="form-control " placeholder="Enter email" />
                                </div>
                                <div className="form-group col-md-4">

                                    <button className="btn btn-success text-white" type="submit">
                                        Submit
                             </button>
                                </div>
                                <div className="form-group col-md-2">

                                </div>
                            </div>
                            

                        </form>
                    </div>
                </Col>
            </Row>
        </div>
    );
};
export default MakeAdmin;