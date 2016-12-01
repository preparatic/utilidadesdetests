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

//  Id pregunta: 755 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qui&eacute;n realiza el seguimiento peri&oacute;dico del cumplimiento de los objetivos de la Agenda Digital para Espa&ntilde;a?";
 choices[0]= new Array();
 choices[0][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital (SGAD)";
 choices[0][1] = "La Asociaci&oacute;n Espa&ntilde;ola de Normalizaci&oacute;n y Certificaci&oacute;n (AENOR)";
 choices[0][2] = "El Observatorio Nacional de Telecomunicaciones y Sociedad de la Informaci&oacute;n (ONTSI)";
 choices[0][3] = "El Observatorio de Administraci&oacute;n Electr&oacute;nica (OBSAE)";
 answers[0] = choices[0][2];
 units[0] = "19";
 comments[0] = "Id Pregunta: 755. Agenda Digital para Espa&ntilde;a";
 preguntaids[0] = 755


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
 preguntaids[1] = 119


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[2]= new Array();
 choices[2][0] = "Cinco.";
 choices[2][1] = "Dos.";
 choices[2][2] = "Cuatro.";
 choices[2][3] = "Siete.";
 answers[2] = choices[2][0];
 units[2] = "1";
 comments[2] = "Id Pregunta: 213. CONSTITUCION1978";
 preguntaids[2] = 213


//  Id pregunta: 653 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Qu&eacute; propiedades ofrecen las conexiones VPN que usan protocolos como PPTP, L2TP/IPsec y SSTP?";
 choices[3]= new Array();
 choices[3][0] = "Encapsulaci&oacute;n y autenticaci&oacute;n.";
 choices[3][1] = "Encapsulaci&oacute;n y cifrado de datos.";
 choices[3][2] = "Autenticaci&oacute;n y cifrado de datos.";
 choices[3][3] = "Encapsulaci&oacute;n, autenticaci&oacute;n y cifrado de datos.";
 answers[3] = choices[3][3];
 units[3] = "120";
 comments[3] = "Id Pregunta: 653. Junta de Extremadura A1 2015";
 preguntaids[3] = 653


//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[4]= "5)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[4]= new Array();
 choices[4][0] = "Prevenir las conductas discriminatorias.";
 choices[4][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[4][2] = "Todas son correctas.";
 choices[4][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[4] = choices[4][2];
 units[4] = "14";
 comments[4] = "Id Pregunta: 409. POLITICAS DE IGUALDAD";
 preguntaids[4] = 409


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ala la correcta:";
 choices[5]= new Array();
 choices[5][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[5][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[5][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[5][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[5] = choices[5][1];
 units[5] = "7";
 comments[5] = "Id Pregunta: 543. LEY 39/2015";
 preguntaids[5] = 543


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[6]= new Array();
 choices[6][0] = "El Consejo Europeo.";
 choices[6][1] = "El Parlamento Europeo.";
 choices[6][2] = "El Consejo.";
 choices[6][3] = "La Comisi&oacute;n.";
 answers[6] = choices[6][3];
 units[6] = "5";
 comments[6] = "Id Pregunta: 361. UNION EUROPEA";
 preguntaids[6] = 361


//  Id pregunta: 95 Año de creación de pregunta: 2016
 questions[7]= "8)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[7]= new Array();
 choices[7][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[7][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[7][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[7][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[7] = choices[7][3];
 units[7] = "89";
 comments[7] = "Id Pregunta: 95. AGE A1 2015";
 preguntaids[7] = 95


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Qu&eacute; es la integraci&oacute;n continua?";
 choices[8]= new Array();
 choices[8][0] = "Una pr&aacute;ctica recogida en la metodolog&iacute;a M&eacute;trica V3.";
 choices[8][1] = "Un modelo inform&aacute;tico que consiste en hacer integraciones autom&aacute;ticas de un proyecto lo m&aacute;s a menudo posible para as&iacute; poder detectar fallos cuanto antes.";
 choices[8][2] = "Una metodolog&iacute;a &aacute;gil inspirada en XP y FDD encaminada a realizar un desarrollo hol&iacute;stico en todo el proceso de desarrollo de un sistema de informaci&oacute;n.";
 choices[8][3] = "Ninguna de las anteriores.";
 answers[8] = choices[8][1];
 units[8] = "92";
 comments[8] = "Id Pregunta: 701. INTEGRACION CONTINUA";
 preguntaids[8] = 701


//  Id pregunta: 578 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[9]= new Array();
 choices[9][0] = "PostgreSQL";
 choices[9][1] = "Datawarehouse";
 choices[9][2] = "Snowflake";
 choices[9][3] = "CouchDB";
 answers[9] = choices[9][0];
 units[9] = "61";
 comments[9] = "Id Pregunta: 578. Tema 61. TAI 2016.";
 preguntaids[9] = 578


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[10]= "11)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[10]= new Array();
 choices[10][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[10][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[10][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[10][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[10] = choices[10][1];
 units[10] = "5";
 comments[10] = "Id Pregunta: 316. UNION EUROPEA";
 preguntaids[10] = 316


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[11]= "12)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[11]= new Array();
 choices[11][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[11][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[11][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[11][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[11] = choices[11][2];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 775. Ley 40/2015";
 preguntaids[11] = 775


//  Id pregunta: 396 Año de creación de pregunta: 2016
 questions[12]= "13)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[12]= new Array();
 choices[12][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[12][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[12][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[12][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[12] = choices[12][0];
 units[12] = "14";
 comments[12] = "Id Pregunta: 396. POLITICAS DE IGUALDAD";
 preguntaids[12] = 396


//  Id pregunta: 150 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[13]= new Array();
 choices[13][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[13][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[13][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[13][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[13] = choices[13][2];
 units[13] = "7";
 comments[13] = "Id Pregunta: 150. Ley 39/2015, Art&iacute;culo 14";
 preguntaids[13] = 150


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[14]= "15)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[14]= new Array();
 choices[14][0] = "El Delegado del Gobierno.";
 choices[14][1] = "El Subdelegado del Gobierno.";
 choices[14][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[14][3] = "El Gobernador Civil.";
 answers[14] = choices[14][2];
 units[14] = "1";
 comments[14] = "Id Pregunta: 207. CONSTITUCION1978";
 preguntaids[14] = 207


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[15]= "16)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[15]= new Array();
 choices[15][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[15][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[15][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[15][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[15] = choices[15][1];
 units[15] = "7";
 comments[15] = "Id Pregunta: 517. LEY 39/2015";
 preguntaids[15] = 517


//  Id pregunta: 375 Año de creación de pregunta: 2016
 questions[16]= "17)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[16]= new Array();
 choices[16][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[16][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[16][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[16][3] = "Todas las respuestas son correctas.";
 answers[16] = choices[16][3];
 units[16] = "5";
 comments[16] = "Id Pregunta: 375. UNION EUROPEA";
 preguntaids[16] = 375


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[17]= "18)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[17]= new Array();
 choices[17][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[17][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[17][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[17][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[17] = choices[17][2];
 units[17] = "1";
 comments[17] = "Id Pregunta: 177. CONSTITUCION1978";
 preguntaids[17] = 177


//  Id pregunta: 744 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, se entiende por emprendedor:";
 choices[18]= new Array();
 choices[18][0] = "Aquellas personas f&iacute;sicas que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[18][1] = "Aquellas personas independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar una actividad econ&oacute;mica productiva.";
 choices[18][2] = "Aquellas personas, independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[18][3] = "Ninguna de las anteriores";
 answers[18] = choices[18][2];
 units[18] = "23";
 comments[18] = "Id Pregunta: 744. Direcci&oacute;n p&uacute;blica";
 preguntaids[18] = 744


//  Id pregunta: 464 Año de creación de pregunta: 2016
 questions[19]= "20)  De acuerdo con lo establecido en la Ley General Presupuestaria, durante el ejercicio presupuestario no es posible modificar la cuant&iacute;a y/o finalidad de los cr&eacute;ditos contenidos en los presupuestos de gastos mediante:";
 choices[19]= new Array();
 choices[19][0] = "Transferencias de cr&eacute;dito.";
 choices[19][1] = "Incorporaciones de cr&eacute;dito.";
 choices[19][2] = "Imputaciones de cr&eacute;dito.";
 choices[19][3] = "Ampliaciones de cr&eacute;dito.";
 answers[19] = choices[19][2];
 units[19] = "10";
 comments[19] = "Id Pregunta: 464. PRESUPUESTOS GENERALES";
 preguntaids[19] = 464


//  Id pregunta: 245 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[20]= new Array();
 choices[20][0] = "De los derechos y deberes fundamentales.";
 choices[20][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[20][2] = "Derechos y libertades.";
 choices[20][3] = "De la Corona.";
 answers[20] = choices[20][1];
 units[20] = "1";
 comments[20] = "Id Pregunta: 245. CONSTITUCION1978";
 preguntaids[20] = 245


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[21]= "22)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[21]= new Array();
 choices[21][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[21][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[21][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[21][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[21] = choices[21][0];
 units[21] = "1";
 comments[21] = "Id Pregunta: 240. CONSTITUCION1978";
 preguntaids[21] = 240


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[22]= new Array();
 choices[22][0] = "JUnit, Artifactory y SonarQube";
 choices[22][1] = "JUnit, Artifactory y Selenium";
 choices[22][2] = "JUnit, SonarQube y Selenium";
 choices[22][3] = "ArtiFactory, SonarQube y Selenium";
 answers[22] = choices[22][2];
 units[22] = "92";
 comments[22] = "Id Pregunta: 91. AGE A1 2015";
 preguntaids[22] = 91


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[23]= "24)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[23]= new Array();
 choices[23][0] = "2.400 euros";
 choices[23][1] = "4.000 euros";
 choices[23][2] = "3.200 euros";
 choices[23][3] = "1.600 euros";
 answers[23] = choices[23][1];
 units[23] = "37";
 comments[23] = "Id Pregunta: 89. AGE A1 2015";
 preguntaids[23] = 89


//  Id pregunta: 216 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[24]= new Array();
 choices[24][0] = "El Presidente del Gobierno.";
 choices[24][1] = "El Consejo de Ministros.";
 choices[24][2] = "40 Diputados.";
 choices[24][3] = "El Ministerio Fiscal.";
 answers[24] = choices[24][0];
 units[24] = "1";
 comments[24] = "Id Pregunta: 216. CONSTITUCION1978";
 preguntaids[24] = 216


//  Id pregunta: 648 Año de creación de pregunta: 2016
 questions[25]= "26)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[25]= new Array();
 choices[25][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[25][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[25][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[25][3] = "Todas las respuestas son correctas.";
 answers[25] = choices[25][0];
 units[25] = "101";
 comments[25] = "Id Pregunta: 648. Junta de Extremadura A1 2015";
 preguntaids[25] = 648


//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[26]= "27)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[26]= new Array();
 choices[26][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[26][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[26][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[26][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[26] = choices[26][2];
 units[26] = "43";
 comments[26] = "Id Pregunta: 436. SERVICIOS COMUNES";
 preguntaids[26] = 436


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[27]= "28)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[27]= new Array();
 choices[27][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[27][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[27][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[27][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[27] = choices[27][0];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 833. Ley 40/2015";
 preguntaids[27] = 833


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[28]= "29)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[28]= new Array();
 choices[28][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[28][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[28][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[28][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[28] = choices[28][0];
 units[28] = "62";
 comments[28] = "Id Pregunta: 12. AGE A1 2015";
 preguntaids[28] = 12


//  Id pregunta: 634 Año de creación de pregunta: 2016
 questions[29]= "30)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[29]= new Array();
 choices[29][0] = "Monol&iacute;tico.";
 choices[29][1] = "Estratificado.";
 choices[29][2] = "Cliente/servidor.";
 choices[29][3] = "Orientado a objetos.";
 answers[29] = choices[29][3];
 units[29] = "56";
 comments[29] = "Id Pregunta: 634. Junta de Extremadura A1 2015";
 preguntaids[29] = 634


//  Id pregunta: 739 Año de creación de pregunta: 2016
 questions[30]= "31)  En el Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE, las administraciones p&uacute;blicas y las instituciones p&uacute;blicas de la Uni&oacute;n Europea deben ser abiertas, eficaces e integradoras en el a&ntilde;o:";
 choices[30]= new Array();
 choices[30][0] = "2025";
 choices[30][1] = "2023";
 choices[30][2] = "2030";
 choices[30][3] = "2020";
 answers[30] = choices[30][3];
 units[30] = "28";
 comments[30] = "Id Pregunta: 739. Estrategia TIC";
 preguntaids[30] = 739


//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[31]= "32)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[31]= new Array();
 choices[31][0] = "Seis a&ntilde;os.";
 choices[31][1] = "Cinco a&ntilde;os.";
 choices[31][2] = "Cuatro a&ntilde;os.";
 choices[31][3] = "Ocho a&ntilde;os.";
 answers[31] = choices[31][1];
 units[31] = "5";
 comments[31] = "Id Pregunta: 307. UNION EUROPEA";
 preguntaids[31] = 307


//  Id pregunta: 236 Año de creación de pregunta: 2016
 questions[32]= "33)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[32]= new Array();
 choices[32][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[32][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[32][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[32][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[32] = choices[32][3];
 units[32] = "1";
 comments[32] = "Id Pregunta: 236. CONSTITUCION1978";
 preguntaids[32] = 236


//  Id pregunta: 379 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[33]= new Array();
 choices[33][0] = "Anual.";
 choices[33][1] = "Semestral.";
 choices[33][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[33][3] = "Bienal.";
 answers[33] = choices[33][2];
 units[33] = "14";
 comments[33] = "Id Pregunta: 379. POLITICAS DE IGUALDAD";
 preguntaids[33] = 379


//  Id pregunta: 364 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[34]= new Array();
 choices[34][0] = "El 1 de junio de 1999.";
 choices[34][1] = "El 1 de mayo de 1999.";
 choices[34][2] = "El 1 de abril de 1999.";
 choices[34][3] = "El 1 de marzo de 1999.";
 answers[34] = choices[34][1];
 units[34] = "5";
 comments[34] = "Id Pregunta: 364. UNION EUROPEA";
 preguntaids[34] = 364


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[35]= "36)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[35]= new Array();
 choices[35][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[35][1] = "garantizar la conservaci&oacute;n del documento";
 choices[35][2] = "garantizar la autenticidad del documento";
 choices[35][3] = "garantizar la integridad del documento";
 answers[35] = choices[35][0];
 units[35] = "7";
 comments[35] = "Id Pregunta: 152. Ley 39/2015, Art&iacute;culo 17";
 preguntaids[35] = 152


//  Id pregunta: 318 Año de creación de pregunta: 2016
 questions[36]= "37)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[36]= new Array();
 choices[36][0] = "Consejos y Servicios.";
 choices[36][1] = "Servicios permanentes y no permanentes.";
 choices[36][2] = "Direcciones Generales.";
 choices[36][3] = "Direcciones ministeriales.";
 answers[36] = choices[36][2];
 units[36] = "5";
 comments[36] = "Id Pregunta: 318. UNION EUROPEA";
 preguntaids[36] = 318


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[37]= "38)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[37]= new Array();
 choices[37][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[37][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[37][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[37][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[37] = choices[37][1];
 units[37] = "58";
 comments[37] = "Id Pregunta: 643. Junta de Extremadura A1 2015";
 preguntaids[37] = 643


//  Id pregunta: 229 Año de creación de pregunta: 2016
 questions[38]= "39)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[38]= new Array();
 choices[38][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[38][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[38][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[38][3] = "A las Diputaciones y a las Comarcas.";
 answers[38] = choices[38][3];
 units[38] = "1";
 comments[38] = "Id Pregunta: 229. CONSTITUCION1978";
 preguntaids[38] = 229


//  Id pregunta: 749 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;les de los siguientes principios de inspiraci&oacute;n en la funci&oacute;n gerencial NO incorpora la Ley 40/2015?";
 choices[39]= new Array();
 choices[39][0] = "Buena fe, confianza leg&iacute;tima y lealtad institucional.";
 choices[39][1] = "Calidad de los servicios p&uacute;blicos";
 choices[39][2] = "Responsabilidad por la gesti&oacute;n p&uacute;blica.";
 choices[39][3] = "Servicio efectivo a los ciudadanos";
 answers[39] = choices[39][1];
 units[39] = "18";
 comments[39] = "Id Pregunta: 749. Direcci&oacute;n p&uacute;blica";
 preguntaids[39] = 749


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[40]= "41)  Son bases de datos NoSQL:";
 choices[40]= new Array();
 choices[40][0] = "MongoDB y Maria DB";
 choices[40][1] = "HBase y Dynamo";
 choices[40][2] = "MariaDB, Cassandra y BigTable";
 choices[40][3] = "La A) y la C)";
 answers[40] = choices[40][1];
 units[40] = "73";
 comments[40] = "Id Pregunta: 104. ";
 preguntaids[40] = 104


//  Id pregunta: 646 Año de creación de pregunta: 2016
 questions[41]= "42)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[41]= new Array();
 choices[41][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[41][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[41][2] = "Funcionarios e interinos.";
 choices[41][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[41] = choices[41][3];
 units[41] = "20";
 comments[41] = "Id Pregunta: 646. Junta de Extremadura A1 2015";
 preguntaids[41] = 646


//  Id pregunta: 186 Año de creación de pregunta: 2016
 questions[42]= "43)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[42]= new Array();
 choices[42][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[42][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[42][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[42][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[42] = choices[42][2];
 units[42] = "1";
 comments[42] = "Id Pregunta: 186. CONSTITUCION1978";
 preguntaids[42] = 186


//  Id pregunta: 799 Año de creación de pregunta: 2016
 questions[43]= "44)  Los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[43]= new Array();
 choices[43][0] = "los &oacute;rganos administrativos";
 choices[43][1] = "las entidades dependientes";
 choices[43][2] = "las unidades administrativas";
 choices[43][3] = "los servicios comunes";
 answers[43] = choices[43][2];
 units[43] = "4, 7, 8, 9";
 comments[43] = "Id Pregunta: 799. Ley 40/2015";
 preguntaids[43] = 799


//  Id pregunta: 246 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[44]= new Array();
 choices[44][0] = "Dos Cap&iacute;tulos.";
 choices[44][1] = "Tres Cap&iacute;tulos.";
 choices[44][2] = "Un Cap&iacute;tulo.";
 choices[44][3] = "Cuatro Cap&iacute;tulos.";
 answers[44] = choices[44][1];
 units[44] = "1";
 comments[44] = "Id Pregunta: 246. CONSTITUCION1978";
 preguntaids[44] = 246


//  Id pregunta: 650 Año de creación de pregunta: 2016
 questions[45]= "46)  Los IDS, (Sistemas de Detecci&oacute;n de Intrusos), pueden clasificarse:";
 choices[45]= new Array();
 choices[45][0] = "Solamente en funci&oacute;n de los sistemas que monitorizan.";
 choices[45][1] = "En funci&oacute;n de los sistemas que monitorizan y en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[45][2] = "Solamente en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[45][3] = "Estos sistemas es imposible clasificarlos.";
 answers[45] = choices[45][1];
 units[45] = "119";
 comments[45] = "Id Pregunta: 650. Junta de Extremadura A1 2015";
 preguntaids[45] = 650


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[46]= "47)  Los Directores generales ser&aacute;n nombrados y separados por:";
 choices[46]= new Array();
 choices[46][0] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[46][1] = "Ley de las Cortes Generales, a propuesta del titular del Departamento";
 choices[46][2] = "Ley de las Cortes Generales, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[46][3] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento";
 answers[46] = choices[46][0];
 units[46] = "4, 7, 8, 9";
 comments[46] = "Id Pregunta: 809. Ley 40/2015";
 preguntaids[46] = 809


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[47]= "48)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[47]= new Array();
 choices[47][0] = "&oacute;rganos superiores";
 choices[47][1] = "&oacute;rganos directivos";
 choices[47][2] = "&oacute;rganos superiores y directivos";
 choices[47][3] = "ninguna es correcta";
 answers[47] = choices[47][1];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 796. Ley 40/2015";
 preguntaids[47] = 796


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[48]= "49)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[48]= new Array();
 choices[48][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[48][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[48][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[48][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[48] = choices[48][3];
 units[48] = "7";
 comments[48] = "Id Pregunta: 670. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[48] = 670


//  Id pregunta: 616 Año de creación de pregunta: 2016
 questions[49]= "50)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[49]= new Array();
 choices[49][0] = "192.228.0.0";
 choices[49][1] = "192.228.8.0";
 choices[49][2] = "192.228.16.0";
 choices[49][3] = "192.228.17.0";
 answers[49] = choices[49][2];
 units[49] = "109";
 comments[49] = "Id Pregunta: 616. Junta de Extremadura A1 2015";
 preguntaids[49] = 616


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[50]= "51)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[50]= new Array();
 choices[50][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[50][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[50][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[50][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[50] = choices[50][2];
 units[50] = "7";
 comments[50] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";
 preguntaids[50] = 155


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[51]= "52)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[51]= new Array();
 choices[51][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[51][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[51][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[51][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[51] = choices[51][3];
 units[51] = "44";
 comments[51] = "Id Pregunta: 17. AGE A1 2015";
 preguntaids[51] = 17


//  Id pregunta: 835 Año de creación de pregunta: 2016
 questions[52]= "53)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[52]= new Array();
 choices[52][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[52][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[52][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[52][3] = "Todas son correctas.";
 answers[52] = choices[52][0];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 835. Ley 40/2015";
 preguntaids[52] = 835


//  Id pregunta: 189 Año de creación de pregunta: 2016
 questions[53]= "54)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:";
 choices[53]= new Array();
 choices[53][0] = "Ley Org&aacute;nica.";
 choices[53][1] = "Ley de Bases.";
 choices[53][2] = "Ley ordinaria.";
 choices[53][3] = "Mandato.";
 answers[53] = choices[53][1];
 units[53] = "1";
 comments[53] = "Id Pregunta: 189. CONSTITUCION1978";
 preguntaids[53] = 189


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[54]= "55)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[54]= new Array();
 choices[54][0] = "Subgrupo A1";
 choices[54][1] = "Subgrupo A2";
 choices[54][2] = "Subgrupo B";
 choices[54][3] = "Subgrupo C1";
 answers[54] = choices[54][0];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 806. Ley 40/2015";
 preguntaids[54] = 806


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[55]= "56)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[55]= new Array();
 choices[55][0] = "Presencia equilibrada.";
 choices[55][1] = "Presencia paritaria.";
 choices[55][2] = "Presencia consensuada.";
 choices[55][3] = "presencia horizontal.";
 answers[55] = choices[55][0];
 units[55] = "14";
 comments[55] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";
 preguntaids[55] = 425


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[56]= new Array();
 choices[56][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[56][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[56][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[56][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[56] = choices[56][0];
 units[56] = "5";
 comments[56] = "Id Pregunta: 319. UNION EUROPEA";
 preguntaids[56] = 319


//  Id pregunta: 859 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;ntos fasc&iacute;culos tiene la gu&iacute;a de comunicaci&oacute;n digital para la Administraci&oacute;n General del Estado?";
 choices[57]= new Array();
 choices[57][0] = "12";
 choices[57][1] = "11";
 choices[57][2] = "13";
 choices[57][3] = "10";
 answers[57] = choices[57][0];
 units[57] = "125";
 comments[57] = "Id Pregunta: 859. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[57] = 859


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[58]= "59)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[58]= new Array();
 choices[58][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[58][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[58][2] = "Las respuestas a) b) no son correctas.";
 choices[58][3] = "Las respuestas a) y b) son correctas.";
 answers[58] = choices[58][3];
 units[58] = "10";
 comments[58] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";
 preguntaids[58] = 482


//  Id pregunta: 44 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[59]= new Array();
 choices[59][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[59][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[59][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[59][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[59] = choices[59][1];
 units[59] = "60";
 comments[59] = "Id Pregunta: 44. AGE A1 2015";
 preguntaids[59] = 44


//  Id pregunta: 580 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[60]= new Array();
 choices[60][0] = "Fue elaborada y aprobada por la CETIC";
 choices[60][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[60][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[60][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[60] = choices[60][1];
 units[60] = "19";
 comments[60] = "Id Pregunta: 580. Estrategia TIC";
 preguntaids[60] = 580


//  Id pregunta: 126 Año de creación de pregunta: 2016
 questions[61]= "62)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[61]= new Array();
 choices[61][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[61][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[61][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[61][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[61] = choices[61][3];
 units[61] = "22";
 comments[61] = "Id Pregunta: 126. ";
 preguntaids[61] = 126


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[62]= "63)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[62]= new Array();
 choices[62][0] = "P&uacute;blica.";
 choices[62][1] = "Privada.";
 choices[62][2] = "A y B son correctas.";
 choices[62][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[62] = choices[62][2];
 units[62] = "14";
 comments[62] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";
 preguntaids[62] = 418


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[63]= "64)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[63]= new Array();
 choices[63][0] = "Aplicaci&oacute;n";
 choices[63][1] = "Sesi&oacute;n";
 choices[63][2] = "Presentaci&oacute;n";
 choices[63][3] = "Transporte";
 answers[63] = choices[63][2];
 units[63] = "105";
 comments[63] = "Id Pregunta: 18. AGE A1 2015";
 preguntaids[63] = 18


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[64]= "65)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[64]= new Array();
 choices[64][0] = "Ejecutivo";
 choices[64][1] = "Limitativo";
 choices[64][2] = "Estimativo";
 choices[64][3] = "Progresivo";
 answers[64] = choices[64][2];
 units[64] = "10";
 comments[64] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";
 preguntaids[64] = 448


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[65]= "66)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[65]= new Array();
 choices[65][0] = "El Parlamento Europeo.";
 choices[65][1] = "Todas las respuestas son correctas.";
 choices[65][2] = "La Comisi&oacute;n Europea.";
 choices[65][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[65] = choices[65][1];
 units[65] = "5";
 comments[65] = "Id Pregunta: 353. UNION EUROPEA";
 preguntaids[65] = 353


//  Id pregunta: 282 Año de creación de pregunta: 2016
 questions[66]= "67)  Sobre el Plan Juncker:";
 choices[66]= new Array();
 choices[66][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[66][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[66][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[66][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[66] = choices[66][1];
 units[66] = "5";
 comments[66] = "Id Pregunta: 282. UNION EUROPEA";
 preguntaids[66] = 282


//  Id pregunta: 431 Año de creación de pregunta: 2016
 questions[67]= "68)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[67]= new Array();
 choices[67][0] = "El Instituto de la Mujer.";
 choices[67][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[67][2] = "Ambas son correctas.";
 choices[67][3] = "A y B son incorrectas.";
 answers[67] = choices[67][2];
 units[67] = "14";
 comments[67] = "Id Pregunta: 431. POLITICAS DE IGUALDAD";
 preguntaids[67] = 431


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[68]= "69)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[68]= new Array();
 choices[68][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[68][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[68][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[68][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[68] = choices[68][2];
 units[68] = "83";
 comments[68] = "Id Pregunta: 56. AGE A1 2015";
 preguntaids[68] = 56


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[69]= "70)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[69]= new Array();
 choices[69][0] = "Subsecretario";
 choices[69][1] = "Subdirector general";
 choices[69][2] = "Secretario de Estado";
 choices[69][3] = "ninguna es correcta";
 answers[69] = choices[69][0];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 791. Ley 40/2015";
 preguntaids[69] = 791


//  Id pregunta: 607 Año de creación de pregunta: 2016
 questions[70]= "71)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[70]= new Array();
 choices[70][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[70][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[70][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[70][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[70] = choices[70][2];
 units[70] = "101";
 comments[70] = "Id Pregunta: 607. Junta de Extremadura A1 2015";
 preguntaids[70] = 607


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[71]= "72)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[71]= new Array();
 choices[71][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[71][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[71][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[71][3] = "todas son correctas";
 answers[71] = choices[71][1];
 units[71] = "4, 7, 8, 9";
 comments[71] = "Id Pregunta: 778. Ley 40/2015";
 preguntaids[71] = 778


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[72]= "73)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[72]= new Array();
 choices[72][0] = "Infrastructure as a Service (IaaS)";
 choices[72][1] = "Platform as a Service (PaaS)";
 choices[72][2] = "Software as a Service (SaaS)";
 choices[72][3] = "Application as a Service (AaaS)";
 answers[72] = choices[72][1];
 units[72] = "52";
 comments[72] = "Id Pregunta: 63. AGE A1 2015";
 preguntaids[72] = 63


//  Id pregunta: 663 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[73]= new Array();
 choices[73][0] = "Varios namenodes y varios datanodes por cluster";
 choices[73][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[73][2] = "1 namenode y varios datanodes por cluster";
 choices[73][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[73] = choices[73][2];
 units[73] = "73";
 comments[73] = "Id Pregunta: 663. ";
 preguntaids[73] = 663


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[74]= "75)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[74]= new Array();
 choices[74][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[74][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[74][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[74][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[74] = choices[74][2];
 units[74] = "22";
 comments[74] = "Id Pregunta: 121. ";
 preguntaids[74] = 121


