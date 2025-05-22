import React, { useContext } from "react";
import MovieAppListItem from "./movie-app-list-item";
import { MovieAppContext } from "../../context/MovieApp";

const MovieAppList = () => {
  const { movies } = useContext(MovieAppContext);
  return (
    <div className="movie-app-list-items">
      {movies.length > 0 ? (
        movies.map((item) => <MovieAppListItem key={item.id} {...item} />)
      ) : (
        <div>No Movie Yet</div>
      )}
    </div>
  );
};

export default MovieAppList;
