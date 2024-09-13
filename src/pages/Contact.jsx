import React from 'react';
import { Helmet } from 'react-helmet-async';

import pageCSS from './page.module.css';
import css from './contact.module.css';

import Title from '../components/Title';
import ContactInfo from '../components/ContactInfo';

import { BsLinkedin } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';

export default function Contact() {
	const pageName = 'Contato';

	return (
		<div className={pageCSS.pageContainer}>
			<Helmet title={pageName} />
			<div className={pageCSS.pageContent}>
				<Title title={pageName} subtitle="Aqui estão algumas formas de entrar em contato comigo:" />

				<div className={css.buttonsContainer}>
					<ContactInfo
						title="LinkedIn"
						userName="@GabrielFVieira"
						icon={<BsLinkedin />}
						url="https://www.linkedin.com/in/gabrielfvieira"
					/>
					<ContactInfo
						title="Email"
						userName="gabrielfigueiredov@gmail.com"
						icon={<IoIosMail />}
						url="mailto:gabrielfigueiredov@gmail.com"
					/>
				</div>
			</div>
		</div>
	);
}
