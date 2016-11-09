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

//  Id pregunta: 365 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Los criterios de Savage, Wald, Laplace, Hurwicz&hellip;, est&aacute;n relacionados con:";
 choices[0]= new Array();
 choices[0][0] = "Teor&iacute;as de medici&oacute;n del coste del HW y SW";
 choices[0][1] = "Teor&iacute;as de optimizaci&oacute;n de los recursos humanos";
 choices[0][2] = "Teor&iacute;as de la decisi&oacute;n ";
 choices[0][3] = "Teor&iacute;as de calidad del SW";
 answers[0] = choices[0][2];
 units[0] = "21";
 comments[0] = "Id Pregunta: 365. ";


//  Id pregunta: 622 AÃ±o de creación de pregunta: 2006-01-01
 questions[1]= "2)  En teor&iacute;a de la decisi&oacute;n multicriterio discreta (DMD), el m&eacute;todo QUALIFLEX se basa en:";
 choices[1]= new Array();
 choices[1][0] = "evaluaciones cardinales y pesos cardinales";
 choices[1][1] = "evaluaciones ordinales y pesos cardinales";
 choices[1][2] = "evaluaciones ordinales y pesos ordinales";
 choices[1][3] = "evaluaciones cardinales y pesos ordinales";
 answers[1] = choices[1][1];
 units[1] = "34";
 comments[1] = "Id Pregunta: 622. ";


//  Id pregunta: 728 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  En una base de datos las vistas";
 choices[2]= new Array();
 choices[2][0] = "Definen la estructura y organizaci&oacute;n de los datos";
 choices[2][1] = "Permiten restringir el acceso, permitiendo que diferentes usuarios s&oacute;lo vean ciertas filas o ciertas columnas de una tabla";
 choices[2][2] = "Se crean autom&aacute;ticamente cuando una consulta se realiza m&aacute;s de una vez en la misma sesi&oacute;n";
 choices[2][3] = "S&oacute;lo pueden ser creadas por el usuario propietario del esquema";
 answers[2] = choices[2][1];
 units[2] = "57";
 comments[2] = "Id Pregunta: 728. Examen TIC MAP B 2004";


//  Id pregunta: 880 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l es el significado de ASCII?:";
 choices[3]= new Array();
 choices[3][0] = "American System Code for Input Information";
 choices[3][1] = "Asynchonous System Code fot International Information";
 choices[3][2] = "American Standard Code for Input Information";
 choices[3][3] = "American Standard Code for Information Interchange";
 answers[3] = choices[3][3];
 units[3] = "47";
 comments[3] = "Id Pregunta: 880. ";


//  Id pregunta: 958 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Con referencia al modelo relacional, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[4]= new Array();
 choices[4][0] = "El n&uacute;mero de dominios de una relaci&oacute;n define su grado";
 choices[4][1] = "La extensi&oacute;n u ocurrencia de una relaci&oacute;n es una tabla donde las filas corresponden a los atributos";
 choices[4][2] = "Cada atributo, o propiedad con inter&eacute;s informacional de una relaci&oacute;n, est&aacute; asociado a un dominio del que toma sus valores";
 choices[4][3] = "El orden de las filas dentro de una tabla es determinante";
 answers[4] = choices[4][2];
 units[4] = "58";
 comments[4] = "Id Pregunta: 958. ";


//  Id pregunta: 1054 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  El sistema de encriptaci&oacute;n RSA (Rivest, Shamir y Adleman, 1978)&hellip;:";
 choices[5]= new Array();
 choices[5][0] = "El receptor del mensaje debe conocer la clave p&uacute;blica para descifrarlo";
 choices[5][1] = "Se basa en la seguridad que confiere la dificultad de factorizar n&uacute;meros grandes";
 choices[5][2] = "Es un sistema de encriptaci&oacute;n sim&eacute;trico";
 choices[5][3] = "Garantiza la seguridad a&uacute;n utilizando n&uacute;meros primos de menos de veinte cifras";
 answers[5] = choices[5][1];
 units[5] = "72";
 comments[5] = "Id Pregunta: 1054. ";


//  Id pregunta: 1204 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  La 3FN (Tercera Forma Normal), definida por Codd, dice:";
 choices[6]= new Array();
 choices[6][0] = "Una relaci&oacute;n est&aacute; en 3FN (Tercera Forma Normal), si no incluye ning&uacute;n grupo repetitivo";
 choices[6][1] = "Una relaci&oacute;n est&aacute; en 3FN (Tercera Forma Normal), si todos los atributos que no forman parte de la clave primaria son mutuamente independientes y dependen funcionalmente de forma completa de la clave";
 choices[6][2] = "Una relaci&oacute;n est&aacute; en 3FN (Tercera Forma Normal), si est&aacute; en 2FN (Segunda Forma Normal) y adem&aacute;s cualquiera de sus atributos no primarios tienen una dependencia plena con cada una de las claves y no con partes de &eacute;sta";
 choices[6][3] = "Elimina dependencias multivaluadas";
 answers[6] = choices[6][1];
 units[6] = "58";
 comments[6] = "Id Pregunta: 1204. NULL";


//  Id pregunta: 1322 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  RSA es:";
 choices[7]= new Array();
 choices[7][0] = "un algoritmo de clave privada";
 choices[7][1] = "un algoritmo de clave p&uacute;blica";
 choices[7][2] = "un m&eacute;todo de criptoan&aacute;lisis diferencial";
 choices[7][3] = "una infraestructura de clave p&uacute;blica";
 answers[7] = choices[7][1];
 units[7] = "72";
 comments[7] = "Id Pregunta: 1322. ";


//  Id pregunta: 1437 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; es MIDI?:";
 choices[8]= new Array();
 choices[8][0] = "Un formato de codificaci&oacute;n de im&aacute;genes digitales";
 choices[8][1] = "Conjunto de especificaciones y tecnolog&iacute;as que proponen normas para el ensamblaje de la arquitectura de ordenadores";
 choices[8][2] = "Un protocolo para codificar instrucciones para que un sintetizador genere notas musicales";
 choices[8][3] = "Servicio de transferencia autom&aacute;tica de textos entre memorias de dos terminales";
 answers[8] = choices[8][2];
 units[8] = "47";
 comments[8] = "Id Pregunta: 1437. ";


//  Id pregunta: 1446 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es correcta al referirnos a los dos tipos de interfaces existentes?:";
 choices[9]= new Array();
 choices[9][0] = "La utilizaci&oacute;n diaria de la interfaz basada en comandos es m&aacute;s &aacute;gil que la basada en men&uacute;, pero su aprendizaje es m&aacute;s costoso";
 choices[9][1] = "A medida que el usuario va ganando destreza la interfaz basada en men&uacute; tiende a hacerse tediosa debido al elevado n&uacute;mero de opciones y funciones que proporcionan";
 choices[9][2] = "Con la interfaz basada en men&uacute; el usuario tiene la continua sensaci&oacute;n de sentirse guiado";
 choices[9][3] = "La interfaz basada en comando es m&aacute;s intuitiva que la basada en men&uacute;";
 answers[9] = choices[9][3];
 units[9] = "47";
 comments[9] = "Id Pregunta: 1446. ";


//  Id pregunta: 1615 AÃ±o de creación de pregunta: 2003-01-01
 questions[10]= "11)  Las t&eacute;cnicas orientadas a garantizar la seguridad en las operaciones relacionadas con los servicios de certificaci&oacute;n y firma electr&oacute;nica, deben cumplir los principios de:";
 choices[10]= new Array();
 choices[10][0] = "Confidencialidad, Seguridad, Integridad, y Autenticaci&oacute;n.";
 choices[10][1] = "Confidencialidad, Integridad, Autenticaci&oacute;n, y No Repudio.";
 choices[10][2] = "Disponibilidad, Integridad, Autenticaci&oacute;n, y No Repudio.";
 choices[10][3] = "Disponibilidad, Seguridad, Integridad, y Autenticaci&oacute;n.";
 answers[10] = choices[10][1];
 units[10] = "72";
 comments[10] = "Id Pregunta: 1615. Junta Andaluc&iacute;a";


//  Id pregunta: 1680 AÃ±o de creación de pregunta: 2004-01-01
 questions[11]= "12)  &iquest;Qu&eacute; es un JNI?";
 choices[11]= new Array();
 choices[11][0] = "Es una interfaz que permite el acceso a bases de datos desde programas java";
 choices[11][1] = "Es una interfaz de programaci&oacute;n para gestionar entornos de ventanas en java";
 choices[11][2] = "Es una interfaz de programaci&oacute;n que facilita el acceso, generaci&oacute;n y desarrollo de componentes o programas para acceder a ficheros XML";
 choices[11][3] = "Es una interfaz est&aacute;ndar de programaci&oacute;n para llamar a m&eacute;todos nativos escritos en otros lenguajes, desde un programa java";
 answers[11] = choices[11][3];
 units[11] = "60";
 comments[11] = "Id Pregunta: 1680. NULL";


//  Id pregunta: 1808 AÃ±o de creación de pregunta: 2006-01-01
 questions[12]= "13)  En un GIS, el modelo vectorial ";
 choices[12]= new Array();
 choices[12][0] = "Utiliza nodos, l&iacute;neas y pol&iacute;gonos para representar los datos geogr&aacute;ficos.";
 choices[12][1] = "Cada l&iacute;nea se define por todos los puntos intermedios, almacenando todos ellos.";
 choices[12][2] = "Utiliza m&aacute;s espacio de almacenamiento que el modelo r&aacute;ster.";
 choices[12][3] = "Es preferible al modelo r&aacute;ster para superposici&oacute;n de planos.";
 answers[12] = choices[12][0];
 units[12] = "67";
 comments[12] = "Id Pregunta: 1808. NULL";


//  Id pregunta: 1983 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l no es una innovaci&oacute;n aplicable al modelo en cascada que permita mejorar algunas de las deficiencias del modelo y aumentar su eficacia?:";
 choices[13]= new Array();
 choices[13][0] = "Utilizaci&oacute;n de herramientas CASE";
 choices[13][1] = "Codificaci&oacute;n y pruebas de los m&oacute;dulos de m&aacute;s bajo nivel en primer lugar";
 choices[13][2] = "Realizaci&oacute;n de fases en paralelo";
 choices[13][3] = "Utilizar t&eacute;cnicas de an&aacute;lisis de riesgos y de coste-beneficio";
 answers[13] = choices[13][1];
 units[13] = "76";
 comments[13] = "Id Pregunta: 1983. ";


//  Id pregunta: 2644 AÃ±o de creación de pregunta: 2003-01-01
 questions[14]= "15)  En el modelo Entidad Relaci&oacute;n, &iquest; qu&eacute; es una entidad regular?";
 choices[14]= new Array();
 choices[14][0] = "Es aquella que tiene existencia por si misma, no depende de ninguna otra entidad.";
 choices[14][1] = "Es aquella que su existencia depende de otra entidad del modelo y sin la otra entidad no tiene sentido &eacute;sta.";
 choices[14][2] = " Una entidad en la que el n&uacute;mero m&aacute;ximo de ocurrencias que pueden estar asociadas a ella con una ocurrencia de otra u otras entidades participantes es 1.";
 choices[14][3] = "  Una entidad que tiene atributos derivados.";
 answers[14] = choices[14][0];
 units[14] = "80";
 comments[14] = "Id Pregunta: 2644. ";


//  Id pregunta: 2696 AÃ±o de creación de pregunta: 2003-01-01
 questions[15]= "16)  Los sistemas de recuperaci&oacute;n de informaci&oacute;n llamados de &quot;Lenguaje natural&quot; se basan en la t&eacute;cnica:";
 choices[15]= new Array();
 choices[15][0] = "Hojeo-ojeo.";
 choices[15][1] = "Booleana.";
 choices[15][2] = "Retroalimentaci&oacute;n.";
 choices[15][3] = "De &iacute;ndices invertidos.";
 answers[15] = choices[15][3];
 units[15] = "94";
 comments[15] = "Id Pregunta: 2696. ";


//  Id pregunta: 2727 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes factores no es necesario tener en cuenta para guiar a una organizaci&oacute;n hacia el futuro?";
 choices[16]= new Array();
 choices[16][0] = "El mercado";
 choices[16][1] = "La misi&oacute;n";
 choices[16][2] = "Metas y objetivos";
 choices[16][3] = "Subvenciones";
 answers[16] = choices[16][3];
 units[16] = "77";
 comments[16] = "Id Pregunta: 2727. ";


//  Id pregunta: 3058 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Dentro del objeto ASP Server el m&eacute;todo que detiene la ejecuci&oacute;n de la p&aacute;gina actual y transfiere el control a la p&aacute;gina indicada en &ldquo;url&rdquo;, llevando el entorno del usuario actual a la nueva p&aacute;gina se denomina:";
 choices[17]= new Array();
 choices[17][0] = "Transfer (&ldquo;url&rdquo;)";
 choices[17][1] = "Execute (&ldquo;url&rdquo;)";
 choices[17][2] = "GotoURL (&ldquo;url&rdquo;)";
 choices[17][3] = "GoURL (&ldquo;url&rdquo;)";
 answers[17] = choices[17][1];
 units[17] = "115";
 comments[17] = "Id Pregunta: 3058. ";


//  Id pregunta: 3180 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes respuestas define el formato de la trama en Ethernet V2?:";
 choices[18]= new Array();
 choices[18][0] = "CRC, longitud trama, direcci&oacute;n origen, direcci&oacute;n destino, datos";
 choices[18][1] = "Pre&aacute;mbulo, tipo trama, direcci&oacute;n origen, direcci&oacute;n destino, datos y CRC";
 choices[18][2] = "Pre&aacute;mbulo, direcci&oacute;n destino, direcci&oacute;n origen, tipo trama, datos y CRC";
 choices[18][3] = "Pre&aacute;mbulo, direcci&oacute;n origen, direcci&oacute;n destino, longitud trama, datos y CRC";
 answers[18] = choices[18][2];
 units[18] = "100";
 comments[18] = "Id Pregunta: 3180. NULL";


//  Id pregunta: 3275 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  &iquest;Qu&eacute; afirmaci&oacute;n de las siguientes es verdadera en relaci&oacute;n con las funciones de conexi&oacute;n del modelo OSI?";
 choices[19]= new Array();
 choices[19][0] = "El multiplexado es la conexi&oacute;n de varias conexiones de nivel N en una conexi&oacute;n de nivel N-1";
 choices[19][1] = "La concatenaci&oacute;n consiste en unir varias N-PDU en una (N-1)PDU";
 choices[19][2] = "La segmentaci&oacute;n consiste en dividir una N-SDU en varias (N-1)SDU";
 choices[19][3] = "El reensamblado es la operaci&oacute;n contraria a la concatenaci&oacute;n";
 answers[19] = choices[19][0];
 units[19] = "100";
 comments[19] = "Id Pregunta: 3275. ";


//  Id pregunta: 3411 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Funciones como contabilidad, enrutamiento, control de flujo, control de congesti&oacute;n o direccionamiento pertenecen al:";
 choices[20]= new Array();
 choices[20][0] = "nivel de transporte";
 choices[20][1] = "nivel de enlace";
 choices[20][2] = "nivel de red";
 choices[20][3] = "son funciones presentes en varios niveles";
 answers[20] = choices[20][3];
 units[20] = "100";
 comments[20] = "Id Pregunta: 3411. NULL";


//  Id pregunta: 3488 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En comunicaciones de datos, &iquest;sabe lo que es  'overrun'?:";
 choices[21]= new Array();
 choices[21][0] = "Cuando el sistema operativo o el procesador de comunicaciones paran por un exceso de temperatura";
 choices[21][1] = "Un switch que permite al sistema tener m&aacute;s rendimiento (bits /seg) bajo ciertas condiciones";
 choices[21][2] = "Una situaci&oacute;n en la que algunos paquetes pueden perderse debido a que llegan m&aacute;s r&aacute;pidamente de lo que pueden ser procesados";
 choices[21][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[21] = choices[21][2];
 units[21] = "102";
 comments[21] = "Id Pregunta: 3488. ";


//  Id pregunta: 3558 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En telefon&iacute;a m&oacute;vil, &iquest;es posible en Espa&ntilde;a cambiar de operador conservando el n&uacute;mero?:";
 choices[22]= new Array();
 choices[22][0] = "S&iacute;, siempre  ";
 choices[22][1] = "No, nunca";
 choices[22][2] = "No, salvo para empresas";
 choices[22][3] = "S&iacute;, dependiendo de los operadores implicados";
 answers[22] = choices[22][0];
 units[22] = "108";
 comments[22] = "Id Pregunta: 3558. ";


//  Id pregunta: 3607 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  La frecuencia de transmisi&oacute;n en MHz de M&oacute;vil a Estaci&oacute;n Base ('uplink') en GSM es:";
 choices[23]= new Array();
 choices[23][0] = "890-915";
 choices[23][1] = "800-825";
 choices[23][2] = "790-815";
 choices[23][3] = "960-985";
 answers[23] = choices[23][0];
 units[23] = "108";
 comments[23] = "Id Pregunta: 3607. ";


//  Id pregunta: 3840 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Sobre los sistemas de gesti&oacute;n de red (NMS - &ldquo;Network Management Systems&rdquo;), indique cual de las siguientes afirmaciones es err&oacute;nea:";
 choices[24]= new Array();
 choices[24][0] = "La mayor&iacute;a de los sistemas de gesti&oacute;n de red utilizan la misma estructura: Los dispositivos en red ejecutan un software (agente de gesti&oacute;n de red) que les permite transmitir alarmas ante la aparici&oacute;n de un problema hacia una estaci&oacute;n de gesti&oacute;n de red.";
 choices[24][1] = "Entre los protocolos de gesti&oacute;n de red mas utilizados se encuentra SNMP (&ldquo;Simple Network Management Protocol&rdquo;) est&aacute;ndar ISO/OSI, y CMIP (&ldquo;Common Management Information Protocol&rdquo;) que forma parte de la familia de protocolos TCP/IP";
 choices[24][2] = "Los agentes de gesti&oacute;n de red son m&oacute;dulos de software que compilan informaci&oacute;n sobre los dispositivos de red en los que residen en una base de datos de estructura jer&aacute;rquica denominada MIB (&ldquo;Management Information Base&rdquo;). ";
 choices[24][3] = "El modelo de sistema de gesti&oacute;n de red de ISO se compone de cinco &aacute;reas conceptuales: Gesti&oacute;n de prestaciones, gesti&oacute;n de configuraci&oacute;n, gesti&oacute;n contable, gesti&oacute;n de fallos y gesti&oacute;n de seguridad";
 answers[24] = choices[24][1];
 units[24] = "104";
 comments[24] = "Id Pregunta: 3840. ";


//  Id pregunta: 3884 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  &iquest;En cu&aacute;l de las siguientes especificaciones de medio del est&aacute;ndar IEEE 802.3, el cable, cuando es de tipo coaxial, tiene una impedancia caracter&iacute;stica de 50 Ohmios?:";
 choices[25]= new Array();
 choices[25][0] = "Especificaciones de medio 10BASE2 y 10BASE5.";
 choices[25][1] = "Especificaci&oacute;n de medio 10BASE-FL.";
 choices[25][2] = " Especificaci&oacute;n de medio 10BASE-T.";
 choices[25][3] = " Especificaci&oacute;n de medio 10BROAD36.";
 answers[25] = choices[25][0];
 units[25] = "99";
 comments[25] = "Id Pregunta: 3884. Junta Andaluc&iacute;a";


//  Id pregunta: 3901 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  La nueva norma llamada WiMAX es:";
 choices[26]= new Array();
 choices[26][0] = "La norma IEEE 802.12";
 choices[26][1] = "Una norma WLAN europea elaborada por el Instituto Europeo de Normas de Telecomunicaciones (ETSI) y es similar a IEEE 802.11a";
 choices[26][2] = "Una norma inal&aacute;mbrica fija que deber&iacute;a estar en condiciones de transmitir 32-56 km con velocidades m&aacute;ximas de datos cercanas a 70 Mbit/s";
 choices[26][3] = "Ninguna de las anteriores es cierta";
 answers[26] = choices[26][2];
 units[26] = "107";
 comments[26] = "Id Pregunta: 3901. NULL";


//  Id pregunta: 4076 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es cierta?";
 choices[27]= new Array();
 choices[27][0] = "El modelo en dos capas no permite la distribuci&oacute;n en dos capas diferentes el interfaz de usuario y la l&oacute;gica de negocio";
 choices[27][1] = "El modelo en 3 capas permite situar en una capa separada los datos";
 choices[27][2] = "El modelo en 3 capas permite una mayor seguridad que el modelo en 2 capas";
 choices[27][3] = "El modelo en 2 capas permite separar en una capa separada los datos";
 answers[27] = choices[27][0];
 units[27] = "113";
 comments[27] = "Id Pregunta: 4076. ";


//  Id pregunta: 4082 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  El protocolo y puerto empleado para la transferencia de p&aacute;ginas web es";
 choices[28]= new Array();
 choices[28][0] = "html y 80";
 choices[28][1] = "http y 80";
 choices[28][2] = "http y 8080";
 choices[28][3] = "ftp y 80";
 answers[28] = choices[28][1];
 units[28] = "113";
 comments[28] = "Id Pregunta: 4082. ";


//  Id pregunta: 4246 AÃ±o de creación de pregunta: 2007-01-01
 questions[29]= "30)  Seg&uacute;n la Ley 11/2007 de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos:";
 choices[29]= new Array();
 choices[29][0] = "Se deja en manos de las propias Administraciones determinar si los ciudadanos van a poder de modo efectivo, o no, relacionarse por medios electr&oacute;nicos con ellas.";
 choices[29][1] = "Afecta s&oacute;lo a la Administraci&oacute;n General del Estado, aunque se espera que el resto de administraciones (auton&oacute;mica y local) adopten algunas de las medidas expresadas en la ley de forma voluntaria.";
 choices[29][2] = "Se garantiza el derecho del ciudadano a no tener que presentar informaci&oacute;n que se encuentre ya en poder de las administraciones.";
 choices[29][3] = "Las Administraciones podr&aacute;n permitir a los ciudadanos que consulten el estado de tramitaci&oacute;n de los procedimientos que se tengan en marcha, pero en ning&uacute;n caso estar&aacute;n obligadas a ello.";
 answers[29] = choices[29][2];
 units[29] = "43";
 comments[29] = "Id Pregunta: 4246. Sobre Proyecto LAECAP";


//  Id pregunta: 4548 AÃ±o de creación de pregunta: 2007-01-01
 questions[30]= "31)  La reserva para uso privativo de cualquier frecuencia del dominio p&uacute;blico radioel&eacute;ctrico a favor de una o varias personas o entidades:";
 choices[30]= new Array();
 choices[30][0] = "No requiere ning&uacute;n tipo de pago al Estado. &Uacute;nicamente es necesaria su notificaci&oacute;n a la Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[30][1] = "Se gravar&aacute; con una tasa anual por reserva del dominio publico radioel&eacute;ctrico.";
 choices[30][2] = "Requiere el pago de una tasa &uacute;nica al inicio de la utilizaci&oacute;n de dichas frecuencias que se negociar&aacute; entre el Estado y el beneficiario de la reserva.";
 choices[30][3] = "Requiere el pago de una tasa a negociar entre el beneficiario de Ia reserva y las personas o entidades que ocupan las bandas de frecuencias adyacentes a la reservada.";
 answers[30] = choices[30][1];
 units[30] = "110";
 comments[30] = "Id Pregunta: 4548. ";


//  Id pregunta: 4690 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes protocolos hace referencia a redes inal&aacute;mbricas?";
 choices[31]= new Array();
 choices[31][0] = "802.1";
 choices[31][1] = "802.3";
 choices[31][2] = " 802.11b";
 choices[31][3] = "802.3u";
 answers[31] = choices[31][2];
 units[31] = "107";
 comments[31] = "Id Pregunta: 4690. Examen 2006 JCYL";


//  Id pregunta: 4837 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  En una situaci&oacute;n donde se ha producido un fallo del sistema que no ha ocasionado da&ntilde;os en la Base de Datos,&iquest;qu&eacute; se utilizar&iacute;a en el proceso de recuperaci&oacute;n?";
 choices[32]= new Array();
 choices[32][0] = "Copias de seguridad y ficheros de punto de sincronismo (checkpoint)";
 choices[32][1] = "Fichero diario (fichero log) para deshacer y rehacer transacciones";
 choices[32][2] = "Rollback de la transacci&oacute;n";
 choices[32][3] = "S&oacute;lo copia de seguridad con p&eacute;rdida de &uacute;ltimas transacciones";
 answers[32] = choices[32][1];
 units[32] = "58";
 comments[32] = "Id Pregunta: 4837. ";


//  Id pregunta: 4923 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Los DTD (Document Type Definition) en tecnolog&iacute;a XML:";
 choices[33]= new Array();
 choices[33][0] = "Definen la estructura del documento XML.";
 choices[33][1] = "Sirven para dar formato a la informaci&oacute;n.";
 choices[33][2] = "Siempre han de estar incluidos en el XML.";
 choices[33][3] = "Contienen elementos y atributos.";
 answers[33] = choices[33][0];
 units[33] = "69";
 comments[33] = "Id Pregunta: 4923. Examen TIC B 2007";


//  Id pregunta: 4949 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  Indique el API (Application Programming Interface) de JAVA que facilita el acceso a registros UDDI(Universal Description, Discovery and Integration):";
 choices[34]= new Array();
 choices[34][0] = "SAAJ";
 choices[34][1] = "JAXR";
 choices[34][2] = "SOAP";
 choices[34][3] = "STAX";
 answers[34] = choices[34][1];
 units[34] = "116";
 comments[34] = "Id Pregunta: 4949. Examen TIC B 2007";


//  Id pregunta: 5006 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Seg&uacute;n Cobit, en un proceso de auditor&iacute;a un objetivo de control en TI se define como:";
 choices[35]= new Array();
 choices[35][0] = "Los soportes inform&aacute;ticos y sus sistemas de backup";
 choices[35][1] = "El resultado deseado implementando procedimientos de control en una actividad de TI particular";
 choices[35][2] = "La compatibilidad del software";
 choices[35][3] = "El tiempo medio entre fallos de los sistemas de TI";
 answers[35] = choices[35][1];
 units[35] = "98";
 comments[35] = "Id Pregunta: 5006. Examen TIC A 2007";


//  Id pregunta: 5175 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  Respecto a los organismos y procesos de normalizaci&oacute;n podemos afirmar:";
 choices[36]= new Array();
 choices[36][0] = "La adopci&oacute;n de las normas internacionales elaboradas en ISO e EIC es obligatoria para los pa&iacute;ses miembros de la UE.";
 choices[36][1] = "Los organismos europeos de normalizaci&oacute;n obligan a sus miembros a adoptar las normas europeas que ellos elaboren.";
 choices[36][2] = "AENOR es una entidad p&uacute;blica empresarial dependiente del Ministerio de Industria.";
 choices[36][3] = "Las normas publicadas por AENOR se conocen como normas IEC.";
 answers[36] = choices[36][1];
 units[36] = "42";
 comments[36] = "Id Pregunta: 5175. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5176 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l no es, seg&uacute;n Pressman, en el modelo de especificaciones de requisitos software, uno de los objetivos a cumplir?";
 choices[37]= new Array();
 choices[37][0] = "Describir lo que el cliente quiere.";
 choices[37][1] = "Determinar, junto con el cliente, la tecnolog&iacute;a a utilizar";
 choices[37][2] = "Establecer una base para la creaci&oacute;n de un dise&ntilde;o de software";
 choices[37][3] = "Definir un conjunto de requisitos que una vez el sistema construido se puedan validar";
 answers[37] = choices[37][1];
 units[37] = "78";
 comments[37] = "Id Pregunta: 5176. ";


//  Id pregunta: 5250 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  Indique la afirmaci&oacute;n falsa relativa al Aseguramiento de la Calidad:";
 choices[38]= new Array();
 choices[38][0] = "Es una de las 4 interfaces definidas en M&eacute;trica v3";
 choices[38][1] = "El objetivo de esta interfaz es proporcionar un marco com&uacute;n de referencia para la definici&oacute;n y puesta marcha planes espec&iacute;ficos de aseguramiento de calidad aplicables a proyectos concretos";
 choices[38][2] = "Sus actividades orientadas a verificar y evaluar la calidad de los productos por un grupo de Aseguramiento de Calidad independiente";
 choices[38][3] = "Estas actividades entran en contradicci&oacute;n con el Plan General de Garant&iacute;a de Calidad (PGGC)";
 answers[38] = choices[38][3];
 units[38] = "87";
 comments[38] = "Id Pregunta: 5250. NULL";


//  Id pregunta: 5425 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  En OLAP, &iquest;Qu&eacute; son las variables complejas?";
 choices[39]= new Array();
 choices[39][0] = "Las que tienen un tipo complejo.";
 choices[39][1] = "Las que se calculan a partir de otras variables.";
 choices[39][2] = "Las que necesitan m&aacute;s de una dimensi&oacute;n para ser almacenadas.";
 choices[39][3] = "Las que no son representables.";
 answers[39] = choices[39][0];
 units[39] = "68";
 comments[39] = "Id Pregunta: 5425. Castilla y Le&oacute;n";


//  Id pregunta: 5486 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  El estudio de las consecuencias que tendr&iacute;a una parada de X tiempo sobre la organizaci&oacute;n se contempla en la metodolog&iacute;a MAGERIT en";
 choices[40]= new Array();
 choices[40][0] = "An&aacute;lisis de riesgos";
 choices[40][1] = "An&aacute;lisis de impacto";
 choices[40][2] = "Disponibilidad";
 choices[40][3] = "Es una metodolog&iacute;a de desarrollo, en ning&uacute;n caso trata an&aacute;lisis del riesgo";
 answers[40] = choices[40][1];
 units[40] = "33";
 comments[40] = "Id Pregunta: 5486. Castilla y Le&oacute;n";


//  Id pregunta: 5628 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  Se&ntilde;ale la diferencia entre SMP y clustering";
 choices[41]= new Array();
 choices[41][0] = "SMP utiliza memoria compartida y el clustering paso de mensaje";
 choices[41][1] = "SMP utiliza paralelismo puro y el clustering memoria compartida ";
 choices[41][2] = "SMP utiliza memoria compartida y el clustering paralelismo puro ";
 choices[41][3] = "SMP utiliza memoria compartida y el clustering paralelismo de datos";
 answers[41] = choices[41][0];
 units[41] = "45";
 comments[41] = "Id Pregunta: 5628. ";


//  Id pregunta: 5782 AÃ±o de creación de pregunta: 2009-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes objetos no forma parte del proveedor de datos del modelo de objetos ADO.NET?";
 choices[42]= new Array();
 choices[42][0] = "Connection.";
 choices[42][1] = "Command.";
 choices[42][2] = "DataAdapter.";
 choices[42][3] = "DataSet.";
 answers[42] = choices[42][3];
 units[42] = "59";
 comments[42] = "Id Pregunta: 5782. MAP 2008 A2";


//  Id pregunta: 5944 AÃ±o de creación de pregunta: 2009-01-01
 questions[43]= "44)  El concepto de Web 2.0 agrupa 3 nociones fundamentales, &iquest;cu&aacute;l de las siguientes no es una de ellas?";
 choices[43]= new Array();
 choices[43][0] = "La posibilidad de participaci&oacute;n activa y de colaboraci&oacute;n de los usuarios en la producci&oacute;n de contenidos";
 choices[43][1] = "Las nuevas interfaces se acercan progresivamente a los est&aacute;ndares de cliente pesado";
 choices[43][2] = "Empleo de contenidos multimedia en las p&aacute;ginas web";
 choices[43][3] = "La capacidad de mezcla de diferentes servicios de distintos sitios en la mismap&aacute;gina.";
 answers[43] = choices[43][2];
 units[43] = "120";
 comments[43] = "Id Pregunta: 5944. ";


//  Id pregunta: 6288 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  Seg&uacute;n Pressman, &iquest;cu&aacute;l de los siguientes no es un objetivo que deba cumplir un modelo de an&aacute;lisis (especificaci&oacute;n)?";
 choices[44]= new Array();
 choices[44][0] = "Establecer una base para la creaci&oacute;n de un dise&ntilde;o software";
 choices[44][1] = "Definir el calendario de ejecuci&oacute;n del proyecto";
 choices[44][2] = "Definir un conjunto de requisitos que una vez el sistema est&eacute; construido se puedan validar";
 choices[44][3] = "Describir lo que el cliente quiere";
 answers[44] = choices[44][1];
 units[44] = "78";
 comments[44] = "Id Pregunta: 6288. ";


//  Id pregunta: 6419 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  Las pautas de accesibilidad de agentes de usuario WAI-W3C, se conocen como:";
 choices[45]= new Array();
 choices[45][0] = "WCAG";
 choices[45][1] = "UAAG";
 choices[45][2] = "ATAG";
 choices[45][3] = "TAW";
 answers[45] = choices[45][1];
 units[45] = "39";
 comments[45] = "Id Pregunta: 6419. NULL";


//  Id pregunta: 6428 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  Jboss es un servidor de aplicaciones desarrollado por:";
 choices[46]= new Array();
 choices[46][0] = "Red Hat";
 choices[46][1] = "Canonical";
 choices[46][2] = "Apache";
 choices[46][3] = "GNU";
 answers[46] = choices[46][0];
 units[46] = "62";
 comments[46] = "Id Pregunta: 6428. NULL";


//  Id pregunta: 6481 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes NO es un algoritmo de enrutamiento?";
 choices[47]= new Array();
 choices[47][0] = "OSPF";
 choices[47][1] = "RIP";
 choices[47][2] = "BGP";
 choices[47][3] = "RARP";
 answers[47] = choices[47][3];
 units[47] = "102";
 comments[47] = "Id Pregunta: 6481. Castilla La Mancha 2009";


//  Id pregunta: 7163 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los ficheros de Linux es cierta?";
 choices[48]= new Array();
 choices[48][0] = "/etc/passwd: s&oacute;lo es accesible para root";
 choices[48][1] = "/etc/shadow: contiene las contrase&ntilde;as encriptadas de los usuarios ";
 choices[48][2] = "/etc/ftpusers: contienes los usuarios que pueden acceder al sistema v&iacute;a ftp";
 choices[48][3] = "/etc/dhcpconfig: contiene informaci&oacute;n de configuraci&oacute;n del cliente DHCP";
 answers[48] = choices[48][1];
 units[48] = "53,54";
 comments[48] = "Id Pregunta: 7163. Examen TIC B 2009";


//  Id pregunta: 7768 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)   En el entorno del lenguaje Java, AWT se refiere a:";
 choices[49]= new Array();
 choices[49][0] = " Una extensi&oacute;n de Swing.";
 choices[49][1] = " Una biblioteca de clases Java para el desarrollo de interfaces gr&aacute;ficas de usuario.";
 choices[49][2] = " Un conjunto de clases gr&aacute;ficas bajo licencia de IBM/Taligent.";
 choices[49][3] = " Una familia de fuentes de caracteres.";
 answers[49] = choices[49][1];
 units[49] = "NULL";
 comments[49] = "Id Pregunta: 7768. Map 2005";


//  Id pregunta: 7860 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)   La sintaxis de transferencia OSI, los metaficheros gr&aacute;ficos, la sintaxis de procedimiento comercial y los elementos de mensajes y datos son normas:";
 choices[50]= new Array();
 choices[50][0] = " Sobre medios magn&eacute;ticos y &oacute;pticos.";
 choices[50][1] = " Para representaci&oacute;n de informaci&oacute;n y datos intercambiados.";
 choices[50][2] = " Del equipo l&oacute;gico.";
 choices[50][3] = " Sobre juegos de caracteres y codificaci&oacute;n.";
 answers[50] = choices[50][1];
 units[50] = "NULL";
 comments[50] = "Id Pregunta: 7860. Map 2005";


//  Id pregunta: 7874 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)   Seg&uacute;n la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, &iquest;c&oacute;mo se define al &laquo;Responsable del fichero o tratamiento&raquo;?";
 choices[51]= new Array();
 choices[51][0] = " Persona f&iacute;sica que decide sobre la finalidad, contenido, cesi&oacute;n y uso del tratamiento.";
 choices[51][1] = " Persona f&iacute;sica u &oacute;rgano administrativo, que decide sobre la finalidad, contenido, cesi&oacute;n y uso del tratamiento.";
 choices[51][2] = " Persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que decide sobre la finalidad, contenido y uso del tratamiento.";
 choices[51][3] = " Persona f&iacute;sica o jur&iacute;dica, autoridad p&uacute;blica, servicio o cualquier otro organismo que, solo o conjuntamente con otros, trate datos personales.";
 answers[51] = choices[51][2];
 units[51] = "NULL";
 comments[51] = "Id Pregunta: 7874. Map 2006";


//  Id pregunta: 7896 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)   anulada";
 choices[52]= new Array();
 choices[52][0] = " anulada";
 choices[52][1] = " anulada";
 choices[52][2] = " anulada";
 choices[52][3] = " anulada";
 answers[52] = choices[52][1];
 units[52] = "NULL";
 comments[52] = "Id Pregunta: 7896. Map 2006";


//  Id pregunta: 7901 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)   &iquest;Cu&aacute;l de las siguientes direcciones IP de host pertenece a cualquiera de los rangos de direcciones IP p&uacute;blicas?";
 choices[53]= new Array();
 choices[53][0] = " 10.172.13.65";
 choices[53][1] = " 172.16.223.125";
 choices[53][2] = " 172.64.12.29";
 choices[53][3] = " 192.168.23.252";
 answers[53] = choices[53][2];
 units[53] = "NULL";
 comments[53] = "Id Pregunta: 7901. Map 2006";


//  Id pregunta: 7942 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)   El Servicio Universal contemplado en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones, NO garantiza:";
 choices[54]= new Array();
 choices[54][0] = " Que el ciudadano pueda elegir, para la prestaci&oacute;n del servicio universal, a cualquiera de los operadores registrados a nivel nacional.";
 choices[54][1] = " Que todos los usuarios finales puedan obtener una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica desde una ubicaci&oacute;n fija y acceder a la prestaci&oacute;n del servicio telef&oacute;nico disponible al p&uacute;blico.";
 choices[54][2] = " Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general de n&uacute;meros de abonados, ya sea impresa o electr&oacute;nica.";
 choices[54][3] = " Que exista una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago, en todo el territorio nacional, que satisfaga razonablemente las necesidades de los usuarios finales.";
 answers[54] = choices[54][0];
 units[54] = "NULL";
 comments[54] = "Id Pregunta: 7942. Map 2006";


//  Id pregunta: 8142 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)   Teniendo una red IP con m&aacute;scara 255.255.240.0, &iquest;cu&aacute;ntos puestos se pueden direccionar?";
 choices[55]= new Array();
 choices[55][0] = " 240.";
 choices[55][1] = " 512.";
 choices[55][2] = " 1024.";
 choices[55][3] = " 4094.";
 answers[55] = choices[55][3];
 units[55] = "NULL";
 comments[55] = "Id Pregunta: 8142. Map 2008";


//  Id pregunta: 8152 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)   Indique qui&eacute;n NO es miembro del Pleno del Consejo Superior de Administraci&oacute;n Electr&oacute;nica:";
 choices[56]= new Array();
 choices[56][0] = " El Presidente del Instituto Nacional de Estad&iacute;stica.";
 choices[56][1] = " El Subdirector General del Centro Criptol&oacute;gico Nacional.";
 choices[56][2] = " El Interventor General de la Administraci&oacute;n del Estado.";
 choices[56][3] = " El Director General de la F&aacute;brica Nacional de Moneda y Timbre-Real Casa de la Moneda.";
 answers[56] = choices[56][1];
 units[56] = "NULL";
 comments[56] = "Id Pregunta: 8152. Map 2008";


//  Id pregunta: 8184 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  Conforme a la especificaci&oacute;n 3GPP TS 03.60, GPRS se implementa l&oacute;gicamente a&ntilde;adiendo a la estructura de GSM los nodos Serving GPRS Support Node (SGSN) y Gateway GPRS Support Node (GGSN). &iquest;Cu&aacute;l es la afirmaci&oacute;n correcta?:";
 choices[57]= new Array();
 choices[57][0] = "Entre ambos tipos de nodos se define la Intefaz Gn si est&aacute;n situados en la misma red m&oacute;vil (PLMN).";
 choices[57][1] = "El SGSN es el nodo de interconexi&oacute;n con la Red de Conmutaci&oacute;n de Paquetes o Packet Data Network (PDN).";
 choices[57][2] = "La funcionalidad proporcionada por SGSN y GGSN debe residir en diferentes nodos f&iacute;sicos.";
 choices[57][3] = "Entre ambos tipos de nodos se define la Intefaz Gi si est&aacute;n situados en distinta red m&oacute;vil (PLMN).";
 answers[57] = choices[57][0];
 units[57] = "108";
 comments[57] = "Id Pregunta: 8184. Examen TIC A1 2010";


//  Id pregunta: 8226 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  Se&ntilde;ale la afirmaci&oacute;n NO correcta en relaci&oacute;n con el Registro Electr&oacute;nico Com&uacute;n (REC) de la Administraci&oacute;n General del Estado:";
 choices[58]= new Array();
 choices[58][0] = "REC posibilita la presentaci&oacute;n de cualesquiera solicitudes, escritos y comunicaciones dirigidas a la Administraci&oacute;n General del Estado y a sus Organismos p&uacute;blicos.";
 choices[58][1] = "La Direcci&oacute;n General de Impulso de la Administraci&oacute;n Electr&oacute;nica del Ministerio de la Presidencia, es la responsable de la custodia y manejo de los escritos presentados.";
 choices[58][2] = "Los formatos de los documentos electr&oacute;nicos y de las im&aacute;genes electr&oacute;nicas de los documentos, se establecen en el marco del Esquema Nacional de Interoperabilidad.";
 choices[58][3] = "El acuse de recibo electr&oacute;nico emitido por REC da constancia de la presentaci&oacute;n, pero no implica el inicio del c&oacute;mputo de plazos a los restantes efectos.";
 answers[58] = choices[58][1];
 units[58] = "44";
 comments[58] = "Id Pregunta: 8226. Examen TIC A1 2010";


//  Id pregunta: 8270 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  La gesti&oacute;n de memoria virtual en Unix:";
 choices[59]= new Array();
 choices[59][0] = "Mantiene siempre en memoria RAM los procesos del kernel.";
 choices[59][1] = "Utiliza siempre p&aacute;ginas de memoria de tama&ntilde;o variable.";
 choices[59][2] = "Asigna a los procesos, espacios de direcciones compartidos.";
 choices[59][3] = "No contempla la compartici&oacute;n de c&oacute;digo entre procesos.";
 answers[59] = choices[59][0];
 units[59] = "52,53";
 comments[59] = "Id Pregunta: 8270. Examen TIC A1 2010";


//  Id pregunta: 8313 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l es el est&aacute;ndar correspondiente al m&eacute;todo de compresi&oacute;n ADPCM (Adaptative Differential Pulse Code Modulation) de la voz? ";
 choices[60]= new Array();
 choices[60][0] = "G.711.";
 choices[60][1] = "G.726.";
 choices[60][2] = "G.728. ";
 choices[60][3] = "G.729. ";
 answers[60] = choices[60][1];
 units[60] = "117";
 comments[60] = "Id Pregunta: 8313. Examen TIC A2 2010";


//  Id pregunta: 8341 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes elementos NO pertenece al Modelo Conceptual de Procesos?";
 choices[61]= new Array();
 choices[61][0] = "El Diccionario de Datos.";
 choices[61][1] = "El Diagrama de Flujo de Datos.";
 choices[61][2] = "Las especificaciones de procesos.";
 choices[61][3] = "El Diagrama Entidad Relaci&oacute;n.";
 answers[61] = choices[61][3];
 units[61] = "86";
 comments[61] = "Id Pregunta: 8341. Examen TIC A2 2010";


//  Id pregunta: 8393 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes es una caracter&iacute;stica propia del Proceso Unificado de Desarrollo del Software (PUDS)?";
 choices[62]= new Array();
 choices[62][0] = "Se basa en las Historias de Usuario.";
 choices[62][1] = "Proceso centrado en la arquitectura.";
 choices[62][2] = "Existe una continua refactorizaci&oacute;n del c&oacute;digo.";
 choices[62][3] = "No contempla la gesti&oacute;n del proyecto.";
 answers[62] = choices[62][1];
 units[62] = "79";
 comments[62] = "Id Pregunta: 8393. Examen TIC A2 2010";


//  Id pregunta: 8394 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes diagramas NO aparece recogido en UML?";
 choices[63]= new Array();
 choices[63][0] = "Diagrama de secuencia.";
 choices[63][1] = "Diagrama de actividades.";
 choices[63][2] = "Diagrama de estados.";
 choices[63][3] = "Diagrama de perspectiva.";
 answers[63] = choices[63][3];
 units[63] = "84";
 comments[63] = "Id Pregunta: 8394. Examen TIC A2 2010";


//  Id pregunta: 8444 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes protocolos utiliza puertos UDP y TCP para la operaci&oacute;n delnivel de transporte?:";
 choices[64]= new Array();
 choices[64][0] = "FTP.";
 choices[64][1] = "TFTP.";
 choices[64][2] = "DNS.";
 choices[64][3] = "Ninguno de los anteriores.";
 answers[64] = choices[64][2];
 units[64] = "100";
 comments[64] = "Id Pregunta: 8444. Analista Ayto. Madrid 2010";


//  Id pregunta: 8464 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  El .NET Framework 3.5, facilita tareas de programaci&oacute;n de gesti&oacute;n de cadenas de texto, colecciones de datos, conectividad con base de datos, acceso a fichero, entre otros; adem&aacute;s incluye tipos para soportar varios escenarios de desarrollo especializado. &iquest;Cu&aacute;l de los siguientes servicios o aplicaciones pueden desarrollarse sobre .NET Framework?:";
 choices[65]= new Array();
 choices[65][0] = "Windows Forms";
 choices[65][1] = "Web Services";
 choices[65][2] = "Ambos";
 choices[65][3] = "Ninguno";
 answers[65] = choices[65][2];
 units[65] = "115";
 comments[65] = "Id Pregunta: 8464. Analista Ayto. Madrid 2010";


//  Id pregunta: 8590 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes utilidades permite desarrollar en JAVA?";
 choices[66]= new Array();
 choices[66][0] = "JRE";
 choices[66][1] = "M&aacute;quina Virtual de Java";
 choices[66][2] = "JDK";
 choices[66][3] = "AWT";
 answers[66] = choices[66][2];
 units[66] = "116";
 comments[66] = "Id Pregunta: 8590. Examen TIC A2 2010 interna";


//  Id pregunta: 8611 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Si sobre el fichero &quot;ejemplo.txt&quot; queremos dar permisos totales al due&ntilde;o, de lectura y ejecuci&oacute;n al grupo y s&oacute;lo de lectura al resto de usuarios, usaremos la instrucci&oacute;n:";
 choices[67]= new Array();
 choices[67][0] = "chmod 766 ejemplo.txt";
 choices[67][1] = "chmod 751 ejemplo.txt";
 choices[67][2] = "chmod 761 ejemplo.txt";
 choices[67][3] = "chmod 754 ejemplo.txt";
 answers[67] = choices[67][3];
 units[67] = "53,54";
 comments[67] = "Id Pregunta: 8611. Examen TIC A2 2010 interna";


//  Id pregunta: 8686 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  En el protocolo MPLS, la cabecera de las etiquetas MPLS, NO contiene el siguiente item:";
 choices[68]= new Array();
 choices[68][0] = "Comprobaci&oacute;n de redundancia c&iacute;clica (4 bits)";
 choices[68][1] = "Tiempo de vida (8 bits)";
 choices[68][2] = "Flag que determina final de la pila de etiquetas (1 bit)";
 choices[68][3] = "Tipo de tr&aacute;fico (3 bits) usado para se&ntilde;alar la calidad de servicio";
 answers[68] = choices[68][0];
 units[68] = "100";
 comments[68] = "Id Pregunta: 8686. Examen UPM A2 2011";


//  Id pregunta: 8760 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Una se&ntilde;al en UNIX es un mecanismo de comunicaci&oacute;n:";
 choices[69]= new Array();
 choices[69][0] = "Bidireccional";
 choices[69][1] = "S&iacute;ncrono.";
 choices[69][2] = "Entre procesos.";
 choices[69][3] = "En el fichero de cabecera &lt;stdio.h&gt; est&aacute;n definidas todas las se&ntilde;ales, n&uacute;mero y nombre.";
 answers[69] = choices[69][2];
 units[69] = "53, 54";
 comments[69] = "Id Pregunta: 8760. Examen TIC A2 2010 interna";


//  Id pregunta: 8899 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Se&ntilde;ale cu&aacute;l de los siguientes no es un m&eacute;todo de ordenaci&oacute;n de alternativas";
 choices[70]= new Array();
 choices[70][0] = "M&eacute;todo de la ponderaci&oacute;n lineal";
 choices[70][1] = "M&eacute;todo de TOPSIS";
 choices[70][2] = "M&eacute;todo Delphi";
 choices[70][3] = "M&eacute;todo Lexicogr&aacute;fico";
 answers[70] = choices[70][2];
 units[70] = "34";
 comments[70] = "Id Pregunta: 8899. ";


//  Id pregunta: 8929 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes es una operaci&oacute;n que implica un cambio en el n&uacute;mero de dimensiones contempladas en la visi&oacute;n de un sistema OLAP?";
 choices[71]= new Array();
 choices[71][0] = "Drill-Across.";
 choices[71][1] = "Drill-In.";
 choices[71][2] = "Roll-Up.";
 choices[71][3] = "Rotaci&oacute;n.";
 answers[71] = choices[71][2];
 units[71] = "68";
 comments[71] = "Id Pregunta: 8929. ";


//  Id pregunta: 8983 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Qu&eacute; es Windows PowerShell?";
 choices[72]= new Array();
 choices[72][0] = "El interfaz del sistema de gesti&oacute;n de energ&iacute;a de Windows";
 choices[72][1] = "Una interfaz de comandos y un lenguaje de scripting, integrado en .NET y orientado a los administradores de sistemas Windows";
 choices[72][2] = "&quot;Una versi&oacute;n para Windows del comando &quot;&quot;ps&quot;&quot; de Unix&quot;";
 choices[72][3] = "Nada de lo anterior";
 answers[72] = choices[72][1];
 units[72] = "56";
 comments[72] = "Id Pregunta: 8983. ";


//  Id pregunta: 9040 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes es un motor para la creaci&oacute;n de servicios Web en Java?";
 choices[73]= new Array();
 choices[73][0] = "Apache Axis2";
 choices[73][1] = "Hibernate";
 choices[73][2] = "Struts";
 choices[73][3] = "TopLink";
 answers[73] = choices[73][0];
 units[73] = "60";
 comments[73] = "Id Pregunta: 9040. NULL";


//  Id pregunta: 9158 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  NO se encuentra entre las iniciativas de IMS:";
 choices[74]= new Array();
 choices[74][0] = "Empaquetado de metadatos";
 choices[74][1] = "Interoperabilidad de preguntas y tests";
 choices[74][2] = "Empaquetado de informaci&oacute;n del alumno";
 choices[74][3] = "Empaquetado de contenidos";
 answers[74] = choices[74][0];
 units[74] = "66";
 comments[74] = "Id Pregunta: 9158. ";


//  Id pregunta: 9339 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de los siguientes no es un modelo de COCOMO II?";
 choices[75]= new Array();
 choices[75][0] = "Dise&ntilde;o Arquitectura";
 choices[75][1] = "Dise&ntilde;o Preliminar";
 choices[75][2] = "Composici&oacute;n de la Aplicaci&oacute;n";
 choices[75][3] = "Post-Arquitectura";
 answers[75] = choices[75][0];
 units[75] = "88";
 comments[75] = "Id Pregunta: 9339. NULL";


//  Id pregunta: 9368 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  En la tecnolog&iacute;a de Resilient Packet Ring, sobre los m&eacute;todos de protecci&oacute;n ante fallos, se puede afirmar:";
 choices[76]= new Array();
 choices[76][0] = "En Steering, ante la existencia de un evento de protecci&oacute;n, se comunica a todas las estaciones su situaci&oacute;n, de manera que eligen el sentido en que tienen que enviar la informaci&oacute;n.";
 choices[76][1] = "En Wrapping, ante la existencia de un evento de protecci&oacute;n, se comunica a todas las estaciones su situaci&oacute;n, de manera que eligen el sentido en que tienen que enviar la informaci&oacute;n.";
 choices[76][2] = "Se basan principalmente en c&oacute;digos de Hamming.";
 choices[76][3] = "El principal m&eacute;todo de correcci&oacute;n de fallos es FEC (Forward Error Correction).";
 answers[76] = choices[76][0];
 units[76] = "101";
 comments[76] = "Id Pregunta: 9368. ";


//  Id pregunta: 9419 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  El modelo de estimaci&oacute;n de Putnam se caracteriza por";
 choices[77]= new Array();
 choices[77][0] = "Ser un modelo te&oacute;rico";
 choices[77][1] = "Distribuir los esfuerzos de desarrollo seg&uacute;n la curva Rayleigh/Norden";
 choices[77][2] = "Incluir una constante tecnol&oacute;gica";
 choices[77][3] = "Todas las anteriores";
 answers[77] = choices[77][3];
 units[77] = "89";
 comments[77] = "Id Pregunta: 9419. NULL";


//  Id pregunta: 9423 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Cu&aacute;l de las siguientes afirmaciones sobre COCOMO es falsa?";
 choices[78]= new Array();
 choices[78][0] = "No cubre todo el ciclo de vida de desarrollo del software, puesto que no se incluye por ejemplo el estudio de viabilidad del sistema";
 choices[78][1] = "Supone que existe una buena direcci&oacute;n por parte del desarrollador y del cliente";
 choices[78][2] = "S&oacute;lo cubre los costes directos del proyecto";
 choices[78][3] = "Un mes.hombre consta de 160 horas de trabajo";
 answers[78] = choices[78][3];
 units[78] = "89";
 comments[78] = "Id Pregunta: 9423. NULL";


//  Id pregunta: 9503 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Respecto al formato de im&aacute;genes GIF, indique la afirmaci&oacute;n falsa:";
 choices[79]= new Array();
 choices[79][0] = "Utiliza el algoritmo de compresi&oacute;n patentado LZW";
 choices[79][1] = "Fue creado en 1987 por Apple";
 choices[79][2] = "Fue creado en 1987 por Compuserve";
 choices[79][3] = "La paleta de color soporta hasta 256 colores";
 answers[79] = choices[79][1];
 units[79] = "114";
 comments[79] = "Id Pregunta: 9503. NULL";


//  Id pregunta: 9633 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  En un sistema UNIX, &iquest;cu&aacute;l es la diferencia entre los ficheros /etc/passwd y /etc/shadow?";
 choices[80]= new Array();
 choices[80][0] = "/etc/shadow es una copia exacta del fichero /etc/password pero s&oacute;lo visible por root";
 choices[80][1] = "/etc/password alberga las passwords de los usuarios y /etc/shadow alberga la historia de comandos realizadas por los mismos";
 choices[80][2] = "/etc/passwd es legible por todos los usuarios, mientras que /etc/shadow es legible s&oacute;lo por root";
 choices[80][3] = "/etc/passwd alberga las passwords de los usuarios mientras que /etc/shadow alberga el nombre de los usuarios";
 answers[80] = choices[80][2];
 units[80] = "53";
 comments[80] = "Id Pregunta: 9633. Examen TIC A2 2013";


//  Id pregunta: 9637 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;C&oacute;mo puede ejecutarse Windows 2012 Server en procesadores de 32 bits?";
 choices[81]= new Array();
 choices[81][0] = "No puede";
 choices[81][1] = "Con una versi&oacute;n espec&iacute;fica para estos procesadores";
 choices[81][2] = "Con un programa de emulaci&oacute;n";
 choices[81][3] = "Con una m&aacute;quina virtual";
 answers[81] = choices[81][0];
 units[81] = "56";
 comments[81] = "Id Pregunta: 9637. ";


//  Id pregunta: 9724 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  El sistema de redundancia que consiste en la divisi&oacute;n a nivel de bloques m&aacute;s un disco de paridad dedicado se denomina";
 choices[82]= new Array();
 choices[82][0] = "RAID 1";
 choices[82][1] = "RAID 3";
 choices[82][2] = "RAID 4";
 choices[82][3] = "RAID 6";
 answers[82] = choices[82][2];
 units[82] = "48";
 comments[82] = "Id Pregunta: 9724. Examen TIC-A1 2013";


//  Id pregunta: 9788 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  PLS es un est&aacute;ndar relacionado con VoiceXML, &iquest;para qu&eacute; se utiliza en concreto?";
 choices[83]= new Array();
 choices[83][0] = "&quot;Decora&quot; las locuciones de forma que se generen de la mejor forma posible; por ejemplo, indicando el tono de una determinada locuci&oacute;n (m&aacute;s alto o m&aacute;s bajo). ";
 choices[83][1] = "Realiza el control de la llamada con VoiceXML. ";
 choices[83][2] = "Define la forma en la que las palabras son pronunciadas. ";
 choices[83][3] = "Define la estructura de las gram&aacute;ticas usadas en el reconocimiento del habla. ";
 answers[83] = choices[83][2];
 units[83] = "94";
 comments[83] = "Id Pregunta: 9788. Examen TIC A2 2013";


//  Id pregunta: 9992 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de las siguientes no es una forma de pago admitida por la Pasarela de Pagos de la Agencia Tributaria?";
 choices[84]= new Array();
 choices[84][0] = "Pago mediante cargo en cuenta";
 choices[84][1] = "Pago con tarjeta";
 choices[84][2] = "Pago por cargo en cuenta de terceras personas, previo apoderamiento registrado en &ldquo;Registro de apoderamientos&rdquo;";
 choices[84][3] = "Pago mediante remesa de importaci&oacute;n para obligados contribuyentes con residencia en el extranjero";
 answers[84] = choices[84][3];
 units[84] = "70";
 comments[84] = "Id Pregunta: 9992. NULL";


//  Id pregunta: 10029 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Los ETL son herramientas utilizadas habitualmente en la miner&iacute;a de datos. &iquest;En qu&eacute; consisten dichas herramientas?";
 choices[85]= new Array();
 choices[85][0] = "Son bases de datos multidimensionales que permiten tener la informaci&oacute;n correctamente estructurada siguiendo multitud de criterios o dimensiones.";
 choices[85][1] = "Son herramientas que realizan informes destinados a la alta direcci&oacute;n de la organizaci&oacute;n.";
 choices[85][2] = "Son aplicaciones que permiten el acceso a la base de datos a trav&eacute;s de p&aacute;ginas HTML.";
 choices[85][3] = "Son herramientas que permiten extraer informaci&oacute;n de diversos or&iacute;genes, realizar modificaciones en dicha informaci&oacute;n y cargarla en un sistema destino.";
 answers[85] = choices[85][3];
 units[85] = "68";
 comments[85] = "Id Pregunta: 10029. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10184 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  El Modelo E-R Extendido es el resultado de la ampliaci&oacute;n de elementos y modificaciones introducidas en el modelo E-R de Chen a lo largo del tiempo. De entre &eacute;stas, es cierto que:";
 choices[86]= new Array();
 choices[86][0] = "Sea una entidad involucrada en varias relaciones o interrelaciones distintas. Si cada ocurrencia de dicha entidad s&oacute;lo puede participar en una interrelaci&oacute;n, se habla de interrelaciones disjuntas.";
 choices[86][1] = "El Modelo E-R extendido permite la representaci&oacute;n de relaciones jer&aacute;rquicas denominadas Categor&iacute;as.";
 choices[86][2] = "Una jerarqu&iacute;a total se representa mediante la indicaci&oacute;n de la letra &quot;t&quot; en el tri&aacute;ngulo invertido que representa las relaciones de jerarqu&iacute;a";
 choices[86][3] = "Las relaciones reflexivas, al ser relaciones unarias, suelen presentar un tipo de correspondencia 1:1";
 answers[86] = choices[86][1];
 units[86] = "80";
 comments[86] = "Id Pregunta: 10184. ";


//  Id pregunta: 10319 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l es la direcci&oacute;n MAC de difusi&oacute;n de red o broadcast que se utiliza en Ethernet (IEEE 802.3)?";
 choices[87]= new Array();
 choices[87][0] = "255.255.255.255";
 choices[87][1] = "FF::FF";
 choices[87][2] = "FF:FF:FF:FF:FF:FF:FF:FF";
 choices[87][3] = "FF:FF:FF:FF:FF:FF";
 answers[87] = choices[87][3];
 units[87] = "101";
 comments[87] = "Id Pregunta: 10319. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10483 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  La ecuaci&oacute;n del software establece principalmente que&hellip;";
 choices[88]= new Array();
 choices[88][0] = "El esfuerzo necesario para realizar un proyecto es una ecuaci&oacute;n logar&iacute;tmica ";
 choices[88][1] = "El esfuerzo se mide en horas/hombre y hay 100 horas hombre por mes";
 choices[88][2] = "El tiempo para realizar un proyecto se puede medir en base a los puntos de funci&oacute;n ajustados";
 choices[88][3] = "El esfuerzo y el tiempo requerido para realizar un proyecto son inversamente proporcionales";
 answers[88] = choices[88][3];
 units[88] = "89";
 comments[88] = "Id Pregunta: 10483. NULL";


//  Id pregunta: 10788 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  En un sistema de memoria paginada, la tabla donde se almacena la correspondencia entre direcciones l&oacute;gicas y f&iacute;sicas, se denomina:";
 choices[89]= new Array();
 choices[89][0] = "TLB: Translation Lookaside Buffer.";
 choices[89][1] = "TTL: Translation Table Location.";
 choices[89][2] = "ATL: Address Translation Lookup.";
 choices[89][3] = "ATB: Address Table Buffer.";
 answers[89] = choices[89][0];
 units[89] = "52";
 comments[89] = "Id Pregunta: 10788. Examen GSI 2014";


//  Id pregunta: 10881 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  En el &aacute;mbito de las redes inform&aacute;ticas, el tiempo que tarda un paquete enviado desde un emisor en volver a este mismo emisor habiendo pasado por el receptor de destino es conocido como:";
 choices[90]= new Array();
 choices[90][0] = "Jitter.";
 choices[90][1] = "Delay.";
 choices[90][2] = "Round Trip delay Time.";
 choices[90][3] = "Latencia.";
 answers[90] = choices[90][2];
 units[90] = "100";
 comments[90] = "Id Pregunta: 10881. Examen GSI 2014";


//  Id pregunta: 10961 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;C&uacute;al de las siguientes opciones NO es un plan incluido en la Agenda Digital para Espa&ntilde;a?";
 choices[91]= new Array();
 choices[91][0] = "Contenidos y econom&iacute;a digital.";
 choices[91][1] = "Inclusi&oacute;n digital y empleabilidad.";
 choices[91][2] = "Confianza en el &aacute;mbito digital.";
 choices[91][3] = "Servicios p&uacute;blicos en la nube.";
 answers[91] = choices[91][3];
 units[91] = "30";
 comments[91] = "Id Pregunta: 10961. TIC A1 AGE 2014";


//  Id pregunta: 11021 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de las WCAG 2.0 NO es cierta?";
 choices[92]= new Array();
 choices[92][0] = "Est&aacute;n organizadas en 4 principios";
 choices[92][1] = "Dentro de cada principio se encuentran las pautas de accesibilidad";
 choices[92][2] = "Cada pauta contiene una serie de criterios de conformidad";
 choices[92][3] = "Se definen niveles de prioridad para los diferentes criterios";
 answers[92] = choices[92][3];
 units[92] = "39";
 comments[92] = "Id Pregunta: 11021. En las WCAG 2.0 se habla de niveles de conformidad y no de niveles de prioridad";


//  Id pregunta: 11125 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes no es un organismo europeo de normalizaci&oacute;n?";
 choices[93]= new Array();
 choices[93][0] = "CEN";
 choices[93][1] = "UNE";
 choices[93][2] = "CENELEC";
 choices[93][3] = "ETSI";
 answers[93] = choices[93][1];
 units[93] = "42";
 comments[93] = "Id Pregunta: 11125. ";


//  Id pregunta: 11182 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;C&oacute;mo se denominan los sistemas de comunicaciones m&oacute;viles que realizan la transmisi&oacute;n y recepci&oacute;n de forma secuencial en un sentido cada vez?";
 choices[94]= new Array();
 choices[94][0] = "Paralelos";
 choices[94][1] = "D&uacute;plex";
 choices[94][2] = "Semi-duplex";
 choices[94][3] = "Ninguno de los anteriores";
 answers[94] = choices[94][2];
 units[94] = "108";
 comments[94] = "Id Pregunta: 11182. ";


//  Id pregunta: 11228 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes pasos es incorrecto para desplegar un servlet en un servidor web?";
 choices[95]= new Array();
 choices[95][0] = "Indicando en el web.xml la URL a la que responder&aacute; y la clase que lo implementar&aacute;.";
 choices[95][1] = "Implementado la clase del servlet, que implementar&aacute; la interfaz de IhttpServlet.";
 choices[95][2] = "Implementado la clase del servlet, que heredar&aacute; de la clase abstracta HttpServlet.";
 choices[95][3] = "Copiar la clase compilada en el directorio del servidor WEB-INF\classes\.";
 answers[95] = choices[95][1];
 units[95] = "116";
 comments[95] = "Id Pregunta: 11228. ";


//  Id pregunta: 11313 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En la fase de dise&ntilde;o de un servicio, ITIL utiliza la matriz o modelo RACI. Se&ntilde;ale la afirmaci&oacute;n correcta en cuanto a ella.";
 choices[96]= new Array();
 choices[96][0] = "Una persona no puede ser R o A en m&uacute;ltiples tareas";
 choices[96][1] = "En cada tarea debe haber un unico R y A";
 choices[96][2] = "Existen variaciones menores de este modelo como RASCI, donde S es Support";
 choices[96][3] = "El rol Responsible (Encargado), es el responsable de la correcta ejecuci&oacute;n de la tarea, pero no de la ejecuci&oacute;n de la tarea en cuesti&oacute;n";
 answers[96] = choices[96][1];
 units[96] = "98";
 comments[96] = "Id Pregunta: 11313. Cuidado con esto. Responsible es el rol encargado de hacer la tarea. Accountable (traducido en espa&ntilde;ol como responsable) es el responsable de la correcta ejecuci&oacute;n de la tarea";


//  Id pregunta: 11339 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Indique la falsa en relaci&oacute;n con la familia de normas ISO 9000:2000";
 choices[97]= new Array();
 choices[97][0] = "ISO 19011 no pertenece a esta familia de normas";
 choices[97][1] = "ISO 9004 establece la gu&iacute;a para la mejora continua";
 choices[97][2] = "ISO 9001 consta de ocho secciones";
 choices[97][3] = "ISO 9000 habla de fundamentos y vocabulario";
 answers[97] = choices[97][0];
 units[97] = "92";
 comments[97] = "Id Pregunta: 11339. ";


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


//  Id pregunta: 11767 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Mediante qu&eacute; procedimiento su pueden adjudicar los acuerdos marco?";
 choices[99]= new Array();
 choices[99][0] = "Solo por procedimiento negociado";
 choices[99][1] = "Solo por procedimiento restringido";
 choices[99][2] = "Solo por procedimiento abierto";
 choices[99][3] = "Por procedimiento abierto, restringido o negociado&nbsp;";
 answers[99] = choices[99][3];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11767. ";


