import React, { useEffect, useRef, useState } from 'react'
import { Container, Nav, NavDropdown } from 'react-bootstrap'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { Slider, Typography } from '@mui/material';


import { fetchAllProd } from '../../redux/actions/prodActions';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { addTocart } from '../../redux/reducers/cartSlice';
import Category from '../home/Category';
import { filterByPrice } from '../../redux/reducers/productSlice';
import { addToheart } from '../../redux/reducers/heartSlice';
import Star from '../../components/Star';


function Shop() {
    const [fix, setFix] = useState();
    const [price,setPrice] = useState([1,2000])
    

    const dispatch = useDispatch();

    const {allProds, catProd, showCat, filteredByPrice, showFiltered} = useSelector(state => state.root.product);

    let products = showFiltered ? filteredByPrice :  showCat ? catProd : allProds ;
    const error =  showCat && catProd.length === 0 || showFiltered && filteredByPrice.length === 0 ;
    useEffect(()=>{
        dispatch(fetchAllProd())
    },[])
    

  const stayFixed =  () => {
    if(window.scrollY >= 170) {
      setFix(true);
    }else{
      setFix(false);
    }
  }
  window.addEventListener('scroll', stayFixed)

  const style = useRef(null);

  const handleAddClass = () => {
    style.current.classList.add('d-cols')
  }
  const handleRemoveClass = () => {
    style.current.classList.remove('d-cols')
  }
  const handlePrice = (e,data) => {
    setPrice(data)
    dispatch(filterByPrice(price))
  }

  return (
    <Container >
        <div className='row'>
            <div className='col-lg-2 d-sm-none d-none d-lg-block catlist__con'>
                <div className= "shop__cat__list">
                <Category />
                </div>
                <div className='range__con'>
                <Typography id="range-slider" gutterBottom>
                    Price: {price[0] + " - " + price[1]}
                </Typography>
                 <Slider 
                 value={price}
                 min={1}
                 max={2000}
                 step={50}
                 onChange = {handlePrice}
                 valueLabelDisplay="auto"
                 aria-labelledby="range-slider"
                 />
                </div>
            </div>
            <div className='col-lg-10 col-sm-12 col-12'>
                <div className='pt-4 pb-4'>
                    <img className='w-100' src='https://klbtheme.com/clotya/wp-content/uploads/2022/05/banner-26.jpg' />
                </div>
                <div className='row align-items-center pb-4'>
                    <div className='col-lg-6 col-sm-6 col-6 d-flex gap-3'>
                        <p className='re_arrange'>
                        <GridViewOutlinedIcon onClick={handleRemoveClass} />
                        </p>
                        <p className='re_arrange'>
                        <FormatListBulletedOutlinedIcon onClick={handleAddClass} />
                        </p>
                        <p>Showing { error ? "0" : showFiltered ? filteredByPrice.length : showCat ? catProd.length : allProds.length} of {allProds.length} results</p>
                    </div>
                    <div className='col-lg-6 col-sm-6 col-6'>
                    <div className='drop__down'>
                        <Nav className='d-flex justify-content-end'>
                            <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Sort by"
                            menuVariant="dark"
                            >
                            <NavDropdown.Item href="#action/3.1">All</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Low price</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">High price</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Popularity</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Latest</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </div>
                    </div>
                </div>
                <div className='row prod' ref={style}>
                    {error ? (
                        <div className='error__plate'>
                            <h4>The product you are looking for is not available at the moment.</h4>
                        </div>
                    ) :
                    products.map((product,index) => (
                        <div className='col-lg-3 prod__sec' key={index}>
                        <LinkContainer to={`/details/${product.id}`}>
                            <div className='prod__con'>
                            <div className='prod__img mb-3'>
                                <img src={product.thumbnail} />
                            </div>
                            <div className='prod__text'>
                                    <Star stars={product.rating} />
                                <p className='prod__name'>{product.title}</p>
                                <div className='d-flex gap-3'>
                                <del className='prod__price'>Rs.{product.price}</del>
                                <p className='prod__price'>Rs.{product.discountedPrice}</p>
                                </div>
                            </div>
                            </div>
                        </LinkContainer>
                        <div className='short__con'>
                            <ul className='short__cuts d-flex flex-column gap-2'>
                                <li className='a aa' onClick={()=>dispatch(addToheart(product))}><FavoriteBorderIcon/></li>
                                <li className='a ab' onClick={()=>dispatch(addTocart(product))}><ShoppingBagOutlinedIcon/></li>
                                <li className='a ac'><ShareOutlinedIcon /></li>
                            </ul>
                        </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Shop