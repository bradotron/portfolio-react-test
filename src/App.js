import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import NavBar from './Components/NavBar';
import SectionDivider from './Components/SectionDivider';
import Home from './Pages/Home';

function App() {
	return (
		<div>
			<Router>
				<NavBar
					links={[
						{ link: '#skills', text: 'Skills' },
						{ link: '#portfolio', text: 'Portfolio' },
						{ link: '#contact', text: 'Contact' },
					]}
					color="red"
				/>
				<SectionDivider height="3rem" fill="red" />
				<div className="container">
					<Home />
					{/* // Hero */}

					{/* // Skills */}
					<div id="skills">skills</div>
					{/* // Portfolio */}
					<div id="portfolio">skills</div>
					{/* Contact */}
					<div id="contact">skills</div>
					{/* // Footer */}
				</div>
			</Router>
		</div>
	);
}

export default App;
