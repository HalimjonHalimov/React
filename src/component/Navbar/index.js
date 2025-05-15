import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, isAuthenticated, login, logout } = useContext(AuthContext);

  return (
    <div>
      Navbar
      {theme}
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div>
        Hello {user === true ? "True" : "False"}
        <button onClick={logout}>Toggle Theme</button>
      </div>
      <div>
        {isAuthenticated ? (
          <>
            <h2>Welcome, {user.name}</h2>
            <button onClick={logout}>Log out</button>
          </>
        ) : (
          <>
            <p>Please log in</p>
            <button onClick={() => login({ name: "Hamid" })}>Log in</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
