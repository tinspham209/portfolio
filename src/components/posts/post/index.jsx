import React from "react";
import "./style.css";
const Post = ({ id, imgSrc, imgAlt, title, description, link }) => {
	return (
		<div key={id}>
			<div className="post">
				<img className="post-thumbnail" src={imgSrc} alt={imgAlt} />
				<div className="post-preview">
					<h6 className="post-title">{title}</h6>
					<p className="post-intro">{description}</p>
					<a href={link}>Read More</a>
				</div>
			</div>
		</div>
	);
};

export default Post;
