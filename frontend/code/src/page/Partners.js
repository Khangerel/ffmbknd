import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import meta from "../assets/images/partner-meta.png";
import unesco from "../assets/images/partner-nub.png";
import dw from "../assets/images/partner-dw.png";
import moe from "../assets/images/partner-bshu.png";
import factcheck from "../assets/images/partners-fact.png";
import hamtiin from "../assets/images/partners-hamtiin.png";
import heregjuulegch from "../assets/images/partners-heregjuulegch.png";
import hevlel from "../assets/images/partners-hevlel.png";
import startlogo from "../assets/images/startlogo.png";
import { Image } from "react-bootstrap";

const our_main_data = [
  {
    id: 1,
    name: "Meta",
    body: "partners.meta_body",
    link: "https://www.meta.com/",
    image: meta,
  },
  {
    id: 1,
    name: "DW",
    body: "partners.dw_body",
    link: "https://www.dw.com/",
    image: dw,
  },
  {
    id: 1,
    name: "UNESCO",
    body: "partners.unesco_body",
    link: "https://www.unesco.org/en",
    image: unesco,
  },
  {
    id: 1,
    name: "MoE",
    body: "partners.moe_body",
    link: "http://en.meds.gov.mn/",
    image: moe,
  },
];
const our_support_data = [
  {
    id: 5,
    name: "Heregjuulegch",
    body: "partners.heregjuulegch",
    link: "",
    image: heregjuulegch,
  },
  {
    id: 6,
    name: "Printing",
    body: "partners.printing",
    link: "",
    image: hevlel,
  },
  {
    id: 7,
    name: "MEA",
    body: "partners.hamtiin",
    link: "",
    image: hamtiin,
  },
  {
    id: 8,
    name: "Factcheck",
    body: "partners.fact_check",
    link: "",
    image: factcheck,
  },
];

function Partners() {
  const { t } = useTranslation();
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <div>
      <div className="ps-5 pe-5 m-5">
        <h1 className="title text-center">{t("partners.main")}</h1>
        <Row className="bg-white d-flex align-items-center justify-content-center">
          {our_main_data.map((partner) => (
            <Col className="align-items-center">
              <Image
                src={partner.image}
                className="w-100 contain"
                onClick={() => handleClick()}
              />
            </Col>
          ))}
        </Row>
        <h1 className="title text-center">{t("partners.support")}</h1>
        <Row className="bg-white d-flex align-items-center justify-content-center">
          {our_support_data.map((partner) => (
            <Col className="align-items-center">
              <Image
                src={partner.image}
                className="w-100 contain"
                onClick={() => handleClick()}
              />
            </Col>
          ))}
        </Row>
      </div>
      {/* <Col xs="12" sm="6"  className="align-items-center position-absolute">
        <Image style={{ left: 0, top: 0 }} src={startlogo} className="w-50 contain" />
      </Col> */}
    </div>
  );
}
export default Partners;
