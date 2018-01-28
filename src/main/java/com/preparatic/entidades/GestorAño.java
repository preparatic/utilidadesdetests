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
/**
 * 
 */
package com.preparatic.entidades;

import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.preparatic.ConfigProperties;

/**
 * @author marina
 * 
 */
public class GestorAño {

	private static Logger logger = LogManager.getLogger(GestorAño.class);

	public List<String> getAño() {
		List<String> listaAnhos = new ArrayList<String>();

		String anho = ConfigProperties
				.getProperty("tests.anho1").toString();
		listaAnhos.add(anho);

		anho =  ConfigProperties
		.getProperty("tests.anho2").toString();
		listaAnhos.add(anho);
		
		anho =  ConfigProperties
				.getProperty("tests.anho3").toString();
				listaAnhos.add(anho);

		return listaAnhos;
	}
}
