import React from 'react';

import pageCSS from './page.module.css';
import css from './contact.module.css';

import Title from '../components/Title';
import Header from '../components/Header';
import ContactInfo from '../components/ContactInfo';

import linkedinIcon from '../assets/icons/linkedin.svg';
import emailIcon from '../assets/icons/email.svg';

export default function Contact() {
	const pageName = 'Contato';

	return (
		<div className={pageCSS.pageContainer}>
			<Header pageName={pageName} />
			<div className={pageCSS.pageContent}>
				<Title title={pageName} subtitle="Aqui estão algumas formas de entrar em contato comigo" />

				<div className={css.buttonsContainer}>
					<ContactInfo
						title="LinkedIn"
						userName="@GabrielFVieira"
						image={linkedinIcon}
						url="https://www.linkedin.com/in/gabrielfvieira"
					/>
					<ContactInfo
						title="Email"
						userName="gabrielfigueiredov@gmail.com"
						image={emailIcon}
						url="mailto:gabrielfigueiredov@gmail.com"
					/>
				</div>
			</div>
		</div>
	);
}
