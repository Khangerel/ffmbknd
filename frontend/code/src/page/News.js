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
  const [tags, setTags] = useState([])
  const getData = useCallback(async () => {
    API.get(`post/?search=&page=${page_num}&lang_id=1`, {}).then((response) => {
      if (response.status === 200) {
        if (news_id !== null) {
          // response.data.results.map((news, index) => {
          //   if (parseInt(news.id) === parseInt(news_id)) {
          //     setNewsData(news);
          //   }
          // });
        } else {
          setCardList(response.data.results);
          setPageNum(response.data.current_page);
        }
      }
    })
    API.get(`category/?lang_id=1`, {}).then((response) => {
      if (response.status === 200) {
        setCategoryList(response.data);
      }
    })
  }, [news_id, page_num])
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setNewsID(urlParams.get('id'));
    getData();
  }, [getData]);
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
        news_id === null ? <NewsList card_list={card_list} category_list={category_list} /> : <NewsDetails news_data={news_data} news_id={news_id} />
      }

    </div>
  );
}
export default News;