import React from 'react';
import { Link } from 'react-router-dom';

import pageCSS from './page.module.css';
import css from './landing.module.css';

import Header from '../components/Header';

export default function Landing() {
	return (
		<div className={pageCSS.pageContainer}>
			<Header />
			<div className={css.container}>
				<h3 className={css.greeting}>Olá, me chamo</h3>
				<h1 className={css.name}>Gabriel Figueiredo</h1>
				<p className={css.resume}>
					Sou um desenvolvedor de aplicações Java atualmente trabalhando como estagiário na FINEP. <br />
					Atualmente estou em busca de novas oportunidades para continuar atuando como programador Java ou .NET
				</p>
				<Link className={css.button} to="/projects">
					Veja alguns dos meus projetos
				</Link>
			</div>
		</div>
	);
}
