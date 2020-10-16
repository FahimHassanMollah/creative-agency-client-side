import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BeatLoader } from 'react-spinners';
import service1 from '../../../../images/icons/service1.png';
import service2 from '../../../../images/icons/service2.png';
import service3 from '../../../../images/icons/service3.png';
import ServiceCard from '../ServiceCard/ServiceCard';

const service =[
    {
        title:'Graphic design',
        description:'Amazing flyers, social media posts and brand representations that would make your brand stand out. ',
        image:service1
    },
    {
        title:'Web development ',
        description:'With well written codes, we build amazing apps for all platforms, mobile and web apps in general. ',
        image:service2
    },
    {
        title:'Web & Mobile design',
        description:'We craft stunning and amazing web UI, using a well drrafted UX to fit your product. ',
        image:service3
    },
]

const Service = () => {
    const [allService, setAllService] = useState([])
    useEffect(() => {
       fetch('https://cryptic-headland-71782.herokuapp.com/getAllService')
       .then(res=>res.json())
       .then(result=>{
         
        setAllService(result)
       });
    }, [])
    return (
        <div style={{marginTop:"150px"}}>
            <h2 style={{color:"#2d2d2d"}} className="text-center font-weight-bold mb-5">Provide awesome <span style={{color:'#7ab259'}}>services</span> </h2>
           <Container className="pt-4">
               <Row>
               {
               allService.length>0 ? allService.map((singleServiceInformation,index)=><ServiceCard singleServiceInformation={singleServiceInformation} key={index}></ServiceCard>)
               :
               <Container className="m-5">
               <Row className="justify-content-md-center">
                   <Col md={3} >

                       <BeatLoader
                           className="text-center" size={20} margin={2} ></BeatLoader>
                   </Col>
               </Row>
           </Container>
            }
               </Row>
           </Container>
        </div>
    );
};

export default Service;