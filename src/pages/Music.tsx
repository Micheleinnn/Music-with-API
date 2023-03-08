import React, { useContext, useState } from "react";
import Layout from "../components/layout/Layout";
import "./music.css";
import { SoundCloudContext } from "../context/SoundCloudContext";

const Music = () => {
  const [queryInput, setQueryInput] = useState("");
  const { searchTrack, tracks, searchAlbum, album } =
    useContext(SoundCloudContext);

  return (
    <Layout>
      <article>
        <h1 className={"music"}>Music</h1>
        <input
          onChange={(event) => {
            setQueryInput(event.target.value);
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
            searchTrack(queryInput);
            console.log(event, "event", event.target, "target");
          }}
        >
          search track
        </button>
        <div>
          {tracks?.genreStats?.map((genre) => {
            console.log(genre, "genre");

            return (
              <section key={genre?.value}>
                <h1>genre:{genre?.value}</h1>
                <h2>count:{genre?.count}</h2>
              </section>
            );
          })}
        </div>
        <div>
          {tracks?.tracks?.items?.map((track, index) => {
            console.log(track, "track");
            return (
              <section key={track?.title + index}>
                <h1>track title:{track?.title}</h1>
                <img src={track?.artworkUrl} alt={track?.title} />
                <h2>track autor:{track?.publisher?.artist}</h2>
                <p>{track?.description}</p>
              </section>
            );
          })}
        </div>
      </article>
    </Layout>
  );
};
export default Music;
