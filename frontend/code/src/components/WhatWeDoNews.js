import { useEffect, useState } from "react";
import { Button, Card, Col, Collapse, Container, Row, Image} from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa";

function WhatWeDoNews({ data, index }) {
    const image_col = (
        <Col xl={6} lg={6} sm={12} md={12} className="position-relative">
            <Image src={data.image} fluid className="position-absolute d-none-sm d-none-small-none d-none-md-none" style={{ top: '-300px' }} />
        </Col>
    )
    const [button_state, setButtonState] = useState(false);

    return (
        <div>
            <div className="position-relative" style={{ background: `url(${data.image_banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Container className="pt-5 pb-5 ">
                    <h1 className="text-white pt-5 pb-5">{data.title}</h1>
                </Container>
            </div>
            <Container>
                <Row className="pt-5 mt-5 pb-5 mb-5 w-100">
                    {index%2==1? image_col: ''}
                    <Col xl={6} lg={6} sm={12} md={12} className="d-flex align-items-center">
                        <div>
                            <p>
                                {data.description}
                            </p>
                            <Collapse in={button_state}>
                                <div>
                                    <h3 className="mt-5">Issue</h3>
                                    <p>{data.issue}</p>
                                    <h3 className="mt-5"> Method </h3>
                                    <p>
                                        {data.method}
                                    </p>
                                    <h3 className="mt-5"> Impact </h3>
                                    <div className="mt-5 d-flex" style={{ flexFlow: 'column', width: 'fit-content' }}>
                                        <h1 className="w-100 text-center" style={{color: data.color}}>{data.impact}</h1>
                                        <h4 className="fw-medium w-100 text-center" style={{color: data.color}}>{data.impact_name}</h4>
                                    </div>
                                </div>
                            </Collapse>
                            <Button
                                className="bg-none text-dart d-flex align-items-center p-0 m-0 pt-5"
                                onClick={() => {
                                    setButtonState(!button_state)
                                }}
                            >
                                <p className="m-0 me-3 fw-semibold">{data.button_name}</p>
                                <div className="p-1 rounded-circle d-flex align-items-center justify-content-center text-white"
                                    style={{ height: '47px', width: '47px', background: data.color}}>
                                    <FaAngleDown color="#fff" style={{
                                        transform: button_state?'rotate(180deg)':'rotate(0deg)'
                                    }}/>
                                </div>
                            </Button>
                        </div>
                    </Col>
                    {index%2==0? image_col: ''}
                </Row>
            </Container>
        </div>
    )
}
export default WhatWeDoNews;