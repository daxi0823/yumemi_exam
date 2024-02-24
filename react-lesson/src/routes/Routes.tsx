import { Routes, Route } from "react-router-dom";
import { TotalPopulation } from "../pages/TotalPopulationGraph";
import { YoungPopulation } from "../pages/YoungPopulationGraph";
import { ElderlyPopulation } from "../pages/ElderlyPopulationGraph";
import { ProductivePopulation } from "../pages/ProductivePopulationGraph";

export const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<TotalPopulation />} />
			<Route path="young" element={<YoungPopulation />} />
			<Route path="elderly" element={<ElderlyPopulation />} />
			<Route path="productive" element={<ProductivePopulation />} />
		</Routes>
	)
}
