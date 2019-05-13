import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function NavBar(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-green">
			<a className="navbar-brand" href="/">
				Home
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					{props.links.map(link => {
						return (
							<li className="nav-link">
								<Link to={link.link}>{link.text}</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
}

export default NavBar;
