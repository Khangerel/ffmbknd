import { Carousel } from 'react-bootstrap';
import React from 'react';
import './HeroImage.css';
export default function HeroImage({ image1, image2, image3 }) {
    return (
        <div className='position-relative'>
            <svg id="e9Sm4U7fjlI1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 118" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                <ellipse rx="40.160569" ry="40.622184" transform="matrix(1.221852 0 0 1.201795 58 59)" fill="none" stroke="rgb(64, 138, 235)" strokeWidth="9" className="index2" />
                <ellipse rx="23.850146" ry="22.926914" transform="matrix(1.484724 0 0 1.544525 58 59)" fill="none" stroke="rgb(64, 138, 235)" strokeWidth="7" className="index1" />
                <ellipse rx="17.073825" ry="18.124522" transform="matrix(1.581686 0 0 1.518991 58 59)" opacity="1" fill="rgb(64, 138, 235)" strokeWidth="0" className="index0" />
            </svg>
            <div className='position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '85%', }}>
                <Carousel id="FaroHeroSile" fade>
                    <Carousel.Item >
                        <img className="d-block w-100" src={image1} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img className="d-block w-100" src={image2} alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img className="d-block w-100" src={image3} alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

    )
};