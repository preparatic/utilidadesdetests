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
package com.preparatic.archivos;

import java.io.BufferedReader;
//import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintStream;
//import java.sql.ResultSet;
//import java.sql.SQLException;
import java.util.List;

import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.preparatic.ConfigProperties;
import com.preparatic.entidades.GestorInfoBloque;
import com.preparatic.entidades.GestorInfoTema;
import com.preparatic.entidades.PreguntaTest;
import com.preparatic.entidades.GestorTests;
import com.preparatic.entidades.PreguntaTest.Campo;
import com.preparatic.entidades.Test;
import org.antlr.stringtemplate.*;
import org.antlr.stringtemplate.language.*;

public class HtmlGenerator {

	public static final String pathResources = ConfigProperties
			.getProperty("files.template.Dir");

	private static Logger logger = LogManager.getLogger(HtmlGenerator.class);

	Test.eTipoTest tipoTest;

	String idBloque;
	Test test; // Es el test que voy a generar.

	/**
	 * 
	 * La generación de test en html se basa en la generación de 2 archivos por
	 * test: - Test_X.html - questions_X.js: que contiene los datos de las
	 * preguntas del test.
	 * 
	 * En función del tipo de Test, se piden unos parámetros u otros.
	 */
	public HtmlGenerator(Test test) {

		this.test = test;

		if (test != null)
			this.tipoTest = test.getTipoTest();

	}
	

	/**
	 * Genera todos los ficheros de test.
	 * 
	 * @param num_test
	 */
//	public void generarTestHtml(ResultSet resultados) {
//		generarHtml();
//		generarJSQuestion(resultados);
//	}
	
	/**
	 * Genera todos los ficheros de test.
	 * 
	 * @param num_test
	 */
	public void generarTestHtml(List<PreguntaTest> listapreguntas) {
//		generarHtml();
//		generarJSQuestion(listapreguntas);
		FactoriaArchivo.checkAndCreateDirectories();
		
		generarHtmlV2();
		generarJSQuestionV2(listapreguntas);
	}
	
//	public String getHtmlFilename()
//	{
//		return FactoriaArchivo.htmlTestFilename(tipoTest,
//				test.getIdBloqueTematicaAnho(), test.getIdTest());
//	}
//	public String getJsFilename()
//	{
//		return FactoriaArchivo.NombreArchivoJavascriptPreguntas(tipoTest,
//				test.getIdBloqueTematicaAnho(), test.getIdTest());
//	}
	
	/**
	 * Genera el archivo test_???.html dentro de la carpeta pages.
	 */
//	private void generarHtml() {
//
//		try {
//
//			// Creamos la salida
//			PrintStream salida = FactoriaArchivo.archivoHtmlTest(tipoTest,
//					test.getIdBloqueTematicaAnho(), test.getIdTest());
//
//			// Abrimos la entrada
//			BufferedReader entrada = new BufferedReader(new FileReader(
//					pathResources
//							+ ConfigProperties
//									.getProperty("files.templates.PageHtml")));
//
//			int nFlag = 1;
//			while (copiarHastaFlag(salida, entrada) == true) {
//				/* En cada interrupción, metemos lo que sea necesario. */
//				switch (nFlag) {
//				case 1:
//					// En la primera interrupción, se mete la importación de
//					// preguntas
//					importarJavascript(salida);
//					break;
//				case 2:
//					// Selector de test.
//					escribirTestNavigator(salida);
//					break;
//
//				case 3:
//					escribirTituloTest(salida);
//					break;
//				default:
//					break;
//				}
//				nFlag++;
//			}
//
//			salida.close();
//			entrada.close();
//		} catch (IOException e) {
//			System.err.println(e.getMessage());
//		}
//	}

	/**
	 * Genera el fichero con las preguntas y respuestas dentro de un JavaScript.
	 * 
	 * @param resultados
	 * @return
	 */
//	private boolean generarJSQuestion(ResultSet resultados) {
//
//		if (resultados == null)
//			return false;
//
//		try {
//			// Generamos el archivo de salida.
//			PrintStream salida = FactoriaArchivo.archivoJavascriptTest(
//					tipoTest, test.getIdBloqueTematicaAnho(), test.getIdTest());
//
//			// Copiamos la cabecera común a todos los ficheros de javascript.
//			BufferedReader entrada = new BufferedReader(new FileReader(
//					pathResources
//							+ ConfigProperties
//									.getProperty("files.templates.Javascript")));
//			while (copiarHastaFlag(salida, entrada) == true)
//				;
//
//			/* Cogemos las preguntas de test desde el principio */
//			resultados.first();
//			int n_pregunta = 0;
//			while (resultados.isAfterLast() == false) {
//				escribirPreguntaTest(salida, resultados, n_pregunta);
//				resultados.next();
//				n_pregunta++;
//			}
//			salida.close();
//		} catch (Exception e) {
//			logger.error("escribirJavascript " + e.getMessage());
//		}
//
//		return true;
//	}
	
	/**
	 * Genera el fichero con las preguntas y respuestas dentro de un JavaScript.
	 * 
	 * @param resultados
	 * @return
	 */
//	private boolean generarJSQuestion(List<PreguntaTest> listapreguntas) {
//
//		if (listapreguntas == null || listapreguntas.isEmpty())
//			return false;
//
//		try {
//			// Generamos el archivo de salida.
//			PrintStream salida = FactoriaArchivo.archivoJavascriptTest(
//					tipoTest, test.getIdBloqueTematicaAnho(), test.getIdTest());
//
//			// Copiamos la cabecera común a todos los ficheros de javascript.
//			BufferedReader entrada = new BufferedReader(new FileReader(
//					pathResources
//							+ ConfigProperties
//									.getProperty("files.templates.Javascript")));
//			while (copiarHastaFlag(salida, entrada) == true)
//				;
//
//			/* Cogemos las preguntas de test desde el principio */
//			int n_pregunta = 0;
//			for (PreguntaTest pregunta : listapreguntas) {
//				escribirPreguntaTest(salida, pregunta, n_pregunta);
//				n_pregunta++;
//			}
//			salida.close();
//		} catch (Exception e) {
//			logger.error("escribirJavascript " + e.getMessage());
//		}
//
//		return true;
//	}
	
	
	/***********************************************************
	 * 
	 * Estos metodos son nuevos para la generacion del nuevo
	 * diseno.
	 * 
	 ************************************************************/
	public String getHtmlFilenameV2()
	{
		String filename =  FactoriaArchivo.NombreArchivoTest(tipoTest,
				test.getIdBloqueTematicaAnho(), test.getIdTest());
		return ConfigProperties.getProperty("files.testsDir") +  filename + ".html";
	}
	private void generarHtmlV2() {
		StringTemplateGroup group =  new StringTemplateGroup("Preparatic", pathResources, DefaultTemplateLexer.class);
		String testTemplateName =  ConfigProperties.getProperty("files.templates.TestTemplate");
		StringTemplate htmlTemplate = group.getInstanceOf(testTemplateName);
		
		String filename =  FactoriaArchivo.NombreArchivoTest(tipoTest,
				test.getIdBloqueTematicaAnho(), test.getIdTest());
		htmlTemplate.setAttribute("idtest",  filename);
		htmlTemplate.setAttribute("titulo",  test.getTitulo());
		htmlTemplate.setAttribute("titulocompleto", test.getTitulo());
		htmlTemplate.setAttribute("javascriptdata", "../data/" +  filename + ".js ");

		//mod_AZE_2018-02-04 (introducción de fecha de actualización + link foro)		
		String app_version = ConfigProperties.getProperty("app.version");
		htmlTemplate.setAttribute("app_version", app_version);
		
		String test_foro_link = ConfigProperties.getProperty("tests.foro.link");
		htmlTemplate.setAttribute("test_foro_link", test_foro_link);		
		
		switch (tipoTest) {
		case BLOQUE:
			htmlTemplate.setAttribute("testsSet", "blockTestsSet");
			break;
		case AÑO:
			htmlTemplate.setAttribute("testsSet", "annosTestsSet");
			break;
		case TEMA:
			htmlTemplate.setAttribute("testsSet", "themeTestsSet");
			break;
		case RELEVANCIA:
			htmlTemplate.setAttribute("testsSet", "relevantesTestsSet");
			break;
		case EXAMEN:
			htmlTemplate.setAttribute("testsSet", "examenesTestsSet");
			break;
		default:
			htmlTemplate.setAttribute("testsSet", "randomTestsSet");
			break;
		}
		//System.out.println(htmlTemplate.toString());

		// Creamos la salida
		filename = FactoriaArchivo.pathHtml +  filename + ".html";
		PrintStream salida = FactoriaArchivo.filenameToPrintStream(filename);
		salida.print(htmlTemplate.toString());
		salida.close();
	}
	public String getJsFilenameV2()
	{
		String filename =  FactoriaArchivo.NombreArchivoTest(tipoTest,
				test.getIdBloqueTematicaAnho(), test.getIdTest());
		return ConfigProperties.getProperty("files.javaScriptQuestionsDir") +  filename + ".js";
	}
	private boolean generarJSQuestionV2(List<PreguntaTest> listapreguntas) {

		if (listapreguntas == null || listapreguntas.isEmpty())
			return false;

		try {
			String filename =  FactoriaArchivo.NombreArchivoTest(tipoTest,
					test.getIdBloqueTematicaAnho(), test.getIdTest());
			filename = FactoriaArchivo.pathJsData +  filename + ".js";
			// Generamos el archivo de salida.
			PrintStream salida = FactoriaArchivo.filenameToPrintStream(filename);

			// Copiamos la cabecera común a todos los ficheros de javascript.
			BufferedReader entrada = new BufferedReader(new FileReader(
					pathResources
							+ ConfigProperties
									.getProperty("files.templates.Javascript")));
			while (copiarHastaFlag(salida, entrada) == true)
				;

			/* Cogemos las preguntas de test desde el principio */
			int n_pregunta = 0;
			for (PreguntaTest pregunta : listapreguntas) {
				escribirPreguntaTest(salida, pregunta, n_pregunta);
				n_pregunta++;
			}
			salida.close();
		} catch (Exception e) {
			logger.error("escribirJavascript " + e.getMessage());
		}

		return true;
	}
	

	public static void generarMetaInfoV2()
	{
		
		StringTemplateGroup group =  new StringTemplateGroup("Preparatic", pathResources, DefaultTemplateLexer.class);

		StringTemplate infotestTemplate = group.getInstanceOf("info_tests");
		infotestTemplate.setAttribute("listabloques", GestorInfoBloque.getInstance().getBloques());
		infotestTemplate.setAttribute("listatemas", GestorInfoTema.getInstance().getTemas());

		//System.out.println(infotestTemplate.toString());
		PrintStream file = FactoriaArchivo.filenameToPrintStream(FactoriaArchivo.pathJsData + "info_tests.js");
		file.println(infotestTemplate.toString());
		file.close();
	}

	protected static void generarJSMenuInfoV2()
	{
		StringTemplateGroup group =  new StringTemplateGroup("Preparatic", pathResources, DefaultTemplateLexer.class);

		StringTemplate infotestTemplate = group.getInstanceOf("list_tests");
		infotestTemplate.setAttribute("listaTestsGlobales", GestorTests.getInstance().getTestsGlobales());
		infotestTemplate.setAttribute("listaTestsBloques", GestorTests.getInstance().getTestPorBloque());
		infotestTemplate.setAttribute("listaTestsTemas", GestorTests.getInstance().getTestPorTema());
		infotestTemplate.setAttribute("listaTestsAnnos", GestorTests.getInstance().getTestPorAnno());
		infotestTemplate.setAttribute("listaTestsRelevantes", GestorTests.getInstance().getTestPorRelevancia());
		infotestTemplate.setAttribute("listaTestsExamenes", GestorTests.getInstance().getTestPorExamenes());
		
		//System.out.println(infotestTemplate.toString());
		PrintStream file = FactoriaArchivo.filenameToPrintStream(FactoriaArchivo.pathJsData + "list_tests.js");
		file.println(infotestTemplate.toString());
		file.close();
	}
	
	/**
	 * 
	 * @param salida
	 * @param resultados
	 * @return
	 */

//	private static boolean escribirPreguntaTest(PrintStream salida,
//			ResultSet resultados, int idCuestion) {
//
//		if (resultados == null)
//			return false;
//
//		String s = "";
//		try {
//
//			// Comentario con el ID de pregunta.
//			s = "//  Id pregunta: " + campoAHtml(resultados, "ID");
//			s += " Año de creación de pregunta: "
//					+ campoAHtml(resultados, "ANNO_CREACION");
//			salida.println(s);
//			
//			//DEBUG:
////			int debug;
////			if(campoAHtml(resultados, "ID").equals("9540"))
////				debug = 1;
//
//			// Question
//			s = " questions[" + idCuestion + "]= \"" + (idCuestion + 1) + ")  "
//					+ campoAHtml(resultados, "PREGUNTA") + "\";";
//			salida.println(s);
//
//			// Choices
//			s = " choices[" + idCuestion + "]= new Array();";
//			salida.println(s);
//
//			s = " choices[" + idCuestion + "][0] = \""
//					+ campoAHtml(resultados, "RESPUESTA_A") + "\";";
//			salida.println(s);
//
//			s = " choices[" + idCuestion + "][1] = \""
//					+ campoAHtml(resultados, "RESPUESTA_B") + "\";";
//			salida.println(s);
//
//			s = " choices[" + idCuestion + "][2] = \""
//					+ campoAHtml(resultados, "RESPUESTA_C") + "\";";
//			salida.println(s);
//
//			s = " choices[" + idCuestion + "][3] = \""
//					+ campoAHtml(resultados, "RESPUESTA_D") + "\";";
//			salida.println(s);
//
//			// Respuesta correcta
//			s = " answers["
//					+ idCuestion
//					+ "] = "
//					+ OptionToNumber.toNumber(resultados
//							.getString("RESPUESTA_CORRECTA")) + ";";
//			salida.println(s);
//
//			// Temas
//			s = " units[" + idCuestion + "] = \""
//					+ campoAHtml(resultados, "TEMAS") + "\";";
//			salida.println(s);
//
//			// Comentarios
//			s = " comments[" + idCuestion + "] = \"" + "Id Pregunta: "
//					+ campoAHtml(resultados, "ID") + ". "
//					+ campoAHtml(resultados, "OBSERVACIONES") + "\";";
//			salida.println(s);
//
//			// Para separar entre preguntas.
//			salida.println("");
//			salida.println("");
//		} catch (Exception e) {
//			logger.error("escribirPreguntaTest " + e.getMessage());
//			logger.error("escribirPreguntaTest idPregunta "
//					+ campoAHtml(resultados, "ID"));
//			return false;
//		}
//
//		return true;
//	}

	private static boolean escribirPreguntaTest(PrintStream salida,
			PreguntaTest pregunta, int idCuestion) {

		if (pregunta == null)
			return false;

		String s = "";
		try {

			// Comentario con el ID de pregunta.
			s = "//  Id pregunta: " + campoAHtml(pregunta, Campo.ID);
			s += " Año de creación de pregunta: "
					+ campoAHtml(pregunta, Campo.ANNO_CREACION);
			salida.println(s);
			
			//DEBUG:
//			int debug;
//			if(campoAHtml(resultados, "ID").equals("9540"))
//				debug = 1;

			// Question
			s = " questions[" + idCuestion + "]= \"" + (idCuestion + 1) + ")  "
					+ campoAHtml(pregunta, Campo.PREGUNTA) + "\";";
			salida.println(s);

			// Choices
			s = " choices[" + idCuestion + "]= new Array();";
			salida.println(s);

			s = " choices[" + idCuestion + "][0] = \""
					+ campoAHtml(pregunta, Campo.RESPUESTA_A) + "\";";
			salida.println(s);

			s = " choices[" + idCuestion + "][1] = \""
					+ campoAHtml(pregunta, Campo.RESPUESTA_B) + "\";";
			salida.println(s);

			s = " choices[" + idCuestion + "][2] = \""
					+ campoAHtml(pregunta, Campo.RESPUESTA_C) + "\";";
			salida.println(s);

			s = " choices[" + idCuestion + "][3] = \""
					+ campoAHtml(pregunta, Campo.RESPUESTA_D) + "\";";
			salida.println(s);

			// Respuesta correcta
			s = " answers["
					+ idCuestion
					+ "] = "
 					+ OptionToNumber.toNumber(pregunta.getString(Campo.RESPUESTA_CORRECTA)) + ";";
			salida.println(s);

			// Temas
			s = " units[" + idCuestion + "] = ["
					+ textoAHtml(pregunta.getTemasStrWithQuotes()) + "];";
			salida.println(s);
			
			// bloques
			s = " blocks[" + idCuestion + "] = ["
					+ textoAHtml(pregunta.getBloquesStrWithQuotes()) + "];";
			salida.println(s);

			// Comentarios
			s = " comments[" + idCuestion + "] = \"" + "Id Pregunta: " + campoAHtml(pregunta, Campo.ID) + ". "
					+ campoAHtml(pregunta, Campo.OBSERVACIONES) + "\";";
			salida.println(s);

			// List de Ids
			s = " preguntaids[" + idCuestion + "] = " + campoAHtml(pregunta, Campo.ID);
			salida.println(s);
						
			// Para separar entre preguntas.
			salida.println("");
			salida.println("");
		} catch (Exception e) {
			logger.error("escribirPreguntaTest " + e.getMessage());
			logger.error("escribirPreguntaTest idPregunta "
					+ campoAHtml(pregunta, Campo.ID));
			return false;
		}

		return true;
	}
	
	/**
	 * Convierte un campo de lo que venga en resultados, y le quita todo tipo de
	 * caracteres raros. Quita \n. Convierte secuencias de escape como comillas,
	 * mayor y menor, en códigos html.
	 * 
	 * @return
	 */
//	private static String campoAHtml(ResultSet resultados, String Campo) {
//
//		String s = "";
//		try {
//			s = resultados.getString(Campo);
//
//			s = textoAHtml(s);
//		} catch (SQLException e) {
//			logger.error("Campo a hmtl" + e.getMessage());
//			logger.error(s);
//		}
//		return s;
//	}
	
	private static String campoAHtml(PreguntaTest pregunta, Campo campo) {

		String s = "";
		try {
			s = pregunta.getString(campo);

			s = textoAHtml(s);
		} catch (Exception e) {
			logger.error("Campo a hmtl" + e.getMessage());
			logger.error(s);
		}
		return s;
	}

	/**
	 * Quita todo tipo de caracteres raros. Quita \n. Convierte secuencias de
	 * escape como comillas, mayor y menor, en códigos html.
	 * 
	 * @return
	 */
	private static String textoAHtml(String texto) {

		String s = texto;
		try {
			if (s == null)
				return "";
			s = s.replaceAll("\r", "");
			s = s.replaceAll("\n", "");
			s = StringEscapeUtils.escapeHtml4(s);
		} catch (Exception e) {
			logger.error("texto A HTML " + e.getMessage());
			logger.error(s);
		}
		return s;
	}

	/**
	 * Copia el archivo de entrada en la salida hasta que acaba el archivo o
	 * encuentra un FLAG.
	 * 
	 * @param salida
	 * @param entrada
	 * @return
	 */
	static boolean copiarHastaFlag(PrintStream salida, BufferedReader entrada) {

		if (salida == null)
			return false;
		if (entrada == null)
			return false;

		try {
			// Leemos línea a línea el fichero de entrada.
			String linea = entrada.readLine();
			if (linea == null)
				return false;
			while (linea != null) {
				if (linea.contains("##FLAG"))
					return true; // Devuelve true si encuentra un FLAG.
				salida.println(linea);
				linea = entrada.readLine();
			}
		} catch (IOException e) {
			logger.error("Copiar hasta Flag " + e.getMessage());
			return false;
		}

		return false; // El fichero ha acabado.
	}



	/**
	 * Genera un elemento del tipo: <li class="current_page_item"><a
	 * href="test_1.html">Tests de examen</a></li>
	 * 
	 * @param sb
	 * @param hipervinculo
	 * @param Texto
	 * @param Seleccionado
	 */
//	private void escribirListItem(StringBuilder sb, String hipervinculo,
//			String Texto, boolean seleccionado) {
//		sb.append("<li ");
//		if (seleccionado)
//			sb.append("class=\"current_page_item\"");
//		sb.append(" ><a href=\"");
//		sb.append(hipervinculo);
//		sb.append("\">");
//		sb.append(Texto);
//		sb.append("</a></li>\n");
//	}

}

class OptionToNumber {

	public static int toNumber(String optionCharacter) {
		char c = optionCharacter.replaceAll(" ", "").charAt(0);
		return OptionToNumber.toNumber(c);
	}

	public static int toNumber(char optionCharacter) {
		switch (Character.toUpperCase(optionCharacter)) {
		case 'A':
			return 0;
		case 'B':
			return 1;
		case 'C':
			return 2;
		case 'D':
			return 3;
		}
		assert false : "No deberia llegar aqui";
		return -1;
	}
}

class BloqueToString {

	public static String ToDescripcion(String idBloque) {
		String s = "Test bloque" + idBloque;
		return s;
		
	}

	public static boolean Equals(String idBloque1, String idBloque2) {

		return idBloque1.equalsIgnoreCase(idBloque2);
	}
}

class AnhoToString {

	public static String ToDescripcion(String idAnho) {
		return "Test Preguntas " + idAnho;

	}

}