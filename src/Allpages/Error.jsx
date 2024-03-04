import { Box,Text } from '@chakra-ui/react'
import React from 'react'

export default function ErrorHendeler() {
  return (
    <Box
        display={"Flex"}
        alignItems={"Center"}
        justifyContent={"Center"}
        w={"100vw"}
        h={"100vh"}
        >
            <Text color={"red"}>Sothing went Wrong Please Repress the page</Text>
        </Box>
  )
}
