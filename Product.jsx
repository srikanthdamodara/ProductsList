import React from 'react'
import {useState,useEffect} from 'react';
import ProductItem from './ProductItem';

import Spinner from './Spinner';

const url='https://fakestoreapi.com/products';


const Product = () => {
    const [productArr,setProductArr]=useState([])
    const[loading,isLoading]=useState(true);


    const fetchedData=async()=>{
        
        const data=await fetch(url); 
        const response=await data.json();
        console.log(response)
        setProductArr(response)
        isLoading(false)
    }


    useEffect(()=>{
        fetchedData()

    },[productArr])

  return (
    <div>

        {loading && <Spinner/>}
      
        <ul className='items'>
            {productArr.map((each)=>{
                return <ProductItem details={each} key={each.id}/>
            })}
        </ul>
    </div>
   
  )
}

export default Product