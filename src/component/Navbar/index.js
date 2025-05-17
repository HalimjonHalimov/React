import React, { useContext } from "react";
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
      <div>{user && `${user.name} Welcome to my chanel`}</div>
      <div>
        {isAuthenticated ? (
          <>
            <h2>Welcome, {user.name}</h2>
            <button onClick={logout}>Log out</button>
          </>
        ) : (
          <>
            <p>Please log in</p>
            <button onClick={() => login({ name: "Humid" })}>Log in</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
