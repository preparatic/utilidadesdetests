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

//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[0]= new Array();
 choices[0][0] = "117.5";
 choices[0][1] = "117.1";
 choices[0][2] = "116";
 choices[0][3] = "15";
 answers[0] = choices[0][0];
 units[0] = "1";
 comments[0] = "Id Pregunta: 260. CONSTITUCION1978";


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[1]= new Array();
 choices[1][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[1][1] = "Solamente el Congreso.";
 choices[1][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[1][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[1] = choices[1][0];
 units[1] = "1";
 comments[1] = "Id Pregunta: 176. CONSTITUCION1978";


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[2]= "3)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[2]= new Array();
 choices[2][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[2][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[2][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[2][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[2] = choices[2][1];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 838. Ley 40/2015";


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[3]= "4)  Las Universidades p&uacute;blicas:";
 choices[3]= new Array();
 choices[3][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[3][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[3][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[3][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[3] = choices[3][1];
 units[3] = "7";
 comments[3] = "Id Pregunta: 518. LEY 39/2015";


//  Id pregunta: 92 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[4]= new Array();
 choices[4][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[4][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[4][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[4][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[4] = choices[4][0];
 units[4] = "48";
 comments[4] = "Id Pregunta: 92. AGE A1 2015";


//  Id pregunta: 499 Año de creación de pregunta: 2016
 questions[5]= "6)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[5]= new Array();
 choices[5][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[5][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[5][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[5][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[5] = choices[5][3];
 units[5] = "10";
 comments[5] = "Id Pregunta: 499. PRESUPUESTOS GENERALES";


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[6]= "7)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[6]= new Array();
 choices[6][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[6][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[6][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[6][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[6] = choices[6][1];
 units[6] = "14";
 comments[6] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[7]= new Array();
 choices[7][0] = "El Consejo Europeo.";
 choices[7][1] = "El Parlamento Europeo.";
 choices[7][2] = "El Consejo.";
 choices[7][3] = "La Comisi&oacute;n.";
 answers[7] = choices[7][3];
 units[7] = "5";
 comments[7] = "Id Pregunta: 361. UNION EUROPEA";


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[8]= "9)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[8]= new Array();
 choices[8][0] = "Las sociedades mercantiles estatales.";
 choices[8][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[8][2] = "Las respuestas a) y b) son correctas.";
 choices[8][3] = "Las respuestas a) y b) no son correctas.";
 answers[8] = choices[8][2];
 units[8] = "10";
 comments[8] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[9]= new Array();
 choices[9][0] = "El Tratado de Lisboa";
 choices[9][1] = "El Tratado de Amsterdam";
 choices[9][2] = "El Tratado de Niza";
 choices[9][3] = "El Acta &Uacute;nica Europea";
 answers[9] = choices[9][1];
 units[9] = "15";
 comments[9] = "Id Pregunta: 115. ";


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[10]= "11)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[10]= new Array();
 choices[10][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[10][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[10][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[10][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[10] = choices[10][2];
 units[10] = "1";
 comments[10] = "Id Pregunta: 177. CONSTITUCION1978";


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[11]= "12)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[11]= new Array();
 choices[11][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[11][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[11][2] = "a y b son correctas";
 choices[11][3] = "a y b son incorrectas";
 answers[11] = choices[11][2];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 783. Ley 40/2015";


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[12]= new Array();
 choices[12][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[12][1] = "El Gobierno.";
 choices[12][2] = "El Presidente del Gobierno.";
 choices[12][3] = "El Consejo de Ministros.";
 answers[12] = choices[12][1];
 units[12] = "10";
 comments[12] = "Id Pregunta: 490. PRESUPUESTOS GENERALES";


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[13]= new Array();
 choices[13][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[13][1] = "Pasivos financieros y transferencias de capital.";
 choices[13][2] = "Activos financieros y pasivos financieros.";
 choices[13][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[13] = choices[13][2];
 units[13] = "10";
 comments[13] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";


//  Id pregunta: 382 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[14]= new Array();
 choices[14][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[14][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[14][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[14][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[14] = choices[14][0];
 units[14] = "14";
 comments[14] = "Id Pregunta: 382. POLITICAS DE IGUALDAD";


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[15]= "16)  En el Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP el principio de transparencia:";
 choices[15]= new Array();
 choices[15][0] = "El seguimiento de la actividad de los funcionarios aumenta la eficacia de los servicios p&uacute;blicos.";
 choices[15][1] = "La transparencia facilita al ciudadano el acceso a los servicios p&uacute;blicos.";
 choices[15][2] = "Una continua monitorizaci&oacute;n de la actividad, junto a la evaluaci&oacute;n y difusi&oacute;n de resultados incrementa la satisfacci&oacute;n de los ciudadanos.";
 choices[15][3] = "El seguimiento y control de la actividad pol&iacute;tica disminuye las actividades ligadas a la corrupci&oacute;n.";
 answers[15] = choices[15][2];
 units[15] = "28";
 comments[15] = "Id Pregunta: 736. Estrategia TIC";


//  Id pregunta: 569 Año de creación de pregunta: 2016
 questions[16]= "17)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[16]= new Array();
 choices[16][0] = "Primario, que incluye la agricultura y la pesca";
 choices[16][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[16][2] = "Minero, junto con las exportaciones de comercio";
 choices[16][3] = "Servicios";
 answers[16] = choices[16][3];
 units[16] = "12";
 comments[16] = "Id Pregunta: 569. Modelo econ&oacute;mico";


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares en que se basa la Agenda Digital Europea?";
 choices[17]= new Array();
 choices[17][0] = "Promover un acceso a internet r&aacute;pido y ultrarr&aacute;pido para todos";
 choices[17][1] = "Implantar el mercado general europeo";
 choices[17][2] = "Fomentar la alfabetizaci&oacute;n, la capacitaci&oacute;n y la inclusi&oacute;n digitales";
 choices[17][3] = "Consolidar la confianza y la seguridad en l&iacute;nea";
 answers[17] = choices[17][1];
 units[17] = "19";
 comments[17] = "Id Pregunta: 758. Agenda Digital Europea";


//  Id pregunta: 574 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de la serie IEEE 802.11 se conoce como Fast Basic Service Set Transition, el cual est&aacute; enfocado a permitir la conexi&oacute;n continua de clientes en movimiento?";
 choices[18]= new Array();
 choices[18][0] = "IEEE 802.11p";
 choices[18][1] = "IEEE 802.11r";
 choices[18][2] = "IEEE 802.11v";
 choices[18][3] = "IEEE 802.11w";
 answers[18] = choices[18][1];
 units[18] = "112";
 comments[18] = "Id Pregunta: 574. Tema 112. TAI 2016.";


//  Id pregunta: 638 Año de creación de pregunta: 2016
 questions[19]= "20)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[19]= new Array();
 choices[19][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[19][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[19][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[19][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[19] = choices[19][2];
 units[19] = "57";
 comments[19] = "Id Pregunta: 638. Junta de Extremadura A1 2015";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[20]= "21)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[20]= new Array();
 choices[20][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[20][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[20][2] = "A partir del 1 de enero de 2015";
 choices[20][3] = "A partir del 1 de julio de 2016";
 answers[20] = choices[20][1];
 units[20] = "77";
 comments[20] = "Id Pregunta: 692. Art&iacute;culo 52 del Reglamento 910/2014";


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[21]= "22)  Los Secretarios generales t&eacute;cnicos:";
 choices[21]= new Array();
 choices[21][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[21][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[21][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[21][3] = "todas son correctas";
 answers[21] = choices[21][3];
 units[21] = "4, 7, 8, 9";
 comments[21] = "Id Pregunta: 804. Ley 40/2015";


//  Id pregunta: 703 Año de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;ale la que NO corresponde a una herramienta de automatizaci&oacute;n de pruebas:";
 choices[22]= new Array();
 choices[22][0] = "Selenium";
 choices[22][1] = "JUnit";
 choices[22][2] = "Jenkins";
 choices[22][3] = "JMeter";
 answers[22] = choices[22][2];
 units[22] = "92";
 comments[22] = "Id Pregunta: 703. INTEGRACION CONTINUA";


//  Id pregunta: 16 Año de creación de pregunta: 2016
 questions[23]= "24)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[23]= new Array();
 choices[23][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[23][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[23][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[23][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[23] = choices[23][3];
 units[23] = "19";
 comments[23] = "Id Pregunta: 16. AGE A1 2015";


//  Id pregunta: 542 Año de creación de pregunta: 2016
 questions[24]= "25)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[24]= new Array();
 choices[24][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[24][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[24][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[24][3] = "todas son correctas";
 answers[24] = choices[24][3];
 units[24] = "7";
 comments[24] = "Id Pregunta: 542. LEY 39/2015";


//  Id pregunta: 646 Año de creación de pregunta: 2016
 questions[25]= "26)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[25]= new Array();
 choices[25][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[25][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[25][2] = "Funcionarios e interinos.";
 choices[25][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[25] = choices[25][3];
 units[25] = "20";
 comments[25] = "Id Pregunta: 646. Junta de Extremadura A1 2015";


//  Id pregunta: 274 Año de creación de pregunta: 2016
 questions[26]= "27)  La Ley 19/2013 de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno ha establecido el derecho:";
 choices[26]= new Array();
 choices[26][0] = "Al acceso a la informaci&oacute;n p&uacute;blica, en desarrollo de los t&eacute;rminos ya previstos por la Ley 11/2007, de acceso electr&oacute;nico de los ciudadano a los servicios p&uacute;blicos.";
 choices[26][1] = "Al acceso a la informaci&oacute;n p&uacute;blica, por primera vez en nuestra legislaci&oacute;n positiva.";
 choices[26][2] = "Al acceso a la informaci&oacute;n p&uacute;blica a trav&eacute;s del portal de transparencia.";
 choices[26][3] = "Al acceso a la informaci&oacute;n p&uacute;blica, con las limitaciones derivadas del posible perjuicio para la defensa, seguridad nacional o funciones administrativas de inspecci&oacute;n, entre otras.";
 answers[26] = choices[26][3];
 units[26] = "22";
 comments[26] = "Id Pregunta: 274. LEY DE TRANSPARENCIA";


//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[27]= "28)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[27]= new Array();
 choices[27][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[27][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[27][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[27][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[27] = choices[27][1];
 units[27] = "7";
 comments[27] = "Id Pregunta: 535. LEY 39/2015";


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[28]= "29)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[28]= new Array();
 choices[28][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[28][1] = "Protecci&oacute;n de su salud.";
 choices[28][2] = "Ninguna es correcta.";
 choices[28][3] = "A y B son correctas.";
 answers[28] = choices[28][1];
 units[28] = "14";
 comments[28] = "Id Pregunta: 430. POLITICAS DE IGUALDAD";


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[29]= "30)  En el sistema operativo Unix/Linux, el comando id:";
 choices[29]= new Array();
 choices[29][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[29][1] = "El comando id no existe.";
 choices[29][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[29][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[29] = choices[29][0];
 units[29] = "57";
 comments[29] = "Id Pregunta: 639. Junta de Extremadura A1 2015";


//  Id pregunta: 221 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[30]= new Array();
 choices[30][0] = "De los derechos y deberes fundamentales.";
 choices[30][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[30][2] = "Derechos y libertades.";
 choices[30][3] = "De la Corona.";
 answers[30] = choices[30][0];
 units[30] = "1";
 comments[30] = "Id Pregunta: 221. CONSTITUCION1978";


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[31]= "32)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[31]= new Array();
 choices[31][0] = "Estrasburgo.";
 choices[31][1] = "Bruselas.";
 choices[31][2] = "Luxemburgo.";
 choices[31][3] = "Par&iacute;s.";
 answers[31] = choices[31][1];
 units[31] = "5";
 comments[31] = "Id Pregunta: 305. UNION EUROPEA";


//  Id pregunta: 350 Año de creación de pregunta: 2016
 questions[32]= "33)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[32]= new Array();
 choices[32][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[32][1] = "Uno de sus miembros.";
 choices[32][2] = "La Comisi&oacute;n.";
 choices[32][3] = "Todas las respuestas son correctas.";
 answers[32] = choices[32][3];
 units[32] = "5";
 comments[32] = "Id Pregunta: 350. UNION EUROPEA";


//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[33]= "34)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[33]= new Array();
 choices[33][0] = "Prevenir las conductas discriminatorias.";
 choices[33][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[33][2] = "Todas son correctas.";
 choices[33][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[33] = choices[33][2];
 units[33] = "14";
 comments[33] = "Id Pregunta: 409. POLITICAS DE IGUALDAD";


//  Id pregunta: 674 Año de creación de pregunta: 2016
 questions[34]= "35)  En cuanto a la Historia Cl&iacute;nica Digital del Sistema Nacional de Salud, se&ntilde;ale cual de las siguientes afirmaciones es Incorrecta:";
 choices[34]= new Array();
 choices[34][0] = "Se ha implementado por mandato legal, tanto por la Ley 16/2003 de cohesi&oacute;n y calidad del Sistema Nacional de Salud, como por la Ley 41/2002 de Autonom&iacute;a del Paciente.";
 choices[34][1] = "Permite que los profesionales sanitarios puedan acceder a los datos de salud del paciente, cuando este se encuentre desplazado fuera de su Comunidad Aut&oacute;noma de origen y requiera asistencia sanitaria.";
 choices[34][2] = "De acuerdo a su dise&ntilde;o funcional, permite acceder a la totalidad de los contenidos existentes en la Historia Cl&iacute;nica Electr&oacute;nica de las Comunidades Aut&oacute;nomas.";
 choices[34][3] = "Gracias a ella, de acuerdo al informe CORA de Febrero de 2016, ya son 25,5 millones de ciudadanos los que disponen de informes cl&iacute;nicos en el Sstema Nacional de Salud.";
 answers[34] = choices[34][2];
 units[34] = "47";
 comments[34] = "Id Pregunta: 674. Historia Cl&iacute;nica Digital";


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[35]= new Array();
 choices[35][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[35][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[35][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[35][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[35] = choices[35][3];
 units[35] = "22";
 comments[35] = "Id Pregunta: 120. ";


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[36]= "37)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[36]= new Array();
 choices[36][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[36][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[36][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[36][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[36] = choices[36][2];
 units[36] = "7";
 comments[36] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";


//  Id pregunta: 333 Año de creación de pregunta: 2016
 questions[37]= "38)  Est&aacute;n legitimados para interponer el recurso de carencia del art. 175 TCE:";
 choices[37]= new Array();
 choices[37][0] = "Las instituciones comunitarias.";
 choices[37][1] = "Los Estados miembros y las instituciones comunitarias.";
 choices[37][2] = "Los Estados miembros.";
 choices[37][3] = "Los nacionales de los Estados miembros.";
 answers[37] = choices[37][1];
 units[37] = "5";
 comments[37] = "Id Pregunta: 333. UNION EUROPEA";


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[38]= new Array();
 choices[38][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[38][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[38][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[38][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[38] = choices[38][0];
 units[38] = "15";
 comments[38] = "Id Pregunta: 114. ";


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[39]= "40)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[39]= new Array();
 choices[39][0] = "Mercurial, Git y Apache Subversion.";
 choices[39][1] = "Gimp, Mercurial y Git.";
 choices[39][2] = "RedMine, Planner y OpenProj.";
 choices[39][3] = "Cassandra, Git y REDIS.";
 answers[39] = choices[39][0];
 units[39] = "92";
 comments[39] = "Id Pregunta: 576. Tema 92. TAI 2016.";


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[40]= new Array();
 choices[40][0] = "Orientaci&oacute;n a objetos";
 choices[40][1] = "MapReduce";
 choices[40][2] = "Pipeline filtering";
 choices[40][3] = "Programaci&oacute;n funcional";
 answers[40] = choices[40][1];
 units[40] = "73";
 comments[40] = "Id Pregunta: 661. ";


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[41]= new Array();
 choices[41][0] = "Bienalmente";
 choices[41][1] = "Anualmente";
 choices[41][2] = "Semestralmente";
 choices[41][3] = "Cada cuatro a&ntilde;os";
 answers[41] = choices[41][1];
 units[41] = "19";
 comments[41] = "Id Pregunta: 586. Estrategia TIC";


//  Id pregunta: 781 Año de creación de pregunta: 2016
 questions[42]= "43)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[42]= new Array();
 choices[42][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[42][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[42][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[42][3] = "todas son correctas";
 answers[42] = choices[42][3];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 781. Ley 40/2015";


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[43]= new Array();
 choices[43][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[43][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[43][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[43][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[43] = choices[43][0];
 units[43] = "19";
 comments[43] = "Id Pregunta: 589. Estrategia TIC";


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[44]= "45)  El Tribunal de Justicia se cre&oacute; en:";
 choices[44]= new Array();
 choices[44][0] = "El Tratado de la CECA.";
 choices[44][1] = "El Tratado de Niza.";
 choices[44][2] = "El Tratado de &Aacute;msterdam.";
 choices[44][3] = "El Tratado de Lisboa.";
 answers[44] = choices[44][0];
 units[44] = "5";
 comments[44] = "Id Pregunta: 308. UNION EUROPEA";


//  Id pregunta: 241 Año de creación de pregunta: 2016
 questions[45]= "46)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[45]= new Array();
 choices[45][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[45][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[45][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[45][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[45] = choices[45][0];
 units[45] = "1";
 comments[45] = "Id Pregunta: 241. CONSTITUCION1978";


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[46]= "47)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[46]= new Array();
 choices[46][0] = "Un recurso de incumplimiento.";
 choices[46][1] = "Recurso de carencia.";
 choices[46][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[46][3] = "Ninguna es correcta.";
 answers[46] = choices[46][2];
 units[46] = "5";
 comments[46] = "Id Pregunta: 370. UNION EUROPEA";


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[47]= "48)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[47]= new Array();
 choices[47][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[47][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[47][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[47][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[47] = choices[47][0];
 units[47] = "1";
 comments[47] = "Id Pregunta: 187. CONSTITUCION1978";


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[48]= new Array();
 choices[48][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[48][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[48][2] = "A) y B) son verdaderas";
 choices[48][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[48] = choices[48][2];
 units[48] = "73";
 comments[48] = "Id Pregunta: 106. ";


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[49]= "50)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[49]= new Array();
 choices[49][0] = "El Delegado del Gobierno.";
 choices[49][1] = "El Subdelegado del Gobierno.";
 choices[49][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[49][3] = "El Gobernador Civil.";
 answers[49] = choices[49][2];
 units[49] = "1";
 comments[49] = "Id Pregunta: 207. CONSTITUCION1978";


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[50]= new Array();
 choices[50][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[50][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[50][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[50][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[50] = choices[50][0];
 units[50] = "1";
 comments[50] = "Id Pregunta: 220. CONSTITUCION1978";


//  Id pregunta: 38 Año de creación de pregunta: 2016
 questions[51]= "52)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[51]= new Array();
 choices[51][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[51][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[51][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[51][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[51] = choices[51][3];
 units[51] = "62";
 comments[51] = "Id Pregunta: 38. AGE A1 2015";


//  Id pregunta: 578 Año de creación de pregunta: 2016
 questions[52]= "53)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[52]= new Array();
 choices[52][0] = "PostgreSQL";
 choices[52][1] = "Datawarehouse";
 choices[52][2] = "Snowflake";
 choices[52][3] = "CouchDB";
 answers[52] = choices[52][0];
 units[52] = "61";
 comments[52] = "Id Pregunta: 578. Tema 61. TAI 2016.";


//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[53]= new Array();
 choices[53][0] = "Art&iacute;culo 14 CE.";
 choices[53][1] = "Art&iacute;culo 9.2 CE.";
 choices[53][2] = "Art&iacute;culo 9.1 CE.";
 choices[53][3] = "Art&iacute;culo 13 CE.";
 answers[53] = choices[53][2];
 units[53] = "14";
 comments[53] = "Id Pregunta: 407. POLITICAS DE IGUALDAD";


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[54]= "55)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[54]= new Array();
 choices[54][0] = "A los cinco a&ntilde;os.";
 choices[54][1] = "A los dos a&ntilde;os.";
 choices[54][2] = "A los tres a&ntilde;os.";
 choices[54][3] = "A los cuatro a&ntilde;os.";
 answers[54] = choices[54][0];
 units[54] = "10";
 comments[54] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[55]= "56)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[55]= new Array();
 choices[55][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[55][1] = "1 de enero de 2015";
 choices[55][2] = "1 de enero de 2016";
 choices[55][3] = "1 de julio de 2016";
 answers[55] = choices[55][3];
 units[55] = "77";
 comments[55] = "Id Pregunta: 691. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale la respuesta correcta:";
 choices[56]= new Array();
 choices[56][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[56][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[56][2] = "Las respuestas A y B son correctas.";
 choices[56][3] = "Las respuestas A y B son falsas.";
 answers[56] = choices[56][2];
 units[56] = "5";
 comments[56] = "Id Pregunta: 279. UNION EUROPEA";


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[57]= "58)  El sector p&uacute;blico institucional se integra por:";
 choices[57]= new Array();
 choices[57][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[57][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[57][2] = "las Universidades p&uacute;blicas";
 choices[57][3] = "todas son correctas";
 answers[57] = choices[57][3];
 units[57] = "4, 7, 8, 9";
 comments[57] = "Id Pregunta: 766. Ley 40/2015";


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[58]= "59)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[58]= new Array();
 choices[58][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[58][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[58][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[58][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[58] = choices[58][3];
 units[58] = "57";
 comments[58] = "Id Pregunta: 640. Junta de Extremadura A1 2015";


//  Id pregunta: 842 Año de creación de pregunta: 2016
 questions[59]= "60)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[59]= new Array();
 choices[59][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[59][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[59][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[59][3] = "Todas son correctas.";
 answers[59] = choices[59][1];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 842. Ley 40/2015";


//  Id pregunta: 324 Año de creación de pregunta: 2016
 questions[60]= "61)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[60]= new Array();
 choices[60][0] = "Tres a&ntilde;os.";
 choices[60][1] = "Cuatro a&ntilde;os.";
 choices[60][2] = "Cinco a&ntilde;os.";
 choices[60][3] = "Seis a&ntilde;os.";
 answers[60] = choices[60][0];
 units[60] = "5";
 comments[60] = "Id Pregunta: 324. UNION EUROPEA";


//  Id pregunta: 8 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[61]= new Array();
 choices[61][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[61][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[61][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[61][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[61] = choices[61][2];
 units[61] = "26";
 comments[61] = "Id Pregunta: 8. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[62]= "63)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[62]= new Array();
 choices[62][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[62][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[62][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[62][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[62] = choices[62][0];
 units[62] = "60";
 comments[62] = "Id Pregunta: 651. Junta de Extremadura A1 2015";


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[63]= "64)  En qu&eacute; consiste el principio BASE:";
 choices[63]= new Array();
 choices[63][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[63][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[63][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[63][3] = "Todas las anteriores son falsas";
 answers[63] = choices[63][3];
 units[63] = "73";
 comments[63] = "Id Pregunta: 103. ";


//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[64]= "65)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[64]= new Array();
 choices[64][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[64][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[64][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[64][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[64] = choices[64][1];
 units[64] = "43";
 comments[64] = "Id Pregunta: 443. SERVICIOS COMUNES";


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[65]= "66)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[65]= new Array();
 choices[65][0] = "De ocho a&ntilde;os.";
 choices[65][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[65][2] = "Ambas son correctas.";
 choices[65][3] = "No existe un l&iacute;mite.";
 answers[65] = choices[65][0];
 units[65] = "14";
 comments[65] = "Id Pregunta: 432. POLITICAS DE IGUALDAD";


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[66]= "67)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[66]= new Array();
 choices[66][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[66][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[66][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[66][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[66] = choices[66][2];
 units[66] = "5";
 comments[66] = "Id Pregunta: 311. UNION EUROPEA";


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[67]= "68)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[67]= new Array();
 choices[67][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[67][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[67][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[67][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[67] = choices[67][2];
 units[67] = "1";
 comments[67] = "Id Pregunta: 190. CONSTITUCION1978";


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[68]= "69)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[68]= new Array();
 choices[68][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[68][1] = "Programa de cartas de servicios";
 choices[68][2] = "Programa para la mejora continua de las organizaciones.";
 choices[68][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[68] = choices[68][2];
 units[68] = "18, 20";
 comments[68] = "Id Pregunta: 747. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[69]= "70)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[69]= new Array();
 choices[69][0] = "El nombre y el tipo de correspondencia.";
 choices[69][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[69][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[69][3] = "El nombre y el grado.";
 answers[69] = choices[69][1];
 units[69] = "85";
 comments[69] = "Id Pregunta: 636. Junta de Extremadura A1 2015";


//  Id pregunta: 445 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l no es una funcionalidad que incorpora la versi&oacute;n 3.5 de Acceda?";
 choices[70]= new Array();
 choices[70][0] = "Gesti&oacute;n de notificaciones pendientes, notificadas y rehusadas (de forma expresa o vencido el plazo de caducidad).";
 choices[70][1] = "Remisi&oacute;n a Notific@, desde el m&oacute;dulo de gesti&oacute;n de ACCEDA, de las notificaciones que se emitan como parte de la tramitaci&oacute;n de los expedientes.";
 choices[70][2] = "Gesti&oacute;n de notificaciones pendientes, notificadas y rehusadas (de forma expresa o sin haber vencido el plazo de caducidad).";
 choices[70][3] = "Parametrizaci&oacute;n de las opciones de env&iacute;o: canal de notificaci&oacute;n - Sede-e ACCEDA y Carpeta Ciudadana; DEH obligatorio; DEH voluntario / env&iacute;o postal, etc.";
 answers[70] = choices[70][2];
 units[70] = "43";
 comments[70] = "Id Pregunta: 445. SERVICIOS COMUNES";


//  Id pregunta: 695 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[71]= new Array();
 choices[71][0] = "Jenkins";
 choices[71][1] = "Hudson";
 choices[71][2] = "SonarQube";
 choices[71][3] = "Todas lo son";
 answers[71] = choices[71][3];
 units[71] = "92";
 comments[71] = "Id Pregunta: 695. INTEGRACION CONTINUA";


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[72]= "73)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[72]= new Array();
 choices[72][0] = "El Consejo Europeo.";
 choices[72][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[72][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[72][3] = "El Parlamento Europeo.";
 answers[72] = choices[72][0];
 units[72] = "5";
 comments[72] = "Id Pregunta: 313. UNION EUROPEA";


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[73]= "74)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[73]= new Array();
 choices[73][0] = "De los interesados en el procedimiento";
 choices[73][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[73][2] = "Disposiciones generales";
 choices[73][3] = "De los actos administrativos";
 answers[73] = choices[73][2];
 units[73] = "7";
 comments[73] = "Id Pregunta: 522. LEY 39/2015";


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[74]= new Array();
 choices[74][0] = "al menos por 50 Diputados.";
 choices[74][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[74][2] = "por la Mesa del Congreso de los Diputados.";
 choices[74][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[74] = choices[74][1];
 units[74] = "1";
 comments[74] = "Id Pregunta: 183. CONSTITUCION1978";


