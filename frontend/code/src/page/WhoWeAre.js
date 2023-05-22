import { Col, Container, Row, Image } from "react-bootstrap";
import example_avatar_image from "../assets/images/example_avatar.png";
import our_banner_image from "../assets/images/our-banner.png";
import { Chrono } from "react-chrono"
import QuoteOpen from "../components/QuoteOpen";
import QuoteClose from "../components/QuoteClose";
import "../App.css";
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
    const timeline_list = [
        {
            title: <h1 className="text-primary hero-title">2019</h1>,
            cardTitle: <h3 className="text-primary text-right">FF founded</h3>,
            // url: "http://google.com",
            cardSubtitle:
                "Faro Foundation launched Digital Literacy Library Program in April, 2019",
            cardDetailedText: `This program is a collaboration between the Faro Foundation and Meta and is available for classroom, extracurricular, home, individual and group study.`
        },
        {
            title: <h1 className="text-primary hero-title">2019</h1>,
            cardTitle: <h3 className="text-primary">Meta Safety Partner</h3>,
            cardSubtitle: `RAF Spitfire pilots scramble for their planes`,
            cardDetailedText: <span>After France’s surrender in June 1940, Churchill told the British people, “Hitler knows that he will have to break us in this island or lose the war”. To mount a successful invasion, the Germans had to gain air superiority. The first phase of the battle began on 10 July with Luftwaffe attacks on shipping in the Channel.
                The following month, RAF Fighter Command airfields and aircraft factories came under attack. Under the dynamic direction of Lord Beaverbrook, production of Spitfire and Hurricane fighters increased, and despite its losses in pilots and planes, the RAF was never as seriously weakened as the Germans supposed.</span>
        },
    ];

    return (<div>
        <Container>
            <Row className="pt-5 mt-5 m-0">
                <Col xl={6} lg={6} sm={12} md={6}>
                    <h1>
                        Our team
                    </h1>
                </Col>
                <Col xl={6} lg={6} sm={12} md={6}>
                    <p className="text-gray">
                        Our priority is to implement positive change in the community through the use of social media.
                    </p>
                </Col>
            </Row>
            <div>
                <Row className="w-100 pt-5 mt-5">
                    {
                        out_team_list.map((el, key) => (
                            <Col xl={3} lg={3} sm={12} md={6}>
                                <div className="px-1 pb-5">
                                    <div className="d-flex justify-content-center">
                                        <div className="rounded-circle bg-gradient-primary p-1">
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
        <div className="pt-5 mt-5">
            <Row className="w-100 min-vh-50">
                <Col xl={4} lg={4} md={12} sm={12} className="bg-primary d-flex justify-content-center align-items-center pb-3 mb-5">
                    <h1 className="text-white hero-title text-center pt-5 pb-5">Who <br /> We Are</h1>
                </Col>
                <Col xl={8} lg={8} md={12} sm={12} className="d-flex pb-3">
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
        <div className="pt-5 mt-5">
            <div className="w-100 position-relative">
                <Image src={our_banner_image} fluid/>
                <div className="image-mask-gradiented-primary position-absolute w-100 h-100" style={{top: 0, left: 0}}>
                    <div className="pt-5 mt-5 ms-5">
                        <h1 className="text-white">
                            Digital Literacy in Mongolia
                        </h1>
                        <p className="text-white">(FFM) is a non-governmental organization that has focused on promoting adequate </p>
                    </div>
                </div>
            </div>
        </div>
        <Container className="min-vh-75 d-flex align-items-center justify-content-center">
            <h1 className="text-center px-5 mx-5 with-light-quote position-relative fw-normal">
                <div style={{position: 'absolute', top: -50, left: -25}}><QuoteOpen style={{position: 'absolute', top: 0, left: 0}}/></div>
                
                            Our vision is to implement positive change in the community through social networks
                and empower children and youth to protect their personal information, share
                information correctly, and prevent cyber-discrimination and cyber-attacks.
                <div style={{position: 'absolute', bottom: -50, right: -25}}><QuoteClose style={{position: 'absolute', bottom: 0, right: 0}}/></div>
                
            </h1>
        </Container>
        <div className="d-flex align-items-center pt-5 mt-5"  id="faroTimeLine">
            <Chrono items={timeline_list} 
                mode="VERTICAL_ALTERNATING"
                hideControls={true}
                slideItemDuration={4000}
                cardHeight={250}
                cardWidth={600}
                fontSizes={{
                    title: "1.1rem"
                }}
                outline
                contentDetailsHeight={150}
                enableOutline
                activeItemIndex={null}
                className="timeline-wrapper disable-activation"
                disableNavOnKey
            />
        </div>
    </div>)
}
export default WhoWeAre;