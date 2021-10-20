import React from 'react';

import jobs from '../data/jobs.json';
// import courses from '../data/courses.json';
import studies from '../data/studies.json';
import pageCSS from './page.module.css';
import css from './about.module.css';

import Title from '../components/Title';
import TextBlock from '../components/TextBlock';
import Header from '../components/Header';

export default function About() {
	const pageName = 'Sobre mim';

	return (
		<div className={pageCSS.pageContainer}>
			<Header pageName={pageName} />
			<div className={pageCSS.pageContent}>
				<Title title={pageName} />
				<div className={css.information}>
					Comecei a estudar sobre programação em 2016 durante meu ensino médio e logo me apaixonei pela área, desde
					então busco aprimorar meus conhecimentos para seguir carreira como programador. Apesar de atualmente estar
					atuando como desenvolvedor Java, já tive a oportunidade de trabalhar desenvolvendo também com .NET e venho
					estudado sobre NodeJS e React, utilizado para montar este portfólio😁.
				</div>

				<h2 className={css.subtitle}>Com o que já trabalhei?</h2>
				{jobs.map(({ id, enterprise, role, description, from, to }) => {
					return <TextBlock key={id} title={role} from={from} to={to} text={description} subtitle={enterprise} />;
				})}

				<h2 className={css.subtitle}>Formação Acadêmica</h2>
				{studies.map(({ id, institute, course, description, from, to }) => {
					return <TextBlock key={id} title={course} from={from} to={to} text={description} subtitle={institute} />;
				})}

				{/* <h2 className={css.subtitle}>Some courses that I have done</h2>
				{courses.map(({ id, institute, course, description, from, to }) => {
					return <TextBlock key={id} title={course} from={from} to={to} text={description} subtitle={institute} />;
				})} */}
			</div>
		</div>
	);
}
