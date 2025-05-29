import { useContext } from "react";
import { MovieAppContext } from "../../context/MovieApp";

const MovieAppSearch = () => {
  const { state, dispatch } = useContext(MovieAppContext);
  const { term } = state;
  
  const handleChange = (e) => {
    dispatch({ type: "ON_TERM", payload: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
