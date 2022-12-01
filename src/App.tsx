import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./CSS/App.css";

import Header from "./components/persistent/Header";
import HomePage from "./components/HomePage";
import Education from "./components/Education";
import Career from "./components/Career";
import Miscellaneous from "./components/Miscellaneous";

import ErrorHandler from "./components/persistent/ErrorHandler";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/education" element={<Education />} />
					<Route path="/career" element={<Career />} />
					<Route path="/misc" element={<Miscellaneous />} />
					<Route path="/*" element={<ErrorHandler error={null} />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
