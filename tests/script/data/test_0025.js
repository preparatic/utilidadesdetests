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

//  Id pregunta: 10636 Año de creación de pregunta: 2016
 questions[0]= "1)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[0]= new Array();
 choices[0][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[0][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[0][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[0][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[0] = choices[0][2];
 units[0] = "57";
 comments[0] = "Id Pregunta: 10636. Junta de Extremadura A1 2015";


//  Id pregunta: 10238 Año de creación de pregunta: 2016
 questions[1]= "2)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[1]= new Array();
 choices[1][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[1][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[1][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[1][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[1] = choices[1][1];
 units[1] = "1";
 comments[1] = "Id Pregunta: 10238. CONSTITUCION1978";


//  Id pregunta: 10050 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas del DNI electr&oacute;nico es exclusiva del DNIe 3.0?";
 choices[2]= new Array();
 choices[2][0] = "Cumple la norma ISO 7816 para tarjetas inteligentes.";
 choices[2][1] = "Emplea la tecnolog&iacute;a inal&aacute;mbrica NFC.";
 choices[2][2] = "Contiene certificados de componente, autenticaci&oacute;n y firma.";
 choices[2][3] = "Sus certificados cumplen la norma X509 v3.";
 answers[2] = choices[2][1];
 units[2] = "78";
 comments[2] = "Id Pregunta: 10050. AGE A1 2015";


//  Id pregunta: 10320 Año de creación de pregunta: 2016
 questions[3]= "4)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[3]= new Array();
 choices[3][0] = "Al Consejo Europeo.";
 choices[3][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[3][2] = "A la Comisi&oacute;n Europea.";
 choices[3][3] = "Al Parlamento Europeo.";
 answers[3] = choices[3][2];
 units[3] = "5";
 comments[3] = "Id Pregunta: 10320. UNION EUROPEA";


//  Id pregunta: 10033 Año de creación de pregunta: 2016
 questions[4]= "5)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[4]= new Array();
 choices[4][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[4][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[4][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[4][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[4] = choices[4][1];
 units[4] = "63";
 comments[4] = "Id Pregunta: 10033. AGE A1 2015";


//  Id pregunta: 10256 Año de creación de pregunta: 2016
 questions[5]= "6)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[5]= new Array();
 choices[5][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[5][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[5][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[5][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[5] = choices[5][0];
 units[5] = "1";
 comments[5] = "Id Pregunta: 10256. CONSTITUCION1978";


//  Id pregunta: 10221 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[6]= new Array();
 choices[6][0] = "De los derechos y deberes fundamentales.";
 choices[6][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[6][2] = "Derechos y libertades.";
 choices[6][3] = "De la Corona.";
 answers[6] = choices[6][0];
 units[6] = "1";
 comments[6] = "Id Pregunta: 10221. CONSTITUCION1978";


//  Id pregunta: 10162 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[7]= new Array();
 choices[7][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[7][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[7][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[7][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[7] = choices[7][0];
 units[7] = "19";
 comments[7] = "Id Pregunta: 10162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 10545 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[8]= new Array();
 choices[8][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[8][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[8][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[8][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[8] = choices[8][1];
 units[8] = "26";
 comments[8] = "Id Pregunta: 10545. Gobernanza TIC";


//  Id pregunta: 10188 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[9]= new Array();
 choices[9][0] = "No, en ning&uacute;n caso.";
 choices[9][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[9][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[9][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[9] = choices[9][3];
 units[9] = "1";
 comments[9] = "Id Pregunta: 10188. CONSTITUCION1978";


//  Id pregunta: 10011 Año de creación de pregunta: 2016
 questions[10]= "11)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[10]= new Array();
 choices[10][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[10][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[10][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[10][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[10] = choices[10][1];
 units[10] = "64";
 comments[10] = "Id Pregunta: 10011. AGE A1 2015";


//  Id pregunta: 10222 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[11]= new Array();
 choices[11][0] = "Dos Cap&iacute;tulos.";
 choices[11][1] = "Tres Cap&iacute;tulos.";
 choices[11][2] = "Un Cap&iacute;tulo.";
 choices[11][3] = "Cuatro Cap&iacute;tulos.";
 answers[11] = choices[11][1];
 units[11] = "1";
 comments[11] = "Id Pregunta: 10222. CONSTITUCION1978";


//  Id pregunta: 10323 Año de creación de pregunta: 2016
 questions[12]= "13)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[12]= new Array();
 choices[12][0] = "Tres a&ntilde;os.";
 choices[12][1] = "Cuatro a&ntilde;os.";
 choices[12][2] = "Cinco a&ntilde;os.";
 choices[12][3] = "Seis a&ntilde;os.";
 answers[12] = choices[12][3];
 units[12] = "5";
 comments[12] = "Id Pregunta: 10323. UNION EUROPEA";


//  Id pregunta: 10251 Año de creación de pregunta: 2016
 questions[13]= "14)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[13]= new Array();
 choices[13][0] = "Rey.";
 choices[13][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[13][2] = "Constituci&oacute;n.";
 choices[13][3] = "Pueblo.";
 answers[13] = choices[13][2];
 units[13] = "1";
 comments[13] = "Id Pregunta: 10251. CONSTITUCION1978";


//  Id pregunta: 10419 Año de creación de pregunta: 2016
 questions[14]= "15)  Promover&aacute;n el conocimiento y la difusi&oacute;n del principio de igualdad entre mujeres y hombres, los medios de comunicaci&oacute;n de titularidad:";
 choices[14]= new Array();
 choices[14][0] = "P&uacute;blica.";
 choices[14][1] = "Privada.";
 choices[14][2] = "Ambas son correctas.";
 choices[14][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[14] = choices[14][0];
 units[14] = "14";
 comments[14] = "Id Pregunta: 10419. POLITICAS DE IGUALDAD";


//  Id pregunta: 10643 Año de creación de pregunta: 2016
 questions[15]= "16)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[15]= new Array();
 choices[15][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[15][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[15][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[15][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[15] = choices[15][2];
 units[15] = "85";
 comments[15] = "Id Pregunta: 10643. Junta de Extremadura A1 2015";


//  Id pregunta: 10317 Año de creación de pregunta: 2016
 questions[16]= "17)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[16]= new Array();
 choices[16][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[16][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[16][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[16][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[16] = choices[16][3];
 units[16] = "5";
 comments[16] = "Id Pregunta: 10317. UNION EUROPEA";


//  Id pregunta: 10452 Año de creación de pregunta: 2016
 questions[17]= "18)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[17]= new Array();
 choices[17][0] = "Los cr&eacute;ditos";
 choices[17][1] = "Las partidas presupuestarias";
 choices[17][2] = "Los derechos";
 choices[17][3] = "Las obligaciones";
 answers[17] = choices[17][3];
 units[17] = "10";
 comments[17] = "Id Pregunta: 10452. PRESUPUESTOS GENERALES";


//  Id pregunta: 10344 Año de creación de pregunta: 2016
 questions[18]= "19)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[18]= new Array();
 choices[18][0] = "Pas&oacute; de 518 a 626.";
 choices[18][1] = "Pas&oacute; de 434 a 518.";
 choices[18][2] = "Pas&oacute; de 345 a 512.";
 choices[18][3] = "Pas&oacute; de 435 a 610.";
 answers[18] = choices[18][1];
 units[18] = "5";
 comments[18] = "Id Pregunta: 10344. UNION EUROPEA";


//  Id pregunta: 10652 Año de creación de pregunta: 2016
 questions[19]= "20)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[19]= new Array();
 choices[19][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[19][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[19][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[19][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[19] = choices[19][2];
 units[19] = "73";
 comments[19] = "Id Pregunta: 10652. ";


//  Id pregunta: 10538 Año de creación de pregunta: 2016
 questions[20]= "21)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[20]= new Array();
 choices[20][0] = "los registros mercantiles";
 choices[20][1] = "los registros de la propiedad";
 choices[20][2] = "los protocolos notariales";
 choices[20][3] = "todas son correctas";
 answers[20] = choices[20][3];
 units[20] = "7";
 comments[20] = "Id Pregunta: 10538. LEY 39/2015";


//  Id pregunta: 10247 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[21]= new Array();
 choices[21][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[21][1] = "Por Orden Ministerial.";
 choices[21][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[21][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[21] = choices[21][0];
 units[21] = "1";
 comments[21] = "Id Pregunta: 10247. CONSTITUCION1978";


//  Id pregunta: 10217 Año de creación de pregunta: 2016
 questions[22]= "23)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[22]= new Array();
 choices[22][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[22][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[22][2] = "Son refrendados por el Rey.";
 choices[22][3] = "Son convocados por el Presidente del Gobierno.";
 answers[22] = choices[22][0];
 units[22] = "1";
 comments[22] = "Id Pregunta: 10217. CONSTITUCION1978";


//  Id pregunta: 10177 Año de creación de pregunta: 2016
 questions[23]= "24)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[23]= new Array();
 choices[23][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[23][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[23][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[23][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[23] = choices[23][2];
 units[23] = "1";
 comments[23] = "Id Pregunta: 10177. CONSTITUCION1978";


//  Id pregunta: 10571 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[24]= new Array();
 choices[24][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[24][1] = "Entrada en la Uni&oacute;n Europea";
 choices[24][2] = "Pactos de la Moncloa";
 choices[24][3] = "Ingreso en la ONU";
 answers[24] = choices[24][3];
 units[24] = "12";
 comments[24] = "Id Pregunta: 10571. Modelo econ&oacute;mico";


//  Id pregunta: 10657 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Qu&eacute; es el machine learning?";
 choices[25]= new Array();
 choices[25][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[25][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[25][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[25][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[25] = choices[25][0];
 units[25] = "73";
 comments[25] = "Id Pregunta: 10657. ";


//  Id pregunta: 10350 Año de creación de pregunta: 2016
 questions[26]= "27)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[26]= new Array();
 choices[26][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[26][1] = "Uno de sus miembros.";
 choices[26][2] = "La Comisi&oacute;n.";
 choices[26][3] = "Todas las respuestas son correctas.";
 answers[26] = choices[26][3];
 units[26] = "5";
 comments[26] = "Id Pregunta: 10350. UNION EUROPEA";


//  Id pregunta: 10592 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[27]= new Array();
 choices[27][0] = "Anualmente";
 choices[27][1] = "Bienalmente";
 choices[27][2] = "Cada cuatro a&ntilde;os";
 choices[27][3] = "No se define ninguna periodicidad";
 answers[27] = choices[27][1];
 units[27] = "19";
 comments[27] = "Id Pregunta: 10592. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";


//  Id pregunta: 10227 Año de creación de pregunta: 2016
 questions[28]= "29)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[28]= new Array();
 choices[28][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[28][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[28][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[28][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[28] = choices[28][3];
 units[28] = "1";
 comments[28] = "Id Pregunta: 10227. CONSTITUCION1978";


//  Id pregunta: 10113 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[29]= new Array();
 choices[29][0] = "La Seguridad Social";
 choices[29][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[29][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[29][3] = "El Banco de Espa&ntilde;a";
 answers[29] = choices[29][3];
 units[29] = "15";
 comments[29] = "Id Pregunta: 10113. ";


//  Id pregunta: 10453 Año de creación de pregunta: 2016
 questions[30]= "31)  En las Administraciones P&uacute;blicas...";
 choices[30]= new Array();
 choices[30][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[30][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[30][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[30][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[30] = choices[30][0];
 units[30] = "10";
 comments[30] = "Id Pregunta: 10453. PRESUPUESTOS GENERALES";


//  Id pregunta: 10603 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[31]= new Array();
 choices[31][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[31][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[31][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[31][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[31] = choices[31][3];
 units[31] = "101";
 comments[31] = "Id Pregunta: 10603. Junta de Extremadura A1 2015";


//  Id pregunta: 10118 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[32]= new Array();
 choices[32][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[32][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[32][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[32][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[32] = choices[32][2];
 units[32] = "15";
 comments[32] = "Id Pregunta: 10118. ";


//  Id pregunta: 10530 Año de creación de pregunta: 2016
 questions[33]= "34)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[33]= new Array();
 choices[33][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[33][1] = "mediante resoluci&oacute;n judicial especial";
 choices[33][2] = "&uacute;nicamente mediante poder notarial";
 choices[33][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[33] = choices[33][3];
 units[33] = "7";
 comments[33] = "Id Pregunta: 10530. LEY 39/2015";


//  Id pregunta: 10219 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[34]= new Array();
 choices[34][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[34][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[34][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[34][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[34] = choices[34][1];
 units[34] = "1";
 comments[34] = "Id Pregunta: 10219. CONSTITUCION1978";


//  Id pregunta: 10019 Año de creación de pregunta: 2016
 questions[35]= "36)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[35]= new Array();
 choices[35][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[35][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[35][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[35][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[35] = choices[35][2];
 units[35] = "47";
 comments[35] = "Id Pregunta: 10019. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10508 Año de creación de pregunta: 2016
 questions[36]= "37)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[36]= new Array();
 choices[36][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[36][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[36][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[36][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[36] = choices[36][3];
 units[36] = "10";
 comments[36] = "Id Pregunta: 10508. PRESUPUESTOS GENERALES";


//  Id pregunta: 10195 Año de creación de pregunta: 2016
 questions[37]= "38)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[37]= new Array();
 choices[37][0] = "Al Gobierno.";
 choices[37][1] = "A las Cortes Generales.";
 choices[37][2] = "Al Poder Judicial.";
 choices[37][3] = "Al Congreso de los Diputados.";
 answers[37] = choices[37][0];
 units[37] = "1";
 comments[37] = "Id Pregunta: 10195. CONSTITUCION1978";


//  Id pregunta: 10468 Año de creación de pregunta: 2016
 questions[38]= "39)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[38]= new Array();
 choices[38][0] = "El Ministerio de Hacienda.";
 choices[38][1] = "El Ministerio de Econom&iacute;a.";
 choices[38][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[38][3] = "Ninguna de las respuestas es correcta.";
 answers[38] = choices[38][2];
 units[38] = "10";
 comments[38] = "Id Pregunta: 10468. PRESUPUESTOS GENERALES";


//  Id pregunta: 10209 Año de creación de pregunta: 2016
 questions[39]= "40)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[39]= new Array();
 choices[39][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[39][1] = "El Congreso de los Diputados.";
 choices[39][2] = "Las Cortes Generales.";
 choices[39][3] = "El Consejo de Ministros";
 answers[39] = choices[39][3];
 units[39] = "1";
 comments[39] = "Id Pregunta: 10209. CONSTITUCION1978";


//  Id pregunta: 10086 Año de creación de pregunta: 2016
 questions[40]= "41)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[40]= new Array();
 choices[40][0] = "Un a&ntilde;o prorrogable";
 choices[40][1] = "Dos a&ntilde;os no prorrogables";
 choices[40][2] = "Un a&ntilde;o no prorrogable";
 choices[40][3] = "Dos a&ntilde;os prorrogables";
 answers[40] = choices[40][2];
 units[40] = "37";
 comments[40] = "Id Pregunta: 10086. AGE A1 2015";


//  Id pregunta: 10053 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[41]= new Array();
 choices[41][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[41][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[41][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[41][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[41] = choices[41][1];
 units[41] = "84";
 comments[41] = "Id Pregunta: 10053. AGE A1 2015";


//  Id pregunta: 10544 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[42]= new Array();
 choices[42][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[42][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[42][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[42][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[42] = choices[42][3];
 units[42] = "26";
 comments[42] = "Id Pregunta: 10544. Gobernanza TIC";


//  Id pregunta: 10149 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[43]= new Array();
 choices[43][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[43][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[43][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[43][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[43] = choices[43][2];
 units[43] = "7";
 comments[43] = "Id Pregunta: 10149. Ley 39/2015, Art&iacute;culo 132";


//  Id pregunta: 10557 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[44]= new Array();
 choices[44][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[44][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[44][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[44][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[44] = choices[44][0];
 units[44] = "19";
 comments[44] = "Id Pregunta: 10557. Agenda Digital";


//  Id pregunta: 10352 Año de creación de pregunta: 2016
 questions[45]= "46)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[45]= new Array();
 choices[45][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[45][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[45][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[45][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[45] = choices[45][0];
 units[45] = "5";
 comments[45] = "Id Pregunta: 10352. UNION EUROPEA";


//  Id pregunta: 10633 Año de creación de pregunta: 2016
 questions[46]= "47)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[46]= new Array();
 choices[46][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[46][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[46][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[46][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[46] = choices[46][3];
 units[46] = "56";
 comments[46] = "Id Pregunta: 10633. Junta de Extremadura A1 2015";


//  Id pregunta: 10479 Año de creación de pregunta: 2016
 questions[47]= "48)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[47]= new Array();
 choices[47][0] = "A nivel de art&iacute;culo.";
 choices[47][1] = "A nivel de cap&iacute;tulo.";
 choices[47][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[47][3] = "A nivel de concepto.";
 answers[47] = choices[47][2];
 units[47] = "10";
 comments[47] = "Id Pregunta: 10479. PRESUPUESTOS GENERALES";


//  Id pregunta: 10651 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Qu&eacute; propiedades ofrecen las conexiones VPN que usan protocolos como PPTP, L2TP/IPsec y SSTP?";
 choices[48]= new Array();
 choices[48][0] = "Encapsulaci&oacute;n y autenticaci&oacute;n.";
 choices[48][1] = "Encapsulaci&oacute;n y cifrado de datos.";
 choices[48][2] = "Autenticaci&oacute;n y cifrado de datos.";
 choices[48][3] = "Encapsulaci&oacute;n, autenticaci&oacute;n y cifrado de datos.";
 answers[48] = choices[48][3];
 units[48] = "120";
 comments[48] = "Id Pregunta: 10651. Junta de Extremadura A1 2015";


//  Id pregunta: 10166 Año de creación de pregunta: 2016
 questions[49]= "50)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[49]= new Array();
 choices[49][0] = "Interoperabilidad";
 choices[49][1] = "Integridad";
 choices[49][2] = "Capital humano";
 choices[49][3] = "Trazabilidad";
 answers[49] = choices[49][2];
 units[49] = "19";
 comments[49] = "Id Pregunta: 10166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 10212 Año de creación de pregunta: 2016
 questions[50]= "51)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[50]= new Array();
 choices[50][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[50][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[50][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[50][3] = "El Senado se compone de 350 senadores.";
 answers[50] = choices[50][0];
 units[50] = "1";
 comments[50] = "Id Pregunta: 10212. CONSTITUCION1978";


//  Id pregunta: 10246 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[51]= new Array();
 choices[51][0] = "Dos Cap&iacute;tulos.";
 choices[51][1] = "Tres Cap&iacute;tulos.";
 choices[51][2] = "Un Cap&iacute;tulo.";
 choices[51][3] = "Cuatro Cap&iacute;tulos.";
 answers[51] = choices[51][1];
 units[51] = "1";
 comments[51] = "Id Pregunta: 10246. CONSTITUCION1978";


//  Id pregunta: 10305 Año de creación de pregunta: 2016
 questions[52]= "53)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[52]= new Array();
 choices[52][0] = "Estrasburgo.";
 choices[52][1] = "Bruselas.";
 choices[52][2] = "Luxemburgo.";
 choices[52][3] = "Par&iacute;s.";
 answers[52] = choices[52][1];
 units[52] = "5";
 comments[52] = "Id Pregunta: 10305. UNION EUROPEA";


//  Id pregunta: 10440 Año de creación de pregunta: 2016
 questions[53]= "54)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[53]= new Array();
 choices[53][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[53][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[53][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[53][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[53] = choices[53][2];
 units[53] = "43";
 comments[53] = "Id Pregunta: 10440. SERVICIOS COMUNES";


//  Id pregunta: 10194 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;ntos miembros componen el Tribunal Constitucional?";
 choices[54]= new Array();
 choices[54][0] = "11";
 choices[54][1] = "12";
 choices[54][2] = "14";
 choices[54][3] = "8";
 answers[54] = choices[54][1];
 units[54] = "1";
 comments[54] = "Id Pregunta: 10194. CONSTITUCION1978";


//  Id pregunta: 10459 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[55]= new Array();
 choices[55][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[55][1] = "Pasivos financieros y transferencias de capital.";
 choices[55][2] = "Activos financieros y pasivos financieros.";
 choices[55][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[55] = choices[55][2];
 units[55] = "10";
 comments[55] = "Id Pregunta: 10459. PRESUPUESTOS GENERALES";


//  Id pregunta: 10576 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[56]= new Array();
 choices[56][0] = "PostgreSQL";
 choices[56][1] = "Datawarehouse";
 choices[56][2] = "Snowflake";
 choices[56][3] = "CouchDB";
 answers[56] = choices[56][0];
 units[56] = "61";
 comments[56] = "Id Pregunta: 10576. Tema 61. TAI 2016.";


//  Id pregunta: 10042 Año de creación de pregunta: 2016
 questions[57]= "58)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[57]= new Array();
 choices[57][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[57][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[57][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[57][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[57] = choices[57][3];
 units[57] = "86";
 comments[57] = "Id Pregunta: 10042. AGE A1 2015";


//  Id pregunta: 10072 Año de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[58]= new Array();
 choices[58][0] = "OASIS ha definido una notaci&oacute;n gr&aacute;fica est&aacute;ndar para WS-BPEL.";
 choices[58][1] = "BPEL4People es una extensi&oacute;n sobre WS-BPEL realizada para dar cobertura a escenarios que involucran interacci&oacute;n de personas con procesos de negocio.";
 choices[58][2] = "WS-BPEL es un lenguaje dise&ntilde;ado para el control distribuido de la invocaci&oacute;n de diferentes servicios Web que modelan un proceso de negocio.";
 choices[58][3] = "XPDL es una especificaci&oacute;n de lenguaje de definici&oacute;n de procesos creada por OASIS.";
 answers[58] = choices[58][1];
 units[58] = "86";
 comments[58] = "Id Pregunta: 10072. AGE A1 2015";


//  Id pregunta: 10391 Año de creación de pregunta: 2016
 questions[59]= "60)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[59]= new Array();
 choices[59][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[59][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[59][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[59][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[59] = choices[59][2];
 units[59] = "14";
 comments[59] = "Id Pregunta: 10391. POLITICAS DE IGUALDAD";


//  Id pregunta: 10250 Año de creación de pregunta: 2016
 questions[60]= "61)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[60]= new Array();
 choices[60][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[60][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[60][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[60][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[60] = choices[60][2];
 units[60] = "1";
 comments[60] = "Id Pregunta: 10250. CONSTITUCION1978";


//  Id pregunta: 10078 Año de creación de pregunta: 2016
 questions[61]= "62)  En relaci&oacute;n con la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, se&ntilde;ale la respuesta correcta:";
 choices[61]= new Array();
 choices[61][0] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, el interesado debe instar su rectificaci&oacute;n, sin que puedan ser cancelados y sustituidos de oficio por los datos rectificados o completados.";
 choices[61][1] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, ser&aacute;n cancelados y sustituidos de oficio por los datos rectificados o completados, sin perjuicio del derecho de rectificaci&oacute;n y cancelaci&oacute;n del afectado.";
 choices[61][2] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 15 d&iacute;as.";
 choices[61][3] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 1 mes.";
 answers[61] = choices[61][1];
 units[61] = "35";
 comments[61] = "Id Pregunta: 10078. AGE A1 2015";


//  Id pregunta: 10281 Año de creación de pregunta: 2016
 questions[62]= "63)  Se&ntilde;ale la respuesta falsa:";
 choices[62]= new Array();
 choices[62][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[62][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[62][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[62][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[62] = choices[62][3];
 units[62] = "5";
 comments[62] = "Id Pregunta: 10281. UNION EUROPEA";


//  Id pregunta: 10266 Año de creación de pregunta: 2016
 questions[63]= "64)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[63]= new Array();
 choices[63][0] = "El Segundo.";
 choices[63][1] = "El Primero.";
 choices[63][2] = "El Preliminar.";
 choices[63][3] = "El Tercero.";
 answers[63] = choices[63][0];
 units[63] = "1";
 comments[63] = "Id Pregunta: 10266. CONSTITUCION1978";


//  Id pregunta: 10414 Año de creación de pregunta: 2016
 questions[64]= "65)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[64]= new Array();
 choices[64][0] = "Un informe de impacto de g&eacute;nero.";
 choices[64][1] = "Un programa de igualdad de oportunidades.";
 choices[64][2] = "Un plan de Igualdad de Oportunidades.";
 choices[64][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[64] = choices[64][0];
 units[64] = "14";
 comments[64] = "Id Pregunta: 10414. POLITICAS DE IGUALDAD";


//  Id pregunta: 10293 Año de creación de pregunta: 2016
 questions[65]= "66)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[65]= new Array();
 choices[65][0] = "Estrasburgo.";
 choices[65][1] = "Bruselas.";
 choices[65][2] = "Luxemburgo.";
 choices[65][3] = "Holanda.";
 answers[65] = choices[65][0];
 units[65] = "5";
 comments[65] = "Id Pregunta: 10293. UNION EUROPEA";


//  Id pregunta: 10555 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[66]= new Array();
 choices[66][0] = "Consumidores";
 choices[66][1] = "PYMES y Start-ups";
 choices[66][2] = "La Industria";
 choices[66][3] = "Todos los anteriores";
 answers[66] = choices[66][3];
 units[66] = "17";
 comments[66] = "Id Pregunta: 10555. Mercado &Uacute;nico Digital";


//  Id pregunta: 10556 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[67]= new Array();
 choices[67][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[67][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[67][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[67][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[67] = choices[67][2];
 units[67] = "17";
 comments[67] = "Id Pregunta: 10556. Mercado &Uacute;nico Digital";


//  Id pregunta: 10208 Año de creación de pregunta: 2016
 questions[68]= "69)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[68]= new Array();
 choices[68][0] = "El Rey.";
 choices[68][1] = "El Jefe del Estado.";
 choices[68][2] = "El Gobierno.";
 choices[68][3] = "El Presidente del Gobierno.";
 answers[68] = choices[68][2];
 units[68] = "1";
 comments[68] = "Id Pregunta: 10208. CONSTITUCION1978";


//  Id pregunta: 10077 Año de creación de pregunta: 2016
 questions[69]= "70)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[69]= new Array();
 choices[69][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[69][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[69][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[69][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[69] = choices[69][2];
 units[69] = "47";
 comments[69] = "Id Pregunta: 10077. AGE A1 2015";


//  Id pregunta: 10583 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[70]= new Array();
 choices[70][0] = "Los principios rectores";
 choices[70][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[70][2] = "Los hitos para su desarrollo gradual";
 choices[70][3] = "Todos los anteriores";
 answers[70] = choices[70][3];
 units[70] = "19";
 comments[70] = "Id Pregunta: 10583. Estrategia TIC";


//  Id pregunta: 10160 Año de creación de pregunta: 2016
 questions[71]= "72)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[71]= new Array();
 choices[71][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[71][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[71][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[71][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[71] = choices[71][1];
 units[71] = "19";
 comments[71] = "Id Pregunta: 10160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 10674 Año de creación de pregunta: 2016
 questions[72]= "73)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[72]= new Array();
 choices[72][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[72][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[72][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[72][3] = "Todas las anteriores son correctas.";
 answers[72] = choices[72][3];
 units[72] = "47";
 comments[72] = "Id Pregunta: 10674. Receta electr&oacute;nica";


//  Id pregunta: 10288 Año de creación de pregunta: 2016
 questions[73]= "74)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[73]= new Array();
 choices[73][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[73][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[73][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[73][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[73] = choices[73][2];
 units[73] = "5";
 comments[73] = "Id Pregunta: 10288. UNION EUROPEA";


//  Id pregunta: 10418 Año de creación de pregunta: 2016
 questions[74]= "75)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[74]= new Array();
 choices[74][0] = "P&uacute;blica.";
 choices[74][1] = "Privada.";
 choices[74][2] = "A y B son correctas.";
 choices[74][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[74] = choices[74][2];
 units[74] = "14";
 comments[74] = "Id Pregunta: 10418. POLITICAS DE IGUALDAD";


