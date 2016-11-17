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
package com.preparatic.csvreaders;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;

import com.preparatic.ConfigProperties;


public class FicheroExcel implements IExcel {

	private HSSFWorkbook fichero;
	private ArrayList<PreguntaTest> listaPreguntas;

	public FicheroExcel() {
		this.setFichero(null);
		this.setListaPreguntas(null);
	}

	/* (non-Javadoc)
	 * @see com.preparatic.revisortests.IExcel#abrirExcel()
	 */
	public void abrirExcel() throws IOException {
		FileInputStream excel = new FileInputStream(new File(ConfigProperties.getProperty("excel.ruta")));
		// Crear el objeto que tendra el libro de Excel
		this.fichero = new HSSFWorkbook(excel);

		recorrerExcel();
	}

	private void recorrerExcel() {
		this.listaPreguntas = new ArrayList<PreguntaTest>();

		/*
		 * Obtenemos la primera pesta� que se quiera procesar indicando el
		 * índice. Una vez obtenida la hoja excel con las filas que se quieren
		 * leer obtenemos el iterator que nos permite recorrer cada una de las
		 * filas que contiene.
		 */
		HSSFSheet sheet = this.fichero.getSheetAt(0);
		ArrayList<String> celdasPregunta = null;

		// Recorremos todas las filas para obtener el contenido de cada celda
		// int NumberOfRows = 8493; // sheet.getPhysicalNumberOfRows() devuelve
		// 1.000 filas adicionales. Para evitar esto, ponemos el nº
		// directamente.

		int NumberOfRows = 11;

		for (int rowIndex = 0; rowIndex < NumberOfRows; rowIndex++) {
			Row fila = sheet.getRow(rowIndex);
			celdasPregunta = new ArrayList<String>();
			for (int columna = 0; columna < 20; columna++) {
				// If the cell is missing from the file, generate a blank one
				// (Works by specifying a MissingCellPolicy)
				Cell celda = fila.getCell(columna, Row.CREATE_NULL_AS_BLANK);
				celda.setCellType(Cell.CELL_TYPE_STRING);
				celdasPregunta.add(celda.getStringCellValue());
			}
			this.listaPreguntas.add(new PreguntaTest(celdasPregunta));
		}

		try {
			fichero.close(); // cerramos el libro excel
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	// getters y setters

	public HSSFWorkbook getFichero() {
		return fichero;
	}

	public void setFichero(HSSFWorkbook fichero) {
		this.fichero = fichero;
	}

	/* (non-Javadoc)
	 * @see com.preparatic.revisortests.IExcel#getListaPreguntas()
	 */
	public ArrayList<PreguntaTest> getListaPreguntas() {
		return listaPreguntas;
	}

	public void setListaPreguntas(ArrayList<PreguntaTest> listaPreguntas) {
		this.listaPreguntas = listaPreguntas;
	}

}
