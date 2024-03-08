import { useAuth0 } from '@auth0/auth0-react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Allcontext } from '../ContextAPI/ContextProvider'
import { useToast } from '@chakra-ui/react'

export default function PrivateRoutes({children}) {
  const {Authstate} = useContext(Allcontext)
  const nevigate = useNavigate()
 const {isAuthenticated}  =  useAuth0()
let toast = useToast()
 
  // let setTime = setTimeout(()=>{
  //   return nevigate('/login')
  //  },2000)
  
  const chackstate  = ()=>{
    toast({
      title:'Please Login Now',
      status:'warning',
      isClosable:true,
      position:'top'
    })
    return(
      nevigate('/')
     
    )
    
  }
 

  return isAuthenticated ? children : {chackstate}
}
