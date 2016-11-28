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

//  Id pregunta: 150 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[0]= new Array();
 choices[0][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[0][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[0][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[0][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[0] = choices[0][2];
 units[0] = "7";
 comments[0] = "Id Pregunta: 150. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[1]= new Array();
 choices[1][0] = "Anual";
 choices[1][1] = "Mensual";
 choices[1][2] = "Semestral";
 choices[1][3] = "Trimestral";
 answers[1] = choices[1][3];
 units[1] = "15";
 comments[1] = "Id Pregunta: 119. ";


//  Id pregunta: 16 Año de creación de pregunta: 2016
 questions[2]= "3)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[2][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[2][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[2][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[2] = choices[2][3];
 units[2] = "19";
 comments[2] = "Id Pregunta: 16. AGE A1 2015";


//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[3]= "4)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[3]= new Array();
 choices[3][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[3][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[3][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[3][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[3] = choices[3][2];
 units[3] = "19";
 comments[3] = "Id Pregunta: 170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[4]= "5)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[4]= new Array();
 choices[4][0] = "El 23 de julio de 1952.";
 choices[4][1] = "El 18 de abril de 1951.";
 choices[4][2] = "El 16 de abril de 1948.";
 choices[4][3] = "d)Ninguna de las respuestas son correctas.";
 answers[4] = choices[4][0];
 units[4] = "5";
 comments[4] = "Id Pregunta: 349. UNION EUROPEA";


//  Id pregunta: 78 Año de creación de pregunta: 2016
 questions[5]= "6)  En relaci&oacute;n con la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, se&ntilde;ale la respuesta correcta:";
 choices[5]= new Array();
 choices[5][0] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, el interesado debe instar su rectificaci&oacute;n, sin que puedan ser cancelados y sustituidos de oficio por los datos rectificados o completados.";
 choices[5][1] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, ser&aacute;n cancelados y sustituidos de oficio por los datos rectificados o completados, sin perjuicio del derecho de rectificaci&oacute;n y cancelaci&oacute;n del afectado.";
 choices[5][2] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 15 d&iacute;as.";
 choices[5][3] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 1 mes.";
 answers[5] = choices[5][1];
 units[5] = "35";
 comments[5] = "Id Pregunta: 78. AGE A1 2015";


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[6]= "7)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[6]= new Array();
 choices[6][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[6][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[6][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[6][3] = "ninguna es correcta";
 answers[6] = choices[6][2];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 819. Ley 40/2015";


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[7]= "8)  En el lenguaje de modelado UML :";
 choices[7]= new Array();
 choices[7][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[7][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[7][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[7][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[7] = choices[7][2];
 units[7] = "89";
 comments[7] = "Id Pregunta: 3. AGE A1 2015";


//  Id pregunta: 562 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[8]= new Array();
 choices[8][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[8][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[8][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[8][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[8] = choices[8][1];
 units[8] = "19";
 comments[8] = "Id Pregunta: 562. Agenda Digital";


//  Id pregunta: 272 Año de creación de pregunta: 2016
 questions[9]= "10)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[9]= new Array();
 choices[9][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[9][1] = "Anteriormente se denominaba Sonar.";
 choices[9][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[9][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[9] = choices[9][2];
 units[9] = "92";
 comments[9] = "Id Pregunta: 272. INTEGRACION CONTINUA";


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[10]= "11)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[10]= new Array();
 choices[10][0] = "61";
 choices[10][1] = "53";
 choices[10][2] = "65";
 choices[10][3] = "67";
 answers[10] = choices[10][1];
 units[10] = "1";
 comments[10] = "Id Pregunta: 248. CONSTITUCION1978";


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[11]= "12)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[11]= new Array();
 choices[11][0] = "El Rey.";
 choices[11][1] = "El Jefe del Estado.";
 choices[11][2] = "El Gobierno.";
 choices[11][3] = "El Presidente del Gobierno.";
 answers[11] = choices[11][2];
 units[11] = "1";
 comments[11] = "Id Pregunta: 208. CONSTITUCION1978";


//  Id pregunta: 22 Año de creación de pregunta: 2016
 questions[12]= "13)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[12]= new Array();
 choices[12][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[12][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[12][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[12][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[12] = choices[12][1];
 units[12] = "26";
 comments[12] = "Id Pregunta: 22. AGE A1 2015";


//  Id pregunta: 719 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;A trav&eacute;s de qu&eacute; empresa surgen las metodolog&iacute;as lean?";
 choices[13]= new Array();
 choices[13][0] = "Ford";
 choices[13][1] = "Google";
 choices[13][2] = "Toyota";
 choices[13][3] = "Facebook";
 answers[13] = choices[13][2];
 units[13] = "34";
 comments[13] = "Id Pregunta: 719. Metodologias Lean";


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[14]= new Array();
 choices[14][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[14][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[14][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[14][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[14] = choices[14][0];
 units[14] = "1";
 comments[14] = "Id Pregunta: 199. CONSTITUCION1978";


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[15]= "16)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[15]= new Array();
 choices[15][0] = "De los interesados en el procedimiento";
 choices[15][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[15][2] = "Disposiciones generales";
 choices[15][3] = "De los actos administrativos";
 answers[15] = choices[15][2];
 units[15] = "7";
 comments[15] = "Id Pregunta: 522. LEY 39/2015";


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[16]= "17)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[16]= new Array();
 choices[16][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[16][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[16][2] = "a y b son correctas";
 choices[16][3] = "a y b son incorrectas";
 answers[16] = choices[16][2];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 783. Ley 40/2015";


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[17]= new Array();
 choices[17][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[17][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[17][2] = "Iniciativa europea de libre flujo de datos.";
 choices[17][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[17] = choices[17][2];
 units[17] = "5";
 comments[17] = "Id Pregunta: 286. UNION EUROPEA";


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[18]= new Array();
 choices[18][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[18][1] = "De nivel alto.";
 choices[18][2] = "De nivel medio y nivel alto.";
 choices[18][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[18] = choices[18][3];
 units[18] = "35";
 comments[18] = "Id Pregunta: 632. Junta de Extremadura A1 2015";


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[19]= new Array();
 choices[19][0] = "732";
 choices[19][1] = "626";
 choices[19][2] = "786";
 choices[19][3] = "360";
 answers[19] = choices[19][2];
 units[19] = "5";
 comments[19] = "Id Pregunta: 337. UNION EUROPEA";


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[20]= "21)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[20]= new Array();
 choices[20][0] = "Subgrupo A1";
 choices[20][1] = "Subgrupo A2";
 choices[20][2] = "Subgrupo B";
 choices[20][3] = "Subgrupo C1";
 answers[20] = choices[20][0];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 806. Ley 40/2015";


//  Id pregunta: 273 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[21]= new Array();
 choices[21][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[21][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[21][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[21][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[21] = choices[21][1];
 units[21] = "92";
 comments[21] = "Id Pregunta: 273. INTEGRACION CONTINUA";


//  Id pregunta: 323 Año de creación de pregunta: 2016
 questions[22]= "23)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[22]= new Array();
 choices[22][0] = "Tres a&ntilde;os.";
 choices[22][1] = "Cuatro a&ntilde;os.";
 choices[22][2] = "Cinco a&ntilde;os.";
 choices[22][3] = "Seis a&ntilde;os.";
 answers[22] = choices[22][3];
 units[22] = "5";
 comments[22] = "Id Pregunta: 323. UNION EUROPEA";


//  Id pregunta: 241 Año de creación de pregunta: 2016
 questions[23]= "24)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[23]= new Array();
 choices[23][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[23][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[23][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[23][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[23] = choices[23][0];
 units[23] = "1";
 comments[23] = "Id Pregunta: 241. CONSTITUCION1978";


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[24]= new Array();
 choices[24][0] = "Orientaci&oacute;n a objetos";
 choices[24][1] = "MapReduce";
 choices[24][2] = "Pipeline filtering";
 choices[24][3] = "Programaci&oacute;n funcional";
 answers[24] = choices[24][1];
 units[24] = "73";
 comments[24] = "Id Pregunta: 661. ";


//  Id pregunta: 539 Año de creación de pregunta: 2016
 questions[25]= "26)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[25]= new Array();
 choices[25][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[25][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[25][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[25][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[25] = choices[25][1];
 units[25] = "7";
 comments[25] = "Id Pregunta: 539. LEY 39/2015";


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[26]= "27)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[26]= new Array();
 choices[26][0] = "Estrasburgo.";
 choices[26][1] = "Bruselas.";
 choices[26][2] = "Luxemburgo.";
 choices[26][3] = "Holanda.";
 answers[26] = choices[26][2];
 units[26] = "5";
 comments[26] = "Id Pregunta: 295. UNION EUROPEA";


//  Id pregunta: 699 Año de creación de pregunta: 2016
 questions[27]= "28)  Cu&aacute;l de las siguientes afirmaciones relativas a Apache Jenkins es falsa";
 choices[27]= new Array();
 choices[27][0] = "Est&aacute; desarrollado en Java.";
 choices[27][1] = "Fue un proyecto escindido de Hudson tras una disputa con Oracle.";
 choices[27][2] = "Se considera software libre bajo la licencia EUPL.";
 choices[27][3] = "Todas las afirmaciones son correctas.";
 answers[27] = choices[27][2];
 units[27] = "92";
 comments[27] = "Id Pregunta: 699. INTEGRACION CONTINUA";


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[28]= "29)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[28]= new Array();
 choices[28][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[28][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[28][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[28][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[28] = choices[28][1];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 838. Ley 40/2015";


//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[29]= new Array();
 choices[29][0] = "Un diputado y un senador, cada una de ellas";
 choices[29][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[29][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[29][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[29] = choices[29][2];
 units[29] = "1";
 comments[29] = "Id Pregunta: 192. CONSTITUCION1978";


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[30]= new Array();
 choices[30][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[30][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[30][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[30][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[30] = choices[30][1];
 units[30] = "18, 20";
 comments[30] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[31]= "32)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[31]= new Array();
 choices[31][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[31][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[31][2] = "Se basan en sistemas distribuidos";
 choices[31][3] = "Se basan en el modelo de datos relacional";
 answers[31] = choices[31][2];
 units[31] = "73";
 comments[31] = "Id Pregunta: 102. ";


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[32]= "33)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[32]= new Array();
 choices[32][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[32][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[32][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[32][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[32] = choices[32][1];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 825. Ley 40/2015";


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[33]= new Array();
 choices[33][0] = "La Comisi&oacute;n Permanente.";
 choices[33][1] = "El Presidente.";
 choices[33][2] = "El Pleno.";
 choices[33][3] = "El Vicepresidente.";
 answers[33] = choices[33][3];
 units[33] = "1";
 comments[33] = "Id Pregunta: 261. CONSTITUCION1978";


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[34]= "35)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[34]= new Array();
 choices[34][0] = "Las sociedades mercantiles estatales.";
 choices[34][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[34][2] = "Las respuestas a) y b) son correctas.";
 choices[34][3] = "Las respuestas a) y b) no son correctas.";
 answers[34] = choices[34][2];
 units[34] = "10";
 comments[34] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[35]= "36)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[35]= new Array();
 choices[35][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[35][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[35][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[35][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[35] = choices[35][3];
 units[35] = "10";
 comments[35] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[36]= "37)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[36]= new Array();
 choices[36][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[36][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[36][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[36][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[36] = choices[36][3];
 units[36] = "1";
 comments[36] = "Id Pregunta: 227. CONSTITUCION1978";


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[37]= "38)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[37]= new Array();
 choices[37][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[37][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[37][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[37][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[37] = choices[37][1];
 units[37] = "28";
 comments[37] = "Id Pregunta: 734. Estrategia TIC";


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[38]= "39)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[38]= new Array();
 choices[38][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[38][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[38][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[38][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[38] = choices[38][2];
 units[38] = "12";
 comments[38] = "Id Pregunta: 134. Leyes modelo econ&oacute;mico";


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[39]= new Array();
 choices[39][0] = "verbalmente";
 choices[39][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[39][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[39][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[39] = choices[39][2];
 units[39] = "7";
 comments[39] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[40]= "41)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[40]= new Array();
 choices[40][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[40][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[40][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[40][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[40] = choices[40][2];
 units[40] = "1";
 comments[40] = "Id Pregunta: 184. CONSTITUCION1978";


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[41]= "42)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[41]= new Array();
 choices[41][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[41][1] = "Clasificaci&oacute;n por cuenta.";
 choices[41][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[41][3] = "Clasificaci&oacute;n por intercambio.";
 answers[41] = choices[41][3];
 units[41] = "56";
 comments[41] = "Id Pregunta: 611. Junta de Extremadura A1 2015";


//  Id pregunta: 679 Año de creación de pregunta: 2016
 questions[42]= "43)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[42]= new Array();
 choices[42][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[42][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[42][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[42][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[42] = choices[42][2];
 units[42] = "14";
 comments[42] = "Id Pregunta: 679. Dependencia";


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[43]= "44)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[43]= new Array();
 choices[43][0] = "Discriminaci&oacute;n indirecta.";
 choices[43][1] = "Discriminaci&oacute;n directa.";
 choices[43][2] = "Discriminaci&oacute;n por maternidad.";
 choices[43][3] = "Discriminaci&oacute;n abusiva.";
 answers[43] = choices[43][1];
 units[43] = "14";
 comments[43] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";


//  Id pregunta: 854 Año de creación de pregunta: 2016
 questions[44]= "45)  Si disponemos de 6 discos SAS de 1TB netos configurados en RAID5, &iquest;de qu&eacute; capacidad neta se dispone en RAID5 en el sistema de almacenamiento?";
 choices[44]= new Array();
 choices[44][0] = "6 TB.";
 choices[44][1] = "5 TB.";
 choices[44][2] = "7 TB.";
 choices[44][3] = "3 TB.";
 answers[44] = choices[44][1];
 units[44] = "53";
 comments[44] = "Id Pregunta: 854. Xunta de Galicia 2015";


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[45]= new Array();
 choices[45][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[45][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[45][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[45][3] = "Todas las respuestas son correctas.";
 answers[45] = choices[45][2];
 units[45] = "42";
 comments[45] = "Id Pregunta: 618. Junta de Extremadura A1 2015";


//  Id pregunta: 479 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[46]= new Array();
 choices[46][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[46][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[46][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[46][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[46] = choices[46][2];
 units[46] = "10";
 comments[46] = "Id Pregunta: 479. PRESUPUESTOS GENERALES";


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[47]= "48)  La Administraci&oacute;n General del Estado se organiza:";
 choices[47]= new Array();
 choices[47][0] = "en Ministerios";
 choices[47][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[47][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[47][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[47] = choices[47][1];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 802. Ley 40/2015";


//  Id pregunta: 333 Año de creación de pregunta: 2016
 questions[48]= "49)  Est&aacute;n legitimados para interponer el recurso de carencia del art. 175 TCE:";
 choices[48]= new Array();
 choices[48][0] = "Las instituciones comunitarias.";
 choices[48][1] = "Los Estados miembros y las instituciones comunitarias.";
 choices[48][2] = "Los Estados miembros.";
 choices[48][3] = "Los nacionales de los Estados miembros.";
 answers[48] = choices[48][1];
 units[48] = "5";
 comments[48] = "Id Pregunta: 333. UNION EUROPEA";


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[49]= "50)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[49]= new Array();
 choices[49][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[49][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[49][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[49][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[49] = choices[49][1];
 units[49] = "14";
 comments[49] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[50]= "51)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[50]= new Array();
 choices[50][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[50][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[50][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[50][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[50] = choices[50][3];
 units[50] = "57";
 comments[50] = "Id Pregunta: 640. Junta de Extremadura A1 2015";


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[51]= "52)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[51]= new Array();
 choices[51][0] = "El presidente de las Cortes Generales.";
 choices[51][1] = "El Presidente del Gobierno.";
 choices[51][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[51][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[51] = choices[51][3];
 units[51] = "10";
 comments[51] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";


//  Id pregunta: 476 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[52]= new Array();
 choices[52][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[52][1] = "Todas las respuestas son correctas.";
 choices[52][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[52][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[52] = choices[52][1];
 units[52] = "10";
 comments[52] = "Id Pregunta: 476. PRESUPUESTOS GENERALES";


//  Id pregunta: 602 Año de creación de pregunta: 2016
 questions[53]= "54)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[53]= new Array();
 choices[53][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[53][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[53][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[53][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[53] = choices[53][2];
 units[53] = "108";
 comments[53] = "Id Pregunta: 602. Junta de Extremadura A1 2015";


//  Id pregunta: 537 Año de creación de pregunta: 2016
 questions[54]= "55)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[54]= new Array();
 choices[54][0] = "la Administraci&oacute;n General del Estado";
 choices[54][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[54][2] = "las Entidades Locales";
 choices[54][3] = "todas son correctas";
 answers[54] = choices[54][3];
 units[54] = "7";
 comments[54] = "Id Pregunta: 537. LEY 39/2015";


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[55]= "56)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[55]= new Array();
 choices[55][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[55][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[55][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[55][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[55] = choices[55][1];
 units[55] = "74";
 comments[55] = "Id Pregunta: 45. AGE A1 2015";


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[56]= "57)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[56]= new Array();
 choices[56][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[56][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[56][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[56][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[56] = choices[56][2];
 units[56] = "12";
 comments[56] = "Id Pregunta: 136. Leyes modelo econ&oacute;mico";


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[57]= "58)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[57]= new Array();
 choices[57][0] = "De un mes si el acto fuera presunto";
 choices[57][1] = "De un mes si el acto fuera expreso";
 choices[57][2] = "De un mes en cualquier caso";
 choices[57][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[57] = choices[57][1];
 units[57] = "8";
 comments[57] = "Id Pregunta: 142. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 703 Año de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ale la que NO corresponde a una herramienta de automatizaci&oacute;n de pruebas:";
 choices[58]= new Array();
 choices[58][0] = "Selenium";
 choices[58][1] = "JUnit";
 choices[58][2] = "Jenkins";
 choices[58][3] = "JMeter";
 answers[58] = choices[58][2];
 units[58] = "92";
 comments[58] = "Id Pregunta: 703. INTEGRACION CONTINUA";


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[59]= "60)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[59]= new Array();
 choices[59][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[59][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[59][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[59][3] = "cualquiera que sea el estado del procedimiento";
 answers[59] = choices[59][3];
 units[59] = "7";
 comments[59] = "Id Pregunta: 527. LEY 39/2015";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[60]= "61)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[60]= new Array();
 choices[60][0] = "Conformidad";
 choices[60][1] = "Responsabilidad";
 choices[60][2] = "Adquisici&oacute;n";
 choices[60][3] = "Desempe&ntilde;o";
 answers[60] = choices[60][0];
 units[60] = "26";
 comments[60] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 626 Año de creación de pregunta: 2016
 questions[61]= "62)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[61]= new Array();
 choices[61][0] = "En sentencias switch para alterar el control de flujo.";
 choices[61][1] = "Para manejar excepciones.";
 choices[61][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[61][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[61] = choices[61][1];
 units[61] = "64";
 comments[61] = "Id Pregunta: 626. Junta de Extremadura A1 2015";


//  Id pregunta: 113 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[62]= new Array();
 choices[62][0] = "La Seguridad Social";
 choices[62][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[62][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[62][3] = "El Banco de Espa&ntilde;a";
 answers[62] = choices[62][3];
 units[62] = "15";
 comments[62] = "Id Pregunta: 113. ";


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[63]= "64)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[63]= new Array();
 choices[63][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[63][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[63][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[63][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[63] = choices[63][1];
 units[63] = "43";
 comments[63] = "Id Pregunta: 441. SERVICIOS COMUNES";


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[64]= "65)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[64]= new Array();
 choices[64][0] = "Son vinculantes solamente.";
 choices[64][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[64][2] = "Son preceptivos y vinculantes.";
 choices[64][3] = "Son preceptivos y no vinculantes.";
 answers[64] = choices[64][1];
 units[64] = "5";
 comments[64] = "Id Pregunta: 355. UNION EUROPEA";


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[65]= "66)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[65]= new Array();
 choices[65][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[65][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[65][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[65][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[65] = choices[65][0];
 units[65] = "60";
 comments[65] = "Id Pregunta: 651. Junta de Extremadura A1 2015";


//  Id pregunta: 840 Año de creación de pregunta: 2016
 questions[66]= "67)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[66]= new Array();
 choices[66][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[66][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[66][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[66][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[66] = choices[66][1];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 840. Ley 40/2015";


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[67]= "68)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[67]= new Array();
 choices[67][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[67][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[67][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[67][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[67] = choices[67][3];
 units[67] = "86";
 comments[67] = "Id Pregunta: 42. AGE A1 2015";


//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[68]= "69)  Se&ntilde;ale el que corresponde a un principio de integraci&oacute;n continua:";
 choices[68]= new Array();
 choices[68][0] = "Migraci&oacute;n manual y controlada a cada entorno de desarrollo";
 choices[68][1] = "Mantener un repositorio de c&oacute;digo.";
 choices[68][2] = "Reutilizaci&oacute;n de interfaces de usuario.";
 choices[68][3] = "Todos corresponden a principios de integraci&oacute;n continua.";
 answers[68] = choices[68][1];
 units[68] = "92";
 comments[68] = "Id Pregunta: 698. INTEGRACION CONTINUA";


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[69]= "70)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[69]= new Array();
 choices[69][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[69][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[69][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[69][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[69] = choices[69][0];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 818. Ley 40/2015";


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[70]= "71)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[70]= new Array();
 choices[70][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[70][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[70][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[70][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[70] = choices[70][2];
 units[70] = "7";
 comments[70] = "Id Pregunta: 512. LEY 39/2015";


//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[71]= "72)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[71]= new Array();
 choices[71][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[71][1] = "La CETIC";
 choices[71][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[71][3] = "El MHFP";
 answers[71] = choices[71][0];
 units[71] = "19";
 comments[71] = "Id Pregunta: 595. Estrategia TIC";


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[72]= new Array();
 choices[72][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[72][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[72][2] = "Servicio de seguridad gestionada";
 choices[72][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[72] = choices[72][1];
 units[72] = "26";
 comments[72] = "Id Pregunta: 58. AGE A1 2015";


//  Id pregunta: 314 Año de creación de pregunta: 2016
 questions[73]= "74)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[73]= new Array();
 choices[73][0] = "Al Consejo Europeo.";
 choices[73][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[73][2] = "A la Comisi&oacute;n Europea.";
 choices[73][3] = "Al Parlamento Europeo.";
 answers[73] = choices[73][2];
 units[73] = "5";
 comments[73] = "Id Pregunta: 314. UNION EUROPEA";


//  Id pregunta: 681 Año de creación de pregunta: 2016
 questions[74]= "75)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[74]= new Array();
 choices[74][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[74][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[74][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[74][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[74] = choices[74][1];
 units[74] = "14";
 comments[74] = "Id Pregunta: 681. Pensiones";


