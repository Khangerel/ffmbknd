import { Link as RouterLink } from 'react-router-dom';
// @mui
import Container from "react-bootstrap/Container";

import logo_image from '../assets/images/FAROFoundationIcon.png'
import { Image } from 'react-bootstrap';
export default function Logo({ disabledLink = false, sx }) {

  const logo = (
    <Container>
      <Image src={logo_image} width={210}/>
    </Container>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
