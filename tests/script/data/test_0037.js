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

//  Id pregunta: 10168 Año de creación de pregunta: 2016
 questions[0]= "1)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[0]= new Array();
 choices[0][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[0][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[0][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[0][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[0] = choices[0][2];
 units[0] = "19";
 comments[0] = "Id Pregunta: 10168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 10503 Año de creación de pregunta: 2016
 questions[1]= "2)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[1]= new Array();
 choices[1][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[1][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[1][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[1][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[1] = choices[1][3];
 units[1] = "10";
 comments[1] = "Id Pregunta: 10503. PRESUPUESTOS GENERALES";


//  Id pregunta: 10095 Año de creación de pregunta: 2016
 questions[2]= "3)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[2]= new Array();
 choices[2][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[2][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[2][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[2][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[2] = choices[2][3];
 units[2] = "89";
 comments[2] = "Id Pregunta: 10095. AGE A1 2015";


//  Id pregunta: 10259 Año de creación de pregunta: 2016
 questions[3]= "4)  La iniciativa legislativa corresponde:";
 choices[3]= new Array();
 choices[3][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[3][1] = "Al rey y al Gobierno.";
 choices[3][2] = "Al Congreso, al Senado y al Rey.";
 choices[3][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[3] = choices[3][3];
 units[3] = "1";
 comments[3] = "Id Pregunta: 10259. CONSTITUCION1978";


//  Id pregunta: 10532 Año de creación de pregunta: 2016
 questions[4]= "5)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[4]= new Array();
 choices[4][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[4][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[4][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[4][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[4] = choices[4][2];
 units[4] = "7";
 comments[4] = "Id Pregunta: 10532. LEY 39/2015";


//  Id pregunta: 10335 Año de creación de pregunta: 2016
 questions[5]= "6)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[5]= new Array();
 choices[5][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[5][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[5][2] = "Son incompatibles ambas actas de diputado.";
 choices[5][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[5] = choices[5][2];
 units[5] = "5";
 comments[5] = "Id Pregunta: 10335. UNION EUROPEA";


//  Id pregunta: 10298 Año de creación de pregunta: 2016
 questions[6]= "7)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[6]= new Array();
 choices[6][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[6][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[6][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[6][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[6] = choices[6][1];
 units[6] = "5";
 comments[6] = "Id Pregunta: 10298. UNION EUROPEA";


//  Id pregunta: 10186 Año de creación de pregunta: 2016
 questions[7]= "8)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[7]= new Array();
 choices[7][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[7][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[7][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[7][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[7] = choices[7][2];
 units[7] = "1";
 comments[7] = "Id Pregunta: 10186. CONSTITUCION1978";


//  Id pregunta: 10080 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[8]= new Array();
 choices[8][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[8][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[8][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[8][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[8] = choices[8][3];
 units[8] = "46";
 comments[8] = "Id Pregunta: 10080. AGE A1 2015";


//  Id pregunta: 10153 Año de creación de pregunta: 2016
 questions[9]= "10)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[9]= new Array();
 choices[9][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[9][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[9][2] = "a y b son correctas";
 choices[9][3] = "a y b son incorrectas";
 answers[9] = choices[9][0];
 units[9] = "7";
 comments[9] = "Id Pregunta: 10153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 10344 Año de creación de pregunta: 2016
 questions[10]= "11)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[10]= new Array();
 choices[10][0] = "Pas&oacute; de 518 a 626.";
 choices[10][1] = "Pas&oacute; de 434 a 518.";
 choices[10][2] = "Pas&oacute; de 345 a 512.";
 choices[10][3] = "Pas&oacute; de 435 a 610.";
 answers[10] = choices[10][1];
 units[10] = "5";
 comments[10] = "Id Pregunta: 10344. UNION EUROPEA";


//  Id pregunta: 10103 Año de creación de pregunta: 2016
 questions[11]= "12)  En qu&eacute; consiste el principio BASE:";
 choices[11]= new Array();
 choices[11][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[11][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[11][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[11][3] = "Todas las anteriores son falsas";
 answers[11] = choices[11][3];
 units[11] = "73";
 comments[11] = "Id Pregunta: 10103. ";


//  Id pregunta: 10087 Año de creación de pregunta: 2016
 questions[12]= "13)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[12]= new Array();
 choices[12][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[12][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[12][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[12][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[12] = choices[12][2];
 units[12] = "48";
 comments[12] = "Id Pregunta: 10087. AGE A1 2015";


//  Id pregunta: 10654 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[13]= new Array();
 choices[13][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[13][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[13][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[13][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[13] = choices[13][0];
 units[13] = "73";
 comments[13] = "Id Pregunta: 10654. ";


//  Id pregunta: 10218 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[14]= new Array();
 choices[14][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[14][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[14][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[14][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[14] = choices[14][0];
 units[14] = "1";
 comments[14] = "Id Pregunta: 10218. CONSTITUCION1978";


//  Id pregunta: 10042 Año de creación de pregunta: 2016
 questions[15]= "16)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[15]= new Array();
 choices[15][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[15][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[15][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[15][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[15] = choices[15][3];
 units[15] = "86";
 comments[15] = "Id Pregunta: 10042. AGE A1 2015";


//  Id pregunta: 10479 Año de creación de pregunta: 2016
 questions[16]= "17)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[16]= new Array();
 choices[16][0] = "A nivel de art&iacute;culo.";
 choices[16][1] = "A nivel de cap&iacute;tulo.";
 choices[16][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[16][3] = "A nivel de concepto.";
 answers[16] = choices[16][2];
 units[16] = "10";
 comments[16] = "Id Pregunta: 10479. PRESUPUESTOS GENERALES";


//  Id pregunta: 10497 Año de creación de pregunta: 2016
 questions[17]= "18)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[17]= new Array();
 choices[17][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[17][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[17][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[17][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[17] = choices[17][3];
 units[17] = "10";
 comments[17] = "Id Pregunta: 10497. PRESUPUESTOS GENERALES";


//  Id pregunta: 10083 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[18]= new Array();
 choices[18][0] = "Perceptible";
 choices[18][1] = "Operable";
 choices[18][2] = "Comprensible";
 choices[18][3] = "Robusto";
 answers[18] = choices[18][2];
 units[18] = "42";
 comments[18] = "Id Pregunta: 10083. AGE A1 2015";


//  Id pregunta: 10376 Año de creación de pregunta: 2016
 questions[19]= "20)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[19]= new Array();
 choices[19][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[19][1] = "Personas con nacionalidad europea.";
 choices[19][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[19][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[19] = choices[19][3];
 units[19] = "5";
 comments[19] = "Id Pregunta: 10376. UNION EUROPEA";


//  Id pregunta: 10052 Año de creación de pregunta: 2016
 questions[20]= "21)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[20]= new Array();
 choices[20][0] = "ISO/IEC 25000";
 choices[20][1] = "ISO/IEC 27000";
 choices[20][2] = "ISO 9000";
 choices[20][3] = "ISO 9001";
 answers[20] = choices[20][0];
 units[20] = "93";
 comments[20] = "Id Pregunta: 10052. AGE A1 2015";


//  Id pregunta: 10611 Año de creación de pregunta: 2016
 questions[21]= "22)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[21]= new Array();
 choices[21][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[21][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[21][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[21][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[21] = choices[21][1];
 units[21] = "63";
 comments[21] = "Id Pregunta: 10611. Junta de Extremadura A1 2015";


//  Id pregunta: 10666 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el cumplimiento de tr&aacute;mites por defecto es de:";
 choices[22]= new Array();
 choices[22][0] = "10 d&iacute;as.";
 choices[22][1] = "15 d&iacute;as.";
 choices[22][2] = "1 mes.";
 choices[22][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[22] = choices[22][0];
 units[22] = "7";
 comments[22] = "Id Pregunta: 10666. Art&iacute;culo 73 de la Ley 39/2015";


//  Id pregunta: 10217 Año de creación de pregunta: 2016
 questions[23]= "24)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[23]= new Array();
 choices[23][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[23][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[23][2] = "Son refrendados por el Rey.";
 choices[23][3] = "Son convocados por el Presidente del Gobierno.";
 answers[23] = choices[23][0];
 units[23] = "1";
 comments[23] = "Id Pregunta: 10217. CONSTITUCION1978";


//  Id pregunta: 10446 Año de creación de pregunta: 2016
 questions[24]= "25)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[24]= new Array();
 choices[24][0] = "Ejecutivo";
 choices[24][1] = "Limitativo";
 choices[24][2] = "Estimativo";
 choices[24][3] = "Progresivo";
 answers[24] = choices[24][2];
 units[24] = "10";
 comments[24] = "Id Pregunta: 10446. PRESUPUESTOS GENERALES";


//  Id pregunta: 10357 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[25]= new Array();
 choices[25][0] = "El Parlamento y el Consejo.";
 choices[25][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[25][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[25][3] = "La Comisi&oacute;n y el Consejo.";
 answers[25] = choices[25][1];
 units[25] = "5";
 comments[25] = "Id Pregunta: 10357. UNION EUROPEA";


//  Id pregunta: 10239 Año de creación de pregunta: 2016
 questions[26]= "27)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[26]= new Array();
 choices[26][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[26][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[26][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[26][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[26] = choices[26][0];
 units[26] = "1";
 comments[26] = "Id Pregunta: 10239. CONSTITUCION1978";


//  Id pregunta: 10369 Año de creación de pregunta: 2016
 questions[27]= "28)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[27]= new Array();
 choices[27][0] = "Son actos individuales no normativos.";
 choices[27][1] = "Poseen alcance general.";
 choices[27][2] = "Son actos normativos.";
 choices[27][3] = "No son obligatorias.";
 answers[27] = choices[27][0];
 units[27] = "5";
 comments[27] = "Id Pregunta: 10369. UNION EUROPEA";


//  Id pregunta: 10475 Año de creación de pregunta: 2016
 questions[28]= "29)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[28]= new Array();
 choices[28][0] = "Anualmente.";
 choices[28][1] = "Ninguna de las respuestas es correcta.";
 choices[28][2] = "Trimestralmente.";
 choices[28][3] = "Semestralmente.";
 answers[28] = choices[28][0];
 units[28] = "10";
 comments[28] = "Id Pregunta: 10475. PRESUPUESTOS GENERALES";


//  Id pregunta: 10436 Año de creación de pregunta: 2016
 questions[29]= "30)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[29]= new Array();
 choices[29][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[29][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[29][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[29][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[29] = choices[29][2];
 units[29] = "43";
 comments[29] = "Id Pregunta: 10436. SERVICIOS COMUNES";


//  Id pregunta: 10455 Año de creación de pregunta: 2016
 questions[30]= "31)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[30]= new Array();
 choices[30][0] = "En qu&eacute; nos gastamos el dinero";
 choices[30][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[30][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[30][3] = "Qui&eacute;n se gasta el dinero.";
 answers[30] = choices[30][0];
 units[30] = "10";
 comments[30] = "Id Pregunta: 10455. PRESUPUESTOS GENERALES";


//  Id pregunta: 10003 Año de creación de pregunta: 2016
 questions[31]= "32)  En el lenguaje de modelado UML :";
 choices[31]= new Array();
 choices[31][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[31][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[31][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[31][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[31] = choices[31][2];
 units[31] = "89";
 comments[31] = "Id Pregunta: 10003. AGE A1 2015";


//  Id pregunta: 10403 Año de creación de pregunta: 2016
 questions[32]= "33)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[32]= new Array();
 choices[32][0] = "Medidas de igualdad.";
 choices[32][1] = "Objetivos de igualdad.";
 choices[32][2] = "Ambas son correctas.";
 choices[32][3] = "A y B son incorrectas.";
 answers[32] = choices[32][2];
 units[32] = "14";
 comments[32] = "Id Pregunta: 10403. POLITICAS DE IGUALDAD";


//  Id pregunta: 10493 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[33]= new Array();
 choices[33][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[33][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[33][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[33][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[33] = choices[33][2];
 units[33] = "10";
 comments[33] = "Id Pregunta: 10493. PRESUPUESTOS GENERALES";


//  Id pregunta: 10117 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[34]= new Array();
 choices[34][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[34][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas ";
 choices[34][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[34][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[34] = choices[34][0];
 units[34] = "15";
 comments[34] = "Id Pregunta: 10117. ";


//  Id pregunta: 10106 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[35]= new Array();
 choices[35][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[35][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[35][2] = "A) y B) son verdaderas";
 choices[35][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[35] = choices[35][2];
 units[35] = "73";
 comments[35] = "Id Pregunta: 10106. ";


//  Id pregunta: 10622 Año de creación de pregunta: 2016
 questions[36]= "37)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[36]= new Array();
 choices[36][0] = "Entradas (entities).";
 choices[36][1] = "Atributos (attribs).";
 choices[36][2] = "M&oacute;dulos (modules).";
 choices[36][3] = "Objetos (objects).";
 answers[36] = choices[36][0];
 units[36] = "74";
 comments[36] = "Id Pregunta: 10622. Junta de Extremadura A1 2015";


//  Id pregunta: 10539 Año de creación de pregunta: 2016
 questions[37]= "38)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[37]= new Array();
 choices[37][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[37][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[37][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[37][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[37] = choices[37][1];
 units[37] = "7";
 comments[37] = "Id Pregunta: 10539. LEY 39/2015";


//  Id pregunta: 10141 Año de creación de pregunta: 2016
 questions[38]= "39)  El recurso de alzada puede interponerse:";
 choices[38]= new Array();
 choices[38][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[38][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[38][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[38][3] = "Ante el Defensor del Pueblo";
 answers[38] = choices[38][1];
 units[38] = "8";
 comments[38] = "Id Pregunta: 10141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 10170 Año de creación de pregunta: 2016
 questions[39]= "40)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[39]= new Array();
 choices[39][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[39][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[39][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[39][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[39] = choices[39][2];
 units[39] = "19";
 comments[39] = "Id Pregunta: 10170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";


//  Id pregunta: 10308 Año de creación de pregunta: 2016
 questions[40]= "41)  El Tribunal de Justicia se cre&oacute; en:";
 choices[40]= new Array();
 choices[40][0] = "El Tratado de la CECA.";
 choices[40][1] = "El Tratado de Niza.";
 choices[40][2] = "El Tratado de &Aacute;msterdam.";
 choices[40][3] = "El Tratado de Lisboa.";
 answers[40] = choices[40][0];
 units[40] = "5";
 comments[40] = "Id Pregunta: 10308. UNION EUROPEA";


//  Id pregunta: 10443 Año de creación de pregunta: 2016
 questions[41]= "42)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[41]= new Array();
 choices[41][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[41][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[41][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[41][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[41] = choices[41][1];
 units[41] = "43";
 comments[41] = "Id Pregunta: 10443. SERVICIOS COMUNES";


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


//  Id pregunta: 10073 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[43]= new Array();
 choices[43][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[43][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[43][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[43][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[43] = choices[43][1];
 units[43] = "44";
 comments[43] = "Id Pregunta: 10073. AGE A1 2015";


//  Id pregunta: 10517 Año de creación de pregunta: 2016
 questions[44]= "45)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[44]= new Array();
 choices[44][0] = "la Administraci&oacute;n General del Estado";
 choices[44][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[44][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[44][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[44] = choices[44][3];
 units[44] = "7";
 comments[44] = "Id Pregunta: 10517. LEY 39/2015";


//  Id pregunta: 10375 Año de creación de pregunta: 2016
 questions[45]= "46)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[45]= new Array();
 choices[45][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[45][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[45][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[45][3] = "Todas las respuestas son correctas.";
 answers[45] = choices[45][3];
 units[45] = "5";
 comments[45] = "Id Pregunta: 10375. UNION EUROPEA";


//  Id pregunta: 10235 Año de creación de pregunta: 2016
 questions[46]= "47)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[46]= new Array();
 choices[46][0] = "El Jefe del Estado.";
 choices[46][1] = "El Tribunal Constitucional.";
 choices[46][2] = "El Congreso de los Diputados.";
 choices[46][3] = "Las Cortes Generales.";
 answers[46] = choices[46][0];
 units[46] = "1";
 comments[46] = "Id Pregunta: 10235. CONSTITUCION1978";


//  Id pregunta: 10488 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[47]= new Array();
 choices[47][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[47][1] = "El Gobierno.";
 choices[47][2] = "El Presidente del Gobierno.";
 choices[47][3] = "El Consejo de Ministros.";
 answers[47] = choices[47][1];
 units[47] = "10";
 comments[47] = "Id Pregunta: 10488. PRESUPUESTOS GENERALES";


//  Id pregunta: 10627 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[48]= new Array();
 choices[48][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[48][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[48][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[48][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[48] = choices[48][0];
 units[48] = "46";
 comments[48] = "Id Pregunta: 10627. Junta de Extremadura A1 2015";


//  Id pregunta: 10154 Año de creación de pregunta: 2016
 questions[49]= "50)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[49]= new Array();
 choices[49][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[49][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[49][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[49][3] = "todas son correctas";
 answers[49] = choices[49][3];
 units[49] = "7";
 comments[49] = "Id Pregunta: 10154. Ley 39/2015, Art&iacute;culo 29";


//  Id pregunta: 10016 Año de creación de pregunta: 2016
 questions[50]= "51)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[50]= new Array();
 choices[50][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[50][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[50][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[50][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[50] = choices[50][3];
 units[50] = "19";
 comments[50] = "Id Pregunta: 10016. AGE A1 2015";


//  Id pregunta: 10144 Año de creación de pregunta: 2016
 questions[51]= "52)  Sobre el recurso de reposici&oacute;n:";
 choices[51]= new Array();
 choices[51][0] = "Cabe interponerlo ante los actos administrativos que pongan fin a la v&iacute;a administrativa";
 choices[51][1] = "Es obligatorio interponerlo antes de impugnar un acto administrativo ante el orden jurisdiccional contencioso-administrativo";
 choices[51][2] = "Ha desaparecido en la Ley 39/2015";
 choices[51][3] = "El &oacute;rgano competente para resolverlo es el superior jer&aacute;rquico al que dict&oacute; el acto administrativo a recurrir";
 answers[51] = choices[51][0];
 units[51] = "8";
 comments[51] = "Id Pregunta: 10144. Ley 39/2015, Art&iacute;culo 123";


//  Id pregunta: 10524 Año de creación de pregunta: 2016
 questions[52]= "53)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[52]= new Array();
 choices[52][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[52][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[52][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[52][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[52] = choices[52][3];
 units[52] = "7";
 comments[52] = "Id Pregunta: 10524. LEY 39/2015";


//  Id pregunta: 10198 Año de creación de pregunta: 2016
 questions[53]= "54)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[53]= new Array();
 choices[53][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[53][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[53][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[53][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[53] = choices[53][3];
 units[53] = "1";
 comments[53] = "Id Pregunta: 10198. CONSTITUCION1978";


//  Id pregunta: 10482 Año de creación de pregunta: 2016
 questions[54]= "55)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[54]= new Array();
 choices[54][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[54][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[54][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[54][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[54] = choices[54][0];
 units[54] = "10";
 comments[54] = "Id Pregunta: 10482. PRESUPUESTOS GENERALES";


//  Id pregunta: 10231 Año de creación de pregunta: 2016
 questions[55]= "56)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[55]= new Array();
 choices[55][0] = "El Presidente del Congreso de los Diputados.";
 choices[55][1] = "El Presidente del Gobierno.";
 choices[55][2] = "El Rey.";
 choices[55][3] = "El Consejo de Ministros.";
 answers[55] = choices[55][0];
 units[55] = "1";
 comments[55] = "Id Pregunta: 10231. CONSTITUCION1978";


//  Id pregunta: 10380 Año de creación de pregunta: 2016
 questions[56]= "57)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[56]= new Array();
 choices[56][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[56][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[56][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[56][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[56] = choices[56][3];
 units[56] = "14";
 comments[56] = "Id Pregunta: 10380. POLITICAS DE IGUALDAD";


//  Id pregunta: 10676 Año de creación de pregunta: 2016
 questions[57]= "58)  Es un Servicio previsto en la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[57]= new Array();
 choices[57][0] = "El servicio de teleasistencia.";
 choices[57][1] = "El servicio de ayuda a domicilio.";
 choices[57][2] = "El servicio de centro de d&iacute;a y de noche.";
 choices[57][3] = "Todas las anteriores son correctas.";
 answers[57] = choices[57][3];
 units[57] = "14";
 comments[57] = "Id Pregunta: 10676. Dependencia";


//  Id pregunta: 10562 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[58]= new Array();
 choices[58][0] = "Entre 1973 y 1978";
 choices[58][1] = "Entre 1992 y 1996";
 choices[58][2] = "Entre 1978 y 1985";
 choices[58][3] = "Entre 2008 y 2013";
 answers[58] = choices[58][2];
 units[58] = "12";
 comments[58] = "Id Pregunta: 10562. Modelo econ&oacute;mico";


//  Id pregunta: 10554 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[59]= new Array();
 choices[59][0] = "El BCE";
 choices[59][1] = "El Parlamento";
 choices[59][2] = "El Consejo";
 choices[59][3] = "La Comisi&oacute;n";
 answers[59] = choices[59][3];
 units[59] = "17";
 comments[59] = "Id Pregunta: 10554. Mercado &Uacute;nico Digital";


//  Id pregunta: 10579 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[60]= new Array();
 choices[60][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[60][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[60][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[60][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[60] = choices[60][1];
 units[60] = "19";
 comments[60] = "Id Pregunta: 10579. Estrategia TIC";


//  Id pregunta: 10226 Año de creación de pregunta: 2016
 questions[61]= "62)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[61]= new Array();
 choices[61][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[61][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[61][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[61][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[61] = choices[61][0];
 units[61] = "1";
 comments[61] = "Id Pregunta: 10226. CONSTITUCION1978";


//  Id pregunta: 10018 Año de creación de pregunta: 2016
 questions[62]= "63)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[62]= new Array();
 choices[62][0] = "Aplicaci&oacute;n";
 choices[62][1] = "Sesi&oacute;n";
 choices[62][2] = "Presentaci&oacute;n";
 choices[62][3] = "Transporte";
 answers[62] = choices[62][2];
 units[62] = "105";
 comments[62] = "Id Pregunta: 10018. AGE A1 2015";


//  Id pregunta: 10414 Año de creación de pregunta: 2016
 questions[63]= "64)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[63]= new Array();
 choices[63][0] = "Un informe de impacto de g&eacute;nero.";
 choices[63][1] = "Un programa de igualdad de oportunidades.";
 choices[63][2] = "Un plan de Igualdad de Oportunidades.";
 choices[63][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[63] = choices[63][0];
 units[63] = "14";
 comments[63] = "Id Pregunta: 10414. POLITICAS DE IGUALDAD";


//  Id pregunta: 10561 Año de creación de pregunta: 2016
 questions[64]= "65)  El plan nacional de ciudades inteligentes...";
 choices[64]= new Array();
 choices[64][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[64][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[64][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[64][3] = "No existe";
 answers[64] = choices[64][1];
 units[64] = "19";
 comments[64] = "Id Pregunta: 10561. Ciudades Inteligentes";


//  Id pregunta: 10453 Año de creación de pregunta: 2016
 questions[65]= "66)  En las Administraciones P&uacute;blicas...";
 choices[65]= new Array();
 choices[65][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[65][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[65][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[65][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[65] = choices[65][0];
 units[65] = "10";
 comments[65] = "Id Pregunta: 10453. PRESUPUESTOS GENERALES";


//  Id pregunta: 10233 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[66]= new Array();
 choices[66][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[66][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[66][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[66][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[66] = choices[66][2];
 units[66] = "1";
 comments[66] = "Id Pregunta: 10233. CONSTITUCION1978";


//  Id pregunta: 10431 Año de creación de pregunta: 2016
 questions[67]= "68)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[67]= new Array();
 choices[67][0] = "El Instituto de la Mujer.";
 choices[67][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[67][2] = "Ambas son correctas.";
 choices[67][3] = "A y B son incorrectas.";
 answers[67] = choices[67][2];
 units[67] = "14";
 comments[67] = "Id Pregunta: 10431. POLITICAS DE IGUALDAD";


//  Id pregunta: 10367 Año de creación de pregunta: 2016
 questions[68]= "69)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[68]= new Array();
 choices[68][0] = "Presentar la moci&oacute;n de censura.";
 choices[68][1] = "Presidir las sesiones del Parlamento.";
 choices[68][2] = "Organizar la Secretar&iacute;a General.";
 choices[68][3] = "Preparar las actividades de las Comisiones.";
 answers[68] = choices[68][1];
 units[68] = "5";
 comments[68] = "Id Pregunta: 10367. UNION EUROPEA";


//  Id pregunta: 10281 Año de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale la respuesta falsa:";
 choices[69]= new Array();
 choices[69][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[69][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[69][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[69][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[69] = choices[69][3];
 units[69] = "5";
 comments[69] = "Id Pregunta: 10281. UNION EUROPEA";


//  Id pregunta: 10638 Año de creación de pregunta: 2016
 questions[70]= "71)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[70]= new Array();
 choices[70][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[70][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[70][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[70][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[70] = choices[70][3];
 units[70] = "57";
 comments[70] = "Id Pregunta: 10638. Junta de Extremadura A1 2015";


//  Id pregunta: 10009 Año de creación de pregunta: 2016
 questions[71]= "72)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[71]= new Array();
 choices[71][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[71][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[71][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[71][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[71] = choices[71][1];
 units[71] = "95";
 comments[71] = "Id Pregunta: 10009. AGE A1 2015";


//  Id pregunta: 10444 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[72]= new Array();
 choices[72][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[72][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[72][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[72][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[72] = choices[72][1];
 units[72] = "43";
 comments[72] = "Id Pregunta: 10444. SERVICIOS COMUNES";


//  Id pregunta: 10459 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[73]= new Array();
 choices[73][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[73][1] = "Pasivos financieros y transferencias de capital.";
 choices[73][2] = "Activos financieros y pasivos financieros.";
 choices[73][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[73] = choices[73][2];
 units[73] = "10";
 comments[73] = "Id Pregunta: 10459. PRESUPUESTOS GENERALES";


//  Id pregunta: 10402 Año de creación de pregunta: 2016
 questions[74]= "75)  El principio de igualdad de trato y oportunidades entre mujeres y hombres tiene car&aacute;cter:";
 choices[74]= new Array();
 choices[74][0] = "Parcial.";
 choices[74][1] = "Sectorial.";
 choices[74][2] = "Tranversal.";
 choices[74][3] = "Vertical.";
 answers[74] = choices[74][2];
 units[74] = "14";
 comments[74] = "Id Pregunta: 10402. POLITICAS DE IGUALDAD";


