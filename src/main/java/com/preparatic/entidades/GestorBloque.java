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
/**
 * 
 */
package com.preparatic.entidades;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

/**
 * @author ester
 * 
 */
public class GestorBloque {

	private static Logger logger = LogManager.getLogger(GestorBloque.class);

	private List<String> getBloquesOffLine() {
		List<String> listaBloques = new ArrayList<String>();

		String bloque = "B1";
		listaBloques.add(bloque);

		bloque = "B2";
		listaBloques.add(bloque);

		bloque = "B3";
		listaBloques.add(bloque);

		bloque = "B4";
		listaBloques.add(bloque);

		return listaBloques;
	}

	public List<String> getBloque() {
		List<String> listaBloques = new ArrayList<String>();

		try {
			java.sql.Connection conexion = GestorConexionBD.getConnection();

			Statement sentencia = conexion.createStatement();
			// Pedimos todas las temáticas que haya en la base de datos.
			String sSql = "SELECT `BLOQUE` FROM `BLOQUES`";
			ResultSet resultados = sentencia.executeQuery(sSql);

			String bloque;
			while (!resultados.isLast()) {
				resultados.next();
				bloque = resultados.getString("BLOQUE");
				listaBloques.add(bloque);
			}
			resultados.close();
			sentencia.close();
		} catch (SQLException e) {
			logger.error(e.getMessage());
		}

		return listaBloques;

	}
}
