import React, { useContext, useState } from "react";
import { MovieAppContext } from "../../context/MovieApp";

const MovieAppSearch = () => {
  // const [term, setTern] = useState("");

  const { term, setTerm } = useContext(MovieAppContext);

  const handleChange = (e) => {
    setTerm(e.target.value);
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
