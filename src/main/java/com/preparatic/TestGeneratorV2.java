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
package com.preparatic;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.ListIterator;
import java.util.stream.Collectors;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.preparatic.archivos.HtmlGenerator;
import com.preparatic.archivos.TestNavigatorGenerator;
import com.preparatic.csvreaders.CSVReaderFactory;
import com.preparatic.csvreaders.IExcel;
import com.preparatic.entidades.GestorAnho;
import com.preparatic.entidades.GestorBloque;
import com.preparatic.entidades.GestorInfoBloque;
import com.preparatic.entidades.GestorInfoTema;
import com.preparatic.entidades.GestorPreguntaTest;
import com.preparatic.entidades.GestorTests;
import com.preparatic.entidades.InfoBloque;
import com.preparatic.entidades.InfoTema;
import com.preparatic.entidades.PreguntaTest;
import com.preparatic.entidades.Test;
import com.preparatic.gestorpreguntas.GestorPreguntas;
import com.preparatic.gestorpreguntas.GestorPreguntasAnho;
import com.preparatic.gestorpreguntas.GestorPreguntasBloque;
import com.preparatic.gestorpreguntas.GestorPreguntasUsadas;

public class TestGeneratorV2 extends GeneradorPreguntasTest {

	private static Logger logger = LogManager.getLogger(TestGeneratorV2.class);

	private static GestorTests gestorTest = GestorTests.getInstance();

	public static void main(String[] args) throws Exception {

		logger.info("Generador de test. Promoción XXIV. Diciembre 2016");
		logger.info("Se generan los test con las preguntas disponibles.");

		/*
		 * Crea una lista de preguntas y las procesa para generar los documentos
		 * HTML y PDF
		 */
		try {
			IExcel ficheroExcel = CSVReaderFactory.GetCSVReader();
			// GestorConsultas gestorConsultas = new GestorConsultas();

			// Abrimos el excel/BD
			ficheroExcel.abrirExcel();

			// Obtenemos todos los bloques del excel/BD
			GestorInfoBloque.getInstance().leerBloques(ficheroExcel);

			// Obtenemos todas los temas del excel/BD
			GestorInfoTema.getInstance().leerTemas(ficheroExcel);

			// Obtenemos todas las preguntas del excel/BD
			GestorPreguntaTest.getInstance().leerPreguntas(ficheroExcel);
			GestorPreguntaTest.getInstance().reasignaIdentificadores();

			// Para depurar con salidas por pantalla.
			List<PreguntaTest> listaPreguntas = GestorPreguntaTest.getInstance().getPreguntas();
			listaPreguntas.forEach(pt -> logger.debug(pt.toString()));

			generarTest(listaPreguntas);

		} catch (SQLException e) {
			logger.error(e.getMessage());
		}

		logger.info("Preparatic XXIV. Generación de test terminada.");
	}

	/**
	 * Se generan tanto los tests globales, como los test por bloques.
	 */
	private static void generarTest(List<PreguntaTest> listaPreguntas) {
		// Esta funcion genera un test llamado 0000 que tiene todas las preguntas
		// solo lo uso para comprobaciones. Con todas las preguntas se convierte 
		// en algo inviable
		//generarTodosLosTest(listaPreguntas);

		generarTestAleatorios(listaPreguntas);
		generarTestBloques(listaPreguntas);
		generarTestTemas(listaPreguntas);
		generarTestAnhos(listaPreguntas);

		HtmlGenerator.generarMetaInfoV2();
		TestNavigatorGenerator.generarTestNavigation();
	}

	/**
	 * Genera un test con todas las preguntas disponibles
	 * 
	 * @param listaPreguntas
	 */
	private static void generarTodosLosTest(List<PreguntaTest> listaPreguntas) {

		/*
		 * Generamos un test con todas las preguntas disponibles.
		 */
		Test testcompleto = new Test(0, listaPreguntas.size());
		for (PreguntaTest t : listaPreguntas) {
			try {
				int id = t.getNumId();
				testcompleto.asignarIdPregunta(id);
			} catch (Exception ex) {
				logger.error("Error procesing id of question " + t);
			}
		}
		
		// Generamos los pdf y los html de cada test.
		testcompleto.generarDocumentos(listaPreguntas, listaPreguntas.size());
		gestorTest.addTest(testcompleto);
	}

	/**
	 * Distribuye las preguntas en tantos Test como haga falta.
	 * 
	 * @param listaPreguntas
	 */

	private static void generarTestAleatorios(List<PreguntaTest> listaPreguntas) {

		List<PreguntaTest> preguntasBA = GestorPreguntaTest.filterBloqueA(listaPreguntas);
		List<PreguntaTest> preguntasBB = GestorPreguntaTest.filterBloqueB(listaPreguntas);
		
		/*
		 * Distribuimos las preguntas en tantos test como diga la configuración.
		 */
		int inicio_test = 1 + Integer.parseInt(ConfigProperties.getProperty("tests.por_frecuencia_y_fecha"));
		int numTestAleatorios = Integer.parseInt(ConfigProperties.getProperty("tests.aleatorios"));

		for (int i = inicio_test; i <= inicio_test + numTestAleatorios; i++) {
			Test test = new Test(i);

			if (preguntasBA.size() > 0) {
				Collections.shuffle(preguntasBA);
				ListIterator<PreguntaTest> iterator = preguntasBA.listIterator();
				for (int cnt = 0; cnt < Test.NumPreguntasA; cnt++) {
					/*
					 * En este punto, ya se han usado todas las preguntas disponibles
					 * para generar los test. Si, aún quedan test que no están
					 * completos, se rellenan con preguntas repetidas.
					 */
					if (!iterator.hasNext()) {
						Collections.shuffle(preguntasBA);
						iterator = preguntasBA.listIterator();
					}
					PreguntaTest t = iterator.next();
					try {
						int id = t.getNumId();
						test.asignarIdPregunta(id);
					} catch (Exception ex) {
						logger.error("Error procesing id of question " + t);
					}
				}
			}
			if (preguntasBB.size() > 0) {
				Collections.shuffle(preguntasBB);
				ListIterator<PreguntaTest> iterator = preguntasBB.listIterator();
				for (int cnt = 0; cnt < Test.NumPreguntasB && !test.estaCompleto(); cnt++) {
					/*
					 * En este punto, ya se han usado todas las preguntas disponibles
					 * para generar los test. Si, aún quedan test que no están
					 * completos, se rellenan con preguntas repetidas.
					 */
					if (!iterator.hasNext()) {
						Collections.shuffle(preguntasBB);
						iterator = preguntasBB.listIterator();
					}
					PreguntaTest t = iterator.next();
					try {
						int id = t.getNumId();
						test.asignarIdPregunta(id);
					} catch (Exception ex) {
						logger.error("Error procesing id of question " + t);
					}
				}
			}
			
			// Generamos los pdf y los html de cada test.
			test.generarDocumentos(listaPreguntas, inicio_test + numTestAleatorios);
			gestorTest.addTest(test);
		}

	}

	/**
	 * Generamos los test por bloques.
	 * 
	 * @param numBloque
	 * @param numTest
	 */
	private static void generarTestBloques(List<PreguntaTest> listaPreguntas) {
		float num_preguntas_por_test = Float.parseFloat(ConfigProperties.getProperty("tests.num_preguntas_por_test"));

		/*
		 * Por cada bloque, usamos un tema al que le vamos a asignar todas las
		 * preguntas.
		 */
		List<InfoBloque> listaBloques = GestorInfoBloque.getInstance().getBloques();
		for (InfoBloque bloque : listaBloques) {
			List<PreguntaTest> filteredList = listaPreguntas.stream()
					.filter(question -> question.getBloques().contains(bloque.getNombreBloque()))
					.collect(Collectors.toList());
			float totalPreguntasBloque = filteredList.size();
			int totalTestsBloque =  (int) Math.ceil(totalPreguntasBloque / num_preguntas_por_test);

			ListIterator<PreguntaTest> iterator = filteredList.listIterator();
			// Repartimos las preguntas entre los test del bloque.
			for (int i = 1; i <= totalTestsBloque; i++) {
				Test test = new Test(Test.eTipoTest.bloque, bloque
						.getNombreBloque() /* + ". " + bloque.getTitulo() */, i);
				while ((!test.estaCompleto()) && (iterator.hasNext())) {
					PreguntaTest t = iterator.next();
					try {
						int id = t.getNumId();
						test.asignarIdPregunta(id);
					} catch (Exception ex) {
						logger.error("Error procesing id of question " + t);
					}
				}
				
				// Generamos los pdf y los html de cada test.
				test.generarDocumentos(listaPreguntas, totalTestsBloque);
				gestorTest.addTest(test);
			}

			logger.info("Generado test bloque " + bloque.getTitulo());
		}
		return;
	}

	/**
	 * Generamos los test por temas.
	 * 
	 * @param numBloque
	 * @param numTest
	 */
	private static void generarTestTemas(List<PreguntaTest> listaPreguntas) {
		float num_preguntas_por_test = Float.parseFloat(ConfigProperties.getProperty("tests.num_preguntas_por_test"));

		/*
		 * Por cada bloque, usamos un tema al que le vamos a asignar todas las
		 * preguntas.
		 */
		List<InfoTema> listaTemas = GestorInfoTema.getInstance().getTemas();
		for (InfoTema tema : listaTemas) {
			List<PreguntaTest> filteredList = listaPreguntas.stream()
					.filter(question -> question.getTemas().contains(tema.getNumTema())).collect(Collectors.toList());
			float totalPreguntasTema = filteredList.size();
			int totalTestsTema = (int) Math.ceil(totalPreguntasTema / num_preguntas_por_test);

			ListIterator<PreguntaTest> iterator = filteredList.listIterator();
			// Repartimos las preguntas entre los test del bloque.
			for (int i = 1; i <= totalTestsTema; i++) {
				Test test = new Test(Test.eTipoTest.tema, "T"
						+  tema.getNumTema()  /* + ". " + bloque.getTitulo() */, i);
				while ((!test.estaCompleto()) && (iterator.hasNext())) {
					PreguntaTest t = iterator.next();
					try {
						int id = t.getNumId();
						test.asignarIdPregunta(id);
					} catch (Exception ex) {
						logger.error("Error procesing id of question " + t);
					}
				}
				test.generarDocumentos(listaPreguntas, totalTestsTema);
				gestorTest.addTest(test);
			}

			logger.info("Generado test tema " + tema.getTituloCorto());
		}
		return;
	}

	/**
	 * Generamos los test por anhos
	 * 
	 */

	private static void generarTestAnhos(List<PreguntaTest> listaPreguntas) {
		float num_preguntas_por_test = Float.parseFloat(ConfigProperties.getProperty("tests.num_preguntas_por_test"));
		String[] annos = ConfigProperties.getProperty("tests.anhos").toString().split(",");

		/*
		 * Por cada anho, usamos un tema al que le vamos a asignar todas las
		 * preguntas.
		 */
		for (String idAnho : annos) {
			List<PreguntaTest> filteredList = listaPreguntas.stream()
					.filter(question -> question.getAnno_creacion().equalsIgnoreCase(idAnho.trim()))
					.collect(Collectors.toList());
			float totalPreguntasBloque = filteredList.size();
			int totalTestsAnho =  (int) Math.ceil(totalPreguntasBloque / num_preguntas_por_test);

			ListIterator<PreguntaTest> iterator = filteredList.listIterator();
			// Repartimos las preguntas entre los test del anho
			for (int i = 1; i <= totalTestsAnho; i++) {
				Test test = new Test(Test.eTipoTest.anho, idAnho, i);
				while ((!test.estaCompleto()) && (iterator.hasNext())) {
					PreguntaTest t = iterator.next();
					try {
						int id = t.getNumId();
						test.asignarIdPregunta(id);
					} catch (Exception ex) {
						logger.error("Error procesing id of question " + t);
					}
				}
				test.generarDocumentos(listaPreguntas, totalTestsAnho);
				gestorTest.addTest(test);
			}

			logger.info("Generado test Anho " + idAnho);
		}
		return;
	}
}
