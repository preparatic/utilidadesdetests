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

//  Id pregunta: 556 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[0]= new Array();
 choices[0][0] = "El BCE";
 choices[0][1] = "El Parlamento";
 choices[0][2] = "El Consejo";
 choices[0][3] = "La Comisi&oacute;n";
 answers[0] = choices[0][3];
 units[0] = "17";
 comments[0] = "Id Pregunta: 556. Mercado &Uacute;nico Digital";
 preguntaids[0] = 556


//  Id pregunta: 259 Año de creación de pregunta: 2016
 questions[1]= "2)  La iniciativa legislativa corresponde:";
 choices[1]= new Array();
 choices[1][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[1][1] = "Al rey y al Gobierno.";
 choices[1][2] = "Al Congreso, al Senado y al Rey.";
 choices[1][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[1] = choices[1][3];
 units[1] = "1";
 comments[1] = "Id Pregunta: 259. CONSTITUCION1978";
 preguntaids[1] = 259


//  Id pregunta: 40 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[2]= new Array();
 choices[2][0] = "Drupal";
 choices[2][1] = "Cassandra";
 choices[2][2] = "Wordpress";
 choices[2][3] = "OpenCMS";
 answers[2] = choices[2][1];
 units[2] = "99";
 comments[2] = "Id Pregunta: 40. AGE A1 2015";
 preguntaids[2] = 40


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;les son las caracter&iacute;sticas del sprint 0 en SCRUM?";
 choices[3]= new Array();
 choices[3][0] = "Se dejan listos los entornos de desarrollo";
 choices[3][1] = "Se trabaja en el product backlog, dejando listos los product backlog &iacute;tems priorizados y estimados";
 choices[3][2] = "Se hace una previsi&oacute;n del reparto de historias de usuario por iteraci&oacute;n";
 choices[3][3] = "Todas las anteriores son correctas";
 answers[3] = choices[3][3];
 units[3] = "34, 84";
 comments[3] = "Id Pregunta: 725. Metodologias &aacute;giles";
 preguntaids[3] = 725


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[4]= "5)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[4]= new Array();
 choices[4][0] = "Director General";
 choices[4][1] = "Secretario general";
 choices[4][2] = "Subdirector general";
 choices[4][3] = "Subsecretario";
 answers[4] = choices[4][0];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 805. Ley 40/2015";
 preguntaids[4] = 805


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[5]= "6)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[5]= new Array();
 choices[5][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[5][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[5][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[5][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[5] = choices[5][3];
 units[5] = "14";
 comments[5] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";
 preguntaids[5] = 380


//  Id pregunta: 338 Año de creación de pregunta: 2016
 questions[6]= "7)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[6]= new Array();
 choices[6][0] = "CO.PER.";
 choices[6][1] = "COMPER.";
 choices[6][2] = "CO.RE.PER.";
 choices[6][3] = "CO.PE.RRE.";
 answers[6] = choices[6][2];
 units[6] = "5";
 comments[6] = "Id Pregunta: 338. UNION EUROPEA";
 preguntaids[6] = 338


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[7]= "8)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[7]= new Array();
 choices[7][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[7][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[7][2] = "a y b son correctas";
 choices[7][3] = "a y b son incorrectas";
 answers[7] = choices[7][2];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 783. Ley 40/2015";
 preguntaids[7] = 783


//  Id pregunta: 679 Año de creación de pregunta: 2016
 questions[8]= "9)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[8]= new Array();
 choices[8][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[8][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[8][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[8][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[8] = choices[8][2];
 units[8] = "14";
 comments[8] = "Id Pregunta: 679. Dependencia";
 preguntaids[8] = 679


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[9]= new Array();
 choices[9][0] = "Lean startup";
 choices[9][1] = "Business Model Canvas";
 choices[9][2] = "Dynamic system Development method";
 choices[9][3] = "Lean software development";
 answers[9] = choices[9][2];
 units[9] = "34";
 comments[9] = "Id Pregunta: 722. Metodologias Lean";
 preguntaids[9] = 722


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[10]= new Array();
 choices[10][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[10][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[10][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[10][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[10] = choices[10][2];
 units[10] = "10";
 comments[10] = "Id Pregunta: 486. PRESUPUESTOS GENERALES";
 preguntaids[10] = 486


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[11]= new Array();
 choices[11][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[11][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[11][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[11][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[11] = choices[11][3];
 units[11] = "26";
 comments[11] = "Id Pregunta: 546. Gobernanza TIC";
 preguntaids[11] = 546


//  Id pregunta: 413 Año de creación de pregunta: 2016
 questions[12]= "13)  Gozar&aacute;n de los derecho derivados del principio de igualdad de trato y de la prohibici&oacute;n de discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[12]= new Array();
 choices[12][0] = "La mujeres.";
 choices[12][1] = "Lo hombres.";
 choices[12][2] = "Todas las personas.";
 choices[12][3] = "Las mujeres y ni&ntilde;os menores de 16 a&ntilde;os.";
 answers[12] = choices[12][2];
 units[12] = "14";
 comments[12] = "Id Pregunta: 413. POLITICAS DE IGUALDAD";
 preguntaids[12] = 413


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[13]= "14)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[13]= new Array();
 choices[13][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[13][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[13][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[13][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[13] = choices[13][0];
 units[13] = "1";
 comments[13] = "Id Pregunta: 202. CONSTITUCION1978";
 preguntaids[13] = 202


//  Id pregunta: 236 Año de creación de pregunta: 2016
 questions[14]= "15)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[14]= new Array();
 choices[14][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[14][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[14][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[14][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[14] = choices[14][3];
 units[14] = "1";
 comments[14] = "Id Pregunta: 236. CONSTITUCION1978";
 preguntaids[14] = 236


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[15]= new Array();
 choices[15][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[15][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[15][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[15][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[15] = choices[15][2];
 units[15] = "71";
 comments[15] = "Id Pregunta: 39. AGE A1 2015";
 preguntaids[15] = 39


//  Id pregunta: 333 Año de creación de pregunta: 2016
 questions[16]= "17)  Est&aacute;n legitimados para interponer el recurso de carencia del art. 175 TCE:";
 choices[16]= new Array();
 choices[16][0] = "Las instituciones comunitarias.";
 choices[16][1] = "Los Estados miembros y las instituciones comunitarias.";
 choices[16][2] = "Los Estados miembros.";
 choices[16][3] = "Los nacionales de los Estados miembros.";
 answers[16] = choices[16][1];
 units[16] = "5";
 comments[16] = "Id Pregunta: 333. UNION EUROPEA";
 preguntaids[16] = 333


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[17]= "18)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[17]= new Array();
 choices[17][0] = "Decretos Legislativos.";
 choices[17][1] = "Decretos-leyes.";
 choices[17][2] = "Leyes de bases.";
 choices[17][3] = "Reales Decretos del Consejo de Ministros.";
 answers[17] = choices[17][0];
 units[17] = "1";
 comments[17] = "Id Pregunta: 204. CONSTITUCION1978";
 preguntaids[17] = 204


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[18]= "19)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[18]= new Array();
 choices[18][0] = "Un plan de igualdad.";
 choices[18][1] = "Un informe de impacto de g&eacute;nero.";
 choices[18][2] = "Un programa de igualdad.";
 choices[18][3] = "Todas son correctas.";
 answers[18] = choices[18][1];
 units[18] = "14";
 comments[18] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";
 preguntaids[18] = 426


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[19]= new Array();
 choices[19][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[19][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[19][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[19][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[19] = choices[19][1];
 units[19] = "19";
 comments[19] = "Id Pregunta: 581. Estrategia TIC";
 preguntaids[19] = 581


//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[20]= "21)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[20]= new Array();
 choices[20][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[20][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[20][2] = "Veintisiete Jueces y ocho Abogados Generales.";
 choices[20][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[20] = choices[20][2];
 units[20] = "5";
 comments[20] = "Id Pregunta: 354. UNION EUROPEA";
 preguntaids[20] = 354


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[21]= "22)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[21]= new Array();
 choices[21][0] = "Interchange of Data between Administrations (IDA)";
 choices[21][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[21][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[21][3] = "Interoperability Electronic European Solution (IEES)";
 answers[21] = choices[21][1];
 units[21] = "43";
 comments[21] = "Id Pregunta: 84. AGE A1 2015";
 preguntaids[21] = 84


//  Id pregunta: 544 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[22]= new Array();
 choices[22][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[22][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[22][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[22][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[22] = choices[22][0];
 units[22] = "26";
 comments[22] = "Id Pregunta: 544. Gobernanza TIC";
 preguntaids[22] = 544


//  Id pregunta: 710 Año de creación de pregunta: 2016
 questions[23]= "24)  Indique la afirmaci&oacute;n falsa:";
 choices[23]= new Array();
 choices[23][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[23][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[23][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[23][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[23] = choices[23][1];
 units[23] = "22";
 comments[23] = "Id Pregunta: 710. Ley de transparencia";
 preguntaids[23] = 710


//  Id pregunta: 664 Año de creación de pregunta: 2016
 questions[24]= "25)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[24]= new Array();
 choices[24][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[24][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[24][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[24][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que hayan sido elaborado por &eacute;ste.";
 answers[24] = choices[24][1];
 units[24] = "7";
 comments[24] = "Id Pregunta: 664. Art&iacute;culo 53 de la Ley 39/2015";
 preguntaids[24] = 664


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[25]= "26)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[25]= new Array();
 choices[25][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[25][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[25][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[25][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[25] = choices[25][2];
 units[25] = "22";
 comments[25] = "Id Pregunta: 706. Ley de transparencia";
 preguntaids[25] = 706


//  Id pregunta: 272 Año de creación de pregunta: 2016
 questions[26]= "27)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[26]= new Array();
 choices[26][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[26][1] = "Anteriormente se denominaba Sonar.";
 choices[26][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[26][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[26] = choices[26][2];
 units[26] = "92";
 comments[26] = "Id Pregunta: 272. INTEGRACION CONTINUA";
 preguntaids[26] = 272


//  Id pregunta: 612 Año de creación de pregunta: 2016
 questions[27]= "28)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[27]= new Array();
 choices[27][0] = "GROUP BY.";
 choices[27][1] = "COUNT.";
 choices[27][2] = "WHERE.";
 choices[27][3] = "DISTINCT.";
 answers[27] = choices[27][0];
 units[27] = "60";
 comments[27] = "Id Pregunta: 612. Junta de Extremadura A1 2015";
 preguntaids[27] = 612


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[28]= "29)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[28]= new Array();
 choices[28][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[28][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[28][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[28][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[28] = choices[28][0];
 units[28] = "7";
 comments[28] = "Id Pregunta: 520. LEY 39/2015";
 preguntaids[28] = 520


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[29]= "30)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[29]= new Array();
 choices[29][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[29][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[29][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[29][3] = "Todos las anteriores son ciertas.";
 answers[29] = choices[29][3];
 units[29] = "12";
 comments[29] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";
 preguntaids[29] = 137


//  Id pregunta: 751 Año de creación de pregunta: 2016
 questions[30]= "31)  En los or&iacute;genes te&oacute;ricos del t&eacute;rmino gobernanza se encuentra:";
 choices[30]= new Array();
 choices[30][0] = "Peters";
 choices[30][1] = "Hollingsworth";
 choices[30][2] = "Manuel Castells";
 choices[30][3] = "Gaebler";
 answers[30] = choices[30][1];
 units[30] = "20";
 comments[30] = "Id Pregunta: 751. Direcci&oacute;n p&uacute;blica";
 preguntaids[30] = 751


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[31]= "32)  Indique los niveles de seguridad que contempla el Reglamento (UE) 910/2014 para los sistemas de identificaci&oacute;n electr&oacute;nica";
 choices[31]= new Array();
 choices[31][0] = "B&aacute;sico, medio y alto";
 choices[31][1] = "D&eacute;bil y fuerte";
 choices[31][2] = "Bajo, medio y alto";
 choices[31][3] = "Bajo, sustancial y alto";
 answers[31] = choices[31][3];
 units[31] = "77";
 comments[31] = "Id Pregunta: 686. Art&iacute;culo 8 del Reglamento 910/2014";
 preguntaids[31] = 686


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[32]= new Array();
 choices[32][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[32][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[32][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[32][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[32] = choices[32][3];
 units[32] = "22";
 comments[32] = "Id Pregunta: 120. ";
 preguntaids[32] = 120


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[33]= new Array();
 choices[33][0] = "Consumidores";
 choices[33][1] = "PYMES y Start-ups";
 choices[33][2] = "La Industria";
 choices[33][3] = "Todos los anteriores";
 answers[33] = choices[33][3];
 units[33] = "17";
 comments[33] = "Id Pregunta: 557. Mercado &Uacute;nico Digital";
 preguntaids[33] = 557


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[34]= "35)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[34]= new Array();
 choices[34][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[34][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[34][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[34][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[34] = choices[34][1];
 units[34] = "64";
 comments[34] = "Id Pregunta: 11. AGE A1 2015";
 preguntaids[34] = 11


//  Id pregunta: 22 Año de creación de pregunta: 2016
 questions[35]= "36)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[35]= new Array();
 choices[35][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[35][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[35][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[35][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[35] = choices[35][1];
 units[35] = "26";
 comments[35] = "Id Pregunta: 22. AGE A1 2015";
 preguntaids[35] = 22


//  Id pregunta: 399 Año de creación de pregunta: 2016
 questions[36]= "37)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[36]= new Array();
 choices[36][0] = "Acciones de discriminaci&oacute;n.";
 choices[36][1] = "Acciones positivas.";
 choices[36][2] = "Acciones negativas.";
 choices[36][3] = "Acciones neutras.";
 answers[36] = choices[36][1];
 units[36] = "14";
 comments[36] = "Id Pregunta: 399. POLITICAS DE IGUALDAD";
 preguntaids[36] = 399


//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[37]= new Array();
 choices[37][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[37][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[37][2] = "Fecha de otorgamiento.";
 choices[37][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[37] = choices[37][1];
 units[37] = "43";
 comments[37] = "Id Pregunta: 447. SERVICIOS COMUNES";
 preguntaids[37] = 447


//  Id pregunta: 358 Año de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[38]= new Array();
 choices[38][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[38][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[38][2] = "c) Todas las respuestas son correctas.";
 choices[38][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[38] = choices[38][1];
 units[38] = "5";
 comments[38] = "Id Pregunta: 358. UNION EUROPEA";
 preguntaids[38] = 358


//  Id pregunta: 599 Año de creación de pregunta: 2016
 questions[39]= "40)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[39]= new Array();
 choices[39][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[39][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[39][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[39][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[39] = choices[39][0];
 units[39] = "45";
 comments[39] = "Id Pregunta: 599. Junta de Extremadura A1 2015";
 preguntaids[39] = 599


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[40]= new Array();
 choices[40][0] = "En t&iacute;tulos-valores.";
 choices[40][1] = "Las respuestas a) y b) son correctas.";
 choices[40][2] = "Las respuestas a) y b) no son correctas.";
 choices[40][3] = "En cuenta.";
 answers[40] = choices[40][1];
 units[40] = "10";
 comments[40] = "Id Pregunta: 500. PRESUPUESTOS GENERALES";
 preguntaids[40] = 500


//  Id pregunta: 645 Año de creación de pregunta: 2016
 questions[41]= "42)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[41]= new Array();
 choices[41][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[41][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[41][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[41][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[41] = choices[41][2];
 units[41] = "85";
 comments[41] = "Id Pregunta: 645. Junta de Extremadura A1 2015";
 preguntaids[41] = 645


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[42]= "43)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[42]= new Array();
 choices[42][0] = "la Administraci&oacute;n General del Estado";
 choices[42][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[42][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[42][3] = "el sector p&uacute;blico y privado institucional";
 answers[42] = choices[42][3];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 765. Ley 40/2015";
 preguntaids[42] = 765


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[43]= "44)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[43]= new Array();
 choices[43][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[43][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[43][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[43][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[43] = choices[43][2];
 units[43] = "12";
 comments[43] = "Id Pregunta: 134. Leyes modelo econ&oacute;mico";
 preguntaids[43] = 134


//  Id pregunta: 181 Año de creación de pregunta: 2016
 questions[44]= "45)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[44]= new Array();
 choices[44][0] = "l Consejo General del Poder Judicial";
 choices[44][1] = "El pleno de Tribunal Constitucional";
 choices[44][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[44][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[44] = choices[44][3];
 units[44] = "1";
 comments[44] = "Id Pregunta: 181. CONSTITUCION1978";
 preguntaids[44] = 181


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[45]= "46)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[45]= new Array();
 choices[45][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[45][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[45][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[45][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[45] = choices[45][2];
 units[45] = "26";
 comments[45] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";
 preguntaids[45] = 99


//  Id pregunta: 542 Año de creación de pregunta: 2016
 questions[46]= "47)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[46]= new Array();
 choices[46][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[46][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[46][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[46][3] = "todas son correctas";
 answers[46] = choices[46][3];
 units[46] = "7";
 comments[46] = "Id Pregunta: 542. LEY 39/2015";
 preguntaids[46] = 542


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[47]= "48)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[47]= new Array();
 choices[47][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[47][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[47][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[47][3] = "Todas las respuestas anteriores son correctas.";
 answers[47] = choices[47][0];
 units[47] = "45";
 comments[47] = "Id Pregunta: 600. Junta de Extremadura A1 2015";
 preguntaids[47] = 600


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[48]= new Array();
 choices[48][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[48][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[48][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[48][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[48] = choices[48][1];
 units[48] = "84";
 comments[48] = "Id Pregunta: 53. AGE A1 2015";
 preguntaids[48] = 53


//  Id pregunta: 324 Año de creación de pregunta: 2016
 questions[49]= "50)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[49]= new Array();
 choices[49][0] = "Tres a&ntilde;os.";
 choices[49][1] = "Cuatro a&ntilde;os.";
 choices[49][2] = "Cinco a&ntilde;os.";
 choices[49][3] = "Seis a&ntilde;os.";
 answers[49] = choices[49][0];
 units[49] = "5";
 comments[49] = "Id Pregunta: 324. UNION EUROPEA";
 preguntaids[49] = 324


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[50]= "51)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[50]= new Array();
 choices[50][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[50][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[50][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[50][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[50] = choices[50][2];
 units[50] = "1";
 comments[50] = "Id Pregunta: 190. CONSTITUCION1978";
 preguntaids[50] = 190


//  Id pregunta: 262 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[51]= new Array();
 choices[51][0] = "Constitucional.";
 choices[51][1] = "Penal.";
 choices[51][2] = "Militar.";
 choices[51][3] = "Tribunales consuetudinarios.";
 answers[51] = choices[51][0];
 units[51] = "1";
 comments[51] = "Id Pregunta: 262. CONSTITUCION1978";
 preguntaids[51] = 262


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[52]= "53)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[52]= new Array();
 choices[52][0] = "Subsecretario";
 choices[52][1] = "Subdirector general";
 choices[52][2] = "Secretario de Estado";
 choices[52][3] = "ninguna es correcta";
 answers[52] = choices[52][0];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 791. Ley 40/2015";
 preguntaids[52] = 791


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[53]= "54)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[53]= new Array();
 choices[53][0] = "Con el a&ntilde;o anterior.";
 choices[53][1] = "Con los tres a&ntilde;os anteriores.";
 choices[53][2] = "Con el a&ntilde;o natural.";
 choices[53][3] = "Con los dos a&ntilde;os anteriores.";
 answers[53] = choices[53][2];
 units[53] = "10";
 comments[53] = "Id Pregunta: 468. PRESUPUESTOS GENERALES";
 preguntaids[53] = 468


//  Id pregunta: 234 Año de creación de pregunta: 2016
 questions[54]= "55)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[54]= new Array();
 choices[54][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[54][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[54][2] = "Al Congreso de los Diputados.";
 choices[54][3] = "Al Gobierno.";
 answers[54] = choices[54][0];
 units[54] = "1";
 comments[54] = "Id Pregunta: 234. CONSTITUCION1978";
 preguntaids[54] = 234


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[55]= "56)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[55]= new Array();
 choices[55][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[55][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[55][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[55][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[55] = choices[55][1];
 units[55] = "14";
 comments[55] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";
 preguntaids[55] = 412


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[56]= "57)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[56]= new Array();
 choices[56][0] = "Cincuenta y cuatro.";
 choices[56][1] = "Cincuenta.";
 choices[56][2] = "Cincuenta y cinco.";
 choices[56][3] = "Cincuenta y dos.";
 answers[56] = choices[56][1];
 units[56] = "5";
 comments[56] = "Id Pregunta: 321. UNION EUROPEA";
 preguntaids[56] = 321


//  Id pregunta: 799 Año de creación de pregunta: 2016
 questions[57]= "58)  Los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[57]= new Array();
 choices[57][0] = "los &oacute;rganos administrativos";
 choices[57][1] = "las entidades dependientes";
 choices[57][2] = "las unidades administrativas";
 choices[57][3] = "los servicios comunes";
 answers[57] = choices[57][2];
 units[57] = "4, 7, 8, 9";
 comments[57] = "Id Pregunta: 799. Ley 40/2015";
 preguntaids[57] = 799


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[58]= "59)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[58]= new Array();
 choices[58][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[58][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[58][2] = "El Presidente del Gobierno";
 choices[58][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[58] = choices[58][1];
 units[58] = "26";
 comments[58] = "Id Pregunta: 551. Gobernanza TIC";
 preguntaids[58] = 551


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[59]= new Array();
 choices[59][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[59][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[59][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[59][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[59] = choices[59][1];
 units[59] = "19";
 comments[59] = "Id Pregunta: 757. Agenda Digital para Espa&ntilde;a";
 preguntaids[59] = 757


//  Id pregunta: 309 Año de creación de pregunta: 2016
 questions[60]= "61)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[60]= new Array();
 choices[60][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[60][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[60][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[60][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[60] = choices[60][0];
 units[60] = "5";
 comments[60] = "Id Pregunta: 309. UNION EUROPEA";
 preguntaids[60] = 309


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[61]= "62)  Se&ntilde;ale la respuesta falsa:";
 choices[61]= new Array();
 choices[61][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[61][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[61][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[61][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[61] = choices[61][2];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 847. Ley 40/2015";
 preguntaids[61] = 847


//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[62]= "63)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[62]= new Array();
 choices[62][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[62][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[62][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[62][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[62] = choices[62][1];
 units[62] = "43";
 comments[62] = "Id Pregunta: 443. SERVICIOS COMUNES";
 preguntaids[62] = 443


//  Id pregunta: 76 Año de creación de pregunta: 2016
 questions[63]= "64)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[63]= new Array();
 choices[63][0] = "Estrat&eacute;gico";
 choices[63][1] = "Operativo";
 choices[63][2] = "T&aacute;ctico";
 choices[63][3] = "Tecnol&oacute;gico";
 answers[63] = choices[63][0];
 units[63] = "36";
 comments[63] = "Id Pregunta: 76. AGE A1 2015";
 preguntaids[63] = 76


//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[64]= new Array();
 choices[64][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[64][1] = "El sprint release es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM";
 choices[64][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[64][3] = "En el sprint release se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[64] = choices[64][1];
 units[64] = "34, 84";
 comments[64] = "Id Pregunta: 726. Metodologias &aacute;giles";
 preguntaids[64] = 726


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[65]= "66)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[65]= new Array();
 choices[65][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[65][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[65][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[65][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[65] = choices[65][3];
 units[65] = "14";
 comments[65] = "Id Pregunta: 387. POLITICAS DE IGUALDAD";
 preguntaids[65] = 387


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[66]= "67)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[66]= new Array();
 choices[66][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[66][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[66][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[66][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[66] = choices[66][3];
 units[66] = "77";
 comments[66] = "Id Pregunta: 48. AGE A1 2015";
 preguntaids[66] = 48


//  Id pregunta: 145 Año de creación de pregunta: 2016
 questions[67]= "68)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[67]= new Array();
 choices[67][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[67][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[67][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[67][3] = "Todas las anteriores son ciertas";
 answers[67] = choices[67][3];
 units[67] = "8";
 comments[67] = "Id Pregunta: 145. Ley 39/2015, Art&iacute;culo 125";
 preguntaids[67] = 145


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[68]= new Array();
 choices[68][0] = "Veinte.";
 choices[68][1] = "Quince.";
 choices[68][2] = "Diez.";
 choices[68][3] = "Doce.";
 answers[68] = choices[68][1];
 units[68] = "1";
 comments[68] = "Id Pregunta: 264. CONSTITUCION1978";
 preguntaids[68] = 264


//  Id pregunta: 598 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[69]= new Array();
 choices[69][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[69][1] = "Las CMADs";
 choices[69][2] = "Ambas son correctas.";
 choices[69][3] = "Ninguna es correcta";
 answers[69] = choices[69][2];
 units[69] = "19";
 comments[69] = "Id Pregunta: 598. Estrategia TIC";
 preguntaids[69] = 598


//  Id pregunta: 327 Año de creación de pregunta: 2016
 questions[70]= "71)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[70]= new Array();
 choices[70][0] = "X.";
 choices[70][1] = "XIX.";
 choices[70][2] = "XV.";
 choices[70][3] = "XIII.";
 answers[70] = choices[70][1];
 units[70] = "5";
 comments[70] = "Id Pregunta: 327. UNION EUROPEA";
 preguntaids[70] = 327


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[71]= "72)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[71]= new Array();
 choices[71][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[71][1] = "los Subdelegados del Gobierno en las provincias";
 choices[71][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[71][3] = "a y b son correctas";
 answers[71] = choices[71][3];
 units[71] = "4, 7, 8, 9";
 comments[71] = "Id Pregunta: 790. Ley 40/2015";
 preguntaids[71] = 790


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[72]= "73)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[72]= new Array();
 choices[72][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[72][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[72][2] = "a y b son correctas";
 choices[72][3] = "a y b son incorrectas";
 answers[72] = choices[72][0];
 units[72] = "7";
 comments[72] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";
 preguntaids[72] = 153


//  Id pregunta: 345 Año de creación de pregunta: 2016
 questions[73]= "74)  El procedimiento de dictamen simple o dictamen consultivo significa que:";
 choices[73]= new Array();
 choices[73][0] = "El Consejo debe obtener la aprobaci&oacute;n del Parlamento Europeo para que se tomen determinadas decisiones de primera importancia.";
 choices[73][1] = "Por el que se da poder al Parlamento Europeo para una mayor posibilidad de influir sobre el proceso legislativo mediante una &quot;doble lectura&quot; de las propuestas legislativas de la Comisi&oacute;n.";
 choices[73][2] = "Por el que se da poder al Parlamento Europeo para aprobar disposiciones conjuntamente con el Consejo.";
 choices[73][3] = "El Consejo consulte al Parlamento Europeo y tome sus puntos de vista en consideraci&oacute;n.";
 answers[73] = choices[73][3];
 units[73] = "5";
 comments[73] = "Id Pregunta: 345. UNION EUROPEA";
 preguntaids[73] = 345


//  Id pregunta: 249 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[74]= new Array();
 choices[74][0] = "Art&iacute;culo 16.2.";
 choices[74][1] = "Art&iacute;culo 17.1.";
 choices[74][2] = "Art&iacute;culo 18.1.";
 choices[74][3] = "Art&iacute;culo 18.2.";
 answers[74] = choices[74][0];
 units[74] = "1";
 comments[74] = "Id Pregunta: 249. CONSTITUCION1978";
 preguntaids[74] = 249


