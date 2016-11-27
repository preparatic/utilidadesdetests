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

//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[0]= new Array();
 choices[0][0] = "El Presidente del Senado";
 choices[0][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[0][2] = "El Presidente del Gobierno";
 choices[0][3] = "El Presidente de las Cortes Generales";
 answers[0] = choices[0][2];
 units[0] = "1";
 comments[0] = "Id Pregunta: 265. CONSTITUCION1978";


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[1]= "2)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[1]= new Array();
 choices[1][0] = "Subsecretario";
 choices[1][1] = "Subdirector general";
 choices[1][2] = "Secretario de Estado";
 choices[1][3] = "ninguna es correcta";
 answers[1] = choices[1][1];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 790. Ley 40/2015";


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[2]= "3)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[2]= new Array();
 choices[2][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[2][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[2][2] = "a y b son correctas";
 choices[2][3] = "a y b son incorrectas";
 answers[2] = choices[2][2];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 796. Ley 40/2015";


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[3]= "4)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[3]= new Array();
 choices[3][0] = "Tener una estructura institucional.";
 choices[3][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[3][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[3][3] = "Todas las respuestas son correctas.";
 answers[3] = choices[3][3];
 units[3] = "5";
 comments[3] = "Id Pregunta: 377. UNION EUROPEA";


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[4]= "5)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[4]= new Array();
 choices[4][0] = "786 Diputados como m&aacute;ximo.";
 choices[4][1] = "600 Diputados como m&aacute;ximo.";
 choices[4][2] = "650 Diputados como m&aacute;ximo.";
 choices[4][3] = "732 Diputados como m&aacute;ximo.";
 answers[4] = choices[4][0];
 units[4] = "5";
 comments[4] = "Id Pregunta: 360. UNION EUROPEA";


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[5]= "6)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[5]= new Array();
 choices[5][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[5][1] = "Ninguna de las respuestas es correcta.";
 choices[5][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[5][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[5] = choices[5][0];
 units[5] = "5";
 comments[5] = "Id Pregunta: 334. UNION EUROPEA";


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[6]= "7)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[6]= new Array();
 choices[6][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[6][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[6][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[6][3] = "ninguna es correcta";
 answers[6] = choices[6][2];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 817. Ley 40/2015";


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[7]= "8)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[7]= new Array();
 choices[7][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[7][1] = "los Subdelegados del Gobierno en las provincias";
 choices[7][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[7][3] = "a y b son correctas";
 answers[7] = choices[7][3];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 788. Ley 40/2015";


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[8]= "9)  Tienen la condici&oacute;n de alto cargo:";
 choices[8]= new Array();
 choices[8][0] = "los &oacute;rganos superiores";
 choices[8][1] = "los &oacute;rganos superiores y directivos";
 choices[8][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[8][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[8] = choices[8][2];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 792. Ley 40/2015";


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[9]= "10)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[9]= new Array();
 choices[9][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[9][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[9][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[9][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[9] = choices[9][1];
 units[9] = "1";
 comments[9] = "Id Pregunta: 205. CONSTITUCION1978";


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[10]= new Array();
 choices[10][0] = "El Parlamento y el Consejo.";
 choices[10][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[10][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[10][3] = "La Comisi&oacute;n y el Consejo.";
 answers[10] = choices[10][1];
 units[10] = "5";
 comments[10] = "Id Pregunta: 357. UNION EUROPEA";


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[11]= new Array();
 choices[11][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[11][1] = "Solamente el Congreso.";
 choices[11][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[11][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[11] = choices[11][0];
 units[11] = "1";
 comments[11] = "Id Pregunta: 176. CONSTITUCION1978";


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[12]= "13)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[12]= new Array();
 choices[12][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[12][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[12][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[12][3] = "El Senado se compone de 350 senadores.";
 answers[12] = choices[12][0];
 units[12] = "1";
 comments[12] = "Id Pregunta: 212. CONSTITUCION1978";


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[13]= new Array();
 choices[13][0] = "El Presidente del Senado.";
 choices[13][1] = "El Defensor del Pueblo.";
 choices[13][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[13][3] = "El Presidente del Gobierno.";
 answers[13] = choices[13][2];
 units[13] = "1";
 comments[13] = "Id Pregunta: 232. CONSTITUCION1978";


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[14]= "15)  Componen la Comisi&oacute;n Europea:";
 choices[14]= new Array();
 choices[14][0] = "Un Comisario por cada Estado miembro.";
 choices[14][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[14][2] = "Dos Comisarios por cada Estado miembro.";
 choices[14][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[14] = choices[14][0];
 units[14] = "5";
 comments[14] = "Id Pregunta: 306. UNION EUROPEA";


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[15]= "16)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[15]= new Array();
 choices[15][0] = "el Secretario General";
 choices[15][1] = "el Subdirector General";
 choices[15][2] = "el Secretario de Estado";
 choices[15][3] = "ninguna es correcta";
 answers[15] = choices[15][0];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 821. Ley 40/2015";


//  Id pregunta: 221 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[16]= new Array();
 choices[16][0] = "De los derechos y deberes fundamentales.";
 choices[16][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[16][2] = "Derechos y libertades.";
 choices[16][3] = "De la Corona.";
 answers[16] = choices[16][0];
 units[16] = "1";
 comments[16] = "Id Pregunta: 221. CONSTITUCION1978";


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[17]= "18)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[17]= new Array();
 choices[17][0] = "Rey.";
 choices[17][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[17][2] = "Constituci&oacute;n.";
 choices[17][3] = "Pueblo.";
 answers[17] = choices[17][2];
 units[17] = "1";
 comments[17] = "Id Pregunta: 251. CONSTITUCION1978";


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[18]= "19)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[18]= new Array();
 choices[18][0] = "Son actos normativos.";
 choices[18][1] = "Poseen alcance general.";
 choices[18][2] = "No son obligatorias.";
 choices[18][3] = "Son actos individuales no normativos.";
 answers[18] = choices[18][3];
 units[18] = "5";
 comments[18] = "Id Pregunta: 362. UNION EUROPEA";


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[19]= "20)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[19]= new Array();
 choices[19][0] = "la Administraci&oacute;n General del Estado";
 choices[19][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[19][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[19][3] = "el sector p&uacute;blico y privado institucional";
 answers[19] = choices[19][3];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 763. Ley 40/2015";


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[20]= "21)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[20]= new Array();
 choices[20][0] = "3 a&ntilde;os.";
 choices[20][1] = "5 a&ntilde;os.";
 choices[20][2] = "4 a&ntilde;os.";
 choices[20][3] = "6 a&ntilde;os.";
 answers[20] = choices[20][1];
 units[20] = "1";
 comments[20] = "Id Pregunta: 193. CONSTITUCION1978";


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[21]= "22)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[21]= new Array();
 choices[21][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[21][1] = "el Consejo de Estado";
 choices[21][2] = "el Congreso";
 choices[21][3] = "las Cortes Generales";
 answers[21] = choices[21][0];
 units[21] = "4, 7, 8, 9";
 comments[21] = "Id Pregunta: 783. Ley 40/2015";


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[22]= "23)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[22]= new Array();
 choices[22][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[22][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[22][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[22][3] = "todas son correctas";
 answers[22] = choices[22][3];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 779. Ley 40/2015";


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[23]= new Array();
 choices[23][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[23][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[23][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[23][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[23] = choices[23][0];
 units[23] = "4, 7, 8, 9";
 comments[23] = "Id Pregunta: 847. Ley 40/2015";


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[24]= "25)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[24]= new Array();
 choices[24][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[24][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[24][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[24][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[24] = choices[24][1];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 823. Ley 40/2015";


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[25]= "26)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[25]= new Array();
 choices[25][0] = "un &oacute;rgano superior";
 choices[25][1] = "un &oacute;rgano directivo";
 choices[25][2] = "un &oacute;rgano superior o directivo";
 choices[25][3] = "ninguna es correcta";
 answers[25] = choices[25][2];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 793. Ley 40/2015";


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[26]= "27)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[26]= new Array();
 choices[26][0] = "El Presidente y su gabinete.";
 choices[26][1] = "El Presidente y sus Ministros.";
 choices[26][2] = "El Rey y el Presidente.";
 choices[26][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[26] = choices[26][2];
 units[26] = "1";
 comments[26] = "Id Pregunta: 257. CONSTITUCION1978";


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[27]= "28)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[27]= new Array();
 choices[27][0] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo, cuando ejerzan potestades administrativas";
 choices[27][1] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, ni siquiera, cuando ejerzan potestades administrativas";
 choices[27][2] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[27][3] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, excepto, cuando ejerzan potestades administrativas";
 answers[27] = choices[27][2];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 765. Ley 40/2015";


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[28]= "29)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[28]= new Array();
 choices[28][0] = "El Presidente del Consejo Europeo.";
 choices[28][1] = "La Comisi&oacute;n.";
 choices[28][2] = "El Consejo.";
 choices[28][3] = "El Parlamento Europeo.";
 answers[28] = choices[28][2];
 units[28] = "5";
 comments[28] = "Id Pregunta: 328. UNION EUROPEA";


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[29]= "30)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[29]= new Array();
 choices[29][0] = "61";
 choices[29][1] = "53";
 choices[29][2] = "65";
 choices[29][3] = "67";
 answers[29] = choices[29][1];
 units[29] = "1";
 comments[29] = "Id Pregunta: 248. CONSTITUCION1978";


//  Id pregunta: 218 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[30]= new Array();
 choices[30][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[30][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[30][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[30][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[30] = choices[30][0];
 units[30] = "1";
 comments[30] = "Id Pregunta: 218. CONSTITUCION1978";


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[31]= "32)  El Tribunal de Justicia est&aacute; formado por:";
 choices[31]= new Array();
 choices[31][0] = "Un Juez de cada Estado miembro.";
 choices[31][1] = "Por dos Jueces de cada Estado miembro.";
 choices[31][2] = "Por veinte Jueces.";
 choices[31][3] = "Por ocho Jueces.";
 answers[31] = choices[31][0];
 units[31] = "5";
 comments[31] = "Id Pregunta: 322. UNION EUROPEA";


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[32]= "33)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[32]= new Array();
 choices[32][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[32][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[32][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[32][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[32] = choices[32][2];
 units[32] = "1";
 comments[32] = "Id Pregunta: 172. CONSTITUCION1978";


//  Id pregunta: 339 Año de creación de pregunta: 2016
 questions[33]= "34)  La presidencia del Consejo se ejerce de forma rotatoria cada:";
 choices[33]= new Array();
 choices[33][0] = "4 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[33][1] = "6 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[33][2] = "4 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 choices[33][3] = "6 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 answers[33] = choices[33][1];
 units[33] = "5";
 comments[33] = "Id Pregunta: 339. UNION EUROPEA";


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[34]= "35)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[34]= new Array();
 choices[34][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[34][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[34][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[34][3] = "Todas son correctas.";
 answers[34] = choices[34][0];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 833. Ley 40/2015";


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[35]= "36)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[35]= new Array();
 choices[35][0] = "El Rey.";
 choices[35][1] = "El Jefe del Estado.";
 choices[35][2] = "El Gobierno.";
 choices[35][3] = "El Presidente del Gobierno.";
 answers[35] = choices[35][2];
 units[35] = "1";
 comments[35] = "Id Pregunta: 208. CONSTITUCION1978";


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[36]= "37)  La recusaci&oacute;n pueden promoverla...";
 choices[36]= new Array();
 choices[36][0] = "Cualquier &oacute;rgano";
 choices[36][1] = "El interesado";
 choices[36][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[36][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[36] = choices[36][0];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 826. Ley 40/2015";


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[37]= "38)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[37]= new Array();
 choices[37][0] = "personalidad jur&iacute;dica propia";
 choices[37][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[37][2] = "personalidad jur&iacute;dica plena";
 choices[37][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[37] = choices[37][1];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 772. Ley 40/2015";


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[38]= "39)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[38]= new Array();
 choices[38][0] = "la poblaci&oacute;n del territorio";
 choices[38][1] = "el volumen de gesti&oacute;n";
 choices[38][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[38][3] = "todas son correctas";
 answers[38] = choices[38][3];
 units[38] = "4, 7, 8, 9";
 comments[38] = "Id Pregunta: 814. Ley 40/2015";


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[39]= "40)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[39]= new Array();
 choices[39][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[39][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[39][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[39][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[39] = choices[39][2];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 768. Ley 40/2015";


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[40]= new Array();
 choices[40][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[40][1] = "Por Orden Ministerial.";
 choices[40][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[40][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[40] = choices[40][0];
 units[40] = "1";
 comments[40] = "Id Pregunta: 247. CONSTITUCION1978";


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[41]= "42)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[41]= new Array();
 choices[41][0] = "Los propios miembros del Tribunal.";
 choices[41][1] = "El Consejo de Europa.";
 choices[41][2] = "El Consejo Europeo.";
 choices[41][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[41] = choices[41][0];
 units[41] = "5";
 comments[41] = "Id Pregunta: 301. UNION EUROPEA";


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[42]= new Array();
 choices[42][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[42][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[42][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[42][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[42] = choices[42][0];
 units[42] = "5";
 comments[42] = "Id Pregunta: 319. UNION EUROPEA";


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[43]= "44)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[43]= new Array();
 choices[43][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[43][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[43][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[43][3] = "todas son correctas";
 answers[43] = choices[43][3];
 units[43] = "4, 7, 8, 9";
 comments[43] = "Id Pregunta: 769. Ley 40/2015";


//  Id pregunta: 173 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[44]= new Array();
 choices[44][0] = "absoluta de las Cortes Generales.";
 choices[44][1] = "absoluta del Congreso de los Diputados.";
 choices[44][2] = "simple de las Cortes Generales.";
 choices[44][3] = "simple del Congreso de los Diputados.";
 answers[44] = choices[44][3];
 units[44] = "1";
 comments[44] = "Id Pregunta: 173. CONSTITUCION1978";


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[45]= "46)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[45]= new Array();
 choices[45][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[45][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[45][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[45][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[45] = choices[45][1];
 units[45] = "5";
 comments[45] = "Id Pregunta: 316. UNION EUROPEA";


//  Id pregunta: 309 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[46]= new Array();
 choices[46][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[46][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[46][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[46][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[46] = choices[46][0];
 units[46] = "5";
 comments[46] = "Id Pregunta: 309. UNION EUROPEA";


//  Id pregunta: 296 Año de creación de pregunta: 2016
 questions[47]= "48)  Indique a qui&eacute;n corresponde la funci&oacute;n de adoptar las iniciativas de la programaci&oacute;n anual y plurianual de la Uni&oacute;n Europea con el fin de alcanzar acuerdos interinstitucionales:";
 choices[47]= new Array();
 choices[47][0] = "Al Consejo Europeo.";
 choices[47][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[47][2] = "A la Comisi&oacute;n Europea.";
 choices[47][3] = "Al Parlamento Europeo.";
 answers[47] = choices[47][2];
 units[47] = "5";
 comments[47] = "Id Pregunta: 296. UNION EUROPEA";


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[48]= "49)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[48]= new Array();
 choices[48][0] = "La Comisi&oacute;n.";
 choices[48][1] = "El Consejo de Europa.";
 choices[48][2] = "El Consejo Europeo.";
 choices[48][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[48] = choices[48][3];
 units[48] = "5";
 comments[48] = "Id Pregunta: 300. UNION EUROPEA";


//  Id pregunta: 843 Año de creación de pregunta: 2016
 questions[49]= "50)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[49]= new Array();
 choices[49][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[49][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[49][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[49][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[49] = choices[49][1];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 843. Ley 40/2015";


//  Id pregunta: 200 Año de creación de pregunta: 2016
 questions[50]= "51)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[50]= new Array();
 choices[50][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[50][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[50][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[50][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[50] = choices[50][3];
 units[50] = "1";
 comments[50] = "Id Pregunta: 200. CONSTITUCION1978";


//  Id pregunta: 375 Año de creación de pregunta: 2016
 questions[51]= "52)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[51]= new Array();
 choices[51][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[51][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[51][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[51][3] = "Todas las respuestas son correctas.";
 answers[51] = choices[51][3];
 units[51] = "5";
 comments[51] = "Id Pregunta: 375. UNION EUROPEA";


//  Id pregunta: 369 Año de creación de pregunta: 2016
 questions[52]= "53)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[52]= new Array();
 choices[52][0] = "Son actos individuales no normativos.";
 choices[52][1] = "Poseen alcance general.";
 choices[52][2] = "Son actos normativos.";
 choices[52][3] = "No son obligatorias.";
 answers[52] = choices[52][0];
 units[52] = "5";
 comments[52] = "Id Pregunta: 369. UNION EUROPEA";


//  Id pregunta: 840 Año de creación de pregunta: 2016
 questions[53]= "54)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[53]= new Array();
 choices[53][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[53][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[53][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[53][3] = "Todas son correctas.";
 answers[53] = choices[53][1];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 840. Ley 40/2015";


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale la respuesta falsa:";
 choices[54]= new Array();
 choices[54][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[54][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[54][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[54][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[54] = choices[54][2];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 845. Ley 40/2015";


//  Id pregunta: 781 Año de creación de pregunta: 2016
 questions[55]= "56)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[55]= new Array();
 choices[55][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[55][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[55][2] = "a y b son correctas";
 choices[55][3] = "a y b son incorrectas";
 answers[55] = choices[55][2];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 781. Ley 40/2015";


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[56]= "57)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[56]= new Array();
 choices[56][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[56][1] = "Publicidad de las normas.";
 choices[56][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[56][3] = "Coordinaci&oacute;n normativa.";
 answers[56] = choices[56][2];
 units[56] = "1";
 comments[56] = "Id Pregunta: 244. CONSTITUCION1978";


//  Id pregunta: 259 Año de creación de pregunta: 2016
 questions[57]= "58)  La iniciativa legislativa corresponde:";
 choices[57]= new Array();
 choices[57][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[57][1] = "Al rey y al Gobierno.";
 choices[57][2] = "Al Congreso, al Senado y al Rey.";
 choices[57][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[57] = choices[57][3];
 units[57] = "1";
 comments[57] = "Id Pregunta: 259. CONSTITUCION1978";


//  Id pregunta: 216 Año de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[58]= new Array();
 choices[58][0] = "El Presidente del Gobierno.";
 choices[58][1] = "El Consejo de Ministros.";
 choices[58][2] = "40 Diputados.";
 choices[58][3] = "El Ministerio Fiscal.";
 answers[58] = choices[58][0];
 units[58] = "1";
 comments[58] = "Id Pregunta: 216. CONSTITUCION1978";


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[59]= "60)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[59]= new Array();
 choices[59][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[59][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[59][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[59][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[59] = choices[59][2];
 units[59] = "1";
 comments[59] = "Id Pregunta: 250. CONSTITUCION1978";


