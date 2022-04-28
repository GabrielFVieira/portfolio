import React from 'react';
import ReactTooltip from 'react-tooltip';

export default function Tooltip({ id, text, pos, delay }) {
	return (
		<ReactTooltip
			id={id}
			place={pos}
			textColor="#fff"
			backgroundColor="#294663"
			border
			borderColor="#04d361"
			effect="solid"
			delayShow={delay}
		>
			{text}
		</ReactTooltip>
	);
}
