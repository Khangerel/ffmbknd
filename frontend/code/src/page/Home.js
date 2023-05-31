
import { Button, Card, Col, Row, Image, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import HeroImage from "../components/HeroImage";
import computer_outline_svg from "../assets/images/symbols_computer-outline.svg"
import Partners from "./Partners";
import VerticalCardImage2 from "../assets/images/unsplash_qZenO_gQ7QA.png"
import { Link } from "react-router-dom";
import HorizontalCard from "../components/HorizontalCard";
import { useState, useEffect } from "react";
import { API } from "../api/axios";
import { useTranslation } from 'react-i18next';
function Home() {
  // const light_card_list = [
  //   {
  //     description: "We have share our journey and some story",
  //     name: "Digital Literacy"
  //   },
  //   {
  //     description: "We have share our journey and some story",
  //     name: "Digital Literacy"
  //   },
  //   {
  //     description: "We have share our journey and some story",
  //     name: "Digital Literacy"
  //   },
  //   {
  //     description: "We have share our journey and some story",
  //     name: "Digital Literacy"
  //   },
  // ];
  const { t } = useTranslation();
  const [light_card_list, setLightCardList] = useState([]);
  const [recent_post_list, setRecentPostList] = useState([]);
  const getData = () => {
    API.get(`card/?lang_id=${localStorage.getItem('lang_id')}`, {}).then((response) => {
      if (response.status === 200) {
        setLightCardList(response.data);
      }
    });
    API.get(`recent/posts?lang_id=${localStorage.getItem('lang_id')}`, {}).then((response) => {
      setRecentPostList(response.data);
    })
  }
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
      <div className="position-relative">

        <Container className="min-vh-100 d-flex align-items-center">
          <div>
            <h1 className="hero-title">
              Advancing <br />
              Digital literacy,<br />
              Online safety and more.<br />
            </h1>
            <Row>
              <Col xl={8} lg={8} md={8} sm={12}>
                <p className="text-gray pt-5">{t("landing.description")}</p>
              </Col>
              <Col xl={4} lg={4} md={4} sm={12}></Col>
            </Row>

            <div className="d-flex  align-items-center pt-5">
              {/* <div className="pe-5">
                <Button className="bg-primary rounded-15 ps-4 pe-4">{t("landing.read_more")}</Button>
              </div> */}
              <div className="pe-5">
                <h1>
                  44000+
                </h1>
                <p className="text-gray">{t("landing.citizens")}</p>
              </div>
              <div className="pe-5">
                <h1>
                  710+
                </h1>
                <p className="text-gray">
                  {t("landing.trainings")}
                </p>
              </div>
            </div>
          </div>
        </Container>
        <div style={{
          position: 'absolute',
          /* right: 50%; */
          width: '45%',
          /* bottom: 51px; */
          zIndex: '-1',
          top: '52%',
          /* left: 50%; */
          transform: 'translate(120%, -60%)'
        }} className="d-none-sm
        d-none-small-none
        d-none-md-none">
          <HeroImage />
        </div>
      </div>
      <div className="ps-5 pe-5 w-100">
        <Container className="w-100">
          <Row className="min-vh-50 w-100 m-0">
            <Col xl={4} lg={4} md={5} sm={12} className=" bg-primary d-flex justify-content-center align-items-center mb-5">
              <h1 className="text-white hero-title text-center pt-5 pb-5">Who <br /> We Are</h1>
            </Col>
            <Col xl={8} lg={8} md={7} sm={12} className="d-flex align-items-center mb-5">
              <div className="ps-5 pe-5">
                <h4>{t("landing.whoweare_title")}</h4>
                <p className="pe-5 text-black text-align-justify">
                  {t("landing.whoweare_body")}
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        {/* <div className="row w-100 min-vh-50">
          <div className="col-xl-4 col-lg-4 col-md-5 col-sm-6 bg-primary d-flex justify-content-center align-items-center p">
            <h1 className="text-white hero-title text-center">Who <br /> We Are</h1>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-7 col-sm-6 d-flex align-items-center">
            <div className="ps-5 pe-5">
              <h4>Faro Foundation NGO</h4>
              <p className="pe-5 text-black">
                FF is a non-governmental organization that has focused
                on promoting adequate and accessible use of social media and digital literacy.
                Our work includes but is not limited to, promoting online safety, digital literacy, child
                protection programs, proper use of social media, public awareness regarding cyber
                bullying and such.
              </p>
            </div>

          </div>
        </div> */}
      </div>
      <div>
        <Container className="pt-5 pb-5 mt-5">
          <div className="d-flex bd-highlight pb-5">
            <h1>{t("menu.what_we_do")}</h1>
            <p className="text-gray ms-auto" dangerouslySetInnerHTML={{ __html: t("landing.whatwedo_description")}}></p>
          </div>
          <Row className="pt-5 pb-5 w-100 m-0">
            {
              light_card_list.map((card, index) => (
                <Col xl={3} lg={3} sm={12} md={6} className="pb-3 w-100" key={index} style={{
                  display: 'inherit'
                }}>
                  <Card className={`border-none position-relative rounded-15 w-100`} style={{
                    backgroundColor: card.color,
                    boxShadow: `-1px -1px 20px 1px ${card.color}`
                  }}>
                    <Card.Body>
                      <Card.Text className="text-white">
                        {card.description}
                      </Card.Text>
                      <Card.Title className="text-white pt-5 pe-4">
                        {card.title}
                      </Card.Title>
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
        <Container>
          <Partners />
        </Container>

      </div>
      <div className="pt-5 pb-5">
        <Container>
          <h1 className="title mb-5 pb-5" >{t("landing.recent_news")}</h1>
          <Row className="w-100 pb-5">
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
                  index !== 0 ? <HorizontalCard data={post} id={post.id} /> : ''
                ))
              }
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default Home;