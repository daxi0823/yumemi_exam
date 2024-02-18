import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TotalPopulation } from "./components/TotalPopulationGraph";
import { YoungPopulation } from "./components/YoungPopulationGraph";
import { ElderlyPopulation } from "./components/ElderlyPopulationGraph";
import { ProductivePopulation } from "./components/ProductivePopulationGraph";
import { CheckboxPrefectures } from "./components/CheckboxPrefectures";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <BrowserRouter basename="/">
			<div>
				<h2 className="underline">都道府県</h2>
				<CheckboxPrefectures />
			</div>
			<Routes>
        <Route path='/' element={<TotalPopulation/>} />
        <Route path='young' element={<YoungPopulation />} />
        <Route path='elderly' element={<ElderlyPopulation />} />
        <Route path='productive' element={<ProductivePopulation />} />
			</Routes>
    </BrowserRouter>
  );
}

export default App;
