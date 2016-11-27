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

//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[0]= "1)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[0]= new Array();
 choices[0][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[0][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[0][2] = "El Presidente del Gobierno";
 choices[0][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[0] = choices[0][1];
 units[0] = "26";
 comments[0] = "Id Pregunta: 549. Gobernanza TIC";


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[1]= "2)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[1]= new Array();
 choices[1][0] = "SMB3";
 choices[1][1] = "AFP";
 choices[1][2] = "NFS";
 choices[1][3] = "FTP";
 answers[1] = choices[1][0];
 units[1] = "59";
 comments[1] = "Id Pregunta: 30. AGE A1 2015";


//  Id pregunta: 663 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[2]= new Array();
 choices[2][0] = "De oficio.";
 choices[2][1] = "A solicitud del interesado.";
 choices[2][2] = "De oficio o a solicitud del interesado.";
 choices[2][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[2] = choices[2][2];
 units[2] = "7";
 comments[2] = "Id Pregunta: 663. Art&iacute;culo 54 de la Ley 39/2015";


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Qu&eacute; es el machine learning?";
 choices[3]= new Array();
 choices[3][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[3][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[3][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[3][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[3] = choices[3][0];
 units[3] = "73";
 comments[3] = "Id Pregunta: 657. ";


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[4]= "5)  En cuanto al an&aacute;lisis DAFO:";
 choices[4]= new Array();
 choices[4][0] = "Considera detallada y exclusivamente factores internos.";
 choices[4][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[4][2] = "Considera detallada y exclusivamente factores externos.";
 choices[4][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[4] = choices[4][1];
 units[4] = "83";
 comments[4] = "Id Pregunta: 41. AGE A1 2015";


//  Id pregunta: 302 Año de creación de pregunta: 2016
 questions[5]= "6)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[5]= new Array();
 choices[5][0] = "Cinco a&ntilde;os.";
 choices[5][1] = "Cuatro a&ntilde;os.";
 choices[5][2] = "Tres a&ntilde;os.";
 choices[5][3] = "Seis meses.";
 answers[5] = choices[5][2];
 units[5] = "5";
 comments[5] = "Id Pregunta: 302. UNION EUROPEA";


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[6]= "7)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[6]= new Array();
 choices[6][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[6][1] = "Protecci&oacute;n de su salud.";
 choices[6][2] = "Ninguna es correcta.";
 choices[6][3] = "A y B son correctas.";
 answers[6] = choices[6][1];
 units[6] = "14";
 comments[6] = "Id Pregunta: 430. POLITICAS DE IGUALDAD";


//  Id pregunta: 274 Año de creación de pregunta: 2016
 questions[7]= "8)  La Ley 19/2013 de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno ha establecido el derecho:";
 choices[7]= new Array();
 choices[7][0] = "Al acceso a la informaci&oacute;n p&uacute;blica, en desarrollo de los t&eacute;rminos ya previstos por la Ley 11/2007, de acceso electr&oacute;nico de los ciudadano a los servicios p&uacute;blicos.";
 choices[7][1] = "Al acceso a la informaci&oacute;n p&uacute;blica, por primera vez en nuestra legislaci&oacute;n positiva.";
 choices[7][2] = "Al acceso a la informaci&oacute;n p&uacute;blica a trav&eacute;s del portal de transparencia.";
 choices[7][3] = "Al acceso a la informaci&oacute;n p&uacute;blica, con las limitaciones derivadas del posible perjuicio para la defensa, seguridad nacional o funciones administrativas de inspecci&oacute;n, entre otras.";
 answers[7] = choices[7][3];
 units[7] = "22";
 comments[7] = "Id Pregunta: 274. LEY DE TRANSPARENCIA";


//  Id pregunta: 718 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Qui&eacute;n es el responsable de transladar la metodolog&iacute;a lean al software?";
 choices[8]= new Array();
 choices[8][0] = "Eric Ries";
 choices[8][1] = "Steve Blank";
 choices[8][2] = "Tom Poppendieck";
 choices[8][3] = "Alexander Osterwalder";
 answers[8] = choices[8][2];
 units[8] = "34";
 comments[8] = "Id Pregunta: 718. Metodologias Lean";


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[9]= "10)  Son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[9]= new Array();
 choices[9][0] = "Tranparencia, innovaci&oacute;n, Unidad y visi&oacute;n integral y Orientaci&oacute;n al usuario del servicio";
 choices[9][1] = "Tranparencia, Colaboraci&oacute;n y alianzas, Orientaci&oacute;n al usuario del servicio y Reutilizaci&oacute;n";
 choices[9][2] = "Reutilizaci&oacute;n, Seguridad, Orientaci&oacute;n al usuario del servicio y Transparencia";
 choices[9][3] = "Ninguna de las anteriores";
 answers[9] = choices[9][0];
 units[9] = "28";
 comments[9] = "Id Pregunta: 735. Estrategia TIC";


//  Id pregunta: 756 Año de creación de pregunta: 2016
 questions[10]= "11)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[10]= new Array();
 choices[10][0] = "las previsiones de la presente Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[10][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la presente Ley";
 choices[10][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[10][3] = "exclusivamente por las previsiones de la presente Ley";
 answers[10] = choices[10][1];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 756. Ley 40/2015";


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[11]= "12)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[11]= new Array();
 choices[11][0] = "Decretos Legislativos.";
 choices[11][1] = "Decretos-leyes.";
 choices[11][2] = "Leyes de bases.";
 choices[11][3] = "Reales Decretos del Consejo de Ministros.";
 answers[11] = choices[11][0];
 units[11] = "1";
 comments[11] = "Id Pregunta: 204. CONSTITUCION1978";


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[12]= "13)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[12]= new Array();
 choices[12][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[12][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[12][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[12][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[12] = choices[12][2];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 772. Ley 40/2015";


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[13]= "14)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[13]= new Array();
 choices[13][0] = "A los ministros.";
 choices[13][1] = "Las respuestas a) y b) son correctas.";
 choices[13][2] = "Las respuestas a) y b) no son correctas.";
 choices[13][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[13] = choices[13][1];
 units[13] = "10";
 comments[13] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[14]= new Array();
 choices[14][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[14][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[14][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[14][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[14] = choices[14][3];
 units[14] = "78";
 comments[14] = "Id Pregunta: 47. AGE A1 2015";


//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[15]= new Array();
 choices[15][0] = "Art&iacute;culo 14 CE.";
 choices[15][1] = "Art&iacute;culo 9.2 CE.";
 choices[15][2] = "Art&iacute;culo 9.1 CE.";
 choices[15][3] = "Art&iacute;culo 13 CE.";
 answers[15] = choices[15][2];
 units[15] = "14";
 comments[15] = "Id Pregunta: 407. POLITICAS DE IGUALDAD";


//  Id pregunta: 662 Año de creación de pregunta: 2016
 questions[16]= "17)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[16]= new Array();
 choices[16][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[16][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[16][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[16][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que hayan sido elaborado por &eacute;ste.";
 answers[16] = choices[16][1];
 units[16] = "7";
 comments[16] = "Id Pregunta: 662. Art&iacute;culo 53 de la Ley 39/2015";


//  Id pregunta: 607 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[17]= new Array();
 choices[17][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[17][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[17][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[17][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[17] = choices[17][0];
 units[17] = "45";
 comments[17] = "Id Pregunta: 607. Junta de Extremadura A1 2015";


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[18]= new Array();
 choices[18][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[18][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[18][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[18][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[18] = choices[18][2];
 units[18] = "22";
 comments[18] = "Id Pregunta: 129. ";


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[19]= "20)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[19]= new Array();
 choices[19][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[19][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[19][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[19][3] = "todas son correctas";
 answers[19] = choices[19][3];
 units[19] = "7";
 comments[19] = "Id Pregunta: 540. LEY 39/2015";


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale la respuesta correcta:";
 choices[20]= new Array();
 choices[20][0] = "corresponde a los &oacute;rganos superiores establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[20][1] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[20][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[20][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[20] = choices[20][0];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 785. Ley 40/2015";


//  Id pregunta: 609 Año de creación de pregunta: 2016
 questions[21]= "22)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[21]= new Array();
 choices[21][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[21][1] = "Clasificaci&oacute;n por cuenta.";
 choices[21][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[21][3] = "Clasificaci&oacute;n por intercambio.";
 answers[21] = choices[21][3];
 units[21] = "56";
 comments[21] = "Id Pregunta: 609. Junta de Extremadura A1 2015";


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[22]= new Array();
 choices[22][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[22][1] = "Solamente el Congreso.";
 choices[22][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[22][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[22] = choices[22][0];
 units[22] = "1";
 comments[22] = "Id Pregunta: 176. CONSTITUCION1978";


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[23]= "24)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[23]= new Array();
 choices[23][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[23][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[23][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[23][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[23] = choices[23][3];
 units[23] = "7";
 comments[23] = "Id Pregunta: 27. AGE A1 2015";


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[24]= "25)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[24]= new Array();
 choices[24][0] = "El Ministerio de Hacienda.";
 choices[24][1] = "El Ministerio de Econom&iacute;a.";
 choices[24][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[24][3] = "Ninguna de las respuestas es correcta.";
 answers[24] = choices[24][2];
 units[24] = "10";
 comments[24] = "Id Pregunta: 468. PRESUPUESTOS GENERALES";


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[25]= new Array();
 choices[25][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[25][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[25][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[25][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[25] = choices[25][1];
 units[25] = "19";
 comments[25] = "Id Pregunta: 560. Agenda Digital";


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[26]= "27)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[26]= new Array();
 choices[26][0] = "La Ley General Tributaria.";
 choices[26][1] = "La Ley Presupuestaria.";
 choices[26][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[26][3] = "Ninguna de las respuestas es correcta.";
 answers[26] = choices[26][0];
 units[26] = "10";
 comments[26] = "Id Pregunta: 486. PRESUPUESTOS GENERALES";


//  Id pregunta: 715 Año de creación de pregunta: 2016
 questions[27]= "28)  Respecto a SonarQube, se&ntilde;ale la FALSA:";
 choices[27]= new Array();
 choices[27][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[27][1] = "Anteriormente se denominaba Sonar.";
 choices[27][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[27][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[27] = choices[27][2];
 units[27] = "92";
 comments[27] = "Id Pregunta: 715. INTEGRACION CONTINUA";


//  Id pregunta: 446 Año de creación de pregunta: 2016
 questions[28]= "29)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[28]= new Array();
 choices[28][0] = "Ejecutivo";
 choices[28][1] = "Limitativo";
 choices[28][2] = "Estimativo";
 choices[28][3] = "Progresivo";
 answers[28] = choices[28][2];
 units[28] = "10";
 comments[28] = "Id Pregunta: 446. PRESUPUESTOS GENERALES";


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[29]= "30)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[29]= new Array();
 choices[29][0] = "Al Gobierno.";
 choices[29][1] = "A las Cortes Generales.";
 choices[29][2] = "Al Poder Judicial.";
 choices[29][3] = "Al Congreso de los Diputados.";
 answers[29] = choices[29][0];
 units[29] = "1";
 comments[29] = "Id Pregunta: 195. CONSTITUCION1978";


//  Id pregunta: 776 Año de creación de pregunta: 2016
 questions[30]= "31)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[30]= new Array();
 choices[30][0] = "los Subsecretarios y los Secretarios generales";
 choices[30][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[30][2] = "los Secretarios de Estado y los Directores generales";
 choices[30][3] = "los Ministros y los Secretarios de Estado";
 answers[30] = choices[30][3];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 776. Ley 40/2015";


//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[31]= new Array();
 choices[31][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[31][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[31][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[31][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[31] = choices[31][1];
 units[31] = "18, 20";
 comments[31] = "Id Pregunta: 743. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[32]= "33)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[32]= new Array();
 choices[32][0] = "Un d&iacute;a";
 choices[32][1] = "Dos d&iacute;as";
 choices[32][2] = "Tres d&iacute;as";
 choices[32][3] = "Cuatro d&iacute;as";
 answers[32] = choices[32][3];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 819. Ley 40/2015";


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[33]= "34)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[33]= new Array();
 choices[33][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[33][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[33][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[33][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[33] = choices[33][2];
 units[33] = "47";
 comments[33] = "Id Pregunta: 77. AGE A1 2015";


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[34]= "35)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[34]= new Array();
 choices[34][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[34][1] = "el C&oacute;digo Civil";
 choices[34][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[34][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[34] = choices[34][0];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 764. Ley 40/2015";


//  Id pregunta: 697 Año de creación de pregunta: 2016
 questions[35]= "36)  Cu&aacute;l de las siguientes afirmaciones relativas a Apache Jenkins es falsa";
 choices[35]= new Array();
 choices[35][0] = "Est&aacute; desarrollado en Java.";
 choices[35][1] = "Fue un proyecto escindido de Hudson tras una disputa con Oracle.";
 choices[35][2] = "Se considera software libre bajo la licencia EUPL.";
 choices[35][3] = "Todas las afirmaciones son correctas.";
 answers[35] = choices[35][2];
 units[35] = "92";
 comments[35] = "Id Pregunta: 697. INTEGRACION CONTINUA";


//  Id pregunta: 552 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[36]= new Array();
 choices[36][0] = "Establecer redes de telecomunicaciones continentales";
 choices[36][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[36][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[36][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[36] = choices[36][0];
 units[36] = "17";
 comments[36] = "Id Pregunta: 552. Mercado &Uacute;nico Digital";


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[37]= "38)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[37]= new Array();
 choices[37][0] = "El derecho a un permiso.";
 choices[37][1] = "Una prestaci&oacute;n por paternidad.";
 choices[37][2] = "Ambas son correctas.";
 choices[37][3] = "18 d&iacute;as de permiso.";
 answers[37] = choices[37][2];
 units[37] = "14";
 comments[37] = "Id Pregunta: 423. POLITICAS DE IGUALDAD";


//  Id pregunta: 684 Año de creación de pregunta: 2016
 questions[38]= "39)  Indique los niveles de seguridad que contempla el Reglamento (UE) 910/2014 para los sistemas de identificaci&oacute;n electr&oacute;nica";
 choices[38]= new Array();
 choices[38][0] = "B&aacute;sico, medio y alto";
 choices[38][1] = "D&eacute;bil y fuerte";
 choices[38][2] = "Bajo, medio y alto";
 choices[38][3] = "Bajo, sustancial y alto";
 answers[38] = choices[38][3];
 units[38] = "77";
 comments[38] = "Id Pregunta: 684. Art&iacute;culo 8 del Reglamento 910/2014";


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[39]= "40)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[39]= new Array();
 choices[39][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[39][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[39][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[39][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[39] = choices[39][1];
 units[39] = "7";
 comments[39] = "Id Pregunta: 533. LEY 39/2015";


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[40]= "41)  Los Directores generales ser&aacute;n nombrados y separados por:";
 choices[40]= new Array();
 choices[40][0] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[40][1] = "Ley de las Cortes Generales, a propuesta del titular del Departamento";
 choices[40][2] = "Ley de las Cortes Generales, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[40][3] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento";
 answers[40] = choices[40][0];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 797. Ley 40/2015";


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[41]= "42)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[41]= new Array();
 choices[41][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[41][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[41][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[41][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[41] = choices[41][2];
 units[41] = "1";
 comments[41] = "Id Pregunta: 177. CONSTITUCION1978";


//  Id pregunta: 537 Año de creación de pregunta: 2016
 questions[42]= "43)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[42]= new Array();
 choices[42][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[42][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[42][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[42][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[42] = choices[42][1];
 units[42] = "7";
 comments[42] = "Id Pregunta: 537. LEY 39/2015";


//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[43]= "44)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[43]= new Array();
 choices[43][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[43][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[43][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[43][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[43] = choices[43][2];
 units[43] = "43";
 comments[43] = "Id Pregunta: 436. SERVICIOS COMUNES";


//  Id pregunta: 206 Año de creación de pregunta: 2016
 questions[44]= "45)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[44]= new Array();
 choices[44][0] = "El Gobierno.";
 choices[44][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[44][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[44][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[44] = choices[44][2];
 units[44] = "1";
 comments[44] = "Id Pregunta: 206. CONSTITUCION1978";


//  Id pregunta: 433 Año de creación de pregunta: 2016
 questions[45]= "46)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[45]= new Array();
 choices[45][0] = "Unidad de igualdad.";
 choices[45][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[45][2] = "Ninguna de las anteriores.";
 choices[45][3] = "A y B son correctas.";
 answers[45] = choices[45][1];
 units[45] = "14";
 comments[45] = "Id Pregunta: 433. POLITICAS DE IGUALDAD";


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[46]= "47)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[46]= new Array();
 choices[46][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[46][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[46][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[46][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[46] = choices[46][2];
 units[46] = "4, 7, 8, 9";
 comments[46] = "Id Pregunta: 758. Ley 40/2015";


//  Id pregunta: 374 Año de creación de pregunta: 2016
 questions[47]= "48)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[47]= new Array();
 choices[47][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[47][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[47][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[47][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[47] = choices[47][3];
 units[47] = "5";
 comments[47] = "Id Pregunta: 374. UNION EUROPEA";


//  Id pregunta: 711 Año de creación de pregunta: 2016
 questions[48]= "49)  En relaci&oacute;n al Portal de Transparencia de la AGE:";
 choices[48]= new Array();
 choices[48][0] = "La informaci&oacute;n m&aacute;s relevante para el ciudadano y de frecuente acceso estar&aacute; disponible en el Portal de Transparencia, no pudiendo accederse a informaci&oacute;n que no se encuentre ya publicada.";
 choices[48][1] = "El ejercicio del Derecho de Acceso abre con la administraci&oacute;n un procedimiento administrativo que exige la identificaci&oacute;n del solicitante.";
 choices[48][2] = "En el Portal de Transparencia de la AGE s&oacute;lo se puede acceder a informaci&oacute;n de tipo institucional.";
 choices[48][3] = "El CTBG es el responsable del Portal de Transparencia.";
 answers[48] = choices[48][1];
 units[48] = "22";
 comments[48] = "Id Pregunta: 711. Portal de Transparencia";


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[49]= "50)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[49]= new Array();
 choices[49][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[49][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[49][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[49][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[49] = choices[49][3];
 units[49] = "5";
 comments[49] = "Id Pregunta: 317. UNION EUROPEA";


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[50]= new Array();
 choices[50][0] = "SPARQL";
 choices[50][1] = "UnQL";
 choices[50][2] = "XQUERY";
 choices[50][3] = "RQL";
 answers[50] = choices[50][0];
 units[50] = "74";
 comments[50] = "Id Pregunta: 23. AGE A1 2015";


//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[51]= "52)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[51]= new Array();
 choices[51][0] = "Seis a&ntilde;os.";
 choices[51][1] = "Cinco a&ntilde;os.";
 choices[51][2] = "Cuatro a&ntilde;os.";
 choices[51][3] = "Ocho a&ntilde;os.";
 answers[51] = choices[51][1];
 units[51] = "5";
 comments[51] = "Id Pregunta: 307. UNION EUROPEA";


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[52]= "53)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[52]= new Array();
 choices[52][0] = "un &oacute;rgano superior";
 choices[52][1] = "un &oacute;rgano directivo";
 choices[52][2] = "un &oacute;rgano superior o directivo";
 choices[52][3] = "ninguna es correcta";
 answers[52] = choices[52][2];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 783. Ley 40/2015";


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[53]= "54)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[53]= new Array();
 choices[53][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[53][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo;";
 choices[53][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[53][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea.";
 answers[53] = choices[53][0];
 units[53] = "34, 84";
 comments[53] = "Id Pregunta: 725. Metodologias &aacute;giles";


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Qu&eacute; propiedades ofrecen las conexiones VPN que usan protocolos como PPTP, L2TP/IPsec y SSTP?";
 choices[54]= new Array();
 choices[54][0] = "Encapsulaci&oacute;n y autenticaci&oacute;n.";
 choices[54][1] = "Encapsulaci&oacute;n y cifrado de datos.";
 choices[54][2] = "Autenticaci&oacute;n y cifrado de datos.";
 choices[54][3] = "Encapsulaci&oacute;n, autenticaci&oacute;n y cifrado de datos.";
 answers[54] = choices[54][3];
 units[54] = "120";
 comments[54] = "Id Pregunta: 651. Junta de Extremadura A1 2015";


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[55]= "56)  Se&ntilde;ala la correcta:";
 choices[55]= new Array();
 choices[55][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[55][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[55][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[55][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[55] = choices[55][1];
 units[55] = "7";
 comments[55] = "Id Pregunta: 541. LEY 39/2015";


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[56]= new Array();
 choices[56][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[56][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[56][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[56][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[56] = choices[56][1];
 units[56] = "12";
 comments[56] = "Id Pregunta: 133. Leyes modelo econ&oacute;mico";


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[57]= "58)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[57]= new Array();
 choices[57][0] = "Estrasburgo.";
 choices[57][1] = "Bruselas.";
 choices[57][2] = "Luxemburgo.";
 choices[57][3] = "Holanda.";
 answers[57] = choices[57][2];
 units[57] = "5";
 comments[57] = "Id Pregunta: 295. UNION EUROPEA";


//  Id pregunta: 808 Año de creación de pregunta: 2016
 questions[58]= "59)  Respecto a los servicios territoriales es correcto:";
 choices[58]= new Array();
 choices[58][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[58][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[58][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[58][3] = "ninguna es correcta";
 answers[58] = choices[58][0];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 808. Ley 40/2015";


//  Id pregunta: 297 Año de creación de pregunta: 2016
 questions[59]= "60)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[59]= new Array();
 choices[59][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[59][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[59][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[59][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[59] = choices[59][1];
 units[59] = "5";
 comments[59] = "Id Pregunta: 297. UNION EUROPEA";


//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[60]= "61)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[60]= new Array();
 choices[60][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[60][1] = "el Consejo de Estado";
 choices[60][2] = "el Congreso";
 choices[60][3] = "las Cortes Generales";
 answers[60] = choices[60][0];
 units[60] = "4, 7, 8, 9";
 comments[60] = "Id Pregunta: 773. Ley 40/2015";


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[61]= new Array();
 choices[61][0] = "JUnit, Artifactory y SonarQube";
 choices[61][1] = "JUnit, Artifactory y Selenium";
 choices[61][2] = "JUnit, SonarQube y Selenium";
 choices[61][3] = "ArtiFactory, SonarQube y Selenium";
 answers[61] = choices[61][2];
 units[61] = "92";
 comments[61] = "Id Pregunta: 91. AGE A1 2015";


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[62]= "63)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[62]= new Array();
 choices[62][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[62][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[62][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[62][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[62] = choices[62][1];
 units[62] = "22";
 comments[62] = "Id Pregunta: 278. LEY DE TRANSPARENCIA";


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[63]= "64)  Se&ntilde;ale la que NO corresponde a una herramienta de automatizaci&oacute;n de pruebas:";
 choices[63]= new Array();
 choices[63][0] = "Selenium";
 choices[63][1] = "JUnit";
 choices[63][2] = "Jenkins";
 choices[63][3] = "JMeter";
 answers[63] = choices[63][2];
 units[63] = "92";
 comments[63] = "Id Pregunta: 701. INTEGRACION CONTINUA";


//  Id pregunta: 14 Año de creación de pregunta: 2016
 questions[64]= "65)  Se&ntilde;ale la respuesta correcta:";
 choices[64]= new Array();
 choices[64][0] = "La norma ISO 9004 est&aacute; compuesta por las normas ISO 9000:2005, ISO 9002:2008 e ISO 9004:2009.";
 choices[64][1] = "La norma ISO 9004:2009 se refiere a la gesti&oacute;n para el &eacute;xito sostenido de una organizaci&oacute;n, con un enfoque de gesti&oacute;n de la calidad.";
 choices[64][2] = "La norma ISO 9004:2009 se refiere a los principios y vocabulario de los sistemas de gesti&oacute;n de calidad.";
 choices[64][3] = "La norma ISO 9002:2008 se refiere a los requisitos de los sistemas de gesti&oacute;n de calidad.";
 answers[64] = choices[64][1];
 units[64] = "98";
 comments[64] = "Id Pregunta: 14. AGE A1 2015";


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[65]= "66)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[65]= new Array();
 choices[65][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[65][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[65][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[65][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[65] = choices[65][1];
 units[65] = "5";
 comments[65] = "Id Pregunta: 298. UNION EUROPEA";


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[66]= new Array();
 choices[66][0] = "117.5";
 choices[66][1] = "117.1";
 choices[66][2] = "116";
 choices[66][3] = "15";
 answers[66] = choices[66][0];
 units[66] = "1";
 comments[66] = "Id Pregunta: 260. CONSTITUCION1978";


//  Id pregunta: 127 Año de creación de pregunta: 2016
 questions[67]= "68)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[67]= new Array();
 choices[67][0] = "Tiene car&aacute;cter facultativo.";
 choices[67][1] = "Tiene car&aacute;cter potestativo. ";
 choices[67][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[67][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[67] = choices[67][1];
 units[67] = "22";
 comments[67] = "Id Pregunta: 127. ";


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[68]= "69)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[68]= new Array();
 choices[68][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[68][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[68][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[68][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[68] = choices[68][0];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 821. Ley 40/2015";


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[69]= "70)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[69]= new Array();
 choices[69][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[69][1] = "La libertad sexual y religiosa.";
 choices[69][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[69][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[69] = choices[69][3];
 units[69] = "1";
 comments[69] = "Id Pregunta: 254. CONSTITUCION1978";


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[70]= new Array();
 choices[70][0] = "ISO/IEC 31000";
 choices[70][1] = "ISO/IEC 14000";
 choices[70][2] = "ISO/IEC 38500";
 choices[70][3] = "ISO/IEC 18000";
 answers[70] = choices[70][2];
 units[70] = "26";
 comments[70] = "Id Pregunta: 543. Gobernanza TIC";


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[71]= "72)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[71]= new Array();
 choices[71][0] = "Principio de transparencia.";
 choices[71][1] = "Principio de cooperaci&oacute;n.";
 choices[71][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[71][3] = "Principio de lealtad institucional.";
 answers[71] = choices[71][1];
 units[71] = "10";
 comments[71] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";


//  Id pregunta: 795 Año de creación de pregunta: 2016
 questions[72]= "73)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[72]= new Array();
 choices[72][0] = "los Secretarios generales t&eacute;cnicos";
 choices[72][1] = "los Directores generales";
 choices[72][2] = "los Secretarios generales";
 choices[72][3] = "los Subsecretarios";
 answers[72] = choices[72][1];
 units[72] = "4, 7, 8, 9";
 comments[72] = "Id Pregunta: 795. Ley 40/2015";


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[73]= "74)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[73]= new Array();
 choices[73][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[73][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[73][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[73][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[73] = choices[73][2];
 units[73] = "10";
 comments[73] = "Id Pregunta: 477. PRESUPUESTOS GENERALES";


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[74]= "75)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[74]= new Array();
 choices[74][0] = "El Parlamento Europeo.";
 choices[74][1] = "Todas las respuestas son correctas.";
 choices[74][2] = "La Comisi&oacute;n Europea.";
 choices[74][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[74] = choices[74][1];
 units[74] = "5";
 comments[74] = "Id Pregunta: 353. UNION EUROPEA";


