import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="text-white">
      <Header />
    </div>
  );
};

export default Browse;
