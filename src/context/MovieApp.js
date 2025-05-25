import { createContext, useState } from "react";
import { MovieAppListItems } from "../utils/movie-app-list";
import { onTermHandle } from "../helper/term";
import { onSortHandle } from "../helper/sort";

export const MovieAppContext = createContext();

export function MovieAppProvider({ children }) {
  const [movies, setMovies] = useState(MovieAppListItems || null);
  const [term, setTerm] = useState("");
  const [category, setCategory] = useState("all");

  // TODO --- Filter Movies ---
  // * ---  Search movies filter
  const filteredMovies = onTermHandle(movies, term);

  // * ---  Sort with button 'all', 'popular', 'liked'  ---
  const sortedMovies = onSortHandle(filteredMovies, category);

  // TODO Handle Function
  // * --- Like handle function ---
  const onLikedHandle = (id) => {
    const likedMovies = movies.map((item) =>
      item.id === id ? { ...item, like: !item.like } : item
    );
    setMovies(likedMovies);
  };

  // * ---  Delete handle function ---
  const onDeleteHandle = (id) => {
    const deletedMovie = movies.filter((c) => c.id !== id);
    setMovies(deletedMovie);
  };

  return (
    <MovieAppContext.Provider
      value={{
        movies,
        term,
        setTerm,
        category,
        setCategory,
        onLikedHandle,
        onDeleteHandle,
        sortedMovies,
      }}
    >
      {children}
    </MovieAppContext.Provider>
  );
}
