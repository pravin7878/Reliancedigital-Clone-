import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PrivateRoutes({children}) {
  const nevigate = useNavigate()
 const {isAuthenticated}  =  useAuth0()
  return isAuthenticated ? children : nevigate('/login')
}
