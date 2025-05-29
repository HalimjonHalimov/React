import React, { useContext } from "react";
import { MovieAppContext } from "../../context/MovieApp";

const MovieAppListItem = ({ id, name, view, like, favorite }) => {
  const { dispatch } = useContext(MovieAppContext);

  const onHandleToggle = (e) => {
    const payload = {
      id,
      props: e.currentTarget.getAttribute("data-toggle"),
    };
    dispatch({ type: "ON_TOGGLE", payload });
  };

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
            onClick={onHandleToggle}
            type="button"
            className={`movie-app-filter-button ${like && "active"}`}
            data-toggle="like"
          >
            Like
          </button>
          <button
            onClick={onHandleToggle}
            type="button"
            className={`movie-app-filter-button ${favorite && "active"}`}
            data-toggle="favorite"
          >
            favorite
          </button>
          <button
            onClick={() => {
              dispatch({ type: "ON_DELETE", payload: id });
            }}
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
