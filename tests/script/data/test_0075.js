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

//  Id pregunta: 10348 AÃ±o de creación de pregunta: 2016
 questions[0]= "1)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[0]= new Array();
 choices[0][0] = "El 1 de noviembre de 1994.";
 choices[0][1] = "El 1 de noviembre de 1992.";
 choices[0][2] = "El 1 de noviembre de 1995.";
 choices[0][3] = "El 1 de noviembre de 1993.";
 answers[0] = choices[0][3];
 units[0] = "5";
 comments[0] = "Id Pregunta: 10348. UNION EUROPEA";


//  Id pregunta: 10593 AÃ±o de creación de pregunta: 2016
 questions[1]= "2)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[1]= new Array();
 choices[1][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[1][1] = "La CETIC";
 choices[1][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[1][3] = "El MHFP";
 answers[1] = choices[1][0];
 units[1] = "19";
 comments[1] = "Id Pregunta: 10593. Estrategia TIC";


//  Id pregunta: 10177 AÃ±o de creación de pregunta: 2016
 questions[2]= "3)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[2]= new Array();
 choices[2][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[2][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[2][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[2][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[2] = choices[2][2];
 units[2] = "1";
 comments[2] = "Id Pregunta: 10177. CONSTITUCION1978";


//  Id pregunta: 10436 AÃ±o de creación de pregunta: 2016
 questions[3]= "4)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[3]= new Array();
 choices[3][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[3][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[3][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[3][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[3] = choices[3][2];
 units[3] = "43";
 comments[3] = "Id Pregunta: 10436. SERVICIOS COMUNES";


//  Id pregunta: 10290 AÃ±o de creación de pregunta: 2016
 questions[4]= "5)  El Parlamento Europeo celebrar&aacute;:";
 choices[4]= new Array();
 choices[4][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[4][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[4][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[4][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[4] = choices[4][0];
 units[4] = "5";
 comments[4] = "Id Pregunta: 10290. UNION EUROPEA";


//  Id pregunta: 10084 AÃ±o de creación de pregunta: 2016
 questions[5]= "6)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[5]= new Array();
 choices[5][0] = "Interchange of Data between Administrations (IDA)";
 choices[5][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[5][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[5][3] = "Interoperability Electronic European Solution (IEES)";
 answers[5] = choices[5][1];
 units[5] = "43";
 comments[5] = "Id Pregunta: 10084. AGE A1 2015";


//  Id pregunta: 10358 AÃ±o de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[6]= new Array();
 choices[6][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[6][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[6][2] = "c) Todas las respuestas son correctas.";
 choices[6][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[6] = choices[6][1];
 units[6] = "5";
 comments[6] = "Id Pregunta: 10358. UNION EUROPEA";


//  Id pregunta: 10650 AÃ±o de creación de pregunta: 2016
 questions[7]= "8)  Indica cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo IP versi&oacute;n 6 es incorrecta.";
 choices[7]= new Array();
 choices[7][0] = "El tama&ntilde;o de la direcci&oacute;n IP es de 128 bits.";
 choices[7][1] = "Aumento de la flexibilidad en el direccionamiento.";
 choices[7][2] = "Define una cabecera de extensi&oacute;n que proporciona autenticaci&oacute;n.";
 choices[7][3] = "La cabecera IP versi&oacute;n 6 obligatoria es de tama&ntilde;o variable.";
 answers[7] = choices[7][3];
 units[7] = "109";
 comments[7] = "Id Pregunta: 10650. Junta de Extremadura A1 2015";


//  Id pregunta: 10196 AÃ±o de creación de pregunta: 2016
 questions[8]= "9)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[8]= new Array();
 choices[8][0] = "Al Presidente del Gobierno.";
 choices[8][1] = "A las Cortes Generales";
 choices[8][2] = "A los electores.";
 choices[8][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[8] = choices[8][3];
 units[8] = "1";
 comments[8] = "Id Pregunta: 10196. CONSTITUCION1978";


//  Id pregunta: 10450 AÃ±o de creación de pregunta: 2016
 questions[9]= "10)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[9]= new Array();
 choices[9][0] = "Cifrada";
 choices[9][1] = "Conjunta";
 choices[9][2] = "Sistem&aacute;tica";
 choices[9][3] = "Todas son correctas";
 answers[9] = choices[9][3];
 units[9] = "10";
 comments[9] = "Id Pregunta: 10450. PRESUPUESTOS GENERALES";


//  Id pregunta: 10628 AÃ±o de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[10]= new Array();
 choices[10][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[10][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[10][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[10][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[10] = choices[10][0];
 units[10] = "45";
 comments[10] = "Id Pregunta: 10628. Junta de Extremadura A1 2015";


//  Id pregunta: 10036 AÃ±o de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l es la interfaz est&aacute;ndar de programaci&oacute;n Java para invocar a m&eacute;todos nativos escritos en otros lenguajes como C o C++?";
 choices[11]= new Array();
 choices[11][0] = "JAXP";
 choices[11][1] = "JNI";
 choices[11][2] = "JNDI";
 choices[11][3] = "JDBC";
 answers[11] = choices[11][1];
 units[11] = "64";
 comments[11] = "Id Pregunta: 10036. AGE A1 2015";


//  Id pregunta: 10588 AÃ±o de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[12]= new Array();
 choices[12][0] = "14";
 choices[12][1] = "11";
 choices[12][2] = "12";
 choices[12][3] = "15";
 answers[12] = choices[12][0];
 units[12] = "19";
 comments[12] = "Id Pregunta: 10588. Estrategia TIC";


//  Id pregunta: 10520 AÃ±o de creación de pregunta: 2016
 questions[13]= "14)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[13]= new Array();
 choices[13][0] = "De los interesados en el procedimiento";
 choices[13][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[13][2] = "Disposiciones generales";
 choices[13][3] = "De los actos administrativos";
 answers[13] = choices[13][2];
 units[13] = "7";
 comments[13] = "Id Pregunta: 10520. LEY 39/2015";


//  Id pregunta: 10185 AÃ±o de creación de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[14]= new Array();
 choices[14][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[14][1] = "Autorizar indultos generales.";
 choices[14][2] = "Sancionar las leyes.";
 choices[14][3] = "Promulgar las leyes.";
 answers[14] = choices[14][1];
 units[14] = "1";
 comments[14] = "Id Pregunta: 10185. CONSTITUCION1978";


//  Id pregunta: 10276 AÃ±o de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale la respuesta falsa";
 choices[15]= new Array();
 choices[15][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[15][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[15][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[15][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[15] = choices[15][3];
 units[15] = "22";
 comments[15] = "Id Pregunta: 10276. LEY DE TRANSPARENCIA";


//  Id pregunta: 10254 AÃ±o de creación de pregunta: 2016
 questions[16]= "17)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[16]= new Array();
 choices[16][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[16][1] = "La libertad sexual y religiosa.";
 choices[16][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[16][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[16] = choices[16][3];
 units[16] = "1";
 comments[16] = "Id Pregunta: 10254. CONSTITUCION1978";


//  Id pregunta: 10113 AÃ±o de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[17]= new Array();
 choices[17][0] = "La Seguridad Social";
 choices[17][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[17][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[17][3] = "El Banco de Espa&ntilde;a";
 answers[17] = choices[17][3];
 units[17] = "15";
 comments[17] = "Id Pregunta: 10113. ";


//  Id pregunta: 10458 AÃ±o de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[18]= new Array();
 choices[18][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[18][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[18][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[18][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[18] = choices[18][3];
 units[18] = "10";
 comments[18] = "Id Pregunta: 10458. PRESUPUESTOS GENERALES";


//  Id pregunta: 10296 AÃ±o de creación de pregunta: 2016
 questions[19]= "20)  Indique a qui&eacute;n corresponde la funci&oacute;n de adoptar las iniciativas de la programaci&oacute;n anual y plurianual de la Uni&oacute;n Europea con el fin de alcanzar acuerdos interinstitucionales:";
 choices[19]= new Array();
 choices[19][0] = "Al Consejo Europeo.";
 choices[19][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[19][2] = "A la Comisi&oacute;n Europea.";
 choices[19][3] = "Al Parlamento Europeo.";
 answers[19] = choices[19][2];
 units[19] = "5";
 comments[19] = "Id Pregunta: 10296. UNION EUROPEA";


//  Id pregunta: 10352 AÃ±o de creación de pregunta: 2016
 questions[20]= "21)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[20]= new Array();
 choices[20][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[20][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[20][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[20][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[20] = choices[20][0];
 units[20] = "5";
 comments[20] = "Id Pregunta: 10352. UNION EUROPEA";


//  Id pregunta: 10496 AÃ±o de creación de pregunta: 2016
 questions[21]= "22)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[21]= new Array();
 choices[21][0] = "Las respuestas a) y b) son correctas.";
 choices[21][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[21][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[21][3] = "Las respuestas a) y b) no son correctas.";
 answers[21] = choices[21][0];
 units[21] = "10";
 comments[21] = "Id Pregunta: 10496. PRESUPUESTOS GENERALES";


//  Id pregunta: 10165 AÃ±o de creación de pregunta: 2016
 questions[22]= "23)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[22]= new Array();
 choices[22][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[22][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[22][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[22][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[22] = choices[22][0];
 units[22] = "19";
 comments[22] = "Id Pregunta: 10165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";


//  Id pregunta: 10576 AÃ±o de creación de pregunta: 2016
 questions[23]= "24)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[23]= new Array();
 choices[23][0] = "PostgreSQL";
 choices[23][1] = "Datawarehouse";
 choices[23][2] = "Snowflake";
 choices[23][3] = "CouchDB";
 answers[23] = choices[23][0];
 units[23] = "61";
 comments[23] = "Id Pregunta: 10576. Tema 61. TAI 2016.";


//  Id pregunta: 10411 AÃ±o de creación de pregunta: 2016
 questions[24]= "25)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[24]= new Array();
 choices[24][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[24][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[24][2] = "Ninguna es correcta.";
 choices[24][3] = "A y B son correctas.";
 answers[24] = choices[24][1];
 units[24] = "14";
 comments[24] = "Id Pregunta: 10411. POLITICAS DE IGUALDAD";


//  Id pregunta: 10054 AÃ±o de creación de pregunta: 2016
 questions[25]= "26)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[25]= new Array();
 choices[25][0] = "DoS";
 choices[25][1] = "Phishing";
 choices[25][2] = "Sniffing";
 choices[25][3] = "Spoofing";
 answers[25] = choices[25][3];
 units[25] = "119";
 comments[25] = "Id Pregunta: 10054. AGE A1 2015";


//  Id pregunta: 10255 AÃ±o de creación de pregunta: 2016
 questions[26]= "27)  La soberan&iacute;a nacional reside en:";
 choices[26]= new Array();
 choices[26][0] = "el Parlamento nacional.";
 choices[26][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[26][2] = "el pueblo espa&ntilde;ol.";
 choices[26][3] = "el Congreso y el Senado.";
 answers[26] = choices[26][3];
 units[26] = "1";
 comments[26] = "Id Pregunta: 10255. CONSTITUCION1978";


//  Id pregunta: 10175 AÃ±o de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[27]= new Array();
 choices[27][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[27][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[27][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[27][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[27] = choices[27][1];
 units[27] = "1";
 comments[27] = "Id Pregunta: 10175. CONSTITUCION1978";


//  Id pregunta: 10541 AÃ±o de creación de pregunta: 2016
 questions[28]= "29)  Se&ntilde;ala la correcta:";
 choices[28]= new Array();
 choices[28][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[28][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[28][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[28][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[28] = choices[28][1];
 units[28] = "7";
 comments[28] = "Id Pregunta: 10541. LEY 39/2015";


//  Id pregunta: 10274 AÃ±o de creación de pregunta: 2016
 questions[29]= "30)  La Ley 19/2013 de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno ha establecido el derecho:";
 choices[29]= new Array();
 choices[29][0] = "Al acceso a la informaci&oacute;n p&uacute;blica, en desarrollo de los t&eacute;rminos ya previstos por la Ley 11/2007, de acceso electr&oacute;nico de los ciudadano a los servicios p&uacute;blicos.";
 choices[29][1] = "Al acceso a la informaci&oacute;n p&uacute;blica, por primera vez en nuestra legislaci&oacute;n positiva.";
 choices[29][2] = "Al acceso a la informaci&oacute;n p&uacute;blica a trav&eacute;s del portal de transparencia.";
 choices[29][3] = "Al acceso a la informaci&oacute;n p&uacute;blica, con las limitaciones derivadas del posible perjuicio para la defensa, seguridad nacional o funciones administrativas de inspecci&oacute;n, entre otras.";
 answers[29] = choices[29][3];
 units[29] = "22";
 comments[29] = "Id Pregunta: 10274. LEY DE TRANSPARENCIA";


//  Id pregunta: 10131 AÃ±o de creación de pregunta: 2016
 questions[30]= "31)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[30]= new Array();
 choices[30][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[30][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[30][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[30][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[30] = choices[30][0];
 units[30] = "12";
 comments[30] = "Id Pregunta: 10131. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10407 AÃ±o de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[31]= new Array();
 choices[31][0] = "Art&iacute;culo 14 CE.";
 choices[31][1] = "Art&iacute;culo 9.2 CE.";
 choices[31][2] = "Art&iacute;culo 9.1 CE.";
 choices[31][3] = "Art&iacute;culo 13 CE.";
 answers[31] = choices[31][2];
 units[31] = "14";
 comments[31] = "Id Pregunta: 10407. POLITICAS DE IGUALDAD";


//  Id pregunta: 10350 AÃ±o de creación de pregunta: 2016
 questions[32]= "33)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[32]= new Array();
 choices[32][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[32][1] = "Uno de sus miembros.";
 choices[32][2] = "La Comisi&oacute;n.";
 choices[32][3] = "Todas las respuestas son correctas.";
 answers[32] = choices[32][3];
 units[32] = "5";
 comments[32] = "Id Pregunta: 10350. UNION EUROPEA";


//  Id pregunta: 10035 AÃ±o de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qu&eacute; es Java Web Start?";
 choices[33]= new Array();
 choices[33][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[33][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[33][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[33][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[33] = choices[33][3];
 units[33] = "64";
 comments[33] = "Id Pregunta: 10035. AGE A1 2015";


//  Id pregunta: 10013 AÃ±o de creación de pregunta: 2016
 questions[34]= "35)  JNDI se usa para el acceso a:";
 choices[34]= new Array();
 choices[34][0] = "Datos de ficheros";
 choices[34][1] = "Sistemas gestores de bases de datos";
 choices[34][2] = "Directorios de nombres";
 choices[34][3] = "Colas de mensajer&iacute;a";
 answers[34] = choices[34][2];
 units[34] = "64";
 comments[34] = "Id Pregunta: 10013. AGE A1 2015";


//  Id pregunta: 10298 AÃ±o de creación de pregunta: 2016
 questions[35]= "36)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[35]= new Array();
 choices[35][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[35][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[35][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[35][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[35] = choices[35][1];
 units[35] = "5";
 comments[35] = "Id Pregunta: 10298. UNION EUROPEA";


//  Id pregunta: 10215 AÃ±o de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[36]= new Array();
 choices[36][0] = "Publicidad.";
 choices[36][1] = "Constituci&oacute;n.";
 choices[36][2] = "Legalidad.";
 choices[36][3] = "Creaci&oacute;n.";
 answers[36] = choices[36][0];
 units[36] = "1";
 comments[36] = "Id Pregunta: 10215. CONSTITUCION1978";


//  Id pregunta: 10055 AÃ±o de creación de pregunta: 2016
 questions[37]= "38)  WS-Security contiene especificaciones sobre:";
 choices[37]= new Array();
 choices[37][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[37][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[37][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[37][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[37] = choices[37][1];
 units[37] = "119";
 comments[37] = "Id Pregunta: 10055. AGE A1 2015";


//  Id pregunta: 10487 AÃ±o de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[38]= new Array();
 choices[38][0] = "Las Cortes Generales.";
 choices[38][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[38][2] = "El Gobierno.";
 choices[38][3] = "El Congreso de los Diputados.";
 answers[38] = choices[38][0];
 units[38] = "10";
 comments[38] = "Id Pregunta: 10487. PRESUPUESTOS GENERALES";


//  Id pregunta: 10193 AÃ±o de creación de pregunta: 2016
 questions[39]= "40)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[39]= new Array();
 choices[39][0] = "3 a&ntilde;os.";
 choices[39][1] = "5 a&ntilde;os.";
 choices[39][2] = "4 a&ntilde;os.";
 choices[39][3] = "6 a&ntilde;os.";
 answers[39] = choices[39][1];
 units[39] = "1";
 comments[39] = "Id Pregunta: 10193. CONSTITUCION1978";


//  Id pregunta: 10314 AÃ±o de creación de pregunta: 2016
 questions[40]= "41)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[40]= new Array();
 choices[40][0] = "Al Consejo Europeo.";
 choices[40][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[40][2] = "A la Comisi&oacute;n Europea.";
 choices[40][3] = "Al Parlamento Europeo.";
 answers[40] = choices[40][2];
 units[40] = "5";
 comments[40] = "Id Pregunta: 10314. UNION EUROPEA";


//  Id pregunta: 10595 AÃ±o de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[41]= new Array();
 choices[41][0] = "La CETIC";
 choices[41][1] = "Los Ministerios";
 choices[41][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[41][3] = "Ninguno de los anteriores";
 answers[41] = choices[41][1];
 units[41] = "19";
 comments[41] = "Id Pregunta: 10595. Estrategia TIC";


//  Id pregunta: 10319 AÃ±o de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[42]= new Array();
 choices[42][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[42][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[42][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[42][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[42] = choices[42][0];
 units[42] = "5";
 comments[42] = "Id Pregunta: 10319. UNION EUROPEA";


//  Id pregunta: 10605 AÃ±o de creación de pregunta: 2016
 questions[43]= "44)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[43]= new Array();
 choices[43][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[43][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[43][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[43][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[43] = choices[43][2];
 units[43] = "101";
 comments[43] = "Id Pregunta: 10605. Junta de Extremadura A1 2015";


//  Id pregunta: 10379 AÃ±o de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[44]= new Array();
 choices[44][0] = "Anual.";
 choices[44][1] = "Semestral.";
 choices[44][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[44][3] = "Bienal.";
 answers[44] = choices[44][2];
 units[44] = "14";
 comments[44] = "Id Pregunta: 10379. POLITICAS DE IGUALDAD";


//  Id pregunta: 10118 AÃ±o de creación de pregunta: 2016
 questions[45]= "46)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[45]= new Array();
 choices[45][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[45][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[45][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[45][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[45] = choices[45][2];
 units[45] = "15";
 comments[45] = "Id Pregunta: 10118. ";


//  Id pregunta: 10386 AÃ±o de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con las pol&iacute;ticas de igualdad de g&eacute;nero, de conformidad con la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad de mujeres y hombres:";
 choices[46]= new Array();
 choices[46][0] = "El Ministerio de Trabajo y Asuntos Sociales crear&aacute; un distintivo para reconocer a las empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato y de oportunidades con sus trabajadores y trabajadoras.";
 choices[46][1] = "Todas las empresas con sede en Espa&ntilde;a est&aacute;n obligadas a elaborar un plan de igualdad entre sus trabajadores y trabajadoras.";
 choices[46][2] = "En los procesos de car&aacute;cter penal en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por raz&oacute;n de sexo, corresponde a la persona demandada probar la ausencia de discriminaci&oacute;n.";
 choices[46][3] = "La mitad, al menos, de los nuevos nombramientos de titulares de los &oacute;rganos directivos de la Administraci&oacute;n General del Estado, durante un plazo de dos a&ntilde;os a partir de la entrada en vigor de la ley, deber&aacute;n ser mujeres.";
 answers[46] = choices[46][0];
 units[46] = "14";
 comments[46] = "Id Pregunta: 10386. POLITICAS DE IGUALDAD";


//  Id pregunta: 10284 AÃ±o de creación de pregunta: 2016
 questions[47]= "48)  Se&ntilde;ale la respuesta falsa:";
 choices[47]= new Array();
 choices[47][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[47][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[47][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[47][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[47] = choices[47][2];
 units[47] = "5";
 comments[47] = "Id Pregunta: 10284. UNION EUROPEA";


//  Id pregunta: 10664 AÃ±o de creación de pregunta: 2016
 questions[48]= "49)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[48]= new Array();
 choices[48][0] = "Siempre en formato electr&oacute;nico.";
 choices[48][1] = "Siempre en formato papel.";
 choices[48][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[48][3] = "La ley no regula el formato del expediente.";
 answers[48] = choices[48][0];
 units[48] = "7";
 comments[48] = "Id Pregunta: 10664. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 10087 AÃ±o de creación de pregunta: 2016
 questions[49]= "50)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[49]= new Array();
 choices[49][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[49][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[49][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[49][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[49] = choices[49][2];
 units[49] = "48";
 comments[49] = "Id Pregunta: 10087. AGE A1 2015";


//  Id pregunta: 10362 AÃ±o de creación de pregunta: 2016
 questions[50]= "51)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[50]= new Array();
 choices[50][0] = "Son actos normativos.";
 choices[50][1] = "Poseen alcance general.";
 choices[50][2] = "No son obligatorias.";
 choices[50][3] = "Son actos individuales no normativos.";
 answers[50] = choices[50][3];
 units[50] = "5";
 comments[50] = "Id Pregunta: 10362. UNION EUROPEA";


//  Id pregunta: 10390 AÃ±o de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[51]= new Array();
 choices[51][0] = "El Consejo Nacional de la Mujer.";
 choices[51][1] = "El Consejo de la Mujer.";
 choices[51][2] = "El Instituto de la Mujer.";
 choices[51][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[51] = choices[51][3];
 units[51] = "14";
 comments[51] = "Id Pregunta: 10390. POLITICAS DE IGUALDAD";


//  Id pregunta: 10531 AÃ±o de creación de pregunta: 2016
 questions[52]= "53)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[52]= new Array();
 choices[52][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[52][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[52][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[52][3] = "todas son correctas";
 answers[52] = choices[52][3];
 units[52] = "7";
 comments[52] = "Id Pregunta: 10531. LEY 39/2015";


//  Id pregunta: 10474 AÃ±o de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[53]= new Array();
 choices[53][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[53][1] = "Todas las respuestas son correctas.";
 choices[53][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[53][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[53] = choices[53][1];
 units[53] = "10";
 comments[53] = "Id Pregunta: 10474. PRESUPUESTOS GENERALES";


//  Id pregunta: 10614 AÃ±o de creación de pregunta: 2016
 questions[54]= "55)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[54]= new Array();
 choices[54][0] = "192.228.0.0";
 choices[54][1] = "192.228.8.0";
 choices[54][2] = "192.228.16.0";
 choices[54][3] = "192.228.17.0";
 answers[54] = choices[54][2];
 units[54] = "109";
 comments[54] = "Id Pregunta: 10614. Junta de Extremadura A1 2015";


//  Id pregunta: 10455 AÃ±o de creación de pregunta: 2016
 questions[55]= "56)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[55]= new Array();
 choices[55][0] = "En qu&eacute; nos gastamos el dinero";
 choices[55][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[55][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[55][3] = "Qui&eacute;n se gasta el dinero.";
 answers[55] = choices[55][0];
 units[55] = "10";
 comments[55] = "Id Pregunta: 10455. PRESUPUESTOS GENERALES";


//  Id pregunta: 10530 AÃ±o de creación de pregunta: 2016
 questions[56]= "57)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[56]= new Array();
 choices[56][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[56][1] = "mediante resoluci&oacute;n judicial especial";
 choices[56][2] = "&uacute;nicamente mediante poder notarial";
 choices[56][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[56] = choices[56][3];
 units[56] = "7";
 comments[56] = "Id Pregunta: 10530. LEY 39/2015";


//  Id pregunta: 10512 AÃ±o de creación de pregunta: 2016
 questions[57]= "58)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[57]= new Array();
 choices[57][0] = "solo mediante ley";
 choices[57][1] = "reglamentariamente";
 choices[57][2] = "mediante ley o reglamentariamente";
 choices[57][3] = "ninguna es correcta";
 answers[57] = choices[57][1];
 units[57] = "7";
 comments[57] = "Id Pregunta: 10512. LEY 39/2015";


//  Id pregunta: 10095 AÃ±o de creación de pregunta: 2016
 questions[58]= "59)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[58]= new Array();
 choices[58][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[58][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[58][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[58][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[58] = choices[58][3];
 units[58] = "89";
 comments[58] = "Id Pregunta: 10095. AGE A1 2015";


//  Id pregunta: 10449 AÃ±o de creación de pregunta: 2016
 questions[59]= "60)  El cr&eacute;dito presupuestario es...";
 choices[59]= new Array();
 choices[59][0] = "El sujeto que realiza el gasto";
 choices[59][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[59][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[59][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[59] = choices[59][2];
 units[59] = "10";
 comments[59] = "Id Pregunta: 10449. PRESUPUESTOS GENERALES";


//  Id pregunta: 10014 AÃ±o de creación de pregunta: 2016
 questions[60]= "61)  Se&ntilde;ale la respuesta correcta:";
 choices[60]= new Array();
 choices[60][0] = "La norma ISO 9004 est&aacute; compuesta por las normas ISO 9000:2005, ISO 9002:2008 e ISO 9004:2009.";
 choices[60][1] = "La norma ISO 9004:2009 se refiere a la gesti&oacute;n para el &eacute;xito sostenido de una organizaci&oacute;n, con un enfoque de gesti&oacute;n de la calidad.";
 choices[60][2] = "La norma ISO 9004:2009 se refiere a los principios y vocabulario de los sistemas de gesti&oacute;n de calidad.";
 choices[60][3] = "La norma ISO 9002:2008 se refiere a los requisitos de los sistemas de gesti&oacute;n de calidad.";
 answers[60] = choices[60][1];
 units[60] = "98";
 comments[60] = "Id Pregunta: 10014. AGE A1 2015";


//  Id pregunta: 10618 AÃ±o de creación de pregunta: 2016
 questions[61]= "62)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[61]= new Array();
 choices[61][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[61][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[61][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[61][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[61] = choices[61][2];
 units[61] = "85";
 comments[61] = "Id Pregunta: 10618. Junta de Extremadura A1 2015";


//  Id pregunta: 10266 AÃ±o de creación de pregunta: 2016
 questions[62]= "63)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[62]= new Array();
 choices[62][0] = "El Segundo.";
 choices[62][1] = "El Primero.";
 choices[62][2] = "El Preliminar.";
 choices[62][3] = "El Tercero.";
 answers[62] = choices[62][0];
 units[62] = "1";
 comments[62] = "Id Pregunta: 10266. CONSTITUCION1978";


//  Id pregunta: 10067 AÃ±o de creación de pregunta: 2016
 questions[63]= "64)  En Internet, la entidad encargada de la coordinaci&oacute;n de los N&uacute;meros de Sistema Aut&oacute;nomo (Autonomous System Numbers - ASN) usados por varios protocolos de enrutamiento, es:";
 choices[63]= new Array();
 choices[63][0] = "IANA";
 choices[63][1] = "ISOC";
 choices[63][2] = "IETF";
 choices[63][3] = "IAB";
 answers[63] = choices[63][0];
 units[63] = "103";
 comments[63] = "Id Pregunta: 10067. AGE A1 2015";


//  Id pregunta: 10057 AÃ±o de creación de pregunta: 2016
 questions[64]= "65)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[64]= new Array();
 choices[64][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[64][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[64][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[64][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[64] = choices[64][3];
 units[64] = "101";
 comments[64] = "Id Pregunta: 10057. AGE A1 2015";


//  Id pregunta: 10311 AÃ±o de creación de pregunta: 2016
 questions[65]= "66)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[65]= new Array();
 choices[65][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[65][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[65][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[65][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[65] = choices[65][2];
 units[65] = "5";
 comments[65] = "Id Pregunta: 10311. UNION EUROPEA";


//  Id pregunta: 10327 AÃ±o de creación de pregunta: 2016
 questions[66]= "67)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[66]= new Array();
 choices[66][0] = "X.";
 choices[66][1] = "XIX.";
 choices[66][2] = "XV.";
 choices[66][3] = "XIII.";
 answers[66] = choices[66][1];
 units[66] = "5";
 comments[66] = "Id Pregunta: 10327. UNION EUROPEA";


//  Id pregunta: 10582 AÃ±o de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[67]= new Array();
 choices[67][0] = "El 5 de Octubre de 2015";
 choices[67][1] = "El 15 de Octubre de 2015";
 choices[67][2] = "El 15 de Septiembre de 2015";
 choices[67][3] = "El 2 de Octubre de 2015";
 answers[67] = choices[67][2];
 units[67] = "19";
 comments[67] = "Id Pregunta: 10582. Estrategia TIC";


//  Id pregunta: 10443 AÃ±o de creación de pregunta: 2016
 questions[68]= "69)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[68]= new Array();
 choices[68][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[68][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[68][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[68][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[68] = choices[68][1];
 units[68] = "43";
 comments[68] = "Id Pregunta: 10443. SERVICIOS COMUNES";


//  Id pregunta: 10657 AÃ±o de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Qu&eacute; es el machine learning?";
 choices[69]= new Array();
 choices[69][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[69][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[69][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[69][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[69] = choices[69][0];
 units[69] = "73";
 comments[69] = "Id Pregunta: 10657. ";


//  Id pregunta: 10216 AÃ±o de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[70]= new Array();
 choices[70][0] = "El Presidente del Gobierno.";
 choices[70][1] = "El Consejo de Ministros.";
 choices[70][2] = "40 Diputados.";
 choices[70][3] = "El Ministerio Fiscal.";
 answers[70] = choices[70][0];
 units[70] = "1";
 comments[70] = "Id Pregunta: 10216. CONSTITUCION1978";


//  Id pregunta: 10225 AÃ±o de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[71]= new Array();
 choices[71][0] = "las Cortes generales.";
 choices[71][1] = "los partidos pol&iacute;ticos.";
 choices[71][2] = "los sindicatos.";
 choices[71][3] = "las Comunidades Aut&oacute;nomas.";
 answers[71] = choices[71][1];
 units[71] = "1";
 comments[71] = "Id Pregunta: 10225. CONSTITUCION1978";


//  Id pregunta: 10097 AÃ±o de creación de pregunta: 2016
 questions[72]= "73)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[72]= new Array();
 choices[72][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[72][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[72][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[72][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[72] = choices[72][2];
 units[72] = "22";
 comments[72] = "Id Pregunta: 10097. AGE A1 2015";


//  Id pregunta: 10539 AÃ±o de creación de pregunta: 2016
 questions[73]= "74)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[73]= new Array();
 choices[73][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[73][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[73][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[73][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[73] = choices[73][1];
 units[73] = "7";
 comments[73] = "Id Pregunta: 10539. LEY 39/2015";


//  Id pregunta: 10126 AÃ±o de creación de pregunta: 2016
 questions[74]= "75)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[74]= new Array();
 choices[74][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[74][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[74][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[74][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[74] = choices[74][3];
 units[74] = "22";
 comments[74] = "Id Pregunta: 10126. ";


//  Id pregunta: 10322 AÃ±o de creación de pregunta: 2016
 questions[75]= "76)  El Tribunal de Justicia est&aacute; formado por:";
 choices[75]= new Array();
 choices[75][0] = "Un Juez de cada Estado miembro.";
 choices[75][1] = "Por dos Jueces de cada Estado miembro.";
 choices[75][2] = "Por veinte Jueces.";
 choices[75][3] = "Por ocho Jueces.";
 answers[75] = choices[75][0];
 units[75] = "5";
 comments[75] = "Id Pregunta: 10322. UNION EUROPEA";


//  Id pregunta: 10524 AÃ±o de creación de pregunta: 2016
 questions[76]= "77)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[76]= new Array();
 choices[76][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[76][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[76][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[76][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[76] = choices[76][3];
 units[76] = "7";
 comments[76] = "Id Pregunta: 10524. LEY 39/2015";


//  Id pregunta: 10578 AÃ±o de creación de pregunta: 2016
 questions[77]= "78)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[77]= new Array();
 choices[77][0] = "Fue elaborada y aprobada por la CETIC";
 choices[77][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[77][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[77][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[77] = choices[77][1];
 units[77] = "19";
 comments[77] = "Id Pregunta: 10578. Estrategia TIC";


//  Id pregunta: 10063 AÃ±o de creación de pregunta: 2016
 questions[78]= "79)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[78]= new Array();
 choices[78][0] = "Infrastructure as a Service (IaaS)";
 choices[78][1] = "Platform as a Service (PaaS)";
 choices[78][2] = "Software as a Service (SaaS)";
 choices[78][3] = "Application as a Service (AaaS)";
 answers[78] = choices[78][1];
 units[78] = "52";
 comments[78] = "Id Pregunta: 10063. AGE A1 2015";


//  Id pregunta: 10009 AÃ±o de creación de pregunta: 2016
 questions[79]= "80)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[79]= new Array();
 choices[79][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[79][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[79][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[79][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[79] = choices[79][1];
 units[79] = "95";
 comments[79] = "Id Pregunta: 10009. AGE A1 2015";


//  Id pregunta: 10547 AÃ±o de creación de pregunta: 2016
 questions[80]= "81)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[80]= new Array();
 choices[80][0] = "Integrar la estrategia TIC con la de negocio";
 choices[80][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[80][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[80][3] = "Todas las anteriores";
 answers[80] = choices[80][3];
 units[80] = "26";
 comments[80] = "Id Pregunta: 10547. Gobernanza TIC";


//  Id pregunta: 10162 AÃ±o de creación de pregunta: 2016
 questions[81]= "82)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[81]= new Array();
 choices[81][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[81][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[81][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[81][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[81] = choices[81][0];
 units[81] = "19";
 comments[81] = "Id Pregunta: 10162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 10551 AÃ±o de creación de pregunta: 2016
 questions[82]= "83)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[82]= new Array();
 choices[82][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[82][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[82][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[82][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[82] = choices[82][2];
 units[82] = "26";
 comments[82] = "Id Pregunta: 10551. Gobernanza TIC";


//  Id pregunta: 10522 AÃ±o de creación de pregunta: 2016
 questions[83]= "84)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[83]= new Array();
 choices[83][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[83][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[83][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[83][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[83] = choices[83][1];
 units[83] = "7";
 comments[83] = "Id Pregunta: 10522. LEY 39/2015";


//  Id pregunta: 10580 AÃ±o de creación de pregunta: 2016
 questions[84]= "85)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[84]= new Array();
 choices[84][0] = "A la CETIC";
 choices[84][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[84][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[84][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[84] = choices[84][3];
 units[84] = "19";
 comments[84] = "Id Pregunta: 10580. Estrategia TIC";


//  Id pregunta: 10569 AÃ±o de creación de pregunta: 2016
 questions[85]= "86)  El sector Servicios NO incluye:";
 choices[85]= new Array();
 choices[85][0] = "El Comercio";
 choices[85][1] = "Los Transportes";
 choices[85][2] = "La Energ&iacute;a";
 choices[85][3] = "Las Comunicaciones";
 answers[85] = choices[85][2];
 units[85] = "12";
 comments[85] = "Id Pregunta: 10569. Modelo econ&oacute;mico";


//  Id pregunta: 10275 AÃ±o de creación de pregunta: 2016
 questions[86]= "87)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[86]= new Array();
 choices[86][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[86][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[86][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[86][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[86] = choices[86][2];
 units[86] = "22";
 comments[86] = "Id Pregunta: 10275. LEY DE TRANSPARENCIA";


//  Id pregunta: 10661 AÃ±o de creación de pregunta: 2016
 questions[87]= "88)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[87]= new Array();
 choices[87][0] = "Varios namenodes y varios datanodes por cluster";
 choices[87][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[87][2] = "1 namenode y varios datanodes por cluster";
 choices[87][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[87] = choices[87][2];
 units[87] = "73";
 comments[87] = "Id Pregunta: 10661. ";


//  Id pregunta: 10371 AÃ±o de creación de pregunta: 2016
 questions[88]= "89)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[88]= new Array();
 choices[88][0] = "En 1988.";
 choices[88][1] = "En 1981.";
 choices[88][2] = "En 1982.";
 choices[88][3] = "En 1986.";
 answers[88] = choices[88][3];
 units[88] = "5";
 comments[88] = "Id Pregunta: 10371. UNION EUROPEA";


//  Id pregunta: 10200 AÃ±o de creación de pregunta: 2016
 questions[89]= "90)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[89]= new Array();
 choices[89][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[89][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[89][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[89][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[89] = choices[89][3];
 units[89] = "1";
 comments[89] = "Id Pregunta: 10200. CONSTITUCION1978";


//  Id pregunta: 10262 AÃ±o de creación de pregunta: 2016
 questions[90]= "91)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[90]= new Array();
 choices[90][0] = "Constitucional.";
 choices[90][1] = "Penal.";
 choices[90][2] = "Militar.";
 choices[90][3] = "Tribunales consuetudinarios.";
 answers[90] = choices[90][0];
 units[90] = "1";
 comments[90] = "Id Pregunta: 10262. CONSTITUCION1978";


//  Id pregunta: 10182 AÃ±o de creación de pregunta: 2016
 questions[91]= "92)  De acuerdo con el T&iacute;tulo II de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; tutor del Rey menor:";
 choices[91]= new Array();
 choices[91][0] = "El que hubiere designado el familiar m&aacute;s cercano al Rey difunto.";
 choices[91][1] = "El que hubiere designado el Rey difunto en su testamento.";
 choices[91][2] = "El que hubieren designado las Cortes Generales.";
 choices[91][3] = "El que hubiere designado el Senado por mayor&iacute;a absoluta.";
 answers[91] = choices[91][1];
 units[91] = "1";
 comments[91] = "Id Pregunta: 10182. CONSTITUCION1978";


//  Id pregunta: 10119 AÃ±o de creación de pregunta: 2016
 questions[92]= "93)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[92]= new Array();
 choices[92][0] = "Anual";
 choices[92][1] = "Mensual";
 choices[92][2] = "Semestral";
 choices[92][3] = "Trimestral";
 answers[92] = choices[92][3];
 units[92] = "15";
 comments[92] = "Id Pregunta: 10119. ";


//  Id pregunta: 10639 AÃ±o de creación de pregunta: 2016
 questions[93]= "94)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[93]= new Array();
 choices[93][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[93][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[93][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[93][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[93] = choices[93][2];
 units[93] = "57";
 comments[93] = "Id Pregunta: 10639. Junta de Extremadura A1 2015";


//  Id pregunta: 10415 AÃ±o de creación de pregunta: 2016
 questions[94]= "95)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[94]= new Array();
 choices[94][0] = "Un informe de g&eacute;nero.";
 choices[94][1] = "La variable de sexo.";
 choices[94][2] = "La variable de edad.";
 choices[94][3] = "La variable de comportamiento.";
 answers[94] = choices[94][1];
 units[94] = "14";
 comments[94] = "Id Pregunta: 10415. POLITICAS DE IGUALDAD";


//  Id pregunta: 10442 AÃ±o de creación de pregunta: 2016
 questions[95]= "96)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:";
 choices[95]= new Array();
 choices[95][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[95][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[95][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[95][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[95] = choices[95][3];
 units[95] = "43";
 comments[95] = "Id Pregunta: 10442. SERVICIOS COMUNES";


//  Id pregunta: 10626 AÃ±o de creación de pregunta: 2016
 questions[96]= "97)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[96]= new Array();
 choices[96][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[96][1] = "La Direcci&oacute;n de la Competencia.";
 choices[96][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[96][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[96] = choices[96][0];
 units[96] = "121";
 comments[96] = "Id Pregunta: 10626. Junta de Extremadura A1 2015";


//  Id pregunta: 10438 AÃ±o de creación de pregunta: 2016
 questions[97]= "98)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[97]= new Array();
 choices[97][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[97][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[97][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[97][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[97] = choices[97][3];
 units[97] = "43";
 comments[97] = "Id Pregunta: 10438. SERVICIOS COMUNES";


//  Id pregunta: 10397 AÃ±o de creación de pregunta: 2016
 questions[98]= "99)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[98]= new Array();
 choices[98][0] = "Acoso sexual.";
 choices[98][1] = "Acoso por raz&oacute;n de sexo.";
 choices[98][2] = "Acoso laboral.";
 choices[98][3] = "Acoso mental.";
 answers[98] = choices[98][1];
 units[98] = "14";
 comments[98] = "Id Pregunta: 10397. POLITICAS DE IGUALDAD";


//  Id pregunta: 10636 AÃ±o de creación de pregunta: 2016
 questions[99]= "100)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[99]= new Array();
 choices[99][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[99][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[99][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[99][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[99] = choices[99][2];
 units[99] = "57";
 comments[99] = "Id Pregunta: 10636. Junta de Extremadura A1 2015";


