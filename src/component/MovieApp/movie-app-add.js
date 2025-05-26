import React, { useContext, useState } from "react";
import { MovieAppContext } from "../../context/MovieApp";

const MovieAppAdd = () => {
  const { setNewMovie } = useContext(MovieAppContext);
  const [movieInfo, setMovieInfo] = useState({
    movieName: "",
    movieView: "",
  });

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setMovieInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const reset = () => {
    setMovieInfo({
      movieName: "",
      movieView: "",
    });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    if (movieInfo.movieName && movieInfo.movieView) {
      setNewMovie(movieInfo);
      reset();
    }
  };

  return (
    <div className="movie-app-info">
      <h2>Add New Movie</h2>
      <form className="movie-app-add" onSubmit={submitHandle}>
        <label htmlFor="movie-name">
          <span> Movie Name:</span>
          <input
            onChange={onChangeHandle}
            type="text"
            name="movieName"
            id="movieName"
            placeholder="Please add movie name"
            value={movieInfo.movieName}
          />
          <input
            onChange={onChangeHandle}
            type="number"
            name="movieView"
            id="movieView"
            placeholder="Please add movie view"
            value={movieInfo.movieView}
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
