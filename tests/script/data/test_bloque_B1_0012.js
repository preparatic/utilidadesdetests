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


//  Id pregunta: 34 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes gu&iacute;as no forma parte de los est&aacute;ndares EDIFACT?:";
 choices[1]= new Array();
 choices[1][0] = "Directorio de registro de datos";
 choices[1][1] = "Directorio de segmentos";
 choices[1][2] = "Directorio de mensajes";
 choices[1][3] = "Conjunto de c&oacute;digos";
 answers[1] = choices[1][0];
 units[1] = "42";
 comments[1] = "Id Pregunta: 34. ";


//  Id pregunta: 45 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes elementos no se considera un activo de una organizaci&oacute;n?";
 choices[2]= new Array();
 choices[2][0] = "Recursos f&iacute;sicos: equipos, sistemas, cableado&hellip;";
 choices[2][1] = "Utilizaci&oacute;n de recursos: uso de CPU, de ancho de banda, de disco duro&hellip;";
 choices[2][2] = "Imagen y reputaci&oacute;n p&uacute;blica y profesional de la empresa y sus empleados";
 choices[2][3] = "Todos los anteriores son activos de una organizaci&oacute;n";
 answers[2] = choices[2][3];
 units[2] = "32";
 comments[2] = "Id Pregunta: 45. ";


//  Id pregunta: 47 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes grupos de funciones corresponde a los de un sistema de informaci&oacute;n?:";
 choices[3]= new Array();
 choices[3][0] = "Recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, tratamiento y distribuci&oacute;n";
 choices[3][1] = "Recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, codificaci&oacute;n y distribuci&oacute;n";
 choices[3][2] = "Recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, filtrado y distribuci&oacute;n";
 choices[3][3] = "Recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n y distribuci&oacute;n";
 answers[3] = choices[3][0];
 units[3] = "21";
 comments[3] = "Id Pregunta: 47. NULL";


//  Id pregunta: 80 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Qu&eacute; se considera m&aacute;s id&oacute;neo para un directivo?:";
 choices[4]= new Array();
 choices[4][0] = "Cuando se trate de un tema complejo, confiar en los expertos y decidir de acuerdo con sus informes";
 choices[4][1] = "Dedicar tiempos tasados a cada uno de los temas";
 choices[4][2] = "Tomar las decisiones lo m&aacute;s r&aacute;pidamente posible";
 choices[4][3] = "Conseguir que sus colaboradores le aprecien";
 answers[4] = choices[4][1];
 units[4] = "25";
 comments[4] = "Id Pregunta: 80. ";


//  Id pregunta: 96 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  A todos los efectos se consideraran normas europeas las producidas por los organismos:";
 choices[5]= new Array();
 choices[5][0] = "CEN, CENELEC o CEPT/ETSI";
 choices[5][1] = "CENELEC, ETSI o IEC";
 choices[5][2] = "ISO, CEPT o CENELEC";
 choices[5][3] = "AENOR, CEPT o CEN";
 answers[5] = choices[5][0];
 units[5] = "42";
 comments[5] = "Id Pregunta: 96. ";


//  Id pregunta: 101 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  En relaci&oacute;n con los sistemas abiertos, indique la afirmaci&oacute;n que no es correcta:";
 choices[6]= new Array();
 choices[6][0] = "Los sistemas abiertos son aqu&eacute;llos cuyas especificaciones est&aacute;n aprobadas por organismos independientes de normalizaci&oacute;n";
 choices[6][1] = "En lo tocante a sistemas operativos, sistema abierto es sin&oacute;nimo de Unix";
 choices[6][2] = "Sistemas abiertos son aqu&eacute;llos que pueden ser adquiridos de fuentes distintas en un mercado competitivo";
 choices[6][3] = "Un sistema definido como abierto es capaz de interconectarse con otro de acuerdo con unas normas establecidas";
 answers[6] = choices[6][1];
 units[6] = "40";
 comments[6] = "Id Pregunta: 101. ";


//  Id pregunta: 155 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El objetivo fundamental de un sistema de informaci&oacute;n para la alta direcci&oacute;n de una organizaci&oacute;n debe ser:";
 choices[7]= new Array();
 choices[7][0] = "Conseguir que los directivos de la misma logren acceder a toda la informaci&oacute;n contenida en las bases de datos de la organizaci&oacute;n";
 choices[7][1] = "Poner a disposici&oacute;n de los directivos herramientas de investigaci&oacute;n operativa que permitan simular problemas relacionados con el sector a que pertenezca la empresa a partir de datos obtenidos de otras empresas";
 choices[7][2] = "Lograr un subproducto del sistema de informaci&oacute;n corporativo e integrado con &eacute;ste, susceptible de ser tratado con herramientas de simulaci&oacute;n";
 choices[7][3] = "Elaborar los procesos batch necesarios que cubran el nivel de informaci&oacute;n desagregada fijado por la direcci&oacute;n";
 answers[7] = choices[7][2];
 units[7] = "21";
 comments[7] = "Id Pregunta: 155. ";


//  Id pregunta: 172 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  En cuanto a las sanciones a aplicar por incumpimiento de la LOPD y las medidas de protecci&oacute;n asociadas:";
 choices[8]= new Array();
 choices[8][0] = "La prescripci&oacute;n de las sanciones es de 2 a&ntilde;os para sanciones leves, 3 para las graves y 4 para las muy graves";
 choices[8][1] = "Las infracciones muy graves ser&aacute;n sancionadas con multa de 300.001 a 600.000 euros.";
 choices[8][2] = "En ning&uacute;n caso se deber&aacute;n inmovilizar ni destruir los ficheros causantes de la sanci&oacute;n";
 choices[8][3] = "La cuant&iacute;a de la sanci&oacute;n est&aacute; prefijada, no depende de factores como el volumen de informaci&oacute;n, los derechos personales afectados, los beneficios obtenidos o la reincidencia";
 answers[8] = choices[8][1];
 units[8] = "29";
 comments[8] = "Id Pregunta: 172. NULL";


//  Id pregunta: 181 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En el control de integridad de los datos no entra el control de:";
 choices[9]= new Array();
 choices[9][0] = "Fallos en la disponibilidad de los datos";
 choices[9][1] = "La p&eacute;rdida de los datos";
 choices[9][2] = "Duplicaciones de datos";
 choices[9][3] = "Alteraci&oacute;n del significado de los datos";
 answers[9] = choices[9][0];
 units[9] = "21";
 comments[9] = "Id Pregunta: 181. ";


//  Id pregunta: 199 AÃ±o de creación de pregunta: 2004-01-01
 questions[10]= "11)  La seguridad f&iacute;sica de los sitemas de informaci&oacute;n:";
 choices[10]= new Array();
 choices[10][0] = "Debido a la segregaci&oacute;n de tareas, es labor exclusiva de los guardias de seguridad";
 choices[10][1] = "Debe alcanzar tambi&eacute;n a los equipos que est&eacute;n fuera de los locales de la Organizaci&oacute;n (equipos en teletrabajo, port&aacute;tiles, PDAs, etc.)";
 choices[10][2] = "Es una preocupaci&oacute;n que se evita al externalizar las funciones de explotaci&oacute;n del sistema de informaci&oacute;n";
 choices[10][3] = "Es notablemente superior en aquellas Organizaciones que disponen de s&oacute;tanos bunkerizados";
 answers[10] = choices[10][1];
 units[10] = "33";
 comments[10] = "Id Pregunta: 199. Examen TIC MAP B 2004";


//  Id pregunta: 215 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En la funci&oacute;n de almacenamiento de datos de un sistema de informaci&oacute;n no es necesario tener en cuenta:";
 choices[11]= new Array();
 choices[11][0] = "El papel de la base de datos";
 choices[11][1] = "La organizaci&oacute;n de la base de datos";
 choices[11][2] = "Almacenamiento en l&iacute;nea versus fuera de l&iacute;nea";
 choices[11][3] = "Enfoque integrado, capturando s&oacute;lo una vez un elemento dado de datos";
 answers[11] = choices[11][3];
 units[11] = "21";
 comments[11] = "Id Pregunta: 215. ";


//  Id pregunta: 220 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En la planificaci&oacute;n de proyectos:";
 choices[12]= new Array();
 choices[12][0] = "Los diagramas de red (entre ellos PERT, ADM &ndash;actividad flecha-, y PDM &ndash;actividad nodo-)  presentan dependencias pero no informaci&oacute;n temporal.";
 choices[12][1] = "Los diagramas de red (entre ellos PERT, ADM &ndash;actividad flecha-, y PDM &ndash;actividad nodo-)  presentan dependencias e informaci&oacute;n temporal.";
 choices[12][2] = "Los gr&aacute;ficos de barras o de Gantt representan las dependencias entre tareas.";
 choices[12][3] = "El camino cr&iacute;tico en un proyecto ha de ser necesariamente &uacute;nico.";
 answers[12] = choices[12][0];
 units[12] = "27";
 comments[12] = "Id Pregunta: 220. La informaci&oacute;n temporal puede aparecer pero no siempre aparece";


//  Id pregunta: 242 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En un sistema de informaci&oacute;n:";
 choices[13]= new Array();
 choices[13][0] = "En el nivel t&aacute;ctico se implementan las decisiones mediante un procedimiento automatizado";
 choices[13][1] = "En el nivel operacional se realiza el grueso del tratamiento de los datos";
 choices[13][2] = "En el nivel estrat&eacute;gico las decisiones dependen de fuentes de informaci&oacute;n externa";
 choices[13][3] = "Todas las anteriores son correctas";
 answers[13] = choices[13][3];
 units[13] = "21";
 comments[13] = "Id Pregunta: 242. ";


//  Id pregunta: 272 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Indique cu&aacute;l de las siguientes afirmaciones se aplica a la gesti&oacute;n de incidencias y aver&iacute;as:";
 choices[14]= new Array();
 choices[14][0] = "Las herramientas de gesti&oacute;n de incidencias deben estar integradas con el inventario";
 choices[14][1] = "La eficiencia del sistema es funci&oacute;n directa del n&uacute;mero de terminales telef&oacute;nicos";
 choices[14][2] = "Las llamadas de aver&iacute;as deben encaminarse autom&aacute;ticamente al suministrador";
 choices[14][3] = "Los operadores deben ser expertos en mantenimiento hardware";
 answers[14] = choices[14][0];
 units[14] = "32";
 comments[14] = "Id Pregunta: 272. ";


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


//  Id pregunta: 293 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  La definici&oacute;n de organizaci&oacute;n como &quot;combinaci&oacute;n de medios humanos y materiales disponibles para la consecuci&oacute;n de un fin seg&uacute;n un esquema preciso de dependencias e interrelaciones&quot; es debida a: ";
 choices[16]= new Array();
 choices[16][0] = "Andrea Zerilli";
 choices[16][1] = "Stephen Robbins";
 choices[16][2] = "James Emery";
 choices[16][3] = "Robert Gibson";
 answers[16] = choices[16][0];
 units[16] = "22";
 comments[16] = "Id Pregunta: 293. ";


//  Id pregunta: 304 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  La estructura organizacional  proyecto-funcional de un &aacute;rea de desarrollo:";
 choices[17]= new Array();
 choices[17][0] = "Se caracteriza por un mejor aprovechamiento de los recursos humanos, al no estar adjudicados a un &uacute;nico proyecto";
 choices[17][1] = "Se caracteriza por que no es necesaria una coordinaci&oacute;n excesiva a alto nivel ya que cada departamento es independiente";
 choices[17][2] = "Es equivalente a una organizaci&oacute;n matricial";
 choices[17][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[17] = choices[17][2];
 units[17] = "26";
 comments[17] = "Id Pregunta: 304. estructura organizacional";


//  Id pregunta: 313 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La Ley de Pareto:";
 choices[18]= new Array();
 choices[18][0] = "Se conoce como &lsquo;ley del 90/10&rsquo;";
 choices[18][1] = "Se conoce como &lsquo;ley del 80/20&rsquo;";
 choices[18][2] = "Dice que con el 90% de esfuerzo se resuelven el 10% de los problemas";
 choices[18][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; correctas";
 answers[18] = choices[18][1];
 units[18] = "25";
 comments[18] = "Id Pregunta: 313. ";


//  Id pregunta: 319 AÃ±o de creación de pregunta: 2009-01-01
 questions[19]= "20)  La LOPD se aplicar&aacute; sin especialidad indicada a:";
 choices[19]= new Array();
 choices[19][0] = "Los ficheros que mantengan las personas f&iacute;sicas con fines exclusivamente dom&eacute;sticos o personales";
 choices[19][1] = "A todos aquellos datos de car&aacute;cter personal registrados en cualquier soporte que los haga susceptibles de tratamiento y cualquier modalidad de uso posterior de los mismos";
 choices[19][2] = "Los ficheros regulados por la legislaci&oacute;n electoral o sobre estad&iacute;stica p&uacute;blica";
 choices[19][3] = "Los ficheros derivados de los Registros Civiles";
 answers[19] = choices[19][1];
 units[19] = "29";
 comments[19] = "Id Pregunta: 319. ";


//  Id pregunta: 338 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  La rectificaci&oacute;n o cancelaci&oacute;n de datos de car&aacute;cter personal se har&aacute; efectiva por el responsable del fichero en un periodo de tiempo siguiente al de recepci&oacute;n de la solicitud. Dicho periodo es de:";
 choices[20]= new Array();
 choices[20][0] = "5 d&iacute;as";
 choices[20][1] = "10 d&iacute;as";
 choices[20][2] = "15 d&iacute;as";
 choices[20][3] = "1 mes";
 answers[20] = choices[20][1];
 units[20] = "29";
 comments[20] = "Id Pregunta: 338. ";


//  Id pregunta: 340 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  La red de comunicaci&oacute;n en c&iacute;rculo de una organizaci&oacute;n es:";
 choices[21]= new Array();
 choices[21][0] = "Comunicaci&oacute;n ascendente donde dos subordinados reportan a su jefe sobre un asunto";
 choices[21][1] = "Esquema descendente en jerarqu&iacute;a absoluta";
 choices[21][2] = "Cada sujeto se comunica con todos los restantes";
 choices[21][3] = "Se establece con dos interlocutores en cada caso, interactuando con los m&aacute;s cercanos a uno";
 answers[21] = choices[21][3];
 units[21] = "23";
 comments[21] = "Id Pregunta: 340. ";


//  Id pregunta: 356 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Las cuatro etapas del modelo inicial de Nolan son:";
 choices[22]= new Array();
 choices[22][0] = "Iniciaci&oacute;n, contagio, control y madurez";
 choices[22][1] = "Iniciaci&oacute;n, expansi&oacute;n, control y madurez";
 choices[22][2] = "Iniciaci&oacute;n, contagio, formalizaci&oacute;n y madurez";
 choices[22][3] = "Iniciaci&oacute;n, expansi&oacute;n, formalizaci&oacute;n y madurez";
 answers[22] = choices[22][3];
 units[22] = "22";
 comments[22] = "Id Pregunta: 356. nolan";


//  Id pregunta: 370 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Los ficheros automatizados de los que sean titulares las Cortes Generales, el Defensor del Pueblo, el Tribunal de Cuentas, el Consejo General del Poder Judicial y el Tribunal Constitucional , seg&uacute;n la Ley de Protecci&oacute;n de Datos:";
 choices[23]= new Array();
 choices[23][0] = "Caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma";
 choices[23][1] = "Caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma, pero no les ser&aacute; de aplicaci&oacute;n el r&eacute;gimen de protecci&oacute;n de datos";
 choices[23][2] = "Se regir&aacute;n por sus disposiciones espec&iacute;ficas";
 choices[23][3] = "No les ser&aacute; de aplicaci&oacute;n lo dispuesto en los T&iacute;tulos VI y VII de la misma";
 answers[23] = choices[23][0];
 units[23] = "29";
 comments[23] = "Id Pregunta: 370. ";


//  Id pregunta: 442 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, son derechos de los interesados:";
 choices[24]= new Array();
 choices[24][0] = "El Derecho de Consulta al Registro General de Protecci&oacute;n de Datos";
 choices[24][1] = "Los derechos de acceso, rectificaci&oacute;n y cancelaci&oacute;n";
 choices[24][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[24][3] = "ninguna de las anteriores respuestas es correcta";
 answers[24] = choices[24][2];
 units[24] = "29";
 comments[24] = "Id Pregunta: 442. ";


//  Id pregunta: 474 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Uno de los principales impulsores del concepto de organizaci&oacute;n basada en la informaci&oacute;n ha sido:";
 choices[25]= new Array();
 choices[25][0] = "Elton Mayo";
 choices[25][1] = "Peter Drucker";
 choices[25][2] = "Lynda Applegate";
 choices[25][3] = "Pigrogine";
 answers[25] = choices[25][1];
 units[25] = "22";
 comments[25] = "Id Pregunta: 474. ";


//  Id pregunta: 542 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  WAI se refiere a:";
 choices[26]= new Array();
 choices[26][0] = "Accesibilidad de p&aacute;ginas web.";
 choices[26][1] = "Interfaces para redes de &aacute;rea local.";
 choices[26][2] = "Interfaces para redes metropolitanas.";
 choices[26][3] = "Interfaces de acceso Wi-Fi.";
 answers[26] = choices[26][0];
 units[26] = "39";
 comments[26] = "Id Pregunta: 542. ";


//  Id pregunta: 545 AÃ±o de creación de pregunta: 2004-01-01
 questions[27]= "28)  En referencia a los niveles permitidos para el grupo A, indique la respuesta FALSA:";
 choices[27]= new Array();
 choices[27][0] = "El grupo A abarca el rango de niveles del 20 al 30";
 choices[27][1] = "El grupo A abarca el rango de niveles del 26 al 30";
 choices[27][2] = "El nivel 30 corresponde a Subdirectores Generales y asimilados";
 choices[27][3] = "El nivel 26 corresponde a Jefes de Servicio y asimilados";
 answers[27] = choices[27][1];
 units[27] = "24";
 comments[27] = "Id Pregunta: 545. ";


//  Id pregunta: 546 AÃ±o de creación de pregunta: 2004-01-01
 questions[28]= "29)  Los tipos de dise&ntilde;o de las organizaciones m&aacute;s extendidos son los siguientes:";
 choices[28]= new Array();
 choices[28][0] = "Apuntado, plano, basado en la l&iacute;nea y de estructura mixta.";
 choices[28][1] = "Apuntado, plano, basado en la l&iacute;nea y con orientaci&oacute;n a staff.";
 choices[28][2] = "Apuntado, plano, jer&aacute;nquico y reticular";
 choices[28][3] = "Apuntado, plano, sectorial y con orientaci&oacute;n a staff.";
 answers[28] = choices[28][1];
 units[28] = "26";
 comments[28] = "Id Pregunta: 546. ";


//  Id pregunta: 552 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  El presupuesto de un proyecto inform&aacute;tico nunca se calcula en base a:";
 choices[29]= new Array();
 choices[29][0] = "Aproximaciones lineales de proyectos diferentes";
 choices[29][1] = "Proyectos similares previos abordados por la organizaci&oacute;n";
 choices[29][2] = "Consultas a empresas significativas del mercado";
 choices[29][3] = "Costes separados de inversi&oacute;n en m&aacute;quinas, licencias de software y meses/hombre";
 answers[29] = choices[29][0];
 units[29] = "28";
 comments[29] = "Id Pregunta: 552. MAP-B 2003";


//  Id pregunta: 563 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  La organizaciones dentro de las administraciones p&uacute;blicas necesitan directivos que";
 choices[30]= new Array();
 choices[30][0] = "Sean ante todo jefes que se sustenten en la legalidad estatutaria";
 choices[30][1] = "Sean l&iacute;deres que se sustenten en la legalidad estatutaria";
 choices[30][2] = "Lideres que permitan el desarrollo de la misi&oacute;n  y visi&oacute;n de la administraci&oacute;n";
 choices[30][3] = "Jefes que en periodo de cambio sean coherentes con el prop&oacute;sito de la organizaci&oacute;n";
 answers[30] = choices[30][2];
 units[30] = "22";
 comments[30] = "Id Pregunta: 563. ";


//  Id pregunta: 567 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  En el modelo de Anthony de pir&aacute;mide de niveles directivos, en el nivel estrat&eacute;gico. &iquest;Qu&eacute; grado de utilizaci&oacute;n debe tener la informaci&oacute;n interna de la organizaci&oacute;n?";
 choices[31]= new Array();
 choices[31][0] = "Alto. Este tipo de informaci&oacute;n ayudar&aacute; a planificar la estrategia a largo plazo";
 choices[31][1] = "Bajo. Este tipo de informaci&oacute;n deber&iacute;a ser procesado en el nivel medio de la pir&aacute;mide";
 choices[31][2] = "Muy alto. Esta informaci&oacute;n es imprescindible para planificar la estrategia a largo plazo";
 choices[31][3] = "Medio. En funci&oacute;n del tipo de organizaci&oacute;n";
 answers[31] = choices[31][1];
 units[31] = "22";
 comments[31] = "Id Pregunta: 567. ";


//  Id pregunta: 574 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Seg&uacute;n la Ley Org&aacute;nica Organizaci&oacute;n y  Funcionamiento de la Administraci&oacute;n General del Estado LOFAGE, las Comunicaciones se situar&aacute;n. ";
 choices[32]= new Array();
 choices[32][0] = "Dentro del Gabinete del Ministro junto al Gabiente de Presa";
 choices[32][1] = "Dentro de la Secretar&iacute;a General T&eacute;cnica";
 choices[32][2] = "La ley no dice nada al respecto";
 choices[32][3] = "Dentro de la Subsecretar&iacute;a";
 answers[32] = choices[32][2];
 units[32] = "24";
 comments[32] = "Id Pregunta: 574. ";


//  Id pregunta: 589 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de control de proyectos?";
 choices[33]= new Array();
 choices[33][0] = "Wrike.";
 choices[33][1] = "Microsoft Project.";
 choices[33][2] = "Openproj.";
 choices[33][3] = "Stradis.";
 answers[33] = choices[33][3];
 units[33] = "27";
 comments[33] = "Id Pregunta: 589. ";


//  Id pregunta: 602 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  &iquest;Las cesiones de datos personales entre Administraciones P&uacute;blicas, para el ejercicio de competencias distintas pueden realizarse?";
 choices[34]= new Array();
 choices[34][0] = "En todo caso";
 choices[34][1] = "Cuando lo habilite una norma con rango formal de Ley";
 choices[34][2] = "Basta una autorizaci&oacute;n en una norma reglamentaria";
 choices[34][3] = "Nunca";
 answers[34] = choices[34][1];
 units[34] = "29";
 comments[34] = "Id Pregunta: 602. ";


//  Id pregunta: 617 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Las medidas de seguridad necesarias para restaurar el servicio de forma r&aacute;pida, eficiente y con el menor costo y p&eacute;rdidas posibles se incluyen en:";
 choices[35]= new Array();
 choices[35][0] = "Plan de Recuperaci&oacute;n de Desastres";
 choices[35][1] = "Plan estrat&eacute;gico";
 choices[35][2] = "Plan de sistemas";
 choices[35][3] = "Plan de seguridad fisica";
 answers[35] = choices[35][0];
 units[35] = "32";
 comments[35] = "Id Pregunta: 617. ";


//  Id pregunta: 625 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  En el proceso de selecci&oacute;n de alternativas en bienes y servicios de Tecnolog&iacute;as de la Informaci&oacute;n, &iquest;cu&aacute;l de los siguientes m&eacute;todos es el m&aacute;s recomendable a efectos de que no se vean favorecidas en exceso las alternativas que son median&iacute;as? :";
 choices[36]= new Array();
 choices[36][0] = "El m&eacute;todo de la Ponderaci&oacute;n Lineal.";
 choices[36][1] = "Los m&eacute;todos de Relaciones de Superaci&oacute;n.";
 choices[36][2] = "El m&eacute;todo Lexicogr&aacute;fico.";
 choices[36][3] = "El m&eacute;todo de las Utilidades Relativas.";
 answers[36] = choices[36][1];
 units[36] = "34";
 comments[36] = "Id Pregunta: 625. ";


//  Id pregunta: 633 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Cu&aacute;l de las siguientes caracter&iacute;sticas no se considera fundamental que garantice un sistema DRM (Digital Rights Management):";
 choices[37]= new Array();
 choices[37][0] = "Limitar el n&uacute;mero de lecturas de un archivo.";
 choices[37][1] = "Proteger el contenido para evitar la lectura por terceros.";
 choices[37][2] = "Evitar que el archivo sea modificado.";
 choices[37][3] = "Garantizar que s&oacute;lo el destinatario sea capaz de leer el archivo.";
 answers[37] = choices[37][0];
 units[37] = "37";
 comments[37] = "Id Pregunta: 633. ";


//  Id pregunta: 637 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Respecto a los m&eacute;todos del Payback, VAN y TIR, la respuesta correcta es:";
 choices[38]= new Array();
 choices[38][0] = "El m&eacute;todo del Payback sirve para determinar la rentabilidad exigida a una inversi&oacute;n.";
 choices[38][1] = "Los m&eacute;todos del VAN y el TIR siempre conducen a resultados coincidentes.";
 choices[38][2] = "Los m&eacute;todos del Payback y el VAN son similares (comparan los flujos de caja con la inversi&oacute;n inicial), pero el Payback no tiene en cuenta el cambio del valor del dinero con el tiempo y el VAN s&iacute;.";
 choices[38][3] = "El criterio de rentabilidad del TIR es: rentabilidad exigida &gt; TIR =&gt; inversi&oacute;n rentable.";
 answers[38] = choices[38][2];
 units[38] = "38";
 comments[38] = "Id Pregunta: 637. ";


//  Id pregunta: 4238 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  La Agencia de Protecci&oacute;n de Datos se adscribe al Ministerio de";
 choices[39]= new Array();
 choices[39][0] = " Administraciones P&uacute;blicas";
 choices[39][1] = " Industria, Turismo y Comercio";
 choices[39][2] = " Justicia";
 choices[39][3] = "Ninguna es correcta";
 answers[39] = choices[39][3];
 units[39] = "29";
 comments[39] = "Id Pregunta: 4238. ";


//  Id pregunta: 4255 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Cu&aacute;l de los siguientes planes de fomento de la Sociedad de la Informaci&oacute;n ha sido lanzado por el Ministerio de Industria Turismo y Comercio espa&ntilde;ol:";
 choices[40]= new Array();
 choices[40][0] = "El plan Avanza ";
 choices[40][1] = "La estrategia i2010";
 choices[40][2] = "El plan Conecta ";
 choices[40][3] = "El plan eEurope 2005";
 answers[40] = choices[40][0];
 units[40] = "30";
 comments[40] = "Id Pregunta: 4255. El plan Conecta fue lanzado por el antiguo MAP y los otros son europeos";


//  Id pregunta: 4271 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  Indique cu&aacute;l de los siguientes est&aacute;ndares se aplica a la seguridad de los sistemas inform&aacute;ticos";
 choices[41]= new Array();
 choices[41][0] = "ISO 12207";
 choices[41][1] = "ISO 2167";
 choices[41][2] = "ISO 27002";
 choices[41][3] = "ISO 9004";
 answers[41] = choices[41][2];
 units[41] = "33";
 comments[41] = "Id Pregunta: 4271. ";


//  Id pregunta: 4319 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  Un sistema de supresi&oacute;n de incendios de &ldquo;tuber&iacute;a seca&rdquo; (dry-pipe) es un sistema que usa:";
 choices[42]= new Array();
 choices[42][0] = "Agua, pero en el cual el agua no entra a las tuber&iacute;as hasta que se haya detectado un incendio.";
 choices[42][1] = "Agua, pero en el cual las tuber&iacute;as est&aacute;n revestidas de selladores especiales a prueba de agua.";
 choices[42][2] = "Di&oacute;xido de carbono en lugar de agua.";
 choices[42][3] = "Halon en lugar de agua.";
 answers[42] = choices[42][0];
 units[42] = "32";
 comments[42] = "Id Pregunta: 4319. ";


//  Id pregunta: 4501 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Trabajando con un diagrama PERT vemos que se retrasa una etapa no perteneciente al camino critico. Este aumento de duraci&oacute;n, &iquest;retrasar&aacute; la fecha del final del proyecto?";
 choices[43]= new Array();
 choices[43][0] = "Siempre, dado que todo retraso en una etapa afecta a la duraci&oacute;n del proyecto.";
 choices[43][1] = "Nunca, al no pertenecer la etapa al camino cr&iacute;tico.";
 choices[43][2] = "S&oacute;lo si la nueva duraci&oacute;n de la etapa es superior a la duraci&oacute;n de cualquiera de las otras etapas.";
 choices[43][3] = "S&oacute;lo si la nueva duraci&oacute;n convierte en critico el camino al que pertenece la etapa.";
 answers[43] = choices[43][3];
 units[43] = "27";
 comments[43] = "Id Pregunta: 4501. Castilla la Mancha 06";


//  Id pregunta: 4505 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;a que se denomina riesgo en MAGERIT version 2?";
 choices[44]= new Array();
 choices[44][0] = "A la medida del da&ntilde;o probable sobre un sistema";
 choices[44][1] = "Al suceso que puede afectar a un activo y causarle un da&ntilde;o";
 choices[44][2] = "A la medida del da&ntilde;o sobre un activo derivado de la materializaci&oacute;n de una amenaza";
 choices[44][3] = "Al recurso del sistema de informaci&oacute;n expuesto a un ataque";
 answers[44] = choices[44][0];
 units[44] = "33";
 comments[44] = "Id Pregunta: 4505. ";


//  Id pregunta: 4605 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  El modelo COCOMO (COnstructive COst Model):";
 choices[45]= new Array();
 choices[45][0] = "es un m&eacute;todo de medici&oacute;n de Ia funcionalidad de una aplicaci&oacute;n inform&aacute;tica.";
 choices[45][1] = "es un m&eacute;todo de evaluaci&oacute;n del interface de usuario.";
 choices[45][2] = "es un m&eacute;todo basado en estimaciones del numero de l&iacute;neas de c&oacute;digo.";
 choices[45][3] = "es un m&eacute;todo de planificaci&oacute;n del coste y esfuerzo.";
 answers[45] = choices[45][2];
 units[45] = "89";
 comments[45] = "Id Pregunta: 4605. ";


//  Id pregunta: 4700 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  IESG (Internet Engineering Steering Group) se encarga de:";
 choices[46]= new Array();
 choices[46][0] = "Coordinaci&oacute;n entre organizaciones.";
 choices[46][1] = "Asignaci&oacute;n de recursos.";
 choices[46][2] = "La supervisi&oacute;n y aprobaci&oacute;n de normas";
 choices[46][3] = "Especificaci&oacute;n de est&aacute;ndares";
 answers[46] = choices[46][0];
 units[46] = "42";
 comments[46] = "Id Pregunta: 4700. Examen 2006 JCYL";


//  Id pregunta: 4725 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  &iquest;Cu&aacute;ndo analizar&iacute;amos los recursos de la organizaci&oacute;n?";
 choices[47]= new Array();
 choices[47][0] = "Cuando ejecutemos un desarrollo, para determinar el costo.";
 choices[47][1] = "Al valorar los recursos que se han consumido.";
 choices[47][2] = "Para ver la forma de materializar un desarrollo.";
 choices[47][3] = "Cuando queramos hacer una programaci&oacute;n estrat&eacute;gica.";
 answers[47] = choices[47][3];
 units[47] = "27";
 comments[47] = "Id Pregunta: 4725. Examen 2006 JCYL";


//  Id pregunta: 4996 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  El Consejo Superior de Administraci&oacute;n Electr&oacute;nica es un &oacute;rgano colegiado adscrito al Ministerio de:";
 choices[48]= new Array();
 choices[48][0] = "Industria, Energ&iacute;a y Turismo";
 choices[48][1] = "Asuntos Exteriores";
 choices[48][2] = "Hacienda y Administraciones P&uacute;blicas";
 choices[48][3] = "Interior";
 answers[48] = choices[48][2];
 units[48] = "30";
 comments[48] = "Id Pregunta: 4996. Examen TIC A 2007";


//  Id pregunta: 5175 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Respecto a los organismos y procesos de normalizaci&oacute;n podemos afirmar:";
 choices[49]= new Array();
 choices[49][0] = "La adopci&oacute;n de las normas internacionales elaboradas en ISO e EIC es obligatoria para los pa&iacute;ses miembros de la UE.";
 choices[49][1] = "Los organismos europeos de normalizaci&oacute;n obligan a sus miembros a adoptar las normas europeas que ellos elaboren.";
 choices[49][2] = "AENOR es una entidad p&uacute;blica empresarial dependiente del Ministerio de Industria.";
 choices[49][3] = "Las normas publicadas por AENOR se conocen como normas IEC.";
 answers[49] = choices[49][1];
 units[49] = "42";
 comments[49] = "Id Pregunta: 5175. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5267 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  El marco regulador del BOE en formato electr&oacute;nico esta recogido en la siguiente norma";
 choices[50]= new Array();
 choices[50][0] = "RD 181/2008";
 choices[50][1] = "RD 1495/2007";
 choices[50][2] = "a y b";
 choices[50][3] = "Ninguna de las anteriores";
 answers[50] = choices[50][0];
 units[50] = "30";
 comments[50] = "Id Pregunta: 5267. ";


//  Id pregunta: 5546 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  La ley 11/2007 que regula el acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos:";
 choices[51]= new Array();
 choices[51][0] = "Establece que la utilizaci&oacute;n de las tecnolog&iacute;as de la informaci&oacute;n se har&aacute; de forma que no conlleve la existencia de restricciones o discriminaciones para los ciudadanos que se relacionen con las Administraciones P&uacute;blicas por medios no electr&oacute;nicos.";
 choices[51][1] = "Permite la obtenci&oacute;n de copias electr&oacute;nicas de los documentos electr&oacute;nicos de cualquier expediente electr&oacute;nico, sin restricci&oacute;n alguna.";
 choices[51][2] = "Crea la figura del Defensor del Usuario de la Administraci&oacute;n Electr&oacute;nica, encargado de inspeccionar la actuaci&oacute;n v&iacute;a medios electr&oacute;nicos, de las Administraciones P&uacute;blicas.";
 choices[51][3] = "La publicaci&oacute;n de actos y comunicaciones, que deban publicarse en tabl&oacute;n de anuncios &oacute; edictos, se realizar&aacute; &uacute;nicamente en la sede electr&oacute;nica correspondiente.";
 answers[51] = choices[51][0];
 units[51] = "43";
 comments[51] = "Id Pregunta: 5546. NULL";


//  Id pregunta: 5549 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  La Ley 11/2007, deroga:";
 choices[52]= new Array();
 choices[52][0] = "Los reglamentos de desarrollo de los art&iacute;culos relativos a Registros de las Administraciones P&uacute;blicas, Notificaciones Administrativas e Incorporaci&oacute;n de medios t&eacute;cnicos en la actividad administrativa (art. 38, 59, 45 respectivamente), de la Ley del R&eacute;gimen Jur&iacute;dico y del Procedimiento Administrativo Com&uacute;n (Ley 30/1992).";
 choices[52][1] = "Los art&iacute;culos 38, 59 y 45 de la Ley 30/1992 y su disposici&oacute;n adicional decimooctava.";
 choices[52][2] = "El Real Decreto 209/2003 y la Orden PRE/1551/2003.";
 choices[52][3] = "Modifica los art&iacute;culos 38, 45 y 59 de la Ley 30/1992 y deroga su disposici&oacute;n adicional 18&ordf; as&iacute; como todo aquello que contradiga la Ley 11/2007 en los Reglamentos de desarrollo de dichos art&iacute;culos.";
 answers[52] = choices[52][3];
 units[52] = "43";
 comments[52] = "Id Pregunta: 5549. NULL";


//  Id pregunta: 5660 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Seg&uacute;n el RD 1720/2007, &iquest;en que casos se necesita la autorizaci&oacute;n del responsable del fichero para la ejecucion de los procedimientos de recuperaci&oacute;n de los datos?";
 choices[53]= new Array();
 choices[53][0] = "nivel b&aacute;sico";
 choices[53][1] = "nivel medio";
 choices[53][2] = "nivel alto";
 choices[53][3] = "En ningun caso";
 answers[53] = choices[53][1];
 units[53] = "29";
 comments[53] = "Id Pregunta: 5660. ";


//  Id pregunta: 5841 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  Indique la respuesta FALSA en relaci&oacute;n con el perfil de contratante regulado en el RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico:";
 choices[54]= new Array();
 choices[54][0] = "Los &oacute;rganos de contrataci&oacute;n difundir&aacute;n, a trav&eacute;s de Internet, su perfil de contratante";
 choices[54][1] = "La forma de acceso al perfil de contratante deber&aacute; especificarse en la Plataforma de Contrataci&oacute;n del Sector P&uacute;blico";
 choices[54][2] = "La forma de acceso al perfil de contratante deber&aacute; especificarse en los tablones de anuncios del Ministerio correspondiente";
 choices[54][3] = "Deber&aacute; publicarse en el perfil de contratante la adjudicaci&oacute;n provisional de los contratos";
 answers[54] = choices[54][2];
 units[54] = "41";
 comments[54] = "Id Pregunta: 5841. MAP 2008 A1";


//  Id pregunta: 5886 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  El m&eacute;todo de Saaty &oacute; AHP:";
 choices[55]= new Array();
 choices[55][0] = "Es relativo a accesibilidad web";
 choices[55][1] = "Es relativo a la decisi&oacute;n multicriterio";
 choices[55][2] = "Es relativo a la comunicaci&oacute;n en la organizaci&oacute;n";
 choices[55][3] = "Se refiere al env&iacute;o de datos a un centro de respaldo";
 answers[55] = choices[55][1];
 units[55] = "34";
 comments[55] = "Id Pregunta: 5886. MAP 2008 A1";


//  Id pregunta: 5965 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;Qu&eacute; norma espa&ntilde;ola es la vigente de &quot;Tecnolog&iacute;as de la Informaci&oacute;n. T&eacute;cnicas de seguridad. Sistema de Gesti&oacute;n de la Seguridad de la Informaci&oacute;n (SGSI). Requisitos&quot;?";
 choices[56]= new Array();
 choices[56][0] = "UNE 71502:2004";
 choices[56][1] = "UNE-ISO/IEC 27001:2007";
 choices[56][2] = "UNE 17799:2000";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = choices[56][1];
 units[56] = "42";
 comments[56] = "Id Pregunta: 5965. Castilla La Mancha 2009";


//  Id pregunta: 6057 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes utilidades NO se corresponde con software de c&oacute;digo abierto?";
 choices[57]= new Array();
 choices[57][0] = "Thunderbird.";
 choices[57][1] = "Adobe Reader.";
 choices[57][2] = "OpenOffice.";
 choices[57][3] = "Firefox.";
 answers[57] = choices[57][1];
 units[57] = "62";
 comments[57] = "Id Pregunta: 6057. TIC A 2009";


//  Id pregunta: 6264 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Cual de los siguientes enunciados no pertenece al c&oacute;digo &eacute;tico definido para los perfiles de auditor por la ISACA.";
 choices[58]= new Array();
 choices[58][0] = "Apoyar la implantaci&oacute;n y estimular el cumplimiento de est&aacute;ndares, procedimientos y controles apropiados en los sistemas de informaci&oacute;n.";
 choices[58][1] = "Mantener la protecci&oacute;n de la intimidad y la confidencialidad de la informaci&oacute;n a la que se tenga  acceso, dentro del marco de la Directiva Europea en materia de protecci&oacute;n de datos de car&aacute;cter personal (transpuesta en Espa&ntilde;a a trav&eacute;s de la Ley Org&aacute;nica 15/1999).";
 choices[58][2] = "Apoyar la formaci&oacute;n profesional de las partes leg&iacute;timamente interesadas, mejorando su comprensi&oacute;n de la seguridad y control de los sistemas de informaci&oacute;n.";
 choices[58][3] = "Informar a las partes apropiadas de los resultados del trabajo realizado, revelando todos los hechos significativos que obren en su conocimiento.";
 answers[58] = choices[58][1];
 units[58] = "31";
 comments[58] = "Id Pregunta: 6264. ";


//  Id pregunta: 6269 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  A la m&aacute;xima cantidad de datos que se pueden perder en caso de desastre se les denomina:";
 choices[59]= new Array();
 choices[59][0] = "SDO";
 choices[59][1] = "RPO";
 choices[59][2] = "RTO";
 choices[59][3] = "MTBF";
 answers[59] = choices[59][1];
 units[59] = "32";
 comments[59] = "Id Pregunta: 6269. ";


//  Id pregunta: 6368 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes sistemas NO tiene la consideraci&oacute;n de entorno inseguro, de acuerdo con el Esquema Nacional de Seguridad?";
 choices[60]= new Array();
 choices[60][0] = "Equipos port&aacute;tiles";
 choices[60][1] = "Comunicaciones sobre redes inal&aacute;mbricas, incluso cuando la comunicaci&oacute;n se realice con cifrado fuerte";
 choices[60][2] = "Asistentes personales (PDA)";
 choices[60][3] = "Dispositivos perif&eacute;ricos";
 answers[60] = choices[60][1];
 units[60] = "43";
 comments[60] = "Id Pregunta: 6368. Art&iacute;culo 21 ENS";


//  Id pregunta: 6398 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  La ley 59/2003 de firma electr&oacute;nica, regula:";
 choices[61]= new Array();
 choices[61][0] = "La firma electr&oacute;nica";
 choices[61][1] = "La prestaci&oacute;n de servicios de certificaci&oacute;n";
 choices[61][2] = "La eficacia de la firma electr&oacute;nica";
 choices[61][3] = "Todas las anteriores son correctas.";
 answers[61] = choices[61][3];
 units[61] = "30";
 comments[61] = "Id Pregunta: 6398. Ley 59/2003, art&iacute;culo 1";


//  Id pregunta: 6420 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Qu&eacute; es TAW?";
 choices[62]= new Array();
 choices[62][0] = "Es una familia de herramienta para el an&aacute;lisis de la accesibilidad  de sitios web.";
 choices[62][1] = "Es un Gestor de Contenidos";
 choices[62][2] = "Es un tipo de licencia de software libre";
 choices[62][3] = "Es una herramienta de workgroup";
 answers[62] = choices[62][0];
 units[62] = "39";
 comments[62] = "Id Pregunta: 6420. NULL";


//  Id pregunta: 6494 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, el censo promocional es una fuente de acceso p&uacute;blico s&oacute;lo:";
 choices[63]= new Array();
 choices[63][0] = "Durante los cinco &uacute;ltimos a&ntilde;os de vigencia";
 choices[63][1] = "Durante el &uacute;ltimo a&ntilde;o de vigencia";
 choices[63][2] = "Nunca es fuente de acceso p&uacute;blico";
 choices[63][3] = "Siempre que no aparezca el DNI";
 answers[63] = choices[63][1];
 units[63] = "29";
 comments[63] = "Id Pregunta: 6494. Castilla La Mancha 2009";


//  Id pregunta: 8424 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes grupos de medidas de seguridad no se define en el anexo II del Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[64]= new Array();
 choices[64][0] = "Medidas de protecci&oacute;n";
 choices[64][1] = "Marco organizativo";
 choices[64][2] = "Marco operacional";
 choices[64][3] = "Marco tecnol&oacute;gico";
 answers[64] = choices[64][3];
 units[64] = "43";
 comments[64] = "Id Pregunta: 8424. NULL";


//  Id pregunta: 8743 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes es una funci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos, seg&uacute;n lo establecido en la LOPD?";
 choices[65]= new Array();
 choices[65][0] = "Redactar una memoria anual y remitirla al Ministerio del Interior";
 choices[65][1] = "Proporcionar aplicaciones inform&aacute;ticas para la gesti&oacute;n de datos de car&aacute;cter personal.";
 choices[65][2] = "Investigar posibles incumplimientos de la LOPD e informar a la autoridad con potestad sancionadora, seg&uacute;n el caso";
 choices[65][3] = "Redactar una memoria anual y remitirla al Ministerio de Justicia";
 answers[65] = choices[65][3];
 units[65] = "29";
 comments[65] = "Id Pregunta: 8743. Examen TIC A2 2010 interna";


//  Id pregunta: 8781 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  El Registro General de Protecci&oacute;n de Datos es un &Oacute;rgano integrado:";
 choices[66]= new Array();
 choices[66][0] = "En la Agencia de Protecci&oacute;n de Datos.";
 choices[66][1] = "En el Registro Civil.";
 choices[66][2] = "En el Registro Mercantil.";
 choices[66][3] = "En el Registro General del Ministerio de Justicia.";
 answers[66] = choices[66][0];
 units[66] = "29";
 comments[66] = "Id Pregunta: 8781. Examen UPM A2 2011";


//  Id pregunta: 9287 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  &iquest;Qu&eacute; es SOROLLA?";
 choices[67]= new Array();
 choices[67][0] = "Un sistema inform&aacute;tico de apoyo a la gesti&oacute;n econ&oacute;mica de los Centros Gestores del Gasto, cuya titularidad corresponde a la IGAE.";
 choices[67][1] = "Una aplicaci&oacute;n desarrollada por la Direcci&oacute;n General de Modernizaci&oacute;n e Impulso de la Administraci&oacute;n Electr&oacute;nica para facilitar la contrataci&oacute;n electr&oacute;nica. ";
 choices[67][2] = "El SW de subastas electr&oacute;nicas m&aacute;s usado en la Administraci&oacute;n espa&ntilde;ola. ";
 choices[67][3] = "Ninguna de las anteriores.";
 answers[67] = choices[67][0];
 units[67] = "41";
 comments[67] = "Id Pregunta: 9287. ";


//  Id pregunta: 9314 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  Los procedimientos se detallan t&eacute;cnicamente a trav&eacute;s de";
 choices[68]= new Array();
 choices[68][0] = "Normativas";
 choices[68][1] = "Pol&iacute;ticas";
 choices[68][2] = "Indicaciones";
 choices[68][3] = "Ninguna de las anteriores";
 answers[68] = choices[68][3];
 units[68] = "31";
 comments[68] = "Id Pregunta: 9314. ";


//  Id pregunta: 9319 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  &iquest;Qu&eacute; requisitos son necesarios para obtener y mantener una certificaci&oacute;n CISA?";
 choices[69]= new Array();
 choices[69][0] = "Aprobar el examen sobre las materias establecidas por la ISACA";
 choices[69][1] = "La a) y adem&aacute;s acreditar una experiencia profesional adecuada";
 choices[69][2] = "La b) y adem&aacute;s aceptar un c&oacute;digo de &eacute;tica profesional";
 choices[69][3] = "La c) pero acreditando peri&oacute;dicamente una formaci&oacute;n continua";
 answers[69] = choices[69][3];
 units[69] = "31";
 comments[69] = "Id Pregunta: 9319. ";


//  Id pregunta: 9587 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  &iquest;A cu&aacute;l de los siguientes &aacute;mbitos establecidos en el art&iacute;culo 2 de la Ley 11/2007 NO aplica el Esquema Nacional de Seguridad (ENS)?:";
 choices[70]= new Array();
 choices[70][0] = "A la Administraci&oacute;n General del Estado, Administraciones de las Comunidades Aut&oacute;nomas y las Entidades que integran la Administraci&oacute;n Local, as&iacute; como las entidades de derecho p&uacute;blico vinculadas o dependientes de las mismas.";
 choices[70][1] = "A los ciudadanos en sus relaciones con las Administraciones P&uacute;blicas.";
 choices[70][2] = "A las relaciones entre las distintas Administraciones P&uacute;blicas.";
 choices[70][3] = "Sistemas que tratan informaci&oacute;n clasificada regulada por Ley 9/1968 de 5 de abril. ";
 answers[70] = choices[70][3];
 units[70] = "43";
 comments[70] = "Id Pregunta: 9587. Examen TIC A2 2011";


//  Id pregunta: 9762 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  Un contradto de regulaci&oacute;n armonizada ser&aacute; nulo si:";
 choices[71]= new Array();
 choices[71][0] = "No se publica en DOUE";
 choices[71][1] = "Si se incumplen las normas de adjudicaci&oacute;n del acuerdo marco.";
 choices[71][2] = "Si hay sistema din&aacute;mino de contrataci&oacute;n y se incumplen las normas de adjudicaci&oacute;n.";
 choices[71][3] = "Todas las anteriores.";
 answers[71] = choices[71][3];
 units[71] = "41";
 comments[71] = "Id Pregunta: 9762. Art. 37. RD Legislativo 3/2011.";


//  Id pregunta: 9898 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  Tras la realizaci&oacute;n de un an&aacute;lisis de riesgos de acuerdo con MAGERIT 3.0, el informe que detalla los activos, sus dependencias, las dimensiones en que son valiosos y la estimaci&oacute;n de dicho valor, se denomina";
 choices[72]= new Array();
 choices[72][0] = "modelo de valor.";
 choices[72][1] = "declaraci&oacute;n de aplicabilidad.";
 choices[72][2] = "mapa de riesgos.";
 choices[72][3] = "estado de riesgo.";
 answers[72] = choices[72][0];
 units[72] = "31,32,33";
 comments[72] = "Id Pregunta: 9898. TIC A1, Examen 2013";


//  Id pregunta: 10266 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  Respecto del tratamiento de datos de car&aacute;cter personal, el censo promocional";
 choices[73]= new Array();
 choices[73][0] = "Tendr&aacute; vigencia indefinida";
 choices[73][1] = "Tendr&aacute; vigencia de un a&ntilde;o, actualiz&aacute;ndose en ese plazo para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 choices[73][2] = "Tendr&aacute; vigencia trimestral, actualiz&aacute;ndose en ese plazo para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 choices[73][3] = "Tendr&aacute; vigencia de un a&ntilde;o, actualiz&aacute;ndose trimestralmente para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 answers[73] = choices[73][3];
 units[73] = "29";
 comments[73] = "Id Pregunta: 10266. Art&iacute;culo 31.2 y 31.3 de la Ley 15/1999";


//  Id pregunta: 10346 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  &iquest;Qu&eacute; nombre recibe la tecnolog&iacute;a de Gesti&oacute;n de derechos digitales creada por la compa&ntilde;&iacute;a Apple?";
 choices[74]= new Array();
 choices[74][0] = "FairPlay";
 choices[74][1] = "Apple Verisign";
 choices[74][2] = "Apple DRM";
 choices[74][3] = "Apple Store DRM";
 answers[74] = choices[74][0];
 units[74] = "37";
 comments[74] = "Id Pregunta: 10346. Se usa desde la tienda online iTunes Store para ser reproducido en iPod e iTunes";


//  Id pregunta: 10352 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de evaluaci&oacute;n autom&aacute;tica de la accesibilidad de p&aacute;ginas web?";
 choices[75]= new Array();
 choices[75][0] = "ZEUS";
 choices[75][1] = "HERA";
 choices[75][2] = "BOBBY";
 choices[75][3] = "TAW";
 answers[75] = choices[75][0];
 units[75] = "39";
 comments[75] = "Id Pregunta: 10352. Otras herramientas pueden ser eXaminator, Wave o EvalAccess";


//  Id pregunta: 10356 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;C&uacute;al de los siguientes no es un principio del programa ISA (soluciones de interoperabilidad para las administraciones p&uacute;blicas europeas)?";
 choices[76]= new Array();
 choices[76][0] = "Neutralidad con respecto a la tecnolog&iacute;a y adaptabilidad";
 choices[76][1] = "Reutilizaci&oacute;n";
 choices[76][2] = "Privacidad y protecci&oacute;n de los datos personales";
 choices[76][3] = "Fomento del uso de software libre y sistemas abiertos";
 answers[76] = choices[76][3];
 units[76] = "40";
 comments[76] = "Id Pregunta: 10356. El programa ISA se basa en los siguientes principios: neutralidad con respecto a la tecnolog&iacute;a y adaptabilidad, apertura, reutilizaci&oacute;n, privacidad y protecci&oacute;n de los datos personales, seguridad";


//  Id pregunta: 10364 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  En relaci&oacute;n con IEC (International Electrotechnical Commission), se&ntilde;ale la respuesta incorrecta:";
 choices[77]= new Array();
 choices[77][0] = "El equivalente europeo es CENELEC (Comit&eacute; Europeo de Normalizaci&oacute;n Electrot&eacute;cnica)";
 choices[77][1] = "La representaci&oacute;n espa&ntilde;ola como miembro de pleno derecho recae en AENOR";
 choices[77][2] = "Elabora normas a nivel t&eacute;cnico en materia el&eacute;ctrica y electrot&eacute;cnica";
 choices[77][3] = "Las normas elaboradas por el CENELEC se denominan CEN";
 answers[77] = choices[77][3];
 units[77] = "42";
 comments[77] = "Id Pregunta: 10364. Las normas elaboradas por el CENELEC se denominan EN (Norma Europea)";


//  Id pregunta: 10435 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  &iquest;Existe un Estatuto espec&iacute;fico del personal directivo de la Administraci&oacute;n General del Estado? ";
 choices[78]= new Array();
 choices[78][0] = "S&iacute;. El Estatuto B&aacute;sico del Empleado P&uacute;blico.";
 choices[78][1] = "S&iacute;. La Ley de Altos Cargos de la Administraci&oacute;n General del Estado.";
 choices[78][2] = "No. A&uacute;n no se ha desarrollado la previsi&oacute;n del Estatuto B&aacute;sico del Empleado P&uacute;blico a este respecto.";
 choices[78][3] = "No existe, porque no est&aacute; normativamente previsto.";
 answers[78] = choices[78][2];
 units[78] = "24";
 comments[78] = "Id Pregunta: 10435. Examen TIC A1 2013";


//  Id pregunta: 10543 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  El plan de telecomunicaciones y redes ultrarr&aacute;pidas, dise&ntilde;ado para dar cumplimiento a los objetivos de banda ancha fijados por la Agenda Digital para Europa, fija como objetivos para el 2015:";
 choices[79]= new Array();
 choices[79][0] = "50% de la poblaci&oacute;n con cobertura de m&aacute;s de 100 Mbps.";
 choices[79][1] = "25% de hogares conectados a redes NGA";
 choices[79][2] = "75% de la poblaci&oacute;n con cobertura 4G";
 choices[79][3] = "Todas las anteriores ";
 answers[79] = choices[79][3];
 units[79] = "30";
 comments[79] = "Id Pregunta: 10543. http://www.agendadigital.gob.es/planes-actuaciones/Paginas/plan-telecomunicaciones-redes.aspx";


//  Id pregunta: 10592 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  La LOPD:";
 choices[80]= new Array();
 choices[80][0] = "Desarrolla el art&iacute;culo 17.4 de la Constituci&oacute;n Espa&ntilde;ola";
 choices[80][1] = "A y C son correctas";
 choices[80][2] = "Es la transposici&oacute;n de la Directiva 95/46/CE";
 choices[80][3] = "A y C son incorrectas.";
 answers[80] = choices[80][2];
 units[80] = "29";
 comments[80] = "Id Pregunta: 10592. ";


//  Id pregunta: 10593 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  Seg&uacute;n la LOPD, indique la opci&oacute;n err&oacute;nea:";
 choices[81]= new Array();
 choices[81][0] = "No es necesario informar de la posibilidad de ejercitar los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n, si esta posibilidad se deduce de la naturaleza de los datos.";
 choices[81][1] = "Si los datos de car&aacute;cter personal no han sido recabados del interesado, &eacute;ste debe ser informado durante los tres meses siguientes al registro.";
 choices[81][2] = "No ser&aacute; necesario informar al interesado si esto exige, a criterio del responsable del tratamiento, esfuerzos desproporcionados.";
 choices[81][3] = "Por regla general, los interesados deben ser informados de la identidad del responsable del tratamiento.";
 answers[81] = choices[81][2];
 units[81] = "29";
 comments[81] = "Id Pregunta: 10593. ";


//  Id pregunta: 10600 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  La creaci&oacute;n de una Estructura de Desglose del Trabajo (EDT) forma parte de:";
 choices[82]= new Array();
 choices[82][0] = "La gesti&oacute;n de tiempo el proyecto.";
 choices[82][1] = "La denominaci&oacute;n de &ldquo;sede electr&oacute;nica&rdquo; y el n&uacute;mero de identificaci&oacute;n fiscal de la autoridad de certificaci&oacute;n.";
 choices[82][2] = "La gesti&oacute;n de riesgos del proyecto.";
 choices[82][3] = "La gesti&oacute;n de costes del proyecto.";
 answers[82] = choices[82][1];
 units[82] = "28";
 comments[82] = "Id Pregunta: 10600. ";


//  Id pregunta: 10676 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se compone de:";
 choices[83]= new Array();
 choices[83][0] = "T&iacute;tulo preliminar, 6 T&iacute;tulos y 123 Art&iacute;culos.";
 choices[83][1] = "T&iacute;tulo preliminar, 6 T&iacute;tulos y 133 Art&iacute;culos.";
 choices[83][2] = "T&iacute;tulo preliminar, 5 T&iacute;tulos y 123 Art&iacute;culos.";
 choices[83][3] = "T&iacute;tulo preliminar, 5 T&iacute;tulos y 133 Art&iacute;culos.";
 answers[83] = choices[83][1];
 units[83] = "30";
 comments[83] = "Id Pregunta: 10676. ";


//  Id pregunta: 10679 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Seg&uacute;n la Ley 39/2015 se puede establecer la obligatoriedad a las personas f&iacute;sicas de relacionarse con la Administraci&oacute;n por medios electr&oacute;nicos";
 choices[84]= new Array();
 choices[84][0] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con personas f&iacute;sicas en todos los casos.";
 choices[84][1] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con un colectivo de personas f&iacute;sicas, si previamente se establece de forma reglamentaria para dicho colectivo.";
 choices[84][2] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con un colectivo personas f&iacute;sicas si la administraci&oacute;n justifica la conveniencia y medios t&eacute;cnicos para dicho colectivo.";
 choices[84][3] = "La Ley no establece la obligatoriedad de relaci&oacute;n para las personas f&iacute;sicas en ning&uacute;n caso.";
 answers[84] = choices[84][1];
 units[84] = "30";
 comments[84] = "Id Pregunta: 10679. ";


//  Id pregunta: 10714 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;Qu&eacute; estructura utiliza SICRES 3?";
 choices[85]= new Array();
 choices[85][0] = "HTML";
 choices[85][1] = "PDF";
 choices[85][2] = "XML";
 choices[85][3] = "Ninguna de las anteriores";
 answers[85] = choices[85][2];
 units[85] = "43";
 comments[85] = "Id Pregunta: 10714. ";


//  Id pregunta: 10762 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Seg&uacute;n las definiciones establecidas en las gu&iacute;as CCN-STIC &iquest;Qu&eacute; es la &quot;Manifestaci&oacute;n  escrita  de  los  &oacute;rganos  o  entidades  de derecho  p&uacute;blico,  firmada  por  su responsable, mediante la que se da publicidad que los sistemas a que  se refieren cumplen con  las  exigencias  del  Esquema  Nacional  de  Seguridad  aprobado  por  Real  Decreto 3/2010, de 8 de enero&quot;?";
 choices[86]= new Array();
 choices[86][0] = "Informe de auditor&iacute;a";
 choices[86][1] = "Declaraci&oacute;n de conformidad";
 choices[86][2] = "Aceptaci&oacute;n del esquema de seguridad";
 choices[86][3] = "Formalizaci&oacute;n de la conformidad";
 answers[86] = choices[86][1];
 units[86] = "43";
 comments[86] = "Id Pregunta: 10762. ";


//  Id pregunta: 10769 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes no es un principio de la Estrategia TIC del Gobierno Espa&ntilde;ol?";
 choices[87]= new Array();
 choices[87][0] = "Orientaci&oacute;n al usuario del servicio";
 choices[87][1] = "Unidad y visi&oacute;n integral";
 choices[87][2] = "Colaboraci&oacute;n y alianzas";
 choices[87][3] = "Eficiencia";
 answers[87] = choices[87][3];
 units[87] = "24";
 comments[87] = "Id Pregunta: 10769. ";


//  Id pregunta: 10923 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Respecto al Registro Electr&oacute;nico Com&uacute;n (REC), se&ntilde;ale la respuesta correcta:";
 choices[88]= new Array();
 choices[88][0] = "El REC debe admitir cualquier solicitud, escrito o comunicaci&oacute;n dirigida a cualquiera de las Administraciones P&uacute;blicas espa&ntilde;olas.";
 choices[88][1] = "La presentaci&oacute;n de solicitudes dirigidas a entidades que no hayan sido activadas en el REC se tendr&aacute; por no realizada.";
 choices[88][2] = "El REC podr&aacute; ser habilitado para la remisi&oacute;n, recepci&oacute;n e intercambio de solicitudes de la competencia de las Administraciones Auton&oacute;micas y Locales, en la forma que se determine en los correspondientes Convenios.";
 choices[88][3] = "En coordinaci&oacute;n con las Administraciones destinatarias, el Ministerio de Hacienda y Administraciones P&uacute;blicas ser&aacute; responsable de la custodia y manejo de todos los ficheros generados por el REC.";
 answers[88] = choices[88][2];
 units[88] = "44";
 comments[88] = "Id Pregunta: 10923. TIC A1 AGE 2014";


//  Id pregunta: 10927 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Respecto a la Reutilizaci&oacute;n de la informaci&oacute;n del Sector P&uacute;blico, se&ntilde;ale la respuesta correcta:";
 choices[89]= new Array();
 choices[89][0] = "Las personas jur&iacute;dicas son las &uacute;nicas que pueden hacer uso de los datos generados y custodiados por los organismos del sector p&uacute;blico.";
 choices[89][1] = "La reutilizaci&oacute;n supone actividades como la copia, difusi&oacute;n, reordenaci&oacute;n y combinaci&oacute;n de la informaci&oacute;n siempre que sea con fines no comerciales.";
 choices[89][2] = "El sitio web datos.gob.es es el portal de car&aacute;cter nacional que organiza y gestiona el Cat&aacute;logo de Informaci&oacute;n P&uacute;blica del Sector P&uacute;blico.";
 choices[89][3] = "Los documentos y recursos de informaci&oacute;n reutilizables puestos a disposici&oacute;n p&uacute;blica utilizar&aacute;n est&aacute;ndares abiertos y est&aacute;ndares propietarios indistintamente.";
 answers[89] = choices[89][2];
 units[89] = "22";
 comments[89] = "Id Pregunta: 10927. TIC A1 AGE 2014";


//  Id pregunta: 10973 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;En virtud de qu&eacute; instrumento jur&iacute;dico se aprueban y publican las Normas T&eacute;cnicas de Interoperabilidad?";
 choices[90]= new Array();
 choices[90][0] = "Orden Ministerial del Ministro de Hacienda y Administraciones P&uacute;blicas.";
 choices[90][1] = "Resoluci&oacute;n del Secretario de Estado de Presidencia.";
 choices[90][2] = "Resoluci&oacute;n del Secretario de Estado de Administraciones P&uacute;blicas.";
 choices[90][3] = "Reglamento del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 answers[90] = choices[90][2];
 units[90] = "43";
 comments[90] = "Id Pregunta: 10973. TIC A1 AGE 2014";


//  Id pregunta: 11028 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l es una soluci&oacute;n de servicio en la nube para el registro en las administraciones?";
 choices[91]= new Array();
 choices[91][0] = "ORVE";
 choices[91][1] = "GEISER";
 choices[91][2] = "Las 2 anteriores";
 choices[91][3] = "Ambas son soluciones, pero no en la nube";
 answers[91] = choices[91][2];
 units[91] = "44";
 comments[91] = "Id Pregunta: 11028. ";


//  Id pregunta: 11110 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seleccione la opci&oacute;n que no indica un principio o pauta de las WCAG 2.0";
 choices[92]= new Array();
 choices[92][0] = "Comprensibilidad";
 choices[92][1] = "Sencillez";
 choices[92][2] = "Operabilidad";
 choices[92][3] = "Robustez";
 answers[92] = choices[92][1];
 units[92] = "39";
 comments[92] = "Id Pregunta: 11110. ";


//  Id pregunta: 11202 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[93]= new Array();
 choices[93][0] = "Internacionalizaci&oacute;n de empresas tecnol&oacute;gicas";
 choices[93][1] = "Fomentar la alfabetizaci&oacute;n e inclusi&oacute;n digital";
 choices[93][2] = "Acceso r&aacute;pido y ultrarr&aacute;pido a internet";
 choices[93][3] = "Beneficios TIC para la Sociedad UE";
 answers[93] = choices[93][0];
 units[93] = "30";
 comments[93] = "Id Pregunta: 11202. ";


//  Id pregunta: 11204 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;ntos objetivos tiene la Agenda Digital Espa&ntilde;ola?";
 choices[94]= new Array();
 choices[94][0] = "6";
 choices[94][1] = "7";
 choices[94][2] = "8";
 choices[94][3] = "9";
 answers[94] = choices[94][0];
 units[94] = "30";
 comments[94] = "Id Pregunta: 11204. ";


//  Id pregunta: 11243 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Un contrato de colaboraci&oacute;n p&uacute;blico-privada de 134.000 euros estar&aacute; sujeto a regulaci&oacute;n armonizada.";
 choices[95]= new Array();
 choices[95][0] = "En todo caso.";
 choices[95][1] = "Depender&aacute; del umbral establecido.";
 choices[95][2] = "S&oacute;lo si es del sector p&uacute;blico estatal.";
 choices[95][3] = "Depende de que los lotes no superen los 80.00 euros.";
 answers[95] = choices[95][0];
 units[95] = "41";
 comments[95] = "Id Pregunta: 11243. ";


//  Id pregunta: 11297 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En qu&eacute; casos no es necesario el consentimiento del usuario en el tratamiento de datos seg&uacute;n la Ley Org&aacute;nica de Protecci&oacute;n de Datos";
 choices[96]= new Array();
 choices[96][0] = "Datos con fines hist&oacute;ricos, estad&iacute;sticos o cient&iacute;ficos.";
 choices[96][1] = "No existen excepciones al consentimiento de tratamiento de los datos.";
 choices[96][2] = "La Administraci&oacute;n en el desempe&ntilde;o de sus funciones y las fuentes accesibles al p&uacute;blico.";
 choices[96][3] = "Datos sobre Sindicaci&oacute;n, Ideolog&iacute;a y Religi&oacute;n.";
 answers[96] = choices[96][2];
 units[96] = "29";
 comments[96] = "Id Pregunta: 11297. ";


//  Id pregunta: 11601 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Para un sistema calificado con nivel sustancial de aseguramiento de la calidad, cl@ve admite como mecanismo v&aacute;lido de registro e identificaci&oacute;n:";
 choices[97]= new Array();
 choices[97][0] = "Cl@ve PIN de varios usos";
 choices[97][1] = "Cl@ve Permanente sin SMS";
 choices[97][2] = "Cl@ve PIN de un solo uso";
 choices[97][3] = "b) y c) son correctos";
 answers[97] = choices[97][2];
 units[97] = "44";
 comments[97] = "Id Pregunta: 11601. ";


//  Id pregunta: 11759 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de los siguientes no es un tipo de tramitaci&oacute;n de contrataci&oacute;n?";
 choices[98]= new Array();
 choices[98][0] = "previos";
 choices[98][1] = "emergencia";
 choices[98][2] = "urgencia";
 choices[98][3] = "ordinaria";
 answers[98] = choices[98][0];
 units[98] = "41";
 comments[98] = "Id Pregunta: 11759. ";


//  Id pregunta: 11778 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  El informe t&eacute;cnico de la Direcci&oacute;n de Tecnolog&iacute;a de la Informaci&oacute;n y de las Comunicaciones para los expedientes de contrataci&oacute;n TIC:";
 choices[99]= new Array();
 choices[99][0] = "Debe emitirse antes de 10 d&iacute;as&nbsp;";
 choices[99][1] = "Es preceptivo en todo caso";
 choices[99][2] = "Puede emitirse despu&eacute;s de 10 d&iacute;as laborables";
 choices[99][3] = "Es necesario junto con el informe de la CMAD";
 answers[99] = choices[99][2];
 units[99] = "41, 24";
 comments[99] = "Id Pregunta: 11778. ";


