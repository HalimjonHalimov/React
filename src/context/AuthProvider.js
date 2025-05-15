// eslint-disable-next-line no-unused-vars
import { createContext, use, useEffect, useReducer, useState } from "react";

export const AuthContext = createContext({
  auth: false,
  setAuth: () => {},
});

// INITIAL STATE

const initialState = {
  isLoading: false,
  user: null,
  isAuthenticated: false,
};

//  REDUCER FUNCTION

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        user: payload,
        isLoading: false,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isLoading: false,
        isAuthenticated: false,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export function AuthProvider({ children }) {
  // USE REDUCER
  const [state, dispatch] = useReducer(reducer, initialState);

  // LOG IN FUNCTION

  const login = (UserData) => {
    dispatch({ type: "LOGIN", payload: UserData });
  };

  //  LOG OUT FUNCTION

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
