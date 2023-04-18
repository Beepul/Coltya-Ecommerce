import React from 'react'
import { Container } from 'react-bootstrap'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';

function Cuscare() {
  return (
    <Container className='cus__care'>
        <div className='row py-5 gap-lg-0 gap-sm-5 gap-5'>
            <div className='col-lg-3 d-flex gap-4 align-items-center'>
                <div className='shipping__icon'>
                    <LocalShippingOutlinedIcon />
                </div>
                <div>
                    <h6>Free Shipping</h6>
                    <p>Free Shipping for orders over £130.</p>
                </div>
            </div>
            <div className='col-lg-3 d-flex gap-4 align-items-center'>
                <div className='shipping__icon'>
                    <CurrencyExchangeOutlinedIcon />
                </div>
                <div>
                    <h6>Money Guarantee</h6>
                    <p>Within 30 days for an exchange.</p>
                </div>
            </div>
            <div className='col-lg-3 d-flex gap-4 align-items-center'>
                <div className='shipping__icon'>
                    <PhoneInTalkOutlinedIcon />
                </div>
                <div>
                    <h6>Online Support</h6>
                    <p>24/7 Available for our customers.</p>
                </div>
            </div>
            <div className='col-lg-3 d-flex gap-4 align-items-center'>
                <div className='shipping__icon'>
                    <AddCardOutlinedIcon />
                </div>
                <div>
                    <h6>Flexible Payment</h6>
                    <p>Pay with Multiple Credit Cards.</p>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Cuscare