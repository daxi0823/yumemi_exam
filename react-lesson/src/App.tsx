import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState <number> (0);

  return (
    <BrowserRouter basename="/app">
      <div>
      </div>
    </BrowserRouter>
  );
}

export default App;
