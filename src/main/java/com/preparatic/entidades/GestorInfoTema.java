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

package com.preparatic.entidades;

import java.util.List;
import java.util.stream.Collectors;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.preparatic.csvreaders.IExcel;

public class GestorInfoTema {
	private static Logger logger = LogManager.getLogger(PreguntaTest.class);

	private List<InfoTema> infoTemas;
	private static GestorInfoTema instance = null;

	protected GestorInfoTema() {
		// Exists only to defeat instantiation.
	}

	public static GestorInfoTema getInstance() {
		if (instance == null) {
			instance = new GestorInfoTema();
		}
		return instance;
	}

	public List<InfoTema> getTemas() {
		return infoTemas;
	}
	
	public InfoTema getTema(int t) {
		if (t <= infoTemas.size() && t >= 1) {
			return infoTemas.get(t-1);
		} else {
			return null;
		}
	}

	public void leerTemas(IExcel reader) {
		this.infoTemas = reader.getListaTemas();
	}
	
	public double getPesoTema(int t) {
		double peso = 0;
		if (t <= infoTemas.size() && t >= 1)
			peso += infoTemas.get(t-1).getPesoFinal();
		else
			logger.warn("Hay una pregunta con un tema fuera de rango");
		return peso;
	}
	
	public double getPesoTemas(List<Integer> temas) {
		double peso = 0;
		for (int t : temas){
			peso += this.getPesoTema(t);
		}
		return peso;
	}
	
	/*
	 * Cuenta las preguntas existentes de cada tema en 'listaPreguntas'
	 * y lo añade como atributo al objeto InfoTema asociado.
	 * Se utiliza luego en el cálculo de peso de preguntas para tests ponderados
	 */
	public void contarPreguntasPorTema(List<PreguntaTest> listaPreguntas) {
		List<PreguntaTest> filteredList = null;
		for (InfoTema tema : this.infoTemas) {
			filteredList = listaPreguntas.stream()
					.filter(question -> question.getTemas().contains(tema.getNumTema())).collect(Collectors.toList());			
			tema.setNumPreguntas(filteredList.size());
		}
	}
	
}
