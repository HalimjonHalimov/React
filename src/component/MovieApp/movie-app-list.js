import React, { useContext } from "react";
import MovieAppListItem from "./movie-app-list-item";
import { MovieAppContext } from "../../context/MovieApp";
import { onTermHandle } from "../../helper/term";
import { onSortHandle } from "../../helper/sort";

const MovieAppList = () => {
  const { state } = useContext(MovieAppContext);

  const { movies, term, category } = state;

  // TODO --- Filter Movies ---
  const data = onSortHandle(onTermHandle(movies, term), category);

  return (
    <div className="movie-app-list-items">
      {data.length > 0 ? (
        data.map((item) => <MovieAppListItem key={item.id} {...item} />)
      ) : (
        <div>No Movie Yet</div>
      )}
    </div>
  );
};

export default MovieAppList;
