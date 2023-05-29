
import { Button, Col, Row, Image, Container, ListGroup, ListGroupItem, CloseButton } from "react-bootstrap";
import SwiperSlide1 from "../assets/images/swiperslide1.png";
import { useState, useEffect, useCallback } from "react";
import { API } from "../api/axios";
import { useParams } from "react-router-dom";
function NewsDetails() {
  const [news_data, setNewsData] = useState({});
  const [tags, setTags] = useState([]);
  const [category_list, setCategoryList] = useState([]);
  const news_id = useParams()['news_id'];
  const getData = useCallback(() => {
    API.get(`post/${news_id}`, {}).then((response) => {
      if (response.status === 200) {
        setNewsData(response.data);
        setTags(response.data.tags);
        setCategoryList(response.data.categories);
      } 
    })
  }, [news_data])
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <Image src={news_data.image_thumbnail} fluid className="w-100" />

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
              <p className="text-gray ms-auto">{news_data.created}</p>
            </div>
          </Col>
          <Col lg={4}></Col>
        </Row>
        <Row className="mb-5 pb-5">
          <Col lg={8} >
            <h1 className="mb-5">{news_data.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: news_data.content }}></div>
          </Col>
          <Col lg={4}>
            <div className="ps-5">
              <h2>Categories</h2>
              <ListGroup className="border-none mt-4">
                {
                  category_list.map((categ, index) => (
                    <ListGroup.Item variant="light" className="border-none mb-1 pb-1 pt-1 text-gray">{categ.name}</ListGroup.Item>
                  ))
                }
              </ListGroup>
            </div>

          </Col>
        </Row>

      </div>

    </Container>
  )
}
export default NewsDetails;