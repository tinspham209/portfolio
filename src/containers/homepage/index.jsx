import React from "react";
import HomePageComponent from "../../components/homepage";

const getLanguagesIcons = () => {
	var json = {
		icons: [
			{
				id: 1,
				alt: "HTML5",
				src:
					"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
			},
			{
				id: 2,
				alt: "CSS3",
				src:
					"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
			},
			{
				id: 3,
				alt: "JavaScript",
				src: "https://img.icons8.com/dusk/64/000000/javascript-logo.png",
			},
			{
				id: 4,
				alt: "React",
				src:
					"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
			},
			{
				id: 5,
				alt: "Redux",
				src: "https://img.icons8.com/color/48/000000/redux.png",
			},
			{
				id: 6,
				alt: "NodeJS",
				src: "https://img.icons8.com/color/48/000000/nodejs.png",
			},
			{
				id: 7,
				alt: "ExpressJS",
				src:
					"https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png",
			},
			{
				id: 8,
				alt: "Python",
				src: "https://img.icons8.com/color/48/000000/python.png",
			},
			// {
			// 	id: 9,
			// 	alt: "SQL",
			// 	src: "https://img.icons8.com/bubbles/50/000000/data-configuration.png",
			// },
			{
				id: 10,
				alt: "MongoDB",
				src: "https://img.icons8.com/color/48/000000/mongodb.png",
			},
			{
				id: 11,
				alt: "PostgreSQL",
				src: "https://img.icons8.com/color/48/000000/postgreesql.png",
			},
		],
	};
	return json.icons;
};

const getToolsIcon = () => {
	let json = {
		icons: [
			{
				id: 1,
				alt: "VScode",
				src:
					"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png",
			},
			{
				id: 2,
				alt: "Git",
				src: "https://img.icons8.com/color/48/000000/git.png",
			},
			{
				id: 3,
				alt: "Github",
				src: "https://img.icons8.com/nolan/64/github.png",
			},
			{
				id: 4,
				alt: "Terminal",
				src: "https://img.icons8.com/fluent/48/000000/console.png",
			},
			{
				id: 5,
				alt: "Katalon",
				src:
					"https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2019/10/22154517/katalon_icon_color_normal.png",
			},
			{
				id: 6,
				alt: "Photoshop",
				src: "https://img.icons8.com/fluent/50/000000/adobe-photoshop.png",
			},
			{
				id: 7,
				alt: "Premiere",
				src: "https://img.icons8.com/color/48/000000/adobe-premiere-pro.png",
			},
			{
				id: 8,
				alt: "Trello",
				src: "https://img.icons8.com/color/48/000000/trello.png",
			},
			{
				id: 9,
				alt: "Slack",
				src: "https://img.icons8.com/color/48/000000/slack-new.png",
			},
		],
	};
	return json.icons;
};

const getSocialsIcon = () => {
	let json = {
		socials: [
			{
				id: 1,
				alt: "Facebook",
				link: "https://www.facebook.com/tinspham.209",
				src: "https://img.icons8.com/fluent/48/000000/facebook-new.png",
			},
			{
				id: 2,
				alt: "Instagram",
				link: "https://www.instagram.com/phamthitins",
				src: "https://i.imgur.com/2UlYKod.png",
			},
			{
				id: 3,
				alt: "linkedin",
				link: "https://linkedin.com/in/phamvantins",
				src: "https://img.icons8.com/color/48/000000/linkedin-circled.png",
			},
			{
				id: 4,
				alt: "youtube",
				link: "https://www.youtube.com/channel/UC7Yl-1r1qQwSB1Rej2UlaNQ/",
				src: "https://img.icons8.com/doodle/48/000000/youtube-play.png",
			},
			{
				id: 5,
				alt: "github",
				link: "https://github.com/tinspham209",
				src: "https://img.icons8.com/fluent/48/000000/github.png",
			},
		],
	};
	return json.socials;
};

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
				id: 13,
				title: "Discord Bot Application",
				description: "Discord Moderation & Music BOT",
				imgSrc:
					"https://camo.githubusercontent.com/a376c1d1365524768aaaa4ca7380aa45aac8b8cd/68747470733a2f2f692e696d6775722e636f6d2f76535057456b642e706e67",
				imgAlt: "discord-bot",
				link: "https://github.com/tinspham209/discord-bot",
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

const HomePage = () => {
	const socials = getSocialsIcon();
	const languages = getLanguagesIcons();
	const tools = getToolsIcon();
	const posts = getPosts();
	return (
		<div>
			<HomePageComponent
				socials={socials}
				languages={languages}
				tools={tools}
				posts={posts}
			/>
		</div>
	);
};

export default HomePage;
