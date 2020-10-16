import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import clientOne from '../../../../images/customer-1.png';
import clientTwo from '../../../../images/customer-2.png';
import clientThree from '../../../../images/customer-3.png';
import ClientsFeedBackCard from '../ClientsFeedBackCard/ClientsFeedBackCard';
import { BeatLoader } from 'react-spinners';
import './ClientsFeedBack.css'
const clientsFeedbackArray = [
    {
        name: 'Nash Patrik',
        position: 'CEO, Manpol ',
        image: clientOne,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat  '
    },
    {
        name: 'Miriam Barron ',
        position: 'CEO, Manpol ',
        image: clientTwo,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat  '
    },
    {
        name: 'Web & Mobile design',
        position: 'CEO, Manpol ',
        image: clientThree,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat  '
    },
]
const ClientsFeedBack = () => {
    // const style = {textAlign: 'center'};
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        //    fetch('https://cryptic-headland-71782.herokuapp.com/getAllReview')
        //    .then(res=>res.json())
        //    .then(result=>setReviews(result))
        const data = { email: 'sadhf' };
        fetch('https://cryptic-headland-71782.herokuapp.com/getAllReview', {
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
        <div style={{ marginTop: '70px', marginBottom: '100px' }}>
            <Container>
                <h2 style={{ color: "#171b4e", marginBottom: "80px" }} className="text-center">Clients <span style={{ color: '#7ab259' }}>Feedback</span></h2>
                <Row>
                    {
                        reviews.length > 0 ? reviews.map((clientInfo, index) => <ClientsFeedBackCard clientInfo={clientInfo} key={index}></ClientsFeedBackCard>)
                            :
                            <Container>
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

export default ClientsFeedBack;