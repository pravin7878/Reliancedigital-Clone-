import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Input, useDisclosure } from '@chakra-ui/react'
import React from 'react'

export default function NevbarMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const buttonStyle = {
        bg: 'none',
        color: 'black',
        width: '100%',
        fontSize: '12px',
        _hover: {
          background: 'rgb(228, 37, 41)',
          borderRadius: 'none',
        },
      };
    return (
      <>
        <Button ref={btnRef} bg={'none'} color={'white'} onClick={onOpen}>
          Menu
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
          size={'sm'}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Reliance Digital</DrawerHeader>
  
            <DrawerBody>
            <Flex flexDirection={'column'} textAlign={'left'} ml={5}>
              <Button {...buttonStyle} >
        MOBILES & TABLETS
        </Button>
      <Button {...buttonStyle} >TELEVISIONS</Button>
      <Button {...buttonStyle} >AUDIO</Button>
      <Button {...buttonStyle} >HOME APPLIANCES</Button>
      <Button {...buttonStyle} >COMPUTERS</Button>
      <Button {...buttonStyle} >CAMERAS</Button>
      <Button {...buttonStyle} >PERSONAL CARE</Button>
      <Button {...buttonStyle} >ACCESSORIES</Button>
      </Flex>
            </DrawerBody>
            <DrawerFooter>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
