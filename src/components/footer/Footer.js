import React from 'react'
import { Container } from 'react-bootstrap'
import Emailform from './Emailform'

function Footer() {
  return (
    <>
    <Emailform />
    <Container fluid className='footer '>
        <Container className='footer__top py-5'>
            <div className='row'>
                <div className='col-lg-4 col-sm-12 col-12 mb-sm-5 mb-5 mb-lg-0'>
                    <div className='footer__logo'>
                        <img className='w-100' src='https://klbtheme.com/clotya/wp-content/uploads/2022/04/logo.png' />
                    </div>
                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis in termapol.</p>
                    <p className='contact'>(+977) 9860 5678 90 – info@example.com</p>
                </div>
                <div className='col-lg-2 col-sm-6 col-6 pb-sm-5 pb-5 pb-lg-0 footer__links'>
                    <h6>Information</h6>
                    <ul>
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                        <li>Returns Policy</li>
                        <li>Shipping Policy</li>
                        <li>Dropshipping</li>
                    </ul>
                </div>
                <div className='col-lg-2 col-sm-6 col-6 footer__links'>
                    <h6>Information</h6>
                    <ul>
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                        <li>Returns Policy</li>
                        <li>Shipping Policy</li>
                        <li>Dropshipping</li>
                    </ul>
                </div>
                <div className='col-lg-2 col-sm-6 col-6 footer__links'>
                    <h6>Information</h6>
                    <ul>
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                        <li>Returns Policy</li>
                        <li>Shipping Policy</li>
                        <li>Dropshipping</li>
                    </ul>
                </div>
                <div className='col-lg-2 col-sm-6 col-6 footer__links'>
                    <h6>Information</h6>
                    <ul>
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                        <li>Returns Policy</li>
                        <li>Shipping Policy</li>
                        <li>Dropshipping</li>
                    </ul>
                </div>
            </div>
        </Container>
        <Container className='footer__down py-3'>
            <div className='row align-items-center'>
                <div className='col-lg-5 col-sm-12 col-12 d-lg-block d-sm-flex d-flex justify-content-center'>
                    <p>Copyright 2023 © Clotya WordPress Theme. All right reserved. Powered by KLBTheme.</p>
                </div>
                <div className='col-lg-3 col-sm-12 col-12'>
                    <img className='w-100' src='https://klbtheme.com/clotya/wp-content/uploads/2022/06/cards.png' />
                </div>
                <div className='col-lg-4 col-sm-12 col-12 d-flex justify-content-lg-end justify-content-sm-center justify-content-center gap-4'>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                    <p>Returns Policy</p>
                </div>
            </div>
        </Container>
    </Container>
    </>
  )
}

export default Footer