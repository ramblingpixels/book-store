import React from "react";
import Navbar from "./Navbar";
import Author from "./Author";

const Authors = ({ data }) => {
	return (
		<div>
			<Navbar />
			<ul>
				{data.map((book) => (
					<li className="author-item">
						<h4>
							<Author key={book.id} name={book.authors} />
						</h4>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Authors;
