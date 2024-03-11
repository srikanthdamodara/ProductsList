import React, { Component } from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import "./App.css"

import Product from './Product'
import ProductItemDetails from './ProductItemDetails'
import Header from './Header'




class App extends Component {

  
  render() {
    return (
      <BrowserRouter >
     <div className='container'>
     <Header/>
     <Routes>
      <Route exact path="/" element={<Product/>}/>
      
     <Route path="/products/:id" element={<ProductItemDetails/>}/>
      </Routes>

     </div>
     </BrowserRouter>
    )  }
}

export default App
