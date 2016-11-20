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
import java.util.Arrays;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class InfoTematica {
	private static Logger logger = LogManager.getLogger(InfoTematica.class);

	// En caso de que no se disponga conexion a internet (sin BD ni acceso a google) 
	// el programa utilizara esta lista para la generacion de tests. 
	// ATENCION. Puede estar desactualizado y solo usarlo para pruebas puntuales
	public static List<InfoTematica> TematicasPorDefecto = new ArrayList<InfoTematica>();

	static {
		TematicasPorDefecto.add(new InfoTematica("Auditoría", Arrays.asList(31, 32, 33)));
		TematicasPorDefecto.add(new InfoTematica("Calidad", Arrays.asList(87, 88, 89, 90, 91, 92)));
		TematicasPorDefecto.add(new InfoTematica("Compra Pública", Arrays.asList(34, 35, 38, 41)));
	}
	
	// Si cambia el orden o la cantidad de columnas del excel, solo habrá que
	// modificar este atributo.
	private enum Campo {
		TITULO(0), // C
		TEMA(1), // B
		
		NUM_COLUMNAS(2); // Número total de columnas en el excel.
		
		public int index; // Número de columna del excel 
		
		Campo(int indice) {
			index = indice;
		}
	};
	
	public static final int NUM_COLUMNAS = 	Campo.NUM_COLUMNAS.index;
	
	private String titulo;
	private List<Integer> numPreguntas = new ArrayList<Integer>();

	public InfoTematica() {
	}

	/**
	 * @param titulo
	 * @param numPreguntas
	 */
	public InfoTematica(String titulo, List<Integer> numPreguntas) {
		this.titulo = titulo;
		this.numPreguntas = numPreguntas;
	}
	
	public InfoTematica(ArrayList<String> celdas) {
		this.setTitulo(celdas.get(Campo.TITULO.index));
		
		int tema = Integer.parseInt(celdas.get(Campo.TEMA.index));
		if (!this.numPreguntas.contains(tema))
			this.numPreguntas.add(tema);
	}
	
	/**
	 * @return the titulo
	 */
	public String getTitulo() {
		return titulo;
	}

	/**
	 * @param titulo
	 *            the titulo to set
	 */
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	/**
	 * @return the numPreguntas
	 */
	public List<Integer> getNumPreguntas() {
		return numPreguntas;
	}

	/**
	 * @param numPreguntas
	 *            the numPreguntas to set
	 */
	public void setNumPreguntas(List<Integer> numPreguntas) {
		this.numPreguntas = numPreguntas;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Temática [título=" + titulo + ", Preguntas=" + numPreguntas + "]";
	}

}
