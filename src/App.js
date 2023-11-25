import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Books from "./components/Books";
import Authors from "./components/Authors";
import Cart from "./components/Cart";
import { API_URL } from "./API";
import axios from "axios";

function App() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		axios
			.get(API_URL)
			.then((res) => {
				console.log(res.data);
				setBooks(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					{/* <Route path="/auth" element={<Authentication />} /> */}
					<Route path="/" element={<Home />} />
					<Route path="/books" element={<Books data={books} />} />
					<Route path="/authors" element={<Authors data={books} />} />
					<Route path="/cart" element={<Cart />} />
					{/* <Route path="/bookinfo/:id" element={<Book />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
