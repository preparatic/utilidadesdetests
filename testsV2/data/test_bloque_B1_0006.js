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

//  Id pregunta: 115 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  De las siguientes afirmaciones referentes al m&eacute;todo lexicogr&aacute;fico de ordenaci&oacute;n de alternativas, indique cu&aacute;l es m&aacute;s correcta:";
 choices[0]= new Array();
 choices[0][0] = "El m&eacute;todo lexicogr&aacute;fico tiene como inconveniente que no utiliza toda la informaci&oacute;n disponible";
 choices[0][1] = "El m&eacute;todo lexicogr&aacute;fico requiere comparabilidad intercriterios";
 choices[0][2] = "El m&eacute;todo lexicogr&aacute;fico da como resultado un preorden parcial de las alternativas, pudiendo quedar alternativas declaradas como incomparables";
 choices[0][3] = "Todas las respuestas anteriores son ciertas";
 answers[0] = choices[0][0];
 units[0] = "34";
 comments[0] = "Id Pregunta: 115. NULL";


//  Id pregunta: 144 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  El est&aacute;ndar POSIX se corresponde con la norma internacional:";
 choices[1]= new Array();
 choices[1][0] = "ISO 9945-1";
 choices[1][1] = "IEEE 1033.1";
 choices[1][2] = "OSF 99945-1";
 choices[1][3] = "ISO 1003-1";
 answers[1] = choices[1][0];
 units[1] = "42";
 comments[1] = "Id Pregunta: 144. ";


//  Id pregunta: 158 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  El punto que centraliza las comunicaciones de los usuarios con Sistemas de Informaci&oacute;n suele denominarse:";
 choices[2]= new Array();
 choices[2][0] = "Centro de control de red ";
 choices[2][1] = "Help desk";
 choices[2][2] = "Centro de contingencias";
 choices[2][3] = "Soporte de teleproceso";
 answers[2] = choices[2][1];
 units[2] = "26";
 comments[2] = "Id Pregunta: 158. ";


//  Id pregunta: 180 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  En el contexto de la ordenaci&oacute;n de alternativas en la teor&iacute;a de la DMD, el m&eacute;todo Promethee:";
 choices[3]= new Array();
 choices[3][0] = "S&oacute;lo tiene en cuenta los criterios de mayor peso";
 choices[3][1] = "Se basa en las comparaciones binarias de alternativas";
 choices[3][2] = "Utiliza el c&aacute;lculo de relaciones de superaci&oacute;n entre alternativas";
 choices[3][3] = "Es la generalizaci&oacute;n del m&eacute;todo de la ponderaci&oacute;n lineal";
 answers[3] = choices[3][2];
 units[3] = "34";
 comments[3] = "Id Pregunta: 180. ";


//  Id pregunta: 216 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En la funci&oacute;n de entrada de datos de un sistema de informaci&oacute;n no es necesario tener en cuenta:";
 choices[4]= new Array();
 choices[4][0] = "La interactividad con el operador";
 choices[4][1] = "La organizaci&oacute;n de la base de datos";
 choices[4][2] = "Control de errores";
 choices[4][3] = "Enfoque integrado";
 answers[4] = choices[4][1];
 units[4] = "21";
 comments[4] = "Id Pregunta: 216. ";


//  Id pregunta: 248 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  En una organizaci&oacute;n de tipo perro vigilante:";
 choices[5]= new Array();
 choices[5][0] = "El HW est&aacute; distribuido, y no se descentraliza la capacidad de realizar SW ni las decisiones";
 choices[5][1] = "El HW est&aacute; distribuido y el desarrollo tambi&eacute;n, pero no las decisiones";
 choices[5][2] = "El HW no est&aacute; distribuido y se descentraliza la capacidad de realizar SW y las decisiones";
 choices[5][3] = "El HW, el desarrollo y las decisiones se descentralizan";
 answers[5] = choices[5][1];
 units[5] = "22";
 comments[5] = "Id Pregunta: 248. ";


//  Id pregunta: 267 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Indicar cu&aacute;l no es una t&eacute;cnica para la toma individual de decisiones:";
 choices[6]= new Array();
 choices[6][0] = "T&eacute;cnica Delphi";
 choices[6][1] = "An&aacute;lisis de redes";
 choices[6][2] = "Teor&iacute;a de probabilidad";
 choices[6][3] = "Programaci&oacute;n lineal";
 answers[6] = choices[6][0];
 units[6] = "23";
 comments[6] = "Id Pregunta: 267. ";


//  Id pregunta: 305 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  La evoluci&oacute;n de la inform&aacute;tica desde la perspectiva estrat&eacute;gica:";
 choices[7]= new Array();
 choices[7][0] = "Proporciona un marco conceptual que permita a los directores entender el fen&oacute;meno inform&aacute;tico y tomar decisiones de planificaci&oacute;n";
 choices[7][1] = "Permite conocer cu&aacute;les han de ser las caracter&iacute;sticas del directivo que deba dirigir la organizaci&oacute;n y la estructura organizativa adecuada";
 choices[7][2] = "Permite analizar la situaci&oacute;n de un momento concreto";
 choices[7][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[7] = choices[7][0];
 units[7] = "23";
 comments[7] = "Id Pregunta: 305. ";


//  Id pregunta: 308 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  La gu&iacute;a de portabilidad de X/OPEN actualmente en vigor es:";
 choices[8]= new Array();
 choices[8][0] = "XGP3";
 choices[8][1] = "XGP4";
 choices[8][2] = "XGP5";
 choices[8][3] = "Todas las respuestas anteriores son correctas";
 answers[8] = choices[8][1];
 units[8] = "40";
 comments[8] = "Id Pregunta: 308. XPG";


//  Id pregunta: 357 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Las leyes de protecci&oacute;n de datos que pretenden prevenir la invasi&oacute;n de la intimidad del individuo frente al abuso de la informaci&oacute;n computarizada son las conocidas como:";
 choices[9]= new Array();
 choices[9][0] = "Leyes de primera generaci&oacute;n";
 choices[9][1] = "Leyes de segunda generaci&oacute;n";
 choices[9][2] = "Leyes de tercera generaci&oacute;n";
 choices[9][3] = "No se aplica esta clasificaci&oacute;n a este tipo de leyes";
 answers[9] = choices[9][2];
 units[9] = "36";
 comments[9] = "Id Pregunta: 357. ";


//  Id pregunta: 378 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Los subestados de seguridad de un activo o recurso del sistema de informaci&oacute;n son:";
 choices[10]= new Array();
 choices[10][0] = "Autenticaci&oacute;n, confidencialidad y correcci&oacute;n";
 choices[10][1] = "Capacidad de operaci&oacute;n, capacidad de modificaci&oacute;n y capacidad de adaptaci&oacute;n";
 choices[10][2] = "Autenticaci&oacute;n, confidencialidad, correcci&oacute;n y aislamiento";
 choices[10][3] = "Autenticaci&oacute;n, confidencialidad, integridad y disponibilidad";
 answers[10] = choices[10][3];
 units[10] = "32,33";
 comments[10] = "Id Pregunta: 378. ";


//  Id pregunta: 389 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  No es un instrumento b&aacute;sico de un DSS orientado a datos:";
 choices[11]= new Array();
 choices[11][0] = "Informe resumen";
 choices[11][1] = "Informe de relaci&oacute;n";
 choices[11][2] = "Informe de excepci&oacute;n";
 choices[11][3] = "Informe gr&aacute;fico";
 answers[11] = choices[11][1];
 units[11] = "21";
 comments[11] = "Id Pregunta: 389. ";


//  Id pregunta: 396 AÃ±o de creación de pregunta: 2009-01-01
 questions[12]= "13)  Para poder tener un fichero de datos personales en la Administraci&oacute;n P&uacute;blica hace falta:";
 choices[12]= new Array();
 choices[12][0] = "Que su creaci&oacute;n, modificaci&oacute;n o supresi&oacute;n se realice mediante una disposici&oacute;n general publicada en el B.O.E. o en el diario oficial correspondiente";
 choices[12][1] = "Que el correspondiente Director General lo autorice por escrito";
 choices[12][2] = "Que aparezca una disposici&oacute;n general publicada en el Diario de las Comunidades Europeas";
 choices[12][3] = "Que en la normativa de estructura del Departamento o Unidad as&iacute; se establezca";
 answers[12] = choices[12][0];
 units[12] = "29";
 comments[12] = "Id Pregunta: 396. ";


//  Id pregunta: 418 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Se entiende por demanda latente en los recursos de un sistemas:";
 choices[13]= new Array();
 choices[13][0] = "Cuando la carga de trabajo se expande hasta ocupar la capacidad existente";
 choices[13][1] = "Cuando nunca hay espacio suficiente en disco";
 choices[13][2] = "Ambas son v&aacute;lidas";
 choices[13][3] = "Ninguna es v&aacute;lida";
 answers[13] = choices[13][2];
 units[13] = "35";
 comments[13] = "Id Pregunta: 418. NULL";


//  Id pregunta: 426 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Seg&uacute;n el modelo de Nolan en cuatro etapas sobre la evoluci&oacute;n de la inform&aacute;tica en las organizaciones, las t&eacute;cnicas de direcci&oacute;n que se aplican en la fase de expansi&oacute;n son:";
 choices[14]= new Array();
 choices[14][0] = "Orientadas a ventas";
 choices[14][1] = "Orientadas al control";
 choices[14][2] = "Orientadas a los recursos";
 choices[14][3] = "Informales";
 answers[14] = choices[14][0];
 units[14] = "22";
 comments[14] = "Id Pregunta: 426. nolan";


//  Id pregunta: 431 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Seg&uacute;n la clasificaci&oacute;n de directivos establecida por Lawrence Milier, el tipo de directivo id&oacute;neo para la creaci&oacute;n inicial de una empresa es el:";
 choices[15]= new Array();
 choices[15][0] = "B&aacute;rbaro";
 choices[15][1] = "Profeta";
 choices[15][2] = "Administrador";
 choices[15][3] = "Gestor";
 answers[15] = choices[15][1];
 units[15] = "22";
 comments[15] = "Id Pregunta: 431. ";


//  Id pregunta: 447 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Seg&uacute;n las teor&iacute;as de Alvin Toffler:";
 choices[16]= new Array();
 choices[16][0] = "Las organizaciones tradicionales tienen dos elementos caracter&iacute;sticos &quot;cub&iacute;culos&quot; y &quot;canales&quot;";
 choices[16][1] = "Las organizaciones basadas en la informaci&oacute;n tienen dos elementos caracter&iacute;sticos &quot;cub&iacute;culos&quot; y &quot;canales&quot;";
 choices[16][2] = "La evoluci&oacute;n en el tiempo del presupuesto invertido en inform&aacute;tica produce una gr&aacute;fica en forma de S";
 choices[16][3] = "La evoluci&oacute;n en el tiempo del presupuesto invertido en inform&aacute;tica produce una gr&aacute;fica en forma de doble S";
 answers[16] = choices[16][0];
 units[16] = "22";
 comments[16] = "Id Pregunta: 447. ";


//  Id pregunta: 489 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Una de las siguientes organizaciones de estandarizaci&oacute;n no ha desarrollado el est&aacute;ndar mencionado.  &iquest;Cu&aacute;l es?:";
 choices[17]= new Array();
 choices[17][0] = "ANSI - FDDI";
 choices[17][1] = "IEEE- TCP/IP";
 choices[17][2] = "ITU-T - X.25";
 choices[17][3] = "EIA  - RS-232";
 answers[17] = choices[17][1];
 units[17] = "42";
 comments[17] = "Id Pregunta: 489. ";


//  Id pregunta: 558 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  Cualquier sistema de informaci&oacute;n:";
 choices[18]= new Array();
 choices[18][0] = "No es independiente de los objetivos de la organizaci&oacute;n.";
 choices[18][1] = "Debe estar interrelacionado con los dem&aacute;s sistemas de la organizaci&oacute;n.";
 choices[18][2] = "No es independiente de las estrategias de la organizaci&oacute;n.";
 choices[18][3] = "Son correctas todas las afirmaciones anteriores.";
 answers[18] = choices[18][3];
 units[18] = "21";
 comments[18] = "Id Pregunta: 558. ";


//  Id pregunta: 559 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  Si analizamos un Sistema de Informaci&oacute;n desde una estructuraci&oacute;n vertical, el grueso del proceso de datos se hace a nivel";
 choices[19]= new Array();
 choices[19][0] = "Nivel estrat&eacute;gico.";
 choices[19][1] = "Nivel Operacional";
 choices[19][2] = "Nivel T&aacute;ctico";
 choices[19][3] = "Se realiza dentro de los programas y aplicaciones ";
 answers[19] = choices[19][1];
 units[19] = "21";
 comments[19] = "Id Pregunta: 559. ";


//  Id pregunta: 584 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  &iquest;En qu&eacute; situaciones es necesario un equipo de integraci&oacute;n de sistemas?";
 choices[20]= new Array();
 choices[20][0] = "En entorno de microinform&aacute;tica";
 choices[20][1] = "Cuando se trabaja con m&aacute;quinas virtuales separadas";
 choices[20][2] = "Cuando se engloban varios componentes o varios sistemas sobre una misma plataforma";
 choices[20][3] = "Cuando se sube a producci&oacute;n sistemas especialmente cr&iacute;ticos";
 answers[20] = choices[20][2];
 units[20] = "26";
 comments[20] = "Id Pregunta: 584. ";


//  Id pregunta: 586 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  Un principio que debe regir el CAU es:";
 choices[21]= new Array();
 choices[21][0] = "Mejora continua del servicio proporcionado.";
 choices[21][1] = "Proveer tantos puntos de contacto como &aacute;reas ";
 choices[21][2] = "Solicitar&aacute; informaci&oacute;n escrita al usuario de la incidencia que cursa";
 choices[21][3] = "Limitar&aacute; el tiempo de atenci&oacute;n al usuario ";
 answers[21] = choices[21][0];
 units[21] = "26";
 comments[21] = "Id Pregunta: 586. ";


//  Id pregunta: 620 AÃ±o de creación de pregunta: 2006-01-01
 questions[22]= "23)  La auditor&iacute;a de econom&iacute;a, eficacia y eficiencia, o triple E, ha sido bautizada por la United Kingdom Audit Office como:";
 choices[22]= new Array();
 choices[22][0] = "VFN";
 choices[22][1] = "VAN";
 choices[22][2] = "TIR";
 choices[22][3] = "VFM";
 answers[22] = choices[22][3];
 units[22] = "33";
 comments[22] = "Id Pregunta: 620. ";


//  Id pregunta: 643 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  Cu&aacute;l de las siguientes afirmaciones sobre X/OPEN es incorrecta:";
 choices[23]= new Array();
 choices[23][0] = "POSIX (Portable Operating System Interface), creado por X/OPEN, consite en la creaci&oacute;n de interfaces est&aacute;ndares de sistema operativo.";
 choices[23][1] = "CAE (common Application Enviroment), creado por X/OPEN, est&aacute; basado en est&aacute;ndares internacionales y de hecho.";
 choices[23][2] = "XPG es la gu&iacute;a de portabilidad de X/OPEN";
 choices[23][3] = "X/Open es una compa&ntilde;&iacute;a independiente, sin &aacute;nimo de lucro, compuesta por usuarios, vendedores independientes de software y vendedores de sistemas inform&aacute;ticos de todo el mundo.";
 answers[23] = choices[23][0];
 units[23] = "40";
 comments[23] = "Id Pregunta: 643. ";


//  Id pregunta: 652 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  Se&ntilde;ale la respuesta falsa respecto a los CTS (Conformance Testing Services):";
 choices[24]= new Array();
 choices[24][0] = "Los centros de prueba CTS pueden comercializar herramientas de ensayo para que las empresas puedan realizar sus propias pruebas";
 choices[24][1] = "En Espa&ntilde;a, coordinados por AENOR, existen varios centros de prueba CTS";
 choices[24][2] = "Cada servicio de pruebas debe ofrecerse en m&aacute;s de dos Estados miembros, que deber&aacute;n velar por el reconocimiento mutuo de los resultados de las pruebas";
 choices[24][3] = "El programa CTS se basa en los principios de independencia, reconocimiento mutuo y armonizaci&oacute;n";
 answers[24] = choices[24][2];
 units[24] = "42";
 comments[24] = "Id Pregunta: 652. ";


//  Id pregunta: 4254 AÃ±o de creación de pregunta: 2007-01-01
 questions[25]= "26)  Como parte de la legislaci&oacute;n para el impulso de la sociedad de la informaci&oacute;n se incluyen:";
 choices[25]= new Array();
 choices[25][0] = "La Ley 34/ 2002 de Servicios de la Sociedad de la Informaci&oacute;n y del Comercio Electr&oacute;nico";
 choices[25][1] = "La Ley 59/2003 de 19 de diciembre de firma electr&oacute;nica";
 choices[25][2] = "La Directiva Comunitaria 2000/31/CE de la Sociedad de la Informaci&oacute;n y Comercio Electr&oacute;nico";
 choices[25][3] = "Todas las anteriores";
 answers[25] = choices[25][3];
 units[25] = "30";
 comments[25] = "Id Pregunta: 4254. NULL";


//  Id pregunta: 4553 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  En gesti&oacute;n de proyectos de tecnolog&iacute;as de la informaci&oacute;n indicar cu&aacute;l de los siguientes diagramas es de red y tiene una representaci&oacute;n gr&aacute;fica m&aacute;s sencilla no incluyendo actividades virtuales.";
 choices[26]= new Array();
 choices[26][0] = "Diagrama PERT (Program Evaluation and Review Technique).";
 choices[26][1] = "Diagrama PDM (Precedence Diagramming Method).";
 choices[26][2] = "Diagrama ADM (Arrow Diagramming Method).";
 choices[26][3] = "Ninguno de los anteriores.";
 answers[26] = choices[26][1];
 units[26] = "27";
 comments[26] = "Id Pregunta: 4553. Castilla la Mancha B 06";


//  Id pregunta: 4743 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  El American Nacional Standard Institute (ANSI)";
 choices[27]= new Array();
 choices[27][0] = "Ha desarrollado el est&aacute;ndar FDDI";
 choices[27][1] = "Representa a Estados Unidos en la ISO";
 choices[27][2] = "Las respuestas a y b son ciertas";
 choices[27][3] = "las respuestas a y b son falsas";
 answers[27] = choices[27][2];
 units[27] = "42";
 comments[27] = "Id Pregunta: 4743. Examen 2006 JCYL";


//  Id pregunta: 4757 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes no es un control de prioridad 1 de las directrices de Accesibilidad para el Contenido Web (WCAG 1.0) del W3C?";
 choices[28]= new Array();
 choices[28][0] = "Para cualquier presentaci&oacute;n multimedia basada en tiempo (p.ej., una pel&iacute;cula o animaci&oacute;n), sincronice alternativas equivalentes (p.ej., subt&iacute;tulos o descripciones auditivas de la pista visual) con la presentaci&oacute;n";
 choices[28][1] = "Use hojas de estilo para controlar la composici&oacute;n y la presentaci&oacute;n.";
 choices[28][2] = "Identifique claramente los cambios en el lenguaje natural del texto de un documento y de cualquier equivalente de texto (p.ej., subt&iacute;tulos).";
 choices[28][3] = "Para tablas de datos, identifique encabezados de fila y columna.";
 answers[28] = choices[28][1];
 units[28] = "39";
 comments[28] = "Id Pregunta: 4757. ";


//  Id pregunta: 4954 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  &iquest;Qu&eacute; t&eacute;cnica no es aplicable para dise&ntilde;ar un producto web usable y centrado en el usuario?:";
 choices[29]= new Array();
 choices[29][0] = "Card Sorting.";
 choices[29][1] = "L&oacute;gica Fuzzy.";
 choices[29][2] = "Eye Tracking.";
 choices[29][3] = "An&aacute;lisis de Secuencia.";
 answers[29] = choices[29][1];
 units[29] = "39";
 comments[29] = "Id Pregunta: 4954. Examen TIC B 2007";


//  Id pregunta: 4960 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  En la ejecuci&oacute;n de un proyecto de auditor&iacute;a inform&aacute;tica sobre un sistema de informaci&oacute;n, el uso de procedimientos estad&iacute;sticos de muestreo ayudar&aacute; a minimizar el riesgo:";
 choices[30]= new Array();
 choices[30][0] = "De muestreo.";
 choices[30][1] = "De detecci&oacute;n.";
 choices[30][2] = "Inherente.";
 choices[30][3] = "De control.";
 answers[30] = choices[30][1];
 units[30] = "33";
 comments[30] = "Id Pregunta: 4960. Examen TIC B 2007";


//  Id pregunta: 5268 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  En un fichero que contiene datos de car&aacute;cter personal, la presencia de informaci&oacute;n relativa a la minusval&iacute;a de las personas &hellip;";
 choices[31]= new Array();
 choices[31][0] = "significa que ha de estar bajo medidas de seguridad de car&aacute;cter alto de modo general, aunque bajo ciertas circunstancias basta que contemple medidas de seguridad de car&aacute;cter b&aacute;sico";
 choices[31][1] = "al menos de car&aacute;cter medio";
 choices[31][2] = "de car&aacute;cter alto en todas las circunstancias";
 choices[31][3] = "de car&aacute;cter b&aacute;sico en todas las circunstancias";
 answers[31] = choices[31][0];
 units[31] = "29";
 comments[31] = "Id Pregunta: 5268. ";


//  Id pregunta: 5559 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  En base al TRLPI (RD 1/1996) y las modificaciones introducidas por la Ley 23/2006:";
 choices[32]= new Array();
 choices[32][0] = "La copia privada se entiende como un derecho de los usuarios.";
 choices[32][1] = "Este derecho de copia privada da lugar al establecimiento de una remuneraci&oacute;n compensatoria para los autores.";
 choices[32][2] = "Dicha remuneraci&oacute;n compensatoria aplica tambi&eacute;n a los programas de ordenador y bases de datos.";
 choices[32][3] = "El canon aplicado a los equipos de reproducci&oacute;n digitales deber&aacute; revisarse cada 2 a&ntilde;os.";
 answers[32] = choices[32][3];
 units[32] = "37";
 comments[32] = "Id Pregunta: 5559. ";


//  Id pregunta: 5584 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  &iquest;Qu&eacute; tipos de contratos se regulan en el RD Legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[33]= new Array();
 choices[33][0] = "Obras, gesti&oacute;n de servicios p&uacute;blicos, consultor&iacute;a y asistencia y servicios, y concesi&oacute;n de obras p&uacute;blicas";
 choices[33][1] = "Obras, concesi&oacute;n de obras p&uacute;blicas, gesti&oacute;n de servicios p&uacute;blicos, suministro, servicios, y de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado";
 choices[33][2] = "Obras, suministros, consultor&iacute;a y asistencia, y gesti&oacute;n p&uacute;blica de servicios privados";
 choices[33][3] = "ninguno de los anteriores es correcto";
 answers[33] = choices[33][1];
 units[33] = "41";
 comments[33] = "Id Pregunta: 5584. ";


//  Id pregunta: 5765 AÃ±o de creación de pregunta: 2009-01-01
 questions[34]= "35)  &iquest;Cu&aacute;les de los siguientes m&eacute;todos de normalizaci&oacute;n de puntuaciones no mantiene la proporcionalidad entre puntuaciones directas y normalizadas?";
 choices[34]= new Array();
 choices[34][0] = "Fracci&oacute;n del ideal";
 choices[34][1] = "Fracci&oacute;n de la suma";
 choices[34][2] = "Fracci&oacute;n del m&aacute;ximo";
 choices[34][3] = "Todas las anteriores mantienen la proporcionalidad";
 answers[34] = choices[34][0];
 units[34] = "34";
 comments[34] = "Id Pregunta: 5765. ";


//  Id pregunta: 5775 AÃ±o de creación de pregunta: 2009-01-01
 questions[35]= "36)  Seg&uacute;n el RD 1720/2007 cuando la obligaci&oacute;n de notificar afecte a ficheros sujetos a la competencia de la autoridad de control de una Comunidad Aut&oacute;noma que haya creado su propio registro de ficheros, la notificaci&oacute;n se realizar&aacute; a:";
 choices[35]= new Array();
 choices[35][0] = "la autoridad auton&oacute;mica competente, que dar&aacute; traslado de la inscripci&oacute;n  al Registro General de Protecci&oacute;n de  Datos";
 choices[35][1] = "la autoridad auton&oacute;mica competente y al Registro General de Protecci&oacute;n de  Datos";
 choices[35][2] = "al Registro General de Protecci&oacute;n de  Datos, que dar&aacute; traslado de la inscripci&oacute;n a la la autoridad auton&oacute;mica competente";
 choices[35][3] = "la autoridad auton&oacute;mica competente o al Registro General de Protecci&oacute;n de  Datos. El receptor de la notificaci&oacute;n dar&aacute; traslado de la inscripci&oacute;n al otro ente";
 answers[35] = choices[35][0];
 units[35] = "29";
 comments[35] = "Id Pregunta: 5775. MAP 2008 A2";


//  Id pregunta: 5813 AÃ±o de creación de pregunta: 2009-01-01
 questions[36]= "37)  El sistema inform&aacute;tico que soporte el perfil de contratante deber&aacute; contar con un dispositivo que acredite (art&iacute;culo 53.3 RD Legislativo 3/2011):";
 choices[36]= new Array();
 choices[36][0] = "El responsable de la informaci&oacute;n publicada";
 choices[36][1] = "El momento de inicio de la difusi&oacute;n p&uacute;blica de la informaci&oacute;n";
 choices[36][2] = "Los plazos que hay que cumplir en el procedimiento";
 choices[36][3] = "La fecha y hora exactas de la adjudicaci&oacute;n de un contrato";
 answers[36] = choices[36][1];
 units[36] = "41";
 comments[36] = "Id Pregunta: 5813. ";


//  Id pregunta: 5814 AÃ±o de creación de pregunta: 2009-01-01
 questions[37]= "38)  &iquest;Qu&eacute; deber&aacute; publicarse, en todo caso, en el perfil de contratante, seg&uacute;n el RD Legislativo 3/2011 de Contatos del Sector P&uacute;blico(art&iacute;culo 53.2)?";
 choices[37]= new Array();
 choices[37][0] = "Las adjudicaciones de los contratos";
 choices[37][1] = "Los anuncios de licitaci&oacute;n";
 choices[37][2] = "La adjudicaci&oacute;n provisional de los contratos";
 choices[37][3] = "Las licitaciones abiertas";
 answers[37] = choices[37][2];
 units[37] = "41";
 comments[37] = "Id Pregunta: 5814. NULL";


//  Id pregunta: 5999 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  Respecto al contenido del informe de auditoria, indicar cu&aacute;l de las siguientes recomendaciones es correcta:";
 choices[38]= new Array();
 choices[38][0] = "El informe final de una auditoria s&oacute;lo contendr&aacute; recomendaciones relativas a los incumplimientos o puntos d&eacute;biles detectados en el &aacute;rea auditada.";
 choices[38][1] = "El informe final incluir&aacute; las alegaciones de los auditados, indicando la opini&oacute;n de los auditores sobre ellas, y si no se incluyen las alegaciones, deber&aacute; indicarse el motivo.";
 choices[38][2] = "El informe final de una auditoria operativa debe contener la opini&oacute;n de los auditores y sugerencias generales sobre c&oacute;mo aplicar los controles para evaluar el funcionamiento del &aacute;rea auditada.";
 choices[38][3] = "En el informe final de una auditoria operativa se deben se&ntilde;alar las debilidades y fortalezas observadas en relaci&oacute;n con los controles implementados en el &aacute;rea auditada.";
 answers[38] = choices[38][1];
 units[38] = "31";
 comments[38] = "Id Pregunta: 5999. TIC A 2009";


//  Id pregunta: 6001 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  Los Estados Miembros est&aacute;n obligados a garantizar, a trav&eacute;s de ventanillas &uacute;nicas, a los prestadores de servicios la posibilidad de llevar a cabo las declaraciones, notificaciones o solicitudes necesarias para la autorizaci&oacute;n por parte de las autoridades competentes. &iquest;En que Directiva se regula esta obligaci&oacute;n?";
 choices[39]= new Array();
 choices[39][0] = "En la Directiva 2000/31/CE, relativa a determinados aspectos jur&iacute;dicos del comercio electr&oacute;nico en el mercado interior.";
 choices[39][1] = "No existe esta obligaci&oacute;n por parte de los Estados Miembros, y por tanto ninguna Directiva la regula.";
 choices[39][2] = "En la Directiva 2006/31/CE, relativa a la armonizaci&oacute;n de las actividades de servicios con contenido econ&oacute;mico en el mercado interior.";
 choices[39][3] = "En la Directiva 2006/123/CE, relativa a los servicios en el mercado interior.";
 answers[39] = choices[39][3];
 units[39] = "30";
 comments[39] = "Id Pregunta: 6001. TIC A 2009";


//  Id pregunta: 6098 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  &iquest;Cu&aacute;les son las dimensiones de la interoperabilidad seg&uacute;n el Marco Europeo de Interoperabilidad?";
 choices[40]= new Array();
 choices[40][0] = "Organizativa, sem&aacute;ntica y t&eacute;cnica.";
 choices[40][1] = "Legal, sem&aacute;ntica y econ&oacute;mica.";
 choices[40][2] = "Organizativa, ling&uuml;&iacute;stica e inform&aacute;tica.";
 choices[40][3] = "Ninguna, porque el Marco Europeo de Interoperabilidad no est&aacute; todav&iacute;a adoptado por la Comisi&oacute;n Europea.";
 answers[40] = choices[40][0];
 units[40] = "40";
 comments[40] = "Id Pregunta: 6098. TIC A 2009";


//  Id pregunta: 6136 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  Dado un CAU de tres niveles, &iquest;d&oacute;nde ubicar&iacute;a en el proceso de soporte al personal inform&aacute;tico de un centro perif&eacute;rico?";
 choices[41]= new Array();
 choices[41][0] = "Entre el primer nivel (CAU) y el segundo nivel (otras &aacute;reas del centro TIC)";
 choices[41][1] = "Entre el segundo nivel (otras &aacute;reas del centro TIC) y el tercer nivel (proveedores y empresas de mantenimiento)";
 choices[41][2] = "Como &lsquo;nivel 0&rsquo;, atendiendo todas las incidencias del centro perif&eacute;rico y escal&aacute;ndolas al nivel 1 (CAU)";
 choices[41][3] = "Fuera del proceso de soporte, habr&iacute;a que reubicar al personal en otras tareas";
 answers[41] = choices[41][0];
 units[41] = "26";
 comments[41] = "Id Pregunta: 6136. ";


//  Id pregunta: 6148 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  &iquest;Qu&eacute; tipo de dependencias utiliza el m&eacute;todo ADM?";
 choices[42]= new Array();
 choices[42][0] = "Utiliza dependencias inicio a final y final a inicio.";
 choices[42][1] = "S&oacute;lo utiliza dependencias de inicio a final.";
 choices[42][2] = "S&oacute;lo utiliza dependencias de final a inicio.";
 choices[42][3] = "S&oacute;lo utiliza dependencias final a final.";
 answers[42] = choices[42][2];
 units[42] = "28";
 comments[42] = "Id Pregunta: 6148. ";


//  Id pregunta: 6263 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  El c&oacute;digo &eacute;tico definido por ISACA resultar&aacute; de aplicaci&oacute;n a:";
 choices[43]= new Array();
 choices[43][0] = "Solamente a las personas certificadas como CISA y CISM.";
 choices[43][1] = "A los profesionales certificados CISA y CISM y a los miembros de la ISACA.";
 choices[43][2] = "A los miembros de la ISACA, que obligatoriamente ser&aacute;n profesionales con las certificaciones CISA y CISM, en lo que se refiere a la aplicaci&oacute;n de las pr&aacute;cticas definidas dentro de COBIT.";
 choices[43][3] = "A todos los profesionales que trabajen realizando auditor&iacute;as de sistemas de informaci&oacute;n y que para ello empleen como referencia los manuales del COBIT.";
 answers[43] = choices[43][1];
 units[43] = "31";
 comments[43] = "Id Pregunta: 6263. ";


//  Id pregunta: 6369 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  &iquest;A qui&eacute;n corresponde, de acuerdo al Esquema Nacional de Seguridad, elaborar las Gu&iacute;as de Seguridad?";
 choices[44]= new Array();
 choices[44][0] = "A la Secretaria de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n (SETSI)";
 choices[44][1] = "Al Instituto Nacional de Tecnolog&iacute;as de la Comunicaci&oacute;n (INTECO)";
 choices[44][2] = "Al Instituto Nacional de Administraci&oacute;n P&uacute;blica (INAP)";
 choices[44][3] = "Al Centro Criptol&oacute;gico Nacional (CCN)";
 answers[44] = choices[44][3];
 units[44] = "43";
 comments[44] = "Id Pregunta: 6369. Art&iacute;culo 29 ENS. Serie de gu&iacute;as CCN-STIC 800.";


//  Id pregunta: 6382 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  Las normas t&eacute;cnicas de interoperabilidad:";
 choices[45]= new Array();
 choices[45][0] = "Las aprobar&aacute; el Ministerio de la Presidencia, a propuesta del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; mediante Resoluci&oacute;n de la Secretaria de Estado para la Funci&oacute;n P&uacute;blica.";
 choices[45][1] = "Las aprobar&aacute;  la Secretaria de Estado para la Funci&oacute;n P&uacute;blica, a propuesta del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; el Ministerio de la Presidencia mediante Orden Ministerial.";
 choices[45][2] = "Las aprobar&aacute; el Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; mediante Resoluci&oacute;n de la Secretaria de Estado para la Funci&oacute;n P&uacute;blica.";
 choices[45][3] = "Las aprobar&aacute; el Ministerio de la Presidencia, a propuesta del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; mediante Real Decreto.";
 answers[45] = choices[45][0];
 units[45] = "43";
 comments[45] = "Id Pregunta: 6382. Disposici&oacute;n adicional primera ENI";


//  Id pregunta: 6395 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes medios no ser&iacute;a valido, en ning&uacute;n caso, para la pr&aacute;ctica de notificaciones por medios electr&oacute;nicos, en los &oacute;rganos y organismos p&uacute;blicos de la Administraci&oacute;n General del Estado, de acuerdo al RD 1671/2009?";
 choices[46]= new Array();
 choices[46][0] = "Direcci&oacute;n electr&oacute;nica habilitada";
 choices[46][1] = "Comparecencia electr&oacute;nica en la sede";
 choices[46][2] = "Sistema de correo electr&oacute;nico con acuse de recibo que deje constancia de la recepci&oacute;n";
 choices[46][3] = "Todos los anteriores son v&aacute;lidos";
 answers[46] = choices[46][3];
 units[46] = "43";
 comments[46] = "Id Pregunta: 6395. Art&iacute;culo 35 RD 1671/2009";


//  Id pregunta: 6416 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes no es un principio del WCAG 2.0?";
 choices[47]= new Array();
 choices[47][0] = "Perceptible";
 choices[47][1] = "Operable";
 choices[47][2] = "Robusto";
 choices[47][3] = "Usable";
 answers[47] = choices[47][3];
 units[47] = "39";
 comments[47] = "Id Pregunta: 6416. NULL";


//  Id pregunta: 6422 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  Proporcionar a los usuarios el tiempo suficiente para leer y usar el contenido es una pauta que corresponde, &iquest;a qu&eacute; principio de WCAG 2.0?";
 choices[48]= new Array();
 choices[48][0] = "Perceptible";
 choices[48][1] = "Operable";
 choices[48][2] = "Robusto";
 choices[48][3] = "Comprensible";
 answers[48] = choices[48][1];
 units[48] = "39";
 comments[48] = "Id Pregunta: 6422. NULL";


//  Id pregunta: 7312 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  La Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos (LAECSP), en su art&iacute;culo 42 establece que el esquema Nacional de Interoperabilidad y el Esquema Nacional de Seguridad se aprobar&aacute;n por:";
 choices[49]= new Array();
 choices[49][0] = "Real Decreto del Gobierno, a propuesta de la Conferencia Sectorial de Administraci&oacute;n P&uacute;blica y previo informe de la Comisi&oacute;n Nacional de Administraci&oacute;n Local";
 choices[49][1] = "Ley Org&aacute;nica, a propuesta de la Conferencia Sectorial de Administraci&oacute;n P&uacute;blica y previo informe de la Comisi&oacute;n Nacional de Administraci&oacute;n Local";
 choices[49][2] = "Real Decreto del Gobierno, a propuesta de la Comisi&oacute;n del Mercado de Telecomunicaciones y previo informe de la Comisi&oacute;n Nacional de Administraci&oacute;n Local";
 choices[49][3] = "Ley Org&aacute;nica, a propuesta de la Comisi&oacute;n del Mercado de Telecomunicaciones y previo informe de la Comisi&oacute;n Nacional de Administraci&oacute;n Local";
 answers[49] = choices[49][0];
 units[49] = "44";
 comments[49] = "Id Pregunta: 7312. NULL";


//  Id pregunta: 7354 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  Se&ntilde;ale la CORRECTA:";
 choices[50]= new Array();
 choices[50][0] = "En un criterio a minimizar, el umbral de saciedad ser&aacute; menor o igual al nivel de satisfacci&oacute;n";
 choices[50][1] = "En un criterio a maximizar, el umbral de saciedad ser&aacute; menor o igual al nivel de satisfacci&oacute;n";
 choices[50][2] = "Es obligatorio establecer un umbral de saciedad";
 choices[50][3] = "Todas son INCORRECTAS";
 answers[50] = choices[50][0];
 units[50] = "34";
 comments[50] = "Id Pregunta: 7354. NULL";


//  Id pregunta: 8264 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  La red SARA permite la comunicaci&oacute;n:";
 choices[51]= new Array();
 choices[51][0] = "S&oacute;lo entre organismos y ministerios de la Administraci&oacute;n General del Estado (AGE).";
 choices[51][1] = "S&oacute;lo entre la AGE y la Uni&oacute;n Europea.";
 choices[51][2] = "Entre la AGE, CC.AA. y entidades locales, as&iacute; como su conexi&oacute;n con instituciones europeas a trav&eacute;s de la red transeuropea eu-SARA.";
 choices[51][3] = "Entre la AGE, CC.AA. y entidades locales, as&iacute; como su conexi&oacute;n con instituciones europeas a trav&eacute;s de la red transeuropea sTESTA.";
 answers[51] = choices[51][3];
 units[51] = "43.44";
 comments[51] = "Id Pregunta: 8264. Examen TIC A1 2010";


//  Id pregunta: 8403 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  Indique cu&aacute;l NO es una de las condiciones que debe cumplir un documento electr&oacute;nico para ser considerado copia electr&oacute;nica aut&eacute;ntica:";
 choices[52]= new Array();
 choices[52][0] = "Que sea autorizada mediante firma electr&oacute;nica.";
 choices[52][1] = "Que incorpore un sello automatizado que refleje el car&aacute;cter de copia en la impresi&oacute;n del documento. ";
 choices[52][2] = "Que la copia sea obtenida conforme a las normas de competencia y procedimiento. ";
 choices[52][3] = "Que el documento electr&oacute;nico original se encuentre en poder de la Administraci&oacute;n.";
 answers[52] = choices[52][1];
 units[52] = "43";
 comments[52] = "Id Pregunta: 8403. Examen TIC A2 2010";


//  Id pregunta: 8429 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes ejes de actuaci&oacute;n no forma parte de los 5 ejes de actuaci&oacute;n definidos en el Plan Avanza 2?";
 choices[53]= new Array();
 choices[53][0] = "Eje Administraci&oacute;n Electr&oacute;nica";
 choices[53][1] = "Eje Capacitaci&oacute;n";
 choices[53][2] = "Eje Infraestructuras";
 choices[53][3] = "Eje Desarrollo del sector TIC";
 answers[53] = choices[53][0];
 units[53] = "30";
 comments[53] = "Id Pregunta: 8429. ";


//  Id pregunta: 8748 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  Un ciudadano quiere remitir un escrito con una sugerencia de servicio a un organismo con oficinas de atenci&oacute;n al p&uacute;blico, &iquest;est&aacute; contemplada en la Ley 11/2007, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos, LAECSP, la posibilidad de que remita ese escrito, con un formato libre, a trav&eacute;s del registro electr&oacute;nico del organismo destinatario del mismo?";
 choices[54]= new Array();
 choices[54][0] = "Si, est&aacute; prevista tal posibilidad para cualquier solicitud, escrito o comunicaci&oacute;n dirigida a cualquier &oacute;rgano o entidad del &aacute;mbito de la administraci&oacute;n titular del registro";
 choices[54][1] = "No, porque s&oacute;lo se prev&eacute; la recepci&oacute;n de documentos normalizados, que est&eacute;n predeterminados en la normativa de creaci&oacute;n del registro, nunca un escrito no normalizado como el del enunciado";
 choices[54][2] = "Se prev&eacute; tal recepci&oacute;n, pero con car&aacute;cter informativo &uacute;nicamente, debiendo complementar el envi&oacute; con el escrito en papel, a trav&eacute;s de un registro f&iacute;sico, en un plazo definido en la normativa de desarrollo";
 choices[54][3] = "S&iacute;, porque cumple con el requisito indispensable de tratarse del registro del organismo destinatario del registro";
 answers[54] = choices[54][0];
 units[54] = "43";
 comments[54] = "Id Pregunta: 8748. Examen TIC A2 2010 interna";


//  Id pregunta: 8749 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  Un organismo est&aacute; evaluando la posibilidad de obligar al uso exclusivo de medios electr&oacute;nicos a las personas Jur&iacute;dicas, cuando se comuniquen con el mismo, &iquest;podr&iacute;a hacerlo?";
 choices[55]= new Array();
 choices[55][0] = "No, en ning&uacute;n caso, los medios electr&oacute;nicos siempre ser&aacute;n opcionales, aunque puedan ser preferentes";
 choices[55][1] = "Podr&aacute; hacerlo s&oacute;lo si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad";
 choices[55][2] = "Si, siempre para el caso de personas jur&iacute;dicas, eliminando la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, LAECSP. cualquier requisito normativo previo";
 choices[55][3] = "Podr&aacute; hacerlo contando siempre con el consentimiento del interesado, si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad.";
 answers[55] = choices[55][1];
 units[55] = "43";
 comments[55] = "Id Pregunta: 8749. Examen TIC A2 2010 interna";


//  Id pregunta: 9034 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  Indique cu&aacute;l no es un principios b&aacute;sico seg&uacute;n el RD 3/2010.";
 choices[56]= new Array();
 choices[56][0] = "Prevenci&oacute;n, reactivaci&oacute;n y revisi&oacute;n";
 choices[56][1] = "Seguridad Integral";
 choices[56][2] = "Reevaluaci&oacute;n peri&oacute;dica";
 choices[56][3] = "L&iacute;neas de defensa";
 answers[56] = choices[56][0];
 units[56] = "43";
 comments[56] = "Id Pregunta: 9034. ";


//  Id pregunta: 9281 AÃ±o de creación de pregunta: 2013-01-01
 questions[57]= "58)  Se&ntilde;ale la afirmaci&oacute;n FALSA sobre el Tribunal Administrativo Central de recursos contractuales";
 choices[57]= new Array();
 choices[57][0] = "Fue creado por la ley 34/2010.";
 choices[57][1] = "Est&aacute; adscrito al Ministerio de Justicia. ";
 choices[57][2] = "Conoce los recursos especiales en materia de contrataci&oacute;n.";
 choices[57][3] = "Todas son verdaderas. ";
 answers[57] = choices[57][1];
 units[57] = "41";
 comments[57] = "Id Pregunta: 9281. Est&aacute; adscrito al MINHAP";


//  Id pregunta: 9284 AÃ±o de creación de pregunta: 2013-01-01
 questions[58]= "59)  Adem&aacute;s de los pliegos, &iquest;cu&aacute;l de los siguientes documentos forma parte del expediente de contrataci&oacute;n?";
 choices[58]= new Array();
 choices[58][0] = "Certificado de la existencia de cr&eacute;dito. ";
 choices[58][1] = "Fiscalizaci&oacute;n de la intervenci&oacute;n.";
 choices[58][2] = "Aprobaci&oacute;n del gasto. ";
 choices[58][3] = "Todos los anteriores.";
 answers[58] = choices[58][3];
 units[58] = "41";
 comments[58] = "Id Pregunta: 9284. ";


//  Id pregunta: 9294 AÃ±o de creación de pregunta: 2013-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes no es una clave para asegurar la eficacia de los planes de continuidad seg&uacute;n la norma ISO 17799?";
 choices[59]= new Array();
 choices[59][0] = "Probar las copias de seguridad.";
 choices[59][1] = "Separaci&oacute;n l&oacute;gica de las copias de seguridad.";
 choices[59][2] = "No descartar amenazas.";
 choices[59][3] = "La ISO 17799 no define claves sino dominios de control.";
 answers[59] = choices[59][1];
 units[59] = "32";
 comments[59] = "Id Pregunta: 9294. ";


//  Id pregunta: 9300 AÃ±o de creación de pregunta: 2013-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes no es un tipo de control?.";
 choices[60]= new Array();
 choices[60][0] = "Preventivo.";
 choices[60][1] = "Detectivo.";
 choices[60][2] = "Cognitivo.";
 choices[60][3] = "Todos los anteriores lo son.";
 answers[60] = choices[60][2];
 units[60] = "32";
 comments[60] = "Id Pregunta: 9300. ";


//  Id pregunta: 9308 AÃ±o de creación de pregunta: 2013-01-01
 questions[61]= "62)  Cu&aacute;l de las siguientes afirmaciones es falsa";
 choices[61]= new Array();
 choices[61][0] = "Un control de desarrollo es el que comprueba que el resultado obtenido concuerda con las especificaciones iniciales.";
 choices[61][1] = "Un control de proceso asegura que la explotaci&oacute;n se realiza con las versiones adecuadas de los programas y de los datos.";
 choices[61][2] = "Un control de continuaci&oacute;n determina que se evita la p&eacute;rdida o corrupci&oacute;n de informaci&oacute;n efectuando las salvaguardas y recuperaciones necesarias.";
 choices[61][3] = "Un control de configuraci&oacute;n asegura que la explotaci&oacute;n se realiza con las versiones adecuadas de los programas y de los datos.";
 answers[61] = choices[61][3];
 units[61] = "31";
 comments[61] = "Id Pregunta: 9308. ";


//  Id pregunta: 9376 AÃ±o de creación de pregunta: 2013-01-01
 questions[62]= "63)  En la Teor&iacute;a Decisi&oacute;n Multicriterio Discreta, se&ntilde;ale qu&eacute; m&eacute;todo obtiene como resultado un subconjunto de alternativas aceptables";
 choices[62]= new Array();
 choices[62][0] = "M&eacute;todos de concordancia";
 choices[62][1] = "M&eacute;todos basados en permutaciones";
 choices[62][2] = "M&eacute;todos basados en la ponderaci&oacute;n lineal";
 choices[62][3] = "M&eacute;todo T.O.P.S.I.S.";
 answers[62] = choices[62][0];
 units[62] = "34";
 comments[62] = "Id Pregunta: 9376. ";


//  Id pregunta: 9406 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  Cu&aacute;l es el modelo de organizaci&oacute;n TIC &oacute;ptimo";
 choices[63]= new Array();
 choices[63][0] = "La estructura matricial con dise&ntilde;o plano";
 choices[63][1] = "La estructura funcional apuntada";
 choices[63][2] = "La estructura matricial con orientaci&oacute;n a staff";
 choices[63][3] = "Aquel que permita en cada caso conseguir los objetivos del negocio";
 answers[63] = choices[63][3];
 units[63] = "26";
 comments[63] = "Id Pregunta: 9406. ";


//  Id pregunta: 9411 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  Cu&aacute;l de las siguientes siguientes afirmaciones relativas a las organizaciones TIC es incorrecta?";
 choices[64]= new Array();
 choices[64][0] = "El &aacute;rea de log&iacute;stica no siempre pertenece a la organizaci&oacute;n TIC";
 choices[64][1] = "Existe una tendencia en el &aacute;rea de desarrollo y mantenimiento hacia el modelo de organizaci&oacute;n proyecto-funcional";
 choices[64][2] = "El sistema de funcionamiento formal se caracteriza por un elevado n&uacute;mero de niveles jer&aacute;rquicos";
 choices[64][3] = "El CAU suministra informaci&oacute;n a los usuarios para resolver incidencias";
 answers[64] = choices[64][2];
 units[64] = "26";
 comments[64] = "Id Pregunta: 9411. ";


//  Id pregunta: 9735 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  Seg&uacute;n el Real Decreto 1720/2007, &iquest;cu&aacute;l de las siguientes declaraciones es correcta respecto a pruebas en sistemas con datos de car&aacute;cter personal?";
 choices[65]= new Array();
 choices[65][0] = "Queda terminantemente prohibida la realizaci&oacute;n de pruebas en los sistemas de informaci&oacute;n que traten datos reales en ficheros con datos de car&aacute;cter personal.";
 choices[65][1] = "No existen limitaciones para usar datos reales en ficheros de car&aacute;cter personal si se utilizan para las pruebas anteriores a la implantaci&oacute;n o modificaci&oacute;n de los sistemas de informaci&oacute;n.";
 choices[65][2] = "Las pruebas anteriores a la implantaci&oacute;n o modificaci&oacute;n de los sistemas de informaci&oacute;n que traten ficheros con datos de car&aacute;cter personal no se realizar&aacute;n con datos reales, salvo que se asegure el nivel de seguridad correspondiente al tratamiento realizado y se anote su realizaci&oacute;n en el documento de seguridad.";
 choices[65][3] = "Si para la validaci&oacute;n de un sistema de informaci&oacute;n, es necesario realizar pruebas que traten ficheros con datos de car&aacute;cter personal reales, se proceder&aacute; posteriormente al borrado de dichos ficheros para cumplir la normativa legal vigente.";
 answers[65] = choices[65][2];
 units[65] = "29";
 comments[65] = "Id Pregunta: 9735. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9761 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  En el &aacute;mbito del sector p&uacute;blico estatal, las solicitudes de contratos basados en el acuerdo marco o de adjudicaciones de contratos realizadas en el marco del sistema din&aacute;mico de contrataci&oacute;n se tramitar&aacute;n:";
 choices[66]= new Array();
 choices[66][0] = "De la forma tradicional o a trav&eacute;s de la aplicaci&oacute;n CONECTA-CENTRALIZACI&Oacute;N";
 choices[66][1] = "Exclusivamente, a trav&eacute;s de la aplicaci&oacute;n inform&aacute;tica CONECTA CENTRALIZACI&Oacute;N a partir del 1 de enero de 2014.";
 choices[66][2] = "Mediante solicitud por escrito a la Direcci&oacute;n General de Patrimonio.";
 choices[66][3] = "Ninguna de las anteriores.";
 answers[66] = choices[66][1];
 units[66] = "41";
 comments[66] = "Id Pregunta: 9761. EHA/1049/2008, Disposici&oacute;n adicional &uacute;nica. A&ntilde;adida por la orden HAP/19/2014";


//  Id pregunta: 9768 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Seg&uacute;n la Ley 37/2007 de Reutilizaci&oacute;n de Informaci&oacute;n del Sector P&uacute;blico, son infracciones muy graves:";
 choices[67]= new Array();
 choices[67][0] = "La reutilizaci&oacute;n de documentaci&oacute;n sin haber obtenido la correspondiente licencia en los casos en que &eacute;sta sea requerida.";
 choices[67][1] = "La reutilizaci&oacute;n de la informaci&oacute;n para una finalidad distinta a la que se concedi&oacute;.";
 choices[67][2] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia.";
 choices[67][3] = "La ausencia de cita de la fuente.";
 answers[67] = choices[67][2];
 units[67] = "22";
 comments[67] = "Id Pregunta: 9768. ";


//  Id pregunta: 9769 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  Seg&uacute;n la Ley 37/2007 de Reutilizaci&oacute;n de Informaci&oacute;n del Sector P&uacute;blico, son infracciones muy graves:";
 choices[68]= new Array();
 choices[68][0] = "La reutilizaci&oacute;n de documentaci&oacute;n sin haber obtenido la correspondiente licencia en los casos en que &eacute;sta sea requerida.";
 choices[68][1] = "La reutilizaci&oacute;n de la informaci&oacute;n para una finalidad distinta a la que se concedi&oacute;.";
 choices[68][2] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia.";
 choices[68][3] = "La ausencia de cita de la fuente.";
 answers[68] = choices[68][2];
 units[68] = "22";
 comments[68] = "Id Pregunta: 9769. ";


//  Id pregunta: 9805 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  En el supuesto de documentos emitidos originalmente en soporte papel de los que se hayan efectuado copias electr&oacute;nicas, de acuerdo a lo dispuesto en el art 30 de la ley 11/2007, se podr&aacute;:";
 choices[69]= new Array();
 choices[69][0] = "Destruir los originales en los t&eacute;rminos y condiciones que por cada Administraci&oacute;n P&uacute;blica se establezcan. ";
 choices[69][1] = "Destruir los originales, en cualquier caso, al cabo de cinco a&ntilde;os de su presentaci&oacute;n. ";
 choices[69][2] = "Nunca se podr&aacute;n destruir, con car&aacute;cter general para todo el Estado. ";
 choices[69][3] = "Destruir los originales, previo consentimiento del interesado. ";
 answers[69] = choices[69][0];
 units[69] = "43";
 comments[69] = "Id Pregunta: 9805. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9874 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  Un trabajador asalariado crea un programa de ordenador en el ejercicio de sus funciones laborales. De acuerdo con el RDL 1/1996 de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, la titularidad de los derechos de explotaci&oacute;n del programa corresponder&aacute;";
 choices[70]= new Array();
 choices[70][0] = "al autor del programa.";
 choices[70][1] = "al autor y al empresario, conjuntamente, salvo pacto en contrario.";
 choices[70][2] = "al autor en cuanto al programa objeto, pero no respecto al programa fuente.";
 choices[70][3] = "exclusivamente al empresario, salvo pacto en contrario.";
 answers[70] = choices[70][3];
 units[70] = "36";
 comments[70] = "Id Pregunta: 9874. TIC A1, Examen 2013";


//  Id pregunta: 10254 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  En cuanto al tratamiento de  datos personales de menores";
 choices[71]= new Array();
 choices[71][0] = "La legislaci&oacute;n no hace distinciones referentes a la edad de la persona de la que se recaban los datos";
 choices[71][1] = "Con car&aacute;cter general, s&oacute;lo pueden recabarse datos de personas mayores de edad (18 a&ntilde;os)";
 choices[71][2] = "Con car&aacute;cter general, pueden recabarse datos de menores de edad (18 a&ntilde;os) s&oacute;lo con consentimiento de sus padres o tutores";
 choices[71][3] = "Con car&aacute;cter general, pueden recabarse datos de menores de 14 a&ntilde;os s&oacute;lo con consentimiento de sus padres o tutores";
 answers[71] = choices[71][3];
 units[71] = "29";
 comments[71] = "Id Pregunta: 10254. Art&iacute;culo 13.1 del RD 1720/2007";


//  Id pregunta: 10258 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  En caso de solicitarse la rectificaci&oacute;n de unos datos de car&aacute;cter personal a un responsable del tratamiento que haya realizado una cesi&oacute;n de dichos datos a un tercero";
 choices[72]= new Array();
 choices[72][0] = "No pueden rectificarse datos de car&aacute;cter personal que hayan sido objeto de cesi&oacute;n a terceros";
 choices[72][1] = "El responsable deber&aacute; contestar al interesado y proceder a la rectificaci&oacute;n, no siendo necesario que comunique la misma al cesionario";
 choices[72][2] = "El responsable deber&aacute; contestar al interesado,  proceder a la rectificaci&oacute;n y comunicarla al cesionario para que tambi&eacute;n la realice. El cesionario contestar&aacute; tambi&eacute;n al interesado";
 choices[72][3] = "El responsable deber&aacute; contestar al interesado,  proceder a la rectificaci&oacute;n y comunicarla al cesionario para que tambi&eacute;n la realice. El cesionario no tiene obligaci&oacute;n de contestar al interesado";
 answers[72] = choices[72][3];
 units[72] = "29";
 comments[72] = "Id Pregunta: 10258. Art&iacute;culo 32.3 del RD 1720/2007";


//  Id pregunta: 10342 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  Seg&uacute;n lo recogido en el Texto Refundido de la Ley de propiedad Intelectual, se&ntilde;ale la respuesta incorrecta:";
 choices[73]= new Array();
 choices[73][0] = "La protecci&oacute;n de un programa de ordenador comprende tambi&eacute;n su documentaci&oacute;n preparatoria, documentaci&oacute;n t&eacute;cnica y manuales de uso";
 choices[73][1] = "La protecci&oacute;n de un programa de ordenador se extiende a cualesquiera versiones sucesivas del programa, as&iacute; como a los programas derivados";
 choices[73][2] = "La protecci&oacute;n mediante los derechos de autor incluye las ideas y principios en los que se basan cualquiera de los elementos de un programa de ordenador incluidos los que sirven de fundamento a sus interfaces";
 choices[73][3] = "Si un programa forma parte de una patente, tambi&eacute;n estar&aacute; protegido por la Ley de Propiedad Industrial";
 answers[73] = choices[73][2];
 units[73] = "36";
 comments[73] = "Id Pregunta: 10342. Consultar Art. 96 del Real Decreto Legislativo 1/1996";


//  Id pregunta: 10345 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  &iquest;A qu&eacute; organismo est&aacute; adscrita la Comisi&oacute;n de Propiedad Intelectual?";
 choices[74]= new Array();
 choices[74][0] = "Ministerio de la Presidencia";
 choices[74][1] = "Ministerio de Educaci&oacute;n, Cultura y Deporte";
 choices[74][2] = "Ministerio de Industria";
 choices[74][3] = "Ministerio de Econom&iacute;a";
 answers[74] = choices[74][1];
 units[74] = "37";
 comments[74] = "Id Pregunta: 10345. La Comisi&oacute;n de Propiedad Intelectual es un &oacute;rgano colegiado de &aacute;mbito nacional adscrito a la Subdirecci&oacute;n General de Propiedad Intelectual del Ministerio de Educaci&oacute;n, Cultura y Deporte";


//  Id pregunta: 10350 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  En relaci&oacute;n con las pautas de accesibilidad WCAG 2.0, indique la respuesta correcta:";
 choices[75]= new Array();
 choices[75][0] = "Para cumplir nivel A, las p&aacute;ginas no pueden contener ning&uacute;n elemento que destelle m&aacute;s de 3 veces por segundo";
 choices[75][1] = "Lo anterior es cierto, pero para nivel AA";
 choices[75][2] = "Lo anterior es cierto, pero para nivel AAA";
 choices[75][3] = "Lo anterior es cierto, pero a&ntilde;adiendo que adem&aacute;s el destello debe estar por debajo del umbral de destello general y de rojo";
 answers[75] = choices[75][2];
 units[75] = "39";
 comments[75] = "Id Pregunta: 10350. Consultar WCAG Pauta 2.3 Convulsiones";


//  Id pregunta: 10358 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de los siguientes no es un principio del Marco Europeo de Interopeabilidad?";
 choices[76]= new Array();
 choices[76][0] = "Multiling&uuml;ismo";
 choices[76][1] = "Accesibilidad";
 choices[76][2] = "Empleo de soluciones de software libre";
 choices[76][3] = "Uso de est&aacute;ndares abiertos";
 answers[76] = choices[76][2];
 units[76] = "40";
 comments[76] = "Id Pregunta: 10358. Los ocho principios que define el Marco Europeo de Interoperabilidad son: Accesibilidad, Multiling&uuml;ismo, Seguridad, Protecci&oacute;n de datos de car&aacute;cter personal, Subsidiariedad, Uso de est&aacute;ndares abiertos, Valorar los beneficios de software de fuentes abierta";


//  Id pregunta: 10359 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  En relaci&oacute;n con los sistemas abiertos, se&ntilde;ale la respuesta err&oacute;nea:";
 choices[77]= new Array();
 choices[77][0] = "Un sistema abierto es aquel cuyas especificaciones est&aacute;n aprobadas, publicadas y respaldadas por organismos independientes de normalizaci&oacute;n";
 choices[77][1] = "Un sistema abierto es aquel capaz de interconectarse con otros de acuerdo con unas normas establecidas";
 choices[77][2] = "Los sistemas abiertos se caracterizan por su interopeabilidad, portabilidad y escalabilidad";
 choices[77][3] = "Los sistemas abiertos deben hacer uso de est&aacute;ndares abiertos";
 answers[77] = choices[77][3];
 units[77] = "40";
 comments[77] = "Id Pregunta: 10359. Un sistema puede ser abierto pero no hacer uso de est&aacute;ndares abiertos";


//  Id pregunta: 10368 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  La contrataci&oacute;n de un proyecto de tecnolog&iacute;as de la informaci&oacute;n en un ministerio se ha realizado incluyendo un Acuerdo de Nivel de Servicio con una fecha cerrada de entrega de los trabajos. El contratista se va a demorar por problemas con sus recursos humanos asignados al proyecto. El Jefe de Proyecto debe:";
 choices[78]= new Array();
 choices[78][0] = "Proporcionar los recursos humanos, reclut&aacute;ndolos si es preciso del personal del ministerio, que necesita el contratista para que acabe a tiempo el proyecto.";
 choices[78][1] = "Informar a los interesados del proyecto de la demora del proyecto y el sobrecoste que tendr&aacute; el mismo sobre el precio contratado.";
 choices[78][2] = "Disponer de m&aacute;s fondos para pagar al contratista a fin de que acabe antes el proyecto";
 choices[78][3] = "Informar a las partes interesadas del proyecto de la demora del mismo por causa del contratista para la gesti&oacute;n del riesgo asociado, y a los responsables del expediente de contrataci&oacute;n de la penalizaci&oacute;n a aplicar al contratista por no finalizar en tiempo.";
 answers[78] = choices[78][3];
 units[78] = "28";
 comments[78] = "Id Pregunta: 10368. ";


//  Id pregunta: 10369 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  En relaci&oacute;n con los acuerdos de nivel de servicio, los m&aacute;s importante de cara al seguimiento de los contratos que subscribe la Administraci&oacute;n con los contratistas es que:";
 choices[79]= new Array();
 choices[79][0] = "Los Sindicatos revisen las cla&uacute;sulas del ANS";
 choices[79][1] = "El Contratista proporcione informaci&oacute;n mensual sobre las m&eacute;tricas del ANS";
 choices[79][2] = "Se imponga penalizaciones ejemplares cuando se detecte un incumplimiento en el ANS";
 choices[79][3] = "La Administraci&oacute;n disponga de m&eacute;tricas sobre los puntos acordados en el ANS que puedan ser evaluadas sin la intervenci&oacute;n del propio contratista, para evitar el fraude en dichas evaluaciones";
 answers[79] = choices[79][3];
 units[79] = "28";
 comments[79] = "Id Pregunta: 10369. ";


//  Id pregunta: 10553 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de las siguientes satisface una autenticaci&oacute;n de usuario de dos factores?";
 choices[80]= new Array();
 choices[80][0] = "Escaneo de iris y de huella dactilar";
 choices[80][1] = "Identificador de usuario y sistema GPS";
 choices[80][2] = "Smartcard que requiere un c&oacute;digo PIN";
 choices[80][3] = "Identificador de usuario m&aacute;s contrase&ntilde;a";
 answers[80] = choices[80][2];
 units[80] = "31, 32, 33";
 comments[80] = "Id Pregunta: 10553. Algo que  tienes (smartcard) + algo que conoces (c&oacute;digo PIN)";


//  Id pregunta: 10573 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  &iquest;A qu&eacute; corresponden las siglas STORK?";
 choices[81]= new Array();
 choices[81][0] = "Secure Transport Over bRoad toKens";
 choices[81][1] = "Security idenTity acrOss boRders linKed";
 choices[81][2] = "Safe idenTity fOr Roaming Knowledge";
 choices[81][3] = "Safe noTes stOring encRypted Keys";
 answers[81] = choices[81][1];
 units[81] = "44";
 comments[81] = "Id Pregunta: 10573. ";


//  Id pregunta: 10576 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Elija la respuesta incorrecta:";
 choices[82]= new Array();
 choices[82][0] = "La utilizaci&oacute;n de infraestructuras y servicios comunes proporciona mayor agilidad en el desarrollo y despliegue de servicios.";
 choices[82][1] = "Las Administraciones P&uacute;blicas pueden utilizar cualquier tecnolog&iacute;a de la informaci&oacute;n en sus relaciones con los ciudadanos.";
 choices[82][2] = "El Comit&eacute; Sectorial de la Administraci&oacute;n Electr&oacute;nica asegura la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[82][3] = "Existe un directorio general de aplicaciones para su reutilizaci&oacute;n en la AGE.";
 answers[82] = choices[82][1];
 units[82] = "44";
 comments[82] = "Id Pregunta: 10576. Art&iacute;culo 41, Ley 11/2007: deben evitar discriminaci&oacute;n.";


//  Id pregunta: 10577 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  El Esquema Nacional de Interoperabilidad:";
 choices[83]= new Array();
 choices[83][0] = "Incluye criterios y recomendaciones de seguridad.";
 choices[83][1] = "Es parte del Esquema Nacional de Seguridad.";
 choices[83][2] = "Fue elaborado por la Conferencia Sectorial de Administraci&oacute;n P&uacute;blica.";
 choices[83][3] = "Considera la utilizaci&oacute;n de est&aacute;ndares cerrados o de uso limitado por los ciudadanos.";
 answers[83] = choices[83][0];
 units[83] = "44";
 comments[83] = "Id Pregunta: 10577. Art&iacute;culo 42, Ley 11/2007.";


//  Id pregunta: 10678 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece la obligatoriedad de relaci&oacute;n con las AAPP a trav&eacute;s de medios electr&oacute;nicos para:";
 choices[84]= new Array();
 choices[84][0] = "Personas jur&iacute;dicas.";
 choices[84][1] = "Entidades sin personalidad jur&iacute;dica.";
 choices[84][2] = "Notarios y registradores.";
 choices[84][3] = "Todas las anteriores.";
 answers[84] = choices[84][3];
 units[84] = "30";
 comments[84] = "Id Pregunta: 10678. ";


//  Id pregunta: 10680 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  En qu&eacute; T&iacute;tulo de la Ley 39/2015 se recogen los &quot;Derechos de las personas en sus relaciones con las Administraciones P&uacute;blicas.&quot;";
 choices[85]= new Array();
 choices[85][0] = "T&iacute;tulo I";
 choices[85][1] = "T&iacute;tulo II";
 choices[85][2] = "T&iacute;tulo III";
 choices[85][3] = "T&iacute;tulo IV";
 answers[85] = choices[85][1];
 units[85] = "30";
 comments[85] = "Id Pregunta: 10680. ";


//  Id pregunta: 10700 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de los siguientes no es considerado un componente de un documento electr&oacute;nico seg&uacute;n la NTI de Documento Electr&oacute;nico?";
 choices[86]= new Array();
 choices[86][0] = "Encabezado.";
 choices[86][1] = "Contenido.";
 choices[86][2] = "Firma electr&oacute;nica.";
 choices[86][3] = "Metadatos.";
 answers[86] = choices[86][0];
 units[86] = "43";
 comments[86] = "Id Pregunta: 10700. ";


//  Id pregunta: 10708 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Qu&eacute; dato/s sobre los documentos electr&oacute;nicos no se incluyen en el &iacute;ndice electr&oacute;nico?";
 choices[87]= new Array();
 choices[87][0] = "Identificador del documento.";
 choices[87][1] = "El propio documento electr&oacute;nico.";
 choices[87][2] = "La huella digital del documento.";
 choices[87][3] = "La funci&oacute;n resumen utlizada para la obtenci&oacute;n de la huella digital.";
 answers[87] = choices[87][1];
 units[87] = "43";
 comments[87] = "Id Pregunta: 10708. ";


//  Id pregunta: 10781 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  En el Real Decreto 3/2010, Esquema Nacional de Seguridad, se define como &quot;la propiedad o caracter&iacute;stica consistente en que las actuaciones de una entidad pueden ser imputadas exclusivamente a dicha entidad&quot; a la:";
 choices[88]= new Array();
 choices[88][0] = "Confidencialidad.";
 choices[88][1] = "Integridad.";
 choices[88][2] = "Autenticidad.";
 choices[88][3] = "Trazabilidad.";
 answers[88] = choices[88][3];
 units[88] = "43";
 comments[88] = "Id Pregunta: 10781. Examen GSI 2014";


//  Id pregunta: 10935 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  En relaci&oacute;n con la contrataci&oacute;n en materia TIC, es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n de la AGE:";
 choices[89]= new Array();
 choices[89][0] = "Informar con car&aacute;cter facultativo la declaraci&oacute;n de contrataci&oacute;n centralizada de los contratos de suministros, obras y servicios en materia TIC.";
 choices[89][1] = "Asesorar a los &oacute;rganos competentes en materia de contrataci&oacute;n, en los criterios y directrices para la agregaci&oacute;n y planificaci&oacute;n de la demanda TIC que dichos &oacute;rganos elaboren.";
 choices[89][2] = "Realizar las actuaciones necesarias para una mayor eficiencia econ&oacute;mica, normalizando una red de clientes de cada Departamento Ministerial frente a proveedores externos.";
 choices[89][3] = "Realizar el informe t&eacute;cnico preceptivo de la memoria y los pliegos de prescripciones t&eacute;cnicas de los convenios de colaboraci&oacute;n y encomiendas de gesti&oacute;n que incluyan la prestaci&oacute;n de servicios en materia de TIC de la AGE.";
 answers[89] = choices[89][3];
 units[89] = "41";
 comments[89] = "Id Pregunta: 10935. TIC A1 AGE 2014";


//  Id pregunta: 11095 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Seleccione la respuesta falsa respecto al m&eacute;todo de Diagramaci&oacute;n con Flechas (ADM)";
 choices[90]= new Array();
 choices[90][0] = "Es un m&eacute;todo para crear un diagrama de red del cronograma de un proyecto";
 choices[90][1] = "Utiliza Flechas para representar las actividades que se conectan en nodos";
 choices[90][2] = "Todas las actividades tienen que tener un valor de duraci&oacute;n mayor que cero";
 choices[90][3] = "Permite planificar qu&eacute; actividades dependen de la finalizaci&oacute;n de otras en un proyecto.";
 answers[90] = choices[90][2];
 units[90] = "28";
 comments[90] = "Id Pregunta: 11095. ";


//  Id pregunta: 11100 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes es un principio b&aacute;sico del Esquema Nacional de Seguridad?";
 choices[91]= new Array();
 choices[91][0] = "Proporcionalidad";
 choices[91][1] = "Respeto al derecho de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[91][2] = "Derecho a la garant&iacute;a de seguridad y confidencialidad";
 choices[91][3] = "Gesti&oacute;n de riesgos";
 answers[91] = choices[91][3];
 units[91] = "30";
 comments[91] = "Id Pregunta: 11100. ";


//  Id pregunta: 11121 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;En qu&eacute; situaci&oacute;n pueden las AAPP establecer la obligatoriedad de comunicarse con ellas utilizando s&oacute;lo medios electr&oacute;nicos?";
 choices[92]= new Array();
 choices[92][0] = "Nunca";
 choices[92][1] = "&Uacute;nicamente cuando los interesados sean personas jur&iacute;dicas";
 choices[92][2] = "Cuando los interesados sean personas jur&iacute;dicas o colectivos de personas f&iacute;sicas que tengan garantizado el acceso y disponibilidad de los medios tecnol&oacute;gicos precisos";
 choices[92][3] = "En todo caso";
 answers[92] = choices[92][2];
 units[92] = "43";
 comments[92] = "Id Pregunta: 11121. ";


//  Id pregunta: 11212 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;C&oacute;mo se denomina el plan espa&ntilde;ol que hace referencia al objetivo de mejorar la Administraci&oacute;n electr&oacute;nica seg&uacute;n la Agenda Digital Espa&ntilde;ola?";
 choices[93]= new Array();
 choices[93][0] = "Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la AGE";
 choices[93][1] = "Plan de Servicios P&uacute;blicos Digitales";
 choices[93][2] = "Los dos anteriores son verdaderos";
 choices[93][3] = "Todas las respuestas son falsas";
 answers[93] = choices[93][2];
 units[93] = "30";
 comments[93] = "Id Pregunta: 11212. ";


//  Id pregunta: 11241 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Sobre qu&eacute; actos un licitador puede interponer el recurso especial en materia de contrataci&oacute;n:";
 choices[94]= new Array();
 choices[94][0] = "&Uacute;nicamente los anuncios de licitaci&oacute;n y los pliegos de los contratos SARA.";
 choices[94][1] = "Los acuerdos de licitaci&oacute;n de cualquier contrato, sea o no SARA.";
 choices[94][2] = "Los anuncios de licitaci&oacute;n, los pliegos, los actos de tr&aacute;mite cualificados as&iacute; como los acuerdos de licitaci&oacute;n de los contratos SARA.";
 choices[94][3] = "Ninguna es verdadera.";
 answers[94] = choices[94][2];
 units[94] = "41";
 comments[94] = "Id Pregunta: 11241. ";


//  Id pregunta: 11341 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En cuanto a los derechos de autor&iacute;a de los programas de ordenador, se&ntilde;ale cu&aacute;l no se encuentra entre los derechos morales";
 choices[95]= new Array();
 choices[95][0] = "Derecho de Transformaci&oacute;n  ";
 choices[95][1] = "Derecho a decidir sobre la divulgaci&oacute;n";
 choices[95][2] = "Derecho a que se reconozca su autor&iacute;a";
 choices[95][3] = "Derecho a mantener la integridad de la obra";
 answers[95] = choices[95][0];
 units[95] = "36";
 comments[95] = "Id Pregunta: 11341. ";


//  Id pregunta: 11499 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n el Esquema Nacional de Seguridad, las Instrucciones T&eacute;cnicas de Seguridad ";
 choices[96]= new Array();
 choices[96][0] = "Son aspectos que pueden ser aplicados por parte de las Administraciones p&uacute;blicas";
 choices[96][1] = "Son aspectos que obligatoriamente deben ser aplicados por parte de las Administraciones P&uacute;blicas ";
 choices[96][2] = "Algunas Instrucciones de Seguridad son de aplicaci&oacute;n preceptiva y otras de aplicaci&oacute;n facultativa.";
 choices[96][3] = "Ninguna de las anteriores.";
 answers[96] = choices[96][1];
 units[96] = "43";
 comments[96] = "Id Pregunta: 11499. Instrucci&oacute;n t&eacute;cnica de seguridad introducido por la disp. Adicional 4&ordf; RD 951/2015 que modifica el ENS.";


//  Id pregunta: 11603 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  La soluci&oacute;n integral de registro para cualquier organismo p&uacute;blico, que cubre tanto la gesti&oacute;n de sus oficinas de registro de entrada/salida como la recepci&oacute;n y env&iacute;o de registros en las unidades tramitadoras destinatarias de la documentaci&oacute;n sellama:";
 choices[97]= new Array();
 choices[97][0] = "ORVE";
 choices[97][1] = "SIR";
 choices[97][2] = "GEISER";
 choices[97][3] = "Registro Electr&oacute;nico Com&uacute;n";
 answers[97] = choices[97][2];
 units[97] = "44";
 comments[97] = "Id Pregunta: 11603. ";


//  Id pregunta: 11751 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  La competencia para la imposici&oacute;n de sanciones seg&uacute;n la Ley de Transparencia,  corresponder&aacute;:";
 choices[98]= new Array();
 choices[98][0] = "Al Ministro de Hacienda y Administraciones P&uacute;blicas cuando el responsable sea un alto cargo de las Administraciones Publicas.";
 choices[98][1] = "Al Consejo de Ministros cuando el alto cargo tenga la condici&oacute;n de miembro del Gobierno o Secretario de Estado.";
 choices[98][2] = "Al Consejo de Ministros cuando el responsable sea un alto cargo de la Administraci&oacute;n General del Estado.";
 choices[98][3] = "Al Ministro de Hacienda y Administraciones P&uacute;blicas cuando el alto cargo tenga la condici&oacute;n de miembro del Gobierno o Secretario de Estado.";
 answers[98] = choices[98][1];
 units[98] = "41";
 comments[98] = "Id Pregunta: 11751. ";


//  Id pregunta: 11764 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Se ha publicado la Estrategia TIC?";
 choices[99]= new Array();
 choices[99][0] = "No";
 choices[99][1] = "No est&aacute; previsto";
 choices[99][2] = "Si, en septiembre de 2015.";
 choices[99][3] = "Si, en septiembre de 2014.";
 answers[99] = choices[99][2];
 units[99] = "43";
 comments[99] = "Id Pregunta: 11764. ";


