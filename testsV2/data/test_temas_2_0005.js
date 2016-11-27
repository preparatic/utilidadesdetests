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

//  Id pregunta: 1985 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes respuestas no es un procedimiento para el control de calidad del software seg&uacute;n el PGGC?:";
 choices[0]= new Array();
 choices[0][0] = "Revisiones de aceptaci&oacute;n";
 choices[0][1] = "Auditor&iacute;as";
 choices[0][2] = "Revisiones t&eacute;cnicas formales";
 choices[0][3] = "Evaluaci&oacute;n de prototipos";
 answers[0] = choices[0][0];
 units[0] = "88";
 comments[0] = "Id Pregunta: 1985. Procedimientos de Control de Calidad: Revisiones T&eacute;cnicas Formales, Pruebas, Procedimientos extraordinarios (auditor&iacute;a) y Procedimientos particulares (Evaluaci&oacute;n de Prototipos)";


//  Id pregunta: 2042 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Los tipos de riesgos potenciales de un proyecto que considera el PGGC del CSAE son:";
 choices[1]= new Array();
 choices[1][0] = "Cinco";
 choices[1][1] = "Siete";
 choices[1][2] = "Tres";
 choices[1][3] = "Seis";
 answers[1] = choices[1][1];
 units[1] = "88";
 comments[1] = "Id Pregunta: 2042. ";


//  Id pregunta: 2210 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Qu&eacute; entidades certifican ISO-9000 en Espa&ntilde;a?:";
 choices[2]= new Array();
 choices[2][0] = "S&oacute;lo ISO";
 choices[2][1] = "S&oacute;lo AENOR";
 choices[2][2] = "Empresas privadas";
 choices[2][3] = "AENOR y empresas privadas";
 answers[2] = choices[2][3];
 units[2] = "92";
 comments[2] = "Id Pregunta: 2210. NULL";


//  Id pregunta: 2311 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  En el modelo de estimaci&oacute;n de costes de desarrollo de software (COCOMO) la evaluaci&oacute;n se hace en funci&oacute;n de lo que se conoce como DSI (Delivered Source Instructions). &iquest;Qu&eacute; tipo de instrucciones no se incluyen en este concepto?:";
 choices[3]= new Array();
 choices[3][0] = "Las correspondientes a control de trabajos o procedimientos JCL";
 choices[3][1] = "La de declaraci&oacute;n de datos";
 choices[3][2] = "Las instrucciones de formateo de pantallas";
 choices[3][3] = "Se incluyen todas las anteriores";
 answers[3] = choices[3][3];
 units[3] = "89";
 comments[3] = "Id Pregunta: 2311. NULL";


//  Id pregunta: 2320 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En el Plan General de Garant&iacute;a de Calidad se calcula un cierto Coeficiente de Divergencia CDi:";
 choices[4]= new Array();
 choices[4][0] = "0 &lt;= CDi &lt; 3 representa casos que pueden ser controlados mediante la aplicaci&oacute;n adecuada del Plan General de Garantia de Calidad";
 choices[4][1] = "0 &gt;= CDi &gt; -3 representa un planteamiento desajustado que debe ser revisado necesariamente";
 choices[4][2] = "El CDi calculado no puede tener valores inferiores a -3, por la forma que es calculado";
 choices[4][3] = "Son ciertas todas las respuestas anteriores";
 answers[4] = choices[4][0];
 units[4] = "88";
 comments[4] = "Id Pregunta: 2320. ";


//  Id pregunta: 2369 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Es cierto decir que la &quot;Ingenier&iacute;a hacia delante&quot;:";
 choices[5]= new Array();
 choices[5][0] = "Es una reingenier&iacute;a hecha a continuaci&oacute;n de una ingenier&iacute;a inversa.";
 choices[5][1] = "Es el resultado de aplicar t&eacute;cnicas de reutilizaci&oacute;n a un sistema bien definido.";
 choices[5][2] = "Parte de un alto nivel de abstracci&oacute;n.";
 choices[5][3] = "Precisa antes una &quot;ingenier&iacute;a inversa&quot;.";
 answers[5] = choices[5][2];
 units[5] = "91";
 comments[5] = "Id Pregunta: 2369. ";


//  Id pregunta: 2402 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  La necesidad b&aacute;sica de la garant&iacute;a de calidad:";
 choices[6]= new Array();
 choices[6][0] = "Est&aacute; relacionada con el potencial de errores o defectos latentes en el producto software";
 choices[6][1] = "Est&aacute; relacionada con la necesidad de abaratar costes";
 choices[6][2] = "Est&aacute; relacionada con la disfunci&oacute;n recurrente";
 choices[6][3] = "Est&aacute; relacionada con la ley de Markov";
 answers[6] = choices[6][0];
 units[6] = "87";
 comments[6] = "Id Pregunta: 2402. NULL";


//  Id pregunta: 2482 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Respecto a la evaluaci&oacute;n realizada por COCOMO, &iquest;cu&aacute;l es la afirmaci&oacute;n falsa?:";
 choices[7]= new Array();
 choices[7][0] = "Se incluye s&oacute;lamente la parte de construcci&oacute;n del sistema y de integraci&oacute;n y pruebas";
 choices[7][1] = "No incluye la parte de formaci&oacute;n de los usuarios";
 choices[7][2] = "No incluye las conversiones";
 choices[7][3] = "No incluye los esfuerzos de planificaci&oacute;n de la instalaci&oacute;n";
 answers[7] = choices[7][0];
 units[7] = "89";
 comments[7] = "Id Pregunta: 2482. NULL";


//  Id pregunta: 2810 AÃ±o de creación de pregunta: 2006-01-01
 questions[8]= "9)  La Teor&iacute;a CALIDAD/COSTE establece que...";
 choices[8]= new Array();
 choices[8][0] = "El coste es constante e independiente de la calidad del Producto.";
 choices[8][1] = "El coste de producci&oacute;n disminuye linealmente con el aumento de calidad.";
 choices[8][2] = "El coste de producci&oacute;n aumenta exponencialmente con el aumento de calidad.";
 choices[8][3] = "La relaci&oacute;n entre el coste y la calidad representada gr&aacute;ficamente da lugar a una curva c&oacute;ncava con un m&iacute;nimo.";
 answers[8] = choices[8][2];
 units[8] = "88";
 comments[8] = "Id Pregunta: 2810. NULL";


//  Id pregunta: 4383 AÃ±o de creación de pregunta: 2007-01-01
 questions[9]= "10)  Cu&aacute;les de las siguientes pruebas no responde al tipo de prueba de caja negra?";
 choices[9]= new Array();
 choices[9][0] = "Particiones de equivalencia.";
 choices[9][1] = "Pruebas de comparaci&oacute;n.";
 choices[9][2] = "Prueba del camino b&aacute;sico.";
 choices[9][3] = "Pruebas de datos imposibles.";
 answers[9] = choices[9][2];
 units[9] = "87";
 comments[9] = "Id Pregunta: 4383. NULL";


//  Id pregunta: 4673 AÃ±o de creación de pregunta: 2007-01-01
 questions[10]= "11)  Una m&eacute;trica basada en la calidad del software utiliza como factores de calidad desde un punto de vistade explotaci&oacute;n:";
 choices[10]= new Array();
 choices[10][0] = "Reusabilidad, Seguridad, Eficiencia, Correcci&oacute;n y Fiabilidad";
 choices[10][1] = "Usabilidad, Seguridad, Eficiencia, Correccion y Fiabilidad";
 choices[10][2] = "Usabilidad, Seguridad, Mantenibilidad, Correcci&oacute;n y Fiabilidad";
 choices[10][3] = "Usabilidad, Seguridad, Portabilidad, Correcci&oacute;n y Fiabilidad";
 answers[10] = choices[10][1];
 units[10] = "88";
 comments[10] = "Id Pregunta: 4673. Examen 2006 JCYL";


//  Id pregunta: 5080 AÃ±o de creación de pregunta: 2003-01-01
 questions[11]= "12)  En el modelo COCOMO, la estimaci&oacute;n del esfuerzo anual b&aacute;sico para el mantenimiento de los sistemas deinformaci&oacute;n, (MM)am, conocido el esfuerzo estimado de desarrollo, (MM)d, es:";
 choices[11]= new Array();
 choices[11][0] = "(MM)am =1.8 (DSI) (MM)d";
 choices[11][1] = "(MM)am =2.0 (ADF) (MM)d";
 choices[11][2] = "(MM)am = 3.2(FSP) (MM)d";
 choices[11][3] = "(MM)am = 1.0 (ACT) (MM)d";
 answers[11] = choices[11][3];
 units[11] = "89";
 comments[11] = "Id Pregunta: 5080. Examen TIC A 2007";


//  Id pregunta: 5254 AÃ±o de creación de pregunta: 2003-01-01
 questions[12]= "13)  Indique cu&aacute;l de las siguientes opciones describe el nivel 2 del modelo CMM";
 choices[12]= new Array();
 choices[12][0] = "No se han definido procesos metodol&oacute;gicos, o si se han definido no se siguen";
 choices[12][1] = "El proceso de software est&aacute; documentado, homogeneizado e integrado en un proceso de software est&aacute;ndar dentro de la organizaci&oacute;n";
 choices[12][2] = "Se establecen pol&iacute;ticas y procedimientos de administraci&oacute;n e implantaci&oacute;n del modelo b&aacute;sico para determinar costos, calendarios y funcionalidades";
 choices[12][3] = "Se recolectan medidas detalladas del proceso de software y de la calidad del producto Ambos son cuantitativamente entendidos y controlados.";
 answers[12] = choices[12][2];
 units[12] = "87";
 comments[12] = "Id Pregunta: 5254. NULL";


//  Id pregunta: 5436 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  Indicar lo que no contribuye a que la estimaci&oacute;n del esfuerzo de desarrollo sea tan dif&iacute;cil de realizar";
 choices[13]= new Array();
 choices[13][0] = "El hecho de que cada organizaci&oacute;n tiene sus propios recursos, procedimientos e historia, y es necesario ajustar los procesos de estimaci&oacute;n a esos par&aacute;metros &uacute;nicos";
 choices[13][1] = "La rapidez con la que cambian las tecnolog&iacute;as de la informaci&oacute;n y las metodolog&iacute;as del desarrollo";
 choices[13][2] = "La tendencia de los desarrolladores hacia la sobreestimaci&oacute;n";
 choices[13][3] = "El ignorar los aspectos no lineales del desarrollo del software (como son la coordinaci&oacute;n y la gesti&oacute;n";
 answers[13] = choices[13][2];
 units[13] = "89";
 comments[13] = "Id Pregunta: 5436. Castilla y Le&oacute;n";


//  Id pregunta: 5848 AÃ±o de creación de pregunta: 2009-01-01
 questions[14]= "15)  En la t&eacute;cnica de estimaci&oacute;n de puntos funci&oacute;n, los puntos funci&oacute;n ajustados se obtienen a partir de los puntos funci&oacute;n no ajustados:";
 choices[14]= new Array();
 choices[14][0] = "Valorando la importancia en el proyecto de 14 caracter&iacute;sticas generales del sistema";
 choices[14][1] = "Multiplicando por un coeficiente que depende del lenguaje de programaci&oacute;n utilizado en el proyecto";
 choices[14][2] = "Teniendo en cuenta la valoraci&oacute;n de 5 factores de escala";
 choices[14][3] = "Teniendo en cuenta la valoraci&oacute;n de 17 factores de coste";
 answers[14] = choices[14][0];
 units[14] = "89";
 comments[14] = "Id Pregunta: 5848. NULL";


//  Id pregunta: 6634 AÃ±o de creación de pregunta: 2010-01-01
 questions[15]= "16)  Entre los distintos modelos de calidad NO se encuentra:";
 choices[15]= new Array();
 choices[15][0] = "FURPS (Funcionality, Usability, Reliability, Performance, Supportability)";
 choices[15][1] = "McCall";
 choices[15][2] = "EFQM (European Foundation for Quality Management)";
 choices[15][3] = "EQAM (European Quality Assurance Method)";
 answers[15] = choices[15][3];
 units[15] = "88";
 comments[15] = "Id Pregunta: 6634. NULL";


//  Id pregunta: 8970 AÃ±o de creación de pregunta: 2011-01-01
 questions[16]= "17)  Entre los agentes del Plan General de Garant&iacute;a de la Calidad no figura:";
 choices[16]= new Array();
 choices[16][0] = "EGC (Eq garant&iacute;a calidad)";
 choices[16][1] = "EDS (Equipo de desarrollo)";
 choices[16][2] = "DIR (Director de proyecto)";
 choices[16][3] = "CDC (Comit&eacute; directivo de calidad)";
 answers[16] = choices[16][3];
 units[16] = "87,88,92";
 comments[16] = "Id Pregunta: 8970. ";


