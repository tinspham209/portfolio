import React from "react";
import "./style.css";

const getPosts = () => {
	let json = {
		posts: [
			{
				id: 1,
				title: "COVID-19 Tracker Web Application",
				description:
					"Display Infected, Recovered, Deaths of 215 another countries",
				imgSrc:
					"https://camo.githubusercontent.com/7163876c7908470d506bb8643a207e7bdbad90fb/68747470733a2f2f692e696d6775722e636f6d2f337235594478452e706e67",
				imgAlt: "corona-tracker",
			},
			{
				id: 2,
				title: "Voice Controlled Read News",
				description:
					"Using Voice Assistant to choose type of news, and Voice Assistant read headline of news",
				imgSrc:
					"https://camo.githubusercontent.com/e2e5b167c85cd560ffe8eca0ed1b0c223396fe40/68747470733a2f2f692e696d6775722e636f6d2f44485a774d54312e706e67",
				imgAlt: "Alan-AI",
			},
			{
				id: 3,
				title: "Zoom Clone Web Application",
				description:
					"Allow others to stream their video, audio, chat in real-time",
				imgSrc:
					"https://camo.githubusercontent.com/1233b7d90a0df80604aed0d5c315d63b973f0eef/68747470733a2f2f692e696d6775722e636f6d2f70676d543854522e706e67",
				imgAlt: "Zoom-Clone",
			},
		],
	};
	return json.posts;
};

const Post = () => {
	const posts = getPosts();
	return (
		<React.Fragment>
			<h3 style={{ textAlign: "center" }}>Some of my past projects</h3>
			<div className="post-wrapper">
				{posts.map((post) => {
					return (
						<div>
							<div className="post">
								<img
									className="post-thumbnail"
									src={post.imgSrc}
									alt={post.imgAlt}
								/>
								<div className="post-preview">
									<h6 className="post-title">{post.title}</h6>
									<p className="post-intro">{post.description}</p>
									<a href="#">Read More</a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</React.Fragment>
	);
};

export default Post;
