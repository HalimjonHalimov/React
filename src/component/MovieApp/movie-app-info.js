import React, { useContext } from "react";
import "./index.css";
import { MovieAppContext } from "../../context/MovieApp";

const MovieAppInfo = () => {
  const { movies } = useContext(MovieAppContext);
  return (
    <div className="movie-app-info">
      <h2>Movie App Info:</h2>
      <div className="movie-app-info-item">
        <div>All Movies: {movies.length}</div>
        <div>Popular: {movies.filter((c) => c.favourite === true).length}</div>
        <div>Liked: </div>
      </div>
    </div>
  );
};

export default MovieAppInfo;
