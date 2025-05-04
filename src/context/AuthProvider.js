// eslint-disable-next-line no-unused-vars
import { createContext, useState } from "react";

export const AuthContext = createContext({
  auth: false,
  setAuth: () => {},
});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);

  const logout = () => {
    setAuth((prev) => !auth);
  };
  return (
    <AuthContext.Provider value={{ auth, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
