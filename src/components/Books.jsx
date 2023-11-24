import React from "react";
import Navbar from "./Navbar";
import Book from "./Book";
// import { commerce } from "./lib/commerce";

const Books = () => {
	return (
		<>
			<div className="books-page">
				<Navbar className="navbar-d" />
				<Book />
			</div>
		</>
	);
};

export default Books;
