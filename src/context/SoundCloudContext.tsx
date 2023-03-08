import React, { useEffect, useState } from "react";
import axios from "axios";
export const SoundCloudContext = React.createContext(null);

const client = axios.create({
  baseURL: "https://soundcloud-scraper.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
  },
});

const clientConcerts = axios.create({
  baseURL: "https://concerts-artists-events-tracker.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST_CONCERTS,
  },
});

export const SoundCloudProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [tracks, setTracks] = useState({});
  const [album, setAlbum] = useState({});
  const [concerts, setConcerts] = useState({});
  const searchTrack = async (queryInput) => {
    const response = await client.get("/v1/search/tracks", {
      params: {
        term: queryInput,
      },
    });
    console.log(response, "response", response.data, "data");
    setTracks(response.data);
  };

  const searchAlbum = async () => {
    const response = await client.get("v1/playlist/tracks", {
      params: {
        playlist: "https://soundcloud.com/edsheeran/sets/tour-edition-1",
      },
    });
    console.log(response, "response");
    setAlbum(response.data);
  };

  const searchConcerts = async (searchedConcert) => {
    const responseConcert = await clientConcerts.get("/venue", {
      params: {
        name: searchedConcert,
        page: "1",
      },
    });
    console.log(responseConcert, "responseConcert");
    setConcerts(responseConcert.data);
  };

  console.log(tracks, "track");
  console.log(album, "album");
  console.log(concerts, "concerts");

  return (
    <SoundCloudContext.Provider
      value={{
        searchTrack,
        tracks,
        searchAlbum,
        album,
        searchConcerts,
        concerts,
      }}
    >
      {children}
    </SoundCloudContext.Provider>
  );
};
