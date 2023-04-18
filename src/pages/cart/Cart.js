import React from 'react'
import { Container, Table } from 'react-bootstrap'
import Cartbill from './Cartbill';
import Cartlist from './Cartlist';

function Cart() {
    
  return (
    <Container className='cart__sec py-5'>
        <div className='row'>
            <div className='col-lg-9 col-12'>
                <Table striped bordered hove responsive>
                    <thead>
                        <tr>
                            <th>Products</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <Cartlist />
                </Table>
            </div>
            <div className='col-lg-3 col-12 total__sec'>
                <Cartbill />
            </div>
        </div>
    </Container>
  )
}

export default Cart