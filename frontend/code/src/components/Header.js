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

function Header() {
  const { t } = useTranslation();
  const [lang_list, setLangList] = useState([]);
  const getData = ()=>{
    API.get('language/', {}).then((response)=>{
      if (response.status === 200) {
        setLangList(response.data);  
      }
    })
  }
  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div className="header">
      <div className="nav-space"></div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="white" fixed="top" className="menu w-100 position-fixed pt-5 pb-5">
        <Container fluid="xxl">
          <Navbar.Brand to="#" >
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="ps-5">
            <Nav className="mt-2">
              <Nav.Link href="/who-we-are" 
              className={window.location.pathname === '/who-we-are'? "menu-normal me-2 rounded-pill ps-3 pe-3 bg-blue-light" : "menu-normal me-2 rounded-pill ps-3 pe-3"}
              >
                {t("menu.who_we_are")}
              </Nav.Link>
              <Nav.Link href="/projects" 
              className={
                window.location.pathname === '/projects'? "menu-normal me-2  rounded-pill ps-3 pe-3 bg-pink-light": "menu-normal me-2 rounded-pill ps-3 pe-3"}
              >
                {t("menu.what_we_do")}
              </Nav.Link>
              {/* <Nav.Link href="/get-involved" className={
                window.location.pathname == '/get-involved'? "menu-normal me-2  rounded-pill ps-3 pe-3 bg-blue-light": "menu-normal me-2 rounded-pill ps-3 pe-3"}>
                {t("menu.get_involved")}
              </Nav.Link> */}
              {/* <Nav.Link href="/partners" className="menu-normal me-2  rounded-pill ps-3 pe-3">{t("menu.partners")}</Nav.Link> */}
              <Nav.Link href="/news" className={
                window.location.pathname === '/news'? "menu-normal me-2  rounded-pill ps-3 pe-3 bg-pink-light": "menu-normal me-2 rounded-pill ps-3 pe-3"}>{t("menu.news")}</Nav.Link>
              <Nav.Link href="/contact-us" className={window.location.pathname == '/contact-us'? "menu-normal me-2 rounded-pill ps-3 pe-3 bg-yellow-light" : "menu-normal me-2 rounded-pill ps-3 pe-3"}>{t("menu.contact_us")}</Nav.Link>
            </Nav>  
            <Nav className="ms-auto">
              {
                lang_list.map((el, key)=> (
                  <Nav.Link href="#" className="menu-normal me-2" key={key}
                    onClick={
                      () => {
                        localStorage.setItem('lang_id', el.id);
                      }
                    }
                  >{el.name}</Nav.Link>
                ))
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    
  );
}

export default Header;