/**
 * 
 */
package com.preparatic;

import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.preparatic.csvreaders.CSVReaderFactory;
import com.preparatic.csvreaders.IExcel;
import com.preparatic.csvreaders.PreguntaTest;
import java.util.stream.Collectors;


/**
 * @author AgustinSantos
 *
 */
public final class ReadGoogleSheet {
	
	private static Logger logger = LogManager.getLogger(ReadGoogleSheet.class);

	public static void main(String[] args) throws Exception {
		
		logger.info("Proceso de preguntas en excel y pruebas de tratamiento con Lambda.");
		
		IExcel ficheroExcel = CSVReaderFactory.GetCSVReader();
		//GestorConsultas gestorConsultas = new GestorConsultas();

		// Abrimos el excel
		ficheroExcel.abrirExcel();

		// Obtenemos todas las preguntas del excel
		ArrayList<PreguntaTest> listaPreguntas = ficheroExcel.getListaPreguntas();
		List<PreguntaTest> filteredList = listaPreguntas.stream() 					//convert list to stream
										.filter(question -> question.getAnno_creacion().equals ("2016"))	//filters the question, equals to some year
										.filter(question -> question.getAutor().equals ("LGD")) 			//filters the question, equals to some author
										.collect(Collectors.toList());			//collect the output and convert streams to a List

		// Descomentar para depurar con salidas por pantalla.
		for (PreguntaTest pt : filteredList){
			logger.debug(pt.toString());
		}
	}
}