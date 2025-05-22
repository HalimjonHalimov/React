import React, { useState, useContext } from "react";
import { MovieAppContext } from "../../context/MovieApp";

const MovieAppFilter = () => {
  const [active, setActive] = useState(false);
  const { onSortedHandle } = useContext(MovieAppContext);

  return (
    <div className="movie-app-filter-buttons">
      {button &&
        button.map((item) => (
          <button
            onClick={() => onSortedHandle(item.category)}
            type="button"
            key={item.id}
            className={`${
              active === true
                ? "movie-app-filter-button active"
                : "movie-app-filter-button"
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
