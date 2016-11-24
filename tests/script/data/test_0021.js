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

//  Id pregunta: 10322 Año de creación de pregunta: 2016
 questions[0]= "1)  El Tribunal de Justicia est&aacute; formado por:";
 choices[0]= new Array();
 choices[0][0] = "Un Juez de cada Estado miembro.";
 choices[0][1] = "Por dos Jueces de cada Estado miembro.";
 choices[0][2] = "Por veinte Jueces.";
 choices[0][3] = "Por ocho Jueces.";
 answers[0] = choices[0][0];
 units[0] = "5";
 comments[0] = "Id Pregunta: 10322. UNION EUROPEA";


//  Id pregunta: 10579 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[1]= new Array();
 choices[1][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[1][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[1][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[1][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[1] = choices[1][1];
 units[1] = "19";
 comments[1] = "Id Pregunta: 10579. Estrategia TIC";


//  Id pregunta: 10040 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[2]= new Array();
 choices[2][0] = "Drupal";
 choices[2][1] = "Cassandra";
 choices[2][2] = "Wordpress";
 choices[2][3] = "OpenCMS";
 answers[2] = choices[2][1];
 units[2] = "99";
 comments[2] = "Id Pregunta: 10040. AGE A1 2015";


//  Id pregunta: 10414 Año de creación de pregunta: 2016
 questions[3]= "4)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[3]= new Array();
 choices[3][0] = "Un informe de impacto de g&eacute;nero.";
 choices[3][1] = "Un programa de igualdad de oportunidades.";
 choices[3][2] = "Un plan de Igualdad de Oportunidades.";
 choices[3][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[3] = choices[3][0];
 units[3] = "14";
 comments[3] = "Id Pregunta: 10414. POLITICAS DE IGUALDAD";


//  Id pregunta: 10369 Año de creación de pregunta: 2016
 questions[4]= "5)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[4]= new Array();
 choices[4][0] = "Son actos individuales no normativos.";
 choices[4][1] = "Poseen alcance general.";
 choices[4][2] = "Son actos normativos.";
 choices[4][3] = "No son obligatorias.";
 answers[4] = choices[4][0];
 units[4] = "5";
 comments[4] = "Id Pregunta: 10369. UNION EUROPEA";


//  Id pregunta: 10326 Año de creación de pregunta: 2016
 questions[5]= "6)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[5]= new Array();
 choices[5][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[5][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[5][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[5][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[5] = choices[5][3];
 units[5] = "5";
 comments[5] = "Id Pregunta: 10326. UNION EUROPEA";


//  Id pregunta: 10249 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[6]= new Array();
 choices[6][0] = "Art&iacute;culo 16.2.";
 choices[6][1] = "Art&iacute;culo 17.1.";
 choices[6][2] = "Art&iacute;culo 18.1.";
 choices[6][3] = "Art&iacute;culo 18.2.";
 answers[6] = choices[6][0];
 units[6] = "1";
 comments[6] = "Id Pregunta: 10249. CONSTITUCION1978";


//  Id pregunta: 10216 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[7]= new Array();
 choices[7][0] = "El Presidente del Gobierno.";
 choices[7][1] = "El Consejo de Ministros.";
 choices[7][2] = "40 Diputados.";
 choices[7][3] = "El Ministerio Fiscal.";
 answers[7] = choices[7][0];
 units[7] = "1";
 comments[7] = "Id Pregunta: 10216. CONSTITUCION1978";


//  Id pregunta: 10029 Año de creación de pregunta: 2016
 questions[8]= "9)  De acuerdo con el art&iacute;culo 62 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, se&ntilde;ale la respuesta correcta:";
 choices[8]= new Array();
 choices[8][0] = "El uso del dominio p&uacute;blico radioel&eacute;ctrico s&oacute;lo puede ser de dos tipos: especial o privativo.";
 choices[8][1] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico precisa de t&iacute;tulo habilitante.";
 choices[8][2] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se realiza mediante la explotaci&oacute;n en exclusiva, o por un n&uacute;mero limitado de usuarios, de determinadas frecuencias en un mismo &aacute;mbito f&iacute;sico de aplicaci&oacute;n.";
 choices[8][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se lleve a cabo de las bandas de frecuencias habilitadas para su explotaci&oacute;n de forma compartida, sin limitaci&oacute;n de n&uacute;mero de operadores o usuarios y con las condiciones t&eacute;cnicas y para los servicios que se establezcan en cada caso.";
 answers[8] = choices[8][2];
 units[8] = "121";
 comments[8] = "Id Pregunta: 10029. AGE A1 2015";


//  Id pregunta: 10675 Año de creación de pregunta: 2016
 questions[9]= "10)  En referencia al proyecto ANDES, para la comunicaci&oacute;n telem&aacute;tica de Nacimientos desde Centros Sanitarios a Registros Civiles, indique cual de las siguientes afirmaciones es falsa:";
 choices[9]= new Array();
 choices[9][0] = "Tiene sustento legal de acuerdo a la Ley 19/2015, de 13 de julio, de medidas de reforma administrativa en el &aacute;mbito de la Administraci&oacute;n de Justicia y del Registro Civil.";
 choices[9][1] = "Se inicia a partir de su propuesta en CORA (Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas).";
 choices[9][2] = "Reutiliza el servicio horizontal ACCEDA en modo cloud, lo cual ha facilitado la pronta puesta en marcha de la soluci&oacute;n.";
 choices[9][3] = "La utilizaci&oacute;n de ANDES por parte de los hospitales es completamente transparente, sin necesidad de realizar pasos previos para su despliegue.";
 answers[9] = choices[9][3];
 units[9] = "47";
 comments[9] = "Id Pregunta: 10675. Inscripci&oacute;n autom&aacute;tica nacimientos";


//  Id pregunta: 10610 Año de creación de pregunta: 2016
 questions[10]= "11)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[10]= new Array();
 choices[10][0] = "GROUP BY.";
 choices[10][1] = "COUNT.";
 choices[10][2] = "WHERE.";
 choices[10][3] = "DISTINCT.";
 answers[10] = choices[10][0];
 units[10] = "60";
 comments[10] = "Id Pregunta: 10610. Junta de Extremadura A1 2015";


//  Id pregunta: 10084 Año de creación de pregunta: 2016
 questions[11]= "12)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[11]= new Array();
 choices[11][0] = "Interchange of Data between Administrations (IDA)";
 choices[11][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[11][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[11][3] = "Interoperability Electronic European Solution (IEES)";
 answers[11] = choices[11][1];
 units[11] = "43";
 comments[11] = "Id Pregunta: 10084. AGE A1 2015";


//  Id pregunta: 10636 Año de creación de pregunta: 2016
 questions[12]= "13)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[12]= new Array();
 choices[12][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[12][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[12][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[12][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[12] = choices[12][2];
 units[12] = "57";
 comments[12] = "Id Pregunta: 10636. Junta de Extremadura A1 2015";


//  Id pregunta: 10083 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[13]= new Array();
 choices[13][0] = "Perceptible";
 choices[13][1] = "Operable";
 choices[13][2] = "Comprensible";
 choices[13][3] = "Robusto";
 answers[13] = choices[13][2];
 units[13] = "42";
 comments[13] = "Id Pregunta: 10083. AGE A1 2015";


//  Id pregunta: 10368 Año de creación de pregunta: 2016
 questions[14]= "15)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[14]= new Array();
 choices[14][0] = "Un Reglamento.";
 choices[14][1] = "Un Decreto.";
 choices[14][2] = "Una Ley.";
 choices[14][3] = "Un Real-Decreto.";
 answers[14] = choices[14][2];
 units[14] = "5";
 comments[14] = "Id Pregunta: 10368. UNION EUROPEA";


//  Id pregunta: 10344 Año de creación de pregunta: 2016
 questions[15]= "16)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[15]= new Array();
 choices[15][0] = "Pas&oacute; de 518 a 626.";
 choices[15][1] = "Pas&oacute; de 434 a 518.";
 choices[15][2] = "Pas&oacute; de 345 a 512.";
 choices[15][3] = "Pas&oacute; de 435 a 610.";
 answers[15] = choices[15][1];
 units[15] = "5";
 comments[15] = "Id Pregunta: 10344. UNION EUROPEA";


//  Id pregunta: 10107 Año de creación de pregunta: 2016
 questions[16]= "17)  Son bases de datos NoSQL orientadas a objetos:";
 choices[16]= new Array();
 choices[16][0] = "GemStone";
 choices[16][1] = "Zope Object DB";
 choices[16][2] = "Las dos anteriores";
 choices[16][3] = "Solo B)";
 answers[16] = choices[16][2];
 units[16] = "73";
 comments[16] = "Id Pregunta: 10107. ";


//  Id pregunta: 10543 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[17]= new Array();
 choices[17][0] = "ISO/IEC 31000";
 choices[17][1] = "ISO/IEC 14000";
 choices[17][2] = "ISO/IEC 38500";
 choices[17][3] = "ISO/IEC 18000";
 answers[17] = choices[17][2];
 units[17] = "26";
 comments[17] = "Id Pregunta: 10543. Gobernanza TIC";


//  Id pregunta: 10155 Año de creación de pregunta: 2016
 questions[18]= "19)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[18]= new Array();
 choices[18][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[18][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[18][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[18][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[18] = choices[18][2];
 units[18] = "7";
 comments[18] = "Id Pregunta: 10155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 10227 Año de creación de pregunta: 2016
 questions[19]= "20)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[19]= new Array();
 choices[19][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[19][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[19][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[19][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[19] = choices[19][3];
 units[19] = "1";
 comments[19] = "Id Pregunta: 10227. CONSTITUCION1978";


//  Id pregunta: 10573 Año de creación de pregunta: 2016
 questions[20]= "21)  Si queremos dise&ntilde;ar un enlace de 10 Gbps. &iquest;qu&eacute; medio de transmisi&oacute;n nos permite alcanzar la m&aacute;xima longitud del enlace?";
 choices[20]= new Array();
 choices[20][0] = "Cableado de cobre de categor&iacute;a 7.";
 choices[20][1] = "Fibra &oacute;ptica monomodo tipo OS2.";
 choices[20][2] = "Fibra &oacute;ptica multimodo tipo OM3.";
 choices[20][3] = "Fibra &oacute;ptica multimodo tipo OM4.";
 answers[20] = choices[20][1];
 units[20] = "106";
 comments[20] = "Id Pregunta: 10573. Tema 106. TAI 2016.";


//  Id pregunta: 10146 Año de creación de pregunta: 2016
 questions[21]= "22)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[21]= new Array();
 choices[21][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[21][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[21][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[21][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[21] = choices[21][0];
 units[21] = "8";
 comments[21] = "Id Pregunta: 10146. Ley 39/2015, Art&iacute;culo 107";


//  Id pregunta: 10026 Año de creación de pregunta: 2016
 questions[22]= "23)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[22]= new Array();
 choices[22][0] = "Sello electr&oacute;nico";
 choices[22][1] = "Sede electr&oacute;nica";
 choices[22][2] = "Servidor seguro (SSL/TLS)";
 choices[22][3] = "Empleado p&uacute;blico";
 answers[22] = choices[22][2];
 units[22] = "7";
 comments[22] = "Id Pregunta: 10026. AGE A1 2015";


//  Id pregunta: 10447 Año de creación de pregunta: 2016
 questions[23]= "24)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[23]= new Array();
 choices[23][0] = "Ejecutivo";
 choices[23][1] = "Limitativo";
 choices[23][2] = "Estimativo";
 choices[23][3] = "Progresivo";
 answers[23] = choices[23][1];
 units[23] = "10";
 comments[23] = "Id Pregunta: 10447. PRESUPUESTOS GENERALES";


//  Id pregunta: 10126 Año de creación de pregunta: 2016
 questions[24]= "25)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[24]= new Array();
 choices[24][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[24][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[24][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[24][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[24] = choices[24][3];
 units[24] = "22";
 comments[24] = "Id Pregunta: 10126. ";


//  Id pregunta: 10340 Año de creación de pregunta: 2016
 questions[25]= "26)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[25]= new Array();
 choices[25][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[25][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[25][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[25][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[25] = choices[25][2];
 units[25] = "5";
 comments[25] = "Id Pregunta: 10340. UNION EUROPEA";


//  Id pregunta: 10207 Año de creación de pregunta: 2016
 questions[26]= "27)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[26]= new Array();
 choices[26][0] = "El Delegado del Gobierno.";
 choices[26][1] = "El Subdelegado del Gobierno.";
 choices[26][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[26][3] = "El Gobernador Civil.";
 answers[26] = choices[26][2];
 units[26] = "1";
 comments[26] = "Id Pregunta: 10207. CONSTITUCION1978";


//  Id pregunta: 10504 Año de creación de pregunta: 2016
 questions[27]= "28)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[27]= new Array();
 choices[27][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[27][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[27][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[27][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[27] = choices[27][2];
 units[27] = "10";
 comments[27] = "Id Pregunta: 10504. PRESUPUESTOS GENERALES";


//  Id pregunta: 10080 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[28]= new Array();
 choices[28][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[28][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[28][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[28][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[28] = choices[28][3];
 units[28] = "46";
 comments[28] = "Id Pregunta: 10080. AGE A1 2015";


//  Id pregunta: 10217 Año de creación de pregunta: 2016
 questions[29]= "30)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[29]= new Array();
 choices[29][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[29][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[29][2] = "Son refrendados por el Rey.";
 choices[29][3] = "Son convocados por el Presidente del Gobierno.";
 answers[29] = choices[29][0];
 units[29] = "1";
 comments[29] = "Id Pregunta: 10217. CONSTITUCION1978";


//  Id pregunta: 10421 Año de creación de pregunta: 2016
 questions[30]= "31)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[30]= new Array();
 choices[30][0] = "El acoso sexual.";
 choices[30][1] = "El acoso por raz&oacute;n del sexo.";
 choices[30][2] = "Ambas son correctas.";
 choices[30][3] = "A y B son incorrectas.";
 answers[30] = choices[30][2];
 units[30] = "14";
 comments[30] = "Id Pregunta: 10421. POLITICAS DE IGUALDAD";


//  Id pregunta: 10131 Año de creación de pregunta: 2016
 questions[31]= "32)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[31]= new Array();
 choices[31][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[31][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[31][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[31][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[31] = choices[31][0];
 units[31] = "12";
 comments[31] = "Id Pregunta: 10131. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10566 Año de creación de pregunta: 2016
 questions[32]= "33)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[32]= new Array();
 choices[32][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[32][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[32][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[32][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[32] = choices[32][0];
 units[32] = "12";
 comments[32] = "Id Pregunta: 10566. Modelo econ&oacute;mico";


//  Id pregunta: 10403 Año de creación de pregunta: 2016
 questions[33]= "34)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[33]= new Array();
 choices[33][0] = "Medidas de igualdad.";
 choices[33][1] = "Objetivos de igualdad.";
 choices[33][2] = "Ambas son correctas.";
 choices[33][3] = "A y B son incorrectas.";
 answers[33] = choices[33][2];
 units[33] = "14";
 comments[33] = "Id Pregunta: 10403. POLITICAS DE IGUALDAD";


//  Id pregunta: 10655 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[34]= new Array();
 choices[34][0] = "Yarn";
 choices[34][1] = "Flume";
 choices[34][2] = "Hive";
 choices[34][3] = "BizAgi";
 answers[34] = choices[34][3];
 units[34] = "73";
 comments[34] = "Id Pregunta: 10655. ";


//  Id pregunta: 10484 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[35]= new Array();
 choices[35][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[35][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[35][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[35][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[35] = choices[35][2];
 units[35] = "10";
 comments[35] = "Id Pregunta: 10484. PRESUPUESTOS GENERALES";


//  Id pregunta: 10095 Año de creación de pregunta: 2016
 questions[36]= "37)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[36]= new Array();
 choices[36][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[36][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[36][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[36][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[36] = choices[36][3];
 units[36] = "89";
 comments[36] = "Id Pregunta: 10095. AGE A1 2015";


//  Id pregunta: 10259 Año de creación de pregunta: 2016
 questions[37]= "38)  La iniciativa legislativa corresponde:";
 choices[37]= new Array();
 choices[37][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[37][1] = "Al rey y al Gobierno.";
 choices[37][2] = "Al Congreso, al Senado y al Rey.";
 choices[37][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[37] = choices[37][3];
 units[37] = "1";
 comments[37] = "Id Pregunta: 10259. CONSTITUCION1978";


//  Id pregunta: 10645 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[38]= new Array();
 choices[38][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[38][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[38][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[38][3] = "El Instituto de la Mujer de Extremadura.";
 answers[38] = choices[38][3];
 units[38] = "14";
 comments[38] = "Id Pregunta: 10645. Junta de Extremadura A1 2015";


//  Id pregunta: 10013 Año de creación de pregunta: 2016
 questions[39]= "40)  JNDI se usa para el acceso a:";
 choices[39]= new Array();
 choices[39][0] = "Datos de ficheros";
 choices[39][1] = "Sistemas gestores de bases de datos";
 choices[39][2] = "Directorios de nombres";
 choices[39][3] = "Colas de mensajer&iacute;a";
 answers[39] = choices[39][2];
 units[39] = "64";
 comments[39] = "Id Pregunta: 10013. AGE A1 2015";


//  Id pregunta: 10085 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[40]= new Array();
 choices[40][0] = "Estimaci&oacute;n del riesgo";
 choices[40][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[40][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[40][3] = "Mapa de riesgos";
 answers[40] = choices[40][3];
 units[40] = "45";
 comments[40] = "Id Pregunta: 10085. AGE A1 2015";


//  Id pregunta: 10663 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[41]= new Array();
 choices[41][0] = "De oficio.";
 choices[41][1] = "A solicitud del interesado.";
 choices[41][2] = "De oficio o a solicitud del interesado.";
 choices[41][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[41] = choices[41][2];
 units[41] = "7";
 comments[41] = "Id Pregunta: 10663. Art&iacute;culo 54 de la Ley 39/2015";


//  Id pregunta: 10004 Año de creación de pregunta: 2016
 questions[42]= "43)  Un wireframe es:";
 choices[42]= new Array();
 choices[42][0] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiFi.";
 choices[42][1] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiMAX.";
 choices[42][2] = "Un modelo que permite evaluar el impacto de las nuevas tecnolog&iacute;as en la mejora de la calidad de vida durante la puesta en marcha de una ciudad inteligente (smart city).";
 choices[42][3] = "Una interfaz visual que representa la estructura visual de un sitio web y la relaci&oacute;n entre sus p&aacute;ginas.";
 answers[42] = choices[42][3];
 units[42] = "62";
 comments[42] = "Id Pregunta: 10004. AGE A1 2015";


//  Id pregunta: 10257 Año de creación de pregunta: 2016
 questions[43]= "44)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[43]= new Array();
 choices[43][0] = "El Presidente y su gabinete.";
 choices[43][1] = "El Presidente y sus Ministros.";
 choices[43][2] = "El Rey y el Presidente.";
 choices[43][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[43] = choices[43][2];
 units[43] = "1";
 comments[43] = "Id Pregunta: 10257. CONSTITUCION1978";


//  Id pregunta: 10323 Año de creación de pregunta: 2016
 questions[44]= "45)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[44]= new Array();
 choices[44][0] = "Tres a&ntilde;os.";
 choices[44][1] = "Cuatro a&ntilde;os.";
 choices[44][2] = "Cinco a&ntilde;os.";
 choices[44][3] = "Seis a&ntilde;os.";
 answers[44] = choices[44][3];
 units[44] = "5";
 comments[44] = "Id Pregunta: 10323. UNION EUROPEA";


//  Id pregunta: 10306 Año de creación de pregunta: 2016
 questions[45]= "46)  Componen la Comisi&oacute;n Europea:";
 choices[45]= new Array();
 choices[45][0] = "Un Comisario por cada Estado miembro.";
 choices[45][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[45][2] = "Dos Comisarios por cada Estado miembro.";
 choices[45][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[45] = choices[45][0];
 units[45] = "5";
 comments[45] = "Id Pregunta: 10306. UNION EUROPEA";


//  Id pregunta: 10119 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[46]= new Array();
 choices[46][0] = "Anual";
 choices[46][1] = "Mensual";
 choices[46][2] = "Semestral";
 choices[46][3] = "Trimestral";
 answers[46] = choices[46][3];
 units[46] = "15";
 comments[46] = "Id Pregunta: 10119. ";


//  Id pregunta: 10583 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[47]= new Array();
 choices[47][0] = "Los principios rectores";
 choices[47][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[47][2] = "Los hitos para su desarrollo gradual";
 choices[47][3] = "Todos los anteriores";
 answers[47] = choices[47][3];
 units[47] = "19";
 comments[47] = "Id Pregunta: 10583. Estrategia TIC";


//  Id pregunta: 10031 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Qu&eacute; es MongoDB?";
 choices[48]= new Array();
 choices[48][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[48][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[48][2] = "Un sistema gestor de base de datos relacional.";
 choices[48][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[48] = choices[48][1];
 units[48] = "73";
 comments[48] = "Id Pregunta: 10031. AGE A1 2015";


//  Id pregunta: 10158 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[49]= new Array();
 choices[49][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[49][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[49][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[49][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[49] = choices[49][1];
 units[49] = "7";
 comments[49] = "Id Pregunta: 10158. Ley 39/2015, Art&iacute;culo 43";


//  Id pregunta: 10440 Año de creación de pregunta: 2016
 questions[50]= "51)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[50]= new Array();
 choices[50][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[50][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[50][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[50][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[50] = choices[50][2];
 units[50] = "43";
 comments[50] = "Id Pregunta: 10440. SERVICIOS COMUNES";


//  Id pregunta: 10337 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[51]= new Array();
 choices[51][0] = "732";
 choices[51][1] = "626";
 choices[51][2] = "786";
 choices[51][3] = "360";
 answers[51] = choices[51][2];
 units[51] = "5";
 comments[51] = "Id Pregunta: 10337. UNION EUROPEA";


//  Id pregunta: 10148 Año de creación de pregunta: 2016
 questions[52]= "53)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[52]= new Array();
 choices[52][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[52][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[52][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[52][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[52] = choices[52][2];
 units[52] = "7";
 comments[52] = "Id Pregunta: 10148. Ley 39/2015, Art&iacute;culo 131";


//  Id pregunta: 10455 Año de creación de pregunta: 2016
 questions[53]= "54)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[53]= new Array();
 choices[53][0] = "En qu&eacute; nos gastamos el dinero";
 choices[53][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[53][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[53][3] = "Qui&eacute;n se gasta el dinero.";
 answers[53] = choices[53][0];
 units[53] = "10";
 comments[53] = "Id Pregunta: 10455. PRESUPUESTOS GENERALES";


//  Id pregunta: 10017 Año de creación de pregunta: 2016
 questions[54]= "55)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[54]= new Array();
 choices[54][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[54][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[54][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[54][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[54] = choices[54][3];
 units[54] = "44";
 comments[54] = "Id Pregunta: 10017. AGE A1 2015";


//  Id pregunta: 10453 Año de creación de pregunta: 2016
 questions[55]= "56)  En las Administraciones P&uacute;blicas...";
 choices[55]= new Array();
 choices[55][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[55][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[55][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[55][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[55] = choices[55][0];
 units[55] = "10";
 comments[55] = "Id Pregunta: 10453. PRESUPUESTOS GENERALES";


//  Id pregunta: 10426 Año de creación de pregunta: 2016
 questions[56]= "57)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[56]= new Array();
 choices[56][0] = "Un plan de igualdad.";
 choices[56][1] = "Un informe de impacto de g&eacute;nero.";
 choices[56][2] = "Un programa de igualdad.";
 choices[56][3] = "Todas son correctas.";
 answers[56] = choices[56][1];
 units[56] = "14";
 comments[56] = "Id Pregunta: 10426. POLITICAS DE IGUALDAD";


//  Id pregunta: 10193 Año de creación de pregunta: 2016
 questions[57]= "58)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[57]= new Array();
 choices[57][0] = "3 a&ntilde;os.";
 choices[57][1] = "5 a&ntilde;os.";
 choices[57][2] = "4 a&ntilde;os.";
 choices[57][3] = "6 a&ntilde;os.";
 answers[57] = choices[57][1];
 units[57] = "1";
 comments[57] = "Id Pregunta: 10193. CONSTITUCION1978";


//  Id pregunta: 10293 Año de creación de pregunta: 2016
 questions[58]= "59)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[58]= new Array();
 choices[58][0] = "Estrasburgo.";
 choices[58][1] = "Bruselas.";
 choices[58][2] = "Luxemburgo.";
 choices[58][3] = "Holanda.";
 answers[58] = choices[58][0];
 units[58] = "5";
 comments[58] = "Id Pregunta: 10293. UNION EUROPEA";


//  Id pregunta: 10073 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[59]= new Array();
 choices[59][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[59][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[59][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[59][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[59] = choices[59][1];
 units[59] = "44";
 comments[59] = "Id Pregunta: 10073. AGE A1 2015";


//  Id pregunta: 10589 Año de creación de pregunta: 2016
 questions[60]= "61)  Son servicios declarados compartidos:";
 choices[60]= new Array();
 choices[60][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[60][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[60][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[60][3] = "Todos los anteriores";
 answers[60] = choices[60][3];
 units[60] = "19";
 comments[60] = "Id Pregunta: 10589. Estrategia TIC";


//  Id pregunta: 10066 Año de creación de pregunta: 2016
 questions[61]= "62)  Para los siguientes tipos de copias de seguridad, indique cu&aacute;l de las siguientes secuencias los ordena de mayor a menor tiempo de restauraci&oacute;n:";
 choices[61]= new Array();
 choices[61][0] = "Incremental, diferencial, completa";
 choices[61][1] = "Completa, incremental, diferencial";
 choices[61][2] = "Completa, diferencial, incremental";
 choices[61][3] = "No hay diferencia en el tiempo de restauraci&oacute;n, encontr&aacute;ndose la diferencia en el espacio de almacenamiento consumido.";
 answers[61] = choices[61][0];
 units[61] = "53";
 comments[61] = "Id Pregunta: 10066. AGE A1 2015. Pregunta anulada en el examen real. La opci&oacute;n A dec&iacute;a &quot;Diferencial, incremental, completa&quot;, por lo que ninguna respuesta pod&iacute;a considerarse correcta";


//  Id pregunta: 10394 Año de creación de pregunta: 2016
 questions[62]= "63)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[62]= new Array();
 choices[62][0] = "Discriminaci&oacute;n indirecta.";
 choices[62][1] = "Discriminaci&oacute;n directa.";
 choices[62][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[62][3] = "Discriminaci&oacute;n abusiva.";
 answers[62] = choices[62][0];
 units[62] = "14";
 comments[62] = "Id Pregunta: 10394. POLITICAS DE IGUALDAD";


//  Id pregunta: 10043 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[63]= new Array();
 choices[63][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[63][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[63][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[63][3] = "El software funcionando es la medida principal del progreso.";
 answers[63] = choices[63][2];
 units[63] = "34";
 comments[63] = "Id Pregunta: 10043. AGE A1 2015";


//  Id pregunta: 10456 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[64]= new Array();
 choices[64][0] = "a) Los cuatro ejercicios siguientes.";
 choices[64][1] = "b) El ejercicio siguiente.";
 choices[64][2] = "c) Los dos ejercicios siguientes.";
 choices[64][3] = "d) Los tres ejercicios siguientes.";
 answers[64] = choices[64][3];
 units[64] = "10";
 comments[64] = "Id Pregunta: 10456. PRESUPUESTOS GENERALES";


//  Id pregunta: 10056 Año de creación de pregunta: 2016
 questions[65]= "66)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[65]= new Array();
 choices[65][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[65][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[65][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[65][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[65] = choices[65][2];
 units[65] = "83";
 comments[65] = "Id Pregunta: 10056. AGE A1 2015";


//  Id pregunta: 10502 Año de creación de pregunta: 2016
 questions[66]= "67)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[66]= new Array();
 choices[66][0] = "Principio de transparencia.";
 choices[66][1] = "Principio de cooperaci&oacute;n.";
 choices[66][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[66][3] = "Principio de lealtad institucional.";
 answers[66] = choices[66][1];
 units[66] = "10";
 comments[66] = "Id Pregunta: 10502. PRESUPUESTOS GENERALES";


//  Id pregunta: 10097 Año de creación de pregunta: 2016
 questions[67]= "68)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[67]= new Array();
 choices[67][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[67][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[67][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[67][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[67] = choices[67][2];
 units[67] = "22";
 comments[67] = "Id Pregunta: 10097. AGE A1 2015";


//  Id pregunta: 10486 Año de creación de pregunta: 2016
 questions[68]= "69)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[68]= new Array();
 choices[68][0] = "La Ley General Tributaria.";
 choices[68][1] = "La Ley Presupuestaria.";
 choices[68][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[68][3] = "Ninguna de las respuestas es correcta.";
 answers[68] = choices[68][0];
 units[68] = "10";
 comments[68] = "Id Pregunta: 10486. PRESUPUESTOS GENERALES";


//  Id pregunta: 10410 Año de creación de pregunta: 2016
 questions[69]= "70)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[69]= new Array();
 choices[69][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[69][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[69][2] = "Un programa de igualdad.";
 choices[69][3] = "Un estatuto de igualdad.";
 answers[69] = choices[69][0];
 units[69] = "14";
 comments[69] = "Id Pregunta: 10410. POLITICAS DE IGUALDAD";


//  Id pregunta: 10459 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[70]= new Array();
 choices[70][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[70][1] = "Pasivos financieros y transferencias de capital.";
 choices[70][2] = "Activos financieros y pasivos financieros.";
 choices[70][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[70] = choices[70][2];
 units[70] = "10";
 comments[70] = "Id Pregunta: 10459. PRESUPUESTOS GENERALES";


//  Id pregunta: 10069 Año de creación de pregunta: 2016
 questions[71]= "72)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[71]= new Array();
 choices[71][0] = "Ejecuci&oacute;n";
 choices[71][1] = "Adjudicaci&oacute;n";
 choices[71][2] = "Licitaci&oacute;n";
 choices[71][3] = "Formalizaci&oacute;n";
 answers[71] = choices[71][3];
 units[71] = "37";
 comments[71] = "Id Pregunta: 10069. AGE A1 2015";


//  Id pregunta: 10076 Año de creación de pregunta: 2016
 questions[72]= "73)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[72]= new Array();
 choices[72][0] = "Estrat&eacute;gico";
 choices[72][1] = "Operativo";
 choices[72][2] = "T&aacute;ctico";
 choices[72][3] = "Tecnol&oacute;gico";
 answers[72] = choices[72][0];
 units[72] = "36";
 comments[72] = "Id Pregunta: 10076. AGE A1 2015";


//  Id pregunta: 10198 Año de creación de pregunta: 2016
 questions[73]= "74)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[73]= new Array();
 choices[73][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[73][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[73][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[73][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[73] = choices[73][3];
 units[73] = "1";
 comments[73] = "Id Pregunta: 10198. CONSTITUCION1978";


//  Id pregunta: 10401 Año de creación de pregunta: 2016
 questions[74]= "75)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[74]= new Array();
 choices[74][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[74][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[74][2] = "Ambas son correctas.";
 choices[74][3] = "A y B son incorrectas.";
 answers[74] = choices[74][2];
 units[74] = "14";
 comments[74] = "Id Pregunta: 10401. POLITICAS DE IGUALDAD";


