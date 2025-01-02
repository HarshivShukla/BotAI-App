import React, { createContext, useState } from "react";

// Create a context for theme
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Default theme is light mode
  const [darkMode, setDarkMode] = useState(false);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle the theme
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children} {/* Provide the theme context to children */}
    </ThemeContext.Provider>
  );
};
