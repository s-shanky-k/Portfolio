import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbarcopy from "./components/Navbar-copy";

function App() {
	return (
		<div id="app" className="theme">
			<BrowserRouter>
				<Navbarcopy />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
