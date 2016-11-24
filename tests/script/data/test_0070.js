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

//  Id pregunta: 10381 Año de creación de pregunta: 2016
 questions[0]= "1)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[0]= new Array();
 choices[0][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[0][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[0][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[0][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[0] = choices[0][0];
 units[0] = "14";
 comments[0] = "Id Pregunta: 10381. POLITICAS DE IGUALDAD";


//  Id pregunta: 10653 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[1]= new Array();
 choices[1][0] = "Neo4J ";
 choices[1][1] = "OrientDB ";
 choices[1][2] = "InfoGrid ";
 choices[1][3] = "SimpleDB";
 answers[1] = choices[1][3];
 units[1] = "73";
 comments[1] = "Id Pregunta: 10653. ";


//  Id pregunta: 10376 Año de creación de pregunta: 2016
 questions[2]= "3)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[2]= new Array();
 choices[2][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[2][1] = "Personas con nacionalidad europea.";
 choices[2][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[2][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[2] = choices[2][3];
 units[2] = "5";
 comments[2] = "Id Pregunta: 10376. UNION EUROPEA";


//  Id pregunta: 10435 Año de creación de pregunta: 2016
 questions[3]= "4)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[3]= new Array();
 choices[3][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[3][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[3][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[3][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[3] = choices[3][2];
 units[3] = "43";
 comments[3] = "Id Pregunta: 10435. SERVICIOS COMUNES";


//  Id pregunta: 10615 Año de creación de pregunta: 2016
 questions[4]= "5)  El establecimiento de una conexi&oacute;n mediante el protocolo TCP, b&aacute;sicamente se realiza de la siguiente manera:";
 choices[4]= new Array();
 choices[4][0] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a SYN+ACK. Emisor: env&iacute;a ACK.";
 choices[4][1] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a ACK+SYN. Emisor: env&iacute;a SYN.";
 choices[4][2] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a ACK.";
 choices[4][3] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a SYN.";
 answers[4] = choices[4][0];
 units[4] = "109";
 comments[4] = "Id Pregunta: 10615. Junta de Extremadura A1 2015";


//  Id pregunta: 10448 Año de creación de pregunta: 2016
 questions[5]= "6)  La partida presupuestaria es equivalente a...";
 choices[5]= new Array();
 choices[5][0] = "El sujeto que realiza el gasto";
 choices[5][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[5][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[5][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[5] = choices[5][3];
 units[5] = "10";
 comments[5] = "Id Pregunta: 10448. PRESUPUESTOS GENERALES";


//  Id pregunta: 10185 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[6]= new Array();
 choices[6][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[6][1] = "Autorizar indultos generales.";
 choices[6][2] = "Sancionar las leyes.";
 choices[6][3] = "Promulgar las leyes.";
 answers[6] = choices[6][1];
 units[6] = "1";
 comments[6] = "Id Pregunta: 10185. CONSTITUCION1978";


//  Id pregunta: 10144 Año de creación de pregunta: 2016
 questions[7]= "8)  Sobre el recurso de reposici&oacute;n:";
 choices[7]= new Array();
 choices[7][0] = "Cabe interponerlo ante los actos administrativos que pongan fin a la v&iacute;a administrativa";
 choices[7][1] = "Es obligatorio interponerlo antes de impugnar un acto administrativo ante el orden jurisdiccional contencioso-administrativo";
 choices[7][2] = "Ha desaparecido en la Ley 39/2015";
 choices[7][3] = "El &oacute;rgano competente para resolverlo es el superior jer&aacute;rquico al que dict&oacute; el acto administrativo a recurrir";
 answers[7] = choices[7][0];
 units[7] = "8";
 comments[7] = "Id Pregunta: 10144. Ley 39/2015, Art&iacute;culo 123";


//  Id pregunta: 10151 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[8]= new Array();
 choices[8][0] = "las personas jur&iacute;dicas ";
 choices[8][1] = "las entidades con personalidad jur&iacute;dica";
 choices[8][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[8][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[8] = choices[8][1];
 units[8] = "7";
 comments[8] = "Id Pregunta: 10151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 10007 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[9]= new Array();
 choices[9][0] = "Nivel 7 - MPLS.";
 choices[9][1] = "Nivel 3 - RARP.";
 choices[9][2] = "Nivel 2 - HDLC.";
 choices[9][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[9] = choices[9][2];
 units[9] = "105";
 comments[9] = "Id Pregunta: 10007. AGE A1 2015";


//  Id pregunta: 10269 Año de creación de pregunta: 2016
 questions[10]= "11)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[10]= new Array();
 choices[10][0] = "Diez art&iacute;culos.";
 choices[10][1] = "Nueve art&iacute;culos.";
 choices[10][2] = "Once art&iacute;culos.";
 choices[10][3] = "Ocho art&iacute;culos.";
 answers[10] = choices[10][0];
 units[10] = "1";
 comments[10] = "Id Pregunta: 10269. CONSTITUCION1978";


//  Id pregunta: 10590 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[11]= new Array();
 choices[11][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[11][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[11][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[11][3] = "Todos los anteriores";
 answers[11] = choices[11][3];
 units[11] = "19";
 comments[11] = "Id Pregunta: 10590. Estrategia TIC";


//  Id pregunta: 10196 Año de creación de pregunta: 2016
 questions[12]= "13)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[12]= new Array();
 choices[12][0] = "Al Presidente del Gobierno.";
 choices[12][1] = "A las Cortes Generales";
 choices[12][2] = "A los electores.";
 choices[12][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[12] = choices[12][3];
 units[12] = "1";
 comments[12] = "Id Pregunta: 10196. CONSTITUCION1978";


//  Id pregunta: 10449 Año de creación de pregunta: 2016
 questions[13]= "14)  El cr&eacute;dito presupuestario es...";
 choices[13]= new Array();
 choices[13][0] = "El sujeto que realiza el gasto";
 choices[13][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[13][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[13][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[13] = choices[13][2];
 units[13] = "10";
 comments[13] = "Id Pregunta: 10449. PRESUPUESTOS GENERALES";


//  Id pregunta: 10440 Año de creación de pregunta: 2016
 questions[14]= "15)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[14]= new Array();
 choices[14][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[14][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[14][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[14][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[14] = choices[14][2];
 units[14] = "43";
 comments[14] = "Id Pregunta: 10440. SERVICIOS COMUNES";


//  Id pregunta: 10070 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[15]= new Array();
 choices[15][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[15][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[15][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[15][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[15] = choices[15][0];
 units[15] = "75";
 comments[15] = "Id Pregunta: 10070. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10126 Año de creación de pregunta: 2016
 questions[16]= "17)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[16]= new Array();
 choices[16][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[16][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[16][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[16][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[16] = choices[16][3];
 units[16] = "22";
 comments[16] = "Id Pregunta: 10126. ";


//  Id pregunta: 10162 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[17]= new Array();
 choices[17][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[17][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[17][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[17][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[17] = choices[17][0];
 units[17] = "19";
 comments[17] = "Id Pregunta: 10162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 10658 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[18]= new Array();
 choices[18][0] = "NoSQL";
 choices[18][1] = "Sistemas de baja latencia";
 choices[18][2] = "MapReduce";
 choices[18][3] = "Business Intelligence";
 answers[18] = choices[18][1];
 units[18] = "73";
 comments[18] = "Id Pregunta: 10658. ";


//  Id pregunta: 10300 Año de creación de pregunta: 2016
 questions[19]= "20)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[19]= new Array();
 choices[19][0] = "La Comisi&oacute;n.";
 choices[19][1] = "El Consejo de Europa.";
 choices[19][2] = "El Consejo Europeo.";
 choices[19][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[19] = choices[19][3];
 units[19] = "5";
 comments[19] = "Id Pregunta: 10300. UNION EUROPEA";


//  Id pregunta: 10080 Año de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[20]= new Array();
 choices[20][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[20][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[20][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[20][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[20] = choices[20][3];
 units[20] = "46";
 comments[20] = "Id Pregunta: 10080. AGE A1 2015";


//  Id pregunta: 10360 Año de creación de pregunta: 2016
 questions[21]= "22)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[21]= new Array();
 choices[21][0] = "786 Diputados como m&aacute;ximo.";
 choices[21][1] = "600 Diputados como m&aacute;ximo.";
 choices[21][2] = "650 Diputados como m&aacute;ximo.";
 choices[21][3] = "732 Diputados como m&aacute;ximo.";
 answers[21] = choices[21][0];
 units[21] = "5";
 comments[21] = "Id Pregunta: 10360. UNION EUROPEA";


//  Id pregunta: 10542 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[22]= new Array();
 choices[22][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[22][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[22][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[22][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[22] = choices[22][0];
 units[22] = "26";
 comments[22] = "Id Pregunta: 10542. Gobernanza TIC";


//  Id pregunta: 10150 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[23]= new Array();
 choices[23][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[23][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[23][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[23][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[23] = choices[23][2];
 units[23] = "7";
 comments[23] = "Id Pregunta: 10150. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 10233 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[24]= new Array();
 choices[24][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[24][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[24][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[24][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[24] = choices[24][2];
 units[24] = "1";
 comments[24] = "Id Pregunta: 10233. CONSTITUCION1978";


//  Id pregunta: 10272 Año de creación de pregunta: 2016
 questions[25]= "26)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[25]= new Array();
 choices[25][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[25][1] = "Anteriormente se denominaba Sonar.";
 choices[25][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[25][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[25] = choices[25][2];
 units[25] = "92";
 comments[25] = "Id Pregunta: 10272. INTEGRACION CONTINUA";


//  Id pregunta: 10325 Año de creación de pregunta: 2016
 questions[26]= "27)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[26]= new Array();
 choices[26][0] = "Veinticinco.";
 choices[26][1] = "Veintiuno.";
 choices[26][2] = "Dieciocho.";
 choices[26][3] = "Diecinueve.";
 answers[26] = choices[26][0];
 units[26] = "5";
 comments[26] = "Id Pregunta: 10325. UNION EUROPEA";


//  Id pregunta: 10127 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[27]= new Array();
 choices[27][0] = "Tiene car&aacute;cter facultativo.";
 choices[27][1] = "Tiene car&aacute;cter potestativo. ";
 choices[27][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[27][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[27] = choices[27][1];
 units[27] = "22";
 comments[27] = "Id Pregunta: 10127. ";


//  Id pregunta: 10662 Año de creación de pregunta: 2016
 questions[28]= "29)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[28]= new Array();
 choices[28][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[28][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[28][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[28][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que haya sido elaborado por &eacute;ste.";
 answers[28] = choices[28][1];
 units[28] = "7";
 comments[28] = "Id Pregunta: 10662. Art&iacute;culo 53 de la Ley 39/2015";


//  Id pregunta: 10392 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[29]= new Array();
 choices[29][0] = "Indirecta.";
 choices[29][1] = "Directa.";
 choices[29][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[29][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[29] = choices[29][1];
 units[29] = "14";
 comments[29] = "Id Pregunta: 10392. POLITICAS DE IGUALDAD";


//  Id pregunta: 10638 Año de creación de pregunta: 2016
 questions[30]= "31)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[30]= new Array();
 choices[30][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[30][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[30][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[30][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[30] = choices[30][3];
 units[30] = "57";
 comments[30] = "Id Pregunta: 10638. Junta de Extremadura A1 2015";


//  Id pregunta: 10123 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[31]= new Array();
 choices[31][0] = "Un representante de la Administraci&oacute;n local.";
 choices[31][1] = "Un representante del Tribunal de Cuentas.";
 choices[31][2] = "Un representante del Defensor del Pueblo.";
 choices[31][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[31] = choices[31][0];
 units[31] = "22";
 comments[31] = "Id Pregunta: 10123. ";


//  Id pregunta: 10407 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[32]= new Array();
 choices[32][0] = "Art&iacute;culo 14 CE.";
 choices[32][1] = "Art&iacute;culo 9.2 CE.";
 choices[32][2] = "Art&iacute;culo 9.1 CE.";
 choices[32][3] = "Art&iacute;culo 13 CE.";
 answers[32] = choices[32][2];
 units[32] = "14";
 comments[32] = "Id Pregunta: 10407. POLITICAS DE IGUALDAD";


//  Id pregunta: 10158 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[33]= new Array();
 choices[33][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[33][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[33][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[33][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[33] = choices[33][1];
 units[33] = "7";
 comments[33] = "Id Pregunta: 10158. Ley 39/2015, Art&iacute;culo 43";


//  Id pregunta: 10413 Año de creación de pregunta: 2016
 questions[34]= "35)  Gozar&aacute;n de los derecho derivados del principio de igualdad de trato y de la prohibici&oacute;n de discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[34]= new Array();
 choices[34][0] = "La mujeres.";
 choices[34][1] = "Lo hombres.";
 choices[34][2] = "Todas las personas.";
 choices[34][3] = "Las mujeres y ni&ntilde;os menores de 16 a&ntilde;os.";
 answers[34] = choices[34][2];
 units[34] = "14";
 comments[34] = "Id Pregunta: 10413. POLITICAS DE IGUALDAD";


//  Id pregunta: 10454 Año de creación de pregunta: 2016
 questions[35]= "36)  El Presupuesto por programas sirve para saber...";
 choices[35]= new Array();
 choices[35][0] = "En qu&eacute; nos gastamos el dinero";
 choices[35][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[35][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[35][3] = "Qui&eacute;n se gasta el dinero";
 answers[35] = choices[35][2];
 units[35] = "10";
 comments[35] = "Id Pregunta: 10454. PRESUPUESTOS GENERALES";


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


//  Id pregunta: 10097 Año de creación de pregunta: 2016
 questions[37]= "38)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[37]= new Array();
 choices[37][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[37][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[37][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[37][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[37] = choices[37][2];
 units[37] = "22";
 comments[37] = "Id Pregunta: 10097. AGE A1 2015";


//  Id pregunta: 10387 Año de creación de pregunta: 2016
 questions[38]= "39)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[38]= new Array();
 choices[38][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[38][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[38][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[38][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[38] = choices[38][3];
 units[38] = "14";
 comments[38] = "Id Pregunta: 10387. POLITICAS DE IGUALDAD";


//  Id pregunta: 10190 Año de creación de pregunta: 2016
 questions[39]= "40)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[39]= new Array();
 choices[39][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[39][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[39][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[39][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[39] = choices[39][2];
 units[39] = "1";
 comments[39] = "Id Pregunta: 10190. CONSTITUCION1978";


//  Id pregunta: 10038 Año de creación de pregunta: 2016
 questions[40]= "41)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[40]= new Array();
 choices[40][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[40][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[40][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[40][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[40] = choices[40][3];
 units[40] = "62";
 comments[40] = "Id Pregunta: 10038. AGE A1 2015";


//  Id pregunta: 10593 Año de creación de pregunta: 2016
 questions[41]= "42)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[41]= new Array();
 choices[41][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[41][1] = "La CETIC";
 choices[41][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[41][3] = "El MHFP";
 answers[41] = choices[41][0];
 units[41] = "19";
 comments[41] = "Id Pregunta: 10593. Estrategia TIC";


//  Id pregunta: 10517 Año de creación de pregunta: 2016
 questions[42]= "43)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[42]= new Array();
 choices[42][0] = "la Administraci&oacute;n General del Estado";
 choices[42][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[42][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[42][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[42] = choices[42][3];
 units[42] = "7";
 comments[42] = "Id Pregunta: 10517. LEY 39/2015";


//  Id pregunta: 10182 Año de creación de pregunta: 2016
 questions[43]= "44)  De acuerdo con el T&iacute;tulo II de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; tutor del Rey menor:";
 choices[43]= new Array();
 choices[43][0] = "El que hubiere designado el familiar m&aacute;s cercano al Rey difunto.";
 choices[43][1] = "El que hubiere designado el Rey difunto en su testamento.";
 choices[43][2] = "El que hubieren designado las Cortes Generales.";
 choices[43][3] = "El que hubiere designado el Senado por mayor&iacute;a absoluta.";
 answers[43] = choices[43][1];
 units[43] = "1";
 comments[43] = "Id Pregunta: 10182. CONSTITUCION1978";


//  Id pregunta: 10262 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[44]= new Array();
 choices[44][0] = "Constitucional.";
 choices[44][1] = "Penal.";
 choices[44][2] = "Militar.";
 choices[44][3] = "Tribunales consuetudinarios.";
 answers[44] = choices[44][0];
 units[44] = "1";
 comments[44] = "Id Pregunta: 10262. CONSTITUCION1978";


//  Id pregunta: 10549 Año de creación de pregunta: 2016
 questions[45]= "46)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[45]= new Array();
 choices[45][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[45][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[45][2] = "El Presidente del Gobierno";
 choices[45][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[45] = choices[45][1];
 units[45] = "26";
 comments[45] = "Id Pregunta: 10549. Gobernanza TIC";


//  Id pregunta: 10331 Año de creación de pregunta: 2016
 questions[46]= "47)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[46]= new Array();
 choices[46][0] = "90";
 choices[46][1] = "50";
 choices[46][2] = "64";
 choices[46][3] = "60";
 answers[46] = choices[46][1];
 units[46] = "5";
 comments[46] = "Id Pregunta: 10331. UNION EUROPEA";


//  Id pregunta: 10650 Año de creación de pregunta: 2016
 questions[47]= "48)  Indica cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo IP versi&oacute;n 6 es incorrecta.";
 choices[47]= new Array();
 choices[47][0] = "El tama&ntilde;o de la direcci&oacute;n IP es de 128 bits.";
 choices[47][1] = "Aumento de la flexibilidad en el direccionamiento.";
 choices[47][2] = "Define una cabecera de extensi&oacute;n que proporciona autenticaci&oacute;n.";
 choices[47][3] = "La cabecera IP versi&oacute;n 6 obligatoria es de tama&ntilde;o variable.";
 answers[47] = choices[47][3];
 units[47] = "109";
 comments[47] = "Id Pregunta: 10650. Junta de Extremadura A1 2015";


//  Id pregunta: 10606 Año de creación de pregunta: 2016
 questions[48]= "49)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[48]= new Array();
 choices[48][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[48][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[48][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[48][3] = "Todas las respuestas son correctas.";
 answers[48] = choices[48][1];
 units[48] = "101";
 comments[48] = "Id Pregunta: 10606. Junta de Extremadura A1 2015";


//  Id pregunta: 10636 Año de creación de pregunta: 2016
 questions[49]= "50)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[49]= new Array();
 choices[49][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[49][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[49][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[49][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[49] = choices[49][2];
 units[49] = "57";
 comments[49] = "Id Pregunta: 10636. Junta de Extremadura A1 2015";


//  Id pregunta: 10370 Año de creación de pregunta: 2016
 questions[50]= "51)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[50]= new Array();
 choices[50][0] = "Un recurso de incumplimiento.";
 choices[50][1] = "Recurso de carencia.";
 choices[50][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[50][3] = "Ninguna es correcta.";
 answers[50] = choices[50][2];
 units[50] = "5";
 comments[50] = "Id Pregunta: 10370. UNION EUROPEA";


//  Id pregunta: 10603 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[51]= new Array();
 choices[51][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[51][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[51][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[51][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[51] = choices[51][3];
 units[51] = "101";
 comments[51] = "Id Pregunta: 10603. Junta de Extremadura A1 2015";


//  Id pregunta: 10069 Año de creación de pregunta: 2016
 questions[52]= "53)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[52]= new Array();
 choices[52][0] = "Ejecuci&oacute;n";
 choices[52][1] = "Adjudicaci&oacute;n";
 choices[52][2] = "Licitaci&oacute;n";
 choices[52][3] = "Formalizaci&oacute;n";
 answers[52] = choices[52][3];
 units[52] = "37";
 comments[52] = "Id Pregunta: 10069. AGE A1 2015";


//  Id pregunta: 10219 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[53]= new Array();
 choices[53][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[53][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[53][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[53][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[53] = choices[53][1];
 units[53] = "1";
 comments[53] = "Id Pregunta: 10219. CONSTITUCION1978";


//  Id pregunta: 10104 Año de creación de pregunta: 2016
 questions[54]= "55)  Son bases de datos NoSQL:";
 choices[54]= new Array();
 choices[54][0] = "MongoDB y Maria DB";
 choices[54][1] = "HBase y Dynamo";
 choices[54][2] = "MariaDB, Cassandra y BigTable";
 choices[54][3] = "La A) y la C)";
 answers[54] = choices[54][1];
 units[54] = "73";
 comments[54] = "Id Pregunta: 10104. ";


//  Id pregunta: 10357 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[55]= new Array();
 choices[55][0] = "El Parlamento y el Consejo.";
 choices[55][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[55][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[55][3] = "La Comisi&oacute;n y el Consejo.";
 answers[55] = choices[55][1];
 units[55] = "5";
 comments[55] = "Id Pregunta: 10357. UNION EUROPEA";


//  Id pregunta: 10117 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[56]= new Array();
 choices[56][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[56][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas ";
 choices[56][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[56][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[56] = choices[56][0];
 units[56] = "15";
 comments[56] = "Id Pregunta: 10117. ";


//  Id pregunta: 10160 Año de creación de pregunta: 2016
 questions[57]= "58)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[57]= new Array();
 choices[57][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[57][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[57][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[57][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[57] = choices[57][1];
 units[57] = "19";
 comments[57] = "Id Pregunta: 10160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 10008 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[58]= new Array();
 choices[58][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[58][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[58][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[58][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[58] = choices[58][2];
 units[58] = "26";
 comments[58] = "Id Pregunta: 10008. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10284 Año de creación de pregunta: 2016
 questions[59]= "60)  Se&ntilde;ale la respuesta falsa:";
 choices[59]= new Array();
 choices[59][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[59][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[59][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[59][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[59] = choices[59][2];
 units[59] = "5";
 comments[59] = "Id Pregunta: 10284. UNION EUROPEA";


//  Id pregunta: 10628 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[60]= new Array();
 choices[60][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[60][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[60][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[60][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[60] = choices[60][0];
 units[60] = "45";
 comments[60] = "Id Pregunta: 10628. Junta de Extremadura A1 2015";


//  Id pregunta: 10328 Año de creación de pregunta: 2016
 questions[61]= "62)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[61]= new Array();
 choices[61][0] = "El Presidente del Consejo Europeo.";
 choices[61][1] = "La Comisi&oacute;n.";
 choices[61][2] = "El Consejo.";
 choices[61][3] = "El Parlamento Europeo.";
 answers[61] = choices[61][2];
 units[61] = "5";
 comments[61] = "Id Pregunta: 10328. UNION EUROPEA";


//  Id pregunta: 10649 Año de creación de pregunta: 2016
 questions[62]= "63)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[62]= new Array();
 choices[62][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[62][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[62][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[62][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[62] = choices[62][0];
 units[62] = "60";
 comments[62] = "Id Pregunta: 10649. Junta de Extremadura A1 2015";


//  Id pregunta: 10664 Año de creación de pregunta: 2016
 questions[63]= "64)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[63]= new Array();
 choices[63][0] = "Siempre en formato electr&oacute;nico.";
 choices[63][1] = "Siempre en formato papel.";
 choices[63][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[63][3] = "La ley no regula el formato del expediente.";
 answers[63] = choices[63][0];
 units[63] = "7";
 comments[63] = "Id Pregunta: 10664. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 10451 Año de creación de pregunta: 2016
 questions[64]= "65)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[64]= new Array();
 choices[64][0] = "Los cr&eacute;ditos";
 choices[64][1] = "Las partidas presupuestarias";
 choices[64][2] = "Los derechos";
 choices[64][3] = "Las obligaciones";
 answers[64] = choices[64][2];
 units[64] = "10";
 comments[64] = "Id Pregunta: 10451. PRESUPUESTOS GENERALES";


//  Id pregunta: 10314 Año de creación de pregunta: 2016
 questions[65]= "66)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[65]= new Array();
 choices[65][0] = "Al Consejo Europeo.";
 choices[65][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[65][2] = "A la Comisi&oacute;n Europea.";
 choices[65][3] = "Al Parlamento Europeo.";
 answers[65] = choices[65][2];
 units[65] = "5";
 comments[65] = "Id Pregunta: 10314. UNION EUROPEA";


//  Id pregunta: 10383 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[66]= new Array();
 choices[66][0] = "El Consejo Nacional de la Mujer";
 choices[66][1] = "El Consejo de la Mujer";
 choices[66][2] = "El Instituto de la Mujer";
 choices[66][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[66] = choices[66][3];
 units[66] = "14";
 comments[66] = "Id Pregunta: 10383. POLITICAS DE IGUALDAD";


//  Id pregunta: 10626 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[67]= new Array();
 choices[67][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[67][1] = "La Direcci&oacute;n de la Competencia.";
 choices[67][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[67][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[67] = choices[67][0];
 units[67] = "121";
 comments[67] = "Id Pregunta: 10626. Junta de Extremadura A1 2015";


//  Id pregunta: 10513 Año de creación de pregunta: 2016
 questions[68]= "69)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[68]= new Array();
 choices[68][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[68][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[68][2] = "el sector p&uacute;blico institucional";
 choices[68][3] = "el sector privado corporativo";
 answers[68] = choices[68][3];
 units[68] = "7";
 comments[68] = "Id Pregunta: 10513. LEY 39/2015";


//  Id pregunta: 10622 Año de creación de pregunta: 2016
 questions[69]= "70)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[69]= new Array();
 choices[69][0] = "Entradas (entities).";
 choices[69][1] = "Atributos (attribs).";
 choices[69][2] = "M&oacute;dulos (modules).";
 choices[69][3] = "Objetos (objects).";
 answers[69] = choices[69][0];
 units[69] = "74";
 comments[69] = "Id Pregunta: 10622. Junta de Extremadura A1 2015";


//  Id pregunta: 10266 Año de creación de pregunta: 2016
 questions[70]= "71)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[70]= new Array();
 choices[70][0] = "El Segundo.";
 choices[70][1] = "El Primero.";
 choices[70][2] = "El Preliminar.";
 choices[70][3] = "El Tercero.";
 answers[70] = choices[70][0];
 units[70] = "1";
 comments[70] = "Id Pregunta: 10266. CONSTITUCION1978";


//  Id pregunta: 10140 Año de creación de pregunta: 2016
 questions[71]= "72)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[71]= new Array();
 choices[71][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[71][1] = "Tratarse de un acto no susceptible de recurso";
 choices[71][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[71][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[71] = choices[71][2];
 units[71] = "8";
 comments[71] = "Id Pregunta: 10140. Ley 39/2015, Art&iacute;culo 116";


//  Id pregunta: 10102 Año de creación de pregunta: 2016
 questions[72]= "73)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[72]= new Array();
 choices[72][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[72][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[72][2] = "Se basan en sistemas distribuidos";
 choices[72][3] = "Se basan en el modelo de datos relacional";
 answers[72] = choices[72][2];
 units[72] = "73";
 comments[72] = "Id Pregunta: 10102. ";


//  Id pregunta: 10125 Año de creación de pregunta: 2016
 questions[73]= "74)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[73]= new Array();
 choices[73][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[73][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[73][2] = "La protecci&oacute;n del medio ambiente.";
 choices[73][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[73] = choices[73][0];
 units[73] = "22";
 comments[73] = "Id Pregunta: 10125. ";


//  Id pregunta: 10002 Año de creación de pregunta: 2016
 questions[74]= "75)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[74]= new Array();
 choices[74][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[74][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[74][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[74][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[74] = choices[74][0];
 units[74] = "31";
 comments[74] = "Id Pregunta: 10002. AGE A1 2015";


