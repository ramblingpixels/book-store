import React, { useState } from "react";
import { FlexGrid } from "./styled";
import Navbar from "./Navbar";
import Book from "./Book";

const Books = ({ data, setCart }) => {
	const [rating, setRating] = useState(0);
	const [genre, setGenre] = useState("Fantasy");

	const filteredData = rating
		? data.filter(
				(data) =>
					data.rating >= parseInt(rating) &&
					data.genres.split(",").includes(genre)
		  )
		: data;

	console.log(filteredData);
	const handleAddToCart = (book) => {
		setCart((existingCart) => [...existingCart, book]);
	};
	return (
		<>
			<div className="books-page">
				<Navbar className="navbar" />

				<div className="filter">
					<div>
						<label className="filter-rating">Filter books by rating: </label>
						<select
							onChange={(e) => {
								console.log(e.target.value);
								setRating(e.target.value);
							}}
							name="books"
							id="myBooks"
							form="bookform"
						>
							<option value="0">0 and above</option>
							<option value="1">1 and above</option>
							<option value="2">2 and above</option>
							<option value="3">3 and above</option>
							<option value="4">4 and above</option>
						</select>
					</div>
					<div>
						<label className="filter-genre">Filter books by genre: </label>
						<select
							onChange={(e) => {
								console.log(e.target.value);
								setGenre(e.target.value);
							}}
							name="books"
							id="myBooks"
							form="bookform"
						>
							<option value="Fantasy">Fantasy</option>
							<option value="Fiction">Fiction</option>
							<option value="Classics">Classics</option>
							<option value="Historical">Historical</option>
							<option value="Romance">Romance</option>
							<option value="Paranormal">Paranormal</option>
						</select>
					</div>

					<br />
				</div>

				<FlexGrid>
					{filteredData.map((book) => (
						<>
							<Book
								setCart={setCart}
								key={book.id}
								id={book.id}
								name={book.title}
								author={book.author}
								image_url={book.image_url}
								description={book.description}
							/>
							<button
								onClick={() => {
									handleAddToCart(book);
								}}
								className="add-button"
							>
								ADD TO CART
							</button>
						</>
					))}
				</FlexGrid>
			</div>
		</>
	);
};

export default Books;
