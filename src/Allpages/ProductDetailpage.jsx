import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Box, Card, CardBody, CardFooter, Heading, Text, Image, Container, Center, Button, Stack, ButtonGroup } from '@chakra-ui/react'
import { Allcontext } from '../ContextAPI/ContextProvider'
import Loadding from './Loadding'
import ErrorHendeler from './Error'
import { Link } from 'react-router-dom'

export default function ProductDetailpage() {
    const { product_id } = useParams()
    const [productdetail, setproductdetail] = useState(null)
    const [isLoadding, setisLoadding] = useState(false)
    const [IsError, setIsError] = useState(false)
    const { setcartitem, setcartitemCount, cartitem } = useContext(Allcontext)
    

    const getProduct = async () => {
        setisLoadding(true)
        try {
            let res = await axios.get(`https://fakestoreapi.com/products/${product_id}`)
            setproductdetail(res.data)
            setisLoadding(false)
        }
        catch (err) {
            setIsError(true)
            setisLoadding(false)
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    const addTocart = () => {
        setcartitemCount((prev) => prev + 1)
        setcartitem([...cartitem, productdetail])
    }


    let Discount = Math.floor((productdetail?.price * 2) * 10 / 100)
    let OfferPrice = (productdetail?.price * 2) - Discount

    if (isLoadding) {
        return <Loadding />
    }

    if (IsError) {
        return <ErrorHendeler />
    }
    return (
        <Center display={'flex'} flexDirection={'column'}>
            <Card maxW='sm' h={'auto'} mt={10} border={'solid 1px blue'}>
                <CardBody >
                    <Image
                        src={productdetail?.image}
                        alt={productdetail?.title}
                        borderRadius='lg'
                        w={"100%"}
                        h={"150px"}
                        p={3}
                        _hover={{
                            p: 1,
                        }}
                    />
                    <Box
                    //   display={'flex'}
                    //   flexDirection={'column'}

                    >
                        <Heading size='18px' _hover={{ color: "red" }}>{productdetail?.title}</Heading >

                        <Container>
                            {productdetail?.description}
                        </Container>

                        <Text color='blue.600' fontSize='xl'>
                            Offer Price: ₹{OfferPrice}      </Text>
                        <Text color='black.600' boxSizing={'border-box'} fontSize='xl' _hover={{ color: "red" }} >
                            MRP:₹{productdetail?.price * 2}
                        </Text>

                        <Text color='blue.600' fontSize='xl'>
                            You save: 10% (₹{Discount})
                        </Text>
                        <Text border={"solid 2px green"} color={'green'} borderRadius={"12px"} fontSize={'12px'} p={1} textAlign={'center'} mt={5}>OFFERS AVAILABLE</Text>
                    </Box>
                </CardBody>
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='white' bg={'red'} _hover={{ bg: 'rgb(201, 66, 66)' }} onClick={''}>
                            Buy now
                        </Button>
                        <Link to={'/cart'}>
                        <Button variant='ghost' color='white' bg={'rgb(252, 96, 39)'} _hover={{ bg: 'rgb(201, 93, 54)' }} onClick={addTocart}>
                            Add to cart
                        </Button>
                        </Link>
                    </ButtonGroup>
                </CardFooter>
            </Card>
            <Link to={'/'}>
                <Button bg={'red'} color={'white'} m={5} fontSize={'13px'} _hover={{ bg: 'lightred' }}>CONTINUE SHOPPING</Button></Link>
        </Center>
    )
}
