
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./App.css"

const ProductItemDetails = () => {
    const{id}=useParams() 

    const url=`https://fakestoreapi.com/products/${id}`

    const[currentItem,setCurrentItem]=useState([])
    


    const getCurrentItem=async()=>{
        const data=await fetch(url); 
        const response=await data.json()
        setCurrentItem(response)
        

    }

    

    useEffect(()=>{
        getCurrentItem()

    },[currentItem])



    

    
    

  return (

       
      <div className='current'>
       
                <h1>{currentItem.category}</h1>
                <img src={currentItem.image} alt={currentItem.id} />

                <h4>{currentItem.title}</h4>
                <p style={{letterSpacing:'2px'}}>{currentItem.description}</p>
                <p style={{color:'#777B75'}}>Price: {Math.round(currentItem.price*80)} Rs</p>
                

         
       

    </div>
  )
}

export default ProductItemDetails