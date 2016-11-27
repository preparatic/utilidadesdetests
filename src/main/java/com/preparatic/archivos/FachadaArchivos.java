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

import java.io.File;
import java.io.FilenameFilter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.preparatic.ConfigProperties;
import com.preparatic.entidades.Test;

/**
 * La Fachada de archivos sirve para consultar qu√© archivos hay creados ya en el
 * sistema, as√≠ como para sacar los datos de los test, desde los nombres de
 * archivos.
 * 
 * @author ester
 * 
 */
public class FachadaArchivos {

	private static final String pathHtml = ConfigProperties
			.getProperty("files.rootDir")
			+ ConfigProperties.getProperty("files.pagesDir");

	List<String> listaNombreArchivos = new ArrayList<String>();
	int siguienteNombreArchivo = 0;

	boolean idBloqueTematicaAnhoDefinido = false;
	/**
	 * Si es un bloque, entonces contiene cadenas del tipo "B1". Si es una
	 * tem·tica, contiene cadenas del tipo "2"
	 */
	String idBloqueTematica;

	public FachadaArchivos(Test.eTipoTest tipoTest) {
		super();
		recuperarArchivos(tipoTest);
	}

	/**
	 * 
	 * @param tipoTest
	 * @param id
	 *            identificador de bloque o tema
	 */
	public FachadaArchivos(Test.eTipoTest tipoTest, String idBloqueTematica) {
		super();
		this.idBloqueTematicaAnhoDefinido = true;
		this.idBloqueTematica = idBloqueTematica;
		recuperarArchivos(tipoTest);
	}

	/**
	 * Dado un nombre de archivo, devuelve el identificador del test.
	 * 
	 * @param FileName
	 * @return
	 */
	public static String getIdTest(String fileName) {
		String[] s = fileName.replace(".html", "").split("_");

		if (s.length < 2)
			return "";

		// test_bloques_1_1 test_temas_2_23
		if (s.length == 4)
			return s[3];

		// test_12
		return s[1];

	}

	/**
	 * Dado un nombre de archivo, devuelve la categoria: bloque o tem·tica.
	 * 
	 * @param FileName
	 * @return
	 */
	public static String getIdCategory(String fileName) {
		String[] s = fileName.replace(".html", "").split("_");

		if (s.length < 4)
			return "";

		// test_bloques_1_1 test_temas_2_23
		return s[2];

	}

	/**
	 * Devuelve una lista con todos los nombres de archivo que contienen tests.
	 * 
	 * @param tipoTest
	 * @return
	 */
	public String getNombreArchivosTest() {

		if (listaNombreArchivos.size() == 0)
			return null;

		int index = siguienteNombreArchivo;
		siguienteNombreArchivo++;
		if (index >= listaNombreArchivos.size())
			return null;

		return listaNombreArchivos.get(index);
	}

	public Integer getNumeroArchivos() {
		return listaNombreArchivos.size();
	}

	private void recuperarArchivos(Test.eTipoTest tipoTest) {
		File dir = new File(pathHtml);

		/*
		 * Generamos un filtro segun lo que vayamos a necesitar.
		 */
		FilenameFilter filter = new FilenameFilter() {
			public boolean accept(File dir, String name) {
				return name.startsWith("test_bloque") && name.endsWith(".html");
			}
		};

		switch (tipoTest) {
		case aleatorio:
			filter = new FilenameFilter() {
				public boolean accept(File dir, String name) {
					return name.startsWith("test_")
							&& !name.contains("bloque_")
							&& !name.contains("tema_")
							&& !name.contains("anho_")
							&& name.endsWith(".html");
				}
			};
			break;
		case bloque:
			filter = new FilenameFilter() {
				public boolean accept(File dir, String name) {
					if (idBloqueTematicaAnhoDefinido)
						return name
								.contains("bloque_" + idBloqueTematica + "_")
								&& name.endsWith(".html");

					return name.contains("bloque_") && name.endsWith(".html");
				}
			};

			break;
		case tematica:
			filter = new FilenameFilter() {
				public boolean accept(File dir, String name) {
					if (idBloqueTematicaAnhoDefinido)
						return name.contains("temas_" + idBloqueTematica + "_")
								&& name.endsWith(".html");

					return name.contains("temas_") && name.endsWith(".html");
				}
			};
			break;
		case tema:
			filter = new FilenameFilter() {
				public boolean accept(File dir, String name) {
					if (idBloqueTematicaAnhoDefinido)
						return name.contains("tema_" + idBloqueTematica + "_") && name.endsWith(".html");

					return name.contains("tema_") && name.endsWith(".html");
				}
			};
			break;
		case anho:
			filter = new FilenameFilter() {
				public boolean accept(File dir, String name) {
					if (idBloqueTematicaAnhoDefinido)
						return name
								.contains("anho_" + idBloqueTematica + "_")
								&& name.endsWith(".html");

					return name.contains("anho_") && name.endsWith(".html");
				}
			};

			break;

		}

		// Filtramos los resultados.
		String[] filesInDir = dir.list(filter);
		// Si no existe o no tiene nada.
		if (filesInDir == null)
			return;

		Arrays.sort(filesInDir);

		// Cogemos todos los ficheros que haya
		for (String s : filesInDir)
			listaNombreArchivos.add(s);

	}

}
