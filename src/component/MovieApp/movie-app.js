import React, { useContext, useEffect } from "react";
import MovieAppInfo from "./movie-app-info";
import MovieAppSearch from "./movie-app-search";
import MovieAppFilter from "./movie-app-filter";
import MovieAppList from "./movie-app-list";
import MovieAppAdd from "./movie-app-add";

import "./index.css";
import { MovieAppContext } from "../../context/MovieApp";

const MovieApp = () => {
  const { dispatch } = useContext(MovieAppContext);

  useEffect(() => {
    dispatch({ type: "GET_MOVIES" });
  }, [dispatch]);

  return (
    <div className="movie-app">
      <div className="movie-app-container">
        <MovieAppInfo />
      </div>
      <div className="movie-app-container">
        <MovieAppSearch />
        <MovieAppFilter />
      </div>
      <div className="movie-app-container">
        <MovieAppList />
      </div>
      <div className="movie-app-container">
        {" "}
        <MovieAppAdd />
      </div>
    </div>
  );
};

export default MovieApp;
