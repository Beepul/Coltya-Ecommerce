import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCatProd } from '../../redux/actions/prodActions';

function Category() {
    const [cats,setCat] = useState([]);

    const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchCat = async () => {
      const cats = await axios.get("https://dummyjson.com/products/categories");  
      setCat(['all',...cats.data])
    }
  
  useEffect(()=>{
        fetchCat()
      },[])


      const handleClick = (e) => {
        const catText = e.target.innerText;
        dispatch(fetchCatProd(catText))
        navigate('/shop')
       }
  return (
            <ul >
              {cats && cats.map((item,index)=> (
                <li key={index} onClick={handleClick}><NavLink >{item}</NavLink></li>
              ))}
            </ul>
  )
}

export default Category