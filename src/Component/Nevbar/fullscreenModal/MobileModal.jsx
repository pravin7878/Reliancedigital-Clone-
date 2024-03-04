import { Button, Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react';
import { useState } from 'react';


export const MyButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <>
        <Button
          _hover={{
            background: 'rgb(228, 37, 41)',
          }}
          onMouseEnter={handleOpenModal}
          onMouseLeave={handleCloseModal}
        >
          Hover me
        </Button>
  
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="50%">
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              {/* Your full-screen content goes here */}
              <p>This is your full-screen popup content.</p>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  };
  