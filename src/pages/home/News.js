import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { popularBlogs } from '../../data/blogs'

function News() {
    const navigate = useNavigate();
  return (
    <Container className='news'>
        <div className='news__heading text-center py-5'>
            <h4>Our Latest News</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra vel facilisis.</p>
        </div>
        <div className='row mb-5'>
            {popularBlogs.map((item,index)=>(
            <div className='col-lg-4' key={index} onClick={()=>navigate("/blog")}>
                <div className='news__img'>
                    <img className='w-100' src={item.image} />
                </div>
                <div className='news__text py-4'>
                    <h6>{item.category} -- {item.date}</h6>
                    <h4>{item.title}</h4>
                    <p>Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros</p>
                </div>
            </div>
            ))}
        </div>
    </Container>
  )
}

export default News