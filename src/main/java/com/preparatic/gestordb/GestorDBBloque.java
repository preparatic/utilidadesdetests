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
package com.preparatic.gestordb;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.preparatic.entidades.GestorConexionBD;
import com.preparatic.entidades.InfoBloque;
import com.preparatic.revisortests.GestorEstadisticas;

/**
 * @author Preparatic
 *
 */
public class GestorDBBloque {
	private static Logger logger = LogManager.getLogger(GestorDBBloque.class);

	private static final String updateStatementStr = "UPDATE `BLOQUES` SET " + // "`BLOQUEID` = ?, " + // 1
			"`AREA` = ?, " + // 1
			"`TITULO` = ?, " + // 2
			"`MIN` = ?, " + // 3
			"`MAX` = ?, " + // 4
			"WHERE `BLOQUEID` = ?"; // 5
	
	private static final String insertStatementStr = "INSERT INTO `BLOQUES` (" + "`BLOQUEID`, " + // 1
			"`AREA`, " + // 2
			"`TITULO`, " + // 3
			"`MIN`, " + // 4
			"`MAX`) " + // 5
			"VALUES " + "(?,?,?,?,?)";

	
	public List<InfoBloque> getListaBloques() {
		List<InfoBloque> listaBloques = new ArrayList<InfoBloque>();

		try {
			java.sql.Connection conexion = GestorConexionBD.getConnection();

			Statement sentencia = conexion.createStatement();
			// Pedimos todas los bloques que haya en la base de datos.
			String sSql = "SELECT `BLOQUEID`, `AREA`, `TITULO`, `MIN`, `MAX` FROM `BLOQUES`";
			ResultSet resultados = sentencia.executeQuery(sSql);

			InfoBloque bloque = new InfoBloque();
			while (!resultados.isLast()) {
				resultados.next();
				bloque.setNombreBloque(resultados.getString("BLOQUEID"));
				bloque.setAreaBloque(resultados.getString("AREA"));
				bloque.setTitulo(resultados.getString("TITULO"));
				bloque.setMinPregunta(resultados.getInt("MIN"));
				bloque.setMaxPregunta(resultados.getInt("MAX"));
				listaBloques.add(bloque);
			}
			resultados.close();
			sentencia.close();
		} catch (SQLException e) {
			logger.error(e.getMessage());
		}

		return listaBloques;
	}

	public void updateBloques(List<InfoBloque> listaBloques) {
		try {
			java.sql.Connection conexion = GestorConexionBD.getConnection();
			PreparedStatement updateStatement = conexion.prepareStatement(updateStatementStr);

			for (InfoBloque bloque : listaBloques) {
				
				updateStatement.setString(1, bloque.getNombreBloque());
				updateStatement.setString(2, bloque.getAreaBloque());
				updateStatement.setString(3, bloque.getTitulo());
				updateStatement.setInt(4, bloque.getMinPregunta());
				updateStatement.setInt(5, bloque.getMaxPregunta());
				
				// Ejecutamos la sentencia preparada
				updateStatement.executeUpdate();

				// Actualizamos estadísticas
				GestorEstadisticas.addUPDATE();
			}
		} catch (SQLException e) {
			logger.error(e.getMessage());
			GestorEstadisticas.reportarErrorUPDATE("updateBloques: " + e.getMessage());
			GestorConexionBD.rollBackTransaction();
		}
	}

	public void insertBloques(List<InfoBloque> listaBloques) {
		try {
			java.sql.Connection conexion = GestorConexionBD.getConnection();
			PreparedStatement insertStatement = conexion.prepareStatement(insertStatementStr);

			for (InfoBloque bloque : listaBloques) {
				
				insertStatement.setString(1, bloque.getNombreBloque());
				insertStatement.setString(2, bloque.getAreaBloque());
				insertStatement.setString(3, bloque.getTitulo());
				insertStatement.setInt(4, bloque.getMinPregunta());
				insertStatement.setInt(5, bloque.getMaxPregunta());
				
				// Ejecutamos la sentencia preparada
				insertStatement.executeUpdate();

				// Actualizamos estadisticas
				GestorEstadisticas.addINSERT();
			}
		} catch (SQLException e) {
			logger.error(e.getMessage());
			GestorEstadisticas.reportarErrorINSERT("insertBloques: " + e.getMessage());
			GestorConexionBD.rollBackTransaction();

		}
	}

	public void deleteAllBloques() {
		try {
			java.sql.Connection conexion = GestorConexionBD.getConnection();

			String query = "DELETE FROM `BLOQUES`";
			Statement s = conexion.createStatement();
			s.execute(query);
		} catch (SQLException e) {
			GestorEstadisticas.reportarErrorDELETE("deleteAllBloques:" + e.getMessage());
			logger.error(e.getMessage());
			GestorConexionBD.rollBackTransaction();
		}
	}
}
