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

//  Id pregunta: 10555 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[0]= new Array();
 choices[0][0] = "Consumidores";
 choices[0][1] = "PYMES y Start-ups";
 choices[0][2] = "La Industria";
 choices[0][3] = "Todos los anteriores";
 answers[0] = choices[0][3];
 units[0] = "17";
 comments[0] = "Id Pregunta: 10555. Mercado &Uacute;nico Digital";


//  Id pregunta: 10369 Año de creación de pregunta: 2016
 questions[1]= "2)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[1]= new Array();
 choices[1][0] = "Son actos individuales no normativos.";
 choices[1][1] = "Poseen alcance general.";
 choices[1][2] = "Son actos normativos.";
 choices[1][3] = "No son obligatorias.";
 answers[1] = choices[1][0];
 units[1] = "5";
 comments[1] = "Id Pregunta: 10369. UNION EUROPEA";


//  Id pregunta: 10305 Año de creación de pregunta: 2016
 questions[2]= "3)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[2]= new Array();
 choices[2][0] = "Estrasburgo.";
 choices[2][1] = "Bruselas.";
 choices[2][2] = "Luxemburgo.";
 choices[2][3] = "Par&iacute;s.";
 answers[2] = choices[2][1];
 units[2] = "5";
 comments[2] = "Id Pregunta: 10305. UNION EUROPEA";


//  Id pregunta: 10609 Año de creación de pregunta: 2016
 questions[3]= "4)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[3]= new Array();
 choices[3][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[3][1] = "Clasificaci&oacute;n por cuenta.";
 choices[3][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[3][3] = "Clasificaci&oacute;n por intercambio.";
 answers[3] = choices[3][3];
 units[3] = "56";
 comments[3] = "Id Pregunta: 10609. Junta de Extremadura A1 2015";


//  Id pregunta: 10098 Año de creación de pregunta: 2016
 questions[4]= "5)  La tecnolog&iacute;a de software que permite ejecutar al mismo tiempo varios sistemas operativos y aplicaciones en el mismo servidor se denomina:";
 choices[4]= new Array();
 choices[4][0] = "Clustering";
 choices[4][1] = "Deduplicaci&oacute;n";
 choices[4][2] = "Virtualizaci&oacute;n";
 choices[4][3] = "Contenerizaci&oacute;n";
 answers[4] = choices[4][2];
 units[4] = "124";
 comments[4] = "Id Pregunta: 10098. AGE A1 2015";


//  Id pregunta: 10143 Año de creación de pregunta: 2016
 questions[5]= "6)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[5]= new Array();
 choices[5][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[5][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[5][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[5][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[5] = choices[5][2];
 units[5] = "8";
 comments[5] = "Id Pregunta: 10143. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 10231 Año de creación de pregunta: 2016
 questions[6]= "7)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[6]= new Array();
 choices[6][0] = "El Presidente del Congreso de los Diputados.";
 choices[6][1] = "El Presidente del Gobierno.";
 choices[6][2] = "El Rey.";
 choices[6][3] = "El Consejo de Ministros.";
 answers[6] = choices[6][0];
 units[6] = "1";
 comments[6] = "Id Pregunta: 10231. CONSTITUCION1978";


//  Id pregunta: 10669 Año de creación de pregunta: 2016
 questions[7]= "8)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[7]= new Array();
 choices[7][0] = "Resoluci&oacute;n.";
 choices[7][1] = "Desistimiento o renuncia.";
 choices[7][2] = "Caducidad.";
 choices[7][3] = "Todas las anteriores.";
 answers[7] = choices[7][3];
 units[7] = "7";
 comments[7] = "Id Pregunta: 10669. Art&iacute;culo 84 de la Ley 39/2015";


//  Id pregunta: 10487 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[8]= new Array();
 choices[8][0] = "Las Cortes Generales.";
 choices[8][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[8][2] = "El Gobierno.";
 choices[8][3] = "El Congreso de los Diputados.";
 answers[8] = choices[8][0];
 units[8] = "10";
 comments[8] = "Id Pregunta: 10487. PRESUPUESTOS GENERALES";


//  Id pregunta: 10275 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[9]= new Array();
 choices[9][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[9][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[9][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[9][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[9] = choices[9][2];
 units[9] = "22";
 comments[9] = "Id Pregunta: 10275. LEY DE TRANSPARENCIA";


//  Id pregunta: 10287 Año de creación de pregunta: 2016
 questions[10]= "11)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[10]= new Array();
 choices[10][0] = "Versi&oacute;n digital prioritaria.";
 choices[10][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[10][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[10][3] = "Apertura y transparencia.";
 answers[10] = choices[10][0];
 units[10] = "5";
 comments[10] = "Id Pregunta: 10287. UNION EUROPEA";


//  Id pregunta: 10657 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Qu&eacute; es el machine learning?";
 choices[11]= new Array();
 choices[11][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[11][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[11][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[11][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[11] = choices[11][0];
 units[11] = "73";
 comments[11] = "Id Pregunta: 10657. ";


//  Id pregunta: 10330 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[12]= new Array();
 choices[12][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[12][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[12][2] = "Todas son correctas.";
 choices[12][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[12] = choices[12][2];
 units[12] = "5";
 comments[12] = "Id Pregunta: 10330. UNION EUROPEA";


//  Id pregunta: 10348 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[13]= new Array();
 choices[13][0] = "El 1 de noviembre de 1994.";
 choices[13][1] = "El 1 de noviembre de 1992.";
 choices[13][2] = "El 1 de noviembre de 1995.";
 choices[13][3] = "El 1 de noviembre de 1993.";
 answers[13] = choices[13][3];
 units[13] = "5";
 comments[13] = "Id Pregunta: 10348. UNION EUROPEA";


//  Id pregunta: 10459 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[14]= new Array();
 choices[14][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[14][1] = "Pasivos financieros y transferencias de capital.";
 choices[14][2] = "Activos financieros y pasivos financieros.";
 choices[14][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[14] = choices[14][2];
 units[14] = "10";
 comments[14] = "Id Pregunta: 10459. PRESUPUESTOS GENERALES";


//  Id pregunta: 10124 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[15]= new Array();
 choices[15][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[15][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[15][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[15][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[15] = choices[15][0];
 units[15] = "22";
 comments[15] = "Id Pregunta: 10124. ";


//  Id pregunta: 10438 Año de creación de pregunta: 2016
 questions[16]= "17)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[16]= new Array();
 choices[16][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[16][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[16][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[16][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[16] = choices[16][3];
 units[16] = "43";
 comments[16] = "Id Pregunta: 10438. SERVICIOS COMUNES";


//  Id pregunta: 10498 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[17]= new Array();
 choices[17][0] = "En t&iacute;tulos-valores.";
 choices[17][1] = "Las respuestas a) y b) son correctas.";
 choices[17][2] = "Las respuestas a) y b) no son correctas.";
 choices[17][3] = "En cuenta.";
 answers[17] = choices[17][1];
 units[17] = "10";
 comments[17] = "Id Pregunta: 10498. PRESUPUESTOS GENERALES";


//  Id pregunta: 10476 Año de creación de pregunta: 2016
 questions[18]= "19)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[18]= new Array();
 choices[18][0] = "Al Gobierno.";
 choices[18][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[18][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[18][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[18] = choices[18][2];
 units[18] = "10";
 comments[18] = "Id Pregunta: 10476. PRESUPUESTOS GENERALES";


//  Id pregunta: 10372 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[19]= new Array();
 choices[19][0] = "El Parlamento y el Consejo.";
 choices[19][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[19][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[19][3] = "La Comisi&oacute;n y el Consejo.";
 answers[19] = choices[19][2];
 units[19] = "5";
 comments[19] = "Id Pregunta: 10372. UNION EUROPEA";


//  Id pregunta: 10551 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[20]= new Array();
 choices[20][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[20][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[20][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[20][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[20] = choices[20][2];
 units[20] = "26";
 comments[20] = "Id Pregunta: 10551. Gobernanza TIC";


//  Id pregunta: 10222 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[21]= new Array();
 choices[21][0] = "Dos Cap&iacute;tulos.";
 choices[21][1] = "Tres Cap&iacute;tulos.";
 choices[21][2] = "Un Cap&iacute;tulo.";
 choices[21][3] = "Cuatro Cap&iacute;tulos.";
 answers[21] = choices[21][1];
 units[21] = "1";
 comments[21] = "Id Pregunta: 10222. CONSTITUCION1978";


//  Id pregunta: 10554 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[22]= new Array();
 choices[22][0] = "El BCE";
 choices[22][1] = "El Parlamento";
 choices[22][2] = "El Consejo";
 choices[22][3] = "La Comisi&oacute;n";
 answers[22] = choices[22][3];
 units[22] = "17";
 comments[22] = "Id Pregunta: 10554. Mercado &Uacute;nico Digital";


//  Id pregunta: 10339 Año de creación de pregunta: 2016
 questions[23]= "24)  La presidencia del Consejo se ejerce de forma rotatoria cada:";
 choices[23]= new Array();
 choices[23][0] = "4 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[23][1] = "6 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[23][2] = "4 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 choices[23][3] = "6 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 answers[23] = choices[23][1];
 units[23] = "5";
 comments[23] = "Id Pregunta: 10339. UNION EUROPEA";


//  Id pregunta: 10570 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[24]= new Array();
 choices[24][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[24][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[24][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[24][3] = "La tasa de desempleo ronda el 20%";
 answers[24] = choices[24][2];
 units[24] = "12";
 comments[24] = "Id Pregunta: 10570. Modelo econ&oacute;mico";


//  Id pregunta: 10218 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[25]= new Array();
 choices[25][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[25][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[25][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[25][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[25] = choices[25][0];
 units[25] = "1";
 comments[25] = "Id Pregunta: 10218. CONSTITUCION1978";


//  Id pregunta: 10423 Año de creación de pregunta: 2016
 questions[26]= "27)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[26]= new Array();
 choices[26][0] = "El derecho a un permiso.";
 choices[26][1] = "Una prestaci&oacute;n por paternidad.";
 choices[26][2] = "Ambas son correctas.";
 choices[26][3] = "18 d&iacute;as de permiso.";
 answers[26] = choices[26][2];
 units[26] = "14";
 comments[26] = "Id Pregunta: 10423. POLITICAS DE IGUALDAD";


//  Id pregunta: 10067 Año de creación de pregunta: 2016
 questions[27]= "28)  En Internet, la entidad encargada de la coordinaci&oacute;n de los N&uacute;meros de Sistema Aut&oacute;nomo (Autonomous System Numbers - ASN) usados por varios protocolos de enrutamiento, es:";
 choices[27]= new Array();
 choices[27][0] = "IANA";
 choices[27][1] = "ISOC";
 choices[27][2] = "IETF";
 choices[27][3] = "IAB";
 answers[27] = choices[27][0];
 units[27] = "103";
 comments[27] = "Id Pregunta: 10067. AGE A1 2015";


//  Id pregunta: 10407 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[28]= new Array();
 choices[28][0] = "Art&iacute;culo 14 CE.";
 choices[28][1] = "Art&iacute;culo 9.2 CE.";
 choices[28][2] = "Art&iacute;culo 9.1 CE.";
 choices[28][3] = "Art&iacute;culo 13 CE.";
 answers[28] = choices[28][2];
 units[28] = "14";
 comments[28] = "Id Pregunta: 10407. POLITICAS DE IGUALDAD";


//  Id pregunta: 10637 Año de creación de pregunta: 2016
 questions[29]= "30)  En el sistema operativo Unix/Linux, el comando id:";
 choices[29]= new Array();
 choices[29][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[29][1] = "El comando id no existe.";
 choices[29][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[29][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[29] = choices[29][0];
 units[29] = "57";
 comments[29] = "Id Pregunta: 10637. Junta de Extremadura A1 2015";


//  Id pregunta: 10588 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[30]= new Array();
 choices[30][0] = "14";
 choices[30][1] = "11";
 choices[30][2] = "12";
 choices[30][3] = "15";
 answers[30] = choices[30][0];
 units[30] = "19";
 comments[30] = "Id Pregunta: 10588. Estrategia TIC";


//  Id pregunta: 10092 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[31]= new Array();
 choices[31][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[31][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[31][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[31][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[31] = choices[31][0];
 units[31] = "48";
 comments[31] = "Id Pregunta: 10092. AGE A1 2015";


//  Id pregunta: 10293 Año de creación de pregunta: 2016
 questions[32]= "33)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[32]= new Array();
 choices[32][0] = "Estrasburgo.";
 choices[32][1] = "Bruselas.";
 choices[32][2] = "Luxemburgo.";
 choices[32][3] = "Holanda.";
 answers[32] = choices[32][0];
 units[32] = "5";
 comments[32] = "Id Pregunta: 10293. UNION EUROPEA";


//  Id pregunta: 10146 Año de creación de pregunta: 2016
 questions[33]= "34)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[33]= new Array();
 choices[33][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[33][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[33][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[33][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[33] = choices[33][0];
 units[33] = "8";
 comments[33] = "Id Pregunta: 10146. Ley 39/2015, Art&iacute;culo 107";


//  Id pregunta: 10593 Año de creación de pregunta: 2016
 questions[34]= "35)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[34]= new Array();
 choices[34][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[34][1] = "La CETIC";
 choices[34][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[34][3] = "El MHFP";
 answers[34] = choices[34][0];
 units[34] = "19";
 comments[34] = "Id Pregunta: 10593. Estrategia TIC";


//  Id pregunta: 10469 Año de creación de pregunta: 2016
 questions[35]= "36)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[35]= new Array();
 choices[35][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[35][1] = "Las inversiones reales y financieras.";
 choices[35][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[35][3] = "Las transferencias de capital y las inversiones reales.";
 answers[35] = choices[35][3];
 units[35] = "10";
 comments[35] = "Id Pregunta: 10469. PRESUPUESTOS GENERALES";


//  Id pregunta: 10154 Año de creación de pregunta: 2016
 questions[36]= "37)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[36]= new Array();
 choices[36][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[36][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[36][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[36][3] = "todas son correctas";
 answers[36] = choices[36][3];
 units[36] = "7";
 comments[36] = "Id Pregunta: 10154. Ley 39/2015, Art&iacute;culo 29";


//  Id pregunta: 10612 Año de creación de pregunta: 2016
 questions[37]= "38)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[37]= new Array();
 choices[37][0] = "Intersecci&oacute;n.";
 choices[37][1] = "Uni&oacute;n.";
 choices[37][2] = "Restricci&oacute;n.";
 choices[37][3] = "Diferencia.";
 answers[37] = choices[37][0];
 units[37] = "60";
 comments[37] = "Id Pregunta: 10612. Junta de Extremadura A1 2015";


//  Id pregunta: 10055 Año de creación de pregunta: 2016
 questions[38]= "39)  WS-Security contiene especificaciones sobre:";
 choices[38]= new Array();
 choices[38][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[38][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[38][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[38][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[38] = choices[38][1];
 units[38] = "119";
 comments[38] = "Id Pregunta: 10055. AGE A1 2015";


//  Id pregunta: 10156 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[39]= new Array();
 choices[39][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[39][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[39][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[39][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[39] = choices[39][1];
 units[39] = "7";
 comments[39] = "Id Pregunta: 10156. Ley 39/2015, Art&iacute;culo 40";


//  Id pregunta: 10516 Año de creación de pregunta: 2016
 questions[40]= "41)  Las Universidades p&uacute;blicas:";
 choices[40]= new Array();
 choices[40][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[40][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[40][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[40][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[40] = choices[40][1];
 units[40] = "7";
 comments[40] = "Id Pregunta: 10516. LEY 39/2015";


//  Id pregunta: 10031 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Qu&eacute; es MongoDB?";
 choices[41]= new Array();
 choices[41][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[41][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[41][2] = "Un sistema gestor de base de datos relacional.";
 choices[41][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[41] = choices[41][1];
 units[41] = "73";
 comments[41] = "Id Pregunta: 10031. AGE A1 2015";


//  Id pregunta: 10549 Año de creación de pregunta: 2016
 questions[42]= "43)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[42]= new Array();
 choices[42][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[42][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[42][2] = "El Presidente del Gobierno";
 choices[42][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[42] = choices[42][1];
 units[42] = "26";
 comments[42] = "Id Pregunta: 10549. Gobernanza TIC";


//  Id pregunta: 10032 Año de creación de pregunta: 2016
 questions[43]= "44)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[43]= new Array();
 choices[43][0] = "ASF-AL (Apache License 2.0)";
 choices[43][1] = "EUPL (European Union Public License)";
 choices[43][2] = "LGPL (Lesser General Public License)";
 choices[43][3] = "MIT(MIT License)";
 answers[43] = choices[43][1];
 units[43] = "43";
 comments[43] = "Id Pregunta: 10032. AGE A1 2015";


//  Id pregunta: 10367 Año de creación de pregunta: 2016
 questions[44]= "45)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[44]= new Array();
 choices[44][0] = "Presentar la moci&oacute;n de censura.";
 choices[44][1] = "Presidir las sesiones del Parlamento.";
 choices[44][2] = "Organizar la Secretar&iacute;a General.";
 choices[44][3] = "Preparar las actividades de las Comisiones.";
 answers[44] = choices[44][1];
 units[44] = "5";
 comments[44] = "Id Pregunta: 10367. UNION EUROPEA";


//  Id pregunta: 10316 Año de creación de pregunta: 2016
 questions[45]= "46)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[45]= new Array();
 choices[45][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[45][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[45][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[45][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[45] = choices[45][1];
 units[45] = "5";
 comments[45] = "Id Pregunta: 10316. UNION EUROPEA";


//  Id pregunta: 10480 Año de creación de pregunta: 2016
 questions[46]= "47)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[46]= new Array();
 choices[46][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[46][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[46][2] = "Las respuestas a) b) no son correctas.";
 choices[46][3] = "Las respuestas a) y b) son correctas.";
 answers[46] = choices[46][3];
 units[46] = "10";
 comments[46] = "Id Pregunta: 10480. PRESUPUESTOS GENERALES";


//  Id pregunta: 10111 Año de creación de pregunta: 2016
 questions[47]= "48)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[47]= new Array();
 choices[47][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[47][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[47][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[47][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[47] = choices[47][0];
 units[47] = "15";
 comments[47] = "Id Pregunta: 10111. ";


//  Id pregunta: 10557 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[48]= new Array();
 choices[48][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[48][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[48][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[48][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[48] = choices[48][0];
 units[48] = "19";
 comments[48] = "Id Pregunta: 10557. Agenda Digital";


//  Id pregunta: 10455 Año de creación de pregunta: 2016
 questions[49]= "50)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[49]= new Array();
 choices[49][0] = "En qu&eacute; nos gastamos el dinero";
 choices[49][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[49][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[49][3] = "Qui&eacute;n se gasta el dinero.";
 answers[49] = choices[49][0];
 units[49] = "10";
 comments[49] = "Id Pregunta: 10455. PRESUPUESTOS GENERALES";


//  Id pregunta: 10534 Año de creación de pregunta: 2016
 questions[50]= "51)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[50]= new Array();
 choices[50][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[50][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[50][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[50][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[50] = choices[50][2];
 units[50] = "7";
 comments[50] = "Id Pregunta: 10534. LEY 39/2015";


//  Id pregunta: 10042 Año de creación de pregunta: 2016
 questions[51]= "52)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[51]= new Array();
 choices[51][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[51][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[51][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[51][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[51] = choices[51][3];
 units[51] = "86";
 comments[51] = "Id Pregunta: 10042. AGE A1 2015";


//  Id pregunta: 10575 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[52]= new Array();
 choices[52][0] = "MySQL";
 choices[52][1] = "SQLite";
 choices[52][2] = "Zope";
 choices[52][3] = "MariaDB";
 answers[52] = choices[52][2];
 units[52] = "61";
 comments[52] = "Id Pregunta: 10575. Tema 61. TAI 2016.";


//  Id pregunta: 10452 Año de creación de pregunta: 2016
 questions[53]= "54)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[53]= new Array();
 choices[53][0] = "Los cr&eacute;ditos";
 choices[53][1] = "Las partidas presupuestarias";
 choices[53][2] = "Los derechos";
 choices[53][3] = "Las obligaciones";
 answers[53] = choices[53][3];
 units[53] = "10";
 comments[53] = "Id Pregunta: 10452. PRESUPUESTOS GENERALES";


//  Id pregunta: 10665 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[54]= new Array();
 choices[54][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, , la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[54][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[54][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[54][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[54] = choices[54][2];
 units[54] = "7";
 comments[54] = "Id Pregunta: 10665. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 10344 Año de creación de pregunta: 2016
 questions[55]= "56)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[55]= new Array();
 choices[55][0] = "Pas&oacute; de 518 a 626.";
 choices[55][1] = "Pas&oacute; de 434 a 518.";
 choices[55][2] = "Pas&oacute; de 345 a 512.";
 choices[55][3] = "Pas&oacute; de 435 a 610.";
 answers[55] = choices[55][1];
 units[55] = "5";
 comments[55] = "Id Pregunta: 10344. UNION EUROPEA";


//  Id pregunta: 10450 Año de creación de pregunta: 2016
 questions[56]= "57)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[56]= new Array();
 choices[56][0] = "Cifrada";
 choices[56][1] = "Conjunta";
 choices[56][2] = "Sistem&aacute;tica";
 choices[56][3] = "Todas son correctas";
 answers[56] = choices[56][3];
 units[56] = "10";
 comments[56] = "Id Pregunta: 10450. PRESUPUESTOS GENERALES";


//  Id pregunta: 10458 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[57]= new Array();
 choices[57][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[57][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[57][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[57][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[57] = choices[57][3];
 units[57] = "10";
 comments[57] = "Id Pregunta: 10458. PRESUPUESTOS GENERALES";


//  Id pregunta: 10334 Año de creación de pregunta: 2016
 questions[58]= "59)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[58]= new Array();
 choices[58][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[58][1] = "Ninguna de las respuestas es correcta.";
 choices[58][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[58][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[58] = choices[58][0];
 units[58] = "5";
 comments[58] = "Id Pregunta: 10334. UNION EUROPEA";


//  Id pregunta: 10290 Año de creación de pregunta: 2016
 questions[59]= "60)  El Parlamento Europeo celebrar&aacute;:";
 choices[59]= new Array();
 choices[59][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[59][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[59][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[59][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[59] = choices[59][0];
 units[59] = "5";
 comments[59] = "Id Pregunta: 10290. UNION EUROPEA";


//  Id pregunta: 10342 Año de creación de pregunta: 2016
 questions[60]= "61)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[60]= new Array();
 choices[60][0] = "El Tratado de Maastrich.";
 choices[60][1] = "El Tratado de Amsterdam.";
 choices[60][2] = "El Tratado de Par&iacute;s.";
 choices[60][3] = "El Tratado de Roma.";
 answers[60] = choices[60][3];
 units[60] = "5";
 comments[60] = "Id Pregunta: 10342. UNION EUROPEA";


//  Id pregunta: 10520 Año de creación de pregunta: 2016
 questions[61]= "62)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[61]= new Array();
 choices[61][0] = "De los interesados en el procedimiento";
 choices[61][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[61][2] = "Disposiciones generales";
 choices[61][3] = "De los actos administrativos";
 answers[61] = choices[61][2];
 units[61] = "7";
 comments[61] = "Id Pregunta: 10520. LEY 39/2015";


//  Id pregunta: 10464 Año de creación de pregunta: 2016
 questions[62]= "63)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[62]= new Array();
 choices[62][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[62][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[62][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[62][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[62] = choices[62][2];
 units[62] = "10";
 comments[62] = "Id Pregunta: 10464. PRESUPUESTOS GENERALES";


//  Id pregunta: 10116 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[63]= new Array();
 choices[63][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[63][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[63][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[63][3] = "El pago de subsidios a parados";
 answers[63] = choices[63][3];
 units[63] = "15";
 comments[63] = "Id Pregunta: 10116. ";


//  Id pregunta: 10300 Año de creación de pregunta: 2016
 questions[64]= "65)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[64]= new Array();
 choices[64][0] = "La Comisi&oacute;n.";
 choices[64][1] = "El Consejo de Europa.";
 choices[64][2] = "El Consejo Europeo.";
 choices[64][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[64] = choices[64][3];
 units[64] = "5";
 comments[64] = "Id Pregunta: 10300. UNION EUROPEA";


//  Id pregunta: 10427 Año de creación de pregunta: 2016
 questions[65]= "66)  En las bases de los concursos para la provisi&oacute;n de puestos de trabajo se computar&aacute;, a los efectos de valoraci&oacute;n del trabajo desarrollado y de los correspondientes m&eacute;ritos, el tiempo que las personas candidatas hayan permanecido:";
 choices[65]= new Array();
 choices[65][0] = "En r&eacute;gimen de excedencias, reducciones de jornada, permiso de maternidad o permiso de paternidad.";
 choices[65][1] = "En el extranjero.";
 choices[65][2] = "Ninguna es correcta.";
 choices[65][3] = "Ambas son correctas.";
 answers[65] = choices[65][0];
 units[65] = "14";
 comments[65] = "Id Pregunta: 10427. POLITICAS DE IGUALDAD";


//  Id pregunta: 10278 Año de creación de pregunta: 2016
 questions[66]= "67)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[66]= new Array();
 choices[66][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[66][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[66][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[66][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[66] = choices[66][1];
 units[66] = "22";
 comments[66] = "Id Pregunta: 10278. LEY DE TRANSPARENCIA";


//  Id pregunta: 10306 Año de creación de pregunta: 2016
 questions[67]= "68)  Componen la Comisi&oacute;n Europea:";
 choices[67]= new Array();
 choices[67][0] = "Un Comisario por cada Estado miembro.";
 choices[67][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[67][2] = "Dos Comisarios por cada Estado miembro.";
 choices[67][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[67] = choices[67][0];
 units[67] = "5";
 comments[67] = "Id Pregunta: 10306. UNION EUROPEA";


//  Id pregunta: 10308 Año de creación de pregunta: 2016
 questions[68]= "69)  El Tribunal de Justicia se cre&oacute; en:";
 choices[68]= new Array();
 choices[68][0] = "El Tratado de la CECA.";
 choices[68][1] = "El Tratado de Niza.";
 choices[68][2] = "El Tratado de &Aacute;msterdam.";
 choices[68][3] = "El Tratado de Lisboa.";
 answers[68] = choices[68][0];
 units[68] = "5";
 comments[68] = "Id Pregunta: 10308. UNION EUROPEA";


//  Id pregunta: 10288 Año de creación de pregunta: 2016
 questions[69]= "70)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[69]= new Array();
 choices[69][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[69][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[69][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[69][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[69] = choices[69][2];
 units[69] = "5";
 comments[69] = "Id Pregunta: 10288. UNION EUROPEA";


//  Id pregunta: 10346 Año de creación de pregunta: 2016
 questions[70]= "71)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[70]= new Array();
 choices[70][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[70][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[70][2] = "Cinco a&ntilde;os.";
 choices[70][3] = "Ninguna es correcta.";
 answers[70] = choices[70][2];
 units[70] = "5";
 comments[70] = "Id Pregunta: 10346. UNION EUROPEA";


//  Id pregunta: 10294 Año de creación de pregunta: 2016
 questions[71]= "72)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[71]= new Array();
 choices[71][0] = "Al Consejo Europeo.";
 choices[71][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[71][2] = "A la Comisi&oacute;n Europea.";
 choices[71][3] = "Al Parlamento Europeo.";
 answers[71] = choices[71][2];
 units[71] = "5";
 comments[71] = "Id Pregunta: 10294. UNION EUROPEA";


//  Id pregunta: 10141 Año de creación de pregunta: 2016
 questions[72]= "73)  El recurso de alzada puede interponerse:";
 choices[72]= new Array();
 choices[72][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[72][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[72][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[72][3] = "Ante el Defensor del Pueblo";
 answers[72] = choices[72][1];
 units[72] = "8";
 comments[72] = "Id Pregunta: 10141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 10246 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[73]= new Array();
 choices[73][0] = "Dos Cap&iacute;tulos.";
 choices[73][1] = "Tres Cap&iacute;tulos.";
 choices[73][2] = "Un Cap&iacute;tulo.";
 choices[73][3] = "Cuatro Cap&iacute;tulos.";
 answers[73] = choices[73][1];
 units[73] = "1";
 comments[73] = "Id Pregunta: 10246. CONSTITUCION1978";


//  Id pregunta: 10477 Año de creación de pregunta: 2016
 questions[74]= "75)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[74]= new Array();
 choices[74][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[74][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[74][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[74][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[74] = choices[74][2];
 units[74] = "10";
 comments[74] = "Id Pregunta: 10477. PRESUPUESTOS GENERALES";


