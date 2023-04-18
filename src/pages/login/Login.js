import React, { useRef } from 'react'
import { Container, Form,Button } from 'react-bootstrap'

function Login() {
    const formTwo = useRef(null);
    const formOne = useRef(null);

    const showLogin = () => {
        formOne.current.classList.remove('hide')
        formOne.current.classList.add('show');
        formTwo.current.classList.remove('show');
    }
    const showRegister = () => {
        formOne.current.classList.add('hide')
        formTwo.current.classList.add('show')
    }

  return (
    <Container className='login__sec d-flex justify-content-center align-items-center py-5'>
        <div className='form__con p-5'>
            <div className='d-flex gap-3 justify-content-center align-items-center mb-5'>
                <h5 onClick={showLogin}>Login</h5>
                <div>|</div>
                <h5 onClick={showRegister}>Register</h5>
            </div>
            <div className='form '>
            <div className='form__one  login' ref={formOne}>
                <form>
                <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
                </form>
            </div>
            <div className='form__two  register' ref={formTwo}>
                <form>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter fullname" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
                </form>
            </div>
            </div>
        </div>
    </Container>
  )
}

export default Login