import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { API_URL } from "../API";
import axios from "axios";

const Book = () => {
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
		<>
			<div className="books-page">
				<Navbar />
				<div className="books-list">
					{books.map((book) => (
						<div className="book-item" key={book.id}>
							<h2>{book.title}</h2>
							<img src={book.image_url} alt="" />
							<br />
							<button>ADD TO CART</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Book;
