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

//  Id pregunta: 1949 AÃ±o de creación de pregunta: 2006-01-01
 questions[0]= "1)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones sobre el paquete javax.microedition.lcdui de J2ME es cierta";
 choices[0]= new Array();
 choices[0][0] = "Es un subconjunto del paquete Swing de J2SE";
 choices[0][1] = "Define las aplicaciones MIDP y su comportamiento con respecto al entorno de ejecuci&oacute;n";
 choices[0][2] = "Proporciona clases asociadas a la gesti&oacute;n del ciclo de vida de las MIDLETS";
 choices[0][3] = "Proporciona clases para el desarrollo de elementos gr&aacute;ficos de la API MIDP para entornos m&oacute;viles";
 answers[0] = choices[0][3];
 units[0] = "60";
 comments[0] = "Id Pregunta: 1949. NULL";


//  Id pregunta: 1953 AÃ±o de creación de pregunta: 2006-01-01
 questions[1]= "2)  En relaci&oacute;n al lenguaje Java, la clase THROWABLE tiene dos subclases:";
 choices[1]= new Array();
 choices[1][0] = "Error y Exception";
 choices[1][1] = "Error y Catch";
 choices[1][2] = "Throw y Finally";
 choices[1][3] = "Error y Throw";
 answers[1] = choices[1][0];
 units[1] = "60";
 comments[1] = "Id Pregunta: 1953. NULL";


//  Id pregunta: 3569 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  En una arquitectura de tres capas la manipulaci&oacute;n de los datos corresponde a la capa de:";
 choices[2]= new Array();
 choices[2][0] = "Presentaci&oacute;n";
 choices[2][1] = "Aplicaci&oacute;n";
 choices[2][2] = "Datos";
 choices[2][3] = "En realidad las tres capas manipulan los datos";
 answers[2] = choices[2][2];
 units[2] = "114";
 comments[2] = "Id Pregunta: 3569. ";


//  Id pregunta: 4128 AÃ±o de creación de pregunta: 2006-01-01
 questions[3]= "4)  Lenguaje utilizado para describir los servicios web ofrecidos a los usuarios";
 choices[3]= new Array();
 choices[3][0] = "XML";
 choices[3][1] = "Xerces";
 choices[3][2] = "UDDI";
 choices[3][3] = "WSDL";
 answers[3] = choices[3][3];
 units[3] = "112,51";
 comments[3] = "Id Pregunta: 4128. ";


//  Id pregunta: 5642 AÃ±o de creación de pregunta: 2003-01-01
 questions[4]= "5)  Se&ntilde;ale cu&aacute;l de los siguientes es el protocolo utilizado para el registro y publicaci&oacute;n de servicios web:";
 choices[4]= new Array();
 choices[4][0] = "SOAP";
 choices[4][1] = "UDDI";
 choices[4][2] = "WSDL";
 choices[4][3] = "UDIT";
 answers[4] = choices[4][1];
 units[4] = "51";
 comments[4] = "Id Pregunta: 5642. NULL";


//  Id pregunta: 5897 AÃ±o de creación de pregunta: 2009-01-01
 questions[5]= "6)  &iquest;Qu&eacute; tecnolog&iacute;a de las siguientes es m&aacute;s adecuada para generar contenido HTML din&aacute;mico en una aplicaci&oacute;n Java EE?";
 choices[5]= new Array();
 choices[5][0] = "Servlets";
 choices[5][1] = "JSP";
 choices[5][2] = "JNI";
 choices[5][3] = "JAXP";
 answers[5] = choices[5][1];
 units[5] = "116";
 comments[5] = "Id Pregunta: 5897. ";


//  Id pregunta: 6118 AÃ±o de creación de pregunta: 2010-01-01
 questions[6]= "7)  Con respecto a BPEL (Business Process Execution Language):";
 choices[6]= new Array();
 choices[6][0] = "Es un lenguaje de coreogr&aacute;fico, no de orquestaci&oacute;n.";
 choices[6][1] = "Es un lenguaje de orquestaci&oacute;n, no un lenguaje coreogr&aacute;fico.";
 choices[6][2] = "Fue creado por WfMC.";
 choices[6][3] = "Es un lenguaje de orquestaci&oacute;n y coreogr&aacute;fico creado por OASIS.";
 answers[6] = choices[6][1];
 units[6] = "51";
 comments[6] = "Id Pregunta: 6118. NULL";


//  Id pregunta: 8930 AÃ±o de creación de pregunta: 2011-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes archivos no utiliza el formato de archivo ZIP?";
 choices[7]= new Array();
 choices[7][0] = "WAR";
 choices[7][1] = "EAR";
 choices[7][2] = "JAR";
 choices[7][3] = "Todos los anteriores lo usan";
 answers[7] = choices[7][3];
 units[7] = "116";
 comments[7] = "Id Pregunta: 8930. ";


//  Id pregunta: 9500 AÃ±o de creación de pregunta: 2013-01-01
 questions[8]= "9)  Indica la afirmaci&oacute;n verdadera con respecto a los controles ActiveX:";
 choices[8]= new Array();
 choices[8][0] = "Permiten que los componentes software interact&uacute;en entre s&iacute; en un entorno de red, independientemente del lenguaje en el que han sido programados";
 choices[8][1] = "Se pueden escribir en Java, C++, VB, etc";
 choices[8][2] = "Internet Explorer soporta ActiveX de forma nativa";
 choices[8][3] = "Todas las anteriores son ciertas";
 answers[8] = choices[8][3];
 units[8] = "114";
 comments[8] = "Id Pregunta: 9500. NULL";


//  Id pregunta: 9502 AÃ±o de creación de pregunta: 2013-01-01
 questions[9]= "10)  Cosmoplayer de Platinum:";
 choices[9]= new Array();
 choices[9][0] = "Es un plugin que reproduce sonidos";
 choices[9][1] = "Es un plugin que reproduce pel&iacute;culas";
 choices[9][2] = "Es un plugin que reproduce documentos VRML (formato de realidad virtual)";
 choices[9][3] = "Ninguna de las anteriores es correcta";
 answers[9] = choices[9][2];
 units[9] = "114";
 comments[9] = "Id Pregunta: 9502. NULL";


//  Id pregunta: 9510 AÃ±o de creación de pregunta: 2013-01-01
 questions[10]= "11)  El lenguaje Java es un lenguaje:";
 choices[10]= new Array();
 choices[10][0] = "De herencia simple";
 choices[10][1] = "De herencia m&uacute;ltiple";
 choices[10][2] = "Que no permite la herencia";
 choices[10][3] = "Todas las anteriores son falsas";
 answers[10] = choices[10][0];
 units[10] = "116";
 comments[10] = "Id Pregunta: 9510. NULL";


//  Id pregunta: 9651 AÃ±o de creación de pregunta: 2014-01-01
 questions[11]= "12)  El c&oacute;digo intermedio en una compilaci&oacute;n .NET actualmente se llama:";
 choices[11]= new Array();
 choices[11][0] = "MSIL";
 choices[11][1] = "CIL";
 choices[11][2] = "CLS";
 choices[11][3] = "Bytecode";
 answers[11] = choices[11][1];
 units[11] = "115";
 comments[11] = "Id Pregunta: 9651. Antes se llamaba MSIL, ahora se llama CIL (Common Intermediate Language)";


//  Id pregunta: 10026 AÃ±o de creación de pregunta: 2014-01-01
 questions[12]= "13)  El Entity Framework es:";
 choices[12]= new Array();
 choices[12][0] = "Un framework ORM (object-relational mapper) desarrollado por Microsoft e integrado en la plataforma .NET.";
 choices[12][1] = "Una utilidad que permite identificar las funcionalidades de un sistema inform&aacute;tico.";
 choices[12][2] = "Una herramienta de planificaci&oacute;n y gesti&oacute;n del software desarrollado por Microsoft.";
 choices[12][3] = "Un framework orientado a la realizaci&oacute;n de aplicaciones web implementado por Microsoft que respecta el modelo vista controlador.";
 answers[12] = choices[12][0];
 units[12] = "59";
 comments[12] = "Id Pregunta: 10026. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10231 AÃ±o de creación de pregunta: 2014-01-01
 questions[13]= "14)  Un servlet encuentra una excepci&oacute;n mientras procesa una petici&oacute;n. &iquest;Qu&eacute; m&eacute;todo usar&aacute;s para enviar una respuesta de error al navegador?:";
 choices[13]= new Array();
 choices[13][0] = "sendError(int errorCode) de HttpServlet";
 choices[13][1] = "sendError(int errorCode) de HttpServletRequest";
 choices[13][2] = "sendError(int errorCode) de HttpServletResponse";
 choices[13][3] = "sendError(String errorMsg) de HttpServletRequest";
 answers[13] = choices[13][2];
 units[13] = "116";
 comments[13] = "Id Pregunta: 10231. NULL";


//  Id pregunta: 11216 AÃ±o de creación de pregunta: 2015-01-01
 questions[14]= "15)  El Java Plug-in:";
 choices[14]= new Array();
 choices[14][0] = " Dispone de un panel que permite configurar ciertos aspectos de seguridad y de gesti&oacute;n de certificados, entre otros.";
 choices[14][1] = "Sirve de puente entre los navegadores y los distintos entornos de ejecuci&oacute;n de java (JRE) que se hayan instalado en la m&aacute;quina cliente.";
 choices[14][2] = "Se incluye dentro del JRE.";
 choices[14][3] = "Todas las respuestas son verdaderas.";
 answers[14] = choices[14][3];
 units[14] = "60";
 comments[14] = "Id Pregunta: 11216. ";


//  Id pregunta: 11224 AÃ±o de creación de pregunta: 2015-01-01
 questions[15]= "16)  En ADO.NET:";
 choices[15]= new Array();
 choices[15][0] = "Cualquier fuente de datos debe ser convertida a XML para ser accesible por Dataset";
 choices[15][1] = "DataReader proporciona un puente entre el objeto DataSet y el origen de datos.";
 choices[15][2] = "El DataSet contiene una colecci&oacute;n de uno o m&aacute;s objetos DataTable, formados por filas y columnas de datos pero sin incluir informaci&oacute;n de restricciones ni claves externas.";
 choices[15][3] = "ADO.NET Entity es un tipo de framework ORM.";
 answers[15] = choices[15][3];
 units[15] = "59";
 comments[15] = "Id Pregunta: 11224. ";


