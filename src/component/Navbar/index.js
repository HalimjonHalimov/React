import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { auth, logout } = useContext(AuthContext);

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  return (
    <div>
      Navbar
      {theme}
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div>
        Hello {auth === true ? "True" : "False"}
        <button onClick={logout}>Toggle Theme</button>
      </div>
    </div>
  );
};

export default Navbar;
