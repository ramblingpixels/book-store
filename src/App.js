import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Books from "./components/Books";
import Authors from "./components/Authors";
import Cart from "./components/Cart";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					{/* <Route path="/auth" element={<Authentication />} /> */}
					<Route path="/" element={<Home />} />
					<Route path="/books" element={<Books />} />
					<Route path="/authors" element={<Authors />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
