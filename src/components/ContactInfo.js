import React from 'react';

import css from './contactInfo.module.css';

export default function ContactInfo({ icon, title, userName, url }) {
	return (
		<div className={css.container}>
			<a className={css.icon} href={url} target="_blank" rel="noreferrer">
				{icon}
			</a>
			<div className={css.nameContainer}>
				<a className={css.title} href={url} target="_blank" rel="noreferrer">
					{title}
				</a>
				<p className={css.userName}>{userName}</p>
			</div>
		</div>
	);
}
