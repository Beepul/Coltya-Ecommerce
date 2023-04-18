import React from 'react'
import { Button, Form } from 'react-bootstrap'

function Contact() {
  return (
    <div>
      <p className='mb-3'>Contact with us</p>
      <h4 className='mb-3'>Get In Touch</h4>
      <p className='mb-3'>In hac habitasse platea dictumst. Pellentesque viverra sem nec orci lacinia, in bibendum urna mollis. Quisque nunc lacus, varius vel leo a, pretium lobortis metus. Vivamus consectetur consequat justo.</p>
      <div>
        <form>
        <Form>
          <div className='d-flex flex-column flex-lg-row flex-sm-column gap-lg-4'>
      <Form.Group className="mb-3 w-lg-50 w-100" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3 w-lg-50 w-100" controlId="formBasicPassword">
        <Form.Label>Full name</Form.Label>
        <Form.Control type="text" placeholder="Fullname" />
      </Form.Group>
      </div>
      <Form.Group className="mb-3" >
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="Subject" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </form>
      </div>
    </div>
  )
}

export default Contact