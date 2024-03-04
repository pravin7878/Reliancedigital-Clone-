import { Box, Center, Flex, Spinner } from '@chakra-ui/react'
import React from 'react'
import Nevbar from '../Component/Nevbar/Nevbar'
import Footer from '../Component/Footer/Footer'

export default function Loadding() {
    return (<>

        <Box
        display={"Flex"}
        alignItems={"Center"}
        justifyContent={"Center"}
        w={"100vw"}
        h={"100vh"}
        >
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </Box>

        <Footer/>
        </>)
}
