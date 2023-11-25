import React from "react";
import { useParams } from "react-router-dom";

const AuthorInfo = ({ data }) => {
	const { name } = useParams();

	const filteredData = name ? data.filter((data) => data.name === name) : data;

	console.log(filteredData);

	return (
		<div className="author-info">
			<h1>{name}</h1>
			<img
				src={filteredData[0].image_url}
				alt=""
				width="250px"
				height="400px"
			/>
		</div>
	);
};

export default AuthorInfo;
