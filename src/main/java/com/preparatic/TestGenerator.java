/*******************************************************************************
 * Copyright (c) 2013, 2018 Preparatic and others.
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
import java.util.Collections;
import java.util.List;
import java.util.ListIterator;
import java.util.stream.Collectors;

import org.apache.commons.lang3.StringUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.preparatic.archivos.HtmlGenerator;
import com.preparatic.archivos.TestNavigatorGenerator;
import com.preparatic.csvreaders.CSVReaderFactory;
import com.preparatic.csvreaders.IExcel;
import com.preparatic.entidades.GestorInfoBloque;
import com.preparatic.entidades.GestorInfoTema;
import com.preparatic.entidades.GestorPreguntaTest;
import com.preparatic.entidades.GestorTests;
import com.preparatic.entidades.InfoBloque;
import com.preparatic.entidades.InfoTema;
import com.preparatic.entidades.PreguntaTest;
import com.preparatic.entidades.Test;
import com.preparatic.utils.RandomCollection;

public class TestGenerator  {

	private static Logger logger = LogManager.getLogger(TestGenerator.class);

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
			
			// Contamos las preguntas por tema
			List<PreguntaTest> listaPreguntas = GestorPreguntaTest.getInstance().getPreguntas();
			GestorInfoTema.getInstance().contarPreguntasPorTema(listaPreguntas);
			
			// Para depurar con salidas por pantalla.
			listaPreguntas.forEach(pt -> logger.debug(pt.toString()));

			generarTest(listaPreguntas);

		} catch (SQLException e) {
			logger.error(e.getMessage());
		}

		logger.info("Preparatic XXV. Generación de test terminada.");
	}

	/**
	 * Se generan tanto los tests globales, como los test por bloques.
	 */
	private static void generarTest(List<PreguntaTest> listaPreguntas) {
		// Esta funcion genera un test llamado 0000 que tiene todas las preguntas
		// solo lo uso para comprobaciones. Con todas las preguntas se convierte 
		// en algo inviable
		//generarTodosLosTest(listaPreguntas);

		generarTestExamenes(listaPreguntas);
		
		generarTestPonderados(listaPreguntas);
		
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
		 * Distribuimos las preguntas en tantos test como diga la Corrección.
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
	
	/*
	 * Genera tests con X preguntas de temas generales e Y preguntas de temas específicos
	 * Se hace una ponderación en base a los pesos de los temas, recogidos en el Google Sheet
	 * 'Bloques, temas y temáticas', en la pestaña de 'Temas'
	 * El peso de cada pregunta (su probabilidad de aparecer en un test) se calcula en 
	 * función del peso del tema y del nº de preguntas existentes para ese tema,
	 * para evitar que temas con más preguntas disponibles aparezcan con más frecuencia
	 */
	private static void generarTestPonderados(List<PreguntaTest> listaPreguntas) {
		
		List<PreguntaTest> preguntasBA = GestorPreguntaTest.filterBloqueA(listaPreguntas);
		List<PreguntaTest> preguntasBB = GestorPreguntaTest.filterBloqueB(listaPreguntas);
		
		/*
		 * Distribuimos las preguntas en tantos test como diga la Corrección.
		 */
		int inicio_test = 1 + Integer.parseInt(ConfigProperties.getProperty("tests.por_frecuencia_y_fecha"));
		int numTestPonderados = Integer.parseInt(ConfigProperties.getProperty("tests.ponderados"));
		
		RandomCollection<PreguntaTest> randomPreguntasA = new RandomCollection<PreguntaTest>();
		preguntasBA.forEach(q -> randomPreguntasA.add(q.getPeso(), q));

		RandomCollection<PreguntaTest> randomPreguntasB = new RandomCollection<PreguntaTest>();
		preguntasBB.forEach(q -> randomPreguntasB.add(q.getPeso(), q));

		for (int i = inicio_test; i < inicio_test + numTestPonderados; i++) {
			Test test = new Test(Test.eTipoTest.RELEVANCIA, "relevancia", i);
			
			for (int cnt = 0; cnt < Test.NumPreguntasA; cnt++) {
				while (!test.asignarIdPregunta(randomPreguntasA.next().getNumId()))
					;
			}
			for (int cnt = 0; cnt < Test.NumPreguntasB && !test.estaCompleto(); cnt++) {
				while (!test.asignarIdPregunta(randomPreguntasB.next().getNumId()))
					;
			}
			
			// Generamos los pdf y los html de cada test.
			test.generarDocumentos(listaPreguntas, inicio_test + numTestPonderados);
			gestorTest.addTest(test);
		}
	}

	/**
	 * Cálculo de división con dos enteros para determinar el número de test (y evitar que se generen tests vacíos)
	 * divisionCeil = a/b
	 * 
	 * Justificación:
	 * https://stackoverflow.com/questions/7139382/java-rounding-up-to-an-int-using-math-ceil		
	 */
	private static int divisionCeil(int a, int b) {
		int output;
		//output = (a - 1) / b + 1;
		//output = (a + b - 1) / b;
		//output = (int) Math.ceil((float) a / (float) b);
		output = (int) Math.ceil((double) a / b);
		logger.info("divisionCeil(int a=" + a + ", int b=" + b + ") => " + output);
		return output;
	}
		
	/**
	 * Generamos los test por bloques.
	 * 
	 * @param numBloque
	 * @param numTest
	 */
	private static void generarTestBloques(List<PreguntaTest> listaPreguntas) {
		//float num_preguntas_por_test = Float.parseFloat(ConfigProperties.getProperty("tests.bloques.num_preguntas_por_test"));
		int num_preguntas_por_test = Integer.parseInt(ConfigProperties.getProperty("tests.bloques.num_preguntas_por_test"));

		/*
		 * Por cada bloque, usamos un tema al que le vamos a asignar todas las
		 * preguntas.
		 */
		List<InfoBloque> listaBloques = GestorInfoBloque.getInstance().getBloques();
		for (InfoBloque bloque : listaBloques) {
			List<PreguntaTest> filteredList = listaPreguntas.stream()
					.filter(question -> question.getBloques().contains(bloque.getNombreBloque()))
					.collect(Collectors.toList());
			//mod_AZ 2018_03_11 START
			//float totalPreguntasBloque = filteredList.size();
			int totalPreguntasBloque = filteredList.size();
			//int totalTestsBloque = (int) Math.ceil(totalPreguntasBloque / num_preguntas_por_test);
			int totalTestsBloque = divisionCeil(totalPreguntasBloque, num_preguntas_por_test);
			//mod_AZ 2018_03_11 END

			ListIterator<PreguntaTest> iterator = filteredList.listIterator();
			// Repartimos las preguntas entre los test del bloque.
			for (int i = 1; i <= totalTestsBloque; i++) {
				Test test = new Test(Test.eTipoTest.BLOQUE, bloque
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

				//mod_AZ 2018_03_11 para que no se generen tests vacíos
	            //if (test.estaCompleto()) 
	            //{ 
					// Generamos los pdf y los html de cada test.
					test.generarDocumentos(listaPreguntas, totalTestsBloque);
					gestorTest.addTest(test);
	            //} 
	            //mod_AZ 2018_03_11 para que no se generen tests vacíos											
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
		//int num_preguntas_por_test = (int) Float.parseFloat(ConfigProperties.getProperty("tests.temas.num_preguntas_por_test"));
		int num_preguntas_por_test = Integer.parseInt(ConfigProperties.getProperty("tests.temas.num_preguntas_por_test"));

		/*
		 * Por cada bloque, usamos un tema al que le vamos a asignar todas las
		 * preguntas.
		 */
		List<InfoTema> listaTemas = GestorInfoTema.getInstance().getTemas();
		for (InfoTema tema : listaTemas) {
			List<PreguntaTest> filteredList = listaPreguntas.stream()
					.filter(question -> question.getTemas().contains(tema.getNumTema())).collect(Collectors.toList());
			//mod_AZ 2018_03_11 START
			//float totalPreguntasTema = filteredList.size();			
			int totalPreguntasTema = filteredList.size();
			//int totalTestsTema = (int) Math.ceil(totalPreguntasTema / num_preguntas_por_test);
			int totalTestsTema = divisionCeil(totalPreguntasTema, num_preguntas_por_test);
			//mod_AZ 2018_03_11 END			

			ListIterator<PreguntaTest> iterator = filteredList.listIterator();
			// Repartimos las preguntas entre los test del bloque.
			for (int i = 1; i <= totalTestsTema; i++) {
				Test test = new Test(Test.eTipoTest.TEMA, "T"
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
				
				//mod_AZ 2018_03_11 para que no se generen tests vacíos
                //if (test.estaCompleto()) 
                //{ 
    				test.generarDocumentos(listaPreguntas, totalTestsTema);
    				gestorTest.addTest(test);                	
                //} 
                //mod_AZ 2018_03_11 para que no se generen tests vacíos
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
		//float num_preguntas_por_test = Float.parseFloat(ConfigProperties.getProperty("tests.anhos.num_preguntas_por_test"));
		int num_preguntas_por_test = Integer.parseInt(ConfigProperties.getProperty("tests.anhos.num_preguntas_por_test"));
		String[] annos = ConfigProperties.getProperty("tests.anhos").toString().split(",");

		/*
		 * Por cada anho, usamos un tema al que le vamos a asignar todas las
		 * preguntas.
		 */
		for (String idAño : annos) {
			List<PreguntaTest> filteredList = listaPreguntas.stream()
					.filter(question -> question.getAnno_creacion().equalsIgnoreCase(idAño.trim()))
					.collect(Collectors.toList());
			//mod_AZ 2018_03_11 START
			//float totalPreguntasBloque = filteredList.size();
			int totalPreguntasBloque = filteredList.size();
			//int totalTestsAnho =  (int) Math.ceil(totalPreguntasBloque / num_preguntas_por_test);
			int totalTestsAnho = divisionCeil(totalPreguntasBloque, num_preguntas_por_test);
			//mod_AZ 2018_03_11 END

			ListIterator<PreguntaTest> iterator = filteredList.listIterator();
			// Repartimos las preguntas entre los test del anho
			for (int i = 1; i <= totalTestsAnho; i++) {
				Test test = new Test(Test.eTipoTest.AÑO, idAño, i);
				while ((!test.estaCompleto()) && (iterator.hasNext())) {
					PreguntaTest t = iterator.next();
					try {
						int id = t.getNumId();
						test.asignarIdPregunta(id);
					} catch (Exception ex) {
						logger.error("Error procesing id of question " + t);
					}
				}
				
				//mod_AZ 2018_03_11 para que no se generen tests vacíos
                //if (test.estaCompleto()) { 
    				test.generarDocumentos(listaPreguntas, totalTestsAnho);
    				gestorTest.addTest(test);                	
                //} 
                //mod_AZ 2018_03_11 para que no se generen tests vacíos				
			}

			logger.info("Generado test Anho " + idAño);
		}
		return;
	}
	
	private static void generarTestExamenes(List<PreguntaTest> listaPreguntas) {
		//float num_preguntas_por_test = Float.parseFloat(ConfigProperties.getProperty("tests.examenes.num_preguntas_por_test"));
		// Create a list with the distinct elements using stream.
		List<String> examenes = listaPreguntas.stream()
				.filter(p -> !p.getExamen().isEmpty())
				.map(p -> StringUtils.stripAccents(p.getExamen().toUpperCase()))
				.distinct()
				.collect(Collectors.toList());
		
		/*
		 * Por cada anho, usamos un tema al que le vamos a asignar todas las
		 * preguntas.
		 */
		for (String examen : examenes) {
			List<PreguntaTest> filteredList = listaPreguntas.stream()
					.filter(question -> StringUtils.stripAccents(question.getExamen()).equalsIgnoreCase(examen.trim()))
					.collect(Collectors.toList());

			ListIterator<PreguntaTest> iterator = filteredList.listIterator();
			// Repartimos las preguntas entre los test del anho
			Test test = new Test(Test.eTipoTest.EXAMEN, examen, 1);
			while (iterator.hasNext()) {
				PreguntaTest t = iterator.next();
				try {
					int id = t.getNumId();
					test.asignarIdPregunta(id);
				} catch (Exception ex) {
					logger.error("Error procesing id of question " + t);
				}
			}
			
			test.generarDocumentos(listaPreguntas, 1);
			gestorTest.addTest(test);
			logger.info("Generado test Examen " + examen);
		}
		return;
	}
}