import { HashRouter as Router, Route, Routes } from 'react-router-dom';
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
					<Routes>
						<Route path='/' element={<Landing/>} />
						<Route path='/about' element={<About/>} />
						<Route path='/contact' element={<Contact/>} />
						<Route path='/projects' element={<Projects/>} />
						<Route path='/curriculum' element={<Curriculum/>} />
						<Route element={<Page404/>} />
					</Routes>
				</Router>
			</HelmetProvider>
		</div>
	);
}
