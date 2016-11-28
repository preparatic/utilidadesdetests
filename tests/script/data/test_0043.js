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

//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[0]= "1)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[0]= new Array();
 choices[0][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[0][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[0][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[0][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[0] = choices[0][3];
 units[0] = "10";
 comments[0] = "Id Pregunta: 510. PRESUPUESTOS GENERALES";


//  Id pregunta: 555 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes iniciativas busca la mejora del acceso de los consumidores y las empresas a los bienes y servicios digitales, como parte de la estrategia para el Mercado &Uacute;nico Digital de la UE?";
 choices[1]= new Array();
 choices[1][0] = "Una paqueter&iacute;a m&aacute;s eficiente y asequible";
 choices[1][1] = "Revisar el marco de comunicaci&oacute;n audiovisual con el fin de adecuarlo al siglo XXI";
 choices[1][2] = "Reforzar la confianza y la seguridad en los servicios digitales, en particular en relaci&oacute;n con el tratamiento de datos personales";
 choices[1][3] = "Todas lo son";
 answers[1] = choices[1][0];
 units[1] = "17";
 comments[1] = "Id Pregunta: 555. Mercado &Uacute;nico Digital";


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[2]= new Array();
 choices[2][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[2][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[2][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[2][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[2] = choices[2][1];
 units[2] = "44";
 comments[2] = "Id Pregunta: 73. AGE A1 2015";


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[3]= "4)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[3]= new Array();
 choices[3][0] = "0";
 choices[3][1] = "1";
 choices[3][2] = "Tantos como peticiones concurrentes tenga.";
 choices[3][3] = "Tantos como le permita la memoria de la JVM.";
 answers[3] = choices[3][1];
 units[3] = "64";
 comments[3] = "Id Pregunta: 15. AGE A1 2015";


//  Id pregunta: 841 Año de creación de pregunta: 2016
 questions[4]= "5)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[4]= new Array();
 choices[4][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[4][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[4][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[4][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[4] = choices[4][0];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 841. Ley 40/2015";


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[5]= new Array();
 choices[5][0] = "Dos Cap&iacute;tulos.";
 choices[5][1] = "Tres Cap&iacute;tulos.";
 choices[5][2] = "Un Cap&iacute;tulo.";
 choices[5][3] = "Cuatro Cap&iacute;tulos.";
 answers[5] = choices[5][1];
 units[5] = "1";
 comments[5] = "Id Pregunta: 222. CONSTITUCION1978";


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[6]= "7)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[6]= new Array();
 choices[6][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[6][1] = "1 de enero de 2015";
 choices[6][2] = "1 de enero de 2016";
 choices[6][3] = "1 de julio de 2016";
 answers[6] = choices[6][3];
 units[6] = "77";
 comments[6] = "Id Pregunta: 691. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 369 Año de creación de pregunta: 2016
 questions[7]= "8)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[7]= new Array();
 choices[7][0] = "Son actos individuales no normativos.";
 choices[7][1] = "Poseen alcance general.";
 choices[7][2] = "Son actos normativos.";
 choices[7][3] = "No son obligatorias.";
 answers[7] = choices[7][0];
 units[7] = "5";
 comments[7] = "Id Pregunta: 369. UNION EUROPEA";


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[8]= new Array();
 choices[8][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[8][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[8][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[8][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[8] = choices[8][0];
 units[8] = "1";
 comments[8] = "Id Pregunta: 199. CONSTITUCION1978";


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[9]= "10)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[9]= new Array();
 choices[9][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[9][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[9][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[9][3] = "Todas son correctas.";
 answers[9] = choices[9][3];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 834. Ley 40/2015";


//  Id pregunta: 201 Año de creación de pregunta: 2016
 questions[10]= "11)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[10]= new Array();
 choices[10][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[10][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[10][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[10][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[10] = choices[10][2];
 units[10] = "1";
 comments[10] = "Id Pregunta: 201. CONSTITUCION1978";


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[11]= "12)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[11]= new Array();
 choices[11][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[11][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[11][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[11][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[11] = choices[11][2];
 units[11] = "7";
 comments[11] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 693 Año de creación de pregunta: 2016
 questions[12]= "13)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los contenidos de los certificados cualificados de firma electr&oacute;nica seg&uacute;n el Reglamento (UE) 910/2014";
 choices[12]= new Array();
 choices[12][0] = "El nombre del firmante o un seudo&#769;nimo";
 choices[12][1] = "Los datos de validacio&#769;n de la firma electro&#769;nica";
 choices[12][2] = "La firma electro&#769;nica cualificada o el sello electro&#769;nico cualificado del prestador de servicios de confianza expedidor";
 choices[12][3] = "La localizacio&#769;n de los servicios que se pueden utilizar para consultar el estado de validez del certificado";
 answers[12] = choices[12][2];
 units[12] = "77";
 comments[12] = "Id Pregunta: 693. Anexo I del Reglamento 910/2014";


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[13]= "14)  Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban:";
 choices[13]= new Array();
 choices[13][0] = "Se definen iteraciones";
 choices[13][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[13][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[13][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[13] = choices[13][1];
 units[13] = "34, 84";
 comments[13] = "Id Pregunta: 732. Metodologias &aacute;giles";


//  Id pregunta: 179 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[14]= new Array();
 choices[14][0] = "Una ley orginaria.";
 choices[14][1] = "Una ley org&aacute;nica.";
 choices[14][2] = "Una ley de bases.";
 choices[14][3] = "Una ley de transferencia.";
 answers[14] = choices[14][1];
 units[14] = "1";
 comments[14] = "Id Pregunta: 179. CONSTITUCION1978";


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[15]= "16)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[15]= new Array();
 choices[15][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[15][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[15][2] = "Se basan en sistemas distribuidos";
 choices[15][3] = "Se basan en el modelo de datos relacional";
 answers[15] = choices[15][2];
 units[15] = "73";
 comments[15] = "Id Pregunta: 102. ";


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[16]= "17)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[16]= new Array();
 choices[16][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[16][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[16][2] = "a y b son correctas";
 choices[16][3] = "a y b son incorrectas";
 answers[16] = choices[16][0];
 units[16] = "7";
 comments[16] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 645 Año de creación de pregunta: 2016
 questions[17]= "18)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[17]= new Array();
 choices[17][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[17][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[17][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[17][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[17] = choices[17][2];
 units[17] = "85";
 comments[17] = "Id Pregunta: 645. Junta de Extremadura A1 2015";


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[18]= new Array();
 choices[18][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[18][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[18][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[18][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[18] = choices[18][1];
 units[18] = "12";
 comments[18] = "Id Pregunta: 133. Leyes modelo econ&oacute;mico";


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[19]= new Array();
 choices[19][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[19][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[19][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[19][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[19] = choices[19][3];
 units[19] = "46";
 comments[19] = "Id Pregunta: 80. AGE A1 2015";


//  Id pregunta: 699 Año de creación de pregunta: 2016
 questions[20]= "21)  Cu&aacute;l de las siguientes afirmaciones relativas a Apache Jenkins es falsa";
 choices[20]= new Array();
 choices[20][0] = "Est&aacute; desarrollado en Java.";
 choices[20][1] = "Fue un proyecto escindido de Hudson tras una disputa con Oracle.";
 choices[20][2] = "Se considera software libre bajo la licencia EUPL.";
 choices[20][3] = "Todas las afirmaciones son correctas.";
 answers[20] = choices[20][2];
 units[20] = "92";
 comments[20] = "Id Pregunta: 699. INTEGRACION CONTINUA";


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


//  Id pregunta: 483 Año de creación de pregunta: 2016
 questions[22]= "23)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[22]= new Array();
 choices[22][0] = "Cuatro millones de euros.";
 choices[22][1] = "Seis millones de euros.";
 choices[22][2] = "Siete millones de euros.";
 choices[22][3] = "Cinco millones de euros.";
 answers[22] = choices[22][1];
 units[22] = "10";
 comments[22] = "Id Pregunta: 483. PRESUPUESTOS GENERALES";


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[23]= "24)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[23]= new Array();
 choices[23][0] = "A nivel de art&iacute;culo.";
 choices[23][1] = "A nivel de cap&iacute;tulo.";
 choices[23][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[23][3] = "A nivel de concepto.";
 answers[23] = choices[23][2];
 units[23] = "10";
 comments[23] = "Id Pregunta: 481. PRESUPUESTOS GENERALES";


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[24]= "25)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[24]= new Array();
 choices[24][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[24][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[24][2] = "Cinco a&ntilde;os.";
 choices[24][3] = "Ninguna es correcta.";
 answers[24] = choices[24][2];
 units[24] = "5";
 comments[24] = "Id Pregunta: 346. UNION EUROPEA";


//  Id pregunta: 388 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[25]= new Array();
 choices[25][0] = "Indirecta.";
 choices[25][1] = "Directa.";
 choices[25][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[25][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[25] = choices[25][1];
 units[25] = "14";
 comments[25] = "Id Pregunta: 388. POLITICAS DE IGUALDAD";


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[26]= new Array();
 choices[26][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[26][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[26][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[26][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[26] = choices[26][3];
 units[26] = "78";
 comments[26] = "Id Pregunta: 47. AGE A1 2015";


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[27]= new Array();
 choices[27][0] = "Diagrama de clases";
 choices[27][1] = "Diagrama de componentes";
 choices[27][2] = "Diagrama de estructura";
 choices[27][3] = "Diagrama de paquetes";
 answers[27] = choices[27][0];
 units[27] = "91";
 comments[27] = "Id Pregunta: 88. AGE A1 2015";


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[28]= "29)  Indique los niveles de seguridad que contempla el Reglamento (UE) 910/2014 para los sistemas de identificaci&oacute;n electr&oacute;nica";
 choices[28]= new Array();
 choices[28][0] = "B&aacute;sico, medio y alto";
 choices[28][1] = "D&eacute;bil y fuerte";
 choices[28][2] = "Bajo, medio y alto";
 choices[28][3] = "Bajo, sustancial y alto";
 answers[28] = choices[28][3];
 units[28] = "77";
 comments[28] = "Id Pregunta: 686. Art&iacute;culo 8 del Reglamento 910/2014";


//  Id pregunta: 489 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[29]= new Array();
 choices[29][0] = "Las Cortes Generales.";
 choices[29][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[29][2] = "El Gobierno.";
 choices[29][3] = "El Congreso de los Diputados.";
 answers[29] = choices[29][0];
 units[29] = "10";
 comments[29] = "Id Pregunta: 489. PRESUPUESTOS GENERALES";


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[30]= new Array();
 choices[30][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[30][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[30][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[30][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[30] = choices[30][1];
 units[30] = "84";
 comments[30] = "Id Pregunta: 53. AGE A1 2015";


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[31]= "32)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[31]= new Array();
 choices[31][0] = "Son vinculantes solamente.";
 choices[31][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[31][2] = "Son preceptivos y vinculantes.";
 choices[31][3] = "Son preceptivos y no vinculantes.";
 answers[31] = choices[31][1];
 units[31] = "5";
 comments[31] = "Id Pregunta: 355. UNION EUROPEA";


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[32]= "33)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[32]= new Array();
 choices[32][0] = "Cuatro.";
 choices[32][1] = "Una.";
 choices[32][2] = "Cinco.";
 choices[32][3] = "Nueve.";
 answers[32] = choices[32][2];
 units[32] = "1";
 comments[32] = "Id Pregunta: 268. CONSTITUCION1978";


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[33]= "34)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[33]= new Array();
 choices[33][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[33][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[33][2] = "Las respuestas a) b) no son correctas.";
 choices[33][3] = "Las respuestas a) y b) son correctas.";
 answers[33] = choices[33][3];
 units[33] = "10";
 comments[33] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";


//  Id pregunta: 714 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[34]= new Array();
 choices[34][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[34][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[34][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[34][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[34] = choices[34][3];
 units[34] = "22";
 comments[34] = "Id Pregunta: 714. Ley de transparencia";


//  Id pregunta: 40 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[35]= new Array();
 choices[35][0] = "Drupal";
 choices[35][1] = "Cassandra";
 choices[35][2] = "Wordpress";
 choices[35][3] = "OpenCMS";
 answers[35] = choices[35][1];
 units[35] = "99";
 comments[35] = "Id Pregunta: 40. AGE A1 2015";


//  Id pregunta: 4 Año de creación de pregunta: 2016
 questions[36]= "37)  Un wireframe es:";
 choices[36]= new Array();
 choices[36][0] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiFi.";
 choices[36][1] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiMAX.";
 choices[36][2] = "Un modelo que permite evaluar el impacto de las nuevas tecnolog&iacute;as en la mejora de la calidad de vida durante la puesta en marcha de una ciudad inteligente (smart city).";
 choices[36][3] = "Una interfaz visual que representa la estructura visual de un sitio web y la relaci&oacute;n entre sus p&aacute;ginas.";
 answers[36] = choices[36][3];
 units[36] = "62";
 comments[36] = "Id Pregunta: 4. AGE A1 2015";


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[37]= "38)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[37]= new Array();
 choices[37][0] = "Reducir el gasto p&uacute;blico.";
 choices[37][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[37][2] = "Reducir el endeudamiento neto.";
 choices[37][3] = "Al Fondo de Contingencia.";
 answers[37] = choices[37][2];
 units[37] = "10";
 comments[37] = "Id Pregunta: 509. PRESUPUESTOS GENERALES";


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[38]= "39)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[38]= new Array();
 choices[38][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[38][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[38][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[38][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[38] = choices[38][2];
 units[38] = "4, 7, 8, 9";
 comments[38] = "Id Pregunta: 821. Ley 40/2015";


//  Id pregunta: 105 Año de creación de pregunta: 2016
 questions[39]= "40)  Entre las caracter&iacute;sticas de Big Data se encuentra:";
 choices[39]= new Array();
 choices[39][0] = "Gran volumen de informaci&oacute;n";
 choices[39][1] = "Gran variedad de datos";
 choices[39][2] = "Se analizan datos a gran velocidad";
 choices[39][3] = "Todas las anteriores son verdaderas";
 answers[39] = choices[39][3];
 units[39] = "73";
 comments[39] = "Id Pregunta: 105. ";


//  Id pregunta: 854 Año de creación de pregunta: 2016
 questions[40]= "41)  Si disponemos de 6 discos SAS de 1TB netos configurados en RAID5, &iquest;de qu&eacute; capacidad neta se dispone en RAID5 en el sistema de almacenamiento?";
 choices[40]= new Array();
 choices[40][0] = "6 TB.";
 choices[40][1] = "5 TB.";
 choices[40][2] = "7 TB.";
 choices[40][3] = "3 TB.";
 answers[40] = choices[40][1];
 units[40] = "53";
 comments[40] = "Id Pregunta: 854. Xunta de Galicia 2015";


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[41]= "42)  El Parlamento Europeo celebrar&aacute;:";
 choices[41]= new Array();
 choices[41][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[41][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[41][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[41][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[41] = choices[41][0];
 units[41] = "5";
 comments[41] = "Id Pregunta: 290. UNION EUROPEA";


//  Id pregunta: 855 Año de creación de pregunta: 2016
 questions[42]= "43)  Indique cu&aacute;l de las siguientes funciones relativas a una PKI es INCORRECTA:";
 choices[42]= new Array();
 choices[42][0] = "Garantiza mediante el uso de certificados digitales el no repudio, integridad, autenticaci&oacute;n y la publicaci&oacute;n de los datos transmitidos.";
 choices[42][1] = "Los componentes de una PKI para la administraci&oacute;n de los ccertificados son: software, hardware, personas, pol&iacute;ticas, procedimientos.";
 choices[42][2] = "Entre las funciones de una PKI se encuentra la revocaci&oacute;n de claves.";
 choices[42][3] = "Entre las funciones de una PKI se encuentran la generaci&oacute;n, recuperaci&oacute;n y renovaci&oacute;n de claves.";
 answers[42] = choices[42][0];
 units[42] = "76";
 comments[42] = "Id Pregunta: 855. Xunta de Galicia 2015";


//  Id pregunta: 660 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[43]= new Array();
 choices[43][0] = "NoSQL";
 choices[43][1] = "Sistemas de baja latencia";
 choices[43][2] = "MapReduce";
 choices[43][3] = "Business Intelligence";
 answers[43] = choices[43][1];
 units[43] = "73";
 comments[43] = "Id Pregunta: 660. ";


//  Id pregunta: 444 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[44]= new Array();
 choices[44][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[44][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[44][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[44][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[44] = choices[44][1];
 units[44] = "43";
 comments[44] = "Id Pregunta: 444. SERVICIOS COMUNES";


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[45]= "46)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[45]= new Array();
 choices[45][0] = "El Presidente del Congreso de los Diputados.";
 choices[45][1] = "El Presidente del Gobierno.";
 choices[45][2] = "El Rey.";
 choices[45][3] = "El Consejo de Ministros.";
 answers[45] = choices[45][0];
 units[45] = "1";
 comments[45] = "Id Pregunta: 231. CONSTITUCION1978";


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[46]= "47)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[46]= new Array();
 choices[46][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[46][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[46][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[46][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[46] = choices[46][1];
 units[46] = "58";
 comments[46] = "Id Pregunta: 643. Junta de Extremadura A1 2015";


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[47]= "48)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[47]= new Array();
 choices[47][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[47][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[47][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[47][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[47] = choices[47][0];
 units[47] = "19";
 comments[47] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";


//  Id pregunta: 329 Año de creación de pregunta: 2016
 questions[48]= "49)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[48]= new Array();
 choices[48][0] = "Acuerdos cualificados.";
 choices[48][1] = "Acuerdos ponderados.";
 choices[48][2] = "Valoraci&oacute;n de los votos.";
 choices[48][3] = "Ponderaci&oacute;n de los votos.";
 answers[48] = choices[48][3];
 units[48] = "5";
 comments[48] = "Id Pregunta: 329. UNION EUROPEA";


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[49]= "50)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[49]= new Array();
 choices[49][0] = "A los cinco a&ntilde;os.";
 choices[49][1] = "A los dos a&ntilde;os.";
 choices[49][2] = "A los tres a&ntilde;os.";
 choices[49][3] = "A los cuatro a&ntilde;os.";
 answers[49] = choices[49][0];
 units[49] = "10";
 comments[49] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[50]= "51)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[50]= new Array();
 choices[50][0] = "Ley Org&aacute;nica.";
 choices[50][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[50][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[50][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[50] = choices[50][2];
 units[50] = "1";
 comments[50] = "Id Pregunta: 203. CONSTITUCION1978";


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[51]= new Array();
 choices[51][0] = "Entre 1973 y 1978";
 choices[51][1] = "Entre 1992 y 1996";
 choices[51][2] = "Entre 1978 y 1985";
 choices[51][3] = "Entre 2008 y 2013";
 answers[51] = choices[51][2];
 units[51] = "12";
 comments[51] = "Id Pregunta: 564. Modelo econ&oacute;mico";


//  Id pregunta: 297 Año de creación de pregunta: 2016
 questions[52]= "53)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[52]= new Array();
 choices[52][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[52][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[52][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[52][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[52] = choices[52][1];
 units[52] = "5";
 comments[52] = "Id Pregunta: 297. UNION EUROPEA";


//  Id pregunta: 197 Año de creación de pregunta: 2016
 questions[53]= "54)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[53]= new Array();
 choices[53][0] = "Establecer tributos.";
 choices[53][1] = "Desarrollar lo establecido en una Ley.";
 choices[53][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[53][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[53] = choices[53][0];
 units[53] = "1";
 comments[53] = "Id Pregunta: 197. CONSTITUCION1978";


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[54]= "55)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[54]= new Array();
 choices[54][0] = "Burn-up chart";
 choices[54][1] = "Arquitectural Skype";
 choices[54][2] = "Burn-down chart";
 choices[54][3] = "Definition of done";
 answers[54] = choices[54][1];
 units[54] = "34, 84";
 comments[54] = "Id Pregunta: 731. Metodologias &aacute;giles";


//  Id pregunta: 689 Año de creación de pregunta: 2016
 questions[55]= "56)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que debe cumplir una firma electr&oacute;nica avanzada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[55]= new Array();
 choices[55][0] = "Estar vinculada al firmante de manera &uacute;nica";
 choices[55][1] = "Haber sido creada utilizando un dispositivo avanzado de creacio&#769;n de firmas electro&#769;nicas";
 choices[55][2] = "Haber sido creada utilizando datos de creaci&oacute;n de firma que el firmante puede utilizar, con un alto nivel de confianza, bajo su exclusivo control";
 choices[55][3] = "Estar vinculada con los datos firmados, de modo tal que cualquier modificacio&#769;n ulterior de los mismos sea detectable";
 answers[55] = choices[55][1];
 units[55] = "77";
 comments[55] = "Id Pregunta: 689. Art&iacute;culo 26 del Reglamento 910/2014";


//  Id pregunta: 501 Año de creación de pregunta: 2016
 questions[56]= "57)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[56]= new Array();
 choices[56][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[56][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[56][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[56][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[56] = choices[56][0];
 units[56] = "10";
 comments[56] = "Id Pregunta: 501. PRESUPUESTOS GENERALES";


//  Id pregunta: 713 Año de creación de pregunta: 2016
 questions[57]= "58)  En relaci&oacute;n al Portal de Transparencia de la AGE:";
 choices[57]= new Array();
 choices[57][0] = "La informaci&oacute;n m&aacute;s relevante para el ciudadano y de frecuente acceso estar&aacute; disponible en el Portal de Transparencia, no pudiendo accederse a informaci&oacute;n que no se encuentre ya publicada.";
 choices[57][1] = "El ejercicio del Derecho de Acceso abre con la administraci&oacute;n un procedimiento administrativo que exige la identificaci&oacute;n del solicitante.";
 choices[57][2] = "En el Portal de Transparencia de la AGE s&oacute;lo se puede acceder a informaci&oacute;n de tipo institucional.";
 choices[57][3] = "El CTBG es el responsable del Portal de Transparencia.";
 answers[57] = choices[57][1];
 units[57] = "22";
 comments[57] = "Id Pregunta: 713. Portal de Transparencia";


//  Id pregunta: 711 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[58]= new Array();
 choices[58][0] = "Ley 3/2015";
 choices[58][1] = "Ley 6/2007";
 choices[58][2] = "Ley 5/1984";
 choices[58][3] = "Ley 5/2006";
 answers[58] = choices[58][0];
 units[58] = "22";
 comments[58] = "Id Pregunta: 711. &Eacute;tica P&uacute;blica y Transparencia";


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[59]= "60)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[59]= new Array();
 choices[59][0] = "A la persona demandante.";
 choices[59][1] = "A la persona demandada.";
 choices[59][2] = "Al &oacute;rgano judicial.";
 choices[59][3] = "Al &oacute;rgano administrativo.";
 answers[59] = choices[59][1];
 units[59] = "14";
 comments[59] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[60]= "61)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[60]= new Array();
 choices[60][0] = "Crecimiento inteligente.";
 choices[60][1] = "Crecimiento inclusivo.";
 choices[60][2] = "Crecimiento sostenible.";
 choices[60][3] = "Crecimiento integrador.";
 answers[60] = choices[60][1];
 units[60] = "5";
 comments[60] = "Id Pregunta: 283. UNION EUROPEA";


//  Id pregunta: 634 Año de creación de pregunta: 2016
 questions[61]= "62)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[61]= new Array();
 choices[61][0] = "Monol&iacute;tico.";
 choices[61][1] = "Estratificado.";
 choices[61][2] = "Cliente/servidor.";
 choices[61][3] = "Orientado a objetos.";
 answers[61] = choices[61][3];
 units[61] = "56";
 comments[61] = "Id Pregunta: 634. Junta de Extremadura A1 2015";


//  Id pregunta: 677 Año de creación de pregunta: 2016
 questions[62]= "63)  En referencia al proyecto ANDES, para la comunicaci&oacute;n telem&aacute;tica de Nacimientos desde Centros Sanitarios a Registros Civiles, indique cual de las siguientes afirmaciones es falsa:";
 choices[62]= new Array();
 choices[62][0] = "Tiene sustento legal de acuerdo a la Ley 19/2015, de 13 de julio, de medidas de reforma administrativa en el &aacute;mbito de la Administraci&oacute;n de Justicia y del Registro Civil.";
 choices[62][1] = "Se inicia a partir de su propuesta en CORA (Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas).";
 choices[62][2] = "Reutiliza el servicio horizontal ACCEDA en modo cloud, lo cual ha facilitado la pronta puesta en marcha de la soluci&oacute;n.";
 choices[62][3] = "La utilizaci&oacute;n de ANDES por parte de los hospitales es completamente transparente, sin necesidad de realizar pasos previos para su despliegue.";
 answers[62] = choices[62][3];
 units[62] = "47";
 comments[62] = "Id Pregunta: 677. Inscripci&oacute;n autom&aacute;tica nacimientos";


//  Id pregunta: 6 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[63]= new Array();
 choices[63][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[63][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[63][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[63][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[63] = choices[63][0];
 units[63] = "91";
 comments[63] = "Id Pregunta: 6. AGE A1 2015";


//  Id pregunta: 411 Año de creación de pregunta: 2016
 questions[64]= "65)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[64]= new Array();
 choices[64][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[64][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[64][2] = "Ninguna es correcta.";
 choices[64][3] = "A y B son correctas.";
 answers[64] = choices[64][1];
 units[64] = "14";
 comments[64] = "Id Pregunta: 411. POLITICAS DE IGUALDAD";


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[65]= "66)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[65]= new Array();
 choices[65][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[65][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[65][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[65][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[65] = choices[65][0];
 units[65] = "1";
 comments[65] = "Id Pregunta: 240. CONSTITUCION1978";


//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[66]= new Array();
 choices[66][0] = "Art&iacute;culo 14 CE.";
 choices[66][1] = "Art&iacute;culo 9.2 CE.";
 choices[66][2] = "Art&iacute;culo 9.1 CE.";
 choices[66][3] = "Art&iacute;culo 13 CE.";
 answers[66] = choices[66][2];
 units[66] = "14";
 comments[66] = "Id Pregunta: 407. POLITICAS DE IGUALDAD";


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[67]= "68)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[67]= new Array();
 choices[67][0] = "Tener una estructura institucional.";
 choices[67][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[67][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[67][3] = "Todas las respuestas son correctas.";
 answers[67] = choices[67][3];
 units[67] = "5";
 comments[67] = "Id Pregunta: 377. UNION EUROPEA";


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[68]= "69)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[68]= new Array();
 choices[68][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[68][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[68][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[68][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[68] = choices[68][1];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 838. Ley 40/2015";


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[69]= new Array();
 choices[69][0] = "Versi&oacute;n digital prioritaria.";
 choices[69][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[69][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[69][3] = "Apertura y transparencia.";
 answers[69] = choices[69][0];
 units[69] = "5";
 comments[69] = "Id Pregunta: 287. UNION EUROPEA";


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[70]= "71)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[70]= new Array();
 choices[70][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[70][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[70][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[70][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[70] = choices[70][3];
 units[70] = "14";
 comments[70] = "Id Pregunta: 387. POLITICAS DE IGUALDAD";


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[71]= "72)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[71]= new Array();
 choices[71][0] = "los Secretarios de Estado";
 choices[71][1] = "los Ministros";
 choices[71][2] = "los Subsecretarios";
 choices[71][3] = "los Secretarios generales";
 answers[71] = choices[71][2];
 units[71] = "4, 7, 8, 9";
 comments[71] = "Id Pregunta: 810. Ley 40/2015";


//  Id pregunta: 815 Año de creación de pregunta: 2016
 questions[72]= "73)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[72]= new Array();
 choices[72][0] = "en cada Comunidad Aut&oacute;noma";
 choices[72][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[72][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[72][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[72] = choices[72][1];
 units[72] = "4, 7, 8, 9";
 comments[72] = "Id Pregunta: 815. Ley 40/2015";


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[73]= "74)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[73]= new Array();
 choices[73][0] = "Con el a&ntilde;o anterior.";
 choices[73][1] = "Con los tres a&ntilde;os anteriores.";
 choices[73][2] = "Con el a&ntilde;o natural.";
 choices[73][3] = "Con los dos a&ntilde;os anteriores.";
 answers[73] = choices[73][2];
 units[73] = "10";
 comments[73] = "Id Pregunta: 468. PRESUPUESTOS GENERALES";


//  Id pregunta: 327 Año de creación de pregunta: 2016
 questions[74]= "75)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[74]= new Array();
 choices[74][0] = "X.";
 choices[74][1] = "XIX.";
 choices[74][2] = "XV.";
 choices[74][3] = "XIII.";
 answers[74] = choices[74][1];
 units[74] = "5";
 comments[74] = "Id Pregunta: 327. UNION EUROPEA";


