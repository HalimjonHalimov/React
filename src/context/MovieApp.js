import { createContext, useReducer } from "react";
import { MovieAppListItems } from "../utils/movie-app-list";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  movies: [],
  term: "",
  category: "all",
};
// TODO   --- REDUCER FUNCTION  ---

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_MOVIES":
      return { ...state, movies: MovieAppListItems || null };
    case "ON_DELETE":
      return { ...state, movies: state.movies.filter((c) => c.id !== payload) };
    case "ON_TOGGLE":
      const { id, props } = payload;
      const newArr = state.movies.map((c) =>
        c.id === id ? { ...c, [props]: !c[props] } : c
      );
      return { ...state, movies: newArr };
    case "ON_FILTER":
      return { ...state, category: payload };
    case "ON_TERM":
      return { ...state, term: payload };
    case "ON_ADD_FORM":
      const { name, view } = payload;
      const updatedMovie = {
        id: uuidv4(),
        name,
        view,
        favorite: false,
        like: false,
      };
      return { ...state, movies: [...state.movies, updatedMovie] };
    default:
      return state;
  }
};

// TODO   --- CREATE CONTEXT ---
export const MovieAppContext = createContext();

export function MovieAppProvider({ children }) {
  // const [movies, setMovies] = useState(MovieAppListItems || null);
  // const [term, setTerm] = useState("");
  // const [category, setCategory] = useState("all");

  // TODO --- REDUCER ----

  const [state, dispatch] = useReducer(reducer, initialState);


  // TODO --- REDUCER ----

  // TODO --- Filter Movies ---
  // * ---  Search movies filter
  // const filteredMovies = onTermHandle(movies, term);

  // * ---  Sort with button 'all', 'popular', 'liked'  ---
  // const sortedMovies = onSortHandle(filteredMovies, category);

  // * ---  Add New Movie ---
  // const onAddHandle = (name, view) => {
  //   const updatedMovie = {
  //     id: view,
  //     name,
  //     view,
  //     favorite: false,
  //     like: false,
  //   };
  //   setMovies((prev) => [...prev, updatedMovie]);
  // };

  // TODO Handle Function
  // * --- Like handle function ---
  // const onLikedHandle = (id) => {
  //   const likedMovies = movies.map((item) =>
  //     item.id === id ? { ...item, like: !item.like } : item
  //   );
  //   setMovies(likedMovies);
  // };

  // * ---  Delete handle function ---
  // const onDeleteHandle = (id) => {
  //   const deletedMovie = movies.filter((c) => c.id !== id);
  //   setMovies(deletedMovie);
  // };

  // Todo ---  Add New Movie  ---

  return (
    <MovieAppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </MovieAppContext.Provider>
  );
}
