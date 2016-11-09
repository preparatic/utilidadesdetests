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

//  Id pregunta: 6 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes organismos no corresponde a la estructura organizativa t&eacute;cnica de la normalizaci&oacute;n comunitaria?:";
 choices[0]= new Array();
 choices[0][0] = "ETSI (Instituto Europeo de Normalizaci&oacute;n de Telecomunicaciones)";
 choices[0][1] = "CENELEC (Comit&eacute; Europeo de Electr&oacute;nica)";
 choices[0][2] = "SITAR (Instituto Internacional de Tratamiento de la Informaci&oacute;n)";
 choices[0][3] = "CEPT (Confederaci&oacute;n Europea de Administraciones de Correos y Telecomunicaciones)";
 answers[0] = choices[0][2];
 units[0] = "42";
 comments[0] = "Id Pregunta: 6. ";


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


//  Id pregunta: 23 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;C&oacute;mo se denomina la comprobaci&oacute;n de si un producto en el campo de las TI satisface o no los requisitos t&eacute;cnicos de una norma?:";
 choices[2]= new Array();
 choices[2][0] = "Certificaci&oacute;n";
 choices[2][1] = "Homologaci&oacute;n";
 choices[2][2] = "Prueba de conformidad";
 choices[2][3] = "Comprobaci&oacute;n de especificaci&oacute;n t&eacute;cnica";
 answers[2] = choices[2][2];
 units[2] = "42";
 comments[2] = "Id Pregunta: 23. ";


//  Id pregunta: 25 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;C&oacute;mo se denominan los distintos niveles de adecuaci&oacute;n contemplados en WAI?";
 choices[3]= new Array();
 choices[3][0] = "A, B, C y D";
 choices[3][1] = "A, AA y AAA";
 choices[3][2] = "A1, A2 y A3";
 choices[3][3] = "1, 2, 3 y 4";
 answers[3] = choices[3][1];
 units[3] = "39";
 comments[3] = "Id Pregunta: 25. ";


//  Id pregunta: 39 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes respuestas no puede considerarse como un est&aacute;ndar abierto?:";
 choices[4]= new Array();
 choices[4][0] = "SNA";
 choices[4][1] = "C++";
 choices[4][2] = "SQL";
 choices[4][3] = "TCP/IP";
 answers[4] = choices[4][0];
 units[4] = "40";
 comments[4] = "Id Pregunta: 39. ";


//  Id pregunta: 58 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;En qu&eacute; fuentes se encuentran las normas a aplicar sobre sistemas abiertos en la Administraci&oacute;n?:";
 choices[5]= new Array();
 choices[5][0] = "CIABSI y CSI";
 choices[5][1] = "MAP y MJI";
 choices[5][2] = "Normas ISO, X/OPEN y EPHOS";
 choices[5][3] = "ANSI, AENOR, DIN e IRANOR";
 answers[5] = choices[5][2];
 units[5] = "40";
 comments[5] = "Id Pregunta: 58. ";


//  Id pregunta: 76 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; organizaci&oacute;n se encarga de fijar los est&aacute;ndares federales de trantamiento de informaci&oacute;n que las agencias gubernamentales USA deben seguir en la contrataci&oacute;n de software y hardware?:";
 choices[6]= new Array();
 choices[6][0] = "ANSI";
 choices[6][1] = "IEEE";
 choices[6][2] = "NIST";
 choices[6][3] = "GOSIP";
 answers[6] = choices[6][2];
 units[6] = "42";
 comments[6] = "Id Pregunta: 76. ";


//  Id pregunta: 101 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  En relaci&oacute;n con los sistemas abiertos, indique la afirmaci&oacute;n que no es correcta:";
 choices[7]= new Array();
 choices[7][0] = "Los sistemas abiertos son aqu&eacute;llos cuyas especificaciones est&aacute;n aprobadas por organismos independientes de normalizaci&oacute;n";
 choices[7][1] = "En lo tocante a sistemas operativos, sistema abierto es sin&oacute;nimo de Unix";
 choices[7][2] = "Sistemas abiertos son aqu&eacute;llos que pueden ser adquiridos de fuentes distintas en un mercado competitivo";
 choices[7][3] = "Un sistema definido como abierto es capaz de interconectarse con otro de acuerdo con unas normas establecidas";
 answers[7] = choices[7][1];
 units[7] = "40";
 comments[7] = "Id Pregunta: 101. ";


//  Id pregunta: 112 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  De  acuerdo a la Decisi&oacute;n  87/95/CEE del Consejo de las CC.EE., &iquest;en qu&eacute; circunstancias excepcionales el sector p&uacute;blico puede adquirir bienes y servicios relativos al campo de las TIC utilizando especificaciones no normalizadas?:";
 choices[8]= new Array();
 choices[8][0] = "Continuidad de funcionamiento";
 choices[8][1] = "Innovaci&oacute;n";
 choices[8][2] = "Coste excesivo";
 choices[8][3] = "Todas las anteriores";
 answers[8] = choices[8][3];
 units[8] = "40";
 comments[8] = "Id Pregunta: 112. ";


//  Id pregunta: 144 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El est&aacute;ndar POSIX se corresponde con la norma internacional:";
 choices[9]= new Array();
 choices[9][0] = "ISO 9945-1";
 choices[9][1] = "IEEE 1033.1";
 choices[9][2] = "OSF 99945-1";
 choices[9][3] = "ISO 1003-1";
 answers[9] = choices[9][0];
 units[9] = "42";
 comments[9] = "Id Pregunta: 144. ";


//  Id pregunta: 151 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El Modelo de Referencia para la Interconexi&oacute;n de Sistemas Abiertos queda especificado en la norma ISO:";
 choices[10]= new Array();
 choices[10][0] = "ISO 7498";
 choices[10][1] = "ISO 9735";
 choices[10][2] = "ISO 9075";
 choices[10][3] = "ISO 9945-1";
 answers[10] = choices[10][0];
 units[10] = "40";
 comments[10] = "Id Pregunta: 151. ";


//  Id pregunta: 154 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El nivel de adecuaci&oacute;n AA indica:";
 choices[11]= new Array();
 choices[11][0] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1";
 choices[11][1] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1 y 2";
 choices[11][2] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1, 2 y 3";
 choices[11][3] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1, 2, 3 y 4";
 answers[11] = choices[11][1];
 units[11] = "39";
 comments[11] = "Id Pregunta: 154. ";


//  Id pregunta: 163 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El siguiente punto de verificaci&oacute;n de WAI (en la norma WCAG 1.0): &quot;Hasta que las aplicaciones de usuario permitan controlarlo, evite provocar parpadeo en la pantalla&quot;, &iquest;a qu&eacute; nivel de prioridad pertenece?:";
 choices[12]= new Array();
 choices[12][0] = "1";
 choices[12][1] = "2";
 choices[12][2] = "3";
 choices[12][3] = "no es ning&uacute;n punto de verificaci&oacute;n contemplado en WAI";
 answers[12] = choices[12][0];
 units[12] = "39";
 comments[12] = "Id Pregunta: 163. ";


//  Id pregunta: 176 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En el &aacute;mbito de la normalizaci&oacute;n comunitaria, las siglas CEPT corresponden a:";
 choices[13]= new Array();
 choices[13][0] = "El Comit&eacute; europeo de normalizaci&oacute;n";
 choices[13][1] = "El Comit&eacute; europeo de electrotecnia";
 choices[13][2] = "La Confederaci&oacute;n europea de Administraciones de correos y telecomunicaciones";
 choices[13][3] = "La Confederaci&oacute;n de Asociaciones de usuariios de ordenadores";
 answers[13] = choices[13][2];
 units[13] = "42";
 comments[13] = "Id Pregunta: 176. ";


//  Id pregunta: 212 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En la elaboraci&oacute;n de una norma se distinguen varias fases. Indique cu&aacute;les son estas:";
 choices[14]= new Array();
 choices[14][0] = "Trabajos preliminares, propuesta, informaci&oacute;n p&uacute;blica, petici&oacute;n";
 choices[14][1] = "Trabajos preliminares, proyecto, informaci&oacute;n p&uacute;blica, propuesta, petici&oacute;n";
 choices[14][2] = "Proyecto, informaci&oacute;n p&uacute;blica, certificaci&oacute;n";
 choices[14][3] = "Proyecto, propuesta, informaci&oacute;n p&uacute;blica, petici&oacute;n";
 answers[14] = choices[14][1];
 units[14] = "42";
 comments[14] = "Id Pregunta: 212. ";


//  Id pregunta: 266 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Indicar cu&aacute;l de los siguientes no es uno de los objetivos de la Decisi&oacute;n 87/95/CEE:";
 choices[15]= new Array();
 choices[15][0] = "Contribuir a la integraci&oacute;n del mercado interior de la Comunidad en el sector de las tecnolog&iacute;as de la informaci&oacute;n y de las telecomunicaciones";
 choices[15][1] = "Facilitar los intercambios de informaci&oacute;n en toda la Comunidad";
 choices[15][2] = "Garantizar que se tomen en cuenta las necesidades de los usuarios";
 choices[15][3] = "Todos los anteriores son objetivos de la Decisi&oacute;n 87/95/CEE";
 answers[15] = choices[15][3];
 units[15] = "40";
 comments[15] = "Id Pregunta: 266. ";


//  Id pregunta: 285 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  La certificaci&oacute;n es:";
 choices[16]= new Array();
 choices[16][0] = "Actividad que tiene por objeto la evaluaci&oacute;n de conformidad de dise&ntilde;os, productos software, procesos o sistema";
 choices[16][1] = "Proceso por el que el sistema de calidad de una empresa es auditado para comprobar el cumplimiento de determinadas normas";
 choices[16][2] = "Descripci&oacute;n completa de un producto software y las interrelaciones de sus elementos";
 choices[16][3] = "Estructura organizativa, procedimientos, actividades, capacidades y recursos que juntos aseguran que los productos software satisfacen las necesidades impl&iacute;citas o establecidas en contrato por los clientes";
 answers[16] = choices[16][1];
 units[16] = "42";
 comments[16] = "Id Pregunta: 285. NULL";


//  Id pregunta: 309 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  La gu&iacute;a XPG 4 de X/OPEN apareci&oacute; en:";
 choices[17]= new Array();
 choices[17][0] = "1989";
 choices[17][1] = "1990";
 choices[17][2] = "1991";
 choices[17][3] = "1992";
 answers[17] = choices[17][3];
 units[17] = "40";
 comments[17] = "Id Pregunta: 309. XPG";


//  Id pregunta: 321 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La norma 1003.1-1988 de IEEE se corresponde con la norma ISO:";
 choices[18]= new Array();
 choices[18][0] = "7498";
 choices[18][1] = "9735";
 choices[18][2] = "9075";
 choices[18][3] = "9945";
 answers[18] = choices[18][3];
 units[18] = "40";
 comments[18] = "Id Pregunta: 321. ";


//  Id pregunta: 349 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La Uni&oacute;n Internacional de Telecomunicaciones (en ingl&eacute;s ITU) tiene tres sectores principales. &iquest; Cu&aacute;l no es uno de ellos?:";
 choices[19]= new Array();
 choices[19][0] = "Sector de Radiocomunicaciones (ITU-R)";
 choices[19][1] = "Sector de Estandarizaci&oacute;n de Telecomunicaciones (ITU-T)";
 choices[19][2] = "Sector de Desarrollo (ITU-D)";
 choices[19][3] = "Todas son secciones de la Uni&oacute;n Internacional de Comunicaciones";
 answers[19] = choices[19][3];
 units[19] = "42";
 comments[19] = "Id Pregunta: 349. ";


//  Id pregunta: 368 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Los est&aacute;ndares en la industria y la tecnolog&iacute;a deben ser producidos:";
 choices[20]= new Array();
 choices[20][0] = "Siempre, en todos los casos, para evitar monopolios";
 choices[20][1] = "Cuando la tecnolog&iacute;a est&eacute; madura pero a&uacute;n no hay inversiones en implementaciones propietarias, para beneficiar tanto a usuarios como a la industria";
 choices[20][2] = "Antes de que madure la tecnolog&iacute;a, para contribuir a una madurez consensuada";
 choices[20][3] = "Nunca, ya que pone en desventaja a aquellos que comenzaron a investigar en dicha tecnolog&iacute;a";
 answers[20] = choices[20][1];
 units[20] = "42";
 comments[20] = "Id Pregunta: 368. ";


//  Id pregunta: 414 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Respecto del ETSI (European Telecommunication Standards Institute, Instituto Europeo de Normas de Telecomunicaci&oacute;n), podemos decir:";
 choices[21]= new Array();
 choices[21][0] = "No est&aacute; reconocida oficialmente por la Comisi&oacute;n Europea como una organizaci&oacute;n de normalizaci&oacute;n.";
 choices[21][1] = "Depende funcionalmente de ITU-T y de CCITT";
 choices[21][2] = "Ninguna de las respuestas anteriores es correcta";
 choices[21][3] = "Las 2 primeras respuestas son correctas";
 answers[21] = choices[21][2];
 units[21] = "42";
 comments[21] = "Id Pregunta: 414. ";


//  Id pregunta: 454 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Se&ntilde;ale la opci&oacute;n que es uno de los objetivos fundamentales de los sistemas abiertos seg&uacute;n X/Open:";
 choices[22]= new Array();
 choices[22][0] = "Portabilidad de aplicaciones en c&oacute;digo fuente";
 choices[22][1] = "Conectividad de aplicaciones a trav&eacute;s de servicios portables de red, independientes de los protocolos subyacentes y soporte de protocolos comunes";
 choices[22][2] = "Consistencia de la interfaz de usuario";
 choices[22][3] = "Todas son objetivos fundamentales";
 answers[22] = choices[22][3];
 units[22] = "40";
 comments[22] = "Id Pregunta: 454. ";


//  Id pregunta: 461 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Son excepciones a las normas de contrataci&oacute;n establecidas en la Directiva 87/95 CE:";
 choices[23]= new Array();
 choices[23][0] = "La necesidad de una continuidad en el funcionamiento de los Sistemas existentes";
 choices[23][1] = "La naturaleza innovadora de algunos proyectos";
 choices[23][2] = "a y b son correctas";
 choices[23][3] = "Ninguna de las anteriores es correcta";
 answers[23] = choices[23][2];
 units[23] = "40";
 comments[23] = "Id Pregunta: 461. ";


//  Id pregunta: 484 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a las recomendaciones de la ITU es falsa?:";
 choices[24]= new Array();
 choices[24][0] = "La norma X.200 (ISO 7498) define el modelo de referencia para la interconexi&oacute;n de sistemas abiertos (OSI)";
 choices[24][1] = "La norma X.400 (ISO 10021) define un sistema de gesti&oacute;n de mensajes (MHS)";
 choices[24][2] = "La norma X.500 (ISO 9594) define los servicios de directorio";
 choices[24][3] = "Ninguna de las anteriores";
 answers[24] = choices[24][3];
 units[24] = "42";
 comments[24] = "Id Pregunta: 484. ";


//  Id pregunta: 487 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  La serie V de estandarizaci&oacute;n de la ITU-T trata sobre:";
 choices[25]= new Array();
 choices[25][0] = "tecnolog&iacute;a inal&aacute;mbrica";
 choices[25][1] = "digitalizaci&oacute;n de datos";
 choices[25][2] = "modems";
 choices[25][3] = "RDSI";
 answers[25] = choices[25][2];
 units[25] = "42";
 comments[25] = "Id Pregunta: 487. ";


//  Id pregunta: 489 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Una de las siguientes organizaciones de estandarizaci&oacute;n no ha desarrollado el est&aacute;ndar mencionado.  &iquest;Cu&aacute;l es?:";
 choices[26]= new Array();
 choices[26][0] = "ANSI - FDDI";
 choices[26][1] = "IEEE- TCP/IP";
 choices[26][2] = "ITU-T - X.25";
 choices[26][3] = "EIA  - RS-232";
 answers[26] = choices[26][1];
 units[26] = "42";
 comments[26] = "Id Pregunta: 489. ";


//  Id pregunta: 541 AÃ±o de creación de pregunta: 2004-01-01
 questions[27]= "28)  Respecto a las pautas de accesibilidad de la  iniciativa de acesibilidad web WAI del W3C se puede afirmar que ...";
 choices[27]= new Array();
 choices[27][0] = "El nivel de adecuaci&oacute;n A es el m&aacute;s exigente";
 choices[27][1] = "El nivel de adecuaci&oacute;n AA incluye los puntos de verificaci&oacute;n de prioridades 1 y 2";
 choices[27][2] = "La satisfacci&oacute;n de los puntos de verificaci&oacute;n de prioridad 1 es opcional";
 choices[27][3] = "Todas las anteriores afirmaciones son falsas";
 answers[27] = choices[27][1];
 units[27] = "39";
 comments[27] = "Id Pregunta: 541. ";


//  Id pregunta: 542 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  WAI se refiere a:";
 choices[28]= new Array();
 choices[28][0] = "Accesibilidad de p&aacute;ginas web.";
 choices[28][1] = "Interfaces para redes de &aacute;rea local.";
 choices[28][2] = "Interfaces para redes metropolitanas.";
 choices[28][3] = "Interfaces de acceso Wi-Fi.";
 answers[28] = choices[28][0];
 units[28] = "39";
 comments[28] = "Id Pregunta: 542. ";


//  Id pregunta: 554 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  Una de las siguientes afirmaciones referentes a la normalizaci&oacute;n es falsa:";
 choices[29]= new Array();
 choices[29][0] = "Las normas espa&ntilde;olas se conocen por las siglas UNE (Una Norma Espa&ntilde;ola).";
 choices[29][1] = "Las normas europeas comienzan por las siglas EN.";
 choices[29][2] = "Las normas previas son las que se emiten cuando se considera que es prematuro promulgar formalmente una norma EN. Su codificaci&oacute;n comienza por las siglas ENV.";
 choices[29][3] = "AENOR es uno de los organismos oficiales normalizadores espa&ntilde;oles.";
 answers[29] = choices[29][3];
 units[29] = "42";
 comments[29] = "Id Pregunta: 554. ";


//  Id pregunta: 640 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  Cu&aacute;l de las siguientes afirmaciones sobre la Iniciativa de Accesibilidad para el contenido en la web (WCAG 1.0) es incorrecta:";
 choices[30]= new Array();
 choices[30][0] = "La especificaci&oacute;n contiene 14 pautas, que son los principios generales para el dise&ntilde;o accesible";
 choices[30][1] = "Cada pauta est&aacute; asociada a uno o m&aacute;s puntos de verificaci&oacute;n que describen c&oacute;mo aplicar esa pauta a las p&aacute;ginas web.";
 choices[30][2] = "Cada punto de verificaci&oacute;n est&aacute; asociado a uno de los tres niveles de adecuaci&oacute;n, los niveles A, AA y AAA";
 choices[30][3] = "El nivel minimo de adecuacion a esta norma lo fija la Ley de Servicios de la Sociedad de la Informaci&oacute;n y del Comercio Electr&oacute;nico y obliga a que las p&aacute;ginas web de la Administraci&oacute;n cumplan al menos con el nivel de adecuaci&oacute;n AA.";
 answers[30] = choices[30][3];
 units[30] = "39";
 comments[30] = "Id Pregunta: 640. ";


//  Id pregunta: 643 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  Cu&aacute;l de las siguientes afirmaciones sobre X/OPEN es incorrecta:";
 choices[31]= new Array();
 choices[31][0] = "POSIX (Portable Operating System Interface), creado por X/OPEN, consite en la creaci&oacute;n de interfaces est&aacute;ndares de sistema operativo.";
 choices[31][1] = "CAE (common Application Enviroment), creado por X/OPEN, est&aacute; basado en est&aacute;ndares internacionales y de hecho.";
 choices[31][2] = "XPG es la gu&iacute;a de portabilidad de X/OPEN";
 choices[31][3] = "X/Open es una compa&ntilde;&iacute;a independiente, sin &aacute;nimo de lucro, compuesta por usuarios, vendedores independientes de software y vendedores de sistemas inform&aacute;ticos de todo el mundo.";
 answers[31] = choices[31][0];
 units[31] = "40";
 comments[31] = "Id Pregunta: 643. ";


//  Id pregunta: 644 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Cu&aacute;l de las siguientes afirmaciones sobre la Decisi&oacute;n 87/95/CEE es incorrecta:";
 choices[32]= new Array();
 choices[32][0] = "La Decisi&oacute;n 87/95/CEE obliga a la utilizaci&oacute;n de normas europeas e internacionales en las actividades de adquisici&oacute;n de bienes y servicios relativos a la tecnolog&iacute;a de la Informaci&oacute;n, realizadas por el sector p&uacute;blico.";
 choices[32][1] = "La Decisi&oacute;n 87/95/CEE fue transcrita a la legislaci&oacute;n espa&ntilde;ola, tras lo cual entr&oacute; en vigor en Espa&ntilde;a el 8 de febrero de 1988.";
 choices[32][2] = "La Decisi&oacute;n se refiere a normas relativas a redes, a OSI, a juegos de caracteres, a la representaci&oacute;n de la informaci&oacute;n, interoperabilidad, etc.";
 choices[32][3] = "Seg&uacute;n la Decisi&oacute;n las normas europeas y las normas previas europeas (borradores en fase experimental), del CEN/CENELEC y del CEPT, deben tener el mismo nivel que las normas ISO aceptadas por el pa&iacute;s al que pertenece el poder adjudicador";
 answers[32] = choices[32][1];
 units[32] = "40";
 comments[32] = "Id Pregunta: 644. ";


//  Id pregunta: 648 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Cu&aacute;l de las siguientes relaciones entre Organismos internacionales y europeos es incorrecta:";
 choices[33]= new Array();
 choices[33][0] = "ITU-T - ETSI";
 choices[33][1] = "IEC - CENELEC";
 choices[33][2] = "Comit&eacute; conjunto JTC-1 (ISO - CEN/CENELEC)";
 choices[33][3] = "ISO -CEN";
 answers[33] = choices[33][2];
 units[33] = "42";
 comments[33] = "Id Pregunta: 648. ";


//  Id pregunta: 649 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Cu&aacute;l de las siguientes afirmaciones sobre normalizaci&oacute;n europea es incorrecta:";
 choices[34]= new Array();
 choices[34][0] = "El Instituto Europeo de Normas de Telecomunicaci&oacute;n (ETSI) elabora Especificaciones t&eacute;cnicas (TS), Informes t&eacute;cnicos (TR), Normas ETSI (ES) y Normas Europeas (EN).";
 choices[34][1] = "Los &Oacute;rganismos Nacionales de Normalizaci&oacute;n tienen la obligaci&oacute;n de adoptar &iacute;ntegramente las Normas Europeas (EN) elaboradas por CEN/CENELEC o ETSI.";
 choices[34][2] = "Las normas europeas (EN) elaboradas por CEN/CENELEC o ETSI son de obligado cumplimiento por los Estados Miembros.";
 choices[34][3] = "CEN/CENELEC elaboran de Normas Europeas (EN) y Normas Experimentales Europeas (ENVs).";
 answers[34] = choices[34][2];
 units[34] = "42";
 comments[34] = "Id Pregunta: 649. ";


//  Id pregunta: 651 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Una norma europea es:";
 choices[35]= new Array();
 choices[35][0] = "Una norma aprobada por un organismo de normalizaci&oacute;n con el que la Uni&oacute;n Europea ha establecido acuerdos";
 choices[35][1] = "De obligado cumplimiento en la Uni&oacute;n Europea";
 choices[35][2] = "Una norma homologada por un organismo de normalizaci&oacute;n con sede en la Uni&oacute;n Europea";
 choices[35][3] = "Una norma elaborada por el Comit&eacute; Europeo de Normalizaci&oacute;n (CEN)";
 answers[35] = choices[35][0];
 units[35] = "42";
 comments[35] = "Id Pregunta: 651. ";


//  Id pregunta: 652 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Se&ntilde;ale la respuesta falsa respecto a los CTS (Conformance Testing Services):";
 choices[36]= new Array();
 choices[36][0] = "Los centros de prueba CTS pueden comercializar herramientas de ensayo para que las empresas puedan realizar sus propias pruebas";
 choices[36][1] = "En Espa&ntilde;a, coordinados por AENOR, existen varios centros de prueba CTS";
 choices[36][2] = "Cada servicio de pruebas debe ofrecerse en m&aacute;s de dos Estados miembros, que deber&aacute;n velar por el reconocimiento mutuo de los resultados de las pruebas";
 choices[36][3] = "El programa CTS se basa en los principios de independencia, reconocimiento mutuo y armonizaci&oacute;n";
 answers[36] = choices[36][2];
 units[36] = "42";
 comments[36] = "Id Pregunta: 652. ";


//  Id pregunta: 666 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  El est&aacute;ndar  de servicios de directorio recogido en la arquitectura Open Systems Interconnection, para la Interconexi&oacute;n de Sistemas Abiertos es";
 choices[37]= new Array();
 choices[37][0] = "X.600";
 choices[37][1] = "Open LDAP";
 choices[37][2] = "X.400";
 choices[37][3] = "X.500";
 answers[37] = choices[37][3];
 units[37] = "40";
 comments[37] = "Id Pregunta: 666. ";


//  Id pregunta: 4322 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre PostScript y el formato PDF no es correcta?";
 choices[38]= new Array();
 choices[38][0] = "PostScript es un lenguaje de programaci&oacute;n, y PDF no";
 choices[38][1] = "Tanto PostScript como PDF comparten el mismo Modelo de Imagen, describiendo las p&aacute;ginas mediante los mismos mecanismos";
 choices[38][2] = "Tanto en PostScript como en PDF es posible definir bucles.";
 choices[38][3] = "PostScript es interpretado y ejecutado. PDF es interpretado, pero no ejecutado en sentido estricto.";
 answers[38] = choices[38][2];
 units[38] = "40";
 comments[38] = "Id Pregunta: 4322. ";


//  Id pregunta: 4511 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Una de las siguientes afirmaciones no es cierta respecto a Ia ISO (Organization International de Normalization).";
 choices[39]= new Array();
 choices[39][0] = "Es una red de los institutos de normas nacionales de mas de cien pa&iacute;ses,";
 choices[39][1] = "Es una organizaci&oacute;n no gubernamental.";
 choices[39][2] = "Todos sus miembros son parte de Ia estructura gubernamental de sus pa&iacute;ses, o son conferidos por mandato por su gobierno.";
 choices[39][3] = "La Secretaria Central esta en Ginebra, Suiza.";
 answers[39] = choices[39][2];
 units[39] = "42";
 comments[39] = "Id Pregunta: 4511. ";


//  Id pregunta: 4700 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  IESG (Internet Engineering Steering Group) se encarga de:";
 choices[40]= new Array();
 choices[40][0] = "Coordinaci&oacute;n entre organizaciones.";
 choices[40][1] = "Asignaci&oacute;n de recursos.";
 choices[40][2] = "La supervisi&oacute;n y aprobaci&oacute;n de normas";
 choices[40][3] = "Especificaci&oacute;n de est&aacute;ndares";
 answers[40] = choices[40][0];
 units[40] = "42";
 comments[40] = "Id Pregunta: 4700. Examen 2006 JCYL";


//  Id pregunta: 4743 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  El American Nacional Standard Institute (ANSI)";
 choices[41]= new Array();
 choices[41][0] = "Ha desarrollado el est&aacute;ndar FDDI";
 choices[41][1] = "Representa a Estados Unidos en la ISO";
 choices[41][2] = "Las respuestas a y b son ciertas";
 choices[41][3] = "las respuestas a y b son falsas";
 answers[41] = choices[41][2];
 units[41] = "42";
 comments[41] = "Id Pregunta: 4743. Examen 2006 JCYL";


//  Id pregunta: 4755 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  La definici&oacute;n de usabilidad seg&uacute;n el est&aacute;ndar ISO 9241-11:1998 es la siguiente:";
 choices[42]= new Array();
 choices[42][0] = "Grado en que un producto puede ser usado por una persona con alg&uacute;n tipo de discapacidad (f&iacute;sica, cognitiva o tecnol&oacute;gica) respecto a c&oacute;mo lo usar&iacute;a una persona sin discapacidad";
 choices[42][1] = "Capacidad de uso, es decir, caracter&iacute;stica que distingue a los objetos dise&ntilde;ados para su utilizaci&oacute;n de los que no.";
 choices[42][2] = "Grado en que un producto puede ser usado por los usuarios especificados para obtener los resultados especificados con efectividad, eficiencia, y satisfacci&oacute;n en un contexto de uso especificado";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = choices[42][2];
 units[42] = "39";
 comments[42] = "Id Pregunta: 4755. ";


//  Id pregunta: 4771 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  El IETF (Internet Engineering Task Force) es uno de los organismos estandarizadores m&aacute;s destacados de Internet. Sus documentos oficiales son conocidos como";
 choices[43]= new Array();
 choices[43][0] = "Las series X y V (ejemplo la recomendaci&oacute;n X.25 o V.21bis)";
 choices[43][1] = "ISO (ejemplo ISO-9000)";
 choices[43][2] = "RFC (Request for Comments)";
 choices[43][3] = "Las respuestas A y C son verdaderas";
 answers[43] = choices[43][2];
 units[43] = "42";
 comments[43] = "Id Pregunta: 4771. ";


//  Id pregunta: 4789 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;Qu&eacute; principio de los que se indican a continuaci&oacute;n NO est&aacute; recogido en el Marco Europeo de Interoperabilidad?";
 choices[44]= new Array();
 choices[44][0] = "Multiling&uuml;ismo";
 choices[44][1] = "Subsidiariedad";
 choices[44][2] = "Eficiencia";
 choices[44][3] = "Accesibilidad";
 answers[44] = choices[44][2];
 units[44] = "40";
 comments[44] = "Id Pregunta: 4789. ";


//  Id pregunta: 4799 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  &iquest;Qu&eacute; tipo de documento NO es publicado por el Instituto Europeo de Normas de Telecomunicaciones (ETSI)?";
 choices[45]= new Array();
 choices[45][0] = "Gu&iacute;a ETSI";
 choices[45][1] = "Norma ETSI";
 choices[45][2] = "Recomendaci&oacute;n ETSI";
 choices[45][3] = "Especificaci&oacute;n t&eacute;cnica ETSI";
 answers[45] = choices[45][2];
 units[45] = "42";
 comments[45] = "Id Pregunta: 4799. ";


//  Id pregunta: 4939 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  El est&aacute;ndar que refiere la usabilidad como la capacidad de un software de ser comprendido, aprendido, usadoy ser atractivo para el usuario, en condiciones espec&iacute;ficas de uso es:";
 choices[46]= new Array();
 choices[46][0] = "RFC 2865";
 choices[46][1] = "ISO/IEC 9126";
 choices[46][2] = "ISO/IEC 9241";
 choices[46][3] = "RFC 2866";
 answers[46] = choices[46][1];
 units[46] = "39";
 comments[46] = "Id Pregunta: 4939. Examen TIC B 2007";


//  Id pregunta: 4990 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes acr&oacute;nimos NO corresponde a un est&aacute;ndar del W3C?:";
 choices[47]= new Array();
 choices[47][0] = "WDSL";
 choices[47][1] = "SOAP";
 choices[47][2] = "UDDI";
 choices[47][3] = "XHTML";
 answers[47] = choices[47][2];
 units[47] = "39";
 comments[47] = "Id Pregunta: 4990. Examen TIC A 2007";


//  Id pregunta: 5054 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  RDF (Resource Description Framework) es un:";
 choices[48]= new Array();
 choices[48][0] = "Lenguaje del W3C para representar informaci&oacute;n sobre recursos en la Web";
 choices[48][1] = "Est&aacute;ndar del W3C para la definici&oacute;n de datos";
 choices[48][2] = "Est&aacute;ndar para la creaci&oacute;n de p&aacute;ginas web accesibles";
 choices[48][3] = "Est&aacute;ndar para la descripci&oacute;n de los recursos inform&aacute;ticos de una organizaci&oacute;n";
 answers[48] = choices[48][0];
 units[48] = "39";
 comments[48] = "Id Pregunta: 5054. Examen TIC A 2007";


//  Id pregunta: 5552 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[49]= new Array();
 choices[49][0] = "Las pautas WAI  se encuentran agrupadas en WCAG, ATAG, UAAG.";
 choices[49][1] = "Las pautas WAI se basan en la utilizaci&oacute;n de est&aacute;ndares del W3C.";
 choices[49][2] = "Las WCAG 1.0  tienen 15 pautas, cada una de ellas con uno o m&aacute;s puntos de verificaci&oacute;n.";
 choices[49][3] = "Cada punto de verificaci&oacute;n tiene una prioridad asignada. El cumplimiento de los puntos de prioridad 1 asegura el cumplimiento del nivel de accesibilidad web A.";
 answers[49] = choices[49][2];
 units[49] = "39";
 comments[49] = "Id Pregunta: 5552. ";


//  Id pregunta: 5555 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  La prioridad de un punto de verifiaci&oacute;n de las pautas de accesibilidad al contenido, que permite que un desarrollador pueda satisfacer dicho punto, en otro caso uno o m&aacute;s usuarios encontrar&aacute;n alguna dificultad para acceder a la informaci&oacute;n, &iquest;es Prioridad? ";
 choices[50]= new Array();
 choices[50][0] = "1";
 choices[50][1] = "2";
 choices[50][2] = "3";
 choices[50][3] = "4";
 answers[50] = choices[50][2];
 units[50] = "39";
 comments[50] = "Id Pregunta: 5555. ";


//  Id pregunta: 5856 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  El JTC-1 es un comit&eacute; t&eacute;cnico conjunto de normalizaci&oacute;n en &aacute;mbito de las TIC formado por:";
 choices[51]= new Array();
 choices[51][0] = "CEN y CENELEC";
 choices[51][1] = "ISO e IEC";
 choices[51][2] = "CEN y ETSI";
 choices[51][3] = "ISO y CIE";
 answers[51] = choices[51][1];
 units[51] = "42";
 comments[51] = "Id Pregunta: 5856. Pregunta 36";


//  Id pregunta: 5909 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  &iquest;Qu&eacute; tipo de miembros NO existen en el Instituto Europeo de Normas de Telecomunicaci&oacute;n (ETSI)?";
 choices[52]= new Array();
 choices[52][0] = "Miembros Plenos";
 choices[52][1] = "Miembros Coordinadores";
 choices[52][2] = "Miembros Asociados";
 choices[52][3] = "Miembros Consejeros";
 answers[52] = choices[52][1];
 units[52] = "42";
 comments[52] = "Id Pregunta: 5909. MAP 2008 A1";


//  Id pregunta: 5916 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  Con relaci&oacute;n a Internet, cu&aacute;l de las expresiones siguientes es INCORRECTA:";
 choices[53]= new Array();
 choices[53][0] = "Cualquier persona puede enviar memoranda propuestos para ser RFC (Request For Comments)";
 choices[53][1] = "Cada RFC tiene un t&iacute;tulo y un n&uacute;mero asignado, que no puede repetirse ni eliminarse aunque el documento se quede obsoleto";
 choices[53][2] = "Los RFCs se han publicado tradicionalmente en texto ASCII";
 choices[53][3] = "Un STD contiene siempre varios RFCs de protocolos dependientes entre s&iacute;";
 answers[53] = choices[53][3];
 units[53] = "42";
 comments[53] = "Id Pregunta: 5916. MAP 2008 A1";


//  Id pregunta: 5921 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  En relaci&oacute;n a la ITU (International Telecommunication Union), indique cu&aacute;l de los siguientes NO se corresponde con un sector estrat&eacute;gico de la misma:";
 choices[54]= new Array();
 choices[54][0] = "Radiocomunicaciones (ITU-R)";
 choices[54][1] = "Estandarizaci&oacute;n (ITU-T)";
 choices[54][2] = "Seguridad (ITU-S)";
 choices[54][3] = "Desarrollo (ITU-D)";
 answers[54] = choices[54][2];
 units[54] = "42";
 comments[54] = "Id Pregunta: 5921. MAP 2008 A1";


//  Id pregunta: 5979 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  El Organismo de Normalizaci&oacute;n:";
 choices[55]= new Array();
 choices[55][0] = "CEN (Comit&eacute; Europeo de Normalizaci&oacute;n) desarrolla normas que deben adoptarse &iacute;ntegramente por los OrganismosNacionales de Normalizaci&oacute;n pertenecientes al CEN como normas nacionales.";
 choices[55][1] = "ISO (International Organization for Standardization) tiene la competencia exclusiva de la normalizaci&oacute;n internacional en elcampo de las Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[55][2] = "ISO desarrolla normas que, en la etapa previa a su publicaci&oacute;n como est&aacute;ndar internacional, reciben el nombre deISO/PIS (Preview Draft International Standard).";
 choices[55][3] = "CEN desarrolla en el campo de las Tecnolog&iacute;as de la Informaci&oacute;n Acuerdos de Trabajo (CWA) que tienen la categor&iacute;a deNormas Europeas (EN).";
 answers[55] = choices[55][0];
 units[55] = "42";
 comments[55] = "Id Pregunta: 5979. TIC A 2009";


//  Id pregunta: 6007 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  La accesibilidad universal:";
 choices[56]= new Array();
 choices[56][0] = "Es un principio recogido y definido en la legislaci&oacute;n espa&ntilde;ola.";
 choices[56][1] = "Es un t&eacute;rmino utilizado en la documentaci&oacute;n sobre accesibilidad, pero no tiene una definici&oacute;n formal en Espa&ntilde;a.";
 choices[56][2] = "Se trata de un concepto que s&oacute;lo se aplica a las personas del medio rural.";
 choices[56][3] = "Es un concepto equivalente a la definici&oacute;n de usabilidad que se da en la ISO/IEC 9241.";
 answers[56] = choices[56][0];
 units[56] = "39";
 comments[56] = "Id Pregunta: 6007. TIC A 2009";


//  Id pregunta: 6054 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  El CCITT ha pasado a denominarse:";
 choices[57]= new Array();
 choices[57][0] = "UIT-T o ITU-T.";
 choices[57][1] = "CEPT.";
 choices[57][2] = "IEEE.";
 choices[57][3] = "ETSI.";
 answers[57] = choices[57][0];
 units[57] = "42";
 comments[57] = "Id Pregunta: 6054. TIC A 2009";


//  Id pregunta: 6058 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Qu&eacute; asociaci&oacute;n entre organismos internacionales y europeos es la correcta?";
 choices[58]= new Array();
 choices[58][0] = "IEC-CENELEC, UIT-ETSI, ISO-CEN.";
 choices[58][1] = "IEC-CEN, ISO-CENELEC, ITU-ETSI.";
 choices[58][2] = "ISO-CEN, IEEE-IEC, ETSI-CENELEC.";
 choices[58][3] = "IEC-CENELEC, IEEE-ETSI, ISO-CEN.";
 answers[58] = choices[58][0];
 units[58] = "42";
 comments[58] = "Id Pregunta: 6058. TIC A 2009";


//  Id pregunta: 6135 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Los documentos denominados &quot;Pautas de Accesibilidad al Contenido en la Web&quot; (WCAG por sus siglas en ingl&eacute;s) explican c&oacute;mo hacer que el contenido web sea accesible para personas con discapacidad. Indicar cu&aacute;l de las siguientes afirmaciones es FALSA en relaci&oacute;n con estos documentos:";
 choices[59]= new Array();
 choices[59][0] = "Las pautas WCAG est&aacute;n pensadas principalmente para desarrolladores.";
 choices[59][1] = "Las pautas WCAG 2.0 se organizan en 4 principios b&aacute;sicos: perceptible, operable, comprensible y robusto.";
 choices[59][2] = "La &uacute;ltima versi&oacute;n documentada y reconocida de las pautas WCAG es la 3.0.";
 choices[59][3] = "Una diferencia entre las pautas WCAG 1.0 y las pautas WCAG 2.0 es que estas &uacute;ltimas son aplicables a una gama m&aacute;s amplia de tecnolog&iacute;as de contenido web.";
 answers[59] = choices[59][2];
 units[59] = "39";
 comments[59] = "Id Pregunta: 6135. TIC A 2009";


//  Id pregunta: 6244 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  La norma UNE 139801:2003 establece requisitos de accesibilidad del hardware de los ordenadores para las personas con discapacidad, agrupados en:";
 choices[60]= new Array();
 choices[60][0] = "5 categor&iacute;as: botones e interruptores, teclas y teclados, pantalla, audio, unidades de disco y medios de almacenamiento extra&iacute;bles";
 choices[60][1] = "3 categor&iacute;as: elementos de procesamiento, elementos de almacenamiento, perif&eacute;ricos";
 choices[60][2] = "9 categor&iacute;as: botones e interruptores, teclas y teclados, pantalla, audio, unidades de disco y medios de almacenamiento extra&iacute;bles, conexiones externas, tiempo, documentaci&oacute;n, otros";
 choices[60][3] = "2 categor&iacute;as: elementos centrales y perif&eacute;ricos";
 answers[60] = choices[60][2];
 units[60] = "39";
 comments[60] = "Id Pregunta: 6244. TICB-2009";


//  Id pregunta: 6416 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes no es un principio del WCAG 2.0?";
 choices[61]= new Array();
 choices[61][0] = "Perceptible";
 choices[61][1] = "Operable";
 choices[61][2] = "Robusto";
 choices[61][3] = "Usable";
 answers[61] = choices[61][3];
 units[61] = "39";
 comments[61] = "Id Pregunta: 6416. NULL";


//  Id pregunta: 6420 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Qu&eacute; es TAW?";
 choices[62]= new Array();
 choices[62][0] = "Es una familia de herramienta para el an&aacute;lisis de la accesibilidad  de sitios web.";
 choices[62][1] = "Es un Gestor de Contenidos";
 choices[62][2] = "Es un tipo de licencia de software libre";
 choices[62][3] = "Es una herramienta de workgroup";
 answers[62] = choices[62][0];
 units[62] = "39";
 comments[62] = "Id Pregunta: 6420. NULL";


//  Id pregunta: 6421 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes pautas no corresponde al principio de Perceptibilidad de WCAG 2.0?";
 choices[63]= new Array();
 choices[63][0] = "Navegable";
 choices[63][1] = "Alternativas Textuales";
 choices[63][2] = "Adaptable";
 choices[63][3] = "Distinguible";
 answers[63] = choices[63][0];
 units[63] = "39";
 comments[63] = "Id Pregunta: 6421. NULL";


//  Id pregunta: 6422 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Proporcionar a los usuarios el tiempo suficiente para leer y usar el contenido es una pauta que corresponde, &iquest;a qu&eacute; principio de WCAG 2.0?";
 choices[64]= new Array();
 choices[64][0] = "Perceptible";
 choices[64][1] = "Operable";
 choices[64][2] = "Robusto";
 choices[64][3] = "Comprensible";
 answers[64] = choices[64][1];
 units[64] = "39";
 comments[64] = "Id Pregunta: 6422. NULL";


//  Id pregunta: 6423 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes personas puso en marcha el W3C?";
 choices[65]= new Array();
 choices[65][0] = "Tim O'Reilly";
 choices[65][1] = "Vinton Cerf";
 choices[65][2] = "Tim Berners-Lee";
 choices[65][3] = "Ninguna de las anteriores";
 answers[65] = choices[65][2];
 units[65] = "39";
 comments[65] = "Id Pregunta: 6423. NULL";


//  Id pregunta: 6424 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;Cu&aacute;ntas pautas se definen en total en las gu&iacute;as WCAG 2.0?";
 choices[66]= new Array();
 choices[66][0] = "12";
 choices[66][1] = "14";
 choices[66][2] = "25";
 choices[66][3] = "81";
 answers[66] = choices[66][0];
 units[66] = "39";
 comments[66] = "Id Pregunta: 6424. NULL";


//  Id pregunta: 7327 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;En qu&eacute; categor&iacute;as se dividen los miembros de ISO?";
 choices[67]= new Array();
 choices[67][0] = "Natos, Correspondientes y Suscritos";
 choices[67][1] = "Natos, Asociados y Suscritos";
 choices[67][2] = "Natos, Asociados, Correspondientes y Suscritos";
 choices[67][3] = "Natos, de Pleno Derecho y Asociados";
 answers[67] = choices[67][0];
 units[67] = "42";
 comments[67] = "Id Pregunta: 7327. NULL";


//  Id pregunta: 7328 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  &iquest;Qu&eacute; instituci&oacute;n representa a Espa&ntilde;a en ISO?";
 choices[68]= new Array();
 choices[68][0] = "SETSI";
 choices[68][1] = "Red.es";
 choices[68][2] = "AENOR";
 choices[68][3] = "INTECO";
 answers[68] = choices[68][2];
 units[68] = "42";
 comments[68] = "Id Pregunta: 7328. NULL";


//  Id pregunta: 7329 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  Se&ntilde;ale la afirmaci&oacute;n VERDADERA con respecto a AENOR:";
 choices[69]= new Array();
 choices[69][0] = "Es una Entidad P&uacute;blica Empresarial";
 choices[69][1] = "No tiene &aacute;nimo de lucro";
 choices[69][2] = "Depende org&aacute;nicamente de la Secretar&iacute;a de Estado de Telecomunicaciones y para la sociedad de la Informaci&oacute;n";
 choices[69][3] = "Est&aacute; reconocida como organismo de normalizaci&oacute;n y para actuar como entidad de certificaci&oacute;n por el Real Decreto 200/1995";
 answers[69] = choices[69][1];
 units[69] = "42";
 comments[69] = "Id Pregunta: 7329. www.aenor.es";


//  Id pregunta: 7330 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  &iquest;Qu&eacute; tipos de miembro tiene AENOR?";
 choices[70]= new Array();
 choices[70][0] = "Natos, Corporativos, Adheridos y de Honor";
 choices[70][1] = "Adheridos, de Pleno Derecho y Suscritos";
 choices[70][2] = "Correspondientes, Individuales, Corporativos y de Honor";
 choices[70][3] = "Corporativos, Adheridos, Individuales y de Honor";
 answers[70] = choices[70][3];
 units[70] = "42";
 comments[70] = "Id Pregunta: 7330. www.aenor.es";


//  Id pregunta: 7333 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  La International Telecommunication Union (ITU)  es el organismo especializado de la Organizaci&oacute;n de las Naciones Unidas encargado de regular las telecomunicaciones a nivel internacional entre las distintas administraciones y empresas operadoras. Se divide en varios sectores, el correspondiente a Telecomunicaciones se denomina:";
 choices[71]= new Array();
 choices[71][0] = "ITU-T";
 choices[71][1] = "ITU-R";
 choices[71][2] = "ITU-D";
 choices[71][3] = "ITU-C";
 answers[71] = choices[71][0];
 units[71] = "42";
 comments[71] = "Id Pregunta: 7333. NULL";


//  Id pregunta: 7336 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  Es un organismo europeo de normalizaci&oacute;n, de acuerdo a la Directiva 98/34/CE";
 choices[72]= new Array();
 choices[72][0] = "CEN";
 choices[72][1] = "ICANN";
 choices[72][2] = "SETSI";
 choices[72][3] = "GNU";
 answers[72] = choices[72][0];
 units[72] = "42";
 comments[72] = "Id Pregunta: 7336. NULL";


//  Id pregunta: 8222 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l es el nivel m&iacute;nimo de accesibilidad que deben cumplir las p&aacute;ginas de Internet de las Administraciones P&uacute;blicas o financiadas con fondos p&uacute;blicos?:";
 choices[73]= new Array();
 choices[73][0] = "No existe m&iacute;nimo alguno fijado por la normativa.";
 choices[73][1] = "El definido en las prioridades 1 y 2 de la norma UNE 139803: 2004.";
 choices[73][2] = "El m&aacute;s alto que permita el estado de la t&eacute;cnica en cada momento.";
 choices[73][3] = "El definido en la norma UNE 14009 :2006, apartados 2 y 3.";
 answers[73] = choices[73][1];
 units[73] = "39";
 comments[73] = "Id Pregunta: 8222. Examen TIC A1 2010";


//  Id pregunta: 8308 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l es el acr&oacute;nimo del organismo responsable de definir toda la arquitectura de Internet? ";
 choices[74]= new Array();
 choices[74][0] = "IETF. ";
 choices[74][1] = "ICANN. ";
 choices[74][2] = "IAB. ";
 choices[74][3] = "IRTF.";
 answers[74] = choices[74][2];
 units[74] = "112,42";
 comments[74] = "Id Pregunta: 8308. Examen TIC A2 2010";


//  Id pregunta: 8310 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  La autoridad encargada de la asignaci&oacute;n de nombres de dominio de primer nivel gen&eacute;ricos (gTLD) y de c&oacute;digos de pa&iacute;ses (ocTLD) &uacute;nicos en lnternet es:";
 choices[75]= new Array();
 choices[75][0] = "IANA. ";
 choices[75][1] = "NIST.";
 choices[75][2] = "ICANN.";
 choices[75][3] = "IETF.";
 answers[75] = choices[75][2];
 units[75] = "112,42";
 comments[75] = "Id Pregunta: 8310. Examen TIC A2 2010";


//  Id pregunta: 8601 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es un principio del Dise&ntilde;o Universal?";
 choices[76]= new Array();
 choices[76][0] = "Uso equiparable";
 choices[76][1] = "Uso flexible";
 choices[76][2] = "Que exija poco esfuerzo f&iacute;sico";
 choices[76][3] = "Robusto";
 answers[76] = choices[76][3];
 units[76] = "39";
 comments[76] = "Id Pregunta: 8601. Examen TIC A2 2010 interna";


//  Id pregunta: 8608 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;En que norma ISO viene reflejada la usabilidad del software?";
 choices[77]= new Array();
 choices[77][0] = "ISO/IEC 9126";
 choices[77][1] = "ISO 8859";
 choices[77][2] = "ISO 14000";
 choices[77][3] = "ISO/IEC 14496";
 answers[77] = choices[77][0];
 units[77] = "39";
 comments[77] = "Id Pregunta: 8608. Examen TIC A2 2010 interna";


//  Id pregunta: 9055 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Cual de los siguientes NO es un principio del dise&ntilde;o universal ?";
 choices[78]= new Array();
 choices[78][0] = "Escaso esfuerzo f&iacute;sico";
 choices[78][1] = "Simple e intuitivo.";
 choices[78][2] = "Informaci&oacute;n f&aacute;cil de percibir";
 choices[78][3] = "universalidad";
 answers[78] = choices[78][3];
 units[78] = "39";
 comments[78] = "Id Pregunta: 9055. NULL";


//  Id pregunta: 9056 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Cual de las siguientes ISO tiene definici&oacute;n de usabilidad?";
 choices[79]= new Array();
 choices[79][0] = "ISO/IEC 9126";
 choices[79][1] = "ISO/IEC 9241";
 choices[79][2] = "Las dos anteriores";
 choices[79][3] = "Ninguna de las anteriores";
 answers[79] = choices[79][2];
 units[79] = "39";
 comments[79] = "Id Pregunta: 9056. NULL";


//  Id pregunta: 9068 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Se&ntilde;ale la afirmaci&oacute;n FALSA respecto a las normas WCAG 2.0:";
 choices[80]= new Array();
 choices[80][0] = "Una de las mejoras respecto a WCAG 1.0 es la posibilidad de evaluarlas de manera autom&aacute;tica. ";
 choices[80][1] = "En Espa&ntilde;a se incorporan mediante la norma UNE 139803. ";
 choices[80][2] = "Constan de 14 pautas. ";
 choices[80][3] = "La pauta Adaptable dentro del principio Perceptible se refiere a &quot;Contenido presentado de diferentes formas sin perder informaci&oacute;n o estructura&quot;. ";
 answers[80] = choices[80][2];
 units[80] = "39";
 comments[80] = "Id Pregunta: 9068. ";


//  Id pregunta: 9070 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;Cu&aacute;ntas gu&iacute;as de accesibilidad del WAI existen actualmente (abril de 2013)?";
 choices[81]= new Array();
 choices[81][0] = "Tres: ATAG, WCAG y UUAG. ";
 choices[81][1] = "Seis: ATAG, WCAG, UAAG, XAG, FCAG y WAI-RIA. ";
 choices[81][2] = "Cuatro: ATAG, WCAG, UAAG y XAG. ";
 choices[81][3] = "Cinco: ATAG, WCAG, UAAG, XAG y WAI-RIA. ";
 answers[81] = choices[81][3];
 units[81] = "39";
 comments[81] = "Id Pregunta: 9070. ";


//  Id pregunta: 9071 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Se&ntilde;ale la afirmaci&oacute;n FALSA:";
 choices[82]= new Array();
 choices[82][0] = "El acr&oacute;nimo XAG se refiere a XML Accesibility Guidelines. ";
 choices[82][1] = "En las normas WCAG 2.0, el nivel se otorga a nivel de procesos y subprocesos. ";
 choices[82][2] = "El W3C publica gram&aacute;ticas HTML que deben satisfacerse para lograr el nivel AA en las normas WCAG 2.0. ";
 choices[82][3] = "WAI-ARIA es un acr&oacute;nimo que significa Web Accesibility Initiative - Accesible Rich Internet Applications. ";
 answers[82] = choices[82][1];
 units[82] = "39";
 comments[82] = "Id Pregunta: 9071. ";


//  Id pregunta: 9279 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de los siguientes es un principio del programa IDABC?";
 choices[83]= new Array();
 choices[83][0] = "Alianzas.";
 choices[83][1] = "Compartici&oacute;n de recursos.";
 choices[83][2] = "Subsidiariedad.";
 choices[83][3] = "Ninguno de los anteriores.";
 answers[83] = choices[83][2];
 units[83] = "40";
 comments[83] = "Id Pregunta: 9279. ";


//  Id pregunta: 9289 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l es la norma de creaci&oacute;n de AENOR?";
 choices[84]= new Array();
 choices[84][0] = "El RD 2200/1995.";
 choices[84][1] = "El RD 757/1986.";
 choices[84][2] = "La Ley 5/1985.";
 choices[84][3] = "Ninguna, pues no es un organismo p&uacute;blico. ";
 answers[84] = choices[84][3];
 units[84] = "42";
 comments[84] = "Id Pregunta: 9289. ";


//  Id pregunta: 9749 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;En qu&eacute; ley se exige que se establezcan las medidas necesarias para incentivar el acceso a las telecomunicaciones en lengua de signos espa&ntilde;ola?";
 choices[85]= new Array();
 choices[85][0] = "Ley 30/92";
 choices[85][1] = "Ley 27/2007";
 choices[85][2] = "Ley 11/2007";
 choices[85][3] = "Ley 34/2002";
 answers[85] = choices[85][1];
 units[85] = "39";
 comments[85] = "Id Pregunta: 9749. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10009 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Los RFC de la IETF son";
 choices[86]= new Array();
 choices[86][0] = "peticiones de cambio (Request for Change) que proponen mejoras sobre protocolos en funcionamiento en Internet.";
 choices[86][1] = "notas t&eacute;cnicas que describen los protocolos utilizados en Internet.";
 choices[86][2] = "peticiones de comentarios a la comunidad de internautas sobre temas relacionados con Internet.";
 choices[86][3] = "las especificaciones formales de los protocolos para comunicaci&oacute;n remota (Remote Function Call).";
 answers[86] = choices[86][1];
 units[86] = "42";
 comments[86] = "Id Pregunta: 10009. ";


//  Id pregunta: 10353 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l es el &aacute;mbito de aplicaci&oacute;n del Real Decreto 1494/2007 de accesibilidad a la sociedad de la informaci&oacute;n y medios de comunicaci&oacute;n social?";
 choices[87]= new Array();
 choices[87][0] = "Los portales web de la Administraciones P&uacute;blicas";
 choices[87][1] = "Administraciones P&uacute;blicas, operadores de telecomunicaciones, prestadores de servicios de la sociedad de la informaci&oacute;n, y medios de comunicaci&oacute;n social";
 choices[87][2] = "Administraciones P&uacute;blicas y medios de comunicaci&oacute;n social, ya que los operadores de telecomunicaciones se rigen por lo dispuesto en la Ley General de Telecomunicaciones";
 choices[87][3] = "Es el mismo que se establece en la norma UNE 139803:2012";
 answers[87] = choices[87][1];
 units[87] = "39";
 comments[87] = "Id Pregunta: 10353. Consultar Art. 2 del Real Decreto";


//  Id pregunta: 10358 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de los siguientes no es un principio del Marco Europeo de Interopeabilidad?";
 choices[88]= new Array();
 choices[88][0] = "Multiling&uuml;ismo";
 choices[88][1] = "Accesibilidad";
 choices[88][2] = "Empleo de soluciones de software libre";
 choices[88][3] = "Uso de est&aacute;ndares abiertos";
 answers[88] = choices[88][2];
 units[88] = "40";
 comments[88] = "Id Pregunta: 10358. Los ocho principios que define el Marco Europeo de Interoperabilidad son: Accesibilidad, Multiling&uuml;ismo, Seguridad, Protecci&oacute;n de datos de car&aacute;cter personal, Subsidiariedad, Uso de est&aacute;ndares abiertos, Valorar los beneficios de software de fuentes abierta";


//  Id pregunta: 10359 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En relaci&oacute;n con los sistemas abiertos, se&ntilde;ale la respuesta err&oacute;nea:";
 choices[89]= new Array();
 choices[89][0] = "Un sistema abierto es aquel cuyas especificaciones est&aacute;n aprobadas, publicadas y respaldadas por organismos independientes de normalizaci&oacute;n";
 choices[89][1] = "Un sistema abierto es aquel capaz de interconectarse con otros de acuerdo con unas normas establecidas";
 choices[89][2] = "Los sistemas abiertos se caracterizan por su interopeabilidad, portabilidad y escalabilidad";
 choices[89][3] = "Los sistemas abiertos deben hacer uso de est&aacute;ndares abiertos";
 answers[89] = choices[89][3];
 units[89] = "40";
 comments[89] = "Id Pregunta: 10359. Un sistema puede ser abierto pero no hacer uso de est&aacute;ndares abiertos";


//  Id pregunta: 10362 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Entre los documentos generados por ISO, aquellos que recogen informaci&oacute;n que no aparece en los Est&aacute;ndares Internacionales reciben el nombre de&hellip;";
 choices[90]= new Array();
 choices[90][0] = "Technical Especifications";
 choices[90][1] = "Technical Reports";
 choices[90][2] = "Technical Corrigendum";
 choices[90][3] = "Gu&iacute;as ISO";
 answers[90] = choices[90][1];
 units[90] = "42";
 comments[90] = "Id Pregunta: 10362. http://www.iso.org/iso/home/standards_development/deliverables-all.htm?type=tr";


//  Id pregunta: 10364 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  En relaci&oacute;n con IEC (International Electrotechnical Commission), se&ntilde;ale la respuesta incorrecta:";
 choices[91]= new Array();
 choices[91][0] = "El equivalente europeo es CENELEC (Comit&eacute; Europeo de Normalizaci&oacute;n Electrot&eacute;cnica)";
 choices[91][1] = "La representaci&oacute;n espa&ntilde;ola como miembro de pleno derecho recae en AENOR";
 choices[91][2] = "Elabora normas a nivel t&eacute;cnico en materia el&eacute;ctrica y electrot&eacute;cnica";
 choices[91][3] = "Las normas elaboradas por el CENELEC se denominan CEN";
 answers[91] = choices[91][3];
 units[91] = "42";
 comments[91] = "Id Pregunta: 10364. Las normas elaboradas por el CENELEC se denominan EN (Norma Europea)";


//  Id pregunta: 10430 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  Indique cu&aacute;l de los siguientes es un organismo europeo de normalizaci&oacute;n. ";
 choices[92]= new Array();
 choices[92][0] = "CENELEC";
 choices[92][1] = "IEC";
 choices[92][2] = "ISO";
 choices[92][3] = "IEEE";
 answers[92] = choices[92][0];
 units[92] = "42";
 comments[92] = "Id Pregunta: 10430. Examen TIC A1 2013";


//  Id pregunta: 10601 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En materia de accesibilidad, las Administraciones P&uacute;blicas deben cumplir:";
 choices[93]= new Array();
 choices[93][0] = "El Real Decreto 1494/2007";
 choices[93][1] = "Los niveles A y AA de la norma UNE 139803:2012";
 choices[93][2] = "Los niveles A y AA de las WCAG 2.0";
 choices[93][3] = "Todas las anteriores.";
 answers[93] = choices[93][3];
 units[93] = "39";
 comments[93] = "Id Pregunta: 10601. ";


//  Id pregunta: 11023 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de las siguientes no es una pauta del principio de Comprensibilidad de las WCAG 2.0?";
 choices[94]= new Array();
 choices[94][0] = "Navegable";
 choices[94][1] = "Legible y entendible";
 choices[94][2] = "Predecible";
 choices[94][3] = "Ayuda a la entrada de datos";
 answers[94] = choices[94][0];
 units[94] = "39";
 comments[94] = "Id Pregunta: 11023. La pauta 'Navegable' pertenece al principio de Operabilidad";


//  Id pregunta: 11024 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de las siguientes es un principio de Dise&ntilde;o universal?";
 choices[95]= new Array();
 choices[95][0] = "Cumplimiento de las WCAG 1.0";
 choices[95][1] = "Cumplimiento de las WCAG 2.0";
 choices[95][2] = "Escaso esfuerzo f&iacute;sico";
 choices[95][3] = "Ensayo prueba-error";
 answers[95] = choices[95][2];
 units[95] = "39";
 comments[95] = "Id Pregunta: 11024. ";


//  Id pregunta: 11110 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seleccione la opci&oacute;n que no indica un principio o pauta de las WCAG 2.0";
 choices[96]= new Array();
 choices[96][0] = "Comprensibilidad";
 choices[96][1] = "Sencillez";
 choices[96][2] = "Operabilidad";
 choices[96][3] = "Robustez";
 answers[96] = choices[96][1];
 units[96] = "39";
 comments[96] = "Id Pregunta: 11110. ";


//  Id pregunta: 11111 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l no es un principio general del dise&ntilde;o centrado en el usuario de Nielsen?";
 choices[97]= new Array();
 choices[97][0] = "Medida de la satisfacci&oacute;n del usuario";
 choices[97][1] = "Visibilidad del estado del sistema";
 choices[97][2] = "Dise&ntilde;o minimalista";
 choices[97][3] = "Prevenci&oacute;n y ayuda en la recuperaci&oacute;n de errores";
 answers[97] = choices[97][0];
 units[97] = "39";
 comments[97] = "Id Pregunta: 11111. ";


//  Id pregunta: 11502 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;les de los siguientes NO es un documento emitido por el European Telecomunication Standard Institute (ETSI)?";
 choices[98]= new Array();
 choices[98][0] = "ENV, normas experimentales";
 choices[98][1] = "ES, Normas ETSTI";
 choices[98][2] = "IT, Industrial Agreement";
 choices[98][3] = "HS, Normas armonizadas";
 answers[98] = choices[98][2];
 units[98] = "42";
 comments[98] = "Id Pregunta: 11502. NULL";


//  Id pregunta: 11752 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de los siguientes no es un principio de accesibilidad?";
 choices[99]= new Array();
 choices[99][0] = "robusto";
 choices[99][1] = "operable";
 choices[99][2] = "universal";
 choices[99][3] = "perceptible";
 answers[99] = choices[99][2];
 units[99] = "39";
 comments[99] = "Id Pregunta: 11752. ";


