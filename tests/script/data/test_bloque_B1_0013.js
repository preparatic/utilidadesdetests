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

//  Id pregunta: 1 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes es una herramienta inform&aacute;tica de apoyo a los compradores p&uacute;blicos?";
 choices[0]= new Array();
 choices[0][0] = "PROS@.";
 choices[0][1] = "ISTMO.";
 choices[0][2] = "SSD-AAPP.";
 choices[0][3] = "Ninguna de las anteriores.";
 answers[0] = choices[0][2];
 units[0] = "34";
 comments[0] = "Id Pregunta: 1. Modificada por JCED Preparatic XVII";


//  Id pregunta: 21 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;les son las caracter&iacute;sticas fundamentales establecidas por X/Open en el entorno de los sistemas abiertos?: ";
 choices[1]= new Array();
 choices[1][0] = "Interoperabilidad, seguridad y portabilidad";
 choices[1][1] = "Portabilidad, interconectividad e interoperabilidad";
 choices[1][2] = "Portabilidad, escalabilidad e interoperabilidad";
 choices[1][3] = "Integridad, interconectivilidad e interoperabilidad";
 answers[1] = choices[1][2];
 units[1] = "40";
 comments[1] = "Id Pregunta: 21. ";


//  Id pregunta: 26 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;C&oacute;mo se llama la licencia bajo la que se distribuye el software del proyecto GNU?:";
 choices[2]= new Array();
 choices[2][0] = "MPL";
 choices[2][1] = "BSD";
 choices[2][2] = "GPL";
 choices[2][3] = "PPL";
 answers[2] = choices[2][2];
 units[2] = "61";
 comments[2] = "Id Pregunta: 26. ";


//  Id pregunta: 49 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo para la ordenaci&oacute;n de alternativas en la selecci&oacute;n de bienes y servicios?:";
 choices[3]= new Array();
 choices[3][0] = "M&eacute;todo lexicogr&aacute;fico";
 choices[3][1] = "M&eacute;todo de Promethee";
 choices[3][2] = "M&eacute;todo Qualiflex";
 choices[3][3] = "M&eacute;todo heur&iacute;stico";
 answers[3] = choices[3][3];
 units[3] = "34";
 comments[3] = "Id Pregunta: 49. NULL";


//  Id pregunta: 87 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Qu&eacute; unidad funcional, dentro de las existentes habitualmente en la estructura inform&aacute;tica de un organismo p&uacute;blico, deber&iacute;a ejercer las funciones de control de calidad de los procesos, gesti&oacute;n de red y gesti&oacute;n de seguridad de datos y procesos?:";
 choices[4]= new Array();
 choices[4][0] = "Sistemas";
 choices[4][1] = "Desarrollo";
 choices[4][2] = "Operaciones/explotaci&oacute;n";
 choices[4][3] = "Soporte a usuarios";
 answers[4] = choices[4][0];
 units[4] = "26";
 comments[4] = "Id Pregunta: 87. ";


//  Id pregunta: 111 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Cuando una certificaci&oacute;n es realizada por un organismo de la Administraci&oacute;n, aquella se denomina:";
 choices[5]= new Array();
 choices[5][0] = "Prueba de conformidad";
 choices[5][1] = "Normalizaci&oacute;n";
 choices[5][2] = "Homologaci&oacute;n";
 choices[5][3] = "Especificaci&oacute;n";
 answers[5] = choices[5][2];
 units[5] = "42";
 comments[5] = "Id Pregunta: 111. ";


//  Id pregunta: 117 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Dentro de la estructura administrativa de normalizaci&oacute;n comunitaria, el organismo responsable para las telecomunicaciones es:";
 choices[6]= new Array();
 choices[6][0] = "CEN";
 choices[6][1] = "CENELEC";
 choices[6][2] = "ETSI";
 choices[6][3] = "ECMA";
 answers[6] = choices[6][2];
 units[6] = "42";
 comments[6] = "Id Pregunta: 117. ";


//  Id pregunta: 173 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  En cuanto al control de proyectos:";
 choices[7]= new Array();
 choices[7][0] = "El gr&aacute;fico de PERT est&aacute; basado en la representaci&oacute;n gr&aacute;fica de las duraciones de las etapas.";
 choices[7][1] = "El gr&aacute;fico de GANTT est&aacute; basado en la representaci&oacute;n gr&aacute;fica de las duraciones de las etapas.";
 choices[7][2] = "El gr&aacute;fico de Gantt consiste en una visualizaci&oacute;n del proyecto basada en las restricciones.";
 choices[7][3] = "Las respuestas 'a' y 'c' son correctas.";
 answers[7] = choices[7][1];
 units[7] = "27";
 comments[7] = "Id Pregunta: 173. ";


//  Id pregunta: 178 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  En el contexto de la capacidad y rendimiento de los sistemas:";
 choices[8]= new Array();
 choices[8][0] = "El equipo encargado de la gesti&oacute;n de capacidad estar&aacute; formado &uacute;nica y exclusivamente por usuarios muy experimentados en el negocio de la organizaci&oacute;n";
 choices[8][1] = "Una vez obtenido el visto bueno de la direcci&oacute;n al plan de desarrollo e implantaci&oacute;n, se deber&aacute; abordar el estudio de viabilidad";
 choices[8][2] = "El equipo encargado de la gesti&oacute;n de capacidad debe ser permanente en el tiempo";
 choices[8][3] = "Como consecuencia del abaratamiento de los equipos f&iacute;sicos la gesti&oacute;n de capacidad y del rendimiento es trivial";
 answers[8] = choices[8][2];
 units[8] = "35";
 comments[8] = "Id Pregunta: 178. NULL";


//  Id pregunta: 189 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica para la toma de decisiones individuales?";
 choices[9]= new Array();
 choices[9][0] = "Delphi";
 choices[9][1] = "Programaci&oacute;n lineal";
 choices[9][2] = "Teor&iacute;a de l&iacute;neas de espera";
 choices[9][3] = "An&aacute;lisis de redes";
 answers[9] = choices[9][0];
 units[9] = "23";
 comments[9] = "Id Pregunta: 189. Similar a examen TIC SS A 2003";


//  Id pregunta: 208 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En general la portabilidad de aplicaciones no exige:";
 choices[10]= new Array();
 choices[10][0] = "Utilizaci&oacute;n de lenguajes de programaci&oacute;n estandarizados";
 choices[10][1] = "Limitaci&oacute;n de las llamadas al S.O. desde el marco de una API estandarizada";
 choices[10][2] = "Limitaci&oacute;n de la interacci&oacute;n directa entre los programas y los componentes f&iacute;sicos";
 choices[10][3] = "Utilizaci&oacute;n de microprocesadores de similares caracter&iacute;sticas";
 answers[10] = choices[10][3];
 units[10] = "40";
 comments[10] = "Id Pregunta: 208. ";


//  Id pregunta: 271 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Indicar la verdadera respecto a la estructura de un sistema de informaci&oacute;n:";
 choices[11]= new Array();
 choices[11][0] = "En la estructura horizontal, y dentro de cada nivel, las funciones de un sistema de informaci&oacute;n se subdividen en aplicaciones o  procedimientos";
 choices[11][1] = "En la estructura horizontal, y dentro de cada nivel, las funciones de un sistema de informaci&oacute;n se subdividen en aplicaciones y procedimientos";
 choices[11][2] = "En la estructura vertical, y dentro de cada nivel, las funciones de un sistema de informaci&oacute;n se subdividen en aplicaciones o procedimientos";
 choices[11][3] = "En la estructura vertical, y dentro de cada nivel, las funciones de un sistema de informaci&oacute;n se subdividen en aplicaciones y procedimientos";
 answers[11] = choices[11][0];
 units[11] = "21";
 comments[11] = "Id Pregunta: 271. ";


//  Id pregunta: 349 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  La Uni&oacute;n Internacional de Telecomunicaciones (en ingl&eacute;s ITU) tiene tres sectores principales. &iquest; Cu&aacute;l no es uno de ellos?:";
 choices[12]= new Array();
 choices[12][0] = "Sector de Radiocomunicaciones (ITU-R)";
 choices[12][1] = "Sector de Estandarizaci&oacute;n de Telecomunicaciones (ITU-T)";
 choices[12][2] = "Sector de Desarrollo (ITU-D)";
 choices[12][3] = "Todas son secciones de la Uni&oacute;n Internacional de Comunicaciones";
 answers[12] = choices[12][3];
 units[12] = "42";
 comments[12] = "Id Pregunta: 349. ";


//  Id pregunta: 358 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Las medidas de protecci&oacute;n antivirus:";
 choices[13]= new Array();
 choices[13][0] = "Pueden ser de prevenci&oacute;n o de detecci&oacute;n";
 choices[13][1] = "Pueden ser de prevenci&oacute;n, de detecci&oacute;n o de contingencia";
 choices[13][2] = "S&oacute;lo son efectivas frente a ataques de virus tipo &quot;gusanos&quot;";
 choices[13][3] = "Deben minimizar los efectos ulteriores a la infecci&oacute;n de un sistema inform&aacute;tico";
 answers[13] = choices[13][1];
 units[13] = "33";
 comments[13] = "Id Pregunta: 358. ";


//  Id pregunta: 403 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Respecto a las caracter&iacute;sticas de un sistema abierto (es decir, aqu&eacute;l que cumple con las especificaciones de OSI), podemos decir que:";
 choices[14]= new Array();
 choices[14][0] = "Interoperabilidad es la posibilidad de enlazar ordenadores de distintas marcas con la seguridad de que han de trabajar conjuntamente, dando la sensaci&oacute;n de que funcionan como un &uacute;nico sistema";
 choices[14][1] = "Portabilidad es la posibilidad de que aplicaciones de distintos desarrolladores de software funcionen en m&aacute;quinas de diversos fabricantes";
 choices[14][2] = "Escalabilidad o capacidad de crecimiento es la posibilidad de utilizar el mismo entorno de software en diferentes gamas de ordenadores, desde ordenadores de sobremesa hasta mainframes";
 choices[14][3] = "Todas las respuestas anteriores son correctas";
 answers[14] = choices[14][3];
 units[14] = "40";
 comments[14] = "Id Pregunta: 403. ";


//  Id pregunta: 416 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Se define la escalabilidad como:";
 choices[15]= new Array();
 choices[15][0] = "La posibilidad de que aplicaciones de distintos desarrolladores funcionen en m&aacute;quinas de distintos fabricantes";
 choices[15][1] = "La posibilidad de ampliar la capacidad de almacenamiento de un equipo sin necesidad de recurrir a piezas del fabricante que lo construy&oacute;";
 choices[15][2] = "La posibilidad de enlazar en una red, ordenadores de la misma gama, con la seguridad de que funcionar&aacute;n como un &uacute;nico sistema";
 choices[15][3] = "La posibilidad de utilizar el mismo entorno se software en diferentes gamas de ordenadores, desde ordenadores de sobremesa hasta mainframes";
 answers[15] = choices[15][3];
 units[15] = "40";
 comments[15] = "Id Pregunta: 416. ";


//  Id pregunta: 443 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, son fuentes accesibles al p&uacute;blico:";
 choices[16]= new Array();
 choices[16][0] = "El censo promocional";
 choices[16][1] = "Los repertorios telef&oacute;nicos";
 choices[16][2] = "Los medios de comunicaci&oacute;n";
 choices[16][3] = "Todas las anteriores los son";
 answers[16] = choices[16][3];
 units[16] = "29";
 comments[16] = "Id Pregunta: 443. ";


//  Id pregunta: 460 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Si una tarea dentro de un diagrama PERT excede su duraci&oacute;n en un tiempo:";
 choices[17]= new Array();
 choices[17][0] = "La duraci&oacute;n del camino cr&iacute;tico no variar&aacute;";
 choices[17][1] = "La duraci&oacute;n del camino cr&iacute;tico variar&aacute; en la misma magnitud";
 choices[17][2] = "No se puede afirmar qu&eacute; ocurrir&aacute; con la duraci&oacute;n del camino cr&iacute;tico";
 choices[17][3] = "Se necesita que otra tarea disminuya su duraci&oacute;n en la misma magnitud para que la duracci&oacute;n del proyecto no varie";
 answers[17] = choices[17][2];
 units[17] = "28";
 comments[17] = "Id Pregunta: 460. ";


//  Id pregunta: 465 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Un activo es, de acuerdo a MAGERIT:";
 choices[18]= new Array();
 choices[18][0] = "Da&ntilde;o producido a una organizaci&oacute;n por un posible incidente";
 choices[18][1] = "Resultado de una agresi&oacute;n";
 choices[18][2] = "Evento que desencadena un incidente";
 choices[18][3] = "Ninguno de los anteriores";
 answers[18] = choices[18][3];
 units[18] = "31, 32, 33";
 comments[18] = "Id Pregunta: 465. ";


//  Id pregunta: 478 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La capacidad de un sistema es:";
 choices[19]= new Array();
 choices[19][0] = "La cantidad de trabajo &uacute;til por unidad de tiempo";
 choices[19][1] = "La cantidad de trabajo &uacute;til por unidad de tiempo en un entorno de carga determinado";
 choices[19][2] = "La m&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo";
 choices[19][3] = "La m&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de carga determinado";
 answers[19] = choices[19][3];
 units[19] = "38";
 comments[19] = "Id Pregunta: 478. ";


//  Id pregunta: 479 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Las caracter&iacute;sticas fundamentales que se buscan con los sistemas abiertos son :";
 choices[20]= new Array();
 choices[20][0] = "Interoperabilidad, escalabilidad y portabilidad";
 choices[20][1] = "Sistemas multiproceso, multiusuario y multitarea compuestos por componentes de diversos fabricantes";
 choices[20][2] = "Poder pasar de un ordenador de sobremesa a un gran mainframe sin tener que cambiar de entorno de trabajo";
 choices[20][3] = "Interconexi&oacute;n de sistemas bajo un mismo sistema operativo, conectividad de perif&eacute;ricos, un entorno consistente en productos y tecnolog&iacute;as y un mejor posicionamiento desde el punto de vista econ&oacute;mico";
 answers[20] = choices[20][0];
 units[20] = "40";
 comments[20] = "Id Pregunta: 479. ";


//  Id pregunta: 548 AÃ±o de creación de pregunta: 2004-01-01
 questions[21]= "22)  La LOPD es FALSO que NO es de aplicaci&oacute;n a:";
 choices[21]= new Array();
 choices[21][0] = "Ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas";
 choices[21][1] = "Ficheros establecidos para la investigaci&oacute;n del terrorismo y de formas graves de delincuencia organizada";
 choices[21][2] = "Los ficheros regulados por la legislaci&oacute;n de r&eacute;gimen electoral";
 choices[21][3] = "Los ficheros mantenidos por personas f&iacute;sicas en el ejercicio de actividades exclusivamente personales o dom&eacute;sticas.";
 answers[21] = choices[21][2];
 units[21] = "29";
 comments[21] = "Id Pregunta: 548. ";


//  Id pregunta: 570 AÃ±o de creación de pregunta: 2006-01-01
 questions[22]= "23)  Seg&uacute;n Stephen P. Robbins cual de los siguientes no es un paso en el proceso de planificaci&oacute;n estrat&eacute;gica";
 choices[22]= new Array();
 choices[22][0] = "Definir las misiones de la empresa seg&uacute;n las estrategias";
 choices[22][1] = "Establecer objetivos";
 choices[22][2] = "Instrumentar la estrategia.";
 choices[22][3] = "Examinar el ambiente";
 answers[22] = choices[22][0];
 units[22] = "23";
 comments[22] = "Id Pregunta: 570. ";


//  Id pregunta: 585 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  Para mantener una buena gesti&oacute;n en las relaciones con los usuarios es necesario:";
 choices[23]= new Array();
 choices[23][0] = "No generar falsas expectativas";
 choices[23][1] = "Informar al usuario cual es el problema t&eacute;cnico.";
 choices[23][2] = "Adaptarse a las necesidades y calendario del usuario";
 choices[23][3] = "Aceptar todas las nuevas demandas del usuario";
 answers[23] = choices[23][0];
 units[23] = "26";
 comments[23] = "Id Pregunta: 585. ";


//  Id pregunta: 659 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  Los derechos de explotaci&oacute;n de un programa de ordenador cuando el autor es una persona f&iacute;sica se mantienen como m&aacute;ximo:";
 choices[24]= new Array();
 choices[24][0] = "Durante toda la vida del autor y del heredero leg&iacute;timo de estos derechos";
 choices[24][1] = "Durante toda la vida del autor y cincuenta a&ntilde;os despu&eacute;s de su muerte";
 choices[24][2] = "Durante toda la vida del autor y setenta a&ntilde;os despu&eacute;s de su muerte";
 choices[24][3] = "De forma indefinida mientras no se produzca la cesi&oacute;n de estos derechos por parte del titular de los mismos";
 answers[24] = choices[24][2];
 units[24] = "36";
 comments[24] = "Id Pregunta: 659. ";


//  Id pregunta: 4251 AÃ±o de creación de pregunta: 2007-01-01
 questions[25]= "26)  Respecto a la iniciativa i2010 de la Comisi&oacute;n Europea:";
 choices[25]= new Array();
 choices[25][0] = "La iniciativa nace en el a&ntilde;o 2005, como respuesta a la revisi&oacute;n de la estrategia de Lisboa para el crecimiento y el empleo.";
 choices[25][1] = "Una de las tres prioridades que se plantea es &ldquo;el refuerzo de la innovaci&oacute;n y la inversi&oacute;n en la investigaci&oacute;n sobre las TIC con el fin de fomentar el crecimiento y la creaci&oacute;n de m&aacute;s empleos y de m&aacute;s de calidad&rdquo;";
 choices[25][2] = "La tercera prioridad de la Comisi&oacute;n consiste en &ldquo;el logro de una sociedad europea de la informaci&oacute;n basada en la inclusi&oacute;n que fomenta el crecimiento y el empleo de una manera coherente con el desarrollo sostenible y que da la prioridad a la mejora de los servicios p&uacute;blicos y de la calidad de vida&rdquo;.";
 choices[25][3] = "Todas las anteriores son ciertas";
 answers[25] = choices[25][3];
 units[25] = "30";
 comments[25] = "Id Pregunta: 4251. Esta pregunta es antigua, pero nunca se sabe. M&aacute;s informaci&oacute;n en: http://europa.eu/legislation_summaries/information_society/strategies/c11328_es.htm";


//  Id pregunta: 4296 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  Para contemplar la plena ocupaci&oacute;n de todos los recursos, en un diagrama de Gantt:";
 choices[26]= new Array();
 choices[26][0] = "Puede asignarse a un recurso distintas tarea.";
 choices[26][1] = "S&oacute;lo debe asignarse a cada recurso una tarea.";
 choices[26][2] = "Se puede asignar la misma tarea a varios recursos.";
 choices[26][3] = "No es necesario que los trabajos se descompongan hasta la unidad m&iacute;nima de tratamiento.";
 answers[26] = choices[26][0];
 units[26] = "27";
 comments[26] = "Id Pregunta: 4296. Examen TIC MAP B 2005";


//  Id pregunta: 4405 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  Se&ntilde;ale la afirmaci&oacute;n incorrecta. El departamento de seguridad inform&aacute;tica dentro de una organizaci&oacute;n especializada en tecnolog&iacute;as de informaci&oacute;n:";
 choices[27]= new Array();
 choices[27][0] = "Debe ser independiente del departamento de sistemas.";
 choices[27][1] = "Debe ser independiente del departamento de comunicaciones.";
 choices[27][2] = "Debe ser independiente del departamento de desarrollo.";
 choices[27][3] = "Centra su actividad en la seguridad en las redes.";
 answers[27] = choices[27][3];
 units[27] = "26";
 comments[27] = "Id Pregunta: 4405. ";


//  Id pregunta: 4439 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  Se&ntilde;ale la que no sea una de las t&eacute;cnicas especificas para el an&aacute;lisis de riesgos que establece MAGERIT.";
 choices[28]= new Array();
 choices[28][0] = "An&aacute;lisis de procesos.";
 choices[28][1] = "An&aacute;lisis mediante tablas.";
 choices[28][2] = "An&aacute;lisis algor&iacute;tmico.";
 choices[28][3] = "&Aacute;rboles de ataque.";
 answers[28] = choices[28][0];
 units[28] = "33";
 comments[28] = "Id Pregunta: 4439. ";


//  Id pregunta: 4447 AÃ±o de creación de pregunta: 2007-01-01
 questions[29]= "30)  Cual es el nombre con que se conoce en MAGERIT versi&oacute;n 2 a la persona de la organizaci&oacute;n, con buen conocimiento de personas y unidades implicadas en el proyecto de An&aacute;lisis de Gesti&oacute;n de Riesgos, que tiene la capacidad para conectar al equipo de proyecto con el grupo de usuarios?";
 choices[29]= new Array();
 choices[29][0] = "Promotor";
 choices[29][1] = "Enlace operacional";
 choices[29][2] = "Director de proyecto";
 choices[29][3] = "Responsable de servicios internos";
 answers[29] = choices[29][1];
 units[29] = "33";
 comments[29] = "Id Pregunta: 4447. ";


//  Id pregunta: 4449 AÃ±o de creación de pregunta: 2007-01-01
 questions[30]= "31)  En relaci&oacute;n con la licencia GPL (GNU Public License), una de las siguientes afirmaciones no es cierta.";
 choices[30]= new Array();
 choices[30][0] = "Permite redistribuir, ejecutar y mejorar los programas.";
 choices[30][1] = "Proh&iacute;be cobrar un precio por el acto f&iacute;sico de transferir una copia.";
 choices[30][2] = "No permite que incluya sus programas en programas propietarios.";
 choices[30][3] = "Fue creada por la Free Software Foundation.";
 answers[30] = choices[30][1];
 units[30] = "36";
 comments[30] = "Id Pregunta: 4449. ";


//  Id pregunta: 4510 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos se utiliza para determinar la viabilidad del proyecto en el an&aacute;lisis coste-beneficio?";
 choices[31]= new Array();
 choices[31][0] = "Inversi&oacute;n promedio.";
 choices[31][1] = "Coste de desarrollo actualizado.";
 choices[31][2] = "Beneficio neto.";
 choices[31][3] = "Valor actual.";
 answers[31] = choices[31][3];
 units[31] = "27";
 comments[31] = "Id Pregunta: 4510. Castilla la Mancha 06";


//  Id pregunta: 4611 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  Seg&uacute;n la Norma UNE-ISO/IEC 17799:2000 cual de los siguientes aspectos NO esta incluido en el control de accesos";
 choices[32]= new Array();
 choices[32][0] = "seguridad de los servicios de red";
 choices[32][1] = "sincronizaci&oacute;n de relojes";
 choices[32][2] = "responsabilidades del usuario";
 choices[32][3] = "control de acceso a la librer&iacute;a de programa as fuente";
 answers[32] = choices[32][3];
 units[32] = "33";
 comments[32] = "Id Pregunta: 4611. ISO 17799 actualmente es ISO 27002";


//  Id pregunta: 4614 AÃ±o de creación de pregunta: 2007-01-01
 questions[33]= "34)  Las pruebas de auditoria que permiten medir el riesgo por deficiencia de los controles existentes o por su ausencia se denominan";
 choices[33]= new Array();
 choices[33][0] = "de cumplimiento";
 choices[33][1] = "de verificaci&oacute;n";
 choices[33][2] = "de adecuaci&oacute;n";
 choices[33][3] = "sustantivas";
 answers[33] = choices[33][3];
 units[33] = "31";
 comments[33] = "Id Pregunta: 4614. ";


//  Id pregunta: 4658 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l es el periodo de vigencia de los certificados contenidos en el DNI electronico?";
 choices[34]= new Array();
 choices[34][0] = "El mismo que el DNI ";
 choices[34][1] = "36 meses";
 choices[34][2] = "30 meses";
 choices[34][3] = "12 meses";
 answers[34] = choices[34][2];
 units[34] = "30";
 comments[34] = "Id Pregunta: 4658. RD 1553/2005, art&iacute;culo 12";


//  Id pregunta: 4853 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes respuestas NO corresponde al modelo de compresi&oacute;n de im&aacute;genes JPEG (JointPhotographic Experts Group)?";
 choices[35]= new Array();
 choices[35][0] = "B&aacute;sico/secuencial";
 choices[35][1] = "Jer&aacute;rquico";
 choices[35][2] = "Progresivo";
 choices[35][3] = "Conjugado modificado";
 answers[35] = choices[35][3];
 units[35] = "114";
 comments[35] = "Id Pregunta: 4853. ";


//  Id pregunta: 4901 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  En el caso de que &eacute;sta sea exigida &iquest;A cu&aacute;nto asciende la garant&iacute;a provisional que deben depositar los contratistas (art&iacute;culo 103 RD Legislativo 3/2011)?";
 choices[36]= new Array();
 choices[36][0] = "Del 2% del importe de licitaci&oacute;n";
 choices[36][1] = "No podr&aacute; ser superior a un 3% del presupuesto del contrato, excluido el Impuesto sobre el Valor A&ntilde;adido";
 choices[36][2] = "Del 2% del importe del contrato";
 choices[36][3] = "10%";
 answers[36] = choices[36][1];
 units[36] = "41";
 comments[36] = "Id Pregunta: 4901. ";


//  Id pregunta: 5053 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Se&ntilde;ale de la siguiente relaci&oacute;n el miembro que NO forma parte del Consejo Consultivo de la Agencia Espa&ntilde;ola deProtecci&oacute;n de Datos";
 choices[37]= new Array();
 choices[37][0] = "Un experto en la materia";
 choices[37][1] = "Un miembro de la Real Academia de la Historia";
 choices[37][2] = "Un representante de la Asociaci&oacute;n de Ingenieros T&eacute;cnicos en Inform&aacute;tica";
 choices[37][3] = "Un representante de la Administraci&oacute;n Local";
 answers[37] = choices[37][2];
 units[37] = "29";
 comments[37] = "Id Pregunta: 5053. Examen TIC A 2007";


//  Id pregunta: 5416 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  A ra&iacute;z del esc&aacute;ndalo ENRON se vio el problema de que la misma empresa realizara la Auditor&iacute;a y Consultor&iacute;a. Los Auditores a veces no &quot;contaban&quot; todo lo que ve&iacute;an porque las situaciones con las que se encontraban hab&iacute;an sido fruto del trabajo de sus compa&ntilde;eros consultores. La diferencia entre auditor y consultor era de lo m&aacute;s difuso (A veces eran los mismos). Cual de estas cuatro tesis es la correcta:";
 choices[38]= new Array();
 choices[38][0] = "En la Auditor&iacute;a Inform&aacute;tica el inter&eacute;s del cliente no es objeto del informe. Estamos hablando de una revisi&oacute;n, an&aacute;lisis, evaluaci&oacute;n orientada a describir una situaci&oacute;n. Es l&iacute;cito realizar una Auditor&iacute;a Inform&aacute;tica pensando en la Consultor&iacute;a que va a venir puesto que la detecci&oacute;n de un problema es la antesala de una propuesta de soluci&oacute;n";
 choices[38][1] = "En la Auditor&iacute;a Inform&aacute;tica hay que anteponer el inter&eacute;s del cliente al de los consultores. Una Auditor&iacute;a Inform&aacute;tica emite un informe escrito que resume una situaci&oacute;n desde un punto de vista independiente. No obstante las empresas son entes flexibles, por lo que la Auditor&iacute;a no debe cargar las tintas en problemas sencillos que se pueden arreglar con sencillas consultor&iacute;as hechas por los mismos auditores. ";
 choices[38][2] = "En la Auditor&iacute;a Inform&aacute;tica hay que anteponer el inter&eacute;s del cliente al de los consultores. Una Auditor&iacute;a Inform&aacute;tica emite un informe escrito que resume una situaci&oacute;n desde un punto de vista independiente, mientras que una Consultor&iacute;a suele requerir mayor pronunciamiento y mejor definici&oacute;n de las soluciones. ";
 choices[38][3] = "Auditor&iacute;a y Consultor&iacute;a deben estar perfectamente divididos, deben llevarla diferentes empresas y diferentes personas";
 answers[38] = choices[38][2];
 units[38] = "31";
 comments[38] = "Id Pregunta: 5416. Castilla y Le&oacute;n";


//  Id pregunta: 5417 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  &Eacute;tica del Auditor. Cuatro afirmaciones.- El Auditor sirve con diligencia, lealtad y honradez los intereses de empleados, accionistas, clientes y p&uacute;blico en general. No participar&aacute; en ninguna actividad ilegal o impropia- Garantiza la confidencialidad de la informaci&oacute;n obtenida en el ejercicio de sus funciones. No la usar&aacute; en beneficio propio, ni dejar&aacute; que llegue a terceros.- Evita actividades que pongan en entredicho su independencia.- Fomenta la formaci&oacute;n de los directivos de la empresa, sus clientes, incluso del p&uacute;blico en general, para que sepan de que va la Auditor&iacute;a y los Sistemas de Informaci&oacute;n";
 choices[39]= new Array();
 choices[39][0] = "Las tres primeras afirmaciones son correctas, la cuarta no";
 choices[39][1] = "Todas son correctas";
 choices[39][2] = "La cuarta es correcta, las otras tres son afirmaciones obvias";
 choices[39][3] = "Son correctas, pero de ellas no se desprende nada pr&aacute;ctico";
 answers[39] = choices[39][1];
 units[39] = "31";
 comments[39] = "Id Pregunta: 5417. Castilla y Le&oacute;n";


//  Id pregunta: 5548 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  Respecto a las Transmisiones de datos entre Administraciones P&uacute;blicas, se&ntilde;ale la verdadera:";
 choices[40]= new Array();
 choices[40][0] = "Cada Administraci&oacute;n deber&aacute; facilitar, en todo caso, el acceso de las restantes Administraciones a los datos relativos a los interesados, que obren en su poder. ";
 choices[40][1] = "Se facilitar&aacute; dicho acceso &uacute;nicamente cuando una norma con rango de Ley as&iacute; lo determine.";
 choices[40][2] = "Se facilitar&aacute; dicho acceso para los datos en soporte electr&oacute;nico precisando de consentimiento del interesado, que podr&aacute; recabarse de forma electr&oacute;nica, en caso de tratarse de datos de caracter personal.";
 choices[40][3] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones a los datos relativos a los interesados que obren en su poder &uacute;nicamente si el interesado da su consentimiento.";
 answers[40] = choices[40][2];
 units[40] = "43";
 comments[40] = "Id Pregunta: 5548. NULL";


//  Id pregunta: 5794 AÃ±o de creación de pregunta: 2009-01-01
 questions[41]= "42)  Las Administraciones P&uacute;blicas pueden utilizar varios medios para su identificaci&oacute;n electr&oacute;nica. Indique cual NO es uno de ellos.";
 choices[41]= new Array();
 choices[41][0] = "Sistemas de firma electr&oacute;nica, como el sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica.";
 choices[41][1] = "Firma electr&oacute;nica del personal al servicio de las Administraciones P&uacute;blicas.";
 choices[41][2] = "Intercambio electr&oacute;nico de datos en entornos cerrados de comunicaci&oacute;n, conforme a lo espec&iacute;ficamente acordado en las partes.";
 choices[41][3] = "La identidad electr&oacute;nica reconocida del &oacute;rgano administrativo.";
 answers[41] = choices[41][3];
 units[41] = "30";
 comments[41] = "Id Pregunta: 5794. MAP 2008 A2";


//  Id pregunta: 5810 AÃ±o de creación de pregunta: 2009-01-01
 questions[42]= "43)  Indique la respuesta correcta respecto al RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico";
 choices[42]= new Array();
 choices[42][0] = "Regula la subasta electr&oacute;nica";
 choices[42][1] = "Proh&iacute;be la subasta electr&oacute;nica";
 choices[42][2] = "Suprime la adjudicaci&oacute;n directa";
 choices[42][3] = "No menciona la subasta electr&oacute;nica";
 answers[42] = choices[42][0];
 units[42] = "41";
 comments[42] = "Id Pregunta: 5810. MAP 2008 A1";


//  Id pregunta: 5817 AÃ±o de creación de pregunta: 2009-01-01
 questions[43]= "44)  &iquest;Qu&eacute; NO es cierto de la Plataforma de Contrataci&oacute;n del Sector P&uacute;blico (art&iacute;culo 334 RD Legislativo 3/2011)?";
 choices[43]= new Array();
 choices[43][0] = "El acceso de los interesados se efectuar&aacute; a trav&eacute;s de un portal &uacute;nico";
 choices[43][1] = "Las Comunidades Aut&oacute;nomas y las Entidades Locales deber&aacute;n dar publicidad a sus procedimientos de contrataci&oacute;n a trav&eacute;s de la Plataforma de Contrataci&oacute;n del Estado";
 choices[43][2] = "Es una plataforma electr&oacute;nica que permite dar publicidad a trav&eacute;s de Internet de los contratos del sector p&uacute;blico";
 choices[43][3] = "La publicaci&oacute;n de anuncios y otra informaci&oacute;n relativa a los contratos en la plataforma surtir&aacute; los efectos previstos en la ley";
 answers[43] = choices[43][1];
 units[43] = "41";
 comments[43] = "Id Pregunta: 5817. ";


//  Id pregunta: 6078 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  Los procesos de Gesti&oacute;n de las Comunicaciones del Proyecto incluyen lo siguiente:";
 choices[44]= new Array();
 choices[44][0] = "An&aacute;lisis de las Comunicaciones, Dise&ntilde;o de las Comunicaciones, Informar del Rendimiento y Gestionar a los interesados.";
 choices[44][1] = "Planificaci&oacute;n de las Comunicaciones, Distribuci&oacute;n de la Informaci&oacute;n, Informar del Rendimiento y Gestionar a los Interesados.";
 choices[44][2] = "An&aacute;lisis de las Comunicaciones, Dise&ntilde;o de las Comunicaciones y Desarrollo de las Comunicaciones.";
 choices[44][3] = "An&aacute;lisis de las Comunicaciones y Dise&ntilde;o de las Comunicaciones.";
 answers[44] = choices[44][1];
 units[44] = "27";
 comments[44] = "Id Pregunta: 6078. ";


//  Id pregunta: 6165 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  Se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[45]= new Array();
 choices[45][0] = "Los datos analizados y procesados se convierten en informaci&oacute;n, a la cual si le aporta la experiencia se obtiene el conocimiento.";
 choices[45][1] = "La informaci&oacute;n analizada y procesada se convierte en datos, a los cuales si le aporta la experiencia se obtiene el conocimiento.";
 choices[45][2] = "El conocimiento analizado y procesado se convierte en informaci&oacute;n, a la cual si se le aporta la experiencia se obtienen los datos.";
 choices[45][3] = "Todas las anteriores son correctas.";
 answers[45] = choices[45][0];
 units[45] = "21";
 comments[45] = "Id Pregunta: 6165. ";


//  Id pregunta: 6350 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  El proyecto de Reutilizaci&oacute;n de la informaci&oacute;n del Sector P&uacute;blico, promovido por la Secretaria de Estado de Telecomunicaciones y para la sociedad de la informaci&oacute;n se llama:";
 choices[46]= new Array();
 choices[46][0] = "Reutiliza";
 choices[46][1] = "Comparte";
 choices[46][2] = "Rhodas";
 choices[46][3] = "Aporta";
 answers[46] = choices[46][3];
 units[46] = "30";
 comments[46] = "Id Pregunta: 6350. http://datos.gob.es/content/proyecto-aporta";


//  Id pregunta: 6374 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  &iquest;Qu&eacute; Real Decreto define el Esquema Nacional de Interoperabilidad?";
 choices[47]= new Array();
 choices[47][0] = "RD 4/2010";
 choices[47][1] = "RD 1671/2009";
 choices[47][2] = "RD 4/2009";
 choices[47][3] = "RD 1671/2007";
 answers[47] = choices[47][0];
 units[47] = "43";
 comments[47] = "Id Pregunta: 6374. NULL";


//  Id pregunta: 6381 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  De acuerdo a lo establecido en el Esquema Nacional de Interoperabilidad, las administraciones utilizar&aacute;n para las aplicaciones que declaren como de fuentes abiertas aquellas licencias que aseguren que los programas, datos o informaci&oacute;n que se comparten:";
 choices[48]= new Array();
 choices[48][0] = "Se ejecuten exclusivamente para el prop&oacute;sito definido.";
 choices[48][1] = "S&oacute;lo permitan conocer su c&oacute;digo fuente a las personas autorizadas.";
 choices[48][2] = "No pueden modificarse sin permiso previo del autor.";
 choices[48][3] = "Todas las anteriores son falsas.";
 answers[48] = choices[48][3];
 units[48] = "43";
 comments[48] = "Id Pregunta: 6381. Art&iacute;culo 16 ENI";


//  Id pregunta: 6385 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  &iquest;D&oacute;nde debe publicarse la orden de creaci&oacute;n de una sede electr&oacute;nica?";
 choices[49]= new Array();
 choices[49][0] = "En la p&aacute;gina web del organismo correspondiente";
 choices[49][1] = "No es necesaria ninguna publicaci&oacute;n";
 choices[49][2] = "En el Bolet&iacute;n Oficial del Estado";
 choices[49][3] = "En dos diarios de tirada nacional";
 answers[49] = choices[49][2];
 units[49] = "43";
 comments[49] = "Id Pregunta: 6385. Art&iacute;culo 3.2 RD 1671/2009";


//  Id pregunta: 6441 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  Generalmente el auditor inform&aacute;tico elevar&aacute; su informe a";
 choices[50]= new Array();
 choices[50][0] = "La direcci&oacute;n de la Organizaci&oacute;n";
 choices[50][1] = "La direcci&oacute;n de Inform&aacute;tica";
 choices[50][2] = "La direcci&oacute;n del departamento que este auditando";
 choices[50][3] = "Al Departamento de Asuntos Econ&oacute;micos";
 answers[50] = choices[50][0];
 units[50] = "31";
 comments[50] = "Id Pregunta: 6441. Castilla La Mancha 2009";


//  Id pregunta: 6459 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  El per&iacute;odo de validez de los certificados reconocidos no podr&aacute; ser superior a:";
 choices[51]= new Array();
 choices[51][0] = "Tres a&ntilde;os";
 choices[51][1] = "Diez a&ntilde;os";
 choices[51][2] = "Dos a&ntilde;os";
 choices[51][3] = "Cinco a&ntilde;os";
 answers[51] = choices[51][3];
 units[51] = "30";
 comments[51] = "Id Pregunta: 6459. Castilla La Mancha 2009 (Ley 9/2014, Disposici&oacute;n final sexta)";


//  Id pregunta: 7326 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes no es un organismo europeo de normalizaci&oacute;n?";
 choices[52]= new Array();
 choices[52][0] = "CEN";
 choices[52][1] = "SETSI";
 choices[52][2] = "CENELEC";
 choices[52][3] = "Todos los anteriores son organismos europeos de normalizaci&oacute;n";
 answers[52] = choices[52][1];
 units[52] = "42";
 comments[52] = "Id Pregunta: 7326. NULL";


//  Id pregunta: 7335 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes organizaciones espa&ntilde;olas no es miembro de ETSI?";
 choices[53]= new Array();
 choices[53][0] = "AENOR";
 choices[53][1] = "TELEFONICA S.A.";
 choices[53][2] = "UNIVERSIDAD AUT&Oacute;NOMA DE MADRID";
 choices[53][3] = "MINISTERIO DE INDUSTRIA, TURISMO y COMERCIO";
 answers[53] = choices[53][0];
 units[53] = "42";
 comments[53] = "Id Pregunta: 7335. http://portal.etsi.org/Portal_IntegrateAppli/QueryResult.asp?Alone=1&amp;SortBy=&amp;SortDirection=&amp;Param=#";


//  Id pregunta: 8213 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  La plataforma de validaci&oacute;n de certificados VALIDE del Ministerio de la Presidencia permite validar:";
 choices[54]= new Array();
 choices[54][0] = "Las URLs de los portales de las Administraciones P&uacute;blicas.";
 choices[54][1] = "Los c&oacute;digos seguros de verificaci&oacute;n.";
 choices[54][2] = "Los certificados de sedes electr&oacute;nicas y los c&oacute;digos seguros de verificaci&oacute;n.";
 choices[54][3] = "Los certificados de sede electr&oacute;nica.";
 answers[54] = choices[54][3];
 units[54] = "30";
 comments[54] = "Id Pregunta: 8213. Examen TIC A1 2010";


//  Id pregunta: 8222 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l es el nivel m&iacute;nimo de accesibilidad que deben cumplir las p&aacute;ginas de Internet de las Administraciones P&uacute;blicas o financiadas con fondos p&uacute;blicos?:";
 choices[55]= new Array();
 choices[55][0] = "No existe m&iacute;nimo alguno fijado por la normativa.";
 choices[55][1] = "El definido en las prioridades 1 y 2 de la norma UNE 139803: 2004.";
 choices[55][2] = "El m&aacute;s alto que permita el estado de la t&eacute;cnica en cada momento.";
 choices[55][3] = "El definido en la norma UNE 14009 :2006, apartados 2 y 3.";
 answers[55] = choices[55][1];
 units[55] = "39";
 comments[55] = "Id Pregunta: 8222. Examen TIC A1 2010";


//  Id pregunta: 8426 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes normas t&eacute;cnicas de interoperabilidad no est&aacute; contemplada en el Desarrollo del Esquema Nacional de Interoperabilidad (disposici&oacute;n adicional primera), en el Real Decreto 4/2010 del 8 de enero?";
 choices[56]= new Array();
 choices[56][0] = "Cat&aacute;logo de est&aacute;ndares";
 choices[56][1] = "Documento electr&oacute;nico";
 choices[56][2] = "Expediente electr&oacute;nico";
 choices[56][3] = "Sede electr&oacute;nica";
 answers[56] = choices[56][3];
 units[56] = "43";
 comments[56] = "Id Pregunta: 8426. ";


//  Id pregunta: 8457 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  A la m&aacute;xima cantidad de datos que se pueden perder en caso de desastres se le denomina:";
 choices[57]= new Array();
 choices[57][0] = "RTO";
 choices[57][1] = "RPO";
 choices[57][2] = "SDO";
 choices[57][3] = "RDO";
 answers[57] = choices[57][1];
 units[57] = "32";
 comments[57] = "Id Pregunta: 8457. Analista Ayto. Madrid 2010";


//  Id pregunta: 8486 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  Los centros de proceso de datos o datacenters deben cumplir una serie de caracter&iacute;sticas de seguridad f&iacute;sica, &iquest;cu&aacute;l de las siguientes NO es una buena pol&iacute;tica de seguridad?";
 choices[58]= new Array();
 choices[58][0] = "Debe disponer de puertas de acceso grandes.";
 choices[58][1] = "Debe estar expl&iacute;citamente se&ntilde;alizado.";
 choices[58][2] = "Debe evitar tener ventanas.";
 choices[58][3] = "Dispondr&aacute; de un sistema de refrigeraci&oacute;n";
 answers[58] = choices[58][1];
 units[58] = "32,33";
 comments[58] = "Id Pregunta: 8486. Examen TIC A2 2010 interna";


//  Id pregunta: 8738 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  La Ley Org&aacute;nica 15/1999 de Protecci&oacute;n do Datos de Car&aacute;cter Personal (LOPD) ser&aacute; de aplicaci&oacute;n a:";
 choices[59]= new Array();
 choices[59][0] = "&Uacute;nicamente los datos almacenados electr&oacute;nicamente, susceptibles de tratamiento y a toda modalidad de uso posterior de estos datos por lo sectores p&uacute;blico y privado.";
 choices[59][1] = "Los datos de car&aacute;cter personal registrados en soporte f&iacute;sico, que los haga susceptibles de tratamiento, y a toda modalidad de uso posterior de estos datos por el sector p&uacute;blico, de forma obligatoria, y por el sector privado, como recomendaci&oacute;n.";
 choices[59][2] = "Los datos de car&aacute;cter personal registrados en soporte f&iacute;sico, que los haga susceptibles de tratamiento, almacenados tanto en el sector p&uacute;blico como el privado, quedando excluidos los posibles usos posteriores de tales datos";
 choices[59][3] = "Los datos de car&aacute;cter personal registrados en soporte f&iacute;sico, que los haga susceptibles do tratamiento y a toda modalidad de uso posterior de estos datos por los sectores p&uacute;blico y privado";
 answers[59] = choices[59][3];
 units[59] = "29";
 comments[59] = "Id Pregunta: 8738. Examen TIC A2 2010 interna";


//  Id pregunta: 8932 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes leyes aplica en las relaciones de los ciudadanos con el Ministerio de Justicia?";
 choices[60]= new Array();
 choices[60][0] = "Ley 18/2011";
 choices[60][1] = "Ley 11/2007";
 choices[60][2] = "Las dos anteriores";
 choices[60][3] = "Ninguna de las anteriores";
 answers[60] = choices[60][1];
 units[60] = "43";
 comments[60] = "Id Pregunta: 8932. ";


//  Id pregunta: 8974 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  Seg&uacute;n las definiciones incluidas en el art. 5 del R.D. 1720/2007, &ldquo;la persona f&iacute;sica o jur&iacute;dica, p&uacute;blica o privada u &oacute;rgano administrativo, al que se revelen los datos&rdquo; es:";
 choices[61]= new Array();
 choices[61][0] = "Encargado del tratamiento";
 choices[61][1] = "Destinatario o cesionario";
 choices[61][2] = "Afectado o interesado";
 choices[61][3] = "Tercero";
 answers[61] = choices[61][1];
 units[61] = "29";
 comments[61] = "Id Pregunta: 8974. ";


//  Id pregunta: 9056 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;Cual de las siguientes ISO tiene definici&oacute;n de usabilidad?";
 choices[62]= new Array();
 choices[62][0] = "ISO/IEC 9126";
 choices[62][1] = "ISO/IEC 9241";
 choices[62][2] = "Las dos anteriores";
 choices[62][3] = "Ninguna de las anteriores";
 answers[62] = choices[62][2];
 units[62] = "39";
 comments[62] = "Id Pregunta: 9056. NULL";


//  Id pregunta: 9064 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Seg&uacute;n la ley 15/1999 de protecci&oacute;n de datos de car&aacute;cter personal, las infracciones leves ser&aacute;n sancionadas con multas de:";
 choices[63]= new Array();
 choices[63][0] = "601,01 a 60.101,21 euros";
 choices[63][1] = "901,01 a 60.101,21 euros";
 choices[63][2] = "600 a 40.000 euros";
 choices[63][3] = "900 a 40.000 euros";
 answers[63] = choices[63][3];
 units[63] = "29";
 comments[63] = "Id Pregunta: 9064. NULL";


//  Id pregunta: 9477 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  El m&eacute;todo del payback";
 choices[64]= new Array();
 choices[64][0] = "Determina en qu&eacute; a&ntilde;o se recupera el desembolso inicial ";
 choices[64][1] = "M&eacute;tricav3 lo considera pero lo denomina retorno de la inversi&oacute;n";
 choices[64][2] = "No tiene en cuenta los flujos de caja posteriores al plazo de recuperaci&oacute;n";
 choices[64][3] = "Todas las afirmaciones anteriores son correctas";
 answers[64] = choices[64][3];
 units[64] = "38";
 comments[64] = "Id Pregunta: 9477. ";


//  Id pregunta: 9481 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  El proyecto Maber:";
 choices[65]= new Array();
 choices[65][0] = "No existe";
 choices[65][1] = "Lo llevaron a cabo los extraterrestres en 1950";
 choices[65][2] = "Es un estudio sobre el establecimiento de pautas medioambientales y ergon&oacute;micas en la adquisici&oacute;n y empleo de bienes y servicios TIC en la AGE";
 choices[65][3] = "Es un estudio sobre la rentabilidad media de los proyectpos TIC desarrollados en la AGE";
 answers[65] = choices[65][2];
 units[65] = "38";
 comments[65] = "Id Pregunta: 9481. ";


//  Id pregunta: 9545 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  Seg&uacute;n la LSSI, entre los elementos que los prestadores de servicios de la Sociedad de la Informaci&oacute;n est&aacute;n obligados a indicar en su p&aacute;gina web NO se encuentra:";
 choices[66]= new Array();
 choices[66][0] = "El nombre o denominiaci&oacute;n social";
 choices[66][1] = "Un n&uacute;mero de tel&eacute;fono de contacto";
 choices[66][2] = "Los datos de su inscripci&oacute;n en el registro mercantil u otro registro p&uacute;blico";
 choices[66][3] = "Los c&oacute;digos de conducta a los que est&eacute; adheridos.";
 answers[66] = choices[66][1];
 units[66] = "30";
 comments[66] = "Id Pregunta: 9545. Ley 34/2002, art&iacute;culo 10";


//  Id pregunta: 9580 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  Seg&uacute;n el RD 1671/2009 de 6 de noviembre, &iquest;cu&aacute;l de las siguientes condiciones NO es requisito necesario para el uso de CSV como sistema de firma electr&oacute;nica?";
 choices[67]= new Array();
 choices[67][0] = "Car&aacute;cter &uacute;nico del c&oacute;digo del documento.";
 choices[67][1] = "Utilizaci&oacute;n de generadores aleatorios tomando como semillas la identidad del firmante y el contenido del documento.";
 choices[67][2] = "Posibilidad de verificar el documento por el tiempo que se establezca.";
 choices[67][3] = "Para su utilizaci&oacute;n, se requiere una orden del Ministro competente o resoluci&oacute;n del titular del organismo p&uacute;blico, publicada en la sede electr&oacute;nica.";
 answers[67] = choices[67][1];
 units[67] = "43";
 comments[67] = "Id Pregunta: 9580. Examen TIC A1 2011";


//  Id pregunta: 9763 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  Seg&uacute;n la orden EHA/1049/2008, se declaran de contrataci&oacute;n centralizada los contratos de servicios:";
 choices[68]= new Array();
 choices[68][0] = "Los contratos de servicios dirigidos al desarrollo de la Administraci&oacute;n Electr&oacute;nica cuyo presupuesto de licitaci&oacute;n no supere 862.000 euros, I.V.A. excluido.";
 choices[68][1] = "Los contratos de servicios de telecomunicaciones.";
 choices[68][2] = "A y B son correctas.";
 choices[68][3] = "A y B son incorrectas.";
 answers[68] = choices[68][2];
 units[68] = "41";
 comments[68] = "Id Pregunta: 9763. NULL";


//  Id pregunta: 9771 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  Seg&uacute;n la Ley 37/2007 de Reutilizaci&oacute;n de Informaci&oacute;n del Sector P&uacute;blico, la funci&oacute;n sancionadora es competencia de:";
 choices[69]= new Array();
 choices[69][0] = "MITyC";
 choices[69][1] = "Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[69][2] = "Ministro del ministerio que ofrezca los datos si las infracciones son muy graves y un rango m&iacute;nimo de Direcci&oacute;n General para infracciones graves y leves";
 choices[69][3] = "Direcci&oacute;n General que haya publicado los datos.";
 answers[69] = choices[69][2];
 units[69] = "22";
 comments[69] = "Id Pregunta: 9771. ";


//  Id pregunta: 10264 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  En referencia al tratamiento de datos de car&aacute;cter personal recogidos en ficheros de las Fuerzas y Cuerpos de Seguridad, el ejercicio de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n";
 choices[70]= new Array();
 choices[70][0] = "Puede denegarse si afecta a la defensa del estado, no siendo posible en tal caso plantear ante la Agencia de Protecci&oacute;n de Datos la posible improcedencia de la denegaci&oacute;n";
 choices[70][1] = "Puede denegarse si afecta a la defensa del estado y el interesado plantear ante la Agencia de Protecci&oacute;n de Datos la posible improcedencia de la denegaci&oacute;n";
 choices[70][2] = "No puede denegarse si el fichero contiene datos especialmente protegidos";
 choices[70][3] = "No puede denegarse en ning&uacute;n caso";
 answers[70] = choices[70][1];
 units[70] = "29";
 comments[70] = "Id Pregunta: 10264. Art&iacute;culo 23.1 y 23.3 de la Ley 15/1999";


//  Id pregunta: 10366 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  Respecto al m&eacute;todo de crashing en la gesti&oacute;n de proyectos es cierto que:";
 choices[71]= new Array();
 choices[71][0] = "No sirve para acortar la duraci&oacute;n de los proyectos cuando es aplicado a las actividades del camino cr&iacute;tico";
 choices[71][1] = "S&oacute;lo sirve para acortar la duraci&oacute;n de los proyectos si lo aplicamos a alguna de las actividades del camino cr&iacute;tico";
 choices[71][2] = "Acorta el tiempo del proyecto tanto si se aplica a las actividades cr&iacute;ticas como a las que no lo son";
 choices[71][3] = "No tiene nada que ver con la duraci&oacute;n del proyecto sino con la inclusi&oacute;n de recursos por fases ";
 answers[71] = choices[71][1];
 units[71] = "27";
 comments[71] = "Id Pregunta: 10366. ";


//  Id pregunta: 10560 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  Los controles compensatorios tienen como objetivo:";
 choices[72]= new Array();
 choices[72][0] = "reducir el riesgo ante una debilidad existente";
 choices[72][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[72][2] = "Solucionar problemas detectados por controles detectivos";
 choices[72][3] = "Reportar errores";
 answers[72] = choices[72][0];
 units[72] = "31, 32, 33";
 comments[72] = "Id Pregunta: 10560. Las opciones B, C y D son caracter&iacute;sticas de  controles preventivo, correctivo y detectivo respectivamente.";


//  Id pregunta: 10561 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  Los controles preventivos tienen como objeto:";
 choices[73]= new Array();
 choices[73][0] = "reducir el riesgo ante una debilidad existente";
 choices[73][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[73][2] = "Solucionar problemas detectados por controles detectivos";
 choices[73][3] = "Reportar errores";
 answers[73] = choices[73][1];
 units[73] = "31, 32, 33";
 comments[73] = "Id Pregunta: 10561. ";


//  Id pregunta: 10599 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  datos.gob.es...";
 choices[74]= new Array();
 choices[74][0] = "&hellip; es una iniciativa con el fin de promocionar la protecci&oacute;n de datos de car&aacute;cter personal en Espa&ntilde;a.";
 choices[74][1] = "&hellip; es una sede electr&oacute;nica para la reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico.";
 choices[74][2] = "&hellip; aloja el Portal de la Transparencia.";
 choices[74][3] = "&hellip; aloja el Cat&aacute;logo Nacional de datos abiertos.";
 answers[74] = choices[74][3];
 units[74] = "22";
 comments[74] = "Id Pregunta: 10599. ";


//  Id pregunta: 10687 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  La Ley 39/2015, cita expresamente en su pre&aacute;mbulo:";
 choices[75]= new Array();
 choices[75][0] = "La Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas.";
 choices[75][1] = "El programa nacional de reformas de Espa&ntilde;a.";
 choices[75][2] = "Ambas.";
 choices[75][3] = "Ninguna de las anteriores.";
 answers[75] = choices[75][2];
 units[75] = "30";
 comments[75] = "Id Pregunta: 10687. ";


//  Id pregunta: 10701 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  Seg&uacute;n la NTI de Documento Electr&oacute;nico &iquest;Se pueden utilizar formatos diferentes a los establecidos en la Norma T&eacute;cnica de Interoperabilidad de Cat&aacute;logo de est&aacute;ndares?";
 choices[76]= new Array();
 choices[76][0] = "Cuando existan particularidades que lo justifiquen.";
 choices[76][1] = "Cuando sea necesario para asegurar el valor probatorio del documento electr&oacute;nico.";
 choices[76][2] = "En ambos casos.";
 choices[76][3] = "En ning&uacute;n caso.";
 answers[76] = choices[76][2];
 units[76] = "43";
 comments[76] = "Id Pregunta: 10701. ";


//  Id pregunta: 10710 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l es un contenido clave de la Norma T&eacute;cnica de Interoperabilidad de Modelo de Datos para el Intercambio de asientos entre las entidades registrales?";
 choices[77]= new Array();
 choices[77][0] = "SICRES";
 choices[77][1] = "Los metadatos";
 choices[77][2] = "ACCEDA";
 choices[77][3] = "HABILITA";
 answers[77] = choices[77][0];
 units[77] = "43";
 comments[77] = "Id Pregunta: 10710. ";


//  Id pregunta: 10718 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  &iquest;Qui&eacute;n no es un actor involucrado en el proceso de creaci&oacute;n y validaci&oacute;n de una firma electr&oacute;nica seg&uacute;n la NTI de firma electr&oacute;nica?";
 choices[78]= new Array();
 choices[78][0] = "Firmante";
 choices[78][1] = "Receptor";
 choices[78][2] = "Verificador";
 choices[78][3] = "PSC";
 answers[78] = choices[78][1];
 units[78] = "43";
 comments[78] = "Id Pregunta: 10718. ";


//  Id pregunta: 10727 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  &iquest;D&oacute;nde se puede encontrar la especificaci&oacute;n del protocolo SCSP (Sustituci&oacute;n de Certificados en Soporte Papel) seg&uacute;n se&ntilde;ala la NTI de protocolos de intermedicaci&oacute;n?";
 choices[79]= new Array();
 choices[79][0] = "En el Portal de Administraci&oacute;n electr&oacute;nica PAE/CTT";
 choices[79][1] = "En la Intranet del Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[79][2] = "En la Intranet del Ministerio de la Presidencia";
 choices[79][3] = "Se debe solicitar dicha informaci&oacute;n a la Direcci&oacute;n TIC";
 answers[79] = choices[79][0];
 units[79] = "43";
 comments[79] = "Id Pregunta: 10727. ";


//  Id pregunta: 10728 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  Seg&uacute;n la NTI de Protocolos de Intermedicaci&oacute;n, &iquest;Cu&aacute;l de la siguiente informaci&oacute;n no debe ser almacenada para la trazabilidad de cada consulta o intercambio?";
 choices[80]= new Array();
 choices[80][0] = "Identificador de la transacci&oacute;n.";
 choices[80][1] = "Contenido del intercambio.";
 choices[80][2] = "Cesionario de la informaci&oacute;n.";
 choices[80][3] = "Fecha y hora de realizaci&oacute;n de la consulta.";
 answers[80] = choices[80][1];
 units[80] = "43";
 comments[80] = "Id Pregunta: 10728. ";


//  Id pregunta: 10758 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l es la gu&iacute;a referente a &quot;Auditor&iacute;a del Esquema Nacional de Seguridad&quot;?";
 choices[81]= new Array();
 choices[81][0] = "CCN-STIC-801";
 choices[81][1] = "CCN-STIC-802";
 choices[81][2] = "CCN-STIC-803";
 choices[81][3] = "CCN-STIC-804";
 answers[81] = choices[81][1];
 units[81] = "43";
 comments[81] = "Id Pregunta: 10758. ";


//  Id pregunta: 10759 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l es la gu&iacute;a referente a &quot;Plan de Adecuaci&oacute;n del Esquema Nacional de Seguridad&quot;?";
 choices[82]= new Array();
 choices[82][0] = "CCN-STIC-803";
 choices[82][1] = "CCN-STIC-805";
 choices[82][2] = "CCN-STIC-806";
 choices[82][3] = "CCN-STIC-807";
 answers[82] = choices[82][2];
 units[82] = "43";
 comments[82] = "Id Pregunta: 10759. ";


//  Id pregunta: 10768 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de los siguientes servicios no ha sido declarado como servicio compartido?";
 choices[83]= new Array();
 choices[83][0] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[83][1] = "Servicio de gesti&oacute;n de archivo electr&oacute;nico";
 choices[83][2] = "Servicio de videoconferencia";
 choices[83][3] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 answers[83] = choices[83][2];
 units[83] = "24";
 comments[83] = "Id Pregunta: 10768. ";


//  Id pregunta: 10808 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Indique cu&aacute;l de los siguientes es un documento m&iacute;nimo reclamado por la ISO 22301 de gesti&oacute;n de la continuidad del negocio:";
 choices[84]= new Array();
 choices[84][0] = "Procedimiento para el control de la informaci&oacute;n documentada.";
 choices[84][1] = "Estructura de respuesta a incidentes.";
 choices[84][2] = "Los contratos y acuerdos de nivel de servicio con los proveedores.";
 choices[84][3] = "Formaci&oacute;n y plan de sensibilizaci&oacute;n.";
 answers[84] = choices[84][1];
 units[84] = "31, 32, 33";
 comments[84] = "Id Pregunta: 10808. Examen GSI 2014";


//  Id pregunta: 10936 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Seg&uacute;n lo dispuesto en la Norma T&eacute;cnica de Interoperabilidad de Modelo de Datos para el Intercambio de asientos entre las entidades registrales (SICRES 3.0) es correcto que:";
 choices[85]= new Array();
 choices[85][0] = "El segmento &quot;de internos y control&quot; contiene informaci&oacute;n sobre si el asiento registral incluye documentaci&oacute;n f&iacute;sica requerida para el tr&aacute;mite del procedimiento.";
 choices[85][1] = "El c&oacute;digo de la Entidad Registral de Destino debe incluir un prefijo que identifique al Ministerio (MXX-YYYY), seg&uacute;n se establece en la codificaci&oacute;n de organismos del Directorio Com&uacute;n.";
 choices[85][2] = "El segmento &quot;de anexo&quot; es obligatorio y puede declararse de forma m&uacute;ltiple.";
 choices[85][3] = "En el segmento &quot;de internos y de control&quot; se incluye la firma del documento anexo, como un campo obligatorio.";
 answers[85] = choices[85][0];
 units[85] = "43";
 comments[85] = "Id Pregunta: 10936. TIC A1 AGE 2014";


//  Id pregunta: 10954 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;C&uacute;al de las siguientes opciones NO es un sistema de control de versiones?";
 choices[86]= new Array();
 choices[86][0] = "Subversion.";
 choices[86][1] = "Git";
 choices[86][2] = "Ruby.";
 choices[86][3] = "SourceSafe.";
 answers[86] = choices[86][2];
 units[86] = "28";
 comments[86] = "Id Pregunta: 10954. TIC A1 AGE 2014";


//  Id pregunta: 11023 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de las siguientes no es una pauta del principio de Comprensibilidad de las WCAG 2.0?";
 choices[87]= new Array();
 choices[87][0] = "Navegable";
 choices[87][1] = "Legible y entendible";
 choices[87][2] = "Predecible";
 choices[87][3] = "Ayuda a la entrada de datos";
 answers[87] = choices[87][0];
 units[87] = "39";
 comments[87] = "Id Pregunta: 11023. La pauta 'Navegable' pertenece al principio de Operabilidad";


//  Id pregunta: 11024 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de las siguientes es un principio de Dise&ntilde;o universal?";
 choices[88]= new Array();
 choices[88][0] = "Cumplimiento de las WCAG 1.0";
 choices[88][1] = "Cumplimiento de las WCAG 2.0";
 choices[88][2] = "Escaso esfuerzo f&iacute;sico";
 choices[88][3] = "Ensayo prueba-error";
 answers[88] = choices[88][2];
 units[88] = "39";
 comments[88] = "Id Pregunta: 11024. ";


//  Id pregunta: 11096 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Las dependencias entre actividades en gesti&oacute;n de proyectos pueden ser (Seleccione la verdadera):";
 choices[89]= new Array();
 choices[89][0] = "Obligatorias y discrecionales";
 choices[89][1] = "Obligatorias, discrecionales y externas";
 choices[89][2] = "Obligatorias, discrecionales, externas e internas";
 choices[89][3] = "Obligatorias, discrecionales, externas, internas y sincronizadas.";
 answers[89] = choices[89][1];
 units[89] = "28";
 comments[89] = "Id Pregunta: 11096. ";


//  Id pregunta: 11113 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Indique qu&eacute; tipos de entidades pueden conectarse a la Red Sara:";
 choices[90]= new Array();
 choices[90][0] = "Organismo p&uacute;blicos";
 choices[90][1] = "Ministerios";
 choices[90][2] = "Comunidades Aut&oacute;nomas";
 choices[90][3] = "Todas las anteriores";
 answers[90] = choices[90][3];
 units[90] = "30";
 comments[90] = "Id Pregunta: 11113. ";


//  Id pregunta: 11238 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Entre los principios del texto refundido de la ley de contratos del sector p&uacute;blico no se encuentra:";
 choices[91]= new Array();
 choices[91][0] = "Libertad de acceso a las licitaciones.";
 choices[91][1] = "Publicidad y transparencia de los procedimientos.";
 choices[91][2] = "No discriminaci&oacute;n e igualdad de trato entre los candidatos.";
 choices[91][3] = "Mejorar la competencia.";
 answers[91] = choices[91][3];
 units[91] = "41";
 comments[91] = "Id Pregunta: 11238. ";


//  Id pregunta: 11242 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  El valor estimado del contrato:";
 choices[92]= new Array();
 choices[92][0] = "Nos permite determinar si el contrato est&aacute; sujeto a regulaci&oacute;n armonizada.";
 choices[92][1] = "No incluye el IVA";
 choices[92][2] = "Incluye pr&oacute;rrogas y cualquier modificaci&oacute;n prevista sobre el presupuesto base de licitaci&oacute;n.";
 choices[92][3] = "Todas las respuestas son ciertas.";
 answers[92] = choices[92][3];
 units[92] = "41";
 comments[92] = "Id Pregunta: 11242. ";


//  Id pregunta: 11251 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Los Sistemas din&aacute;micos de adquisici&oacute;n:";
 choices[93]= new Array();
 choices[93][0] = "Tienen vigencia indefinida mientras existan licitadores.";
 choices[93][1] = "La adjudicaci&oacute;n del sistema din&aacute;mico se realizar&aacute; siempre mediante procedimiento abierto.";
 choices[93][2] = "Al igual que en el acuerdo marco, ser&aacute; posible la incorporaci&oacute;n de nuevos adjudicatarios.";
 choices[93][3] = "Se valorar&aacute; positivamente el uso de medios TIC.";
 answers[93] = choices[93][1];
 units[93] = "41";
 comments[93] = "Id Pregunta: 11251. ";


//  Id pregunta: 11328 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  En cuanto a la normativa sobre reutilizaci&oacute;n de la informaci&oacute;n, indique cu&aacute;l de las siguientes opciones no es constitutiva de una infracci&oacute;n grave";
 choices[94]= new Array();
 choices[94][0] = "La reutilizaci&oacute;n de documentaci&oacute;n sin haber obtenido la correspondiente licencia en los casos en que &eacute;sta sea requerida;";
 choices[94][1] = "La reutilizaci&oacute;n de la informaci&oacute;n para una finalidad distinta a la que se concedi&oacute;;";
 choices[94][2] = "La alteraci&oacute;n grave del contenido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia;";
 choices[94][3] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia;";
 answers[94] = choices[94][3];
 units[94] = "44";
 comments[94] = "Id Pregunta: 11328. ";


//  Id pregunta: 11487 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  La titularidad de los derechos de los programas de ordenador desarrollados por trabajadores asalariados";
 choices[95]= new Array();
 choices[95][0] = "Pertenecen a los trabajadores que han creado el programa";
 choices[95][1] = "Pertenecen a los trabajadores que han creado el programa, salvo pacto en contrario";
 choices[95][2] = "Pertenecen al empresario que los ha contratado";
 choices[95][3] = "Pertenecen al empresario que los ha contratado, salvo pacto en contrario";
 answers[95] = choices[95][3];
 units[95] = "36";
 comments[95] = "Id Pregunta: 11487. NULL";


//  Id pregunta: 11490 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cada cu&aacute;nto tiempo debe de revisarse el cat&aacute;logo de est&aacute;ndares?";
 choices[96]= new Array();
 choices[96][0] = "2 veces al a&ntilde;o";
 choices[96][1] = "Cada a&ntilde;o";
 choices[96][2] = "Cada 2 a&ntilde;os";
 choices[96][3] = "Cada 3 a&ntilde;os";
 answers[96] = choices[96][1];
 units[96] = "43";
 comments[96] = "Id Pregunta: 11490. NULL";


//  Id pregunta: 11593 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Se&ntilde;ale el contenido opcional de un &iacute;ndice de expediente electr&oacute;nico:";
 choices[97]= new Array();
 choices[97][0] = "Huella digital de cada documento electr&oacute;nico";
 choices[97][1] = "Fecha de generaci&oacute;n del &iacute;ndice";
 choices[97][2] = "Fecha de incorporaci&oacute;n al expediente de cada documento electr&oacute;nico";
 choices[97][3] = "Identificador de cada documento electr&oacute;nico";
 answers[97] = choices[97][2];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11593. ";


//  Id pregunta: 11748 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Cada Administraci&oacute;n P&uacute;blica determinar&aacute; las condiciones e instrumentos de creaci&oacute;n de las sedes electr&oacute;nicas con sujeci&oacute;n a los principios, &iquest;cu&aacute;l no es uno de ellos?:";
 choices[98]= new Array();
 choices[98][0] = "transparencia";
 choices[98][1] = "responsabilidad";
 choices[98][2] = "universalidad";
 choices[98][3] = "publicidad del procedimiento";
 answers[98] = choices[98][2];
 units[98] = "43";
 comments[98] = "Id Pregunta: 11748. ";


//  Id pregunta: 11789 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la gu&iacute;a CCN-STIC-827 Gesti&oacute;n y uso de dispositivos m&oacute;viles, se&ntilde;ale la INCORRECTA:";
 choices[99]= new Array();
 choices[99][0] = "La autenticaci&oacute;n del usuario se realizar&aacute; con una contrase&ntilde;a/pin del dispositivo y/u otro tipo de autenticaci&oacute;n antes de acceder a los recursos del organismo.";
 choices[99][1] = "Los dispositivos deben bloquearse autom&aacute;ticamente despu&eacute;s de un determinado periodo de inactividad.";
 choices[99][2] = "El uso de un modelo BYOD (Bring Your Own Device) est&aacute; intensamente desaconsejado.";
 choices[99][3] = "Bajo la potestad del administrador de seguridad, podr&aacute; bloquearse de forma remota el dispositivo si se sospecha que ha podido ser dejado en un estado no seguro o en una ubicaci&oacute;n no segura.";
 answers[99] = choices[99][2];
 units[99] = "43";
 comments[99] = "Id Pregunta: 11789. ";


