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

public class GestorPreguntasTema extends GestorPreguntas {
	private static Logger logger = LogManager.getLogger(GestorPreguntasTema.class);

	int IdTema;
	int numPreguntasEnTest;

	/**
	 * 
	 * @param idTema
	 * @param frecuenciaAparicionTest
	 *            Número de preguntas que tiene este tema en los test.
	 */
	public GestorPreguntasTema(Integer idTema, Integer numPreguntasEnTest) {
		super();
		this.idTema = idTema;
		this.numPreguntasEnTest = numPreguntasEnTest;
		CargarPreguntasTema(idTema);
	}

	/**
	 * Saca de la base de datos todas las preguntas asignadas al tema.
	 * 
	 * @param conexion
	 */
	private void CargarPreguntasTema(int IdTema) {

		try {
			java.sql.Connection conexion = GestorConexionBD.getConnection();

			Statement sentencia = conexion.createStatement();
			// Si no existen preguntas para este tema, fin.
			String sSql = "SELECT COUNT(*) AS TOTAL FROM `PREGUNTAS_TEST` WHERE TEMAS LIKE '%"
					+ this.idTema + "%'";
			ResultSet resultados = sentencia.executeQuery(sSql);
			resultados.next();
			if (resultados.getInt("TOTAL") == 0) {
				logger.info("Tema " + idTema
						+ " no tiene preguntas en la base de datos");
				resultados.close();
				sentencia.close();
				return;
			}

			// Si hay preguntas en la base de datos, las procesamos.
			sSql = "SELECT ID, TEMAS FROM `PREGUNTAS_TEST` WHERE TEMAS LIKE '%"
					+ this.idTema + "%'";
			resultados = sentencia.executeQuery(sSql);

			/*
			 * Hay que distinguir en el campo "temas" que verdaderamente sea
			 * nuestro número de tema.
			 * 
			 * Por ejemplo, no es lo mismo el tema 21, a que ponga en el campo
			 * temas "221".
			 */
			while (!resultados.isLast()) {
				resultados.next();

				String temasBBDD = resultados.getString("TEMAS");
				if ((temasBBDD != null) && (!temasBBDD.equals(""))) {
					for (String s : temasBBDD.replaceAll(" ", "").split(",")) {
						if (s.equals(idTema.toString()))
							this.ListaPregunta.add(resultados.getInt("ID"));
					}
				}
			}
			resultados.close();
			sentencia.close();
		} catch (SQLException e) {
			logger.error(e.getMessage());
		}

	}

	public Integer getNumPreguntasEnTest() {
		return numPreguntasEnTest;
	}

	public void setNumPreguntasEnTest(Integer numPreguntasEnTest) {
		this.numPreguntasEnTest = numPreguntasEnTest;
	}
}
