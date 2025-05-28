import React, { useContext } from "react";
import "./index.css";
import { MovieAppContext } from "../../context/MovieApp";

const MovieAppInfo = () => {
  const { state } = useContext(MovieAppContext);

  return (
    <div className="movie-app-info">
      <h2>Movie App Info:</h2>
      <div className="movie-app-info-item">
        <div>All Movies: {state.movies.length}</div>
        <div>
          Popular: {state.movies.filter((c) => c.favourite === true).length}
        </div>
        <div>Liked: </div>
      </div>
    </div>
  );
};

export default MovieAppInfo;
