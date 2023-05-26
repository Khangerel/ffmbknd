
import { Button, Col, Row, Image, Container, ListGroup, ListGroupItem, CloseButton } from "react-bootstrap";
import SwiperSlide1 from "../assets/images/swiperslide1.png";

function NewsDetailsHeader({news_data}) {
    return (
        <Container>
      <Image src={SwiperSlide1} fluid />
      {/* <Image src={news_data.image_thumbnail} fluid/> */}

      <div className="pt-4">
        <div className="d-flex">
          {/* {
            tags.map((tag, tg_index) => (
              <Button className="px-4 pt-1 pb-1 bg-prime-weak border-none font-weight-bold" key={tg_index}>
                {tag.name}
              </Button>
            ))
          } */}
          <h1 className="title">{news_data.title}</h1>
        </div>
      </div>
    </Container>
    )
}
export default NewsDetails;