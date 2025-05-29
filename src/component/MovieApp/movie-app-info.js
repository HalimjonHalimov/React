import React, { useContext } from "react";
import "./index.css";
import { MovieAppContext } from "../../context/MovieApp";

const MovieAppInfo = () => {
  const { state } = useContext(MovieAppContext);
  const { movies } = state;
  return (
    <div className="movie-app-info">
      <h2>Movie App Info:</h2>
      <div className="movie-app-info-item">
        <div>All Movies: {movies.length}</div>
        <div>Popular: {movies.filter((c) => c.favorite === true).length}</div>
        <div>Liked: {movies.filter((c) => c.like === true).length}</div>
      </div>
    </div>
  );
};

export default MovieAppInfo;
