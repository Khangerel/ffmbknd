import { useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import  { ReactComponent as SVG}  from '../assets/images/loading-2.svg';
// import loading_script from "../assets/images/loading.txt"

function LoadingPage() {
    useEffect(() => {
       
    }, [])
    return (
        <div className="position-fixed w-100 min-vh-100" style={{ background: '#fff', top: 0, left: 0, zIndex: 9999 }}>
            <Container>
                <SVG/>
            </Container>
        </div>
    )
}
export default LoadingPage;
