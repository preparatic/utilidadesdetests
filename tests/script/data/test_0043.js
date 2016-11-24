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

//  Id pregunta: 10406 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[0]= new Array();
 choices[0][0] = "Art&iacute;culo 9.1 CE.";
 choices[0][1] = "Art&iacute;culo 53 CE.";
 choices[0][2] = "Art&iacute;culo 14 CE.";
 choices[0][3] = "Art&iacute;culo 16 CE.";
 answers[0] = choices[0][2];
 units[0] = "14";
 comments[0] = "Id Pregunta: 10406. POLITICAS DE IGUALDAD";


//  Id pregunta: 10663 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[1]= new Array();
 choices[1][0] = "De oficio.";
 choices[1][1] = "A solicitud del interesado.";
 choices[1][2] = "De oficio o a solicitud del interesado.";
 choices[1][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[1] = choices[1][2];
 units[1] = "7";
 comments[1] = "Id Pregunta: 10663. Art&iacute;culo 54 de la Ley 39/2015";


//  Id pregunta: 10325 Año de creación de pregunta: 2016
 questions[2]= "3)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[2]= new Array();
 choices[2][0] = "Veinticinco.";
 choices[2][1] = "Veintiuno.";
 choices[2][2] = "Dieciocho.";
 choices[2][3] = "Diecinueve.";
 answers[2] = choices[2][0];
 units[2] = "5";
 comments[2] = "Id Pregunta: 10325. UNION EUROPEA";


//  Id pregunta: 10342 Año de creación de pregunta: 2016
 questions[3]= "4)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[3]= new Array();
 choices[3][0] = "El Tratado de Maastrich.";
 choices[3][1] = "El Tratado de Amsterdam.";
 choices[3][2] = "El Tratado de Par&iacute;s.";
 choices[3][3] = "El Tratado de Roma.";
 answers[3] = choices[3][3];
 units[3] = "5";
 comments[3] = "Id Pregunta: 10342. UNION EUROPEA";


//  Id pregunta: 10146 Año de creación de pregunta: 2016
 questions[4]= "5)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[4]= new Array();
 choices[4][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[4][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[4][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[4][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[4] = choices[4][0];
 units[4] = "8";
 comments[4] = "Id Pregunta: 10146. Ley 39/2015, Art&iacute;culo 107";


//  Id pregunta: 10241 Año de creación de pregunta: 2016
 questions[5]= "6)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[5]= new Array();
 choices[5][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[5][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[5][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[5][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[5] = choices[5][0];
 units[5] = "1";
 comments[5] = "Id Pregunta: 10241. CONSTITUCION1978";


//  Id pregunta: 10144 Año de creación de pregunta: 2016
 questions[6]= "7)  Sobre el recurso de reposici&oacute;n:";
 choices[6]= new Array();
 choices[6][0] = "Cabe interponerlo ante los actos administrativos que pongan fin a la v&iacute;a administrativa";
 choices[6][1] = "Es obligatorio interponerlo antes de impugnar un acto administrativo ante el orden jurisdiccional contencioso-administrativo";
 choices[6][2] = "Ha desaparecido en la Ley 39/2015";
 choices[6][3] = "El &oacute;rgano competente para resolverlo es el superior jer&aacute;rquico al que dict&oacute; el acto administrativo a recurrir";
 answers[6] = choices[6][0];
 units[6] = "8";
 comments[6] = "Id Pregunta: 10144. Ley 39/2015, Art&iacute;culo 123";


//  Id pregunta: 10630 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[7]= new Array();
 choices[7][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[7][1] = "De nivel alto.";
 choices[7][2] = "De nivel medio y nivel alto.";
 choices[7][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[7] = choices[7][3];
 units[7] = "35";
 comments[7] = "Id Pregunta: 10630. Junta de Extremadura A1 2015";


//  Id pregunta: 10106 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[8]= new Array();
 choices[8][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[8][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[8][2] = "A) y B) son verdaderas";
 choices[8][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[8] = choices[8][2];
 units[8] = "73";
 comments[8] = "Id Pregunta: 10106. ";


//  Id pregunta: 10155 Año de creación de pregunta: 2016
 questions[9]= "10)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[9]= new Array();
 choices[9][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[9][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[9][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[9][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[9] = choices[9][2];
 units[9] = "7";
 comments[9] = "Id Pregunta: 10155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 10399 Año de creación de pregunta: 2016
 questions[10]= "11)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[10]= new Array();
 choices[10][0] = "Acciones de discriminaci&oacute;n.";
 choices[10][1] = "Acciones positivas.";
 choices[10][2] = "Acciones negativas.";
 choices[10][3] = "Acciones neutras.";
 answers[10] = choices[10][1];
 units[10] = "14";
 comments[10] = "Id Pregunta: 10399. POLITICAS DE IGUALDAD";


//  Id pregunta: 10643 Año de creación de pregunta: 2016
 questions[11]= "12)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[11]= new Array();
 choices[11][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[11][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[11][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[11][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[11] = choices[11][2];
 units[11] = "85";
 comments[11] = "Id Pregunta: 10643. Junta de Extremadura A1 2015";


//  Id pregunta: 10500 Año de creación de pregunta: 2016
 questions[12]= "13)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[12]= new Array();
 choices[12][0] = "El presidente de las Cortes Generales.";
 choices[12][1] = "El Presidente del Gobierno.";
 choices[12][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[12][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[12] = choices[12][3];
 units[12] = "10";
 comments[12] = "Id Pregunta: 10500. PRESUPUESTOS GENERALES";


//  Id pregunta: 10661 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[13]= new Array();
 choices[13][0] = "Varios namenodes y varios datanodes por cluster";
 choices[13][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[13][2] = "1 namenode y varios datanodes por cluster";
 choices[13][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[13] = choices[13][2];
 units[13] = "73";
 comments[13] = "Id Pregunta: 10661. ";


//  Id pregunta: 10079 Año de creación de pregunta: 2016
 questions[14]= "15)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[14]= new Array();
 choices[14][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[14][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[14][2] = "Las Inspecciones Generales de los Servicios";
 choices[14][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[14] = choices[14][1];
 units[14] = "75";
 comments[14] = "Id Pregunta: 10079. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10080 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[15]= new Array();
 choices[15][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[15][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[15][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[15][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[15] = choices[15][3];
 units[15] = "46";
 comments[15] = "Id Pregunta: 10080. AGE A1 2015";


//  Id pregunta: 10211 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[16]= new Array();
 choices[16][0] = "Cuatro.";
 choices[16][1] = "Ninguno.";
 choices[16][2] = "Dos.";
 choices[16][3] = "Seis.";
 answers[16] = choices[16][2];
 units[16] = "1";
 comments[16] = "Id Pregunta: 10211. CONSTITUCION1978";


//  Id pregunta: 10441 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[17]= new Array();
 choices[17][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[17][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[17][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[17][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[17] = choices[17][1];
 units[17] = "43";
 comments[17] = "Id Pregunta: 10441. SERVICIOS COMUNES";


//  Id pregunta: 10112 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[18]= new Array();
 choices[18][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[18][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[18][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[18][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[18] = choices[18][1];
 units[18] = "15";
 comments[18] = "Id Pregunta: 10112. ";


//  Id pregunta: 10077 Año de creación de pregunta: 2016
 questions[19]= "20)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[19]= new Array();
 choices[19][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[19][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[19][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[19][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[19] = choices[19][2];
 units[19] = "47";
 comments[19] = "Id Pregunta: 10077. AGE A1 2015";


//  Id pregunta: 10453 Año de creación de pregunta: 2016
 questions[20]= "21)  En las Administraciones P&uacute;blicas...";
 choices[20]= new Array();
 choices[20][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[20][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[20][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[20][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[20] = choices[20][0];
 units[20] = "10";
 comments[20] = "Id Pregunta: 10453. PRESUPUESTOS GENERALES";


//  Id pregunta: 10525 Año de creación de pregunta: 2016
 questions[21]= "22)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[21]= new Array();
 choices[21][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[21][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[21][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[21][3] = "cualquiera que sea el estado del procedimiento";
 answers[21] = choices[21][3];
 units[21] = "7";
 comments[21] = "Id Pregunta: 10525. LEY 39/2015";


//  Id pregunta: 10346 Año de creación de pregunta: 2016
 questions[22]= "23)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[22]= new Array();
 choices[22][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[22][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[22][2] = "Cinco a&ntilde;os.";
 choices[22][3] = "Ninguna es correcta.";
 answers[22] = choices[22][2];
 units[22] = "5";
 comments[22] = "Id Pregunta: 10346. UNION EUROPEA";


//  Id pregunta: 10515 Año de creación de pregunta: 2016
 questions[23]= "24)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[23]= new Array();
 choices[23][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[23][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[23][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[23][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[23] = choices[23][1];
 units[23] = "7";
 comments[23] = "Id Pregunta: 10515. LEY 39/2015";


//  Id pregunta: 10512 Año de creación de pregunta: 2016
 questions[24]= "25)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[24]= new Array();
 choices[24][0] = "solo mediante ley";
 choices[24][1] = "reglamentariamente";
 choices[24][2] = "mediante ley o reglamentariamente";
 choices[24][3] = "ninguna es correcta";
 answers[24] = choices[24][1];
 units[24] = "7";
 comments[24] = "Id Pregunta: 10512. LEY 39/2015";


//  Id pregunta: 10008 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[25]= new Array();
 choices[25][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[25][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[25][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[25][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[25] = choices[25][2];
 units[25] = "26";
 comments[25] = "Id Pregunta: 10008. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10332 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[26]= new Array();
 choices[26][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[26][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[26][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[26][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[26] = choices[26][3];
 units[26] = "5";
 comments[26] = "Id Pregunta: 10332. UNION EUROPEA";


//  Id pregunta: 10497 Año de creación de pregunta: 2016
 questions[27]= "28)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[27]= new Array();
 choices[27][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[27][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[27][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[27][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[27] = choices[27][3];
 units[27] = "10";
 comments[27] = "Id Pregunta: 10497. PRESUPUESTOS GENERALES";


//  Id pregunta: 10504 Año de creación de pregunta: 2016
 questions[28]= "29)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[28]= new Array();
 choices[28][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[28][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[28][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[28][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[28] = choices[28][2];
 units[28] = "10";
 comments[28] = "Id Pregunta: 10504. PRESUPUESTOS GENERALES";


//  Id pregunta: 10251 Año de creación de pregunta: 2016
 questions[29]= "30)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[29]= new Array();
 choices[29][0] = "Rey.";
 choices[29][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[29][2] = "Constituci&oacute;n.";
 choices[29][3] = "Pueblo.";
 answers[29] = choices[29][2];
 units[29] = "1";
 comments[29] = "Id Pregunta: 10251. CONSTITUCION1978";


//  Id pregunta: 10514 Año de creación de pregunta: 2016
 questions[30]= "31)  El sector p&uacute;blico institucional se integra por:";
 choices[30]= new Array();
 choices[30][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[30][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[30][2] = "las Universidades p&uacute;blicas";
 choices[30][3] = "todas son correctas";
 answers[30] = choices[30][3];
 units[30] = "7";
 comments[30] = "Id Pregunta: 10514. LEY 39/2015";


//  Id pregunta: 10059 Año de creación de pregunta: 2016
 questions[31]= "32)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[31]= new Array();
 choices[31][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[31][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[31][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[31][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[31] = choices[31][3];
 units[31] = "101";
 comments[31] = "Id Pregunta: 10059. AGE A1 2015";


//  Id pregunta: 10639 Año de creación de pregunta: 2016
 questions[32]= "33)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[32]= new Array();
 choices[32][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[32][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[32][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[32][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[32] = choices[32][2];
 units[32] = "57";
 comments[32] = "Id Pregunta: 10639. Junta de Extremadura A1 2015";


//  Id pregunta: 10101 Año de creación de pregunta: 2016
 questions[33]= "34)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[33]= new Array();
 choices[33][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[33][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[33][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[33][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[33] = choices[33][1];
 units[33] = "73";
 comments[33] = "Id Pregunta: 10101. ";


//  Id pregunta: 10309 Año de creación de pregunta: 2016
 questions[34]= "35)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[34]= new Array();
 choices[34][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[34][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[34][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[34][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[34] = choices[34][0];
 units[34] = "5";
 comments[34] = "Id Pregunta: 10309. UNION EUROPEA";


//  Id pregunta: 10167 Año de creación de pregunta: 2016
 questions[35]= "36)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[35]= new Array();
 choices[35][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[35][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[35][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[35][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[35] = choices[35][1];
 units[35] = "19";
 comments[35] = "Id Pregunta: 10167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";


//  Id pregunta: 10450 Año de creación de pregunta: 2016
 questions[36]= "37)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[36]= new Array();
 choices[36][0] = "Cifrada";
 choices[36][1] = "Conjunta";
 choices[36][2] = "Sistem&aacute;tica";
 choices[36][3] = "Todas son correctas";
 answers[36] = choices[36][3];
 units[36] = "10";
 comments[36] = "Id Pregunta: 10450. PRESUPUESTOS GENERALES";


//  Id pregunta: 10074 Año de creación de pregunta: 2016
 questions[37]= "38)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[37]= new Array();
 choices[37][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[37][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[37][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[37][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[37] = choices[37][3];
 units[37] = "106";
 comments[37] = "Id Pregunta: 10074. AGE A1 2015";


//  Id pregunta: 10027 Año de creación de pregunta: 2016
 questions[38]= "39)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[38]= new Array();
 choices[38][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[38][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[38][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[38][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[38] = choices[38][3];
 units[38] = "7";
 comments[38] = "Id Pregunta: 10027. AGE A1 2015";


//  Id pregunta: 10021 Año de creación de pregunta: 2016
 questions[39]= "40)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[39]= new Array();
 choices[39][0] = "Gesti&oacute;n de la disponibilidad";
 choices[39][1] = "Gesti&oacute;n de la demanda";
 choices[39][2] = "Gesti&oacute;n de entregas";
 choices[39][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[39] = choices[39][0];
 units[39] = "101";
 comments[39] = "Id Pregunta: 10021. AGE A1 2015";


//  Id pregunta: 10492 Año de creación de pregunta: 2016
 questions[40]= "41)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[40]= new Array();
 choices[40][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[40][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[40][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[40][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[40] = choices[40][2];
 units[40] = "10";
 comments[40] = "Id Pregunta: 10492. PRESUPUESTOS GENERALES";


//  Id pregunta: 10194 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;ntos miembros componen el Tribunal Constitucional?";
 choices[41]= new Array();
 choices[41][0] = "11";
 choices[41][1] = "12";
 choices[41][2] = "14";
 choices[41][3] = "8";
 answers[41] = choices[41][1];
 units[41] = "1";
 comments[41] = "Id Pregunta: 10194. CONSTITUCION1978";


//  Id pregunta: 10383 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[42]= new Array();
 choices[42][0] = "El Consejo Nacional de la Mujer";
 choices[42][1] = "El Consejo de la Mujer";
 choices[42][2] = "El Instituto de la Mujer";
 choices[42][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[42] = choices[42][3];
 units[42] = "14";
 comments[42] = "Id Pregunta: 10383. POLITICAS DE IGUALDAD";


//  Id pregunta: 10189 Año de creación de pregunta: 2016
 questions[43]= "44)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:";
 choices[43]= new Array();
 choices[43][0] = "Ley Org&aacute;nica.";
 choices[43][1] = "Ley de Bases.";
 choices[43][2] = "Ley ordinaria.";
 choices[43][3] = "Mandato.";
 answers[43] = choices[43][1];
 units[43] = "1";
 comments[43] = "Id Pregunta: 10189. CONSTITUCION1978";


//  Id pregunta: 10436 Año de creación de pregunta: 2016
 questions[44]= "45)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[44]= new Array();
 choices[44][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[44][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[44][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[44][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[44] = choices[44][2];
 units[44] = "43";
 comments[44] = "Id Pregunta: 10436. SERVICIOS COMUNES";


//  Id pregunta: 10243 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[45]= new Array();
 choices[45][0] = "Art&iacute;culo 70.";
 choices[45][1] = "Art&iacute;culo 54.";
 choices[45][2] = "Articulo 62.";
 choices[45][3] = "Articulo 55. 5.";
 answers[45] = choices[45][2];
 units[45] = "1";
 comments[45] = "Id Pregunta: 10243. CONSTITUCION1978";


//  Id pregunta: 10567 Año de creación de pregunta: 2016
 questions[46]= "47)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[46]= new Array();
 choices[46][0] = "Primario, que incluye la agricultura y la pesca";
 choices[46][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[46][2] = "Minero, junto con las exportaciones de comercio";
 choices[46][3] = "Servicios";
 answers[46] = choices[46][3];
 units[46] = "12";
 comments[46] = "Id Pregunta: 10567. Modelo econ&oacute;mico";


//  Id pregunta: 10645 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[47]= new Array();
 choices[47][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[47][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[47][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[47][3] = "El Instituto de la Mujer de Extremadura.";
 answers[47] = choices[47][3];
 units[47] = "14";
 comments[47] = "Id Pregunta: 10645. Junta de Extremadura A1 2015";


//  Id pregunta: 10585 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[48]= new Array();
 choices[48][0] = "La CETIC";
 choices[48][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[48][2] = "La DTIC";
 choices[48][3] = "Ninguno de los anteriores";
 answers[48] = choices[48][1];
 units[48] = "19";
 comments[48] = "Id Pregunta: 10585. Estrategia TIC";


//  Id pregunta: 10231 Año de creación de pregunta: 2016
 questions[49]= "50)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[49]= new Array();
 choices[49][0] = "El Presidente del Congreso de los Diputados.";
 choices[49][1] = "El Presidente del Gobierno.";
 choices[49][2] = "El Rey.";
 choices[49][3] = "El Consejo de Ministros.";
 answers[49] = choices[49][0];
 units[49] = "1";
 comments[49] = "Id Pregunta: 10231. CONSTITUCION1978";


//  Id pregunta: 10198 Año de creación de pregunta: 2016
 questions[50]= "51)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[50]= new Array();
 choices[50][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[50][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[50][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[50][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[50] = choices[50][3];
 units[50] = "1";
 comments[50] = "Id Pregunta: 10198. CONSTITUCION1978";


//  Id pregunta: 10033 Año de creación de pregunta: 2016
 questions[51]= "52)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[51]= new Array();
 choices[51][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[51][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[51][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[51][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[51] = choices[51][1];
 units[51] = "63";
 comments[51] = "Id Pregunta: 10033. AGE A1 2015";


//  Id pregunta: 10197 Año de creación de pregunta: 2016
 questions[52]= "53)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[52]= new Array();
 choices[52][0] = "Establecer tributos.";
 choices[52][1] = "Desarrollar lo establecido en una Ley.";
 choices[52][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[52][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[52] = choices[52][0];
 units[52] = "1";
 comments[52] = "Id Pregunta: 10197. CONSTITUCION1978";


//  Id pregunta: 10490 Año de creación de pregunta: 2016
 questions[53]= "54)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[53]= new Array();
 choices[53][0] = "A los cinco a&ntilde;os.";
 choices[53][1] = "A los dos a&ntilde;os.";
 choices[53][2] = "A los tres a&ntilde;os.";
 choices[53][3] = "A los cuatro a&ntilde;os.";
 answers[53] = choices[53][0];
 units[53] = "10";
 comments[53] = "Id Pregunta: 10490. PRESUPUESTOS GENERALES";


//  Id pregunta: 10099 Año de creación de pregunta: 2016
 questions[54]= "55)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[54]= new Array();
 choices[54][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[54][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[54][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[54][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[54] = choices[54][2];
 units[54] = "26";
 comments[54] = "Id Pregunta: 10099. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10351 Año de creación de pregunta: 2016
 questions[55]= "56)  La sede del Parlamento Europeo se encuentra en:";
 choices[55]= new Array();
 choices[55][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[55][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[55][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[55][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[55] = choices[55][1];
 units[55] = "5";
 comments[55] = "Id Pregunta: 10351. UNION EUROPEA";


//  Id pregunta: 10262 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[56]= new Array();
 choices[56][0] = "Constitucional.";
 choices[56][1] = "Penal.";
 choices[56][2] = "Militar.";
 choices[56][3] = "Tribunales consuetudinarios.";
 answers[56] = choices[56][0];
 units[56] = "1";
 comments[56] = "Id Pregunta: 10262. CONSTITUCION1978";


//  Id pregunta: 10424 Año de creación de pregunta: 2016
 questions[57]= "58)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[57]= new Array();
 choices[57][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[57][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[57][2] = "Ninguna es correcta.";
 choices[57][3] = "A y B son correctas.";
 answers[57] = choices[57][0];
 units[57] = "14";
 comments[57] = "Id Pregunta: 10424. POLITICAS DE IGUALDAD";


//  Id pregunta: 10116 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[58]= new Array();
 choices[58][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[58][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[58][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[58][3] = "El pago de subsidios a parados";
 answers[58] = choices[58][3];
 units[58] = "15";
 comments[58] = "Id Pregunta: 10116. ";


//  Id pregunta: 10123 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[59]= new Array();
 choices[59][0] = "Un representante de la Administraci&oacute;n local.";
 choices[59][1] = "Un representante del Tribunal de Cuentas.";
 choices[59][2] = "Un representante del Defensor del Pueblo.";
 choices[59][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[59] = choices[59][0];
 units[59] = "22";
 comments[59] = "Id Pregunta: 10123. ";


//  Id pregunta: 10432 Año de creación de pregunta: 2016
 questions[60]= "61)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[60]= new Array();
 choices[60][0] = "De ocho a&ntilde;os.";
 choices[60][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[60][2] = "Ambas son correctas.";
 choices[60][3] = "No existe un l&iacute;mite.";
 answers[60] = choices[60][0];
 units[60] = "14";
 comments[60] = "Id Pregunta: 10432. POLITICAS DE IGUALDAD";


//  Id pregunta: 10435 Año de creación de pregunta: 2016
 questions[61]= "62)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[61]= new Array();
 choices[61][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[61][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[61][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[61][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[61] = choices[61][2];
 units[61] = "43";
 comments[61] = "Id Pregunta: 10435. SERVICIOS COMUNES";


//  Id pregunta: 10024 Año de creación de pregunta: 2016
 questions[62]= "63)  De acuerdo con la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, una de las funciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[62]= new Array();
 choices[62][0] = "Gestionar en per&iacute;odo voluntario las tasas en materia de telecomunicaciones a que se refiere la presente Ley.";
 choices[62][1] = "Proponer al Gobierno la pol&iacute;tica a seguir para facilitar el desarrollo y la evoluci&oacute;n de las obligaciones de servicio p&uacute;blico.";
 choices[62][2] = "Gestionar el Registro de Operadores.";
 choices[62][3] = "Establecer el procedimiento para cuantificar los beneficios no monetarios obtenidos por los operadores encargados de la prestaci&oacute;n del servicio universal.";
 answers[62] = choices[62][3];
 units[62] = "121";
 comments[62] = "Id Pregunta: 10024. AGE A1 2015";


//  Id pregunta: 10038 Año de creación de pregunta: 2016
 questions[63]= "64)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[63]= new Array();
 choices[63][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[63][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[63][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[63][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[63] = choices[63][3];
 units[63] = "62";
 comments[63] = "Id Pregunta: 10038. AGE A1 2015";


//  Id pregunta: 10334 Año de creación de pregunta: 2016
 questions[64]= "65)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[64]= new Array();
 choices[64][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[64][1] = "Ninguna de las respuestas es correcta.";
 choices[64][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[64][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[64] = choices[64][0];
 units[64] = "5";
 comments[64] = "Id Pregunta: 10334. UNION EUROPEA";


//  Id pregunta: 10402 Año de creación de pregunta: 2016
 questions[65]= "66)  El principio de igualdad de trato y oportunidades entre mujeres y hombres tiene car&aacute;cter:";
 choices[65]= new Array();
 choices[65][0] = "Parcial.";
 choices[65][1] = "Sectorial.";
 choices[65][2] = "Tranversal.";
 choices[65][3] = "Vertical.";
 answers[65] = choices[65][2];
 units[65] = "14";
 comments[65] = "Id Pregunta: 10402. POLITICAS DE IGUALDAD";


//  Id pregunta: 10463 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[66]= new Array();
 choices[66][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[66][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[66][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[66][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[66] = choices[66][3];
 units[66] = "10";
 comments[66] = "Id Pregunta: 10463. PRESUPUESTOS GENERALES";


//  Id pregunta: 10087 Año de creación de pregunta: 2016
 questions[67]= "68)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[67]= new Array();
 choices[67][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[67][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[67][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[67][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[67] = choices[67][2];
 units[67] = "48";
 comments[67] = "Id Pregunta: 10087. AGE A1 2015";


//  Id pregunta: 10621 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n el paradigma de Orientaci&oacute;n a Objetos, la herencia posibilita que:";
 choices[68]= new Array();
 choices[68][0] = "Cualquier cambio en los datos y operaciones contenidas dentro de una superclase es heredado inmediatamente por todas las subclases que se derivan de la superclase.";
 choices[68][1] = "Cualquier cambio en las operaciones y datos de la superclase no se refleja en todas las subclases.";
 choices[68][2] = "Cualquier cambio en una de las subclases que se heredan de la superclase se refleja en sus clases hermanas.";
 choices[68][3] = "En el paradigma de Orientaci&oacute;n a Objetos no existe la herencia.";
 answers[68] = choices[68][0];
 units[68] = "89";
 comments[68] = "Id Pregunta: 10621. Junta de Extremadura A1 2015";


//  Id pregunta: 10258 Año de creación de pregunta: 2016
 questions[69]= "70)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[69]= new Array();
 choices[69][0] = "Municipios, provincias y CCAA.";
 choices[69][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[69][2] = "En CCAA, 50 provincias y municipios.";
 choices[69][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[69] = choices[69][2];
 units[69] = "1";
 comments[69] = "Id Pregunta: 10258. CONSTITUCION1978";


//  Id pregunta: 10509 Año de creación de pregunta: 2016
 questions[70]= "71)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[70]= new Array();
 choices[70][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[70][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[70][2] = "Absoluta frente a cualquier otro gasto.";
 choices[70][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[70] = choices[70][2];
 units[70] = "10";
 comments[70] = "Id Pregunta: 10509. PRESUPUESTOS GENERALES";


//  Id pregunta: 10254 Año de creación de pregunta: 2016
 questions[71]= "72)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[71]= new Array();
 choices[71][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[71][1] = "La libertad sexual y religiosa.";
 choices[71][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[71][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[71] = choices[71][3];
 units[71] = "1";
 comments[71] = "Id Pregunta: 10254. CONSTITUCION1978";


//  Id pregunta: 10318 Año de creación de pregunta: 2016
 questions[72]= "73)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[72]= new Array();
 choices[72][0] = "Consejos y Servicios.";
 choices[72][1] = "Servicios permanentes y no permanentes.";
 choices[72][2] = "Direcciones Generales.";
 choices[72][3] = "Direcciones ministeriales.";
 answers[72] = choices[72][2];
 units[72] = "5";
 comments[72] = "Id Pregunta: 10318. UNION EUROPEA";


//  Id pregunta: 10413 Año de creación de pregunta: 2016
 questions[73]= "74)  Gozar&aacute;n de los derecho derivados del principio de igualdad de trato y de la prohibici&oacute;n de discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[73]= new Array();
 choices[73][0] = "La mujeres.";
 choices[73][1] = "Lo hombres.";
 choices[73][2] = "Todas las personas.";
 choices[73][3] = "Las mujeres y ni&ntilde;os menores de 16 a&ntilde;os.";
 answers[73] = choices[73][2];
 units[73] = "14";
 comments[73] = "Id Pregunta: 10413. POLITICAS DE IGUALDAD";


//  Id pregunta: 10671 Año de creación de pregunta: 2016
 questions[74]= "75)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[74]= new Array();
 choices[74][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[74][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[74][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[74][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[74] = choices[74][0];
 units[74] = "7";
 comments[74] = "Id Pregunta: 10671. T&iacute;tulo IV de la Ley 39/2015";


