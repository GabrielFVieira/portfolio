import React from 'react';
import ReactTooltip from 'react-tooltip';

import css from './linkButton.module.css';

export default function LinkButton({ id, href, icon, iconName, style, tooltip, tooltipPos }) {
	return (
		<div className={css.button}>
			<a className={css.link} href={href} target="_blank" rel="noreferrer" data-tip data-for={id} style={style}>
				<img src={icon} alt={iconName} />
			</a>
			<ReactTooltip
				id={id}
				place={tooltipPos ? tooltipPos : 'top'}
				textColor="#fff"
				backgroundColor="#294663"
				border
				borderColor="#04d361"
				effect="solid"
			>
				{tooltip}
			</ReactTooltip>
		</div>
	);
}
