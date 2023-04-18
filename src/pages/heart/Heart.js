import React from 'react'
import { Button, ButtonGroup, Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { addTocart } from '../../redux/reducers/cartSlice';
import { removeFromHeart } from '../../redux/reducers/heartSlice';

function Heart() {
    const {favList} = useSelector(state => state.root.heart)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const nav = () => {
        return navigate('/shop')
    }
  return (
    <Container className='heart__sec py-5'>
        <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Products</th>
                            <th className='d-sm-none d-lg-block d-none'>Quantity</th>
                            <th>Price</th>
                            <th>Remove</th>
                            <th>Add to cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {!favList ? 
                            <tbody>  
                            <tr>
                                <td colSpan={4}>
                                <div className='cart_message'>
                                <h6>No products added till now.</h6>
                                <p className='p_tag' onClick={nav}>Click me to Continue Shoping?</p>
                                </div>
                                </td>    
                            </tr>          
                        </tbody>    
                    : */}
                        {favList.length > 0 ? favList.map((item,index)=> (
                        <tr key={index}>
                            <td>
                                <div className='prod__con d-flex flex-sm-column flex-column flex-lg-row gap-3'>
                                <div className='img__con'>
                                    <img className='w-100' src={item.thumbnail} alt="" />
                                </div>
                                <div>
                                    <h6>
                                        {item.title}
                                    </h6>
                                <p className='d-lg-block d-sm-none d-none'>
                                {item.description}
                                </p>
                                </div>
                                </div>
                            </td>
                            <td className='quantity__sec d-sm-none d-lg-block d-none'>
                                <div>                            
                                <p>{item.quantity}</p>
                            </div>

                            </td>
                            <td className='price'>{item.finalAmount}</td>
                            <td className='btn__con'>
                                <div className='d-flex justify-content-center' >
                                <Button className='danger' onClick={()=> dispatch(removeFromHeart(item))}>Remove</Button>
                                </div>
                            </td>
                            <td className='btn__con'>
                                <div className='d-flex justify-content-center'>
                                <Button className='sucess' onClick={()=> dispatch(addTocart(item))}>Move to cart</Button>
                                </div>
                            </td>
                        </tr>
                        )) : 
                        <tr>
                                <td colSpan={5}>
                                <div className='cart_message'>
                                <h6>No products added till now.</h6>
                                <p className='p_tag' onClick={nav}>Click me to Continue Shoping?</p>
                                </div>
                                </td>    
                            </tr>     
                        }
                        
                        {/* <tr>
                            <td colSpan={5}>
                                <div className='all__btn'>
                                    <Button onClick={()=>dispatch(addTocart(favList))}>Add All To Cart</Button>
                                </div>
                            </td>
                        </tr> */}
                    </tbody>
                </Table>
    </Container>
  )
}

export default Heart