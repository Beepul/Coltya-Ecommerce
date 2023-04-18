import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Container, NavLink } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch } from 'react-redux';
import { shopStateChanger } from '../../redux/reducers/productSlice';
import { useNavigate } from 'react-router-dom';

function Menu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
     <Container fluid className='menu__sec d-lg-block d-sm-none d-none'>
      <Container>
        <div className='row align-items-center py-3'>
          <div className='col-lg-2 d-flex justify-content-between'>
              <LinkContainer to='/shop'>
            <h5 onClick={()=>dispatch(shopStateChanger())}>
              All Category
            </h5>
              </LinkContainer>
            {/* <KeyboardArrowDownIcon /> */}
          </div>
          <div className='col-lg-8 main__menu'>
            <ul className='d-flex h-100 justify-content-center gap-5 align-items-center'>
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
          <div className='col-lg-2 text-end'>
            <NavLink>Become a Seller ?</NavLink>
          </div>
        </div>
      </Container>
     </Container>
  )
}

export default Menu