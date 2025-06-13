import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [cartItems, setCartItems] = useState([])


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  if (theme === "dark") {
    document.body.style.backgroundColor = "rgb(10 10 10)";
    document.body.style.color = "rgba(255, 255, 255, .95)";
  } else {
    document.body.style.backgroundColor = "rgba(255, 255, 255, .95)";
    document.body.style.color = "rgb(10 10 10)";
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, cartItems, setCartItems }}>
      {children}
    </ThemeContext.Provider>
  );
};
