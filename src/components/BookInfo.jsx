import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const BookInfo = ({ data }) => {
	const { id } = useParams();
	const filteredData = id
		? data.filter((data) => data.id === parseInt(id))
		: data;

	console.log(filteredData);

	return (
		<div>
			<Navbar />
			<div className="book-info">
				<img
					src={filteredData[0].image_url}
					alt=""
					width="250px"
					height="400px"
				/>
				<h1>{filteredData[0].title}</h1>
				<h3>{filteredData[0].authors}</h3>
				<p>{filteredData[0].description}</p>
			</div>
		</div>
	);
};

export default BookInfo;
