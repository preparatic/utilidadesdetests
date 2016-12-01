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

//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[0]= "1)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[0]= new Array();
 choices[0][0] = "La Ley General Tributaria.";
 choices[0][1] = "La Ley Presupuestaria.";
 choices[0][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[0][3] = "Ninguna de las respuestas es correcta.";
 answers[0] = choices[0][0];
 units[0] = "10";
 comments[0] = "Id Pregunta: 488. PRESUPUESTOS GENERALES";
 preguntaids[0] = 488


//  Id pregunta: 225 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[1]= new Array();
 choices[1][0] = "las Cortes generales.";
 choices[1][1] = "los partidos pol&iacute;ticos.";
 choices[1][2] = "los sindicatos.";
 choices[1][3] = "las Comunidades Aut&oacute;nomas.";
 answers[1] = choices[1][1];
 units[1] = "1";
 comments[1] = "Id Pregunta: 225. CONSTITUCION1978";
 preguntaids[1] = 225


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[2]= "3)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[2]= new Array();
 choices[2][0] = "Conformidad";
 choices[2][1] = "Responsabilidad";
 choices[2][2] = "Adquisici&oacute;n";
 choices[2][3] = "Desempe&ntilde;o";
 answers[2] = choices[2][0];
 units[2] = "26";
 comments[2] = "Id Pregunta: 548. Gobernanza TIC";
 preguntaids[2] = 548


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[3]= "4)  Componen la Comisi&oacute;n Europea:";
 choices[3]= new Array();
 choices[3][0] = "Un Comisario por cada Estado miembro.";
 choices[3][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[3][2] = "Dos Comisarios por cada Estado miembro.";
 choices[3][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[3] = choices[3][0];
 units[3] = "5";
 comments[3] = "Id Pregunta: 306. UNION EUROPEA";
 preguntaids[3] = 306


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[4]= "5)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[4]= new Array();
 choices[4][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[4][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[4][2] = "el sector p&uacute;blico institucional";
 choices[4][3] = "el sector privado corporativo";
 answers[4] = choices[4][3];
 units[4] = "7";
 comments[4] = "Id Pregunta: 515. LEY 39/2015";
 preguntaids[4] = 515


//  Id pregunta: 367 Año de creación de pregunta: 2016
 questions[5]= "6)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[5]= new Array();
 choices[5][0] = "Presentar la moci&oacute;n de censura.";
 choices[5][1] = "Presidir las sesiones del Parlamento.";
 choices[5][2] = "Organizar la Secretar&iacute;a General.";
 choices[5][3] = "Preparar las actividades de las Comisiones.";
 answers[5] = choices[5][1];
 units[5] = "5";
 comments[5] = "Id Pregunta: 367. UNION EUROPEA";
 preguntaids[5] = 367


//  Id pregunta: 846 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[6]= new Array();
 choices[6][0] = "Conferencia de Presidentes.";
 choices[6][1] = "Convenios de colaboraci&oacute;n.";
 choices[6][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[6][3] = "Conferencias Sectoriales.";
 answers[6] = choices[6][0];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 846. Ley 40/2015";
 preguntaids[6] = 846


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[7]= "8)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[7]= new Array();
 choices[7][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[7][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[7][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[7][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[7] = choices[7][0];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 800. Ley 40/2015";
 preguntaids[7] = 800


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[8]= new Array();
 choices[8][0] = "El Ministro de Econom&iacute;a.";
 choices[8][1] = "El Gobierno.";
 choices[8][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[8][3] = "El Presidente del Gobierno.";
 answers[8] = choices[8][1];
 units[8] = "10";
 comments[8] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";
 preguntaids[8] = 472


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[9]= new Array();
 choices[9][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[9][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[9][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[9][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[9] = choices[9][2];
 units[9] = "10";
 comments[9] = "Id Pregunta: 486. PRESUPUESTOS GENERALES";
 preguntaids[9] = 486


//  Id pregunta: 584 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[10]= new Array();
 choices[10][0] = "El 5 de Octubre de 2015";
 choices[10][1] = "El 15 de Octubre de 2015";
 choices[10][2] = "El 15 de Septiembre de 2015";
 choices[10][3] = "El 2 de Octubre de 2015";
 answers[10] = choices[10][2];
 units[10] = "19";
 comments[10] = "Id Pregunta: 584. Estrategia TIC";
 preguntaids[10] = 584


//  Id pregunta: 496 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[11]= new Array();
 choices[11][0] = "Por reembolso de pr&eacute;stamos.";
 choices[11][1] = "Por la venta de bienes.";
 choices[11][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[11][3] = "Por prestaci&oacute;n de servicios.";
 answers[11] = choices[11][2];
 units[11] = "10";
 comments[11] = "Id Pregunta: 496. PRESUPUESTOS GENERALES";
 preguntaids[11] = 496


//  Id pregunta: 498 Año de creación de pregunta: 2016
 questions[12]= "13)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[12]= new Array();
 choices[12][0] = "Las respuestas a) y b) son correctas.";
 choices[12][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[12][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[12][3] = "Las respuestas a) y b) no son correctas.";
 answers[12] = choices[12][0];
 units[12] = "10";
 comments[12] = "Id Pregunta: 498. PRESUPUESTOS GENERALES";
 preguntaids[12] = 498


//  Id pregunta: 388 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[13]= new Array();
 choices[13][0] = "Indirecta.";
 choices[13][1] = "Directa.";
 choices[13][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[13][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[13] = choices[13][1];
 units[13] = "14";
 comments[13] = "Id Pregunta: 388. POLITICAS DE IGUALDAD";
 preguntaids[13] = 388


//  Id pregunta: 653 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Qu&eacute; propiedades ofrecen las conexiones VPN que usan protocolos como PPTP, L2TP/IPsec y SSTP?";
 choices[14]= new Array();
 choices[14][0] = "Encapsulaci&oacute;n y autenticaci&oacute;n.";
 choices[14][1] = "Encapsulaci&oacute;n y cifrado de datos.";
 choices[14][2] = "Autenticaci&oacute;n y cifrado de datos.";
 choices[14][3] = "Encapsulaci&oacute;n, autenticaci&oacute;n y cifrado de datos.";
 answers[14] = choices[14][3];
 units[14] = "120";
 comments[14] = "Id Pregunta: 653. Junta de Extremadura A1 2015";
 preguntaids[14] = 653


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[15]= "16)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[15]= new Array();
 choices[15][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[15][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[15][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[15][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[15] = choices[15][2];
 units[15] = "26";
 comments[15] = "Id Pregunta: 1. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[15] = 1


//  Id pregunta: 132 Año de creación de pregunta: 2016
 questions[16]= "17)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[16]= new Array();
 choices[16][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[16][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[16][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[16][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[16] = choices[16][3];
 units[16] = "12";
 comments[16] = "Id Pregunta: 132. Leyes modelo econ&oacute;mico";
 preguntaids[16] = 132


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[17]= "18)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[17]= new Array();
 choices[17][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[17][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[17][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[17][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[17] = choices[17][2];
 units[17] = "45";
 comments[17] = "Id Pregunta: 601. Junta de Extremadura A1 2015";
 preguntaids[17] = 601


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[18]= "19)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[18]= new Array();
 choices[18][0] = "los Subsecretarios y Secretarios generales";
 choices[18][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[18][2] = "los Secretarios de Estado";
 choices[18][3] = "los Subdirectores generales";
 answers[18] = choices[18][2];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 789. Ley 40/2015";
 preguntaids[18] = 789


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[19]= "20)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[19]= new Array();
 choices[19][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[19][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[19][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[19][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[19] = choices[19][3];
 units[19] = "77";
 comments[19] = "Id Pregunta: 48. AGE A1 2015";
 preguntaids[19] = 48


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[20]= "21)  Las Administraciones P&uacute;blicas:";
 choices[20]= new Array();
 choices[20][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[20][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[20][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[20][3] = "todas son correctas";
 answers[20] = choices[20][1];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 772. Ley 40/2015";
 preguntaids[20] = 772


//  Id pregunta: 402 Año de creación de pregunta: 2016
 questions[21]= "22)  El principio de igualdad de trato y oportunidades entre mujeres y hombres tiene car&aacute;cter:";
 choices[21]= new Array();
 choices[21][0] = "Parcial.";
 choices[21][1] = "Sectorial.";
 choices[21][2] = "Tranversal.";
 choices[21][3] = "Vertical.";
 answers[21] = choices[21][2];
 units[21] = "14";
 comments[21] = "Id Pregunta: 402. POLITICAS DE IGUALDAD";
 preguntaids[21] = 402


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[22]= "23)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[22]= new Array();
 choices[22][0] = "La Ley Org&aacute;nica 2/2011";
 choices[22][1] = "La Ley Org&aacute;nica 2/2012";
 choices[22][2] = "La Ley Org&aacute;nica 3/2012";
 choices[22][3] = "La Ley Org&aacute;nica 2/2002";
 answers[22] = choices[22][1];
 units[22] = "12";
 comments[22] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";
 preguntaids[22] = 138


//  Id pregunta: 843 Año de creación de pregunta: 2016
 questions[23]= "24)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[23]= new Array();
 choices[23][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[23][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[23][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[23][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[23] = choices[23][2];
 units[23] = "4, 7, 8, 9";
 comments[23] = "Id Pregunta: 843. Ley 40/2015";
 preguntaids[23] = 843


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[24]= new Array();
 choices[24][0] = "Diagrama de clases";
 choices[24][1] = "Diagrama de componentes";
 choices[24][2] = "Diagrama de estructura";
 choices[24][3] = "Diagrama de paquetes";
 answers[24] = choices[24][0];
 units[24] = "91";
 comments[24] = "Id Pregunta: 88. AGE A1 2015";
 preguntaids[24] = 88


//  Id pregunta: 672 Año de creación de pregunta: 2016
 questions[25]= "26)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[25]= new Array();
 choices[25][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[25][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[25][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[25][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[25] = choices[25][1];
 units[25] = "7";
 comments[25] = "Id Pregunta: 672. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[25] = 672


//  Id pregunta: 660 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[26]= new Array();
 choices[26][0] = "NoSQL";
 choices[26][1] = "Sistemas de baja latencia";
 choices[26][2] = "MapReduce";
 choices[26][3] = "Business Intelligence";
 answers[26] = choices[26][1];
 units[26] = "73";
 comments[26] = "Id Pregunta: 660. ";
 preguntaids[26] = 660


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[27]= "28)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[27]= new Array();
 choices[27][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[27][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[27][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[27][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[27] = choices[27][2];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 770. Ley 40/2015";
 preguntaids[27] = 770


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[28]= "29)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[28]= new Array();
 choices[28][0] = "los Secretarios de Estado";
 choices[28][1] = "los Ministros";
 choices[28][2] = "los Subsecretarios";
 choices[28][3] = "los Secretarios generales";
 answers[28] = choices[28][2];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 810. Ley 40/2015";
 preguntaids[28] = 810


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[29]= "30)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[29]= new Array();
 choices[29][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[29][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[29][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[29][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[29] = choices[29][2];
 units[29] = "43";
 comments[29] = "Id Pregunta: 440. SERVICIOS COMUNES";
 preguntaids[29] = 440


//  Id pregunta: 364 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[30]= new Array();
 choices[30][0] = "El 1 de junio de 1999.";
 choices[30][1] = "El 1 de mayo de 1999.";
 choices[30][2] = "El 1 de abril de 1999.";
 choices[30][3] = "El 1 de marzo de 1999.";
 answers[30] = choices[30][1];
 units[30] = "5";
 comments[30] = "Id Pregunta: 364. UNION EUROPEA";
 preguntaids[30] = 364


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[31]= new Array();
 choices[31][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[31][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[31][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[31][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[31] = choices[31][0];
 units[31] = "1";
 comments[31] = "Id Pregunta: 220. CONSTITUCION1978";
 preguntaids[31] = 220


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qu&eacute; es Java Web Start?";
 choices[32]= new Array();
 choices[32][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[32][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[32][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[32][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[32] = choices[32][3];
 units[32] = "64";
 comments[32] = "Id Pregunta: 35. AGE A1 2015";
 preguntaids[32] = 35


//  Id pregunta: 673 Año de creación de pregunta: 2016
 questions[33]= "34)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[33]= new Array();
 choices[33][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[33][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[33][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[33][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[33] = choices[33][0];
 units[33] = "7";
 comments[33] = "Id Pregunta: 673. T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[33] = 673


//  Id pregunta: 656 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[34]= new Array();
 choices[34][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[34][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[34][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[34][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[34] = choices[34][0];
 units[34] = "73";
 comments[34] = "Id Pregunta: 656. ";
 preguntaids[34] = 656


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[35]= "36)  Los Subdirectores generales:";
 choices[35]= new Array();
 choices[35][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[35][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[35][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[35][3] = "todas son correctas";
 answers[35] = choices[35][1];
 units[35] = "4, 7, 8, 9";
 comments[35] = "Id Pregunta: 811. Ley 40/2015";
 preguntaids[35] = 811


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[36]= new Array();
 choices[36][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[36][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[36][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[36][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[36] = choices[36][2];
 units[36] = "17";
 comments[36] = "Id Pregunta: 558. Mercado &Uacute;nico Digital";
 preguntaids[36] = 558


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[37]= "38)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[37]= new Array();
 choices[37][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[37][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[37][2] = "Ambas son correctas.";
 choices[37][3] = "A y B son incorrectas.";
 answers[37] = choices[37][2];
 units[37] = "14";
 comments[37] = "Id Pregunta: 401. POLITICAS DE IGUALDAD";
 preguntaids[37] = 401


//  Id pregunta: 451 Año de creación de pregunta: 2016
 questions[38]= "39)  El cr&eacute;dito presupuestario es...";
 choices[38]= new Array();
 choices[38][0] = "El sujeto que realiza el gasto";
 choices[38][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[38][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[38][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[38] = choices[38][2];
 units[38] = "10";
 comments[38] = "Id Pregunta: 451. PRESUPUESTOS GENERALES";
 preguntaids[38] = 451


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[39]= "40)  El recurso de alzada puede interponerse:";
 choices[39]= new Array();
 choices[39][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[39][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[39][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[39][3] = "Ante el Defensor del Pueblo";
 answers[39] = choices[39][1];
 units[39] = "8";
 comments[39] = "Id Pregunta: 141. Ley 39/2015, Art&iacute;culo 121";
 preguntaids[39] = 141


//  Id pregunta: 151 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[40]= new Array();
 choices[40][0] = "las personas jur&iacute;dicas ";
 choices[40][1] = "las entidades con personalidad jur&iacute;dica";
 choices[40][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[40][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[40] = choices[40][1];
 units[40] = "7";
 comments[40] = "Id Pregunta: 151. Ley 39/2015, Art&iacute;culo 14";
 preguntaids[40] = 151


//  Id pregunta: 742 Año de creación de pregunta: 2016
 questions[41]= "42)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[41]= new Array();
 choices[41][0] = "Proveer de manera compartida servicios comunes";
 choices[41][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[41][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[41][3] = "Transparencia";
 answers[41] = choices[41][1];
 units[41] = "28";
 comments[41] = "Id Pregunta: 742. Estrategia TIC";
 preguntaids[41] = 742


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[42]= new Array();
 choices[42][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[42][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[42][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[42][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[42] = choices[42][0];
 units[42] = "19";
 comments[42] = "Id Pregunta: 559. Agenda Digital";
 preguntaids[42] = 559


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[43]= "44)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[43]= new Array();
 choices[43][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[43][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[43][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[43][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[43] = choices[43][1];
 units[43] = "76";
 comments[43] = "Id Pregunta: 46. AGE A1 2015";
 preguntaids[43] = 46


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[44]= "45)  En el Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP el principio de transparencia:";
 choices[44]= new Array();
 choices[44][0] = "El seguimiento de la actividad de los funcionarios aumenta la eficacia de los servicios p&uacute;blicos.";
 choices[44][1] = "La transparencia facilita al ciudadano el acceso a los servicios p&uacute;blicos.";
 choices[44][2] = "Una continua monitorizaci&oacute;n de la actividad, junto a la evaluaci&oacute;n y difusi&oacute;n de resultados incrementa la satisfacci&oacute;n de los ciudadanos.";
 choices[44][3] = "El seguimiento y control de la actividad pol&iacute;tica disminuye las actividades ligadas a la corrupci&oacute;n.";
 answers[44] = choices[44][2];
 units[44] = "28";
 comments[44] = "Id Pregunta: 736. Estrategia TIC";
 preguntaids[44] = 736


//  Id pregunta: 664 Año de creación de pregunta: 2016
 questions[45]= "46)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[45]= new Array();
 choices[45][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[45][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[45][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[45][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que hayan sido elaborado por &eacute;ste.";
 answers[45] = choices[45][1];
 units[45] = "7";
 comments[45] = "Id Pregunta: 664. Art&iacute;culo 53 de la Ley 39/2015";
 preguntaids[45] = 664


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[46]= new Array();
 choices[46][0] = "El Parlamento y el Consejo.";
 choices[46][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[46][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[46][3] = "La Comisi&oacute;n y el Consejo.";
 answers[46] = choices[46][1];
 units[46] = "5";
 comments[46] = "Id Pregunta: 357. UNION EUROPEA";
 preguntaids[46] = 357


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[47]= "48)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[47]= new Array();
 choices[47][0] = "Lollipop";
 choices[47][1] = "Jelly Bean";
 choices[47][2] = "Marshmallow";
 choices[47][3] = "KitKat";
 answers[47] = choices[47][2];
 units[47] = "59";
 comments[47] = "Id Pregunta: 61. AGE A1 2015";
 preguntaids[47] = 61


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[48]= "49)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[48]= new Array();
 choices[48][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[48][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[48][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[48][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[48] = choices[48][1];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 845. Ley 40/2015";
 preguntaids[48] = 845


//  Id pregunta: 221 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[49]= new Array();
 choices[49][0] = "De los derechos y deberes fundamentales.";
 choices[49][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[49][2] = "Derechos y libertades.";
 choices[49][3] = "De la Corona.";
 answers[49] = choices[49][0];
 units[49] = "1";
 comments[49] = "Id Pregunta: 221. CONSTITUCION1978";
 preguntaids[49] = 221


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[50]= "51)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[50]= new Array();
 choices[50][0] = "ASF-AL (Apache License 2.0)";
 choices[50][1] = "EUPL (European Union Public License)";
 choices[50][2] = "LGPL (Lesser General Public License)";
 choices[50][3] = "MIT(MIT License)";
 answers[50] = choices[50][1];
 units[50] = "43";
 comments[50] = "Id Pregunta: 32. AGE A1 2015";
 preguntaids[50] = 32


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[51]= new Array();
 choices[51][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[51][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[51][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[51][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[51] = choices[51][0];
 units[51] = "19";
 comments[51] = "Id Pregunta: 589. Estrategia TIC";
 preguntaids[51] = 589


//  Id pregunta: 233 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[52]= new Array();
 choices[52][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[52][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[52][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[52][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[52] = choices[52][2];
 units[52] = "1";
 comments[52] = "Id Pregunta: 233. CONSTITUCION1978";
 preguntaids[52] = 233


//  Id pregunta: 330 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[53]= new Array();
 choices[53][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[53][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[53][2] = "Todas son correctas.";
 choices[53][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[53] = choices[53][2];
 units[53] = "5";
 comments[53] = "Id Pregunta: 330. UNION EUROPEA";
 preguntaids[53] = 330


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[54]= new Array();
 choices[54][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[54][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[54][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[54][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[54] = choices[54][0];
 units[54] = "1";
 comments[54] = "Id Pregunta: 199. CONSTITUCION1978";
 preguntaids[54] = 199


//  Id pregunta: 690 Año de creación de pregunta: 2016
 questions[55]= "56)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que deben cumplir los servicios cualificados de entrega electro&#769;nica certificada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[55]= new Array();
 choices[55][0] = "Ser prestados por uno o ma&#769;s prestadores cualificados de servicios de confianza";
 choices[55][1] = "Garantizar la identificacio&#769;n del destinatario antes de la entrega de los datos";
 choices[55][2] = "Indicar mediante un sello cualificado de tiempo electro&#769;nico la fecha y hora de envi&#769;o, recepcio&#769;n y eventual modificacio&#769;n de los datos";
 choices[55][3] = "Proteger el envi&#769;o y la recepcio&#769;n de datos por una firma electro&#769;nica cualificada o un sello electro&#769;nico cualificado de un prestador cualificado de servicios de confianza";
 answers[55] = choices[55][1];
 units[55] = "77";
 comments[55] = "Id Pregunta: 690. Art&iacute;culo 44 del Reglamento 910/2014";
 preguntaids[55] = 690


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
 preguntaids[56] = 125


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[57]= "58)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[57]= new Array();
 choices[57][0] = "B&aacute;sico";
 choices[57][1] = "Medio";
 choices[57][2] = "Alto";
 choices[57][3] = "A los niveles medio y alto";
 answers[57] = choices[57][2];
 units[57] = "35";
 comments[57] = "Id Pregunta: 62. AGE A1 2015";
 preguntaids[57] = 62


//  Id pregunta: 113 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[58]= new Array();
 choices[58][0] = "La Seguridad Social";
 choices[58][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[58][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[58][3] = "El Banco de Espa&ntilde;a";
 answers[58] = choices[58][3];
 units[58] = "15";
 comments[58] = "Id Pregunta: 113. ";
 preguntaids[58] = 113


//  Id pregunta: 830 Año de creación de pregunta: 2016
 questions[59]= "60)  La recusaci&oacute;n se plantear&aacute;...";
 choices[59]= new Array();
 choices[59][0] = "S&oacute;lo verbalmente";
 choices[59][1] = "S&oacute;lo por escrito";
 choices[59][2] = "Verbalmente o por escrito";
 choices[59][3] = "Verbalmente o por escrito siempre que es exprese la causa o causas en que se funda";
 answers[59] = choices[59][0];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 830. Ley 40/2015";
 preguntaids[59] = 830


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[60]= new Array();
 choices[60][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[60][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[60][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[60][3] = "Todas las respuestas son correctas.";
 answers[60] = choices[60][2];
 units[60] = "42";
 comments[60] = "Id Pregunta: 618. Junta de Extremadura A1 2015";
 preguntaids[60] = 618


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[61]= new Array();
 choices[61][0] = "Art. 25 LO, 3/2007.";
 choices[61][1] = "Art. 23 LO, 3/2007.";
 choices[61][2] = "Art. 14 LO, 3/2007.";
 choices[61][3] = "Ninguna es correcta, es el art. 13.";
 answers[61] = choices[61][0];
 units[61] = "14";
 comments[61] = "Id Pregunta: 416. POLITICAS DE IGUALDAD";
 preguntaids[61] = 416


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[62]= "63)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[62]= new Array();
 choices[62][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[62][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[62][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[62][3] = "todas son correctas";
 answers[62] = choices[62][1];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 778. Ley 40/2015";
 preguntaids[62] = 778


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[63]= "64)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[63]= new Array();
 choices[63][0] = "3 a&ntilde;os.";
 choices[63][1] = "5 a&ntilde;os.";
 choices[63][2] = "4 a&ntilde;os.";
 choices[63][3] = "6 a&ntilde;os.";
 answers[63] = choices[63][1];
 units[63] = "1";
 comments[63] = "Id Pregunta: 193. CONSTITUCION1978";
 preguntaids[63] = 193


//  Id pregunta: 623 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n el paradigma de Orientaci&oacute;n a Objetos, la herencia posibilita que:";
 choices[64]= new Array();
 choices[64][0] = "Cualquier cambio en los datos y operaciones contenidas dentro de una superclase es heredado inmediatamente por todas las subclases que se derivan de la superclase.";
 choices[64][1] = "Cualquier cambio en las operaciones y datos de la superclase no se refleja en todas las subclases.";
 choices[64][2] = "Cualquier cambio en una de las subclases que se heredan de la superclase se refleja en sus clases hermanas.";
 choices[64][3] = "En el paradigma de Orientaci&oacute;n a Objetos no existe la herencia.";
 answers[64] = choices[64][0];
 units[64] = "89";
 comments[64] = "Id Pregunta: 623. Junta de Extremadura A1 2015";
 preguntaids[64] = 623


//  Id pregunta: 563 Año de creación de pregunta: 2016
 questions[65]= "66)  El plan nacional de ciudades inteligentes...";
 choices[65]= new Array();
 choices[65][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[65][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[65][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[65][3] = "No existe";
 answers[65] = choices[65][1];
 units[65] = "19";
 comments[65] = "Id Pregunta: 563. Ciudades Inteligentes";
 preguntaids[65] = 563


//  Id pregunta: 782 Año de creación de pregunta: 2016
 questions[66]= "67)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento de las instrucciones u &oacute;rdenes de servicio:";
 choices[66]= new Array();
 choices[66][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[66][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[66][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[66][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[66] = choices[66][0];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 782. Ley 40/2015";
 preguntaids[66] = 782


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[67]= "68)  La Administraci&oacute;n General del Estado se organiza:";
 choices[67]= new Array();
 choices[67][0] = "en Ministerios";
 choices[67][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[67][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[67][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[67] = choices[67][1];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 802. Ley 40/2015";
 preguntaids[67] = 802


//  Id pregunta: 857 Año de creación de pregunta: 2016
 questions[68]= "69)  Sobre el multiling&uuml;ismo en los sitios web p&uacute;blicos, se&ntilde;ale la respuesta falsa:";
 choices[68]= new Array();
 choices[68][0] = "Los responsables de contenidos y responsables t&eacute;cnicos de portales de cualquier organismo de la Administraci&oacute;n General del Estado deben tener en cuenta que Espa&ntilde;a es un pa&iacute;s multiling&uuml;e y que deben velar para que el idioma no constituya una barrera al acceso a los contenidos de las webs p&uacute;blicas.";
 choices[68][1] = "Cada Comunidad Aut&oacute;noma debe encargarse de la traducci&oacute;n de los contenidos de sus p&aacute;ginas web para facilitar y acercar los servicios prestados por la Administraci&oacute;n a los ciudadanos y empresas.";
 choices[68][2] = "Como criterio general, todos los contenidos de los portales ser&aacute;n accesibles, adem&aacute;s de en castellano, lengua espa&ntilde;ola oficial del Estado, en las siguientes lenguas idiomas cooficiales de las respectivas Comunidades Aut&oacute;nomas de Espa&ntilde;a: catal&aacute;n, euskera, gallego y valenciano.";
 choices[68][3] = "Para facilitar la traducci&oacute;n a las lenguas cooficiales y al ingl&eacute;s, se est&aacute; preparando una Plataforma de traducci&oacute;n autom&aacute;tica com&uacute;n de la AGE: PLATA que estar&aacute; disponible con gran calidad al catal&aacute;n, gallego y con necesidad de revisi&oacute;n asistida en el caso del euskera y el ingl&eacute;s.";
 answers[68] = choices[68][1];
 units[68] = "125";
 comments[68] = "Id Pregunta: 857. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[68] = 857


//  Id pregunta: 87 Año de creación de pregunta: 2016
 questions[69]= "70)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[69]= new Array();
 choices[69][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[69][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[69][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[69][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[69] = choices[69][2];
 units[69] = "48";
 comments[69] = "Id Pregunta: 87. AGE A1 2015";
 preguntaids[69] = 87


//  Id pregunta: 479 Año de creación de pregunta: 2016
 questions[70]= "71)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[70]= new Array();
 choices[70][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[70][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[70][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[70][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[70] = choices[70][2];
 units[70] = "10";
 comments[70] = "Id Pregunta: 479. PRESUPUESTOS GENERALES";
 preguntaids[70] = 479


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[71]= new Array();
 choices[71][0] = "al menos por 50 Diputados.";
 choices[71][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[71][2] = "por la Mesa del Congreso de los Diputados.";
 choices[71][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[71] = choices[71][1];
 units[71] = "1";
 comments[71] = "Id Pregunta: 183. CONSTITUCION1978";
 preguntaids[71] = 183


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[72]= new Array();
 choices[72][0] = "En t&iacute;tulos-valores.";
 choices[72][1] = "Las respuestas a) y b) son correctas.";
 choices[72][2] = "Las respuestas a) y b) no son correctas.";
 choices[72][3] = "En cuenta.";
 answers[72] = choices[72][1];
 units[72] = "10";
 comments[72] = "Id Pregunta: 500. PRESUPUESTOS GENERALES";
 preguntaids[72] = 500


//  Id pregunta: 799 Año de creación de pregunta: 2016
 questions[73]= "74)  Los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[73]= new Array();
 choices[73][0] = "los &oacute;rganos administrativos";
 choices[73][1] = "las entidades dependientes";
 choices[73][2] = "las unidades administrativas";
 choices[73][3] = "los servicios comunes";
 answers[73] = choices[73][2];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 799. Ley 40/2015";
 preguntaids[73] = 799


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[74]= new Array();
 choices[74][0] = "Publicidad.";
 choices[74][1] = "Constituci&oacute;n.";
 choices[74][2] = "Legalidad.";
 choices[74][3] = "Creaci&oacute;n.";
 answers[74] = choices[74][0];
 units[74] = "1";
 comments[74] = "Id Pregunta: 215. CONSTITUCION1978";
 preguntaids[74] = 215


