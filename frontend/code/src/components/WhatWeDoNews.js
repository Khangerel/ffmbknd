import { useEffect, useState } from "react";
import { Button, Card, Col, Collapse, Container, Row, Image } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa";

function WhatWeDoNews({ data, index }) {
    const image_col = (
        <Col xl={6} lg={6} sm={12} md={12} className="position-relative d-flex justify-content-center">
            <Image src={data.image} fluid className="position-absolute d-none-sm d-none-small-none d-none-md-none" style={{ top: '-190px', maxWidth: '479px' }} />
        </Col>
    )
    const [button_state, setButtonState] = useState(false);

    return (
        <div className="blue-under-line">
            <div className="position-relative" style={{ background: `url(${data.image_banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Container className="">
                    <h1 className={`text-white pt-5 pb-5 d-none-sm d-none-small-none d-none-md-none pe-4 ${index % 2 === 1 ? 'text-right' : ''}`}>{data.title}</h1>
                </Container>
                <div className="pt-5 pb-5  d-block d-xl-none d-lg-none"></div>
            </div>
            <Container>
                <Row className="pt-5 mt-5 pb-5 mb-5 w-100">
                    {index % 2 == 1 ? image_col : ''}
                    <Col xl={6} lg={6} sm={12} md={12} className="d-flex align-items-center">
                        <div>
                            <Image src={data.image} fluid className=" d-block d-xl-none d-lg-none" style={{
                                marginTop: '-10rem',
                                zIndex: 1,
                                position: 'relative',
                            }} />
                            <h1 className={`text-center pt-3 pb-3 d-block d-xl-none d-lg-none`}>
                                {data.title}
                            </h1>
                            <p className="text-align-justify text-center-sm ">
                                {data.description}
                            </p>
                            {button_state === false ? <Button
                                className="bg-none text-dart d-flex align-items-center p-0 m-0 pt-5"
                                onClick={() => {
                                    setButtonState(!button_state)
                                }}
                            >
                                <p className="m-0 me-3 fw-semibold">{data.button_name}</p>
                                <div className="p-1 rounded-circle d-flex align-items-center justify-content-center text-white"
                                    style={{ height: '47px', width: '47px', background: data.color }}>
                                    <FaAngleDown color="#fff" style={{
                                        transform: button_state ? 'rotate(180deg)' : 'rotate(0deg)'
                                    }} />
                                </div>
                            </Button> : ''}
                        </div>
                    </Col>
                    {index % 2 == 0 ? image_col : ''}
                </Row>
                <div className={`mb-5 ${index%2===1 ? 'text-right' : ''} text-center-sm`}>
                    <Collapse in={button_state}>
                        <div>
                            <h3 className="mt-5">Issue</h3>
                            <p>{data.issue}</p>
                            <h3 className="mt-5"> Method </h3>
                            <p>
                                {data.method}
                            </p>
                            <h3 className="mt-5"> Impact </h3>
                            <div className={`mt-5 d-flex m-element-center-sm ${index === 1? 'ms-auto' : ''}`} style={{ flexFlow: 'column', width: 'fit-content' }}>
                                <h1 className="w-100 text-center" style={{ color: data.color }}>{data.impact}+</h1>
                                <h4 className="fw-medium w-100 text-center" style={{ color: data.color }}>{data.impact_name}</h4>
                            </div>
                        </div>
                    </Collapse>
                    {button_state === true ? <Button
                        className="bg-none text-dart d-flex align-items-center p-0 m-0 pt-5"
                        onClick={() => {
                            setButtonState(!button_state)
                        }}
                    >
                        <p className="m-0 me-3 fw-semibold">See less</p>
                        <div className="p-1 rounded-circle d-flex align-items-center justify-content-center text-white"
                            style={{ height: '47px', width: '47px', background: data.color }}>
                            <FaAngleDown color="#fff" style={{
                                transform: button_state ? 'rotate(180deg)' : 'rotate(0deg)'
                            }} />
                        </div>
                    </Button> : ''}
                </div>

            </Container>
        </div>
    )
}
export default WhatWeDoNews;