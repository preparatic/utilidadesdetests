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

import com.preparatic.archivos.TestNavigatorGenerator;
import com.preparatic.csvreaders.CSVReaderFactory;
import com.preparatic.csvreaders.IExcel;
import com.preparatic.entidades.GestorAnho;
import com.preparatic.entidades.GestorBloque;
import com.preparatic.entidades.InfoBloque;
import com.preparatic.entidades.PreguntaTest;
import com.preparatic.entidades.Test;
import com.preparatic.gestorpreguntas.GestorPreguntas;
import com.preparatic.gestorpreguntas.GestorPreguntasAnho;
import com.preparatic.gestorpreguntas.GestorPreguntasBloque;
import com.preparatic.gestorpreguntas.GestorPreguntasUsadas;

public class TestGeneratorV2 extends GeneradorPreguntasTest {

	private static Logger logger = LogManager.getLogger(TestGeneratorV2.class);

	public static void main(String[] args) throws Exception {

		logger.info("Generador de test. Promoción XXIV. Diciembre 2016");
		logger.info("Se generan los test en función de las estadísticas.");

		/*
		 * Crea una lista de preguntas y las procesa para generar los documentos
		 * HTML y PDF
		 */
		try {
			IExcel ficheroExcel = CSVReaderFactory.GetCSVReader();
			// GestorConsultas gestorConsultas = new GestorConsultas();

			// Abrimos el excel
			ficheroExcel.abrirExcel();

			// Obtenemos todas los bloques del excel
			List<InfoBloque> listaBloques = ficheroExcel.getListaBloques();
						
			// Obtenemos todas las preguntas del excel
			List<PreguntaTest> listaPreguntas = ficheroExcel.getListaPreguntas();
			// convert list to stream
			List<PreguntaTest> filteredList = listaPreguntas.stream()
					/*
					 * // filters the question, equals to some year
					 * .filter(question -> question.getAnno_creacion().equals("2016")) 
					 * // filters the question, equals to some author 
					 * .filter(question -> question.getAutor().equals("LGD"))
					 */
					// collect the output and convert streams to a List
					.collect(Collectors.toList());

			int id = 10000;
			for (PreguntaTest pt : filteredList) {
				// if(pt.getNumId() == -1)
				pt.setId(Integer.toString(id++));
			}

			// Para depurar con salidas por pantalla.
			filteredList.forEach(pt -> logger.debug(pt.toString()));
			// for (PreguntaTest pt : filteredList) {
			// logger.debug(pt.toString());

			 generarTest(filteredList, listaBloques);

		} catch (SQLException e) {
			logger.error(e.getMessage());
		}

		logger.info("Preparatic XXIV. Generación de test terminada.");
	}

	/**
	 * Se generan tanto los tests aleatorios, como los test por bloques.
	 */
	private static void generarTest(List<PreguntaTest> listaPreguntas, List<InfoBloque> listaBloques) {
		generarTodosLosTest(listaPreguntas);

		// generarTestTematica();

		// generarTestPorFrecuenciaFecha(listaPreguntas);
		generarTestAleatorios(listaPreguntas);
		generarTestBloques(listaPreguntas, listaBloques);
		generarTestAnhos(listaPreguntas);

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
		testcompleto.generarDocumentos(listaPreguntas, listaPreguntas.size());
	}
	
	/**
	 * Distribuye las preguntas en tantos Test como haga falta.
	 * 
	 * @param listaPreguntas
	 */
	private static void generarTestAleatorios(List<PreguntaTest> listaPreguntas) {

		/*
		 * Distribuimos las preguntas en tantos test como diga la configuración.
		 */
		int inicio_test = 1 + Integer.parseInt(ConfigProperties.getProperty("tests.por_frecuencia_y_fecha"));
		int numTestAleatorios = Integer.parseInt(ConfigProperties.getProperty("tests.aleatorios"));

		for (int i = inicio_test; i <= inicio_test + numTestAleatorios; i++) {
			Test test = new Test(i);
			Collections.shuffle(listaPreguntas);
			ListIterator<PreguntaTest> iterator = listaPreguntas.listIterator();
			while ((!test.estaCompleto()) && (iterator.hasNext())) {
				PreguntaTest t = iterator.next();
				try {
					int id = t.getNumId();
					test.asignarIdPregunta(id);
				} catch (Exception ex) {
					logger.error("Error procesing id of question " + t);
				}
			}
			test.generarDocumentos(listaPreguntas, inicio_test + numTestAleatorios);
		}

	}
 
	/**
	 * Generamos los test por bloques.
	 * 
	 * @param numBloque
	 * @param numTest
	 */
	private static void generarTestBloques(List<PreguntaTest> listaPreguntas, List<InfoBloque> listaBloques) {
		float num_preguntas_por_test = Float.parseFloat(ConfigProperties.getProperty("tests.num_preguntas_por_test"));
		
		/*
		 * Por cada bloque, usamos un tema al que le vamos a asignar todas las
		 * preguntas.
		 */
		for (InfoBloque bloque : listaBloques) {
			List<PreguntaTest> filteredList = listaPreguntas.stream()
					.filter(question -> question.getBloques().contains(bloque.getNombreBloque()))
					.collect(Collectors.toList());
			int totalPreguntasBloque = filteredList.size();
			int totalTestsBloque = Math.round(totalPreguntasBloque / num_preguntas_por_test);

			ListIterator<PreguntaTest> iterator = filteredList.listIterator();
			// Repartimos las preguntas entre los test del bloque.
			for (int i = 1; i <= totalTestsBloque; i++) {
				Test test = new Test(Test.eTipoTest.bloque, bloque.getNombreBloque() /* + ". " + bloque.getTitulo() */, i);
				while ((!test.estaCompleto()) && (iterator.hasNext())) {
					PreguntaTest t = iterator.next();
					try {
						int id = t.getNumId();
						test.asignarIdPregunta(id);
					} catch (Exception ex) {
						logger.error("Error procesing id of question " + t);
					}
				}
				test.generarDocumentos(listaPreguntas, totalTestsBloque);
			}

			logger.info("Generado test bloque " + bloque.getTitulo());
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
			int totalPreguntasBloque = filteredList.size();
			int totalTestsAnho = Math.round(totalPreguntasBloque / num_preguntas_por_test);

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
			}

			logger.info("Generado test Anho " + idAnho);
		}
		return;
	}
}
