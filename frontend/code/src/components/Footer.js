import { Link, Link as RouterLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SplitButton from "react-bootstrap/SplitButton";
import "./Footer.css";
import LogoGrey from "./LogoGrey";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import useLocales from "../hooks/useLocales";
import Logo from "./Logo";
import { Button, Container, ListGroup } from "react-bootstrap";

export default function Footer() {
  const { allLangs, currentLang, onChangeLang } = useLocales();
  const { t } = useTranslation();
  //   console.log('TTT --> ', i18n)
  const handleclick = (value) => {
    onChangeLang(value);
  }
  return (
    <div>
      <div className="footer-basic">
        <div className="w-100 pt-3 bg-primary"></div>
        <Container className="pt-5">
          <div className="border-bottom pb-5">
            <div className="d-flex">
              <Logo />
              {/* <div className="ms-auto">
              <Button className="bg-none text-dark text-bold px-3">Ready to get started ?</Button>
              <Button className="text-bold px-3">Get Started Free</Button>
            </div> */}
            </div>
          </div>
          <Row className="pt-5 pb-5">
            <Col xl={4} lg={4} sm={12} md={4} >
              <ListGroup className="border-none pe-5 bg-none">
                <Link to={'/who-we-are'} className="text-decoration-none"><ListGroup.Item className="text-bold border-none bg-none text-span fw-normal">Who We Are</ListGroup.Item></Link>
                <Link to={'/projects'} className="text-decoration-none"><ListGroup.Item className="text-bold border-none bg-none text-span fw-normal">What We Do</ListGroup.Item></Link>
                <Link to={'/news'} className="text-decoration-none"><ListGroup.Item className="text-bold border-none bg-none text-span fw-normal">News</ListGroup.Item></Link>
              </ListGroup>
            </Col>
            <Col xl={4} lg={4} sm={12} md={4} >
              <ListGroup className="border-none pe-5 bg-none">
                <Link to={'/contact-us'} className="text-decoration-none text-center"><ListGroup.Item className="text-bold border-none bg-none text-span fw-normal">Contact us</ListGroup.Item></Link>
                <Link className="text-center">
                  <Button className="bg-primary rounded-pill ">info.mn@farofoundation.org</Button>
                </Link>
              </ListGroup>
            </Col>
            <Col xl={4} lg={4} sm={12} md={4} >
              <ListGroup className="border-none pe-5 bg-none">
                <ListGroup.Item className="text-bold border-none bg-none text-span fw-normal text-center">Follow us</ListGroup.Item>
                <ListGroup.Item className="text-bold border-none bg-none text-span fw-normal">
                  <div className="contact-icons h-100 d-flex align-items-end mt-1 justify-content-center w-100">
                    <a className="me-3" href="https://www.facebook.com/farofoundation"><FaTwitter width="30" style={{ color: 'rgb(71, 125, 226)!important' }} /></a>
                    <a className="me-3" href="https://www.facebook.com/farofoundation"><FaFacebookF width="30" style={{ color: 'rgb(71, 125, 226)!important' }} /></a>
                    <a className="me-3" href="https://www.instagram.com/farofoundation"><FaInstagram width="30" style={{ color: 'rgb(71, 125, 226)!important' }} /></a>
                  </div>
                </ListGroup.Item>
              </ListGroup>

            </Col>
          </Row>
        </Container>
        <Container className="d-flex pt-3 pb-3">
          <span className="d-flex align-items-center">@2022 Faro Foundation NGO</span>
          <div className="d-flex ms-auto">
            <Link className="text-decoration-none text-dark text-span" to={'/privacy-policy'}>
              <span>Privacy Policy</span>
            </Link>
          </div>

        </Container>
      </div>
    </div>

  );
}
