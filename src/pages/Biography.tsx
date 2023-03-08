import React, { useContext } from "react";
import Layout from "../components/layout/Layout";
import "./biography.css";
import { SoundCloudContext } from "../context/SoundCloudContext";

const Biography = () => {
  const { searchTrack, tracks, searchAlbum, album } =
    useContext(SoundCloudContext);
  return (
    <Layout>
      <div>
        <h1>Biography</h1>
        <button
          onClick={(event) => {
            searchAlbum();
            console.log(event, "event", event.target, "target");
          }}
        >
          search album
        </button>
        <div>
          {album?.tracks?.items?.map((track, index) => {
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
        ,
      </div>
      ,
    </Layout>
  );
};

export default Biography;
