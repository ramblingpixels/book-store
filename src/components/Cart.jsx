import React from "react";
import Navbar from "./Navbar";

const Cart = ({ cart, setCart }) => {
	const cartLength = cart.length;

	const handleRemoveCart = (id) => {
		setCart((currentCart) => currentCart.filter((item) => item.id !== id));
	};

	return (
		<div>
			<Navbar />
			<div className="cart-list">
				{cart.map((cart) => (
					<div>
						<h1>{cart.title}</h1>
						<img src={cart.image_url} alt="" width="150px" height="250" />{" "}
						<br />
						<button
							onClick={() => {
								handleRemoveCart(cart.id);
							}}
						>
							REMOVE FROM CART
						</button>
					</div>
				))}
			</div>
			<p className="total-price">Total Price: ₹{100 * cartLength}</p>
		</div>
	);
};

export default Cart;
