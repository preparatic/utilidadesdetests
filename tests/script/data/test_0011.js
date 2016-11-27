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

//  Id pregunta: 507 Año de creación de pregunta: 2016
 questions[0]= "1)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[0]= new Array();
 choices[0][0] = "Reducir el gasto p&uacute;blico.";
 choices[0][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[0][2] = "Reducir el endeudamiento neto.";
 choices[0][3] = "Al Fondo de Contingencia.";
 answers[0] = choices[0][2];
 units[0] = "10";
 comments[0] = "Id Pregunta: 507. PRESUPUESTOS GENERALES";


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[1]= "2)  Los criptosistemas pueden clasificarse en:";
 choices[1]= new Array();
 choices[1][0] = "Concretos, Estables e Inestables.";
 choices[1][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[1][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[1][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[1] = choices[1][3];
 units[1] = "76";
 comments[1] = "Id Pregunta: 601. Junta de Extremadura A1 2015";


//  Id pregunta: 411 Año de creación de pregunta: 2016
 questions[2]= "3)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[2]= new Array();
 choices[2][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[2][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[2][2] = "Ninguna es correcta.";
 choices[2][3] = "A y B son correctas.";
 answers[2] = choices[2][1];
 units[2] = "14";
 comments[2] = "Id Pregunta: 411. POLITICAS DE IGUALDAD";


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[3]= "4)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[3]= new Array();
 choices[3][0] = "Subsecretario";
 choices[3][1] = "Subdirector general";
 choices[3][2] = "Secretario de Estado";
 choices[3][3] = "ninguna es correcta";
 answers[3] = choices[3][0];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 779. Ley 40/2015";


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[4]= new Array();
 choices[4][0] = "El Consejo Europeo.";
 choices[4][1] = "El Parlamento Europeo.";
 choices[4][2] = "El Consejo.";
 choices[4][3] = "La Comisi&oacute;n.";
 answers[4] = choices[4][3];
 units[4] = "5";
 comments[4] = "Id Pregunta: 361. UNION EUROPEA";


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[5]= "6)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[5]= new Array();
 choices[5][0] = "192.228.0.0";
 choices[5][1] = "192.228.8.0";
 choices[5][2] = "192.228.16.0";
 choices[5][3] = "192.228.17.0";
 answers[5] = choices[5][2];
 units[5] = "109";
 comments[5] = "Id Pregunta: 614. Junta de Extremadura A1 2015";


//  Id pregunta: 186 Año de creación de pregunta: 2016
 questions[6]= "7)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[6]= new Array();
 choices[6][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[6][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[6][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[6][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[6] = choices[6][2];
 units[6] = "1";
 comments[6] = "Id Pregunta: 186. CONSTITUCION1978";


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[7]= new Array();
 choices[7][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[7][1] = "Auditor&iacute;a operativa.";
 choices[7][2] = "Auditor&iacute;a de cumplimiento.";
 choices[7][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[7] = choices[7][2];
 units[7] = "10";
 comments[7] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[8]= "9)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[8]= new Array();
 choices[8][0] = "3 a&ntilde;os.";
 choices[8][1] = "5 a&ntilde;os.";
 choices[8][2] = "4 a&ntilde;os.";
 choices[8][3] = "6 a&ntilde;os.";
 answers[8] = choices[8][1];
 units[8] = "1";
 comments[8] = "Id Pregunta: 193. CONSTITUCION1978";


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[9]= "10)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[9]= new Array();
 choices[9][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[9][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[9][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[9][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[9] = choices[9][2];
 units[9] = "101";
 comments[9] = "Id Pregunta: 60. AGE A1 2015";


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[10]= "11)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[10]= new Array();
 choices[10][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[10][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[10][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[10][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[10] = choices[10][2];
 units[10] = "22";
 comments[10] = "Id Pregunta: 97. AGE A1 2015";


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[11]= new Array();
 choices[11][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[11][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[11][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[11][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[11] = choices[11][0];
 units[11] = "15";
 comments[11] = "Id Pregunta: 114. ";


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[12]= "13)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[12]= new Array();
 choices[12][0] = "Estrasburgo.";
 choices[12][1] = "Bruselas.";
 choices[12][2] = "Luxemburgo.";
 choices[12][3] = "Par&iacute;s.";
 answers[12] = choices[12][1];
 units[12] = "5";
 comments[12] = "Id Pregunta: 305. UNION EUROPEA";


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[13]= "14)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[13]= new Array();
 choices[13][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[13][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[13][2] = "El Presidente del Gobierno";
 choices[13][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[13] = choices[13][1];
 units[13] = "26";
 comments[13] = "Id Pregunta: 549. Gobernanza TIC";


//  Id pregunta: 544 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[14]= new Array();
 choices[14][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[14][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[14][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[14][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[14] = choices[14][3];
 units[14] = "26";
 comments[14] = "Id Pregunta: 544. Gobernanza TIC";


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[15]= new Array();
 choices[15][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[15][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[15][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[15][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[15] = choices[15][1];
 units[15] = "26";
 comments[15] = "Id Pregunta: 545. Gobernanza TIC";


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[16]= "17)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[16]= new Array();
 choices[16][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[16][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[16][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[16][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[16] = choices[16][2];
 units[16] = "12";
 comments[16] = "Id Pregunta: 134. Leyes modelo econ&oacute;mico";


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[17]= "18)  La organizaci&oacute;n en Departamentos ministeriales no obsta a la existencia de:";
 choices[17]= new Array();
 choices[17][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[17][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[17][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[17][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[17] = choices[17][3];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 791. Ley 40/2015";


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[18]= new Array();
 choices[18][0] = "El Ministro de Econom&iacute;a.";
 choices[18][1] = "El Gobierno.";
 choices[18][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[18][3] = "El Presidente del Gobierno.";
 answers[18] = choices[18][1];
 units[18] = "10";
 comments[18] = "Id Pregunta: 470. PRESUPUESTOS GENERALES";


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[19]= "20)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[19]= new Array();
 choices[19][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[19][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[19][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[19][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[19] = choices[19][2];
 units[19] = "1";
 comments[19] = "Id Pregunta: 250. CONSTITUCION1978";


//  Id pregunta: 570 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[20]= new Array();
 choices[20][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[20][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[20][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[20][3] = "La tasa de desempleo ronda el 20%";
 answers[20] = choices[20][2];
 units[20] = "12";
 comments[20] = "Id Pregunta: 570. Modelo econ&oacute;mico";


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[21]= "22)  La Administraci&oacute;n General del Estado se organiza:";
 choices[21]= new Array();
 choices[21][0] = "en Ministerios";
 choices[21][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[21][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[21][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[21] = choices[21][1];
 units[21] = "4, 7, 8, 9";
 comments[21] = "Id Pregunta: 790. Ley 40/2015";


//  Id pregunta: 394 Año de creación de pregunta: 2016
 questions[22]= "23)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[22]= new Array();
 choices[22][0] = "Discriminaci&oacute;n indirecta.";
 choices[22][1] = "Discriminaci&oacute;n directa.";
 choices[22][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[22][3] = "Discriminaci&oacute;n abusiva.";
 answers[22] = choices[22][0];
 units[22] = "14";
 comments[22] = "Id Pregunta: 394. POLITICAS DE IGUALDAD";


//  Id pregunta: 695 Año de creación de pregunta: 2016
 questions[23]= "24)  De las siguientes cu&aacute;l est&aacute; relacionada con la noci&oacute;n de integraci&oacute;n continua:";
 choices[23]= new Array();
 choices[23][0] = "Programaci&oacute;n estructurada.";
 choices[23][1] = "Metodolog&iacute;a M&eacute;trica Versi&oacute;n 4.";
 choices[23][2] = "Programaci&oacute;n extrema.";
 choices[23][3] = "Programaci&oacute;n Espuria.";
 answers[23] = choices[23][2];
 units[23] = "92";
 comments[23] = "Id Pregunta: 695. INTEGRACION CONTINUA";


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[24]= "25)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[24]= new Array();
 choices[24][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[24][1] = "La libertad sexual y religiosa.";
 choices[24][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[24][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[24] = choices[24][3];
 units[24] = "1";
 comments[24] = "Id Pregunta: 254. CONSTITUCION1978";


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[25]= new Array();
 choices[25][0] = "Art&iacute;culo 70.";
 choices[25][1] = "Art&iacute;culo 54.";
 choices[25][2] = "Articulo 62.";
 choices[25][3] = "Articulo 55. 5.";
 answers[25] = choices[25][2];
 units[25] = "1";
 comments[25] = "Id Pregunta: 243. CONSTITUCION1978";


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[26]= new Array();
 choices[26][0] = "Car&aacute;cter sustitutivo";
 choices[26][1] = "Car&aacute;cter obligatorio";
 choices[26][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = choices[26][3];
 units[26] = "19";
 comments[26] = "Id Pregunta: 581. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";


//  Id pregunta: 347 Año de creación de pregunta: 2016
 questions[27]= "28)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[27]= new Array();
 choices[27][0] = "18 miembros.";
 choices[27][1] = "Ninguna es correcta.";
 choices[27][2] = "22 miembros.";
 choices[27][3] = "21 miembros.";
 answers[27] = choices[27][1];
 units[27] = "5";
 comments[27] = "Id Pregunta: 347. UNION EUROPEA";


//  Id pregunta: 259 Año de creación de pregunta: 2016
 questions[28]= "29)  La iniciativa legislativa corresponde:";
 choices[28]= new Array();
 choices[28][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[28][1] = "Al rey y al Gobierno.";
 choices[28][2] = "Al Congreso, al Senado y al Rey.";
 choices[28][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[28] = choices[28][3];
 units[28] = "1";
 comments[28] = "Id Pregunta: 259. CONSTITUCION1978";


//  Id pregunta: 266 Año de creación de pregunta: 2016
 questions[29]= "30)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[29]= new Array();
 choices[29][0] = "El Segundo.";
 choices[29][1] = "El Primero.";
 choices[29][2] = "El Preliminar.";
 choices[29][3] = "El Tercero.";
 answers[29] = choices[29][0];
 units[29] = "1";
 comments[29] = "Id Pregunta: 266. CONSTITUCION1978";


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[30]= "31)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[30]= new Array();
 choices[30][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[30][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[30][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[30][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[30] = choices[30][1];
 units[30] = "1";
 comments[30] = "Id Pregunta: 263. CONSTITUCION1978";


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[31]= "32)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[31]= new Array();
 choices[31][0] = "los registros mercantiles";
 choices[31][1] = "los registros de la propiedad";
 choices[31][2] = "los protocolos notariales";
 choices[31][3] = "todas son correctas";
 answers[31] = choices[31][3];
 units[31] = "7";
 comments[31] = "Id Pregunta: 538. LEY 39/2015";


//  Id pregunta: 526 Año de creación de pregunta: 2016
 questions[32]= "33)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[32]= new Array();
 choices[32][0] = "tienen capacidad de obrar limitada";
 choices[32][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[32][2] = "no tienen capacidad de obrar";
 choices[32][3] = "ninguna es correcta";
 answers[32] = choices[32][2];
 units[32] = "7";
 comments[32] = "Id Pregunta: 526. LEY 39/2015";


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[33]= "34)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[33]= new Array();
 choices[33][0] = "el Secretario General";
 choices[33][1] = "el Subdirector General";
 choices[33][2] = "el Secretario de Estado";
 choices[33][3] = "ninguna es correcta";
 answers[33] = choices[33][0];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 811. Ley 40/2015";


//  Id pregunta: 588 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[34]= new Array();
 choices[34][0] = "14";
 choices[34][1] = "11";
 choices[34][2] = "12";
 choices[34][3] = "15";
 answers[34] = choices[34][0];
 units[34] = "19";
 comments[34] = "Id Pregunta: 588. Estrategia TIC";


//  Id pregunta: 660 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[35]= new Array();
 choices[35][0] = "Avro";
 choices[35][1] = "Sqoop";
 choices[35][2] = "UIMA";
 choices[35][3] = "Jaql";
 answers[35] = choices[35][1];
 units[35] = "73";
 comments[35] = "Id Pregunta: 660. ";


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[36]= "37)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[36]= new Array();
 choices[36][0] = "Principio de transparencia.";
 choices[36][1] = "Principio de cooperaci&oacute;n.";
 choices[36][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[36][3] = "Principio de lealtad institucional.";
 answers[36] = choices[36][1];
 units[36] = "10";
 comments[36] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";


//  Id pregunta: 36 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cu&aacute;l es la interfaz est&aacute;ndar de programaci&oacute;n Java para invocar a m&eacute;todos nativos escritos en otros lenguajes como C o C++?";
 choices[37]= new Array();
 choices[37][0] = "JAXP";
 choices[37][1] = "JNI";
 choices[37][2] = "JNDI";
 choices[37][3] = "JDBC";
 answers[37] = choices[37][1];
 units[37] = "64";
 comments[37] = "Id Pregunta: 36. AGE A1 2015";


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[38]= new Array();
 choices[38][0] = "Org&aacute;nica.";
 choices[38][1] = "Contable.";
 choices[38][2] = "Econ&oacute;mica.";
 choices[38][3] = "Por programas.";
 answers[38] = choices[38][2];
 units[38] = "10";
 comments[38] = "Id Pregunta: 471. PRESUPUESTOS GENERALES";


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[39]= "40)  Se&ntilde;ale la respuesta falsa";
 choices[39]= new Array();
 choices[39][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[39][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[39][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[39][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[39] = choices[39][3];
 units[39] = "22";
 comments[39] = "Id Pregunta: 276. LEY DE TRANSPARENCIA";


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qu&eacute; facilita un ORM?";
 choices[40]= new Array();
 choices[40][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[40][1] = "Conversi&oacute;n de objetos a documentos";
 choices[40][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[40][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[40] = choices[40][0];
 units[40] = "62";
 comments[40] = "Id Pregunta: 49. AGE A1 2015";


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[41]= "42)  Los Reglamentos no se caracterizan por:";
 choices[41]= new Array();
 choices[41][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[41][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[41][2] = "Ser obligatorios.";
 choices[41][3] = "No poseer alcance general.";
 answers[41] = choices[41][3];
 units[41] = "5";
 comments[41] = "Id Pregunta: 359. UNION EUROPEA";


//  Id pregunta: 724 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[42]= new Array();
 choices[42][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[42][1] = "El sprint rel&eacute;ase es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM.";
 choices[42][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[42][3] = "En el sprint rel&eacute;ase se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[42] = choices[42][1];
 units[42] = "34, 84";
 comments[42] = "Id Pregunta: 724. Metodologias &aacute;giles";


//  Id pregunta: 647 Año de creación de pregunta: 2016
 questions[43]= "44)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[43]= new Array();
 choices[43][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[43][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[43][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[43][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[43] = choices[43][0];
 units[43] = "101";
 comments[43] = "Id Pregunta: 647. Junta de Extremadura A1 2015";


//  Id pregunta: 24 Año de creación de pregunta: 2016
 questions[44]= "45)  De acuerdo con la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, una de las funciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[44]= new Array();
 choices[44][0] = "Gestionar en per&iacute;odo voluntario las tasas en materia de telecomunicaciones a que se refiere la presente Ley.";
 choices[44][1] = "Proponer al Gobierno la pol&iacute;tica a seguir para facilitar el desarrollo y la evoluci&oacute;n de las obligaciones de servicio p&uacute;blico.";
 choices[44][2] = "Gestionar el Registro de Operadores.";
 choices[44][3] = "Establecer el procedimiento para cuantificar los beneficios no monetarios obtenidos por los operadores encargados de la prestaci&oacute;n del servicio universal.";
 answers[44] = choices[44][3];
 units[44] = "121";
 comments[44] = "Id Pregunta: 24. AGE A1 2015";


//  Id pregunta: 14 Año de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;ale la respuesta correcta:";
 choices[45]= new Array();
 choices[45][0] = "La norma ISO 9004 est&aacute; compuesta por las normas ISO 9000:2005, ISO 9002:2008 e ISO 9004:2009.";
 choices[45][1] = "La norma ISO 9004:2009 se refiere a la gesti&oacute;n para el &eacute;xito sostenido de una organizaci&oacute;n, con un enfoque de gesti&oacute;n de la calidad.";
 choices[45][2] = "La norma ISO 9004:2009 se refiere a los principios y vocabulario de los sistemas de gesti&oacute;n de calidad.";
 choices[45][3] = "La norma ISO 9002:2008 se refiere a los requisitos de los sistemas de gesti&oacute;n de calidad.";
 answers[45] = choices[45][1];
 units[45] = "98";
 comments[45] = "Id Pregunta: 14. AGE A1 2015";


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[46]= new Array();
 choices[46][0] = "El Presidente del Senado";
 choices[46][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[46][2] = "El Presidente del Gobierno";
 choices[46][3] = "El Presidente de las Cortes Generales";
 answers[46] = choices[46][2];
 units[46] = "1";
 comments[46] = "Id Pregunta: 265. CONSTITUCION1978";


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[47]= new Array();
 choices[47][0] = "ISO/IEC 31000";
 choices[47][1] = "ISO/IEC 14000";
 choices[47][2] = "ISO/IEC 38500";
 choices[47][3] = "ISO/IEC 18000";
 answers[47] = choices[47][2];
 units[47] = "26";
 comments[47] = "Id Pregunta: 543. Gobernanza TIC";


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[48]= new Array();
 choices[48][0] = "Orientaci&oacute;n a objetos";
 choices[48][1] = "MapReduce";
 choices[48][2] = "Pipeline filtering";
 choices[48][3] = "Programaci&oacute;n funcional";
 answers[48] = choices[48][1];
 units[48] = "73";
 comments[48] = "Id Pregunta: 659. ";


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[49]= "50)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[49]= new Array();
 choices[49][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[49][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[49][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[49][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[49] = choices[49][0];
 units[49] = "19";
 comments[49] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[50]= "51)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[50]= new Array();
 choices[50][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[50][1] = "los Subdelegados del Gobierno en las provincias";
 choices[50][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[50][3] = "a y b son correctas";
 answers[50] = choices[50][3];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 778. Ley 40/2015";


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[51]= "52)  El Colegio de Comisarios se re&uacute;ne:";
 choices[51]= new Array();
 choices[51][0] = "Una vez por semana.";
 choices[51][1] = "Una vez al mes.";
 choices[51][2] = "Dos veces en semana.";
 choices[51][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[51] = choices[51][0];
 units[51] = "5";
 comments[51] = "Id Pregunta: 315. UNION EUROPEA";


//  Id pregunta: 599 Año de creación de pregunta: 2016
 questions[52]= "53)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[52]= new Array();
 choices[52][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[52][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[52][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[52][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[52] = choices[52][2];
 units[52] = "45";
 comments[52] = "Id Pregunta: 599. Junta de Extremadura A1 2015";


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[53]= "54)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[53]= new Array();
 choices[53][0] = "De los interesados en el procedimiento";
 choices[53][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[53][2] = "Disposiciones generales";
 choices[53][3] = "De los actos administrativos";
 answers[53] = choices[53][2];
 units[53] = "7";
 comments[53] = "Id Pregunta: 520. LEY 39/2015";


//  Id pregunta: 55 Año de creación de pregunta: 2016
 questions[54]= "55)  WS-Security contiene especificaciones sobre:";
 choices[54]= new Array();
 choices[54][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[54][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[54][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[54][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[54] = choices[54][1];
 units[54] = "119";
 comments[54] = "Id Pregunta: 55. AGE A1 2015";


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[55]= "56)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los contenidos de los certificados cualificados de firma electr&oacute;nica seg&uacute;n el Reglamento (UE) 910/2014";
 choices[55]= new Array();
 choices[55][0] = "El nombre del firmante o un seudo&#769;nimo";
 choices[55][1] = "Los datos de validacio&#769;n de la firma electro&#769;nica";
 choices[55][2] = "La firma electro&#769;nica cualificada o el sello electro&#769;nico cualificado del prestador de servicios de confianza expedidor";
 choices[55][3] = "La localizacio&#769;n de los servicios que se pueden utilizar para consultar el estado de validez del certificado";
 answers[55] = choices[55][2];
 units[55] = "77";
 comments[55] = "Id Pregunta: 691. Anexo I del Reglamento 910/2014";


//  Id pregunta: 741 Año de creación de pregunta: 2016
 questions[56]= "57)  Dos de los principios del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE son:";
 choices[56]= new Array();
 choices[56][0] = "Transparencia e innovaci&oacute;n";
 choices[56][1] = "Seguridad y reutilizaci&oacute;n";
 choices[56][2] = "Reutilizaci&oacute;n y buz&oacute;n de quejas y sugerencias";
 choices[56][3] = "Principio de solo una vez y transfronterizo de forma predeterminada";
 answers[56] = choices[56][3];
 units[56] = "28";
 comments[56] = "Id Pregunta: 741. Estrategia TIC";


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[57]= "58)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[57]= new Array();
 choices[57][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[57][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[57][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[57][3] = "todas son correctas";
 answers[57] = choices[57][3];
 units[57] = "4, 7, 8, 9";
 comments[57] = "Id Pregunta: 769. Ley 40/2015";


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[58]= new Array();
 choices[58][0] = "En 2015";
 choices[58][1] = "En 2013";
 choices[58][2] = "En 2016";
 choices[58][3] = "En 2007";
 answers[58] = choices[58][1];
 units[58] = "19";
 comments[58] = "Id Pregunta: 558. Agenda Digital";


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[59]= "60)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[59]= new Array();
 choices[59][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[59][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[59][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[59][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[59] = choices[59][0];
 units[59] = "1";
 comments[59] = "Id Pregunta: 270. CONSTITUCION1978";


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[60]= "61)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[60]= new Array();
 choices[60][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[60][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[60][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[60][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[60] = choices[60][1];
 units[60] = "22";
 comments[60] = "Id Pregunta: 278. LEY DE TRANSPARENCIA";


//  Id pregunta: 428 Año de creación de pregunta: 2016
 questions[61]= "62)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[61]= new Array();
 choices[61][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[61][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[61][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[61][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[61] = choices[61][2];
 units[61] = "14";
 comments[61] = "Id Pregunta: 428. POLITICAS DE IGUALDAD";


//  Id pregunta: 234 Año de creación de pregunta: 2016
 questions[62]= "63)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[62]= new Array();
 choices[62][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[62][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[62][2] = "Al Congreso de los Diputados.";
 choices[62][3] = "Al Gobierno.";
 answers[62] = choices[62][0];
 units[62] = "1";
 comments[62] = "Id Pregunta: 234. CONSTITUCION1978";


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[63]= "64)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[63]= new Array();
 choices[63][0] = "A los cinco a&ntilde;os.";
 choices[63][1] = "A los dos a&ntilde;os.";
 choices[63][2] = "A los tres a&ntilde;os.";
 choices[63][3] = "A los cuatro a&ntilde;os.";
 answers[63] = choices[63][0];
 units[63] = "10";
 comments[63] = "Id Pregunta: 490. PRESUPUESTOS GENERALES";


//  Id pregunta: 713 Año de creación de pregunta: 2016
 questions[64]= "65)  Entre las funcionalidades generales de un servidor de integraci&oacute;n continua NO se encuentra";
 choices[64]= new Array();
 choices[64][0] = "La ejecuci&oacute;n de una serie de test: JUnit, Cactus, Auditoria del c&oacute;digo fuente, test IHM, test funcionales.";
 choices[64][1] = "Permite realiza el despliegue de archivos en el entorno de producci&oacute;n.";
 choices[64][2] = "La notificaci&oacute;n del resultado por medios como correo electr&oacute;nico o RSS.";
 choices[64][3] = "La creaci&oacute;n de un informe de estad&iacute;sticas.";
 answers[64] = choices[64][1];
 units[64] = "92";
 comments[64] = "Id Pregunta: 713. INTEGRACION CONTINUA";


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[65]= "66)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[65]= new Array();
 choices[65][0] = "Principio de solo una vez";
 choices[65][1] = "Apertura y transparencia";
 choices[65][2] = "Confianza y seguridad";
 choices[65][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[65] = choices[65][3];
 units[65] = "19";
 comments[65] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[66]= "67)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[66]= new Array();
 choices[66][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[66][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[66][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[66][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[66] = choices[66][2];
 units[66] = "10";
 comments[66] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";


//  Id pregunta: 571 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[67]= new Array();
 choices[67][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[67][1] = "Entrada en la Uni&oacute;n Europea";
 choices[67][2] = "Pactos de la Moncloa";
 choices[67][3] = "Ingreso en la ONU";
 answers[67] = choices[67][3];
 units[67] = "12";
 comments[67] = "Id Pregunta: 571. Modelo econ&oacute;mico";


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[68]= new Array();
 choices[68][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[68][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[68][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[68][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[68] = choices[68][1];
 units[68] = "19";
 comments[68] = "Id Pregunta: 560. Agenda Digital";


//  Id pregunta: 645 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[69]= new Array();
 choices[69][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[69][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[69][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[69][3] = "El Instituto de la Mujer de Extremadura.";
 answers[69] = choices[69][3];
 units[69] = "14";
 comments[69] = "Id Pregunta: 645. Junta de Extremadura A1 2015";


//  Id pregunta: 626 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[70]= new Array();
 choices[70][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[70][1] = "La Direcci&oacute;n de la Competencia.";
 choices[70][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[70][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[70] = choices[70][0];
 units[70] = "121";
 comments[70] = "Id Pregunta: 626. Junta de Extremadura A1 2015";


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[71]= "72)  La partida presupuestaria es equivalente a...";
 choices[71]= new Array();
 choices[71][0] = "El sujeto que realiza el gasto";
 choices[71][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[71][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[71][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[71] = choices[71][3];
 units[71] = "10";
 comments[71] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[72]= "73)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[72]= new Array();
 choices[72][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[72][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[72][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[72][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[72] = choices[72][0];
 units[72] = "1";
 comments[72] = "Id Pregunta: 240. CONSTITUCION1978";


//  Id pregunta: 6 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[73]= new Array();
 choices[73][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[73][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[73][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[73][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[73] = choices[73][0];
 units[73] = "91";
 comments[73] = "Id Pregunta: 6. AGE A1 2015";


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Cu&aacute;les son las caracter&iacute;sticas del sprint 0 en SCRUM?";
 choices[74]= new Array();
 choices[74][0] = "Se dejan listos los entornos de desarrollo";
 choices[74][1] = "Se trabaja en el product backlog, dejando listos los product backlog &iacute;tems priorizados y estimados";
 choices[74][2] = "Se hace una previsi&oacute;n del reparto de historias de usuario por iteraci&oacute;n";
 choices[74][3] = "Todas las anteriores son correctas";
 answers[74] = choices[74][3];
 units[74] = "34, 84";
 comments[74] = "Id Pregunta: 723. Metodologias &aacute;giles";


