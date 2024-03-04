import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllSecComponent from '../AllSections/AllSecComponent'
import ProductDetailpage from '../Allpages/ProductDetailpage'
import Cartpage from '../Allpages/Cartpage'
import Checkout from '../Allpages/Checkout'
import PrivateRoutes from './PrivateRoutes'
import Loginpage from '../Allpages/Loginpage'
export default function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<AllSecComponent />} />
      <Route path='/product_detail/:product_id' element={
        <PrivateRoutes>
          <ProductDetailpage />
        </PrivateRoutes>
      } />
      <Route path='/cart' element={
        <PrivateRoutes>
          <Cartpage />
        </PrivateRoutes>
      } />
      <Route path='/checkout' element={
        <PrivateRoutes>
          <Checkout />
        </PrivateRoutes>
      } />

<Route path='/login'  element={<Loginpage/>}/>
    </Routes>



  )
}
