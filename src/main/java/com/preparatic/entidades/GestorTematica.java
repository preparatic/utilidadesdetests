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
public class GestorTematica {

	private static Logger logger = LogManager.getLogger(GestorTematica.class);

	public class tematica {
		public Integer id;
		public String descripcion;
	}

	private List<tematica> getTematicasOffLine() {
		List<tematica> listaTematicas = new ArrayList<tematica>();
		tematica t = new tematica();
		t.id = 1;
		t.descripcion = "Prueba 1";
		listaTematicas.add(t);

		t = new tematica();
		t.id = 2;
		t.descripcion = "Prueba 2";
		listaTematicas.add(t);

		t = new tematica();
		t.id = 3;
		t.descripcion = "Prueba 3";
		listaTematicas.add(t);

		return listaTematicas;
	}

	public List<tematica> getTematicas() {
		List<tematica> listaTematicas = new ArrayList<tematica>();

		try {
			java.sql.Connection conexion = GestorConexionBD.getConnection();

			Statement sentencia = conexion.createStatement();
			// Pedimos todas las temáticas que haya en la base de datos.
			String sSql = "SELECT `ID` , `TEMATICA` FROM `TEMATICAS` GROUP BY `ID` , `TEMATICA`";
			//String sSql = "Show tables";
			ResultSet resultados = sentencia.executeQuery(sSql);

			while (!resultados.isLast()) {
				resultados.next();
				tematica t = new tematica();
//				String g2 = resultados.getString(1);
//				String g = resultados.getString("Tables_in_prepar2_contenidos");
				t.id = resultados.getInt("ID");
				t.descripcion = resultados.getString("TEMATICA");
				listaTematicas.add(t);
			}
			resultados.close();
			sentencia.close();
		} catch (SQLException e) {
			logger.error(e.getMessage());
		}

		return listaTematicas;

	}
}
