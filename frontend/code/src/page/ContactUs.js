import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import contactus from "../assets/images/contactus.png";
// import CardImage2 from "../assets/images/cardimage2.png";
import ArrowRightCircle from "../components/ArrowRightCircle";
import {Image} from "react-bootstrap";
import LogoGrey from "../components/LogoGrey";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import "./ContactUs.css"


function ContactUs() {
    const { t } = useTranslation();
    return (
        <Container>
            <h1 className="title text-center pt-5">{t("menu.contact_us")}</h1>
            <Row className="bg-gray m-5">
                <Col  xs="12" lg="6" className="p-0">
                    <Image src={contactus} className="w-100 contain"/>
                </Col>
                <Col  xs="12" lg="6" className="pt-5 ps-5">
                    <LogoGrey />
                    <div className="mt-5 pt-3">
                        <div className="mt-5">
                            <p className="mt-5">
                                {t("contactus.telephone")} <br/>
                                {t("contactus.email")} <br/>
                            </p>
                        </div>

                        <p className="mt-5 w-50">
                            {t("contactus.address")} <br/>
                            {t("contactus.follow")}
                        </p>
                        <div className="social">
                            <a href="https://www.facebook.com/farofoundation">
                                <FaFacebookF />
                            </a>
                            <a href="https://www.instagram.com/farofoundation/">
                                <FaInstagram />
                            </a>
                            <a href="https://twitter.com/FaroMongolia">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
  }
export default ContactUs;