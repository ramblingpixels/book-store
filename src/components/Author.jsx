import React from "react";
import { Link } from "react-router-dom";

const Author = ({ name }) => {
	return (
		<div>
			<Link to={`/authorinfo/${name}`} className="author-links">
				<h1>{name}</h1>
			</Link>
		</div>
	);
};

export default Author;
