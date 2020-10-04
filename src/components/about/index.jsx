import React from "react";
import "./style.css";

const About = ({ languages, socials, tools }) => {
	return (
		<div className="about-wrapper">
			<div className="about-left">
				<div className="about-left-top">
					<h4>More about me</h4>
					<p>
						<span role="img" aria-label="live">
							🌏
						</span>{" "}
						Lives: Da Nang city, Vietnam
					</p>
					<p>
						<span role="img" aria-label="email">
							📨
						</span>{" "}
						Email: tinphamvan123@gmail.com
					</p>
					<p>
						<span role="img" aria-label="languages">
							🎓
						</span>{" "}
						Languages: Vietnamese, English
					</p>
					<p>
						<span role="img" aria-label="education">
							📕
						</span>{" "}
						Education: Bachelor of Science: Software Engineer from Duy Tan
						University
					</p>
					<hr />
				</div>

				<div className="about-left-bot">
					<h3>Find me on social media </h3>
					<div className="about-left-bot__socials-icons">
						{socials.map((social) => {
							return (
								<a
									key={social.id}
									target="_blank"
									rel="noopener noreferrer"
									href={social.link}
								>
									<img
										align="left"
										alt={social.alt}
										width="50px"
										src={social.src}
									/>
								</a>
							);
						})}
					</div>
				</div>
			</div>

			<div className="about-right">
				<h4>Top Expertise</h4>
				<p>
					Web developer with primary focus on React and Express:{" "}
					<a target="_blank" rel="noopener noreferrer" href="/resume.pdf">
						Download Résumé
					</a>{" "}
				</p>
				<div className="about-right__skills">
					<div className="about-right__skills-languages">
						<p>Programming Languages: </p>
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
					<div className="about-right__skills-tools">
						<p>Tools: </p>
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
