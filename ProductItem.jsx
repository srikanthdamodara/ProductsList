import React from 'react'
import { Link } from 'react-router-dom';

import "./App.css"

const ProductItem = (props) => {
    const{details}=props;
    const{id,title,image,price}=details;
    
    
  return (
  <Link to={`/products/${id}`} style={{textDecoration:'none'}}><div className='product-item'> 
        <img src={image} alt={id}/>
        <h4 style={{textDecoration:'none'}}>{title.length>=20?title.slice(0,20):title}</h4>
        <p style={{color:'#777B75'}}>Price: {Math.round(price*82)} Rs</p>

    </div>
    </Link> 
  )
}

export default ProductItem