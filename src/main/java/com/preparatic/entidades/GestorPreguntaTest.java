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

import java.util.List;
import java.util.stream.Collectors;

import com.preparatic.csvreaders.IExcel;

public class GestorPreguntaTest {

	private List<PreguntaTest> listaPreguntas;
	private static GestorPreguntaTest instance = null;

	protected GestorPreguntaTest() {
		// Exists only to defeat instantiation.
	}

	public static GestorPreguntaTest getInstance() {
		if (instance == null) {
			instance = new GestorPreguntaTest();
		}
		return instance;
	}

	public List<PreguntaTest> getPreguntas() {
		return listaPreguntas;
	}

	public void leerPreguntas(IExcel reader) {
		// Obtenemos todas las preguntas del excel
		List<PreguntaTest> listaPreguntas = reader.getListaPreguntas();

		// convert list to stream
		this.listaPreguntas = listaPreguntas.stream()
				.filter(question -> question.getTemas().size() >= 1 &&  question.getBloques().size() >= 1)
				/*
				 * la idea es que aqui podria hacer filtros si fueran necesarios
				 * por ejemplo, para filtrar por autor
				 * .filter(question ->question.getAutor().equals("LGD"))
				 */
				// collect the output and convert streams to a List
				.collect(Collectors.toList());
	}
	
	public void reasignaIdentificadores() {
		int id = 0;
		for (PreguntaTest pt : this.listaPreguntas) {
			pt.setId(Integer.toString(id++));
		}
	}
}
