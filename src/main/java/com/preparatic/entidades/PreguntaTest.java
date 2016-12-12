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

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class PreguntaTest {
	private static Logger logger = LogManager.getLogger(PreguntaTest.class);

	// Si cambia el orden o la cantidad de columnas del excel, solo habrá que
	// modificar este atributo.
	public enum Campo {
		PREGUNTA(0),  // A
		//BLANCO(1), // Columna en blanco
		RESPUESTA_A(1), // B
		RESPUESTA_B(2), // C
		RESPUESTA_C(3), // D
		RESPUESTA_D(4), //E
		RESPUESTA_CORRECTA(5), // F 
		BLOQUE(6), // G
		AUTOR(7), // H
		PROMOCION(8),  // I
		ANNO_CREACION(9), // J
		OBSERVACIONES(10), // K
		NUMERO_TEST(11), // L
		NUMERO_PREGUNTA(12), // M
		ID(13),  // N
		TEMAS(14),  // O
		REVISADA(15),  // P
		ESTADO(16),  // Q
		REVISOR(17),  // R
		SENTENCIA(18), // S
		NOTAS(19), // T
		NUM_COLUMNAS(20); // Número total de columnas en el excel.

		public int index; // Número de columna del excel que se corresponde con
							// cada campo de una pregunta.

		Campo(int indice) {
			index = indice;
		}
	};
	public static final int NUM_COLUMNAS = 	Campo.NUM_COLUMNAS.index;
	
	private Campo campo;

	private String pregunta;
	// La columna B está en blanco, pero hay que tenerla en cuenta en el índice.
	private String respuesta_a;
	private String respuesta_b;
	private String respuesta_c;
	private String respuesta_d;
	private String respuesta_correcta;
	private List<String> bloques = new ArrayList<String>();
	private String autor;
	private String promocion;
	private String anno_creacion;
	private String observaciones;
	private String numeroTest;
	private String numeroPregunta;
	private String id;
	private List<Integer>  temas = new ArrayList<Integer>();
	private String revisada;
	private String estado;
	private String revisor;
	private String sentencia;
	private String notas;
	
	public PreguntaTest() {
	}

	public PreguntaTest(ArrayList<String> celdas) {
		this.setPregunta(celdas.get(Campo.PREGUNTA.index));
		this.setRespuesta_a(celdas.get(Campo.RESPUESTA_A.index));
		this.setRespuesta_b(celdas.get(Campo.RESPUESTA_B.index));
		this.setRespuesta_c(celdas.get(Campo.RESPUESTA_C.index));
		this.setRespuesta_d(celdas.get(Campo.RESPUESTA_D.index));
		this.setRespuesta_correcta(celdas.get(Campo.RESPUESTA_CORRECTA.index));
		//this.setBloque(celdas.get(Campo.BLOQUE.index));
		this.setAutor(celdas.get(Campo.AUTOR.index));
		this.setPromocion(celdas.get(Campo.PROMOCION.index));
		this.setAnno_creacion(celdas.get(Campo.ANNO_CREACION.index));
		this.setObservaciones(celdas.get(Campo.OBSERVACIONES.index));
		this.setNumeroTest(celdas.get(Campo.NUMERO_TEST.index));
		this.setNumeroPregunta(celdas.get(Campo.NUMERO_PREGUNTA.index));
		this.setId(celdas.get(Campo.ID.index));

		this.setRevisada(celdas.get(Campo.REVISADA.index));
		this.setEstado(celdas.get(Campo.ESTADO.index));
		this.setRevisor(celdas.get(Campo.REVISOR.index));
		this.setSentencia(celdas.get(Campo.SENTENCIA.index));
		this.setNotas(celdas.get(Campo.NOTAS.index));
		
		// this should be the last thing to do.
		this.setTemas(celdas.get(Campo.TEMAS.index));
	}

	@Override
	public String toString() {
		String cadena = "*" + "\n";
		cadena = this.pregunta + "\n";
		cadena = cadena + "A) " + this.respuesta_a + "\n";
		cadena = cadena + "B) " + this.respuesta_b + "\n";
		cadena = cadena + "C) " + this.respuesta_c + "\n";
		cadena = cadena + "D) " + this.respuesta_d + "\n";
		cadena = cadena + "Correcta: " + this.respuesta_correcta + "\n";
		cadena = cadena + "Bloques: " + this.bloques + "\n";
		cadena = cadena + "Autor: " + this.autor + "\n";
		cadena = cadena + "Promoción: " + this.promocion + "\n";
		cadena = cadena + "Año: " + this.anno_creacion + "\n";
		cadena = cadena + "Observaciones: " + this.observaciones + "\n";
		cadena = cadena + "Número test: " + this.numeroTest + "\n";
		cadena = cadena + "Número pregunta: " + this.numeroPregunta + "\n";
		cadena = cadena + "ID: " + this.id + "\n";
		cadena = cadena + "Temas: " + this.temas + "\n";
		cadena = cadena + "Revisada: " + this.revisada + "\n";

		cadena = cadena + "Estado: " + this.estado + "\n";
		cadena = cadena + "Revisor: " + this.revisor + "\n";
		cadena = cadena + "Sentencia: " + this.sentencia + "\n";
		cadena = cadena + "Notas: " + this.notas + "\n";
		return cadena;
	}


	@Override
	public int hashCode() {
		return (id != null) ? (this.getClass().hashCode() + id.hashCode()) : super.hashCode();
	}

	public Campo getCampo() {
		return this.campo;
	}

	public void setCampo(Campo c) {
		this.campo = c;
	}

	public String getPregunta() {
		return pregunta;
	}

	public void setPregunta(String pregunta) {
		this.pregunta = pregunta.trim();
	}

	public String getRespuesta_a() {
		return respuesta_a;
	}

	public void setRespuesta_a(String respuesta_a) {
		this.respuesta_a = respuesta_a.trim();
	}

	public String getRespuesta_b() {
		return respuesta_b;
	}

	public void setRespuesta_b(String respuesta_b) {
		this.respuesta_b = respuesta_b.trim();
	}

	public String getRespuesta_c() {
		return respuesta_c;
	}

	public void setRespuesta_c(String respuesta_c) {
		this.respuesta_c = respuesta_c.trim();
	}

	public String getRespuesta_d() {
		return respuesta_d;
	}

	public void setRespuesta_d(String respuesta_d) {
		this.respuesta_d = respuesta_d.trim();
	}

	public String getRespuesta_correcta() {
		return respuesta_correcta;
	}

	public void setRespuesta_correcta(String respuesta_correcta) {
		this.respuesta_correcta = respuesta_correcta.trim();
	}

	public List<String> getBloques() {
		return bloques;
	}
	
	public String getBloquesStr() {
		String joined = String.join(", ", bloques);
		return joined;
	}
	public String getBloquesStrWithQuotes() {
		String joined = bloques.stream().map((s) -> "'" + s + "'").collect(Collectors.joining(", "));
		return joined;
	}
	
	public void calculaBloques(List<InfoBloque> listaBloques)
	{
		for (Integer t : this.temas) {
			for (InfoBloque b : listaBloques) {
				if (t >= b.getMinPregunta() && t <= b.getMaxPregunta() && !this.bloques.contains(b.getNombreBloque())) {
					this.bloques.add(b.getNombreBloque());
					continue;
				}
			}
		}
	}
	
	
	public void setBloques( List<String> bloques) {
		this.bloques = bloques;
	}

	public String getAutor() {
		return autor;
	}

	public void setAutor(String autor) {
		this.autor = autor.trim();
	}

	public String getPromocion() {
		return promocion;
	}

	public void setPromocion(String promocion) {
		this.promocion = promocion.trim();
	}

	public String getAnno_creacion() {
		return anno_creacion;
	}

	public void setAnno_creacion(String anno_creacion) {
		this.anno_creacion = anno_creacion.trim();
	}

	public String getObservaciones() {
		return observaciones;
	}

	public void setObservaciones(String observaciones) {
		this.observaciones = observaciones.trim();
	}

	public String getNumeroTest() {
		return numeroTest;
	}

	public void setNumeroTest(String numeroTest) {
		this.numeroTest = numeroTest.trim();
	}

	public String getNumeroPregunta() {
		return numeroPregunta;
	}

	public void setNumeroPregunta(String numeroPregunta) {
		this.numeroPregunta = numeroPregunta.trim();
	}

	public String getId() {
		return id;
	}
	public int getNumId() {
		if(id == null || id.trim().isEmpty())
			return -1;
		return Integer.parseInt(id);
	}
	public void setId(String id) {
		this.id = id.trim();
	}

	public List<Integer> getTemas() {
		return temas;
	}
	
	public String getTemasStr() {
		String joined = temas.stream().map(Object::toString).collect(Collectors.joining(", "));
		return joined;
	}
	public String getTemasStrWithQuotes() {
		String joined = temas.stream().map((s) -> "'" + s + "'").collect(Collectors.joining(", "));
		return joined;
	}
	public void setTemas(String temas) {
		String[] temasArr = temas.trim().split("[.,y]");
		for(String t : temasArr)
		{
			try {
				int tema = Integer.parseInt(t.trim());
				this.temas.add(tema);
			} catch (Exception e) {
				if (!this.getSentencia().equalsIgnoreCase("delete"))
					logger.warn("Error al convertir temas " + temas + " a bloques en pregunta " + this.getPregunta());
			}
		}
	}

	public String getRevisada() {
		return revisada;
	}

	public void setRevisada(String revisada) {
		this.revisada = revisada.trim();
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado.trim();
	}

	public String getRevisor() {
		return revisor;
	}

	public void setRevisor(String revisor) {
		this.revisor = revisor.trim();
	}

	public String getSentencia() {
		return sentencia;
	}

	public void setSentencia(String sentencia) {
		this.sentencia = sentencia.trim();
	}


	public String getNotas() {
		return notas;
	}

	public void setNotas(String notas) {
		this.notas = notas.trim();
	}
	
	public String getString(Campo campo) {
		switch (campo)
		{
			case PREGUNTA:
				return this.getPregunta();
			case RESPUESTA_A:
				return this.getRespuesta_a();
			case RESPUESTA_B:
				return this.getRespuesta_b();
			case RESPUESTA_C:
				return this.getRespuesta_c();
			case RESPUESTA_D:
				return this.getRespuesta_d();
			case RESPUESTA_CORRECTA:
				return this.getRespuesta_correcta();
			case BLOQUE:
				return this.getBloquesStr();
			case AUTOR:
				return this.getAutor();
			case PROMOCION:
				return this.getPromocion();
			case ANNO_CREACION:
				return this.getAnno_creacion();
			case OBSERVACIONES:
				return this.getObservaciones();
			case NUMERO_TEST:
				return this.getNumeroTest();
			case NUMERO_PREGUNTA:
				return this.getNumeroPregunta();
			case ID:
				return this.getId();
			case TEMAS:
				return this.getTemasStr();
			case REVISADA:
				return this.getPregunta();
			case ESTADO:
				return this.getRevisada();
			case REVISOR:
				return this.getRevisor();
			case SENTENCIA:
				return this.getSentencia();
			case NOTAS:
				return this.getNotas();
			default:
				return null;
		}
	}
}
