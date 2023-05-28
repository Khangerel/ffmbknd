
import { Button, Col, Row, Image, Container, ListGroup, ListGroupItem, CloseButton } from "react-bootstrap";
import SwiperSlide1 from "../assets/images/swiperslide1.png";
import { useState, useEffect } from "react";

function NewsDetails({ news_data, news_id}) {
  const [tags, setTags] = useState([]);
  const [category_list, setCategoryList] = useState([]);
  useEffect(() => {
    setTags(news_data.tags);
    setCategoryList(news_data.categories);
  },[news_data, news_id])
  return (
    <Container>
      <Image src={SwiperSlide1} fluid />
      {/* <Image src={news_data.image_thumbnail} fluid/> */}

      <div className="pt-4">
        {
            tags.map((tag, tg_index) => (
              <Button className="px-4 pt-1 pb-1 bg-prime-weak border-none font-weight-bold" key={tg_index}>
                {tag.name}
              </Button>
            ))
          }
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