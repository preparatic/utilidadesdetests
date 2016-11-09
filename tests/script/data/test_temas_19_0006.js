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

//  Id pregunta: 685 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; es PROFIT?";
 choices[0]= new Array();
 choices[0][0] = "Un estamento independiente que se encarga de velar por el desarrollo de las tecnolog&iacute;as de la informaci&oacute;n en los pa&iacute;ses en v&iacute;as de desarrollo.";
 choices[0][1] = "El Programa de Fomento para la Investigaci&oacute;n T&eacute;cnica, promovido para conceder ayudas a los proyectos de I+D.";
 choices[0][2] = "El programa asociado al programa IDA y encargado del intercambio de las estad&iacute;sticas de tr&aacute;fico en los distintos pa&iacute;ses de la Comunidad Europea.";
 choices[0][3] = "Nada de lo anterior es cierto.";
 answers[0] = choices[0][1];
 units[0] = "103";
 comments[0] = "Id Pregunta: 685. ";


//  Id pregunta: 996 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Disponemos de un multiplexor por divisi&oacute;n en el tiempo (TDM) al que se conectan 8 terminales utilizando enlaces de 1200 bps. &iquest;Cu&aacute;l deber&aacute; ser la velocidad de la l&iacute;nea de salida del multiplexor?:";
 choices[1]= new Array();
 choices[1][0] = "Inferior a 9.600 bps";
 choices[1][1] = "Igual o superior a 9.600 bpos";
 choices[1][2] = "Superior a 19.200 bps";
 choices[1][3] = "Igual a 1.200 bps";
 answers[1] = choices[1][1];
 units[1] = "102";
 comments[1] = "Id Pregunta: 996. ";


//  Id pregunta: 2988 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes protocolos de la familia TCP/IP no pertenece al grupo de protocolos de la capa de aplicaci&oacute;n?";
 choices[2]= new Array();
 choices[2][0] = "DNS: Sistema de nombres de dominio";
 choices[2][1] = "SNMP: Protocolo de gesti&oacute;n simple de red";
 choices[2][2] = "FTP: Protocolo de transferencia de archivos";
 choices[2][3] = "ARP: Protocolo de determinaci&oacute;n de direcciones";
 answers[2] = choices[2][3];
 units[2] = "100";
 comments[2] = "Id Pregunta: 2988. NULL";


//  Id pregunta: 3034 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes direcciones es v&aacute;lida para un equipo conectado y accesible directamente desde Internet?:";
 choices[3]= new Array();
 choices[3][0] = "256.198.234.12";
 choices[3][1] = "10.128.179.54";
 choices[3][2] = "192.139.234.12";
 choices[3][3] = "127.34.156.0";
 answers[3] = choices[3][2];
 units[3] = "100";
 comments[3] = "Id Pregunta: 3034. NULL";


//  Id pregunta: 3053 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Dado un cable coaxial de longitud 1 metro, donde se aplica una potencia de 1 mW, y se obtiene en el otro extremo una potencia de salida de 0.1 mW, se puede decir que el cable presenta unas p&eacute;rdidas de:";
 choices[4]= new Array();
 choices[4][0] = "10 dB/m";
 choices[4][1] = "20 dB/m";
 choices[4][2] = "1 dB/m";
 choices[4][3] = "5 dB/m";
 answers[4] = choices[4][0];
 units[4] = "99";
 comments[4] = "Id Pregunta: 3053. ";


//  Id pregunta: 3136 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de las respuestas siguientes es verdadera sobre las direcciones disponibles en clases A, B y C en redes IP?:";
 choices[5]= new Array();
 choices[5][0] = "El n&uacute;mero de direcciones para sistemas por red decrece de redes clase A  a las de clase C";
 choices[5][1] = "El n&uacute;mero de direcciones disponibles para redes decrece de las de clases A a las de clase C";
 choices[5][2] = "Las direcciones de clase C son adecuadas para organizaciones muy grandes, mientras que las de clase B son m&aacute;s adecuadas para compa&ntilde;ias peque&ntilde;as";
 choices[5][3] = "El rango de direcciones A es num&eacute;ricamente el mayor mientras que las de clase C es numericamente el menor";
 answers[5] = choices[5][0];
 units[5] = "100";
 comments[5] = "Id Pregunta: 3136. NULL";


//  Id pregunta: 3148 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a los elementos de red?:";
 choices[6]= new Array();
 choices[6][0] = "Los bridges usan la direcci&oacute;n MAC para determinar el destino del paquete recibido";
 choices[6][1] = "Los bridges generan autom&aacute;ticamente sus propias tablas (puerto, direcci&oacute;n MAC) leyendo las direcciones MAC del remitente de cada paquete recibido";
 choices[6][2] = "Si un bridge recibe un paquete cuya direcci&oacute;n MAC de destino no tiene un puerto asociado en su tabla, lo reenv&iacute;a por todos sus puertos (flooding)";
 choices[6][3] = "Los routers, para ser compatibles con distintos protocolos de acceso al medio, utilizan tambi&eacute;n la direcci&oacute;n MAC para determinar el destino del paquete recibido";
 answers[6] = choices[6][3];
 units[6] = "102";
 comments[6] = "Id Pregunta: 3148. NULL";


//  Id pregunta: 3170 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes expresiones definen mejor las ventajas de un multiplexor estad&iacute;stico?:";
 choices[7]= new Array();
 choices[7][0] = "Pueden atender m&aacute;s circuitos que los multiplexores por divisi&oacute;n de tiempos (MDT)";
 choices[7][1] = "Permiten evaluar la eficacia de transmisi&oacute;n de los circuitos que multiplexa";
 choices[7][2] = "Permite utilizar una l&iacute;nea de transmisi&oacute;n de menor velocidad que el MDT equivalente";
 choices[7][3] = "Evita el uso de los filtros requeridos por el MDT";
 answers[7] = choices[7][2];
 units[7] = "101";
 comments[7] = "Id Pregunta: 3170. ";


//  Id pregunta: 3180 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes respuestas define el formato de la trama en Ethernet V2?:";
 choices[8]= new Array();
 choices[8][0] = "CRC, longitud trama, direcci&oacute;n origen, direcci&oacute;n destino, datos";
 choices[8][1] = "Pre&aacute;mbulo, tipo trama, direcci&oacute;n origen, direcci&oacute;n destino, datos y CRC";
 choices[8][2] = "Pre&aacute;mbulo, direcci&oacute;n destino, direcci&oacute;n origen, tipo trama, datos y CRC";
 choices[8][3] = "Pre&aacute;mbulo, direcci&oacute;n origen, direcci&oacute;n destino, longitud trama, datos y CRC";
 answers[8] = choices[8][2];
 units[8] = "100";
 comments[8] = "Id Pregunta: 3180. NULL";


//  Id pregunta: 3195 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Dentro del modelo OSI la funci&oacute;n de 'proporcionar puntos de chequeo que permita reiniciar la transmisi&oacute;n a partir del punto m&aacute;s cercano al posible fallo y no desde el principio', corresponde al nivel:";
 choices[9]= new Array();
 choices[9][0] = "Nivel de red";
 choices[9][1] = "Nivel de transporte";
 choices[9][2] = "Nivel de sesi&oacute;n";
 choices[9][3] = "Nivel de presentaci&oacute;n";
 answers[9] = choices[9][2];
 units[9] = "100";
 comments[9] = "Id Pregunta: 3195. NULL";


//  Id pregunta: 3196 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Dentro del modelo OSI la funci&oacute;n de 'proporcionar testigos para que las dos partes de un protocolo no utilicen la misma operaci&oacute;n al mismo tiempo', corresponde al nivel:";
 choices[10]= new Array();
 choices[10][0] = "Presentaci&oacute;n";
 choices[10][1] = "Transporte";
 choices[10][2] = "Sesi&oacute;n";
 choices[10][3] = "Red";
 answers[10] = choices[10][2];
 units[10] = "100";
 comments[10] = "Id Pregunta: 3196. NULL";


//  Id pregunta: 3200 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El acceso b&aacute;sico en RDSI:";
 choices[11]= new Array();
 choices[11][0] = "Es utilizado exclusivamente por un &uacute;nico terminal";
 choices[11][1] = "Puede ser compartido hasta por un m&aacute;ximo de diecis&eacute;is terminales";
 choices[11][2] = "Puede ser compartido hasta por un m&aacute;ximo de ocho terminales";
 choices[11][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[11] = choices[11][2];
 units[11] = "103";
 comments[11] = "Id Pregunta: 3200. ";


//  Id pregunta: 3201 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El acceso primario de la Red Digital de Servicios Integrados (en las normas europeas) est&aacute; constituido por:";
 choices[12]= new Array();
 choices[12][0] = "Un enlace con 30 canales B y un canal D utilizando una velocidad de transmisi&oacute;n de 2048 Kbps";
 choices[12][1] = "Un enlace con 30 canales D y un canal B utilizando una velocidad de transmisi&oacute;n de 2048 Kbps";
 choices[12][2] = "Un enlace con 30 canales B y un canal D utilizando una velocidad de transmisi&oacute;n de 1984 Kbps";
 choices[12][3] = "Un enlace con 30 canales D y un canal B utilizando una velocidad de transmisi&oacute;n de 1984 Kbps";
 answers[12] = choices[12][0];
 units[12] = "103";
 comments[12] = "Id Pregunta: 3201. ";


//  Id pregunta: 3227 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes no es un protocolo de encaminamiento o enrutamiento?:";
 choices[13]= new Array();
 choices[13][0] = "OSPF";
 choices[13][1] = "RIP";
 choices[13][2] = "ORP";
 choices[13][3] = "IS-IS";
 answers[13] = choices[13][2];
 units[13] = "102";
 comments[13] = "Id Pregunta: 3227. ";


//  Id pregunta: 3233 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes protocolos env&iacute;a, tal y como indica su especificaci&oacute;n, &quot;traps&quot;?:";
 choices[14]= new Array();
 choices[14][0] = "SNMP";
 choices[14][1] = "UDP";
 choices[14][2] = "HTTP";
 choices[14][3] = "FTP";
 answers[14] = choices[14][0];
 units[14] = "104";
 comments[14] = "Id Pregunta: 3233. ";


//  Id pregunta: 3248 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l es la velocidad del canal D en un acceso primario RDSI en Europa?:";
 choices[15]= new Array();
 choices[15][0] = "16 kbps";
 choices[15][1] = "32 kbps";
 choices[15][2] = "64 kbps";
 choices[15][3] = "128 kbps";
 answers[15] = choices[15][2];
 units[15] = "103";
 comments[15] = "Id Pregunta: 3248. ";


//  Id pregunta: 3307 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;Qu&eacute; punto de referencia es el interfaz f&iacute;sico y l&oacute;gico entre Terminales no dise&ntilde;ados para conectarse directamente a la RDSI, como un terminal telef&oacute;nico convencional &oacute; m&aacute;quina de fax convencional (Grupo III), con el equipo Adaptador de Terminal?: ";
 choices[16]= new Array();
 choices[16][0] = "R";
 choices[16][1] = "S";
 choices[16][2] = "T";
 choices[16][3] = "U";
 answers[16] = choices[16][0];
 units[16] = "103";
 comments[16] = "Id Pregunta: 3307. ";


//  Id pregunta: 3324 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  8802.3 es:";
 choices[17]= new Array();
 choices[17][0] = "El c&oacute;digo de acceso a la red digital";
 choices[17][1] = "Un est&aacute;ndar de redes de &aacute;rea local de ISO IEC JTC1";
 choices[17][2] = "Un est&aacute;ndar europeo de conmutaci&oacute;n de paquetes";
 choices[17][3] = "Un est&aacute;ndar ANSI que trata de m&oacute;dems";
 answers[17] = choices[17][1];
 units[17] = "101";
 comments[17] = "Id Pregunta: 3324. ";


//  Id pregunta: 3337 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Cada capa del modelo de referencia de interconexi&oacute;n de sistemas abiertos (OSI) se comunica directamente:";
 choices[18]= new Array();
 choices[18][0] = "A trav&eacute;s de uno o m&aacute;s puntos de acceso de servicio (SAP - service access point), con la capa contigua superior y de igual forma con la capa contigua inferior";
 choices[18][1] = "A trav&eacute;s de la informaci&oacute;n de control (ICI - Interface Control Information) contenida en la cabecera del bloque de datos transferido, con la misma capa en el dispositivo de red con el que establece comunicaci&oacute;n";
 choices[18][2] = "A trav&eacute;s de la informaci&oacute;n de control (ICI - Interface Control Information) contenida en la cabecera del bloque de datos transferido, con la capa contigua superior y de igual forma con la capa contigua inferior";
 choices[18][3] = "Con las tres capas mencionadas en &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 answers[18] = choices[18][3];
 units[18] = "100";
 comments[18] = "Id Pregunta: 3337. NULL";


//  Id pregunta: 3363 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Dentro de la especificaci&oacute;n de la Red Digital de Servicios Integrados, se definen diversos interfaces. Indique cual de las opciones siguientes es verdadera:";
 choices[19]= new Array();
 choices[19][0] = "El interfaz U es el definido entre la central p&uacute;blica y el equipo terminado de red";
 choices[19][1] = "El interfaz U utiliza un par de hilos telef&oacute;nicos como los de la RTB";
 choices[19][2] = "El interfaz U depende de las compa&ntilde;&iacute;as telef&oacute;nicas";
 choices[19][3] = "Todas las respuestas anteriores son ciertas";
 answers[19] = choices[19][3];
 units[19] = "103";
 comments[19] = "Id Pregunta: 3363. ";


//  Id pregunta: 3383 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  El MIB est&aacute;ndar o MIB-I se complet&oacute; con:";
 choices[20]= new Array();
 choices[20][0] = "MIB-2";
 choices[20][1] = "MIB-II";
 choices[20][2] = "Con la RFC 1213";
 choices[20][3] = "La 'b' y la 'c' son correctas";
 answers[20] = choices[20][3];
 units[20] = "104";
 comments[20] = "Id Pregunta: 3383. ";


//  Id pregunta: 3406 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Ethernet:";
 choices[21]= new Array();
 choices[21][0] = "Fue inventada por Xerox y desarrollada por Xerox, Intel y DEC";
 choices[21][1] = "Fue inventada por Fujitsu y desarrollada por Fujitsu, Nortel y Cisco";
 choices[21][2] = "Fue inventada por Siemens y desarrollada por Siemens, Alcatel y Lucent";
 choices[21][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[21] = choices[21][0];
 units[21] = "101";
 comments[21] = "Id Pregunta: 3406. ";


//  Id pregunta: 3421 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Indicar cu&aacute;l de los siguientes equipos no deber&iacute;a colocarse en una DMZ:";
 choices[22]= new Array();
 choices[22][0] = "Bastion host";
 choices[22][1] = "Servidor Web";
 choices[22][2] = "Servidor FTP";
 choices[22][3] = "Servidor de aplicaciones";
 answers[22] = choices[22][3];
 units[22] = "113";
 comments[22] = "Id Pregunta: 3421. ";


//  Id pregunta: 3479 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  El tipo de formato de clase C de direcci&oacute;n IP se emplea mayoritariamente para:";
 choices[23]= new Array();
 choices[23][0] = "Las redes de &aacute;rea local";
 choices[23][1] = "Grandes organizaciones p&uacute;blicas y multinacionales que poseen gran n&uacute;mero de subredes";
 choices[23][2] = "Mensajes de difusi&oacute;n m&uacute;ltiple (multicast)";
 choices[23][3] = "Fines experimentales";
 answers[23] = choices[23][0];
 units[23] = "100";
 comments[23] = "Id Pregunta: 3479. NULL";


//  Id pregunta: 3489 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En conmutaci&oacute;n de paquetes es falso que:";
 choices[24]= new Array();
 choices[24][0] = "la transmisi&oacute;n es por r&aacute;fagas";
 choices[24][1] = "la ruta origen-&gt;destino puede ser variable";
 choices[24][2] = "no hay ning&uacute;n circuito f&iacute;sico dedicado en la comunicaci&oacute;n";
 choices[24][3] = "todas las anteriores son caracter&iacute;sticas de la conmutaci&oacute;n de paquetes";
 answers[24] = choices[24][3];
 units[24] = "101";
 comments[24] = "Id Pregunta: 3489. ";


//  Id pregunta: 3493 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  En el concepto de ventana deslizante:";
 choices[25]= new Array();
 choices[25][0] = "El tama&ntilde;o de la ventana es el n&uacute;mero de paquetes a enviar sin esperar su reconocimiento";
 choices[25][1] = "La ventana avanza de posici&oacute;n seg&uacute;n el asentimiento de paquetes anteriormente enviados";
 choices[25][2] = "Los asentimientos pueden recibirse de forma desordenada";
 choices[25][3] = "Todo lo anterior es correcto";
 answers[25] = choices[25][3];
 units[25] = "100";
 comments[25] = "Id Pregunta: 3493. NULL";


//  Id pregunta: 3501 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  En el modelo de referencia OSI, una comunicaci&oacute;n entre dos capas se denomina confirmada, si hay:";
 choices[26]= new Array();
 choices[26][0] = "Una petici&oacute;n y una respuesta";
 choices[26][1] = "Una petici&oacute;n, una respuesta y una confirmaci&oacute;n";
 choices[26][2] = "Una petici&oacute;n, una indicaci&oacute;n, una respuesta y una confirmaci&oacute;n";
 choices[26][3] = "Todas las anteriores son incompletas";
 answers[26] = choices[26][2];
 units[26] = "100";
 comments[26] = "Id Pregunta: 3501. NULL";


//  Id pregunta: 3507 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  En el nivel de enlace, respecto al protocolo HDLC puede decirse que:";
 choices[27]= new Array();
 choices[27][0] = "Es un protocolo orientado a car&aacute;cter";
 choices[27][1] = "El modo de respuesta normal se conoce como NRM";
 choices[27][2] = "El modo de respuesta asincrono se conoce como ARM";
 choices[27][3] = "Las respuestas 'b' y 'c' son correctas";
 answers[27] = choices[27][3];
 units[27] = "100";
 comments[27] = "Id Pregunta: 3507. NULL";


//  Id pregunta: 3562 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  En un domicilio particular abonado a un &quot;acceso b&aacute;sico&quot; de RDSI:";
 choices[28]= new Array();
 choices[28][0] = "Siempre puede estar conectado a Internet y a su vez recibir una llamada telef&oacute;nica";
 choices[28][1] = "No puede estar conectado a Internet ya su vez recibir una llamada telef&oacute;nica";
 choices[28][2] = "Puede estar conectado a Internet y a su vez recibir una llamada telef&oacute;nica, solo en el caso de que disponga de un &quot;m&oacute;dem&quot; ADSL";
 choices[28][3] = "Ninguna de las anteriores es correcta";
 answers[28] = choices[28][0];
 units[28] = "103";
 comments[28] = "Id Pregunta: 3562. ";


//  Id pregunta: 3582 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Entre las respuestas hay tres relacionadas. Indicar la que no lo est&aacute;:";
 choices[29]= new Array();
 choices[29][0] = "BOOTP";
 choices[29][1] = "SNMP";
 choices[29][2] = "DHCP";
 choices[29][3] = "ARP";
 answers[29] = choices[29][1];
 units[29] = "100";
 comments[29] = "Id Pregunta: 3582. NULL";


//  Id pregunta: 3584 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Indique la opci&oacute;n que mejor refleje el servicio ofrecido por las compa&ntilde;&iacute;as de telecomunicaci&oacute;n, como conmutaci&oacute;n de circuitos:";
 choices[30]= new Array();
 choices[30][0] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, la entrega a la red y libera el circuito";
 choices[30][1] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, se establece el circuito y se dispone de un ancho de banda variable";
 choices[30][2] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, se establece el circuito y se env&iacute;a la informaci&oacute;n en paquetes";
 choices[30][3] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, se establece el circuito y se dispone de un ancho de banda de transmisi&oacute;n fijo durante todo el tiempo que permanece establecido el cto";
 answers[30] = choices[30][3];
 units[30] = "101";
 comments[30] = "Id Pregunta: 3584. ";


//  Id pregunta: 3644 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  La t&eacute;cnica de utilizar 'ventanas de transmisi&oacute;n y recepci&oacute;n' en los protocolos se utiliza fundamentalmente porque:";
 choices[31]= new Array();
 choices[31][0] = "Evita la necesidad de enviar 'reconocimientos negativos' a aquellas tramas que han llegado incorrectamente";
 choices[31][1] = "Aumenta el tiempo de utilizaci&oacute;n efectiva del canal";
 choices[31][2] = "Aumenta la velocidad de sincronismo entre transmisor y receptor";
 choices[31][3] = "Impide el desbordamiento de la memoria del receptor";
 answers[31] = choices[31][1];
 units[31] = "100";
 comments[31] = "Id Pregunta: 3644. NULL";


//  Id pregunta: 3647 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  La tecnolog&iacute;a de red de &aacute;rea local PMD-FDDI:";
 choices[32]= new Array();
 choices[32][0] = "Trabaja a 125 Mhz";
 choices[32][1] = "Utiliza codificaci&oacute;n 4B/5B NRZI";
 choices[32][2] = "Transmite a 100 Mbps";
 choices[32][3] = "Todas las respuestas anteriores son correctas";
 answers[32] = choices[32][3];
 units[32] = "101";
 comments[32] = "Id Pregunta: 3647. ";


//  Id pregunta: 3690 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Se&ntilde;ale la opcion mas adecuada: Las bandas de frecuencia utilizables en un cable coaxial se encuentran:";
 choices[33]= new Array();
 choices[33][0] = "Entre 60 KHz y 3 GHz";
 choices[33][1] = "Sobre los 100 MHz";
 choices[33][2] = "Entre 4 y 11 GHz";
 choices[33][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[33] = choices[33][0];
 units[33] = "99";
 comments[33] = "Id Pregunta: 3690. ";


//  Id pregunta: 3694 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Las direcciones en IPv6 se clasifican en:";
 choices[34]= new Array();
 choices[34][0] = "unicast, multicast y broadcast";
 choices[34][1] = "unicast, anycast y broadcast";
 choices[34][2] = "unicast, anycast y multicast";
 choices[34][3] = "unicast y multicast";
 answers[34] = choices[34][2];
 units[34] = "100";
 comments[34] = "Id Pregunta: 3694. NULL";


//  Id pregunta: 3730 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Los niveles superiores del modelo OSI se agrupan dentro del bloque de aplicaci&oacute;n mientras que los niveles bajos se agrupan en el:";
 choices[35]= new Array();
 choices[35][0] = "Bloque de compatibilidad de software";
 choices[35][1] = "Bloque de encaminamiento del tr&aacute;fico";
 choices[35][2] = "Bloque de transmisi&oacute;n";
 choices[35][3] = "Bloque de multiplexaci&oacute;n y detecci&oacute;n de errores";
 answers[35] = choices[35][2];
 units[35] = "100";
 comments[35] = "Id Pregunta: 3730. NULL";


//  Id pregunta: 3735 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Los problemas principales de IPv4 que hacen necesario IPv6 son:";
 choices[36]= new Array();
 choices[36][0] = "los relativos a la escasez de direcciones";
 choices[36][1] = "los relativos al tama&ntilde;o de las tablas de encaminamiento";
 choices[36][2] = "los relativos a la calidad de servicio";
 choices[36][3] = "todos los anteriores";
 answers[36] = choices[36][3];
 units[36] = "100";
 comments[36] = "Id Pregunta: 3735. NULL";


//  Id pregunta: 3757 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  Para aplicaciones de media streaming es m&aacute;s adecuado:";
 choices[37]= new Array();
 choices[37][0] = "UDP";
 choices[37][1] = "TCP";
 choices[37][2] = "tanto TCP como UDP son adecuados ya que proporcionan un nivel de transporte a la aplicaci&oacute;n de video";
 choices[37][3] = "ni TCP ni UDP son adecuados ya que no garantizan la velocidad adecuada suficiente";
 answers[37] = choices[37][0];
 units[37] = "100";
 comments[37] = "Id Pregunta: 3757. NULL";


//  Id pregunta: 3765 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  Para poder aumentar el rendimiento de los medios de comunicaci&oacute;n se han desarrollado diversos sistemas de multiplexaci&oacute;n. Elija la opci&oacute;n que considere cierta:";
 choices[38]= new Array();
 choices[38][0] = "Se dice que sobre un medio de transmisi&oacute;n se ha utilizado un sistema de multiplexaci&oacute;n por divisi&oacute;n en el tiempo cuando cada canal de entrada se modula sobre una portadora diferente";
 choices[38][1] = "Se dice que sobre un medio de transmisi&oacute;n se ha utilizado un sistema de multiplexaci&oacute;n por divisi&oacute;n en frecuencia cuando a cada canal de entrada se le asigna un per&iacute;odo de tiempo dentro de una trama";
 choices[38][2] = "Se dice que sobre un medio de transmisi&oacute;n se ha utilizado un sistema de multiplexaci&oacute;n por divisi&oacute;n en frecuencia cuando a cada canal de entrada se le asigna una frecuencia portadora distinta";
 choices[38][3] = "Se dice que sobre un medio de transmisi&oacute;n se ha utilizado un sistema de multiplexaci&oacute;n por divisi&oacute;n en el tiempo cuando a cada canal de entrada se le asigna una frecuencia entre las disponibles en el espectro del medio";
 answers[38] = choices[38][2];
 units[38] = "99";
 comments[38] = "Id Pregunta: 3765. *: multiplexacion";


//  Id pregunta: 3767 AÃ±o de creación de pregunta: 2002-01-01
 questions[39]= "40)  Cu&aacute;ntos octetos usa IPv6 en el direccionamiento, considerando que IPv4 usa 4 octetos:";
 choices[39]= new Array();
 choices[39][0] = "6";
 choices[39][1] = "8";
 choices[39][2] = "14";
 choices[39][3] = "16";
 answers[39] = choices[39][3];
 units[39] = "100";
 comments[39] = "Id Pregunta: 3767. NULL";


//  Id pregunta: 3775 AÃ±o de creación de pregunta: 2002-01-01
 questions[40]= "41)  Por B.E.R. entendemos:";
 choices[40]= new Array();
 choices[40][0] = "Basic Encoding Rules, reglas de codificaci&oacute;n b&aacute;sicas usadas en la definici&oacute;n de datos mediante ASN.1";
 choices[40][1] = "Binary Error Rate, tasa de error binaria que define la adecuaci&oacute;n de los canales de transmisi&oacute;n";
 choices[40][2] = "Las 2 respuestas anteriores son correctas";
 choices[40][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[40] = choices[40][2];
 units[40] = "101";
 comments[40] = "Id Pregunta: 3775. ";


//  Id pregunta: 3776 AÃ±o de creación de pregunta: 2002-01-01
 questions[41]= "42)  Por una misma fibra &oacute;ptica:";
 choices[41]= new Array();
 choices[41][0] = "Puede transportarse tr&aacute;fico asociado a varios PVCs y SVCs";
 choices[41][1] = "S&oacute;lo puede viajar tr&aacute;fico asociado a un &uacute;nico PVC configurado para tal fin";
 choices[41][2] = "No puede llevar tr&aacute;fico asociado a PVCs";
 choices[41][3] = "Ninguna de las anteriores";
 answers[41] = choices[41][0];
 units[41] = "99";
 comments[41] = "Id Pregunta: 3776. ";


//  Id pregunta: 3799 AÃ±o de creación de pregunta: 2002-01-01
 questions[42]= "43)  RTP y RTCP son protocolos que habitualmente se situan:";
 choices[42]= new Array();
 choices[42][0] = "justo encima de TCP";
 choices[42][1] = "justo encima de UDP";
 choices[42][2] = "justo debajo de TCP";
 choices[42][3] = "justo debajo de UDP";
 answers[42] = choices[42][1];
 units[42] = "100";
 comments[42] = "Id Pregunta: 3799. NULL";


//  Id pregunta: 3819 AÃ±o de creación de pregunta: 2002-01-01
 questions[43]= "44)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[43]= new Array();
 choices[43][0] = "El mantenimiento del anillo se hace de forma centralizada en token ring y distribuida en token bus";
 choices[43][1] = "El mantenimiento del anillo se hace de forma centralizada en token ring y token bus";
 choices[43][2] = "El mantenimiento del anillo se hace de forma distribuida en token ring y token bus";
 choices[43][3] = "El mantenimiento del anillo se hace de forma centralizada en token bus y distribuida en token ring";
 answers[43] = choices[43][0];
 units[43] = "101";
 comments[43] = "Id Pregunta: 3819. ";


//  Id pregunta: 3835 AÃ±o de creación de pregunta: 2002-01-01
 questions[44]= "45)  SIP es:";
 choices[44]= new Array();
 choices[44][0] = "Particularizaci&oacute;n de GOSIP (Government OSI Profile) m&aacute;s ligera";
 choices[44][1] = "Un tipo de mensaje de H.323 para videotelefon&iacute;a";
 choices[44][2] = "Un protocolo de paquetizaci&oacute;n de voz que se ejecuta en los mediagateways";
 choices[44][3] = "Protocolo de voz sobre IP del IETF";
 answers[44] = choices[44][3];
 units[44] = "100";
 comments[44] = "Id Pregunta: 3835. NULL";


//  Id pregunta: 3891 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  En el modelo OSI de 7 capas, la capa 2 de Enlace de Datos cuenta con protocolos est&aacute;ndares como:";
 choices[45]= new Array();
 choices[45][0] = "HDLC, LAPB y LAPD.";
 choices[45][1] = "SDLC, LAPB e ICMP.";
 choices[45][2] = "LAPB, LAPD y LAPH.";
 choices[45][3] = "HDLC, LAPB e ICMP.";
 answers[45] = choices[45][0];
 units[45] = "100";
 comments[45] = "Id Pregunta: 3891. Junta Andaluc&iacute;a";


//  Id pregunta: 3933 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  &iquest;C&uacute;antos canales tiene una trama MIC?:";
 choices[46]= new Array();
 choices[46][0] = "32";
 choices[46][1] = "16";
 choices[46][2] = "32, pero dos de ellos se utilizan para se&ntilde;alizaci&oacute;n y sincronismo";
 choices[46][3] = "Todas las respuestas anteriores son falsas";
 answers[46] = choices[46][2];
 units[46] = "103";
 comments[46] = "Id Pregunta: 3933. ";


//  Id pregunta: 3963 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Ordenar los siguientes dispositivos seg&uacute;n nivel OSI a puente b gateway c router d repetidor";
 choices[47]= new Array();
 choices[47][0] = "d a c b ";
 choices[47][1] = "a b c d";
 choices[47][2] = "b c d a";
 choices[47][3] = "b a d c ";
 answers[47] = choices[47][0];
 units[47] = "113";
 comments[47] = "Id Pregunta: 3963. ";


//  Id pregunta: 4052 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  Que sentido tiene pasar de IPv4 a IPV6";
 choices[48]= new Array();
 choices[48][0] = "El principal motivo es aumentar el ancho de banda";
 choices[48][1] = "Los nodos de internet cambiar&aacute;n a este protocolo el 1 de enero de 2014";
 choices[48][2] = "IPv6 permite un uso optimo de las tecnolog&iacute;as wireless";
 choices[48][3] = "Ninguna de las anteriores es correcta";
 answers[48] = choices[48][3];
 units[48] = "100";
 comments[48] = "Id Pregunta: 4052. NULL";


//  Id pregunta: 4122 AÃ±o de creación de pregunta: 2006-01-01
 questions[49]= "50)  La red geogr&aacute;ficamente dispersa se llama";
 choices[49]= new Array();
 choices[49][0] = "WAN";
 choices[49][1] = "LAN";
 choices[49][2] = "SAN";
 choices[49][3] = "PAN";
 answers[49] = choices[49][0];
 units[49] = "101";
 comments[49] = "Id Pregunta: 4122. ";


//  Id pregunta: 4159 AÃ±o de creación de pregunta: 2006-01-01
 questions[50]= "51)  Que mecanismo proporciona seguridad a DNS";
 choices[50]= new Array();
 choices[50][0] = "Un par nombre/contrase&ntilde;a";
 choices[50][1] = "Un directorio TFTP";
 choices[50][2] = "Un nombre de dominio";
 choices[50][3] = "ninguna de las anteriores";
 answers[50] = choices[50][0];
 units[50] = "113";
 comments[50] = "Id Pregunta: 4159. ";


//  Id pregunta: 4334 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  La topolog&iacute;a de una LAN puede ser:";
 choices[51]= new Array();
 choices[51][0] = "BUS, Anillo, Estrella y Mixta.";
 choices[51][1] = "&Aacute;rbol, Anillo y Estrella";
 choices[51][2] = "BUS, Anillo, Estrella, Completa, &Aacute;rbol o Mixta.";
 choices[51][3] = "BUS, Anillo, Estrella, &Aacute;rbol y Mixta.";
 answers[51] = choices[51][2];
 units[51] = "100";
 comments[51] = "Id Pregunta: 4334. ";


//  Id pregunta: 4337 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  Ana es responsable de comunicaciones en una entidad p&uacute;blica. La entidad dispone de una LAN con conmutadores (switch) 100Base-TX, con varios puertos libres (no usados) cada uno. El pr&oacute;ximo despliegue de una nueva aplicaci&oacute;n va a incrementar considerablemente el tr&aacute;fico, superando con mucho la capacidad de la infraestructura actual. La soluci&oacute;n m&aacute;s eficiente para cubrir las demandas de la nueva aplicaci&oacute;n, de entre las que se citan a continuaci&oacute;n, ser&aacute;:";
 choices[52]= new Array();
 choices[52][0] = "Desplegar una nueva infraestructura de fibra &oacute;ptica de 1Gb 1000Base-SX.";
 choices[52][1] = "Desplegar una nueva infraestructura de fibra &oacute;ptica de 10Gb 10Gbase-SR/SW.";
 choices[52][2] = "Implantar una red WiFi 802.11.";
 choices[52][3] = "Tender nuevas l&iacute;neas 100Base-TX entre los puertos libres de los conmutadores.";
 answers[52] = choices[52][3];
 units[52] = "100";
 comments[52] = "Id Pregunta: 4337. ";


//  Id pregunta: 4350 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  La red G&Eacute;ANT:";
 choices[53]= new Array();
 choices[53][0] = "Es una red basada en IPv6 de &aacute;mbito mundial, que constituye el n&uacute;cleo de Internet.";
 choices[53][1] = "Es una red basada en IPv6, que sirve de desarrollo e investigaci&oacute;n para la nueva Internet 2.";
 choices[53][2] = "Es la siguiente evoluci&oacute;n l&oacute;gica de la Intranet Administrativa que une a diversos organismos de la Administraci&oacute;n General del Estado.";
 choices[53][3] = "Es una red paneuropea de investigaci&oacute;n, formada por la uni&oacute;n de las redes de investigaci&oacute;n, financiada por la Uni&oacute;n Europea";
 answers[53] = choices[53][3];
 units[53] = "103";
 comments[53] = "Id Pregunta: 4350. ";


//  Id pregunta: 4589 AÃ±o de creación de pregunta: 2007-01-01
 questions[54]= "55)  &iquest;Cual es el tama&ntilde;o de cabecera en una unidad de datos del protocolo lPv6?";
 choices[54]= new Array();
 choices[54][0] = "es variable";
 choices[54][1] = "de 20 octetos";
 choices[54][2] = "de 40 octetos";
 choices[54][3] = "similar a lPv4";
 answers[54] = choices[54][2];
 units[54] = "100";
 comments[54] = "Id Pregunta: 4589. ";


//  Id pregunta: 5028 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  En una red donde se utilizan redes virtuales (802.1q), &iquest;cu&aacute;l es el tama&ntilde;o m&aacute;ximo de las tramas etiquetadas quecirculan por la red?:";
 choices[55]= new Array();
 choices[55][0] = "1522 bytes";
 choices[55][1] = "1500 bytes";
 choices[55][2] = "1496 bytes";
 choices[55][3] = "1518 bytes";
 answers[55] = choices[55][0];
 units[55] = "100, 102";
 comments[55] = "Id Pregunta: 5028. Examen TIC A 2007";


//  Id pregunta: 5058 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Dadas las IPs de 2 hosts (172.16.17.30 y 172.16.28.15) y su m&aacute;scara (255.255.240.0). &iquest;Est&aacute;n en la misma subred?:";
 choices[56]= new Array();
 choices[56][0] = "S&iacute;";
 choices[56][1] = "No";
 choices[56][2] = "Depende de la direcci&oacute;n de la Puerta de Enlace";
 choices[56][3] = "Depende de la configuraci&oacute;n del switch";
 answers[56] = choices[56][0];
 units[56] = "100";
 comments[56] = "Id Pregunta: 5058. Examen TIC A 2007";


//  Id pregunta: 5159 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l es la capacidad de un enlace E1?";
 choices[57]= new Array();
 choices[57][0] = "2048 Kbps.";
 choices[57][1] = "1544 Kbps";
 choices[57][2] = "8448 Kbps.";
 choices[57][3] = "155 Mbps.";
 answers[57] = choices[57][0];
 units[57] = "103";
 comments[57] = "Id Pregunta: 5159. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5279 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  La diferencia entre la fibra &oacute;ptica monomodo y multimodo radica, principalmente, en:";
 choices[58]= new Array();
 choices[58][0] = "las frecuencias usadas";
 choices[58][1] = "los adaptadores usados";
 choices[58][2] = "la forma en que la luz entra en la fibra y se refleja dentro del n&uacute;cleo.";
 choices[58][3] = "La fibra multimodo permite por su naturaleza varios modos de instalacion";
 answers[58] = choices[58][2];
 units[58] = "99";
 comments[58] = "Id Pregunta: 5279. ";


//  Id pregunta: 5429 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[59]= new Array();
 choices[59][0] = "El protocolo IPv6 admite direcciones en IPv4";
 choices[59][1] = "El protocolo ARP est&aacute; en la capa de aplicaci&oacute;n";
 choices[59][2] = "Los protocolos ARP y RARP tienen funciones inversas";
 choices[59][3] = "En IP se puede indicar que un datagrama no debe ser fragmentado";
 answers[59] = choices[59][1];
 units[59] = "100";
 comments[59] = "Id Pregunta: 5429. Castilla y Le&oacute;n";


//  Id pregunta: 5474 AÃ±o de creación de pregunta: 2003-01-01
 questions[60]= "61)  En el servidor http Apache al configurarlo como HostnameLookUps On lo que hacemos es";
 choices[60]= new Array();
 choices[60][0] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del fichero /etc/hosts para almacenar el nombre en el fichero de log";
 choices[60][1] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del servicio dns inverso para almacenar el nombre en el fichero de log";
 choices[60][2] = "Ver si la petici&oacute;n origen tiene un nombre asociado a trav&eacute;s del o los servicios de resoluci&oacute;n de nombres ip para almacenar el nombre en el fichero del log";
 choices[60][3] = "Almacena en el log la ip y tambi&eacute;n el nombre del sistema origen de la petici&oacute;n http";
 answers[60] = choices[60][2];
 units[60] = "113";
 comments[60] = "Id Pregunta: 5474. Castilla y Le&oacute;n";


//  Id pregunta: 5668 AÃ±o de creación de pregunta: 2003-01-01
 questions[61]= "62)  &iquest;Cual de las siguientes empresas no est&aacute; entre las que desarrollaron originalmente el protocolo WS-Security?";
 choices[61]= new Array();
 choices[61][0] = "IBM";
 choices[61][1] = "Microsoft";
 choices[61][2] = "VeriSign";
 choices[61][3] = "SUN";
 answers[61] = choices[61][3];
 units[61] = "113";
 comments[61] = "Id Pregunta: 5668. ";


//  Id pregunta: 6048 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  GEANT2 es una red promovida por la UE para:";
 choices[62]= new Array();
 choices[62][0] = "El intercambio de datos entre las Administraciones Europeas";
 choices[62][1] = "La interconexi&oacute;n de la comunidad cient&iacute;fica y universitaria";
 choices[62][2] = "Las dos respuestas anteriores son correctas";
 choices[62][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[62] = choices[62][1];
 units[62] = "103";
 comments[62] = "Id Pregunta: 6048. ";


//  Id pregunta: 6572 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto al modelo OSI?";
 choices[63]= new Array();
 choices[63][0] = "La capa 5 establece, mantiene y cierra el di&aacute;logo entre dos aplicaciones. Controla la organizaci&oacute;n del di&aacute;logo y su sincronizaci&oacute;n";
 choices[63][1] = "La capa 4 proporciona enrutamiento, direccionamiento y fragmentaci&oacute;n de paquetes. Esta capa determina rutas alternativas para evitar congesti&oacute;n de red.";
 choices[63][2] = "La capa 3 proporciona transmisiones extremo a extremo";
 choices[63][3] = "La capa 2 proporciona enrutamiento, direccionamiento y fragmentaci&oacute;n de paquetes. Esta capa determina rutas alternativas para evitar congesti&oacute;n de red.";
 answers[63] = choices[63][0];
 units[63] = "100";
 comments[63] = "Id Pregunta: 6572. NULL";


//  Id pregunta: 7244 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Cu&aacute;les de las siguientes afirmaciones es INCORRECTA sobre la fibra &oacute;ptica:";
 choices[64]= new Array();
 choices[64][0] = "No es posible acceder a los datos transmitidos por m&eacute;todos no destructivos";
 choices[64][1] = "Puede transmitir electricidad para alimentar repetidores intermedios";
 choices[64][2] = "Es inmune a las interferencias electromagn&eacute;ticas";
 choices[64][3] = "Las fibras son fr&aacute;giles y sus empalmes son dif&iacute;ciles";
 answers[64] = choices[64][1];
 units[64] = "99";
 comments[64] = "Id Pregunta: 7244. Examen TIC B 2009";


//  Id pregunta: 7249 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  En el protocolo MPLS, la cabecera de las etiquetas MPLS contienen los siguientes. Se&ntilde;ale la INCORRECTA";
 choices[65]= new Array();
 choices[65][0] = "Tipo de tr&aacute;fico (3 bits) usado para se&ntilde;alar la calidad de servicio";
 choices[65][1] = "Tiempo de vida (8 bits)";
 choices[65][2] = "Flag que determina final de la pila de etiquetas (1 bit)";
 choices[65][3] = "Comprobaci&oacute;n de redundancia c&iacute;clica (4 bits)";
 answers[65] = choices[65][3];
 units[65] = "100";
 comments[65] = "Id Pregunta: 7249. Examen TIC B 2009";


//  Id pregunta: 8195 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  La normativa vigente sobre Infraestructuras Comunes de Telecomunicaci&oacute;n (ICTs) establece que:";
 choices[66]= new Array();
 choices[66][0] = "Las dimensiones m&iacute;nimas de una ICT incluyen los elementos necesarios para la captaci&oacute;n y adaptaci&oacute;n de las se&ntilde;ales de radiodifusi&oacute;n sonora y televisi&oacute;n terrenales y por sat&eacute;lite.";
 choices[66][1] = "Su &aacute;mbito de aplicaci&oacute;n son todos los inmuebles de nueva construcci&oacute;n a partir de su entrada en vigor. ";
 choices[66][2] = "Finalizados los trabajos de ejecuci&oacute;n del Proyecto T&eacute;cnico, siempre se deber&aacute; presentar un Bolet&iacute;n de Instalaci&oacute;n. ";
 choices[66][3] = "Finalizados los trabajos de ejecuci&oacute;n del Proyecto T&eacute;cnico, siempre se deber&aacute; presentar un Certificado de Fin de Obra. ";
 answers[66] = choices[66][2];
 units[66] = "99";
 comments[66] = "Id Pregunta: 8195. Examen TIC A1 2010";


//  Id pregunta: 8288 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Un agente SNMP env&iacute;a traps a un sistema administrador de red a trav&eacute;s del puerto: ";
 choices[67]= new Array();
 choices[67][0] = "162.";
 choices[67][1] = "126.";
 choices[67][2] = "161.";
 choices[67][3] = "25.";
 answers[67] = choices[67][0];
 units[67] = "104";
 comments[67] = "Id Pregunta: 8288. Examen TIC A2 2010";


//  Id pregunta: 8292 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes NO se encuentra entre los elementos de un Sistema de Gesti&oacute;n de Red?";
 choices[68]= new Array();
 choices[68][0] = "Gestor DHCP.";
 choices[68][1] = "MIB.";
 choices[68][2] = "Agente-SMAP.";
 choices[68][3] = "NMS.";
 answers[68] = choices[68][0];
 units[68] = "104";
 comments[68] = "Id Pregunta: 8292. Examen TIC A2 2010";


//  Id pregunta: 8382 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Una desventaja de la topolog&iacute;a f&iacute;sica de estrella es que:";
 choices[69]= new Array();
 choices[69][0] = "Requiere m&aacute;s cable que la topolog&iacute;a de bus.";
 choices[69][1] = "Se requieren terminadores.";
 choices[69][2] = "Es dif&iacute;cil conectar nuevos nodos a la red,";
 choices[69][3] = "Toda la red se caer&iacute;a si hubiera una ruptura en el cable principal.";
 answers[69] = choices[69][0];
 units[69] = "102";
 comments[69] = "Id Pregunta: 8382. Examen TIC A2 2010";


//  Id pregunta: 8383 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  El cable UTP (Unshielded Twisted Pair):";
 choices[70]= new Array();
 choices[70][0] = "No es tan susceptible a las interferencias electromagn&eacute;ticas como el cable STP (Shielded Twisted Pair). ";
 choices[70][1] = "Es m&aacute;s barato y f&aacute;cil de manipular que el STP.";
 choices[70][2] = "Tiene una l&aacute;mina externa de aluminio o de cobre trenzado alrededor del conjunto de pares.";
 choices[70][3] = "Tiene una pantalla protectora para cada par de hilos.";
 answers[70] = choices[70][1];
 units[70] = "99";
 comments[70] = "Id Pregunta: 8383. Examen TIC A2 2010";


//  Id pregunta: 8428 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes normas del IEEE se utiliza para el control de acceso a red basada en puertos?";
 choices[71]= new Array();
 choices[71][0] = "802.1x";
 choices[71][1] = "802.3.ay";
 choices[71][2] = "802.11";
 choices[71][3] = "802.3.q";
 answers[71] = choices[71][0];
 units[71] = "101";
 comments[71] = "Id Pregunta: 8428. ";


//  Id pregunta: 8444 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes protocolos utiliza puertos UDP y TCP para la operaci&oacute;n delnivel de transporte?:";
 choices[72]= new Array();
 choices[72][0] = "FTP.";
 choices[72][1] = "TFTP.";
 choices[72][2] = "DNS.";
 choices[72][3] = "Ninguno de los anteriores.";
 answers[72] = choices[72][2];
 units[72] = "100";
 comments[72] = "Id Pregunta: 8444. Analista Ayto. Madrid 2010";


//  Id pregunta: 8657 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  La codificaci&oacute;n Manchester-Diferencial se utiliza en:";
 choices[73]= new Array();
 choices[73][0] = "Firma digital";
 choices[73][1] = "Modulaci&oacute;n de se&ntilde;ales";
 choices[73][2] = "T&eacute;cnicas criptogr&aacute;ficas";
 choices[73][3] = "Seguridad Wi-Fi";
 answers[73] = choices[73][1];
 units[73] = "99, 101";
 comments[73] = "Id Pregunta: 8657. Examen UPM A2 2011";


//  Id pregunta: 8666 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Indicar entre las siguientes normas del IEEE la que trata sobre redes de fibra &oacute;ptica:";
 choices[74]= new Array();
 choices[74][0] = "802.6";
 choices[74][1] = "802.7";
 choices[74][2] = "802.8";
 choices[74][3] = "802.9";
 answers[74] = choices[74][2];
 units[74] = "101";
 comments[74] = "Id Pregunta: 8666. Examen UPM A2 2011";


//  Id pregunta: 8905 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  FTP es un protocolo de la pila TCP/IP:";
 choices[75]= new Array();
 choices[75][0] = "Del nivel de Aplicaci&oacute;n.";
 choices[75][1] = "Del nivel de Transporte.";
 choices[75][2] = "Del nivel de Red.";
 choices[75][3] = "De nivel de Sesi&oacute;n";
 answers[75] = choices[75][0];
 units[75] = "100";
 comments[75] = "Id Pregunta: 8905. Operador Ayto. Madrid 2010";


//  Id pregunta: 9007 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  No ser&aacute; necesario que una ICT incluya inicialmente la red de distribuci&oacute;n para los servicios de:";
 choices[76]= new Array();
 choices[76][0] = "Telecomunicaciones por cable.";
 choices[76][1] = "Radiodifusi&oacute;n.";
 choices[76][2] = "Telefon&iacute;a.";
 choices[76][3] = "Deber&aacute; incluir todas ellas.";
 answers[76] = choices[76][3];
 units[76] = "99";
 comments[76] = "Id Pregunta: 9007. Teleco Ayto. Madrid 2010- Modificaci&oacute;n de la original por MVO al quedar Derogada por RD 346/2011";


//  Id pregunta: 9020 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  La &quot;dispersi&oacute;n modal&quot; en una fibra &oacute;ptica:";
 choices[77]= new Array();
 choices[77][0] = "S&oacute;lo se produce en fibras monomodo.";
 choices[77][1] = "S&oacute;lo se produce en fibras multimodo.";
 choices[77][2] = "Se produce en ambos tipos de fibra.";
 choices[77][3] = "No se produce en la fibra &oacute;ptica";
 answers[77] = choices[77][1];
 units[77] = "99";
 comments[77] = "Id Pregunta: 9020. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9329 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  El cable bs/ utp";
 choices[78]= new Array();
 choices[78][0] = "Es un cable de pantalla global de aluminio y una trenza de cobre recubriendola";
 choices[78][1] = "";
 choices[78][2] = "Presenta apantallamiento";
 choices[78][3] = "No presenta apantallamiento global";
 answers[78] = choices[78][0];
 units[78] = "99";
 comments[78] = "Id Pregunta: 9329. NULL";


//  Id pregunta: 9330 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  El cable de categor&iacute;a 6 seg&uacute;n la norma ANSI";
 choices[79]= new Array();
 choices[79][0] = "Equivale al cable clase E de ISO";
 choices[79][1] = "Es el cable adecuado para transmisiones de 100 mbps";
 choices[79][2] = "Su rango de funcionamiento alcanza los 100 mhz";
 choices[79][3] = "Se trata de una";
 answers[79] = choices[79][0];
 units[79] = "99";
 comments[79] = "Id Pregunta: 9330. NULL";


//  Id pregunta: 9348 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  En RDSI, en el lado del operador:";
 choices[80]= new Array();
 choices[80][0] = "La Terminaci&oacute;n de Central se encarga de manejar el protocolo de enlace de datos.";
 choices[80][1] = "La terminaci&oacute;n de L&iacute;nea se encarga de manejar el protocolo de enlace de datos.";
 choices[80][2] = "La terminaci&oacute;n de central est&aacute; entre la interfaz U y V.";
 choices[80][3] = "La Terminaci&oacute;n de L&iacute;nea est&aacute; entre la interfaz U y T.";
 answers[80] = choices[80][0];
 units[80] = "103";
 comments[80] = "Id Pregunta: 9348. ASTIC 2011 pag 8";


//  Id pregunta: 9367 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Los niveles de servicio de Resilient Packet Ring son:";
 choices[81]= new Array();
 choices[81][0] = "Clase A: Servicio best effort";
 choices[81][1] = "Clase B: Con latencia y jitter predecible.";
 choices[81][2] = "Clase C: Para tr&aacute;fico con requisitos de baja latencia y bajo jitter.";
 choices[81][3] = "Todas las respuestas son correctas.";
 answers[81] = choices[81][1];
 units[81] = "101";
 comments[81] = "Id Pregunta: 9367. ";


//  Id pregunta: 9932 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Indique la opci&oacute;n falsa:";
 choices[82]= new Array();
 choices[82][0] = "En la capa de red, el modelo OSI s&oacute;lo considera comunicaci&oacute;n orientada a conexi&oacute;n.";
 choices[82][1] = "Igualmente, en la capa de transporte se ofrece s&oacute;lo comunicaci&oacute;n orientada a conexi&oacute;n.";
 choices[82][2] = "El modelo TCP/IP en la capa de red s&oacute;lo tiene el modo sin conexi&oacute;n.";
 choices[82][3] = "Todas son verdaderas.";
 answers[82] = choices[82][0];
 units[82] = "100";
 comments[82] = "Id Pregunta: 9932. NULL";


//  Id pregunta: 10030 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Indique la respuesta correcta en relaci&oacute;n al comando SNMP GetBulkRequest:";
 choices[83]= new Array();
 choices[83][0] = "Est&aacute; disponible en todas las versiones de SNMP.";
 choices[83][1] = "Es utilizado por un sistema gestor de red para enviar un mensaje a otro gestor sobre objetos administrados.";
 choices[83][2] = "Es el que permite utilizar autenticaci&oacute;n en SNMP v3.			";
 choices[83][3] = "Es utilizado cuando se requiere una cantidad elevada de datos transmitidos.";
 answers[83] = choices[83][3];
 units[83] = "104";
 comments[83] = "Id Pregunta: 10030. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10040 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En una empresa con 2.000 puestos de usuario final en su red local de comunicaciones existen 3 subredes con estos direccionamientos: red A: 10.X.X.X red B: 192.168.1.X y red C: 195.57.72.X. Teniendo en cuenta que en la ubicaci&oacute;n de los equipos de usuarios y servidores se busca mantener la red operativa y a la vez con la m&aacute;xima seguridad posible, &iquest;en qu&eacute; subred ubicar&iacute;a los servidores web p&uacute;blicos?";
 choices[84]= new Array();
 choices[84][0] = "Red A.";
 choices[84][1] = "Red B.";
 choices[84][2] = "Red C.";
 choices[84][3] = "Indistintamente en la red B o en la red C.";
 answers[84] = choices[84][2];
 units[84] = "100";
 comments[84] = "Id Pregunta: 10040. TIC A2, promoci&oacute;n interna, examen 3013";


//  Id pregunta: 10043 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;En qu&eacute; protocolo de encaminamiento se utiliza el Algoritmo de Dijkstra para el c&aacute;lculo de rutas?";
 choices[85]= new Array();
 choices[85][0] = "OSPF ";
 choices[85][1] = "RIP";
 choices[85][2] = "BGP";
 choices[85][3] = "EGP";
 answers[85] = choices[85][0];
 units[85] = "102";
 comments[85] = "Id Pregunta: 10043. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10055 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  De los 32 bits que tiene una cabecera MPLS, &iquest;cu&aacute;ntos est&aacute;n reservados para el valor de la etiqueta MPLS seg&uacute;n la RFC 3032?";
 choices[86]= new Array();
 choices[86][0] = "32 ";
 choices[86][1] = "24";
 choices[86][2] = "20 ";
 choices[86][3] = "16";
 answers[86] = choices[86][2];
 units[86] = "100";
 comments[86] = "Id Pregunta: 10055. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10119 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En la conmutaci&oacute;n de tramas Cut-through, el switch comienza a retransmitir la trama:";
 choices[87]= new Array();
 choices[87][0] = "En cuanto ha recibido los primeros 6 bytes";
 choices[87][1] = "En cuanto ha recibido los primeros 64 bytes";
 choices[87][2] = "Cuando ha recibido toda la trama";
 choices[87][3] = "Cuando ha recibido toda la trama y ha calculado el CRC";
 answers[87] = choices[87][0];
 units[87] = "102";
 comments[87] = "Id Pregunta: 10119. En cuanto recibe la direcci&oacute;n del siguiente nodo lo reenv&iacute;a.";


//  Id pregunta: 10125 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  La red TESTA tiene el rango de direcciones:";
 choices[88]= new Array();
 choices[88][0] = "10.0.0.0";
 choices[88][1] = "192.0.0.0";
 choices[88][2] = "62.0.0.0";
 choices[88][3] = "62.62.0.0";
 answers[88] = choices[88][3];
 units[88] = "103";
 comments[88] = "Id Pregunta: 10125. ";


//  Id pregunta: 10127 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Cu&aacute;l de las siguientes no es un &aacute;rea de gesti&oacute;n de red seg&uacute;n el modelo de ISO:";
 choices[89]= new Array();
 choices[89][0] = "Fault Mangement";
 choices[89][1] = "Configuration Management";
 choices[89][2] = "Accounting Management";
 choices[89][3] = "Improvement Management";
 answers[89] = choices[89][3];
 units[89] = "104";
 comments[89] = "Id Pregunta: 10127. ";


//  Id pregunta: 10298 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una Protocol Data Unit (PDU) del protocolo SNMP v2/v3:";
 choices[90]= new Array();
 choices[90][0] = "GETREQUEST PDU";
 choices[90][1] = "SETRESPONSE PDU";
 choices[90][2] = "RESPONSE PDU";
 choices[90][3] = "INFORMREQUEST PDU";
 answers[90] = choices[90][1];
 units[90] = "104";
 comments[90] = "Id Pregunta: 10298. TIC A2, libre, examen 2013";


//  Id pregunta: 10316 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cu&aacute;ntos bytes utiliza la trama de Ethernet (IEEE 802.3-2012) para el c&oacute;digo de redundancia c&iacute;clica?";
 choices[91]= new Array();
 choices[91][0] = "4 bytes.";
 choices[91][1] = "6 bytes.";
 choices[91][2] = "12 bytes.";
 choices[91][3] = "Ethernet no utiliza ning&uacute;n c&oacute;digo de redundancia c&iacute;clica.";
 answers[91] = choices[91][0];
 units[91] = "101";
 comments[91] = "Id Pregunta: 10316. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10506 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;Cual de los siguientes no es un tipo de conector RJ?";
 choices[92]= new Array();
 choices[92][0] = "RJ-12";
 choices[92][1] = "RJ-45";
 choices[92][2] = "RJ-25";
 choices[92][3] = "Todos los anteriores son tipos de conectores RJ";
 answers[92] = choices[92][3];
 units[92] = "99";
 comments[92] = "Id Pregunta: 10506. ";


//  Id pregunta: 10542 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de estos est&aacute;ndares relacionados con Ethernet permite enrutamiento multipath?";
 choices[93]= new Array();
 choices[93][0] = "802.1aq (Shortest Path Bridging)";
 choices[93][1] = "802.D (Spanning Tree Protocol)";
 choices[93][2] = "802.1s, incluido en 802.1Q-2005 (Multiple Spanning Tree Protocol)";
 choices[93][3] = "802.1w (Rapid Spanning Tree Protocol)";
 answers[93] = choices[93][0];
 units[93] = "100";
 comments[93] = "Id Pregunta: 10542. Shortest Path Bridging sustituye a los antiguos STP(IEEE 802.1D), RSTP (IEEE 802.1w) y MSTP (IEEE 802.1s) que permit&iacute;an un &uacute;nico camino activo para evitar bucles. SPB permite varios caminos activos lo que posibilita hasta m&aacute;s de 16 millones de VLAN.";


//  Id pregunta: 10894 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  En el protocolo RIP Version 2 (Routing Information Protocol), cuyo algoritmo est&aacute; basado en vector distancia, el l&iacute;mite m&aacute;ximo de saltos a partir del cual se considera una ruta como inalcanzable es:";
 choices[94]= new Array();
 choices[94][0] = "15 saltos.";
 choices[94][1] = "9 saltos.";
 choices[94][2] = "16 saltos.";
 choices[94][3] = "7 saltos.";
 answers[94] = choices[94][0];
 units[94] = "102";
 comments[94] = "Id Pregunta: 10894. Examen GSI 2014";


//  Id pregunta: 10918 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Qu&eacute; caracter&iacute;sticas de seguridad presenta SNMPv3, tal y como se mencionan en la RFC 3418 (MIB for the SNMP Protocol)?";
 choices[95]= new Array();
 choices[95][0] = "Se recomienda que los implementadores usen el modelo de seguridad basado en usuario y el control de acceso basado en vistas.";
 choices[95][1] = "Se obliga a que los implementadores usen el modelo basado en usuario y el control de acceso basado en vistas.";
 choices[95][2] = "En dicha RFC no se menciona ning&uacute;n elemento de seguridad.";
 choices[95][3] = "En temas de seguridad, s&oacute;lo hace menci&oacute;n al uso obligatorio del algoritmo de encriptaci&oacute;n CBC (Cipher Block Chaining) de DES, conocido tambi&eacute;n por DES-56.";
 answers[95] = choices[95][0];
 units[95] = "104";
 comments[95] = "Id Pregunta: 10918. Examen GSI 2014";


//  Id pregunta: 11694 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;cu&aacute;l no es un estado de puerto en el protocolo STP?";
 choices[96]= new Array();
 choices[96][0] = "Listening";
 choices[96][1] = "Learning";
 choices[96][2] = "Forwarding";
 choices[96][3] = "Broadcasting";
 answers[96] = choices[96][3];
 units[96] = "102";
 comments[96] = "Id Pregunta: 11694. NULL";


//  Id pregunta: 11700 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Una WAN X.25 est&aacute;ndar corresponde a una red f&iacute;sica:";
 choices[97]= new Array();
 choices[97][0] = "Punto a punto";
 choices[97][1] = "Broadcast multi-acceso";
 choices[97][2] = "No broadcast multi-acceso";
 choices[97][3] = "Broadcast punto a multipunto";
 answers[97] = choices[97][2];
 units[97] = "104";
 comments[97] = "Id Pregunta: 11700. NULL";


//  Id pregunta: 11703 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;cu&aacute;l no es un mecanismo de transici&oacute;n a ipv6?";
 choices[98]= new Array();
 choices[98][0] = "Tunel 6a4";
 choices[98][1] = "Tunel GRE";
 choices[98][2] = "tunel ISATAP";
 choices[98][3] = "tune PPP";
 answers[98] = choices[98][3];
 units[98] = "100";
 comments[98] = "Id Pregunta: 11703. NULL";


//  Id pregunta: 11712 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de los siguientes protocolos utiliza caracter&iacute;sticas tanto de los protocolos de vector distancia como de los de estado de enlace?";
 choices[99]= new Array();
 choices[99][0] = "OSPF";
 choices[99][1] = "RIP";
 choices[99][2] = "RIPv2";
 choices[99][3] = "EIGRP";
 answers[99] = choices[99][3];
 units[99] = "102";
 comments[99] = "Id Pregunta: 11712. NULL";


