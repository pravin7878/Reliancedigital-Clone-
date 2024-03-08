import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Loadding from './Loadding'

export default function OrderSucceshPage() {
 const [isLoadding,setisLoadding] =  useState(false)   
    

 

  return (
< Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='Auto'
  pt={'200px'}
  w={'40%'}
  m={'auto'}
  
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Order Success!
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Thanks for Palecing Order. Our team will  dispatch to Your Product soon.
  </AlertDescription>
</Alert>
  )
  }


