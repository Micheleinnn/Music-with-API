import React, { useContext } from "react";
import Layout from "../components/layout/Layout";
import "./photos.css";
import { SoundCloudContext } from "../context/SoundCloudContext";
import { useSearchParams } from "react-router-dom";
//
const Photos = () => {
  const { searchPhotos, photos } = useContext(SoundCloudContext);
  return (
    <Layout>
      <div>
        <h1>Photos</h1>
        <button
          onClick={(event) => {
            searchPhotos();
          }}
        >
          search photos
        </button>
        <div>
          <section key={photos?.title}>
            <h1>photos title:{photos?.title}</h1>
            <img src={photos?.image} />
          </section>
        </div>
      </div>
    </Layout>
  );
};
export default Photos;
