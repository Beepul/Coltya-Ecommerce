import React from 'react'
import { Container } from 'react-bootstrap'

function Addbanner() {
  return (
    <Container className='ads__ban'>
        <div className='row '>
            <div className='col-lg-6 pe-3'>
                <img className='w-100' src='https://klbtheme.com/clotya/wp-content/uploads/2022/04/banner-01.jpg' alt='' />
            </div>
            <div className='col-lg-6 ban__right d-flex flex-column justify-content-between'>
                <div className=' '>
                    <img className='w-100' src='https://klbtheme.com/clotya/wp-content/uploads/2022/04/banner-02.jpg' alt=' ' />
                </div>
                <div className=''>
                    <img className='w-100' src='https://klbtheme.com/clotya/wp-content/uploads/2022/04/banner-03.jpg' alt=' ' />
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Addbanner