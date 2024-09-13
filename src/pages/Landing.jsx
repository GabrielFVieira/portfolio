import React from 'react';
import { Link } from 'react-router-dom';

import pageCSS from './page.module.css';
import css from './landing.module.css';

export default function Landing() {
	return (
		<div className={pageCSS.pageContainer}>
			<div className={css.container}>
				<h3 className={css.greeting}>Olá, me chamo</h3>
				<h1 className={css.name}>Gabriel Figueiredo</h1>
				<p className={css.resume}>Sou um desenvolvedor backend, atualmente trabalhando como dev pleno na Sensedia.</p>
				<Link className={css.button} to="/projects">
					Veja alguns dos meus projetos
				</Link>
			</div>
		</div>
	);
}
