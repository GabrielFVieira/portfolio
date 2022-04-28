import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import './assets/styles/global.css';

import About from './pages/About';
import Contact from './pages/Contact';
import Page404 from './pages/Page404';
import Projects from './pages/Projects';
import Landing from './pages/Landing';
import Curriculum from './pages/Curriculum';
import Navbar from './components/Navbar';

export default function App() {
	return (
		<div className="container">
			<HelmetProvider>
				<Helmet titleTemplate="Gabriel Figueiredo - %s" defaultTitle="Gabriel Figueiredo">
					<meta name="theme-color" content="#1f3245" />
				</Helmet>
				<Router>
					<Navbar />
					<Switch>
						<Route path="/" exact component={Landing} />
						<Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
						<Route path="/projects" component={Projects} />
						<Route path="/curriculum" component={Curriculum} />
						<Route component={Page404} />
					</Switch>
				</Router>
			</HelmetProvider>
		</div>
	);
}
