import React from "react";
import "./style.css";
import resume from "../../assets/resume/resume.pdf";

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
const About = () => {
	const languages = getLanguagesIcons();
	const tools = getToolsIcon();
	return (
		<div className="about-wrapper">
			<div className="about-me">
				<h4>More about me</h4>
				<p>
					<span>🌏</span> Lives: Da Nang city, Vietnam
				</p>
				<p>
					<span>📨</span> Email: tinphamvan123@gmail.com
				</p>
				<p>
					<span>🎓</span> Languages: English, Vietnamese
				</p>
				<p>
					<span>📕</span> Education: Student of Duy Tan University
				</p>
				<hr />
				<h4>TOP EXPERTISE</h4>
				<p>
					Fullstack developer with primary focus on React + Express:{" "}
					<a target="_blank" rel="noopener noreferrer" href={resume}>
						Download Resume
					</a>{" "}
				</p>
				<div id="skills">
					<ul>
						<li>JavaScript</li>
						<li>React</li>
						<li>Redux</li>
						<li>NodeJS</li>
						<li>Express</li>
						<li>PostgreSQL</li>
						<li>MongoDB</li>
					</ul>
					<ul>
						<li>VSCode</li>
						<li>Github</li>
						<li>Terminal</li>
						<li>Katalon</li>
						<li>Photoshop</li>
						<li>Trello</li>
						<li>Slack</li>
					</ul>
					{/* <div className="languages">
						<p>Languages</p>
						{languages.map((language) => {
							return (
								<img
									key={language.id}
									align="left"
									alt={language.alt}
									width="26px"
									src={language.src}
								/>
							);
						})}
					</div>
					<div className="tools">
						<p>Tools</p>
						{tools.map((tool) => {
							return (
								<img
									key={tool.id}
									align="left"
									alt={tool.alt}
									width="26px"
									src={tool.src}
								/>
							);
						})}
					</div> */}
				</div>
			</div>

			<div className="social-links">
				<div className="social-links-wrapper">
					<h3>Find me on Facebook, Instagram & Linkedin </h3>
					<div className="social-icons">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.facebook.com/tinspham.209"
						>
							<img
								align="left"
								alt="facebook"
								width="50px"
								src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
							/>
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.instagram.com/phamthitins"
						>
							<img
								align="left"
								alt="instagram"
								width="50px"
								src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
							/>
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="linkedin.com/in/phamvantins"
						>
							<img
								align="left"
								alt="Linkedin"
								width="50px"
								src="https://img.icons8.com/color/48/000000/linkedin-circled.png"
							/>
						</a>
					</div>
				</div>
				<div className="top-langues">
					<h4>Top Langues Used in Github</h4>
					<img
						id="social_img"
						src="https://github-readme-stats.vercel.app/api/top-langs/?username=tinspham209&layout=compact"
						alt="most-languages-used"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
