import React from "react";

const MovieAppListItem = ({ id, name, view, favourite, like }) => {
  return (
    <div className="movie-app-list-item">
      <div className="start">
        <div>{id}</div>
        <div>{name}</div>
      </div>
      <div className="end">
        <div>{view}</div>
        <div className="buttons">
          <button type="button" className="movie-app-filter-button">Like</button>
          <button type="button" className="movie-app-filter-button">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MovieAppListItem;
