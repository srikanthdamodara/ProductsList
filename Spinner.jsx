import React from 'react'
import SpinnerImage from './Spinner.gif'
import "./App.css"


const Spinner= () => {

  return (
    <div>
     <img  style={{height:'60px',width:'100px'}} src={SpinnerImage} alt='loading'/>
    </div>
  )
}

export default Spinner;
