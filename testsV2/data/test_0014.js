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


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[1]= "2)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[1]= new Array();
 choices[1][0] = "Versi&oacute;n digital prioritaria.";
 choices[1][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[1][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[1][3] = "Apertura y transparencia.";
 answers[1] = choices[1][0];
 units[1] = "5";
 comments[1] = "Id Pregunta: 287. UNION EUROPEA";
 preguntaids[1] = 287


//  Id pregunta: 863 Año de creación de pregunta: 2016
 questions[2]= "3)  Se recomienda que todas aquellas campa&ntilde;as de los ministerios que cuenten con su propia p&aacute;gina web, cuenten adem&aacute;s con un subdominio o URL secundaria en la estructura general de la p&aacute;gina web del Ministerio. Indique la opci&oacute;n correcta.";
 choices[2]= new Array();
 choices[2][0] = "Se podr&aacute; utilizar de forma opcional descripciones sem&aacute;nticas en el nombramiento y titulaci&oacute;n de los subdominios.";
 choices[2][1] = "RUN implementa una soluci&oacute;n sencilla de generaci&oacute;n de URL cortas  para una mejora en la eficiencia de la remisi&oacute;n de direcciones web mediante email, sms, twitter etc";
 choices[2][2] = "El nombre del subdominio o URL secundaria debe ser distinto al que se utilice como URL independiente.";
 choices[2][3] = "Con los subdominios o URL secundarias los robots de los buscadores requerir&aacute;n m&aacute;s tiempo en interpretar su dependencia contextual con el Ministerio u &Oacute;rgano de la Administraci&oacute;n.";
 answers[2] = choices[2][1];
 units[2] = "125";
 comments[2] = "Id Pregunta: 863. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[2] = 863


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[3]= "4)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[3]= new Array();
 choices[3][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[3][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[3][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[3][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[3] = choices[3][2];
 units[3] = "12";
 comments[3] = "Id Pregunta: 136. Leyes modelo econ&oacute;mico";
 preguntaids[3] = 136


//  Id pregunta: 629 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[4]= new Array();
 choices[4][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[4][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[4][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[4][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[4] = choices[4][0];
 units[4] = "46";
 comments[4] = "Id Pregunta: 629. Junta de Extremadura A1 2015";
 preguntaids[4] = 629


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[5]= "6)  Las Administraciones P&uacute;blicas:";
 choices[5]= new Array();
 choices[5][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[5][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[5][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[5][3] = "todas son correctas";
 answers[5] = choices[5][1];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 772. Ley 40/2015";
 preguntaids[5] = 772


//  Id pregunta: 489 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[6]= new Array();
 choices[6][0] = "Las Cortes Generales.";
 choices[6][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[6][2] = "El Gobierno.";
 choices[6][3] = "El Congreso de los Diputados.";
 answers[6] = choices[6][0];
 units[6] = "10";
 comments[6] = "Id Pregunta: 489. PRESUPUESTOS GENERALES";
 preguntaids[6] = 489


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[7]= "8)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[7]= new Array();
 choices[7][0] = "De las disposiciones favorables.";
 choices[7][1] = "De las disposiciones sancionadoras no favorables.";
 choices[7][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[7][3] = "Las respuestas b) y c) son correctas.";
 answers[7] = choices[7][3];
 units[7] = "1";
 comments[7] = "Id Pregunta: 252. CONSTITUCION1978";
 preguntaids[7] = 252


//  Id pregunta: 336 Año de creación de pregunta: 2016
 questions[8]= "9)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[8]= new Array();
 choices[8][0] = "Diciembre de 1987.";
 choices[8][1] = "Septiembre de 1989.";
 choices[8][2] = "Octubre de 1990.";
 choices[8][3] = "Noviembre de 1980.";
 answers[8] = choices[8][1];
 units[8] = "5";
 comments[8] = "Id Pregunta: 336. UNION EUROPEA";
 preguntaids[8] = 336


//  Id pregunta: 742 Año de creación de pregunta: 2016
 questions[9]= "10)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[9]= new Array();
 choices[9][0] = "Proveer de manera compartida servicios comunes";
 choices[9][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[9][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[9][3] = "Transparencia";
 answers[9] = choices[9][1];
 units[9] = "28";
 comments[9] = "Id Pregunta: 742. Estrategia TIC";
 preguntaids[9] = 742


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[10]= "11)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[10]= new Array();
 choices[10][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[10][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[10][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[10][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[10] = choices[10][0];
 units[10] = "10";
 comments[10] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";
 preguntaids[10] = 484


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[11]= "12)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[11]= new Array();
 choices[11][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[11][1] = "Static &amp; Active process for REsolution Bank.";
 choices[11][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[11][3] = "Super Active REsponse for Banks";
 answers[11] = choices[11][0];
 units[11] = "12";
 comments[11] = "Id Pregunta: 139. Leyes modelo econ&oacute;mico";
 preguntaids[11] = 139


//  Id pregunta: 803 Año de creación de pregunta: 2016
 questions[12]= "13)  La organizaci&oacute;n en Departamentos ministeriales no obsta a la existencia de:";
 choices[12]= new Array();
 choices[12][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[12][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[12][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[12][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[12] = choices[12][3];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 803. Ley 40/2015";
 preguntaids[12] = 803


//  Id pregunta: 668 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[13]= new Array();
 choices[13][0] = "10 d&iacute;as.";
 choices[13][1] = "15 d&iacute;as.";
 choices[13][2] = "1 mes.";
 choices[13][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[13] = choices[13][0];
 units[13] = "7";
 comments[13] = "Id Pregunta: 668. Art&iacute;culo 73 de la Ley 39/2015";
 preguntaids[13] = 668


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[14]= new Array();
 choices[14][0] = "Anual";
 choices[14][1] = "Mensual";
 choices[14][2] = "Semestral";
 choices[14][3] = "Trimestral";
 answers[14] = choices[14][3];
 units[14] = "15";
 comments[14] = "Id Pregunta: 119. ";
 preguntaids[14] = 119


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[15]= "16)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[15]= new Array();
 choices[15][0] = "A la persona demandante.";
 choices[15][1] = "A la persona demandada.";
 choices[15][2] = "Al &oacute;rgano judicial.";
 choices[15][3] = "Al &oacute;rgano administrativo.";
 answers[15] = choices[15][1];
 units[15] = "14";
 comments[15] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";
 preguntaids[15] = 400


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[16]= new Array();
 choices[16][0] = "Bienalmente";
 choices[16][1] = "Anualmente";
 choices[16][2] = "Semestralmente";
 choices[16][3] = "Cada cuatro a&ntilde;os";
 answers[16] = choices[16][1];
 units[16] = "19";
 comments[16] = "Id Pregunta: 586. Estrategia TIC";
 preguntaids[16] = 586


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[17]= "18)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[17]= new Array();
 choices[17][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[17][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[17][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[17][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[17] = choices[17][2];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 784. Ley 40/2015";
 preguntaids[17] = 784


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[18]= "19)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[18]= new Array();
 choices[18][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[18][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[18][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[18][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[18] = choices[18][0];
 units[18] = "1";
 comments[18] = "Id Pregunta: 270. CONSTITUCION1978";
 preguntaids[18] = 270


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[19]= "20)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[19]= new Array();
 choices[19][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[19][1] = "los Subdelegados del Gobierno en las provincias";
 choices[19][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[19][3] = "a y b son correctas";
 answers[19] = choices[19][3];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 790. Ley 40/2015";
 preguntaids[19] = 790


//  Id pregunta: 381 Año de creación de pregunta: 2016
 questions[20]= "21)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[20]= new Array();
 choices[20][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[20][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[20][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[20][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[20] = choices[20][0];
 units[20] = "14";
 comments[20] = "Id Pregunta: 381. POLITICAS DE IGUALDAD";
 preguntaids[20] = 381


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[21]= "22)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[21]= new Array();
 choices[21][0] = "El Consejo Europeo.";
 choices[21][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[21][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[21][3] = "El Parlamento Europeo.";
 answers[21] = choices[21][0];
 units[21] = "5";
 comments[21] = "Id Pregunta: 313. UNION EUROPEA";
 preguntaids[21] = 313


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[22]= new Array();
 choices[22][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[22][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[22][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[22][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[22] = choices[22][0];
 units[22] = "75";
 comments[22] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[22] = 70


//  Id pregunta: 325 Año de creación de pregunta: 2016
 questions[23]= "24)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[23]= new Array();
 choices[23][0] = "Veinticinco.";
 choices[23][1] = "Veintiuno.";
 choices[23][2] = "Dieciocho.";
 choices[23][3] = "Diecinueve.";
 answers[23] = choices[23][0];
 units[23] = "5";
 comments[23] = "Id Pregunta: 325. UNION EUROPEA";
 preguntaids[23] = 325


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[24]= "25)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[24]= new Array();
 choices[24][0] = "Pas&oacute; de 518 a 626.";
 choices[24][1] = "Pas&oacute; de 434 a 518.";
 choices[24][2] = "Pas&oacute; de 345 a 512.";
 choices[24][3] = "Pas&oacute; de 435 a 610.";
 answers[24] = choices[24][1];
 units[24] = "5";
 comments[24] = "Id Pregunta: 344. UNION EUROPEA";
 preguntaids[24] = 344


//  Id pregunta: 677 Año de creación de pregunta: 2016
 questions[25]= "26)  En referencia al proyecto ANDES, para la comunicaci&oacute;n telem&aacute;tica de Nacimientos desde Centros Sanitarios a Registros Civiles, indique cual de las siguientes afirmaciones es falsa:";
 choices[25]= new Array();
 choices[25][0] = "Tiene sustento legal de acuerdo a la Ley 19/2015, de 13 de julio, de medidas de reforma administrativa en el &aacute;mbito de la Administraci&oacute;n de Justicia y del Registro Civil.";
 choices[25][1] = "Se inicia a partir de su propuesta en CORA (Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas).";
 choices[25][2] = "Reutiliza el servicio horizontal ACCEDA en modo cloud, lo cual ha facilitado la pronta puesta en marcha de la soluci&oacute;n.";
 choices[25][3] = "La utilizaci&oacute;n de ANDES por parte de los hospitales es completamente transparente, sin necesidad de realizar pasos previos para su despliegue.";
 answers[25] = choices[25][3];
 units[25] = "47";
 comments[25] = "Id Pregunta: 677. Inscripci&oacute;n autom&aacute;tica nacimientos";
 preguntaids[25] = 677


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[26]= "27)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[26]= new Array();
 choices[26][0] = "El Ministerio de Hacienda.";
 choices[26][1] = "El Ministerio de Econom&iacute;a.";
 choices[26][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[26][3] = "Ninguna de las respuestas es correcta.";
 answers[26] = choices[26][2];
 units[26] = "10";
 comments[26] = "Id Pregunta: 470. PRESUPUESTOS GENERALES";
 preguntaids[26] = 470


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[27]= "28)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[27]= new Array();
 choices[27][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[27][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[27][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[27][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[27] = choices[27][0];
 units[27] = "62";
 comments[27] = "Id Pregunta: 12. AGE A1 2015";
 preguntaids[27] = 12


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[28]= "29)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[28]= new Array();
 choices[28][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[28][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[28][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[28][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[28] = choices[28][2];
 units[28] = "22";
 comments[28] = "Id Pregunta: 97. AGE A1 2015";
 preguntaids[28] = 97


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[29]= new Array();
 choices[29][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[29][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[29][2] = "Fomentar el despliegue de redes y servicios";
 choices[29][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[29] = choices[29][0];
 units[29] = "19";
 comments[29] = "Id Pregunta: 754. Agenda Digital para Espa&ntilde;a";
 preguntaids[29] = 754


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[30]= "31)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[30]= new Array();
 choices[30][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[30][1] = "Publicidad de las normas.";
 choices[30][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[30][3] = "Coordinaci&oacute;n normativa.";
 answers[30] = choices[30][2];
 units[30] = "1";
 comments[30] = "Id Pregunta: 244. CONSTITUCION1978";
 preguntaids[30] = 244


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[31]= "32)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[31]= new Array();
 choices[31][0] = "Un a&ntilde;o prorrogable";
 choices[31][1] = "Dos a&ntilde;os no prorrogables";
 choices[31][2] = "Un a&ntilde;o no prorrogable";
 choices[31][3] = "Dos a&ntilde;os prorrogables";
 answers[31] = choices[31][2];
 units[31] = "37";
 comments[31] = "Id Pregunta: 86. AGE A1 2015";
 preguntaids[31] = 86


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[32]= "33)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[32]= new Array();
 choices[32][0] = "Ejecutivo";
 choices[32][1] = "Limitativo";
 choices[32][2] = "Estimativo";
 choices[32][3] = "Progresivo";
 answers[32] = choices[32][2];
 units[32] = "10";
 comments[32] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";
 preguntaids[32] = 448


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[33]= new Array();
 choices[33][0] = "Lean startup";
 choices[33][1] = "Business Model Canvas";
 choices[33][2] = "Dynamic system Development method";
 choices[33][3] = "Lean software development";
 answers[33] = choices[33][2];
 units[33] = "34";
 comments[33] = "Id Pregunta: 722. Metodologias Lean";
 preguntaids[33] = 722


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[34]= "35)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[34]= new Array();
 choices[34][0] = "Cifrado de las comunicaciones";
 choices[34][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[34][2] = "Registro de los accesos";
 choices[34][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[34] = choices[34][1];
 units[34] = "35";
 comments[34] = "Id Pregunta: 51. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";
 preguntaids[34] = 51


//  Id pregunta: 330 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[35]= new Array();
 choices[35][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[35][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[35][2] = "Todas son correctas.";
 choices[35][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[35] = choices[35][2];
 units[35] = "5";
 comments[35] = "Id Pregunta: 330. UNION EUROPEA";
 preguntaids[35] = 330


//  Id pregunta: 704 Año de creación de pregunta: 2016
 questions[36]= "37)  En el modelo de integraci&oacute;n continua se recomienda:";
 choices[36]= new Array();
 choices[36][0] = "Mantener un repositorio de c&oacute;digo.";
 choices[36][1] = "Realizar una migraci&oacute;n manual y controlada a cada entorno de desarrollo.";
 choices[36][2] = "Realizar las construcciones de versiones agrupando m&uacute;ltiples commits para optimizar el tiempo de proceso.";
 choices[36][3] = "Realizar las pruebas en el entorno de producci&oacute;n para obtener resultados reales.";
 answers[36] = choices[36][1];
 units[36] = "92";
 comments[36] = "Id Pregunta: 704. INTEGRACION CONTINUA";
 preguntaids[36] = 704


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[37]= "38)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[37]= new Array();
 choices[37][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[37][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[37][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[37][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[37] = choices[37][0];
 units[37] = "60";
 comments[37] = "Id Pregunta: 651. Junta de Extremadura A1 2015";
 preguntaids[37] = 651


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[38]= "39)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[38]= new Array();
 choices[38][0] = "Windows Phone";
 choices[38][1] = "Blackberry";
 choices[38][2] = "iOS";
 choices[38][3] = "Android";
 answers[38] = choices[38][3];
 units[38] = "59";
 comments[38] = "Id Pregunta: 64. AGE A1 2015";
 preguntaids[38] = 64


//  Id pregunta: 689 Año de creación de pregunta: 2016
 questions[39]= "40)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que debe cumplir una firma electr&oacute;nica avanzada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[39]= new Array();
 choices[39][0] = "Estar vinculada al firmante de manera &uacute;nica";
 choices[39][1] = "Haber sido creada utilizando un dispositivo avanzado de creacio&#769;n de firmas electro&#769;nicas";
 choices[39][2] = "Haber sido creada utilizando datos de creaci&oacute;n de firma que el firmante puede utilizar, con un alto nivel de confianza, bajo su exclusivo control";
 choices[39][3] = "Estar vinculada con los datos firmados, de modo tal que cualquier modificacio&#769;n ulterior de los mismos sea detectable";
 answers[39] = choices[39][1];
 units[39] = "77";
 comments[39] = "Id Pregunta: 689. Art&iacute;culo 26 del Reglamento 910/2014";
 preguntaids[39] = 689


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[40]= "41)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[40]= new Array();
 choices[40][0] = "A los cinco a&ntilde;os.";
 choices[40][1] = "A los dos a&ntilde;os.";
 choices[40][2] = "A los tres a&ntilde;os.";
 choices[40][3] = "A los cuatro a&ntilde;os.";
 answers[40] = choices[40][0];
 units[40] = "10";
 comments[40] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";
 preguntaids[40] = 492


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
 preguntaids[41] = 359


//  Id pregunta: 613 Año de creación de pregunta: 2016
 questions[42]= "43)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[42]= new Array();
 choices[42][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[42][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[42][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[42][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[42] = choices[42][1];
 units[42] = "63";
 comments[42] = "Id Pregunta: 613. Junta de Extremadura A1 2015";
 preguntaids[42] = 613


//  Id pregunta: 350 Año de creación de pregunta: 2016
 questions[43]= "44)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[43]= new Array();
 choices[43][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[43][1] = "Uno de sus miembros.";
 choices[43][2] = "La Comisi&oacute;n.";
 choices[43][3] = "Todas las respuestas son correctas.";
 answers[43] = choices[43][3];
 units[43] = "5";
 comments[43] = "Id Pregunta: 350. UNION EUROPEA";
 preguntaids[43] = 350


//  Id pregunta: 608 Año de creación de pregunta: 2016
 questions[44]= "45)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[44]= new Array();
 choices[44][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[44][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[44][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[44][3] = "Todas las respuestas son correctas.";
 answers[44] = choices[44][1];
 units[44] = "101";
 comments[44] = "Id Pregunta: 608. Junta de Extremadura A1 2015";
 preguntaids[44] = 608


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[45]= new Array();
 choices[45][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[45][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[45][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[45][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[45] = choices[45][0];
 units[45] = "1";
 comments[45] = "Id Pregunta: 199. CONSTITUCION1978";
 preguntaids[45] = 199


//  Id pregunta: 390 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[46]= new Array();
 choices[46][0] = "El Consejo Nacional de la Mujer.";
 choices[46][1] = "El Consejo de la Mujer.";
 choices[46][2] = "El Instituto de la Mujer.";
 choices[46][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[46] = choices[46][3];
 units[46] = "14";
 comments[46] = "Id Pregunta: 390. POLITICAS DE IGUALDAD";
 preguntaids[46] = 390


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[47]= "48)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[47]= new Array();
 choices[47][0] = "apud acta";
 choices[47][1] = "presencialmente";
 choices[47][2] = "electr&oacute;nicamente";
 choices[47][3] = "todas son correctas";
 answers[47] = choices[47][3];
 units[47] = "7";
 comments[47] = "Id Pregunta: 538. LEY 39/2015";
 preguntaids[47] = 538


//  Id pregunta: 324 Año de creación de pregunta: 2016
 questions[48]= "49)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[48]= new Array();
 choices[48][0] = "Tres a&ntilde;os.";
 choices[48][1] = "Cuatro a&ntilde;os.";
 choices[48][2] = "Cinco a&ntilde;os.";
 choices[48][3] = "Seis a&ntilde;os.";
 answers[48] = choices[48][0];
 units[48] = "5";
 comments[48] = "Id Pregunta: 324. UNION EUROPEA";
 preguntaids[48] = 324


//  Id pregunta: 690 Año de creación de pregunta: 2016
 questions[49]= "50)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que deben cumplir los servicios cualificados de entrega electro&#769;nica certificada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[49]= new Array();
 choices[49][0] = "Ser prestados por uno o ma&#769;s prestadores cualificados de servicios de confianza";
 choices[49][1] = "Garantizar la identificacio&#769;n del destinatario antes de la entrega de los datos";
 choices[49][2] = "Indicar mediante un sello cualificado de tiempo electro&#769;nico la fecha y hora de envi&#769;o, recepcio&#769;n y eventual modificacio&#769;n de los datos";
 choices[49][3] = "Proteger el envi&#769;o y la recepcio&#769;n de datos por una firma electro&#769;nica cualificada o un sello electro&#769;nico cualificado de un prestador cualificado de servicios de confianza";
 answers[49] = choices[49][1];
 units[49] = "77";
 comments[49] = "Id Pregunta: 690. Art&iacute;culo 44 del Reglamento 910/2014";
 preguntaids[49] = 690


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[50]= "51)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[50]= new Array();
 choices[50][0] = "los Subsecretarios y Secretarios generales";
 choices[50][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[50][2] = "los Secretarios de Estado";
 choices[50][3] = "los Subdirectores generales";
 answers[50] = choices[50][2];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 789. Ley 40/2015";
 preguntaids[50] = 789


//  Id pregunta: 402 Año de creación de pregunta: 2016
 questions[51]= "52)  El principio de igualdad de trato y oportunidades entre mujeres y hombres tiene car&aacute;cter:";
 choices[51]= new Array();
 choices[51][0] = "Parcial.";
 choices[51][1] = "Sectorial.";
 choices[51][2] = "Tranversal.";
 choices[51][3] = "Vertical.";
 answers[51] = choices[51][2];
 units[51] = "14";
 comments[51] = "Id Pregunta: 402. POLITICAS DE IGUALDAD";
 preguntaids[51] = 402


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[52]= "53)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[52]= new Array();
 choices[52][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[52][1] = "garantizar la conservaci&oacute;n del documento";
 choices[52][2] = "garantizar la autenticidad del documento";
 choices[52][3] = "garantizar la integridad del documento";
 answers[52] = choices[52][0];
 units[52] = "7";
 comments[52] = "Id Pregunta: 152. Ley 39/2015, Art&iacute;culo 17";
 preguntaids[52] = 152


//  Id pregunta: 711 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[53]= new Array();
 choices[53][0] = "Ley 3/2015";
 choices[53][1] = "Ley 6/2007";
 choices[53][2] = "Ley 5/1984";
 choices[53][3] = "Ley 5/2006";
 answers[53] = choices[53][0];
 units[53] = "22";
 comments[53] = "Id Pregunta: 711. &Eacute;tica P&uacute;blica y Transparencia";
 preguntaids[53] = 711


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[54]= "55)  Indique los niveles de seguridad que contempla el Reglamento (UE) 910/2014 para los sistemas de identificaci&oacute;n electr&oacute;nica";
 choices[54]= new Array();
 choices[54][0] = "B&aacute;sico, medio y alto";
 choices[54][1] = "D&eacute;bil y fuerte";
 choices[54][2] = "Bajo, medio y alto";
 choices[54][3] = "Bajo, sustancial y alto";
 answers[54] = choices[54][3];
 units[54] = "77";
 comments[54] = "Id Pregunta: 686. Art&iacute;culo 8 del Reglamento 910/2014";
 preguntaids[54] = 686


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[55]= new Array();
 choices[55][0] = "El Tratado de Lisboa";
 choices[55][1] = "El Tratado de Amsterdam";
 choices[55][2] = "El Tratado de Niza";
 choices[55][3] = "El Acta &Uacute;nica Europea";
 answers[55] = choices[55][1];
 units[55] = "15";
 comments[55] = "Id Pregunta: 115. ";
 preguntaids[55] = 115


//  Id pregunta: 40 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[56]= new Array();
 choices[56][0] = "Drupal";
 choices[56][1] = "Cassandra";
 choices[56][2] = "Wordpress";
 choices[56][3] = "OpenCMS";
 answers[56] = choices[56][1];
 units[56] = "99";
 comments[56] = "Id Pregunta: 40. AGE A1 2015";
 preguntaids[56] = 40


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[57]= "58)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[57]= new Array();
 choices[57][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[57][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[57][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[57][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[57] = choices[57][2];
 units[57] = "7";
 comments[57] = "Id Pregunta: 512. LEY 39/2015";
 preguntaids[57] = 512


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[58]= "59)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[58]= new Array();
 choices[58][0] = "La Ley Org&aacute;nica 2/2011";
 choices[58][1] = "La Ley Org&aacute;nica 2/2012";
 choices[58][2] = "La Ley Org&aacute;nica 3/2012";
 choices[58][3] = "La Ley Org&aacute;nica 2/2002";
 answers[58] = choices[58][1];
 units[58] = "12";
 comments[58] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";
 preguntaids[58] = 138


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[59]= new Array();
 choices[59][0] = "Consumidores";
 choices[59][1] = "PYMES y Start-ups";
 choices[59][2] = "La Industria";
 choices[59][3] = "Todos los anteriores";
 answers[59] = choices[59][3];
 units[59] = "17";
 comments[59] = "Id Pregunta: 557. Mercado &Uacute;nico Digital";
 preguntaids[59] = 557


//  Id pregunta: 681 Año de creación de pregunta: 2016
 questions[60]= "61)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[60]= new Array();
 choices[60][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[60][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[60][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[60][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[60] = choices[60][1];
 units[60] = "14";
 comments[60] = "Id Pregunta: 681. Pensiones";
 preguntaids[60] = 681


//  Id pregunta: 626 Año de creación de pregunta: 2016
 questions[61]= "62)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[61]= new Array();
 choices[61][0] = "En sentencias switch para alterar el control de flujo.";
 choices[61][1] = "Para manejar excepciones.";
 choices[61][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[61][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[61] = choices[61][1];
 units[61] = "64";
 comments[61] = "Id Pregunta: 626. Junta de Extremadura A1 2015";
 preguntaids[61] = 626


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[62]= new Array();
 choices[62][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[62][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[62][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[62][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[62] = choices[62][0];
 units[62] = "19";
 comments[62] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";
 preguntaids[62] = 163


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[63]= "64)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[63]= new Array();
 choices[63][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[63][1] = "Programa de cartas de servicios";
 choices[63][2] = "Programa para la mejora continua de las organizaciones.";
 choices[63][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[63] = choices[63][2];
 units[63] = "19";
 comments[63] = "Id Pregunta: 747. Direcci&oacute;n p&uacute;blica";
 preguntaids[63] = 747


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[64]= "65)  En el lenguaje de modelado UML :";
 choices[64]= new Array();
 choices[64][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[64][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[64][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[64][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[64] = choices[64][2];
 units[64] = "89";
 comments[64] = "Id Pregunta: 3. AGE A1 2015";
 preguntaids[64] = 3


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[65]= "66)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[65]= new Array();
 choices[65][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[65][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[65][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[65][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[65] = choices[65][2];
 units[65] = "5";
 comments[65] = "Id Pregunta: 288. UNION EUROPEA";
 preguntaids[65] = 288


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[66]= new Array();
 choices[66][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[66][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[66][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[66][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[66] = choices[66][2];
 units[66] = "17";
 comments[66] = "Id Pregunta: 558. Mercado &Uacute;nico Digital";
 preguntaids[66] = 558


//  Id pregunta: 694 Año de creación de pregunta: 2016
 questions[67]= "68)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[67]= new Array();
 choices[67][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[67][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[67][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[67][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[67] = choices[67][1];
 units[67] = "77";
 comments[67] = "Id Pregunta: 694. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";
 preguntaids[67] = 694


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[68]= new Array();
 choices[68][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[68][1] = "De nivel alto.";
 choices[68][2] = "De nivel medio y nivel alto.";
 choices[68][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[68] = choices[68][3];
 units[68] = "35";
 comments[68] = "Id Pregunta: 632. Junta de Extremadura A1 2015";
 preguntaids[68] = 632


//  Id pregunta: 552 Año de creación de pregunta: 2016
 questions[69]= "70)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[69]= new Array();
 choices[69][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[69][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[69][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[69][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[69] = choices[69][3];
 units[69] = "26";
 comments[69] = "Id Pregunta: 552. Gobernanza TIC";
 preguntaids[69] = 552


//  Id pregunta: 506 Año de creación de pregunta: 2016
 questions[70]= "71)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[70]= new Array();
 choices[70][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[70][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[70][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[70][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[70] = choices[70][2];
 units[70] = "10";
 comments[70] = "Id Pregunta: 506. PRESUPUESTOS GENERALES";
 preguntaids[70] = 506


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[71]= "72)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[71]= new Array();
 choices[71][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[71][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[71][2] = "a y b son correctas";
 choices[71][3] = "a y b son incorrectas";
 answers[71] = choices[71][0];
 units[71] = "7";
 comments[71] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";
 preguntaids[71] = 153


//  Id pregunta: 424 Año de creación de pregunta: 2016
 questions[72]= "73)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[72]= new Array();
 choices[72][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[72][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[72][2] = "Ninguna es correcta.";
 choices[72][3] = "A y B son correctas.";
 answers[72] = choices[72][0];
 units[72] = "14";
 comments[72] = "Id Pregunta: 424. POLITICAS DE IGUALDAD";
 preguntaids[72] = 424


//  Id pregunta: 8 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[73]= new Array();
 choices[73][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[73][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[73][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[73][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[73] = choices[73][2];
 units[73] = "26";
 comments[73] = "Id Pregunta: 8. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[73] = 8


//  Id pregunta: 234 Año de creación de pregunta: 2016
 questions[74]= "75)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[74]= new Array();
 choices[74][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[74][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[74][2] = "Al Congreso de los Diputados.";
 choices[74][3] = "Al Gobierno.";
 answers[74] = choices[74][0];
 units[74] = "1";
 comments[74] = "Id Pregunta: 234. CONSTITUCION1978";
 preguntaids[74] = 234


