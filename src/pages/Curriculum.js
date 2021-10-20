import React from 'react';

import pageCSS from './page.module.css';
import css from './curriculum.module.css';

import Header from '../components/Header';

import curriculum from '../assets/images/curriculum.svg';

export default function Curriculum() {
	return (
		<div className={pageCSS.pageContainer}>
			<Header pageName="Currículo" />
			<div className={pageCSS.pageContent}>
				<img className={css.curriculum} src={curriculum} alt="Curriculum" />
			</div>
		</div>
	);
}
