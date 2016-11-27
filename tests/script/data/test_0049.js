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

//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[0]= "1)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[0]= new Array();
 choices[0][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[0][1] = "el C&oacute;digo Civil";
 choices[0][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[0][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[0] = choices[0][0];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 764. Ley 40/2015";


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[1]= "2)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[1]= new Array();
 choices[1][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[1][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[1][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[1][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[1] = choices[1][3];
 units[1] = "7";
 comments[1] = "Id Pregunta: 528. LEY 39/2015";


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[2]= new Array();
 choices[2][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[2][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[2][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[2][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[2] = choices[2][2];
 units[2] = "71";
 comments[2] = "Id Pregunta: 39. AGE A1 2015";


//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[3]= new Array();
 choices[3][0] = "Un diputado y un senador, cada una de ellas";
 choices[3][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[3][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[3][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[3] = choices[3][2];
 units[3] = "1";
 comments[3] = "Id Pregunta: 192. CONSTITUCION1978";


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[4]= new Array();
 choices[4][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[4][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[4][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[4][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[4] = choices[4][3];
 units[4] = "66";
 comments[4] = "Id Pregunta: 37. AGE A1 2015";


//  Id pregunta: 347 Año de creación de pregunta: 2016
 questions[5]= "6)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[5]= new Array();
 choices[5][0] = "18 miembros.";
 choices[5][1] = "Ninguna es correcta.";
 choices[5][2] = "22 miembros.";
 choices[5][3] = "21 miembros.";
 answers[5] = choices[5][1];
 units[5] = "5";
 comments[5] = "Id Pregunta: 347. UNION EUROPEA";


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[6]= "7)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[6]= new Array();
 choices[6][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[6][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[6][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[6][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[6] = choices[6][2];
 units[6] = "12";
 comments[6] = "Id Pregunta: 134. Leyes modelo econ&oacute;mico";


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[7]= "8)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[7]= new Array();
 choices[7][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[7][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[7][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[7][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[7] = choices[7][0];
 units[7] = "22";
 comments[7] = "Id Pregunta: 124. ";


//  Id pregunta: 628 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[8]= new Array();
 choices[8][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[8][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[8][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[8][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[8] = choices[8][0];
 units[8] = "45";
 comments[8] = "Id Pregunta: 628. Junta de Extremadura A1 2015";


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[9]= "10)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[9]= new Array();
 choices[9][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[9][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[9][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[9][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[9] = choices[9][1];
 units[9] = "1";
 comments[9] = "Id Pregunta: 238. CONSTITUCION1978";


//  Id pregunta: 607 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[10]= new Array();
 choices[10][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[10][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[10][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[10][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[10] = choices[10][0];
 units[10] = "45";
 comments[10] = "Id Pregunta: 607. Junta de Extremadura A1 2015";


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[11]= "12)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[11]= new Array();
 choices[11][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[11][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[11][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[11][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[11] = choices[11][1];
 units[11] = "14";
 comments[11] = "Id Pregunta: 676. Dependencia";


//  Id pregunta: 603 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[12]= new Array();
 choices[12][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[12][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[12][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[12][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[12] = choices[12][3];
 units[12] = "101";
 comments[12] = "Id Pregunta: 603. Junta de Extremadura A1 2015";


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[13]= new Array();
 choices[13][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[13][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[13][2] = "Iniciativa europea de libre flujo de datos.";
 choices[13][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[13] = choices[13][2];
 units[13] = "5";
 comments[13] = "Id Pregunta: 286. UNION EUROPEA";


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[14]= "15)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[14]= new Array();
 choices[14][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[14][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[14][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[14][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[14] = choices[14][2];
 units[14] = "47";
 comments[14] = "Id Pregunta: 77. AGE A1 2015";


//  Id pregunta: 259 Año de creación de pregunta: 2016
 questions[15]= "16)  La iniciativa legislativa corresponde:";
 choices[15]= new Array();
 choices[15][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[15][1] = "Al rey y al Gobierno.";
 choices[15][2] = "Al Congreso, al Senado y al Rey.";
 choices[15][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[15] = choices[15][3];
 units[15] = "1";
 comments[15] = "Id Pregunta: 259. CONSTITUCION1978";


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[16]= new Array();
 choices[16][0] = "Art&iacute;culo 70.";
 choices[16][1] = "Art&iacute;culo 54.";
 choices[16][2] = "Articulo 62.";
 choices[16][3] = "Articulo 55. 5.";
 answers[16] = choices[16][2];
 units[16] = "1";
 comments[16] = "Id Pregunta: 243. CONSTITUCION1978";


//  Id pregunta: 445 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[17]= new Array();
 choices[17][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[17][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[17][2] = "Fecha de otorgamiento.";
 choices[17][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[17] = choices[17][1];
 units[17] = "43";
 comments[17] = "Id Pregunta: 445. SERVICIOS COMUNES";


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[18]= new Array();
 choices[18][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[18][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[18][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[18][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[18] = choices[18][2];
 units[18] = "5";
 comments[18] = "Id Pregunta: 311. UNION EUROPEA";


//  Id pregunta: 394 Año de creación de pregunta: 2016
 questions[19]= "20)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[19]= new Array();
 choices[19][0] = "Discriminaci&oacute;n indirecta.";
 choices[19][1] = "Discriminaci&oacute;n directa.";
 choices[19][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[19][3] = "Discriminaci&oacute;n abusiva.";
 answers[19] = choices[19][0];
 units[19] = "14";
 comments[19] = "Id Pregunta: 394. POLITICAS DE IGUALDAD";


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[20]= "21)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[20]= new Array();
 choices[20][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[20][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[20][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[20][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[20] = choices[20][0];
 units[20] = "62";
 comments[20] = "Id Pregunta: 12. AGE A1 2015";


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[21]= new Array();
 choices[21][0] = "Orientaci&oacute;n a objetos";
 choices[21][1] = "MapReduce";
 choices[21][2] = "Pipeline filtering";
 choices[21][3] = "Programaci&oacute;n funcional";
 answers[21] = choices[21][1];
 units[21] = "73";
 comments[21] = "Id Pregunta: 659. ";


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[22]= "23)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[22]= new Array();
 choices[22][0] = "De las disposiciones favorables.";
 choices[22][1] = "De las disposiciones sancionadoras no favorables.";
 choices[22][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[22][3] = "Las respuestas b) y c) son correctas.";
 answers[22] = choices[22][3];
 units[22] = "1";
 comments[22] = "Id Pregunta: 252. CONSTITUCION1978";


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[23]= "24)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[23]= new Array();
 choices[23][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[23][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[23][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[23][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[23] = choices[23][0];
 units[23] = "1";
 comments[23] = "Id Pregunta: 187. CONSTITUCION1978";


//  Id pregunta: 604 Año de creación de pregunta: 2016
 questions[24]= "25)  ITIL v3, define:";
 choices[24]= new Array();
 choices[24][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[24][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[24][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[24][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[24] = choices[24][0];
 units[24] = "101";
 comments[24] = "Id Pregunta: 604. Junta de Extremadura A1 2015";


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[25]= new Array();
 choices[25][0] = "Perceptible";
 choices[25][1] = "Operable";
 choices[25][2] = "Comprensible";
 choices[25][3] = "Robusto";
 answers[25] = choices[25][2];
 units[25] = "42";
 comments[25] = "Id Pregunta: 83. AGE A1 2015";


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[26]= "27)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[26]= new Array();
 choices[26][0] = "Pas&oacute; de 518 a 626.";
 choices[26][1] = "Pas&oacute; de 434 a 518.";
 choices[26][2] = "Pas&oacute; de 345 a 512.";
 choices[26][3] = "Pas&oacute; de 435 a 610.";
 answers[26] = choices[26][1];
 units[26] = "5";
 comments[26] = "Id Pregunta: 344. UNION EUROPEA";


//  Id pregunta: 273 Año de creación de pregunta: 2016
 questions[27]= "28)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[27]= new Array();
 choices[27][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[27][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[27][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[27][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[27] = choices[27][1];
 units[27] = "92";
 comments[27] = "Id Pregunta: 273. INTEGRACION CONTINUA";


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[28]= "29)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[28]= new Array();
 choices[28][0] = "786 Diputados como m&aacute;ximo.";
 choices[28][1] = "600 Diputados como m&aacute;ximo.";
 choices[28][2] = "650 Diputados como m&aacute;ximo.";
 choices[28][3] = "732 Diputados como m&aacute;ximo.";
 answers[28] = choices[28][0];
 units[28] = "5";
 comments[28] = "Id Pregunta: 360. UNION EUROPEA";


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[29]= "30)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[29]= new Array();
 choices[29][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[29][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[29][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[29][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[29] = choices[29][1];
 units[29] = "14";
 comments[29] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";


//  Id pregunta: 22 Año de creación de pregunta: 2016
 questions[30]= "31)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[30]= new Array();
 choices[30][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[30][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[30][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[30][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[30] = choices[30][1];
 units[30] = "26";
 comments[30] = "Id Pregunta: 22. AGE A1 2015";


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[31]= new Array();
 choices[31][0] = "Veinte.";
 choices[31][1] = "Quince.";
 choices[31][2] = "Diez.";
 choices[31][3] = "Doce.";
 answers[31] = choices[31][1];
 units[31] = "1";
 comments[31] = "Id Pregunta: 264. CONSTITUCION1978";


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[32]= "33)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[32]= new Array();
 choices[32][0] = "El presidente de las Cortes Generales.";
 choices[32][1] = "El Presidente del Gobierno.";
 choices[32][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[32][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[32] = choices[32][3];
 units[32] = "10";
 comments[32] = "Id Pregunta: 500. PRESUPUESTOS GENERALES";


//  Id pregunta: 186 Año de creación de pregunta: 2016
 questions[33]= "34)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[33]= new Array();
 choices[33][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[33][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[33][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[33][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[33] = choices[33][2];
 units[33] = "1";
 comments[33] = "Id Pregunta: 186. CONSTITUCION1978";


//  Id pregunta: 16 Año de creación de pregunta: 2016
 questions[34]= "35)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[34][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[34][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[34][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[34] = choices[34][3];
 units[34] = "19";
 comments[34] = "Id Pregunta: 16. AGE A1 2015";


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[35]= "36)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[35]= new Array();
 choices[35][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[35][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[35][2] = "Ambas son correctas.";
 choices[35][3] = "A y B son incorrectas.";
 answers[35] = choices[35][2];
 units[35] = "14";
 comments[35] = "Id Pregunta: 401. POLITICAS DE IGUALDAD";


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[36]= "37)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[36]= new Array();
 choices[36][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[36][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[36][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[36][3] = "Todas son correctas.";
 answers[36] = choices[36][3];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 824. Ley 40/2015";


//  Id pregunta: 730 Año de creación de pregunta: 2016
 questions[37]= "38)  Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban:";
 choices[37]= new Array();
 choices[37][0] = "Se definen iteraciones";
 choices[37][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[37][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[37][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[37] = choices[37][1];
 units[37] = "34, 84";
 comments[37] = "Id Pregunta: 730. Metodologias &aacute;giles";


//  Id pregunta: 753 Año de creación de pregunta: 2016
 questions[38]= "39)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[38]= new Array();
 choices[38][0] = "la Administraci&oacute;n General del Estado";
 choices[38][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[38][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[38][3] = "el sector p&uacute;blico y privado institucional";
 answers[38] = choices[38][3];
 units[38] = "4, 7, 8, 9";
 comments[38] = "Id Pregunta: 753. Ley 40/2015";


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[39]= "40)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[39]= new Array();
 choices[39][0] = "El derecho a la propiedad privada.";
 choices[39][1] = "El derecho de asociaci&oacute;n.";
 choices[39][2] = "El derecho de fundaci&oacute;n.";
 choices[39][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[39] = choices[39][1];
 units[39] = "1";
 comments[39] = "Id Pregunta: 174. CONSTITUCION1978";


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[40]= "41)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[40]= new Array();
 choices[40][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[40][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[40][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[40][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[40] = choices[40][3];
 units[40] = "12";
 comments[40] = "Id Pregunta: 130. Leyes modelo econ&oacute;mico";


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[41]= "42)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[41]= new Array();
 choices[41][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[41][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[41][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[41][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[41] = choices[41][0];
 units[41] = "7";
 comments[41] = "Id Pregunta: 518. LEY 39/2015";


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[42]= "43)  El Tribunal de Justicia se cre&oacute; en:";
 choices[42]= new Array();
 choices[42][0] = "El Tratado de la CECA.";
 choices[42][1] = "El Tratado de Niza.";
 choices[42][2] = "El Tratado de &Aacute;msterdam.";
 choices[42][3] = "El Tratado de Lisboa.";
 answers[42] = choices[42][0];
 units[42] = "5";
 comments[42] = "Id Pregunta: 308. UNION EUROPEA";


//  Id pregunta: 55 Año de creación de pregunta: 2016
 questions[43]= "44)  WS-Security contiene especificaciones sobre:";
 choices[43]= new Array();
 choices[43][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[43][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[43][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[43][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[43] = choices[43][1];
 units[43] = "119";
 comments[43] = "Id Pregunta: 55. AGE A1 2015";


//  Id pregunta: 358 Año de creación de pregunta: 2016
 questions[44]= "45)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[44]= new Array();
 choices[44][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[44][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[44][2] = "c) Todas las respuestas son correctas.";
 choices[44][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[44] = choices[44][1];
 units[44] = "5";
 comments[44] = "Id Pregunta: 358. UNION EUROPEA";


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[45]= new Array();
 choices[45][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[45][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[45][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[45][3] = "El pago de subsidios a parados";
 answers[45] = choices[45][3];
 units[45] = "15";
 comments[45] = "Id Pregunta: 116. ";


//  Id pregunta: 750 Año de creación de pregunta: 2016
 questions[46]= "47)  Es falso que:";
 choices[46]= new Array();
 choices[46][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[46][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[46][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[46][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[46] = choices[46][1];
 units[46] = "18, 20";
 comments[46] = "Id Pregunta: 750. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 463 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[47]= new Array();
 choices[47][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[47][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[47][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[47][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[47] = choices[47][3];
 units[47] = "10";
 comments[47] = "Id Pregunta: 463. PRESUPUESTOS GENERALES";


//  Id pregunta: 25 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Mediante qu&eacute; tipo de objetos se implementa el acceso a los recursos gestionados con la tecnolog&iacute;a JMX?";
 choices[48]= new Array();
 choices[48][0] = "SessionBean";
 choices[48][1] = "JavaBean";
 choices[48][2] = "MBeans";
 choices[48][3] = "MessageDrivenBean";
 answers[48] = choices[48][2];
 units[48] = "64";
 comments[48] = "Id Pregunta: 25. AGE A1 2015";


//  Id pregunta: 571 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[49]= new Array();
 choices[49][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[49][1] = "Entrada en la Uni&oacute;n Europea";
 choices[49][2] = "Pactos de la Moncloa";
 choices[49][3] = "Ingreso en la ONU";
 answers[49] = choices[49][3];
 units[49] = "12";
 comments[49] = "Id Pregunta: 571. Modelo econ&oacute;mico";


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[50]= "51)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[50]= new Array();
 choices[50][0] = "solo mediante ley";
 choices[50][1] = "reglamentariamente";
 choices[50][2] = "mediante ley o reglamentariamente";
 choices[50][3] = "ninguna es correcta";
 answers[50] = choices[50][1];
 units[50] = "7";
 comments[50] = "Id Pregunta: 512. LEY 39/2015";


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[51]= new Array();
 choices[51][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[51][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[51][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[51][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[51] = choices[51][0];
 units[51] = "1";
 comments[51] = "Id Pregunta: 202. CONSTITUCION1978";


//  Id pregunta: 428 Año de creación de pregunta: 2016
 questions[52]= "53)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[52]= new Array();
 choices[52][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[52][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[52][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[52][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[52] = choices[52][2];
 units[52] = "14";
 comments[52] = "Id Pregunta: 428. POLITICAS DE IGUALDAD";


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[53]= "54)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[53]= new Array();
 choices[53][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[53][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[53][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[53][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[53] = choices[53][2];
 units[53] = "22";
 comments[53] = "Id Pregunta: 128. ";


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[54]= new Array();
 choices[54][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[54][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[54][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[54][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[54] = choices[54][1];
 units[54] = "7";
 comments[54] = "Id Pregunta: 156. Ley 39/2015, Art&iacute;culo 40";


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[55]= "56)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[55]= new Array();
 choices[55][0] = "un &oacute;rgano superior";
 choices[55][1] = "un &oacute;rgano directivo";
 choices[55][2] = "un &oacute;rgano superior o directivo";
 choices[55][3] = "ninguna es correcta";
 answers[55] = choices[55][2];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 783. Ley 40/2015";


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[56]= "57)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[56]= new Array();
 choices[56][0] = "Tres a&ntilde;os.";
 choices[56][1] = "Dos a&ntilde;os y medio.";
 choices[56][2] = "Cinco a&ntilde;os.";
 choices[56][3] = "Seis a&ntilde;os.";
 answers[56] = choices[56][3];
 units[56] = "5";
 comments[56] = "Id Pregunta: 291. UNION EUROPEA";


//  Id pregunta: 739 Año de creación de pregunta: 2016
 questions[57]= "58)  En relaci&oacute;n al principio rector Orientaci&oacute;n al usuario del servicio del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[57]= new Array();
 choices[57][0] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y seguridad.";
 choices[57][1] = "Es necesario redefinir los servicios empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 choices[57][2] = "Se requiere modernizar los servicios p&uacute;blicos empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de transparencia, usabilidad, simplicidad y accesibilidad.";
 choices[57][3] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 answers[57] = choices[57][0];
 units[57] = "28";
 comments[57] = "Id Pregunta: 739. Estrategia TIC";


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[58]= new Array();
 choices[58][0] = "Conferencia de Presidentes.";
 choices[58][1] = "Convenios de colaboraci&oacute;n.";
 choices[58][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[58][3] = "Conferencias Sectoriales.";
 answers[58] = choices[58][0];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 834. Ley 40/2015";


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Qu&eacute; es el machine learning?";
 choices[59]= new Array();
 choices[59][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[59][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[59][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[59][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[59] = choices[59][0];
 units[59] = "73";
 comments[59] = "Id Pregunta: 657. ";


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[60]= new Array();
 choices[60][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[60][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[60][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[60][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[60] = choices[60][0];
 units[60] = "15";
 comments[60] = "Id Pregunta: 114. ";


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[61]= new Array();
 choices[61][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[61][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[61][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[61][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[61] = choices[61][3];
 units[61] = "10";
 comments[61] = "Id Pregunta: 458. PRESUPUESTOS GENERALES";


//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[62]= "63)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[62]= new Array();
 choices[62][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[62][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[62][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[62][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[62] = choices[62][2];
 units[62] = "53";
 comments[62] = "Id Pregunta: 65. AGE A1 2015";


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[63]= "64)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[63]= new Array();
 choices[63][0] = "Un plan de igualdad.";
 choices[63][1] = "Un informe de impacto de g&eacute;nero.";
 choices[63][2] = "Un programa de igualdad.";
 choices[63][3] = "Todas son correctas.";
 answers[63] = choices[63][1];
 units[63] = "14";
 comments[63] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[64]= "65)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[64]= new Array();
 choices[64][0] = "los Subsecretarios y Secretarios generales";
 choices[64][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[64][2] = "los Secretarios de Estado";
 choices[64][3] = "los Subdirectores generales";
 answers[64] = choices[64][2];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 777. Ley 40/2015";


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[65]= new Array();
 choices[65][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[65][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[65][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[65][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[65] = choices[65][3];
 units[65] = "46";
 comments[65] = "Id Pregunta: 80. AGE A1 2015";


//  Id pregunta: 577 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[66]= new Array();
 choices[66][0] = "El 2 de Octubre de 2015";
 choices[66][1] = "El 15 de Septiembre de 2015";
 choices[66][2] = "El 1 de Octubre de 2015";
 choices[66][3] = "El 5 de Octubre de 2015";
 answers[66] = choices[66][0];
 units[66] = "19";
 comments[66] = "Id Pregunta: 577. Estrategia TIC";


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;les son las caracter&iacute;sticas del sprint 0 en SCRUM?";
 choices[67]= new Array();
 choices[67][0] = "Se dejan listos los entornos de desarrollo";
 choices[67][1] = "Se trabaja en el product backlog, dejando listos los product backlog &iacute;tems priorizados y estimados";
 choices[67][2] = "Se hace una previsi&oacute;n del reparto de historias de usuario por iteraci&oacute;n";
 choices[67][3] = "Todas las anteriores son correctas";
 answers[67] = choices[67][3];
 units[67] = "34, 84";
 comments[67] = "Id Pregunta: 723. Metodologias &aacute;giles";


//  Id pregunta: 469 Año de creación de pregunta: 2016
 questions[68]= "69)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[68]= new Array();
 choices[68][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[68][1] = "Las inversiones reales y financieras.";
 choices[68][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[68][3] = "Las transferencias de capital y las inversiones reales.";
 answers[68] = choices[68][3];
 units[68] = "10";
 comments[68] = "Id Pregunta: 469. PRESUPUESTOS GENERALES";


//  Id pregunta: 568 Año de creación de pregunta: 2016
 questions[69]= "70)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[69]= new Array();
 choices[69][0] = "Alrededor de un 26% del PIB";
 choices[69][1] = "Alrededor de un 11% del PIB";
 choices[69][2] = "Alrededor de un 34% del PIB";
 choices[69][3] = "Alrededor de un 7% del PIB";
 answers[69] = choices[69][1];
 units[69] = "12";
 comments[69] = "Id Pregunta: 568. Modelo econ&oacute;mico";


//  Id pregunta: 751 Año de creación de pregunta: 2016
 questions[70]= "71)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[70]= new Array();
 choices[70][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[70][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[70][2] = "b) y d) son verdaderas";
 choices[70][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[70] = choices[70][1];
 units[70] = "18, 20";
 comments[70] = "Id Pregunta: 751. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[71]= "72)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[71]= new Array();
 choices[71][0] = "Un a&ntilde;o prorrogable";
 choices[71][1] = "Dos a&ntilde;os no prorrogables";
 choices[71][2] = "Un a&ntilde;o no prorrogable";
 choices[71][3] = "Dos a&ntilde;os prorrogables";
 answers[71] = choices[71][2];
 units[71] = "37";
 comments[71] = "Id Pregunta: 86. AGE A1 2015";


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[72]= "73)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[72]= new Array();
 choices[72][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[72][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo;";
 choices[72][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[72][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea.";
 answers[72] = choices[72][0];
 units[72] = "34, 84";
 comments[72] = "Id Pregunta: 725. Metodologias &aacute;giles";


//  Id pregunta: 338 Año de creación de pregunta: 2016
 questions[73]= "74)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[73]= new Array();
 choices[73][0] = "CO.PER.";
 choices[73][1] = "COMPER.";
 choices[73][2] = "CO.RE.PER.";
 choices[73][3] = "CO.PE.RRE.";
 answers[73] = choices[73][2];
 units[73] = "5";
 comments[73] = "Id Pregunta: 338. UNION EUROPEA";


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[74]= new Array();
 choices[74][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[74][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[74][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[74][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[74] = choices[74][2];
 units[74] = "10";
 comments[74] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";


