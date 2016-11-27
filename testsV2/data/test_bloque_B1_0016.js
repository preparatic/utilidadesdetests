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

//  Id pregunta: 15 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l no es un aspecto concreto por el que la tecnolog&iacute;a de la informaci&oacute;n afecta directamente a la competitividad de las empresas?:";
 choices[0]= new Array();
 choices[0][0] = "Alteraci&oacute;n o cambio de las estructuras de las industrias";
 choices[0][1] = "Simplifica las tareas realizar";
 choices[0][2] = "Afecta a los costes y a la diferenciaci&oacute;n estrat&eacute;gica";
 choices[0][3] = "Expande las actividades haciendo que se puedan crear nuevos negocios";
 answers[0] = choices[0][1];
 units[0] = "22";
 comments[0] = "Id Pregunta: 15. ";


//  Id pregunta: 48 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes no es un control de entrada de datos en una Revisi&oacute;n de Controles de Aplicaci&oacute;n en una auditor&iacute;a inform&aacute;tica?:";
 choices[1]= new Array();
 choices[1][0] = "Controles por lote y balanceo";
 choices[1][1] = "Validaci&oacute;n y edici&oacute;n de datos";
 choices[1][2] = "Balanceo y conciliaci&oacute;n";
 choices[1][3] = "Autorizaci&oacute;n de ingreso";
 answers[1] = choices[1][2];
 units[1] = "31,32,33";
 comments[1] = "Id Pregunta: 48. ";


//  Id pregunta: 53 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cuando entr&oacute; en vigor la LOPD?:";
 choices[2]= new Array();
 choices[2][0] = "Diciembre de 1999";
 choices[2][1] = "Enero de 2000";
 choices[2][2] = "Febrero de 1993";
 choices[2][3] = "Enero de 1999";
 answers[2] = choices[2][1];
 units[2] = "29";
 comments[2] = "Id Pregunta: 53. ";


//  Id pregunta: 74 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas se basa en un recuento de en cuantos criterios ha sido la mejor?:";
 choices[3]= new Array();
 choices[3][0] = "M&eacute;todo promethee";
 choices[3][1] = "Utilidad multiatributo";
 choices[3][2] = "Permutaci&oacute;n";
 choices[3][3] = "Ninguno de los anteriores";
 answers[3] = choices[3][3];
 units[3] = "34";
 comments[3] = "Id Pregunta: 74. Tema 36 de 2005";


//  Id pregunta: 95 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  A los efectos de la Ley Org&aacute;nica de Protecci&oacute;n de Datos (LOPD), se entienden por datos de car&aacute;cter personal:";
 choices[4]= new Array();
 choices[4][0] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas o jur&iacute;dicas identificadas";
 choices[4][1] = "Cualquier informaci&oacute;n relativa a la salud, ideolog&iacute;a, religi&oacute;n, creencias, origen racial o vida sexual de las personas";
 choices[4][2] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o identificables";
 choices[4][3] = "Cualquier informaci&oacute;n sobre las personas, excluidas las de car&aacute;cter pol&iacute;tico, sindical o religioso";
 answers[4] = choices[4][2];
 units[4] = "29";
 comments[4] = "Id Pregunta: 95. ";


//  Id pregunta: 109 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Si la transmisi&oacute;n de datos de car. personal por una red tiene que cifrar los datos o utilizar  mecanismos para garantizar que dicha informaci&oacute;n no sea inteligible ni manipulable por terceros, estamos aplicando medidas de tipo:";
 choices[5]= new Array();
 choices[5][0] = "B&aacute;sico";
 choices[5][1] = "Medio";
 choices[5][2] = "Alto";
 choices[5][3] = "Ninguna de las anteriores";
 answers[5] = choices[5][2];
 units[5] = "29";
 comments[5] = "Id Pregunta: 109. ";


//  Id pregunta: 154 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  El nivel de adecuaci&oacute;n AA indica:";
 choices[6]= new Array();
 choices[6][0] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1";
 choices[6][1] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1 y 2";
 choices[6][2] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1, 2 y 3";
 choices[6][3] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1, 2, 3 y 4";
 answers[6] = choices[6][1];
 units[6] = "39";
 comments[6] = "Id Pregunta: 154. ";


//  Id pregunta: 197 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  El t&eacute;rmino COBIT es un acr&oacute;nimo angl&oacute;fono que procede de los siguientes t&eacute;rminos, o significa lo siguiente en el idioma ingl&eacute;s:";
 choices[7]= new Array();
 choices[7][0] = "Computer Building Information Technology";
 choices[7][1] = "Computational Binary Translation";
 choices[7][2] = "Control Objetives for Information and Related Technology";
 choices[7][3] = "Committee of Business Information Technique";
 answers[7] = choices[7][2];
 units[7] = "21";
 comments[7] = "Id Pregunta: 197. Examen TIC MAP B 2004";


//  Id pregunta: 204 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  La teor&iacute;a de la decisi&oacute;n multicriterio discreta";
 choices[8]= new Array();
 choices[8][0] = "tiene problemas con una incorrecta asignaci&oacute;n de pesos";
 choices[8][1] = "es usada en la elecci&oacute;n de contratos por parte de la administraci&oacute;n en ocasiones";
 choices[8][2] = "la normalizaci&oacute;n de las puntuaciones puede hacer perder la proporcionalidad";
 choices[8][3] = "todas las anteriores";
 answers[8] = choices[8][3];
 units[8] = "34";
 comments[8] = "Id Pregunta: 204. ";


//  Id pregunta: 234 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En relaci&oacute;n con la auditor&iacute;a de econom&iacute;a, eficacia y eficiencia, &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?:";
 choices[9]= new Array();
 choices[9][0] = "Al contrario de lo que ocurre en el sector privado, en el sector p&uacute;blico es muy sencillo realizar comparaciones entre los distintos servicios y administraciones p&uacute;blicas";
 choices[9][1] = "La auditor&iacute;a de econom&iacute;a consiste en medir los costes de desarrollo, mantenimiento y operaci&oacute;n de un sistema de informaci&oacute;n, incluyendo equipos y personal";
 choices[9][2] = "La auditor&iacute;a de eficacia es una medida de la correcta utilizaci&oacute;n de los equipos, instalaciones y personal que participan en el sistema de informaci&oacute;n. Es una medida de la calidad t&eacute;cnica del sistema de informaci&oacute;n";
 choices[9][3] = "La eficiencia se eval&uacute;a determinando si los requisitos del dise&ntilde;o se han cumplido y los usuarios est&aacute;n satisfechos con el sistema";
 answers[9] = choices[9][1];
 units[9] = "31,32,33";
 comments[9] = "Id Pregunta: 234. ";


//  Id pregunta: 237 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En temas de seguridad inform&aacute;tica, una de las siguientes afirmaciones es falsa:";
 choices[10]= new Array();
 choices[10][0] = "La prioridad de actuaci&oacute;n viene dada por el producto impacto x vulnerabilidad";
 choices[10][1] = "Los costes de seguridad se clasifican en directos (inversiones en equipos, mantenimiento, personal de seguridad) e indirectos (dificultad de uso, restricciones de servicios, reducci&oacute;n de prestaciones)";
 choices[10][2] = "La pol&iacute;tica de seguridad es un documento oficial de la organizaci&oacute;n de car&aacute;cter confidencial";
 choices[10][3] = "El punto de equilibrio financiero ser&aacute; el que represente el coste m&iacute;nimo sumando el coste de seguridad y el de p&eacute;rdidas por incidentes o materializaciones de amenazas";
 answers[10] = choices[10][2];
 units[10] = "33";
 comments[10] = "Id Pregunta: 237. ";


//  Id pregunta: 254 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Entre los m&eacute;todos utilizados para la selecci&oacute;n de bienes y servicios:";
 choices[11]= new Array();
 choices[11][0] = "En general se considera que a mayor entrop&iacute;a, mayor informaci&oacute;n, puesto que las puntuaciones est&aacute;n m&aacute;s ordenadas";
 choices[11][1] = "La normalizaci&oacute;n de las puntuaciones suele ser necesaria para considerarlas a todas sobre la misma escala y para simplificar los c&aacute;lculos";
 choices[11][2] = "En el m&eacute;todo de permutaci&oacute;n, se exigen solamente las evaluaciones cardinales y los pesos ordinales";
 choices[11][3] = "Todas las respuestas anteriores son correctas";
 answers[11] = choices[11][1];
 units[11] = "34";
 comments[11] = "Id Pregunta: 254. ";


//  Id pregunta: 259 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Estrategia es:";
 choices[12]= new Array();
 choices[12][0] = "Conjunto de reglas que aseguran la toma de una decisi&oacute;n buena en cada momento";
 choices[12][1] = "La toma de decisiones basada en aspectos contingenciales";
 choices[12][2] = "Actividad ligada a la alta direcci&oacute;n de las organizaciones en todas sus actividades, seg&uacute;n las necesidades de dicha organizaci&oacute;n";
 choices[12][3] = "Arte o traza de dirigir un asunto";
 answers[12] = choices[12][3];
 units[12] = "24";
 comments[12] = "Id Pregunta: 259. ";


//  Id pregunta: 268 AÃ±o de creación de pregunta: 2007-01-01
 questions[13]= "14)  Indicar la afirmaci&oacute;n correcta sobre MAGERIT:";
 choices[13]= new Array();
 choices[13][0] = "Magerit se ha estructurado en tres libros: &quot;M&eacute;todo&quot;, &quot;Cat&aacute;logo de Elementos&quot; y &quot;Gu&iacute;a de T&eacute;cnicas&quot;";
 choices[13][1] = "la metodolog&iacute;a se describe desde tres &aacute;ngulos";
 choices[13][2] = "Entre t&eacute;cnicas descritas en la Gu&iacute;a de T&eacute;cnicas se encuentra: el an&aacute;lisis mediante tablas, an&aacute;lisis algor&iacute;tmico, &aacute;rboles de ataque, y la valoraci&oacute;n Delphi.";
 choices[13][3] = "Las tres anteriores son correctas";
 answers[13] = choices[13][3];
 units[13] = "33";
 comments[13] = "Id Pregunta: 268. ";


//  Id pregunta: 275 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Indique cu&aacute;l de los siguientes datos sensibles no est&aacute; especialmente protegido por la LOPD 15/99:";
 choices[14]= new Array();
 choices[14][0] = "De salud";
 choices[14][1] = "Administrativos";
 choices[14][2] = "De religi&oacute;n";
 choices[14][3] = "De origen racial";
 answers[14] = choices[14][1];
 units[14] = "29";
 comments[14] = "Id Pregunta: 275. ";


//  Id pregunta: 287 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  La clasificaci&oacute;n de las tareas realizadas en la oficina en cuatro tipos b&aacute;sicos (mensajes, gesti&oacute;n de informaci&oacute;n personal y acceso a la informaci&oacute;n) fue realizada por:";
 choices[15]= new Array();
 choices[15][0] = "Carter  y Huzan";
 choices[15][1] = "Kent";
 choices[15][2] = "Price";
 choices[15][3] = "Panki";
 answers[15] = choices[15][2];
 units[15] = "22";
 comments[15] = "Id Pregunta: 287. ";


//  Id pregunta: 350 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  La utilizaci&oacute;n de cartuchos de t&oacute;ner reciclados en impresoras de la Administraci&oacute;n:";
 choices[16]= new Array();
 choices[16][0] = "No es de inter&eacute;s para la Administraci&oacute;n, ya que estos cartuchos son m&aacute;s caros";
 choices[16][1] = "Es una pol&iacute;tica apropiada para la Administraci&oacute;n, siempre que se garantice la calidad de estos consumibles";
 choices[16][2] = "Debe reservarse para aquellas situaciones en que se utilicen conjuntamente con otros consumibles reciclados";
 choices[16][3] = "Es una situaci&oacute;n coyuntural para situaciones de insuficiencia presupuestaria";
 answers[16] = choices[16][1];
 units[16] = "41";
 comments[16] = "Id Pregunta: 350. ";


//  Id pregunta: 354 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Las actuales teor&iacute;as del conflicto en las organizaciones parten de:";
 choices[17]= new Array();
 choices[17][0] = "Peter Drucker";
 choices[17][1] = "Mary Parker Follet";
 choices[17][2] = "John Simpson";
 choices[17][3] = "Adam Smith";
 answers[17] = choices[17][1];
 units[17] = "22";
 comments[17] = "Id Pregunta: 354. ";


//  Id pregunta: 365 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Los criterios de Savage, Wald, Laplace, Hurwicz&hellip;, est&aacute;n relacionados con:";
 choices[18]= new Array();
 choices[18][0] = "Teor&iacute;as de medici&oacute;n del coste del HW y SW";
 choices[18][1] = "Teor&iacute;as de optimizaci&oacute;n de los recursos humanos";
 choices[18][2] = "Teor&iacute;as de la decisi&oacute;n ";
 choices[18][3] = "Teor&iacute;as de calidad del SW";
 answers[18] = choices[18][2];
 units[18] = "21";
 comments[18] = "Id Pregunta: 365. ";


//  Id pregunta: 394 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Para la determinaci&oacute;n del rendimiento de un sistema inform&aacute;tico:";
 choices[19]= new Array();
 choices[19][0] = "El tiempo de presencia es el que transcurre desde el instante en que un programa entra en el sistema hasta que la respuesta empieza a aparecer en el terminal";
 choices[19][1] = "El solapamiento (overlap) es el porcentaje de tiempo de CPU en que la CPU atiende al sistema operativo y a las funciones de supervisi&oacute;n y no a las funciones de usuario";
 choices[19][2] = "La capacidad de un recurso es el porcentaje de tiempo durante el cual est&aacute; a disposici&oacute;n de los usuarios";
 choices[19][3] = "La disponibilidad se puede cuantificar por medio de los valores del MTBF (tiempo medio entre fallos) y del MTTR (tiempo medio de reparaciones)";
 answers[19] = choices[19][3];
 units[19] = "35";
 comments[19] = "Id Pregunta: 394. NULL";


//  Id pregunta: 400 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Referente a la Agencia de Protecci&oacute;n de Datos, no es falso que:";
 choices[20]= new Array();
 choices[20][0] = "El Gobierno pueda cesar discrecionalmente a su Director";
 choices[20][1] = "El Director sea nombrado por su Consejo Consultivo";
 choices[20][2] = "Pueda imponer sanciones civiles o penales";
 choices[20][3] = "Se caracteriza por su independencia respecto de la Administraci&oacute;n";
 answers[20] = choices[20][3];
 units[20] = "29";
 comments[20] = "Id Pregunta: 400. ";


//  Id pregunta: 425 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Seg&uacute;n el modelo de Donovan sobre la evoluci&oacute;n de la inform&aacute;tica en las organizaciones, un tipo de organizaci&oacute;n en el que se descentralizan HW y decisiones sobre inform&aacute;tica pero no as&iacute; la facultad de desarrollar aplicaciones se denomina:";
 choices[21]= new Array();
 choices[21][0] = "Mano amiga";
 choices[21][1] = "Gran hermano";
 choices[21][2] = "Perro vigilante";
 choices[21][3] = "Semiacoplada";
 answers[21] = choices[21][0];
 units[21] = "22";
 comments[21] = "Id Pregunta: 425. donovan - nolan";


//  Id pregunta: 493 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  &iquest;C&uacute;antos niveles de evaluaci&oacute;n est&aacute;n contemplados en los Criterios Comunes?";
 choices[22]= new Array();
 choices[22][0] = "Siete";
 choices[22][1] = "Coinciden con los de ITSEC";
 choices[22][2] = "Cinco";
 choices[22][3] = "Seis";
 answers[22] = choices[22][0];
 units[22] = "31,32,33";
 comments[22] = "Id Pregunta: 493. ";


//  Id pregunta: 495 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  &iquest;Qui&eacute;n es responsable de editar el repertorio de los ficheros inscritos en el registro de protecci&oacute;n de datos?";
 choices[23]= new Array();
 choices[23][0] = "Registro General de Protecci&oacute;n de Datos";
 choices[23][1] = "Inspecci&oacute;n de Datos";
 choices[23][2] = "Secretar&iacute;a General";
 choices[23][3] = "Ninguno de los anteriores";
 answers[23] = choices[23][2];
 units[23] = "29";
 comments[23] = "Id Pregunta: 495. Pregunta similar a la del ex&aacute;men de SS del 2003";


//  Id pregunta: 515 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  Seg&uacute;n la Ley de propiedad intelectual, cuando el propietario de un programa de ordenador es una persona jur&iacute;dica, puede ejercer derechos de explotaci&oacute;n:";
 choices[24]= new Array();
 choices[24][0] = "de setenta a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa o, si no, al de su creaci&oacute;n";
 choices[24][1] = "de sesenta a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita o il&iacute;cita del programa o, si no, al de su creaci&oacute;n. En caso de divulgaci&oacute;n il&iacute;cita se considerar&aacute; el de creaci&oacute;n ";
 choices[24][2] = "de 5 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa, si no al de su creaci&oacute;n";
 choices[24][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[24] = choices[24][0];
 units[24] = "36";
 comments[24] = "Id Pregunta: 515. ";


//  Id pregunta: 518 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  Una de las organizaciones que lucha internacionalmente contra la pirater&iacute;a inform&aacute;tica es";
 choices[25]= new Array();
 choices[25][0] = "BSA";
 choices[25][1] = "RSA";
 choices[25][2] = "ESA";
 choices[25][3] = "EIT";
 answers[25] = choices[25][0];
 units[25] = "36,37";
 comments[25] = "Id Pregunta: 518. ";


//  Id pregunta: 520 AÃ±o de creación de pregunta: 2004-01-01
 questions[26]= "27)  &iquest;En qu&eacute; fase del ciclo de vida se deben contemplar los controles de aplicaci&oacute;n por primera vez?";
 choices[26]= new Array();
 choices[26][0] = "Dise&ntilde;o";
 choices[26][1] = "An&aacute;lisis";
 choices[26][2] = "Construcci&oacute;n";
 choices[26][3] = "Pruebas de aceptaci&oacute;n";
 answers[26] = choices[26][1];
 units[26] = "31, 32, 33";
 comments[26] = "Id Pregunta: 520. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 539 AÃ±o de creación de pregunta: 2004-01-01
 questions[27]= "28)  En metodolog&iacute;a PERT, la cantidad de unidades de tiempo en exceso para la realizaci&oacute;n de una tarea suponiendo que comienzan y terminan en las &uacute;ltimas fechas permisibles se llama ...";
 choices[27]= new Array();
 choices[27][0] = "Holgura condicionada";
 choices[27][1] = "Holgura independiente";
 choices[27][2] = "Holgura libre";
 choices[27][3] = "Holgura total";
 answers[27] = choices[27][0];
 units[27] = "28";
 comments[27] = "Id Pregunta: 539. ";


//  Id pregunta: 580 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  Desde el punto de vista funcional la organizaci&oacute;n reticular se caracteriza por";
 choices[28]= new Array();
 choices[28][0] = "prescindir casitotalmente de los formalismos.";
 choices[28][1] = "Lascomunicaciones son de todos con todos, sobre todo por niveles.";
 choices[28][2] = "Las comunicaciones suelen estar muy formalizadas y documentadas deacuerdo a normas estrictas.";
 choices[28][3] = "La mayor&iacute;a de las comunicaciones, por no decir todas, se producen de jefe a subordinados";
 answers[28] = choices[28][1];
 units[28] = "26";
 comments[28] = "Id Pregunta: 580. ";


//  Id pregunta: 614 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  Se&ntilde;ala D&rsquo;Amore el &eacute;nfasis de la Auditor&iacute;a Inform&aacute;tica estar&iacute;a en:";
 choices[29]= new Array();
 choices[29][0] = "en detectar los errores";
 choices[29][1] = "en  corregir los problemas";
 choices[29][2] = "evitar los problemas";
 choices[29][3] = "en prevenir los problemas.";
 answers[29] = choices[29][3];
 units[29] = "31";
 comments[29] = "Id Pregunta: 614. ";


//  Id pregunta: 623 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  Los m&eacute;todos especialmente adecuados para problemas de DMD en los que como resultado se busque o sea suficiente obtener un subconjunto de alternativas aceptables son:";
 choices[30]= new Array();
 choices[30][0] = "m&eacute;todos de concordancia";
 choices[30][1] = "m&eacute;todos de permutaci&oacute;n";
 choices[30][2] = "metodos lexicogr&aacute;ficos";
 choices[30][3] = "m&eacute;todos de la entrop&iacute;a";
 answers[30] = choices[30][0];
 units[30] = "34";
 comments[30] = "Id Pregunta: 623. ";


//  Id pregunta: 640 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  Cu&aacute;l de las siguientes afirmaciones sobre la Iniciativa de Accesibilidad para el contenido en la web (WCAG 1.0) es incorrecta:";
 choices[31]= new Array();
 choices[31][0] = "La especificaci&oacute;n contiene 14 pautas, que son los principios generales para el dise&ntilde;o accesible";
 choices[31][1] = "Cada pauta est&aacute; asociada a uno o m&aacute;s puntos de verificaci&oacute;n que describen c&oacute;mo aplicar esa pauta a las p&aacute;ginas web.";
 choices[31][2] = "Cada punto de verificaci&oacute;n est&aacute; asociado a uno de los tres niveles de adecuaci&oacute;n, los niveles A, AA y AAA";
 choices[31][3] = "El nivel minimo de adecuacion a esta norma lo fija la Ley de Servicios de la Sociedad de la Informaci&oacute;n y del Comercio Electr&oacute;nico y obliga a que las p&aacute;ginas web de la Administraci&oacute;n cumplan al menos con el nivel de adecuaci&oacute;n AA.";
 answers[31] = choices[31][3];
 units[31] = "39";
 comments[31] = "Id Pregunta: 640. ";


//  Id pregunta: 642 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Cu&aacute;l de las siguientes afirmaciones sobre sistemas abiertos es incorrecta:";
 choices[32]= new Array();
 choices[32][0] = "El modelo b&aacute;sico de referencia para la Interconexi&oacute;n de Sistemas Abiertos de ISO consiste en la arquitectura OSI, que se basa en las especificaciones de IEEE.";
 choices[32][1] = "La instituci&oacute;n p&uacute;blica IEEE genera las normas m&aacute;s avanzados dentro del campo de estandarizaci&oacute;n de redes locales.";
 choices[32][2] = "El programa IDABC tiene como uno de sus fines promover la colaboraci&oacute;n entre las administraciones p&uacute;blicas de los distintos pa&iacute;ses europeos.";
 choices[32][3] = "NIST fija los est&aacute;ndares federales de tratamiento de la informaci&oacute;n que las agencias gubernamentales deben seguir en la contrataci&oacute;n de software y hardware.";
 answers[32] = choices[32][1];
 units[32] = "40";
 comments[32] = "Id Pregunta: 642. ";


//  Id pregunta: 663 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Qu&eacute; organizaci&oacute;n normalizadora se dedica a trabajar en la extensi&oacute;n del est&aacute;ndar POSIX (Portable Operating System Interface for Computer Environments):";
 choices[33]= new Array();
 choices[33][0] = "X/OPEN";
 choices[33][1] = "ACE";
 choices[33][2] = "OSF";
 choices[33][3] = "IEEE";
 answers[33] = choices[33][3];
 units[33] = "40";
 comments[33] = "Id Pregunta: 663. ";


//  Id pregunta: 4246 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  Seg&uacute;n la Ley 11/2007 de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos:";
 choices[34]= new Array();
 choices[34][0] = "Se deja en manos de las propias Administraciones determinar si los ciudadanos van a poder de modo efectivo, o no, relacionarse por medios electr&oacute;nicos con ellas.";
 choices[34][1] = "Afecta s&oacute;lo a la Administraci&oacute;n General del Estado, aunque se espera que el resto de administraciones (auton&oacute;mica y local) adopten algunas de las medidas expresadas en la ley de forma voluntaria.";
 choices[34][2] = "Se garantiza el derecho del ciudadano a no tener que presentar informaci&oacute;n que se encuentre ya en poder de las administraciones.";
 choices[34][3] = "Las Administraciones podr&aacute;n permitir a los ciudadanos que consulten el estado de tramitaci&oacute;n de los procedimientos que se tengan en marcha, pero en ning&uacute;n caso estar&aacute;n obligadas a ello.";
 answers[34] = choices[34][2];
 units[34] = "43";
 comments[34] = "Id Pregunta: 4246. Sobre Proyecto LAECAP";


//  Id pregunta: 4252 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  Respecto al avance de la Sociedad de la Informaci&oacute;n en Espa&ntilde;a:";
 choices[35]= new Array();
 choices[35][0] = "El Plan Avanza contempla como l&iacute;neas de acci&oacute;n el avance en la e-inclusi&oacute;n y en el desarrollo de servicios p&uacute;blicos digitales, pero no entra en materias como el fomento de la competitividad y la innovaci&oacute;n en Espa&ntilde;a.";
 choices[35][1] = "El Plan Avanza constituye uno de los ejes del programa Ingenio 2010.";
 choices[35][2] = "El Plan Avanza del Ministerio de Industria busca la convergencia con Europea en materia de Sociedad de la Informaci&oacute;n, pero desmarc&aacute;ndose notablemente de los objetivos que se plantearon en la Estrategia de Lisboa.";
 choices[35][3] = "El Plan Avanza, lanzado por el Ministerio de Administraciones P&uacute;blicas, reduce su &aacute;mbito de aplicaci&oacute;n a la Administraci&oacute;n General del Estado.";
 answers[35] = choices[35][1];
 units[35] = "30";
 comments[35] = "Id Pregunta: 4252. ";


//  Id pregunta: 4256 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  Cu&aacute;l de los siguientes programas NO pertenece al Plan Avanza";
 choices[36]= new Array();
 choices[36][0] = "Programa Ayuntamiento Digital, continuaci&oacute;n del Programa Ciudades Digitales que tiene como objetivo la promoci&oacute;n e implantaci&oacute;n de la Sociedad de la Informaci&oacute;n en Entidades Locales.";
 choices[36][1] = "El Plan Concilia, plan integral de conciliaci&oacute;n de la vida personal y laboral en la Administraci&oacute;n General del Estado.";
 choices[36][2] = "El Programa de Fomento de la Investigaci&oacute;n T&eacute;cnica (PROFIT), destinadas a estimular a las empresas y a otras entidades a llevar a cabo actividades de investigaci&oacute;n y desarrollo tecnol&oacute;gico.";
 choices[36][3] = "DNI electr&oacute;nico, dirigido a ampliar nuestras capacidades de actuar a distancia con las Administraciones P&uacute;blicas, con las empresas y con otros ciudadanos";
 answers[36] = choices[36][1];
 units[36] = "30";
 comments[36] = "Id Pregunta: 4256. Esta pregunta es muy antigua y con demasiado detalle para ser tan antigua, pero nunca se sabe.";


//  Id pregunta: 4325 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  Entre las capacidades que deben ser consideradas por el Administrador de una base de datos para evaluar la seguridad e integridad de los datos de un SGBD, no se encuentra...";
 choices[37]= new Array();
 choices[37][0] = "Control de concurrencia";
 choices[37][1] = "Control de herencia.";
 choices[37][2] = "Control de acceso.";
 choices[37][3] = "Las facilidades de cifrado.";
 answers[37] = choices[37][1];
 units[37] = "26,57";
 comments[37] = "Id Pregunta: 4325. ";


//  Id pregunta: 4402 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  Seg&uacute;n Magerit v.2 los elementos del an&aacute;lisis de riesgos son:";
 choices[38]= new Array();
 choices[38][0] = "Impacto, riesgos calculados y riesgos intr&iacute;nsecos.";
 choices[38][1] = "Activos, amenazas y salvaguardas.";
 choices[38][2] = "Vulnerabilidades, riesgos e impacto.";
 choices[38][3] = "Entorno, sistema de informaci&oacute;n, informaci&oacute;n, funciones y otros.";
 answers[38] = choices[38][1];
 units[38] = "33";
 comments[38] = "Id Pregunta: 4402. ";


//  Id pregunta: 4558 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Seg&uacute;n la LOPD de datos de car&aacute;cter personal, indicar cual de las siguientes infracciones es calificada como grave";
 choices[39]= new Array();
 choices[39][0] = "no atender los requerimientos o apercibimientos de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos o no proporcionar a aqu&eacute;lla cuantos documentos e informaciones sean solicitados por la misma.";
 choices[39][1] = "el impedimento del ejercicio de derechos de acceso y oposici&oacute;n y la negativa a facilitar informaci&oacute;n solicitada.";
 choices[39][2] = "no atender de forma sistem&aacute;tica el deber legal de notificaci&oacute;n de la inclusi&oacute;n de datos de car&aacute;cter personal en un fichero";
 choices[39][3] = "tratar los datos de car&aacute;cter personal de forma legitima";
 answers[39] = choices[39][0];
 units[39] = "29";
 comments[39] = "Id Pregunta: 4558. ";


//  Id pregunta: 4678 AÃ±o de creación de pregunta: 2009-01-01
 questions[40]= "41)  Tenemos un fichero de tratamiento automatizado que contiene datos sobre ideolog&iacute;a y afiliaci&oacute;n sindical.";
 choices[40]= new Array();
 choices[40][0] = "La LOPD obliga a informar a la Agencia Estatal de Protecci&oacute;n de Datos de su existencia y establece un nivel de seguridad clasificado como medio";
 choices[40][1] = "Solo podemos tener estos datos si existe consentimiento expreso de los afectados.";
 choices[40][2] = "Al no ser un partido pol&iacute;tico o sindicato no podemos tener este tipo de datos";
 choices[40][3] = "Solo podemos tener estos datos si existe consentimiento expreso y por escrito de los afectados o somos un partido pol&iacute;tico o sindicato";
 answers[40] = choices[40][3];
 units[40] = "29";
 comments[40] = "Id Pregunta: 4678. NULL";


//  Id pregunta: 4697 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  Los sistemas colaborativos buscan";
 choices[41]= new Array();
 choices[41][0] = "Que todo el mundo participe en la toma de decisiones";
 choices[41][1] = "La puesta a disposici&oacute;n de un gran volumen de informaci&oacute;n.";
 choices[41][2] = " Integrar el trabajo de muchos usuarios concurrentes en un solo proyecto.";
 choices[41][3] = "El despliegue de un sistema de informaci&oacute;n que abarque a todo el personal de la organizaci&oacute;n.";
 answers[41] = choices[41][2];
 units[41] = "21";
 comments[41] = "Id Pregunta: 4697. Examen 2006 JCYL";


//  Id pregunta: 4887 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  Son &oacute;rganos de contrataci&oacute;n";
 choices[42]= new Array();
 choices[42][0] = "Los Ministros y los Secretarios de Estado";
 choices[42][1] = "Los representantes legales de los Organismos aut&oacute;nomos y dem&aacute;s Entidades p&uacute;blicas estatales y los Directores Generales de las distintas Entidades gestoras y Servicios comunes de la Seguridad Social.";
 choices[42][2] = "a) y b) son correctas";
 choices[42][3] = "El Subsecretario de Econom&iacute;a y Hacienda";
 answers[42] = choices[42][2];
 units[42] = "41";
 comments[42] = "Id Pregunta: 4887. Art. 316 RD Legislativo 3/2011";


//  Id pregunta: 5015 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  La norma ISO 27002 recoge:";
 choices[43]= new Array();
 choices[43][0] = "Buenas pr&aacute;ticas para la gesti&oacute;n de la seguridad de la informaci&oacute;n";
 choices[43][1] = "La reglamentaci&oacute;n de interconexi&oacute;n segura de redes inal&aacute;mbricas (WIFI)";
 choices[43][2] = "Normativa aplicable para el desarrollo de aplicaciones militares";
 choices[43][3] = "Est&aacute;ndares de desarrollo de aplicaciones de uso dual (civil y militar)";
 answers[43] = choices[43][0];
 units[43] = "32";
 comments[43] = "Id Pregunta: 5015. Examen TIC A 2007";


//  Id pregunta: 5109 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  Indique cu&aacute;l es la norma espa&ntilde;ola en base a la cual se certifica un Sistema de Gesti&oacute;n de la Seguridad de la Informaci&oacute;n:";
 choices[44]= new Array();
 choices[44][0] = "ISO/IEC TR 13335";
 choices[44][1] = "UNE 71501 IN";
 choices[44][2] = "UNE-ISO/EIC 17799:2002";
 choices[44][3] = "UNE 71502:2004";
 answers[44] = choices[44][3];
 units[44] = "32";
 comments[44] = "Id Pregunta: 5109. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5547 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  Entre los derechos reconocidos por la Ley de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos NO se encuentra:";
 choices[45]= new Array();
 choices[45][0] = "El Derecho a la Igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[45][1] = "El Derecho a la Conservaci&oacute;n en formato electr&oacute;nico por las Administraciones P&uacute;blicas, de los documentos electr&oacute;nicos que formen parte de un expediente.";
 choices[45][2] = "El Derecho a obtener los medios de identificaci&oacute;n electr&oacute;nica necesarios.";
 choices[45][3] = "El Derecho a la libre utilizaci&oacute;n de cualquier sistema de firma electr&oacute;nica.";
 answers[45] = choices[45][3];
 units[45] = "43";
 comments[45] = "Id Pregunta: 5547. NULL";


//  Id pregunta: 5556 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Respecto a la Ley 56/2007 de Medidas de Impulso de la Sociendad de la Informaci&oacute;n, se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[46]= new Array();
 choices[46][0] = "Se enmarca dentro del Plan 2006-2010 para el desarrollo de la Sociedad de la Informaci&oacute;n y de convergencia con Europa y entre Comunidades Aut&oacute;nomas y Ciudades Aut&oacute;nomas, Plan Avanza.";
 choices[46][1] = "Modifica la Ley 34/2002 de SSI, la ley 59/2003 de FE, la ley 32/2003 General de Telecomunicaciones y la Ley  de Propiedad Intelectual, entre otras";
 choices[46][2] = "Esta Ley habilita a los Ministerios de Industria, Turismo y Comercio, y de Administraciones P&uacute;blicas, a aprobar formatos estructurados est&aacute;ndar de facturas electr&oacute;nicas.";
 choices[46][3] = "Obliga a las empresas de sectores de especial incidencia a facilitar un medio de interlocuci&oacute;n telem&aacute;tica a los usuarios con certificados reconocidos de firma electr&oacute;nica.";
 answers[46] = choices[46][2];
 units[46] = "30";
 comments[46] = "Id Pregunta: 5556. ";


//  Id pregunta: 5593 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes entidades no est&aacute; sometida al RD Legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[47]= new Array();
 choices[47][0] = "Entidades Locales";
 choices[47][1] = "Fundaciones p&uacute;blicas";
 choices[47][2] = "Mutuas de Accidentes de Trabajo y Enfermedades Profesionales de la Seguridad Social";
 choices[47][3] = "Todas las entidades anteriores est&aacute;n sometidas al RD Legislativo 3/2011.";
 answers[47] = choices[47][3];
 units[47] = "41";
 comments[47] = "Id Pregunta: 5593. ";


//  Id pregunta: 5706 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  La ley 11/2007 que regula el acceso electr&oacute;nico de los ciudadanos  a los servicios p&uacute;blicos, transpone aspectos de:";
 choices[48]= new Array();
 choices[48][0] = "De la directiva 200/31/CE relativos a Servicios de la Sociedad de la Informaci&oacute;n.";
 choices[48][1] = "De la Directiva 2006/123/CE relativa a los servicios en el mercado interior.";
 choices[48][2] = "De la Directiva 2002/58/CE sobre la privacidad y las comunicaciones electr&oacute;nicas.";
 choices[48][3] = "No recoge la transposici&oacute;n de articulado relativo a ninguna Directiva.";
 answers[48] = choices[48][1];
 units[48] = "43";
 comments[48] = "Id Pregunta: 5706. NULL";


//  Id pregunta: 5796 AÃ±o de creación de pregunta: 2009-01-01
 questions[49]= "50)  Seg&uacute;n la ley 11/2007 de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, los ciudadanos podr&aacute;n utilizar diferentes sistemas de firma electr&oacute;nica para relacionarse con las Administraciones P&uacute;blicas, de acuerdo con lo que cada Administraci&oacute;n determine. Seleccione la respuesta FALSA:";
 choices[49]= new Array();
 choices[49][0] = "Sistemas de firma electr&oacute;nica avanzada basados en certificados electr&oacute;nicos reconocidos. Las administraciones deber&aacute;n admitir todos los certificados de los prestadores incluidos en la TSL publicada en la sede electr&oacute;nica de MINETUR.";
 choices[49][1] = "En todo caso, los sistemas de firma electr&oacute;nica incorporados al DNI, para personas f&iacute;sicas.";
 choices[49][2] = "Otros sistemas de firma electr&oacute;nica, como la utilizaci&oacute;n de claves concertadas en un registro previo como usuario, la aportaci&oacute;n de informaci&oacute;n conocida por ambas partes u otros sistemas no criptogr&aacute;ficos, en los t&eacute;rminos y condiciones que en cada caso se determinen.";
 choices[49][3] = "Sistemas que permitan la identidad privada mediante un sistema criptogr&aacute;fico de clave publica reconocido por @firma.";
 answers[49] = choices[49][3];
 units[49] = "43";
 comments[49] = "Id Pregunta: 5796. MAP 2008 A2. Actualizada a modificaci&oacute;n art 13 Ley 11/2007 por Ley 15/2014.";


//  Id pregunta: 5971 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  Cu&aacute;l de las siguientes opciones NO es un principio de la protecci&oacute;n de datos seg&uacute;n la Ley Org&aacute;nica 15/1999:";
 choices[50]= new Array();
 choices[50][0] = "Datos relativos a las personas";
 choices[50][1] = "Calidad de los datos";
 choices[50][2] = "Consentimiento del afectado";
 choices[50][3] = "Seguridad de los datos";
 answers[50] = choices[50][0];
 units[50] = "29";
 comments[50] = "Id Pregunta: 5971. Castilla La Mancha 2009";


//  Id pregunta: 5987 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  De acuerdo con la normativa vigente en materia de protecci&oacute;n jur&iacute;dica de los programas de ordenador, &iquest;durante cu&aacute;nto tiempoestar&aacute;n protegidos los derechos de explotaci&oacute;n de un manual de uso de un programa obra de una persona natural?";
 choices[51]= new Array();
 choices[51][0] = "100 a&ntilde;os desde su publicaci&oacute;n, despu&eacute;s pasa a dominio p&uacute;blico.";
 choices[51][1] = "Como es una obra impresa, tiene la consideraci&oacute;n de obra literaria y se protege durante la vida del autor y 60 a&ntilde;os despu&eacute;s de su muerte o declaraci&oacute;n de fallecimiento.";
 choices[51][2] = "A estos efectos, el manual se considera parte del programa y se protege durante la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte o declaraci&oacute;n de fallecimiento.";
 choices[51][3] = "Depende, si el manual est&aacute; impreso, entonces la protecci&oacute;n es la vida del autor y 50 a&ntilde;os despu&eacute;s de su muerte y si es un tutorial no impreso, entonces es la vida del autor y 40 a&ntilde;os despu&eacute;s de su muerte.";
 answers[51] = choices[51][2];
 units[51] = "36";
 comments[51] = "Id Pregunta: 5987. TIC A 2009";


//  Id pregunta: 5991 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  Para eliminar una tabla de una base de datos relacional, se utiliza la sentencia DDL:";
 choices[52]= new Array();
 choices[52][0] = "Delete table.";
 choices[52][1] = "rm table.";
 choices[52][2] = "Delete table now.";
 choices[52][3] = "DROP TABLE.";
 answers[52] = choices[52][3];
 units[52] = "58";
 comments[52] = "Id Pregunta: 5991. TIC A 2009";


//  Id pregunta: 6080 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  La gesti&oacute;n de los recursos humanos del proyecto incluye lo siguiente:";
 choices[53]= new Array();
 choices[53][0] = "Planificaci&oacute;n de los Recursos Humanos, Adquirir el Equipo del Proyecto, Desarrollar el Equipo del Proyecto, Gestionar el Equipo del Proyecto.";
 choices[53][1] = "Adquirir el Equipo del Proyecto, Desarrollar el Equipo del Proyecto, Gestionar el Equipo del Proyecto.";
 choices[53][2] = "Planificaci&oacute;n de los Recursos Humanos, Adquirir el Equipo del Proyecto, Desarrollar el Equipo del Proyecto.";
 choices[53][3] = "Ninguna de las anteriores.";
 answers[53] = choices[53][0];
 units[53] = "27";
 comments[53] = "Id Pregunta: 6080. ";


//  Id pregunta: 6166 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Se&ntilde;ale cual es el flujo general de informaci&oacute;n dentro de la organizaci&oacute;n:";
 choices[54]= new Array();
 choices[54][0] = "Entrada, procesado, almacenamiento, difusi&oacute;n y utilizaci&oacute;n.";
 choices[54][1] = "Entrada, almacenamiento, utilizaci&oacute;n, procesado y difusi&oacute;n.";
 choices[54][2] = "Entrada, procesado, almacenamiento, utilizaci&oacute;n y difusi&oacute;n.";
 choices[54][3] = "Entrada, almacenamiento, procesado, difusi&oacute;n y utilizaci&oacute;n.";
 answers[54] = choices[54][3];
 units[54] = "21";
 comments[54] = "Id Pregunta: 6166. ";


//  Id pregunta: 6167 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes sistemas de informaci&oacute;n esta asociado con el nivel operacional?";
 choices[55]= new Array();
 choices[55][0] = "Executive Information System (E.I.S.)";
 choices[55][1] = "Management Information System (M.I.S.)";
 choices[55][2] = "Transaction Processing System (T.P.S.)";
 choices[55][3] = "Enterprise Resource Planning Solution (E.R.P.)";
 answers[55] = choices[55][2];
 units[55] = "21";
 comments[55] = "Id Pregunta: 6167. ";


//  Id pregunta: 6171 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  El Cuerpo Superior de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaciones (CSTIC) fue una decisi&oacute;n del Gobierno de:";
 choices[56]= new Array();
 choices[56][0] = "1989";
 choices[56][1] = "1990";
 choices[56][2] = "1991";
 choices[56][3] = "1992";
 answers[56] = choices[56][1];
 units[56] = "24";
 comments[56] = "Id Pregunta: 6171. ";


//  Id pregunta: 6193 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  La Orden PRE/878/2010 regula";
 choices[57]= new Array();
 choices[57][0] = "El Registro Electr&oacute;nico Com&uacute;n";
 choices[57][1] = "Los contenidos y servicios m&iacute;nimos de las sedes electr&oacute;nicas";
 choices[57][2] = "El uso de certificados de empleado p&uacute;blico";
 choices[57][3] = "La direcci&oacute;n electr&oacute;nica habilitada";
 answers[57] = choices[57][3];
 units[57] = "43";
 comments[57] = "Id Pregunta: 6193. Orden PRE/878/2010, previsto en el art&iacute;culo 38.2 del Real Decreto 1671/2009, de 6 de noviembre.";


//  Id pregunta: 6379 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;A qui&eacute;n corresponde aprobar el Plan de direccionamiento e interconexi&oacute;n de redes en la Administraci&oacute;n?";
 choices[58]= new Array();
 choices[58][0] = "A la Comisi&oacute;n de Estrategia TIC";
 choices[58][1] = "Al Centro Criptol&oacute;gico Nacional";
 choices[58][2] = "Al Gobierno";
 choices[58][3] = "A la Secretaria de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 answers[58] = choices[58][0];
 units[58] = "43";
 comments[58] = "Id Pregunta: 6379. Art&iacute;culo 14 ENI, referencia actualizada de Consejo Superior Administraci&oacute;n Electr&oacute;nica a CETIC por Disp Adicional 2&ordf; del RD 806/2014.";


//  Id pregunta: 6383 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Las disposiciones del RD 1671/2009 ser&aacute;n de aplicaci&oacute;n a:";
 choices[59]= new Array();
 choices[59][0] = "Al sector p&uacute;blico en su conjunto.";
 choices[59][1] = "A todas las Administraciones P&uacute;blicas , as&iacute; como de los organismos p&uacute;blicos vinculados o dependientes de las mismas.";
 choices[59][2] = "A las relaciones entre las Administraciones P&uacute;blicas.";
 choices[59][3] = "A la actividad de la Administraci&oacute;n General del Estado, as&iacute; como de los organismos p&uacute;blicos vinculados o dependientes de la misma.";
 answers[59] = choices[59][3];
 units[59] = "43";
 comments[59] = "Id Pregunta: 6383. Art&iacute;culo 1 RD 1671/2009";


//  Id pregunta: 6399 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  De acuerdo a lo dispuesto en la ley 59/2003, se&ntilde;ale la respuesta correcta";
 choices[60]= new Array();
 choices[60][0] = "Firma electr&oacute;nica, es el conjunto de datos en forma electr&oacute;nica, consignados junto a otros o asociados con ellos, que pueden ser utilizados como medio de identificaci&oacute;n del firmante.";
 choices[60][1] = "La firma electr&oacute;nica avanzada tendr&aacute; respecto de los datos consignados en forma electr&oacute;nica el mismo valor que la firma manuscrita en relaci&oacute;n con los consignados en papel.";
 choices[60][2] = "La firma electronica avanzada es la firma electr&oacute;nica reconocida basada en un certificado reconocido y generada mediante un dispositivo seguro de creaci&oacute;n de firma.";
 choices[60][3] = "La firma electr&oacute;nica reconocida es la firma electr&oacute;nica avanzada que permite identificar al firmante, as&iacute; como el momento de creaci&oacute;n y detectar cualquier cambio ulterior de los datos firmados, que est&aacute; vinculada al firmante de manera &uacute;nica y a los datos a que se refiere y que ha sido creada por medios que el firmante puede mantener bajo su exclusivo control.";
 answers[60] = choices[60][0];
 units[60] = "30";
 comments[60] = "Id Pregunta: 6399. Ley 59/2003, art&iacute;culo 3";


//  Id pregunta: 6417 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  El reglamento sobre las condiciones b&aacute;sicas para el acceso de las personas con discapacidad a las tecnolog&iacute;as, productos y servicios relacionados con la sociedad de la informaci&oacute;n y medios de comunicaci&oacute;n social es el:";
 choices[61]= new Array();
 choices[61][0] = "RD 1494/2007";
 choices[61][1] = "RD 1497/2004";
 choices[61][2] = "RD 1449/2007";
 choices[61][3] = "RD 1479/2007";
 answers[61] = choices[61][0];
 units[61] = "39";
 comments[61] = "Id Pregunta: 6417. NULL";


//  Id pregunta: 6424 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;ntas pautas se definen en total en las gu&iacute;as WCAG 2.0?";
 choices[62]= new Array();
 choices[62][0] = "12";
 choices[62][1] = "14";
 choices[62][2] = "25";
 choices[62][3] = "81";
 answers[62] = choices[62][0];
 units[62] = "39";
 comments[62] = "Id Pregunta: 6424. NULL";


//  Id pregunta: 6445 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  La organizaci&oacute;n intergubernamental cuyo objetivo es coordinar el desarrollo y operabilidad de las redes y servicios de telecomunicaciones, se denomina:";
 choices[63]= new Array();
 choices[63][0] = "ITU";
 choices[63][1] = "IEC";
 choices[63][2] = "ETSI";
 choices[63][3] = "Ninguna de las anteriores";
 answers[63] = choices[63][0];
 units[63] = "42";
 comments[63] = "Id Pregunta: 6445. Castilla La Mancha 2009";


//  Id pregunta: 7352 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  En la teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta &iquest;Cu&aacute;l de los siguientes es un m&eacute;todo de asignaci&oacute;n de pesos?";
 choices[64]= new Array();
 choices[64][0] = "Delphi";
 choices[64][1] = "Promethee";
 choices[64][2] = "Electre";
 choices[64][3] = "Qualiflex";
 answers[64] = choices[64][0];
 units[64] = "34";
 comments[64] = "Id Pregunta: 7352. NULL";


//  Id pregunta: 8485 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Se est&aacute; planificando la configuraci&oacute;n de los equipos de un centro de tratamiento de la informaci&oacute;n, seg&uacute;n un Enfoque basado en el riesgo. De acuerdo con la metodolog&iacute;a MAGERIT, la tarea de valoraci&oacute;n de salvaguardias se encuadra en el proceso:";
 choices[65]= new Array();
 choices[65][0] = "Gesti&oacute;n de riesgos.";
 choices[65][1] = "An&aacute;lisis de salvaguardias.";
 choices[65][2] = "An&aacute;lisis de riesgos.";
 choices[65][3] = "Gesti&oacute;n de salvaguardias.";
 answers[65] = choices[65][2];
 units[65] = "33";
 comments[65] = "Id Pregunta: 8485. Examen TIC A2 2010 interna";


//  Id pregunta: 8739 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  En el &aacute;mbito de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal, los denominados derechos &quot;ARCO&quot; corresponden a los derechos de:";
 choices[66]= new Array();
 choices[66][0] = "Acceso, Rectificaci&oacute;n, Cancelaci&oacute;n y Oposici&oacute;n";
 choices[66][1] = "Acceso. Rectificaci&oacute;n, Coordinaci&oacute;n y Oposici&oacute;n";
 choices[66][2] = "Activaci&oacute;n. Rectificaci&oacute;n. Cancelaci&oacute;n y Oposici&oacute;n.";
 choices[66][3] = "Acceso. Repudio. Cancelaci&oacute;n y Oposici&oacute;n.";
 answers[66] = choices[66][0];
 units[66] = "29";
 comments[66] = "Id Pregunta: 8739. Examen TIC A2 2010 interna";


//  Id pregunta: 9298 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  En cuanto a la dependencia entre activos que se considera a la hora de evaluar riesgos:";
 choices[67]= new Array();
 choices[67][0] = "La seguridad del activo superior depende de la del inferior.";
 choices[67][1] = "El activo superior puede ser atacado a trav&eacute;s del inferior.";
 choices[67][2] = "La relaci&oacute;n indica que el activo inferior es necesario para que el superior funcione.";
 choices[67][3] = "La a) y la b) son correctas.";
 answers[67] = choices[67][3];
 units[67] = "32";
 comments[67] = "Id Pregunta: 9298. ";


//  Id pregunta: 9304 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes no es una de las cinco funciones de la auditor&iacute;a inform&aacute;tica?";
 choices[68]= new Array();
 choices[68][0] = "Velar por la eficacia y eficiencia del sistema inform&aacute;tico";
 choices[68][1] = "Verificar el cumplimiento de las normas y est&aacute;ndares vigentes en la organizaci&oacute;n";
 choices[68][2] = "Verificar la calidad de los sistemas de informaci&oacute;n, y proponer e implantar mejoras en los mismos";
 choices[68][3] = "Supervisar los mecanismos de control interno";
 answers[68] = choices[68][2];
 units[68] = "31";
 comments[68] = "Id Pregunta: 9304. ";


//  Id pregunta: 9409 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  Qui&eacute;n deber&iacute;a cerrar siempre las incidencias?";
 choices[69]= new Array();
 choices[69][0] = "El nivel 1 (CAU)";
 choices[69][1] = "El nivel 2 (resto de &aacute;reas del centro TIC)";
 choices[69][2] = "El nivel 3 (proveedores)";
 choices[69][3] = "Aquel nivel que resuelva la incidencia";
 answers[69] = choices[69][0];
 units[69] = "26";
 comments[69] = "Id Pregunta: 9409. ";


//  Id pregunta: 9543 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[70]= new Array();
 choices[70][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[70][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[70][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[70][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[70] = choices[70][1];
 units[70] = "30";
 comments[70] = "Id Pregunta: 9543. Examen TIC A1 2011";


//  Id pregunta: 9548 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  Seg&uacute;n la Ley de Firma Electr&oacute;nica, se&ntilde;ale cu&aacute;l NO es un supuesto que exima al prestador de servicios de certificaci&oacute;n de la responsabilidad sobre los posibles da&ntilde;os y perjuicios causados a un firmante:";
 choices[71]= new Array();
 choices[71][0] = "Cuando el firmante no haya proporcionado al prestador informaci&oacute;n veraz, completa y exacta de los datos que deban constar en el certificado en el momento de emitir el mismo";
 choices[71][1] = "Cuado el firmante no haya comunicado al prestador cualquier cambio en las circunstancias reflejadas en el certificado electr&oacute;nico";
 choices[71][2] = "Cuando el firmante haya sido negligente en la conservaci&oacute;n de sus datos de creaci&oacute;n de firma";
 choices[71][3] = "Cuando el firmante utilice un certificado revocado sin que el prestador le haya notificado la suspensi&oacute;n de la vigencia";
 answers[71] = choices[71][3];
 units[71] = "30";
 comments[71] = "Id Pregunta: 9548. Ley 59/2003, art&iacute;culo 23";


//  Id pregunta: 9592 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  El c&oacute;mputo de plazos, imputables tanto a los interesados como a las Administraciones P&uacute;blicas, seg&uacute;n se establece en el art&iacute;culo 26 de la Ley 11/2007 se fija por:";
 choices[72]= new Array();
 choices[72][0] = "La fecha y hora oficial de la sede electr&oacute;nica de los servicios centrales, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible";
 choices[72][1] = "La fecha y hora oficial de la sede electr&oacute;nica de acceso, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible";
 choices[72][2] = "La fecha y hora oficial del Real Instituto y Observatorio de la Armada, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible.";
 choices[72][3] = "La fecha y hora oficial de la sede electr&oacute;nica del Ministerio de Pol&iacute;tica Territorial y Administraci&oacute;n P&uacute;blica, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible";
 answers[72] = choices[72][1];
 units[72] = "43";
 comments[72] = "Id Pregunta: 9592. Examen TIC A2 2011 interna";


//  Id pregunta: 9639 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  El funcionamiento de la Junta de Contrataci&oacute;n Centralizada se regula en:";
 choices[73]= new Array();
 choices[73][0] = "HAP/2027/2013";
 choices[73][1] = "HAP/2028/2013";
 choices[73][2] = "RD 695/2013";
 choices[73][3] = "Ninguna de las anteriores";
 answers[73] = choices[73][1];
 units[73] = "41";
 comments[73] = "Id Pregunta: 9639. NULL";


//  Id pregunta: 9803 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes medidas de seguridad NO pertenece al grupo &quot;Medidas de protecci&oacute;n [mp]&quot; seg&uacute;n el RD 3/2010 (Esquema Nacional de Seguridad)?";
 choices[74]= new Array();
 choices[74][0] = "Detecci&oacute;n de intrusi&oacute;n.";
 choices[74][1] = "Formaci&oacute;n.";
 choices[74][2] = "Desarrollo.";
 choices[74][3] = "Energ&iacute;a el&eacute;ctrica.";
 answers[74] = choices[74][0];
 units[74] = "43";
 comments[74] = "Id Pregunta: 9803. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10347 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  En relaci&oacute;n con las tecnolog&iacute;as de gesti&oacute;n de derechos digitales, se&ntilde;ale la respuesta incorrecta:";
 choices[75]= new Array();
 choices[75][0] = "El sistema DRM creado por Apple recibe el nombre de FairPlay";
 choices[75][1] = "El sistema DRM creado por Microsoft recibe el nombre de Windows Media DRM";
 choices[75][2] = "El sistema DRM creado por Sony recibe el nombre de OpenMG";
 choices[75][3] = "El sistema DRM creado por RealNetworks es PlayReady";
 answers[75] = choices[75][3];
 units[75] = "37";
 comments[75] = "Id Pregunta: 10347. El esquema DRM desarrollado por RealNetworks es Helix DRM";


//  Id pregunta: 10357 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Ordene en sentido cronol&oacute;gico ascendente los siguientes programas europeos relacionados con la administraci&oacute;n electr&oacute;nica:";
 choices[76]= new Array();
 choices[76][0] = "IDA I, IDA II, ISA, IDABC";
 choices[76][1] = "IDA I, IDA II, IDABC, ISA";
 choices[76][2] = "IDA, IDABC I, IDABC II, ISA";
 choices[76][3] = "IDA, ISA, IDABC I, IDABC II";
 answers[76] = choices[76][1];
 units[76] = "40";
 comments[76] = "Id Pregunta: 10357. IDA I (1995-1998), IDA II (1999-2004), IDABC (2005-2009), ISA (2010-2015)";


//  Id pregunta: 10363 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  En relaci&oacute;n con la SETSI, se&ntilde;ale la respuesta incorrecta:";
 choices[77]= new Array();
 choices[77][0] = "Sus siglas corresponden a la Secretar&iacute;a de Estado de Telecomunicaciones y Sistemas de la Informaci&oacute;n";
 choices[77][1] = "Est&aacute; integrada dentro del Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[77][2] = "Desarrolla, entre otras funciones, la realizaci&oacute;n de estudios y propuestas de normas t&eacute;cnicas de equipos e instalaciones del sector de las telecomunicaciones";
 choices[77][3] = "El Ministerio de Industria, Energ&iacute;a y Turismo es miembro de la ETSI a trav&eacute;s de la SETSI";
 answers[77] = choices[77][0];
 units[77] = "42";
 comments[77] = "Id Pregunta: 10363. SETSI: Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";


//  Id pregunta: 10547 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  El primer paso a la hora de desarrollar un Plan de Continuidad de Negocio es:";
 choices[78]= new Array();
 choices[78][0] = "Clasificar los sistemas seg&uacute;n su importancia";
 choices[78][1] = "Establecer una estrategia de recuperaci&oacute;n de desastres";
 choices[78][2] = "determinar el tiempo cr&iacute;tico de recuperaci&oacute;n";
 choices[78][3] = "Realizar una clasificaci&oacute;n del riesgo";
 answers[78] = choices[78][0];
 units[78] = "31, 32, 33";
 comments[78] = "Id Pregunta: 10547. NULL";


//  Id pregunta: 10567 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Un local para el procesamiento de la informaci&oacute;n que dispone de energ&iacute;a el&eacute;ctrica suficiente, refrigeraci&oacute;n y suelo t&eacute;cnico, paneles, puertas, etc. se denomina en al argot de la Continuidad de Negocio:";
 choices[79]= new Array();
 choices[79][0] = "Un &quot;cold-Site&quot; o sitio en fr&iacute;o";
 choices[79][1] = "Un &quot;warm-Site&quot; o sitio tibio";
 choices[79][2] = "Un &quot;Hot-Site&quot; o sitio en caliente";
 choices[79][3] = "Un CPD duplicado &quot;Dupplicate Processing Site&quot;";
 answers[79] = choices[79][0];
 units[79] = "32";
 comments[79] = "Id Pregunta: 10567. ";


//  Id pregunta: 10683 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  Seg&uacute;n el Art&iacute;culo 14 de la Ley 39/2015. Para las personas f&iacute;sicas, &iquest;qui&eacute;n elige si la relaci&oacute;n se va a establecer a trav&eacute;s de medios electr&oacute;nicos?";
 choices[80]= new Array();
 choices[80][0] = "La Administraci&oacute;n.";
 choices[80][1] = "El ciudadano en todo caso.";
 choices[80][2] = "Habitualmente el ciudadano.";
 choices[80][3] = "Siempre se realiza a trav&eacute;s de medios electr&oacute;nicos.";
 answers[80] = choices[80][2];
 units[80] = "30";
 comments[80] = "Id Pregunta: 10683. ";


//  Id pregunta: 10712 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l no es seg&uacute;n la NTI de Modelo de Datos para el Intercambio de asientos entre las entidades registrales una caracter&iacute;stica de la misma?";
 choices[81]= new Array();
 choices[81][0] = "Inclusi&oacute;n de metadatos que faciliten el intercambio de asientos.";
 choices[81][1] = "Incorporaci&oacute;n de ficheros adjuntos a los intercambios.";
 choices[81][2] = "Orientaci&oacute;n a arquitecturas de intermediaci&oacute;n.";
 choices[81][3] = "Mejora en los mecanismos de control del intercambio.";
 answers[81] = choices[81][0];
 units[81] = "43";
 comments[81] = "Id Pregunta: 10712. ";


//  Id pregunta: 10734 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l es el &aacute;mbito de amplicaci&oacute;n de la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n?";
 choices[82]= new Array();
 choices[82][0] = "Administraci&oacute;n General del Estado";
 choices[82][1] = "Administraci&oacute;n General del Estado y Comunidades Aut&oacute;nom&aacute;s";
 choices[82][2] = "Cualquier &oacute;rgano de la Administraci&oacute;n p&uacute;blica";
 choices[82][3] = "Cualquier &oacute;rgano de la Administraci&oacute;n p&uacute;blica o Entidad de Derecho P&uacute;blico vinculada o dependiente";
 answers[82] = choices[82][3];
 units[82] = "43";
 comments[82] = "Id Pregunta: 10734. ";


//  Id pregunta: 10753 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l no se una l&iacute;nea de acci&oacute;n de la Estrategia de Ciberseguridad Nacional?";
 choices[83]= new Array();
 choices[83][0] = "Capacidad de prevenci&oacute;n, detecci&oacute;n, respuesta y recuperaci&oacute;n ante las ciberamenazas.";
 choices[83][1] = "Seguridad de los Sistemas de Informaci&oacute;n y Telecomunicaciones que soportan las Administraciones P&uacute;blicas.";
 choices[83][2] = "Seguridad de los Sistemas de Informaci&oacute;n y Telecomunicaciones que soportan las Infraestructuras Cr&iacute;ticas.";
 choices[83][3] = "Colaboraci&oacute;n con las entidades privadas para establecer un marco de seguridad nacional.";
 answers[83] = choices[83][3];
 units[83] = "43";
 comments[83] = "Id Pregunta: 10753. ";


//  Id pregunta: 10761 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Qu&eacute; serie CCN-STIC constituye un conjunto de normas desarrolladas para entornos basados en el sistema operativo Windows de Microsoft?";
 choices[84]= new Array();
 choices[84][0] = "500";
 choices[84][1] = "600";
 choices[84][2] = "700";
 choices[84][3] = "400";
 answers[84] = choices[84][0];
 units[84] = "43";
 comments[84] = "Id Pregunta: 10761. ";


//  Id pregunta: 10929 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  La Comisi&oacute;n Europea establece una serie de prioridades y acciones para promover una administraci&oacute;n p&uacute;blica inteligente, sostenible e innovadora, enmarcadas en el Plan de Acci&oacute;n Europeo sobre Administraci&oacute;n Electr&oacute;nica 2011-2015. Entre estas prioridades y acciones se incluyen:";
 choices[85]= new Array();
 choices[85][0] = "Mejora de la transparencia, participaci&oacute;n de los ciudadanos y las empresas en los procesos de elaboraci&oacute;n de pol&iacute;ticas y sanidad en l&iacute;nea.";
 choices[85][1] = "Asesorar a los &oacute;rganos competentes en materia de contrataci&oacute;n, en los criterios y directrices para la agregaci&oacute;n y planificaci&oacute;n de la demanda TIC que dichos &oacute;rganos elaboren.";
 choices[85][2] = "Realizar las actuaciones necesarias para una mayor eficiencia econ&oacute;mica, normalizando una red de clientes de cada Departamento Ministerial frente a proveedores externos.";
 choices[85][3] = "Realizar el informe t&eacute;cnico preceptivo de la memoria y los pliegos de prescripciones t&eacute;cnicas de los convenios de colaboraci&oacute;n y encomiendas de gesti&oacute;n que incluyan la prestaci&oacute;n de servicios en materia de TIC de la AGE.";
 answers[85] = choices[85][3];
 units[85] = "30";
 comments[85] = "Id Pregunta: 10929. TIC A1 AGE 2014";


//  Id pregunta: 10953 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Respecto a la Comisi&oacute;n de Estrategia TIC de la Administraci&oacute;n General del Estado, se&ntilde;ale la respuesta correcta:";
 choices[86]= new Array();
 choices[86][0] = "Est&aacute; adscrita al Ministerio de la Presidencia y es el &oacute;rgano encargado de la definici&oacute;n de la aplicaci&oacute;n de la Estrategia TIC de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos.";
 choices[86][1] = "Impulsa la colaboraci&oacute;n y cooperaci&oacute;n con las comunidades aut&oacute;nomas y las entidades locales para la puesta en marcha de servicios interadministrativos integrados.";
 choices[86][2] = "Define las prioridades de inversi&oacute;n en materias TIC bajo un convenio marco de colaboraci&oacute;n con la Direcci&oacute;n General de Patrimonio del Estado.";
 choices[86][3] = "Elevar&aacute; semestralmente, a trav&eacute;s de su Presidente, un informe al Consejo de Ministros, en el que se recoger&aacute; el estado de la transformaci&oacute;n digital de las Administraciones P&uacute;blicas.";
 answers[86] = choices[86][1];
 units[86] = "30";
 comments[86] = "Id Pregunta: 10953. TIC A1 AGE 2014";


//  Id pregunta: 10959 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  El Centro de Informaci&oacute;n y Red de Creaci&oacute;n de Empresas (CIRCE), gestionado por el Ministerio de Industria, Energ&iacute;a y Turismo:";
 choices[87]= new Array();
 choices[87][0] = "Permite realizar, de forma telem&aacute;tica, los tr&aacute;mites de constituci&oacute;n y puesta en marcha de todas las empresas que vayan a ejercer su actividad en el territorio nacional.";
 choices[87][1] = "Permite realizar, de forma telem&aacute;tica, los tr&aacute;mites de apoderamiento y gestiones notariales necesarias para la puesta en marcha de las empresas.";
 choices[87][2] = "Permite realizar de forma telem&aacute;tica, los tr&aacute;mites de constituci&oacute;n y puesta en marcha de Sociedades Limitada Nueva Empresa (SLNE), Sociedades de Responsabilidad Limitada (SRL o SL), o Empresarios Individuales (Aut&oacute;nomos).";
 choices[87][3] = "Es una plataforma para la informaci&oacute;n del emprendedor que se utiliza en los Puntos de Atenci&oacute;n al Emprendedor (PAEs), no permitiendo la realizaci&oacute;n de tr&aacute;mites online.";
 answers[87] = choices[87][2];
 units[87] = "30";
 comments[87] = "Id Pregunta: 10959. TIC A1 AGE 2014";


//  Id pregunta: 11118 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de los siguientes no es un derecho de los ciudadanos de acuerdo con la ley 11/2007?";
 choices[88]= new Array();
 choices[88][0] = "A relacionarse directamente con las AAPP.";
 choices[88][1] = "A no aportar datos y documentos que obren en poder de las Administraciones P&uacute;blicas";
 choices[88][2] = "A la conservaci&oacute;n en formato electr&oacute;nico por las Administraciones P&uacute;blicos de los documentos electr&oacute;nicos que formen parte de un expediente por duplicado";
 choices[88][3] = "A elegir en cada momento el canal a trav&eacute;s del cual se relacionen con la Administraci&oacute;n";
 answers[88] = choices[88][2];
 units[88] = "43";
 comments[88] = "Id Pregunta: 11118. ";


//  Id pregunta: 11199 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Estrategia Europea 2020 en materia de sostenibilidad energ&eacute;tica?";
 choices[89]= new Array();
 choices[89][0] = "20% de las energ&iacute;as deben proceder de una fuente renovable";
 choices[89][1] = "20% de aumento de la eficiencia energ&eacute;tica";
 choices[89][2] = "20% de los coches deben ser el&eacute;ctricos";
 choices[89][3] = "Emisiones de gases invernadero un 20% menores a los niveles de 1990";
 answers[89] = choices[89][2];
 units[89] = "30";
 comments[89] = "Id Pregunta: 11199. ";


//  Id pregunta: 11308 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Cu&aacute;l de los siguientes &oacute;rganos no es un &oacute;rgano de contrataci&oacute;n en el &aacute;mbito de un ministerio.";
 choices[90]= new Array();
 choices[90][0] = "Ministro";
 choices[90][1] = "Secretario de Estado.";
 choices[90][2] = "Junta de Contrataci&oacute;n.";
 choices[90][3] = "Mesa de Contrataci&oacute;n.";
 answers[90] = choices[90][3];
 units[90] = "41";
 comments[90] = "Id Pregunta: 11308. La Mesa de Contrataci&oacute;n es un &oacute;rgano de asistencia.";


//  Id pregunta: 11326 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Seg&uacute;n la Ley Org&aacute;nica de Protecci&oacute;n de Datos, Ley 15/99, el encargado del tratamiento es:";
 choices[91]= new Array();
 choices[91][0] = "Persona f&iacute;sica o jur&iacute;dica, autoridad p&uacute;blica o privada previa certificaci&oacute;n por la AEPD";
 choices[91][1] = "Persona f&iacute;sica, ya sea trabajador de una entidad p&uacute;blica, en cuyo caso ser&aacute; un funcionario o privada";
 choices[91][2] = "Persona f&iacute;sica, jur&iacute;dica o  entidad sin personalidad jur&iacute;dica, p&uacute;blica o privada, servicio o cualquier otro organismo";
 choices[91][3] = "Persona f&iacute;sica o jur&iacute;dica, autoridad p&uacute;blica o privada, servicio o cualquier otro organismo";
 answers[91] = choices[91][3];
 units[91] = "29";
 comments[91] = "Id Pregunta: 11326. ";


//  Id pregunta: 11488 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de las siguientes formas de distribuci&oacute;n p&uacute;blica de un programa de ordenador no puede utilizarse legalmente como forma de explotaci&oacute;n?";
 choices[92]= new Array();
 choices[92][0] = "La compraventa del programa.";
 choices[92][1] = "La donaci&oacute;n del programa.";
 choices[92][2] = "El alquiler del programa.";
 choices[92][3] = "Todas las anteriores.";
 answers[92] = choices[92][3];
 units[92] = "36";
 comments[92] = "Id Pregunta: 11488. NULL";


//  Id pregunta: 11583 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Se&ntilde;ale la opci&oacute;n incorrecta. Es posible la cesi&oacute;n de los datos de car&aacute;cter personal sin contar con el consentimiento del interesado cuando:";
 choices[93]= new Array();
 choices[93][0] = "La comunicaci&oacute;n que debe efectuarse tiene por destinatario el Tribunal de Cuentas y se realiza en el &aacute;mbito de las funciones que la ley le atribuya expresamente.";
 choices[93][1] = "Lo autoriza una norma de derecho comunitario.";
 choices[93][2] = "Es una cesi&oacute;n entre Administraciones p&uacute;blicas y tiene por objeto el tratamiento de los datos con fines cient&iacute;ficos.";
 choices[93][3] = "Todas las anteriores son correctas";
 answers[93] = choices[93][3];
 units[93] = "29";
 comments[93] = "Id Pregunta: 11583. ";


//  Id pregunta: 11602 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  La Orden HAP/7/2014 regula:";
 choices[94]= new Array();
 choices[94][0] = "El sistema cl@ve";
 choices[94][1] = "El Registro electr&oacute;nico de apoderamientos";
 choices[94][2] = "El Registro de funcionarios habilitados";
 choices[94][3] = "El sistema AutenticA";
 answers[94] = choices[94][2];
 units[94] = "44";
 comments[94] = "Id Pregunta: 11602. ";


//  Id pregunta: 11606 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  La tasa de transferencia de USB 3.0 es de:";
 choices[95]= new Array();
 choices[95][0] = "60 MB/s";
 choices[95][1] = "100 MB/s";
 choices[95][2] = "600 MB/s";
 choices[95][3] = "1GB/s";
 answers[95] = choices[95][2];
 units[95] = "46";
 comments[95] = "Id Pregunta: 11606. ";


//  Id pregunta: 11742 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Qu&eacute; nivel se tiene que establecer en un registro cuando un ciudadano registra datos de salud no siendo competencia del propio organismo ?";
 choices[96]= new Array();
 choices[96][0] = "nivel basico";
 choices[96][1] = "nivel medio";
 choices[96][2] = "nivel alto";
 choices[96][3] = "nivel bajo";
 answers[96] = choices[96][0];
 units[96] = "29";
 comments[96] = "Id Pregunta: 11742. ";


//  Id pregunta: 11745 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  como se puede asegurar la accesibilidad en los m&oacute;viles?";
 choices[97]= new Array();
 choices[97][0] = "web responsive";
 choices[97][1] = "WPA";
 choices[97][2] = "Web accesibility";
 choices[97][3] = "WSUS";
 answers[97] = choices[97][0];
 units[97] = "39";
 comments[97] = "Id Pregunta: 11745. ";


//  Id pregunta: 11765 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; normativa supondr&aacute; la aprobaci&oacute;n de una nueva ley de contratos?";
 choices[98]= new Array();
 choices[98][0] = "El Reglamento de la Intervenci&oacute;n General del Estado";
 choices[98][1] = "El Acuerdo sobre Libre Comercio de la OCDE";
 choices[98][2] = "Las nuevas Directivas europeas en materia de contrataci&oacute;n&nbsp;";
 choices[98][3] = "El Reglamento funcional del Tribunal Administrativo Central de Recursos Contractuales";
 answers[98] = choices[98][2];
 units[98] = "41";
 comments[98] = "Id Pregunta: 11765. ";


//  Id pregunta: 11773 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En el expediente de contrataci&oacute;n";
 choices[99]= new Array();
 choices[99][0] = "la memoria debe referirse a la necesidad e idoneidad del contrato";
 choices[99][1] = "la memoria debe referirse a los requisitos que deben contener los pliegos de cl&aacute;usulas administrativas y t&eacute;cnicas generales";
 choices[99][2] = "la memoria debe referirse solo a la necesidad del contrato";
 choices[99][3] = "Todas son correctas&nbsp;";
 answers[99] = choices[99][0];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11773. ";


