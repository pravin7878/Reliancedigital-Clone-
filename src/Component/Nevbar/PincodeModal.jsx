import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    textDecoration,
  } from '@chakra-ui/react'

  import { Input,Button,Box } from '@chakra-ui/react'

export function PincodeMOdal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button 
        onClick={onOpen}
        bg={"none"}
        fontStyle="normal"
        fontWeight="700"
        color="rgb(255, 255, 255)"
        fontSize=" 15px"
        lineHeight="20px"
        _hover={"none"}
        >Select your Pin Code</Button>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent 
          position={'absolute'}
          right={30}
          top={100}
          >
            <ModalHeader>Choose your delivery location</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                  <Box 
                  display={"flex"}
                  
                  >
                   <Input 
                   type='number'
                   border={"solid 1px blue"}
                   placeholder={"Enter Delivary Pincode"}/>
             <Button
             border={"solid 1px blue"}
             onClick={onClose}
             >Apply</Button>
             </Box>
            </ModalBody>
            <ModalFooter>
             
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }