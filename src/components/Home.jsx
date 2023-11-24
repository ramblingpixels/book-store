import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="buttons">
			<nav>
				<div className="store_name">
					<h1>KlusterKnowledge</h1>
				</div>
				<div className="nav_links">
					<Link to="/" className="">
						Home
					</Link>
					<Link to="/books" className="">
						Books
					</Link>
					<Link to="/authors" className="">
						Authors
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Home;
