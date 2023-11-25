import React from "react";
import Navbar from "./Navbar";
import Author from "./Author";

const Authors = ({ data }) => {
	return (
		<div>
			<Navbar />
			<div className="authors-div">
				<h1>Authors assoicated with Kluster Knowledge:</h1>
				<ul className="authors-list">
					{data.map((book) => (
						<li className="author-item">
							<h4>
								<Author key={book.id} name={book.authors} />
							</h4>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Authors;
