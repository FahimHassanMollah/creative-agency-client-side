import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import AdminServiceListTableRow from '../AdminServiceListTableRow/AdminServiceListTableRow';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';
import './AdminServiceList.css'

const AdminServiceList = () => {
    const [allOrderList, setAllOrderList] = useState([]);
    const [statusChanger, setStatusChanger] = useState();
    const [pageUpdater, setPageUpdater] = useState(1);
    const statusChange = (e,ids) => {
       
      console.log(e.target.value,ids);
      setStatusChanger(e.target.value);
      let data = {
          id:ids, status:e.target.value
      }
      fetch(`http://localhost:8080/updateOrderStatus`, {
          method: 'PATCH',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
      })
          .then(response => response.json())
          .then(data => {
             if(data){
              // console.log('Success:', data);
              setPageUpdater(pageUpdater+1);
             
             }
          })
          .catch(err=>console.log(err,'fasdfjdfjs'))
      // fetch(`http://localhost:8080/updateOrderStatus/${id}/${e.target.value}`)
      // .then(res => res.json())
      // .then(res => {
      //     console.log(res)
      //     // let inputs = document.createElement('div');
         
      // })
  }
    useEffect(() => {
      fetch('http://localhost:8080/getAllOrderInformation')
      .then(res=>res.json())
      .then(result=>setAllOrderList(result))
    }, [pageUpdater])
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
                               allOrderList.length>0 && allOrderList.map((orderInfo,index)=><AdminServiceListTableRow statusChanger={statusChanger} statusChange={statusChange} orderInfo={orderInfo} key={index} ></AdminServiceListTableRow>)
                           }
                          
                         </tbody>
                       </Table> 
                        </div>
                       }
                      </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AdminServiceList;