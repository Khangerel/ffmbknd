import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
function FeaturedNewsCard({ title, image_thumbnail, description, id }) {
    return (
        <div>
            <div className='mb-3'>
                <Image src={image_thumbnail} className="w-100" />
                <h4 className="mt-3">{title}</h4>
                <p className="text-gray mt-3">{description}</p>
                <div className="d-flex justify-content-end">
                    <Link className="text-dark me-4 text-bold" to={`/news/${id}`}>Continue reading</Link>
                </div>
            </div>
            {/* <div className="d-xl-block  "><h1>12312312</h1></div>
             */}
        </div>
    )
}
export default FeaturedNewsCard;