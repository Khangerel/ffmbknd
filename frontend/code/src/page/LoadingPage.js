import { Container, Image } from "react-bootstrap";
// import { ReactComponent as loading_image} from '../assets/images/loading.svg'
function LoadingPage() {
    return (
        <div className="position-fixed w-100 min-vh-100" style={{ background: '#fff', top: 0, left: 0, zIndex: 9999}}>
            <Container>
                АААААААААААААААААА
                {/* <Image src={loading_image} className="w-100" /> */}
            </Container>
        </div>
    )
}
export default LoadingPage;
