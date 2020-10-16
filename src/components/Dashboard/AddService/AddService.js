import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUpload } from '@fortawesome/free-solid-svg-icons'

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = { from: { pathname: "/" } };
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data.image[0]);
        // console.log(data.image.filelist[0]);
        console.log(data);
        const formData = new FormData();
        const {title,image,description}=data;
        console.log(title,description);
        formData.append('file', data.image[0]);
        formData.append('title',title);
        formData.append('descritpion', description);
      

        fetch('https://cryptic-headland-71782.herokuapp.com/adminAddService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if(data){
                   history.replace(from);
                }
                               
            })
            .catch(error => {
                console.error(error)
            })



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
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label >Service Title</label>
                                    <input ref={register({ required: true })} type="text" name="title" className="form-control " placeholder="Enter Tile" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label >Icon</label>

                                    {/* <FontAwesomeIcon icon={faUpload} /> */}
                                    <input ref={register({ required: true })} name="image" type="file" className="form-control-file" />
                                </div>
                                <div className="form-group col-md-3">

                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <div className="mb-3">
                                    <label >Description</label>
                                        <textarea ref={register({ required: true })} className="form-control" name="description" placeholder="Enter description" rows="4"></textarea>
                                    </div>
                                </div>
                                <div className="form-group col-md-3">

                                </div>
                                <div className="form-group col-md-3">

                                </div>
                            </div>



                            {/* <div className="mb-3">
                                <input ref={register({ required: true })} type="text" name="name" value={loggedInUser.name} className="form-control " placeholder="Your name" />
                            </div>

                            <div className="mb-3">
                                <input ref={register({ required: true })} type="text" name="designation" className="form-control " placeholder="Company’s name, Designation" />
                            </div> */}


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

export default AddService;