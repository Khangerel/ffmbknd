import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image'
// import startlogo from '../assets/images/startlogo.png'
import bavandeeshin from '../assets/images/bavandeeshin.gif'


export default function StartLogo() {
    const logo = (
        <Container>
            <Image src={bavandeeshin} width="65%"/>
        </Container>
    );
  
    return <>{logo}</>;
  }
  