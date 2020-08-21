import React from "react";
import "./style.css";

const About = ({ languages, socials, tools }) => {
	return (
		<div className="about-wrapper">
			<div className="about-me">
				<div className="more-about-me">
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
						Languages: English, Vietnamese
					</p>
					<p>
						<span role="img" aria-label="education">
							📕
						</span>{" "}
						Education: Student of Duy Tan University
					</p>
					<hr />
				</div>

				<div className="social-links-wrapper">
					<h3>Find me on social media </h3>
					<div className="social-icons">
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

			<div className="skills">
				<div className="top-expertise">
					<h4>Top Expertise</h4>
					<p>
						Fullstack developer with primary focus on React + Express:{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.visualcv.com/pdfs/5898749/"
						>
							Download Résumé
						</a>{" "}
					</p>
					<div id="skills">
						<div className="languages">
							<p>Languages: </p>
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
		</div>
	);
};

export default About;
