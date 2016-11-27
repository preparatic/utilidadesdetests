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

//  Id pregunta: 31 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a la auditor&iacute;a?:";
 choices[0]= new Array();
 choices[0][0] = "Independientemente del tipo de auditor&iacute;a inform&aacute;tica que pretenda realizarse, la finalidad &uacute;ltima es emitir un juicio acerca del estado de los sistemas";
 choices[0][1] = "Del fin de la auditor&iacute;a habr&aacute;n de obtenerse los medios y las acciones de investigaci&oacute;n que se estimen necesarios para su consecuci&oacute;n";
 choices[0][2] = "La auditor&iacute;a siempre recomendar&aacute; la toma de acciones correctivas, independientemente del examen de situaci&oacute;n realizado";
 choices[0][3] = "Cuando la tarea del auditor sea muy compleja, se llevar&aacute; a cabo una divisi&oacute;n de funciones de forma arborescente";
 answers[0] = choices[0][2];
 units[0] = "31,32,33";
 comments[0] = "Id Pregunta: 31. ";


//  Id pregunta: 48 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes no es un control de entrada de datos en una Revisi&oacute;n de Controles de Aplicaci&oacute;n en una auditor&iacute;a inform&aacute;tica?:";
 choices[1]= new Array();
 choices[1][0] = "Controles por lote y balanceo";
 choices[1][1] = "Validaci&oacute;n y edici&oacute;n de datos";
 choices[1][2] = "Balanceo y conciliaci&oacute;n";
 choices[1][3] = "Autorizaci&oacute;n de ingreso";
 answers[1] = choices[1][2];
 units[1] = "31,32,33";
 comments[1] = "Id Pregunta: 48. ";


//  Id pregunta: 120 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Dentro de los objetivos que se fijar&iacute;a una auditor&iacute;a sobre el grado de adecuaci&oacute;n de las herramientas de software utilizadas a la informaci&oacute;n gestionada, &iquest;cu&aacute;l de los siguientes considera que no ser&iacute;a relevante  obtener del estudio?:";
 choices[2]= new Array();
 choices[2][0] = "Fiabilidad t&eacute;cnica";
 choices[2][1] = "Cambio del modelo de datos utilizados";
 choices[2][2] = "Estudio de opini&oacute;n de los usuarios";
 choices[2][3] = "Facilidad de mantenimiento y expansi&oacute;n";
 answers[2] = choices[2][1];
 units[2] = "31,32,33";
 comments[2] = "Id Pregunta: 120. ";


//  Id pregunta: 122 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Desde el punto de vista de un auditor de seguridad indique cu&aacute;l de las siguientes premisas, sobre control interno de acceso l&oacute;gico, es inadecuada:";
 choices[3]= new Array();
 choices[3][0] = "El sistema debe obligar al usuario a cambiar de contrase&ntilde;a cada cierto tiempo";
 choices[3][1] = "El registro o log de acceso al sistema puede desactivarse a petici&oacute;n del responsable de seguridad";
 choices[3][2] = "Es conveniente que la autenticaci&oacute;n de entrada al sistema se haga una &uacute;nica vez";
 choices[3][3] = "El sistema debe rechazar el acceso a los usuarios despu&eacute;s de una serie de intentos fallidos";
 answers[3] = choices[3][1];
 units[3] = "31,32,33";
 comments[3] = "Id Pregunta: 122. ";


//  Id pregunta: 136 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  El conjunto de t&eacute;cnicas y procedimientos que garantizan la disponibilidad de la informaci&oacute;n, la integridad del sistema y la confidencialidad, son propias de:";
 choices[4]= new Array();
 choices[4][0] = "Una auditor&iacute;a inform&aacute;tica";
 choices[4][1] = "Un plan de contingencia";
 choices[4][2] = "La seguridad inform&aacute;tica";
 choices[4][3] = "Una planificaci&oacute;n estrat&eacute;gica";
 answers[4] = choices[4][2];
 units[4] = "31,32,33";
 comments[4] = "Id Pregunta: 136. ";


//  Id pregunta: 145 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  El estudio de la informaci&oacute;n, su calidad, flujo y seguridad es caracter&iacute;stico de:";
 choices[5]= new Array();
 choices[5][0] = "La auditor&iacute;a inform&aacute;tica";
 choices[5][1] = "La planificaci&oacute;n estrat&eacute;gica";
 choices[5][2] = "La planificaci&oacute;n de capacidad del sistema";
 choices[5][3] = "Las t&eacute;cnicas de control de proyectos";
 answers[5] = choices[5][0];
 units[5] = "31,32,33";
 comments[5] = "Id Pregunta: 145. ";


//  Id pregunta: 170 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  En auditor&iacute;a inform&aacute;tica, el objeto de una &quot;prueba de cumplimiento&quot; es:";
 choices[6]= new Array();
 choices[6][0] = "Verificar el cumplimiento de la legislaci&oacute;n y la normativa vigente en las operaciones de un sistema de informaci&oacute;n, especialmente en el cap&iacute;tulo de compras y gesti&oacute;n de personal";
 choices[6][1] = "Sustanciar la probabilidad de que los objetivos de control no se alcancen";
 choices[6][2] = "Determinar si los controles se est&aacute;n aplicando de la forma descrita en la documentaci&oacute;n o de la forma descrita por el usuario o directivo";
 choices[6][3] = "Verificar que todos los usuarios se adhieren voluntaria u obligatoriamente a la pol&iacute;tica sobre usos de recursos inform&aacute;ticos implantada por la Direcci&oacute;n";
 answers[6] = choices[6][2];
 units[6] = "31,32,33";
 comments[6] = "Id Pregunta: 170. ";


//  Id pregunta: 188 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  En relaci&oacute;n con la auditor&iacute;a inform&aacute;tica se&ntilde;alar cu&aacute;l de las siguientes afirmaciones es falsa";
 choices[7]= new Array();
 choices[7][0] = "El informe final deber&aacute; estar compuesto por las entrevistas en profundidad y datos recopilados durante las fases de revisi&oacute;n y verificaci&oacute;n.";
 choices[7][1] = "Se entrevistar&aacute; al mayor n&uacute;mero de usuarios posible";
 choices[7][2] = "Las entrevistas no tendr&aacute;n una duraci&oacute;n superior a dos horas y media";
 choices[7][3] = "Para la validaci&oacute;n de la carga de trabajo se utilizar&aacute;n cuestionarios y entrevistas planificadas.";
 answers[7] = choices[7][2];
 units[7] = "31,32,33";
 comments[7] = "Id Pregunta: 188. Similar a examen TIC SS A 2003";


//  Id pregunta: 198 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes no es una fuente principal para que una Organizaci&oacute;n identifique sus necesidades de seguiridad f&iacute;sica en el &aacute;rea de sistemas de informaci&oacute;n?";
 choices[8]= new Array();
 choices[8][0] = "Los requisitos legales, estatutarios y contractuales a los que est&eacute; obligada la Organizaci&oacute;n";
 choices[8][1] = "Los principios, objetivos y requisitos para el tratamiento de la informaci&oacute;n que la Organizaci&oacute;n ha desarrollado para soportar sus operaciones";
 choices[8][2] = "El nivel de madurez en la gesti&oacute;n de la seguirdad f&iacute;sica, medido de acuerdo con el Computer Maturity Model";
 choices[8][3] = "La valoraci&oacute;n de los riesgos de la Organizaci&oacute;n";
 answers[8] = choices[8][2];
 units[8] = "33";
 comments[8] = "Id Pregunta: 198. Examen TIC MAP B 2004";


//  Id pregunta: 205 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  Para el an&aacute;lisis de la gesti&oacute;n de riesgos:";
 choices[9]= new Array();
 choices[9][0] = "usaremos el proyecto MABER de la administraci&oacute;n";
 choices[9][1] = "seguiremos las recomendaciones de la herramienta NEDAES";
 choices[9][2] = "utilizaremos las bases sentadas por ESTROFA";
 choices[9][3] = "Ninguna de las anteriores";
 answers[9] = choices[9][3];
 units[9] = "33";
 comments[9] = "Id Pregunta: 205. ";


//  Id pregunta: 218 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En la metodolog&iacute;a MAGERIT, la actividad &quot;Interpretaci&oacute;n del Riesgo&quot; corresponde a la etapa de:";
 choices[10]= new Array();
 choices[10][0] = "Planificaci&oacute;n";
 choices[10][1] = "An&aacute;lisis de riesgos";
 choices[10][2] = "Gesti&oacute;n de riesgos";
 choices[10][3] = "Selecci&oacute;n de salvaguardas";
 answers[10] = choices[10][2];
 units[10] = "33";
 comments[10] = "Id Pregunta: 218. ";


//  Id pregunta: 230 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En los conceptos principales de la seguridad inform&aacute;tica no es cierto que:";
 choices[11]= new Array();
 choices[11][0] = "los da&ntilde;os sobre los activos producen impactos";
 choices[11][1] = "los impactos son materializaciones de las amenazas sobre los activos";
 choices[11][2] = "las salvaguardas ofrecen medidas curativas sobre los impactos, y preventivas sobre las vulnerabilidades";
 choices[11][3] = "los riesgos son las frecuencias con las que se pueden producir las amenazas sobre los activos";
 answers[11] = choices[11][3];
 units[11] = "33";
 comments[11] = "Id Pregunta: 230. ";


//  Id pregunta: 234 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En relaci&oacute;n con la auditor&iacute;a de econom&iacute;a, eficacia y eficiencia, &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?:";
 choices[12]= new Array();
 choices[12][0] = "Al contrario de lo que ocurre en el sector privado, en el sector p&uacute;blico es muy sencillo realizar comparaciones entre los distintos servicios y administraciones p&uacute;blicas";
 choices[12][1] = "La auditor&iacute;a de econom&iacute;a consiste en medir los costes de desarrollo, mantenimiento y operaci&oacute;n de un sistema de informaci&oacute;n, incluyendo equipos y personal";
 choices[12][2] = "La auditor&iacute;a de eficacia es una medida de la correcta utilizaci&oacute;n de los equipos, instalaciones y personal que participan en el sistema de informaci&oacute;n. Es una medida de la calidad t&eacute;cnica del sistema de informaci&oacute;n";
 choices[12][3] = "La eficiencia se eval&uacute;a determinando si los requisitos del dise&ntilde;o se han cumplido y los usuarios est&aacute;n satisfechos con el sistema";
 answers[12] = choices[12][1];
 units[12] = "31,32,33";
 comments[12] = "Id Pregunta: 234. ";


//  Id pregunta: 238 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En un An&aacute;lisis de Criticidad los elementos cr&iacute;ticos de un Sistema se clasifican seg&uacute;n:";
 choices[13]= new Array();
 choices[13][0] = "La probabilidad de mal funcionamiento de uno de ellos";
 choices[13][1] = "La estimaci&oacute;n de los costes de los da&ntilde;os derivados de su mal funcionamiento";
 choices[13][2] = "El tiempo durante el cu&aacute;l se puede asumir su carencia o mal funcionamiento";
 choices[13][3] = "El n&uacute;mero de elementos alternativos a cada elemento cr&iacute;tico";
 answers[13] = choices[13][2];
 units[13] = "33";
 comments[13] = "Id Pregunta: 238. ";


//  Id pregunta: 244 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En una auditor&iacute;a de comunicaciones al realizar un an&aacute;lisis detallado de los costes operativos, no ser&aacute; relevante considerar:";
 choices[14]= new Array();
 choices[14][0] = "Volumen de datos transmitidos";
 choices[14][1] = "Tiempos de duraci&oacute;n de conexi&oacute;n";
 choices[14][2] = "Protocolo de comunicaci&oacute;n";
 choices[14][3] = "Facilidades est&aacute;ticas y din&aacute;micas de conexi&oacute;n";
 answers[14] = choices[14][2];
 units[14] = "31,32,33";
 comments[14] = "Id Pregunta: 244. ";


//  Id pregunta: 250 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Entre las alternativas al HALON 1301 no se encuentra:";
 choices[15]= new Array();
 choices[15][0] = "FM-200";
 choices[15][1] = "Argonite";
 choices[15][2] = "Antifire";
 choices[15][3] = "Argonfire";
 answers[15] = choices[15][2];
 units[15] = "33";
 comments[15] = "Id Pregunta: 250. ";


//  Id pregunta: 268 AÃ±o de creación de pregunta: 2007-01-01
 questions[16]= "17)  Indicar la afirmaci&oacute;n correcta sobre MAGERIT:";
 choices[16]= new Array();
 choices[16][0] = "Magerit se ha estructurado en tres libros: &quot;M&eacute;todo&quot;, &quot;Cat&aacute;logo de Elementos&quot; y &quot;Gu&iacute;a de T&eacute;cnicas&quot;";
 choices[16][1] = "la metodolog&iacute;a se describe desde tres &aacute;ngulos";
 choices[16][2] = "Entre t&eacute;cnicas descritas en la Gu&iacute;a de T&eacute;cnicas se encuentra: el an&aacute;lisis mediante tablas, an&aacute;lisis algor&iacute;tmico, &aacute;rboles de ataque, y la valoraci&oacute;n Delphi.";
 choices[16][3] = "Las tres anteriores son correctas";
 answers[16] = choices[16][3];
 units[16] = "33";
 comments[16] = "Id Pregunta: 268. ";


//  Id pregunta: 272 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Indique cu&aacute;l de las siguientes afirmaciones se aplica a la gesti&oacute;n de incidencias y aver&iacute;as:";
 choices[17]= new Array();
 choices[17][0] = "Las herramientas de gesti&oacute;n de incidencias deben estar integradas con el inventario";
 choices[17][1] = "La eficiencia del sistema es funci&oacute;n directa del n&uacute;mero de terminales telef&oacute;nicos";
 choices[17][2] = "Las llamadas de aver&iacute;as deben encaminarse autom&aacute;ticamente al suministrador";
 choices[17][3] = "Los operadores deben ser expertos en mantenimiento hardware";
 answers[17] = choices[17][0];
 units[17] = "32";
 comments[17] = "Id Pregunta: 272. ";


//  Id pregunta: 310 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La integridad de la informaci&oacute;n en un sistema de comunicaciones inform&aacute;ticas es de sumo inter&eacute;s para:";
 choices[18]= new Array();
 choices[18][0] = "Seguridad inform&aacute;tica";
 choices[18][1] = "Seguridad f&iacute;sica";
 choices[18][2] = "Auditor&iacute;a de comunicaciones";
 choices[18][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[18] = choices[18][3];
 units[18] = "33";
 comments[18] = "Id Pregunta: 310. ";


//  Id pregunta: 320 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La mayor amenaza para la seguridad inform&aacute;tica de una empresa, con m&aacute;s del 50% de los casos conocidos de ataques, se debe a:";
 choices[19]= new Array();
 choices[19][0] = "antiguos empleados";
 choices[19][1] = "hackers externos";
 choices[19][2] = "empleados no autorizados";
 choices[19][3] = "empleados autorizados";
 answers[19] = choices[19][3];
 units[19] = "31,32,33";
 comments[19] = "Id Pregunta: 320. ";


//  Id pregunta: 362 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Le han encargado realizar una auditor&iacute;a inform&aacute;tica de un centro de proceso de datos en el que, entre otros, se procesan datos fiscales de todas las empresas espa&ntilde;olas. Indique que recomendar&iacute;a solucionar con m&aacute;s urgencia:";
 choices[20]= new Array();
 choices[20][0] = "Las aplicaciones inform&aacute;ticas est&aacute;n insuficientemente documentadas";
 choices[20][1] = "Los equipos no est&aacute;n alimentados con fuentes de alimenta ininterrumpida (U.P.S.)";
 choices[20][2] = "Las copias de seguridad en cinta se guardan junto con las cintas de datos";
 choices[20][3] = "El equipamiento utilizado no responde a la filosof&iacute;a de 'sistemas abiertos'";
 answers[20] = choices[20][2];
 units[20] = "31,32,33";
 comments[20] = "Id Pregunta: 362. ";


//  Id pregunta: 378 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Los subestados de seguridad de un activo o recurso del sistema de informaci&oacute;n son:";
 choices[21]= new Array();
 choices[21][0] = "Autenticaci&oacute;n, confidencialidad y correcci&oacute;n";
 choices[21][1] = "Capacidad de operaci&oacute;n, capacidad de modificaci&oacute;n y capacidad de adaptaci&oacute;n";
 choices[21][2] = "Autenticaci&oacute;n, confidencialidad, correcci&oacute;n y aislamiento";
 choices[21][3] = "Autenticaci&oacute;n, confidencialidad, integridad y disponibilidad";
 answers[21] = choices[21][3];
 units[21] = "32,33";
 comments[21] = "Id Pregunta: 378. ";


//  Id pregunta: 419 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Se entiende por disponibilidad de la informaci&oacute;n:";
 choices[22]= new Array();
 choices[22][0] = "La informaci&oacute;n utilizada ser&aacute; la &uacute;ltima, exacta, autorizada y completa";
 choices[22][1] = "Que cada persona acceder&aacute; &uacute;nicamente a la que le corresponda";
 choices[22][2] = "El sistema estar&aacute; operativo en todo momento";
 choices[22][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[22] = choices[22][2];
 units[22] = "33";
 comments[22] = "Id Pregunta: 419. ";


//  Id pregunta: 421 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Se entiende por seguridad inform&aacute;tica el conjunto de t&eacute;cnicas y procedimientos que garantizan:";
 choices[23]= new Array();
 choices[23][0] = "La disponibilidad de la informaci&oacute;n, la exactitud de la informaci&oacute;n y la confidencialidad de los datos";
 choices[23][1] = "La exactitud de la informaci&oacute;n, la integridad del sistema y la confidencialidad de los datos";
 choices[23][2] = "La disponibilidad de la informaci&oacute;n, la integridad del sistema y la confidencialidad de los datos";
 choices[23][3] = "La disponibilidad de la informaci&oacute;n, la integridad del sistema y la exactitud de la informaci&oacute;n";
 answers[23] = choices[23][2];
 units[23] = "33";
 comments[23] = "Id Pregunta: 421. ";


//  Id pregunta: 465 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Un activo es, de acuerdo a MAGERIT:";
 choices[24]= new Array();
 choices[24][0] = "Da&ntilde;o producido a una organizaci&oacute;n por un posible incidente";
 choices[24][1] = "Resultado de una agresi&oacute;n";
 choices[24][2] = "Evento que desencadena un incidente";
 choices[24][3] = "Ninguno de los anteriores";
 answers[24] = choices[24][3];
 units[24] = "31, 32, 33";
 comments[24] = "Id Pregunta: 465. ";


//  Id pregunta: 483 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Un plan de contingencia corresponde a:";
 choices[25]= new Array();
 choices[25][0] = "Evitar el riesgo de da&ntilde;os";
 choices[25][1] = "Minimizar los da&ntilde;os producidos";
 choices[25][2] = "Planificar las situaciones de emergencia";
 choices[25][3] = "Establecer medidas de recuperaci&oacute;n";
 answers[25] = choices[25][1];
 units[25] = "32";
 comments[25] = "Id Pregunta: 483. ";


//  Id pregunta: 492 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  &iquest;Cuales son las t&eacute;cnicas utilizadas para la auditor&iacute;a de econom&iacute;a de los sistemas de informaci&oacute;n?";
 choices[26]= new Array();
 choices[26][0] = "Cuestionarios y entrevistas";
 choices[26][1] = "An&aacute;lisis  de inversiones e inventario de sistemas de informaci&oacute;n";
 choices[26][2] = "Informes econ&oacute;micos de inversiones en sistemas de informaci&oacute;n y an&aacute;lisis de rendimiento";
 choices[26][3] = "Informes de la organizaci&oacute;n, datos de proyectos y contratos, an&aacute;lisis costo-beneficio";
 answers[26] = choices[26][3];
 units[26] = "31, 32, 33";
 comments[26] = "Id Pregunta: 492. Pregunta similar a la del ex&aacute;men de SS del 2003 salvo en las opciones";


//  Id pregunta: 499 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  El nivel EAL4 de Criterios Comunes considera el dise&ntilde;o del producto";
 choices[27]= new Array();
 choices[27][0] = "S&iacute;";
 choices[27][1] = "No, es el EAL2 el que lo considera";
 choices[27][2] = "No, es el EAL3 el que lo considera";
 choices[27][3] = "Ninguna de las anteriores respuestas es cierta";
 answers[27] = choices[27][0];
 units[27] = "31,32,33";
 comments[27] = "Id Pregunta: 499. ";


//  Id pregunta: 503 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  En la metodolog&iacute;a MAGERIT la definici&oacute;n &quot;eventos que pueden desencadenar un incidente en la organizaci&oacute;n&quot; corresponde a:";
 choices[28]= new Array();
 choices[28][0] = "Riesgo";
 choices[28][1] = "Impacto";
 choices[28][2] = "Amenaza";
 choices[28][3] = "Vulnerabilidad";
 answers[28] = choices[28][2];
 units[28] = "31, 32, 33";
 comments[28] = "Id Pregunta: 503. ";


//  Id pregunta: 516 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  Seg&uacute;n la Metodolog&iacute;a de An&aacute;lisis y Gesti&oacute;n de Riesgos del Consejo Superior de Inform&aacute;tica (MAGERIT) indicar a qu&eacute; concepto corresponde la siguiente definici&oacute;n &quot;Potencialidad o posibilidad de ocurrencia de materializaci&oacute;n de una amenaza sobre un activo&quot;:";
 choices[29]= new Array();
 choices[29][0] = "Salvaguarda";
 choices[29][1] = "Riesgo";
 choices[29][2] = "Impacto";
 choices[29][3] = "Vulnerabilidad";
 answers[29] = choices[29][3];
 units[29] = "31, 32, 33";
 comments[29] = "Id Pregunta: 516. ";


//  Id pregunta: 520 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  &iquest;En qu&eacute; fase del ciclo de vida se deben contemplar los controles de aplicaci&oacute;n por primera vez?";
 choices[30]= new Array();
 choices[30][0] = "Dise&ntilde;o";
 choices[30][1] = "An&aacute;lisis";
 choices[30][2] = "Construcci&oacute;n";
 choices[30][3] = "Pruebas de aceptaci&oacute;n";
 answers[30] = choices[30][1];
 units[30] = "31, 32, 33";
 comments[30] = "Id Pregunta: 520. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 521 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  En relaci&oacute;n con el control de riesgos, &iquest;Qu&eacute;  funci&oacute;n puede no estar segregada de la de analista de sistemas?";
 choices[31]= new Array();
 choices[31][0] = "Programador de aplicaciones";
 choices[31][1] = "Usuario final";
 choices[31][2] = "Administrador de base de datos";
 choices[31][3] = "Aseguramiento de la calidad";
 answers[31] = choices[31][0];
 units[31] = "31, 32, 33";
 comments[31] = "Id Pregunta: 521. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 523 AÃ±o de creación de pregunta: 2004-01-01
 questions[32]= "33)  En relaci&oacute;n con el control de riesgos, &iquest;Qu&eacute;  funci&oacute;n debe estar segregada de la de administrador de sistemas?";
 choices[32]= new Array();
 choices[32][0] = "Administrador de seguridad";
 choices[32][1] = "Administrador de red";
 choices[32][2] = "Aseguramiento de calidad";
 choices[32][3] = "Ninguna de las anteriores";
 answers[32] = choices[32][2];
 units[32] = "31, 32, 33";
 comments[32] = "Id Pregunta: 523. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 528 AÃ±o de creación de pregunta: 2004-01-01
 questions[33]= "34)  En un proyecto de desarrollo sw, en qu&eacute; fase del ciclo de vida se centrar&aacute; principalmente la revisi&oacute;n de un auditor inform&aacute;tico:";
 choices[33]= new Array();
 choices[33][0] = "Pruebas";
 choices[33][1] = "Estudio de viabilidad";
 choices[33][2] = "Dise&ntilde;o";
 choices[33][3] = "Programaci&oacute;n";
 answers[33] = choices[33][2];
 units[33] = "31, 32, 33";
 comments[33] = "Id Pregunta: 528. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 617 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Las medidas de seguridad necesarias para restaurar el servicio de forma r&aacute;pida, eficiente y con el menor costo y p&eacute;rdidas posibles se incluyen en:";
 choices[34]= new Array();
 choices[34][0] = "Plan de Recuperaci&oacute;n de Desastres";
 choices[34][1] = "Plan estrat&eacute;gico";
 choices[34][2] = "Plan de sistemas";
 choices[34][3] = "Plan de seguridad fisica";
 answers[34] = choices[34][0];
 units[34] = "32";
 comments[34] = "Id Pregunta: 617. ";


//  Id pregunta: 653 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l es la diferencia entre una auditor&iacute;a de vulnerabilidades y un test de penetraci&oacute;n?";
 choices[35]= new Array();
 choices[35][0] = "Un test de penetraci&oacute;n identifica los servicios en ejecuci&oacute;n. Una auditor&iacute;a de vulnerabilidades proporciona una mayor informaci&oacute;n sobre las vulnerabilidades.";
 choices[35][1] = "Un test de penetraci&oacute;n enumera los recursos, una auditor&iacute;a de vulnerabilidaes enumera las vulnerabilidades.";
 choices[35][2] = "Un test de penetraci&oacute;n aprovecha las vulnerabilidades, una auditor&iacute;a de vulnerabilidades encuentra las vulnerabilidades.";
 choices[35][3] = "Los dos son lo mismo.";
 answers[35] = choices[35][2];
 units[35] = "31";
 comments[35] = "Id Pregunta: 653. ";


//  Id pregunta: 2902 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  A la hora de asegurar un Centro de Proceso de Datos:";
 choices[36]= new Array();
 choices[36][0] = "Habr&aacute; que considerar el riesgo de perturbaciones electromagn&eacute;ticas por parte del sistema de iluminaci&oacute;n (fluorescentes o similares)";
 choices[36][1] = "El riesgo de perturbaciones electromagn&eacute;ticas es siempre despreciable";
 choices[36][2] = "El riesgo de perturbaciones electromagn&eacute;ticas se elimina con la instalaci&oacute;n de toma de tierra en todos los dispositivos";
 choices[36][3] = "El riesgo de perturbaciones electromagn&eacute;ticas se elimina prohibiendo el uso de tel&eacute;fonos m&oacute;viles en el CPD";
 answers[36] = choices[36][0];
 units[36] = "31";
 comments[36] = "Id Pregunta: 2902. ";


//  Id pregunta: 2904 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  Como medidas de tipo f&iacute;sico, en seguridad inform&aacute;tica, podemos hablar de:";
 choices[37]= new Array();
 choices[37][0] = "Seguridad de datos y de software";
 choices[37][1] = "Seguridad organizativo-administrativa y de software";
 choices[37][2] = "Seguridad de hardware y de datos";
 choices[37][3] = "Adecuaci&oacute;n de locales y seguridad de accesos";
 answers[37] = choices[37][3];
 units[37] = "33";
 comments[37] = "Id Pregunta: 2904. ";


//  Id pregunta: 2905 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  Con respecto a almacenamiento de copias de seguridad, &iquest;qu&eacute; garant&iacute;as nos ofrece un armario de protecci&oacute;n combinada?:";
 choices[38]= new Array();
 choices[38][0] = "Su misi&oacute;n principal es proteger del fuego y electromagnetismo";
 choices[38][1] = "Su misi&oacute;n principal es proteger del agua y del fuego";
 choices[38][2] = "Su misi&oacute;n principal es proteger de radiaciones electricas";
 choices[38][3] = "Ninguna de las anteriores es correcta ";
 answers[38] = choices[38][0];
 units[38] = "32";
 comments[38] = "Id Pregunta: 2905. ";


//  Id pregunta: 4446 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Seg&uacute;n la norma 150/17799, el aseguramiento de que los usuarios autorizados tienen  acceso cuando lo requieran a la informaci&oacute;n y sus activos asociados, es el concepto de:";
 choices[39]= new Array();
 choices[39][0] = "Seguridad.";
 choices[39][1] = "Integridad.";
 choices[39][2] = "Disponibilidad.";
 choices[39][3] = "Confidencialidad.";
 answers[39] = choices[39][2];
 units[39] = "33";
 comments[39] = "Id Pregunta: 4446. ";


//  Id pregunta: 4505 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  &iquest;a que se denomina riesgo en MAGERIT version 2?";
 choices[40]= new Array();
 choices[40][0] = "A la medida del da&ntilde;o probable sobre un sistema";
 choices[40][1] = "Al suceso que puede afectar a un activo y causarle un da&ntilde;o";
 choices[40][2] = "A la medida del da&ntilde;o sobre un activo derivado de la materializaci&oacute;n de una amenaza";
 choices[40][3] = "Al recurso del sistema de informaci&oacute;n expuesto a un ataque";
 answers[40] = choices[40][0];
 units[40] = "33";
 comments[40] = "Id Pregunta: 4505. ";


//  Id pregunta: 4506 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  &iquest;Cual de los siguientes seria el encuadre org&aacute;nico preferible de la auditoria inform&aacute;tica interna?";
 choices[41]= new Array();
 choices[41][0] = "Se adscribir&iacute;a al Departamento de Sistemas de Informaci&oacute;n, ya que el personal especializado necesario solo esta disponible en ese Departamento";
 choices[41][1] = "Depender&iacute;a org&aacute;nicamente del Departamento de SI y funcionalmente del Departamento Financiero, por su labor auxiliar en la auditoria financiera de la organizaci&oacute;n";
 choices[41][2] = "No deber&iacute;a existir, ya que al ser interna seria imposible que fuera independiente con respecto a los auditados";
 choices[41][3] = "Se encuadrar&iacute;a dentro del staff, es decir, dentro de los &oacute;rganos de apoyo a la direcci&oacute;n existentes en Ia estructura organizativa, con el fin de garantizar la independencia necesaria";
 answers[41] = choices[41][3];
 units[41] = "31";
 comments[41] = "Id Pregunta: 4506. ";


//  Id pregunta: 4561 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  En cual de las fases de la planificaci&oacute;n de una auditoria inform&aacute;tica pueden surgir ciertos problemas por coincidir las fechas de trabajo del personal de Ia empresa auditora con otros clientes?";
 choices[42]= new Array();
 choices[42][0] = "fase de planificaci&oacute;n estrat&eacute;gica";
 choices[42][1] = "fase de planificaci&oacute;n administrativa";
 choices[42][2] = "fase de planificaci&oacute;n t&eacute;cnica";
 choices[42][3] = "fase de planificaci&oacute;n operativa";
 answers[42] = choices[42][1];
 units[42] = "31";
 comments[42] = "Id Pregunta: 4561. ";


//  Id pregunta: 4614 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Las pruebas de auditoria que permiten medir el riesgo por deficiencia de los controles existentes o por su ausencia se denominan";
 choices[43]= new Array();
 choices[43][0] = "de cumplimiento";
 choices[43][1] = "de verificaci&oacute;n";
 choices[43][2] = "de adecuaci&oacute;n";
 choices[43][3] = "sustantivas";
 answers[43] = choices[43][3];
 units[43] = "31";
 comments[43] = "Id Pregunta: 4614. ";


//  Id pregunta: 4744 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  El estudio de las consecuencias que tendr&iacute;a una parada de X tiempo sobre la organizaci&oacute;n se contempla en la metodolog&iacute;a MAGERIT en:";
 choices[44]= new Array();
 choices[44][0] = "An&aacute;lisis de riesgos";
 choices[44][1] = "An&aacute;lisis de impacto";
 choices[44][2] = "Disponibilidad";
 choices[44][3] = "Es una metodolog&iacute;a de desarrollo, en ning&uacute;n caso trata an&aacute;lisis del riesgo";
 answers[44] = choices[44][1];
 units[44] = "32";
 comments[44] = "Id Pregunta: 4744. Examen 2006 JCYL";


//  Id pregunta: 4957 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  Seg&uacute;n la metodolog&iacute;a Magerit versi&oacute;n 2, el riesgo remanente en el sistema tras la implantaci&oacute;n de lassalvaguardas determinadas en el plan de seguridad de la informaci&oacute;n se denomina:";
 choices[45]= new Array();
 choices[45][0] = "Riesgo retenido.";
 choices[45][1] = "Riesgo acumulado.";
 choices[45][2] = "Riesgo residual.";
 choices[45][3] = "Riesgo supervisado.";
 answers[45] = choices[45][2];
 units[45] = "33";
 comments[45] = "Id Pregunta: 4957. Examen TIC B 2007";


//  Id pregunta: 4960 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  En la ejecuci&oacute;n de un proyecto de auditor&iacute;a inform&aacute;tica sobre un sistema de informaci&oacute;n, el uso de procedimientos estad&iacute;sticos de muestreo ayudar&aacute; a minimizar el riesgo:";
 choices[46]= new Array();
 choices[46][0] = "De muestreo.";
 choices[46][1] = "De detecci&oacute;n.";
 choices[46][2] = "Inherente.";
 choices[46][3] = "De control.";
 answers[46] = choices[46][1];
 units[46] = "33";
 comments[46] = "Id Pregunta: 4960. Examen TIC B 2007";


//  Id pregunta: 5111 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Seg&uacute;n Magerit V2, la relaci&oacute;n de amenazas a las que est&aacute;n expuestas los activos se llama:";
 choices[47]= new Array();
 choices[47][0] = "Modelo de amenazas";
 choices[47][1] = "Informe de suficiencias.";
 choices[47][2] = "Mapa de riesgos.";
 choices[47][3] = "Listado de vulnerabilidades.";
 answers[47] = choices[47][2];
 units[47] = "32";
 comments[47] = "Id Pregunta: 5111. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5115 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Diremos que un sistema de informaci&oacute;n es efectivo cuando:";
 choices[48]= new Array();
 choices[48][0] = "Utiliza el m&iacute;nimo de recursos para producir las salidas requeridas.";
 choices[48][1] = "Cuando alcanza sus objetivos.";
 choices[48][2] = "Cuando proteja los activos de todas las amenazas posibles.";
 choices[48][3] = "Cuando conserve la completitud, robustez, pureza y veracidad de los datos.";
 answers[48] = choices[48][1];
 units[48] = "31";
 comments[48] = "Id Pregunta: 5115. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5173 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  En la auditor&iacute;a inform&aacute;tica se conocen como pruebas sustantivas:";
 choices[49]= new Array();
 choices[49][0] = "Sirven para obtener una comprensi&oacute;n de cu&aacute;les son los controles administrativos que est&aacute;n establecidos.";
 choices[49][1] = "Sirven para ver si los controles est&aacute;n bien dise&ntilde;ados y funcionan eficazmente.";
 choices[49][2] = "Se utilizan para determinar si se cumplen los objetivos de salvaguarda de los activos, integridad de los datos, eficacia y eficiencia.";
 choices[49][3] = "Estas pruebas se utilizan para sacar consecuencias del an&aacute;lisis de determinada informaci&oacute;n.";
 answers[49] = choices[49][2];
 units[49] = "31";
 comments[49] = "Id Pregunta: 5173. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5473 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Cual de los siguientes no es un activo en Magerit";
 choices[50]= new Array();
 choices[50][0] = "www";
 choices[50][1] = "url";
 choices[50][2] = "anon";
 choices[50][3] = "edi";
 answers[50] = choices[50][1];
 units[50] = "33";
 comments[50] = "Id Pregunta: 5473. Castilla y Le&oacute;n";


//  Id pregunta: 5486 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  El estudio de las consecuencias que tendr&iacute;a una parada de X tiempo sobre la organizaci&oacute;n se contempla en la metodolog&iacute;a MAGERIT en";
 choices[51]= new Array();
 choices[51][0] = "An&aacute;lisis de riesgos";
 choices[51][1] = "An&aacute;lisis de impacto";
 choices[51][2] = "Disponibilidad";
 choices[51][3] = "Es una metodolog&iacute;a de desarrollo, en ning&uacute;n caso trata an&aacute;lisis del riesgo";
 answers[51] = choices[51][1];
 units[51] = "33";
 comments[51] = "Id Pregunta: 5486. Castilla y Le&oacute;n";


//  Id pregunta: 5967 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  Respecto al an&aacute;lisis y gesti&oacute;n de riesgos:";
 choices[52]= new Array();
 choices[52][0] = "En la gesti&oacute;n de riesgos, ning&uacute;n riesgo identificado puede declararse como asumible ya que la metodolog&iacute;a trata de evitar cualquier da&ntilde;o en nuestra organizaci&oacute;n";
 choices[52][1] = "Si tenemos implementadas salvaguardas en nuestro sistema, no tiene sentido disponer de planes de continuidad pues las amenazas no llegar&aacute;n a materializarse";
 choices[52][2] = "Un led que indique el mal funcionamiento de un disco de un RAID puede considerarse como una salvaguarda";
 choices[52][3] = "Cualquier amenaza afecta a todas las dimensiones de un activo";
 answers[52] = choices[52][2];
 units[52] = "33";
 comments[52] = "Id Pregunta: 5967. Castilla La Mancha 2009";


//  Id pregunta: 5968 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  En MAGERIT &iquest;cu&aacute;l de las siguientes opciones NO es cierta?";
 choices[53]= new Array();
 choices[53][0] = "Riesgo es la posibilidad de que suceda un da&ntilde;o o perjuicio";
 choices[53][1] = "Impacto es el evento que puede desencadenar un incidente en la organizaci&oacute;n";
 choices[53][2] = "Existen tres submodelos: elementos, eventos y procesos";
 choices[53][3] = "La informaci&oacute;n es un activo";
 answers[53] = choices[53][1];
 units[53] = "33";
 comments[53] = "Id Pregunta: 5968. Castilla La Mancha 2009";


//  Id pregunta: 6065 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  NO figura entre los objetivos de las normas y procedimientos de seguridad:";
 choices[54]= new Array();
 choices[54][0] = "La adecuaci&oacute;n a aspectos de accesibilidad, usabilidad y utilizaci&oacute;n de lenguas cooficiales.";
 choices[54][1] = "La confidencialidad, disponibilidad e integridad de la informaci&oacute;n.";
 choices[54][2] = "La necesidad de controles de acceso.";
 choices[54][3] = "La adecuaci&oacute;n a normativa de la Agencia de Protecci&oacute;n de Datos.";
 answers[54] = choices[54][0];
 units[54] = "32";
 comments[54] = "Id Pregunta: 6065. TIC A 2009";


//  Id pregunta: 6262 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Dentro del marco de la auditor&iacute;a de sistemas de informaci&oacute;n, los &ldquo;controles&rdquo; en funci&oacute;n del momento en que act&uacute;an podr&iacute;an clasificarse en:";
 choices[55]= new Array();
 choices[55][0] = "Proactivos, reactivos, concurrentes y recurrentes.";
 choices[55][1] = "Recurrentes, instant&aacute;neos, previos y posteriores.";
 choices[55][2] = "Concomitantes, recurrentes, duraderos e instant&aacute;neos.";
 choices[55][3] = "Reactivos, proactivos y concurrentes o concomitantes.";
 answers[55] = choices[55][3];
 units[55] = "31";
 comments[55] = "Id Pregunta: 6262. ";


//  Id pregunta: 6266 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Cu&aacute;l de las siguientes afirmaciones es falsa en lo que al &ldquo;informe final de una auditor&iacute;a&rdquo; se refiere:";
 choices[56]= new Array();
 choices[56][0] = "Si el informe es muy extenso, ser&iacute;a conveniente redactar un resumen ejecutivo.";
 choices[56][1] = "Es conveniente que el informe est&eacute; perfectamente indexado con, al menos, tres apartados en funci&oacute;n de a qui&eacute;n vaya dirigido (director de sistemas, equipo t&eacute;cnico de sistemas, equipo de calidad y auditor&iacute;a).";
 choices[56][2] = "El esquema t&iacute;pico de un informe de auditor&iacute;a contendr&iacute;a entre otros los siguientes apartados: introducci&oacute;n, objetivos, metodolog&iacute;a y resultados.";
 choices[56][3] = "Un elemento sustancial para asegurar la calidad del informe y que &eacute;ste sea completo y objetivo es conseguir que los responsables de la actividad realicen una revisi&oacute;n del borrador del informe y formulen las alegaciones y comentarios que consideren oportunos.";
 answers[56] = choices[56][1];
 units[56] = "31";
 comments[56] = "Id Pregunta: 6266. ";


//  Id pregunta: 6269 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  A la m&aacute;xima cantidad de datos que se pueden perder en caso de desastre se les denomina:";
 choices[57]= new Array();
 choices[57][0] = "SDO";
 choices[57][1] = "RPO";
 choices[57][2] = "RTO";
 choices[57][3] = "MTBF";
 answers[57] = choices[57][1];
 units[57] = "32";
 comments[57] = "Id Pregunta: 6269. ";


//  Id pregunta: 6441 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Generalmente el auditor inform&aacute;tico elevar&aacute; su informe a";
 choices[58]= new Array();
 choices[58][0] = "La direcci&oacute;n de la Organizaci&oacute;n";
 choices[58][1] = "La direcci&oacute;n de Inform&aacute;tica";
 choices[58][2] = "La direcci&oacute;n del departamento que este auditando";
 choices[58][3] = "Al Departamento de Asuntos Econ&oacute;micos";
 answers[58] = choices[58][0];
 units[58] = "31";
 comments[58] = "Id Pregunta: 6441. Castilla La Mancha 2009";


//  Id pregunta: 7142 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Las siglas CAAT en relaci&oacute;n con los Sistemas de Informaci&oacute;n significan";
 choices[59]= new Array();
 choices[59][0] = "Computed-Assisted Audit Techniques";
 choices[59][1] = "Campaign Against Automotive Trenes";
 choices[59][2] = "Centro para la Administraci&oacute;n de Alternativas Tecnol&oacute;gicas";
 choices[59][3] = "Computer-Assisted Advanced Tools";
 answers[59] = choices[59][0];
 units[59] = "31";
 comments[59] = "Id Pregunta: 7142. Examen TIC B 2009";


//  Id pregunta: 8485 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  Se est&aacute; planificando la configuraci&oacute;n de los equipos de un centro de tratamiento de la informaci&oacute;n, seg&uacute;n un Enfoque basado en el riesgo. De acuerdo con la metodolog&iacute;a MAGERIT, la tarea de valoraci&oacute;n de salvaguardias se encuadra en el proceso:";
 choices[60]= new Array();
 choices[60][0] = "Gesti&oacute;n de riesgos.";
 choices[60][1] = "An&aacute;lisis de salvaguardias.";
 choices[60][2] = "An&aacute;lisis de riesgos.";
 choices[60][3] = "Gesti&oacute;n de salvaguardias.";
 answers[60] = choices[60][2];
 units[60] = "33";
 comments[60] = "Id Pregunta: 8485. Examen TIC A2 2010 interna";


//  Id pregunta: 8486 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  Los centros de proceso de datos o datacenters deben cumplir una serie de caracter&iacute;sticas de seguridad f&iacute;sica, &iquest;cu&aacute;l de las siguientes NO es una buena pol&iacute;tica de seguridad?";
 choices[61]= new Array();
 choices[61][0] = "Debe disponer de puertas de acceso grandes.";
 choices[61][1] = "Debe estar expl&iacute;citamente se&ntilde;alizado.";
 choices[61][2] = "Debe evitar tener ventanas.";
 choices[61][3] = "Dispondr&aacute; de un sistema de refrigeraci&oacute;n";
 answers[61] = choices[61][1];
 units[61] = "32,33";
 comments[61] = "Id Pregunta: 8486. Examen TIC A2 2010 interna";


//  Id pregunta: 8858 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  En relacion con la Metodolog&iacute;a de An&aacute;lisis y Gesti&oacute;n de Riesgos de los Sistemas de Informaci&oacute;n (MAGERIT). Se&ntilde;ale cual de las opciones siguientes NO es correcta.";
 choices[62]= new Array();
 choices[62][0] = "MAGERIT figura en el inventario de m&eacute;todos de an&aacute;lisis y gesti&oacute;n de riesgos de ENISA (European Network and Information Security Agency)";
 choices[62][1] = "El modelo normativo de MAGERIT se apoya en tres submodelos: an&aacute;lisis, gesti&oacute;n y procesos.";
 choices[62][2] = "Uno de los objetivos de MAGERIT consiste en preparar a la Organizaci&oacute;n para procesos de evaluaci&oacute;n, auditor&iacute;a, certificaci&oacute;n o acreditaci&oacute;n";
 choices[62][3] = "PILAR es una herramienta que implementa la metodolog&iacute;a MAGERIT de an&aacute;lisis y gesti&oacute;n de riesgos";
 answers[62] = choices[62][1];
 units[62] = "32";
 comments[62] = "Id Pregunta: 8858. Analista Ayto. Madrid 2010";


//  Id pregunta: 9292 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes no es un dominio de control a contemplar en el Plan de Continuidad seg&uacute;n lo establecido por la norma ISO 17799?";
 choices[63]= new Array();
 choices[63][0] = "Clasificaci&oacute;n y control de activos.";
 choices[63][1] = "Est&aacute;ndar de seguridad.";
 choices[63][2] = "Conformidad";
 choices[63][3] = "Desarrollo y mantenimiento de sistemas.";
 answers[63] = choices[63][1];
 units[63] = "32";
 comments[63] = "Id Pregunta: 9292. ";


//  Id pregunta: 9296 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  &iquest;Cu&aacute;les son las dimensiones de seguridad seg&uacute;n CobiT?.";
 choices[64]= new Array();
 choices[64][0] = "Confidencialidad, Disponibilidad, Integridad y Autenticidad.";
 choices[64][1] = "Confidencialidad, Integridad y Disponibilidad.";
 choices[64][2] = "Confidencialidad, Integridad, Disponibilidad y Autenticaci&oacute;n.";
 choices[64][3] = "Confidencialidad, Integridad, Disponibilidad e Interoperabilidad.";
 answers[64] = choices[64][1];
 units[64] = "32";
 comments[64] = "Id Pregunta: 9296. ";


//  Id pregunta: 9303 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  Cu&aacute;l de los siguientes no es un requerimiento general de la labor de un auditor";
 choices[65]= new Array();
 choices[65][0] = "Proporcionar una garant&iacute;a razonable de que se alcanzan los objetivos de control";
 choices[65][1] = "Supervisar que la Direcci&oacute;n aborda obligatoriamente las acciones recomendadas";
 choices[65][2] = "Identificar si existen debilidades significativas en los controles";
 choices[65][3] = "Sustanciar el riesgo que puede estar asociado a las debilidades identificadas";
 answers[65] = choices[65][1];
 units[65] = "33";
 comments[65] = "Id Pregunta: 9303. ";


//  Id pregunta: 9304 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes no es una de las cinco funciones de la auditor&iacute;a inform&aacute;tica?";
 choices[66]= new Array();
 choices[66][0] = "Velar por la eficacia y eficiencia del sistema inform&aacute;tico";
 choices[66][1] = "Verificar el cumplimiento de las normas y est&aacute;ndares vigentes en la organizaci&oacute;n";
 choices[66][2] = "Verificar la calidad de los sistemas de informaci&oacute;n, y proponer e implantar mejoras en los mismos";
 choices[66][3] = "Supervisar los mecanismos de control interno";
 answers[66] = choices[66][2];
 units[66] = "31";
 comments[66] = "Id Pregunta: 9304. ";


//  Id pregunta: 9306 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  &iquest;Qu&eacute; se entiende por control interno?";
 choices[67]= new Array();
 choices[67][0] = "Cualquier actividad autom&aacute;tica empleada para prevenir o corregir errores que puedan afectar al funcionamiento de un sistema";
 choices[67][1] = "Cualquier actividad manual empleada para prevenir o corregir errores que puedan afectar al funcionamiento de un sistema";
 choices[67][2] = "Cualquier actividad manual o autom&aacute;tica empleada para prevenir o corregir errores que puedan afectar al funcionamiento de un sistema";
 choices[67][3] = "Ninguna de las anteriores";
 answers[67] = choices[67][2];
 units[67] = "31";
 comments[67] = "Id Pregunta: 9306. ";


//  Id pregunta: 9307 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  &iquest;Qu&eacute; se entiende por control concomitante?";
 choices[68]= new Array();
 choices[68][0] = "Un control a priori";
 choices[68][1] = "Un control en paralelo con el proceso";
 choices[68][2] = "Un control a posteriori.";
 choices[68][3] = "Ninguna de las anteriores.";
 answers[68] = choices[68][1];
 units[68] = "31";
 comments[68] = "Id Pregunta: 9307. ";


//  Id pregunta: 9308 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  Cu&aacute;l de las siguientes afirmaciones es falsa";
 choices[69]= new Array();
 choices[69][0] = "Un control de desarrollo es el que comprueba que el resultado obtenido concuerda con las especificaciones iniciales.";
 choices[69][1] = "Un control de proceso asegura que la explotaci&oacute;n se realiza con las versiones adecuadas de los programas y de los datos.";
 choices[69][2] = "Un control de continuaci&oacute;n determina que se evita la p&eacute;rdida o corrupci&oacute;n de informaci&oacute;n efectuando las salvaguardas y recuperaciones necesarias.";
 choices[69][3] = "Un control de configuraci&oacute;n asegura que la explotaci&oacute;n se realiza con las versiones adecuadas de los programas y de los datos.";
 answers[69] = choices[69][3];
 units[69] = "31";
 comments[69] = "Id Pregunta: 9308. ";


//  Id pregunta: 9310 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  &iquest;Qu&eacute; es una auditor&iacute;a de regularidad?";
 choices[70]= new Array();
 choices[70][0] = "Es la que eval&uacute;a la eficacia en la consecuci&oacute;n de objetivos y la eficiencia en los recursos empleados para alcanzarlos.";
 choices[70][1] = "Es aquella orientada a verificar el cumplimiento de la normativa aplicable.";
 choices[70][2] = "Es la especializada en descubrir fraudes y delitos.";
 choices[70][3] = "Ninguna de las anteriores";
 answers[70] = choices[70][1];
 units[70] = "31";
 comments[70] = "Id Pregunta: 9310. ";


//  Id pregunta: 9316 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l es la norma que regula el proceso de auditor&iacute;a?";
 choices[71]= new Array();
 choices[71][0] = "Aquella que se haya aprobado en el &aacute;mbito organizativo en el que se desarrolla la auditor&iacute;a";
 choices[71][1] = "COBIT";
 choices[71][2] = "El mandato para la auditor&iacute;a";
 choices[71][3] = "La pol&iacute;tica de seguridad de la organizaci&oacute;n";
 answers[71] = choices[71][2];
 units[71] = "31";
 comments[71] = "Id Pregunta: 9316. ";


//  Id pregunta: 9319 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;Qu&eacute; requisitos son necesarios para obtener y mantener una certificaci&oacute;n CISA?";
 choices[72]= new Array();
 choices[72][0] = "Aprobar el examen sobre las materias establecidas por la ISACA";
 choices[72][1] = "La a) y adem&aacute;s acreditar una experiencia profesional adecuada";
 choices[72][2] = "La b) y adem&aacute;s aceptar un c&oacute;digo de &eacute;tica profesional";
 choices[72][3] = "La c) pero acreditando peri&oacute;dicamente una formaci&oacute;n continua";
 answers[72] = choices[72][3];
 units[72] = "31";
 comments[72] = "Id Pregunta: 9319. ";


//  Id pregunta: 9322 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  Se&ntilde;ale la afirmaci&oacute;n verdadera sobre las pruebas de cumplimiento";
 choices[73]= new Array();
 choices[73][0] = "Son aquellas que se aplican para detectar la presencia o ausencia de errores en los procesos o controles, bas&aacute;ndose en muestreos estad&iacute;sticos o buscando espec&iacute;ficamente las operaciones de mayor riesgo";
 choices[73][1] = "Son aquellas orientadas a comprobar que se cumplen determinados procedimientos de control o procesos establecidos";
 choices[73][2] = "Son aquellas dedicadas exclusivamente a probar la existencia de controles";
 choices[73][3] = "Un ejemplo de pruebas de cumplimiento es la observaci&oacute;n de la ejecuci&oacute;n de los procesos";
 answers[73] = choices[73][1];
 units[73] = "31";
 comments[73] = "Id Pregunta: 9322. ";


//  Id pregunta: 9323 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Se&ntilde;ale la verdadera";
 choices[74]= new Array();
 choices[74][0] = "Si el impacto de un hallazgo seg&uacute;n su materialidad es bajo se refleja en el informe como posible debilidad del sistema de control";
 choices[74][1] = "Si el impacto de un hallazgo seg&uacute;n su materialidad es medio se describe dicho hallazgo como una vulnerabilidad a la que se expone el sistema";
 choices[74][2] = "Si el impacto de un hallazgo seg&uacute;n su materialidad es bajo se describe dicho hallazgo como una vulnerabilidad a la que se expone el sistema";
 choices[74][3] = "Si el impacto de un hallazgo seg&uacute;n su materialidad es medio se identifica como una debilidad que debe compensarse o anularse con m&aacute;s controles, o haciendo los existentes m&aacute;s estrictos";
 answers[74] = choices[74][2];
 units[74] = "31";
 comments[74] = "Id Pregunta: 9323. ";


//  Id pregunta: 9898 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  Tras la realizaci&oacute;n de un an&aacute;lisis de riesgos de acuerdo con MAGERIT 3.0, el informe que detalla los activos, sus dependencias, las dimensiones en que son valiosos y la estimaci&oacute;n de dicho valor, se denomina";
 choices[75]= new Array();
 choices[75][0] = "modelo de valor.";
 choices[75][1] = "declaraci&oacute;n de aplicabilidad.";
 choices[75][2] = "mapa de riesgos.";
 choices[75][3] = "estado de riesgo.";
 answers[75] = choices[75][0];
 units[75] = "31,32,33";
 comments[75] = "Id Pregunta: 9898. TIC A1, Examen 2013";


//  Id pregunta: 10548 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Los auditores que han participado en el desarrollo de un sistema podr&iacute;an haber perdido su independencia si: ";
 choices[76]= new Array();
 choices[76][0] = "Realizan una revisi&oacute;n del desarrollo del sistema ";
 choices[76][1] = "Recomiendan medidas de mejora";
 choices[76][2] = "Realizan una evaluaci&oacute;n independiente de la aplicaci&oacute;n despu&eacute;s de su puesta en producci&oacute;n ";
 choices[76][3] = "Participan activamente en el dise&ntilde;o e implementaci&oacute;n del sistema de aplicaci&oacute;n";
 answers[76] = choices[76][3];
 units[76] = "31, 32, 33";
 comments[76] = "Id Pregunta: 10548. La independencia puede verse afectada si el auditor se involucra activamente en el dise&ntilde;o e implementaci&oacute;n del sistema. ";


//  Id pregunta: 10550 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes amenazas de seguridad de Internet podr&iacute;a comprometer la integridad?";
 choices[77]= new Array();
 choices[77][0] = "Robo de los datos desde el cliente ";
 choices[77][1] = "Exposici&oacute;n de la informaci&oacute;n de configuraci&oacute;n de red ";
 choices[77][2] = "Un troyano en el navegador";
 choices[77][3] = "Escuchas ilegales en la red";
 answers[77] = choices[77][2];
 units[77] = "31, 32, 33";
 comments[77] = "Id Pregunta: 10550. NULL";


//  Id pregunta: 10553 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de las siguientes satisface una autenticaci&oacute;n de usuario de dos factores?";
 choices[78]= new Array();
 choices[78][0] = "Escaneo de iris y de huella dactilar";
 choices[78][1] = "Identificador de usuario y sistema GPS";
 choices[78][2] = "Smartcard que requiere un c&oacute;digo PIN";
 choices[78][3] = "Identificador de usuario m&aacute;s contrase&ntilde;a";
 answers[78] = choices[78][2];
 units[78] = "31, 32, 33";
 comments[78] = "Id Pregunta: 10553. Algo que  tienes (smartcard) + algo que conoces (c&oacute;digo PIN)";


//  Id pregunta: 10556 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Cual de las siguientes certificaciones profesionales NO pertenecen a ISACA";
 choices[79]= new Array();
 choices[79][0] = "CISSP";
 choices[79][1] = "CISA";
 choices[79][2] = "CRISC ";
 choices[79][3] = "CISM";
 answers[79] = choices[79][0];
 units[79] = "31, 32, 33";
 comments[79] = "Id Pregunta: 10556. CISSP pertenece a ISC2";


//  Id pregunta: 10557 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Cual es la &uacute;ltima versi&oacute;n de COBIT";
 choices[80]= new Array();
 choices[80][0] = "v4";
 choices[80][1] = "V4.1";
 choices[80][2] = "v5";
 choices[80][3] = "v6";
 answers[80] = choices[80][2];
 units[80] = "31, 32, 33";
 comments[80] = "Id Pregunta: 10557. Isaca lanz&oacute; el 10 de abril del 2012 COBIT 5";


//  Id pregunta: 10559 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Cual de los siguientes no es un principio de COBIT5";
 choices[81]= new Array();
 choices[81][0] = "Satisfacer las necesidades de las partes interesadas";
 choices[81][1] = "Unificar el Gobierno con la administraci&oacute;n";
 choices[81][2] = "Habilitar un enfoque hol&iacute;stico";
 choices[81][3] = "Aplicar un solo marco integrado";
 answers[81] = choices[81][1];
 units[81] = "31, 32, 33";
 comments[81] = "Id Pregunta: 10559. Uno de los principios es Separar el Gobierno de la Administraci&oacute;n";


//  Id pregunta: 10562 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Los controles detectivos tienen como objeto:";
 choices[82]= new Array();
 choices[82][0] = "reducir el riesgo ante una debilidad existente";
 choices[82][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[82][2] = "Solucionar problemas detectados por controles detectivos";
 choices[82][3] = "Reportar errores";
 answers[82] = choices[82][3];
 units[82] = "31, 32, 33";
 comments[82] = "Id Pregunta: 10562. ";


//  Id pregunta: 10563 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Los controles correctivos tienen como objeto:";
 choices[83]= new Array();
 choices[83][0] = "reducir el riesgo ante una debilidad existente";
 choices[83][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[83][2] = "Solucionar problemas detectados por controles detectivos";
 choices[83][3] = "Reportar errores";
 answers[83] = choices[83][2];
 units[83] = "31, 32, 33";
 comments[83] = "Id Pregunta: 10563. ";


//  Id pregunta: 10565 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  El volumen de datos en riesgo de p&eacute;rdida que la organizaci&oacute;n considera tolerable es:";
 choices[84]= new Array();
 choices[84][0] = "RPO (Recovery Point Objective)";
 choices[84][1] = "RTO (Recovery Time Objective) ";
 choices[84][2] = "DRP (Disater Recovery Plan)";
 choices[84][3] = "Business Impact Analysis (BIA)";
 answers[84] = choices[84][0];
 units[84] = "31, 32, 33";
 comments[84] = "Id Pregunta: 10565. ";


//  Id pregunta: 10570 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  La auditor&iacute;a bienal de cumplimiento de la LOPD y la realizaci&oacute;n de pruebas de hacking &eacute;tico tienen las siguientes similitudes y diferencias, marcar la respuesta verdadera";
 choices[85]= new Array();
 choices[85][0] = "El hacking &eacute;tico no es una herramienta de auditor&iacute;a ya que lo realizan los hackers solamente, mientras que la auditor&iacute;a LOPD lo realizan siempre juristas o personal de perfil TAC";
 choices[85][1] = "El hacking &eacute;tico es una t&eacute;cnica para probar los controles de seguridad de las aplicaciones y sirve para que un auditor de seguridad IT pueda encontrar deficiencias. Si la aplicaci&oacute;n maneja datos LOPD, la informaci&oacute;n del estado de estos controles puede servir de apoyo a la auditor&iacute;a de cumplimiento del reglamento asociado a la LOPD que tambi&eacute;n debe verificarse en la auditor&iacute;a bienal, que incluir&aacute; tanto aspectos organizativos como t&eacute;cnicos.";
 choices[85][2] = "La Auditor&iacute;a LOPD es una auditor&iacute;a IT estrictamente hablando, ya que no debe entrar a valorar aspectos organizativos y procedimientales mientras que el hacking &eacute;tico entra a valorar los valores &eacute;ticos de la empresa de cara al tratamiento de la informaci&oacute;n, en particular los datos de car&aacute;cter personal.";
 choices[85][3] = "El hacking &eacute;tico requiere de personal t&eacute;cnico exclusivamente (hackers o no) mientras que la auditor&iacute;a de cumplimiento de la LOPD s&oacute;lo debe contar con personal jurista y los responsables funcionales de las aplicaciones LOPD involucradas pero no a t&eacute;cnicos.";
 answers[85] = choices[85][1];
 units[85] = "31";
 comments[85] = "Id Pregunta: 10570. ";


//  Id pregunta: 10596 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Un plan de emergencia es un plan por el que...";
 choices[86]= new Array();
 choices[86][0] = "&hellip; se realiza una nueva puesta en marcha del negocio tras un incidente.";
 choices[86][1] = "&hellip; disminuye el riesgo de aparici&oacute;n de incidentes menores.";
 choices[86][2] = "&hellip; se fuerza la indisponibilidad de los recursos cr&iacute;ticos de informaci&oacute;n.";
 choices[86][3] = "&hellip; se prepara el entorno de continuidad en condiciones precarias.";
 answers[86] = choices[86][3];
 units[86] = "32";
 comments[86] = "Id Pregunta: 10596. ";


//  Id pregunta: 11106 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Seleccione la respuesta correcta sobre las estrategias de recuperaci&oacute;n.";
 choices[87]= new Array();
 choices[87][0] = "Los Cold Sites son instalaciones parcialmente configurados, que permiten la recuperaci&oacute;n en menos de una semana.";
 choices[87][1] = "Las instalaciones redundantes permiten una recuperaci&oacute;n inmediata ante una interrupci&oacute;n";
 choices[87][2] = "Los Hot Sites tienen un coste menor que los Cold Sites";
 choices[87][3] = "La configuraci&oacute;n m&aacute;s adecuada para un Warm Site es de mirroring.";
 answers[87] = choices[87][1];
 units[87] = "32";
 comments[87] = "Id Pregunta: 11106. ";


