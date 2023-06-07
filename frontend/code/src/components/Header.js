import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import Logo from "./Logo";

import DownArrow from "./DownArrow";
import "./Header.css";
import { useEffect, useState } from "react";
import { API } from "../api/axios";
import useLocales from '../hooks/useLocales';
import mon_flag from "../assets/images/mon-flag.png"
import rus_flag from "../assets/images/rus-flag.png"
import eng_flag from "../assets/images/eng-flag.png"
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
function Header() {
  const { t } = useTranslation();
  const [lang_list, setLangList] = useState([]);
  const { allLangs, onChangeLang } = useLocales();
  const [pathname, setPathname] = useState();
  const getData = () => {
    API.get('language/', {}).then((response) => {
      if (response.status === 200) {
        setLangList(response.data);
        lang_list.map(el => {
          if (el.short_name === 'ENG') {
            localStorage.setItem('lang_id', el.id)
          }
        })
      }
    })
  }
  

  useEffect(() => {
    setPathname(window.location.pathname)
    getData();
  }, []);

  return (
    <div className="header">
      <div className="" style={{ height: document.documentElement.scrollTop == 0 ? '147px' : 0 , transition: '1s all ease' }}></div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="white" fixed="top" className="menu w-100 position-fixed pt-5 pb-5">
        <Container fluid="xxl">
          <Navbar.Brand to="#" onClick={() => {
            setPathname('/')
          }}>
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="ps-5">
            <Nav className="mt-2">
              <Nav.Link href="/who-we-are"
                className={pathname === '/who-we-are' ? "menu-normal me-2 rounded-pill ps-3 pe-3 bg-blue-light" : "menu-normal me-2 rounded-pill ps-3 pe-3"}
              >
                {t("menu.who_we_are")}
              </Nav.Link>
              <Nav.Link href="/projects"
                className={
                  pathname === '/projects' ? "menu-normal me-2  rounded-pill ps-3 pe-3 bg-pink-light" : "menu-normal me-2 rounded-pill ps-3 pe-3"}
              >
                {t("menu.what_we_do")}
              </Nav.Link>
              {/* <Nav.Link href="/get-involved" className={
                window.location.pathname == '/get-involved'? "menu-normal me-2  rounded-pill ps-3 pe-3 bg-blue-light": "menu-normal me-2 rounded-pill ps-3 pe-3"}>
                {t("menu.get_involved")}
              </Nav.Link> */}
              {/* <Nav.Link href="/partners" className="menu-normal me-2  rounded-pill ps-3 pe-3">{t("menu.partners")}</Nav.Link> */}
              <Nav.Link href="/news" className={
                pathname === '/news' ? "menu-normal me-2  rounded-pill ps-3 pe-3 bg-pink-light" : "menu-normal me-2 rounded-pill ps-3 pe-3"}>{t("menu.news")}</Nav.Link>
              <Nav.Link href="/contact-us" className={window.location.pathname == '/contact-us' ? "menu-normal me-2 rounded-pill ps-3 pe-3 bg-yellow-light" : "menu-normal me-2 rounded-pill ps-3 pe-3"}>{t("menu.contact_us")}</Nav.Link>
            </Nav>
            <Nav className="ms-auto  d-none-sm d-none-small-none d-none-md-none">
              {
                lang_list.map((el, key) => (
                  <Nav.Link href="#" className={`menu-normal me-2 active ${el.id === parseInt(localStorage.getItem('lang_id')) ? 'text-primary' : ''}`} key={key}
                    onClick={
                      () => {
                        localStorage.setItem('lang_id', el.id);
                        onChangeLang(el.short_name);
                        window.location.reload();
                      }
                    }
                  >{el.short_name}</Nav.Link>
                ))
              }
            </Nav>
            <Nav className="d-block d-xl-none d-lg-none mt-4">
              <div className="d-flex justify-content-around">
                {
                  lang_list.map((el, key) => (
                    <Image src={el.logo} onClick={
                      () => {
                        localStorage.setItem('lang_id', el.id);
                        onChangeLang(el.short_name);
                        window.location.reload();
                      }
                      
                    } className={`mx-2 ${el.id === parseInt(localStorage.getItem('lang_id')) ? 'img-shadow' : ''}`} />
                  ))
                }
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
}

export default Header;