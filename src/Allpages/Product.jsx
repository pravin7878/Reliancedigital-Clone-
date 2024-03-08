import React from 'react'
import { Card,CardBody,Image,Stack,Heading,Text, Divider, CardFooter, ButtonGroup, Button, Box} from '@chakra-ui/react'

export default function Product({ item }) {
    const {name,price,img,id,mrp,discount
    } = item

    return (
            <Card maxW='sm' h={'500px'} key={item.id}>
          <CardBody >
            <Image
              src={img}
              alt={name}
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
              <Heading size='18px' h={'120px'} _hover={{color:"red"}}  Overflow={'hidden'}>{name}</Heading >
             
              <Text color='blue.600' fontSize='xl'>
               Offer Price: ₹{price}      </Text>
              <Text color='black.600' fontSize='xl' _hover={{color:"red"}} >
                MRP:₹{mrp}

              </Text>
              
              <Text color='blue.600' fontSize='xl'>
                You save: ₹{discount}
              </Text>
              <Text border={"solid 2px green"} color={'green'} borderRadius={"12px"} fontSize={'12px'} p={1} textAlign={'center'} mt={5}>OFFERS AVAILABLE</Text>
              </Box>
          </CardBody>
          <CardFooter>
            
          </CardFooter>
        </Card>
          )
        }
    
