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

//  Id pregunta: 10011 Año de creación de pregunta: 2016
 questions[0]= "1)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[0]= new Array();
 choices[0][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[0][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[0][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[0][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[0] = choices[0][1];
 units[0] = "64";
 comments[0] = "Id Pregunta: 10011. AGE A1 2015";


//  Id pregunta: 10122 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[1]= new Array();
 choices[1][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[1][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[1][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[1][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[1] = choices[1][1];
 units[1] = "22";
 comments[1] = "Id Pregunta: 10122. ";


//  Id pregunta: 10633 Año de creación de pregunta: 2016
 questions[2]= "3)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[2]= new Array();
 choices[2][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[2][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[2][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[2][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[2] = choices[2][3];
 units[2] = "56";
 comments[2] = "Id Pregunta: 10633. Junta de Extremadura A1 2015";


//  Id pregunta: 10300 Año de creación de pregunta: 2016
 questions[3]= "4)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[3]= new Array();
 choices[3][0] = "La Comisi&oacute;n.";
 choices[3][1] = "El Consejo de Europa.";
 choices[3][2] = "El Consejo Europeo.";
 choices[3][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[3] = choices[3][3];
 units[3] = "5";
 comments[3] = "Id Pregunta: 10300. UNION EUROPEA";


//  Id pregunta: 10641 Año de creación de pregunta: 2016
 questions[4]= "5)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[4]= new Array();
 choices[4][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[4][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[4][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[4][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[4] = choices[4][1];
 units[4] = "58";
 comments[4] = "Id Pregunta: 10641. Junta de Extremadura A1 2015";


//  Id pregunta: 10288 Año de creación de pregunta: 2016
 questions[5]= "6)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[5]= new Array();
 choices[5][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[5][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[5][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[5][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[5] = choices[5][2];
 units[5] = "5";
 comments[5] = "Id Pregunta: 10288. UNION EUROPEA";


//  Id pregunta: 10179 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[6]= new Array();
 choices[6][0] = "Una ley orginaria.";
 choices[6][1] = "Una ley org&aacute;nica.";
 choices[6][2] = "Una ley de bases.";
 choices[6][3] = "Una ley de transferencia.";
 answers[6] = choices[6][1];
 units[6] = "1";
 comments[6] = "Id Pregunta: 10179. CONSTITUCION1978";


//  Id pregunta: 10055 Año de creación de pregunta: 2016
 questions[7]= "8)  WS-Security contiene especificaciones sobre:";
 choices[7]= new Array();
 choices[7][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[7][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[7][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[7][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[7] = choices[7][1];
 units[7] = "119";
 comments[7] = "Id Pregunta: 10055. AGE A1 2015";


//  Id pregunta: 10595 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[8]= new Array();
 choices[8][0] = "La CETIC";
 choices[8][1] = "Los Ministerios";
 choices[8][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[8][3] = "Ninguno de los anteriores";
 answers[8] = choices[8][1];
 units[8] = "19";
 comments[8] = "Id Pregunta: 10595. Estrategia TIC";


//  Id pregunta: 10617 Año de creación de pregunta: 2016
 questions[9]= "10)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[9]= new Array();
 choices[9][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[9][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[9][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[9][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[9] = choices[9][0];
 units[9] = "84";
 comments[9] = "Id Pregunta: 10617. Junta de Extremadura A1 2015";


//  Id pregunta: 10653 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[10]= new Array();
 choices[10][0] = "Neo4J ";
 choices[10][1] = "OrientDB ";
 choices[10][2] = "InfoGrid ";
 choices[10][3] = "SimpleDB";
 answers[10] = choices[10][3];
 units[10] = "73";
 comments[10] = "Id Pregunta: 10653. ";


//  Id pregunta: 10184 Año de creación de pregunta: 2016
 questions[11]= "12)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[11]= new Array();
 choices[11][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[11][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[11][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[11][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[11] = choices[11][2];
 units[11] = "1";
 comments[11] = "Id Pregunta: 10184. CONSTITUCION1978";


//  Id pregunta: 10448 Año de creación de pregunta: 2016
 questions[12]= "13)  La partida presupuestaria es equivalente a...";
 choices[12]= new Array();
 choices[12][0] = "El sujeto que realiza el gasto";
 choices[12][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[12][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[12][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[12] = choices[12][3];
 units[12] = "10";
 comments[12] = "Id Pregunta: 10448. PRESUPUESTOS GENERALES";


//  Id pregunta: 10296 Año de creación de pregunta: 2016
 questions[13]= "14)  Indique a qui&eacute;n corresponde la funci&oacute;n de adoptar las iniciativas de la programaci&oacute;n anual y plurianual de la Uni&oacute;n Europea con el fin de alcanzar acuerdos interinstitucionales:";
 choices[13]= new Array();
 choices[13][0] = "Al Consejo Europeo.";
 choices[13][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[13][2] = "A la Comisi&oacute;n Europea.";
 choices[13][3] = "Al Parlamento Europeo.";
 answers[13] = choices[13][2];
 units[13] = "5";
 comments[13] = "Id Pregunta: 10296. UNION EUROPEA";


//  Id pregunta: 10335 Año de creación de pregunta: 2016
 questions[14]= "15)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[14]= new Array();
 choices[14][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[14][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[14][2] = "Son incompatibles ambas actas de diputado.";
 choices[14][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[14] = choices[14][2];
 units[14] = "5";
 comments[14] = "Id Pregunta: 10335. UNION EUROPEA";


//  Id pregunta: 10502 Año de creación de pregunta: 2016
 questions[15]= "16)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[15]= new Array();
 choices[15][0] = "Principio de transparencia.";
 choices[15][1] = "Principio de cooperaci&oacute;n.";
 choices[15][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[15][3] = "Principio de lealtad institucional.";
 answers[15] = choices[15][1];
 units[15] = "10";
 comments[15] = "Id Pregunta: 10502. PRESUPUESTOS GENERALES";


//  Id pregunta: 10181 Año de creación de pregunta: 2016
 questions[16]= "17)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[16]= new Array();
 choices[16][0] = "l Consejo General del Poder Judicial";
 choices[16][1] = "El pleno de Tribunal Constitucional";
 choices[16][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[16][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[16] = choices[16][3];
 units[16] = "1";
 comments[16] = "Id Pregunta: 10181. CONSTITUCION1978";


//  Id pregunta: 10638 Año de creación de pregunta: 2016
 questions[17]= "18)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[17]= new Array();
 choices[17][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[17][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[17][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[17][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[17] = choices[17][3];
 units[17] = "57";
 comments[17] = "Id Pregunta: 10638. Junta de Extremadura A1 2015";


//  Id pregunta: 10475 Año de creación de pregunta: 2016
 questions[18]= "19)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[18]= new Array();
 choices[18][0] = "Anualmente.";
 choices[18][1] = "Ninguna de las respuestas es correcta.";
 choices[18][2] = "Trimestralmente.";
 choices[18][3] = "Semestralmente.";
 answers[18] = choices[18][0];
 units[18] = "10";
 comments[18] = "Id Pregunta: 10475. PRESUPUESTOS GENERALES";


//  Id pregunta: 10559 Año de creación de pregunta: 2016
 questions[19]= "20)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[19]= new Array();
 choices[19][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[19][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[19][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[19][3] = "Todos los anteriores";
 answers[19] = choices[19][3];
 units[19] = "19";
 comments[19] = "Id Pregunta: 10559. Agenda Digital";


//  Id pregunta: 10347 Año de creación de pregunta: 2016
 questions[20]= "21)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[20]= new Array();
 choices[20][0] = "18 miembros.";
 choices[20][1] = "Ninguna es correcta.";
 choices[20][2] = "22 miembros.";
 choices[20][3] = "21 miembros.";
 answers[20] = choices[20][1];
 units[20] = "5";
 comments[20] = "Id Pregunta: 10347. UNION EUROPEA";


//  Id pregunta: 10326 Año de creación de pregunta: 2016
 questions[21]= "22)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[21]= new Array();
 choices[21][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[21][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[21][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[21][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[21] = choices[21][3];
 units[21] = "5";
 comments[21] = "Id Pregunta: 10326. UNION EUROPEA";


//  Id pregunta: 10460 Año de creación de pregunta: 2016
 questions[22]= "23)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[22]= new Array();
 choices[22][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[22][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[22][2] = "La normativa reguladora de cada derecho.";
 choices[22][3] = "Ley 50/1997, del Gobierno.";
 answers[22] = choices[22][2];
 units[22] = "10";
 comments[22] = "Id Pregunta: 10460. PRESUPUESTOS GENERALES";


//  Id pregunta: 10453 Año de creación de pregunta: 2016
 questions[23]= "24)  En las Administraciones P&uacute;blicas...";
 choices[23]= new Array();
 choices[23][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[23][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[23][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[23][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[23] = choices[23][0];
 units[23] = "10";
 comments[23] = "Id Pregunta: 10453. PRESUPUESTOS GENERALES";


//  Id pregunta: 10405 Año de creación de pregunta: 2016
 questions[24]= "25)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[24]= new Array();
 choices[24][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[24][1] = "Directiva 2004/113/CE del Consejo.";
 choices[24][2] = "Todas son correctas.";
 choices[24][3] = "Todas son falsas.";
 answers[24] = choices[24][2];
 units[24] = "14";
 comments[24] = "Id Pregunta: 10405. POLITICAS DE IGUALDAD";


//  Id pregunta: 10118 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[25]= new Array();
 choices[25][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[25][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[25][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[25][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[25] = choices[25][2];
 units[25] = "15";
 comments[25] = "Id Pregunta: 10118. ";


//  Id pregunta: 10205 Año de creación de pregunta: 2016
 questions[26]= "27)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[26]= new Array();
 choices[26][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[26][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[26][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[26][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[26] = choices[26][1];
 units[26] = "1";
 comments[26] = "Id Pregunta: 10205. CONSTITUCION1978";


//  Id pregunta: 10263 Año de creación de pregunta: 2016
 questions[27]= "28)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[27]= new Array();
 choices[27][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[27][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[27][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[27][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[27] = choices[27][1];
 units[27] = "1";
 comments[27] = "Id Pregunta: 10263. CONSTITUCION1978";


//  Id pregunta: 10543 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[28]= new Array();
 choices[28][0] = "ISO/IEC 31000";
 choices[28][1] = "ISO/IEC 14000";
 choices[28][2] = "ISO/IEC 38500";
 choices[28][3] = "ISO/IEC 18000";
 answers[28] = choices[28][2];
 units[28] = "26";
 comments[28] = "Id Pregunta: 10543. Gobernanza TIC";


//  Id pregunta: 10571 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[29]= new Array();
 choices[29][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[29][1] = "Entrada en la Uni&oacute;n Europea";
 choices[29][2] = "Pactos de la Moncloa";
 choices[29][3] = "Ingreso en la ONU";
 answers[29] = choices[29][3];
 units[29] = "12";
 comments[29] = "Id Pregunta: 10571. Modelo econ&oacute;mico";


//  Id pregunta: 10575 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[30]= new Array();
 choices[30][0] = "MySQL";
 choices[30][1] = "SQLite";
 choices[30][2] = "Zope";
 choices[30][3] = "MariaDB";
 answers[30] = choices[30][2];
 units[30] = "61";
 comments[30] = "Id Pregunta: 10575. Tema 61. TAI 2016.";


//  Id pregunta: 10047 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[31]= new Array();
 choices[31][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[31][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[31][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[31][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[31] = choices[31][3];
 units[31] = "78";
 comments[31] = "Id Pregunta: 10047. AGE A1 2015";


//  Id pregunta: 10610 Año de creación de pregunta: 2016
 questions[32]= "33)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[32]= new Array();
 choices[32][0] = "GROUP BY.";
 choices[32][1] = "COUNT.";
 choices[32][2] = "WHERE.";
 choices[32][3] = "DISTINCT.";
 answers[32] = choices[32][0];
 units[32] = "60";
 comments[32] = "Id Pregunta: 10610. Junta de Extremadura A1 2015";


//  Id pregunta: 10151 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[33]= new Array();
 choices[33][0] = "las personas jur&iacute;dicas ";
 choices[33][1] = "las entidades con personalidad jur&iacute;dica";
 choices[33][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[33][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[33] = choices[33][1];
 units[33] = "7";
 comments[33] = "Id Pregunta: 10151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 10642 Año de creación de pregunta: 2016
 questions[34]= "35)  En Itil V3 la Gesti&oacute;n de la Cartera de Servicios pertenece a la fase de ciclo de vida:";
 choices[34]= new Array();
 choices[34][0] = "Dise&ntilde;o del servicio.";
 choices[34][1] = "Transici&oacute;n del servicio.";
 choices[34][2] = "Estrategia del servicio.";
 choices[34][3] = "Operaci&oacute;n del servicio.";
 answers[34] = choices[34][2];
 units[34] = "101";
 comments[34] = "Id Pregunta: 10642. Junta de Extremadura A1 2015";


//  Id pregunta: 10024 Año de creación de pregunta: 2016
 questions[35]= "36)  De acuerdo con la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, una de las funciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[35]= new Array();
 choices[35][0] = "Gestionar en per&iacute;odo voluntario las tasas en materia de telecomunicaciones a que se refiere la presente Ley.";
 choices[35][1] = "Proponer al Gobierno la pol&iacute;tica a seguir para facilitar el desarrollo y la evoluci&oacute;n de las obligaciones de servicio p&uacute;blico.";
 choices[35][2] = "Gestionar el Registro de Operadores.";
 choices[35][3] = "Establecer el procedimiento para cuantificar los beneficios no monetarios obtenidos por los operadores encargados de la prestaci&oacute;n del servicio universal.";
 answers[35] = choices[35][3];
 units[35] = "121";
 comments[35] = "Id Pregunta: 10024. AGE A1 2015";


//  Id pregunta: 10230 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[36]= new Array();
 choices[36][0] = "Por Real Decreto.";
 choices[36][1] = "Por Orden del Ministerio del Interior.";
 choices[36][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[36][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[36] = choices[36][2];
 units[36] = "1";
 comments[36] = "Id Pregunta: 10230. CONSTITUCION1978";


//  Id pregunta: 10439 Año de creación de pregunta: 2016
 questions[37]= "38)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[37]= new Array();
 choices[37][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[37][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[37][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[37][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[37] = choices[37][1];
 units[37] = "43";
 comments[37] = "Id Pregunta: 10439. SERVICIOS COMUNES";


//  Id pregunta: 10619 Año de creación de pregunta: 2016
 questions[38]= "39)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[38]= new Array();
 choices[38][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[38][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[38][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[38][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[38] = choices[38][1];
 units[38] = "89";
 comments[38] = "Id Pregunta: 10619. Junta de Extremadura A1 2015";


//  Id pregunta: 10229 Año de creación de pregunta: 2016
 questions[39]= "40)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[39]= new Array();
 choices[39][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[39][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[39][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[39][3] = "A las Diputaciones y a las Comarcas.";
 answers[39] = choices[39][3];
 units[39] = "1";
 comments[39] = "Id Pregunta: 10229. CONSTITUCION1978";


//  Id pregunta: 10379 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[40]= new Array();
 choices[40][0] = "Anual.";
 choices[40][1] = "Semestral.";
 choices[40][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[40][3] = "Bienal.";
 answers[40] = choices[40][2];
 units[40] = "14";
 comments[40] = "Id Pregunta: 10379. POLITICAS DE IGUALDAD";


//  Id pregunta: 10222 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[41]= new Array();
 choices[41][0] = "Dos Cap&iacute;tulos.";
 choices[41][1] = "Tres Cap&iacute;tulos.";
 choices[41][2] = "Un Cap&iacute;tulo.";
 choices[41][3] = "Cuatro Cap&iacute;tulos.";
 answers[41] = choices[41][1];
 units[41] = "1";
 comments[41] = "Id Pregunta: 10222. CONSTITUCION1978";


//  Id pregunta: 10374 Año de creación de pregunta: 2016
 questions[42]= "43)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[42]= new Array();
 choices[42][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[42][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[42][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[42][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[42] = choices[42][3];
 units[42] = "5";
 comments[42] = "Id Pregunta: 10374. UNION EUROPEA";


//  Id pregunta: 10407 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[43]= new Array();
 choices[43][0] = "Art&iacute;culo 14 CE.";
 choices[43][1] = "Art&iacute;culo 9.2 CE.";
 choices[43][2] = "Art&iacute;culo 9.1 CE.";
 choices[43][3] = "Art&iacute;culo 13 CE.";
 answers[43] = choices[43][2];
 units[43] = "14";
 comments[43] = "Id Pregunta: 10407. POLITICAS DE IGUALDAD";


//  Id pregunta: 10430 Año de creación de pregunta: 2016
 questions[44]= "45)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[44]= new Array();
 choices[44][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[44][1] = "Protecci&oacute;n de su salud.";
 choices[44][2] = "Ninguna es correcta.";
 choices[44][3] = "A y B son correctas.";
 answers[44] = choices[44][1];
 units[44] = "14";
 comments[44] = "Id Pregunta: 10430. POLITICAS DE IGUALDAD";


//  Id pregunta: 10670 Año de creación de pregunta: 2016
 questions[45]= "46)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[45]= new Array();
 choices[45][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[45][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[45][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[45][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[45] = choices[45][1];
 units[45] = "7";
 comments[45] = "Id Pregunta: 10670. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 10560 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[46]= new Array();
 choices[46][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[46][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[46][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[46][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[46] = choices[46][1];
 units[46] = "19";
 comments[46] = "Id Pregunta: 10560. Agenda Digital";


//  Id pregunta: 10295 Año de creación de pregunta: 2016
 questions[47]= "48)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[47]= new Array();
 choices[47][0] = "Estrasburgo.";
 choices[47][1] = "Bruselas.";
 choices[47][2] = "Luxemburgo.";
 choices[47][3] = "Holanda.";
 answers[47] = choices[47][2];
 units[47] = "5";
 comments[47] = "Id Pregunta: 10295. UNION EUROPEA";


//  Id pregunta: 10600 Año de creación de pregunta: 2016
 questions[48]= "49)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[48]= new Array();
 choices[48][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[48][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[48][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[48][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[48] = choices[48][2];
 units[48] = "108";
 comments[48] = "Id Pregunta: 10600. Junta de Extremadura A1 2015";


//  Id pregunta: 10249 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[49]= new Array();
 choices[49][0] = "Art&iacute;culo 16.2.";
 choices[49][1] = "Art&iacute;culo 17.1.";
 choices[49][2] = "Art&iacute;culo 18.1.";
 choices[49][3] = "Art&iacute;culo 18.2.";
 answers[49] = choices[49][0];
 units[49] = "1";
 comments[49] = "Id Pregunta: 10249. CONSTITUCION1978";


//  Id pregunta: 10026 Año de creación de pregunta: 2016
 questions[50]= "51)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[50]= new Array();
 choices[50][0] = "Sello electr&oacute;nico";
 choices[50][1] = "Sede electr&oacute;nica";
 choices[50][2] = "Servidor seguro (SSL/TLS)";
 choices[50][3] = "Empleado p&uacute;blico";
 answers[50] = choices[50][2];
 units[50] = "7";
 comments[50] = "Id Pregunta: 10026. AGE A1 2015";


//  Id pregunta: 10281 Año de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ale la respuesta falsa:";
 choices[51]= new Array();
 choices[51][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[51][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[51][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[51][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[51] = choices[51][3];
 units[51] = "5";
 comments[51] = "Id Pregunta: 10281. UNION EUROPEA";


//  Id pregunta: 10664 Año de creación de pregunta: 2016
 questions[52]= "53)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[52]= new Array();
 choices[52][0] = "Siempre en formato electr&oacute;nico.";
 choices[52][1] = "Siempre en formato papel.";
 choices[52][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[52][3] = "La ley no regula el formato del expediente.";
 answers[52] = choices[52][0];
 units[52] = "7";
 comments[52] = "Id Pregunta: 10664. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 10054 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[53]= new Array();
 choices[53][0] = "DoS";
 choices[53][1] = "Phishing";
 choices[53][2] = "Sniffing";
 choices[53][3] = "Spoofing";
 answers[53] = choices[53][3];
 units[53] = "119";
 comments[53] = "Id Pregunta: 10054. AGE A1 2015";


//  Id pregunta: 10293 Año de creación de pregunta: 2016
 questions[54]= "55)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[54]= new Array();
 choices[54][0] = "Estrasburgo.";
 choices[54][1] = "Bruselas.";
 choices[54][2] = "Luxemburgo.";
 choices[54][3] = "Holanda.";
 answers[54] = choices[54][0];
 units[54] = "5";
 comments[54] = "Id Pregunta: 10293. UNION EUROPEA";


//  Id pregunta: 10221 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[55]= new Array();
 choices[55][0] = "De los derechos y deberes fundamentales.";
 choices[55][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[55][2] = "Derechos y libertades.";
 choices[55][3] = "De la Corona.";
 answers[55] = choices[55][0];
 units[55] = "1";
 comments[55] = "Id Pregunta: 10221. CONSTITUCION1978";


//  Id pregunta: 10452 Año de creación de pregunta: 2016
 questions[56]= "57)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[56]= new Array();
 choices[56][0] = "Los cr&eacute;ditos";
 choices[56][1] = "Las partidas presupuestarias";
 choices[56][2] = "Los derechos";
 choices[56][3] = "Las obligaciones";
 answers[56] = choices[56][3];
 units[56] = "10";
 comments[56] = "Id Pregunta: 10452. PRESUPUESTOS GENERALES";


//  Id pregunta: 10171 Año de creación de pregunta: 2016
 questions[57]= "58)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[57]= new Array();
 choices[57][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[57][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[57][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[57][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[57] = choices[57][3];
 units[57] = "19";
 comments[57] = "Id Pregunta: 10171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 10052 Año de creación de pregunta: 2016
 questions[58]= "59)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[58]= new Array();
 choices[58][0] = "ISO/IEC 25000";
 choices[58][1] = "ISO/IEC 27000";
 choices[58][2] = "ISO 9000";
 choices[58][3] = "ISO 9001";
 answers[58] = choices[58][0];
 units[58] = "93";
 comments[58] = "Id Pregunta: 10052. AGE A1 2015";


//  Id pregunta: 10175 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[59]= new Array();
 choices[59][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[59][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[59][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[59][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[59] = choices[59][1];
 units[59] = "1";
 comments[59] = "Id Pregunta: 10175. CONSTITUCION1978";


//  Id pregunta: 10106 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[60]= new Array();
 choices[60][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[60][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[60][2] = "A) y B) son verdaderas";
 choices[60][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[60] = choices[60][2];
 units[60] = "73";
 comments[60] = "Id Pregunta: 10106. ";


//  Id pregunta: 10675 Año de creación de pregunta: 2016
 questions[61]= "62)  En referencia al proyecto ANDES, para la comunicaci&oacute;n telem&aacute;tica de Nacimientos desde Centros Sanitarios a Registros Civiles, indique cual de las siguientes afirmaciones es falsa:";
 choices[61]= new Array();
 choices[61][0] = "Tiene sustento legal de acuerdo a la Ley 19/2015, de 13 de julio, de medidas de reforma administrativa en el &aacute;mbito de la Administraci&oacute;n de Justicia y del Registro Civil.";
 choices[61][1] = "Se inicia a partir de su propuesta en CORA (Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas).";
 choices[61][2] = "Reutiliza el servicio horizontal ACCEDA en modo cloud, lo cual ha facilitado la pronta puesta en marcha de la soluci&oacute;n.";
 choices[61][3] = "La utilizaci&oacute;n de ANDES por parte de los hospitales es completamente transparente, sin necesidad de realizar pasos previos para su despliegue.";
 answers[61] = choices[61][3];
 units[61] = "47";
 comments[61] = "Id Pregunta: 10675. Inscripci&oacute;n autom&aacute;tica nacimientos";


//  Id pregunta: 10110 Año de creación de pregunta: 2016
 questions[62]= "63)  La Poblaci&oacute;n Activa incluye a:";
 choices[62]= new Array();
 choices[62][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[62][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[62][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[62][3] = "Todo aquel que desea trabajar";
 answers[62] = choices[62][2];
 units[62] = "15";
 comments[62] = "Id Pregunta: 10110. ";


//  Id pregunta: 10073 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[63]= new Array();
 choices[63][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[63][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[63][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[63][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[63] = choices[63][1];
 units[63] = "44";
 comments[63] = "Id Pregunta: 10073. AGE A1 2015";


//  Id pregunta: 10550 Año de creación de pregunta: 2016
 questions[64]= "65)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[64]= new Array();
 choices[64][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[64][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[64][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[64][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[64] = choices[64][3];
 units[64] = "26";
 comments[64] = "Id Pregunta: 10550. Gobernanza TIC";


//  Id pregunta: 10451 Año de creación de pregunta: 2016
 questions[65]= "66)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[65]= new Array();
 choices[65][0] = "Los cr&eacute;ditos";
 choices[65][1] = "Las partidas presupuestarias";
 choices[65][2] = "Los derechos";
 choices[65][3] = "Las obligaciones";
 answers[65] = choices[65][2];
 units[65] = "10";
 comments[65] = "Id Pregunta: 10451. PRESUPUESTOS GENERALES";


//  Id pregunta: 10053 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[66]= new Array();
 choices[66][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[66][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[66][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[66][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[66] = choices[66][1];
 units[66] = "84";
 comments[66] = "Id Pregunta: 10053. AGE A1 2015";


//  Id pregunta: 10079 Año de creación de pregunta: 2016
 questions[67]= "68)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[67]= new Array();
 choices[67][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[67][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[67][2] = "Las Inspecciones Generales de los Servicios";
 choices[67][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[67] = choices[67][1];
 units[67] = "75";
 comments[67] = "Id Pregunta: 10079. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10336 Año de creación de pregunta: 2016
 questions[68]= "69)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[68]= new Array();
 choices[68][0] = "Diciembre de 1987.";
 choices[68][1] = "Septiembre de 1989.";
 choices[68][2] = "Octubre de 1990.";
 choices[68][3] = "Noviembre de 1980.";
 answers[68] = choices[68][1];
 units[68] = "5";
 comments[68] = "Id Pregunta: 10336. UNION EUROPEA";


//  Id pregunta: 10445 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[69]= new Array();
 choices[69][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[69][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[69][2] = "Fecha de otorgamiento.";
 choices[69][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[69] = choices[69][1];
 units[69] = "43";
 comments[69] = "Id Pregunta: 10445. SERVICIOS COMUNES";


//  Id pregunta: 10034 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[70]= new Array();
 choices[70][0] = "Memcached";
 choices[70][1] = "OpCache";
 choices[70][2] = "WinCache Extension for PHP";
 choices[70][3] = "Alternative PHP Cache";
 answers[70] = choices[70][0];
 units[70] = "65";
 comments[70] = "Id Pregunta: 10034. AGE A1 2015";


//  Id pregunta: 10625 Año de creación de pregunta: 2016
 questions[71]= "72)  En UML &iquest;qu&eacute; es una m&aacute;quina de estados?";
 choices[71]= new Array();
 choices[71][0] = "Es un modelo computacional representado por grafos, en los que los estados son los v&eacute;rtices.";
 choices[71][1] = "Es un dispositivo que puede ser programado para cumplir determinadas tareas de control en sistema autom&aacute;ticos.";
 choices[71][2] = "Es un comportamiento que especifica las secuencias de estados por las que pasa un objeto a lo largo de su vida en respuesta a eventos, junto con sus respuestas a esos eventos.";
 choices[71][3] = "Es un sistema l&oacute;gico que posee una entrada, un procesador intermedio y una salida resultado de la aplicaci&oacute;n del procesamiento sobre la entrada.";
 answers[71] = choices[71][2];
 units[71] = "89";
 comments[71] = "Id Pregunta: 10625. Junta de Extremadura A1 2015";


//  Id pregunta: 10529 Año de creación de pregunta: 2016
 questions[72]= "73)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[72]= new Array();
 choices[72][0] = "formular solicitudes";
 choices[72][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[72][2] = "presentar declaraciones responsables o comunicaciones";
 choices[72][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[72] = choices[72][1];
 units[72] = "7";
 comments[72] = "Id Pregunta: 10529. LEY 39/2015";


//  Id pregunta: 10618 Año de creación de pregunta: 2016
 questions[73]= "74)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[73]= new Array();
 choices[73][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[73][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[73][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[73][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[73] = choices[73][2];
 units[73] = "85";
 comments[73] = "Id Pregunta: 10618. Junta de Extremadura A1 2015";


//  Id pregunta: 10481 Año de creación de pregunta: 2016
 questions[74]= "75)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[74]= new Array();
 choices[74][0] = "Cuatro millones de euros.";
 choices[74][1] = "Seis millones de euros.";
 choices[74][2] = "Siete millones de euros.";
 choices[74][3] = "Cinco millones de euros.";
 answers[74] = choices[74][1];
 units[74] = "10";
 comments[74] = "Id Pregunta: 10481. PRESUPUESTOS GENERALES";


