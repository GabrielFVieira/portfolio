import React from 'react';

import css from './contactInfo.module.css';

export default function ContactInfo({ image, title, userName, url }) {
	return (
		<div className={css.container}>
			<a href={url} target="_blank" rel="noreferrer">
				<img className={css.image} src={image} alt={title} />
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
