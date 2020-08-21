import React from "react";
import Avatar from "../../assets/img/avatar.png";
import "./style.css";
const Greeting = () => {
	return (
		<div className="intro-wrapper">
			<div className="nav-wrapper">
				<div className="nav-wrapper-left__dots-wrapper">
					<div className="browser-dot dot-1"></div>
					<div className="browser-dot dot-2"></div>
					<div className="browser-dot dot-3"></div>
				</div>
				<ul className="nav-wrapper-right__navigation-list">
					<li>
						<a href="#contact-form">Contact</a>
					</li>
				</ul>
			</div>
			<div className="left-column">
				<img className="avatar" src={Avatar} alt="Avatar" />
				<h5>Pham Van Tin</h5>
				<p>{" <@tinspham209> "}</p>
			</div>
			<div className="right-column">
				<div className="right-column__preview-shadow">
					<div className="right-column__preview">
						<div className="corner corner-tl"></div>
						<div className="corner corner-tr"></div>
						<h3>What I Do?</h3>
						<p>
							A fresher developer using React for Web development, or Express
							for Web services
						</p>
						<div className="corner corner-br"></div>
						<div className="corner corner-bl"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Greeting;
