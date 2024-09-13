import React from 'react';
import { Helmet } from 'react-helmet-async';

import pageCSS from './page.module.css';
import css from './curriculum.module.css';

import curriculum from '../assets/images/curriculum.jpg';

export default function Curriculum() {
	return (
		<div className={pageCSS.pageContainer}>
			<Helmet title="Currículo" />
			<div className={pageCSS.pageContent}>
				<img className={css.curriculum} src={curriculum} alt="Curriculum" />
			</div>
		</div>
	);
}
