import React, { createContext, useEffect, useReducer, useState } from 'react'
import { useToast } from '@chakra-ui/react'

export const Allcontext = createContext()


export default function ContextProvider({ children }) {
  // const [Authstate, setAuthstate] = useState({ isAuth: false, token: null })
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
 
// function  addquantity (ind,value){
//   cartitem[ind].quantity+1
  
// }

  // const quantityIncrease = (id) => {
  //   state.cartItems.filter((ele,ind)=>{
  //     if(id===ind){
  //       console.log(ele.quantity);  
  //       return ele.setquantity(quantity+1)
  //     }
  //   })
//      if()
// setquantity((q)=>q+1)
// console.log(cartitem[index].quantity+1);
        // console.log(cartitem[index].price * 2);
        // return quantity < 5 ? setquantity(quantity + 1) : null
    // }
//     const quantityDecrease = (index,e) => {
//       e.preventDefault()
//         // return quantity > 1 ? setquantity(quantity - 1) : null
// console.log(cartitem[index]);

    // }




  // const addTocart = (item) => {
  //   // const { data, quantity } = item
  //   // const { data} = item
  //   let stordProductID  = cartItems.find((cartItem) => cartItem.id === item.id);
  //   console.log(stordProductID);
  //   if (!stordProductID) {
  //     // setcartitemID(data.id)
  //     const newArray = [...cartItems, item];
  //     setcartItems(newArray);
  //     localStorage.setItem('cartdata', JSON.stringify(newArray));
  //     toast({
  //       title: 'Item is Success Fully Added To Cart',
  //       position: 'top',
  //       isClosable: true,
  //       status: 'success'
  //     })
  //   }

    // else {
    //   toast({
    //     title: 'Item is alredy Added To Cart',
    //     position: 'top',
    //     isClosable: true,
    //     status: 'warning'
    //   })
    // }
  // };

  // useEffect(() => {
  //   const storedArray = JSON.parse(localStorage.getItem('cartdata'));
  //   if (storedArray) {
  //     setcartItems(...state.cart, storedArray);
  //   }
  // }, []);

  return (
    <Allcontext.Provider value={{ quantity, addTocart,state,}}>
      {children}
    </Allcontext.Provider>
  )
}
