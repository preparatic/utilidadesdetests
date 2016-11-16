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
package com.preparatic.revisortests;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Iterator;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.preparatic.csvreaders.PreguntaTest;
import com.preparatic.entidades.GestorConexionBD;

public class GestorConsultas {

	private Logger logger = LogManager.getLogger(GestorConsultas.class);
	private Connection conexion;

	private PreparedStatement updateStatement;
	private PreparedStatement insertStatement;

	public GestorConsultas() {
		conexion = GestorConexionBD.getConnection();
		GestorConexionBD.openTransaction();

		try {
			updateStatement = conexion.prepareStatement("UPDATE PREGUNTAS_TEST SET " + "PREGUNTA = ?, " + // 1
					"RESPUESTA_A = ?, " + // 2
					"RESPUESTA_B = ?, " + // 3
					"RESPUESTA_C = ?, " + // 4
					"RESPUESTA_D = ?, " + // 5
					"RESPUESTA_CORRECTA = ?, " + // 6
					"BLOQUE = ?, " + // 7
					"AUTOR = ?, " + // 8
					"PROMOCION = ?, " + // 9
					"ANNO_CREACION = ?, " + // 10
					"OBSERVACIONES = ?, " + // 11
					"NUMERO_TEST = ?, " + // 12
					"NUMERO_PREGUNTA = ?, " + // 13
					"TEMAS = ?, " + // 14
					"REVISADA = ? " + // 15
					"WHERE id = ?");

			insertStatement = conexion.prepareStatement("INSERT INTO PREGUNTAS_TEST (" + "PREGUNTA, " + // 1
					"RESPUESTA_A, " + // 2
					"RESPUESTA_B, " + // 3
					"RESPUESTA_C, " + // 4
					"RESPUESTA_D, " + // 5
					"RESPUESTA_CORRECTA," + // 6
					"BLOQUE, " + // 7
					"AUTOR, " + // 8
					"PROMOCION, " + // 9
					"ANNO_CREACION, " + // 10
					"OBSERVACIONES, " + // 11
					"NUMERO_TEST, " + // 12
					"NUMERO_PREGUNTA," + // 13
					"TEMAS, " + // 14
					"REVISADA)" + // 15
					"VALUES " + "(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
		} catch (SQLException e) {
			logger.error(e.getMessage());
		}

	}

	public void ejecutarSentencias(ArrayList<PreguntaTest> listaPreguntas) {
		// Iteramos la lista de preguntas y las vamos tratando según su campo
		// SENTENCIA.
		Iterator<PreguntaTest> it = listaPreguntas.iterator();

		while (it.hasNext()) {
			PreguntaTest pregunta = it.next();

			logger.info("ID:" + pregunta.getId());

			if (pregunta.getSentencia().equals("UPDATE")) {
				ejecutarUPDATE(pregunta);
			} else if (pregunta.getSentencia().equals("DELETE"))
				ejecutarDELETE(pregunta);
			else if (pregunta.getSentencia().equals("INSERT"))
				ejecutarINSERT(pregunta);
			// Si no tiene sentencia, no se trata.
		}

		try {
			conexion.commit(); // Hacemos commit manualmente y finalizamos la
								// transacción
		} catch (SQLException e) {
			logger.error(e.getMessage());
		}
		limpiar();

	}

	private void ejecutarUPDATE(PreguntaTest pregunta) {
		try {
			updateStatement.setString(1, pregunta.getPregunta());
			updateStatement.setString(2, pregunta.getRespuesta_a());
			updateStatement.setString(3, pregunta.getRespuesta_b());
			updateStatement.setString(4, pregunta.getRespuesta_c());
			updateStatement.setString(5, pregunta.getRespuesta_d());
			updateStatement.setString(6, pregunta.getRespuesta_correcta());
			updateStatement.setString(7, pregunta.getBloque());
			updateStatement.setString(8, pregunta.getAutor());
			updateStatement.setString(9, pregunta.getPromocion());

			if (!pregunta.getAnno_creacion().equals(""))
				updateStatement.setInt(10, Integer.parseInt(pregunta.getAnno_creacion()));

			updateStatement.setString(11, pregunta.getObservaciones());

			if (!pregunta.getNumeroTest().equals("") && !pregunta.getNumeroTest().equals("NULL"))
				updateStatement.setInt(12, Integer.parseInt(pregunta.getNumeroTest()));
			else
				updateStatement.setInt(12, 0);

			if (!pregunta.getNumeroPregunta().equals("") && !pregunta.getNumeroPregunta().equals("NULL"))
				updateStatement.setInt(13, Integer.parseInt(pregunta.getNumeroPregunta()));
			else
				updateStatement.setInt(13, 0);

			updateStatement.setString(14, pregunta.getTemas());

			if (!pregunta.getRevisada().equals("") && !pregunta.getRevisada().equals("NULL"))
				updateStatement.setInt(15, Integer.parseInt(pregunta.getRevisada()));
			else
				updateStatement.setInt(15, 0);

			updateStatement.setInt(16, Integer.parseInt(pregunta.getId()));

			// Ejecutamos la sentencia preparada
			updateStatement.executeUpdate();

			// Actualizamos estadÃ­sticas
			GestorEstadisticas.addUPDATE();

		} catch (SQLException e) {
			logger.error(e.getMessage());
			GestorEstadisticas.reportarErrorUPDATE(pregunta.getId());
			GestorConexionBD.rollBackTransaction();
		}
		GestorEstadisticas.addUPDATE();
	}

	private void ejecutarDELETE(PreguntaTest pregunta) {
		try {

			String query = "DELETE FROM PREGUNTAS_TEST WHERE ID = " + pregunta.getId();
			Statement s = conexion.createStatement();
			s.execute(query);
		} catch (SQLException e) {
			GestorEstadisticas.reportarErrorDELETE(pregunta.getId());
			logger.error(e.getMessage());
			GestorConexionBD.rollBackTransaction();
		}
		GestorEstadisticas.addDELETE();
	}

	private void ejecutarINSERT(PreguntaTest pregunta) {
		try {
			insertStatement.setString(1, pregunta.getPregunta());
			insertStatement.setString(2, pregunta.getRespuesta_a());
			insertStatement.setString(3, pregunta.getRespuesta_b());
			insertStatement.setString(4, pregunta.getRespuesta_c());
			insertStatement.setString(5, pregunta.getRespuesta_d());
			insertStatement.setString(6, pregunta.getRespuesta_correcta());
			insertStatement.setString(7, pregunta.getBloque());
			insertStatement.setString(8, pregunta.getAutor());
			insertStatement.setString(9, pregunta.getPromocion());

			if (!pregunta.getAnno_creacion().equals(""))
				insertStatement.setInt(10, 2015); // 2015 por defecto.

			insertStatement.setString(11, pregunta.getObservaciones());

			if (!pregunta.getNumeroTest().equals(""))
				insertStatement.setInt(12, Integer.parseInt(pregunta.getNumeroTest()));
			else
				insertStatement.setInt(12, 0);

			if (!pregunta.getNumeroPregunta().equals(""))
				insertStatement.setInt(13, Integer.parseInt(pregunta.getNumeroPregunta()));
			else
				insertStatement.setInt(13, 0);

			insertStatement.setString(14, pregunta.getTemas());

			if (!pregunta.getRevisada().equals(""))
				insertStatement.setInt(15, Integer.parseInt(pregunta.getRevisada()));
			else
				insertStatement.setInt(15, 0);

			// execute insert SQL stetement
			insertStatement.executeUpdate();
		} catch (SQLException e) {
			GestorEstadisticas.reportarErrorINSERT(pregunta.getId());
			logger.error(e.getMessage());
			GestorConexionBD.rollBackTransaction();
		}
		GestorEstadisticas.addINSERT();
	}

	private void limpiar() {
		try {
			this.updateStatement.close();
			this.insertStatement.close();
			GestorConexionBD.closeConnection();
		} catch (SQLException e) {
			logger.error(e.getMessage());
		}
	}

}
