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

//  Id pregunta: 10635 AÃ±o de creación de pregunta: 2016
 questions[0]= "1)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[0]= new Array();
 choices[0][0] = "Relaciones base y vistas.";
 choices[0][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[0][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[0][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[0] = choices[0][3];
 units[0] = "60";
 comments[0] = "Id Pregunta: 10635. Junta de Extremadura A1 2015";


//  Id pregunta: 10478 AÃ±o de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[1]= new Array();
 choices[1][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[1][1] = "Intervenci&oacute;n formal y material.";
 choices[1][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[1][3] = "Intervenci&oacute;n formal y general.";
 answers[1] = choices[1][1];
 units[1] = "10";
 comments[1] = "Id Pregunta: 10478. PRESUPUESTOS GENERALES";


//  Id pregunta: 10675 AÃ±o de creación de pregunta: 2016
 questions[2]= "3)  En referencia al proyecto ANDES, para la comunicaci&oacute;n telem&aacute;tica de Nacimientos desde Centros Sanitarios a Registros Civiles, indique cual de las siguientes afirmaciones es falsa:";
 choices[2]= new Array();
 choices[2][0] = "Tiene sustento legal de acuerdo a la Ley 19/2015, de 13 de julio, de medidas de reforma administrativa en el &aacute;mbito de la Administraci&oacute;n de Justicia y del Registro Civil.";
 choices[2][1] = "Se inicia a partir de su propuesta en CORA (Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas).";
 choices[2][2] = "Reutiliza el servicio horizontal ACCEDA en modo cloud, lo cual ha facilitado la pronta puesta en marcha de la soluci&oacute;n.";
 choices[2][3] = "La utilizaci&oacute;n de ANDES por parte de los hospitales es completamente transparente, sin necesidad de realizar pasos previos para su despliegue.";
 answers[2] = choices[2][3];
 units[2] = "47";
 comments[2] = "Id Pregunta: 10675. Inscripci&oacute;n autom&aacute;tica nacimientos";


//  Id pregunta: 10432 AÃ±o de creación de pregunta: 2016
 questions[3]= "4)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[3]= new Array();
 choices[3][0] = "De ocho a&ntilde;os.";
 choices[3][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[3][2] = "Ambas son correctas.";
 choices[3][3] = "No existe un l&iacute;mite.";
 answers[3] = choices[3][0];
 units[3] = "14";
 comments[3] = "Id Pregunta: 10432. POLITICAS DE IGUALDAD";


//  Id pregunta: 10145 AÃ±o de creación de pregunta: 2016
 questions[4]= "5)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[4]= new Array();
 choices[4][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[4][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[4][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[4][3] = "Todas las anteriores son ciertas";
 answers[4] = choices[4][3];
 units[4] = "8";
 comments[4] = "Id Pregunta: 10145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 10519 AÃ±o de creación de pregunta: 2016
 questions[5]= "6)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[5]= new Array();
 choices[5][0] = "un art&iacute;culo";
 choices[5][1] = "dos art&iacute;culos";
 choices[5][2] = "tres art&iacute;culos";
 choices[5][3] = "cuatro art&iacute;culos";
 answers[5] = choices[5][1];
 units[5] = "7";
 comments[5] = "Id Pregunta: 10519. LEY 39/2015";


//  Id pregunta: 10307 AÃ±o de creación de pregunta: 2016
 questions[6]= "7)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[6]= new Array();
 choices[6][0] = "Seis a&ntilde;os.";
 choices[6][1] = "Cinco a&ntilde;os.";
 choices[6][2] = "Cuatro a&ntilde;os.";
 choices[6][3] = "Ocho a&ntilde;os.";
 answers[6] = choices[6][1];
 units[6] = "5";
 comments[6] = "Id Pregunta: 10307. UNION EUROPEA";


//  Id pregunta: 10423 AÃ±o de creación de pregunta: 2016
 questions[7]= "8)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[7]= new Array();
 choices[7][0] = "El derecho a un permiso.";
 choices[7][1] = "Una prestaci&oacute;n por paternidad.";
 choices[7][2] = "Ambas son correctas.";
 choices[7][3] = "18 d&iacute;as de permiso.";
 answers[7] = choices[7][2];
 units[7] = "14";
 comments[7] = "Id Pregunta: 10423. POLITICAS DE IGUALDAD";


//  Id pregunta: 10175 AÃ±o de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[8]= new Array();
 choices[8][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[8][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[8][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[8][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[8] = choices[8][1];
 units[8] = "1";
 comments[8] = "Id Pregunta: 10175. CONSTITUCION1978";


//  Id pregunta: 10487 AÃ±o de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[9]= new Array();
 choices[9][0] = "Las Cortes Generales.";
 choices[9][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[9][2] = "El Gobierno.";
 choices[9][3] = "El Congreso de los Diputados.";
 answers[9] = choices[9][0];
 units[9] = "10";
 comments[9] = "Id Pregunta: 10487. PRESUPUESTOS GENERALES";


//  Id pregunta: 10589 AÃ±o de creación de pregunta: 2016
 questions[10]= "11)  Son servicios declarados compartidos:";
 choices[10]= new Array();
 choices[10][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[10][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[10][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[10][3] = "Todos los anteriores";
 answers[10] = choices[10][3];
 units[10] = "19";
 comments[10] = "Id Pregunta: 10589. Estrategia TIC";


//  Id pregunta: 10154 AÃ±o de creación de pregunta: 2016
 questions[11]= "12)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[11]= new Array();
 choices[11][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[11][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[11][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[11][3] = "todas son correctas";
 answers[11] = choices[11][3];
 units[11] = "7";
 comments[11] = "Id Pregunta: 10154. Ley 39/2015, Art&iacute;culo 29";


//  Id pregunta: 10344 AÃ±o de creación de pregunta: 2016
 questions[12]= "13)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[12]= new Array();
 choices[12][0] = "Pas&oacute; de 518 a 626.";
 choices[12][1] = "Pas&oacute; de 434 a 518.";
 choices[12][2] = "Pas&oacute; de 345 a 512.";
 choices[12][3] = "Pas&oacute; de 435 a 610.";
 answers[12] = choices[12][1];
 units[12] = "5";
 comments[12] = "Id Pregunta: 10344. UNION EUROPEA";


//  Id pregunta: 10388 AÃ±o de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[13]= new Array();
 choices[13][0] = "Indirecta.";
 choices[13][1] = "Directa.";
 choices[13][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[13][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[13] = choices[13][1];
 units[13] = "14";
 comments[13] = "Id Pregunta: 10388. POLITICAS DE IGUALDAD";


//  Id pregunta: 10355 AÃ±o de creación de pregunta: 2016
 questions[14]= "15)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[14]= new Array();
 choices[14][0] = "Son vinculantes solamente.";
 choices[14][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[14][2] = "Son preceptivos y vinculantes.";
 choices[14][3] = "Son preceptivos y no vinculantes.";
 answers[14] = choices[14][1];
 units[14] = "5";
 comments[14] = "Id Pregunta: 10355. UNION EUROPEA";


//  Id pregunta: 10309 AÃ±o de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[15]= new Array();
 choices[15][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[15][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[15][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[15][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[15] = choices[15][0];
 units[15] = "5";
 comments[15] = "Id Pregunta: 10309. UNION EUROPEA";


//  Id pregunta: 10312 AÃ±o de creación de pregunta: 2016
 questions[16]= "17)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[16]= new Array();
 choices[16][0] = "Por unanimidad.";
 choices[16][1] = "Por mayor&iacute;a cualificada.";
 choices[16][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[16][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[16] = choices[16][3];
 units[16] = "5";
 comments[16] = "Id Pregunta: 10312. UNION EUROPEA";


//  Id pregunta: 10194 AÃ±o de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;ntos miembros componen el Tribunal Constitucional?";
 choices[17]= new Array();
 choices[17][0] = "11";
 choices[17][1] = "12";
 choices[17][2] = "14";
 choices[17][3] = "8";
 answers[17] = choices[17][1];
 units[17] = "1";
 comments[17] = "Id Pregunta: 10194. CONSTITUCION1978";


//  Id pregunta: 10264 AÃ±o de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[18]= new Array();
 choices[18][0] = "Veinte.";
 choices[18][1] = "Quince.";
 choices[18][2] = "Diez.";
 choices[18][3] = "Doce.";
 answers[18] = choices[18][1];
 units[18] = "1";
 comments[18] = "Id Pregunta: 10264. CONSTITUCION1978";


//  Id pregunta: 10374 AÃ±o de creación de pregunta: 2016
 questions[19]= "20)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[19]= new Array();
 choices[19][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[19][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[19][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[19][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[19] = choices[19][3];
 units[19] = "5";
 comments[19] = "Id Pregunta: 10374. UNION EUROPEA";


//  Id pregunta: 10560 AÃ±o de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[20]= new Array();
 choices[20][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[20][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[20][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[20][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[20] = choices[20][1];
 units[20] = "19";
 comments[20] = "Id Pregunta: 10560. Agenda Digital";


//  Id pregunta: 10266 AÃ±o de creación de pregunta: 2016
 questions[21]= "22)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[21]= new Array();
 choices[21][0] = "El Segundo.";
 choices[21][1] = "El Primero.";
 choices[21][2] = "El Preliminar.";
 choices[21][3] = "El Tercero.";
 answers[21] = choices[21][0];
 units[21] = "1";
 comments[21] = "Id Pregunta: 10266. CONSTITUCION1978";


//  Id pregunta: 10225 AÃ±o de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[22]= new Array();
 choices[22][0] = "las Cortes generales.";
 choices[22][1] = "los partidos pol&iacute;ticos.";
 choices[22][2] = "los sindicatos.";
 choices[22][3] = "las Comunidades Aut&oacute;nomas.";
 answers[22] = choices[22][1];
 units[22] = "1";
 comments[22] = "Id Pregunta: 10225. CONSTITUCION1978";


//  Id pregunta: 10065 AÃ±o de creación de pregunta: 2016
 questions[23]= "24)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[23]= new Array();
 choices[23][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[23][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[23][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[23][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[23] = choices[23][2];
 units[23] = "53";
 comments[23] = "Id Pregunta: 10065. AGE A1 2015";


//  Id pregunta: 10637 AÃ±o de creación de pregunta: 2016
 questions[24]= "25)  En el sistema operativo Unix/Linux, el comando id:";
 choices[24]= new Array();
 choices[24][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[24][1] = "El comando id no existe.";
 choices[24][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[24][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[24] = choices[24][0];
 units[24] = "57";
 comments[24] = "Id Pregunta: 10637. Junta de Extremadura A1 2015";


//  Id pregunta: 10429 AÃ±o de creación de pregunta: 2016
 questions[25]= "26)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[25]= new Array();
 choices[25][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[25][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[25][2] = "Ambas son correctas.";
 choices[25][3] = "Ambas son incorrectas.";
 answers[25] = choices[25][0];
 units[25] = "14";
 comments[25] = "Id Pregunta: 10429. POLITICAS DE IGUALDAD";


//  Id pregunta: 10353 AÃ±o de creación de pregunta: 2016
 questions[26]= "27)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[26]= new Array();
 choices[26][0] = "El Parlamento Europeo.";
 choices[26][1] = "Todas las respuestas son correctas.";
 choices[26][2] = "La Comisi&oacute;n Europea.";
 choices[26][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[26] = choices[26][1];
 units[26] = "5";
 comments[26] = "Id Pregunta: 10353. UNION EUROPEA";


//  Id pregunta: 10116 AÃ±o de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[27]= new Array();
 choices[27][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[27][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[27][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[27][3] = "El pago de subsidios a parados";
 answers[27] = choices[27][3];
 units[27] = "15";
 comments[27] = "Id Pregunta: 10116. ";


//  Id pregunta: 10371 AÃ±o de creación de pregunta: 2016
 questions[28]= "29)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[28]= new Array();
 choices[28][0] = "En 1988.";
 choices[28][1] = "En 1981.";
 choices[28][2] = "En 1982.";
 choices[28][3] = "En 1986.";
 answers[28] = choices[28][3];
 units[28] = "5";
 comments[28] = "Id Pregunta: 10371. UNION EUROPEA";


//  Id pregunta: 10306 AÃ±o de creación de pregunta: 2016
 questions[29]= "30)  Componen la Comisi&oacute;n Europea:";
 choices[29]= new Array();
 choices[29][0] = "Un Comisario por cada Estado miembro.";
 choices[29][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[29][2] = "Dos Comisarios por cada Estado miembro.";
 choices[29][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[29] = choices[29][0];
 units[29] = "5";
 comments[29] = "Id Pregunta: 10306. UNION EUROPEA";


//  Id pregunta: 10283 AÃ±o de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[30]= new Array();
 choices[30][0] = "Crecimiento inteligente.";
 choices[30][1] = "Crecimiento inclusivo.";
 choices[30][2] = "Crecimiento sostenible.";
 choices[30][3] = "Crecimiento integrador.";
 answers[30] = choices[30][1];
 units[30] = "5";
 comments[30] = "Id Pregunta: 10283. UNION EUROPEA";


//  Id pregunta: 10251 AÃ±o de creación de pregunta: 2016
 questions[31]= "32)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[31]= new Array();
 choices[31][0] = "Rey.";
 choices[31][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[31][2] = "Constituci&oacute;n.";
 choices[31][3] = "Pueblo.";
 answers[31] = choices[31][2];
 units[31] = "1";
 comments[31] = "Id Pregunta: 10251. CONSTITUCION1978";


//  Id pregunta: 10534 AÃ±o de creación de pregunta: 2016
 questions[32]= "33)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[32]= new Array();
 choices[32][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[32][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[32][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[32][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[32] = choices[32][2];
 units[32] = "7";
 comments[32] = "Id Pregunta: 10534. LEY 39/2015";


//  Id pregunta: 10554 AÃ±o de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[33]= new Array();
 choices[33][0] = "El BCE";
 choices[33][1] = "El Parlamento";
 choices[33][2] = "El Consejo";
 choices[33][3] = "La Comisi&oacute;n";
 answers[33] = choices[33][3];
 units[33] = "17";
 comments[33] = "Id Pregunta: 10554. Mercado &Uacute;nico Digital";


//  Id pregunta: 10087 AÃ±o de creación de pregunta: 2016
 questions[34]= "35)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[34][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[34][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[34][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[34] = choices[34][2];
 units[34] = "48";
 comments[34] = "Id Pregunta: 10087. AGE A1 2015";


//  Id pregunta: 10599 AÃ±o de creación de pregunta: 2016
 questions[35]= "36)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[35]= new Array();
 choices[35][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[35][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[35][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[35][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[35] = choices[35][2];
 units[35] = "45";
 comments[35] = "Id Pregunta: 10599. Junta de Extremadura A1 2015";


//  Id pregunta: 10430 AÃ±o de creación de pregunta: 2016
 questions[36]= "37)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[36]= new Array();
 choices[36][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[36][1] = "Protecci&oacute;n de su salud.";
 choices[36][2] = "Ninguna es correcta.";
 choices[36][3] = "A y B son correctas.";
 answers[36] = choices[36][1];
 units[36] = "14";
 comments[36] = "Id Pregunta: 10430. POLITICAS DE IGUALDAD";


//  Id pregunta: 10032 AÃ±o de creación de pregunta: 2016
 questions[37]= "38)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[37]= new Array();
 choices[37][0] = "ASF-AL (Apache License 2.0)";
 choices[37][1] = "EUPL (European Union Public License)";
 choices[37][2] = "LGPL (Lesser General Public License)";
 choices[37][3] = "MIT(MIT License)";
 answers[37] = choices[37][1];
 units[37] = "43";
 comments[37] = "Id Pregunta: 10032. AGE A1 2015";


//  Id pregunta: 10289 AÃ±o de creación de pregunta: 2016
 questions[38]= "39)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[38]= new Array();
 choices[38][0] = "Tres a&ntilde;os.";
 choices[38][1] = "Dos a&ntilde;os y medio.";
 choices[38][2] = "Cinco a&ntilde;os.";
 choices[38][3] = "Seis a&ntilde;os.";
 answers[38] = choices[38][2];
 units[38] = "5";
 comments[38] = "Id Pregunta: 10289. UNION EUROPEA";


//  Id pregunta: 10537 AÃ±o de creación de pregunta: 2016
 questions[39]= "40)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[39]= new Array();
 choices[39][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[39][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[39][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[39][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[39] = choices[39][1];
 units[39] = "7";
 comments[39] = "Id Pregunta: 10537. LEY 39/2015";


//  Id pregunta: 10565 AÃ±o de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[40]= new Array();
 choices[40][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[40][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[40][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[40][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[40] = choices[40][3];
 units[40] = "12";
 comments[40] = "Id Pregunta: 10565. Modelo econ&oacute;mico";


//  Id pregunta: 10303 AÃ±o de creación de pregunta: 2016
 questions[41]= "42)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[41]= new Array();
 choices[41][0] = "Veinticinco.";
 choices[41][1] = "Veintisiete.";
 choices[41][2] = "Veintinueve.";
 choices[41][3] = "Cuarenta y uno.";
 answers[41] = choices[41][1];
 units[41] = "5";
 comments[41] = "Id Pregunta: 10303. UNION EUROPEA";


//  Id pregunta: 10669 AÃ±o de creación de pregunta: 2016
 questions[42]= "43)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[42]= new Array();
 choices[42][0] = "Resoluci&oacute;n.";
 choices[42][1] = "Desistimiento o renuncia.";
 choices[42][2] = "Caducidad.";
 choices[42][3] = "Todas las anteriores.";
 answers[42] = choices[42][3];
 units[42] = "7";
 comments[42] = "Id Pregunta: 10669. Art&iacute;culo 84 de la Ley 39/2015";


//  Id pregunta: 10050 AÃ±o de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas del DNI electr&oacute;nico es exclusiva del DNIe 3.0?";
 choices[43]= new Array();
 choices[43][0] = "Cumple la norma ISO 7816 para tarjetas inteligentes.";
 choices[43][1] = "Emplea la tecnolog&iacute;a inal&aacute;mbrica NFC.";
 choices[43][2] = "Contiene certificados de componente, autenticaci&oacute;n y firma.";
 choices[43][3] = "Sus certificados cumplen la norma X509 v3.";
 answers[43] = choices[43][1];
 units[43] = "78";
 comments[43] = "Id Pregunta: 10050. AGE A1 2015";


//  Id pregunta: 10040 AÃ±o de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[44]= new Array();
 choices[44][0] = "Drupal";
 choices[44][1] = "Cassandra";
 choices[44][2] = "Wordpress";
 choices[44][3] = "OpenCMS";
 answers[44] = choices[44][1];
 units[44] = "99";
 comments[44] = "Id Pregunta: 10040. AGE A1 2015";


//  Id pregunta: 10339 AÃ±o de creación de pregunta: 2016
 questions[45]= "46)  La presidencia del Consejo se ejerce de forma rotatoria cada:";
 choices[45]= new Array();
 choices[45][0] = "4 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[45][1] = "6 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[45][2] = "4 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 choices[45][3] = "6 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 answers[45] = choices[45][1];
 units[45] = "5";
 comments[45] = "Id Pregunta: 10339. UNION EUROPEA";


//  Id pregunta: 10275 AÃ±o de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[46]= new Array();
 choices[46][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[46][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[46][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[46][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[46] = choices[46][2];
 units[46] = "22";
 comments[46] = "Id Pregunta: 10275. LEY DE TRANSPARENCIA";


//  Id pregunta: 10104 AÃ±o de creación de pregunta: 2016
 questions[47]= "48)  Son bases de datos NoSQL:";
 choices[47]= new Array();
 choices[47][0] = "MongoDB y Maria DB";
 choices[47][1] = "HBase y Dynamo";
 choices[47][2] = "MariaDB, Cassandra y BigTable";
 choices[47][3] = "La A) y la C)";
 answers[47] = choices[47][1];
 units[47] = "73";
 comments[47] = "Id Pregunta: 10104. ";


//  Id pregunta: 10185 AÃ±o de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[48]= new Array();
 choices[48][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[48][1] = "Autorizar indultos generales.";
 choices[48][2] = "Sancionar las leyes.";
 choices[48][3] = "Promulgar las leyes.";
 answers[48] = choices[48][1];
 units[48] = "1";
 comments[48] = "Id Pregunta: 10185. CONSTITUCION1978";


//  Id pregunta: 10481 AÃ±o de creación de pregunta: 2016
 questions[49]= "50)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[49]= new Array();
 choices[49][0] = "Cuatro millones de euros.";
 choices[49][1] = "Seis millones de euros.";
 choices[49][2] = "Siete millones de euros.";
 choices[49][3] = "Cinco millones de euros.";
 answers[49] = choices[49][1];
 units[49] = "10";
 comments[49] = "Id Pregunta: 10481. PRESUPUESTOS GENERALES";


//  Id pregunta: 10642 AÃ±o de creación de pregunta: 2016
 questions[50]= "51)  En Itil V3 la Gesti&oacute;n de la Cartera de Servicios pertenece a la fase de ciclo de vida:";
 choices[50]= new Array();
 choices[50][0] = "Dise&ntilde;o del servicio.";
 choices[50][1] = "Transici&oacute;n del servicio.";
 choices[50][2] = "Estrategia del servicio.";
 choices[50][3] = "Operaci&oacute;n del servicio.";
 answers[50] = choices[50][2];
 units[50] = "101";
 comments[50] = "Id Pregunta: 10642. Junta de Extremadura A1 2015";


//  Id pregunta: 10321 AÃ±o de creación de pregunta: 2016
 questions[51]= "52)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[51]= new Array();
 choices[51][0] = "Cincuenta y cuatro.";
 choices[51][1] = "Cincuenta.";
 choices[51][2] = "Cincuenta y cinco.";
 choices[51][3] = "Cincuenta y dos.";
 answers[51] = choices[51][1];
 units[51] = "5";
 comments[51] = "Id Pregunta: 10321. UNION EUROPEA";


//  Id pregunta: 10325 AÃ±o de creación de pregunta: 2016
 questions[52]= "53)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[52]= new Array();
 choices[52][0] = "Veinticinco.";
 choices[52][1] = "Veintiuno.";
 choices[52][2] = "Dieciocho.";
 choices[52][3] = "Diecinueve.";
 answers[52] = choices[52][0];
 units[52] = "5";
 comments[52] = "Id Pregunta: 10325. UNION EUROPEA";


//  Id pregunta: 10434 AÃ±o de creación de pregunta: 2016
 questions[53]= "54)  En cuanto al sistema EGEO, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[53]= new Array();
 choices[53][0] = "Permite la representaci&oacute;n de mapas tem&aacute;ticos, georreferenciados, buscador de recursos georreferenciados con filtros definidos por el usuario, y de magnitud.";
 choices[53][1] = "Utiliza &uacute;nicamente sobre mapas oficiales del Instituto Geogr&aacute;fico Nacional (IGN).";
 choices[53][2] = "Es un servicio com&uacute;n dirigido a &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[53][3] = "Para su manejo, es necesario contar con conocimientos de georreferenciaci&oacute;n.";
 answers[53] = choices[53][0];
 units[53] = "43";
 comments[53] = "Id Pregunta: 10434. SERVICIOS COMUNES";


//  Id pregunta: 10080 AÃ±o de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[54]= new Array();
 choices[54][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[54][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[54][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[54][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[54] = choices[54][3];
 units[54] = "46";
 comments[54] = "Id Pregunta: 10080. AGE A1 2015";


//  Id pregunta: 10574 AÃ±o de creación de pregunta: 2016
 questions[55]= "56)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[55]= new Array();
 choices[55][0] = "Mercurial, Git y Apache Subversion.";
 choices[55][1] = "Gimp, Mercurial y Git.";
 choices[55][2] = "RedMine, Planner y OpenProj.";
 choices[55][3] = "Cassandra, Git y REDIS.";
 answers[55] = choices[55][0];
 units[55] = "92";
 comments[55] = "Id Pregunta: 10574. Tema 92. TAI 2016.";


//  Id pregunta: 10458 AÃ±o de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[56]= new Array();
 choices[56][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[56][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[56][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[56][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[56] = choices[56][3];
 units[56] = "10";
 comments[56] = "Id Pregunta: 10458. PRESUPUESTOS GENERALES";


//  Id pregunta: 10598 AÃ±o de creación de pregunta: 2016
 questions[57]= "58)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[57]= new Array();
 choices[57][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[57][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[57][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[57][3] = "Todas las respuestas anteriores son correctas.";
 answers[57] = choices[57][0];
 units[57] = "45";
 comments[57] = "Id Pregunta: 10598. Junta de Extremadura A1 2015";


//  Id pregunta: 10624 AÃ±o de creación de pregunta: 2016
 questions[58]= "59)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[58]= new Array();
 choices[58][0] = "En sentencias switch para alterar el control de flujo.";
 choices[58][1] = "Para manejar excepciones.";
 choices[58][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[58][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[58] = choices[58][1];
 units[58] = "64";
 comments[58] = "Id Pregunta: 10624. Junta de Extremadura A1 2015";


//  Id pregunta: 10163 AÃ±o de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[59]= new Array();
 choices[59][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[59][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[59][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[59][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[59] = choices[59][0];
 units[59] = "19";
 comments[59] = "Id Pregunta: 10163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 10583 AÃ±o de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[60]= new Array();
 choices[60][0] = "Los principios rectores";
 choices[60][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[60][2] = "Los hitos para su desarrollo gradual";
 choices[60][3] = "Todos los anteriores";
 answers[60] = choices[60][3];
 units[60] = "19";
 comments[60] = "Id Pregunta: 10583. Estrategia TIC";


//  Id pregunta: 10160 AÃ±o de creación de pregunta: 2016
 questions[61]= "62)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[61]= new Array();
 choices[61][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[61][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[61][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[61][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[61] = choices[61][1];
 units[61] = "19";
 comments[61] = "Id Pregunta: 10160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 10543 AÃ±o de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[62]= new Array();
 choices[62][0] = "ISO/IEC 31000";
 choices[62][1] = "ISO/IEC 14000";
 choices[62][2] = "ISO/IEC 38500";
 choices[62][3] = "ISO/IEC 18000";
 answers[62] = choices[62][2];
 units[62] = "26";
 comments[62] = "Id Pregunta: 10543. Gobernanza TIC";


//  Id pregunta: 10500 AÃ±o de creación de pregunta: 2016
 questions[63]= "64)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[63]= new Array();
 choices[63][0] = "El presidente de las Cortes Generales.";
 choices[63][1] = "El Presidente del Gobierno.";
 choices[63][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[63][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[63] = choices[63][3];
 units[63] = "10";
 comments[63] = "Id Pregunta: 10500. PRESUPUESTOS GENERALES";


//  Id pregunta: 10323 AÃ±o de creación de pregunta: 2016
 questions[64]= "65)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[64]= new Array();
 choices[64][0] = "Tres a&ntilde;os.";
 choices[64][1] = "Cuatro a&ntilde;os.";
 choices[64][2] = "Cinco a&ntilde;os.";
 choices[64][3] = "Seis a&ntilde;os.";
 answers[64] = choices[64][3];
 units[64] = "5";
 comments[64] = "Id Pregunta: 10323. UNION EUROPEA";


//  Id pregunta: 10107 AÃ±o de creación de pregunta: 2016
 questions[65]= "66)  Son bases de datos NoSQL orientadas a objetos:";
 choices[65]= new Array();
 choices[65][0] = "GemStone";
 choices[65][1] = "Zope Object DB";
 choices[65][2] = "Las dos anteriores";
 choices[65][3] = "Solo B)";
 answers[65] = choices[65][2];
 units[65] = "73";
 comments[65] = "Id Pregunta: 10107. ";


//  Id pregunta: 10242 AÃ±o de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[66]= new Array();
 choices[66][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[66][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[66][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[66][3] = "Sancionar y publicar las leyes.";
 answers[66] = choices[66][2];
 units[66] = "1";
 comments[66] = "Id Pregunta: 10242. CONSTITUCION1978";


//  Id pregunta: 10272 AÃ±o de creación de pregunta: 2016
 questions[67]= "68)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[67]= new Array();
 choices[67][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[67][1] = "Anteriormente se denominaba Sonar.";
 choices[67][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[67][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[67] = choices[67][2];
 units[67] = "92";
 comments[67] = "Id Pregunta: 10272. INTEGRACION CONTINUA";


//  Id pregunta: 10561 AÃ±o de creación de pregunta: 2016
 questions[68]= "69)  El plan nacional de ciudades inteligentes...";
 choices[68]= new Array();
 choices[68][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[68][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[68][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[68][3] = "No existe";
 answers[68] = choices[68][1];
 units[68] = "19";
 comments[68] = "Id Pregunta: 10561. Ciudades Inteligentes";


//  Id pregunta: 10212 AÃ±o de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[69]= new Array();
 choices[69][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[69][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[69][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[69][3] = "El Senado se compone de 350 senadores.";
 answers[69] = choices[69][0];
 units[69] = "1";
 comments[69] = "Id Pregunta: 10212. CONSTITUCION1978";


//  Id pregunta: 10085 AÃ±o de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[70]= new Array();
 choices[70][0] = "Estimaci&oacute;n del riesgo";
 choices[70][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[70][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[70][3] = "Mapa de riesgos";
 answers[70] = choices[70][3];
 units[70] = "45";
 comments[70] = "Id Pregunta: 10085. AGE A1 2015";


//  Id pregunta: 10295 AÃ±o de creación de pregunta: 2016
 questions[71]= "72)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[71]= new Array();
 choices[71][0] = "Estrasburgo.";
 choices[71][1] = "Bruselas.";
 choices[71][2] = "Luxemburgo.";
 choices[71][3] = "Holanda.";
 answers[71] = choices[71][2];
 units[71] = "5";
 comments[71] = "Id Pregunta: 10295. UNION EUROPEA";


//  Id pregunta: 10400 AÃ±o de creación de pregunta: 2016
 questions[72]= "73)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[72]= new Array();
 choices[72][0] = "A la persona demandante.";
 choices[72][1] = "A la persona demandada.";
 choices[72][2] = "Al &oacute;rgano judicial.";
 choices[72][3] = "Al &oacute;rgano administrativo.";
 answers[72] = choices[72][1];
 units[72] = "14";
 comments[72] = "Id Pregunta: 10400. POLITICAS DE IGUALDAD";


//  Id pregunta: 10631 AÃ±o de creación de pregunta: 2016
 questions[73]= "74)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[73]= new Array();
 choices[73][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[73][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[73][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[73][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[73] = choices[73][2];
 units[73] = "50";
 comments[73] = "Id Pregunta: 10631. Junta de Extremadura A1 2015";


//  Id pregunta: 10203 AÃ±o de creación de pregunta: 2016
 questions[74]= "75)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[74]= new Array();
 choices[74][0] = "Ley Org&aacute;nica.";
 choices[74][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[74][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[74][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[74] = choices[74][2];
 units[74] = "1";
 comments[74] = "Id Pregunta: 10203. CONSTITUCION1978";


//  Id pregunta: 10139 AÃ±o de creación de pregunta: 2016
 questions[75]= "76)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[75]= new Array();
 choices[75][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[75][1] = "Static &amp; Active process for REsolution Bank.";
 choices[75][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[75][3] = "Super Active REsponse for Banks";
 answers[75] = choices[75][0];
 units[75] = "12";
 comments[75] = "Id Pregunta: 10139. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10398 AÃ±o de creación de pregunta: 2016
 questions[76]= "77)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[76]= new Array();
 choices[76][0] = "Art. 13, L.O.3/2007.";
 choices[76][1] = "Art. 14, L.O.3/2007.";
 choices[76][2] = "Art. 11, L.O.3/2007.";
 choices[76][3] = "Ninguna es correcta.";
 answers[76] = choices[76][2];
 units[76] = "14";
 comments[76] = "Id Pregunta: 10398. POLITICAS DE IGUALDAD";


//  Id pregunta: 10059 AÃ±o de creación de pregunta: 2016
 questions[77]= "78)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[77]= new Array();
 choices[77][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[77][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[77][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[77][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[77] = choices[77][3];
 units[77] = "101";
 comments[77] = "Id Pregunta: 10059. AGE A1 2015";


//  Id pregunta: 10244 AÃ±o de creación de pregunta: 2016
 questions[78]= "79)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[78]= new Array();
 choices[78][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[78][1] = "Publicidad de las normas.";
 choices[78][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[78][3] = "Coordinaci&oacute;n normativa.";
 answers[78] = choices[78][2];
 units[78] = "1";
 comments[78] = "Id Pregunta: 10244. CONSTITUCION1978";


//  Id pregunta: 10135 AÃ±o de creación de pregunta: 2016
 questions[79]= "80)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[79]= new Array();
 choices[79][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[79][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[79][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[79][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[79] = choices[79][0];
 units[79] = "12";
 comments[79] = "Id Pregunta: 10135. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10078 AÃ±o de creación de pregunta: 2016
 questions[80]= "81)  En relaci&oacute;n con la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, se&ntilde;ale la respuesta correcta:";
 choices[80]= new Array();
 choices[80][0] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, el interesado debe instar su rectificaci&oacute;n, sin que puedan ser cancelados y sustituidos de oficio por los datos rectificados o completados.";
 choices[80][1] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, ser&aacute;n cancelados y sustituidos de oficio por los datos rectificados o completados, sin perjuicio del derecho de rectificaci&oacute;n y cancelaci&oacute;n del afectado.";
 choices[80][2] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 15 d&iacute;as.";
 choices[80][3] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 1 mes.";
 answers[80] = choices[80][1];
 units[80] = "35";
 comments[80] = "Id Pregunta: 10078. AGE A1 2015";


//  Id pregunta: 10164 AÃ±o de creación de pregunta: 2016
 questions[81]= "82)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[81]= new Array();
 choices[81][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[81][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[81][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[81][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[81] = choices[81][1];
 units[81] = "19";
 comments[81] = "Id Pregunta: 10164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";


//  Id pregunta: 10239 AÃ±o de creación de pregunta: 2016
 questions[82]= "83)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[82]= new Array();
 choices[82][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[82][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[82][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[82][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[82] = choices[82][0];
 units[82] = "1";
 comments[82] = "Id Pregunta: 10239. CONSTITUCION1978";


//  Id pregunta: 10209 AÃ±o de creación de pregunta: 2016
 questions[83]= "84)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[83]= new Array();
 choices[83][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[83][1] = "El Congreso de los Diputados.";
 choices[83][2] = "Las Cortes Generales.";
 choices[83][3] = "El Consejo de Ministros";
 answers[83] = choices[83][3];
 units[83] = "1";
 comments[83] = "Id Pregunta: 10209. CONSTITUCION1978";


//  Id pregunta: 10297 AÃ±o de creación de pregunta: 2016
 questions[84]= "85)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[84]= new Array();
 choices[84][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[84][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[84][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[84][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[84] = choices[84][1];
 units[84] = "5";
 comments[84] = "Id Pregunta: 10297. UNION EUROPEA";


//  Id pregunta: 10367 AÃ±o de creación de pregunta: 2016
 questions[85]= "86)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[85]= new Array();
 choices[85][0] = "Presentar la moci&oacute;n de censura.";
 choices[85][1] = "Presidir las sesiones del Parlamento.";
 choices[85][2] = "Organizar la Secretar&iacute;a General.";
 choices[85][3] = "Preparar las actividades de las Comisiones.";
 answers[85] = choices[85][1];
 units[85] = "5";
 comments[85] = "Id Pregunta: 10367. UNION EUROPEA";


//  Id pregunta: 10450 AÃ±o de creación de pregunta: 2016
 questions[86]= "87)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[86]= new Array();
 choices[86][0] = "Cifrada";
 choices[86][1] = "Conjunta";
 choices[86][2] = "Sistem&aacute;tica";
 choices[86][3] = "Todas son correctas";
 answers[86] = choices[86][3];
 units[86] = "10";
 comments[86] = "Id Pregunta: 10450. PRESUPUESTOS GENERALES";


//  Id pregunta: 10002 AÃ±o de creación de pregunta: 2016
 questions[87]= "88)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[87]= new Array();
 choices[87][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[87][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[87][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[87][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[87] = choices[87][0];
 units[87] = "31";
 comments[87] = "Id Pregunta: 10002. AGE A1 2015";


//  Id pregunta: 10360 AÃ±o de creación de pregunta: 2016
 questions[88]= "89)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[88]= new Array();
 choices[88][0] = "786 Diputados como m&aacute;ximo.";
 choices[88][1] = "600 Diputados como m&aacute;ximo.";
 choices[88][2] = "650 Diputados como m&aacute;ximo.";
 choices[88][3] = "732 Diputados como m&aacute;ximo.";
 answers[88] = choices[88][0];
 units[88] = "5";
 comments[88] = "Id Pregunta: 10360. UNION EUROPEA";


//  Id pregunta: 10508 AÃ±o de creación de pregunta: 2016
 questions[89]= "90)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[89]= new Array();
 choices[89][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[89][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[89][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[89][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[89] = choices[89][3];
 units[89] = "10";
 comments[89] = "Id Pregunta: 10508. PRESUPUESTOS GENERALES";


//  Id pregunta: 10202 AÃ±o de creación de pregunta: 2016
 questions[90]= "91)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[90]= new Array();
 choices[90][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[90][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[90][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[90][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[90] = choices[90][0];
 units[90] = "1";
 comments[90] = "Id Pregunta: 10202. CONSTITUCION1978";


//  Id pregunta: 10126 AÃ±o de creación de pregunta: 2016
 questions[91]= "92)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[91]= new Array();
 choices[91][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[91][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[91][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[91][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[91] = choices[91][3];
 units[91] = "22";
 comments[91] = "Id Pregunta: 10126. ";


//  Id pregunta: 10510 AÃ±o de creación de pregunta: 2016
 questions[92]= "93)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[92]= new Array();
 choices[92][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[92][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[92][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[92][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[92] = choices[92][2];
 units[92] = "7";
 comments[92] = "Id Pregunta: 10510. LEY 39/2015";


//  Id pregunta: 10117 AÃ±o de creación de pregunta: 2016
 questions[93]= "94)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[93]= new Array();
 choices[93][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[93][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas ";
 choices[93][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[93][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[93] = choices[93][0];
 units[93] = "15";
 comments[93] = "Id Pregunta: 10117. ";


//  Id pregunta: 10524 AÃ±o de creación de pregunta: 2016
 questions[94]= "95)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[94]= new Array();
 choices[94][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[94][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[94][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[94][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[94] = choices[94][3];
 units[94] = "7";
 comments[94] = "Id Pregunta: 10524. LEY 39/2015";


//  Id pregunta: 10233 AÃ±o de creación de pregunta: 2016
 questions[95]= "96)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[95]= new Array();
 choices[95][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[95][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[95][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[95][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[95] = choices[95][2];
 units[95] = "1";
 comments[95] = "Id Pregunta: 10233. CONSTITUCION1978";


//  Id pregunta: 10453 AÃ±o de creación de pregunta: 2016
 questions[96]= "97)  En las Administraciones P&uacute;blicas...";
 choices[96]= new Array();
 choices[96][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[96][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[96][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[96][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[96] = choices[96][0];
 units[96] = "10";
 comments[96] = "Id Pregunta: 10453. PRESUPUESTOS GENERALES";


//  Id pregunta: 10622 AÃ±o de creación de pregunta: 2016
 questions[97]= "98)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[97]= new Array();
 choices[97][0] = "Entradas (entities).";
 choices[97][1] = "Atributos (attribs).";
 choices[97][2] = "M&oacute;dulos (modules).";
 choices[97][3] = "Objetos (objects).";
 answers[97] = choices[97][0];
 units[97] = "74";
 comments[97] = "Id Pregunta: 10622. Junta de Extremadura A1 2015";


//  Id pregunta: 10305 AÃ±o de creación de pregunta: 2016
 questions[98]= "99)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[98]= new Array();
 choices[98][0] = "Estrasburgo.";
 choices[98][1] = "Bruselas.";
 choices[98][2] = "Luxemburgo.";
 choices[98][3] = "Par&iacute;s.";
 answers[98] = choices[98][1];
 units[98] = "5";
 comments[98] = "Id Pregunta: 10305. UNION EUROPEA";


//  Id pregunta: 10324 AÃ±o de creación de pregunta: 2016
 questions[99]= "100)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[99]= new Array();
 choices[99][0] = "Tres a&ntilde;os.";
 choices[99][1] = "Cuatro a&ntilde;os.";
 choices[99][2] = "Cinco a&ntilde;os.";
 choices[99][3] = "Seis a&ntilde;os.";
 answers[99] = choices[99][0];
 units[99] = "5";
 comments[99] = "Id Pregunta: 10324. UNION EUROPEA";


