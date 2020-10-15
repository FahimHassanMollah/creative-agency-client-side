import React, { useEffect, useState } from 'react';
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
    const [reviews, setReviews] = useState([])
    useEffect(() => {
    //    fetch('http://localhost:8080/getAllReview')
    //    .then(res=>res.json())
    //    .then(result=>setReviews(result))
   const data={email:'sadhf'};
    fetch('http://localhost:8080/getAllReview', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            setReviews(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, [])
    return (
        <div style={{marginTop:'70px',marginBottom:'100px'}}>
            <Container>
                <h2 style={{color:"#171b4e",marginBottom:"80px"}} className="text-center">Clients <span style={{color:'#7ab259'}}>Feedback</span></h2>
                <Row>
                   {
                      reviews.length>0 && reviews.map((clientInfo,index)=><ClientsFeedBackCard clientInfo={clientInfo} key={index}></ClientsFeedBackCard>)
                   }
                </Row>
            </Container>
        </div>
    );
};

export default ClientsFeedBack;