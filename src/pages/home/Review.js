import React from 'react'
import { Container } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';


function Review() {
  
  return (
    <Container className='review__sec'>
        <div className='review__title pb-5'>
            <h2>Latest Buyers Reviews</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
        </div>
        <div className='review__carousel py-4'>
        <OwlCarousel 
        className='owl-theme d-sm-none d-lg-block d-none'
        items='3'
        dots
        nav
        loop
        >
            <div className='item px-5 text-center'>
            <ul className='d-flex gap-1 justify-content-center mb-4'>
                            <li><StarOutlinedIcon /></li>
                            <li><StarOutlinedIcon /></li>
                            <li><StarOutlinedIcon /></li>
                            <li><StarOutlinedIcon /></li>
                            <li><StarOutlinedIcon /></li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className='review__name'>Scarlet Edwards</p>
            </div>
            <div className='item px-5 text-center'>
            <ul className='d-flex gap-1 justify-content-center mb-4'>
                            <li><StarOutlinedIcon /></li>
                            <li><StarOutlinedIcon /></li>
                            <li><StarOutlinedIcon /></li>
                            <li><StarOutlinedIcon /></li>
                            <li><StarOutlinedIcon /></li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className='review__name'>Scarlet Edwards</p>
            </div>
            <div className='item px-5 text-center'>
            <ul className='d-flex gap-1 justify-content-center mb-4'>
                            <li><StarOutlinedIcon /></li>
                            <li><StarOutlinedIcon /></li>
                            <li><StarOutlinedIcon /></li>
                            <li><StarOutlinedIcon /></li>
                            <li><StarOutlinedIcon /></li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className='review__name'>Scarlet Edwards</p>
            </div>
            <div className='item px-5 text-center'>
            <ul className='d-flex gap-1 justify-content-center mb-4'>
                            <li><StarOutlinedIcon /></li>
                            <li><StarOutlinedIcon /></li>
                            <li><StarOutlinedIcon /></li>
                            <li><StarOutlinedIcon /></li>
                            <li><StarOutlinedIcon /></li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className='review__name'>Scarlet Edwards</p>
            </div>
            <div className='item px-5 text-center'>
            <ul className='d-flex gap-1 justify-content-center mb-4'>
                            <li><StarOutlinedIcon /></li>
                            <li><StarOutlinedIcon /></li>
                            <li><StarOutlinedIcon /></li>
                            <li><StarOutlinedIcon /></li>
                            <li><StarOutlinedIcon /></li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className='review__name'>Scarlet Edwards</p>
            </div>
            <div className='item px-5 text-center'>
            <ul className='d-flex gap-1 justify-content-center mb-4'>
                            <li><StarOutlinedIcon /></li>
                            <li><StarOutlinedIcon /></li>
                            <li><StarOutlinedIcon /></li>
                            <li><StarOutlinedIcon /></li>
                            <li><StarOutlinedIcon /></li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className='review__name'>Scarlet Edwards</p>
            </div>
            
        </OwlCarousel>
        </div>
    </Container>
  )
}

export default Review