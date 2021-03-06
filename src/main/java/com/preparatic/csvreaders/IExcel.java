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
package com.preparatic.csvreaders;

import java.io.IOException;
import java.util.ArrayList;

import com.preparatic.entidades.InfoBloque;
import com.preparatic.entidades.InfoTema;
import com.preparatic.entidades.InfoTematica;
import com.preparatic.entidades.PreguntaTest;

public interface IExcel {

	void abrirExcel() throws IOException;

	ArrayList<PreguntaTest> getListaPreguntas();
	
	ArrayList<InfoBloque> getListaBloques();
	ArrayList<InfoTema> getListaTemas();
	ArrayList<InfoTematica> getListaTematicas();
}