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

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintStream;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.apache.commons.lang.StringEscapeUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.preparatic.ConfigProperties;
import com.preparatic.entidades.GestorAnho;
import com.preparatic.entidades.GestorBloque;
import com.preparatic.entidades.GestorInfoBloque;
import com.preparatic.entidades.GestorInfoTema;
import com.preparatic.entidades.GestorTematica;
import com.preparatic.entidades.PreguntaTest;
import com.preparatic.entidades.GestorTematica.tematica;
import com.preparatic.entidades.GestorTests;
import com.preparatic.entidades.PreguntaTest.Campo;
import com.preparatic.entidades.Test;
import com.preparatic.entidades.Test.eTipoTest;

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
	public void generarTestHtml(ResultSet resultados) {
		generarHtml();
		generarJSQuestion(resultados);
	}
	
	/**
	 * Genera todos los ficheros de test.
	 * 
	 * @param num_test
	 */
	public void generarTestHtml(List<PreguntaTest> listapreguntas) {
		generarHtml();
		generarJSQuestion(listapreguntas);
		
		generarHtmlV2();
		generarJSQuestionV2(listapreguntas);
	}
	
	public String getHtmlFilename()
	{
		return FactoriaArchivo.htmlTestFilename(tipoTest,
				test.getIdBloqueTematicaAnho(), test.getIdTest());
	}
	public String getJsFilename()
	{
		return FactoriaArchivo.NombreArchivoJavascriptPreguntas(tipoTest,
				test.getIdBloqueTematicaAnho(), test.getIdTest());
	}
	
	/**
	 * Genera el archivo test_???.html dentro de la carpeta pages.
	 */
	private void generarHtml() {

		try {

			// Creamos la salida
			PrintStream salida = FactoriaArchivo.archivoHtmlTest(tipoTest,
					test.getIdBloqueTematicaAnho(), test.getIdTest());

			// Abrimos la entrada
			BufferedReader entrada = new BufferedReader(new FileReader(
					pathResources
							+ ConfigProperties
									.getProperty("files.templates.PageHtml")));

			int nFlag = 1;
			while (copiarHastaFlag(salida, entrada) == true) {
				/* En cada interrupción, metemos lo que sea necesario. */
				switch (nFlag) {
				case 1:
					// En la primera interrupción, se mete la importación de
					// preguntas
					importarJavascript(salida);
					break;
				case 2:
					// Selector de test.
					escribirTestNavigator(salida);
					break;

				case 3:
					escribirTituloTest(salida);
					break;
				default:
					break;
				}
				nFlag++;
			}

			salida.close();
			entrada.close();
		} catch (IOException e) {
			System.err.println(e.getMessage());
		}
	}

	/**
	 * Genera el fichero con las preguntas y respuestas dentro de un JavaScript.
	 * 
	 * @param resultados
	 * @return
	 */
	private boolean generarJSQuestion(ResultSet resultados) {

		if (resultados == null)
			return false;

		try {
			// Generamos el archivo de salida.
			PrintStream salida = FactoriaArchivo.archivoJavascriptTest(
					tipoTest, test.getIdBloqueTematicaAnho(), test.getIdTest());

			// Copiamos la cabecera común a todos los ficheros de javascript.
			BufferedReader entrada = new BufferedReader(new FileReader(
					pathResources
							+ ConfigProperties
									.getProperty("files.templates.Javascript")));
			while (copiarHastaFlag(salida, entrada) == true)
				;

			/* Cogemos las preguntas de test desde el principio */
			resultados.first();
			int n_pregunta = 0;
			while (resultados.isAfterLast() == false) {
				escribirPreguntaTest(salida, resultados, n_pregunta);
				resultados.next();
				n_pregunta++;
			}
			salida.close();
		} catch (Exception e) {
			logger.error("escribirJavascript " + e.getMessage());
		}

		return true;
	}
	
	/**
	 * Genera el fichero con las preguntas y respuestas dentro de un JavaScript.
	 * 
	 * @param resultados
	 * @return
	 */
	private boolean generarJSQuestion(List<PreguntaTest> listapreguntas) {

		if (listapreguntas == null || listapreguntas.isEmpty())
			return false;

		try {
			// Generamos el archivo de salida.
			PrintStream salida = FactoriaArchivo.archivoJavascriptTest(
					tipoTest, test.getIdBloqueTematicaAnho(), test.getIdTest());

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
		return "tests/" +  filename + ".html";
	}
	private void generarHtmlV2() {
		StringTemplateGroup group =  new StringTemplateGroup("Preparatic", pathResources, DefaultTemplateLexer.class);
		String testTemplateName =  ConfigProperties.getProperty("files.templates.TestTemplate");
		StringTemplate htmlTemplate = group.getInstanceOf(testTemplateName);
		
		String filename =  FactoriaArchivo.NombreArchivoTest(tipoTest,
				test.getIdBloqueTematicaAnho(), test.getIdTest());
		htmlTemplate.setAttribute("titulo",  test.getTitulo());
		htmlTemplate.setAttribute("titulocompleto", test.getTitulo());
		htmlTemplate.setAttribute("javascriptdata", "../data/" +  filename + ".js ");
		
		switch (tipoTest) {
		case bloque:
			htmlTemplate.setAttribute("testsSet", "blockTestsSet");
			break;
		case anho:
			htmlTemplate.setAttribute("testsSet", "annosTestsSet");
			break;
		case tema:
			htmlTemplate.setAttribute("testsSet", "themeTestsSet");
			break;
		default:
			htmlTemplate.setAttribute("testsSet", "randomTestsSet");
			break;
		}
		//System.out.println(htmlTemplate.toString());

		// Creamos la salida
		filename = "testsV2/tests/" +  filename + ".html";
		PrintStream salida = FactoriaArchivo.filenameToPrintStream(filename);
		salida.print(htmlTemplate.toString());
		salida.close();
	}
	public String getJsFilenameV2()
	{
		String filename =  FactoriaArchivo.NombreArchivoTest(tipoTest,
				test.getIdBloqueTematicaAnho(), test.getIdTest());
		return "data/" +  filename + ".js";
	}
	private boolean generarJSQuestionV2(List<PreguntaTest> listapreguntas) {

		if (listapreguntas == null || listapreguntas.isEmpty())
			return false;

		try {
			String filename =  FactoriaArchivo.NombreArchivoTest(tipoTest,
					test.getIdBloqueTematicaAnho(), test.getIdTest());
			filename = "testsV2/data/" +  filename + ".js";
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
		String testTemplateName =  ConfigProperties.getProperty("files.templates.TestTemplateTODO");

		StringTemplate infotestTemplate = group.getInstanceOf("info_tests");
		infotestTemplate.setAttribute("listabloques", GestorInfoBloque.getInstance().getBloques());
		infotestTemplate.setAttribute("listatemas", GestorInfoTema.getInstance().getTemas());

		//System.out.println(infotestTemplate.toString());
		PrintStream file = FactoriaArchivo.filenameToPrintStream("testsV2/data/info_tests.js");
		file.println(infotestTemplate.toString());
		file.close();
	}

	protected static void generarJSMenuInfoV2()
	{
		StringTemplateGroup group =  new StringTemplateGroup("Preparatic", pathResources, DefaultTemplateLexer.class);
		String testTemplateName =  ConfigProperties.getProperty("files.templates.TestTemplateTODO");

		StringTemplate infotestTemplate = group.getInstanceOf("list_tests");
		infotestTemplate.setAttribute("listaTestsGlobales", GestorTests.getInstance().getTestsGlobales());
		infotestTemplate.setAttribute("listaTestsBloques", GestorTests.getInstance().getTestPorBloque());
		infotestTemplate.setAttribute("listaTestsTemas", GestorTests.getInstance().getTestPorTema());
		infotestTemplate.setAttribute("listaTestsAnnos", GestorTests.getInstance().getTestPorAnno());

		//System.out.println(infotestTemplate.toString());
		PrintStream file = FactoriaArchivo.filenameToPrintStream("testsV2/data/list_tests.js");
		file.println(infotestTemplate.toString());
		file.close();
	}
	
	/**
	 * 
	 * @param salida
	 * @param resultados
	 * @return
	 */

	private static boolean escribirPreguntaTest(PrintStream salida,
			ResultSet resultados, int idCuestion) {

		if (resultados == null)
			return false;

		String s = "";
		try {

			// Comentario con el ID de pregunta.
			s = "//  Id pregunta: " + campoAHtml(resultados, "ID");
			s += " Año de creación de pregunta: "
					+ campoAHtml(resultados, "ANNO_CREACION");
			salida.println(s);
			
			//DEBUG:
//			int debug;
//			if(campoAHtml(resultados, "ID").equals("9540"))
//				debug = 1;

			// Question
			s = " questions[" + idCuestion + "]= \"" + (idCuestion + 1) + ")  "
					+ campoAHtml(resultados, "PREGUNTA") + "\";";
			salida.println(s);

			// Choices
			s = " choices[" + idCuestion + "]= new Array();";
			salida.println(s);

			s = " choices[" + idCuestion + "][0] = \""
					+ campoAHtml(resultados, "RESPUESTA_A") + "\";";
			salida.println(s);

			s = " choices[" + idCuestion + "][1] = \""
					+ campoAHtml(resultados, "RESPUESTA_B") + "\";";
			salida.println(s);

			s = " choices[" + idCuestion + "][2] = \""
					+ campoAHtml(resultados, "RESPUESTA_C") + "\";";
			salida.println(s);

			s = " choices[" + idCuestion + "][3] = \""
					+ campoAHtml(resultados, "RESPUESTA_D") + "\";";
			salida.println(s);

			// Respuesta correcta
			s = " answers["
					+ idCuestion
					+ "] = choices["
					+ idCuestion
					+ "]["
					+ OptionToNumber.toNumber(resultados
							.getString("RESPUESTA_CORRECTA")) + "];";
			salida.println(s);

			// Temas
			s = " units[" + idCuestion + "] = \""
					+ campoAHtml(resultados, "TEMAS") + "\";";
			salida.println(s);

			// Comentarios
			s = " comments[" + idCuestion + "] = \"" + "Id Pregunta: "
					+ campoAHtml(resultados, "ID") + ". "
					+ campoAHtml(resultados, "OBSERVACIONES") + "\";";
			salida.println(s);

			// Para separar entre preguntas.
			salida.println("");
			salida.println("");
		} catch (Exception e) {
			logger.error("escribirPreguntaTest " + e.getMessage());
			logger.error("escribirPreguntaTest idPregunta "
					+ campoAHtml(resultados, "ID"));
			return false;
		}

		return true;
	}

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
					+ "] = choices["
					+ idCuestion
					+ "]["
					+ OptionToNumber.toNumber(pregunta.getString(Campo.RESPUESTA_CORRECTA)) + "];";
			salida.println(s);

			// Temas
			s = " units[" + idCuestion + "] = \""
					+ campoAHtml(pregunta, Campo.TEMAS) + "\";";
			salida.println(s);

			// Comentarios
			s = " comments[" + idCuestion + "] = \"" + "Id Pregunta: "
					+ campoAHtml(pregunta, Campo.ID) + ". "
					+ campoAHtml(pregunta, Campo.OBSERVACIONES) + "\";";
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
	private static String campoAHtml(ResultSet resultados, String Campo) {

		String s = "";
		try {
			s = resultados.getString(Campo);

			s = textoAHtml(s);
		} catch (SQLException e) {
			logger.error("Campo a hmtl" + e.getMessage());
			logger.error(s);
		}
		return s;
	}
	
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
			s = StringEscapeUtils.escapeHtml(s);
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
			// Leemos lÃ­nea a lÃ­nea el fichero de entrada.
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
	 * Crea el menu dinamico
	 * 
	 * @param salida
	 * @return
	 */
	private boolean crearMenu(PrintStream salida) {

		if (salida == null)
			return false;

		StringBuilder sb = new StringBuilder();
		sb.append("<script type=\"text/javascript\" src=\"../../");
		sb.append(FactoriaArchivo.NombreArchivoJavascriptPreguntas(tipoTest,
				test.getIdBloqueTematicaAnho(), test.getIdTest()));
		sb.append("\"></script>");

		salida.println(sb.toString());
		return true;
	}

	/**
	 * Genera una lÃ­nea html para importar el script questions_X.js
	 * 
	 * @param salida
	 * @return
	 */
	private boolean importarJavascript(PrintStream salida) {

		if (salida == null)
			return false;

		StringBuilder sb = new StringBuilder();
		sb.append("<script type=\"text/javascript\" src=\"../../");
		sb.append(FactoriaArchivo.NombreArchivoJavascriptPreguntas(tipoTest,
				test.getIdBloqueTematicaAnho(), test.getIdTest()));
		sb.append("\"></script>");

		salida.println(sb.toString());
		return true;
	}

	/**
	 * Genera los combos de navegación entre test.
	 * 
	 * @param salida
	 * @return
	 */
	private boolean escribirTestNavigator(PrintStream salida) {

		if (salida == null)
			return false;

		if (test.getTipoTest() == Test.eTipoTest.tematica) {
			salida.println("		<select id=\"tema_navigation\" onchange=\"renderTestSelectorTematica()\"> </select>	");
		}

		// El combo de test_navigation siempre está, sea el tipo de test que sea.
		salida.println("	  <select id=\"test_navigation\" onchange=\"go()\"> </select>	");

		// Escribimos las llamadas al javascript para que rellenen los combos.
		salida.println("	  <script type=\"text/javascript\">	");
		switch (test.getTipoTest()) {
		case tematica:
			salida.println("\t\trenderTemas();");
			salida.println("\t\trenderTestSelectorTematica();");
			break;
		case bloque:
			salida.println("\t\trenderTestSelectorBloque('"
					+ test.getIdBloqueTematicaAnho() + "');");
			break;

		case anho:
			salida.println("\t\trenderTestSelectorAnhos('"
					+ test.getIdBloqueTematicaAnho() + "');");
			break;
		default:
			salida.println("\t\trenderTestSelector();");
			break;
		}

		salida.println("\t\trenderMenuTest('" + test.getTipoTest().toString()
				+ "','" + test.getIdBloqueTematicaAnho() + "');");

		salida.println("	</script>");

		if (test.getTipoTest() == eTipoTest.tematica) {
			salida.println("<input type=\"button\" value=\"Ir a test\" onClick=\"go()\" />");
		}
		return true;

	}

	/**
	 * Genera la lÃ­nea: <h1>Test X</h1>
	 * 
	 * @param salida
	 * @return
	 */
	private boolean escribirTituloTest(PrintStream salida) {
		StringBuilder sb = new StringBuilder();
		sb.append("<h1> Test ");
		sb.append(test.getIdTest());
		switch (tipoTest) {
		case bloque:
			sb.append("<BR/> Bloque " + test.getIdBloqueTematicaAnho());
			break;
		case anho:
			sb.append("<BR/> A&ntilde;o " + test.getIdBloqueTematicaAnho());
			break;
		case tematica:
			sb.append("<BR/> Temas " + test.getTituloTematica());
			break;
		}
		sb.append("</h1>");
		salida.println(sb.toString());
		return true;

	}

	/**
	 * Escribe el menú horizontal, con una opción para navegar a cada tipo de
	 * test.
	 * 
	 * @return
	 */
	private boolean escribirMenuTests(PrintStream salida) {

		StringBuilder sb = new StringBuilder();

		FachadaArchivos f = new FachadaArchivos(Test.eTipoTest.aleatorio);
		escribirListItem(sb, f.getNombreArchivosTest(), "Tests de examen",
				tipoTest == Test.eTipoTest.aleatorio);

		// Entradas para los bloques
		GestorBloque g = new GestorBloque();
		for (String idBloque : g.getBloque()) {
			f = new FachadaArchivos(eTipoTest.bloque, idBloque);
			escribirListItem(sb, f.getNombreArchivosTest(),
					BloqueToString.ToDescripcion(idBloque),
					BloqueToString.Equals(test.getIdBloqueTematicaAnho(),
							idBloque));
		}

		// Entrada para la temática
		GestorTematica gt = new GestorTematica();
		tematica t = gt.getTematicas().get(0);
		f = new FachadaArchivos(eTipoTest.tematica, t.id.toString());
		escribirListItem(sb, f.getNombreArchivosTest(), " Test por temas",
				test.getTipoTest() == Test.eTipoTest.tematica);

		// Entradas para los anhos
		GestorAnho ga = new GestorAnho();
		for (String idAnho : ga.getAnho()) {
			f = new FachadaArchivos(eTipoTest.anho, idAnho);
			escribirListItem(sb, f.getNombreArchivosTest(),
					BloqueToString.ToDescripcion(idAnho),
					BloqueToString.Equals(test.getIdBloqueTematicaAnho(),
							idAnho));
		}

		if (salida == null)
			return false;
		salida.println(sb.toString());
		return true;
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
	private void escribirListItem(StringBuilder sb, String hipervinculo,
			String Texto, boolean seleccionado) {
		sb.append("<li ");
		if (seleccionado)
			sb.append("class=\"current_page_item\"");
		sb.append(" ><a href=\"");
		sb.append(hipervinculo);
		sb.append("\">");
		sb.append(Texto);
		sb.append("</a></li>\n");
	}

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
		/*
		if (s.equals("B1"))
			return "Test bloque 1";
		if (s.equals("B2"))
			return "Test bloque 2";
		if (s.equals("B3"))
			return "Test bloque 3";
		if (s.equals("B4"))
			return "Test bloque 4";

		assert false : " BloqueTo String. To Descripcion . No deberia llegar aqui";
		return "";
		*/
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