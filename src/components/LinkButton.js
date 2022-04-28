import React from 'react';

import css from './linkButton.module.css';
import Tooltip from './Tooltip';

export default function LinkButton({ id, href, icon, tooltip, tooltipPos }) {
	return (
		<div className={css.button}>
			<a className={css.link} href={href} target="_blank" rel="noreferrer" data-tip data-for={id}>
				{icon}
			</a>
			<Tooltip id={id} text={tooltip} pos={tooltipPos ? tooltipPos : 'right'} delay={500} />
		</div>
	);
}
