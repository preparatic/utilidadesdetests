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
package com.preparatic.gestorpreguntas;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Iterator;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.preparatic.entidades.GestorConexionBD;

/**
 * @author ester
 * 
 */
public class GestorPreguntasPorFechas extends GestorPreguntas {
	private static Logger logger = LogManager.getLogger(GestorPreguntasPorFechas.class);
	
	private HashMap<Integer, GestorPreguntas> ListaPreguntasPorAnno;
	Integer numPreguntasEnTest;

	// preguntas
	// que debe tener
	// este test.

	public GestorPreguntasPorFechas(Integer idTema, Integer numPreguntasEnTest) {
		super();
		this.idTema = idTema;
		this.numPreguntasEnTest = numPreguntasEnTest;
		this.CargarPreguntas();
	}

	/**
	 * Carga todas las preguntas que haya en base de datos con el idTema que se
	 * le ha dado.
	 * 
	 * @param conexion
	 */
	private void CargarPreguntas() {

		try {
			java.sql.Connection conexion = GestorConexionBD.getConnection();

			Statement sentencia = conexion.createStatement();
			ResultSet resultados = sentencia
					.executeQuery("SELECT ID, TEMAS, ANNO_CREACION FROM `PREGUNTAS_TEST` WHERE TEMAS LIKE '%"
							+ this.idTema + "%' ORDER BY ANNO_CREACION DESC");

			/*
			 * Hay que distinguir en el campo "temas" que verdaderamente sea
			 * nuestro número de tema.
			 * 
			 * Por ejemplo, no es lo mismo el tema 21, a que ponga en el campo
			 * temas "221".
			 */
			while (!resultados.isLast()) {
				resultados.next();
				String temasSeparadosPorComaSinEspacio = resultados.getString(
						"TEMAS").replaceAll(" ", "");
				Integer anno = resultados.getInt("ANNO_CREACION");
				Integer idPregunta = resultados.getInt("ID");

				for (String s : temasSeparadosPorComaSinEspacio.split(",")) {
					if (s.equals(this.idTema.toString())) {
						insertarPregunta(idPregunta, anno);
					}

				}
			}
		} catch (SQLException e) {

			logger.error(e.getMessage());
		}

	}

	private boolean insertarPregunta(Integer idPregunta, Integer anno) {
		// Si no existe la lista, se genera
		if (ListaPreguntasPorAnno == null)
			ListaPreguntasPorAnno = new HashMap<Integer, GestorPreguntas>();

		// Si no existe el año, se genera.
		if (!ListaPreguntasPorAnno.containsKey(anno))
			ListaPreguntasPorAnno.put(anno, new GestorPreguntas());

		GestorPreguntas gestorAnno = ListaPreguntasPorAnno.get(anno);
		gestorAnno.agregarPregunta(idPregunta);
		return true;
	}

	/**
	 * Escoge una pregunta de la base de datos, y la quita de la lista para
	 * escoger. Si no quedan preguntas, devuelve null
	 */
	public Integer getIdPregunta() {
		if (ListaPreguntasPorAnno == null) {
			logger.error(" El gestor no tiene preguntas. ");
			return null;
		}

		/*
		 * Selecciono el año más moderno que aún tenga preguntas sin usar, y le
		 * pido una pregunta aleatoria.
		 */

		int anno = 0;
		while ((ListaPreguntasPorAnno.size() > 0) && (anno == 0)) {
			anno = seleccionarUltimoAnnoConPreguntas();
			GestorPreguntas g = ListaPreguntasPorAnno.get(anno);
			if (g.getPreguntasSinUsar() == 0) {
				ListaPreguntasPorAnno.remove(anno);
				anno = 0;
			} else {
				int IdPregunta = g.getIdPregunta();
				return IdPregunta;
			}

		}
		// Si ya no quedan preguntas en ningún año:
		return null;
	}

	private Integer ultimoAnno;

	private Integer seleccionarUltimoAnnoConPreguntas() {

		if (ListaPreguntasPorAnno.isEmpty())
			return null;

		// Si aún existe el último año, con preguntas, es el que devolvemos.
		if (ListaPreguntasPorAnno.containsKey(ultimoAnno))
			return ultimoAnno;

		/*
		 * Si no vale el que devolvimos en la llamada anterior, volvemos a
		 * calcular cuál es el último año.
		 */
		ultimoAnno = 0;
		Iterator<Integer> itr = ListaPreguntasPorAnno.keySet().iterator();
		while (itr.hasNext()) {
			Integer anno = itr.next();
			if (anno > ultimoAnno)
				ultimoAnno = anno;
		}
		return ultimoAnno;
	}

	public Integer getNumPreguntasEnTest() {
		return numPreguntasEnTest;
	}

	public void setNumPreguntasEnTest(Integer numPreguntasEnTest) {
		this.numPreguntasEnTest = numPreguntasEnTest;
	}

}
