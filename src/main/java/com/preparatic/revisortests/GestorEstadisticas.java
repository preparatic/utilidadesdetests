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
package com.preparatic.revisortests;

import java.util.ArrayList;
import java.util.Iterator;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class GestorEstadisticas {

	private static Logger logger = LogManager.getLogger(GestorEstadisticas.class);
	
	private static int numeroDELETE;
	private static int numeroUPDATE;
	private static int numeroINSERT;

	private static int numeroErroresDELETE;
	private static int numeroErroresUPDATE;
	private static int numeroErroresINSERT;
	private static int numeroErroresTotales;
	
	private static ArrayList<String> listaErrores = null;
	private static ArrayList<String> listaErroresDELETE = null;
	private static ArrayList<String> listaErroresUPDATE = null;
	private static ArrayList<String> listaErroresINSERT = null;

	public static void addDELETE() {
		numeroDELETE++;
	}

	public static void addUPDATE() {
		numeroUPDATE++;
	}

	public static void addINSERT() {
		numeroINSERT++;
	}
	
	public static void reportarError(String id){
		if(listaErrores == null){
			listaErrores = new ArrayList<String>();	
		}
		listaErrores.add(id);
		numeroErroresTotales++;
	}
	
	public static void reportarErrorDELETE(String id){
		if(listaErroresDELETE == null){
			listaErroresDELETE = new ArrayList<String>();	
		}
		
		numeroErroresDELETE++;
		listaErroresDELETE.add(id);
		reportarError(id);
	}
	
	public static void reportarErrorUPDATE(String id){
		if(listaErroresUPDATE == null){
			listaErroresUPDATE = new ArrayList<String>();	
		}
		
		numeroErroresUPDATE++;
		listaErroresUPDATE.add(id);
		reportarError(id);
	}
	
	public static void reportarErrorINSERT(String id){
		if(listaErroresINSERT == null){
			listaErroresINSERT = new ArrayList<String>();	
		}
		
		numeroErroresINSERT++;
		listaErroresINSERT.add(id);
		reportarError(id);
	}
	
	public static void obtenerInforme(){
		if(numeroErroresTotales == 0)
			logger.info("***** No se han detectado errores *****\n");
			
		logger.info("***** Preguntas totales revisadas:" +  (numeroUPDATE+numeroDELETE+numeroINSERT));
		logger.info("***** Preguntas totales actualizadas:" +  numeroUPDATE );
		logger.info("***** Preguntas totales eliminadas:" + numeroDELETE);
		logger.info("***** Preguntas totales añdidas:" + numeroINSERT);

		if(numeroErroresTotales > 0){
			logger.warn("***** " + listaErrores.size() + " errores detectados: *****\n");
			
			if (numeroErroresDELETE > 0){
				logger.warn("***** " + numeroErroresDELETE + " errores con sentencia DELETE: *****\n");
				publicarErroresLista(listaErroresDELETE);
			}
			
			if (numeroErroresUPDATE > 0){
				logger.warn("***** " + numeroErroresUPDATE + " errores con sentencia UPDATE: *****\n");
				publicarErroresLista(listaErroresUPDATE);
			}
			
			if (numeroErroresINSERT > 0){
				logger.warn("***** " + numeroErroresINSERT + " errores con sentencia INSERT: *****\n");
				publicarErroresLista(listaErroresINSERT);
			}
		}

	}
	
	private static void publicarErroresLista(ArrayList<String> lista){
		Iterator<String> it = lista.iterator();
		while(it.hasNext()){
			logger.warn("- " + it.next() + "\n");
		}
	}
	

}
