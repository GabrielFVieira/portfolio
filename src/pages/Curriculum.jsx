import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { getFilePlugin } from '@react-pdf-viewer/get-file';

import pageCSS from './page.module.css';
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function Curriculum() {
	const getFilePluginInstance = getFilePlugin();
	const { Download } = getFilePluginInstance;

	return (
		<div className={pageCSS.pageContainer}>
			<Helmet title="Currículo" />
			{/* <Download>
			{
				(props) => (
					<button onClick={props.onClick}>Download</button>
				)
			}
			</Download> */}
			<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
				<Viewer plugins={[getFilePluginInstance]} fileUrl='/portfolio/curriculum.pdf' />
				{/* <div className={pageCSS.pageContent}>
					<img className={css.curriculum} src={curriculum} alt="Curriculum" />
				</div> */}
			</Worker>
		</div>
	);
}
