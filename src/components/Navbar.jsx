import React from "react";
import { Link } from "react-router-dom";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

const Navbar = () => {
	return (
		<div>
			<nav>
				<div className="store_name">
					<h1>Kluster Knowledge</h1>
				</div>
				<div className="nav_links">
					<Link to="/" className="nav-links">
						Home
					</Link>
					<Link to="/books" className="nav-links">
						Books
					</Link>
					<Link to="/authors" className="nav-links">
						Authors
					</Link>
					<Link to="/cart" className="nav-links">
						<IconButton aria-label="Show cart items" className="cart_icon">
							<Badge
								overlap="rectangular"
								// badgeContent={totalItems}
								color="secondary"
							>
								<ShoppingCart />
							</Badge>
						</IconButton>
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
