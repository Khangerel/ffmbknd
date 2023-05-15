import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import meta from "../assets/images/partner-meta.png";
import unesco from "../assets/images/partner-nub.png";
import dw from "../assets/images/partner-dw.png";
import moe from "../assets/images/partner-bshu.png";
import factcheck from "../assets/images/partners-fact.png";
import hamtiin from "../assets/images/partners-hamtiin.png";
import heregjuulegch from "../assets/images/partners-heregjuulegch.png";
import hevlel from "../assets/images/partners-hevlel.png";
import {Image} from "react-bootstrap";

const our_main_data = [
    {
        id: 1,
        name: "Meta",
        body: "partners.meta_body",
        link: "https://www.meta.com/",
        image: meta
    },
    {
        id: 2,
        name: "DW",
        body: "partners.dw_body",
        link: "https://www.dw.com/",
        image: dw
    },
    {
        id: 3,
        name: "UNESCO",
        body: "partners.unesco_body",
        link: "https://www.unesco.org/en",
        image: unesco
    },
    {
        id: 4,
        name: "MoE",
        body: "partners.moe_body",
        link: "http://en.meds.gov.mn/",
        image: moe
    },
    {
        id: 5,
        name: "Heregjuulegch",
        body: "partners.heregjuulegch",
        link: "",
        image: heregjuulegch
    },
    {
        id: 6,
        name: "Printing",
        body: "partners.printing",
        link: "",
        image: hevlel
    },
    {
        id: 7,
        name: "MEA",
        body: "partners.hamtiin",
        link: "",
        image: hamtiin
    },
    {
        id: 8,
        name: "Factcheck",
        body: "partners.fact_check",
        link: "",
        image: factcheck
    },
]

function HomePartners() {
    const { t } = useTranslation();
    const handleClick = () => {
        console.log('Clicked')
    }
    return (
        <div className="m-5">
            <h1 className="title text-center pt-5">{t("partners.our")}</h1>
            <Row className="bg-white d-flex align-items-center justify-content-center">
                {our_main_data.map((partner) => (
                    <Col className="align-items-center">
                        <Image src={partner.image} className="w-100 contain" onClick={() => handleClick()} />
                    </Col>
                ))}
            </Row>
        </div>
    );
  }
export default HomePartners;