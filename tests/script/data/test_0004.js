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

//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[0]= "1)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[0]= new Array();
 choices[0][0] = "Por unanimidad.";
 choices[0][1] = "Por mayor&iacute;a cualificada.";
 choices[0][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[0][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[0] = choices[0][3];
 units[0] = "5";
 comments[0] = "Id Pregunta: 312. UNION EUROPEA";
 preguntaids[0] = 312


//  Id pregunta: 843 Año de creación de pregunta: 2016
 questions[1]= "2)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[1]= new Array();
 choices[1][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[1][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[1][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[1][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[1] = choices[1][2];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 843. Ley 40/2015";
 preguntaids[1] = 843


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[2]= "3)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[2]= new Array();
 choices[2][0] = "El Rey.";
 choices[2][1] = "El Jefe del Estado.";
 choices[2][2] = "El Gobierno.";
 choices[2][3] = "El Presidente del Gobierno.";
 answers[2] = choices[2][2];
 units[2] = "1";
 comments[2] = "Id Pregunta: 208. CONSTITUCION1978";
 preguntaids[2] = 208


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[3]= new Array();
 choices[3][0] = "La CETIC";
 choices[3][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[3][2] = "La DTIC";
 choices[3][3] = "Ninguno de los anteriores";
 answers[3] = choices[3][1];
 units[3] = "19";
 comments[3] = "Id Pregunta: 587. Estrategia TIC";
 preguntaids[3] = 587


//  Id pregunta: 399 Año de creación de pregunta: 2016
 questions[4]= "5)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[4]= new Array();
 choices[4][0] = "Acciones de discriminaci&oacute;n.";
 choices[4][1] = "Acciones positivas.";
 choices[4][2] = "Acciones negativas.";
 choices[4][3] = "Acciones neutras.";
 answers[4] = choices[4][1];
 units[4] = "14";
 comments[4] = "Id Pregunta: 399. POLITICAS DE IGUALDAD";
 preguntaids[4] = 399


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[5]= "6)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[5]= new Array();
 choices[5][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[5][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[5][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[5][3] = "cualquiera que sea el estado del procedimiento";
 answers[5] = choices[5][3];
 units[5] = "7";
 comments[5] = "Id Pregunta: 527. LEY 39/2015";
 preguntaids[5] = 527


//  Id pregunta: 483 Año de creación de pregunta: 2016
 questions[6]= "7)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[6]= new Array();
 choices[6][0] = "Cuatro millones de euros.";
 choices[6][1] = "Seis millones de euros.";
 choices[6][2] = "Siete millones de euros.";
 choices[6][3] = "Cinco millones de euros.";
 answers[6] = choices[6][1];
 units[6] = "10";
 comments[6] = "Id Pregunta: 483. PRESUPUESTOS GENERALES";
 preguntaids[6] = 483


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[7]= new Array();
 choices[7][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[7][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[7][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[7][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[7] = choices[7][0];
 units[7] = "1";
 comments[7] = "Id Pregunta: 220. CONSTITUCION1978";
 preguntaids[7] = 220


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[8]= "9)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[8]= new Array();
 choices[8][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[8][1] = "el Consejo de Estado";
 choices[8][2] = "el Congreso";
 choices[8][3] = "las Cortes Generales";
 answers[8] = choices[8][0];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 785. Ley 40/2015";
 preguntaids[8] = 785


//  Id pregunta: 709 Año de creación de pregunta: 2016
 questions[9]= "10)  En base a la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno se&ntilde;ale la afirmaci&oacute;n verdadera:";
 choices[9]= new Array();
 choices[9][0] = "El derecho de acceso a la informaci&oacute;n p&uacute;blica supone, entre otros, que el sujeto obligado a ello publique de forma peri&oacute;dica y actualizada la informaci&oacute;n cuyo conocimiento sea relevante para garantizar la transparencia de su actividad.";
 choices[9][1] = "Las entidades privadas no est&aacute;n sujetas a obligaciones de transparencia seg&uacute;n la Ley 19/2013.";
 choices[9][2] = "Se admitir&aacute;n a tr&aacute;mite, sin excepci&oacute;n, todas las solicitudes de acceso a la informaci&oacute;n por parte de los ciudadanos.";
 choices[9][3] = "El cumplimiento por la Administraci&oacute;n General del Estado de las obligaciones de publicidad activa ser&aacute; objeto de control por parte del CTBG.";
 answers[9] = choices[9][3];
 units[9] = "22";
 comments[9] = "Id Pregunta: 709. Ley de transparencia";
 preguntaids[9] = 709


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[10]= new Array();
 choices[10][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[10][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[10][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[10][3] = "El pago de subsidios a parados";
 answers[10] = choices[10][3];
 units[10] = "15";
 comments[10] = "Id Pregunta: 116. ";
 preguntaids[10] = 116


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[11]= "12)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[11]= new Array();
 choices[11][0] = "El nombre y el tipo de correspondencia.";
 choices[11][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[11][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[11][3] = "El nombre y el grado.";
 answers[11] = choices[11][1];
 units[11] = "85";
 comments[11] = "Id Pregunta: 636. Junta de Extremadura A1 2015";
 preguntaids[11] = 636


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[12]= new Array();
 choices[12][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[12][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[12][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[12][3] = "Todas las respuestas son correctas.";
 answers[12] = choices[12][2];
 units[12] = "42";
 comments[12] = "Id Pregunta: 618. Junta de Extremadura A1 2015";
 preguntaids[12] = 618


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[13]= new Array();
 choices[13][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[13][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[13][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[13][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[13] = choices[13][0];
 units[13] = "19";
 comments[13] = "Id Pregunta: 559. Agenda Digital";
 preguntaids[13] = 559


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[14]= "15)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[14]= new Array();
 choices[14][0] = "El derecho a la propiedad privada.";
 choices[14][1] = "El derecho de asociaci&oacute;n.";
 choices[14][2] = "El derecho de fundaci&oacute;n.";
 choices[14][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[14] = choices[14][1];
 units[14] = "1";
 comments[14] = "Id Pregunta: 174. CONSTITUCION1978";
 preguntaids[14] = 174


//  Id pregunta: 464 Año de creación de pregunta: 2016
 questions[15]= "16)  De acuerdo con lo establecido en la Ley General Presupuestaria, durante el ejercicio presupuestario no es posible modificar la cuant&iacute;a y/o finalidad de los cr&eacute;ditos contenidos en los presupuestos de gastos mediante:";
 choices[15]= new Array();
 choices[15][0] = "Transferencias de cr&eacute;dito.";
 choices[15][1] = "Incorporaciones de cr&eacute;dito.";
 choices[15][2] = "Imputaciones de cr&eacute;dito.";
 choices[15][3] = "Ampliaciones de cr&eacute;dito.";
 answers[15] = choices[15][2];
 units[15] = "10";
 comments[15] = "Id Pregunta: 464. PRESUPUESTOS GENERALES";
 preguntaids[15] = 464


//  Id pregunta: 733 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban?:";
 choices[16]= new Array();
 choices[16][0] = "Visualizar el trabajo o el flujo de trabajo";
 choices[16][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[16][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[16][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[16] = choices[16][3];
 units[16] = "34, 84";
 comments[16] = "Id Pregunta: 733. Metodologias &aacute;giles";
 preguntaids[16] = 733


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[17]= "18)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[17]= new Array();
 choices[17][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[17][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[17][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[17][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[17] = choices[17][2];
 units[17] = "26";
 comments[17] = "Id Pregunta: 1. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[17] = 1


//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale el que corresponde a un principio de integraci&oacute;n continua:";
 choices[18]= new Array();
 choices[18][0] = "Migraci&oacute;n manual y controlada a cada entorno de desarrollo";
 choices[18][1] = "Mantener un repositorio de c&oacute;digo.";
 choices[18][2] = "Reutilizaci&oacute;n de interfaces de usuario.";
 choices[18][3] = "Todos corresponden a principios de integraci&oacute;n continua.";
 answers[18] = choices[18][1];
 units[18] = "92";
 comments[18] = "Id Pregunta: 698. INTEGRACION CONTINUA";
 preguntaids[18] = 698


//  Id pregunta: 372 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[19]= new Array();
 choices[19][0] = "El Parlamento y el Consejo.";
 choices[19][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[19][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[19][3] = "La Comisi&oacute;n y el Consejo.";
 answers[19] = choices[19][2];
 units[19] = "5";
 comments[19] = "Id Pregunta: 372. UNION EUROPEA";
 preguntaids[19] = 372


//  Id pregunta: 196 Año de creación de pregunta: 2016
 questions[20]= "21)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[20]= new Array();
 choices[20][0] = "Al Presidente del Gobierno.";
 choices[20][1] = "A las Cortes Generales";
 choices[20][2] = "A los electores.";
 choices[20][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[20] = choices[20][3];
 units[20] = "1";
 comments[20] = "Id Pregunta: 196. CONSTITUCION1978";
 preguntaids[20] = 196


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[21]= new Array();
 choices[21][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[21][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[21][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[21][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[21] = choices[21][0];
 units[21] = "26";
 comments[21] = "Id Pregunta: 0. AGE A1 2015";
 preguntaids[21] = 0


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[22]= new Array();
 choices[22][0] = "Anual";
 choices[22][1] = "Mensual";
 choices[22][2] = "Semestral";
 choices[22][3] = "Trimestral";
 answers[22] = choices[22][3];
 units[22] = "15";
 comments[22] = "Id Pregunta: 119. ";
 preguntaids[22] = 119


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[23]= "24)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[23]= new Array();
 choices[23][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[23][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[23][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[23][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[23] = choices[23][2];
 units[23] = "83";
 comments[23] = "Id Pregunta: 56. AGE A1 2015";
 preguntaids[23] = 56


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[24]= "25)  Son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[24]= new Array();
 choices[24][0] = "Tranparencia, Innovaci&oacute;n, Unidad y visi&oacute;n integral y Orientaci&oacute;n al usuario del servicio";
 choices[24][1] = "Tranparencia, Colaboraci&oacute;n y alianzas, Orientaci&oacute;n al usuario del servicio y Reutilizaci&oacute;n";
 choices[24][2] = "Reutilizaci&oacute;n, Seguridad, Orientaci&oacute;n al usuario del servicio y Transparencia";
 choices[24][3] = "Ninguna de las anteriores";
 answers[24] = choices[24][0];
 units[24] = "28";
 comments[24] = "Id Pregunta: 737. Estrategia TIC";
 preguntaids[24] = 737


//  Id pregunta: 571 Año de creación de pregunta: 2016
 questions[25]= "26)  El sector Servicios NO incluye:";
 choices[25]= new Array();
 choices[25][0] = "El Comercio";
 choices[25][1] = "Los Transportes";
 choices[25][2] = "La Energ&iacute;a";
 choices[25][3] = "Las Comunicaciones";
 answers[25] = choices[25][2];
 units[25] = "12";
 comments[25] = "Id Pregunta: 571. Modelo econ&oacute;mico";
 preguntaids[25] = 571


//  Id pregunta: 672 Año de creación de pregunta: 2016
 questions[26]= "27)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[26]= new Array();
 choices[26][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[26][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[26][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[26][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[26] = choices[26][1];
 units[26] = "7";
 comments[26] = "Id Pregunta: 672. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[26] = 672


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[27]= "28)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[27]= new Array();
 choices[27][0] = "apud acta";
 choices[27][1] = "presencialmente";
 choices[27][2] = "electr&oacute;nicamente";
 choices[27][3] = "todas son correctas";
 answers[27] = choices[27][3];
 units[27] = "7";
 comments[27] = "Id Pregunta: 538. LEY 39/2015";
 preguntaids[27] = 538


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


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[29]= "30)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[29]= new Array();
 choices[29][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[29][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[29][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[29][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[29] = choices[29][1];
 units[29] = "58";
 comments[29] = "Id Pregunta: 643. Junta de Extremadura A1 2015";
 preguntaids[29] = 643


//  Id pregunta: 38 Año de creación de pregunta: 2016
 questions[30]= "31)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[30]= new Array();
 choices[30][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[30][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[30][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[30][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[30] = choices[30][3];
 units[30] = "62";
 comments[30] = "Id Pregunta: 38. AGE A1 2015";
 preguntaids[30] = 38


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[31]= "32)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[31]= new Array();
 choices[31][0] = "Ley org&aacute;nica.";
 choices[31][1] = "Ley ordinaria.";
 choices[31][2] = "Ley de bases.";
 choices[31][3] = "Ley marco.";
 answers[31] = choices[31][0];
 units[31] = "1";
 comments[31] = "Id Pregunta: 271. CONSTITUCION1978";
 preguntaids[31] = 271


//  Id pregunta: 411 Año de creación de pregunta: 2016
 questions[32]= "33)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[32]= new Array();
 choices[32][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[32][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[32][2] = "Ninguna es correcta.";
 choices[32][3] = "A y B son correctas.";
 answers[32] = choices[32][1];
 units[32] = "14";
 comments[32] = "Id Pregunta: 411. POLITICAS DE IGUALDAD";
 preguntaids[32] = 411


//  Id pregunta: 664 Año de creación de pregunta: 2016
 questions[33]= "34)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[33]= new Array();
 choices[33][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[33][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[33][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[33][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que hayan sido elaborado por &eacute;ste.";
 answers[33] = choices[33][1];
 units[33] = "7";
 comments[33] = "Id Pregunta: 664. Art&iacute;culo 53 de la Ley 39/2015";
 preguntaids[33] = 664


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[34]= "35)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[34]= new Array();
 choices[34][0] = "Ejecuci&oacute;n";
 choices[34][1] = "Adjudicaci&oacute;n";
 choices[34][2] = "Licitaci&oacute;n";
 choices[34][3] = "Formalizaci&oacute;n";
 answers[34] = choices[34][3];
 units[34] = "37";
 comments[34] = "Id Pregunta: 69. AGE A1 2015";
 preguntaids[34] = 69


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[35]= "36)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[35]= new Array();
 choices[35][0] = "la poblaci&oacute;n del territorio";
 choices[35][1] = "el volumen de gesti&oacute;n";
 choices[35][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[35][3] = "todas son correctas";
 answers[35] = choices[35][3];
 units[35] = "4, 7, 8, 9";
 comments[35] = "Id Pregunta: 816. Ley 40/2015";
 preguntaids[35] = 816


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[36]= "37)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[36]= new Array();
 choices[36][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[36][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[36][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[36][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[36] = choices[36][2];
 units[36] = "8";
 comments[36] = "Id Pregunta: 143. Ley 39/2015, Art&iacute;culo 122";
 preguntaids[36] = 143


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[37]= "38)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[37]= new Array();
 choices[37][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[37][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[37][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[37][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[37] = choices[37][3];
 units[37] = "57";
 comments[37] = "Id Pregunta: 640. Junta de Extremadura A1 2015";
 preguntaids[37] = 640


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[38]= "39)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[38]= new Array();
 choices[38][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[38][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[38][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[38][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[38] = choices[38][1];
 units[38] = "63";
 comments[38] = "Id Pregunta: 33. AGE A1 2015";
 preguntaids[38] = 33


//  Id pregunta: 566 Año de creación de pregunta: 2016
 questions[39]= "40)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[39]= new Array();
 choices[39][0] = "Los ocupados y los parados activos";
 choices[39][1] = "S&oacute;lo los ocupados";
 choices[39][2] = "Los ocupados y los inactivos";
 choices[39][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[39] = choices[39][0];
 units[39] = "12";
 comments[39] = "Id Pregunta: 566. Modelo econ&oacute;mico";
 preguntaids[39] = 566


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[40]= "41)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[40]= new Array();
 choices[40][0] = "Subsecretario";
 choices[40][1] = "Subdirector general";
 choices[40][2] = "Secretario de Estado";
 choices[40][3] = "ninguna es correcta";
 answers[40] = choices[40][1];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 792. Ley 40/2015";
 preguntaids[40] = 792


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[41]= new Array();
 choices[41][0] = "Indirecta.";
 choices[41][1] = "Directa.";
 choices[41][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[41][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[41] = choices[41][1];
 units[41] = "14";
 comments[41] = "Id Pregunta: 392. POLITICAS DE IGUALDAD";
 preguntaids[41] = 392


//  Id pregunta: 330 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[42]= new Array();
 choices[42][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[42][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[42][2] = "Todas son correctas.";
 choices[42][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[42] = choices[42][2];
 units[42] = "5";
 comments[42] = "Id Pregunta: 330. UNION EUROPEA";
 preguntaids[42] = 330


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[43]= "44)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[43]= new Array();
 choices[43][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[43][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[43][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[43][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[43] = choices[43][2];
 units[43] = "14";
 comments[43] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";
 preguntaids[43] = 391


//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[44]= "45)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[44]= new Array();
 choices[44][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[44][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[44][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[44][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[44] = choices[44][2];
 units[44] = "43";
 comments[44] = "Id Pregunta: 436. SERVICIOS COMUNES";
 preguntaids[44] = 436


//  Id pregunta: 674 Año de creación de pregunta: 2016
 questions[45]= "46)  En cuanto a la Historia Cl&iacute;nica Digital del Sistema Nacional de Salud, se&ntilde;ale cual de las siguientes afirmaciones es Incorrecta:";
 choices[45]= new Array();
 choices[45][0] = "Se ha implementado por mandato legal, tanto por la Ley 16/2003 de cohesi&oacute;n y calidad del Sistema Nacional de Salud, como por la Ley 41/2002 de Autonom&iacute;a del Paciente.";
 choices[45][1] = "Permite que los profesionales sanitarios puedan acceder a los datos de salud del paciente, cuando este se encuentre desplazado fuera de su Comunidad Aut&oacute;noma de origen y requiera asistencia sanitaria.";
 choices[45][2] = "De acuerdo a su dise&ntilde;o funcional, permite acceder a la totalidad de los contenidos existentes en la Historia Cl&iacute;nica Electr&oacute;nica de las Comunidades Aut&oacute;nomas.";
 choices[45][3] = "Gracias a ella, de acuerdo al informe CORA de Febrero de 2016, ya son 25,5 millones de ciudadanos los que disponen de informes cl&iacute;nicos en el Sstema Nacional de Salud.";
 answers[45] = choices[45][2];
 units[45] = "47";
 comments[45] = "Id Pregunta: 674. Historia Cl&iacute;nica Digital";
 preguntaids[45] = 674


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[46]= new Array();
 choices[46][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[46][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[46][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[46][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[46] = choices[46][1];
 units[46] = "23";
 comments[46] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";
 preguntaids[46] = 745


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[47]= "48)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[47]= new Array();
 choices[47][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[47][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[47][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[47][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[47] = choices[47][1];
 units[47] = "14";
 comments[47] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";
 preguntaids[47] = 412


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[48]= "49)  La recusaci&oacute;n pueden promoverla...";
 choices[48]= new Array();
 choices[48][0] = "Cualquier &oacute;rgano";
 choices[48][1] = "El interesado";
 choices[48][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[48][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[48] = choices[48][0];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 828. Ley 40/2015";
 preguntaids[48] = 828


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[49]= "50)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[49]= new Array();
 choices[49][0] = "las previsiones de la presente Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[49][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la presente Ley";
 choices[49][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[49][3] = "exclusivamente por las previsiones de la presente Ley";
 answers[49] = choices[49][1];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 768. Ley 40/2015";
 preguntaids[49] = 768


//  Id pregunta: 827 Año de creación de pregunta: 2016
 questions[50]= "51)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[50]= new Array();
 choices[50][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[50][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[50][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[50][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[50] = choices[50][1];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 827. Ley 40/2015";
 preguntaids[50] = 827


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[51]= "52)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[51]= new Array();
 choices[51][0] = "Cifrado de las comunicaciones";
 choices[51][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[51][2] = "Registro de los accesos";
 choices[51][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[51] = choices[51][1];
 units[51] = "35";
 comments[51] = "Id Pregunta: 51. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";
 preguntaids[51] = 51


//  Id pregunta: 451 Año de creación de pregunta: 2016
 questions[52]= "53)  El cr&eacute;dito presupuestario es...";
 choices[52]= new Array();
 choices[52][0] = "El sujeto que realiza el gasto";
 choices[52][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[52][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[52][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[52] = choices[52][2];
 units[52] = "10";
 comments[52] = "Id Pregunta: 451. PRESUPUESTOS GENERALES";
 preguntaids[52] = 451


//  Id pregunta: 72 Año de creación de pregunta: 2016
 questions[53]= "54)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[53]= new Array();
 choices[53][0] = "OASIS ha definido una notaci&oacute;n gr&aacute;fica est&aacute;ndar para WS-BPEL.";
 choices[53][1] = "BPEL4People es una extensi&oacute;n sobre WS-BPEL realizada para dar cobertura a escenarios que involucran interacci&oacute;n de personas con procesos de negocio.";
 choices[53][2] = "WS-BPEL es un lenguaje dise&ntilde;ado para el control distribuido de la invocaci&oacute;n de diferentes servicios Web que modelan un proceso de negocio.";
 choices[53][3] = "XPDL es una especificaci&oacute;n de lenguaje de definici&oacute;n de procesos creada por OASIS.";
 answers[53] = choices[53][1];
 units[53] = "86";
 comments[53] = "Id Pregunta: 72. AGE A1 2015";
 preguntaids[53] = 72


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[54]= "55)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[54]= new Array();
 choices[54][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[54][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[54][2] = "a y b son correctas";
 choices[54][3] = "a y b son incorrectas";
 answers[54] = choices[54][0];
 units[54] = "7";
 comments[54] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";
 preguntaids[54] = 153


//  Id pregunta: 275 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[55]= new Array();
 choices[55][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[55][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[55][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[55][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[55] = choices[55][2];
 units[55] = "22";
 comments[55] = "Id Pregunta: 275. LEY DE TRANSPARENCIA";
 preguntaids[55] = 275


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[56]= new Array();
 choices[56][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[56][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[56][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[56][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[56] = choices[56][1];
 units[56] = "1";
 comments[56] = "Id Pregunta: 175. CONSTITUCION1978";
 preguntaids[56] = 175


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[57]= new Array();
 choices[57][0] = "verbalmente";
 choices[57][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[57][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[57][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[57] = choices[57][2];
 units[57] = "7";
 comments[57] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";
 preguntaids[57] = 159


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[58]= "59)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[58]= new Array();
 choices[58][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[58][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[58][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[58][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[58] = choices[58][0];
 units[58] = "101";
 comments[58] = "Id Pregunta: 649. Junta de Extremadura A1 2015";
 preguntaids[58] = 649


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[59]= "60)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[59]= new Array();
 choices[59][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[59][1] = "Autorizar indultos generales.";
 choices[59][2] = "Sancionar las leyes.";
 choices[59][3] = "Promulgar las leyes.";
 answers[59] = choices[59][1];
 units[59] = "1";
 comments[59] = "Id Pregunta: 185. CONSTITUCION1978";
 preguntaids[59] = 185


//  Id pregunta: 57 Año de creación de pregunta: 2016
 questions[60]= "61)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[60]= new Array();
 choices[60][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[60][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[60][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[60][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[60] = choices[60][3];
 units[60] = "101";
 comments[60] = "Id Pregunta: 57. AGE A1 2015";
 preguntaids[60] = 57


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[61]= "62)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[61]= new Array();
 choices[61][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[61][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[61][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[61][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[61] = choices[61][2];
 units[61] = "7";
 comments[61] = "Id Pregunta: 529. LEY 39/2015";
 preguntaids[61] = 529


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[62]= "63)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[62]= new Array();
 choices[62][0] = "Interoperabilidad";
 choices[62][1] = "Integridad";
 choices[62][2] = "Capital humano";
 choices[62][3] = "Trazabilidad";
 answers[62] = choices[62][2];
 units[62] = "19";
 comments[62] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";
 preguntaids[62] = 166


//  Id pregunta: 340 Año de creación de pregunta: 2016
 questions[63]= "64)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[63]= new Array();
 choices[63][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[63][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[63][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[63][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[63] = choices[63][2];
 units[63] = "5";
 comments[63] = "Id Pregunta: 340. UNION EUROPEA";
 preguntaids[63] = 340


//  Id pregunta: 858 Año de creación de pregunta: 2016
 questions[64]= "65)  Respecto de la imagen institucional de los sitios web p&uacute;blicos:";
 choices[64]= new Array();
 choices[64][0] = "La utilizaci&oacute;n de s&iacute;mbolos de imagen o logotipos propios ser&aacute; comunicada al Ministerio de Energ&iacute;a, Turismo y Agenda Digital  para facilitar el cumplimiento de la prohibici&oacute;n legal de registrar signos que los reproduzcan o imiten.";
 choices[64][1] = "Los s&iacute;mbolos y logotipos propios podr&aacute;n ser registrados como marca en el caso de que vayan a ser utilizados en el tr&aacute;fico econ&oacute;mico.";
 choices[64][2] = "Los documentos anexos alojados en p&aacute;ginas webs, que puedan ser susceptibles de ser considerados material de papeler&iacute;a, utilizar&aacute;n el logotipo propio.";
 choices[64][3] = "De acuerdo con el Real Decreto 1565/1999, con car&aacute;cter excepcional, y siempre que se acrediten razones debidamente justificadas, el Ministro de Hacienda y Funci&oacute;n P&uacute;blica y el titular del correspondiente Ministerio de adscripci&oacute;n, vinculaci&oacute;n o dependencia podr&aacute;n autorizar la utilizaci&oacute;n por determinados &oacute;rganos, Organismos aut&oacute;nomos y Servicios Comunes o Entidades Gestoras de la Seguridad Social de s&iacute;mbolos de imagen o logotipos propios junto a los s&iacute;mbolos establecidos.";
 answers[64] = choices[64][1];
 units[64] = "125";
 comments[64] = "Id Pregunta: 858. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[64] = 858


//  Id pregunta: 478 Año de creación de pregunta: 2016
 questions[65]= "66)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[65]= new Array();
 choices[65][0] = "Al Gobierno.";
 choices[65][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[65][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[65][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[65] = choices[65][2];
 units[65] = "10";
 comments[65] = "Id Pregunta: 478. PRESUPUESTOS GENERALES";
 preguntaids[65] = 478


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[66]= new Array();
 choices[66][0] = "El Consejo Europeo.";
 choices[66][1] = "El Parlamento Europeo.";
 choices[66][2] = "El Consejo.";
 choices[66][3] = "La Comisi&oacute;n.";
 answers[66] = choices[66][3];
 units[66] = "5";
 comments[66] = "Id Pregunta: 361. UNION EUROPEA";
 preguntaids[66] = 361


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Qu&eacute; es la integraci&oacute;n continua?";
 choices[67]= new Array();
 choices[67][0] = "Una pr&aacute;ctica recogida en la metodolog&iacute;a M&eacute;trica V3.";
 choices[67][1] = "Un modelo inform&aacute;tico que consiste en hacer integraciones autom&aacute;ticas de un proyecto lo m&aacute;s a menudo posible para as&iacute; poder detectar fallos cuanto antes.";
 choices[67][2] = "Una metodolog&iacute;a &aacute;gil inspirada en XP y FDD encaminada a realizar un desarrollo hol&iacute;stico en todo el proceso de desarrollo de un sistema de informaci&oacute;n.";
 choices[67][3] = "Ninguna de las anteriores.";
 answers[67] = choices[67][1];
 units[67] = "92";
 comments[67] = "Id Pregunta: 701. INTEGRACION CONTINUA";
 preguntaids[67] = 701


//  Id pregunta: 22 Año de creación de pregunta: 2016
 questions[68]= "69)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[68]= new Array();
 choices[68][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[68][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[68][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[68][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[68] = choices[68][1];
 units[68] = "26";
 comments[68] = "Id Pregunta: 22. AGE A1 2015";
 preguntaids[68] = 22


//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[69]= "70)  JNDI se usa para el acceso a:";
 choices[69]= new Array();
 choices[69][0] = "Datos de ficheros";
 choices[69][1] = "Sistemas gestores de bases de datos";
 choices[69][2] = "Directorios de nombres";
 choices[69][3] = "Colas de mensajer&iacute;a";
 answers[69] = choices[69][2];
 units[69] = "64";
 comments[69] = "Id Pregunta: 13. AGE A1 2015";
 preguntaids[69] = 13


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[70]= "71)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[70]= new Array();
 choices[70][0] = "Con el a&ntilde;o anterior.";
 choices[70][1] = "Con los tres a&ntilde;os anteriores.";
 choices[70][2] = "Con el a&ntilde;o natural.";
 choices[70][3] = "Con los dos a&ntilde;os anteriores.";
 answers[70] = choices[70][2];
 units[70] = "10";
 comments[70] = "Id Pregunta: 468. PRESUPUESTOS GENERALES";
 preguntaids[70] = 468


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[71]= new Array();
 choices[71][0] = "Cinco.";
 choices[71][1] = "Dos.";
 choices[71][2] = "Cuatro.";
 choices[71][3] = "Siete.";
 answers[71] = choices[71][0];
 units[71] = "1";
 comments[71] = "Id Pregunta: 213. CONSTITUCION1978";
 preguntaids[71] = 213


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[72]= "73)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[72]= new Array();
 choices[72][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[72][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[72][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[72][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[72] = choices[72][2];
 units[72] = "50";
 comments[72] = "Id Pregunta: 633. Junta de Extremadura A1 2015";
 preguntaids[72] = 633


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[73]= "74)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[73]= new Array();
 choices[73][0] = "Integrar la estrategia TIC con la de negocio";
 choices[73][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[73][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[73][3] = "Todas las anteriores";
 answers[73] = choices[73][3];
 units[73] = "26";
 comments[73] = "Id Pregunta: 549. Gobernanza TIC";
 preguntaids[73] = 549


//  Id pregunta: 857 Año de creación de pregunta: 2016
 questions[74]= "75)  Sobre el multiling&uuml;ismo en los sitios web p&uacute;blicos, se&ntilde;ale la respuesta falsa:";
 choices[74]= new Array();
 choices[74][0] = "Los responsables de contenidos y responsables t&eacute;cnicos de portales de cualquier organismo de la Administraci&oacute;n General del Estado deben tener en cuenta que Espa&ntilde;a es un pa&iacute;s multiling&uuml;e y que deben velar para que el idioma no constituya una barrera al acceso a los contenidos de las webs p&uacute;blicas.";
 choices[74][1] = "Cada Comunidad Aut&oacute;noma debe encargarse de la traducci&oacute;n de los contenidos de sus p&aacute;ginas web para facilitar y acercar los servicios prestados por la Administraci&oacute;n a los ciudadanos y empresas.";
 choices[74][2] = "Como criterio general, todos los contenidos de los portales ser&aacute;n accesibles, adem&aacute;s de en castellano, lengua espa&ntilde;ola oficial del Estado, en las siguientes lenguas idiomas cooficiales de las respectivas Comunidades Aut&oacute;nomas de Espa&ntilde;a: catal&aacute;n, euskera, gallego y valenciano.";
 choices[74][3] = "Para facilitar la traducci&oacute;n a las lenguas cooficiales y al ingl&eacute;s, se est&aacute; preparando una Plataforma de traducci&oacute;n autom&aacute;tica com&uacute;n de la AGE: PLATA que estar&aacute; disponible con gran calidad al catal&aacute;n, gallego y con necesidad de revisi&oacute;n asistida en el caso del euskera y el ingl&eacute;s.";
 answers[74] = choices[74][1];
 units[74] = "125";
 comments[74] = "Id Pregunta: 857. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[74] = 857


