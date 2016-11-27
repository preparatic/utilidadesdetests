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

//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[0]= "1)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[0]= new Array();
 choices[0][0] = "Ejecutivo";
 choices[0][1] = "Limitativo";
 choices[0][2] = "Estimativo";
 choices[0][3] = "Progresivo";
 answers[0] = choices[0][1];
 units[0] = "10";
 comments[0] = "Id Pregunta: 447. PRESUPUESTOS GENERALES";


//  Id pregunta: 408 Año de creación de pregunta: 2016
 questions[1]= "2)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[1]= new Array();
 choices[1][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[1][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[1][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[1][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[1] = choices[1][1];
 units[1] = "14";
 comments[1] = "Id Pregunta: 408. POLITICAS DE IGUALDAD";


//  Id pregunta: 173 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[2]= new Array();
 choices[2][0] = "absoluta de las Cortes Generales.";
 choices[2][1] = "absoluta del Congreso de los Diputados.";
 choices[2][2] = "simple de las Cortes Generales.";
 choices[2][3] = "simple del Congreso de los Diputados.";
 answers[2] = choices[2][3];
 units[2] = "1";
 comments[2] = "Id Pregunta: 173. CONSTITUCION1978";


//  Id pregunta: 547 Año de creación de pregunta: 2016
 questions[3]= "4)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[3]= new Array();
 choices[3][0] = "Integrar la estrategia TIC con la de negocio";
 choices[3][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[3][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[3][3] = "Todas las anteriores";
 answers[3] = choices[3][3];
 units[3] = "26";
 comments[3] = "Id Pregunta: 547. Gobernanza TIC";


//  Id pregunta: 574 Año de creación de pregunta: 2016
 questions[4]= "5)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[4]= new Array();
 choices[4][0] = "Mercurial, Git y Apache Subversion.";
 choices[4][1] = "Gimp, Mercurial y Git.";
 choices[4][2] = "RedMine, Planner y OpenProj.";
 choices[4][3] = "Cassandra, Git y REDIS.";
 answers[4] = choices[4][0];
 units[4] = "92";
 comments[4] = "Id Pregunta: 574. Tema 92. TAI 2016.";


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[5]= "6)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se ce&ntilde;ir&aacute;n a:";
 choices[5]= new Array();
 choices[5][0] = "6 principios.";
 choices[5][1] = "7 principios.";
 choices[5][2] = "5 principios.";
 choices[5][3] = "6 directrices.";
 answers[5] = choices[5][1];
 units[5] = "28";
 comments[5] = "Id Pregunta: 736. Estrategia TIC";


//  Id pregunta: 245 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[6]= new Array();
 choices[6][0] = "De los derechos y deberes fundamentales.";
 choices[6][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[6][2] = "Derechos y libertades.";
 choices[6][3] = "De la Corona.";
 answers[6] = choices[6][1];
 units[6] = "1";
 comments[6] = "Id Pregunta: 245. CONSTITUCION1978";


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[7]= "8)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[7]= new Array();
 choices[7][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[7][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[7][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[7][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[7] = choices[7][1];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 833. Ley 40/2015";


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[8]= new Array();
 choices[8][0] = "117.5";
 choices[8][1] = "117.1";
 choices[8][2] = "116";
 choices[8][3] = "15";
 answers[8] = choices[8][0];
 units[8] = "1";
 comments[8] = "Id Pregunta: 260. CONSTITUCION1978";


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qu&eacute; facilita un ORM?";
 choices[9]= new Array();
 choices[9][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[9][1] = "Conversi&oacute;n de objetos a documentos";
 choices[9][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[9][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[9] = choices[9][0];
 units[9] = "62";
 comments[9] = "Id Pregunta: 49. AGE A1 2015";


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[10]= "11)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[10]= new Array();
 choices[10][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[10][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[10][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[10][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[10] = choices[10][2];
 units[10] = "83";
 comments[10] = "Id Pregunta: 56. AGE A1 2015";


//  Id pregunta: 224 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[11]= new Array();
 choices[11][0] = "Art&iacute;culo 16.2.";
 choices[11][1] = "Art&iacute;culo 17.1.";
 choices[11][2] = "Art&iacute;culo 18.1.";
 choices[11][3] = "Art&iacute;culo 18.2.";
 answers[11] = choices[11][2];
 units[11] = "1";
 comments[11] = "Id Pregunta: 224. CONSTITUCION1978";


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[12]= "13)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[12]= new Array();
 choices[12][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[12][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[12][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[12][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[12] = choices[12][1];
 units[12] = "95";
 comments[12] = "Id Pregunta: 9. AGE A1 2015";


//  Id pregunta: 506 Año de creación de pregunta: 2016
 questions[13]= "14)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[13]= new Array();
 choices[13][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[13][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[13][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[13][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[13] = choices[13][3];
 units[13] = "10";
 comments[13] = "Id Pregunta: 506. PRESUPUESTOS GENERALES";


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[14]= new Array();
 choices[14][0] = "Al Gobierno de la naci&oacute;n";
 choices[14][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[14][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[14][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[14] = choices[14][3];
 units[14] = "7";
 comments[14] = "Id Pregunta: 147. Ley 39/2015, Art&iacute;culo 128";


//  Id pregunta: 569 Año de creación de pregunta: 2016
 questions[15]= "16)  El sector Servicios NO incluye:";
 choices[15]= new Array();
 choices[15][0] = "El Comercio";
 choices[15][1] = "Los Transportes";
 choices[15][2] = "La Energ&iacute;a";
 choices[15][3] = "Las Comunicaciones";
 answers[15] = choices[15][2];
 units[15] = "12";
 comments[15] = "Id Pregunta: 569. Modelo econ&oacute;mico";


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[16]= new Array();
 choices[16][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[16][1] = "Auditor&iacute;a operativa.";
 choices[16][2] = "Auditor&iacute;a de cumplimiento.";
 choices[16][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[16] = choices[16][2];
 units[16] = "10";
 comments[16] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[17]= new Array();
 choices[17][0] = "Ley Org&aacute;nica.";
 choices[17][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[17][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[17][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[17] = choices[17][2];
 units[17] = "1";
 comments[17] = "Id Pregunta: 203. CONSTITUCION1978";


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[18]= new Array();
 choices[18][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[18][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[18][2] = "A) y B) son verdaderas";
 choices[18][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[18] = choices[18][2];
 units[18] = "73";
 comments[18] = "Id Pregunta: 106. ";


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[19]= new Array();
 choices[19][0] = "El Parlamento y el Consejo.";
 choices[19][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[19][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[19][3] = "La Comisi&oacute;n y el Consejo.";
 answers[19] = choices[19][1];
 units[19] = "5";
 comments[19] = "Id Pregunta: 357. UNION EUROPEA";


//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[20]= "21)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[20]= new Array();
 choices[20][0] = "Seis a&ntilde;os.";
 choices[20][1] = "Cinco a&ntilde;os.";
 choices[20][2] = "Cuatro a&ntilde;os.";
 choices[20][3] = "Ocho a&ntilde;os.";
 answers[20] = choices[20][1];
 units[20] = "5";
 comments[20] = "Id Pregunta: 307. UNION EUROPEA";


//  Id pregunta: 525 Año de creación de pregunta: 2016
 questions[21]= "22)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[21]= new Array();
 choices[21][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[21][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[21][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[21][3] = "cualquiera que sea el estado del procedimiento";
 answers[21] = choices[21][3];
 units[21] = "7";
 comments[21] = "Id Pregunta: 525. LEY 39/2015";


//  Id pregunta: 67 Año de creación de pregunta: 2016
 questions[22]= "23)  En Internet, la entidad encargada de la coordinaci&oacute;n de los N&uacute;meros de Sistema Aut&oacute;nomo (Autonomous System Numbers - ASN) usados por varios protocolos de enrutamiento, es:";
 choices[22]= new Array();
 choices[22][0] = "IANA";
 choices[22][1] = "ISOC";
 choices[22][2] = "IETF";
 choices[22][3] = "IAB";
 answers[22] = choices[22][0];
 units[22] = "103";
 comments[22] = "Id Pregunta: 67. AGE A1 2015";


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[23]= "24)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[23]= new Array();
 choices[23][0] = "El derecho a un permiso.";
 choices[23][1] = "Una prestaci&oacute;n por paternidad.";
 choices[23][2] = "Ambas son correctas.";
 choices[23][3] = "18 d&iacute;as de permiso.";
 answers[23] = choices[23][2];
 units[23] = "14";
 comments[23] = "Id Pregunta: 423. POLITICAS DE IGUALDAD";


//  Id pregunta: 336 Año de creación de pregunta: 2016
 questions[24]= "25)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[24]= new Array();
 choices[24][0] = "Diciembre de 1987.";
 choices[24][1] = "Septiembre de 1989.";
 choices[24][2] = "Octubre de 1990.";
 choices[24][3] = "Noviembre de 1980.";
 answers[24] = choices[24][1];
 units[24] = "5";
 comments[24] = "Id Pregunta: 336. UNION EUROPEA";


//  Id pregunta: 695 Año de creación de pregunta: 2016
 questions[25]= "26)  De las siguientes cu&aacute;l est&aacute; relacionada con la noci&oacute;n de integraci&oacute;n continua:";
 choices[25]= new Array();
 choices[25][0] = "Programaci&oacute;n estructurada.";
 choices[25][1] = "Metodolog&iacute;a M&eacute;trica Versi&oacute;n 4.";
 choices[25][2] = "Programaci&oacute;n extrema.";
 choices[25][3] = "Programaci&oacute;n Espuria.";
 answers[25] = choices[25][2];
 units[25] = "92";
 comments[25] = "Id Pregunta: 695. INTEGRACION CONTINUA";


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[26]= "27)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[26]= new Array();
 choices[26][0] = "Sello electr&oacute;nico";
 choices[26][1] = "Sede electr&oacute;nica";
 choices[26][2] = "Servidor seguro (SSL/TLS)";
 choices[26][3] = "Empleado p&uacute;blico";
 answers[26] = choices[26][2];
 units[26] = "7";
 comments[26] = "Id Pregunta: 26. AGE A1 2015";


//  Id pregunta: 585 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[27]= new Array();
 choices[27][0] = "La CETIC";
 choices[27][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[27][2] = "La DTIC";
 choices[27][3] = "Ninguno de los anteriores";
 answers[27] = choices[27][1];
 units[27] = "19";
 comments[27] = "Id Pregunta: 585. Estrategia TIC";


//  Id pregunta: 667 Año de creación de pregunta: 2016
 questions[28]= "29)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[28]= new Array();
 choices[28][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[28][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[28][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[28][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[28] = choices[28][2];
 units[28] = "7";
 comments[28] = "Id Pregunta: 667. Cap&iacute;tulo IV, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[29]= new Array();
 choices[29][0] = "Orientaci&oacute;n a objetos";
 choices[29][1] = "MapReduce";
 choices[29][2] = "Pipeline filtering";
 choices[29][3] = "Programaci&oacute;n funcional";
 answers[29] = choices[29][1];
 units[29] = "73";
 comments[29] = "Id Pregunta: 659. ";


//  Id pregunta: 196 Año de creación de pregunta: 2016
 questions[30]= "31)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[30]= new Array();
 choices[30][0] = "Al Presidente del Gobierno.";
 choices[30][1] = "A las Cortes Generales";
 choices[30][2] = "A los electores.";
 choices[30][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[30] = choices[30][3];
 units[30] = "1";
 comments[30] = "Id Pregunta: 196. CONSTITUCION1978";


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[31]= "32)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[31]= new Array();
 choices[31][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[31][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[31][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[31][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[31] = choices[31][1];
 units[31] = "7";
 comments[31] = "Id Pregunta: 670. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[32]= new Array();
 choices[32][0] = "Por Real Decreto.";
 choices[32][1] = "Por Orden del Ministerio del Interior.";
 choices[32][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[32][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[32] = choices[32][2];
 units[32] = "1";
 comments[32] = "Id Pregunta: 230. CONSTITUCION1978";


//  Id pregunta: 776 Año de creación de pregunta: 2016
 questions[33]= "34)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[33]= new Array();
 choices[33][0] = "los Subsecretarios y los Secretarios generales";
 choices[33][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[33][2] = "los Secretarios de Estado y los Directores generales";
 choices[33][3] = "los Ministros y los Secretarios de Estado";
 answers[33] = choices[33][3];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 776. Ley 40/2015";


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[34]= "35)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[34]= new Array();
 choices[34][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[34][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[34][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[34][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[34] = choices[34][3];
 units[34] = "44";
 comments[34] = "Id Pregunta: 17. AGE A1 2015";


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[35]= new Array();
 choices[35][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[35][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[35][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[35][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[35] = choices[35][1];
 units[35] = "7";
 comments[35] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";


//  Id pregunta: 375 Año de creación de pregunta: 2016
 questions[36]= "37)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[36]= new Array();
 choices[36][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[36][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[36][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[36][3] = "Todas las respuestas son correctas.";
 answers[36] = choices[36][3];
 units[36] = "5";
 comments[36] = "Id Pregunta: 375. UNION EUROPEA";


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[37]= "38)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[37]= new Array();
 choices[37][0] = "apud acta";
 choices[37][1] = "presencialmente";
 choices[37][2] = "electr&oacute;nicamente";
 choices[37][3] = "todas son correctas";
 answers[37] = choices[37][3];
 units[37] = "7";
 comments[37] = "Id Pregunta: 536. LEY 39/2015";


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[38]= "39)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[38]= new Array();
 choices[38][0] = "El Ministerio de Hacienda.";
 choices[38][1] = "El Ministerio de Econom&iacute;a.";
 choices[38][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[38][3] = "Ninguna de las respuestas es correcta.";
 answers[38] = choices[38][2];
 units[38] = "10";
 comments[38] = "Id Pregunta: 468. PRESUPUESTOS GENERALES";


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[39]= "40)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[39]= new Array();
 choices[39][0] = "Tres a&ntilde;os.";
 choices[39][1] = "Dos a&ntilde;os y medio.";
 choices[39][2] = "Cinco a&ntilde;os.";
 choices[39][3] = "Seis a&ntilde;os.";
 answers[39] = choices[39][3];
 units[39] = "5";
 comments[39] = "Id Pregunta: 291. UNION EUROPEA";


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[40]= "41)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[40]= new Array();
 choices[40][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[40][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[40][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[40][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[40] = choices[40][1];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 813. Ley 40/2015";


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[41]= new Array();
 choices[41][0] = "Indirecta.";
 choices[41][1] = "Directa.";
 choices[41][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[41][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[41] = choices[41][1];
 units[41] = "14";
 comments[41] = "Id Pregunta: 392. POLITICAS DE IGUALDAD";


//  Id pregunta: 626 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[42]= new Array();
 choices[42][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[42][1] = "La Direcci&oacute;n de la Competencia.";
 choices[42][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[42][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[42] = choices[42][0];
 units[42] = "121";
 comments[42] = "Id Pregunta: 626. Junta de Extremadura A1 2015";


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[43]= "44)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[43]= new Array();
 choices[43][0] = "Seguridad Social y AEAT";
 choices[43][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[43][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[43][3] = "Todos los anteriores";
 answers[43] = choices[43][3];
 units[43] = "19";
 comments[43] = "Id Pregunta: 594. Estrategia TIC";


//  Id pregunta: 702 Año de creación de pregunta: 2016
 questions[44]= "45)  En el modelo de integraci&oacute;n continua se recomienda:";
 choices[44]= new Array();
 choices[44][0] = "Mantener un repositorio de c&oacute;digo.";
 choices[44][1] = "Realizar una migraci&oacute;n manual y controlada a cada entorno de desarrollo.";
 choices[44][2] = "Realizar las construcciones de versiones agrupando m&uacute;ltiples commits para optimizar el tiempo de proceso.";
 choices[44][3] = "Realizar las pruebas en el entorno de producci&oacute;n para obtener resultados reales.";
 answers[44] = choices[44][1];
 units[44] = "92";
 comments[44] = "Id Pregunta: 702. INTEGRACION CONTINUA";


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[45]= "46)  La partida presupuestaria es equivalente a...";
 choices[45]= new Array();
 choices[45][0] = "El sujeto que realiza el gasto";
 choices[45][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[45][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[45][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[45] = choices[45][3];
 units[45] = "10";
 comments[45] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[46]= new Array();
 choices[46][0] = "No, en ning&uacute;n caso.";
 choices[46][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[46][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[46][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[46] = choices[46][3];
 units[46] = "1";
 comments[46] = "Id Pregunta: 188. CONSTITUCION1978";


//  Id pregunta: 708 Año de creación de pregunta: 2016
 questions[47]= "48)  Indique la afirmaci&oacute;n falsa:";
 choices[47]= new Array();
 choices[47][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[47][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[47][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[47][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[47] = choices[47][1];
 units[47] = "22";
 comments[47] = "Id Pregunta: 708. Ley de transparencia";


//  Id pregunta: 21 Año de creación de pregunta: 2016
 questions[48]= "49)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[48]= new Array();
 choices[48][0] = "Gesti&oacute;n de la disponibilidad";
 choices[48][1] = "Gesti&oacute;n de la demanda";
 choices[48][2] = "Gesti&oacute;n de entregas";
 choices[48][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[48] = choices[48][0];
 units[48] = "101";
 comments[48] = "Id Pregunta: 21. AGE A1 2015";


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[49]= "50)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[49]= new Array();
 choices[49][0] = "P&uacute;blica.";
 choices[49][1] = "Privada.";
 choices[49][2] = "A y B son correctas.";
 choices[49][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[49] = choices[49][2];
 units[49] = "14";
 comments[49] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[50]= "51)  Los Secretarios generales t&eacute;cnicos:";
 choices[50]= new Array();
 choices[50][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[50][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[50][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[50][3] = "todas son correctas";
 answers[50] = choices[50][3];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 792. Ley 40/2015";


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[51]= "52)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[51]= new Array();
 choices[51][0] = "Principio de transparencia.";
 choices[51][1] = "Principio de cooperaci&oacute;n.";
 choices[51][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[51][3] = "Principio de lealtad institucional.";
 answers[51] = choices[51][1];
 units[51] = "10";
 comments[51] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";


//  Id pregunta: 593 Año de creación de pregunta: 2016
 questions[52]= "53)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[52]= new Array();
 choices[52][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[52][1] = "La CETIC";
 choices[52][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[52][3] = "El MHFP";
 answers[52] = choices[52][0];
 units[52] = "19";
 comments[52] = "Id Pregunta: 593. Estrategia TIC";


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[53]= "54)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[53]= new Array();
 choices[53][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[53][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[53][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[53][3] = "Todas son correctas.";
 answers[53] = choices[53][3];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 824. Ley 40/2015";


//  Id pregunta: 668 Año de creación de pregunta: 2016
 questions[54]= "55)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[54]= new Array();
 choices[54][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[54][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[54][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[54][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[54] = choices[54][3];
 units[54] = "7";
 comments[54] = "Id Pregunta: 668. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 835 Año de creación de pregunta: 2016
 questions[55]= "56)  Se&ntilde;ale la respuesta falsa:";
 choices[55]= new Array();
 choices[55][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[55][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[55][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[55][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[55] = choices[55][2];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 835. Ley 40/2015";


//  Id pregunta: 81 Año de creación de pregunta: 2016
 questions[56]= "57)  El lenguaje SPARK es un subconjunto de:";
 choices[56]= new Array();
 choices[56][0] = "Java";
 choices[56][1] = "Fortran";
 choices[56][2] = "Ruby";
 choices[56][3] = "Ada";
 answers[56] = choices[56][3];
 units[56] = "73";
 comments[56] = "Id Pregunta: 81. AGE A1 2015";


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[57]= "58)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[57]= new Array();
 choices[57][0] = "2.400 euros";
 choices[57][1] = "4.000 euros";
 choices[57][2] = "3.200 euros";
 choices[57][3] = "1.600 euros";
 answers[57] = choices[57][1];
 units[57] = "37";
 comments[57] = "Id Pregunta: 89. AGE A1 2015";


//  Id pregunta: 798 Año de creación de pregunta: 2016
 questions[58]= "59)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[58]= new Array();
 choices[58][0] = "los Secretarios de Estado";
 choices[58][1] = "los Ministros";
 choices[58][2] = "los Subsecretarios";
 choices[58][3] = "los Secretarios generales";
 answers[58] = choices[58][2];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 798. Ley 40/2015";


//  Id pregunta: 78 Año de creación de pregunta: 2016
 questions[59]= "60)  En relaci&oacute;n con la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, se&ntilde;ale la respuesta correcta:";
 choices[59]= new Array();
 choices[59][0] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, el interesado debe instar su rectificaci&oacute;n, sin que puedan ser cancelados y sustituidos de oficio por los datos rectificados o completados.";
 choices[59][1] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, ser&aacute;n cancelados y sustituidos de oficio por los datos rectificados o completados, sin perjuicio del derecho de rectificaci&oacute;n y cancelaci&oacute;n del afectado.";
 choices[59][2] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 15 d&iacute;as.";
 choices[59][3] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 1 mes.";
 answers[59] = choices[59][1];
 units[59] = "35";
 comments[59] = "Id Pregunta: 78. AGE A1 2015";


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[60]= "61)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[60]= new Array();
 choices[60][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[60][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[60][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[60][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[60] = choices[60][3];
 units[60] = "14";
 comments[60] = "Id Pregunta: 387. POLITICAS DE IGUALDAD";


//  Id pregunta: 43 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[61]= new Array();
 choices[61][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[61][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[61][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[61][3] = "El software funcionando es la medida principal del progreso.";
 answers[61] = choices[61][2];
 units[61] = "34";
 comments[61] = "Id Pregunta: 43. AGE A1 2015";


//  Id pregunta: 653 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[62]= new Array();
 choices[62][0] = "Neo4J ";
 choices[62][1] = "OrientDB ";
 choices[62][2] = "InfoGrid ";
 choices[62][3] = "SimpleDB";
 answers[62] = choices[62][3];
 units[62] = "73";
 comments[62] = "Id Pregunta: 653. ";


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[63]= "64)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[63]= new Array();
 choices[63][0] = "La Comisi&oacute;n.";
 choices[63][1] = "El Consejo de Europa.";
 choices[63][2] = "El Consejo Europeo.";
 choices[63][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[63] = choices[63][3];
 units[63] = "5";
 comments[63] = "Id Pregunta: 300. UNION EUROPEA";


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[64]= "65)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[64]= new Array();
 choices[64][0] = "Cuatro.";
 choices[64][1] = "Una.";
 choices[64][2] = "Cinco.";
 choices[64][3] = "Nueve.";
 answers[64] = choices[64][2];
 units[64] = "1";
 comments[64] = "Id Pregunta: 268. CONSTITUCION1978";


//  Id pregunta: 767 Año de creación de pregunta: 2016
 questions[65]= "66)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[65]= new Array();
 choices[65][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[65][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[65][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[65][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[65] = choices[65][0];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 767. Ley 40/2015";


//  Id pregunta: 338 Año de creación de pregunta: 2016
 questions[66]= "67)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[66]= new Array();
 choices[66][0] = "CO.PER.";
 choices[66][1] = "COMPER.";
 choices[66][2] = "CO.RE.PER.";
 choices[66][3] = "CO.PE.RRE.";
 answers[66] = choices[66][2];
 units[66] = "5";
 comments[66] = "Id Pregunta: 338. UNION EUROPEA";


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[67]= "68)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[67]= new Array();
 choices[67][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[67][1] = "El Gobierno.";
 choices[67][2] = "El Presidente del Gobierno.";
 choices[67][3] = "El Consejo de Ministros.";
 answers[67] = choices[67][1];
 units[67] = "10";
 comments[67] = "Id Pregunta: 488. PRESUPUESTOS GENERALES";


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[68]= "69)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[68]= new Array();
 choices[68][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[68][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[68][2] = "a y b son correctas";
 choices[68][3] = "a y b son incorrectas";
 answers[68] = choices[68][0];
 units[68] = "7";
 comments[68] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[69]= "70)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[69]= new Array();
 choices[69][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[69][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[69][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[69][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[69] = choices[69][0];
 units[69] = "1";
 comments[69] = "Id Pregunta: 256. CONSTITUCION1978";


//  Id pregunta: 501 Año de creación de pregunta: 2016
 questions[70]= "71)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[70]= new Array();
 choices[70][0] = "Las sociedades mercantiles estatales.";
 choices[70][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[70][2] = "Las respuestas a) y b) son correctas.";
 choices[70][3] = "Las respuestas a) y b) no son correctas.";
 answers[70] = choices[70][2];
 units[70] = "10";
 comments[70] = "Id Pregunta: 501. PRESUPUESTOS GENERALES";


//  Id pregunta: 98 Año de creación de pregunta: 2016
 questions[71]= "72)  La tecnolog&iacute;a de software que permite ejecutar al mismo tiempo varios sistemas operativos y aplicaciones en el mismo servidor se denomina:";
 choices[71]= new Array();
 choices[71][0] = "Clustering";
 choices[71][1] = "Deduplicaci&oacute;n";
 choices[71][2] = "Virtualizaci&oacute;n";
 choices[71][3] = "Contenerizaci&oacute;n";
 answers[71] = choices[71][2];
 units[71] = "124";
 comments[71] = "Id Pregunta: 98. AGE A1 2015";


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[72]= "73)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[72]= new Array();
 choices[72][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[72][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[72][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[72][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[72] = choices[72][0];
 units[72] = "60";
 comments[72] = "Id Pregunta: 649. Junta de Extremadura A1 2015";


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[73]= new Array();
 choices[73][0] = "La Comisi&oacute;n Permanente.";
 choices[73][1] = "El Presidente.";
 choices[73][2] = "El Pleno.";
 choices[73][3] = "El Vicepresidente.";
 answers[73] = choices[73][3];
 units[73] = "1";
 comments[73] = "Id Pregunta: 261. CONSTITUCION1978";


//  Id pregunta: 714 Año de creación de pregunta: 2016
 questions[74]= "75)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[74]= new Array();
 choices[74][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[74][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[74][2] = "Solamente soporta herramientas de control de versiones como CVS, Git y Clearcase.";
 choices[74][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[74] = choices[74][1];
 units[74] = "92";
 comments[74] = "Id Pregunta: 714. INTEGRACION CONTINUA";


