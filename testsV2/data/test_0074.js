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

//  Id pregunta: 10097 AÃ±o de creación de pregunta: 2016
 questions[0]= "1)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[0]= new Array();
 choices[0][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[0][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[0][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[0][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[0] = choices[0][2];
 units[0] = "22";
 comments[0] = "Id Pregunta: 10097. AGE A1 2015";


//  Id pregunta: 10344 AÃ±o de creación de pregunta: 2016
 questions[1]= "2)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[1]= new Array();
 choices[1][0] = "Pas&oacute; de 518 a 626.";
 choices[1][1] = "Pas&oacute; de 434 a 518.";
 choices[1][2] = "Pas&oacute; de 345 a 512.";
 choices[1][3] = "Pas&oacute; de 435 a 610.";
 answers[1] = choices[1][1];
 units[1] = "5";
 comments[1] = "Id Pregunta: 10344. UNION EUROPEA";


//  Id pregunta: 10329 AÃ±o de creación de pregunta: 2016
 questions[2]= "3)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[2]= new Array();
 choices[2][0] = "Acuerdos cualificados.";
 choices[2][1] = "Acuerdos ponderados.";
 choices[2][2] = "Valoraci&oacute;n de los votos.";
 choices[2][3] = "Ponderaci&oacute;n de los votos.";
 answers[2] = choices[2][3];
 units[2] = "5";
 comments[2] = "Id Pregunta: 10329. UNION EUROPEA";


//  Id pregunta: 10163 AÃ±o de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[3]= new Array();
 choices[3][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[3][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[3][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[3][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[3] = choices[3][0];
 units[3] = "19";
 comments[3] = "Id Pregunta: 10163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 10535 AÃ±o de creación de pregunta: 2016
 questions[4]= "5)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[4]= new Array();
 choices[4][0] = "la Administraci&oacute;n General del Estado";
 choices[4][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[4][2] = "las Entidades Locales";
 choices[4][3] = "todas son correctas";
 answers[4] = choices[4][3];
 units[4] = "7";
 comments[4] = "Id Pregunta: 10535. LEY 39/2015";


//  Id pregunta: 10395 AÃ±o de creación de pregunta: 2016
 questions[5]= "6)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[5]= new Array();
 choices[5][0] = "Discriminaci&oacute;n indirecta.";
 choices[5][1] = "Discriminaci&oacute;n directa.";
 choices[5][2] = "Discriminaci&oacute;n por maternidad.";
 choices[5][3] = "Discriminaci&oacute;n abusiva.";
 answers[5] = choices[5][1];
 units[5] = "14";
 comments[5] = "Id Pregunta: 10395. POLITICAS DE IGUALDAD";


//  Id pregunta: 10036 AÃ±o de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l es la interfaz est&aacute;ndar de programaci&oacute;n Java para invocar a m&eacute;todos nativos escritos en otros lenguajes como C o C++?";
 choices[6]= new Array();
 choices[6][0] = "JAXP";
 choices[6][1] = "JNI";
 choices[6][2] = "JNDI";
 choices[6][3] = "JDBC";
 answers[6] = choices[6][1];
 units[6] = "64";
 comments[6] = "Id Pregunta: 10036. AGE A1 2015";


//  Id pregunta: 10572 AÃ±o de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de la serie IEEE 802.11 se conoce como Fast Basic Service Set Transition, el cual est&aacute; enfocado a permitir la conexi&oacute;n continua de clientes en movimiento?";
 choices[7]= new Array();
 choices[7][0] = "IEEE 802.11p";
 choices[7][1] = "IEEE 802.11r";
 choices[7][2] = "IEEE 802.11v";
 choices[7][3] = "IEEE 802.11w";
 answers[7] = choices[7][1];
 units[7] = "112";
 comments[7] = "Id Pregunta: 10572. Tema 112. TAI 2016.";


//  Id pregunta: 10228 AÃ±o de creación de pregunta: 2016
 questions[8]= "9)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[8]= new Array();
 choices[8][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[8][1] = "La delimitaci&oacute;n de su territorio.";
 choices[8][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[8][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[8] = choices[8][2];
 units[8] = "1";
 comments[8] = "Id Pregunta: 10228. CONSTITUCION1978";


//  Id pregunta: 10042 AÃ±o de creación de pregunta: 2016
 questions[9]= "10)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[9]= new Array();
 choices[9][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[9][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[9][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[9][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[9] = choices[9][3];
 units[9] = "86";
 comments[9] = "Id Pregunta: 10042. AGE A1 2015";


//  Id pregunta: 10675 AÃ±o de creación de pregunta: 2016
 questions[10]= "11)  En referencia al proyecto ANDES, para la comunicaci&oacute;n telem&aacute;tica de Nacimientos desde Centros Sanitarios a Registros Civiles, indique cual de las siguientes afirmaciones es falsa:";
 choices[10]= new Array();
 choices[10][0] = "Tiene sustento legal de acuerdo a la Ley 19/2015, de 13 de julio, de medidas de reforma administrativa en el &aacute;mbito de la Administraci&oacute;n de Justicia y del Registro Civil.";
 choices[10][1] = "Se inicia a partir de su propuesta en CORA (Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas).";
 choices[10][2] = "Reutiliza el servicio horizontal ACCEDA en modo cloud, lo cual ha facilitado la pronta puesta en marcha de la soluci&oacute;n.";
 choices[10][3] = "La utilizaci&oacute;n de ANDES por parte de los hospitales es completamente transparente, sin necesidad de realizar pasos previos para su despliegue.";
 answers[10] = choices[10][3];
 units[10] = "47";
 comments[10] = "Id Pregunta: 10675. Inscripci&oacute;n autom&aacute;tica nacimientos";


//  Id pregunta: 10450 AÃ±o de creación de pregunta: 2016
 questions[11]= "12)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[11]= new Array();
 choices[11][0] = "Cifrada";
 choices[11][1] = "Conjunta";
 choices[11][2] = "Sistem&aacute;tica";
 choices[11][3] = "Todas son correctas";
 answers[11] = choices[11][3];
 units[11] = "10";
 comments[11] = "Id Pregunta: 10450. PRESUPUESTOS GENERALES";


//  Id pregunta: 10002 AÃ±o de creación de pregunta: 2016
 questions[12]= "13)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[12]= new Array();
 choices[12][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[12][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[12][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[12][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[12] = choices[12][0];
 units[12] = "31";
 comments[12] = "Id Pregunta: 10002. AGE A1 2015";


//  Id pregunta: 10635 AÃ±o de creación de pregunta: 2016
 questions[13]= "14)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[13]= new Array();
 choices[13][0] = "Relaciones base y vistas.";
 choices[13][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[13][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[13][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[13] = choices[13][3];
 units[13] = "60";
 comments[13] = "Id Pregunta: 10635. Junta de Extremadura A1 2015";


//  Id pregunta: 10116 AÃ±o de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[14]= new Array();
 choices[14][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[14][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[14][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[14][3] = "El pago de subsidios a parados";
 answers[14] = choices[14][3];
 units[14] = "15";
 comments[14] = "Id Pregunta: 10116. ";


//  Id pregunta: 10399 AÃ±o de creación de pregunta: 2016
 questions[15]= "16)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[15]= new Array();
 choices[15][0] = "Acciones de discriminaci&oacute;n.";
 choices[15][1] = "Acciones positivas.";
 choices[15][2] = "Acciones negativas.";
 choices[15][3] = "Acciones neutras.";
 answers[15] = choices[15][1];
 units[15] = "14";
 comments[15] = "Id Pregunta: 10399. POLITICAS DE IGUALDAD";


//  Id pregunta: 10649 AÃ±o de creación de pregunta: 2016
 questions[16]= "17)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[16]= new Array();
 choices[16][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[16][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[16][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[16][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[16] = choices[16][0];
 units[16] = "60";
 comments[16] = "Id Pregunta: 10649. Junta de Extremadura A1 2015";


//  Id pregunta: 10098 AÃ±o de creación de pregunta: 2016
 questions[17]= "18)  La tecnolog&iacute;a de software que permite ejecutar al mismo tiempo varios sistemas operativos y aplicaciones en el mismo servidor se denomina:";
 choices[17]= new Array();
 choices[17][0] = "Clustering";
 choices[17][1] = "Deduplicaci&oacute;n";
 choices[17][2] = "Virtualizaci&oacute;n";
 choices[17][3] = "Contenerizaci&oacute;n";
 answers[17] = choices[17][2];
 units[17] = "124";
 comments[17] = "Id Pregunta: 10098. AGE A1 2015";


//  Id pregunta: 10581 AÃ±o de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[18]= new Array();
 choices[18][0] = "Car&aacute;cter sustitutivo";
 choices[18][1] = "Car&aacute;cter obligatorio";
 choices[18][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[18][3] = "Ninguna de las anteriores";
 answers[18] = choices[18][3];
 units[18] = "19";
 comments[18] = "Id Pregunta: 10581. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";


//  Id pregunta: 10249 AÃ±o de creación de pregunta: 2016
 questions[19]= "20)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[19]= new Array();
 choices[19][0] = "Art&iacute;culo 16.2.";
 choices[19][1] = "Art&iacute;culo 17.1.";
 choices[19][2] = "Art&iacute;culo 18.1.";
 choices[19][3] = "Art&iacute;culo 18.2.";
 answers[19] = choices[19][0];
 units[19] = "1";
 comments[19] = "Id Pregunta: 10249. CONSTITUCION1978";


//  Id pregunta: 10415 AÃ±o de creación de pregunta: 2016
 questions[20]= "21)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[20]= new Array();
 choices[20][0] = "Un informe de g&eacute;nero.";
 choices[20][1] = "La variable de sexo.";
 choices[20][2] = "La variable de edad.";
 choices[20][3] = "La variable de comportamiento.";
 answers[20] = choices[20][1];
 units[20] = "14";
 comments[20] = "Id Pregunta: 10415. POLITICAS DE IGUALDAD";


//  Id pregunta: 10564 AÃ±o de creación de pregunta: 2016
 questions[21]= "22)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[21]= new Array();
 choices[21][0] = "Los ocupados y los parados activos";
 choices[21][1] = "S&oacute;lo los ocupados";
 choices[21][2] = "Los ocupados y los inactivos";
 choices[21][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[21] = choices[21][0];
 units[21] = "12";
 comments[21] = "Id Pregunta: 10564. Modelo econ&oacute;mico";


//  Id pregunta: 10261 AÃ±o de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[22]= new Array();
 choices[22][0] = "La Comisi&oacute;n Permanente.";
 choices[22][1] = "El Presidente.";
 choices[22][2] = "El Pleno.";
 choices[22][3] = "El Vicepresidente.";
 answers[22] = choices[22][3];
 units[22] = "1";
 comments[22] = "Id Pregunta: 10261. CONSTITUCION1978";


//  Id pregunta: 10218 AÃ±o de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[23]= new Array();
 choices[23][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[23][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[23][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[23][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[23] = choices[23][0];
 units[23] = "1";
 comments[23] = "Id Pregunta: 10218. CONSTITUCION1978";


//  Id pregunta: 10061 AÃ±o de creación de pregunta: 2016
 questions[24]= "25)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[24]= new Array();
 choices[24][0] = "Lollipop";
 choices[24][1] = "Jelly Bean";
 choices[24][2] = "Marshmallow";
 choices[24][3] = "KitKat";
 answers[24] = choices[24][2];
 units[24] = "59";
 comments[24] = "Id Pregunta: 10061. AGE A1 2015";


//  Id pregunta: 10539 AÃ±o de creación de pregunta: 2016
 questions[25]= "26)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[25]= new Array();
 choices[25][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[25][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[25][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[25][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[25] = choices[25][1];
 units[25] = "7";
 comments[25] = "Id Pregunta: 10539. LEY 39/2015";


//  Id pregunta: 10176 AÃ±o de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[26]= new Array();
 choices[26][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[26][1] = "Solamente el Congreso.";
 choices[26][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[26][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[26] = choices[26][0];
 units[26] = "1";
 comments[26] = "Id Pregunta: 10176. CONSTITUCION1978";


//  Id pregunta: 10339 AÃ±o de creación de pregunta: 2016
 questions[27]= "28)  La presidencia del Consejo se ejerce de forma rotatoria cada:";
 choices[27]= new Array();
 choices[27][0] = "4 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[27][1] = "6 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[27][2] = "4 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 choices[27][3] = "6 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 answers[27] = choices[27][1];
 units[27] = "5";
 comments[27] = "Id Pregunta: 10339. UNION EUROPEA";


//  Id pregunta: 10571 AÃ±o de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[28]= new Array();
 choices[28][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[28][1] = "Entrada en la Uni&oacute;n Europea";
 choices[28][2] = "Pactos de la Moncloa";
 choices[28][3] = "Ingreso en la ONU";
 answers[28] = choices[28][3];
 units[28] = "12";
 comments[28] = "Id Pregunta: 10571. Modelo econ&oacute;mico";


//  Id pregunta: 10503 AÃ±o de creación de pregunta: 2016
 questions[29]= "30)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[29]= new Array();
 choices[29][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[29][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[29][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[29][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[29] = choices[29][3];
 units[29] = "10";
 comments[29] = "Id Pregunta: 10503. PRESUPUESTOS GENERALES";


//  Id pregunta: 10045 AÃ±o de creación de pregunta: 2016
 questions[30]= "31)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[30]= new Array();
 choices[30][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[30][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[30][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[30][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[30] = choices[30][1];
 units[30] = "74";
 comments[30] = "Id Pregunta: 10045. AGE A1 2015";


//  Id pregunta: 10020 AÃ±o de creación de pregunta: 2016
 questions[31]= "32)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[31]= new Array();
 choices[31][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[31][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[31][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[31][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[31] = choices[31][2];
 units[31] = "27";
 comments[31] = "Id Pregunta: 10020. AGE A1 2015";


//  Id pregunta: 10641 AÃ±o de creación de pregunta: 2016
 questions[32]= "33)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[32]= new Array();
 choices[32][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[32][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[32][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[32][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[32] = choices[32][1];
 units[32] = "58";
 comments[32] = "Id Pregunta: 10641. Junta de Extremadura A1 2015";


//  Id pregunta: 10149 AÃ±o de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[33]= new Array();
 choices[33][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[33][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[33][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[33][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[33] = choices[33][2];
 units[33] = "7";
 comments[33] = "Id Pregunta: 10149. Ley 39/2015, Art&iacute;culo 132";


//  Id pregunta: 10026 AÃ±o de creación de pregunta: 2016
 questions[34]= "35)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[34]= new Array();
 choices[34][0] = "Sello electr&oacute;nico";
 choices[34][1] = "Sede electr&oacute;nica";
 choices[34][2] = "Servidor seguro (SSL/TLS)";
 choices[34][3] = "Empleado p&uacute;blico";
 answers[34] = choices[34][2];
 units[34] = "7";
 comments[34] = "Id Pregunta: 10026. AGE A1 2015";


//  Id pregunta: 10260 AÃ±o de creación de pregunta: 2016
 questions[35]= "36)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[35]= new Array();
 choices[35][0] = "117.5";
 choices[35][1] = "117.1";
 choices[35][2] = "116";
 choices[35][3] = "15";
 answers[35] = choices[35][0];
 units[35] = "1";
 comments[35] = "Id Pregunta: 10260. CONSTITUCION1978";


//  Id pregunta: 10327 AÃ±o de creación de pregunta: 2016
 questions[36]= "37)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[36]= new Array();
 choices[36][0] = "X.";
 choices[36][1] = "XIX.";
 choices[36][2] = "XV.";
 choices[36][3] = "XIII.";
 answers[36] = choices[36][1];
 units[36] = "5";
 comments[36] = "Id Pregunta: 10327. UNION EUROPEA";


//  Id pregunta: 10103 AÃ±o de creación de pregunta: 2016
 questions[37]= "38)  En qu&eacute; consiste el principio BASE:";
 choices[37]= new Array();
 choices[37][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[37][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[37][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[37][3] = "Todas las anteriores son falsas";
 answers[37] = choices[37][3];
 units[37] = "73";
 comments[37] = "Id Pregunta: 10103. ";


//  Id pregunta: 10373 AÃ±o de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[38]= new Array();
 choices[38][0] = "Nueve.";
 choices[38][1] = "Diez.";
 choices[38][2] = "Siete.";
 choices[38][3] = "Ocho.";
 answers[38] = choices[38][3];
 units[38] = "5";
 comments[38] = "Id Pregunta: 10373. UNION EUROPEA";


//  Id pregunta: 10459 AÃ±o de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[39]= new Array();
 choices[39][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[39][1] = "Pasivos financieros y transferencias de capital.";
 choices[39][2] = "Activos financieros y pasivos financieros.";
 choices[39][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[39] = choices[39][2];
 units[39] = "10";
 comments[39] = "Id Pregunta: 10459. PRESUPUESTOS GENERALES";


//  Id pregunta: 10497 AÃ±o de creación de pregunta: 2016
 questions[40]= "41)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[40]= new Array();
 choices[40][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[40][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[40][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[40][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[40] = choices[40][3];
 units[40] = "10";
 comments[40] = "Id Pregunta: 10497. PRESUPUESTOS GENERALES";


//  Id pregunta: 10472 AÃ±o de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[41]= new Array();
 choices[41][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[41][1] = "Auditor&iacute;a operativa.";
 choices[41][2] = "Auditor&iacute;a de cumplimiento.";
 choices[41][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[41] = choices[41][2];
 units[41] = "10";
 comments[41] = "Id Pregunta: 10472. PRESUPUESTOS GENERALES";


//  Id pregunta: 10204 AÃ±o de creación de pregunta: 2016
 questions[42]= "43)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[42]= new Array();
 choices[42][0] = "Decretos Legislativos.";
 choices[42][1] = "Decretos-leyes.";
 choices[42][2] = "Leyes de bases.";
 choices[42][3] = "Reales Decretos del Consejo de Ministros.";
 answers[42] = choices[42][0];
 units[42] = "1";
 comments[42] = "Id Pregunta: 10204. CONSTITUCION1978";


//  Id pregunta: 10294 AÃ±o de creación de pregunta: 2016
 questions[43]= "44)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[43]= new Array();
 choices[43][0] = "Al Consejo Europeo.";
 choices[43][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[43][2] = "A la Comisi&oacute;n Europea.";
 choices[43][3] = "Al Parlamento Europeo.";
 answers[43] = choices[43][2];
 units[43] = "5";
 comments[43] = "Id Pregunta: 10294. UNION EUROPEA";


//  Id pregunta: 10312 AÃ±o de creación de pregunta: 2016
 questions[44]= "45)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[44]= new Array();
 choices[44][0] = "Por unanimidad.";
 choices[44][1] = "Por mayor&iacute;a cualificada.";
 choices[44][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[44][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[44] = choices[44][3];
 units[44] = "5";
 comments[44] = "Id Pregunta: 10312. UNION EUROPEA";


//  Id pregunta: 10242 AÃ±o de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[45]= new Array();
 choices[45][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[45][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[45][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[45][3] = "Sancionar y publicar las leyes.";
 answers[45] = choices[45][2];
 units[45] = "1";
 comments[45] = "Id Pregunta: 10242. CONSTITUCION1978";


//  Id pregunta: 10469 AÃ±o de creación de pregunta: 2016
 questions[46]= "47)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[46]= new Array();
 choices[46][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[46][1] = "Las inversiones reales y financieras.";
 choices[46][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[46][3] = "Las transferencias de capital y las inversiones reales.";
 answers[46] = choices[46][3];
 units[46] = "10";
 comments[46] = "Id Pregunta: 10469. PRESUPUESTOS GENERALES";


//  Id pregunta: 10648 AÃ±o de creación de pregunta: 2016
 questions[47]= "48)  Los IDS, (Sistemas de Detecci&oacute;n de Intrusos), pueden clasificarse:";
 choices[47]= new Array();
 choices[47][0] = "Solamente en funci&oacute;n de los sistemas que monitorizan.";
 choices[47][1] = "En funci&oacute;n de los sistemas que monitorizan y en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[47][2] = "Solamente en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[47][3] = "Estos sistemas es imposible clasificarlos.";
 answers[47] = choices[47][1];
 units[47] = "119";
 comments[47] = "Id Pregunta: 10648. Junta de Extremadura A1 2015";


//  Id pregunta: 10001 AÃ±o de creación de pregunta: 2016
 questions[48]= "49)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[48]= new Array();
 choices[48][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[48][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[48][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[48][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[48] = choices[48][2];
 units[48] = "26";
 comments[48] = "Id Pregunta: 10001. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10022 AÃ±o de creación de pregunta: 2016
 questions[49]= "50)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[49]= new Array();
 choices[49][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[49][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[49][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[49][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[49] = choices[49][1];
 units[49] = "26";
 comments[49] = "Id Pregunta: 10022. AGE A1 2015";


//  Id pregunta: 10678 AÃ±o de creación de pregunta: 2016
 questions[50]= "51)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[50]= new Array();
 choices[50][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[50][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[50][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[50][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[50] = choices[50][1];
 units[50] = "14";
 comments[50] = "Id Pregunta: 10678. Dependencia";


//  Id pregunta: 10607 AÃ±o de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[51]= new Array();
 choices[51][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[51][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[51][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[51][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[51] = choices[51][0];
 units[51] = "45";
 comments[51] = "Id Pregunta: 10607. Junta de Extremadura A1 2015";


//  Id pregunta: 10620 AÃ±o de creación de pregunta: 2016
 questions[52]= "53)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[52]= new Array();
 choices[52][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[52][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[52][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[52][3] = "Todas las respuestas son correctas.";
 answers[52] = choices[52][3];
 units[52] = "50";
 comments[52] = "Id Pregunta: 10620. Junta de Extremadura A1 2015";


//  Id pregunta: 10408 AÃ±o de creación de pregunta: 2016
 questions[53]= "54)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[53]= new Array();
 choices[53][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[53][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[53][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[53][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[53] = choices[53][1];
 units[53] = "14";
 comments[53] = "Id Pregunta: 10408. POLITICAS DE IGUALDAD";


//  Id pregunta: 10135 AÃ±o de creación de pregunta: 2016
 questions[54]= "55)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[54]= new Array();
 choices[54][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[54][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[54][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[54][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[54] = choices[54][0];
 units[54] = "12";
 comments[54] = "Id Pregunta: 10135. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10350 AÃ±o de creación de pregunta: 2016
 questions[55]= "56)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[55]= new Array();
 choices[55][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[55][1] = "Uno de sus miembros.";
 choices[55][2] = "La Comisi&oacute;n.";
 choices[55][3] = "Todas las respuestas son correctas.";
 answers[55] = choices[55][3];
 units[55] = "5";
 comments[55] = "Id Pregunta: 10350. UNION EUROPEA";


//  Id pregunta: 10010 AÃ±o de creación de pregunta: 2016
 questions[56]= "57)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[56]= new Array();
 choices[56][0] = "Paging";
 choices[56][1] = "Roaming";
 choices[56][2] = "Handover";
 choices[56][3] = "Trunking";
 answers[56] = choices[56][0];
 units[56] = "117";
 comments[56] = "Id Pregunta: 10010. AGE A1 2015";


//  Id pregunta: 10138 AÃ±o de creación de pregunta: 2016
 questions[57]= "58)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[57]= new Array();
 choices[57][0] = "La Ley Org&aacute;nica 2/2011";
 choices[57][1] = "La Ley Org&aacute;nica 2/2012";
 choices[57][2] = "La Ley Org&aacute;nica 3/2012";
 choices[57][3] = "La Ley Org&aacute;nica 2/2002";
 answers[57] = choices[57][1];
 units[57] = "12";
 comments[57] = "Id Pregunta: 10138. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10141 AÃ±o de creación de pregunta: 2016
 questions[58]= "59)  El recurso de alzada puede interponerse:";
 choices[58]= new Array();
 choices[58][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[58][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[58][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[58][3] = "Ante el Defensor del Pueblo";
 answers[58] = choices[58][1];
 units[58] = "8";
 comments[58] = "Id Pregunta: 10141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 10065 AÃ±o de creación de pregunta: 2016
 questions[59]= "60)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[59]= new Array();
 choices[59][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[59][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[59][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[59][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[59] = choices[59][2];
 units[59] = "53";
 comments[59] = "Id Pregunta: 10065. AGE A1 2015";


//  Id pregunta: 10625 AÃ±o de creación de pregunta: 2016
 questions[60]= "61)  En UML &iquest;qu&eacute; es una m&aacute;quina de estados?";
 choices[60]= new Array();
 choices[60][0] = "Es un modelo computacional representado por grafos, en los que los estados son los v&eacute;rtices.";
 choices[60][1] = "Es un dispositivo que puede ser programado para cumplir determinadas tareas de control en sistema autom&aacute;ticos.";
 choices[60][2] = "Es un comportamiento que especifica las secuencias de estados por las que pasa un objeto a lo largo de su vida en respuesta a eventos, junto con sus respuestas a esos eventos.";
 choices[60][3] = "Es un sistema l&oacute;gico que posee una entrada, un procesador intermedio y una salida resultado de la aplicaci&oacute;n del procesamiento sobre la entrada.";
 answers[60] = choices[60][2];
 units[60] = "89";
 comments[60] = "Id Pregunta: 10625. Junta de Extremadura A1 2015";


//  Id pregunta: 10629 AÃ±o de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n la Ley de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no podr&aacute;n realizarse transferencias de datos de car&aacute;cter personal a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al de esta Ley. &iquest;Qui&eacute;n se encarga de evaluar el nivel adecuado de protecci&oacute;n que ofrece el pa&iacute;s de destino de los datos?";
 choices[61]= new Array();
 choices[61][0] = "El Ministerio de Asuntos Exteriores junto con el Ministerio de Justicia.";
 choices[61][1] = "El responsable de la custodia de los datos enviados.";
 choices[61][2] = "La Agencia Europea de Cooperaci&oacute;n.";
 choices[61][3] = "La Agencia de Protecci&oacute;n de Datos.";
 answers[61] = choices[61][3];
 units[61] = "35";
 comments[61] = "Id Pregunta: 10629. Junta de Extremadura A1 2015";


//  Id pregunta: 10003 AÃ±o de creación de pregunta: 2016
 questions[62]= "63)  En el lenguaje de modelado UML :";
 choices[62]= new Array();
 choices[62][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[62][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[62][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[62][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[62] = choices[62][2];
 units[62] = "89";
 comments[62] = "Id Pregunta: 10003. AGE A1 2015";


//  Id pregunta: 10610 AÃ±o de creación de pregunta: 2016
 questions[63]= "64)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[63]= new Array();
 choices[63][0] = "GROUP BY.";
 choices[63][1] = "COUNT.";
 choices[63][2] = "WHERE.";
 choices[63][3] = "DISTINCT.";
 answers[63] = choices[63][0];
 units[63] = "60";
 comments[63] = "Id Pregunta: 10610. Junta de Extremadura A1 2015";


//  Id pregunta: 10455 AÃ±o de creación de pregunta: 2016
 questions[64]= "65)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[64]= new Array();
 choices[64][0] = "En qu&eacute; nos gastamos el dinero";
 choices[64][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[64][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[64][3] = "Qui&eacute;n se gasta el dinero.";
 answers[64] = choices[64][0];
 units[64] = "10";
 comments[64] = "Id Pregunta: 10455. PRESUPUESTOS GENERALES";


//  Id pregunta: 10534 AÃ±o de creación de pregunta: 2016
 questions[65]= "66)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[65]= new Array();
 choices[65][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[65][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[65][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[65][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[65] = choices[65][2];
 units[65] = "7";
 comments[65] = "Id Pregunta: 10534. LEY 39/2015";


//  Id pregunta: 10361 AÃ±o de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[66]= new Array();
 choices[66][0] = "El Consejo Europeo.";
 choices[66][1] = "El Parlamento Europeo.";
 choices[66][2] = "El Consejo.";
 choices[66][3] = "La Comisi&oacute;n.";
 answers[66] = choices[66][3];
 units[66] = "5";
 comments[66] = "Id Pregunta: 10361. UNION EUROPEA";


//  Id pregunta: 10343 AÃ±o de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[67]= new Array();
 choices[67][0] = "23";
 choices[67][1] = "20";
 choices[67][2] = "14";
 choices[67][3] = "18";
 answers[67] = choices[67][1];
 units[67] = "5";
 comments[67] = "Id Pregunta: 10343. UNION EUROPEA";


//  Id pregunta: 10231 AÃ±o de creación de pregunta: 2016
 questions[68]= "69)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[68]= new Array();
 choices[68][0] = "El Presidente del Congreso de los Diputados.";
 choices[68][1] = "El Presidente del Gobierno.";
 choices[68][2] = "El Rey.";
 choices[68][3] = "El Consejo de Ministros.";
 answers[68] = choices[68][0];
 units[68] = "1";
 comments[68] = "Id Pregunta: 10231. CONSTITUCION1978";


//  Id pregunta: 10129 AÃ±o de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[69]= new Array();
 choices[69][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[69][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[69][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[69][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[69] = choices[69][2];
 units[69] = "22";
 comments[69] = "Id Pregunta: 10129. ";


//  Id pregunta: 10657 AÃ±o de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qu&eacute; es el machine learning?";
 choices[70]= new Array();
 choices[70][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[70][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[70][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[70][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[70] = choices[70][0];
 units[70] = "73";
 comments[70] = "Id Pregunta: 10657. ";


//  Id pregunta: 10442 AÃ±o de creación de pregunta: 2016
 questions[71]= "72)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:";
 choices[71]= new Array();
 choices[71][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[71][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[71][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[71][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[71] = choices[71][3];
 units[71] = "43";
 comments[71] = "Id Pregunta: 10442. SERVICIOS COMUNES";


//  Id pregunta: 10681 AÃ±o de creación de pregunta: 2016
 questions[72]= "73)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[72]= new Array();
 choices[72][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[72][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[72][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[72][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[72] = choices[72][2];
 units[72] = "14";
 comments[72] = "Id Pregunta: 10681. Pensiones";


//  Id pregunta: 10070 AÃ±o de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[73]= new Array();
 choices[73][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[73][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[73][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[73][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[73] = choices[73][0];
 units[73] = "75";
 comments[73] = "Id Pregunta: 10070. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10677 AÃ±o de creación de pregunta: 2016
 questions[74]= "75)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[74]= new Array();
 choices[74][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[74][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[74][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[74][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[74] = choices[74][2];
 units[74] = "14";
 comments[74] = "Id Pregunta: 10677. Dependencia";


//  Id pregunta: 10336 AÃ±o de creación de pregunta: 2016
 questions[75]= "76)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[75]= new Array();
 choices[75][0] = "Diciembre de 1987.";
 choices[75][1] = "Septiembre de 1989.";
 choices[75][2] = "Octubre de 1990.";
 choices[75][3] = "Noviembre de 1980.";
 answers[75] = choices[75][1];
 units[75] = "5";
 comments[75] = "Id Pregunta: 10336. UNION EUROPEA";


//  Id pregunta: 10440 AÃ±o de creación de pregunta: 2016
 questions[76]= "77)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[76]= new Array();
 choices[76][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[76][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[76][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[76][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[76] = choices[76][2];
 units[76] = "43";
 comments[76] = "Id Pregunta: 10440. SERVICIOS COMUNES";


//  Id pregunta: 10537 AÃ±o de creación de pregunta: 2016
 questions[77]= "78)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[77]= new Array();
 choices[77][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[77][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[77][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[77][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[77] = choices[77][1];
 units[77] = "7";
 comments[77] = "Id Pregunta: 10537. LEY 39/2015";


//  Id pregunta: 10622 AÃ±o de creación de pregunta: 2016
 questions[78]= "79)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[78]= new Array();
 choices[78][0] = "Entradas (entities).";
 choices[78][1] = "Atributos (attribs).";
 choices[78][2] = "M&oacute;dulos (modules).";
 choices[78][3] = "Objetos (objects).";
 answers[78] = choices[78][0];
 units[78] = "74";
 comments[78] = "Id Pregunta: 10622. Junta de Extremadura A1 2015";


//  Id pregunta: 10384 AÃ±o de creación de pregunta: 2016
 questions[79]= "80)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[79]= new Array();
 choices[79][0] = "Sean dirigidas por mujeres";
 choices[79][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[79][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[79][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[79] = choices[79][2];
 units[79] = "14";
 comments[79] = "Id Pregunta: 10384. POLITICAS DE IGUALDAD";


//  Id pregunta: 10113 AÃ±o de creación de pregunta: 2016
 questions[80]= "81)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[80]= new Array();
 choices[80][0] = "La Seguridad Social";
 choices[80][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[80][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[80][3] = "El Banco de Espa&ntilde;a";
 answers[80] = choices[80][3];
 units[80] = "15";
 comments[80] = "Id Pregunta: 10113. ";


//  Id pregunta: 10075 AÃ±o de creación de pregunta: 2016
 questions[81]= "82)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[81]= new Array();
 choices[81][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[81][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[81][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[81][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[81] = choices[81][0];
 units[81] = "35";
 comments[81] = "Id Pregunta: 10075. AGE A1 2015";


//  Id pregunta: 10192 AÃ±o de creación de pregunta: 2016
 questions[82]= "83)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[82]= new Array();
 choices[82][0] = "Un diputado y un senador, cada una de ellas";
 choices[82][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[82][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[82][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[82] = choices[82][2];
 units[82] = "1";
 comments[82] = "Id Pregunta: 10192. CONSTITUCION1978";


//  Id pregunta: 10223 AÃ±o de creación de pregunta: 2016
 questions[83]= "84)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[83]= new Array();
 choices[83][0] = "De la C&aacute;mara respectiva.";
 choices[83][1] = "Del Rey.";
 choices[83][2] = "Del Tribunal Constitucional.";
 choices[83][3] = "Del Tribunal Supremo.";
 answers[83] = choices[83][0];
 units[83] = "1";
 comments[83] = "Id Pregunta: 10223. CONSTITUCION1978";


//  Id pregunta: 10018 AÃ±o de creación de pregunta: 2016
 questions[84]= "85)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[84]= new Array();
 choices[84][0] = "Aplicaci&oacute;n";
 choices[84][1] = "Sesi&oacute;n";
 choices[84][2] = "Presentaci&oacute;n";
 choices[84][3] = "Transporte";
 answers[84] = choices[84][2];
 units[84] = "105";
 comments[84] = "Id Pregunta: 10018. AGE A1 2015";


//  Id pregunta: 10157 AÃ±o de creación de pregunta: 2016
 questions[85]= "86)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[85]= new Array();
 choices[85][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[85][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[85][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[85][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[85] = choices[85][0];
 units[85] = "7";
 comments[85] = "Id Pregunta: 10157. Ley 39/2015, Art&iacute;culo 45";


//  Id pregunta: 10632 AÃ±o de creación de pregunta: 2016
 questions[86]= "87)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[86]= new Array();
 choices[86][0] = "Monol&iacute;tico.";
 choices[86][1] = "Estratificado.";
 choices[86][2] = "Cliente/servidor.";
 choices[86][3] = "Orientado a objetos.";
 answers[86] = choices[86][3];
 units[86] = "56";
 comments[86] = "Id Pregunta: 10632. Junta de Extremadura A1 2015";


//  Id pregunta: 10406 AÃ±o de creación de pregunta: 2016
 questions[87]= "88)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[87]= new Array();
 choices[87][0] = "Art&iacute;culo 9.1 CE.";
 choices[87][1] = "Art&iacute;culo 53 CE.";
 choices[87][2] = "Art&iacute;culo 14 CE.";
 choices[87][3] = "Art&iacute;culo 16 CE.";
 answers[87] = choices[87][2];
 units[87] = "14";
 comments[87] = "Id Pregunta: 10406. POLITICAS DE IGUALDAD";


//  Id pregunta: 10680 AÃ±o de creación de pregunta: 2016
 questions[88]= "89)  Seg&uacute;n el Real Decreto Ley 5/2013, de 15 de marzo, de medidas para favorecer la continuidad de la vida laboral de los trabajadores de mayor edad y promover el envejecimiento activo:";
 choices[88]= new Array();
 choices[88][0] = "La cuant&iacute;a de la pensi&oacute;n de jubilaci&oacute;n compatible con el trabajo ser&aacute; equivalente al 50 por 100 del importe resultante en el reconocimiento inicial, una vez aplicado, si procede, el l&iacute;mite m&aacute;ximo de pensi&oacute;n p&uacute;blica, o del que se est&eacute; percibiendo, en el momento de inicio de la compatibilidad con el trabajo, excluido, en todo caso, el complemento por m&iacute;nimos, cualquiera que sea la jornada laboral o la actividad que realice el pensionista.";
 choices[88][1] = "El trabajo compatible debe realizarse a tiempo parcial.";
 choices[88][2] = "Finalizada la relaci&oacute;n laboral por cuenta ajena o producido el cese en la actividad por cuenta propia, se restablecer&aacute; el percibo &iacute;ntegro de la pensi&oacute;n de jubilaci&oacute;n transcurridos 12 meses de la finalizaci&oacute;n de la relaci&oacute;n laboral.";
 choices[88][3] = "El acceso a la pensi&oacute;n podr&aacute; tener lugar hasta 5 a&ntilde;os antes de la edad que en cada caso resulte de aplicaci&oacute;n.";
 answers[88] = choices[88][0];
 units[88] = "14";
 comments[88] = "Id Pregunta: 10680. Pensiones";


//  Id pregunta: 10171 AÃ±o de creación de pregunta: 2016
 questions[89]= "90)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[89]= new Array();
 choices[89][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[89][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[89][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[89][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[89] = choices[89][3];
 units[89] = "19";
 comments[89] = "Id Pregunta: 10171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 10217 AÃ±o de creación de pregunta: 2016
 questions[90]= "91)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[90]= new Array();
 choices[90][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[90][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[90][2] = "Son refrendados por el Rey.";
 choices[90][3] = "Son convocados por el Presidente del Gobierno.";
 answers[90] = choices[90][0];
 units[90] = "1";
 comments[90] = "Id Pregunta: 10217. CONSTITUCION1978";


//  Id pregunta: 10335 AÃ±o de creación de pregunta: 2016
 questions[91]= "92)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[91]= new Array();
 choices[91][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[91][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[91][2] = "Son incompatibles ambas actas de diputado.";
 choices[91][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[91] = choices[91][2];
 units[91] = "5";
 comments[91] = "Id Pregunta: 10335. UNION EUROPEA";


//  Id pregunta: 10531 AÃ±o de creación de pregunta: 2016
 questions[92]= "93)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[92]= new Array();
 choices[92][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[92][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[92][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[92][3] = "todas son correctas";
 answers[92] = choices[92][3];
 units[92] = "7";
 comments[92] = "Id Pregunta: 10531. LEY 39/2015";


//  Id pregunta: 10414 AÃ±o de creación de pregunta: 2016
 questions[93]= "94)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[93]= new Array();
 choices[93][0] = "Un informe de impacto de g&eacute;nero.";
 choices[93][1] = "Un programa de igualdad de oportunidades.";
 choices[93][2] = "Un plan de Igualdad de Oportunidades.";
 choices[93][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[93] = choices[93][0];
 units[93] = "14";
 comments[93] = "Id Pregunta: 10414. POLITICAS DE IGUALDAD";


//  Id pregunta: 10263 AÃ±o de creación de pregunta: 2016
 questions[94]= "95)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[94]= new Array();
 choices[94][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[94][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[94][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[94][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[94] = choices[94][1];
 units[94] = "1";
 comments[94] = "Id Pregunta: 10263. CONSTITUCION1978";


//  Id pregunta: 10486 AÃ±o de creación de pregunta: 2016
 questions[95]= "96)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[95]= new Array();
 choices[95][0] = "La Ley General Tributaria.";
 choices[95][1] = "La Ley Presupuestaria.";
 choices[95][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[95][3] = "Ninguna de las respuestas es correcta.";
 answers[95] = choices[95][0];
 units[95] = "10";
 comments[95] = "Id Pregunta: 10486. PRESUPUESTOS GENERALES";


//  Id pregunta: 10429 AÃ±o de creación de pregunta: 2016
 questions[96]= "97)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[96]= new Array();
 choices[96][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[96][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[96][2] = "Ambas son correctas.";
 choices[96][3] = "Ambas son incorrectas.";
 answers[96] = choices[96][0];
 units[96] = "14";
 comments[96] = "Id Pregunta: 10429. POLITICAS DE IGUALDAD";


//  Id pregunta: 10198 AÃ±o de creación de pregunta: 2016
 questions[97]= "98)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[97]= new Array();
 choices[97][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[97][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[97][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[97][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[97] = choices[97][3];
 units[97] = "1";
 comments[97] = "Id Pregunta: 10198. CONSTITUCION1978";


//  Id pregunta: 10310 AÃ±o de creación de pregunta: 2016
 questions[98]= "99)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[98]= new Array();
 choices[98][0] = "La Comisi&oacute;n Europea.";
 choices[98][1] = "El Consejo Europeo.";
 choices[98][2] = "El Consejo de Europa.";
 choices[98][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[98] = choices[98][0];
 units[98] = "5";
 comments[98] = "Id Pregunta: 10310. UNION EUROPEA";


//  Id pregunta: 10383 AÃ±o de creación de pregunta: 2016
 questions[99]= "100)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[99]= new Array();
 choices[99][0] = "El Consejo Nacional de la Mujer";
 choices[99][1] = "El Consejo de la Mujer";
 choices[99][2] = "El Instituto de la Mujer";
 choices[99][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[99] = choices[99][3];
 units[99] = "14";
 comments[99] = "Id Pregunta: 10383. POLITICAS DE IGUALDAD";


