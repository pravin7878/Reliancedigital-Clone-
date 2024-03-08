import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Box, Card, CardBody, CardFooter, Heading, Text, Image, Container, Center, Button, Stack, ButtonGroup, Toast, useToast } from '@chakra-ui/react'
import { Allcontext } from '../ContextAPI/ContextProvider'
import Loadding from './Loadding'
import ErrorHendeler from './Error'
import { Link } from 'react-router-dom'
import Footer from '../Component/Footer/Footer'

export default function ProductDetailpage() {
    const { product_id } = useParams()

    // context provider
    const { addTocart,quantity,setquantity} = useContext(Allcontext)
    // const [productdetail, setproductdetail] = useState({data:null,quantity:0})
    const [productdetail, setproductdetail] = useState(null)
    const [isLoadding, setisLoadding] = useState(false)
    const [IsError, setIsError] = useState(false)
    const [itemID,setitemID] = useState(0)
    // const [productinfo, setproductinfo] = useState(null)

 let toast = useToast()
    const getProduct = async () => {
        setisLoadding(true)
        try {
            let res = await axios.get(`https://rus-digital-televisions.onrender.com/allproduct/${product_id}`)
            setproductdetail(res.data)
            // setproductinfo(res.data)
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


    if (isLoadding) {
        return <Loadding />
    }

    if (IsError) {
        return <ErrorHendeler />
    }

    // const {name,mrp,price,discount,id} = productdetail
    return (<>
        <Center display={'flex'} flexDirection={'column'} pt={'150px'}>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                w={'70%'}
                m={'auto'}
                p={10}
                h={'auto'}
            >
                <Image
                    // objectFit='cover'
                    w={['100%','150px','250px','300px']}
                    h={['100%','150px','250px','300px']}
                    src={productdetail?.img}
                    alt={productdetail?.name}
                    p={5}
                   
                />

                <Stack>
                    <CardBody fontSize={['10px', 'sm', 'md', 'xl']}
                    h={'auto'}
                    >
                        <Heading  >{productdetail?.name}</Heading>
                       
                        <Text  color='blue.600' >
                            Offer Price: ₹{productdetail?.price}    
      
                            </Text>
                        <Text color='black.600' boxSizing={'border-box'}  _hover={{ color: "red" }} >
                            MRP:₹{productdetail?.mrp}
                        </Text>

                        <Text color='blue.600' >
                            You save:  (₹{productdetail?.discount})
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='white' bg={'red'} _hover={{ bg: 'rgb(201, 66, 66)' }} onClick={''}>
                                Buy now
                            </Button>
                            <Link to={'/'}>
                                <Button variant='ghost' color='white' bg={'rgb(252, 96, 39)'} _hover={{ bg: 'rgb(201, 93, 54)' }} onClick={()=>addTocart(productdetail)}>
                                    Add to cart
                                </Button>
                            </Link>
                            <Link to={'/'}>
                                <Button bg={'red'} color={'white'} fontSize={'13px'} _hover={{ bg: 'lightred' }}>CONTINUE SHOPPING</Button></Link>
                        </ButtonGroup>
                    </CardFooter>
                </Stack>
            </Card>
        </Center>
        <Footer />
    </>)
}
