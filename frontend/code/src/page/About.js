import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Image from "react-bootstrap/Image";
import banner from "../assets/images/our-banner.png";
import aboutlogo from "../assets/images/about-logo.png";
import timeline from "../assets/images/timeline.png";
import "./About.css";

function About() {
  const { t } = useTranslation();
  return (
    <div>
      <Container>
        <h1 className="title">{t("aboutffm.title")}</h1>
        <p className="body font-stretch">{t("aboutffm.body")}</p>
        <div className="text-center">
          <Image src={banner} width="80%" style={{ marginTop: "5%" }} />
          <Image src={aboutlogo} width="21%" />
        </div>

        <p className="vision">{t("aboutffm.our_vision")}</p>
      </Container>
      <h1 className="title">{t("menu.history_timeline")}</h1>
      <div className="text-center">
        <Image src={timeline} width="100%" />
      </div>
    </div>
  );
}
export default About;
