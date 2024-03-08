import React, { createContext, useEffect, useReducer, useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { useAuth0 } from '@auth0/auth0-react'

export const Allcontext = createContext()


export default function ContextProvider({ children }) {
  const {isAuthenticated}  =  useAuth0()
  const [Authstate, setAuthstate] = useState(isAuthenticated)

  const [cartItems, setcartItems] = useState([])
  const [cartitemID, setcartitemID] = useState(0)
const [quantity,setquantity] = useState(1)
  const [quary, setquary] = useState('')

  const toast = useToast()

 const initialstate = {
  cartItems : [],
  total_item:'',
  totel_amount:'',
  shippinfee:100

 }

const reduser = (state,action)=>{
if(action.type=='ADD_TO_CART'){
  let {quantity,productdetail} = action.payload
  // console.log(action.payload);
  
  let cartProduct = {
    name:productdetail.name,
    image:productdetail.img,
    price:productdetail.price,
    mrp:productdetail.mrp,
    id:productdetail.id,
    quantity,
    setquantity,
  }
  toast({
    title: 'Item is Success Fully Added To Cart',
    position: 'top',
    isClosable: true,
    status: 'success'
  })

return {
  ...state,
  cartItems : [...state.cartItems,cartProduct]
}

  return state;
     
}
}




 const [state,dispatch] = useReducer(reduser,initialstate)

console.log(state);

const addTocart = (productdetail)=>{
  console.log(quantity);
  dispatch({
    type: 'ADD_TO_CART',
    payload: {quantity:1,productdetail},
  })
}
 

  return (
    <Allcontext.Provider value={{ quantity, addTocart,state,Authstate}}>
      {children}
    </Allcontext.Provider>
  )
}
