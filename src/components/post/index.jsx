import React from "react";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
				link: "https://github.com/tinspham209/react-corona-tracker-v2",
			},
			{
				id: 2,
				title: "Voice Controlled Read News",
				description:
					"Using Voice to choose type of news, and Voice Assistant read the headline of news",
				imgSrc:
					"https://camo.githubusercontent.com/e2e5b167c85cd560ffe8eca0ed1b0c223396fe40/68747470733a2f2f692e696d6775722e636f6d2f44485a774d54312e706e67",
				imgAlt: "Alan-AI",
				link: "https://github.com/tinspham209/react_alan_AI_news_application",
			},
			{
				id: 3,
				title: "Zoom Clone Web Application",
				description:
					"Allow others to stream their video, audio, chat in real-time",
				imgSrc:
					"https://camo.githubusercontent.com/1233b7d90a0df80604aed0d5c315d63b973f0eef/68747470733a2f2f692e696d6775722e636f6d2f70676d543854522e706e67",
				imgAlt: "Zoom-Clone",
				link: "https://github.com/tinspham209/zoom-clone-expressjs",
			},
			{
				id: 4,
				title: "Travelix Web Application",
				description: "Hotel Booking Website with M.E.R.N stack",
				imgSrc: "https://i.imgur.com/pdY5gOU.png",
				imgAlt: "travelix",
				link: "https://github.com/tinspham209/React-Travelix",
			},
			{
				id: 5,
				title: "Snake Game",
				description: "Building Snake Game with Python & pygame",
				imgSrc:
					"https://camo.githubusercontent.com/c0ee6713facd9a8dfb79001fc4ac3bc993cee95a/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f58793737316a6b59306e676f314e7866766a2f67697068792e676966",
				imgAlt: "snake-game",
				link: "https://github.com/tinspham209/python-snake-game",
			},
			{
				id: 6,
				title: "Realtime Chat Application",
				description: "Realtime Chat with React, Express, Socket.io",
				imgSrc:
					"https://camo.githubusercontent.com/199786d31f3d439333ec4aa8bd6f0cdeaead868e/68747470733a2f2f692e696d6775722e636f6d2f594550474c55562e706e67",
				imgAlt: "realtime-chat",
				link: "https://github.com/tinspham209/realtime-chat-application-react",
			},
			{
				id: 7,
				title: "Instagram Clone Web Application",
				description: "Building with React, Material-UI, Firebase",
				imgSrc:
					"https://camo.githubusercontent.com/9e8b1e065bb4274a13ce10f26742c60fd6fcace7/68747470733a2f2f692e696d6775722e636f6d2f63704a5158556b2e706e67",
				imgAlt: "insta-clone",
				link: "https://github.com/tinspham209/insta-clone-react",
			},
			{
				id: 8,
				title: "Photo App",
				description: "show Photos and edit photo with React & Redux",
				imgSrc:
					"https://camo.githubusercontent.com/8675cd40c4886972ad1e57b89054cad2130e7f9a/68747470733a2f2f692e696d6775722e636f6d2f305071426555332e706e67",
				imgAlt: "redux-photo-app",
				link: "https://github.com/tinspham209/redux-photo-app",
			},
			{
				id: 9,
				title: "Yelp Clone",
				description: "Yelp Clone with P.E.R.N stack",
				imgSrc:
					"https://camo.githubusercontent.com/7da4c4036e351e47c166b19d542fdb0b220bdf67/68747470733a2f2f692e696d6775722e636f6d2f4f6e61703343672e706e67",
				imgAlt: "yelp-clone",
				link: "https://github.com/tinspham209/yelp-clone-PERNstack",
			},
			{
				id: 10,
				title: "Flappy Bird",
				description: "Flappy Bird game with React & Redux",
				imgSrc:
					"https://camo.githubusercontent.com/71395b97b45a06390b1a95a44e598360180684ff/68747470733a2f2f692e696d6775722e636f6d2f583833487769632e706e67",
				imgAlt: "flappy-bird",
				link: "https://github.com/tinspham209/react-flappy-bird",
			},
			{
				id: 11,
				title: "Youtube Clone Application",
				description: "Building with React, Material-UI, Youtube API",
				imgSrc:
					"https://camo.githubusercontent.com/ecf3e4dc79f290be80bec55acec0dfd8b5d2ef08/68747470733a2f2f692e696d6775722e636f6d2f48445a466630702e706e67",
				imgAlt: "youtube-clone",
				link: "https://github.com/tinspham209/react-youtube-clone",
			},
			{
				id: 12,
				title: "Order Burger App",
				description: "Study React Hooks, Redux with hooks, Firebase",
				imgSrc:
					"https://camo.githubusercontent.com/c507816a9e4d66381e8752a578c99d00f4e5a04c/68747470733a2f2f692e696d6775722e636f6d2f337577467876642e6a7067",
				imgAlt: "order-burger-app",
				link: "https://github.com/tinspham209/react-burger-app",
			},
			{
				id: 13,
				title: "Shopee Clone Web Application",
				description: "Study HTML & CSS & Responsive with flex-box",
				imgSrc:
					"https://camo.githubusercontent.com/0f3f5ba7b1b758f8bec68e5cef95c2252c251a23/68747470733a2f2f692e696d6775722e636f6d2f4b6149526a4a362e706e67",
				imgAlt: "shopee-clone",
				link: "https://github.com/tinspham209/online-shopping",
			},
		],
	};
	return json.posts;
};

const Post = () => {
	const posts = getPosts();

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		lazyLoad: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		// adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
					autoplaySpeed: 2000,
					dots: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
					autoplaySpeed: 2000,
					dots: false,
				},
			},
		],
	};
	return (
		<React.Fragment>
			<h3 style={{ textAlign: "center" }}>Some of my past projects</h3>
			<div className="post-wrapper">
				<Slider {...settings}>
					{posts.map((post) => {
						return (
							<div key={post.id}>
								<div className="post">
									<img
										className="post-thumbnail"
										src={post.imgSrc}
										alt={post.imgAlt}
									/>
									<div className="post-preview">
										<h6 className="post-title">{post.title}</h6>
										<p className="post-intro">{post.description}</p>
										<a href={post.link}>Read More</a>
									</div>
								</div>
							</div>
						);
					})}
				</Slider>
			</div>
		</React.Fragment>
	);
};

export default Post;
