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

//  Id pregunta: 389 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[0]= new Array();
 choices[0][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[0][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[0][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[0][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[0] = choices[0][0];
 units[0] = "14";
 comments[0] = "Id Pregunta: 389. POLITICAS DE IGUALDAD";


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


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[2]= "3)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[2]= new Array();
 choices[2][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[2][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[2][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[2][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[2] = choices[2][2];
 units[2] = "1";
 comments[2] = "Id Pregunta: 177. CONSTITUCION1978";


//  Id pregunta: 645 Año de creación de pregunta: 2016
 questions[3]= "4)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[3]= new Array();
 choices[3][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[3][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[3][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[3][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[3] = choices[3][2];
 units[3] = "85";
 comments[3] = "Id Pregunta: 645. Junta de Extremadura A1 2015";


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[4]= new Array();
 choices[4][0] = "Ley 50/1997, del Gobierno.";
 choices[4][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[4][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[4][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[4] = choices[4][1];
 units[4] = "10";
 comments[4] = "Id Pregunta: 475. PRESUPUESTOS GENERALES";


//  Id pregunta: 434 Año de creación de pregunta: 2016
 questions[5]= "6)  En cuanto al sistema EGEO, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[5]= new Array();
 choices[5][0] = "Permite la representaci&oacute;n de mapas tem&aacute;ticos, georreferenciados, buscador de recursos georreferenciados con filtros definidos por el usuario, y de magnitud.";
 choices[5][1] = "Utiliza &uacute;nicamente sobre mapas oficiales del Instituto Geogr&aacute;fico Nacional (IGN).";
 choices[5][2] = "Es un servicio com&uacute;n dirigido a &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[5][3] = "Para su manejo, es necesario contar con conocimientos de georreferenciaci&oacute;n.";
 answers[5] = choices[5][0];
 units[5] = "43";
 comments[5] = "Id Pregunta: 434. SERVICIOS COMUNES";


//  Id pregunta: 281 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale la respuesta falsa:";
 choices[6]= new Array();
 choices[6][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[6][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[6][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[6][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[6] = choices[6][3];
 units[6] = "5";
 comments[6] = "Id Pregunta: 281. UNION EUROPEA";


//  Id pregunta: 14 Año de creación de pregunta: 2016
 questions[7]= "8)  Se&ntilde;ale la respuesta correcta:";
 choices[7]= new Array();
 choices[7][0] = "La norma ISO 9004 est&aacute; compuesta por las normas ISO 9000:2005, ISO 9002:2008 e ISO 9004:2009.";
 choices[7][1] = "La norma ISO 9004:2009 se refiere a la gesti&oacute;n para el &eacute;xito sostenido de una organizaci&oacute;n, con un enfoque de gesti&oacute;n de la calidad.";
 choices[7][2] = "La norma ISO 9004:2009 se refiere a los principios y vocabulario de los sistemas de gesti&oacute;n de calidad.";
 choices[7][3] = "La norma ISO 9002:2008 se refiere a los requisitos de los sistemas de gesti&oacute;n de calidad.";
 answers[7] = choices[7][1];
 units[7] = "98";
 comments[7] = "Id Pregunta: 14. AGE A1 2015";


//  Id pregunta: 40 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[8]= new Array();
 choices[8][0] = "Drupal";
 choices[8][1] = "Cassandra";
 choices[8][2] = "Wordpress";
 choices[8][3] = "OpenCMS";
 answers[8] = choices[8][1];
 units[8] = "99";
 comments[8] = "Id Pregunta: 40. AGE A1 2015";


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[9]= new Array();
 choices[9][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[9][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[9][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[9][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[9] = choices[9][2];
 units[9] = "17";
 comments[9] = "Id Pregunta: 558. Mercado &Uacute;nico Digital";


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[10]= "11)  En las Administraciones P&uacute;blicas...";
 choices[10]= new Array();
 choices[10][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[10][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[10][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[10][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[10] = choices[10][0];
 units[10] = "10";
 comments[10] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[11]= "12)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[11]= new Array();
 choices[11][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[11][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[11][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[11][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[11] = choices[11][2];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 813. Ley 40/2015";


//  Id pregunta: 781 Año de creación de pregunta: 2016
 questions[12]= "13)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[12]= new Array();
 choices[12][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[12][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[12][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[12][3] = "todas son correctas";
 answers[12] = choices[12][3];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 781. Ley 40/2015";


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[13]= "14)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[13]= new Array();
 choices[13][0] = "P&uacute;blica.";
 choices[13][1] = "Privada.";
 choices[13][2] = "A y B son correctas.";
 choices[13][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[13] = choices[13][2];
 units[13] = "14";
 comments[13] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[14]= new Array();
 choices[14][0] = "al menos por 50 Diputados.";
 choices[14][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[14][2] = "por la Mesa del Congreso de los Diputados.";
 choices[14][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[14] = choices[14][1];
 units[14] = "1";
 comments[14] = "Id Pregunta: 183. CONSTITUCION1978";


//  Id pregunta: 717 Año de creación de pregunta: 2016
 questions[15]= "16)  Respecto a SonarQube, se&ntilde;ale la FALSA:";
 choices[15]= new Array();
 choices[15][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[15][1] = "Anteriormente se denominaba Sonar.";
 choices[15][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[15][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[15] = choices[15][2];
 units[15] = "92";
 comments[15] = "Id Pregunta: 717. INTEGRACION CONTINUA";


//  Id pregunta: 525 Año de creación de pregunta: 2016
 questions[16]= "17)  Se consideran interesados en el procedimiento administrativo:";
 choices[16]= new Array();
 choices[16][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[16][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[16][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[16][3] = "todas son correctas";
 answers[16] = choices[16][0];
 units[16] = "7";
 comments[16] = "Id Pregunta: 525. LEY 39/2015";


//  Id pregunta: 507 Año de creación de pregunta: 2016
 questions[17]= "18)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[17]= new Array();
 choices[17][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[17][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[17][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[17][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[17] = choices[17][3];
 units[17] = "10";
 comments[17] = "Id Pregunta: 507. PRESUPUESTOS GENERALES";


//  Id pregunta: 245 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[18]= new Array();
 choices[18][0] = "De los derechos y deberes fundamentales.";
 choices[18][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[18][2] = "Derechos y libertades.";
 choices[18][3] = "De la Corona.";
 answers[18] = choices[18][1];
 units[18] = "1";
 comments[18] = "Id Pregunta: 245. CONSTITUCION1978";


//  Id pregunta: 122 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[19]= new Array();
 choices[19][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[19][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[19][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[19][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[19] = choices[19][1];
 units[19] = "22";
 comments[19] = "Id Pregunta: 122. ";


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[20]= "21)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[20]= new Array();
 choices[20][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[20][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[20][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[20][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[20] = choices[20][3];
 units[20] = "57";
 comments[20] = "Id Pregunta: 640. Junta de Extremadura A1 2015";


//  Id pregunta: 402 Año de creación de pregunta: 2016
 questions[21]= "22)  El principio de igualdad de trato y oportunidades entre mujeres y hombres tiene car&aacute;cter:";
 choices[21]= new Array();
 choices[21][0] = "Parcial.";
 choices[21][1] = "Sectorial.";
 choices[21][2] = "Tranversal.";
 choices[21][3] = "Vertical.";
 answers[21] = choices[21][2];
 units[21] = "14";
 comments[21] = "Id Pregunta: 402. POLITICAS DE IGUALDAD";


//  Id pregunta: 730 Año de creación de pregunta: 2016
 questions[22]= "23)  Indica la respuesta correcta";
 choices[22]= new Array();
 choices[22][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[22][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[22][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[22][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[22] = choices[22][0];
 units[22] = "34, 84";
 comments[22] = "Id Pregunta: 730. Metodologias &aacute;giles";


//  Id pregunta: 341 Año de creación de pregunta: 2016
 questions[23]= "24)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[23]= new Array();
 choices[23][0] = "623";
 choices[23][1] = "649";
 choices[23][2] = "626";
 choices[23][3] = "565";
 answers[23] = choices[23][2];
 units[23] = "5";
 comments[23] = "Id Pregunta: 341. UNION EUROPEA";


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[24]= "25)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[24]= new Array();
 choices[24][0] = "El Tratado de Maastrich.";
 choices[24][1] = "El Tratado de Amsterdam.";
 choices[24][2] = "El Tratado de Par&iacute;s.";
 choices[24][3] = "El Tratado de Roma.";
 answers[24] = choices[24][3];
 units[24] = "5";
 comments[24] = "Id Pregunta: 342. UNION EUROPEA";


//  Id pregunta: 619 Año de creación de pregunta: 2016
 questions[25]= "26)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[25]= new Array();
 choices[25][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[25][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[25][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[25][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[25] = choices[25][0];
 units[25] = "84";
 comments[25] = "Id Pregunta: 619. Junta de Extremadura A1 2015";


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[26]= "27)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[26]= new Array();
 choices[26][0] = "Un d&iacute;a";
 choices[26][1] = "Dos d&iacute;as";
 choices[26][2] = "Tres d&iacute;as";
 choices[26][3] = "Cuatro d&iacute;as";
 answers[26] = choices[26][3];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 831. Ley 40/2015";


//  Id pregunta: 574 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de la serie IEEE 802.11 se conoce como Fast Basic Service Set Transition, el cual est&aacute; enfocado a permitir la conexi&oacute;n continua de clientes en movimiento?";
 choices[27]= new Array();
 choices[27][0] = "IEEE 802.11p";
 choices[27][1] = "IEEE 802.11r";
 choices[27][2] = "IEEE 802.11v";
 choices[27][3] = "IEEE 802.11w";
 answers[27] = choices[27][1];
 units[27] = "112";
 comments[27] = "Id Pregunta: 574. Tema 112. TAI 2016.";


//  Id pregunta: 182 Año de creación de pregunta: 2016
 questions[28]= "29)  De acuerdo con el T&iacute;tulo II de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; tutor del Rey menor:";
 choices[28]= new Array();
 choices[28][0] = "El que hubiere designado el familiar m&aacute;s cercano al Rey difunto.";
 choices[28][1] = "El que hubiere designado el Rey difunto en su testamento.";
 choices[28][2] = "El que hubieren designado las Cortes Generales.";
 choices[28][3] = "El que hubiere designado el Senado por mayor&iacute;a absoluta.";
 answers[28] = choices[28][1];
 units[28] = "1";
 comments[28] = "Id Pregunta: 182. CONSTITUCION1978";


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[29]= new Array();
 choices[29][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[29][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[29][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[29][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[29] = choices[29][0];
 units[29] = "77";
 comments[29] = "Id Pregunta: 685. Art&iacute;culo 2 del Reglamento 910/2014";


//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[30]= "31)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[30]= new Array();
 choices[30][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[30][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[30][2] = "Absoluta frente a cualquier otro gasto.";
 choices[30][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[30] = choices[30][2];
 units[30] = "10";
 comments[30] = "Id Pregunta: 511. PRESUPUESTOS GENERALES";


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[31]= "32)  Se&ntilde;ale la respuesta correcta:";
 choices[31]= new Array();
 choices[31][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[31][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[31][2] = "A y B son correctas.";
 choices[31][3] = "A y B son falsas.";
 answers[31] = choices[31][2];
 units[31] = "4, 7, 8, 9";
 comments[31] = "Id Pregunta: 848. Ley 40/2015";


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[32]= "33)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[32]= new Array();
 choices[32][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[32][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[32][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[32][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[32] = choices[32][3];
 units[32] = "7";
 comments[32] = "Id Pregunta: 530. LEY 39/2015";


//  Id pregunta: 335 Año de creación de pregunta: 2016
 questions[33]= "34)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[33]= new Array();
 choices[33][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[33][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[33][2] = "Son incompatibles ambas actas de diputado.";
 choices[33][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[33] = choices[33][2];
 units[33] = "5";
 comments[33] = "Id Pregunta: 335. UNION EUROPEA";


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Qu&eacute; es el machine learning?";
 choices[34]= new Array();
 choices[34][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[34][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[34][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[34][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[34] = choices[34][0];
 units[34] = "73";
 comments[34] = "Id Pregunta: 659. ";


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[35]= "36)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[35]= new Array();
 choices[35][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[35][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[35][2] = "Las respuestas a) b) no son correctas.";
 choices[35][3] = "Las respuestas a) y b) son correctas.";
 answers[35] = choices[35][3];
 units[35] = "10";
 comments[35] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[36]= new Array();
 choices[36][0] = "Consumidores";
 choices[36][1] = "PYMES y Start-ups";
 choices[36][2] = "La Industria";
 choices[36][3] = "Todos los anteriores";
 answers[36] = choices[36][3];
 units[36] = "17";
 comments[36] = "Id Pregunta: 557. Mercado &Uacute;nico Digital";


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[37]= "38)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[37]= new Array();
 choices[37][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[37][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[37][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[37][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[37] = choices[37][2];
 units[37] = "1";
 comments[37] = "Id Pregunta: 190. CONSTITUCION1978";


//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[38]= "39)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[38]= new Array();
 choices[38][0] = "el Gobierno de la Naci&oacute;n";
 choices[38][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[38][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[38][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[38] = choices[38][3];
 units[38] = "4, 7, 8, 9";
 comments[38] = "Id Pregunta: 773. Ley 40/2015";


//  Id pregunta: 233 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[39]= new Array();
 choices[39][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[39][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[39][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[39][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[39] = choices[39][2];
 units[39] = "1";
 comments[39] = "Id Pregunta: 233. CONSTITUCION1978";


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[40]= new Array();
 choices[40][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[40][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[40][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[40][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[40] = choices[40][0];
 units[40] = "1";
 comments[40] = "Id Pregunta: 178. CONSTITUCION1978";


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[41]= "42)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[41]= new Array();
 choices[41][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[41][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[41][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[41][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[41] = choices[41][2];
 units[41] = "7";
 comments[41] = "Id Pregunta: 529. LEY 39/2015";


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[42]= new Array();
 choices[42][0] = "El Presidente del Senado";
 choices[42][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[42][2] = "El Presidente del Gobierno";
 choices[42][3] = "El Presidente de las Cortes Generales";
 answers[42] = choices[42][2];
 units[42] = "1";
 comments[42] = "Id Pregunta: 265. CONSTITUCION1978";


//  Id pregunta: 621 Año de creación de pregunta: 2016
 questions[43]= "44)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[43]= new Array();
 choices[43][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[43][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[43][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[43][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[43] = choices[43][1];
 units[43] = "89";
 comments[43] = "Id Pregunta: 621. Junta de Extremadura A1 2015";


//  Id pregunta: 495 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[44]= new Array();
 choices[44][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[44][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[44][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[44][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[44] = choices[44][2];
 units[44] = "10";
 comments[44] = "Id Pregunta: 495. PRESUPUESTOS GENERALES";


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[45]= "46)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[45]= new Array();
 choices[45][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[45][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[45][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[45][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[45] = choices[45][1];
 units[45] = "14";
 comments[45] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";


//  Id pregunta: 585 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[46]= new Array();
 choices[46][0] = "Los principios rectores";
 choices[46][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[46][2] = "Los hitos para su desarrollo gradual";
 choices[46][3] = "Todos los anteriores";
 answers[46] = choices[46][3];
 units[46] = "19";
 comments[46] = "Id Pregunta: 585. Estrategia TIC";


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest; Cu&aacute;l es el n&uacute;mero de personas recomendados para cada team de Scrum?";
 choices[47]= new Array();
 choices[47][0] = "De 1a  4 ";
 choices[47][1] = "De 3 a  7 ";
 choices[47][2] = "De 5 a  9";
 choices[47][3] = "De 7 a 11";
 answers[47] = choices[47][2];
 units[47] = "34, 84";
 comments[47] = "Id Pregunta: 728. Metodologias &aacute;giles";


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[48]= "49)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[48]= new Array();
 choices[48][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[48][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[48][2] = "Ambas son correctas.";
 choices[48][3] = "A y B son incorrectas.";
 answers[48] = choices[48][2];
 units[48] = "14";
 comments[48] = "Id Pregunta: 401. POLITICAS DE IGUALDAD";


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[49]= new Array();
 choices[49][0] = "Cuatro.";
 choices[49][1] = "Ninguno.";
 choices[49][2] = "Dos.";
 choices[49][3] = "Seis.";
 answers[49] = choices[49][2];
 units[49] = "1";
 comments[49] = "Id Pregunta: 211. CONSTITUCION1978";


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[50]= new Array();
 choices[50][0] = "Veinte.";
 choices[50][1] = "Quince.";
 choices[50][2] = "Diez.";
 choices[50][3] = "Doce.";
 answers[50] = choices[50][1];
 units[50] = "1";
 comments[50] = "Id Pregunta: 264. CONSTITUCION1978";


//  Id pregunta: 10 Año de creación de pregunta: 2016
 questions[51]= "52)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[51]= new Array();
 choices[51][0] = "Paging";
 choices[51][1] = "Roaming";
 choices[51][2] = "Handover";
 choices[51][3] = "Trunking";
 answers[51] = choices[51][0];
 units[51] = "117";
 comments[51] = "Id Pregunta: 10. AGE A1 2015";


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[52]= "53)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[52]= new Array();
 choices[52][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[52][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[52][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[52][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[52] = choices[52][2];
 units[52] = "27";
 comments[52] = "Id Pregunta: 20. AGE A1 2015";


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[53]= "54)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[53]= new Array();
 choices[53][0] = "Los cr&eacute;ditos";
 choices[53][1] = "Las partidas presupuestarias";
 choices[53][2] = "Los derechos";
 choices[53][3] = "Las obligaciones";
 answers[53] = choices[53][2];
 units[53] = "10";
 comments[53] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[54]= new Array();
 choices[54][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[54][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[54][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[54][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[54] = choices[54][0];
 units[54] = "1";
 comments[54] = "Id Pregunta: 214. CONSTITUCION1978";


//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[55]= "56)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[55]= new Array();
 choices[55][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[55][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[55][2] = "A y B son correctas.";
 choices[55][3] = "A y B son incorrectas.";
 answers[55] = choices[55][2];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 844. Ley 40/2015";


//  Id pregunta: 473 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[56]= new Array();
 choices[56][0] = "Org&aacute;nica.";
 choices[56][1] = "Contable.";
 choices[56][2] = "Econ&oacute;mica.";
 choices[56][3] = "Por programas.";
 answers[56] = choices[56][2];
 units[56] = "10";
 comments[56] = "Id Pregunta: 473. PRESUPUESTOS GENERALES";


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[57]= new Array();
 choices[57][0] = "El 2 de Octubre de 2015";
 choices[57][1] = "El 15 de Septiembre de 2015";
 choices[57][2] = "El 1 de Octubre de 2015";
 choices[57][3] = "El 5 de Octubre de 2015";
 answers[57] = choices[57][0];
 units[57] = "19";
 comments[57] = "Id Pregunta: 579. Estrategia TIC";


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[58]= "59)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[58]= new Array();
 choices[58][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[58][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[58][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[58][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[58] = choices[58][3];
 units[58] = "44";
 comments[58] = "Id Pregunta: 17. AGE A1 2015";


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[59]= "60)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[59]= new Array();
 choices[59][0] = "Un informe de impacto de g&eacute;nero.";
 choices[59][1] = "Un programa de igualdad de oportunidades.";
 choices[59][2] = "Un plan de Igualdad de Oportunidades.";
 choices[59][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[59] = choices[59][0];
 units[59] = "14";
 comments[59] = "Id Pregunta: 414. POLITICAS DE IGUALDAD";


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[60]= "61)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[60]= new Array();
 choices[60][0] = "De ocho a&ntilde;os.";
 choices[60][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[60][2] = "Ambas son correctas.";
 choices[60][3] = "No existe un l&iacute;mite.";
 answers[60] = choices[60][0];
 units[60] = "14";
 comments[60] = "Id Pregunta: 432. POLITICAS DE IGUALDAD";


//  Id pregunta: 850 Año de creación de pregunta: 2016
 questions[61]= "62)  El RPO (Recovery Point Objective) de una organizaci&oacute;n son 2 horas. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?: ";
 choices[61]= new Array();
 choices[61][0] = "No m&aacute;s de 2 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[61][1] = "No m&aacute;s de 4 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[61][2] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 2 horas.";
 choices[61][3] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 4 horas.";
 answers[61] = choices[61][0];
 units[61] = "45";
 comments[61] = "Id Pregunta: 850. Xunta de Galicia 2015";


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[62]= "63)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[62]= new Array();
 choices[62][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[62][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[62][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[62][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[62] = choices[62][0];
 units[62] = "35";
 comments[62] = "Id Pregunta: 75. AGE A1 2015";


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[63]= "64)  Se&ntilde;ale la respuesta falsa";
 choices[63]= new Array();
 choices[63][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[63][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[63][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[63][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[63] = choices[63][3];
 units[63] = "22";
 comments[63] = "Id Pregunta: 276. LEY DE TRANSPARENCIA";


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[64]= "65)  Se&ntilde;ale la respuesta correcta:";
 choices[64]= new Array();
 choices[64][0] = "corresponde a los &oacute;rganos superiores establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[64][1] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[64][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[64][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[64] = choices[64][0];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 797. Ley 40/2015";


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[65]= "66)  Respecto a los servicios territoriales es correcto:";
 choices[65]= new Array();
 choices[65][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[65][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[65][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[65][3] = "ninguna es correcta";
 answers[65] = choices[65][0];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 820. Ley 40/2015";


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[66]= "67)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[66]= new Array();
 choices[66][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[66][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[66][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[66][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[66] = choices[66][1];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 845. Ley 40/2015";


//  Id pregunta: 385 Año de creación de pregunta: 2016
 questions[67]= "68)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[67]= new Array();
 choices[67][0] = "Anualmente por el Consejo de Ministros";
 choices[67][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[67][2] = "Al final de cada legislatura por el Gobierno";
 choices[67][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[67] = choices[67][0];
 units[67] = "14";
 comments[67] = "Id Pregunta: 385. POLITICAS DE IGUALDAD";


//  Id pregunta: 755 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Qui&eacute;n realiza el seguimiento peri&oacute;dico del cumplimiento de los objetivos de la Agenda Digital para Espa&ntilde;a?";
 choices[68]= new Array();
 choices[68][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital (SGAD)";
 choices[68][1] = "La Asociaci&oacute;n Espa&ntilde;ola de Normalizaci&oacute;n y Certificaci&oacute;n (AENOR)";
 choices[68][2] = "El Observatorio Nacional de Telecomunicaciones y Sociedad de la Informaci&oacute;n (ONTSI)";
 choices[68][3] = "El Observatorio de Administraci&oacute;n Electr&oacute;nica (OBSAE)";
 answers[68] = choices[68][2];
 units[68] = "19";
 comments[68] = "Id Pregunta: 755. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 714 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[69]= new Array();
 choices[69][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[69][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[69][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[69][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[69] = choices[69][3];
 units[69] = "22";
 comments[69] = "Id Pregunta: 714. Ley de transparencia";


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[70]= "71)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[70]= new Array();
 choices[70][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[70][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[70][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[70][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[70] = choices[70][3];
 units[70] = "22";
 comments[70] = "Id Pregunta: 712. Ley de transparencia";


//  Id pregunta: 607 Año de creación de pregunta: 2016
 questions[71]= "72)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[71]= new Array();
 choices[71][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[71][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[71][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[71][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[71] = choices[71][2];
 units[71] = "101";
 comments[71] = "Id Pregunta: 607. Junta de Extremadura A1 2015";


//  Id pregunta: 411 Año de creación de pregunta: 2016
 questions[72]= "73)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[72]= new Array();
 choices[72][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[72][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[72][2] = "Ninguna es correcta.";
 choices[72][3] = "A y B son correctas.";
 answers[72] = choices[72][1];
 units[72] = "14";
 comments[72] = "Id Pregunta: 411. POLITICAS DE IGUALDAD";


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[73]= "74)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[73]= new Array();
 choices[73][0] = "El Presidente del Congreso de los Diputados.";
 choices[73][1] = "El Presidente del Gobierno.";
 choices[73][2] = "El Rey.";
 choices[73][3] = "El Consejo de Ministros.";
 answers[73] = choices[73][0];
 units[73] = "1";
 comments[73] = "Id Pregunta: 231. CONSTITUCION1978";


//  Id pregunta: 839 Año de creación de pregunta: 2016
 questions[74]= "75)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[74]= new Array();
 choices[74][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[74][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[74][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[74][3] = "Todas son correctas.";
 answers[74] = choices[74][3];
 units[74] = "4, 7, 8, 9";
 comments[74] = "Id Pregunta: 839. Ley 40/2015";


