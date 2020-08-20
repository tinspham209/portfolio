import React from "react";
import "./style.css";

const Homepage = () => {
	return (
		<React.Fragment>
			<section className="s1">
				<div className="main-container">
					<div className="greeting-wrapper">
						<h1>Hi, I'm Tins Pham Van - aka Tins</h1>
					</div>
					<div className="intro-wrapper">
						<div className="nav-wrapper">Nav</div>
						<div className="left-column">left-column</div>
						<div className="right-column">right-column</div>
					</div>
				</div>
			</section>
			<section className="s2">
				<div className="main-container">About</div>
			</section>
			<section className="s1">
				<div className="main-container">Portfolio</div>
			</section>
			<section className="s2">
				<div className="main-container">Contact</div>
			</section>
		</React.Fragment>
	);
};

export default Homepage;
