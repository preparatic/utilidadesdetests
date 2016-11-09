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
package com.preparatic.gestorpreguntas;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.preparatic.entidades.GestorConexionBD;

/**
 * Genera las preguntas de una temática en concreto
 */
public class GestorPreguntasPorTematica extends GestorPreguntas {
	private static Logger logger = LogManager.getLogger(GestorPreguntasPorTematica.class);
	
	int idTematica;
	String tituloTematica;
	String temas;

	public String getTemas() {
		return temas;
	}

	public String getTituloTematica() {
		return tituloTematica;
	}

	/**
	 * Genera un gestor con todas las preguntas de la temática.
	 * 
	 * @param conexion
	 * @param idTematica
	 */
	public GestorPreguntasPorTematica(int idTematica) {
		super();
		this.idTematica = idTematica;
		CargarPreguntas();
		this.darUsadas = true;
	}

	private void CargarPreguntas() {

		try {
			java.sql.Connection conexion = GestorConexionBD.getConnection();

			Statement sentencia = conexion.createStatement();

			// Recuperamos los temas asociados a la temática en bbdd
			String sSql = " SELECT `ID` , `TEMATICA` , `TEMA`  FROM `TEMATICAS` WHERE `ID` ="
					+ idTematica;
			ResultSet resultados = sentencia.executeQuery(sSql);
			resultados.next();
			tituloTematica = resultados.getString("TEMATICA");

			// Recuperamos la lista de temas
			sSql = " SELECT `ID`, `TEMATICA`, `TEMA` FROM `TEMATICAS` WHERE ID = "
					+ idTematica;
			resultados = sentencia.executeQuery(sSql);
			while (!resultados.isLast()) {
				resultados.next();
				cargarPreguntasTema(resultados.getInt("TEMA"));
			}

			resultados.close();
			sentencia.close();
		} catch (SQLException e) {
			logger.error("Error cargando preguntas de temática " + idTematica
					+ " TÃ­tulo" + tituloTematica);
			logger.error(e.getMessage());
		}

	}

	private void cargarPreguntasTema(int idTema) {
		String sSql = " SELECT ID  FROM `PREGUNTAS_TEST` WHERE "
				+ " `TEMAS`like\"%,%" + idTema + "\" OR " + "`TEMAS`like\" "
				+ idTema + "%,%\" OR " + "`TEMAS` = " + idTema;

		try {
			java.sql.Connection conexion = GestorConexionBD.getConnection();

			Statement sentencia = conexion.createStatement();
			ResultSet resultados = sentencia.executeQuery(sSql);
			resultados.next();

			while (!resultados.isLast()) {
				this.ListaPregunta.add(resultados.getInt("ID"));
				resultados.next();
			}
			resultados.close();
			sentencia.close();
		} catch (SQLException e) {
			logger.error("Error cargando preguntas de tema " + idTema);
			logger.error(sSql);
			logger.error(e.getMessage());
		}

	}
}
