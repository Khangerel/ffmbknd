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
          <div className="d-flex pt-5 pb-5">
            <ListGroup className="border-none pe-5 bg-none">
              <Link to={'/'} className="text-decoration-none"><ListGroup.Item className="text-bold border-none bg-none">Who We Are</ListGroup.Item></Link>
              <Link to={'/'} className="text-decoration-none"><ListGroup.Item className="border-none bg-none">About FFM</ListGroup.Item></Link>
              <Link to={'/'} className="text-decoration-none"><ListGroup.Item className="border-none bg-none">Our impact</ListGroup.Item></Link>
              <Link to={'/'} className="text-decoration-none"><ListGroup.Item className="border-none bg-none">History timeline</ListGroup.Item></Link>
              <Link to={'/'} className="text-decoration-none"><ListGroup.Item className="border-none bg-none">Where we work</ListGroup.Item></Link>
            </ListGroup>
            <ListGroup className="border-none pe-5 bg-none">
              <Link to={'/'} className="text-decoration-none"><ListGroup.Item className="text-bold border-none bg-none">What We Do</ListGroup.Item></Link>
              <Link to={'/'} className="text-decoration-none"><ListGroup.Item className="border-none bg-none">Projects</ListGroup.Item></Link>
              <Link to={'/'} className="text-decoration-none"><ListGroup.Item className="border-none bg-none">Programs</ListGroup.Item></Link>
            </ListGroup>
            <ListGroup className="border-none pe-5 bg-none">
              <Link to={'/'} className="text-decoration-none"><ListGroup.Item className="text-bold border-none bg-none">Partners</ListGroup.Item></Link>
              <Link to={'/'} className="text-decoration-none"><ListGroup.Item className="border-none bg-none">Get involved</ListGroup.Item></Link>
              <Link to={'/'} className="text-decoration-none"><ListGroup.Item className="border-none bg-none">News</ListGroup.Item></Link>
              <Link to={'/'} className="text-decoration-none"><ListGroup.Item className="border-none bg-none">Contact us</ListGroup.Item></Link>
            </ListGroup>
          </div>

        </Container>
        <Container className="d-flex pt-3 pb-3">
          <span>@2022 Faro Foundation NGO</span>
          <div className="d-flex ms-auto">
            <Link className="text-decoration-none text-dark" to={'/privacy-policy'}>
              Privacy Policy
            </Link>
          </div>

        </Container>
      </div>
    </div>

  );
}
