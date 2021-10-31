import { StrictMode, useState } from "react";
import { render } from "react-dom";
import Calculator from './Calculator';
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
       <main className="container">
            <Calculator />
        </main>
    </ThemeContext.Provider>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
