
import { Button, Col, Row, Image, Container, ListGroup } from "react-bootstrap";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { API } from "../api/axios";
import { useParams } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet";
function NewsDetails() {
  const { t } = useTranslation();
  const [news_data, setNewsData] = useState({});
  const [tags, setTags] = useState([]);
  const [category_list, setCategoryList] = useState([]);
  const news_id = useParams()['news_id'];
  const [featured_card_list, setRecentPostList] = useState([]);
  const [is_loading, setIsLoading] = useState(true);
  const getData = useCallback(async () => {
    const post_response = await API.get(`post/${news_id}`, {});
    if (post_response.status === 200) {
      setNewsData(post_response.data);
      setTags(post_response.data.tags);
      setCategoryList(post_response.data.categories);
    }
    const recent_news_response = await API.get(`recent/posts?lang_id=${localStorage.getItem('lang_id')}`);
    if (recent_news_response.status === 200) {
      setRecentPostList(recent_news_response.data);
    }
    setIsLoading(false);
  }, [news_data])
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <Helmet>
          <title>{news_data.title}</title>
          <meta name="description" content={news_data.description} />
          <meta property="og:title" content={news_data.title} />
          <meta property="og:description" content={news_data.description} />
          <meta property="og:image" content={news_data.image_banner} />

      </Helmet>
      {
        is_loading ? <LoadingPage /> : ''
      }
      <div className="w-100 min-h-50vh" style={{
        background: `url(${news_data.image_banner})`,
        backgroundPosition: 'center', backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}>

      </div>
      {/* <Image src={news_data.image_banner} fluid className="w-100" /> */}

      <div className="pt-4">
        <Row>
          <Col lg={8}>
            <div className="d-flex mb-5 mt-5">
              {
                tags.map((tag, tg_index) => (
                  <Button className="px-4 pt-1 pb-1 bg-prime-weak border-none font-weight-bold" key={tg_index}>
                    {tag.name}
                  </Button>
                ))
              }
              <p className="text-gray ms-auto">{news_data.publish_date_formatted}</p>
            </div>
          </Col>
          <Col lg={4}></Col>
        </Row>
        <Row className="mb-5 pb-5">
          <Col lg={8} >
            <div className="pe-5">
              <h1 className="mb-5">{news_data.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: news_data.content }} className="text-align-justify" style={{ fontSize: '16px !important', lineHeight: 2}}></div>
            </div>

          </Col>
          <Col lg={4}>
            <div className="ps-5 mx-5">
              <div>
                <h2>{t("news.category")}</h2>
                <ListGroup className="border-none mt-4">
                  {
                    category_list.map((categ, index) => (
                      <ListGroup.Item variant="light" className="border-none mb-1 pb-1 pt-1 text-gray">{categ.name}</ListGroup.Item>
                    ))
                  }
                </ListGroup>
              </div>
              <div className="mt-4 mb-4">
                <h2>{t("news.featured_news")}</h2>
                <div className="mt-4">
                  {
                    featured_card_list.map((el, index) => (
                      <div className='mb-3' key={index}>
                        <Image src={el.image_thumbnail} className="w-100" />
                        <h4 className="mt-3">{el.title}</h4>
                        <p className="text-gray mt-3 text-align-justify">{el.description}</p>
                        <div className="d-flex justify-content-end">
                          <Link className="text-dark me-4 text-bold" to={`/news/${el.id}`}>{t("landing.continue_reading")}</Link>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>

          </Col>
        </Row>

      </div>

    </Container>
  )
}
export default NewsDetails;