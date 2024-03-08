import { Alert, AlertDescription, AlertIcon, AlertTitle, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Loadding from './Loadding'
import Footer from '../Component/Footer/Footer'
const toast = useToast()
export default function OrderSucceshPage() {
 const [isLoadding,setisLoadding] =  useState(false)   
    
 toast({
  title:'Order Success',
  status:'success',
  isClosable:true,
  position:'top'
})
 

  return (<>
  
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


<Link to={'/'}>
<Button bg={'red'} _hover={{ bg: 'black' }} color={'white'} m={5} fontSize={'13px'} >CONTINUE SHOPPING</Button>
</Link>
<Footer/>
</> )
  }


