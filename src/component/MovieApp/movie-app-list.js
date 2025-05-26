import React, { useContext } from "react";
import MovieAppListItem from "./movie-app-list-item";
import { MovieAppContext } from "../../context/MovieApp";

const MovieAppList = () => {
  const { updatedMovies } = useContext(MovieAppContext);
  return (
    <div className="movie-app-list-items">
      {updatedMovies.length > 0 ? (
        updatedMovies.map((item) => <MovieAppListItem key={item.id} {...item} />)
      ) : (
        <div>No Movie Yet</div>
      )}
    </div>
  );
};

export default MovieAppList;
