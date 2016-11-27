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

//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[0]= new Array();
 choices[0][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[0][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[0][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[0][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[0] = choices[0][1];
 units[0] = "1";
 comments[0] = "Id Pregunta: 175. CONSTITUCION1978";


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[1]= new Array();
 choices[1][0] = "732";
 choices[1][1] = "626";
 choices[1][2] = "786";
 choices[1][3] = "360";
 answers[1] = choices[1][2];
 units[1] = "5";
 comments[1] = "Id Pregunta: 337. UNION EUROPEA";


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[2]= "3)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[2]= new Array();
 choices[2][0] = "Interoperabilidad";
 choices[2][1] = "Integridad";
 choices[2][2] = "Capital humano";
 choices[2][3] = "Trazabilidad";
 answers[2] = choices[2][2];
 units[2] = "19";
 comments[2] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 67 Año de creación de pregunta: 2016
 questions[3]= "4)  En Internet, la entidad encargada de la coordinaci&oacute;n de los N&uacute;meros de Sistema Aut&oacute;nomo (Autonomous System Numbers - ASN) usados por varios protocolos de enrutamiento, es:";
 choices[3]= new Array();
 choices[3][0] = "IANA";
 choices[3][1] = "ISOC";
 choices[3][2] = "IETF";
 choices[3][3] = "IAB";
 answers[3] = choices[3][0];
 units[3] = "103";
 comments[3] = "Id Pregunta: 67. AGE A1 2015";


//  Id pregunta: 523 Año de creación de pregunta: 2016
 questions[4]= "5)  Se consideran interesados en el procedimiento administrativo:";
 choices[4]= new Array();
 choices[4][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[4][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[4][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[4][3] = "todas son correctas";
 answers[4] = choices[4][0];
 units[4] = "7";
 comments[4] = "Id Pregunta: 523. LEY 39/2015";


//  Id pregunta: 585 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[5]= new Array();
 choices[5][0] = "La CETIC";
 choices[5][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[5][2] = "La DTIC";
 choices[5][3] = "Ninguno de los anteriores";
 answers[5] = choices[5][1];
 units[5] = "19";
 comments[5] = "Id Pregunta: 585. Estrategia TIC";


//  Id pregunta: 179 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[6]= new Array();
 choices[6][0] = "Una ley orginaria.";
 choices[6][1] = "Una ley org&aacute;nica.";
 choices[6][2] = "Una ley de bases.";
 choices[6][3] = "Una ley de transferencia.";
 answers[6] = choices[6][1];
 units[6] = "1";
 comments[6] = "Id Pregunta: 179. CONSTITUCION1978";


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;les son las caracter&iacute;sticas del sprint 0 en SCRUM?";
 choices[7]= new Array();
 choices[7][0] = "Se dejan listos los entornos de desarrollo";
 choices[7][1] = "Se trabaja en el product backlog, dejando listos los product backlog &iacute;tems priorizados y estimados";
 choices[7][2] = "Se hace una previsi&oacute;n del reparto de historias de usuario por iteraci&oacute;n";
 choices[7][3] = "Todas las anteriores son correctas";
 answers[7] = choices[7][3];
 units[7] = "34, 84";
 comments[7] = "Id Pregunta: 723. Metodologias &aacute;giles";


//  Id pregunta: 21 Año de creación de pregunta: 2016
 questions[8]= "9)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[8]= new Array();
 choices[8][0] = "Gesti&oacute;n de la disponibilidad";
 choices[8][1] = "Gesti&oacute;n de la demanda";
 choices[8][2] = "Gesti&oacute;n de entregas";
 choices[8][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[8] = choices[8][0];
 units[8] = "101";
 comments[8] = "Id Pregunta: 21. AGE A1 2015";


//  Id pregunta: 830 Año de creación de pregunta: 2016
 questions[9]= "10)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[9]= new Array();
 choices[9][0] = "Cabr&aacute; recurso de alzada";
 choices[9][1] = "Cabr&aacute; el nuevo protesto";
 choices[9][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[9][3] = "No cabr&aacute; recurso alguno";
 answers[9] = choices[9][3];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 830. Ley 40/2015";


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[10]= "11)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[10]= new Array();
 choices[10][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[10][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[10][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[10][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[10] = choices[10][3];
 units[10] = "10";
 comments[10] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[11]= new Array();
 choices[11][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[11][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[11][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[11][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[11] = choices[11][2];
 units[11] = "7";
 comments[11] = "Id Pregunta: 665. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[12]= "13)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[12]= new Array();
 choices[12][0] = "Crecimiento inteligente.";
 choices[12][1] = "Crecimiento inclusivo.";
 choices[12][2] = "Crecimiento sostenible.";
 choices[12][3] = "Crecimiento integrador.";
 answers[12] = choices[12][1];
 units[12] = "5";
 comments[12] = "Id Pregunta: 283. UNION EUROPEA";


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[13]= "14)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[13]= new Array();
 choices[13][0] = "El Presidente del Consejo Europeo.";
 choices[13][1] = "La Comisi&oacute;n.";
 choices[13][2] = "El Consejo.";
 choices[13][3] = "El Parlamento Europeo.";
 answers[13] = choices[13][2];
 units[13] = "5";
 comments[13] = "Id Pregunta: 328. UNION EUROPEA";


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[14]= "15)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[14]= new Array();
 choices[14][0] = "En qu&eacute; nos gastamos el dinero";
 choices[14][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[14][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[14][3] = "Qui&eacute;n se gasta el dinero.";
 answers[14] = choices[14][0];
 units[14] = "10";
 comments[14] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[15]= "16)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[15]= new Array();
 choices[15][0] = "Interchange of Data between Administrations (IDA)";
 choices[15][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[15][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[15][3] = "Interoperability Electronic European Solution (IEES)";
 answers[15] = choices[15][1];
 units[15] = "43";
 comments[15] = "Id Pregunta: 84. AGE A1 2015";


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[16]= "17)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[16]= new Array();
 choices[16][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[16][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[16][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[16][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[16] = choices[16][3];
 units[16] = "10";
 comments[16] = "Id Pregunta: 485. PRESUPUESTOS GENERALES";


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[17]= "18)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[17]= new Array();
 choices[17][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[17][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[17][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[17][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[17] = choices[17][1];
 units[17] = "5";
 comments[17] = "Id Pregunta: 298. UNION EUROPEA";


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[18]= "19)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[18]= new Array();
 choices[18][0] = "El Consejo Europeo.";
 choices[18][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[18][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[18][3] = "El Parlamento Europeo.";
 answers[18] = choices[18][0];
 units[18] = "5";
 comments[18] = "Id Pregunta: 313. UNION EUROPEA";


//  Id pregunta: 695 Año de creación de pregunta: 2016
 questions[19]= "20)  De las siguientes cu&aacute;l est&aacute; relacionada con la noci&oacute;n de integraci&oacute;n continua:";
 choices[19]= new Array();
 choices[19][0] = "Programaci&oacute;n estructurada.";
 choices[19][1] = "Metodolog&iacute;a M&eacute;trica Versi&oacute;n 4.";
 choices[19][2] = "Programaci&oacute;n extrema.";
 choices[19][3] = "Programaci&oacute;n Espuria.";
 answers[19] = choices[19][2];
 units[19] = "92";
 comments[19] = "Id Pregunta: 695. INTEGRACION CONTINUA";


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[20]= "21)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[20]= new Array();
 choices[20][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[20][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[20][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[20][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[20] = choices[20][3];
 units[20] = "44";
 comments[20] = "Id Pregunta: 17. AGE A1 2015";


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[21]= "22)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[21]= new Array();
 choices[21][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[21][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[21][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[21][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[21] = choices[21][1];
 units[21] = "4, 7, 8, 9";
 comments[21] = "Id Pregunta: 838. Ley 40/2015";


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[22]= "23)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[22]= new Array();
 choices[22][0] = "De las disposiciones favorables.";
 choices[22][1] = "De las disposiciones sancionadoras no favorables.";
 choices[22][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[22][3] = "Las respuestas b) y c) son correctas.";
 answers[22] = choices[22][3];
 units[22] = "1";
 comments[22] = "Id Pregunta: 252. CONSTITUCION1978";


//  Id pregunta: 34 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[23]= new Array();
 choices[23][0] = "Memcached";
 choices[23][1] = "OpCache";
 choices[23][2] = "WinCache Extension for PHP";
 choices[23][3] = "Alternative PHP Cache";
 answers[23] = choices[23][0];
 units[23] = "65";
 comments[23] = "Id Pregunta: 34. AGE A1 2015";


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[24]= "25)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[24]= new Array();
 choices[24][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[24][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[24][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[24][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[24] = choices[24][2];
 units[24] = "5";
 comments[24] = "Id Pregunta: 311. UNION EUROPEA";


//  Id pregunta: 408 Año de creación de pregunta: 2016
 questions[25]= "26)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[25]= new Array();
 choices[25][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[25][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[25][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[25][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[25] = choices[25][1];
 units[25] = "14";
 comments[25] = "Id Pregunta: 408. POLITICAS DE IGUALDAD";


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[26]= "27)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[26]= new Array();
 choices[26][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[26][1] = "Static &amp; Active process for REsolution Bank.";
 choices[26][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[26][3] = "Super Active REsponse for Banks";
 answers[26] = choices[26][0];
 units[26] = "12";
 comments[26] = "Id Pregunta: 139. Leyes modelo econ&oacute;mico";


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[27]= "28)  En el lenguaje de modelado UML :";
 choices[27]= new Array();
 choices[27][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[27][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[27][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[27][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[27] = choices[27][2];
 units[27] = "89";
 comments[27] = "Id Pregunta: 3. AGE A1 2015";


//  Id pregunta: 840 Año de creación de pregunta: 2016
 questions[28]= "29)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[28]= new Array();
 choices[28][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[28][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[28][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[28][3] = "Todas son correctas.";
 answers[28] = choices[28][1];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 840. Ley 40/2015";


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[29]= "30)  En cuanto al an&aacute;lisis DAFO:";
 choices[29]= new Array();
 choices[29][0] = "Considera detallada y exclusivamente factores internos.";
 choices[29][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[29][2] = "Considera detallada y exclusivamente factores externos.";
 choices[29][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[29] = choices[29][1];
 units[29] = "83";
 comments[29] = "Id Pregunta: 41. AGE A1 2015";


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[30]= "31)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[30]= new Array();
 choices[30][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[30][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[30][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[30][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[30] = choices[30][0];
 units[30] = "1";
 comments[30] = "Id Pregunta: 240. CONSTITUCION1978";


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[31]= "32)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[31]= new Array();
 choices[31][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[31][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[31][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[31][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[31] = choices[31][1];
 units[31] = "14";
 comments[31] = "Id Pregunta: 676. Dependencia";


//  Id pregunta: 626 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[32]= new Array();
 choices[32][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[32][1] = "La Direcci&oacute;n de la Competencia.";
 choices[32][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[32][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[32] = choices[32][0];
 units[32] = "121";
 comments[32] = "Id Pregunta: 626. Junta de Extremadura A1 2015";


//  Id pregunta: 547 Año de creación de pregunta: 2016
 questions[33]= "34)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[33]= new Array();
 choices[33][0] = "Integrar la estrategia TIC con la de negocio";
 choices[33][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[33][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[33][3] = "Todas las anteriores";
 answers[33] = choices[33][3];
 units[33] = "26";
 comments[33] = "Id Pregunta: 547. Gobernanza TIC";


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[34]= "35)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[34]= new Array();
 choices[34][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[34][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[34][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[34][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[34] = choices[34][1];
 units[34] = "28";
 comments[34] = "Id Pregunta: 732. Estrategia TIC";


//  Id pregunta: 501 Año de creación de pregunta: 2016
 questions[35]= "36)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[35]= new Array();
 choices[35][0] = "Las sociedades mercantiles estatales.";
 choices[35][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[35][2] = "Las respuestas a) y b) son correctas.";
 choices[35][3] = "Las respuestas a) y b) no son correctas.";
 answers[35] = choices[35][2];
 units[35] = "10";
 comments[35] = "Id Pregunta: 501. PRESUPUESTOS GENERALES";


//  Id pregunta: 71 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[36]= new Array();
 choices[36][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[36][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[36][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[36][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[36] = choices[36][0];
 units[36] = "86";
 comments[36] = "Id Pregunta: 71. AGE A1 2015";


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[37]= "38)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[37]= new Array();
 choices[37][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[37][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[37][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[37][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[37] = choices[37][2];
 units[37] = "10";
 comments[37] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[38]= "39)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[38]= new Array();
 choices[38][0] = "Un plan de igualdad.";
 choices[38][1] = "Un informe de impacto de g&eacute;nero.";
 choices[38][2] = "Un programa de igualdad.";
 choices[38][3] = "Todas son correctas.";
 answers[38] = choices[38][1];
 units[38] = "14";
 comments[38] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";


//  Id pregunta: 442 Año de creación de pregunta: 2016
 questions[39]= "40)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:";
 choices[39]= new Array();
 choices[39][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[39][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[39][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[39][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[39] = choices[39][3];
 units[39] = "43";
 comments[39] = "Id Pregunta: 442. SERVICIOS COMUNES";


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[40]= "41)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[40]= new Array();
 choices[40][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[40][1] = "Ninguna de las respuestas es correcta.";
 choices[40][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[40][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[40] = choices[40][0];
 units[40] = "5";
 comments[40] = "Id Pregunta: 334. UNION EUROPEA";


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[41]= new Array();
 choices[41][0] = "Art&iacute;culo 70.";
 choices[41][1] = "Art&iacute;culo 54.";
 choices[41][2] = "Articulo 62.";
 choices[41][3] = "Articulo 55. 5.";
 answers[41] = choices[41][2];
 units[41] = "1";
 comments[41] = "Id Pregunta: 243. CONSTITUCION1978";


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[42]= "43)  Las Universidades p&uacute;blicas:";
 choices[42]= new Array();
 choices[42][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[42][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[42][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[42][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[42] = choices[42][1];
 units[42] = "7";
 comments[42] = "Id Pregunta: 516. LEY 39/2015";


//  Id pregunta: 700 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes NO es un repositorio de c&oacute;digo?";
 choices[43]= new Array();
 choices[43][0] = "CVS";
 choices[43][1] = "SVN";
 choices[43][2] = "Team Foundation Server";
 choices[43][3] = "Apache Tomcat";
 answers[43] = choices[43][3];
 units[43] = "92";
 comments[43] = "Id Pregunta: 700. INTEGRACION CONTINUA";


//  Id pregunta: 631 Año de creación de pregunta: 2016
 questions[44]= "45)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[44]= new Array();
 choices[44][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[44][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[44][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[44][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[44] = choices[44][2];
 units[44] = "50";
 comments[44] = "Id Pregunta: 631. Junta de Extremadura A1 2015";


//  Id pregunta: 612 Año de creación de pregunta: 2016
 questions[45]= "46)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[45]= new Array();
 choices[45][0] = "Intersecci&oacute;n.";
 choices[45][1] = "Uni&oacute;n.";
 choices[45][2] = "Restricci&oacute;n.";
 choices[45][3] = "Diferencia.";
 answers[45] = choices[45][0];
 units[45] = "60";
 comments[45] = "Id Pregunta: 612. Junta de Extremadura A1 2015";


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[46]= "47)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[46]= new Array();
 choices[46][0] = "786 Diputados como m&aacute;ximo.";
 choices[46][1] = "600 Diputados como m&aacute;ximo.";
 choices[46][2] = "650 Diputados como m&aacute;ximo.";
 choices[46][3] = "732 Diputados como m&aacute;ximo.";
 answers[46] = choices[46][0];
 units[46] = "5";
 comments[46] = "Id Pregunta: 360. UNION EUROPEA";


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[47]= "48)  En el Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE, las administraciones p&uacute;blicas y las instituciones p&uacute;blicas de la Uni&oacute;n Europea deben ser abiertas, eficaces e integradoras en el a&ntilde;o:";
 choices[47]= new Array();
 choices[47][0] = "2025";
 choices[47][1] = "2023";
 choices[47][2] = "2030";
 choices[47][3] = "2020";
 answers[47] = choices[47][3];
 units[47] = "28";
 comments[47] = "Id Pregunta: 737. Estrategia TIC";


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[48]= "49)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[48]= new Array();
 choices[48][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[48][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[48][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[48][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[48] = choices[48][1];
 units[48] = "7";
 comments[48] = "Id Pregunta: 670. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[49]= "50)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[49]= new Array();
 choices[49][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[49][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[49][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[49][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[49] = choices[49][2];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 762. Ley 40/2015";


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[50]= "51)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[50]= new Array();
 choices[50][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[50][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[50][2] = "el Subdirector General que el Delegado designe";
 choices[50][3] = "el Secretario de Estado";
 answers[50] = choices[50][0];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 820. Ley 40/2015";


//  Id pregunta: 398 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[51]= new Array();
 choices[51][0] = "Art. 13, L.O.3/2007.";
 choices[51][1] = "Art. 14, L.O.3/2007.";
 choices[51][2] = "Art. 11, L.O.3/2007.";
 choices[51][3] = "Ninguna es correcta.";
 answers[51] = choices[51][2];
 units[51] = "14";
 comments[51] = "Id Pregunta: 398. POLITICAS DE IGUALDAD";


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[52]= new Array();
 choices[52][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[52][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[52][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[52][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[52] = choices[52][1];
 units[52] = "44";
 comments[52] = "Id Pregunta: 73. AGE A1 2015";


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[53]= new Array();
 choices[53][0] = "verbalmente";
 choices[53][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[53][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[53][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[53] = choices[53][2];
 units[53] = "7";
 comments[53] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 272 Año de creación de pregunta: 2016
 questions[54]= "55)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[54]= new Array();
 choices[54][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[54][1] = "Anteriormente se denominaba Sonar.";
 choices[54][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[54][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[54] = choices[54][2];
 units[54] = "92";
 comments[54] = "Id Pregunta: 272. INTEGRACION CONTINUA";


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qu&eacute; m&eacute;todo de replicaci&oacute;n remota entre sistemas de almacenamiento se ve m&aacute;s afectada por la latencia en el caso de largas distancias?";
 choices[55]= new Array();
 choices[55][0] = "As&iacute;ncrona.";
 choices[55][1] = "Log-shipping.";
 choices[55][2] = "Disk buffering.";
 choices[55][3] = "S&iacute;ncrona.";
 answers[55] = choices[55][3];
 units[55] = "53";
 comments[55] = "Id Pregunta: 849. Xunta de Galicia 2015";


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[56]= "57)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[56]= new Array();
 choices[56][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[56][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[56][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[56][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[56] = choices[56][2];
 units[56] = "27";
 comments[56] = "Id Pregunta: 20. AGE A1 2015";


//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[57]= "58)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[57]= new Array();
 choices[57][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[57][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[57][2] = "Veintisiete Jueces y ocho Abogados Generales.";
 choices[57][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[57] = choices[57][2];
 units[57] = "5";
 comments[57] = "Id Pregunta: 354. UNION EUROPEA";


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[58]= new Array();
 choices[58][0] = "Art&iacute;culo 9.1 CE.";
 choices[58][1] = "Art&iacute;culo 53 CE.";
 choices[58][2] = "Art&iacute;culo 14 CE.";
 choices[58][3] = "Art&iacute;culo 16 CE.";
 answers[58] = choices[58][2];
 units[58] = "14";
 comments[58] = "Id Pregunta: 406. POLITICAS DE IGUALDAD";


//  Id pregunta: 577 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[59]= new Array();
 choices[59][0] = "El 2 de Octubre de 2015";
 choices[59][1] = "El 15 de Septiembre de 2015";
 choices[59][2] = "El 1 de Octubre de 2015";
 choices[59][3] = "El 5 de Octubre de 2015";
 answers[59] = choices[59][0];
 units[59] = "19";
 comments[59] = "Id Pregunta: 577. Estrategia TIC";


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[60]= "61)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[60]= new Array();
 choices[60][0] = "Los cr&eacute;ditos";
 choices[60][1] = "Las partidas presupuestarias";
 choices[60][2] = "Los derechos";
 choices[60][3] = "Las obligaciones";
 answers[60] = choices[60][3];
 units[60] = "10";
 comments[60] = "Id Pregunta: 452. PRESUPUESTOS GENERALES";


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[61]= "62)  El Tribunal de Justicia est&aacute; formado por:";
 choices[61]= new Array();
 choices[61][0] = "Un Juez de cada Estado miembro.";
 choices[61][1] = "Por dos Jueces de cada Estado miembro.";
 choices[61][2] = "Por veinte Jueces.";
 choices[61][3] = "Por ocho Jueces.";
 answers[61] = choices[61][0];
 units[61] = "5";
 comments[61] = "Id Pregunta: 322. UNION EUROPEA";


//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[62]= "63)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[62]= new Array();
 choices[62][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[62][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[62][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[62][3] = "Todas las respuestas son correctas.";
 answers[62] = choices[62][3];
 units[62] = "50";
 comments[62] = "Id Pregunta: 620. Junta de Extremadura A1 2015";


//  Id pregunta: 740 Año de creación de pregunta: 2016
 questions[63]= "64)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[63]= new Array();
 choices[63][0] = "Proveer de manera compartida servicios comunes";
 choices[63][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[63][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[63][3] = "Transparencia";
 answers[63] = choices[63][1];
 units[63] = "28";
 comments[63] = "Id Pregunta: 740. Estrategia TIC";


//  Id pregunta: 341 Año de creación de pregunta: 2016
 questions[64]= "65)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[64]= new Array();
 choices[64][0] = "623";
 choices[64][1] = "649";
 choices[64][2] = "626";
 choices[64][3] = "565";
 answers[64] = choices[64][2];
 units[64] = "5";
 comments[64] = "Id Pregunta: 341. UNION EUROPEA";


//  Id pregunta: 113 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[65]= new Array();
 choices[65][0] = "La Seguridad Social";
 choices[65][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[65][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[65][3] = "El Banco de Espa&ntilde;a";
 answers[65] = choices[65][3];
 units[65] = "15";
 comments[65] = "Id Pregunta: 113. ";


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[66]= "67)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[66]= new Array();
 choices[66][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[66][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[66][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[66][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[66] = choices[66][2];
 units[66] = "108";
 comments[66] = "Id Pregunta: 600. Junta de Extremadura A1 2015";


//  Id pregunta: 459 Año de creación de pregunta: 2016
 questions[67]= "68)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[67]= new Array();
 choices[67][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[67][1] = "Pasivos financieros y transferencias de capital.";
 choices[67][2] = "Activos financieros y pasivos financieros.";
 choices[67][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[67] = choices[67][2];
 units[67] = "10";
 comments[67] = "Id Pregunta: 459. PRESUPUESTOS GENERALES";


//  Id pregunta: 14 Año de creación de pregunta: 2016
 questions[68]= "69)  Se&ntilde;ale la respuesta correcta:";
 choices[68]= new Array();
 choices[68][0] = "La norma ISO 9004 est&aacute; compuesta por las normas ISO 9000:2005, ISO 9002:2008 e ISO 9004:2009.";
 choices[68][1] = "La norma ISO 9004:2009 se refiere a la gesti&oacute;n para el &eacute;xito sostenido de una organizaci&oacute;n, con un enfoque de gesti&oacute;n de la calidad.";
 choices[68][2] = "La norma ISO 9004:2009 se refiere a los principios y vocabulario de los sistemas de gesti&oacute;n de calidad.";
 choices[68][3] = "La norma ISO 9002:2008 se refiere a los requisitos de los sistemas de gesti&oacute;n de calidad.";
 answers[68] = choices[68][1];
 units[68] = "98";
 comments[68] = "Id Pregunta: 14. AGE A1 2015";


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[69]= "70)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[69]= new Array();
 choices[69][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[69][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[69][2] = "Las respuestas a) b) no son correctas.";
 choices[69][3] = "Las respuestas a) y b) son correctas.";
 answers[69] = choices[69][3];
 units[69] = "10";
 comments[69] = "Id Pregunta: 480. PRESUPUESTOS GENERALES";


//  Id pregunta: 644 Año de creación de pregunta: 2016
 questions[70]= "71)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[70]= new Array();
 choices[70][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[70][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[70][2] = "Funcionarios e interinos.";
 choices[70][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[70] = choices[70][3];
 units[70] = "20";
 comments[70] = "Id Pregunta: 644. Junta de Extremadura A1 2015";


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[71]= new Array();
 choices[71][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[71][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[71][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[71][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[71] = choices[71][1];
 units[71] = "84";
 comments[71] = "Id Pregunta: 53. AGE A1 2015";


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[72]= "73)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[72]= new Array();
 choices[72][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[72][1] = "Programa de cartas de servicios";
 choices[72][2] = "Programa para la mejora continua de las organizaciones.";
 choices[72][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[72] = choices[72][2];
 units[72] = "18, 20";
 comments[72] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[73]= "74)  Indica la respuesta correcta";
 choices[73]= new Array();
 choices[73][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[73][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[73][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[73][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[73] = choices[73][0];
 units[73] = "34, 84";
 comments[73] = "Id Pregunta: 728. Metodologias &aacute;giles";


//  Id pregunta: 196 Año de creación de pregunta: 2016
 questions[74]= "75)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[74]= new Array();
 choices[74][0] = "Al Presidente del Gobierno.";
 choices[74][1] = "A las Cortes Generales";
 choices[74][2] = "A los electores.";
 choices[74][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[74] = choices[74][3];
 units[74] = "1";
 comments[74] = "Id Pregunta: 196. CONSTITUCION1978";


