import React from 'react'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

import { LinkContainer } from 'react-router-bootstrap';
import { addTocart } from '../../redux/reducers/cartSlice';
import { useDispatch } from 'react-redux';
import Star from '../../components/Star';
import { addToheart } from '../../redux/reducers/heartSlice';

function Bestseller({products, title}) {
    const dispatch = useDispatch();
  return (
    <Container className='best__seller pt-5 '>
        <div className='title text-center'>
            <h3>{title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
        </div>
        <div className='best__seller__slider'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper py-5"
      >
        {products && products.map((prod,index)=>(
            <SwiperSlide  key={index}>
                 <div className='prod__sec'>
                <LinkContainer to={`/details/${prod.id}`}>
                <div className='item '>
                <div className='item__img'>
                     <img className='w-100 h-100' src={prod.thumbnail} alt='' /> 
                </div>
                <div className='item__title'>
                    <Star stars={prod.rating}  />
                {/* <ul className='d-flex gap-1'>
                        <li><StarOutlinedIcon /></li>
                        <li><StarOutlinedIcon /></li>
                        <li><StarOutlinedIcon /></li>
                        <li><StarOutlinedIcon /></li>
                        <li><StarOutlinedIcon /></li>
                    </ul> */}
                    
                    <p>{prod.title}</p>
                    <div className='d-flex gap-3'>
                        <del>Rs. {prod.price}</del>
                    <h6>Rs. {prod.discountedPrice}</h6>
                    </div>
                </div>
                </div>
                </LinkContainer>
                <div className='short__con'>
                            <ul className='short__cuts d-flex flex-column gap-2'>
                                <li className='a aa' onClick={()=> dispatch(addToheart(prod))}><FavoriteBorderIcon/></li>
                                <li className='a ab' onClick={()=> dispatch(addTocart(prod))}><ShoppingBagOutlinedIcon/></li>
                                <li className='a ac'><ShareOutlinedIcon /></li>
                            </ul>
                    </div>
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
        {/* <OwlCarousel
        className='owl-theme'
        items='4'
        dots
        nav
        loop
        margin={20}
        >
            {products&& products.map((prod,index)=> (
                <div className='prod__sec' key={index}>
                <LinkContainer key={index} to={`/details/${prod.id}`}>
                <div className='item '>
                <div className='item__img'>
                     <img className='w-100 h-100' src={prod.thumbnail} alt='' /> 
                </div>
                <div className='item__title'>
                <ul className='d-flex gap-1'>
                        <li><StarOutlinedIcon /></li>
                        <li><StarOutlinedIcon /></li>
                        <li><StarOutlinedIcon /></li>
                        <li><StarOutlinedIcon /></li>
                        <li><StarOutlinedIcon /></li>
                    </ul>
                    
                    <p>{prod.title}</p>
                    <div className='d-flex gap-3'>
                        <del>Rs. {prod.price}</del>
                    <h6>Rs. {prod.discountedPrice}</h6>
                    </div>
                </div>
                </div>
                </LinkContainer>
                <div className='short__con'>
                            <ul className='short__cuts d-flex flex-column gap-2'>
                                <li className='a aa'><FavoriteBorderIcon/></li>
                                <li className='a ab' onClick={()=> dispatch(addTocart(prod))}><ShoppingBagOutlinedIcon/></li>
                                <li className='a ac'><ShareOutlinedIcon /></li>
                            </ul>
                    </div>
                </div>
            ))}
            </OwlCarousel> */}
        </div>
    </Container>
  )
}

export default Bestseller