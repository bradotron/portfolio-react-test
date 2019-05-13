import React, { Component } from 'react';
import Skills from '../Components/Skills';
import Portfolio from '../Components/Portfolio';
import Contact from '../Components/Contact';
import Hero from '../Components/Hero';

class Home extends Component {
	render() {
		return (
			<div>
				<Hero />
				<Portfolio id="portfolio"/>
				<Skills id="skills"/>
				<Contact id="contact"/>
			</div>
		);
	}
}

export default Home;
