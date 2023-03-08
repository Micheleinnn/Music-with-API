import React, { useContext, useEffect } from "react";
import "./error.css";
import { SoundCloudContext } from "../context/SoundCloudContext";
import { useNavigate, useRouteError } from "react-router-dom";
import Layout from "../components/layout/Layout";

const Error = () => {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 5000);
  }, []);
  return (
    <Layout>
      <>
        <h1 style={{ color: "red" }}>
          This page will be fixed...See you soon."
        </h1>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </>
    </Layout>
  );
};

export default Error;
