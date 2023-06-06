import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Row, Image } from "react-bootstrap";
import ArrowRightCircle from './ArrowRightCircle';
import HorizontalCardImage1 from '../assets/images/unsplash_nTSvjVD8n-c.png'
import "./Card.css";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function HorizontalCard({ data, id}) {
    const { t } = useTranslation();
    const truncateString = (str, limit) => {
        if (str.length <= limit) {
            return str;
        }
        return str.substr(0, limit) + '...';
    };
    const baseURI = window.location.protocol.concat("//").concat(window.location.hostname);
    return (
        <div className="horizontal_card d-flex pe-4 mb-5">
            <div className=''>
                <Image src={data.image_thumbnail} width={190} className='border-none d-none-sm d-none-small-none d-none-md-none'/>
                <Image src={data.image_thumbnail} width={150} className='border-none  d-block d-xl-none d-lg-none'/>
            </div>
            <div className="ps-5 pe-5 d-sm-none d-md-block">
                <div className="pe-5">
                    {
                        data.tags.map((tag, index) => (
                            <Button className="px-4 pt-1 pb-1 bg-prime-weak border-none font-weight-bold" key={index}>
                                {tag.name}
                            </Button>
                        ))
                    }
                    <h3 className="pt-3">
                        {data.title}
                    </h3>
                    <p className='pt-2 text-gray text-align-justify'>{data.description}</p>
                    <div className="d-flex justify-content-end">
                        <Link className="text-dark me-4 text-bold" to={`/news/${id}`}>{t("landing.continue_reading")}</Link>
                    </div>
                 </div>
            </div>
        </div>
    )
}
export default HorizontalCard;