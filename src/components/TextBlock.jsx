import React from 'react';

import css from './textblock.module.css';

export default function TextBlock({ title, subtitle, text, from, to, imagePos }) {
	function formatPeriod(from, to) {
		if (from === to) {
			return from;
		} else if (to) {
			return `${from} - ${to}`;
		} else {
			return `${from} - Atualmente`;
		}
	}

	return (
		<div className={`${css.container} ${imagePos === 'left' ? css.reverse : ''}`}>
			<div className={css.header}>
				<div className={css.titleContainer}>
					<h3 className={css.title}>{title}</h3>
					{subtitle && <h4 className={css.subtitle}>{subtitle}</h4>}
				</div>
				<p className={css.period}>{formatPeriod(from, to)}</p>
			</div>
			<p className={css.text}>{text}</p>
		</div>
	);
}
