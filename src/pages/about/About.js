import React from 'react'
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import { Container } from 'react-bootstrap'

function About({container}) {
  return (
    <Container fluid className='about__sec'>
        <div className="about__con">
            <div className='about__top'>
                <img className='w-100 h-100' src='https://klbtheme.com/clotya/wp-content/uploads/elementor/thumbs/image-12-pqcdr0trhby690gmrz72wblumi211dbr877q69xszc.jpg' alt=''/>
            </div>
            <div className='about__left'>
                {container}
            </div>
            <Container className='about__down'>
            <div className='about__store d-flex justify-content-lg-end justify-content-sm-center justify-content-center py-5'>
                <div className='store__con d-flex gap-4 p-4'>
                    <div className='icon'><StoreOutlinedIcon /></div>
                    <div>
                        <h6 className='mb-4'>Clotya Store</h6>
                        <div className='mb-4'>
                            <p>Nepal — Dhilikhel,Kavre</p>
                            <p>Green Mall Berlin, De 81566</p>
                        </div>
                        <div>
                            <p>Phone: <span>+1 1234 567 88</span></p>
                            <p>Email: <span>contact@example.com</span> </p>
                        </div>
                    </div>
                </div>

            </div>
            </Container>
        </div>
    </Container>
  )
}

export default About