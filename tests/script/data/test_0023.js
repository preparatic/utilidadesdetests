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

//  Id pregunta: 631 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n la Ley de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no podr&aacute;n realizarse transferencias de datos de car&aacute;cter personal a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al de esta Ley. &iquest;Qui&eacute;n se encarga de evaluar el nivel adecuado de protecci&oacute;n que ofrece el pa&iacute;s de destino de los datos?";
 choices[0]= new Array();
 choices[0][0] = "El Ministerio de Asuntos Exteriores junto con el Ministerio de Justicia.";
 choices[0][1] = "El responsable de la custodia de los datos enviados.";
 choices[0][2] = "La Agencia Europea de Cooperaci&oacute;n.";
 choices[0][3] = "La Agencia de Protecci&oacute;n de Datos.";
 answers[0] = choices[0][3];
 units[0] = "35";
 comments[0] = "Id Pregunta: 631. Junta de Extremadura A1 2015";
 preguntaids[0] = 631


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[1]= "2)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[1]= new Array();
 choices[1][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[1][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[1][2] = "El Presidente del Gobierno";
 choices[1][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[1] = choices[1][1];
 units[1] = "26";
 comments[1] = "Id Pregunta: 551. Gobernanza TIC";
 preguntaids[1] = 551


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[2]= "3)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[2]= new Array();
 choices[2][0] = "las previsiones de la presente Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[2][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la presente Ley";
 choices[2][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[2][3] = "exclusivamente por las previsiones de la presente Ley";
 answers[2] = choices[2][1];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 768. Ley 40/2015";
 preguntaids[2] = 768


//  Id pregunta: 55 Año de creación de pregunta: 2016
 questions[3]= "4)  WS-Security contiene especificaciones sobre:";
 choices[3]= new Array();
 choices[3][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[3][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[3][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[3][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[3] = choices[3][1];
 units[3] = "119";
 comments[3] = "Id Pregunta: 55. AGE A1 2015";
 preguntaids[3] = 55


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[4]= "5)  Las Administraciones P&uacute;blicas:";
 choices[4]= new Array();
 choices[4][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[4][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[4][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[4][3] = "todas son correctas";
 answers[4] = choices[4][1];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 772. Ley 40/2015";
 preguntaids[4] = 772


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[5]= "6)  Los Subdirectores generales:";
 choices[5]= new Array();
 choices[5][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[5][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[5][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[5][3] = "todas son correctas";
 answers[5] = choices[5][1];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 811. Ley 40/2015";
 preguntaids[5] = 811


//  Id pregunta: 117 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[6]= new Array();
 choices[6][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[6][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas ";
 choices[6][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[6][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[6] = choices[6][0];
 units[6] = "15";
 comments[6] = "Id Pregunta: 117. ";
 preguntaids[6] = 117


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[7]= new Array();
 choices[7][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[7][1] = "Por Orden Ministerial.";
 choices[7][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[7][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[7] = choices[7][0];
 units[7] = "1";
 comments[7] = "Id Pregunta: 247. CONSTITUCION1978";
 preguntaids[7] = 247


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[8]= "9)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[8]= new Array();
 choices[8][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[8][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[8][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[8][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[8] = choices[8][2];
 units[8] = "83";
 comments[8] = "Id Pregunta: 56. AGE A1 2015";
 preguntaids[8] = 56


//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[9]= new Array();
 choices[9][0] = "Art&iacute;culo 14 CE.";
 choices[9][1] = "Art&iacute;culo 9.2 CE.";
 choices[9][2] = "Art&iacute;culo 9.1 CE.";
 choices[9][3] = "Art&iacute;culo 13 CE.";
 answers[9] = choices[9][2];
 units[9] = "14";
 comments[9] = "Id Pregunta: 407. POLITICAS DE IGUALDAD";
 preguntaids[9] = 407


//  Id pregunta: 457 Año de creación de pregunta: 2016
 questions[10]= "11)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[10]= new Array();
 choices[10][0] = "En qu&eacute; nos gastamos el dinero";
 choices[10][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[10][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[10][3] = "Qui&eacute;n se gasta el dinero.";
 answers[10] = choices[10][0];
 units[10] = "10";
 comments[10] = "Id Pregunta: 457. PRESUPUESTOS GENERALES";
 preguntaids[10] = 457


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[11]= "12)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[11]= new Array();
 choices[11][0] = "Mercurial, Git y Apache Subversion.";
 choices[11][1] = "Gimp, Mercurial y Git.";
 choices[11][2] = "RedMine, Planner y OpenProj.";
 choices[11][3] = "Cassandra, Git y REDIS.";
 answers[11] = choices[11][0];
 units[11] = "92";
 comments[11] = "Id Pregunta: 576. Tema 92. TAI 2016.";
 preguntaids[11] = 576


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[12]= "13)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[12]= new Array();
 choices[12][0] = "los Subsecretarios y los Secretarios generales";
 choices[12][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[12][2] = "los Secretarios de Estado y los Directores generales";
 choices[12][3] = "los Ministros y los Secretarios de Estado";
 answers[12] = choices[12][3];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 788. Ley 40/2015";
 preguntaids[12] = 788


//  Id pregunta: 135 Año de creación de pregunta: 2016
 questions[13]= "14)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[13]= new Array();
 choices[13][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[13][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[13][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[13][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[13] = choices[13][0];
 units[13] = "12";
 comments[13] = "Id Pregunta: 135. Leyes modelo econ&oacute;mico";
 preguntaids[13] = 135


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[14]= "15)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[14]= new Array();
 choices[14][0] = "El Rey.";
 choices[14][1] = "El Jefe del Estado.";
 choices[14][2] = "El Gobierno.";
 choices[14][3] = "El Presidente del Gobierno.";
 answers[14] = choices[14][2];
 units[14] = "1";
 comments[14] = "Id Pregunta: 208. CONSTITUCION1978";
 preguntaids[14] = 208


//  Id pregunta: 696 Año de creación de pregunta: 2016
 questions[15]= "16)  De las siguientes cu&aacute;l NO es una ventaja de la integraci&oacute;n continua:";
 choices[15]= new Array();
 choices[15][0] = "Ejecuci&oacute;n inmediata de las pruebas de aceptaci&oacute;n.";
 choices[15][1] = "Monitorizaci&oacute;n continua de las m&eacute;tricas de calidad del proyecto.";
 choices[15][2] = "Los desarrolladores pueden detectar y solucionar problemas de integraci&oacute;n de forma continua, evitando el caos de &uacute;ltima hora cuando se acercan las fechas de entrega.";
 choices[15][3] = "Disponibilidad constante de una versi&oacute;n para pruebas, demos o lanzamientos anticipados.";
 answers[15] = choices[15][0];
 units[15] = "92";
 comments[15] = "Id Pregunta: 696. INTEGRACION CONTINUA";
 preguntaids[15] = 696


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[16]= new Array();
 choices[16][0] = "Anualmente";
 choices[16][1] = "Bienalmente";
 choices[16][2] = "Cada cuatro a&ntilde;os";
 choices[16][3] = "No se define ninguna periodicidad";
 answers[16] = choices[16][1];
 units[16] = "19";
 comments[16] = "Id Pregunta: 594. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";
 preguntaids[16] = 594


//  Id pregunta: 273 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[17]= new Array();
 choices[17][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[17][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[17][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[17][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[17] = choices[17][1];
 units[17] = "92";
 comments[17] = "Id Pregunta: 273. INTEGRACION CONTINUA";
 preguntaids[17] = 273


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[18]= "19)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[18]= new Array();
 choices[18][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[18][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[18][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[18][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[18] = choices[18][2];
 units[18] = "7";
 comments[18] = "Id Pregunta: 529. LEY 39/2015";
 preguntaids[18] = 529


//  Id pregunta: 724 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[19]= new Array();
 choices[19][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[19][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[19][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[19][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[19] = choices[19][3];
 units[19] = "34, 84";
 comments[19] = "Id Pregunta: 724. Metodologias &aacute;giles";
 preguntaids[19] = 724


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[20]= new Array();
 choices[20][0] = "verbalmente";
 choices[20][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[20][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[20][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[20] = choices[20][2];
 units[20] = "7";
 comments[20] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";
 preguntaids[20] = 159


//  Id pregunta: 351 Año de creación de pregunta: 2016
 questions[21]= "22)  La sede del Parlamento Europeo se encuentra en:";
 choices[21]= new Array();
 choices[21][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[21][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[21][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[21][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[21] = choices[21][1];
 units[21] = "5";
 comments[21] = "Id Pregunta: 351. UNION EUROPEA";
 preguntaids[21] = 351


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[22]= "23)  Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos:";
 choices[22]= new Array();
 choices[22][0] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[22][1] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 choices[22][2] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[22][3] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 answers[22] = choices[22][3];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 777. Ley 40/2015";
 preguntaids[22] = 777


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[23]= new Array();
 choices[23][0] = "Anual";
 choices[23][1] = "Mensual";
 choices[23][2] = "Semestral";
 choices[23][3] = "Trimestral";
 answers[23] = choices[23][3];
 units[23] = "15";
 comments[23] = "Id Pregunta: 119. ";
 preguntaids[23] = 119


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[24]= new Array();
 choices[24][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[24][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[24][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[24][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[24] = choices[24][2];
 units[24] = "22";
 comments[24] = "Id Pregunta: 129. ";
 preguntaids[24] = 129


//  Id pregunta: 348 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[25]= new Array();
 choices[25][0] = "El 1 de noviembre de 1994.";
 choices[25][1] = "El 1 de noviembre de 1992.";
 choices[25][2] = "El 1 de noviembre de 1995.";
 choices[25][3] = "El 1 de noviembre de 1993.";
 answers[25] = choices[25][3];
 units[25] = "5";
 comments[25] = "Id Pregunta: 348. UNION EUROPEA";
 preguntaids[25] = 348


//  Id pregunta: 280 Año de creación de pregunta: 2016
 questions[26]= "27)  El pacto fiscal europeo de 2012 incluye:";
 choices[26]= new Array();
 choices[26][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[26][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[26][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[26][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[26] = choices[26][0];
 units[26] = "5";
 comments[26] = "Id Pregunta: 280. UNION EUROPEA";
 preguntaids[26] = 280


//  Id pregunta: 31 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Qu&eacute; es MongoDB?";
 choices[27]= new Array();
 choices[27][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[27][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[27][2] = "Un sistema gestor de base de datos relacional.";
 choices[27][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[27] = choices[27][1];
 units[27] = "73";
 comments[27] = "Id Pregunta: 31. AGE A1 2015";
 preguntaids[27] = 31


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qui&eacute;n es el responsable de transladar la metodolog&iacute;a lean al software?";
 choices[28]= new Array();
 choices[28][0] = "Eric Ries";
 choices[28][1] = "Steve Blank";
 choices[28][2] = "Tom Poppendieck";
 choices[28][3] = "Alexander Osterwalder";
 answers[28] = choices[28][2];
 units[28] = "34";
 comments[28] = "Id Pregunta: 720. Metodologias Lean";
 preguntaids[28] = 720


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[29]= "30)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[29]= new Array();
 choices[29][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[29][1] = "Clasificaci&oacute;n por cuenta.";
 choices[29][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[29][3] = "Clasificaci&oacute;n por intercambio.";
 answers[29] = choices[29][3];
 units[29] = "56";
 comments[29] = "Id Pregunta: 611. Junta de Extremadura A1 2015";
 preguntaids[29] = 611


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[30]= new Array();
 choices[30][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[30][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[30][2] = "Solamente soporta herramientas de control de versiones como CVS, Git y Clearcase.";
 choices[30][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[30] = choices[30][1];
 units[30] = "92";
 comments[30] = "Id Pregunta: 716. INTEGRACION CONTINUA";
 preguntaids[30] = 716


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[31]= "32)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[31]= new Array();
 choices[31][0] = "61";
 choices[31][1] = "53";
 choices[31][2] = "65";
 choices[31][3] = "67";
 answers[31] = choices[31][1];
 units[31] = "1";
 comments[31] = "Id Pregunta: 248. CONSTITUCION1978";
 preguntaids[31] = 248


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[32]= "33)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[32]= new Array();
 choices[32][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[32][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[32][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[32][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[32] = choices[32][3];
 units[32] = "7";
 comments[32] = "Id Pregunta: 27. AGE A1 2015";
 preguntaids[32] = 27


//  Id pregunta: 499 Año de creación de pregunta: 2016
 questions[33]= "34)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[33]= new Array();
 choices[33][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[33][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[33][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[33][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[33] = choices[33][3];
 units[33] = "10";
 comments[33] = "Id Pregunta: 499. PRESUPUESTOS GENERALES";
 preguntaids[33] = 499


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[34]= new Array();
 choices[34][0] = "ISO/IEC 31000";
 choices[34][1] = "ISO/IEC 14000";
 choices[34][2] = "ISO/IEC 38500";
 choices[34][3] = "ISO/IEC 18000";
 answers[34] = choices[34][2];
 units[34] = "26";
 comments[34] = "Id Pregunta: 545. Gobernanza TIC";
 preguntaids[34] = 545


//  Id pregunta: 478 Año de creación de pregunta: 2016
 questions[35]= "36)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[35]= new Array();
 choices[35][0] = "Al Gobierno.";
 choices[35][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[35][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[35][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[35] = choices[35][2];
 units[35] = "10";
 comments[35] = "Id Pregunta: 478. PRESUPUESTOS GENERALES";
 preguntaids[35] = 478


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[36]= "37)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[36]= new Array();
 choices[36][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[36][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[36][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[36][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[36] = choices[36][2];
 units[36] = "101";
 comments[36] = "Id Pregunta: 60. AGE A1 2015";
 preguntaids[36] = 60


//  Id pregunta: 399 Año de creación de pregunta: 2016
 questions[37]= "38)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[37]= new Array();
 choices[37][0] = "Acciones de discriminaci&oacute;n.";
 choices[37][1] = "Acciones positivas.";
 choices[37][2] = "Acciones negativas.";
 choices[37][3] = "Acciones neutras.";
 answers[37] = choices[37][1];
 units[37] = "14";
 comments[37] = "Id Pregunta: 399. POLITICAS DE IGUALDAD";
 preguntaids[37] = 399


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[38]= "39)  En las Administraciones P&uacute;blicas...";
 choices[38]= new Array();
 choices[38][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[38][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[38][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[38][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[38] = choices[38][0];
 units[38] = "10";
 comments[38] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";
 preguntaids[38] = 455


//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[39]= "40)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[39]= new Array();
 choices[39][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[39][1] = "La CETIC";
 choices[39][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[39][3] = "El MHFP";
 answers[39] = choices[39][0];
 units[39] = "19";
 comments[39] = "Id Pregunta: 595. Estrategia TIC";
 preguntaids[39] = 595


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[40]= "41)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[40]= new Array();
 choices[40][0] = "A los cinco a&ntilde;os.";
 choices[40][1] = "A los dos a&ntilde;os.";
 choices[40][2] = "A los tres a&ntilde;os.";
 choices[40][3] = "A los cuatro a&ntilde;os.";
 answers[40] = choices[40][0];
 units[40] = "10";
 comments[40] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";
 preguntaids[40] = 492


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[41]= new Array();
 choices[41][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[41][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[41][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[41][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[41] = choices[41][3];
 units[41] = "78";
 comments[41] = "Id Pregunta: 47. AGE A1 2015";
 preguntaids[41] = 47


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[42]= "43)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[42]= new Array();
 choices[42][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[42][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[42][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[42][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[42] = choices[42][0];
 units[42] = "31";
 comments[42] = "Id Pregunta: 2. AGE A1 2015";
 preguntaids[42] = 2


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qu&eacute; facilita un ORM?";
 choices[43]= new Array();
 choices[43][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[43][1] = "Conversi&oacute;n de objetos a documentos";
 choices[43][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[43][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[43] = choices[43][0];
 units[43] = "62";
 comments[43] = "Id Pregunta: 49. AGE A1 2015";
 preguntaids[43] = 49


//  Id pregunta: 235 Año de creación de pregunta: 2016
 questions[44]= "45)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[44]= new Array();
 choices[44][0] = "El Jefe del Estado.";
 choices[44][1] = "El Tribunal Constitucional.";
 choices[44][2] = "El Congreso de los Diputados.";
 choices[44][3] = "Las Cortes Generales.";
 answers[44] = choices[44][0];
 units[44] = "1";
 comments[44] = "Id Pregunta: 235. CONSTITUCION1978";
 preguntaids[44] = 235


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[45]= "46)  El sector p&uacute;blico institucional se integra por:";
 choices[45]= new Array();
 choices[45][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[45][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[45][2] = "las Universidades p&uacute;blicas";
 choices[45][3] = "todas son correctas";
 answers[45] = choices[45][3];
 units[45] = "4, 7, 8, 9";
 comments[45] = "Id Pregunta: 766. Ley 40/2015";
 preguntaids[45] = 766


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[46]= "47)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[46]= new Array();
 choices[46][0] = "El Presidente del Congreso de los Diputados.";
 choices[46][1] = "El Presidente del Gobierno.";
 choices[46][2] = "El Rey.";
 choices[46][3] = "El Consejo de Ministros.";
 answers[46] = choices[46][0];
 units[46] = "1";
 comments[46] = "Id Pregunta: 231. CONSTITUCION1978";
 preguntaids[46] = 231


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[47]= "48)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[47]= new Array();
 choices[47][0] = "Principio de transparencia.";
 choices[47][1] = "Principio de cooperaci&oacute;n.";
 choices[47][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[47][3] = "Principio de lealtad institucional.";
 answers[47] = choices[47][1];
 units[47] = "10";
 comments[47] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";
 preguntaids[47] = 504


//  Id pregunta: 858 Año de creación de pregunta: 2016
 questions[48]= "49)  Respecto de la imagen institucional de los sitios web p&uacute;blicos:";
 choices[48]= new Array();
 choices[48][0] = "La utilizaci&oacute;n de s&iacute;mbolos de imagen o logotipos propios ser&aacute; comunicada al Ministerio de Energ&iacute;a, Turismo y Agenda Digital  para facilitar el cumplimiento de la prohibici&oacute;n legal de registrar signos que los reproduzcan o imiten.";
 choices[48][1] = "Los s&iacute;mbolos y logotipos propios podr&aacute;n ser registrados como marca en el caso de que vayan a ser utilizados en el tr&aacute;fico econ&oacute;mico.";
 choices[48][2] = "Los documentos anexos alojados en p&aacute;ginas webs, que puedan ser susceptibles de ser considerados material de papeler&iacute;a, utilizar&aacute;n el logotipo propio.";
 choices[48][3] = "De acuerdo con el Real Decreto 1565/1999, con car&aacute;cter excepcional, y siempre que se acrediten razones debidamente justificadas, el Ministro de Hacienda y Funci&oacute;n P&uacute;blica y el titular del correspondiente Ministerio de adscripci&oacute;n, vinculaci&oacute;n o dependencia podr&aacute;n autorizar la utilizaci&oacute;n por determinados &oacute;rganos, Organismos aut&oacute;nomos y Servicios Comunes o Entidades Gestoras de la Seguridad Social de s&iacute;mbolos de imagen o logotipos propios junto a los s&iacute;mbolos establecidos.";
 answers[48] = choices[48][1];
 units[48] = "125";
 comments[48] = "Id Pregunta: 858. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[48] = 858


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[49]= "50)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[49]= new Array();
 choices[49][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[49][1] = "Programa de cartas de servicios";
 choices[49][2] = "Programa para la mejora continua de las organizaciones.";
 choices[49][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[49] = choices[49][2];
 units[49] = "19";
 comments[49] = "Id Pregunta: 747. Direcci&oacute;n p&uacute;blica";
 preguntaids[49] = 747


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[50]= "51)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[50]= new Array();
 choices[50][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[50][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[50][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[50][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[50] = choices[50][1];
 units[50] = "7";
 comments[50] = "Id Pregunta: 524. LEY 39/2015";
 preguntaids[50] = 524


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[51]= "52)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[51]= new Array();
 choices[51][0] = "A la persona demandante.";
 choices[51][1] = "A la persona demandada.";
 choices[51][2] = "Al &oacute;rgano judicial.";
 choices[51][3] = "Al &oacute;rgano administrativo.";
 answers[51] = choices[51][1];
 units[51] = "14";
 comments[51] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";
 preguntaids[51] = 400


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[52]= "53)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[52]= new Array();
 choices[52][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[52][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[52][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[52][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[52] = choices[52][1];
 units[52] = "1";
 comments[52] = "Id Pregunta: 263. CONSTITUCION1978";
 preguntaids[52] = 263


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[53]= "54)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[53]= new Array();
 choices[53][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[53][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[53][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[53][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[53] = choices[53][2];
 units[53] = "12";
 comments[53] = "Id Pregunta: 134. Leyes modelo econ&oacute;mico";
 preguntaids[53] = 134


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale la respuesta correcta:";
 choices[54]= new Array();
 choices[54][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[54][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[54][2] = "A y B son correctas.";
 choices[54][3] = "A y B son falsas.";
 answers[54] = choices[54][2];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 848. Ley 40/2015";
 preguntaids[54] = 848


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[55]= new Array();
 choices[55][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[55][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[55][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[55][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[55] = choices[55][0];
 units[55] = "19";
 comments[55] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";
 preguntaids[55] = 162


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[56]= "57)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[56]= new Array();
 choices[56][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[56][1] = "el Consejo de Estado";
 choices[56][2] = "el Congreso";
 choices[56][3] = "las Cortes Generales";
 answers[56] = choices[56][0];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 785. Ley 40/2015";
 preguntaids[56] = 785


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[57]= "58)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[57]= new Array();
 choices[57][0] = "Windows Phone";
 choices[57][1] = "Blackberry";
 choices[57][2] = "iOS";
 choices[57][3] = "Android";
 answers[57] = choices[57][3];
 units[57] = "59";
 comments[57] = "Id Pregunta: 64. AGE A1 2015";
 preguntaids[57] = 64


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[58]= new Array();
 choices[58][0] = "Al Gobierno de la naci&oacute;n";
 choices[58][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[58][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[58][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[58] = choices[58][3];
 units[58] = "7";
 comments[58] = "Id Pregunta: 147. Ley 39/2015, Art&iacute;culo 128";
 preguntaids[58] = 147


//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[59]= new Array();
 choices[59][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[59][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[59][2] = "Fecha de otorgamiento.";
 choices[59][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[59] = choices[59][1];
 units[59] = "43";
 comments[59] = "Id Pregunta: 447. SERVICIOS COMUNES";
 preguntaids[59] = 447


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[60]= "61)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[60]= new Array();
 choices[60][0] = "la Administraci&oacute;n General del Estado";
 choices[60][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[60][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[60][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[60] = choices[60][3];
 units[60] = "7";
 comments[60] = "Id Pregunta: 519. LEY 39/2015";
 preguntaids[60] = 519


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[61]= "62)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[61]= new Array();
 choices[61][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[61][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[61][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[61][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[61] = choices[61][2];
 units[61] = "22";
 comments[61] = "Id Pregunta: 128. ";
 preguntaids[61] = 128


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[62]= "63)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[62]= new Array();
 choices[62][0] = "Cifrada";
 choices[62][1] = "Conjunta";
 choices[62][2] = "Sistem&aacute;tica";
 choices[62][3] = "Todas son correctas";
 answers[62] = choices[62][3];
 units[62] = "10";
 comments[62] = "Id Pregunta: 452. PRESUPUESTOS GENERALES";
 preguntaids[62] = 452


//  Id pregunta: 842 Año de creación de pregunta: 2016
 questions[63]= "64)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[63]= new Array();
 choices[63][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[63][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[63][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[63][3] = "Todas son correctas.";
 answers[63] = choices[63][1];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 842. Ley 40/2015";
 preguntaids[63] = 842


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[64]= "65)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[64]= new Array();
 choices[64][0] = "0";
 choices[64][1] = "1";
 choices[64][2] = "Tantos como peticiones concurrentes tenga.";
 choices[64][3] = "Tantos como le permita la memoria de la JVM.";
 answers[64] = choices[64][1];
 units[64] = "64";
 comments[64] = "Id Pregunta: 15. AGE A1 2015";
 preguntaids[64] = 15


//  Id pregunta: 389 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[65]= new Array();
 choices[65][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[65][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[65][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[65][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[65] = choices[65][0];
 units[65] = "14";
 comments[65] = "Id Pregunta: 389. POLITICAS DE IGUALDAD";
 preguntaids[65] = 389


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[66]= new Array();
 choices[66][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[66][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[66][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[66][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[66] = choices[66][0];
 units[66] = "19";
 comments[66] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";
 preguntaids[66] = 163


//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[67]= "68)  Dos de los principios del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE son:";
 choices[67]= new Array();
 choices[67][0] = "Transparencia e innovaci&oacute;n";
 choices[67][1] = "Seguridad y reutilizaci&oacute;n";
 choices[67][2] = "Reutilizaci&oacute;n y buz&oacute;n de quejas y sugerencias";
 choices[67][3] = "Principio de solo una vez y transfronterizo de forma predeterminada";
 answers[67] = choices[67][3];
 units[67] = "28";
 comments[67] = "Id Pregunta: 743. Estrategia TIC";
 preguntaids[67] = 743


//  Id pregunta: 738 Año de creación de pregunta: 2016
 questions[68]= "69)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se basar&aacute;n en:";
 choices[68]= new Array();
 choices[68][0] = "6 principios.";
 choices[68][1] = "7 principios.";
 choices[68][2] = "5 principios.";
 choices[68][3] = "6 directrices.";
 answers[68] = choices[68][2];
 units[68] = "28";
 comments[68] = "Id Pregunta: 738. Estrategia TIC";
 preguntaids[68] = 738


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[69]= "70)  Son proyectos de Apache relacionados con Big Data:";
 choices[69]= new Array();
 choices[69][0] = "Hadoop";
 choices[69][1] = "Spark";
 choices[69][2] = "A) y B)";
 choices[69][3] = "Niguno de los anteriores";
 answers[69] = choices[69][2];
 units[69] = "73";
 comments[69] = "Id Pregunta: 108. ";
 preguntaids[69] = 108


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[70]= new Array();
 choices[70][0] = "Veinte.";
 choices[70][1] = "Quince.";
 choices[70][2] = "Diez.";
 choices[70][3] = "Doce.";
 answers[70] = choices[70][1];
 units[70] = "1";
 comments[70] = "Id Pregunta: 264. CONSTITUCION1978";
 preguntaids[70] = 264


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[71]= "72)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[71]= new Array();
 choices[71][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[71][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[71][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[71][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[71] = choices[71][0];
 units[71] = "4, 7, 8, 9";
 comments[71] = "Id Pregunta: 800. Ley 40/2015";
 preguntaids[71] = 800


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[72]= "73)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[72]= new Array();
 choices[72][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[72][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[72][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[72][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[72] = choices[72][3];
 units[72] = "10";
 comments[72] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";
 preguntaids[72] = 505


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[73]= new Array();
 choices[73][0] = "En t&iacute;tulos-valores.";
 choices[73][1] = "Las respuestas a) y b) son correctas.";
 choices[73][2] = "Las respuestas a) y b) no son correctas.";
 choices[73][3] = "En cuenta.";
 answers[73] = choices[73][1];
 units[73] = "10";
 comments[73] = "Id Pregunta: 500. PRESUPUESTOS GENERALES";
 preguntaids[73] = 500


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[74]= new Array();
 choices[74][0] = "Car&aacute;cter sustitutivo";
 choices[74][1] = "Car&aacute;cter obligatorio";
 choices[74][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[74][3] = "Ninguna de las anteriores";
 answers[74] = choices[74][3];
 units[74] = "19";
 comments[74] = "Id Pregunta: 583. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";
 preguntaids[74] = 583


