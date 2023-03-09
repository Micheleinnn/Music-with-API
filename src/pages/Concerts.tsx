import React, { useContext, useState } from "react";
import { SoundCloudContext } from "../context/SoundCloudContext";
import Layout from "../components/layout/Layout";
import "./concerts.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";

const Concerts = () => {
  const [searchedConcert, setSearchedConcert] = useState("");
  const { searchTrack, track, searchAlbum, album, searchConcerts, concerts } =
    useContext(SoundCloudContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Layout>
      <article>
        <h1 className={"Concerts"}>Concerts</h1>
        <input
          onChange={(event) => {
            setSearchedConcert(event.target.value);
            console.log(
              event,
              "event",
              event.target,
              "target",
              event.target.value,
              "value"
            );
          }}
        />
        <button
          onClick={(event) => {
            searchConcerts(searchedConcert);
            console.log(event, "event", event.target, "target");
          }}
        >
          search concerts
        </button>
        <div>
          {concerts?._embedded?.events?.map((concert, index) => {
            return (
              <section key={concert?.name + index} onClick={onOpen}>
                <h1>concerts title:{index + ", " + concert?.promoter?.name}</h1>
                <img
                  src={concert?.images[5]?.url}
                  alt={concert?.images[5]?.ratio}
                />
                <h2>Name:{concert?.name}</h2>
                <p>{concert?.promoter?.description}</p>
              </section>
            );
          })}
        </div>{" "}
        {isOpen && (
          <Modal isOpen={isOpen} onClose={onClose} isCentered={false}>
            <ModalOverlay />
            <ModalContent overflow={"scroll"}>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody backgroundColor={"yellow"} overflow={"scroll"}>
                <Box overflow={"scroll"}>
                  {concerts?._embedded?.events?.map((concert, index) => {
                    return (
                      <section key={concert?.name + index}>
                        <h1>
                          concerts title:
                          {index + ", " + concert?.promoter?.name}
                        </h1>
                        <img
                          onClick={onOpen}
                          src={concert?.images[5]?.url}
                          alt={concert?.images[5]?.ratio}
                        />
                        <h2>Name:{concert?.name}</h2>
                        <p>{concert?.promoter?.description}</p>
                      </section>
                    );
                  })}
                </Box>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </article>
    </Layout>
  );
};
export default Concerts;
