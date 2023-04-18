import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProdbyId } from '../../redux/actions/prodActions';
import { Button, ButtonGroup, Container } from 'react-bootstrap';

import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { addTocart } from '../../redux/reducers/cartSlice';
import { addToheart } from '../../redux/reducers/heartSlice';
import Star from '../../components/Star';

function SingleProd() {
  
    const { id } = useParams();
    const dispatch = useDispatch();

    const product = useSelector(state => state.root.product.singleProd);

    useEffect(()=>{
        dispatch(fetchProdbyId(id))
    },[id])


   
  return (
    <Container className='single__prod'>
        <div className='row py-5'>
            <div className='col-lg-6'>
                <div className='prod__slider'>
            <OwlCarousel
            className='owl-theme'
            items='1'
            dots
            nav
            loop
            > 
            {product.images && product.images.map((image,index)=> (
              <div className='item banner__img' key={index}>
                <img className='w-100 h-100' src={image} alt='' />
              </div>
            ))}
          </OwlCarousel>
          </div>
            </div>
            <div className='col-lg-6 px-5'>
                <p className='cat'>Category:<span>{product.category}</span></p>
                <h2 className='title pt-2'>{product.title}</h2>
                <ul className='stars d-flex gap-1'>
                  <Star stars={product.rating} />
                </ul>
                <div className='price d-flex gap-3 py-3'>
                <del className='del__price'>RS.{product.price}</del>
                <p className='dis__price'>RS.{product.discountedPrice}</p>
                </div>
                
                <p className='desc'>{product.description}</p>
                <h6 className='stock py-3'>In Stock: <span>{product.stock}</span></h6>
                <div className='d-flex gap-2 pt-2 pb-4'>
                {/* <ButtonGroup className='d-flex align-items-center'>
                    <Button className='plus__btn'><AddIcon /></Button>
                    <p>1</p>
                    <Button className='minus__btn'><RemoveIcon /></Button>
                </ButtonGroup> */}
                <Button className='cart-btn' type='btn' onClick={() => dispatch(addTocart(product))}>Add to cart</Button>
                </div>
                <div>
                    <ul className='icons d-flex gap-4 '>
                        <li onClick={()=>dispatch(addToheart(product))}><FavoriteBorderIcon />Add to Wishlist</li>
                        <li><ShareIcon />Share this product</li>
                    </ul>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default SingleProd