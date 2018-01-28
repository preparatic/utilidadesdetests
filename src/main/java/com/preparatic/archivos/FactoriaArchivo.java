/*******************************************************************************
 * Copyright (c) 2013, 2016 Preparatic and others.
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
/**
 * 
 */
package com.preparatic.archivos;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.text.DecimalFormat;
import java.text.NumberFormat;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.preparatic.ConfigProperties;
import com.preparatic.entidades.Test;

/**
 * @author ester
 * 
 */
public class FactoriaArchivo {

	private static Logger logger = LogManager.getLogger(FactoriaArchivo.class);

	public enum eTipoArchivo {
		pdf, html
	};
	
	// Se van a formatear todos los test con un número de 4 cifras.
	private static final NumberFormat formatter = new DecimalFormat("#0000");

	public static final String pathPdfs = ConfigProperties
			.getProperty("files.rootDir")
			+ ConfigProperties.getProperty("files.pdfDir");

	public static final String pathHtml = ConfigProperties
			.getProperty("files.rootDir")
			+ ConfigProperties.getProperty("files.testsDir");

//	public static final String pathJsScript = ConfigProperties
//			.getProperty("files.rootDir")
//			+ ConfigProperties.getProperty("files.javaScriptDir");

	public static final String pathJsData = ConfigProperties
			.getProperty("files.rootDir")
			+ ConfigProperties.getProperty("files.javaScriptQuestionsDir");

	public static FileOutputStream pdfTest(Test.eTipoTest tipoTest,
			String idBloqueTematica, Integer idTest) {

		String filename = pdfTestFilename(tipoTest, idBloqueTematica, idTest);

		return filenameToOutoutStream(filename);
	}

	public static String pdfTestFilename(Test.eTipoTest tipoTest,
			String idBloqueTematica, Integer idTest) {

		checkAndCreateDir(pathPdfs);
		StringBuilder nombreArchivo = new StringBuilder(pathPdfs);
		nombreArchivo.append(NombreArchivoTest(tipoTest, idBloqueTematica, idTest));
		nombreArchivo.append(".pdf");

		return  nombreArchivo.toString();
	}
	
	/**
	 * Crea el archivo pdf para una solución de un test.
	 * @param tipoTest
	 * @param idBloqueTematica
	 * @param idTest
	 * @return
	 */
	public static FileOutputStream pdfSol(Test.eTipoTest tipoTest,
			String idBloqueTematica, Integer idTest) {

		checkAndCreateDir(pathPdfs);
		StringBuilder nombreArchivo = new StringBuilder(pathPdfs);
		nombreArchivo.append(NombreArchivoSol(tipoTest, idBloqueTematica, idTest));
		nombreArchivo.append(".pdf");

		return filenameToOutoutStream(nombreArchivo.toString());
	}

	/**
	 * Crea el archivo para un html de un test.
	 * @param tipoTest
	 * @param idBloqueTematica
	 * @param idTest
	 * @return
	 */
	public static PrintStream archivoHtmlTest(Test.eTipoTest tipoTest,
			String idBloqueTematica, Integer idTest) {
		checkAndCreateDir(pathHtml);
		String filename = htmlTestFilename(tipoTest, idBloqueTematica, idTest);

		return filenameToPrintStream(filename);
	}
	
	public static String htmlTestFilename(Test.eTipoTest tipoTest,
			String idBloqueTematica, Integer idTest) {
		checkAndCreateDir(pathHtml);
		StringBuilder nombreArchivo = new StringBuilder(pathHtml);
		nombreArchivo.append(NombreArchivoTest(tipoTest, idBloqueTematica, idTest));
		nombreArchivo.append(".html");
	
		return nombreArchivo.toString();
	}
	
	public static void checkAndCreateDirectories()
	{
		checkAndCreateDir(pathHtml);
		checkAndCreateDir(pathPdfs);
//		checkAndCreateDir(pathJsScript);
		checkAndCreateDir(pathJsData);
	}
	
	private static void checkAndCreateDir (String dirPath)
	{
		File directory = new File(String.valueOf(dirPath));
	    if (! directory.exists()){
	        if (!directory.mkdirs())
	        	logger.error("can not create directory "+ dirPath);
	    }
	}

	/**
	 * Crea el archivo javascript para las funciones de navegación entre tests.
	 * @return
	 */
//	public static PrintStream javascriptTestNavigation() {
//		StringBuilder nombreArchivo = new StringBuilder(pathJsScript);
//		nombreArchivo.append(ConfigProperties
//				.getProperty("files.templates.Navigation"));
//
//		return filenameToPrintStream(nombreArchivo.toString());
//
//	}

	
	/**
	 * Crea el archivo para los datos de las preguntas de un test.
	 * @param tipoTest
	 * @param idBloqueTematica
	 * @param idTest
	 * @return
	 */
	public static PrintStream archivoJavascriptTest(Test.eTipoTest tipoTest,
			String idBloqueTematica, Integer idTest) {

		return filenameToPrintStream(NombreArchivoJavascriptPreguntas (tipoTest, idBloqueTematica,idTest));
	}

	/**
	 * Genera la cadena con el nombre de archivo para los datos de un test
	 * @param tipoTest
	 * @param idBloqueTematica
	 * @param idTest
	 * @return
	 */
	public static String NombreArchivoJavascriptPreguntas (Test.eTipoTest tipoTest,
			String idBloqueTematica, Integer idTest) {
		return pathJsData + NombreArchivoTest(tipoTest, idBloqueTematica, idTest)
				+ ".js";
	}

	/**
	 * Dado un tipo de test, y un identificador, devuelve el nombre para el
	 * archivo.
	 * 
	 * @param tipoTest
	 * @param bloqueTematica
	 * @param idTest
	 * @return
	 */
	public static String NombreArchivoTest(Test.eTipoTest tipoTest,
			String bloqueTematica, Integer idTest) {
		
		
		StringBuilder nombreArchivo = new StringBuilder();

		switch (tipoTest) {
		case ALEATORIO:
			nombreArchivo.append(ConfigProperties
					.getProperty("files.prefixRandomTest"));
			nombreArchivo.append(formatter.format(idTest));
			break;
			
		case RELEVANCIA:
			nombreArchivo.append(ConfigProperties
					.getProperty("files.prefixWeightedTest"));
			nombreArchivo.append(formatter.format(idTest));
			break;
			
		case BLOQUE:
			nombreArchivo.append(ConfigProperties
					.getProperty("files.prefixBlockTest"));
			nombreArchivo.append(bloqueTematica + "_");
			nombreArchivo.append(formatter.format(idTest));
			break;
			
		case TEMA:
			nombreArchivo.append(ConfigProperties
					.getProperty("files.prefixThemeTest"));
			nombreArchivo.append(bloqueTematica + "_");
			nombreArchivo.append(formatter.format(idTest));
			break;
			
		case AÑO:
			nombreArchivo.append(ConfigProperties
					.getProperty("files.prefixYearTest"));
			nombreArchivo.append(bloqueTematica + "_");
			nombreArchivo.append(formatter.format(idTest));
			break;
		
		case EXAMEN:
			nombreArchivo.append(ConfigProperties
					.getProperty("files.prefixExamTest"));
			nombreArchivo.append(bloqueTematica + "_");
			nombreArchivo.append(formatter.format(idTest));
			break;
		
		case TEMATICA:
			nombreArchivo.append(ConfigProperties
					.getProperty("files.prefixThematicTest"));
			nombreArchivo.append(bloqueTematica + "_");			
			nombreArchivo.append(formatter.format(idTest));
			break;
		default:
			break;
		}
		return nombreArchivo.toString().replace(' ', '_');

	}

	private static String NombreArchivoSol(Test.eTipoTest tipoTest,
			String idBloqueTematica, Integer idTest) {
		StringBuilder nombreArchivo = new StringBuilder();

		switch (tipoTest) {
		case ALEATORIO:
			nombreArchivo.append(ConfigProperties
					.getProperty("files.prefixRandomTestSol"));
			nombreArchivo.append(formatter.format(idTest));
			break;
			
		case RELEVANCIA:
			nombreArchivo.append(ConfigProperties
					.getProperty("files.prefixWeightedSol"));
			nombreArchivo.append(formatter.format(idTest));
			break;

		case BLOQUE:
			nombreArchivo.append(ConfigProperties
					.getProperty("files.prefixBlockTestSol"));
			nombreArchivo.append(idBloqueTematica + "_");
			nombreArchivo.append(formatter.format(idTest));
			break;
			
		case TEMA:
			nombreArchivo.append(ConfigProperties
					.getProperty("files.prefixThemeTestSol"));
			nombreArchivo.append(idBloqueTematica + "_");
			nombreArchivo.append(formatter.format(idTest));
			break;
			
		case AÑO:
			nombreArchivo.append(ConfigProperties
					.getProperty("files.prefixYearTestSol"));
			nombreArchivo.append(idBloqueTematica + "_");
			nombreArchivo.append(formatter.format(idTest));
			break;
			
		case EXAMEN:
			nombreArchivo.append(ConfigProperties
					.getProperty("files.prefixExamSol"));
			nombreArchivo.append(idBloqueTematica + "_");
			nombreArchivo.append(formatter.format(idTest));
			break;
		
		case TEMATICA:
			nombreArchivo.append(ConfigProperties
					.getProperty("files.prefixThematicSol"));
			nombreArchivo.append(idBloqueTematica + "_");
			nombreArchivo.append(formatter.format(idTest));
			break;
		default:
			break;
		}
		return nombreArchivo.toString();

	}

	private static FileOutputStream filenameToOutoutStream(String nombreArchivo) {
		try {
			return new FileOutputStream(nombreArchivo);
		} catch (FileNotFoundException e) {
			logger.error("Error en el fichero de salida " + nombreArchivo);
			logger.error(e.getMessage());
		}
		return null;
	}

	public static PrintStream filenameToPrintStream(String nombreArchivo) {

		PrintStream salida = null;
		try {
			salida = new PrintStream(new FileOutputStream(nombreArchivo));
		} catch (IOException e) {
			logger.error(e.getMessage());
		}
		return salida;

	}

}
