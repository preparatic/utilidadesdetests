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

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.preparatic.entidades.Test.eTipoTest;

public class GestorTests {
	private List<Test> infoTests = new ArrayList<Test>();
	private static GestorTests instance = null;

	protected GestorTests() {
		// Exists only to defeat instantiation.
	}

	public static GestorTests getInstance() {
		if (instance == null) {
			instance = new GestorTests();
		}
		return instance;
	}
	
	public void addTest(Test t) {
		 infoTests.add(t);
	}
	
	public List<Test> getTests() {
		return infoTests;
	}
	
	public List<Test> getTestsGlobales() {
		List<Test> filteredTests = infoTests.stream()
				.filter(t -> t.getTipoTest() == eTipoTest.ALEATORIO)
				.collect(Collectors.toList());
		return filteredTests;
	}
	
	public List<Test> getTestPorBloque() {
		List<Test> filteredTests = infoTests.stream()
				.filter(t -> t.getTipoTest() == eTipoTest.BLOQUE)
				.collect(Collectors.toList());
		return filteredTests;
	}
	
	public List<Test> getTestPorTema() {
		List<Test> filteredTests = infoTests.stream()
				.filter(t -> t.getTipoTest() == eTipoTest.TEMA)
				.collect(Collectors.toList());
		return filteredTests;
	}
	
	public List<Test> getTestPorAnno() {
		List<Test> filteredTests = infoTests.stream()
				.filter(t -> t.getTipoTest() == eTipoTest.AÑO)
				.collect(Collectors.toList());
		return filteredTests;
	}
	
	public List<Test> getTestPorRelevancia() {
		List<Test> filteredTests = infoTests.stream()
				.filter(t -> t.getTipoTest() == eTipoTest.RELEVANCIA)
				.collect(Collectors.toList());
		return filteredTests;
	}
	
	public List<Test> getTestPorExamenes() {
		List<Test> filteredTests = infoTests.stream()
				.filter(t -> t.getTipoTest() == eTipoTest.EXAMEN)
				.collect(Collectors.toList());
		return filteredTests;
	}
}
