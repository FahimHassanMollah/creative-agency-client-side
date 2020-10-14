import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';

const UserReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = { from: { pathname: "/" } };
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => {
      
        data.userPhoto=loggedInUser.photo;
        
        fetch('http://localhost:8080/addReview', {
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
                    <div style={{ paddingRight: "200px", paddingTop: "60px", paddingLeft: "20px" }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <input  ref={register({ required: true })} type="text" name="name" value={loggedInUser.name} className="form-control " placeholder="Your name" />
                            </div>
                           
                            <div className="mb-3">
                                <input ref={register({ required: true })}  type="text" name="designation" className="form-control " placeholder="Company’s name, Designation" />
                            </div>
                            <div className="mb-3">
                                <textarea ref={register({ required: true })}  className="form-control" name="description" placeholder="description" rows="4"></textarea>
                            </div>
                           
                            <button style={{ backgroundColor: "#111430" }} className="btn px-5 text-white py-2" type="submit">
                                Submit
                                 </button>
                        </form>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default UserReview;