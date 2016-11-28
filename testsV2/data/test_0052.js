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

//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[0]= "1)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[0]= new Array();
 choices[0][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[0][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[0][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[0][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[0] = choices[0][1];
 units[0] = "14";
 comments[0] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";


//  Id pregunta: 343 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[1]= new Array();
 choices[1][0] = "23";
 choices[1][1] = "20";
 choices[1][2] = "14";
 choices[1][3] = "18";
 answers[1] = choices[1][1];
 units[1] = "5";
 comments[1] = "Id Pregunta: 343. UNION EUROPEA";


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[2]= new Array();
 choices[2][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[2][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[2][2] = "Solamente soporta herramientas de control de versiones como CVS, Git y Clearcase.";
 choices[2][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[2] = choices[2][1];
 units[2] = "92";
 comments[2] = "Id Pregunta: 716. INTEGRACION CONTINUA";


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[3]= new Array();
 choices[3][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[3][1] = "Solamente el Congreso.";
 choices[3][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[3][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[3] = choices[3][0];
 units[3] = "1";
 comments[3] = "Id Pregunta: 176. CONSTITUCION1978";


//  Id pregunta: 292 Año de creación de pregunta: 2016
 questions[4]= "5)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[4]= new Array();
 choices[4][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[4][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[4][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[4][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[4] = choices[4][1];
 units[4] = "5";
 comments[4] = "Id Pregunta: 292. UNION EUROPEA";


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[5]= "6)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[5]= new Array();
 choices[5][0] = "Un informe de impacto de g&eacute;nero.";
 choices[5][1] = "Un programa de igualdad de oportunidades.";
 choices[5][2] = "Un plan de Igualdad de Oportunidades.";
 choices[5][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[5] = choices[5][0];
 units[5] = "14";
 comments[5] = "Id Pregunta: 414. POLITICAS DE IGUALDAD";


//  Id pregunta: 123 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[6]= new Array();
 choices[6][0] = "Un representante de la Administraci&oacute;n local.";
 choices[6][1] = "Un representante del Tribunal de Cuentas.";
 choices[6][2] = "Un representante del Defensor del Pueblo.";
 choices[6][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[6] = choices[6][0];
 units[6] = "22";
 comments[6] = "Id Pregunta: 123. ";


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[7]= "8)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[7]= new Array();
 choices[7][0] = "Estrasburgo.";
 choices[7][1] = "Bruselas.";
 choices[7][2] = "Luxemburgo.";
 choices[7][3] = "Holanda.";
 answers[7] = choices[7][0];
 units[7] = "5";
 comments[7] = "Id Pregunta: 293. UNION EUROPEA";


//  Id pregunta: 851 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Qu&eacute; m&eacute;todo de replicaci&oacute;n remota entre sistemas de almacenamiento se ve m&aacute;s afectada por la latencia en el caso de largas distancias?";
 choices[8]= new Array();
 choices[8][0] = "As&iacute;ncrona.";
 choices[8][1] = "Log-shipping.";
 choices[8][2] = "Disk buffering.";
 choices[8][3] = "S&iacute;ncrona.";
 answers[8] = choices[8][3];
 units[8] = "53";
 comments[8] = "Id Pregunta: 851. Xunta de Galicia 2015";


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[9]= "10)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[9]= new Array();
 choices[9][0] = "Subsecretario";
 choices[9][1] = "Subdirector general";
 choices[9][2] = "Secretario de Estado";
 choices[9][3] = "ninguna es correcta";
 answers[9] = choices[9][1];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 792. Ley 40/2015";


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[10]= "11)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[10]= new Array();
 choices[10][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[10][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[10][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[10][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[10] = choices[10][2];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 784. Ley 40/2015";


//  Id pregunta: 445 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l no es una funcionalidad que incorpora la versi&oacute;n 3.5 de Acceda?";
 choices[11]= new Array();
 choices[11][0] = "Gesti&oacute;n de notificaciones pendientes, notificadas y rehusadas (de forma expresa o vencido el plazo de caducidad).";
 choices[11][1] = "Remisi&oacute;n a Notific@, desde el m&oacute;dulo de gesti&oacute;n de ACCEDA, de las notificaciones que se emitan como parte de la tramitaci&oacute;n de los expedientes.";
 choices[11][2] = "Gesti&oacute;n de notificaciones pendientes, notificadas y rehusadas (de forma expresa o sin haber vencido el plazo de caducidad).";
 choices[11][3] = "Parametrizaci&oacute;n de las opciones de env&iacute;o: canal de notificaci&oacute;n - Sede-e ACCEDA y Carpeta Ciudadana; DEH obligatorio; DEH voluntario / env&iacute;o postal, etc.";
 answers[11] = choices[11][2];
 units[11] = "43";
 comments[11] = "Id Pregunta: 445. SERVICIOS COMUNES";


//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[12]= "13)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[12]= new Array();
 choices[12][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[12][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[12][2] = "Absoluta frente a cualquier otro gasto.";
 choices[12][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[12] = choices[12][2];
 units[12] = "10";
 comments[12] = "Id Pregunta: 511. PRESUPUESTOS GENERALES";


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[13]= "14)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[13]= new Array();
 choices[13][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[13][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[13][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[13][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[13] = choices[13][3];
 units[13] = "106";
 comments[13] = "Id Pregunta: 74. AGE A1 2015";


//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[14]= "15)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[14]= new Array();
 choices[14][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[14][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[14][2] = "Veintisiete Jueces y ocho Abogados Generales.";
 choices[14][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[14] = choices[14][2];
 units[14] = "5";
 comments[14] = "Id Pregunta: 354. UNION EUROPEA";


//  Id pregunta: 730 Año de creación de pregunta: 2016
 questions[15]= "16)  Indica la respuesta correcta";
 choices[15]= new Array();
 choices[15][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[15][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[15][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[15][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[15] = choices[15][0];
 units[15] = "34, 84";
 comments[15] = "Id Pregunta: 730. Metodologias &aacute;giles";


//  Id pregunta: 399 Año de creación de pregunta: 2016
 questions[16]= "17)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[16]= new Array();
 choices[16][0] = "Acciones de discriminaci&oacute;n.";
 choices[16][1] = "Acciones positivas.";
 choices[16][2] = "Acciones negativas.";
 choices[16][3] = "Acciones neutras.";
 answers[16] = choices[16][1];
 units[16] = "14";
 comments[16] = "Id Pregunta: 399. POLITICAS DE IGUALDAD";


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[17]= "18)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[17]= new Array();
 choices[17][0] = "por Real Decreto";
 choices[17][1] = "reglamentariamente";
 choices[17][2] = "mediante Ley";
 choices[17][3] = "ninguna es correcta";
 answers[17] = choices[17][1];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 817. Ley 40/2015";


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[18]= "19)  El Tribunal de Justicia est&aacute; formado por:";
 choices[18]= new Array();
 choices[18][0] = "Un Juez de cada Estado miembro.";
 choices[18][1] = "Por dos Jueces de cada Estado miembro.";
 choices[18][2] = "Por veinte Jueces.";
 choices[18][3] = "Por ocho Jueces.";
 answers[18] = choices[18][0];
 units[18] = "5";
 comments[18] = "Id Pregunta: 322. UNION EUROPEA";


//  Id pregunta: 744 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, se entiende por emprendedor:";
 choices[19]= new Array();
 choices[19][0] = "Aquellas personas f&iacute;sicas que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[19][1] = "Aquellas personas independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar una actividad econ&oacute;mica productiva.";
 choices[19][2] = "Aquellas personas, independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = choices[19][2];
 units[19] = "18, 20";
 comments[19] = "Id Pregunta: 744. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[20]= "21)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[20]= new Array();
 choices[20][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[20][1] = "el Consejo de Estado";
 choices[20][2] = "el Congreso";
 choices[20][3] = "las Cortes Generales";
 answers[20] = choices[20][0];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 785. Ley 40/2015";


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[21]= new Array();
 choices[21][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[21][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[21][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[21][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[21] = choices[21][3];
 units[21] = "10";
 comments[21] = "Id Pregunta: 487. PRESUPUESTOS GENERALES";


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[22]= new Array();
 choices[22][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[22][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[22][2] = "Fomentar el despliegue de redes y servicios";
 choices[22][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[22] = choices[22][0];
 units[22] = "19";
 comments[22] = "Id Pregunta: 754. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[23]= "24)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[23]= new Array();
 choices[23][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[23][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[23][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[23][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[23] = choices[23][2];
 units[23] = "1";
 comments[23] = "Id Pregunta: 177. CONSTITUCION1978";


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[24]= "25)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[24]= new Array();
 choices[24][0] = "Estrasburgo.";
 choices[24][1] = "Bruselas.";
 choices[24][2] = "Luxemburgo.";
 choices[24][3] = "Holanda.";
 answers[24] = choices[24][2];
 units[24] = "5";
 comments[24] = "Id Pregunta: 295. UNION EUROPEA";


//  Id pregunta: 258 Año de creación de pregunta: 2016
 questions[25]= "26)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[25]= new Array();
 choices[25][0] = "Municipios, provincias y CCAA.";
 choices[25][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[25][2] = "En CCAA, 50 provincias y municipios.";
 choices[25][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[25] = choices[25][2];
 units[25] = "1";
 comments[25] = "Id Pregunta: 258. CONSTITUCION1978";


//  Id pregunta: 782 Año de creación de pregunta: 2016
 questions[26]= "27)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento de las instrucciones u &oacute;rdenes de servicio:";
 choices[26]= new Array();
 choices[26][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[26][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[26][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[26][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[26] = choices[26][0];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 782. Ley 40/2015";


//  Id pregunta: 556 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[27]= new Array();
 choices[27][0] = "El BCE";
 choices[27][1] = "El Parlamento";
 choices[27][2] = "El Consejo";
 choices[27][3] = "La Comisi&oacute;n";
 answers[27] = choices[27][3];
 units[27] = "17";
 comments[27] = "Id Pregunta: 556. Mercado &Uacute;nico Digital";


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[28]= new Array();
 choices[28][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[28][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[28][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[28][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[28] = choices[28][0];
 units[28] = "75";
 comments[28] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 358 Año de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[29]= new Array();
 choices[29][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[29][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[29][2] = "c) Todas las respuestas son correctas.";
 choices[29][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[29] = choices[29][1];
 units[29] = "5";
 comments[29] = "Id Pregunta: 358. UNION EUROPEA";


//  Id pregunta: 664 Año de creación de pregunta: 2016
 questions[30]= "31)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[30]= new Array();
 choices[30][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[30][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[30][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[30][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que hayan sido elaborado por &eacute;ste.";
 answers[30] = choices[30][1];
 units[30] = "7";
 comments[30] = "Id Pregunta: 664. Art&iacute;culo 53 de la Ley 39/2015";


//  Id pregunta: 302 Año de creación de pregunta: 2016
 questions[31]= "32)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[31]= new Array();
 choices[31][0] = "Cinco a&ntilde;os.";
 choices[31][1] = "Cuatro a&ntilde;os.";
 choices[31][2] = "Tres a&ntilde;os.";
 choices[31][3] = "Seis meses.";
 answers[31] = choices[31][2];
 units[31] = "5";
 comments[31] = "Id Pregunta: 302. UNION EUROPEA";


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[32]= new Array();
 choices[32][0] = "Anual";
 choices[32][1] = "Mensual";
 choices[32][2] = "Semestral";
 choices[32][3] = "Trimestral";
 answers[32] = choices[32][3];
 units[32] = "15";
 comments[32] = "Id Pregunta: 119. ";


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[33]= "34)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[33]= new Array();
 choices[33][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[33][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[33][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[33][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[33] = choices[33][1];
 units[33] = "64";
 comments[33] = "Id Pregunta: 11. AGE A1 2015";


//  Id pregunta: 719 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;A trav&eacute;s de qu&eacute; empresa surgen las metodolog&iacute;as lean?";
 choices[34]= new Array();
 choices[34][0] = "Ford";
 choices[34][1] = "Google";
 choices[34][2] = "Toyota";
 choices[34][3] = "Facebook";
 answers[34] = choices[34][2];
 units[34] = "34";
 comments[34] = "Id Pregunta: 719. Metodologias Lean";


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


//  Id pregunta: 22 Año de creación de pregunta: 2016
 questions[36]= "37)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[36]= new Array();
 choices[36][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[36][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[36][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[36][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[36] = choices[36][1];
 units[36] = "26";
 comments[36] = "Id Pregunta: 22. AGE A1 2015";


//  Id pregunta: 667 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[37]= new Array();
 choices[37][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[37][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[37][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[37][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[37] = choices[37][2];
 units[37] = "7";
 comments[37] = "Id Pregunta: 667. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[38]= "39)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[38]= new Array();
 choices[38][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[38][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[38][2] = "Las Inspecciones Generales de los Servicios";
 choices[38][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[38] = choices[38][1];
 units[38] = "75";
 comments[38] = "Id Pregunta: 79. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[39]= "40)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[39]= new Array();
 choices[39][0] = "Un a&ntilde;o prorrogable";
 choices[39][1] = "Dos a&ntilde;os no prorrogables";
 choices[39][2] = "Un a&ntilde;o no prorrogable";
 choices[39][3] = "Dos a&ntilde;os prorrogables";
 answers[39] = choices[39][2];
 units[39] = "37";
 comments[39] = "Id Pregunta: 86. AGE A1 2015";


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[40]= "41)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[40]= new Array();
 choices[40][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[40][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[40][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[40][3] = "Todas las anteriores son correctas.";
 answers[40] = choices[40][3];
 units[40] = "47";
 comments[40] = "Id Pregunta: 676. Receta electr&oacute;nica";


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[41]= "42)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[41]= new Array();
 choices[41][0] = "Versi&oacute;n digital prioritaria.";
 choices[41][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[41][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[41][3] = "Apertura y transparencia.";
 answers[41] = choices[41][0];
 units[41] = "5";
 comments[41] = "Id Pregunta: 287. UNION EUROPEA";


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[42]= "43)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[42]= new Array();
 choices[42][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[42][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[42][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[42][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[42] = choices[42][2];
 units[42] = "7";
 comments[42] = "Id Pregunta: 512. LEY 39/2015";


//  Id pregunta: 830 Año de creación de pregunta: 2016
 questions[43]= "44)  La recusaci&oacute;n se plantear&aacute;...";
 choices[43]= new Array();
 choices[43][0] = "S&oacute;lo verbalmente";
 choices[43][1] = "S&oacute;lo por escrito";
 choices[43][2] = "Verbalmente o por escrito";
 choices[43][3] = "Verbalmente o por escrito siempre que es exprese la causa o causas en que se funda";
 answers[43] = choices[43][0];
 units[43] = "4, 7, 8, 9";
 comments[43] = "Id Pregunta: 830. Ley 40/2015";


//  Id pregunta: 853 Año de creación de pregunta: 2016
 questions[44]= "45)  Si disponemos de 8 discos SAS de 1TB netos configurados en RAID1, &iquest;de qu&eacute; capacidad neta se dispone en RAID1 en el sistema de almacenamiento?";
 choices[44]= new Array();
 choices[44][0] = "6 TB.";
 choices[44][1] = "8 TB.";
 choices[44][2] = "7 TB.";
 choices[44][3] = "4 TB.";
 answers[44] = choices[44][3];
 units[44] = "53";
 comments[44] = "Id Pregunta: 853. Xunta de Galicia 2015";


//  Id pregunta: 843 Año de creación de pregunta: 2016
 questions[45]= "46)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[45]= new Array();
 choices[45][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[45][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[45][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[45][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[45] = choices[45][2];
 units[45] = "4, 7, 8, 9";
 comments[45] = "Id Pregunta: 843. Ley 40/2015";


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[46]= "47)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[46]= new Array();
 choices[46][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[46][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[46][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[46][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[46] = choices[46][2];
 units[46] = "50";
 comments[46] = "Id Pregunta: 633. Junta de Extremadura A1 2015";


//  Id pregunta: 638 Año de creación de pregunta: 2016
 questions[47]= "48)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[47]= new Array();
 choices[47][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[47][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[47][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[47][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[47] = choices[47][2];
 units[47] = "57";
 comments[47] = "Id Pregunta: 638. Junta de Extremadura A1 2015";


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[48]= new Array();
 choices[48][0] = "JUnit, Artifactory y SonarQube";
 choices[48][1] = "JUnit, Artifactory y Selenium";
 choices[48][2] = "JUnit, SonarQube y Selenium";
 choices[48][3] = "ArtiFactory, SonarQube y Selenium";
 answers[48] = choices[48][2];
 units[48] = "92";
 comments[48] = "Id Pregunta: 91. AGE A1 2015";


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[49]= "50)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[49]= new Array();
 choices[49][0] = "Un informe de g&eacute;nero.";
 choices[49][1] = "La variable de sexo.";
 choices[49][2] = "La variable de edad.";
 choices[49][3] = "La variable de comportamiento.";
 answers[49] = choices[49][1];
 units[49] = "14";
 comments[49] = "Id Pregunta: 415. POLITICAS DE IGUALDAD";


//  Id pregunta: 590 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[50]= new Array();
 choices[50][0] = "14";
 choices[50][1] = "11";
 choices[50][2] = "12";
 choices[50][3] = "15";
 answers[50] = choices[50][0];
 units[50] = "19";
 comments[50] = "Id Pregunta: 590. Estrategia TIC";


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[51]= new Array();
 choices[51][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[51][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[51][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[51][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[51] = choices[51][0];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 849. Ley 40/2015";


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[52]= "53)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[52]= new Array();
 choices[52][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[52][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[52][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[52][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[52] = choices[52][2];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 770. Ley 40/2015";


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[53]= "54)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[53]= new Array();
 choices[53][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[53][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[53][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[53][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[53] = choices[53][1];
 units[53] = "19";
 comments[53] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 146 Año de creación de pregunta: 2016
 questions[54]= "55)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[54]= new Array();
 choices[54][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[54][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[54][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[54][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[54] = choices[54][0];
 units[54] = "8";
 comments[54] = "Id Pregunta: 146. Ley 39/2015, Art&iacute;culo 107";


//  Id pregunta: 419 Año de creación de pregunta: 2016
 questions[55]= "56)  Promover&aacute;n el conocimiento y la difusi&oacute;n del principio de igualdad entre mujeres y hombres, los medios de comunicaci&oacute;n de titularidad:";
 choices[55]= new Array();
 choices[55][0] = "P&uacute;blica.";
 choices[55][1] = "Privada.";
 choices[55][2] = "Ambas son correctas.";
 choices[55][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[55] = choices[55][0];
 units[55] = "14";
 comments[55] = "Id Pregunta: 419. POLITICAS DE IGUALDAD";


//  Id pregunta: 623 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n el paradigma de Orientaci&oacute;n a Objetos, la herencia posibilita que:";
 choices[56]= new Array();
 choices[56][0] = "Cualquier cambio en los datos y operaciones contenidas dentro de una superclase es heredado inmediatamente por todas las subclases que se derivan de la superclase.";
 choices[56][1] = "Cualquier cambio en las operaciones y datos de la superclase no se refleja en todas las subclases.";
 choices[56][2] = "Cualquier cambio en una de las subclases que se heredan de la superclase se refleja en sus clases hermanas.";
 choices[56][3] = "En el paradigma de Orientaci&oacute;n a Objetos no existe la herencia.";
 answers[56] = choices[56][0];
 units[56] = "89";
 comments[56] = "Id Pregunta: 623. Junta de Extremadura A1 2015";


//  Id pregunta: 245 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[57]= new Array();
 choices[57][0] = "De los derechos y deberes fundamentales.";
 choices[57][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[57][2] = "Derechos y libertades.";
 choices[57][3] = "De la Corona.";
 answers[57] = choices[57][1];
 units[57] = "1";
 comments[57] = "Id Pregunta: 245. CONSTITUCION1978";


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;les son las caracter&iacute;sticas del sprint 0 en SCRUM?";
 choices[58]= new Array();
 choices[58][0] = "Se dejan listos los entornos de desarrollo";
 choices[58][1] = "Se trabaja en el product backlog, dejando listos los product backlog &iacute;tems priorizados y estimados";
 choices[58][2] = "Se hace una previsi&oacute;n del reparto de historias de usuario por iteraci&oacute;n";
 choices[58][3] = "Todas las anteriores son correctas";
 answers[58] = choices[58][3];
 units[58] = "34, 84";
 comments[58] = "Id Pregunta: 725. Metodologias &aacute;giles";


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[59]= "60)  El Presupuesto por programas sirve para saber...";
 choices[59]= new Array();
 choices[59][0] = "En qu&eacute; nos gastamos el dinero";
 choices[59][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[59][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[59][3] = "Qui&eacute;n se gasta el dinero";
 answers[59] = choices[59][2];
 units[59] = "10";
 comments[59] = "Id Pregunta: 456. PRESUPUESTOS GENERALES";


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[60]= "61)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[60]= new Array();
 choices[60][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[60][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[60][2] = "a y b son correctas";
 choices[60][3] = "a y b son incorrectas";
 answers[60] = choices[60][2];
 units[60] = "4, 7, 8, 9";
 comments[60] = "Id Pregunta: 783. Ley 40/2015";


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[61]= "62)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[61]= new Array();
 choices[61][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[61][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[61][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[61][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[61] = choices[61][3];
 units[61] = "77";
 comments[61] = "Id Pregunta: 48. AGE A1 2015";


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[62]= "63)  Respecto a los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado, NO se incluyen entre las prestaciones que pueden ser objeto de estos contratos:";
 choices[62]= new Array();
 choices[62][0] = "La construcci&oacute;n, instalaci&oacute;n o transformaci&oacute;n de obras, equipos, sistemas, y productos o bienes complejos, as&iacute; como su mantenimiento, actualizaci&oacute;n o renovaci&oacute;n, su explotaci&oacute;n o su gesti&oacute;n.";
 choices[62][1] = "La gesti&oacute;n integral del mantenimiento de instalaciones para la investigaci&oacute;n.";
 choices[62][2] = "La fabricaci&oacute;n de bienes y la prestaci&oacute;n de servicios que incorporen tecnolog&iacute;a espec&iacute;ficamente desarrollada con el prop&oacute;sito de aportar soluciones m&aacute;s avanzadas y econ&oacute;micamente m&aacute;s ventajosas que las existentes en el mercado.";
 choices[62][3] = "Todas las anteriores pueden ser objeto de ese tipo de contratos.";
 answers[62] = choices[62][1];
 units[62] = "18, 20";
 comments[62] = "Id Pregunta: 748. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 627 Año de creación de pregunta: 2016
 questions[63]= "64)  En UML &iquest;qu&eacute; es una m&aacute;quina de estados?";
 choices[63]= new Array();
 choices[63][0] = "Es un modelo computacional representado por grafos, en los que los estados son los v&eacute;rtices.";
 choices[63][1] = "Es un dispositivo que puede ser programado para cumplir determinadas tareas de control en sistema autom&aacute;ticos.";
 choices[63][2] = "Es un comportamiento que especifica las secuencias de estados por las que pasa un objeto a lo largo de su vida en respuesta a eventos, junto con sus respuestas a esos eventos.";
 choices[63][3] = "Es un sistema l&oacute;gico que posee una entrada, un procesador intermedio y una salida resultado de la aplicaci&oacute;n del procesamiento sobre la entrada.";
 answers[63] = choices[63][2];
 units[63] = "89";
 comments[63] = "Id Pregunta: 627. Junta de Extremadura A1 2015";


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[64]= new Array();
 choices[64][0] = "Ley 50/1997, del Gobierno.";
 choices[64][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[64][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[64][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[64] = choices[64][1];
 units[64] = "10";
 comments[64] = "Id Pregunta: 475. PRESUPUESTOS GENERALES";


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[65]= "66)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[65]= new Array();
 choices[65][0] = "150 trabajadores/as.";
 choices[65][1] = "200 trabajadores/as.";
 choices[65][2] = "250 trabajadores/as.";
 choices[65][3] = "300 trabajadores/as.";
 answers[65] = choices[65][2];
 units[65] = "14";
 comments[65] = "Id Pregunta: 420. POLITICAS DE IGUALDAD";


//  Id pregunta: 584 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[66]= new Array();
 choices[66][0] = "El 5 de Octubre de 2015";
 choices[66][1] = "El 15 de Octubre de 2015";
 choices[66][2] = "El 15 de Septiembre de 2015";
 choices[66][3] = "El 2 de Octubre de 2015";
 answers[66] = choices[66][2];
 units[66] = "19";
 comments[66] = "Id Pregunta: 584. Estrategia TIC";


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Qu&eacute; facilita un ORM?";
 choices[67]= new Array();
 choices[67][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[67][1] = "Conversi&oacute;n de objetos a documentos";
 choices[67][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[67][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[67] = choices[67][0];
 units[67] = "62";
 comments[67] = "Id Pregunta: 49. AGE A1 2015";


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[68]= new Array();
 choices[68][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[68][1] = "Por Orden Ministerial.";
 choices[68][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[68][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[68] = choices[68][0];
 units[68] = "1";
 comments[68] = "Id Pregunta: 247. CONSTITUCION1978";


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[69]= new Array();
 choices[69][0] = "Art&iacute;culo 70.";
 choices[69][1] = "Art&iacute;culo 54.";
 choices[69][2] = "Articulo 62.";
 choices[69][3] = "Articulo 55. 5.";
 answers[69] = choices[69][2];
 units[69] = "1";
 comments[69] = "Id Pregunta: 243. CONSTITUCION1978";


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[70]= new Array();
 choices[70][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[70][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[70][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[70][3] = "Ninguna de las anteriores";
 answers[70] = choices[70][1];
 units[70] = "34, 84";
 comments[70] = "Id Pregunta: 723. Metodologias &aacute;giles";


//  Id pregunta: 727 Año de creación de pregunta: 2016
 questions[71]= "72)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[71]= new Array();
 choices[71][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[71][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo;";
 choices[71][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[71][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea.";
 answers[71] = choices[71][0];
 units[71] = "34, 84";
 comments[71] = "Id Pregunta: 727. Metodologias &aacute;giles";


//  Id pregunta: 746 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios de la Ley de Garant&iacute;a de la Unidad de Mercado?";
 choices[72]= new Array();
 choices[72][0] = "No discriminaci&oacute;n";
 choices[72][1] = "Cooperaci&oacute;n";
 choices[72][2] = "Colaboraci&oacute;n";
 choices[72][3] = "Todos los anteriores son principios de la Ley de Garant&iacute;a de la Unidad de Mercado";
 answers[72] = choices[72][2];
 units[72] = "18, 20";
 comments[72] = "Id Pregunta: 746. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[73]= "74)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[73]= new Array();
 choices[73][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[73][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[73][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[73][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[73] = choices[73][0];
 units[73] = "10";
 comments[73] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";


//  Id pregunta: 619 Año de creación de pregunta: 2016
 questions[74]= "75)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[74]= new Array();
 choices[74][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[74][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[74][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[74][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[74] = choices[74][0];
 units[74] = "84";
 comments[74] = "Id Pregunta: 619. Junta de Extremadura A1 2015";


