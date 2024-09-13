import React from 'react';

import css from './title.module.css';

export default function Title({ title, subtitle }) {
	return (
		<div className={css.container}>
			<h1 className={css.title}>{title}</h1>
			{subtitle && <h3 className={css.subtitle}>{subtitle}</h3>}
		</div>
	);
}
