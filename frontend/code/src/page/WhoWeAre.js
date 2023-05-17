import { Col, Container, Row, Image } from "react-bootstrap";
import example_avatar_image from "../assets/images/example_avatar.png"
import {Chrono} from "react-chrono"
function WhoWeAre() {
    const out_team_list = [
        {
            name: "Byambajargal Ayushjav",
            job_name: "Chairwoman"
        },
        {
            name: "Byambajargal Ayushjav",
            job_name: "Chairwoman"
        },
        {
            name: "Byambajargal Ayushjav",
            job_name: "Chairwoman"
        },
        {
            name: "Byambajargal Ayushjav",
            job_name: "Chairwoman"
        },
        {
            name: "Byambajargal Ayushjav",
            job_name: "Chairwoman"
        },
        {
            name: "Byambajargal Ayushjav",
            job_name: "Chairwoman"
        },
        {
            name: "Byambajargal Ayushjav",
            job_name: "Chairwoman"
        },
        {
            name: "Byambajargal Ayushjav",
            job_name: "Chairwoman"
        },
    ]
    return (<div>
        <Container>
            <Row className="pt-5 mt-5 m-0">
                <Col xl={6} lg={6} sm={1} md={6}>
                    <h1>
                        Our team
                    </h1>
                </Col>
                <Col xl={6} lg={6} sm={1} md={6}>
                    <p className="text-gray">
                        Our priority is to implement positive change in the community through the use of social media.
                    </p>
                </Col>
            </Row>
            <div>
                <Row className="w-100 pt-5 mt-5">
                    {
                        out_team_list.map((el, key) => (
                            <Col xl={3} lg={3} sm={1} md={2}>
                                <div className="px-1 pb-5">
                                    <div className="d-flex justify-content-center">
                                        <div className="rounded-circle bg-gradient-primary p-2">
                                            <Image src={example_avatar_image} width={125} className="rounded-circle"
                                                style={{ border: '3px solid #fff' }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="text-center pt-3">
                                            {el.name}
                                        </h5>
                                        <p className="text-gray text-center">{el.job_name}</p>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </Container>
        <div>
            <Row className="w-100 min-vh-50">
                <Col xl={4} lg={4} md={5} sm={6} className="bg-primary d-flex justify-content-center align-items-center p">
                    <h1 className="text-white hero-title text-center">Who <br /> We Are</h1>
                </Col>
                <Col xl={8} lg={8} md={7} sm={6} className="d-flex">
                    <div className="px-5 mx-5">
                        <h1 className="px-5 mx-5 pb-5">Faro Foundation NGO</h1>
                        <p className="px-5 text-black mx-5">
                            "Faro Foundation (FF) is a non-governmental organization that has focused
                            on promoting adequate and accessible use of social media and digital literacy in Mongolia.
                            FFM’s work includes but is not limited to, promoting online safety, digital literacy, child
                            protection programs, proper use of social media, public awareness regarding cyber
                            bullying and such.
                            <br />
                            <br />
                            <br />
                            The Faro Foundation has been Meta's official Safety Partner in
                            Mongolia since April 2019. Within the framework of our cooperation, we have
                            successfully implemented projects such as the Digital Literacy Library Program,
                            GoodShare campaign, We Think Digital, and so on."
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
        <div>
            <Chrono mode="HORIZONTAL"></Chrono> 
        </div>
    </div>)
}
export default WhoWeAre;