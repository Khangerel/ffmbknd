import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function FeaturedNewsCard({ title, image_thumbnail, description, id }) {
    const { t } = useTranslation();

    return (
        <div>
            <div className='mb-3 d-sm-none d-none-sm d-md-block'>
                <Image src={image_thumbnail} className="w-100" />
                <h4 className="mt-3">{title}</h4>
                <p className="text-gray mt-3">{description}</p>
                <div className="d-flex justify-content-end">
                    <Link className="text-dark me-4 text-bold" to={`/news/${id}`}>{t("landing.continue_reading")}</Link>
                </div>
            </div>
            <div className="d-block d-block-xs d-lg-none d-md-none d-xl-none pb-3">
                <div className="p-4 min-vh-50 h-100 position-relative " style={{
                    background: `linear-gradient(rgba(11, 26, 49, 1), rgba(0,0,0,0)), url(${image_thumbnail})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                }}>
                    {/* {
                        recent_post_list[0].tags.map((el, index) => (
                            <Button className="px-4 pt-1 pb-1 bg-prime-weak border-none font-weight-bold" key={index} >{el.name}</Button>
                        ))
                    } */}

                    <h3 className="pt-3 text-white">
                        {title}
                    </h3>
                    <p className="pt-3 text-white">
                        {description}
                    </p>
                    <div className="position-absolute" style={{ bottom: 20, right: 20 }}>
                        <Link className="text-white me-4 text-bold" to={`/news/${id}`}>{t("landing.continue_reading")}</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default FeaturedNewsCard;