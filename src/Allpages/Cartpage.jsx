import React, { useContext, useState } from 'react'
import { Allcontext } from '../ContextAPI/ContextProvider'
import { Box, Card, CardBody, CardFooter, Heading, Image, Stack, Text, Button, Flex, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Nevbar from '../Component/Nevbar/Nevbar';
import Footer from '../Component/Footer/Footer';

export default function Cartpage() {
    const { setcartitem, setcartitemCount, cartitem } = useContext(Allcontext)
    const [quantity, setquantity] = useState(1)


    if (cartitem.length == 0) {
        return <Center>
            <Flex flexDirection={'column'}>
                <Image src={'https://www.reliancedigital.in/build/client/images/emptycart.png'} />
                <Text>Your Shopping Cart is Empty</Text>
                <Link to={'/'}>
                    <Button bg={'red'} color={'white'} m={5} fontSize={'13px'}>CONTINUE SHOPPING</Button></Link>
            </Flex>
        </Center>
    }
    return (<>
        <Nevbar />

        <Flex flexDirection={'column'}>
            {cartitem?.map((item) => {
                // console.log(item);
                let Discount = Math.floor((item?.price * 2) * 10 / 100)
                let OfferPrice = (item?.price * 2) - Discount
                return (
                    <Box key={item.id} w={'90%'} m={'auto'} display={'flex'} flexDirection={'column'} p={'20px'}>

                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                        >
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '200px' }}
                                src={item?.image}
                                alt={item?.title}
                            />

                            <Stack>
                                <CardBody>
                                    <Heading size='md'>{item?.title}</Heading>

                                    <Text py='2'>
                                        {item?.description}
                                    </Text>
                                    <Text>Descount Price: ₹{OfferPrice}</Text>

                                    <Text>MRP: ₹{(item?.price) * 2}</Text>

                                    <Text>Discount: ₹{Discount}</Text>
                                </CardBody>
                                <Box></Box>
                                <CardFooter>
                                    <Link to={'/checkout'}>
                                        <Button variant='solid' colorScheme='blue'>
                                            CHECKOUT
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Stack>
                        </Card>
                    </Box>
                )
            })}
            <Link to={'/'}>
                <Button bg={'red'} color={'white'} m={5} fontSize={'13px'}>CONTINUE SHOPPING</Button></Link>
        </Flex>

        <Footer />
    </>)
}



