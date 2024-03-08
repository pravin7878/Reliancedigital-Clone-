import { Box, Flex, Text, Image, Link, Input, Button, IconButton } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';
import { PincodeMOdal } from './PincodeModal';
import NevbarLink from '../../PracticeComponent/NevbarLink';
import { CollapseEx } from '../../PracticeComponent/CollapseEx';


// For Login
import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect } from 'react';
import { Allcontext } from '../../ContextAPI/ContextProvider';
import NevbarMenu from './NevbarMenu';
export default function Nevbar() {
  const { loginWithRedirect,logout,isAuthenticated } = useAuth0();
const {state,setquary} = useContext(Allcontext)

  const buttonStyle = {
    bg: 'none',
    color: 'white',
    width: '10%',
    fontSize: '12px',
    _hover: {
      background: 'rgb(228, 37, 41)',
      borderRadius: 'none',
    },
  };
  

  const hendelmouseEnter = ()=>{
    console.log("btn was clicked");
return <Box position={'absolute'}
border={"solid 2px red"}
h={"300px"}>
 <NevbarLink/>
  </Box>
  }

  
 
  return (
    <Box position="fixed"
    width="100%"
    zIndex="1000">
      <Box
        h={"20px"}
        // borderBottom={"solid  0.5px white"}
        bg={"rgb(228, 37, 41)"}
        display={"flex"}
        justifyContent={"space-between"}
      >
       {/* Mobile Nevbar */}
        <Box w={{base:'100%', md:"30%"}} display={'flex'}  justifyContent={'space-around'}>
          <Box display={{base:'block' ,md:'none'}} w={'30%'} >
          <NevbarMenu />
          </Box>
          <Box display={{base:'block' ,md:'none'}} w={'30%'} textAlign={'left'}>
          <Link
              as={RouterLink}
              fontStyle="normal"
              fontWeight="700"
              color="rgb(255, 255, 255)"
              fontSize=" 15px"
              lineHeight="20px"
              w={"30%"}
              to={"/cart"}
              display={"flex"}
              alignItems={"center"}

            >
              <Image width="10" height="6" m={"5px"} src="https://img.icons8.com/ios-glyphs/30/FFFFFF/shopping-cart--v1.png" alt="shopping-cart--v1" />
              Cart: <Text borderRadius={10} pl ={2} pr={2} bg={'white'} ml={1} color={'black'}> {state.cartItems.length}</Text>
            </Link>
          </Box>
        </Box>

        <Box w={"30%"}  display={{base:'none', md:"block"}}></Box>

        <Box
          display={{base:'none', md:"flex"}}
          alignItems="center"
          justifyContent="space-around"
          textAlign={"center"}
          w={"30%"}
        >
          {/* <Link></Link> */}
          <Link
            fontStyle="normal"
            fontWeight="700"
            color="rgb(255, 255, 255)"
            fontSize=" 13px"
            lineHeight="20px"
            w={"30%"}
            borderRight={"1px solid white"}
            href='https://www.reliancedigital.in/locateus'
            isExternal

          >Find a store</Link>
          <Link
            fontStyle="normal"
            fontWeight="700"
            color="rgb(255, 255, 255)"
            fontSize=" 13px"
            lineHeight="20px"
            w={"30%"}
            borderRight={"1px solid white"}
            href='https://www.reliancedigital.in/solutionbox/'
            isExternal

          >Buying guides</Link>
          <Link
            fontStyle="normal"
            fontWeight="700"
            color="rgb(255, 255, 255)"
            fontSize=" 13px"
            lineHeight="20px"
            w={"30%"}
            borderRight={"1px solid white"}
            href='https://www.reliancedigital.in/content/contactus'
            isExternal
          >Contact us</Link>
        </Box>
      </Box>


      <Box
        h={"80px"}
        bg={"rgb(228, 37, 41)"}
        display={"Flex"}
        justifyContent={'space-around'}
        alignItems={"center"}
      >
        <Box ><Image w={{base:'70%' ,md:'100%'}} src={"https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"} /></Box>
        <Box bg={"white"}
          borderRadius={20}
          pr={5}
         >
          <Input
            // htmlSize={[10,20,30,40]}
            width={['70px','140px','200px','350px']}
            // variat='filled'
            fontSize={{base:'10px'}}
          
            placeholder='Find your favorite products'
            bg={"white"}
            borderRadius={[10,20]}
            variant='outline none'
            onChange={(e)=>setquary(e.target.value)}
          />
          <IconButton aria-label='Search database' bg={"white"} ><Image display={{base:'none' , md:'block'}} w={"50%"} src={'https://img.icons8.com/?size=60&id=59878&format=png'} /></IconButton>
        </Box>
        <Box
          alignItems={"center"}
          justifyContent="end"
          // justifyItems={"end"}
          h={"auto"}
          w={"30%"}
          textAlign={"right"}
          display={{ base: 'none', md: 'flex' }}
        >
          <Box
            m={"6px"}
            
          >
            <Link
              fontStyle="normal"
              fontWeight="700"
              color="rgb(255, 255, 255)"
              fontSize=" 15px"
              lineHeight="20px"
              w={"30%"}
            >


              <PincodeMOdal />
            </Link>

          </Box>

          <Box>
            <Link
              as={RouterLink}
              fontStyle="normal"
              fontWeight="700"
              color="rgb(255, 255, 255)"
              fontSize=" 15px"
              lineHeight="20px"
              w={"30%"}
              to={"/cart"}
              display={"flex"}
              alignItems={"center"}

            >
              <Image width="10" height="6" m={"5px"} src="https://img.icons8.com/ios-glyphs/30/FFFFFF/shopping-cart--v1.png" alt="shopping-cart--v1" />
              Cart: <Text borderRadius={10} pl ={2} pr={2} bg={'white'} ml={1} color={'black'}> {state.cartItems.length}</Text>
            </Link>
          </Box>

          <Box>
            <Link
              as={RouterLink}
              fontStyle="normal"
              fontWeight="700"
              color="rgb(255, 255, 255)"
              fontSize=" 16px"
              lineHeight="20px"
              w={"30%"}
              // borderRight={"1px solid white"}
             
              display={"flex"}
              alignItems={"center"}
            >
              <Image width="10" height="6" m={"5px"} src="https://img.icons8.com/ios-filled/50/FFFFFF/user.png" alt="user" />
              {isAuthenticated ?  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LogOut</button>
               : 
               <button onClick={() => loginWithRedirect()} >LogIn</button>}
            </Link>
          </Box>

        </Box>
      </Box>
      <Box 
      h={"40px"} 
      bg={"rgb(0, 51, 128)"}
      display={"flex"}
      justifyContent={'space-around'}
      >

      <Button {...buttonStyle} onClick={hendelmouseEnter}>
        MOBILES & TABLETS
        </Button>
      <Button {...buttonStyle} >TELEVISIONS</Button>
      <Button {...buttonStyle} >AUDIO</Button>
      <Button {...buttonStyle} >HOME APPLIANCES</Button>
      <Button {...buttonStyle} >COMPUTERS</Button>
      <Button {...buttonStyle} >CAMERAS</Button>
      <Button {...buttonStyle} >PERSONAL CARE</Button>
      <Button {...buttonStyle} >ACCESSORIES</Button>
      
      </Box>
      </Box>
  )
}
