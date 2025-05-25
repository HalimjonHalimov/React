import React, { useContext } from "react";
import { MovieAppContext } from "../../context/MovieApp";

const MovieAppListItem = ({ id, name, view, like }) => {
  const { onLikedHandle, onDeleteHandle } = useContext(MovieAppContext);
  return (
    <div className="movie-app-list-item">
      <div className="start">
        <div>{id}</div>
        <div>{name}</div>
      </div>
      <div className="end">
        <div>{view}</div>
        <div className="buttons">
          <button
            onClick={() => onLikedHandle(id)}
            type="button"
            className={`movie-app-filter-button ${like && "active"}`}
          >
            Like
          </button>
          <button
            onClick={() => onDeleteHandle(id)}
            type="button"
            className="movie-app-filter-button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieAppListItem;
