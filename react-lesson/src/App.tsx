import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Router } from "react-router-dom";
import { Routing } from "./routes/Router";

function App() {
  const [count, setCount] = useState<number>(0);

	return (
		<div>
			<div>
				<h2 className="underline">都道府県</h2>
				<div className="p-4 bg-gray-200">
					{/* チェックボックス */}
				</div>
			</div>
			<Routing />
		</div>
	);
}

export default App;
