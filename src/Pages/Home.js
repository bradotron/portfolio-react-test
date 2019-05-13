import React, { Component } from 'react';
import Skills from '../Components/Skills';
import Portfolio from '../Components/Portfolio';
import Contact from '../Components/Contact';

class Home extends Component {
	render() {
		return (
			<div>
				<h1>This is the Home Page</h1>
				<Portfolio id="portfolio"/>
				<Skills id="skills"/>
				<Contact id="contact"/>
			</div>
		);
	}
}

export default Home;
