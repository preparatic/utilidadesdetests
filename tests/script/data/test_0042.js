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
var preguntaids = new Array();

//  Id pregunta: 572 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[0]= new Array();
 choices[0][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[0][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[0][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[0][3] = "La tasa de desempleo ronda el 20%";
 answers[0] = choices[0][2];
 units[0] = "12";
 comments[0] = "Id Pregunta: 572. Modelo econ&oacute;mico";
 preguntaids[0] = 572


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[1]= "2)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[1]= new Array();
 choices[1][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[1][1] = "garantizar la conservaci&oacute;n del documento";
 choices[1][2] = "garantizar la autenticidad del documento";
 choices[1][3] = "garantizar la integridad del documento";
 answers[1] = choices[1][0];
 units[1] = "7";
 comments[1] = "Id Pregunta: 152. Ley 39/2015, Art&iacute;culo 17";
 preguntaids[1] = 152


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[2]= new Array();
 choices[2][0] = "Entre 1973 y 1978";
 choices[2][1] = "Entre 1992 y 1996";
 choices[2][2] = "Entre 1978 y 1985";
 choices[2][3] = "Entre 2008 y 2013";
 answers[2] = choices[2][2];
 units[2] = "12";
 comments[2] = "Id Pregunta: 564. Modelo econ&oacute;mico";
 preguntaids[2] = 564


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[3]= "4)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[3]= new Array();
 choices[3][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[3][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[3][2] = "Ambas son correctas.";
 choices[3][3] = "La A y B son incorrectas.";
 answers[3] = choices[3][2];
 units[3] = "14";
 comments[3] = "Id Pregunta: 417. POLITICAS DE IGUALDAD";
 preguntaids[3] = 417


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[4]= "5)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[4]= new Array();
 choices[4][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[4][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[4][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[4][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[4] = choices[4][1];
 units[4] = "1";
 comments[4] = "Id Pregunta: 263. CONSTITUCION1978";
 preguntaids[4] = 263


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[5]= new Array();
 choices[5][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[5][1] = "Solamente el Congreso.";
 choices[5][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[5][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[5] = choices[5][0];
 units[5] = "1";
 comments[5] = "Id Pregunta: 176. CONSTITUCION1978";
 preguntaids[5] = 176


//  Id pregunta: 695 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[6]= new Array();
 choices[6][0] = "Jenkins";
 choices[6][1] = "Hudson";
 choices[6][2] = "SonarQube";
 choices[6][3] = "Todas lo son";
 answers[6] = choices[6][3];
 units[6] = "92";
 comments[6] = "Id Pregunta: 695. INTEGRACION CONTINUA";
 preguntaids[6] = 695


//  Id pregunta: 350 Año de creación de pregunta: 2016
 questions[7]= "8)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[7]= new Array();
 choices[7][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[7][1] = "Uno de sus miembros.";
 choices[7][2] = "La Comisi&oacute;n.";
 choices[7][3] = "Todas las respuestas son correctas.";
 answers[7] = choices[7][3];
 units[7] = "5";
 comments[7] = "Id Pregunta: 350. UNION EUROPEA";
 preguntaids[7] = 350


//  Id pregunta: 621 Año de creación de pregunta: 2016
 questions[8]= "9)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[8]= new Array();
 choices[8][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[8][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[8][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[8][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[8] = choices[8][1];
 units[8] = "89";
 comments[8] = "Id Pregunta: 621. Junta de Extremadura A1 2015";
 preguntaids[8] = 621


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[9]= new Array();
 choices[9][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[9][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[9][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[9][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[9] = choices[9][2];
 units[9] = "22";
 comments[9] = "Id Pregunta: 129. ";
 preguntaids[9] = 129


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[10]= new Array();
 choices[10][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[10][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[10][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[10][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[10] = choices[10][2];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 824. Ley 40/2015";
 preguntaids[10] = 824


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[11]= new Array();
 choices[11][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[11][1] = "De nivel alto.";
 choices[11][2] = "De nivel medio y nivel alto.";
 choices[11][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[11] = choices[11][3];
 units[11] = "35";
 comments[11] = "Id Pregunta: 632. Junta de Extremadura A1 2015";
 preguntaids[11] = 632


//  Id pregunta: 38 Año de creación de pregunta: 2016
 questions[12]= "13)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[12]= new Array();
 choices[12][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[12][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[12][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[12][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[12] = choices[12][3];
 units[12] = "62";
 comments[12] = "Id Pregunta: 38. AGE A1 2015";
 preguntaids[12] = 38


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[13]= "14)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[13]= new Array();
 choices[13][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[13][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[13][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[13][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[13] = choices[13][2];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 821. Ley 40/2015";
 preguntaids[13] = 821


//  Id pregunta: 699 Año de creación de pregunta: 2016
 questions[14]= "15)  Cu&aacute;l de las siguientes afirmaciones relativas a Apache Jenkins es falsa";
 choices[14]= new Array();
 choices[14][0] = "Est&aacute; desarrollado en Java.";
 choices[14][1] = "Fue un proyecto escindido de Hudson tras una disputa con Oracle.";
 choices[14][2] = "Se considera software libre bajo la licencia EUPL.";
 choices[14][3] = "Todas las afirmaciones son correctas.";
 answers[14] = choices[14][2];
 units[14] = "92";
 comments[14] = "Id Pregunta: 699. INTEGRACION CONTINUA";
 preguntaids[14] = 699


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[15]= "16)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[15]= new Array();
 choices[15][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[15][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[15][2] = "Las respuestas a) b) no son correctas.";
 choices[15][3] = "Las respuestas a) y b) son correctas.";
 answers[15] = choices[15][3];
 units[15] = "10";
 comments[15] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";
 preguntaids[15] = 482


//  Id pregunta: 495 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[16]= new Array();
 choices[16][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[16][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[16][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[16][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[16] = choices[16][2];
 units[16] = "10";
 comments[16] = "Id Pregunta: 495. PRESUPUESTOS GENERALES";
 preguntaids[16] = 495


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[17]= "18)  De acuerdo con el art&iacute;culo 62 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, se&ntilde;ale la respuesta correcta:";
 choices[17]= new Array();
 choices[17][0] = "El uso del dominio p&uacute;blico radioel&eacute;ctrico s&oacute;lo puede ser de dos tipos: especial o privativo.";
 choices[17][1] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico precisa de t&iacute;tulo habilitante.";
 choices[17][2] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se realiza mediante la explotaci&oacute;n en exclusiva, o por un n&uacute;mero limitado de usuarios, de determinadas frecuencias en un mismo &aacute;mbito f&iacute;sico de aplicaci&oacute;n.";
 choices[17][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se lleve a cabo de las bandas de frecuencias habilitadas para su explotaci&oacute;n de forma compartida, sin limitaci&oacute;n de n&uacute;mero de operadores o usuarios y con las condiciones t&eacute;cnicas y para los servicios que se establezcan en cada caso.";
 answers[17] = choices[17][2];
 units[17] = "121";
 comments[17] = "Id Pregunta: 29. AGE A1 2015";
 preguntaids[17] = 29


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[18]= "19)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[18]= new Array();
 choices[18][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[18][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[18][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[18][3] = "ninguna es correcta";
 answers[18] = choices[18][2];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 819. Ley 40/2015";
 preguntaids[18] = 819


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[19]= "20)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[19]= new Array();
 choices[19][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[19][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[19][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[19][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[19] = choices[19][2];
 units[19] = "7";
 comments[19] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";
 preguntaids[19] = 148


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[20]= "21)  La recusaci&oacute;n se plantea...";
 choices[20]= new Array();
 choices[20][0] = "Antes de iniciado el procedimiento";
 choices[20][1] = "Una vez iniciado el procedimiento";
 choices[20][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[20][3] = "En cualquier momento del procedimiento";
 answers[20] = choices[20][0];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 829. Ley 40/2015";
 preguntaids[20] = 829


//  Id pregunta: 755 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Qui&eacute;n realiza el seguimiento peri&oacute;dico del cumplimiento de los objetivos de la Agenda Digital para Espa&ntilde;a?";
 choices[21]= new Array();
 choices[21][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital (SGAD)";
 choices[21][1] = "La Asociaci&oacute;n Espa&ntilde;ola de Normalizaci&oacute;n y Certificaci&oacute;n (AENOR)";
 choices[21][2] = "El Observatorio Nacional de Telecomunicaciones y Sociedad de la Informaci&oacute;n (ONTSI)";
 choices[21][3] = "El Observatorio de Administraci&oacute;n Electr&oacute;nica (OBSAE)";
 answers[21] = choices[21][2];
 units[21] = "19";
 comments[21] = "Id Pregunta: 755. Agenda Digital para Espa&ntilde;a";
 preguntaids[21] = 755


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[22]= new Array();
 choices[22][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[22][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[22][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[22][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[22] = choices[22][0];
 units[22] = "19";
 comments[22] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";
 preguntaids[22] = 162


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[23]= "24)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[23]= new Array();
 choices[23][0] = "ASF-AL (Apache License 2.0)";
 choices[23][1] = "EUPL (European Union Public License)";
 choices[23][2] = "LGPL (Lesser General Public License)";
 choices[23][3] = "MIT(MIT License)";
 answers[23] = choices[23][1];
 units[23] = "43";
 comments[23] = "Id Pregunta: 32. AGE A1 2015";
 preguntaids[23] = 32


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[24]= "25)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[24]= new Array();
 choices[24][0] = "Estrasburgo.";
 choices[24][1] = "Bruselas.";
 choices[24][2] = "Luxemburgo.";
 choices[24][3] = "Par&iacute;s.";
 answers[24] = choices[24][1];
 units[24] = "5";
 comments[24] = "Id Pregunta: 305. UNION EUROPEA";
 preguntaids[24] = 305


//  Id pregunta: 715 Año de creación de pregunta: 2016
 questions[25]= "26)  Entre las funcionalidades generales de un servidor de integraci&oacute;n continua NO se encuentra";
 choices[25]= new Array();
 choices[25][0] = "La ejecuci&oacute;n de una serie de test: JUnit, Cactus, Auditoria del c&oacute;digo fuente, test IHM, test funcionales.";
 choices[25][1] = "Permite realiza el despliegue de archivos en el entorno de producci&oacute;n.";
 choices[25][2] = "La notificaci&oacute;n del resultado por medios como correo electr&oacute;nico o RSS.";
 choices[25][3] = "La creaci&oacute;n de un informe de estad&iacute;sticas.";
 answers[25] = choices[25][1];
 units[25] = "92";
 comments[25] = "Id Pregunta: 715. INTEGRACION CONTINUA";
 preguntaids[25] = 715


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[26]= "27)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[26]= new Array();
 choices[26][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[26][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[26][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[26][3] = "cualquiera que sea el estado del procedimiento";
 answers[26] = choices[26][3];
 units[26] = "7";
 comments[26] = "Id Pregunta: 527. LEY 39/2015";
 preguntaids[26] = 527


//  Id pregunta: 375 Año de creación de pregunta: 2016
 questions[27]= "28)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[27]= new Array();
 choices[27][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[27][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[27][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[27][3] = "Todas las respuestas son correctas.";
 answers[27] = choices[27][3];
 units[27] = "5";
 comments[27] = "Id Pregunta: 375. UNION EUROPEA";
 preguntaids[27] = 375


//  Id pregunta: 16 Año de creación de pregunta: 2016
 questions[28]= "29)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[28][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[28][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[28][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[28] = choices[28][3];
 units[28] = "19";
 comments[28] = "Id Pregunta: 16. AGE A1 2015";
 preguntaids[28] = 16


//  Id pregunta: 489 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[29]= new Array();
 choices[29][0] = "Las Cortes Generales.";
 choices[29][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[29][2] = "El Gobierno.";
 choices[29][3] = "El Congreso de los Diputados.";
 answers[29] = choices[29][0];
 units[29] = "10";
 comments[29] = "Id Pregunta: 489. PRESUPUESTOS GENERALES";
 preguntaids[29] = 489


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[30]= "31)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[30]= new Array();
 choices[30][0] = "Presencia equilibrada.";
 choices[30][1] = "Presencia paritaria.";
 choices[30][2] = "Presencia consensuada.";
 choices[30][3] = "presencia horizontal.";
 answers[30] = choices[30][0];
 units[30] = "14";
 comments[30] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";
 preguntaids[30] = 425


//  Id pregunta: 221 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[31]= new Array();
 choices[31][0] = "De los derechos y deberes fundamentales.";
 choices[31][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[31][2] = "Derechos y libertades.";
 choices[31][3] = "De la Corona.";
 answers[31] = choices[31][0];
 units[31] = "1";
 comments[31] = "Id Pregunta: 221. CONSTITUCION1978";
 preguntaids[31] = 221


//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[32]= "33)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[32]= new Array();
 choices[32][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[32][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[32][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[32][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[32] = choices[32][2];
 units[32] = "85";
 comments[32] = "Id Pregunta: 620. Junta de Extremadura A1 2015";
 preguntaids[32] = 620


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[33]= new Array();
 choices[33][0] = "El Parlamento y el Consejo.";
 choices[33][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[33][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[33][3] = "La Comisi&oacute;n y el Consejo.";
 answers[33] = choices[33][1];
 units[33] = "5";
 comments[33] = "Id Pregunta: 357. UNION EUROPEA";
 preguntaids[33] = 357


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[34]= new Array();
 choices[34][0] = "Bienalmente";
 choices[34][1] = "Anualmente";
 choices[34][2] = "Semestralmente";
 choices[34][3] = "Cada cuatro a&ntilde;os";
 answers[34] = choices[34][1];
 units[34] = "19";
 comments[34] = "Id Pregunta: 586. Estrategia TIC";
 preguntaids[34] = 586


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[35]= "36)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[35]= new Array();
 choices[35][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[35][1] = "La libertad sexual y religiosa.";
 choices[35][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[35][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[35] = choices[35][3];
 units[35] = "1";
 comments[35] = "Id Pregunta: 254. CONSTITUCION1978";
 preguntaids[35] = 254


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[36]= "37)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[36]= new Array();
 choices[36][0] = "Almacenamiento orientado a columnas";
 choices[36][1] = "Framework MapReduce";
 choices[36][2] = "OLTP";
 choices[36][3] = "Bases de datos clave-valor";
 answers[36] = choices[36][2];
 units[36] = "73";
 comments[36] = "Id Pregunta: 93. AGE A1 2015";
 preguntaids[36] = 93


//  Id pregunta: 218 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[37]= new Array();
 choices[37][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[37][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[37][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[37][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[37] = choices[37][0];
 units[37] = "1";
 comments[37] = "Id Pregunta: 218. CONSTITUCION1978";
 preguntaids[37] = 218


//  Id pregunta: 246 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[38]= new Array();
 choices[38][0] = "Dos Cap&iacute;tulos.";
 choices[38][1] = "Tres Cap&iacute;tulos.";
 choices[38][2] = "Un Cap&iacute;tulo.";
 choices[38][3] = "Cuatro Cap&iacute;tulos.";
 answers[38] = choices[38][1];
 units[38] = "1";
 comments[38] = "Id Pregunta: 246. CONSTITUCION1978";
 preguntaids[38] = 246


//  Id pregunta: 663 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[39]= new Array();
 choices[39][0] = "Varios namenodes y varios datanodes por cluster";
 choices[39][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[39][2] = "1 namenode y varios datanodes por cluster";
 choices[39][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[39] = choices[39][2];
 units[39] = "73";
 comments[39] = "Id Pregunta: 663. ";
 preguntaids[39] = 663


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[40]= "41)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[40]= new Array();
 choices[40][0] = "Ejecutivo";
 choices[40][1] = "Limitativo";
 choices[40][2] = "Estimativo";
 choices[40][3] = "Progresivo";
 answers[40] = choices[40][2];
 units[40] = "10";
 comments[40] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";
 preguntaids[40] = 448


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[41]= "42)  En el sistema operativo Unix/Linux, el comando id:";
 choices[41]= new Array();
 choices[41][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[41][1] = "El comando id no existe.";
 choices[41][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[41][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[41] = choices[41][0];
 units[41] = "57";
 comments[41] = "Id Pregunta: 639. Junta de Extremadura A1 2015";
 preguntaids[41] = 639


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[42]= new Array();
 choices[42][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[42][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[42][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[42][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[42] = choices[42][3];
 units[42] = "106";
 comments[42] = "Id Pregunta: 74. AGE A1 2015";
 preguntaids[42] = 74


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[43]= new Array();
 choices[43][0] = "Perceptible";
 choices[43][1] = "Operable";
 choices[43][2] = "Comprensible";
 choices[43][3] = "Robusto";
 answers[43] = choices[43][2];
 units[43] = "42";
 comments[43] = "Id Pregunta: 83. AGE A1 2015";
 preguntaids[43] = 83


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[44]= new Array();
 choices[44][0] = "ISO/IEC 31000";
 choices[44][1] = "ISO/IEC 14000";
 choices[44][2] = "ISO/IEC 38500";
 choices[44][3] = "ISO/IEC 18000";
 answers[44] = choices[44][2];
 units[44] = "26";
 comments[44] = "Id Pregunta: 545. Gobernanza TIC";
 preguntaids[44] = 545


//  Id pregunta: 593 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[45]= new Array();
 choices[45][0] = "La CETIC";
 choices[45][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[45][2] = "La DTIC";
 choices[45][3] = "El MHFP";
 answers[45] = choices[45][0];
 units[45] = "19";
 comments[45] = "Id Pregunta: 593. Estrategia TIC";
 preguntaids[45] = 593


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[46]= "47)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[46]= new Array();
 choices[46][0] = "Intersecci&oacute;n.";
 choices[46][1] = "Uni&oacute;n.";
 choices[46][2] = "Restricci&oacute;n.";
 choices[46][3] = "Diferencia.";
 answers[46] = choices[46][0];
 units[46] = "60";
 comments[46] = "Id Pregunta: 614. Junta de Extremadura A1 2015";
 preguntaids[46] = 614


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[47]= "48)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[47]= new Array();
 choices[47][0] = "2.400 euros";
 choices[47][1] = "4.000 euros";
 choices[47][2] = "3.200 euros";
 choices[47][3] = "1.600 euros";
 answers[47] = choices[47][1];
 units[47] = "37";
 comments[47] = "Id Pregunta: 89. AGE A1 2015";
 preguntaids[47] = 89


//  Id pregunta: 44 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[48]= new Array();
 choices[48][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[48][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[48][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[48][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[48] = choices[48][1];
 units[48] = "60";
 comments[48] = "Id Pregunta: 44. AGE A1 2015";
 preguntaids[48] = 44


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[49]= "50)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[49]= new Array();
 choices[49][0] = "Tres a&ntilde;os.";
 choices[49][1] = "Dos a&ntilde;os y medio.";
 choices[49][2] = "Cinco a&ntilde;os.";
 choices[49][3] = "Seis a&ntilde;os.";
 answers[49] = choices[49][3];
 units[49] = "5";
 comments[49] = "Id Pregunta: 291. UNION EUROPEA";
 preguntaids[49] = 291


//  Id pregunta: 217 Año de creación de pregunta: 2016
 questions[50]= "51)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[50]= new Array();
 choices[50][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[50][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[50][2] = "Son refrendados por el Rey.";
 choices[50][3] = "Son convocados por el Presidente del Gobierno.";
 answers[50] = choices[50][0];
 units[50] = "1";
 comments[50] = "Id Pregunta: 217. CONSTITUCION1978";
 preguntaids[50] = 217


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[51]= "52)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[51]= new Array();
 choices[51][0] = "los Ministros y los Secretarios de Estado";
 choices[51][1] = "los Subsecretarios y Secretarios generales";
 choices[51][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[51][3] = "los Directores generales";
 answers[51] = choices[51][2];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 793. Ley 40/2015";
 preguntaids[51] = 793


//  Id pregunta: 457 Año de creación de pregunta: 2016
 questions[52]= "53)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[52]= new Array();
 choices[52][0] = "En qu&eacute; nos gastamos el dinero";
 choices[52][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[52][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[52][3] = "Qui&eacute;n se gasta el dinero.";
 answers[52] = choices[52][0];
 units[52] = "10";
 comments[52] = "Id Pregunta: 457. PRESUPUESTOS GENERALES";
 preguntaids[52] = 457


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[53]= "54)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[53]= new Array();
 choices[53][0] = "Interoperabilidad";
 choices[53][1] = "Integridad";
 choices[53][2] = "Capital humano";
 choices[53][3] = "Trazabilidad";
 answers[53] = choices[53][2];
 units[53] = "19";
 comments[53] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";
 preguntaids[53] = 166


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[54]= "55)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[54]= new Array();
 choices[54][0] = "Subgrupo A1";
 choices[54][1] = "Subgrupo A2";
 choices[54][2] = "Subgrupo B";
 choices[54][3] = "Subgrupo C1";
 answers[54] = choices[54][0];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 806. Ley 40/2015";
 preguntaids[54] = 806


//  Id pregunta: 434 Año de creación de pregunta: 2016
 questions[55]= "56)  En cuanto al sistema EGEO, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[55]= new Array();
 choices[55][0] = "Permite la representaci&oacute;n de mapas tem&aacute;ticos, georreferenciados, buscador de recursos georreferenciados con filtros definidos por el usuario, y de magnitud.";
 choices[55][1] = "Utiliza &uacute;nicamente sobre mapas oficiales del Instituto Geogr&aacute;fico Nacional (IGN).";
 choices[55][2] = "Es un servicio com&uacute;n dirigido a &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[55][3] = "Para su manejo, es necesario contar con conocimientos de georreferenciaci&oacute;n.";
 answers[55] = choices[55][0];
 units[55] = "43";
 comments[55] = "Id Pregunta: 434. SERVICIOS COMUNES";
 preguntaids[55] = 434


//  Id pregunta: 680 Año de creación de pregunta: 2016
 questions[56]= "57)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[56]= new Array();
 choices[56][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[56][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[56][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[56][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[56] = choices[56][1];
 units[56] = "14";
 comments[56] = "Id Pregunta: 680. Dependencia";
 preguntaids[56] = 680


//  Id pregunta: 117 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[57]= new Array();
 choices[57][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[57][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas ";
 choices[57][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[57][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[57] = choices[57][0];
 units[57] = "15";
 comments[57] = "Id Pregunta: 117. ";
 preguntaids[57] = 117


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[58]= "59)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[58]= new Array();
 choices[58][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[58][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[58][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[58][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[58] = choices[58][2];
 units[58] = "7";
 comments[58] = "Id Pregunta: 529. LEY 39/2015";
 preguntaids[58] = 529


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[59]= new Array();
 choices[59][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[59][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[59][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[59][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[59] = choices[59][2];
 units[59] = "17";
 comments[59] = "Id Pregunta: 558. Mercado &Uacute;nico Digital";
 preguntaids[59] = 558


//  Id pregunta: 191 Año de creación de pregunta: 2016
 questions[60]= "61)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[60]= new Array();
 choices[60][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[60][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[60][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[60][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[60] = choices[60][2];
 units[60] = "1";
 comments[60] = "Id Pregunta: 191. CONSTITUCION1978";
 preguntaids[60] = 191


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[61]= "62)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[61]= new Array();
 choices[61][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[61][1] = "Clasificaci&oacute;n por cuenta.";
 choices[61][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[61][3] = "Clasificaci&oacute;n por intercambio.";
 answers[61] = choices[61][3];
 units[61] = "56";
 comments[61] = "Id Pregunta: 611. Junta de Extremadura A1 2015";
 preguntaids[61] = 611


//  Id pregunta: 650 Año de creación de pregunta: 2016
 questions[62]= "63)  Los IDS, (Sistemas de Detecci&oacute;n de Intrusos), pueden clasificarse:";
 choices[62]= new Array();
 choices[62][0] = "Solamente en funci&oacute;n de los sistemas que monitorizan.";
 choices[62][1] = "En funci&oacute;n de los sistemas que monitorizan y en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[62][2] = "Solamente en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[62][3] = "Estos sistemas es imposible clasificarlos.";
 answers[62] = choices[62][1];
 units[62] = "119";
 comments[62] = "Id Pregunta: 650. Junta de Extremadura A1 2015";
 preguntaids[62] = 650


//  Id pregunta: 479 Año de creación de pregunta: 2016
 questions[63]= "64)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[63]= new Array();
 choices[63][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[63][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[63][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[63][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[63] = choices[63][2];
 units[63] = "10";
 comments[63] = "Id Pregunta: 479. PRESUPUESTOS GENERALES";
 preguntaids[63] = 479


//  Id pregunta: 641 Año de creación de pregunta: 2016
 questions[64]= "65)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[64]= new Array();
 choices[64][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[64][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[64][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[64][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[64] = choices[64][2];
 units[64] = "57";
 comments[64] = "Id Pregunta: 641. Junta de Extremadura A1 2015";
 preguntaids[64] = 641


//  Id pregunta: 580 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[65]= new Array();
 choices[65][0] = "Fue elaborada y aprobada por la CETIC";
 choices[65][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[65][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[65][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[65] = choices[65][1];
 units[65] = "19";
 comments[65] = "Id Pregunta: 580. Estrategia TIC";
 preguntaids[65] = 580


//  Id pregunta: 273 Año de creación de pregunta: 2016
 questions[66]= "67)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[66]= new Array();
 choices[66][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[66][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[66][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[66][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[66] = choices[66][1];
 units[66] = "92";
 comments[66] = "Id Pregunta: 273. INTEGRACION CONTINUA";
 preguntaids[66] = 273


//  Id pregunta: 599 Año de creación de pregunta: 2016
 questions[67]= "68)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[67]= new Array();
 choices[67][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[67][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[67][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[67][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[67] = choices[67][0];
 units[67] = "45";
 comments[67] = "Id Pregunta: 599. Junta de Extremadura A1 2015";
 preguntaids[67] = 599


//  Id pregunta: 638 Año de creación de pregunta: 2016
 questions[68]= "69)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[68]= new Array();
 choices[68][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[68][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[68][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[68][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[68] = choices[68][2];
 units[68] = "57";
 comments[68] = "Id Pregunta: 638. Junta de Extremadura A1 2015";
 preguntaids[68] = 638


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[69]= new Array();
 choices[69][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[69][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[69][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[69][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[69] = choices[69][0];
 units[69] = "77";
 comments[69] = "Id Pregunta: 685. Art&iacute;culo 2 del Reglamento 910/2014";
 preguntaids[69] = 685


//  Id pregunta: 376 Año de creación de pregunta: 2016
 questions[70]= "71)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[70]= new Array();
 choices[70][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[70][1] = "Personas con nacionalidad europea.";
 choices[70][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[70][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[70] = choices[70][3];
 units[70] = "5";
 comments[70] = "Id Pregunta: 376. UNION EUROPEA";
 preguntaids[70] = 376


//  Id pregunta: 382 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[71]= new Array();
 choices[71][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[71][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[71][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[71][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[71] = choices[71][0];
 units[71] = "14";
 comments[71] = "Id Pregunta: 382. POLITICAS DE IGUALDAD";
 preguntaids[71] = 382


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[72]= "73)  El Colegio de Comisarios se re&uacute;ne:";
 choices[72]= new Array();
 choices[72][0] = "Una vez por semana.";
 choices[72][1] = "Una vez al mes.";
 choices[72][2] = "Dos veces en semana.";
 choices[72][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[72] = choices[72][0];
 units[72] = "5";
 comments[72] = "Id Pregunta: 315. UNION EUROPEA";
 preguntaids[72] = 315


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[73]= "74)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[73]= new Array();
 choices[73][0] = "Rey.";
 choices[73][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[73][2] = "Constituci&oacute;n.";
 choices[73][3] = "Pueblo.";
 answers[73] = choices[73][2];
 units[73] = "1";
 comments[73] = "Id Pregunta: 251. CONSTITUCION1978";
 preguntaids[73] = 251


//  Id pregunta: 863 Año de creación de pregunta: 2016
 questions[74]= "75)  Se recomienda que todas aquellas campa&ntilde;as de los ministerios que cuenten con su propia p&aacute;gina web, cuenten adem&aacute;s con un subdominio o URL secundaria en la estructura general de la p&aacute;gina web del Ministerio. Indique la opci&oacute;n correcta.";
 choices[74]= new Array();
 choices[74][0] = "Se podr&aacute; utilizar de forma opcional descripciones sem&aacute;nticas en el nombramiento y titulaci&oacute;n de los subdominios.";
 choices[74][1] = "RUN implementa una soluci&oacute;n sencilla de generaci&oacute;n de URL cortas  para una mejora en la eficiencia de la remisi&oacute;n de direcciones web mediante email, sms, twitter etc";
 choices[74][2] = "El nombre del subdominio o URL secundaria debe ser distinto al que se utilice como URL independiente.";
 choices[74][3] = "Con los subdominios o URL secundarias los robots de los buscadores requerir&aacute;n m&aacute;s tiempo en interpretar su dependencia contextual con el Ministerio u &Oacute;rgano de la Administraci&oacute;n.";
 answers[74] = choices[74][1];
 units[74] = "125";
 comments[74] = "Id Pregunta: 863. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[74] = 863


