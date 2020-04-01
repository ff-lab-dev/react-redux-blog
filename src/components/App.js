import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './History';
import Header from './Header';
import Footer from './Footer';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Games from '../pages/Games';
import Info from '../pages/Info';
import Technology from '../pages/Technology';
import Web from '../pages/Web';
import Feeds from '../pages/Feeds';

const App = () => {
	return (
		<Router history={history}>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/contact" component={Contact} />
				<Route path="/games" component={Games} />
				<Route path="/info" component={Info} />
				<Route path="/technology" component={Technology} />
				<Route path="/web" component={Web} />
				<Route path="/feeds" component={Feeds} />
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
