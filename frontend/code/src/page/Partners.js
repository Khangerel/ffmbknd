import { useState, useEffect } from "react";

import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import factcheck from "../assets/images/partners-fact.png";
import hamtiin from "../assets/images/partners-hamtiin.png";
import heregjuulegch from "../assets/images/partners-heregjuulegch.png";
import hevlel from "../assets/images/partners-hevlel.png";
import { Image } from "react-bootstrap";
import { API } from "../api/axios";
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
  const [our_main_data, setOurMainData] = useState([])

  const handleClick = () => {
    console.log("Clicked");
  };
  const getData = ()=>{
    API.get('partner/', {}).then((response)=>{
      if (response.status === 200) {
        setOurMainData(response.data);
      }
    })
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <div>
      <div className="ps-5 pe-5 m-5">
        <h1 className="title text-center mb-3">{t("landing.partner_title")}</h1>
        <p className="text-gray text-center mb-5">{t("landing.partner_description")}</p>
        <Row className="bg-white d-flex align-items-center justify-content-center w-100">
          {our_main_data.map((partner) => (
            <Col className="align-items-center pb-1" xs={12} sm={12} md={6} lg={4} xl={3}>
              <Image
                src={partner.logo}
                className="w-100 contain"
                onClick={() => handleClick()}
              />
            </Col>
          ))}
        </Row>
        {/* <h1 className="title text-center">{t("partners.support")}</h1>
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
        </Row> */}
      </div>
      {/* <Col xs="12" sm="6"  className="align-items-center position-absolute">
        <Image style={{ left: 0, top: 0 }} src={startlogo} className="w-50 contain" />
      </Col> */}
    </div>
  );
}
export default Partners;
