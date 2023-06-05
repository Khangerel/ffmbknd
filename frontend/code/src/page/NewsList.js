import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperSlide1 from "../assets/images/swiperslide1.png";
import { Button, Col, Row, Image, Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import HorizontalCard from "../components/HorizontalCard";
import SwiperCore, { Autoplay } from 'swiper'
import { API } from "../api/axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import VerticalCardImage2 from "../assets/images/unsplash_qZenO_gQ7QA.png";
import { useTranslation } from 'react-i18next';
import FeaturedNewsCard from '../components/FeaturedNewsCard';

function NewsList({ card_list, category_list, featured_card_list }) {
    const { t } = useTranslation();
    SwiperCore.use([Autoplay]);
    const [slide_data, setSlideData] = useState([]);
    useEffect(() => {
        if (card_list.length > 0){
            setSlideData([card_list[0]])
        }
    }, [])
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
                    card_list.map((el, index) => (
                        index === 0?<SwiperSlide className="h-80" key={index}>
                            <div className="swiper-slide__hero-content w-100 h-80 m-0 d-flex align-items-end"
                                style={{
                                    background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.2)), url(${el.image_banner})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}>
                                <Container className="mb-0">
                                    <div className=" w-100">
                                        {
                                            el.tags.map((tag, tag_index)=>(
                                                <Button bg="secondary" key={tag_index} className="px-4 pt-1 pb-1 bg-primary text-white border-none font-weight-bold">
                                                    {tag.name}
                                                </Button>
                                            ))
                                        }
                                        <h1 className="text-white mt-3">
                                            {el.title}
                                        </h1>
                                        <Row className="mb-5 pb-5 w-100">
                                            <Col lg={8}>
                                                <p className="text-white swiper-slide__hero-content-hero__description mb-0">
                                                    {el.description}
                                                </p>
                                            </Col>
                                            <Col lg={4} className="d-flex justify-content-end align-items-end">
                                                <Link className="ps-5 pe-5  text-white swiper-slide__hero-content-hero__description" to={`/news/${el.id}`}>
                                                    {t("landing.continue_reading")}
                                                </Link>
                                            </Col>
                                        </Row>
                                    </div>
                                </Container>
                            </div>
                        </SwiperSlide> : ''
                    ))
                }
            </Swiper>
            <Container>
                <h1 className='text-center title d-block d-xl-none d-lg-none'>{t('menu.news')}</h1>
                <Row>
                    <Col lg={8} >
                        {
                            card_list.map((el, index) => (
                                index !== 0?
                                <HorizontalCard data={el} id={el.id} /> : ''
                            ))
                        }
                    </Col>
                    <Col lg={4}>
                        <h2 className='text-center-sm'>{t('news.category')}</h2>
                        <ListGroup className="border-none mt-4">
                            {
                                category_list.map((categ, index) => (
                                    <ListGroup.Item variant="light" className="border-none mb-1 pb-1 pt-1 text-gray text-center-sm">{categ.name}</ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                        <div className="mt-4 mb-4">
                            <h2>{t('news.featured_news')}</h2>
                            <div className="mt-4">
                                {
                                    featured_card_list.map((el, index) => (
                                        <FeaturedNewsCard id={el.id} 
                                            description={el.description} 
                                            image_thumbnail={el.image_thumbnail} 
                                            title={el.title}
                                            key={index}
                                        />
                                        // <div className='mb-3' key={index}>
                                        //     <Image src={el.image_thumbnail} className="w-100"/>
                                        //     <h4 className="mt-3">{el.title}</h4>
                                        //     <p className="text-gray mt-3">{el.description}</p>
                                        //     <div className="d-flex justify-content-end">
                                        //         <Link className="text-dark me-4 text-bold"  to={`/news/${el.id}`}>Continue reading</Link>
                                        //     </div>
                                        // </div>
                                    ))
                                }

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NewsList;