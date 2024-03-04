import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

export default function MobileCart() {

    const Mobolecartstyling = {
        display: "flex",
        w: "95%",
        justifyContent: 'space-around',
        m: "auto",
    }

    const mobileImage = {
        // w: "23%",
        _hover: {
            // w: "24%",
            // boxShadow: 'dark-lg'
        }
    }
    return (
        <Box
            m={10}

        >
            <Text m={5} fontSize={"xl"}>Top Deals on Mobiles</Text>
            {/* <Box {...Mobolecartstyling}> */}
            <SimpleGrid columns={[1,1,2,4]} spacing={"40px"}>

                <Box {...mobileImage}>
                    <RouterLink to={"/page/phone"}>
                        <Image src={"https://www.reliancedigital.in/medias/Samsung-M14-GDOE-Banners-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w1MDkwOXxpbWFnZS9qcGVnfGltYWdlcy9oMmMvaDZjLzEwMTE1MjA2ODA3NTgyLmpwZ3xmMTkwOTE5YWFjYmQ1ODJmYzhhMDIwOWIyZTA4MDkwZGEwY2U2MjQwNjcwZmEyYzk4MzI5MzI4N2UzM2U4ZDU3"} />
                    </RouterLink>
                </Box>

                <Box {...mobileImage}>
                    <RouterLink to={"/page/phone"}>
                        <Image src={"https://www.reliancedigital.in/medias/Redmi-A2-GDOE-Banners-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w1MDU3NHxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDU4LzEwMTE0Njk4MjQ4MjIyLmpwZ3xiMGFlZWQwZTgyNTg2YTIxN2ZiNWM5MjZhNDFlM2E3YjEwZDRhMWI2OGFiOGNjOTA4MzcxNDk3ZTQzMWIyYjYw"} />
                    </RouterLink>
                </Box >

                <Box {...mobileImage}>
                    <RouterLink to={"/page/phone"}>
                        <Image src={"https://www.reliancedigital.in/medias/Realme-C55-GDOE-Banners-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w1NTM4NHxpbWFnZS9qcGVnfGltYWdlcy9oM2YvaDIzLzEwMTE0Njk4MzEzNzU4LmpwZ3xhMmFmOTY2NjIwMWM2MDg2MzJjYTkzMTQ3N2VmMWJlMGQyMmExY2Y0MzEzZjE4NTRhZTNjYmFmMTYxYjRjMmU3"} />
                    </RouterLink>
                </Box>

                <Box {...mobileImage}>
                    <RouterLink to={"/page/phone"}>
                        <Image src={"https://www.reliancedigital.in/medias/1-GDOE-Banners-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w0NjA5NnxpbWFnZS9qcGVnfGltYWdlcy9oZGIvaDA5LzEwMTEyOTIxNjY1NTY2LmpwZ3wwZDU3ZjA4MzIwNjA2MGNhMzRiMzQ5YTVkYTM2NDZiNjEzNWZiYjBkZjU2NzA4MTk5NjBlMzc4MmQzN2M3NzU3"} />
                    </RouterLink>
                </Box>
                {/* </Box> */}
            </SimpleGrid>
        </Box>
    )
}
