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

import java.io.PrintStream;
import java.util.List;

import com.preparatic.entidades.GestorAño;
import com.preparatic.entidades.GestorInfoBloque;
import com.preparatic.entidades.GestorInfoTema;
import com.preparatic.entidades.GestorTematica;
import com.preparatic.entidades.Test;
import com.preparatic.entidades.InfoBloque;
import com.preparatic.entidades.InfoTema;
import com.preparatic.entidades.Test.eTipoTest;

public class TestNavigatorGenerator extends HtmlGenerator {

	public TestNavigatorGenerator() {
		super(null);
	}

	/**
	 * Esta función lee el árbol de directorios, y genera las funciones de
	 * navegación en función de los test que se hayan generado.
	 */
	public static void generarTestNavigation() {
		generarJSMenuInfoV2();

	}

	private static void escribirRenderTestSelector(PrintStream salida) {
		FachadaArchivos f = new FachadaArchivos(Test.eTipoTest.ALEATORIO);
		String nombreArchivo = f.getNombreArchivosTest();
		while (nombreArchivo != null) {
			escribirNavigationAddOption(salida, "box", "'" + nombreArchivo
					+ "'", "Test " + FachadaArchivos.getIdTest(nombreArchivo));
			nombreArchivo = f.getNombreArchivosTest();
		}
	}

	/**
	 * Genera todas las entradas para navegación de un determinado tipo de test.
	 * 
	 * @param salida
	 * @param tipoTest
	 */
	private static void escribirRenderTemas(PrintStream salida) {

		// Temáticas
		GestorInfoTema g = GestorInfoTema.getInstance();

		for (InfoTema t : g.getTemas()) {
			escribirNavigationAddOption(salida, "box", "" + t.getNumTemaStr(),
					t.getTituloCorto());
		}

	}

	/**
	 * Genera todas las entradas para navegación de un determinado tipo de test.
	 * 
	 * @param salida
	 * @param tipoTest
	 */
	private static void escribirRenderTestSelectorTematica(PrintStream salida) {

		// Temáticas
		GestorTematica g = new GestorTematica();

		for (GestorTematica.tematica t : g.getTematicas()) {
			FachadaArchivos f = new FachadaArchivos(Test.eTipoTest.TEMATICA,
					t.id.toString());
			// Solo escribimos contenido si hay algún archivo que referenciar.
			salida.println("\tif (tema == '" + t.id + "'){");
			if (f.getNumeroArchivos() > 0) {

				String nombreArchivo = f.getNombreArchivosTest();
				while (nombreArchivo != null) {
					escribirNavigationAddOption(salida, "box", "'"
							+ nombreArchivo + "'", "Test "
							+ FachadaArchivos.getIdTest(nombreArchivo));
					nombreArchivo = f.getNombreArchivosTest();
				}
			} else
				escribirNavigationAddOption(salida, "box", "''",
						"-- No hay test --");
			salida.println("\t}");
		}
	}

	/**
	 * Genera todas las entradas para navegación de un determinado tipo de test.
	 * 
	 * @param salida
	 * @param tipoTest
	 */
	private static void escribirRenderTestBloque(PrintStream salida) {

		GestorInfoBloque g = GestorInfoBloque.getInstance();
		for (InfoBloque bloque : g.getBloques()) {
			String idBloque = bloque.getNombreBloque();
			FachadaArchivos f = new FachadaArchivos(Test.eTipoTest.BLOQUE,
					idBloque);
			// Solo escribimos contenido si hay algún archivo que referenciar.
			salida.println("\tif (bloque == '" + idBloque + "'){");
			if (f.getNumeroArchivos() > 0) {

				String nombreArchivo = f.getNombreArchivosTest();
				while (nombreArchivo != null) {
					escribirNavigationAddOption(salida, "box", "'"
							+ nombreArchivo + "'", "Test "
							+ FachadaArchivos.getIdTest(nombreArchivo));
					nombreArchivo = f.getNombreArchivosTest();
				}
			} else
				escribirNavigationAddOption(salida, "box", "''",
						"-- No hay test --");
			salida.println("\t}");
		}
	}

	/**
	 * Genera todas las entradas para navegación de un determinado tipo de test.
	 * 
	 * @param salida
	 * @param tipoTest
	 */
	private static void escribirRenderTestAnho(PrintStream salida) {

		GestorAño g = new GestorAño();
		for (String idAño : g.getAño()) {
			FachadaArchivos f = new FachadaArchivos(Test.eTipoTest.AÑO,
					idAño);
			// Sólo escribimos contenido si hay algún archivo que referenciar.
			salida.println("\tif (Año == '" + idAño + "'){");
			if (f.getNumeroArchivos() > 0) {

				String nombreArchivo = f.getNombreArchivosTest();
				while (nombreArchivo != null) {
					escribirNavigationAddOption(salida, "box", "'"
							+ nombreArchivo + "'", "Test "
							+ FachadaArchivos.getIdTest(nombreArchivo));
					nombreArchivo = f.getNombreArchivosTest();
				}
			} else
				escribirNavigationAddOption(salida, "box", "''",
						"-- No hay test --");
			salida.println("\t}");
		}
	}

	
	
	/**
	 * Genera una línea con un add option
	 * 
	 * @param salida
	 * @param value
	 * @param text
	 */
	private static void escribirNavigationAddOption(PrintStream salida,
			String boxName, String value, String text) {

		if (salida == null)
			return;

		salida.println("\t\t\t addOption (" + boxName + ", " + value + ", '"
				+ text + "');");
	}

	/**
	 * Genera una línea con un add element
	 * 
	 * @param salida
	 * @param value
	 * @param text
	 */
	private static void escribirAddElement(PrintStream salida, String listName,
			String value, String text, String selectCondition) {

		if (salida == null)
			return;

		salida.println("\t\t\t addElement (" + listName + ", '" + text + "', '"
				+ value + "', " + selectCondition + ");");
	}

	/**
	 * Rellena el menú de navegación.
	 * 
	 * @param salida
	 */
	private static void escribirRenderMenuTest(PrintStream salida) {
		if (salida == null)
			return;

		FachadaArchivos f = null;
		
		// Entradas para los anhos, en orden inverso.
		GestorAño ga = new GestorAño();
		List<String> l = ga.getAño();
		for (int i = l.size() - 1; i >= 0; i--) {
			String idAnho = l.get(i);
			f = new FachadaArchivos(eTipoTest.AÑO, idAnho);
			String filenameA = f.getNombreArchivosTest();
			if (filenameA != null)
				escribirAddElement(salida, "list", filenameA, AnhoToString.ToDescripcion(idAnho),
						"tipoTest=='" + Test.eTipoTest.AÑO + "' && id=='" + idAnho + "'");
		}

		// Entrada para los temas
		GestorInfoTema gt =   GestorInfoTema.getInstance();
		InfoTema t = gt.getTemas().get(0);
		f = new FachadaArchivos(eTipoTest.TEMA, "T" + t.getNumTemaStr());
		String filenameT = f.getNombreArchivosTest();
		if (filenameT != null)
			escribirAddElement(salida, "list", filenameT, "Test por temas", "tipoTest=='" + Test.eTipoTest.TEMA + "' ");

		// Entradas para los bloques, en orden inverso.
		GestorInfoBloque g = GestorInfoBloque.getInstance();
		List<InfoBloque> ls = g.getBloques();
		for (int i = ls.size() - 1; i >= 0; i--) {
			String idBloque = ls.get(i).getNombreBloque();
			f = new FachadaArchivos(eTipoTest.BLOQUE, idBloque);
			String filenameB = f.getNombreArchivosTest();
			if (filenameB != null)
				escribirAddElement(salida, "list", filenameB, BloqueToString.ToDescripcion(idBloque),
						"tipoTest=='" + Test.eTipoTest.BLOQUE + "' && id=='" + idBloque + "'");
		}

		// Entrada para los tests aleatorios:
		f = new FachadaArchivos(Test.eTipoTest.ALEATORIO);
		escribirAddElement(salida, "list", f.getNombreArchivosTest(),
				"Test de examen", "tipoTest=='" + Test.eTipoTest.ALEATORIO
						+ "' ");

		escribirAddElement(salida, "list", "../index.html", "Inicio", "0");

		return;
	}

	

	/**
	 * Rellena el menú de navegación.
	 * 
	 * @param salida
	 */
	private static void escribirRenderMenuIndex(PrintStream salida) {
		if (salida == null)
			return;

		FachadaArchivos f = null;
		
		// Entradas para los anhos, en orden inverso.
		GestorAño ga = new GestorAño();
		List<String> l = ga.getAño();
		for (int i = l.size() - 1; i >= 0; i--) {
			String idAnho = l.get(i);
			f = new FachadaArchivos(eTipoTest.AÑO, idAnho);
			String filenameA = f.getNombreArchivosTest();
			if (filenameA != null)
				escribirAddElement(salida, "list", "pages/" + filenameA, AnhoToString.ToDescripcion(idAnho),
						"tipoTest=='" + Test.eTipoTest.AÑO + "' && id=='" + idAnho + "'");
		}

		
		
		// Entrada para los temas
		GestorInfoTema gt =   GestorInfoTema.getInstance();
		InfoTema t = gt.getTemas().get(0);
		f = new FachadaArchivos(eTipoTest.TEMA, t.getNumTemaStr());
		String filenameT = f.getNombreArchivosTest();
		if (filenameT != null)
			escribirAddElement(salida, "list", "pages/" + filenameT, "Test por temas",
					"tipoTest=='" + Test.eTipoTest.TEMA + "' ");

		// Entradas para los bloques, en orden inverso.
		GestorInfoBloque g = GestorInfoBloque.getInstance();
		List<InfoBloque> ls = g.getBloques();
		for (int i = ls.size() - 1; i >= 0; i--) {
			String idBloque = ls.get(i).getNombreBloque();
			f = new FachadaArchivos(eTipoTest.BLOQUE, idBloque);
			String filenameB = f.getNombreArchivosTest();
			if (filenameB != null)
				escribirAddElement(salida, "list", "pages/" + filenameB, BloqueToString.ToDescripcion(idBloque),
						"tipoTest=='" + Test.eTipoTest.BLOQUE + "' && id=='" + idBloque + "'");
		}

		// Entrada para los tests aleatorios:
		f = new FachadaArchivos(Test.eTipoTest.ALEATORIO);
		escribirAddElement(salida, "list", "pages/"+f.getNombreArchivosTest(),
				"Test de examen", "0");

		escribirAddElement(salida, "list", "../index.html", "Inicio", "tipoTest=='" + Test.eTipoTest.ALEATORIO
				+ "' ");

		return;
	}

	
}
