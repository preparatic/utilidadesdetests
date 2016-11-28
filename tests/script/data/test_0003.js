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

//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[0]= "1)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[0]= new Array();
 choices[0][0] = "circulares";
 choices[0][1] = "reglamentos internos";
 choices[0][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[0][3] = "disposiciones de car&aacute;cter general";
 answers[0] = choices[0][2];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 780. Ley 40/2015";


//  Id pregunta: 110 Año de creación de pregunta: 2016
 questions[1]= "2)  La Poblaci&oacute;n Activa incluye a:";
 choices[1]= new Array();
 choices[1][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[1][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[1][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[1][3] = "Todo aquel que desea trabajar";
 answers[1] = choices[1][2];
 units[1] = "15";
 comments[1] = "Id Pregunta: 110. ";


//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale el que corresponde a un principio de integraci&oacute;n continua:";
 choices[2]= new Array();
 choices[2][0] = "Migraci&oacute;n manual y controlada a cada entorno de desarrollo";
 choices[2][1] = "Mantener un repositorio de c&oacute;digo.";
 choices[2][2] = "Reutilizaci&oacute;n de interfaces de usuario.";
 choices[2][3] = "Todos corresponden a principios de integraci&oacute;n continua.";
 answers[2] = choices[2][1];
 units[2] = "92";
 comments[2] = "Id Pregunta: 698. INTEGRACION CONTINUA";


//  Id pregunta: 272 Año de creación de pregunta: 2016
 questions[3]= "4)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[3]= new Array();
 choices[3][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[3][1] = "Anteriormente se denominaba Sonar.";
 choices[3][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[3][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[3] = choices[3][2];
 units[3] = "92";
 comments[3] = "Id Pregunta: 272. INTEGRACION CONTINUA";


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[4]= new Array();
 choices[4][0] = "Anualmente";
 choices[4][1] = "Bienalmente";
 choices[4][2] = "Cada cuatro a&ntilde;os";
 choices[4][3] = "No se define ninguna periodicidad";
 answers[4] = choices[4][1];
 units[4] = "19";
 comments[4] = "Id Pregunta: 594. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";


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


//  Id pregunta: 710 Año de creación de pregunta: 2016
 questions[6]= "7)  Indique la afirmaci&oacute;n falsa:";
 choices[6]= new Array();
 choices[6][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[6][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[6][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[6][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[6] = choices[6][1];
 units[6] = "22";
 comments[6] = "Id Pregunta: 710. Ley de transparencia";


//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[7]= new Array();
 choices[7][0] = "Un diputado y un senador, cada una de ellas";
 choices[7][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[7][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[7][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[7] = choices[7][2];
 units[7] = "1";
 comments[7] = "Id Pregunta: 192. CONSTITUCION1978";


//  Id pregunta: 521 Año de creación de pregunta: 2016
 questions[8]= "9)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[8]= new Array();
 choices[8][0] = "un art&iacute;culo";
 choices[8][1] = "dos art&iacute;culos";
 choices[8][2] = "tres art&iacute;culos";
 choices[8][3] = "cuatro art&iacute;culos";
 answers[8] = choices[8][1];
 units[8] = "7";
 comments[8] = "Id Pregunta: 521. LEY 39/2015";


//  Id pregunta: 523 Año de creación de pregunta: 2016
 questions[9]= "10)  El sector p&uacute;blico institucional se integra por:";
 choices[9]= new Array();
 choices[9][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[9][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[9][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[9][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[9] = choices[9][1];
 units[9] = "7";
 comments[9] = "Id Pregunta: 523. LEY 39/2015";


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[10]= "11)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[10]= new Array();
 choices[10][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[10][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[10][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[10][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[10] = choices[10][2];
 units[10] = "10";
 comments[10] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[11]= new Array();
 choices[11][0] = "Cuatro.";
 choices[11][1] = "Ninguno.";
 choices[11][2] = "Dos.";
 choices[11][3] = "Seis.";
 answers[11] = choices[11][2];
 units[11] = "1";
 comments[11] = "Id Pregunta: 211. CONSTITUCION1978";


//  Id pregunta: 656 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[12]= new Array();
 choices[12][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[12][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[12][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[12][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[12] = choices[12][0];
 units[12] = "73";
 comments[12] = "Id Pregunta: 656. ";


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[13]= "14)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[13]= new Array();
 choices[13][0] = "los Subsecretarios y Secretarios generales";
 choices[13][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[13][2] = "los Secretarios de Estado";
 choices[13][3] = "los Subdirectores generales";
 answers[13] = choices[13][2];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 789. Ley 40/2015";


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[14]= "15)  Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos:";
 choices[14]= new Array();
 choices[14][0] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[14][1] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 choices[14][2] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[14][3] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 answers[14] = choices[14][3];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 777. Ley 40/2015";


//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[15]= "16)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[15]= new Array();
 choices[15][0] = "VMware ESX";
 choices[15][1] = "XenServer";
 choices[15][2] = "Alfresco";
 choices[15][3] = "Microsoft Hyper-V";
 answers[15] = choices[15][2];
 units[15] = "54";
 comments[15] = "Id Pregunta: 96. AGE A1 2015";


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[16]= "17)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[16]= new Array();
 choices[16][0] = "De un mes si el acto fuera presunto";
 choices[16][1] = "De un mes si el acto fuera expreso";
 choices[16][2] = "De un mes en cualquier caso";
 choices[16][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[16] = choices[16][1];
 units[16] = "8";
 comments[16] = "Id Pregunta: 142. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 7 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[17]= new Array();
 choices[17][0] = "Nivel 7 - MPLS.";
 choices[17][1] = "Nivel 3 - RARP.";
 choices[17][2] = "Nivel 2 - HDLC.";
 choices[17][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[17] = choices[17][2];
 units[17] = "105";
 comments[17] = "Id Pregunta: 7. AGE A1 2015";


//  Id pregunta: 385 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[18]= new Array();
 choices[18][0] = "Anualmente por el Consejo de Ministros";
 choices[18][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[18][2] = "Al final de cada legislatura por el Gobierno";
 choices[18][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[18] = choices[18][0];
 units[18] = "14";
 comments[18] = "Id Pregunta: 385. POLITICAS DE IGUALDAD";


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[19]= "20)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[19]= new Array();
 choices[19][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[19][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[19][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[19][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[19] = choices[19][3];
 units[19] = "10";
 comments[19] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[20]= "21)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[20]= new Array();
 choices[20][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[20][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[20][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[20][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[20] = choices[20][2];
 units[20] = "73";
 comments[20] = "Id Pregunta: 654. ";


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[21]= "22)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[21]= new Array();
 choices[21][0] = "Lollipop";
 choices[21][1] = "Jelly Bean";
 choices[21][2] = "Marshmallow";
 choices[21][3] = "KitKat";
 answers[21] = choices[21][2];
 units[21] = "59";
 comments[21] = "Id Pregunta: 61. AGE A1 2015";


//  Id pregunta: 297 Año de creación de pregunta: 2016
 questions[22]= "23)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[22]= new Array();
 choices[22][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[22][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[22][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[22][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[22] = choices[22][1];
 units[22] = "5";
 comments[22] = "Id Pregunta: 297. UNION EUROPEA";


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[23]= "24)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[23]= new Array();
 choices[23][0] = "Los propios miembros del Tribunal.";
 choices[23][1] = "El Consejo de Europa.";
 choices[23][2] = "El Consejo Europeo.";
 choices[23][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[23] = choices[23][0];
 units[23] = "5";
 comments[23] = "Id Pregunta: 301. UNION EUROPEA";


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[24]= "25)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[24]= new Array();
 choices[24][0] = "Cincuenta y cuatro.";
 choices[24][1] = "Cincuenta.";
 choices[24][2] = "Cincuenta y cinco.";
 choices[24][3] = "Cincuenta y dos.";
 answers[24] = choices[24][1];
 units[24] = "5";
 comments[24] = "Id Pregunta: 321. UNION EUROPEA";


//  Id pregunta: 603 Año de creación de pregunta: 2016
 questions[25]= "26)  Los criptosistemas pueden clasificarse en:";
 choices[25]= new Array();
 choices[25][0] = "Concretos, Estables e Inestables.";
 choices[25][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[25][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[25][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[25] = choices[25][3];
 units[25] = "76";
 comments[25] = "Id Pregunta: 603. Junta de Extremadura A1 2015";


//  Id pregunta: 398 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[26]= new Array();
 choices[26][0] = "Art. 13, L.O.3/2007.";
 choices[26][1] = "Art. 14, L.O.3/2007.";
 choices[26][2] = "Art. 11, L.O.3/2007.";
 choices[26][3] = "Ninguna es correcta.";
 answers[26] = choices[26][2];
 units[26] = "14";
 comments[26] = "Id Pregunta: 398. POLITICAS DE IGUALDAD";


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[27]= "28)  En el lenguaje de modelado UML :";
 choices[27]= new Array();
 choices[27][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[27][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[27][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[27][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[27] = choices[27][2];
 units[27] = "89";
 comments[27] = "Id Pregunta: 3. AGE A1 2015";


//  Id pregunta: 275 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[28]= new Array();
 choices[28][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[28][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[28][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[28][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[28] = choices[28][2];
 units[28] = "22";
 comments[28] = "Id Pregunta: 275. LEY DE TRANSPARENCIA";


//  Id pregunta: 117 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[29]= new Array();
 choices[29][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[29][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas ";
 choices[29][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[29][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[29] = choices[29][0];
 units[29] = "15";
 comments[29] = "Id Pregunta: 117. ";


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[30]= "31)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[30]= new Array();
 choices[30][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[30][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[30][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[30][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[30] = choices[30][1];
 units[30] = "58";
 comments[30] = "Id Pregunta: 643. Junta de Extremadura A1 2015";


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[31]= "32)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[31]= new Array();
 choices[31][0] = "Quince miembros.";
 choices[31][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[31][2] = "Los miembros que determine el Consejo.";
 choices[31][3] = "Un Presidente y quince miembros.";
 answers[31] = choices[31][1];
 units[31] = "14";
 comments[31] = "Id Pregunta: 378. UNION EUROPEA";


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[32]= "33)  El Colegio de Comisarios se re&uacute;ne:";
 choices[32]= new Array();
 choices[32][0] = "Una vez por semana.";
 choices[32][1] = "Una vez al mes.";
 choices[32][2] = "Dos veces en semana.";
 choices[32][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[32] = choices[32][0];
 units[32] = "5";
 comments[32] = "Id Pregunta: 315. UNION EUROPEA";


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[33]= "34)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[33]= new Array();
 choices[33][0] = "el Secretario General";
 choices[33][1] = "el Subdirector General";
 choices[33][2] = "el Secretario de Estado";
 choices[33][3] = "ninguna es correcta";
 answers[33] = choices[33][0];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 823. Ley 40/2015";


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[34]= "35)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[34]= new Array();
 choices[34][0] = "Estrasburgo.";
 choices[34][1] = "Bruselas.";
 choices[34][2] = "Luxemburgo.";
 choices[34][3] = "Par&iacute;s.";
 answers[34] = choices[34][1];
 units[34] = "5";
 comments[34] = "Id Pregunta: 305. UNION EUROPEA";


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[35]= "36)  En cuanto al an&aacute;lisis DAFO:";
 choices[35]= new Array();
 choices[35][0] = "Considera detallada y exclusivamente factores internos.";
 choices[35][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[35][2] = "Considera detallada y exclusivamente factores externos.";
 choices[35][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[35] = choices[35][1];
 units[35] = "83";
 comments[35] = "Id Pregunta: 41. AGE A1 2015";


//  Id pregunta: 556 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[36]= new Array();
 choices[36][0] = "El BCE";
 choices[36][1] = "El Parlamento";
 choices[36][2] = "El Consejo";
 choices[36][3] = "La Comisi&oacute;n";
 answers[36] = choices[36][3];
 units[36] = "17";
 comments[36] = "Id Pregunta: 556. Mercado &Uacute;nico Digital";


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[37]= "38)  El sector p&uacute;blico institucional se integra por:";
 choices[37]= new Array();
 choices[37][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[37][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[37][2] = "las Universidades p&uacute;blicas";
 choices[37][3] = "todas son correctas";
 answers[37] = choices[37][3];
 units[37] = "7";
 comments[37] = "Id Pregunta: 516. LEY 39/2015";


//  Id pregunta: 669 Año de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[38]= new Array();
 choices[38][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[38][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[38][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[38][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[38] = choices[38][2];
 units[38] = "7";
 comments[38] = "Id Pregunta: 669. Cap&iacute;tulo IV, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 835 Año de creación de pregunta: 2016
 questions[39]= "40)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[39]= new Array();
 choices[39][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[39][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[39][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[39][3] = "Todas son correctas.";
 answers[39] = choices[39][0];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 835. Ley 40/2015";


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[40]= "41)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[40]= new Array();
 choices[40][0] = "El Presidente del Congreso de los Diputados.";
 choices[40][1] = "El Presidente del Gobierno.";
 choices[40][2] = "El Rey.";
 choices[40][3] = "El Consejo de Ministros.";
 answers[40] = choices[40][0];
 units[40] = "1";
 comments[40] = "Id Pregunta: 231. CONSTITUCION1978";


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[41]= "42)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[41]= new Array();
 choices[41][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[41][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[41][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[41][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[41] = choices[41][2];
 units[41] = "5";
 comments[41] = "Id Pregunta: 288. UNION EUROPEA";


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[42]= new Array();
 choices[42][0] = "Es un framework de software libre.";
 choices[42][1] = "Es una base de datos NoSQL.";
 choices[42][2] = "Est&aacute; basado en MapReduce.";
 choices[42][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[42] = choices[42][1];
 units[42] = "73";
 comments[42] = "Id Pregunta: 94. AGE A1 2015";


//  Id pregunta: 650 Año de creación de pregunta: 2016
 questions[43]= "44)  Los IDS, (Sistemas de Detecci&oacute;n de Intrusos), pueden clasificarse:";
 choices[43]= new Array();
 choices[43][0] = "Solamente en funci&oacute;n de los sistemas que monitorizan.";
 choices[43][1] = "En funci&oacute;n de los sistemas que monitorizan y en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[43][2] = "Solamente en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[43][3] = "Estos sistemas es imposible clasificarlos.";
 answers[43] = choices[43][1];
 units[43] = "119";
 comments[43] = "Id Pregunta: 650. Junta de Extremadura A1 2015";


//  Id pregunta: 336 Año de creación de pregunta: 2016
 questions[44]= "45)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[44]= new Array();
 choices[44][0] = "Diciembre de 1987.";
 choices[44][1] = "Septiembre de 1989.";
 choices[44][2] = "Octubre de 1990.";
 choices[44][3] = "Noviembre de 1980.";
 answers[44] = choices[44][1];
 units[44] = "5";
 comments[44] = "Id Pregunta: 336. UNION EUROPEA";


//  Id pregunta: 673 Año de creación de pregunta: 2016
 questions[45]= "46)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[45]= new Array();
 choices[45][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[45][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[45][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[45][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[45] = choices[45][0];
 units[45] = "7";
 comments[45] = "Id Pregunta: 673. T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 537 Año de creación de pregunta: 2016
 questions[46]= "47)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[46]= new Array();
 choices[46][0] = "la Administraci&oacute;n General del Estado";
 choices[46][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[46][2] = "las Entidades Locales";
 choices[46][3] = "todas son correctas";
 answers[46] = choices[46][3];
 units[46] = "7";
 comments[46] = "Id Pregunta: 537. LEY 39/2015";


//  Id pregunta: 78 Año de creación de pregunta: 2016
 questions[47]= "48)  En relaci&oacute;n con la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, se&ntilde;ale la respuesta correcta:";
 choices[47]= new Array();
 choices[47][0] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, el interesado debe instar su rectificaci&oacute;n, sin que puedan ser cancelados y sustituidos de oficio por los datos rectificados o completados.";
 choices[47][1] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, ser&aacute;n cancelados y sustituidos de oficio por los datos rectificados o completados, sin perjuicio del derecho de rectificaci&oacute;n y cancelaci&oacute;n del afectado.";
 choices[47][2] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 15 d&iacute;as.";
 choices[47][3] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 1 mes.";
 answers[47] = choices[47][1];
 units[47] = "35";
 comments[47] = "Id Pregunta: 78. AGE A1 2015";


//  Id pregunta: 625 Año de creación de pregunta: 2016
 questions[48]= "49)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[48]= new Array();
 choices[48][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[48][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[48][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[48][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[48] = choices[48][0];
 units[48] = "65";
 comments[48] = "Id Pregunta: 625. Junta de Extremadura A1 2015";


//  Id pregunta: 853 Año de creación de pregunta: 2016
 questions[49]= "50)  Si disponemos de 8 discos SAS de 1TB netos configurados en RAID1, &iquest;de qu&eacute; capacidad neta se dispone en RAID1 en el sistema de almacenamiento?";
 choices[49]= new Array();
 choices[49][0] = "6 TB.";
 choices[49][1] = "8 TB.";
 choices[49][2] = "7 TB.";
 choices[49][3] = "4 TB.";
 answers[49] = choices[49][3];
 units[49] = "53";
 comments[49] = "Id Pregunta: 853. Xunta de Galicia 2015";


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[50]= "51)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[50]= new Array();
 choices[50][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[50][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[50][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[50][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[50] = choices[50][2];
 units[50] = "14";
 comments[50] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[51]= new Array();
 choices[51][0] = "Establecer redes de telecomunicaciones continentales";
 choices[51][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[51][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[51][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[51] = choices[51][0];
 units[51] = "17";
 comments[51] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";


//  Id pregunta: 364 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[52]= new Array();
 choices[52][0] = "El 1 de junio de 1999.";
 choices[52][1] = "El 1 de mayo de 1999.";
 choices[52][2] = "El 1 de abril de 1999.";
 choices[52][3] = "El 1 de marzo de 1999.";
 answers[52] = choices[52][1];
 units[52] = "5";
 comments[52] = "Id Pregunta: 364. UNION EUROPEA";


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[53]= new Array();
 choices[53][0] = "Ley 50/1997, del Gobierno.";
 choices[53][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[53][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[53][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[53] = choices[53][1];
 units[53] = "10";
 comments[53] = "Id Pregunta: 475. PRESUPUESTOS GENERALES";


//  Id pregunta: 460 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[54]= new Array();
 choices[54][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[54][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[54][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[54][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[54] = choices[54][3];
 units[54] = "10";
 comments[54] = "Id Pregunta: 460. PRESUPUESTOS GENERALES";


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[55]= "56)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[55]= new Array();
 choices[55][0] = "tienen capacidad de obrar limitada";
 choices[55][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[55][2] = "no tienen capacidad de obrar";
 choices[55][3] = "ninguna es correcta";
 answers[55] = choices[55][2];
 units[55] = "7";
 comments[55] = "Id Pregunta: 528. LEY 39/2015";


//  Id pregunta: 194 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;ntos miembros componen el Tribunal Constitucional?";
 choices[56]= new Array();
 choices[56][0] = "11";
 choices[56][1] = "12";
 choices[56][2] = "14";
 choices[56][3] = "8";
 answers[56] = choices[56][1];
 units[56] = "1";
 comments[56] = "Id Pregunta: 194. CONSTITUCION1978";


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[57]= "58)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[57]= new Array();
 choices[57][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[57][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[57][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[57][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[57] = choices[57][1];
 units[57] = "43";
 comments[57] = "Id Pregunta: 441. SERVICIOS COMUNES";


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[58]= new Array();
 choices[58][0] = "SPARQL";
 choices[58][1] = "UnQL";
 choices[58][2] = "XQUERY";
 choices[58][3] = "RQL";
 answers[58] = choices[58][0];
 units[58] = "74";
 comments[58] = "Id Pregunta: 23. AGE A1 2015";


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[59]= "60)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[59]= new Array();
 choices[59][0] = "Estrasburgo.";
 choices[59][1] = "Bruselas.";
 choices[59][2] = "Luxemburgo.";
 choices[59][3] = "Holanda.";
 answers[59] = choices[59][0];
 units[59] = "5";
 comments[59] = "Id Pregunta: 293. UNION EUROPEA";


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[60]= new Array();
 choices[60][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[60][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[60][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[60][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[60] = choices[60][0];
 units[60] = "75";
 comments[60] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 67 Año de creación de pregunta: 2016
 questions[61]= "62)  En Internet, la entidad encargada de la coordinaci&oacute;n de los N&uacute;meros de Sistema Aut&oacute;nomo (Autonomous System Numbers - ASN) usados por varios protocolos de enrutamiento, es:";
 choices[61]= new Array();
 choices[61][0] = "IANA";
 choices[61][1] = "ISOC";
 choices[61][2] = "IETF";
 choices[61][3] = "IAB";
 answers[61] = choices[61][0];
 units[61] = "103";
 comments[61] = "Id Pregunta: 67. AGE A1 2015";


//  Id pregunta: 325 Año de creación de pregunta: 2016
 questions[62]= "63)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[62]= new Array();
 choices[62][0] = "Veinticinco.";
 choices[62][1] = "Veintiuno.";
 choices[62][2] = "Dieciocho.";
 choices[62][3] = "Diecinueve.";
 answers[62] = choices[62][0];
 units[62] = "5";
 comments[62] = "Id Pregunta: 325. UNION EUROPEA";


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[63]= "64)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[63]= new Array();
 choices[63][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[63][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[63][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[63][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[63] = choices[63][0];
 units[63] = "77";
 comments[63] = "Id Pregunta: 685. Art&iacute;culo 2 del Reglamento 910/2014";


//  Id pregunta: 599 Año de creación de pregunta: 2016
 questions[64]= "65)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[64]= new Array();
 choices[64][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[64][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[64][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[64][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[64] = choices[64][0];
 units[64] = "45";
 comments[64] = "Id Pregunta: 599. Junta de Extremadura A1 2015";


//  Id pregunta: 688 Año de creación de pregunta: 2016
 questions[65]= "66)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[65]= new Array();
 choices[65][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[65][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[65][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[65][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[65] = choices[65][3];
 units[65] = "77";
 comments[65] = "Id Pregunta: 688. Art&iacute;culo 25 del Reglamento 910/2014";


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[66]= new Array();
 choices[66][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[66][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[66][2] = "A) y B) son verdaderas";
 choices[66][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[66] = choices[66][2];
 units[66] = "73";
 comments[66] = "Id Pregunta: 106. ";


//  Id pregunta: 22 Año de creación de pregunta: 2016
 questions[67]= "68)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[67]= new Array();
 choices[67][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[67][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[67][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[67][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[67] = choices[67][1];
 units[67] = "26";
 comments[67] = "Id Pregunta: 22. AGE A1 2015";


//  Id pregunta: 431 Año de creación de pregunta: 2016
 questions[68]= "69)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[68]= new Array();
 choices[68][0] = "El Instituto de la Mujer.";
 choices[68][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[68][2] = "Ambas son correctas.";
 choices[68][3] = "A y B son incorrectas.";
 answers[68] = choices[68][2];
 units[68] = "14";
 comments[68] = "Id Pregunta: 431. POLITICAS DE IGUALDAD";


//  Id pregunta: 550 Año de creación de pregunta: 2016
 questions[69]= "70)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[69]= new Array();
 choices[69][0] = "La Administraci&oacute;n General del Estado";
 choices[69][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[69][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[69][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[69] = choices[69][1];
 units[69] = "26";
 comments[69] = "Id Pregunta: 550. Gobernanza TIC";


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[70]= new Array();
 choices[70][0] = "Entre 1973 y 1978";
 choices[70][1] = "Entre 1992 y 1996";
 choices[70][2] = "Entre 1978 y 1985";
 choices[70][3] = "Entre 2008 y 2013";
 answers[70] = choices[70][2];
 units[70] = "12";
 comments[70] = "Id Pregunta: 564. Modelo econ&oacute;mico";


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale la respuesta correcta:";
 choices[71]= new Array();
 choices[71][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[71][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[71][2] = "Las respuestas A y B son correctas.";
 choices[71][3] = "Las respuestas A y B son falsas.";
 answers[71] = choices[71][2];
 units[71] = "5";
 comments[71] = "Id Pregunta: 279. UNION EUROPEA";


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[72]= "73)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[72]= new Array();
 choices[72][0] = "61";
 choices[72][1] = "53";
 choices[72][2] = "65";
 choices[72][3] = "67";
 answers[72] = choices[72][1];
 units[72] = "1";
 comments[72] = "Id Pregunta: 248. CONSTITUCION1978";


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[73]= "74)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[73]= new Array();
 choices[73][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[73][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[73][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[73][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[73] = choices[73][0];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 779. Ley 40/2015";


//  Id pregunta: 571 Año de creación de pregunta: 2016
 questions[74]= "75)  El sector Servicios NO incluye:";
 choices[74]= new Array();
 choices[74][0] = "El Comercio";
 choices[74][1] = "Los Transportes";
 choices[74][2] = "La Energ&iacute;a";
 choices[74][3] = "Las Comunicaciones";
 answers[74] = choices[74][2];
 units[74] = "12";
 comments[74] = "Id Pregunta: 571. Modelo econ&oacute;mico";


