import React from 'react';
import Carousel from "react-elastic-carousel";
import './styles.css'
import sliderOne from '../../../../images/carousel-1.png';
import sliderTwo from '../../../../images/carousel-2.png';
import sliderThree from '../../../../images/carousel-5.png';
import sliderFour from '../../../../images/carousel-4.png';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 }
];
const Slider = () => {
    return (
        <div style={{backgroundColor:"#111430",padding:"100px 10px 20px 10px"}} >
            <h2 className="text-center pb-5 text-white">Here are some of <span style={{color:"#7ab259"}}>our works</span></h2>
            <div className="text-center">
                <Carousel breakPoints={breakPoints}>

                    <div className="">
                       <img className="img-fluid w-75" src={sliderOne} alt=""/>
                    </div>
                    <div>
                    <img className="img-fluid w-75" src={sliderTwo} alt=""/>
                    </div>
                    <div>
                    <img className="img-fluid w-75" src={sliderThree} alt=""/>
                    </div>
                    <div>
                    <img className="img-fluid w-75" src={sliderFour} alt=""/>
                    </div>
                   


                </Carousel>
            </div>
        </div>
    );
};

export default Slider;