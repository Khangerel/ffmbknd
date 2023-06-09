
import { Button, Card, Col, Row, Image, Container } from "react-bootstrap";
import HeroImage from "../components/HeroImage";
import computer_outline_svg from "../assets/images/symbols_computer-outline.svg"
import Partners from "./Partners";
import { Link } from "react-router-dom";
import HorizontalCard from "../components/HorizontalCard";
import { useState, useEffect, useCallback } from "react";
import { API } from "../api/axios";
import { useTranslation } from 'react-i18next';
import LoadingPage from "./LoadingPage";
import FeaturedNewsCard from "../components/FeaturedNewsCard";

function Home() {

  const { t } = useTranslation();
  const [light_card_list, setLightCardList] = useState([]);
  const [recent_post_list, setRecentPostList] = useState([]);
  const [is_loading, setIsLoading] = useState(true);
  const [lading, setLanding] = useState({});

  const getData = useCallback(async () => {
    const landing_response = await API.get('landing/', {})
    if (landing_response.status === 200) {
      if (landing_response.data.length > 0) {
        setLanding(landing_response.data[0]);
      }
    }
    const card_list_data = await API.get(`card/?lang_id=${localStorage.getItem('lang_id')}`);
    if (card_list_data.status === 200) {
      setLightCardList(card_list_data.data);
    }
    const recent_post_list_data = await API.get(`recent/posts?lang_id=${localStorage.getItem('lang_id')}`);
    if (recent_post_list_data.status === 200) {
      setRecentPostList(recent_post_list_data.data);
    }
    setIsLoading(false)
  }, [])
  useEffect(() => {
    getData();
  }, [])
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
  return (
    <div>
      {
        is_loading ? <LoadingPage /> : ''
      }

      <div className="position-relative bg-hero-sm">

        <Container className="min-vh-100 d-flex align-items-center">
          <div>
            <h1 className="hero-title blue-under-line pb-4">
              Advancing digital<br />
              literacy and bridging<br />
              the digital divide
            </h1>
            <Row>
              <Col xl={6} lg={8} md={8} sm={12}>
                <p className="text-gray pt-4 swiper-slide__hero-content-hero__description">{t("landing.description")}</p>
              </Col>
              <Col xl={6} lg={4} md={4} sm={12}></Col>
            </Row>
            <div className="d-none-sm d-none-small-none d-none-md-none">
              <div className="d-flex  align-items-center pt-5 ">
                {/* <div className="pe-5">
                <Button className="bg-primary rounded-15 ps-4 pe-4">{t("landing.read_more")}</Button>
              </div> */}
                <div className="pe-5">
                  <h1>
                    {lading.citizens}+
                  </h1>
                  <p className="text-gray">{t("landing.citizens")}</p>
                </div>
                <div className="pe-5">
                  <h1>
                    {lading.trainings}+
                  </h1>
                  <p className="text-gray">
                    {t("landing.trainings")}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Container>
        <div style={{
          position: 'absolute',
          /* right: 50%; */
          width: '42%',
          /* bottom: 51px; */
          zIndex: '-1',
          top: '52%',
          /* left: 50%; */
          transform: 'translate(113%, -60%)'
        }} className="d-none-sm
        d-none-small-none
        d-none-md-none">
          <HeroImage image1={lading.image_swipe1} image2={lading.image_swipe2} image3={lading.image_swipe3} />
        </div>
      </div>
      <div className="background-image">


        <div className="ps-5 pe-5 w-100">
          <Container className="w-100">
            <Row className="w-100 m-0 pt-5">
              <Col xl={4} lg={4} md={5} sm={12} className="bg-gradient-primary-white d-flex justify-content-center align-items-center mb-5">
                <div className="pb-5 pt-5">
                  <h1 className="text-white hero-title pt-5 pb-5 text-center-sm">Who <br /> We Are</h1>
                  <div className="d-block d-xl-none d-lg-none pb-4">
                    <h1 className="text-white text-center pb-3">{t("landing.whoweare_title")}</h1>
                    <div className="text-center px-5 mx-3">
                      <span className="text-white w-100">
                        {t("landing.whoweare_body")}
                      </span>
                    </div>

                  </div>

                </div>

              </Col>
              <Col xl={8} lg={8} md={7} sm={12} className="d-flex align-items-center mb-5  d-none-sm d-none-small-none d-none-md-none">

                <div className="ps-5 pe-5 mx-5 d-none-sm d-none-small-none d-none-md-none">
                  <h4>{t("landing.whoweare_title")}</h4>
                  <p className="pe-2 pt-2 text-black text-align-justify " style={{
                    lineHeight: 2
                  }}>
                    {t("landing.whoweare_body")}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="text-center d-block d-xl-none d-lg-none">
            <div>
              <h1 className="text-primary">{lading.citizens}+</h1>
              <p className="text-gray">{t("landing.citizens")}</p>
            </div>
            <div>
              <h1 className="text-primary">{lading.trainings}+</h1>
              <p className="text-gray">{t("landing.trainings")}</p>
            </div>
          </div>
        </div>
        <div>
          <Container className="pt-5 pb-5 mt-5">
            <div className="d-none-sm d-none-small-none d-none-md-none">
              <div className="d-flex bd-highlight pb-5">
                <h1 className="title">{t("menu.what_we_do")}</h1>
                <p className="text-gray ms-auto align-items-center d-flex" dangerouslySetInnerHTML={{ __html: t("landing.whatwedo_description") }}></p>
              </div>
            </div>
            <div className="d-block d-xl-none d-lg-none">
              <h1 className="text-center title">{t("menu.what_we_do")}</h1>
              <p className="text-gray ms-auto text-center" dangerouslySetInnerHTML={{ __html: t("landing.whatwedo_description") }}></p>
            </div>
            <Row className="pt-5 mb-5 pb-5 px-4 mx-4">
              {
                light_card_list.map((card, index) => (
                  <Col xl={3} lg={4} sm={12} md={6} className="pb-3 " key={index} style={{
                    display: 'inherit'
                  }}>
                    <Card className={`border-none position-relative rounded-15 w-100`} style={{
                      backgroundColor: card.color,
                      boxShadow: `-1px -1px 20px 1px ${card.color}`
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
          </Container>
        </div>
        <div className="pt-5">
          <Partners />
        </div>
        <div className="pt-5 pb-5">
          <Container>
            <h1 className="title mb-5 pb-5" >{t("landing.recent_news")}</h1>
            <Row className="w-100 pb-5 m-0">
              {
                recent_post_list.length > 0 ?
                  <Col xl={5} lg={5} sm={12} md={12} className="pe-4 mb-5">
                    <div className="p-4 min-vh-50 h-100 position-relative " style={{
                      background: `linear-gradient(rgba(11, 26, 49, 1), rgba(0,0,0,0)), url(${recent_post_list[0].image_thumbnail})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
                    }}>
                      {
                        recent_post_list[0].tags.map((el, index) => (
                          <Button className="px-4 pt-1 pb-1 bg-prime-weak border-none font-weight-bold" key={index} >{el.name}</Button>
                        ))
                      }

                      <h3 className="pt-3 text-white">
                        {recent_post_list[0].title}
                      </h3>
                      <p className="pt-3 text-white">
                        {recent_post_list[0].description}
                      </p>
                      <div className="position-absolute" style={{ bottom: 20, right: 20 }}>
                        <Link className="text-white me-4 text-bold" to={`/news/${recent_post_list[0].id}`}>{t("landing.continue_reading")}</Link>
                      </div>
                    </div>
                  </Col> : ''
              }

              <Col xl={7} lg={7} sm={12} md={12}>
                {
                  recent_post_list.map((post, index) => (
                    index !== 0 ?
                      <div>
                        <div className="d-none-sm d-none-small-none d-none-md-none">
                          <HorizontalCard data={post} id={post.id} />
                        </div>
                        <div className="d-block d-xl-none d-lg-none">
                          <FeaturedNewsCard description={post.description} id={post.id} title={post.title} image_thumbnail={post.image_thumbnail} key={index} />
                        </div>
                      </div>
                      : ''
                  ))
                }
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
export default Home;