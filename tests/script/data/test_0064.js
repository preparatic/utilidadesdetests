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

//  Id pregunta: 324 Año de creación de pregunta: 2016
 questions[0]= "1)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[0]= new Array();
 choices[0][0] = "Tres a&ntilde;os.";
 choices[0][1] = "Cuatro a&ntilde;os.";
 choices[0][2] = "Cinco a&ntilde;os.";
 choices[0][3] = "Seis a&ntilde;os.";
 answers[0] = choices[0][0];
 units[0] = "5";
 comments[0] = "Id Pregunta: 324. UNION EUROPEA";
 preguntaids[0] = 324


//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[1]= "2)  Dos de los principios del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE son:";
 choices[1]= new Array();
 choices[1][0] = "Transparencia e innovaci&oacute;n";
 choices[1][1] = "Seguridad y reutilizaci&oacute;n";
 choices[1][2] = "Reutilizaci&oacute;n y buz&oacute;n de quejas y sugerencias";
 choices[1][3] = "Principio de solo una vez y transfronterizo de forma predeterminada";
 answers[1] = choices[1][3];
 units[1] = "28";
 comments[1] = "Id Pregunta: 743. Estrategia TIC";
 preguntaids[1] = 743


//  Id pregunta: 718 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[2]= new Array();
 choices[2][0] = "Maximizar el valor para los clientes";
 choices[2][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[2][2] = " Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[2][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[2] = choices[2][3];
 units[2] = "34";
 comments[2] = "Id Pregunta: 718. Metodologias Lean";
 preguntaids[2] = 718


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[3]= "4)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[3]= new Array();
 choices[3][0] = "por Real Decreto";
 choices[3][1] = "reglamentariamente";
 choices[3][2] = "mediante Ley";
 choices[3][3] = "ninguna es correcta";
 answers[3] = choices[3][1];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 817. Ley 40/2015";
 preguntaids[3] = 817


//  Id pregunta: 707 Año de creación de pregunta: 2016
 questions[4]= "5)  La &Eacute;tica P&uacute;blica se puede definir como:";
 choices[4]= new Array();
 choices[4][0] = "El conjunto de normas que adoptan de manera voluntaria los trabajadores p&uacute;blicos con objeto de satisfacer las necesidades de los ciudadanos.";
 choices[4][1] = "El conjunto de comportamientos inadecuados por parte de empleados p&uacute;blicos y pol&iacute;ticos.";
 choices[4][2] = "El conjunto de normas que rigen la conducta de las personas que trabajan en las Administraciones P&uacute;blicas.";
 choices[4][3] = "El compromiso que adquieren los ciudadanos al relacionarse con las Administraciones P&uacute;blicas.";
 answers[4] = choices[4][2];
 units[4] = "22";
 comments[4] = "Id Pregunta: 707. &Eacute;tica p&uacute;blica";
 preguntaids[4] = 707


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[5]= new Array();
 choices[5][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[5][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[5][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[5][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[5] = choices[5][1];
 units[5] = "7";
 comments[5] = "Id Pregunta: 156. Ley 39/2015, Art&iacute;culo 40";
 preguntaids[5] = 156


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[6]= "7)  En qu&eacute; consiste el principio BASE:";
 choices[6]= new Array();
 choices[6][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[6][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[6][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[6][3] = "Todas las anteriores son falsas";
 answers[6] = choices[6][3];
 units[6] = "73";
 comments[6] = "Id Pregunta: 103. ";
 preguntaids[6] = 103


//  Id pregunta: 348 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[7]= new Array();
 choices[7][0] = "El 1 de noviembre de 1994.";
 choices[7][1] = "El 1 de noviembre de 1992.";
 choices[7][2] = "El 1 de noviembre de 1995.";
 choices[7][3] = "El 1 de noviembre de 1993.";
 answers[7] = choices[7][3];
 units[7] = "5";
 comments[7] = "Id Pregunta: 348. UNION EUROPEA";
 preguntaids[7] = 348


//  Id pregunta: 352 Año de creación de pregunta: 2016
 questions[8]= "9)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[8]= new Array();
 choices[8][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[8][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[8][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[8][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[8] = choices[8][0];
 units[8] = "5";
 comments[8] = "Id Pregunta: 352. UNION EUROPEA";
 preguntaids[8] = 352


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[9]= "10)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[9]= new Array();
 choices[9][0] = "Anualmente.";
 choices[9][1] = "Ninguna de las respuestas es correcta.";
 choices[9][2] = "Trimestralmente.";
 choices[9][3] = "Semestralmente.";
 answers[9] = choices[9][0];
 units[9] = "10";
 comments[9] = "Id Pregunta: 477. PRESUPUESTOS GENERALES";
 preguntaids[9] = 477


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes es uno de los pilares en los que se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[10]= new Array();
 choices[10][0] = "Mejorar el acceso de los consumidores y empresas a los bienes y servicios digitales en Europa";
 choices[10][1] = "Aplicar est&aacute;ndares de calidad a los servicios digitales en Europa";
 choices[10][2] = "Apertura al exterior";
 choices[10][3] = "I+D+i como forma de mejorar los servicios digitales de las empresas europeas";
 answers[10] = choices[10][0];
 units[10] = "17";
 comments[10] = "Id Pregunta: 762. Mercado &Uacute;nico Digital";
 preguntaids[10] = 762


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[11]= "12)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[11]= new Array();
 choices[11][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[11][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[11][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[11][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[11] = choices[11][2];
 units[11] = "5";
 comments[11] = "Id Pregunta: 288. UNION EUROPEA";
 preguntaids[11] = 288


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[12]= "13)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[12]= new Array();
 choices[12][0] = "Versi&oacute;n digital prioritaria.";
 choices[12][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[12][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[12][3] = "Apertura y transparencia.";
 answers[12] = choices[12][0];
 units[12] = "5";
 comments[12] = "Id Pregunta: 287. UNION EUROPEA";
 preguntaids[12] = 287


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[13]= "14)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[13]= new Array();
 choices[13][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[13][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[13][2] = "Las respuestas a) b) no son correctas.";
 choices[13][3] = "Las respuestas a) y b) son correctas.";
 answers[13] = choices[13][3];
 units[13] = "10";
 comments[13] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";
 preguntaids[13] = 482


//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[14]= "15)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[14]= new Array();
 choices[14][0] = "El rey, a propuesta del Gobierno.";
 choices[14][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[14][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[14][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[14] = choices[14][1];
 units[14] = "1";
 comments[14] = "Id Pregunta: 210. CONSTITUCION1978";
 preguntaids[14] = 210


//  Id pregunta: 351 Año de creación de pregunta: 2016
 questions[15]= "16)  La sede del Parlamento Europeo se encuentra en:";
 choices[15]= new Array();
 choices[15][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[15][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[15][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[15][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[15] = choices[15][1];
 units[15] = "5";
 comments[15] = "Id Pregunta: 351. UNION EUROPEA";
 preguntaids[15] = 351


//  Id pregunta: 714 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[16]= new Array();
 choices[16][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[16][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[16][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[16][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[16] = choices[16][3];
 units[16] = "22";
 comments[16] = "Id Pregunta: 714. Ley de transparencia";
 preguntaids[16] = 714


//  Id pregunta: 381 Año de creación de pregunta: 2016
 questions[17]= "18)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[17]= new Array();
 choices[17][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[17][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[17][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[17][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[17] = choices[17][0];
 units[17] = "14";
 comments[17] = "Id Pregunta: 381. POLITICAS DE IGUALDAD";
 preguntaids[17] = 381


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[18]= "19)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[18]= new Array();
 choices[18][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[18][1] = "La libertad sexual y religiosa.";
 choices[18][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[18][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[18] = choices[18][3];
 units[18] = "1";
 comments[18] = "Id Pregunta: 254. CONSTITUCION1978";
 preguntaids[18] = 254


//  Id pregunta: 110 Año de creación de pregunta: 2016
 questions[19]= "20)  La Poblaci&oacute;n Activa incluye a:";
 choices[19]= new Array();
 choices[19][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[19][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[19][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[19][3] = "Todo aquel que desea trabajar";
 answers[19] = choices[19][2];
 units[19] = "15";
 comments[19] = "Id Pregunta: 110. ";
 preguntaids[19] = 110


//  Id pregunta: 605 Año de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[20]= new Array();
 choices[20][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[20][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[20][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[20][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[20] = choices[20][3];
 units[20] = "101";
 comments[20] = "Id Pregunta: 605. Junta de Extremadura A1 2015";
 preguntaids[20] = 605


//  Id pregunta: 742 Año de creación de pregunta: 2016
 questions[21]= "22)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[21]= new Array();
 choices[21][0] = "Proveer de manera compartida servicios comunes";
 choices[21][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[21][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[21][3] = "Transparencia";
 answers[21] = choices[21][1];
 units[21] = "28";
 comments[21] = "Id Pregunta: 742. Estrategia TIC";
 preguntaids[21] = 742


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[22]= "23)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[22]= new Array();
 choices[22][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[22][1] = "los Subdelegados del Gobierno en las provincias";
 choices[22][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[22][3] = "a y b son correctas";
 answers[22] = choices[22][3];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 790. Ley 40/2015";
 preguntaids[22] = 790


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[23]= "24)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[23]= new Array();
 choices[23][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[23][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[23][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[23][3] = "Todas son correctas.";
 answers[23] = choices[23][3];
 units[23] = "4, 7, 8, 9";
 comments[23] = "Id Pregunta: 834. Ley 40/2015";
 preguntaids[23] = 834


//  Id pregunta: 697 Año de creación de pregunta: 2016
 questions[24]= "25)  De las siguientes cu&aacute;l est&aacute; relacionada con la noci&oacute;n de integraci&oacute;n continua:";
 choices[24]= new Array();
 choices[24][0] = "Programaci&oacute;n estructurada.";
 choices[24][1] = "Metodolog&iacute;a M&eacute;trica Versi&oacute;n 4.";
 choices[24][2] = "Programaci&oacute;n extrema.";
 choices[24][3] = "Programaci&oacute;n Espuria.";
 answers[24] = choices[24][2];
 units[24] = "92";
 comments[24] = "Id Pregunta: 697. INTEGRACION CONTINUA";
 preguntaids[24] = 697


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[25]= "26)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[25]= new Array();
 choices[25][0] = "Interoperabilidad";
 choices[25][1] = "Integridad";
 choices[25][2] = "Capital humano";
 choices[25][3] = "Trazabilidad";
 answers[25] = choices[25][2];
 units[25] = "19";
 comments[25] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";
 preguntaids[25] = 166


//  Id pregunta: 715 Año de creación de pregunta: 2016
 questions[26]= "27)  Entre las funcionalidades generales de un servidor de integraci&oacute;n continua NO se encuentra";
 choices[26]= new Array();
 choices[26][0] = "La ejecuci&oacute;n de una serie de test: JUnit, Cactus, Auditoria del c&oacute;digo fuente, test IHM, test funcionales.";
 choices[26][1] = "Permite realiza el despliegue de archivos en el entorno de producci&oacute;n.";
 choices[26][2] = "La notificaci&oacute;n del resultado por medios como correo electr&oacute;nico o RSS.";
 choices[26][3] = "La creaci&oacute;n de un informe de estad&iacute;sticas.";
 answers[26] = choices[26][1];
 units[26] = "92";
 comments[26] = "Id Pregunta: 715. INTEGRACION CONTINUA";
 preguntaids[26] = 715


//  Id pregunta: 689 Año de creación de pregunta: 2016
 questions[27]= "28)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que debe cumplir una firma electr&oacute;nica avanzada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[27]= new Array();
 choices[27][0] = "Estar vinculada al firmante de manera &uacute;nica";
 choices[27][1] = "Haber sido creada utilizando un dispositivo avanzado de creacio&#769;n de firmas electro&#769;nicas";
 choices[27][2] = "Haber sido creada utilizando datos de creaci&oacute;n de firma que el firmante puede utilizar, con un alto nivel de confianza, bajo su exclusivo control";
 choices[27][3] = "Estar vinculada con los datos firmados, de modo tal que cualquier modificacio&#769;n ulterior de los mismos sea detectable";
 answers[27] = choices[27][1];
 units[27] = "77";
 comments[27] = "Id Pregunta: 689. Art&iacute;culo 26 del Reglamento 910/2014";
 preguntaids[27] = 689


//  Id pregunta: 371 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[28]= new Array();
 choices[28][0] = "En 1988.";
 choices[28][1] = "En 1981.";
 choices[28][2] = "En 1982.";
 choices[28][3] = "En 1986.";
 answers[28] = choices[28][3];
 units[28] = "5";
 comments[28] = "Id Pregunta: 371. UNION EUROPEA";
 preguntaids[28] = 371


//  Id pregunta: 367 Año de creación de pregunta: 2016
 questions[29]= "30)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[29]= new Array();
 choices[29][0] = "Presentar la moci&oacute;n de censura.";
 choices[29][1] = "Presidir las sesiones del Parlamento.";
 choices[29][2] = "Organizar la Secretar&iacute;a General.";
 choices[29][3] = "Preparar las actividades de las Comisiones.";
 answers[29] = choices[29][1];
 units[29] = "5";
 comments[29] = "Id Pregunta: 367. UNION EUROPEA";
 preguntaids[29] = 367


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[30]= "31)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[30]= new Array();
 choices[30][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[30][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[30][2] = "a y b son correctas";
 choices[30][3] = "a y b son incorrectas";
 answers[30] = choices[30][2];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 783. Ley 40/2015";
 preguntaids[30] = 783


//  Id pregunta: 237 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[31]= new Array();
 choices[31][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[31][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[31][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[31][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[31] = choices[31][2];
 units[31] = "1";
 comments[31] = "Id Pregunta: 237. CONSTITUCION1978";
 preguntaids[31] = 237


//  Id pregunta: 860 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Cu&aacute;l NO es un objetivo de la utilizaci&oacute;n por parte de la Administraci&oacute;n de la web 2.0?";
 choices[32]= new Array();
 choices[32][0] = "Permitir la generaci&oacute;n de comentarios acerca de la informaci&oacute;n ofrecida y recibir actualizaciones en vivo por parte de los usuarios.";
 choices[32][1] = "Promover una mayor interacci&oacute;n con las principales redes sociales.";
 choices[32][2] = "Conseguir un conocimiento abierto, en particular mediante blogs y wikis.";
 choices[32][3] = "Conseguir que el usuario se sienta escuchado.";
 answers[32] = choices[32][1];
 units[32] = "125";
 comments[32] = "Id Pregunta: 860. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[32] = 860


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[33]= "34)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[33]= new Array();
 choices[33][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[33][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[33][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[33][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[33] = choices[33][0];
 units[33] = "101";
 comments[33] = "Id Pregunta: 649. Junta de Extremadura A1 2015";
 preguntaids[33] = 649


//  Id pregunta: 333 Año de creación de pregunta: 2016
 questions[34]= "35)  Est&aacute;n legitimados para interponer el recurso de carencia del art. 175 TCE:";
 choices[34]= new Array();
 choices[34][0] = "Las instituciones comunitarias.";
 choices[34][1] = "Los Estados miembros y las instituciones comunitarias.";
 choices[34][2] = "Los Estados miembros.";
 choices[34][3] = "Los nacionales de los Estados miembros.";
 answers[34] = choices[34][1];
 units[34] = "5";
 comments[34] = "Id Pregunta: 333. UNION EUROPEA";
 preguntaids[34] = 333


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[35]= "36)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[35]= new Array();
 choices[35][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[35][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[35][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[35][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[35] = choices[35][1];
 units[35] = "7";
 comments[35] = "Id Pregunta: 517. LEY 39/2015";
 preguntaids[35] = 517


//  Id pregunta: 572 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[36]= new Array();
 choices[36][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[36][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[36][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[36][3] = "La tasa de desempleo ronda el 20%";
 answers[36] = choices[36][2];
 units[36] = "12";
 comments[36] = "Id Pregunta: 572. Modelo econ&oacute;mico";
 preguntaids[36] = 572


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[37]= "38)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[37]= new Array();
 choices[37][0] = "3 a&ntilde;os.";
 choices[37][1] = "5 a&ntilde;os.";
 choices[37][2] = "4 a&ntilde;os.";
 choices[37][3] = "6 a&ntilde;os.";
 answers[37] = choices[37][1];
 units[37] = "1";
 comments[37] = "Id Pregunta: 193. CONSTITUCION1978";
 preguntaids[37] = 193


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[38]= "39)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[38]= new Array();
 choices[38][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[38][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[38][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[38][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[38] = choices[38][1];
 units[38] = "1";
 comments[38] = "Id Pregunta: 263. CONSTITUCION1978";
 preguntaids[38] = 263


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[39]= "40)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[39]= new Array();
 choices[39][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[39][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[39][2] = "Cinco a&ntilde;os.";
 choices[39][3] = "Ninguna es correcta.";
 answers[39] = choices[39][2];
 units[39] = "5";
 comments[39] = "Id Pregunta: 346. UNION EUROPEA";
 preguntaids[39] = 346


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[40]= "41)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[40]= new Array();
 choices[40][0] = "El derecho a la propiedad privada.";
 choices[40][1] = "El derecho de asociaci&oacute;n.";
 choices[40][2] = "El derecho de fundaci&oacute;n.";
 choices[40][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[40] = choices[40][1];
 units[40] = "1";
 comments[40] = "Id Pregunta: 174. CONSTITUCION1978";
 preguntaids[40] = 174


//  Id pregunta: 615 Año de creación de pregunta: 2016
 questions[41]= "42)  El Modelo de Referencia de Interconexi&oacute;n de Sistemas Abiertos (OSI) consta de siete niveles. Se&ntilde;ala cu&aacute;l de los principios que se aplicaron para llevar a cabo esta divisi&oacute;n es falso:";
 choices[41]= new Array();
 choices[41][0] = "No se deben crear demasiados niveles de manera que la tarea de describir e integrar &eacute;stos fuera m&aacute;s dif&iacute;cil de lo necesario.";
 choices[41][1] = "Aunque se requiera un nivel de abstracci&oacute;n diferente en el manejo de los datos, debe usarse un nivel ya existente.";
 choices[41][2] = "Cada nivel debe realizar unas funciones bien definidas.";
 choices[41][3] = "Crear para cada nivel interfases con el nivel superior e inferior &uacute;nicamente.";
 answers[41] = choices[41][1];
 units[41] = "48";
 comments[41] = "Id Pregunta: 615. Junta de Extremadura A1 2015";
 preguntaids[41] = 615


//  Id pregunta: 428 Año de creación de pregunta: 2016
 questions[42]= "43)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[42]= new Array();
 choices[42][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[42][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[42][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[42][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[42] = choices[42][2];
 units[42] = "14";
 comments[42] = "Id Pregunta: 428. POLITICAS DE IGUALDAD";
 preguntaids[42] = 428


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[43]= "44)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[43]= new Array();
 choices[43][0] = "La Comisi&oacute;n.";
 choices[43][1] = "El Consejo de Europa.";
 choices[43][2] = "El Consejo Europeo.";
 choices[43][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[43] = choices[43][3];
 units[43] = "5";
 comments[43] = "Id Pregunta: 300. UNION EUROPEA";
 preguntaids[43] = 300


//  Id pregunta: 404 Año de creación de pregunta: 2016
 questions[44]= "45)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[44]= new Array();
 choices[44][0] = "El Tratado de Roma, 1957.";
 choices[44][1] = "El Acta &Uacute;nica Europea.";
 choices[44][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[44][3] = "Ninguna es correcta.";
 answers[44] = choices[44][2];
 units[44] = "14";
 comments[44] = "Id Pregunta: 404. POLITICAS DE IGUALDAD";
 preguntaids[44] = 404


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[45]= new Array();
 choices[45][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[45][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[45][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[45][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[45] = choices[45][0];
 units[45] = "19";
 comments[45] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";
 preguntaids[45] = 163


//  Id pregunta: 609 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[46]= new Array();
 choices[46][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[46][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[46][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[46][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[46] = choices[46][0];
 units[46] = "45";
 comments[46] = "Id Pregunta: 609. Junta de Extremadura A1 2015";
 preguntaids[46] = 609


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[47]= new Array();
 choices[47][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[47][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[47][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[47][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[47] = choices[47][3];
 units[47] = "10";
 comments[47] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";
 preguntaids[47] = 465


//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[48]= "49)  JNDI se usa para el acceso a:";
 choices[48]= new Array();
 choices[48][0] = "Datos de ficheros";
 choices[48][1] = "Sistemas gestores de bases de datos";
 choices[48][2] = "Directorios de nombres";
 choices[48][3] = "Colas de mensajer&iacute;a";
 answers[48] = choices[48][2];
 units[48] = "64";
 comments[48] = "Id Pregunta: 13. AGE A1 2015";
 preguntaids[48] = 13


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[49]= "50)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[49]= new Array();
 choices[49][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[49][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[49][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[49][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[49] = choices[49][1];
 units[49] = "76";
 comments[49] = "Id Pregunta: 46. AGE A1 2015";
 preguntaids[49] = 46


//  Id pregunta: 534 Año de creación de pregunta: 2016
 questions[50]= "51)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[50]= new Array();
 choices[50][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[50][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[50][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[50][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[50] = choices[50][2];
 units[50] = "7";
 comments[50] = "Id Pregunta: 534. LEY 39/2015";
 preguntaids[50] = 534


//  Id pregunta: 117 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[51]= new Array();
 choices[51][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[51][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas ";
 choices[51][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[51][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[51] = choices[51][0];
 units[51] = "15";
 comments[51] = "Id Pregunta: 117. ";
 preguntaids[51] = 117


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[52]= new Array();
 choices[52][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[52][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[52][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[52][3] = "Todas las respuestas son correctas.";
 answers[52] = choices[52][2];
 units[52] = "42";
 comments[52] = "Id Pregunta: 618. Junta de Extremadura A1 2015";
 preguntaids[52] = 618


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[53]= "54)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[53]= new Array();
 choices[53][0] = "Principio de transparencia.";
 choices[53][1] = "Principio de cooperaci&oacute;n.";
 choices[53][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[53][3] = "Principio de lealtad institucional.";
 answers[53] = choices[53][1];
 units[53] = "10";
 comments[53] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";
 preguntaids[53] = 504


//  Id pregunta: 44 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[54]= new Array();
 choices[54][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[54][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[54][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[54][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[54] = choices[54][1];
 units[54] = "60";
 comments[54] = "Id Pregunta: 44. AGE A1 2015";
 preguntaids[54] = 44


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[55]= "56)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[55]= new Array();
 choices[55][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[55][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[55][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[55][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[55] = choices[55][2];
 units[55] = "22";
 comments[55] = "Id Pregunta: 121. ";
 preguntaids[55] = 121


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[56]= "57)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[56]= new Array();
 choices[56][0] = "De los interesados en el procedimiento";
 choices[56][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[56][2] = "Disposiciones generales";
 choices[56][3] = "De los actos administrativos";
 answers[56] = choices[56][2];
 units[56] = "7";
 comments[56] = "Id Pregunta: 522. LEY 39/2015";
 preguntaids[56] = 522


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[57]= "58)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[57]= new Array();
 choices[57][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[57][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[57][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[57][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[57] = choices[57][3];
 units[57] = "19";
 comments[57] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";
 preguntaids[57] = 171


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[58]= "59)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[58]= new Array();
 choices[58][0] = "P&uacute;blica.";
 choices[58][1] = "Privada.";
 choices[58][2] = "A y B son correctas.";
 choices[58][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[58] = choices[58][2];
 units[58] = "14";
 comments[58] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";
 preguntaids[58] = 418


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[59]= new Array();
 choices[59][0] = "Orientaci&oacute;n a objetos";
 choices[59][1] = "MapReduce";
 choices[59][2] = "Pipeline filtering";
 choices[59][3] = "Programaci&oacute;n funcional";
 answers[59] = choices[59][1];
 units[59] = "73";
 comments[59] = "Id Pregunta: 661. ";
 preguntaids[59] = 661


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[60]= "61)  En las Administraciones P&uacute;blicas...";
 choices[60]= new Array();
 choices[60][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[60][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[60][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[60][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[60] = choices[60][0];
 units[60] = "10";
 comments[60] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";
 preguntaids[60] = 455


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[61]= "62)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[61]= new Array();
 choices[61][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[61][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[61][2] = "Un programa de igualdad.";
 choices[61][3] = "Un estatuto de igualdad.";
 answers[61] = choices[61][0];
 units[61] = "14";
 comments[61] = "Id Pregunta: 410. POLITICAS DE IGUALDAD";
 preguntaids[61] = 410


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[62]= "63)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[62]= new Array();
 choices[62][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[62][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[62][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[62][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[62] = choices[62][1];
 units[62] = "5";
 comments[62] = "Id Pregunta: 298. UNION EUROPEA";
 preguntaids[62] = 298


//  Id pregunta: 28 Año de creación de pregunta: 2016
 questions[63]= "64)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[63]= new Array();
 choices[63][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[63][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[63][2] = "Crea una copia del proceso que hace la llamada.";
 choices[63][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[63] = choices[63][2];
 units[63] = "57";
 comments[63] = "Id Pregunta: 28. AGE A1 2015";
 preguntaids[63] = 28


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[64]= "65)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[64]= new Array();
 choices[64][0] = "0";
 choices[64][1] = "1";
 choices[64][2] = "Tantos como peticiones concurrentes tenga.";
 choices[64][3] = "Tantos como le permita la memoria de la JVM.";
 answers[64] = choices[64][1];
 units[64] = "64";
 comments[64] = "Id Pregunta: 15. AGE A1 2015";
 preguntaids[64] = 15


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes no es una prioridad propuesta por la Estrategia Europa 2020?";
 choices[65]= new Array();
 choices[65][0] = "Crecimiento sostenible";
 choices[65][1] = "Crecimiento inteligente";
 choices[65][2] = "Crecimiento digital";
 choices[65][3] = "Crecimiento integrador";
 answers[65] = choices[65][2];
 units[65] = "19";
 comments[65] = "Id Pregunta: 759. Europa 2020";
 preguntaids[65] = 759


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[66]= "67)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[66]= new Array();
 choices[66][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[66][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[66][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[66][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[66] = choices[66][1];
 units[66] = "1";
 comments[66] = "Id Pregunta: 238. CONSTITUCION1978";
 preguntaids[66] = 238


//  Id pregunta: 206 Año de creación de pregunta: 2016
 questions[67]= "68)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[67]= new Array();
 choices[67][0] = "El Gobierno.";
 choices[67][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[67][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[67][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[67] = choices[67][2];
 units[67] = "1";
 comments[67] = "Id Pregunta: 206. CONSTITUCION1978";
 preguntaids[67] = 206


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[68]= new Array();
 choices[68][0] = "Diagrama de clases";
 choices[68][1] = "Diagrama de componentes";
 choices[68][2] = "Diagrama de estructura";
 choices[68][3] = "Diagrama de paquetes";
 answers[68] = choices[68][0];
 units[68] = "91";
 comments[68] = "Id Pregunta: 88. AGE A1 2015";
 preguntaids[68] = 88


//  Id pregunta: 10 Año de creación de pregunta: 2016
 questions[69]= "70)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[69]= new Array();
 choices[69][0] = "Paging";
 choices[69][1] = "Roaming";
 choices[69][2] = "Handover";
 choices[69][3] = "Trunking";
 answers[69] = choices[69][0];
 units[69] = "117";
 comments[69] = "Id Pregunta: 10. AGE A1 2015";
 preguntaids[69] = 10


//  Id pregunta: 235 Año de creación de pregunta: 2016
 questions[70]= "71)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[70]= new Array();
 choices[70][0] = "El Jefe del Estado.";
 choices[70][1] = "El Tribunal Constitucional.";
 choices[70][2] = "El Congreso de los Diputados.";
 choices[70][3] = "Las Cortes Generales.";
 answers[70] = choices[70][0];
 units[70] = "1";
 comments[70] = "Id Pregunta: 235. CONSTITUCION1978";
 preguntaids[70] = 235


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[71]= new Array();
 choices[71][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[71][1] = "El Gobierno.";
 choices[71][2] = "El Presidente del Gobierno.";
 choices[71][3] = "El Consejo de Ministros.";
 answers[71] = choices[71][1];
 units[71] = "10";
 comments[71] = "Id Pregunta: 490. PRESUPUESTOS GENERALES";
 preguntaids[71] = 490


//  Id pregunta: 702 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes NO es un repositorio de c&oacute;digo?";
 choices[72]= new Array();
 choices[72][0] = "CVS";
 choices[72][1] = "SVN";
 choices[72][2] = "Team Foundation Server";
 choices[72][3] = "Apache Tomcat";
 answers[72] = choices[72][3];
 units[72] = "92";
 comments[72] = "Id Pregunta: 702. INTEGRACION CONTINUA";
 preguntaids[72] = 702


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[73]= "74)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[73]= new Array();
 choices[73][0] = "La Ley General Tributaria.";
 choices[73][1] = "La Ley Presupuestaria.";
 choices[73][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[73][3] = "Ninguna de las respuestas es correcta.";
 answers[73] = choices[73][0];
 units[73] = "10";
 comments[73] = "Id Pregunta: 488. PRESUPUESTOS GENERALES";
 preguntaids[73] = 488


//  Id pregunta: 664 Año de creación de pregunta: 2016
 questions[74]= "75)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[74]= new Array();
 choices[74][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[74][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[74][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[74][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que hayan sido elaborado por &eacute;ste.";
 answers[74] = choices[74][1];
 units[74] = "7";
 comments[74] = "Id Pregunta: 664. Art&iacute;culo 53 de la Ley 39/2015";
 preguntaids[74] = 664


