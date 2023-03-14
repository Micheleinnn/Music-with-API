import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

const ConcertModal = ({ isOpen, onClose, concert }) => {
  console.log(concert, "concert");
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered={false}>
        <ModalOverlay />
        <ModalContent height={"70vh"}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody backgroundColor={"yellow"}>
            <Box> {concert?.classifications?.[0]?.genre?.name}</Box>
            <Box> {concert?.classifications?.[0]?.segment?.name}</Box>
            <Box> {concert?.classifications?.[0]?.subGenre?.name}</Box>
            <Box> {concert?.classifications?.[0]?.subType?.name}</Box>
            <Box> {concert?.classifications?.[0]?.type?.name}</Box>
            <Box> {concert?.type}</Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      ;
    </div>
  );
};

export default ConcertModal;
