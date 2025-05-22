import { createContext, useEffect, useState } from "react";
import { MovieAppListItems } from "../utils/movie-app-list";

export const MovieAppContext = createContext();

export function MovieAppProvider({ children }) {
  const [movies, setMovies] = useState(MovieAppListItems || null);
  const [term, setTerm] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(term.toLowerCase())
  );
  useEffect(() => {
    setMovies(filteredMovies);
    console.log(filteredMovies.map((c) => c.name));
  }, [term]);

  return (
    <MovieAppContext.Provider value={{ movies, term, setTerm }}>
      {children}
    </MovieAppContext.Provider>
  );
}
