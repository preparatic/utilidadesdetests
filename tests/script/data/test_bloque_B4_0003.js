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

//  Id pregunta: 1475 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Respecto a los formatos de compresi&oacute;n de video de la familia H.26x, es falso que:";
 choices[0]= new Array();
 choices[0][0] = "H.261 est&aacute; orientado a caudal constante, m&aacute;s id&oacute;neo para video sobre RDSI";
 choices[0][1] = "H.263 es m&aacute;s eficiente que H.261 y est&aacute; orientado a video sobre internet, con caudal variable";
 choices[0][2] = "No ofrecen compresi&oacute;n temporal, aunque s&iacute; compresi&oacute;n espacial";
 choices[0][3] = "Todo lo anterior es falso";
 answers[0] = choices[0][3];
 units[0] = "117";
 comments[0] = "Id Pregunta: 1475. ";


//  Id pregunta: 2894 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes planes no formar&iacute;a parte de un Plan de Contingencias?:";
 choices[1]= new Array();
 choices[1][0] = "Plan de emergencia";
 choices[1][1] = "Plan de sistemas";
 choices[1][2] = "Plan de recuperaci&oacute;n";
 choices[1][3] = "Plan de respaldo";
 answers[1] = choices[1][1];
 units[1] = "31";
 comments[1] = "Id Pregunta: 2894. ";


//  Id pregunta: 2922 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l es el est&aacute;ndar de WLAN que permite transmitir a una velocidad efectiva de entre 12 y 24 Mbps y a una velocidad m&aacute;xima de 54 Mbps?";
 choices[2]= new Array();
 choices[2][0] = "IEEE 802.11a";
 choices[2][1] = "IEEE 802.11b";
 choices[2][2] = "IEEE 802.11g";
 choices[2][3] = "IEEE 802.11i";
 answers[2] = choices[2][2];
 units[2] = "101, 107";
 comments[2] = "Id Pregunta: 2922. Similar a examen TIC SS A 2003";


//  Id pregunta: 2956 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Su ordenador tiene la direcci&oacute;n IP 10.2.40.16 y m&aacute;scara de subred de 26 bits. Indique cu&aacute;l de las siguientes direcciones IP puede corresponderso con su router por defecto:";
 choices[3]= new Array();
 choices[3][0] = "10.2.40.64";
 choices[3][1] = "10.2.41.45";
 choices[3][2] = "10.2.40.63";
 choices[3][3] = "10.2.40.1";
 answers[3] = choices[3][3];
 units[3] = "100";
 comments[3] = "Id Pregunta: 2956. Examen TIC MAP B 2004";


//  Id pregunta: 2962 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Qu&eacute; es falso respecto a Network Address Translation:";
 choices[4]= new Array();
 choices[4][0] = "Opera en el nivel de red";
 choices[4][1] = "Realiza cambios en la direcci&oacute;n del paquete TCP";
 choices[4][2] = "Realiza cambios en la direcci&oacute;n del paquete IP";
 choices[4][3] = "Realiza cambios en el puerto origen del paquete TCP";
 answers[4] = choices[4][1];
 units[4] = "100";
 comments[4] = "Id Pregunta: 2962. Tanenbaum. Para evitar la ambig&uuml;edad, para los protocolos TCP y UDP, se cambian os n&uacute;meros de puerto as&iacute; como la combinaci&oacute;n de la informaci&oacute;n de IP y puerto en el paquete devuelto.";


//  Id pregunta: 2975 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  El sistema de comunicaciones m&oacute;viles GSM se compone de diversos elementos tales como el HLR y VLR que son?";
 choices[5]= new Array();
 choices[5][0] = "estaciones base";
 choices[5][1] = "bases de datos de usuarios";
 choices[5][2] = "MSC";
 choices[5][3] = "ninguna de las anteriores";
 answers[5] = choices[5][1];
 units[5] = "108";
 comments[5] = "Id Pregunta: 2975. Examen Julio 2003";


//  Id pregunta: 3122 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;C&oacute;mo se denominan en una red UMTS los componentes equivalentes a las BTS  de una red GSM?:";
 choices[6]= new Array();
 choices[6][0] = "UTRAN";
 choices[6][1] = "Nodos-B";
 choices[6][2] = "RNC";
 choices[6][3] = "RNS";
 answers[6] = choices[6][1];
 units[6] = "108";
 comments[6] = "Id Pregunta: 3122. ";


//  Id pregunta: 3129 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute; de los siguientes no es un servicio del nivel de enlace de datos del modelo de referencia OSI?:";
 choices[7]= new Array();
 choices[7][0] = "Establecimiento y liberaci&oacute;n de un enlace de datos";
 choices[7][1] = "Control de la transmisi&oacute;n y recuperaci&oacute;n de fallos";
 choices[7][2] = "Gesti&oacute;n del propio nivel";
 choices[7][3] = "Identificaci&oacute;n de circuitos de datos";
 answers[7] = choices[7][3];
 units[7] = "100";
 comments[7] = "Id Pregunta: 3129. NULL";


//  Id pregunta: 3133 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de estas afirmaciones es verdadera respecto a TCP/IP?:";
 choices[8]= new Array();
 choices[8][0] = "TCP tiene el mismo formato de mensaje que IP";
 choices[8][1] = "UDP no es un protocolo TCP/IP";
 choices[8][2] = "Para que TCP/IP funciones es necesario disponer de un interfaz Ethernet";
 choices[8][3] = "Una m&aacute;quina con varias tarjetas de red tiene varias direcciones Internet";
 answers[8] = choices[8][3];
 units[8] = "100";
 comments[8] = "Id Pregunta: 3133. NULL";


//  Id pregunta: 3149 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto al modelo OSI de ISO?";
 choices[9]= new Array();
 choices[9][0] = "El modelo no especifica relaci&oacute;n de ning&uacute;n tipo ni con lenguajes de programaci&oacute;n ni con sistemas operativos";
 choices[9][1] = "El modelo no contempla aspectos relativos a los interfaces de la aplicaci&oacute;n ni a los usuarios";
 choices[9][2] = "El modelo describe el comportamiento externo y la estructura interna de los sistemas ";
 choices[9][3] = "Todas las respuestas anteriores son falsas";
 answers[9] = choices[9][2];
 units[9] = "100";
 comments[9] = "Id Pregunta: 3149. NULL";


//  Id pregunta: 3164 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas corresponde con el est&aacute;ndar GSM?:";
 choices[10]= new Array();
 choices[10][0] = "Soporta una amplia gama de servicios de transmisi&oacute;n de datos en todas las velocidades est&aacute;ndar hasta los 64 kbps";
 choices[10][1] = "Se basa en los principios de la Red Digital de Servicios Integrados";
 choices[10][2] = "La informaci&oacute;n referente a los abonados se encuentra en una &uacute;nica base de datos";
 choices[10][3] = "En su componente radio se utiliza la banda de los 900 Mhz con el m&eacute;todo DMA, que proporciona ocho canales telef&oacute;nicos en una misma portadora y una codificaci&oacute;n de voz a 64 kbps";
 answers[10] = choices[10][1];
 units[10] = "108";
 comments[10] = "Id Pregunta: 3164. ";


//  Id pregunta: 3220 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes dispositivos es el que trabaja como m&aacute;ximo a nivel 3 - Red - del sistema OSI?:";
 choices[11]= new Array();
 choices[11][0] = "Repetidores";
 choices[11][1] = "Puentes (Bridges)";
 choices[11][2] = "Enrutadores (routers)";
 choices[11][3] = "Pasarelas (Gateways)";
 answers[11] = choices[11][2];
 units[11] = "100";
 comments[11] = "Id Pregunta: 3220. NULL";


//  Id pregunta: 3256 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;ntos canales TDMA admite un sistema GSM 900?:";
 choices[12]= new Array();
 choices[12][0] = "992";
 choices[12][1] = "1000";
 choices[12][2] = "496";
 choices[12][3] = "2000";
 answers[12] = choices[12][0];
 units[12] = "108";
 comments[12] = "Id Pregunta: 3256. ";


//  Id pregunta: 3274 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Por qu&eacute; son m&aacute;s eficiente los protocolos orientados a bit que los orientados a car&aacute;cter?:";
 choices[13]= new Array();
 choices[13][0] = "Debido al relleno de bits";
 choices[13][1] = "La eficiencia de ambos protocolos es la misma";
 choices[13][2] = "Debido al relleno de caracteres";
 choices[13][3] = "Debido a la codificaci&oacute;n binaria de los caracteres";
 answers[13] = choices[13][0];
 units[13] = "97";
 comments[13] = "Id Pregunta: 3274. NULL";


//  Id pregunta: 3311 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Qu&eacute; se entiende por modem inteligente?:";
 choices[14]= new Array();
 choices[14][0] = "Aquellos que son capaces de detectar errores";
 choices[14][1] = "Aquellos que llevan microprocesador y memoria";
 choices[14][2] = "Aquellos que no pueden detectar m&uacute;ltiples llamadas";
 choices[14][3] = "Aquellos que funcionan igual a un terminal";
 answers[14] = choices[14][0];
 units[14] = "97";
 comments[14] = "Id Pregunta: 3311. NULL";


//  Id pregunta: 3319 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Qui&eacute;nes son considerados los padres de internet?";
 choices[15]= new Array();
 choices[15][0] = "William H. Gates y Paul Allen";
 choices[15][1] = "Steve Jobs y Steve Wozniak";
 choices[15][2] = "Vinton Cerf y Robert Kahn";
 choices[15][3] = "Brian Kernighan y Dennis Ritchie";
 answers[15] = choices[15][2];
 units[15] = "112";
 comments[15] = "Id Pregunta: 3319. ";


//  Id pregunta: 3376 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El est&aacute;ndar ITU-T para audio digital no comprimido en el sonido telef&oacute;nico es:";
 choices[16]= new Array();
 choices[16][0] = "Q.932";
 choices[16][1] = "G.722";
 choices[16][2] = "G.711";
 choices[16][3] = "Q.931";
 answers[16] = choices[16][2];
 units[16] = "117";
 comments[16] = "Id Pregunta: 3376. ";


//  Id pregunta: 3448 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El protocolo del stack TCP/IP que define el acceso interactivo a un ordenador remoto es:";
 choices[17]= new Array();
 choices[17][0] = "FTP";
 choices[17][1] = "WAIS";
 choices[17][2] = "Telnet";
 choices[17][3] = "Mail";
 answers[17] = choices[17][2];
 units[17] = "100";
 comments[17] = "Id Pregunta: 3448. NULL";


//  Id pregunta: 3474 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  El teorema del muestreo, que nos indica la frecuencia con la que debemos muestrear una se&ntilde;al para no perder informaci&oacute;n al digitalizarla, es debido a:";
 choices[18]= new Array();
 choices[18][0] = "Shannon";
 choices[18][1] = "Oppenheim";
 choices[18][2] = "Shafer";
 choices[18][3] = "Nyquist";
 answers[18] = choices[18][3];
 units[18] = "99";
 comments[18] = "Id Pregunta: 3474. *: Teorema Nyquist";


//  Id pregunta: 3481 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  El topolog&iacute;a denominada FDDI (Fiber Distributed Data Interface) utiliza un m&eacute;todo de acceso al medio:";
 choices[19]= new Array();
 choices[19][0] = "Tipo CSMA/CD: se emite en cualquier momento y se detectan las colisiones";
 choices[19][1] = "Tipo  &lsquo;paso de testigo&rsquo; (Token Passing): es necesario la posesi&oacute;n del testigo para emitir";
 choices[19][2] = "Tipo TDM (multiplexaci&oacute;n por divisi&oacute;n en el tiempo): se asignan diferentes slots de tiempo a cada estaci&oacute;n";
 choices[19][3] = "Tipo FDM: la frecuencia de luz emitida por cada estaci&oacute;n es diferente con lo que no hay colisiones";
 answers[19] = choices[19][1];
 units[19] = "101";
 comments[19] = "Id Pregunta: 3481. ";


//  Id pregunta: 3489 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En conmutaci&oacute;n de paquetes es falso que:";
 choices[20]= new Array();
 choices[20][0] = "la transmisi&oacute;n es por r&aacute;fagas";
 choices[20][1] = "la ruta origen-&gt;destino puede ser variable";
 choices[20][2] = "no hay ning&uacute;n circuito f&iacute;sico dedicado en la comunicaci&oacute;n";
 choices[20][3] = "todas las anteriores son caracter&iacute;sticas de la conmutaci&oacute;n de paquetes";
 answers[20] = choices[20][3];
 units[20] = "101";
 comments[20] = "Id Pregunta: 3489. ";


//  Id pregunta: 3498 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En el modelo de referencia OSI, el nivel de red interactua directamente con:";
 choices[21]= new Array();
 choices[21][0] = "El nivel de aplicaci&oacute;n y el nivel f&iacute;sico";
 choices[21][1] = "El nivel de transporte, el nivel de enlace, y sus niveles 'iguales' en otros sistemas";
 choices[21][2] = "El nivel de presentaci&oacute;n, el nivel de sesi&oacute;n y el usuario final";
 choices[21][3] = "Todos los niveles altos y los niveles bajos en los otros sistemas";
 answers[21] = choices[21][1];
 units[21] = "100";
 comments[21] = "Id Pregunta: 3498. NULL";


//  Id pregunta: 3538 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En LMDS las t&eacute;cnicas com&uacute;nmente usadas para la reutilizaci&oacute;n de frecuencias son:";
 choices[22]= new Array();
 choices[22][0] = "Minimizar la direccionalidad de las antenas de las celdas";
 choices[22][1] = "Maximizar el aislamiento entre sectores adyacentes a trav&eacute;s de la polarizaci&oacute;n";
 choices[22][2] = "Aumentar el tama&ntilde;o de celda";
 choices[22][3] = "Ninguna de las anteriores";
 answers[22] = choices[22][1];
 units[22] = "108";
 comments[22] = "Id Pregunta: 3538. ";


//  Id pregunta: 3548 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  En RDSI BA al decir que las interfaces son sim&eacute;tricas, nos referimos a:";
 choices[23]= new Array();
 choices[23][0] = "Igualdad de interfaces entre emisor y receptor";
 choices[23][1] = "Igual velocidad de entrada que de salida";
 choices[23][2] = "Igual velocidad de entrada que de salida, pero solo interfaces el&eacute;ctricas";
 choices[23][3] = "Igual velocidad de entrada que de salida, pero solo interfaces &oacute;pticas";
 answers[23] = choices[23][1];
 units[23] = "103";
 comments[23] = "Id Pregunta: 3548. ";


//  Id pregunta: 3549 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En RDSI BA al decir que las interfaces son sim&eacute;tricas, y dependiendo de la velocidad las posibilidades tecnologicas son:";
 choices[24]= new Array();
 choices[24][0] = "Para 155 Mbps las interfaces son el&eacute;ctricas y &oacute;pticas";
 choices[24][1] = "Para 622 Mbps las interfaces son el&eacute;ctricas";
 choices[24][2] = "Para 155 Mbps las interfaces son &oacute;pticas solamente.";
 choices[24][3] = "Para ambas velocidades exclusivamente interfaces &oacute;pticas";
 answers[24] = choices[24][0];
 units[24] = "103";
 comments[24] = "Id Pregunta: 3549. ";


//  Id pregunta: 3558 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  En telefon&iacute;a m&oacute;vil, &iquest;es posible en Espa&ntilde;a cambiar de operador conservando el n&uacute;mero?:";
 choices[25]= new Array();
 choices[25][0] = "S&iacute;, siempre  ";
 choices[25][1] = "No, nunca";
 choices[25][2] = "No, salvo para empresas";
 choices[25][3] = "S&iacute;, dependiendo de los operadores implicados";
 answers[25] = choices[25][0];
 units[25] = "108";
 comments[25] = "Id Pregunta: 3558. ";


//  Id pregunta: 3564 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  En un firewall de paquetes IP, los paquetes entrantes:";
 choices[26]= new Array();
 choices[26][0] = "Primero se filtran, luego se hace el NAT";
 choices[26][1] = "Primero se hace NAT y luego se filtran";
 choices[26][2] = "Es igual que para los paquetes salientes";
 choices[26][3] = "Depende de la interfaz";
 answers[26] = choices[26][1];
 units[26] = "111";
 comments[26] = "Id Pregunta: 3564. NULL";


//  Id pregunta: 3580 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  En X.400, &iquest;cu&aacute;les son las partes que definen un dominio de gesti&oacute;n?:";
 choices[27]= new Array();
 choices[27][0] = "Un PRMD y un IPM";
 choices[27][1] = "Un AU y un ADMD";
 choices[27][2] = "Un MTA y opcionalmente UA's, MS's y AU's";
 choices[27][3] = "Un AU y un PRMD";
 answers[27] = choices[27][1];
 units[27] = "106";
 comments[27] = "Id Pregunta: 3580. ";


//  Id pregunta: 3604 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  La f&oacute;rmula de Little es:";
 choices[28]= new Array();
 choices[28][0] = "El producto del n&uacute;mero de usuarios por su tiempo en el sistema";
 choices[28][1] = "El producto de tiempo medio de servicio y n&uacute;mero de usuarios que llegan al sistema";
 choices[28][2] = "El producto de tiempo medio de espera y n&uacute;mero de usuarios que llegan al sistema por unidad de tiempo";
 choices[28][3] = "Ninguna de las anteriores es v&aacute;lida";
 answers[28] = choices[28][2];
 units[28] = "26";
 comments[28] = "Id Pregunta: 3604. *: Formula de LITTLE";


//  Id pregunta: 3647 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  La tecnolog&iacute;a de red de &aacute;rea local PMD-FDDI:";
 choices[29]= new Array();
 choices[29][0] = "Trabaja a 125 Mhz";
 choices[29][1] = "Utiliza codificaci&oacute;n 4B/5B NRZI";
 choices[29][2] = "Transmite a 100 Mbps";
 choices[29][3] = "Todas las respuestas anteriores son correctas";
 answers[29] = choices[29][3];
 units[29] = "101";
 comments[29] = "Id Pregunta: 3647. ";


//  Id pregunta: 3651 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  La tecnolog&iacute;a/protocolo que da soporte al tipo de conmutaci&oacute;n/transmisi&oacute;n en el que se descarta la trama err&oacute;nea y son los mecanismos de la capa de transporte los que se encargan de recobrar la informaci&oacute;n se denomina:";
 choices[30]= new Array();
 choices[30][0] = "ATM";
 choices[30][1] = "Frame Relay";
 choices[30][2] = "ADSL";
 choices[30][3] = "PCLC";
 answers[30] = choices[30][1];
 units[30] = "109";
 comments[30] = "Id Pregunta: 3651. ";


//  Id pregunta: 3654 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Un acceso RDSI primario consta de:";
 choices[31]= new Array();
 choices[31][0] = "2 canales B y un canal D";
 choices[31][1] = "2 canales B y ning&uacute;n canal D";
 choices[31][2] = "30 canales B y 1 canal D";
 choices[31][3] = "30 canales B y 2 canales D";
 answers[31] = choices[31][2];
 units[31] = "103";
 comments[31] = "Id Pregunta: 3654. ";


//  Id pregunta: 3666 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Un sistema IVR es aquel que:";
 choices[32]= new Array();
 choices[32][0] = "Proporciona posibilidad de video interactivo (Interactive Video Response)";
 choices[32][1] = "Proporciona respuesta de voz interactiva (Interactive Voice Response)";
 choices[32][2] = "Mejora la calidad de la image de video (Immediate Video Refresh)";
 choices[32][3] = "Recuenta los votos electr&oacute;nicos aplicando confidencialidad (Immediate Vote Recounting)";
 answers[32] = choices[32][1];
 units[32] = "112";
 comments[32] = "Id Pregunta: 3666. ";


//  Id pregunta: 3678 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Una red MAN es capaz de conectar estaciones de voz y datos en entornos metropolitanos, lo que suele entenderse por un di&aacute;metro de red de varias decenas de kil&oacute;metros. Entre estas se encuentra la denominada DQDB. Indique la opci&oacute;n correcta:";
 choices[33]= new Array();
 choices[33][0] = "DQDB significa Dual Queue Distributed Bus, y esta contenida en la norma IEEE 802.6";
 choices[33][1] = "DQDB significa Dual Queue Distributed Bus, y esta contenida en la norma IEEE 802.9";
 choices[33][2] = "DQDB significa Distributed Queue Dual Bus, y esta contenida en la norma IEEE 802.6";
 choices[33][3] = "DQDB significa Distributed Queue Dual Bus, y esta contenida en la norma IEEE 802.9";
 answers[33] = choices[33][2];
 units[33] = "101";
 comments[33] = "Id Pregunta: 3678. ";


//  Id pregunta: 3750 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  MIB es:";
 choices[34]= new Array();
 choices[34][0] = "Una base de datos de informaci&oacute;n de gestion";
 choices[34][1] = "Un protocolo de gesti&oacute;n";
 choices[34][2] = "Un dominio de gesti&oacute;n";
 choices[34][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[34] = choices[34][0];
 units[34] = "104";
 comments[34] = "Id Pregunta: 3750. ";


//  Id pregunta: 3768 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Para una red de conmutaci&oacute;n de circuitos, &iquest;qu&eacute; tipo de encaminamiento no utilizar&iacute;a?:";
 choices[35]= new Array();
 choices[35][0] = "Encaminamiento fijo";
 choices[35][1] = "Encaminamiento aleatorio";
 choices[35][2] = "Encaminamiento adaptativo";
 choices[35][3] = "Encaminamiento por inundaci&oacute;n";
 answers[35] = choices[35][3];
 units[35] = "101";
 comments[35] = "Id Pregunta: 3768. ";


//  Id pregunta: 3854 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  Con respecto a las l&iacute;neas PLC (POWER LINE COMMUNICATIONS) no es cierto que:";
 choices[36]= new Array();
 choices[36][0] = "Tiene problemas respecto a sus a prestaciones o a la velocidad debido al ruido y microcortes";
 choices[36][1] = "No es necesaria nueva regulaci&oacute;n debido a la que ya existe para las l&iacute;neas de potencia instaladas";
 choices[36][2] = "Requiere colocar amplificadores de desacoplamiento en cada transformador de media/baja tensi&oacute;n porque estos act&uacute;an como filtros para los datos";
 choices[36][3] = "Deben enfrentarse a todas las interferencias y perturbaciones presentes, debido a la amplia proliferaci&oacute;n de electrodom&eacute;sticos y otros dispositivos conectados";
 answers[36] = choices[36][1];
 units[36] = "107";
 comments[36] = "Id Pregunta: 3854. NULL";


//  Id pregunta: 3860 AÃ±o de creación de pregunta: 2004-01-01
 questions[37]= "38)  El protocolo ARP";
 choices[37]= new Array();
 choices[37][0] = "Proporciona la traducci&oacute;n entre direcci&oacute;n IP y direcci&oacute;n LAN";
 choices[37][1] = "Proporciona una conversi&oacute;n entre direcci&oacute;n LAN y direcci&oacute;n IP";
 choices[37][2] = "Se utiliza en routers y bridges";
 choices[37][3] = "A y B son correctas";
 answers[37] = choices[37][0];
 units[37] = "100";
 comments[37] = "Id Pregunta: 3860. Tanenbaum";


//  Id pregunta: 3871 AÃ±o de creación de pregunta: 2004-01-01
 questions[38]= "39)  HTML";
 choices[38]= new Array();
 choices[38][0] = "Define reglas para el intercambio de mensajes";
 choices[38][1] = "Permite incorporar plantillas XSL";
 choices[38][2] = "Es un lenguaje que describe c&oacute;mo se formatean los mensajes";
 choices[38][3] = "Todas son ciertas";
 answers[38] = choices[38][2];
 units[38] = "113";
 comments[38] = "Id Pregunta: 3871. Tanenbaum";


//  Id pregunta: 3874 AÃ±o de creación de pregunta: 2004-01-01
 questions[39]= "40)  &iquest;Qu&eacute; es cierto respecto al protocolo POP3?";
 choices[39]= new Array();
 choices[39][0] = "Utiliza el protocolo TCP";
 choices[39][1] = "Utiliza servicios de DNS";
 choices[39][2] = "Permite eliminar los mensajes del buz&oacute;n";
 choices[39][3] = "A y c son ciertas";
 answers[39] = choices[39][3];
 units[39] = "106";
 comments[39] = "Id Pregunta: 3874. Tanenbaum";


//  Id pregunta: 3887 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  &iquest;Qu&eacute; significa aplicaciones de tres niveles en la arquitectura Cliente/Servidor?";
 choices[40]= new Array();
 choices[40][0] = "La l&oacute;gica de presentaci&oacute;n, la l&oacute;gica de aplicaci&oacute;n y la l&oacute;gica de datos se pueden distribuir entre los m&uacute;ltiples procesadores de la red.";
 choices[40][1] = "Los servicios de presentaci&oacute;n, la l&oacute;gica de aplicaci&oacute;n y el acceso a datos se ejecutan en la estaci&oacute;n cliente mientras que la base de datos est&aacute; situada f&iacute;sicamente en el servidor.";
 choices[40][2] = "La gesti&oacute;n de datos, la l&oacute;gica de aplicaci&oacute;n y la l&oacute;gica de presentaci&oacute;n se encuentran en el servidor mientras que los servicios de presentaci&oacute;n se hallan en el cliente.";
 choices[40][3] = "En una arquitectura Cliente/Servidor no existen aplicaciones a tres niveles.";
 answers[40] = choices[40][0];
 units[40] = "113";
 comments[40] = "Id Pregunta: 3887. ";


//  Id pregunta: 3895 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  En un sistema de cableado estructurado IEEE 802.3 en UTP, la distancia m&aacute;xima horizontal ser&aacute; de 90 metros desde la terminaci&oacute;n mec&aacute;nica del armario repartidor de planta hasta la roseta, permiti&eacute;ndose desde &eacute;sta, hasta la estaci&oacute;n de trabajo o tel&eacute;fono";
 choices[41]= new Array();
 choices[41][0] = "1,5 metros m&aacute;s.";
 choices[41][1] = "3 metros m&aacute;s.";
 choices[41][2] = "4,5 metros m&aacute;s.";
 choices[41][3] = "Una distancia tal que la longitud total de este &uacute;ltimo latiguillo y la del armario repartidor, no supere los 10 metros.";
 answers[41] = choices[41][3];
 units[41] = "99";
 comments[41] = "Id Pregunta: 3895. Junta Andaluc&iacute;a";


//  Id pregunta: 3913 AÃ±o de creación de pregunta: 2004-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l no es una propiedad de la seguridad inform&aacute;tica?";
 choices[42]= new Array();
 choices[42][0] = "Confidencialidad";
 choices[42][1] = "Integridad";
 choices[42][2] = "Autenticaci&oacute;n";
 choices[42][3] = "Disponibilidad";
 answers[42] = choices[42][3];
 units[42] = "97";
 comments[42] = "Id Pregunta: 3913. NULL";


//  Id pregunta: 3919 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  Funciones de una copia de seguridad:";
 choices[43]= new Array();
 choices[43][0] = "Restaurar los archivos y carpetas modificados en el disco duro o en otro disco al que tenga acceso.";
 choices[43][1] = "Crear un duplicado de los datos del disco duro y, a continuaci&oacute;n, archivarlos en otros dispositivos de almacenamiento como pueden ser un disco duro o una cinta.";
 choices[43][2] = "Archivar en su disco duro determinados archivos y carpetas.";
 choices[43][3] = "Todas las anteriores";
 answers[43] = choices[43][3];
 units[43] = "97";
 comments[43] = "Id Pregunta: 3919. Tema 4.9: Pol&iacute;ticas, Procedimientos y m&eacute;todos para la conservaci&oacute;n de la informaci&oacute;n en soporte electr&oacute;nico.";


//  Id pregunta: 3931 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  &iquest;Cu&aacute;les son los tipos de direcciones unicast especiales de IPv6? ";
 choices[44]= new Array();
 choices[44][0] = "de &aacute;mbito local y de &aacute;mbito privado";
 choices[44][1] = "Loopback, inespec&iacute;fica, compatibles, mapeadas a IPv4, de &aacute;mbito local, de &aacute;mbito privado y  globales ";
 choices[44][2] = "Compatibles, mapeadas a IPv4 y globales ";
 choices[44][3] = "Compatibles, mapeadas a IPv4, locales y globales";
 answers[44] = choices[44][1];
 units[44] = "100";
 comments[44] = "Id Pregunta: 3931. ";


//  Id pregunta: 3939 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  &iquest;Qu&eacute; influy&oacute; en el origen de XML?";
 choices[45]= new Array();
 choices[45][0] = "SGML y SOAP";
 choices[45][1] = "SGML";
 choices[45][2] = "SGML y HTTP";
 choices[45][3] = "http y SGML";
 answers[45] = choices[45][1];
 units[45] = "100";
 comments[45] = "Id Pregunta: 3939. ";


//  Id pregunta: 3965 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Respecto a SDH &iquest;cual de las siguientes opciones es falsa?";
 choices[46]= new Array();
 choices[46][0] = "Est&aacute; internacionalmente extendido";
 choices[46][1] = "Posee capacidad poderosa de administraci&oacute;n";
 choices[46][2] = "Brinda m&aacute;s ancho de banda que PDH";
 choices[46][3] = "Es un est&aacute;ndar norteamericano";
 answers[46] = choices[46][3];
 units[46] = "116";
 comments[46] = "Id Pregunta: 3965. Pregunta similar a la del ex&aacute;men de SS del 2003 salvo en las opciones";


//  Id pregunta: 4009 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  &iquest;Qu&eacute; recomendaci&oacute;n del mundo Internet define el formato de los mensajes de correo electr&oacute;nico?";
 choices[47]= new Array();
 choices[47][0] = "RFC 821";
 choices[47][1] = "RFC 820";
 choices[47][2] = "RFC 822";
 choices[47][3] = "RFC 823";
 answers[47] = choices[47][2];
 units[47] = "106";
 comments[47] = "Id Pregunta: 4009. ";


//  Id pregunta: 4096 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  Con que tecnolog&iacute;a se relaciona el Bytecode";
 choices[48]= new Array();
 choices[48][0] = "Java";
 choices[48][1] = ".Net";
 choices[48][2] = "Java Script";
 choices[48][3] = "Ninguna de las anteriores";
 answers[48] = choices[48][0];
 units[48] = "116";
 comments[48] = "Id Pregunta: 4096. ";


//  Id pregunta: 4104 AÃ±o de creación de pregunta: 2006-01-01
 questions[49]= "50)  Tim Berners-Lee lider&oacute; un equipo de f&iacute;sicos en el CERN que cre&oacute;:";
 choices[49]= new Array();
 choices[49][0] = "El lenguaje PHP en 1993";
 choices[49][1] = "El lenguaje HTML en 1989";
 choices[49][2] = "El lenguaje Perl en 1979";
 choices[49][3] = "El lenguaje HTML en 1991";
 answers[49] = choices[49][1];
 units[49] = "114";
 comments[49] = "Id Pregunta: 4104. ";


//  Id pregunta: 4121 AÃ±o de creación de pregunta: 2006-01-01
 questions[50]= "51)  Un protocolo usado espec&iacute;ficamente para controlar el backup de datos entre el almacenamiento primario y el centro de respaldo es";
 choices[50]= new Array();
 choices[50][0] = "Common Management Information Protocol (CMIP)";
 choices[50][1] = "Network Data Management Protocol (NDMP)";
 choices[50][2] = "Point-to-Point Protocol (PPP)";
 choices[50][3] = "Bootstrap Protocol (BOOTP)";
 answers[50] = choices[50][1];
 units[50] = "97";
 comments[50] = "Id Pregunta: 4121. NULL";


//  Id pregunta: 4122 AÃ±o de creación de pregunta: 2006-01-01
 questions[51]= "52)  La red geogr&aacute;ficamente dispersa se llama";
 choices[51]= new Array();
 choices[51][0] = "WAN";
 choices[51][1] = "LAN";
 choices[51][2] = "SAN";
 choices[51][3] = "PAN";
 answers[51] = choices[51][0];
 units[51] = "101";
 comments[51] = "Id Pregunta: 4122. ";


//  Id pregunta: 4152 AÃ±o de creación de pregunta: 2006-01-01
 questions[52]= "53)  Protocolo cliente/servidor que permite la autenticaci&oacute;n y control de acceso de usuarios PPP";
 choices[52]= new Array();
 choices[52][0] = "ACF2";
 choices[52][1] = "RACF";
 choices[52][2] = "RADIUS";
 choices[52][3] = "Kerberos";
 answers[52] = choices[52][2];
 units[52] = "111";
 comments[52] = "Id Pregunta: 4152. NULL";


//  Id pregunta: 4155 AÃ±o de creación de pregunta: 2006-01-01
 questions[53]= "54)  Documento que indica por escrito como una organizaci&oacute;n planea proteger los recursos f&iacute;sicos e inform&aacute;ticos";
 choices[53]= new Array();
 choices[53][0] = "Acuerdo de Licencia de Usuario Final (EULA)";
 choices[53][1] = "Pol&iacute;tica de Seguridad";
 choices[53][2] = "Acuerdo de nivel de servicio (SLA)";
 choices[53][3] = "Gesti&oacute;n de relaciones entre socios (PRM)";
 answers[53] = choices[53][1];
 units[53] = "97";
 comments[53] = "Id Pregunta: 4155. NULL";


//  Id pregunta: 4215 AÃ±o de creación de pregunta: 2006-01-01
 questions[54]= "55)  En el modelo de comunicaciones TCP/IP, cuando un cliente inicia una sesi&oacute;n";
 choices[54]= new Array();
 choices[54][0] = "El campo SYN del primer segmento TCP es igual a 0";
 choices[54][1] = "El campo SYN del primer segmento TCP es igual a 1";
 choices[54][2] = "El campo RST del primer segmento TCP es igual a 1";
 choices[54][3] = "El campo PSH del primer segmento TCP es igual a 1";
 answers[54] = choices[54][1];
 units[54] = "100";
 comments[54] = "Id Pregunta: 4215. ";


//  Id pregunta: 4419 AÃ±o de creación de pregunta: 2007-01-01
 questions[55]= "56)  El estandar IEEE 802.12 (100VG AnyLAN):";
 choices[55]= new Array();
 choices[55][0] = "Utiliza un m&eacute;todo de acceso de detecci&oacute;n de colisi&oacute;n.";
 choices[55][1] = "Utiliza un m&eacute;todo de acceso de prioridad de demanda.";
 choices[55][2] = "Utiliza un m&eacute;todo de acceso de impedimento de colisi&oacute;n.";
 choices[55][3] = "Utiliza un m&eacute;todo de acceso de paso de testigo.";
 answers[55] = choices[55][1];
 units[55] = "107";
 comments[55] = "Id Pregunta: 4419. NULL";


//  Id pregunta: 4540 AÃ±o de creación de pregunta: 2007-01-01
 questions[56]= "57)  El protocolo utilizado para gestionar un dispositivo en una red TCP/IP es:";
 choices[56]= new Array();
 choices[56][0] = "RCP";
 choices[56][1] = "SNMP";
 choices[56][2] = "SMTP";
 choices[56][3] = "ICMP";
 answers[56] = choices[56][1];
 units[56] = "100";
 comments[56] = "Id Pregunta: 4540. ";


//  Id pregunta: 4649 AÃ±o de creación de pregunta: 2007-01-01
 questions[57]= "58)  La tecnolog&iacute;a de radio LMDS (Local Multipoint Distribution System) se caracteriza entre otras cosas por ser:";
 choices[57]= new Array();
 choices[57][0] = "una tecnolog&iacute;a punto a punto";
 choices[57][1] = "no requiere de visibilidad directa entre enlaces";
 choices[57][2] = "tiene radios de cobertura t&iacute;picos mayores a 25 Km (kilometros)";
 choices[57][3] = "utilizada para entornos de alta concentraci&oacute;n de usuarios";
 answers[57] = choices[57][3];
 units[57] = "108";
 comments[57] = "Id Pregunta: 4649. ";


//  Id pregunta: 4787 AÃ±o de creación de pregunta: 2007-01-01
 questions[58]= "59)  En que lenguaje esta especificada La MIB de SNMPv2 ";
 choices[58]= new Array();
 choices[58][0] = "XML";
 choices[58][1] = "HTML";
 choices[58][2] = "ASN1";
 choices[58][3] = "Java";
 answers[58] = choices[58][2];
 units[58] = "104";
 comments[58] = "Id Pregunta: 4787. ";


//  Id pregunta: 4805 AÃ±o de creación de pregunta: 2007-01-01
 questions[59]= "60)  El protocolo IPv6 (Internet Protocol version 6):";
 choices[59]= new Array();
 choices[59][0] = "Tiene direcciones de red de 64 bits de longitud";
 choices[59][1] = "Recomienda que si el datagrama tiene varias cabeceras de extensi&oacute;n, la cabecera de encaminamiento(routing header) aparezca siempre antes que la cabecera de opciones salto a salto (hop-by-hop header)";
 choices[59][2] = "Aunque su cabecera es m&aacute;s grande que la del protocolo IPv4 (Internet Protocol version 4), tiene menoscampos. Esto hace que, por lo general, los routersrealicen menos procesamiento sobre losdatagramas, consiguiendo as&iacute; un encaminamiento m&aacute;s eficiente";
 choices[59][3] = "El campo etiqueta de flujo (flow label) basta para identificar un&iacute;vocamente a un flujo de paquetes";
 answers[59] = choices[59][2];
 units[59] = "100";
 comments[59] = "Id Pregunta: 4805. ";


//  Id pregunta: 4864 AÃ±o de creación de pregunta: 2007-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a las VLAN (Virtual Local Area Networks) es cierta?";
 choices[60]= new Array();
 choices[60][0] = "Las VLAN reducen el n&uacute;mero de dominios de difusi&oacute;n de la red";
 choices[60][1] = "La segmentaci&oacute;n de redes en VLAN aumenta el tr&aacute;fico en la red, ya que ha de a&ntilde;adirse informaci&oacute;n desubred complementaria en cada paquete";
 choices[60][2] = "La definici&oacute;n de una misma VLAN puede abarcar uno o m&aacute;s switches (conmutadores)";
 choices[60][3] = "Las VLAN aumentan el tama&ntilde;o de los dominios de difusi&oacute;n de la red";
 answers[60] = choices[60][2];
 units[60] = "102";
 comments[60] = "Id Pregunta: 4864. ";


//  Id pregunta: 5021 AÃ±o de creación de pregunta: 2003-01-01
 questions[61]= "62)  Bluetooth es un enlace radio de corto alcance sin cables con un radio de:";
 choices[61]= new Array();
 choices[61][0] = "Hasta 5 metros y un rango de frecuencia de 2,402 GHz a 2,480 GHz";
 choices[61][1] = "Hasta 10 metros y un rango de frecuencia de 2,202 GHz a 2,404 GHz";
 choices[61][2] = "Hasta 10 metros y un rango de frecuencia de 2,402 GHz a 2,480 GHz";
 choices[61][3] = "Hasta 8 metros y un rango de frecuencia de 1,404 GHz a 2,480 GHz";
 answers[61] = choices[61][2];
 units[61] = "107";
 comments[61] = "Id Pregunta: 5021. Examen TIC A 2007";


//  Id pregunta: 5172 AÃ±o de creación de pregunta: 2003-01-01
 questions[62]= "63)  En el protocolo IPSEC, una asociaci&oacute;n de seguridad (SA) queda un&iacute;vocamente identificada por medio de:";
 choices[62]= new Array();
 choices[62][0] = "Una direcci&oacute;n IP";
 choices[62][1] = "Un &iacute;ndice de par&aacute;metro de seguridad (SPI)";
 choices[62][2] = "Un &iacute;ndice de par&aacute;metro de seguridad (SPI) y un puerto de comunicaci&oacute;n TCP.";
 choices[62][3] = "Una direcci&oacute;n IP y un &Iacute;ndice de Par&aacute;metro de Seguridad (SPI).";
 answers[62] = choices[62][3];
 units[62] = "111";
 comments[62] = "Id Pregunta: 5172. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5286 AÃ±o de creación de pregunta: 2003-01-01
 questions[63]= "64)  Indique cu&aacute;l de las siguientes opciones no se corresponde al modelo .NET de desarrollo:";
 choices[63]= new Array();
 choices[63][0] = "Interface Definition Language";
 choices[63][1] = "Common Type System";
 choices[63][2] = "Base Class Library";
 choices[63][3] = "Common Language Runtime";
 answers[63] = choices[63][0];
 units[63] = "115";
 comments[63] = "Id Pregunta: 5286. ";


//  Id pregunta: 5603 AÃ±o de creación de pregunta: 2003-01-01
 questions[64]= "65)  En una red de CATV &iquest;cu&aacute;l es el rango de frecuencias que se utiliza en sentido ascendente para el envio de informaci&oacute;n de usuario a cabecera?";
 choices[64]= new Array();
 choices[64][0] = "De 55 a 150";
 choices[64][1] = "De 550 a 860";
 choices[64][2] = "De 50 a 550";
 choices[64][3] = "De 5 a 50";
 answers[64] = choices[64][3];
 units[64] = "105";
 comments[64] = "Id Pregunta: 5603. ";


//  Id pregunta: 5627 AÃ±o de creación de pregunta: 2003-01-01
 questions[65]= "66)  Indique cu&aacute;l de estos productos no forman parte de los que proporcionan seguridad en el correo electr&oacute;nico";
 choices[65]= new Array();
 choices[65][0] = "PGP";
 choices[65][1] = "PEM";
 choices[65][2] = "MOSS";
 choices[65][3] = "Single MIME";
 answers[65] = choices[65][3];
 units[65] = "106";
 comments[65] = "Id Pregunta: 5627. Ser&iacute;a S/MIME";


//  Id pregunta: 5840 AÃ±o de creación de pregunta: 2009-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes opciones describe correctamente la estructura de una direcci&oacute;n MAC?";
 choices[66]= new Array();
 choices[66][0] = "C&oacute;digo de red de 16 bits m&aacute;s c&oacute;digo de serie de 16 bits";
 choices[66][1] = "C&oacute;digo del fabricante de 16 bits m&aacute;s c&oacute;digo de serie de 16 bits";
 choices[66][2] = "C&oacute;digo del fabricante de 24 bits m&aacute;s c&oacute;digo de serie de 24 bits";
 choices[66][3] = "Identidad de red de 24 bits m&aacute;s identidad de host de 24 bits";
 answers[66] = choices[66][2];
 units[66] = "101";
 comments[66] = "Id Pregunta: 5840. MAP 2008 A1";


//  Id pregunta: 5939 AÃ±o de creación de pregunta: 2009-01-01
 questions[67]= "68)  &iquest;Con cu&aacute;l de las siguientes herramientas podr&iacute;amos emular una CPU PowerPC sobre una CPU f&iacute;sica AMD64?";
 choices[67]= new Array();
 choices[67][0] = "Virtual Box";
 choices[67][1] = "Qemu";
 choices[67][2] = "VMWare ESXi";
 choices[67][3] = "Xen";
 answers[67] = choices[67][1];
 units[67] = "119";
 comments[67] = "Id Pregunta: 5939. ";


//  Id pregunta: 6002 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Seg&uacute;n la Decisi&oacute;n de la CEPT ECC/DEC/(04)08, un sistema WIFI en la banda de 5.470-5.725 Mhz debe tener una potencia is&oacute;tropa radiada equivalente:";
 choices[68]= new Array();
 choices[68][0] = "Inferior o igual a 1 W.";
 choices[68][1] = "Superior a 1 W e inferior o igual a 2 W.";
 choices[68][2] = "Superior a 2 W e inferior o igual a 5 W.";
 choices[68][3] = "Superior a 5 W e inferior o igual a 10 W.";
 answers[68] = choices[68][0];
 units[68] = "107";
 comments[68] = "Id Pregunta: 6002. TIC A 2009";


//  Id pregunta: 6043 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  El proyecto Fidelity, de gesti&oacute;n de identidad federado en &aacute;mbito europeo, est&aacute; basado en est&aacute;ndares de:";
 choices[69]= new Array();
 choices[69][0] = "W3C";
 choices[69][1] = "IEEE";
 choices[69][2] = "CEN";
 choices[69][3] = "Liberty Alliance";
 answers[69] = choices[69][3];
 units[69] = "118";
 comments[69] = "Id Pregunta: 6043. ";


//  Id pregunta: 6062 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  Se ha establecido una conexi&oacute;n TCP sobre una red m&oacute;vil celular. La red m&oacute;vil sufre p&eacute;rdidas frecuentes por errores de transmisi&oacute;n debidos a las caracter&iacute;sticas del acceso radio. El emisor TCP:";
 choices[70]= new Array();
 choices[70][0] = "Distingue entre p&eacute;rdidas por errores de transmisi&oacute;n y p&eacute;rdidas por congesti&oacute;n, aplicando procedimientos de recuperaci&oacute;n diferentes.";
 choices[70][1] = "S&oacute;lo retransmite paquetes que se pierdan debido a congesti&oacute;n en la red.";
 choices[70][2] = "Indica al nivel de enlace que disminuya su tasa de env&iacute;o.";
 choices[70][3] = "Interpreta las p&eacute;rdidas debidas a errores de transmisi&oacute;n como congesti&oacute;n en la red, disminuyendo su tasa de env&iacute;o.";
 answers[70] = choices[70][3];
 units[70] = "100";
 comments[70] = "Id Pregunta: 6062. TIC A 2009";


//  Id pregunta: 6486 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes es una desventaja de LMDS?";
 choices[71]= new Array();
 choices[71][0] = "La necesidad de desplegar fibra &oacute;ptica hasta las proximidades del cliente";
 choices[71][1] = "Requiere eliminar las bobinas de carga del bucle local";
 choices[71][2] = "Requiere licencia de uso del espectro radioel&eacute;ctrico para la operadora";
 choices[71][3] = "Es un servicio punto a punto";
 answers[71] = choices[71][2];
 units[71] = "108";
 comments[71] = "Id Pregunta: 6486. Castilla La Mancha 2009";


//  Id pregunta: 6488 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes es una herramienta IDS?";
 choices[72]= new Array();
 choices[72][0] = "Nessus";
 choices[72][1] = "Snort";
 choices[72][2] = "Nagios";
 choices[72][3] = "NetSaint";
 answers[72] = choices[72][1];
 units[72] = "111";
 comments[72] = "Id Pregunta: 6488. Castilla La Mancha 2009";


//  Id pregunta: 7776 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)   La palabra clave de Visual Basic.NET &laquo;overrides&raquo; se utiliza para:";
 choices[73]= new Array();
 choices[73][0] = " Heredar todos los miembros no privados de la clase espec&iacute;fica.";
 choices[73][1] = " Especificar qu&eacute; clase no se puede utilizar como clase b&aacute;sica.";
 choices[73][2] = " Indicar que el procedimiento anula un procedimiento de la clase b&aacute;sica.";
 choices[73][3] = " Invocar c&oacute;digo escrito en una clase desde la propia clase.";
 answers[73] = choices[73][2];
 units[73] = "115";
 comments[73] = "Id Pregunta: 7776. Map 2005";


//  Id pregunta: 8268 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Al hablar de virtualizaci&oacute;n de servidores, se llama hypervisor:";
 choices[74]= new Array();
 choices[74][0] = "A la capa de software sobre la que se ejecutan las m&aacute;quinas virtuales.";
 choices[74][1] = "A la aplicaci&oacute;n que monitoriza una m&aacute;quina virtual.";
 choices[74][2] = "A un producto comercial de virtualizaci&oacute;n.";
 choices[74][3] = "Al gestor de memoria de la m&aacute;quina f&iacute;sica.";
 answers[74] = choices[74][0];
 units[74] = "119";
 comments[74] = "Id Pregunta: 8268. Examen TIC A1 2010";


//  Id pregunta: 8291 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Dada la red 193.163.14.192/27, podemos decir que: ";
 choices[75]= new Array();
 choices[75][0] = "La direcci&oacute;n de broadcast de dicha red es la 193.168.14.255.";
 choices[75][1] = "Admite hasta 30 hosts, sin contar las direcciones de identificaci&oacute;n de red y de broadcast.";
 choices[75][2] = "La direcci&oacute;n IP 193.168.14.225 pertenece a dicha red.";
 choices[75][3] = "Es una red con direccionamiento privado.";
 answers[75] = choices[75][1];
 units[75] = "100";
 comments[75] = "Id Pregunta: 8291. Examen TIC A2 2010";


//  Id pregunta: 8299 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Una direcci&oacute;n IP identifica:";
 choices[76]= new Array();
 choices[76][0] = "Una conexi&oacute;n. ";
 choices[76][1] = "Una interfaz de tarjeta de red.";
 choices[76][2] = "Un ordenador.";
 choices[76][3] = "Una aplicaci&oacute;n interactiva. ";
 answers[76] = choices[76][1];
 units[76] = "100";
 comments[76] = "Id Pregunta: 8299. Examen TIC A2 2010";


//  Id pregunta: 8315 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  La recomendaci&oacute;n para VoIP, definida en 1996 por la UIT es el:";
 choices[77]= new Array();
 choices[77][0] = "H.261. ";
 choices[77][1] = "H.320. ";
 choices[77][2] = "H.221. ";
 choices[77][3] = "H.323.";
 answers[77] = choices[77][3];
 units[77] = "100";
 comments[77] = "Id Pregunta: 8315. Examen TIC A2 2010";


//  Id pregunta: 8318 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;En qu&eacute; banda de frecuencias y hasta qu&eacute; velocidad funciona el est&aacute;ndar 802.11a? ";
 choices[78]= new Array();
 choices[78][0] = "2,4 GHz y hasta 11Mbps. ";
 choices[78][1] = "5 GHz y hasta 54Mbps. ";
 choices[78][2] = "2,4 GHz y hasta 54 Mbps. ";
 choices[78][3] = "5 GHz y hasta 11 Mbps.";
 answers[78] = choices[78][1];
 units[78] = "107";
 comments[78] = "Id Pregunta: 8318. Examen TIC A2 2010";


//  Id pregunta: 8469 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  La norma DECT (Digital Enhanced Cordless Telecomunications) contempla el modode acceso:";
 choices[79]= new Array();
 choices[79][0] = "TDMA/ TDD";
 choices[79][1] = "GFSK";
 choices[79][2] = "FSK";
 choices[79][3] = "CDMA";
 answers[79] = choices[79][0];
 units[79] = "107.108";
 comments[79] = "Id Pregunta: 8469. Analista Ayto. Madrid 2010";


//  Id pregunta: 8526 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  En relaci&oacute;n con los mecanismos de seguridad en redes Wi-Fi, indique la afirmaci&oacute;n FALSA:";
 choices[80]= new Array();
 choices[80][0] = "Las especificaciones WEP y WPA usan RC4 como algoritmo de cifrado.";
 choices[80][1] = "La especificaci&oacute;n WPA2 mejora la segundad al usar AES como algoritmo de cifrado.";
 choices[80][2] = "En el est&aacute;ndar IEEE 802.11 i es donde se detalla la especificaci&oacute;n de WPA2.";
 choices[80][3] = "El est&aacute;ndar IEEE 802.11g incrementa la seguridad introduciendo 3DES como algoritmo de cifrado.";
 answers[80] = choices[80][3];
 units[80] = "107";
 comments[80] = "Id Pregunta: 8526. Examen TIC A2 2010 interna";


//  Id pregunta: 8677 AÃ±o de creación de pregunta: 2011-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de las siguientes es una nueva entidad funcional introducida por IP M&oacute;vil (RFC 3344)?";
 choices[81]= new Array();
 choices[81][0] = "Home Agent.";
 choices[81][1] = "Agent Advertisement.";
 choices[81][2] = "Mobility Agent.";
 choices[81][3] = "Agent Discovery.";
 answers[81] = choices[81][0];
 units[81] = "100";
 comments[81] = "Id Pregunta: 8677. Examen UPM A2 2011";


//  Id pregunta: 8911 AÃ±o de creación de pregunta: 2011-01-01
 questions[82]= "83)  &iquest;C&oacute;mo se expresan habitualmente las direcciones MAC?:";
 choices[82]= new Array();
 choices[82][0] = "En notaci&oacute;n decimal.";
 choices[82][1] = "En notaci&oacute;n hexadecimal.";
 choices[82][2] = "En notaci&oacute;n octal.";
 choices[82][3] = "En notaci&oacute;n binaria";
 answers[82] = choices[82][1];
 units[82] = "101";
 comments[82] = "Id Pregunta: 8911. Operador Ayto. Madrid 2010";


//  Id pregunta: 9372 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  En un circuito virtual:";
 choices[83]= new Array();
 choices[83][0] = "El Equipo de Terminaci&oacute;n del Circuito de Datos (ETCD) es un nodo frontera de red, a trav&eacute;s del cual los datos del usuario atraviesan la misma hasta llegar al ETCD remoto.";
 choices[83][1] = "La Central de Conmutaci&oacute;n de Paquetes es la encargada del paso de paquetes al siguiente nodo dentro del circuito virtual establecido.";
 choices[83][2] = "Un Circuito de Datos es la conexi&oacute;n virtual establecida entre los dos ETCD (Equipos de Terminaci&oacute;n del Circuito de Datos) involucrados en una transmisi&oacute;n.";
 choices[83][3] = "Todas son correctas.";
 answers[83] = choices[83][3];
 units[83] = "101";
 comments[83] = "Id Pregunta: 9372. ";


//  Id pregunta: 9435 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  El Fondo nacional del servicio universal tiene por finalidad garantizar la financiaci&oacute;n del servicio universal. La aportaci&oacute;n de activos en met&aacute;lico a dicho Fondo la realiza:";
 choices[84]= new Array();
 choices[84][0] = "El Gobierno a trav&eacute;s de los Presupuestos Generales del Estado.";
 choices[84][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[84][2] = "Las Comunidades Aut&oacute;nomas.";
 choices[84][3] = "Los operadores con obligaciones de contribuir a la financiaci&oacute;n del servicio universal.";
 answers[84] = choices[84][3];
 units[84] = "110";
 comments[84] = "Id Pregunta: 9435. Examen AGE TIC A1 2011";


//  Id pregunta: 9864 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;A qu&eacute; tipo de ataque pertenece el denominado ping de la muerte?";
 choices[85]= new Array();
 choices[85][0] = "Spoofing.";
 choices[85][1] = "Man in the middle.";
 choices[85][2] = "Denial of Service.";
 choices[85][3] = "Flooding.";
 answers[85] = choices[85][2];
 units[85] = "111";
 comments[85] = "Id Pregunta: 9864. Examen TIC del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9929 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l es el orden de las primitivas de servicio?";
 choices[86]= new Array();
 choices[86][0] = "REQUEST &ndash; CONFIRM &ndash;INDICATION &ndash; RESPONSE.";
 choices[86][1] = "REQUEST &ndash; RESPONSE &ndash; INDICATION &ndash; CONFIRM.";
 choices[86][2] = "REQUEST &ndash; INDICATION &ndash; RESPONSE &ndash; CONFIRM.";
 choices[86][3] = "REQUEST &ndash; CONFIRM &ndash; RESPONSE &ndash; INDICATION.";
 answers[86] = choices[86][2];
 units[86] = "100";
 comments[86] = "Id Pregunta: 9929. NULL";


//  Id pregunta: 10028 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Indique cu&aacute;l de los siguientes es un framework software de Apache que soporta aplicaciones distribuidas que trabajan con miles de nodos y vol&uacute;menes de datos del orden de petabytes:";
 choices[87]= new Array();
 choices[87][0] = "Joost";
 choices[87][1] = "Netflix";
 choices[87][2] = "Cassandra ";
 choices[87][3] = "Hadoop";
 answers[87] = choices[87][3];
 units[87] = "116";
 comments[87] = "Id Pregunta: 10028. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10056 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Indique de entre las siguientes cu&aacute;l es la definici&oacute;n de secr&aacute;fono:";
 choices[88]= new Array();
 choices[88][0] = "Equipo de frontera que, situado fuera de la red interna, ofrece servicios al exterior.";
 choices[88][1] = "Equipo infectado por un atacante remoto no detectado.";
 choices[88][2] = "Equipo que genera y entrega claves criptogr&aacute;ficas para su distribuci&oacute;n.";
 choices[88][3] = "Equipo para realizar el cifrado anal&oacute;gico de la voz.";
 answers[88] = choices[88][3];
 units[88] = "109";
 comments[88] = "Id Pregunta: 10056. TIC A2, promoci&oacute;n interna y libre, examen 2013";


//  Id pregunta: 10239 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Qu&eacute; objetos nos encontramos en un servicio de directorios:";
 choices[89]= new Array();
 choices[89][0] = "EJB home interface";
 choices[89][1] = "Un componente EJB";
 choices[89][2] = "La API EJB";
 choices[89][3] = "Un objeto interface EJB";
 answers[89] = choices[89][0];
 units[89] = "116";
 comments[89] = "Id Pregunta: 10239. NULL";


//  Id pregunta: 10542 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de estos est&aacute;ndares relacionados con Ethernet permite enrutamiento multipath?";
 choices[90]= new Array();
 choices[90][0] = "802.1aq (Shortest Path Bridging)";
 choices[90][1] = "802.D (Spanning Tree Protocol)";
 choices[90][2] = "802.1s, incluido en 802.1Q-2005 (Multiple Spanning Tree Protocol)";
 choices[90][3] = "802.1w (Rapid Spanning Tree Protocol)";
 answers[90] = choices[90][0];
 units[90] = "100";
 comments[90] = "Id Pregunta: 10542. Shortest Path Bridging sustituye a los antiguos STP(IEEE 802.1D), RSTP (IEEE 802.1w) y MSTP (IEEE 802.1s) que permit&iacute;an un &uacute;nico camino activo para evitar bucles. SPB permite varios caminos activos lo que posibilita hasta m&aacute;s de 16 millones de VLAN.";


//  Id pregunta: 10650 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Indique el orden correcto, de mayor a menor, en velocidad de transmisi&oacute;n:";
 choices[91]= new Array();
 choices[91][0] = "LTE, UMTS y GPRS.";
 choices[91][1] = "W-CDMA, WiMAX y EDGE.EGDE, UMTS y LTE.";
 choices[91][2] = "";
 choices[91][3] = "WiMAX, GPRS y LTE.";
 answers[91] = choices[91][0];
 units[91] = "108";
 comments[91] = "Id Pregunta: 10650. ";


//  Id pregunta: 11317 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Una de las siguientes afirmaciones es falsa respecto a las variables est&aacute;ticas en Java";
 choices[92]= new Array();
 choices[92][0] = "Sus valores son compartidos por todos los objetos de la clase";
 choices[92][1] = "Si se invoca desde la clase en la que se encuentra definido, basta con escribir su nombre";
 choices[92][2] = "Si se le invoca desde una clase distinta, debe anteponerse a su nombre, el de la clase en la que se encuentra seguido del operador punto (.) &lt;NombreClase&gt;.variableEstatica";
 choices[92][3] = "Se define mediante el modificador de acceso public";
 answers[92] = choices[92][3];
 units[92] = "116";
 comments[92] = "Id Pregunta: 11317. El identificador que caracteriza a una variable de clase es static y no es considerada de acceso. Las de acceso son: public, private y protected.";


//  Id pregunta: 11434 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n el art&iacute;culo 47 de la ley 9/2014, se regular&aacute; mediante Real Decreto (seleccione la INCORRECTA):";
 choices[93]= new Array();
 choices[93][0] = "Derecho a resolver el contrato en cualquier momento.";
 choices[93][1] = "Derecho a figurar en las gu&iacute;as de abonado.";
 choices[93][2] = "Derecho al cambio de operador.";
 choices[93][3] = "Derecho a acceder a los servicios de emergencia de forma gratuita.";
 answers[93] = choices[93][1];
 units[93] = "110";
 comments[93] = "Id Pregunta: 11434. ";


//  Id pregunta: 11435 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n la Ley 9/2014, las decisiones relativas a los otorgamientos de derechos de uso (de numeraci&oacute;n, direccionamiento y denominaci&oacute;n) se adoptar&aacute;n en el plazo de:";
 choices[94]= new Array();
 choices[94][0] = "10 d&iacute;as.";
 choices[94][1] = "15 d&iacute;as.";
 choices[94][2] = "3 semanas.";
 choices[94][3] = "6 semanas.";
 answers[94] = choices[94][3];
 units[94] = "110";
 comments[94] = "Id Pregunta: 11435. ";


//  Id pregunta: 11459 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n la Ley 9/2014, el Gobierno, en relaci&oacute;n a la administraci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico, establecer&aacute;:";
 choices[95]= new Array();
 choices[95][0] = "La adecuada utilizaci&oacute;n del espectro mediante el empleo de equipos p&uacute;blicos.";
 choices[95][1] = "La correcta utilizaci&oacute;n de frecuencias por parte de los operadores.";
 choices[95][2] = "La inspecci&oacute;n por un ente privado del nivel radioel&eacute;ctrico tolerable.";
 choices[95][3] = "Ninguna de las anteriores.";
 answers[95] = choices[95][3];
 units[95] = "110";
 comments[95] = "Id Pregunta: 11459. ";


//  Id pregunta: 11470 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  La ley 9/2014 establece el derecho al cambio de operador, con conservaci&oacute;n de los n&uacute;meros, en un plazo de:";
 choices[96]= new Array();
 choices[96][0] = "Un d&iacute;a natural.";
 choices[96][1] = "Un d&iacute;a laborable.";
 choices[96][2] = "Una semana.";
 choices[96][3] = "Depende del operador.";
 answers[96] = choices[96][1];
 units[96] = "110";
 comments[96] = "Id Pregunta: 11470. ";


//  Id pregunta: 11660 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  En una trama de Frame Relay, la m&iacute;nima longitud posible del campo DLCI es:";
 choices[97]= new Array();
 choices[97][0] = "8 bits";
 choices[97][1] = "10 bits";
 choices[97][2] = "17 bits";
 choices[97][3] = "24 bits";
 answers[97] = choices[97][1];
 units[97] = "109";
 comments[97] = "Id Pregunta: 11660. ";


//  Id pregunta: 11688 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  El OUI de una direcci&oacute;n MAC posee";
 choices[98]= new Array();
 choices[98][0] = "6 digitos Hexadecimales";
 choices[98][1] = "32bits";
 choices[98][2] = "48bits";
 choices[98][3] = "24bytes";
 answers[98] = choices[98][0];
 units[98] = "100";
 comments[98] = "Id Pregunta: 11688. NULL";


//  Id pregunta: 11695 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Los mensajes intercambiados entre Bridges en STP se denominan:";
 choices[99]= new Array();
 choices[99][0] = "PDUs";
 choices[99][1] = "PDIs";
 choices[99][2] = "BPDU";
 choices[99][3] = "SPDU";
 answers[99] = choices[99][2];
 units[99] = "102";
 comments[99] = "Id Pregunta: 11695. NULL";


