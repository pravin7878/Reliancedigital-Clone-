import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllSecComponent from '../AllSections/AllSecComponent'
import ProductDetailpage from '../Allpages/ProductDetailpage'
import Cartpage from '../Allpages/Cartpage'
import Checkout from '../Allpages/Checkout'
export default function AllRoutes() {
  return (
   <Routes>
<Route path='/' element={<AllSecComponent/>}/>
<Route path='/product_detail/:product_id' element={<ProductDetailpage/>}/>
<Route path='/cart' element={<Cartpage/>}/>
<Route path='/checkout' element={<Checkout/>}/>
   </Routes>


   
  )
}
