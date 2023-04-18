import React from 'react'
import { Container, InputGroup,Form } from 'react-bootstrap'

function Emailform() {
  return (
    <Container fluid className='home__sec'>
        <Container>
            <div className='home__form py-5 d-flex flex-sm-column flex-column flex-lg-row'>
                <div className='form__left'>
                    <h2>Get our emails for info on <br/> new items, sales and more.</h2>
                    <p>We'll email you a voucher worth Rs.10 off your first order over Rs.50.</p>
                    <InputGroup className="my-3">
                        <Form.Control
                        placeholder="Enter your email"
                        aria-label="email"
                        aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">Subscribe</InputGroup.Text>
                    </InputGroup>
                    <p className='tag'>By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.</p>
                </div>
                <div className='form__right'>
                    <h2>Need help?</h2>
                    <h2>(+977) 9860 5678 90</h2>
                    <p>We are available 8:00am – 7:00pm</p>
                    <div>
                        <img className='pe-4' src='https://klbtheme.com/clotya/wp-content/uploads/2022/04/app-store.png' />
                        <img src='https://klbtheme.com/clotya/wp-content/uploads/2022/04/google-play.png' />
                    </div>
                    <p className='tag'><span>Shopping App:</span> Try our View in Your Room feature, manage registries and save payment info.</p>
                </div>
            </div>
        </Container>
    </Container>
  )
}

export default Emailform