import React, { useContext, useState } from "react";
import { MovieAppContext } from "../../context/MovieApp";

const MovieAppAdd = () => {
  const { setNewMovie } = useContext(MovieAppContext);
  const [movieInfo, setMovieInfo] = useState({
    name: "",
    view: "",
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
      name: "",
      view: "",
    });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    if (movieInfo.name !== "" && movieInfo.view !== "") {
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
            name="name"
            id="name"
            placeholder="Please add movie name"
            value={movieInfo.name}
            required
          />
          <input
            onChange={onChangeHandle}
            type="number"
            name="view"
            id="view"
            placeholder="Please add movie view"
            value={movieInfo.view}
            required
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
