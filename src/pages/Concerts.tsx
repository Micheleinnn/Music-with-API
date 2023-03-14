import React, { useContext, useState } from "react";
import { SoundCloudContext } from "../context/SoundCloudContext";
import Layout from "../components/layout/Layout";
import "./concerts.css";
import { useDisclosure } from "@chakra-ui/react";
import ConcertModal from "./ConcertModal";

const Concerts = () => {
  const [searchedConcert, setSearchedConcert] = useState("");
  const { searchConcerts, concerts } = useContext(SoundCloudContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Layout>
      <article>
        <h1 className={"Concerts"}>Concerts</h1>
        <div className={"searchWrapper"}>
          <input
            placeholder={"SnoopDogg"}
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
        </div>

        <div className={"allConcertWrapper"}>
          {concerts?._embedded?.events?.map((concert, index) => {
            return (
              <section className="concertWrapper" key={concert?.name + index}>
                <h1>concerts title:{index + ", " + concert?.promoter?.name}</h1>
                <img
                  onClick={onOpen}
                  src={concert?.images[5]?.url}
                  alt={concert?.images[5]?.ratio}
                />
                <h2>Name:{concert?.name}</h2>
                <p>{concert?.promoter?.description}</p>

                {isOpen && (
                  <ConcertModal
                    isOpen={isOpen}
                    onClose={onClose}
                    concert={concert}
                  />
                )}
              </section>
            );
          })}
        </div>
      </article>
    </Layout>
  );
};
export default Concerts;
