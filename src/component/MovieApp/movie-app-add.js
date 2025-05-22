import React from "react";

const MovieAppAdd = () => {
  return (
    <div className="movie-app-info">
      <h2>Add New Movie</h2>
      <form className="movie-app-add">
        <label htmlFor="movie-name">
          <span> Movie Name:</span>
          <input
            onChange={() => {}}
            type="text"
            name="movie-name"
            id="movie-name"
            placeholder="Please add movie name"
            value={""}
          />
        </label>
        <button type="submit" className="movie-app-filter-button">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default MovieAppAdd;
