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

public class GestorPreguntasAnho extends GestorPreguntas {
	private static Logger logger = LogManager.getLogger(GestorPreguntasAnho.class);

	/**
	 * Genera el test para un NUMERO_TEST en concreto.
	 * 
	 * @param IdTest
	 *            Es el número de test que voy a generar.
	 */
	public GestorPreguntasAnho(String idAnho) {
		super();
		CargarPreguntasAnho(idAnho);
		return;
	}

	private void CargarPreguntasAnho(String anho) {

		try {

			java.sql.Connection conexion = GestorConexionBD.getConnection();

			Statement sentencia = conexion.createStatement();
			// Si no existen preguntas para este anho, fin
			String sSql = "SELECT Count(*) AS TOTAL FROM `PREGUNTAS_TEST` where `ANNO_CREACION`='"
				+ anho+ "';";
			ResultSet resultados = sentencia.executeQuery(sSql);
			resultados.next();
			if (resultados.getInt("TOTAL") == 0) {
				logger.info("No hay preguntas asociadas al anho " + anho);
				resultados.close();
				sentencia.close();
				return;
			}

			// Si hay preguntas en la base de datos, las metemos en la lista de
			// identificadores de preguntas.
			sSql = "SELECT `ID` FROM `PREGUNTAS_TEST` where `ANNO_CREACION`='"
				+ anho+ "' ORDER BY `REVISADA` DESC;";
			resultados = sentencia.executeQuery(sSql);

			while (!resultados.isLast()) {
				resultados.next();
				ListaPregunta.add(resultados.getInt("ID"));
			}

			resultados.close();
			sentencia.close();
		} catch (SQLException e) {
			logger.error(e.getMessage());
		}

	}
}
