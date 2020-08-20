import React from "react";
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
			<div className="left-column">left-column</div>
			<div className="right-column">right-column</div>
		</div>
	);
};

export default Greeting;
