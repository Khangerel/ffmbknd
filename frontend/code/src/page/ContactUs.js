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
import { useState, useEffect } from "react";
import { API } from "../api/axios";

function ContactUs() {
    const { t } = useTranslation();
    const [validated, setValidated] = useState(false);
    const [title_data, setTitleData] = useState("");
    const [helper_data, setHelperData] = useState("");
    const [phone_data, setPhoneData] = useState("");
    const [email_data, setEmailData] = useState("");
    const [address_data, setAddressData] = useState("");

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    // const [lastname, setLastname] = useState("");
    const [is_training, setIsTraining] = useState(false);
    const [is_generail_inquiry, setIsGenerailInquiry] = useState(false);
    const [is_partnership_opportunity, setIsPartnershipOpportunity] = useState(false);

    const getData = ()=>{
        API.get(`info/?lang_id=${localStorage.getItem('lang_id')}`, {}).then((response)=>{
          if (response.status === 200) {
            setTitleData(response.data[0].title);
            setPhoneData(response.data[0].phone);
            setEmailData(response.data[0].email);
            setAddressData(response.data[0].address);
            setHelperData(response.data[0].helper);
          }
        })
      }
      useEffect(() => {
        getData();
      }, [])
    return (
        <Container>
            {/* <h1 className="title text-center pt-5">{t("menu.contact_us")}</h1> */}
            <Row className="m-5" id="contactUs">
                <Col xs="12" lg="5" className="p-0">
                    <div style={{ background: `url(${frame_39942})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="h-100 rounded pb-5 min-vh-75">
                        <div className="p-5">
                            <h3 className="text-white">
                                {title_data}
                            </h3>
                            <p className="text-white">
                                {helper_data}
                            </p>
                            <h4 className="text-white mt-3 mb-3 fw-normal" style={{ color: '#fff!important' }}>
                                <Image src={ic_baseline_local_phone} className="me-4" />
                                {phone_data}
                            </h4>
                            <h5 className="text-white mt-3 mb-3 fw-normal">
                                <Image src={solar_letter_unread_bold} className="me-4" />
                                {email_data}
                            </h5>
                            <h5 className="text-white mt-3 mb-3 fw-normal">
                                {/* <Row>
                                    <Col></Col>
                                </Row> */}
                                <Image src={material_symbols_location_on_rounded} className="me-4" />
                                {address_data}
                            </h5>

                        </div>

                    </div>
                </Col>
                <Col xs="12" lg="7" className="pt-5 ps-5">
                    <Form noValidate validated={validated}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom01" >
                                <Form.Label className="text-gray">First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    className="border-none border-bottom"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label className="text-gray">Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                    className="border-none border-bottom"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                <Form.Label className="text-gray">Mail</Form.Label>
                                <Form.Control type="text" placeholder="Mail" required className="border-none border-bottom"/>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                                <Form.Label className="text-gray">Phone</Form.Label>
                                <Form.Control type="text" placeholder="Phone" required className="border-none border-bottom"/>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid state.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3 d-flex">
                            <Form.Check
                                label="General Inquiry"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                                type="radio"
                                className="me-4"
                                onClick={ e => {
                                    setIsTraining(!is_training);
                                }}
                                checked={is_training === true}
                            />
                            <Form.Check
                                label="Partnership Opportunity"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                                type="radio"
                                onClick={e=>{
                                    setIsGenerailInquiry(!is_generail_inquiry)
                                }}
                                checked={is_generail_inquiry === true}
                                className="me-4"
                            />
                            <Form.Check
                                label="Training"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                                type="radio"
                                onClick={e=>{
                                    setIsPartnershipOpportunity(!is_partnership_opportunity)
                                }}
                                checked={is_partnership_opportunity === true}
                                className="me-4"
                            />
                        </Form.Group>
                        <Form.Group  controlId="validationCustom04" className="mb-4">
                                <Form.Label className="text-gray">Message</Form.Label>
                                <Form.Control type="text" placeholder="State" required className="border-none border-bottom"/>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid state.
                                </Form.Control.Feedback>
                        </Form.Group>
                        <div className="d-flex  justify-content-end">
                            <Button type="submit" className="px-4 rounded-pill">{t("send_message")}</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
export default ContactUs;