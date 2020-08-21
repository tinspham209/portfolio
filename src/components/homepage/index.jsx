import React from "react";
import "./style.css";
// import Greeting from "../greeting";
import Intro from "../intro";
import About from "../about";
import Post from "../post";
import Contact from "../contact";

const Homepage = () => {
	return (
		<React.Fragment>
			<section className="s1">
				<div className="main-container">
					{/* <Greeting /> */}
					<Intro />
				</div>
			</section>
			<section className="s2">
				<div className="main-container">
					<About />
				</div>
			</section>
			<section className="s1">
				<div className="main-container">
					<Post />
				</div>
			</section>
			<section className="s2">
				<div className="main-container">
					<Contact />
				</div>
			</section>
		</React.Fragment>
	);
};

export default Homepage;
