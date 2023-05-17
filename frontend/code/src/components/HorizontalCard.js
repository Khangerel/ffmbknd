import React, { useState } from 'react';
import { Button, Card, Col, Row, Image} from "react-bootstrap";
import ArrowRightCircle from './ArrowRightCircle';
import HorizontalCardImage1 from '../assets/images/unsplash_nTSvjVD8n-c.png'
import "./Card.css";
import { Link } from 'react-router-dom';
function HorizontalCard() {
    return (
        <div className="horizontal_card d-flex pe-4">
            <div>
            
                <Image src={HorizontalCardImage1} height={254} width={190} className='border-none' />
            </div>
            <div className="ps-4 pe-5">
                <div className="pe-5">
                    <Button bg="secondary" className="px-4 pt-1 pb-1">
                        <b>MEDIA</b>
                    </Button>
                    <h3 className="pt-3">
                        Digital Literacy in Mongolia
                    </h3>
                    <p className="pt-2 text-gray">
                        (FFM) is a non-governmental organization that has focused on promoting adequate non-governmental organization
                    </p>
                    <div className="d-flex justify-content-end">
                        <Link className="text-dark me-4 text-bold">Continue reading</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HorizontalCard;