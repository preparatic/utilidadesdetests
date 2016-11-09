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


//  Id pregunta: 20 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;les de los siguientes son objetivos importantes que persigue la pol&iacute;tica comunitaria en materia de normalizaci&oacute;n?:";
 choices[1]= new Array();
 choices[1][0] = "Crear un entorno competitivo y defender y proteger la inversi&oacute;n de los usuarios en las tecnolog&iacute;as de la informaci&oacute;n";
 choices[1][1] = "Crear un entorno de trabajo uniforme y normalizado en todas las administraciones europeas y conseguir la plena movilidad de funcionarios a trav&eacute;s de las distintas instituciones de toda la UE";
 choices[1][2] = "Suprimir las barreras de comercio en el sector de tecnolog&iacute;as de informaci&oacute;n en el mercado &uacute;nico con vistas a proteger la industria europea de la materia";
 choices[1][3] = "Las respuestas a) y b) en conjunto";
 answers[1] = choices[1][3];
 units[1] = "40";
 comments[1] = "Id Pregunta: 20. ";


//  Id pregunta: 25 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;C&oacute;mo se denominan los distintos niveles de adecuaci&oacute;n contemplados en WAI?";
 choices[2]= new Array();
 choices[2][0] = "A, B, C y D";
 choices[2][1] = "A, AA y AAA";
 choices[2][2] = "A1, A2 y A3";
 choices[2][3] = "1, 2, 3 y 4";
 answers[2] = choices[2][1];
 units[2] = "39";
 comments[2] = "Id Pregunta: 25. ";


//  Id pregunta: 36 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes no es una implementaci&oacute;n de POSIX (IEEE 1003)?:";
 choices[3]= new Array();
 choices[3][0] = "HP-UX";
 choices[3][1] = "MINIX";
 choices[3][2] = "Solaris";
 choices[3][3] = "Las 3 anteriores son implementaciones de POSIX";
 answers[3] = choices[3][3];
 units[3] = "40";
 comments[3] = "Id Pregunta: 36. ";


//  Id pregunta: 611 AÃ±o de creación de pregunta: 2006-01-01
 questions[4]= "5)  Cual de los siguientes ficheros debe inscribirse como de nivel de seguridad alto";
 choices[4]= new Array();
 choices[4][0] = "Los ficheros que contengan datos para fines policiales, sin consentimiento del afectado.";
 choices[4][1] = "Los ficheros que contengan un conjunto de datos de car&aacute;cter personal suficientes que permitan obtener una evaluaci&oacute;n de la personalidad del individuo.";
 choices[4][2] = "Los ficheros que contengan datos relativos a la comisi&oacute;n de infracciones administrativas o penales.";
 choices[4][3] = "No es correcta ninguna de las anteriores.";
 answers[4] = choices[4][0];
 units[4] = "29";
 comments[4] = "Id Pregunta: 611. ";


//  Id pregunta: 757 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  &iquest;De las siguientes API's cual no es un API de desarrollo de tarjetas inteligentes?";
 choices[5]= new Array();
 choices[5][0] = "CryptoAPI";
 choices[5][1] = "PKCS#7";
 choices[5][2] = "PKCS#11";
 choices[5][3] = "JCE/JCA";
 answers[5] = choices[5][1];
 units[5] = "74";
 comments[5] = "Id Pregunta: 757. NULL";


//  Id pregunta: 955 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Con 3 discos SCSI de 145 Gbytes en modalidad RAID 5, se obtiene una capacidad total neta de:";
 choices[6]= new Array();
 choices[6][0] = "145 Gbytes";
 choices[6][1] = "435 Gbytes";
 choices[6][2] = "290 Gbytes";
 choices[6][3] = "217.5 Gbytes";
 answers[6] = choices[6][2];
 units[6] = "48";
 comments[6] = "Id Pregunta: 955. ";


//  Id pregunta: 1092 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  En el sector de los procesadores cient&iacute;ficos:";
 choices[7]= new Array();
 choices[7][0] = "Los modelos de procesadores paralelos utilizan chips convencionales, por lo que resultan siempre m&aacute;s econ&oacute;micos que los superordenadores de gran escala.";
 choices[7][1] = "Se utilizan sistemas operativos propietarios.";
 choices[7][2] = "Se emplea el proceso paralelo masivo (MPP).";
 choices[7][3] = "Los procesadores incorporados de terceras partes proporcionan capacidades de proceso en coma flotante y matricial para entornos de mainframe tradicional.";
 answers[7] = choices[7][3];
 units[7] = "45, 46";
 comments[7] = "Id Pregunta: 1092. ";


//  Id pregunta: 1138 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  En un marco, al pedir el valor de un slot:";
 choices[8]= new Array();
 choices[8][0] = "Primero se dar&aacute; el valor por defecto, si este no existiera, el valor en curso, y si este no existiera, se ejecutar&aacute; el procedimiento if-required";
 choices[8][1] = "Primero se dar&aacute; el valor en curso, si este no existiera, el valor por defecto, y si este no existiera, se ejecutar&aacute; el procedimiento if-required";
 choices[8][2] = "Primero se ejecutar&aacute; if-required, y si no finaliza con &eacute;xito, se dar&aacute; el valor por defecto, y si este no existiera, el valor en curso, Sini, se termina con error.";
 choices[8][3] = "Primero se dar&aacute; el valor en curso, si este no existiera, el valor por defecto, y si este no existiera, se ejecutar&aacute; el procedimiento if-needed";
 answers[8] = choices[8][3];
 units[8] = "64";
 comments[8] = "Id Pregunta: 1138. ";


//  Id pregunta: 1216 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  La deducci&oacute;n por medio de los sistemas de Kleene en inteligencia artificial hace referencia a:";
 choices[9]= new Array();
 choices[9][0] = "La orientaci&oacute;n heur&iacute;stica";
 choices[9][1] = "La orientaci&oacute;n l&oacute;gica";
 choices[9][2] = "La representaci&oacute;n del conocimiento";
 choices[9][3] = "Las redes sem&aacute;nticas";
 answers[9] = choices[9][1];
 units[9] = "63";
 comments[9] = "Id Pregunta: 1216. ";


//  Id pregunta: 1236 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  La norma ANSI/SQL se corresponde con la norma ISO:";
 choices[10]= new Array();
 choices[10][0] = "ISO 7498";
 choices[10][1] = "ISO 9735";
 choices[10][2] = "ISO 9075";
 choices[10][3] = "ISO 9945-1";
 answers[10] = choices[10][2];
 units[10] = "58";
 comments[10] = "Id Pregunta: 1236. ";


//  Id pregunta: 1308 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  PGP son una siglas muy conocidad dentro del mundo del cifrado y de la seguridad. &iquest;A qu&eacute; corresponden?:";
 choices[11]= new Array();
 choices[11][0] = "Pretty Good Privacy";
 choices[11][1] = "Personal General Privacity";
 choices[11][2] = "Privacity Generator Program";
 choices[11][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[11] = choices[11][0];
 units[11] = "72";
 comments[11] = "Id Pregunta: 1308. ";


//  Id pregunta: 1344 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Se&ntilde;ale el modelo de miner&iacute;a de datos que comprueba la validez de las hip&oacute;tesis establecidas por el usuario.";
 choices[12]= new Array();
 choices[12][0] = "Modelo de descubrimiento.";
 choices[12][1] = "Modelo de verificaci&oacute;n.";
 choices[12][2] = "Modelo predictivo.";
 choices[12][3] = "Modelo de resumen.";
 answers[12] = choices[12][1];
 units[12] = "68";
 comments[12] = "Id Pregunta: 1344. ";


//  Id pregunta: 1476 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  SCSI responde a las siglas de:";
 choices[13]= new Array();
 choices[13][0] = "Smart Computer System Interface, Interfaz elegante para sistemas de computadora";
 choices[13][1] = "Small Computer System Interface, Interfaz para peque&ntilde;os sistemas de computadora";
 choices[13][2] = "Synchonized Computer Serial Interface, Interfaz serie para ordenadores sincronizados";
 choices[13][3] = "Superb Computation Scale- Integration, escala de integraci&oacute;n para computaci&oacute;n s&uacute;per";
 answers[13] = choices[13][1];
 units[13] = "48";
 comments[13] = "Id Pregunta: 1476. ";


//  Id pregunta: 1530 AÃ±o de creación de pregunta: 2003-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes afirmaciones  pertenece al RD 209/2003 ?";
 choices[14]= new Array();
 choices[14][0] = "Se podr&aacute; utilizar una direcci&oacute;n de correo ordinario para recibir avisos de env&iacute;os la direcci&oacute;n de correo &uacute;nica, no consider&aacute;ndose la notificaci&oacute;n enviada si no se ha recibido ese aviso";
 choices[14][1] = "Si el usuario lo escoge la administraci&oacute;n estar&aacute; obligada a avisar al ciudadano de que tiene una notificaci&oacute;n mediante una mensaje SMS";
 choices[14][2] = "Si el usuario al cabo de 10 d&iacute;as desde que ha recibido la notificaci&oacute;n, no la abre, se pasa a considerar otro tipo de notificaci&oacute;n, con otro plazo para la misma";
 choices[14][3] = "Si el cliente al cabo de 10 desde que ha recibido la notificaci&oacute;n, no la abre, se considera que la notificaci&oacute;n ha sido rechazada";
 answers[14] = choices[14][3];
 units[14] = "30";
 comments[14] = "Id Pregunta: 1530. ";


//  Id pregunta: 1584 AÃ±o de creación de pregunta: 2003-01-01
 questions[15]= "16)  En el contexto del modelo de componentes software basados en Java, &iquest;qu&eacute; es un contenedor?:";
 choices[15]= new Array();
 choices[15][0] = "Un proceso donde se ejecutan los componentes Java.";
 choices[15][1] = "Una biblioteca de clases Java.";
 choices[15][2] = "Una interfaz de usuario.";
 choices[15][3] = "Un fichero XML que describe los componentes de aplicaci&oacute;n.";
 answers[15] = choices[15][0];
 units[15] = "60";
 comments[15] = "Id Pregunta: 1584. Junta Andaluc&iacute;a";


//  Id pregunta: 1726 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  Las partes del sistema operativo que acceden directamente a los recursos hardware";
 choices[16]= new Array();
 choices[16][0] = "Se ejecutan en modo usuario";
 choices[16][1] = "Se desarrollan por los usuarios";
 choices[16][2] = "Se desarrollan de forma gen&eacute;rica";
 choices[16][3] = "Se ejcutan en modo protegido";
 answers[16] = choices[16][3];
 units[16] = "54";
 comments[16] = "Id Pregunta: 1726. NULL";


//  Id pregunta: 1782 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  Se&ntilde;ale la definici&oacute;n m&aacute;s correcta para el producto XEN:";
 choices[17]= new Array();
 choices[17][0] = "Entorno de ejecuci&oacute;n .NET sobre Linux, al estilo de Mono";
 choices[17][1] = "Hoja de c&aacute;lculo para KDE";
 choices[17][2] = "Sistema gestor de redes empresariales extendidas";
 choices[17][3] = "Sistema de virtualizaci&oacute;n de sistemas operativos, de fuente abierta";
 answers[17] = choices[17][3];
 units[17] = "61,62";
 comments[17] = "Id Pregunta: 1782. ";


//  Id pregunta: 1788 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  Al realizar la b&uacute;squeda en un espacio de estados, el m&eacute;todo de backtraking &hellip;";
 choices[18]= new Array();
 choices[18][0] = "Solo se puede usar para b&uacute;squedas ciegas";
 choices[18][1] = "Permite ahorrar recursos de computaci&oacute;n";
 choices[18][2] = "Permite recorrer los &aacute;rboles solo en anchura";
 choices[18][3] = "Permite recorrer los &aacute;rboles solo en profundidad";
 answers[18] = choices[18][1];
 units[18] = "63";
 comments[18] = "Id Pregunta: 1788. ";


//  Id pregunta: 1796 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  Indique cu&aacute;les son las facetas declarativas en la representaci&oacute;n del conocimiento mediante marcos (frameworks):";
 choices[19]= new Array();
 choices[19][0] = "if-needed; if-required e if-deleted";
 choices[19][1] = "if-needed; if-required e if-added";
 choices[19][2] = "if-needed; if-deleted e if-added";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = choices[19][3];
 units[19] = "64";
 comments[19] = "Id Pregunta: 1796. ";


//  Id pregunta: 1811 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  Google Earth es un sistema que permite el acceso a informaci&oacute;n geogr&aacute;fica, y que emplea un modelo de datos:";
 choices[20]= new Array();
 choices[20][0] = "&Uacute;nicamente r&aacute;ster.";
 choices[20][1] = "R&aacute;ster y vectorial.";
 choices[20][2] = "&Uacute;nicamente vectorial.";
 choices[20][3] = "Representaci&oacute;n de tipo streaming.";
 answers[20] = choices[20][1];
 units[20] = "67";
 comments[20] = "Id Pregunta: 1811. NULL";


//  Id pregunta: 1836 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  El comercio electr&oacute;nico que se produce cuando se realiza una venta de un producto por Internet se identifica como:";
 choices[21]= new Array();
 choices[21][0] = "B2B";
 choices[21][1] = "B2C";
 choices[21][2] = "B2A";
 choices[21][3] = "B2G";
 answers[21] = choices[21][1];
 units[21] = "70";
 comments[21] = "Id Pregunta: 1836. NULL";


//  Id pregunta: 2164 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Indicar la respuesta verdadera respecto a EFQM:";
 choices[22]= new Array();
 choices[22][0] = "El Modelo Europeo de Calidad se desarroll&oacute; en 1991 bajo la iniciativa de la European Foundation for QualityManagement (EFQM), formada en 1988 por un grupo de catorce importantes empresas europeas. En la actualidad la componen m&aacute;s de 400 miembros";
 choices[22][1] = "El modelo identific&oacute; una serie de elementos que ser&aacute;n la base para la Gesti&oacute;n de Calidad Total (TQM) dentro de las organizaciones y que se pueden agrupar en dos grandes bloques que podemos denominar: el C&oacute;mo y el Qu&eacute; o tambi&eacute;n los Agentes y los Resultados";
 choices[22][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son falsas";
 choices[22][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son verdaderas";
 answers[22] = choices[22][3];
 units[22] = "92";
 comments[22] = "Id Pregunta: 2164. NULL";


//  Id pregunta: 2174 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  La definici&oacute;n recursiva de los conceptos de un modelo a partir de elementos del propio modelo se denomina:";
 choices[23]= new Array();
 choices[23][0] = "Intramodelado.";
 choices[23][1] = "Modelado interno.";
 choices[23][2] = "Automodelado.";
 choices[23][3] = "Metamodelado.";
 answers[23] = choices[23][3];
 units[23] = "";
 comments[23] = "Id Pregunta: 2174. ";


//  Id pregunta: 2310 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En el modelo de ciclo de vida en espiral, cada ciclo de la espiral comienza con la etapa de:";
 choices[24]= new Array();
 choices[24][0] = "Planificaci&oacute;n";
 choices[24][1] = "An&aacute;lisis de riesgos";
 choices[24][2] = "Desarrollo del prototipo";
 choices[24][3] = "Evaluaci&oacute;n";
 answers[24] = choices[24][0];
 units[24] = "76";
 comments[24] = "Id Pregunta: 2310. ";


//  Id pregunta: 2475 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Para el an&aacute;lisis de sistemas en tiempo real no se usan:";
 choices[25]= new Array();
 choices[25][0] = "Modelos matem&aacute;ticos.";
 choices[25][1] = "Diagramas de bloques.";
 choices[25][2] = "Redes de Petri.";
 choices[25][3] = "Dominios distribuidos de Halm.";
 answers[25] = choices[25][3];
 units[25] = "83";
 comments[25] = "Id Pregunta: 2475. ";


//  Id pregunta: 2697 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  M&eacute;todo b&aacute;sico de reconocimiento de caracteres en OCR:";
 choices[26]= new Array();
 choices[26][0] = "Comparaci&oacute;n matricial.";
 choices[26][1] = "S&iacute;ntesis de caracter&iacute;sticas.";
 choices[26][2] = "Todas las anteriores.";
 choices[26][3] = "Ninguna de las anteriores.";
 answers[26] = choices[26][0];
 units[26] = "94";
 comments[26] = "Id Pregunta: 2697. ";


//  Id pregunta: 3084 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Los web services:";
 choices[27]= new Array();
 choices[27][0] = "Permiten la ejecuci&oacute;n de procedimientos remotos y devoluci&oacute;n de los resultados a trav&eacute;s de redes ip, basandose en el protocolo HTTP";
 choices[27][1] = "Permiten a los usuarios devolver cualquier tipo de informaci&oacute;n con un navegador y el protocolo HTTP";
 choices[27][2] = "Son una mera especificaci&oacute;n y a&uacute;n no se han puesto en pr&aacute;ctica";
 choices[27][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[27] = choices[27][0];
 units[27] = "51";
 comments[27] = "Id Pregunta: 3084.  Nuevo tema: Arquitectura SOA";


//  Id pregunta: 3319 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Qui&eacute;nes son considerados los padres de internet?";
 choices[28]= new Array();
 choices[28][0] = "William H. Gates y Paul Allen";
 choices[28][1] = "Steve Jobs y Steve Wozniak";
 choices[28][2] = "Vinton Cerf y Robert Kahn";
 choices[28][3] = "Brian Kernighan y Dennis Ritchie";
 answers[28] = choices[28][2];
 units[28] = "112";
 comments[28] = "Id Pregunta: 3319. ";


//  Id pregunta: 3417 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  IAB, IETF, IRTF, IESG son:";
 choices[29]= new Array();
 choices[29][0] = "protocolos de Internet";
 choices[29][1] = "organismos relacionados con Internet";
 choices[29][2] = "organismos de estandarizaci&oacute;n en el campo de redes tanto inal&aacute;mbricas como cableadas";
 choices[29][3] = "protocolos de nivel de transporte, en particular de encaminamiento y optimizaci&oacute;n de rutas";
 answers[29] = choices[29][1];
 units[29] = "112";
 comments[29] = "Id Pregunta: 3417. ";


//  Id pregunta: 3612 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  La interconexi&oacute;n de redes privadas a trav&eacute;s de la red 'p&uacute;blica' Internet manteniendo sus propias direcciones IP se consigue por medio de:";
 choices[30]= new Array();
 choices[30][0] = "Firewalls";
 choices[30][1] = "Proxies a nivel de aplicaci&oacute;n";
 choices[30][2] = "Tunneling o encapsulado";
 choices[30][3] = "Cifrado de las cabeceras IP";
 answers[30] = choices[30][2];
 units[30] = "103,113";
 comments[30] = "Id Pregunta: 3612. ";


//  Id pregunta: 3623 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  La normas de la serie 802 del IEEE est&aacute;n establecidas por diversos grupos de trabajo a los que que est&aacute;n asignadas diferentes tareas. &iquest;A cu&aacute;l corresponde la 802.6?:";
 choices[31]= new Array();
 choices[31][0] = "Control l&oacute;gico del enlace";
 choices[31][1] = "Normativa de conectividad entre equipos a nivel f&iacute;sico";
 choices[31][2] = "M&eacute;todo de paso de testigo en bus";
 choices[31][3] = "Redes de &aacute;rea metropolitana";
 answers[31] = choices[31][3];
 units[31] = "101";
 comments[31] = "Id Pregunta: 3623. ";


//  Id pregunta: 3646 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  La tecnolog&iacute;a de red de &aacute;rea local 10Base-T:";
 choices[32]= new Array();
 choices[32][0] = "Requiere cableado coaxial delgado";
 choices[32][1] = "Requiere cableado de pares trenzados de categor&iacute;a 5 como m&iacute;nimo";
 choices[32][2] = "Cumple el est&aacute;ndar IEEE 802.3";
 choices[32][3] = "Son ciertas las respuestas 'b' y 'c'";
 answers[32] = choices[32][2];
 units[32] = "101";
 comments[32] = "Id Pregunta: 3646. ";


//  Id pregunta: 3667 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Una arquitectura de red jer&aacute;rquica:";
 choices[33]= new Array();
 choices[33][0] = "Asigna a cada sistema de comunicaciones de la red las mismas funciones";
 choices[33][1] = "Todas las sesiones de la red tienen lugar entre sistemas parejos";
 choices[33][2] = "Un sistema maestro es el encargado de toda la red y realiza funciones de gesti&oacute;n y control";
 choices[33][3] = "Todas las sesiones comparten las funciones de gesti&oacute;n de red";
 answers[33] = choices[33][2];
 units[33] = "104";
 comments[33] = "Id Pregunta: 3667. ";


//  Id pregunta: 3724 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Los est&aacute;ndares publicados por la IAB (Internet Activities Board) se denominan RFCs que son las siglas de:";
 choices[34]= new Array();
 choices[34][0] = "Recommendation File Contents";
 choices[34][1] = "Requisite File Coordination";
 choices[34][2] = "Request For Comments";
 choices[34][3] = "Register Full Condition";
 answers[34] = choices[34][2];
 units[34] = "112";
 comments[34] = "Id Pregunta: 3724. ";


//  Id pregunta: 3756 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  OSA Parlay es:";
 choices[35]= new Array();
 choices[35][0] = "Open Services Architecture, del Parlay Group, arquitectura que pretende establecer una capa de middleware para el desarrollo de aplicaciones est&aacute;ndares comunes para el desarrollo de servicios m&oacute;viles";
 choices[35][1] = "Open Software Association, con sede establecida en Parlay (Texas)";
 choices[35][2] = "Other Specification for Applicatios, un nuevo est&aacute;ndar dise&ntilde;ado por John Parlay (miembro destacado de ITU-T) que pretende establecer una capa universal de aplicaci&oacute;n que a&uacute;ne las capas de aplicaci&oacute;n de OSI y TCP/IP favoreciendo su total compatibilidad";
 choices[35][3] = "OSA Parlay no se corresponde con ning&uacute;n acr&oacute;nimo conocido";
 answers[35] = choices[35][0];
 units[35] = "108";
 comments[35] = "Id Pregunta: 3756. ";


//  Id pregunta: 3770 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Para videoconferencia en LANs sin QoS (como por ejemplo Internet), se usan las recomendaciones del est&aacute;ndar:";
 choices[36]= new Array();
 choices[36][0] = "H.321";
 choices[36][1] = "H.320";
 choices[36][2] = "H.323";
 choices[36][3] = "H.324";
 answers[36] = choices[36][2];
 units[36] = "117";
 comments[36] = "Id Pregunta: 3770. ";


//  Id pregunta: 3822 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  Se&ntilde;ale la afirmaci&oacute;n verdadera en un sistema de transmisi&oacute;n de datos:";
 choices[37]= new Array();
 choices[37][0] = "El equipo terminal de datos dialoga con la l&iacute;nea de transmisi&oacute;n para emitir la se&ntilde;al";
 choices[37][1] = "El equipo terminal del circuito de datos es el origen o destino final de la comunicaci&oacute;n";
 choices[37][2] = "Un m&oacute;dem es un ejemplo de un equipo terminal de datos";
 choices[37][3] = "El equipo terminal de datos dialoga con el equipo terminal del circuito de datos pas&aacute;ndose la informaci&oacute;n que se quiere transmitir/recibir";
 answers[37] = choices[37][3];
 units[37] = "101";
 comments[37] = "Id Pregunta: 3822. ";


//  Id pregunta: 3850 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  USB, refir&eacute;ndonos a interfaces, significa:";
 choices[38]= new Array();
 choices[38][0] = "Universal Synchronized Bus, Bus sincronizado universal";
 choices[38][1] = "Unstructured Serial Bits, Bits en serie no estructurados";
 choices[38][2] = "Universal Serial Bus, Bus serie universal";
 choices[38][3] = "Unstructured Synchronized Burst, R&aacute;faga sincronizada y no estructurada";
 answers[38] = choices[38][2];
 units[38] = "48";
 comments[38] = "Id Pregunta: 3850. ";


//  Id pregunta: 4081 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Un proxy o apoderado permite";
 choices[39]= new Array();
 choices[39][0] = "realizar funciones de repetidor, ocultando la m&aacute;quina solicitante";
 choices[39][1] = "disponer de una memoria temporal para almacenar las p&aacute;ginas web m&aacute;s visitadas";
 choices[39][2] = "traducir las direcciones internas a externas y viceversa";
 choices[39][3] = "Todas  las respuestas son correctas";
 answers[39] = choices[39][3];
 units[39] = "113";
 comments[39] = "Id Pregunta: 4081. ";


//  Id pregunta: 4285 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  &iquest;Qu&eacute; s&iacute;mbolo es utilizado para direccionar el resultado de la ejecuci&oacute;n de un comando del sistema operativo Unix sustituyendo el contenido de un fichero?";
 choices[40]= new Array();
 choices[40][0] = "&lt;";
 choices[40][1] = "&gt;";
 choices[40][2] = "&lt;&lt;";
 choices[40][3] = "&gt;&gt;";
 answers[40] = choices[40][1];
 units[40] = "54";
 comments[40] = "Id Pregunta: 4285. ";


//  Id pregunta: 4313 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  Indique la respuesta incorrecta. La utilizaci&oacute;n de &ldquo;web farms&rdquo; o granjas de servidores:";
 choices[41]= new Array();
 choices[41][0] = "Libera al usuario final de tener que saber qu&eacute; servidor est&aacute; procesando su petici&oacute;n.";
 choices[41][1] = "Reduce el riesgo de errores de operaciones, con el resultado de que los usuarios finales ven mejorada la fiabilidad y una mayor disponibilidad del sistema.";
 choices[41][2] = "Simplifica notablemente la gesti&oacute;n del sistema; las acciones que afectan a m&uacute;ltiples recursos pueden ser llevadas a cabo con un &uacute;nico comando, mientras que los recursos est&aacute; repartidos entre los m&uacute;ltiples sistemas en diferentes m&aacute;quinas.";
 choices[41][3] = "Minimiza el coste de una instalaci&oacute;n web.";
 answers[41] = choices[41][3];
 units[41] = "49";
 comments[41] = "Id Pregunta: 4313. ";


//  Id pregunta: 4340 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l es el puerto est&aacute;ndar utilizado por el protocolo POP3?:";
 choices[42]= new Array();
 choices[42][0] = "21.";
 choices[42][1] = "23.";
 choices[42][2] = "25";
 choices[42][3] = "110";
 answers[42] = choices[42][3];
 units[42] = "112";
 comments[42] = "Id Pregunta: 4340. ";


//  Id pregunta: 4477 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Qu&eacute; es el metamodelo SPEM?";
 choices[43]= new Array();
 choices[43][0] = "Un lenguaje gen&eacute;rico que extiende UML para el modelado descriptivo de procesos de software.";
 choices[43][1] = "Un m&eacute;trica de software para Ia medici&oacute;n de proyectos.";
 choices[43][2] = "Un consorcio mundial para la creaci&oacute;n de lenguajes de modelado.";
 choices[43][3] = "Un est&aacute;ndar para la creaci&oacute;n de roles de usuario.";
 answers[43] = choices[43][0];
 units[43] = "";
 comments[43] = "Id Pregunta: 4477. ";


//  Id pregunta: 4486 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Indique cual de las siguientes afirmaciones es falsa:";
 choices[44]= new Array();
 choices[44][0] = "Acceden al medio de transmisi&oacute;n en periodos de tiempo predeterminados, por lo que nunca se producen colisiones.";
 choices[44][1] = "El algoritmo de &aacute;rbol de extensi&oacute;n (spanning tree algorithm) es utilizado par los dispositivos puentes (o &quot;bridges&quot;) para construir topolog&iacute;as de interconexi&oacute;n de LAN's libres de bucles.";
 choices[44][2] = "Los encaminadores o routers deben tener implementadas las funcionalidades de los 7 niveles del modelo de referencia OSI para descubrir las rutas de encaminamiento adecuadas.";
 choices[44][3] = "Las pasarelas o gateways permiten, entre otras funcionalidades Ia implementaci&oacute;n de servicios NAT de traducci&oacute;n de direcciones IP.";
 answers[44] = choices[44][2];
 units[44] = "102";
 comments[44] = "Id Pregunta: 4486. ";


//  Id pregunta: 4562 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  En el contexto de Normas UNE, las siglas UNE significan";
 choices[45]= new Array();
 choices[45][0] = "Unidad de Normalizaci&oacute;n Espa&ntilde;ola";
 choices[45][1] = "Uni&oacute;n de Normas Espa&ntilde;olas";
 choices[45][2] = "Una Norma Espa&ntilde;ola";
 choices[45][3] = "Usuarios de Normas Espa&ntilde;olas";
 answers[45] = choices[45][2];
 units[45] = "42";
 comments[45] = "Id Pregunta: 4562. ";


//  Id pregunta: 4622 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Indique cual de las siguientes es una herramienta de e-learning: ";
 choices[46]= new Array();
 choices[46][0] = "Kerberos";
 choices[46][1] = "WebCT";
 choices[46][2] = "Kagera";
 choices[46][3] = "Tuxedo";
 answers[46] = choices[46][1];
 units[46] = "66";
 comments[46] = "Id Pregunta: 4622. ";


//  Id pregunta: 4724 AÃ±o de creación de pregunta: 2009-01-01
 questions[47]= "48)  La siguiente instrucci&oacute;n &ldquo;iptables &ndash;L&rdquo; :";
 choices[47]= new Array();
 choices[47][0] = "Habilita el firewall de un equipo basado en iptables.";
 choices[47][1] = "Habilita el interface loopback a traves del firewall iptables.";
 choices[47][2] = "Habilita el paso de paquetes de retorno a trav&eacute;s del firewall iptables.";
 choices[47][3] = "Muestra la lista de reglas del firewall basado en iptables.";
 answers[47] = choices[47][3];
 units[47] = "54,111";
 comments[47] = "Id Pregunta: 4724. ";


//  Id pregunta: 4768 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  En ATM, para la transmisi&oacute;n de servicios is&oacute;cronos se utilizan los protocolos de adaptaci&oacute;n AAL1 y AAL2. La diferencia entre ellos es";
 choices[48]= new Array();
 choices[48][0] = "AAL1 es de velocidad variable y AAL2 es de velocidad constante";
 choices[48][1] = "AAL1 es de velocidad constante y AAL2 es de velocidad variable";
 choices[48][2] = "AAL1 es orientado a conexi&oacute;n y AAL2 es de tipo datagrama";
 choices[48][3] = "AAL1 es de tipo datagrama y AAL2 es orientado a conexi&oacute;n";
 answers[48] = choices[48][1];
 units[48] = "109";
 comments[48] = "Id Pregunta: 4768. ";


//  Id pregunta: 4908 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  En referencia a Sistemas Operativos multiproceso tipo UNIX &iquest;qu&eacute; se entiende por &ldquo;proceso zombi&rdquo;?:";
 choices[49]= new Array();
 choices[49][0] = "Un proceso hijo que ha acabado de realizar sus tareas pero que el padre todav&iacute;a no ha ejecutado la orden de esperar a que el hijo acabe.";
 choices[49][1] = "Un proceso padre que se ha quedado bloqueado a la espera de que sus hijos acaben sus tareas pendientes.";
 choices[49][2] = "Un par de procesos en el que el primero est&aacute; a la espera de que el segundo proceso acabe y este segundo proceso";
 choices[49][3] = "Un proceso hijo que est&aacute; bloqueado a la espera de que el proceso padre le env&iacute;e datos que necesita.";
 answers[49] = choices[49][0];
 units[49] = "53,54";
 comments[49] = "Id Pregunta: 4908. Examen TIC B 2007";


//  Id pregunta: 4993 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  En orientaci&oacute;n a objetos, el t&eacute;rmino utilizado para expresar que los datos de un objeto solamente pueden ser manipulados por medio de mensajes y m&eacute;todos predefinidos es:";
 choices[50]= new Array();
 choices[50][0] = "Polimorfismo";
 choices[50][1] = "Herencia";
 choices[50][2] = "Reusabilidad";
 choices[50][3] = "Encapsulaci&oacute;n";
 answers[50] = choices[50][3];
 units[50] = "82";
 comments[50] = "Id Pregunta: 4993. Examen TIC A 2007";


//  Id pregunta: 5105 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Cu&aacute;l de los siguientes es un modelo de estimaci&oacute;n de proyectos software:";
 choices[51]= new Array();
 choices[51][0] = "CMMI";
 choices[51][1] = "COCOMO";
 choices[51][2] = "M&eacute;todo de Cox";
 choices[51][3] = "El plan de SQA";
 answers[51] = choices[51][1];
 units[51] = "89";
 comments[51] = "Id Pregunta: 5105. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5452 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  El entorno de escritorio GNOME";
 choices[52]= new Array();
 choices[52][0] = "es uno de los entornos m&aacute;s avanzados y completos para Linux";
 choices[52][1] = "usa poco recursos del sistema porque no usa mucho espacio de disco o memoria";
 choices[52][2] = "es el escritorio por defecto de algunas distribuciones como Red Hat y Debian";
 choices[52][3] = "es el GUI elegido por los sistemas UNIX comerciales";
 answers[52] = choices[52][2];
 units[52] = "54";
 comments[52] = "Id Pregunta: 5452. Castilla y Le&oacute;n";


//  Id pregunta: 5520 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Indicar la respuesta verdadera";
 choices[53]= new Array();
 choices[53][0] = "Las im&aacute;genes r&aacute;ster constan de matrices de p&iacute;xeles que se ordenan en una relaci&oacute;n predefinida de columnas y filas";
 choices[53][1] = "Las im&aacute;genes vectoriales se componen de formas matem&aacute;ticas codificadas como f&oacute;rmulas matem&aacute;ticas";
 choices[53][2] = "Las respuestas a) y b) son verdaderas";
 choices[53][3] = "Las respuestas a) y b) son falsas";
 answers[53] = choices[53][2];
 units[53] = "93";
 comments[53] = "Id Pregunta: 5520. NULL";


//  Id pregunta: 5955 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  Se&ntilde;ale la respuesta FALSA. La Ley 11/2007 indica que la Reuni&oacute;n de &Oacute;rganos colegiados por medios electr&oacute;nicos en la Administraci&oacute;n General del Estado se efectuar&aacute; de acuerdo con las siguientes especialidades:";
 choices[54]= new Array();
 choices[54][0] = "Deber&aacute; garantizarse la realizaci&oacute;n efectiva de los principios que la legislaci&oacute;n establece respecto de la convocatoria, acceso a la informaci&oacute;n y comunicaci&oacute;n del orden del d&iacute;a, en donde se especificar&aacute;n los tiempos en los que se organizar&aacute;n los debates, la formulaci&oacute;n y conocimiento de las propuestas y la adopci&oacute;n de acuerdos.";
 choices[54][1] = "Deber&aacute; garantizarse de forma fehaciente el quorum requerido en los t&eacute;rminos establecidos por la Ley 30/1992, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n por medios electr&oacute;nicos ";
 choices[54][2] = "El r&eacute;gimen de constituci&oacute;n y adopci&oacute;n de acuerdos garantizar&aacute; la participaci&oacute;n de los miembros de acuerdo con las disposiciones propias del &oacute;rgano.";
 choices[54][3] = "Las actas garantizar&aacute;n la constancia de las comunicaciones producidas as&iacute; como el acceso de los miembros al contenido de los acuerdos adoptados.";
 answers[54] = choices[54][1];
 units[54] = "43";
 comments[54] = "Id Pregunta: 5955. Disposici&oacute;n Adicional primera.";


//  Id pregunta: 6171 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  El Cuerpo Superior de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaciones (CSTIC) fue una decisi&oacute;n del Gobierno de:";
 choices[55]= new Array();
 choices[55][0] = "1989";
 choices[55][1] = "1990";
 choices[55][2] = "1991";
 choices[55][3] = "1992";
 answers[55] = choices[55][1];
 units[55] = "24";
 comments[55] = "Id Pregunta: 6171. ";


//  Id pregunta: 6378 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  El Esquema Nacional de Interoperabilidad establece que las Administraciones p&uacute;blicas utilizar&aacute;n preferentemente la Red de comunicaciones de las Administraciones p&uacute;blicas espa&ntilde;olas para comunicarse entre s&iacute;. La red que prestar&aacute; este servicio recibe el nombre de:";
 choices[56]= new Array();
 choices[56][0] = "InterAdmon";
 choices[56][1] = "TESTA";
 choices[56][2] = "SARA";
 choices[56][3] = "El Esquema Nacional de Interoperabilidad no establece el uso de una red determinada.";
 answers[56] = choices[56][2];
 units[56] = "43";
 comments[56] = "Id Pregunta: 6378. Art&iacute;culo 13 ENI";


//  Id pregunta: 6574 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[57]= new Array();
 choices[57][0] = "ICMP trabaja en la capa de enlace";
 choices[57][1] = "ICMP informa a los hosts, routers y otros dispositivos de problemas en la red";
 choices[57][2] = "ICMP es el principal componente de la utilidad ping";
 choices[57][3] = "Todas las respuestas anteriores son correctas";
 answers[57] = choices[57][0];
 units[57] = "100";
 comments[57] = "Id Pregunta: 6574. NULL";


//  Id pregunta: 6627 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  El orden de los niveles del modelo CMM de Ingenier&iacute;a de Software es:";
 choices[58]= new Array();
 choices[58][0] = "Inicial; Repetible; Definido; Gestionado; Optimizado";
 choices[58][1] = "Inicial; Definido; Repetible; Gestionado; Optimizado";
 choices[58][2] = "Inicial; Definido; Gestionado; Repetible; Optimizado";
 choices[58][3] = "Inicial; Repetible; Gestionado; Definido; Optimizado";
 answers[58] = choices[58][0];
 units[58] = "87";
 comments[58] = "Id Pregunta: 6627. NULL";


//  Id pregunta: 7147 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica, &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las entidades que integran la Administraci&oacute;n Local en materia de Administraci&oacute;n Electr&oacute;nica, depende de:";
 choices[59]= new Array();
 choices[59][0] = "La Conferencia Sectorial de Administraci&oacute;n P&uacute;blica";
 choices[59][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[59][2] = "La Direcci&oacute;n General para el Impulso de la Administraci&oacute;n Electr&oacute;nica";
 choices[59][3] = "Del Vicepresidente Tercero del Gobierno y Ministro de Cooperaci&oacute;n Territorial";
 answers[59] = choices[59][0];
 units[59] = "44";
 comments[59] = "Id Pregunta: 7147. Examen TIC B 2009";


//  Id pregunta: 7859 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)   En un fichero que contenga datos de car&aacute;cter personal con medidas de seguridad de nivel alto, &iquest;cu&aacute;l de las siguientes afirmaciones relativas al acceso a datos es incorrecta?";
 choices[60]= new Array();
 choices[60][0] = " De cada acceso se guardar&aacute;n, como m&iacute;nimo, la identificaci&oacute;n del usuario, la fecha y hora en que se realiz&oacute; el fichero accedido, el tipo de acceso y el objeto del mismo y si ha sido autorizado o denegado.";
 choices[60][1] = " El per&iacute;odo m&iacute;nimo de conservaci&oacute;n de los datos de acceso registrados ser&aacute; de dos a&ntilde;os.";
 choices[60][2] = " En el caso de que el acceso a un fichero haya sido autorizado, ser&aacute; preciso guardar la informaci&oacute;n que permita identificar el registro accedido.";
 choices[60][3] = " El responsable de seguridad competente se encargar&aacute; de revisar peri&oacute;dicamente la informaci&oacute;n de control registrada y elaborar&aacute; un informe de las revisiones realizadas y los problemas detectados al menos una vez al mes.";
 answers[60] = choices[60][0];
 units[60] = "NULL";
 comments[60] = "Id Pregunta: 7859. Map 2005";


//  Id pregunta: 8169 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a la &quot;Ley General de Telecomunicaciones&quot; es cierta?:";
 choices[61]= new Array();
 choices[61][0] = "Corresponde a la Comisi&oacute;n Nacional de los Mercados y la Competencia la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n y, en su caso, de direccionamiento y nombres, teniendo en cuenta las decisiones aplicables que se adopten en el seno de las organizaciones y los foros internacionales.";
 choices[61][1] = "Corresponde al Ministerio de Industria, Energ&iacute;a y Turismo el otorgamiento de los derechos de uso de los recursos p&uacute;blicos regulados en los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n";
 choices[61][2] = "El procedimiento y los plazos para la asignaci&oacute;n de n&uacute;meros, as&iacute; como las condiciones asociadas al uso de los n&uacute;meros, que ser&aacute;n no discriminatorias, proporcionadas y transparentes, se establecer&aacute;n reglamentariamente. Transcurrido el plazo m&aacute;ximo sin haberse notificado la resoluci&oacute;n expresa, se podr&aacute; entender aprobada la solicitud por silencio administrativo.";
 choices[61][3] = "Quedan incluidos en el &aacute;mbito de esta Ley, el r&eacute;gimen aplicable a los contenidos de car&aacute;cter audiovisual transmitidos a trav&eacute;s de las redes.";
 answers[61] = choices[61][1];
 units[61] = "110";
 comments[61] = "Id Pregunta: 8169. Examen TIC A1 2010. Modificado seg&uacute;n Ley 9/2014";


//  Id pregunta: 8192 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  Indique la afirmaci&oacute;n correcta que aplica al DNI electr&oacute;nico: ";
 choices[62]= new Array();
 choices[62][0] = "La PKI adoptada para el DNI electr&oacute;nico asigna las funciones de Autoridad de Validaci&oacute;n a las entidades Autoridad de Certificaci&oacute;n, con objeto de tener conocimiento de la vigencia o caducidad de certificados de un determinado titular.";
 choices[62][1] = "La clave personal de acceso (PIN) podr&aacute; contener signos de puntuaci&oacute;n.";
 choices[62][2] = "Todos los certificados emitidos por DNIe contienen la extensi&oacute;n &lsquo;Key Usage&rsquo; con al menos los siguientes usos &quot;contentCommitment&quot;, &quot;Digital Signature&quot; y &quot;dataEncipherment&quot;.";
 choices[62][3] = "El tama&ntilde;o de las claves de los certificados de autenticaci&oacute;n y firma contenidos en el DNIe, es de 4096 bits. ";
 answers[62] = choices[62][1];
 units[62] = "74";
 comments[62] = "Id Pregunta: 8192. Examen TIC A1 2010";


//  Id pregunta: 8316 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  En el &aacute;mbito de las tecnolog&iacute;as de comunicaciones m&oacute;viles, el orden cronol&oacute;gico de protocolos, de mayor a menor antig&uuml;edad es:";
 choices[63]= new Array();
 choices[63][0] = "GSM, UMTS, HSUPA, HSDPA.";
 choices[63][1] = "GSM, UMTS, HSDPA, HSUPA.";
 choices[63][2] = "GSM, HSUPA, HSDPA, UMTS. ";
 choices[63][3] = "UMTS, GSM, HSDPA, HSUPA.";
 answers[63] = choices[63][1];
 units[63] = "108";
 comments[63] = "Id Pregunta: 8316. Examen TIC A2 2010";


//  Id pregunta: 8358 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Se&ntilde;ale cu&aacute;l de &eacute;stas es una de las funciones del Grupo de Aseguramiento de la Calidad (seg&uacute;n M&eacute;trica v3): ";
 choices[64]= new Array();
 choices[64][0] = "Definir los recursos que se necesitan para instalar el sistema.";
 choices[64][1] = "Identificar las posibles desviac&iacute;ones en los est&aacute;ndares aplicados, as&iacute; como en los requisitos y procedimientos especificados.";
 choices[64][2] = "Notificar a los desarrolladores de las anomal&iacute;as encontradas en el proceso de desarrollo.";
 choices[64][3] = "Documentar las pruebas seg&uacute;n el est&aacute;ndar ISO 9000:2000.";
 answers[64] = choices[64][1];
 units[64] = "86";
 comments[64] = "Id Pregunta: 8358. Examen TIC A2 2010";


//  Id pregunta: 8412 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Qu&eacute; realiza la sentencia &quot;df -h | grep / unidad/temporal | grep -v grep I wc -l&quot; en el sistema operativo Linux? ";
 choices[65]= new Array();
 choices[65][0] = "Cuenta el n&uacute;mero de f&iacute;cheros que se llaman temporal. ";
 choices[65][1] = "Lista las unidades extra&iacute;bles del sistema. ";
 choices[65][2] = "Cuenta el n&uacute;mero de filesystems que contienen /unidad/temporal en su path de montaje. ";
 choices[65][3] = "Cuenta el n&uacute;mero de procesos cuyo nombre contiene /unidad/temporal. ";
 answers[65] = choices[65][2];
 units[65] = "53, 54";
 comments[65] = "Id Pregunta: 8412. Examen TIC A2 2010";


//  Id pregunta: 8503 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  En IPv4 la cabecera IP tiene un campo denominado TTL (Time To Live) que indica el n&uacute;mero m&aacute;ximo de encaminadores que un paquete puede atravesar, &iquest;Cu&aacute;l es &eacute;l rango de valores que puede tomar este campo? ";
 choices[66]= new Array();
 choices[66][0] = "0-15";
 choices[66][1] = "0-255";
 choices[66][2] = "0-5";
 choices[66][3] = "0-127";
 answers[66] = choices[66][1];
 units[66] = "100";
 comments[66] = "Id Pregunta: 8503. Examen TIC A2 2010";


//  Id pregunta: 8629 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el modelo entidad/relaci&oacute;n es correcta?";
 choices[67]= new Array();
 choices[67][0] = "En la especializaci&oacute;n un supertipo so descompone en uno o varios subtipos, los cuales heredan todos los atributos y relaciones del supertipo.";
 choices[67][1] = "La generalizaci&oacute;n consiste en relacionar dos tipos de entidades que normalmente son de dominios independientes, pero coyunturalmente se asocian.";
 choices[67][2] = "La agregaci&oacute;n permite abstraer un tipo de entidad de nivel superior (supertipo) a partir de varios tipos de entidad (subtipos).";
 choices[67][3] = "La asociaci&oacute;n consiste en construir un nuevo tipo de entidad como composici&oacute;n de otros.";
 answers[67] = choices[67][0];
 units[67] = "57, 58";
 comments[67] = "Id Pregunta: 8629. Examen TIC A2 2010 interna";


//  Id pregunta: 8639 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Si tenemos las dependencias funcionales (A, B) -&gt; C, B -&gt; D y la siguiente relaci&oacute;n (A, B, C, D) donde (A, B) es la clave candidata. &iquest;Cu&aacute;l seria el resultado de aplicar la 2&ordf; forma normal?";
 choices[68]= new Array();
 choices[68][0] = "(A, B, C), (A, B, D).";
 choices[68][1] = "(A, B, C), (B, D).";
 choices[68][2] = "(A, B, C),  (A, D).";
 choices[68][3] = "Ya est&aacute; en 2FN.";
 answers[68] = choices[68][1];
 units[68] = "57, 58";
 comments[68] = "Id Pregunta: 8639. Examen TIC A2 2010 interna";


//  Id pregunta: 8663 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  En la tecnolog&iacute;a VDSL, &iquest;cu&aacute;ntos canales se utilizan para la transmisi&oacute;n de los datos?";
 choices[69]= new Array();
 choices[69][0] = "4 (2 de bajada y 2 para subida)";
 choices[69][1] = "3 (2 de bajada y 1 de subida)";
 choices[69][2] = "2 (1 de bajada y 1 de subida)";
 choices[69][3] = "5 (3 de bajada y 2 de subida)";
 answers[69] = choices[69][0];
 units[69] = "107";
 comments[69] = "Id Pregunta: 8663. Examen UPM A2 2011";


//  Id pregunta: 9034 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Indique cu&aacute;l no es un principios b&aacute;sico seg&uacute;n el RD 3/2010.";
 choices[70]= new Array();
 choices[70][0] = "Prevenci&oacute;n, reactivaci&oacute;n y revisi&oacute;n";
 choices[70][1] = "Seguridad Integral";
 choices[70][2] = "Reevaluaci&oacute;n peri&oacute;dica";
 choices[70][3] = "L&iacute;neas de defensa";
 answers[70] = choices[70][0];
 units[70] = "43";
 comments[70] = "Id Pregunta: 9034. ";


//  Id pregunta: 9131 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  Indique la frase correcta acerca de las arquitecturas de microprocesadores";
 choices[71]= new Array();
 choices[71][0] = "La arquitectura CISC es m&aacute;s moderna que la arquitectura RISC y busca ampliar el conjunto de instrucciones de &eacute;sta.";
 choices[71][1] = "La arquitectura RISC dispone de un n&uacute;mero reducido de instrucciones y gran variedad de registros de uso dedicado.";
 choices[71][2] = "La arquitectura RISC maneja instrucciones con forma to regular y complejos modos de direccionamiento";
 choices[71][3] = "La arquitectura CISC dispone de instrucciones complejas y dependiendo de ellas maneja diferentes longitues de palabra.";
 answers[71] = choices[71][3];
 units[71] = "46";
 comments[71] = "Id Pregunta: 9131. Examen TIC-A1 2011";


//  Id pregunta: 9249 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;Qu&eacute; son los hives en Windows?";
 choices[72]= new Array();
 choices[72][0] = "Grupos de archivos";
 choices[72][1] = "La organizaci&oacute;n del registro organizado en un &uacute;nico volumen.";
 choices[72][2] = "Cada grupo masivo de archivos se mantiene en varios archivos separados.";
 choices[72][3] = "Todas son correctas.";
 answers[72] = choices[72][0];
 units[72] = "56";
 comments[72] = "Id Pregunta: 9249. ";


//  Id pregunta: 9379 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  Acerca de las recomendaciones relativas a X.25, se puede afirmar:";
 choices[73]= new Array();
 choices[73][0] = "X.21 define el interfaz entre ETD y ETCD para terminales que operan en modo paquete en redes p&uacute;blicas";
 choices[73][1] = "X.25 especifica los procedimientos de conexi&oacute;n en redes p&uacute;blicas X.25 entre s&iacute;.";
 choices[73][2] = "X.75 define el Interfaz entre ETD y ETCD para un equipo de datos arr&iacute;tmico con acceso a la facilidad de empaquetado/desempaquetado de datos (PAD), en una red X.25";
 choices[73][3] = "X.75 especifica los procedimientos de conexi&oacute;n en redes p&uacute;blicas X.25 entre s&iacute;.";
 answers[73] = choices[73][3];
 units[73] = "101";
 comments[73] = "Id Pregunta: 9379. ";


//  Id pregunta: 9454 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Seg&uacute;n Codd, una entidad en la que todos los atributos dependen funcionalmente de la clave est&aacute;, al menos, en:";
 choices[74]= new Array();
 choices[74][0] = "Primera Forma Normal.";
 choices[74][1] = "Segunda Forma Normal.";
 choices[74][2] = "Tercera Forma Normal.";
 choices[74][3] = "Forma Normal de Boyce-Codd.";
 answers[74] = choices[74][0];
 units[74] = "58";
 comments[74] = "Id Pregunta: 9454. NULL";


//  Id pregunta: 9690 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  Respecto a las herramientas de explotaci&oacute;n:";
 choices[75]= new Array();
 choices[75][0] = "'Query and reporting' sirve para la elaboraci&oacute;n de informes y listados a partir de la informaci&oacute;n de los almacenes de datos y los datamart.";
 choices[75][1] = "El cuadro de mando anal&iacute;tico contiene informaci&oacute;n de toda la organizaci&oacute;n.";
 choices[75][2] = "OLAP no es una herramienta de explotaci&oacute;n.";
 choices[75][3] = "A es falsa.";
 answers[75] = choices[75][0];
 units[75] = "68";
 comments[75] = "Id Pregunta: 9690. ";


//  Id pregunta: 9722 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  El art&iacute;culo 5 de la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, establece la obligaci&oacute;n para los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, de conservar los datos (referidos en su art&iacute;culo 3), durante un plazo de";
 choices[76]= new Array();
 choices[76][0] = "48 meses.";
 choices[76][1] = "24 meses.";
 choices[76][2] = "12 meses.";
 choices[76][3] = "6 meses.";
 answers[76] = choices[76][2];
 units[76] = "30";
 comments[76] = "Id Pregunta: 9722. Examen TIC-A1 2013";


//  Id pregunta: 9972 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de los siguientes se corresponde con un m&oacute;dulo dentro de un ERP (Enterprise Resource Planning)?";
 choices[77]= new Array();
 choices[77][0] = "Recursos Humanos";
 choices[77][1] = "Planificaci&oacute;n Estrat&eacute;gica";
 choices[77][2] = "Seguridad de Informaci&oacute;n";
 choices[77][3] = "HelpDesk";
 answers[77] = choices[77][0];
 units[77] = "65";
 comments[77] = "Id Pregunta: 9972. Examen TICA1, Xunta de GaliciA, 2011";


//  Id pregunta: 9974 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Los sistemas de gesti&oacute;n de contenidos, (CMS en ingl&eacute;s), son un tipo especial de software orientado a la creaci&oacute;n, administraci&oacute;n y distribuci&oacute;n de contenidos digitales. Indique cu&aacute;l de las siguientes afirmaciones NO es correcta.";
 choices[78]= new Array();
 choices[78][0] = "Disponen de una interfaz que permite controlar una o varias bases de datos donde se aloja el contenido del sitio.";
 choices[78][1] = "Permiten manejar de forma independiente el contenido y el dise&ntilde;o.";
 choices[78][2] = "Permiten una gesti&oacute;n de roles de usuarios: administrador, autor, editor, lector, ...";
 choices[78][3] = "Garantizan la accesibilidad de los portales y contenidos digitales";
 answers[78] = choices[78][3];
 units[78] = "95";
 comments[78] = "Id Pregunta: 9974. Examen TICA1, Xunta de GaliciA, 2011";


//  Id pregunta: 10031 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Indicar cu&aacute;l de las siguientes direcciones IP puede ser asignada a un host en la siguiente subred 135.26.41.80/28";
 choices[79]= new Array();
 choices[79][0] = "135.26.41.94";
 choices[79][1] = "135.26.41.95";
 choices[79][2] = "135.26.41.96 ";
 choices[79][3] = "135.26.41.97";
 answers[79] = choices[79][0];
 units[79] = "100";
 comments[79] = "Id Pregunta: 10031. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10087 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Qu&eacute; metodolog&iacute;a &aacute;gil se basa en principios como &ldquo;decidir lo m&aacute;s tarde posible&rdquo; y &ldquo;reaccionar tan r&aacute;pido como sea posible?";
 choices[80]= new Array();
 choices[80][0] = "FDD";
 choices[80][1] = "LSD";
 choices[80][2] = "ASD";
 choices[80][3] = "Kanban";
 answers[80] = choices[80][1];
 units[80] = "79";
 comments[80] = "Id Pregunta: 10087. NULL";


//  Id pregunta: 10180 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Respecto las relaciones de agregaci&oacute;n y composici&oacute;n entre clases de objetos, es cierto que:";
 choices[81]= new Array();
 choices[81][0] = "La composici&oacute;n expresa una relaci&oacute;n &quot;todo / parte&quot; o &quot;forma parte de&quot; entre los objetos implicados. La agregaci&oacute;n es una forma m&aacute;s fuerte de composici&oacute;n, de forma que si el &quot;objeto hijo&quot; es eliminado o desaparece, el &quot;objeto padre&quot; deja de existir.";
 choices[81][1] = "La agregaci&oacute;n expresa una relaci&oacute;n &quot;todo / parte&quot; o &quot;forma parte de&quot; entre los objetos implicados. La composici&oacute;n es una forma m&aacute;s fuerte de agregaci&oacute;n, de forma que si el &quot;objeto hijo&quot; es eliminado o desaparece, el &quot;objeto padre&quot; deja de existir.";
 choices[81][2] = "La a) y adem&aacute;s, la composici&oacute;n se representa en el diagrama de clases mediante una l&iacute;nea de asociaci&oacute;n entre las clases implicadas, finalizada en un rombo relleno en el extremo del &quot;todo&quot; ";
 choices[81][3] = "La b) y adem&aacute;s, la agregaci&oacute;n se representa en el diagrama de clases mediante una l&iacute;nea de asociaci&oacute;n entre las clases implicadas, finalizada en un rombo vac&iacute;o en el extremo del &quot;todo&quot; ";
 answers[81] = choices[81][3];
 units[81] = "82";
 comments[81] = "Id Pregunta: 10180. ";


//  Id pregunta: 10326 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cual no es una funci&oacute;n del servidor de aplicaciones?";
 choices[82]= new Array();
 choices[82][0] = "Multiplexar accesos a la base de datos mediante el gestor transaccional";
 choices[82][1] = "Aislar la l&oacute;gica de negocio de la capa de persistencia";
 choices[82][2] = "Reutilizar objetos de aplicaciones de departamentos distintos";
 choices[82][3] = "Adecuar los mapeos objeto-relacionales a las particularidades del diccionario de datos";
 answers[82] = choices[82][3];
 units[82] = "114";
 comments[82] = "Id Pregunta: 10326. ";


//  Id pregunta: 10342 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Seg&uacute;n lo recogido en el Texto Refundido de la Ley de propiedad Intelectual, se&ntilde;ale la respuesta incorrecta:";
 choices[83]= new Array();
 choices[83][0] = "La protecci&oacute;n de un programa de ordenador comprende tambi&eacute;n su documentaci&oacute;n preparatoria, documentaci&oacute;n t&eacute;cnica y manuales de uso";
 choices[83][1] = "La protecci&oacute;n de un programa de ordenador se extiende a cualesquiera versiones sucesivas del programa, as&iacute; como a los programas derivados";
 choices[83][2] = "La protecci&oacute;n mediante los derechos de autor incluye las ideas y principios en los que se basan cualquiera de los elementos de un programa de ordenador incluidos los que sirven de fundamento a sus interfaces";
 choices[83][3] = "Si un programa forma parte de una patente, tambi&eacute;n estar&aacute; protegido por la Ley de Propiedad Industrial";
 answers[83] = choices[83][2];
 units[83] = "36";
 comments[83] = "Id Pregunta: 10342. Consultar Art. 96 del Real Decreto Legislativo 1/1996";


//  Id pregunta: 10371 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Se&ntilde;ale cu&aacute;l de los siguientes no puede considerarse un riesgo que puede limitar el &eacute;xito un proyecto de ingenier&iacute;a de software:";
 choices[84]= new Array();
 choices[84][0] = "Excesiva rotaci&oacute;n de personal en la division encargada del desarrollo";
 choices[84][1] = "Al servidor de Eclipse le falta un parche de seguridad y pueden atacarlo";
 choices[84][2] = "El cliente no habla nuestro idioma ni el ingl&eacute;s y tenemos un traductor no muy experto, a menudo hay confusi&oacute;n entre lo que nos pide y lo que entendemos.";
 choices[84][3] = "Se va a usar una tecnolog&iacute;a de desarrollo de la que apenas haya conocimiento y referencia de proyectos exitosos con la misma";
 answers[84] = choices[84][1];
 units[84] = "28";
 comments[84] = "Id Pregunta: 10371. ";


//  Id pregunta: 10459 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Indique cu&aacute;l es el m&eacute;todo indicado por el W3C para la optimizaci&oacute;n de la transmisi&oacute;n de mensajes SOAP:";
 choices[85]= new Array();
 choices[85][0] = "XOP XML-binary Optimized Protocol";
 choices[85][1] = "XOP XML-binary Optimized Packaging";
 choices[85][2] = "MTOM Message Transmission Optimization Mechanism";
 choices[85][3] = "REST Represantional State Transfer";
 answers[85] = choices[85][2];
 units[85] = "51";
 comments[85] = "Id Pregunta: 10459. NULL";


//  Id pregunta: 10496 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cual de las siguientes es una implementaci&oacute;n del protocolo LDAP?";
 choices[86]= new Array();
 choices[86][0] = "eDirectory";
 choices[86][1] = "iPlanet";
 choices[86][2] = "Active Directory";
 choices[86][3] = "Todos lo son";
 answers[86] = choices[86][3];
 units[86] = "74, 106";
 comments[86] = "Id Pregunta: 10496. eDirectory es la implementaci&oacute;n de Novell, e iPlanet la de Sun";


//  Id pregunta: 10504 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cual es la impedancia de los cables definida en la ISO 11801 para las versiones de la norma posteriores a 2002?";
 choices[87]= new Array();
 choices[87][0] = "120 ?";
 choices[87][1] = "150 ?";
 choices[87][2] = "100 ?";
 choices[87][3] = "Todos los anteriores";
 answers[87] = choices[87][2];
 units[87] = "99";
 comments[87] = "Id Pregunta: 10504. A partir del 2002, solo se consideran validas las impedancias de 100 ?";


//  Id pregunta: 10632 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  La actividad &ldquo;Elaboraci&oacute;n del Modelo de Datos&rdquo; forma parte del proceso de M&eacute;trica v3:";
 choices[88]= new Array();
 choices[88][0] = "Estudio de Viabilidad del Sistema (EVS)";
 choices[88][1] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n (PSI)";
 choices[88][2] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[88][3] = "Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI)";
 answers[88] = choices[88][2];
 units[88] = "86";
 comments[88] = "Id Pregunta: 10632. ";


//  Id pregunta: 10692 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  La Ley 39/2015 es de aplicaci&oacute;n obligatoria:";
 choices[89]= new Array();
 choices[89][0] = "&Uacute;nicamente para la Administraci&oacute;n General del Estado.";
 choices[89][1] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Administraci&oacute;n Local.";
 choices[89][2] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas,  Administraci&oacute;n Local y Sector P&uacute;blico Institucional.";
 choices[89][3] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas,  Administraci&oacute;n Local,  Sector P&uacute;blico Institucional y Corporaciones de Derecho P&uacute;blico.";
 answers[89] = choices[89][2];
 units[89] = "30";
 comments[89] = "Id Pregunta: 10692. ";


//  Id pregunta: 10776 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Se&ntilde;ale la respuesta correcta, seg&uacute;n la Ley Org&aacute;nica 15/1999, el Director de la Agencia de Protecci&oacute;n de Datos es nombrado de entre:";
 choices[90]= new Array();
 choices[90][0] = "Los miembros del Consejo Consultivo, mediante Orden Ministerial, y su mandato es de 4 a&ntilde;os.";
 choices[90][1] = "Los miembros del Consejo Consultivo, mediante Real Decreto, y su mandato es de 4 a&ntilde;os.";
 choices[90][2] = "Los miembros del Consejo Asesor del Ministerio de Justicia, mediante Orden Ministerial, y su mandato es de 5 a&ntilde;os.";
 choices[90][3] = "Los miembros del Consejo de Gobierno, mediante Real Decreto, y su mandato es de 5 a&ntilde;os.";
 answers[90] = choices[90][1];
 units[90] = "29";
 comments[90] = "Id Pregunta: 10776. Examen GSI 2014";


//  Id pregunta: 10923 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Respecto al Registro Electr&oacute;nico Com&uacute;n (REC), se&ntilde;ale la respuesta correcta:";
 choices[91]= new Array();
 choices[91][0] = "El REC debe admitir cualquier solicitud, escrito o comunicaci&oacute;n dirigida a cualquiera de las Administraciones P&uacute;blicas espa&ntilde;olas.";
 choices[91][1] = "La presentaci&oacute;n de solicitudes dirigidas a entidades que no hayan sido activadas en el REC se tendr&aacute; por no realizada.";
 choices[91][2] = "El REC podr&aacute; ser habilitado para la remisi&oacute;n, recepci&oacute;n e intercambio de solicitudes de la competencia de las Administraciones Auton&oacute;micas y Locales, en la forma que se determine en los correspondientes Convenios.";
 choices[91][3] = "En coordinaci&oacute;n con las Administraciones destinatarias, el Ministerio de Hacienda y Administraciones P&uacute;blicas ser&aacute; responsable de la custodia y manejo de todos los ficheros generados por el REC.";
 answers[91] = choices[91][2];
 units[91] = "44";
 comments[91] = "Id Pregunta: 10923. TIC A1 AGE 2014";


//  Id pregunta: 11113 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Indique qu&eacute; tipos de entidades pueden conectarse a la Red Sara:";
 choices[92]= new Array();
 choices[92][0] = "Organismo p&uacute;blicos";
 choices[92][1] = "Ministerios";
 choices[92][2] = "Comunidades Aut&oacute;nomas";
 choices[92][3] = "Todas las anteriores";
 answers[92] = choices[92][3];
 units[92] = "30";
 comments[92] = "Id Pregunta: 11113. ";


//  Id pregunta: 11118 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes no es un derecho de los ciudadanos de acuerdo con la ley 11/2007?";
 choices[93]= new Array();
 choices[93][0] = "A relacionarse directamente con las AAPP.";
 choices[93][1] = "A no aportar datos y documentos que obren en poder de las Administraciones P&uacute;blicas";
 choices[93][2] = "A la conservaci&oacute;n en formato electr&oacute;nico por las Administraciones P&uacute;blicos de los documentos electr&oacute;nicos que formen parte de un expediente por duplicado";
 choices[93][3] = "A elegir en cada momento el canal a trav&eacute;s del cual se relacionen con la Administraci&oacute;n";
 answers[93] = choices[93][2];
 units[93] = "43";
 comments[93] = "Id Pregunta: 11118. ";


//  Id pregunta: 11259 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Los certificados cualificados de firma electr&oacute;nica contendr&aacute;n:";
 choices[94]= new Array();
 choices[94][0] = "Al menos el nombre del firmante o un seud&oacute;nimo; si se usara un seud&oacute;nimo, se indicar&aacute; claramente.";
 choices[94][1] = "Los datos relativos al inicio y final del per&iacute;odo de validez del certificado.";
 choices[94][2] = "La localizaci&oacute;n de los servicios que pueden utilizarse para consultar el estado de validez del certificado cualificado.";
 choices[94][3] = "Todas son verdaderas.";
 answers[94] = choices[94][3];
 units[94] = "73";
 comments[94] = "Id Pregunta: 11259. ";


//  Id pregunta: 11266 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Indique los nuevos procesos que a&ntilde;ade la versi&oacute;n 3 de ITIL sobre la anterior en la fase de operaci&oacute;n del servicio:";
 choices[95]= new Array();
 choices[95][0] = "Gesti&oacute;n de incidencias, gesti&oacute;n de peticiones y gesti&oacute;n de alertas.";
 choices[95][1] = "Gesti&oacute;n de eventos, gesti&oacute;n de peticiones y gesti&oacute;n de acceso a los servicios TI.";
 choices[95][2] = "Gesti&oacute;n de los proveedores y gesti&oacute;n de la seguridad TI.";
 choices[95][3] = "No existe tal fase de operaci&oacute;n dentro de la versi&oacute;n 3 de ITIL.";
 answers[95] = choices[95][1];
 units[95] = "98";
 comments[95] = "Id Pregunta: 11266. ";


//  Id pregunta: 11468 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de las siguientes NO es una facultad del Gobierno para la administraci&oacute;n del espectro?";
 choices[96]= new Array();
 choices[96][0] = "La adecuada utilizaci&oacute;n del espectro mediante equipos y aparatos.";
 choices[96][1] = "Establecer condiciones discriminatorias respecto a los t&iacute;tulos habilitantes para el uso del dominio p&uacute;blico radioel&eacute;ctrico.";
 choices[96][2] = "Garantizar el uso efectivo y eficaz de las frecuencias.";
 choices[96][3] = "Elaborar y aprobar los planes de utilizaci&oacute;n del espectro.";
 answers[96] = choices[96][1];
 units[96] = "110";
 comments[96] = "Id Pregunta: 11468. ";


//  Id pregunta: 11594 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  El metadato m&iacute;nimo obligatorio 'Origen' de un documento electr&oacute;nico indica:";
 choices[97]= new Array();
 choices[97][0] = "El &oacute;rgano generador del documento o que realiza la captura del mismo.";
 choices[97][1] = "La naturaleza del documento; esto es, si se trata de un original o una copia electr&oacute;nica.";
 choices[97][2] = "Si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n";
 choices[97][3] = "El lugar de procedencia del documento.";
 answers[97] = choices[97][2];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11594. ";


//  Id pregunta: 11704 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Las direcciones globales en ipv6 empiezan de la manera siguiente:";
 choices[98]= new Array();
 choices[98][0] = "2000::/3";
 choices[98][1] = "FF00::/10";
 choices[98][2] = "FE00::/12";
 choices[98][3] = "::1/128";
 answers[98] = choices[98][0];
 units[98] = "100";
 comments[98] = "Id Pregunta: 11704. NULL";


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


