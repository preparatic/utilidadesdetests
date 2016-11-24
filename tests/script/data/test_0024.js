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

//  Id pregunta: 10220 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[0]= new Array();
 choices[0][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[0][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[0][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[0][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[0] = choices[0][0];
 units[0] = "1";
 comments[0] = "Id Pregunta: 10220. CONSTITUCION1978";


//  Id pregunta: 10603 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[1]= new Array();
 choices[1][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[1][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[1][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[1][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[1] = choices[1][3];
 units[1] = "101";
 comments[1] = "Id Pregunta: 10603. Junta de Extremadura A1 2015";


//  Id pregunta: 10625 Año de creación de pregunta: 2016
 questions[2]= "3)  En UML &iquest;qu&eacute; es una m&aacute;quina de estados?";
 choices[2]= new Array();
 choices[2][0] = "Es un modelo computacional representado por grafos, en los que los estados son los v&eacute;rtices.";
 choices[2][1] = "Es un dispositivo que puede ser programado para cumplir determinadas tareas de control en sistema autom&aacute;ticos.";
 choices[2][2] = "Es un comportamiento que especifica las secuencias de estados por las que pasa un objeto a lo largo de su vida en respuesta a eventos, junto con sus respuestas a esos eventos.";
 choices[2][3] = "Es un sistema l&oacute;gico que posee una entrada, un procesador intermedio y una salida resultado de la aplicaci&oacute;n del procesamiento sobre la entrada.";
 answers[2] = choices[2][2];
 units[2] = "89";
 comments[2] = "Id Pregunta: 10625. Junta de Extremadura A1 2015";


//  Id pregunta: 10103 Año de creación de pregunta: 2016
 questions[3]= "4)  En qu&eacute; consiste el principio BASE:";
 choices[3]= new Array();
 choices[3][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[3][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[3][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[3][3] = "Todas las anteriores son falsas";
 answers[3] = choices[3][3];
 units[3] = "73";
 comments[3] = "Id Pregunta: 10103. ";


//  Id pregunta: 10082 Año de creación de pregunta: 2016
 questions[4]= "5)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[4]= new Array();
 choices[4][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[4][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[4][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[4][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[4] = choices[4][3];
 units[4] = "41";
 comments[4] = "Id Pregunta: 10082. AGE A1 2015";


//  Id pregunta: 10590 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[5]= new Array();
 choices[5][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[5][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[5][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[5][3] = "Todos los anteriores";
 answers[5] = choices[5][3];
 units[5] = "19";
 comments[5] = "Id Pregunta: 10590. Estrategia TIC";


//  Id pregunta: 10065 Año de creación de pregunta: 2016
 questions[6]= "7)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[6]= new Array();
 choices[6][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[6][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[6][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[6][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[6] = choices[6][2];
 units[6] = "53";
 comments[6] = "Id Pregunta: 10065. AGE A1 2015";


//  Id pregunta: 10075 Año de creación de pregunta: 2016
 questions[7]= "8)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[7]= new Array();
 choices[7][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[7][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[7][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[7][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[7] = choices[7][0];
 units[7] = "35";
 comments[7] = "Id Pregunta: 10075. AGE A1 2015";


//  Id pregunta: 10512 Año de creación de pregunta: 2016
 questions[8]= "9)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[8]= new Array();
 choices[8][0] = "solo mediante ley";
 choices[8][1] = "reglamentariamente";
 choices[8][2] = "mediante ley o reglamentariamente";
 choices[8][3] = "ninguna es correcta";
 answers[8] = choices[8][1];
 units[8] = "7";
 comments[8] = "Id Pregunta: 10512. LEY 39/2015";


//  Id pregunta: 10019 Año de creación de pregunta: 2016
 questions[9]= "10)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[9]= new Array();
 choices[9][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[9][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[9][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[9][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[9] = choices[9][2];
 units[9] = "47";
 comments[9] = "Id Pregunta: 10019. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10086 Año de creación de pregunta: 2016
 questions[10]= "11)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[10]= new Array();
 choices[10][0] = "Un a&ntilde;o prorrogable";
 choices[10][1] = "Dos a&ntilde;os no prorrogables";
 choices[10][2] = "Un a&ntilde;o no prorrogable";
 choices[10][3] = "Dos a&ntilde;os prorrogables";
 answers[10] = choices[10][2];
 units[10] = "37";
 comments[10] = "Id Pregunta: 10086. AGE A1 2015";


//  Id pregunta: 10105 Año de creación de pregunta: 2016
 questions[11]= "12)  Entre las caracter&iacute;sticas de Big Data se encuentra:";
 choices[11]= new Array();
 choices[11][0] = "Gran volumen de informaci&oacute;n";
 choices[11][1] = "Gran variedad de datos";
 choices[11][2] = "Se analizan datos a gran velocidad";
 choices[11][3] = "Todas las anteriores son verdaderas";
 answers[11] = choices[11][3];
 units[11] = "73";
 comments[11] = "Id Pregunta: 10105. ";


//  Id pregunta: 10240 Año de creación de pregunta: 2016
 questions[12]= "13)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[12]= new Array();
 choices[12][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[12][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[12][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[12][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[12] = choices[12][0];
 units[12] = "1";
 comments[12] = "Id Pregunta: 10240. CONSTITUCION1978";


//  Id pregunta: 10037 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[13]= new Array();
 choices[13][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[13][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[13][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[13][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[13] = choices[13][3];
 units[13] = "66";
 comments[13] = "Id Pregunta: 10037. AGE A1 2015";


//  Id pregunta: 10341 Año de creación de pregunta: 2016
 questions[14]= "15)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[14]= new Array();
 choices[14][0] = "623";
 choices[14][1] = "649";
 choices[14][2] = "626";
 choices[14][3] = "565";
 answers[14] = choices[14][2];
 units[14] = "5";
 comments[14] = "Id Pregunta: 10341. UNION EUROPEA";


//  Id pregunta: 10151 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[15]= new Array();
 choices[15][0] = "las personas jur&iacute;dicas ";
 choices[15][1] = "las entidades con personalidad jur&iacute;dica";
 choices[15][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[15][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[15] = choices[15][1];
 units[15] = "7";
 comments[15] = "Id Pregunta: 10151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 10080 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[16]= new Array();
 choices[16][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[16][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[16][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[16][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[16] = choices[16][3];
 units[16] = "46";
 comments[16] = "Id Pregunta: 10080. AGE A1 2015";


//  Id pregunta: 10001 Año de creación de pregunta: 2016
 questions[17]= "18)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[17]= new Array();
 choices[17][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[17][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[17][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[17][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[17] = choices[17][2];
 units[17] = "26";
 comments[17] = "Id Pregunta: 10001. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10163 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[18]= new Array();
 choices[18][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[18][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[18][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[18][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[18] = choices[18][0];
 units[18] = "19";
 comments[18] = "Id Pregunta: 10163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 10204 Año de creación de pregunta: 2016
 questions[19]= "20)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[19]= new Array();
 choices[19][0] = "Decretos Legislativos.";
 choices[19][1] = "Decretos-leyes.";
 choices[19][2] = "Leyes de bases.";
 choices[19][3] = "Reales Decretos del Consejo de Ministros.";
 answers[19] = choices[19][0];
 units[19] = "1";
 comments[19] = "Id Pregunta: 10204. CONSTITUCION1978";


//  Id pregunta: 10371 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[20]= new Array();
 choices[20][0] = "En 1988.";
 choices[20][1] = "En 1981.";
 choices[20][2] = "En 1982.";
 choices[20][3] = "En 1986.";
 answers[20] = choices[20][3];
 units[20] = "5";
 comments[20] = "Id Pregunta: 10371. UNION EUROPEA";


//  Id pregunta: 10215 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[21]= new Array();
 choices[21][0] = "Publicidad.";
 choices[21][1] = "Constituci&oacute;n.";
 choices[21][2] = "Legalidad.";
 choices[21][3] = "Creaci&oacute;n.";
 answers[21] = choices[21][0];
 units[21] = "1";
 comments[21] = "Id Pregunta: 10215. CONSTITUCION1978";


//  Id pregunta: 10489 Año de creación de pregunta: 2016
 questions[22]= "23)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[22]= new Array();
 choices[22][0] = "Dos.";
 choices[22][1] = "Cuatro.";
 choices[22][2] = "Cinco.";
 choices[22][3] = "Tres.";
 answers[22] = choices[22][1];
 units[22] = "10";
 comments[22] = "Id Pregunta: 10489. PRESUPUESTOS GENERALES";


//  Id pregunta: 10132 Año de creación de pregunta: 2016
 questions[23]= "24)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[23]= new Array();
 choices[23][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[23][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[23][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[23][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[23] = choices[23][3];
 units[23] = "12";
 comments[23] = "Id Pregunta: 10132. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10574 Año de creación de pregunta: 2016
 questions[24]= "25)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[24]= new Array();
 choices[24][0] = "Mercurial, Git y Apache Subversion.";
 choices[24][1] = "Gimp, Mercurial y Git.";
 choices[24][2] = "RedMine, Planner y OpenProj.";
 choices[24][3] = "Cassandra, Git y REDIS.";
 answers[24] = choices[24][0];
 units[24] = "92";
 comments[24] = "Id Pregunta: 10574. Tema 92. TAI 2016.";


//  Id pregunta: 10009 Año de creación de pregunta: 2016
 questions[25]= "26)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[25]= new Array();
 choices[25][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[25][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[25][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[25][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[25] = choices[25][1];
 units[25] = "95";
 comments[25] = "Id Pregunta: 10009. AGE A1 2015";


//  Id pregunta: 10645 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[26]= new Array();
 choices[26][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[26][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[26][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[26][3] = "El Instituto de la Mujer de Extremadura.";
 answers[26] = choices[26][3];
 units[26] = "14";
 comments[26] = "Id Pregunta: 10645. Junta de Extremadura A1 2015";


//  Id pregunta: 10281 Año de creación de pregunta: 2016
 questions[27]= "28)  Se&ntilde;ale la respuesta falsa:";
 choices[27]= new Array();
 choices[27][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[27][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[27][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[27][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[27] = choices[27][3];
 units[27] = "5";
 comments[27] = "Id Pregunta: 10281. UNION EUROPEA";


//  Id pregunta: 10442 Año de creación de pregunta: 2016
 questions[28]= "29)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:";
 choices[28]= new Array();
 choices[28][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[28][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[28][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[28][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[28] = choices[28][3];
 units[28] = "43";
 comments[28] = "Id Pregunta: 10442. SERVICIOS COMUNES";


//  Id pregunta: 10139 Año de creación de pregunta: 2016
 questions[29]= "30)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[29]= new Array();
 choices[29][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[29][1] = "Static &amp; Active process for REsolution Bank.";
 choices[29][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[29][3] = "Super Active REsponse for Banks";
 answers[29] = choices[29][0];
 units[29] = "12";
 comments[29] = "Id Pregunta: 10139. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10350 Año de creación de pregunta: 2016
 questions[30]= "31)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[30]= new Array();
 choices[30][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[30][1] = "Uno de sus miembros.";
 choices[30][2] = "La Comisi&oacute;n.";
 choices[30][3] = "Todas las respuestas son correctas.";
 answers[30] = choices[30][3];
 units[30] = "5";
 comments[30] = "Id Pregunta: 10350. UNION EUROPEA";


//  Id pregunta: 10319 Año de creación de pregunta: 2016
 questions[31]= "32)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[31]= new Array();
 choices[31][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[31][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[31][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[31][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[31] = choices[31][0];
 units[31] = "5";
 comments[31] = "Id Pregunta: 10319. UNION EUROPEA";


//  Id pregunta: 10193 Año de creación de pregunta: 2016
 questions[32]= "33)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[32]= new Array();
 choices[32][0] = "3 a&ntilde;os.";
 choices[32][1] = "5 a&ntilde;os.";
 choices[32][2] = "4 a&ntilde;os.";
 choices[32][3] = "6 a&ntilde;os.";
 answers[32] = choices[32][1];
 units[32] = "1";
 comments[32] = "Id Pregunta: 10193. CONSTITUCION1978";


//  Id pregunta: 10499 Año de creación de pregunta: 2016
 questions[33]= "34)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[33]= new Array();
 choices[33][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[33][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[33][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[33][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[33] = choices[33][0];
 units[33] = "10";
 comments[33] = "Id Pregunta: 10499. PRESUPUESTOS GENERALES";


//  Id pregunta: 10338 Año de creación de pregunta: 2016
 questions[34]= "35)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[34]= new Array();
 choices[34][0] = "CO.PER.";
 choices[34][1] = "COMPER.";
 choices[34][2] = "CO.RE.PER.";
 choices[34][3] = "CO.PE.RRE.";
 answers[34] = choices[34][2];
 units[34] = "5";
 comments[34] = "Id Pregunta: 10338. UNION EUROPEA";


//  Id pregunta: 10498 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[35]= new Array();
 choices[35][0] = "En t&iacute;tulos-valores.";
 choices[35][1] = "Las respuestas a) y b) son correctas.";
 choices[35][2] = "Las respuestas a) y b) no son correctas.";
 choices[35][3] = "En cuenta.";
 answers[35] = choices[35][1];
 units[35] = "10";
 comments[35] = "Id Pregunta: 10498. PRESUPUESTOS GENERALES";


//  Id pregunta: 10276 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale la respuesta falsa";
 choices[36]= new Array();
 choices[36][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[36][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[36][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[36][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[36] = choices[36][3];
 units[36] = "22";
 comments[36] = "Id Pregunta: 10276. LEY DE TRANSPARENCIA";


//  Id pregunta: 10088 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[37]= new Array();
 choices[37][0] = "Diagrama de clases";
 choices[37][1] = "Diagrama de componentes";
 choices[37][2] = "Diagrama de estructura";
 choices[37][3] = "Diagrama de paquetes";
 answers[37] = choices[37][0];
 units[37] = "91";
 comments[37] = "Id Pregunta: 10088. AGE A1 2015";


//  Id pregunta: 10188 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[38]= new Array();
 choices[38][0] = "No, en ning&uacute;n caso.";
 choices[38][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[38][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[38][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[38] = choices[38][3];
 units[38] = "1";
 comments[38] = "Id Pregunta: 10188. CONSTITUCION1978";


//  Id pregunta: 10355 Año de creación de pregunta: 2016
 questions[39]= "40)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[39]= new Array();
 choices[39][0] = "Son vinculantes solamente.";
 choices[39][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[39][2] = "Son preceptivos y vinculantes.";
 choices[39][3] = "Son preceptivos y no vinculantes.";
 answers[39] = choices[39][1];
 units[39] = "5";
 comments[39] = "Id Pregunta: 10355. UNION EUROPEA";


//  Id pregunta: 10059 Año de creación de pregunta: 2016
 questions[40]= "41)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[40]= new Array();
 choices[40][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[40][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[40][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[40][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[40] = choices[40][3];
 units[40] = "101";
 comments[40] = "Id Pregunta: 10059. AGE A1 2015";


//  Id pregunta: 10375 Año de creación de pregunta: 2016
 questions[41]= "42)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[41]= new Array();
 choices[41][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[41][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[41][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[41][3] = "Todas las respuestas son correctas.";
 answers[41] = choices[41][3];
 units[41] = "5";
 comments[41] = "Id Pregunta: 10375. UNION EUROPEA";


//  Id pregunta: 10083 Año de creación de pregunta: 2016
 questions[42]= "43)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[42]= new Array();
 choices[42][0] = "Perceptible";
 choices[42][1] = "Operable";
 choices[42][2] = "Comprensible";
 choices[42][3] = "Robusto";
 answers[42] = choices[42][2];
 units[42] = "42";
 comments[42] = "Id Pregunta: 10083. AGE A1 2015";


//  Id pregunta: 10074 Año de creación de pregunta: 2016
 questions[43]= "44)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[43]= new Array();
 choices[43][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[43][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[43][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[43][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[43] = choices[43][3];
 units[43] = "106";
 comments[43] = "Id Pregunta: 10074. AGE A1 2015";


//  Id pregunta: 10519 Año de creación de pregunta: 2016
 questions[44]= "45)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[44]= new Array();
 choices[44][0] = "un art&iacute;culo";
 choices[44][1] = "dos art&iacute;culos";
 choices[44][2] = "tres art&iacute;culos";
 choices[44][3] = "cuatro art&iacute;culos";
 answers[44] = choices[44][1];
 units[44] = "7";
 comments[44] = "Id Pregunta: 10519. LEY 39/2015";


//  Id pregunta: 10461 Año de creación de pregunta: 2016
 questions[45]= "46)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[45]= new Array();
 choices[45][0] = "A los ministros.";
 choices[45][1] = "Las respuestas a) y b) son correctas.";
 choices[45][2] = "Las respuestas a) y b) no son correctas.";
 choices[45][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[45] = choices[45][1];
 units[45] = "10";
 comments[45] = "Id Pregunta: 10461. PRESUPUESTOS GENERALES";


//  Id pregunta: 10190 Año de creación de pregunta: 2016
 questions[46]= "47)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[46]= new Array();
 choices[46][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[46][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[46][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[46][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[46] = choices[46][2];
 units[46] = "1";
 comments[46] = "Id Pregunta: 10190. CONSTITUCION1978";


//  Id pregunta: 10530 Año de creación de pregunta: 2016
 questions[47]= "48)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[47]= new Array();
 choices[47][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[47][1] = "mediante resoluci&oacute;n judicial especial";
 choices[47][2] = "&uacute;nicamente mediante poder notarial";
 choices[47][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[47] = choices[47][3];
 units[47] = "7";
 comments[47] = "Id Pregunta: 10530. LEY 39/2015";


//  Id pregunta: 10333 Año de creación de pregunta: 2016
 questions[48]= "49)  Est&aacute;n legitimados para interponer el recurso de carencia del art. 175 TCE:";
 choices[48]= new Array();
 choices[48][0] = "Las instituciones comunitarias.";
 choices[48][1] = "Los Estados miembros y las instituciones comunitarias.";
 choices[48][2] = "Los Estados miembros.";
 choices[48][3] = "Los nacionales de los Estados miembros.";
 answers[48] = choices[48][1];
 units[48] = "5";
 comments[48] = "Id Pregunta: 10333. UNION EUROPEA";


//  Id pregunta: 10531 Año de creación de pregunta: 2016
 questions[49]= "50)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[49]= new Array();
 choices[49][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[49][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[49][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[49][3] = "todas son correctas";
 answers[49] = choices[49][3];
 units[49] = "7";
 comments[49] = "Id Pregunta: 10531. LEY 39/2015";


//  Id pregunta: 10369 Año de creación de pregunta: 2016
 questions[50]= "51)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[50]= new Array();
 choices[50][0] = "Son actos individuales no normativos.";
 choices[50][1] = "Poseen alcance general.";
 choices[50][2] = "Son actos normativos.";
 choices[50][3] = "No son obligatorias.";
 answers[50] = choices[50][0];
 units[50] = "5";
 comments[50] = "Id Pregunta: 10369. UNION EUROPEA";


//  Id pregunta: 10526 Año de creación de pregunta: 2016
 questions[51]= "52)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[51]= new Array();
 choices[51][0] = "tienen capacidad de obrar limitada";
 choices[51][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[51][2] = "no tienen capacidad de obrar";
 choices[51][3] = "ninguna es correcta";
 answers[51] = choices[51][2];
 units[51] = "7";
 comments[51] = "Id Pregunta: 10526. LEY 39/2015";


//  Id pregunta: 10377 Año de creación de pregunta: 2016
 questions[52]= "53)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[52]= new Array();
 choices[52][0] = "Tener una estructura institucional.";
 choices[52][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[52][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[52][3] = "Todas las respuestas son correctas.";
 answers[52] = choices[52][3];
 units[52] = "5";
 comments[52] = "Id Pregunta: 10377. UNION EUROPEA";


//  Id pregunta: 10546 Año de creación de pregunta: 2016
 questions[53]= "54)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[53]= new Array();
 choices[53][0] = "Conformidad";
 choices[53][1] = "Responsabilidad";
 choices[53][2] = "Adquisici&oacute;n";
 choices[53][3] = "Desempe&ntilde;o";
 answers[53] = choices[53][0];
 units[53] = "26";
 comments[53] = "Id Pregunta: 10546. Gobernanza TIC";


//  Id pregunta: 10576 Año de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[54]= new Array();
 choices[54][0] = "PostgreSQL";
 choices[54][1] = "Datawarehouse";
 choices[54][2] = "Snowflake";
 choices[54][3] = "CouchDB";
 answers[54] = choices[54][0];
 units[54] = "61";
 comments[54] = "Id Pregunta: 10576. Tema 61. TAI 2016.";


//  Id pregunta: 10111 Año de creación de pregunta: 2016
 questions[55]= "56)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[55]= new Array();
 choices[55][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[55][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[55][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[55][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[55] = choices[55][0];
 units[55] = "15";
 comments[55] = "Id Pregunta: 10111. ";


//  Id pregunta: 10413 Año de creación de pregunta: 2016
 questions[56]= "57)  Gozar&aacute;n de los derecho derivados del principio de igualdad de trato y de la prohibici&oacute;n de discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[56]= new Array();
 choices[56][0] = "La mujeres.";
 choices[56][1] = "Lo hombres.";
 choices[56][2] = "Todas las personas.";
 choices[56][3] = "Las mujeres y ni&ntilde;os menores de 16 a&ntilde;os.";
 answers[56] = choices[56][2];
 units[56] = "14";
 comments[56] = "Id Pregunta: 10413. POLITICAS DE IGUALDAD";


//  Id pregunta: 10469 Año de creación de pregunta: 2016
 questions[57]= "58)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[57]= new Array();
 choices[57][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[57][1] = "Las inversiones reales y financieras.";
 choices[57][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[57][3] = "Las transferencias de capital y las inversiones reales.";
 answers[57] = choices[57][3];
 units[57] = "10";
 comments[57] = "Id Pregunta: 10469. PRESUPUESTOS GENERALES";


//  Id pregunta: 10668 Año de creación de pregunta: 2016
 questions[58]= "59)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[58]= new Array();
 choices[58][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[58][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[58][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[58][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[58] = choices[58][3];
 units[58] = "7";
 comments[58] = "Id Pregunta: 10668. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 10161 Año de creación de pregunta: 2016
 questions[59]= "60)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[59]= new Array();
 choices[59][0] = "Principio de solo una vez";
 choices[59][1] = "Apertura y transparencia";
 choices[59][2] = "Confianza y seguridad";
 choices[59][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[59] = choices[59][3];
 units[59] = "19";
 comments[59] = "Id Pregunta: 10161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";


//  Id pregunta: 10584 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[60]= new Array();
 choices[60][0] = "Bienalmente";
 choices[60][1] = "Anualmente";
 choices[60][2] = "Semestralmente";
 choices[60][3] = "Cada cuatro a&ntilde;os";
 answers[60] = choices[60][1];
 units[60] = "19";
 comments[60] = "Id Pregunta: 10584. Estrategia TIC";


//  Id pregunta: 10332 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[61]= new Array();
 choices[61][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[61][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[61][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[61][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[61] = choices[61][3];
 units[61] = "5";
 comments[61] = "Id Pregunta: 10332. UNION EUROPEA";


//  Id pregunta: 10378 Año de creación de pregunta: 2016
 questions[62]= "63)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[62]= new Array();
 choices[62][0] = "Quince miembros.";
 choices[62][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[62][2] = "Los miembros que determine el Consejo.";
 choices[62][3] = "Un Presidente y quince miembros.";
 answers[62] = choices[62][1];
 units[62] = "14";
 comments[62] = "Id Pregunta: 10378. UNION EUROPEA";


//  Id pregunta: 10295 Año de creación de pregunta: 2016
 questions[63]= "64)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[63]= new Array();
 choices[63][0] = "Estrasburgo.";
 choices[63][1] = "Bruselas.";
 choices[63][2] = "Luxemburgo.";
 choices[63][3] = "Holanda.";
 answers[63] = choices[63][2];
 units[63] = "5";
 comments[63] = "Id Pregunta: 10295. UNION EUROPEA";


//  Id pregunta: 10309 Año de creación de pregunta: 2016
 questions[64]= "65)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[64]= new Array();
 choices[64][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[64][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[64][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[64][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[64] = choices[64][0];
 units[64] = "5";
 comments[64] = "Id Pregunta: 10309. UNION EUROPEA";


//  Id pregunta: 10310 Año de creación de pregunta: 2016
 questions[65]= "66)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[65]= new Array();
 choices[65][0] = "La Comisi&oacute;n Europea.";
 choices[65][1] = "El Consejo Europeo.";
 choices[65][2] = "El Consejo de Europa.";
 choices[65][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[65] = choices[65][0];
 units[65] = "5";
 comments[65] = "Id Pregunta: 10310. UNION EUROPEA";


//  Id pregunta: 10458 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[66]= new Array();
 choices[66][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[66][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[66][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[66][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[66] = choices[66][3];
 units[66] = "10";
 comments[66] = "Id Pregunta: 10458. PRESUPUESTOS GENERALES";


//  Id pregunta: 10402 Año de creación de pregunta: 2016
 questions[67]= "68)  El principio de igualdad de trato y oportunidades entre mujeres y hombres tiene car&aacute;cter:";
 choices[67]= new Array();
 choices[67][0] = "Parcial.";
 choices[67][1] = "Sectorial.";
 choices[67][2] = "Tranversal.";
 choices[67][3] = "Vertical.";
 answers[67] = choices[67][2];
 units[67] = "14";
 comments[67] = "Id Pregunta: 10402. POLITICAS DE IGUALDAD";


//  Id pregunta: 10227 Año de creación de pregunta: 2016
 questions[68]= "69)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[68]= new Array();
 choices[68][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[68][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[68][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[68][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[68] = choices[68][3];
 units[68] = "1";
 comments[68] = "Id Pregunta: 10227. CONSTITUCION1978";


//  Id pregunta: 10380 Año de creación de pregunta: 2016
 questions[69]= "70)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[69]= new Array();
 choices[69][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[69][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[69][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[69][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[69] = choices[69][3];
 units[69] = "14";
 comments[69] = "Id Pregunta: 10380. POLITICAS DE IGUALDAD";


//  Id pregunta: 10673 Año de creación de pregunta: 2016
 questions[70]= "71)  Se&ntilde;ale cual de los siguientes factores no contribuye a la sostenibilidad del sistema de pensiones:";
 choices[70]= new Array();
 choices[70][0] = "El aumento de la esperanza de vida.";
 choices[70][1] = "La mejora del &iacute;ndice de natalidad.";
 choices[70][2] = "La reducci&oacute;n del desempleo.";
 choices[70][3] = "El incremento de la edad de jubilaci&oacute;n.";
 answers[70] = choices[70][0];
 units[70] = "14";
 comments[70] = "Id Pregunta: 10673. Estructura social";


//  Id pregunta: 10561 Año de creación de pregunta: 2016
 questions[71]= "72)  El plan nacional de ciudades inteligentes...";
 choices[71]= new Array();
 choices[71][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[71][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[71][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[71][3] = "No existe";
 answers[71] = choices[71][1];
 units[71] = "19";
 comments[71] = "Id Pregunta: 10561. Ciudades Inteligentes";


//  Id pregunta: 10435 Año de creación de pregunta: 2016
 questions[72]= "73)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[72]= new Array();
 choices[72][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[72][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[72][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[72][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[72] = choices[72][2];
 units[72] = "43";
 comments[72] = "Id Pregunta: 10435. SERVICIOS COMUNES";


//  Id pregunta: 10680 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n el Real Decreto Ley 5/2013, de 15 de marzo, de medidas para favorecer la continuidad de la vida laboral de los trabajadores de mayor edad y promover el envejecimiento activo:";
 choices[73]= new Array();
 choices[73][0] = "La cuant&iacute;a de la pensi&oacute;n de jubilaci&oacute;n compatible con el trabajo ser&aacute; equivalente al 50 por 100 del importe resultante en el reconocimiento inicial, una vez aplicado, si procede, el l&iacute;mite m&aacute;ximo de pensi&oacute;n p&uacute;blica, o del que se est&eacute; percibiendo, en el momento de inicio de la compatibilidad con el trabajo, excluido, en todo caso, el complemento por m&iacute;nimos, cualquiera que sea la jornada laboral o la actividad que realice el pensionista.";
 choices[73][1] = "El trabajo compatible debe realizarse a tiempo parcial.";
 choices[73][2] = "Finalizada la relaci&oacute;n laboral por cuenta ajena o producido el cese en la actividad por cuenta propia, se restablecer&aacute; el percibo &iacute;ntegro de la pensi&oacute;n de jubilaci&oacute;n transcurridos 12 meses de la finalizaci&oacute;n de la relaci&oacute;n laboral.";
 choices[73][3] = "El acceso a la pensi&oacute;n podr&aacute; tener lugar hasta 5 a&ntilde;os antes de la edad que en cada caso resulte de aplicaci&oacute;n.";
 answers[73] = choices[73][0];
 units[73] = "14";
 comments[73] = "Id Pregunta: 10680. Pensiones";


//  Id pregunta: 10211 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[74]= new Array();
 choices[74][0] = "Cuatro.";
 choices[74][1] = "Ninguno.";
 choices[74][2] = "Dos.";
 choices[74][3] = "Seis.";
 answers[74] = choices[74][2];
 units[74] = "1";
 comments[74] = "Id Pregunta: 10211. CONSTITUCION1978";


