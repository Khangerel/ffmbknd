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
import { useCallback, useEffect, useMemo, useState } from "react";
import NewsList from "./NewsList";
import NewsDetails from "./NewsDeatails";
import LoadingPage from "./LoadingPage";

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
  const [category_list, setCategoryList] = useState([]);
  const [page_num, setPageNum] = useState(1);
  const [card_list, setCardList] = useState([]);
  const [news_id, setNewsID] = useState(null);
  const [news_data, setNewsData] = useState({});
  const [tags, setTags] = useState([]);
  const [featured_news_list, setFeaturedNewsList] = useState([]);
  const [is_loading, setIsLoading] = useState(true);
  const getData = useCallback(async () => {

    const post_list_response = await API.get(`post/?search=&page=${page_num}&lang_id=${localStorage.getItem('lang_id')}`);
    if (post_list_response.status === 200) {
      setCardList(post_list_response.data.results);
      setPageNum(post_list_response.data.current_page);
    }

    const category_list_response = await API.get(`category/?lang_id=${localStorage.getItem('lang_id')}`);
    if (category_list_response.status === 200) {
      setCategoryList(category_list_response.data);
    }
    const featured_posts_response = await API.get(`featured/posts?lang_id=${localStorage.getItem('lang_id')}`);
    if (featured_posts_response.status === 200) {
      setFeaturedNewsList(featured_posts_response.data);
    }
    setIsLoading(false);
  }, [news_id, page_num])
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setNewsID(urlParams.get('id'));
    getData();
  }, []);
  const news_header_component = (
    <Container>
      <Image src={SwiperSlide1} fluid />

      {/* <Image src={news_data.image_thumbnail} fluid/> */}

      <div className="pt-4">
        <div className="d-flex">
          {
            tags.map((tag, tg_index) => (
              <Button className="px-4 pt-1 pb-1 bg-prime-weak border-none font-weight-bold" key={tg_index}>
                {tag.name}
              </Button>
            ))
          }
        </div>
        <h1 className="title m-0 p-0">{news_data.title}</h1>
      </div>
    </Container>
  )
  return (
    <div>
      {
        is_loading ? <LoadingPage/> : ''
      }
      <NewsList card_list={card_list} category_list={category_list} featured_card_list={featured_news_list} />
    </div>
  );
}
export default News;