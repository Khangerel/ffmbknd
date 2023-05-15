import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Autoplay } from 'swiper'
import { EffectCoverflow, Pagination } from "swiper";
import { Container } from 'react-bootstrap';
import SwiperImage1 from '../assets/images/cardimageg1.png';
import SwiperImage2 from '../assets/images/swiperslide2.png';
import SwiperImage3 from '../assets/images/swiperimage3.png';
import SwiperImage4 from '../assets/images/swiperimage4.png';
import {Image} from "react-bootstrap";
import { useTranslation } from 'react-i18next';

function GetInvolved() {
    SwiperCore.use([Autoplay]);
    const { t } = useTranslation();
    const swiperImage1 = {
      background: 'linear-gradient(to right,rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("'+SwiperImage1+'")',
    }
    const swiperImage2 = {
      background: 'linear-gradient(to right,rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("'+SwiperImage2+'")',
    }
    const swiperImage3 = {
      background: 'linear-gradient(to right,rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("'+SwiperImage3+'")',
    }
    const swiperImage4 = {
      background: 'linear-gradient(to right,rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("'+SwiperImage4+'")',
    }
    return (
      <Container>
        <div className='min-h-100vh pt-5'>
          <h1 className="title pt-5 pb-5 text-center">{t("menu.get_involved")}</h1>
          <div className='pt-5 pb-5 mb-5'>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              spaceBetween={0}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 10,
                stretch: 1,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              slidesPerView={2}
              loop={true}
              pagination={true}
              navigation={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper get-involved-swiper"
            >
              <SwiperSlide>
                <div className='min-h-50vh' style={swiperImage1}>

                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='min-h-50vh' style={swiperImage2}>

                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='min-h-50vh' style={swiperImage3}>

                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='min-h-50vh' style={swiperImage4}>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    );
  }
export default GetInvolved;