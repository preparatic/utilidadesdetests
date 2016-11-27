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

//  Id pregunta: 883 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l es la definici&oacute;n correcta de hardware?:";
 choices[0]= new Array();
 choices[0][0] = "Componentes s&oacute;lidos y dispositivos de estado de un ordenador";
 choices[0][1] = "Conjunto de programas y datos que procesa el ordenador";
 choices[0][2] = "Componentes f&iacute;sicos y dispositivos de estado s&oacute;lido de un ordenador";
 choices[0][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[0] = choices[0][2];
 units[0] = "47";
 comments[0] = "Id Pregunta: 883. ";


//  Id pregunta: 1049 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  El registro de estados de un procesador:";
 choices[1]= new Array();
 choices[1][0] = "Se almacena en la memoria principal del procesador";
 choices[1][1] = "Almacena en cada momento el estado del procesador";
 choices[1][2] = "Sirve para almacenar las condiciones de realizaci&oacute;n de las operaciones de la ALU";
 choices[1][3] = "Los procesadores actuales no tienen registro de estados";
 answers[1] = choices[1][2];
 units[1] = "47";
 comments[1] = "Id Pregunta: 1049. ";


//  Id pregunta: 8227 AÃ±o de creación de pregunta: 2011-01-01
 questions[2]= "3)  Indique cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[2]= new Array();
 choices[2][0] = "A temperatura ambiente y bajo condiciones normales de atm&oacute;sfera, el valor de la banda de energ&iacute;a denominada GAP es de 1'12 eV para el Silicio y 1'42 eV para el Arseniuro de Galio.";
 choices[2][1] = "Un semiconductor intr&iacute;nseco es aqu&eacute;l que contiene elevadas cantidades de impurezas en comparaci&oacute;n con las cantidades de electrones y huecos generados t&eacute;rmicamente.";
 choices[2][2] = "El nivel de Fermi es el nivel de energ&iacute;a en el cu&aacute;l la probabilidad de ocupaci&oacute;n del mismo por un electr&oacute;n es exactamente 1/2.";
 choices[2][3] = "Un dispositivo bipolar es un dispositivo semiconductor en el que tanto huecos como electrones participan en el proceso de conducci&oacute;n.";
 answers[2] = choices[2][1];
 units[2] = "45";
 comments[2] = "Id Pregunta: 8227. Examen TIC A1 2010";


//  Id pregunta: 9122 AÃ±o de creación de pregunta: 2013-01-01
 questions[3]= "4)  &iquest;Qu&eacute; se necesita para funcionar en un sistema grid?";
 choices[3]= new Array();
 choices[3][0] = "Al menos un ordenador que act&uacute;e como un servidor y que gestione el funcionamiento de los otros sistemas implicados";
 choices[3][1] = "Un mainframe";
 choices[3][2] = "Al menos un sistema Microsoft";
 choices[3][3] = "Todas las respuestas anteriores son v&aacute;lidas";
 answers[3] = choices[3][0];
 units[3] = "45";
 comments[3] = "Id Pregunta: 9122. ";


//  Id pregunta: 9125 AÃ±o de creación de pregunta: 2013-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de bus interno paralelo?";
 choices[4]= new Array();
 choices[4][0] = "ISA";
 choices[4][1] = "HTI";
 choices[4][2] = "PCI";
 choices[4][3] = "AGP";
 answers[4] = choices[4][1];
 units[4] = "47";
 comments[4] = "Id Pregunta: 9125. Examen TIC-A1 2011";


//  Id pregunta: 9142 AÃ±o de creación de pregunta: 2013-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l se considera fase de ejecuci&oacute;n de instrucci&oacute;n en un procesador?";
 choices[5]= new Array();
 choices[5][0] = "Prefetch, fetch, decodificaci&oacute;n, ejecuci&oacute;n, escritura de resultados en memoria principal";
 choices[5][1] = "Fetch, decodificaci&oacute;n, ejecuci&oacute;n, escritura de resultados en memoria ppal";
 choices[5][2] = "Prefetch, fetch, decodificaci&oacute;n, ejecuci&oacute;n, escritura de resultados en memoria principal o en los registros";
 choices[5][3] = "Fetch, ejecuci&oacute;n, escritura de resultados en memoria ppal";
 answers[5] = choices[5][2];
 units[5] = "47";
 comments[5] = "Id Pregunta: 9142. ";


//  Id pregunta: 9664 AÃ±o de creación de pregunta: 2014-01-01
 questions[6]= "7)  Los sistemas multiprocesador:";
 choices[6]= new Array();
 choices[6][0] = "Son sistemas d&eacute;bilmente acoplados.";
 choices[6][1] = "Sus procesadores no dependen unos de otros.";
 choices[6][2] = "Son sistemas fuertemente acoplados.";
 choices[6][3] = "Ninguna de las anteriores.";
 answers[6] = choices[6][2];
 units[6] = "45";
 comments[6] = "Id Pregunta: 9664. ";


//  Id pregunta: 9667 AÃ±o de creación de pregunta: 2014-01-01
 questions[7]= "8)  La segmentaci&oacute;n o pipelining:";
 choices[7]= new Array();
 choices[7][0] = "Es una t&eacute;cnica de solapamiento de instrucciones mediante la divisi&oacute;n de su ejecuci&oacute;n en etapas para simular paralelizaci&oacute;n.";
 choices[7][1] = "Disminuye el tiempo de ejecuci&oacute;n de cada instrucci&oacute;n.";
 choices[7][2] = "Se trata de dividir el c&oacute;digo en fragmentos para distribuirlos por distintos procesadores.";
 choices[7][3] = "Todas  las anteriores.";
 answers[7] = choices[7][0];
 units[7] = "45";
 comments[7] = "Id Pregunta: 9667. ";


//  Id pregunta: 10289 AÃ±o de creación de pregunta: 2014-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes comandos de Solaris 11 NO devuelve informaci&oacute;n relativa a discos?";
 choices[8]= new Array();
 choices[8][0] = "iostat";
 choices[8][1] = "df";
 choices[8][2] = "sar";
 choices[8][3] = "nc";
 answers[8] = choices[8][3];
 units[8] = "48";
 comments[8] = "Id Pregunta: 10289. TIC A2, libre, examen 2013";


//  Id pregunta: 11126 AÃ±o de creación de pregunta: 2015-01-01
 questions[9]= "10)  De acuerdo con la Taxonom&iacute;a de Flynn, como se denominan los sistemas de arquitectura serie de Von Neummann?";
 choices[9]= new Array();
 choices[9][0] = "SISD";
 choices[9][1] = "SIMD";
 choices[9][2] = "MISD";
 choices[9][3] = "MIMD";
 answers[9] = choices[9][0];
 units[9] = "45";
 comments[9] = "Id Pregunta: 11126. ";


