import React from 'react';
import './style.css';
import image from './about.jpg';

function Hero(props) {
	return (
		<div className="jumbotron">
			<div className="row justify-content-center">
				<div className="col-md-4 text-center">
					<img className="border-circle" src={image} alt="Bradley Jensen" />
				</div>
				<div className="col-md-8">
					<p className="lead text-justify">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat	non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;
