import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import AdminServiceListTableRow from '../AdminServiceListTableRow/AdminServiceListTableRow';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';
import './AdminServiceList.css'

const AdminServiceList = () => {
    const [allOrderList, setAllOrderList] = useState([]);
    useEffect(() => {
      fetch('http://localhost:8080/getAllOrderInformation')
      .then(res=>res.json())
      .then(result=>setAllOrderList(result))
    }, [])
    return (
        <div style={{ overflow: "hidden" }}>
            <DashboardHeader></DashboardHeader>
            <Row className="" style={{ paddingLeft: "25px" }}>
                <Col md={3} className="mt-4 p-0">
                    <Sidebar></Sidebar>
                </Col>
                <Col md={9} style={{ backgroundColor: "#f4f7fc", height: "400vh" }}>
                    <div style={{ paddingRight: "20px", paddingTop: "60px", paddingLeft: "20px" }}>
                      <Row className="">
                      {
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
                               allOrderList.length>0 && allOrderList.map((orderInfo,index)=><AdminServiceListTableRow orderInfo={orderInfo} key={index} ></AdminServiceListTableRow>)
                           }
                          
                         </tbody>
                       </Table> 
                       }
                      </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AdminServiceList;