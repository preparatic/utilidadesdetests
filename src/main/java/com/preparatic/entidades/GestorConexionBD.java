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

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Savepoint;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.preparatic.ConfigProperties;

/**
 * Esta clase se encarga de mantener la conexión con la base de datos.
 * 
 * @author ester
 * 
 */
public class GestorConexionBD {

	private static final String BBDD = ConfigProperties.getProperty("data.conexion.conector")
			+ ConfigProperties.getProperty("data.conexion.host") + "/"
			+ ConfigProperties.getProperty("data.conexion.database") + "?user="
			+ ConfigProperties.getProperty("data.conexion.user") + "&password="
			+ ConfigProperties.getProperty("data.conexion.password");

	private static Logger logger = LogManager.getLogger(GestorConexionBD.class);

	static Connection connection = null;
	static Savepoint savepoint = null;

	public static Connection getConnection() {

		// Abrir la conexión
		try {

			// Si ya la hemos abierto, devolvemos la que tenemos.
			if ((connection != null) && (!connection.isClosed())) {
				return connection;
			}

			/* Asegurar que se va a usar el driver de mysql. */
			// Class.forName("com.mysql.jdbc.Driver").newInstance(); // no es
			// necesario en la ultima version de MySQl
			logger.debug(BBDD);
			connection = DriverManager.getConnection(BBDD);

		} catch (Exception e) {
			logger.warn("Fallo en la conexión con base de datos. \n" + e.getMessage());

		}

		return connection;

	}

	public static void openTransaction() {
		try {
			connection.setAutoCommit(false); // Usaremos una transacción, para
												// ello hay que desactivar el
												// commit automático de cada
												// sentencia.
			savepoint = connection.setSavepoint("INICIO_EXPORTACION");
		} catch (SQLException e) {
			logger.warn("Error en el ROLLBACK realizado. \n" + e.getMessage());
		}
	}

	public static void rollBackTransaction() {
		try {
			connection.rollback(savepoint);
		} catch (SQLException e) {
			logger.warn("Error en el ROLLBACK realizado. \n" + e.getMessage());
		}
	}

	public static void closeConnection() {
		if (connection == null)
			return;

		try {
			if (connection.isClosed())
				return;

			connection.close();
			logger.debug("Conexión cerrada.");
		} catch (Exception e) {
			logger.warn("Error al cerrar las conexiones. \n" + e.getMessage());

		}
		return;
	}
}
