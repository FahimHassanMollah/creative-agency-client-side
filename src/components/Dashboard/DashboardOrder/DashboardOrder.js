import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import AdminServiceListTableRow from '../AdminServiceListTableRow/AdminServiceListTableRow';
import { BeatLoader } from 'react-spinners';
const DashboardOrder = () => {
    const { serviceName, serviceDescription } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [pageUpdater, setPageUpdater] = useState(1);
    const history = useHistory();
    const location = useLocation();
    const { from } = { from: { pathname: "/dashboardUserServiceList" } };
    const { register, handleSubmit, watch, errors } = useForm();



    const [admin, setAdmin] = useState(false);
    const [statusChanger, setStatusChanger] = useState()
    const [allOrderList, setAllOrderList] = useState([]);
    useEffect(() => {
        const data = {
            email: loggedInUser.email
        }

        fetch('https://cryptic-headland-71782.herokuapp.com/getAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                setAdmin(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [loggedInUser.email])

    useEffect(() => {
        fetch('https://cryptic-headland-71782.herokuapp.com/getAllOrderInformation')
            .then(res => res.json())
            .then(result => setAllOrderList(result))
    }, [pageUpdater])

    const onSubmit = data => {
        data.userPhoto = loggedInUser.photo;
        data.status = 'pending';
        // console.log(data);
        fetch('https://cryptic-headland-71782.herokuapp.com/saveOrderInformations', {
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
    const statusChange = (e, ids) => {

        console.log(e.target.value, ids);
        setStatusChanger(e.target.value);
        let data = {
            id: ids, status: e.target.value
        }
        fetch(`https://cryptic-headland-71782.herokuapp.com/updateOrderStatus`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setPageUpdater(pageUpdater + 1);

                }
            })
            .catch(err => console.log(err, 'fasdfjdfjs'))
        // fetch(`https://cryptic-headland-71782.herokuapp.com/updateOrderStatus/${id}/${e.target.value}`)
        // .then(res => res.json())
        // .then(res => {
        //     console.log(res)
        //     // let inputs = document.createElement('div');

        // })
    }

    return (
        <div style={{ overflow: "hidden" }}>
            <DashboardHeader></DashboardHeader>
            <Row className="" style={{ paddingLeft: "25px" }}>
                <Col md={3} sm={3} className="mt-4 p-0">
                    <Sidebar></Sidebar>
                </Col>
                <Col md={9} sm={9} style={{ backgroundColor: "#f4f7fc", height: "100vh" }}>
                    {
                        admin === false ? <div style={{ paddingRight: "200px", paddingTop: "60px", paddingLeft: "20px" }}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <input ref={register({ required: true })} type="text" name="name" value={loggedInUser.name} className="form-control " placeholder="Your name / company's name" />
                                </div>
                                <div className="mb-3">
                                    <input ref={register({ required: true })} type="email" name="email" value={loggedInUser.email} className="form-control " placeholder="Your email adress" />
                                </div>
                                <div className="mb-3">
                                    <input ref={register({ required: true })} value={serviceName} type="text" name="service" className="form-control " placeholder="Enter service name" />
                                </div>
                                <div className="mb-3">
                                    <textarea ref={register({ required: true })} value={serviceDescription} className="form-control" name="description" placeholder="project details" rows="4"></textarea>
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
                            :
                            <div style={{ paddingRight: "20px", paddingTop: "60px", paddingLeft: "20px" }}>
                                <Row className="">
                                    {
                                        <div className="table-responsive-lg">
                                            <Table>
                                                <thead >
                                                    <tr className="bg-tr">
                                                        <th className="bg-tr">Name</th>
                                                        <th className="bg-tr">Email Id</th>
                                                        <th className="bg-tr">Service</th>
                                                        <th className="bg-tr">Project Details</th>
                                                        <th className="bg-tr">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        allOrderList.length > 0 && allOrderList.map((orderInfo, index) => <AdminServiceListTableRow statusChanger={statusChanger} statusChange={statusChange} orderInfo={orderInfo} key={index} ></AdminServiceListTableRow>)


                                                    }

                                                </tbody>
                                            </Table>
                                           
                                        </div>

                                    }
                                </Row>
                            </div>
                    }
                </Col>
            </Row>
        </div>
    );
};
export default DashboardOrder;