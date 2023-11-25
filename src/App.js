import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Books from "./components/Books";
import Authors from "./components/Authors";
import Cart from "./components/Cart";
import { API_URL } from "./API";
import axios from "axios";
import BookInfo from "./components/BookInfo";
import AuthorInfo from "./components/AuthorInfo";

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

	const [cart, setCart] = useState([]);
	console.log(cart);
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					{/* <Route path="/auth" element={<Authentication />} /> */}
					<Route path="/" element={<Home />} />
					<Route
						path="/books"
						element={<Books setCart={setCart} data={books} />}
					/>
					<Route path="/authors" element={<Authors data={books} />} />
					<Route
						path="/cart"
						element={<Cart cart={cart} setCart={setCart} />}
					/>
					<Route path="/bookinfo/:id" element={<BookInfo data={books} />} />
					<Route
						path="/authorinfo/:name"
						element={<AuthorInfo data={books} />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
