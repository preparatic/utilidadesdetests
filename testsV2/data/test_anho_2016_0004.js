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

//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[0]= "1)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[0]= new Array();
 choices[0][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[0][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[0][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[0][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[0] = choices[0][1];
 units[0] = "5";
 comments[0] = "Id Pregunta: 298. UNION EUROPEA";
 preguntaids[0] = 298


//  Id pregunta: 596 Año de creación de pregunta: 2016
 questions[1]= "2)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[1]= new Array();
 choices[1][0] = "Seguridad Social y AEAT";
 choices[1][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[1][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[1][3] = "Todos los anteriores";
 answers[1] = choices[1][3];
 units[1] = "19";
 comments[1] = "Id Pregunta: 596. Estrategia TIC";
 preguntaids[1] = 596


//  Id pregunta: 699 Año de creación de pregunta: 2016
 questions[2]= "3)  Cu&aacute;l de las siguientes afirmaciones relativas a Apache Jenkins es falsa";
 choices[2]= new Array();
 choices[2][0] = "Est&aacute; desarrollado en Java.";
 choices[2][1] = "Fue un proyecto escindido de Hudson tras una disputa con Oracle.";
 choices[2][2] = "Se considera software libre bajo la licencia EUPL.";
 choices[2][3] = "Todas las afirmaciones son correctas.";
 answers[2] = choices[2][2];
 units[2] = "92";
 comments[2] = "Id Pregunta: 699. INTEGRACION CONTINUA";
 preguntaids[2] = 699


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[3]= new Array();
 choices[3][0] = "117.5";
 choices[3][1] = "117.1";
 choices[3][2] = "116";
 choices[3][3] = "15";
 answers[3] = choices[3][0];
 units[3] = "1";
 comments[3] = "Id Pregunta: 260. CONSTITUCION1978";
 preguntaids[3] = 260


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[4]= "5)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[4]= new Array();
 choices[4][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[4][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[4][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[4][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[4] = choices[4][1];
 units[4] = "22";
 comments[4] = "Id Pregunta: 278. LEY DE TRANSPARENCIA";
 preguntaids[4] = 278


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale la respuesta correcta:";
 choices[5]= new Array();
 choices[5][0] = "corresponde a los &oacute;rganos superiores establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[5][1] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[5][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[5][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[5] = choices[5][0];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 797. Ley 40/2015";
 preguntaids[5] = 797


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[6]= new Array();
 choices[6][0] = "Crecimiento inteligente.";
 choices[6][1] = "Crecimiento inclusivo.";
 choices[6][2] = "Crecimiento sostenible.";
 choices[6][3] = "Crecimiento integrador.";
 answers[6] = choices[6][1];
 units[6] = "5";
 comments[6] = "Id Pregunta: 283. UNION EUROPEA";
 preguntaids[6] = 283


//  Id pregunta: 275 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[7]= new Array();
 choices[7][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[7][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[7][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[7][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[7] = choices[7][2];
 units[7] = "22";
 comments[7] = "Id Pregunta: 275. LEY DE TRANSPARENCIA";
 preguntaids[7] = 275


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban?:";
 choices[8]= new Array();
 choices[8][0] = "Se definen iteraciones";
 choices[8][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[8][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[8][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[8] = choices[8][1];
 units[8] = "34, 84";
 comments[8] = "Id Pregunta: 732. Metodologias &aacute;giles";
 preguntaids[8] = 732


//  Id pregunta: 144 Año de creación de pregunta: 2016
 questions[9]= "10)  Sobre el recurso de reposici&oacute;n:";
 choices[9]= new Array();
 choices[9][0] = "Cabe interponerlo ante los actos administrativos que pongan fin a la v&iacute;a administrativa";
 choices[9][1] = "Es obligatorio interponerlo antes de impugnar un acto administrativo ante el orden jurisdiccional contencioso-administrativo";
 choices[9][2] = "Ha desaparecido en la Ley 39/2015";
 choices[9][3] = "El &oacute;rgano competente para resolverlo es el superior jer&aacute;rquico al que dict&oacute; el acto administrativo a recurrir";
 answers[9] = choices[9][0];
 units[9] = "8";
 comments[9] = "Id Pregunta: 144. Ley 39/2015, Art&iacute;culo 123";
 preguntaids[9] = 144


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[10]= "11)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[10]= new Array();
 choices[10][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[10][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[10][2] = "el sector p&uacute;blico institucional";
 choices[10][3] = "el sector privado corporativo";
 answers[10] = choices[10][3];
 units[10] = "7";
 comments[10] = "Id Pregunta: 515. LEY 39/2015";
 preguntaids[10] = 515


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[11]= "12)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[11]= new Array();
 choices[11][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[11][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[11][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[11][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[11] = choices[11][3];
 units[11] = "44";
 comments[11] = "Id Pregunta: 17. AGE A1 2015";
 preguntaids[11] = 17


//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[12]= "13)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[12]= new Array();
 choices[12][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[12][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[12][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[12][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[12] = choices[12][2];
 units[12] = "19";
 comments[12] = "Id Pregunta: 170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";
 preguntaids[12] = 170


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[13]= "14)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[13]= new Array();
 choices[13][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[13][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[13][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[13][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[13] = choices[13][2];
 units[13] = "14";
 comments[13] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";
 preguntaids[13] = 391


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[14]= new Array();
 choices[14][0] = "Versi&oacute;n digital prioritaria.";
 choices[14][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[14][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[14][3] = "Apertura y transparencia.";
 answers[14] = choices[14][0];
 units[14] = "5";
 comments[14] = "Id Pregunta: 287. UNION EUROPEA";
 preguntaids[14] = 287


//  Id pregunta: 566 Año de creación de pregunta: 2016
 questions[15]= "16)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[15]= new Array();
 choices[15][0] = "Los ocupados y los parados activos";
 choices[15][1] = "S&oacute;lo los ocupados";
 choices[15][2] = "Los ocupados y los inactivos";
 choices[15][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[15] = choices[15][0];
 units[15] = "12";
 comments[15] = "Id Pregunta: 566. Modelo econ&oacute;mico";
 preguntaids[15] = 566


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[16]= "17)  Componen la Comisi&oacute;n Europea:";
 choices[16]= new Array();
 choices[16][0] = "Un Comisario por cada Estado miembro.";
 choices[16][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[16][2] = "Dos Comisarios por cada Estado miembro.";
 choices[16][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[16] = choices[16][0];
 units[16] = "5";
 comments[16] = "Id Pregunta: 306. UNION EUROPEA";
 preguntaids[16] = 306


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[17]= "18)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[17]= new Array();
 choices[17][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[17][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[17][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[17][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[17] = choices[17][0];
 units[17] = "1";
 comments[17] = "Id Pregunta: 226. CONSTITUCION1978";
 preguntaids[17] = 226


//  Id pregunta: 615 Año de creación de pregunta: 2016
 questions[18]= "19)  El Modelo de Referencia de Interconexi&oacute;n de Sistemas Abiertos (OSI) consta de siete niveles. Se&ntilde;ala cu&aacute;l de los principios que se aplicaron para llevar a cabo esta divisi&oacute;n es falso:";
 choices[18]= new Array();
 choices[18][0] = "No se deben crear demasiados niveles de manera que la tarea de describir e integrar &eacute;stos fuera m&aacute;s dif&iacute;cil de lo necesario.";
 choices[18][1] = "Aunque se requiera un nivel de abstracci&oacute;n diferente en el manejo de los datos, debe usarse un nivel ya existente.";
 choices[18][2] = "Cada nivel debe realizar unas funciones bien definidas.";
 choices[18][3] = "Crear para cada nivel interfases con el nivel superior e inferior &uacute;nicamente.";
 answers[18] = choices[18][1];
 units[18] = "48";
 comments[18] = "Id Pregunta: 615. Junta de Extremadura A1 2015";
 preguntaids[18] = 615


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[19]= new Array();
 choices[19][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[19][1] = "Solamente el Congreso.";
 choices[19][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[19][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[19] = choices[19][0];
 units[19] = "1";
 comments[19] = "Id Pregunta: 176. CONSTITUCION1978";
 preguntaids[19] = 176


//  Id pregunta: 217 Año de creación de pregunta: 2016
 questions[20]= "21)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[20]= new Array();
 choices[20][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[20][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[20][2] = "Son refrendados por el Rey.";
 choices[20][3] = "Son convocados por el Presidente del Gobierno.";
 answers[20] = choices[20][0];
 units[20] = "1";
 comments[20] = "Id Pregunta: 217. CONSTITUCION1978";
 preguntaids[20] = 217


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[21]= "22)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[21]= new Array();
 choices[21][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[21][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[21][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[21][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[21] = choices[21][1];
 units[21] = "76";
 comments[21] = "Id Pregunta: 46. AGE A1 2015";
 preguntaids[21] = 46


//  Id pregunta: 450 Año de creación de pregunta: 2016
 questions[22]= "23)  La partida presupuestaria es equivalente a...";
 choices[22]= new Array();
 choices[22][0] = "El sujeto que realiza el gasto";
 choices[22][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[22][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[22][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[22] = choices[22][3];
 units[22] = "10";
 comments[22] = "Id Pregunta: 450. PRESUPUESTOS GENERALES";
 preguntaids[22] = 450


//  Id pregunta: 469 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[23]= new Array();
 choices[23][0] = "Tres meses.";
 choices[23][1] = "Nueve meses.";
 choices[23][2] = "Cuatro meses.";
 choices[23][3] = "Seis meses.";
 answers[23] = choices[23][0];
 units[23] = "10";
 comments[23] = "Id Pregunta: 469. PRESUPUESTOS GENERALES";
 preguntaids[23] = 469


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[24]= "25)  En el lenguaje de modelado UML :";
 choices[24]= new Array();
 choices[24][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[24][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[24][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[24][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[24] = choices[24][2];
 units[24] = "89";
 comments[24] = "Id Pregunta: 3. AGE A1 2015";
 preguntaids[24] = 3


//  Id pregunta: 241 Año de creación de pregunta: 2016
 questions[25]= "26)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[25]= new Array();
 choices[25][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[25][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[25][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[25][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[25] = choices[25][0];
 units[25] = "1";
 comments[25] = "Id Pregunta: 241. CONSTITUCION1978";
 preguntaids[25] = 241


//  Id pregunta: 444 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[26]= new Array();
 choices[26][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[26][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[26][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[26][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[26] = choices[26][1];
 units[26] = "43";
 comments[26] = "Id Pregunta: 444. SERVICIOS COMUNES";
 preguntaids[26] = 444


//  Id pregunta: 197 Año de creación de pregunta: 2016
 questions[27]= "28)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[27]= new Array();
 choices[27][0] = "Establecer tributos.";
 choices[27][1] = "Desarrollar lo establecido en una Ley.";
 choices[27][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[27][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[27] = choices[27][0];
 units[27] = "1";
 comments[27] = "Id Pregunta: 197. CONSTITUCION1978";
 preguntaids[27] = 197


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[28]= "29)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[28]= new Array();
 choices[28][0] = "Al Gobierno.";
 choices[28][1] = "A las Cortes Generales.";
 choices[28][2] = "Al Poder Judicial.";
 choices[28][3] = "Al Congreso de los Diputados.";
 answers[28] = choices[28][0];
 units[28] = "1";
 comments[28] = "Id Pregunta: 195. CONSTITUCION1978";
 preguntaids[28] = 195


//  Id pregunta: 462 Año de creación de pregunta: 2016
 questions[29]= "30)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[29]= new Array();
 choices[29][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[29][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[29][2] = "La normativa reguladora de cada derecho.";
 choices[29][3] = "Ley 50/1997, del Gobierno.";
 answers[29] = choices[29][2];
 units[29] = "10";
 comments[29] = "Id Pregunta: 462. PRESUPUESTOS GENERALES";
 preguntaids[29] = 462


//  Id pregunta: 259 Año de creación de pregunta: 2016
 questions[30]= "31)  La iniciativa legislativa corresponde:";
 choices[30]= new Array();
 choices[30][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[30][1] = "Al rey y al Gobierno.";
 choices[30][2] = "Al Congreso, al Senado y al Rey.";
 choices[30][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[30] = choices[30][3];
 units[30] = "1";
 comments[30] = "Id Pregunta: 259. CONSTITUCION1978";
 preguntaids[30] = 259


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[31]= "32)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[31]= new Array();
 choices[31][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[31][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[31][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[31][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[31] = choices[31][2];
 units[31] = "7";
 comments[31] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";
 preguntaids[31] = 148


//  Id pregunta: 28 Año de creación de pregunta: 2016
 questions[32]= "33)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[32]= new Array();
 choices[32][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[32][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[32][2] = "Crea una copia del proceso que hace la llamada.";
 choices[32][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[32] = choices[32][2];
 units[32] = "57";
 comments[32] = "Id Pregunta: 28. AGE A1 2015";
 preguntaids[32] = 28


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[33]= "34)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[33]= new Array();
 choices[33][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[33][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[33][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[33][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[33] = choices[33][2];
 units[33] = "26";
 comments[33] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";
 preguntaids[33] = 99


//  Id pregunta: 767 Año de creación de pregunta: 2016
 questions[34]= "35)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[34]= new Array();
 choices[34][0] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo, cuando ejerzan potestades administrativas";
 choices[34][1] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, ni siquiera, cuando ejerzan potestades administrativas";
 choices[34][2] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[34][3] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, excepto, cuando ejerzan potestades administrativas";
 answers[34] = choices[34][2];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 767. Ley 40/2015";
 preguntaids[34] = 767


//  Id pregunta: 457 Año de creación de pregunta: 2016
 questions[35]= "36)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[35]= new Array();
 choices[35][0] = "En qu&eacute; nos gastamos el dinero";
 choices[35][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[35][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[35][3] = "Qui&eacute;n se gasta el dinero.";
 answers[35] = choices[35][0];
 units[35] = "10";
 comments[35] = "Id Pregunta: 457. PRESUPUESTOS GENERALES";
 preguntaids[35] = 457


//  Id pregunta: 460 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[36]= new Array();
 choices[36][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[36][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[36][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[36][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[36] = choices[36][3];
 units[36] = "10";
 comments[36] = "Id Pregunta: 460. PRESUPUESTOS GENERALES";
 preguntaids[36] = 460


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[37]= new Array();
 choices[37][0] = "El Parlamento y el Consejo.";
 choices[37][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[37][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[37][3] = "La Comisi&oacute;n y el Consejo.";
 answers[37] = choices[37][1];
 units[37] = "5";
 comments[37] = "Id Pregunta: 357. UNION EUROPEA";
 preguntaids[37] = 357


//  Id pregunta: 709 Año de creación de pregunta: 2016
 questions[38]= "39)  En base a la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno se&ntilde;ale la afirmaci&oacute;n verdadera:";
 choices[38]= new Array();
 choices[38][0] = "El derecho de acceso a la informaci&oacute;n p&uacute;blica supone, entre otros, que el sujeto obligado a ello publique de forma peri&oacute;dica y actualizada la informaci&oacute;n cuyo conocimiento sea relevante para garantizar la transparencia de su actividad.";
 choices[38][1] = "Las entidades privadas no est&aacute;n sujetas a obligaciones de transparencia seg&uacute;n la Ley 19/2013.";
 choices[38][2] = "Se admitir&aacute;n a tr&aacute;mite, sin excepci&oacute;n, todas las solicitudes de acceso a la informaci&oacute;n por parte de los ciudadanos.";
 choices[38][3] = "El cumplimiento por la Administraci&oacute;n General del Estado de las obligaciones de publicidad activa ser&aacute; objeto de control por parte del CTBG.";
 answers[38] = choices[38][3];
 units[38] = "22";
 comments[38] = "Id Pregunta: 709. Ley de transparencia";
 preguntaids[38] = 709


//  Id pregunta: 451 Año de creación de pregunta: 2016
 questions[39]= "40)  El cr&eacute;dito presupuestario es...";
 choices[39]= new Array();
 choices[39][0] = "El sujeto que realiza el gasto";
 choices[39][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[39][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[39][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[39] = choices[39][2];
 units[39] = "10";
 comments[39] = "Id Pregunta: 451. PRESUPUESTOS GENERALES";
 preguntaids[39] = 451


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[40]= "41)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[40]= new Array();
 choices[40][0] = "La Ley Org&aacute;nica 2/2011";
 choices[40][1] = "La Ley Org&aacute;nica 2/2012";
 choices[40][2] = "La Ley Org&aacute;nica 3/2012";
 choices[40][3] = "La Ley Org&aacute;nica 2/2002";
 answers[40] = choices[40][1];
 units[40] = "12";
 comments[40] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";
 preguntaids[40] = 138


//  Id pregunta: 294 Año de creación de pregunta: 2016
 questions[41]= "42)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[41]= new Array();
 choices[41][0] = "Al Consejo Europeo.";
 choices[41][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[41][2] = "A la Comisi&oacute;n Europea.";
 choices[41][3] = "Al Parlamento Europeo.";
 answers[41] = choices[41][2];
 units[41] = "5";
 comments[41] = "Id Pregunta: 294. UNION EUROPEA";
 preguntaids[41] = 294


//  Id pregunta: 571 Año de creación de pregunta: 2016
 questions[42]= "43)  El sector Servicios NO incluye:";
 choices[42]= new Array();
 choices[42][0] = "El Comercio";
 choices[42][1] = "Los Transportes";
 choices[42][2] = "La Energ&iacute;a";
 choices[42][3] = "Las Comunicaciones";
 answers[42] = choices[42][2];
 units[42] = "12";
 comments[42] = "Id Pregunta: 571. Modelo econ&oacute;mico";
 preguntaids[42] = 571


//  Id pregunta: 246 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[43]= new Array();
 choices[43][0] = "Dos Cap&iacute;tulos.";
 choices[43][1] = "Tres Cap&iacute;tulos.";
 choices[43][2] = "Un Cap&iacute;tulo.";
 choices[43][3] = "Cuatro Cap&iacute;tulos.";
 answers[43] = choices[43][1];
 units[43] = "1";
 comments[43] = "Id Pregunta: 246. CONSTITUCION1978";
 preguntaids[43] = 246


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[44]= "45)  El Presupuesto por programas sirve para saber...";
 choices[44]= new Array();
 choices[44][0] = "En qu&eacute; nos gastamos el dinero";
 choices[44][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[44][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[44][3] = "Qui&eacute;n se gasta el dinero";
 answers[44] = choices[44][2];
 units[44] = "10";
 comments[44] = "Id Pregunta: 456. PRESUPUESTOS GENERALES";
 preguntaids[44] = 456


//  Id pregunta: 164 Año de creación de pregunta: 2016
 questions[45]= "46)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[45]= new Array();
 choices[45][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[45][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[45][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[45][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[45] = choices[45][1];
 units[45] = "19";
 comments[45] = "Id Pregunta: 164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";
 preguntaids[45] = 164


//  Id pregunta: 693 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los contenidos de los certificados cualificados de firma electr&oacute;nica seg&uacute;n el Reglamento (UE) 910/2014";
 choices[46]= new Array();
 choices[46][0] = "El nombre del firmante o un seudo&#769;nimo";
 choices[46][1] = "Los datos de validacio&#769;n de la firma electro&#769;nica";
 choices[46][2] = "La firma electro&#769;nica cualificada o el sello electro&#769;nico cualificado del prestador de servicios de confianza expedidor";
 choices[46][3] = "La localizacio&#769;n de los servicios que se pueden utilizar para consultar el estado de validez del certificado";
 answers[46] = choices[46][2];
 units[46] = "77";
 comments[46] = "Id Pregunta: 693. Anexo I del Reglamento 910/2014";
 preguntaids[46] = 693


//  Id pregunta: 369 Año de creación de pregunta: 2016
 questions[47]= "48)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[47]= new Array();
 choices[47][0] = "Son actos individuales no normativos.";
 choices[47][1] = "Poseen alcance general.";
 choices[47][2] = "Son actos normativos.";
 choices[47][3] = "No son obligatorias.";
 answers[47] = choices[47][0];
 units[47] = "5";
 comments[47] = "Id Pregunta: 369. UNION EUROPEA";
 preguntaids[47] = 369


//  Id pregunta: 591 Año de creación de pregunta: 2016
 questions[48]= "49)  Son servicios declarados compartidos:";
 choices[48]= new Array();
 choices[48][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[48][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[48][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[48][3] = "Todos los anteriores";
 answers[48] = choices[48][3];
 units[48] = "19";
 comments[48] = "Id Pregunta: 591. Estrategia TIC";
 preguntaids[48] = 591


//  Id pregunta: 427 Año de creación de pregunta: 2016
 questions[49]= "50)  En las bases de los concursos para la provisi&oacute;n de puestos de trabajo se computar&aacute;, a los efectos de valoraci&oacute;n del trabajo desarrollado y de los correspondientes m&eacute;ritos, el tiempo que las personas candidatas hayan permanecido:";
 choices[49]= new Array();
 choices[49][0] = "En r&eacute;gimen de excedencias, reducciones de jornada, permiso de maternidad o permiso de paternidad.";
 choices[49][1] = "En el extranjero.";
 choices[49][2] = "Ninguna es correcta.";
 choices[49][3] = "Ambas son correctas.";
 answers[49] = choices[49][0];
 units[49] = "14";
 comments[49] = "Id Pregunta: 427. POLITICAS DE IGUALDAD";
 preguntaids[49] = 427


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[50]= new Array();
 choices[50][0] = "El Tratado de Lisboa";
 choices[50][1] = "El Tratado de Amsterdam";
 choices[50][2] = "El Tratado de Niza";
 choices[50][3] = "El Acta &Uacute;nica Europea";
 answers[50] = choices[50][1];
 units[50] = "15";
 comments[50] = "Id Pregunta: 115. ";
 preguntaids[50] = 115


//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[51]= "52)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[51]= new Array();
 choices[51][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[51][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[51][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[51][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[51] = choices[51][2];
 units[51] = "85";
 comments[51] = "Id Pregunta: 620. Junta de Extremadura A1 2015";
 preguntaids[51] = 620


//  Id pregunta: 478 Año de creación de pregunta: 2016
 questions[52]= "53)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[52]= new Array();
 choices[52][0] = "Al Gobierno.";
 choices[52][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[52][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[52][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[52] = choices[52][2];
 units[52] = "10";
 comments[52] = "Id Pregunta: 478. PRESUPUESTOS GENERALES";
 preguntaids[52] = 478


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[53]= "54)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[53]= new Array();
 choices[53][0] = "Subgrupo A1";
 choices[53][1] = "Subgrupo A2";
 choices[53][2] = "Subgrupo B";
 choices[53][3] = "Subgrupo C1";
 answers[53] = choices[53][0];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 806. Ley 40/2015";
 preguntaids[53] = 806


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[54]= "55)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[54]= new Array();
 choices[54][0] = "la poblaci&oacute;n del territorio";
 choices[54][1] = "el volumen de gesti&oacute;n";
 choices[54][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[54][3] = "todas son correctas";
 answers[54] = choices[54][3];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 816. Ley 40/2015";
 preguntaids[54] = 816


//  Id pregunta: 672 Año de creación de pregunta: 2016
 questions[55]= "56)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[55]= new Array();
 choices[55][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[55][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[55][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[55][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[55] = choices[55][1];
 units[55] = "7";
 comments[55] = "Id Pregunta: 672. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[55] = 672


//  Id pregunta: 755 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Qui&eacute;n realiza el seguimiento peri&oacute;dico del cumplimiento de los objetivos de la Agenda Digital para Espa&ntilde;a?";
 choices[56]= new Array();
 choices[56][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital (SGAD)";
 choices[56][1] = "La Asociaci&oacute;n Espa&ntilde;ola de Normalizaci&oacute;n y Certificaci&oacute;n (AENOR)";
 choices[56][2] = "El Observatorio Nacional de Telecomunicaciones y Sociedad de la Informaci&oacute;n (ONTSI)";
 choices[56][3] = "El Observatorio de Administraci&oacute;n Electr&oacute;nica (OBSAE)";
 answers[56] = choices[56][2];
 units[56] = "19";
 comments[56] = "Id Pregunta: 755. Agenda Digital para Espa&ntilde;a";
 preguntaids[56] = 755


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[57]= "58)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[57]= new Array();
 choices[57][0] = "A los cinco a&ntilde;os.";
 choices[57][1] = "A los dos a&ntilde;os.";
 choices[57][2] = "A los tres a&ntilde;os.";
 choices[57][3] = "A los cuatro a&ntilde;os.";
 answers[57] = choices[57][0];
 units[57] = "10";
 comments[57] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";
 preguntaids[57] = 492


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[58]= "59)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[58]= new Array();
 choices[58][0] = "Los Derechos y Deberes fundamentales.";
 choices[58][1] = "La Corona.";
 choices[58][2] = "El Poder Judicial.";
 choices[58][3] = "Las Cortes Generales.";
 answers[58] = choices[58][2];
 units[58] = "1";
 comments[58] = "Id Pregunta: 267. CONSTITUCION1978";
 preguntaids[58] = 267


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;les son las caracter&iacute;sticas del sprint 0 en SCRUM?";
 choices[59]= new Array();
 choices[59][0] = "Se dejan listos los entornos de desarrollo";
 choices[59][1] = "Se trabaja en el product backlog, dejando listos los product backlog &iacute;tems priorizados y estimados";
 choices[59][2] = "Se hace una previsi&oacute;n del reparto de historias de usuario por iteraci&oacute;n";
 choices[59][3] = "Todas las anteriores son correctas";
 answers[59] = choices[59][3];
 units[59] = "34, 84";
 comments[59] = "Id Pregunta: 725. Metodologias &aacute;giles";
 preguntaids[59] = 725


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[60]= "61)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[60]= new Array();
 choices[60][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[60][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[60][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[60][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[60] = choices[60][1];
 units[60] = "95";
 comments[60] = "Id Pregunta: 9. AGE A1 2015";
 preguntaids[60] = 9


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[61]= new Array();
 choices[61][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[61][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[61][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[61][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[61] = choices[61][0];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 849. Ley 40/2015";
 preguntaids[61] = 849


//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[62]= new Array();
 choices[62][0] = "Un programa presupuestario.";
 choices[62][1] = "Un concepto presupuestario.";
 choices[62][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[62][3] = "Un cr&eacute;dito presupuestario.";
 answers[62] = choices[62][0];
 units[62] = "10";
 comments[62] = "Id Pregunta: 493. PRESUPUESTOS GENERALES";
 preguntaids[62] = 493


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[63]= "64)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[63]= new Array();
 choices[63][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[63][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[63][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[63][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[63] = choices[63][1];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 825. Ley 40/2015";
 preguntaids[63] = 825


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[64]= "65)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[64]= new Array();
 choices[64][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[64][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[64][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[64][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[64] = choices[64][1];
 units[64] = "58";
 comments[64] = "Id Pregunta: 643. Junta de Extremadura A1 2015";
 preguntaids[64] = 643


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[65]= "66)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[65]= new Array();
 choices[65][0] = "Cuatro.";
 choices[65][1] = "Una.";
 choices[65][2] = "Cinco.";
 choices[65][3] = "Nueve.";
 answers[65] = choices[65][2];
 units[65] = "1";
 comments[65] = "Id Pregunta: 268. CONSTITUCION1978";
 preguntaids[65] = 268


//  Id pregunta: 402 Año de creación de pregunta: 2016
 questions[66]= "67)  El principio de igualdad de trato y oportunidades entre mujeres y hombres tiene car&aacute;cter:";
 choices[66]= new Array();
 choices[66][0] = "Parcial.";
 choices[66][1] = "Sectorial.";
 choices[66][2] = "Tranversal.";
 choices[66][3] = "Vertical.";
 answers[66] = choices[66][2];
 units[66] = "14";
 comments[66] = "Id Pregunta: 402. POLITICAS DE IGUALDAD";
 preguntaids[66] = 402


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[67]= "68)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[67]= new Array();
 choices[67][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[67][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[67][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[67][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[67] = choices[67][2];
 units[67] = "1";
 comments[67] = "Id Pregunta: 190. CONSTITUCION1978";
 preguntaids[67] = 190


//  Id pregunta: 852 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de backup es la m&aacute;s eficiente a nivel de ocupaci&oacute;n de espacio?";
 choices[68]= new Array();
 choices[68][0] = "Backup full.";
 choices[68][1] = "Backup diferencial.";
 choices[68][2] = "Backup incremental.";
 choices[68][3] = "Backup deduplicado.";
 answers[68] = choices[68][3];
 units[68] = "53";
 comments[68] = "Id Pregunta: 852. Xunta de Galicia 2015";
 preguntaids[68] = 852


//  Id pregunta: 314 Año de creación de pregunta: 2016
 questions[69]= "70)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[69]= new Array();
 choices[69][0] = "Al Consejo Europeo.";
 choices[69][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[69][2] = "A la Comisi&oacute;n Europea.";
 choices[69][3] = "Al Parlamento Europeo.";
 answers[69] = choices[69][2];
 units[69] = "5";
 comments[69] = "Id Pregunta: 314. UNION EUROPEA";
 preguntaids[69] = 314


//  Id pregunta: 851 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qu&eacute; m&eacute;todo de replicaci&oacute;n remota entre sistemas de almacenamiento se ve m&aacute;s afectada por la latencia en el caso de largas distancias?";
 choices[70]= new Array();
 choices[70][0] = "As&iacute;ncrona.";
 choices[70][1] = "Log-shipping.";
 choices[70][2] = "Disk buffering.";
 choices[70][3] = "S&iacute;ncrona.";
 answers[70] = choices[70][3];
 units[70] = "53";
 comments[70] = "Id Pregunta: 851. Xunta de Galicia 2015";
 preguntaids[70] = 851


//  Id pregunta: 374 Año de creación de pregunta: 2016
 questions[71]= "72)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[71]= new Array();
 choices[71][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[71][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[71][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[71][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[71] = choices[71][3];
 units[71] = "5";
 comments[71] = "Id Pregunta: 374. UNION EUROPEA";
 preguntaids[71] = 374


//  Id pregunta: 57 Año de creación de pregunta: 2016
 questions[72]= "73)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[72]= new Array();
 choices[72][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[72][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[72][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[72][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[72] = choices[72][3];
 units[72] = "101";
 comments[72] = "Id Pregunta: 57. AGE A1 2015";
 preguntaids[72] = 57


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[73]= "74)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[73]= new Array();
 choices[73][0] = "Discriminaci&oacute;n indirecta.";
 choices[73][1] = "Discriminaci&oacute;n directa.";
 choices[73][2] = "Discriminaci&oacute;n por maternidad.";
 choices[73][3] = "Discriminaci&oacute;n abusiva.";
 answers[73] = choices[73][1];
 units[73] = "14";
 comments[73] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";
 preguntaids[73] = 395


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[74]= "75)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[74]= new Array();
 choices[74][0] = "Reducir el gasto p&uacute;blico.";
 choices[74][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[74][2] = "Reducir el endeudamiento neto.";
 choices[74][3] = "Al Fondo de Contingencia.";
 answers[74] = choices[74][2];
 units[74] = "10";
 comments[74] = "Id Pregunta: 509. PRESUPUESTOS GENERALES";
 preguntaids[74] = 509


