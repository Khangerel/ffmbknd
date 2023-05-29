import { Carousel } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import image77534141 from "../assets/images/image77534141.png"
import './HeroImage.css';
import { API } from '../api/axios';
export default function HeroImage({ image_list }) {
    const [index, setIndex] = useState(0);

    const handleSelect = () => {
        setIndex((prevIndex) => (prevIndex + 1) % 3);
    };
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const getData = () => {
        API.get('landing/', {}).then((response) => {
            if (response.status === 200) {
                if (response.data.length > 0) {
                    setImage1(response.data[0].image_swipe1);
                    setImage2(response.data[0].image_swipe2);
                    setImage3(response.data[0].image_swipe3);
                }
            }
        })
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className='position-relative'>
            <svg id="e9Sm4U7fjlI1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 118" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                <ellipse rx="40.160569" ry="40.622184" transform="matrix(1.221852 0 0 1.201795 58 59)" fill="none" stroke="rgb(64, 138, 235)" strokeWidth="9" className="index2" />
                <ellipse rx="23.850146" ry="22.926914" transform="matrix(1.484724 0 0 1.544525 58 59)" fill="none" stroke="rgb(64, 138, 235)" strokeWidth="7" className="index1" />
                <ellipse rx="17.073825" ry="18.124522" transform="matrix(1.581686 0 0 1.518991 58 59)" opacity="1" fill="rgb(64, 138, 235)" strokeWidth="0" className="index0" />
            </svg>
            <div className='position-absolute' id="FaroHeroSile" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <Carousel fade={false} id="FaroHeroSile" activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item className={index === 0 ? 'active fade-transition' : 'fade-transition'}>
                        <img className="d-block w-100" src={image1} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item className={index === 1 ? 'active fade-transition' : 'fade-transition'}>
                        <img className="d-block w-100" src={image2} alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item className={index === 2 ? 'active fade-transition' : 'fade-transition'}>
                        <img className="d-block w-100" src={image3} alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

    )
};