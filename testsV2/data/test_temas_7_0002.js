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

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 998 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  El acr&oacute;nimo XML corresponde a:";
 choices[0]= new Array();
 choices[0][0] = "Extensible Markup Language";
 choices[0][1] = "Extended Markup Language";
 choices[0][2] = "Expressions Markup Language";
 choices[0][3] = "Extension Markup Language";
 answers[0] = choices[0][0];
 units[0] = "69";
 comments[0] = "Id Pregunta: 998. NULL";


//  Id pregunta: 1317 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Respecto a los DTDs es falso que:";
 choices[1]= new Array();
 choices[1][0] = "est&aacute;n escritos en una sintaxis diferente de XML";
 choices[1][1] = "representan la &uacute;nica manera de definir un documento XML, y su ausencia implica que la definici&oacute;n del documento se saca del contexto";
 choices[1][2] = "no son obligatorios, y los documentos XML correctos pero sin DTD se denominan &quot;bien formados&quot;";
 choices[1][3] = "est&aacute;n muy extendidos y existen muchas herramientas y expertos en su utilizaci&oacute;n y desarrollo";
 answers[1] = choices[1][1];
 units[1] = "69";
 comments[1] = "Id Pregunta: 1317. NULL";


//  Id pregunta: 1833 AÃ±o de creación de pregunta: 2006-01-01
 questions[2]= "3)  Se&ntilde;alar la respuesta falsa";
 choices[2]= new Array();
 choices[2][0] = "HTML es un subconjunto de SGML";
 choices[2][1] = "XHTML es un subconjunto de XML";
 choices[2][2] = "XML es una ampliaci&oacute;n de HTML";
 choices[2][3] = "RTF es un subconjunto de SGML";
 answers[2] = choices[2][2];
 units[2] = "69";
 comments[2] = "Id Pregunta: 1833. NULL";


//  Id pregunta: 4830 AÃ±o de creación de pregunta: 2007-01-01
 questions[3]= "4)  En relaci&oacute;n a los lenguajes XML (eXtensible Markup Language) y RDF (Resource Description Framework), &iquest;cu&aacute;l delas siguientes afirmaciones es cierta?";
 choices[3]= new Array();
 choices[3][0] = "XML Schema proporciona soporte para la interoperabilidad sem&aacute;ntica";
 choices[3][1] = "RDF utiliza XML como sintaxis com&uacute;n para el intercambio de metadatos";
 choices[3][2] = "RDF est&aacute; compuesto &uacute;nicamente de propiedades y enunciados";
 choices[3][3] = "XML Schema no tiene tipos predefinidos";
 answers[3] = choices[3][1];
 units[3] = "69";
 comments[3] = "Id Pregunta: 4830. NULL";


//  Id pregunta: 5506 AÃ±o de creación de pregunta: 2003-01-01
 questions[4]= "5)  La sindicaci&oacute;n de contenidos web:";
 choices[4]= new Array();
 choices[4][0] = "Se emplea el lenguaje RSS (Really Simple Sindication)";
 choices[4][1] = "Actualmente se emplea el estandar Atom 1.0";
 choices[4][2] = "Permite recuperar contenido de un sitio web y publicarlo en otro";
 choices[4][3] = "Todas son correctas";
 answers[4] = choices[4][3];
 units[4] = "69";
 comments[4] = "Id Pregunta: 5506. NULL";


//  Id pregunta: 5721 AÃ±o de creación de pregunta: 2009-01-01
 questions[5]= "6)  El XSLT transforma:";
 choices[5]= new Array();
 choices[5][0] = "S&oacute;lo de XML a XML";
 choices[5][1] = "De XML a otro documento";
 choices[5][2] = "S&oacute;lo de XML a HTML";
 choices[5][3] = "De un documento a XML";
 answers[5] = choices[5][1];
 units[5] = "69";
 comments[5] = "Id Pregunta: 5721. MAP 2008 A1";


//  Id pregunta: 10469 AÃ±o de creación de pregunta: 2014-01-01
 questions[6]= "7)  Respecto a HTML5, indique la respuesta incorrecta:";
 choices[6]= new Array();
 choices[6][0] = "Existe una API de geolocalizaci&oacute;n.";
 choices[6][1] = "Permite abrir sockets para una comunicaci&oacute;n bidireccional, full duplex con baja latencia y que se basa en el protocolo TCP.";
 choices[6][2] = "No neceita Flash para ver v&iacute;deos.";
 choices[6][3] = "Los Web Workers permiten la ejecuci&oacute;n de un &uacute;nico subproceso.";
 answers[6] = choices[6][3];
 units[6] = "69";
 comments[6] = "Id Pregunta: 10469. NULL";


//  Id pregunta: 10502 AÃ±o de creación de pregunta: 2014-01-01
 questions[7]= "8)  &iquest;Quien es considerado el creador del Lenguaje HTML?";
 choices[7]= new Array();
 choices[7][0] = "Dan Connolly";
 choices[7][1] = "Hank Thomas-Lee";
 choices[7][2] = "Conway Berners-Lee";
 choices[7][3] = "Tim Berners-Lee";
 answers[7] = choices[7][3];
 units[7] = "69";
 comments[7] = "Id Pregunta: 10502. NULL";


//  Id pregunta: 10905 AÃ±o de creación de pregunta: 2015-01-01
 questions[8]= "9)  El lenguaje de consulta sobre RDF que permite hacer b&uacute;squedas sobre los recursos de la Web Sem&aacute;ntica utilizando distintas fuentes de datos es:";
 choices[8]= new Array();
 choices[8][0] = "OWL";
 choices[8][1] = "RQUERY";
 choices[8][2] = "JQUERY";
 choices[8][3] = "SPARQL";
 answers[8] = choices[8][3];
 units[8] = "69, 22";
 comments[8] = "Id Pregunta: 10905. Examen GSI 2014";


//  Id pregunta: 11624 AÃ±o de creación de pregunta: 2015-01-01
 questions[9]= "10)  Se&ntilde;ale la respuesta incorrecta con respecto al procesado de documentos XML:";
 choices[9]= new Array();
 choices[9][0] = "Los parsers DOM consumen mucha memoria.";
 choices[9][1] = "Los parsers DOM facilitan el acceso a toda la informaci&oacute;n del documento XML.";
 choices[9][2] = "Los parsers SAX permiten la modificaci&oacute;n de datos en memoria.";
 choices[9][3] = "Para los parsers SAX el tama&ntilde;o del documento XML es irrelevante.";
 answers[9] = choices[9][2];
 units[9] = "69";
 comments[9] = "Id Pregunta: 11624. ";


