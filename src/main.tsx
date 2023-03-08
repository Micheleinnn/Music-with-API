import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Music from "./pages/Music";
import Biography from "./pages/Biography";
import Photos from "./pages/Photos";
import { SoundCloudProvider } from "./context/SoundCloudContext";
import Concerts from "./pages/Concerts";
// import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Music />,
    errorElement: <Error />,
  },
  {
    path: "/biography",
    element: <Biography />,
    errorElement: <Error />,
  },
  {
    path: "/photos",
    element: <Photos />,
    errorElement: <Error />,
  },
  {
    path: "/concerts",
    element: <Concerts />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SoundCloudProvider>
      <RouterProvider router={router} />
    </SoundCloudProvider>
  </React.StrictMode>
);
