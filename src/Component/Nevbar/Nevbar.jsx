import { Box, Flex, Text, Image, Link, Input, Button, IconButton } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';
import { PincodeMOdal } from './PincodeModal';
import NevbarLink from '../../PracticeComponent/NevbarLink';
import { CollapseEx } from '../../PracticeComponent/CollapseEx';


// For Login
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from 'react';
import { Allcontext } from '../../ContextAPI/ContextProvider';
export default function Nevbar() {
  const { loginWithRedirect,logout,isAuthenticated } = useAuth0();
const {cartitemCount,setquary} = useContext(Allcontext)


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
    <Box>
      <Box
        h={"20px"}
        // borderBottom={"solid  0.5px white"}
        bg={"rgb(228, 37, 41)"}
        display={"flex"}
        justifyContent={"space-between"}
      >
       
        <Box w={"30%"} ></Box>

        <Box w={"30%"} ></Box>

        <Box
          display="flex"
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
        <Box><Image src={"https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"} /></Box>
        <Box bg={"white"}
          borderRadius={20}
          pr={5}>
          <Input
            htmlSize={40}
            width='auto'
            // variant='filled'
            placeholder='Find your favorite products'
            bg={"white"}
            borderRadius={20}
            variant='outline none'
            onChange={(e)=>setquary(e.target.value)}
          />
          <IconButton aria-label='Search database' bg={"white"} ><Image w={"50%"} src={'https://img.icons8.com/?size=60&id=59878&format=png'} /></IconButton>
        </Box>
        <Box
          alignItems={"center"}
          display="flex"
          justifyContent="end"
          // justifyItems={"end"}
          h={"auto"}
          w={"30%"}
          textAlign={"right"}

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
              // borderRight={"1px solid white"}
              to={"/cart"}
              display={"flex"}
              alignItems={"center"}

            >
              <Image width="10" height="6" m={"5px"} src="https://img.icons8.com/ios-glyphs/30/FFFFFF/shopping-cart--v1.png" alt="shopping-cart--v1" />
              Cart:{cartitemCount}
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
