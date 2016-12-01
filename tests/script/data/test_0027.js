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

//  Id pregunta: 71 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[0]= new Array();
 choices[0][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[0][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[0][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[0][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[0] = choices[0][0];
 units[0] = "86";
 comments[0] = "Id Pregunta: 71. AGE A1 2015";
 preguntaids[0] = 71


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[1]= "2)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[1]= new Array();
 choices[1][0] = "la Administraci&oacute;n General del Estado";
 choices[1][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[1][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[1][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[1] = choices[1][3];
 units[1] = "7";
 comments[1] = "Id Pregunta: 519. LEY 39/2015";
 preguntaids[1] = 519


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[2]= "3)  Componen la Comisi&oacute;n Europea:";
 choices[2]= new Array();
 choices[2][0] = "Un Comisario por cada Estado miembro.";
 choices[2][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[2][2] = "Dos Comisarios por cada Estado miembro.";
 choices[2][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[2] = choices[2][0];
 units[2] = "5";
 comments[2] = "Id Pregunta: 306. UNION EUROPEA";
 preguntaids[2] = 306


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[3]= new Array();
 choices[3][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[3][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[3][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[3][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[3] = choices[3][1];
 units[3] = "19";
 comments[3] = "Id Pregunta: 581. Estrategia TIC";
 preguntaids[3] = 581


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[4]= "5)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[4]= new Array();
 choices[4][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[4][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[4][2] = "el Ministerio del Interior";
 choices[4][3] = "la Administraci&oacute;n General del Estado";
 answers[4] = choices[4][0];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 814. Ley 40/2015";
 preguntaids[4] = 814


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[5]= new Array();
 choices[5][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[5][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[5][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[5][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[5] = choices[5][0];
 units[5] = "1";
 comments[5] = "Id Pregunta: 202. CONSTITUCION1978";
 preguntaids[5] = 202


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[6]= new Array();
 choices[6][0] = "a) Los cuatro ejercicios siguientes.";
 choices[6][1] = "b) El ejercicio siguiente.";
 choices[6][2] = "c) Los dos ejercicios siguientes.";
 choices[6][3] = "d) Los tres ejercicios siguientes.";
 answers[6] = choices[6][3];
 units[6] = "10";
 comments[6] = "Id Pregunta: 458. PRESUPUESTOS GENERALES";
 preguntaids[6] = 458


//  Id pregunta: 710 Año de creación de pregunta: 2016
 questions[7]= "8)  Indique la afirmaci&oacute;n falsa:";
 choices[7]= new Array();
 choices[7][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[7][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[7][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[7][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[7] = choices[7][1];
 units[7] = "22";
 comments[7] = "Id Pregunta: 710. Ley de transparencia";
 preguntaids[7] = 710


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[8]= "9)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[8]= new Array();
 choices[8][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[8][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[8][2] = "El Presidente del Gobierno";
 choices[8][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[8] = choices[8][1];
 units[8] = "26";
 comments[8] = "Id Pregunta: 551. Gobernanza TIC";
 preguntaids[8] = 551


//  Id pregunta: 836 Año de creación de pregunta: 2016
 questions[9]= "10)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[9]= new Array();
 choices[9][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[9][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[9][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[9][3] = "Todas son correctas.";
 answers[9] = choices[9][3];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 836. Ley 40/2015";
 preguntaids[9] = 836


//  Id pregunta: 683 Año de creación de pregunta: 2016
 questions[10]= "11)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[10]= new Array();
 choices[10][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[10][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[10][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[10][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[10] = choices[10][2];
 units[10] = "14";
 comments[10] = "Id Pregunta: 683. Pensiones";
 preguntaids[10] = 683


//  Id pregunta: 384 Año de creación de pregunta: 2016
 questions[11]= "12)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[11]= new Array();
 choices[11][0] = "Sean dirigidas por mujeres";
 choices[11][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[11][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[11][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[11] = choices[11][2];
 units[11] = "14";
 comments[11] = "Id Pregunta: 384. POLITICAS DE IGUALDAD";
 preguntaids[11] = 384


//  Id pregunta: 709 Año de creación de pregunta: 2016
 questions[12]= "13)  En base a la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno se&ntilde;ale la afirmaci&oacute;n verdadera:";
 choices[12]= new Array();
 choices[12][0] = "El derecho de acceso a la informaci&oacute;n p&uacute;blica supone, entre otros, que el sujeto obligado a ello publique de forma peri&oacute;dica y actualizada la informaci&oacute;n cuyo conocimiento sea relevante para garantizar la transparencia de su actividad.";
 choices[12][1] = "Las entidades privadas no est&aacute;n sujetas a obligaciones de transparencia seg&uacute;n la Ley 19/2013.";
 choices[12][2] = "Se admitir&aacute;n a tr&aacute;mite, sin excepci&oacute;n, todas las solicitudes de acceso a la informaci&oacute;n por parte de los ciudadanos.";
 choices[12][3] = "El cumplimiento por la Administraci&oacute;n General del Estado de las obligaciones de publicidad activa ser&aacute; objeto de control por parte del CTBG.";
 answers[12] = choices[12][3];
 units[12] = "22";
 comments[12] = "Id Pregunta: 709. Ley de transparencia";
 preguntaids[12] = 709


//  Id pregunta: 767 Año de creación de pregunta: 2016
 questions[13]= "14)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[13]= new Array();
 choices[13][0] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo, cuando ejerzan potestades administrativas";
 choices[13][1] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, ni siquiera, cuando ejerzan potestades administrativas";
 choices[13][2] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[13][3] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, excepto, cuando ejerzan potestades administrativas";
 answers[13] = choices[13][2];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 767. Ley 40/2015";
 preguntaids[13] = 767


//  Id pregunta: 679 Año de creación de pregunta: 2016
 questions[14]= "15)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[14]= new Array();
 choices[14][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[14][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[14][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[14][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[14] = choices[14][2];
 units[14] = "14";
 comments[14] = "Id Pregunta: 679. Dependencia";
 preguntaids[14] = 679


//  Id pregunta: 753 Año de creación de pregunta: 2016
 questions[15]= "16)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[15]= new Array();
 choices[15][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[15][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[15][2] = "b) y d) son verdaderas";
 choices[15][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[15] = choices[15][1];
 units[15] = "23";
 comments[15] = "Id Pregunta: 753. Direcci&oacute;n p&uacute;blica";
 preguntaids[15] = 753


//  Id pregunta: 131 Año de creación de pregunta: 2016
 questions[16]= "17)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[16]= new Array();
 choices[16][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[16][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[16][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[16][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[16] = choices[16][0];
 units[16] = "12";
 comments[16] = "Id Pregunta: 131. Leyes modelo econ&oacute;mico";
 preguntaids[16] = 131


//  Id pregunta: 113 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[17]= new Array();
 choices[17][0] = "La Seguridad Social";
 choices[17][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[17][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[17][3] = "El Banco de Espa&ntilde;a";
 answers[17] = choices[17][3];
 units[17] = "15";
 comments[17] = "Id Pregunta: 113. ";
 preguntaids[17] = 113


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[18]= "19)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[18]= new Array();
 choices[18][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[18][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[18][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[18][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[18] = choices[18][2];
 units[18] = "26";
 comments[18] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";
 preguntaids[18] = 99


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[19]= new Array();
 choices[19][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[19][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[19][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[19][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[19] = choices[19][0];
 units[19] = "19";
 comments[19] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";
 preguntaids[19] = 162


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[20]= "21)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[20]= new Array();
 choices[20][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[20][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[20][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[20][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[20] = choices[20][1];
 units[20] = "1";
 comments[20] = "Id Pregunta: 238. CONSTITUCION1978";
 preguntaids[20] = 238


//  Id pregunta: 76 Año de creación de pregunta: 2016
 questions[21]= "22)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[21]= new Array();
 choices[21][0] = "Estrat&eacute;gico";
 choices[21][1] = "Operativo";
 choices[21][2] = "T&aacute;ctico";
 choices[21][3] = "Tecnol&oacute;gico";
 answers[21] = choices[21][0];
 units[21] = "36";
 comments[21] = "Id Pregunta: 76. AGE A1 2015";
 preguntaids[21] = 76


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[22]= "23)  El Tribunal de Justicia se cre&oacute; en:";
 choices[22]= new Array();
 choices[22][0] = "El Tratado de la CECA.";
 choices[22][1] = "El Tratado de Niza.";
 choices[22][2] = "El Tratado de &Aacute;msterdam.";
 choices[22][3] = "El Tratado de Lisboa.";
 answers[22] = choices[22][0];
 units[22] = "5";
 comments[22] = "Id Pregunta: 308. UNION EUROPEA";
 preguntaids[22] = 308


//  Id pregunta: 135 Año de creación de pregunta: 2016
 questions[23]= "24)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[23]= new Array();
 choices[23][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[23][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[23][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[23][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[23] = choices[23][0];
 units[23] = "12";
 comments[23] = "Id Pregunta: 135. Leyes modelo econ&oacute;mico";
 preguntaids[23] = 135


//  Id pregunta: 547 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[24]= new Array();
 choices[24][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[24][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[24][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[24][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[24] = choices[24][1];
 units[24] = "26";
 comments[24] = "Id Pregunta: 547. Gobernanza TIC";
 preguntaids[24] = 547


//  Id pregunta: 272 Año de creación de pregunta: 2016
 questions[25]= "26)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[25]= new Array();
 choices[25][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[25][1] = "Anteriormente se denominaba Sonar.";
 choices[25][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[25][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[25] = choices[25][2];
 units[25] = "92";
 comments[25] = "Id Pregunta: 272. INTEGRACION CONTINUA";
 preguntaids[25] = 272


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[26]= new Array();
 choices[26][0] = "El 2 de Octubre de 2015";
 choices[26][1] = "El 15 de Septiembre de 2015";
 choices[26][2] = "El 1 de Octubre de 2015";
 choices[26][3] = "El 5 de Octubre de 2015";
 answers[26] = choices[26][0];
 units[26] = "19";
 comments[26] = "Id Pregunta: 579. Estrategia TIC";
 preguntaids[26] = 579


//  Id pregunta: 837 Año de creación de pregunta: 2016
 questions[27]= "28)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[27]= new Array();
 choices[27][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[27][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[27][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[27][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[27] = choices[27][2];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 837. Ley 40/2015";
 preguntaids[27] = 837


//  Id pregunta: 352 Año de creación de pregunta: 2016
 questions[28]= "29)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[28]= new Array();
 choices[28][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[28][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[28][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[28][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[28] = choices[28][0];
 units[28] = "5";
 comments[28] = "Id Pregunta: 352. UNION EUROPEA";
 preguntaids[28] = 352


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[29]= "30)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[29]= new Array();
 choices[29][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[29][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[29][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[29][3] = "todas son correctas";
 answers[29] = choices[29][3];
 units[29] = "7";
 comments[29] = "Id Pregunta: 533. LEY 39/2015";
 preguntaids[29] = 533


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[30]= "31)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[30]= new Array();
 choices[30][0] = "A los cinco a&ntilde;os.";
 choices[30][1] = "A los dos a&ntilde;os.";
 choices[30][2] = "A los tres a&ntilde;os.";
 choices[30][3] = "A los cuatro a&ntilde;os.";
 answers[30] = choices[30][0];
 units[30] = "10";
 comments[30] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";
 preguntaids[30] = 492


//  Id pregunta: 721 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;C&uacute;al de los siguientes puntos NO es uno de los principios de las metodolog&iacute;as lean?";
 choices[31]= new Array();
 choices[31][0] = "Flexibilidad para variar el servicio o producto";
 choices[31][1] = "Eliminar desperdicios";
 choices[31][2] = "Decidir lo m&aacute;s tarde posible";
 choices[31][3] = "Hacer entregas tan r&aacute;pido como sea posible";
 answers[31] = choices[31][0];
 units[31] = "34";
 comments[31] = "Id Pregunta: 721. Metodologias Lean";
 preguntaids[31] = 721


//  Id pregunta: 431 Año de creación de pregunta: 2016
 questions[32]= "33)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[32]= new Array();
 choices[32][0] = "El Instituto de la Mujer.";
 choices[32][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[32][2] = "Ambas son correctas.";
 choices[32][3] = "A y B son incorrectas.";
 answers[32] = choices[32][2];
 units[32] = "14";
 comments[32] = "Id Pregunta: 431. POLITICAS DE IGUALDAD";
 preguntaids[32] = 431


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[33]= "34)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[33]= new Array();
 choices[33][0] = "la Administraci&oacute;n General del Estado";
 choices[33][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[33][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[33][3] = "el sector p&uacute;blico y privado institucional";
 answers[33] = choices[33][3];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 765. Ley 40/2015";
 preguntaids[33] = 765


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
 preguntaids[34] = 16


//  Id pregunta: 348 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[35]= new Array();
 choices[35][0] = "El 1 de noviembre de 1994.";
 choices[35][1] = "El 1 de noviembre de 1992.";
 choices[35][2] = "El 1 de noviembre de 1995.";
 choices[35][3] = "El 1 de noviembre de 1993.";
 answers[35] = choices[35][3];
 units[35] = "5";
 comments[35] = "Id Pregunta: 348. UNION EUROPEA";
 preguntaids[35] = 348


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[36]= "37)  La recusaci&oacute;n se plantea...";
 choices[36]= new Array();
 choices[36][0] = "Antes de iniciado el procedimiento";
 choices[36][1] = "Una vez iniciado el procedimiento";
 choices[36][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[36][3] = "En cualquier momento del procedimiento";
 answers[36] = choices[36][0];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 829. Ley 40/2015";
 preguntaids[36] = 829


//  Id pregunta: 839 Año de creación de pregunta: 2016
 questions[37]= "38)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[37]= new Array();
 choices[37][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[37][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[37][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[37][3] = "Todas son correctas.";
 answers[37] = choices[37][3];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 839. Ley 40/2015";
 preguntaids[37] = 839


//  Id pregunta: 396 Año de creación de pregunta: 2016
 questions[38]= "39)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[38]= new Array();
 choices[38][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[38][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[38][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[38][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[38] = choices[38][0];
 units[38] = "14";
 comments[38] = "Id Pregunta: 396. POLITICAS DE IGUALDAD";
 preguntaids[38] = 396


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[39]= "40)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[39]= new Array();
 choices[39][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[39][1] = "Ninguna de las respuestas es correcta.";
 choices[39][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[39][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[39] = choices[39][0];
 units[39] = "5";
 comments[39] = "Id Pregunta: 334. UNION EUROPEA";
 preguntaids[39] = 334


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[40]= new Array();
 choices[40][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[40][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[40][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[40][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[40] = choices[40][3];
 units[40] = "22";
 comments[40] = "Id Pregunta: 120. ";
 preguntaids[40] = 120


//  Id pregunta: 273 Año de creación de pregunta: 2016
 questions[41]= "42)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[41]= new Array();
 choices[41][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[41][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[41][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[41][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[41] = choices[41][1];
 units[41] = "92";
 comments[41] = "Id Pregunta: 273. INTEGRACION CONTINUA";
 preguntaids[41] = 273


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[42]= "43)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[42]= new Array();
 choices[42][0] = "Las sociedades mercantiles estatales.";
 choices[42][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[42][2] = "Las respuestas a) y b) son correctas.";
 choices[42][3] = "Las respuestas a) y b) no son correctas.";
 answers[42] = choices[42][2];
 units[42] = "10";
 comments[42] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";
 preguntaids[42] = 503


//  Id pregunta: 350 Año de creación de pregunta: 2016
 questions[43]= "44)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[43]= new Array();
 choices[43][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[43][1] = "Uno de sus miembros.";
 choices[43][2] = "La Comisi&oacute;n.";
 choices[43][3] = "Todas las respuestas son correctas.";
 answers[43] = choices[43][3];
 units[43] = "5";
 comments[43] = "Id Pregunta: 350. UNION EUROPEA";
 preguntaids[43] = 350


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[44]= "45)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[44]= new Array();
 choices[44][0] = "Tener una estructura institucional.";
 choices[44][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[44][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[44][3] = "Todas las respuestas son correctas.";
 answers[44] = choices[44][3];
 units[44] = "5";
 comments[44] = "Id Pregunta: 377. UNION EUROPEA";
 preguntaids[44] = 377


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[45]= "46)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[45]= new Array();
 choices[45][0] = "los Subsecretarios y Secretarios generales";
 choices[45][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[45][2] = "los Secretarios de Estado";
 choices[45][3] = "los Subdirectores generales";
 answers[45] = choices[45][2];
 units[45] = "4, 7, 8, 9";
 comments[45] = "Id Pregunta: 789. Ley 40/2015";
 preguntaids[45] = 789


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[46]= "47)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[46]= new Array();
 choices[46][0] = "Los cr&eacute;ditos";
 choices[46][1] = "Las partidas presupuestarias";
 choices[46][2] = "Los derechos";
 choices[46][3] = "Las obligaciones";
 answers[46] = choices[46][3];
 units[46] = "10";
 comments[46] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";
 preguntaids[46] = 454


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[47]= "48)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[47]= new Array();
 choices[47][0] = "tienen capacidad de obrar limitada";
 choices[47][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[47][2] = "no tienen capacidad de obrar";
 choices[47][3] = "ninguna es correcta";
 answers[47] = choices[47][2];
 units[47] = "7";
 comments[47] = "Id Pregunta: 528. LEY 39/2015";
 preguntaids[47] = 528


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[48]= new Array();
 choices[48][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[48][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[48][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[48][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[48] = choices[48][2];
 units[48] = "10";
 comments[48] = "Id Pregunta: 486. PRESUPUESTOS GENERALES";
 preguntaids[48] = 486


//  Id pregunta: 237 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[49]= new Array();
 choices[49][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[49][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[49][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[49][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[49] = choices[49][2];
 units[49] = "1";
 comments[49] = "Id Pregunta: 237. CONSTITUCION1978";
 preguntaids[49] = 237


//  Id pregunta: 675 Año de creación de pregunta: 2016
 questions[50]= "51)  Se&ntilde;ale cual de los siguientes factores no contribuye a la sostenibilidad del sistema de pensiones:";
 choices[50]= new Array();
 choices[50][0] = "El aumento de la esperanza de vida.";
 choices[50][1] = "La mejora del &iacute;ndice de natalidad.";
 choices[50][2] = "La reducci&oacute;n del desempleo.";
 choices[50][3] = "El incremento de la edad de jubilaci&oacute;n.";
 answers[50] = choices[50][0];
 units[50] = "14";
 comments[50] = "Id Pregunta: 675. Estructura social";
 preguntaids[50] = 675


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[51]= "52)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[51]= new Array();
 choices[51][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[51][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[51][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[51][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[51] = choices[51][0];
 units[51] = "1";
 comments[51] = "Id Pregunta: 256. CONSTITUCION1978";
 preguntaids[51] = 256


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[52]= "53)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[52]= new Array();
 choices[52][0] = "Mercurial, Git y Apache Subversion.";
 choices[52][1] = "Gimp, Mercurial y Git.";
 choices[52][2] = "RedMine, Planner y OpenProj.";
 choices[52][3] = "Cassandra, Git y REDIS.";
 answers[52] = choices[52][0];
 units[52] = "92";
 comments[52] = "Id Pregunta: 576. Tema 92. TAI 2016.";
 preguntaids[52] = 576


//  Id pregunta: 450 Año de creación de pregunta: 2016
 questions[53]= "54)  La partida presupuestaria es equivalente a...";
 choices[53]= new Array();
 choices[53][0] = "El sujeto que realiza el gasto";
 choices[53][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[53][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[53][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[53] = choices[53][3];
 units[53] = "10";
 comments[53] = "Id Pregunta: 450. PRESUPUESTOS GENERALES";
 preguntaids[53] = 450


//  Id pregunta: 366 Año de creación de pregunta: 2016
 questions[54]= "55)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[54]= new Array();
 choices[54][0] = "20 parlamentarios.";
 choices[54][1] = "29 parlamentarios.";
 choices[54][2] = "18 parlamentarios.";
 choices[54][3] = "23 parlamentarios.";
 answers[54] = choices[54][0];
 units[54] = "5";
 comments[54] = "Id Pregunta: 366. UNION EUROPEA";
 preguntaids[54] = 366


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[55]= "56)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[55]= new Array();
 choices[55][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[55][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[55][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[55][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[55] = choices[55][2];
 units[55] = "5";
 comments[55] = "Id Pregunta: 288. UNION EUROPEA";
 preguntaids[55] = 288


//  Id pregunta: 714 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[56]= new Array();
 choices[56][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[56][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[56][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[56][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[56] = choices[56][3];
 units[56] = "22";
 comments[56] = "Id Pregunta: 714. Ley de transparencia";
 preguntaids[56] = 714


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[57]= "58)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[57]= new Array();
 choices[57][0] = "El 23 de julio de 1952.";
 choices[57][1] = "El 18 de abril de 1951.";
 choices[57][2] = "El 16 de abril de 1948.";
 choices[57][3] = "d)Ninguna de las respuestas son correctas.";
 answers[57] = choices[57][0];
 units[57] = "5";
 comments[57] = "Id Pregunta: 349. UNION EUROPEA";
 preguntaids[57] = 349


//  Id pregunta: 677 Año de creación de pregunta: 2016
 questions[58]= "59)  En referencia al proyecto ANDES, para la comunicaci&oacute;n telem&aacute;tica de Nacimientos desde Centros Sanitarios a Registros Civiles, indique cual de las siguientes afirmaciones es falsa:";
 choices[58]= new Array();
 choices[58][0] = "Tiene sustento legal de acuerdo a la Ley 19/2015, de 13 de julio, de medidas de reforma administrativa en el &aacute;mbito de la Administraci&oacute;n de Justicia y del Registro Civil.";
 choices[58][1] = "Se inicia a partir de su propuesta en CORA (Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas).";
 choices[58][2] = "Reutiliza el servicio horizontal ACCEDA en modo cloud, lo cual ha facilitado la pronta puesta en marcha de la soluci&oacute;n.";
 choices[58][3] = "La utilizaci&oacute;n de ANDES por parte de los hospitales es completamente transparente, sin necesidad de realizar pasos previos para su despliegue.";
 answers[58] = choices[58][3];
 units[58] = "47";
 comments[58] = "Id Pregunta: 677. Inscripci&oacute;n autom&aacute;tica nacimientos";
 preguntaids[58] = 677


//  Id pregunta: 221 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[59]= new Array();
 choices[59][0] = "De los derechos y deberes fundamentales.";
 choices[59][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[59][2] = "Derechos y libertades.";
 choices[59][3] = "De la Corona.";
 answers[59] = choices[59][0];
 units[59] = "1";
 comments[59] = "Id Pregunta: 221. CONSTITUCION1978";
 preguntaids[59] = 221


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[60]= "61)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[60]= new Array();
 choices[60][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[60][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[60][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[60][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[60] = choices[60][2];
 units[60] = "101";
 comments[60] = "Id Pregunta: 60. AGE A1 2015";
 preguntaids[60] = 60


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[61]= "62)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[61]= new Array();
 choices[61][0] = "Interoperabilidad";
 choices[61][1] = "Integridad";
 choices[61][2] = "Capital humano";
 choices[61][3] = "Trazabilidad";
 answers[61] = choices[61][2];
 units[61] = "19";
 comments[61] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";
 preguntaids[61] = 166


//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[62]= "63)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[62]= new Array();
 choices[62][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[62][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[62][2] = "Absoluta frente a cualquier otro gasto.";
 choices[62][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[62] = choices[62][2];
 units[62] = "10";
 comments[62] = "Id Pregunta: 511. PRESUPUESTOS GENERALES";
 preguntaids[62] = 511


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[63]= new Array();
 choices[63][0] = "Neo4J ";
 choices[63][1] = "OrientDB ";
 choices[63][2] = "InfoGrid ";
 choices[63][3] = "SimpleDB";
 answers[63] = choices[63][3];
 units[63] = "73";
 comments[63] = "Id Pregunta: 655. ";
 preguntaids[63] = 655


//  Id pregunta: 399 Año de creación de pregunta: 2016
 questions[64]= "65)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[64]= new Array();
 choices[64][0] = "Acciones de discriminaci&oacute;n.";
 choices[64][1] = "Acciones positivas.";
 choices[64][2] = "Acciones negativas.";
 choices[64][3] = "Acciones neutras.";
 answers[64] = choices[64][1];
 units[64] = "14";
 comments[64] = "Id Pregunta: 399. POLITICAS DE IGUALDAD";
 preguntaids[64] = 399


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[65]= new Array();
 choices[65][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[65][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[65][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[65][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[65] = choices[65][3];
 units[65] = "26";
 comments[65] = "Id Pregunta: 546. Gobernanza TIC";
 preguntaids[65] = 546


//  Id pregunta: 289 Año de creación de pregunta: 2016
 questions[66]= "67)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[66]= new Array();
 choices[66][0] = "Tres a&ntilde;os.";
 choices[66][1] = "Dos a&ntilde;os y medio.";
 choices[66][2] = "Cinco a&ntilde;os.";
 choices[66][3] = "Seis a&ntilde;os.";
 answers[66] = choices[66][2];
 units[66] = "5";
 comments[66] = "Id Pregunta: 289. UNION EUROPEA";
 preguntaids[66] = 289


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[67]= "68)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[67]= new Array();
 choices[67][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[67][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[67][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[67][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[67] = choices[67][1];
 units[67] = "43";
 comments[67] = "Id Pregunta: 441. SERVICIOS COMUNES";
 preguntaids[67] = 441


//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[68]= "69)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[68]= new Array();
 choices[68][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[68][1] = "La CETIC";
 choices[68][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[68][3] = "El MHFP";
 answers[68] = choices[68][0];
 units[68] = "19";
 comments[68] = "Id Pregunta: 595. Estrategia TIC";
 preguntaids[68] = 595


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[69]= "70)  El sector p&uacute;blico institucional se integra por:";
 choices[69]= new Array();
 choices[69][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[69][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[69][2] = "las Universidades p&uacute;blicas";
 choices[69][3] = "todas son correctas";
 answers[69] = choices[69][3];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 766. Ley 40/2015";
 preguntaids[69] = 766


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[70]= "71)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[70]= new Array();
 choices[70][0] = "El derecho a un permiso.";
 choices[70][1] = "Una prestaci&oacute;n por paternidad.";
 choices[70][2] = "Ambas son correctas.";
 choices[70][3] = "18 d&iacute;as de permiso.";
 answers[70] = choices[70][2];
 units[70] = "14";
 comments[70] = "Id Pregunta: 423. POLITICAS DE IGUALDAD";
 preguntaids[70] = 423


//  Id pregunta: 324 Año de creación de pregunta: 2016
 questions[71]= "72)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[71]= new Array();
 choices[71][0] = "Tres a&ntilde;os.";
 choices[71][1] = "Cuatro a&ntilde;os.";
 choices[71][2] = "Cinco a&ntilde;os.";
 choices[71][3] = "Seis a&ntilde;os.";
 answers[71] = choices[71][0];
 units[71] = "5";
 comments[71] = "Id Pregunta: 324. UNION EUROPEA";
 preguntaids[71] = 324


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Qu&eacute; es Java Web Start?";
 choices[72]= new Array();
 choices[72][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[72][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[72][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[72][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[72] = choices[72][3];
 units[72] = "64";
 comments[72] = "Id Pregunta: 35. AGE A1 2015";
 preguntaids[72] = 35


//  Id pregunta: 704 Año de creación de pregunta: 2016
 questions[73]= "74)  En el modelo de integraci&oacute;n continua se recomienda:";
 choices[73]= new Array();
 choices[73][0] = "Mantener un repositorio de c&oacute;digo.";
 choices[73][1] = "Realizar una migraci&oacute;n manual y controlada a cada entorno de desarrollo.";
 choices[73][2] = "Realizar las construcciones de versiones agrupando m&uacute;ltiples commits para optimizar el tiempo de proceso.";
 choices[73][3] = "Realizar las pruebas en el entorno de producci&oacute;n para obtener resultados reales.";
 answers[73] = choices[73][1];
 units[73] = "92";
 comments[73] = "Id Pregunta: 704. INTEGRACION CONTINUA";
 preguntaids[73] = 704


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[74]= "75)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[74]= new Array();
 choices[74][0] = "Los propios miembros del Tribunal.";
 choices[74][1] = "El Consejo de Europa.";
 choices[74][2] = "El Consejo Europeo.";
 choices[74][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[74] = choices[74][0];
 units[74] = "5";
 comments[74] = "Id Pregunta: 301. UNION EUROPEA";
 preguntaids[74] = 301


