import { useAuth0 } from '@auth0/auth0-react'
import { Button, Center } from '@chakra-ui/react'
import React from 'react'

export default function Loginpage() {
 const {isAuthenticated,loginWithRedirect}  =  useAuth0()

  return (
   <Center>
    <Button onClick={loginWithRedirect}>Login Now</Button>
   </Center>
  )
}
