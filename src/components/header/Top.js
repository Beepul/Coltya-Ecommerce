import React from 'react'
import { Container, Nav, NavDropdown, NavLink } from 'react-bootstrap'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { LinkContainer } from 'react-router-bootstrap';

function Top() {
  return (
    <div className='top'>
        <Container fluid className='top__a' >
            <p>SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL DELIVERY - OFF 50%! <span>SHOP NOW</span></p>
        </Container>
        <Container fluid className='top__b d-lg-block d-sm-none d-none'>
            <Container>
                <div className='row py-1'>
                    <div className='col-lg-2 d-flex align-items-center'>
                        <ul className='d-flex gap-3 w-100'>
                            <li><NavLink href='https://www.facebook.com'><FacebookOutlinedIcon/></NavLink></li>
                            <li><NavLink href='https://www.instagram.com'><InstagramIcon/></NavLink></li>
                            <li><NavLink href='https://twitter.com/?lang=en'><TwitterIcon/></NavLink></li>
                            <li><NavLink href='https://www.youtube.com'><YouTubeIcon/></NavLink></li>
                        </ul>
                    </div>
                    <div className='col-lg-7 d-flex align-items-center'>
                        <p className='title d-flex gap-2'>Free Shipping World wide for all orders over Rs.9999. 
                            <span>
                                <LinkContainer to="/shop">
                                    <NavLink>
                                Click and Shop Now.
                                </NavLink>
                                </LinkContainer>
                            </span>
                        </p>
                    </div>
                    <div className='col-lg-3 d-flex justify-content-end right'>
                        <div className='d-flex align-items-center me-3'>
                            <NavLink>Order Tracking</NavLink>
                        </div>
                        <div className='drop__down'>
                        <Nav>
                            <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="English"
                            menuVariant="dark"
                            >
                            <NavDropdown.Item href="#action/3.1">Nepali</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Korean</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Indian</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </div>
                        <div className='drop__down'>
                        <Nav>
                            <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="NPR"
                            menuVariant="dark"
                            >
                            <NavDropdown.Item href="#action/3.1">INR</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">INR</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">INR</NavDropdown.Item>
                            
                            </NavDropdown>
                        </Nav>
                        </div>
                    </div>
                </div>
            </Container>
        </Container>
        
    </div>
  )
}

export default Top