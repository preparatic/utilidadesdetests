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
package com.preparatic.entidades;

//import java.sql.Connection;
//import java.sql.ResultSet;
//import java.sql.Statement;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
//import java.util.Random;
import java.util.stream.Collectors;

import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.preparatic.ConfigProperties;
import com.preparatic.archivos.HtmlGenerator;
import com.preparatic.archivos.PdfGenerator;

/**
 * Un Test tiene la secuencia de identificadores de pregunta que se van a poner
 * luego en el test.
 * 
 * @author ester
 * 
 */
public class Test {

	public enum eTipoTest {
		ALEATORIO, 
		RELEVANCIA, 
		BLOQUE, 
		TEMA, 
		TEMATICA, 
		AÑO, 
		EXAMEN,
		ultimoAnho
	};

	private eTipoTest tipoTest;

	/**
	 * idBloqueTematica debe ser un string, porque cuando es un bloque, lleva
	 * algo como "B1"
	 */
	private String IdLongName = "";
	private int idTest;
	private String tituloTematica;
	private List<Integer> ListaPreguntas;

	public static Integer NumPreguntas = Integer
			.parseInt(ConfigProperties.getProperty("tests.globales.num_preguntas_por_test")); // Número
	public static Integer NumPreguntasA = Integer
			.parseInt(ConfigProperties.getProperty("tests.globales.num_preguntasA_por_test")); // Número
	public static Integer NumPreguntasB = Integer
			.parseInt(ConfigProperties.getProperty("tests.globales.num_preguntasB_por_test")); // Número
	
	public static Integer NumPreguntasTestsBloques = Integer
			.parseInt(ConfigProperties.getProperty("tests.bloques.num_preguntas_por_test"));
	public static Integer NumPreguntasTestsTemas = Integer
			.parseInt(ConfigProperties.getProperty("tests.temas.num_preguntas_por_test"));
	public static Integer NumPreguntasTestsAnhos = Integer
			.parseInt(ConfigProperties.getProperty("tests.anhos.num_preguntas_por_test"));
	public static Integer NumPreguntasTestsExamenes = Integer
			.parseInt(ConfigProperties.getProperty("tests.examenes.num_preguntas_por_test"));

	/*
	# NÃºmero de tests por cada tipo
	tests.globales.num_preguntas_por_test=130
	tests.globales.num_preguntasA_por_test=30
	tests.globales.num_preguntasB_por_test=100
	tests.bloques.num_preguntas_por_test=100
	tests.temas.num_preguntas_por_test=100
	tests.anhos.num_preguntas_por_test=100
	tests.examenes.num_preguntas_por_test=100
	*/
	
	private final int MaxNumPreguntas;
	
	private String htmlFilename;
	private String pdfFilename;
	private String jsFilename;
	
	// de
	// preguntas que debe tener este test.
	private static Logger logger = LogManager.getLogger(Test.class);

	/**
	 * Generación de test aleatorios
	 */
	public Test(int idTest) {
		super();
		this.tipoTest = eTipoTest.ALEATORIO;
		this.idTest = idTest;
		MaxNumPreguntas = Test.NumPreguntas;
		ListaPreguntas = new ArrayList<Integer>(MaxNumPreguntas);

	}
	
	public Test(int idTest, int max) {
		super();
		this.tipoTest = eTipoTest.ALEATORIO;
		this.idTest = idTest;
		MaxNumPreguntas = max;
		ListaPreguntas = new ArrayList<Integer>(MaxNumPreguntas);

	}
	/**
	 * Generación de test por bloques o Temáticas
	 * 
	 */
	public Test(eTipoTest tipoTest, String idBloqueTematicaAnho, int idTest) {
		super();
		this.tipoTest = tipoTest;
		this.IdLongName = idBloqueTematicaAnho;
		this.idTest = idTest;

/*
	public static Integer NumPreguntasTestsBloques = Integer
			.parseInt(ConfigProperties.getProperty("tests.bloques.num_preguntas_por_test"));
	public static Integer NumPreguntasTestsTemas = Integer
			.parseInt(ConfigProperties.getProperty("tests.temas.num_preguntas_por_test"));
	public static Integer NumPreguntasTestsAnhos = Integer
			.parseInt(ConfigProperties.getProperty("tests.anhos.num_preguntas_por_test"));
	public static Integer NumPreguntasTestsExamenes = Integer
			.parseInt(ConfigProperties.getProperty("tests.examenes.num_preguntas_por_test"));
 */
		
		if(tipoTest == eTipoTest.BLOQUE) {
			MaxNumPreguntas = Test.NumPreguntasTestsBloques;						
		}
		else if(tipoTest == eTipoTest.TEMA) {
			MaxNumPreguntas = Test.NumPreguntasTestsTemas;			
		}
		else if(tipoTest == eTipoTest.AÑO) {
			MaxNumPreguntas = Test.NumPreguntasTestsAnhos;			
		}		
		else if(tipoTest == eTipoTest.EXAMEN) {
			MaxNumPreguntas = Test.NumPreguntasTestsExamenes;			
		}		
		else {
			MaxNumPreguntas = Test.NumPreguntas; 
			//Que son las preguntas de simulacro de tests (combinando bloque A y bloque B)			
		}
		
		ListaPreguntas = new ArrayList<Integer>(MaxNumPreguntas);
	}

	/**
	 * Se asigna al test un Identificador de preguntas. No acepta preguntas que
	 * ya existan en este test.
	 * 
	 * @param idPregunta
	 */
	public boolean asignarIdPregunta(Integer idPregunta) {

		// Si el idPregunta, es null, no se hace nada.
		if (idPregunta == null) {
			return false;
		}

		// Si el test está completo, se sale
		if (this.estaCompleto()) {
			return false;
		}

		// Si ya está la pregunta en el test, se sale.
		if (ListaPreguntas.contains(idPregunta)) {
			return false;
		}
		ListaPreguntas.add(idPregunta);

		return true;
	}

	/**
	 * Devuelve si se ha alcanzado el número máximo de preguntas.
	 * 
	 * @return
	 */
	public boolean estaCompleto() {
		return this.ListaPreguntas.size() >= MaxNumPreguntas;
	}

//	private String sentenciaSQL = "";

	/**
	 * Devuelve la sentencia Select que extrae de la base de datos todos los
	 * elementos de este test.
	 * 
	 * @return
	 */
//	private String SentenciaSelectSQL() {
//		if (sentenciaSQL != "")
//			return sentenciaSQL;
//
//		// Generamos al azar la sentencia para extraer cosas de la base de
//		// datos.
//
//		StringBuilder sSql = new StringBuilder(" SELECT *  FROM PREGUNTAS_TEST WHERE ");
//		boolean esPrimero = true;
//		Random rnd = new Random();
//
//		while (ListaPreguntas.size() != 0) {
//			if (!esPrimero) {
//				sSql.append(" OR ");
//			}
//			sSql.append("`ID` = ");
//			// Saco al azar los id de preguntas, para que no vayan en orden
//			// por tests.
//			int index = rnd.nextInt(ListaPreguntas.size());
//			int idPregunta = ListaPreguntas.get(index);
//			sSql.append(idPregunta);
//			// Borro la pregunta de la lista.
//			ListaPreguntas.remove((Object) idPregunta);
//			esPrimero = false;
//		}
//
//		// Los resultados se ordenan por el campo C, para meter algo más de
//		// aleatoriedad.
//		sSql.append(" ORDER BY 'RESPUESTA_C'  DESC ");
//		sentenciaSQL = new String(sSql.toString()); // Salvaguardo el resultado
//		// para la próxima llamada.
//		return sentenciaSQL;
//
//	}
//
//	private ResultSet ExtraerPreguntasBBDD(Connection conexion) {
//
//		String sSql = "";
//		try {
//			Statement sentencia = conexion.createStatement();
//			sSql = SentenciaSelectSQL();
//			ResultSet resultados = sentencia.executeQuery(sSql);
//			return resultados;
//
//		} catch (Exception e) {
//			logger.error("Error al extraer el contenido de las preguntas del test." + e.getMessage());
//			logger.error(sSql);
//		}
//		return null;
//	}

	/**
	 * Genera el PDF y el html asociados a este TEST.
	 * 
	 * @param conexion
	 * @param Prefijo_Archivo
	 *            : Es el prefijo que va a tener el nombre del archivo.
	 */
//	public boolean generarDocumentos(Connection conexion, int TotalTestsBloque) {
//
//		ResultSet resultados = ExtraerPreguntasBBDD(conexion);
//		if (resultados == null)
//			return false;
//
//		// Genera el pdf
//		PdfGenerator pdfGenerator = new PdfGenerator(this);
//
//		// Para que no se aburran esperando, les ponemos un mensaje en la
//		// consola.
//		if (tipoTest == eTipoTest.bloque)
//			logger.info("Generando Test. Bloque " + idBloqueTematicaAnho + " Test " + idTest);
//		else if (tipoTest == eTipoTest.aleatorio)
//			logger.info("Generando Test. Test " + idTest);
//		else if (tipoTest == eTipoTest.tema)
//			logger.info("Generando Test. Tema " + idTest);
//		else if (tipoTest == eTipoTest.anho)
//			logger.info("Generando Test Anho " + idBloqueTematicaAnho + " Test " + idTest);
//		else {
//			logger.info("Generando Test por temática. Temática" + tituloTematica + " Test " + idTest);
//			pdfGenerator.setTituloTematica(tituloTematica);
//		}
//
//		try {
//			pdfGenerator.agregarPreguntas(resultados);
//			pdfGenerator.guardarPDF();
//		} catch (Exception e) {
//			logger.error("Error al generar pdf" + e.getMessage());
//		}
//
//		// Genera el html
//		HtmlGenerator htmlGenerator = new HtmlGenerator(this);
//		htmlGenerator.generarTestHtml(resultados);
//
//		return true;
//	}

	public boolean generarDocumentos(List<PreguntaTest> resultados, int TotalTestsBloque) {
		if (resultados == null)
			return false;
		
		// Genera el pdf
		PdfGenerator pdfGenerator = new PdfGenerator(this);

		// Para que no se aburran esperando, les ponemos un mensaje en la
		// consola.
		switch (tipoTest) {
		case BLOQUE:
			logger.info("Generando Test. Bloque " + IdLongName + " Test " + idTest);
			break;
		case ALEATORIO:
			logger.info("Generando Test. Test Global " + idTest);
			break;
		case RELEVANCIA:
			logger.info("Generando Test. Test Relevancia " + idTest);
			break;
		case AÑO:
			logger.info("Generando Test Anho " + IdLongName + " Test " + idTest);
			break;
		case TEMA:
			logger.info("Generando Test Tema " + IdLongName + " Test " + idTest);
			break;
		case EXAMEN:
			logger.info("Generando Test Examen " + IdLongName + " Test " + idTest);
			break;
		default:
			logger.info("Generando Test por temática. Temática" + tituloTematica + " Test " + idTest);
			pdfGenerator.setTituloTematica(tituloTematica);
		}
		
		
		try {
			//ACL: Iteramos la lista de preguntas seleccionadas en el mismo orden para mantener las 30 primeras
			//     asociadas al bloque A y las 100 siguientes al bloque B
			List<PreguntaTest> filteredList = new ArrayList<PreguntaTest>();
			for (int question_id: ListaPreguntas) {
				filteredList.add(resultados.get(question_id));				
			}
			
			pdfGenerator.agregarPreguntas(filteredList);
			pdfFilename = pdfGenerator.guardarPDF();
			
			// Genera el html
			HtmlGenerator htmlGenerator = new HtmlGenerator(this);
			htmlGenerator.generarTestHtml(filteredList);
			
			htmlFilename = htmlGenerator.getHtmlFilenameV2();
			jsFilename = htmlGenerator.getJsFilenameV2();
			
		} catch (Exception e) {
			logger.error("Error al generar los tests: " + e.getMessage());
		}

		return true;
	}

	public int getIdTest() {
		return idTest;
	}

	public String getIdTestStr() {
		NumberFormat formatter = new DecimalFormat("#0000");
		return formatter.format(idTest);
	}
	
	public String getKeyIdTestStr() {
		switch (tipoTest) {
		case BLOQUE:
			return "Bloque_" + IdLongName + "_" + getIdTestStr();
		case ALEATORIO:
			return "Global_" + getIdTestStr();
		case RELEVANCIA:
			return "Ponderado_" + IdLongName + "_" + getIdTestStr();
		case TEMA:
			return "Tema_" + IdLongName + "_" + getIdTestStr();
		case AÑO:
			return "A&ntildeo_" + IdLongName + "_" + getIdTestStr();
		case EXAMEN:
			return "Examen_" + IdLongName + "_" + getIdTestStr();
		default:
			return "Test " + getIdTestStr();
		}
	}
	public String getKeyIdTestHtmlStr() {
		String rst;
		switch (tipoTest) {
		case BLOQUE:
			rst = "Bloque_" + IdLongName + "_" + getIdTestStr();
			break;
		case ALEATORIO:
			rst =  "Global_" + getIdTestStr();
			break;
		case RELEVANCIA:
			rst =  "Ponderado_" + IdLongName + "_" + getIdTestStr();
			break;
		case TEMA:
			rst =  "Tema_" + IdLongName + "_" + getIdTestStr();
			break;
		case AÑO:
			rst =  "A&ntildeo_" + IdLongName + "_" + getIdTestStr();
			break;
		case EXAMEN:
			rst =  "Examen_" + IdLongName + "_" + getIdTestStr();
			break;
		default:
			rst =  "Test " + getIdTestStr();
			break;
		}
		return StringEscapeUtils.escapeHtml4(rst);
		}
	
	public eTipoTest getTipoTest() {
		return tipoTest;
	}

	public String getIdBloqueTematicaAnho() {
		return IdLongName;
	}
	public String getIdBloqueTematicaAnhoHtml() {
		return StringEscapeUtils.escapeHtml4(IdLongName);
	}
	public String getTituloTematica() {
		return tituloTematica;
	}

	public void setTituloTematica(String tituloTematica) {
		this.tituloTematica = tituloTematica;
	}

	
	public String getTitulo()
	{
		switch (tipoTest) {
		case BLOQUE:
			return "Test Bloque " + IdLongName + ", Id: " + getIdTestStr();
		case ALEATORIO:
			return "Test Global, Id: " + getIdTestStr();
		case RELEVANCIA:
			return "Test Ponderado, Id: " + getIdTestStr();
		case AÑO:
			return "Test Fecha " + IdLongName + ", Id: " + getIdTestStr();
		case EXAMEN:
			return "Test Examen " + IdLongName + ", Id: " + getIdTestStr();
		case TEMA:
			return "Test Tema " + IdLongName + ", Id: " + getIdTestStr();
		default:
			return "Test " + getIdTestStr();
		}
	}
	public String getTituloHtml()
	{
		String rst;
		switch (tipoTest) {
		case BLOQUE:
			rst = "Test Bloque " + IdLongName + ", Id: " + getIdTestStr();
			break;
		case ALEATORIO:
			rst =  "Test Global, Id: " + getIdTestStr();
			break;
		case RELEVANCIA:
			rst =  "Test Ponderado, Id: " + getIdTestStr();
			break;
		case AÑO:
			rst =  "Test Fecha " + IdLongName + ", Id: " + getIdTestStr();
			break;
		case EXAMEN:
			rst =  "Test Examen " + IdLongName + ", Id: " + getIdTestStr();
			break;
		case TEMA:
			rst =  "Test Tema " + IdLongName + ", Id: " + getIdTestStr();
			break;
		default:
			rst =  "Test " + getIdTestStr();
		}
		return StringEscapeUtils.escapeHtml4(rst);
	}
	
	/**
	 * @return the htmlFilename
	 */
	public String getHtmlFilename() {
		return StringUtils.stripAccents(htmlFilename);
	}

	/**
	 * @return the pdfFilename
	 */
	public String getPdfFilename() {
		return pdfFilename;
	}

	/**
	 * @return the jsFilename
	 */
	public String getJsFilename() {
		return jsFilename;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Test [idBloqueTematicaAnho=" + IdLongName + ", idTest=" + idTest + ", htmlFilename="
				+ htmlFilename + ", pdfFilename=" + pdfFilename + ", jsFilename=" + jsFilename + "]";
	}

}
