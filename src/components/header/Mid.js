import React, { useRef, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Container, Form, InputGroup, NavLink, Offcanvas } from 'react-bootstrap'
import { Badge } from '@mui/material';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchSearchedProd } from '../../redux/actions/prodActions';
import Category from '../../pages/home/Category';
import Menu from './Menu';
import { shopStateChanger } from '../../redux/reducers/productSlice';

function Mid() {
  const [fix, setFix] = useState();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const stayFixed =  () => {
    if(window.scrollY >= 300) {
      setFix(true);
    }else{
      setFix(false);
    }
  }
  window.addEventListener('scroll', stayFixed)
  const quantity = useSelector(state => state.root.cart.quantity);
  const qnt = useSelector(state => state.root.heart.quantity)

  const inputRef = useRef(null);
  // console.log(inputRef.current.value)

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSearchedProd(inputRef.current.value))
    navigate('/shop')
    inputRef.current.value = ""
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <Container fluid className={ `${fix ? "search__sec fixed-top" : "search__sec"}`}>
      <Container>
        <div className='row py-3'>
          <div className='col-sm-4 col-4 d-lg-none search__burger'>
            <MenuOutlinedIcon onClick={handleShow} />
            <div className='burger__menu'>
            <Offcanvas show={show} onHide={handleClose} responsive="lg">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <img className='w-100' src='https://klbtheme.com/clotya/wp-content/uploads/2022/04/logo.png' alt=''/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <div className=' main__menu mb-5'>
                <h6 className='mb-4'>Main Menu</h6>
            <ul>
              <li>
                <LinkContainer to="/">
                   <NavLink>Home</NavLink>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to="/shop">
                <NavLink onClick={()=>dispatch(shopStateChanger())}>Shop</NavLink>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to='/blog'>
                <NavLink>Blog</NavLink>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to='/about'>
                <NavLink>About</NavLink>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to='/contact'>
                <NavLink>Contact</NavLink>
                </LinkContainer>
              </li>
            </ul>
          </div>
          
                <div className='category'>
                  <h6 className='mb-4'>Category</h6>
                  <Category />
                </div>
                <div className='mt-4'>
                  <NavLink><h6>Become a Seller ?</h6></NavLink>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
            </div>
          </div>
          <div className='col-lg-2 col-sm-4 col-4 pe-5 d-flex align-items-center search__logo'>
            <LinkContainer to="/">
            <img className='w-100' src='https://klbtheme.com/clotya/wp-content/uploads/2022/04/logo.png' alt='logo' />
            </LinkContainer>
          </div>

          <div className={`${fix? 'd-none' : 'col-lg-8 d-sm-none d-none d-lg-block search__input'}`}>
            <div className='input__sec d-flex align-items-center gap-3'>
              <div className='ps-4'>
              <SearchIcon />
              </div>
              <form className='w-100 d-flex align-items-center' onSubmit={handelSubmit}>
                  <InputGroup>
                      <Form.Control
                        ref={inputRef}
                        placeholder="Search your product..."
                        aria-label="search"
                        aria-describedby="basic-addon2"

                      />
                    <InputGroup.Text id="basic-addon2">
                      <NavLink>Search</NavLink>
                    </InputGroup.Text>
                  </InputGroup>
              </form>
            </div>
          </div>
          <div className={`${fix ? 'col-lg-8 d-sm-none d-none sticky__menu d-lg-flex justify-content-center' : 'd-none'}`}>
          <div className=' py-3'>
          <ul className='d-flex h-100 justify-content-center gap-5 align-items-center'>
              <li>
                <LinkContainer to="/">
                   <NavLink>Home</NavLink>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to="/shop">
                <NavLink>Shop</NavLink>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to="/blog">
                  <NavLink>Blog</NavLink>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to="/about">
                <NavLink>About</NavLink>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to={"/contact"}>
                <NavLink>Contact</NavLink>
                </LinkContainer>
              </li>
            </ul>
          </div>
        </div>

          <div className='col-lg-2 col-sm-4 col-4 search__icons'>
            <ul className='d-flex h-100 justify-content-end gap-3 align-items-center'>
              <li>
                <LinkContainer to='/login'>
                <NavLink>
                  <PersonOutlineOutlinedIcon />
                </NavLink>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to="/heart">
                <Badge className='mid__count' badgeContent={qnt} color="primary">
                  <FavoriteBorderIcon color="action" />
                </Badge>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to="/cart">
                <Badge badgeContent={quantity} color="primary">
                  <LocalMallIcon color="action" />
                </Badge>
                </LinkContainer>
              </li>
            </ul>
          </div>

        </div>
        {/* <div className={`${fix ? 'row sticky__menu d-flex' : 'd-none'}`}>
          <div className='col-lg-12  py-3'>
          <ul className='d-flex h-100 justify-content-center gap-5 align-items-center'>
              <li>
                <LinkContainer to="/">
                   <NavLink>Home</NavLink>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to="/shop">
                <NavLink>Shop</NavLink>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to="/blog">
                  <NavLink>Blog</NavLink>
                </LinkContainer>
              </li>
              <li><NavLink>About</NavLink></li>
              <li><NavLink>Contact</NavLink></li>
            </ul>
          </div>
        </div> */}
      </Container>
    </Container>
  )
}

export default Mid