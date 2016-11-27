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

//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[0]= "1)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[0]= new Array();
 choices[0][0] = "un art&iacute;culo";
 choices[0][1] = "dos art&iacute;culos";
 choices[0][2] = "tres art&iacute;culos";
 choices[0][3] = "cuatro art&iacute;culos";
 answers[0] = choices[0][1];
 units[0] = "7";
 comments[0] = "Id Pregunta: 519. LEY 39/2015";


//  Id pregunta: 473 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[1]= new Array();
 choices[1][0] = "Ley 50/1997, del Gobierno.";
 choices[1][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[1][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[1][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[1] = choices[1][1];
 units[1] = "10";
 comments[1] = "Id Pregunta: 473. PRESUPUESTOS GENERALES";


//  Id pregunta: 677 Año de creación de pregunta: 2016
 questions[2]= "3)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[2]= new Array();
 choices[2][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[2][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[2][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[2][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[2] = choices[2][2];
 units[2] = "14";
 comments[2] = "Id Pregunta: 677. Dependencia";


//  Id pregunta: 751 Año de creación de pregunta: 2016
 questions[3]= "4)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[3]= new Array();
 choices[3][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[3][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[3][2] = "b) y d) son verdaderas";
 choices[3][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[3] = choices[3][1];
 units[3] = "18, 20";
 comments[3] = "Id Pregunta: 751. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[4]= new Array();
 choices[4][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[4][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[4][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[4][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[4] = choices[4][3];
 units[4] = "10";
 comments[4] = "Id Pregunta: 458. PRESUPUESTOS GENERALES";


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[5]= "6)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[5]= new Array();
 choices[5][0] = "0";
 choices[5][1] = "1";
 choices[5][2] = "Tantos como peticiones concurrentes tenga.";
 choices[5][3] = "Tantos como le permita la memoria de la JVM.";
 answers[5] = choices[5][1];
 units[5] = "64";
 comments[5] = "Id Pregunta: 15. AGE A1 2015";


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[6]= "7)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[6]= new Array();
 choices[6][0] = "circulares";
 choices[6][1] = "reglamentos internos";
 choices[6][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[6][3] = "disposiciones de car&aacute;cter general";
 answers[6] = choices[6][2];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 778. Ley 40/2015";


//  Id pregunta: 794 Año de creación de pregunta: 2016
 questions[7]= "8)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[7]= new Array();
 choices[7][0] = "&oacute;rganos superiores";
 choices[7][1] = "&oacute;rganos directivos";
 choices[7][2] = "&oacute;rganos superiores y directivos";
 choices[7][3] = "ninguna es correcta";
 answers[7] = choices[7][1];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 794. Ley 40/2015";


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[8]= "9)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[8]= new Array();
 choices[8][0] = "Sello electr&oacute;nico";
 choices[8][1] = "Sede electr&oacute;nica";
 choices[8][2] = "Servidor seguro (SSL/TLS)";
 choices[8][3] = "Empleado p&uacute;blico";
 answers[8] = choices[8][2];
 units[8] = "7";
 comments[8] = "Id Pregunta: 26. AGE A1 2015";


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[9]= "10)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[9]= new Array();
 choices[9][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[9][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[9][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[9][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[9] = choices[9][0];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 777. Ley 40/2015";


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[10]= "11)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[10]= new Array();
 choices[10][0] = "Conformidad";
 choices[10][1] = "Responsabilidad";
 choices[10][2] = "Adquisici&oacute;n";
 choices[10][3] = "Desempe&ntilde;o";
 answers[10] = choices[10][0];
 units[10] = "26";
 comments[10] = "Id Pregunta: 546. Gobernanza TIC";


//  Id pregunta: 669 Año de creación de pregunta: 2016
 questions[11]= "12)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[11]= new Array();
 choices[11][0] = "Resoluci&oacute;n.";
 choices[11][1] = "Desistimiento o renuncia.";
 choices[11][2] = "Caducidad.";
 choices[11][3] = "Todas las anteriores.";
 answers[11] = choices[11][3];
 units[11] = "7";
 comments[11] = "Id Pregunta: 669. Art&iacute;culo 84 de la Ley 39/2015";


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[12]= new Array();
 choices[12][0] = "Las respuestas a) y b) son correctas.";
 choices[12][1] = "Las respuestas a) y b) no son correctas.";
 choices[12][2] = "Contenido coherente con los planes sectoriales.";
 choices[12][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[12] = choices[12][0];
 units[12] = "10";
 comments[12] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[13]= "14)  Las Universidades p&uacute;blicas:";
 choices[13]= new Array();
 choices[13][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[13][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[13][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[13][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[13] = choices[13][1];
 units[13] = "7";
 comments[13] = "Id Pregunta: 516. LEY 39/2015";


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[14]= new Array();
 choices[14][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[14][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[14][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[14][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[14] = choices[14][1];
 units[14] = "19";
 comments[14] = "Id Pregunta: 560. Agenda Digital";


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[15]= "16)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[15]= new Array();
 choices[15][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[15][1] = "el Consejo de Estado";
 choices[15][2] = "el Congreso";
 choices[15][3] = "las Cortes Generales";
 answers[15] = choices[15][0];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 783. Ley 40/2015";


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[16]= "17)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[16]= new Array();
 choices[16][0] = "P&uacute;blica.";
 choices[16][1] = "Privada.";
 choices[16][2] = "A y B son correctas.";
 choices[16][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[16] = choices[16][2];
 units[16] = "14";
 comments[16] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[17]= "18)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[17]= new Array();
 choices[17][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[17][1] = "los Subdelegados del Gobierno en las provincias";
 choices[17][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[17][3] = "a y b son correctas";
 answers[17] = choices[17][3];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 788. Ley 40/2015";


//  Id pregunta: 459 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[18]= new Array();
 choices[18][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[18][1] = "Pasivos financieros y transferencias de capital.";
 choices[18][2] = "Activos financieros y pasivos financieros.";
 choices[18][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[18] = choices[18][2];
 units[18] = "10";
 comments[18] = "Id Pregunta: 459. PRESUPUESTOS GENERALES";


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[19]= "20)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[19]= new Array();
 choices[19][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[19][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[19][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[19][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[19] = choices[19][0];
 units[19] = "1";
 comments[19] = "Id Pregunta: 202. CONSTITUCION1978";


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[20]= "21)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[20]= new Array();
 choices[20][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[20][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[20][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[20][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[20] = choices[20][0];
 units[20] = "31";
 comments[20] = "Id Pregunta: 2. AGE A1 2015";


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[21]= new Array();
 choices[21][0] = "El BCE";
 choices[21][1] = "El Parlamento";
 choices[21][2] = "El Consejo";
 choices[21][3] = "La Comisi&oacute;n";
 answers[21] = choices[21][3];
 units[21] = "17";
 comments[21] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[22]= new Array();
 choices[22][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[22][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[22][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[22][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[22] = choices[22][3];
 units[22] = "5";
 comments[22] = "Id Pregunta: 332. UNION EUROPEA";


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[23]= "24)  Los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[23]= new Array();
 choices[23][0] = "los &oacute;rganos administrativos";
 choices[23][1] = "las entidades dependientes";
 choices[23][2] = "las unidades administrativas";
 choices[23][3] = "los servicios comunes";
 answers[23] = choices[23][2];
 units[23] = "4, 7, 8, 9";
 comments[23] = "Id Pregunta: 797. Ley 40/2015";


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[24]= "25)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[24]= new Array();
 choices[24][0] = "Ejecuci&oacute;n";
 choices[24][1] = "Adjudicaci&oacute;n";
 choices[24][2] = "Licitaci&oacute;n";
 choices[24][3] = "Formalizaci&oacute;n";
 answers[24] = choices[24][3];
 units[24] = "37";
 comments[24] = "Id Pregunta: 69. AGE A1 2015";


//  Id pregunta: 469 Año de creación de pregunta: 2016
 questions[25]= "26)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[25]= new Array();
 choices[25][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[25][1] = "Las inversiones reales y financieras.";
 choices[25][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[25][3] = "Las transferencias de capital y las inversiones reales.";
 answers[25] = choices[25][3];
 units[25] = "10";
 comments[25] = "Id Pregunta: 469. PRESUPUESTOS GENERALES";


//  Id pregunta: 650 Año de creación de pregunta: 2016
 questions[26]= "27)  Indica cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo IP versi&oacute;n 6 es incorrecta.";
 choices[26]= new Array();
 choices[26][0] = "El tama&ntilde;o de la direcci&oacute;n IP es de 128 bits.";
 choices[26][1] = "Aumento de la flexibilidad en el direccionamiento.";
 choices[26][2] = "Define una cabecera de extensi&oacute;n que proporciona autenticaci&oacute;n.";
 choices[26][3] = "La cabecera IP versi&oacute;n 6 obligatoria es de tama&ntilde;o variable.";
 answers[26] = choices[26][3];
 units[26] = "109";
 comments[26] = "Id Pregunta: 650. Junta de Extremadura A1 2015";


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[27]= "28)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[27]= new Array();
 choices[27][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[27][1] = "el C&oacute;digo Civil";
 choices[27][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[27][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[27] = choices[27][0];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 774. Ley 40/2015";


//  Id pregunta: 514 Año de creación de pregunta: 2016
 questions[28]= "29)  El sector p&uacute;blico institucional se integra por:";
 choices[28]= new Array();
 choices[28][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[28][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[28][2] = "las Universidades p&uacute;blicas";
 choices[28][3] = "todas son correctas";
 answers[28] = choices[28][3];
 units[28] = "7";
 comments[28] = "Id Pregunta: 514. LEY 39/2015";


//  Id pregunta: 282 Año de creación de pregunta: 2016
 questions[29]= "30)  Sobre el Plan Juncker:";
 choices[29]= new Array();
 choices[29][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[29][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[29][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[29][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[29] = choices[29][1];
 units[29] = "5";
 comments[29] = "Id Pregunta: 282. UNION EUROPEA";


//  Id pregunta: 117 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[30]= new Array();
 choices[30][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[30][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas ";
 choices[30][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[30][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[30] = choices[30][0];
 units[30] = "15";
 comments[30] = "Id Pregunta: 117. ";


//  Id pregunta: 684 Año de creación de pregunta: 2016
 questions[31]= "32)  Indique los niveles de seguridad que contempla el Reglamento (UE) 910/2014 para los sistemas de identificaci&oacute;n electr&oacute;nica";
 choices[31]= new Array();
 choices[31][0] = "B&aacute;sico, medio y alto";
 choices[31][1] = "D&eacute;bil y fuerte";
 choices[31][2] = "Bajo, medio y alto";
 choices[31][3] = "Bajo, sustancial y alto";
 answers[31] = choices[31][3];
 units[31] = "77";
 comments[31] = "Id Pregunta: 684. Art&iacute;culo 8 del Reglamento 910/2014";


//  Id pregunta: 627 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[32]= new Array();
 choices[32][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[32][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[32][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[32][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[32] = choices[32][0];
 units[32] = "46";
 comments[32] = "Id Pregunta: 627. Junta de Extremadura A1 2015";


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[33]= new Array();
 choices[33][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[33][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[33][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[33][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[33] = choices[33][0];
 units[33] = "75";
 comments[33] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 729 Año de creación de pregunta: 2016
 questions[34]= "35)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[34]= new Array();
 choices[34][0] = "Burn-up chart";
 choices[34][1] = "Arquitectural Skype";
 choices[34][2] = "Burn-down chart";
 choices[34][3] = "Definition of done";
 answers[34] = choices[34][1];
 units[34] = "34, 84";
 comments[34] = "Id Pregunta: 729. Metodologias &aacute;giles";


//  Id pregunta: 803 Año de creación de pregunta: 2016
 questions[35]= "36)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[35]= new Array();
 choices[35][0] = "Director General";
 choices[35][1] = "Secretario general";
 choices[35][2] = "Subdirector general";
 choices[35][3] = "Subsecretario";
 answers[35] = choices[35][0];
 units[35] = "4, 7, 8, 9";
 comments[35] = "Id Pregunta: 803. Ley 40/2015";


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[36]= "37)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[36]= new Array();
 choices[36][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[36][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[36][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[36][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[36] = choices[36][2];
 units[36] = "26";
 comments[36] = "Id Pregunta: 1. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[37]= "38)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[37]= new Array();
 choices[37][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[37][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[37][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[37][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[37] = choices[37][0];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 831. Ley 40/2015";


//  Id pregunta: 623 Año de creación de pregunta: 2016
 questions[38]= "39)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[38]= new Array();
 choices[38][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[38][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[38][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[38][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[38] = choices[38][0];
 units[38] = "65";
 comments[38] = "Id Pregunta: 623. Junta de Extremadura A1 2015";


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[39]= "40)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[39]= new Array();
 choices[39][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[39][1] = "La delimitaci&oacute;n de su territorio.";
 choices[39][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[39][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[39] = choices[39][2];
 units[39] = "1";
 comments[39] = "Id Pregunta: 228. CONSTITUCION1978";


//  Id pregunta: 217 Año de creación de pregunta: 2016
 questions[40]= "41)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[40]= new Array();
 choices[40][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[40][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[40][2] = "Son refrendados por el Rey.";
 choices[40][3] = "Son convocados por el Presidente del Gobierno.";
 answers[40] = choices[40][0];
 units[40] = "1";
 comments[40] = "Id Pregunta: 217. CONSTITUCION1978";


//  Id pregunta: 700 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes NO es un repositorio de c&oacute;digo?";
 choices[41]= new Array();
 choices[41][0] = "CVS";
 choices[41][1] = "SVN";
 choices[41][2] = "Team Foundation Server";
 choices[41][3] = "Apache Tomcat";
 answers[41] = choices[41][3];
 units[41] = "92";
 comments[41] = "Id Pregunta: 700. INTEGRACION CONTINUA";


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[42]= new Array();
 choices[42][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[42][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[42][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[42][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[42] = choices[42][0];
 units[42] = "73";
 comments[42] = "Id Pregunta: 654. ";


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[43]= "44)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[43]= new Array();
 choices[43][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[43][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[43][2] = "Absoluta frente a cualquier otro gasto.";
 choices[43][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[43] = choices[43][2];
 units[43] = "10";
 comments[43] = "Id Pregunta: 509. PRESUPUESTOS GENERALES";


//  Id pregunta: 216 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[44]= new Array();
 choices[44][0] = "El Presidente del Gobierno.";
 choices[44][1] = "El Consejo de Ministros.";
 choices[44][2] = "40 Diputados.";
 choices[44][3] = "El Ministerio Fiscal.";
 answers[44] = choices[44][0];
 units[44] = "1";
 comments[44] = "Id Pregunta: 216. CONSTITUCION1978";


//  Id pregunta: 738 Año de creación de pregunta: 2016
 questions[45]= "46)  LA estructura de la Estrategia TIC:";
 choices[45]= new Array();
 choices[45][0] = "5 principios rectores, 7 principios estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[45][1] = "5 principios rectores, 5 principios estrat&eacute;gicos, 7 l&iacute;neas de acci&oacute;n";
 choices[45][2] = "5 principios rectores, 5 principios estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[45][3] = "5 principios rectores, 6 principios estrat&eacute;gicos, 8 l&iacute;neas de acci&oacute;n";
 answers[45] = choices[45][2];
 units[45] = "28";
 comments[45] = "Id Pregunta: 738. Estrategia TIC";


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[46]= "47)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[46]= new Array();
 choices[46][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[46][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[46][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[46][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[46] = choices[46][3];
 units[46] = "7";
 comments[46] = "Id Pregunta: 528. LEY 39/2015";


//  Id pregunta: 272 Año de creación de pregunta: 2016
 questions[47]= "48)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[47]= new Array();
 choices[47][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[47][1] = "Anteriormente se denominaba Sonar.";
 choices[47][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[47][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[47] = choices[47][2];
 units[47] = "92";
 comments[47] = "Id Pregunta: 272. INTEGRACION CONTINUA";


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[48]= "49)  El Parlamento Europeo celebrar&aacute;:";
 choices[48]= new Array();
 choices[48][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[48][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[48][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[48][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[48] = choices[48][0];
 units[48] = "5";
 comments[48] = "Id Pregunta: 290. UNION EUROPEA";


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[49]= new Array();
 choices[49][0] = "Crecimiento inteligente.";
 choices[49][1] = "Crecimiento inclusivo.";
 choices[49][2] = "Crecimiento sostenible.";
 choices[49][3] = "Crecimiento integrador.";
 answers[49] = choices[49][1];
 units[49] = "5";
 comments[49] = "Id Pregunta: 283. UNION EUROPEA";


//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Qu&eacute; es SonarQube?";
 choices[50]= new Array();
 choices[50][0] = "Una m&eacute;trica de calidad orientada a estandarizar la evaluaci&oacute;n cualitativa del c&oacute;digo fuente.";
 choices[50][1] = "Una plataforma Open Source de inspecci&oacute;n continua de la calidad del c&oacute;digo.";
 choices[50][2] = "Una herramienta propietaria para la integraci&oacute;n continua, integrada en Apache Jenkins.";
 choices[50][3] = "Una herramienta multiplataforma para la evaluaci&oacute;n de la calidad en el c&oacute;digo desarrollada en VisualBasic 6.";
 answers[50] = choices[50][2];
 units[50] = "92";
 comments[50] = "Id Pregunta: 698. INTEGRACION CONTINUA";


//  Id pregunta: 31 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Qu&eacute; es MongoDB?";
 choices[51]= new Array();
 choices[51][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[51][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[51][2] = "Un sistema gestor de base de datos relacional.";
 choices[51][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[51] = choices[51][1];
 units[51] = "73";
 comments[51] = "Id Pregunta: 31. AGE A1 2015";


//  Id pregunta: 702 Año de creación de pregunta: 2016
 questions[52]= "53)  En el modelo de integraci&oacute;n continua se recomienda:";
 choices[52]= new Array();
 choices[52][0] = "Mantener un repositorio de c&oacute;digo.";
 choices[52][1] = "Realizar una migraci&oacute;n manual y controlada a cada entorno de desarrollo.";
 choices[52][2] = "Realizar las construcciones de versiones agrupando m&uacute;ltiples commits para optimizar el tiempo de proceso.";
 choices[52][3] = "Realizar las pruebas en el entorno de producci&oacute;n para obtener resultados reales.";
 answers[52] = choices[52][1];
 units[52] = "92";
 comments[52] = "Id Pregunta: 702. INTEGRACION CONTINUA";


//  Id pregunta: 229 Año de creación de pregunta: 2016
 questions[53]= "54)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[53]= new Array();
 choices[53][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[53][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[53][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[53][3] = "A las Diputaciones y a las Comarcas.";
 answers[53] = choices[53][3];
 units[53] = "1";
 comments[53] = "Id Pregunta: 229. CONSTITUCION1978";


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[54]= new Array();
 choices[54][0] = "Diagrama de clases";
 choices[54][1] = "Diagrama de componentes";
 choices[54][2] = "Diagrama de estructura";
 choices[54][3] = "Diagrama de paquetes";
 answers[54] = choices[54][0];
 units[54] = "91";
 comments[54] = "Id Pregunta: 88. AGE A1 2015";


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[55]= "56)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[55]= new Array();
 choices[55][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[55][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[55][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[55][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[55] = choices[55][2];
 units[55] = "27";
 comments[55] = "Id Pregunta: 20. AGE A1 2015";


//  Id pregunta: 150 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[56]= new Array();
 choices[56][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[56][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[56][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[56][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[56] = choices[56][2];
 units[56] = "7";
 comments[56] = "Id Pregunta: 150. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[57]= new Array();
 choices[57][0] = "SPARQL";
 choices[57][1] = "UnQL";
 choices[57][2] = "XQUERY";
 choices[57][3] = "RQL";
 answers[57] = choices[57][0];
 units[57] = "74";
 comments[57] = "Id Pregunta: 23. AGE A1 2015";


//  Id pregunta: 352 Año de creación de pregunta: 2016
 questions[58]= "59)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[58]= new Array();
 choices[58][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[58][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[58][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[58][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[58] = choices[58][0];
 units[58] = "5";
 comments[58] = "Id Pregunta: 352. UNION EUROPEA";


//  Id pregunta: 186 Año de creación de pregunta: 2016
 questions[59]= "60)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[59]= new Array();
 choices[59][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[59][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[59][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[59][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[59] = choices[59][2];
 units[59] = "1";
 comments[59] = "Id Pregunta: 186. CONSTITUCION1978";


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[60]= "61)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[60]= new Array();
 choices[60][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[60][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[60][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[60][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[60] = choices[60][0];
 units[60] = "1";
 comments[60] = "Id Pregunta: 187. CONSTITUCION1978";


//  Id pregunta: 761 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[61]= new Array();
 choices[61][0] = "En 2011";
 choices[61][1] = "En 2013";
 choices[61][2] = "En 2015";
 choices[61][3] = "En 2016";
 answers[61] = choices[61][2];
 units[61] = "17";
 comments[61] = "Id Pregunta: 761. Mercado &Uacute;nico Digital";


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[62]= "63)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[62]= new Array();
 choices[62][0] = "Cinco a&ntilde;os.";
 choices[62][1] = "Seis a&ntilde;os.";
 choices[62][2] = "Cuatro a&ntilde;os.";
 choices[62][3] = "Tres a&ntilde;os.";
 answers[62] = choices[62][0];
 units[62] = "5";
 comments[62] = "Id Pregunta: 304. UNION EUROPEA";


//  Id pregunta: 749 Año de creación de pregunta: 2016
 questions[63]= "64)  En los or&iacute;genes te&oacute;ricos del t&eacute;rmino gobernanza se encuentra:";
 choices[63]= new Array();
 choices[63][0] = "Peters";
 choices[63][1] = "Hollingsworth";
 choices[63][2] = "Manuel Castells";
 choices[63][3] = "Gaebler";
 answers[63] = choices[63][1];
 units[63] = "18, 20";
 comments[63] = "Id Pregunta: 749. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[64]= "65)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[64]= new Array();
 choices[64][0] = "Estrasburgo.";
 choices[64][1] = "Bruselas.";
 choices[64][2] = "Luxemburgo.";
 choices[64][3] = "Holanda.";
 answers[64] = choices[64][2];
 units[64] = "5";
 comments[64] = "Id Pregunta: 295. UNION EUROPEA";


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[65]= "66)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[65]= new Array();
 choices[65][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[65][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[65][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[65][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[65] = choices[65][2];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 762. Ley 40/2015";


//  Id pregunta: 697 Año de creación de pregunta: 2016
 questions[66]= "67)  Cu&aacute;l de las siguientes afirmaciones relativas a Apache Jenkins es falsa";
 choices[66]= new Array();
 choices[66][0] = "Est&aacute; desarrollado en Java.";
 choices[66][1] = "Fue un proyecto escindido de Hudson tras una disputa con Oracle.";
 choices[66][2] = "Se considera software libre bajo la licencia EUPL.";
 choices[66][3] = "Todas las afirmaciones son correctas.";
 answers[66] = choices[66][2];
 units[66] = "92";
 comments[66] = "Id Pregunta: 697. INTEGRACION CONTINUA";


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[67]= "68)  Son rasgos fundamentales del sistema burocr&aacute;tico:";
 choices[67]= new Array();
 choices[67][0] = "La racionalidad en la divisi&oacute;n del trabajo";
 choices[67][1] = "La eficiencia en el uso de los recursos p&uacute;blicos";
 choices[67][2] = "La competencia t&eacute;cnica y la meritocracia";
 choices[67][3] = "a) y c) son rasgos fundamentales del sistema burocr&aacute;tico";
 answers[67] = choices[67][3];
 units[67] = "18, 20";
 comments[67] = "Id Pregunta: 748. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[68]= "69)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[68]= new Array();
 choices[68][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[68][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[68][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[68][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[68] = choices[68][0];
 units[68] = "1";
 comments[68] = "Id Pregunta: 239. CONSTITUCION1978";


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale el plazo en que deben ser auditados los prestadores cualificados de servicios de confianza";
 choices[69]= new Array();
 choices[69][0] = "Al menos cada 12 meses";
 choices[69][1] = "El Reglamento no trata la supervisi&oacute;n de los prestadores cualificados de servicios de confianza, dejando tal cuesti&oacute;n a la regulaci&oacute;n nacional de cada Estado miembro";
 choices[69][2] = "Al menos cada 18 meses";
 choices[69][3] = "Al menos cada 24 meses";
 answers[69] = choices[69][3];
 units[69] = "77";
 comments[69] = "Id Pregunta: 685. Art&iacute;culo 20 del Reglamento 910/2014";


//  Id pregunta: 424 Año de creación de pregunta: 2016
 questions[70]= "71)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[70]= new Array();
 choices[70][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[70][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[70][2] = "Ninguna es correcta.";
 choices[70][3] = "A y B son correctas.";
 answers[70] = choices[70][0];
 units[70] = "14";
 comments[70] = "Id Pregunta: 424. POLITICAS DE IGUALDAD";


//  Id pregunta: 689 Año de creación de pregunta: 2016
 questions[71]= "72)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[71]= new Array();
 choices[71][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[71][1] = "1 de enero de 2015";
 choices[71][2] = "1 de enero de 2016";
 choices[71][3] = "1 de julio de 2016";
 answers[71] = choices[71][3];
 units[71] = "77";
 comments[71] = "Id Pregunta: 689. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[72]= new Array();
 choices[72][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[72][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[72][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[72][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[72] = choices[72][0];
 units[72] = "15";
 comments[72] = "Id Pregunta: 114. ";


//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[73]= new Array();
 choices[73][0] = "La CETIC";
 choices[73][1] = "Los Ministerios";
 choices[73][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[73][3] = "Ninguno de los anteriores";
 answers[73] = choices[73][1];
 units[73] = "19";
 comments[73] = "Id Pregunta: 595. Estrategia TIC";


//  Id pregunta: 374 Año de creación de pregunta: 2016
 questions[74]= "75)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[74]= new Array();
 choices[74][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[74][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[74][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[74][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[74] = choices[74][3];
 units[74] = "5";
 comments[74] = "Id Pregunta: 374. UNION EUROPEA";


