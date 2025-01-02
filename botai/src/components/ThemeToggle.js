import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Switch } from "@mui/material";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Switch
      checked={darkMode}
      onChange={toggleTheme}
      inputProps={{ "aria-label": "theme toggle" }}
    />
  );
};

export default ThemeToggle;
