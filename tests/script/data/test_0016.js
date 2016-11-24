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

//  Id pregunta: 10318 Año de creación de pregunta: 2016
 questions[0]= "1)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[0]= new Array();
 choices[0][0] = "Consejos y Servicios.";
 choices[0][1] = "Servicios permanentes y no permanentes.";
 choices[0][2] = "Direcciones Generales.";
 choices[0][3] = "Direcciones ministeriales.";
 answers[0] = choices[0][2];
 units[0] = "5";
 comments[0] = "Id Pregunta: 10318. UNION EUROPEA";


//  Id pregunta: 10196 Año de creación de pregunta: 2016
 questions[1]= "2)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[1]= new Array();
 choices[1][0] = "Al Presidente del Gobierno.";
 choices[1][1] = "A las Cortes Generales";
 choices[1][2] = "A los electores.";
 choices[1][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[1] = choices[1][3];
 units[1] = "1";
 comments[1] = "Id Pregunta: 10196. CONSTITUCION1978";


//  Id pregunta: 10449 Año de creación de pregunta: 2016
 questions[2]= "3)  El cr&eacute;dito presupuestario es...";
 choices[2]= new Array();
 choices[2][0] = "El sujeto que realiza el gasto";
 choices[2][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[2][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[2][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[2] = choices[2][2];
 units[2] = "10";
 comments[2] = "Id Pregunta: 10449. PRESUPUESTOS GENERALES";


//  Id pregunta: 10012 Año de creación de pregunta: 2016
 questions[3]= "4)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[3]= new Array();
 choices[3][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[3][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[3][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[3][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[3] = choices[3][0];
 units[3] = "62";
 comments[3] = "Id Pregunta: 10012. AGE A1 2015";


//  Id pregunta: 10471 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[4]= new Array();
 choices[4][0] = "Org&aacute;nica.";
 choices[4][1] = "Contable.";
 choices[4][2] = "Econ&oacute;mica.";
 choices[4][3] = "Por programas.";
 answers[4] = choices[4][2];
 units[4] = "10";
 comments[4] = "Id Pregunta: 10471. PRESUPUESTOS GENERALES";


//  Id pregunta: 10037 Año de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[5]= new Array();
 choices[5][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[5][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[5][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[5][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[5] = choices[5][3];
 units[5] = "66";
 comments[5] = "Id Pregunta: 10037. AGE A1 2015";


//  Id pregunta: 10477 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[6]= new Array();
 choices[6][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[6][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[6][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[6][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[6] = choices[6][2];
 units[6] = "10";
 comments[6] = "Id Pregunta: 10477. PRESUPUESTOS GENERALES";


//  Id pregunta: 10584 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[7]= new Array();
 choices[7][0] = "Bienalmente";
 choices[7][1] = "Anualmente";
 choices[7][2] = "Semestralmente";
 choices[7][3] = "Cada cuatro a&ntilde;os";
 answers[7] = choices[7][1];
 units[7] = "19";
 comments[7] = "Id Pregunta: 10584. Estrategia TIC";


//  Id pregunta: 10390 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[8]= new Array();
 choices[8][0] = "El Consejo Nacional de la Mujer.";
 choices[8][1] = "El Consejo de la Mujer.";
 choices[8][2] = "El Instituto de la Mujer.";
 choices[8][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[8] = choices[8][3];
 units[8] = "14";
 comments[8] = "Id Pregunta: 10390. POLITICAS DE IGUALDAD";


//  Id pregunta: 10162 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[9]= new Array();
 choices[9][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[9][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[9][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[9][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[9] = choices[9][0];
 units[9] = "19";
 comments[9] = "Id Pregunta: 10162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 10367 Año de creación de pregunta: 2016
 questions[10]= "11)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[10]= new Array();
 choices[10][0] = "Presentar la moci&oacute;n de censura.";
 choices[10][1] = "Presidir las sesiones del Parlamento.";
 choices[10][2] = "Organizar la Secretar&iacute;a General.";
 choices[10][3] = "Preparar las actividades de las Comisiones.";
 answers[10] = choices[10][1];
 units[10] = "5";
 comments[10] = "Id Pregunta: 10367. UNION EUROPEA";


//  Id pregunta: 10058 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[11]= new Array();
 choices[11][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[11][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[11][2] = "Servicio de seguridad gestionada";
 choices[11][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[11] = choices[11][1];
 units[11] = "26";
 comments[11] = "Id Pregunta: 10058. AGE A1 2015";


//  Id pregunta: 10349 Año de creación de pregunta: 2016
 questions[12]= "13)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[12]= new Array();
 choices[12][0] = "El 23 de julio de 1952.";
 choices[12][1] = "El 18 de abril de 1951.";
 choices[12][2] = "El 16 de abril de 1948.";
 choices[12][3] = "d)Ninguna de las respuestas son correctas.";
 answers[12] = choices[12][0];
 units[12] = "5";
 comments[12] = "Id Pregunta: 10349. UNION EUROPEA";


//  Id pregunta: 10335 Año de creación de pregunta: 2016
 questions[13]= "14)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[13]= new Array();
 choices[13][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[13][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[13][2] = "Son incompatibles ambas actas de diputado.";
 choices[13][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[13] = choices[13][2];
 units[13] = "5";
 comments[13] = "Id Pregunta: 10335. UNION EUROPEA";


//  Id pregunta: 10286 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[14]= new Array();
 choices[14][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[14][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[14][2] = "Iniciativa europea de libre flujo de datos.";
 choices[14][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[14] = choices[14][2];
 units[14] = "5";
 comments[14] = "Id Pregunta: 10286. UNION EUROPEA";


//  Id pregunta: 10271 Año de creación de pregunta: 2016
 questions[15]= "16)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[15]= new Array();
 choices[15][0] = "Ley org&aacute;nica.";
 choices[15][1] = "Ley ordinaria.";
 choices[15][2] = "Ley de bases.";
 choices[15][3] = "Ley marco.";
 answers[15] = choices[15][0];
 units[15] = "1";
 comments[15] = "Id Pregunta: 10271. CONSTITUCION1978";


//  Id pregunta: 10322 Año de creación de pregunta: 2016
 questions[16]= "17)  El Tribunal de Justicia est&aacute; formado por:";
 choices[16]= new Array();
 choices[16][0] = "Un Juez de cada Estado miembro.";
 choices[16][1] = "Por dos Jueces de cada Estado miembro.";
 choices[16][2] = "Por veinte Jueces.";
 choices[16][3] = "Por ocho Jueces.";
 answers[16] = choices[16][0];
 units[16] = "5";
 comments[16] = "Id Pregunta: 10322. UNION EUROPEA";


//  Id pregunta: 10150 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[17]= new Array();
 choices[17][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[17][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[17][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[17][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[17] = choices[17][2];
 units[17] = "7";
 comments[17] = "Id Pregunta: 10150. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 10270 Año de creación de pregunta: 2016
 questions[18]= "19)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[18]= new Array();
 choices[18][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[18][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[18][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[18][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[18] = choices[18][0];
 units[18] = "1";
 comments[18] = "Id Pregunta: 10270. CONSTITUCION1978";


//  Id pregunta: 10464 Año de creación de pregunta: 2016
 questions[19]= "20)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[19]= new Array();
 choices[19][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[19][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[19][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[19][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[19] = choices[19][2];
 units[19] = "10";
 comments[19] = "Id Pregunta: 10464. PRESUPUESTOS GENERALES";


//  Id pregunta: 10177 Año de creación de pregunta: 2016
 questions[20]= "21)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[20]= new Array();
 choices[20][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[20][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[20][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[20][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[20] = choices[20][2];
 units[20] = "1";
 comments[20] = "Id Pregunta: 10177. CONSTITUCION1978";


//  Id pregunta: 10214 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[21]= new Array();
 choices[21][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[21][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[21][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[21][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[21] = choices[21][0];
 units[21] = "1";
 comments[21] = "Id Pregunta: 10214. CONSTITUCION1978";


//  Id pregunta: 10284 Año de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;ale la respuesta falsa:";
 choices[22]= new Array();
 choices[22][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[22][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[22][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[22][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[22] = choices[22][2];
 units[22] = "5";
 comments[22] = "Id Pregunta: 10284. UNION EUROPEA";


//  Id pregunta: 10347 Año de creación de pregunta: 2016
 questions[23]= "24)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[23]= new Array();
 choices[23][0] = "18 miembros.";
 choices[23][1] = "Ninguna es correcta.";
 choices[23][2] = "22 miembros.";
 choices[23][3] = "21 miembros.";
 answers[23] = choices[23][1];
 units[23] = "5";
 comments[23] = "Id Pregunta: 10347. UNION EUROPEA";


//  Id pregunta: 10274 Año de creación de pregunta: 2016
 questions[24]= "25)  La Ley 19/2013 de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno ha establecido el derecho:";
 choices[24]= new Array();
 choices[24][0] = "Al acceso a la informaci&oacute;n p&uacute;blica, en desarrollo de los t&eacute;rminos ya previstos por la Ley 11/2007, de acceso electr&oacute;nico de los ciudadano a los servicios p&uacute;blicos.";
 choices[24][1] = "Al acceso a la informaci&oacute;n p&uacute;blica, por primera vez en nuestra legislaci&oacute;n positiva.";
 choices[24][2] = "Al acceso a la informaci&oacute;n p&uacute;blica a trav&eacute;s del portal de transparencia.";
 choices[24][3] = "Al acceso a la informaci&oacute;n p&uacute;blica, con las limitaciones derivadas del posible perjuicio para la defensa, seguridad nacional o funciones administrativas de inspecci&oacute;n, entre otras.";
 answers[24] = choices[24][3];
 units[24] = "22";
 comments[24] = "Id Pregunta: 10274. LEY DE TRANSPARENCIA";


//  Id pregunta: 10339 Año de creación de pregunta: 2016
 questions[25]= "26)  La presidencia del Consejo se ejerce de forma rotatoria cada:";
 choices[25]= new Array();
 choices[25][0] = "4 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[25][1] = "6 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[25][2] = "4 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 choices[25][3] = "6 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 answers[25] = choices[25][1];
 units[25] = "5";
 comments[25] = "Id Pregunta: 10339. UNION EUROPEA";


//  Id pregunta: 10579 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[26]= new Array();
 choices[26][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[26][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[26][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[26][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[26] = choices[26][1];
 units[26] = "19";
 comments[26] = "Id Pregunta: 10579. Estrategia TIC";


//  Id pregunta: 10061 Año de creación de pregunta: 2016
 questions[27]= "28)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[27]= new Array();
 choices[27][0] = "Lollipop";
 choices[27][1] = "Jelly Bean";
 choices[27][2] = "Marshmallow";
 choices[27][3] = "KitKat";
 answers[27] = choices[27][2];
 units[27] = "59";
 comments[27] = "Id Pregunta: 10061. AGE A1 2015";


//  Id pregunta: 10198 Año de creación de pregunta: 2016
 questions[28]= "29)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[28]= new Array();
 choices[28][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[28][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[28][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[28][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[28] = choices[28][3];
 units[28] = "1";
 comments[28] = "Id Pregunta: 10198. CONSTITUCION1978";


//  Id pregunta: 10563 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Qu&eacute; fen&oacute;meno NO ha puesto de manifiesto la crisis econ&oacute;mica?";
 choices[29]= new Array();
 choices[29][0] = "Tasa de paro estructural alt&iacute;sima";
 choices[29][1] = "Excesiva estabilidad de empleo";
 choices[29][2] = "An&eacute;mico crecimiento de la productividad";
 choices[29][3] = "Existencia de una importante econom&iacute;a sumergida";
 answers[29] = choices[29][1];
 units[29] = "12";
 comments[29] = "Id Pregunta: 10563. Modelo econ&oacute;mico";


//  Id pregunta: 10655 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[30]= new Array();
 choices[30][0] = "Yarn";
 choices[30][1] = "Flume";
 choices[30][2] = "Hive";
 choices[30][3] = "BizAgi";
 answers[30] = choices[30][3];
 units[30] = "73";
 comments[30] = "Id Pregunta: 10655. ";


//  Id pregunta: 10346 Año de creación de pregunta: 2016
 questions[31]= "32)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[31]= new Array();
 choices[31][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[31][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[31][2] = "Cinco a&ntilde;os.";
 choices[31][3] = "Ninguna es correcta.";
 answers[31] = choices[31][2];
 units[31] = "5";
 comments[31] = "Id Pregunta: 10346. UNION EUROPEA";


//  Id pregunta: 10548 Año de creación de pregunta: 2016
 questions[32]= "33)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[32]= new Array();
 choices[32][0] = "La Administraci&oacute;n General del Estado";
 choices[32][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[32][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[32][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[32] = choices[32][1];
 units[32] = "26";
 comments[32] = "Id Pregunta: 10548. Gobernanza TIC";


//  Id pregunta: 10617 Año de creación de pregunta: 2016
 questions[33]= "34)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[33]= new Array();
 choices[33][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[33][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[33][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[33][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[33] = choices[33][0];
 units[33] = "84";
 comments[33] = "Id Pregunta: 10617. Junta de Extremadura A1 2015";


//  Id pregunta: 10640 Año de creación de pregunta: 2016
 questions[34]= "35)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[34]= new Array();
 choices[34][0] = "Fat y Ntfs.";
 choices[34][1] = "Extfat y Fat.";
 choices[34][2] = "Fat y Nfst.";
 choices[34][3] = "ext2fs y Ntfs.";
 answers[34] = choices[34][0];
 units[34] = "58";
 comments[34] = "Id Pregunta: 10640. Junta de Extremadura A1 2015";


//  Id pregunta: 10374 Año de creación de pregunta: 2016
 questions[35]= "36)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[35]= new Array();
 choices[35][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[35][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[35][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[35][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[35] = choices[35][3];
 units[35] = "5";
 comments[35] = "Id Pregunta: 10374. UNION EUROPEA";


//  Id pregunta: 10459 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[36]= new Array();
 choices[36][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[36][1] = "Pasivos financieros y transferencias de capital.";
 choices[36][2] = "Activos financieros y pasivos financieros.";
 choices[36][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[36] = choices[36][2];
 units[36] = "10";
 comments[36] = "Id Pregunta: 10459. PRESUPUESTOS GENERALES";


//  Id pregunta: 10470 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[37]= new Array();
 choices[37][0] = "El Ministro de Econom&iacute;a.";
 choices[37][1] = "El Gobierno.";
 choices[37][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[37][3] = "El Presidente del Gobierno.";
 answers[37] = choices[37][1];
 units[37] = "10";
 comments[37] = "Id Pregunta: 10470. PRESUPUESTOS GENERALES";


//  Id pregunta: 10382 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[38]= new Array();
 choices[38][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[38][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[38][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[38][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[38] = choices[38][0];
 units[38] = "14";
 comments[38] = "Id Pregunta: 10382. POLITICAS DE IGUALDAD";


//  Id pregunta: 10126 Año de creación de pregunta: 2016
 questions[39]= "40)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[39]= new Array();
 choices[39][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[39][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[39][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[39][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[39] = choices[39][3];
 units[39] = "22";
 comments[39] = "Id Pregunta: 10126. ";


//  Id pregunta: 10155 Año de creación de pregunta: 2016
 questions[40]= "41)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[40]= new Array();
 choices[40][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[40][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[40][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[40][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[40] = choices[40][2];
 units[40] = "7";
 comments[40] = "Id Pregunta: 10155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 10131 Año de creación de pregunta: 2016
 questions[41]= "42)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[41]= new Array();
 choices[41][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[41][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[41][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[41][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[41] = choices[41][0];
 units[41] = "12";
 comments[41] = "Id Pregunta: 10131. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10094 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[42]= new Array();
 choices[42][0] = "Es un framework de software libre.";
 choices[42][1] = "Es una base de datos NoSQL.";
 choices[42][2] = "Est&aacute; basado en MapReduce.";
 choices[42][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[42] = choices[42][1];
 units[42] = "73";
 comments[42] = "Id Pregunta: 10094. AGE A1 2015";


//  Id pregunta: 10628 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[43]= new Array();
 choices[43][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[43][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[43][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[43][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[43] = choices[43][0];
 units[43] = "45";
 comments[43] = "Id Pregunta: 10628. Junta de Extremadura A1 2015";


//  Id pregunta: 10627 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[44]= new Array();
 choices[44][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[44][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[44][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[44][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[44] = choices[44][0];
 units[44] = "46";
 comments[44] = "Id Pregunta: 10627. Junta de Extremadura A1 2015";


//  Id pregunta: 10365 Año de creación de pregunta: 2016
 questions[45]= "46)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[45]= new Array();
 choices[45][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[45][1] = "Unanimidad.";
 choices[45][2] = "Mayor&iacute;a cualificada.";
 choices[45][3] = "Mayor&iacute;a simple.";
 answers[45] = choices[45][3];
 units[45] = "5";
 comments[45] = "Id Pregunta: 10365. UNION EUROPEA";


//  Id pregunta: 10040 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[46]= new Array();
 choices[46][0] = "Drupal";
 choices[46][1] = "Cassandra";
 choices[46][2] = "Wordpress";
 choices[46][3] = "OpenCMS";
 answers[46] = choices[46][1];
 units[46] = "99";
 comments[46] = "Id Pregunta: 10040. AGE A1 2015";


//  Id pregunta: 10216 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[47]= new Array();
 choices[47][0] = "El Presidente del Gobierno.";
 choices[47][1] = "El Consejo de Ministros.";
 choices[47][2] = "40 Diputados.";
 choices[47][3] = "El Ministerio Fiscal.";
 answers[47] = choices[47][0];
 units[47] = "1";
 comments[47] = "Id Pregunta: 10216. CONSTITUCION1978";


//  Id pregunta: 10015 Año de creación de pregunta: 2016
 questions[48]= "49)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[48]= new Array();
 choices[48][0] = "0";
 choices[48][1] = "1";
 choices[48][2] = "Tantos como peticiones concurrentes tenga.";
 choices[48][3] = "Tantos como le permita la memoria de la JVM.";
 answers[48] = choices[48][1];
 units[48] = "64";
 comments[48] = "Id Pregunta: 10015. AGE A1 2015";


//  Id pregunta: 10412 Año de creación de pregunta: 2016
 questions[49]= "50)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[49]= new Array();
 choices[49][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[49][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[49][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[49][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[49] = choices[49][1];
 units[49] = "14";
 comments[49] = "Id Pregunta: 10412. POLITICAS DE IGUALDAD";


//  Id pregunta: 10064 Año de creación de pregunta: 2016
 questions[50]= "51)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[50]= new Array();
 choices[50][0] = "Windows Phone";
 choices[50][1] = "Blackberry";
 choices[50][2] = "iOS";
 choices[50][3] = "Android";
 answers[50] = choices[50][3];
 units[50] = "59";
 comments[50] = "Id Pregunta: 10064. AGE A1 2015";


//  Id pregunta: 10636 Año de creación de pregunta: 2016
 questions[51]= "52)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[51]= new Array();
 choices[51][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[51][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[51][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[51][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[51] = choices[51][2];
 units[51] = "57";
 comments[51] = "Id Pregunta: 10636. Junta de Extremadura A1 2015";


//  Id pregunta: 10154 Año de creación de pregunta: 2016
 questions[52]= "53)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[52]= new Array();
 choices[52][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[52][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[52][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[52][3] = "todas son correctas";
 answers[52] = choices[52][3];
 units[52] = "7";
 comments[52] = "Id Pregunta: 10154. Ley 39/2015, Art&iacute;culo 29";


//  Id pregunta: 10069 Año de creación de pregunta: 2016
 questions[53]= "54)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[53]= new Array();
 choices[53][0] = "Ejecuci&oacute;n";
 choices[53][1] = "Adjudicaci&oacute;n";
 choices[53][2] = "Licitaci&oacute;n";
 choices[53][3] = "Formalizaci&oacute;n";
 answers[53] = choices[53][3];
 units[53] = "37";
 comments[53] = "Id Pregunta: 10069. AGE A1 2015";


//  Id pregunta: 10619 Año de creación de pregunta: 2016
 questions[54]= "55)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[54]= new Array();
 choices[54][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[54][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[54][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[54][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[54] = choices[54][1];
 units[54] = "89";
 comments[54] = "Id Pregunta: 10619. Junta de Extremadura A1 2015";


//  Id pregunta: 10662 Año de creación de pregunta: 2016
 questions[55]= "56)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[55]= new Array();
 choices[55][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[55][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[55][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[55][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que haya sido elaborado por &eacute;ste.";
 answers[55] = choices[55][1];
 units[55] = "7";
 comments[55] = "Id Pregunta: 10662. Art&iacute;culo 53 de la Ley 39/2015";


//  Id pregunta: 10608 Año de creación de pregunta: 2016
 questions[56]= "57)  Una de las condiciones que un &aacute;rbol debe cumplir para ser &aacute;rbol b, siendo n el orden del &aacute;rbol, es:";
 choices[56]= new Array();
 choices[56][0] = "Cada p&aacute;gina contiene como m&aacute;ximo 2n + 1 elementos.";
 choices[56][1] = "Cada p&aacute;gina, excepto la ra&iacute;z, contiene al menos n elementos.";
 choices[56][2] = "Cada p&aacute;gina o es una hoja o tiene m descendientes, siendo m el n&uacute;mero de elementos o claves que tiene.";
 choices[56][3] = "Las hojas no tienen por qu&eacute; estar al mismo nivel.";
 answers[56] = choices[56][1];
 units[56] = "56";
 comments[56] = "Id Pregunta: 10608. Junta de Extremadura A1 2015";


//  Id pregunta: 10552 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[57]= new Array();
 choices[57][0] = "Establecer redes de telecomunicaciones continentales";
 choices[57][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[57][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[57][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[57] = choices[57][0];
 units[57] = "17";
 comments[57] = "Id Pregunta: 10552. Mercado &Uacute;nico Digital";


//  Id pregunta: 10505 Año de creación de pregunta: 2016
 questions[58]= "59)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[58]= new Array();
 choices[58][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[58][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[58][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[58][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[58] = choices[58][3];
 units[58] = "10";
 comments[58] = "Id Pregunta: 10505. PRESUPUESTOS GENERALES";


//  Id pregunta: 10277 Año de creación de pregunta: 2016
 questions[59]= "60)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[59]= new Array();
 choices[59][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[59][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[59][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[59][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[59] = choices[59][2];
 units[59] = "22";
 comments[59] = "Id Pregunta: 10277. LEY DE TRANSPARENCIA";


//  Id pregunta: 10510 Año de creación de pregunta: 2016
 questions[60]= "61)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[60]= new Array();
 choices[60][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[60][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[60][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[60][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[60] = choices[60][2];
 units[60] = "7";
 comments[60] = "Id Pregunta: 10510. LEY 39/2015";


//  Id pregunta: 10291 Año de creación de pregunta: 2016
 questions[61]= "62)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[61]= new Array();
 choices[61][0] = "Tres a&ntilde;os.";
 choices[61][1] = "Dos a&ntilde;os y medio.";
 choices[61][2] = "Cinco a&ntilde;os.";
 choices[61][3] = "Seis a&ntilde;os.";
 answers[61] = choices[61][3];
 units[61] = "5";
 comments[61] = "Id Pregunta: 10291. UNION EUROPEA";


//  Id pregunta: 10084 Año de creación de pregunta: 2016
 questions[62]= "63)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[62]= new Array();
 choices[62][0] = "Interchange of Data between Administrations (IDA)";
 choices[62][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[62][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[62][3] = "Interoperability Electronic European Solution (IEES)";
 answers[62] = choices[62][1];
 units[62] = "43";
 comments[62] = "Id Pregunta: 10084. AGE A1 2015";


//  Id pregunta: 10179 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[63]= new Array();
 choices[63][0] = "Una ley orginaria.";
 choices[63][1] = "Una ley org&aacute;nica.";
 choices[63][2] = "Una ley de bases.";
 choices[63][3] = "Una ley de transferencia.";
 answers[63] = choices[63][1];
 units[63] = "1";
 comments[63] = "Id Pregunta: 10179. CONSTITUCION1978";


//  Id pregunta: 10030 Año de creación de pregunta: 2016
 questions[64]= "65)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[64]= new Array();
 choices[64][0] = "SMB3";
 choices[64][1] = "AFP";
 choices[64][2] = "NFS";
 choices[64][3] = "FTP";
 answers[64] = choices[64][0];
 units[64] = "59";
 comments[64] = "Id Pregunta: 10030. AGE A1 2015";


//  Id pregunta: 10244 Año de creación de pregunta: 2016
 questions[65]= "66)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[65]= new Array();
 choices[65][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[65][1] = "Publicidad de las normas.";
 choices[65][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[65][3] = "Coordinaci&oacute;n normativa.";
 answers[65] = choices[65][2];
 units[65] = "1";
 comments[65] = "Id Pregunta: 10244. CONSTITUCION1978";


//  Id pregunta: 10124 Año de creación de pregunta: 2016
 questions[66]= "67)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[66]= new Array();
 choices[66][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[66][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[66][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[66][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[66] = choices[66][0];
 units[66] = "22";
 comments[66] = "Id Pregunta: 10124. ";


//  Id pregunta: 10180 Año de creación de pregunta: 2016
 questions[67]= "68)  Se&ntilde;ale la afirmaci&oacute;n correcta de acuerdo con la regulaci&oacute;n que contiene el Art&iacute;culo 116 de la Constituci&oacute;n Espa&ntilde;ola de los estados de alarma, excepci&oacute;n y sitio:";
 choices[67]= new Array();
 choices[67][0] = "el estado de sitio ser&aacute; declarado por la mayor&iacute;a absoluta del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[67][1] = "El estado de excepci&oacute;n ser&aacute; declarado por el Gobierno mediante Acuerdo de Ministros, previa autorizaci&oacute;n del Senado.";
 choices[67][2] = "El estado de alarma ser&aacute; declarado por la mayor&iacute;a simple del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[67][3] = "La declaraci&oacute;n de los estados de alarma, excepci&oacute;n y sitio s&iacute; modificar&aacute;n el principio de responsabilidad del Gobierno y de sus agentes reconocidos en la CE y en las leyes.";
 answers[67] = choices[67][0];
 units[67] = "1";
 comments[67] = "Id Pregunta: 10180. CONSTITUCION1978";


//  Id pregunta: 10233 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[68]= new Array();
 choices[68][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[68][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[68][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[68][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[68] = choices[68][2];
 units[68] = "1";
 comments[68] = "Id Pregunta: 10233. CONSTITUCION1978";


//  Id pregunta: 10356 Año de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[69]= new Array();
 choices[69][0] = "No se aplican directamente en los Estados.";
 choices[69][1] = "No son vinculantes.";
 choices[69][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[69][3] = "Tienen alcance general.";
 answers[69] = choices[69][0];
 units[69] = "5";
 comments[69] = "Id Pregunta: 10356. UNION EUROPEA";


//  Id pregunta: 10314 Año de creación de pregunta: 2016
 questions[70]= "71)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[70]= new Array();
 choices[70][0] = "Al Consejo Europeo.";
 choices[70][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[70][2] = "A la Comisi&oacute;n Europea.";
 choices[70][3] = "Al Parlamento Europeo.";
 answers[70] = choices[70][2];
 units[70] = "5";
 comments[70] = "Id Pregunta: 10314. UNION EUROPEA";


//  Id pregunta: 10315 Año de creación de pregunta: 2016
 questions[71]= "72)  El Colegio de Comisarios se re&uacute;ne:";
 choices[71]= new Array();
 choices[71][0] = "Una vez por semana.";
 choices[71][1] = "Una vez al mes.";
 choices[71][2] = "Dos veces en semana.";
 choices[71][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[71] = choices[71][0];
 units[71] = "5";
 comments[71] = "Id Pregunta: 10315. UNION EUROPEA";


//  Id pregunta: 10205 Año de creación de pregunta: 2016
 questions[72]= "73)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[72]= new Array();
 choices[72][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[72][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[72][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[72][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[72] = choices[72][1];
 units[72] = "1";
 comments[72] = "Id Pregunta: 10205. CONSTITUCION1978";


//  Id pregunta: 10111 Año de creación de pregunta: 2016
 questions[73]= "74)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[73]= new Array();
 choices[73][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[73][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[73][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[73][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[73] = choices[73][0];
 units[73] = "15";
 comments[73] = "Id Pregunta: 10111. ";


//  Id pregunta: 10419 Año de creación de pregunta: 2016
 questions[74]= "75)  Promover&aacute;n el conocimiento y la difusi&oacute;n del principio de igualdad entre mujeres y hombres, los medios de comunicaci&oacute;n de titularidad:";
 choices[74]= new Array();
 choices[74][0] = "P&uacute;blica.";
 choices[74][1] = "Privada.";
 choices[74][2] = "Ambas son correctas.";
 choices[74][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[74] = choices[74][0];
 units[74] = "14";
 comments[74] = "Id Pregunta: 10419. POLITICAS DE IGUALDAD";


