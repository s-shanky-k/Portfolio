import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbarcopy from "./components/Navbar-copy";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 2500);
	}, []);

	return (
		<div id="app" className="theme">
			{loading ? (
				<Loader />
			) : (
				<BrowserRouter>
					<Navbarcopy />
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</BrowserRouter>
			)}
		</div>
	);
}

export default App;
