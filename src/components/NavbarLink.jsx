import React from 'react';
import { Link } from 'react-router-dom';

import css from './navbarLink.module.css';

export default function NavbarLink({ title, path, onClick, button, className }) {
	const handleClick = () => {
		if (onClick) {
			onClick();
		}
	};

	return (
		<li className={css.container}>
			<Link className={`${button ? css.button : css.link} ${className}`} to={path} onClick={handleClick}>
				{title}
			</Link>
		</li>
	);
}
