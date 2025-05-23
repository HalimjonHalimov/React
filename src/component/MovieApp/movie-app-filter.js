import React, { useState, useContext } from "react";
import { MovieAppContext } from "../../context/MovieApp";

const MovieAppFilter = () => {
  const [active, setActive] = useState("all");
  const { onSortedHandle } = useContext(MovieAppContext);

  const handleClick = (category) => {
    setActive(category);
    onSortedHandle(category);
  };

  return (
    <div className="movie-app-filter-buttons">
      {button &&
        button.map((item) => (
          <button
            onClick={() => handleClick(item.category)}
            type="button"
            key={item.id}
            className={`movie-app-filter-button ${
              active === item.category ? "active" : ""
            }`}
          >
            {item.label}
          </button>
        ))}
    </div>
  );
};

export default MovieAppFilter;

const button = [
  {
    id: 1,
    category: "all",
    label: "All",
  },
  {
    id: 2,
    category: "popular",
    label: "Popular",
  },
  {
    id: 3,
    category: "like",
    label: "Liked",
  },
];
