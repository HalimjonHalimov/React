import React, { useContext } from "react";
import MovieAppListItem from "./movie-app-list-item";
import { MovieAppContext } from "../../context/MovieApp";

const MovieAppList = () => {
  const { sortedMovies } = useContext(MovieAppContext);
  return (
    <div className="movie-app-list-items">
      {sortedMovies.length > 0 ? (
        sortedMovies.map((item) => <MovieAppListItem key={item.id} {...item} />)
      ) : (
        <div>No Movie Yet</div>
      )}
    </div>
  );
};

export default MovieAppList;
