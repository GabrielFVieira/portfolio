import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import css from './navbar.module.css';

import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import NavbarLink from './NavbarLink';
import Tooltip from './Tooltip';

export default function Navbar() {
	const [click, setClick] = useState(false);

	const handleMenuOpen = () => setClick(true);
	const handleMenuClose = () => setClick(false);

	const tooltipName = 'tooltipLogo';

	return (
		<nav className={css.container}>
			<Link className={css.logo} to="/">
				<img src="https://avatars.githubusercontent.com/u/17935137?v=4" alt="Logo" data-tip data-for={tooltipName} />
			</Link>
			<Tooltip id={tooltipName} text="Início" pos="right" delay={1000} />
			<ul className={`${css.buttonsContainer} ${click ? css.active : ''}`}>
				<NavbarLink title="Início" path="/" onClick={handleMenuClose} className={css.homeLink} />
				<NavbarLink title="Sobre" path="/about" onClick={handleMenuClose} />
				<NavbarLink title="Projetos" path="/projects" onClick={handleMenuClose} />
				<NavbarLink title="Contato" path="/contact" onClick={handleMenuClose} />
				<NavbarLink title="Currículo" path="/curriculum" onClick={handleMenuClose} button />
				<IoCloseOutline className={`${css.menu} ${css.closeBtn}`} onClick={handleMenuClose} />
			</ul>
			<IoMenuOutline className={css.menu} onClick={handleMenuOpen} />
		</nav>
	);
}
