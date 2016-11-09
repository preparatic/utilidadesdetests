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

//  Id pregunta: 2886 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  En TESTA II, el sistema de intercambio de informaci&oacute;n de productos farmac&eacute;uticos es:";
 choices[0]= new Array();
 choices[0][0] = "el sistema CARE";
 choices[0][1] = "el sistema EUDRANET";
 choices[0][2] = "el sistema STATEL";
 choices[0][3] = "el sistema EURES";
 answers[0] = choices[0][1];
 units[0] = "103";
 comments[0] = "Id Pregunta: 2886. ";


//  Id pregunta: 2897 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En GSM (Global System Mobile) el acceso al medio utilizado es:";
 choices[1]= new Array();
 choices[1][0] = "Acceso m&uacute;ltiple por divisi&oacute;n de tiempo.";
 choices[1][1] = "Acceso m&uacute;ltiple por divisi&oacute;n de frecuencia.";
 choices[1][2] = "Acceso m&uacute;ltiple por divisi&oacute;n de frecuencia y tiempo.";
 choices[1][3] = "Acceso m&uacute;ltiple por divisi&oacute;n en c&oacute;digo de banda ancha.";
 answers[1] = choices[1][2];
 units[1] = "108";
 comments[1] = "Id Pregunta: 2897. ";


//  Id pregunta: 2947 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  La ventaja de utilizar Frame Relay frente a X.25 es:";
 choices[2]= new Array();
 choices[2][0] = "Hace m&aacute;s eficiente el proceso de comunicaci&oacute;n";
 choices[2][1] = "Es necesaria la disponibilidad de l&iacute;nease de alta velocidad";
 choices[2][2] = "La velocidad de acceso puede alcanzar los 64 Kbps frente a los 2 Mbps de X.25";
 choices[2][3] = "Permite realizar el control de errores en cada uno de los enlaces de la red";
 answers[2] = choices[2][0];
 units[2] = "109";
 comments[2] = "Id Pregunta: 2947. Examen TIC MAP B 2004";


//  Id pregunta: 2979 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  En broadcast, &iquest;qu&eacute; protocolo traduce a direcci&oacute;n f&iacute;sica?";
 choices[3]= new Array();
 choices[3][0] = "TCP";
 choices[3][1] = "UDP";
 choices[3][2] = "RIP";
 choices[3][3] = "ARP";
 answers[3] = choices[3][3];
 units[3] = "100";
 comments[3] = "Id Pregunta: 2979. Examen Julio 2003";


//  Id pregunta: 2986 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  La direcci&oacute;n ip 127.0.0.1 representa a";
 choices[4]= new Array();
 choices[4][0] = "El router de la red";
 choices[4][1] = "Toda la red";
 choices[4][2] = "El propio equipo";
 choices[4][3] = "Usualmente el servidor";
 answers[4] = choices[4][2];
 units[4] = "100";
 comments[4] = "Id Pregunta: 2986. NULL";


//  Id pregunta: 3037 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes componentes de software no forma parte del servidor de aplicaciones en una arquitectura a tres capas?:";
 choices[5]= new Array();
 choices[5][0] = "P&aacute;ginas din&aacute;micas";
 choices[5][1] = "Java Virtual Machine";
 choices[5][2] = "Navegador Web";
 choices[5][3] = "Int&eacute;rprete de Scripting";
 answers[5] = choices[5][2];
 units[5] = "114";
 comments[5] = "Id Pregunta: 3037. ";


//  Id pregunta: 3050 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; inconvenientes presenta la transmisi&oacute;n de informaci&oacute;n mediante rayo l&aacute;ser?:";
 choices[6]= new Array();
 choices[6][0] = "Posible causa de accidentes";
 choices[6][1] = "Coste excesivamente elevado";
 choices[6][2] = "Afectada fuertemente por condiciones climatol&oacute;gicas";
 choices[6][3] = "Genera fuertes interferencias electromagn&eacute;ticas en otros aparatos";
 answers[6] = choices[6][2];
 units[6] = "99";
 comments[6] = "Id Pregunta: 3050. ";


//  Id pregunta: 3053 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Dado un cable coaxial de longitud 1 metro, donde se aplica una potencia de 1 mW, y se obtiene en el otro extremo una potencia de salida de 0.1 mW, se puede decir que el cable presenta unas p&eacute;rdidas de:";
 choices[7]= new Array();
 choices[7][0] = "10 dB/m";
 choices[7][1] = "20 dB/m";
 choices[7][2] = "1 dB/m";
 choices[7][3] = "5 dB/m";
 answers[7] = choices[7][0];
 units[7] = "99";
 comments[7] = "Id Pregunta: 3053. ";


//  Id pregunta: 3106 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Una de las caracter&iacute;sticas fundamentales de los sistemas de recuperaci&oacute;n de informaci&oacute;n es:";
 choices[8]= new Array();
 choices[8][0] = "Trabaja con informaci&oacute;n estructurada de tipo imagen";
 choices[8][1] = "Maneja grandes vol&uacute;menes de informaci&oacute;n no estructurada, combinando norm&aacute;lmente texto e im&aacute;genes";
 choices[8][2] = "Trabaja con informaci&oacute;n estructurada y vol&uacute;menes de informaci&oacute;n medio/bajos";
 choices[8][3] = "Su objeto es la recuperaci&oacute;n de ficheros y bases de datos";
 answers[8] = choices[8][1];
 units[8] = "21";
 comments[8] = "Id Pregunta: 3106. ";


//  Id pregunta: 3127 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;C&oacute;mo se llaman los paquetes de longitud fija en ATM?:";
 choices[9]= new Array();
 choices[9][0] = "Pulsos";
 choices[9][1] = "Tramas";
 choices[9][2] = "Celdas";
 choices[9][3] = "R&aacute;fagas";
 answers[9] = choices[9][2];
 units[9] = "109";
 comments[9] = "Id Pregunta: 3127. ";


//  Id pregunta: 3155 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta respecto a los dispositivos a usar en la interconexi&oacute;n de redes locales?";
 choices[10]= new Array();
 choices[10][0] = "Los hubs o concentradores se suelen usar para implementar topolog&iacute;as en estrella f&iacute;sica, pero funcionando como un anillo o como un bus l&oacute;gico";
 choices[10][1] = "Los repetidores &uacute;nicamente sirven para repetir la se&ntilde;al transmitida evitando su atenuaci&oacute;n, ampliando as&iacute; la longitud del cable que soporta la red";
 choices[10][2] = "Los puentes ayudan a resolver el problema de limitaci&oacute;n de distancias junto con el de limitaci&oacute;n del n&uacute;mero de nodos en una red";
 choices[10][3] = "Las pasarelas sirven principalmente para enlazar redes de similares caracter&iacute;sticas";
 answers[10] = choices[10][3];
 units[10] = "102";
 comments[10] = "Id Pregunta: 3155. NULL";


//  Id pregunta: 3165 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es cierta para una red de conmutaci&oacute;n de paquetes?:";
 choices[11]= new Array();
 choices[11][0] = "El camino queda establecido durante toda la comunicaci&oacute;n";
 choices[11][1] = "La longitud de las unidades de datos est&aacute; limitada";
 choices[11][2] = "Se recogen en el est&aacute;ndar X.25 de la ITU-T";
 choices[11][3] = "Se han definido dos modos b&aacute;sicos de operaci&oacute;n: datagrama y circuito virtual";
 answers[11] = choices[11][0];
 units[11] = "101";
 comments[11] = "Id Pregunta: 3165. ";


//  Id pregunta: 3196 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Dentro del modelo OSI la funci&oacute;n de 'proporcionar testigos para que las dos partes de un protocolo no utilicen la misma operaci&oacute;n al mismo tiempo', corresponde al nivel:";
 choices[12]= new Array();
 choices[12][0] = "Presentaci&oacute;n";
 choices[12][1] = "Transporte";
 choices[12][2] = "Sesi&oacute;n";
 choices[12][3] = "Red";
 answers[12] = choices[12][2];
 units[12] = "100";
 comments[12] = "Id Pregunta: 3196. NULL";


//  Id pregunta: 3212 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El equipo que se encuentra en ambos extremos de una l&iacute;nea de transmisi&oacute;n, se denomina, seg&uacute;n la nomenclatura espa&ntilde;ola de la ITU-T:";
 choices[13]= new Array();
 choices[13][0] = "ETC o equipo terminal de datos";
 choices[13][1] = "ETD o equipo terminal de datos";
 choices[13][2] = "ETCD o equipo terminal del circuito digital";
 choices[13][3] = "ETCD o equipo terminal del circuito de datos";
 answers[13] = choices[13][3];
 units[13] = "97";
 comments[13] = "Id Pregunta: 3212. NULL";


//  Id pregunta: 3239 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l es el servicio del nivel de enlace del modelo OSI m&aacute;s apropiado para transmitir voz?:";
 choices[14]= new Array();
 choices[14][0] = "Servicio con acuse de recibo y sin conexi&oacute;n";
 choices[14][1] = "Servicio sin acuse de recibo y sin conexi&oacute;n";
 choices[14][2] = "Servicio con acuse de recibo y orientado a la conexi&oacute;n";
 choices[14][3] = "Ninguna de las anteriores";
 answers[14] = choices[14][1];
 units[14] = "100";
 comments[14] = "Id Pregunta: 3239. NULL";


//  Id pregunta: 3275 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Qu&eacute; afirmaci&oacute;n de las siguientes es verdadera en relaci&oacute;n con las funciones de conexi&oacute;n del modelo OSI?";
 choices[15]= new Array();
 choices[15][0] = "El multiplexado es la conexi&oacute;n de varias conexiones de nivel N en una conexi&oacute;n de nivel N-1";
 choices[15][1] = "La concatenaci&oacute;n consiste en unir varias N-PDU en una (N-1)PDU";
 choices[15][2] = "La segmentaci&oacute;n consiste en dividir una N-SDU en varias (N-1)SDU";
 choices[15][3] = "El reensamblado es la operaci&oacute;n contraria a la concatenaci&oacute;n";
 answers[15] = choices[15][0];
 units[15] = "100";
 comments[15] = "Id Pregunta: 3275. ";


//  Id pregunta: 3314 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;Qu&eacute; t&eacute;cnica de multiplexaci&oacute;n es aquella en la que el n&uacute;mero de se&ntilde;ales simult&aacute;neas que se pueden transmitir por un circuito se obtiene dividiendo el ancho de banda del circuito entre el ancho de banda de las se&ntilde;ales a transmitir?:";
 choices[16]= new Array();
 choices[16][0] = "Multiplexaci&oacute;n estad&iacute;stica";
 choices[16][1] = "Multiplexaci&oacute;n por divisi&oacute;n de frecuencia";
 choices[16][2] = "Multiplexaci&oacute;n por divisi&oacute;n de tiempo";
 choices[16][3] = "Multiplexaci&oacute;n por divisi&oacute;n de fase";
 answers[16] = choices[16][1];
 units[16] = "97";
 comments[16] = "Id Pregunta: 3314. NULL";


//  Id pregunta: 3323 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  10BaseT es:";
 choices[17]= new Array();
 choices[17][0] = "Un tipo de modem primario";
 choices[17][1] = "Una variante del est&aacute;ndar IEEE 802.3 para trabajar sobre pares trenzados";
 choices[17][2] = "Un m&eacute;todo de acceso en contenci&oacute;n";
 choices[17][3] = "Un m&eacute;todo de acceso por paso de testigo";
 answers[17] = choices[17][1];
 units[17] = "97";
 comments[17] = "Id Pregunta: 3323. NULL";


//  Id pregunta: 3330 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Al est&aacute;ndar de facto para la programaci&oacute;n de aplicaciones que se comunican entre ellos usando un interfaz TCP/IP se le denomina:";
 choices[18]= new Array();
 choices[18][0] = "pipes";
 choices[18][1] = "sockets";
 choices[18][2] = "sem&aacute;foros";
 choices[18][3] = "ninguno de los anteriores";
 answers[18] = choices[18][1];
 units[18] = "113";
 comments[18] = "Id Pregunta: 3330. ";


//  Id pregunta: 3335 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  BGP es un protocolo que se usa para:";
 choices[19]= new Array();
 choices[19][0] = "Tratar de encontrar un sistema del cual conocemos el nombre y no la direcci&oacute;n de red en redes OSI (Broadcasting Generation Protocol)";
 choices[19][1] = "Es un protocolo de intercambio de informaci&oacute;n en modo binario entre dos entidades de transporte en el modelo OSI, para que las pasen directamente de modo transparente a la capa de Sesi&oacute;n. (Binary Gateway Protocol)";
 choices[19][2] = "Es un protocolo de enrutamiento o encaminamiento por el que se intercambian informaci&oacute;n los routers en las fronteras de los sistemas aut&oacute;nomos en redes TCP/IP (Border Gateway Protocol)";
 choices[19][3] = "Es un protocolo por el que se convierte a nivel de transporte fragmentos (o TPDUs) de Appletalk a fragmentos TCP (Bellcore Gateway Protocol)";
 answers[19] = choices[19][2];
 units[19] = "102";
 comments[19] = "Id Pregunta: 3335. ";


//  Id pregunta: 3378 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  El hacer subredes (subnetting) en redes IP permite:";
 choices[20]= new Array();
 choices[20][0] = "Un esquema de direccionamiento jer&aacute;rquico que mejora la flexibilidad de la red";
 choices[20][1] = "Al administrador de la red, obtener m&aacute;s direcciones de una direcci&oacute;n dada IP";
 choices[20][2] = "Que el 'mundo exterior' conozca mejor la estructura interna de nuestra red";
 choices[20][3] = "Que nuestra red pueda formar parte del www";
 answers[20] = choices[20][0];
 units[20] = "100";
 comments[20] = "Id Pregunta: 3378. NULL";


//  Id pregunta: 3388 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  El nivel 5 de OSI:";
 choices[21]= new Array();
 choices[21][0] = "Tiene como principal funci&oacute;n el control de la subred de comunicaciones";
 choices[21][1] = "Tiene como objetivo el ofrecer un servicio para que dos entidades puedan organizar y sincronizar su di&aacute;logo";
 choices[21][2] = "Realiza funciones de encaminamiento de la informaci&oacute;n";
 choices[21][3] = "Se subdivide en dos subniveles (LLC y MAC)";
 answers[21] = choices[21][1];
 units[21] = "100";
 comments[21] = "Id Pregunta: 3388. NULL";


//  Id pregunta: 3394 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  El nivel encargado de la correcci&oacute;n definitiva de errores de comunicaci&oacute;n en el modelo de referencia OSI es:";
 choices[22]= new Array();
 choices[22][0] = "Sesi&oacute;n";
 choices[22][1] = "Red";
 choices[22][2] = "Transporte";
 choices[22][3] = "Enlace";
 answers[22] = choices[22][2];
 units[22] = "100";
 comments[22] = "Id Pregunta: 3394. NULL";


//  Id pregunta: 3475 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  El t&eacute;rmino VHE hace referencia a:";
 choices[23]= new Array();
 choices[23][0] = "Un componente de una red UMTS";
 choices[23][1] = "Un componente de una red GSM";
 choices[23][2] = "Un conjunto de servicios cuya apariencia es independiente de la red";
 choices[23][3] = "Un rango de frecuencias";
 answers[23] = choices[23][2];
 units[23] = "108";
 comments[23] = "Id Pregunta: 3475. ";


//  Id pregunta: 3500 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En el modelo de referencia OSI, los problemas planteados por la falta de fiabilidad de los circuitos como consecuencia de errores en los datos recibidos se resuelven en:";
 choices[24]= new Array();
 choices[24][0] = "El nivel f&iacute;sico";
 choices[24][1] = "El nivel de enlace";
 choices[24][2] = "El nivel de red";
 choices[24][3] = "El nivel de transporte";
 answers[24] = choices[24][1];
 units[24] = "100";
 comments[24] = "Id Pregunta: 3500. NULL";


//  Id pregunta: 3520 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  En Ethernet, se usa un transceptor (transceiver) para:";
 choices[25]= new Array();
 choices[25][0] = "Para hacer una conexi&oacute;n de red de un dispositivo a un servidor";
 choices[25][1] = "Establecer conexiones entre tarjetas de interfaz de red";
 choices[25][2] = "Convertir se&ntilde;ales recibidas por una puerta para transmitirlas por otra";
 choices[25][3] = "Unir un cable desde una estaci&oacute;n al medio f&iacute;sico que constituye la red";
 answers[25] = choices[25][3];
 units[25] = "102";
 comments[25] = "Id Pregunta: 3520. ";


//  Id pregunta: 3536 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  En las topolog&iacute;as de red de &aacute;rea local (LAN) se puede decir:";
 choices[26]= new Array();
 choices[26][0] = "En un bus el control es siempre distribuido";
 choices[26][1] = "El doble anillo permite seguir funcionando aunque se produzcan fallos en los puntos de la red";
 choices[26][2] = "La malla se obtiene cuando se conectan nodos pertenecientes a redes distintas de la misma topolog&iacute;a";
 choices[26][3] = "En la red en estrella todo el tr&aacute;fico pasa por el nodo central";
 answers[26] = choices[26][3];
 units[26] = "101";
 comments[26] = "Id Pregunta: 3536. ";


//  Id pregunta: 3577 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  En una red local en la que se tienen problemas de capacidad de la misma se ha decidido dividirla en dos segmentos. Indique cual de las opciones siguientes es la soluci&oacute;n t&eacute;cnica y econ&oacute;micamente m&aacute;s adecuada:";
 choices[27]= new Array();
 choices[27][0] = "Utilizaci&oacute;n de un gateway entre los segmentos";
 choices[27][1] = "Utilizaci&oacute;n de un repetidor entre los segmentos";
 choices[27][2] = "Utilizaci&oacute;n de un switch entre los segmentos";
 choices[27][3] = "Todas las opciones son igualmente adecuadas";
 answers[27] = choices[27][2];
 units[27] = "102";
 comments[27] = "Id Pregunta: 3577. ";


//  Id pregunta: 3623 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  La normas de la serie 802 del IEEE est&aacute;n establecidas por diversos grupos de trabajo a los que que est&aacute;n asignadas diferentes tareas. &iquest;A cu&aacute;l corresponde la 802.6?:";
 choices[28]= new Array();
 choices[28][0] = "Control l&oacute;gico del enlace";
 choices[28][1] = "Normativa de conectividad entre equipos a nivel f&iacute;sico";
 choices[28][2] = "M&eacute;todo de paso de testigo en bus";
 choices[28][3] = "Redes de &aacute;rea metropolitana";
 answers[28] = choices[28][3];
 units[28] = "101";
 comments[28] = "Id Pregunta: 3623. ";


//  Id pregunta: 3640 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  La RFC que contiene las especificaciones del protocolo IPv6 es:";
 choices[29]= new Array();
 choices[29][0] = "1945";
 choices[29][1] = "1884";
 choices[29][2] = "2460";
 choices[29][3] = "2584";
 answers[29] = choices[29][2];
 units[29] = "100";
 comments[29] = "Id Pregunta: 3640. NULL";


//  Id pregunta: 3718 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Los conceptos de arquitecturas de niveles est&aacute;n especificados en la siguiente norma de la ITU-T:";
 choices[30]= new Array();
 choices[30][0] = "X.400";
 choices[30][1] = "I.200";
 choices[30][2] = "X.500";
 choices[30][3] = "X.200";
 answers[30] = choices[30][3];
 units[30] = "113";
 comments[30] = "Id Pregunta: 3718. ";


//  Id pregunta: 3844 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  TCP utiliza un algoritmo para control de flujo denominado Slow Start . Dicho algoritmo consiste en:  ";
 choices[31]= new Array();
 choices[31][0] = "Incrementar el tama&ntilde;o de la ventana de congesti&oacute;n de forma lineal";
 choices[31][1] = "Incrementar el tama&ntilde;o de la ventana de congesti&oacute;n de forma exponencial";
 choices[31][2] = "Reducir el tama&ntilde;o de la ventana de congesti&oacute;n de forma lineal";
 choices[31][3] = "Reducir el tama&ntilde;o de la ventana de congesti&oacute;n de forma exponencial";
 answers[31] = choices[31][1];
 units[31] = "101";
 comments[31] = "Id Pregunta: 3844. ";


//  Id pregunta: 3894 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  En un servicio primario RDSI se pueden constituir los siguientes canales:";
 choices[32]= new Array();
 choices[32][0] = "30 canales de voz o datos tipo B de 64 Kbps cada uno y un canal de se&ntilde;alizaci&oacute;n tipo D a 64 Kbps.";
 choices[32][1] = "30 canales de voz o datos tipo B de 64 Kbps cada uno y 2 canales de se&ntilde;alizaci&oacute;n tipo D a 16 Kbps.";
 choices[32][2] = " 32 canales de voz o datos tipo B de 64 Kbps cada uno y un canal de se&ntilde;alizaci&oacute;n tipo D a 64 Kbps.";
 choices[32][3] = "32 canales de voz o datos tipo B de 64 Kbps cada uno y 2 canales de se&ntilde;alizaci&oacute;n tipo D a 16 Kbps.";
 answers[32] = choices[32][0];
 units[32] = "103";
 comments[32] = "Id Pregunta: 3894. Junta Andaluc&iacute;a";


//  Id pregunta: 3898 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Indicar la afirmaci&oacute;n falsa sobre Frame Relay";
 choices[33]= new Array();
 choices[33][0] = "Las redes Frame-Relay son orientadas a conexi&oacute;n";
 choices[33][1] = "Es capaz de detectar errores pero no de corregirlos";
 choices[33][2] = "CIR es la velocidad de acceso a la red";
 choices[33][3] = "Puede ser implementado en software";
 answers[33] = choices[33][2];
 units[33] = "109";
 comments[33] = "Id Pregunta: 3898. ";


//  Id pregunta: 3943 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  De las siguientes opciones cual no esta relacionada con ATM";
 choices[34]= new Array();
 choices[34][0] = "VPI";
 choices[34][1] = "VCI";
 choices[34][2] = "VHI";
 choices[34][3] = "SDH";
 answers[34] = choices[34][2];
 units[34] = "109";
 comments[34] = "Id Pregunta: 3943. ";


//  Id pregunta: 3967 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Se&ntilde;ale que es falso respecto a IPv6";
 choices[35]= new Array();
 choices[35][0] = "La cabecera de IPv6 es menor que la de IPv4";
 choices[35][1] = "IPv6 soporte para autenticaci&oacute;n";
 choices[35][2] = "IPv6 soporte para encriptaci&oacute;n";
 choices[35][3] = "IPv6 direcciones de 16 bytes";
 answers[35] = choices[35][0];
 units[35] = "100";
 comments[35] = "Id Pregunta: 3967. ";


//  Id pregunta: 3987 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Se&ntilde;ale la afirmaci&oacute;n verdadera acerca de la Multiplexaci&oacute;n CWDM:";
 choices[36]= new Array();
 choices[36][0] = "El plan de longitudes de onda define 18, pero s&oacute;lo son &uacute;tiles 16.";
 choices[36][1] = "La separaci&oacute;n entre longitudes de onda es de 50 nm y la m&aacute;xima distancia alcanza los 100 km si se emplean todos los canales.";
 choices[36][2] = "Las conexiones simult&aacute;neas que pueden transmitirse en una fibra &oacute;ptica tienen que cumplir el mismo protocolo a fin de impedir la interferencia entre canales.";
 choices[36][3] = "Puede transportar ATM, pero es incompatible con Gigabit Ethernet";
 answers[36] = choices[36][0];
 units[36] = "101";
 comments[36] = "Id Pregunta: 3987. ";


//  Id pregunta: 4000 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  &iquest;C&oacute;mo se denomina a la configuraci&oacute;n de una red de cable en la que la fibra llega hasta los derivadores (&quot;taps&quot;)?";
 choices[37]= new Array();
 choices[37][0] = "Fiber to the bridger";
 choices[37][1] = "Fiber to the curb";
 choices[37][2] = "Fiber to the home";
 choices[37][3] = "Fiber to the last amplifier";
 answers[37] = choices[37][1];
 units[37] = "105";
 comments[37] = "Id Pregunta: 4000. ";


//  Id pregunta: 4012 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Con respecto a la tecnolog&iacute;a VDSL, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[38]= new Array();
 choices[38][0] = "El VDSL asim&eacute;trico permite alcanzar un caudal de hasta 52 Mbit/s en sentido descendente y 6,4 Mbit/s en sentido ascendente.";
 choices[38][1] = "El VDSL asim&eacute;trico permite alcanzar un caudal de hasta 54 Mbit/s en sentido descendente y 8,2 Mbit/s en sentido ascendente.";
 choices[38][2] = "El VDSL sim&eacute;trico permite alcanzar un caudal de hasta 30 Mbit/s.";
 choices[38][3] = "El VDSL sim&eacute;trico permite alcanzar un caudal de hasta 25 Mbit/s.";
 answers[38] = choices[38][0];
 units[38] = "107";
 comments[38] = "Id Pregunta: 4012. NULL";


//  Id pregunta: 4055 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Un mensaje se puede cifrar";
 choices[39]= new Array();
 choices[39][0] = "Mediante mecanismos de cifrado sim&eacute;trico y asim&eacute;trico";
 choices[39][1] = "S&oacute;lo mediante mecanismos de cifrado sim&eacute;trico como DES";
 choices[39][2] = "S&oacute;lo mediante mecanismos de cifrado asim&eacute;trico como RSA";
 choices[39][3] = "Se puede cifrar con mecanismos de cifrado sim&eacute;trico, aunque por velocidad es preferible cifrar con criptograf&iacute;a de clave asim&eacute;trica";
 answers[39] = choices[39][0];
 units[39] = "111";
 comments[39] = "Id Pregunta: 4055. NULL";


//  Id pregunta: 4067 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  &iquest;Qu&eacute; se puede hacer con un telefono IP?";
 choices[40]= new Array();
 choices[40][0] = "Llamar a un telefono IP de otra red de otro edificio";
 choices[40][1] = "Llamar a otro telefono analogico";
 choices[40][2] = "Ser llamado por otro telefono analogico";
 choices[40][3] = "todos los anteriores";
 answers[40] = choices[40][3];
 units[40] = "117";
 comments[40] = "Id Pregunta: 4067. ";


//  Id pregunta: 4143 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  La intrusi&oacute;n basada en la habilidad del intruso en enga&ntilde;ar a la gente para que rompa los procedimientos normales de seguridad se llama";
 choices[41]= new Array();
 choices[41][0] = "surfeo sobre los hombros (shoulder surfing)";
 choices[41][1] = "huellas del cerebro (brain fingerprinting)";
 choices[41][2] = "ingenier&iacute;a social";
 choices[41][3] = "subterfugio";
 answers[41] = choices[41][2];
 units[41] = "111";
 comments[41] = "Id Pregunta: 4143. NULL";


//  Id pregunta: 4185 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Para transmitir Gigabit Ethernet";
 choices[42]= new Array();
 choices[42][0] = "Es necesario un cableado de categoria 6";
 choices[42][1] = "Es necesaria fibra &oacute;ptica";
 choices[42][2] = "Se puede usar cable coaxial";
 choices[42][3] = "ninguna de las anteriores";
 answers[42] = choices[42][3];
 units[42] = "99";
 comments[42] = "Id Pregunta: 4185. ";


//  Id pregunta: 4219 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  El router es un dispositivo que se utiliza en la interconexi&oacute;n de redes y opera  seg&uacute;n el modelo OSI en el nivel de:";
 choices[43]= new Array();
 choices[43][0] = "transporte";
 choices[43][1] = "red";
 choices[43][2] = "f&iacute;sico";
 choices[43][3] = "enlace";
 answers[43] = choices[43][1];
 units[43] = "102";
 comments[43] = "Id Pregunta: 4219. ";


//  Id pregunta: 4239 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Seg&uacute;n la Ley General de Telecomunicaciones 9/2014 corresponde el control e inspecci&oacute;n del espectro radioel&eacute;ctrico a";
 choices[44]= new Array();
 choices[44][0] = "Ministerio de Econom&iacute;a y Competitividad";
 choices[44][1] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[44][2] = "CNAF";
 choices[44][3] = "Ninguno de los anteriores";
 answers[44] = choices[44][3];
 units[44] = "110";
 comments[44] = "Id Pregunta: 4239. ";


//  Id pregunta: 4337 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Ana es responsable de comunicaciones en una entidad p&uacute;blica. La entidad dispone de una LAN con conmutadores (switch) 100Base-TX, con varios puertos libres (no usados) cada uno. El pr&oacute;ximo despliegue de una nueva aplicaci&oacute;n va a incrementar considerablemente el tr&aacute;fico, superando con mucho la capacidad de la infraestructura actual. La soluci&oacute;n m&aacute;s eficiente para cubrir las demandas de la nueva aplicaci&oacute;n, de entre las que se citan a continuaci&oacute;n, ser&aacute;:";
 choices[45]= new Array();
 choices[45][0] = "Desplegar una nueva infraestructura de fibra &oacute;ptica de 1Gb 1000Base-SX.";
 choices[45][1] = "Desplegar una nueva infraestructura de fibra &oacute;ptica de 10Gb 10Gbase-SR/SW.";
 choices[45][2] = "Implantar una red WiFi 802.11.";
 choices[45][3] = "Tender nuevas l&iacute;neas 100Base-TX entre los puertos libres de los conmutadores.";
 answers[45] = choices[45][3];
 units[45] = "100";
 comments[45] = "Id Pregunta: 4337. ";


//  Id pregunta: 4417 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes no es una desventaja del cable coaxial frente a otros medios de transmisi&oacute;n";
 choices[46]= new Array();
 choices[46][0] = "Diafon&iacute;a.";
 choices[46][1] = "Ruido t&eacute;rmico.";
 choices[46][2] = "Ruido de intermodulaci&oacute;n.";
 choices[46][3] = "Atenuaci&oacute;n";
 answers[46] = choices[46][0];
 units[46] = "99";
 comments[46] = "Id Pregunta: 4417. ";


//  Id pregunta: 4665 AÃ±o de creación de pregunta: 2009-01-01
 questions[47]= "48)  HSDPA (High Speed Download Packet Access) no cumple que:";
 choices[47]= new Array();
 choices[47][0] = "Es compatible en sentido inverso con W-CDMA.";
 choices[47][1] = "Utiliza t&eacute;cnicas de redundancia incremental en la retransmisi&oacute;n de tramas.";
 choices[47][2] = "Emplea Fast Packet Scheduling, con el cual la estaci&oacute;n base decide a qu&eacute; usuarios se les enviar&aacute; datos en el siguiente marco de 2 ms.";
 choices[47][3] = "Su velocidad pico para un usuario es de 1 Mbps.";
 answers[47] = choices[47][3];
 units[47] = "108";
 comments[47] = "Id Pregunta: 4665. ";


//  Id pregunta: 4806 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  El est&aacute;ndar del IEEE (Institute of Electrical and Electronics Engineers) que funciona bajo el est&aacute;ndar 802.11 y seaplica a la intercomunicaci&oacute;n entre puntos de acceso de distintos fabricantes, permitiendo el roaming o itineranciade clientes es el:";
 choices[48]= new Array();
 choices[48][0] = "802.11e";
 choices[48][1] = "802.11f";
 choices[48][2] = "802.11h";
 choices[48][3] = "802.11i";
 answers[48] = choices[48][1];
 units[48] = "107";
 comments[48] = "Id Pregunta: 4806. NULL";


//  Id pregunta: 4967 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  El principio de Frank-Condon, de especial importancia en las comunicaciones &oacute;pticas basadas en l&aacute;ser de semiconductor, establece que:";
 choices[49]= new Array();
 choices[49][0] = "La atenuaci&oacute;n de la se&ntilde;al disminuye con el cuadrado de la longitud de onda.";
 choices[49][1] = "S&oacute;lo son posibles transiciones con emisi&oacute;n de fotones cuando no hay cambio en la cantidad de movimiento delelectr&oacute;n.";
 choices[49][2] = "El ruido nodal es m&aacute;ximo en la fibra monomodo.";
 choices[49][3] = "El ruido nodal es m&iacute;nimo en la fibra monomodo.";
 answers[49] = choices[49][1];
 units[49] = "99";
 comments[49] = "Id Pregunta: 4967. Examen TIC B 2007";


//  Id pregunta: 5512 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  La red de conexi&oacute;n r&aacute;pida inaugurada por la Uni&oacute;n Europea en 2005 para atender la interconexi&oacute;n de investigadores europeos se denomina:";
 choices[50]= new Array();
 choices[50][0] = "TEIN2";
 choices[50][1] = "GEANT2";
 choices[50][2] = "ALICE";
 choices[50][3] = "DANTE";
 answers[50] = choices[50][1];
 units[50] = "103";
 comments[50] = "Id Pregunta: 5512. ";


//  Id pregunta: 5888 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  Teniendo una red IP con m&aacute;scara 255.255.240.0 &iquest;cu&aacute;ntos puestos se pueden direccionar?";
 choices[51]= new Array();
 choices[51][0] = "240";
 choices[51][1] = "512";
 choices[51][2] = "1024";
 choices[51][3] = "4094";
 answers[51] = choices[51][3];
 units[51] = "100";
 comments[51] = "Id Pregunta: 5888. MAP 2008 A1";


//  Id pregunta: 5944 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  El concepto de Web 2.0 agrupa 3 nociones fundamentales, &iquest;cu&aacute;l de las siguientes no es una de ellas?";
 choices[52]= new Array();
 choices[52][0] = "La posibilidad de participaci&oacute;n activa y de colaboraci&oacute;n de los usuarios en la producci&oacute;n de contenidos";
 choices[52][1] = "Las nuevas interfaces se acercan progresivamente a los est&aacute;ndares de cliente pesado";
 choices[52][2] = "Empleo de contenidos multimedia en las p&aacute;ginas web";
 choices[52][3] = "La capacidad de mezcla de diferentes servicios de distintos sitios en la mismap&aacute;gina.";
 answers[52] = choices[52][2];
 units[52] = "120";
 comments[52] = "Id Pregunta: 5944. ";


//  Id pregunta: 5992 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  En el encaminamiento por vector distancia:";
 choices[53]= new Array();
 choices[53][0] = "Cada router env&iacute;a su LSP a toda la red.";
 choices[53][1] = "Se pueden emplear varias m&eacute;tricas.";
 choices[53][2] = "Se produce el problema de cuenta a infinito.";
 choices[53][3] = "El algoritmo correspondiente tambi&eacute;n es conocido como algoritmo de Dijkstra.";
 answers[53] = choices[53][2];
 units[53] = "102";
 comments[53] = "Id Pregunta: 5992. TIC A 2009";


//  Id pregunta: 6141 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  &iquest;Qu&eacute; es el MOS (Mean Opinion Score)?";
 choices[54]= new Array();
 choices[54][0] = "Es una medida subjetiva de calidad de sonido, que se suele utilizar en sistemas de VoIP";
 choices[54][1] = "Es una de la pr&aacute;cticas que propone M&eacute;trica 3 para las reuniones de trabajo, junto con las reuniones, las entrevistas y el JAD (Joint Application Design)";
 choices[54][2] = "Es una t&eacute;cnica de estimaci&oacute;n de esfuerzo software, que se utiliza, por ejemplo, cuando no hay datos suficientes para estimar puntos funci&oacute;n";
 choices[54][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[54] = choices[54][0];
 units[54] = "100, 109";
 comments[54] = "Id Pregunta: 6141. ";


//  Id pregunta: 6156 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;Qu&eacute; tipo de licencia utiliza Samba?";
 choices[55]= new Array();
 choices[55][0] = "GPL";
 choices[55][1] = "GNU LGPL";
 choices[55][2] = "No utiliza ning&uacute;n tipo de licencia";
 choices[55][3] = "MGPL";
 answers[55] = choices[55][0];
 units[55] = "112";
 comments[55] = "Id Pregunta: 6156. ";


//  Id pregunta: 6224 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;Cu&aacute;les son las JSRs de las versiones v1 y v2 de la Java Portlet Specification?";
 choices[56]= new Array();
 choices[56][0] = "JSR 186 y JSR 268";
 choices[56][1] = "JSR 618 y JSR 628";
 choices[56][2] = "JSR 681 y JSR 682";
 choices[56][3] = "JSR 168 y JSR 286";
 answers[56] = choices[56][3];
 units[56] = "114";
 comments[56] = "Id Pregunta: 6224. ";


//  Id pregunta: 6349 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes no es un servicio de marcadores sociales en web?";
 choices[57]= new Array();
 choices[57][0] = "Delicious";
 choices[57][1] = "Digg";
 choices[57][2] = "Visconti";
 choices[57][3] = "Reddit";
 answers[57] = choices[57][2];
 units[57] = "120";
 comments[57] = "Id Pregunta: 6349. NULL";


//  Id pregunta: 6360 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  El servicio universal definido en la ley 9/2014 deber&aacute; garantizar:";
 choices[58]= new Array();
 choices[58][0] = "Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general de n&uacute;meros de abonados, ya sea impresa o electr&oacute;nica, o ambas, y se actualice, como m&aacute;ximo, una vez al a&ntilde;o.";
 choices[58][1] = "Que todos los usuarios finales puedan obtener una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica, que le ofrezca la posibilidad de efectuar y recibir llamadas telef&oacute;nicas, enviar mensajes cortos de texto (SMS) y permitir comunicaciones de fax y datos a velocidad suficiente para acceder de forma funcional a Internet.";
 choices[58][2] = "Que exista una oferta suficiente de equipos terminales de acceso a Internet de banda ancha.";
 choices[58][3] = "Conexi&oacute;n a la red p&uacute;blica de comunicaciones con capacidad de acceso funcional a Internet deber&aacute; permitir comunicaciones de datos en banda ancha a una velocidad en sentido descendente de 1 Mbit por segundo";
 answers[58] = choices[58][3];
 units[58] = "110";
 comments[58] = "Id Pregunta: 6360. Art&iacute;culo 25 Ley 9/2014";


//  Id pregunta: 6489 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Qu&eacute; comandos se usan en POP3 para descargarse y borrar los dos primeros mensajes del buz&oacute;n de correo?";
 choices[59]= new Array();
 choices[59][0] = "RETR 1 DELE 1 RETR 2 DELE 2";
 choices[59][1] = "RETE 1,2 DELE 1,2";
 choices[59][2] = "RETR 1-2 DELE 1-2";
 choices[59][3] = "RETR 1 RETR 2";
 answers[59] = choices[59][0];
 units[59] = "106";
 comments[59] = "Id Pregunta: 6489. Castilla La Mancha 2009";


//  Id pregunta: 6546 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Deficiencias dentro del sistema Kerberos";
 choices[60]= new Array();
 choices[60][0] = "El centro de distribuci&oacute;n de claves es un &uacute;nico punto de fallo";
 choices[60][1] = "Privacidad";
 choices[60][2] = "Integridad";
 choices[60][3] = "Todas las respuestas anteriores son incorrectos";
 answers[60] = choices[60][0];
 units[60] = "111";
 comments[60] = "Id Pregunta: 6546. NULL";


//  Id pregunta: 6550 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l es el m&eacute;todo de autenticaci&oacute;n mejor?";
 choices[61]= new Array();
 choices[61][0] = "Algo que alguien sabe";
 choices[61][1] = "Algo que alguien es";
 choices[61][2] = "Algo que alguien tiene";
 choices[61][3] = "Lo que una persona sabe y es";
 answers[61] = choices[61][3];
 units[61] = "111";
 comments[61] = "Id Pregunta: 6550. NULL";


//  Id pregunta: 7282 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Generalmente el primer paso en un proceso de virtualizaci&oacute;n de infraestructuras TIC en una Organizaci&oacute;n suele ser un proyecto de:";
 choices[62]= new Array();
 choices[62][0] = "Consolidaci&oacute;n de servidores";
 choices[62][1] = "Virtualizaci&oacute;n de salvaguardas";
 choices[62][2] = "SaaS (Storage as a Service)";
 choices[62][3] = "Computing Mobility";
 answers[62] = choices[62][0];
 units[62] = "119";
 comments[62] = "Id Pregunta: 7282. Examen TIC B 2009";


//  Id pregunta: 8174 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  La Recomendaci&oacute;n UIT-T I.411 &quot;Configuraciones de referencia de las interfaces Usuario-Red de la RDSI&quot;, define el punto de referencia T entre:";
 choices[63]= new Array();
 choices[63][0] = "La Terminaci&oacute;n de Red 1 (NT1) y la Terminaci&oacute;n de L&iacute;nea (LT).";
 choices[63][1] = "La Terminaci&oacute;n de Red 2 (NT2) y la Terminaci&oacute;n de Red 1 (NT1).";
 choices[63][2] = "El Equipo Terminal de Tipo 1 (TE1) y el Adaptador de Terminal (TA).";
 choices[63][3] = "El Equipo Terminal de Tipo 2 (TE2) y el Adaptador de Terminal (TA).";
 answers[63] = choices[63][1];
 units[63] = "103";
 comments[63] = "Id Pregunta: 8174. Examen TIC A1 2010";


//  Id pregunta: 8477 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Indique cu&aacute;l de los siguientes es un est&aacute;ndar WiMAX para servicios m&oacute;viles:";
 choices[64]= new Array();
 choices[64][0] = "IEEE 802.16-2004";
 choices[64][1] = "IEEE 802.16d";
 choices[64][2] = "IEEE 802.16e.";
 choices[64][3] = "Wimax no permite acceso a servicios m&oacute;viles.";
 answers[64] = choices[64][2];
 units[64] = "107";
 comments[64] = "Id Pregunta: 8477. Examen TIC A2 2010 interna";


//  Id pregunta: 8480 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Qu&eacute; es una DMZ o zona desmilitarizada?";
 choices[65]= new Array();
 choices[65][0] = "Es una subred perimetral aislada por cortafuegos aunque visible desde Internet.";
 choices[65][1] = "a) Es una subred libre de ataques externos, donde residen -entre otros- servidores con bases de datos criticas.";
 choices[65][2] = "Es una subred desde la que se permiten conexiones a la red interna, por estar la primera desmilitarizada.";
 choices[65][3] = "Es un tipo de honeypot.";
 answers[65] = choices[65][0];
 units[65] = "113";
 comments[65] = "Id Pregunta: 8480. Examen TIC A2 2010 interna";


//  Id pregunta: 8481 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l es el well-known port del protocolo SNMP en el modo petici&oacute;n-respuesta?";
 choices[66]= new Array();
 choices[66][0] = "169.";
 choices[66][1] = "161.";
 choices[66][2] = "171.";
 choices[66][3] = "179.";
 answers[66] = choices[66][1];
 units[66] = "104";
 comments[66] = "Id Pregunta: 8481. Examen TIC A2 2010 interna";


//  Id pregunta: 8664 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  La tecnolog&iacute;a que se basa en el protocolo SWAP (shared wireless access protocol) y que tiene como objetivo la conectividad sin cables dentro del hogar se llama:";
 choices[67]= new Array();
 choices[67][0] = "Bluetooth";
 choices[67][1] = "HomeRF";
 choices[67][2] = "HiperLAN/2";
 choices[67][3] = "IrLMP";
 answers[67] = choices[67][1];
 units[67] = "107";
 comments[67] = "Id Pregunta: 8664. Examen UPM A2 2011";


//  Id pregunta: 8728 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  El acr&oacute;nimo FCAPS en gesti&oacute;n de redes se refiere a:";
 choices[68]= new Array();
 choices[68][0] = "Failure, Configuration, Accountability, Performance, Software, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y software de red.";
 choices[68][1] = "Failure, Compatibility, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, compatibilidad, contabilidad, rendimiento y seguridad.";
 choices[68][2] = "Failure, Configuration, Adaptability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, adaptabilidad, rendimiento y seguridad.";
 choices[68][3] = "Failure, Configuration, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y seguridad.";
 answers[68] = choices[68][3];
 units[68] = "104";
 comments[68] = "Id Pregunta: 8728. Examen UPM A2 2011";


//  Id pregunta: 8828 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)   Si hablamos de virtualizaci&oacute;n &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[69]= new Array();
 choices[69][0] = " La virtualizaci&oacute;n del sistema operativo ofrece un conjunto de librer&iacute;as que hace que las aplicaciones que se ejecutan aparenten que lo hacen en una m&aacute;quina dedicada ";
 choices[69][1] = " La virtualizaci&oacute;n del sistema operativo es la mejor soluci&oacute;n para configuraciones heterog&eacute;neas";
 choices[69][2] = " La virtualizaci&oacute;n del sistema operativo hace que las aplicaciones funcionen siempre igual de r&aacute;pido que en el mismo sistema dedicado";
 choices[69][3] = " En emulaci&oacute;n hardware o VMM las aplicaciones no pueden migrarse entre m&aacute;quinas diferentes";
 answers[69] = choices[69][0];
 units[69] = "119";
 comments[69] = "Id Pregunta: 8828. Examen UC3M 2010";


//  Id pregunta: 8999 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Qu&eacute; versiones de SNMP no implementan encriptaci&oacute;n de sus paquetes?";
 choices[70]= new Array();
 choices[70][0] = "v1 y v2";
 choices[70][1] = "v1 y v2c";
 choices[70][2] = "v1";
 choices[70][3] = "todas las versiones implementan encriptaci&oacute;n de sus paquetes";
 answers[70] = choices[70][1];
 units[70] = "104";
 comments[70] = "Id Pregunta: 8999. Examen UPM A2 2011";


//  Id pregunta: 9006 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Entre las competencias que la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, atribuye a la Comisi&oacute;n Nacional de los Mercados y la Competencia, est&aacute; analizar la competencia efectiva en los mercados de referencia que defina y determinar los operadores que en esos mercados se consideren:";
 choices[71]= new Array();
 choices[71][0] = "Dominantes.";
 choices[71][1] = "Con poder significativo en el mercado.";
 choices[71][2] = "Anticompetitivos.";
 choices[71][3] = "Incumbentes";
 answers[71] = choices[71][1];
 units[71] = "110";
 comments[71] = "Id Pregunta: 9006. Teleco Ayto. Madrid 2010. Modificada seg&uacute;n Ley 9/2014";


//  Id pregunta: 9007 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  No ser&aacute; necesario que una ICT incluya inicialmente la red de distribuci&oacute;n para los servicios de:";
 choices[72]= new Array();
 choices[72][0] = "Telecomunicaciones por cable.";
 choices[72][1] = "Radiodifusi&oacute;n.";
 choices[72][2] = "Telefon&iacute;a.";
 choices[72][3] = "Deber&aacute; incluir todas ellas.";
 answers[72] = choices[72][3];
 units[72] = "99";
 comments[72] = "Id Pregunta: 9007. Teleco Ayto. Madrid 2010- Modificaci&oacute;n de la original por MVO al quedar Derogada por RD 346/2011";


//  Id pregunta: 9013 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  A la hora de planificar las frecuencias para un radioenlace de dos vanos A-B y B-C en la banda de 13 GHz:";
 choices[73]= new Array();
 choices[73][0] = "Si en el punto intermedio B se recibe en la semibanda baja, en B se debe transmitir en la semibanda alta.";
 choices[73][1] = "Para un sentido de transmisi&oacute;n dado, se deben emplear la misma semibanda en los dos vanos A-B y B-C.";
 choices[73][2] = "Siempre se debe respetar el sentido (transmisi&oacute;n o recepci&oacute;n) asignado a cada semibanda en el CNAF para la banda de 1GHz.";
 choices[73][3] = "Ninguna de las anteriores";
 answers[73] = choices[73][0];
 units[73] = "108";
 comments[73] = "Id Pregunta: 9013. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9028 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Indica cual de estas afirmaciones es cierta";
 choices[74]= new Array();
 choices[74][0] = "En RDSI igual que en RTB el descolgado del tel&eacute;fono produce un &quot;corto&quot; de tal forma que la corriente que pasa por el bucle indica a la central que el abonado ha descolgado.";
 choices[74][1] = "En RDSI el terminador de red aun siendo activo en caso de ca&iacute;da de la alimentaci&oacute;n local es capaz de establecer/mantener la conversaci&oacute;n.";
 choices[74][2] = "Los terminales que cuelgan de la RTB (Red Telef&oacute;nica B&aacute;sica) no pueden establecer ning&uacute;n tipo de comunicaci&oacute;n con los que cuelgan de la RDSI (Red Digital de Servicios Integrados).";
 choices[74][3] = "Ninguna de las anteriores";
 answers[74] = choices[74][1];
 units[74] = "103";
 comments[74] = "Id Pregunta: 9028. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9330 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  El cable de categor&iacute;a 6 seg&uacute;n la norma ANSI";
 choices[75]= new Array();
 choices[75][0] = "Equivale al cable clase E de ISO";
 choices[75][1] = "Es el cable adecuado para transmisiones de 100 mbps";
 choices[75][2] = "Su rango de funcionamiento alcanza los 100 mhz";
 choices[75][3] = "Se trata de una";
 answers[75] = choices[75][0];
 units[75] = "99";
 comments[75] = "Id Pregunta: 9330. NULL";


//  Id pregunta: 9333 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Se&ntilde;ale la respuesta";
 choices[76]= new Array();
 choices[76][0] = "El subsistema vertical conecta el distribuidor de campus con los puntos de transicion (PT)";
 choices[76][1] = "El subsistema horizontal parte de los cuadros de distribucion de planta y llega a las rosetas de conexion.";
 choices[76][2] = "El subsistema horizontal conecta los puntos de transicion (PT) entre s&iacute;";
 choices[76][3] = "El cableado de campus comienza en los distribuidores de planta.";
 answers[76] = choices[76][1];
 units[76] = "99";
 comments[76] = "Id Pregunta: 9333. NULL";


//  Id pregunta: 9348 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  En RDSI, en el lado del operador:";
 choices[77]= new Array();
 choices[77][0] = "La Terminaci&oacute;n de Central se encarga de manejar el protocolo de enlace de datos.";
 choices[77][1] = "La terminaci&oacute;n de L&iacute;nea se encarga de manejar el protocolo de enlace de datos.";
 choices[77][2] = "La terminaci&oacute;n de central est&aacute; entre la interfaz U y V.";
 choices[77][3] = "La Terminaci&oacute;n de L&iacute;nea est&aacute; entre la interfaz U y T.";
 answers[77] = choices[77][0];
 units[77] = "103";
 comments[77] = "Id Pregunta: 9348. ASTIC 2011 pag 8";


//  Id pregunta: 9384 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Seg&uacute;n la UIT, dentro de la denominaci&oacute;n 4G, se pueden incluir las siguientes tecnolog&iacute;as";
 choices[78]= new Array();
 choices[78][0] = "LTE";
 choices[78][1] = "WiMAX y LTE";
 choices[78][2] = "WiMAX";
 choices[78][3] = "LTE, WiMAX y HSPA+";
 answers[78] = choices[78][3];
 units[78] = "108";
 comments[78] = "Id Pregunta: 9384. NULL";


//  Id pregunta: 9502 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Cosmoplayer de Platinum:";
 choices[79]= new Array();
 choices[79][0] = "Es un plugin que reproduce sonidos";
 choices[79][1] = "Es un plugin que reproduce pel&iacute;culas";
 choices[79][2] = "Es un plugin que reproduce documentos VRML (formato de realidad virtual)";
 choices[79][3] = "Ninguna de las anteriores es correcta";
 answers[79] = choices[79][2];
 units[79] = "114";
 comments[79] = "Id Pregunta: 9502. NULL";


//  Id pregunta: 9896 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Mediante la tecnolog&iacute;a EGPRS (Enhanced GPRS) se pueden llegar a conseguir velocidades de transmisi&oacute;n en modo paquetes de hasta";
 choices[80]= new Array();
 choices[80][0] = "384 kbps.";
 choices[80][1] = "115 kbps.";
 choices[80][2] = "2 Mbps.";
 choices[80][3] = "10 Mbps.";
 answers[80] = choices[80][0];
 units[80] = "108";
 comments[80] = "Id Pregunta: 9896. TIC A1, Examen 2013";


//  Id pregunta: 9934 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En la Capa de Sesi&oacute;n (nivel 5) &iquest;cu&aacute;ntos tipos de puntos de sincronizaci&oacute;n existen?";
 choices[81]= new Array();
 choices[81][0] = "2, uno mayor y otro menor.";
 choices[81][1] = "3, mayor, mediano y menor.";
 choices[81][2] = "Ninguno.";
 choices[81][3] = "Depende del protocolo implementado.";
 answers[81] = choices[81][0];
 units[81] = "100";
 comments[81] = "Id Pregunta: 9934. NULL";


//  Id pregunta: 10063 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de los siguientes canales de acceso NO se emplea en RDSI?";
 choices[82]= new Array();
 choices[82][0] = "B ";
 choices[82][1] = "D";
 choices[82][2] = "H ";
 choices[82][3] = "I";
 answers[82] = choices[82][3];
 units[82] = "103, 109";
 comments[82] = "Id Pregunta: 10063. TIC A2, libre, Examen 2013";


//  Id pregunta: 10138 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Qu&eacute; novedad introduce el est&aacute;ndar DOCSIS 3.1?";
 choices[83]= new Array();
 choices[83][0] = "No existe dicho est&aacute;ndar";
 choices[83][1] = "Puede soportar hasta 10 Gbit/s de bajada";
 choices[83][2] = "Permite el uso de tecnolog&iacute;as S-CDMA";
 choices[83][3] = "Permite el ajuste de diferentes niveles de calidad de servicio, seg&uacute;n el servicio empleado";
 answers[83] = choices[83][1];
 units[83] = "105";
 comments[83] = "Id Pregunta: 10138. ";


//  Id pregunta: 10206 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Cual de las siguientes afirmaciones es correcta respecto a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles?";
 choices[84]= new Array();
 choices[84][0] = "Es compatible con las redes IEEE 802.16e";
 choices[84][1] = "Usa una nueva interfaz aire basada en OFDMA (Orthogonal Frequency Division Multiple Access) en vez de WCDMA (Wideband Code Division Multiple Access)";
 choices[84][2] = "Desaparecen los hard handovers y solo existen soft handovers";
 choices[84][3] = "En la arquitectura se introduce un nuevo elemento llamado MME (Mobility Management Entity) basado en la antigua HLR y AuC";
 answers[84] = choices[84][1];
 units[84] = "108";
 comments[84] = "Id Pregunta: 10206. 4G busca la convergencia con WiMax en el est&aacute;ndar 802.16m. Desaparecen los soft handovers y solo existen hard handovers al desaparecer los RNC e incorporarse a los eNode B. El nuevo elemento basado en la antigua HLR y AuC es HSS (Home Subscriber Server), ";


//  Id pregunta: 10238 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Se&ntilde;ala la tecnolog&iacute;a que soporta transacciones:";
 choices[85]= new Array();
 choices[85][0] = "RMI";
 choices[85][1] = "JTS";
 choices[85][2] = "JMAPI";
 choices[85][3] = "JTA";
 answers[85] = choices[85][3];
 units[85] = "116";
 comments[85] = "Id Pregunta: 10238. NULL";


//  Id pregunta: 10516 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Indique cu&aacute;l de las afirmaciones es falsa";
 choices[86]= new Array();
 choices[86][0] = "Las redes de telecomunicaciones que desarrollen actividades esenciales para la defensa nacional integran, se reservan al Estado y se rigen por su normativa espec&iacute;fica.";
 choices[86][1] = "En el marco de las funciones relacionadas con la defensa civil, corresponde al Ministerio de Defensa estudiar, programar, proponer y ejecutar las medidas relacionadas con las telecomunicaciones.";
 choices[86][2] = "En el &aacute;mbito de la protecci&oacute;n civil, en su espec&iacute;fica relaci&oacute;n con el uso de las telecomunicaciones, el Ministerio de Industria, Energ&iacute;a y Turismo cooperar&aacute; con el Ministerio del Interior y con los &oacute;rganos responsables de las comunidades aut&oacute;nomas.";
 choices[86][3] = "El Gobierno, con car&aacute;cter excepcional y transitorio, podr&aacute; acordar la asunci&oacute;n por la Administraci&oacute;n General del Estado de la gesti&oacute;n directa de determinados servicios de comunicaciones electr&oacute;nicas. ";
 answers[86] = choices[86][1];
 units[86] = "110";
 comments[86] = "Id Pregunta: 10516. ";


//  Id pregunta: 10522 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Cu&aacute;l de los siguientes organismos no forma parte de la Comisi&oacute;n Interministerial sobre radiofrecuencias y salud";
 choices[87]= new Array();
 choices[87][0] = "El Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[87][1] = "El Ministerio de Sanidad, Servicios Sociales e Igualdad ";
 choices[87][2] = "El Instituto de Salud Carlos III por parte del Ministerio de Econom&iacute;a y Competitividad.";
 choices[87][3] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia";
 answers[87] = choices[87][3];
 units[87] = "110";
 comments[87] = "Id Pregunta: 10522. ";


//  Id pregunta: 10889 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Se&ntilde;ale cu&aacute;l de las siguientes direcciones IP puede ser asignada a un host en la siguiente subred 132.26.41.90/26:";
 choices[88]= new Array();
 choices[88][0] = "132.26.41.128";
 choices[88][1] = "132.26.41.127";
 choices[88][2] = "132.26.41.124";
 choices[88][3] = "132.26.41.55";
 answers[88] = choices[88][2];
 units[88] = "100";
 comments[88] = "Id Pregunta: 10889. Examen GSI 2014";


//  Id pregunta: 10895 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  El PUE (Power Usage effectiveness) es una m&eacute;trica que trata de determinar la eficiencia energ&eacute;tica de un Centro de Proceso de Datos, y se define como el resultado de dividir:";
 choices[89]= new Array();
 choices[89][0] = "La potencia total consumida por el CPD por la potencia consumida en el equipamiento TI (servidores, equipos de comunicaciones, almacenamiento y otros).";
 choices[89][1] = "La potencia total consumida por el CPD por la potencia usada en el equipamiento no TI (climatizaci&oacute;n, distribuci&oacute;n el&eacute;ctrica, iluminaci&oacute;n, etc).";
 choices[89][2] = "La potencia consumida por el equipamiento TI entre la consumida por el equipamiento no TI.";
 choices[89][3] = "La potencia total consumida por el CPD por la potencia consumida en el equipamiento de c&oacute;mputo (servidores), excluyendo equipos de comunicaciones y almacenamiento.";
 answers[89] = choices[89][0];
 units[89] = "0";
 comments[89] = "Id Pregunta: 10895. Examen GSI 2014";


//  Id pregunta: 10896 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Diferencia entre el protocolo RIP v1 y RIP v2:";
 choices[90]= new Array();
 choices[90][0] = "RIP v1 es un protocolo de estado del enlace mientras que el RIP v2 es de vector de distancia.";
 choices[90][1] = "RIP v1 encapsula los mensajes en paquetes UDP y RIP v2 en paquetes TCP.";
 choices[90][2] = "RIP v1 no admite subredes y RIP v2 si las admite.";
 choices[90][3] = "RIP v1 es un protocolo de encaminamiento din&aacute;mico de tipo IGP Y RIP v2 es un protocolo de encaminamiento din&aacute;mico de tipo BGP.";
 answers[90] = choices[90][2];
 units[90] = "102";
 comments[90] = "Id Pregunta: 10896. Examen GSI 2014";


//  Id pregunta: 11231 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En relaci&oacute;n con las tecnolog&iacute;as JAXP y StAX seleccione la respuesta err&oacute;nea";
 choices[91]= new Array();
 choices[91][0] = "La forma de realizar el parsing es distinta, de tipo push en el caso de StAX frente al tipo pull de SAX.";
 choices[91][1] = "La API JAXP nos facilita el acceso, la generaci&oacute;n, validaci&oacute;n y transformaci&oacute;n de ficheros XML.";
 choices[91][2] = "La API StAX es bidireccional, permitiendo tanto la lectura como la escritura de documentos XML.";
 choices[91][3] = "La API StAX expone m&eacute;todos para el procesamiento de documentos XML de forma iterativa y basada en eventos.";
 answers[91] = choices[91][0];
 units[91] = "116";
 comments[91] = "Id Pregunta: 11231. ";


//  Id pregunta: 11234 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes no es un framework de desarrollo de aplicaciones web Java?";
 choices[92]= new Array();
 choices[92][0] = "Apache Struts.";
 choices[92][1] = "Spring Framework.";
 choices[92][2] = "Cibernate ORM.";
 choices[92][3] = "Tapestry.";
 answers[92] = choices[92][2];
 units[92] = "116";
 comments[92] = "Id Pregunta: 11234. ";


//  Id pregunta: 11321 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Cu&aacute;l de los siguientes conceptos no est&aacute; relacionada con la web sem&aacute;ntica";
 choices[93]= new Array();
 choices[93][0] = "SPARQL";
 choices[93][1] = "OWL";
 choices[93][2] = "DCAT";
 choices[93][3] = "XSN";
 answers[93] = choices[93][3];
 units[93] = "120";
 comments[93] = "Id Pregunta: 11321. ";


//  Id pregunta: 11327 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  En MPLS, c&oacute;mo se llama el router que no es de frontera";
 choices[94]= new Array();
 choices[94][0] = "LSR";
 choices[94][1] = "LER";
 choices[94][2] = "LSP";
 choices[94][3] = "FEC";
 answers[94] = choices[94][0];
 units[94] = "100";
 comments[94] = "Id Pregunta: 11327. ";


//  Id pregunta: 11443 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Identifique la respuesta incorrecta sobre derechos del usuario final de la LGT (9/2014):";
 choices[95]= new Array();
 choices[95][0] = "Tiene derecho a celebrar contratos con operadores.";
 choices[95][1] = "Tiene derecho al cambio de operador, con conservaci&oacute;n de los n&uacute;meros.";
 choices[95][2] = "Tiene derecho a una factura en papel, clara y detallada.";
 choices[95][3] = "Tiene derecho a acceder a los servicios de emergencia.";
 answers[95] = choices[95][2];
 units[95] = "110";
 comments[95] = "Id Pregunta: 11443. ";


//  Id pregunta: 11481 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n la Ley 9/2014, los usuarios finales de comunicaciones electr&oacute;nicas tienen derecho a (seleccione la incorrecta):";
 choices[96]= new Array();
 choices[96][0] = "Oponerse a recibir llamadas no deseadas con fines de comunicaci&oacute;n comercial con intervenci&oacute;n humana.";
 choices[96][1] = "A ser informado del derecho indicado en la opci&oacute;n anterior.";
 choices[96][2] = "A no recibir llamadas o mensajes de fax con fines de comunicaci&oacute;n comercial sin haber prestado su consentimiento previo";
 choices[96][3] = "Todas las anteriores son correctas";
 answers[96] = choices[96][2];
 units[96] = "110";
 comments[96] = "Id Pregunta: 11481. ";


//  Id pregunta: 11653 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Una trama STM-4 tiene una capacidad de:";
 choices[97]= new Array();
 choices[97][0] = "155 Mbps";
 choices[97][1] = "622 Mbps";
 choices[97][2] = "2,5 Gbps";
 choices[97][3] = "10 Gbps";
 answers[97] = choices[97][1];
 units[97] = "101";
 comments[97] = "Id Pregunta: 11653. ";


//  Id pregunta: 11668 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  POCO son las siglas de:";
 choices[98]= new Array();
 choices[98][0] = "Plain Old CLR Object";
 choices[98][1] = "Plain Old Class Object";
 choices[98][2] = "Plain Old COM Object";
 choices[98][3] = "Plain Old Connection Object";
 answers[98] = choices[98][0];
 units[98] = "115";
 comments[98] = "Id Pregunta: 11668. ";


//  Id pregunta: 11754 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de los siguientes tipos de cables no presenta apantallamiento?";
 choices[99]= new Array();
 choices[99][0] = "STP";
 choices[99][1] = "S/STP";
 choices[99][2] = "FTP";
 choices[99][3] = "UTP";
 answers[99] = choices[99][3];
 units[99] = "99";
 comments[99] = "Id Pregunta: 11754. ";


