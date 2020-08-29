import React from "react";
import HomePageComponent from "../../components/homepage";
import nextId from "react-id-generator";

import noImage from "../../assets/img/no-image.jpg";

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
			// {
			// 	id: 8,
			// 	alt: "Python",
			// 	src: "https://img.icons8.com/color/48/000000/python.png",
			// },
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
				id: nextId(),
				alt: "VScode",
				src:
					"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png",
			},
			{
				id: nextId(),
				alt: "Git",
				src: "https://img.icons8.com/color/48/000000/git.png",
			},
			{
				id: nextId(),
				alt: "Github",
				src: "https://img.icons8.com/nolan/64/github.png",
			},
			{
				id: nextId(),
				alt: "Terminal",
				src: "https://img.icons8.com/fluent/48/000000/console.png",
			},
			{
				id: nextId(),
				alt: "Katalon",
				src:
					"https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2019/10/22154517/katalon_icon_color_normal.png",
			},
			{
				id: nextId(),
				alt: "Photoshop",
				src: "https://img.icons8.com/fluent/50/000000/adobe-photoshop.png",
			},
			{
				id: nextId(),
				alt: "Premiere",
				src: "https://img.icons8.com/color/48/000000/adobe-premiere-pro.png",
			},
			{
				id: nextId(),
				alt: "Trello",
				src: "https://img.icons8.com/color/48/000000/trello.png",
			},
			{
				id: nextId(),
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
				id: nextId(),
				alt: "Facebook",
				link: "https://www.facebook.com/tinspham.209",
				src: "https://img.icons8.com/fluent/48/000000/facebook-new.png",
			},
			{
				id: nextId(),
				alt: "Instagram",
				link: "https://www.instagram.com/phamthitins",
				src: "https://i.imgur.com/2UlYKod.png",
			},
			{
				id: nextId(),
				alt: "linkedin",
				link: "https://linkedin.com/in/phamvantins",
				src: "https://img.icons8.com/color/48/000000/linkedin-circled.png",
			},
			{
				id: nextId(),
				alt: "youtube",
				link: "https://www.youtube.com/channel/UC7Yl-1r1qQwSB1Rej2UlaNQ/",
				src: "https://img.icons8.com/doodle/48/000000/youtube-play.png",
			},
			{
				id: nextId(),
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
				id: nextId(),
				title: "COVID-19 Tracker Web Application",
				description:
					"Display Infected, Recovered, Deaths in tables, chart, maps of 215 another countries",
				imgSrc:
					"https://camo.githubusercontent.com/7163876c7908470d506bb8643a207e7bdbad90fb/68747470733a2f2f692e696d6775722e636f6d2f337235594478452e706e67",
				imgAlt: "corona-tracker",
				link: "https://github.com/tinspham209/react-corona-tracker-v2",
			},
			{
				id: nextId(),
				title: "Voice Controlled Read News",
				description:
					"Using Voice to choose type of news, and Voice Assistant read the headline of news",
				imgSrc:
					"https://camo.githubusercontent.com/e2e5b167c85cd560ffe8eca0ed1b0c223396fe40/68747470733a2f2f692e696d6775722e636f6d2f44485a774d54312e706e67",
				imgAlt: "Alan-AI",
				link: "https://github.com/tinspham209/react_alan_AI_news_application",
			},
			{
				id: nextId(),
				title: "Discord Bot Application",
				description: "Discord Moderation & Music BOT",
				imgSrc:
					"https://camo.githubusercontent.com/a376c1d1365524768aaaa4ca7380aa45aac8b8cd/68747470733a2f2f692e696d6775722e636f6d2f76535057456b642e706e67",
				imgAlt: "discord-bot",
				link: "https://github.com/tinspham209/discord-bot",
			},
			{
				id: nextId(),
				title: "Github Jobs",
				description:
					"Display available Jobs from Github Jobs, study useReducer, react-bootstrap",
				imgSrc:
					"https://camo.githubusercontent.com/0505fb67714d43f2e11fbca5b96350fc76214c66/68747470733a2f2f692e696d6775722e636f6d2f736841566d4e4c2e706e67",
				imgAlt: "github-jobs",
				link: "https://github.com/tinspham209/trvl-website-react",
			},
			{
				id: nextId(),
				title: "TRVL Website",
				description: "improve coding skills with React, Flex-box, Grid System",
				imgSrc:
					"https://camo.githubusercontent.com/0505fb67714d43f2e11fbca5b96350fc76214c66/68747470733a2f2f692e696d6775722e636f6d2f736841566d4e4c2e706e67",
				imgAlt: "trvl-website",
				link: "https://github.com/tinspham209/trvl-website-react",
			},
			{
				id: nextId(),
				title: "Youtube Clone v2",
				description:
					"improve coding skills with React, Material-UI, react-router",
				imgSrc:
					"https://camo.githubusercontent.com/d928880feb1ffa182018cc6d48449078fc7f3d3b/68747470733a2f2f692e696d6775722e636f6d2f614d44587a49712e706e67",
				imgAlt: "youtube-clone-v2",
				link: "https://github.com/tinspham209/youtube-clone",
			},
			{
				id: nextId(),
				title: "Photo App",
				description:
					"improve knowledge about React, API. Study Redux-toolkit, Auth with firebase",
				imgSrc:
					"https://camo.githubusercontent.com/8675cd40c4886972ad1e57b89054cad2130e7f9a/68747470733a2f2f692e696d6775722e636f6d2f305071426555332e706e67",
				imgAlt: "photo-app",
				link: "https://github.com/tinspham209/redux-photo-app",
			},
			{
				id: nextId(),
				title: "Poop Collection",
				description:
					"Multiple player online game, Collecting all the 💩 created by the animals and you will be a 💩 Hero",
				imgSrc:
					"https://camo.githubusercontent.com/6421ca8bad7a29aeab3e59c2c0fa395509db1fb1/68747470733a2f2f6d65646961302e67697068792e636f6d2f6d656469612f4c6d4370546a71647671694c4c6355374c422f67697068792e676966",
				imgAlt: "poop-collection",
				link: "https://github.com/tinspham209/poop-collection",
			},
			{
				id: nextId(),
				title: "Study Typescript",
				description: "Study Typescript",
				imgSrc: noImage,
				imgAlt: "study-typescript",
				link: "https://github.com/tinspham209/study-typescript",
			},
			{
				id: nextId(),
				title: "Yelp Clone",
				description: "Yelp Clone with P.E.R.N stack",
				imgSrc:
					"https://camo.githubusercontent.com/7da4c4036e351e47c166b19d542fdb0b220bdf67/68747470733a2f2f692e696d6775722e636f6d2f4f6e61703343672e706e67",
				imgAlt: "yelp-clone",
				link: "https://github.com/tinspham209/yelp-clone-PERNstack",
			},
			{
				id: nextId(),
				title: "Zoom Clone Web Application",
				description:
					"Allow others to stream their video, audio, chat in real-time",
				imgSrc:
					"https://camo.githubusercontent.com/1233b7d90a0df80604aed0d5c315d63b973f0eef/68747470733a2f2f692e696d6775722e636f6d2f70676d543854522e706e67",
				imgAlt: "Zoom-Clone",
				link: "https://github.com/tinspham209/zoom-clone-expressjs",
			},
			{
				id: nextId(),
				title: "Travelix Web Application",
				description: "Hotel Booking Website with M.E.R.N stack",
				imgSrc: "https://i.imgur.com/pdY5gOU.png",
				imgAlt: "travelix",
				link: "https://github.com/tinspham209/React-Travelix",
			},
			{
				id: nextId(),
				title: "Convert Money",
				description:
					"Improve JS skills about async/await, promise, array destructuring",
				imgSrc: noImage,
				imgAlt: "convert-money",
				link: "https://github.com/tinspham209/js-covert-money",
			},
			{
				id: nextId(),
				title: "Study NodeJS - ExpressJS",
				description: "Study ExpressJS & MongoDB & MVC Model, CRUD functions",
				imgSrc: noImage,
				imgAlt: "study-nodejs-express-js",
				link: "https://github.com/tinspham209/study-nodejs",
			},
			{
				id: nextId(),
				title: "Snake Game",
				description: "Building Snake Game with Python & pygame",
				imgSrc:
					"https://camo.githubusercontent.com/c0ee6713facd9a8dfb79001fc4ac3bc993cee95a/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f58793737316a6b59306e676f314e7866766a2f67697068792e676966",
				imgAlt: "snake-game",
				link: "https://github.com/tinspham209/python-snake-game",
			},
			{
				id: nextId(),
				title: "Instagram Clone Web Application",
				description: "Building with React, Material-UI, Firebase",
				imgSrc:
					"https://camo.githubusercontent.com/9e8b1e065bb4274a13ce10f26742c60fd6fcace7/68747470733a2f2f692e696d6775722e636f6d2f63704a5158556b2e706e67",
				imgAlt: "insta-clone",
				link: "https://github.com/tinspham209/insta-clone-react",
			},
			{
				id: nextId(),
				title: "Realtime Chat Application",
				description: "Realtime Chat with React, Express, Socket.io",
				imgSrc:
					"https://camo.githubusercontent.com/199786d31f3d439333ec4aa8bd6f0cdeaead868e/68747470733a2f2f692e696d6775722e636f6d2f594550474c55562e706e67",
				imgAlt: "realtime-chat",
				link: "https://github.com/tinspham209/realtime-chat-application-react",
			},
			{
				id: nextId(),
				title: "COVID-19 Tracker v1",
				description:
					"Display Infected, Recovered, Deaths in tables, chart 215 another countries",
				imgSrc:
					"https://camo.githubusercontent.com/c6815b7232e89c02a8a98f5e53ab0a84be496f7f/68747470733a2f2f692e696d6775722e636f6d2f63446e4848564f2e706e67",
				imgAlt: "corona-tracker-v1",
				link: "https://github.com/tinspham209/react-corona-tracker",
			},
			{
				id: nextId(),
				title: "HackerRank solution",
				description: "Improve coding skills with HackerRank",
				imgSrc: noImage,
				imgAlt: "hackerRank-solution",
				link: "https://github.com/tinspham209/hackerRank-solution",
			},
			{
				id: nextId(),
				title: "Flappy Bird",
				description: "Flappy Bird game with React & Redux",
				imgSrc:
					"https://camo.githubusercontent.com/71395b97b45a06390b1a95a44e598360180684ff/68747470733a2f2f692e696d6775722e636f6d2f583833487769632e706e67",
				imgAlt: "flappy-bird",
				link: "https://github.com/tinspham209/react-flappy-bird",
			},
			{
				id: nextId(),
				title: "Tasks Management",
				description: "Tasks Management with NestJS, PostgreSQL, TypeORM",
				imgSrc:
					"https://camo.githubusercontent.com/5a434cc23606fe03dfd8ac0902600a7ac888698a/68747470733a2f2f692e696d6775722e636f6d2f754b70633155362e706e67",
				imgAlt: "nestjs-tasks-management",
				link: "https://github.com/tinspham209/nestJS-tasks-management",
			},
			{
				id: nextId(),
				title: "Trello Dashboard Clone",
				description: "Study react-dnd",
				imgSrc:
					"https://camo.githubusercontent.com/050385143394d986889a12221106f743ad8d43ac/68747470733a2f2f692e696d6775722e636f6d2f565576734532322e706e67",
				imgAlt: "trello-clone-app",
				link: "https://github.com/tinspham209/react-trello-clone",
			},
			{
				id: nextId(),
				title: "Billing Inventory Management",
				description: "Study C# and Winform & SQL Servcer",
				imgSrc: "https://i.imgur.com/LhRzcXb.png",
				imgAlt: "billing-inventory-management",
				link:
					"https://github.com/tinspham209/billing-inventory-management-winform",
			},
			{
				id: nextId(),
				title: "Youtube Clone Application",
				description: "Building with React, Material-UI, Youtube API",
				imgSrc:
					"https://camo.githubusercontent.com/ecf3e4dc79f290be80bec55acec0dfd8b5d2ef08/68747470733a2f2f692e696d6775722e636f6d2f48445a466630702e706e67",
				imgAlt: "youtube-clone",
				link: "https://github.com/tinspham209/react-youtube-clone",
			},
			{
				id: nextId(),
				title: "Warning when put the hand on face",
				description:
					"using @tensorflow for Training AI, @howler to open audio, ReactJS for UI",
				imgSrc: "https://i.imgur.com/bapf8EI.png",
				imgAlt: "bo-za-ban-ei",
				link: "https://github.com/tinspham209/bo-za-ban-ei",
			},
			{
				id: nextId(),
				title: "React Weather App",
				description:
					"A simple React weather app that displays weather information from the OpenWeatherMap API.",
				imgSrc:
					"https://camo.githubusercontent.com/e7c52d03fb1a2fc5be17c2b56e44c08abba17f50/68747470733a2f2f692e696d6775722e636f6d2f7461736b6b76652e706e67",
				imgAlt: "react-weather-app",
				link: "https://github.com/tinspham209/react-weather-app",
			},
			{
				id: nextId(),
				title: "Order Burger App",
				description: "Study React Hooks, Redux with hooks, Firebase",
				imgSrc:
					"https://camo.githubusercontent.com/c507816a9e4d66381e8752a578c99d00f4e5a04c/68747470733a2f2f692e696d6775722e636f6d2f337577467876642e6a7067",
				imgAlt: "order-burger-app",
				link: "https://github.com/tinspham209/react-burger-app",
			},
			{
				id: nextId(),
				title: "JS Weather App",
				description:
					"A simple React weather app that displays weather information from the OpenWeatherMap API.",
				imgSrc:
					"https://camo.githubusercontent.com/1e69233c21ad1414574a1190728a058e548f3fcb/68747470733a2f2f692e696d6775722e636f6d2f496255685974762e706e67",
				imgAlt: "js-weather-app",
				link: "https://github.com/tinspham209/js-weather-app",
			},
			{
				id: nextId(),
				title: "The Rosa Restaurant",
				description: "Study HTML & CSS & Responsive with flex-box",
				imgSrc:
					"https://camo.githubusercontent.com/d1101f7131567a6dae50c9839591169163e28a45/68747470733a2f2f692e696d6775722e636f6d2f41714a626e36662e6a7067",
				imgAlt: "the-rosa-restaurant",
				link: "https://github.com/tinspham209/The-Rosa-Restaurant",
			},
			{
				id: nextId(),
				title: "Apple.com replica",
				description: "Study HTML & CSS & Responsive with flex-box",
				imgSrc:
					"https://camo.githubusercontent.com/2e307489d03770974fbf212d50f54c2cb0e086f0/68747470733a2f2f692e696d6775722e636f6d2f46486437627a4d2e706e67",
				imgAlt: "apple-replica",
				link: "https://github.com/tinspham209/Apple.com-replica",
			},
			{
				id: nextId(),
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
