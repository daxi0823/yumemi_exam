import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Router } from "react-router-dom";
import { Routing } from "./routes/Routes"

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <div>
        <h2>都道府県</h2>
        <div>{/* チェックボックス */}</div>
      </div>
			<Routing />
    </div>
  );
}

export default App;
