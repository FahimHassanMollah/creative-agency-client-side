import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import clientOne from '../../../../images/customer-1.png';
import clientTwo from '../../../../images/customer-2.png';
import clientThree from '../../../../images/customer-3.png';
import ClientsFeedBackCard from '../ClientsFeedBackCard/ClientsFeedBackCard';
const clientsFeedbackArray =[
    {
        name:'Nash Patrik',
        position:'CEO, Manpol ',
        image:clientOne,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat  '
    },
    {
        name:'Miriam Barron ',
        position:'CEO, Manpol ',
        image:clientTwo,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat  '
    },
    {
        name:'Web & Mobile design',
        position:'CEO, Manpol ',
        image:clientThree,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat  '
    },
]
const ClientsFeedBack = () => {
    return (
        <div style={{marginTop:'70px',marginBottom:'100px'}}>
            <Container>
                <h2 style={{color:"#171b4e",marginBottom:"80px"}} className="text-center">Clients <span style={{color:'#7ab259'}}>Feedback</span></h2>
                <Row>
                   {
                       clientsFeedbackArray.map((clientInfo,index)=><ClientsFeedBackCard clientInfo={clientInfo} key={index}></ClientsFeedBackCard>)
                   }
                </Row>
            </Container>
        </div>
    );
};

export default ClientsFeedBack;