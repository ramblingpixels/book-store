import React, { useState } from "react";
import { FlexGrid } from "./styled";
import Navbar from "./Navbar";
import Book from "./Book";

const Books = ({ data }) => {
	const filterBooks = () => {
		var rating = document.getElementById("myBooks").value;
		console.log(rating);
	};

	return (
		<>
			<div className="books-page">
				<Navbar className="navbar-d" />

				<div className="filter">
					<label for="books">Filter books by rating: </label>
					<select name="books" id="myBooks" form="bookform">
						<option value="0">0 and above</option>
						<option value="1">1 and above</option>
						<option value="2">2 and above</option>
						<option value="3">3 and above</option>
						<option value="4">4 and above</option>
					</select>
					<br />
					<button onClick={filterBooks}>Filter</button>
				</div>

				<FlexGrid>
					{data.map((book) => (
						<Book
							key={book.id}
							id={book.id}
							name={book.title}
							author={book.author}
							image_url={book.image_url}
							description={book.description}
						/>
					))}
				</FlexGrid>
			</div>
		</>
	);
};

export default Books;
