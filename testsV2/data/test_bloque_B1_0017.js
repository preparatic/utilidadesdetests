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

//  Id pregunta: 23 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;C&oacute;mo se denomina la comprobaci&oacute;n de si un producto en el campo de las TI satisface o no los requisitos t&eacute;cnicos de una norma?:";
 choices[0]= new Array();
 choices[0][0] = "Certificaci&oacute;n";
 choices[0][1] = "Homologaci&oacute;n";
 choices[0][2] = "Prueba de conformidad";
 choices[0][3] = "Comprobaci&oacute;n de especificaci&oacute;n t&eacute;cnica";
 answers[0] = choices[0][2];
 units[0] = "42";
 comments[0] = "Id Pregunta: 23. ";


//  Id pregunta: 61 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; es ECMA?:";
 choices[1]= new Array();
 choices[1][0] = "La red de correo electr&oacute;nico de la Uni&oacute;n Europea";
 choices[1][1] = "La asociaci&oacute;n europea de fabricantes de ordenadores";
 choices[1][2] = "La entidad europea de desarrollo de est&aacute;ndares de electr&oacute;nica y comunicaciones";
 choices[1][3] = "Nada de lo anterior";
 answers[1] = choices[1][1];
 units[1] = "42";
 comments[1] = "Id Pregunta: 61. ";


//  Id pregunta: 81 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Qu&eacute; se entiende por  'throughput'?:";
 choices[2]= new Array();
 choices[2][0] = "Es la cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado";
 choices[2][1] = "Es la m&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de carga determinado";
 choices[2][2] = "Es el tiempo transcurrido entre la entrega de un trabajo o una transacci&oacute;n al sistema y la recepci&oacute;n del resultado o la respuesta";
 choices[2][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[2] = choices[2][0];
 units[2] = "35";
 comments[2] = "Id Pregunta: 81. NULL";


//  Id pregunta: 84 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qu&eacute; se establece en la Decisi&oacute;n del Consejo 93/465/CEE?:";
 choices[3]= new Array();
 choices[3][0] = "El desarrollo de la Directiva 87/95/EEC de armonizaci&oacute;n t&eacute;cnica de productos software en la Uni&oacute;n Europea";
 choices[3][1] = "La creaci&oacute;n de una serie de laboratorios de evaluaci&oacute;n de la conformidad de productos en el &aacute;mbito de la Uni&oacute;n Europea";
 choices[3][2] = "El planteamiento global en materia de evaluaci&oacute;n de conformidad y armonizaci&oacute;n t&eacute;cnica en la Uni&oacute;n Europea";
 choices[3][3] = "El r&eacute;gimen de colocaci&oacute;n del marcado &quot;CE&quot; de conformidad con la normativa comunitaria referente al dise&ntilde;o, fabricaci&oacute;n, comercializaci&oacute;n, puesta en servicio y utilizaci&oacute;n de los productos industriales";
 answers[3] = choices[3][3];
 units[3] = "42";
 comments[3] = "Id Pregunta: 84. ";


//  Id pregunta: 86 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Qu&eacute; tipos de miembros forman X/OPEN (actual Open Group)?:";
 choices[4]= new Array();
 choices[4][0] = "Distintas compa&ntilde;&iacute;as que desarrollan sistemas operativos y hardware";
 choices[4][1] = "Organizaciones de estandarizaci&oacute;n";
 choices[4][2] = "Grupos de usuarios y diversos grupos de inter&eacute;s en tecnolog&iacute;as de la informaci&oacute;n";
 choices[4][3] = "Todos los anteriores";
 answers[4] = choices[4][3];
 units[4] = "42";
 comments[4] = "Id Pregunta: 86. ";


//  Id pregunta: 141 AÃ±o de creación de pregunta: 2009-01-01
 questions[5]= "6)  El Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos:";
 choices[5]= new Array();
 choices[5][0] = "Es nombrado por las Cortes Generales";
 choices[5][1] = "No puede ser cesado antes de la finalizaci&oacute;n de su mandato";
 choices[5][2] = "Ostenta el rango de Subsecretario";
 choices[5][3] = "Tiene una mandato de 6 a&ntilde;os";
 answers[5] = choices[5][2];
 units[5] = "29";
 comments[5] = "Id Pregunta: 141. ";


//  Id pregunta: 142 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  El dominio de la informaci&oacute;n se articula en tres grandes partes:";
 choices[6]= new Array();
 choices[6][0] = "Flujo de la informaci&oacute;n, proceso de la informaci&oacute;n, estructura de la informaci&oacute;n";
 choices[6][1] = "Flujo de la informaci&oacute;n, proceso de la informaci&oacute;n, almac&eacute;n de la informaci&oacute;n";
 choices[6][2] = "Flujo de la informaci&oacute;n, contenido de la informaci&oacute;n, almac&eacute;n de la informaci&oacute;n";
 choices[6][3] = "Flujo de la informaci&oacute;n, contenido de la informaci&oacute;n, estructura de la informaci&oacute;n";
 answers[6] = choices[6][3];
 units[6] = "21";
 comments[6] = "Id Pregunta: 142. NULL";


//  Id pregunta: 143 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El establecimiento de un mecanismo que permita la identificaci&oacute;n de forma inequ&iacute;voca y personalizada de todo aquel usuario que intente acceder al sistema de informaci&oacute;n y la verificaci&oacute;n de que est&aacute; autorizado, es una medida de nivel:";
 choices[7]= new Array();
 choices[7][0] = "B&aacute;sico";
 choices[7][1] = "Medio";
 choices[7][2] = "Alto";
 choices[7][3] = "Ninguna de las anteriores";
 answers[7] = choices[7][0];
 units[7] = "29";
 comments[7] = "Id Pregunta: 143. ";


//  Id pregunta: 146 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El instituto ANSI tiene homologados, desde hace tiempo, diversos lenguajes, entre los que no se encuentra el:";
 choices[8]= new Array();
 choices[8][0] = "COBOL";
 choices[8][1] = "PROLOG";
 choices[8][2] = "FORTRAN";
 choices[8][3] = "C";
 answers[8] = choices[8][2];
 units[8] = "42";
 comments[8] = "Id Pregunta: 146. Todos estan ya hologados, pero FORTRAN fue el ultimo en 2007";


//  Id pregunta: 177 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En el &aacute;rea de los sistemas de informaci&oacute;n, &iquest;cu&aacute;l es el significado de las siglas MIS?:";
 choices[9]= new Array();
 choices[9][0] = "Manufacturing In Sequence";
 choices[9][1] = "Manufacturing Information System";
 choices[9][2] = "Management Information System";
 choices[9][3] = "Modelling Input System";
 answers[9] = choices[9][2];
 units[9] = "21";
 comments[9] = "Id Pregunta: 177. ";


//  Id pregunta: 185 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En el modelo de Donovan la expresi&oacute;n 'mano amiga' se refiere a:";
 choices[10]= new Array();
 choices[10][0] = "Empresas que han optado por instalar de forma distribuida el hardware, y el usuario tiene poder de decisi&oacute;n";
 choices[10][1] = "Empresas en las que se ha descentralizado el hardware y el usuario tiene poder de decisi&oacute;n";
 choices[10][2] = "Empresas en las que se ha descentralizado el hardware y el desarrollo, pero el usuario no tiene poder de decisi&oacute;n";
 choices[10][3] = "Empresas en las que se ha descentralizado el hardware y el desarrollo y el usuario tiene poder de decisi&oacute;n";
 answers[10] = choices[10][1];
 units[10] = "22";
 comments[10] = "Id Pregunta: 185. donovan - nolan";


//  Id pregunta: 244 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En una auditor&iacute;a de comunicaciones al realizar un an&aacute;lisis detallado de los costes operativos, no ser&aacute; relevante considerar:";
 choices[11]= new Array();
 choices[11][0] = "Volumen de datos transmitidos";
 choices[11][1] = "Tiempos de duraci&oacute;n de conexi&oacute;n";
 choices[11][2] = "Protocolo de comunicaci&oacute;n";
 choices[11][3] = "Facilidades est&aacute;ticas y din&aacute;micas de conexi&oacute;n";
 answers[11] = choices[11][2];
 units[11] = "31,32,33";
 comments[11] = "Id Pregunta: 244. ";


//  Id pregunta: 306 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  La fase de formulaci&oacute;n de las pol&iacute;ticas p&uacute;blicas es:";
 choices[12]= new Array();
 choices[12][0] = "Una fase exclusiva de los actores p&uacute;blicos";
 choices[12][1] = "Una fase exclusiva del sector privado";
 choices[12][2] = "Una fase de colaboraci&oacute;n entre el sector p&uacute;blico y privado";
 choices[12][3] = "Una fase de los actores p&uacute;blicos en cuanto a objetivos a alcanzar y del sector privado en cuanto a posibles alternativas para llegar a ellos";
 answers[12] = choices[12][0];
 units[12] = "41";
 comments[12] = "Id Pregunta: 306. NULL";


//  Id pregunta: 315 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  La Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de Car&aacute;cter Personal incluye como posibles sujetos del r&eacute;gimen sancionador:";
 choices[13]= new Array();
 choices[13][0] = "S&oacute;lo al responsable del fichero";
 choices[13][1] = "S&oacute;lo al encargado del tratamiento";
 choices[13][2] = "Al responsable del fichero y al encargado del tratamiento";
 choices[13][3] = "La Ley 15/99 no regula el r&eacute;gimen sancionador";
 answers[13] = choices[13][2];
 units[13] = "29";
 comments[13] = "Id Pregunta: 315. ";


//  Id pregunta: 330 AÃ±o de creación de pregunta: 2004-01-01
 questions[14]= "15)  La Comisi&oacute;n Interministerial para actuar contra las actividades vulneradoras de los derechos de propiedad intelectual e industrial (Comisi&oacute;n antipirater&iacute;a) fue creada por:";
 choices[14]= new Array();
 choices[14][0] = "RD 1228/2005, de 13 de octubre";
 choices[14][1] = "RDL 1/1996, de 12 de abril.";
 choices[14][2] = "RD 428/1993, de 26 de marzo.";
 choices[14][3] = "RD 114/2000, de 28 de enero.";
 answers[14] = choices[14][0];
 units[14] = "37";
 comments[14] = "Id Pregunta: 330. ";


//  Id pregunta: 337 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  La realizaci&oacute;n de copias de &quot;backup&quot; peri&oacute;dicas en un centro de proceso de datos es responsabilidad del &aacute;rea de:";
 choices[15]= new Array();
 choices[15][0] = "Desarrollo";
 choices[15][1] = "Mantenimiento";
 choices[15][2] = "Producci&oacute;n";
 choices[15][3] = "En un centro de proceso de datos no es necesario hacer peri&oacute;dicamente copias de seguridad";
 answers[15] = choices[15][2];
 units[15] = "26";
 comments[15] = "Id Pregunta: 337. ";


//  Id pregunta: 339 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  La red de comunicaci&oacute;n en cadena de una organizaci&oacute;n es:";
 choices[16]= new Array();
 choices[16][0] = "Comunicaci&oacute;n ascendente donde dos subordinados reportan a su jefe sobre un asunto";
 choices[16][1] = "Esquema descendente en jerarqu&iacute;a absoluta";
 choices[16][2] = "Cada sujeto se comunica con todos los restantes";
 choices[16][3] = "Se establece con dos interlocutores en cada caso, interactuando con los m&aacute;s cercanos a uno";
 answers[16] = choices[16][1];
 units[16] = "23";
 comments[16] = "Id Pregunta: 339. ";


//  Id pregunta: 345 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  La t&eacute;cnica de direcci&oacute;n en la etapa de iniciaci&oacute;n es:";
 choices[17]= new Array();
 choices[17][0] = "Orientada a ventas";
 choices[17][1] = "Informal";
 choices[17][2] = "Orientada a los recursos";
 choices[17][3] = "Orientada al control";
 answers[17] = choices[17][1];
 units[17] = "22";
 comments[17] = "Id Pregunta: 345. ";


//  Id pregunta: 348 AÃ±o de creación de pregunta: 2009-01-01
 questions[18]= "19)  La transferencia internacional de datos de car&aacute;cter personal con destino a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable sin autorizaci&oacute;n del Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos salvo en los supuestos en los que conforme a la LOPD y sus disposiciones de desarrollo dicha autorizaci&oacute;n no resulta necesaria, es una infracci&oacute;n:";
 choices[18]= new Array();
 choices[18][0] = "Leve";
 choices[18][1] = "Grave";
 choices[18][2] = "Muy grave ";
 choices[18][3] = "No es infracci&oacute;n";
 answers[18] = choices[18][2];
 units[18] = "29";
 comments[18] = "Id Pregunta: 348. ";


//  Id pregunta: 364 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Los 'controles de seguridad de datos' aseguran que los ficheros de datos en discos o cintas no est&aacute;n sujetos a:";
 choices[19]= new Array();
 choices[19][0] = "Cambio autorizado";
 choices[19][1] = "Cambio no autorizado";
 choices[19][2] = "Destrucci&oacute;n autorizada";
 choices[19][3] = "Obsolescencia no autorizada";
 answers[19] = choices[19][1];
 units[19] = "32";
 comments[19] = "Id Pregunta: 364. ";


//  Id pregunta: 367 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Los dominios de c&oacute;digo de pa&iacute;s en Internet est&aacute;n establecidos en la norma ISO:";
 choices[20]= new Array();
 choices[20][0] = "9735";
 choices[20][1] = "9075";
 choices[20][2] = "3166";
 choices[20][3] = "8422";
 answers[20] = choices[20][2];
 units[20] = "42";
 comments[20] = "Id Pregunta: 367. ";


//  Id pregunta: 368 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Los est&aacute;ndares en la industria y la tecnolog&iacute;a deben ser producidos:";
 choices[21]= new Array();
 choices[21][0] = "Siempre, en todos los casos, para evitar monopolios";
 choices[21][1] = "Cuando la tecnolog&iacute;a est&eacute; madura pero a&uacute;n no hay inversiones en implementaciones propietarias, para beneficiar tanto a usuarios como a la industria";
 choices[21][2] = "Antes de que madure la tecnolog&iacute;a, para contribuir a una madurez consensuada";
 choices[21][3] = "Nunca, ya que pone en desventaja a aquellos que comenzaron a investigar en dicha tecnolog&iacute;a";
 answers[21] = choices[21][1];
 units[21] = "42";
 comments[21] = "Id Pregunta: 368. ";


//  Id pregunta: 373 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Los mecanismos de salvaguarda, de acuerdo a MAGERIT son:";
 choices[22]= new Array();
 choices[22][0] = "Un dispositivo l&oacute;gico que reduce el riesgo";
 choices[22][1] = "Un dispositivo f&iacute;sico que reduce el riesgo";
 choices[22][2] = "Aquellos que operan de forma preventiva sobre la vulnerabilidad";
 choices[22][3] = "Todas las respuestas anteriores son correctas";
 answers[22] = choices[22][3];
 units[22] = "33";
 comments[22] = "Id Pregunta: 373. ";


//  Id pregunta: 401 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Respecto a la LOPD, no es cierto que:";
 choices[23]= new Array();
 choices[23][0] = "se refiere a tratamiento de datos personales automatizados o no";
 choices[23][1] = "hay medidas de nivel b&aacute;sico, medio, alto y muy alto";
 choices[23][2] = "el cifrado y el mantenimiento de logs de acceso es necesario en el nivel alto";
 choices[23][3] = "debe informarse al ciudadano en la recogida de datos, tanto para formularios en papel como en web";
 answers[23] = choices[23][1];
 units[23] = "29";
 comments[23] = "Id Pregunta: 401. ";


//  Id pregunta: 411 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Respecto al modelo de Nolan:";
 choices[24]= new Array();
 choices[24][0] = "Fue criticado por Strassman al no contemplar la aparici&oacute;n de las bases de datos";
 choices[24][1] = "Seg&uacute;n su autor es un modelo de 4 etapas, posteriormente corregido a 5 etapas";
 choices[24][2] = "Las 2 anteriores";
 choices[24][3] = "Ninguna de las anteriores";
 answers[24] = choices[24][0];
 units[24] = "22";
 comments[24] = "Id Pregunta: 411. nolan";


//  Id pregunta: 444 AÃ±o de creación de pregunta: 2009-01-01
 questions[25]= "26)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y el RD 1720/2007, y en relaci&oacute;n con los ficheros de titularidad privada que contengan datos de car&aacute;cter personal:";
 choices[25]= new Array();
 choices[25][0] = "Los ficheros de datos de car&aacute;cter personal de titularidad privada ser&aacute;n notificados a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos por la persona o entidad privada que pretenda crearlos, con car&aacute;cter previo a su creaci&oacute;n";
 choices[25][1] = "La notificaci&oacute;n de un fichero de datos de car&aacute;cter personal es independiente del sistema de tratamiento empleado en su organizaci&oacute;n y del soporte o soportes empleados para el tratamiento de los datos";
 choices[25][2] = "Deber&aacute; notificarse a la Agencia de Protecci&oacute;n de Datos las variaciones que se produzcan con posterioridad a la notificaci&oacute;n de inscripci&oacute;n";
 choices[25][3] = "Todas las respuestas anteriores son correctas";
 answers[25] = choices[25][3];
 units[25] = "29";
 comments[25] = "Id Pregunta: 444. ";


//  Id pregunta: 445 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de Car&aacute;cter Personal:";
 choices[26]= new Array();
 choices[26][0] = "Las copias en formato electr&oacute;nico de las fuentes de acceso p&uacute;blico que se obtengan telem&aacute;ticamente, tendr&aacute;n validez indefinida";
 choices[26][1] = "En las fuentes accesibles al p&uacute;blico editadas en forma de libro o alg&uacute;n otro soporte f&iacute;sico, tal condici&oacute;n se perder&aacute; cuando se publique en formato electr&oacute;nico";
 choices[26][2] = "La ley 15/99 no regula las fuentes de acceso p&uacute;blico";
 choices[26][3] = "Los datos que figuren en las gu&iacute;as de servicios de telecomunicaciones disponibles al p&uacute;blico se regir&aacute;n por su normativa espec&iacute;fica";
 answers[26] = choices[26][3];
 units[26] = "29";
 comments[26] = "Id Pregunta: 445. ";


//  Id pregunta: 463 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Supongamos que en un proyecto representado mediante un diagrama PERT una de las actividades sufre un retraso con respecto a la duraci&oacute;n inicialmente programada En tal caso:";
 choices[27]= new Array();
 choices[27][0] = "Se incrementa la duraci&oacute;n del camino cr&iacute;tico";
 choices[27][1] = "El camino cr&iacute;tico seguir&aacute; siendo el mismo";
 choices[27][2] = "No se puede afirmar con seguridad que le suceder&aacute; al camino cr&iacute;tico";
 choices[27][3] = "La fecha de finalizaci&oacute;n prevista podr&aacute; mantenerse s&oacute;lo si otra actividad ve acortada su duraci&oacute;n";
 answers[27] = choices[27][2];
 units[27] = "28";
 comments[27] = "Id Pregunta: 463. ";


//  Id pregunta: 473 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Uno de las siguientes no entra dentro de las diversas modalidades de auditor&iacute;a:";
 choices[28]= new Array();
 choices[28][0] = "Correctiva";
 choices[28][1] = "Detectiva";
 choices[28][2] = "Preventiva";
 choices[28][3] = "Adaptativa";
 answers[28] = choices[28][3];
 units[28] = "31, 32, 33";
 comments[28] = "Id Pregunta: 473. ";


//  Id pregunta: 483 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Un plan de contingencia corresponde a:";
 choices[29]= new Array();
 choices[29][0] = "Evitar el riesgo de da&ntilde;os";
 choices[29][1] = "Minimizar los da&ntilde;os producidos";
 choices[29][2] = "Planificar las situaciones de emergencia";
 choices[29][3] = "Establecer medidas de recuperaci&oacute;n";
 answers[29] = choices[29][1];
 units[29] = "32";
 comments[29] = "Id Pregunta: 483. ";


//  Id pregunta: 547 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  A la hora de gestionar y resolver una incidencia en un CAU, se establecen los siguientes niveles de gesti&oacute;n:";
 choices[30]= new Array();
 choices[30][0] = "Tres niveles: nivel 1 (el propio CAU), nivel 2 (las dem&aacute;s &aacute;reas del Centro TIC) y nivel 3 (los proveedores externos y/o empresas de mantenimiento)";
 choices[30][1] = "Cuatro niveles: nivel 1 (las herramientas de diagn&oacute;stico y recuperaci&oacute;n del sistema o aplicaci&oacute;n), nivel 2 (el propio CAU), nivel 3 (las dem&aacute;s &aacute;reas del Centro TIC) y nivel 4 (los proveedores externos y/o empresas de mantenimiento)";
 choices[30][2] = "a y b son correctas";
 choices[30][3] = "a y b son incorrectas";
 answers[30] = choices[30][0];
 units[30] = "26";
 comments[30] = "Id Pregunta: 547. ";


//  Id pregunta: 553 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  Indique la respuesta falsa respecto a la protecci&oacute;n jur&iacute;dica de los programas de ordenador";
 choices[31]= new Array();
 choices[31][0] = "Los programas de ordenador est&aacute;n protegidos por la Ley de Propiedad Intelectual, que los incluye dentro de la categor&iacute;a de obras literarias.";
 choices[31][1] = "El RDL 1/1996 por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual dedica el T&iacute;tulo VII de su Libro I a la protecci&oacute;n de los programas de ordenador.";
 choices[31][2] = "Los derechos sobre los programas de ordenador, as&iacute; como sobre sus sucesivas versiones y los programas derivados, deber&aacute;n ser objeto de inscripci&oacute;n en el Registro de la Propiedad Intelectual.";
 choices[31][3] = "No estar&aacute;n protegidos mediante los derechos de autor las ideas y principios en los que se basan cualquiera de los elementos de un programa de ordenador, incluidos los que sirven de fundamento a sus interfaces.";
 answers[31] = choices[31][2];
 units[31] = "36";
 comments[31] = "Id Pregunta: 553. ";


//  Id pregunta: 560 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Cual de las siguientes opciones no es una ventaja de un sistema integrado";
 choices[32]= new Array();
 choices[32][0] = "Mayor eficiencia conjunta y una interrelaci&oacute;n m&aacute;s efectiva de actividades entre subsistemas.";
 choices[32][1] = "Incorporaci&oacute;n de h&aacute;bitos para compartir ampliamente los recursos, obteniendo beneficios potenciales, debidos aeconom&iacute;as de escala y especializaci&oacute;n.";
 choices[32][2] = "Posibilidad de abordar las decisiones desde la perspectiva del sistema com&uacute;n conjunto en vez de sobre una basesub&oacute;ptima que utilice solamente informaci&oacute;n y objetivos locales.";
 choices[32][3] = "Sistemas mas simples evitando riesgos a&ntilde;adidos";
 answers[32] = choices[32][3];
 units[32] = "21";
 comments[32] = "Id Pregunta: 560. ";


//  Id pregunta: 565 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  A qui&eacute;n se debe la &quot;Teor&iacute;a de Recursos y Capacidades&quot;";
 choices[33]= new Array();
 choices[33][0] = "Laurence Prusak";
 choices[33][1] = "Peter Drucker";
 choices[33][2] = "Davenport";
 choices[33][3] = "Ninguno de los anteriores";
 answers[33] = choices[33][3];
 units[33] = "22";
 comments[33] = "Id Pregunta: 565. ";


//  Id pregunta: 568 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  El t&eacute;rmino &quot;organizaci&oacute;n aprendiente&quot; se debe a:";
 choices[34]= new Array();
 choices[34][0] = "Peter Drucker";
 choices[34][1] = "Davenport";
 choices[34][2] = "C. Rami&oacute;";
 choices[34][3] = "Linda Applegate";
 answers[34] = choices[34][0];
 units[34] = "22";
 comments[34] = "Id Pregunta: 568. ";


//  Id pregunta: 569 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Qu&eacute; se entiende como conocimiento t&aacute;cito";
 choices[35]= new Array();
 choices[35][0] = "Es un tipo de conocimiento formalizado, necesario para realizar una correcta &quot;gesti&oacute;n del conocimiento&quot; en las organizaciones";
 choices[35][1] = "Es el conocimiento objetivo y racional que puede ser expresado en palabras, oraciones, n&uacute;meros o f&oacute;rmulas, en general independiente de contexto alguno";
 choices[35][2] = "Es conocimiento altamente personal y f&iacute;cilmente transferible o comunicable. ";
 choices[35][3] = "Es aquel que se encuentra en la mente de las personas producto de la experiencia, la sabidur&iacute;a, la creatividad";
 answers[35] = choices[35][3];
 units[35] = "22";
 comments[35] = "Id Pregunta: 569. ";


//  Id pregunta: 587 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Puede una incidencia pasar del nivel 1 al nivel 3 ";
 choices[36]= new Array();
 choices[36][0] = "No, siempre tiene que pasar por el nivel 2";
 choices[36][1] = "S&oacute;lo si no hay nadie disponible en el nivel 2";
 choices[36][2] = "En aquellos casos acordados en los tres niveles";
 choices[36][3] = "Siempre que as&iacute; lo consideren desde el nivel 1";
 answers[36] = choices[36][2];
 units[36] = "26";
 comments[36] = "Id Pregunta: 587. ";


//  Id pregunta: 601 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  &iquest;Se pueden tratar datos de fuentes accesibles al p&uacute;blico?";
 choices[37]= new Array();
 choices[37][0] = "Si, ya que as&iacute; lo establece la LOPD";
 choices[37][1] = "No, no est&aacute; permitido por la LOPD";
 choices[37][2] = "Si, cuando se publique el reglamento que lo desarrolle ";
 choices[37][3] = "No, ya que no es una fuente de recogida de datos";
 answers[37] = choices[37][0];
 units[37] = "29";
 comments[37] = "Id Pregunta: 601. ";


//  Id pregunta: 639 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Cu&aacute;l de las siguientes frases es cierta sobre las pautas de accesibilidad WAI en la versi&oacute;n WCAG 2.0:";
 choices[38]= new Array();
 choices[38][0] = "La Prioridad 1 es para los puntos de verificaci&oacute;n que el desarrollador debe satisfacer.";
 choices[38][1] = "Las pautas WAI son una especificaci&oacute;n de W3C, al igual que HTML, CSS, XML y SGML";
 choices[38][2] = "La Prioridad 3 el desarrollador puede satisfacerla; de lo contrario, algunas personas hallar&aacute;n dificultades para acceder a la informaci&oacute;n.";
 choices[38][3] = "El nivel de adecuaci&oacute;n &quot;Doble A&quot; (AA) incluye los puntos de verificaci&oacute;n de prioridad 1 y al menos uno de prioridad 2.";
 answers[38] = choices[38][2];
 units[38] = "39";
 comments[38] = "Id Pregunta: 639. ";


//  Id pregunta: 647 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Cu&aacute;l de las siguientes afirmaciones sobre AENOR es incorrecta:";
 choices[39]= new Array();
 choices[39][0] = "Mediante un Real Decreto AENOR fue reconocida como la &uacute;nica entidad aprobada para desarrollar las tareas de normalizaci&oacute;n y certificaci&oacute;n en nuestro pa&iacute;s.";
 choices[39][1] = "Las normas espa&ntilde;olas que genera AENOR se denominan Normas UNE.";
 choices[39][2] = "AENOR es miembro de pleno derecho, y representa a nuestro pa&iacute;s en los Organismos Internacionales, europeos y regionales de Normalizaci&oacute;n (ISO, IEC, CEN, CENELEC, ETSI, COPANT).";
 choices[39][3] = "AENOR est&aacute; acreditada por la Entidad Nacional de Acreditaci&oacute;n (ENAC) como la &uacute;nica entidad capaz de certificar ISO 9000 en Espa&ntilde;a.";
 answers[39] = choices[39][3];
 units[39] = "42";
 comments[39] = "Id Pregunta: 647. ";


//  Id pregunta: 656 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de un sistema DRM?";
 choices[40]= new Array();
 choices[40][0] = "Impide la descarga de contenido protegido";
 choices[40][1] = "Impide la copia de contenido protegido";
 choices[40][2] = "Garantiza la no modificaci&oacute;n del contenido protegido";
 choices[40][3] = "Se asegura de que el comprador ha pagado por el contenido";
 answers[40] = choices[40][0];
 units[40] = "37";
 comments[40] = "Id Pregunta: 656. ";


//  Id pregunta: 666 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  El est&aacute;ndar  de servicios de directorio recogido en la arquitectura Open Systems Interconnection, para la Interconexi&oacute;n de Sistemas Abiertos es";
 choices[41]= new Array();
 choices[41][0] = "X.600";
 choices[41][1] = "Open LDAP";
 choices[41][2] = "X.400";
 choices[41][3] = "X.500";
 answers[41] = choices[41][3];
 units[41] = "40";
 comments[41] = "Id Pregunta: 666. ";


//  Id pregunta: 668 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  En un fichero que contenga datos de car&aacute;cter personal con medidas de seguridad de nivel alto, &iquest;cu&aacute;l de las siguientes afirmaciones relativas al acceso a datos es incorrecta?";
 choices[42]= new Array();
 choices[42][0] = "De cada acceso se guardar&aacute;n, como m&iacute;nimo, la identificaci&oacute;n del usuario, la fecha y hora en que se realiz&oacute;, el fichero accedido, el tipo de acceso y el objeto del mismo y si ha sido autorizado o denegado";
 choices[42][1] = "El per&iacute;odo m&iacute;nimo de conservaci&oacute;n de los datos de acceso registrados ser&aacute; de dos a&ntilde;os";
 choices[42][2] = "En el caso de que el acceso a un fichero haya sido autorizado, ser&aacute; preciso guardar la informaci&oacute;n que permita identificar el registro accedido";
 choices[42][3] = "El responsable de seguridad competente se encargar&aacute; de revisar peri&oacute;dicamente la informaci&oacute;n de control registrada y elaborar&aacute; un informe de las revisiones realizadas y los problemas detectados al menos una vez al mes";
 answers[42] = choices[42][0];
 units[42] = "29";
 comments[42] = "Id Pregunta: 668. ";


//  Id pregunta: 4253 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Como parte de la legislaci&oacute;n y normativa espa&ntilde;ola para el impulso de la administraci&oacute;n electr&oacute;nica se incluye:";
 choices[43]= new Array();
 choices[43][0] = "La Ley 30/1992 de 26 de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n, que dedica un art&iacute;culo al impulso del empleo y aplicaci&oacute;n de las t&eacute;cnicas y medios electr&oacute;nicos, inform&aacute;ticos y telem&aacute;ticos, por parte de la Administraci&oacute;n";
 choices[43][1] = "El Real Decreto 1553/2005 por el que se regula la expedici&oacute;n del Documento Nacional de Identidad y sus certificados de firma electr&oacute;nica";
 choices[43][2] = "La Ley 24/2001, de 27 de diciembre, de Medidas Fiscales, Administrativas y del Orden Social, que regula el establecimiento de registros telem&aacute;ticos y  notificaciones telem&aacute;ticas";
 choices[43][3] = "Todas las anteriores";
 answers[43] = choices[43][3];
 units[43] = "30";
 comments[43] = "Id Pregunta: 4253. NULL";


//  Id pregunta: 4322 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre PostScript y el formato PDF no es correcta?";
 choices[44]= new Array();
 choices[44][0] = "PostScript es un lenguaje de programaci&oacute;n, y PDF no";
 choices[44][1] = "Tanto PostScript como PDF comparten el mismo Modelo de Imagen, describiendo las p&aacute;ginas mediante los mismos mecanismos";
 choices[44][2] = "Tanto en PostScript como en PDF es posible definir bucles.";
 choices[44][3] = "PostScript es interpretado y ejecutado. PDF es interpretado, pero no ejecutado en sentido estricto.";
 answers[44] = choices[44][2];
 units[44] = "40";
 comments[44] = "Id Pregunta: 4322. ";


//  Id pregunta: 4442 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Dentro de las t&eacute;cnicas de planificaci&oacute;n de proyectos, podr&iacute;amos decir que una actividad es cr&iacute;tica si:";
 choices[45]= new Array();
 choices[45][0] = "No se puede cambiar sus instantes de comienzo y finalizaci&oacute;n sin modificar Ia duraci&oacute;n total del proyecto.";
 choices[45][1] = "Es la m&aacute;s corta del proyecto.";
 choices[45][2] = "Indica el fin de Ia fase de verificaci&oacute;n y el inicio de Ia fase de validaci&oacute;n.";
 choices[45][3] = "Requiere el mayor n&uacute;mero de recursos humanos para ser realizada.";
 answers[45] = choices[45][0];
 units[45] = "27";
 comments[45] = "Id Pregunta: 4442. Castilla la mancha 06";


//  Id pregunta: 4696 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Qu&eacute; no es un objetivo de un Sistema de Informaci&oacute;n?";
 choices[46]= new Array();
 choices[46][0] = "Automatizaci&oacute;n de procesos operativos";
 choices[46][1] = "Proporcionar informaci&oacute;n que sirva de apoyo al proceso de toma de decisiones.";
 choices[46][2] = "Lograr ventajas competitivas en su adquisici&oacute;n";
 choices[46][3] = "Minimizar el costo de adquisici&oacute;n, procesamiento y uso de la informaci&oacute;n";
 answers[46] = choices[46][2];
 units[46] = "21";
 comments[46] = "Id Pregunta: 4696. Examen 2006 JCYL";


//  Id pregunta: 4776 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  La Ley Org&aacute;nica 15/1999 que regula la Protecci&oacute;n de Datos de Car&aacute;cter Personal, ser&aacute; de aplicaci&oacute;n a los datos de car&aacute;cter personal registrados en soporte f&iacute;sico, que los haga susceptibles de tratamiento, y a toda modalidad de uso posterior de estos datos por";
 choices[47]= new Array();
 choices[47][0] = "El sector p&uacute;blico exclusivamente";
 choices[47][1] = "El sector privado exclusivamente";
 choices[47][2] = "Los sectores p&uacute;blico y privado";
 choices[47][3] = "El sector privado y, en situaciones muy limitadas, afecta tambi&eacute;n al sector p&uacute;blico";
 answers[47] = choices[47][2];
 units[47] = "29";
 comments[47] = "Id Pregunta: 4776. ";


//  Id pregunta: 5104 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  En un sistema de informaci&oacute;n, los informes espec&iacute;ficos que no se hab&iacute;an pedido anteriormente y que los directivos necesitan con rapidez para resolver un problema muy concreto ser&aacute;n para:";
 choices[48]= new Array();
 choices[48][0] = "Un nivel operativo";
 choices[48][1] = "Un nivel t&aacute;ctico";
 choices[48][2] = "Un nivel estrat&eacute;gico";
 choices[48][3] = "Un nivel transaccional";
 answers[48] = choices[48][1];
 units[48] = "22";
 comments[48] = "Id Pregunta: 5104. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5112 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Seg&uacute;n la LOPD, la persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que decida sobre la finalidad, contenido y uso del tratamiento es:";
 choices[49]= new Array();
 choices[49][0] = "Encargado del tratamiento.";
 choices[49][1] = "Afectado o interesado.";
 choices[49][2] = "Cesionario de datos.";
 choices[49][3] = "Responsable del fichero.";
 answers[49] = choices[49][3];
 units[49] = "29";
 comments[49] = "Id Pregunta: 5112. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5271 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  El RD 1720/2007 deroga ..";
 choices[50]= new Array();
 choices[50][0] = "RD 994/1999";
 choices[50][1] = "RD 263/1996";
 choices[50][2] = "RD 1332/1994";
 choices[50][3] = "a y c";
 answers[50] = choices[50][3];
 units[50] = "29";
 comments[50] = "Id Pregunta: 5271. ";


//  Id pregunta: 5423 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;A qu&eacute; se refiere EFFORTS?";
 choices[51]= new Array();
 choices[51][0] = "Proyecto dirigido a las administraciones europeas, cuyo objetivo es la mejora de su eficiencia mediante la adopci&oacute;n de nuevas tecnolog&iacute;as";
 choices[51][1] = "Proyecto europeo para la extensi&oacute;n de la red de banda ancha";
 choices[51][2] = "Proyecto europeo para aunar pol&iacute;ticas de contrataci&oacute;n de personal";
 choices[51][3] = "Proyecto europeo para aumentar la eficiencia en el uso de las computadoras en el &aacute;mbito de las administraciones p&uacute;blicas europeas";
 answers[51] = choices[51][3];
 units[51] = "41";
 comments[51] = "Id Pregunta: 5423. Castilla y Le&oacute;n";


//  Id pregunta: 5589 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;Qu&eacute; permite la Plataforma de Contrataci&oacute;n del Sector P&uacute;blico, seg&uacute;n el RD Legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[52]= new Array();
 choices[52][0] = "Permite a los empresarios elaborar las ofertas, para enviarlas al &oacute;rgano de contrataci&oacute;n";
 choices[52][1] = "Permite al estado controlar el conjunto de contratos que est&aacute;n actualmente en curso";
 choices[52][2] = "Es una base de datos en la que se incluye toda la informaci&oacute;n sobre contratos celebrados con la administraci&oacute;n a lo largo de la historia";
 choices[52][3] = "Permite a los &oacute;rganos de contrataci&oacute;n dar publicidad a sus convocatorias y resultados a trav&eacute;s de internet";
 answers[52] = choices[52][3];
 units[52] = "41";
 comments[52] = "Id Pregunta: 5589. ";


//  Id pregunta: 5801 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica depende de:";
 choices[53]= new Array();
 choices[53][0] = "La Conferencia Sectorial de Administraci&oacute;n P&uacute;blica.";
 choices[53][1] = "La Comisi&oacute;n Permanente del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 choices[53][2] = "El Director General para el impulso de la Administraci&oacute;n electr&oacute;nica.";
 choices[53][3] = "Presidencia del Gobierno.";
 answers[53] = choices[53][0];
 units[53] = "30";
 comments[53] = "Id Pregunta: 5801. MAP 2008 A2";


//  Id pregunta: 5815 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes procedimientos de adjudicaci&oacute;n NO se contempla en el RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico?";
 choices[54]= new Array();
 choices[54][0] = "Negociado";
 choices[54][1] = "Abierto";
 choices[54][2] = "Restringido";
 choices[54][3] = "Concurso";
 answers[54] = choices[54][3];
 units[54] = "41";
 comments[54] = "Id Pregunta: 5815. El concurso no es un procedimiento de adjudicaci&oacute;n.";


//  Id pregunta: 5835 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  Las caracter&iacute;sticas del m&eacute;todo Delphi son";
 choices[55]= new Array();
 choices[55][0] = "Confidencialidad, integridad del grupo y disponibilidad";
 choices[55][1] = "Anonimato, realimentaci&oacute;n controlada y respuesta del grupo de forma estad&iacute;stica";
 choices[55][2] = "Criticidad, autenticaci&oacute;n del grupo y consistencia";
 choices[55][3] = "Convergencia, coherencia del grupo y salvaguarda";
 answers[55] = choices[55][1];
 units[55] = "34";
 comments[55] = "Id Pregunta: 5835. MAP 2008 A1";


//  Id pregunta: 5856 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  El JTC-1 es un comit&eacute; t&eacute;cnico conjunto de normalizaci&oacute;n en &aacute;mbito de las TIC formado por:";
 choices[56]= new Array();
 choices[56][0] = "CEN y CENELEC";
 choices[56][1] = "ISO e IEC";
 choices[56][2] = "CEN y ETSI";
 choices[56][3] = "ISO y CIE";
 answers[56] = choices[56][1];
 units[56] = "42";
 comments[56] = "Id Pregunta: 5856. Pregunta 36";


//  Id pregunta: 5960 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  La adquisici&oacute;n de un programa de ordenador a medida se considera un contrato de:";
 choices[57]= new Array();
 choices[57][0] = "Obras";
 choices[57][1] = "Gesti&oacute;n de servicios p&uacute;blicos";
 choices[57][2] = "Servicios";
 choices[57][3] = "Suministros";
 answers[57] = choices[57][2];
 units[57] = "41";
 comments[57] = "Id Pregunta: 5960. Castilla La Mancha 2009";


//  Id pregunta: 5968 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  En MAGERIT &iquest;cu&aacute;l de las siguientes opciones NO es cierta?";
 choices[58]= new Array();
 choices[58][0] = "Riesgo es la posibilidad de que suceda un da&ntilde;o o perjuicio";
 choices[58][1] = "Impacto es el evento que puede desencadenar un incidente en la organizaci&oacute;n";
 choices[58][2] = "Existen tres submodelos: elementos, eventos y procesos";
 choices[58][3] = "La informaci&oacute;n es un activo";
 answers[58] = choices[58][1];
 units[58] = "33";
 comments[58] = "Id Pregunta: 5968. Castilla La Mancha 2009";


//  Id pregunta: 6089 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  NO corresponde actualmente a una infraestructura o servicio com&uacute;n de la Administraci&oacute;n General del Estado:";
 choices[59]= new Array();
 choices[59][0] = "El servicio de verificaci&oacute;n de datos de identidad o residencia.";
 choices[59][1] = "La pasarela de pagos telem&aacute;ticos.";
 choices[59][2] = "La recepci&oacute;n de facturas electr&oacute;nicas.";
 choices[59][3] = "Todas las anteriores corresponden a infraestructuras o servicio comunes de la Administraci&oacute;n General del Estado";
 answers[59] = choices[59][3];
 units[59] = "44";
 comments[59] = "Id Pregunta: 6089. TIC A 2009. Modificada 2014";


//  Id pregunta: 6135 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Los documentos denominados &quot;Pautas de Accesibilidad al Contenido en la Web&quot; (WCAG por sus siglas en ingl&eacute;s) explican c&oacute;mo hacer que el contenido web sea accesible para personas con discapacidad. Indicar cu&aacute;l de las siguientes afirmaciones es FALSA en relaci&oacute;n con estos documentos:";
 choices[60]= new Array();
 choices[60][0] = "Las pautas WCAG est&aacute;n pensadas principalmente para desarrolladores.";
 choices[60][1] = "Las pautas WCAG 2.0 se organizan en 4 principios b&aacute;sicos: perceptible, operable, comprensible y robusto.";
 choices[60][2] = "La &uacute;ltima versi&oacute;n documentada y reconocida de las pautas WCAG es la 3.0.";
 choices[60][3] = "Una diferencia entre las pautas WCAG 1.0 y las pautas WCAG 2.0 es que estas &uacute;ltimas son aplicables a una gama m&aacute;s amplia de tecnolog&iacute;as de contenido web.";
 answers[60] = choices[60][2];
 units[60] = "39";
 comments[60] = "Id Pregunta: 6135. TIC A 2009";


//  Id pregunta: 6188 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  El Esquema Nacional de Seguridad establece que los sistemas han de ser objeto de una auditor&iacute;a regular ordinaria al menos";
 choices[61]= new Array();
 choices[61][0] = "Cada 6 meses";
 choices[61][1] = "Cada a&ntilde;o";
 choices[61][2] = "Cada 2 a&ntilde;os";
 choices[61][3] = "El Esquema Nacional de Seguridad no especifica nada respecto a auditor&iacute;as";
 answers[61] = choices[61][2];
 units[61] = "43";
 comments[61] = "Id Pregunta: 6188. Art&iacute;culo 34. ";


//  Id pregunta: 6189 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  El Esquema Nacional de Interoperabilidad establece que los sistemas han de ser objeto de una auditor&iacute;a regular ordinaria al menos";
 choices[62]= new Array();
 choices[62][0] = "Cada 6 meses";
 choices[62][1] = "Cada a&ntilde;o";
 choices[62][2] = "Cada 2 a&ntilde;os";
 choices[62][3] = "El Esquema Nacional de Interoperabilidad no especifica nada respecto a auditor&iacute;as";
 answers[62] = choices[62][3];
 units[62] = "43";
 comments[62] = "Id Pregunta: 6189. NULL";


//  Id pregunta: 6260 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Seg&uacute;n la ISACA, una &ldquo;auditor&iacute;a de sistemas&rdquo; se puede definir como:";
 choices[63]= new Array();
 choices[63][0] = "Auditor&iacute;a que abarca la revisi&oacute;n y evaluaci&oacute;n de todos los aspectos de los sistemas autom&aacute;ticos de procesamiento de la informaci&oacute;n (o una parte de ellos), incluidos los procedimientos no autom&aacute;ticos relacionados con ellos y las interfaces correspondientes.";
 choices[63][1] = "Conjunto de actividades, t&eacute;cnicas, procedimientos y herramientas que nos permiten el control y mejora de los procesos de la organizaci&oacute;n en el campo de los sistemas de informaci&oacute;n.";
 choices[63][2] = "ISACA no ha dado una definici&oacute;n de Auditor&iacute;a porque es una organizaci&oacute;n sin &aacute;nimo de lucro que centra su actividad en la seguridad de los sistemas de informaci&oacute;n.";
 choices[63][3] = "La auditor&iacute;a que centra su actividad sobre los sistemas de una organizaci&oacute;n, incluyendo los sistemas el&eacute;ctricos, electr&oacute;nicos e inform&aacute;ticos, aplicando en los controles la normativa europea dictada por los organismos: CEN, CENELEC, EIS y ETSI.";
 answers[63] = choices[63][0];
 units[63] = "31";
 comments[63] = "Id Pregunta: 6260. ";


//  Id pregunta: 6400 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  El &oacute;rgano competente para la expedici&oacute;n del DNIe es:";
 choices[64]= new Array();
 choices[64][0] = "Ministerio de Defensa";
 choices[64][1] = "Ministerio del Interior";
 choices[64][2] = "Ministerio de Presidencia";
 choices[64][3] = "Secretaria de Estado de Funci&oacute;n P&uacute;blica";
 answers[64] = choices[64][1];
 units[64] = "30";
 comments[64] = "Id Pregunta: 6400. RD 1553/2005, art&iacute;culo 3";


//  Id pregunta: 6443 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  La posibilidad de que las aplicaciones software puedan funcionar en m&aacute;quinas de distintos fabricantes y arquitecturas se denomina:";
 choices[65]= new Array();
 choices[65][0] = "Adaptabilidad";
 choices[65][1] = "Portabilidad";
 choices[65][2] = "Interoperabilidad";
 choices[65][3] = "Escalabilidad";
 answers[65] = choices[65][1];
 units[65] = "40";
 comments[65] = "Id Pregunta: 6443. Castilla La Mancha 2009";


//  Id pregunta: 7311 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  La Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos (LAECSP) regula la &ldquo;Cooperaci&oacute;n entre administraciones para el impulso de la administraci&oacute;n electr&oacute;nica&rdquo; en el:";
 choices[66]= new Array();
 choices[66][0] = "T&iacute;tulo I";
 choices[66][1] = "T&iacute;tulo II";
 choices[66][2] = "T&iacute;tulo III";
 choices[66][3] = "T&iacute;tulo IV";
 answers[66] = choices[66][3];
 units[66] = "44";
 comments[66] = "Id Pregunta: 7311. NULL";


//  Id pregunta: 7313 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Se&ntilde;ala cual de las siguientes afirmaciones sobre la Red SARA es incorrecta:";
 choices[67]= new Array();
 choices[67][0] = "Es una red privada de comunicaciones que permite transferencias seguras entre las Administraciones P&uacute;blicas";
 choices[67][1] = "La Red permite la interconexi&oacute;n de los Departamentos ministeriales, las Comunidades Aut&oacute;nomas, los Entes Locales y otros organismos p&uacute;blicos espa&ntilde;oles";
 choices[67][2] = "Contiene un enlace con la red transeuropea sTESTA";
 choices[67][3] = "Est&aacute; definida en el art&iacute;culo 31 de la Ley General de Telecomunicaciones";
 answers[67] = choices[67][3];
 units[67] = "44";
 comments[67] = "Id Pregunta: 7313. NULL";


//  Id pregunta: 7355 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Es un m&eacute;todo est&aacute;tico de an&aacute;lisis:";
 choices[68]= new Array();
 choices[68][0] = "Valor Actual Neto";
 choices[68][1] = "Tasa Interna de Retorno";
 choices[68][2] = "Pay-Back";
 choices[68][3] = "Delphi";
 answers[68] = choices[68][2];
 units[68] = "38";
 comments[68] = "Id Pregunta: 7355. NULL";


//  Id pregunta: 8431 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes programas es la continuaci&oacute;n del programa IDABC finalizado en diciembre de 2009?";
 choices[69]= new Array();
 choices[69][0] = "AIF";
 choices[69][1] = "IDA";
 choices[69][2] = "ISA";
 choices[69][3] = "IMA";
 answers[69] = choices[69][2];
 units[69] = "30";
 comments[69] = "Id Pregunta: 8431. ";


//  Id pregunta: 8512 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;C&oacute;mo se conoce a la disciplina en la que se estudian y aplican t&eacute;cnicas que permiten el ocultamiento de informaci&oacute;n o archivos, dentro de otros, llamados portadores, de modo que NO se perciba su existencia? ";
 choices[70]= new Array();
 choices[70][0] = "Esteganograf&iacute;a. ";
 choices[70][1] = "Criptograf&iacute;a. ";
 choices[70][2] = "Criptoan&aacute;lisis. ";
 choices[70][3] = "Estegan&aacute;lisis. ";
 answers[70] = choices[70][0];
 units[70] = "37";
 comments[70] = "Id Pregunta: 8512. Examen TIC A2 2010";


//  Id pregunta: 8751 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  El Real Decreto 3/2010, de 8 de enero, regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica. En el mismo, la seguridad se entender&aacute; como:";
 choices[71]= new Array();
 choices[71][0] = "Un proceso espec&iacute;ficamente tecnol&oacute;gico, contemplando exclusivamente elementos t&eacute;cnicos";
 choices[71][1] = "Un proceso integral te&oacute;rico que comprende &uacute;nicamente tas medidas de prevenci&oacute;n y detecci&oacute;n de amenazas, quedando fuera del &aacute;mbito del ENS las de correcci&oacute;n, a implantar particularmente en cada caso.";
 choices[71][2] = "Un proceso espec&iacute;ficamente tecnol&oacute;gico, que comprende &uacute;nicamente las medidas concretas de detecci&oacute;n y correcci&oacute;n de amenazas, quedando fuera del &aacute;mbito del ENS las de prevenci&oacute;n, como propias de cada caso particular";
 choices[71][3] = "Un proceso integral constituido por elementos t&eacute;cnicos, humanos, materiales y organizativos";
 answers[71] = choices[71][3];
 units[71] = "43";
 comments[71] = "Id Pregunta: 8751. Examen TIC A2 2010 interna";


//  Id pregunta: 8902 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;les de los siguientes tipos de ficheros est&aacute;n amparados por la Ley Org&aacute;nica 15/1999, de Protecci&oacute;n de Datos de Car&aacute;cter Personal?:";
 choices[72]= new Array();
 choices[72][0] = "Los ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas.";
 choices[72][1] = "El fichero de clientes de una empresa de telecomunicaciones que da servicio de telefon&iacute;a y acceso a Internet.";
 choices[72][2] = "Los ficheros mantenidos por personas f&iacute;sicas a t&iacute;tulo exclusivamente personal o dom&eacute;stico.";
 choices[72][3] = "Ninguno de los anteriores";
 answers[72] = choices[72][1];
 units[72] = "29";
 comments[72] = "Id Pregunta: 8902. Operador Ayto. Madrid 2010";


//  Id pregunta: 8944 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes no es una dimensi&oacute;n de la seguridad judicial electr&oacute;nica de acuerdo a la ley 18/2011?";
 choices[73]= new Array();
 choices[73][0] = "Conservaci&oacute;n";
 choices[73][1] = "Confidencialidad";
 choices[73][2] = "Trazabilidad";
 choices[73][3] = "Todas las anteriores lo son";
 answers[73] = choices[73][3];
 units[73] = "43";
 comments[73] = "Id Pregunta: 8944. ";


//  Id pregunta: 9312 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  El conjunto de las reglas generales que desarrollan las pol&iacute;ticas y que son de obligada aplicaci&oacute;n se recogen en";
 choices[74]= new Array();
 choices[74][0] = "Normativas";
 choices[74][1] = "Procedimientos";
 choices[74][2] = "Instrucciones";
 choices[74][3] = "Declaraciones de conformidad";
 answers[74] = choices[74][0];
 units[74] = "31";
 comments[74] = "Id Pregunta: 9312. ";


//  Id pregunta: 9544 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  Los certificados incorporados al DNI-e:";
 choices[75]= new Array();
 choices[75][0] = "Son dos: de autenticaci&oacute;n y de firma del ciudadano.";
 choices[75][1] = "Los usuarios finales pueden validarlos en la Direcci&oacute;n General de la Polic&iacute;a, que est&aacute; constituida como Autoridad de Validaci&oacute;n.";
 choices[75][2] = "Est&aacute;n basados en la recomendaci&oacute;n X. 509 v.3 sin extensi&oacute;n alguna.";
 choices[75][3] = "Est&aacute;n integrados en un chip certificado en el nivel de seguridad EAL4+ definido en la norma ISO/IEC 15408.";
 answers[75] = choices[75][3];
 units[75] = "30";
 comments[75] = "Id Pregunta: 9544. Examen TIC A1 2011 (Incluyen tambi&eacute;n certificado electr&oacute;nico de la autoridad emisora)";


//  Id pregunta: 9804 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Indique la opci&oacute;n INCORRECTA en relaci&oacute;n con el Esquema Nacional de Seguridad (ENS):";
 choices[76]= new Array();
 choices[76][0] = "Los sistemas de informaci&oacute;n a los que se refiere el ENS ser&aacute;n objeto de una auditor&iacute;a regular ordinaria, al menos cada dos a&ntilde;os, que verifique el cumplimiento de los requerimientos expuestos en el ENS. ";
 choices[76][1] = "Gesti&oacute;n de riesgos, funci&oacute;n diferenciada y reevaluaci&oacute;n peri&oacute;dica son 3 de los principios b&aacute;sicos que deber&aacute;n tenerse en cuenta en las decisiones en materia de seguridad";
 choices[76][2] = "El Instituto Nacional de las Tecnolog&iacute;as de la Informaci&oacute;n (INTECO), en el ejercicio de sus competencias, elaborar&aacute; y difundir&aacute; las correspondientes gu&iacute;as de la seguridad de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones. ";
 choices[76][3] = "Si a los 12 meses de la entrada en vigor del ENS hubiera circunstancias que impidan la plena aplicaci&oacute;n de lo exigido en el mismo, se dispondr&aacute; de un plan de adecuaci&oacute;n que marque los plazos de ejecuci&oacute;n, los cuales, en ning&uacute;n caso, ser&aacute;nsuperiores a 48 meses desde la entrada en vigor. ";
 answers[76] = choices[76][2];
 units[76] = "44";
 comments[76] = "Id Pregunta: 9804. NULL";


//  Id pregunta: 9875 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes categor&iacute;as de mantenimiento NO ha sido definida en la norma ISO/IEC 14764?";
 choices[77]= new Array();
 choices[77][0] = "preventivo.";
 choices[77][1] = "progresivo.";
 choices[77][2] = "adaptativo.";
 choices[77][3] = "perfectivo.";
 answers[77] = choices[77][1];
 units[77] = "26";
 comments[77] = "Id Pregunta: 9875. TIC A1, Examen 2013";


//  Id pregunta: 9942 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  El Real Decreto 695/2013 crea la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y de las Comunicaciones. &iquest;Cu&aacute;l es el rango de esta Direcci&oacute;n?";
 choices[78]= new Array();
 choices[78][0] = "Direcci&oacute;n General.";
 choices[78][1] = "Subdirecci&oacute;n General.";
 choices[78][2] = "Subsecretar&iacute;a.";
 choices[78][3] = "Secretar&iacute;a de Estado.";
 answers[78] = choices[78][2];
 units[78] = "44";
 comments[78] = "Id Pregunta: 9942. TIC A1, Examen 2013";


//  Id pregunta: 10009 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Los RFC de la IETF son";
 choices[79]= new Array();
 choices[79][0] = "peticiones de cambio (Request for Change) que proponen mejoras sobre protocolos en funcionamiento en Internet.";
 choices[79][1] = "notas t&eacute;cnicas que describen los protocolos utilizados en Internet.";
 choices[79][2] = "peticiones de comentarios a la comunidad de internautas sobre temas relacionados con Internet.";
 choices[79][3] = "las especificaciones formales de los protocolos para comunicaci&oacute;n remota (Remote Function Call).";
 answers[79] = choices[79][1];
 units[79] = "42";
 comments[79] = "Id Pregunta: 10009. ";


//  Id pregunta: 10261 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  En cuanto al registro de ficheros en el Registro General de Protecci&oacute;n de Datos";
 choices[80]= new Array();
 choices[80][0] = "S&oacute;lo es obligatorio en el caso de ficheros que contengan datos especialmente protegidos para ficheros de titularidad privada y en todo caso para los de titularidad p&uacute;blica";
 choices[80][1] = "S&oacute;lo es obligatorio en el caso de ficheros que contengan datos especialmente protegidos para ficheros de titularidad p&uacute;blica y en todo caso para los de titularidad privada";
 choices[80][2] = "Es obligatorio para todo fichero que contenga datos de car&aacute;cter personal";
 choices[80][3] = "No es obligatorio en ning&uacute;n caso";
 answers[80] = choices[80][2];
 units[80] = "29";
 comments[80] = "Id Pregunta: 10261. Art&iacute;culo 55.1 y 55.2 del RD 1720/2007";


//  Id pregunta: 10265 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  	Podr&aacute;n tratarse datos personales relativos al cumplimiento o incumplimiento de obligaciones dinerarias";
 choices[81]= new Array();
 choices[81][0] = "Desde el momento en que se produce el impago de la obligaci&oacute;n contraida y por tiempo indefinido";
 choices[81][1] = "Desde el momento en que se adquiere el compromiso de pago y por tiempo indefinido";
 choices[81][2] = "Desde el momento en que se produce el impago de la obligaci&oacute;n contraida siempre que no hayan transcurrido seis a&ntilde;os de dicho impago";
 choices[81][3] = "Desde el momento en que se adquiere el compromiso de pago siempre que no hayan transcurrido seis a&ntilde;os de la adquisici&oacute;n de la deuda";
 answers[81] = choices[81][2];
 units[81] = "29";
 comments[81] = "Id Pregunta: 10265. Art&iacute;culo 38.1 a) y b) del RD 1720/2007";


//  Id pregunta: 10581 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Son principios generales de la Ley 11/2007:";
 choices[82]= new Array();
 choices[82][0] = "Neutralidad tecnol&oacute;gica, accesibilidad y disponibilidad.";
 choices[82][1] = "Informaci&oacute;n, igualdad y legalidad.";
 choices[82][2] = "Calidad, conectividad y seguridad.";
 choices[82][3] = "Cooperaci&oacute;n, responsabilidad y transparencia.";
 answers[82] = choices[82][3];
 units[82] = "43";
 comments[82] = "Id Pregunta: 10581. Art&iacute;culo 4, Ley 11/2007.";


//  Id pregunta: 10584 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Marque la que no es una medida del Esquema Nacional de Interoperabilidad para la recuperaci&oacute;n y conservaci&oacute;n de documentos electr&oacute;nicos:";
 choices[83]= new Array();
 choices[83][0] = "La asociaci&oacute;n de metadatos m&iacute;nimos obligatorios.";
 choices[83][1] = "La documentaci&oacute;n de los procedimientos que garanticen la interoperabilidad a medio y largo plazo.";
 choices[83][2] = "La identificaci&oacute;n &uacute;nica e inequ&iacute;voca de cada documento.";
 choices[83][3] = "El establecimiento de un per&iacute;odo de conservaci&oacute;n de m&iacute;nimo cinco a&ntilde;os.";
 answers[83] = choices[83][3];
 units[83] = "43";
 comments[83] = "Id Pregunta: 10584. Art&iacute;culo 21.f, RD 4/2010.";


//  Id pregunta: 10704 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  En el intercambio de expedientes electr&oacute;nicos seg&uacute;n lo establecido en la NTI de documento electr&oacute;nico.";
 choices[84]= new Array();
 choices[84][0] = "Primero se env&iacute;a el esquemas XML para intercambio de expedientes electr&oacute;nicos y posteriormente los documentos.";
 choices[84][1] = "Primero se env&iacute;an los documentos y despu&eacute;s los esquemas XML para intercambio de expedientes electr&oacute;nicos.";
 choices[84][2] = "Es indiferente el orden de env&iacute;o.";
 choices[84][3] = "Se env&iacute;an &uacute;nicamente los documentos ya que los esquemas XML est&aacute;n contenidos en dichos documentos.";
 answers[84] = choices[84][0];
 units[84] = "43";
 comments[84] = "Id Pregunta: 10704. ";


//  Id pregunta: 10715 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Seg&uacute;n la NTI de Modelo de Datos para el Intercambio de asientos entre entidades registrales &iquest;En qu&eacute; segmento se situa el &quot;idenficador de fichero&quot;?";
 choices[85]= new Array();
 choices[85][0] = "De asunto";
 choices[85][1] = "De origen";
 choices[85][2] = "De destino";
 choices[85][3] = "De anexo";
 answers[85] = choices[85][3];
 units[85] = "43";
 comments[85] = "Id Pregunta: 10715. ";


//  Id pregunta: 10729 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Seg&uacute;n la NTI de requisitos de conexi&oacute;n a la red de comunicaciones de las Administraciones P&uacute;blicas espa&ntilde;olas &iquest;cual de los siguientes no es un tipo de Punto de Presencia (PdP) de la Red SARA?";
 choices[86]= new Array();
 choices[86][0] = "Centros externos de monitorizaci&oacute;n.";
 choices[86][1] = "Prestadores de servicios de certificaci&oacute;n.";
 choices[86][2] = "Otros: como son las Ventanillas &Uacute;nicas Empresariales.";
 choices[86][3] = "Todos los anteriores son tipos de PdP.";
 answers[86] = choices[86][3];
 units[86] = "43";
 comments[86] = "Id Pregunta: 10729. ";


//  Id pregunta: 10733 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Qu&eacute; Ley menciona en su pre&aacute;mbulo la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n?";
 choices[87]= new Array();
 choices[87][0] = "Ley 14/2007";
 choices[87][1] = "Ley 37/2007";
 choices[87][2] = "Ley 30/1992";
 choices[87][3] = "Ley 53/1999";
 answers[87] = choices[87][1];
 units[87] = "43";
 comments[87] = "Id Pregunta: 10733. ";


//  Id pregunta: 10747 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Qui&eacute;n preside las Comisiones Ministeriales de Administraci&oacute;n Digital?";
 choices[88]= new Array();
 choices[88][0] = "El Ministro";
 choices[88][1] = "El Secretario de Estado";
 choices[88][2] = "El Subsecretario";
 choices[88][3] = "El Director General";
 answers[88] = choices[88][2];
 units[88] = "24";
 comments[88] = "Id Pregunta: 10747. ";


//  Id pregunta: 10767 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;En qu&eacute; fecha se ha aprobado la Estrategia TIC de la AGE por el Consejo de Ministros?";
 choices[89]= new Array();
 choices[89][0] = "Septiembre de 2014";
 choices[89][1] = "Diciembre de 2014";
 choices[89][2] = "Agosto de 2015";
 choices[89][3] = "Octubre de 2015";
 answers[89] = choices[89][3];
 units[89] = "24";
 comments[89] = "Id Pregunta: 10767. ";


//  Id pregunta: 10779 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  La direcci&oacute;n electr&oacute;nica habilitada para la pr&aacute;ctica de notificaciones regulada en el Real Decreto 1671/2009, por el que se desarrolla parcialmente la Ley 11/2007, tendr&aacute; vigencia indefinida excepto cuando no se utilice para la pr&aacute;ctica de notificaciones por el transcurso de:";
 choices[90]= new Array();
 choices[90][0] = "36 meses.";
 choices[90][1] = "60 meses.";
 choices[90][2] = "30 meses.";
 choices[90][3] = "24 meses.";
 answers[90] = choices[90][0];
 units[90] = "43";
 comments[90] = "Id Pregunta: 10779. Examen GSI 2014";


//  Id pregunta: 11018 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;C&oacute;mo se llaman a las auditor&iacute;as especializadas en descubrir fraudes y delitos, en obtener evidencias v&aacute;lidas para su uso por las autoridades competente, policiales o judiciales?";
 choices[91]= new Array();
 choices[91][0] = "Auditor&iacute;as de regularidad";
 choices[91][1] = "Auditor&iacute;as operativas o de gesti&oacute;n";
 choices[91][2] = "Auditor&iacute;as forenses";
 choices[91][3] = "Auditor&iacute;as de los sistemas de informaci&oacute;n";
 answers[91] = choices[91][2];
 units[91] = "31";
 comments[91] = "Id Pregunta: 11018. ";


//  Id pregunta: 11198 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Qu&eacute; tasa de abandono escolar marca la Estrategia Europa 2020 para la Uni&oacute;n Europea?";
 choices[92]= new Array();
 choices[92][0] = "0.05";
 choices[92][1] = "0.01";
 choices[92][2] = "0.1";
 choices[92][3] = "0.2";
 answers[92] = choices[92][2];
 units[92] = "30";
 comments[92] = "Id Pregunta: 11198. ";


//  Id pregunta: 11208 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l es el porcentaje objetivo de personas que realicen compras online para 2015 seg&uacute;n la Agenda Digital Europea?";
 choices[93]= new Array();
 choices[93][0] = "0.2";
 choices[93][1] = "0.33";
 choices[93][2] = "0.5";
 choices[93][3] = "0.8";
 answers[93] = choices[93][2];
 units[93] = "30";
 comments[93] = "Id Pregunta: 11208. ";


//  Id pregunta: 11239 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  El &aacute;mbito subjetivo del texto refundido de la ley de contratos del sector p&uacute;blico:";
 choices[94]= new Array();
 choices[94][0] = "La ley aplica a la totalidad del sector p&uacute;blico todos sus articulos.";
 choices[94][1] = "Aquellos expedientes de contrataci&oacute;n incoados por las Administraciones P&uacute;blicas son de naturaleza administrativa.";
 choices[94][2] = "Todos los contratos de los Poderes Adjudicadores que no son Administraci&oacute;n P&uacute;blica sujetos a la directiva europea son considerados contratos SARA, independientemente de su cuant&iacute;a.";
 choices[94][3] = "Ninguna es verdadera.";
 answers[94] = choices[94][1];
 units[94] = "41";
 comments[94] = "Id Pregunta: 11239. ";


//  Id pregunta: 11484 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  El Derecho de Acceso a la Informaci&oacute;n P&uacute;blica, regulado en la Ley 19/2013 de Transparencia, acceso a la informaci&oacute;n p&uacute;blica y Buen Gobierno";
 choices[95]= new Array();
 choices[95][0] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 1 mes.";
 choices[95][1] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 30 d&iacute;as.";
 choices[95][2] = "Requiere pago de tasa p&uacute;blica, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 30 d&iacute;as.";
 choices[95][3] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 15 d&iacute;as.";
 answers[95] = choices[95][0];
 units[95] = "43";
 comments[95] = "Id Pregunta: 11484. NULL";


//  Id pregunta: 11749 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En los sistemas de identificaci&oacute;n de las Administraciones P&uacute;blicas.";
 choices[96]= new Array();
 choices[96][0] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un sello&nbsp; electr&oacute;nico basado en un certificado electr&oacute;nico avanzado";
 choices[96][1] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de una firma electr&oacute;nica basada en un certificado electr&oacute;nico reconocido o cualificado";
 choices[96][2] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un c&oacute;digo seguro de verificaci&oacute;n basado en un certificado electr&oacute;nico reconocido o cualificado";
 choices[96][3] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un sello&nbsp; electr&oacute;nico basado en un certificado electr&oacute;nico reconocido o cualificado";
 answers[96] = choices[96][3];
 units[96] = "43";
 comments[96] = "Id Pregunta: 11749. ";


//  Id pregunta: 11763 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Por qui&eacute;n est&aacute; presidida la Comisi&oacute;n Estrat&eacute;gica TIC?";
 choices[97]= new Array();
 choices[97][0] = "Ministro de Industria, Energ&iacute;a y Turismo";
 choices[97][1] = "Ministro de Fomento";
 choices[97][2] = "Ministro de Econom&iacute;a";
 choices[97][3] = "Ministro de Hacienda";
 answers[97] = choices[97][3];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11763. ";


//  Id pregunta: 11768 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l es la duraci&oacute;n m&aacute;xima que la ley permite a los acuerdos marco?";
 choices[98]= new Array();
 choices[98][0] = "2 a&ntilde;os";
 choices[98][1] = "1 a&ntilde;o";
 choices[98][2] = "4 a&ntilde;os";
 choices[98][3] = "3 a&ntilde;os";
 answers[98] = choices[98][2];
 units[98] = "41";
 comments[98] = "Id Pregunta: 11768. ";


//  Id pregunta: 11769 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  El contrato &quot;servicios consolidados de telecomunicaciones de la Administraci&oacute;n General del Estado, fase 1&quot;&hellip; Seleccione la verdadera:";
 choices[99]= new Array();
 choices[99][0] = "participan todos los Ministerios";
 choices[99][1] = "incluye tarifa plana para todos los servicios demandados&nbsp;";
 choices[99][2] = "supone un ahorro superior a los 124 millones de euros en 4 a&ntilde;os";
 choices[99][3] = "incluye todos los servicios de los anteriores contratos de sus participantes";
 answers[99] = choices[99][2];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11769. ";


