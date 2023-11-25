import React from "react";
import { useParams } from "react-router-dom";

const AuthorInfo = ({ data }) => {
	const { id } = useParams();
	const filteredData = id
		? data.filter((data) => data.id === parseInt(id))
		: data;

	return (
		<div className="author-info">
			<h1>{filteredData[0].authors}</h1>
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
