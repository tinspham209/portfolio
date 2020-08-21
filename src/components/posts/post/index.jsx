import React from "react";
import "./style.css";
const Post = ({ id, imgSrc, imgAlt, title, description, link }) => {
	return (
		<div>
			<div className="post" key={id}>
				<img className="post__thumbnail" src={imgSrc} alt={imgAlt} />
				<div className="post__preview">
					<h6 className="post__title">{title}</h6>
					<p className="post__description">{description}</p>
					<a href={link}>Read More</a>
				</div>
			</div>
		</div>
	);
};

export default Post;
