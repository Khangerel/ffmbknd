import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import contactus from "../assets/images/contactus.png";
// import CardImage2 from "../assets/images/cardimage2.png";
import ArrowRightCircle from "../components/ArrowRightCircle";
import { Image } from "react-bootstrap";
import LogoGrey from "../components/LogoGrey";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import "./ContactUs.css"
import frame_39942 from "../assets/images/frame_39942.png";
import ic_baseline_local_phone from "../assets/images/ic_baseline_local_phone.svg";
import solar_letter_unread_bold from "../assets/images/solar_letter_unread_bold.svg";
import material_symbols_location_on_rounded from "../assets/images/material_symbols_location_on_rounded.svg";
import { useState } from "react";
function ContactUs() {
    const { t } = useTranslation();
    const [validated, setValidated] = useState(false);
    
    return (
        <Container>
            {/* <h1 className="title text-center pt-5">{t("menu.contact_us")}</h1> */}
            <Row className="m-5 ">
                <Col xs="12" lg="5" className="p-0">
                    <div style={{ background: `url(${frame_39942})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="h-100 rounded pb-5 min-vh-75">
                        <div className="p-5">
                            <h3 className="text-white">
                                Contact information
                            </h3>
                            <p className="text-white">
                                Fill up the form and our team will get back to you.
                            </p>
                            <h4 className="text-white mt-3 mb-3 fw-normal" style={{ color: '#fff!important' }}>
                                <Image src={ic_baseline_local_phone} className="me-4" />
                                7000-7222
                            </h4>
                            <h5 className="text-white mt-3 mb-3 fw-normal">
                                <Image src={solar_letter_unread_bold} className="me-4" />
                                info@farofoundation.org
                            </h5>
                            <h5 className="text-white mt-3 mb-3 fw-normal">
                                {/* <Row>
                                    <Col></Col>
                                </Row> */}
                                <Image src={material_symbols_location_on_rounded} className="me-4" />
                                702, Galaxy Tower, Mahatma Ghandi Street, Khan-Uul District, Ulaanbaatar, Mongolia
                            </h5>

                        </div>

                    </div>
                </Col>
                <Col xs="12" lg="7" className="pt-5 ps-5">
                    <Form noValidate validated={validated}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom01" >
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    defaultValue="Mark"
                                    className="border-none border-bottom"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                    defaultValue="Otto"
                                    className="border-none border-bottom"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                <Form.Label>Mail</Form.Label>
                                <Form.Control type="text" placeholder="City" required className="border-none border-bottom"/>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="State" required className="border-none border-bottom"/>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid state.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3 d-flex">
                            <Form.Check
                                required
                                label="General Inquiry"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                                type="radio"
                                className="me-4"
                            />
                            <Form.Check
                                required
                                label="Partnership Opportunity"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                                type="radio"
                                className="me-4"
                            />
                            <Form.Check
                                required
                                label="Training"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                                type="radio"
                                className="me-4"
                            />
                        </Form.Group>
                        <Form.Group  controlId="validationCustom04" className="mb-4">
                                <Form.Label>Message</Form.Label>
                                <Form.Control type="text" placeholder="State" required className="border-none border-bottom"/>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid state.
                                </Form.Control.Feedback>
                        </Form.Group>
                        <div className="d-flex  justify-content-end">
                            <Button type="submit" className="px-4 rounded-pill">Send Message</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
export default ContactUs;