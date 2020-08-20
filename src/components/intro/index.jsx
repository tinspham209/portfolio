import React from "react";
import Avatar from "../../assets/img/avatar.png";
import "./style.css";
const Greeting = () => {
	return (
		<div className="intro-wrapper">
			<div className="nav-wrapper">
				<div className="dots-wrapper">
					<div id="dot-1" className="browser-dot"></div>
					<div id="dot-2" className="browser-dot"></div>
					<div id="dot-3" className="browser-dot"></div>
				</div>
				<ul id="navigation">
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</div>
			<div className="left-column">
				<img id="avatar" src={Avatar} alt="Avatar" />
				<h5
					style={{
						textAlign: "center",
						lineHeight: 0,
					}}
				>
					Personalize Theme
				</h5>

				<div id="theme-options-wrapper">
					<div id="light-mode" className="theme-dot"></div>
					<div id="blue-mode" className="theme-dot"></div>
					<div id="green-mode" className="theme-dot"></div>
					<div id="purple-mode" className="theme-dot"></div>
				</div>

				<p id="settings-note">
					*Theme settings will be saved for your next vist
				</p>
			</div>
			<div className="right-column">
				<div id="preview-shadow">
					<div id="preview">
						<div id="corner-tl" className="corner"></div>
						<div id="corner-tr" className="corner"></div>
						<h3>What I Do?</h3>
						<p>
							A fresher developer using React for Web development, or Express
							for Web services
						</p>
						<div id="corner-br" className="corner"></div>
						<div id="corner-bl" className="corner"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Greeting;
