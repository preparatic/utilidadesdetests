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

import java.util.ArrayList;
import java.util.List;

/**
 * @author ester
 * 
 */
public class GestorPreguntasUsadas {

	private static List<Integer> ListaPreguntasUsadas;

	/**
	 * Apunta la pregunta a la lista de preguntas usadas. Si ya está usada,
	 * devuelve false.
	 * 
	 * @param idPregunta
	 * @return
	 */
	public static boolean UsarPregunta(Integer idPregunta) {
		if (GestorPreguntasUsadas.EstaUsada(idPregunta))
			return false;

		// Inicializamos la lista, si no ha sido inicializada ya.
		if (ListaPreguntasUsadas == null)
			ListaPreguntasUsadas = new ArrayList<Integer>();

		ListaPreguntasUsadas.add(idPregunta);
		return true;
	}

	/**
	 * Devuelve si una pregunta ha sido ya usada.
	 * 
	 * @param idPregunta
	 * @return
	 */

	public static boolean EstaUsada(Integer idPregunta) {
		if (ListaPreguntasUsadas == null)
			return false;

		if (ListaPreguntasUsadas.contains((Object) idPregunta))
			return true;

		return false;

	}

	/**
	 * Limpia la lista de preguntas usadas.
	 * 
	 * @return
	 */
	public static boolean BorrarUsadas() {

		ListaPreguntasUsadas = null;

		return true;
	}

}
