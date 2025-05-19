import React, { useState } from "react";

const MovieAppSearch = () => {
  const [term, setTern] = useState("");

  const handleChange = (e) => {
    setTern(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(term);
  };

  return (
    <form className="movie-app-search" action="#" onSubmit={handleSubmit}>
      <input
        type="text"
        name=""
        placeholder="Search"
        className=""
        onChange={handleChange}
        value={term}
      />
    </form>
  );
};

export default MovieAppSearch;
