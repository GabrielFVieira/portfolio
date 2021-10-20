import React from 'react';
import ProjectItem from '../components/ProjectItem';

import pageCSS from './page.module.css';
import css from './projects.module.css';

import projects from '../data/projects.json';
import Title from '../components/Title';
import Header from '../components/Header';

export default function Projects() {
	const pageName = 'Projetos';

	return (
		<div className={pageCSS.pageContainer}>
			<Header pageName={pageName} />
			<div className={pageCSS.pageContent}>
				<Title title={pageName} subtitle="Alguns projetos que fiz para fins de aprendizagem" />
				<div className={css.projectList}>
					{projects.map(project => {
						return <ProjectItem key={project.id} project={project} />;
					})}
				</div>
			</div>
		</div>
	);
}
