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
package com.preparatic.gestorpreguntas;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Random;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.preparatic.entidades.GestorConexionBD;

public class GestorPreguntas {

	private static Logger logger = LogManager.getLogger(GestorPreguntas.class);

	Integer idGestorPreguntas = 0;
	Integer idTema = 0;

	/* Especifica si al dar preguntas, se pregunta al gestor */
	Boolean darUsadas = true;

	ArrayList<Integer> ListaPregunta;

	public GestorPreguntas() {
		ListaPregunta = new ArrayList<Integer>();
	}

	/**
	 * Se carga el gestor con el resultado de la sentencia de carga de datos.
	 * 
	 * @param sentenciaCargaDatos
	 * @param conexion
	 */
	public GestorPreguntas(String sentenciaCargaDatos) {
		this.cargarPreguntas(sentenciaCargaDatos);
	}

	private void crearListaPreguntas() {
		if (ListaPregunta == null)
			ListaPregunta = new ArrayList<Integer>();
	}

	/**
	 * Escoge una pregunta de la base de datos, y la quita de la lista para
	 * escoger. Si no quedan preguntas, devuelve null
	 */
	public Integer getIdPregunta() {
		if (ListaPregunta == null) {
			logger.error(" Lista de preguntas Vacía");
			return null;
		}

		if (ListaPregunta.size() == 0) {
			logger
					.debug("No hay preguntas que recuperar. "
							+ idGestorPreguntas);
			return null;
		}

		// Cogemos aleatoriamente una pregunta
		Random rnd = new Random();
		while (getPreguntasSinUsar() > 0) {
			Integer Index = rnd.nextInt(ListaPregunta.size());
			Integer IdPregunta = ListaPregunta.get(Index);
			// Se borra la pregunta de la lista, para no volverla a sacar.
			ListaPregunta.remove((Object) IdPregunta);
			// Si el gestor dice que no está usada, se devuelve.
			if (darUsadas)
				return IdPregunta;
			else if (GestorPreguntasUsadas.UsarPregunta(IdPregunta))
				return IdPregunta;

		}

		return null;
	}

	/**
	 * Se añade esta pregunta al tema, para que luego sea elegible.
	 * 
	 * @param pregunta
	 */
	public void agregarPregunta(Integer IdPregunta) {
		ListaPregunta.add(IdPregunta);
		return;
	}

	/**
	 * Copia las preguntas que tiene este gestor en la lista destino.
	 * 
	 * @param destino
	 */
	public boolean copiarPreguntas(GestorPreguntas g) {

		Iterator<Integer> itrPregunta = ListaPregunta.iterator();
		while (itrPregunta.hasNext()) {
			Integer IdPregunta = itrPregunta.next();
			g.agregarPregunta(IdPregunta);
		}
		return true;
	}

	/**
	 * Se carga el gestor con todos los ID de preguntas que se especifique en la
	 * sentencia.
	 * 
	 * @param Ssql
	 *            . debe contener un campo "ID" con los identificadores de
	 *            preguntas
	 * @return
	 */
	boolean cargarPreguntas(String Ssql) {
		try {
			java.sql.Connection conexion = GestorConexionBD.getConnection();

			this.crearListaPreguntas();

			Statement sentencia = conexion.createStatement();
			ResultSet resultados = sentencia.executeQuery(Ssql);

			while (!resultados.isLast()) {
				resultados.next();
				ListaPregunta.add(resultados.getInt("ID"));
			}
		} catch (SQLException e) {
			logger.error(e.getMessage());
			return false;
		}
		return true;
	}

	public Integer getIdTema() {
		return idTema;
	}

	public Integer getPreguntasSinUsar() {
		if (this.ListaPregunta == null)
			return 0;
		return this.ListaPregunta.size();
	}

}
