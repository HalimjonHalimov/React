import { createContext, useReducer, useState } from "react";
import { MovieAppListItems } from "../utils/movie-app-list";
import { onTermHandle } from "../helper/term";
import { onSortHandle } from "../helper/sort";

const initialState = {
  movies: [],
  term: "",
  category: "all",
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_MOVIES":
      console.log(state);
      console.log(payload);

      return { ...state, movies: MovieAppListItems || null };

    default:
      return;
  }
};

export const MovieAppContext = createContext();

export function MovieAppProvider({ children }) {
  const [movies, setMovies] = useState(MovieAppListItems || null);
  const [term, setTerm] = useState("");
  const [category, setCategory] = useState("all");

  // TODO --- REDUCER ----

  const [state, dispatch] = useReducer(reducer, initialState);

  // TODO --- REDUCER ----

  // TODO --- Filter Movies ---
  // * ---  Search movies filter
  const filteredMovies = onTermHandle(movies, term);

  // * ---  Sort with button 'all', 'popular', 'liked'  ---
  const sortedMovies = onSortHandle(filteredMovies, category);

  // * ---  Add New Movie ---
  const onAddHandle = (name, view) => {
    const updatedMovie = {
      id: view,
      name,
      view,
      favorite: false,
      like: false,
    };
    setMovies((prev) => [...prev, updatedMovie]);
  };

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

  // Todo ---  Add New Movie  ---

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
        onAddHandle,
        state,
        dispatch,
      }}
    >
      {children}
    </MovieAppContext.Provider>
  );
}
