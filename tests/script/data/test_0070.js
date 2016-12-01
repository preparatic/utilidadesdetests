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

//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[0]= "1)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[0]= new Array();
 choices[0][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[0][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[0][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[0][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[0] = choices[0][1];
 units[0] = "76";
 comments[0] = "Id Pregunta: 46. AGE A1 2015";
 preguntaids[0] = 46


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[1]= "2)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[1]= new Array();
 choices[1][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[1][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[1][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[1][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[1] = choices[1][3];
 units[1] = "1";
 comments[1] = "Id Pregunta: 227. CONSTITUCION1978";
 preguntaids[1] = 227


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[2]= new Array();
 choices[2][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[2][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[2][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[2][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[2] = choices[2][1];
 units[2] = "19";
 comments[2] = "Id Pregunta: 757. Agenda Digital para Espa&ntilde;a";
 preguntaids[2] = 757


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[3]= new Array();
 choices[3][0] = "JUnit, Artifactory y SonarQube";
 choices[3][1] = "JUnit, Artifactory y Selenium";
 choices[3][2] = "JUnit, SonarQube y Selenium";
 choices[3][3] = "ArtiFactory, SonarQube y Selenium";
 answers[3] = choices[3][2];
 units[3] = "92";
 comments[3] = "Id Pregunta: 91. AGE A1 2015";
 preguntaids[3] = 91


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[4]= "5)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[4]= new Array();
 choices[4][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[4][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[4][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[4][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[4] = choices[4][0];
 units[4] = "1";
 comments[4] = "Id Pregunta: 240. CONSTITUCION1978";
 preguntaids[4] = 240


//  Id pregunta: 262 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[5]= new Array();
 choices[5][0] = "Constitucional.";
 choices[5][1] = "Penal.";
 choices[5][2] = "Militar.";
 choices[5][3] = "Tribunales consuetudinarios.";
 answers[5] = choices[5][0];
 units[5] = "1";
 comments[5] = "Id Pregunta: 262. CONSTITUCION1978";
 preguntaids[5] = 262


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[6]= new Array();
 choices[6][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[6][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[6][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[6][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[6] = choices[6][1];
 units[6] = "1";
 comments[6] = "Id Pregunta: 175. CONSTITUCION1978";
 preguntaids[6] = 175


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[7]= new Array();
 choices[7][0] = "Publicidad.";
 choices[7][1] = "Constituci&oacute;n.";
 choices[7][2] = "Legalidad.";
 choices[7][3] = "Creaci&oacute;n.";
 answers[7] = choices[7][0];
 units[7] = "1";
 comments[7] = "Id Pregunta: 215. CONSTITUCION1978";
 preguntaids[7] = 215


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[8]= new Array();
 choices[8][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[8][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[8][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[8][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[8] = choices[8][3];
 units[8] = "5";
 comments[8] = "Id Pregunta: 332. UNION EUROPEA";
 preguntaids[8] = 332


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[9]= "10)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[9]= new Array();
 choices[9][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[9][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[9][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[9][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[9] = choices[9][2];
 units[9] = "50";
 comments[9] = "Id Pregunta: 633. Junta de Extremadura A1 2015";
 preguntaids[9] = 633


//  Id pregunta: 180 Año de creación de pregunta: 2016
 questions[10]= "11)  Se&ntilde;ale la afirmaci&oacute;n correcta de acuerdo con la regulaci&oacute;n que contiene el Art&iacute;culo 116 de la Constituci&oacute;n Espa&ntilde;ola de los estados de alarma, excepci&oacute;n y sitio:";
 choices[10]= new Array();
 choices[10][0] = "el estado de sitio ser&aacute; declarado por la mayor&iacute;a absoluta del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[10][1] = "El estado de excepci&oacute;n ser&aacute; declarado por el Gobierno mediante Acuerdo de Ministros, previa autorizaci&oacute;n del Senado.";
 choices[10][2] = "El estado de alarma ser&aacute; declarado por la mayor&iacute;a simple del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[10][3] = "La declaraci&oacute;n de los estados de alarma, excepci&oacute;n y sitio s&iacute; modificar&aacute;n el principio de responsabilidad del Gobierno y de sus agentes reconocidos en la CE y en las leyes.";
 answers[10] = choices[10][0];
 units[10] = "1";
 comments[10] = "Id Pregunta: 180. CONSTITUCION1978";
 preguntaids[10] = 180


//  Id pregunta: 366 Año de creación de pregunta: 2016
 questions[11]= "12)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[11]= new Array();
 choices[11][0] = "20 parlamentarios.";
 choices[11][1] = "29 parlamentarios.";
 choices[11][2] = "18 parlamentarios.";
 choices[11][3] = "23 parlamentarios.";
 answers[11] = choices[11][0];
 units[11] = "5";
 comments[11] = "Id Pregunta: 366. UNION EUROPEA";
 preguntaids[11] = 366


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[12]= "13)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[12]= new Array();
 choices[12][0] = "Los cr&eacute;ditos";
 choices[12][1] = "Las partidas presupuestarias";
 choices[12][2] = "Los derechos";
 choices[12][3] = "Las obligaciones";
 answers[12] = choices[12][3];
 units[12] = "10";
 comments[12] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";
 preguntaids[12] = 454


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[13]= "14)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[13]= new Array();
 choices[13][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[13][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[13][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[13][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[13] = choices[13][1];
 units[13] = "22";
 comments[13] = "Id Pregunta: 278. LEY DE TRANSPARENCIA";
 preguntaids[13] = 278


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[14]= "15)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[14]= new Array();
 choices[14][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[14][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[14][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[14][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[14] = choices[14][2];
 units[14] = "1";
 comments[14] = "Id Pregunta: 177. CONSTITUCION1978";
 preguntaids[14] = 177


//  Id pregunta: 578 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[15]= new Array();
 choices[15][0] = "PostgreSQL";
 choices[15][1] = "Datawarehouse";
 choices[15][2] = "Snowflake";
 choices[15][3] = "CouchDB";
 answers[15] = choices[15][0];
 units[15] = "61";
 comments[15] = "Id Pregunta: 578. Tema 61. TAI 2016.";
 preguntaids[15] = 578


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[16]= "17)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[16]= new Array();
 choices[16][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[16][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[16][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[16][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[16] = choices[16][2];
 units[16] = "7";
 comments[16] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";
 preguntaids[16] = 148


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[17]= "18)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[17]= new Array();
 choices[17][0] = "la Administraci&oacute;n General del Estado";
 choices[17][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[17][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[17][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[17] = choices[17][3];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 769. Ley 40/2015";
 preguntaids[17] = 769


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[18]= new Array();
 choices[18][0] = "Veinte.";
 choices[18][1] = "Quince.";
 choices[18][2] = "Diez.";
 choices[18][3] = "Doce.";
 answers[18] = choices[18][1];
 units[18] = "1";
 comments[18] = "Id Pregunta: 264. CONSTITUCION1978";
 preguntaids[18] = 264


//  Id pregunta: 680 Año de creación de pregunta: 2016
 questions[19]= "20)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[19]= new Array();
 choices[19][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[19][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[19][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[19][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[19] = choices[19][1];
 units[19] = "14";
 comments[19] = "Id Pregunta: 680. Dependencia";
 preguntaids[19] = 680


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Qu&eacute; es la integraci&oacute;n continua?";
 choices[20]= new Array();
 choices[20][0] = "Una pr&aacute;ctica recogida en la metodolog&iacute;a M&eacute;trica V3.";
 choices[20][1] = "Un modelo inform&aacute;tico que consiste en hacer integraciones autom&aacute;ticas de un proyecto lo m&aacute;s a menudo posible para as&iacute; poder detectar fallos cuanto antes.";
 choices[20][2] = "Una metodolog&iacute;a &aacute;gil inspirada en XP y FDD encaminada a realizar un desarrollo hol&iacute;stico en todo el proceso de desarrollo de un sistema de informaci&oacute;n.";
 choices[20][3] = "Ninguna de las anteriores.";
 answers[20] = choices[20][1];
 units[20] = "92";
 comments[20] = "Id Pregunta: 701. INTEGRACION CONTINUA";
 preguntaids[20] = 701


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[21]= "22)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[21]= new Array();
 choices[21][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[21][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[21][2] = "Las Inspecciones Generales de los Servicios";
 choices[21][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[21] = choices[21][1];
 units[21] = "75";
 comments[21] = "Id Pregunta: 79. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[21] = 79


//  Id pregunta: 236 Año de creación de pregunta: 2016
 questions[22]= "23)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[22]= new Array();
 choices[22][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[22][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[22][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[22][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[22] = choices[22][3];
 units[22] = "1";
 comments[22] = "Id Pregunta: 236. CONSTITUCION1978";
 preguntaids[22] = 236


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[23]= "24)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[23]= new Array();
 choices[23][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[23][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[23][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[23][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[23] = choices[23][3];
 units[23] = "10";
 comments[23] = "Id Pregunta: 487. PRESUPUESTOS GENERALES";
 preguntaids[23] = 487


//  Id pregunta: 347 Año de creación de pregunta: 2016
 questions[24]= "25)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[24]= new Array();
 choices[24][0] = "18 miembros.";
 choices[24][1] = "Ninguna es correcta.";
 choices[24][2] = "22 miembros.";
 choices[24][3] = "21 miembros.";
 answers[24] = choices[24][1];
 units[24] = "5";
 comments[24] = "Id Pregunta: 347. UNION EUROPEA";
 preguntaids[24] = 347


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[25]= "26)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[25]= new Array();
 choices[25][0] = "B&aacute;sico";
 choices[25][1] = "Medio";
 choices[25][2] = "Alto";
 choices[25][3] = "A los niveles medio y alto";
 answers[25] = choices[25][2];
 units[25] = "35";
 comments[25] = "Id Pregunta: 62. AGE A1 2015";
 preguntaids[25] = 62


//  Id pregunta: 841 Año de creación de pregunta: 2016
 questions[26]= "27)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[26]= new Array();
 choices[26][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[26][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[26][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[26][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[26] = choices[26][0];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 841. Ley 40/2015";
 preguntaids[26] = 841


//  Id pregunta: 234 Año de creación de pregunta: 2016
 questions[27]= "28)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[27]= new Array();
 choices[27][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[27][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[27][2] = "Al Congreso de los Diputados.";
 choices[27][3] = "Al Gobierno.";
 answers[27] = choices[27][0];
 units[27] = "1";
 comments[27] = "Id Pregunta: 234. CONSTITUCION1978";
 preguntaids[27] = 234


//  Id pregunta: 478 Año de creación de pregunta: 2016
 questions[28]= "29)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[28]= new Array();
 choices[28][0] = "Al Gobierno.";
 choices[28][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[28][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[28][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[28] = choices[28][2];
 units[28] = "10";
 comments[28] = "Id Pregunta: 478. PRESUPUESTOS GENERALES";
 preguntaids[28] = 478


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[29]= new Array();
 choices[29][0] = "Ley Org&aacute;nica.";
 choices[29][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[29][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[29][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[29] = choices[29][2];
 units[29] = "1";
 comments[29] = "Id Pregunta: 203. CONSTITUCION1978";
 preguntaids[29] = 203


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[30]= "31)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[30]= new Array();
 choices[30][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[30][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[30][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[30][3] = "Todas las respuestas anteriores son correctas.";
 answers[30] = choices[30][0];
 units[30] = "45";
 comments[30] = "Id Pregunta: 600. Junta de Extremadura A1 2015";
 preguntaids[30] = 600


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[31]= new Array();
 choices[31][0] = "Ley 50/1997, del Gobierno.";
 choices[31][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[31][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[31][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[31] = choices[31][1];
 units[31] = "10";
 comments[31] = "Id Pregunta: 475. PRESUPUESTOS GENERALES";
 preguntaids[31] = 475


//  Id pregunta: 711 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[32]= new Array();
 choices[32][0] = "Ley 3/2015";
 choices[32][1] = "Ley 6/2007";
 choices[32][2] = "Ley 5/1984";
 choices[32][3] = "Ley 5/2006";
 answers[32] = choices[32][0];
 units[32] = "22";
 comments[32] = "Id Pregunta: 711. &Eacute;tica P&uacute;blica y Transparencia";
 preguntaids[32] = 711


//  Id pregunta: 858 Año de creación de pregunta: 2016
 questions[33]= "34)  Respecto de la imagen institucional de los sitios web p&uacute;blicos:";
 choices[33]= new Array();
 choices[33][0] = "La utilizaci&oacute;n de s&iacute;mbolos de imagen o logotipos propios ser&aacute; comunicada al Ministerio de Energ&iacute;a, Turismo y Agenda Digital  para facilitar el cumplimiento de la prohibici&oacute;n legal de registrar signos que los reproduzcan o imiten.";
 choices[33][1] = "Los s&iacute;mbolos y logotipos propios podr&aacute;n ser registrados como marca en el caso de que vayan a ser utilizados en el tr&aacute;fico econ&oacute;mico.";
 choices[33][2] = "Los documentos anexos alojados en p&aacute;ginas webs, que puedan ser susceptibles de ser considerados material de papeler&iacute;a, utilizar&aacute;n el logotipo propio.";
 choices[33][3] = "De acuerdo con el Real Decreto 1565/1999, con car&aacute;cter excepcional, y siempre que se acrediten razones debidamente justificadas, el Ministro de Hacienda y Funci&oacute;n P&uacute;blica y el titular del correspondiente Ministerio de adscripci&oacute;n, vinculaci&oacute;n o dependencia podr&aacute;n autorizar la utilizaci&oacute;n por determinados &oacute;rganos, Organismos aut&oacute;nomos y Servicios Comunes o Entidades Gestoras de la Seguridad Social de s&iacute;mbolos de imagen o logotipos propios junto a los s&iacute;mbolos establecidos.";
 answers[33] = choices[33][1];
 units[33] = "125";
 comments[33] = "Id Pregunta: 858. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[33] = 858


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[34]= "35)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[34]= new Array();
 choices[34][0] = "De las disposiciones favorables.";
 choices[34][1] = "De las disposiciones sancionadoras no favorables.";
 choices[34][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[34][3] = "Las respuestas b) y c) son correctas.";
 answers[34] = choices[34][3];
 units[34] = "1";
 comments[34] = "Id Pregunta: 252. CONSTITUCION1978";
 preguntaids[34] = 252


//  Id pregunta: 38 Año de creación de pregunta: 2016
 questions[35]= "36)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[35]= new Array();
 choices[35][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[35][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[35][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[35][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[35] = choices[35][3];
 units[35] = "62";
 comments[35] = "Id Pregunta: 38. AGE A1 2015";
 preguntaids[35] = 38


//  Id pregunta: 31 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qu&eacute; es MongoDB?";
 choices[36]= new Array();
 choices[36][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[36][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[36][2] = "Un sistema gestor de base de datos relacional.";
 choices[36][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[36] = choices[36][1];
 units[36] = "73";
 comments[36] = "Id Pregunta: 31. AGE A1 2015";
 preguntaids[36] = 31


//  Id pregunta: 179 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[37]= new Array();
 choices[37][0] = "Una ley orginaria.";
 choices[37][1] = "Una ley org&aacute;nica.";
 choices[37][2] = "Una ley de bases.";
 choices[37][3] = "Una ley de transferencia.";
 answers[37] = choices[37][1];
 units[37] = "1";
 comments[37] = "Id Pregunta: 179. CONSTITUCION1978";
 preguntaids[37] = 179


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[38]= "39)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[38]= new Array();
 choices[38][0] = "De un mes si el acto fuera presunto";
 choices[38][1] = "De un mes si el acto fuera expreso";
 choices[38][2] = "De un mes en cualquier caso";
 choices[38][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[38] = choices[38][1];
 units[38] = "8";
 comments[38] = "Id Pregunta: 142. Ley 39/2015, Art&iacute;culo 122";
 preguntaids[38] = 142


//  Id pregunta: 674 Año de creación de pregunta: 2016
 questions[39]= "40)  En cuanto a la Historia Cl&iacute;nica Digital del Sistema Nacional de Salud, se&ntilde;ale cual de las siguientes afirmaciones es Incorrecta:";
 choices[39]= new Array();
 choices[39][0] = "Se ha implementado por mandato legal, tanto por la Ley 16/2003 de cohesi&oacute;n y calidad del Sistema Nacional de Salud, como por la Ley 41/2002 de Autonom&iacute;a del Paciente.";
 choices[39][1] = "Permite que los profesionales sanitarios puedan acceder a los datos de salud del paciente, cuando este se encuentre desplazado fuera de su Comunidad Aut&oacute;noma de origen y requiera asistencia sanitaria.";
 choices[39][2] = "De acuerdo a su dise&ntilde;o funcional, permite acceder a la totalidad de los contenidos existentes en la Historia Cl&iacute;nica Electr&oacute;nica de las Comunidades Aut&oacute;nomas.";
 choices[39][3] = "Gracias a ella, de acuerdo al informe CORA de Febrero de 2016, ya son 25,5 millones de ciudadanos los que disponen de informes cl&iacute;nicos en el Sstema Nacional de Salud.";
 answers[39] = choices[39][2];
 units[39] = "47";
 comments[39] = "Id Pregunta: 674. Historia Cl&iacute;nica Digital";
 preguntaids[39] = 674


//  Id pregunta: 836 Año de creación de pregunta: 2016
 questions[40]= "41)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[40]= new Array();
 choices[40][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[40][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[40][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[40][3] = "Todas son correctas.";
 answers[40] = choices[40][3];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 836. Ley 40/2015";
 preguntaids[40] = 836


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[41]= "42)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[41]= new Array();
 choices[41][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[41][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[41][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[41][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[41] = choices[41][2];
 units[41] = "26";
 comments[41] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";
 preguntaids[41] = 99


//  Id pregunta: 678 Año de creación de pregunta: 2016
 questions[42]= "43)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[42]= new Array();
 choices[42][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[42][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[42][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[42][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[42] = choices[42][1];
 units[42] = "14";
 comments[42] = "Id Pregunta: 678. Dependencia";
 preguntaids[42] = 678


//  Id pregunta: 606 Año de creación de pregunta: 2016
 questions[43]= "44)  ITIL v3, define:";
 choices[43]= new Array();
 choices[43][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[43][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[43][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[43][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[43] = choices[43][0];
 units[43] = "101";
 comments[43] = "Id Pregunta: 606. Junta de Extremadura A1 2015";
 preguntaids[43] = 606


//  Id pregunta: 744 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, se entiende por emprendedor:";
 choices[44]= new Array();
 choices[44][0] = "Aquellas personas f&iacute;sicas que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[44][1] = "Aquellas personas independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar una actividad econ&oacute;mica productiva.";
 choices[44][2] = "Aquellas personas, independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[44][3] = "Ninguna de las anteriores";
 answers[44] = choices[44][2];
 units[44] = "23";
 comments[44] = "Id Pregunta: 744. Direcci&oacute;n p&uacute;blica";
 preguntaids[44] = 744


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[45]= "46)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[45]= new Array();
 choices[45][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[45][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[45][2] = "el Subdirector General que el Delegado designe";
 choices[45][3] = "el Secretario de Estado";
 answers[45] = choices[45][0];
 units[45] = "4, 7, 8, 9";
 comments[45] = "Id Pregunta: 822. Ley 40/2015";
 preguntaids[45] = 822


//  Id pregunta: 335 Año de creación de pregunta: 2016
 questions[46]= "47)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[46]= new Array();
 choices[46][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[46][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[46][2] = "Son incompatibles ambas actas de diputado.";
 choices[46][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[46] = choices[46][2];
 units[46] = "5";
 comments[46] = "Id Pregunta: 335. UNION EUROPEA";
 preguntaids[46] = 335


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[47]= new Array();
 choices[47][0] = "Cuatro.";
 choices[47][1] = "Ninguno.";
 choices[47][2] = "Dos.";
 choices[47][3] = "Seis.";
 answers[47] = choices[47][2];
 units[47] = "1";
 comments[47] = "Id Pregunta: 211. CONSTITUCION1978";
 preguntaids[47] = 211


//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[48]= "49)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[48]= new Array();
 choices[48][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[48][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[48][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[48][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[48] = choices[48][2];
 units[48] = "85";
 comments[48] = "Id Pregunta: 620. Junta de Extremadura A1 2015";
 preguntaids[48] = 620


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[49]= "50)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[49]= new Array();
 choices[49][0] = "El Presidente y su gabinete.";
 choices[49][1] = "El Presidente y sus Ministros.";
 choices[49][2] = "El Rey y el Presidente.";
 choices[49][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[49] = choices[49][2];
 units[49] = "1";
 comments[49] = "Id Pregunta: 257. CONSTITUCION1978";
 preguntaids[49] = 257


//  Id pregunta: 724 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[50]= new Array();
 choices[50][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[50][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[50][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[50][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[50] = choices[50][3];
 units[50] = "34, 84";
 comments[50] = "Id Pregunta: 724. Metodologias &aacute;giles";
 preguntaids[50] = 724


//  Id pregunta: 746 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios de la Ley de Garant&iacute;a de la Unidad de Mercado?";
 choices[51]= new Array();
 choices[51][0] = "No discriminaci&oacute;n";
 choices[51][1] = "Cooperaci&oacute;n";
 choices[51][2] = "Colaboraci&oacute;n";
 choices[51][3] = "Todos los anteriores son principios de la Ley de Garant&iacute;a de la Unidad de Mercado";
 answers[51] = choices[51][2];
 units[51] = "23";
 comments[51] = "Id Pregunta: 746. Direcci&oacute;n p&uacute;blica";
 preguntaids[51] = 746


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[52]= new Array();
 choices[52][0] = "La Comisi&oacute;n Permanente.";
 choices[52][1] = "El Presidente.";
 choices[52][2] = "El Pleno.";
 choices[52][3] = "El Vicepresidente.";
 answers[52] = choices[52][3];
 units[52] = "1";
 comments[52] = "Id Pregunta: 261. CONSTITUCION1978";
 preguntaids[52] = 261


//  Id pregunta: 851 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Qu&eacute; m&eacute;todo de replicaci&oacute;n remota entre sistemas de almacenamiento se ve m&aacute;s afectada por la latencia en el caso de largas distancias?";
 choices[53]= new Array();
 choices[53][0] = "As&iacute;ncrona.";
 choices[53][1] = "Log-shipping.";
 choices[53][2] = "Disk buffering.";
 choices[53][3] = "S&iacute;ncrona.";
 answers[53] = choices[53][3];
 units[53] = "53";
 comments[53] = "Id Pregunta: 851. Xunta de Galicia 2015";
 preguntaids[53] = 851


//  Id pregunta: 855 Año de creación de pregunta: 2016
 questions[54]= "55)  Indique cu&aacute;l de las siguientes funciones relativas a una PKI es INCORRECTA:";
 choices[54]= new Array();
 choices[54][0] = "Garantiza mediante el uso de certificados digitales el no repudio, integridad, autenticaci&oacute;n y la publicaci&oacute;n de los datos transmitidos.";
 choices[54][1] = "Los componentes de una PKI para la administraci&oacute;n de los ccertificados son: software, hardware, personas, pol&iacute;ticas, procedimientos.";
 choices[54][2] = "Entre las funciones de una PKI se encuentra la revocaci&oacute;n de claves.";
 choices[54][3] = "Entre las funciones de una PKI se encuentran la generaci&oacute;n, recuperaci&oacute;n y renovaci&oacute;n de claves.";
 answers[54] = choices[54][0];
 units[54] = "76";
 comments[54] = "Id Pregunta: 855. Xunta de Galicia 2015";
 preguntaids[54] = 855


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[55]= "56)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[55]= new Array();
 choices[55][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[55][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[55][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[55][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[55] = choices[55][2];
 units[55] = "22";
 comments[55] = "Id Pregunta: 97. AGE A1 2015";
 preguntaids[55] = 97


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[56]= "57)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[56]= new Array();
 choices[56][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[56][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[56][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[56][3] = "Todas las anteriores son correctas.";
 answers[56] = choices[56][3];
 units[56] = "47";
 comments[56] = "Id Pregunta: 676. Receta electr&oacute;nica";
 preguntaids[56] = 676


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[57]= "58)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[57]= new Array();
 choices[57][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[57][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[57][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[57][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[57] = choices[57][3];
 units[57] = "7";
 comments[57] = "Id Pregunta: 27. AGE A1 2015";
 preguntaids[57] = 27


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[58]= "59)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[58]= new Array();
 choices[58][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[58][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[58][2] = "A partir del 1 de enero de 2015";
 choices[58][3] = "A partir del 1 de julio de 2016";
 answers[58] = choices[58][1];
 units[58] = "77";
 comments[58] = "Id Pregunta: 692. Art&iacute;culo 52 del Reglamento 910/2014";
 preguntaids[58] = 692


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[59]= "60)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[59]= new Array();
 choices[59][0] = "personalidad jur&iacute;dica propia";
 choices[59][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[59][2] = "personalidad jur&iacute;dica plena";
 choices[59][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[59] = choices[59][1];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 774. Ley 40/2015";
 preguntaids[59] = 774


//  Id pregunta: 501 Año de creación de pregunta: 2016
 questions[60]= "61)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[60]= new Array();
 choices[60][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[60][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[60][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[60][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[60] = choices[60][0];
 units[60] = "10";
 comments[60] = "Id Pregunta: 501. PRESUPUESTOS GENERALES";
 preguntaids[60] = 501


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[61]= "62)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[61]= new Array();
 choices[61][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[61][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[61][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[61][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[61] = choices[61][0];
 units[61] = "1";
 comments[61] = "Id Pregunta: 256. CONSTITUCION1978";
 preguntaids[61] = 256


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[62]= "63)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[62]= new Array();
 choices[62][0] = "El Presidente del Consejo Europeo.";
 choices[62][1] = "La Comisi&oacute;n.";
 choices[62][2] = "El Consejo.";
 choices[62][3] = "El Parlamento Europeo.";
 answers[62] = choices[62][2];
 units[62] = "5";
 comments[62] = "Id Pregunta: 328. UNION EUROPEA";
 preguntaids[62] = 328


//  Id pregunta: 157 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[63]= new Array();
 choices[63][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[63][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[63][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[63][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[63] = choices[63][0];
 units[63] = "7";
 comments[63] = "Id Pregunta: 157. Ley 39/2015, Art&iacute;culo 45";
 preguntaids[63] = 157


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[64]= "65)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[64]= new Array();
 choices[64][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[64][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[64][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[64][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[64] = choices[64][1];
 units[64] = "5";
 comments[64] = "Id Pregunta: 298. UNION EUROPEA";
 preguntaids[64] = 298


//  Id pregunta: 572 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[65]= new Array();
 choices[65][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[65][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[65][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[65][3] = "La tasa de desempleo ronda el 20%";
 answers[65] = choices[65][2];
 units[65] = "12";
 comments[65] = "Id Pregunta: 572. Modelo econ&oacute;mico";
 preguntaids[65] = 572


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[66]= "67)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[66]= new Array();
 choices[66][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[66][1] = "los Subdelegados del Gobierno en las provincias";
 choices[66][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[66][3] = "a y b son correctas";
 answers[66] = choices[66][3];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 790. Ley 40/2015";
 preguntaids[66] = 790


//  Id pregunta: 16 Año de creación de pregunta: 2016
 questions[67]= "68)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[67]= new Array();
 choices[67][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[67][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[67][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[67][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[67] = choices[67][3];
 units[67] = "19";
 comments[67] = "Id Pregunta: 16. AGE A1 2015";
 preguntaids[67] = 16


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[68]= "69)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[68]= new Array();
 choices[68][0] = "El nombre y el tipo de correspondencia.";
 choices[68][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[68][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[68][3] = "El nombre y el grado.";
 answers[68] = choices[68][1];
 units[68] = "85";
 comments[68] = "Id Pregunta: 636. Junta de Extremadura A1 2015";
 preguntaids[68] = 636


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[69]= "70)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[69]= new Array();
 choices[69][0] = "De los interesados en el procedimiento";
 choices[69][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[69][2] = "Disposiciones generales";
 choices[69][3] = "De los actos administrativos";
 answers[69] = choices[69][2];
 units[69] = "7";
 comments[69] = "Id Pregunta: 522. LEY 39/2015";
 preguntaids[69] = 522


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[70]= "71)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[70]= new Array();
 choices[70][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[70][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[70][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[70][3] = "Todas las respuestas son correctas.";
 answers[70] = choices[70][3];
 units[70] = "50";
 comments[70] = "Id Pregunta: 622. Junta de Extremadura A1 2015";
 preguntaids[70] = 622


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[71]= "72)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[71]= new Array();
 choices[71][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[71][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[71][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[71][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[71] = choices[71][1];
 units[71] = "7";
 comments[71] = "Id Pregunta: 517. LEY 39/2015";
 preguntaids[71] = 517


//  Id pregunta: 781 Año de creación de pregunta: 2016
 questions[72]= "73)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[72]= new Array();
 choices[72][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[72][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[72][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[72][3] = "todas son correctas";
 answers[72] = choices[72][3];
 units[72] = "4, 7, 8, 9";
 comments[72] = "Id Pregunta: 781. Ley 40/2015";
 preguntaids[72] = 781


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[73]= "74)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[73]= new Array();
 choices[73][0] = "Burn-up chart";
 choices[73][1] = "Arquitectural Skype";
 choices[73][2] = "Burn-down chart";
 choices[73][3] = "Definition of done";
 answers[73] = choices[73][1];
 units[73] = "34, 84";
 comments[73] = "Id Pregunta: 731. Metodologias &aacute;giles";
 preguntaids[73] = 731


//  Id pregunta: 645 Año de creación de pregunta: 2016
 questions[74]= "75)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[74]= new Array();
 choices[74][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[74][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[74][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[74][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[74] = choices[74][2];
 units[74] = "85";
 comments[74] = "Id Pregunta: 645. Junta de Extremadura A1 2015";
 preguntaids[74] = 645


