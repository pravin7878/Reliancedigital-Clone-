import { useDisclosure,Button,Box,Collapse } from "@chakra-ui/react"

export function CollapseEx() {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <>
        <Button onClick={onToggle}>Click Me</Button>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p='40px'
            color='white'
            mt='4'
            bg='teal.500'
            rounded='md'
            shadow='md'
          >
           this is my colleps comp conent
          </Box>
        </Collapse>
      </>
    )
  }