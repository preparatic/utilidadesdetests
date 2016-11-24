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

//  Id pregunta: 10240 Año de creación de pregunta: 2016
 questions[0]= "1)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[0]= new Array();
 choices[0][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[0][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[0][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[0][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[0] = choices[0][0];
 units[0] = "1";
 comments[0] = "Id Pregunta: 10240. CONSTITUCION1978";


//  Id pregunta: 10513 Año de creación de pregunta: 2016
 questions[1]= "2)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[1]= new Array();
 choices[1][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[1][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[1][2] = "el sector p&uacute;blico institucional";
 choices[1][3] = "el sector privado corporativo";
 answers[1] = choices[1][3];
 units[1] = "7";
 comments[1] = "Id Pregunta: 10513. LEY 39/2015";


//  Id pregunta: 10121 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[2]= new Array();
 choices[2][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[2][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[2][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[2][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[2] = choices[2][2];
 units[2] = "22";
 comments[2] = "Id Pregunta: 10121. ";


//  Id pregunta: 10094 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[3]= new Array();
 choices[3][0] = "Es un framework de software libre.";
 choices[3][1] = "Es una base de datos NoSQL.";
 choices[3][2] = "Est&aacute; basado en MapReduce.";
 choices[3][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[3] = choices[3][1];
 units[3] = "73";
 comments[3] = "Id Pregunta: 10094. AGE A1 2015";


//  Id pregunta: 10627 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[4]= new Array();
 choices[4][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[4][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[4][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[4][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[4] = choices[4][0];
 units[4] = "46";
 comments[4] = "Id Pregunta: 10627. Junta de Extremadura A1 2015";


//  Id pregunta: 10396 Año de creación de pregunta: 2016
 questions[5]= "6)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[5]= new Array();
 choices[5][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[5][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[5][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[5][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[5] = choices[5][0];
 units[5] = "14";
 comments[5] = "Id Pregunta: 10396. POLITICAS DE IGUALDAD";


//  Id pregunta: 10201 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[6]= new Array();
 choices[6][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[6][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[6][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[6][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[6] = choices[6][2];
 units[6] = "1";
 comments[6] = "Id Pregunta: 10201. CONSTITUCION1978";


//  Id pregunta: 10247 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[7]= new Array();
 choices[7][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[7][1] = "Por Orden Ministerial.";
 choices[7][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[7][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[7] = choices[7][0];
 units[7] = "1";
 comments[7] = "Id Pregunta: 10247. CONSTITUCION1978";


//  Id pregunta: 10283 Año de creación de pregunta: 2016
 questions[8]= "9)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[8]= new Array();
 choices[8][0] = "Crecimiento inteligente.";
 choices[8][1] = "Crecimiento inclusivo.";
 choices[8][2] = "Crecimiento sostenible.";
 choices[8][3] = "Crecimiento integrador.";
 answers[8] = choices[8][1];
 units[8] = "5";
 comments[8] = "Id Pregunta: 10283. UNION EUROPEA";


//  Id pregunta: 10232 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[9]= new Array();
 choices[9][0] = "El Presidente del Senado.";
 choices[9][1] = "El Defensor del Pueblo.";
 choices[9][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[9][3] = "El Presidente del Gobierno.";
 answers[9] = choices[9][2];
 units[9] = "1";
 comments[9] = "Id Pregunta: 10232. CONSTITUCION1978";


//  Id pregunta: 10525 Año de creación de pregunta: 2016
 questions[10]= "11)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[10]= new Array();
 choices[10][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[10][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[10][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[10][3] = "cualquiera que sea el estado del procedimiento";
 answers[10] = choices[10][3];
 units[10] = "7";
 comments[10] = "Id Pregunta: 10525. LEY 39/2015";


//  Id pregunta: 10600 Año de creación de pregunta: 2016
 questions[11]= "12)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[11]= new Array();
 choices[11][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[11][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[11][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[11][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[11] = choices[11][2];
 units[11] = "108";
 comments[11] = "Id Pregunta: 10600. Junta de Extremadura A1 2015";


//  Id pregunta: 10399 Año de creación de pregunta: 2016
 questions[12]= "13)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[12]= new Array();
 choices[12][0] = "Acciones de discriminaci&oacute;n.";
 choices[12][1] = "Acciones positivas.";
 choices[12][2] = "Acciones negativas.";
 choices[12][3] = "Acciones neutras.";
 answers[12] = choices[12][1];
 units[12] = "14";
 comments[12] = "Id Pregunta: 10399. POLITICAS DE IGUALDAD";


//  Id pregunta: 10043 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[13]= new Array();
 choices[13][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[13][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[13][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[13][3] = "El software funcionando es la medida principal del progreso.";
 answers[13] = choices[13][2];
 units[13] = "34";
 comments[13] = "Id Pregunta: 10043. AGE A1 2015";


//  Id pregunta: 10655 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[14]= new Array();
 choices[14][0] = "Yarn";
 choices[14][1] = "Flume";
 choices[14][2] = "Hive";
 choices[14][3] = "BizAgi";
 answers[14] = choices[14][3];
 units[14] = "73";
 comments[14] = "Id Pregunta: 10655. ";


//  Id pregunta: 10262 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[15]= new Array();
 choices[15][0] = "Constitucional.";
 choices[15][1] = "Penal.";
 choices[15][2] = "Militar.";
 choices[15][3] = "Tribunales consuetudinarios.";
 answers[15] = choices[15][0];
 units[15] = "1";
 comments[15] = "Id Pregunta: 10262. CONSTITUCION1978";


//  Id pregunta: 10351 Año de creación de pregunta: 2016
 questions[16]= "17)  La sede del Parlamento Europeo se encuentra en:";
 choices[16]= new Array();
 choices[16][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[16][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[16][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[16][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[16] = choices[16][1];
 units[16] = "5";
 comments[16] = "Id Pregunta: 10351. UNION EUROPEA";


//  Id pregunta: 10309 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[17]= new Array();
 choices[17][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[17][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[17][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[17][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[17] = choices[17][0];
 units[17] = "5";
 comments[17] = "Id Pregunta: 10309. UNION EUROPEA";


//  Id pregunta: 10152 Año de creación de pregunta: 2016
 questions[18]= "19)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[18]= new Array();
 choices[18][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[18][1] = "garantizar la conservaci&oacute;n del documento";
 choices[18][2] = "garantizar la autenticidad del documento";
 choices[18][3] = "garantizar la integridad del documento";
 answers[18] = choices[18][0];
 units[18] = "7";
 comments[18] = "Id Pregunta: 10152. Ley 39/2015, Art&iacute;culo 17";


//  Id pregunta: 10168 Año de creación de pregunta: 2016
 questions[19]= "20)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[19]= new Array();
 choices[19][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[19][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[19][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[19][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[19] = choices[19][2];
 units[19] = "19";
 comments[19] = "Id Pregunta: 10168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 10617 Año de creación de pregunta: 2016
 questions[20]= "21)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[20]= new Array();
 choices[20][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[20][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[20][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[20][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[20] = choices[20][0];
 units[20] = "84";
 comments[20] = "Id Pregunta: 10617. Junta de Extremadura A1 2015";


//  Id pregunta: 10030 Año de creación de pregunta: 2016
 questions[21]= "22)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[21]= new Array();
 choices[21][0] = "SMB3";
 choices[21][1] = "AFP";
 choices[21][2] = "NFS";
 choices[21][3] = "FTP";
 answers[21] = choices[21][0];
 units[21] = "59";
 comments[21] = "Id Pregunta: 10030. AGE A1 2015";


//  Id pregunta: 10269 Año de creación de pregunta: 2016
 questions[22]= "23)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[22]= new Array();
 choices[22][0] = "Diez art&iacute;culos.";
 choices[22][1] = "Nueve art&iacute;culos.";
 choices[22][2] = "Once art&iacute;culos.";
 choices[22][3] = "Ocho art&iacute;culos.";
 answers[22] = choices[22][0];
 units[22] = "1";
 comments[22] = "Id Pregunta: 10269. CONSTITUCION1978";


//  Id pregunta: 10480 Año de creación de pregunta: 2016
 questions[23]= "24)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[23]= new Array();
 choices[23][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[23][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[23][2] = "Las respuestas a) b) no son correctas.";
 choices[23][3] = "Las respuestas a) y b) son correctas.";
 answers[23] = choices[23][3];
 units[23] = "10";
 comments[23] = "Id Pregunta: 10480. PRESUPUESTOS GENERALES";


//  Id pregunta: 10141 Año de creación de pregunta: 2016
 questions[24]= "25)  El recurso de alzada puede interponerse:";
 choices[24]= new Array();
 choices[24][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[24][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[24][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[24][3] = "Ante el Defensor del Pueblo";
 answers[24] = choices[24][1];
 units[24] = "8";
 comments[24] = "Id Pregunta: 10141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 10428 Año de creación de pregunta: 2016
 questions[25]= "26)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[25]= new Array();
 choices[25][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[25][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[25][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[25][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[25] = choices[25][2];
 units[25] = "14";
 comments[25] = "Id Pregunta: 10428. POLITICAS DE IGUALDAD";


//  Id pregunta: 10363 Año de creación de pregunta: 2016
 questions[26]= "27)  Los Reglamentos no se caracterizan por:";
 choices[26]= new Array();
 choices[26][0] = "No poseer alcance general.";
 choices[26][1] = "Ser obligatorios.";
 choices[26][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[26][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[26] = choices[26][0];
 units[26] = "5";
 comments[26] = "Id Pregunta: 10363. UNION EUROPEA";


//  Id pregunta: 10512 Año de creación de pregunta: 2016
 questions[27]= "28)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[27]= new Array();
 choices[27][0] = "solo mediante ley";
 choices[27][1] = "reglamentariamente";
 choices[27][2] = "mediante ley o reglamentariamente";
 choices[27][3] = "ninguna es correcta";
 answers[27] = choices[27][1];
 units[27] = "7";
 comments[27] = "Id Pregunta: 10512. LEY 39/2015";


//  Id pregunta: 10135 Año de creación de pregunta: 2016
 questions[28]= "29)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[28]= new Array();
 choices[28][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[28][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[28][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[28][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[28] = choices[28][0];
 units[28] = "12";
 comments[28] = "Id Pregunta: 10135. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10235 Año de creación de pregunta: 2016
 questions[29]= "30)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[29]= new Array();
 choices[29][0] = "El Jefe del Estado.";
 choices[29][1] = "El Tribunal Constitucional.";
 choices[29][2] = "El Congreso de los Diputados.";
 choices[29][3] = "Las Cortes Generales.";
 answers[29] = choices[29][0];
 units[29] = "1";
 comments[29] = "Id Pregunta: 10235. CONSTITUCION1978";


//  Id pregunta: 10669 Año de creación de pregunta: 2016
 questions[30]= "31)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[30]= new Array();
 choices[30][0] = "Resoluci&oacute;n.";
 choices[30][1] = "Desistimiento o renuncia.";
 choices[30][2] = "Caducidad.";
 choices[30][3] = "Todas las anteriores.";
 answers[30] = choices[30][3];
 units[30] = "7";
 comments[30] = "Id Pregunta: 10669. Art&iacute;culo 84 de la Ley 39/2015";


//  Id pregunta: 10087 Año de creación de pregunta: 2016
 questions[31]= "32)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[31]= new Array();
 choices[31][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[31][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[31][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[31][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[31] = choices[31][2];
 units[31] = "48";
 comments[31] = "Id Pregunta: 10087. AGE A1 2015";


//  Id pregunta: 10446 Año de creación de pregunta: 2016
 questions[32]= "33)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[32]= new Array();
 choices[32][0] = "Ejecutivo";
 choices[32][1] = "Limitativo";
 choices[32][2] = "Estimativo";
 choices[32][3] = "Progresivo";
 answers[32] = choices[32][2];
 units[32] = "10";
 comments[32] = "Id Pregunta: 10446. PRESUPUESTOS GENERALES";


//  Id pregunta: 10340 Año de creación de pregunta: 2016
 questions[33]= "34)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[33]= new Array();
 choices[33][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[33][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[33][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[33][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[33] = choices[33][2];
 units[33] = "5";
 comments[33] = "Id Pregunta: 10340. UNION EUROPEA";


//  Id pregunta: 10523 Año de creación de pregunta: 2016
 questions[34]= "35)  Se consideran interesados en el procedimiento administrativo:";
 choices[34]= new Array();
 choices[34][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[34][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[34][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[34][3] = "todas son correctas";
 answers[34] = choices[34][0];
 units[34] = "7";
 comments[34] = "Id Pregunta: 10523. LEY 39/2015";


//  Id pregunta: 10080 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[35]= new Array();
 choices[35][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[35][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[35][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[35][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[35] = choices[35][3];
 units[35] = "46";
 comments[35] = "Id Pregunta: 10080. AGE A1 2015";


//  Id pregunta: 10652 Año de creación de pregunta: 2016
 questions[36]= "37)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[36]= new Array();
 choices[36][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[36][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[36][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[36][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[36] = choices[36][2];
 units[36] = "73";
 comments[36] = "Id Pregunta: 10652. ";


//  Id pregunta: 10139 Año de creación de pregunta: 2016
 questions[37]= "38)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[37]= new Array();
 choices[37][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[37][1] = "Static &amp; Active process for REsolution Bank.";
 choices[37][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[37][3] = "Super Active REsponse for Banks";
 answers[37] = choices[37][0];
 units[37] = "12";
 comments[37] = "Id Pregunta: 10139. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10263 Año de creación de pregunta: 2016
 questions[38]= "39)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[38]= new Array();
 choices[38][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[38][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[38][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[38][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[38] = choices[38][1];
 units[38] = "1";
 comments[38] = "Id Pregunta: 10263. CONSTITUCION1978";


//  Id pregunta: 10328 Año de creación de pregunta: 2016
 questions[39]= "40)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[39]= new Array();
 choices[39][0] = "El Presidente del Consejo Europeo.";
 choices[39][1] = "La Comisi&oacute;n.";
 choices[39][2] = "El Consejo.";
 choices[39][3] = "El Parlamento Europeo.";
 answers[39] = choices[39][2];
 units[39] = "5";
 comments[39] = "Id Pregunta: 10328. UNION EUROPEA";


//  Id pregunta: 10373 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[40]= new Array();
 choices[40][0] = "Nueve.";
 choices[40][1] = "Diez.";
 choices[40][2] = "Siete.";
 choices[40][3] = "Ocho.";
 answers[40] = choices[40][3];
 units[40] = "5";
 comments[40] = "Id Pregunta: 10373. UNION EUROPEA";


//  Id pregunta: 10574 Año de creación de pregunta: 2016
 questions[41]= "42)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[41]= new Array();
 choices[41][0] = "Mercurial, Git y Apache Subversion.";
 choices[41][1] = "Gimp, Mercurial y Git.";
 choices[41][2] = "RedMine, Planner y OpenProj.";
 choices[41][3] = "Cassandra, Git y REDIS.";
 answers[41] = choices[41][0];
 units[41] = "92";
 comments[41] = "Id Pregunta: 10574. Tema 92. TAI 2016.";


//  Id pregunta: 10336 Año de creación de pregunta: 2016
 questions[42]= "43)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[42]= new Array();
 choices[42][0] = "Diciembre de 1987.";
 choices[42][1] = "Septiembre de 1989.";
 choices[42][2] = "Octubre de 1990.";
 choices[42][3] = "Noviembre de 1980.";
 answers[42] = choices[42][1];
 units[42] = "5";
 comments[42] = "Id Pregunta: 10336. UNION EUROPEA";


//  Id pregunta: 10619 Año de creación de pregunta: 2016
 questions[43]= "44)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[43]= new Array();
 choices[43][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[43][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[43][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[43][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[43] = choices[43][1];
 units[43] = "89";
 comments[43] = "Id Pregunta: 10619. Junta de Extremadura A1 2015";


//  Id pregunta: 10025 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Mediante qu&eacute; tipo de objetos se implementa el acceso a los recursos gestionados con la tecnolog&iacute;a JMX?";
 choices[44]= new Array();
 choices[44][0] = "SessionBean";
 choices[44][1] = "JavaBean";
 choices[44][2] = "MBeans";
 choices[44][3] = "MessageDrivenBean";
 answers[44] = choices[44][2];
 units[44] = "64";
 comments[44] = "Id Pregunta: 10025. AGE A1 2015";


//  Id pregunta: 10314 Año de creación de pregunta: 2016
 questions[45]= "46)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[45]= new Array();
 choices[45][0] = "Al Consejo Europeo.";
 choices[45][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[45][2] = "A la Comisi&oacute;n Europea.";
 choices[45][3] = "Al Parlamento Europeo.";
 answers[45] = choices[45][2];
 units[45] = "5";
 comments[45] = "Id Pregunta: 10314. UNION EUROPEA";


//  Id pregunta: 10217 Año de creación de pregunta: 2016
 questions[46]= "47)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[46]= new Array();
 choices[46][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[46][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[46][2] = "Son refrendados por el Rey.";
 choices[46][3] = "Son convocados por el Presidente del Gobierno.";
 answers[46] = choices[46][0];
 units[46] = "1";
 comments[46] = "Id Pregunta: 10217. CONSTITUCION1978";


//  Id pregunta: 10476 Año de creación de pregunta: 2016
 questions[47]= "48)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[47]= new Array();
 choices[47][0] = "Al Gobierno.";
 choices[47][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[47][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[47][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[47] = choices[47][2];
 units[47] = "10";
 comments[47] = "Id Pregunta: 10476. PRESUPUESTOS GENERALES";


//  Id pregunta: 10536 Año de creación de pregunta: 2016
 questions[48]= "49)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[48]= new Array();
 choices[48][0] = "apud acta";
 choices[48][1] = "presencialmente";
 choices[48][2] = "electr&oacute;nicamente";
 choices[48][3] = "todas son correctas";
 answers[48] = choices[48][3];
 units[48] = "7";
 comments[48] = "Id Pregunta: 10536. LEY 39/2015";


//  Id pregunta: 10469 Año de creación de pregunta: 2016
 questions[49]= "50)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[49]= new Array();
 choices[49][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[49][1] = "Las inversiones reales y financieras.";
 choices[49][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[49][3] = "Las transferencias de capital y las inversiones reales.";
 answers[49] = choices[49][3];
 units[49] = "10";
 comments[49] = "Id Pregunta: 10469. PRESUPUESTOS GENERALES";


//  Id pregunta: 10542 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[50]= new Array();
 choices[50][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[50][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[50][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[50][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[50] = choices[50][0];
 units[50] = "26";
 comments[50] = "Id Pregunta: 10542. Gobernanza TIC";


//  Id pregunta: 10209 Año de creación de pregunta: 2016
 questions[51]= "52)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[51]= new Array();
 choices[51][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[51][1] = "El Congreso de los Diputados.";
 choices[51][2] = "Las Cortes Generales.";
 choices[51][3] = "El Consejo de Ministros";
 answers[51] = choices[51][3];
 units[51] = "1";
 comments[51] = "Id Pregunta: 10209. CONSTITUCION1978";


//  Id pregunta: 10379 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[52]= new Array();
 choices[52][0] = "Anual.";
 choices[52][1] = "Semestral.";
 choices[52][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[52][3] = "Bienal.";
 answers[52] = choices[52][2];
 units[52] = "14";
 comments[52] = "Id Pregunta: 10379. POLITICAS DE IGUALDAD";


//  Id pregunta: 10398 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[53]= new Array();
 choices[53][0] = "Art. 13, L.O.3/2007.";
 choices[53][1] = "Art. 14, L.O.3/2007.";
 choices[53][2] = "Art. 11, L.O.3/2007.";
 choices[53][3] = "Ninguna es correcta.";
 answers[53] = choices[53][2];
 units[53] = "14";
 comments[53] = "Id Pregunta: 10398. POLITICAS DE IGUALDAD";


//  Id pregunta: 10676 Año de creación de pregunta: 2016
 questions[54]= "55)  Es un Servicio previsto en la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[54]= new Array();
 choices[54][0] = "El servicio de teleasistencia.";
 choices[54][1] = "El servicio de ayuda a domicilio.";
 choices[54][2] = "El servicio de centro de d&iacute;a y de noche.";
 choices[54][3] = "Todas las anteriores son correctas.";
 answers[54] = choices[54][3];
 units[54] = "14";
 comments[54] = "Id Pregunta: 10676. Dependencia";


//  Id pregunta: 10096 Año de creación de pregunta: 2016
 questions[55]= "56)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[55]= new Array();
 choices[55][0] = "VMware ESX";
 choices[55][1] = "XenServer";
 choices[55][2] = "Alfresco";
 choices[55][3] = "Microsoft Hyper-V";
 answers[55] = choices[55][2];
 units[55] = "54";
 comments[55] = "Id Pregunta: 10096. AGE A1 2015";


//  Id pregunta: 10385 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[56]= new Array();
 choices[56][0] = "Anualmente por el Consejo de Ministros";
 choices[56][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[56][2] = "Al final de cada legislatura por el Gobierno";
 choices[56][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[56] = choices[56][0];
 units[56] = "14";
 comments[56] = "Id Pregunta: 10385. POLITICAS DE IGUALDAD";


//  Id pregunta: 10111 Año de creación de pregunta: 2016
 questions[57]= "58)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[57]= new Array();
 choices[57][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[57][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[57][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[57][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[57] = choices[57][0];
 units[57] = "15";
 comments[57] = "Id Pregunta: 10111. ";


//  Id pregunta: 10561 Año de creación de pregunta: 2016
 questions[58]= "59)  El plan nacional de ciudades inteligentes...";
 choices[58]= new Array();
 choices[58][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[58][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[58][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[58][3] = "No existe";
 answers[58] = choices[58][1];
 units[58] = "19";
 comments[58] = "Id Pregunta: 10561. Ciudades Inteligentes";


//  Id pregunta: 10145 Año de creación de pregunta: 2016
 questions[59]= "60)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[59]= new Array();
 choices[59][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[59][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[59][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[59][3] = "Todas las anteriores son ciertas";
 answers[59] = choices[59][3];
 units[59] = "8";
 comments[59] = "Id Pregunta: 10145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 10192 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[60]= new Array();
 choices[60][0] = "Un diputado y un senador, cada una de ellas";
 choices[60][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[60][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[60][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[60] = choices[60][2];
 units[60] = "1";
 comments[60] = "Id Pregunta: 10192. CONSTITUCION1978";


//  Id pregunta: 10598 Año de creación de pregunta: 2016
 questions[61]= "62)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[61]= new Array();
 choices[61][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[61][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[61][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[61][3] = "Todas las respuestas anteriores son correctas.";
 answers[61] = choices[61][0];
 units[61] = "45";
 comments[61] = "Id Pregunta: 10598. Junta de Extremadura A1 2015";


//  Id pregunta: 10291 Año de creación de pregunta: 2016
 questions[62]= "63)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[62]= new Array();
 choices[62][0] = "Tres a&ntilde;os.";
 choices[62][1] = "Dos a&ntilde;os y medio.";
 choices[62][2] = "Cinco a&ntilde;os.";
 choices[62][3] = "Seis a&ntilde;os.";
 answers[62] = choices[62][3];
 units[62] = "5";
 comments[62] = "Id Pregunta: 10291. UNION EUROPEA";


//  Id pregunta: 10468 Año de creación de pregunta: 2016
 questions[63]= "64)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[63]= new Array();
 choices[63][0] = "El Ministerio de Hacienda.";
 choices[63][1] = "El Ministerio de Econom&iacute;a.";
 choices[63][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[63][3] = "Ninguna de las respuestas es correcta.";
 answers[63] = choices[63][2];
 units[63] = "10";
 comments[63] = "Id Pregunta: 10468. PRESUPUESTOS GENERALES";


//  Id pregunta: 10177 Año de creación de pregunta: 2016
 questions[64]= "65)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[64]= new Array();
 choices[64][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[64][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[64][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[64][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[64] = choices[64][2];
 units[64] = "1";
 comments[64] = "Id Pregunta: 10177. CONSTITUCION1978";


//  Id pregunta: 10199 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[65]= new Array();
 choices[65][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[65][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[65][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[65][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[65] = choices[65][0];
 units[65] = "1";
 comments[65] = "Id Pregunta: 10199. CONSTITUCION1978";


//  Id pregunta: 10470 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[66]= new Array();
 choices[66][0] = "El Ministro de Econom&iacute;a.";
 choices[66][1] = "El Gobierno.";
 choices[66][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[66][3] = "El Presidente del Gobierno.";
 answers[66] = choices[66][1];
 units[66] = "10";
 comments[66] = "Id Pregunta: 10470. PRESUPUESTOS GENERALES";


//  Id pregunta: 10578 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[67]= new Array();
 choices[67][0] = "Fue elaborada y aprobada por la CETIC";
 choices[67][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[67][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[67][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[67] = choices[67][1];
 units[67] = "19";
 comments[67] = "Id Pregunta: 10578. Estrategia TIC";


//  Id pregunta: 10368 Año de creación de pregunta: 2016
 questions[68]= "69)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[68]= new Array();
 choices[68][0] = "Un Reglamento.";
 choices[68][1] = "Un Decreto.";
 choices[68][2] = "Una Ley.";
 choices[68][3] = "Un Real-Decreto.";
 answers[68] = choices[68][2];
 units[68] = "5";
 comments[68] = "Id Pregunta: 10368. UNION EUROPEA";


//  Id pregunta: 10517 Año de creación de pregunta: 2016
 questions[69]= "70)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[69]= new Array();
 choices[69][0] = "la Administraci&oacute;n General del Estado";
 choices[69][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[69][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[69][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[69] = choices[69][3];
 units[69] = "7";
 comments[69] = "Id Pregunta: 10517. LEY 39/2015";


//  Id pregunta: 10227 Año de creación de pregunta: 2016
 questions[70]= "71)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[70]= new Array();
 choices[70][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[70][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[70][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[70][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[70] = choices[70][3];
 units[70] = "1";
 comments[70] = "Id Pregunta: 10227. CONSTITUCION1978";


//  Id pregunta: 10003 Año de creación de pregunta: 2016
 questions[71]= "72)  En el lenguaje de modelado UML :";
 choices[71]= new Array();
 choices[71][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[71][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[71][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[71][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[71] = choices[71][2];
 units[71] = "89";
 comments[71] = "Id Pregunta: 10003. AGE A1 2015";


//  Id pregunta: 10041 Año de creación de pregunta: 2016
 questions[72]= "73)  En cuanto al an&aacute;lisis DAFO:";
 choices[72]= new Array();
 choices[72][0] = "Considera detallada y exclusivamente factores internos.";
 choices[72][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[72][2] = "Considera detallada y exclusivamente factores externos.";
 choices[72][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[72] = choices[72][1];
 units[72] = "83";
 comments[72] = "Id Pregunta: 10041. AGE A1 2015";


//  Id pregunta: 10113 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[73]= new Array();
 choices[73][0] = "La Seguridad Social";
 choices[73][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[73][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[73][3] = "El Banco de Espa&ntilde;a";
 answers[73] = choices[73][3];
 units[73] = "15";
 comments[73] = "Id Pregunta: 10113. ";


//  Id pregunta: 10614 Año de creación de pregunta: 2016
 questions[74]= "75)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[74]= new Array();
 choices[74][0] = "192.228.0.0";
 choices[74][1] = "192.228.8.0";
 choices[74][2] = "192.228.16.0";
 choices[74][3] = "192.228.17.0";
 answers[74] = choices[74][2];
 units[74] = "109";
 comments[74] = "Id Pregunta: 10614. Junta de Extremadura A1 2015";


