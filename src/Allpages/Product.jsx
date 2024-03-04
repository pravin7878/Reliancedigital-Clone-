import React from 'react'
import { Card,CardBody,Image,Stack,Heading,Text, Divider, CardFooter, ButtonGroup, Button, Box} from '@chakra-ui/react'

export default function Product({ item }) {
    const {title,price,image,category,id,description} = item
    // (percent *amount) / 100)
let Discount = Math.floor((price*2)*10/100)
let OfferPrice = (price*2)-Discount
    return (
            <Card maxW='sm' h={'500px'}>
          <CardBody >
            <Image
              src={image}
              alt={title}
              borderRadius='lg'
              w={"100%"}
              h={"150px"}
              p={3}
              _hover={{
                p:1,
               }}
            />
            <Box
            display={'flex'}
            flexDirection={'column'}
           
            >
              <Heading size='18px' h={'120px'} _hover={{color:"red"}}>{title}</Heading >
             
              <Text color='blue.600' fontSize='xl'>
               Offer Price: ₹{OfferPrice}      </Text>
              <Text color='black.600' fontSize='xl' _hover={{color:"red"}} >
                MRP:₹{price*2}
              </Text>
              
              <Text color='blue.600' fontSize='xl'>
                You save: 10% (₹{Discount})
              </Text>
              <Text border={"solid 2px green"} color={'green'} borderRadius={"12px"} fontSize={'12px'} p={1} textAlign={'center'} mt={5}>OFFERS AVAILABLE</Text>
              </Box>
          </CardBody>
          <CardFooter>
            
          </CardFooter>
        </Card>
          )
        }
    
