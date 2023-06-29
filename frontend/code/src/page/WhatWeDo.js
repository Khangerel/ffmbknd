import { Card, Col, Container, Row } from "react-bootstrap";
// import CardImage2 from "../assets/images/cardimage2.png";
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import computer_outline_svg from "../assets/images/symbols_computer-outline.svg";
import { useState, useEffect, useCallback } from "react";
import { API } from "../api/axios";
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
    // const getBgLightColor = ((index) => {
    //     if (index === 0) {
    //         return 'bg-blue-light';
    //     }
    //     else if (index === 1) {
    //         return 'bg-pink-light';
    //     }
    //     else if (index === 2) {
    //         return 'bg-aqua-light';
    //     }
    //     else if (index === 3) {
    //         return 'bg-yellow-light';
    //     }
    // })
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
                is_loading ? <LoadingPage /> : ''
            }
            <Container className="background-image">
                <div className="min-h-100vh">
                    <Row className="pt-5 m-0">
                        <Col xl={12} lg={12} sm={12} md={12}>
                            <h1 className="text-center title m-0 pb-5">
                                Areas of Expertise
                            </h1>
                        </Col>
                        <Col xl={12} lg={12} sm={12} md={12}>
                            <p className="text-gray text-center">
                                Our priority is to implement positive change in the community through the use of social media.
                            </p>
                        </Col>
                    </Row>
                    {/* <h1 className="title text-center pt-5 mt-5 pb-5">{t("menu.what_we_do")}</h1> */}
                    <Row className=" pt-5 mb-5 pb-5 px-4 mx-4">
                        {
                            light_card_list.map((card, index) => (
                                <Col xl={3} lg={4} sm={12} md={6} className="pb-3" style={{
                                    display: 'inherit'
                                }}>
                                    <Card className={`border-none position-relative rounded-15 w-100`} style={{
                                        backgroundColor: card.color,
                                        boxShadow: `-1px -1px 20px 1px ${card.color}`,
                                    }}>
                                        <Card.Body>
                                            <Row className="h-100">
                                                <Col lg={12} sm={12} xl={12} xxl={12} md={12}>
                                                    <Card.Text className="text-white">
                                                        {card.description}
                                                    </Card.Text>
                                                </Col>
                                                <Col lg={12} sm={12} xl={12} xxl={12} md={12} className="d-flex  align-items-end">
                                                    <h4 className="text-white pt-5 me-4 font-weight-light fw-normal">
                                                        {card.title}
                                                    </h4>
                                                </Col>
                                            </Row>


                                            <Image src={computer_outline_svg} style={{ position: 'absolute', bottom: 15, right: 15 }} />
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                    <Row className="px-5 pt-5 mt-5 mb-5 pb-5 align-items-center">
                        <Col xl={3} lg={3} sm={12} md={12} className="d-flex justify-content-end ">
                            <h1 className="hero-title d-none-sm d-none-small-none d-none-md-none">{t("ourteam.howwedo")}</h1>
                        </Col>
                        <Col xl={3} lg={3} sm={12} md={12} className="d-flex justify-content-center  d-block d-xl-none d-lg-none">
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
                                            <p className="mx-4 pe-5 mt-4 text-gray text-align-justify">{el.description}</p>
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