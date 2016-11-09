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

//  Id pregunta: 37 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a habitual para la planificaci&oacute;n de la capacidad de los sistemas de informaci&oacute;n?:";
 choices[0]= new Array();
 choices[0][0] = "La proyecci&oacute;n lineal";
 choices[0][1] = "La teor&iacute;a de colas";
 choices[0][2] = "Los benchmarks";
 choices[0][3] = "Teor&iacute;a de redes";
 answers[0] = choices[0][3];
 units[0] = "25";
 comments[0] = "Id Pregunta: 37. planificaci&oacute;n de la capacidad de los sistemas";


//  Id pregunta: 97 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  A un sistema de informaci&oacute;n definido como &quot; Sistemas orientados a la ayuda en la toma de decisiones espor&aacute;dicas u ocasionales &quot; corresponde al tipo de sistema de informaci&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "Sistemas orientados a la gesti&oacute;n de empresa o Management Information Systems (MIS)";
 choices[1][1] = "Sistemas orientados al proceso de transacciones o Transaction Processing Systems";
 choices[1][2] = "Sistemas de apoyo a la toma de decisiones o Decision Support Systems (DSS)";
 choices[1][3] = "Sistemas de apoyo a la direcci&oacute;n o Executive Support Systems (ESS)";
 answers[1] = choices[1][2];
 units[1] = "21";
 comments[1] = "Id Pregunta: 97. NULL";


//  Id pregunta: 99 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  En relaci&oacute;n con la impugnaci&oacute;n de valoraciones:";
 choices[2]= new Array();
 choices[2][0] = "Los ciudadanos tienen derecho a no verse sometidos a una decisi&oacute;n con efectos jur&iacute;dicos, sobre ellos o que les afecte de manera significativa, que se base &uacute;nicamente en un tratamiento de datos destinados a evaluar determinados aspectos de su personalidad";
 choices[2][1] = "El afectado podr&aacute; impugnar actos administrativos o decisiones privadas que impliquen una valoraci&oacute;n de su comportamiento, cuyo &uacute;nico fundamento sea un tratamiento de datos de car&aacute;cter personal que ofrezca una definici&oacute;n  de sus caracter&iacute;sticas o personalidad";
 choices[2][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 choices[2][3] = "Ninguna de las respuestas es correcta";
 answers[2] = choices[2][2];
 units[2] = "29";
 comments[2] = "Id Pregunta: 99. ";


//  Id pregunta: 106 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Con el 20% del esfuerzo se resuelven el 80% de los problemas de una organizaci&oacute;n, y con el restante 80% del esfuerzo se resuelven el restante 20 % de los problemas  seg&uacute;n la:";
 choices[3]= new Array();
 choices[3][0] = "Ley de Parkinson";
 choices[3][1] = "Ley de Fink";
 choices[3][2] = "Ley de Murphy";
 choices[3][3] = "Ley de Pareto";
 answers[3] = choices[3][3];
 units[3] = "25";
 comments[3] = "Id Pregunta: 106. ";


//  Id pregunta: 112 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  De  acuerdo a la Decisi&oacute;n  87/95/CEE del Consejo de las CC.EE., &iquest;en qu&eacute; circunstancias excepcionales el sector p&uacute;blico puede adquirir bienes y servicios relativos al campo de las TIC utilizando especificaciones no normalizadas?:";
 choices[4]= new Array();
 choices[4][0] = "Continuidad de funcionamiento";
 choices[4][1] = "Innovaci&oacute;n";
 choices[4][2] = "Coste excesivo";
 choices[4][3] = "Todas las anteriores";
 answers[4] = choices[4][3];
 units[4] = "40";
 comments[4] = "Id Pregunta: 112. ";


//  Id pregunta: 122 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Desde el punto de vista de un auditor de seguridad indique cu&aacute;l de las siguientes premisas, sobre control interno de acceso l&oacute;gico, es inadecuada:";
 choices[5]= new Array();
 choices[5][0] = "El sistema debe obligar al usuario a cambiar de contrase&ntilde;a cada cierto tiempo";
 choices[5][1] = "El registro o log de acceso al sistema puede desactivarse a petici&oacute;n del responsable de seguridad";
 choices[5][2] = "Es conveniente que la autenticaci&oacute;n de entrada al sistema se haga una &uacute;nica vez";
 choices[5][3] = "El sistema debe rechazar el acceso a los usuarios despu&eacute;s de una serie de intentos fallidos";
 answers[5] = choices[5][1];
 units[5] = "31,32,33";
 comments[5] = "Id Pregunta: 122. ";


//  Id pregunta: 127 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  El art&iacute;culo 18.4 de la Constituci&oacute;n dice que:";
 choices[6]= new Array();
 choices[6][0] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos";
 choices[6][1] = "La ley regular&aacute;... b) El acceso de los ciudadanos a los archivos y registros administrativos, salvo en lo que afecta a la seguridad y defensa del Estado, la averiguaci&oacute;n de los delitos y la intimidad de las personas";
 choices[6][2] = "La ley regular&aacute;... b) El acceso de los ciudadanos a los archivos y registros inform&aacute;ticos, salvo en lo que afecta a la seguridad y defensa del Estado, la averiguaci&oacute;n de los delitos y la intimidad de las personas";
 choices[6][3] = "Los tratados internacionales v&aacute;lidamente celebrados, una vez publicados oficialmente en Espa&ntilde;a, formar&aacute;n parte del ordenamiento interno";
 answers[6] = choices[6][0];
 units[6] = "29";
 comments[6] = "Id Pregunta: 127. ";


//  Id pregunta: 188 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  En relaci&oacute;n con la auditor&iacute;a inform&aacute;tica se&ntilde;alar cu&aacute;l de las siguientes afirmaciones es falsa";
 choices[7]= new Array();
 choices[7][0] = "El informe final deber&aacute; estar compuesto por las entrevistas en profundidad y datos recopilados durante las fases de revisi&oacute;n y verificaci&oacute;n.";
 choices[7][1] = "Se entrevistar&aacute; al mayor n&uacute;mero de usuarios posible";
 choices[7][2] = "Las entrevistas no tendr&aacute;n una duraci&oacute;n superior a dos horas y media";
 choices[7][3] = "Para la validaci&oacute;n de la carga de trabajo se utilizar&aacute;n cuestionarios y entrevistas planificadas.";
 answers[7] = choices[7][2];
 units[7] = "31,32,33";
 comments[7] = "Id Pregunta: 188. Similar a examen TIC SS A 2003";


//  Id pregunta: 230 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  En los conceptos principales de la seguridad inform&aacute;tica no es cierto que:";
 choices[8]= new Array();
 choices[8][0] = "los da&ntilde;os sobre los activos producen impactos";
 choices[8][1] = "los impactos son materializaciones de las amenazas sobre los activos";
 choices[8][2] = "las salvaguardas ofrecen medidas curativas sobre los impactos, y preventivas sobre las vulnerabilidades";
 choices[8][3] = "los riesgos son las frecuencias con las que se pueden producir las amenazas sobre los activos";
 answers[8] = choices[8][3];
 units[8] = "33";
 comments[8] = "Id Pregunta: 230. ";


//  Id pregunta: 241 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En un sistema de informaci&oacute;n:";
 choices[9]= new Array();
 choices[9][0] = "La integraci&oacute;n permite mayor eficiencia conjunta e interrelaci&oacute;n m&aacute;s efectiva de actividades";
 choices[9][1] = "La integraci&oacute;n no presenta vulnerabilidades a incertidumbres por la flexibilidad que ofrece";
 choices[9][2] = "Se debe primar en todo momento la integraci&oacute;n frente a la independencia";
 choices[9][3] = "Se debe primar en todo momento la independencia frente a la integraci&oacute;n";
 answers[9] = choices[9][0];
 units[9] = "21";
 comments[9] = "Id Pregunta: 241. ";


//  Id pregunta: 250 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Entre las alternativas al HALON 1301 no se encuentra:";
 choices[10]= new Array();
 choices[10][0] = "FM-200";
 choices[10][1] = "Argonite";
 choices[10][2] = "Antifire";
 choices[10][3] = "Argonfire";
 answers[10] = choices[10][2];
 units[10] = "33";
 comments[10] = "Id Pregunta: 250. ";


//  Id pregunta: 270 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Indicar la respuesta verdadera respecto al concepto de un sistema de informaci&oacute;n:";
 choices[11]= new Array();
 choices[11][0] = "Es el conjunto de procedimientos, manuales y automatizados dirigidos a la recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 choices[11][1] = "Es el conjunto de procedimientos, manuales y automatizados dirigidos a la recogida, elaboraci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 choices[11][2] = "Es el conjunto de procedimientos, manuales y automatizados y de funciones dirigidas a la recogida, elaboraci&oacute;n, almacenamiento, recuperaci&oacute;n  y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 choices[11][3] = "Es el conjunto de procedimientos, manuales y automatizados y de funciones dirigidas a la recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 answers[11] = choices[11][3];
 units[11] = "21";
 comments[11] = "Id Pregunta: 270. ";


//  Id pregunta: 277 AÃ±o de creación de pregunta: 2009-01-01
 questions[12]= "13)  La Agencia de Protecci&oacute;n de Datos depende funcionalmente del:";
 choices[12]= new Array();
 choices[12][0] = "Ministerio de Justicia";
 choices[12][1] = "Ministerio de Ciencia y Tecnolog&iacute;a";
 choices[12][2] = "Ministerio de Educaci&oacute;n, Cultura y Deporte";
 choices[12][3] = "Es un organismo independiente de cualquier Ministerio";
 answers[12] = choices[12][3];
 units[12] = "29";
 comments[12] = "Id Pregunta: 277. ";


//  Id pregunta: 342 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  La red de comunicaci&oacute;n en Y de una organizaci&oacute;n es:";
 choices[13]= new Array();
 choices[13][0] = "Comunicaci&oacute;n ascendente donde dos subordinados reportan a su jefe sobre un asunto";
 choices[13][1] = "Esquema descendente en jerarqu&iacute;a absoluta";
 choices[13][2] = "Cada sujeto se comunica con todos los restantes";
 choices[13][3] = "Se establece con dos interlocutores en cada caso, interactuando con los m&aacute;s cercanos a uno";
 answers[13] = choices[13][0];
 units[13] = "23";
 comments[13] = "Id Pregunta: 342. ";


//  Id pregunta: 374 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Los m&eacute;todos m&aacute;s usuales para ordenar alternativas, seg&uacute;n la teor&iacute;a de la decisi&oacute;n multicriterio discreta son (se&ntilde;alar la falsa):";
 choices[14]= new Array();
 choices[14][0] = "M&eacute;todos UMA";
 choices[14][1] = "M&eacute;todo de ponderaci&oacute;n lineal";
 choices[14][2] = "M&eacute;todo Rusp";
 choices[14][3] = "M&eacute;todo lexicogr&aacute;fico";
 answers[14] = choices[14][2];
 units[14] = "34";
 comments[14] = "Id Pregunta: 374. ";


//  Id pregunta: 386 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  No es caracter&iacute;stico de un cambio organizativo a un esquema basado en la informaci&oacute;n:";
 choices[15]= new Array();
 choices[15][0] = "Que se emplee siempre las &uacute;ltimas tecnolog&iacute;as de la informaci&oacute;n";
 choices[15][1] = "Un cambio radical en la forma que las cosas son hechas";
 choices[15][2] = "La implementaci&oacute;n de cambios de la estructura de organizaci&oacute;n";
 choices[15][3] = "Nuevos problemas de direcci&oacute;n";
 answers[15] = choices[15][0];
 units[15] = "22";
 comments[15] = "Id Pregunta: 386. ";


//  Id pregunta: 471 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Una hip&oacute;tesis b&aacute;sica para la aplicabilidad del m&eacute;todo de ponderaci&oacute;n lineal en la selecci&oacute;n de bienes y servicios es:";
 choices[16]= new Array();
 choices[16][0] = "La linealidad de las funciones de utilidad de los factores de decisi&oacute;n usados";
 choices[16][1] = "La independencia (separabilidad) de las funciones de utilidad";
 choices[16][2] = "La continuidad (ausencia de puntos singulares)";
 choices[16][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[16] = choices[16][1];
 units[16] = "34";
 comments[16] = "Id Pregunta: 471. ";


//  Id pregunta: 485 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;D&oacute;nde ubicar&iacute;a al Centro de Control y Gesti&oacute;n de Red (Network Management System)?:";
 choices[17]= new Array();
 choices[17][0] = "Dentro del staff del director de sistemas de informaci&oacute;n";
 choices[17][1] = "Dentro del departamento de an&aacute;lisis y programaci&oacute;n";
 choices[17][2] = "En el departamento de explotaci&oacute;n";
 choices[17][3] = "En el departamento de planificaci&oacute;n";
 answers[17] = choices[17][2];
 units[17] = "26";
 comments[17] = "Id Pregunta: 485. ";


//  Id pregunta: 501 AÃ±o de creación de pregunta: 2003-01-01
 questions[18]= "19)  En cuanto a la pol&iacute;tica ergon&oacute;mica y medioambiental:";
 choices[18]= new Array();
 choices[18][0] = "Se aplica resoluci&oacute;n del CSAE de 2004";
 choices[18][1] = "No hay nada indicado al respecto";
 choices[18][2] = "Las partes aprobadas de la NORMA ISO 9241 (asumida como norma EN29241 y como norma UNE-EN29241)";
 choices[18][3] = "La decisi&oacute;n 87/95/CEE";
 answers[18] = choices[18][2];
 units[18] = "39";
 comments[18] = "Id Pregunta: 501. ";


//  Id pregunta: 528 AÃ±o de creación de pregunta: 2004-01-01
 questions[19]= "20)  En un proyecto de desarrollo sw, en qu&eacute; fase del ciclo de vida se centrar&aacute; principalmente la revisi&oacute;n de un auditor inform&aacute;tico:";
 choices[19]= new Array();
 choices[19][0] = "Pruebas";
 choices[19][1] = "Estudio de viabilidad";
 choices[19][2] = "Dise&ntilde;o";
 choices[19][3] = "Programaci&oacute;n";
 answers[19] = choices[19][2];
 units[19] = "31, 32, 33";
 comments[19] = "Id Pregunta: 528. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 533 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  Los diagrmas de Gantt o de tiempo son una t&eacute;cnica de:";
 choices[20]= new Array();
 choices[20][0] = "Gesti&oacute;n de proyectos";
 choices[20][1] = "Programaci&oacute;n orientada a objetos";
 choices[20][2] = "An&aacute;lisis diferencialde aplicaciones";
 choices[20][3] = "Programaci&oacute;n estructurada";
 answers[20] = choices[20][0];
 units[20] = "28";
 comments[20] = "Id Pregunta: 533. ";


//  Id pregunta: 534 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  Se&ntilde;alar la respuesta correcta respecto a M&eacute;trica V3";
 choices[21]= new Array();
 choices[21][0] = "No propone la utilizaci&oacute;n de MAGERIT como la metodolog&iacute;a de an&aacute;lsis y gesti&oacute;n de riesgos";
 choices[21][1] = "Propone el uso de MAGERIT para el an&aacute;lisis de riesgos pero no para la gesti&oacute;n de riesgos.";
 choices[21][2] = "Propone la utilizaci&oacute;n de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos en el caso de que la organizaci&oacute;n no disponga de propia metodolog&iacute;a.";
 choices[21][3] = "Es imperativo el uso de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos.";
 answers[21] = choices[21][2];
 units[21] = "86";
 comments[21] = "Id Pregunta: 534. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 575 AÃ±o de creación de pregunta: 2006-01-01
 questions[22]= "23)  Steve Smith (2000) propone el modelo de cambio Quest cuyas componentes son:";
 choices[22]= new Array();
 choices[22][0] = "Experiencia, Estrategia, L&iacute;deres, Clientes, Procesos, Gente, Disciplina y Energ&iacute;a.";
 choices[22][1] = "Creencia (Visi&oacute;n), Estrategia, L&iacute;deres, Clientes, Procesos, Gente, Disciplina y Energ&iacute;a.";
 choices[22][2] = "Creencia (Visi&oacute;n), Estrategia, L&iacute;deres, Clientes, Procesos, Gente, Disciplina y Energ&iacute;a.";
 choices[22][3] = "Creencia (Visi&oacute;n), Estrategia, Jefes, Usuarios, Procesos, Gente, Disciplina y Energ&iacute;a.";
 answers[22] = choices[22][1];
 units[22] = "24";
 comments[22] = "Id Pregunta: 575. ";


//  Id pregunta: 579 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  Cual de las siguientes afirmaciones no es una ventaja de una organizaci&oacute;n estructurada de forma funcional";
 choices[23]= new Array();
 choices[23][0] = "Se aprovechan mucho mejor los recursos humanos al no estar adjudicados a un &uacute;nico proyecto.";
 choices[23][1] = "Se conoce mejor la organizaci&oacute;n desde arriba";
 choices[23][2] = "Al trabajar los empleados  en diferentes aplicaciones se expecializan en ellas";
 choices[23][3] = "Se evita el riesgo de la dependencia excesiva de unos pocos expertos";
 answers[23] = choices[23][2];
 units[23] = "26";
 comments[23] = "Id Pregunta: 579. ";


//  Id pregunta: 619 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  En la auditor&iacute;a de sistemas EFT son las iniciales de:";
 choices[24]= new Array();
 choices[24][0] = " Electronic Fundation Transfer";
 choices[24][1] = "Electronic Fundation Testing";
 choices[24][2] = "Electronic Funds Transfer";
 choices[24][3] = "Electronic Funds Testing";
 answers[24] = choices[24][2];
 units[24] = "33";
 comments[24] = "Id Pregunta: 619. ";


//  Id pregunta: 667 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  En su libro &quot;La estructura de las organizaciones&quot; Mintzberg describe las organizaciones matriciales y se&ntilde;ala diversos factores que las identifican. &iquest;Cu&aacute;l de los siguientes no corresponde a estos factores?";
 choices[25]= new Array();
 choices[25][0] = "Elevada tendencia a disgregar a los especialistas en unidades funcionales en lo que corresponde a asuntos internos";
 choices[25][1] = "Estructura sumamente org&aacute;nica con escasa formalizaci&oacute;n del comportamiento";
 choices[25][2] = "Elevada especializaci&oacute;n del puesto basada en una preparaci&oacute;n formal";
 choices[25][3] = "Uso de dispositivos de enlace para fomentar la adaptaci&oacute;n mutua";
 answers[25] = choices[25][0];
 units[25] = "22";
 comments[25] = "Id Pregunta: 667. ";


//  Id pregunta: 4356 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  Los contratos de fabricaci&oacute;n, por los que la cosa o cosas que hayan de ser entregadas por el empresario deban ser elaboradas con arreglo a caracter&iacute;sticas peculiares fijadas previamente por la Administraci&oacute;n, a&uacute;n cuando &eacute;sta se obligue a aportar, total o parcialmente, los materiales precisos, tienen la consideraci&oacute;n de contratos de:";
 choices[26]= new Array();
 choices[26][0] = "Obras.";
 choices[26][1] = "Suministro";
 choices[26][2] = "Servicios";
 choices[26][3] = "Bienes y servicios.";
 answers[26] = choices[26][1];
 units[26] = "41";
 comments[26] = "Id Pregunta: 4356. ";


//  Id pregunta: 4413 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica de selecci&oacute;n de inversiones?";
 choices[27]= new Array();
 choices[27][0] = "El m&eacute;todo del Payback.";
 choices[27][1] = "El m&eacute;todo del retorno de la inversi&oacute;n.";
 choices[27][2] = "El m&eacute;todo del Valor Actual Neto.";
 choices[27][3] = "El m&eacute;todo del Indicador Alternativo de Variabilidad del Precio de Mercado.";
 answers[27] = choices[27][3];
 units[27] = "27";
 comments[27] = "Id Pregunta: 4413. Examen TIC MAP B 2006";


//  Id pregunta: 4450 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  Una de las medidas que se utiliza para cuantificar la rentabilidad de las inversiones en los proyectos TIC, es el VAN (valor actual neto), que se podr&iacute;a definir como:";
 choices[28]= new Array();
 choices[28][0] = "Ratio ente ingreso neto y costes";
 choices[28][1] = "Tiempo necesario para que el proyecto recupere el capital invertido.";
 choices[28][2] = "Tasa de descuento necesaria para que el valor actual sea cero.";
 choices[28][3] = "El valor actual de todos los ingresos menos el valor actual de todos los desembolsos de un proyecto, supuesto un determinado tipo de inter&eacute;s.";
 answers[28] = choices[28][3];
 units[28] = "35";
 comments[28] = "Id Pregunta: 4450. NULL";


//  Id pregunta: 4560 AÃ±o de creación de pregunta: 2007-01-01
 questions[29]= "30)  El Responsable de Seguridad de un fichero con datos de car&aacute;cter personal revisara el registro de accesos, al menos";
 choices[29]= new Array();
 choices[29][0] = "una vez al mes";
 choices[29][1] = "cada 45 d&iacute;as";
 choices[29][2] = "cuando ocurra una incidencia";
 choices[29][3] = "con anterioridad a la auditoria bienal";
 answers[29] = choices[29][0];
 units[29] = "29";
 comments[29] = "Id Pregunta: 4560. ";


//  Id pregunta: 4615 AÃ±o de creación de pregunta: 2007-01-01
 questions[30]= "31)  Seg&uacute;n las pautas de conducta en el proceso de auditoria, los auditores pueden o deben hacer";
 choices[30]= new Array();
 choices[30][0] = "escribir los procedimientos";
 choices[30][1] = "realizar gesti&oacute;n de perfiles de usuarios";
 choices[30][2] = "realizar Ia documentaci&oacute;n";
 choices[30][3] = "verificar que se evaluan peri&oacute;dicamente riesgos o bien evaluarlos";
 answers[30] = choices[30][3];
 units[30] = "31";
 comments[30] = "Id Pregunta: 4615. ";


//  Id pregunta: 4692 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  &iquest;Qu&eacute; no es una ventaja de los sistemas abiertos seg&uacute;n la Estrategia de Sistemas Abiertos de la Administraci&oacute;n del Estado?";
 choices[31]= new Array();
 choices[31][0] = "Libertad de elecci&oacute;n";
 choices[31][1] = "Protecci&oacute;n de la inversi&oacute;n";
 choices[31][2] = "Mejor relaci&oacute;n calidad/precio";
 choices[31][3] = "Garant&iacute;a de comunicaci&oacute;n e interoperabilidad de los sistemas";
 answers[31] = choices[31][2];
 units[31] = "40";
 comments[31] = "Id Pregunta: 4692. Examen 2006 JCYL";


//  Id pregunta: 4902 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  Una vez adjudicado de forma provisional el contrato a uno de los licitadores, &iquest;qu&eacute; tanto por ciento del importe final de adjudicaci&oacute;n debe depositar el adjudicatario en concepto de fianza definitiva (art&iacute;culo 95 del RD Legislativo 3/2011)?";
 choices[32]= new Array();
 choices[32][0] = "Del 5% del importe de licitaci&oacute;n, IVA incluido";
 choices[32][1] = "Del 4% del importe de adjudicaci&oacute;n";
 choices[32][2] = "Del 5% del importe de adjudicaci&oacute;n, excluido el IVA";
 choices[32][3] = "Del 3% del importe de adjudicaci&oacute;n";
 answers[32] = choices[32][2];
 units[32] = "41";
 comments[32] = "Id Pregunta: 4902. ";


//  Id pregunta: 5019 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Seg&uacute;n el RD 209/2003, de 21 de febrero, con respecto a las notificaciones telem&aacute;ticas, cuando exista constancia dela recepci&oacute;n de una notificaci&oacute;n, se considerar&aacute; que &eacute;sta ha sido rechazada cuando no se haya accedido a sucontenido en un plazo de:";
 choices[33]= new Array();
 choices[33][0] = "10 d&iacute;as naturales";
 choices[33][1] = "10 d&iacute;as h&aacute;biles";
 choices[33][2] = "20 d&iacute;as naturales";
 choices[33][3] = "En ning&uacute;n caso se considerar&aacute; rechazada si no se ha accedido a su contenido";
 answers[33] = choices[33][0];
 units[33] = "30";
 comments[33] = "Id Pregunta: 5019. Examen TIC A 2007";


//  Id pregunta: 5024 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  Cual de los siguientes no es un m&eacute;todo de ordenaci&oacute;n de alternativas disponible en el sistema SSD-AAPP v.3.0";
 choices[34]= new Array();
 choices[34][0] = "Ponderaci&oacute;n Lineal";
 choices[34][1] = "Permutaci&oacute;n";
 choices[34][2] = "Prometh&eacute;e";
 choices[34][3] = "Distancia al Ideal (TOPSIS)";
 answers[34] = choices[34][1];
 units[34] = "34";
 comments[34] = "Id Pregunta: 5024. Examen TIC A 2007";


//  Id pregunta: 5124 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Una obra bajo licencia Creative Commons:";
 choices[35]= new Array();
 choices[35][0] = "No tiene copyright";
 choices[35][1] = "Otorga todos los derechos a terceras personas";
 choices[35][2] = "Ofrecen derechos a terceras personas bajo ciertas condiciones.";
 choices[35][3] = "No ofrecen ning&uacute;n derecho a terceras personas.";
 answers[35] = choices[35][2];
 units[35] = "36";
 comments[35] = "Id Pregunta: 5124. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5486 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  El estudio de las consecuencias que tendr&iacute;a una parada de X tiempo sobre la organizaci&oacute;n se contempla en la metodolog&iacute;a MAGERIT en";
 choices[36]= new Array();
 choices[36][0] = "An&aacute;lisis de riesgos";
 choices[36][1] = "An&aacute;lisis de impacto";
 choices[36][2] = "Disponibilidad";
 choices[36][3] = "Es una metodolog&iacute;a de desarrollo, en ning&uacute;n caso trata an&aacute;lisis del riesgo";
 answers[36] = choices[36][1];
 units[36] = "33";
 comments[36] = "Id Pregunta: 5486. Castilla y Le&oacute;n";


//  Id pregunta: 5545 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Se&ntilde;ale la respuesta correcta respecto del &aacute;mbito de aplicaci&oacute;n de la ley de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos:";
 choices[37]= new Array();
 choices[37][0] = "La ley 11/2007 aplica a las relaciones de ciudadanos y empresas con las Administraciones P&uacute;blicas y a las relaciones entre las propias Administraciones P&uacute;blicas.";
 choices[37][1] = "La ley 11/2007 aplica a las Administraciones P&uacute;blicas, entendiendo por tales, la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Entidades de la Administraci&oacute;n Local, as&iacute; como las entidades de derecho p&uacute;blico o privado vinculadas o dependientes de las mismas.";
 choices[37][2] = "a) y b) son ciertas";
 choices[37][3] = "a) y b) son falsas";
 answers[37] = choices[37][3];
 units[37] = "43";
 comments[37] = "Id Pregunta: 5545. La ley no diferencia &quot;ciudadanos y empresas&quot;, sino que habla de ciudadanos de modo gen&eacute;rico. Adem&aacute;s excluye las entidades de derecho privado.";


//  Id pregunta: 5561 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  De las siguientes afirmaciones se&ntilde;ale aquella que supone un inconveniente para la protecci&oacute;n de derechos de autor comparado con la protecci&oacute;n por patentes:";
 choices[38]= new Array();
 choices[38][0] = "Los derechos de autor nacen en el mismo momento de la creaci&oacute;n de la obra.";
 choices[38][1] = "S&oacute;lo se exige que la obra sea de creaci&oacute;n original.";
 choices[38][2] = "Se protege la forma de expresi&oacute;n de las ideas.";
 choices[38][3] = "Todas las anteriores son ventajas.";
 answers[38] = choices[38][2];
 units[38] = "37";
 comments[38] = "Id Pregunta: 5561. ";


//  Id pregunta: 5582 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  La nueva ley de contratos del sector p&uacute;blico es";
 choices[39]= new Array();
 choices[39][0] = "el Real Decreto Legislativo 2/2000";
 choices[39][1] = "la Ley 30/2007";
 choices[39][2] = "el Real Decreto Legislativo 3/2011";
 choices[39][3] = "el Real Decreto Legislativo 2/2002";
 answers[39] = choices[39][2];
 units[39] = "41";
 comments[39] = "Id Pregunta: 5582. NULL";


//  Id pregunta: 5665 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  Seg&uacute;n el RD 1720/2007, &iquest;cual de los siguientes no es un derecho del afectado?";
 choices[40]= new Array();
 choices[40][0] = "Derecho de rectificacion";
 choices[40][1] = "Derecho de cancelacion";
 choices[40][2] = "Derecho de oposici&oacute;n";
 choices[40][3] = "Derecho de informaci&oacute;n";
 answers[40] = choices[40][3];
 units[40] = "29";
 comments[40] = "Id Pregunta: 5665. ";


//  Id pregunta: 5766 AÃ±o de creación de pregunta: 2009-01-01
 questions[41]= "42)  &iquest;A cu&aacute;l de las siguientes categor&iacute;as de m&eacute;todos de ordenaci&oacute;n de alternativas pertenece el m&eacute;todo PROMETHEE?";
 choices[41]= new Array();
 choices[41][0] = "Concordancia";
 choices[41][1] = "Permutaciones";
 choices[41][2] = "Relaciones de superaci&oacute;n";
 choices[41][3] = "Ponderaci&oacute;n lineal";
 answers[41] = choices[41][2];
 units[41] = "34";
 comments[41] = "Id Pregunta: 5766. ";


//  Id pregunta: 5843 AÃ±o de creación de pregunta: 2009-01-01
 questions[42]= "43)  La Ley 11/2007 de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos:";
 choices[42]= new Array();
 choices[42][0] = "Prev&eacute; que los ciudadanos se relacionen con dichas administraciones siempre que usen para ello los sistemas de firma electr&oacute;nica incorporados al Documento Nacional de Identidad";
 choices[42][1] = "Establece la creaci&oacute;n de registros electr&oacute;nicos por las Administraciones P&uacute;blicas, que admitir&aacute;n exclusivamente documentos electr&oacute;nicos normalizados y cumplimentados de acuerdo con formatos preestablecidos";
 choices[42][2] = "Es de aplicaci&oacute;n exclusivamente a los ciudadanos en sus relaciones con las Administraciones P&uacute;blicas";
 choices[42][3] = "Establece que la publicaci&oacute;n del BOE en la sede electr&oacute;nica del organismo competente tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as establecidas reglamentariamente.";
 answers[42] = choices[42][3];
 units[42] = "43";
 comments[42] = "Id Pregunta: 5843. MAP 2008 A1";


//  Id pregunta: 5879 AÃ±o de creación de pregunta: 2009-01-01
 questions[43]= "44)  Indique quien NO es miembro del Pleno del Consejo Superior de Administraci&oacute;n Electr&oacute;nica:";
 choices[43]= new Array();
 choices[43][0] = "El Presidente del Instituto Nacional de Estad&iacute;stica";
 choices[43][1] = "El Subdirector General del Centro Criptol&oacute;gico Nacional";
 choices[43][2] = "El Interventor General de la Administraci&oacute;n del Estado";
 choices[43][3] = "El Director General de la F&aacute;brica Nacional de Moneda y Timbre-Real Casa de la Moneda";
 answers[43] = choices[43][1];
 units[43] = "30";
 comments[43] = "Id Pregunta: 5879. MAP 2008 A1";


//  Id pregunta: 5916 AÃ±o de creación de pregunta: 2009-01-01
 questions[44]= "45)  Con relaci&oacute;n a Internet, cu&aacute;l de las expresiones siguientes es INCORRECTA:";
 choices[44]= new Array();
 choices[44][0] = "Cualquier persona puede enviar memoranda propuestos para ser RFC (Request For Comments)";
 choices[44][1] = "Cada RFC tiene un t&iacute;tulo y un n&uacute;mero asignado, que no puede repetirse ni eliminarse aunque el documento se quede obsoleto";
 choices[44][2] = "Los RFCs se han publicado tradicionalmente en texto ASCII";
 choices[44][3] = "Un STD contiene siempre varios RFCs de protocolos dependientes entre s&iacute;";
 answers[44] = choices[44][3];
 units[44] = "42";
 comments[44] = "Id Pregunta: 5916. MAP 2008 A1";


//  Id pregunta: 6123 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  Por v&iacute;a electr&oacute;nica en Espa&ntilde;a, pueden celebrarse los siguientes tipos de contratos:";
 choices[45]= new Array();
 choices[45][0] = "Todos.";
 choices[45][1] = "Ninguno";
 choices[45][2] = "Todos excepto los relativos al derecho de familia y sucesiones (adopciones, matrimonio, testamento).";
 choices[45][3] = "S&oacute;lo los relativos a comercio electr&oacute;nico.";
 answers[45] = choices[45][2];
 units[45] = "30";
 comments[45] = "Id Pregunta: 6123. TIC A 2009 (Ley 34/2002, art&iacute;culo 23.4)";


//  Id pregunta: 6187 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  Seg&uacute;n el Real Decreto 3/2010, los sistemas existentes a la entrada en vigor del Real Decreto disponen de un plazo de adecuaci&oacute;n de";
 choices[46]= new Array();
 choices[46][0] = "Doce meses desde la entrada en vigor";
 choices[46][1] = "Doce meses desde la entrada en vigor, pudiendo ampliarse hasta 48 meses desde la entrada en vigor";
 choices[46][2] = "Doce meses desde la entrada en vigor, pudiendo ampliarse hasta 48 meses adicionales";
 choices[46][3] = "Doce meses desde la entrada en vigor, pudiendo ampliarse hasta 48 meses desde la aprobaci&oacute;n del plan de adecuaci&oacute;n";
 answers[46] = choices[46][1];
 units[46] = "43";
 comments[46] = "Id Pregunta: 6187. Disposicion transitoria";


//  Id pregunta: 6267 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  Cu&aacute;l de los siguientes no es uno de los diez dominios de control a contemplar en un Plan de Continuidad:";
 choices[47]= new Array();
 choices[47][0] = "Seguridad ligada al personal.";
 choices[47][1] = "Seguridad f&iacute;sica y del entorno.";
 choices[47][2] = "Conformidad.";
 choices[47][3] = "Seguridad del centro de respaldo.";
 answers[47] = choices[47][3];
 units[47] = "32";
 comments[47] = "Id Pregunta: 6267. ";


//  Id pregunta: 6389 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  &iquest;C&uacute;al de los siguientes no es un contenido m&iacute;nimo de una sede electr&oacute;nica?";
 choices[48]= new Array();
 choices[48][0] = "Informaci&oacute;n relacionada con la protecci&oacute;n de datos de car&aacute;cter personal, incluyendo un enlace con la sede electr&oacute;nica de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[48][1] = "Identificaci&oacute;n de la sede, as&iacute; como del &oacute;rgano u &oacute;rganos titulares y de los responsables de la gesti&oacute;n y de los servicios puestos a disposici&oacute;n en la misma y, en su caso, de las subsedes de ella derivadas.";
 choices[48][2] = "Informaci&oacute;n necesaria para la correcta utilizaci&oacute;n de la sede incluyendo el mapa de la sede electr&oacute;nica o informaci&oacute;n equivalente, con especificaci&oacute;n de la estructura de navegaci&oacute;n y las distintas secciones disponibles, as&iacute; como la relacionada con propiedad intelectual.";
 choices[48][3] = "Todos son contenidos m&iacute;nimos de una sede electr&oacute;nica.";
 answers[48] = choices[48][3];
 units[48] = "43";
 comments[48] = "Id Pregunta: 6389. Art&iacute;culo 6 RD 1671/2009";


//  Id pregunta: 6421 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes pautas no corresponde al principio de Perceptibilidad de WCAG 2.0?";
 choices[49]= new Array();
 choices[49][0] = "Navegable";
 choices[49][1] = "Alternativas Textuales";
 choices[49][2] = "Adaptable";
 choices[49][3] = "Distinguible";
 answers[49] = choices[49][0];
 units[49] = "39";
 comments[49] = "Id Pregunta: 6421. NULL";


//  Id pregunta: 7146 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  &iquest;Qu&eacute; art&iacute;culo de la Ley 11/2007 de 22 de Junio hace referencia a los Esquemas Nacionales de Interoperabilidad y Seguridad?";
 choices[50]= new Array();
 choices[50][0] = "Art&iacute;culo 52";
 choices[50][1] = "Art&iacute;culo 44";
 choices[50][2] = "Art&iacute;culo 42";
 choices[50][3] = "Art&iacute;culo 50";
 answers[50] = choices[50][2];
 units[50] = "43";
 comments[50] = "Id Pregunta: 7146. Examen TIC B 2009";


//  Id pregunta: 8397 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  Seg&uacute;n el Real Decreto 1720/2007, la conservaci&oacute;n de una copia de respaldo de los datos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, es una medida de protecci&oacute;n de nivel";
 choices[51]= new Array();
 choices[51][0] = "B&aacute;sico";
 choices[51][1] = "Medio";
 choices[51][2] = "Alto";
 choices[51][3] = "No se contempla esta medida de protecci&oacute;n";
 answers[51] = choices[51][2];
 units[51] = "29";
 comments[51] = "Id Pregunta: 8397. Examen TIC A2 2010";


//  Id pregunta: 8401 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  Dentro del contenido m&iacute;nimo de una Sede Electr&oacute;nica NO se encuentra: ";
 choices[52]= new Array();
 choices[52][0] = "Identificaci&oacute;n, &oacute;rgano titular y responsables de gesti&oacute;n. ";
 choices[52][1] = "Sistemas de firma electr&oacute;nica que sean admitidos o utilizados en la Sede. ";
 choices[52][2] = "Sistemas de verificaci&oacute;n de los certificados de la Sede. ";
 choices[52][3] = "Relaci&oacute;n de funcionarios habilitados para actuar ante la Sede";
 answers[52] = choices[52][3];
 units[52] = "43";
 comments[52] = "Id Pregunta: 8401. Examen TIC A2 2010";


//  Id pregunta: 8615 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  En un entorno controlado de sistemas de informaci&oacute;n, la tarea de administraci&oacute;n de base de datos NO deber&iacute;a compatibilizarse con la de:";
 choices[53]= new Array();
 choices[53][0] = "Administraci&oacute;n de seguridad";
 choices[53][1] = "Programaci&oacute;n de aplicaciones";
 choices[53][2] = "Gesti&oacute;n de librer&iacute;as de cintas";
 choices[53][3] = "Aseguramiento de la calidad";
 answers[53] = choices[53][1];
 units[53] = "26";
 comments[53] = "Id Pregunta: 8615. Examen TIC A2 2010 interna";


//  Id pregunta: 8936 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  Las sedes judiciales electr&oacute;nicas se crear&aacute;n mediante disposici&oacute;n publicada en:";
 choices[54]= new Array();
 choices[54][0] = "El Bolet&iacute;n Oficial del Estado";
 choices[54][1] = "El Bolet&iacute;n Oficial de la Comunidad Aut&oacute;noma correspondiente";
 choices[54][2] = "En los dos anteriores conjuntamente en los casos indicados en la ley";
 choices[54][3] = "En uno de los dos";
 answers[54] = choices[54][3];
 units[54] = "43";
 comments[54] = "Id Pregunta: 8936. ";


//  Id pregunta: 8945 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes es un principio b&aacute;sico del Esquema Nacional de Interoperabilidad?";
 choices[55]= new Array();
 choices[55][0] = "Enfoque de soluciones multilaterales";
 choices[55][1] = "Utilizaci&oacute;n de la Red SARA como Red de comunicaciones de las Administraciones p&uacute;blicas espa&ntilde;olas";
 choices[55][2] = "Interoperabilidad sem&aacute;ntica";
 choices[55][3] = "Ninguno de los anteriores";
 answers[55] = choices[55][0];
 units[55] = "43";
 comments[55] = "Id Pregunta: 8945. NULL";


//  Id pregunta: 9088 AÃ±o de creación de pregunta: 2013-01-01
 questions[56]= "57)  Indicar el requisito imprescindible para que un programa de ordenador sea protegible.";
 choices[56]= new Array();
 choices[56][0] = "Estar documentado correctamente";
 choices[56][1] = "Estar desarrollado por una persona f&iacute;sica";
 choices[56][2] = "Ser la primera versi&oacute;n de un programa, ya que las sucesivas no est&aacute;n protegidas";
 choices[56][3] = "Ser original";
 answers[56] = choices[56][3];
 units[56] = "36";
 comments[56] = "Id Pregunta: 9088. ";


//  Id pregunta: 9302 AÃ±o de creación de pregunta: 2013-01-01
 questions[57]= "58)  ISACA:";
 choices[57]= new Array();
 choices[57][0] = "Es la Information Security Audit and Control Association";
 choices[57][1] = "Posee una metodolog&iacute;a basada en COBIT, de cara a obtener los controles a aplicar durante la auditor&iacute;a y en CMMI, de cara a obtener un modelo de desarrollo sobre el que basarse para auditar el existente";
 choices[57][2] = "Posee una metodolog&iacute;a propia, que no se basa ni en COBIT ni en CMMI";
 choices[57][3] = "Ninguna de las anteriores";
 answers[57] = choices[57][3];
 units[57] = "33";
 comments[57] = "Id Pregunta: 9302. ";


//  Id pregunta: 9307 AÃ±o de creación de pregunta: 2013-01-01
 questions[58]= "59)  &iquest;Qu&eacute; se entiende por control concomitante?";
 choices[58]= new Array();
 choices[58][0] = "Un control a priori";
 choices[58][1] = "Un control en paralelo con el proceso";
 choices[58][2] = "Un control a posteriori.";
 choices[58][3] = "Ninguna de las anteriores.";
 answers[58] = choices[58][1];
 units[58] = "31";
 comments[58] = "Id Pregunta: 9307. ";


//  Id pregunta: 9323 AÃ±o de creación de pregunta: 2013-01-01
 questions[59]= "60)  Se&ntilde;ale la verdadera";
 choices[59]= new Array();
 choices[59][0] = "Si el impacto de un hallazgo seg&uacute;n su materialidad es bajo se refleja en el informe como posible debilidad del sistema de control";
 choices[59][1] = "Si el impacto de un hallazgo seg&uacute;n su materialidad es medio se describe dicho hallazgo como una vulnerabilidad a la que se expone el sistema";
 choices[59][2] = "Si el impacto de un hallazgo seg&uacute;n su materialidad es bajo se describe dicho hallazgo como una vulnerabilidad a la que se expone el sistema";
 choices[59][3] = "Si el impacto de un hallazgo seg&uacute;n su materialidad es medio se identifica como una debilidad que debe compensarse o anularse con m&aacute;s controles, o haciendo los existentes m&aacute;s estrictos";
 answers[59] = choices[59][2];
 units[59] = "31";
 comments[59] = "Id Pregunta: 9323. ";


//  Id pregunta: 9374 AÃ±o de creación de pregunta: 2013-01-01
 questions[60]= "61)  Indique cu&aacute;l de las siguientes afirmaciones es correcta en el &aacute;mbito de la normalizaci&oacute;n de puntuaciones de la Teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta:";
 choices[60]= new Array();
 choices[60][0] = "El m&eacute;todo de fracci&oacute;n del ideal y el m&eacute;todo de fracci&oacute;n del m&aacute;ximo no mantienen la proporcionalidad pre y postnormalizaci&oacute;n";
 choices[60][1] = "El m&eacute;todo de fracci&oacute;n del m&aacute;ximo y el m&eacute;todo de fracci&oacute;n de la suma no mantienen la proporcionalidad pre y postnormalizaci&oacute;n";
 choices[60][2] = "El m&eacute;todo de fracci&oacute;n del ideal no mantiene la proporcionalidad pre y postnormalizaci&oacute;n, mientras que el m&eacute;todo de fracci&oacute;n del m&aacute;ximo s&iacute; la mantiene";
 choices[60][3] = "El m&eacute;todo de fracci&oacute;n del ideal mantiene la proporcionalidad pre y postnormalizaci&oacute;n, mientras que el m&eacute;todo de fracci&oacute;n del m&aacute;ximo no la mantiene";
 answers[60] = choices[60][2];
 units[60] = "34";
 comments[60] = "Id Pregunta: 9374. ";


//  Id pregunta: 9375 AÃ±o de creación de pregunta: 2013-01-01
 questions[61]= "62)  En la Teor&iacute;a de la Decisi&oacute;n Multicreiterio Discreta, se&ntilde;ale qu&eacute; m&eacute;todo no es de asignaci&oacute;n de pesos a los criterios:";
 choices[61]= new Array();
 choices[61][0] = "DELPHI";
 choices[61][1] = "Entrop&iacute;a";
 choices[61][2] = "SAATY";
 choices[61][3] = "PROMETHEE";
 answers[61] = choices[61][3];
 units[61] = "34";
 comments[61] = "Id Pregunta: 9375. ";


//  Id pregunta: 9647 AÃ±o de creación de pregunta: 2014-01-01
 questions[62]= "63)  &iquest;Qui&eacute;n resuelve los recursos especiales previstos en el RD Legislativo 3/2011 de Contrataci&oacute;n en el Sector P&uacute;blico?";
 choices[62]= new Array();
 choices[62][0] = "Tribunal Central de Recursos Especiales";
 choices[62][1] = "Tribunal Administrativo Central de Recursos Contractuales";
 choices[62][2] = "Tribunal Administrativo Tributario";
 choices[62][3] = "Tribunal Econ&oacute;mico &ndash; Administrativo Central";
 answers[62] = choices[62][1];
 units[62] = "41";
 comments[62] = "Id Pregunta: 9647. Adscrito al MINHAP";


//  Id pregunta: 9737 AÃ±o de creación de pregunta: 2014-01-01
 questions[63]= "64)  Indique la sentencia correcta respecto al an&aacute;lisis del factor dolor (Pain Value Analysis), es una t&eacute;cnica:";
 choices[63]= new Array();
 choices[63][0] = "Para ayudar a identificar el impacto en el negocio de uno o m&aacute;s problemas.";
 choices[63][1] = "Para calcular el l&iacute;mite m&aacute;ximo de usuarios que el sistema es capaz de gestionar, teniendo en cuenta la capacidad del hardware y el n&uacute;mero de peticiones de cada usuario.";
 choices[63][2] = "Para la asignaci&oacute;n de prioridades a diferentes actividades, dice que el 80% del valor de una actividad es generado por el 20% del esfuerzo.";
 choices[63][3] = "Acu&ntilde;ada en los a&ntilde;os 80, cuya finalidad era calcular la capacidad f&iacute;sica de los usuarios del sistema inform&aacute;tico.";
 answers[63] = choices[63][0];
 units[63] = "31";
 comments[63] = "Id Pregunta: 9737. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10213 AÃ±o de creación de pregunta: 2014-01-01
 questions[64]= "65)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas de la Decisi&oacute;n Multicriterio Discreta es m&aacute;s adecuado cuando se trata de obtener un subconjunto de alternativas aceptables?";
 choices[64]= new Array();
 choices[64][0] = "El m&eacute;todo de la Utilidad Multiatributo";
 choices[64][1] = "Los m&eacute;todos de concordancia";
 choices[64][2] = "Los m&eacute;todos basados en permutaciones";
 choices[64][3] = "El m&eacute;todo de la Programaci&oacute;n compromiso";
 answers[64] = choices[64][1];
 units[64] = "34";
 comments[64] = "Id Pregunta: 10213. ";


//  Id pregunta: 10259 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  El derecho de oposici&oacute;n al tratamiento de datos de car&aacute;cter personal tiene sentido:";
 choices[65]= new Array();
 choices[65][0] = "Para los ficheros mencionados en b) y c)";
 choices[65][1] = "Para ficheros que recojan datos de car&aacute;cter personal y no sea preciso el consentimiento del afectado para realizar el tratamiento";
 choices[65][2] = "Para ficheros que recojan datos de car&aacute;cter personal y tengan por objeto realizar actividades de prospecci&oacute;n comercial";
 choices[65][3] = "Para todo tipo de ficheros que recojan datos de car&aacute;cter personal";
 answers[65] = choices[65][0];
 units[65] = "29";
 comments[65] = "Id Pregunta: 10259. Art&iacute;culo 34 a) y b) del RD 1720/2007";


//  Id pregunta: 10362 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  Entre los documentos generados por ISO, aquellos que recogen informaci&oacute;n que no aparece en los Est&aacute;ndares Internacionales reciben el nombre de&hellip;";
 choices[66]= new Array();
 choices[66][0] = "Technical Especifications";
 choices[66][1] = "Technical Reports";
 choices[66][2] = "Technical Corrigendum";
 choices[66][3] = "Gu&iacute;as ISO";
 answers[66] = choices[66][1];
 units[66] = "42";
 comments[66] = "Id Pregunta: 10362. http://www.iso.org/iso/home/standards_development/deliverables-all.htm?type=tr";


//  Id pregunta: 10371 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  Se&ntilde;ale cu&aacute;l de los siguientes no puede considerarse un riesgo que puede limitar el &eacute;xito un proyecto de ingenier&iacute;a de software:";
 choices[67]= new Array();
 choices[67][0] = "Excesiva rotaci&oacute;n de personal en la division encargada del desarrollo";
 choices[67][1] = "Al servidor de Eclipse le falta un parche de seguridad y pueden atacarlo";
 choices[67][2] = "El cliente no habla nuestro idioma ni el ingl&eacute;s y tenemos un traductor no muy experto, a menudo hay confusi&oacute;n entre lo que nos pide y lo que entendemos.";
 choices[67][3] = "Se va a usar una tecnolog&iacute;a de desarrollo de la que apenas haya conocimiento y referencia de proyectos exitosos con la misma";
 answers[67] = choices[67][1];
 units[67] = "28";
 comments[67] = "Id Pregunta: 10371. ";


//  Id pregunta: 10559 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  Cual de los siguientes no es un principio de COBIT5";
 choices[68]= new Array();
 choices[68][0] = "Satisfacer las necesidades de las partes interesadas";
 choices[68][1] = "Unificar el Gobierno con la administraci&oacute;n";
 choices[68][2] = "Habilitar un enfoque hol&iacute;stico";
 choices[68][3] = "Aplicar un solo marco integrado";
 answers[68] = choices[68][1];
 units[68] = "31, 32, 33";
 comments[68] = "Id Pregunta: 10559. Uno de los principios es Separar el Gobierno de la Administraci&oacute;n";


//  Id pregunta: 10579 AÃ±o de creación de pregunta: 2015-01-01
 questions[69]= "70)  Seg&uacute;n el criterio de subsidiariedad a la hora de implantar una infraestructura com&uacute;n, es m&aacute;s conveniente:";
 choices[69]= new Array();
 choices[69][0] = "Forzar su utilizaci&oacute;n por todos los entes implicados.";
 choices[69][1] = "Establecer su uso como voluntario.";
 choices[69][2] = "Recomendar la utizaci&oacute;n parcial de la infraestructura.";
 choices[69][3] = "Ninguna de las anteriores.";
 answers[69] = choices[69][1];
 units[69] = "44";
 comments[69] = "Id Pregunta: 10579. ";


//  Id pregunta: 10582 AÃ±o de creación de pregunta: 2015-01-01
 questions[70]= "71)  Los certificados de sede electr&oacute;nica incluir&aacute;n como contenido:";
 choices[70]= new Array();
 choices[70][0] = "Lo que disponga el Esquema Nacional de Seguridad.";
 choices[70][1] = "La denominaci&oacute;n de &ldquo;sede electr&oacute;nica&rdquo; y el n&uacute;mero de identificaci&oacute;n fiscal de la autoridad de certificaci&oacute;n.";
 choices[70][2] = "Su contenido no est&aacute; definido en ninguna norma.";
 choices[70][3] = "La denominaci&oacute;n del nombre del dominio y el nombre descriptivo de la sede.";
 answers[70] = choices[70][3];
 units[70] = "43";
 comments[70] = "Id Pregunta: 10582. Art&iacute;culo 18, RD 1671/2009.";


//  Id pregunta: 10586 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  La Ley 26/2007 de medidas de Impulso de la Sociedad de la Informaci&oacute;n:";
 choices[71]= new Array();
 choices[71][0] = "Modifica las leyes 34/2002, 59/2003 y 7/1996.";
 choices[71][1] = "Introduce normativa sobre facturaci&oacute;n electr&oacute;nica.";
 choices[71][2] = "Elimina la intervenci&oacute;n del MINETUR para dirigirse a los prestadores de servicios de intermediaci&oacute;n.";
 choices[71][3] = "Todas las anteriores.";
 answers[71] = choices[71][3];
 units[71] = "30";
 comments[71] = "Id Pregunta: 10586. ";


//  Id pregunta: 10594 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  Los programas de ordenador...";
 choices[72]= new Array();
 choices[72][0] = "&hellip; nunca pueden ser objeto de una patente.";
 choices[72][1] = "&hellip; son patentables en la medida en que forman parte de una invenci&oacute;n.";
 choices[72][2] = "&hellip; pueden ser siempre patentables.";
 choices[72][3] = "&hellip; son patentables siempre y cuando est&eacute;n escritos en lenguaje de alto nivel.";
 answers[72] = choices[72][1];
 units[72] = "36";
 comments[72] = "Id Pregunta: 10594. ";


//  Id pregunta: 10598 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  Un directivo TIC:";
 choices[73]= new Array();
 choices[73][0] = "No puede ser un funcionario de otro cuerpo.";
 choices[73][1] = "No tiene como funci&oacute;n la gesti&oacute;n del cambio.";
 choices[73][2] = "Entre sus funciones se incluye la planificaci&oacute;n estrat&eacute;gica y la gesti&oacute;n de recursos.";
 choices[73][3] = "Todas las anteriores.";
 answers[73] = choices[73][2];
 units[73] = "24";
 comments[73] = "Id Pregunta: 10598. ";


//  Id pregunta: 10675 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece su entrada en vigor para &quot;las previsiones relativas al registro electr&oacute;nico de apoderamientos, registro electr&oacute;nico, registro de empleados p&uacute;blicos habilitados, punto de acceso general electr&oacute;nico de la Administraci&oacute;n y archivo &uacute;nico electr&oacute;nico&quot; en un plazo de:";
 choices[74]= new Array();
 choices[74][0] = "2 a&ntilde;os despu&eacute;s de su entrada en vigor.";
 choices[74][1] = "1 a&ntilde;o despu&eacute;s de su publicaci&oacute;n.";
 choices[74][2] = "1 a&ntilde;o despu&eacute;s de su aprobaci&oacute;n.";
 choices[74][3] = "6 meses despu&eacute;s de su publicaci&oacute;n.";
 answers[74] = choices[74][0];
 units[74] = "30";
 comments[74] = "Id Pregunta: 10675. ";


//  Id pregunta: 10684 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  Seg&uacute;n la Ley 39/2015 en referencia al plazo de notificaci&oacute;n, se establece que:";
 choices[75]= new Array();
 choices[75][0] = "El plazo m&aacute;ximo en el que debe notificarse la resoluci&oacute;n expresa ser&aacute; el fijado por la norma reguladora del correspondiente procedimiento.";
 choices[75][1] = "El plazo no podr&aacute; exceder de seis meses salvo que una norma con rango de Ley establezca uno mayor o as&iacute; venga previsto en el Derecho de la Uni&oacute;n Europea.";
 choices[75][2] = "Ambas";
 choices[75][3] = "Ninguna de las anteriores.";
 answers[75] = choices[75][2];
 units[75] = "30";
 comments[75] = "Id Pregunta: 10684. ";


//  Id pregunta: 10685 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  Seg&uacute;n la Ley 39/2015, para cual de estas actuaciones no es necesar&iacute;a la firma electr&oacute;nica.";
 choices[76]= new Array();
 choices[76][0] = "Iniciar un procedimiento.";
 choices[76][1] = "Interponer un recurso.";
 choices[76][2] = "Desistir de acciones.";
 choices[76][3] = "Renunciar a derechos.";
 answers[76] = choices[76][0];
 units[76] = "30";
 comments[76] = "Id Pregunta: 10685. ";


//  Id pregunta: 10690 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  &iquest;Qu&eacute; reglamento ha considerado la Ley 39/2015 para el establecimiento los sistemas de identificaci&oacute;n como los de firma previstos en dicha Ley?";
 choices[77]= new Array();
 choices[77][0] = "Reglamento (UE) n.&ordm; 910/2014.";
 choices[77][1] = "Reglamento (UE) n.&ordm; 810/2013.";
 choices[77][2] = "Reglamento (UE) n.&ordm; 527/2013.";
 choices[77][3] = "Reglamento (UE) n.&ordm; 810/2014.";
 answers[77] = choices[77][0];
 units[77] = "30";
 comments[77] = "Id Pregunta: 10690. ";


//  Id pregunta: 10692 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  La Ley 39/2015 es de aplicaci&oacute;n obligatoria:";
 choices[78]= new Array();
 choices[78][0] = "&Uacute;nicamente para la Administraci&oacute;n General del Estado.";
 choices[78][1] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Administraci&oacute;n Local.";
 choices[78][2] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas,  Administraci&oacute;n Local y Sector P&uacute;blico Institucional.";
 choices[78][3] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas,  Administraci&oacute;n Local,  Sector P&uacute;blico Institucional y Corporaciones de Derecho P&uacute;blico.";
 answers[78] = choices[78][2];
 units[78] = "30";
 comments[78] = "Id Pregunta: 10692. ";


//  Id pregunta: 10698 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  La Norma T&eacute;cnica de Interoperabilidad de documento electr&oacute;nico es aplicable a:";
 choices[79]= new Array();
 choices[79][0] = "Documentos administrativos electr&oacute;nicos.";
 choices[79][1] = "Cualquier otro documento electr&oacute;nico susceptible de formar parte de un expediente electr&oacute;nico.";
 choices[79][2] = "Ambos (los dos anteriores).";
 choices[79][3] = "Todo documento en poder de la administraci&oacute;n.";
 answers[79] = choices[79][2];
 units[79] = "43";
 comments[79] = "Id Pregunta: 10698. ";


//  Id pregunta: 10713 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l no es seg&uacute;n la NTI de Modelo de Datos para el Intercambio de asientos entre las entidades registrales un componente de la plataforma de intercambio?";
 choices[80]= new Array();
 choices[80][0] = "Origen";
 choices[80][1] = "Destino";
 choices[80][2] = "Gestor de intercambio";
 choices[80][3] = "Sistema de intercambio";
 answers[80] = choices[80][3];
 units[80] = "43";
 comments[80] = "Id Pregunta: 10713. ";


//  Id pregunta: 10730 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  Seg&uacute;n la NTI de requisitos de conexi&oacute;n a la red de comunicaciones de las Administraciones P&uacute;blicas espa&ntilde;olas &iquest;cual de los siguientes no es un tipo de Punto de Presencia (PdP) de la Red SARA?";
 choices[81]= new Array();
 choices[81][0] = "Proveedores de Acceso a la Red SARA (PAS).";
 choices[81][1] = "Centros de Proceso de Datos (CPD) de SARA.";
 choices[81][2] = "Red sTESTA (secure Trans-European Services for Telematics between Administrations).";
 choices[81][3] = "Todos los anteriores son tipos de PdP.";
 answers[81] = choices[81][3];
 units[81] = "43";
 comments[81] = "Id Pregunta: 10730. ";


//  Id pregunta: 10748 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  &iquest;Qui&eacute;n propone la estrategia en materia de tecnolog&iacute;a y comunicaciones?";
 choices[82]= new Array();
 choices[82][0] = "Los ministros de la Presidencia y de Hacienda y Administraciones P&uacute;blicas y de Industria.";
 choices[82][1] = "El ministro de Hacienda y Administraciones P&uacute;blicas.";
 choices[82][2] = "Los ministros de la Presidencia, de Hacienda y Administraciones P&uacute;blicas y de Industria, Energ&iacute;a y Turismo.";
 choices[82][3] = "El CIO de la AGE.";
 answers[82] = choices[82][2];
 units[82] = "24";
 comments[82] = "Id Pregunta: 10748. ";


//  Id pregunta: 10764 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;Qu&eacute; rango tiene la La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones?";
 choices[83]= new Array();
 choices[83][0] = "Subsecretar&iacute;a de Estado";
 choices[83][1] = "Secretar&iacute;a de Estado";
 choices[83][2] = "Direcci&oacute;n General";
 choices[83][3] = "Direcci&oacute;n General T&eacute;cnica";
 answers[83] = choices[83][0];
 units[83] = "24";
 comments[83] = "Id Pregunta: 10764. ";


//  Id pregunta: 10766 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Qu&eacute; plazo se establece para la realizaci&oacute;n del informe t&eacute;cnico de la memoria y los pliegos de prescripciones t&eacute;cnicas para la contrataci&oacute;n de tecnolog&iacute;as de la informaci&oacute;n?";
 choices[84]= new Array();
 choices[84][0] = "1 mes";
 choices[84][1] = "20 d&iacute;as";
 choices[84][2] = "10 d&iacute;as";
 choices[84][3] = "3 meses";
 answers[84] = choices[84][2];
 units[84] = "24";
 comments[84] = "Id Pregunta: 10766. ";


//  Id pregunta: 10820 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  En el PERT, el tiempo last del &uacute;ltimo suceso:";
 choices[85]= new Array();
 choices[85][0] = "Es siempre cero.";
 choices[85][1] = "Es igual a su tiempo early.";
 choices[85][2] = "Es mayor que su tiempo early.";
 choices[85][3] = "Es menor que su tiempo early.";
 answers[85] = choices[85][1];
 units[85] = "28";
 comments[85] = "Id Pregunta: 10820. Examen GSI 2014";


//  Id pregunta: 10994 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Entre los objetivos del proyecto STORK 2.0 (Secure idenTity acrOss boRders linKed) NO se encuentra:";
 choices[86]= new Array();
 choices[86][0] = "Construcci&oacute;n de pilotos o demostradores de servicios de administraci&oacute;n electr&oacute;nica.";
 choices[86][1] = "Estudio de las especificaciones t&eacute;cnicas comunes que permitan el reconocimiento europeo de las eID (identidades electr&oacute;nicas) nacionales.";
 choices[86][2] = "Desarrollo de tecnolog&iacute;as y servicios avanzados de eID que sirvan de base para la construcci&oacute;n de la identidad electr&oacute;nica europea &uacute;nica (eueID) prevista para 2020.";
 choices[86][3] = "Realizaci&oacute;n de estudios sobre la situaci&oacute;n legal y t&eacute;cnica de los sistemas de identificaci&oacute;n y firma electr&oacute;nica utilizados en los Estados Miembros.";
 answers[86] = choices[86][2];
 units[86] = "30";
 comments[86] = "Id Pregunta: 10994. TIC A1 AGE 2014";


//  Id pregunta: 11010 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;C&oacute;mo se llaman los &oacute;rganos colegiados de &aacute;mbito departamental responsables del impulso y de la coordinaci&oacute;n interna en cada departamento en materia de Administraci&oacute;n digital?";
 choices[87]= new Array();
 choices[87][0] = "Comisiones Ministeriales de Administraci&oacute;n Electr&oacute;nica";
 choices[87][1] = "Comisiones Ministeriales de Administraci&oacute;n Digital";
 choices[87][2] = "Subdirecciones TIC";
 choices[87][3] = "Direcci&oacute;n TIC";
 answers[87] = choices[87][1];
 units[87] = "24";
 comments[87] = "Id Pregunta: 11010. ";


//  Id pregunta: 11022 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l es la &uacute;nica pauta definida dentro del principio de robustez de las WCAG 2.0? ";
 choices[88]= new Array();
 choices[88][0] = "Alternativas textuales";
 choices[88][1] = "Accesible a trav&eacute;s de teclado";
 choices[88][2] = "Compatible";
 choices[88][3] = "Ayuda a la entrada de datos";
 answers[88] = choices[88][2];
 units[88] = "39";
 comments[88] = "Id Pregunta: 11022. ";


//  Id pregunta: 11104 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Seleccione la respuesta falsa respecto al ciclo de Deming";
 choices[89]= new Array();
 choices[89][0] = "En la fase de Plan, se detallan las especificaciones de los resultados esperados";
 choices[89][1] = "En la fase de Act, se asignan recursos y recopilan los datos para verificarlos.";
 choices[89][2] = "En la fase de Do se ejecuta el plan estrat&eacute;gico";
 choices[89][3] = "En la fase de Check, se eval&uacute;a si se ha producido la mejora esperada";
 answers[89] = choices[89][1];
 units[89] = "31";
 comments[89] = "Id Pregunta: 11104. ";


//  Id pregunta: 11120 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de los siguientes no es un contenido m&iacute;nimo que deben tener las sedes electr&oacute;nicas de acuerdo con el art&iacute;culo 6 del RD 1671/2009?";
 choices[90]= new Array();
 choices[90][0] = "Sistema de verificaci&oacute;n de los certificados de la sede, accesible de forma directa y gratuita";
 choices[90][1] = "Informaci&oacute;n relacionada con la protecci&oacute;n de datos de car&aacute;cter personal, incluyendo un enlace con la sede electr&oacute;nica de la AEPD.";
 choices[90][2] = "Servicios de asesoramiento electr&oacute;nico al usuario para la correcta utilizaci&oacute;n de la sede";
 choices[90][3] = "Todos los anteriores son contenidos m&iacute;nimos de las sedes electr&oacute;nicas.";
 answers[90] = choices[90][3];
 units[90] = "43";
 comments[90] = "Id Pregunta: 11120. ";


//  Id pregunta: 11123 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de las siguientes no es una norma t&eacute;cnica de interoperabilidad?";
 choices[91]= new Array();
 choices[91][0] = "Cat&aacute;logo de est&aacute;ndares";
 choices[91][1] = "Modelo de datos para el intercambio de expedientes y documentos electr&oacute;nicos";
 choices[91][2] = "Procedimiento de copiado aut&eacute;ntico y conversi&oacute;n entre documentos electr&oacute;nicos";
 choices[91][3] = "Reutilizaci&oacute;n de recursos de informaci&oacute;n";
 answers[91] = choices[91][1];
 units[91] = "43";
 comments[91] = "Id Pregunta: 11123. ";


//  Id pregunta: 11192 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;A cu&aacute;l de las siguientes prioridades de la estrategia Europa 2020 se hace referencia con el objetivo de la b&uacute;squeda de un econom&iacute;a basada en el conocimiento y la innovaci&oacute;n?";
 choices[92]= new Array();
 choices[92][0] = "Crecimiento inteligente";
 choices[92][1] = "Crecimiento sostenible";
 choices[92][2] = "Crecimiento innovador";
 choices[92][3] = "Crecimiento integrador";
 answers[92] = choices[92][0];
 units[92] = "30";
 comments[92] = "Id Pregunta: 11192. ";


//  Id pregunta: 11193 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de las siguientes no es una prioridad de la estrategia Europa 2020?";
 choices[93]= new Array();
 choices[93][0] = "Crecimiento inteligente";
 choices[93][1] = "Crecimiento sostenible";
 choices[93][2] = "Crecimiento integrador";
 choices[93][3] = "Todas las anteriores";
 answers[93] = choices[93][3];
 units[93] = "30";
 comments[93] = "Id Pregunta: 11193. ";


//  Id pregunta: 11209 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l es el porcentaje objetivo de personas que nunca hayan usado Internet para 2015 seg&uacute;n la Agenda Digital Europea?";
 choices[94]= new Array();
 choices[94][0] = "0.2";
 choices[94][1] = "0.33";
 choices[94][2] = "0.15";
 choices[94][3] = "0.01";
 answers[94] = choices[94][2];
 units[94] = "30";
 comments[94] = "Id Pregunta: 11209. ";


//  Id pregunta: 11250 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Las garant&iacute;as en los contratos NO se:";
 choices[95]= new Array();
 choices[95][0] = "Reponen para responder ante penalizaciones o indemnizaciones.";
 choices[95][1] = "Reutilizan para cubrir necesidades de otro contrato.";
 choices[95][2] = "Reajustan ante variaciones en el precio del contrato, debido a una modificaci&oacute;n de &eacute;ste.";
 choices[95][3] = "Devuelven o cancelan cuando vence el per&iacute;odo de garant&iacute;a del contrato y &eacute;ste se ha cumplido de forma satisfactoria, o cuando se resuelve el contrato, sin que exista culpa por parte del contratista.";
 answers[95] = choices[95][1];
 units[95] = "41";
 comments[95] = "Id Pregunta: 11250. ";


//  Id pregunta: 11357 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Se&ntilde;ale cu&aacute;l de las siguientes opciones contiene m&eacute;todos de asignaci&oacute;n de pesos en la Teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta";
 choices[96]= new Array();
 choices[96][0] = "Delphi, Utilidades relativas, UMA, Entrop&iacute;a";
 choices[96][1] = "Delphi, Utilidades relativas, AHP, Entrop&iacute;a";
 choices[96][2] = "Delphi, Utilidades relativas, Electre, Entrop&iacute;a";
 choices[96][3] = "Delphi, Utilidades relativas, Electre, TOPSIS";
 answers[96] = choices[96][1];
 units[96] = "34";
 comments[96] = "Id Pregunta: 11357. ";


//  Id pregunta: 11491 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Qu&eacute; norma del CCN hace referencia a la criptograf&iacute;a de empleo en el Esquema Nacional de Seguridad?";
 choices[97]= new Array();
 choices[97][0] = "CCN-STIC-802";
 choices[97][1] = "CCN-STIC-403";
 choices[97][2] = "CCN-STIC-807";
 choices[97][3] = "CCN-STIC-823";
 answers[97] = choices[97][2];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11491. NULL";


//  Id pregunta: 11744 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; dimensi&oacute;n de seguridad es obligatoria de evaluar para el responsable del servicio?&nbsp;  ";
 choices[98]= new Array();
 choices[98][0] = "autenticacion";
 choices[98][1] = "trazabilidad";
 choices[98][2] = "integridad";
 choices[98][3] = "disponibilidad";
 answers[98] = choices[98][3];
 units[98] = "43";
 comments[98] = "Id Pregunta: 11744. ";


//  Id pregunta: 11788 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la gu&iacute;a CCN-STIC-827 Gesti&oacute;n y uso de dispositivos m&oacute;viles:";
 choices[99]= new Array();
 choices[99][0] = "La gesti&oacute;n de dispositivos m&oacute;viles puede realizarse mediante el env&iacute;o de mensajes SMS reconocibles por el software propietario de la marca instalado en el dispositivo o el Sistema Operativo.";
 choices[99][1] = "La gesti&oacute;n de dispositivos m&oacute;viles puede realizarse aplicando Mobile Device Management (MDM) con un producto de terceros.";
 choices[99][2] = "Mobile Application Management (MAM) se dirige a gestionar una o varias aplicaciones espec&iacute;ficas dentro de cada dispositivo m&oacute;vil, en vez de gestionar la totalidad del dispositivo.";
 choices[99][3] = "Todas las anteriores son correctas.";
 answers[99] = choices[99][3];
 units[99] = "43";
 comments[99] = "Id Pregunta: 11788. ";


