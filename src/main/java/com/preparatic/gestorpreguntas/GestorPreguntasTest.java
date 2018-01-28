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

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.preparatic.entidades.GestorConexionBD;

public class GestorPreguntasTest extends GestorPreguntas {
	private static Logger logger = LogManager.getLogger(GestorPreguntasTest.class);

	int idTest;

	/**
	 * Genera el test para un NUMERO_TEST en concreto.
	 * 
	 * @param IdTest Es el número de test que voy a generar.
	 */

	/**
	 * 
	 * @param idTema
	 * @param frecuenciaAparicionTest
	 *            número de preguntas que tiene este tema en los test.
	 */
	public GestorPreguntasTest(int idTest) {
		super();
		this.idTest = idTest;
		CargarPreguntasTema(idTest);
		this.darUsadas = true;
	}

	private void CargarPreguntasTema(int idTest) {

		try {
			java.sql.Connection conexion = GestorConexionBD.getConnection();

			Statement sentencia = conexion.createStatement();
			// Si no existen preguntas para este tema, fin.
			String sSql = "SELECT Count(*) AS TOTAL FROM `PREGUNTAS_TEST`  WHERE `NUMERO_TEST` = "
					+ idTest;
			ResultSet resultados = sentencia.executeQuery(sSql);
			resultados.next();
			if (resultados.getInt("TOTAL") == 0) {
				logger.info("No hay preguntas asociadas al test" + idTest);
				resultados.close();
				sentencia.close();
				return;
			}

			// Si hay preguntas en la base de datos, las metemos en la lista de
			// identificadores de preguntas.
			sSql = "SELECT `ID` FROM `PREGUNTAS_TEST` where `NUMERO_TEST`="
					+ idTest;
			resultados = sentencia.executeQuery(sSql);

			while (!resultados.isLast()) {
				resultados.next();
				this.ListaPregunta.add(resultados.getInt("ID"));
			}

			resultados.close();
			sentencia.close();
		} catch (SQLException e) {
			logger.error(e.getMessage());
		}

	}
}
