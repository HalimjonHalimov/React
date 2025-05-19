import React, { useState } from "react";

const button = [
  {
    id: 1,
    category: "All",
    label: "All",
  },
  {
    id: 2,
    category: "Popular",
    label: "Popular",
  },
  {
    id: 3,
    category: "Liked",
    label: "Liked",
  },
];

const MovieAppFilter = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="movie-app-filter-buttons">
      {button &&
        button.map((item) => (
          <button
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
