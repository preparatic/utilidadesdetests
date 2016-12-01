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

//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[0]= "1)  Las Administraciones P&uacute;blicas:";
 choices[0]= new Array();
 choices[0][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[0][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[0][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[0][3] = "todas son correctas";
 answers[0] = choices[0][1];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 772. Ley 40/2015";
 preguntaids[0] = 772


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[1]= new Array();
 choices[1][0] = "Dos Cap&iacute;tulos.";
 choices[1][1] = "Tres Cap&iacute;tulos.";
 choices[1][2] = "Un Cap&iacute;tulo.";
 choices[1][3] = "Cuatro Cap&iacute;tulos.";
 answers[1] = choices[1][1];
 units[1] = "1";
 comments[1] = "Id Pregunta: 222. CONSTITUCION1978";
 preguntaids[1] = 222


//  Id pregunta: 374 Año de creación de pregunta: 2016
 questions[2]= "3)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[2]= new Array();
 choices[2][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[2][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[2][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[2][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[2] = choices[2][3];
 units[2] = "5";
 comments[2] = "Id Pregunta: 374. UNION EUROPEA";
 preguntaids[2] = 374


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[3]= new Array();
 choices[3][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[3][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[3][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[3][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[3] = choices[3][1];
 units[3] = "1";
 comments[3] = "Id Pregunta: 175. CONSTITUCION1978";
 preguntaids[3] = 175


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[4]= "5)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[4]= new Array();
 choices[4][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[4][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[4][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[4][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[4] = choices[4][2];
 units[4] = "14";
 comments[4] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";
 preguntaids[4] = 391


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[5]= new Array();
 choices[5][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[5][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[5][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[5][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[5] = choices[5][0];
 units[5] = "22";
 comments[5] = "Id Pregunta: 124. ";
 preguntaids[5] = 124


//  Id pregunta: 273 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[6]= new Array();
 choices[6][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[6][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[6][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[6][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[6] = choices[6][1];
 units[6] = "92";
 comments[6] = "Id Pregunta: 273. INTEGRACION CONTINUA";
 preguntaids[6] = 273


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[7]= new Array();
 choices[7][0] = "De oficio.";
 choices[7][1] = "A solicitud del interesado.";
 choices[7][2] = "De oficio o a solicitud del interesado.";
 choices[7][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[7] = choices[7][2];
 units[7] = "7";
 comments[7] = "Id Pregunta: 665. Art&iacute;culo 54 de la Ley 39/2015";
 preguntaids[7] = 665


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[8]= "9)  De acuerdo con el art&iacute;culo 62 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, se&ntilde;ale la respuesta correcta:";
 choices[8]= new Array();
 choices[8][0] = "El uso del dominio p&uacute;blico radioel&eacute;ctrico s&oacute;lo puede ser de dos tipos: especial o privativo.";
 choices[8][1] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico precisa de t&iacute;tulo habilitante.";
 choices[8][2] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se realiza mediante la explotaci&oacute;n en exclusiva, o por un n&uacute;mero limitado de usuarios, de determinadas frecuencias en un mismo &aacute;mbito f&iacute;sico de aplicaci&oacute;n.";
 choices[8][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se lleve a cabo de las bandas de frecuencias habilitadas para su explotaci&oacute;n de forma compartida, sin limitaci&oacute;n de n&uacute;mero de operadores o usuarios y con las condiciones t&eacute;cnicas y para los servicios que se establezcan en cada caso.";
 answers[8] = choices[8][2];
 units[8] = "121";
 comments[8] = "Id Pregunta: 29. AGE A1 2015";
 preguntaids[8] = 29


//  Id pregunta: 40 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[9]= new Array();
 choices[9][0] = "Drupal";
 choices[9][1] = "Cassandra";
 choices[9][2] = "Wordpress";
 choices[9][3] = "OpenCMS";
 answers[9] = choices[9][1];
 units[9] = "99";
 comments[9] = "Id Pregunta: 40. AGE A1 2015";
 preguntaids[9] = 40


//  Id pregunta: 644 Año de creación de pregunta: 2016
 questions[10]= "11)  En Itil V3 la Gesti&oacute;n de la Cartera de Servicios pertenece a la fase de ciclo de vida:";
 choices[10]= new Array();
 choices[10][0] = "Dise&ntilde;o del servicio.";
 choices[10][1] = "Transici&oacute;n del servicio.";
 choices[10][2] = "Estrategia del servicio.";
 choices[10][3] = "Operaci&oacute;n del servicio.";
 answers[10] = choices[10][2];
 units[10] = "101";
 comments[10] = "Id Pregunta: 644. Junta de Extremadura A1 2015";
 preguntaids[10] = 644


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[11]= "12)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[11]= new Array();
 choices[11][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[11][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[11][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[11][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[11] = choices[11][3];
 units[11] = "10";
 comments[11] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";
 preguntaids[11] = 505


//  Id pregunta: 489 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[12]= new Array();
 choices[12][0] = "Las Cortes Generales.";
 choices[12][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[12][2] = "El Gobierno.";
 choices[12][3] = "El Congreso de los Diputados.";
 answers[12] = choices[12][0];
 units[12] = "10";
 comments[12] = "Id Pregunta: 489. PRESUPUESTOS GENERALES";
 preguntaids[12] = 489


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[13]= "14)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[13]= new Array();
 choices[13][0] = "El Presidente del Congreso de los Diputados.";
 choices[13][1] = "El Presidente del Gobierno.";
 choices[13][2] = "El Rey.";
 choices[13][3] = "El Consejo de Ministros.";
 answers[13] = choices[13][0];
 units[13] = "1";
 comments[13] = "Id Pregunta: 231. CONSTITUCION1978";
 preguntaids[13] = 231


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[14]= new Array();
 choices[14][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[14][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[14][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[14][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[14] = choices[14][2];
 units[14] = "22";
 comments[14] = "Id Pregunta: 706. Ley de transparencia";
 preguntaids[14] = 706


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[15]= "16)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[15]= new Array();
 choices[15][0] = "Infrastructure as a Service (IaaS)";
 choices[15][1] = "Platform as a Service (PaaS)";
 choices[15][2] = "Software as a Service (SaaS)";
 choices[15][3] = "Application as a Service (AaaS)";
 answers[15] = choices[15][1];
 units[15] = "52";
 comments[15] = "Id Pregunta: 63. AGE A1 2015";
 preguntaids[15] = 63


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[16]= "17)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[16]= new Array();
 choices[16][0] = "Estrasburgo.";
 choices[16][1] = "Bruselas.";
 choices[16][2] = "Luxemburgo.";
 choices[16][3] = "Holanda.";
 answers[16] = choices[16][0];
 units[16] = "5";
 comments[16] = "Id Pregunta: 293. UNION EUROPEA";
 preguntaids[16] = 293


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[17]= new Array();
 choices[17][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[17][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[17][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[17][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[17] = choices[17][1];
 units[17] = "43";
 comments[17] = "Id Pregunta: 441. SERVICIOS COMUNES";
 preguntaids[17] = 441


//  Id pregunta: 637 Año de creación de pregunta: 2016
 questions[18]= "19)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[18]= new Array();
 choices[18][0] = "Relaciones base y vistas.";
 choices[18][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[18][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[18][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[18] = choices[18][3];
 units[18] = "60";
 comments[18] = "Id Pregunta: 637. Junta de Extremadura A1 2015";
 preguntaids[18] = 637


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[19]= new Array();
 choices[19][0] = "Permite al equipo reaccionar mejor ante imprevistos";
 choices[19][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[19][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = choices[19][1];
 units[19] = "34, 84";
 comments[19] = "Id Pregunta: 723. Metodologias &aacute;giles";
 preguntaids[19] = 723


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[20]= new Array();
 choices[20][0] = "Ley Org&aacute;nica.";
 choices[20][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[20][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[20][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[20] = choices[20][2];
 units[20] = "1";
 comments[20] = "Id Pregunta: 203. CONSTITUCION1978";
 preguntaids[20] = 203


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[21]= new Array();
 choices[21][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[21][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[21][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[21][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[21] = choices[21][1];
 units[21] = "12";
 comments[21] = "Id Pregunta: 133. Leyes modelo econ&oacute;mico";
 preguntaids[21] = 133


//  Id pregunta: 249 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[22]= new Array();
 choices[22][0] = "Art&iacute;culo 16.2.";
 choices[22][1] = "Art&iacute;culo 17.1.";
 choices[22][2] = "Art&iacute;culo 18.1.";
 choices[22][3] = "Art&iacute;culo 18.2.";
 answers[22] = choices[22][0];
 units[22] = "1";
 comments[22] = "Id Pregunta: 249. CONSTITUCION1978";
 preguntaids[22] = 249


//  Id pregunta: 282 Año de creación de pregunta: 2016
 questions[23]= "24)  Sobre el Plan Juncker:";
 choices[23]= new Array();
 choices[23][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[23][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[23][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[23][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[23] = choices[23][1];
 units[23] = "5";
 comments[23] = "Id Pregunta: 282. UNION EUROPEA";
 preguntaids[23] = 282


//  Id pregunta: 787 Año de creación de pregunta: 2016
 questions[24]= "25)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[24]= new Array();
 choices[24][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[24][1] = "la Organizaci&oacute;n Territorial";
 choices[24][2] = "la Organizaci&oacute;n sectorial";
 choices[24][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[24] = choices[24][2];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 787. Ley 40/2015";
 preguntaids[24] = 787


//  Id pregunta: 794 Año de creación de pregunta: 2016
 questions[25]= "26)  Tienen la condici&oacute;n de alto cargo:";
 choices[25]= new Array();
 choices[25][0] = "los &oacute;rganos superiores";
 choices[25][1] = "los &oacute;rganos superiores y directivos";
 choices[25][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[25][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[25] = choices[25][2];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 794. Ley 40/2015";
 preguntaids[25] = 794


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[26]= "27)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[26]= new Array();
 choices[26][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[26][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[26][2] = "A partir del 1 de enero de 2015";
 choices[26][3] = "A partir del 1 de julio de 2016";
 answers[26] = choices[26][1];
 units[26] = "77";
 comments[26] = "Id Pregunta: 692. Art&iacute;culo 52 del Reglamento 910/2014";
 preguntaids[26] = 692


//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[27]= "28)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[27]= new Array();
 choices[27][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[27][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[27][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[27][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[27] = choices[27][2];
 units[27] = "53";
 comments[27] = "Id Pregunta: 65. AGE A1 2015";
 preguntaids[27] = 65


//  Id pregunta: 235 Año de creación de pregunta: 2016
 questions[28]= "29)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[28]= new Array();
 choices[28][0] = "El Jefe del Estado.";
 choices[28][1] = "El Tribunal Constitucional.";
 choices[28][2] = "El Congreso de los Diputados.";
 choices[28][3] = "Las Cortes Generales.";
 answers[28] = choices[28][0];
 units[28] = "1";
 comments[28] = "Id Pregunta: 235. CONSTITUCION1978";
 preguntaids[28] = 235


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[29]= "30)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[29]= new Array();
 choices[29][0] = "786 Diputados como m&aacute;ximo.";
 choices[29][1] = "600 Diputados como m&aacute;ximo.";
 choices[29][2] = "650 Diputados como m&aacute;ximo.";
 choices[29][3] = "732 Diputados como m&aacute;ximo.";
 answers[29] = choices[29][0];
 units[29] = "5";
 comments[29] = "Id Pregunta: 360. UNION EUROPEA";
 preguntaids[29] = 360


//  Id pregunta: 310 Año de creación de pregunta: 2016
 questions[30]= "31)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[30]= new Array();
 choices[30][0] = "La Comisi&oacute;n Europea.";
 choices[30][1] = "El Consejo Europeo.";
 choices[30][2] = "El Consejo de Europa.";
 choices[30][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[30] = choices[30][0];
 units[30] = "5";
 comments[30] = "Id Pregunta: 310. UNION EUROPEA";
 preguntaids[30] = 310


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[31]= "32)  Son bases de datos NoSQL:";
 choices[31]= new Array();
 choices[31][0] = "MongoDB y Maria DB";
 choices[31][1] = "HBase y Dynamo";
 choices[31][2] = "MariaDB, Cassandra y BigTable";
 choices[31][3] = "La A) y la C)";
 answers[31] = choices[31][1];
 units[31] = "73";
 comments[31] = "Id Pregunta: 104. ";
 preguntaids[31] = 104


//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[32]= "33)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[32]= new Array();
 choices[32][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[32][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[32][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[32][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[32] = choices[32][1];
 units[32] = "7";
 comments[32] = "Id Pregunta: 535. LEY 39/2015";
 preguntaids[32] = 535


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[33]= "34)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[33]= new Array();
 choices[33][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[33][1] = "los Subdelegados del Gobierno en las provincias";
 choices[33][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[33][3] = "a y b son correctas";
 answers[33] = choices[33][3];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 790. Ley 40/2015";
 preguntaids[33] = 790


//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[34]= "35)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[34]= new Array();
 choices[34][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[34][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[34][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[34][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[34] = choices[34][2];
 units[34] = "19";
 comments[34] = "Id Pregunta: 170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";
 preguntaids[34] = 170


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[35]= "36)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[35]= new Array();
 choices[35][0] = "Principio de transparencia.";
 choices[35][1] = "Principio de cooperaci&oacute;n.";
 choices[35][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[35][3] = "Principio de lealtad institucional.";
 answers[35] = choices[35][1];
 units[35] = "10";
 comments[35] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";
 preguntaids[35] = 504


//  Id pregunta: 525 Año de creación de pregunta: 2016
 questions[36]= "37)  Se consideran interesados en el procedimiento administrativo:";
 choices[36]= new Array();
 choices[36][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[36][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[36][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[36][3] = "todas son correctas";
 answers[36] = choices[36][0];
 units[36] = "7";
 comments[36] = "Id Pregunta: 525. LEY 39/2015";
 preguntaids[36] = 525


//  Id pregunta: 532 Año de creación de pregunta: 2016
 questions[37]= "38)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[37]= new Array();
 choices[37][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[37][1] = "mediante resoluci&oacute;n judicial especial";
 choices[37][2] = "&uacute;nicamente mediante poder notarial";
 choices[37][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[37] = choices[37][3];
 units[37] = "7";
 comments[37] = "Id Pregunta: 532. LEY 39/2015";
 preguntaids[37] = 532


//  Id pregunta: 663 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[38]= new Array();
 choices[38][0] = "Varios namenodes y varios datanodes por cluster";
 choices[38][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[38][2] = "1 namenode y varios datanodes por cluster";
 choices[38][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[38] = choices[38][2];
 units[38] = "73";
 comments[38] = "Id Pregunta: 663. ";
 preguntaids[38] = 663


//  Id pregunta: 366 Año de creación de pregunta: 2016
 questions[39]= "40)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[39]= new Array();
 choices[39][0] = "20 parlamentarios.";
 choices[39][1] = "29 parlamentarios.";
 choices[39][2] = "18 parlamentarios.";
 choices[39][3] = "23 parlamentarios.";
 answers[39] = choices[39][0];
 units[39] = "5";
 comments[39] = "Id Pregunta: 366. UNION EUROPEA";
 preguntaids[39] = 366


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[40]= "41)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[40]= new Array();
 choices[40][0] = "los Ministros y los Secretarios de Estado";
 choices[40][1] = "los Subsecretarios y Secretarios generales";
 choices[40][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[40][3] = "los Directores generales";
 answers[40] = choices[40][2];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 793. Ley 40/2015";
 preguntaids[40] = 793


//  Id pregunta: 738 Año de creación de pregunta: 2016
 questions[41]= "42)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se basar&aacute;n en:";
 choices[41]= new Array();
 choices[41][0] = "6 principios.";
 choices[41][1] = "7 principios.";
 choices[41][2] = "5 principios.";
 choices[41][3] = "6 directrices.";
 answers[41] = choices[41][2];
 units[41] = "28";
 comments[41] = "Id Pregunta: 738. Estrategia TIC";
 preguntaids[41] = 738


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[42]= "43)  Los Subdirectores generales:";
 choices[42]= new Array();
 choices[42][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[42][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[42][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[42][3] = "todas son correctas";
 answers[42] = choices[42][1];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 811. Ley 40/2015";
 preguntaids[42] = 811


//  Id pregunta: 862 Año de creación de pregunta: 2016
 questions[43]= "44)  Sobre las URL de los sitios web p&uacute;blicos, se&ntilde;ale cu&aacute;l NO es verdadera:";
 choices[43]= new Array();
 choices[43][0] = "Se recomienda utilizar la URL con dominio &lt;.gob.es&gt; en todos los niveles de la Administraci&oacute;n General del Estado, para todos los sitios web.";
 choices[43][1] = "Si se trata de organismos muy conocidos por los ciudadanos y siempre que no coincida con la denominaci&oacute;n del portal, se puede utilizar la denominaci&oacute;n actual con .gob.es";
 choices[43][2] = "Para una mayor normalizaci&oacute;n siempre se podr&iacute;a redireccionar autom&aacute;ticamente desde una URL a otra, para lo cual habr&aacute; que registrar los dos dominios: organismo.gob.es y sede.organismo.gob.es.";
 choices[43][3] = "Se recomienda utilizar sede.aaaa.gob.es, donde aaaa se sustituir&aacute; por el nombre del Ministerio al que pertenece el organismo.";
 answers[43] = choices[43][3];
 units[43] = "125";
 comments[43] = "Id Pregunta: 862. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[43] = 862


//  Id pregunta: 694 Año de creación de pregunta: 2016
 questions[44]= "45)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[44]= new Array();
 choices[44][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[44][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[44][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[44][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[44] = choices[44][1];
 units[44] = "77";
 comments[44] = "Id Pregunta: 694. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";
 preguntaids[44] = 694


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[45]= "46)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[45]= new Array();
 choices[45][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[45][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[45][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[45][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[45] = choices[45][2];
 units[45] = "43";
 comments[45] = "Id Pregunta: 440. SERVICIOS COMUNES";
 preguntaids[45] = 440


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[46]= "47)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[46]= new Array();
 choices[46][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[46][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[46][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[46][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[46] = choices[46][2];
 units[46] = "22";
 comments[46] = "Id Pregunta: 128. ";
 preguntaids[46] = 128


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[47]= "48)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[47]= new Array();
 choices[47][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[47][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[47][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[47][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[47] = choices[47][1];
 units[47] = "74";
 comments[47] = "Id Pregunta: 45. AGE A1 2015";
 preguntaids[47] = 45


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[48]= "49)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[48]= new Array();
 choices[48][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[48][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[48][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[48][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[48] = choices[48][1];
 units[48] = "22";
 comments[48] = "Id Pregunta: 278. LEY DE TRANSPARENCIA";
 preguntaids[48] = 278


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


//  Id pregunta: 474 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[50]= new Array();
 choices[50][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[50][1] = "Auditor&iacute;a operativa.";
 choices[50][2] = "Auditor&iacute;a de cumplimiento.";
 choices[50][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[50] = choices[50][2];
 units[50] = "10";
 comments[50] = "Id Pregunta: 474. PRESUPUESTOS GENERALES";
 preguntaids[50] = 474


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[51]= new Array();
 choices[51][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[51][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[51][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[51][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[51] = choices[51][1];
 units[51] = "44";
 comments[51] = "Id Pregunta: 73. AGE A1 2015";
 preguntaids[51] = 73


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[52]= "53)  El sector p&uacute;blico institucional se integra por:";
 choices[52]= new Array();
 choices[52][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[52][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[52][2] = "las Universidades p&uacute;blicas";
 choices[52][3] = "todas son correctas";
 answers[52] = choices[52][3];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 766. Ley 40/2015";
 preguntaids[52] = 766


//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[53]= "54)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[53]= new Array();
 choices[53][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[53][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[53][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[53][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[53] = choices[53][3];
 units[53] = "10";
 comments[53] = "Id Pregunta: 510. PRESUPUESTOS GENERALES";
 preguntaids[53] = 510


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[54]= "55)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[54]= new Array();
 choices[54][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[54][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[54][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[54][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[54] = choices[54][0];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 800. Ley 40/2015";
 preguntaids[54] = 800


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[55]= "56)  El Tribunal de Justicia se cre&oacute; en:";
 choices[55]= new Array();
 choices[55][0] = "El Tratado de la CECA.";
 choices[55][1] = "El Tratado de Niza.";
 choices[55][2] = "El Tratado de &Aacute;msterdam.";
 choices[55][3] = "El Tratado de Lisboa.";
 answers[55] = choices[55][0];
 units[55] = "5";
 comments[55] = "Id Pregunta: 308. UNION EUROPEA";
 preguntaids[55] = 308


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[56]= "57)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[56]= new Array();
 choices[56][0] = "0";
 choices[56][1] = "1";
 choices[56][2] = "Tantos como peticiones concurrentes tenga.";
 choices[56][3] = "Tantos como le permita la memoria de la JVM.";
 answers[56] = choices[56][1];
 units[56] = "64";
 comments[56] = "Id Pregunta: 15. AGE A1 2015";
 preguntaids[56] = 15


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[57]= "58)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[57]= new Array();
 choices[57][0] = "&oacute;rganos superiores";
 choices[57][1] = "&oacute;rganos directivos";
 choices[57][2] = "&oacute;rganos superiores y directivos";
 choices[57][3] = "ninguna es correcta";
 answers[57] = choices[57][1];
 units[57] = "4, 7, 8, 9";
 comments[57] = "Id Pregunta: 796. Ley 40/2015";
 preguntaids[57] = 796


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[58]= "59)  Es falso que:";
 choices[58]= new Array();
 choices[58][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[58][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[58][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[58][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[58] = choices[58][1];
 units[58] = "20";
 comments[58] = "Id Pregunta: 752. Direcci&oacute;n p&uacute;blica";
 preguntaids[58] = 752


//  Id pregunta: 314 Año de creación de pregunta: 2016
 questions[59]= "60)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[59]= new Array();
 choices[59][0] = "Al Consejo Europeo.";
 choices[59][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[59][2] = "A la Comisi&oacute;n Europea.";
 choices[59][3] = "Al Parlamento Europeo.";
 answers[59] = choices[59][2];
 units[59] = "5";
 comments[59] = "Id Pregunta: 314. UNION EUROPEA";
 preguntaids[59] = 314


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[60]= new Array();
 choices[60][0] = "En 2011";
 choices[60][1] = "En 2013";
 choices[60][2] = "En 2015";
 choices[60][3] = "En 2016";
 answers[60] = choices[60][2];
 units[60] = "17";
 comments[60] = "Id Pregunta: 763. Mercado &Uacute;nico Digital";
 preguntaids[60] = 763


//  Id pregunta: 542 Año de creación de pregunta: 2016
 questions[61]= "62)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[61]= new Array();
 choices[61][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[61][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[61][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[61][3] = "todas son correctas";
 answers[61] = choices[61][3];
 units[61] = "7";
 comments[61] = "Id Pregunta: 542. LEY 39/2015";
 preguntaids[61] = 542


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[62]= "63)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[62]= new Array();
 choices[62][0] = "Aplicaci&oacute;n";
 choices[62][1] = "Sesi&oacute;n";
 choices[62][2] = "Presentaci&oacute;n";
 choices[62][3] = "Transporte";
 answers[62] = choices[62][2];
 units[62] = "105";
 comments[62] = "Id Pregunta: 18. AGE A1 2015";
 preguntaids[62] = 18


//  Id pregunta: 602 Año de creación de pregunta: 2016
 questions[63]= "64)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[63]= new Array();
 choices[63][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[63][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[63][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[63][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[63] = choices[63][2];
 units[63] = "108";
 comments[63] = "Id Pregunta: 602. Junta de Extremadura A1 2015";
 preguntaids[63] = 602


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[64]= "65)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[64]= new Array();
 choices[64][0] = "la capital del pa&iacute;s";
 choices[64][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[64][2] = "cada una de las provincias";
 choices[64][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[64] = choices[64][1];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 812. Ley 40/2015";
 preguntaids[64] = 812


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[65]= "66)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[65]= new Array();
 choices[65][0] = "Por unanimidad.";
 choices[65][1] = "Por mayor&iacute;a cualificada.";
 choices[65][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[65][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[65] = choices[65][3];
 units[65] = "5";
 comments[65] = "Id Pregunta: 312. UNION EUROPEA";
 preguntaids[65] = 312


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
 preguntaids[66] = 106


//  Id pregunta: 650 Año de creación de pregunta: 2016
 questions[67]= "68)  Los IDS, (Sistemas de Detecci&oacute;n de Intrusos), pueden clasificarse:";
 choices[67]= new Array();
 choices[67][0] = "Solamente en funci&oacute;n de los sistemas que monitorizan.";
 choices[67][1] = "En funci&oacute;n de los sistemas que monitorizan y en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[67][2] = "Solamente en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[67][3] = "Estos sistemas es imposible clasificarlos.";
 answers[67] = choices[67][1];
 units[67] = "119";
 comments[67] = "Id Pregunta: 650. Junta de Extremadura A1 2015";
 preguntaids[67] = 650


//  Id pregunta: 846 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[68]= new Array();
 choices[68][0] = "Conferencia de Presidentes.";
 choices[68][1] = "Convenios de colaboraci&oacute;n.";
 choices[68][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[68][3] = "Conferencias Sectoriales.";
 answers[68] = choices[68][0];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 846. Ley 40/2015";
 preguntaids[68] = 846


//  Id pregunta: 497 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n el art&iacute;culo 13.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el aplazamiento y fraccionamiento de las cantidades adeudadas a la Hacienda P&uacute;blica estatal por las comunidades aut&oacute;nomas y las corporaciones locales se regir&aacute; por:";
 choices[69]= new Array();
 choices[69][0] = "La Ley General Tributaria.";
 choices[69][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[69][2] = "La legislaci&oacute;n espec&iacute;fica, la cual tendr&aacute; en cuenta la necesaria reciprocidad entre administraciones.";
 choices[69][3] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 answers[69] = choices[69][2];
 units[69] = "10";
 comments[69] = "Id Pregunta: 497. PRESUPUESTOS GENERALES";
 preguntaids[69] = 497


//  Id pregunta: 860 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l NO es un objetivo de la utilizaci&oacute;n por parte de la Administraci&oacute;n de la web 2.0?";
 choices[70]= new Array();
 choices[70][0] = "Permitir la generaci&oacute;n de comentarios acerca de la informaci&oacute;n ofrecida y recibir actualizaciones en vivo por parte de los usuarios.";
 choices[70][1] = "Promover una mayor interacci&oacute;n con las principales redes sociales.";
 choices[70][2] = "Conseguir un conocimiento abierto, en particular mediante blogs y wikis.";
 choices[70][3] = "Conseguir que el usuario se sienta escuchado.";
 answers[70] = choices[70][1];
 units[70] = "125";
 comments[70] = "Id Pregunta: 860. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[70] = 860


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[71]= new Array();
 choices[71][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[71][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[71][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[71][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[71] = choices[71][2];
 units[71] = "71";
 comments[71] = "Id Pregunta: 39. AGE A1 2015";
 preguntaids[71] = 39


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[72]= "73)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[72]= new Array();
 choices[72][0] = "El derecho a un permiso.";
 choices[72][1] = "Una prestaci&oacute;n por paternidad.";
 choices[72][2] = "Ambas son correctas.";
 choices[72][3] = "18 d&iacute;as de permiso.";
 answers[72] = choices[72][2];
 units[72] = "14";
 comments[72] = "Id Pregunta: 423. POLITICAS DE IGUALDAD";
 preguntaids[72] = 423


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[73]= new Array();
 choices[73][0] = "Por Real Decreto.";
 choices[73][1] = "Por Orden del Ministerio del Interior.";
 choices[73][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[73][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[73] = choices[73][2];
 units[73] = "1";
 comments[73] = "Id Pregunta: 230. CONSTITUCION1978";
 preguntaids[73] = 230


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[74]= "75)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[74]= new Array();
 choices[74][0] = "Son vinculantes solamente.";
 choices[74][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[74][2] = "Son preceptivos y vinculantes.";
 choices[74][3] = "Son preceptivos y no vinculantes.";
 answers[74] = choices[74][1];
 units[74] = "5";
 comments[74] = "Id Pregunta: 355. UNION EUROPEA";
 preguntaids[74] = 355


