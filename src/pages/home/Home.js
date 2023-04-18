import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Addbanner from './Addbanner'
import Banner from './Banner'
import Bestseller from './Bestseller'
import Cuscare from './Cuscare'
import News from './News'
import Offer from './Offer'
import Partner from './Partner'
import Review from './Review'

import { fetchBest, fetchfeaturedProd, fetchNewProd } from '../../redux/actions/prodActions'
import Footer from '../../components/footer/Footer'



function Home() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMins, setTimerMins] = useState();
  const [timerSec, setTimerSec] = useState();


  const limitToten = useSelector((state)=> state.root.product.limitToten)
  const feturedProds = useSelector((state) => state.root.product.feturedProds)
  const newProd = useSelector(state => state.root.product.newProd)
  
  const dispatch = useDispatch();
  
  let interval;

  const startTimer = () => {
    const futureDate = new Date('April 1,2024').getTime();

    interval = setInterval(()=> {
      const currentDate = new Date().getTime();

      const distance = futureDate - currentDate;

      // distance / day in number ( Hours * min * sec * milisec )
      const days = Math.floor(distance / ( 24 * 60 * 60 * 1000));
      // dividing one day with one hour
      const hours = Math.floor(distance % ( 24 * 60 * 60 * 1000) / ( 60 * 60 * 1000));
      // dividing hour with 60 min
      const min = Math.floor(distance % (  60 * 60 * 1000) / ( 60 * 1000));
      const sec = Math.floor(distance % (  60 * 1000) /  1000);

      if(distance < 0 ){
        // stop the timer
        clearInterval(interval.current);
      }else{
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMins(min);
        setTimerSec(sec);
      }
    })
  }
  
  useEffect(()=> {
    dispatch(fetchNewProd())
    dispatch(fetchBest())
    dispatch(fetchfeaturedProd())
    startTimer()
  },[])
  return (
    <>
      <Banner />
      <Cuscare />
      {/* <Addbanner /> */}
      <Bestseller products={newProd}  title="New Arivals"/>
      <Bestseller products={limitToten} title="Best Seller's Products"/>
      <Offer timerDays={timerDays} timerHours={timerHours} timerMins={timerMins} timerSec={ timerSec} />
      <Bestseller products={feturedProds} title="Featured Products" />
      <Container>
        <div className='d-flex gap-5 py-5 flex-sm-column flex-column flex-lg-row'>
          <div>
            <img className='w-100' src='https://klbtheme.com/clotya/wp-content/uploads/2022/04/banner-05.jpg' alt='' />
          </div>
          <div>
            <img className='w-100' src='https://klbtheme.com/clotya/wp-content/uploads/2022/04/banner-06.jpg' alt='' />
          </div>
        </div>
      </Container>
      <Review />
      <Partner />
      <News />
    </>
  )
}

export default Home