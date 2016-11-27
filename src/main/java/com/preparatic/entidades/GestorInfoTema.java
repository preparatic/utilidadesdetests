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

import com.preparatic.csvreaders.IExcel;

public class GestorInfoTema {

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

	public void leerTemas(IExcel reader) {
		this.infoTemas = reader.getListaTemas();
	}
}
