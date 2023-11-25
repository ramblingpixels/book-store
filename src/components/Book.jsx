import React from "react";
import { Link } from "react-router-dom";

const Book = ({ key, id, name, image_url }) => {
	return (
		<>
			<div className="books-page">
				<div className="books-list">
					<div className="book-item" key={key}>
						<h2>{name}</h2>
						<img src={image_url} alt="" />
						<br />
						<Link to={`/bookinfo/${id}`}>Read more</Link>
						<br />
						<button>ADD TO CART</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Book;
