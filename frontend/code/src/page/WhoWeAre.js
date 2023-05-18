import { Col, Container, Row, Image } from "react-bootstrap";
import example_avatar_image from "../assets/images/example_avatar.png";
import our_banner_image from "../assets/images/our-banner.png";
import { Chrono } from "react-chrono"
import QuoteOpen from "../components/QuoteOpen";
import QuoteClose from "../components/QuoteClose";
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
            title: <h1>2019</h1>,
            cardTitle: <h1>The Battle of Britain</h1>,
            // url: "http://google.com",
            cardSubtitle:
                "Faro Foundation launched Digital Literacy Library Program in April, 2019",
            cardDetailedText: `This program is a collaboration between the Faro Foundation and Meta and is available for classroom, extracurricular, home, individual and group study.`
        },
        {
            title: <h1>2019</h1>,
            cardTitle: <h1>The Battle of Britain</h1>,
            cardSubtitle: `RAF Spitfire pilots scramble for their planes`,
            cardDetailedText: `After France’s surrender in June 1940, Churchill told the British people, “Hitler knows that he will have to break us in this island or lose the war”. To mount a successful invasion, the Germans had to gain air superiority. The first phase of the battle began on 10 July with Luftwaffe attacks on shipping in the Channel.
                The following month, RAF Fighter Command airfields and aircraft factories came under attack. Under the dynamic direction of Lord Beaverbrook, production of Spitfire and Hurricane fighters increased, and despite its losses in pilots and planes, the RAF was never as seriously weakened as the Germans supposed.`
        },
        {
            title: <h1>2020</h1>,
            cardTitle: "Operation Barbarossa",
            cardSubtitle: `A column of Red Army prisoners taken during the first days of the German invasion`,
            cardDetailedText: `Since the 1920s, Hitler had seen Russia, with its immense natural resources, as the principal target for conquest and expansion. It would provide, he believed, the necessary ‘Lebensraum’, or living space, for the German people. And by conquering Russia, Hitler would also destroy the “Jewish pestilential creed of Bolshevism”. His non-aggression pact with Stalin in August 1939 he regarded as a mere temporary expedient.
                Barely a month after the fall of France, and while the Battle of Britain was being fought, Hitler started planning for the Blitzkrieg campaign against Russia, which began on 22 June 1941. Despite repeated warnings, Stalin was taken by surprise, and for the first few months the Germans achieved spectacular victories, capturing huge swathes of land and hundreds of thousands of prisoners. But they failed to take Moscow or Leningrad before winter set in.
                On 5/6 December, the Red Army launched a counter-offensive which removed the immediate threat to the Soviet capital. It also brought the German high command to the brink of a catastrophic military crisis. Hitler stepped in and took personal command. His intervention was decisive and he later boasted, “That we overcame this winter and are today in a position again to proceed victoriously… is solely attributable to the bravery of the soldiers at the front and my firm will to hold out…”`
        },
        {
            title: <h1>2020</h1>,
            cardTitle: "Pearl Harbor",
            cardSubtitle: `The destroyer USS Shaw explodes in dry dock after being hit by Japanese aircraft`,
            cardDetailedText: `After Japan’s occupation of French Indo-China in July 1941, US President Franklin D Roosevelt, followed by Britain and the Netherlands, ordered the freezing of Japanese assets.
                Many Japanese now believed that there was no alternative between economic ruin and going to war with the United States and the European colonial powers. In October 1941, a hardline government under General Hideki Tojo came to power, and preparations were made to deliver a devastating blow against the Americans.`
        },
        
    ];

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
        <Container className="min-vh-100 d-flex align-items-center justify-content-center">
            <h1 className="text-center px-5 mx-5 with-light-quote position-relative">
                <div style={{position: 'absolute', top: -50, left: -25}}><QuoteOpen style={{position: 'absolute', top: 0, left: 0}}/></div>
                
                            Our vision is to implement positive change in the community through social networks
                and empower children and youth to protect their personal information, share
                information correctly, and prevent cyber-discrimination and cyber-attacks.
                <div style={{position: 'absolute', bottom: -50, right: -25}}><QuoteClose style={{position: 'absolute', bottom: 0, right: 0}}/></div>
                
            </h1>
        </Container>
        <div className="d-flex align-items-center pt-5 mt-5">
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