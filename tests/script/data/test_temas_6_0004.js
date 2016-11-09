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

//  Id pregunta: 712 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  En un CPD se hacen back-ups de 240 GB. Se hacen 4 al a&ntilde;o. Si se quiere tener la informaci&oacute;n de los 5 a&ntilde;os anteriores, &iquest;Cu&aacute;ntas cintas de 60 GB hacen falta?";
 choices[0]= new Array();
 choices[0][0] = "60";
 choices[0][1] = "80";
 choices[0][2] = "90";
 choices[0][3] = "70";
 answers[0] = choices[0][1];
 units[0] = "48";
 comments[0] = "Id Pregunta: 712. Similar a examen TIC SS A 2003";


//  Id pregunta: 769 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Dada la arquitectura de supercomputaci&oacute;n MPP, &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?";
 choices[1]= new Array();
 choices[1][0] = "Distintas CPU acceden a la misma &aacute;rea de memoria";
 choices[1][1] = "Distintas CPU acceden a sus propias &aacute;reas de memoria";
 choices[1][2] = "Cada CPU puede acceder tanto a su propia &aacute;rea de memoria como a un &aacute;rea com&uacute;n";
 choices[1][3] = "ninguna de las anteriores";
 answers[1] = choices[1][1];
 units[1] = "45";
 comments[1] = "Id Pregunta: 769. ";


//  Id pregunta: 770 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no es se corresponde con un est&aacute;ndar de audio?";
 choices[2]= new Array();
 choices[2][0] = "mp3";
 choices[2][1] = "wav";
 choices[2][2] = "mod";
 choices[2][3] = "rmm";
 answers[2] = choices[2][3];
 units[2] = "47";
 comments[2] = "Id Pregunta: 770. ";


//  Id pregunta: 805 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  A la aplicaci&oacute;n de t&eacute;cnicas telem&aacute;ticas y tecnolog&iacute;as de redes para aumentar el confort, el control  y la seguridad en el hogar se le denomina:";
 choices[3]= new Array();
 choices[3][0] = "Infordom&oacute;tica.";
 choices[3][1] = "Domotelem&aacute;tica.";
 choices[3][2] = "Dom&oacute;tica.";
 choices[3][3] = "Telem&aacute;tica urban&iacute;stica.";
 answers[3] = choices[3][2];
 units[3] = "47";
 comments[3] = "Id Pregunta: 805. ";


//  Id pregunta: 809 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Acerca de la memoria virtual, &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?:";
 choices[4]= new Array();
 choices[4][0] = "Se distingue el mapa de direcciones l&oacute;gicas o virtual y el mapa de direcciones f&iacute;sicas o reales. Las direcciones f&iacute;sicas y l&oacute;gicas son del mismo tama&ntilde;o";
 choices[4][1] = "Con paginaci&oacute;n se resuelven todos los problemas de fragmentaci&oacute;n de memoria";
 choices[4][2] = "Obliga a tener en memoria principal todo el contenido del programa durante la ejecuci&oacute;n";
 choices[4][3] = "Con memoria segmentada se complica la traducci&oacute;n de direcciones";
 answers[4] = choices[4][3];
 units[4] = "47";
 comments[4] = "Id Pregunta: 809. ";


//  Id pregunta: 810 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Acerca de las memoria de lectura y escritura, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[5]= new Array();
 choices[5][0] = "Se basan en puntos de memoria de tipo biestable, que mantienen su estado siempre que no se interrumpa la alimentaci&oacute;n";
 choices[5][1] = "Las RAM din&aacute;micas son vol&aacute;tiles, requieren refresco, con un periodo del orden de unos pocos milisegundos";
 choices[5][2] = "Las RAM din&aacute;micas consumen m&aacute;s que las RAM est&aacute;ticas";
 choices[5][3] = "Las RAM est&aacute;ticas son mucho m&aacute;s econ&oacute;micas que las RAM din&aacute;micas";
 answers[5] = choices[5][3];
 units[5] = "47";
 comments[5] = "Id Pregunta: 810. ";


//  Id pregunta: 947 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  CICS";
 choices[6]= new Array();
 choices[6][0] = "Es un ordenador con un conjunto de instrucciones complejo";
 choices[6][1] = "Es un servidor de directorio x500";
 choices[6][2] = "Es un monitor transaccional";
 choices[6][3] = "Es un servidor de directorio LDAP";
 answers[6] = choices[6][2];
 units[6] = "50";
 comments[6] = "Id Pregunta: 947. ";


//  Id pregunta: 1062 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El tiempo de latencia en un disco:";
 choices[7]= new Array();
 choices[7][0] = "Tiempo medio necesario para que la informaci&oacute;n pase por debajo de la cabeza de lectura-escritura cuandoest&aacute; posicionada sobre la pista adecuada";
 choices[7][1] = "Corresponde al tiempo empleado para realizar la mitad del giro";
 choices[7][2] = "Es equivalente al tiempo de espera";
 choices[7][3] = "Todas las respuestas anteriores son ciertas";
 answers[7] = choices[7][3];
 units[7] = "48";
 comments[7] = "Id Pregunta: 1062. ";


//  Id pregunta: 1085 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  En el modelo cliente/servidor, el funcionamiento de una operaci&oacute;n as&iacute;ncrona consiste en que:";
 choices[8]= new Array();
 choices[8][0] = "El proceso cliente lanza una petici&oacute;n y contin&uacute;a cuando el proceso servidor acusa recibo de la petici&oacute;n";
 choices[8][1] = "El proceso cliente lanza una petici&oacute;n y contin&uacute;a, esperando respuesta afirmativa o negativa a su petici&oacute;n";
 choices[8][2] = "El proceso cliente espera hasta que el proceso servidor ha cumplimentado la petici&oacute;n";
 choices[8][3] = "Las operaciones as&iacute;ncronas no son utilizables en este modelo";
 answers[8] = choices[8][1];
 units[8] = "50";
 comments[8] = "Id Pregunta: 1085. ";


//  Id pregunta: 1116 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En las m&aacute;quinas con tecnolog&iacute;a RISC:";
 choices[9]= new Array();
 choices[9][0] = "El n&uacute;mero de instrucciones es muy elevado";
 choices[9][1] = "Se emplea la microprogramaci&oacute;n";
 choices[9][2] = "No se emplea la microprogramaci&oacute;n";
 choices[9][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[9] = choices[9][2];
 units[9] = "46";
 comments[9] = "Id Pregunta: 1116. ";


//  Id pregunta: 1136 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En un disco magn&eacute;tico,  &iquest;qu&eacute; son las pistas?:";
 choices[10]= new Array();
 choices[10][0] = "Un espacio peque&ntilde;o entre los sectores";
 choices[10][1] = "Las posiciones donde la cabeza se mueve cuando el disco se apaga";
 choices[10][2] = "El n&uacute;mero de 'platos' del disco";
 choices[10][3] = "Nada de lo anterior es correcto";
 answers[10] = choices[10][3];
 units[10] = "48";
 comments[10] = "Id Pregunta: 1136. ";


//  Id pregunta: 1171 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  HTTL significa:";
 choices[11]= new Array();
 choices[11][0] = "L&oacute;gica Transistor-Transistor de alta velocidad.";
 choices[11][1] = "Lenguaje de transferencia HiperTexto.";
 choices[11][2] = "Lenguaje de Tokens HiperTexto.";
 choices[11][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[11] = choices[11][0];
 units[11] = "46";
 comments[11] = "Id Pregunta: 1171. ";


//  Id pregunta: 1207 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  La arquitectura RISC:";
 choices[12]= new Array();
 choices[12][0] = "Se emplea sobre todo en estaciones de trabajo debido a sus altas prestaciones para el c&aacute;lculo en coma flotante";
 choices[12][1] = "Permite que con un juego sencillo de instrucciones se pueda disponer de todas las que se necesiten mediante el uso de la microprogramaci&oacute;n";
 choices[12][2] = "No es adaptable al sector de los microordenadores";
 choices[12][3] = "Dificulta el dise&ntilde;o de compiladores optimizados";
 answers[12] = choices[12][3];
 units[12] = "46";
 comments[12] = "Id Pregunta: 1207. ";


//  Id pregunta: 1208 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  La arquitectura UMA seg&uacute;n Silicon Graphics:";
 choices[13]= new Array();
 choices[13][0] = "Utiliza un bus AGP 16x";
 choices[13][1] = "Utiliza una &uacute;nica memoria para todos los dispositivos, sin que estos tengan memorias locales";
 choices[13][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[13][3] = "Las respuestas 'a' y 'b' son falsas";
 answers[13] = choices[13][1];
 units[13] = "45";
 comments[13] = "Id Pregunta: 1208. ";


//  Id pregunta: 1246 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  La tercera generaci&oacute;n de la inform&aacute;tica se caracteriza por:";
 choices[14]= new Array();
 choices[14][0] = "El uso de transistores";
 choices[14][1] = "Uso de microprocesadores";
 choices[14][2] = "El uso de los circuitos SSI";
 choices[14][3] = "El uso de v&aacute;lvulas de vacio";
 answers[14] = choices[14][2];
 units[14] = "47";
 comments[14] = "Id Pregunta: 1246. ";


//  Id pregunta: 1254 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Las arquitecturas de discos magn&eacute;ticos denominadas RAID tienen por objeto mejorar las siguientes caracter&iacute;sticas de los sistemas de almacenamiento. Se&ntilde;ale la opci&oacute;n correcta:";
 choices[15]= new Array();
 choices[15][0] = "La seguridad y la velocidad de transferencia";
 choices[15][1] = "La capacidad de almacenamiento y la segmentaci&oacute;n correcta de los datos";
 choices[15][2] = "La velocidad de transferencia y la ausencia de errores en los datos almacenados";
 choices[15][3] = "La disponibilidad de los datos y/o el rendimiento";
 answers[15] = choices[15][3];
 units[15] = "48";
 comments[15] = "Id Pregunta: 1254. ";


//  Id pregunta: 1280 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Los procesadores superescalares:";
 choices[16]= new Array();
 choices[16][0] = "Son siempre procesadores RISC";
 choices[16][1] = "Han de ser necesariamente CISC";
 choices[16][2] = "Suelen ser RISC, pero pueden ser CISC";
 choices[16][3] = "Todas son falsas";
 answers[16] = choices[16][2];
 units[16] = "45";
 comments[16] = "Id Pregunta: 1280. ";


//  Id pregunta: 1282 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Los sem&aacute;foros son una t&eacute;cnica de comunicaci&oacute;n entre procesos para:";
 choices[17]= new Array();
 choices[17][0] = "Evitar los bloqueos";
 choices[17][1] = "Ejecutar threads";
 choices[17][2] = "Permitir la exclusi&oacute;n mutua";
 choices[17][3] = "Comunicar procesos en sistemas distribuidos";
 answers[17] = choices[17][2];
 units[17] = "50";
 comments[17] = "Id Pregunta: 1282. ";


//  Id pregunta: 1289 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  MPI:";
 choices[18]= new Array();
 choices[18][0] = "Es una librer&iacute;a para programaci&oacute;n distribuida por paso de mensajes";
 choices[18][1] = "Multi Peer Interface es una utilidad P2P que permite utilizar los recursos de los PC de una LAN como si de un servidor centralizado se tratara";
 choices[18][2] = "Permite el intercambio de archivos entre PCs de una misma red";
 choices[18][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[18] = choices[18][0];
 units[18] = "50";
 comments[18] = "Id Pregunta: 1289. JCED - Preparatic XVII";


//  Id pregunta: 1294 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  OnNow:";
 choices[19]= new Array();
 choices[19][0] = "Es una tecnolog&iacute;a que permite a un PC encenderse r&aacute;pidamente";
 choices[19][1] = "Es una caracter&iacute;stica de los sistemas Z/series de IBM que permite el reemplazo en caliente de todas sus partes y su operaci&oacute;n 24x7";
 choices[19][2] = "Es una caracter&iacute;stica de Linux orientada a aumentar la redundancia y confiabilidad en la operaci&oacute;n del sistema";
 choices[19][3] = "Todas las respuestas anteriores son ciertas";
 answers[19] = choices[19][0];
 units[19] = "47";
 comments[19] = "Id Pregunta: 1294. ";


//  Id pregunta: 1295 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  P2P:";
 choices[20]= new Array();
 choices[20][0] = "Puede usarse para transferir archivos";
 choices[20][1] = "Simboliza un tipo de protocolos o sistemas que hacen uso de todos los recursos presentes en una red entre iguales (peers), haciendola parecer al usuario como un &uacute;nico sistema.";
 choices[20][2] = "Puede usarse para computaci&oacute;n distribuida";
 choices[20][3] = "Todas son ciertas";
 answers[20] = choices[20][3];
 units[20] = "50";
 comments[20] = "Id Pregunta: 1295. ";


//  Id pregunta: 1311 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Que el bus de datos trabaje con 32 bits quiere decir que:";
 choices[21]= new Array();
 choices[21][0] = "Todos los dispositivos conectados al bus acceden a 32 bits en cada impulso de reloj del ordenador";
 choices[21][1] = "Todos los dispositivos conectados al bus acceden a 32 bits en dos impulsos de reloj del ordenador";
 choices[21][2] = "Todos los dispositivos conectados al bus acceden a 32 bits en cuatro impulsos de reloj del ordenador";
 choices[21][3] = "Ninguna de las anteriores, ya que el bus del ordenador puede trabajar a diferente velocidad que la CPU";
 answers[21] = choices[21][3];
 units[21] = "47";
 comments[21] = "Id Pregunta: 1311. ";


//  Id pregunta: 1313 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Referido a un sistema de disco magn&eacute;tico, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[22]= new Array();
 choices[22][0] = "Todas las pistas de un sector est&aacute;n en el mismo cilindro";
 choices[22][1] = "Un sector est&aacute; constituido por varias pistas";
 choices[22][2] = "Un  cilindro est&aacute; constituido por varias pistas";
 choices[22][3] = "Una pista est&aacute; constituida por varios cilindros";
 answers[22] = choices[22][2];
 units[22] = "48";
 comments[22] = "Id Pregunta: 1313. ";


//  Id pregunta: 1316 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Respecto a las memorias RAM:";
 choices[23]= new Array();
 choices[23][0] = "las RAM est&aacute;ticas no son m&aacute;s r&aacute;pidas que las din&aacute;micas";
 choices[23][1] = "SDRAM (Synchronous Dynamic) es generalmente m&aacute;s r&aacute;pida que EDORAM (Extended Data Output)";
 choices[23][2] = "las RAM no pueden ser usadas para simular discos duros debido a su velocidad de acceso";
 choices[23][3] = "las PBSRAM (pipeline burst static) no pueden proporcionar acceso simult&aacute;neo por la propia concepci&oacute;n de la m&aacute;quina de Von Neumann ";
 answers[23] = choices[23][1];
 units[23] = "47";
 comments[23] = "Id Pregunta: 1316. ";


//  Id pregunta: 1320 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  RPC's o Remote Procedure Calls est&aacute;n asocadas con:";
 choices[24]= new Array();
 choices[24][0] = "Redes y Sistemas distribuidos";
 choices[24][1] = "Modelo cliente-servidor";
 choices[24][2] = "Sesiones orientadas a no conexi&oacute;n";
 choices[24][3] = "Todas las respuestas anteriores son correctas";
 answers[24] = choices[24][3];
 units[24] = "50";
 comments[24] = "Id Pregunta: 1320. ";


//  Id pregunta: 1410 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Una cinta DAT DDS3 tiene una capacidad de:";
 choices[25]= new Array();
 choices[25][0] = "32,1 Gb sin comprimir";
 choices[25][1] = "40 Gb comprimido";
 choices[25][2] = "80 Gb comprimido";
 choices[25][3] = "12 Gb sin comprimir";
 answers[25] = choices[25][3];
 units[25] = "48";
 comments[25] = "Id Pregunta: 1410. ";


//  Id pregunta: 1428 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Uno de los conectores mas utilizados en inform&aacute;tica es el conector RJ45. &iquest;Cu&aacute;ntos contactos tiene?:";
 choices[26]= new Array();
 choices[26][0] = "4";
 choices[26][1] = "6";
 choices[26][2] = "8";
 choices[26][3] = "15";
 answers[26] = choices[26][2];
 units[26] = "47";
 comments[26] = "Id Pregunta: 1428. ";


//  Id pregunta: 1456 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;En qu&eacute; se basa la acci&oacute;n de comprimir las im&aacute;genes para almacenarlas o transmitirlas v&iacute;a red de &aacute;rea local o v&iacute;a teleproceso?:";
 choices[27]= new Array();
 choices[27][0] = "En la codificaci&oacute;n progresiva";
 choices[27][1] = "En la modulaci&oacute;n codificada";
 choices[27][2] = "En la codificaci&oacute;n de la informaci&oacute;n";
 choices[27][3] = "En el filtrado de frecuencias";
 answers[27] = choices[27][2];
 units[27] = "48";
 comments[27] = "Id Pregunta: 1456. ";


//  Id pregunta: 1471 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Los servicios interactivos multimedia se caracterizan por ser:";
 choices[28]= new Array();
 choices[28][0] = "bidereccionales sim&eacute;tricos";
 choices[28][1] = "bidireccionales asim&eacute;tricos con mayor volumen del cliente al servidor";
 choices[28][2] = "bidireccionales asim&eacute;tricos con mayor volumen del servidor al cliente";
 choices[28][3] = "unidireccionales del servidor al cliente";
 answers[28] = choices[28][2];
 units[28] = "50";
 comments[28] = "Id Pregunta: 1471. ";


//  Id pregunta: 1481 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Un dispositivo multifunci&oacute;n, aplicado a la ofim&aacute;tica, dispone habitualmente de las siguientes funciones:";
 choices[29]= new Array();
 choices[29][0] = "Tableta digitalizadora, l&aacute;piz &oacute;ptico y lector de tarjetas de fotograf&iacute;a digital";
 choices[29][1] = "Impresora, esc&aacute;ner, fax, copiadora";
 choices[29][2] = "Todas las anteriores";
 choices[29][3] = "Ninguna de las anteriores";
 answers[29] = choices[29][1];
 units[29] = "47";
 comments[29] = "Id Pregunta: 1481. ";


//  Id pregunta: 1483 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Un monitor de 20 pulgadas efectivas y de 1600 x 1200 puntos con 256 tonos de grises produce una resoluci&oacute;n de:";
 choices[30]= new Array();
 choices[30][0] = "300 dpi";
 choices[30][1] = "30 dpi";
 choices[30][2] = "100 dpi";
 choices[30][3] = "50 dpi";
 answers[30] = choices[30][2];
 units[30] = "47";
 comments[30] = "Id Pregunta: 1483. ";


//  Id pregunta: 1491 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  &iquest;Cu&aacute;ntos niveles RAID est&aacute;ndar existen?:";
 choices[31]= new Array();
 choices[31][0] = "4";
 choices[31][1] = "5";
 choices[31][2] = "6";
 choices[31][3] = "7";
 answers[31] = choices[31][3];
 units[31] = "48";
 comments[31] = "Id Pregunta: 1491. ";


//  Id pregunta: 1507 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Para una corporaci&oacute;n bancaria con un potente mainframe el principal cuello de botella suele ser:";
 choices[32]= new Array();
 choices[32][0] = "Los canales de comunicaciones";
 choices[32][1] = "La memoria del sistema central";
 choices[32][2] = "La velocidad de acceso a los datos";
 choices[32][3] = "La velocidad de los operadores humanos que introducen la informaci&oacute;n";
 answers[32] = choices[32][2];
 units[32] = "46";
 comments[32] = "Id Pregunta: 1507. ";


//  Id pregunta: 1508 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  RAID significa:";
 choices[33]= new Array();
 choices[33][0] = "Random Access Internet Devices, dispositivos de acceso aleatorio a internet, un tipo de m&oacute;dem que optimiza la velocidad de acceso";
 choices[33][1] = "RAdio Identification and Detection, Identificaci&oacute;n y Detecci&oacute;n por Radio, tecnolog&iacute;a basada en las propiedades de las ondas de radio para detectar cuerpos y objetos quietos o en movimiento";
 choices[33][2] = "Redundant Array of Inexpensive Disks, matriz redundante de discos baratos, tecnolog&iacute;a para tener redundancia en el almacenamiento de datos evitando as&iacute; p&eacute;rdida accidental o intencionada de informaci&oacute;n";
 choices[33][3] = "Redes de Acceso Inal&aacute;mbrico por Diversidad, tecnolog&iacute;a que usa la diversidad (dispersi&oacute;n de la onda en varios rayos) de la transmisi&oacute;n de ondas de radio para aumentar la potencia de transmisi&oacute;n de datos en comunicaciones inal&aacute;mbricas de datos";
 answers[33] = choices[33][2];
 units[33] = "48";
 comments[33] = "Id Pregunta: 1508. ";


//  Id pregunta: 1523 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  Con las memorias DDR-SDRAM podernos obtener una velocidad equivalente a la obtenida con:";
 choices[34]= new Array();
 choices[34][0] = "pc66.";
 choices[34][1] = "pc100.";
 choices[34][2] = "pc133.";
 choices[34][3] = "multiplo (x2) de pc66, pc100 o pc133.";
 answers[34] = choices[34][3];
 units[34] = "47";
 comments[34] = "Id Pregunta: 1523. Junta Andaluc&iacute;a";


//  Id pregunta: 1537 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l es la diferencia entre MPP y SMP?";
 choices[35]= new Array();
 choices[35][0] = "En SMP todas las CPU comparten la misma memoria mientras en MPP cada CPU tiene su propia memoria. ";
 choices[35][1] = "En MPP todas las CPU comparten la misma memoria mientras en SMP cada CPU tiene su propia memoria.";
 choices[35][2] = "No hay ninguna diferencia ambas arquitecturas son iguales";
 choices[35][3] = "SMP se utiliza en mainframes mientras que MPP se utiliza en supercomputadores";
 answers[35] = choices[35][0];
 units[35] = "45";
 comments[35] = "Id Pregunta: 1537. ";


//  Id pregunta: 1564 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de los soportes que se indican a continuaci&oacute;n tiene una capacidad m&aacute;xima de 18 gigaoctetos en 2 capas y 2 caras?:";
 choices[36]= new Array();
 choices[36][0] = "DVD-R.";
 choices[36][1] = "DVD+R.";
 choices[36][2] = "DVD-ROM.";
 choices[36][3] = "DVD-RAM.";
 answers[36] = choices[36][2];
 units[36] = "48";
 comments[36] = "Id Pregunta: 1564. Junta Andaluc&iacute;a";


//  Id pregunta: 1571 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  &iquest;Cu&aacute;ntos Gigabytes tiene un Terabyte?";
 choices[37]= new Array();
 choices[37][0] = "4";
 choices[37][1] = "256";
 choices[37][2] = "512";
 choices[37][3] = "1024";
 answers[37] = choices[37][3];
 units[37] = "48";
 comments[37] = "Id Pregunta: 1571. ";


//  Id pregunta: 1572 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  &iquest;En cu&aacute;l de los siguientes modelos de arquitectura cliente-servidor, el cliente asume mayor carga de proceso?:";
 choices[38]= new Array();
 choices[38][0] = "Base de datos remota.";
 choices[38][1] = "Proceso distribuido.";
 choices[38][2] = "Presentaci&oacute;n remota.";
 choices[38][3] = "Presentaci&oacute;n distribuida.";
 answers[38] = choices[38][0];
 units[38] = "50";
 comments[38] = "Id Pregunta: 1572. Junta Andaluc&iacute;a";


//  Id pregunta: 1625 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  Si en un texto de inform&aacute;tica encontr&aacute;ramos la expresi&oacute;n &quot;memoria de ferrita&rdquo;, sabr&iacute;amos que estamos leyendo un libro de:";
 choices[39]= new Array();
 choices[39][0] = "Dispositivos optoelectr&oacute;nicos.";
 choices[39][1] = "Historia de la inform&aacute;tica.";
 choices[39][2] = "Dispositivos perif&eacute;ricos.";
 choices[39][3] = " Inteligencia artificial.";
 answers[39] = choices[39][1];
 units[39] = "47";
 comments[39] = "Id Pregunta: 1625. Junta Andaluc&iacute;a";


//  Id pregunta: 1658 AÃ±o de creación de pregunta: 2004-01-01
 questions[40]= "41)  La gesti&oacute;n de un sistema operativo a trav&eacute;s de los sistemas distribuidos";
 choices[40]= new Array();
 choices[40][0] = "Aporta como ventajas: La compartici&oacute;n de recursos, la aceleraci&oacute;n de c&aacute;lculos, la fiabilidad y la comunicaci&oacute;n.";
 choices[40][1] = "Son sistemas altamente acoplados, los procesadores comparten tanto memoria como reloj.";
 choices[40][2] = "Son sistemas d&eacute;bilmente acoplados, compartiendo los procesadores la memoria.";
 choices[40][3] = "Son sistemas d&eacute;bilmente acoplados, los procesadores comparten reloj pero no memoria.";
 answers[40] = choices[40][0];
 units[40] = "50";
 comments[40] = "Id Pregunta: 1658. MAP-B 2003";


//  Id pregunta: 1665 AÃ±o de creación de pregunta: 2004-01-01
 questions[41]= "42)  Indique la respuesta correcta. El firewire...";
 choices[41]= new Array();
 choices[41][0] = "es conocido tambi&eacute;n como i.Link o IEEE1394";
 choices[41][1] = "permite la conexi&oacute;n &quot;en caliente&quot;";
 choices[41][2] = "Las opciones A) y B) son correctas";
 choices[41][3] = "Ninguna de las anteriores";
 answers[41] = choices[41][2];
 units[41] = "47";
 comments[41] = "Id Pregunta: 1665. ";


//  Id pregunta: 1666 AÃ±o de creación de pregunta: 2004-01-01
 questions[42]= "43)  &iquest;Qu&eacute; es el striping?";
 choices[42]= new Array();
 choices[42][0] = "Procedimiento de comprobaci&oacute;n para la detecci&oacute;n de errores";
 choices[42][1] = "M&eacute;todo por el que un bloque de datos se rompe en piezas, y estas se graban de modo simult&aacute;neo en varios discos";
 choices[42][2] = "Proceso que genera valores de paridad";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = choices[42][1];
 units[42] = "48";
 comments[42] = "Id Pregunta: 1666. ";


//  Id pregunta: 1672 AÃ±o de creación de pregunta: 2004-01-01
 questions[43]= "44)  &iquest;Qu&eacute; es un cluster?";
 choices[43]= new Array();
 choices[43][0] = "Un sistema paralelo distribuido de &aacute;mbito local";
 choices[43][1] = "Un sistema paralelo distribuido de &aacute;mbito global";
 choices[43][2] = "Un sistema distribuido paralelo de &aacute;mbito local";
 choices[43][3] = "Un sistema distribuido paralelo de &aacute;mbito global";
 answers[43] = choices[43][0];
 units[43] = "45";
 comments[43] = "Id Pregunta: 1672. ";


//  Id pregunta: 1692 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes afirmaciones se aproxima a la definici&oacute;n de FLOPs?:";
 choices[44]= new Array();
 choices[44][0] = "Expresa la velocidad de ejecuci&oacute;n de las instrucciones de una m&aacute;quina.";
 choices[44][1] = "Expresa la potencia en generaci&oacute;n de c&aacute;lculos cient&iacute;fico-t&eacute;cnicos.";
 choices[44][2] = "Expresa la velocidad para realizar operaciones en coma flotante por unidad de tiempo.";
 choices[44][3] = "Expresa la velocidad para realizar operaciones en coma flotante por segundo.";
 answers[44] = choices[44][3];
 units[44] = "45";
 comments[44] = "Id Pregunta: 1692. ";


//  Id pregunta: 1693 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  Para definir un sistema SIMD se podr&iacute;a decir que &hellip;:";
 choices[45]= new Array();
 choices[45][0] = "Una instrucci&oacute;n no puede actuar sobre alguno de los elementos de procesamiento.";
 choices[45][1] = "Una instrucci&oacute;n act&uacute;a sobre un elemento de procesamiento.";
 choices[45][2] = "Una instrucci&oacute;n act&uacute;a sobre uno o varios elementos de procesamiento.";
 choices[45][3] = "Ninguna de las anteriores.";
 answers[45] = choices[45][2];
 units[45] = "45";
 comments[45] = "Id Pregunta: 1693. ";


//  Id pregunta: 1700 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia de la memoria principal (RAM) de unordenador?";
 choices[46]= new Array();
 choices[46][0] = "Volatilidad.";
 choices[46][1] = "Estructuraci&oacute;n.";
 choices[46][2] = "Jerarquizaci&oacute;n.";
 choices[46][3] = "Dinamismo.";
 answers[46] = choices[46][2];
 units[46] = "47";
 comments[46] = "Id Pregunta: 1700. ";


//  Id pregunta: 1702 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  Las memorias cach&eacute; sirven para:";
 choices[47]= new Array();
 choices[47][0] = "Representar un sistema de almacenamiento secundario basado en jerarqu&iacute;a.";
 choices[47][1] = "Representar un sistema de almacenamiento auxiliar basado en jerarqu&iacute;a.";
 choices[47][2] = "Representar un sistema de almacenamiento secundario basado en la rapidez.";
 choices[47][3] = "Representar un sistema de almacenamiento basado en la rapidez.";
 answers[47] = choices[47][3];
 units[47] = "47";
 comments[47] = "Id Pregunta: 1702. ";


//  Id pregunta: 1704 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  La t&eacute;cnica usada para incrementar la velocidad de los PC, copiando a memoria RAM el c&oacute;digo de la memoria BIOS ROM tras el arranque, se denomina:";
 choices[48]= new Array();
 choices[48][0] = "Overclocking";
 choices[48][1] = "Ghosting";
 choices[48][2] = "Shadowing";
 choices[48][3] = "La BIOS no se puede ejecutar en una memoria RAM";
 answers[48] = choices[48][2];
 units[48] = "47";
 comments[48] = "Id Pregunta: 1704. ";


//  Id pregunta: 1892 AÃ±o de creación de pregunta: 2006-01-01
 questions[49]= "50)  Tres discos duros con una direcci&oacute;n de red &uacute;nica y propia y sirviendo ficheros a usuarios de estaciones de trabajo en LAN es una";
 choices[49]= new Array();
 choices[49][0] = "SAN";
 choices[49][1] = "NAS";
 choices[49][2] = "RAID";
 choices[49][3] = "cabina de discos";
 answers[49] = choices[49][1];
 units[49] = "48";
 comments[49] = "Id Pregunta: 1892. ";


//  Id pregunta: 1901 AÃ±o de creación de pregunta: 2006-01-01
 questions[50]= "51)  Grupo de microchips dise&ntilde;ados para trabajar como una unidad para desarrollar una o varias funciones relacionadas";
 choices[50]= new Array();
 choices[50][0] = "BIOS";
 choices[50][1] = "chip cluster";
 choices[50][2] = "chipset";
 choices[50][3] = "estado s&oacute;lido";
 answers[50] = choices[50][2];
 units[50] = "47";
 comments[50] = "Id Pregunta: 1901. ";


//  Id pregunta: 1903 AÃ±o de creación de pregunta: 2006-01-01
 questions[51]= "52)  Ejecuci&oacute;n continua y en parte solapada de instrucciones por parte del procesador";
 choices[51]= new Array();
 choices[51][0] = "flujo de datos";
 choices[51][1] = "multiplexado";
 choices[51][2] = "clustering";
 choices[51][3] = "pipelining";
 answers[51] = choices[51][3];
 units[51] = "46";
 comments[51] = "Id Pregunta: 1903. ";


//  Id pregunta: 1926 AÃ±o de creación de pregunta: 2006-01-01
 questions[52]= "53)  El est&aacute;ndar DMI";
 choices[52]= new Array();
 choices[52][0] = "Permite la monitorizaci&oacute;n de determinadas funciones del PC";
 choices[52][1] = "Permite el control de las diferentes funciones de ahorro de energ&iacute;a de un PC";
 choices[52][2] = "Es un est&aacute;ndar de gesti&oacute;n de energ&iacute;a desarrollado por Intel, Microsoft y Toshiba";
 choices[52][3] = "Es una norma dirigida a dispositivos de alta velocidad";
 answers[52] = choices[52][0];
 units[52] = "47";
 comments[52] = "Id Pregunta: 1926. ";


//  Id pregunta: 3341 AÃ±o de creación de pregunta: 2002-01-01
 questions[53]= "54)  Con referencia a los modems:";
 choices[53]= new Array();
 choices[53][0] = "La se&ntilde;al de entrada modula a la portadora, siendo ambas digitales";
 choices[53][1] = "Realizan los procesos de codificaci&oacute;n, modulaci&oacute;n, demodulaci&oacute;n, recepci&oacute;n y decodificaci&oacute;n";
 choices[53][2] = "Realizan s&oacute;lo los procesos de modulaci&oacute;n y demodulaci&oacute;n";
 choices[53][3] = "La se&ntilde;al de entrada puede ser anal&oacute;gica o digital y la moduladora es anal&oacute;gica para adaptarse a la l&iacute;nea de transmisi&oacute;n";
 answers[53] = choices[53][1];
 units[53] = "47";
 comments[53] = "Id Pregunta: 3341. modems";


//  Id pregunta: 3850 AÃ±o de creación de pregunta: 2002-01-01
 questions[54]= "55)  USB, refir&eacute;ndonos a interfaces, significa:";
 choices[54]= new Array();
 choices[54][0] = "Universal Synchronized Bus, Bus sincronizado universal";
 choices[54][1] = "Unstructured Serial Bits, Bits en serie no estructurados";
 choices[54][2] = "Universal Serial Bus, Bus serie universal";
 choices[54][3] = "Unstructured Synchronized Burst, R&aacute;faga sincronizada y no estructurada";
 answers[54] = choices[54][2];
 units[54] = "48";
 comments[54] = "Id Pregunta: 3850. ";


//  Id pregunta: 4265 AÃ±o de creación de pregunta: 2007-01-01
 questions[55]= "56)  La configuraci&oacute;n RAID que ofrece la mejor relaci&oacute;n precio/rendimiento de entre las siguientes es:";
 choices[55]= new Array();
 choices[55][0] = "RAID 1";
 choices[55][1] = "RAID 2";
 choices[55][2] = "RAID 4";
 choices[55][3] = "RAID 5";
 answers[55] = choices[55][3];
 units[55] = "48";
 comments[55] = "Id Pregunta: 4265. ";


//  Id pregunta: 4368 AÃ±o de creación de pregunta: 2007-01-01
 questions[56]= "57)  Indique cu&aacute;l de las siguientes no es una caracter&iacute;stica de los sistemas cliente-servidor:";
 choices[56]= new Array();
 choices[56][0] = "Compartici&oacute;n de recursos.";
 choices[56][1] = "Existe un &uacute;nico sistema de almacenamiento compartido, donde reside toda la informaci&oacute;n importante del sistema.";
 choices[56][2] = "Concurrencia.";
 choices[56][3] = "Interoperabilidad.";
 answers[56] = choices[56][1];
 units[56] = "50";
 comments[56] = "Id Pregunta: 4368. ";


//  Id pregunta: 4512 AÃ±o de creación de pregunta: 2007-01-01
 questions[57]= "58)  Los dispositivos NAS utilizan como protocolo para suministrar los archivos a los clientes:";
 choices[57]= new Array();
 choices[57][0] = "ADSL";
 choices[57][1] = "IP";
 choices[57][2] = "SCSI";
 choices[57][3] = "Fiber SCSI";
 answers[57] = choices[57][1];
 units[57] = "48";
 comments[57] = "Id Pregunta: 4512. ";


//  Id pregunta: 4741 AÃ±o de creación de pregunta: 2007-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas a los conceptos SMP (Symmetric Multiprocessing) y MPP(Massively Paralleling Multiprocessing) es falsa?";
 choices[58]= new Array();
 choices[58][0] = "La programaci&oacute;n con MPP es mucho m&aacute;s compleja ya que el programa que se ejecuta debe ser dividido ensegmentos que se comuniquen entre s&iacute;.";
 choices[58][1] = "MPP no sufre cuello de botella que sufre SMP en el acceso a memoria";
 choices[58][2] = "En MPP todas las CPU comparten la misma memoria mientras que en SMP no";
 choices[58][3] = "Un cluster esta compuesto por dos o m&aacute;s ordenadores que se comportan como una sola m&aacute;quina";
 answers[58] = choices[58][2];
 units[58] = "45";
 comments[58] = "Id Pregunta: 4741. Examen 2006 JCYL";


//  Id pregunta: 4904 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones corresponde a una de las caracter&iacute;sticas de los procesadores paralelos (MIMD):";
 choices[59]= new Array();
 choices[59][0] = "Todas las unidades de ejecuci&oacute;n paralela est&aacute;n sincronizadas y todas responden a una sola instrucci&oacute;n que emana de un &uacute;nico contador de programa.";
 choices[59][1] = "Una memoria central contiene los programas y una unidad de control centralizada se encarga de extraer cada instrucci&oacute;n y ejecutarla.";
 choices[59][2] = "Son &uacute;tiles para las operaciones que repiten los mismos c&aacute;lculos en un conjunto de datos (vectores).";
 choices[59][3] = "Se trata de un grupo de procesadores independientes cada uno de ellos con su propio contador de programa y sus propios datos.";
 answers[59] = choices[59][3];
 units[59] = "45";
 comments[59] = "Id Pregunta: 4904. Examen TIC B 2007";


//  Id pregunta: 5629 AÃ±o de creación de pregunta: 2003-01-01
 questions[60]= "61)  Dentro de la clasificaci&oacute;n de Flynn, un ordenador con Multiprocesador Masivamente Paralelo (MPP), se clasificar&iacute;a en la siguiente categor&iacute;a:";
 choices[60]= new Array();
 choices[60][0] = "SISD";
 choices[60][1] = "SIMD";
 choices[60][2] = "MISD";
 choices[60][3] = "MIMD";
 answers[60] = choices[60][3];
 units[60] = "45";
 comments[60] = "Id Pregunta: 5629. ";


//  Id pregunta: 5633 AÃ±o de creación de pregunta: 2003-01-01
 questions[61]= "62)  Indique cu&aacute;l de las siguientes respuestas es err&oacute;nea:";
 choices[61]= new Array();
 choices[61][0] = "Un m&oacute;dulo SODIMM posee 200 contactos";
 choices[61][1] = "Existen m&oacute;dulos DIMM de 194 contactos";
 choices[61][2] = "Existen  m&oacute;dulos DIMM de 184 contactos";
 choices[61][3] = "Las siglas DIMM hacen referencia a &quot;Dual Inline Memory Module&quot;";
 answers[61] = choices[61][1];
 units[61] = "47";
 comments[61] = "Id Pregunta: 5633. ";


//  Id pregunta: 5919 AÃ±o de creación de pregunta: 2009-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes paquetes software se usa para construir grids?:";
 choices[62]= new Array();
 choices[62][0] = "Globus Toolkit";
 choices[62][1] = "Grid Squema Toolkit";
 choices[62][2] = "EYEE Toolkit";
 choices[62][3] = "WS-DAI";
 answers[62] = choices[62][0];
 units[62] = "45";
 comments[62] = "Id Pregunta: 5919. MAP 2008 A1";


//  Id pregunta: 6128 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Una red de &aacute;rea de almacenamiento (SAN) es:";
 choices[63]= new Array();
 choices[63][0] = "Una red especial utilizada por algunos proveedores de servicios en internet para ofrecer servicios din&aacute;micos de almacenamiento y mantenimiento de webs corporativas.";
 choices[63][1] = "Una red basada en conexiones de fibra &oacute;ptica (Fibre Channel) que sirve para conectar m&uacute;ltiples dispositivos de almacenamiento en una red m&aacute;s grande ofreciendo una mayor capacidad de almacenamiento, permitiendo la transmisi&oacute;nde datos a alta velocidad.";
 choices[63][2] = "Un bus de datos utilizados en los grandes sistemas departamentales, muy utilizado para comunicar las consultas hacia las bases de datos.";
 choices[63][3] = "Un dispositivo de almacenamiento con direcci&oacute;n IP asignada que se conecta directamente a una LAN.";
 answers[63] = choices[63][1];
 units[63] = "48";
 comments[63] = "Id Pregunta: 6128. TIC A 2009";


//  Id pregunta: 8251 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Con respecto a sistemas de almacenamiento, indique cu&aacute;l de las siguientes asociaciones de t&eacute;rminos es correcta:";
 choices[64]= new Array();
 choices[64][0] = "Protocolos: CIFS, NDMP, iFCP, NFS.";
 choices[64][1] = "Dispositivos &oacute;pticos: DVD, MO, LTO, UDO.";
 choices[64][2] = "Redes SAN: SCSI, ESCON, FICON, WAFS.";
 choices[64][3] = "Formatos de cintas: FATA, TRAVAN, DLT, DAT.";
 answers[64] = choices[64][0];
 units[64] = "48";
 comments[64] = "Id Pregunta: 8251. Examen TIC A1 2010";


//  Id pregunta: 8407 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO corresponde a una unidad de estado s&oacute;lido (SSD)? ";
 choices[65]= new Array();
 choices[65][0] = "No contiene partes m&oacute;viles. ";
 choices[65][1] = "Son discos menos ruidosos que los magn&eacute;ticos. ";
 choices[65][2] = "El precio por MB es menor que en los discos magn&eacute;ticos";
 choices[65][3] = "Existen para varias &iacute;nterfaces (SATA, PATA, etc.)";
 answers[65] = choices[65][2];
 units[65] = "48";
 comments[65] = "Id Pregunta: 8407. Examen TIC A2 2010";


//  Id pregunta: 8436 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes no es una ventaja del cloud computing?";
 choices[66]= new Array();
 choices[66][0] = "Prestaci&oacute;n de servicios a nivel mundial";
 choices[66][1] = "Implementaci&oacute;n m&aacute;s r&aacute;pida y con menos riesgos";
 choices[66][2] = "Contribuye al uso eficiente de la energ&iacute;a";
 choices[66][3] = "Aumento de la seguridad";
 answers[66] = choices[66][3];
 units[66] = "47";
 comments[66] = "Id Pregunta: 8436. ";


//  Id pregunta: 8471 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l es la velocidad del est&aacute;ndar USB 3.0?:";
 choices[67]= new Array();
 choices[67][0] = "600 MB/s";
 choices[67][1] = "480 MB/s";
 choices[67][2] = "4800 MB/s";
 choices[67][3] = "1092 MB/s";
 answers[67] = choices[67][0];
 units[67] = "47";
 comments[67] = "Id Pregunta: 8471. Analista Ayto. Madrid 2010";


//  Id pregunta: 8730 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Los protocolos b&aacute;sicos usados en una red de &aacute;rea de almacenamiento son:";
 choices[68]= new Array();
 choices[68][0] = "Fibre Channel Arbitrated Loop, Fibre Channel Switched y Small Computer System Interface";
 choices[68][1] = "Fibre Channel Arbitrated Loop y Fibre Channel Small Loop";
 choices[68][2] = "Small Computer System Interface y Fibre Channel Small Loop";
 choices[68][3] = "Fibre Channel Small Loop, Address Resolution Protocol y Network File System";
 answers[68] = choices[68][0];
 units[68] = "48";
 comments[68] = "Id Pregunta: 8730. Examen UPM A2 2011";


//  Id pregunta: 8860 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  La principal ventaja de un sistema RAID-5 sobre otros sistemas RAID es:";
 choices[69]= new Array();
 choices[69][0] = "Ofrece la m&aacute;xima velocidad posible tanto en lectura como escritura";
 choices[69][1] = "Ofrece la maxima seguridad de los datos almacenados";
 choices[69][2] = "Ofrece cierta seguridad y buena velocidad en escrituras aleatorias cortas";
 choices[69][3] = "Puede ser implementado tanto en Hardware como en Software";
 answers[69] = choices[69][2];
 units[69] = "48";
 comments[69] = "Id Pregunta: 8860. Analista Ayto. Madrid 2010";


//  Id pregunta: 8977 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Qu&eacute; pantallas t&aacute;ctiles pueden ser manejadas con guantes de lana?";
 choices[70]= new Array();
 choices[70][0] = "las resistivas";
 choices[70][1] = "las capacitivas";
 choices[70][2] = "ambas";
 choices[70][3] = "ninguna";
 answers[70] = choices[70][0];
 units[70] = "47";
 comments[70] = "Id Pregunta: 8977. ";


//  Id pregunta: 9119 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  Con respecto a los datos en los sistemas SMP o MMC se pueden distinguir los siguientes tipos en funci&oacute;n de su alcance";
 choices[71]= new Array();
 choices[71][0] = "Datos de alcance s&iacute;ncrono y as&iacute;ncrono";
 choices[71][1] = "Datos de alcance global y local";
 choices[71][2] = "Datos de alcance externo e interno";
 choices[71][3] = "No existe la arquitectura MMC";
 answers[71] = choices[71][1];
 units[71] = "45";
 comments[71] = "Id Pregunta: 9119. ";


//  Id pregunta: 9131 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  Indique la frase correcta acerca de las arquitecturas de microprocesadores";
 choices[72]= new Array();
 choices[72][0] = "La arquitectura CISC es m&aacute;s moderna que la arquitectura RISC y busca ampliar el conjunto de instrucciones de &eacute;sta.";
 choices[72][1] = "La arquitectura RISC dispone de un n&uacute;mero reducido de instrucciones y gran variedad de registros de uso dedicado.";
 choices[72][2] = "La arquitectura RISC maneja instrucciones con forma to regular y complejos modos de direccionamiento";
 choices[72][3] = "La arquitectura CISC dispone de instrucciones complejas y dependiendo de ellas maneja diferentes longitues de palabra.";
 answers[72] = choices[72][3];
 units[72] = "46";
 comments[72] = "Id Pregunta: 9131. Examen TIC-A1 2011";


//  Id pregunta: 9139 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;Qu&eacute; suele incorporar un controlador de Entrada/Salida?";
 choices[73]= new Array();
 choices[73][0] = "Una UART";
 choices[73][1] = "El controlador de puerto paralelo";
 choices[73][2] = "Reloj de tiempo real";
 choices[73][3] = "Todas las anteriores";
 answers[73] = choices[73][3];
 units[73] = "47";
 comments[73] = "Id Pregunta: 9139. ";


//  Id pregunta: 9208 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;Qu&eacute; es CAS?";
 choices[74]= new Array();
 choices[74][0] = "Content Address Storage";
 choices[74][1] = "Permiten almacenar una &uacute;nica copia de la informaci&oacute;n duplicada.";
 choices[74][2] = "Permiten reducir el espacio de almacenamiento requerido.";
 choices[74][3] = "Todas son correctas.";
 answers[74] = choices[74][3];
 units[74] = "48";
 comments[74] = "Id Pregunta: 9208. ";


//  Id pregunta: 9214 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;C&oacute;mo es SAN iSCSI respecto a FC?";
 choices[75]= new Array();
 choices[75][0] = "A nivel funcional pueden ofrecer las mismas capacidades pero es m&aacute;s cara.";
 choices[75][1] = "Igual";
 choices[75][2] = "A nivel funcional pueden ofrecer las mismas capacidades pero es m&aacute;s barata";
 choices[75][3] = "SCSI se utiliza en tecnolog&iacute;as NAS y no en SAN.";
 answers[75] = choices[75][2];
 units[75] = "48";
 comments[75] = "Id Pregunta: 9214. ";


//  Id pregunta: 9224 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;En qu&eacute; se parece CICS e IMS?";
 choices[76]= new Array();
 choices[76][0] = "Ambos son sistemas transaccionales";
 choices[76][1] = "No tienen nada que ver";
 choices[76][2] = "Son protocolos de acceso a ficheros";
 choices[76][3] = "Son correctas A) y C)";
 answers[76] = choices[76][0];
 units[76] = "49";
 comments[76] = "Id Pregunta: 9224. ";


//  Id pregunta: 9228 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  En la primitiva send-receive qu&eacute; caracter&iacute;sticas tienen send y receive?";
 choices[77]= new Array();
 choices[77][0] = "Send en bloqueante y Receive es no bloqueante.";
 choices[77][1] = "Ambas son bloqueantes.";
 choices[77][2] = "Ambas son no bloqueantes.";
 choices[77][3] = "Send es no bloqueante y Receive es bloqueante.";
 answers[77] = choices[77][3];
 units[77] = "50";
 comments[77] = "Id Pregunta: 9228. ";


//  Id pregunta: 9259 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l es el sistema operativo auspiciado por la Linux Foundation como un sistema preparado para funcionar en netbooks, dispositivos port&aacute;tiles, sistemas en veh&iacute;culos, televisiones y tel&eacute;fonos multimedia?";
 choices[78]= new Array();
 choices[78][0] = "Meego. ";
 choices[78][1] = "Android. ";
 choices[78][2] = "Chrome OS. ";
 choices[78][3] = "Symbian OS. ";
 answers[78] = choices[78][0];
 units[78] = "47";
 comments[78] = "Id Pregunta: 9259. Examen TICA2-2011";


//  Id pregunta: 9668 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de las siguientes categor&iacute;as de la taxonom&iacute;a de Flynn se corresponden con una arquitectura monoprocesador?";
 choices[79]= new Array();
 choices[79][0] = "MISD y SISD";
 choices[79][1] = "SIMD y SISD";
 choices[79][2] = "MIMD y MISD";
 choices[79][3] = "SISD y MISD";
 answers[79] = choices[79][1];
 units[79] = "45";
 comments[79] = "Id Pregunta: 9668. ";


//  Id pregunta: 9671 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Los sistemas multicomputador pueden dividirse, seg&uacute;n la taxonom&iacute;a de Flynn en:";
 choices[80]= new Array();
 choices[80][0] = "SISD, SIMD, MISD y MIMD.";
 choices[80][1] = "UMA y NUMA.";
 choices[80][2] = "MMC y MMD.";
 choices[80][3] = "Ninguna de las anteriores.";
 answers[80] = choices[80][3];
 units[80] = "45";
 comments[80] = "Id Pregunta: 9671. ";


//  Id pregunta: 9674 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  La arquitectura del Grid se compone de las siguientes capas:";
 choices[81]= new Array();
 choices[81][0] = "Capa de red, de &ldquo;middleware&rdquo; y de aplicaci&oacute;n.";
 choices[81][1] = "Capa de red, de &ldquo;middleware&rdquo;, de recursos y de aplicaci&oacute;n.";
 choices[81][2] = "Capa de recursos, de &ldquo;middleware&rdquo; y de aplicaci&oacute;n.";
 choices[81][3] = "Ninguna de las anteriores.";
 answers[81] = choices[81][1];
 units[81] = "45";
 comments[81] = "Id Pregunta: 9674. ";


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


//  Id pregunta: 9997 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Desde el punto de vista del &ldquo;Cloud Computing&rdquo;, Gmail es un ejemplo de";
 choices[83]= new Array();
 choices[83][0] = "PaaS (&ldquo;Platform as a Service&rdquo;).";
 choices[83][1] = "CaaS (&ldquo;Communication as a Service&rdquo;).";
 choices[83][2] = "IaaS (&ldquo;Infrastructure as a Service&rdquo;).";
 choices[83][3] = "SaaS (&ldquo;Software as a Service&rdquo;).";
 answers[83] = choices[83][3];
 units[83] = "47";
 comments[83] = "Id Pregunta: 9997. ";


//  Id pregunta: 10311 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l es el m&aacute;ximo porcentaje de disco desaprovechado para el almacenamiento efectivo de datos en un array de discos configurado en RAID 5 (suponiendo que todos los discos tienen la misma capacidad)?";
 choices[84]= new Array();
 choices[84][0] = "33%";
 choices[84][1] = "20%";
 choices[84][2] = "50%";
 choices[84][3] = "0%";
 answers[84] = choices[84][0];
 units[84] = "48";
 comments[84] = "Id Pregunta: 10311. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10312 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  En el &aacute;mbito de las redes SAN, &iquest;a qu&eacute; se refiere el t&eacute;rmino LUN?";
 choices[85]= new Array();
 choices[85][0] = "A un switch con conexi&oacute;n de fibra.";
 choices[85][1] = "A la interfaz de red de los servidores para conectarse a la SAN.";
 choices[85][2] = "A una unidad de discos agrupados en una cabina de almacenamiento.";
 choices[85][3] = "Al gateway para conectar una NAS a una red SAN.";
 answers[85] = choices[85][2];
 units[85] = "48";
 comments[85] = "Id Pregunta: 10312. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10528 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Se&ntilde;ale la respuesta correcta relacionada con las arquitecturas RISC y CISC de procesadores";
 choices[86]= new Array();
 choices[86][0] = "Las fases t&iacute;picas de ejecuci&oacute;n de una instrucci&oacute;n en un procesador RISC son, en orden: carga de la instrucci&oacute;n, decodificaci&oacute;n de la instrucci&oacute;n, ejecuci&oacute;n de la instrucci&oacute;n, acceso a memoria, escritura a registro";
 choices[86][1] = "CISC es un modelo m&aacute;s moderno que RISC y redujo el conjunto de instrucciones y sus modos de direccionamiento";
 choices[86][2] = "RISC es un modelo m&aacute;s moderno que CISC y redujo el conjunto de instrucciones y sus modos de direccionamiento";
 choices[86][3] = "Las fases t&iacute;picas de ejecuci&oacute;n de una instrucci&oacute;n en un procesador RISC son, en orden: carga de la instrucci&oacute;n, decodificaci&oacute;n de la instrucci&oacute;n, acceso a memoria, ejecuci&oacute;n de la instrucci&oacute;n, escritura a registro";
 answers[86] = choices[86][0];
 units[86] = "45";
 comments[86] = "Id Pregunta: 10528. NULL";


//  Id pregunta: 10533 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Seg&uacute;n el modelo de madurez de Cloud Computing de Forrester, el nivel en el que el proveedor de SaaS ha creado un software espec&iacute;fico para tal prop&oacute;sito y que emplea, entre otras, la tenencia m&uacute;ltiple, es:";
 choices[87]= new Array();
 choices[87][0] = "nivel 1";
 choices[87][1] = "nivel 2";
 choices[87][2] = "nivel 3";
 choices[87][3] = "nivel 4";
 answers[87] = choices[87][2];
 units[87] = "47";
 comments[87] = "Id Pregunta: 10533. http://blogs.msdn.com/b/architectsrule/archive/2008/08/18/saas-maturity-model-according-to-forrester.aspx";


//  Id pregunta: 10534 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  En los discos duros magn&eacute;ticos, &iquest;que significa el tiempo de latencia media?";
 choices[88]= new Array();
 choices[88][0] = "Tiempo medio que tarda el cabezal en situarse en la pista deseada";
 choices[88][1] = "Tiempo medio que tarda el cabezal en situarse en la pista y sector deseados";
 choices[88][2] = "Tiempo medio que tarda el cabezal en situarse en el sector deseado, una vez posicionado en la pista";
 choices[88][3] = "Tiempo medio que tarda la controladora en procesar un requerimiento de datos";
 answers[88] = choices[88][2];
 units[88] = "48";
 comments[88] = "Id Pregunta: 10534. NULL";


//  Id pregunta: 10602 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Indique cu&aacute;l de &eacute;stos es un problema asociado al cloud computing:";
 choices[89]= new Array();
 choices[89][0] = "Necesita de una mayor inversi&oacute;n inicial que una infraestructura in-house.";
 choices[89][1] = "Lock-in (cliente cautivo)";
 choices[89][2] = "Generalmente la implantaci&oacute;n es m&aacute;s lenta que con una infraestructura in-house.";
 choices[89][3] = "Ninguno de los anteriores.";
 answers[89] = choices[89][1];
 units[89] = "47";
 comments[89] = "Id Pregunta: 10602. ";


//  Id pregunta: 10603 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Amazon EC2 y Rackpace son ejemplos de:";
 choices[90]= new Array();
 choices[90][0] = "SaaS";
 choices[90][1] = "IaaS";
 choices[90][2] = "PaaS";
 choices[90][3] = "Nube h&iacute;bridas";
 answers[90] = choices[90][1];
 units[90] = "47";
 comments[90] = "Id Pregunta: 10603. ";


//  Id pregunta: 10614 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Elija la opci&oacute;n correcta:";
 choices[91]= new Array();
 choices[91][0] = "La copia de seguridad incremental hace una copia de seguridad de todos los archivos.";
 choices[91][1] = "La copia de seguridad diferencial hace una copia de seguridad de todos los archivos.";
 choices[91][2] = "La copia de seguridad diferencial requiere m&aacute;s espacio en cinta y tiempo que la copia de seguridad incremental.";
 choices[91][3] = "La copia de seguridad incremental hace una copia de seguridad solo de los archivos que han cambiado desde la &uacute;ltima copia de seguridad diferencial.";
 answers[91] = choices[91][2];
 units[91] = "48";
 comments[91] = "Id Pregunta: 10614. ";


//  Id pregunta: 10785 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  La velocidad del USB 3.0 es:";
 choices[92]= new Array();
 choices[92][0] = "15 veces superior a la del USB 2.0.";
 choices[92][1] = "Similar a la del USB 2.0.";
 choices[92][2] = "10 veces superior a la del USB 2.0.";
 choices[92][3] = "480 Mbps.";
 answers[92] = choices[92][2];
 units[92] = "46";
 comments[92] = "Id Pregunta: 10785. Examen GSI 2014";


//  Id pregunta: 10940 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Tener la funcionalidad &quot;Thin Provisioning&quot; en una cabina de almacenamiento conectada a una red SAN nos permite:";
 choices[93]= new Array();
 choices[93][0] = "Asignar menor cantidad de GB/TB a los servidores, si no se ha alcanzado el m&aacute;ximo de ocupaci&oacute;n real de la cabina.";
 choices[93][1] = "Sobreasignar mayor cantidad de GB/TB a los servidores, si no se ha alcanzado el m&aacute;ximo de ocupaci&oacute;n real de la cabina.";
 choices[93][2] = "Asignar mediante peque&ntilde;os incrementos los nuevos discos que se incorporen en caliente.";
 choices[93][3] = "Provisionar una capa de control para la virtualizaci&oacute;n del almacenamiento en cloud.";
 answers[93] = choices[93][1];
 units[93] = "48";
 comments[93] = "Id Pregunta: 10940. TIC A1 AGE 2014";


//  Id pregunta: 11128 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Los riesgos del Cloud Computing, de acuerdo con el &uacute;ltimo informe del ENISA pueden clasificarse como:";
 choices[94]= new Array();
 choices[94][0] = "Riesgos pol&iacute;ticos y organizativos, riesgos t&eacute;cnicos y riesgos legales";
 choices[94][1] = "Riesgos propios, riesgos compartidos y riesgos derivados";
 choices[94][2] = "Riesgos de usuarios, de la plataforma y del servicio";
 choices[94][3] = "Ninguna de las anteriores";
 answers[94] = choices[94][0];
 units[94] = "47";
 comments[94] = "Id Pregunta: 11128. ";


//  Id pregunta: 11275 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Entre las opciones que posee una organizaci&oacute;n para obtener servicios en la nube:";
 choices[95]= new Array();
 choices[95][0] = "La nube comunitaria implica menor complejidad en la integraci&oacute;n de la soluci&oacute;n cloud.";
 choices[95][1] = "El retorno de la inversi&oacute;n es m&aacute;s lento en la nube p&uacute;blica que en la nube privada.";
 choices[95][2] = "La nube h&iacute;brida permite compaginar la auto-provisi&oacute;n de procesos cr&iacute;ticos y ganar flexibilidad en aquellos que tienen menor criticidad.";
 choices[95][3] = "La nube p&uacute;blica nos da la posibilidad de aprovechar las infraestructuras ya existentes en la organizaci&oacute;n.";
 answers[95] = choices[95][2];
 units[95] = "47";
 comments[95] = "Id Pregunta: 11275. ";


//  Id pregunta: 11504 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes es un rol descrito en la Arquitectura de Referencia del Cloud Compunting versi&oacute;n 4.0 de IBM (CCRA)?";
 choices[96]= new Array();
 choices[96][0] = "Consumer.";
 choices[96][1] = "Provider.";
 choices[96][2] = "Creator.";
 choices[96][3] = "Todos los anteriores.";
 answers[96] = choices[96][3];
 units[96] = "47";
 comments[96] = "Id Pregunta: 11504. NULL";


//  Id pregunta: 11607 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  La modalidad de Cloud Computing en la que se ofrece todo lo necesario para soportar la puesta en producci&oacute;n de aplicaciones y servicios web as&iacute; como el ciclo de vida completo de su desarrollo, construcci&oacute;n, ensayo y preproducci&oacute;n es:";
 choices[97]= new Array();
 choices[97][0] = "IaaS";
 choices[97][1] = "PaaS";
 choices[97][2] = "SaaS";
 choices[97][3] = "CaaS";
 answers[97] = choices[97][2];
 units[97] = "47";
 comments[97] = "Id Pregunta: 11607. ";


//  Id pregunta: 11608 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  La privacidad de la informaci&oacute;n en el uso de cloud computing supone un tipo de riesgo:";
 choices[98]= new Array();
 choices[98][0] = "Contractual";
 choices[98][1] = "Legal";
 choices[98][2] = "Organizativo";
 choices[98][3] = "T&eacute;cnico";
 answers[98] = choices[98][1];
 units[98] = "47";
 comments[98] = "Id Pregunta: 11608. ";


//  Id pregunta: 11780 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Se&ntilde;ale la correcta en lo relativo a discos RAID:";
 choices[99]= new Array();
 choices[99][0] = "Un RAID 2 divide los datos a nivel de bloques y usa un c&oacute;digo de Hamming para la correcci&oacute;n de errores.";
 choices[99][1] = "Un RAID 4 usa divisi&oacute;n a nivel de byte con un disco de paridad dedicado.";
 choices[99][2] = "Un RAID 3 usa divisi&oacute;n a nivel de bytes con un disco de paridad dedicado.";
 choices[99][3] = "Un RAID 5 requiere al menos 4 unidades de disco para ser implementado.";
 answers[99] = choices[99][1];
 units[99] = "48";
 comments[99] = "Id Pregunta: 11780. ";


