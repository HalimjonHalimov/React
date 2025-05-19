import { createContext } from "react";

export const MovieAppContext = createContext();

export function MovieAppProvider({ children }) {
  return (
    <MovieAppContext.Provider value={{}}>{children}</MovieAppContext.Provider>
  );
}
