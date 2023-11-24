import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Books from "./components/Books";
import Authors from "./components/Authors";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					{/* <Route path="/auth" element={<Authentication />} /> */}
					<Route path="/" element={<Home />} />
					<Route path="/books" element={<Books />} />
					<Route path="/authors" element={<Authors />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
