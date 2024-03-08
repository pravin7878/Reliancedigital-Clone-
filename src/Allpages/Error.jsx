import { Box,Text, useToast } from '@chakra-ui/react'
import React from 'react'
import Nevbar from '../Component/Nevbar/Nevbar'
import Footer from '../Component/Footer/Footer'
  

export default function ErrorHendeler() {
  let toast = useToast()
  return (<>
  
    <Box
        display={"Flex"}
        alignItems={"Center"}
        justifyContent={"Center"}
        w={"100vw"}
        h={"100vh"}
        >
          {toast({title:'othing went Wrong Please Repress the page',
        position:'top',
        isClosable:true,
        status:'error'})}
            <Text color={"red"}>Sothing went Wrong Please Repress the page</Text>
        </Box>
        <Footer/>
        </>)
}
