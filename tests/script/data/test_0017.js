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

//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[0]= "1)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[0]= new Array();
 choices[0][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[0][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[0][2] = "Veintisiete Jueces y ocho Abogados Generales.";
 choices[0][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[0] = choices[0][2];
 units[0] = "5";
 comments[0] = "Id Pregunta: 354. UNION EUROPEA";


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[1]= "2)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[1]= new Array();
 choices[1][0] = "El Rey.";
 choices[1][1] = "El Jefe del Estado.";
 choices[1][2] = "El Gobierno.";
 choices[1][3] = "El Presidente del Gobierno.";
 answers[1] = choices[1][2];
 units[1] = "1";
 comments[1] = "Id Pregunta: 208. CONSTITUCION1978";


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[2]= "3)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[2]= new Array();
 choices[2][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[2][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[2][2] = "Las respuestas a) b) no son correctas.";
 choices[2][3] = "Las respuestas a) y b) son correctas.";
 answers[2] = choices[2][3];
 units[2] = "10";
 comments[2] = "Id Pregunta: 480. PRESUPUESTOS GENERALES";


//  Id pregunta: 717 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;A trav&eacute;s de qu&eacute; empresa surgen las metodolog&iacute;as lean?";
 choices[3]= new Array();
 choices[3][0] = "Ford";
 choices[3][1] = "Google";
 choices[3][2] = "Toyota";
 choices[3][3] = "Facebook";
 answers[3] = choices[3][2];
 units[3] = "34";
 comments[3] = "Id Pregunta: 717. Metodologias Lean";


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[4]= "5)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[4]= new Array();
 choices[4][0] = "Windows Phone";
 choices[4][1] = "Blackberry";
 choices[4][2] = "iOS";
 choices[4][3] = "Android";
 answers[4] = choices[4][3];
 units[4] = "59";
 comments[4] = "Id Pregunta: 64. AGE A1 2015";


//  Id pregunta: 284 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale la respuesta falsa:";
 choices[5]= new Array();
 choices[5][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[5][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[5][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[5][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[5] = choices[5][2];
 units[5] = "5";
 comments[5] = "Id Pregunta: 284. UNION EUROPEA";


//  Id pregunta: 351 Año de creación de pregunta: 2016
 questions[6]= "7)  La sede del Parlamento Europeo se encuentra en:";
 choices[6]= new Array();
 choices[6][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[6][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[6][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[6][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[6] = choices[6][1];
 units[6] = "5";
 comments[6] = "Id Pregunta: 351. UNION EUROPEA";


//  Id pregunta: 584 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[7]= new Array();
 choices[7][0] = "Bienalmente";
 choices[7][1] = "Anualmente";
 choices[7][2] = "Semestralmente";
 choices[7][3] = "Cada cuatro a&ntilde;os";
 answers[7] = choices[7][1];
 units[7] = "19";
 comments[7] = "Id Pregunta: 584. Estrategia TIC";


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[8]= new Array();
 choices[8][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[8][1] = "Auditor&iacute;a operativa.";
 choices[8][2] = "Auditor&iacute;a de cumplimiento.";
 choices[8][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[8] = choices[8][2];
 units[8] = "10";
 comments[8] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";


//  Id pregunta: 671 Año de creación de pregunta: 2016
 questions[9]= "10)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[9]= new Array();
 choices[9][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[9][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[9][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[9][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[9] = choices[9][0];
 units[9] = "7";
 comments[9] = "Id Pregunta: 671. T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 277 Año de creación de pregunta: 2016
 questions[10]= "11)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[10]= new Array();
 choices[10][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[10][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[10][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[10][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[10] = choices[10][2];
 units[10] = "22";
 comments[10] = "Id Pregunta: 277. LEY DE TRANSPARENCIA";


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[11]= "12)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[11]= new Array();
 choices[11][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[11][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[11][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[11][3] = "Todos las anteriores son ciertas.";
 answers[11] = choices[11][3];
 units[11] = "12";
 comments[11] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";


//  Id pregunta: 552 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[12]= new Array();
 choices[12][0] = "Establecer redes de telecomunicaciones continentales";
 choices[12][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[12][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[12][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[12] = choices[12][0];
 units[12] = "17";
 comments[12] = "Id Pregunta: 552. Mercado &Uacute;nico Digital";


//  Id pregunta: 609 Año de creación de pregunta: 2016
 questions[13]= "14)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[13]= new Array();
 choices[13][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[13][1] = "Clasificaci&oacute;n por cuenta.";
 choices[13][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[13][3] = "Clasificaci&oacute;n por intercambio.";
 answers[13] = choices[13][3];
 units[13] = "56";
 comments[13] = "Id Pregunta: 609. Junta de Extremadura A1 2015";


//  Id pregunta: 604 Año de creación de pregunta: 2016
 questions[14]= "15)  ITIL v3, define:";
 choices[14]= new Array();
 choices[14][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[14][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[14][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[14][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[14] = choices[14][0];
 units[14] = "101";
 comments[14] = "Id Pregunta: 604. Junta de Extremadura A1 2015";


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[15]= "16)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[15]= new Array();
 choices[15][0] = "El Presidente del Congreso de los Diputados.";
 choices[15][1] = "El Presidente del Gobierno.";
 choices[15][2] = "El Rey.";
 choices[15][3] = "El Consejo de Ministros.";
 answers[15] = choices[15][0];
 units[15] = "1";
 comments[15] = "Id Pregunta: 231. CONSTITUCION1978";


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[16]= "17)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[16]= new Array();
 choices[16][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[16][1] = "los Subdelegados del Gobierno en las provincias";
 choices[16][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[16][3] = "a y b son correctas";
 answers[16] = choices[16][3];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 778. Ley 40/2015";


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[17]= new Array();
 choices[17][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[17][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[17][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[17][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[17] = choices[17][3];
 units[17] = "22";
 comments[17] = "Id Pregunta: 712. Ley de transparencia";


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[18]= "19)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[18]= new Array();
 choices[18][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[18][1] = "Ninguna de las respuestas es correcta.";
 choices[18][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[18][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[18] = choices[18][0];
 units[18] = "5";
 comments[18] = "Id Pregunta: 334. UNION EUROPEA";


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[19]= new Array();
 choices[19][0] = "Cinco.";
 choices[19][1] = "Dos.";
 choices[19][2] = "Cuatro.";
 choices[19][3] = "Siete.";
 answers[19] = choices[19][0];
 units[19] = "1";
 comments[19] = "Id Pregunta: 213. CONSTITUCION1978";


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[20]= "21)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[20]= new Array();
 choices[20][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[20][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[20][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[20][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[20] = choices[20][1];
 units[20] = "63";
 comments[20] = "Id Pregunta: 611. Junta de Extremadura A1 2015";


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[21]= new Array();
 choices[21][0] = "ISO/IEC 31000";
 choices[21][1] = "ISO/IEC 14000";
 choices[21][2] = "ISO/IEC 38500";
 choices[21][3] = "ISO/IEC 18000";
 answers[21] = choices[21][2];
 units[21] = "26";
 comments[21] = "Id Pregunta: 543. Gobernanza TIC";


//  Id pregunta: 760 Año de creación de pregunta: 2016
 questions[22]= "23)  Las Administraciones P&uacute;blicas:";
 choices[22]= new Array();
 choices[22][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[22][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[22][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[22][3] = "todas son correctas";
 answers[22] = choices[22][1];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 760. Ley 40/2015";


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[23]= "24)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[23]= new Array();
 choices[23][0] = "Son vinculantes solamente.";
 choices[23][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[23][2] = "Son preceptivos y vinculantes.";
 choices[23][3] = "Son preceptivos y no vinculantes.";
 answers[23] = choices[23][1];
 units[23] = "5";
 comments[23] = "Id Pregunta: 355. UNION EUROPEA";


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[24]= new Array();
 choices[24][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[24][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[24][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[24][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[24] = choices[24][3];
 units[24] = "22";
 comments[24] = "Id Pregunta: 120. ";


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


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[26]= new Array();
 choices[26][0] = "117.5";
 choices[26][1] = "117.1";
 choices[26][2] = "116";
 choices[26][3] = "15";
 answers[26] = choices[26][0];
 units[26] = "1";
 comments[26] = "Id Pregunta: 260. CONSTITUCION1978";


//  Id pregunta: 626 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[27]= new Array();
 choices[27][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[27][1] = "La Direcci&oacute;n de la Competencia.";
 choices[27][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[27][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[27] = choices[27][0];
 units[27] = "121";
 comments[27] = "Id Pregunta: 626. Junta de Extremadura A1 2015";


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[28]= "29)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[28]= new Array();
 choices[28][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[28][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[28][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[28][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[28] = choices[28][2];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 825. Ley 40/2015";


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[29]= "30)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[29]= new Array();
 choices[29][0] = "Ejecuci&oacute;n";
 choices[29][1] = "Adjudicaci&oacute;n";
 choices[29][2] = "Licitaci&oacute;n";
 choices[29][3] = "Formalizaci&oacute;n";
 answers[29] = choices[29][3];
 units[29] = "37";
 comments[29] = "Id Pregunta: 69. AGE A1 2015";


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[30]= "31)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[30]= new Array();
 choices[30][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[30][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[30][2] = "El Presidente del Gobierno";
 choices[30][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[30] = choices[30][1];
 units[30] = "26";
 comments[30] = "Id Pregunta: 549. Gobernanza TIC";


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;les de los siguientes principios de inspiraci&oacute;n en la funci&oacute;n gerencial NO incorpora la Ley 40/2015?";
 choices[31]= new Array();
 choices[31][0] = "Buena fe, confianza leg&iacute;tima y lealtad institucional.";
 choices[31][1] = "Calidad de los servicios p&uacute;blicos";
 choices[31][2] = "Responsabilidad por la gesti&oacute;n p&uacute;blica.";
 choices[31][3] = "Servicio efectivo a los ciudadanos";
 answers[31] = choices[31][1];
 units[31] = "18, 20";
 comments[31] = "Id Pregunta: 747. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 376 Año de creación de pregunta: 2016
 questions[32]= "33)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[32]= new Array();
 choices[32][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[32][1] = "Personas con nacionalidad europea.";
 choices[32][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[32][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[32] = choices[32][3];
 units[32] = "5";
 comments[32] = "Id Pregunta: 376. UNION EUROPEA";


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[33]= new Array();
 choices[33][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[33][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[33][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[33][3] = "El pago de subsidios a parados";
 answers[33] = choices[33][3];
 units[33] = "15";
 comments[33] = "Id Pregunta: 116. ";


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[34]= "35)  La soberan&iacute;a nacional reside en:";
 choices[34]= new Array();
 choices[34][0] = "el Parlamento nacional.";
 choices[34][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[34][2] = "el pueblo espa&ntilde;ol.";
 choices[34][3] = "el Congreso y el Senado.";
 answers[34] = choices[34][3];
 units[34] = "1";
 comments[34] = "Id Pregunta: 255. CONSTITUCION1978";


//  Id pregunta: 675 Año de creación de pregunta: 2016
 questions[35]= "36)  En referencia al proyecto ANDES, para la comunicaci&oacute;n telem&aacute;tica de Nacimientos desde Centros Sanitarios a Registros Civiles, indique cual de las siguientes afirmaciones es falsa:";
 choices[35]= new Array();
 choices[35][0] = "Tiene sustento legal de acuerdo a la Ley 19/2015, de 13 de julio, de medidas de reforma administrativa en el &aacute;mbito de la Administraci&oacute;n de Justicia y del Registro Civil.";
 choices[35][1] = "Se inicia a partir de su propuesta en CORA (Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas).";
 choices[35][2] = "Reutiliza el servicio horizontal ACCEDA en modo cloud, lo cual ha facilitado la pronta puesta en marcha de la soluci&oacute;n.";
 choices[35][3] = "La utilizaci&oacute;n de ANDES por parte de los hospitales es completamente transparente, sin necesidad de realizar pasos previos para su despliegue.";
 answers[35] = choices[35][3];
 units[35] = "47";
 comments[35] = "Id Pregunta: 675. Inscripci&oacute;n autom&aacute;tica nacimientos";


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[36]= "37)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[36]= new Array();
 choices[36][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[36][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[36][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[36][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[36] = choices[36][3];
 units[36] = "44";
 comments[36] = "Id Pregunta: 17. AGE A1 2015";


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[37]= "38)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[37]= new Array();
 choices[37][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[37][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[37][2] = "Los interesados en el procedimiento";
 choices[37][3] = "Las alternativas b) y c) son correctas";
 answers[37] = choices[37][1];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 814. Ley 40/2015";


//  Id pregunta: 92 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[38]= new Array();
 choices[38][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[38][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[38][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[38][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[38] = choices[38][0];
 units[38] = "48";
 comments[38] = "Id Pregunta: 92. AGE A1 2015";


//  Id pregunta: 781 Año de creación de pregunta: 2016
 questions[39]= "40)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[39]= new Array();
 choices[39][0] = "los Ministros y los Secretarios de Estado";
 choices[39][1] = "los Subsecretarios y Secretarios generales";
 choices[39][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[39][3] = "los Directores generales";
 answers[39] = choices[39][2];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 781. Ley 40/2015";


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[40]= "41)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[40]= new Array();
 choices[40][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[40][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[40][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[40][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[40] = choices[40][3];
 units[40] = "14";
 comments[40] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[41]= new Array();
 choices[41][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[41][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[41][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[41][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[41] = choices[41][0];
 units[41] = "15";
 comments[41] = "Id Pregunta: 114. ";


//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[42]= "43)  JNDI se usa para el acceso a:";
 choices[42]= new Array();
 choices[42][0] = "Datos de ficheros";
 choices[42][1] = "Sistemas gestores de bases de datos";
 choices[42][2] = "Directorios de nombres";
 choices[42][3] = "Colas de mensajer&iacute;a";
 answers[42] = choices[42][2];
 units[42] = "64";
 comments[42] = "Id Pregunta: 13. AGE A1 2015";


//  Id pregunta: 22 Año de creación de pregunta: 2016
 questions[43]= "44)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[43]= new Array();
 choices[43][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[43][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[43][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[43][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[43] = choices[43][1];
 units[43] = "26";
 comments[43] = "Id Pregunta: 22. AGE A1 2015";


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[44]= "45)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[44]= new Array();
 choices[44][0] = "por Real Decreto";
 choices[44][1] = "reglamentariamente";
 choices[44][2] = "mediante Ley";
 choices[44][3] = "ninguna es correcta";
 answers[44] = choices[44][1];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 805. Ley 40/2015";


//  Id pregunta: 532 Año de creación de pregunta: 2016
 questions[45]= "46)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[45]= new Array();
 choices[45][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[45][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[45][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[45][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[45] = choices[45][2];
 units[45] = "7";
 comments[45] = "Id Pregunta: 532. LEY 39/2015";


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[46]= "47)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[46]= new Array();
 choices[46][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[46][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[46][2] = "Ambas son correctas.";
 choices[46][3] = "La A y B son incorrectas.";
 answers[46] = choices[46][2];
 units[46] = "14";
 comments[46] = "Id Pregunta: 417. POLITICAS DE IGUALDAD";


//  Id pregunta: 591 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[47]= new Array();
 choices[47][0] = "La CETIC";
 choices[47][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[47][2] = "La DTIC";
 choices[47][3] = "El MHFP";
 answers[47] = choices[47][0];
 units[47] = "19";
 comments[47] = "Id Pregunta: 591. Estrategia TIC";


//  Id pregunta: 71 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[48]= new Array();
 choices[48][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[48][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[48][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[48][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[48] = choices[48][0];
 units[48] = "86";
 comments[48] = "Id Pregunta: 71. AGE A1 2015";


//  Id pregunta: 364 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[49]= new Array();
 choices[49][0] = "El 1 de junio de 1999.";
 choices[49][1] = "El 1 de mayo de 1999.";
 choices[49][2] = "El 1 de abril de 1999.";
 choices[49][3] = "El 1 de marzo de 1999.";
 answers[49] = choices[49][1];
 units[49] = "5";
 comments[49] = "Id Pregunta: 364. UNION EUROPEA";


//  Id pregunta: 660 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[50]= new Array();
 choices[50][0] = "Avro";
 choices[50][1] = "Sqoop";
 choices[50][2] = "UIMA";
 choices[50][3] = "Jaql";
 answers[50] = choices[50][1];
 units[50] = "73";
 comments[50] = "Id Pregunta: 660. ";


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[51]= "52)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[51]= new Array();
 choices[51][0] = "el Secretario General";
 choices[51][1] = "el Subdirector General";
 choices[51][2] = "el Secretario de Estado";
 choices[51][3] = "ninguna es correcta";
 answers[51] = choices[51][0];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 811. Ley 40/2015";


//  Id pregunta: 677 Año de creación de pregunta: 2016
 questions[52]= "53)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[52]= new Array();
 choices[52][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[52][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[52][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[52][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[52] = choices[52][2];
 units[52] = "14";
 comments[52] = "Id Pregunta: 677. Dependencia";


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[53]= new Array();
 choices[53][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[53][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[53][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[53][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[53] = choices[53][1];
 units[53] = "12";
 comments[53] = "Id Pregunta: 133. Leyes modelo econ&oacute;mico";


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[54]= "55)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[54]= new Array();
 choices[54][0] = "786 Diputados como m&aacute;ximo.";
 choices[54][1] = "600 Diputados como m&aacute;ximo.";
 choices[54][2] = "650 Diputados como m&aacute;ximo.";
 choices[54][3] = "732 Diputados como m&aacute;ximo.";
 answers[54] = choices[54][0];
 units[54] = "5";
 comments[54] = "Id Pregunta: 360. UNION EUROPEA";


//  Id pregunta: 140 Año de creación de pregunta: 2016
 questions[55]= "56)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[55]= new Array();
 choices[55][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[55][1] = "Tratarse de un acto no susceptible de recurso";
 choices[55][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[55][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[55] = choices[55][2];
 units[55] = "8";
 comments[55] = "Id Pregunta: 140. Ley 39/2015, Art&iacute;culo 116";


//  Id pregunta: 216 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[56]= new Array();
 choices[56][0] = "El Presidente del Gobierno.";
 choices[56][1] = "El Consejo de Ministros.";
 choices[56][2] = "40 Diputados.";
 choices[56][3] = "El Ministerio Fiscal.";
 answers[56] = choices[56][0];
 units[56] = "1";
 comments[56] = "Id Pregunta: 216. CONSTITUCION1978";


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[57]= "58)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[57]= new Array();
 choices[57][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[57][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[57][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[57][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[57] = choices[57][3];
 units[57] = "12";
 comments[57] = "Id Pregunta: 130. Leyes modelo econ&oacute;mico";


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[58]= "59)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[58]= new Array();
 choices[58][0] = "El Parlamento Europeo.";
 choices[58][1] = "Todas las respuestas son correctas.";
 choices[58][2] = "La Comisi&oacute;n Europea.";
 choices[58][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[58] = choices[58][1];
 units[58] = "5";
 comments[58] = "Id Pregunta: 353. UNION EUROPEA";


//  Id pregunta: 799 Año de creación de pregunta: 2016
 questions[59]= "60)  Los Subdirectores generales:";
 choices[59]= new Array();
 choices[59][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[59][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[59][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[59][3] = "todas son correctas";
 answers[59] = choices[59][1];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 799. Ley 40/2015";


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[60]= "61)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[60]= new Array();
 choices[60][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[60][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[60][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[60][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[60] = choices[60][0];
 units[60] = "31";
 comments[60] = "Id Pregunta: 2. AGE A1 2015";


//  Id pregunta: 173 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[61]= new Array();
 choices[61][0] = "absoluta de las Cortes Generales.";
 choices[61][1] = "absoluta del Congreso de los Diputados.";
 choices[61][2] = "simple de las Cortes Generales.";
 choices[61][3] = "simple del Congreso de los Diputados.";
 answers[61] = choices[61][3];
 units[61] = "1";
 comments[61] = "Id Pregunta: 173. CONSTITUCION1978";


//  Id pregunta: 730 Año de creación de pregunta: 2016
 questions[62]= "63)  Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban:";
 choices[62]= new Array();
 choices[62][0] = "Se definen iteraciones";
 choices[62][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[62][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[62][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[62] = choices[62][1];
 units[62] = "34, 84";
 comments[62] = "Id Pregunta: 730. Metodologias &aacute;giles";


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[63]= "64)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[63]= new Array();
 choices[63][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[63][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[63][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[63][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[63] = choices[63][0];
 units[63] = "1";
 comments[63] = "Id Pregunta: 240. CONSTITUCION1978";


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[64]= "65)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[64]= new Array();
 choices[64][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[64][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[64][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[64][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[64] = choices[64][1];
 units[64] = "43";
 comments[64] = "Id Pregunta: 441. SERVICIOS COMUNES";


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[65]= new Array();
 choices[65][0] = "La Comisi&oacute;n Permanente.";
 choices[65][1] = "El Presidente.";
 choices[65][2] = "El Pleno.";
 choices[65][3] = "El Vicepresidente.";
 answers[65] = choices[65][3];
 units[65] = "1";
 comments[65] = "Id Pregunta: 261. CONSTITUCION1978";


//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[66]= "67)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[66]= new Array();
 choices[66][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[66][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[66][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[66][3] = "Todas las respuestas son correctas.";
 answers[66] = choices[66][3];
 units[66] = "50";
 comments[66] = "Id Pregunta: 620. Junta de Extremadura A1 2015";


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[67]= "68)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[67]= new Array();
 choices[67][0] = "La Ley General Tributaria.";
 choices[67][1] = "La Ley Presupuestaria.";
 choices[67][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[67][3] = "Ninguna de las respuestas es correcta.";
 answers[67] = choices[67][0];
 units[67] = "10";
 comments[67] = "Id Pregunta: 486. PRESUPUESTOS GENERALES";


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[68]= new Array();
 choices[68][0] = "Data Mining (miner&iacute;a de datos)";
 choices[68][1] = "Business Intelligence (inteligencia de negocio)";
 choices[68][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[68][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[68] = choices[68][1];
 units[68] = "72";
 comments[68] = "Id Pregunta: 68. AGE A1 2015";


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[69]= "70)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[69]= new Array();
 choices[69][0] = "Subsecretario";
 choices[69][1] = "Subdirector general";
 choices[69][2] = "Secretario de Estado";
 choices[69][3] = "ninguna es correcta";
 answers[69] = choices[69][0];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 779. Ley 40/2015";


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[70]= new Array();
 choices[70][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[70][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[70][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[70][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[70] = choices[70][3];
 units[70] = "5";
 comments[70] = "Id Pregunta: 332. UNION EUROPEA";


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[71]= "72)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[71]= new Array();
 choices[71][0] = "Director General";
 choices[71][1] = "Secretario general";
 choices[71][2] = "Subdirector general";
 choices[71][3] = "Subsecretario";
 answers[71] = choices[71][0];
 units[71] = "4, 7, 8, 9";
 comments[71] = "Id Pregunta: 793. Ley 40/2015";


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale la respuesta falsa";
 choices[72]= new Array();
 choices[72][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[72][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[72][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[72][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[72] = choices[72][3];
 units[72] = "22";
 comments[72] = "Id Pregunta: 276. LEY DE TRANSPARENCIA";


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[73]= new Array();
 choices[73][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[73][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[73][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[73][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[73] = choices[73][2];
 units[73] = "26";
 comments[73] = "Id Pregunta: 551. Gobernanza TIC";


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[74]= "75)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[74]= new Array();
 choices[74][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[74][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[74][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[74][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[74] = choices[74][2];
 units[74] = "4, 7, 8, 9";
 comments[74] = "Id Pregunta: 772. Ley 40/2015";


