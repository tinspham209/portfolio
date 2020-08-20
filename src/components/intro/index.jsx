import React from "react";
import "./style.css";
import Avatar from "../../assets/img/avatar.png";
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
			<div className="right-column">right-column</div>
		</div>
	);
};

export default Greeting;
