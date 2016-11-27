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

//  Id pregunta: 5 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes no se considera un motivo para ordenar una auditor&iacute;a?:";
 choices[0]= new Array();
 choices[0][0] = "Para determinar el origen del malfuncionamiento de una aplicaci&oacute;n";
 choices[0][1] = "Para determinar el estado del sistema ante un cambio importante";
 choices[0][2] = "Para determinar cual es el motivo del malfuncionamiento del sistema";
 choices[0][3] = "Para determinar si los proyectos transcurren seg&uacute;n lo establecido, en cuanto a recursos, objetivos etc";
 answers[0] = choices[0][0];
 units[0] = "31,32,33";
 comments[0] = "Id Pregunta: 5. ";


//  Id pregunta: 29 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las actuaciones siguientes corresponde a una auditor&iacute;a inform&aacute;tica?:";
 choices[1]= new Array();
 choices[1][0] = "Recomendar situaciones";
 choices[1][1] = "Planes estrat&eacute;gicos de seguridad";
 choices[1][2] = "Planes de aseguramiento de calidad";
 choices[1][3] = "Reorganizaci&oacute;n de los recursos humanos del departamento inform&aacute;tico";
 answers[1] = choices[1][0];
 units[1] = "31,32,33";
 comments[1] = "Id Pregunta: 29. ";


//  Id pregunta: 30 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de la auditor&iacute;a inform&aacute;tica es falsa?:";
 choices[2]= new Array();
 choices[2][0] = "La finalidad de la auditor&iacute;a inform&aacute;tica es emitir un juicio acerca del estado de los sistemas";
 choices[2][1] = "La auditor&iacute;a inform&aacute;tica llega siempre a una valoraci&oacute;n o diagn&oacute;stico final, positivo o negativo";
 choices[2][2] = "La auditor&iacute;a inform&aacute;tica propone acciones a realizar";
 choices[2][3] = "La auditor&iacute;a inform&aacute;tica analiza tanto la infraestructura f&iacute;sica y l&oacute;gica como la estructura organizativa";
 answers[2] = choices[2][1];
 units[2] = "31,32,33";
 comments[2] = "Id Pregunta: 30. ";


//  Id pregunta: 40 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes respuestas referidas a las auditor&iacute;as de control de calidad es cierta?:";
 choices[3]= new Array();
 choices[3][0] = "Es un procedimiento habitual de control de calidad del software";
 choices[3][1] = "Es un procedimiento extraordinario al que se pueden someter los proyectos que tengan especial magnitud";
 choices[3][2] = "Su objetivo es proceder al refinamiento sucesivo en la definici&oacute;n de las especificaciones finales del proyecto";
 choices[3][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[3] = choices[3][1];
 units[3] = "31,32,33";
 comments[3] = "Id Pregunta: 40. ";


//  Id pregunta: 45 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes elementos no se considera un activo de una organizaci&oacute;n?";
 choices[4]= new Array();
 choices[4][0] = "Recursos f&iacute;sicos: equipos, sistemas, cableado&hellip;";
 choices[4][1] = "Utilizaci&oacute;n de recursos: uso de CPU, de ancho de banda, de disco duro&hellip;";
 choices[4][2] = "Imagen y reputaci&oacute;n p&uacute;blica y profesional de la empresa y sus empleados";
 choices[4][3] = "Todos los anteriores son activos de una organizaci&oacute;n";
 answers[4] = choices[4][3];
 units[4] = "32";
 comments[4] = "Id Pregunta: 45. ";


//  Id pregunta: 48 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes no es un control de entrada de datos en una Revisi&oacute;n de Controles de Aplicaci&oacute;n en una auditor&iacute;a inform&aacute;tica?:";
 choices[5]= new Array();
 choices[5][0] = "Controles por lote y balanceo";
 choices[5][1] = "Validaci&oacute;n y edici&oacute;n de datos";
 choices[5][2] = "Balanceo y conciliaci&oacute;n";
 choices[5][3] = "Autorizaci&oacute;n de ingreso";
 answers[5] = choices[5][2];
 units[5] = "31,32,33";
 comments[5] = "Id Pregunta: 48. ";


//  Id pregunta: 104 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Analizariamos los recursos de la organizaci&oacute;n...";
 choices[6]= new Array();
 choices[6][0] = "Cuando quisi&eacute;ramos realizar una programaci&oacute;n estrat&eacute;gica";
 choices[6][1] = "En la organizaci&oacute;n, para ver la forma de materializar la programaci&oacute;n";
 choices[6][2] = "Cuando ejecut&aacute;ramos una programaci&oacute;n, para determinar el costo";
 choices[6][3] = "Al realizar una valoraci&oacute;n de los que se ha consumido";
 answers[6] = choices[6][0];
 units[6] = "31,32,33";
 comments[6] = "Id Pregunta: 104. ";


//  Id pregunta: 136 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El conjunto de t&eacute;cnicas y procedimientos que garantizan la disponibilidad de la informaci&oacute;n, la integridad del sistema y la confidencialidad, son propias de:";
 choices[7]= new Array();
 choices[7][0] = "Una auditor&iacute;a inform&aacute;tica";
 choices[7][1] = "Un plan de contingencia";
 choices[7][2] = "La seguridad inform&aacute;tica";
 choices[7][3] = "Una planificaci&oacute;n estrat&eacute;gica";
 answers[7] = choices[7][2];
 units[7] = "31,32,33";
 comments[7] = "Id Pregunta: 136. ";


//  Id pregunta: 170 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  En auditor&iacute;a inform&aacute;tica, el objeto de una &quot;prueba de cumplimiento&quot; es:";
 choices[8]= new Array();
 choices[8][0] = "Verificar el cumplimiento de la legislaci&oacute;n y la normativa vigente en las operaciones de un sistema de informaci&oacute;n, especialmente en el cap&iacute;tulo de compras y gesti&oacute;n de personal";
 choices[8][1] = "Sustanciar la probabilidad de que los objetivos de control no se alcancen";
 choices[8][2] = "Determinar si los controles se est&aacute;n aplicando de la forma descrita en la documentaci&oacute;n o de la forma descrita por el usuario o directivo";
 choices[8][3] = "Verificar que todos los usuarios se adhieren voluntaria u obligatoriamente a la pol&iacute;tica sobre usos de recursos inform&aacute;ticos implantada por la Direcci&oacute;n";
 answers[8] = choices[8][2];
 units[8] = "31,32,33";
 comments[8] = "Id Pregunta: 170. ";


//  Id pregunta: 171 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En auditor&iacute;a inform&aacute;tica, los controles de salida contienen, entre otros, a:";
 choices[9]= new Array();
 choices[9][0] = "Registro y almacenamiento de formularios negociables";
 choices[9][1] = "Autorizaci&oacute;n de la distribuci&oacute;n";
 choices[9][2] = "Balanceo y conciliaci&oacute;n";
 choices[9][3] = "Todas las anteriores";
 answers[9] = choices[9][3];
 units[9] = "31,32,33";
 comments[9] = "Id Pregunta: 171. ";


//  Id pregunta: 174 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En el &aacute;mbito de la auditor&iacute;a de eficiencia, &eacute;sta es m&aacute;xima&hellip;:";
 choices[10]= new Array();
 choices[10][0] = "Cuando los costes de desarrollo, mantenimiento y operaci&oacute;n del sistema son los m&aacute;s bajos posiles";
 choices[10][1] = "Cuando se cumplen todos los requisitos de los usuarios y los objetivos del organismo";
 choices[10][2] = "Cuando el personal de sistemas de informaci&oacute;n trabaja con la m&aacute;xima diligencia";
 choices[10][3] = "Cuando se alcanzan los objetivos de los usuarios con los m&iacute;nimos recursos posibles";
 answers[10] = choices[10][3];
 units[10] = "31,32,33";
 comments[10] = "Id Pregunta: 174. ";


//  Id pregunta: 187 AÃ±o de creación de pregunta: 2004-01-01
 questions[11]= "12)  Cu&aacute;l de las siguientes no es una funci&oacute;n del auditor de Sistemas de Informaci&oacute;n";
 choices[11]= new Array();
 choices[11][0] = "An&aacute;lisis de requisitos y especificaci&oacute;n funcional";
 choices[11][1] = "Evaluaci&oacute;n de los planes de implantaci&oacute;n de sistemas y mejoras de los existentes.";
 choices[11][2] = "Evaluaci&oacute;n de riesgos";
 choices[11][3] = "Evaluaci&oacute;n de controles en los sistemas de informaci&oacute;n";
 answers[11] = choices[11][0];
 units[11] = "31,32,33";
 comments[11] = "Id Pregunta: 187. Similar a examen TIC SS A 2003";


//  Id pregunta: 217 AÃ±o de creación de pregunta: 2007-01-01
 questions[12]= "13)  La metodolog&iacute;a MAGERIT:";
 choices[12]= new Array();
 choices[12][0] = "Se apoya en tres submodelos: submodelo de elementos, submodelo de eventos y submodelo de procesos.";
 choices[12][1] = "Se estructura en tres libros: M&eacute;todo, Cat&aacute;logo de Activos y Gu&iacute;a de T&eacute;cnicas";
 choices[12][2] = "MAGERIT es una metodolog&iacute;a de car&aacute;cter p&uacute;blico, perteneciente al Ministerio de Administraciones P&uacute;blicas. Su utilizaci&oacute;n requiere autorizaci&oacute;n previa del MAP";
 choices[12][3] = "Se estructura en tres libros: M&eacute;todo, Cat&aacute;logo de Elementos y Gu&iacute;a de T&eacute;cnicas";
 answers[12] = choices[12][3];
 units[12] = "33";
 comments[12] = "Id Pregunta: 217. ";


//  Id pregunta: 234 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En relaci&oacute;n con la auditor&iacute;a de econom&iacute;a, eficacia y eficiencia, &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?:";
 choices[13]= new Array();
 choices[13][0] = "Al contrario de lo que ocurre en el sector privado, en el sector p&uacute;blico es muy sencillo realizar comparaciones entre los distintos servicios y administraciones p&uacute;blicas";
 choices[13][1] = "La auditor&iacute;a de econom&iacute;a consiste en medir los costes de desarrollo, mantenimiento y operaci&oacute;n de un sistema de informaci&oacute;n, incluyendo equipos y personal";
 choices[13][2] = "La auditor&iacute;a de eficacia es una medida de la correcta utilizaci&oacute;n de los equipos, instalaciones y personal que participan en el sistema de informaci&oacute;n. Es una medida de la calidad t&eacute;cnica del sistema de informaci&oacute;n";
 choices[13][3] = "La eficiencia se eval&uacute;a determinando si los requisitos del dise&ntilde;o se han cumplido y los usuarios est&aacute;n satisfechos con el sistema";
 answers[13] = choices[13][1];
 units[13] = "31,32,33";
 comments[13] = "Id Pregunta: 234. ";


//  Id pregunta: 237 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En temas de seguridad inform&aacute;tica, una de las siguientes afirmaciones es falsa:";
 choices[14]= new Array();
 choices[14][0] = "La prioridad de actuaci&oacute;n viene dada por el producto impacto x vulnerabilidad";
 choices[14][1] = "Los costes de seguridad se clasifican en directos (inversiones en equipos, mantenimiento, personal de seguridad) e indirectos (dificultad de uso, restricciones de servicios, reducci&oacute;n de prestaciones)";
 choices[14][2] = "La pol&iacute;tica de seguridad es un documento oficial de la organizaci&oacute;n de car&aacute;cter confidencial";
 choices[14][3] = "El punto de equilibrio financiero ser&aacute; el que represente el coste m&iacute;nimo sumando el coste de seguridad y el de p&eacute;rdidas por incidentes o materializaciones de amenazas";
 answers[14] = choices[14][2];
 units[14] = "33";
 comments[14] = "Id Pregunta: 237. ";


//  Id pregunta: 281 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  La auditor&iacute;a inform&aacute;tica es:";
 choices[15]= new Array();
 choices[15][0] = "El estudio de los programas para detectar bucles err&oacute;neos";
 choices[15][1] = "La revisi&oacute;n de las operaciones realizadas por los sistemas inform&aacute;ticos de una organizaci&oacute;n para determinar su correcto funcionamiento ";
 choices[15][2] = "La auditor&iacute;a completa de los accesos indebidos a los sistemas de informaci&oacute;n e identifcaci&oacute;n de los causantes";
 choices[15][3] = "La realizaci&oacute;n de los planes de sistemas de una organizaci&oacute;n";
 answers[15] = choices[15][1];
 units[15] = "31";
 comments[15] = "Id Pregunta: 281. ";


//  Id pregunta: 282 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  La auditor&iacute;a inform&aacute;tica tiene entre sus normas generales:";
 choices[16]= new Array();
 choices[16][0] = "Exigencia de evidencia";
 choices[16][1] = "Hacer part&iacute;cipe al usuario";
 choices[16][2] = "Formar parte de la empresa auditada";
 choices[16][3] = "Informar a las autoridades judiciales";
 answers[16] = choices[16][0];
 units[16] = "31";
 comments[16] = "Id Pregunta: 282. ";


//  Id pregunta: 320 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  La mayor amenaza para la seguridad inform&aacute;tica de una empresa, con m&aacute;s del 50% de los casos conocidos de ataques, se debe a:";
 choices[17]= new Array();
 choices[17][0] = "antiguos empleados";
 choices[17][1] = "hackers externos";
 choices[17][2] = "empleados no autorizados";
 choices[17][3] = "empleados autorizados";
 answers[17] = choices[17][3];
 units[17] = "31,32,33";
 comments[17] = "Id Pregunta: 320. ";


//  Id pregunta: 362 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Le han encargado realizar una auditor&iacute;a inform&aacute;tica de un centro de proceso de datos en el que, entre otros, se procesan datos fiscales de todas las empresas espa&ntilde;olas. Indique que recomendar&iacute;a solucionar con m&aacute;s urgencia:";
 choices[18]= new Array();
 choices[18][0] = "Las aplicaciones inform&aacute;ticas est&aacute;n insuficientemente documentadas";
 choices[18][1] = "Los equipos no est&aacute;n alimentados con fuentes de alimenta ininterrumpida (U.P.S.)";
 choices[18][2] = "Las copias de seguridad en cinta se guardan junto con las cintas de datos";
 choices[18][3] = "El equipamiento utilizado no responde a la filosof&iacute;a de 'sistemas abiertos'";
 answers[18] = choices[18][2];
 units[18] = "31,32,33";
 comments[18] = "Id Pregunta: 362. ";


//  Id pregunta: 364 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Los 'controles de seguridad de datos' aseguran que los ficheros de datos en discos o cintas no est&aacute;n sujetos a:";
 choices[19]= new Array();
 choices[19][0] = "Cambio autorizado";
 choices[19][1] = "Cambio no autorizado";
 choices[19][2] = "Destrucci&oacute;n autorizada";
 choices[19][3] = "Obsolescencia no autorizada";
 answers[19] = choices[19][1];
 units[19] = "32";
 comments[19] = "Id Pregunta: 364. ";


//  Id pregunta: 373 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Los mecanismos de salvaguarda, de acuerdo a MAGERIT son:";
 choices[20]= new Array();
 choices[20][0] = "Un dispositivo l&oacute;gico que reduce el riesgo";
 choices[20][1] = "Un dispositivo f&iacute;sico que reduce el riesgo";
 choices[20][2] = "Aquellos que operan de forma preventiva sobre la vulnerabilidad";
 choices[20][3] = "Todas las respuestas anteriores son correctas";
 answers[20] = choices[20][3];
 units[20] = "33";
 comments[20] = "Id Pregunta: 373. ";


//  Id pregunta: 375 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Los par&aacute;metros de seguridad de la informaci&oacute;n pueden resumirse en:";
 choices[21]= new Array();
 choices[21][0] = "Disponibilidad, integridad, confidencialidad";
 choices[21][1] = "Integridad, autenticaci&oacute;n, confidencialidad";
 choices[21][2] = "Disponibilidad, confidencialidad, autenticaci&oacute;n";
 choices[21][3] = "Autenticaci&oacute;n, disponibilidad, integridad";
 answers[21] = choices[21][0];
 units[21] = "31,32,33";
 comments[21] = "Id Pregunta: 375. ";


//  Id pregunta: 381 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  MAGERIT:";
 choices[22]= new Array();
 choices[22][0] = "Es una metodolog&iacute;a de an&aacute;lisis de riesgos";
 choices[22][1] = "Es una metodolog&iacute;a de gesti&oacute;n de riesgos";
 choices[22][2] = "Es una metodolog&iacute;a de gesti&oacute;n de proyectos";
 choices[22][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 answers[22] = choices[22][3];
 units[22] = "33";
 comments[22] = "Id Pregunta: 381. ";


//  Id pregunta: 383 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Mediante el an&aacute;lisis de riesgos:";
 choices[23]= new Array();
 choices[23][0] = "Se puede evaluar el impacto de los fallos del software en el sistema global";
 choices[23][1] = "El responsable del proyecto reduce el impacto del riesgo";
 choices[23][2] = "Se formaliza una representaci&oacute;n de todas las interacciones efectivas entre los agentes que intervienen en el proyecto";
 choices[23][3] = "Se clasifican los factores susceptibles de provocar consecuencias no deseadas en funci&oacute;n de la cualificaci&oacute;n del personal, la velocidad de ejecuci&oacute;n, el empleo de estandartes y la madurez tecnol&oacute;gica de la organizaci&oacute;n";
 answers[23] = choices[23][3];
 units[23] = "33";
 comments[23] = "Id Pregunta: 383. ";


//  Id pregunta: 392 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Para determinar el nivel aceptable de seguridad hay que llegar a un equilibrio entre:";
 choices[24]= new Array();
 choices[24][0] = "El coste de los da&ntilde;os versus el coste de sus consecuencias";
 choices[24][1] = "El coste de las medidas de seguridad versus el presupuesto disponible";
 choices[24][2] = "Los costes y la probabilidad de los da&ntilde;os versus el coste de las medidas y seguridad para evitarlos";
 choices[24][3] = "El coste de los da&ntilde;os versus los da&ntilde;os que somos capaces de aceptar";
 answers[24] = choices[24][2];
 units[24] = "33";
 comments[24] = "Id Pregunta: 392. ";


//  Id pregunta: 420 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Se entiende por integridad de la informaci&oacute;n:";
 choices[25]= new Array();
 choices[25][0] = "La informaci&oacute;n utilizada ser&aacute; la &uacute;ltima, exacta, autorizada y completa";
 choices[25][1] = "Que cada persona acceder&aacute; &uacute;nicamente a la que le corresponda";
 choices[25][2] = "El sistema estar&aacute; operativo en todo momento";
 choices[25][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[25] = choices[25][0];
 units[25] = "33";
 comments[25] = "Id Pregunta: 420. ";


//  Id pregunta: 473 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Uno de las siguientes no entra dentro de las diversas modalidades de auditor&iacute;a:";
 choices[26]= new Array();
 choices[26][0] = "Correctiva";
 choices[26][1] = "Detectiva";
 choices[26][2] = "Preventiva";
 choices[26][3] = "Adaptativa";
 answers[26] = choices[26][3];
 units[26] = "31, 32, 33";
 comments[26] = "Id Pregunta: 473. ";


//  Id pregunta: 475 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Uno de los proyectos m&aacute;s importantes que lleva a cabo la Administraci&oacute;n es la elaboraci&oacute;n del Esquema Nacional de Evaluaci&oacute;n y Certificaci&oacute;n de la Seguridad de las Tecnolog&iacute;as de la Informaci&oacute;n (ENECSTI). &iquest;Qui&eacute;n es el organismo de certificaci&oacute;n de dicho esquema?";
 choices[27]= new Array();
 choices[27][0] = "La Agencia de Protecci&oacute;n de Datos";
 choices[27][1] = "El TECNIMAP";
 choices[27][2] = "El Centro Criptol&oacute;gico Nacional";
 choices[27][3] = "El Ministerio de Defensa y el de Presidencia a trav&eacute;s del CESID";
 answers[27] = choices[27][2];
 units[27] = "31, 32, 33";
 comments[27] = "Id Pregunta: 475. ";


//  Id pregunta: 493 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  &iquest;C&uacute;antos niveles de evaluaci&oacute;n est&aacute;n contemplados en los Criterios Comunes?";
 choices[28]= new Array();
 choices[28][0] = "Siete";
 choices[28][1] = "Coinciden con los de ITSEC";
 choices[28][2] = "Cinco";
 choices[28][3] = "Seis";
 answers[28] = choices[28][0];
 units[28] = "31,32,33";
 comments[28] = "Id Pregunta: 493. ";


//  Id pregunta: 503 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  En la metodolog&iacute;a MAGERIT la definici&oacute;n &quot;eventos que pueden desencadenar un incidente en la organizaci&oacute;n&quot; corresponde a:";
 choices[29]= new Array();
 choices[29][0] = "Riesgo";
 choices[29][1] = "Impacto";
 choices[29][2] = "Amenaza";
 choices[29][3] = "Vulnerabilidad";
 answers[29] = choices[29][2];
 units[29] = "31, 32, 33";
 comments[29] = "Id Pregunta: 503. ";


//  Id pregunta: 510 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  La Metodolog&iacute;a Magerit debe estar destinado a:";
 choices[30]= new Array();
 choices[30][0] = "S&oacute;lo interesa a directivos";
 choices[30][1] = "Interesa a tecn&oacute;logos y especialistas inform&aacute;ticos";
 choices[30][2] = "No est&aacute; actualizado para que los riesgos puedan contabilizarse en Euros";
 choices[30][3] = "Interesa a directivos, usuarios y desarrolladores";
 answers[30] = choices[30][3];
 units[30] = "31, 32, 33";
 comments[30] = "Id Pregunta: 510. ";


//  Id pregunta: 519 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  Si se estima en un 20% la probabilidad de un incidente que provoca una p&eacute;rdida de 10.000 euros, se est&aacute; hablando de:";
 choices[31]= new Array();
 choices[31][0] = "Un riesgo";
 choices[31][1] = "Un impacto";
 choices[31][2] = "Ninguna de las anteriores";
 choices[31][3] = "a ) y b)";
 answers[31] = choices[31][3];
 units[31] = "31, 32, 33";
 comments[31] = "Id Pregunta: 519. Auditor&iacute;a Inform&aacute;tica ";


//  Id pregunta: 520 AÃ±o de creación de pregunta: 2004-01-01
 questions[32]= "33)  &iquest;En qu&eacute; fase del ciclo de vida se deben contemplar los controles de aplicaci&oacute;n por primera vez?";
 choices[32]= new Array();
 choices[32][0] = "Dise&ntilde;o";
 choices[32][1] = "An&aacute;lisis";
 choices[32][2] = "Construcci&oacute;n";
 choices[32][3] = "Pruebas de aceptaci&oacute;n";
 answers[32] = choices[32][1];
 units[32] = "31, 32, 33";
 comments[32] = "Id Pregunta: 520. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 524 AÃ±o de creación de pregunta: 2004-01-01
 questions[33]= "34)  La implantaci&oacute;n de un sistema de single sign-on (SSO) implica que el riesgo de un acceso no autorizado:";
 choices[33]= new Array();
 choices[33][0] = "Tendr&aacute; un mayor impacto";
 choices[33][1] = "Tendr&aacute; un menor impacto";
 choices[33][2] = "Tendr&aacute; una probabilidad mayor";
 choices[33][3] = "Tendr&aacute; una probabilidad menor";
 answers[33] = choices[33][0];
 units[33] = "31, 32, 33";
 comments[33] = "Id Pregunta: 524. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 526 AÃ±o de creación de pregunta: 2004-01-01
 questions[34]= "35)  La propiedad de los datos recae normalmente en:";
 choices[34]= new Array();
 choices[34][0] = "Administrador de base de datos";
 choices[34][1] = "Analista de sistemas";
 choices[34][2] = "Operador";
 choices[34][3] = "Usuario final";
 answers[34] = choices[34][3];
 units[34] = "31, 32, 33";
 comments[34] = "Id Pregunta: 526. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 529 AÃ±o de creación de pregunta: 2004-01-01
 questions[35]= "36)  &iquest;Cual de los siguientes es un control de acceso f&iacute;sico?";
 choices[35]= new Array();
 choices[35][0] = "Etiquetado de soportes en cinta";
 choices[35][1] = "Uso de clave de por teclado para entrar al CPD";
 choices[35][2] = "Contrase&ntilde;as para uso de aplicaciones, renovadas peri&oacute;dicamente";
 choices[35][3] = "Todas";
 answers[35] = choices[35][1];
 units[35] = "31, 32, 33";
 comments[35] = "Id Pregunta: 529. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 530 AÃ±o de creación de pregunta: 2004-01-01
 questions[36]= "37)  Un auditor inform&aacute;tico deber&aacute; verificar:";
 choices[36]= new Array();
 choices[36][0] = "Cumplimiento de objetivos de la organizaci&oacute;n";
 choices[36][1] = "Adecuaci&oacute;n de procedimientos de control";
 choices[36][2] = "Uso de metodolog&iacute;as seg&uacute;n est&aacute;ndares de la organizaci&oacute;n";
 choices[36][3] = "Todas";
 answers[36] = choices[36][3];
 units[36] = "31, 32, 33";
 comments[36] = "Id Pregunta: 530. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 531 AÃ±o de creación de pregunta: 2004-01-01
 questions[37]= "38)  &iquest;Qu&eacute; tipo de centro de respaldo ante desastres ofrece la respuesta m&aacute;s inmediata?";
 choices[37]= new Array();
 choices[37][0] = "Hot site";
 choices[37][1] = "Warm site";
 choices[37][2] = "Instant site";
 choices[37][3] = "Cold site";
 answers[37] = choices[37][0];
 units[37] = "31, 32, 33";
 comments[37] = "Id Pregunta: 531. ";


//  Id pregunta: 549 AÃ±o de creación de pregunta: 2004-01-01
 questions[38]= "39)  Las metodolog&iacute;as desarrolladas y utilizadas en la auditoria y el control inform&aacute;ticos se pueden agrupar en las siguientes familias:";
 choices[38]= new Array();
 choices[38][0] = "Internas, externas y mixtas";
 choices[38][1] = "De datos y de aplicaciones";
 choices[38][2] = "Cuantitativas y cualitativas";
 choices[38][3] = "Basadas en modelos, formales y mixtas";
 answers[38] = choices[38][2];
 units[38] = "31, 32, 33";
 comments[38] = "Id Pregunta: 549. ";


//  Id pregunta: 557 AÃ±o de creación de pregunta: 2004-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes no es una tarea t&iacute;pica de la auditor&iacute;a inform&aacute;tica?";
 choices[39]= new Array();
 choices[39][0] = "Reorganizaci&oacute;n de los recursos humanos del Departamento de Sistemas de Informaci&oacute;n";
 choices[39][1] = "Revisi&oacute;n de aplicaciones";
 choices[39][2] = "Revisi&oacute;n de instalaciones inform&aacute;ticas";
 choices[39][3] = "Revisi&oacute;n de sistemas bajo desarrollo";
 answers[39] = choices[39][0];
 units[39] = "31, 32, 33";
 comments[39] = "Id Pregunta: 557. MAP-B 2004";


//  Id pregunta: 613 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  El primer resultado de la fase de Planificaci&oacute;n de una auditoria es la enunciaci&oacute;n de los objetivos y alcance de la auditor&iacute;a, que ser&aacute; recogido en un documento formal denominado:";
 choices[40]= new Array();
 choices[40][0] = "Plan de auditoria";
 choices[40][1] = "Informe de auditoria";
 choices[40][2] = "Plan de sistemas";
 choices[40][3] = "Plan estrategico";
 answers[40] = choices[40][0];
 units[40] = "31";
 comments[40] = "Id Pregunta: 613. ";


//  Id pregunta: 621 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Los criterios comunes (criterios de evaluaci&oacute;n unificados para la seguridad de los productos IT) se corresponden con la norma:";
 choices[41]= new Array();
 choices[41][0] = "ISO 15408";
 choices[41][1] = "ANSI 14508";
 choices[41][2] = "CEN 15408";
 choices[41][3] = "IEEE 14508";
 answers[41] = choices[41][0];
 units[41] = "33";
 comments[41] = "Id Pregunta: 621. ";


//  Id pregunta: 655 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  &iquest;Por qu&eacute; no puede considerarse cierto que la correcta aplicaci&oacute;n y gesti&oacute;n de parches es la soluci&oacute;n a la mayor&iacute;a de los problemas de seguridad?";
 choices[42]= new Array();
 choices[42][0] = "Los parches siempre abren nuevas vulnerabilidades";
 choices[42][1] = "Los parches crean problemas de interoperatibilidad";
 choices[42][2] = "Los parches solo tratan los fallos software conocidos";
 choices[42][3] = "Los parches pueden arreglar problemas de mala configuraci&oacute;n";
 answers[42] = choices[42][2];
 units[42] = "31";
 comments[42] = "Id Pregunta: 655. ";


//  Id pregunta: 679 AÃ±o de creación de pregunta: 2002-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes no se considera un riesgo de origen accidental?:";
 choices[43]= new Array();
 choices[43][0] = "Huelga del personal";
 choices[43][1] = "Errores en la utilizaci&oacute;n de los datos";
 choices[43][2] = "Aver&iacute;as en las instalaciones el&eacute;ctricas";
 choices[43][3] = "Interrupci&oacute;n de suministro de energ&iacute;a";
 answers[43] = choices[43][0];
 units[43] = "32,33";
 comments[43] = "Id Pregunta: 679. ";


//  Id pregunta: 2484 AÃ±o de creación de pregunta: 2002-01-01
 questions[44]= "45)  Respecto al an&aacute;lisis y gesti&oacute;n en un proyecto inform&aacute;tico, indique cual de las siguientes afirmaciones es correcta:";
 choices[44]= new Array();
 choices[44][0] = "Las medidas preventivas est&aacute;n encaminadas a reducir los da&ntilde;os que puedan causar determinados incidentes";
 choices[44][1] = "El plan de contingencia contendr&aacute; las medidas preventivas adoptadas";
 choices[44][2] = "El plan de emergencia recoge las normas de actuaci&oacute;n durante o inmediatamente despu&eacute;s de cada fallo o da&ntilde;o";
 choices[44][3] = "Las medidas de correci&oacute;n van encaminadas a reducir la probabilidad de ocurrencia de incidentes";
 answers[44] = choices[44][2];
 units[44] = "32";
 comments[44] = "Id Pregunta: 2484. ";


//  Id pregunta: 2558 AÃ±o de creación de pregunta: 2002-01-01
 questions[45]= "46)  La cintoteca o armario ign&iacute;fugo debe colocarse en:";
 choices[45]= new Array();
 choices[45][0] = "El sotano";
 choices[45][1] = "Un sitio estable desde el punto de vista metereologico";
 choices[45][2] = "Pegado a la estructura del edificio";
 choices[45][3] = "No hace falta tener cuidado con su localizacion";
 answers[45] = choices[45][2];
 units[45] = "32";
 comments[45] = "Id Pregunta: 2558. ";


//  Id pregunta: 2896 AÃ±o de creación de pregunta: 2002-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de MAGERIT?:";
 choices[46]= new Array();
 choices[46][0] = "MAGERIT es un &oacute;rgano especializado del CSAE para establecer la pol&iacute;tica de seguridad de los sistemas de informaci&oacute;n en las Administraciones P&uacute;blicas";
 choices[46][1] = "MAGERIT es una metodolog&iacute;a para an&aacute;lisis y gesti&oacute;n de riesgos de los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas";
 choices[46][2] = "MAGERIT defiende que la seguridad debe ser independiente del medio";
 choices[46][3] = "El objetivo de MAGERIT es conseguir la confianza en la utilizaci&oacute;n de t&eacute;cnicas inform&aacute;ticas y telem&aacute;ticas";
 answers[46] = choices[46][0];
 units[46] = "33";
 comments[46] = "Id Pregunta: 2896. ";


//  Id pregunta: 4271 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  Indique cu&aacute;l de los siguientes est&aacute;ndares se aplica a la seguridad de los sistemas inform&aacute;ticos";
 choices[47]= new Array();
 choices[47][0] = "ISO 12207";
 choices[47][1] = "ISO 2167";
 choices[47][2] = "ISO 27002";
 choices[47][3] = "ISO 9004";
 answers[47] = choices[47][2];
 units[47] = "33";
 comments[47] = "Id Pregunta: 4271. ";


//  Id pregunta: 4319 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Un sistema de supresi&oacute;n de incendios de &ldquo;tuber&iacute;a seca&rdquo; (dry-pipe) es un sistema que usa:";
 choices[48]= new Array();
 choices[48][0] = "Agua, pero en el cual el agua no entra a las tuber&iacute;as hasta que se haya detectado un incendio.";
 choices[48][1] = "Agua, pero en el cual las tuber&iacute;as est&aacute;n revestidas de selladores especiales a prueba de agua.";
 choices[48][2] = "Di&oacute;xido de carbono en lugar de agua.";
 choices[48][3] = "Halon en lugar de agua.";
 answers[48] = choices[48][0];
 units[48] = "32";
 comments[48] = "Id Pregunta: 4319. ";


//  Id pregunta: 4330 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  Los objetivos de alto nivel de la auditoria inform&aacute;tica son, con car&aacute;cter general: I) Dar a la Direcci&oacute;n garant&iacute;a suficiente del cumplimiento de los objetivos de control. II) Sustanciar los riesgos resultantes, si se detectan debilidades de control significativas. III) Aconsejar a la Direcci&oacute;n sobre el curso de acciones correctivas.";
 choices[49]= new Array();
 choices[49][0] = "S&oacute;lo I";
 choices[49][1] = "S&oacute;lo II.";
 choices[49][2] = "I y II.";
 choices[49][3] = "I, II y III";
 answers[49] = choices[49][3];
 units[49] = "31";
 comments[49] = "Id Pregunta: 4330. ";


//  Id pregunta: 4402 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  Seg&uacute;n Magerit v.2 los elementos del an&aacute;lisis de riesgos son:";
 choices[50]= new Array();
 choices[50][0] = "Impacto, riesgos calculados y riesgos intr&iacute;nsecos.";
 choices[50][1] = "Activos, amenazas y salvaguardas.";
 choices[50][2] = "Vulnerabilidades, riesgos e impacto.";
 choices[50][3] = "Entorno, sistema de informaci&oacute;n, informaci&oacute;n, funciones y otros.";
 answers[50] = choices[50][1];
 units[50] = "33";
 comments[50] = "Id Pregunta: 4402. ";


//  Id pregunta: 4439 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  Se&ntilde;ale la que no sea una de las t&eacute;cnicas especificas para el an&aacute;lisis de riesgos que establece MAGERIT.";
 choices[51]= new Array();
 choices[51][0] = "An&aacute;lisis de procesos.";
 choices[51][1] = "An&aacute;lisis mediante tablas.";
 choices[51][2] = "An&aacute;lisis algor&iacute;tmico.";
 choices[51][3] = "&Aacute;rboles de ataque.";
 answers[51] = choices[51][0];
 units[51] = "33";
 comments[51] = "Id Pregunta: 4439. ";


//  Id pregunta: 4447 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  Cual es el nombre con que se conoce en MAGERIT versi&oacute;n 2 a la persona de la organizaci&oacute;n, con buen conocimiento de personas y unidades implicadas en el proyecto de An&aacute;lisis de Gesti&oacute;n de Riesgos, que tiene la capacidad para conectar al equipo de proyecto con el grupo de usuarios?";
 choices[52]= new Array();
 choices[52][0] = "Promotor";
 choices[52][1] = "Enlace operacional";
 choices[52][2] = "Director de proyecto";
 choices[52][3] = "Responsable de servicios internos";
 answers[52] = choices[52][1];
 units[52] = "33";
 comments[52] = "Id Pregunta: 4447. ";


//  Id pregunta: 4557 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  Seg&uacute;n Magerit, el conjunto de programas de seguridad que permite materializar las decisiones de gesti&oacute;n de riesgos es el";
 choices[53]= new Array();
 choices[53][0] = "mapa de riesgos";
 choices[53][1] = "informe de insuficiencias";
 choices[53][2] = "cuadro de mando";
 choices[53][3] = "plan de seguridad";
 answers[53] = choices[53][3];
 units[53] = "33";
 comments[53] = "Id Pregunta: 4557. ";


//  Id pregunta: 4612 AÃ±o de creación de pregunta: 2007-01-01
 questions[54]= "55)  &iquest;Cual de los siguientes conceptos NO es un elemento b&aacute;sico de Magerit?";
 choices[54]= new Array();
 choices[54][0] = "activo";
 choices[54][1] = "salvaguarda";
 choices[54][2] = "amenaza";
 choices[54][3] = "vulnerabilidad";
 answers[54] = choices[54][3];
 units[54] = "33";
 comments[54] = "Id Pregunta: 4612. ";


//  Id pregunta: 4615 AÃ±o de creación de pregunta: 2007-01-01
 questions[55]= "56)  Seg&uacute;n las pautas de conducta en el proceso de auditoria, los auditores pueden o deben hacer";
 choices[55]= new Array();
 choices[55][0] = "escribir los procedimientos";
 choices[55][1] = "realizar gesti&oacute;n de perfiles de usuarios";
 choices[55][2] = "realizar Ia documentaci&oacute;n";
 choices[55][3] = "verificar que se evaluan peri&oacute;dicamente riesgos o bien evaluarlos";
 answers[55] = choices[55][3];
 units[55] = "31";
 comments[55] = "Id Pregunta: 4615. ";


//  Id pregunta: 4731 AÃ±o de creación de pregunta: 2007-01-01
 questions[56]= "57)  Cual de los siguientes no es un activo en Magerit:";
 choices[56]= new Array();
 choices[56][0] = "www";
 choices[56][1] = "url";
 choices[56][2] = "anon";
 choices[56][3] = "edi";
 answers[56] = choices[56][1];
 units[56] = "32";
 comments[56] = "Id Pregunta: 4731. Examen 2006 JCYL";


//  Id pregunta: 4961 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de estas medidas de seguridad de las instalaciones contra incendios en los centro de proceso de datos no es adecuada?:";
 choices[57]= new Array();
 choices[57][0] = "Utilizaci&oacute;n de tabicados de hormig&oacute;n en su construcci&oacute;n.";
 choices[57][1] = "Utilizaci&oacute;n de un mecanismo para cortar la alimentaci&oacute;n el&eacute;ctrica.";
 choices[57][2] = "Utilizaci&oacute;n de agentes extintores como el gas HAL&Oacute;N.";
 choices[57][3] = "Utilizaci&oacute;n de contenedores de papel con tapa met&aacute;lica que cierre autom&aacute;ticamente.";
 answers[57] = choices[57][2];
 units[57] = "32";
 comments[57] = "Id Pregunta: 4961. Examen TIC B 2007";


//  Id pregunta: 5109 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  Indique cu&aacute;l es la norma espa&ntilde;ola en base a la cual se certifica un Sistema de Gesti&oacute;n de la Seguridad de la Informaci&oacute;n:";
 choices[58]= new Array();
 choices[58][0] = "ISO/IEC TR 13335";
 choices[58][1] = "UNE 71501 IN";
 choices[58][2] = "UNE-ISO/EIC 17799:2002";
 choices[58][3] = "UNE 71502:2004";
 answers[58] = choices[58][3];
 units[58] = "32";
 comments[58] = "Id Pregunta: 5109. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5417 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  &Eacute;tica del Auditor. Cuatro afirmaciones.- El Auditor sirve con diligencia, lealtad y honradez los intereses de empleados, accionistas, clientes y p&uacute;blico en general. No participar&aacute; en ninguna actividad ilegal o impropia- Garantiza la confidencialidad de la informaci&oacute;n obtenida en el ejercicio de sus funciones. No la usar&aacute; en beneficio propio, ni dejar&aacute; que llegue a terceros.- Evita actividades que pongan en entredicho su independencia.- Fomenta la formaci&oacute;n de los directivos de la empresa, sus clientes, incluso del p&uacute;blico en general, para que sepan de que va la Auditor&iacute;a y los Sistemas de Informaci&oacute;n";
 choices[59]= new Array();
 choices[59][0] = "Las tres primeras afirmaciones son correctas, la cuarta no";
 choices[59][1] = "Todas son correctas";
 choices[59][2] = "La cuarta es correcta, las otras tres son afirmaciones obvias";
 choices[59][3] = "Son correctas, pero de ellas no se desprende nada pr&aacute;ctico";
 answers[59] = choices[59][1];
 units[59] = "31";
 comments[59] = "Id Pregunta: 5417. Castilla y Le&oacute;n";


//  Id pregunta: 5864 AÃ±o de creación de pregunta: 2009-01-01
 questions[60]= "61)  Indique la respuesta INCORRECTA:";
 choices[60]= new Array();
 choices[60][0] = "Las herramientas PILAR soportan el an&aacute;lisis y la gesti&oacute;n de riesgos de un sistema de informaci&oacute;n siguiendo la metodolog&iacute;a Magerit.";
 choices[60][1] = "El acr&oacute;nimo PILAR significa: Procedimiento Integral L&oacute;gico para el An&aacute;lisis de Riesgos";
 choices[60][2] = "Las herramientas PILAR disponen de una biblioteca est&aacute;ndar de prop&oacute;sito general";
 choices[60][3] = "Las herramientas PILAR son capaces de realizar calificaciones de seguridad respecto a ISO/IEC 27002:2005 - C&oacute;digo de buenas pr&aacute;cticas para la Gesti&oacute;n de la Seguridad de la Informaci&oacute;n -";
 answers[60] = choices[60][1];
 units[60] = "33";
 comments[60] = "Id Pregunta: 5864. MAP 2008 A1";


//  Id pregunta: 5999 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Respecto al contenido del informe de auditoria, indicar cu&aacute;l de las siguientes recomendaciones es correcta:";
 choices[61]= new Array();
 choices[61][0] = "El informe final de una auditoria s&oacute;lo contendr&aacute; recomendaciones relativas a los incumplimientos o puntos d&eacute;biles detectados en el &aacute;rea auditada.";
 choices[61][1] = "El informe final incluir&aacute; las alegaciones de los auditados, indicando la opini&oacute;n de los auditores sobre ellas, y si no se incluyen las alegaciones, deber&aacute; indicarse el motivo.";
 choices[61][2] = "El informe final de una auditoria operativa debe contener la opini&oacute;n de los auditores y sugerencias generales sobre c&oacute;mo aplicar los controles para evaluar el funcionamiento del &aacute;rea auditada.";
 choices[61][3] = "En el informe final de una auditoria operativa se deben se&ntilde;alar las debilidades y fortalezas observadas en relaci&oacute;n con los controles implementados en el &aacute;rea auditada.";
 answers[61] = choices[61][1];
 units[61] = "31";
 comments[61] = "Id Pregunta: 5999. TIC A 2009";


//  Id pregunta: 6261 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Cu&aacute;l de las siguientes no es una norma b&aacute;sica en la auditor&iacute;a de los sistemas de informaci&oacute;n:";
 choices[62]= new Array();
 choices[62][0] = "Obtenci&oacute;n de evidencia suficiente.";
 choices[62][1] = "Estudio y evaluaci&oacute;n del sistema de control interno.";
 choices[62][2] = "Obtenci&oacute;n de evidencia adecuada.";
 choices[62][3] = "Todas las anteriores forman parte de las normas b&aacute;sicas en la auditor&iacute;a de los sistemas de informaci&oacute;n.";
 answers[62] = choices[62][3];
 units[62] = "31";
 comments[62] = "Id Pregunta: 6261. ";


//  Id pregunta: 6263 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  El c&oacute;digo &eacute;tico definido por ISACA resultar&aacute; de aplicaci&oacute;n a:";
 choices[63]= new Array();
 choices[63][0] = "Solamente a las personas certificadas como CISA y CISM.";
 choices[63][1] = "A los profesionales certificados CISA y CISM y a los miembros de la ISACA.";
 choices[63][2] = "A los miembros de la ISACA, que obligatoriamente ser&aacute;n profesionales con las certificaciones CISA y CISM, en lo que se refiere a la aplicaci&oacute;n de las pr&aacute;cticas definidas dentro de COBIT.";
 choices[63][3] = "A todos los profesionales que trabajen realizando auditor&iacute;as de sistemas de informaci&oacute;n y que para ello empleen como referencia los manuales del COBIT.";
 answers[63] = choices[63][1];
 units[63] = "31";
 comments[63] = "Id Pregunta: 6263. ";


//  Id pregunta: 6265 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Las conclusiones que se reflejen en un informe de auditor&iacute;a deberan estar basadas en una evidencia:";
 choices[64]= new Array();
 choices[64][0] = "Suficiente.";
 choices[64][1] = "Contundente.";
 choices[64][2] = "Prudente.";
 choices[64][3] = "Demostrable.";
 answers[64] = choices[64][0];
 units[64] = "31";
 comments[64] = "Id Pregunta: 6265. ";


//  Id pregunta: 7143 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Se&ntilde;ala la opci&oacute;n que NO se encuentra en los objetivos de MAGERIT v2:";
 choices[65]= new Array();
 choices[65][0] = "Concienciar a los responsables de los sistemas de informaci&oacute;n de la existencia de riesgos y de la necesidad de atajarlos a tiempo";
 choices[65][1] = "Ofrecer un m&eacute;todo sistem&aacute;tico para analizar los riesgos siguiendo el Libro Blanco de Buenas Pr&aacute;cticas en Materia de Seguridad para la Administraci&oacute;n Europea";
 choices[65][2] = "Ayudar a descubrir y planificar las medidas oportunas para mantener los riesgos bajo control";
 choices[65][3] = "Apoyar la preparaci&oacute;n a la Organizaci&oacute;n para procesos de evaluaci&oacute;n, auditoria, certificaci&oacute;n o acreditaci&oacute;n";
 answers[65] = choices[65][1];
 units[65] = "33";
 comments[65] = "Id Pregunta: 7143. Examen TIC B 2009";


//  Id pregunta: 8506 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  La segunda versi&oacute;n de la Metodolog&iacute;a de An&aacute;lisis y Gesti&oacute;n de Riesgos de los Sistemas de Informaci&oacute;n (MAGERIT v2) define un conjunto de procesos para realizar el an&aacute;lisis y gesti&oacute;n de riesgos, &iquest;Cu&aacute;l de las siguientes actividades pertenece al proceso P1 &quot;Planificaci&oacute;n&quot;? ";
 choices[66]= new Array();
 choices[66][0] = "Lanzamiento del proyecto. ";
 choices[66][1] = "Toma de decisiones. ";
 choices[66][2] = "Ejecuci&oacute;n del plan. ";
 choices[66][3] = "Estimaci&oacute;n del estado de riesgo. ";
 answers[66] = choices[66][0];
 units[66] = "32";
 comments[66] = "Id Pregunta: 8506. Examen TIC A2 2010";


//  Id pregunta: 8507 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Seg&uacute;n MAGERlT /2 los activos se agrupan en capas que van de la capa 1 a la capa 5. &iquest;En qu&eacute; capa se encuentra el Hardware? ";
 choices[67]= new Array();
 choices[67][0] = "Capa 1";
 choices[67][1] = "Capa 2";
 choices[67][2] = "Capa 3";
 choices[67][3] = "Capa 4";
 answers[67] = choices[67][1];
 units[67] = "32";
 comments[67] = "Id Pregunta: 8507. Examen TIC A2 2010";


//  Id pregunta: 8784 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  MAGERIT es";
 choices[68]= new Array();
 choices[68][0] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de riesgos de sistemas de informaci&oacute;n.";
 choices[68][1] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de centros de recuperaci&oacute;n de desastres de sistemas de informaci&oacute;n.";
 choices[68][2] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de sistemas de archivo de sistemas de informaci&oacute;n.";
 choices[68][3] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de evaluaci&oacute;n de rendimiento de sistemas de informaci&oacute;n.";
 answers[68] = choices[68][0];
 units[68] = "33";
 comments[68] = "Id Pregunta: 8784. Examen UPM A2 2011";


//  Id pregunta: 9291 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes situaciones no puede considerarse un incidente?";
 choices[69]= new Array();
 choices[69][0] = "Fallo hardware.";
 choices[69][1] = "Un usuario no autorizado de la cuenta de un usuario.";
 choices[69][2] = "Un evento cuyo impacto no genere una interrupci&oacute;n prolongada del servicio.";
 choices[69][3] = "Todos los anteriores se considerar&iacute;an incidentes.";
 answers[69] = choices[69][3];
 units[69] = "32";
 comments[69] = "Id Pregunta: 9291. ";


//  Id pregunta: 9293 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  El dominio de control &quot;Seguridad ligada al personal&quot; se corresponde con la dimensi&oacute;n de seguridad:";
 choices[70]= new Array();
 choices[70][0] = "Organizativa.";
 choices[70][1] = "L&oacute;gica";
 choices[70][2] = "F&iacute;sica";
 choices[70][3] = "Legal";
 answers[70] = choices[70][0];
 units[70] = "32";
 comments[70] = "Id Pregunta: 9293. ";


//  Id pregunta: 9295 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  &iquest;En qu&eacute; se diferencia el Plan de Continuidad de Negocio y el Plan de Recuperaci&oacute;n ante Desastres?";
 choices[71]= new Array();
 choices[71][0] = "No existe ninguna diferencia, son t&eacute;rminos equivalentes.";
 choices[71][1] = "El Plan de Continuidad de Negocio se centra en la parte reactiva de las TIC mientras que el de Recuperaci&oacute;n ante Desastres afecta a todos los departamentos de la organizaci&oacute;n.";
 choices[71][2] = "El Plan de Recuperaci&oacute;n ante Desastres se centra en la parte reactiva y es un subconjunto del Plan de Continuidad de Negocio. ";
 choices[71][3] = "Ninguna de las anteriores.";
 answers[71] = choices[71][2];
 units[71] = "32";
 comments[71] = "Id Pregunta: 9295. ";


//  Id pregunta: 9300 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes no es un tipo de control?.";
 choices[72]= new Array();
 choices[72][0] = "Preventivo.";
 choices[72][1] = "Detectivo.";
 choices[72][2] = "Cognitivo.";
 choices[72][3] = "Todos los anteriores lo son.";
 answers[72] = choices[72][2];
 units[72] = "32";
 comments[72] = "Id Pregunta: 9300. ";


//  Id pregunta: 9301 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  Entre las tareas del auditor no se incluye:";
 choices[73]= new Array();
 choices[73][0] = "Comprender y evaluar la metodolog&iacute;a seguida en el proceso de desarrollo";
 choices[73][1] = "Identificar las fases de la metodolog&iacute;a de desarrollo";
 choices[73][2] = "Revisar el cumplimiento de est&aacute;ndares y normas de control interno";
 choices[73][3] = "Desarrollar e implantar los cambios necesarios para el cumplimiento con est&aacute;ndares y normas";
 answers[73] = choices[73][3];
 units[73] = "33";
 comments[73] = "Id Pregunta: 9301. ";


//  Id pregunta: 9309 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;Cu&aacute;ndo es necesario disponer de un control compensatorio?";
 choices[74]= new Array();
 choices[74][0] = "Cuando no est&eacute; previsto un control.";
 choices[74][1] = "Cuando el coste de un control lo haga inabordable.";
 choices[74][2] = "Cuando el control no est&eacute; efectivamente implantado o falle su aplicaci&oacute;n.";
 choices[74][3] = "Todas las anteriores son ciertas.";
 answers[74] = choices[74][3];
 units[74] = "31";
 comments[74] = "Id Pregunta: 9309. ";


//  Id pregunta: 9313 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[75]= new Array();
 choices[75][0] = "Los procedimientos se&ntilde;alan el marco de actuaci&oacute;n en los distintos campos de las TIC para resolver situaciones concretas";
 choices[75][1] = "Deben ser desarrollados por la unidad responsable de su implementaci&oacute;n";
 choices[75][2] = "Un ejemplo de procedimiento es la pol&iacute;tica de seguridad de la organizaci&oacute;n, que deber&aacute; ser conocido por todos los usuarios";
 choices[75][3] = "Los procedimientos deben estar documentados y mantenerse actualizados";
 answers[75] = choices[75][2];
 units[75] = "31";
 comments[75] = "Id Pregunta: 9313. ";


//  Id pregunta: 9314 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Los procedimientos se detallan t&eacute;cnicamente a trav&eacute;s de";
 choices[76]= new Array();
 choices[76][0] = "Normativas";
 choices[76][1] = "Pol&iacute;ticas";
 choices[76][2] = "Indicaciones";
 choices[76][3] = "Ninguna de las anteriores";
 answers[76] = choices[76][3];
 units[76] = "31";
 comments[76] = "Id Pregunta: 9314. ";


//  Id pregunta: 9315 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l es el &oacute;rgano especializado en el control interno y en la evaluaci&oacute;n de los servicios de cada uno de los Ministerios y de sus organismos p&uacute;blicos dependientes?";
 choices[77]= new Array();
 choices[77][0] = "La IGAE";
 choices[77][1] = "La Inspecci&oacute;n General de los Servicios de cada Ministerio";
 choices[77][2] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[77][3] = "La Agencia Estatal de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y de la Calidad de los Servicios";
 answers[77] = choices[77][1];
 units[77] = "31";
 comments[77] = "Id Pregunta: 9315. ";


//  Id pregunta: 9317 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Se&ntilde;ale la falsa";
 choices[78]= new Array();
 choices[78][0] = "La auditor&iacute;a requiere una planificaci&oacute;n a tres niveles: qu&eacute;, cu&aacute;ndo y c&oacute;mo auditar";
 choices[78][1] = "Si el &aacute;rea ya ha sido auditada con anterioridad debe revisarse la documentaci&oacute;n previa";
 choices[78][2] = "Aunque el &aacute;rea ya haya sido auditada con anterioridad es necesario realizar la auditor&iacute;a al completo sin tener en cuenta la documentaci&oacute;n previa pues &eacute;sta puede no ser ya consistente con la situaci&oacute;n actual";
 choices[78][3] = "Una de las ventajas del uso de herramientas de auditor&iacute;a inform&aacute;tica es la disminuci&oacute;n del riesgo propio del proceso de auditor&iacute;a en la recolecci&oacute;n de datos y la mayor independencia";
 answers[78] = choices[78][2];
 units[78] = "31";
 comments[78] = "Id Pregunta: 9317. ";


//  Id pregunta: 9321 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Se&ntilde;ale la falsa";
 choices[79]= new Array();
 choices[79][0] = "La evidencia obtenida de una tercera parte independiente es menos competente que la ofrecida por el &aacute;rea auditada";
 choices[79][1] = "La evidencia obtenida de un sistema con un control efectivo es m&aacute;s competente que la ofrecida por un sistema con un control d&eacute;bil";
 choices[79][2] = "La evidencia obtenida por el equipo auditor directamente en una inspecci&oacute;n f&iacute;sica es m&aacute;s competente que la obtenida indirectamente";
 choices[79][3] = "Todas las afirmaciones anteriores son ciertas";
 answers[79] = choices[79][0];
 units[79] = "31";
 comments[79] = "Id Pregunta: 9321. ";


//  Id pregunta: 9726 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Atendiendo al est&aacute;ndar ISO 22301 en un Plan de Recuperaci&oacute;n ante Desastres, el Objetivo de Punto de Recuperaci&oacute;n (Recovery Point Objective RPO) es";
 choices[80]= new Array();
 choices[80][0] = "el nivel de servicios a proporcionar en modo alterno hasta que se recupere la situaci&oacute;n normal.";
 choices[80][1] = "el tiempo que la organizaci&oacute;n puede soportar desde que se produce el fallo hasta que se recuperan los servicios cr&iacute;ticos.";
 choices[80][2] = "el tiempo m&aacute;ximo tolerable de interrupci&oacute;n.";
 choices[80][3] = "la p&eacute;rdida m&aacute;xima de datos tolerable en caso de interrupci&oacute;n.";
 answers[80] = choices[80][3];
 units[80] = "32";
 comments[80] = "Id Pregunta: 9726. Examen TIC-A1 2013";


//  Id pregunta: 9736 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Si un equipo tiene una aver&iacute;a &iquest;cu&aacute;l de los siguientes indicadores nos da informaci&oacute;n sobre el tiempo medio requerido para reparar dicha aver&iacute;a?";
 choices[81]= new Array();
 choices[81][0] = "MTBF";
 choices[81][1] = "MTBR";
 choices[81][2] = "MTTR";
 choices[81][3] = "MTTF";
 answers[81] = choices[81][2];
 units[81] = "32";
 comments[81] = "Id Pregunta: 9736. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10547 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  El primer paso a la hora de desarrollar un Plan de Continuidad de Negocio es:";
 choices[82]= new Array();
 choices[82][0] = "Clasificar los sistemas seg&uacute;n su importancia";
 choices[82][1] = "Establecer una estrategia de recuperaci&oacute;n de desastres";
 choices[82][2] = "determinar el tiempo cr&iacute;tico de recuperaci&oacute;n";
 choices[82][3] = "Realizar una clasificaci&oacute;n del riesgo";
 answers[82] = choices[82][0];
 units[82] = "31, 32, 33";
 comments[82] = "Id Pregunta: 10547. NULL";


//  Id pregunta: 10548 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Los auditores que han participado en el desarrollo de un sistema podr&iacute;an haber perdido su independencia si: ";
 choices[83]= new Array();
 choices[83][0] = "Realizan una revisi&oacute;n del desarrollo del sistema ";
 choices[83][1] = "Recomiendan medidas de mejora";
 choices[83][2] = "Realizan una evaluaci&oacute;n independiente de la aplicaci&oacute;n despu&eacute;s de su puesta en producci&oacute;n ";
 choices[83][3] = "Participan activamente en el dise&ntilde;o e implementaci&oacute;n del sistema de aplicaci&oacute;n";
 answers[83] = choices[83][3];
 units[83] = "31, 32, 33";
 comments[83] = "Id Pregunta: 10548. La independencia puede verse afectada si el auditor se involucra activamente en el dise&ntilde;o e implementaci&oacute;n del sistema. ";


//  Id pregunta: 10551 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest; Cu&aacute;l de las siguientes opciones contribuye mejor a un plan de continuidad de negocio eficaz? ";
 choices[84]= new Array();
 choices[84][0] = "La documentaci&oacute;n se distribuye a todas las partes interesadas";
 choices[84][1] = "La planificaci&oacute;n involucra a todos los departamentos de usuarios";
 choices[84][2] = "El plan se ha aprobado por la alta direcci&oacute;n";
 choices[84][3] = "El plan se ha auditado por un auditor externo";
 answers[84] = choices[84][1];
 units[84] = "31, 32, 33";
 comments[84] = "Id Pregunta: 10551. La participaci&oacute;n de los departamentos de usuarios en el Plan de Continuidad de Negocio es crucial para la identificaci&oacute;n de las prioridades de proceso de negocio.";


//  Id pregunta: 10553 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de las siguientes satisface una autenticaci&oacute;n de usuario de dos factores?";
 choices[85]= new Array();
 choices[85][0] = "Escaneo de iris y de huella dactilar";
 choices[85][1] = "Identificador de usuario y sistema GPS";
 choices[85][2] = "Smartcard que requiere un c&oacute;digo PIN";
 choices[85][3] = "Identificador de usuario m&aacute;s contrase&ntilde;a";
 answers[85] = choices[85][2];
 units[85] = "31, 32, 33";
 comments[85] = "Id Pregunta: 10553. Algo que  tienes (smartcard) + algo que conoces (c&oacute;digo PIN)";


//  Id pregunta: 10555 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)   Cu&aacute;l de los siguientes debe ser el primer paso en una Auditor&iacute;a de Sistemas ";
 choices[86]= new Array();
 choices[86][0] = "Crear un diagrama de flujo de las ramas de decisi&oacute;n. ";
 choices[86][1] = "Comprender el entorno a estudiar";
 choices[86][2] = "Realizar una evaluaci&oacute;n de riesgos";
 choices[86][3] = "Desarrollar un plan de auditor&iacute;a";
 answers[86] = choices[86][1];
 units[86] = "31, 32, 33";
 comments[86] = "Id Pregunta: 10555. Un auditor necesita obtener una comprensi&oacute;n de los procesos antes de crear un diagrama de flujo, evaluar los riesgos o desarrollar un plan de auditor&iacute;a";


//  Id pregunta: 10558 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  COBIT 5 Incluye";
 choices[87]= new Array();
 choices[87][0] = "4 principios y 6 procesos habilitadores";
 choices[87][1] = "5 principios y 7 procesos habilitadores";
 choices[87][2] = "4 principios y 7 procesos habilitadores";
 choices[87][3] = "5 principios y 6 procesos habilitadores";
 answers[87] = choices[87][1];
 units[87] = "31, 32, 33";
 comments[87] = "Id Pregunta: 10558. ";


//  Id pregunta: 10559 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Cual de los siguientes no es un principio de COBIT5";
 choices[88]= new Array();
 choices[88][0] = "Satisfacer las necesidades de las partes interesadas";
 choices[88][1] = "Unificar el Gobierno con la administraci&oacute;n";
 choices[88][2] = "Habilitar un enfoque hol&iacute;stico";
 choices[88][3] = "Aplicar un solo marco integrado";
 answers[88] = choices[88][1];
 units[88] = "31, 32, 33";
 comments[88] = "Id Pregunta: 10559. Uno de los principios es Separar el Gobierno de la Administraci&oacute;n";


//  Id pregunta: 10560 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Los controles compensatorios tienen como objetivo:";
 choices[89]= new Array();
 choices[89][0] = "reducir el riesgo ante una debilidad existente";
 choices[89][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[89][2] = "Solucionar problemas detectados por controles detectivos";
 choices[89][3] = "Reportar errores";
 answers[89] = choices[89][0];
 units[89] = "31, 32, 33";
 comments[89] = "Id Pregunta: 10560. Las opciones B, C y D son caracter&iacute;sticas de  controles preventivo, correctivo y detectivo respectivamente.";


//  Id pregunta: 10561 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Los controles preventivos tienen como objeto:";
 choices[90]= new Array();
 choices[90][0] = "reducir el riesgo ante una debilidad existente";
 choices[90][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[90][2] = "Solucionar problemas detectados por controles detectivos";
 choices[90][3] = "Reportar errores";
 answers[90] = choices[90][1];
 units[90] = "31, 32, 33";
 comments[90] = "Id Pregunta: 10561. ";


//  Id pregunta: 10562 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  Los controles detectivos tienen como objeto:";
 choices[91]= new Array();
 choices[91][0] = "reducir el riesgo ante una debilidad existente";
 choices[91][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[91][2] = "Solucionar problemas detectados por controles detectivos";
 choices[91][3] = "Reportar errores";
 answers[91] = choices[91][3];
 units[91] = "31, 32, 33";
 comments[91] = "Id Pregunta: 10562. ";


//  Id pregunta: 10563 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  Los controles correctivos tienen como objeto:";
 choices[92]= new Array();
 choices[92][0] = "reducir el riesgo ante una debilidad existente";
 choices[92][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[92][2] = "Solucionar problemas detectados por controles detectivos";
 choices[92][3] = "Reportar errores";
 answers[92] = choices[92][2];
 units[92] = "31, 32, 33";
 comments[92] = "Id Pregunta: 10563. ";


//  Id pregunta: 10564 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  Para desarrollar un plan de continuidad de negocio de &eacute;xito es fundamental  la participaci&oacute;n del usuario final durante el proceso de: ";
 choices[93]= new Array();
 choices[93][0] = "Estrategias de recuperaci&oacute;n";
 choices[93][1] = "Desarrollo del plan detallado";
 choices[93][2] = "An&aacute;lisis de impacto al negocio (BIA)";
 choices[93][3] = "Mantenimiento y pruebas";
 answers[93] = choices[93][2];
 units[93] = "31, 32, 33";
 comments[93] = "Id Pregunta: 10564. Durante el BIA se debe entender y conocer las necesidades del negocio, sus operaciones y el impacto en el negocio ante un desastre";


//  Id pregunta: 10565 AÃ±o de creación de pregunta: 2014-01-01
 questions[94]= "95)  El volumen de datos en riesgo de p&eacute;rdida que la organizaci&oacute;n considera tolerable es:";
 choices[94]= new Array();
 choices[94][0] = "RPO (Recovery Point Objective)";
 choices[94][1] = "RTO (Recovery Time Objective) ";
 choices[94][2] = "DRP (Disater Recovery Plan)";
 choices[94][3] = "Business Impact Analysis (BIA)";
 answers[94] = choices[94][0];
 units[94] = "31, 32, 33";
 comments[94] = "Id Pregunta: 10565. ";


//  Id pregunta: 10571 AÃ±o de creación de pregunta: 2014-01-01
 questions[95]= "96)  En el transcurso de una auditor&iacute;a inform&aacute;tica, uno de los auditores descubre que existe un incumplimiento grave en un control inform&aacute;tico que podr&iacute;a llevar a la realizaci&oacute;n de un fraude importante por parte de un grupo de empleados, con p&eacute;rdidas econ&oacute;micas y de imagen para la empresa auditada. El auditor debe:";
 choices[95]= new Array();
 choices[95][0] = "Reunir todas las evidencias de esta deficiencia grave y convocar una reuni&oacute;n urgente con los responsables de la empresa para que conozcan este hecho y puedan tomar medidas preventivas.";
 choices[95][1] = "Contactar al grupo de empleados que pueden cometer el fraude y advertirles de lo descubierto para que no comentan el posible fraude.";
 choices[95][2] = "Reunir todas las pruebas y exponerlas todas juntas en el informe al final de la auditor&iacute;a, aunque dicho informe se entregue con posterioridad de la posibilidad de realizaci&oacute;n del fraude, ya que una auditor&iacute;a no debe interrumpirse por ninguna causa.";
 choices[95][3] = "Llamar a ISACA para informar de que se ha producido una violaci&oacute;n del c&oacute;digo &eacute;tico de conducta que se propone en COSO (Marco de Gobierno Corporativo)";
 answers[95] = choices[95][0];
 units[95] = "31";
 comments[95] = "Id Pregunta: 10571. ";


//  Id pregunta: 10806 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n Magerit v3, &iquest;qu&eacute; concepto se corresponder&iacute;a con la definici&oacute;n: &quot;proceso espec&iacute;fico cuyo objetivo es legitimar al sistema para formar parte de sistemas m&aacute;s amplios&quot;?";
 choices[96]= new Array();
 choices[96][0] = "Auditor&iacute;a.";
 choices[96][1] = "Acreditaci&oacute;n.";
 choices[96][2] = "Certificaci&oacute;n.";
 choices[96][3] = "Evaluaci&oacute;n.";
 answers[96] = choices[96][1];
 units[96] = "33";
 comments[96] = "Id Pregunta: 10806. Examen GSI 2014";


//  Id pregunta: 10808 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Indique cu&aacute;l de los siguientes es un documento m&iacute;nimo reclamado por la ISO 22301 de gesti&oacute;n de la continuidad del negocio:";
 choices[97]= new Array();
 choices[97][0] = "Procedimiento para el control de la informaci&oacute;n documentada.";
 choices[97][1] = "Estructura de respuesta a incidentes.";
 choices[97][2] = "Los contratos y acuerdos de nivel de servicio con los proveedores.";
 choices[97][3] = "Formaci&oacute;n y plan de sensibilizaci&oacute;n.";
 answers[97] = choices[97][1];
 units[97] = "31, 32, 33";
 comments[97] = "Id Pregunta: 10808. Examen GSI 2014";


//  Id pregunta: 11018 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;C&oacute;mo se llaman a las auditor&iacute;as especializadas en descubrir fraudes y delitos, en obtener evidencias v&aacute;lidas para su uso por las autoridades competente, policiales o judiciales?";
 choices[98]= new Array();
 choices[98][0] = "Auditor&iacute;as de regularidad";
 choices[98][1] = "Auditor&iacute;as operativas o de gesti&oacute;n";
 choices[98][2] = "Auditor&iacute;as forenses";
 choices[98][3] = "Auditor&iacute;as de los sistemas de informaci&oacute;n";
 answers[98] = choices[98][2];
 units[98] = "31";
 comments[98] = "Id Pregunta: 11018. ";


//  Id pregunta: 11105 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seleccione la respuesta verdadera sobre los t&eacute;rminos empleados para definir la estrategia de continuidad y recuperaci&oacute;n en un sistema de informaci&oacute;n.";
 choices[99]= new Array();
 choices[99][0] = "El objetivo de Punto de recuperaci&oacute;n RPO determina la p&eacute;rdida aceptable de datos en caso de interrupci&oacute;n.";
 choices[99][1] = "El objetivo de Tiempo de Recuperaci&oacute;n es el tiempo m&aacute;ximo que el sistema puede estar interrumpido.";
 choices[99][2] = "Cuanto m&aacute;s bajo es el RTO m&aacute;s baja es la tolerancia al desastre y m&aacute;s elevado ser&aacute; el coste de las estrategias de recuperaci&oacute;n.";
 choices[99][3] = "Todas las anteriores son verdaderas";
 answers[99] = choices[99][0];
 units[99] = "32";
 comments[99] = "Id Pregunta: 11105. ";


