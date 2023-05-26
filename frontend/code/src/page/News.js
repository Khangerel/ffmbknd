import ExampleToast from "../components/ExampleToast";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperSlide1 from "../assets/images/swiperslide1.png";
import SwiperSlide2 from "../assets/images/swiperslide2.png";
import ComponentImage from "../assets/images/component.png";
import PartnerLogoImg from "../assets/images/partner.png"
import 'swiper/css';
import { Button, Col, Row, Image, Container, ListGroup, ListGroupItem, CloseButton } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import HorizontalCard from "../components/HorizontalCard";
import SwiperCore, { Autoplay } from 'swiper'
import HomePartners from "./HomePartners";
import HorizontalCardImage1 from "../assets/images/unsplash_nTSvjVD8n-c.png"
import VerticalCardImage2 from "../assets/images/unsplash_qZenO_gQ7QA.png"
import { API } from "../api/axios";
import { useEffect, useMemo, useState} from "react";

function News() {
  SwiperCore.use([Autoplay]);
  const slide_data = [
    {
      name: "Digital Literacy in Mongolia",
      description: "(FFM) is a non-governmental organization that has focused on promoting adequate",
      image: SwiperSlide1,
      link: ""
    },
    {
      name: "Digital Literacy in Mongolia",
      description: "(FFM) is a non-governmental organization that has focused on promoting adequate",
      image: SwiperSlide1,
      link: ""
    },
    {
      name: "Digital Literacy in Mongolia",
      description: "(FFM) is a non-governmental organization that has focused on promoting adequate",
      image: SwiperSlide1,
      link: ""
    },
  ]
  const swiperSlide1 = {
    background: 'linear-gradient(to right,rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("' + SwiperSlide1 + '")',
  };
  const swiperSlide2 = {
    background: 'linear-gradient(to right,rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("' + SwiperSlide2 + '")',
  };
  const partnerLogoElementStyleRight = {
    bottom: 0,
    right: 0,
  }
  const partnerLogoElementStyleLeft = {
    bottom: 0,
    left: 0,
  }
  const [page_num, setPageNum] = useState(1);
  const [card_list, setCardList] = useState([]);
  const [news_index, setNewsIndex ] = useState(null);
  const getData = ()=>{
    API.get(`post/?search=&page=${page_num}&lang_id=1`, {}).then((response)=>{
      if (response.status === 200) {
        setCardList(response.data.results);
        
        setPageNum(response.data.current_page);
      }
    })
  }
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setNewsIndex(urlParams.get('id'));
    getData();
  }, []);
  
  return (
    <div>
      <Swiper
        // speed={1000}
        spaceBetween={0}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        // loop={true}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="swiper-slide__hero"
      >
        {
          slide_data.map((el, index) => (
            <SwiperSlide className="h-80" key={index}>
              <div className="swiper-slide__hero-content w-100 h-80 m-0 d-flex align-items-end" 
                style={{
                  background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.2)), url(${el.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}>
                <Container className="mb-5">
                  <div className=" w-100">
                    <Button bg="secondary" className="px-4 pt-1 pb-1 bg-primary text-white border-none font-weight-bold">
                      MEDIA
                    </Button>
                    <h1 className="swiper-slide__hero-content-hero hero text-white">
                      {el.name}
                    </h1>
                    <Row className="mb-5 pb-5 w-100">
                      <Col lg={6}>
                        <p className="text-white swiper-slide__hero-content-hero__description mb-0">
                          {el.description}
                        </p>
                      </Col>
                      <Col lg={6} className="d-flex justify-content-end">
                        <Link className="ps-5 pe-5  text-white swiper-slide__hero-content-hero__description">
                          Continue reading
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <Container className="mt-5 pt-5">
        <Row>
          <Col lg={8} >
            {
              card_list.map((el, index)=>(
                <HorizontalCard data={el} id={index}/>
              ))
            }
            
          </Col>
          <Col lg={4}>
            <h2>Categories</h2>
            <ListGroup className="border-none mt-4">
              <ListGroup.Item variant="light" className="border-none mb-1 pb-1 pt-1 text-gray">Events</ListGroup.Item>
              <ListGroup.Item variant="light" className="border-none mb-1 pb-1 pt-1 text-gray">Partnership</ListGroup.Item>
              <ListGroup.Item variant="light" className="border-none mb-1 pb-1 pt-1 text-gray">Careers</ListGroup.Item>
              <ListGroup.Item variant="light" className="border-none mb-1 pb-1 pt-1 text-gray">Virtual Reality</ListGroup.Item>
              <ListGroup.Item variant="light" className="border-none mb-1 pb-1 pt-1 text-gray">Augmented Reality</ListGroup.Item>
              <ListGroup.Item variant="light" className="border-none mb-1 pb-1 pt-1 text-gray">Meta Quest</ListGroup.Item>
              <ListGroup.Item variant="light" className="border-none mb-1 pb-1 pt-1 text-gray">Company</ListGroup.Item>
            </ListGroup>
            <div className="mt-4 mb-4">
              <h2>Featured news</h2>
              <div className="mt-4">
                <Image src={VerticalCardImage2} className="w-100"/>
                <h3 className="mt-3">Digital Literacy in Mongolia</h3>
                <p className="text-gray mt-3">(FFM) is a non-governmental organization that has focused
                  on promoting adequate non-governmental organization </p>
                <div className="d-flex justify-content-end">
                  <Link className="text-dark me-4 text-bold">Continue reading</Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default News;