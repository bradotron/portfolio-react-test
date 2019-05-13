import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import NavBar from './Components/NavBar';
import SectionDivider from './Components/SectionDivider';

import Home from './Pages/Home';
import NoMatch from './Pages/NoMatch';

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
				<SectionDivider height="3rem" fill="#00684E" />
				<div className="container">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route component={NoMatch} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
