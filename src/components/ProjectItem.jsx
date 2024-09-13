import React from 'react';

import css from './projectItem.module.css';
import LinkButton from './LinkButton';

import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';

function getBadgeURL(text, logo) {
	return `https://img.shields.io/badge/-${text}-2c4c6b?style=flat&logo=${logo}`;
}

export default function ProjectItem({ project }) {
	const { title, description, link, github, techs } = project;

	return (
		<div className={css.container}>
			<div className={css.infoContainer}>
				<h4>{title}</h4>
				<p>{description}</p>
				<div className={css.badgeContainer}>
					{techs.map(({ name, logo }) => {
						return <img key={name} className={css.badge} src={getBadgeURL(name, logo)} alt={name} />;
					})}
				</div>
			</div>
			<div className={css.buttonsContainer}>
				{link && (
					<LinkButton
						id="link"
						href={link}
						icon={<FiExternalLink />}
						iconName="Project Page"
						tooltip="Abrir página do projeto"
					/>
				)}
				<LinkButton id="github" href={github} icon={<BsGithub />} tooltip="Abrir projeto no GitHub" />
			</div>
		</div>
	);
}
