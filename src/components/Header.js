import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactTooltip from 'react-tooltip';

import css from './header.module.css';

import menuIcon from '../assets/icons/menu.svg';

export default function Header({ pageName }) {
	return (
		<div className={css.container}>
			<Helmet title={pageName} />
			<Link className={css.logo} to="/">
				<img src="https://avatars.githubusercontent.com/u/17935137?v=4" alt="Logo" data-tip data-for="tooltipLogo" />
			</Link>
			<ReactTooltip
				id="tooltipLogo"
				place="right"
				textColor="#fff"
				backgroundColor="#294663"
				border
				borderColor="#04d361"
				effect="solid"
			>
				Início
			</ReactTooltip>
			<div className={css.buttonsContainer}>
				<Link className={css.button} to="/about">
					Sobre
				</Link>
				<Link className={css.button} to="/projects">
					Projetos
				</Link>
				<Link className={css.button} to="/contact">
					Contato
				</Link>

				<Link className={css.curriculumButton} to="/curriculum">
					Currículo
				</Link>
			</div>
			<img className={css.menu} src={menuIcon} alt="Menu" />
		</div>
	);
}
