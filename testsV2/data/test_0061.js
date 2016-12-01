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

//  Id pregunta: 680 Año de creación de pregunta: 2016
 questions[0]= "1)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[0]= new Array();
 choices[0][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[0][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[0][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[0][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[0] = choices[0][1];
 units[0] = "14";
 comments[0] = "Id Pregunta: 680. Dependencia";
 preguntaids[0] = 680


//  Id pregunta: 275 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[1]= new Array();
 choices[1][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[1][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[1][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[1][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[1] = choices[1][2];
 units[1] = "22";
 comments[1] = "Id Pregunta: 275. LEY DE TRANSPARENCIA";
 preguntaids[1] = 275


//  Id pregunta: 846 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[2]= new Array();
 choices[2][0] = "Conferencia de Presidentes.";
 choices[2][1] = "Convenios de colaboraci&oacute;n.";
 choices[2][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[2][3] = "Conferencias Sectoriales.";
 answers[2] = choices[2][0];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 846. Ley 40/2015";
 preguntaids[2] = 846


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[3]= "4)  En cuanto al an&aacute;lisis DAFO:";
 choices[3]= new Array();
 choices[3][0] = "Considera detallada y exclusivamente factores internos.";
 choices[3][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[3][2] = "Considera detallada y exclusivamente factores externos.";
 choices[3][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[3] = choices[3][1];
 units[3] = "83";
 comments[3] = "Id Pregunta: 41. AGE A1 2015";
 preguntaids[3] = 41


//  Id pregunta: 584 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[4]= new Array();
 choices[4][0] = "El 5 de Octubre de 2015";
 choices[4][1] = "El 15 de Octubre de 2015";
 choices[4][2] = "El 15 de Septiembre de 2015";
 choices[4][3] = "El 2 de Octubre de 2015";
 answers[4] = choices[4][2];
 units[4] = "19";
 comments[4] = "Id Pregunta: 584. Estrategia TIC";
 preguntaids[4] = 584


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[5]= "6)  Los Subdirectores generales:";
 choices[5]= new Array();
 choices[5][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[5][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[5][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[5][3] = "todas son correctas";
 answers[5] = choices[5][1];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 811. Ley 40/2015";
 preguntaids[5] = 811


//  Id pregunta: 597 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[6]= new Array();
 choices[6][0] = "La CETIC";
 choices[6][1] = "Los Ministerios";
 choices[6][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[6][3] = "Ninguno de los anteriores";
 answers[6] = choices[6][1];
 units[6] = "19";
 comments[6] = "Id Pregunta: 597. Estrategia TIC";
 preguntaids[6] = 597


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[7]= "8)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[7]= new Array();
 choices[7][0] = "Burn-up chart";
 choices[7][1] = "Arquitectural Skype";
 choices[7][2] = "Burn-down chart";
 choices[7][3] = "Definition of done";
 answers[7] = choices[7][1];
 units[7] = "34, 84";
 comments[7] = "Id Pregunta: 731. Metodologias &aacute;giles";
 preguntaids[7] = 731


//  Id pregunta: 575 Año de creación de pregunta: 2016
 questions[8]= "9)  Si queremos dise&ntilde;ar un enlace de 10 Gbps. &iquest;qu&eacute; medio de transmisi&oacute;n nos permite alcanzar la m&aacute;xima longitud del enlace?";
 choices[8]= new Array();
 choices[8][0] = "Cableado de cobre de categor&iacute;a 7.";
 choices[8][1] = "Fibra &oacute;ptica monomodo tipo OS2.";
 choices[8][2] = "Fibra &oacute;ptica multimodo tipo OM3.";
 choices[8][3] = "Fibra &oacute;ptica multimodo tipo OM4.";
 answers[8] = choices[8][1];
 units[8] = "106";
 comments[8] = "Id Pregunta: 575. Tema 106. TAI 2016.";
 preguntaids[8] = 575


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[9]= "10)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[9]= new Array();
 choices[9][0] = "La Ley General Tributaria.";
 choices[9][1] = "La Ley Presupuestaria.";
 choices[9][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[9][3] = "Ninguna de las respuestas es correcta.";
 answers[9] = choices[9][0];
 units[9] = "10";
 comments[9] = "Id Pregunta: 488. PRESUPUESTOS GENERALES";
 preguntaids[9] = 488


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[10]= "11)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[10]= new Array();
 choices[10][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[10][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[10][2] = "Solamente soporta herramientas de control de versiones como CVS, Git y Clearcase.";
 choices[10][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[10] = choices[10][1];
 units[10] = "92";
 comments[10] = "Id Pregunta: 716. INTEGRACION CONTINUA";
 preguntaids[10] = 716


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[11]= "12)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[11]= new Array();
 choices[11][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[11][1] = "Clasificaci&oacute;n por cuenta.";
 choices[11][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[11][3] = "Clasificaci&oacute;n por intercambio.";
 answers[11] = choices[11][3];
 units[11] = "56";
 comments[11] = "Id Pregunta: 611. Junta de Extremadura A1 2015";
 preguntaids[11] = 611


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[12]= "13)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[12]= new Array();
 choices[12][0] = "De las disposiciones favorables.";
 choices[12][1] = "De las disposiciones sancionadoras no favorables.";
 choices[12][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[12][3] = "Las respuestas b) y c) son correctas.";
 answers[12] = choices[12][3];
 units[12] = "1";
 comments[12] = "Id Pregunta: 252. CONSTITUCION1978";
 preguntaids[12] = 252


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[13]= "14)  Los Reglamentos no se caracterizan por:";
 choices[13]= new Array();
 choices[13][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[13][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[13][2] = "Ser obligatorios.";
 choices[13][3] = "No poseer alcance general.";
 answers[13] = choices[13][3];
 units[13] = "5";
 comments[13] = "Id Pregunta: 359. UNION EUROPEA";
 preguntaids[13] = 359


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[14]= "15)  La recusaci&oacute;n pueden promoverla...";
 choices[14]= new Array();
 choices[14][0] = "Cualquier &oacute;rgano";
 choices[14][1] = "El interesado";
 choices[14][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[14][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[14] = choices[14][0];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 828. Ley 40/2015";
 preguntaids[14] = 828


//  Id pregunta: 631 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n la Ley de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no podr&aacute;n realizarse transferencias de datos de car&aacute;cter personal a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al de esta Ley. &iquest;Qui&eacute;n se encarga de evaluar el nivel adecuado de protecci&oacute;n que ofrece el pa&iacute;s de destino de los datos?";
 choices[15]= new Array();
 choices[15][0] = "El Ministerio de Asuntos Exteriores junto con el Ministerio de Justicia.";
 choices[15][1] = "El responsable de la custodia de los datos enviados.";
 choices[15][2] = "La Agencia Europea de Cooperaci&oacute;n.";
 choices[15][3] = "La Agencia de Protecci&oacute;n de Datos.";
 answers[15] = choices[15][3];
 units[15] = "35";
 comments[15] = "Id Pregunta: 631. Junta de Extremadura A1 2015";
 preguntaids[15] = 631


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[16]= "17)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[16]= new Array();
 choices[16][0] = "Estrasburgo.";
 choices[16][1] = "Bruselas.";
 choices[16][2] = "Luxemburgo.";
 choices[16][3] = "Par&iacute;s.";
 answers[16] = choices[16][1];
 units[16] = "5";
 comments[16] = "Id Pregunta: 305. UNION EUROPEA";
 preguntaids[16] = 305


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[17]= new Array();
 choices[17][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[17][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[17][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[17][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[17] = choices[17][2];
 units[17] = "22";
 comments[17] = "Id Pregunta: 129. ";
 preguntaids[17] = 129


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[18]= "19)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[18]= new Array();
 choices[18][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[18][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[18][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[18][3] = "ninguna es correcta";
 answers[18] = choices[18][2];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 819. Ley 40/2015";
 preguntaids[18] = 819


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[19]= new Array();
 choices[19][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[19][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[19][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[19][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[19] = choices[19][1];
 units[19] = "7";
 comments[19] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";
 preguntaids[19] = 158


//  Id pregunta: 241 Año de creación de pregunta: 2016
 questions[20]= "21)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[20]= new Array();
 choices[20][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[20][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[20][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[20][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[20] = choices[20][0];
 units[20] = "1";
 comments[20] = "Id Pregunta: 241. CONSTITUCION1978";
 preguntaids[20] = 241


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[21]= "22)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[21]= new Array();
 choices[21][0] = "Tres a&ntilde;os.";
 choices[21][1] = "Dos a&ntilde;os y medio.";
 choices[21][2] = "Cinco a&ntilde;os.";
 choices[21][3] = "Seis a&ntilde;os.";
 answers[21] = choices[21][3];
 units[21] = "5";
 comments[21] = "Id Pregunta: 291. UNION EUROPEA";
 preguntaids[21] = 291


//  Id pregunta: 604 Año de creación de pregunta: 2016
 questions[22]= "23)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[22]= new Array();
 choices[22][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[22][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[22][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[22][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[22] = choices[22][2];
 units[22] = "76";
 comments[22] = "Id Pregunta: 604. Junta de Extremadura A1 2015";
 preguntaids[22] = 604


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[23]= "24)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[23]= new Array();
 choices[23][0] = "Al Consejo Europeo.";
 choices[23][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[23][2] = "A la Comisi&oacute;n Europea.";
 choices[23][3] = "Al Parlamento Europeo.";
 answers[23] = choices[23][2];
 units[23] = "5";
 comments[23] = "Id Pregunta: 320. UNION EUROPEA";
 preguntaids[23] = 320


//  Id pregunta: 200 Año de creación de pregunta: 2016
 questions[24]= "25)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[24]= new Array();
 choices[24][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[24][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[24][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[24][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[24] = choices[24][3];
 units[24] = "1";
 comments[24] = "Id Pregunta: 200. CONSTITUCION1978";
 preguntaids[24] = 200


//  Id pregunta: 281 Año de creación de pregunta: 2016
 questions[25]= "26)  Se&ntilde;ale la respuesta falsa:";
 choices[25]= new Array();
 choices[25][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[25][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[25][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[25][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[25] = choices[25][3];
 units[25] = "5";
 comments[25] = "Id Pregunta: 281. UNION EUROPEA";
 preguntaids[25] = 281


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[26]= "27)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[26]= new Array();
 choices[26][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[26][1] = "La delimitaci&oacute;n de su territorio.";
 choices[26][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[26][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[26] = choices[26][2];
 units[26] = "1";
 comments[26] = "Id Pregunta: 228. CONSTITUCION1978";
 preguntaids[26] = 228


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[27]= "28)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[27]= new Array();
 choices[27][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[27][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[27][2] = "Cinco a&ntilde;os.";
 choices[27][3] = "Ninguna es correcta.";
 answers[27] = choices[27][2];
 units[27] = "5";
 comments[27] = "Id Pregunta: 346. UNION EUROPEA";
 preguntaids[27] = 346


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


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[29]= new Array();
 choices[29][0] = "117.5";
 choices[29][1] = "117.1";
 choices[29][2] = "116";
 choices[29][3] = "15";
 answers[29] = choices[29][0];
 units[29] = "1";
 comments[29] = "Id Pregunta: 260. CONSTITUCION1978";
 preguntaids[29] = 260


//  Id pregunta: 619 Año de creación de pregunta: 2016
 questions[30]= "31)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[30]= new Array();
 choices[30][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[30][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[30][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[30][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[30] = choices[30][0];
 units[30] = "84";
 comments[30] = "Id Pregunta: 619. Junta de Extremadura A1 2015";
 preguntaids[30] = 619


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[31]= "32)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[31]= new Array();
 choices[31][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[31][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[31][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[31][3] = "Todas las respuestas son correctas.";
 answers[31] = choices[31][3];
 units[31] = "50";
 comments[31] = "Id Pregunta: 622. Junta de Extremadura A1 2015";
 preguntaids[31] = 622


//  Id pregunta: 125 Año de creación de pregunta: 2016
 questions[32]= "33)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[32]= new Array();
 choices[32][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[32][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[32][2] = "La protecci&oacute;n del medio ambiente.";
 choices[32][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[32] = choices[32][0];
 units[32] = "22";
 comments[32] = "Id Pregunta: 125. ";
 preguntaids[32] = 125


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[33]= "34)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[33]= new Array();
 choices[33][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[33][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[33][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[33][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[33] = choices[33][2];
 units[33] = "101";
 comments[33] = "Id Pregunta: 60. AGE A1 2015";
 preguntaids[33] = 60


//  Id pregunta: 323 Año de creación de pregunta: 2016
 questions[34]= "35)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[34]= new Array();
 choices[34][0] = "Tres a&ntilde;os.";
 choices[34][1] = "Cuatro a&ntilde;os.";
 choices[34][2] = "Cinco a&ntilde;os.";
 choices[34][3] = "Seis a&ntilde;os.";
 answers[34] = choices[34][3];
 units[34] = "5";
 comments[34] = "Id Pregunta: 323. UNION EUROPEA";
 preguntaids[34] = 323


//  Id pregunta: 740 Año de creación de pregunta: 2016
 questions[35]= "36)  La estructura de la Estrategia TIC:";
 choices[35]= new Array();
 choices[35][0] = "5 principios rectores, 7 objetivos estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[35][1] = "5 principios rectores, 5 objetivos estrat&eacute;gicos, 7 l&iacute;neas de acci&oacute;n";
 choices[35][2] = "5 principios rectores, 5 objetivos estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[35][3] = "5 principios rectores, 6 objetivos estrat&eacute;gicos, 8 l&iacute;neas de acci&oacute;n";
 answers[35] = choices[35][2];
 units[35] = "28";
 comments[35] = "Id Pregunta: 740. Estrategia TIC";
 preguntaids[35] = 740


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[36]= "37)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[36]= new Array();
 choices[36][0] = "El derecho a un permiso.";
 choices[36][1] = "Una prestaci&oacute;n por paternidad.";
 choices[36][2] = "Ambas son correctas.";
 choices[36][3] = "18 d&iacute;as de permiso.";
 answers[36] = choices[36][2];
 units[36] = "14";
 comments[36] = "Id Pregunta: 423. POLITICAS DE IGUALDAD";
 preguntaids[36] = 423


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[37]= "38)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[37]= new Array();
 choices[37][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[37][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[37][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[37][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[37] = choices[37][0];
 units[37] = "35";
 comments[37] = "Id Pregunta: 75. AGE A1 2015";
 preguntaids[37] = 75


//  Id pregunta: 314 Año de creación de pregunta: 2016
 questions[38]= "39)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[38]= new Array();
 choices[38][0] = "Al Consejo Europeo.";
 choices[38][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[38][2] = "A la Comisi&oacute;n Europea.";
 choices[38][3] = "Al Parlamento Europeo.";
 answers[38] = choices[38][2];
 units[38] = "5";
 comments[38] = "Id Pregunta: 314. UNION EUROPEA";
 preguntaids[38] = 314


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[39]= "40)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[39]= new Array();
 choices[39][0] = "El 23 de julio de 1952.";
 choices[39][1] = "El 18 de abril de 1951.";
 choices[39][2] = "El 16 de abril de 1948.";
 choices[39][3] = "d)Ninguna de las respuestas son correctas.";
 answers[39] = choices[39][0];
 units[39] = "5";
 comments[39] = "Id Pregunta: 349. UNION EUROPEA";
 preguntaids[39] = 349


//  Id pregunta: 394 Año de creación de pregunta: 2016
 questions[40]= "41)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[40]= new Array();
 choices[40][0] = "Discriminaci&oacute;n indirecta.";
 choices[40][1] = "Discriminaci&oacute;n directa.";
 choices[40][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[40][3] = "Discriminaci&oacute;n abusiva.";
 answers[40] = choices[40][0];
 units[40] = "14";
 comments[40] = "Id Pregunta: 394. POLITICAS DE IGUALDAD";
 preguntaids[40] = 394


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[41]= "42)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[41]= new Array();
 choices[41][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[41][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[41][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[41][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[41] = choices[41][3];
 units[41] = "5";
 comments[41] = "Id Pregunta: 317. UNION EUROPEA";
 preguntaids[41] = 317


//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale el que corresponde a un principio de integraci&oacute;n continua:";
 choices[42]= new Array();
 choices[42][0] = "Migraci&oacute;n manual y controlada a cada entorno de desarrollo";
 choices[42][1] = "Mantener un repositorio de c&oacute;digo.";
 choices[42][2] = "Reutilizaci&oacute;n de interfaces de usuario.";
 choices[42][3] = "Todos corresponden a principios de integraci&oacute;n continua.";
 answers[42] = choices[42][1];
 units[42] = "92";
 comments[42] = "Id Pregunta: 698. INTEGRACION CONTINUA";
 preguntaids[42] = 698


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[43]= "44)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[43]= new Array();
 choices[43][0] = "El Delegado del Gobierno.";
 choices[43][1] = "El Subdelegado del Gobierno.";
 choices[43][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[43][3] = "El Gobernador Civil.";
 answers[43] = choices[43][2];
 units[43] = "1";
 comments[43] = "Id Pregunta: 207. CONSTITUCION1978";
 preguntaids[43] = 207


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[44]= "45)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[44]= new Array();
 choices[44][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[44][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[44][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[44][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[44] = choices[44][2];
 units[44] = "22";
 comments[44] = "Id Pregunta: 97. AGE A1 2015";
 preguntaids[44] = 97


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[45]= "46)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[45]= new Array();
 choices[45][0] = "La Ley Org&aacute;nica 2/2011";
 choices[45][1] = "La Ley Org&aacute;nica 2/2012";
 choices[45][2] = "La Ley Org&aacute;nica 3/2012";
 choices[45][3] = "La Ley Org&aacute;nica 2/2002";
 answers[45] = choices[45][1];
 units[45] = "12";
 comments[45] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";
 preguntaids[45] = 138


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[46]= "47)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[46]= new Array();
 choices[46][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[46][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[46][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[46][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[46] = choices[46][1];
 units[46] = "28";
 comments[46] = "Id Pregunta: 734. Estrategia TIC";
 preguntaids[46] = 734


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[47]= "48)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[47]= new Array();
 choices[47][0] = "Son actos normativos.";
 choices[47][1] = "Poseen alcance general.";
 choices[47][2] = "No son obligatorias.";
 choices[47][3] = "Son actos individuales no normativos.";
 answers[47] = choices[47][3];
 units[47] = "5";
 comments[47] = "Id Pregunta: 362. UNION EUROPEA";
 preguntaids[47] = 362


//  Id pregunta: 66 Año de creación de pregunta: 2016
 questions[48]= "49)  Para los siguientes tipos de copias de seguridad, indique cu&aacute;l de las siguientes secuencias los ordena de mayor a menor tiempo de restauraci&oacute;n:";
 choices[48]= new Array();
 choices[48][0] = "Incremental, diferencial, completa";
 choices[48][1] = "Completa, incremental, diferencial";
 choices[48][2] = "Completa, diferencial, incremental";
 choices[48][3] = "No hay diferencia en el tiempo de restauraci&oacute;n, encontr&aacute;ndose la diferencia en el espacio de almacenamiento consumido.";
 answers[48] = choices[48][0];
 units[48] = "53";
 comments[48] = "Id Pregunta: 66. AGE A1 2015. Pregunta anulada en el examen real. La opci&oacute;n A dec&iacute;a &quot;Diferencial, incremental, completa&quot;, por lo que ninguna respuesta pod&iacute;a considerarse correcta";
 preguntaids[48] = 66


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[49]= "50)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[49]= new Array();
 choices[49][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[49][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[49][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[49][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[49] = choices[49][1];
 units[49] = "19";
 comments[49] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";
 preguntaids[49] = 160


//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[50]= new Array();
 choices[50][0] = "Art&iacute;culo 14 CE.";
 choices[50][1] = "Art&iacute;culo 9.2 CE.";
 choices[50][2] = "Art&iacute;culo 9.1 CE.";
 choices[50][3] = "Art&iacute;culo 13 CE.";
 answers[50] = choices[50][2];
 units[50] = "14";
 comments[50] = "Id Pregunta: 407. POLITICAS DE IGUALDAD";
 preguntaids[50] = 407


//  Id pregunta: 196 Año de creación de pregunta: 2016
 questions[51]= "52)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[51]= new Array();
 choices[51][0] = "Al Presidente del Gobierno.";
 choices[51][1] = "A las Cortes Generales";
 choices[51][2] = "A los electores.";
 choices[51][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[51] = choices[51][3];
 units[51] = "1";
 comments[51] = "Id Pregunta: 196. CONSTITUCION1978";
 preguntaids[51] = 196


//  Id pregunta: 753 Año de creación de pregunta: 2016
 questions[52]= "53)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[52]= new Array();
 choices[52][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[52][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[52][2] = "b) y d) son verdaderas";
 choices[52][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[52] = choices[52][1];
 units[52] = "23";
 comments[52] = "Id Pregunta: 753. Direcci&oacute;n p&uacute;blica";
 preguntaids[52] = 753


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[53]= "54)  El Parlamento Europeo celebrar&aacute;:";
 choices[53]= new Array();
 choices[53][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[53][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[53][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[53][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[53] = choices[53][0];
 units[53] = "5";
 comments[53] = "Id Pregunta: 290. UNION EUROPEA";
 preguntaids[53] = 290


//  Id pregunta: 78 Año de creación de pregunta: 2016
 questions[54]= "55)  En relaci&oacute;n con la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, se&ntilde;ale la respuesta correcta:";
 choices[54]= new Array();
 choices[54][0] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, el interesado debe instar su rectificaci&oacute;n, sin que puedan ser cancelados y sustituidos de oficio por los datos rectificados o completados.";
 choices[54][1] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, ser&aacute;n cancelados y sustituidos de oficio por los datos rectificados o completados, sin perjuicio del derecho de rectificaci&oacute;n y cancelaci&oacute;n del afectado.";
 choices[54][2] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 15 d&iacute;as.";
 choices[54][3] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 1 mes.";
 answers[54] = choices[54][1];
 units[54] = "35";
 comments[54] = "Id Pregunta: 78. AGE A1 2015";
 preguntaids[54] = 78


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[55]= "56)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[55]= new Array();
 choices[55][0] = "&oacute;rganos superiores";
 choices[55][1] = "&oacute;rganos directivos";
 choices[55][2] = "&oacute;rganos superiores y directivos";
 choices[55][3] = "ninguna es correcta";
 answers[55] = choices[55][1];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 796. Ley 40/2015";
 preguntaids[55] = 796


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[56]= "57)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[56]= new Array();
 choices[56][0] = "Estrasburgo.";
 choices[56][1] = "Bruselas.";
 choices[56][2] = "Luxemburgo.";
 choices[56][3] = "Holanda.";
 answers[56] = choices[56][2];
 units[56] = "5";
 comments[56] = "Id Pregunta: 295. UNION EUROPEA";
 preguntaids[56] = 295


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qui&eacute;n es el responsable de transladar la metodolog&iacute;a lean al software?";
 choices[57]= new Array();
 choices[57][0] = "Eric Ries";
 choices[57][1] = "Steve Blank";
 choices[57][2] = "Tom Poppendieck";
 choices[57][3] = "Alexander Osterwalder";
 answers[57] = choices[57][2];
 units[57] = "34";
 comments[57] = "Id Pregunta: 720. Metodologias Lean";
 preguntaids[57] = 720


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[58]= "59)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[58]= new Array();
 choices[58][0] = "2.400 euros";
 choices[58][1] = "4.000 euros";
 choices[58][2] = "3.200 euros";
 choices[58][3] = "1.600 euros";
 answers[58] = choices[58][1];
 units[58] = "37";
 comments[58] = "Id Pregunta: 89. AGE A1 2015";
 preguntaids[58] = 89


//  Id pregunta: 663 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[59]= new Array();
 choices[59][0] = "Varios namenodes y varios datanodes por cluster";
 choices[59][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[59][2] = "1 namenode y varios datanodes por cluster";
 choices[59][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[59] = choices[59][2];
 units[59] = "73";
 comments[59] = "Id Pregunta: 663. ";
 preguntaids[59] = 663


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[60]= new Array();
 choices[60][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[60][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[60][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[60][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[60] = choices[60][2];
 units[60] = "71";
 comments[60] = "Id Pregunta: 39. AGE A1 2015";
 preguntaids[60] = 39


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[61]= "62)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[61]= new Array();
 choices[61][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[61][1] = "garantizar la conservaci&oacute;n del documento";
 choices[61][2] = "garantizar la autenticidad del documento";
 choices[61][3] = "garantizar la integridad del documento";
 answers[61] = choices[61][0];
 units[61] = "7";
 comments[61] = "Id Pregunta: 152. Ley 39/2015, Art&iacute;culo 17";
 preguntaids[61] = 152


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[62]= "63)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[62]= new Array();
 choices[62][0] = "los Secretarios de Estado";
 choices[62][1] = "los Ministros";
 choices[62][2] = "los Subsecretarios";
 choices[62][3] = "los Secretarios generales";
 answers[62] = choices[62][2];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 810. Ley 40/2015";
 preguntaids[62] = 810


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[63]= new Array();
 choices[63][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[63][1] = "Solamente el Congreso.";
 choices[63][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[63][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[63] = choices[63][0];
 units[63] = "1";
 comments[63] = "Id Pregunta: 176. CONSTITUCION1978";
 preguntaids[63] = 176


//  Id pregunta: 343 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[64]= new Array();
 choices[64][0] = "23";
 choices[64][1] = "20";
 choices[64][2] = "14";
 choices[64][3] = "18";
 answers[64] = choices[64][1];
 units[64] = "5";
 comments[64] = "Id Pregunta: 343. UNION EUROPEA";
 preguntaids[64] = 343


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[65]= "66)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[65]= new Array();
 choices[65][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[65][1] = "Publicidad de las normas.";
 choices[65][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[65][3] = "Coordinaci&oacute;n normativa.";
 answers[65] = choices[65][2];
 units[65] = "1";
 comments[65] = "Id Pregunta: 244. CONSTITUCION1978";
 preguntaids[65] = 244


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[66]= "67)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[66]= new Array();
 choices[66][0] = "Los propios miembros del Tribunal.";
 choices[66][1] = "El Consejo de Europa.";
 choices[66][2] = "El Consejo Europeo.";
 choices[66][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[66] = choices[66][0];
 units[66] = "5";
 comments[66] = "Id Pregunta: 301. UNION EUROPEA";
 preguntaids[66] = 301


//  Id pregunta: 302 Año de creación de pregunta: 2016
 questions[67]= "68)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[67]= new Array();
 choices[67][0] = "Cinco a&ntilde;os.";
 choices[67][1] = "Cuatro a&ntilde;os.";
 choices[67][2] = "Tres a&ntilde;os.";
 choices[67][3] = "Seis meses.";
 answers[67] = choices[67][2];
 units[67] = "5";
 comments[67] = "Id Pregunta: 302. UNION EUROPEA";
 preguntaids[67] = 302


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[68]= "69)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[68]= new Array();
 choices[68][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[68][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[68][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[68][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[68] = choices[68][0];
 units[68] = "1";
 comments[68] = "Id Pregunta: 202. CONSTITUCION1978";
 preguntaids[68] = 202


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[69]= "70)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[69]= new Array();
 choices[69][0] = "Interoperabilidad";
 choices[69][1] = "Integridad";
 choices[69][2] = "Capital humano";
 choices[69][3] = "Trazabilidad";
 answers[69] = choices[69][2];
 units[69] = "19";
 comments[69] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";
 preguntaids[69] = 166


//  Id pregunta: 801 Año de creación de pregunta: 2016
 questions[70]= "71)  Respecto a las unidades administrativas:";
 choices[70]= new Array();
 choices[70][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[70][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[70][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[70][3] = "ninguna es correcta";
 answers[70] = choices[70][1];
 units[70] = "4, 7, 8, 9";
 comments[70] = "Id Pregunta: 801. Ley 40/2015";
 preguntaids[70] = 801


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[71]= new Array();
 choices[71][0] = "Art. 25 LO, 3/2007.";
 choices[71][1] = "Art. 23 LO, 3/2007.";
 choices[71][2] = "Art. 14 LO, 3/2007.";
 choices[71][3] = "Ninguna es correcta, es el art. 13.";
 answers[71] = choices[71][0];
 units[71] = "14";
 comments[71] = "Id Pregunta: 416. POLITICAS DE IGUALDAD";
 preguntaids[71] = 416


//  Id pregunta: 760 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes no es una iniciativa propuesta por la Estrategia Europa 2020?";
 choices[72]= new Array();
 choices[72][0] = "Agenda digital para Europa";
 choices[72][1] = "Agenda de nuevas cualificaciones y empleos";
 choices[72][2] = "Juventud en movimiento";
 choices[72][3] = "Agenda Web 2.0";
 answers[72] = choices[72][3];
 units[72] = "19";
 comments[72] = "Id Pregunta: 760. Europa 2020";
 preguntaids[72] = 760


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[73]= "74)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[73]= new Array();
 choices[73][0] = "Sello electr&oacute;nico";
 choices[73][1] = "Sede electr&oacute;nica";
 choices[73][2] = "Servidor seguro (SSL/TLS)";
 choices[73][3] = "Empleado p&uacute;blico";
 answers[73] = choices[73][2];
 units[73] = "7";
 comments[73] = "Id Pregunta: 26. AGE A1 2015";
 preguntaids[73] = 26


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[74]= "75)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[74]= new Array();
 choices[74][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[74][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[74][2] = "el sector p&uacute;blico institucional";
 choices[74][3] = "el sector privado corporativo";
 answers[74] = choices[74][3];
 units[74] = "7";
 comments[74] = "Id Pregunta: 515. LEY 39/2015";
 preguntaids[74] = 515


