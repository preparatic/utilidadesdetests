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

//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[0]= "1)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[0]= new Array();
 choices[0][0] = "El presidente de las Cortes Generales.";
 choices[0][1] = "El Presidente del Gobierno.";
 choices[0][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[0][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[0] = choices[0][3];
 units[0] = "10";
 comments[0] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";
 preguntaids[0] = 502


//  Id pregunta: 647 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[1]= new Array();
 choices[1][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[1][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[1][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[1][3] = "El Instituto de la Mujer de Extremadura.";
 answers[1] = choices[1][3];
 units[1] = "14";
 comments[1] = "Id Pregunta: 647. Junta de Extremadura A1 2015";
 preguntaids[1] = 647


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[2]= "3)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[2]= new Array();
 choices[2][0] = "los Subsecretarios y Secretarios generales";
 choices[2][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[2][2] = "los Secretarios de Estado";
 choices[2][3] = "los Subdirectores generales";
 answers[2] = choices[2][2];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 789. Ley 40/2015";
 preguntaids[2] = 789


//  Id pregunta: 324 Año de creación de pregunta: 2016
 questions[3]= "4)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[3]= new Array();
 choices[3][0] = "Tres a&ntilde;os.";
 choices[3][1] = "Cuatro a&ntilde;os.";
 choices[3][2] = "Cinco a&ntilde;os.";
 choices[3][3] = "Seis a&ntilde;os.";
 answers[3] = choices[3][0];
 units[3] = "5";
 comments[3] = "Id Pregunta: 324. UNION EUROPEA";
 preguntaids[3] = 324


//  Id pregunta: 394 Año de creación de pregunta: 2016
 questions[4]= "5)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[4]= new Array();
 choices[4][0] = "Discriminaci&oacute;n indirecta.";
 choices[4][1] = "Discriminaci&oacute;n directa.";
 choices[4][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[4][3] = "Discriminaci&oacute;n abusiva.";
 answers[4] = choices[4][0];
 units[4] = "14";
 comments[4] = "Id Pregunta: 394. POLITICAS DE IGUALDAD";
 preguntaids[4] = 394


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[5]= "6)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[5]= new Array();
 choices[5][0] = "De un mes si el acto fuera presunto";
 choices[5][1] = "De un mes si el acto fuera expreso";
 choices[5][2] = "De un mes en cualquier caso";
 choices[5][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[5] = choices[5][1];
 units[5] = "8";
 comments[5] = "Id Pregunta: 142. Ley 39/2015, Art&iacute;culo 122";
 preguntaids[5] = 142


//  Id pregunta: 700 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Qu&eacute; es SonarQube?";
 choices[6]= new Array();
 choices[6][0] = "Una m&eacute;trica de calidad orientada a estandarizar la evaluaci&oacute;n cualitativa del c&oacute;digo fuente.";
 choices[6][1] = "Una plataforma Open Source de inspecci&oacute;n continua de la calidad del c&oacute;digo.";
 choices[6][2] = "Una herramienta propietaria para la integraci&oacute;n continua, integrada en Apache Jenkins.";
 choices[6][3] = "Una herramienta multiplataforma para la evaluaci&oacute;n de la calidad en el c&oacute;digo desarrollada en VisualBasic 6.";
 answers[6] = choices[6][2];
 units[6] = "92";
 comments[6] = "Id Pregunta: 700. INTEGRACION CONTINUA";
 preguntaids[6] = 700


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[7]= new Array();
 choices[7][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[7][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[7][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[7][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[7] = choices[7][0];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 849. Ley 40/2015";
 preguntaids[7] = 849


//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[8]= "9)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[8]= new Array();
 choices[8][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[8][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[8][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[8][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[8] = choices[8][1];
 units[8] = "43";
 comments[8] = "Id Pregunta: 443. SERVICIOS COMUNES";
 preguntaids[8] = 443


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[9]= "10)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[9]= new Array();
 choices[9][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[9][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[9][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[9][3] = "todas son correctas";
 answers[9] = choices[9][3];
 units[9] = "7";
 comments[9] = "Id Pregunta: 533. LEY 39/2015";
 preguntaids[9] = 533


//  Id pregunta: 507 Año de creación de pregunta: 2016
 questions[10]= "11)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[10]= new Array();
 choices[10][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[10][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[10][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[10][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[10] = choices[10][3];
 units[10] = "10";
 comments[10] = "Id Pregunta: 507. PRESUPUESTOS GENERALES";
 preguntaids[10] = 507


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[11]= new Array();
 choices[11][0] = "En 2015";
 choices[11][1] = "En 2013";
 choices[11][2] = "En 2016";
 choices[11][3] = "En 2007";
 answers[11] = choices[11][1];
 units[11] = "19";
 comments[11] = "Id Pregunta: 560. Agenda Digital";
 preguntaids[11] = 560


//  Id pregunta: 740 Año de creación de pregunta: 2016
 questions[12]= "13)  La estructura de la Estrategia TIC:";
 choices[12]= new Array();
 choices[12][0] = "5 principios rectores, 7 objetivos estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[12][1] = "5 principios rectores, 5 objetivos estrat&eacute;gicos, 7 l&iacute;neas de acci&oacute;n";
 choices[12][2] = "5 principios rectores, 5 objetivos estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[12][3] = "5 principios rectores, 6 objetivos estrat&eacute;gicos, 8 l&iacute;neas de acci&oacute;n";
 answers[12] = choices[12][2];
 units[12] = "28";
 comments[12] = "Id Pregunta: 740. Estrategia TIC";
 preguntaids[12] = 740


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[13]= "14)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[13]= new Array();
 choices[13][0] = "Cuatro.";
 choices[13][1] = "Una.";
 choices[13][2] = "Cinco.";
 choices[13][3] = "Nueve.";
 answers[13] = choices[13][2];
 units[13] = "1";
 comments[13] = "Id Pregunta: 268. CONSTITUCION1978";
 preguntaids[13] = 268


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[14]= "15)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[14]= new Array();
 choices[14][0] = "los Subsecretarios y los Secretarios generales";
 choices[14][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[14][2] = "los Secretarios de Estado y los Directores generales";
 choices[14][3] = "los Ministros y los Secretarios de Estado";
 answers[14] = choices[14][3];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 788. Ley 40/2015";
 preguntaids[14] = 788


//  Id pregunta: 368 Año de creación de pregunta: 2016
 questions[15]= "16)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[15]= new Array();
 choices[15][0] = "Un Reglamento.";
 choices[15][1] = "Un Decreto.";
 choices[15][2] = "Una Ley.";
 choices[15][3] = "Un Real-Decreto.";
 answers[15] = choices[15][2];
 units[15] = "5";
 comments[15] = "Id Pregunta: 368. UNION EUROPEA";
 preguntaids[15] = 368


//  Id pregunta: 25 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Mediante qu&eacute; tipo de objetos se implementa el acceso a los recursos gestionados con la tecnolog&iacute;a JMX?";
 choices[16]= new Array();
 choices[16][0] = "SessionBean";
 choices[16][1] = "JavaBean";
 choices[16][2] = "MBeans";
 choices[16][3] = "MessageDrivenBean";
 answers[16] = choices[16][2];
 units[16] = "64";
 comments[16] = "Id Pregunta: 25. AGE A1 2015";
 preguntaids[16] = 25


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban?:";
 choices[17]= new Array();
 choices[17][0] = "Se definen iteraciones";
 choices[17][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[17][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[17][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[17] = choices[17][1];
 units[17] = "34, 84";
 comments[17] = "Id Pregunta: 732. Metodologias &aacute;giles";
 preguntaids[17] = 732


//  Id pregunta: 835 Año de creación de pregunta: 2016
 questions[18]= "19)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[18]= new Array();
 choices[18][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[18][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[18][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[18][3] = "Todas son correctas.";
 answers[18] = choices[18][0];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 835. Ley 40/2015";
 preguntaids[18] = 835


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[19]= new Array();
 choices[19][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[19][1] = "De nivel alto.";
 choices[19][2] = "De nivel medio y nivel alto.";
 choices[19][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[19] = choices[19][3];
 units[19] = "35";
 comments[19] = "Id Pregunta: 632. Junta de Extremadura A1 2015";
 preguntaids[19] = 632


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[20]= new Array();
 choices[20][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[20][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[20][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[20][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[20] = choices[20][0];
 units[20] = "1";
 comments[20] = "Id Pregunta: 202. CONSTITUCION1978";
 preguntaids[20] = 202


//  Id pregunta: 738 Año de creación de pregunta: 2016
 questions[21]= "22)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se basar&aacute;n en:";
 choices[21]= new Array();
 choices[21][0] = "6 principios.";
 choices[21][1] = "7 principios.";
 choices[21][2] = "5 principios.";
 choices[21][3] = "6 directrices.";
 answers[21] = choices[21][2];
 units[21] = "28";
 comments[21] = "Id Pregunta: 738. Estrategia TIC";
 preguntaids[21] = 738


//  Id pregunta: 675 Año de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;ale cual de los siguientes factores no contribuye a la sostenibilidad del sistema de pensiones:";
 choices[22]= new Array();
 choices[22][0] = "El aumento de la esperanza de vida.";
 choices[22][1] = "La mejora del &iacute;ndice de natalidad.";
 choices[22][2] = "La reducci&oacute;n del desempleo.";
 choices[22][3] = "El incremento de la edad de jubilaci&oacute;n.";
 answers[22] = choices[22][0];
 units[22] = "14";
 comments[22] = "Id Pregunta: 675. Estructura social";
 preguntaids[22] = 675


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[23]= "24)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[23]= new Array();
 choices[23][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[23][1] = "Autorizar indultos generales.";
 choices[23][2] = "Sancionar las leyes.";
 choices[23][3] = "Promulgar las leyes.";
 answers[23] = choices[23][1];
 units[23] = "1";
 comments[23] = "Id Pregunta: 185. CONSTITUCION1978";
 preguntaids[23] = 185


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[24]= "25)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[24]= new Array();
 choices[24][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[24][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[24][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[24][3] = "Todas las respuestas son correctas.";
 answers[24] = choices[24][3];
 units[24] = "50";
 comments[24] = "Id Pregunta: 622. Junta de Extremadura A1 2015";
 preguntaids[24] = 622


//  Id pregunta: 854 Año de creación de pregunta: 2016
 questions[25]= "26)  Si disponemos de 6 discos SAS de 1TB netos configurados en RAID5, &iquest;de qu&eacute; capacidad neta se dispone en RAID5 en el sistema de almacenamiento?";
 choices[25]= new Array();
 choices[25][0] = "6 TB.";
 choices[25][1] = "5 TB.";
 choices[25][2] = "7 TB.";
 choices[25][3] = "3 TB.";
 answers[25] = choices[25][1];
 units[25] = "53";
 comments[25] = "Id Pregunta: 854. Xunta de Galicia 2015";
 preguntaids[25] = 854


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[26]= "27)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[26]= new Array();
 choices[26][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[26][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[26][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[26][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[26] = choices[26][0];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 779. Ley 40/2015";
 preguntaids[26] = 779


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[27]= "28)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[27]= new Array();
 choices[27][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[27][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[27][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[27][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[27] = choices[27][2];
 units[27] = "5";
 comments[27] = "Id Pregunta: 288. UNION EUROPEA";
 preguntaids[27] = 288


//  Id pregunta: 390 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[28]= new Array();
 choices[28][0] = "El Consejo Nacional de la Mujer.";
 choices[28][1] = "El Consejo de la Mujer.";
 choices[28][2] = "El Instituto de la Mujer.";
 choices[28][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[28] = choices[28][3];
 units[28] = "14";
 comments[28] = "Id Pregunta: 390. POLITICAS DE IGUALDAD";
 preguntaids[28] = 390


//  Id pregunta: 634 Año de creación de pregunta: 2016
 questions[29]= "30)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[29]= new Array();
 choices[29][0] = "Monol&iacute;tico.";
 choices[29][1] = "Estratificado.";
 choices[29][2] = "Cliente/servidor.";
 choices[29][3] = "Orientado a objetos.";
 answers[29] = choices[29][3];
 units[29] = "56";
 comments[29] = "Id Pregunta: 634. Junta de Extremadura A1 2015";
 preguntaids[29] = 634


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[30]= new Array();
 choices[30][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[30][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[30][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[30][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[30] = choices[30][2];
 units[30] = "7";
 comments[30] = "Id Pregunta: 149. Ley 39/2015, Art&iacute;culo 132";
 preguntaids[30] = 149


//  Id pregunta: 191 Año de creación de pregunta: 2016
 questions[31]= "32)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[31]= new Array();
 choices[31][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[31][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[31][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[31][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[31] = choices[31][2];
 units[31] = "1";
 comments[31] = "Id Pregunta: 191. CONSTITUCION1978";
 preguntaids[31] = 191


//  Id pregunta: 38 Año de creación de pregunta: 2016
 questions[32]= "33)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[32]= new Array();
 choices[32][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[32][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[32][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[32][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[32] = choices[32][3];
 units[32] = "62";
 comments[32] = "Id Pregunta: 38. AGE A1 2015";
 preguntaids[32] = 38


//  Id pregunta: 333 Año de creación de pregunta: 2016
 questions[33]= "34)  Est&aacute;n legitimados para interponer el recurso de carencia del art. 175 TCE:";
 choices[33]= new Array();
 choices[33][0] = "Las instituciones comunitarias.";
 choices[33][1] = "Los Estados miembros y las instituciones comunitarias.";
 choices[33][2] = "Los Estados miembros.";
 choices[33][3] = "Los nacionales de los Estados miembros.";
 answers[33] = choices[33][1];
 units[33] = "5";
 comments[33] = "Id Pregunta: 333. UNION EUROPEA";
 preguntaids[33] = 333


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[34]= "35)  En el sistema operativo Unix/Linux, el comando id:";
 choices[34]= new Array();
 choices[34][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[34][1] = "El comando id no existe.";
 choices[34][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[34][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[34] = choices[34][0];
 units[34] = "57";
 comments[34] = "Id Pregunta: 639. Junta de Extremadura A1 2015";
 preguntaids[34] = 639


//  Id pregunta: 131 Año de creación de pregunta: 2016
 questions[35]= "36)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[35]= new Array();
 choices[35][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[35][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[35][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[35][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[35] = choices[35][0];
 units[35] = "12";
 comments[35] = "Id Pregunta: 131. Leyes modelo econ&oacute;mico";
 preguntaids[35] = 131


//  Id pregunta: 584 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[36]= new Array();
 choices[36][0] = "El 5 de Octubre de 2015";
 choices[36][1] = "El 15 de Octubre de 2015";
 choices[36][2] = "El 15 de Septiembre de 2015";
 choices[36][3] = "El 2 de Octubre de 2015";
 answers[36] = choices[36][2];
 units[36] = "19";
 comments[36] = "Id Pregunta: 584. Estrategia TIC";
 preguntaids[36] = 584


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[37]= "38)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[37]= new Array();
 choices[37][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[37][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[37][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[37][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[37] = choices[37][1];
 units[37] = "19";
 comments[37] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";
 preguntaids[37] = 160


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[38]= new Array();
 choices[38][0] = "Permite al equipo reaccionar mejor ante imprevistos";
 choices[38][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[38][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[38][3] = "Ninguna de las anteriores";
 answers[38] = choices[38][1];
 units[38] = "34, 84";
 comments[38] = "Id Pregunta: 723. Metodologias &aacute;giles";
 preguntaids[38] = 723


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[39]= "40)  Las Administraciones P&uacute;blicas:";
 choices[39]= new Array();
 choices[39][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[39][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[39][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[39][3] = "todas son correctas";
 answers[39] = choices[39][1];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 772. Ley 40/2015";
 preguntaids[39] = 772


//  Id pregunta: 521 Año de creación de pregunta: 2016
 questions[40]= "41)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[40]= new Array();
 choices[40][0] = "un art&iacute;culo";
 choices[40][1] = "dos art&iacute;culos";
 choices[40][2] = "tres art&iacute;culos";
 choices[40][3] = "cuatro art&iacute;culos";
 answers[40] = choices[40][1];
 units[40] = "7";
 comments[40] = "Id Pregunta: 521. LEY 39/2015";
 preguntaids[40] = 521


//  Id pregunta: 200 Año de creación de pregunta: 2016
 questions[41]= "42)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[41]= new Array();
 choices[41][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[41][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[41][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[41][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[41] = choices[41][3];
 units[41] = "1";
 comments[41] = "Id Pregunta: 200. CONSTITUCION1978";
 preguntaids[41] = 200


//  Id pregunta: 547 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[42]= new Array();
 choices[42][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[42][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[42][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[42][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[42] = choices[42][1];
 units[42] = "26";
 comments[42] = "Id Pregunta: 547. Gobernanza TIC";
 preguntaids[42] = 547


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[43]= "44)  Es falso que:";
 choices[43]= new Array();
 choices[43][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[43][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[43][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[43][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[43] = choices[43][1];
 units[43] = "20";
 comments[43] = "Id Pregunta: 752. Direcci&oacute;n p&uacute;blica";
 preguntaids[43] = 752


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[44]= new Array();
 choices[44][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[44][1] = "Pasivos financieros y transferencias de capital.";
 choices[44][2] = "Activos financieros y pasivos financieros.";
 choices[44][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[44] = choices[44][2];
 units[44] = "10";
 comments[44] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";
 preguntaids[44] = 461


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[45]= "46)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[45]= new Array();
 choices[45][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[45][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[45][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[45][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[45] = choices[45][2];
 units[45] = "12";
 comments[45] = "Id Pregunta: 136. Leyes modelo econ&oacute;mico";
 preguntaids[45] = 136


//  Id pregunta: 531 Año de creación de pregunta: 2016
 questions[46]= "47)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[46]= new Array();
 choices[46][0] = "formular solicitudes";
 choices[46][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[46][2] = "presentar declaraciones responsables o comunicaciones";
 choices[46][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[46] = choices[46][1];
 units[46] = "7";
 comments[46] = "Id Pregunta: 531. LEY 39/2015";
 preguntaids[46] = 531


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


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[48]= new Array();
 choices[48][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[48][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[48][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[48][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[48] = choices[48][0];
 units[48] = "5";
 comments[48] = "Id Pregunta: 319. UNION EUROPEA";
 preguntaids[48] = 319


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[49]= "50)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[49]= new Array();
 choices[49][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[49][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[49][2] = "Cinco a&ntilde;os.";
 choices[49][3] = "Ninguna es correcta.";
 answers[49] = choices[49][2];
 units[49] = "5";
 comments[49] = "Id Pregunta: 346. UNION EUROPEA";
 preguntaids[49] = 346


//  Id pregunta: 861 Año de creación de pregunta: 2016
 questions[50]= "51)  Para la generaci&oacute;n de contenidos de un sitio web p&uacute;blico se necesitan diversos perfiles. Indique cu&aacute;l NO es uno de ellos.";
 choices[50]= new Array();
 choices[50][0] = "Generador de contenidos";
 choices[50][1] = "Publicador de contenidos";
 choices[50][2] = "Administrador de contenidos";
 choices[50][3] = "Aprobador de contenidos";
 answers[50] = choices[50][3];
 units[50] = "125";
 comments[50] = "Id Pregunta: 861. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[50] = 861


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[51]= "52)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[51]= new Array();
 choices[51][0] = "Principio de transparencia.";
 choices[51][1] = "Principio de cooperaci&oacute;n.";
 choices[51][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[51][3] = "Principio de lealtad institucional.";
 answers[51] = choices[51][1];
 units[51] = "10";
 comments[51] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";
 preguntaids[51] = 504


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[52]= new Array();
 choices[52][0] = "Diagrama de clases";
 choices[52][1] = "Diagrama de componentes";
 choices[52][2] = "Diagrama de estructura";
 choices[52][3] = "Diagrama de paquetes";
 answers[52] = choices[52][0];
 units[52] = "91";
 comments[52] = "Id Pregunta: 88. AGE A1 2015";
 preguntaids[52] = 88


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[53]= "54)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[53]= new Array();
 choices[53][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[53][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[53][2] = "Ambas son correctas.";
 choices[53][3] = "La A y B son incorrectas.";
 answers[53] = choices[53][2];
 units[53] = "14";
 comments[53] = "Id Pregunta: 417. POLITICAS DE IGUALDAD";
 preguntaids[53] = 417


//  Id pregunta: 771 Año de creación de pregunta: 2016
 questions[54]= "55)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[54]= new Array();
 choices[54][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[54][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[54][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[54][3] = "todas son correctas";
 answers[54] = choices[54][3];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 771. Ley 40/2015";
 preguntaids[54] = 771


//  Id pregunta: 446 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l es el servicio com&uacute;n que  permitir&aacute; la tramitaci&oacute;n por medios electr&oacute;nicos de todo el ciclo de vida involucrado en la concesi&oacute;n de ayudas provenientes de los fondos FEDER?";
 choices[55]= new Array();
 choices[55][0] = "IRIA";
 choices[55][1] = "GALATEA";
 choices[55][2] = "BADARAL";
 choices[55][3] = "SOROLLA";
 answers[55] = choices[55][1];
 units[55] = "43";
 comments[55] = "Id Pregunta: 446. SERVICIOS COMUNES";
 preguntaids[55] = 446


//  Id pregunta: 860 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;l NO es un objetivo de la utilizaci&oacute;n por parte de la Administraci&oacute;n de la web 2.0?";
 choices[56]= new Array();
 choices[56][0] = "Permitir la generaci&oacute;n de comentarios acerca de la informaci&oacute;n ofrecida y recibir actualizaciones en vivo por parte de los usuarios.";
 choices[56][1] = "Promover una mayor interacci&oacute;n con las principales redes sociales.";
 choices[56][2] = "Conseguir un conocimiento abierto, en particular mediante blogs y wikis.";
 choices[56][3] = "Conseguir que el usuario se sienta escuchado.";
 answers[56] = choices[56][1];
 units[56] = "125";
 comments[56] = "Id Pregunta: 860. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[56] = 860


//  Id pregunta: 690 Año de creación de pregunta: 2016
 questions[57]= "58)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que deben cumplir los servicios cualificados de entrega electro&#769;nica certificada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[57]= new Array();
 choices[57][0] = "Ser prestados por uno o ma&#769;s prestadores cualificados de servicios de confianza";
 choices[57][1] = "Garantizar la identificacio&#769;n del destinatario antes de la entrega de los datos";
 choices[57][2] = "Indicar mediante un sello cualificado de tiempo electro&#769;nico la fecha y hora de envi&#769;o, recepcio&#769;n y eventual modificacio&#769;n de los datos";
 choices[57][3] = "Proteger el envi&#769;o y la recepcio&#769;n de datos por una firma electro&#769;nica cualificada o un sello electro&#769;nico cualificado de un prestador cualificado de servicios de confianza";
 answers[57] = choices[57][1];
 units[57] = "77";
 comments[57] = "Id Pregunta: 690. Art&iacute;culo 44 del Reglamento 910/2014";
 preguntaids[57] = 690


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[58]= new Array();
 choices[58][0] = "El Tratado de Lisboa";
 choices[58][1] = "El Tratado de Amsterdam";
 choices[58][2] = "El Tratado de Niza";
 choices[58][3] = "El Acta &Uacute;nica Europea";
 answers[58] = choices[58][1];
 units[58] = "15";
 comments[58] = "Id Pregunta: 115. ";
 preguntaids[58] = 115


//  Id pregunta: 615 Año de creación de pregunta: 2016
 questions[59]= "60)  El Modelo de Referencia de Interconexi&oacute;n de Sistemas Abiertos (OSI) consta de siete niveles. Se&ntilde;ala cu&aacute;l de los principios que se aplicaron para llevar a cabo esta divisi&oacute;n es falso:";
 choices[59]= new Array();
 choices[59][0] = "No se deben crear demasiados niveles de manera que la tarea de describir e integrar &eacute;stos fuera m&aacute;s dif&iacute;cil de lo necesario.";
 choices[59][1] = "Aunque se requiera un nivel de abstracci&oacute;n diferente en el manejo de los datos, debe usarse un nivel ya existente.";
 choices[59][2] = "Cada nivel debe realizar unas funciones bien definidas.";
 choices[59][3] = "Crear para cada nivel interfases con el nivel superior e inferior &uacute;nicamente.";
 answers[59] = choices[59][1];
 units[59] = "48";
 comments[59] = "Id Pregunta: 615. Junta de Extremadura A1 2015";
 preguntaids[59] = 615


//  Id pregunta: 372 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[60]= new Array();
 choices[60][0] = "El Parlamento y el Consejo.";
 choices[60][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[60][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[60][3] = "La Comisi&oacute;n y el Consejo.";
 answers[60] = choices[60][2];
 units[60] = "5";
 comments[60] = "Id Pregunta: 372. UNION EUROPEA";
 preguntaids[60] = 372


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[61]= "62)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[61]= new Array();
 choices[61][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[61][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[61][2] = "a y b son correctas";
 choices[61][3] = "a y b son incorrectas";
 answers[61] = choices[61][0];
 units[61] = "7";
 comments[61] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";
 preguntaids[61] = 153


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[62]= new Array();
 choices[62][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[62][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[62][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[62][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[62] = choices[62][0];
 units[62] = "15";
 comments[62] = "Id Pregunta: 114. ";
 preguntaids[62] = 114


//  Id pregunta: 798 Año de creación de pregunta: 2016
 questions[63]= "64)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[63]= new Array();
 choices[63][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[63][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[63][2] = "a y b son correctas";
 choices[63][3] = "a y b son incorrectas";
 answers[63] = choices[63][2];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 798. Ley 40/2015";
 preguntaids[63] = 798


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[64]= "65)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[64]= new Array();
 choices[64][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[64][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[64][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[64][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[64] = choices[64][2];
 units[64] = "1";
 comments[64] = "Id Pregunta: 250. CONSTITUCION1978";
 preguntaids[64] = 250


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[65]= "66)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[65]= new Array();
 choices[65][0] = "&oacute;rganos superiores";
 choices[65][1] = "&oacute;rganos directivos";
 choices[65][2] = "&oacute;rganos superiores y directivos";
 choices[65][3] = "ninguna es correcta";
 answers[65] = choices[65][1];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 796. Ley 40/2015";
 preguntaids[65] = 796


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[66]= "67)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[66]= new Array();
 choices[66][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[66][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[66][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[66][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[66] = choices[66][3];
 units[66] = "44";
 comments[66] = "Id Pregunta: 17. AGE A1 2015";
 preguntaids[66] = 17


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[67]= "68)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[67]= new Array();
 choices[67][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[67][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[67][2] = "a y b son correctas";
 choices[67][3] = "a y b son incorrectas";
 answers[67] = choices[67][2];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 783. Ley 40/2015";
 preguntaids[67] = 783


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[68]= "69)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[68]= new Array();
 choices[68][0] = "Por unanimidad.";
 choices[68][1] = "Por mayor&iacute;a cualificada.";
 choices[68][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[68][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[68] = choices[68][3];
 units[68] = "5";
 comments[68] = "Id Pregunta: 312. UNION EUROPEA";
 preguntaids[68] = 312


//  Id pregunta: 839 Año de creación de pregunta: 2016
 questions[69]= "70)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[69]= new Array();
 choices[69][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[69][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[69][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[69][3] = "Todas son correctas.";
 answers[69] = choices[69][3];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 839. Ley 40/2015";
 preguntaids[69] = 839


//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[70]= "71)  JNDI se usa para el acceso a:";
 choices[70]= new Array();
 choices[70][0] = "Datos de ficheros";
 choices[70][1] = "Sistemas gestores de bases de datos";
 choices[70][2] = "Directorios de nombres";
 choices[70][3] = "Colas de mensajer&iacute;a";
 answers[70] = choices[70][2];
 units[70] = "64";
 comments[70] = "Id Pregunta: 13. AGE A1 2015";
 preguntaids[70] = 13


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale la respuesta correcta:";
 choices[71]= new Array();
 choices[71][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[71][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[71][2] = "A y B son correctas.";
 choices[71][3] = "A y B son falsas.";
 answers[71] = choices[71][2];
 units[71] = "4, 7, 8, 9";
 comments[71] = "Id Pregunta: 848. Ley 40/2015";
 preguntaids[71] = 848


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[72]= "73)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[72]= new Array();
 choices[72][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[72][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[72][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[72][3] = "todas son correctas";
 answers[72] = choices[72][1];
 units[72] = "4, 7, 8, 9";
 comments[72] = "Id Pregunta: 778. Ley 40/2015";
 preguntaids[72] = 778


//  Id pregunta: 624 Año de creación de pregunta: 2016
 questions[73]= "74)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[73]= new Array();
 choices[73][0] = "Entradas (entities).";
 choices[73][1] = "Atributos (attribs).";
 choices[73][2] = "M&oacute;dulos (modules).";
 choices[73][3] = "Objetos (objects).";
 answers[73] = choices[73][0];
 units[73] = "74";
 comments[73] = "Id Pregunta: 624. Junta de Extremadura A1 2015";
 preguntaids[73] = 624


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[74]= "75)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[74]= new Array();
 choices[74][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[74][1] = "1 de enero de 2015";
 choices[74][2] = "1 de enero de 2016";
 choices[74][3] = "1 de julio de 2016";
 answers[74] = choices[74][3];
 units[74] = "77";
 comments[74] = "Id Pregunta: 691. Art&iacute;culo 50 del Reglamento 910/2014";
 preguntaids[74] = 691


