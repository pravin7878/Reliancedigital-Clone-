import { useAuth0 } from '@auth0/auth0-react'
import { Button, Center, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import Nevbar from '../Component/Nevbar/Nevbar'
import Footer from '../Component/Footer/Footer'

export default function Loginpage() {
 const {isAuthenticated,loginWithRedirect}  =  useAuth0()

  return (<>
 
   <Center pt={'150px'}>
    <Flex flexDirection={'column'} mt={10}>
    <Heading>Please Login Now </Heading>
    <Button onClick={loginWithRedirect} color={'white'} bg={'red'}p={5} m={5} _hover={{bg:'black'}}>Login Now</Button>
    </Flex>
   </Center>
   <Footer/>
   </>)
}
