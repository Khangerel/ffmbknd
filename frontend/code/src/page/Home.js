
import { Button, Card, Col, Row, Image, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import HeroImage from "../components/HeroImage";
function Home() {

  return (
    <div>
      <div className="position-relative">
        
        <Container className="min-vh-100 d-flex align-items-center">
          <div>
            <h1>
              Advancing <br/>
              Digital literacy,<br/>
              Online safety and more.<br/>
            </h1>
            <p className="text-gray">FFM has focused
            on promoting adequate and accessible use of social media and digital literacy in Mongolia.
            </p>
            <div className="d-flex">
              <div className="pe-5">
                <Button>Read more</Button>
              </div>
              <div className="pe-5">
                <h3>
                  44000+
                </h3>
                <p className="text-gray"> Citizens trained</p>
              </div>
              <div className="pe-5">
                <h3>
                  710+
                </h3>
                <p className="text-gray">
                  Trainings conducted 
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
          top: '50%',
          /* left: 50%; */
          transform: 'translate(120%, -60%)'}}>
          <HeroImage/>
        </div>
      </div>
      <div className="ps-5 pe-5">
          <div className="row w-100 min-vh-50">
            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-6 bg-primary d-flex justify-content-center align-items-center p">
              <h1 className="text-white">Who We Are</h1>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-6 d-flex align-items-center">
              <div className="ps-5 pe-5">
                <h4>Faro Foundation NGO</h4>
                <p className="pe-5">
                    FF is a non-governmental organization that has focused
                  on promoting adequate and accessible use of social media and digital literacy.
                  Our work includes but is not limited to, promoting online safety, digital literacy, child
                  protection programs, proper use of social media, public awareness regarding cyber
                  bullying and such. 
                </p>
              </div>
              
            </div>
          </div>
      </div>
      <div>
          <Container className="pt-5 pb-5"> 
            <div className="d-flex bd-highlight pb-5">
              <h1>What We Do</h1>
            </div>
            <Row>
              <Col xl={3} lg={3} sm={1} md={2}>
                <Card className="bg-blue-light border-none">
                  <Card.Body>
                    <Card.Text className="text-white">
                    We have share our journey and some story
                    </Card.Text>
                    <Card.Title className="text-white pt-5">Digital Literacy</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={3} sm={1} md={2}>
                <Card className="bg-pink-light border-none">
                  <Card.Body>
                    <Card.Text className="text-white">
                    We have share our journey and some story
                    </Card.Text>
                    <Card.Title className="text-white pt-5">Digital Literacy</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={3} sm={1} md={2}>
                <Card className="bg-aqua-light border-none">
                  <Card.Body>
                    <Card.Text className="text-white">
                    We have share our journey and some story
                    </Card.Text>
                    <Card.Title className="text-white pt-5">Digital Literacy</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={3} sm={1} md={2}>
                <Card className="bg-yellow-light border-none">
                  <Card.Body>
                    <Card.Text className="text-white">
                    We have share our journey and some story
                    </Card.Text>
                    <Card.Title className="text-white pt-5">Digital Literacy</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
      </div>
    </div>
  );
}
export default Home;