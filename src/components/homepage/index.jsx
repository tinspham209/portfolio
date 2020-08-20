import React from "react";
import "./style.css";
import Greeting from "../greeting";
import Intro from "../intro";

const Homepage = () => {
	return (
		<React.Fragment>
			<section className="s1">
				<div className="main-container">
					<Greeting />
					<Intro />
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
