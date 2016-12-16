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

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.preparatic.archivos.TestNavigatorGenerator;
import com.preparatic.entidades.GestorAnho;
import com.preparatic.entidades.GestorBloque;
import com.preparatic.entidades.GestorConexionBD;
import com.preparatic.entidades.GestorTematica;
import com.preparatic.entidades.GestorTematica.tematica;
import com.preparatic.gestorpreguntas.GestorPreguntas;
import com.preparatic.gestorpreguntas.GestorPreguntasAnho;
import com.preparatic.gestorpreguntas.GestorPreguntasBloque;
import com.preparatic.gestorpreguntas.GestorPreguntasPorFechas;
import com.preparatic.gestorpreguntas.GestorPreguntasPorTematica;
import com.preparatic.gestorpreguntas.GestorPreguntasTest;
import com.preparatic.gestorpreguntas.GestorPreguntasUsadas;
import com.preparatic.entidades.Test;

public class TestGenerator2011 extends GeneradorPreguntasTest {

	private static Logger logger = LogManager.getLogger(TestGenerator2011.class);
	private static Connection conexion;

	/**
	 * Genera los test en función de la frecuencia de test en base de datos.
	 * 
	 * @param args
	 */
	public static void main(String[] args) {
		
		logger.info("Generador de test. Promoción XXIV. Diciembre 2016");
		logger.info("Se generan los test en función de las estadísticas.");

		// Abrir la conexión
		conexion = GestorConexionBD.getConnection();
		generarTest();

		/* Cierre del generador. */
		try {
			conexion.close();
		} catch (SQLException e) {
			logger.error(e.getMessage());
		}

		logger.info("Preparatic XXIV. Generación de test terminada.");
	}

	/**
	 * Genera la estructura de preguntas de la base de datos. Es necesario para
	 * poder repartir las preguntas existentes en base de datos en los distintos
	 * test.
	 */
//	private static void crearTemas(
//			HashMap<Integer, GestorPreguntasPorFechas> listaGestorPreguntas) {
//
//		/* Generamos las listas */
//		if (listaGestorPreguntas == null)
//			listaGestorPreguntas = new HashMap<Integer, GestorPreguntasPorFechas>();
//
//		try {
//			// Creamos un Tema para cada uno que hay en base de datos.
//			Statement sentencia = conexion.createStatement();
//			ResultSet resultados = sentencia
//					.executeQuery("SELECT `TEMA`, `FRECUENCIA_APARICION_TEST` FROM `TEMARIO`");
//			while (!resultados.isLast()) {
//				resultados.next();
//				GestorPreguntasPorFechas gestor = new GestorPreguntasPorFechas(
//						resultados.getInt("TEMA"),
//						resultados.getInt("FRECUENCIA_APARICION_TEST"));
//				listaGestorPreguntas.put(gestor.getIdTema(), gestor);
//
//			}
//
//			sentencia.close();
//			resultados.close();
//		} catch (SQLException e) {
//			logger.error(e.getMessage());
//		}
//
//	}

	/**
	 * Generamos los test por bloques.
	 * 
	 * @param numBloque
	 * @param numTest
	 */
//	private static void generarTestBloques() {
//		GestorPreguntasUsadas.BorrarUsadas();
//
//		/*
//		 * Por cada bloque, usamos un tema al que le vamos a asignar todas las
//		 * preguntas.
//		 */
//		GestorBloque g = new GestorBloque();
//		for (String idBloque : g.getBloque()) {
//			GestorPreguntasBloque bloque = new GestorPreguntasBloque(idBloque);
//
//			int totalPreguntasBloque = bloque.getPreguntasSinUsar();
//			int totalTestsBloque = totalPreguntasBloque
//					/ Integer.parseInt(ConfigProperties
//							.getProperty("tests.num_preguntas_por_test"));
//
//			// Repartimos las preguntas entre los test del bloque.
//			for (int i = 1; i <= totalTestsBloque; i++) {
//				Test test = new Test(Test.eTipoTest.bloque, idBloque, i);
//				while (!test.estaCompleto()
//						&& (bloque.getPreguntasSinUsar() > 0))
//					test.asignarIdPregunta(bloque.getIdPregunta());
//				test.generarDocumentos(conexion, totalTestsBloque);
//			}
//
//			logger.info("Generado test bloque " + idBloque);
//		}
//		return;
//	}

	/**
	 * Generamos los test por anhos
	 * 
	 */

//	private static void generarTestAnhos() {
//		GestorPreguntasUsadas.BorrarUsadas();
//
//		/*
//		 * Por cada anho, usamos un tema al que le vamos a asignar todas las
//		 * preguntas.
//		 */
//		GestorAnho g = new GestorAnho();
//		for (String idAnho : g.getAnho()) {
//			GestorPreguntasAnho preguntasAnho = new GestorPreguntasAnho(idAnho);
//
//			int totalPreguntasAnho = preguntasAnho.getPreguntasSinUsar();
//			int totalTestsAnho = totalPreguntasAnho
//					/ Integer.parseInt(ConfigProperties
//							.getProperty("tests.num_preguntas_por_test"));
//
//			// Repartimos las preguntas entre los test del anho
//			for (int i = 1; i <= totalTestsAnho; i++) {
//				Test test = new Test(Test.eTipoTest.anho, idAnho, i);
//				while (!test.estaCompleto()
//						&& (preguntasAnho.getPreguntasSinUsar() > 0))
//					test.asignarIdPregunta(preguntasAnho.getIdPregunta());
//				test.generarDocumentos(conexion, totalTestsAnho);
//			}
//
//			logger.info("Generado test Anho " + idAnho);
//		}
//		return;
//	}

	/**
	 * Se generan tanto los tests aleatorios, como los test por bloques.
	 */
	private static void generarTest() {
//
//		generarTestTematica();
//
//		generarTestPorFrecuenciaFecha();
//		generarTestAleatorios();
//		generarTestBloques();
//		generarTestAnhos();
//
//		TestNavigatorGenerator.generarTestNavigation();
	}

	/**
	 * Esta función sólo se utiliza en el caso de querer generar un test que
	 * tiene un identificador en base de datos. Sólo se usa para tests que se
	 * generan de forma manual.
	 */
//	private static void generarTestConcreto(Integer nTest) {
//		GestorPreguntasTest g = new GestorPreguntasTest(nTest);
//		Test t = new Test(nTest);
//		while (g.getPreguntasSinUsar() > 0) {
//			Integer idPregunta = g.getIdPregunta();
//			if (t.asignarIdPregunta(idPregunta) == false)
//				logger.info("Error al asignar pregunta" + idPregunta
//						+ " a test." + t.getIdTest());
//
//		}
//		t.generarDocumentos(conexion, 1);
//		logger.info("Generado test " + nTest.toString());
//	}

	/**
	 * Distribuye las preguntas en tantos Test como haga falta.
	 * 
	 * Distribuye atendiendo a dos razones:
	 * 
	 * Primero, a que se mantenga la frecuencia de aparición de los temas con
	 * respecto a los temas en anteriores ediciones.
	 * 
	 * Segundo, se prima siempre que se escoja una pregunta moderna sobre las
	 * más antiguas.
	 * 
	 * @param numTest
	 */
//	private static void generarTestPorFrecuenciaFecha() {
//
//		GestorPreguntas gestorPreguntasSobrantes = new GestorPreguntas();
//		/*
//		 * El gestor de Preguntas sobrantes, contiene todos los identificadores
//		 * de preguntas que hay en base de datos. Sólo se utiliza en el caso de
//		 * que no se puedan distribuir las preguntas según las frecuencias que
//		 * tienen asignadas en la base de datos.
//		 */
//		HashMap<Integer, GestorPreguntasPorFechas> listaGestorPreguntas = new HashMap<Integer, GestorPreguntasPorFechas>();
//		crearTemas(listaGestorPreguntas);
//
//		// Cogemos el número de tests de lo que ponga en la configuración.
//		int numTestPorFrecuencia = Integer.parseInt(ConfigProperties
//				.getProperty("tests.por_frecuencia_y_fecha"));
//
//		// Generamos cada test
//		List<Test> listaTest = new ArrayList<Test>();
//		Iterator<Test> itrTest;
//		for (int i = 1; i <= numTestPorFrecuencia; i++) {
//			listaTest.add(new Test(i));
//		}
//
//		// Recorremos por temas, asignando preguntas a cada test.
//		Iterator<GestorPreguntasPorFechas> itrTema = listaGestorPreguntas
//				.values().iterator();
//		while (itrTema.hasNext()) {
//			GestorPreguntasPorFechas gestorTemaActual = itrTema.next();
//			for (int j = 0; j < gestorTemaActual.getNumPreguntasEnTest(); j++) {
//				// Para cada test, una pregunta.
//				itrTest = listaTest.iterator();
//				while ((itrTest.hasNext())
//						&& (gestorTemaActual.getPreguntasSinUsar() >= 0)) {
//					Test test = itrTest.next();
//					test.asignarIdPregunta(gestorTemaActual.getIdPregunta());
//				}
//			}
//			/*
//			 * Las preguntas que no se usan de este test, se meten en la lista
//			 * de preguntas sobrantes. Es posible que no tengamos preguntas
//			 * suficientes para distribuir en todos los test manteniendo la
//			 * frecuencia que se entiende de la base de datos.
//			 */
//			gestorTemaActual.copiarPreguntas(gestorPreguntasSobrantes);
//		}
//		logger.debug("Finalizada la distribución de preguntas según frecuencia");
//
//		/*
//		 * Puede que queden test que aún no tengan todas las preguntas. Se sacan
//		 * de forma aleatoria de la lista de preguntas sobrantes.
//		 */
//		itrTest = listaTest.iterator();
//		while (itrTest.hasNext()) {
//			Test test = itrTest.next();
//			while ((!test.estaCompleto())
//					&& (gestorPreguntasSobrantes.getPreguntasSinUsar() > 0)) {
//				test.asignarIdPregunta(gestorPreguntasSobrantes.getIdPregunta());
//			}
//		}
//		logger.debug("Finalizada la distribución de preguntas sobrantes");
//
//		/*
//		 * En este punto, ya se han usado todas las preguntas de la base de
//		 * datos para generar los test. Si, aún quedan test que no están
//		 * completos, se rellenan con preguntas repetidas.
//		 */
//		GestorPreguntas gestorIdPreguntasCompleto = new GestorPreguntas(
//				"SELECT ID FROM PREGUNTAS_TEST; ");
//		itrTest = listaTest.iterator();
//		while (itrTest.hasNext()) {
//			Test test = itrTest.next();
//			// Metemos aleatoriamente preguntas, si falta alguna.
//			while (!test.estaCompleto()) {
//				int idPreguntaAleatoria = gestorIdPreguntasCompleto
//						.getIdPregunta();
//				test.asignarIdPregunta(idPreguntaAleatoria);
//			}
//
//			// Generamos los pdf y los html de cada test.
//			test.generarDocumentos(conexion, 0);
//		}
//
//		logger.debug("Fin test por frecuencia y fecha");
//
//		return;
//
//	}

	/**
	 * Distribuye las preguntas en tantos Test como haga falta.
	 * 
	 * @param numTest
	 */
//	private static void generarTestAleatorios() {
//		GestorPreguntasUsadas.BorrarUsadas();
//		/*
//		 * Cargamos al gestor de preguntas, con todas las preguntas de la base
//		 * de datos.
//		 */
//		GestorPreguntas gestorPreguntas = new GestorPreguntas(
//				"SELECT ID FROM PREGUNTAS_TEST;");
//
//		/*
//		 * Distribuimos las preguntas en tantos test como diga la configuración.
//		 */
//
//		int inicio_test = 1 + Integer.parseInt(ConfigProperties
//				.getProperty("tests.por_frecuencia_y_fecha"));
//		int numTestAleatorios = Integer.parseInt(ConfigProperties
//				.getProperty("tests.aleatorios"));
//		for (int i = inicio_test; i <= inicio_test + numTestAleatorios; i++) {
//			Test test = new Test(i);
//			while ((!test.estaCompleto())
//					&& (gestorPreguntas.getPreguntasSinUsar() > 0)) {
//				test.asignarIdPregunta(gestorPreguntas.getIdPregunta());
//			}
//			test.generarDocumentos(conexion, inicio_test + numTestAleatorios);
//		}
//	}

	/**
	 * Genera todos los test asociados a las temáticas que haya en la base de
	 * datos.
	 */
//	private static void generarTestTematica() {
//
//		GestorTematica g = new GestorTematica();
//		List<tematica> listaTematicas = g.getTematicas();
//
//		for (tematica t : listaTematicas) {
//			GestorPreguntasPorTematica gestorPreguntas = new GestorPreguntasPorTematica(
//					t.id);
//			int iTest = 1;
//			// Generamos tantos Test como sea posible.
//			while (gestorPreguntas.getPreguntasSinUsar() > 0) {
//				Test test = new Test(Test.eTipoTest.tematica, t.id.toString(),
//						iTest);
//				test.setTituloTematica(gestorPreguntas.getTituloTematica());
//				iTest++;
//				while ((!test.estaCompleto())
//						&& (gestorPreguntas.getPreguntasSinUsar() > 0)) {
//					test.asignarIdPregunta(gestorPreguntas.getIdPregunta());
//				}
//				test.generarDocumentos(conexion, iTest);
//			}
//		}
//
//		logger.info("Generación de test por temáticas terminada");
//		return;
//	}
}
