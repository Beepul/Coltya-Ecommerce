import React from 'react'
import { Container } from 'react-bootstrap'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { blogs, popularBlogs,blogCat, tags } from '../../data/blogs'

function Blog() {
  return (
    <Container className='blog py-5'>
      <div className='row '>
        <div className='col-lg-9'>
          {blogs.map((item)=>(
          <div className='blog__con py-4'>
          <div className='img__con'>
            <img className='w-100' src={item.image} alt=" " />
          </div>
          <div className='blog__tags d-flex align-items-center gap-3 py-3'>
            <h6 className='cat'>{item.category}</h6>
            <p className='date'>{item.date}</p>
            {item.tags.map((tag)=>(
              <p className='tags'>{tag}</p>
            ))}
          </div>
          <div className='blog__bio'>
            <h2 className='pb-3 title'>{item.title}</h2>
            <p>{item.description}</p>
          </div>
          </div>
          ))}
        </div>
        <div className='col-lg-3 py-4'>
          <div className='pop__con'>
            <div className='heading pb-2 mb-5'>
              <h6>Popular Posts</h6>
            </div>
              {popularBlogs.map((item)=>(
                <div className='d-flex gap-4 mb-5'>
                  <div className='img__con'>
                    <img  src={item.image} alt="" />
                  </div>
                  <div className='text__con'>
                    <p>{item.date}</p>
                    <h5>{item.title}</h5>
                  </div>
                </div>
              ))}
            

          </div>
          <div className='cat__con mb-5'>
          <div className='heading pb-2 mb-3'>
              <h6>Category</h6>
            </div>
            <ul>
              {blogCat.map((item)=>(
                <li><KeyboardArrowRightIcon />{item.name}</li>
              ))}
            </ul>
          </div>
          <div className='cat__con'>
          <div className='heading pb-2 mb-3'>
              <h6>Tags</h6>
            </div>
            <div className='d-flex gap-3 flex-wrap'>
              {tags.map((item)=>(
                <p className='tag__list'>{item.name}</p>
              ))}
              </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Blog