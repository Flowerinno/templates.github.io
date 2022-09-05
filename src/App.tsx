import React from "react";

import "./App.css";

function App() {
	return (
		<div className="app">
			<header className="app-header">
				<nav className="nav">
					<h6>Header Logo</h6>
					<span>
						<a href="#!">header link one</a>
						<a href="#!">header link two</a>
						<a href="#!">header link three</a>
					</span>
				</nav>
				<div className="app-header-text">
					<div className="main-text">
						<h1>This website is awesome</h1>
						<p>
							This website has some subtext that goes here under the main title.
							It's a smaller font and the color is lower contrast.
						</p>
						<button>Sign up</button>
					</div>
					<div className="main-image">
						<img alt="this is a placeholder" src="" />
					</div>
				</div>
			</header>
			<div className="information">
				<h4>Some random information.</h4>
				<div className="information-boxes">
					<div className="box1">
						<div></div>
						<p>this is some text under a illustration or image</p>
					</div>
					<div className="box2">
						<div></div>
						<p>this is some text under a illustration or image</p>
					</div>
					<div className="box3">
						<div></div>
						<p>this is some text under a illustration or image</p>
					</div>
					<div className="box4">
						<div></div>
						<p>this is some text under a illustration or image</p>
					</div>
				</div>
			</div>
			<div className="quote">
				<div>
					<span>
						This is an inspiring quote, or a testimonial from a customer. Maybe
						it's just filling up space, or maybe people will actually read it.
						Who knows? All i know is that it looks nice
					</span>
					<p>
						<strong>-Thor, God of Thunder</strong>
					</p>
				</div>
			</div>
			<div className="footer">
				<div className="footer-box">
					<div>
						<h6>Call to action! It's time.</h6>
						<p>
							Sign up for our product by clicking that button right over there!
						</p>
					</div>
					<button>Sign up</button>
				</div>
			</div>
			<div className="copyright">Copyright @ The Odin Project 2021</div>
		</div>
	);
}

export default App;
