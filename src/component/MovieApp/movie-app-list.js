import React from "react";
import { MovieAppListItems } from "../../utils/movie-app-list";
import MovieAppListItem from "./movie-app-list-item";

const MovieAppList = () => {
  return (
    <div className="movie-app-list-items">
      {MovieAppListItems.length > 0 ? (
        MovieAppListItems.map((item) => (
          <MovieAppListItem key={item.id} {...item} />
        ))
      ) : (
        <div>No Movie Yet</div>
      )}
    </div>
  );
};

export default MovieAppList;
