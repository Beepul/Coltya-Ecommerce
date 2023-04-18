import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

function Star({stars}) {
    const ratingStar = Array.from({length:5},(el,index)=>{
        let number = index + 0.5;
        return <span key={index}>
            {
                stars >= index + 1 
                ? <StarIcon /> 
                : stars >= number 
                ? <StarHalfIcon /> 
                : <StarBorderIcon />
            }
        </span>

    })
  return (
    <section>
        <div className='rating__star'>{ratingStar}</div>
    </section>
  )
}

export default Star