import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";

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
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="*" element={<Navigate replace to="/" />} />
					</Routes>
				</BrowserRouter>
			)}
		</div>
	);
}

export default App;
