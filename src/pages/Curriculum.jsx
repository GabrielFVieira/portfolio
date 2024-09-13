import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';

import pageCSS from './page.module.css';
import css from './curriculum.module.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';
import './fix_pdf_zoom.css';

export default function Curriculum() {
	const getFilePluginInstance = getFilePlugin({
		fileNameGenerator: (file) => {
			const fileName = file.name.substring(file.name.lastIndexOf('/') + 1);
			return `gabriel-figueiredo-vieira-${fileName}`;
		},
	});
	const { Download } = getFilePluginInstance;
	const fullScreenPluginInstance = fullScreenPlugin({
		onEnterFullScreen: (zoom) => {
			zoom(SpecialZoomLevel.PageFit);
		},
		onExitFullScreen: (zoom) => {
			zoom(SpecialZoomLevel.PageWidth);
		},
	});
	const { EnterFullScreenButton } = fullScreenPluginInstance;

	return (
		<div className={pageCSS.pageContainer}>
			<Helmet title="Currículo" />

			<div>
				<div className={css.pdfbuttons}>
					<EnterFullScreenButton />
					<Download />
				</div>

				<div className={css.curriculum}>
					<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
						<Viewer plugins={[getFilePluginInstance, fullScreenPluginInstance]} fileUrl='/portfolio/curriculum.pdf' defaultScale={SpecialZoomLevel.PageWidth} />
					</Worker>
				</div>
			</div>
		</div>
	);
}
