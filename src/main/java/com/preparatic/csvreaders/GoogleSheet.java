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
package com.preparatic.csvreaders;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.client.util.store.FileDataStoreFactory;
import com.google.api.services.sheets.v4.Sheets;
import com.google.api.services.sheets.v4.SheetsScopes;
import com.google.api.services.sheets.v4.model.ValueRange;
import com.preparatic.ConfigProperties;
import com.preparatic.ReadGoogleSheet;
import com.preparatic.entidades.InfoBloque;
import com.preparatic.entidades.InfoTema;
import com.preparatic.entidades.InfoTematica;
import com.preparatic.entidades.PreguntaTest;

public class GoogleSheet implements IExcel {
	private static Logger logger = LogManager.getLogger(InfoTema.class);

	/** Application name. */
	private static final String APPLICATION_NAME = "Google Sheets API Java Quickstart";

	/** Directory to store user credentials for this application. */
	private static final java.io.File DATA_STORE_DIR = new java.io.File(System.getProperty("user.home"),
			".credentials/sheets.googleapis.com-java-quickstart");

	/** Global instance of the {@link FileDataStoreFactory}. */
	private static FileDataStoreFactory DATA_STORE_FACTORY;

	/** Global instance of the JSON factory. */
	private static final JsonFactory JSON_FACTORY = JacksonFactory.getDefaultInstance();

	/** Global instance of the HTTP transport. */
	private static HttpTransport HTTP_TRANSPORT;

	private Sheets service;
	private String spreadsheetId, spreadsheetMetaId;
	private String range, bloqueRange, temaRange, tematicaRange;
	private ArrayList<PreguntaTest> listaPreguntas = null;
	private ArrayList<InfoBloque> listaBloques = null;
	private ArrayList<InfoTema> listaTemas = null;
	private ArrayList<InfoTematica> listaTematicas = null;

	/**
	 * Global instance of the scopes required by this quickstart.
	 *
	 * If modifying these scopes, delete your previously saved credentials at
	 * ~/.credentials/sheets.googleapis.com-java-quickstart
	 */
	private static final List<String> SCOPES = Arrays.asList(SheetsScopes.SPREADSHEETS_READONLY);

	static {
		try {
			HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
			DATA_STORE_FACTORY = new FileDataStoreFactory(DATA_STORE_DIR);
		} catch (Throwable t) {
			t.printStackTrace();
			System.exit(1);
		}
	}

	/**
	 * Creates an authorized Credential object.
	 * 
	 * @return an authorized Credential object.
	 * @throws IOException
	 */
	private static Credential authorize() throws IOException {
		// Load client secrets.
		InputStream in = ReadGoogleSheet.class.getResourceAsStream("/client_secret.json");
		GoogleClientSecrets clientSecrets = GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(in));

		// Build flow and trigger user authorization request.
		GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow.Builder(HTTP_TRANSPORT, JSON_FACTORY,
				clientSecrets, SCOPES).setDataStoreFactory(DATA_STORE_FACTORY).setAccessType("offline").build();
		Credential credential = new AuthorizationCodeInstalledApp(flow, new LocalServerReceiver()).authorize("user");
		System.out.println("Credentials saved to " + DATA_STORE_DIR.getAbsolutePath());
		return credential;
	}

	/**
	 * Build and return an authorized Sheets API client service.
	 * 
	 * @return an authorized Sheets API client service
	 * @throws IOException
	 */
	private static Sheets getSheetsService() throws IOException {
		Credential credential = authorize();
		return new Sheets.Builder(HTTP_TRANSPORT, JSON_FACTORY, credential).setApplicationName(APPLICATION_NAME)
				.build();
	}

	private void recorrerExcelPreguntas() {
		this.listaPreguntas = new ArrayList<PreguntaTest>();
		ValueRange response;
		try {
			String[] spreadsheets = spreadsheetId.split(" ");
			String[] ranges = range.split(" ");
			for (int i = 0; i < spreadsheets.length; i++){
				response = service.spreadsheets().values().get(spreadsheets[i], ranges[i]).execute();
				List<List<Object>> values = response.getValues();
				if (values == null || values.size() == 0) {
					logger.warn("No data found.");
				} else {
					int line = 0;
					for (List row : values) {
						line++;
						if (row.isEmpty() || row.get(0).toString().isEmpty()) {
							logger.warn(String.format("Empty row at position %d, row= %s\n", line, row));
							continue;
						}
						// Print question and line number
						//System.out.printf("Question number %d: %s\n", line, row.get(0));
						ArrayList<String> celdasPregunta = new ArrayList<String>();
						for (int columna = 0; columna < PreguntaTest.NUM_COLUMNAS; columna++) {
							// If the cell is missing from the file, generate a
							// blank one
							if (row.size() <= columna || row.get(columna).toString().isEmpty())
								celdasPregunta.add("");
							else
								celdasPregunta.add(row.get(columna).toString());
						}
						PreguntaTest pregunta = new PreguntaTest(celdasPregunta);
						pregunta.calculaBloques(this.getListaBloques());
						this.listaPreguntas.add(pregunta);
					}
				}
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	private void recorrerExcelMetainfo() {
		
		ValueRange response;
		
		this.listaBloques = new ArrayList<InfoBloque>();
		try {
			response = service.spreadsheets().values().get(spreadsheetMetaId, bloqueRange).execute();
			List<List<Object>> values = response.getValues();
			if (values == null || values.size() == 0) {
				System.out.println("No data found reading bloques.");
			} else {
				int line = 0;
				for (List row : values) {
					line++;
					if (row.isEmpty() || row.get(0).toString().isEmpty()) {
						logger.warn(String.format("Empty row at position %d, row= %s\n", line, row));
						continue;
					}
					// Print info and line number
					//System.out.printf("Question number %d: %s\n", line, row.get(0));
					ArrayList<String> celdas = new ArrayList<String>();
					for (int columna = 0; columna < InfoBloque.NUM_COLUMNAS; columna++) {
						// If the cell is missing from the file, generate a
						// blank one
						if (row.size() <= columna || row.get(columna).toString().isEmpty())
							celdas.add("");
						else
							celdas.add(row.get(columna).toString());
					}
					this.listaBloques.add(new InfoBloque(celdas));
				}
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		this.listaTemas = new ArrayList<InfoTema>();
		try {
			response = service.spreadsheets().values().get(spreadsheetMetaId, temaRange).execute();
			List<List<Object>> values = response.getValues();
			if (values == null || values.size() == 0) {
				logger.warn("No data found reading temas.");
			} else {
				int line = 0;
				for (List row : values) {
					line++;
					if (row.isEmpty() || row.get(0).toString().isEmpty()) {
						logger.warn(String.format("Empty row at position %d, row= %s\n", line, row));
						continue;
					}
					// Print info and line number
					//System.out.printf("Question number %d: %s\n", line, row.get(0));
					ArrayList<String> celdas = new ArrayList<String>();
					for (int columna = 0; columna < InfoTema.NUM_COLUMNAS; columna++) {
						// If the cell is missing from the file, generate a
						// blank one
						if (row.size() <= columna || row.get(columna).toString().isEmpty())
							celdas.add("");
						else
							celdas.add(row.get(columna).toString());
					}
					this.listaTemas.add(new InfoTema(celdas));
				}
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		this.listaTematicas = new ArrayList<InfoTematica>();
		try {
			response = service.spreadsheets().values().get(spreadsheetMetaId, tematicaRange).execute();
			List<List<Object>> values = response.getValues();
			if (values == null || values.size() == 0) {
				logger.warn("No data found reading tematica.");
			} else {
				int line = 0;
				for (List row : values) {
					line++;
					if (row.isEmpty() || row.get(0).toString().isEmpty()) {
						logger.warn(String.format("Empty row at position %d, row= %s\n", line, row));
						continue;
					}
					// Print info and line number
					//System.out.printf("Question number %d: %s\n", line, row.get(0));
					ArrayList<String> celdas = new ArrayList<String>();
					for (int columna = 0; columna < InfoTematica.NUM_COLUMNAS; columna++) {
						// If the cell is missing from the file, generate a
						// blank one
						if (row.size() <= columna || row.get(columna).toString().isEmpty())
							celdas.add("");
						else
							celdas.add(row.get(columna).toString());
					}
					this.listaTematicas.add(new InfoTematica(celdas));
				}
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void abrirExcel() throws IOException {
		// Build a new authorized API client service.
		service = getSheetsService();
		// Read the data in a sample spreadsheet:
		// https://docs.google.com/spreadsheets/d/1ut0inXQhUA07-5ifwy41gw81KasfOpPf-dRuNvx7KfU/edit
		spreadsheetId = ConfigProperties.getProperty("input.spreadsheetId");// "1ut0inXQhUA07-5ifwy41gw81KasfOpPf-dRuNvx7KfU";
		range = ConfigProperties.getProperty("input.spreadsheetRange"); // "preguntasenbd-20161105-09h12.csv!A2:E";

		spreadsheetMetaId = ConfigProperties.getProperty("input.spreadsheetMetaId"); 
		bloqueRange = ConfigProperties.getProperty("input.spreadsheetBloqueRange");  
		temaRange = ConfigProperties.getProperty("input.spreadsheetTemaRange");  
		tematicaRange = ConfigProperties.getProperty("input.spreadsheetTematicaRange");  

	}

	public ArrayList<PreguntaTest> getListaPreguntas() {
		if (listaPreguntas == null)
			recorrerExcelPreguntas();
		return listaPreguntas;
	}
	
	public ArrayList<InfoBloque> getListaBloques() {
		if (listaBloques == null)
			recorrerExcelMetainfo();
		return listaBloques;
	}
	
	public ArrayList<InfoTema> getListaTemas() {
		if (listaTemas == null)
			recorrerExcelMetainfo();
		return listaTemas;
	}
	
	public ArrayList<InfoTematica> getListaTematicas() {
		if (listaTematicas == null)
			recorrerExcelMetainfo();
		return listaTematicas;
	}
}
