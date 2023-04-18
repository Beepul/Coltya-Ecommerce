import React from 'react'
import { Container } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function Partner() {
  return (
    <Container className='partner py-4'>
        <OwlCarousel 
        className='owl-theme'
        items='6'
        loop
        >
    <div className='item'>
        <img className='w-100' src='https://klbtheme.com/clotya/wp-content/uploads/2022/04/logo-5.png' />
    </div>
    <div className='item'>
        <img  className='w-100' src='https://klbtheme.com/clotya/wp-content/uploads/2022/04/logo-8.png' />
    </div>
    <div className='item'>
        <img  className='w-100'src='https://klbtheme.com/clotya/wp-content/uploads/2022/04/logo-2.png' />
    </div>
    <div className='item'>
        <img className='w-100' src='https://klbtheme.com/clotya/wp-content/uploads/2022/04/logo-4.png' />
    </div>
    <div className='item'>
        <img className='w-100' src='https://klbtheme.com/clotya/wp-content/uploads/2022/04/logo-1.png' />
    </div>
    <div className='item'>
        <img className='w-100' src='https://klbtheme.com/clotya/wp-content/uploads/2022/04/logo-3.png' />
    </div>
    
</OwlCarousel>
    </Container>
  )
}

export default Partner