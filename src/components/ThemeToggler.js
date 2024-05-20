// src/components/ThemeToggler.js
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./ThemeToggler.css";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="toggle-container" onClick={toggleTheme}>
      <div className={`toggle-circle ${theme}`} />
    </div>
  );
};

export default ThemeToggler;

// // src/ThemeToggler.js
// import React, { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";

// const ThemeToggler = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <button onClick={toggleTheme}>
//       Switch to {theme === "light" ? "dark" : "light"} mode
//     </button>
//   );
// };

// export default ThemeToggler;
