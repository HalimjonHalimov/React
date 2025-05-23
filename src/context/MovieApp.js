import { createContext, useEffect, useState } from "react";
import { MovieAppListItems } from "../utils/movie-app-list";
import { onTermHandle } from "../helper/term";
import { onSortHandle } from "../helper/sort";

export const MovieAppContext = createContext();

export function MovieAppProvider({ children }) {
  const [movies, setMovies] = useState(MovieAppListItems || null);
  const [term, setTerm] = useState("");

  const onSortedHandle = (category) => {
    const sortedMovies = onSortHandle(MovieAppListItems, category);
    setMovies(sortedMovies);
  };

  const filteredMovies = onTermHandle(MovieAppListItems, term);
  useEffect(() => {
    setMovies(filteredMovies);
  }, [term]);

  return (
    <MovieAppContext.Provider value={{ movies, term, setTerm, onSortedHandle }}>
      {children}
    </MovieAppContext.Provider>
  );
}
