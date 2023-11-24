import React from "react";
import Navbar from "./Navbar";
import { Image } from "semantic-ui-react";

const Home = () => {
	const featuredBooks = [
		{
			image: "../../public/images/alchemist.jpeg",
			title: "The Alchemist",
			author: "Paulo Coelho",
			description: `The Alchemist is a philosophical novel by Paulo Coelho that follows the journey of a shepherd named Santiago as he embarks on a quest for personal legend and discovers the transformative power of following one's dreams.`,
			price: "₹195",
			index: "1",
		},
		{
			image: "../../public/images/kiterunner.jpg",
			title: "Kite Runner",
			author: "Khaled Housseini",
			description: `"The Kite Runner" by Khaled Hosseini is a poignant novel that explores the complex relationships, redemption, and the impact of personal and political turmoil on the lives of two childhood friends in Afghanistan."`,
			price: "₹360",
			index: "2",
		},
		{
			image: "../../public/images/educated.jpg",
			title: "Educated",
			author: "Tara Westover",
			description: `"Educated" by Tara Westover is a compelling memoir depicting the author's journey from growing up in a strict and abusive household in rural Idaho with no formal education to ultimately earning a PhD from Cambridge University.`,
			price: "₹499",
			index: "3",
		},
		{
			image: "../../public/images/whatif.jpeg",
			title: "What If?",
			author: "Randall Munroe",
			description: `"What If?: Serious Scientific Answers to Absurd Hypothetical Questions" by Randall Munroe is a whimsical exploration of bizarre and outlandish questions with scientifically rigorous and humorous answers, blending creativity and physics.`,
			price: "₹320",
			index: "4",
		},
	];

	return (
		<>
			<div className="home_page">
				<Navbar />
				<div className="welcome">
					<h1>Welcome to Kluster Knowledge!</h1>
					<p>
						The one stop destination for everything about books and authors.
					</p>
				</div>
			</div>
			<div className="featured">
				<h1 className="featured_books">Featured Books</h1>
				<ul>
					{featuredBooks.map((featuredBook) => (
						<li key={featuredBook.index} className="featuredListItems">
							<Image src={featuredBook.image} alt="" />
							<h1>{featuredBook.title}</h1>
							<h3>{featuredBook.author}</h3>
							<p>{featuredBook.description}</p>
							<button className="add-button">ADD TO CART</button>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Home;
