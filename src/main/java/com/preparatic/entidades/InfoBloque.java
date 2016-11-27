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
package com.preparatic.entidades;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringEscapeUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;


public class InfoBloque {
	private static Logger logger = LogManager.getLogger(InfoBloque.class);
	

	// En caso de que no se disponga conexion a internet (sin BD ni acceso a google) 
	// el programa utilizara esta lista para la generacion de tests. 
	// ATENCION. Puede estar desactualizado y solo usarlo para pruebas puntuales
	public static List<InfoBloque> BloquesPorDefecto = new ArrayList<InfoBloque>();

	static {
		BloquesPorDefecto.add(new InfoBloque("A.Temas generales.", "A1", "Marco constitucional español y Unión Europea", 1, 6));
		BloquesPorDefecto.add(new InfoBloque("A.Temas generales.", "A2", "Actuación administrativa y gestión financiera", 7, 11));
		BloquesPorDefecto.add(new InfoBloque("A.Temas generales.", "A3", "Estructura social y económica de España", 12, 17));
		BloquesPorDefecto.add(new InfoBloque("A.Temas generales.", "A4", "Dirección pública", 18, 23));
		BloquesPorDefecto.add(new InfoBloque("B.Temas específicos.", "B1", "Organización y gestión de los sistemas de información", 24, 48));
		BloquesPorDefecto.add(new InfoBloque("B.Temas específicos.", "B2", "Tecnología Básica", 49, 81));
		BloquesPorDefecto.add(new InfoBloque("B.Temas específicos.", "B3", "Ingeniería de los Sistemas de Información", 82, 102));
		BloquesPorDefecto.add(new InfoBloque("B.Temas específicos.", "B4", "Redes, Comunicaciones e Internet", 103, 126));
	}
	
	// Si cambia el orden o la cantidad de columnas del excel, solo habrá que
	// modificar este atributo.
	private enum Campo {
		AREA(0),  // A
		BLOQUEID(1), // B
		TITULOBLOQUE(2), // C
		MIN(3), // D
		MAX(4), // E
		
		NUM_COLUMNAS(5); // Número total de columnas en el excel.
		
		public int index; // Número de columna del excel 
		
		Campo(int indice) {
			index = indice;
		}
	};
	public static final int NUM_COLUMNAS = 	Campo.NUM_COLUMNAS.index;
	
	private String areaBloque;
	private String nombreBloque;
	private String titulo;
	private int minPregunta;
	private int maxPregunta;

	public InfoBloque() {
	}

	/**
	 * @param nombreBloque
	 * @param titulo
	 * @param minPregunta
	 * @param maxPregunta
	 */
	public InfoBloque(String areaBloque, String nombreBloque, String titulo, int minPregunta, int maxPregunta) {
		this.areaBloque = areaBloque;
		this.nombreBloque = nombreBloque;
		this.titulo = titulo;
		this.minPregunta = minPregunta;
		this.maxPregunta = maxPregunta;
	}
	
	public InfoBloque(ArrayList<String> celdas) {
		this.setAreaBloque(celdas.get(Campo.AREA.index));
		this.setNombreBloque(celdas.get(Campo.BLOQUEID.index));
		this.setTitulo(celdas.get(Campo.TITULOBLOQUE.index));
		this.setMinPregunta(Integer.parseInt(celdas.get(Campo.MIN.index)));
		this.setMaxPregunta(Integer.parseInt(celdas.get(Campo.MAX.index)));
	}
	
	/**
	 * @return the nombreBloque
	 */
	public String getAreaBloque() {
		return areaBloque;
	}

	/**
	 * @param nombreBloque
	 *            the nombreBloque to set
	 */
	public void setAreaBloque(String nombreBloque) {
		areaBloque = nombreBloque;
	}
	
	/**
	 * @return the nombreBloque
	 */
	public String getNombreBloque() {
		return nombreBloque;
	}

	/**
	 * @param nombreBloque
	 *            the nombreBloque to set
	 */
	public void setNombreBloque(String nombreBloque) {
		this.nombreBloque = nombreBloque;
	}

	/**
	 * @return the titulo
	 */
	public String getTitulo() {
		return StringEscapeUtils.escapeHtml(titulo);
	}

	/**
	 * @param titulo
	 *            the titulo to set
	 */
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	/**
	 * @return the minPregunta
	 */
	public int getMinPregunta() {
		return minPregunta;
	}

	/**
	 * @param minPregunta
	 *            the minPregunta to set
	 */
	public void setMinPregunta(int minPregunta) {
		this.minPregunta = minPregunta;
	}

	/**
	 * @return the maxPregunta
	 */
	public int getMaxPregunta() {
		return maxPregunta;
	}

	/**
	 * @param maxPregunta
	 *            the maxPregunta to set
	 */
	public void setMaxPregunta(int maxPregunta) {
		this.maxPregunta = maxPregunta;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Bloque [Area=" + areaBloque + ", Bloque=" + nombreBloque + ", Título=" + titulo + ", MinPregunta=" + minPregunta
				+ ", MaxPregunta=" + maxPregunta + "]";
	}

}
