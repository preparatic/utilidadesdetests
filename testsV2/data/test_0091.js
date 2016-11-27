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


//  Id pregunta: 10305 AÃ±o de creación de pregunta: 2016
 questions[1]= "2)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[1]= new Array();
 choices[1][0] = "Estrasburgo.";
 choices[1][1] = "Bruselas.";
 choices[1][2] = "Luxemburgo.";
 choices[1][3] = "Par&iacute;s.";
 answers[1] = choices[1][1];
 units[1] = "5";
 comments[1] = "Id Pregunta: 10305. UNION EUROPEA";


//  Id pregunta: 10040 AÃ±o de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[2]= new Array();
 choices[2][0] = "Drupal";
 choices[2][1] = "Cassandra";
 choices[2][2] = "Wordpress";
 choices[2][3] = "OpenCMS";
 answers[2] = choices[2][1];
 units[2] = "99";
 comments[2] = "Id Pregunta: 10040. AGE A1 2015";


//  Id pregunta: 10516 AÃ±o de creación de pregunta: 2016
 questions[3]= "4)  Las Universidades p&uacute;blicas:";
 choices[3]= new Array();
 choices[3][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[3][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[3][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[3][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[3] = choices[3][1];
 units[3] = "7";
 comments[3] = "Id Pregunta: 10516. LEY 39/2015";


//  Id pregunta: 10391 AÃ±o de creación de pregunta: 2016
 questions[4]= "5)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[4]= new Array();
 choices[4][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[4][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[4][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[4][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[4] = choices[4][2];
 units[4] = "14";
 comments[4] = "Id Pregunta: 10391. POLITICAS DE IGUALDAD";


//  Id pregunta: 10424 AÃ±o de creación de pregunta: 2016
 questions[5]= "6)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[5]= new Array();
 choices[5][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[5][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[5][2] = "Ninguna es correcta.";
 choices[5][3] = "A y B son correctas.";
 answers[5] = choices[5][0];
 units[5] = "14";
 comments[5] = "Id Pregunta: 10424. POLITICAS DE IGUALDAD";


//  Id pregunta: 10213 AÃ±o de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[6]= new Array();
 choices[6][0] = "Cinco.";
 choices[6][1] = "Dos.";
 choices[6][2] = "Cuatro.";
 choices[6][3] = "Siete.";
 answers[6] = choices[6][0];
 units[6] = "1";
 comments[6] = "Id Pregunta: 10213. CONSTITUCION1978";


//  Id pregunta: 10647 AÃ±o de creación de pregunta: 2016
 questions[7]= "8)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[7]= new Array();
 choices[7][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[7][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[7][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[7][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[7] = choices[7][0];
 units[7] = "101";
 comments[7] = "Id Pregunta: 10647. Junta de Extremadura A1 2015";


//  Id pregunta: 10159 AÃ±o de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[8]= new Array();
 choices[8][0] = "verbalmente";
 choices[8][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[8][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[8][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[8] = choices[8][2];
 units[8] = "7";
 comments[8] = "Id Pregunta: 10159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 10054 AÃ±o de creación de pregunta: 2016
 questions[9]= "10)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[9]= new Array();
 choices[9][0] = "DoS";
 choices[9][1] = "Phishing";
 choices[9][2] = "Sniffing";
 choices[9][3] = "Spoofing";
 answers[9] = choices[9][3];
 units[9] = "119";
 comments[9] = "Id Pregunta: 10054. AGE A1 2015";


//  Id pregunta: 10452 AÃ±o de creación de pregunta: 2016
 questions[10]= "11)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[10]= new Array();
 choices[10][0] = "Los cr&eacute;ditos";
 choices[10][1] = "Las partidas presupuestarias";
 choices[10][2] = "Los derechos";
 choices[10][3] = "Las obligaciones";
 answers[10] = choices[10][3];
 units[10] = "10";
 comments[10] = "Id Pregunta: 10452. PRESUPUESTOS GENERALES";


//  Id pregunta: 10247 AÃ±o de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[11]= new Array();
 choices[11][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[11][1] = "Por Orden Ministerial.";
 choices[11][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[11][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[11] = choices[11][0];
 units[11] = "1";
 comments[11] = "Id Pregunta: 10247. CONSTITUCION1978";


//  Id pregunta: 10550 AÃ±o de creación de pregunta: 2016
 questions[12]= "13)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[12]= new Array();
 choices[12][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[12][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[12][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[12][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[12] = choices[12][3];
 units[12] = "26";
 comments[12] = "Id Pregunta: 10550. Gobernanza TIC";


//  Id pregunta: 10224 AÃ±o de creación de pregunta: 2016
 questions[13]= "14)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[13]= new Array();
 choices[13][0] = "Art&iacute;culo 16.2.";
 choices[13][1] = "Art&iacute;culo 17.1.";
 choices[13][2] = "Art&iacute;culo 18.1.";
 choices[13][3] = "Art&iacute;culo 18.2.";
 answers[13] = choices[13][2];
 units[13] = "1";
 comments[13] = "Id Pregunta: 10224. CONSTITUCION1978";


//  Id pregunta: 10289 AÃ±o de creación de pregunta: 2016
 questions[14]= "15)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[14]= new Array();
 choices[14][0] = "Tres a&ntilde;os.";
 choices[14][1] = "Dos a&ntilde;os y medio.";
 choices[14][2] = "Cinco a&ntilde;os.";
 choices[14][3] = "Seis a&ntilde;os.";
 answers[14] = choices[14][2];
 units[14] = "5";
 comments[14] = "Id Pregunta: 10289. UNION EUROPEA";


//  Id pregunta: 10365 AÃ±o de creación de pregunta: 2016
 questions[15]= "16)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[15]= new Array();
 choices[15][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[15][1] = "Unanimidad.";
 choices[15][2] = "Mayor&iacute;a cualificada.";
 choices[15][3] = "Mayor&iacute;a simple.";
 answers[15] = choices[15][3];
 units[15] = "5";
 comments[15] = "Id Pregunta: 10365. UNION EUROPEA";


//  Id pregunta: 10253 AÃ±o de creación de pregunta: 2016
 questions[16]= "17)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[16]= new Array();
 choices[16][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[16][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[16][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[16][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[16] = choices[16][3];
 units[16] = "1";
 comments[16] = "Id Pregunta: 10253. CONSTITUCION1978";


//  Id pregunta: 10221 AÃ±o de creación de pregunta: 2016
 questions[17]= "18)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[17]= new Array();
 choices[17][0] = "De los derechos y deberes fundamentales.";
 choices[17][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[17][2] = "Derechos y libertades.";
 choices[17][3] = "De la Corona.";
 answers[17] = choices[17][0];
 units[17] = "1";
 comments[17] = "Id Pregunta: 10221. CONSTITUCION1978";


//  Id pregunta: 10534 AÃ±o de creación de pregunta: 2016
 questions[18]= "19)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[18]= new Array();
 choices[18][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[18][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[18][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[18][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[18] = choices[18][2];
 units[18] = "7";
 comments[18] = "Id Pregunta: 10534. LEY 39/2015";


//  Id pregunta: 10293 AÃ±o de creación de pregunta: 2016
 questions[19]= "20)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[19]= new Array();
 choices[19][0] = "Estrasburgo.";
 choices[19][1] = "Bruselas.";
 choices[19][2] = "Luxemburgo.";
 choices[19][3] = "Holanda.";
 answers[19] = choices[19][0];
 units[19] = "5";
 comments[19] = "Id Pregunta: 10293. UNION EUROPEA";


//  Id pregunta: 10287 AÃ±o de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[20]= new Array();
 choices[20][0] = "Versi&oacute;n digital prioritaria.";
 choices[20][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[20][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[20][3] = "Apertura y transparencia.";
 answers[20] = choices[20][0];
 units[20] = "5";
 comments[20] = "Id Pregunta: 10287. UNION EUROPEA";


//  Id pregunta: 10626 AÃ±o de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[21]= new Array();
 choices[21][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[21][1] = "La Direcci&oacute;n de la Competencia.";
 choices[21][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[21][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[21] = choices[21][0];
 units[21] = "121";
 comments[21] = "Id Pregunta: 10626. Junta de Extremadura A1 2015";


//  Id pregunta: 10357 AÃ±o de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[22]= new Array();
 choices[22][0] = "El Parlamento y el Consejo.";
 choices[22][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[22][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[22][3] = "La Comisi&oacute;n y el Consejo.";
 answers[22] = choices[22][1];
 units[22] = "5";
 comments[22] = "Id Pregunta: 10357. UNION EUROPEA";


//  Id pregunta: 10297 AÃ±o de creación de pregunta: 2016
 questions[23]= "24)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[23]= new Array();
 choices[23][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[23][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[23][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[23][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[23] = choices[23][1];
 units[23] = "5";
 comments[23] = "Id Pregunta: 10297. UNION EUROPEA";


//  Id pregunta: 10174 AÃ±o de creación de pregunta: 2016
 questions[24]= "25)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[24]= new Array();
 choices[24][0] = "El derecho a la propiedad privada.";
 choices[24][1] = "El derecho de asociaci&oacute;n.";
 choices[24][2] = "El derecho de fundaci&oacute;n.";
 choices[24][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[24] = choices[24][1];
 units[24] = "1";
 comments[24] = "Id Pregunta: 10174. CONSTITUCION1978";


//  Id pregunta: 10100 AÃ±o de creación de pregunta: 2016
 questions[25]= "26)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[25]= new Array();
 choices[25][0] = "Bases de datos orientadas a filas";
 choices[25][1] = "Bases de datos orientadas a documentos";
 choices[25][2] = "Bases de datos de clave/valor";
 choices[25][3] = "Bases de datos orientadas a objetos";
 answers[25] = choices[25][0];
 units[25] = "73";
 comments[25] = "Id Pregunta: 10100. ";


//  Id pregunta: 10542 AÃ±o de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[26]= new Array();
 choices[26][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[26][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[26][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[26][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[26] = choices[26][0];
 units[26] = "26";
 comments[26] = "Id Pregunta: 10542. Gobernanza TIC";


//  Id pregunta: 10356 AÃ±o de creación de pregunta: 2016
 questions[27]= "28)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[27]= new Array();
 choices[27][0] = "No se aplican directamente en los Estados.";
 choices[27][1] = "No son vinculantes.";
 choices[27][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[27][3] = "Tienen alcance general.";
 answers[27] = choices[27][0];
 units[27] = "5";
 comments[27] = "Id Pregunta: 10356. UNION EUROPEA";


//  Id pregunta: 10067 AÃ±o de creación de pregunta: 2016
 questions[28]= "29)  En Internet, la entidad encargada de la coordinaci&oacute;n de los N&uacute;meros de Sistema Aut&oacute;nomo (Autonomous System Numbers - ASN) usados por varios protocolos de enrutamiento, es:";
 choices[28]= new Array();
 choices[28][0] = "IANA";
 choices[28][1] = "ISOC";
 choices[28][2] = "IETF";
 choices[28][3] = "IAB";
 answers[28] = choices[28][0];
 units[28] = "103";
 comments[28] = "Id Pregunta: 10067. AGE A1 2015";


//  Id pregunta: 10673 AÃ±o de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale cual de los siguientes factores no contribuye a la sostenibilidad del sistema de pensiones:";
 choices[29]= new Array();
 choices[29][0] = "El aumento de la esperanza de vida.";
 choices[29][1] = "La mejora del &iacute;ndice de natalidad.";
 choices[29][2] = "La reducci&oacute;n del desempleo.";
 choices[29][3] = "El incremento de la edad de jubilaci&oacute;n.";
 answers[29] = choices[29][0];
 units[29] = "14";
 comments[29] = "Id Pregunta: 10673. Estructura social";


//  Id pregunta: 10028 AÃ±o de creación de pregunta: 2016
 questions[30]= "31)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[30]= new Array();
 choices[30][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[30][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[30][2] = "Crea una copia del proceso que hace la llamada.";
 choices[30][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[30] = choices[30][2];
 units[30] = "57";
 comments[30] = "Id Pregunta: 10028. AGE A1 2015";


//  Id pregunta: 10411 AÃ±o de creación de pregunta: 2016
 questions[31]= "32)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[31]= new Array();
 choices[31][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[31][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[31][2] = "Ninguna es correcta.";
 choices[31][3] = "A y B son correctas.";
 answers[31] = choices[31][1];
 units[31] = "14";
 comments[31] = "Id Pregunta: 10411. POLITICAS DE IGUALDAD";


//  Id pregunta: 10316 AÃ±o de creación de pregunta: 2016
 questions[32]= "33)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[32]= new Array();
 choices[32][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[32][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[32][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[32][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[32] = choices[32][1];
 units[32] = "5";
 comments[32] = "Id Pregunta: 10316. UNION EUROPEA";


//  Id pregunta: 10254 AÃ±o de creación de pregunta: 2016
 questions[33]= "34)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[33]= new Array();
 choices[33][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[33][1] = "La libertad sexual y religiosa.";
 choices[33][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[33][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[33] = choices[33][3];
 units[33] = "1";
 comments[33] = "Id Pregunta: 10254. CONSTITUCION1978";


//  Id pregunta: 10302 AÃ±o de creación de pregunta: 2016
 questions[34]= "35)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[34]= new Array();
 choices[34][0] = "Cinco a&ntilde;os.";
 choices[34][1] = "Cuatro a&ntilde;os.";
 choices[34][2] = "Tres a&ntilde;os.";
 choices[34][3] = "Seis meses.";
 answers[34] = choices[34][2];
 units[34] = "5";
 comments[34] = "Id Pregunta: 10302. UNION EUROPEA";


//  Id pregunta: 10524 AÃ±o de creación de pregunta: 2016
 questions[35]= "36)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[35]= new Array();
 choices[35][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[35][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[35][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[35][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[35] = choices[35][3];
 units[35] = "7";
 comments[35] = "Id Pregunta: 10524. LEY 39/2015";


//  Id pregunta: 10543 AÃ±o de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[36]= new Array();
 choices[36][0] = "ISO/IEC 31000";
 choices[36][1] = "ISO/IEC 14000";
 choices[36][2] = "ISO/IEC 38500";
 choices[36][3] = "ISO/IEC 18000";
 answers[36] = choices[36][2];
 units[36] = "26";
 comments[36] = "Id Pregunta: 10543. Gobernanza TIC";


//  Id pregunta: 10151 AÃ±o de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[37]= new Array();
 choices[37][0] = "las personas jur&iacute;dicas ";
 choices[37][1] = "las entidades con personalidad jur&iacute;dica";
 choices[37][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[37][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[37] = choices[37][1];
 units[37] = "7";
 comments[37] = "Id Pregunta: 10151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 10146 AÃ±o de creación de pregunta: 2016
 questions[38]= "39)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[38]= new Array();
 choices[38][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[38][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[38][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[38][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[38] = choices[38][0];
 units[38] = "8";
 comments[38] = "Id Pregunta: 10146. Ley 39/2015, Art&iacute;culo 107";


//  Id pregunta: 10446 AÃ±o de creación de pregunta: 2016
 questions[39]= "40)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[39]= new Array();
 choices[39][0] = "Ejecutivo";
 choices[39][1] = "Limitativo";
 choices[39][2] = "Estimativo";
 choices[39][3] = "Progresivo";
 answers[39] = choices[39][2];
 units[39] = "10";
 comments[39] = "Id Pregunta: 10446. PRESUPUESTOS GENERALES";


//  Id pregunta: 10096 AÃ±o de creación de pregunta: 2016
 questions[40]= "41)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[40]= new Array();
 choices[40][0] = "VMware ESX";
 choices[40][1] = "XenServer";
 choices[40][2] = "Alfresco";
 choices[40][3] = "Microsoft Hyper-V";
 answers[40] = choices[40][2];
 units[40] = "54";
 comments[40] = "Id Pregunta: 10096. AGE A1 2015";


//  Id pregunta: 10065 AÃ±o de creación de pregunta: 2016
 questions[41]= "42)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[41]= new Array();
 choices[41][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[41][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[41][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[41][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[41] = choices[41][2];
 units[41] = "53";
 comments[41] = "Id Pregunta: 10065. AGE A1 2015";


//  Id pregunta: 10561 AÃ±o de creación de pregunta: 2016
 questions[42]= "43)  El plan nacional de ciudades inteligentes...";
 choices[42]= new Array();
 choices[42][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[42][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[42][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[42][3] = "No existe";
 answers[42] = choices[42][1];
 units[42] = "19";
 comments[42] = "Id Pregunta: 10561. Ciudades Inteligentes";


//  Id pregunta: 10171 AÃ±o de creación de pregunta: 2016
 questions[43]= "44)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[43]= new Array();
 choices[43][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[43][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[43][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[43][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[43] = choices[43][3];
 units[43] = "19";
 comments[43] = "Id Pregunta: 10171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 10611 AÃ±o de creación de pregunta: 2016
 questions[44]= "45)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[44]= new Array();
 choices[44][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[44][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[44][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[44][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[44] = choices[44][1];
 units[44] = "63";
 comments[44] = "Id Pregunta: 10611. Junta de Extremadura A1 2015";


//  Id pregunta: 10574 AÃ±o de creación de pregunta: 2016
 questions[45]= "46)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[45]= new Array();
 choices[45][0] = "Mercurial, Git y Apache Subversion.";
 choices[45][1] = "Gimp, Mercurial y Git.";
 choices[45][2] = "RedMine, Planner y OpenProj.";
 choices[45][3] = "Cassandra, Git y REDIS.";
 answers[45] = choices[45][0];
 units[45] = "92";
 comments[45] = "Id Pregunta: 10574. Tema 92. TAI 2016.";


//  Id pregunta: 10600 AÃ±o de creación de pregunta: 2016
 questions[46]= "47)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[46]= new Array();
 choices[46][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[46][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[46][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[46][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[46] = choices[46][2];
 units[46] = "108";
 comments[46] = "Id Pregunta: 10600. Junta de Extremadura A1 2015";


//  Id pregunta: 10327 AÃ±o de creación de pregunta: 2016
 questions[47]= "48)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[47]= new Array();
 choices[47][0] = "X.";
 choices[47][1] = "XIX.";
 choices[47][2] = "XV.";
 choices[47][3] = "XIII.";
 answers[47] = choices[47][1];
 units[47] = "5";
 comments[47] = "Id Pregunta: 10327. UNION EUROPEA";


//  Id pregunta: 10111 AÃ±o de creación de pregunta: 2016
 questions[48]= "49)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[48]= new Array();
 choices[48][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[48][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[48][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[48][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[48] = choices[48][0];
 units[48] = "15";
 comments[48] = "Id Pregunta: 10111. ";


//  Id pregunta: 10358 AÃ±o de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[49]= new Array();
 choices[49][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[49][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[49][2] = "c) Todas las respuestas son correctas.";
 choices[49][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[49] = choices[49][1];
 units[49] = "5";
 comments[49] = "Id Pregunta: 10358. UNION EUROPEA";


//  Id pregunta: 10214 AÃ±o de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[50]= new Array();
 choices[50][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[50][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[50][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[50][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[50] = choices[50][0];
 units[50] = "1";
 comments[50] = "Id Pregunta: 10214. CONSTITUCION1978";


//  Id pregunta: 10571 AÃ±o de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[51]= new Array();
 choices[51][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[51][1] = "Entrada en la Uni&oacute;n Europea";
 choices[51][2] = "Pactos de la Moncloa";
 choices[51][3] = "Ingreso en la ONU";
 answers[51] = choices[51][3];
 units[51] = "12";
 comments[51] = "Id Pregunta: 10571. Modelo econ&oacute;mico";


//  Id pregunta: 10390 AÃ±o de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[52]= new Array();
 choices[52][0] = "El Consejo Nacional de la Mujer.";
 choices[52][1] = "El Consejo de la Mujer.";
 choices[52][2] = "El Instituto de la Mujer.";
 choices[52][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[52] = choices[52][3];
 units[52] = "14";
 comments[52] = "Id Pregunta: 10390. POLITICAS DE IGUALDAD";


//  Id pregunta: 10674 AÃ±o de creación de pregunta: 2016
 questions[53]= "54)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[53]= new Array();
 choices[53][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[53][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[53][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[53][3] = "Todas las anteriores son correctas.";
 answers[53] = choices[53][3];
 units[53] = "47";
 comments[53] = "Id Pregunta: 10674. Receta electr&oacute;nica";


//  Id pregunta: 10526 AÃ±o de creación de pregunta: 2016
 questions[54]= "55)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[54]= new Array();
 choices[54][0] = "tienen capacidad de obrar limitada";
 choices[54][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[54][2] = "no tienen capacidad de obrar";
 choices[54][3] = "ninguna es correcta";
 answers[54] = choices[54][2];
 units[54] = "7";
 comments[54] = "Id Pregunta: 10526. LEY 39/2015";


//  Id pregunta: 10578 AÃ±o de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[55]= new Array();
 choices[55][0] = "Fue elaborada y aprobada por la CETIC";
 choices[55][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[55][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[55][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[55] = choices[55][1];
 units[55] = "19";
 comments[55] = "Id Pregunta: 10578. Estrategia TIC";


//  Id pregunta: 10385 AÃ±o de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[56]= new Array();
 choices[56][0] = "Anualmente por el Consejo de Ministros";
 choices[56][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[56][2] = "Al final de cada legislatura por el Gobierno";
 choices[56][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[56] = choices[56][0];
 units[56] = "14";
 comments[56] = "Id Pregunta: 10385. POLITICAS DE IGUALDAD";


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


//  Id pregunta: 10092 AÃ±o de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[58]= new Array();
 choices[58][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[58][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[58][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[58][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[58] = choices[58][0];
 units[58] = "48";
 comments[58] = "Id Pregunta: 10092. AGE A1 2015";


//  Id pregunta: 10599 AÃ±o de creación de pregunta: 2016
 questions[59]= "60)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[59]= new Array();
 choices[59][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[59][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[59][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[59][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[59] = choices[59][2];
 units[59] = "45";
 comments[59] = "Id Pregunta: 10599. Junta de Extremadura A1 2015";


//  Id pregunta: 10184 AÃ±o de creación de pregunta: 2016
 questions[60]= "61)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[60]= new Array();
 choices[60][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[60][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[60][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[60][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[60] = choices[60][2];
 units[60] = "1";
 comments[60] = "Id Pregunta: 10184. CONSTITUCION1978";


//  Id pregunta: 10072 AÃ±o de creación de pregunta: 2016
 questions[61]= "62)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[61]= new Array();
 choices[61][0] = "OASIS ha definido una notaci&oacute;n gr&aacute;fica est&aacute;ndar para WS-BPEL.";
 choices[61][1] = "BPEL4People es una extensi&oacute;n sobre WS-BPEL realizada para dar cobertura a escenarios que involucran interacci&oacute;n de personas con procesos de negocio.";
 choices[61][2] = "WS-BPEL es un lenguaje dise&ntilde;ado para el control distribuido de la invocaci&oacute;n de diferentes servicios Web que modelan un proceso de negocio.";
 choices[61][3] = "XPDL es una especificaci&oacute;n de lenguaje de definici&oacute;n de procesos creada por OASIS.";
 answers[61] = choices[61][1];
 units[61] = "86";
 comments[61] = "Id Pregunta: 10072. AGE A1 2015";


//  Id pregunta: 10341 AÃ±o de creación de pregunta: 2016
 questions[62]= "63)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[62]= new Array();
 choices[62][0] = "623";
 choices[62][1] = "649";
 choices[62][2] = "626";
 choices[62][3] = "565";
 answers[62] = choices[62][2];
 units[62] = "5";
 comments[62] = "Id Pregunta: 10341. UNION EUROPEA";


//  Id pregunta: 10387 AÃ±o de creación de pregunta: 2016
 questions[63]= "64)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[63]= new Array();
 choices[63][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[63][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[63][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[63][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[63] = choices[63][3];
 units[63] = "14";
 comments[63] = "Id Pregunta: 10387. POLITICAS DE IGUALDAD";


//  Id pregunta: 10018 AÃ±o de creación de pregunta: 2016
 questions[64]= "65)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[64]= new Array();
 choices[64][0] = "Aplicaci&oacute;n";
 choices[64][1] = "Sesi&oacute;n";
 choices[64][2] = "Presentaci&oacute;n";
 choices[64][3] = "Transporte";
 answers[64] = choices[64][2];
 units[64] = "105";
 comments[64] = "Id Pregunta: 10018. AGE A1 2015";


//  Id pregunta: 10584 AÃ±o de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[65]= new Array();
 choices[65][0] = "Bienalmente";
 choices[65][1] = "Anualmente";
 choices[65][2] = "Semestralmente";
 choices[65][3] = "Cada cuatro a&ntilde;os";
 answers[65] = choices[65][1];
 units[65] = "19";
 comments[65] = "Id Pregunta: 10584. Estrategia TIC";


//  Id pregunta: 10505 AÃ±o de creación de pregunta: 2016
 questions[66]= "67)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[66]= new Array();
 choices[66][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[66][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[66][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[66][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[66] = choices[66][3];
 units[66] = "10";
 comments[66] = "Id Pregunta: 10505. PRESUPUESTOS GENERALES";


//  Id pregunta: 10236 AÃ±o de creación de pregunta: 2016
 questions[67]= "68)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[67]= new Array();
 choices[67][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[67][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[67][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[67][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[67] = choices[67][3];
 units[67] = "1";
 comments[67] = "Id Pregunta: 10236. CONSTITUCION1978";


//  Id pregunta: 10568 AÃ±o de creación de pregunta: 2016
 questions[68]= "69)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[68]= new Array();
 choices[68][0] = "Alrededor de un 26% del PIB";
 choices[68][1] = "Alrededor de un 11% del PIB";
 choices[68][2] = "Alrededor de un 34% del PIB";
 choices[68][3] = "Alrededor de un 7% del PIB";
 answers[68] = choices[68][1];
 units[68] = "12";
 comments[68] = "Id Pregunta: 10568. Modelo econ&oacute;mico";


//  Id pregunta: 10605 AÃ±o de creación de pregunta: 2016
 questions[69]= "70)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[69]= new Array();
 choices[69][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[69][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[69][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[69][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[69] = choices[69][2];
 units[69] = "101";
 comments[69] = "Id Pregunta: 10605. Junta de Extremadura A1 2015";


//  Id pregunta: 10389 AÃ±o de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[70]= new Array();
 choices[70][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[70][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[70][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[70][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[70] = choices[70][0];
 units[70] = "14";
 comments[70] = "Id Pregunta: 10389. POLITICAS DE IGUALDAD";


//  Id pregunta: 10346 AÃ±o de creación de pregunta: 2016
 questions[71]= "72)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[71]= new Array();
 choices[71][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[71][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[71][2] = "Cinco a&ntilde;os.";
 choices[71][3] = "Ninguna es correcta.";
 answers[71] = choices[71][2];
 units[71] = "5";
 comments[71] = "Id Pregunta: 10346. UNION EUROPEA";


//  Id pregunta: 10398 AÃ±o de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[72]= new Array();
 choices[72][0] = "Art. 13, L.O.3/2007.";
 choices[72][1] = "Art. 14, L.O.3/2007.";
 choices[72][2] = "Art. 11, L.O.3/2007.";
 choices[72][3] = "Ninguna es correcta.";
 answers[72] = choices[72][2];
 units[72] = "14";
 comments[72] = "Id Pregunta: 10398. POLITICAS DE IGUALDAD";


//  Id pregunta: 10160 AÃ±o de creación de pregunta: 2016
 questions[73]= "74)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[73]= new Array();
 choices[73][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[73][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[73][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[73][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[73] = choices[73][1];
 units[73] = "19";
 comments[73] = "Id Pregunta: 10160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 10189 AÃ±o de creación de pregunta: 2016
 questions[74]= "75)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:";
 choices[74]= new Array();
 choices[74][0] = "Ley Org&aacute;nica.";
 choices[74][1] = "Ley de Bases.";
 choices[74][2] = "Ley ordinaria.";
 choices[74][3] = "Mandato.";
 answers[74] = choices[74][1];
 units[74] = "1";
 comments[74] = "Id Pregunta: 10189. CONSTITUCION1978";


//  Id pregunta: 10562 AÃ±o de creación de pregunta: 2016
 questions[75]= "76)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[75]= new Array();
 choices[75][0] = "Entre 1973 y 1978";
 choices[75][1] = "Entre 1992 y 1996";
 choices[75][2] = "Entre 1978 y 1985";
 choices[75][3] = "Entre 2008 y 2013";
 answers[75] = choices[75][2];
 units[75] = "12";
 comments[75] = "Id Pregunta: 10562. Modelo econ&oacute;mico";


//  Id pregunta: 10029 AÃ±o de creación de pregunta: 2016
 questions[76]= "77)  De acuerdo con el art&iacute;culo 62 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, se&ntilde;ale la respuesta correcta:";
 choices[76]= new Array();
 choices[76][0] = "El uso del dominio p&uacute;blico radioel&eacute;ctrico s&oacute;lo puede ser de dos tipos: especial o privativo.";
 choices[76][1] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico precisa de t&iacute;tulo habilitante.";
 choices[76][2] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se realiza mediante la explotaci&oacute;n en exclusiva, o por un n&uacute;mero limitado de usuarios, de determinadas frecuencias en un mismo &aacute;mbito f&iacute;sico de aplicaci&oacute;n.";
 choices[76][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se lleve a cabo de las bandas de frecuencias habilitadas para su explotaci&oacute;n de forma compartida, sin limitaci&oacute;n de n&uacute;mero de operadores o usuarios y con las condiciones t&eacute;cnicas y para los servicios que se establezcan en cada caso.";
 answers[76] = choices[76][2];
 units[76] = "121";
 comments[76] = "Id Pregunta: 10029. AGE A1 2015";


//  Id pregunta: 10298 AÃ±o de creación de pregunta: 2016
 questions[77]= "78)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[77]= new Array();
 choices[77][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[77][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[77][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[77][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[77] = choices[77][1];
 units[77] = "5";
 comments[77] = "Id Pregunta: 10298. UNION EUROPEA";


//  Id pregunta: 10552 AÃ±o de creación de pregunta: 2016
 questions[78]= "79)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[78]= new Array();
 choices[78][0] = "Establecer redes de telecomunicaciones continentales";
 choices[78][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[78][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[78][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[78] = choices[78][0];
 units[78] = "17";
 comments[78] = "Id Pregunta: 10552. Mercado &Uacute;nico Digital";


//  Id pregunta: 10633 AÃ±o de creación de pregunta: 2016
 questions[79]= "80)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[79]= new Array();
 choices[79][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[79][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[79][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[79][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[79] = choices[79][3];
 units[79] = "56";
 comments[79] = "Id Pregunta: 10633. Junta de Extremadura A1 2015";


//  Id pregunta: 10593 AÃ±o de creación de pregunta: 2016
 questions[80]= "81)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[80]= new Array();
 choices[80][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[80][1] = "La CETIC";
 choices[80][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[80][3] = "El MHFP";
 answers[80] = choices[80][0];
 units[80] = "19";
 comments[80] = "Id Pregunta: 10593. Estrategia TIC";


//  Id pregunta: 10345 AÃ±o de creación de pregunta: 2016
 questions[81]= "82)  El procedimiento de dictamen simple o dictamen consultivo significa que:";
 choices[81]= new Array();
 choices[81][0] = "El Consejo debe obtener la aprobaci&oacute;n del Parlamento Europeo para que se tomen determinadas decisiones de primera importancia.";
 choices[81][1] = "Por el que se da poder al Parlamento Europeo para una mayor posibilidad de influir sobre el proceso legislativo mediante una &quot;doble lectura&quot; de las propuestas legislativas de la Comisi&oacute;n.";
 choices[81][2] = "Por el que se da poder al Parlamento Europeo para aprobar disposiciones conjuntamente con el Consejo.";
 choices[81][3] = "El Consejo consulte al Parlamento Europeo y tome sus puntos de vista en consideraci&oacute;n.";
 answers[81] = choices[81][3];
 units[81] = "5";
 comments[81] = "Id Pregunta: 10345. UNION EUROPEA";


//  Id pregunta: 10466 AÃ±o de creación de pregunta: 2016
 questions[82]= "83)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[82]= new Array();
 choices[82][0] = "Con el a&ntilde;o anterior.";
 choices[82][1] = "Con los tres a&ntilde;os anteriores.";
 choices[82][2] = "Con el a&ntilde;o natural.";
 choices[82][3] = "Con los dos a&ntilde;os anteriores.";
 answers[82] = choices[82][2];
 units[82] = "10";
 comments[82] = "Id Pregunta: 10466. PRESUPUESTOS GENERALES";


//  Id pregunta: 10545 AÃ±o de creación de pregunta: 2016
 questions[83]= "84)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[83]= new Array();
 choices[83][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[83][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[83][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[83][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[83] = choices[83][1];
 units[83] = "26";
 comments[83] = "Id Pregunta: 10545. Gobernanza TIC";


//  Id pregunta: 10037 AÃ±o de creación de pregunta: 2016
 questions[84]= "85)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[84]= new Array();
 choices[84][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[84][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[84][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[84][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[84] = choices[84][3];
 units[84] = "66";
 comments[84] = "Id Pregunta: 10037. AGE A1 2015";


//  Id pregunta: 10107 AÃ±o de creación de pregunta: 2016
 questions[85]= "86)  Son bases de datos NoSQL orientadas a objetos:";
 choices[85]= new Array();
 choices[85][0] = "GemStone";
 choices[85][1] = "Zope Object DB";
 choices[85][2] = "Las dos anteriores";
 choices[85][3] = "Solo B)";
 answers[85] = choices[85][2];
 units[85] = "73";
 comments[85] = "Id Pregunta: 10107. ";


//  Id pregunta: 10470 AÃ±o de creación de pregunta: 2016
 questions[86]= "87)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[86]= new Array();
 choices[86][0] = "El Ministro de Econom&iacute;a.";
 choices[86][1] = "El Gobierno.";
 choices[86][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[86][3] = "El Presidente del Gobierno.";
 answers[86] = choices[86][1];
 units[86] = "10";
 comments[86] = "Id Pregunta: 10470. PRESUPUESTOS GENERALES";


//  Id pregunta: 10643 AÃ±o de creación de pregunta: 2016
 questions[87]= "88)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[87]= new Array();
 choices[87][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[87][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[87][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[87][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[87] = choices[87][2];
 units[87] = "85";
 comments[87] = "Id Pregunta: 10643. Junta de Extremadura A1 2015";


//  Id pregunta: 10317 AÃ±o de creación de pregunta: 2016
 questions[88]= "89)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[88]= new Array();
 choices[88][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[88][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[88][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[88][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[88] = choices[88][3];
 units[88] = "5";
 comments[88] = "Id Pregunta: 10317. UNION EUROPEA";


//  Id pregunta: 10436 AÃ±o de creación de pregunta: 2016
 questions[89]= "90)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[89]= new Array();
 choices[89][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[89][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[89][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[89][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[89] = choices[89][2];
 units[89] = "43";
 comments[89] = "Id Pregunta: 10436. SERVICIOS COMUNES";


//  Id pregunta: 10164 AÃ±o de creación de pregunta: 2016
 questions[90]= "91)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[90]= new Array();
 choices[90][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[90][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[90][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[90][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[90] = choices[90][1];
 units[90] = "19";
 comments[90] = "Id Pregunta: 10164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";


//  Id pregunta: 10047 AÃ±o de creación de pregunta: 2016
 questions[91]= "92)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[91]= new Array();
 choices[91][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[91][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[91][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[91][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[91] = choices[91][3];
 units[91] = "78";
 comments[91] = "Id Pregunta: 10047. AGE A1 2015";


//  Id pregunta: 10245 AÃ±o de creación de pregunta: 2016
 questions[92]= "93)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[92]= new Array();
 choices[92][0] = "De los derechos y deberes fundamentales.";
 choices[92][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[92][2] = "Derechos y libertades.";
 choices[92][3] = "De la Corona.";
 answers[92] = choices[92][1];
 units[92] = "1";
 comments[92] = "Id Pregunta: 10245. CONSTITUCION1978";


//  Id pregunta: 10614 AÃ±o de creación de pregunta: 2016
 questions[93]= "94)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[93]= new Array();
 choices[93][0] = "192.228.0.0";
 choices[93][1] = "192.228.8.0";
 choices[93][2] = "192.228.16.0";
 choices[93][3] = "192.228.17.0";
 answers[93] = choices[93][2];
 units[93] = "109";
 comments[93] = "Id Pregunta: 10614. Junta de Extremadura A1 2015";


//  Id pregunta: 10374 AÃ±o de creación de pregunta: 2016
 questions[94]= "95)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[94]= new Array();
 choices[94][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[94][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[94][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[94][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[94] = choices[94][3];
 units[94] = "5";
 comments[94] = "Id Pregunta: 10374. UNION EUROPEA";


//  Id pregunta: 10023 AÃ±o de creación de pregunta: 2016
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[95]= new Array();
 choices[95][0] = "SPARQL";
 choices[95][1] = "UnQL";
 choices[95][2] = "XQUERY";
 choices[95][3] = "RQL";
 answers[95] = choices[95][0];
 units[95] = "74";
 comments[95] = "Id Pregunta: 10023. AGE A1 2015";


//  Id pregunta: 10277 AÃ±o de creación de pregunta: 2016
 questions[96]= "97)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[96]= new Array();
 choices[96][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[96][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[96][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[96][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[96] = choices[96][2];
 units[96] = "22";
 comments[96] = "Id Pregunta: 10277. LEY DE TRANSPARENCIA";


//  Id pregunta: 10594 AÃ±o de creación de pregunta: 2016
 questions[97]= "98)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[97]= new Array();
 choices[97][0] = "Seguridad Social y AEAT";
 choices[97][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[97][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[97][3] = "Todos los anteriores";
 answers[97] = choices[97][3];
 units[97] = "19";
 comments[97] = "Id Pregunta: 10594. Estrategia TIC";


//  Id pregunta: 10050 AÃ±o de creación de pregunta: 2016
 questions[98]= "99)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas del DNI electr&oacute;nico es exclusiva del DNIe 3.0?";
 choices[98]= new Array();
 choices[98][0] = "Cumple la norma ISO 7816 para tarjetas inteligentes.";
 choices[98][1] = "Emplea la tecnolog&iacute;a inal&aacute;mbrica NFC.";
 choices[98][2] = "Contiene certificados de componente, autenticaci&oacute;n y firma.";
 choices[98][3] = "Sus certificados cumplen la norma X509 v3.";
 answers[98] = choices[98][1];
 units[98] = "78";
 comments[98] = "Id Pregunta: 10050. AGE A1 2015";


//  Id pregunta: 10149 AÃ±o de creación de pregunta: 2016
 questions[99]= "100)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[99]= new Array();
 choices[99][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[99][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[99][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[99][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[99] = choices[99][2];
 units[99] = "7";
 comments[99] = "Id Pregunta: 10149. Ley 39/2015, Art&iacute;culo 132";


