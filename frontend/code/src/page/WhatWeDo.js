import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CardImage1 from "../assets/images/cardimageg1.png";
// import CardImage2 from "../assets/images/cardimage2.png";
import ArrowRightCircle from "../components/ArrowRightCircle";
import {Image} from "react-bootstrap";
import GetInvolved from "../components/GetInvolved";
import { useTranslation } from "react-i18next";
function WhatWeDo() {
    const { t } = useTranslation();
    return(
        <Container>
            <div className="min-h-100vh">
                <h1 className="title text-center pt-5 mt-5 pb-5">{t("menu.what_we_do")}</h1>
                <Row className="pt-5 ">
                    <Col>
                        <Card className="rounded-0 border-none ps-2 pe-2">
                            <Row>
                                <Col className="d-flex align-items-center bg-gray" xs="12" lg="6">
                                    <Card.Body>
                                        <Card.Title>
                                            <h1>Training</h1>
                                        </Card.Title>
                                        <Card.Text>
                                            <Button className="bg-none btn btn-primary text-black d-flex align-items-center">
                                                <ArrowRightCircle className="me-2"/>
                                                <div className='ms-2'>
                                                    Read more
                                                </div>
                                            </Button>
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col xs="12" lg="6" className="p-0"  height="482">
                                    <Card.Img variant="top" src={CardImage1} className="rounded-0"/>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="rounded-0 border-none ps-2 pe-2">
                            <Row>
                                <Col className="d-flex align-items-center bg-gray" xs="12" lg="6">
                                    <Card.Body>
                                        <Card.Title>
                                            <h1>Projects</h1>
                                        </Card.Title>
                                        <Card.Text>
                                            <Button className="bg-none btn btn-primary text-black d-flex align-items-center">
                                                <ArrowRightCircle className="me-2"/>
                                                <div className='ms-2'>
                                                    Read more
                                                </div>
                                            </Button>
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col xs="12" lg="6" className="p-0">
                                    <Card.Img variant="top" src={CardImage1} className="rounded-0"/>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="min-h-100vh">
                <h1 className="title text-center">Training</h1>
                <Row className="">
                    <Col xs="12" lg="6" className="pe-4 ps-4 pt-5">
                        <Card className="rounded-0 bg-gray">
                            <Row>
                                <Col xs="12" lg="5">
                                    <Card.Img src={CardImage1} className="rounded-0"/>
                                </Col>
                                <Col  xs="12" lg="7" className="d-flex align-items-center">
                                    <Card.Body>
                                        <Card.Title>
                                            <h4 className="d-flex align-items-center">
                                                Personal Safety
                                                <Button className='bg-none btn btn-primary text-black d-flex align-items-center'>
                                                    <ArrowRightCircle className="me-2"/>
                                                </Button>
                                            </h4>
                                        </Card.Title>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col xs="12" lg="6" className="pe-4 ps-4 pt-5">
                        <Card className="rounded-0 bg-gray">
                            <Row>
                                <Col xs="12" lg="5">
                                    <Card.Img src={CardImage1} className="rounded-0"/>
                                </Col>
                                <Col  xs="12" lg="7" className="d-flex align-items-center">
                                    <Card.Body>
                                        <Card.Title>
                                            <h4 className="d-flex align-items-center">
                                                Cybersecurity
                                                <Button className='bg-none btn btn-primary text-black d-flex align-items-center'>
                                                    <ArrowRightCircle className="me-2"/>
                                                </Button>
                                            </h4>
                                        </Card.Title>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col xs="12" lg="6" className="pe-4 ps-4 pt-5">
                        <Card className="rounded-0 bg-gray">
                            <Row>
                                <Col xs="12" lg="5">
                                    <Card.Img src={CardImage1} className="rounded-0"/>
                                </Col>
                                <Col  xs="12" lg="7" className="d-flex align-items-center">
                                    <Card.Body>
                                        <Card.Title>
                                            <h4 className="d-flex align-items-center">
                                                Critical Thinking
                                                <Button className='bg-none btn btn-primary text-black d-flex align-items-center'>
                                                    <ArrowRightCircle className="me-2"/>
                                                </Button>
                                            </h4>
                                        </Card.Title>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col xs="12" lg="6" className="pe-4 ps-4 pt-5">
                        <Card className="rounded-0 bg-gray">
                            <Row>
                                <Col xs="12" lg="5">
                                    <Card.Img src={CardImage1} className="rounded-0"/>
                                </Col>
                                <Col  xs="12" lg="7" className="d-flex align-items-center">
                                    <Card.Body>
                                        <Card.Title>
                                            <h4 className="d-flex align-items-center">
                                                Child Protection
                                                <Button className='bg-none btn btn-primary text-black d-flex align-items-center'>
                                                    <ArrowRightCircle className="me-2"/>
                                                </Button>
                                            </h4>
                                        </Card.Title>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="min-h-100vh">
                <h1 className="title text-center">Training | Facebook for Business</h1>
                <Row>
                    <Col  xs="12" lg="3" className="p-0 pt-5">
                        <Image src={CardImage1} className="w-100"/>
                    </Col>
                    <Col  xs="12" lg="9" className="ps-5 pt-5">
                        <p>
                            With Meta Business Suite or Meta Business <br/>
                            Manager, you'll be able to: · Oversee all of your <br/>
                            Pages, accounts and business assets in one place.
                        </p>
                        <ul>
                            <li>Social media importance for business</li>
                            <li>Content creating</li>
                            <li>Advertising</li>
                        </ul>
                        <Button className='bg-none btn btn-primary text-black d-flex align-items-center'>
                            <ArrowRightCircle className="me-2"/>
                            <div className='ms-2'>
                                Read more
                            </div>
                        </Button>
                    </Col>
                </Row>
            </div>
            <div className="min-h-100vh">
                <h1 className="title text-center">Projects</h1>
                <Row>
                    <Col xs="12" lg="4" className="pt-5">
                        <Card>
                            <Card.Img src={CardImage1}/>
                            <Card.Body>
                                <Card.Title>
                                    <div className="d-flex align-items-center text-black">
                                        <p className="m-0">We Think Digital</p>
                                        <div className="ms-auto">
                                            <ArrowRightCircle/>
                                        </div>
                                    </div>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="12" lg="4" className="pt-5">
                        <Card>
                            <Card.Img src={CardImage1}/>
                            <Card.Body>
                                <Card.Title>
                                    <div className="d-flex align-items-center text-black">
                                        <p className="m-0">MIL4EDU</p>
                                        <div className="ms-auto">
                                            <ArrowRightCircle/>
                                        </div>
                                    </div>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="12" lg="4" className="pt-5">
                        <Card>
                            <Card.Img src={CardImage1}/>
                            <Card.Body>
                                <Card.Title>
                                    <div className="d-flex align-items-center text-black">
                                        <p className="m-0">Digital Literacy</p>
                                        <div className="ms-auto">
                                            <ArrowRightCircle/>
                                        </div>
                                    </div>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
export default WhatWeDo;