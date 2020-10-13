import React from 'react';
import ClientsFeedBack from '../ClientsFeedBack/ClientsFeedBack';
import Footer from '../Footer/Footer';

import Header from '../Header/Header';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';




const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <Slider></Slider>
            <ClientsFeedBack></ClientsFeedBack>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;