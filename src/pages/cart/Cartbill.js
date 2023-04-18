import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Cartbill() {
    const {cart,totalAmount,deliveryCharge} = useSelector(state => state.root.cart);
   
  return (
    <div className='bill__con p-3'>
        <div className='bill__heading mb-3'>
            <p className='py-2'>Cart Totals</p> 
        </div>
            <div className='mb-3'>
                {cart && cart.map((item,index) => (
                <div className='bill__products d-flex justify-content-between' key={index}>
                    <div>{item.title}</div>
                    <div>Rs.{item.finalAmount}</div>
                </div>
                ))}
            </div>
            <div className='d-flex justify-content-between mb-3'>
            <p>Delivery Charge:</p>
            <p>Rs.100</p>
            </div>
                <div className='d-flex justify-content-between mb-3'>
                    <p>Shipping to:</p>
                    <div>
                        <p>Dhulikhel,Kavre</p>
                        <p>Change address</p>
                    </div>
                </div>
                <div className='d-flex justify-content-between mb-3'>
                    <p>Total</p>
                    <p>Rs.{totalAmount + deliveryCharge}</p>
                </div>
                <div className='checkout__btn mb-3 d-flex justify-content-center align-items-center'>
                    <Button>Proceed to checkout</Button>
                </div>
    </div>
  )
}

export default Cartbill