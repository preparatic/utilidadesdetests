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

//  Id pregunta: 1277 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Los operadores fundamentales del &aacute;lgebra relacional utilizada en los lenguajes relacionales de los SGBDR:";
 choices[0]= new Array();
 choices[0][0] = "Pueden combinarse para dar lugar a otros";
 choices[0][1] = "Permiten obtener cualquier subconjunto de los datos contenidos en una base de datos";
 choices[0][2] = "Son cinco: selecci&oacute;n, proyecci&oacute;n, uni&oacute;n, diferencia y producto cartesiano";
 choices[0][3] = "Todas las anteriores respuestas son correctas";
 answers[0] = choices[0][3];
 units[0] = "58";
 comments[0] = "Id Pregunta: 1277. ";


//  Id pregunta: 1829 AÃ±o de creación de pregunta: 2006-01-01
 questions[1]= "2)  &iquest;Con cu&aacute;l de las siguientes categor&iacute;as de software est&aacute; m&aacute;s relacionado el Business Intelligence?";
 choices[1]= new Array();
 choices[1][0] = "ERP.";
 choices[1][1] = "Datawarehouse y OLAP.";
 choices[1][2] = "Document Management y Content Management.";
 choices[1][3] = "SCM.";
 answers[1] = choices[1][1];
 units[1] = "68";
 comments[1] = "Id Pregunta: 1829. ";


//  Id pregunta: 1844 AÃ±o de creación de pregunta: 2006-01-01
 questions[2]= "3)  Indique la respuesta falsa en relaci&oacute;n a las ventajas aportadas por una herramienta de Workflow:";
 choices[2]= new Array();
 choices[2][0] = "Incremento de la productividad";
 choices[2][1] = "Monitorizaci&oacute;n del estado de cualquier proceso";
 choices[2][2] = "Reducci&oacute;n de los tiempos muertos";
 choices[2][3] = "Todas las anteriores son ciertas";
 answers[2] = choices[2][3];
 units[2] = "71";
 comments[2] = "Id Pregunta: 1844. ";


//  Id pregunta: 2277 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  El Lenguaje de Definici&oacute;n de Datos (LDD) describe:";
 choices[3]= new Array();
 choices[3][0] = "Las propiedades din&aacute;micas de las entidades";
 choices[3][1] = "Las propiedades est&aacute;ticas de las entidades";
 choices[3][2] = "Los dos tipos de propiedades, es indiferente";
 choices[3][3] = "No define propiedades, define comportamientos";
 answers[3] = choices[3][1];
 units[3] = "57";
 comments[3] = "Id Pregunta: 2277. ";


//  Id pregunta: 4325 AÃ±o de creación de pregunta: 2007-01-01
 questions[4]= "5)  Entre las capacidades que deben ser consideradas por el Administrador de una base de datos para evaluar la seguridad e integridad de los datos de un SGBD, no se encuentra...";
 choices[4]= new Array();
 choices[4][0] = "Control de concurrencia";
 choices[4][1] = "Control de herencia.";
 choices[4][2] = "Control de acceso.";
 choices[4][3] = "Las facilidades de cifrado.";
 answers[4] = choices[4][1];
 units[4] = "26,57";
 comments[4] = "Id Pregunta: 4325. ";


//  Id pregunta: 4810 AÃ±o de creación de pregunta: 2007-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l es la Forma Normal (FN) m&aacute;s avanzada en la que se encuentra la relaci&oacute;n R( {A,B,C,D}, {A--&gt;B; B--&gt;C; C--&gt;D} ) ?";
 choices[5]= new Array();
 choices[5][0] = "Primera FN";
 choices[5][1] = "Segunda FN";
 choices[5][2] = "Tercera FN";
 choices[5][3] = "FNBC (Forma Normal de Boyce-Codd)";
 answers[5] = choices[5][1];
 units[5] = "57";
 comments[5] = "Id Pregunta: 4810. ";


//  Id pregunta: 4916 AÃ±o de creación de pregunta: 2003-01-01
 questions[6]= "7)  Se&ntilde;ale cu&aacute;l de los siguientes t&eacute;rminos NO constituye un estandar de interface de acceso a bases de datos:";
 choices[6]= new Array();
 choices[6][0] = "ODBC (Open Database Connectivity).";
 choices[6][1] = "RDO (Remote Data Objects.";
 choices[6][2] = "DMBS (DataBase Management System).";
 choices[6][3] = "OLE DB (Object Linking and Embedding for Databases).";
 answers[6] = choices[6][2];
 units[6] = "57";
 comments[6] = "Id Pregunta: 4916. Examen TIC B 2007";


//  Id pregunta: 5780 AÃ±o de creación de pregunta: 2009-01-01
 questions[7]= "8)  Se&ntilde;ale c&oacute;mo se denomina el conjunto de reglas que deben de seguir los lenguajes de programaci&oacute;n para que sean compatibles con .NET se denomina:";
 choices[7]= new Array();
 choices[7][0] = "CLS";
 choices[7][1] = "MSIL";
 choices[7][2] = "Bytecode";
 choices[7][3] = "JIT";
 answers[7] = choices[7][0];
 units[7] = "59";
 comments[7] = "Id Pregunta: 5780. MAP 2008 A2";


//  Id pregunta: 6181 AÃ±o de creación de pregunta: 2010-01-01
 questions[8]= "9)  Indique la afirmaci&oacute;n verdadera";
 choices[8]= new Array();
 choices[8][0] = "El resultado de una modelizaci&oacute;n de procesos en BPMN debe ser expresado en BPML, BPEL o XPDL.";
 choices[8][1] = "El resultado de una modelizaci&oacute;n de procesos en BPML debe ser expresado en BPMN, BPEL o XPDL.";
 choices[8][2] = "El resultado de una modelizaci&oacute;n de procesos en BPEL debe ser expresado en BPML, BPMN o XPDL.";
 choices[8][3] = "El resultado de una modelizaci&oacute;n de procesos en XPDL debe ser expresado en BPML, BPEL o BPMN.";
 answers[8] = choices[8][0];
 units[8] = "71";
 comments[8] = "Id Pregunta: 6181. ";


//  Id pregunta: 6247 AÃ±o de creación de pregunta: 2010-01-01
 questions[9]= "10)  &iquest;Qu&eacute; m&oacute;dulo de Apache se incluye para aportar seguridad a Axis2?";
 choices[9]= new Array();
 choices[9][0] = "My Sql";
 choices[9][1] = "Php";
 choices[9][2] = "Rampart";
 choices[9][3] = "Addressing";
 answers[9] = choices[9][2];
 units[9] = "60";
 comments[9] = "Id Pregunta: 6247. TICB-2009, bloque desarrollo";


//  Id pregunta: 6326 AÃ±o de creación de pregunta: 2010-01-01
 questions[10]= "11)  El comando COUNT:";
 choices[10]= new Array();
 choices[10][0] = "Siempre va acompa&ntilde;ado de *";
 choices[10][1] = "Sirve para contar las ocurrencias del atributo al que acompa&ntilde;e.";
 choices[10][2] = "S&oacute;lo aparece despu&eacute;s del WHERE.";
 choices[10][3] = "Obliga a que aparezca la cl&aacute;usula GROUP BY.";
 answers[10] = choices[10][1];
 units[10] = "58";
 comments[10] = "Id Pregunta: 6326. ";


//  Id pregunta: 8362 AÃ±o de creación de pregunta: 2011-01-01
 questions[11]= "12)  Entre las t&eacute;cnicas m&aacute;s com&uacute;nmente usadas en Datamining, &iquest;cu&aacute;l de las siguientes clasifica cada registro en un conjunto de datos basado en una combinaci&oacute;n de las clases de los k registros m&aacute;s similares a &eacute;l en un conjunto de datos hist&oacute;ricos (donde k &gt;=1)? ";
 choices[11]= new Array();
 choices[11][0] = "Redes neuronales artificiales.";
 choices[11][1] = "&Aacute;rboles de decisi&oacute;n.";
 choices[11][2] = "M&eacute;todo del vecino m&aacute;s cercano.";
 choices[11][3] = "Regla de Inducci&oacute;n.";
 answers[11] = choices[11][2];
 units[11] = "68";
 comments[11] = "Id Pregunta: 8362. Examen TIC A2 2010";


//  Id pregunta: 8395 AÃ±o de creación de pregunta: 2011-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos NO es una t&eacute;cnica empleada en Miner&iacute;a de Datos?";
 choices[12]= new Array();
 choices[12][0] = "Las redes neuronales.";
 choices[12][1] = "Look and Find.";
 choices[12][2] = "Los &aacute;rboles de decisi&oacute;n.";
 choices[12][3] = "Las redes bayesianas.";
 answers[12] = choices[12][1];
 units[12] = "71";
 comments[12] = "Id Pregunta: 8395. Examen TIC A2 2010";


//  Id pregunta: 8415 AÃ±o de creación de pregunta: 2011-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes NO es una de las llamadas doce reglas de Codd? ";
 choices[13]= new Array();
 choices[13][0] = "Independencia f&iacute;sica de los datos. ";
 choices[13][1] = "Independencia de distribuci&oacute;n. ";
 choices[13][2] = "Independencia de actualizaci&oacute;n. ";
 choices[13][3] = "Independencia de integridad. ";
 answers[13] = choices[13][2];
 units[13] = "58";
 comments[13] = "Id Pregunta: 8415. Examen TIC A2 2010";


//  Id pregunta: 8640 AÃ±o de creación de pregunta: 2011-01-01
 questions[14]= "15)  Si tenemos las dependencias funcionales (A, B) -&gt; C, B -&gt; D y la siguiente relaci&oacute;n (A, B, C, D) donde (A, B) es la clave candidata. &iquest;Cu&aacute;l seria el resultado de aplicar la 2&ordf; forma normal?";
 choices[14]= new Array();
 choices[14][0] = "(A, B, C), (A, B, D).";
 choices[14][1] = "(A, B, C), (B, D).";
 choices[14][2] = "(A, B, C),  (A, D).";
 choices[14][3] = "Ya est&aacute; en 2FN.";
 answers[14] = choices[14][1];
 units[14] = "57, 58";
 comments[14] = "Id Pregunta: 8640. Examen TIC A2 2010 interna";


//  Id pregunta: 8801 AÃ±o de creación de pregunta: 2011-01-01
 questions[15]= "16)  Con relaci&oacute;n a la programaci&oacute;n en java, &iquest;como se denomina el paquete que comprende una serie de clases que permiten crear y organizar ventanas, implementar componentes gr&aacute;ficas de la interfaz, mediante eventos, dibujar textos y gr&aacute;ficos, procesar im&aacute;genes y acceder a cada sistema nativo de ventanas?";
 choices[15]= new Array();
 choices[15][0] = "WT (Window Toolkit)";
 choices[15][1] = "AWT (Abstract Window Toolkit)";
 choices[15][2] = "JWS (Java Window Set)";
 choices[15][3] = "WS (Windows Set)";
 answers[15] = choices[15][1];
 units[15] = "60";
 comments[15] = "Id Pregunta: 8801. Examen UPM A2 2011";


//  Id pregunta: 9597 AÃ±o de creación de pregunta: 2013-01-01
 questions[16]= "17)  En el desarrollo de aplicaciones en .NET Framework, &iquest;cu&aacute;l de los siguientes no es un componente del marco .NET Framework?";
 choices[16]= new Array();
 choices[16][0] = "El entorno de ejecuci&oacute;n de lenguaje com&uacute;n (CLR) ";
 choices[16][1] = "La biblioteca de clases base (.NET Framework Base Classes) ";
 choices[16][2] = "El lenguaje de definici&oacute;n de la interfaz (IDL)";
 choices[16][3] = "El motor de generaci&oacute;n de la interfaz de usuario ";
 answers[16] = choices[16][2];
 units[16] = "59";
 comments[16] = "Id Pregunta: 9597. Xunta A2 2011";


//  Id pregunta: 9604 AÃ±o de creación de pregunta: 2014-01-01
 questions[17]= "18)  &iquest;C&uacute;al es la estructura m&aacute;s antigua de un modelo SGBD?";
 choices[17]= new Array();
 choices[17][0] = "Relacional";
 choices[17][1] = "En red";
 choices[17][2] = "Jer&aacute;rquico";
 choices[17][3] = "Multidimensional";
 answers[17] = choices[17][2];
 units[17] = "57";
 comments[17] = "Id Pregunta: 9604. ";


//  Id pregunta: 10830 AÃ±o de creación de pregunta: 2015-01-01
 questions[18]= "19)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones sobre la arquitectura ANSI/SPARC es correcta:";
 choices[18]= new Array();
 choices[18][0] = "El nivel externo tambi&eacute;n recibe el nombre de nivel f&iacute;sico.";
 choices[18][1] = "El nivel interno tambi&eacute;n recibe el nombre de nivel l&oacute;gico.";
 choices[18][2] = "El nivel externo define los datos que se almacenan en la base de datos y las relaciones entre ellos.";
 choices[18][3] = "El nivel externo contiene las vistas externas de la base de datos y permite ver a cada tipo de usuario s&oacute;lo aquella parte del esquema que es de su inter&eacute;s.";
 answers[18] = choices[18][3];
 units[18] = "57";
 comments[18] = "Id Pregunta: 10830. Examen GSI 2014";


