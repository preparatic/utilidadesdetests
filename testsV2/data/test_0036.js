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

//  Id pregunta: 473 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[0]= new Array();
 choices[0][0] = "Org&aacute;nica.";
 choices[0][1] = "Contable.";
 choices[0][2] = "Econ&oacute;mica.";
 choices[0][3] = "Por programas.";
 answers[0] = choices[0][2];
 units[0] = "10";
 comments[0] = "Id Pregunta: 473. PRESUPUESTOS GENERALES";


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[1]= "2)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[1]= new Array();
 choices[1][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[1][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[1][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[1][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[1] = choices[1][0];
 units[1] = "22";
 comments[1] = "Id Pregunta: 124. ";


//  Id pregunta: 25 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Mediante qu&eacute; tipo de objetos se implementa el acceso a los recursos gestionados con la tecnolog&iacute;a JMX?";
 choices[2]= new Array();
 choices[2][0] = "SessionBean";
 choices[2][1] = "JavaBean";
 choices[2][2] = "MBeans";
 choices[2][3] = "MessageDrivenBean";
 answers[2] = choices[2][2];
 units[2] = "64";
 comments[2] = "Id Pregunta: 25. AGE A1 2015";


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[3]= "4)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[3]= new Array();
 choices[3][0] = "Windows Phone";
 choices[3][1] = "Blackberry";
 choices[3][2] = "iOS";
 choices[3][3] = "Android";
 answers[3] = choices[3][3];
 units[3] = "59";
 comments[3] = "Id Pregunta: 64. AGE A1 2015";


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[4]= "5)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[4]= new Array();
 choices[4][0] = "El Presidente y su gabinete.";
 choices[4][1] = "El Presidente y sus Ministros.";
 choices[4][2] = "El Rey y el Presidente.";
 choices[4][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[4] = choices[4][2];
 units[4] = "1";
 comments[4] = "Id Pregunta: 257. CONSTITUCION1978";


//  Id pregunta: 383 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[5]= new Array();
 choices[5][0] = "El Consejo Nacional de la Mujer";
 choices[5][1] = "El Consejo de la Mujer";
 choices[5][2] = "El Instituto de la Mujer";
 choices[5][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[5] = choices[5][3];
 units[5] = "14";
 comments[5] = "Id Pregunta: 383. POLITICAS DE IGUALDAD";


//  Id pregunta: 66 Año de creación de pregunta: 2016
 questions[6]= "7)  Para los siguientes tipos de copias de seguridad, indique cu&aacute;l de las siguientes secuencias los ordena de mayor a menor tiempo de restauraci&oacute;n:";
 choices[6]= new Array();
 choices[6][0] = "Incremental, diferencial, completa";
 choices[6][1] = "Completa, incremental, diferencial";
 choices[6][2] = "Completa, diferencial, incremental";
 choices[6][3] = "No hay diferencia en el tiempo de restauraci&oacute;n, encontr&aacute;ndose la diferencia en el espacio de almacenamiento consumido.";
 answers[6] = choices[6][0];
 units[6] = "53";
 comments[6] = "Id Pregunta: 66. AGE A1 2015. Pregunta anulada en el examen real. La opci&oacute;n A dec&iacute;a &quot;Diferencial, incremental, completa&quot;, por lo que ninguna respuesta pod&iacute;a considerarse correcta";


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[7]= "8)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[7]= new Array();
 choices[7][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[7][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[7][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[7][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[7] = choices[7][2];
 units[7] = "1";
 comments[7] = "Id Pregunta: 172. CONSTITUCION1978";


//  Id pregunta: 438 Año de creación de pregunta: 2016
 questions[8]= "9)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[8]= new Array();
 choices[8][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[8][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[8][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[8][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[8] = choices[8][3];
 units[8] = "43";
 comments[8] = "Id Pregunta: 438. SERVICIOS COMUNES";


//  Id pregunta: 5 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale cu&aacute;l de los siguientes NO es uno de los principios de COBIT v5:";
 choices[9]= new Array();
 choices[9][0] = "Satisfacer las necesidades de las partes interesadas.";
 choices[9][1] = "Cubrir las necesidades del departamento de tecnolog&iacute;as de la informaci&oacute;n.";
 choices[9][2] = "Habilitar un enfoque hol&iacute;stico.";
 choices[9][3] = "Separar el gobierno de la gesti&oacute;n.";
 answers[9] = choices[9][1];
 units[9] = "101";
 comments[9] = "Id Pregunta: 5. AGE A1 2015";


//  Id pregunta: 284 Año de creación de pregunta: 2016
 questions[10]= "11)  Se&ntilde;ale la respuesta falsa:";
 choices[10]= new Array();
 choices[10][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[10][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[10][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[10][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[10] = choices[10][2];
 units[10] = "5";
 comments[10] = "Id Pregunta: 284. UNION EUROPEA";


//  Id pregunta: 617 Año de creación de pregunta: 2016
 questions[11]= "12)  El establecimiento de una conexi&oacute;n mediante el protocolo TCP, b&aacute;sicamente se realiza de la siguiente manera:";
 choices[11]= new Array();
 choices[11][0] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a SYN+ACK. Emisor: env&iacute;a ACK.";
 choices[11][1] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a ACK+SYN. Emisor: env&iacute;a SYN.";
 choices[11][2] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a ACK.";
 choices[11][3] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a SYN.";
 answers[11] = choices[11][0];
 units[11] = "109";
 comments[11] = "Id Pregunta: 617. Junta de Extremadura A1 2015";


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[12]= "13)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[12]= new Array();
 choices[12][0] = "Aplicaci&oacute;n";
 choices[12][1] = "Sesi&oacute;n";
 choices[12][2] = "Presentaci&oacute;n";
 choices[12][3] = "Transporte";
 answers[12] = choices[12][2];
 units[12] = "105";
 comments[12] = "Id Pregunta: 18. AGE A1 2015";


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


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[14]= new Array();
 choices[14][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[14][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[14][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[14][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[14] = choices[14][3];
 units[14] = "5";
 comments[14] = "Id Pregunta: 332. UNION EUROPEA";


//  Id pregunta: 776 Año de creación de pregunta: 2016
 questions[15]= "16)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[15]= new Array();
 choices[15][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[15][1] = "el C&oacute;digo Civil";
 choices[15][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[15][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[15] = choices[15][0];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 776. Ley 40/2015";


//  Id pregunta: 695 Año de creación de pregunta: 2016
 questions[16]= "17)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[16]= new Array();
 choices[16][0] = "Jenkins";
 choices[16][1] = "Hudson";
 choices[16][2] = "SonarQube";
 choices[16][3] = "Todas lo son";
 answers[16] = choices[16][3];
 units[16] = "92";
 comments[16] = "Id Pregunta: 695. INTEGRACION CONTINUA";


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[17]= "18)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[17]= new Array();
 choices[17][0] = "Los propios miembros del Tribunal.";
 choices[17][1] = "El Consejo de Europa.";
 choices[17][2] = "El Consejo Europeo.";
 choices[17][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[17] = choices[17][0];
 units[17] = "5";
 comments[17] = "Id Pregunta: 301. UNION EUROPEA";


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[18]= "19)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[18]= new Array();
 choices[18][0] = "Pas&oacute; de 518 a 626.";
 choices[18][1] = "Pas&oacute; de 434 a 518.";
 choices[18][2] = "Pas&oacute; de 345 a 512.";
 choices[18][3] = "Pas&oacute; de 435 a 610.";
 answers[18] = choices[18][1];
 units[18] = "5";
 comments[18] = "Id Pregunta: 344. UNION EUROPEA";


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[19]= "20)  Los Reglamentos no se caracterizan por:";
 choices[19]= new Array();
 choices[19][0] = "No poseer alcance general.";
 choices[19][1] = "Ser obligatorios.";
 choices[19][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[19][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[19] = choices[19][0];
 units[19] = "5";
 comments[19] = "Id Pregunta: 363. UNION EUROPEA";


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[20]= "21)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[20]= new Array();
 choices[20][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[20][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[20][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[20][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[20] = choices[20][3];
 units[20] = "7";
 comments[20] = "Id Pregunta: 530. LEY 39/2015";


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[21]= "22)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[21]= new Array();
 choices[21][0] = "De las disposiciones favorables.";
 choices[21][1] = "De las disposiciones sancionadoras no favorables.";
 choices[21][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[21][3] = "Las respuestas b) y c) son correctas.";
 answers[21] = choices[21][3];
 units[21] = "1";
 comments[21] = "Id Pregunta: 252. CONSTITUCION1978";


//  Id pregunta: 127 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[22]= new Array();
 choices[22][0] = "Tiene car&aacute;cter facultativo.";
 choices[22][1] = "Tiene car&aacute;cter potestativo. ";
 choices[22][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[22][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[22] = choices[22][1];
 units[22] = "22";
 comments[22] = "Id Pregunta: 127. ";


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[23]= "24)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[23]= new Array();
 choices[23][0] = "786 Diputados como m&aacute;ximo.";
 choices[23][1] = "600 Diputados como m&aacute;ximo.";
 choices[23][2] = "650 Diputados como m&aacute;ximo.";
 choices[23][3] = "732 Diputados como m&aacute;ximo.";
 answers[23] = choices[23][0];
 units[23] = "5";
 comments[23] = "Id Pregunta: 360. UNION EUROPEA";


//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[24]= "25)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[24]= new Array();
 choices[24][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[24][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[24][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[24][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[24] = choices[24][2];
 units[24] = "19";
 comments[24] = "Id Pregunta: 170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[25]= "26)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[25]= new Array();
 choices[25][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[25][1] = "Autorizar indultos generales.";
 choices[25][2] = "Sancionar las leyes.";
 choices[25][3] = "Promulgar las leyes.";
 answers[25] = choices[25][1];
 units[25] = "1";
 comments[25] = "Id Pregunta: 185. CONSTITUCION1978";


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[26]= "27)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[26]= new Array();
 choices[26][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[26][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[26][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[26][3] = "Todas son correctas.";
 answers[26] = choices[26][3];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 834. Ley 40/2015";


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[27]= "28)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[27]= new Array();
 choices[27][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[27][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[27][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[27][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[27] = choices[27][2];
 units[27] = "26";
 comments[27] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[28]= "29)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[28]= new Array();
 choices[28][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[28][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[28][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[28][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[28] = choices[28][1];
 units[28] = "7";
 comments[28] = "Id Pregunta: 517. LEY 39/2015";


//  Id pregunta: 703 Año de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale la que NO corresponde a una herramienta de automatizaci&oacute;n de pruebas:";
 choices[29]= new Array();
 choices[29][0] = "Selenium";
 choices[29][1] = "JUnit";
 choices[29][2] = "Jenkins";
 choices[29][3] = "JMeter";
 answers[29] = choices[29][2];
 units[29] = "92";
 comments[29] = "Id Pregunta: 703. INTEGRACION CONTINUA";


//  Id pregunta: 266 Año de creación de pregunta: 2016
 questions[30]= "31)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[30]= new Array();
 choices[30][0] = "El Segundo.";
 choices[30][1] = "El Primero.";
 choices[30][2] = "El Preliminar.";
 choices[30][3] = "El Tercero.";
 answers[30] = choices[30][0];
 units[30] = "1";
 comments[30] = "Id Pregunta: 266. CONSTITUCION1978";


//  Id pregunta: 16 Año de creación de pregunta: 2016
 questions[31]= "32)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[31]= new Array();
 choices[31][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[31][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[31][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[31][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[31] = choices[31][3];
 units[31] = "19";
 comments[31] = "Id Pregunta: 16. AGE A1 2015";


//  Id pregunta: 372 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[32]= new Array();
 choices[32][0] = "El Parlamento y el Consejo.";
 choices[32][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[32][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[32][3] = "La Comisi&oacute;n y el Consejo.";
 answers[32] = choices[32][2];
 units[32] = "5";
 comments[32] = "Id Pregunta: 372. UNION EUROPEA";


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[33]= "34)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[33]= new Array();
 choices[33][0] = "De un mes si el acto fuera presunto";
 choices[33][1] = "De un mes si el acto fuera expreso";
 choices[33][2] = "De un mes en cualquier caso";
 choices[33][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[33] = choices[33][1];
 units[33] = "8";
 comments[33] = "Id Pregunta: 142. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[34]= "35)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[34]= new Array();
 choices[34][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[34][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[34][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[34][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[34] = choices[34][2];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 821. Ley 40/2015";


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[35]= "36)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[35]= new Array();
 choices[35][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[35][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[35][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[35][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[35] = choices[35][0];
 units[35] = "1";
 comments[35] = "Id Pregunta: 270. CONSTITUCION1978";


//  Id pregunta: 499 Año de creación de pregunta: 2016
 questions[36]= "37)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[36]= new Array();
 choices[36][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[36][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[36][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[36][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[36] = choices[36][3];
 units[36] = "10";
 comments[36] = "Id Pregunta: 499. PRESUPUESTOS GENERALES";


//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[37]= "38)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[37]= new Array();
 choices[37][0] = "Seis a&ntilde;os.";
 choices[37][1] = "Cinco a&ntilde;os.";
 choices[37][2] = "Cuatro a&ntilde;os.";
 choices[37][3] = "Ocho a&ntilde;os.";
 answers[37] = choices[37][1];
 units[37] = "5";
 comments[37] = "Id Pregunta: 307. UNION EUROPEA";


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[38]= "39)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[38]= new Array();
 choices[38][0] = "Estrasburgo.";
 choices[38][1] = "Bruselas.";
 choices[38][2] = "Luxemburgo.";
 choices[38][3] = "Holanda.";
 answers[38] = choices[38][0];
 units[38] = "5";
 comments[38] = "Id Pregunta: 293. UNION EUROPEA";


//  Id pregunta: 719 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;A trav&eacute;s de qu&eacute; empresa surgen las metodolog&iacute;as lean?";
 choices[39]= new Array();
 choices[39][0] = "Ford";
 choices[39][1] = "Google";
 choices[39][2] = "Toyota";
 choices[39][3] = "Facebook";
 answers[39] = choices[39][2];
 units[39] = "34";
 comments[39] = "Id Pregunta: 719. Metodologias Lean";


//  Id pregunta: 424 Año de creación de pregunta: 2016
 questions[40]= "41)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[40]= new Array();
 choices[40][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[40][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[40][2] = "Ninguna es correcta.";
 choices[40][3] = "A y B son correctas.";
 answers[40] = choices[40][0];
 units[40] = "14";
 comments[40] = "Id Pregunta: 424. POLITICAS DE IGUALDAD";


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[41]= "42)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[41]= new Array();
 choices[41][0] = "ASF-AL (Apache License 2.0)";
 choices[41][1] = "EUPL (European Union Public License)";
 choices[41][2] = "LGPL (Lesser General Public License)";
 choices[41][3] = "MIT(MIT License)";
 answers[41] = choices[41][1];
 units[41] = "43";
 comments[41] = "Id Pregunta: 32. AGE A1 2015";


//  Id pregunta: 318 Año de creación de pregunta: 2016
 questions[42]= "43)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[42]= new Array();
 choices[42][0] = "Consejos y Servicios.";
 choices[42][1] = "Servicios permanentes y no permanentes.";
 choices[42][2] = "Direcciones Generales.";
 choices[42][3] = "Direcciones ministeriales.";
 answers[42] = choices[42][2];
 units[42] = "5";
 comments[42] = "Id Pregunta: 318. UNION EUROPEA";


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[43]= new Array();
 choices[43][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[43][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[43][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[43][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[43] = choices[43][1];
 units[43] = "1";
 comments[43] = "Id Pregunta: 175. CONSTITUCION1978";


//  Id pregunta: 647 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[44]= new Array();
 choices[44][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[44][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[44][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[44][3] = "El Instituto de la Mujer de Extremadura.";
 answers[44] = choices[44][3];
 units[44] = "14";
 comments[44] = "Id Pregunta: 647. Junta de Extremadura A1 2015";


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[45]= "46)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[45]= new Array();
 choices[45][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[45][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[45][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[45][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[45] = choices[45][2];
 units[45] = "7";
 comments[45] = "Id Pregunta: 536. LEY 39/2015";


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[46]= new Array();
 choices[46][0] = "Indirecta.";
 choices[46][1] = "Directa.";
 choices[46][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[46][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[46] = choices[46][1];
 units[46] = "14";
 comments[46] = "Id Pregunta: 392. POLITICAS DE IGUALDAD";


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[47]= "48)  Big Data:";
 choices[47]= new Array();
 choices[47][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[47][1] = "No puede emplearse para tratar datos no estructurados";
 choices[47][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[47][3] = "Ninguna de las anteriores";
 answers[47] = choices[47][3];
 units[47] = "73";
 comments[47] = "Id Pregunta: 109. ";


//  Id pregunta: 839 Año de creación de pregunta: 2016
 questions[48]= "49)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[48]= new Array();
 choices[48][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[48][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[48][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[48][3] = "Todas son correctas.";
 answers[48] = choices[48][3];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 839. Ley 40/2015";


//  Id pregunta: 577 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[49]= new Array();
 choices[49][0] = "MySQL";
 choices[49][1] = "SQLite";
 choices[49][2] = "Zope";
 choices[49][3] = "MariaDB";
 answers[49] = choices[49][2];
 units[49] = "61";
 comments[49] = "Id Pregunta: 577. Tema 61. TAI 2016.";


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[50]= "51)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[50]= new Array();
 choices[50][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[50][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[50][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[50][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[50] = choices[50][1];
 units[50] = "64";
 comments[50] = "Id Pregunta: 11. AGE A1 2015";


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[51]= "52)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[51]= new Array();
 choices[51][0] = "El Parlamento Europeo.";
 choices[51][1] = "Todas las respuestas son correctas.";
 choices[51][2] = "La Comisi&oacute;n Europea.";
 choices[51][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[51] = choices[51][1];
 units[51] = "5";
 comments[51] = "Id Pregunta: 353. UNION EUROPEA";


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[52]= "53)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[52]= new Array();
 choices[52][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[52][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[52][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[52][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[52] = choices[52][3];
 units[52] = "44";
 comments[52] = "Id Pregunta: 17. AGE A1 2015";


//  Id pregunta: 253 Año de creación de pregunta: 2016
 questions[53]= "54)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[53]= new Array();
 choices[53][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[53][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[53][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[53][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[53] = choices[53][3];
 units[53] = "1";
 comments[53] = "Id Pregunta: 253. CONSTITUCION1978";


//  Id pregunta: 598 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[54]= new Array();
 choices[54][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[54][1] = "Las CMADs";
 choices[54][2] = "Ambas son correctas.";
 choices[54][3] = "Ninguna es correcta";
 answers[54] = choices[54][2];
 units[54] = "19";
 comments[54] = "Id Pregunta: 598. Estrategia TIC";


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[55]= "56)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[55]= new Array();
 choices[55][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[55][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[55][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[55][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[55] = choices[55][1];
 units[55] = "19";
 comments[55] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 125 Año de creación de pregunta: 2016
 questions[56]= "57)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[56]= new Array();
 choices[56][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[56][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[56][2] = "La protecci&oacute;n del medio ambiente.";
 choices[56][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[56] = choices[56][0];
 units[56] = "22";
 comments[56] = "Id Pregunta: 125. ";


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


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[58]= "59)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[58]= new Array();
 choices[58][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[58][1] = "La delimitaci&oacute;n de su territorio.";
 choices[58][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[58][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[58] = choices[58][2];
 units[58] = "1";
 comments[58] = "Id Pregunta: 228. CONSTITUCION1978";


//  Id pregunta: 118 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[59]= new Array();
 choices[59][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[59][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[59][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[59][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[59] = choices[59][2];
 units[59] = "15";
 comments[59] = "Id Pregunta: 118. ";


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[60]= "61)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[60]= new Array();
 choices[60][0] = "Integrar la estrategia TIC con la de negocio";
 choices[60][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[60][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[60][3] = "Todas las anteriores";
 answers[60] = choices[60][3];
 units[60] = "26";
 comments[60] = "Id Pregunta: 549. Gobernanza TIC";


//  Id pregunta: 627 Año de creación de pregunta: 2016
 questions[61]= "62)  En UML &iquest;qu&eacute; es una m&aacute;quina de estados?";
 choices[61]= new Array();
 choices[61][0] = "Es un modelo computacional representado por grafos, en los que los estados son los v&eacute;rtices.";
 choices[61][1] = "Es un dispositivo que puede ser programado para cumplir determinadas tareas de control en sistema autom&aacute;ticos.";
 choices[61][2] = "Es un comportamiento que especifica las secuencias de estados por las que pasa un objeto a lo largo de su vida en respuesta a eventos, junto con sus respuestas a esos eventos.";
 choices[61][3] = "Es un sistema l&oacute;gico que posee una entrada, un procesador intermedio y una salida resultado de la aplicaci&oacute;n del procesamiento sobre la entrada.";
 answers[61] = choices[61][2];
 units[61] = "89";
 comments[61] = "Id Pregunta: 627. Junta de Extremadura A1 2015";


//  Id pregunta: 573 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[62]= new Array();
 choices[62][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[62][1] = "Entrada en la Uni&oacute;n Europea";
 choices[62][2] = "Pactos de la Moncloa";
 choices[62][3] = "Ingreso en la ONU";
 answers[62] = choices[62][3];
 units[62] = "12";
 comments[62] = "Id Pregunta: 573. Modelo econ&oacute;mico";


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[63]= "64)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[63]= new Array();
 choices[63][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[63][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[63][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[63][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[63] = choices[63][2];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 770. Ley 40/2015";


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[64]= "65)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[64]= new Array();
 choices[64][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[64][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[64][2] = "a y b son correctas";
 choices[64][3] = "a y b son incorrectas";
 answers[64] = choices[64][0];
 units[64] = "7";
 comments[64] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[65]= "66)  Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos:";
 choices[65]= new Array();
 choices[65][0] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[65][1] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 choices[65][2] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[65][3] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 answers[65] = choices[65][3];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 777. Ley 40/2015";


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[66]= "67)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[66]= new Array();
 choices[66][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[66][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[66][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[66][3] = "El Senado se compone de 350 senadores.";
 answers[66] = choices[66][0];
 units[66] = "1";
 comments[66] = "Id Pregunta: 212. CONSTITUCION1978";


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[67]= "68)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[67]= new Array();
 choices[67][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[67][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[67][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[67][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[67] = choices[67][2];
 units[67] = "101";
 comments[67] = "Id Pregunta: 60. AGE A1 2015";


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[68]= "69)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[68]= new Array();
 choices[68][0] = "los Secretarios de Estado";
 choices[68][1] = "los Ministros";
 choices[68][2] = "los Subsecretarios";
 choices[68][3] = "los Secretarios generales";
 answers[68] = choices[68][2];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 810. Ley 40/2015";


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[69]= "70)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[69]= new Array();
 choices[69][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[69][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[69][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[69][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[69] = choices[69][0];
 units[69] = "10";
 comments[69] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";


//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[70]= new Array();
 choices[70][0] = "Un diputado y un senador, cada una de ellas";
 choices[70][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[70][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[70][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[70] = choices[70][2];
 units[70] = "1";
 comments[70] = "Id Pregunta: 192. CONSTITUCION1978";


//  Id pregunta: 714 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[71]= new Array();
 choices[71][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[71][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[71][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[71][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[71] = choices[71][3];
 units[71] = "22";
 comments[71] = "Id Pregunta: 714. Ley de transparencia";


//  Id pregunta: 531 Año de creación de pregunta: 2016
 questions[72]= "73)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[72]= new Array();
 choices[72][0] = "formular solicitudes";
 choices[72][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[72][2] = "presentar declaraciones responsables o comunicaciones";
 choices[72][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[72] = choices[72][1];
 units[72] = "7";
 comments[72] = "Id Pregunta: 531. LEY 39/2015";


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[73]= new Array();
 choices[73][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[73][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[73][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[73][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[73] = choices[73][0];
 units[73] = "19";
 comments[73] = "Id Pregunta: 559. Agenda Digital";


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[74]= new Array();
 choices[74][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[74][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[74][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[74][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[74] = choices[74][2];
 units[74] = "4, 7, 8, 9";
 comments[74] = "Id Pregunta: 824. Ley 40/2015";


