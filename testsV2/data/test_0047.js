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

//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[0]= "1)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[0]= new Array();
 choices[0][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[0][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[0][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[0][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[0] = choices[0][2];
 units[0] = "7";
 comments[0] = "Id Pregunta: 510. LEY 39/2015";


//  Id pregunta: 683 Año de creación de pregunta: 2016
 questions[1]= "2)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[1]= new Array();
 choices[1][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[1][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[1][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[1][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[1] = choices[1][0];
 units[1] = "77";
 comments[1] = "Id Pregunta: 683. Art&iacute;culo 2 del Reglamento 910/2014";


//  Id pregunta: 571 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[2]= new Array();
 choices[2][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[2][1] = "Entrada en la Uni&oacute;n Europea";
 choices[2][2] = "Pactos de la Moncloa";
 choices[2][3] = "Ingreso en la ONU";
 answers[2] = choices[2][3];
 units[2] = "12";
 comments[2] = "Id Pregunta: 571. Modelo econ&oacute;mico";


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[3]= "4)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[3]= new Array();
 choices[3][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[3][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[3][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[3][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[3] = choices[3][3];
 units[3] = "5";
 comments[3] = "Id Pregunta: 317. UNION EUROPEA";


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[4]= new Array();
 choices[4][0] = "PostgreSQL";
 choices[4][1] = "Datawarehouse";
 choices[4][2] = "Snowflake";
 choices[4][3] = "CouchDB";
 answers[4] = choices[4][0];
 units[4] = "61";
 comments[4] = "Id Pregunta: 576. Tema 61. TAI 2016.";


//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[5]= "6)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[5]= new Array();
 choices[5][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[5][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[5][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[5][3] = "Todas las respuestas son correctas.";
 answers[5] = choices[5][3];
 units[5] = "50";
 comments[5] = "Id Pregunta: 620. Junta de Extremadura A1 2015";


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[6]= "7)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[6]= new Array();
 choices[6][0] = "Cifrado de las comunicaciones";
 choices[6][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[6][2] = "Registro de los accesos";
 choices[6][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[6] = choices[6][1];
 units[6] = "35";
 comments[6] = "Id Pregunta: 51. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 699 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qu&eacute; es la integraci&oacute;n continua?";
 choices[7]= new Array();
 choices[7][0] = "Una pr&aacute;ctica recogida en la metodolog&iacute;a M&eacute;trica V3.";
 choices[7][1] = "Un modelo inform&aacute;tico que consiste en hacer integraciones autom&aacute;ticas de un proyecto lo m&aacute;s a menudo posible para as&iacute; poder detectar fallos cuanto antes.";
 choices[7][2] = "Una metodolog&iacute;a &aacute;gil inspirada en XP y FDD encaminada a realizar un desarrollo hol&iacute;stico en todo el proceso de desarrollo de un sistema de informaci&oacute;n.";
 choices[7][3] = "Ninguna de las anteriores.";
 answers[7] = choices[7][1];
 units[7] = "92";
 comments[7] = "Id Pregunta: 699. INTEGRACION CONTINUA";


//  Id pregunta: 294 Año de creación de pregunta: 2016
 questions[8]= "9)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[8]= new Array();
 choices[8][0] = "Al Consejo Europeo.";
 choices[8][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[8][2] = "A la Comisi&oacute;n Europea.";
 choices[8][3] = "Al Parlamento Europeo.";
 answers[8] = choices[8][2];
 units[8] = "5";
 comments[8] = "Id Pregunta: 294. UNION EUROPEA";


//  Id pregunta: 7 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[9]= new Array();
 choices[9][0] = "Nivel 7 - MPLS.";
 choices[9][1] = "Nivel 3 - RARP.";
 choices[9][2] = "Nivel 2 - HDLC.";
 choices[9][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[9] = choices[9][2];
 units[9] = "105";
 comments[9] = "Id Pregunta: 7. AGE A1 2015";


//  Id pregunta: 218 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[10]= new Array();
 choices[10][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[10][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[10][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[10][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[10] = choices[10][0];
 units[10] = "1";
 comments[10] = "Id Pregunta: 218. CONSTITUCION1978";


//  Id pregunta: 674 Año de creación de pregunta: 2016
 questions[11]= "12)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[11]= new Array();
 choices[11][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[11][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[11][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[11][3] = "Todas las anteriores son correctas.";
 answers[11] = choices[11][3];
 units[11] = "47";
 comments[11] = "Id Pregunta: 674. Receta electr&oacute;nica";


//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[12]= "13)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[12]= new Array();
 choices[12][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[12][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[12][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[12][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[12] = choices[12][2];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 773. Ley 40/2015";


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[13]= new Array();
 choices[13][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[13][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[13][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[13][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[13] = choices[13][2];
 units[13] = "7";
 comments[13] = "Id Pregunta: 665. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[14]= "15)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[14]= new Array();
 choices[14][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[14][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[14][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[14][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[14] = choices[14][1];
 units[14] = "22";
 comments[14] = "Id Pregunta: 278. LEY DE TRANSPARENCIA";


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[15]= "16)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[15]= new Array();
 choices[15][0] = "El Parlamento Europeo.";
 choices[15][1] = "Todas las respuestas son correctas.";
 choices[15][2] = "La Comisi&oacute;n Europea.";
 choices[15][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[15] = choices[15][1];
 units[15] = "5";
 comments[15] = "Id Pregunta: 353. UNION EUROPEA";


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[16]= "17)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[16]= new Array();
 choices[16][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[16][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[16][2] = "Ambas son correctas.";
 choices[16][3] = "La A y B son incorrectas.";
 answers[16] = choices[16][2];
 units[16] = "14";
 comments[16] = "Id Pregunta: 417. POLITICAS DE IGUALDAD";


//  Id pregunta: 525 Año de creación de pregunta: 2016
 questions[17]= "18)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[17]= new Array();
 choices[17][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[17][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[17][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[17][3] = "cualquiera que sea el estado del procedimiento";
 answers[17] = choices[17][3];
 units[17] = "7";
 comments[17] = "Id Pregunta: 525. LEY 39/2015";


//  Id pregunta: 695 Año de creación de pregunta: 2016
 questions[18]= "19)  De las siguientes cu&aacute;l est&aacute; relacionada con la noci&oacute;n de integraci&oacute;n continua:";
 choices[18]= new Array();
 choices[18][0] = "Programaci&oacute;n estructurada.";
 choices[18][1] = "Metodolog&iacute;a M&eacute;trica Versi&oacute;n 4.";
 choices[18][2] = "Programaci&oacute;n extrema.";
 choices[18][3] = "Programaci&oacute;n Espuria.";
 answers[18] = choices[18][2];
 units[18] = "92";
 comments[18] = "Id Pregunta: 695. INTEGRACION CONTINUA";


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[19]= "20)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[19]= new Array();
 choices[19][0] = "P&uacute;blica.";
 choices[19][1] = "Privada.";
 choices[19][2] = "A y B son correctas.";
 choices[19][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[19] = choices[19][2];
 units[19] = "14";
 comments[19] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[20]= "21)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[20]= new Array();
 choices[20][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[20][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[20][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[20][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[20] = choices[20][3];
 units[20] = "41";
 comments[20] = "Id Pregunta: 82. AGE A1 2015";


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[21]= new Array();
 choices[21][0] = "Es un framework de software libre.";
 choices[21][1] = "Es una base de datos NoSQL.";
 choices[21][2] = "Est&aacute; basado en MapReduce.";
 choices[21][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[21] = choices[21][1];
 units[21] = "73";
 comments[21] = "Id Pregunta: 94. AGE A1 2015";


//  Id pregunta: 427 Año de creación de pregunta: 2016
 questions[22]= "23)  En las bases de los concursos para la provisi&oacute;n de puestos de trabajo se computar&aacute;, a los efectos de valoraci&oacute;n del trabajo desarrollado y de los correspondientes m&eacute;ritos, el tiempo que las personas candidatas hayan permanecido:";
 choices[22]= new Array();
 choices[22][0] = "En r&eacute;gimen de excedencias, reducciones de jornada, permiso de maternidad o permiso de paternidad.";
 choices[22][1] = "En el extranjero.";
 choices[22][2] = "Ninguna es correcta.";
 choices[22][3] = "Ambas son correctas.";
 answers[22] = choices[22][0];
 units[22] = "14";
 comments[22] = "Id Pregunta: 427. POLITICAS DE IGUALDAD";


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[23]= "24)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[23]= new Array();
 choices[23][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[23][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[23][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[23][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[23] = choices[23][2];
 units[23] = "1";
 comments[23] = "Id Pregunta: 250. CONSTITUCION1978";


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[24]= "25)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[24]= new Array();
 choices[24][0] = "Quince miembros.";
 choices[24][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[24][2] = "Los miembros que determine el Consejo.";
 choices[24][3] = "Un Presidente y quince miembros.";
 answers[24] = choices[24][1];
 units[24] = "14";
 comments[24] = "Id Pregunta: 378. UNION EUROPEA";


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[25]= "26)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[25]= new Array();
 choices[25][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[25][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[25][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[25][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[25] = choices[25][2];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 811. Ley 40/2015";


//  Id pregunta: 197 Año de creación de pregunta: 2016
 questions[26]= "27)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[26]= new Array();
 choices[26][0] = "Establecer tributos.";
 choices[26][1] = "Desarrollar lo establecido en una Ley.";
 choices[26][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[26][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[26] = choices[26][0];
 units[26] = "1";
 comments[26] = "Id Pregunta: 197. CONSTITUCION1978";


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[27]= "28)  El recurso de alzada puede interponerse:";
 choices[27]= new Array();
 choices[27][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[27][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[27][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[27][3] = "Ante el Defensor del Pueblo";
 answers[27] = choices[27][1];
 units[27] = "8";
 comments[27] = "Id Pregunta: 141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[28]= new Array();
 choices[28][0] = "La Comisi&oacute;n Permanente.";
 choices[28][1] = "El Presidente.";
 choices[28][2] = "El Pleno.";
 choices[28][3] = "El Vicepresidente.";
 answers[28] = choices[28][3];
 units[28] = "1";
 comments[28] = "Id Pregunta: 261. CONSTITUCION1978";


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[29]= "30)  Las Administraciones P&uacute;blicas:";
 choices[29]= new Array();
 choices[29][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[29][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[29][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[29][3] = "todas son correctas";
 answers[29] = choices[29][1];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 770. Ley 40/2015";


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[30]= "31)  De acuerdo con el art&iacute;culo 62 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, se&ntilde;ale la respuesta correcta:";
 choices[30]= new Array();
 choices[30][0] = "El uso del dominio p&uacute;blico radioel&eacute;ctrico s&oacute;lo puede ser de dos tipos: especial o privativo.";
 choices[30][1] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico precisa de t&iacute;tulo habilitante.";
 choices[30][2] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se realiza mediante la explotaci&oacute;n en exclusiva, o por un n&uacute;mero limitado de usuarios, de determinadas frecuencias en un mismo &aacute;mbito f&iacute;sico de aplicaci&oacute;n.";
 choices[30][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se lleve a cabo de las bandas de frecuencias habilitadas para su explotaci&oacute;n de forma compartida, sin limitaci&oacute;n de n&uacute;mero de operadores o usuarios y con las condiciones t&eacute;cnicas y para los servicios que se establezcan en cada caso.";
 answers[30] = choices[30][2];
 units[30] = "121";
 comments[30] = "Id Pregunta: 29. AGE A1 2015";


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[31]= "32)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[31]= new Array();
 choices[31][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[31][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[31][2] = "a y b son correctas";
 choices[31][3] = "a y b son incorrectas";
 answers[31] = choices[31][0];
 units[31] = "7";
 comments[31] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 836 Año de creación de pregunta: 2016
 questions[32]= "33)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[32]= new Array();
 choices[32][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[32][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[32][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[32][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[32] = choices[32][1];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 836. Ley 40/2015";


//  Id pregunta: 351 Año de creación de pregunta: 2016
 questions[33]= "34)  La sede del Parlamento Europeo se encuentra en:";
 choices[33]= new Array();
 choices[33][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[33][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[33][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[33][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[33] = choices[33][1];
 units[33] = "5";
 comments[33] = "Id Pregunta: 351. UNION EUROPEA";


//  Id pregunta: 592 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[34]= new Array();
 choices[34][0] = "Anualmente";
 choices[34][1] = "Bienalmente";
 choices[34][2] = "Cada cuatro a&ntilde;os";
 choices[34][3] = "No se define ninguna periodicidad";
 answers[34] = choices[34][1];
 units[34] = "19";
 comments[34] = "Id Pregunta: 592. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";


//  Id pregunta: 460 Año de creación de pregunta: 2016
 questions[35]= "36)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[35]= new Array();
 choices[35][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[35][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[35][2] = "La normativa reguladora de cada derecho.";
 choices[35][3] = "Ley 50/1997, del Gobierno.";
 answers[35] = choices[35][2];
 units[35] = "10";
 comments[35] = "Id Pregunta: 460. PRESUPUESTOS GENERALES";


//  Id pregunta: 496 Año de creación de pregunta: 2016
 questions[36]= "37)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[36]= new Array();
 choices[36][0] = "Las respuestas a) y b) son correctas.";
 choices[36][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[36][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[36][3] = "Las respuestas a) y b) no son correctas.";
 answers[36] = choices[36][0];
 units[36] = "10";
 comments[36] = "Id Pregunta: 496. PRESUPUESTOS GENERALES";


//  Id pregunta: 714 Año de creación de pregunta: 2016
 questions[37]= "38)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[37]= new Array();
 choices[37][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[37][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[37][2] = "Solamente soporta herramientas de control de versiones como CVS, Git y Clearcase.";
 choices[37][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[37] = choices[37][1];
 units[37] = "92";
 comments[37] = "Id Pregunta: 714. INTEGRACION CONTINUA";


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[38]= "39)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[38]= new Array();
 choices[38][0] = "Tener una estructura institucional.";
 choices[38][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[38][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[38][3] = "Todas las respuestas son correctas.";
 answers[38] = choices[38][3];
 units[38] = "5";
 comments[38] = "Id Pregunta: 377. UNION EUROPEA";


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[39]= "40)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[39]= new Array();
 choices[39][0] = "los Subsecretarios y los Secretarios generales";
 choices[39][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[39][2] = "los Secretarios de Estado y los Directores generales";
 choices[39][3] = "los Ministros y los Secretarios de Estado";
 answers[39] = choices[39][3];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 786. Ley 40/2015";


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[40]= "41)  La Administraci&oacute;n General del Estado se organiza:";
 choices[40]= new Array();
 choices[40][0] = "en Ministerios";
 choices[40][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[40][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[40][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[40] = choices[40][1];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 800. Ley 40/2015";


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[41]= "42)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[41]= new Array();
 choices[41][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[41][1] = "La delimitaci&oacute;n de su territorio.";
 choices[41][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[41][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[41] = choices[41][2];
 units[41] = "1";
 comments[41] = "Id Pregunta: 228. CONSTITUCION1978";


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[42]= "43)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[42]= new Array();
 choices[42][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[42][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[42][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[42][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[42] = choices[42][3];
 units[42] = "77";
 comments[42] = "Id Pregunta: 686. Art&iacute;culo 25 del Reglamento 910/2014";


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[43]= new Array();
 choices[43][0] = "Art&iacute;culo 9.1 CE.";
 choices[43][1] = "Art&iacute;culo 53 CE.";
 choices[43][2] = "Art&iacute;culo 14 CE.";
 choices[43][3] = "Art&iacute;culo 16 CE.";
 answers[43] = choices[43][2];
 units[43] = "14";
 comments[43] = "Id Pregunta: 406. POLITICAS DE IGUALDAD";


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[44]= new Array();
 choices[44][0] = "El Ministro de Econom&iacute;a.";
 choices[44][1] = "El Gobierno.";
 choices[44][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[44][3] = "El Presidente del Gobierno.";
 answers[44] = choices[44][1];
 units[44] = "10";
 comments[44] = "Id Pregunta: 470. PRESUPUESTOS GENERALES";


//  Id pregunta: 553 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes iniciativas busca la mejora del acceso de los consumidores y las empresas a los bienes y servicios digitales, como parte de la estrategia para el Mercado &Uacute;nico Digital de la UE?";
 choices[45]= new Array();
 choices[45][0] = "Una paqueter&iacute;a m&aacute;s eficiente y asequible";
 choices[45][1] = "Revisar el marco de comunicaci&oacute;n audiovisual con el fin de adecuarlo al siglo XXI";
 choices[45][2] = "Reforzar la confianza y la seguridad en los servicios digitales, en particular en relaci&oacute;n con el tratamiento de datos personales";
 choices[45][3] = "Todas lo son";
 answers[45] = choices[45][0];
 units[45] = "17";
 comments[45] = "Id Pregunta: 553. Mercado &Uacute;nico Digital";


//  Id pregunta: 615 Año de creación de pregunta: 2016
 questions[46]= "47)  El establecimiento de una conexi&oacute;n mediante el protocolo TCP, b&aacute;sicamente se realiza de la siguiente manera:";
 choices[46]= new Array();
 choices[46][0] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a SYN+ACK. Emisor: env&iacute;a ACK.";
 choices[46][1] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a ACK+SYN. Emisor: env&iacute;a SYN.";
 choices[46][2] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a ACK.";
 choices[46][3] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a SYN.";
 answers[46] = choices[46][0];
 units[46] = "109";
 comments[46] = "Id Pregunta: 615. Junta de Extremadura A1 2015";


//  Id pregunta: 846 Año de creación de pregunta: 2016
 questions[47]= "48)  Se&ntilde;ale la respuesta correcta:";
 choices[47]= new Array();
 choices[47][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[47][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[47][2] = "A y B son correctas.";
 choices[47][3] = "A y B son falsas.";
 answers[47] = choices[47][2];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 846. Ley 40/2015";


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[48]= "49)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[48]= new Array();
 choices[48][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[48][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[48][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[48][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[48] = choices[48][0];
 units[48] = "62";
 comments[48] = "Id Pregunta: 12. AGE A1 2015";


//  Id pregunta: 303 Año de creación de pregunta: 2016
 questions[49]= "50)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[49]= new Array();
 choices[49][0] = "Veinticinco.";
 choices[49][1] = "Veintisiete.";
 choices[49][2] = "Veintinueve.";
 choices[49][3] = "Cuarenta y uno.";
 answers[49] = choices[49][1];
 units[49] = "5";
 comments[49] = "Id Pregunta: 303. UNION EUROPEA";


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[50]= new Array();
 choices[50][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[50][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[50][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[50][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[50] = choices[50][0];
 units[50] = "19";
 comments[50] = "Id Pregunta: 587. Estrategia TIC";


//  Id pregunta: 393 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[51]= new Array();
 choices[51][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[51][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[51][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[51][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[51] = choices[51][0];
 units[51] = "14";
 comments[51] = "Id Pregunta: 393. POLITICAS DE IGUALDAD";


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[52]= "53)  El Colegio de Comisarios se re&uacute;ne:";
 choices[52]= new Array();
 choices[52][0] = "Una vez por semana.";
 choices[52][1] = "Una vez al mes.";
 choices[52][2] = "Dos veces en semana.";
 choices[52][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[52] = choices[52][0];
 units[52] = "5";
 comments[52] = "Id Pregunta: 315. UNION EUROPEA";


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[53]= new Array();
 choices[53][0] = "ISO/IEC 31000";
 choices[53][1] = "ISO/IEC 14000";
 choices[53][2] = "ISO/IEC 38500";
 choices[53][3] = "ISO/IEC 18000";
 answers[53] = choices[53][2];
 units[53] = "26";
 comments[53] = "Id Pregunta: 543. Gobernanza TIC";


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[54]= "55)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[54]= new Array();
 choices[54][0] = "los Secretarios generales t&eacute;cnicos";
 choices[54][1] = "los Directores generales";
 choices[54][2] = "los Secretarios generales";
 choices[54][3] = "los Subsecretarios";
 answers[54] = choices[54][1];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 805. Ley 40/2015";


//  Id pregunta: 289 Año de creación de pregunta: 2016
 questions[55]= "56)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[55]= new Array();
 choices[55][0] = "Tres a&ntilde;os.";
 choices[55][1] = "Dos a&ntilde;os y medio.";
 choices[55][2] = "Cinco a&ntilde;os.";
 choices[55][3] = "Seis a&ntilde;os.";
 answers[55] = choices[55][2];
 units[55] = "5";
 comments[55] = "Id Pregunta: 289. UNION EUROPEA";


//  Id pregunta: 372 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[56]= new Array();
 choices[56][0] = "El Parlamento y el Consejo.";
 choices[56][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[56][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[56][3] = "La Comisi&oacute;n y el Consejo.";
 answers[56] = choices[56][2];
 units[56] = "5";
 comments[56] = "Id Pregunta: 372. UNION EUROPEA";


//  Id pregunta: 405 Año de creación de pregunta: 2016
 questions[57]= "58)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[57]= new Array();
 choices[57][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[57][1] = "Directiva 2004/113/CE del Consejo.";
 choices[57][2] = "Todas son correctas.";
 choices[57][3] = "Todas son falsas.";
 answers[57] = choices[57][2];
 units[57] = "14";
 comments[57] = "Id Pregunta: 405. POLITICAS DE IGUALDAD";


//  Id pregunta: 233 Año de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[58]= new Array();
 choices[58][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[58][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[58][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[58][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[58] = choices[58][2];
 units[58] = "1";
 comments[58] = "Id Pregunta: 233. CONSTITUCION1978";


//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[59]= "60)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[59]= new Array();
 choices[59][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[59][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[59][2] = "Veintisiete Jueces y ocho Abogados Generales.";
 choices[59][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[59] = choices[59][2];
 units[59] = "5";
 comments[59] = "Id Pregunta: 354. UNION EUROPEA";


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[60]= new Array();
 choices[60][0] = "verbalmente";
 choices[60][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[60][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[60][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[60] = choices[60][2];
 units[60] = "7";
 comments[60] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[61]= new Array();
 choices[61][0] = "10 d&iacute;as.";
 choices[61][1] = "15 d&iacute;as.";
 choices[61][2] = "1 mes.";
 choices[61][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[61] = choices[61][0];
 units[61] = "7";
 comments[61] = "Id Pregunta: 666. Art&iacute;culo 73 de la Ley 39/2015";


//  Id pregunta: 281 Año de creación de pregunta: 2016
 questions[62]= "63)  Se&ntilde;ale la respuesta falsa:";
 choices[62]= new Array();
 choices[62][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[62][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[62][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[62][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[62] = choices[62][3];
 units[62] = "5";
 comments[62] = "Id Pregunta: 281. UNION EUROPEA";


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[63]= "64)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[63]= new Array();
 choices[63][0] = "La Comisi&oacute;n.";
 choices[63][1] = "El Consejo de Europa.";
 choices[63][2] = "El Consejo Europeo.";
 choices[63][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[63] = choices[63][3];
 units[63] = "5";
 comments[63] = "Id Pregunta: 300. UNION EUROPEA";


//  Id pregunta: 730 Año de creación de pregunta: 2016
 questions[64]= "65)  Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban:";
 choices[64]= new Array();
 choices[64][0] = "Se definen iteraciones";
 choices[64][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[64][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[64][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[64] = choices[64][1];
 units[64] = "34, 84";
 comments[64] = "Id Pregunta: 730. Metodologias &aacute;giles";


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[65]= "66)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[65]= new Array();
 choices[65][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[65][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[65][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[65][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[65] = choices[65][0];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 784. Ley 40/2015";


//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[66]= "67)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[66]= new Array();
 choices[66][0] = "Ejecutivo";
 choices[66][1] = "Limitativo";
 choices[66][2] = "Estimativo";
 choices[66][3] = "Progresivo";
 answers[66] = choices[66][1];
 units[66] = "10";
 comments[66] = "Id Pregunta: 447. PRESUPUESTOS GENERALES";


//  Id pregunta: 132 Año de creación de pregunta: 2016
 questions[67]= "68)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[67]= new Array();
 choices[67][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[67][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[67][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[67][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[67] = choices[67][3];
 units[67] = "12";
 comments[67] = "Id Pregunta: 132. Leyes modelo econ&oacute;mico";


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[68]= "69)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[68]= new Array();
 choices[68][0] = "El Presidente del Consejo Europeo.";
 choices[68][1] = "La Comisi&oacute;n.";
 choices[68][2] = "El Consejo.";
 choices[68][3] = "El Parlamento Europeo.";
 answers[68] = choices[68][2];
 units[68] = "5";
 comments[68] = "Id Pregunta: 328. UNION EUROPEA";


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[69]= new Array();
 choices[69][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[69][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[69][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[69][3] = "El pago de subsidios a parados";
 answers[69] = choices[69][3];
 units[69] = "15";
 comments[69] = "Id Pregunta: 116. ";


//  Id pregunta: 697 Año de creación de pregunta: 2016
 questions[70]= "71)  Cu&aacute;l de las siguientes afirmaciones relativas a Apache Jenkins es falsa";
 choices[70]= new Array();
 choices[70][0] = "Est&aacute; desarrollado en Java.";
 choices[70][1] = "Fue un proyecto escindido de Hudson tras una disputa con Oracle.";
 choices[70][2] = "Se considera software libre bajo la licencia EUPL.";
 choices[70][3] = "Todas las afirmaciones son correctas.";
 answers[70] = choices[70][2];
 units[70] = "92";
 comments[70] = "Id Pregunta: 697. INTEGRACION CONTINUA";


//  Id pregunta: 296 Año de creación de pregunta: 2016
 questions[71]= "72)  Indique a qui&eacute;n corresponde la funci&oacute;n de adoptar las iniciativas de la programaci&oacute;n anual y plurianual de la Uni&oacute;n Europea con el fin de alcanzar acuerdos interinstitucionales:";
 choices[71]= new Array();
 choices[71][0] = "Al Consejo Europeo.";
 choices[71][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[71][2] = "A la Comisi&oacute;n Europea.";
 choices[71][3] = "Al Parlamento Europeo.";
 answers[71] = choices[71][2];
 units[71] = "5";
 comments[71] = "Id Pregunta: 296. UNION EUROPEA";


//  Id pregunta: 292 Año de creación de pregunta: 2016
 questions[72]= "73)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[72]= new Array();
 choices[72][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[72][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[72][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[72][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[72] = choices[72][1];
 units[72] = "5";
 comments[72] = "Id Pregunta: 292. UNION EUROPEA";


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[73]= "74)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[73]= new Array();
 choices[73][0] = "Estrasburgo.";
 choices[73][1] = "Bruselas.";
 choices[73][2] = "Luxemburgo.";
 choices[73][3] = "Holanda.";
 answers[73] = choices[73][0];
 units[73] = "5";
 comments[73] = "Id Pregunta: 293. UNION EUROPEA";


//  Id pregunta: 189 Año de creación de pregunta: 2016
 questions[74]= "75)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:";
 choices[74]= new Array();
 choices[74][0] = "Ley Org&aacute;nica.";
 choices[74][1] = "Ley de Bases.";
 choices[74][2] = "Ley ordinaria.";
 choices[74][3] = "Mandato.";
 answers[74] = choices[74][1];
 units[74] = "1";
 comments[74] = "Id Pregunta: 189. CONSTITUCION1978";


