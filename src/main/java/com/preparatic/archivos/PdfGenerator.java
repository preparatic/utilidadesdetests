/*******************************************************************************
 * Copyright (c) 2013, 2016 Prepartic and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/
package com.preparatic.archivos;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.Font;
import com.lowagie.text.Image;
import com.lowagie.text.ListItem;
import com.lowagie.text.Paragraph;
import com.lowagie.text.pdf.MultiColumnText;
import com.lowagie.text.pdf.PdfWriter;
import com.preparatic.ConfigProperties;
import com.preparatic.entidades.PreguntaTest;
import com.preparatic.entidades.Test;

public class PdfGenerator {

	private static Logger logger = LogManager.getLogger(PdfGenerator.class);

	private static final float distanciaInterPregunta = 15;

	private Document docpregs;
	private Document docsols;
	private final com.lowagie.text.List listaPreguntas;

	private com.lowagie.text.List listaRespuestas;

	private final com.lowagie.text.List listaSoluciones;
	private final Font miFuentePregs = new Font(Font.UNDEFINED, 9, Font.NORMAL);
	private final Font miFuenteSols = new Font(Font.UNDEFINED, 10, Font.NORMAL);

	private final Test test;
	private String tituloTematica;

	/**
	 * 
	 * @param numTest
	 * @param idBloque
	 *            0 si no es un bloque.
	 */
	public PdfGenerator(Test test) {

		this.test = test;

		// Generar las listas de preguntas.
		listaPreguntas = new com.lowagie.text.List(true);
		listaSoluciones = new com.lowagie.text.List(true);
	}

	/**
	 * Añde al test una colección de preguntas.
	 * 
	 * @param resultados
	 */
	public void agregarPreguntas(ResultSet resultados) throws Exception {
		while (!resultados.isLast()) {
			resultados.next();
			agregarPregunta(resultados);
		}
	}

	public void agregarPreguntas(List<PreguntaTest> resultados) throws Exception {
		// resultados.forEach(pt -> agregarPregunta(pt));

		for (int i = 0; i < resultados.size(); ++i) {
			agregarPregunta(resultados.get(i), i + 1 == resultados.size());
		}
	}

	/**
	 * Añde una pregunta al test.
	 * 
	 * @param resultados
	 * @throws Exception
	 */
	private void agregarPregunta(PreguntaTest pregunta, boolean isLast) {
		// Creamos una lista para las respuestas.
		listaRespuestas = new com.lowagie.text.List(true, true);

		listaRespuestas.add(new ListItem(pregunta.getRespuesta_a(), miFuentePregs));
		listaRespuestas.add(new ListItem(pregunta.getRespuesta_b(), miFuentePregs));
		listaRespuestas.add(new ListItem(pregunta.getRespuesta_c(), miFuentePregs));
		listaRespuestas.add(new ListItem(pregunta.getRespuesta_d(), miFuentePregs));

		// Incorporamos la lista de respuestas en un único Párrafo
		Paragraph parrafoPregunta = new Paragraph(pregunta.getPregunta(), miFuentePregs);
		parrafoPregunta.setKeepTogether(true);
		parrafoPregunta.add(listaRespuestas);
		if (!isLast)
			parrafoPregunta.setSpacingAfter(distanciaInterPregunta);

		// Metemos la pregunta como un Li en ListaPreguntas.
		ListItem li = new ListItem(parrafoPregunta);
		li.setKeepTogether(true);
		listaPreguntas.add(li);
		String cadenaSolucion = pregunta.getRespuesta_correcta().toUpperCase();
		if (pregunta.getTemas() != null)
			cadenaSolucion += " (T" + pregunta.getTemas() + ")";
		listaSoluciones.add(new ListItem(cadenaSolucion, miFuenteSols));
	}

	private void agregarPregunta(ResultSet resultados) throws Exception {

		// Creamos una lista para las respuestas.
		listaRespuestas = new com.lowagie.text.List(true, true);

		listaRespuestas.add(new ListItem(resultados.getString("RESPUESTA_A"), miFuentePregs));
		listaRespuestas.add(new ListItem(resultados.getString("RESPUESTA_B"), miFuentePregs));
		listaRespuestas.add(new ListItem(resultados.getString("RESPUESTA_C"), miFuentePregs));
		listaRespuestas.add(new ListItem(resultados.getString("RESPUESTA_D"), miFuentePregs));

		// Incorporamos la lista de respuestas en un único Párrafo
		Paragraph parrafoPregunta = new Paragraph(resultados.getString("PREGUNTA"), miFuentePregs);
		parrafoPregunta.setKeepTogether(true);
		parrafoPregunta.add(listaRespuestas);
		if (!resultados.isLast())
			parrafoPregunta.setSpacingAfter(distanciaInterPregunta);

		// Metemos la pregunta como un Li en ListaPreguntas.
		ListItem li = new ListItem(parrafoPregunta);
		li.setKeepTogether(true);
		listaPreguntas.add(li);
		String cadenaSolucion = resultados.getString("RESPUESTA_CORRECTA").toUpperCase();
		if (resultados.getString(7) != null)
			cadenaSolucion += " (T" + resultados.getString("TEMAS") + ")";
		listaSoluciones.add(new ListItem(cadenaSolucion, miFuenteSols));
	}

	/**
	 * Genera un pdf para las preguntas y otro para las soluciones.
	 * 
	 * @throws Exception
	 */
	public void guardarPDF() throws Exception {

		// Abrir documentos
		docpregs = new Document();
		docsols = new Document();

		PdfWriter.getInstance(docpregs,
				FactoriaArchivo.pdfTest(test.getTipoTest(), test.getIdBloqueTematicaAnho(), test.getIdTest()));
		PdfWriter.getInstance(docsols,
				FactoriaArchivo.pdfSol(test.getTipoTest(), test.getIdBloqueTematicaAnho(), test.getIdTest()));

		docpregs.open();
		docsols.open();
		if ((test.getTipoTest() == Test.eTipoTest.bloque) || (test.getTipoTest() == Test.eTipoTest.anho))
			docsols.setMargins(120, 108, 72, 36);

		// Añdir logo
		Image gif = Image.getInstance(ConfigProperties.getProperty("files.rootDir") + "/images/logo.png");
		gif.setAlignment(Image.LEFT);
		docpregs.add(gif);
		docsols.add(gif);

		ponerTitulo(docpregs, docsols);

		// Añdimos las preguntas al documento de preguntas
		docpregs.add(listaPreguntas);

		/*
		 * Añdimos las respuestas, en varias columnas al documento de
		 * respuestas.
		 */
		MultiColumnText multiColumnTextSoluciones = new MultiColumnText();
		multiColumnTextSoluciones.addRegularColumns(docsols.left(), docsols.right(), 10f,
				Integer.parseInt(ConfigProperties.getProperty("tests.solucion.columnas")));
		multiColumnTextSoluciones.addElement(listaSoluciones);
		docsols.add(multiColumnTextSoluciones);

		// Cerramos los documentos
		docpregs.close();
		docsols.close();
	}

	public void setTituloTematica(String tituloTematica) {
		this.tituloTematica = tituloTematica;
	}

	private void ponerTitulo(Document docpregs, Document docsols) {

		// Titulos de los tests.
		String tituloPregs, tituloSols, subtitulo = "";
		tituloPregs = "Test " + test.getIdTest();
		tituloSols = "Soluciones test " + test.getIdTest();

		try {
			// Ponemos los tÃ­tulos
			Paragraph parrafo = new Paragraph(tituloPregs, new Font(Font.UNDEFINED, Font.DEFAULTSIZE * 2, Font.BOLD));
			parrafo.setAlignment(Paragraph.ALIGN_CENTER);
			docpregs.add(parrafo);

			parrafo = new Paragraph(tituloSols, new Font(Font.UNDEFINED, Font.DEFAULTSIZE * 2, Font.BOLD));
			parrafo.setAlignment(Paragraph.ALIGN_CENTER);
			docsols.add(parrafo);

			switch (test.getTipoTest()) {
			case aleatorio:
				subtitulo = "";
				break;
			case bloque:
				subtitulo = " Bloque " + test.getIdBloqueTematicaAnho();
				break;
			case anho:
				subtitulo = " Año " + test.getIdBloqueTematicaAnho();
				break;
			case tematica:
				subtitulo = " Temas " + tituloTematica;
				break;
			}

			// SubTÃ­tulo
			if (subtitulo != "") {
				parrafo = new Paragraph(subtitulo, new Font(Font.UNDEFINED, Font.DEFAULTSIZE, Font.BOLD));
				parrafo.setSpacingAfter(distanciaInterPregunta);
				parrafo.setAlignment(Paragraph.ALIGN_CENTER);
				docpregs.add(parrafo);
				docsols.add(parrafo);
			}

		} catch (DocumentException e) {
			logger.error("Crear PDF. Poner título.");
			logger.error(e.getMessage());
		}

	}
}
