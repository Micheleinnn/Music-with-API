import React, { useContext, useState } from "react";
import { SoundCloudContext } from "../context/SoundCloudContext";
import Layout from "../components/layout/Layout";
import "./concerts.css";

const Concerts = () => {
  const [searchedConcert, setSearchedConcert] = useState("");
  const { searchTrack, track, searchAlbum, album, searchConcerts, concerts } =
    useContext(SoundCloudContext);

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
          {concerts?.concerts?.items?.map((concert, index) => {
            return (
              <section key={concert?.title + index}>
                <h1>concerts title:{concert?.title}</h1>
                <img src={concert?.artworkUrl} alt={concert?.title} />
                <h2>Concerts:{concert?.place?.concerts}</h2>
                <p>{concert?.description}</p>
              </section>
            );
          })}
        </div>
      </article>
    </Layout>
  );
};
export default Concerts;
