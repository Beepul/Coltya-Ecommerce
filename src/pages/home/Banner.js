
import React from 'react'
import { Container } from 'react-bootstrap'
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Category from './Category';

function Banner() {

  return (
    <Container fluid>
      <Container fluid="sm md"  className='banner__sec'>
        <div className='row'>
          <div className='banner__cat col-lg-2 d-lg-block d-sm-none d-none py-3'>
            <Category />
          </div>
          <div className=' col-lg-10 col-sm-12 col-12'>
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='item banner__img'>
                <img className='w-100 h-100' src='https://klbtheme.com/clotya/wp-content/uploads/2022/04/slider-01.jpg' alt='' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='item banner__img'>
                  <img className='w-100 h-100' src='https://klbtheme.com/clotya/wp-content/uploads/2022/04/slider-03.jpg' />
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='item banner__img'>
                <img className='w-100 h-100' src='https://klbtheme.com/clotya/wp-content/uploads/2022/04/slider-02.jpg' alt='' />
              </div>
        </SwiperSlide>
       
      </Swiper>
          {/* <OwlCarousel
          className='owl-theme'
          items='1'
          dots
          nav
          loop
          
          > 
              <div className='item banner__img'>
                <img className='w-100 h-100' src='https://klbtheme.com/clotya/wp-content/uploads/2022/04/slider-01.jpg' alt='' />
              </div>
              <div className='item banner__img'>
                  <img className='w-100 h-100' src='https://klbtheme.com/clotya/wp-content/uploads/2022/04/slider-03.jpg' />
              </div>
              <div className='item banner__img'>
                <img className='w-100 h-100' src='https://klbtheme.com/clotya/wp-content/uploads/2022/04/slider-02.jpg' alt='' />
              </div>
          </OwlCarousel> */}
          </div>
        </div>
      </Container>
    </Container>
  )
}

export default Banner