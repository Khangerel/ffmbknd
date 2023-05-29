import { Button, Card, Col, Collapse, Container, Row } from "react-bootstrap";
import CardImage1 from "../assets/images/cardimageg1.png";
// import CardImage2 from "../assets/images/cardimage2.png";
import ArrowRightCircle from "../components/ArrowRightCircle";
import { Image } from "react-bootstrap";
import GetInvolved from "../components/GetInvolved";
import { useTranslation } from "react-i18next";
import computer_outline_svg from "../assets/images/symbols_computer-outline.svg"
import TrainingIcon from "../components/TrainingIcon";
import frame_39948 from "../assets/images/frame_39948.png";
import frame_39949 from "../assets/images/frame_39949.png";
import frame_39950 from "../assets/images/frame_39950.png";
import image77534141 from "../assets/images/image77534141.png";
import education_20_1_icon from "../assets/images/education_20_1_icon.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { API } from "../api/axios";
import { FaAngleDown } from "react-icons/fa";
import WhatWeDoNews from "../components/WhatWeDoNews";

function WhatWeDo() {
    const { t } = useTranslation();
    const [light_card_list, setLightCardList] = useState([]);
    // const [information_list] = [
    // ];
    const [information_list, setInformationList] = useState([]);
    const getBgLightColor = ((index) => {
        if (index === 0) {
            return 'bg-blue-light';
        }
        else if (index === 1) {
            return 'bg-pink-light';
        }
        else if (index === 2) {
            return 'bg-aqua-light';
        }
        else if (index === 3) {
            return 'bg-yellow-light';
        }
    })
    const getData = () => {
        API.get(`card/?lang_id=${localStorage.getItem('lang_id')}`, {}).then((response) => {
            if (response.status === 200) {
                setLightCardList(response.data);
            }
        });
        API.get(`project/?lang_id=${localStorage.getItem('lang_id')}`, {}).then((response) => {
            if (response.status === 200) {
                setInformationList(response.data);
            }
        })
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            <Container>
                <div className="min-h-100vh">
                    <Row className="pt-5 mt-5 m-0 mb-5 pb-5">
                        <Col xl={6} lg={6} sm={12} md={6}>
                            <h1>
                                {t("menu.what_we_do")}
                            </h1>
                        </Col>
                        <Col xl={6} lg={6} sm={12} md={6}>
                            <p className="text-gray">
                                {t("ourteam.body")}
                            </p>
                        </Col>
                    </Row>
                    {/* <h1 className="title text-center pt-5 mt-5 pb-5">{t("menu.what_we_do")}</h1> */}
                    <Row className="mt-5 pt-5 mb-5 pb-5">
                        {
                            light_card_list.map((card, index) => (
                                <Col xl={3} lg={3} sm={12} md={6} className="pb-5">
                                    <Card className={`border-none position-relative rounded-15`} style={{
                                        backgroundColor: card.color,
                                        boxShadow: `-1px -1px 20px 1px ${card.color}`
                                    }}>
                                        <Card.Body>
                                            <Card.Text className="text-white">
                                                {card.description}
                                            </Card.Text>
                                            <Card.Title className="text-white pt-5">
                                                {card.title}
                                            </Card.Title>
                                            <Image src={computer_outline_svg} style={{ position: 'absolute', bottom: 15, right: 15 }} />
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                    <Row className="px-5 pt-5 mt-5 mb-5 pb-5 align-items-center">
                        <Col xl={3} lg={3} sm={12} md={12} className="d-flex justify-content-end">
                            <h1 className="hero-title">{t("ourteam.howwedo")}</h1>
                        </Col>
                        <Col xl={9} lg={9} sm={12} md={12}>
                            <div className="px-5">
                                <div>
                                    <div className="d-flex align-items-center">
                                        <TrainingIcon />
                                        <h3>Trainings</h3>
                                    </div>
                                    <p className="mx-4 pe-5 text-gray">We develop curricula tailored for different target groups and conduct both online and offline trainings.</p>
                                </div>
                                <div>
                                    <div className="d-flex align-items-center">
                                        <TrainingIcon />
                                        <h3>Advocacy Projects</h3>
                                    </div>
                                    <p className="mx-4 pe-5 text-gray">To raise public awareness on digital literacy, we run social media campaigns.</p>
                                </div>
                                <div>
                                    <div className="d-flex align-items-center">
                                        <TrainingIcon />
                                        <h3>Events</h3>
                                    </div>
                                    <p className="mx-4 pe-5 text-gray">We organize public events and discussions to improve collaboration between stakeholders and share the views of industry experts on specific issues.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className="pt-5 mt-5 pb-5 mb-5 w-100">
                {
                    information_list.map((information, index) => (
                        <WhatWeDoNews data={information} index={index} />
                    ))
                }
            </div>
        </div>
    )
}
export default WhatWeDo;