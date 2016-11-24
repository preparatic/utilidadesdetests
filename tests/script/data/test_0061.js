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

//  Id pregunta: 10292 Año de creación de pregunta: 2016
 questions[0]= "1)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[0]= new Array();
 choices[0][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[0][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[0][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[0][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[0] = choices[0][1];
 units[0] = "5";
 comments[0] = "Id Pregunta: 10292. UNION EUROPEA";


//  Id pregunta: 10322 Año de creación de pregunta: 2016
 questions[1]= "2)  El Tribunal de Justicia est&aacute; formado por:";
 choices[1]= new Array();
 choices[1][0] = "Un Juez de cada Estado miembro.";
 choices[1][1] = "Por dos Jueces de cada Estado miembro.";
 choices[1][2] = "Por veinte Jueces.";
 choices[1][3] = "Por ocho Jueces.";
 answers[1] = choices[1][0];
 units[1] = "5";
 comments[1] = "Id Pregunta: 10322. UNION EUROPEA";


//  Id pregunta: 10492 Año de creación de pregunta: 2016
 questions[2]= "3)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[2]= new Array();
 choices[2][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[2][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[2][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[2][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[2] = choices[2][2];
 units[2] = "10";
 comments[2] = "Id Pregunta: 10492. PRESUPUESTOS GENERALES";


//  Id pregunta: 10570 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[3]= new Array();
 choices[3][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[3][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[3][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[3][3] = "La tasa de desempleo ronda el 20%";
 answers[3] = choices[3][2];
 units[3] = "12";
 comments[3] = "Id Pregunta: 10570. Modelo econ&oacute;mico";


//  Id pregunta: 10346 Año de creación de pregunta: 2016
 questions[4]= "5)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[4]= new Array();
 choices[4][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[4][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[4][2] = "Cinco a&ntilde;os.";
 choices[4][3] = "Ninguna es correcta.";
 answers[4] = choices[4][2];
 units[4] = "5";
 comments[4] = "Id Pregunta: 10346. UNION EUROPEA";


//  Id pregunta: 10527 Año de creación de pregunta: 2016
 questions[5]= "6)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[5]= new Array();
 choices[5][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[5][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[5][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[5][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[5] = choices[5][2];
 units[5] = "7";
 comments[5] = "Id Pregunta: 10527. LEY 39/2015";


//  Id pregunta: 10342 Año de creación de pregunta: 2016
 questions[6]= "7)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[6]= new Array();
 choices[6][0] = "El Tratado de Maastrich.";
 choices[6][1] = "El Tratado de Amsterdam.";
 choices[6][2] = "El Tratado de Par&iacute;s.";
 choices[6][3] = "El Tratado de Roma.";
 answers[6] = choices[6][3];
 units[6] = "5";
 comments[6] = "Id Pregunta: 10342. UNION EUROPEA";


//  Id pregunta: 10435 Año de creación de pregunta: 2016
 questions[7]= "8)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[7]= new Array();
 choices[7][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[7][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[7][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[7][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[7] = choices[7][2];
 units[7] = "43";
 comments[7] = "Id Pregunta: 10435. SERVICIOS COMUNES";


//  Id pregunta: 10561 Año de creación de pregunta: 2016
 questions[8]= "9)  El plan nacional de ciudades inteligentes...";
 choices[8]= new Array();
 choices[8][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[8][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[8][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[8][3] = "No existe";
 answers[8] = choices[8][1];
 units[8] = "19";
 comments[8] = "Id Pregunta: 10561. Ciudades Inteligentes";


//  Id pregunta: 10530 Año de creación de pregunta: 2016
 questions[9]= "10)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[9]= new Array();
 choices[9][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[9][1] = "mediante resoluci&oacute;n judicial especial";
 choices[9][2] = "&uacute;nicamente mediante poder notarial";
 choices[9][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[9] = choices[9][3];
 units[9] = "7";
 comments[9] = "Id Pregunta: 10530. LEY 39/2015";


//  Id pregunta: 10218 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[10]= new Array();
 choices[10][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[10][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[10][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[10][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[10] = choices[10][0];
 units[10] = "1";
 comments[10] = "Id Pregunta: 10218. CONSTITUCION1978";


//  Id pregunta: 10151 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[11]= new Array();
 choices[11][0] = "las personas jur&iacute;dicas ";
 choices[11][1] = "las entidades con personalidad jur&iacute;dica";
 choices[11][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[11][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[11] = choices[11][1];
 units[11] = "7";
 comments[11] = "Id Pregunta: 10151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 10620 Año de creación de pregunta: 2016
 questions[12]= "13)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[12]= new Array();
 choices[12][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[12][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[12][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[12][3] = "Todas las respuestas son correctas.";
 answers[12] = choices[12][3];
 units[12] = "50";
 comments[12] = "Id Pregunta: 10620. Junta de Extremadura A1 2015";


//  Id pregunta: 10472 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[13]= new Array();
 choices[13][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[13][1] = "Auditor&iacute;a operativa.";
 choices[13][2] = "Auditor&iacute;a de cumplimiento.";
 choices[13][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[13] = choices[13][2];
 units[13] = "10";
 comments[13] = "Id Pregunta: 10472. PRESUPUESTOS GENERALES";


//  Id pregunta: 10002 Año de creación de pregunta: 2016
 questions[14]= "15)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[14]= new Array();
 choices[14][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[14][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[14][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[14][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[14] = choices[14][0];
 units[14] = "31";
 comments[14] = "Id Pregunta: 10002. AGE A1 2015";


//  Id pregunta: 10083 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[15]= new Array();
 choices[15][0] = "Perceptible";
 choices[15][1] = "Operable";
 choices[15][2] = "Comprensible";
 choices[15][3] = "Robusto";
 answers[15] = choices[15][2];
 units[15] = "42";
 comments[15] = "Id Pregunta: 10083. AGE A1 2015";


//  Id pregunta: 10195 Año de creación de pregunta: 2016
 questions[16]= "17)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[16]= new Array();
 choices[16][0] = "Al Gobierno.";
 choices[16][1] = "A las Cortes Generales.";
 choices[16][2] = "Al Poder Judicial.";
 choices[16][3] = "Al Congreso de los Diputados.";
 answers[16] = choices[16][0];
 units[16] = "1";
 comments[16] = "Id Pregunta: 10195. CONSTITUCION1978";


//  Id pregunta: 10113 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[17]= new Array();
 choices[17][0] = "La Seguridad Social";
 choices[17][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[17][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[17][3] = "El Banco de Espa&ntilde;a";
 answers[17] = choices[17][3];
 units[17] = "15";
 comments[17] = "Id Pregunta: 10113. ";


//  Id pregunta: 10331 Año de creación de pregunta: 2016
 questions[18]= "19)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[18]= new Array();
 choices[18][0] = "90";
 choices[18][1] = "50";
 choices[18][2] = "64";
 choices[18][3] = "60";
 answers[18] = choices[18][1];
 units[18] = "5";
 comments[18] = "Id Pregunta: 10331. UNION EUROPEA";


//  Id pregunta: 10010 Año de creación de pregunta: 2016
 questions[19]= "20)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[19]= new Array();
 choices[19][0] = "Paging";
 choices[19][1] = "Roaming";
 choices[19][2] = "Handover";
 choices[19][3] = "Trunking";
 answers[19] = choices[19][0];
 units[19] = "117";
 comments[19] = "Id Pregunta: 10010. AGE A1 2015";


//  Id pregunta: 10193 Año de creación de pregunta: 2016
 questions[20]= "21)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[20]= new Array();
 choices[20][0] = "3 a&ntilde;os.";
 choices[20][1] = "5 a&ntilde;os.";
 choices[20][2] = "4 a&ntilde;os.";
 choices[20][3] = "6 a&ntilde;os.";
 answers[20] = choices[20][1];
 units[20] = "1";
 comments[20] = "Id Pregunta: 10193. CONSTITUCION1978";


//  Id pregunta: 10073 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[21]= new Array();
 choices[21][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[21][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[21][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[21][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[21] = choices[21][1];
 units[21] = "44";
 comments[21] = "Id Pregunta: 10073. AGE A1 2015";


//  Id pregunta: 10201 Año de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[22]= new Array();
 choices[22][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[22][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[22][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[22][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[22] = choices[22][2];
 units[22] = "1";
 comments[22] = "Id Pregunta: 10201. CONSTITUCION1978";


//  Id pregunta: 10120 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[23]= new Array();
 choices[23][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[23][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[23][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[23][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[23] = choices[23][3];
 units[23] = "22";
 comments[23] = "Id Pregunta: 10120. ";


//  Id pregunta: 10105 Año de creación de pregunta: 2016
 questions[24]= "25)  Entre las caracter&iacute;sticas de Big Data se encuentra:";
 choices[24]= new Array();
 choices[24][0] = "Gran volumen de informaci&oacute;n";
 choices[24][1] = "Gran variedad de datos";
 choices[24][2] = "Se analizan datos a gran velocidad";
 choices[24][3] = "Todas las anteriores son verdaderas";
 answers[24] = choices[24][3];
 units[24] = "73";
 comments[24] = "Id Pregunta: 10105. ";


//  Id pregunta: 10317 Año de creación de pregunta: 2016
 questions[25]= "26)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[25]= new Array();
 choices[25][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[25][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[25][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[25][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[25] = choices[25][3];
 units[25] = "5";
 comments[25] = "Id Pregunta: 10317. UNION EUROPEA";


//  Id pregunta: 10624 Año de creación de pregunta: 2016
 questions[26]= "27)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[26]= new Array();
 choices[26][0] = "En sentencias switch para alterar el control de flujo.";
 choices[26][1] = "Para manejar excepciones.";
 choices[26][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[26][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[26] = choices[26][1];
 units[26] = "64";
 comments[26] = "Id Pregunta: 10624. Junta de Extremadura A1 2015";


//  Id pregunta: 10038 Año de creación de pregunta: 2016
 questions[27]= "28)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[27]= new Array();
 choices[27][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[27][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[27][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[27][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[27] = choices[27][3];
 units[27] = "62";
 comments[27] = "Id Pregunta: 10038. AGE A1 2015";


//  Id pregunta: 10618 Año de creación de pregunta: 2016
 questions[28]= "29)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[28]= new Array();
 choices[28][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[28][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[28][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[28][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[28] = choices[28][2];
 units[28] = "85";
 comments[28] = "Id Pregunta: 10618. Junta de Extremadura A1 2015";


//  Id pregunta: 10449 Año de creación de pregunta: 2016
 questions[29]= "30)  El cr&eacute;dito presupuestario es...";
 choices[29]= new Array();
 choices[29][0] = "El sujeto que realiza el gasto";
 choices[29][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[29][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[29][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[29] = choices[29][2];
 units[29] = "10";
 comments[29] = "Id Pregunta: 10449. PRESUPUESTOS GENERALES";


//  Id pregunta: 10384 Año de creación de pregunta: 2016
 questions[30]= "31)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[30]= new Array();
 choices[30][0] = "Sean dirigidas por mujeres";
 choices[30][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[30][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[30][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[30] = choices[30][2];
 units[30] = "14";
 comments[30] = "Id Pregunta: 10384. POLITICAS DE IGUALDAD";


//  Id pregunta: 10198 Año de creación de pregunta: 2016
 questions[31]= "32)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[31]= new Array();
 choices[31][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[31][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[31][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[31][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[31] = choices[31][3];
 units[31] = "1";
 comments[31] = "Id Pregunta: 10198. CONSTITUCION1978";


//  Id pregunta: 10171 Año de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[32]= new Array();
 choices[32][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[32][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[32][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[32][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[32] = choices[32][3];
 units[32] = "19";
 comments[32] = "Id Pregunta: 10171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 10063 Año de creación de pregunta: 2016
 questions[33]= "34)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[33]= new Array();
 choices[33][0] = "Infrastructure as a Service (IaaS)";
 choices[33][1] = "Platform as a Service (PaaS)";
 choices[33][2] = "Software as a Service (SaaS)";
 choices[33][3] = "Application as a Service (AaaS)";
 answers[33] = choices[33][1];
 units[33] = "52";
 comments[33] = "Id Pregunta: 10063. AGE A1 2015";


//  Id pregunta: 10288 Año de creación de pregunta: 2016
 questions[34]= "35)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[34]= new Array();
 choices[34][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[34][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[34][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[34][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[34] = choices[34][2];
 units[34] = "5";
 comments[34] = "Id Pregunta: 10288. UNION EUROPEA";


//  Id pregunta: 10631 Año de creación de pregunta: 2016
 questions[35]= "36)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[35]= new Array();
 choices[35][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[35][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[35][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[35][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[35] = choices[35][2];
 units[35] = "50";
 comments[35] = "Id Pregunta: 10631. Junta de Extremadura A1 2015";


//  Id pregunta: 10276 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale la respuesta falsa";
 choices[36]= new Array();
 choices[36][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[36][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[36][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[36][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[36] = choices[36][3];
 units[36] = "22";
 comments[36] = "Id Pregunta: 10276. LEY DE TRANSPARENCIA";


//  Id pregunta: 10523 Año de creación de pregunta: 2016
 questions[37]= "38)  Se consideran interesados en el procedimiento administrativo:";
 choices[37]= new Array();
 choices[37][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[37][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[37][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[37][3] = "todas son correctas";
 answers[37] = choices[37][0];
 units[37] = "7";
 comments[37] = "Id Pregunta: 10523. LEY 39/2015";


//  Id pregunta: 10490 Año de creación de pregunta: 2016
 questions[38]= "39)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[38]= new Array();
 choices[38][0] = "A los cinco a&ntilde;os.";
 choices[38][1] = "A los dos a&ntilde;os.";
 choices[38][2] = "A los tres a&ntilde;os.";
 choices[38][3] = "A los cuatro a&ntilde;os.";
 answers[38] = choices[38][0];
 units[38] = "10";
 comments[38] = "Id Pregunta: 10490. PRESUPUESTOS GENERALES";


//  Id pregunta: 10307 Año de creación de pregunta: 2016
 questions[39]= "40)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[39]= new Array();
 choices[39][0] = "Seis a&ntilde;os.";
 choices[39][1] = "Cinco a&ntilde;os.";
 choices[39][2] = "Cuatro a&ntilde;os.";
 choices[39][3] = "Ocho a&ntilde;os.";
 answers[39] = choices[39][1];
 units[39] = "5";
 comments[39] = "Id Pregunta: 10307. UNION EUROPEA";


//  Id pregunta: 10343 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[40]= new Array();
 choices[40][0] = "23";
 choices[40][1] = "20";
 choices[40][2] = "14";
 choices[40][3] = "18";
 answers[40] = choices[40][1];
 units[40] = "5";
 comments[40] = "Id Pregunta: 10343. UNION EUROPEA";


//  Id pregunta: 10332 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[41]= new Array();
 choices[41][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[41][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[41][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[41][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[41] = choices[41][3];
 units[41] = "5";
 comments[41] = "Id Pregunta: 10332. UNION EUROPEA";


//  Id pregunta: 10377 Año de creación de pregunta: 2016
 questions[42]= "43)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[42]= new Array();
 choices[42][0] = "Tener una estructura institucional.";
 choices[42][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[42][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[42][3] = "Todas las respuestas son correctas.";
 answers[42] = choices[42][3];
 units[42] = "5";
 comments[42] = "Id Pregunta: 10377. UNION EUROPEA";


//  Id pregunta: 10154 Año de creación de pregunta: 2016
 questions[43]= "44)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[43]= new Array();
 choices[43][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[43][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[43][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[43][3] = "todas son correctas";
 answers[43] = choices[43][3];
 units[43] = "7";
 comments[43] = "Id Pregunta: 10154. Ley 39/2015, Art&iacute;culo 29";


//  Id pregunta: 10100 Año de creación de pregunta: 2016
 questions[44]= "45)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[44]= new Array();
 choices[44][0] = "Bases de datos orientadas a filas";
 choices[44][1] = "Bases de datos orientadas a documentos";
 choices[44][2] = "Bases de datos de clave/valor";
 choices[44][3] = "Bases de datos orientadas a objetos";
 answers[44] = choices[44][0];
 units[44] = "73";
 comments[44] = "Id Pregunta: 10100. ";


//  Id pregunta: 10488 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[45]= new Array();
 choices[45][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[45][1] = "El Gobierno.";
 choices[45][2] = "El Presidente del Gobierno.";
 choices[45][3] = "El Consejo de Ministros.";
 answers[45] = choices[45][1];
 units[45] = "10";
 comments[45] = "Id Pregunta: 10488. PRESUPUESTOS GENERALES";


//  Id pregunta: 10168 Año de creación de pregunta: 2016
 questions[46]= "47)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[46]= new Array();
 choices[46][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[46][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[46][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[46][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[46] = choices[46][2];
 units[46] = "19";
 comments[46] = "Id Pregunta: 10168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 10558 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[47]= new Array();
 choices[47][0] = "En 2015";
 choices[47][1] = "En 2013";
 choices[47][2] = "En 2016";
 choices[47][3] = "En 2007";
 answers[47] = choices[47][1];
 units[47] = "19";
 comments[47] = "Id Pregunta: 10558. Agenda Digital";


//  Id pregunta: 10603 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[48]= new Array();
 choices[48][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[48][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[48][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[48][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[48] = choices[48][3];
 units[48] = "101";
 comments[48] = "Id Pregunta: 10603. Junta de Extremadura A1 2015";


//  Id pregunta: 10636 Año de creación de pregunta: 2016
 questions[49]= "50)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[49]= new Array();
 choices[49][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[49][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[49][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[49][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[49] = choices[49][2];
 units[49] = "57";
 comments[49] = "Id Pregunta: 10636. Junta de Extremadura A1 2015";


//  Id pregunta: 10374 Año de creación de pregunta: 2016
 questions[50]= "51)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[50]= new Array();
 choices[50][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[50][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[50][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[50][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[50] = choices[50][3];
 units[50] = "5";
 comments[50] = "Id Pregunta: 10374. UNION EUROPEA";


//  Id pregunta: 10319 Año de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[51]= new Array();
 choices[51][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[51][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[51][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[51][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[51] = choices[51][0];
 units[51] = "5";
 comments[51] = "Id Pregunta: 10319. UNION EUROPEA";


//  Id pregunta: 10197 Año de creación de pregunta: 2016
 questions[52]= "53)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[52]= new Array();
 choices[52][0] = "Establecer tributos.";
 choices[52][1] = "Desarrollar lo establecido en una Ley.";
 choices[52][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[52][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[52] = choices[52][0];
 units[52] = "1";
 comments[52] = "Id Pregunta: 10197. CONSTITUCION1978";


//  Id pregunta: 10324 Año de creación de pregunta: 2016
 questions[53]= "54)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[53]= new Array();
 choices[53][0] = "Tres a&ntilde;os.";
 choices[53][1] = "Cuatro a&ntilde;os.";
 choices[53][2] = "Cinco a&ntilde;os.";
 choices[53][3] = "Seis a&ntilde;os.";
 answers[53] = choices[53][0];
 units[53] = "5";
 comments[53] = "Id Pregunta: 10324. UNION EUROPEA";


//  Id pregunta: 10567 Año de creación de pregunta: 2016
 questions[54]= "55)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[54]= new Array();
 choices[54][0] = "Primario, que incluye la agricultura y la pesca";
 choices[54][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[54][2] = "Minero, junto con las exportaciones de comercio";
 choices[54][3] = "Servicios";
 answers[54] = choices[54][3];
 units[54] = "12";
 comments[54] = "Id Pregunta: 10567. Modelo econ&oacute;mico";


//  Id pregunta: 10467 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[55]= new Array();
 choices[55][0] = "Tres meses.";
 choices[55][1] = "Nueve meses.";
 choices[55][2] = "Cuatro meses.";
 choices[55][3] = "Seis meses.";
 answers[55] = choices[55][0];
 units[55] = "10";
 comments[55] = "Id Pregunta: 10467. PRESUPUESTOS GENERALES";


//  Id pregunta: 10047 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[56]= new Array();
 choices[56][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[56][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[56][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[56][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[56] = choices[56][3];
 units[56] = "78";
 comments[56] = "Id Pregunta: 10047. AGE A1 2015";


//  Id pregunta: 10222 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[57]= new Array();
 choices[57][0] = "Dos Cap&iacute;tulos.";
 choices[57][1] = "Tres Cap&iacute;tulos.";
 choices[57][2] = "Un Cap&iacute;tulo.";
 choices[57][3] = "Cuatro Cap&iacute;tulos.";
 answers[57] = choices[57][1];
 units[57] = "1";
 comments[57] = "Id Pregunta: 10222. CONSTITUCION1978";


//  Id pregunta: 10499 Año de creación de pregunta: 2016
 questions[58]= "59)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[58]= new Array();
 choices[58][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[58][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[58][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[58][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[58] = choices[58][0];
 units[58] = "10";
 comments[58] = "Id Pregunta: 10499. PRESUPUESTOS GENERALES";


//  Id pregunta: 10438 Año de creación de pregunta: 2016
 questions[59]= "60)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[59]= new Array();
 choices[59][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[59][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[59][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[59][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[59] = choices[59][3];
 units[59] = "43";
 comments[59] = "Id Pregunta: 10438. SERVICIOS COMUNES";


//  Id pregunta: 10147 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[60]= new Array();
 choices[60][0] = "Al Gobierno de la naci&oacute;n";
 choices[60][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[60][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[60][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[60] = choices[60][3];
 units[60] = "7";
 comments[60] = "Id Pregunta: 10147. Ley 39/2015, Art&iacute;culo 128";


//  Id pregunta: 10287 Año de creación de pregunta: 2016
 questions[61]= "62)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[61]= new Array();
 choices[61][0] = "Versi&oacute;n digital prioritaria.";
 choices[61][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[61][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[61][3] = "Apertura y transparencia.";
 answers[61] = choices[61][0];
 units[61] = "5";
 comments[61] = "Id Pregunta: 10287. UNION EUROPEA";


//  Id pregunta: 10000 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[62]= new Array();
 choices[62][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[62][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[62][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[62][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[62] = choices[62][0];
 units[62] = "26";
 comments[62] = "Id Pregunta: 10000. AGE A1 2015";


//  Id pregunta: 10436 Año de creación de pregunta: 2016
 questions[63]= "64)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[63]= new Array();
 choices[63][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[63][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[63][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[63][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[63] = choices[63][2];
 units[63] = "43";
 comments[63] = "Id Pregunta: 10436. SERVICIOS COMUNES";


//  Id pregunta: 10539 Año de creación de pregunta: 2016
 questions[64]= "65)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[64]= new Array();
 choices[64][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[64][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[64][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[64][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[64] = choices[64][1];
 units[64] = "7";
 comments[64] = "Id Pregunta: 10539. LEY 39/2015";


//  Id pregunta: 10329 Año de creación de pregunta: 2016
 questions[65]= "66)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[65]= new Array();
 choices[65][0] = "Acuerdos cualificados.";
 choices[65][1] = "Acuerdos ponderados.";
 choices[65][2] = "Valoraci&oacute;n de los votos.";
 choices[65][3] = "Ponderaci&oacute;n de los votos.";
 answers[65] = choices[65][3];
 units[65] = "5";
 comments[65] = "Id Pregunta: 10329. UNION EUROPEA";


//  Id pregunta: 10285 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[66]= new Array();
 choices[66][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[66][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[66][2] = "la falta de interoperabilidad.";
 choices[66][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[66] = choices[66][1];
 units[66] = "5";
 comments[66] = "Id Pregunta: 10285. UNION EUROPEA";


//  Id pregunta: 10132 Año de creación de pregunta: 2016
 questions[67]= "68)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[67]= new Array();
 choices[67][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[67][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[67][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[67][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[67] = choices[67][3];
 units[67] = "12";
 comments[67] = "Id Pregunta: 10132. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10244 Año de creación de pregunta: 2016
 questions[68]= "69)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[68]= new Array();
 choices[68][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[68][1] = "Publicidad de las normas.";
 choices[68][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[68][3] = "Coordinaci&oacute;n normativa.";
 answers[68] = choices[68][2];
 units[68] = "1";
 comments[68] = "Id Pregunta: 10244. CONSTITUCION1978";


//  Id pregunta: 10677 Año de creación de pregunta: 2016
 questions[69]= "70)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[69]= new Array();
 choices[69][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[69][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[69][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[69][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[69] = choices[69][2];
 units[69] = "14";
 comments[69] = "Id Pregunta: 10677. Dependencia";


//  Id pregunta: 10142 Año de creación de pregunta: 2016
 questions[70]= "71)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[70]= new Array();
 choices[70][0] = "De un mes si el acto fuera presunto";
 choices[70][1] = "De un mes si el acto fuera expreso";
 choices[70][2] = "De un mes en cualquier caso";
 choices[70][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[70] = choices[70][1];
 units[70] = "8";
 comments[70] = "Id Pregunta: 10142. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 10604 Año de creación de pregunta: 2016
 questions[71]= "72)  ITIL v3, define:";
 choices[71]= new Array();
 choices[71][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[71][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[71][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[71][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[71] = choices[71][0];
 units[71] = "101";
 comments[71] = "Id Pregunta: 10604. Junta de Extremadura A1 2015";


//  Id pregunta: 10370 Año de creación de pregunta: 2016
 questions[72]= "73)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[72]= new Array();
 choices[72][0] = "Un recurso de incumplimiento.";
 choices[72][1] = "Recurso de carencia.";
 choices[72][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[72][3] = "Ninguna es correcta.";
 answers[72] = choices[72][2];
 units[72] = "5";
 comments[72] = "Id Pregunta: 10370. UNION EUROPEA";


//  Id pregunta: 10638 Año de creación de pregunta: 2016
 questions[73]= "74)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[73]= new Array();
 choices[73][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[73][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[73][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[73][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[73] = choices[73][3];
 units[73] = "57";
 comments[73] = "Id Pregunta: 10638. Junta de Extremadura A1 2015";


//  Id pregunta: 10336 Año de creación de pregunta: 2016
 questions[74]= "75)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[74]= new Array();
 choices[74][0] = "Diciembre de 1987.";
 choices[74][1] = "Septiembre de 1989.";
 choices[74][2] = "Octubre de 1990.";
 choices[74][3] = "Noviembre de 1980.";
 answers[74] = choices[74][1];
 units[74] = "5";
 comments[74] = "Id Pregunta: 10336. UNION EUROPEA";


