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

//  Id pregunta: 470 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Una de las caracter&iacute;sticas principales de los paquetes de planificaci&oacute;n de recursos de empresas (ERP) es:";
 choices[0]= new Array();
 choices[0][0] = "Los datos a tratar por esos paquetes no pueden ser almacenados en sistemas de bases de datos de car&aacute;cter general.";
 choices[0][1] = "Ser parametrizables, lo que les da gran flexibilidad y la posibilidad de ser aplicados a tipos de empresas muy diferentes.";
 choices[0][2] = "No ser parametrizables, por ser dise&ntilde;ados especialmente para cada tipo de empresas.";
 choices[0][3] = "Utilizar la tecnolog&iacute;a de workflow como soluci&oacute;n a la gesti&oacute;n integral de una empresa.";
 answers[0] = choices[0][1];
 units[0] = "65";
 comments[0] = "Id Pregunta: 470. ";


//  Id pregunta: 859 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes conceptos no es caracter&iacute;stico de los sistemas expertos?:";
 choices[1]= new Array();
 choices[1][0] = "Base de conocimiento";
 choices[1][1] = "Encadenamiento de reglas";
 choices[1][2] = "Motor de inferencia";
 choices[1][3] = "Proceso algor&iacute;tmico";
 answers[1] = choices[1][3];
 units[1] = "64";
 comments[1] = "Id Pregunta: 859. ";


//  Id pregunta: 925 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Qu&eacute; es la base de conocimientos de un sistema experto?:";
 choices[2]= new Array();
 choices[2][0] = "La base de datos que usa el sistema experto";
 choices[2][1] = "El conjunto de reglas almacenadas sobre un tema particular";
 choices[2][2] = "La operaci&oacute;n de obtener informaci&oacute;n del experto humano";
 choices[2][3] = "El programa b&aacute;sico que gestiona el sistema experto";
 answers[2] = choices[2][1];
 units[2] = "64";
 comments[2] = "Id Pregunta: 925. ";


//  Id pregunta: 1379 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Un almac&eacute;n de datos o &quot;data warehouse&quot;:";
 choices[3]= new Array();
 choices[3][0] = "Integra datos de diferentes sistemas de informaci&oacute;n de la organizaci&oacute;n para permitir su an&aacute;lisis posterior por la Direcci&oacute;n.";
 choices[3][1] = "Recopila datos de diferentes &quot;data marts&quot; para permitir su an&aacute;lisis por la Direcci&oacute;n mediante herramientas OLAP.";
 choices[3][2] = "Integra todas las bases de datos que existen en una organizaci&oacute;n para su consulta por la Direcci&oacute;n.";
 choices[3][3] = "Es una base de datos que contiene metainformaci&oacute;n sobre las bases de datos que existen en la organizaci&oacute;n.";
 answers[3] = choices[3][0];
 units[3] = "68";
 comments[3] = "Id Pregunta: 1379. ";


//  Id pregunta: 1605 AÃ±o de creación de pregunta: 2003-01-01
 questions[4]= "5)  Gnutella es un sistema Peer-to-Peer que:";
 choices[4]= new Array();
 choices[4][0] = "Tiene una arquitectura jerarquizada";
 choices[4][1] = "Es tambi&eacute;n un protocolo que consta de cuatro tipos de mensajes";
 choices[4][2] = "Permite el intercambio no centralizado de recetas de cocina.";
 choices[4][3] = "Mantiene una base de datos centralizada que ofrece a sus participantes";
 answers[4] = choices[4][2];
 units[4] = "62";
 comments[4] = "Id Pregunta: 1605. ";


//  Id pregunta: 4839 AÃ±o de creación de pregunta: 2007-01-01
 questions[5]= "6)  En relaci&oacute;n con las licencias de software libre, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[5]= new Array();
 choices[5][0] = "La licencia GPL (General Public License) de software libre obliga a publicar las modificaciones realizadassobre el software";
 choices[5][1] = "En un producto distribuido bajo licencia GPL es obligatorio incluir un fichero que contenga &uacute;nicamente lost&eacute;rminos concretos de la licencia y un aviso de que los derechos de copia son establecidos por el autor delproducto";
 choices[5][2] = "La licencia LGPL (Lesser General Public License) permite la inclusi&oacute;n del software que ampara enprogramas distribuidos bajo licencia no GPL";
 choices[5][3] = "La licencia LGPL no es compatible con la definici&oacute;n del software distribuido bajo el tipo licencia &quot;Copyleft&quot;";
 answers[5] = choices[5][2];
 units[5] = "61";
 comments[5] = "Id Pregunta: 4839. ";


//  Id pregunta: 5500 AÃ±o de creación de pregunta: 2003-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no corresponde a la tecnolog&iacute;a de procedimiento anal&iacute;tico en l&iacute;nea (OLAP)?";
 choices[6]= new Array();
 choices[6][0] = "Proporciona respuestas r&aacute;pidas a consultas anal&iacute;ticas complejas e iterativas.";
 choices[6][1] = "Utiliza modelos de datos multidimensionales.";
 choices[6][2] = "Recuperan un dato individual con un alto rendimiento.";
 choices[6][3] = "Ofrece ventajas sobre las BBDD Relacionales a la hora de trabajar sobre datos agregados.";
 answers[6] = choices[6][2];
 units[6] = "68";
 comments[6] = "Id Pregunta: 5500. ";


//  Id pregunta: 8344 AÃ±o de creación de pregunta: 2011-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes estructuras de datos requiere m&aacute;s capacidad de almacenamiento de informaci&oacute;n?";
 choices[7]= new Array();
 choices[7][0] = "&Aacute;rbol Binario.";
 choices[7][1] = "Lista.";
 choices[7][2] = "Lista enlazada.";
 choices[7][3] = "&Aacute;rbol-B.";
 answers[7] = choices[7][3];
 units[7] = "64";
 comments[7] = "Id Pregunta: 8344. Examen TIC A2 2010";


//  Id pregunta: 8455 AÃ±o de creación de pregunta: 2011-01-01
 questions[8]= "9)  En los GIS, el sistema UTM:";
 choices[8]= new Array();
 choices[8][0] = "Asocia cada elemento a una clave de zona.";
 choices[8][1] = "Proyecta el globo terr&aacute;queo sobre un cilindro.";
 choices[8][2] = "Es un est&aacute;ndar universal para intercambio de datos geogr&aacute;ficos.";
 choices[8][3] = "Ninguna de las anteriores.";
 answers[8] = choices[8][1];
 units[8] = "67";
 comments[8] = "Id Pregunta: 8455. Analista Ayto. Madrid 2010";


//  Id pregunta: 8962 AÃ±o de creación de pregunta: 2011-01-01
 questions[9]= "10)  En los Esquemas de copo de nieve:";
 choices[9]= new Array();
 choices[9][0] = "Existe redundancia.";
 choices[9][1] = "No se ahorra espacio.";
 choices[9][2] = "No existe una tabla de hechos central.";
 choices[9][3] = "Las tablas est&aacute;n normalizadas.";
 answers[9] = choices[9][3];
 units[9] = "68";
 comments[9] = "Id Pregunta: 8962. ";


