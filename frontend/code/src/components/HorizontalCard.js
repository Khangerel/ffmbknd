import React, { useState } from 'react';
import { Button, Card, Col, Row } from "react-bootstrap";
import ArrowRightCircle from './ArrowRightCircle';
import "./Card.css";
function HorizontalCard() {
    return (
        <Card>
            <Row>
                <Col xs="12" lg="4">
                    <Card.Img variant="top" src="holder.js/100px160" />
                </Col>
                <Col xs="12" lg="8">
                    <Card.Body>
                        <Card.Title>Meta Quest Pro will be available for purchase on October 25</Card.Title>
                        <Card.Text>Meta Quest Pro is the first entry in our new highend line of devices, and it’s packed with innovative features like high-res sensors for</Card.Text>
                    </Card.Body>
                    <Card.Footer className="border-none bg-none">
                        <Button className='bg-none btn btn-primary text-black d-flex align-items-center'>
                            <ArrowRightCircle className="me-2"/>
                            <div className='ms-2'>
                                Read more
                            </div>
                            
                        </Button>
                    </Card.Footer>
                </Col>
            </Row>
        </Card>
    )
}
export default HorizontalCard;