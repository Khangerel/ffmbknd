import { Link as RouterLink } from "react-router-dom";
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

export default function Footer() {
  const { allLangs, currentLang, onChangeLang } = useLocales();
  const { t } = useTranslation();
//   console.log('TTT --> ', i18n)
    const handleclick = (value) => {
        onChangeLang(value);
    }
  return (
    <>
      <div className="footer-basic">
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
      </div>
    </>
  );
}
