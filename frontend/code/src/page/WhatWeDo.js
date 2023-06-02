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
import { useState, useEffect, useCallback } from "react";
import { API } from "../api/axios";
import { FaAngleDown } from "react-icons/fa";
import WhatWeDoNews from "../components/WhatWeDoNews";
import LoadingPage from "./LoadingPage";

function WhatWeDo() {
    const { t } = useTranslation();
    const [light_card_list, setLightCardList] = useState([]);
    // const [information_list] = [
    // ];
    const [information_list, setInformationList] = useState([]);
    const [hw_we_do_list, setHwWeDoList] = useState([]);
    const [is_loading, setIsLoading] = useState(true);
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
    const getData = useCallback(async () => {
        const card_list_response = await API.get(`card/?lang_id=${localStorage.getItem('lang_id')}`);
        if (card_list_response.status === 200) {
            setLightCardList(card_list_response.data);
        }
        const information_list_response = await API.get(`project/?lang_id=${localStorage.getItem('lang_id')}`);
        if (information_list_response.status === 200) {
            setInformationList(information_list_response.data);
        }
        const hwWeDoResponse = await API.get(`/howwedo/?lang_id=${localStorage.getItem('lang_id')}`);
        if (hwWeDoResponse.status === 200) {
            setHwWeDoList(hwWeDoResponse.data);
        }
        setIsLoading(false);
    }, [])

    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            {
                is_loading ? <LoadingPage/> : ''
            }
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
                                <Col xl={3} lg={3} sm={12} md={6} className="pb-5" style={{
                                    display: 'inherit'
                                }}>
                                    <Card className={`border-none position-relative rounded-15 w-100`} style={{
                                        backgroundColor: card.color,
                                        boxShadow: `-1px -1px 20px 1px ${card.color}`,
                                    }}>
                                        <Card.Body>
                                            <Card.Text className="text-white">
                                                {card.description}
                                            </Card.Text>
                                            <Card.Title className="text-white pt-5 me-4">
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
                                {
                                    hw_we_do_list.map((el, index) => (
                                        <div className="pt-3 pb-3">
                                            <div className="d-flex align-items-center">
                                                <div className="d-flex align-items-center p-3 rounded-circle" style={{
                                                    backgroundColor: el.color,
                                                    height: 55,
                                                    width: 55,
                                                    boxShadow: `-1px -1px 20px 1px ${el.color}`
                                                }}>
                                                    <Image src={el.icon} fluid />
                                                </div>

                                                {/* <TrainingIcon /> */}
                                                <h2 className="m-0 ms-3">{el.title}</h2>
                                            </div>
                                            <p className="mx-4 pe-5 mt-4 text-gray">{el.description}</p>
                                        </div>
                                    ))
                                }
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