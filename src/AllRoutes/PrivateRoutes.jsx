import { useAuth0 } from '@auth0/auth0-react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Allcontext } from '../ContextAPI/ContextProvider'
import { useToast } from '@chakra-ui/react'

export default function PrivateRoutes({children}) {
  const {Authstate} = useContext(Allcontext)
  const nevigate = useNavigate()
 const {isAuthenticated}  =  useAuth0()
 

  return isAuthenticated ? children : children
}
