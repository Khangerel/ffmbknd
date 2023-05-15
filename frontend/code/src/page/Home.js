
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
      <div className="p-2">
          <div className="row">
            <div className="col">
              
            </div>
            <div className="col">
              
            </div>
          </div>
      </div>
    </div>
  );
}
export default Home;