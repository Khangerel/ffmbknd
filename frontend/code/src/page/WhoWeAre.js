import { useState, useEffect, useCallback } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Chrono } from "react-chrono"
import QuoteOpen from "../components/QuoteOpen";
import QuoteClose from "../components/QuoteClose";
import { useTranslation } from 'react-i18next';
import "../App.css";
import { API } from "../api/axios";
import LoadingPage from "./LoadingPage";

function WhoWeAre() {
    const { t } = useTranslation();
    const [out_team_list, setOurTeamList] = useState([]);

    const [timeline_list, setTimeLineList] = useState([])
    function timelineFormat(title, cardTitle, image, cardSubtitle, cardDetailedText, index) {
        var style = {}
        if (index % 2 === 0) {
            style = {
                textAlign: 'right'
            }
        } else {
            style = {}
        }
        title = <h2 className="text-right text-primary time-line-title" style={style}>{title}</h2>
        cardTitle = <h1 className="m-0 mb-3 text-primary sm-text-left" style={style}>{cardTitle}</h1>
        cardSubtitle = <div style={style} className="sm-text-left ms-1">{cardSubtitle}</div>
        cardDetailedText = <div className="w-100 ms-2 pe-4 sm-text-left" style={style}>{cardDetailedText}</div>
        if (image != null) {
            const media = {
                name: "faro",
                source: {
                    url: image
                },
                type: "IMAGE"
            }
            return { title, cardTitle, media, cardSubtitle, cardDetailedText }
        } else {
            return { title, cardTitle, cardSubtitle, cardDetailedText }
        }

    }

    const [main_data, setMainData] = useState({});
    const [is_loading, setIsLoading] = useState(true);
    const getData = useCallback(async () => {
        const our_team_list_data = await API.get(`our_team/?lang_id=${localStorage.getItem('lang_id')}`)
        if (our_team_list_data.status === 200) {
            setOurTeamList(our_team_list_data.data);
        }
        const main_data_response = await API.get(`main/?lang_id=${localStorage.getItem('lang_id')}`);
        if (main_data_response.status === 200 && main_data_response.data.length > 0) {
            setMainData(main_data_response.data[0]);
        }

        const time_line_response = await API.get(`timeline/?lang_id=${localStorage.getItem('lang_id')}`);
        if (time_line_response.status === 200) {
            const list = []
            time_line_response.data.map((el, index) => {
                list.push(timelineFormat(el.year, el.title, el.image, el.sub_title, el.description, index))
            });
            setTimeLineList(list);
        }
        setIsLoading(false);
    }, [])
    useEffect(() => {
        getData();
    }, [])
    const chrono_time_line_component = (
        <Chrono items={timeline_list} mode="VERTICAL_ALTERNATING"
            hideControls={true}
            slideItemDuration={4000}
            cardHeight={250}
            cardWidth={600}
            fontSizes={{
                title: "1.1rem"
            }} outline contentDetailsHeight={150}
            enableOutline
            activeItemIndex={null}
            className="timeline-wrapper disable-activation"
            disableNavOnKey />
    )
    return (<div>
        {
            is_loading ? <LoadingPage /> : ''
        }
        <div className="background-image">
            <Container>
                <h1 className="title">{t("ourteam.advisory")}</h1>
                <Row className="pt-4">
                    {
                        out_team_list.map((el, key) => (
                            el.is_advisory_board === true ?
                                <Col xl={3} lg={3} sm={6} md={6} xs={6}>
                                    <div className="px-1 pb-5">
                                        <div className="d-flex justify-content-center">
                                            <div className="rounded-circle bg-gradient-primary p-1">
                                                <Image src={el.image} width={125} className="rounded-circle"
                                                    style={{ border: '3px solid #fff' }}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="text-center pt-3">
                                                {el.full_name}
                                            </h5>
                                            <p className="text-gray text-center">{el.position} - {el.country}</p>
                                        </div>
                                    </div>
                                </Col> : ''
                        ))
                    }
                </Row>

                <h1 className="title">{t("ourteam.title")}</h1>
                <div>
                    <Row className="w-100 pt-4 blue-under-line">
                        {
                            out_team_list.map((el, key) => (
                                el.is_advisory_board === false ?
                                    <Col xl={3} lg={3} sm={6} md={6} xs={6}>
                                        <div className="px-1 pb-5">
                                            <div className="d-flex justify-content-center">
                                                <div className="rounded-circle bg-gradient-primary p-1">
                                                    <Image src={el.image} width={125} className="rounded-circle"
                                                        style={{ border: '3px solid #fff' }}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className="text-center pt-3">
                                                    {el.full_name}
                                                </h5>
                                                <p className="text-gray text-center">{el.position} - {el.country}</p>
                                            </div>
                                        </div>
                                    </Col> : ''
                            ))
                        }
                    </Row>
                </div>
            </Container>
            <div className="pt-5 mt-5">
                <Container>
                    <Row className="w-100 m-0">
                        <Col xl={4} lg={4} md={12} sm={12} className="bg-gradient-primary-white d-flex justify-content-center align-items-center pb-3 mb-5">
                            <div className="pb-5">
                                <h1 className="text-white hero-title pt-5 pb-5 mt-5 text-center-sm">Who <br /> We Are</h1>
                                <div className="d-block d-xl-none d-lg-none">
                                    <h1 className="text-white text-center pb-3">{t("landing.whoweare_title")}</h1>
                                    <div className="text-center px-5 mx-5">
                                        <span className="text-white w-100">
                                            {main_data.whoweare}
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col xl={8} lg={8} md={12} sm={12} className="d-flex pb-3">
                            <div className="px-5 mx-5  d-none-sm d-none-small-none d-none-md-none">
                                <h1 className="pb-5">{t("landing.whoweare_title")}</h1>
                                <p className="text-black text-align-justify" style={{ lineHeight: 2 }}>
                                    {main_data.whoweare}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
        <div className="pt-5 mt-5 d-none-sm d-none-small-none d-none-md-none">
            <div className="w-100 position-relative">
                <Image src={main_data.image_banner} fluid />
                <div className="image-mask-gradiented-primary position-absolute w-100 h-100" style={{ top: 0, left: 0 }}>
                    <div className="pt-5 mt-5 ms-5">
                        <h1 className="text-white">
                            {main_data.image_title}
                        </h1>
                        <p className="text-white">{main_data.image_description}</p>
                    </div>
                </div>
            </div>
        </div>
        <Container className="min-vh-75 d-flex align-items-center justify-content-center">
            <h1 className="text-center px-5 mx-5 with-light-quote position-relative fw-normal">
                <div style={{ position: 'absolute', top: -90, left: -25 }} className=""><QuoteOpen style={{ position: 'absolute', top: 0, left: 0 }} /></div>

                {main_data.our_vision}
                <div style={{ position: 'absolute', bottom: -90, right: -25 }} className=""><QuoteClose style={{ position: 'absolute', bottom: 0, right: 0 }} /></div>

            </h1>
        </Container>
        <div className="d-flex align-items-center pt-5 mt-5" id="faroTimeLine">
            {timeline_list.length > 0 ? chrono_time_line_component : ''}

        </div>
    </div>)
}
export default WhoWeAre;