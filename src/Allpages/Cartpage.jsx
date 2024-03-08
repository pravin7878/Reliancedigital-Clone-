import React, { useContext, useEffect, useState } from 'react'
import { Allcontext } from '../ContextAPI/ContextProvider'
import { Box, Card, CardBody, CardFooter, Heading, Image, Stack, Text, Button, Flex, Center, SimpleGrid, useToast, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';

export default function Cartpage() {
    const { state, quantityIncrease, quantityDecrease } = useContext(Allcontext)
    const [Cart, setCart] = useState([])
    const [TotalPrice, setTotalPrice] = useState(0)
    const [orderprice, setorderprice] = useState(0)
    console.log(TotalPrice);
    const toast = useToast()
    // let cartItems = state.cartItems
    // console.log(cartitem);

    useEffect(() => {
        setCart(state?.cartItems)

    }, [state,state.cartItems])


    useEffect(() => {
        const totalPrice = Cart.reduce((acc, item) => {
            // Remove commas and convert to number
            const price = parseFloat(item.price.replace(/,/g, ''));
            const quantity = parseInt(item.quantity);

            return acc + (price * quantity);
        }, 0);

        // Update the state with the calculated total price
        setTotalPrice(totalPrice);
    }, [Cart]);

 
    if (state.cartItems.length == 0) {
        return <Center>
            <Flex flexDirection={'column'} >
                <Image src={'https://www.reliancedigital.in/build/client/images/emptycart.png'} />
                <Text>Your Shopping Cart is Empty</Text>
                <Link to={'/'}>
                    <Button bg={'red'} color={'white'} m={5} fontSize={'13px'}>CONTINUE SHOPPING</Button></Link>
            </Flex>

        </Center>
    }


    const removeItem = (id) => {
toast({
    title:'Item Successfully Deleted',
    status:'success',
    isClosable:true,
    position:'top'
})
        const updatedCart = [...Cart];
        updatedCart.splice(id, 1);
        setCart(updatedCart);
    }


    const clearCart = () => {
        console.log('Clearing cart...');
        state.cartItems = [];
        console.log('Cart cleared:', Cart); // Confirm that Cart is now an empty array
      };
      


    return (<>
        <Box display={'flex'} w={'95%'} m={'auto'} pt={'180px'}>
            <Flex flexDirection={'column'} w={'60%'} h={'auto'}>
                {Cart?.map((Item, itemInd) => {
                    const { name, price, mrp, image, discount, quantity } = Item
                    return (
                        <Box key={itemInd} w={'90%'} m={'auto'} display={'flex'} p={'20px'}>
                            <Box w={'100%'} m={'auto'} display={'flex'} p={'20px'} flexDirection={'collumn'}>
                                <Card
                                    direction={{ base: 'column', sm: 'row' }}
                                    overflow='hidden'
                                    variant='outline'
                                    w={'100%'}
                                >
                                    <Image
                                        objectFit='cover'
                                        maxW={{ base: '100%', sm: '200px' }}
                                        src={image}
                                        alt={name}
                                        p={10}
                                    />
                                    <Stack>
                                        <CardBody>
                                            <Heading size='md'>{name}</Heading>
                                            <Text>Descount Price: ₹{price}</Text>
                                            <Text>MRP: ₹{mrp}</Text>
                                            <Text>Discount: ₹{discount}</Text>
                                        </CardBody>
                                        <CardFooter w={'100%'}>
                                            <Box display={'flex'} w={'100%'} justifyContent={'space-between'}>

                                                {/* <Box as='span' w='200px' mx='24px'> */}


                                                <Box display={'flex'} w={'50%'} justifyContent={'space-around'}>
                                                    <Button onClick={() => {
                                                        const _Cart = Cart.map((Myitem, index) => {
                                                            return itemInd !== index ? Myitem : Myitem.quantity < 5 ? { ...Myitem, quantity: Myitem.quantity + 1 } : Myitem
                                                        })
                                                        setCart(_Cart)
                                                    }}>+</Button>
                                                    <Text pt={2} fontSize={'xl'}> {quantity}</Text>

                                                    <Button onClick={() => {
                                                        const _Cart = Cart.map((Myitem, index) => {
                                                            return itemInd !== index ? Myitem : Myitem.quantity > 1 ? { ...Myitem, quantity: Myitem.quantity - 1 } : Myitem
                                                        })
                                                        setCart(_Cart)
                                                    }}>-</Button>
                                                </Box>

                                                <Box>

                                                    <Text fontSize={'md'}>Amount: ₹ {parseFloat(price.replace(/,/g, '')) * Number(quantity)}</Text>
                                                    <Spacer m={2}/>
                                                    <Button onClick={() => removeItem(itemInd)} bg={'black'} color={'white'} _hover={{bg:'red'}}>Remove Item</Button>
                                                </Box>
                                            </Box>
                                        </CardFooter>
                                    </Stack>
                                </Card>
                            </Box>


                        </Box>

                    )
                })}

            </Flex>

            <Flex w={'40%'} flexDirection={'column'}>
                <Box w={'100%'} border={'solid 2px black'} h={'250px'} mt={'50px'} p={5}>

                    <Text fontSize={'xl'} textAlign={'center'}>Order Details</Text>
                    <Box pl={10} pt={5}>
                        <Text fontSize={'md'}>Price: ₹{TotalPrice}.00</Text>
                        <Text fontSize={'sm'}>Item : {Cart?.length}</Text>
                        <Text fontSize={'sm'}>Shipping Charge : ₹{state?.shippinfee}</Text >
                        <Text fontSize={'md'}>Totel Amount Paybel : ₹{TotalPrice + (state.shippinfee)}</Text>
                        <Link to={'/Ordersuccess'}>
                            <Button 
                            m={5} 
                            bg={'red'} 
                            color={'white'} 
                            _hover={{ bg: 'black' }} 
                            onClick={clearCart}
                            >CHECKOUT</Button>
                        </Link> </Box>

                </Box>

                <Link to={'/'}>
                    <Button bg={'red'} _hover={{ bg: 'black' }} color={'white'} m={5} fontSize={'13px'} >CONTINUE SHOPPING</Button>
                </Link>
            </Flex>
        </Box>

        <Footer />
    </>)
}



