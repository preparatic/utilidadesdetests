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

//  Id pregunta: 648 Año de creación de pregunta: 2016
 questions[0]= "1)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[0]= new Array();
 choices[0][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[0][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[0][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[0][3] = "Todas las respuestas son correctas.";
 answers[0] = choices[0][0];
 units[0] = "101";
 comments[0] = "Id Pregunta: 648. Junta de Extremadura A1 2015";
 preguntaids[0] = 648


//  Id pregunta: 179 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[1]= new Array();
 choices[1][0] = "Una ley orginaria.";
 choices[1][1] = "Una ley org&aacute;nica.";
 choices[1][2] = "Una ley de bases.";
 choices[1][3] = "Una ley de transferencia.";
 answers[1] = choices[1][1];
 units[1] = "1";
 comments[1] = "Id Pregunta: 179. CONSTITUCION1978";
 preguntaids[1] = 179


//  Id pregunta: 314 Año de creación de pregunta: 2016
 questions[2]= "3)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[2]= new Array();
 choices[2][0] = "Al Consejo Europeo.";
 choices[2][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[2][2] = "A la Comisi&oacute;n Europea.";
 choices[2][3] = "Al Parlamento Europeo.";
 answers[2] = choices[2][2];
 units[2] = "5";
 comments[2] = "Id Pregunta: 314. UNION EUROPEA";
 preguntaids[2] = 314


//  Id pregunta: 6 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[3]= new Array();
 choices[3][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[3][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[3][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[3][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[3] = choices[3][0];
 units[3] = "91";
 comments[3] = "Id Pregunta: 6. AGE A1 2015";
 preguntaids[3] = 6


//  Id pregunta: 846 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[4]= new Array();
 choices[4][0] = "Conferencia de Presidentes.";
 choices[4][1] = "Convenios de colaboraci&oacute;n.";
 choices[4][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[4][3] = "Conferencias Sectoriales.";
 answers[4] = choices[4][0];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 846. Ley 40/2015";
 preguntaids[4] = 846


//  Id pregunta: 372 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[5]= new Array();
 choices[5][0] = "El Parlamento y el Consejo.";
 choices[5][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[5][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[5][3] = "La Comisi&oacute;n y el Consejo.";
 answers[5] = choices[5][2];
 units[5] = "5";
 comments[5] = "Id Pregunta: 372. UNION EUROPEA";
 preguntaids[5] = 372


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[6]= "7)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[6]= new Array();
 choices[6][0] = "Sello electr&oacute;nico";
 choices[6][1] = "Sede electr&oacute;nica";
 choices[6][2] = "Servidor seguro (SSL/TLS)";
 choices[6][3] = "Empleado p&uacute;blico";
 answers[6] = choices[6][2];
 units[6] = "7";
 comments[6] = "Id Pregunta: 26. AGE A1 2015";
 preguntaids[6] = 26


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[7]= "8)  Respecto a los servicios territoriales es correcto:";
 choices[7]= new Array();
 choices[7][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[7][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[7][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[7][3] = "ninguna es correcta";
 answers[7] = choices[7][0];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 820. Ley 40/2015";
 preguntaids[7] = 820


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[8]= "9)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[8]= new Array();
 choices[8][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[8][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[8][2] = "Ambas son correctas.";
 choices[8][3] = "La A y B son incorrectas.";
 answers[8] = choices[8][2];
 units[8] = "14";
 comments[8] = "Id Pregunta: 417. POLITICAS DE IGUALDAD";
 preguntaids[8] = 417


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[9]= "10)  Son bases de datos NoSQL orientadas a objetos:";
 choices[9]= new Array();
 choices[9][0] = "GemStone";
 choices[9][1] = "Zope Object DB";
 choices[9][2] = "Las dos anteriores";
 choices[9][3] = "Solo B)";
 answers[9] = choices[9][2];
 units[9] = "73";
 comments[9] = "Id Pregunta: 107. ";
 preguntaids[9] = 107


//  Id pregunta: 381 Año de creación de pregunta: 2016
 questions[10]= "11)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[10]= new Array();
 choices[10][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[10][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[10][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[10][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[10] = choices[10][0];
 units[10] = "14";
 comments[10] = "Id Pregunta: 381. POLITICAS DE IGUALDAD";
 preguntaids[10] = 381


//  Id pregunta: 862 Año de creación de pregunta: 2016
 questions[11]= "12)  Sobre las URL de los sitios web p&uacute;blicos, se&ntilde;ale cu&aacute;l NO es verdadera:";
 choices[11]= new Array();
 choices[11][0] = "Se recomienda utilizar la URL con dominio &lt;.gob.es&gt; en todos los niveles de la Administraci&oacute;n General del Estado, para todos los sitios web.";
 choices[11][1] = "Si se trata de organismos muy conocidos por los ciudadanos y siempre que no coincida con la denominaci&oacute;n del portal, se puede utilizar la denominaci&oacute;n actual con .gob.es";
 choices[11][2] = "Para una mayor normalizaci&oacute;n siempre se podr&iacute;a redireccionar autom&aacute;ticamente desde una URL a otra, para lo cual habr&aacute; que registrar los dos dominios: organismo.gob.es y sede.organismo.gob.es.";
 choices[11][3] = "Se recomienda utilizar sede.aaaa.gob.es, donde aaaa se sustituir&aacute; por el nombre del Ministerio al que pertenece el organismo.";
 answers[11] = choices[11][3];
 units[11] = "125";
 comments[11] = "Id Pregunta: 862. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[11] = 862


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[12]= "13)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[12]= new Array();
 choices[12][0] = "apud acta";
 choices[12][1] = "presencialmente";
 choices[12][2] = "electr&oacute;nicamente";
 choices[12][3] = "todas son correctas";
 answers[12] = choices[12][3];
 units[12] = "7";
 comments[12] = "Id Pregunta: 538. LEY 39/2015";
 preguntaids[12] = 538


//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[13]= "14)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[13]= new Array();
 choices[13][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[13][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[13][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[13][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[13] = choices[13][3];
 units[13] = "10";
 comments[13] = "Id Pregunta: 510. PRESUPUESTOS GENERALES";
 preguntaids[13] = 510


//  Id pregunta: 569 Año de creación de pregunta: 2016
 questions[14]= "15)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[14]= new Array();
 choices[14][0] = "Primario, que incluye la agricultura y la pesca";
 choices[14][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[14][2] = "Minero, junto con las exportaciones de comercio";
 choices[14][3] = "Servicios";
 answers[14] = choices[14][3];
 units[14] = "12";
 comments[14] = "Id Pregunta: 569. Modelo econ&oacute;mico";
 preguntaids[14] = 569


//  Id pregunta: 341 Año de creación de pregunta: 2016
 questions[15]= "16)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[15]= new Array();
 choices[15][0] = "623";
 choices[15][1] = "649";
 choices[15][2] = "626";
 choices[15][3] = "565";
 answers[15] = choices[15][2];
 units[15] = "5";
 comments[15] = "Id Pregunta: 341. UNION EUROPEA";
 preguntaids[15] = 341


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[16]= "17)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[16]= new Array();
 choices[16][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[16][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[16][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[16][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[16] = choices[16][0];
 units[16] = "1";
 comments[16] = "Id Pregunta: 239. CONSTITUCION1978";
 preguntaids[16] = 239


//  Id pregunta: 605 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[17]= new Array();
 choices[17][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[17][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[17][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[17][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[17] = choices[17][3];
 units[17] = "101";
 comments[17] = "Id Pregunta: 605. Junta de Extremadura A1 2015";
 preguntaids[17] = 605


//  Id pregunta: 72 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[18]= new Array();
 choices[18][0] = "OASIS ha definido una notaci&oacute;n gr&aacute;fica est&aacute;ndar para WS-BPEL.";
 choices[18][1] = "BPEL4People es una extensi&oacute;n sobre WS-BPEL realizada para dar cobertura a escenarios que involucran interacci&oacute;n de personas con procesos de negocio.";
 choices[18][2] = "WS-BPEL es un lenguaje dise&ntilde;ado para el control distribuido de la invocaci&oacute;n de diferentes servicios Web que modelan un proceso de negocio.";
 choices[18][3] = "XPDL es una especificaci&oacute;n de lenguaje de definici&oacute;n de procesos creada por OASIS.";
 answers[18] = choices[18][1];
 units[18] = "86";
 comments[18] = "Id Pregunta: 72. AGE A1 2015";
 preguntaids[18] = 72


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[19]= "20)  Son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[19]= new Array();
 choices[19][0] = "Tranparencia, Innovaci&oacute;n, Unidad y visi&oacute;n integral y Orientaci&oacute;n al usuario del servicio";
 choices[19][1] = "Tranparencia, Colaboraci&oacute;n y alianzas, Orientaci&oacute;n al usuario del servicio y Reutilizaci&oacute;n";
 choices[19][2] = "Reutilizaci&oacute;n, Seguridad, Orientaci&oacute;n al usuario del servicio y Transparencia";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = choices[19][0];
 units[19] = "28";
 comments[19] = "Id Pregunta: 737. Estrategia TIC";
 preguntaids[19] = 737


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[20]= "21)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[20]= new Array();
 choices[20][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[20][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[20][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[20][3] = "Todas las respuestas son correctas.";
 answers[20] = choices[20][3];
 units[20] = "50";
 comments[20] = "Id Pregunta: 622. Junta de Extremadura A1 2015";
 preguntaids[20] = 622


//  Id pregunta: 282 Año de creación de pregunta: 2016
 questions[21]= "22)  Sobre el Plan Juncker:";
 choices[21]= new Array();
 choices[21][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[21][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[21][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[21][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[21] = choices[21][1];
 units[21] = "5";
 comments[21] = "Id Pregunta: 282. UNION EUROPEA";
 preguntaids[21] = 282


//  Id pregunta: 552 Año de creación de pregunta: 2016
 questions[22]= "23)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[22]= new Array();
 choices[22][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[22][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[22][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[22][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[22] = choices[22][3];
 units[22] = "26";
 comments[22] = "Id Pregunta: 552. Gobernanza TIC";
 preguntaids[22] = 552


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[23]= "24)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[23]= new Array();
 choices[23][0] = "2.400 euros";
 choices[23][1] = "4.000 euros";
 choices[23][2] = "3.200 euros";
 choices[23][3] = "1.600 euros";
 answers[23] = choices[23][1];
 units[23] = "37";
 comments[23] = "Id Pregunta: 89. AGE A1 2015";
 preguntaids[23] = 89


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[24]= new Array();
 choices[24][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[24][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[24][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[24][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[24] = choices[24][0];
 units[24] = "19";
 comments[24] = "Id Pregunta: 589. Estrategia TIC";
 preguntaids[24] = 589


//  Id pregunta: 534 Año de creación de pregunta: 2016
 questions[25]= "26)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[25]= new Array();
 choices[25][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[25][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[25][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[25][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[25] = choices[25][2];
 units[25] = "7";
 comments[25] = "Id Pregunta: 534. LEY 39/2015";
 preguntaids[25] = 534


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[26]= "27)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[26]= new Array();
 choices[26][0] = "Presencia equilibrada.";
 choices[26][1] = "Presencia paritaria.";
 choices[26][2] = "Presencia consensuada.";
 choices[26][3] = "presencia horizontal.";
 answers[26] = choices[26][0];
 units[26] = "14";
 comments[26] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";
 preguntaids[26] = 425


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[27]= new Array();
 choices[27][0] = "El Consejo Europeo.";
 choices[27][1] = "El Parlamento Europeo.";
 choices[27][2] = "El Consejo.";
 choices[27][3] = "La Comisi&oacute;n.";
 answers[27] = choices[27][3];
 units[27] = "5";
 comments[27] = "Id Pregunta: 361. UNION EUROPEA";
 preguntaids[27] = 361


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[28]= "29)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[28]= new Array();
 choices[28][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[28][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[28][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[28][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[28] = choices[28][2];
 units[28] = "22";
 comments[28] = "Id Pregunta: 128. ";
 preguntaids[28] = 128


//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[29]= new Array();
 choices[29][0] = "Nueve.";
 choices[29][1] = "Diez.";
 choices[29][2] = "Siete.";
 choices[29][3] = "Ocho.";
 answers[29] = choices[29][3];
 units[29] = "5";
 comments[29] = "Id Pregunta: 373. UNION EUROPEA";
 preguntaids[29] = 373


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[30]= "31)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[30]= new Array();
 choices[30][0] = "Estrasburgo.";
 choices[30][1] = "Bruselas.";
 choices[30][2] = "Luxemburgo.";
 choices[30][3] = "Holanda.";
 answers[30] = choices[30][0];
 units[30] = "5";
 comments[30] = "Id Pregunta: 293. UNION EUROPEA";
 preguntaids[30] = 293


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[31]= "32)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[31]= new Array();
 choices[31][0] = "Tener una estructura institucional.";
 choices[31][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[31][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[31][3] = "Todas las respuestas son correctas.";
 answers[31] = choices[31][3];
 units[31] = "5";
 comments[31] = "Id Pregunta: 377. UNION EUROPEA";
 preguntaids[31] = 377


//  Id pregunta: 539 Año de creación de pregunta: 2016
 questions[32]= "33)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[32]= new Array();
 choices[32][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[32][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[32][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[32][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[32] = choices[32][1];
 units[32] = "7";
 comments[32] = "Id Pregunta: 539. LEY 39/2015";
 preguntaids[32] = 539


//  Id pregunta: 123 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[33]= new Array();
 choices[33][0] = "Un representante de la Administraci&oacute;n local.";
 choices[33][1] = "Un representante del Tribunal de Cuentas.";
 choices[33][2] = "Un representante del Defensor del Pueblo.";
 choices[33][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[33] = choices[33][0];
 units[33] = "22";
 comments[33] = "Id Pregunta: 123. ";
 preguntaids[33] = 123


//  Id pregunta: 776 Año de creación de pregunta: 2016
 questions[34]= "35)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[34]= new Array();
 choices[34][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[34][1] = "el C&oacute;digo Civil";
 choices[34][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[34][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[34] = choices[34][0];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 776. Ley 40/2015";
 preguntaids[34] = 776


//  Id pregunta: 10 Año de creación de pregunta: 2016
 questions[35]= "36)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[35]= new Array();
 choices[35][0] = "Paging";
 choices[35][1] = "Roaming";
 choices[35][2] = "Handover";
 choices[35][3] = "Trunking";
 answers[35] = choices[35][0];
 units[35] = "117";
 comments[35] = "Id Pregunta: 10. AGE A1 2015";
 preguntaids[35] = 10


//  Id pregunta: 550 Año de creación de pregunta: 2016
 questions[36]= "37)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[36]= new Array();
 choices[36][0] = "La Administraci&oacute;n General del Estado";
 choices[36][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[36][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[36][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[36] = choices[36][1];
 units[36] = "26";
 comments[36] = "Id Pregunta: 550. Gobernanza TIC";
 preguntaids[36] = 550


//  Id pregunta: 830 Año de creación de pregunta: 2016
 questions[37]= "38)  La recusaci&oacute;n se plantear&aacute;...";
 choices[37]= new Array();
 choices[37][0] = "S&oacute;lo verbalmente";
 choices[37][1] = "S&oacute;lo por escrito";
 choices[37][2] = "Verbalmente o por escrito";
 choices[37][3] = "Verbalmente o por escrito siempre que es exprese la causa o causas en que se funda";
 answers[37] = choices[37][0];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 830. Ley 40/2015";
 preguntaids[37] = 830


//  Id pregunta: 646 Año de creación de pregunta: 2016
 questions[38]= "39)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[38]= new Array();
 choices[38][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[38][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[38][2] = "Funcionarios e interinos.";
 choices[38][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[38] = choices[38][3];
 units[38] = "20";
 comments[38] = "Id Pregunta: 646. Junta de Extremadura A1 2015";
 preguntaids[38] = 646


//  Id pregunta: 266 Año de creación de pregunta: 2016
 questions[39]= "40)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[39]= new Array();
 choices[39][0] = "El Segundo.";
 choices[39][1] = "El Primero.";
 choices[39][2] = "El Preliminar.";
 choices[39][3] = "El Tercero.";
 answers[39] = choices[39][0];
 units[39] = "1";
 comments[39] = "Id Pregunta: 266. CONSTITUCION1978";
 preguntaids[39] = 266


//  Id pregunta: 506 Año de creación de pregunta: 2016
 questions[40]= "41)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[40]= new Array();
 choices[40][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[40][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[40][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[40][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[40] = choices[40][2];
 units[40] = "10";
 comments[40] = "Id Pregunta: 506. PRESUPUESTOS GENERALES";
 preguntaids[40] = 506


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[41]= "42)  Los Reglamentos no se caracterizan por:";
 choices[41]= new Array();
 choices[41][0] = "No poseer alcance general.";
 choices[41][1] = "Ser obligatorios.";
 choices[41][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[41][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[41] = choices[41][0];
 units[41] = "5";
 comments[41] = "Id Pregunta: 363. UNION EUROPEA";
 preguntaids[41] = 363


//  Id pregunta: 781 Año de creación de pregunta: 2016
 questions[42]= "43)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[42]= new Array();
 choices[42][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[42][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[42][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[42][3] = "todas son correctas";
 answers[42] = choices[42][3];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 781. Ley 40/2015";
 preguntaids[42] = 781


//  Id pregunta: 582 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[43]= new Array();
 choices[43][0] = "A la CETIC";
 choices[43][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[43][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[43][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[43] = choices[43][3];
 units[43] = "19";
 comments[43] = "Id Pregunta: 582. Estrategia TIC";
 preguntaids[43] = 582


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[44]= new Array();
 choices[44][0] = "Anual";
 choices[44][1] = "Mensual";
 choices[44][2] = "Semestral";
 choices[44][3] = "Trimestral";
 answers[44] = choices[44][3];
 units[44] = "15";
 comments[44] = "Id Pregunta: 119. ";
 preguntaids[44] = 119


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;ale la respuesta correcta:";
 choices[45]= new Array();
 choices[45][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[45][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[45][2] = "A y B son correctas.";
 choices[45][3] = "A y B son falsas.";
 answers[45] = choices[45][2];
 units[45] = "4, 7, 8, 9";
 comments[45] = "Id Pregunta: 848. Ley 40/2015";
 preguntaids[45] = 848


//  Id pregunta: 741 Año de creación de pregunta: 2016
 questions[46]= "47)  En relaci&oacute;n al principio rector Orientaci&oacute;n al usuario del servicio del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[46]= new Array();
 choices[46][0] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y seguridad.";
 choices[46][1] = "Es necesario redefinir los servicios empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 choices[46][2] = "Se requiere modernizar los servicios p&uacute;blicos empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de transparencia, usabilidad, simplicidad y accesibilidad.";
 choices[46][3] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 answers[46] = choices[46][0];
 units[46] = "28";
 comments[46] = "Id Pregunta: 741. Estrategia TIC";
 preguntaids[46] = 741


//  Id pregunta: 476 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[47]= new Array();
 choices[47][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[47][1] = "Todas las respuestas son correctas.";
 choices[47][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[47][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[47] = choices[47][1];
 units[47] = "10";
 comments[47] = "Id Pregunta: 476. PRESUPUESTOS GENERALES";
 preguntaids[47] = 476


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[48]= "49)  Los Subdirectores generales:";
 choices[48]= new Array();
 choices[48][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[48][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[48][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[48][3] = "todas son correctas";
 answers[48] = choices[48][1];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 811. Ley 40/2015";
 preguntaids[48] = 811


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[49]= new Array();
 choices[49][0] = "Lean startup";
 choices[49][1] = "Business Model Canvas";
 choices[49][2] = "Dynamic system Development method";
 choices[49][3] = "Lean software development";
 answers[49] = choices[49][2];
 units[49] = "34";
 comments[49] = "Id Pregunta: 722. Metodologias Lean";
 preguntaids[49] = 722


//  Id pregunta: 206 Año de creación de pregunta: 2016
 questions[50]= "51)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[50]= new Array();
 choices[50][0] = "El Gobierno.";
 choices[50][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[50][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[50][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[50] = choices[50][2];
 units[50] = "1";
 comments[50] = "Id Pregunta: 206. CONSTITUCION1978";
 preguntaids[50] = 206


//  Id pregunta: 751 Año de creación de pregunta: 2016
 questions[51]= "52)  En los or&iacute;genes te&oacute;ricos del t&eacute;rmino gobernanza se encuentra:";
 choices[51]= new Array();
 choices[51][0] = "Peters";
 choices[51][1] = "Hollingsworth";
 choices[51][2] = "Manuel Castells";
 choices[51][3] = "Gaebler";
 answers[51] = choices[51][1];
 units[51] = "20";
 comments[51] = "Id Pregunta: 751. Direcci&oacute;n p&uacute;blica";
 preguntaids[51] = 751


//  Id pregunta: 269 Año de creación de pregunta: 2016
 questions[52]= "53)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[52]= new Array();
 choices[52][0] = "Diez art&iacute;culos.";
 choices[52][1] = "Nueve art&iacute;culos.";
 choices[52][2] = "Once art&iacute;culos.";
 choices[52][3] = "Ocho art&iacute;culos.";
 answers[52] = choices[52][0];
 units[52] = "1";
 comments[52] = "Id Pregunta: 269. CONSTITUCION1978";
 preguntaids[52] = 269


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[53]= "54)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[53]= new Array();
 choices[53][0] = "El presidente de las Cortes Generales.";
 choices[53][1] = "El Presidente del Gobierno.";
 choices[53][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[53][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[53] = choices[53][3];
 units[53] = "10";
 comments[53] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";
 preguntaids[53] = 502


//  Id pregunta: 4 Año de creación de pregunta: 2016
 questions[54]= "55)  Un wireframe es:";
 choices[54]= new Array();
 choices[54][0] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiFi.";
 choices[54][1] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiMAX.";
 choices[54][2] = "Un modelo que permite evaluar el impacto de las nuevas tecnolog&iacute;as en la mejora de la calidad de vida durante la puesta en marcha de una ciudad inteligente (smart city).";
 choices[54][3] = "Una interfaz visual que representa la estructura visual de un sitio web y la relaci&oacute;n entre sus p&aacute;ginas.";
 answers[54] = choices[54][3];
 units[54] = "62";
 comments[54] = "Id Pregunta: 4. AGE A1 2015";
 preguntaids[54] = 4


//  Id pregunta: 390 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[55]= new Array();
 choices[55][0] = "El Consejo Nacional de la Mujer.";
 choices[55][1] = "El Consejo de la Mujer.";
 choices[55][2] = "El Instituto de la Mujer.";
 choices[55][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[55] = choices[55][3];
 units[55] = "14";
 comments[55] = "Id Pregunta: 390. POLITICAS DE IGUALDAD";
 preguntaids[55] = 390


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[56]= "57)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[56]= new Array();
 choices[56][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[56][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[56][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[56][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[56] = choices[56][2];
 units[56] = "1";
 comments[56] = "Id Pregunta: 177. CONSTITUCION1978";
 preguntaids[56] = 177


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[57]= "58)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[57]= new Array();
 choices[57][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[57][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[57][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[57][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[57] = choices[57][3];
 units[57] = "44";
 comments[57] = "Id Pregunta: 17. AGE A1 2015";
 preguntaids[57] = 17


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[58]= new Array();
 choices[58][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[58][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[58][2] = "Solamente soporta herramientas de control de versiones como CVS, Git y Clearcase.";
 choices[58][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[58] = choices[58][1];
 units[58] = "92";
 comments[58] = "Id Pregunta: 716. INTEGRACION CONTINUA";
 preguntaids[58] = 716


//  Id pregunta: 749 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;les de los siguientes principios de inspiraci&oacute;n en la funci&oacute;n gerencial NO incorpora la Ley 40/2015?";
 choices[59]= new Array();
 choices[59][0] = "Buena fe, confianza leg&iacute;tima y lealtad institucional.";
 choices[59][1] = "Calidad de los servicios p&uacute;blicos";
 choices[59][2] = "Responsabilidad por la gesti&oacute;n p&uacute;blica.";
 choices[59][3] = "Servicio efectivo a los ciudadanos";
 answers[59] = choices[59][1];
 units[59] = "18";
 comments[59] = "Id Pregunta: 749. Direcci&oacute;n p&uacute;blica";
 preguntaids[59] = 749


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[60]= new Array();
 choices[60][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[60][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[60][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[60][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[60] = choices[60][3];
 units[60] = "26";
 comments[60] = "Id Pregunta: 546. Gobernanza TIC";
 preguntaids[60] = 546


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[61]= "62)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[61]= new Array();
 choices[61][0] = "Quince miembros.";
 choices[61][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[61][2] = "Los miembros que determine el Consejo.";
 choices[61][3] = "Un Presidente y quince miembros.";
 answers[61] = choices[61][1];
 units[61] = "14";
 comments[61] = "Id Pregunta: 378. UNION EUROPEA";
 preguntaids[61] = 378


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[62]= "63)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[62]= new Array();
 choices[62][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[62][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[62][2] = "Se basan en sistemas distribuidos";
 choices[62][3] = "Se basan en el modelo de datos relacional";
 answers[62] = choices[62][2];
 units[62] = "73";
 comments[62] = "Id Pregunta: 102. ";
 preguntaids[62] = 102


//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[63]= "64)  Dos de los principios del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE son:";
 choices[63]= new Array();
 choices[63][0] = "Transparencia e innovaci&oacute;n";
 choices[63][1] = "Seguridad y reutilizaci&oacute;n";
 choices[63][2] = "Reutilizaci&oacute;n y buz&oacute;n de quejas y sugerencias";
 choices[63][3] = "Principio de solo una vez y transfronterizo de forma predeterminada";
 answers[63] = choices[63][3];
 units[63] = "28";
 comments[63] = "Id Pregunta: 743. Estrategia TIC";
 preguntaids[63] = 743


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[64]= "65)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[64]= new Array();
 choices[64][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[64][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[64][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[64][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[64] = choices[64][1];
 units[64] = "28";
 comments[64] = "Id Pregunta: 734. Estrategia TIC";
 preguntaids[64] = 734


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[65]= new Array();
 choices[65][0] = "Anualmente";
 choices[65][1] = "Bienalmente";
 choices[65][2] = "Cada cuatro a&ntilde;os";
 choices[65][3] = "No se define ninguna periodicidad";
 answers[65] = choices[65][1];
 units[65] = "19";
 comments[65] = "Id Pregunta: 594. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";
 preguntaids[65] = 594


//  Id pregunta: 384 Año de creación de pregunta: 2016
 questions[66]= "67)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[66]= new Array();
 choices[66][0] = "Sean dirigidas por mujeres";
 choices[66][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[66][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[66][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[66] = choices[66][2];
 units[66] = "14";
 comments[66] = "Id Pregunta: 384. POLITICAS DE IGUALDAD";
 preguntaids[66] = 384


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[67]= "68)  Las Universidades p&uacute;blicas:";
 choices[67]= new Array();
 choices[67][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[67][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[67][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[67][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[67] = choices[67][1];
 units[67] = "7";
 comments[67] = "Id Pregunta: 518. LEY 39/2015";
 preguntaids[67] = 518


//  Id pregunta: 200 Año de creación de pregunta: 2016
 questions[68]= "69)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[68]= new Array();
 choices[68][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[68][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[68][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[68][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[68] = choices[68][3];
 units[68] = "1";
 comments[68] = "Id Pregunta: 200. CONSTITUCION1978";
 preguntaids[68] = 200


//  Id pregunta: 67 Año de creación de pregunta: 2016
 questions[69]= "70)  En Internet, la entidad encargada de la coordinaci&oacute;n de los N&uacute;meros de Sistema Aut&oacute;nomo (Autonomous System Numbers - ASN) usados por varios protocolos de enrutamiento, es:";
 choices[69]= new Array();
 choices[69][0] = "IANA";
 choices[69][1] = "ISOC";
 choices[69][2] = "IETF";
 choices[69][3] = "IAB";
 answers[69] = choices[69][0];
 units[69] = "103";
 comments[69] = "Id Pregunta: 67. AGE A1 2015";
 preguntaids[69] = 67


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[70]= "71)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[70]= new Array();
 choices[70][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[70][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[70][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[70][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[70] = choices[70][2];
 units[70] = "26";
 comments[70] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";
 preguntaids[70] = 99


//  Id pregunta: 5 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale cu&aacute;l de los siguientes NO es uno de los principios de COBIT v5:";
 choices[71]= new Array();
 choices[71][0] = "Satisfacer las necesidades de las partes interesadas.";
 choices[71][1] = "Cubrir las necesidades del departamento de tecnolog&iacute;as de la informaci&oacute;n.";
 choices[71][2] = "Habilitar un enfoque hol&iacute;stico.";
 choices[71][3] = "Separar el gobierno de la gesti&oacute;n.";
 answers[71] = choices[71][1];
 units[71] = "101";
 comments[71] = "Id Pregunta: 5. AGE A1 2015";
 preguntaids[71] = 5


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[72]= new Array();
 choices[72][0] = "Permite al equipo reaccionar mejor ante imprevistos";
 choices[72][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[72][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[72][3] = "Ninguna de las anteriores";
 answers[72] = choices[72][1];
 units[72] = "34, 84";
 comments[72] = "Id Pregunta: 723. Metodologias &aacute;giles";
 preguntaids[72] = 723


//  Id pregunta: 467 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[73]= new Array();
 choices[73][0] = "Las respuestas a) y b) son correctas.";
 choices[73][1] = "Las respuestas a) y b) no son correctas.";
 choices[73][2] = "Contenido coherente con los planes sectoriales.";
 choices[73][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[73] = choices[73][0];
 units[73] = "10";
 comments[73] = "Id Pregunta: 467. PRESUPUESTOS GENERALES";
 preguntaids[73] = 467


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[74]= "75)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[74]= new Array();
 choices[74][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[74][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[74][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[74][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[74] = choices[74][2];
 units[74] = "73";
 comments[74] = "Id Pregunta: 654. ";
 preguntaids[74] = 654


