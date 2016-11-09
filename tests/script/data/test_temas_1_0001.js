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

//  Id pregunta: 5 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes no se considera un motivo para ordenar una auditor&iacute;a?:";
 choices[0]= new Array();
 choices[0][0] = "Para determinar el origen del malfuncionamiento de una aplicaci&oacute;n";
 choices[0][1] = "Para determinar el estado del sistema ante un cambio importante";
 choices[0][2] = "Para determinar cual es el motivo del malfuncionamiento del sistema";
 choices[0][3] = "Para determinar si los proyectos transcurren seg&uacute;n lo establecido, en cuanto a recursos, objetivos etc";
 answers[0] = choices[0][0];
 units[0] = "31,32,33";
 comments[0] = "Id Pregunta: 5. ";


//  Id pregunta: 29 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las actuaciones siguientes corresponde a una auditor&iacute;a inform&aacute;tica?:";
 choices[1]= new Array();
 choices[1][0] = "Recomendar situaciones";
 choices[1][1] = "Planes estrat&eacute;gicos de seguridad";
 choices[1][2] = "Planes de aseguramiento de calidad";
 choices[1][3] = "Reorganizaci&oacute;n de los recursos humanos del departamento inform&aacute;tico";
 answers[1] = choices[1][0];
 units[1] = "31,32,33";
 comments[1] = "Id Pregunta: 29. ";


//  Id pregunta: 30 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de la auditor&iacute;a inform&aacute;tica es falsa?:";
 choices[2]= new Array();
 choices[2][0] = "La finalidad de la auditor&iacute;a inform&aacute;tica es emitir un juicio acerca del estado de los sistemas";
 choices[2][1] = "La auditor&iacute;a inform&aacute;tica llega siempre a una valoraci&oacute;n o diagn&oacute;stico final, positivo o negativo";
 choices[2][2] = "La auditor&iacute;a inform&aacute;tica propone acciones a realizar";
 choices[2][3] = "La auditor&iacute;a inform&aacute;tica analiza tanto la infraestructura f&iacute;sica y l&oacute;gica como la estructura organizativa";
 answers[2] = choices[2][1];
 units[2] = "31,32,33";
 comments[2] = "Id Pregunta: 30. ";


//  Id pregunta: 31 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a la auditor&iacute;a?:";
 choices[3]= new Array();
 choices[3][0] = "Independientemente del tipo de auditor&iacute;a inform&aacute;tica que pretenda realizarse, la finalidad &uacute;ltima es emitir un juicio acerca del estado de los sistemas";
 choices[3][1] = "Del fin de la auditor&iacute;a habr&aacute;n de obtenerse los medios y las acciones de investigaci&oacute;n que se estimen necesarios para su consecuci&oacute;n";
 choices[3][2] = "La auditor&iacute;a siempre recomendar&aacute; la toma de acciones correctivas, independientemente del examen de situaci&oacute;n realizado";
 choices[3][3] = "Cuando la tarea del auditor sea muy compleja, se llevar&aacute; a cabo una divisi&oacute;n de funciones de forma arborescente";
 answers[3] = choices[3][2];
 units[3] = "31,32,33";
 comments[3] = "Id Pregunta: 31. ";


//  Id pregunta: 40 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes respuestas referidas a las auditor&iacute;as de control de calidad es cierta?:";
 choices[4]= new Array();
 choices[4][0] = "Es un procedimiento habitual de control de calidad del software";
 choices[4][1] = "Es un procedimiento extraordinario al que se pueden someter los proyectos que tengan especial magnitud";
 choices[4][2] = "Su objetivo es proceder al refinamiento sucesivo en la definici&oacute;n de las especificaciones finales del proyecto";
 choices[4][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[4] = choices[4][1];
 units[4] = "31,32,33";
 comments[4] = "Id Pregunta: 40. ";


//  Id pregunta: 104 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Analizariamos los recursos de la organizaci&oacute;n...";
 choices[5]= new Array();
 choices[5][0] = "Cuando quisi&eacute;ramos realizar una programaci&oacute;n estrat&eacute;gica";
 choices[5][1] = "En la organizaci&oacute;n, para ver la forma de materializar la programaci&oacute;n";
 choices[5][2] = "Cuando ejecut&aacute;ramos una programaci&oacute;n, para determinar el costo";
 choices[5][3] = "Al realizar una valoraci&oacute;n de los que se ha consumido";
 answers[5] = choices[5][0];
 units[5] = "31,32,33";
 comments[5] = "Id Pregunta: 104. ";


//  Id pregunta: 120 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Dentro de los objetivos que se fijar&iacute;a una auditor&iacute;a sobre el grado de adecuaci&oacute;n de las herramientas de software utilizadas a la informaci&oacute;n gestionada, &iquest;cu&aacute;l de los siguientes considera que no ser&iacute;a relevante  obtener del estudio?:";
 choices[6]= new Array();
 choices[6][0] = "Fiabilidad t&eacute;cnica";
 choices[6][1] = "Cambio del modelo de datos utilizados";
 choices[6][2] = "Estudio de opini&oacute;n de los usuarios";
 choices[6][3] = "Facilidad de mantenimiento y expansi&oacute;n";
 answers[6] = choices[6][1];
 units[6] = "31,32,33";
 comments[6] = "Id Pregunta: 120. ";


//  Id pregunta: 122 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Desde el punto de vista de un auditor de seguridad indique cu&aacute;l de las siguientes premisas, sobre control interno de acceso l&oacute;gico, es inadecuada:";
 choices[7]= new Array();
 choices[7][0] = "El sistema debe obligar al usuario a cambiar de contrase&ntilde;a cada cierto tiempo";
 choices[7][1] = "El registro o log de acceso al sistema puede desactivarse a petici&oacute;n del responsable de seguridad";
 choices[7][2] = "Es conveniente que la autenticaci&oacute;n de entrada al sistema se haga una &uacute;nica vez";
 choices[7][3] = "El sistema debe rechazar el acceso a los usuarios despu&eacute;s de una serie de intentos fallidos";
 answers[7] = choices[7][1];
 units[7] = "31,32,33";
 comments[7] = "Id Pregunta: 122. ";


//  Id pregunta: 145 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El estudio de la informaci&oacute;n, su calidad, flujo y seguridad es caracter&iacute;stico de:";
 choices[8]= new Array();
 choices[8][0] = "La auditor&iacute;a inform&aacute;tica";
 choices[8][1] = "La planificaci&oacute;n estrat&eacute;gica";
 choices[8][2] = "La planificaci&oacute;n de capacidad del sistema";
 choices[8][3] = "Las t&eacute;cnicas de control de proyectos";
 answers[8] = choices[8][0];
 units[8] = "31,32,33";
 comments[8] = "Id Pregunta: 145. ";


//  Id pregunta: 171 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En auditor&iacute;a inform&aacute;tica, los controles de salida contienen, entre otros, a:";
 choices[9]= new Array();
 choices[9][0] = "Registro y almacenamiento de formularios negociables";
 choices[9][1] = "Autorizaci&oacute;n de la distribuci&oacute;n";
 choices[9][2] = "Balanceo y conciliaci&oacute;n";
 choices[9][3] = "Todas las anteriores";
 answers[9] = choices[9][3];
 units[9] = "31,32,33";
 comments[9] = "Id Pregunta: 171. ";


//  Id pregunta: 187 AÃ±o de creación de pregunta: 2004-01-01
 questions[10]= "11)  Cu&aacute;l de las siguientes no es una funci&oacute;n del auditor de Sistemas de Informaci&oacute;n";
 choices[10]= new Array();
 choices[10][0] = "An&aacute;lisis de requisitos y especificaci&oacute;n funcional";
 choices[10][1] = "Evaluaci&oacute;n de los planes de implantaci&oacute;n de sistemas y mejoras de los existentes.";
 choices[10][2] = "Evaluaci&oacute;n de riesgos";
 choices[10][3] = "Evaluaci&oacute;n de controles en los sistemas de informaci&oacute;n";
 answers[10] = choices[10][0];
 units[10] = "31,32,33";
 comments[10] = "Id Pregunta: 187. Similar a examen TIC SS A 2003";


//  Id pregunta: 188 AÃ±o de creación de pregunta: 2004-01-01
 questions[11]= "12)  En relaci&oacute;n con la auditor&iacute;a inform&aacute;tica se&ntilde;alar cu&aacute;l de las siguientes afirmaciones es falsa";
 choices[11]= new Array();
 choices[11][0] = "El informe final deber&aacute; estar compuesto por las entrevistas en profundidad y datos recopilados durante las fases de revisi&oacute;n y verificaci&oacute;n.";
 choices[11][1] = "Se entrevistar&aacute; al mayor n&uacute;mero de usuarios posible";
 choices[11][2] = "Las entrevistas no tendr&aacute;n una duraci&oacute;n superior a dos horas y media";
 choices[11][3] = "Para la validaci&oacute;n de la carga de trabajo se utilizar&aacute;n cuestionarios y entrevistas planificadas.";
 answers[11] = choices[11][2];
 units[11] = "31,32,33";
 comments[11] = "Id Pregunta: 188. Similar a examen TIC SS A 2003";


//  Id pregunta: 190 AÃ±o de creación de pregunta: 2004-01-01
 questions[12]= "13)  En la Metodolog&iacute;a MAGERIT, el evento que pueden desencadenar un incidente en la organizaci&oacute;n, produciendo da&ntilde;os materiales o p&eacute;rdidas inmateriales en sus activos, se denomina:";
 choices[12]= new Array();
 choices[12][0] = "Impacto";
 choices[12][1] = "Vulnerabilidad";
 choices[12][2] = "Amenaza";
 choices[12][3] = "Riesgo";
 answers[12] = choices[12][2];
 units[12] = "33";
 comments[12] = "Id Pregunta: 190. Similar a examen TIC SS A 2003";


//  Id pregunta: 196 AÃ±o de creación de pregunta: 2004-01-01
 questions[13]= "14)  El t&eacute;rmino MAGERIT es un acr&oacute;nimo que procede de los siguientes t&eacute;rminos, o significa lo siguiente:";
 choices[13]= new Array();
 choices[13][0] = "Mercado Abierto y Gratuito a la Exportaci&oacute;n de Recursos Inform&aacute;ticos y de Telecomunicaciones";
 choices[13][1] = "Sistema Inform&aacute;tico propio, financiado y desarrollado por la Comunidad Aut&oacute;noma de Madrid (de aqu&iacute; el nombre de: &quot;Magerit&quot;)";
 choices[13][2] = "Metodolog&iacute;a de An&aacute;lisis y Gesti&oacute;n de Riesgos de los Sistemas de Informaci&oacute;n";
 choices[13][3] = "Methot Aid for Gradual Employ Resource of Information Technology";
 answers[13] = choices[13][2];
 units[13] = "33";
 comments[13] = "Id Pregunta: 196. Examen TIC MAP B 2004";


//  Id pregunta: 199 AÃ±o de creación de pregunta: 2004-01-01
 questions[14]= "15)  La seguridad f&iacute;sica de los sitemas de informaci&oacute;n:";
 choices[14]= new Array();
 choices[14][0] = "Debido a la segregaci&oacute;n de tareas, es labor exclusiva de los guardias de seguridad";
 choices[14][1] = "Debe alcanzar tambi&eacute;n a los equipos que est&eacute;n fuera de los locales de la Organizaci&oacute;n (equipos en teletrabajo, port&aacute;tiles, PDAs, etc.)";
 choices[14][2] = "Es una preocupaci&oacute;n que se evita al externalizar las funciones de explotaci&oacute;n del sistema de informaci&oacute;n";
 choices[14][3] = "Es notablemente superior en aquellas Organizaciones que disponen de s&oacute;tanos bunkerizados";
 answers[14] = choices[14][1];
 units[14] = "33";
 comments[14] = "Id Pregunta: 199. Examen TIC MAP B 2004";


//  Id pregunta: 200 AÃ±o de creación de pregunta: 2004-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes no es una fase en un proceso de auditor&iacute;a de la gesti&oacute;n de la seguridad inform&aacute;tica de una instalaci&oacute;n?";
 choices[15]= new Array();
 choices[15][0] = "Evaluaci&oacute;n de la adecuaci&oacute;n de los controles establecidos";
 choices[15][1] = "Realizaci&oacute;n de entrevistas a usuarios";
 choices[15][2] = "Adquisici&oacute;n del conocimiento necesario mediante la identificaci&oacute;n y documentaci&oacute;n del entorno y de la gesti&oacute;n";
 choices[15][3] = "Ejecuci&oacute;n de pruebas sustantivas";
 answers[15] = choices[15][3];
 units[15] = "33";
 comments[15] = "Id Pregunta: 200. Examen TIC MAP B 2004";


//  Id pregunta: 219 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En la metodolog&iacute;a MAGERIT, se define vulnerabilidad como:";
 choices[16]= new Array();
 choices[16][0] = "El da&ntilde;o producido a la organizaci&oacute;n por un posible incidente";
 choices[16][1] = "La posibilidad de que se produzca un impacto dado en la organizaci&oacute;n";
 choices[16][2] = "Cualquier activo del sistema";
 choices[16][3] = "La posibilidad de ocurrencia de materializaci&oacute;n de una amenaza sobre un activo";
 answers[16] = choices[16][3];
 units[16] = "33";
 comments[16] = "Id Pregunta: 219. ";


//  Id pregunta: 244 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En una auditor&iacute;a de comunicaciones al realizar un an&aacute;lisis detallado de los costes operativos, no ser&aacute; relevante considerar:";
 choices[17]= new Array();
 choices[17][0] = "Volumen de datos transmitidos";
 choices[17][1] = "Tiempos de duraci&oacute;n de conexi&oacute;n";
 choices[17][2] = "Protocolo de comunicaci&oacute;n";
 choices[17][3] = "Facilidades est&aacute;ticas y din&aacute;micas de conexi&oacute;n";
 answers[17] = choices[17][2];
 units[17] = "31,32,33";
 comments[17] = "Id Pregunta: 244. ";


//  Id pregunta: 245 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En una auditor&iacute;a de un sistema EDI, &iquest;cu&aacute;les son las principales &aacute;reas de revisi&oacute;n y evaluaci&oacute;n, en las que los auditores  y el personal especializado de soporte deben centrarse?:";
 choices[18]= new Array();
 choices[18][0] = "Conocimiento del negocio, evaluaci&oacute;n de controles y pruebas";
 choices[18][1] = "Conocimiento del negocio, evaluaci&oacute;n del riesgo, evaluaci&oacute;n de los controles generales, evaluaci&oacute;n de los controles de operaci&oacute;n, pruebas, uso de herramientas asistidas por ordenador (CAAT)";
 choices[18][2] = "Conocimiento del negocio, evaluaci&oacute;n del riesgo,  evaluaci&oacute;n de controles y pruebas";
 choices[18][3] = "Conocimiento del negocio, controles administrativos y de gesti&oacute;n, evaluaci&oacute;n del riesgo, evaluaci&oacute;n del los controles de operci&oacute;n, pruebas y uso de herramientas asistidas por ordenador (CAAT)";
 answers[18] = choices[18][1];
 units[18] = "31,32,33";
 comments[18] = "Id Pregunta: 245. ";


//  Id pregunta: 251 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Entre las funciones de un auditor inform&aacute;tico est&aacute;n:";
 choices[19]= new Array();
 choices[19][0] = "Revisi&oacute;n de sistemas bajo desarrollo, instalaciones inform&aacute;ticas y aplicaciones";
 choices[19][1] = "Soporte a auditores no inform&aacute;ticos";
 choices[19][2] = "La a) y la b) son correctas";
 choices[19][3] = "La a) y la b) son incorrectas";
 answers[19] = choices[19][2];
 units[19] = "31,32,33";
 comments[19] = "Id Pregunta: 251. ";


//  Id pregunta: 279 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  La auditor&iacute;a de sistemas de informaci&oacute;n se puede considerar como:";
 choices[20]= new Array();
 choices[20][0] = "Una auditor&iacute;a de eficiencia";
 choices[20][1] = "Una auditor&iacute;a de eficacia";
 choices[20][2] = "Una auditor&iacute;a operativa";
 choices[20][3] = "Una auditor&iacute;a de legalidad";
 answers[20] = choices[20][2];
 units[20] = "31,32";
 comments[20] = "Id Pregunta: 279. ";


//  Id pregunta: 280 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  La auditoria es:";
 choices[21]= new Array();
 choices[21][0] = "Actividad que tiene por objeto la evaluaci&oacute;n de conformidad de dise&ntilde;os, productos software, procesos o sistema";
 choices[21][1] = "Proceso por el que el sistema de calidad de una empresa es auditado para comprobar el cumplimiento de determinadas normas";
 choices[21][2] = "Descripci&oacute;n completa de un producto software y las interrrelaciones de sus elementos";
 choices[21][3] = "Estructura organizativa, procedimientos, actividades y recursos que juntos aseguran que los productos software satisfacen las necesidades impl&iacute;citas o establecidas en contrato por los clientes";
 answers[21] = choices[21][0];
 units[21] = "31";
 comments[21] = "Id Pregunta: 280. ";


//  Id pregunta: 296 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  La determinaci&oacute;n del nivel aceptable de seguridad corresponde a una pol&iacute;tica de:";
 choices[22]= new Array();
 choices[22][0] = "Aceptar el riesgo";
 choices[22][1] = "Evitar el riesgo";
 choices[22][2] = "Traspasar el riesgo";
 choices[22][3] = "Ninguna de las anteriores";
 answers[22] = choices[22][1];
 units[22] = "33";
 comments[22] = "Id Pregunta: 296. ";


//  Id pregunta: 352 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  La vulnerabilidad es, de acuerdo a MAGERIT:";
 choices[23]= new Array();
 choices[23][0] = "Da&ntilde;o producido a una organizaci&oacute;n por un posible incidente";
 choices[23][1] = "Posibilidad de ocurrencia de un incidente";
 choices[23][2] = "Posibilidad de ocurrencia de un impacto";
 choices[23][3] = "Posibilidad de ocurrencia de materializar una amenaza";
 answers[23] = choices[23][3];
 units[23] = "33";
 comments[23] = "Id Pregunta: 352. ";


//  Id pregunta: 358 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Las medidas de protecci&oacute;n antivirus:";
 choices[24]= new Array();
 choices[24][0] = "Pueden ser de prevenci&oacute;n o de detecci&oacute;n";
 choices[24][1] = "Pueden ser de prevenci&oacute;n, de detecci&oacute;n o de contingencia";
 choices[24][2] = "S&oacute;lo son efectivas frente a ataques de virus tipo &quot;gusanos&quot;";
 choices[24][3] = "Deben minimizar los efectos ulteriores a la infecci&oacute;n de un sistema inform&aacute;tico";
 answers[24] = choices[24][1];
 units[24] = "33";
 comments[24] = "Id Pregunta: 358. ";


//  Id pregunta: 378 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Los subestados de seguridad de un activo o recurso del sistema de informaci&oacute;n son:";
 choices[25]= new Array();
 choices[25][0] = "Autenticaci&oacute;n, confidencialidad y correcci&oacute;n";
 choices[25][1] = "Capacidad de operaci&oacute;n, capacidad de modificaci&oacute;n y capacidad de adaptaci&oacute;n";
 choices[25][2] = "Autenticaci&oacute;n, confidencialidad, correcci&oacute;n y aislamiento";
 choices[25][3] = "Autenticaci&oacute;n, confidencialidad, integridad y disponibilidad";
 answers[25] = choices[25][3];
 units[25] = "32,33";
 comments[25] = "Id Pregunta: 378. ";


//  Id pregunta: 388 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  No es un elemento de MAGERIT:";
 choices[26]= new Array();
 choices[26][0] = "Amenaza";
 choices[26][1] = "Activo";
 choices[26][2] = "Riesgo";
 choices[26][3] = "Salvaguarda";
 answers[26] = choices[26][2];
 units[26] = "33";
 comments[26] = "Id Pregunta: 388. ";


//  Id pregunta: 465 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Un activo es, de acuerdo a MAGERIT:";
 choices[27]= new Array();
 choices[27][0] = "Da&ntilde;o producido a una organizaci&oacute;n por un posible incidente";
 choices[27][1] = "Resultado de una agresi&oacute;n";
 choices[27][2] = "Evento que desencadena un incidente";
 choices[27][3] = "Ninguno de los anteriores";
 answers[27] = choices[27][3];
 units[27] = "31, 32, 33";
 comments[27] = "Id Pregunta: 465. ";


//  Id pregunta: 469 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Una amenaza es, de acuerdo a MAGERIT:";
 choices[28]= new Array();
 choices[28][0] = "Da&ntilde;o producido a una organizaci&oacute;n por un posible incidente";
 choices[28][1] = "Resultado de una agresi&oacute;n";
 choices[28][2] = "Evento que puede desencadenar un incidente en la organizaci&oacute;n, produciendo da&ntilde;os materiales o p&eacute;rdidas inmateriales";
 choices[28][3] = "Posibilidad de ocurrencia de un incidente";
 answers[28] = choices[28][2];
 units[28] = "31, 32, 33";
 comments[28] = "Id Pregunta: 469. ";


//  Id pregunta: 475 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Uno de los proyectos m&aacute;s importantes que lleva a cabo la Administraci&oacute;n es la elaboraci&oacute;n del Esquema Nacional de Evaluaci&oacute;n y Certificaci&oacute;n de la Seguridad de las Tecnolog&iacute;as de la Informaci&oacute;n (ENECSTI). &iquest;Qui&eacute;n es el organismo de certificaci&oacute;n de dicho esquema?";
 choices[29]= new Array();
 choices[29][0] = "La Agencia de Protecci&oacute;n de Datos";
 choices[29][1] = "El TECNIMAP";
 choices[29][2] = "El Centro Criptol&oacute;gico Nacional";
 choices[29][3] = "El Ministerio de Defensa y el de Presidencia a trav&eacute;s del CESID";
 answers[29] = choices[29][2];
 units[29] = "31, 32, 33";
 comments[29] = "Id Pregunta: 475. ";


//  Id pregunta: 493 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  &iquest;C&uacute;antos niveles de evaluaci&oacute;n est&aacute;n contemplados en los Criterios Comunes?";
 choices[30]= new Array();
 choices[30][0] = "Siete";
 choices[30][1] = "Coinciden con los de ITSEC";
 choices[30][2] = "Cinco";
 choices[30][3] = "Seis";
 answers[30] = choices[30][0];
 units[30] = "31,32,33";
 comments[30] = "Id Pregunta: 493. ";


//  Id pregunta: 499 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  El nivel EAL4 de Criterios Comunes considera el dise&ntilde;o del producto";
 choices[31]= new Array();
 choices[31][0] = "S&iacute;";
 choices[31][1] = "No, es el EAL2 el que lo considera";
 choices[31][2] = "No, es el EAL3 el que lo considera";
 choices[31][3] = "Ninguna de las anteriores respuestas es cierta";
 answers[31] = choices[31][0];
 units[31] = "31,32,33";
 comments[31] = "Id Pregunta: 499. ";


//  Id pregunta: 510 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  La Metodolog&iacute;a Magerit debe estar destinado a:";
 choices[32]= new Array();
 choices[32][0] = "S&oacute;lo interesa a directivos";
 choices[32][1] = "Interesa a tecn&oacute;logos y especialistas inform&aacute;ticos";
 choices[32][2] = "No est&aacute; actualizado para que los riesgos puedan contabilizarse en Euros";
 choices[32][3] = "Interesa a directivos, usuarios y desarrolladores";
 answers[32] = choices[32][3];
 units[32] = "31, 32, 33";
 comments[32] = "Id Pregunta: 510. ";


//  Id pregunta: 516 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Seg&uacute;n la Metodolog&iacute;a de An&aacute;lisis y Gesti&oacute;n de Riesgos del Consejo Superior de Inform&aacute;tica (MAGERIT) indicar a qu&eacute; concepto corresponde la siguiente definici&oacute;n &quot;Potencialidad o posibilidad de ocurrencia de materializaci&oacute;n de una amenaza sobre un activo&quot;:";
 choices[33]= new Array();
 choices[33][0] = "Salvaguarda";
 choices[33][1] = "Riesgo";
 choices[33][2] = "Impacto";
 choices[33][3] = "Vulnerabilidad";
 answers[33] = choices[33][3];
 units[33] = "31, 32, 33";
 comments[33] = "Id Pregunta: 516. ";


//  Id pregunta: 521 AÃ±o de creación de pregunta: 2004-01-01
 questions[34]= "35)  En relaci&oacute;n con el control de riesgos, &iquest;Qu&eacute;  funci&oacute;n puede no estar segregada de la de analista de sistemas?";
 choices[34]= new Array();
 choices[34][0] = "Programador de aplicaciones";
 choices[34][1] = "Usuario final";
 choices[34][2] = "Administrador de base de datos";
 choices[34][3] = "Aseguramiento de la calidad";
 answers[34] = choices[34][0];
 units[34] = "31, 32, 33";
 comments[34] = "Id Pregunta: 521. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 523 AÃ±o de creación de pregunta: 2004-01-01
 questions[35]= "36)  En relaci&oacute;n con el control de riesgos, &iquest;Qu&eacute;  funci&oacute;n debe estar segregada de la de administrador de sistemas?";
 choices[35]= new Array();
 choices[35][0] = "Administrador de seguridad";
 choices[35][1] = "Administrador de red";
 choices[35][2] = "Aseguramiento de calidad";
 choices[35][3] = "Ninguna de las anteriores";
 answers[35] = choices[35][2];
 units[35] = "31, 32, 33";
 comments[35] = "Id Pregunta: 523. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 528 AÃ±o de creación de pregunta: 2004-01-01
 questions[36]= "37)  En un proyecto de desarrollo sw, en qu&eacute; fase del ciclo de vida se centrar&aacute; principalmente la revisi&oacute;n de un auditor inform&aacute;tico:";
 choices[36]= new Array();
 choices[36][0] = "Pruebas";
 choices[36][1] = "Estudio de viabilidad";
 choices[36][2] = "Dise&ntilde;o";
 choices[36][3] = "Programaci&oacute;n";
 answers[36] = choices[36][2];
 units[36] = "31, 32, 33";
 comments[36] = "Id Pregunta: 528. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 529 AÃ±o de creación de pregunta: 2004-01-01
 questions[37]= "38)  &iquest;Cual de los siguientes es un control de acceso f&iacute;sico?";
 choices[37]= new Array();
 choices[37][0] = "Etiquetado de soportes en cinta";
 choices[37][1] = "Uso de clave de por teclado para entrar al CPD";
 choices[37][2] = "Contrase&ntilde;as para uso de aplicaciones, renovadas peri&oacute;dicamente";
 choices[37][3] = "Todas";
 answers[37] = choices[37][1];
 units[37] = "31, 32, 33";
 comments[37] = "Id Pregunta: 529. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 530 AÃ±o de creación de pregunta: 2004-01-01
 questions[38]= "39)  Un auditor inform&aacute;tico deber&aacute; verificar:";
 choices[38]= new Array();
 choices[38][0] = "Cumplimiento de objetivos de la organizaci&oacute;n";
 choices[38][1] = "Adecuaci&oacute;n de procedimientos de control";
 choices[38][2] = "Uso de metodolog&iacute;as seg&uacute;n est&aacute;ndares de la organizaci&oacute;n";
 choices[38][3] = "Todas";
 answers[38] = choices[38][3];
 units[38] = "31, 32, 33";
 comments[38] = "Id Pregunta: 530. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 531 AÃ±o de creación de pregunta: 2004-01-01
 questions[39]= "40)  &iquest;Qu&eacute; tipo de centro de respaldo ante desastres ofrece la respuesta m&aacute;s inmediata?";
 choices[39]= new Array();
 choices[39][0] = "Hot site";
 choices[39][1] = "Warm site";
 choices[39][2] = "Instant site";
 choices[39][3] = "Cold site";
 answers[39] = choices[39][0];
 units[39] = "31, 32, 33";
 comments[39] = "Id Pregunta: 531. ";


//  Id pregunta: 549 AÃ±o de creación de pregunta: 2004-01-01
 questions[40]= "41)  Las metodolog&iacute;as desarrolladas y utilizadas en la auditoria y el control inform&aacute;ticos se pueden agrupar en las siguientes familias:";
 choices[40]= new Array();
 choices[40][0] = "Internas, externas y mixtas";
 choices[40][1] = "De datos y de aplicaciones";
 choices[40][2] = "Cuantitativas y cualitativas";
 choices[40][3] = "Basadas en modelos, formales y mixtas";
 answers[40] = choices[40][2];
 units[40] = "31, 32, 33";
 comments[40] = "Id Pregunta: 549. ";


//  Id pregunta: 612 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  La auditor&iacute;a moderna es un proceso met&oacute;dico y como tal tiene un esquema de progreso com&uacute;n a todos los proyectos. Este esquema se resume en las siguientes cinco fases:";
 choices[41]= new Array();
 choices[41][0] = "Toma de contacto, Revisi&oacute;n, Planificaci&oacute;n, Desarrollo de la auditor&iacute;a y Conclusiones";
 choices[41][1] = "Toma de contacto, Planificaci&oacute;n, Revisi&oacute;n, Diagn&oacute;stico y Conclusiones";
 choices[41][2] = "Toma de contacto, Planificaci&oacute;n, Desarrollo de la auditor&iacute;a, Diagn&oacute;stico y Conclusiones";
 choices[41][3] = "Planificaci&oacute;n, Revisi&oacute;n, Desarrollo de la auditor&iacute;a, Diagn&oacute;stico y conclusiones";
 answers[41] = choices[41][2];
 units[41] = "31";
 comments[41] = "Id Pregunta: 612. ";


//  Id pregunta: 614 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Se&ntilde;ala D&rsquo;Amore el &eacute;nfasis de la Auditor&iacute;a Inform&aacute;tica estar&iacute;a en:";
 choices[42]= new Array();
 choices[42][0] = "en detectar los errores";
 choices[42][1] = "en  corregir los problemas";
 choices[42][2] = "evitar los problemas";
 choices[42][3] = "en prevenir los problemas.";
 answers[42] = choices[42][3];
 units[42] = "31";
 comments[42] = "Id Pregunta: 614. ";


//  Id pregunta: 615 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  El Plan de Contingencias:";
 choices[43]= new Array();
 choices[43][0] = "implica un an&aacute;lisis de los posibles riesgos";
 choices[43][1] = "debe incluir un Plan de Recuperaci&oacute;n de Desastres";
 choices[43][2] = "las dos primeras son ciertas";
 choices[43][3] = "las dos primeras son falsas";
 answers[43] = choices[43][2];
 units[43] = "32";
 comments[43] = "Id Pregunta: 615. ";


//  Id pregunta: 616 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Entre los controles de acceso l&oacute;gico no se encuentra:";
 choices[44]= new Array();
 choices[44][0] = "Identificaci&oacute;n de las rutas de acceso l&oacute;gico.";
 choices[44][1] = "Prueba de los controles de acceso l&oacute;gico.";
 choices[44][2] = "Evaluaci&oacute;n de amenazas de acceso l&oacute;gico.";
 choices[44][3] = "Evaluaci&oacute;n del almacenamiento en el Centro de respaldo.";
 answers[44] = choices[44][3];
 units[44] = "32";
 comments[44] = "Id Pregunta: 616. ";


//  Id pregunta: 619 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  En la auditor&iacute;a de sistemas EFT son las iniciales de:";
 choices[45]= new Array();
 choices[45][0] = " Electronic Fundation Transfer";
 choices[45][1] = "Electronic Fundation Testing";
 choices[45][2] = "Electronic Funds Transfer";
 choices[45][3] = "Electronic Funds Testing";
 answers[45] = choices[45][2];
 units[45] = "33";
 comments[45] = "Id Pregunta: 619. ";


//  Id pregunta: 620 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  La auditor&iacute;a de econom&iacute;a, eficacia y eficiencia, o triple E, ha sido bautizada por la United Kingdom Audit Office como:";
 choices[46]= new Array();
 choices[46][0] = "VFN";
 choices[46][1] = "VAN";
 choices[46][2] = "TIR";
 choices[46][3] = "VFM";
 answers[46] = choices[46][3];
 units[46] = "33";
 comments[46] = "Id Pregunta: 620. ";


//  Id pregunta: 654 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  &iquest;Cu&aacute;ndo es mejor realizar una auditor&iacute;a de vulnerabilidades que un test de penetraci&oacute;n?";
 choices[47]= new Array();
 choices[47][0] = "Normalmente es necesario ejecutar ambos";
 choices[47][1] = "Cuando buscas una visi&oacute;n m&aacute;s amplia del entorno en lugar de una visi&oacute;n m&aacute;s concreta de un punto";
 choices[47][2] = "Cuando los tests de penetraci&oacute;n est&aacute;n llenos de falsos positivos";
 choices[47][3] = "Cuando los tests de penetraci&oacute;n pueden, potencialmente, da&ntilde;ar equipos cr&iacute;ticos ";
 answers[47] = choices[47][1];
 units[47] = "31";
 comments[47] = "Id Pregunta: 654. ";


//  Id pregunta: 2894 AÃ±o de creación de pregunta: 2002-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes planes no formar&iacute;a parte de un Plan de Contingencias?:";
 choices[48]= new Array();
 choices[48][0] = "Plan de emergencia";
 choices[48][1] = "Plan de sistemas";
 choices[48][2] = "Plan de recuperaci&oacute;n";
 choices[48][3] = "Plan de respaldo";
 answers[48] = choices[48][1];
 units[48] = "31";
 comments[48] = "Id Pregunta: 2894. ";


//  Id pregunta: 2908 AÃ±o de creación de pregunta: 2002-01-01
 questions[49]= "50)  Dentro de  la metodolog&iacute;a MAGERIT V2 la definici&oacute;n: &quot;es el da&ntilde;o sobre el activo derivado de la materializaci&oacute;n de la amenaza&quot;, corresponde a:";
 choices[49]= new Array();
 choices[49][0] = "Amenazas";
 choices[49][1] = "Vulnerabilidad";
 choices[49][2] = "Impacto";
 choices[49][3] = "Riesgo";
 answers[49] = choices[49][2];
 units[49] = "33";
 comments[49] = "Id Pregunta: 2908. ";


//  Id pregunta: 2909 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  El impacto es, de acuerdo a MAGERIT v2:";
 choices[50]= new Array();
 choices[50][0] = "Da&ntilde;o sobre el activo derivado de la materializaci&oacute;n de la amenaza";
 choices[50][1] = "Lo que podr&iacute;a pasar";
 choices[50][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[50][3] = "Lo que probablemente pase ";
 answers[50] = choices[50][2];
 units[50] = "33";
 comments[50] = "Id Pregunta: 2909. ";


//  Id pregunta: 2917 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  El riesgo es, de acuerdo a MAGERIT V2:";
 choices[51]= new Array();
 choices[51][0] = "Da&ntilde;o producido a una organizaci&oacute;n por un posible incidente";
 choices[51][1] = "Resultado de una agresi&oacute;n";
 choices[51][2] = "Posibilidad de ocurrencia de un incidente";
 choices[51][3] = "el impacto ponderado con la tasa de ocurrencia (o expectativa de materializaci&oacute;n) de la amenaza";
 answers[51] = choices[51][3];
 units[51] = "33";
 comments[51] = "Id Pregunta: 2917. ";


//  Id pregunta: 4318 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  El sistema de gesti&oacute;n de riesgos MAGERIT establece que los subestados de seguridad de un activo son";
 choices[52]= new Array();
 choices[52][0] = "Autenticaci&oacute;n, confidencialidad, inclusi&oacute;n y disponibilidad.";
 choices[52][1] = "Autenticaci&oacute;n, confidencialidad, integridad y disponibilidad.";
 choices[52][2] = "Auditabilidad, calidad, independencia y disposici&oacute;n.";
 choices[52][3] = "Auditabilidad, calidad, independencia y disposici&oacute;n.";
 answers[52] = choices[52][1];
 units[52] = "33";
 comments[52] = "Id Pregunta: 4318. ";


//  Id pregunta: 4329 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  Un centro alternativo de tratamiento de la informaci&oacute;n:";
 choices[53]= new Array();
 choices[53][0] = "Debe ser identificable desde el exterior, para que sea f&aacute;cilmente localizado en caso de emergencia.";
 choices[53][1] = "Debe tener las mismas restricciones de acceso f&iacute;sico que la instalaci&oacute;n principal.";
 choices[53][2] = "Debe estar ubicado en las proximidades de la instalaci&oacute;n principal, as&iacute; se puede poner en operaci&oacute;n inmediatamente.";
 choices[53][3] = "No necesita disponer del mismo nivel de supervisi&oacute;n ni controles ambientales que la instalaci&oacute;n principal, porque los costes ser&iacute;an prohibitivos.";
 answers[53] = choices[53][1];
 units[53] = "33";
 comments[53] = "Id Pregunta: 4329. ";


//  Id pregunta: 4331 AÃ±o de creación de pregunta: 2007-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes derechos, si es asignado a un operador de ordenador, deber&iacute;a hacer sospechar a un auditor inform&aacute;tico, cuando se realiza una auditor&iacute;a de derechos de acceso?";
 choices[54]= new Array();
 choices[54][0] = "Leer acceso a datos.";
 choices[54][1] = "Borrar acceso a archivos de datos de transacci&oacute;n.";
 choices[54][2] = "Acceso de leer/ejecutar a programas.";
 choices[54][3] = "Actualizar acceso a archivos de lenguaje/script de control de trabajo.";
 answers[54] = choices[54][1];
 units[54] = "31";
 comments[54] = "Id Pregunta: 4331. ";


//  Id pregunta: 4401 AÃ±o de creación de pregunta: 2007-01-01
 questions[55]= "56)  Un evento con consecuencias en detrimento de la seguridad del sistema de informaci&oacute;n se denomina, seg&uacute;n Magerit v.2:";
 choices[55]= new Array();
 choices[55][0] = "Incidente.";
 choices[55][1] = "Incidencia.";
 choices[55][2] = "Contingencia";
 choices[55][3] = "Impacto.";
 answers[55] = choices[55][0];
 units[55] = "33";
 comments[55] = "Id Pregunta: 4401. ";


//  Id pregunta: 4611 AÃ±o de creación de pregunta: 2007-01-01
 questions[56]= "57)  Seg&uacute;n la Norma UNE-ISO/IEC 17799:2000 cual de los siguientes aspectos NO esta incluido en el control de accesos";
 choices[56]= new Array();
 choices[56][0] = "seguridad de los servicios de red";
 choices[56][1] = "sincronizaci&oacute;n de relojes";
 choices[56][2] = "responsabilidades del usuario";
 choices[56][3] = "control de acceso a la librer&iacute;a de programa as fuente";
 answers[56] = choices[56][3];
 units[56] = "33";
 comments[56] = "Id Pregunta: 4611. ISO 17799 actualmente es ISO 27002";


//  Id pregunta: 4875 AÃ±o de creación de pregunta: 2007-01-01
 questions[57]= "58)  La metodolog&iacute;a MAGERIT versi&oacute;n 2 estructura el conjunto de activos en capas. &iquest;En cu&aacute;l de las siguientes se situar&iacute;an los &quot;bienes y servicios producidos&quot;?";
 choices[57]= new Array();
 choices[57][0] = "El entorno";
 choices[57][1] = "El sistema de informaci&oacute;n";
 choices[57][2] = "La Informaci&oacute;n";
 choices[57][3] = "Las funciones de la organizaci&oacute;n";
 answers[57] = choices[57][3];
 units[57] = "33";
 comments[57] = "Id Pregunta: 4875. ";


//  Id pregunta: 5015 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  La norma ISO 27002 recoge:";
 choices[58]= new Array();
 choices[58][0] = "Buenas pr&aacute;ticas para la gesti&oacute;n de la seguridad de la informaci&oacute;n";
 choices[58][1] = "La reglamentaci&oacute;n de interconexi&oacute;n segura de redes inal&aacute;mbricas (WIFI)";
 choices[58][2] = "Normativa aplicable para el desarrollo de aplicaciones militares";
 choices[58][3] = "Est&aacute;ndares de desarrollo de aplicaciones de uso dual (civil y militar)";
 answers[58] = choices[58][0];
 units[58] = "32";
 comments[58] = "Id Pregunta: 5015. Examen TIC A 2007";


//  Id pregunta: 5110 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  Seg&uacute;n Magerit V2, todas las dimensiones de la Seguridad son:";
 choices[59]= new Array();
 choices[59][0] = "Disponibilidad, integridad y confidencialidad.";
 choices[59][1] = "Disponibilidad, integridad, confidencialidad y autenticidad.";
 choices[59][2] = "Disponibilidad, integridad, confidencialidad y auditabilidad.";
 choices[59][3] = "Disponibilidad e integridad.";
 answers[59] = choices[59][1];
 units[59] = "32";
 comments[59] = "Id Pregunta: 5110. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5114 AÃ±o de creación de pregunta: 2003-01-01
 questions[60]= "61)  Generalmente el auditor inform&aacute;tico:";
 choices[60]= new Array();
 choices[60][0] = "Informa a la Direcci&oacute;n General de Organizaci&oacute;n.";
 choices[60][1] = "Informa a la Direcci&oacute;n del Departamento de Inform&aacute;tica.";
 choices[60][2] = "El alcance de sus funciones es s&oacute;lo sobre el Departamento de Inform&aacute;tica.";
 choices[60][3] = "Analiza los controles en el d&iacute;a a d&iacute;a.";
 answers[60] = choices[60][0];
 units[60] = "31";
 comments[60] = "Id Pregunta: 5114. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5415 AÃ±o de creación de pregunta: 2003-01-01
 questions[61]= "62)  La implantaci&oacute;n de controles es en &uacute;ltima instancia una responsabilidad de la direcci&oacute;n, si bien cada directivo en su &aacute;rea es corresponsable de la existencia de controles a su nivel. Luego la diferencia entre control y auditoria interna es:";
 choices[61]= new Array();
 choices[61][0] = "El control en inform&aacute;tica lo realizan los supervisores a diferentes niveles, Jefe de Servicio, Jefe de Proyecto, Jefe de Explotaci&oacute;n, mientras que los Auditores Internos deben asumir un papel bastante ingrato como es el de verificar si los trabajadores act&uacute;an de acuerdo a los est&aacute;ndares de explotaci&oacute;n y desarrollo.";
 choices[61][1] = "El control en inform&aacute;tica lo realizan supervisores nombrados por el jefe de Servicio al efecto, mientras que los Auditores internos realizan inspecciones sorpresa para ver si existen controles eficaces";
 choices[61][2] = "El control en inform&aacute;tica lo realizan los supervisores a diferentes niveles, Jefe de Servicio, Jefe de Proyecto, Jefe de Explotaci&oacute;n, mientras que los Auditores internos verifican la existencia de controles adecuados adem&aacute;s de su eficiencia";
 choices[61][3] = "El control en inform&aacute;tica no es absolutamente necesario. Las funciones de cada empleado p&uacute;blico est&aacute;n en la RPT. Cada cierto tiempo se recomienda que un Auditor Interno un informe con las propuestas pertinentes para mejorar";
 answers[61] = choices[61][2];
 units[61] = "31";
 comments[61] = "Id Pregunta: 5415. Castilla y Le&oacute;n";


//  Id pregunta: 5416 AÃ±o de creación de pregunta: 2003-01-01
 questions[62]= "63)  A ra&iacute;z del esc&aacute;ndalo ENRON se vio el problema de que la misma empresa realizara la Auditor&iacute;a y Consultor&iacute;a. Los Auditores a veces no &quot;contaban&quot; todo lo que ve&iacute;an porque las situaciones con las que se encontraban hab&iacute;an sido fruto del trabajo de sus compa&ntilde;eros consultores. La diferencia entre auditor y consultor era de lo m&aacute;s difuso (A veces eran los mismos). Cual de estas cuatro tesis es la correcta:";
 choices[62]= new Array();
 choices[62][0] = "En la Auditor&iacute;a Inform&aacute;tica el inter&eacute;s del cliente no es objeto del informe. Estamos hablando de una revisi&oacute;n, an&aacute;lisis, evaluaci&oacute;n orientada a describir una situaci&oacute;n. Es l&iacute;cito realizar una Auditor&iacute;a Inform&aacute;tica pensando en la Consultor&iacute;a que va a venir puesto que la detecci&oacute;n de un problema es la antesala de una propuesta de soluci&oacute;n";
 choices[62][1] = "En la Auditor&iacute;a Inform&aacute;tica hay que anteponer el inter&eacute;s del cliente al de los consultores. Una Auditor&iacute;a Inform&aacute;tica emite un informe escrito que resume una situaci&oacute;n desde un punto de vista independiente. No obstante las empresas son entes flexibles, por lo que la Auditor&iacute;a no debe cargar las tintas en problemas sencillos que se pueden arreglar con sencillas consultor&iacute;as hechas por los mismos auditores. ";
 choices[62][2] = "En la Auditor&iacute;a Inform&aacute;tica hay que anteponer el inter&eacute;s del cliente al de los consultores. Una Auditor&iacute;a Inform&aacute;tica emite un informe escrito que resume una situaci&oacute;n desde un punto de vista independiente, mientras que una Consultor&iacute;a suele requerir mayor pronunciamiento y mejor definici&oacute;n de las soluciones. ";
 choices[62][3] = "Auditor&iacute;a y Consultor&iacute;a deben estar perfectamente divididos, deben llevarla diferentes empresas y diferentes personas";
 answers[62] = choices[62][2];
 units[62] = "31";
 comments[62] = "Id Pregunta: 5416. Castilla y Le&oacute;n";


//  Id pregunta: 5823 AÃ±o de creación de pregunta: 2009-01-01
 questions[63]= "64)  Seg&uacute;n Magerit versi&oacute;n 2 en un proyecto de an&aacute;lisis de gesti&oacute;n de riesgos qu&eacute; documento de los citados a continuaci&oacute;n NO se genera en el Proceso de Planificaci&oacute;n:";
 choices[63]= new Array();
 choices[63][0] = "Tipolog&iacute;a de activos";
 choices[63][1] = "Dimensiones de seguridad relevantes";
 choices[63][2] = "Criterios de evaluaci&oacute;n";
 choices[63][3] = "Modelo de valor";
 answers[63] = choices[63][3];
 units[63] = "33";
 comments[63] = "Id Pregunta: 5823. MAP 2008 A1";


//  Id pregunta: 6106 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Indicar cu&aacute;l de los siguientes NO est&aacute; entre los objetivos que persigue MAGERIT v2:";
 choices[64]= new Array();
 choices[64][0] = "Ofrecer un m&eacute;todo sistem&aacute;tico para analizar los riesgos que afectan a los sistemas de informaci&oacute;n.";
 choices[64][1] = "Ayudar a descubrir y planificar las medidas oportunas para mantener los riesgos bajo control.";
 choices[64][2] = "Establecer una norma de obligado cumplimiento para todos los organismos de las Administraciones P&uacute;blicas espa&ntilde;olas a la hora de analizar y gestionar los riesgos.";
 choices[64][3] = "Preparar a las organizaciones para procesos de evaluaci&oacute;n, auditoria, certificaci&oacute;n o acreditaci&oacute;n.";
 answers[64] = choices[64][2];
 units[64] = "33";
 comments[64] = "Id Pregunta: 6106. TIC A 2009";


//  Id pregunta: 6260 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Seg&uacute;n la ISACA, una &ldquo;auditor&iacute;a de sistemas&rdquo; se puede definir como:";
 choices[65]= new Array();
 choices[65][0] = "Auditor&iacute;a que abarca la revisi&oacute;n y evaluaci&oacute;n de todos los aspectos de los sistemas autom&aacute;ticos de procesamiento de la informaci&oacute;n (o una parte de ellos), incluidos los procedimientos no autom&aacute;ticos relacionados con ellos y las interfaces correspondientes.";
 choices[65][1] = "Conjunto de actividades, t&eacute;cnicas, procedimientos y herramientas que nos permiten el control y mejora de los procesos de la organizaci&oacute;n en el campo de los sistemas de informaci&oacute;n.";
 choices[65][2] = "ISACA no ha dado una definici&oacute;n de Auditor&iacute;a porque es una organizaci&oacute;n sin &aacute;nimo de lucro que centra su actividad en la seguridad de los sistemas de informaci&oacute;n.";
 choices[65][3] = "La auditor&iacute;a que centra su actividad sobre los sistemas de una organizaci&oacute;n, incluyendo los sistemas el&eacute;ctricos, electr&oacute;nicos e inform&aacute;ticos, aplicando en los controles la normativa europea dictada por los organismos: CEN, CENELEC, EIS y ETSI.";
 answers[65] = choices[65][0];
 units[65] = "31";
 comments[65] = "Id Pregunta: 6260. ";


//  Id pregunta: 6264 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Cual de los siguientes enunciados no pertenece al c&oacute;digo &eacute;tico definido para los perfiles de auditor por la ISACA.";
 choices[66]= new Array();
 choices[66][0] = "Apoyar la implantaci&oacute;n y estimular el cumplimiento de est&aacute;ndares, procedimientos y controles apropiados en los sistemas de informaci&oacute;n.";
 choices[66][1] = "Mantener la protecci&oacute;n de la intimidad y la confidencialidad de la informaci&oacute;n a la que se tenga  acceso, dentro del marco de la Directiva Europea en materia de protecci&oacute;n de datos de car&aacute;cter personal (transpuesta en Espa&ntilde;a a trav&eacute;s de la Ley Org&aacute;nica 15/1999).";
 choices[66][2] = "Apoyar la formaci&oacute;n profesional de las partes leg&iacute;timamente interesadas, mejorando su comprensi&oacute;n de la seguridad y control de los sistemas de informaci&oacute;n.";
 choices[66][3] = "Informar a las partes apropiadas de los resultados del trabajo realizado, revelando todos los hechos significativos que obren en su conocimiento.";
 answers[66] = choices[66][1];
 units[66] = "31";
 comments[66] = "Id Pregunta: 6264. ";


//  Id pregunta: 6267 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Cu&aacute;l de los siguientes no es uno de los diez dominios de control a contemplar en un Plan de Continuidad:";
 choices[67]= new Array();
 choices[67][0] = "Seguridad ligada al personal.";
 choices[67][1] = "Seguridad f&iacute;sica y del entorno.";
 choices[67][2] = "Conformidad.";
 choices[67][3] = "Seguridad del centro de respaldo.";
 answers[67] = choices[67][3];
 units[67] = "32";
 comments[67] = "Id Pregunta: 6267. ";


//  Id pregunta: 6268 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  El &ldquo;Plan&rdquo; cuyo objetivo es conseguir la continuidad en las funciones estrat&eacute;gicas de una organizaci&oacute;n desempe&ntilde;adas en sus instalaciones corporativas se denomina:";
 choices[68]= new Array();
 choices[68][0] = "Plan de continuidad de operaciones.";
 choices[68][1] = "Plan de continuidad de negocio.";
 choices[68][2] = "Plan de contingencia.";
 choices[68][3] = "Plan de emergencia.";
 answers[68] = choices[68][0];
 units[68] = "32";
 comments[68] = "Id Pregunta: 6268. ";


//  Id pregunta: 7168 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes NO es uno de los libros que componente MAGERIT v2?";
 choices[69]= new Array();
 choices[69][0] = "M&eacute;todo";
 choices[69][1] = "Cat&aacute;logo de Elementos";
 choices[69][2] = "Cat&aacute;logo de Riesgos";
 choices[69][3] = "Gu&iacute;a de T&eacute;cnicas";
 answers[69] = choices[69][2];
 units[69] = "33";
 comments[69] = "Id Pregunta: 7168. Examen TIC B 2009";


//  Id pregunta: 8457 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  A la m&aacute;xima cantidad de datos que se pueden perder en caso de desastres se le denomina:";
 choices[70]= new Array();
 choices[70][0] = "RTO";
 choices[70][1] = "RPO";
 choices[70][2] = "SDO";
 choices[70][3] = "RDO";
 answers[70] = choices[70][1];
 units[70] = "32";
 comments[70] = "Id Pregunta: 8457. Analista Ayto. Madrid 2010";


//  Id pregunta: 8486 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Los centros de proceso de datos o datacenters deben cumplir una serie de caracter&iacute;sticas de seguridad f&iacute;sica, &iquest;cu&aacute;l de las siguientes NO es una buena pol&iacute;tica de seguridad?";
 choices[71]= new Array();
 choices[71][0] = "Debe disponer de puertas de acceso grandes.";
 choices[71][1] = "Debe estar expl&iacute;citamente se&ntilde;alizado.";
 choices[71][2] = "Debe evitar tener ventanas.";
 choices[71][3] = "Dispondr&aacute; de un sistema de refrigeraci&oacute;n";
 answers[71] = choices[71][1];
 units[71] = "32,33";
 comments[71] = "Id Pregunta: 8486. Examen TIC A2 2010 interna";


//  Id pregunta: 9294 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes no es una clave para asegurar la eficacia de los planes de continuidad seg&uacute;n la norma ISO 17799?";
 choices[72]= new Array();
 choices[72][0] = "Probar las copias de seguridad.";
 choices[72][1] = "Separaci&oacute;n l&oacute;gica de las copias de seguridad.";
 choices[72][2] = "No descartar amenazas.";
 choices[72][3] = "La ISO 17799 no define claves sino dominios de control.";
 answers[72] = choices[72][1];
 units[72] = "32";
 comments[72] = "Id Pregunta: 9294. ";


//  Id pregunta: 9297 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l es el dominio de CobiT m&aacute;s afectado de cara a la Continuidad del Negocio?";
 choices[73]= new Array();
 choices[73][0] = "Planificaci&oacute;n y Organizaci&oacute;n.";
 choices[73][1] = "Adquisici&oacute;n e implementaci&oacute;n.";
 choices[73][2] = "Entrega y Soporte.";
 choices[73][3] = "Supervisi&oacute;n y Evaluaci&oacute;n.";
 answers[73] = choices[73][2];
 units[73] = "32";
 comments[73] = "Id Pregunta: 9297. ";


//  Id pregunta: 9298 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  En cuanto a la dependencia entre activos que se considera a la hora de evaluar riesgos:";
 choices[74]= new Array();
 choices[74][0] = "La seguridad del activo superior depende de la del inferior.";
 choices[74][1] = "El activo superior puede ser atacado a trav&eacute;s del inferior.";
 choices[74][2] = "La relaci&oacute;n indica que el activo inferior es necesario para que el superior funcione.";
 choices[74][3] = "La a) y la b) son correctas.";
 answers[74] = choices[74][3];
 units[74] = "32";
 comments[74] = "Id Pregunta: 9298. ";


//  Id pregunta: 9299 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  El riesgo se puede:";
 choices[75]= new Array();
 choices[75][0] = "Eliminar, reducir, asumir o transferir. ";
 choices[75][1] = "Eliminar, reducir pero no asegurar.";
 choices[75][2] = "Reducir, asumir, transferir pero nunca se puede eliminar del todo.";
 choices[75][3] = "Eliminar, reducir, asumir, transferir o asegurar.";
 answers[75] = choices[75][3];
 units[75] = "32";
 comments[75] = "Id Pregunta: 9299. ";


//  Id pregunta: 9302 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  ISACA:";
 choices[76]= new Array();
 choices[76][0] = "Es la Information Security Audit and Control Association";
 choices[76][1] = "Posee una metodolog&iacute;a basada en COBIT, de cara a obtener los controles a aplicar durante la auditor&iacute;a y en CMMI, de cara a obtener un modelo de desarrollo sobre el que basarse para auditar el existente";
 choices[76][2] = "Posee una metodolog&iacute;a propia, que no se basa ni en COBIT ni en CMMI";
 choices[76][3] = "Ninguna de las anteriores";
 answers[76] = choices[76][3];
 units[76] = "33";
 comments[76] = "Id Pregunta: 9302. ";


//  Id pregunta: 9305 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes es una norma b&aacute;sica en la auditor&iacute;a de los sistemas de informaci&oacute;n?";
 choices[77]= new Array();
 choices[77][0] = "Planificaci&oacute;n y supervisi&oacute;n";
 choices[77][1] = "Estudio y evaluaci&oacute;n del sistema de control interno";
 choices[77][2] = "Obtenci&oacute;n de evidencia suficiente y adecuada";
 choices[77][3] = "Todas las anteriores";
 answers[77] = choices[77][3];
 units[77] = "31";
 comments[77] = "Id Pregunta: 9305. ";


//  Id pregunta: 9311 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  La declaraci&oacute;n de intenciones de alto nivel que refleja los objetivos de la organizaci&oacute;n es la definici&oacute;n de";
 choices[78]= new Array();
 choices[78][0] = "Normativa";
 choices[78][1] = "Pol&iacute;tica";
 choices[78][2] = "Instrucci&oacute;n";
 choices[78][3] = "Procedimiento";
 answers[78] = choices[78][1];
 units[78] = "31";
 comments[78] = "Id Pregunta: 9311. ";


//  Id pregunta: 9312 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  El conjunto de las reglas generales que desarrollan las pol&iacute;ticas y que son de obligada aplicaci&oacute;n se recogen en";
 choices[79]= new Array();
 choices[79][0] = "Normativas";
 choices[79][1] = "Procedimientos";
 choices[79][2] = "Instrucciones";
 choices[79][3] = "Declaraciones de conformidad";
 answers[79] = choices[79][0];
 units[79] = "31";
 comments[79] = "Id Pregunta: 9312. ";


//  Id pregunta: 9318 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Se&ntilde;ale la afirmaci&oacute;n verdadera";
 choices[80]= new Array();
 choices[80][0] = "El modelo organizativo en el que los auditores forman parte de los &oacute;rganos de control de la organizaci&oacute;n permite una mayor independencia";
 choices[80][1] = "El modelo organizativo en el que los auditores se integran dentro de los propios centros inform&aacute;ticos permite una mayor independencia";
 choices[80][2] = "El modelo organizativo en el que los auditores se integran dentro de los propios centros inform&aacute;ticos ofrece una implicaci&oacute;n m&aacute;s directa en las tareas destinadas a mejorar la calidad";
 choices[80][3] = "La a) y la c) son correctas";
 answers[80] = choices[80][3];
 units[80] = "31";
 comments[80] = "Id Pregunta: 9318. ";


//  Id pregunta: 9320 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Cu&aacute;l de las siguientes no es un requisito que debe cumplir una evidencia";
 choices[81]= new Array();
 choices[81][0] = "Suficiente";
 choices[81][1] = "Eficiente";
 choices[81][2] = "Relevante";
 choices[81][3] = "Competente";
 answers[81] = choices[81][1];
 units[81] = "31";
 comments[81] = "Id Pregunta: 9320. ";


//  Id pregunta: 9324 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Los informes de auditor&iacute;a";
 choices[82]= new Array();
 choices[82][0] = "Deben ser enviados al &oacute;rgano auditado para que establezca observaciones o alegaciones";
 choices[82][1] = "No ser&aacute; sometido a las observaciones o alegaciones del &oacute;rgano auditado porque esto pondr&iacute;a en peligro la independencia del procedimiento";
 choices[82][2] = "Incluir&aacute; los hechos, hallazgos, conclusiones y recomendaciones que se consideren m&aacute;s relevantes por parte de los auditores";
 choices[82][3] = "Ninguna de las anteriores es correcta";
 answers[82] = choices[82][0];
 units[82] = "31";
 comments[82] = "Id Pregunta: 9324. ";


//  Id pregunta: 9737 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Indique la sentencia correcta respecto al an&aacute;lisis del factor dolor (Pain Value Analysis), es una t&eacute;cnica:";
 choices[83]= new Array();
 choices[83][0] = "Para ayudar a identificar el impacto en el negocio de uno o m&aacute;s problemas.";
 choices[83][1] = "Para calcular el l&iacute;mite m&aacute;ximo de usuarios que el sistema es capaz de gestionar, teniendo en cuenta la capacidad del hardware y el n&uacute;mero de peticiones de cada usuario.";
 choices[83][2] = "Para la asignaci&oacute;n de prioridades a diferentes actividades, dice que el 80% del valor de una actividad es generado por el 20% del esfuerzo.";
 choices[83][3] = "Acu&ntilde;ada en los a&ntilde;os 80, cuya finalidad era calcular la capacidad f&iacute;sica de los usuarios del sistema inform&aacute;tico.";
 answers[83] = choices[83][0];
 units[83] = "31";
 comments[83] = "Id Pregunta: 9737. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9898 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Tras la realizaci&oacute;n de un an&aacute;lisis de riesgos de acuerdo con MAGERIT 3.0, el informe que detalla los activos, sus dependencias, las dimensiones en que son valiosos y la estimaci&oacute;n de dicho valor, se denomina";
 choices[84]= new Array();
 choices[84][0] = "modelo de valor.";
 choices[84][1] = "declaraci&oacute;n de aplicabilidad.";
 choices[84][2] = "mapa de riesgos.";
 choices[84][3] = "estado de riesgo.";
 answers[84] = choices[84][0];
 units[84] = "31,32,33";
 comments[84] = "Id Pregunta: 9898. TIC A1, Examen 2013";


//  Id pregunta: 10547 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  El primer paso a la hora de desarrollar un Plan de Continuidad de Negocio es:";
 choices[85]= new Array();
 choices[85][0] = "Clasificar los sistemas seg&uacute;n su importancia";
 choices[85][1] = "Establecer una estrategia de recuperaci&oacute;n de desastres";
 choices[85][2] = "determinar el tiempo cr&iacute;tico de recuperaci&oacute;n";
 choices[85][3] = "Realizar una clasificaci&oacute;n del riesgo";
 answers[85] = choices[85][0];
 units[85] = "31, 32, 33";
 comments[85] = "Id Pregunta: 10547. NULL";


//  Id pregunta: 10550 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de las siguientes amenazas de seguridad de Internet podr&iacute;a comprometer la integridad?";
 choices[86]= new Array();
 choices[86][0] = "Robo de los datos desde el cliente ";
 choices[86][1] = "Exposici&oacute;n de la informaci&oacute;n de configuraci&oacute;n de red ";
 choices[86][2] = "Un troyano en el navegador";
 choices[86][3] = "Escuchas ilegales en la red";
 answers[86] = choices[86][2];
 units[86] = "31, 32, 33";
 comments[86] = "Id Pregunta: 10550. NULL";


//  Id pregunta: 10552 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  La evaluaci&oacute;n del riesgo es:";
 choices[87]= new Array();
 choices[87][0] = "subjetiva";
 choices[87][1] = "objetiva";
 choices[87][2] = "Matem&aacute;tica";
 choices[87][3] = "Estad&iacute;stica";
 answers[87] = choices[87][0];
 units[87] = "31, 32, 33";
 comments[87] = "Id Pregunta: 10552. Todas las metodolog&iacute;as de evaluaci&oacute;n de riesgos se basan en juicios subjetivos en alg&uacute;n momento en el proceso (por ej, para asignar ponderaciones a los distintos par&aacute;metros)";


//  Id pregunta: 10554 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Cuando una metodolog&iacute;a de ciclo de vida de desarrollo de sistemas es inadecuada, el riesgo m&aacute;s serio del nuevo sistema ser&aacute;:";
 choices[88]= new Array();
 choices[88][0] = "Se completar&aacute; tarde";
 choices[88][1] = "Superar&aacute; las estimaciones de coste";
 choices[88][2] = "No cumplir&aacute; con las necesidades de negocio y de los usuarios";
 choices[88][3] = "Ser&aacute; incompatible con los sistemas existentes";
 answers[88] = choices[88][2];
 units[88] = "31, 32, 33";
 comments[88] = "Id Pregunta: 10554. Aunque todas las respuestas son riesgos, lo primero y m&aacute;s perjudicial es que el sistema no cumplir&aacute; con las necesidades de los usuarios y del negocio.";


//  Id pregunta: 10555 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)   Cu&aacute;l de los siguientes debe ser el primer paso en una Auditor&iacute;a de Sistemas ";
 choices[89]= new Array();
 choices[89][0] = "Crear un diagrama de flujo de las ramas de decisi&oacute;n. ";
 choices[89][1] = "Comprender el entorno a estudiar";
 choices[89][2] = "Realizar una evaluaci&oacute;n de riesgos";
 choices[89][3] = "Desarrollar un plan de auditor&iacute;a";
 answers[89] = choices[89][1];
 units[89] = "31, 32, 33";
 comments[89] = "Id Pregunta: 10555. Un auditor necesita obtener una comprensi&oacute;n de los procesos antes de crear un diagrama de flujo, evaluar los riesgos o desarrollar un plan de auditor&iacute;a";


//  Id pregunta: 10557 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Cual es la &uacute;ltima versi&oacute;n de COBIT";
 choices[90]= new Array();
 choices[90][0] = "v4";
 choices[90][1] = "V4.1";
 choices[90][2] = "v5";
 choices[90][3] = "v6";
 answers[90] = choices[90][2];
 units[90] = "31, 32, 33";
 comments[90] = "Id Pregunta: 10557. Isaca lanz&oacute; el 10 de abril del 2012 COBIT 5";


//  Id pregunta: 10560 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  Los controles compensatorios tienen como objetivo:";
 choices[91]= new Array();
 choices[91][0] = "reducir el riesgo ante una debilidad existente";
 choices[91][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[91][2] = "Solucionar problemas detectados por controles detectivos";
 choices[91][3] = "Reportar errores";
 answers[91] = choices[91][0];
 units[91] = "31, 32, 33";
 comments[91] = "Id Pregunta: 10560. Las opciones B, C y D son caracter&iacute;sticas de  controles preventivo, correctivo y detectivo respectivamente.";


//  Id pregunta: 10561 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  Los controles preventivos tienen como objeto:";
 choices[92]= new Array();
 choices[92][0] = "reducir el riesgo ante una debilidad existente";
 choices[92][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[92][2] = "Solucionar problemas detectados por controles detectivos";
 choices[92][3] = "Reportar errores";
 answers[92] = choices[92][1];
 units[92] = "31, 32, 33";
 comments[92] = "Id Pregunta: 10561. ";


//  Id pregunta: 10564 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  Para desarrollar un plan de continuidad de negocio de &eacute;xito es fundamental  la participaci&oacute;n del usuario final durante el proceso de: ";
 choices[93]= new Array();
 choices[93][0] = "Estrategias de recuperaci&oacute;n";
 choices[93][1] = "Desarrollo del plan detallado";
 choices[93][2] = "An&aacute;lisis de impacto al negocio (BIA)";
 choices[93][3] = "Mantenimiento y pruebas";
 answers[93] = choices[93][2];
 units[93] = "31, 32, 33";
 comments[93] = "Id Pregunta: 10564. Durante el BIA se debe entender y conocer las necesidades del negocio, sus operaciones y el impacto en el negocio ante un desastre";


//  Id pregunta: 10566 AÃ±o de creación de pregunta: 2014-01-01
 questions[94]= "95)  Seg&uacute;n ITIL un instrumento de gesti&oacute;n para el buen gobierno de las Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones en el dominio del soporte y el desempe&ntilde;o es:";
 choices[94]= new Array();
 choices[94][0] = "Plan de Continuidad de Negocio";
 choices[94][1] = "Plan de contingencia";
 choices[94][2] = "Plan de Recuperaci&oacute;n ante Desastres";
 choices[94][3] = "Plan de pruebas";
 answers[94] = choices[94][1];
 units[94] = "31, 32, 33";
 comments[94] = "Id Pregunta: 10566. ";


//  Id pregunta: 10567 AÃ±o de creación de pregunta: 2014-01-01
 questions[95]= "96)  Un local para el procesamiento de la informaci&oacute;n que dispone de energ&iacute;a el&eacute;ctrica suficiente, refrigeraci&oacute;n y suelo t&eacute;cnico, paneles, puertas, etc. se denomina en al argot de la Continuidad de Negocio:";
 choices[95]= new Array();
 choices[95][0] = "Un &quot;cold-Site&quot; o sitio en fr&iacute;o";
 choices[95][1] = "Un &quot;warm-Site&quot; o sitio tibio";
 choices[95][2] = "Un &quot;Hot-Site&quot; o sitio en caliente";
 choices[95][3] = "Un CPD duplicado &quot;Dupplicate Processing Site&quot;";
 answers[95] = choices[95][0];
 units[95] = "32";
 comments[95] = "Id Pregunta: 10567. ";


//  Id pregunta: 10568 AÃ±o de creación de pregunta: 2014-01-01
 questions[96]= "97)  Una de las diferencias entre un Plan de Recuperaci&oacute;n ante desastres (PRD o DRP en ingl&eacute;s) y un Plan de Contingencia es que:";
 choices[96]= new Array();
 choices[96][0] = "El PRD debe ser realizado antes que el Plan de Contingencia";
 choices[96][1] = "El Plan de Contingencia debe ser realizado antes que el PRD";
 choices[96][2] = "El Plan de Contingencia realiza acciones para poder continuar con las actividades cr&iacute;ticas del negocio aunque sea en modo manual o semi autom&aacute;tico mientras que el PRD, en paralelo al Plan de Contingencia, trata de recuperar las aplicaciones y la informaci&oacute;n da&ntilde;ada para volver a la normalidad.";
 choices[96][3] = "El PRD realiza acciones para poder continuar con las actividades cr&iacute;ticas del negocio aunque sea en modo manual o semi autom&aacute;tico mientras que el Plan de Contingencia trata de recuperar las aplicaciones y la informaci&oacute;n da&ntilde;ada para volver a la normalidad.";
 answers[96] = choices[96][2];
 units[96] = "32";
 comments[96] = "Id Pregunta: 10568. ";


//  Id pregunta: 10569 AÃ±o de creación de pregunta: 2014-01-01
 questions[97]= "98)  La probabilidad de explosi&oacute;n por escape de gas en una f&aacute;brica es de 0'0001. Si llega a producirse se sabe que morir&aacute;n al menos diez empleados y se producir&aacute;n p&eacute;rdidas materiales por al menos de 100 millones de euros. &iquest;Cu&aacute;l es riesgo cuantitativo asociado a la amenaza de explosi&oacute;n?";
 choices[97]= new Array();
 choices[97][0] = "10000 euros";
 choices[97][1] = "100 millones de euros";
 choices[97][2] = "No se puede valorar porque la p&eacute;rdida de vidas humanas no es cuantificable (salvo para las compa&ntilde;&iacute;as de seguros)";
 choices[97][3] = "Muy alto";
 answers[97] = choices[97][2];
 units[97] = "33";
 comments[97] = "Id Pregunta: 10569. ";


//  Id pregunta: 10807 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Se&ntilde;ale de las siguientes cu&aacute;l es una t&eacute;cnica espec&iacute;fica dentro de un proyecto de an&aacute;lisis y gesti&oacute;n de riesgos, seg&uacute;n la gu&iacute;a de T&eacute;cnicas de MAGERIT v3:";
 choices[98]= new Array();
 choices[98][0] = "Sesiones de trabajo.";
 choices[98][1] = "Valoraciones Delphi.";
 choices[98][2] = "Histogramas.";
 choices[98][3] = "&Aacute;rboles de ataque.";
 answers[98] = choices[98][3];
 units[98] = "32, 33";
 comments[98] = "Id Pregunta: 10807. Examen GSI 2014";


//  Id pregunta: 11019 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de los siguientes no es un &oacute;rgano especializado en el control de la Administraci&oacute;n P&uacute;blica?";
 choices[99]= new Array();
 choices[99][0] = "Tribunal de Cuentas";
 choices[99][1] = "IGAE";
 choices[99][2] = "Agencia Estatal de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y de la Calidad de los Servicios";
 choices[99][3] = "Todos lo son";
 answers[99] = choices[99][3];
 units[99] = "31";
 comments[99] = "Id Pregunta: 11019. ";


