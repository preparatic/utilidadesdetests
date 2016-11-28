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

//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[0]= "1)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[0]= new Array();
 choices[0][0] = "los Secretarios de Estado";
 choices[0][1] = "los Ministros";
 choices[0][2] = "los Subsecretarios";
 choices[0][3] = "los Secretarios generales";
 answers[0] = choices[0][2];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 810. Ley 40/2015";


//  Id pregunta: 508 Año de creación de pregunta: 2016
 questions[1]= "2)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[1]= new Array();
 choices[1][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[1][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[1][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[1][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[1] = choices[1][3];
 units[1] = "10";
 comments[1] = "Id Pregunta: 508. PRESUPUESTOS GENERALES";


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[2]= new Array();
 choices[2][0] = "verbalmente";
 choices[2][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[2][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[2][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[2] = choices[2][2];
 units[2] = "7";
 comments[2] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 16 Año de creación de pregunta: 2016
 questions[3]= "4)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[3]= new Array();
 choices[3][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[3][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[3][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[3][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[3] = choices[3][3];
 units[3] = "19";
 comments[3] = "Id Pregunta: 16. AGE A1 2015";


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[4]= new Array();
 choices[4][0] = "Dos Cap&iacute;tulos.";
 choices[4][1] = "Tres Cap&iacute;tulos.";
 choices[4][2] = "Un Cap&iacute;tulo.";
 choices[4][3] = "Cuatro Cap&iacute;tulos.";
 answers[4] = choices[4][1];
 units[4] = "1";
 comments[4] = "Id Pregunta: 222. CONSTITUCION1978";


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[5]= "6)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[5]= new Array();
 choices[5][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[5][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[5][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[5][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[5] = choices[5][3];
 units[5] = "5";
 comments[5] = "Id Pregunta: 326. UNION EUROPEA";


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[6]= "7)  Los Reglamentos no se caracterizan por:";
 choices[6]= new Array();
 choices[6][0] = "No poseer alcance general.";
 choices[6][1] = "Ser obligatorios.";
 choices[6][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[6][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[6] = choices[6][0];
 units[6] = "5";
 comments[6] = "Id Pregunta: 363. UNION EUROPEA";


//  Id pregunta: 390 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[7]= new Array();
 choices[7][0] = "El Consejo Nacional de la Mujer.";
 choices[7][1] = "El Consejo de la Mujer.";
 choices[7][2] = "El Instituto de la Mujer.";
 choices[7][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[7] = choices[7][3];
 units[7] = "14";
 comments[7] = "Id Pregunta: 390. POLITICAS DE IGUALDAD";


//  Id pregunta: 59 Año de creación de pregunta: 2016
 questions[8]= "9)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[8]= new Array();
 choices[8][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[8][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[8][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[8][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[8] = choices[8][3];
 units[8] = "101";
 comments[8] = "Id Pregunta: 59. AGE A1 2015";


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[9]= new Array();
 choices[9][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[9][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[9][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[9][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[9] = choices[9][3];
 units[9] = "66";
 comments[9] = "Id Pregunta: 37. AGE A1 2015";


//  Id pregunta: 742 Año de creación de pregunta: 2016
 questions[10]= "11)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[10]= new Array();
 choices[10][0] = "Proveer de manera compartida servicios comunes";
 choices[10][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[10][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[10][3] = "Transparencia";
 answers[10] = choices[10][1];
 units[10] = "28";
 comments[10] = "Id Pregunta: 742. Estrategia TIC";


//  Id pregunta: 451 Año de creación de pregunta: 2016
 questions[11]= "12)  El cr&eacute;dito presupuestario es...";
 choices[11]= new Array();
 choices[11][0] = "El sujeto que realiza el gasto";
 choices[11][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[11][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[11][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[11] = choices[11][2];
 units[11] = "10";
 comments[11] = "Id Pregunta: 451. PRESUPUESTOS GENERALES";


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[12]= "13)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[12]= new Array();
 choices[12][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[12][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[12][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[12][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[12] = choices[12][3];
 units[12] = "12";
 comments[12] = "Id Pregunta: 130. Leyes modelo econ&oacute;mico";


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[13]= "14)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[13]= new Array();
 choices[13][0] = "Tres a&ntilde;os.";
 choices[13][1] = "Dos a&ntilde;os y medio.";
 choices[13][2] = "Cinco a&ntilde;os.";
 choices[13][3] = "Seis a&ntilde;os.";
 answers[13] = choices[13][3];
 units[13] = "5";
 comments[13] = "Id Pregunta: 291. UNION EUROPEA";


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[14]= "15)  Respecto a los servicios territoriales es correcto:";
 choices[14]= new Array();
 choices[14][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[14][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[14][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[14][3] = "ninguna es correcta";
 answers[14] = choices[14][0];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 820. Ley 40/2015";


//  Id pregunta: 534 Año de creación de pregunta: 2016
 questions[15]= "16)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[15]= new Array();
 choices[15][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[15][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[15][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[15][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[15] = choices[15][2];
 units[15] = "7";
 comments[15] = "Id Pregunta: 534. LEY 39/2015";


//  Id pregunta: 644 Año de creación de pregunta: 2016
 questions[16]= "17)  En Itil V3 la Gesti&oacute;n de la Cartera de Servicios pertenece a la fase de ciclo de vida:";
 choices[16]= new Array();
 choices[16][0] = "Dise&ntilde;o del servicio.";
 choices[16][1] = "Transici&oacute;n del servicio.";
 choices[16][2] = "Estrategia del servicio.";
 choices[16][3] = "Operaci&oacute;n del servicio.";
 answers[16] = choices[16][2];
 units[16] = "101";
 comments[16] = "Id Pregunta: 644. Junta de Extremadura A1 2015";


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[17]= "18)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[17]= new Array();
 choices[17][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[17][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[17][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[17][3] = "Todas son correctas.";
 answers[17] = choices[17][3];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 834. Ley 40/2015";


//  Id pregunta: 150 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[18]= new Array();
 choices[18][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[18][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[18][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[18][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[18] = choices[18][2];
 units[18] = "7";
 comments[18] = "Id Pregunta: 150. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 292 Año de creación de pregunta: 2016
 questions[19]= "20)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[19]= new Array();
 choices[19][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[19][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[19][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[19][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[19] = choices[19][1];
 units[19] = "5";
 comments[19] = "Id Pregunta: 292. UNION EUROPEA";


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[20]= new Array();
 choices[20][0] = "732";
 choices[20][1] = "626";
 choices[20][2] = "786";
 choices[20][3] = "360";
 answers[20] = choices[20][2];
 units[20] = "5";
 comments[20] = "Id Pregunta: 337. UNION EUROPEA";


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[21]= "22)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[21]= new Array();
 choices[21][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[21][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[21][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[21][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[21] = choices[21][2];
 units[21] = "19";
 comments[21] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 842 Año de creación de pregunta: 2016
 questions[22]= "23)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[22]= new Array();
 choices[22][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[22][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[22][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[22][3] = "Todas son correctas.";
 answers[22] = choices[22][1];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 842. Ley 40/2015";


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[23]= "24)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[23]= new Array();
 choices[23][0] = "Infrastructure as a Service (IaaS)";
 choices[23][1] = "Platform as a Service (PaaS)";
 choices[23][2] = "Software as a Service (SaaS)";
 choices[23][3] = "Application as a Service (AaaS)";
 answers[23] = choices[23][1];
 units[23] = "52";
 comments[23] = "Id Pregunta: 63. AGE A1 2015";


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[24]= new Array();
 choices[24][0] = "Data Mining (miner&iacute;a de datos)";
 choices[24][1] = "Business Intelligence (inteligencia de negocio)";
 choices[24][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[24][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[24] = choices[24][1];
 units[24] = "72";
 comments[24] = "Id Pregunta: 68. AGE A1 2015";


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[25]= "26)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[25]= new Array();
 choices[25][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[25][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[25][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[25][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[25] = choices[25][3];
 units[25] = "77";
 comments[25] = "Id Pregunta: 48. AGE A1 2015";


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[26]= "27)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[26]= new Array();
 choices[26][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[26][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[26][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[26][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[26] = choices[26][3];
 units[26] = "10";
 comments[26] = "Id Pregunta: 487. PRESUPUESTOS GENERALES";


//  Id pregunta: 771 Año de creación de pregunta: 2016
 questions[27]= "28)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[27]= new Array();
 choices[27][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[27][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[27][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[27][3] = "todas son correctas";
 answers[27] = choices[27][3];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 771. Ley 40/2015";


//  Id pregunta: 442 Año de creación de pregunta: 2016
 questions[28]= "29)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:";
 choices[28]= new Array();
 choices[28][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[28][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[28][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[28][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[28] = choices[28][3];
 units[28] = "43";
 comments[28] = "Id Pregunta: 442. SERVICIOS COMUNES";


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[29]= new Array();
 choices[29][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[29][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[29][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[29][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[29] = choices[29][1];
 units[29] = "18, 20";
 comments[29] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[30]= new Array();
 choices[30][0] = "Art&iacute;culo 9.1 CE.";
 choices[30][1] = "Art&iacute;culo 53 CE.";
 choices[30][2] = "Art&iacute;culo 14 CE.";
 choices[30][3] = "Art&iacute;culo 16 CE.";
 answers[30] = choices[30][2];
 units[30] = "14";
 comments[30] = "Id Pregunta: 406. POLITICAS DE IGUALDAD";


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[31]= new Array();
 choices[31][0] = "Neo4J ";
 choices[31][1] = "OrientDB ";
 choices[31][2] = "InfoGrid ";
 choices[31][3] = "SimpleDB";
 answers[31] = choices[31][3];
 units[31] = "73";
 comments[31] = "Id Pregunta: 655. ";


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[32]= "33)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[32]= new Array();
 choices[32][0] = "ASF-AL (Apache License 2.0)";
 choices[32][1] = "EUPL (European Union Public License)";
 choices[32][2] = "LGPL (Lesser General Public License)";
 choices[32][3] = "MIT(MIT License)";
 answers[32] = choices[32][1];
 units[32] = "43";
 comments[32] = "Id Pregunta: 32. AGE A1 2015";


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[33]= "34)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[33]= new Array();
 choices[33][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[33][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[33][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[33][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[33] = choices[33][3];
 units[33] = "10";
 comments[33] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";


//  Id pregunta: 28 Año de creación de pregunta: 2016
 questions[34]= "35)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[34]= new Array();
 choices[34][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[34][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[34][2] = "Crea una copia del proceso que hace la llamada.";
 choices[34][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[34] = choices[34][2];
 units[34] = "57";
 comments[34] = "Id Pregunta: 28. AGE A1 2015";


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[35]= "36)  La recusaci&oacute;n se plantea...";
 choices[35]= new Array();
 choices[35][0] = "Antes de iniciado el procedimiento";
 choices[35][1] = "Una vez iniciado el procedimiento";
 choices[35][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[35][3] = "En cualquier momento del procedimiento";
 answers[35] = choices[35][0];
 units[35] = "4, 7, 8, 9";
 comments[35] = "Id Pregunta: 829. Ley 40/2015";


//  Id pregunta: 755 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qui&eacute;n realiza el seguimiento peri&oacute;dico del cumplimiento de los objetivos de la Agenda Digital para Espa&ntilde;a?";
 choices[36]= new Array();
 choices[36][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital (SGAD)";
 choices[36][1] = "La Asociaci&oacute;n Espa&ntilde;ola de Normalizaci&oacute;n y Certificaci&oacute;n (AENOR)";
 choices[36][2] = "El Observatorio Nacional de Telecomunicaciones y Sociedad de la Informaci&oacute;n (ONTSI)";
 choices[36][3] = "El Observatorio de Administraci&oacute;n Electr&oacute;nica (OBSAE)";
 answers[36] = choices[36][2];
 units[36] = "19";
 comments[36] = "Id Pregunta: 755. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[37]= "38)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[37]= new Array();
 choices[37][0] = "Son vinculantes solamente.";
 choices[37][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[37][2] = "Son preceptivos y vinculantes.";
 choices[37][3] = "Son preceptivos y no vinculantes.";
 answers[37] = choices[37][1];
 units[37] = "5";
 comments[37] = "Id Pregunta: 355. UNION EUROPEA";


//  Id pregunta: 445 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l no es una funcionalidad que incorpora la versi&oacute;n 3.5 de Acceda?";
 choices[38]= new Array();
 choices[38][0] = "Gesti&oacute;n de notificaciones pendientes, notificadas y rehusadas (de forma expresa o vencido el plazo de caducidad).";
 choices[38][1] = "Remisi&oacute;n a Notific@, desde el m&oacute;dulo de gesti&oacute;n de ACCEDA, de las notificaciones que se emitan como parte de la tramitaci&oacute;n de los expedientes.";
 choices[38][2] = "Gesti&oacute;n de notificaciones pendientes, notificadas y rehusadas (de forma expresa o sin haber vencido el plazo de caducidad).";
 choices[38][3] = "Parametrizaci&oacute;n de las opciones de env&iacute;o: canal de notificaci&oacute;n - Sede-e ACCEDA y Carpeta Ciudadana; DEH obligatorio; DEH voluntario / env&iacute;o postal, etc.";
 answers[38] = choices[38][2];
 units[38] = "43";
 comments[38] = "Id Pregunta: 445. SERVICIOS COMUNES";


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[39]= "40)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[39]= new Array();
 choices[39][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[39][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[39][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[39][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[39] = choices[39][3];
 units[39] = "106";
 comments[39] = "Id Pregunta: 74. AGE A1 2015";


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[40]= "41)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[40]= new Array();
 choices[40][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[40][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[40][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[40][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[40] = choices[40][2];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 764. Ley 40/2015";


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[41]= new Array();
 choices[41][0] = "El Ministro de Econom&iacute;a.";
 choices[41][1] = "El Gobierno.";
 choices[41][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[41][3] = "El Presidente del Gobierno.";
 answers[41] = choices[41][1];
 units[41] = "10";
 comments[41] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";


//  Id pregunta: 682 Año de creación de pregunta: 2016
 questions[42]= "43)  Seg&uacute;n el Real Decreto Ley 5/2013, de 15 de marzo, de medidas para favorecer la continuidad de la vida laboral de los trabajadores de mayor edad y promover el envejecimiento activo:";
 choices[42]= new Array();
 choices[42][0] = "La cuant&iacute;a de la pensi&oacute;n de jubilaci&oacute;n compatible con el trabajo ser&aacute; equivalente al 50 por 100 del importe resultante en el reconocimiento inicial, una vez aplicado, si procede, el l&iacute;mite m&aacute;ximo de pensi&oacute;n p&uacute;blica, o del que se est&eacute; percibiendo, en el momento de inicio de la compatibilidad con el trabajo, excluido, en todo caso, el complemento por m&iacute;nimos, cualquiera que sea la jornada laboral o la actividad que realice el pensionista.";
 choices[42][1] = "El trabajo compatible debe realizarse a tiempo parcial.";
 choices[42][2] = "Finalizada la relaci&oacute;n laboral por cuenta ajena o producido el cese en la actividad por cuenta propia, se restablecer&aacute; el percibo &iacute;ntegro de la pensi&oacute;n de jubilaci&oacute;n transcurridos 12 meses de la finalizaci&oacute;n de la relaci&oacute;n laboral.";
 choices[42][3] = "El acceso a la pensi&oacute;n podr&aacute; tener lugar hasta 5 a&ntilde;os antes de la edad que en cada caso resulte de aplicaci&oacute;n.";
 answers[42] = choices[42][0];
 units[42] = "14";
 comments[42] = "Id Pregunta: 682. Pensiones";


//  Id pregunta: 619 Año de creación de pregunta: 2016
 questions[43]= "44)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[43]= new Array();
 choices[43][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[43][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[43][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[43][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[43] = choices[43][0];
 units[43] = "84";
 comments[43] = "Id Pregunta: 619. Junta de Extremadura A1 2015";


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[44]= "45)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[44]= new Array();
 choices[44][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[44][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[44][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[44][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[44] = choices[44][0];
 units[44] = "19";
 comments[44] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[45]= "46)  En el Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP el principio de transparencia:";
 choices[45]= new Array();
 choices[45][0] = "El seguimiento de la actividad de los funcionarios aumenta la eficacia de los servicios p&uacute;blicos.";
 choices[45][1] = "La transparencia facilita al ciudadano el acceso a los servicios p&uacute;blicos.";
 choices[45][2] = "Una continua monitorizaci&oacute;n de la actividad, junto a la evaluaci&oacute;n y difusi&oacute;n de resultados incrementa la satisfacci&oacute;n de los ciudadanos.";
 choices[45][3] = "El seguimiento y control de la actividad pol&iacute;tica disminuye las actividades ligadas a la corrupci&oacute;n.";
 answers[45] = choices[45][2];
 units[45] = "28";
 comments[45] = "Id Pregunta: 736. Estrategia TIC";


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[46]= new Array();
 choices[46][0] = "Consumidores";
 choices[46][1] = "PYMES y Start-ups";
 choices[46][2] = "La Industria";
 choices[46][3] = "Todos los anteriores";
 answers[46] = choices[46][3];
 units[46] = "17";
 comments[46] = "Id Pregunta: 557. Mercado &Uacute;nico Digital";


//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[47]= "48)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[47]= new Array();
 choices[47][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[47][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[47][2] = "A y B son correctas.";
 choices[47][3] = "A y B son incorrectas.";
 answers[47] = choices[47][2];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 844. Ley 40/2015";


//  Id pregunta: 237 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[48]= new Array();
 choices[48][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[48][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[48][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[48][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[48] = choices[48][2];
 units[48] = "1";
 comments[48] = "Id Pregunta: 237. CONSTITUCION1978";


//  Id pregunta: 608 Año de creación de pregunta: 2016
 questions[49]= "50)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[49]= new Array();
 choices[49][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[49][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[49][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[49][3] = "Todas las respuestas son correctas.";
 answers[49] = choices[49][1];
 units[49] = "101";
 comments[49] = "Id Pregunta: 608. Junta de Extremadura A1 2015";


//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[50]= "51)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[50]= new Array();
 choices[50][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[50][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[50][2] = "Absoluta frente a cualquier otro gasto.";
 choices[50][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[50] = choices[50][2];
 units[50] = "10";
 comments[50] = "Id Pregunta: 511. PRESUPUESTOS GENERALES";


//  Id pregunta: 249 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[51]= new Array();
 choices[51][0] = "Art&iacute;culo 16.2.";
 choices[51][1] = "Art&iacute;culo 17.1.";
 choices[51][2] = "Art&iacute;culo 18.1.";
 choices[51][3] = "Art&iacute;culo 18.2.";
 answers[51] = choices[51][0];
 units[51] = "1";
 comments[51] = "Id Pregunta: 249. CONSTITUCION1978";


//  Id pregunta: 294 Año de creación de pregunta: 2016
 questions[52]= "53)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[52]= new Array();
 choices[52][0] = "Al Consejo Europeo.";
 choices[52][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[52][2] = "A la Comisi&oacute;n Europea.";
 choices[52][3] = "Al Parlamento Europeo.";
 answers[52] = choices[52][2];
 units[52] = "5";
 comments[52] = "Id Pregunta: 294. UNION EUROPEA";


//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[53]= "54)  Dos de los principios del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE son:";
 choices[53]= new Array();
 choices[53][0] = "Transparencia e innovaci&oacute;n";
 choices[53][1] = "Seguridad y reutilizaci&oacute;n";
 choices[53][2] = "Reutilizaci&oacute;n y buz&oacute;n de quejas y sugerencias";
 choices[53][3] = "Principio de solo una vez y transfronterizo de forma predeterminada";
 answers[53] = choices[53][3];
 units[53] = "28";
 comments[53] = "Id Pregunta: 743. Estrategia TIC";


//  Id pregunta: 839 Año de creación de pregunta: 2016
 questions[54]= "55)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[54]= new Array();
 choices[54][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[54][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[54][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[54][3] = "Todas son correctas.";
 answers[54] = choices[54][3];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 839. Ley 40/2015";


//  Id pregunta: 795 Año de creación de pregunta: 2016
 questions[55]= "56)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[55]= new Array();
 choices[55][0] = "un &oacute;rgano superior";
 choices[55][1] = "un &oacute;rgano directivo";
 choices[55][2] = "un &oacute;rgano superior o directivo";
 choices[55][3] = "ninguna es correcta";
 answers[55] = choices[55][2];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 795. Ley 40/2015";


//  Id pregunta: 605 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[56]= new Array();
 choices[56][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[56][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[56][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[56][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[56] = choices[56][3];
 units[56] = "101";
 comments[56] = "Id Pregunta: 605. Junta de Extremadura A1 2015";


//  Id pregunta: 225 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[57]= new Array();
 choices[57][0] = "las Cortes generales.";
 choices[57][1] = "los partidos pol&iacute;ticos.";
 choices[57][2] = "los sindicatos.";
 choices[57][3] = "las Comunidades Aut&oacute;nomas.";
 answers[57] = choices[57][1];
 units[57] = "1";
 comments[57] = "Id Pregunta: 225. CONSTITUCION1978";


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


//  Id pregunta: 623 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n el paradigma de Orientaci&oacute;n a Objetos, la herencia posibilita que:";
 choices[59]= new Array();
 choices[59][0] = "Cualquier cambio en los datos y operaciones contenidas dentro de una superclase es heredado inmediatamente por todas las subclases que se derivan de la superclase.";
 choices[59][1] = "Cualquier cambio en las operaciones y datos de la superclase no se refleja en todas las subclases.";
 choices[59][2] = "Cualquier cambio en una de las subclases que se heredan de la superclase se refleja en sus clases hermanas.";
 choices[59][3] = "En el paradigma de Orientaci&oacute;n a Objetos no existe la herencia.";
 answers[59] = choices[59][0];
 units[59] = "89";
 comments[59] = "Id Pregunta: 623. Junta de Extremadura A1 2015";


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[60]= "61)  En el sistema operativo Unix/Linux, el comando id:";
 choices[60]= new Array();
 choices[60][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[60][1] = "El comando id no existe.";
 choices[60][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[60][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[60] = choices[60][0];
 units[60] = "57";
 comments[60] = "Id Pregunta: 639. Junta de Extremadura A1 2015";


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[61]= "62)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[61]= new Array();
 choices[61][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[61][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[61][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[61][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[61] = choices[61][2];
 units[61] = "45";
 comments[61] = "Id Pregunta: 601. Junta de Extremadura A1 2015";


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[62]= new Array();
 choices[62][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[62][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[62][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[62][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[62] = choices[62][1];
 units[62] = "19";
 comments[62] = "Id Pregunta: 757. Agenda Digital para Espa&ntilde;a";


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


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[64]= "65)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[64]= new Array();
 choices[64][0] = "Un plan de igualdad.";
 choices[64][1] = "Un informe de impacto de g&eacute;nero.";
 choices[64][2] = "Un programa de igualdad.";
 choices[64][3] = "Todas son correctas.";
 answers[64] = choices[64][1];
 units[64] = "14";
 comments[64] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";


//  Id pregunta: 87 Año de creación de pregunta: 2016
 questions[65]= "66)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[65]= new Array();
 choices[65][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[65][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[65][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[65][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[65] = choices[65][2];
 units[65] = "48";
 comments[65] = "Id Pregunta: 87. AGE A1 2015";


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[66]= new Array();
 choices[66][0] = "No, en ning&uacute;n caso.";
 choices[66][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[66][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[66][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[66] = choices[66][3];
 units[66] = "1";
 comments[66] = "Id Pregunta: 188. CONSTITUCION1978";


//  Id pregunta: 95 Año de creación de pregunta: 2016
 questions[67]= "68)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[67]= new Array();
 choices[67][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[67][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[67][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[67][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[67] = choices[67][3];
 units[67] = "89";
 comments[67] = "Id Pregunta: 95. AGE A1 2015";


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[68]= "69)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[68]= new Array();
 choices[68][0] = "Las sociedades mercantiles estatales.";
 choices[68][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[68][2] = "Las respuestas a) y b) son correctas.";
 choices[68][3] = "Las respuestas a) y b) no son correctas.";
 answers[68] = choices[68][2];
 units[68] = "10";
 comments[68] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";


//  Id pregunta: 808 Año de creación de pregunta: 2016
 questions[69]= "70)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[69]= new Array();
 choices[69][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[69][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[69][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[69][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[69] = choices[69][1];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 808. Ley 40/2015";


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[70]= new Array();
 choices[70][0] = "Anual";
 choices[70][1] = "Mensual";
 choices[70][2] = "Semestral";
 choices[70][3] = "Trimestral";
 answers[70] = choices[70][3];
 units[70] = "15";
 comments[70] = "Id Pregunta: 119. ";


//  Id pregunta: 612 Año de creación de pregunta: 2016
 questions[71]= "72)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[71]= new Array();
 choices[71][0] = "GROUP BY.";
 choices[71][1] = "COUNT.";
 choices[71][2] = "WHERE.";
 choices[71][3] = "DISTINCT.";
 answers[71] = choices[71][0];
 units[71] = "60";
 comments[71] = "Id Pregunta: 612. Junta de Extremadura A1 2015";


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[72]= "73)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[72]= new Array();
 choices[72][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[72][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[72][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[72][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[72] = choices[72][2];
 units[72] = "12";
 comments[72] = "Id Pregunta: 136. Leyes modelo econ&oacute;mico";


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[73]= "74)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[73]= new Array();
 choices[73][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[73][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[73][2] = "Ambas son correctas.";
 choices[73][3] = "La A y B son incorrectas.";
 answers[73] = choices[73][2];
 units[73] = "14";
 comments[73] = "Id Pregunta: 417. POLITICAS DE IGUALDAD";


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[74]= "75)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[74]= new Array();
 choices[74][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[74][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[74][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[74][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[74] = choices[74][2];
 units[74] = "7";
 comments[74] = "Id Pregunta: 512. LEY 39/2015";


