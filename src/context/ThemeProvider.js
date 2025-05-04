import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "light", // Default theme
  setTheme: () => {}, // Placeholder function
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); // Default theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


