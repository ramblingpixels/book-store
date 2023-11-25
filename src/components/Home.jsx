import React from "react";
import Navbar from "./Navbar";
import { Image } from "semantic-ui-react";

const Home = () => {
	const featuredBooks = [
		{
			image: "https://images.gr-assets.com/books/1447303603l/2767052.jpg",
			title: "The Hunger Games",
			author: "Suzanne Collins",
			description: `"The Hunger Games" by Suzanne Collins is a dystopian novel that follows the story of Katniss Everdeen as she navigates a televised fight to the death in a post-apocalyptic world, exploring themes of survival, sacrifice, and rebellion.`,
			price: "₹195",
			index: "1",
		},
		{
			image: "https://images.gr-assets.com/books/1345958969l/128029.jpg",
			title: "Kite Runner",
			author: "Khaled Housseini",
			description: `"The Kite Runner" by Khaled Hosseini is a poignant novel that explores the complex relationships, redemption, and the impact of personal and political turmoil on the lives of two childhood friends in Afghanistan."`,
			price: "₹360",
			index: "2",
		},
		{
			image: "https://images.gr-assets.com/books/1361975680l/2657.jpg",
			title: "To Kill a Mockingbird",
			author: "Harper Lee",
			description: `"To Kill a Mockingbird" by Harper Lee is a classic novel that addresses racial injustice in the American South through the eyes of Scout Finch, a young girl, as her father, lawyer Atticus Finch, defends a black man wrongly accused of rape.`,
			price: "₹499",
			index: "3",
		},
		{
			image: "https://images.gr-assets.com/books/1361039443l/41865.jpg",
			title: "Twilight",
			author: "Stephenie Meyer",
			description: `
			"Twilight" by Stephenie Meyer is a paranormal romance novel that revolves around the complicated love story between a teenage girl, Bella Swan, and a vampire, Edward Cullen, blending romance, fantasy, and suspense.`,
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
							<Image
								src={featuredBook.image}
								alt=""
								width="250px"
								height="400px"
							/>
							<h1>{featuredBook.title}</h1>
							<h3>{featuredBook.author}</h3>
							<p>{featuredBook.description}</p>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Home;
