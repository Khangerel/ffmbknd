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
        <Container className="d-flex">
          <span>@2022 Faro Foundation NGO</span>
          <div className="d-flex ms-auto">
            <div className="pe-3">Community Standarts</div>
            <div className="pe-3">Privacy Policy</div>
            <div className="pe-3">Terms</div>
            <div className="pe-3">Cookie Policy</div>
          </div>

        </Container>
      </Container>
      {/* <div className="footer-basic">
        <footer
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            position: 'relative',
            // left: 0,
            bottom: 0,
          }}
        >
          <div className="social">
            <div className="logo-grey ms-0">
              <LogoGrey />
            </div>
            <p className="social_text">{t("contactus.follow")}</p>
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
          <div className="menus">
            <Row>
                <Col>
                    <ul className="list-inline" >
                        <li className="list-inline-item">
                            <a href="/about" className="menu-title">{t("menu.who_we_are")}</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/about" className="menu-child">{t("menu.about_ffm")}</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/about" className="menu-child">{t("menu.our_vision")}</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/about" className="menu-child">{t("menu.our_impact")}</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/about" className="menu-child">{t("menu.history_timeline")}</a>
                        </li>
                    </ul>
                </Col>
                <Col>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="/projects" className="menu-title">{t("menu.what_we_do")}</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/projects" className="menu-child">{t("menu.projects")}</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/projects" className="menu-child">{t("menu.programs")}</a>
                        </li>
                    </ul>
                </Col>
                <Col>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="/partners" className="menu-child">{t("menu.partners")}</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/get-involved" className="menu-child">{t("menu.get_involved")}</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/contact-us" className="menu-child">{t("menu.contact_us")}</a>
                        </li>
                    </ul>
                </Col>
            </Row>
          </div>
        </footer>
      </div>
      <div className="footer-bottom">
        <h6 className="copyright">@2022 Faro Foundation NGO</h6>
        <div className="language">
          <DropdownButton
            as={"drop-up"}
            key={"drop-up"}
            id={`dropdown-button-drop-up`}
            drop={"up"}
            variant="white"
            title={`Language: ${currentLang.label} (${currentLang.upper})`}          >
            {allLangs.map((lang) => (
                <Dropdown.Item value={lang.value} onClick={() => handleclick(lang.value)}>
                  {lang.label + `(${lang.upper})`}
                </Dropdown.Item>
              )
            )}
          </DropdownButton>
        </div>
      </div> */}
    </div>
  );
}
