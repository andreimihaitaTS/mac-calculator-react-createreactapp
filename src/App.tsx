import { StrictMode } from "react";
import { render } from "react-dom";
import Calculator from "./Calculator";

const App = () => {
  return (
    <main className="container">
      <Calculator />
    </main>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
