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

//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[0]= "1)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[0]= new Array();
 choices[0][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[0][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[0][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[0][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[0] = choices[0][1];
 units[0] = "19";
 comments[0] = "Id Pregunta: 167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";
 preguntaids[0] = 167


//  Id pregunta: 761 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;En cu&aacute;ntos pilares se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[1]= new Array();
 choices[1][0] = "3 pilares";
 choices[1][1] = "4 pilares";
 choices[1][2] = "5 pilares";
 choices[1][3] = "7 pilares";
 answers[1] = choices[1][0];
 units[1] = "17";
 comments[1] = "Id Pregunta: 761. Mercado &Uacute;nico Digital";
 preguntaids[1] = 761


//  Id pregunta: 645 Año de creación de pregunta: 2016
 questions[2]= "3)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[2]= new Array();
 choices[2][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[2][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[2][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[2][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[2] = choices[2][2];
 units[2] = "85";
 comments[2] = "Id Pregunta: 645. Junta de Extremadura A1 2015";
 preguntaids[2] = 645


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[3]= "4)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[3]= new Array();
 choices[3][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[3][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[3][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[3][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[3] = choices[3][0];
 units[3] = "1";
 comments[3] = "Id Pregunta: 270. CONSTITUCION1978";
 preguntaids[3] = 270


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[4]= new Array();
 choices[4][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[4][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[4][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[4][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[4] = choices[4][0];
 units[4] = "1";
 comments[4] = "Id Pregunta: 199. CONSTITUCION1978";
 preguntaids[4] = 199


//  Id pregunta: 4 Año de creación de pregunta: 2016
 questions[5]= "6)  Un wireframe es:";
 choices[5]= new Array();
 choices[5][0] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiFi.";
 choices[5][1] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiMAX.";
 choices[5][2] = "Un modelo que permite evaluar el impacto de las nuevas tecnolog&iacute;as en la mejora de la calidad de vida durante la puesta en marcha de una ciudad inteligente (smart city).";
 choices[5][3] = "Una interfaz visual que representa la estructura visual de un sitio web y la relaci&oacute;n entre sus p&aacute;ginas.";
 answers[5] = choices[5][3];
 units[5] = "62";
 comments[5] = "Id Pregunta: 4. AGE A1 2015";
 preguntaids[5] = 4


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale la respuesta correcta:";
 choices[6]= new Array();
 choices[6][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[6][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[6][2] = "Las respuestas A y B son correctas.";
 choices[6][3] = "Las respuestas A y B son falsas.";
 answers[6] = choices[6][2];
 units[6] = "5";
 comments[6] = "Id Pregunta: 279. UNION EUROPEA";
 preguntaids[6] = 279


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[7]= "8)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[7]= new Array();
 choices[7][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[7][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[7][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[7][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[7] = choices[7][3];
 units[7] = "5";
 comments[7] = "Id Pregunta: 326. UNION EUROPEA";
 preguntaids[7] = 326


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[8]= "9)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[8]= new Array();
 choices[8][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[8][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[8][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[8][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[8] = choices[8][0];
 units[8] = "77";
 comments[8] = "Id Pregunta: 685. Art&iacute;culo 2 del Reglamento 910/2014";
 preguntaids[8] = 685


//  Id pregunta: 404 Año de creación de pregunta: 2016
 questions[9]= "10)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[9]= new Array();
 choices[9][0] = "El Tratado de Roma, 1957.";
 choices[9][1] = "El Acta &Uacute;nica Europea.";
 choices[9][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[9][3] = "Ninguna es correcta.";
 answers[9] = choices[9][2];
 units[9] = "14";
 comments[9] = "Id Pregunta: 404. POLITICAS DE IGUALDAD";
 preguntaids[9] = 404


//  Id pregunta: 385 Año de creación de pregunta: 2016
 questions[10]= "11)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[10]= new Array();
 choices[10][0] = "Anualmente por el Consejo de Ministros";
 choices[10][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[10][2] = "Al final de cada legislatura por el Gobierno";
 choices[10][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[10] = choices[10][0];
 units[10] = "14";
 comments[10] = "Id Pregunta: 385. POLITICAS DE IGUALDAD";
 preguntaids[10] = 385


//  Id pregunta: 462 Año de creación de pregunta: 2016
 questions[11]= "12)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[11]= new Array();
 choices[11][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[11][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[11][2] = "La normativa reguladora de cada derecho.";
 choices[11][3] = "Ley 50/1997, del Gobierno.";
 answers[11] = choices[11][2];
 units[11] = "10";
 comments[11] = "Id Pregunta: 462. PRESUPUESTOS GENERALES";
 preguntaids[11] = 462


//  Id pregunta: 125 Año de creación de pregunta: 2016
 questions[12]= "13)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[12]= new Array();
 choices[12][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[12][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[12][2] = "La protecci&oacute;n del medio ambiente.";
 choices[12][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[12] = choices[12][0];
 units[12] = "22";
 comments[12] = "Id Pregunta: 125. ";
 preguntaids[12] = 125


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[13]= new Array();
 choices[13][0] = "Es un framework de software libre.";
 choices[13][1] = "Es una base de datos NoSQL.";
 choices[13][2] = "Est&aacute; basado en MapReduce.";
 choices[13][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[13] = choices[13][1];
 units[13] = "73";
 comments[13] = "Id Pregunta: 94. AGE A1 2015";
 preguntaids[13] = 94


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[14]= "15)  La recusaci&oacute;n pueden promoverla...";
 choices[14]= new Array();
 choices[14][0] = "Cualquier &oacute;rgano";
 choices[14][1] = "El interesado";
 choices[14][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[14][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[14] = choices[14][0];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 828. Ley 40/2015";
 preguntaids[14] = 828


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[15]= "16)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[15]= new Array();
 choices[15][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[15][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[15][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[15][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[15] = choices[15][1];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 825. Ley 40/2015";
 preguntaids[15] = 825


//  Id pregunta: 463 Año de creación de pregunta: 2016
 questions[16]= "17)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[16]= new Array();
 choices[16][0] = "A los ministros.";
 choices[16][1] = "Las respuestas a) y b) son correctas.";
 choices[16][2] = "Las respuestas a) y b) no son correctas.";
 choices[16][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[16] = choices[16][1];
 units[16] = "10";
 comments[16] = "Id Pregunta: 463. PRESUPUESTOS GENERALES";
 preguntaids[16] = 463


//  Id pregunta: 599 Año de creación de pregunta: 2016
 questions[17]= "18)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[17]= new Array();
 choices[17][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[17][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[17][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[17][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[17] = choices[17][0];
 units[17] = "45";
 comments[17] = "Id Pregunta: 599. Junta de Extremadura A1 2015";
 preguntaids[17] = 599


//  Id pregunta: 201 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[18]= new Array();
 choices[18][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[18][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[18][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[18][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[18] = choices[18][2];
 units[18] = "1";
 comments[18] = "Id Pregunta: 201. CONSTITUCION1978";
 preguntaids[18] = 201


//  Id pregunta: 10 Año de creación de pregunta: 2016
 questions[19]= "20)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[19]= new Array();
 choices[19][0] = "Paging";
 choices[19][1] = "Roaming";
 choices[19][2] = "Handover";
 choices[19][3] = "Trunking";
 answers[19] = choices[19][0];
 units[19] = "117";
 comments[19] = "Id Pregunta: 10. AGE A1 2015";
 preguntaids[19] = 10


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[20]= "21)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[20]= new Array();
 choices[20][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[20][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[20][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[20][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[20] = choices[20][3];
 units[20] = "86";
 comments[20] = "Id Pregunta: 42. AGE A1 2015";
 preguntaids[20] = 42


//  Id pregunta: 272 Año de creación de pregunta: 2016
 questions[21]= "22)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[21]= new Array();
 choices[21][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[21][1] = "Anteriormente se denominaba Sonar.";
 choices[21][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[21][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[21] = choices[21][2];
 units[21] = "92";
 comments[21] = "Id Pregunta: 272. INTEGRACION CONTINUA";
 preguntaids[21] = 272


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[22]= "23)  Los Reglamentos no se caracterizan por:";
 choices[22]= new Array();
 choices[22][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[22][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[22][2] = "Ser obligatorios.";
 choices[22][3] = "No poseer alcance general.";
 answers[22] = choices[22][3];
 units[22] = "5";
 comments[22] = "Id Pregunta: 359. UNION EUROPEA";
 preguntaids[22] = 359


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[23]= "24)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[23]= new Array();
 choices[23][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[23][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[23][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[23][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[23] = choices[23][3];
 units[23] = "10";
 comments[23] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";
 preguntaids[23] = 505


//  Id pregunta: 603 Año de creación de pregunta: 2016
 questions[24]= "25)  Los criptosistemas pueden clasificarse en:";
 choices[24]= new Array();
 choices[24][0] = "Concretos, Estables e Inestables.";
 choices[24][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[24][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[24][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[24] = choices[24][3];
 units[24] = "76";
 comments[24] = "Id Pregunta: 603. Junta de Extremadura A1 2015";
 preguntaids[24] = 603


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[25]= "26)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[25]= new Array();
 choices[25][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[25][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[25][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[25][3] = "Todas las respuestas son correctas.";
 answers[25] = choices[25][3];
 units[25] = "50";
 comments[25] = "Id Pregunta: 622. Junta de Extremadura A1 2015";
 preguntaids[25] = 622


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[26]= new Array();
 choices[26][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[26][1] = "Intervenci&oacute;n formal y material.";
 choices[26][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[26][3] = "Intervenci&oacute;n formal y general.";
 answers[26] = choices[26][1];
 units[26] = "10";
 comments[26] = "Id Pregunta: 480. PRESUPUESTOS GENERALES";
 preguntaids[26] = 480


//  Id pregunta: 478 Año de creación de pregunta: 2016
 questions[27]= "28)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[27]= new Array();
 choices[27][0] = "Al Gobierno.";
 choices[27][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[27][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[27][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[27] = choices[27][2];
 units[27] = "10";
 comments[27] = "Id Pregunta: 478. PRESUPUESTOS GENERALES";
 preguntaids[27] = 478


//  Id pregunta: 588 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[28]= new Array();
 choices[28][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[28][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[28][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[28][3] = "Ninguna de las anteriores";
 answers[28] = choices[28][1];
 units[28] = "19";
 comments[28] = "Id Pregunta: 588. Estrategia TIC";
 preguntaids[28] = 588


//  Id pregunta: 331 Año de creación de pregunta: 2016
 questions[29]= "30)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[29]= new Array();
 choices[29][0] = "90";
 choices[29][1] = "50";
 choices[29][2] = "64";
 choices[29][3] = "60";
 answers[29] = choices[29][1];
 units[29] = "5";
 comments[29] = "Id Pregunta: 331. UNION EUROPEA";
 preguntaids[29] = 331


//  Id pregunta: 433 Año de creación de pregunta: 2016
 questions[30]= "31)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[30]= new Array();
 choices[30][0] = "Unidad de igualdad.";
 choices[30][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[30][2] = "Ninguna de las anteriores.";
 choices[30][3] = "A y B son correctas.";
 answers[30] = choices[30][1];
 units[30] = "14";
 comments[30] = "Id Pregunta: 433. POLITICAS DE IGUALDAD";
 preguntaids[30] = 433


//  Id pregunta: 6 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[31]= new Array();
 choices[31][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[31][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[31][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[31][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[31] = choices[31][0];
 units[31] = "91";
 comments[31] = "Id Pregunta: 6. AGE A1 2015";
 preguntaids[31] = 6


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[32]= "33)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[32]= new Array();
 choices[32][0] = "El Tratado de Maastrich.";
 choices[32][1] = "El Tratado de Amsterdam.";
 choices[32][2] = "El Tratado de Par&iacute;s.";
 choices[32][3] = "El Tratado de Roma.";
 answers[32] = choices[32][3];
 units[32] = "5";
 comments[32] = "Id Pregunta: 342. UNION EUROPEA";
 preguntaids[32] = 342


//  Id pregunta: 34 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[33]= new Array();
 choices[33][0] = "Memcached";
 choices[33][1] = "OpCache";
 choices[33][2] = "WinCache Extension for PHP";
 choices[33][3] = "Alternative PHP Cache";
 answers[33] = choices[33][0];
 units[33] = "65";
 comments[33] = "Id Pregunta: 34. AGE A1 2015";
 preguntaids[33] = 34


//  Id pregunta: 431 Año de creación de pregunta: 2016
 questions[34]= "35)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[34]= new Array();
 choices[34][0] = "El Instituto de la Mujer.";
 choices[34][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[34][2] = "Ambas son correctas.";
 choices[34][3] = "A y B son incorrectas.";
 answers[34] = choices[34][2];
 units[34] = "14";
 comments[34] = "Id Pregunta: 431. POLITICAS DE IGUALDAD";
 preguntaids[34] = 431


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[35]= "36)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[35]= new Array();
 choices[35][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[35][1] = "Publicidad de las normas.";
 choices[35][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[35][3] = "Coordinaci&oacute;n normativa.";
 answers[35] = choices[35][2];
 units[35] = "1";
 comments[35] = "Id Pregunta: 244. CONSTITUCION1978";
 preguntaids[35] = 244


//  Id pregunta: 625 Año de creación de pregunta: 2016
 questions[36]= "37)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[36]= new Array();
 choices[36][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[36][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[36][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[36][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[36] = choices[36][0];
 units[36] = "65";
 comments[36] = "Id Pregunta: 625. Junta de Extremadura A1 2015";
 preguntaids[36] = 625


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[37]= new Array();
 choices[37][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[37][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[37][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[37][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[37] = choices[37][1];
 units[37] = "15";
 comments[37] = "Id Pregunta: 112. ";
 preguntaids[37] = 112


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[38]= new Array();
 choices[38][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[38][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[38][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[38][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[38] = choices[38][3];
 units[38] = "10";
 comments[38] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";
 preguntaids[38] = 465


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[39]= "40)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[39]= new Array();
 choices[39][0] = "El Presidente y su gabinete.";
 choices[39][1] = "El Presidente y sus Ministros.";
 choices[39][2] = "El Rey y el Presidente.";
 choices[39][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[39] = choices[39][2];
 units[39] = "1";
 comments[39] = "Id Pregunta: 257. CONSTITUCION1978";
 preguntaids[39] = 257


//  Id pregunta: 660 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[40]= new Array();
 choices[40][0] = "NoSQL";
 choices[40][1] = "Sistemas de baja latencia";
 choices[40][2] = "MapReduce";
 choices[40][3] = "Business Intelligence";
 answers[40] = choices[40][1];
 units[40] = "73";
 comments[40] = "Id Pregunta: 660. ";
 preguntaids[40] = 660


//  Id pregunta: 738 Año de creación de pregunta: 2016
 questions[41]= "42)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se basar&aacute;n en:";
 choices[41]= new Array();
 choices[41][0] = "6 principios.";
 choices[41][1] = "7 principios.";
 choices[41][2] = "5 principios.";
 choices[41][3] = "6 directrices.";
 answers[41] = choices[41][2];
 units[41] = "28";
 comments[41] = "Id Pregunta: 738. Estrategia TIC";
 preguntaids[41] = 738


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[42]= "43)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[42]= new Array();
 choices[42][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[42][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[42][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[42][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[42] = choices[42][2];
 units[42] = "10";
 comments[42] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";
 preguntaids[42] = 494


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[43]= new Array();
 choices[43][0] = "En 2011";
 choices[43][1] = "En 2013";
 choices[43][2] = "En 2015";
 choices[43][3] = "En 2016";
 answers[43] = choices[43][2];
 units[43] = "17";
 comments[43] = "Id Pregunta: 763. Mercado &Uacute;nico Digital";
 preguntaids[43] = 763


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[44]= new Array();
 choices[44][0] = "Data Mining (miner&iacute;a de datos)";
 choices[44][1] = "Business Intelligence (inteligencia de negocio)";
 choices[44][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[44][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[44] = choices[44][1];
 units[44] = "72";
 comments[44] = "Id Pregunta: 68. AGE A1 2015";
 preguntaids[44] = 68


//  Id pregunta: 615 Año de creación de pregunta: 2016
 questions[45]= "46)  El Modelo de Referencia de Interconexi&oacute;n de Sistemas Abiertos (OSI) consta de siete niveles. Se&ntilde;ala cu&aacute;l de los principios que se aplicaron para llevar a cabo esta divisi&oacute;n es falso:";
 choices[45]= new Array();
 choices[45][0] = "No se deben crear demasiados niveles de manera que la tarea de describir e integrar &eacute;stos fuera m&aacute;s dif&iacute;cil de lo necesario.";
 choices[45][1] = "Aunque se requiera un nivel de abstracci&oacute;n diferente en el manejo de los datos, debe usarse un nivel ya existente.";
 choices[45][2] = "Cada nivel debe realizar unas funciones bien definidas.";
 choices[45][3] = "Crear para cada nivel interfases con el nivel superior e inferior &uacute;nicamente.";
 answers[45] = choices[45][1];
 units[45] = "48";
 comments[45] = "Id Pregunta: 615. Junta de Extremadura A1 2015";
 preguntaids[45] = 615


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[46]= "47)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[46]= new Array();
 choices[46][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[46][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[46][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[46][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[46] = choices[46][1];
 units[46] = "5";
 comments[46] = "Id Pregunta: 298. UNION EUROPEA";
 preguntaids[46] = 298


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[47]= "48)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[47]= new Array();
 choices[47][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[47][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[47][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[47][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[47] = choices[47][1];
 units[47] = "58";
 comments[47] = "Id Pregunta: 643. Junta de Extremadura A1 2015";
 preguntaids[47] = 643


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[48]= new Array();
 choices[48][0] = "Ley 50/1997, del Gobierno.";
 choices[48][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[48][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[48][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[48] = choices[48][1];
 units[48] = "10";
 comments[48] = "Id Pregunta: 475. PRESUPUESTOS GENERALES";
 preguntaids[48] = 475


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[49]= "50)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[49]= new Array();
 choices[49][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[49][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[49][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[49][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[49] = choices[49][1];
 units[49] = "1";
 comments[49] = "Id Pregunta: 205. CONSTITUCION1978";
 preguntaids[49] = 205


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[50]= "51)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[50]= new Array();
 choices[50][0] = "El Ministerio de Hacienda.";
 choices[50][1] = "El Ministerio de Econom&iacute;a.";
 choices[50][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[50][3] = "Ninguna de las respuestas es correcta.";
 answers[50] = choices[50][2];
 units[50] = "10";
 comments[50] = "Id Pregunta: 470. PRESUPUESTOS GENERALES";
 preguntaids[50] = 470


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[51]= new Array();
 choices[51][0] = "Veinte.";
 choices[51][1] = "Quince.";
 choices[51][2] = "Diez.";
 choices[51][3] = "Doce.";
 answers[51] = choices[51][1];
 units[51] = "1";
 comments[51] = "Id Pregunta: 264. CONSTITUCION1978";
 preguntaids[51] = 264


//  Id pregunta: 117 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[52]= new Array();
 choices[52][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[52][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas ";
 choices[52][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[52][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[52] = choices[52][0];
 units[52] = "15";
 comments[52] = "Id Pregunta: 117. ";
 preguntaids[52] = 117


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[53]= "54)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[53]= new Array();
 choices[53][0] = "Mercurial, Git y Apache Subversion.";
 choices[53][1] = "Gimp, Mercurial y Git.";
 choices[53][2] = "RedMine, Planner y OpenProj.";
 choices[53][3] = "Cassandra, Git y REDIS.";
 answers[53] = choices[53][0];
 units[53] = "92";
 comments[53] = "Id Pregunta: 576. Tema 92. TAI 2016.";
 preguntaids[53] = 576


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[54]= "55)  En el lenguaje de modelado UML :";
 choices[54]= new Array();
 choices[54][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[54][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[54][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[54][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[54] = choices[54][2];
 units[54] = "89";
 comments[54] = "Id Pregunta: 3. AGE A1 2015";
 preguntaids[54] = 3


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[55]= new Array();
 choices[55][0] = "al menos por 50 Diputados.";
 choices[55][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[55][2] = "por la Mesa del Congreso de los Diputados.";
 choices[55][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[55] = choices[55][1];
 units[55] = "1";
 comments[55] = "Id Pregunta: 183. CONSTITUCION1978";
 preguntaids[55] = 183


//  Id pregunta: 234 Año de creación de pregunta: 2016
 questions[56]= "57)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[56]= new Array();
 choices[56][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[56][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[56][2] = "Al Congreso de los Diputados.";
 choices[56][3] = "Al Gobierno.";
 answers[56] = choices[56][0];
 units[56] = "1";
 comments[56] = "Id Pregunta: 234. CONSTITUCION1978";
 preguntaids[56] = 234


//  Id pregunta: 329 Año de creación de pregunta: 2016
 questions[57]= "58)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[57]= new Array();
 choices[57][0] = "Acuerdos cualificados.";
 choices[57][1] = "Acuerdos ponderados.";
 choices[57][2] = "Valoraci&oacute;n de los votos.";
 choices[57][3] = "Ponderaci&oacute;n de los votos.";
 answers[57] = choices[57][3];
 units[57] = "5";
 comments[57] = "Id Pregunta: 329. UNION EUROPEA";
 preguntaids[57] = 329


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[58]= "59)  Son bases de datos NoSQL:";
 choices[58]= new Array();
 choices[58][0] = "MongoDB y Maria DB";
 choices[58][1] = "HBase y Dynamo";
 choices[58][2] = "MariaDB, Cassandra y BigTable";
 choices[58][3] = "La A) y la C)";
 answers[58] = choices[58][1];
 units[58] = "73";
 comments[58] = "Id Pregunta: 104. ";
 preguntaids[58] = 104


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[59]= "60)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[59]= new Array();
 choices[59][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[59][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[59][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[59][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[59] = choices[59][3];
 units[59] = "57";
 comments[59] = "Id Pregunta: 640. Junta de Extremadura A1 2015";
 preguntaids[59] = 640


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[60]= "61)  Se&ntilde;ale la respuesta falsa:";
 choices[60]= new Array();
 choices[60][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[60][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[60][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[60][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[60] = choices[60][2];
 units[60] = "4, 7, 8, 9";
 comments[60] = "Id Pregunta: 847. Ley 40/2015";
 preguntaids[60] = 847


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[61]= "62)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[61]= new Array();
 choices[61][0] = "No se aplican directamente en los Estados.";
 choices[61][1] = "No son vinculantes.";
 choices[61][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[61][3] = "Tienen alcance general.";
 answers[61] = choices[61][0];
 units[61] = "5";
 comments[61] = "Id Pregunta: 356. UNION EUROPEA";
 preguntaids[61] = 356


//  Id pregunta: 718 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[62]= new Array();
 choices[62][0] = "Maximizar el valor para los clientes";
 choices[62][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[62][2] = " Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[62][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[62] = choices[62][3];
 units[62] = "34";
 comments[62] = "Id Pregunta: 718. Metodologias Lean";
 preguntaids[62] = 718


//  Id pregunta: 122 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[63]= new Array();
 choices[63][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[63][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[63][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[63][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[63] = choices[63][1];
 units[63] = "22";
 comments[63] = "Id Pregunta: 122. ";
 preguntaids[63] = 122


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[64]= "65)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[64]= new Array();
 choices[64][0] = "61";
 choices[64][1] = "53";
 choices[64][2] = "65";
 choices[64][3] = "67";
 answers[64] = choices[64][1];
 units[64] = "1";
 comments[64] = "Id Pregunta: 248. CONSTITUCION1978";
 preguntaids[64] = 248


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[65]= "66)  Respecto a los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado, NO se incluyen entre las prestaciones que pueden ser objeto de estos contratos:";
 choices[65]= new Array();
 choices[65][0] = "La construcci&oacute;n, instalaci&oacute;n o transformaci&oacute;n de obras, equipos, sistemas, y productos o bienes complejos, as&iacute; como su mantenimiento, actualizaci&oacute;n o renovaci&oacute;n, su explotaci&oacute;n o su gesti&oacute;n.";
 choices[65][1] = "La gesti&oacute;n integral del mantenimiento de instalaciones para la investigaci&oacute;n.";
 choices[65][2] = "La fabricaci&oacute;n de bienes y la prestaci&oacute;n de servicios que incorporen tecnolog&iacute;a espec&iacute;ficamente desarrollada con el prop&oacute;sito de aportar soluciones m&aacute;s avanzadas y econ&oacute;micamente m&aacute;s ventajosas que las existentes en el mercado.";
 choices[65][3] = "Todas las anteriores pueden ser objeto de ese tipo de contratos.";
 answers[65] = choices[65][1];
 units[65] = "10";
 comments[65] = "Id Pregunta: 748. Direcci&oacute;n p&uacute;blica";
 preguntaids[65] = 748


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[66]= "67)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[66]= new Array();
 choices[66][0] = "Intersecci&oacute;n.";
 choices[66][1] = "Uni&oacute;n.";
 choices[66][2] = "Restricci&oacute;n.";
 choices[66][3] = "Diferencia.";
 answers[66] = choices[66][0];
 units[66] = "60";
 comments[66] = "Id Pregunta: 614. Junta de Extremadura A1 2015";
 preguntaids[66] = 614


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[67]= "68)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[67]= new Array();
 choices[67][0] = "Un recurso de incumplimiento.";
 choices[67][1] = "Recurso de carencia.";
 choices[67][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[67][3] = "Ninguna es correcta.";
 answers[67] = choices[67][2];
 units[67] = "5";
 comments[67] = "Id Pregunta: 370. UNION EUROPEA";
 preguntaids[67] = 370


//  Id pregunta: 846 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[68]= new Array();
 choices[68][0] = "Conferencia de Presidentes.";
 choices[68][1] = "Convenios de colaboraci&oacute;n.";
 choices[68][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[68][3] = "Conferencias Sectoriales.";
 answers[68] = choices[68][0];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 846. Ley 40/2015";
 preguntaids[68] = 846


//  Id pregunta: 78 Año de creación de pregunta: 2016
 questions[69]= "70)  En relaci&oacute;n con la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, se&ntilde;ale la respuesta correcta:";
 choices[69]= new Array();
 choices[69][0] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, el interesado debe instar su rectificaci&oacute;n, sin que puedan ser cancelados y sustituidos de oficio por los datos rectificados o completados.";
 choices[69][1] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, ser&aacute;n cancelados y sustituidos de oficio por los datos rectificados o completados, sin perjuicio del derecho de rectificaci&oacute;n y cancelaci&oacute;n del afectado.";
 choices[69][2] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 15 d&iacute;as.";
 choices[69][3] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 1 mes.";
 answers[69] = choices[69][1];
 units[69] = "35";
 comments[69] = "Id Pregunta: 78. AGE A1 2015";
 preguntaids[69] = 78


//  Id pregunta: 506 Año de creación de pregunta: 2016
 questions[70]= "71)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[70]= new Array();
 choices[70][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[70][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[70][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[70][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[70] = choices[70][2];
 units[70] = "10";
 comments[70] = "Id Pregunta: 506. PRESUPUESTOS GENERALES";
 preguntaids[70] = 506


//  Id pregunta: 438 Año de creación de pregunta: 2016
 questions[71]= "72)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[71]= new Array();
 choices[71][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[71][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[71][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[71][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[71] = choices[71][3];
 units[71] = "43";
 comments[71] = "Id Pregunta: 438. SERVICIOS COMUNES";
 preguntaids[71] = 438


//  Id pregunta: 683 Año de creación de pregunta: 2016
 questions[72]= "73)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[72]= new Array();
 choices[72][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[72][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[72][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[72][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[72] = choices[72][2];
 units[72] = "14";
 comments[72] = "Id Pregunta: 683. Pensiones";
 preguntaids[72] = 683


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[73]= "74)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[73]= new Array();
 choices[73][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[73][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[73][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[73][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[73] = choices[73][0];
 units[73] = "22";
 comments[73] = "Id Pregunta: 124. ";
 preguntaids[73] = 124


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[74]= "75)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[74]= new Array();
 choices[74][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[74][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[74][2] = "Un programa de igualdad.";
 choices[74][3] = "Un estatuto de igualdad.";
 answers[74] = choices[74][0];
 units[74] = "14";
 comments[74] = "Id Pregunta: 410. POLITICAS DE IGUALDAD";
 preguntaids[74] = 410


