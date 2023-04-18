import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../redux/reducers/cartSlice';
import { useNavigate } from 'react-router-dom';



function Cartlist() {
    const cartItems = useSelector(state => state.root.cart.cart)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const removeItem = (item) => {
        dispatch(removeFromCart(item))
    }
    const increaseItem = (item) => {
        dispatch(increaseQuantity(item))
    }
    const decreaseItem = (item) => {
        dispatch(decreaseQuantity(item))
    }
    const nav = () => {
        return navigate('/shop')
    }
    if(cartItems.length === 0){
        return (
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

            
        )
    }else{
        return (
            <tbody>
                        {cartItems && cartItems.map((item,index)=>(
                        <tr key={index}>
                            <td className='d-flex gap-3'>
                                <div className='cart__img'>
                                    <img className='w-100' src={item.thumbnail} alt=""/>
                                </div>
                                <p>{item.title}</p>
                            </td>
                            <td className='quantity__sec'>
                                <div>                            
                                    <ButtonGroup className='d-flex align-items-center'>
                                <Button className='plus__btn' onClick={()=>increaseItem(item)}><AddIcon /></Button>
                                <p>{item.quantity}</p>
                                <Button className='minus__btn' onClick={()=> decreaseItem(item)}><RemoveIcon /></Button>
                            </ButtonGroup>
                            </div>

                            </td>
                            <td className='price__sec'>{item.finalAmount}</td>
                            <td className='action__sec '>
                                <div className='d-flex justify-content-center'>
                                <Button onClick={()=>removeItem(item)}>Remove</Button>
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
  )
}
}

export default Cartlist