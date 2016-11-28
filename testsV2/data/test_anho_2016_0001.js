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

//  Id pregunta: 350 Año de creación de pregunta: 2016
 questions[0]= "1)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[0]= new Array();
 choices[0][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[0][1] = "Uno de sus miembros.";
 choices[0][2] = "La Comisi&oacute;n.";
 choices[0][3] = "Todas las respuestas son correctas.";
 answers[0] = choices[0][3];
 units[0] = "5";
 comments[0] = "Id Pregunta: 350. UNION EUROPEA";


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[1]= "2)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[1]= new Array();
 choices[1][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[1][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[1][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[1][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[1] = choices[1][1];
 units[1] = "1";
 comments[1] = "Id Pregunta: 205. CONSTITUCION1978";


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[2]= "3)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[2]= new Array();
 choices[2][0] = "Los Derechos y Deberes fundamentales.";
 choices[2][1] = "La Corona.";
 choices[2][2] = "El Poder Judicial.";
 choices[2][3] = "Las Cortes Generales.";
 answers[2] = choices[2][2];
 units[2] = "1";
 comments[2] = "Id Pregunta: 267. CONSTITUCION1978";


//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[3]= new Array();
 choices[3][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[3][1] = "El sprint rel&eacute;ase es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM.";
 choices[3][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[3][3] = "En el sprint rel&eacute;ase se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[3] = choices[3][1];
 units[3] = "34, 84";
 comments[3] = "Id Pregunta: 726. Metodologias &aacute;giles";


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[4]= "5)  La Administraci&oacute;n General del Estado se organiza:";
 choices[4]= new Array();
 choices[4][0] = "en Ministerios";
 choices[4][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[4][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[4][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[4] = choices[4][1];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 802. Ley 40/2015";


//  Id pregunta: 750 Año de creación de pregunta: 2016
 questions[5]= "6)  Son rasgos fundamentales del sistema burocr&aacute;tico:";
 choices[5]= new Array();
 choices[5][0] = "La racionalidad en la divisi&oacute;n del trabajo";
 choices[5][1] = "La eficiencia en el uso de los recursos p&uacute;blicos";
 choices[5][2] = "La competencia t&eacute;cnica y la meritocracia";
 choices[5][3] = "a) y c) son rasgos fundamentales del sistema burocr&aacute;tico";
 answers[5] = choices[5][3];
 units[5] = "18, 20";
 comments[5] = "Id Pregunta: 750. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[6]= "7)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[6]= new Array();
 choices[6][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[6][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[6][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[6][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[6] = choices[6][2];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 764. Ley 40/2015";


//  Id pregunta: 405 Año de creación de pregunta: 2016
 questions[7]= "8)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[7]= new Array();
 choices[7][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[7][1] = "Directiva 2004/113/CE del Consejo.";
 choices[7][2] = "Todas son correctas.";
 choices[7][3] = "Todas son falsas.";
 answers[7] = choices[7][2];
 units[7] = "14";
 comments[7] = "Id Pregunta: 405. POLITICAS DE IGUALDAD";


//  Id pregunta: 225 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[8]= new Array();
 choices[8][0] = "las Cortes generales.";
 choices[8][1] = "los partidos pol&iacute;ticos.";
 choices[8][2] = "los sindicatos.";
 choices[8][3] = "las Comunidades Aut&oacute;nomas.";
 answers[8] = choices[8][1];
 units[8] = "1";
 comments[8] = "Id Pregunta: 225. CONSTITUCION1978";


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[9]= "10)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[9]= new Array();
 choices[9][0] = "la poblaci&oacute;n del territorio";
 choices[9][1] = "el volumen de gesti&oacute;n";
 choices[9][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[9][3] = "todas son correctas";
 answers[9] = choices[9][3];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 816. Ley 40/2015";


//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[10]= "11)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[10]= new Array();
 choices[10][0] = "VMware ESX";
 choices[10][1] = "XenServer";
 choices[10][2] = "Alfresco";
 choices[10][3] = "Microsoft Hyper-V";
 answers[10] = choices[10][2];
 units[10] = "54";
 comments[10] = "Id Pregunta: 96. AGE A1 2015";


//  Id pregunta: 473 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[11]= new Array();
 choices[11][0] = "Org&aacute;nica.";
 choices[11][1] = "Contable.";
 choices[11][2] = "Econ&oacute;mica.";
 choices[11][3] = "Por programas.";
 answers[11] = choices[11][2];
 units[11] = "10";
 comments[11] = "Id Pregunta: 473. PRESUPUESTOS GENERALES";


//  Id pregunta: 246 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[12]= new Array();
 choices[12][0] = "Dos Cap&iacute;tulos.";
 choices[12][1] = "Tres Cap&iacute;tulos.";
 choices[12][2] = "Un Cap&iacute;tulo.";
 choices[12][3] = "Cuatro Cap&iacute;tulos.";
 answers[12] = choices[12][1];
 units[12] = "1";
 comments[12] = "Id Pregunta: 246. CONSTITUCION1978";


//  Id pregunta: 607 Año de creación de pregunta: 2016
 questions[13]= "14)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[13]= new Array();
 choices[13][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[13][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[13][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[13][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[13] = choices[13][2];
 units[13] = "101";
 comments[13] = "Id Pregunta: 607. Junta de Extremadura A1 2015";


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[14]= "15)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[14]= new Array();
 choices[14][0] = "El Tratado de Maastrich.";
 choices[14][1] = "El Tratado de Amsterdam.";
 choices[14][2] = "El Tratado de Par&iacute;s.";
 choices[14][3] = "El Tratado de Roma.";
 answers[14] = choices[14][3];
 units[14] = "5";
 comments[14] = "Id Pregunta: 342. UNION EUROPEA";


//  Id pregunta: 578 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[15]= new Array();
 choices[15][0] = "PostgreSQL";
 choices[15][1] = "Datawarehouse";
 choices[15][2] = "Snowflake";
 choices[15][3] = "CouchDB";
 answers[15] = choices[15][0];
 units[15] = "61";
 comments[15] = "Id Pregunta: 578. Tema 61. TAI 2016.";


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[16]= "17)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[16]= new Array();
 choices[16][0] = "Pas&oacute; de 518 a 626.";
 choices[16][1] = "Pas&oacute; de 434 a 518.";
 choices[16][2] = "Pas&oacute; de 345 a 512.";
 choices[16][3] = "Pas&oacute; de 435 a 610.";
 answers[16] = choices[16][1];
 units[16] = "5";
 comments[16] = "Id Pregunta: 344. UNION EUROPEA";


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[17]= new Array();
 choices[17][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[17][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[17][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[17][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[17] = choices[17][1];
 units[17] = "18, 20";
 comments[17] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 608 Año de creación de pregunta: 2016
 questions[18]= "19)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[18]= new Array();
 choices[18][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[18][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[18][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[18][3] = "Todas las respuestas son correctas.";
 answers[18] = choices[18][1];
 units[18] = "101";
 comments[18] = "Id Pregunta: 608. Junta de Extremadura A1 2015";


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[19]= "20)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[19]= new Array();
 choices[19][0] = "Quince miembros.";
 choices[19][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[19][2] = "Los miembros que determine el Consejo.";
 choices[19][3] = "Un Presidente y quince miembros.";
 answers[19] = choices[19][1];
 units[19] = "5";
 comments[19] = "Id Pregunta: 299. UNION EUROPEA";


//  Id pregunta: 673 Año de creación de pregunta: 2016
 questions[20]= "21)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[20]= new Array();
 choices[20][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[20][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[20][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[20][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[20] = choices[20][0];
 units[20] = "7";
 comments[20] = "Id Pregunta: 673. T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[21]= "22)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[21]= new Array();
 choices[21][0] = "Seis a&ntilde;os.";
 choices[21][1] = "Cinco a&ntilde;os.";
 choices[21][2] = "Cuatro a&ntilde;os.";
 choices[21][3] = "Ocho a&ntilde;os.";
 answers[21] = choices[21][1];
 units[21] = "5";
 comments[21] = "Id Pregunta: 307. UNION EUROPEA";


//  Id pregunta: 630 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[22]= new Array();
 choices[22][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[22][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[22][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[22][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[22] = choices[22][0];
 units[22] = "45";
 comments[22] = "Id Pregunta: 630. Junta de Extremadura A1 2015";


//  Id pregunta: 658 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[23]= new Array();
 choices[23][0] = "Cassandra";
 choices[23][1] = "Riak";
 choices[23][2] = "Avro";
 choices[23][3] = "Zookeeper";
 answers[23] = choices[23][3];
 units[23] = "73";
 comments[23] = "Id Pregunta: 658. ";


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[24]= "25)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[24]= new Array();
 choices[24][0] = "A los cinco a&ntilde;os.";
 choices[24][1] = "A los dos a&ntilde;os.";
 choices[24][2] = "A los tres a&ntilde;os.";
 choices[24][3] = "A los cuatro a&ntilde;os.";
 answers[24] = choices[24][0];
 units[24] = "10";
 comments[24] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[25]= "26)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[25]= new Array();
 choices[25][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[25][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[25][2] = "El Presidente del Gobierno";
 choices[25][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[25] = choices[25][1];
 units[25] = "26";
 comments[25] = "Id Pregunta: 551. Gobernanza TIC";


//  Id pregunta: 5 Año de creación de pregunta: 2016
 questions[26]= "27)  Se&ntilde;ale cu&aacute;l de los siguientes NO es uno de los principios de COBIT v5:";
 choices[26]= new Array();
 choices[26][0] = "Satisfacer las necesidades de las partes interesadas.";
 choices[26][1] = "Cubrir las necesidades del departamento de tecnolog&iacute;as de la informaci&oacute;n.";
 choices[26][2] = "Habilitar un enfoque hol&iacute;stico.";
 choices[26][3] = "Separar el gobierno de la gesti&oacute;n.";
 answers[26] = choices[26][1];
 units[26] = "101";
 comments[26] = "Id Pregunta: 5. AGE A1 2015";


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[27]= "28)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[27]= new Array();
 choices[27][0] = "Estrasburgo.";
 choices[27][1] = "Bruselas.";
 choices[27][2] = "Luxemburgo.";
 choices[27][3] = "Holanda.";
 answers[27] = choices[27][2];
 units[27] = "5";
 comments[27] = "Id Pregunta: 295. UNION EUROPEA";


//  Id pregunta: 459 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n el art&iacute;culo 44.3 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los cr&eacute;ditos para la acci&oacute;n protectora en su modalidad no contributiva y universal se especificar&aacute;n:";
 choices[28]= new Array();
 choices[28][0] = "A nivel de secci&oacute;n de programa.";
 choices[28][1] = "A nivel de grupo de programa.";
 choices[28][2] = "Ninguna de las respuestas es correcta.";
 choices[28][3] = "A nivel de programa.";
 answers[28] = choices[28][3];
 units[28] = "10";
 comments[28] = "Id Pregunta: 459. PRESUPUESTOS GENERALES";


//  Id pregunta: 663 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[29]= new Array();
 choices[29][0] = "Varios namenodes y varios datanodes por cluster";
 choices[29][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[29][2] = "1 namenode y varios datanodes por cluster";
 choices[29][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[29] = choices[29][2];
 units[29] = "73";
 comments[29] = "Id Pregunta: 663. ";


//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[30]= "31)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[30]= new Array();
 choices[30][0] = "el Gobierno de la Naci&oacute;n";
 choices[30][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[30][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[30][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[30] = choices[30][3];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 773. Ley 40/2015";


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[31]= "32)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[31]= new Array();
 choices[31][0] = "Tres a&ntilde;os.";
 choices[31][1] = "Dos a&ntilde;os y medio.";
 choices[31][2] = "Cinco a&ntilde;os.";
 choices[31][3] = "Seis a&ntilde;os.";
 answers[31] = choices[31][3];
 units[31] = "5";
 comments[31] = "Id Pregunta: 291. UNION EUROPEA";


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[32]= "33)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[32]= new Array();
 choices[32][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[32][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[32][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[32][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[32] = choices[32][1];
 units[32] = "1";
 comments[32] = "Id Pregunta: 238. CONSTITUCION1978";


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[33]= "34)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[33]= new Array();
 choices[33][0] = "Principio de transparencia.";
 choices[33][1] = "Principio de cooperaci&oacute;n.";
 choices[33][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[33][3] = "Principio de lealtad institucional.";
 answers[33] = choices[33][1];
 units[33] = "10";
 comments[33] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[34]= new Array();
 choices[34][0] = "Entre 1973 y 1978";
 choices[34][1] = "Entre 1992 y 1996";
 choices[34][2] = "Entre 1978 y 1985";
 choices[34][3] = "Entre 2008 y 2013";
 answers[34] = choices[34][2];
 units[34] = "12";
 comments[34] = "Id Pregunta: 564. Modelo econ&oacute;mico";


//  Id pregunta: 616 Año de creación de pregunta: 2016
 questions[35]= "36)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[35]= new Array();
 choices[35][0] = "192.228.0.0";
 choices[35][1] = "192.228.8.0";
 choices[35][2] = "192.228.16.0";
 choices[35][3] = "192.228.17.0";
 answers[35] = choices[35][2];
 units[35] = "109";
 comments[35] = "Id Pregunta: 616. Junta de Extremadura A1 2015";


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale la respuesta correcta:";
 choices[36]= new Array();
 choices[36][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[36][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[36][2] = "A y B son correctas.";
 choices[36][3] = "A y B son falsas.";
 answers[36] = choices[36][2];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 848. Ley 40/2015";


//  Id pregunta: 19 Año de creación de pregunta: 2016
 questions[37]= "38)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[37]= new Array();
 choices[37][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[37][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[37][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[37][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[37] = choices[37][2];
 units[37] = "47";
 comments[37] = "Id Pregunta: 19. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[38]= "39)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[38]= new Array();
 choices[38][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[38][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[38][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[38][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[38] = choices[38][2];
 units[38] = "101";
 comments[38] = "Id Pregunta: 60. AGE A1 2015";


//  Id pregunta: 588 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[39]= new Array();
 choices[39][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[39][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[39][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[39][3] = "Ninguna de las anteriores";
 answers[39] = choices[39][1];
 units[39] = "19";
 comments[39] = "Id Pregunta: 588. Estrategia TIC";


//  Id pregunta: 556 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[40]= new Array();
 choices[40][0] = "El BCE";
 choices[40][1] = "El Parlamento";
 choices[40][2] = "El Consejo";
 choices[40][3] = "La Comisi&oacute;n";
 answers[40] = choices[40][3];
 units[40] = "17";
 comments[40] = "Id Pregunta: 556. Mercado &Uacute;nico Digital";


//  Id pregunta: 310 Año de creación de pregunta: 2016
 questions[41]= "42)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[41]= new Array();
 choices[41][0] = "La Comisi&oacute;n Europea.";
 choices[41][1] = "El Consejo Europeo.";
 choices[41][2] = "El Consejo de Europa.";
 choices[41][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[41] = choices[41][0];
 units[41] = "5";
 comments[41] = "Id Pregunta: 310. UNION EUROPEA";


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[42]= "43)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[42]= new Array();
 choices[42][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[42][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[42][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[42][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[42] = choices[42][3];
 units[42] = "10";
 comments[42] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";


//  Id pregunta: 760 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes no es una iniciativa propuesta por la Estrategia Europa 2020?";
 choices[43]= new Array();
 choices[43][0] = "Agenda digital para Europa";
 choices[43][1] = "Agenda de nuevas cualificaciones y empleos";
 choices[43][2] = "Juventud en movimiento";
 choices[43][3] = "Agenda Web 2.0";
 answers[43] = choices[43][3];
 units[43] = "19";
 comments[43] = "Id Pregunta: 760. Europa 2020";


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[44]= new Array();
 choices[44][0] = "El Presidente del Senado";
 choices[44][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[44][2] = "El Presidente del Gobierno";
 choices[44][3] = "El Presidente de las Cortes Generales";
 answers[44] = choices[44][2];
 units[44] = "1";
 comments[44] = "Id Pregunta: 265. CONSTITUCION1978";


//  Id pregunta: 781 Año de creación de pregunta: 2016
 questions[45]= "46)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[45]= new Array();
 choices[45][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[45][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[45][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[45][3] = "todas son correctas";
 answers[45] = choices[45][3];
 units[45] = "4, 7, 8, 9";
 comments[45] = "Id Pregunta: 781. Ley 40/2015";


//  Id pregunta: 464 Año de creación de pregunta: 2016
 questions[46]= "47)  De acuerdo con lo establecido en la Ley General Presupuestaria, durante el ejercicio presupuestario no es posible modificar la cuant&iacute;a y/o finalidad de los cr&eacute;ditos contenidos en los presupuestos de gastos mediante:";
 choices[46]= new Array();
 choices[46][0] = "Transferencias de cr&eacute;dito.";
 choices[46][1] = "Incorporaciones de cr&eacute;dito.";
 choices[46][2] = "Imputaciones de cr&eacute;dito.";
 choices[46][3] = "Ampliaciones de cr&eacute;dito.";
 answers[46] = choices[46][2];
 units[46] = "10";
 comments[46] = "Id Pregunta: 464. PRESUPUESTOS GENERALES";


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[47]= "48)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[47]= new Array();
 choices[47][0] = "circulares";
 choices[47][1] = "reglamentos internos";
 choices[47][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[47][3] = "disposiciones de car&aacute;cter general";
 answers[47] = choices[47][2];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 780. Ley 40/2015";


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[48]= "49)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[48]= new Array();
 choices[48][0] = "El acoso sexual.";
 choices[48][1] = "El acoso por raz&oacute;n del sexo.";
 choices[48][2] = "Ambas son correctas.";
 choices[48][3] = "A y B son incorrectas.";
 answers[48] = choices[48][2];
 units[48] = "14";
 comments[48] = "Id Pregunta: 421. POLITICAS DE IGUALDAD";


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[49]= "50)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[49]= new Array();
 choices[49][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[49][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[49][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[49][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[49] = choices[49][2];
 units[49] = "12";
 comments[49] = "Id Pregunta: 134. Leyes modelo econ&oacute;mico";


//  Id pregunta: 189 Año de creación de pregunta: 2016
 questions[50]= "51)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:";
 choices[50]= new Array();
 choices[50][0] = "Ley Org&aacute;nica.";
 choices[50][1] = "Ley de Bases.";
 choices[50][2] = "Ley ordinaria.";
 choices[50][3] = "Mandato.";
 answers[50] = choices[50][1];
 units[50] = "1";
 comments[50] = "Id Pregunta: 189. CONSTITUCION1978";


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[51]= new Array();
 choices[51][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[51][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[51][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[51][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[51] = choices[51][1];
 units[51] = "7";
 comments[51] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";


//  Id pregunta: 194 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;ntos miembros componen el Tribunal Constitucional?";
 choices[52]= new Array();
 choices[52][0] = "11";
 choices[52][1] = "12";
 choices[52][2] = "14";
 choices[52][3] = "8";
 answers[52] = choices[52][1];
 units[52] = "1";
 comments[52] = "Id Pregunta: 194. CONSTITUCION1978";


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[53]= "54)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[53]= new Array();
 choices[53][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[53][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[53][2] = "el Subdirector General que el Delegado designe";
 choices[53][3] = "el Secretario de Estado";
 answers[53] = choices[53][0];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 822. Ley 40/2015";


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[54]= "55)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[54]= new Array();
 choices[54][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[54][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[54][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[54][3] = "ninguna es correcta";
 answers[54] = choices[54][2];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 819. Ley 40/2015";


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[55]= "56)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[55]= new Array();
 choices[55][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[55][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[55][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[55][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[55] = choices[55][3];
 units[55] = "44";
 comments[55] = "Id Pregunta: 17. AGE A1 2015";


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[56]= "57)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[56]= new Array();
 choices[56][0] = "Aplicaci&oacute;n";
 choices[56][1] = "Sesi&oacute;n";
 choices[56][2] = "Presentaci&oacute;n";
 choices[56][3] = "Transporte";
 answers[56] = choices[56][2];
 units[56] = "105";
 comments[56] = "Id Pregunta: 18. AGE A1 2015";


//  Id pregunta: 682 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n el Real Decreto Ley 5/2013, de 15 de marzo, de medidas para favorecer la continuidad de la vida laboral de los trabajadores de mayor edad y promover el envejecimiento activo:";
 choices[57]= new Array();
 choices[57][0] = "La cuant&iacute;a de la pensi&oacute;n de jubilaci&oacute;n compatible con el trabajo ser&aacute; equivalente al 50 por 100 del importe resultante en el reconocimiento inicial, una vez aplicado, si procede, el l&iacute;mite m&aacute;ximo de pensi&oacute;n p&uacute;blica, o del que se est&eacute; percibiendo, en el momento de inicio de la compatibilidad con el trabajo, excluido, en todo caso, el complemento por m&iacute;nimos, cualquiera que sea la jornada laboral o la actividad que realice el pensionista.";
 choices[57][1] = "El trabajo compatible debe realizarse a tiempo parcial.";
 choices[57][2] = "Finalizada la relaci&oacute;n laboral por cuenta ajena o producido el cese en la actividad por cuenta propia, se restablecer&aacute; el percibo &iacute;ntegro de la pensi&oacute;n de jubilaci&oacute;n transcurridos 12 meses de la finalizaci&oacute;n de la relaci&oacute;n laboral.";
 choices[57][3] = "El acceso a la pensi&oacute;n podr&aacute; tener lugar hasta 5 a&ntilde;os antes de la edad que en cada caso resulte de aplicaci&oacute;n.";
 answers[57] = choices[57][0];
 units[57] = "14";
 comments[57] = "Id Pregunta: 682. Pensiones";


//  Id pregunta: 71 Año de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[58]= new Array();
 choices[58][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[58][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[58][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[58][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[58] = choices[58][0];
 units[58] = "86";
 comments[58] = "Id Pregunta: 71. AGE A1 2015";


//  Id pregunta: 843 Año de creación de pregunta: 2016
 questions[59]= "60)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[59]= new Array();
 choices[59][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[59][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[59][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[59][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[59] = choices[59][2];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 843. Ley 40/2015";


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[60]= "61)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[60]= new Array();
 choices[60][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[60][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[60][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[60][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[60] = choices[60][3];
 units[60] = "22";
 comments[60] = "Id Pregunta: 712. Ley de transparencia";


//  Id pregunta: 314 Año de creación de pregunta: 2016
 questions[61]= "62)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[61]= new Array();
 choices[61][0] = "Al Consejo Europeo.";
 choices[61][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[61][2] = "A la Comisi&oacute;n Europea.";
 choices[61][3] = "Al Parlamento Europeo.";
 answers[61] = choices[61][2];
 units[61] = "5";
 comments[61] = "Id Pregunta: 314. UNION EUROPEA";


//  Id pregunta: 365 Año de creación de pregunta: 2016
 questions[62]= "63)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[62]= new Array();
 choices[62][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[62][1] = "Unanimidad.";
 choices[62][2] = "Mayor&iacute;a cualificada.";
 choices[62][3] = "Mayor&iacute;a simple.";
 answers[62] = choices[62][3];
 units[62] = "5";
 comments[62] = "Id Pregunta: 365. UNION EUROPEA";


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[63]= new Array();
 choices[63][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[63][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[63][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[63][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[63] = choices[63][1];
 units[63] = "1";
 comments[63] = "Id Pregunta: 219. CONSTITUCION1978";


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[64]= new Array();
 choices[64][0] = "Anualmente";
 choices[64][1] = "Bienalmente";
 choices[64][2] = "Cada cuatro a&ntilde;os";
 choices[64][3] = "No se define ninguna periodicidad";
 answers[64] = choices[64][1];
 units[64] = "19";
 comments[64] = "Id Pregunta: 594. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";


//  Id pregunta: 445 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l no es una funcionalidad que incorpora la versi&oacute;n 3.5 de Acceda?";
 choices[65]= new Array();
 choices[65][0] = "Gesti&oacute;n de notificaciones pendientes, notificadas y rehusadas (de forma expresa o vencido el plazo de caducidad).";
 choices[65][1] = "Remisi&oacute;n a Notific@, desde el m&oacute;dulo de gesti&oacute;n de ACCEDA, de las notificaciones que se emitan como parte de la tramitaci&oacute;n de los expedientes.";
 choices[65][2] = "Gesti&oacute;n de notificaciones pendientes, notificadas y rehusadas (de forma expresa o sin haber vencido el plazo de caducidad).";
 choices[65][3] = "Parametrizaci&oacute;n de las opciones de env&iacute;o: canal de notificaci&oacute;n - Sede-e ACCEDA y Carpeta Ciudadana; DEH obligatorio; DEH voluntario / env&iacute;o postal, etc.";
 answers[65] = choices[65][2];
 units[65] = "43";
 comments[65] = "Id Pregunta: 445. SERVICIOS COMUNES";


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[66]= new Array();
 choices[66][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[66][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[66][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[66][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[66] = choices[66][1];
 units[66] = "19";
 comments[66] = "Id Pregunta: 581. Estrategia TIC";


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[67]= "68)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[67]= new Array();
 choices[67][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[67][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[67][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[67][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[67] = choices[67][1];
 units[67] = "22";
 comments[67] = "Id Pregunta: 278. LEY DE TRANSPARENCIA";


//  Id pregunta: 289 Año de creación de pregunta: 2016
 questions[68]= "69)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[68]= new Array();
 choices[68][0] = "Tres a&ntilde;os.";
 choices[68][1] = "Dos a&ntilde;os y medio.";
 choices[68][2] = "Cinco a&ntilde;os.";
 choices[68][3] = "Seis a&ntilde;os.";
 answers[68] = choices[68][2];
 units[68] = "5";
 comments[68] = "Id Pregunta: 289. UNION EUROPEA";


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[69]= "70)  En qu&eacute; consiste el principio BASE:";
 choices[69]= new Array();
 choices[69][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[69][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[69][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[69][3] = "Todas las anteriores son falsas";
 answers[69] = choices[69][3];
 units[69] = "73";
 comments[69] = "Id Pregunta: 103. ";


//  Id pregunta: 294 Año de creación de pregunta: 2016
 questions[70]= "71)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[70]= new Array();
 choices[70][0] = "Al Consejo Europeo.";
 choices[70][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[70][2] = "A la Comisi&oacute;n Europea.";
 choices[70][3] = "Al Parlamento Europeo.";
 answers[70] = choices[70][2];
 units[70] = "5";
 comments[70] = "Id Pregunta: 294. UNION EUROPEA";


//  Id pregunta: 534 Año de creación de pregunta: 2016
 questions[71]= "72)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[71]= new Array();
 choices[71][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[71][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[71][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[71][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[71] = choices[71][2];
 units[71] = "7";
 comments[71] = "Id Pregunta: 534. LEY 39/2015";


//  Id pregunta: 439 Año de creación de pregunta: 2016
 questions[72]= "73)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[72]= new Array();
 choices[72][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[72][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[72][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[72][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[72] = choices[72][1];
 units[72] = "43";
 comments[72] = "Id Pregunta: 439. SERVICIOS COMUNES";


//  Id pregunta: 200 Año de creación de pregunta: 2016
 questions[73]= "74)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[73]= new Array();
 choices[73][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[73][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[73][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[73][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[73] = choices[73][3];
 units[73] = "1";
 comments[73] = "Id Pregunta: 200. CONSTITUCION1978";


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[74]= "75)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[74]= new Array();
 choices[74][0] = "El Rey.";
 choices[74][1] = "El Jefe del Estado.";
 choices[74][2] = "El Gobierno.";
 choices[74][3] = "El Presidente del Gobierno.";
 answers[74] = choices[74][2];
 units[74] = "1";
 comments[74] = "Id Pregunta: 208. CONSTITUCION1978";


