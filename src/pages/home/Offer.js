import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDiscountedProd } from '../../redux/actions/prodActions';
import Star from '../../components/Star';


function Offer({timerDays, timerHours, timerMins, timerSec}) {
    const offerProd = useSelector(state=> state.root.product.discountProd)
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchDiscountedProd())
    },[])
  return (
    <Container className='offer__sec'>
        <div className='row pt-5'>
            <div className='col-lg-5'>
                <h2>Don't Miss The Last Deals</h2>
            </div>
            <div className='col-lg-7'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas</p>
            </div>
        </div>
        <div className='d-flex flex-lg-row flex-sm-column flex-column justify-content-between gap-5 py-5'>
            {offerProd.map((item,index)=>(

            <div className='offer__con p-4 d-flex flex-lg-row flex-sm-column flex-column gap-4' key={index}>
                <div className='offer__img'>
                    <img className='w-100 h-100' src={item.thumbnail} alt='' />
                </div>
                <div className='offer__text'>
                    <div className='offer__title'>
                        <h6>{item.title}</h6>
                        <h4>Rs.{item.price} – <span>Rs.{item.discountedPrice}</span></h4>
                    </div>
                    <div className='my-2 rating'>
                        <Star stars={item.rating} />
                    </div>
                    <div className='my-3'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div>
                        <h5>Offer end in:</h5>
                        <div className="timer__container d-flex gap-2 align-items-center ">
                            <div className="timer__days">
                                <p>{timerDays}</p>
                            </div>
                                <p>:</p>
                            <div className="timer__hours">
                                <p>{timerHours}</p>
                            </div>
                            <p>:</p>
                            <div className="timer__min">
                                <p>{timerMins}</p>
                            </div>
                            <p>:</p>
                            <div className="timer__sec">
                                <p>{timerSec}</p>
                            </div>
                        </div>
                        <p>Available: 11 - sold:<span>47</span></p>
                    </div>
                </div>
            </div>
            ))} 
        </div>
    </Container>
  )
}

// Offer.defaultProps = {
//     timerDays: 10,
//     timerHours: 10,
//     timerMins: 10,
//     timerSec: 10,
// }

export default Offer