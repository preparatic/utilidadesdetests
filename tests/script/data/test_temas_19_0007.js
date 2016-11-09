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

//  Id pregunta: 804 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  A Claude Shannon se le considera:";
 choices[0]= new Array();
 choices[0][0] = "el padre de la telem&aacute;tica moderna";
 choices[0][1] = "el creador del primer ordenador seg&uacute;n la m&aacute;quina de Von Neumann";
 choices[0][2] = "el pionero de los algoritmos criptogr&aacute;ficos";
 choices[0][3] = "el creador del primer sistema operativo";
 answers[0] = choices[0][0];
 units[0] = "99";
 comments[0] = "Id Pregunta: 804. ";


//  Id pregunta: 2887 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  El sistema EURODAC de TESTA II intercambia informaci&oacute;n entre las Administraciones P&uacute;blicas europeas referentes a:";
 choices[1]= new Array();
 choices[1][0] = "inmigraci&oacute;n";
 choices[1][1] = "accidentes de tr&aacute;fico";
 choices[1][2] = "ofertas de empleo";
 choices[1][3] = "fondos estructurales";
 answers[1] = choices[1][0];
 units[1] = "103";
 comments[1] = "Id Pregunta: 2887. ";


//  Id pregunta: 2893 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  La cooperaci&oacute;n de los Estados miembros para la utilizaci&oacute;n de la tecnolog&iacute;a de la informaci&oacute;n en todas las instituciones de la UE se realiza a trav&eacute;s del programa:";
 choices[2]= new Array();
 choices[2][0] = "TESTA II ";
 choices[2][1] = "IDABC";
 choices[2][2] = "INDALO";
 choices[2][3] = "HITA";
 answers[2] = choices[2][1];
 units[2] = "103";
 comments[2] = "Id Pregunta: 2893. ";


//  Id pregunta: 2922 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l es el est&aacute;ndar de WLAN que permite transmitir a una velocidad efectiva de entre 12 y 24 Mbps y a una velocidad m&aacute;xima de 54 Mbps?";
 choices[3]= new Array();
 choices[3][0] = "IEEE 802.11a";
 choices[3][1] = "IEEE 802.11b";
 choices[3][2] = "IEEE 802.11g";
 choices[3][3] = "IEEE 802.11i";
 answers[3] = choices[3][2];
 units[3] = "101, 107";
 comments[3] = "Id Pregunta: 2922. Similar a examen TIC SS A 2003";


//  Id pregunta: 2935 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l es el est&aacute;ndar Gigabit Ethernet sobre 2 pares trenzados apantallados hasta una distancia de 25 m?";
 choices[4]= new Array();
 choices[4][0] = "1000BaseT";
 choices[4][1] = "1000BaseSX";
 choices[4][2] = "1000BaseLx";
 choices[4][3] = "1000BaseCX";
 answers[4] = choices[4][3];
 units[4] = "99";
 comments[4] = "Id Pregunta: 2935. Similar a examen TIC MAP A 2004";


//  Id pregunta: 3087 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Se dice que una l&iacute;nea es 'full duplex' cuando:";
 choices[5]= new Array();
 choices[5][0] = "Los terminales de datos de ambos extremos de la l&iacute;nea, tiene que usarla de forma alternativa en cada sentido de transmisi&oacute;n";
 choices[5][1] = "Los terminales de datos de ambos extremos de la l&iacute;nea, pueden transmitir simult&aacute;neamente sin restricciones";
 choices[5][2] = "Los terminales de datos de ambos extremos de la l&iacute;nea utilizan una se&ntilde;alizaci&oacute;n especial para cambiar el sentido de transmisi&oacute;n del canal";
 choices[5][3] = "Los terminales de datos de ambos extremos de la l&iacute;nea, son se&ntilde;alizados por la red para poder comenzar su turno de transmisi&oacute;n";
 answers[5] = choices[5][1];
 units[5] = "99";
 comments[5] = "Id Pregunta: 3087. ";


//  Id pregunta: 3112 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;A qu&eacute; nivel del modelo OSI corresponde la funci&oacute;n de detecci&oacute;n de colisiones en los sistemas CSMA/CD?:";
 choices[6]= new Array();
 choices[6][0] = "Nivel 1 F&iacute;sico";
 choices[6][1] = "Nivel 2 Enlace";
 choices[6][2] = "Nivel 3 Red";
 choices[6][3] = "Nivel 4 Transporte";
 answers[6] = choices[6][0];
 units[6] = "100";
 comments[6] = "Id Pregunta: 3112. Es debatible la respuesta, pero el nivel fisico en su adaptaci&oacute;n al medio f&iacute;sico de comunicaci&oacute;n puede estar capacitado para detectar colisiones.Por ejemplo, un hub trabaja en capa f&iacute;sica y detecta colisiones";


//  Id pregunta: 3113 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;A qu&eacute; nivel ISO-OSI operan los bridges (puentes)?:";
 choices[7]= new Array();
 choices[7][0] = "A nivel f&iacute;sico";
 choices[7][1] = "A nivel de red";
 choices[7][2] = "A nivel de enlace";
 choices[7][3] = "A nivel de transporte";
 answers[7] = choices[7][2];
 units[7] = "100";
 comments[7] = "Id Pregunta: 3113. NULL";


//  Id pregunta: 3134 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de estas afirmaciones no es cierta para un red de conmutaci&oacute;n de paquetes en modo circuito virtual?:";
 choices[8]= new Array();
 choices[8][0] = "La red se asegura de que el orden de entrega de los paquetes es correcto";
 choices[8][1] = "S&oacute;lo el paquete de llamada lleva en la cabecera informaci&oacute;n acerca del origen y el destino de la llamada";
 choices[8][2] = "El circuito l&oacute;gico establecido dura lo que dura la llamada";
 choices[8][3] = "Es necesario liberar el circuito virtual permanente para finalizar la llamada";
 answers[8] = choices[8][3];
 units[8] = "101";
 comments[8] = "Id Pregunta: 3134. ";


//  Id pregunta: 3159 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes afirmaciones referidas al modelo de referencia de interconexi&oacute;n de sistemas abiertos de ISO es err&oacute;nea?:";
 choices[9]= new Array();
 choices[9][0] = "El nivel de presentaci&oacute;n da servicios al nivel de aplicaci&oacute;n y solicita revisi&oacute;n a trav&eacute;s de primitivas al nivel de sesi&oacute;n";
 choices[9][1] = "El bloque de transporte est&aacute; formado por los niveles f&iacute;sico, enlace, red y transporte";
 choices[9][2] = "El protocolo de nivel de presentaci&oacute;n regula el di&aacute;logo entre dos entes de nivel 5";
 choices[9][3] = "El nivel de red da servicio al nivel de transporte y solicita servicios del nivel enlace";
 answers[9] = choices[9][2];
 units[9] = "100";
 comments[9] = "Id Pregunta: 3159. Los tres niveles inferiores (f&iacute;sico, de enlace, de red) constituyen el bloque de transmisi&oacute;n. (depenndientes de la red de conmutaci&oacute;n) y los tres superiores est&aacute;n orientados a la aplicaci&oacute;n (funciones de comunicaci&oacute;n)";


//  Id pregunta: 3176 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes no es un &aacute;rea funcional en el &aacute;mbito de la gesti&oacute;n de redes OSI mediante CMIP?:";
 choices[10]= new Array();
 choices[10][0] = "Fallos";
 choices[10][1] = "Seguridad";
 choices[10][2] = "Rendimiento";
 choices[10][3] = "Control remoto";
 answers[10] = choices[10][3];
 units[10] = "104";
 comments[10] = "Id Pregunta: 3176. ";


//  Id pregunta: 3206 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El cable de par trenzado no apantallado, categor&iacute;a 5, de 2 pares:";
 choices[11]= new Array();
 choices[11][0] = "Soporta hasta 10 Mbps";
 choices[11][1] = "Soporta hasta 20 Mbps";
 choices[11][2] = "Soporta hasta 100 Mbps";
 choices[11][3] = "Soporta hasta 5 Mbps";
 answers[11] = choices[11][2];
 units[11] = "99";
 comments[11] = "Id Pregunta: 3206. NULL";


//  Id pregunta: 3218 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El est&aacute;ndar IEEE que suministra una descripci&oacute;n de los procedimientos del protocolo a nivel de enlace en una red de &aacute;rea local para la transferencia de datos y su control entre cualquier pareja de puntos de acceso al servicio es:";
 choices[12]= new Array();
 choices[12][0] = "802.1";
 choices[12][1] = "802.2";
 choices[12][2] = "802.10";
 choices[12][3] = "802.12";
 answers[12] = choices[12][1];
 units[12] = "100";
 comments[12] = "Id Pregunta: 3218. NULL";


//  Id pregunta: 3220 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes dispositivos es el que trabaja como m&aacute;ximo a nivel 3 - Red - del sistema OSI?:";
 choices[13]= new Array();
 choices[13][0] = "Repetidores";
 choices[13][1] = "Puentes (Bridges)";
 choices[13][2] = "Enrutadores (routers)";
 choices[13][3] = "Pasarelas (Gateways)";
 answers[13] = choices[13][2];
 units[13] = "100";
 comments[13] = "Id Pregunta: 3220. NULL";


//  Id pregunta: 3238 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l es el puerto habitual usado por una conexi&oacute;n Telnet?:";
 choices[14]= new Array();
 choices[14][0] = "15";
 choices[14][1] = "21";
 choices[14][2] = "23";
 choices[14][3] = "80";
 answers[14] = choices[14][2];
 units[14] = "100, 112";
 comments[14] = "Id Pregunta: 3238. ";


//  Id pregunta: 3250 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Cu&aacute;les son las t&eacute;cnicas de compartici&oacute;n utilizadas para compartir el recurso com&uacute;n (medio de transmisi&oacute;n o nodo central) en las LAN?:";
 choices[15]= new Array();
 choices[15][0] = "Acceso m&uacute;ltiple mediante detecci&oacute;n de portadora con detecci&oacute;n de colisiones (CSMA/CD)";
 choices[15][1] = "Paso de testigo";
 choices[15][2] = "Acceso m&uacute;ltiple mediante detecci&oacute;n de portadora con detecci&oacute;n de colisiones (CSMA/CD), o paso de testigo,  seg&uacute;n el tipo de red";
 choices[15][3] = "Selecci&oacute;n, contienda y reserva";
 answers[15] = choices[15][3];
 units[15] = "100";
 comments[15] = "Id Pregunta: 3250. NULL";


//  Id pregunta: 3262 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;De que trata el est&aacute;ndar IEEE 802.1.q?:";
 choices[16]= new Array();
 choices[16][0] = "De las VLAN (Virtual Local Area Network)";
 choices[16][1] = "De la capa f&iacute;sica de la red Ethernet";
 choices[16][2] = "No existe dicho est&aacute;ndar";
 choices[16][3] = "Del canal D de la RDSI";
 answers[16] = choices[16][0];
 units[16] = "102";
 comments[16] = "Id Pregunta: 3262. ";


//  Id pregunta: 3298 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Qu&eacute; nivel del modelo OSI se encarga del enrutamiento de la informaci&oacute;n?:";
 choices[17]= new Array();
 choices[17][0] = "El nivel de red";
 choices[17][1] = "El nivel de enlace";
 choices[17][2] = "El nivel de transporte";
 choices[17][3] = "Se realiza conjuntamente entre el nivel de red y el nivel de transporte, a trav&eacute;s del interfaz entre estos niveles adyacentes";
 answers[17] = choices[17][0];
 units[17] = "100";
 comments[17] = "Id Pregunta: 3298. NULL";


//  Id pregunta: 3348 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Cuando el comando &lsquo;ping 127.0.0.1&rsquo; produce un eco correcto:";
 choices[18]= new Array();
 choices[18][0] = "Significa que la tarjeta de red del ordenador donde se ejecuta funciona correctamente";
 choices[18][1] = "Significa que la pila de protocolos TCP/IP del ordenador donde se ejecuta funciona correctamente, aunque la tarjeta de red del mismo ordenador falle";
 choices[18][2] = "El mensaje de eco incluye el n&uacute;mero de saltos entre dos ordenadores en la red IP";
 choices[18][3] = "Nada de lo anterior es correcto";
 answers[18] = choices[18][1];
 units[18] = "100";
 comments[18] = "Id Pregunta: 3348. NULL";


//  Id pregunta: 3373 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Dentro del modelo de referencia OSI para la interconexi&oacute;n de sistemas abiertos se denominan primitivas a:";
 choices[19]= new Array();
 choices[19][0] = "Los servicios que al nivel inferior proporciona al nivel superior";
 choices[19][1] = "La interacci&oacute;n entre niveles adyacentes";
 choices[19][2] = "Los puntos de acceso al servicio";
 choices[19][3] = "Los multiples identificadores de conexi&oacute;n";
 answers[19] = choices[19][0];
 units[19] = "100";
 comments[19] = "Id Pregunta: 3373. NULL";


//  Id pregunta: 3389 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  El nivel 6 del modelo OSI es:";
 choices[20]= new Array();
 choices[20][0] = "Transporte";
 choices[20][1] = "Presentaci&oacute;n";
 choices[20][2] = "Sesi&oacute;n";
 choices[20][3] = "Aplicaci&oacute;n";
 answers[20] = choices[20][1];
 units[20] = "100";
 comments[20] = "Id Pregunta: 3389. NULL";


//  Id pregunta: 3415 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  H.320 es el est&aacute;ndar para:";
 choices[21]= new Array();
 choices[21][0] = "transmisi&oacute;n de paquetes multiplexados en redes digitales";
 choices[21][1] = "m&oacute;dems de banda ancha con correcci&oacute;n de errores";
 choices[21][2] = "videoconferencia multipunto sobre RDSI";
 choices[21][3] = "videconferencia multipunto sobre internet";
 answers[21] = choices[21][2];
 units[21] = "103,117";
 comments[21] = "Id Pregunta: 3415. ";


//  Id pregunta: 3416 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  HDLC es un protocolo:";
 choices[22]= new Array();
 choices[22][0] = "De enlace, orientado a car&aacute;cter";
 choices[22][1] = "De enlace orientado a bit";
 choices[22][2] = "F&iacute;sico, en serie";
 choices[22][3] = "F&iacute;sico, en paralelo";
 answers[22] = choices[22][1];
 units[22] = "100";
 comments[22] = "Id Pregunta: 3416. NULL";


//  Id pregunta: 3418 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  ICMP es:";
 choices[23]= new Array();
 choices[23][0] = "un protocolo de intercambio de correos electr&oacute;nicos";
 choices[23][1] = "un protocolo de gesti&oacute;n de internet";
 choices[23][2] = "un protocolo de mensajes para el control de internet";
 choices[23][3] = "ninguno de los anteriores";
 answers[23] = choices[23][2];
 units[23] = "100";
 comments[23] = "Id Pregunta: 3418. NULL";


//  Id pregunta: 3428 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Indicar entre las siguientes normas del IEEE la que trata sobre redes Integradas de voz y datos:";
 choices[24]= new Array();
 choices[24][0] = "802.6";
 choices[24][1] = "802.7";
 choices[24][2] = "802.8";
 choices[24][3] = "802.9";
 answers[24] = choices[24][3];
 units[24] = "101";
 comments[24] = "Id Pregunta: 3428. ";


//  Id pregunta: 3433 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Indique cu&aacute;l de las opciones siguientes es verdadera respecto al acceso al medio en redes LAN:";
 choices[25]= new Array();
 choices[25][0] = "Si la estaci&oacute;n que utiliza el medio, cuando finaliza su uso lo cede a la siguiente que lo necesita, se denomina Token Passing";
 choices[25][1] = "Las redes que siguen un protocolo de acceso al medio consistente en que la estaci&oacute;n que lo requiere, observa hasta que no existe actividad en el mismo, en ese momento accede y observa que no colisiona con ninguna otra estaci&oacute;n, utilizan CSMA";
 choices[25][2] = "En las redes con protocolo Token Passing se puede determinar el tiempo m&aacute;ximo en que una estaci&oacute;n acceder al medio. En las redes con CSMA solo se puede estimar este tiempo";
 choices[25][3] = "Todas las respuestas anteriores son correctas";
 answers[25] = choices[25][3];
 units[25] = "101";
 comments[25] = "Id Pregunta: 3433. ";


//  Id pregunta: 3455 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  El protocolo OSPF:";
 choices[26]= new Array();
 choices[26][0] = "Es un protocolo de encaminamiento como el RIP";
 choices[26][1] = "Significa 'Open Systems Protocol Family'";
 choices[26][2] = "No usa el algoritmo tipo de estados de enlaces (link-state) para encaminar los datagramas";
 choices[26][3] = "Se describe en la RFC942 (Request for Comments)";
 answers[26] = choices[26][0];
 units[26] = "102";
 comments[26] = "Id Pregunta: 3455. ";


//  Id pregunta: 3459 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  El protocolo SNMP:";
 choices[27]= new Array();
 choices[27][0] = "Es un protocolo de gesti&oacute;n de redes";
 choices[27][1] = "Es un protocolo de mensajer&iacute;a electr&oacute;nica";
 choices[27][2] = "Es un protocolo de gesti&oacute;n de protocolos";
 choices[27][3] = "Es un protocolo de mensajer&iacute;a simple";
 answers[27] = choices[27][0];
 units[27] = "104";
 comments[27] = "Id Pregunta: 3459. ";


//  Id pregunta: 3497 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  En el modelo de referencia OSI para la interconexi&oacute;n de sistemas abiertos se definen una serie de niveles. &iquest;Cu&aacute;l o cuales de los siguientes deber&iacute;a soportar la red de conmutaci&oacute;n en un caso ideal?:";
 choices[28]= new Array();
 choices[28][0] = "Los tres primeros: f&iacute;sico, enlace y red";
 choices[28][1] = "El nivel 3: red";
 choices[28][2] = "Los niveles 3 y 4: transporte y red";
 choices[28][3] = "Los dos primeros niveles: f&iacute;sico y enlace";
 answers[28] = choices[28][0];
 units[28] = "100";
 comments[28] = "Id Pregunta: 3497. NULL";


//  Id pregunta: 3537 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  En las transmisi&oacute;n de datos en tramas se suele incluir un campo denominado CRC. Indique cu&aacute;l de las opciones le parece correcta:";
 choices[29]= new Array();
 choices[29][0] = "Es un campo que indica el final de la trama y prepara al equipo receptor para la siguiente";
 choices[29][1] = "Es un campo de control del n&uacute;mero de bits incluidos en la trama, para conocer el final de la misma";
 choices[29][2] = "Es un campo de control de integridad de la trama, sirve para comprobar la ocurrencia de ciertos errores en la transmisi&oacute;n";
 choices[29][3] = "Es un campo de control de integridad de la trama, sirve para detectar cualquier error en la transmisi&oacute;n";
 answers[29] = choices[29][2];
 units[29] = "101";
 comments[29] = "Id Pregunta: 3537. ";


//  Id pregunta: 3554 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  En sistemas de informaci&oacute;n y comunicaciones, RED es el acr&oacute;nimo de:";
 choices[30]= new Array();
 choices[30][0] = "Random Early Detection";
 choices[30][1] = "Rapid Early Detection";
 choices[30][2] = "Requested Evaluation datagram";
 choices[30][3] = "Response Evaluation and Detection";
 answers[30] = choices[30][0];
 units[30] = "102";
 comments[30] = "Id Pregunta: 3554. ";


//  Id pregunta: 3576 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  En una red local con un &uacute;nico servidor de ficheros, existen problemas de tiempo de respuesta pues un excesivo n&uacute;mero de nodos intenta acceso al mismo. Indique cual de las opciones siguientes resuelve t&eacute;cnica y econ&oacute;micamente el problema:";
 choices[31]= new Array();
 choices[31][0] = "La utilizaci&oacute;n de un gateway entre dos segmentos de la red";
 choices[31][1] = "La utilizaci&oacute;n de un router entre los dos segmentos de la red";
 choices[31][2] = "La utilizaci&oacute;n de un bridge entre los dos segmentos de la red";
 choices[31][3] = "Ning&uacute;n dispositivo de comunicaciones resolver&iacute;a el problema";
 answers[31] = choices[31][3];
 units[31] = "102";
 comments[31] = "Id Pregunta: 3576. ";


//  Id pregunta: 3581 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Entre las limitaciones inherentes a las redes locales, que hacen necesaria la segmentaci&oacute;n y la interconexi&oacute;n, no se encuentra:";
 choices[32]= new Array();
 choices[32][0] = "limitaciones en el n&uacute;mero de hosts";
 choices[32][1] = "limitaciones de tecnolog&iacute;as disponibles y fabricantes";
 choices[32][2] = "limitaciones en el n&uacute;mero y tipo de nodos, as&iacute; como en su acceso";
 choices[32][3] = "limitaciones de la distancia a cubrir";
 answers[32] = choices[32][1];
 units[32] = "102";
 comments[32] = "Id Pregunta: 3581. ";


//  Id pregunta: 3589 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  La capa de acceso al medio en una red de &aacute;rea local se denomina:";
 choices[33]= new Array();
 choices[33][0] = "MAC";
 choices[33][1] = "ADSL";
 choices[33][2] = "BUS";
 choices[33][3] = "LLC";
 answers[33] = choices[33][0];
 units[33] = "101";
 comments[33] = "Id Pregunta: 3589. ";


//  Id pregunta: 3592 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  La conocida norma de m&oacute;dems V.90 lleva por t&iacute;tulo:";
 choices[34]= new Array();
 choices[34][0] = "&quot;Par constituido por un m&oacute;dem digital y un m&oacute;dem anal&oacute;gico para uso en la red telef&oacute;nica p&uacute;blica conmutada (RTPC) a velocidades de se&ntilde;alizaci&oacute;n de datos de hasta 56000 bps en sentido descendente y hasta 33000 bps en sentido ascendente&quot;";
 choices[34][1] = "&quot;M&oacute;dem digital que funciona a velocidades de se&ntilde;alizaci&oacute;n de datos de hasta 64000 bps para uso en una conexi&oacute;n con conmutaci&oacute;n de circuitos a 4 hilos y en circuitos digitales arrendados punto a punto a 4 hilos&quot;";
 choices[34][2] = "&quot;M&oacute;dem para voz y datos simult&aacute;neos que funciona a una velocidad de se&ntilde;alizaci&oacute;n de voz m&aacute;s datos de 4800 bps, con conmutaci&oacute;n autom&aacute;tica opcional a velocidades de se&ntilde;alizaci&oacute;n de hasta 14400 bps para datos solamente, destinado al uso de la red telef&oacute;nica";
 choices[34][3] = "&quot;Familia de m&oacute;dems d&uacute;plex a 2 hilos que funcionan a velocidades binarias de hasta 9600 bps para uso en la red telef&oacute;nica general conmutada y en circuitos arrendados de tipo telef&oacute;nico&quot;";
 answers[34] = choices[34][0];
 units[34] = "103";
 comments[34] = "Id Pregunta: 3592. modems";


//  Id pregunta: 3594 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  La diferencia entre protocolo e interfaz seg&uacute;n OSI es:";
 choices[35]= new Array();
 choices[35][0] = "entre otras, un protocolo se refiere a entidades de distintos niveles y un interfaz a entidades del mismo nivel";
 choices[35][1] = "ambos conceptos se refieren a entidades de distintos niveles";
 choices[35][2] = "ambos conceptos se refieren a entidades del mismo nivel";
 choices[35][3] = "entre otras, un protocolo se refiere a entidades del mismo nivel y un interfaz a entidades de distintos niveles";
 answers[35] = choices[35][3];
 units[35] = "100";
 comments[35] = "Id Pregunta: 3594. NULL";


//  Id pregunta: 3606 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  La f&oacute;rmula de Shannon para la capacidad de un canal es (B es el ancho de banda, S la potencia de la se&ntilde;al y N la potencia del ruido):";
 choices[36]= new Array();
 choices[36][0] = "R[bps] = B[Hz] &middot; log2(1 + S/N)";
 choices[36][1] = "R[bps] = B[Hz] &middot; ln(1 + S/N)";
 choices[36][2] = "R[bps] = B[Hz] &middot; log10(1 + S/N)";
 choices[36][3] = "R[bps] = B[kHz] &middot; log2(S/N)";
 answers[36] = choices[36][0];
 units[36] = "99";
 comments[36] = "Id Pregunta: 3606. *: teorema de shannon";


//  Id pregunta: 3611 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  La interconexi&oacute;n de intranets puede llevarse a cabo mediante:";
 choices[37]= new Array();
 choices[37][0] = "repetidores y concentradores a nivel f&iacute;sico, encaminadores a nivel de enlace, puentes a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 choices[37][1] = "repetidores, concentradores y encaminadores a nivel f&iacute;sico, puentes a nivel de enlace y pasarelas a nivel de aplicaci&oacute;n";
 choices[37][2] = "repetidores y concentradores a nivel f&iacute;sico, puentes a nivel de enlace, encaminadores a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 choices[37][3] = "repetidores a nivel f&iacute;sico, concentradores y puentes a nivel de enlace, encaminadores a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 answers[37] = choices[37][2];
 units[37] = "100,103,113";
 comments[37] = "Id Pregunta: 3611. NULL";


//  Id pregunta: 3612 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  La interconexi&oacute;n de redes privadas a trav&eacute;s de la red 'p&uacute;blica' Internet manteniendo sus propias direcciones IP se consigue por medio de:";
 choices[38]= new Array();
 choices[38][0] = "Firewalls";
 choices[38][1] = "Proxies a nivel de aplicaci&oacute;n";
 choices[38][2] = "Tunneling o encapsulado";
 choices[38][3] = "Cifrado de las cabeceras IP";
 answers[38] = choices[38][2];
 units[38] = "103,113";
 comments[38] = "Id Pregunta: 3612. ";


//  Id pregunta: 3623 AÃ±o de creación de pregunta: 2002-01-01
 questions[39]= "40)  La normas de la serie 802 del IEEE est&aacute;n establecidas por diversos grupos de trabajo a los que que est&aacute;n asignadas diferentes tareas. &iquest;A cu&aacute;l corresponde la 802.6?:";
 choices[39]= new Array();
 choices[39][0] = "Control l&oacute;gico del enlace";
 choices[39][1] = "Normativa de conectividad entre equipos a nivel f&iacute;sico";
 choices[39][2] = "M&eacute;todo de paso de testigo en bus";
 choices[39][3] = "Redes de &aacute;rea metropolitana";
 answers[39] = choices[39][3];
 units[39] = "101";
 comments[39] = "Id Pregunta: 3623. ";


//  Id pregunta: 3662 AÃ±o de creación de pregunta: 2002-01-01
 questions[40]= "41)  Un protocolo, seg&uacute;n el modelo OSI:";
 choices[40]= new Array();
 choices[40][0] = "especifica reglas sint&aacute;cticas, sem&aacute;nticas y gram&aacute;ticas que determinan la comunicaci&oacute;n entre entidades del mismo nivel";
 choices[40][1] = "especifica reglas sint&aacute;cticas, sem&aacute;nticas y gram&aacute;ticas que determinan la comunicaci&oacute;n entre entidades de distinto nivel";
 choices[40][2] = "no especifica reglas de comportamiento, s&oacute;lo de sintaxis entre los mensajes intercambiados";
 choices[40][3] = "es especificado en un lenguaje de prop&oacute;sito general, por lo general dependiente de la m&aacute;quina en la que se ejecute dicho protocolo";
 answers[40] = choices[40][0];
 units[40] = "100";
 comments[40] = "Id Pregunta: 3662. NULL";


//  Id pregunta: 3676 AÃ±o de creación de pregunta: 2002-01-01
 questions[41]= "42)  Una red de conmutaci&oacute;n de paquetes en la que cada paquete viaja por una ruta diferente se dice que opera en modo:";
 choices[41]= new Array();
 choices[41][0] = "Circuito virtual permanente";
 choices[41][1] = "Circuito virtual conmutado";
 choices[41][2] = "Datagrama";
 choices[41][3] = "Multiplexaci&oacute;n estad&iacute;stica";
 answers[41] = choices[41][2];
 units[41] = "101";
 comments[41] = "Id Pregunta: 3676. ";


//  Id pregunta: 3736 AÃ±o de creación de pregunta: 2002-01-01
 questions[42]= "43)  Los protocolos de control de enlace se orientan:";
 choices[42]= new Array();
 choices[42][0] = "A objeto";
 choices[42][1] = "A baudio";
 choices[42][2] = "A car&aacute;cter o a bit";
 choices[42][3] = "A una trama de tama&ntilde;o variable, hasta 256 bits";
 answers[42] = choices[42][2];
 units[42] = "100";
 comments[42] = "Id Pregunta: 3736. NULL";


//  Id pregunta: 3759 AÃ±o de creación de pregunta: 2002-01-01
 questions[43]= "44)  Para especificar un protocolo en el modelo OSI son necesarios:";
 choices[43]= new Array();
 choices[43][0] = "S&oacute;lo la descripci&oacute;n de las PDUs que lo forman, junto con su prop&oacute;sito y los campos que las forman";
 choices[43][1] = "La a) y la descripci&oacute;n de los servicios usados, procedimientos seguidos y descripci&oacute;n formal (usando por ejemplo ASN.1)";
 choices[43][2] = "La b) y adem&aacute;s la descripci&oacute;n del comportamiento interno-externo";
 choices[43][3] = "Un protocolo no se puede especificar libremente, ya que hay impuestas condiciones referentes al sistema operativo y/o los lenguajes de programaci&oacute;n que usen las m&aacute;quinas en las que se implante";
 answers[43] = choices[43][1];
 units[43] = "100";
 comments[43] = "Id Pregunta: 3759. NULL";


//  Id pregunta: 3764 AÃ±o de creación de pregunta: 2002-01-01
 questions[44]= "45)  Para la interconexi&oacute;n de redes locales se han especificado diversos equipos. Indique cu&aacute;l de las opciones es correcta:";
 choices[44]= new Array();
 choices[44][0] = "Un router necesariamente une segmentos de red con distinto protocolo de enlace, o nivel dos";
 choices[44][1] = "Un router une dos segmentos de red utilizando exclusivamente la informaci&oacute;n de nivel tres para el filtrado de las direcciones";
 choices[44][2] = "Un router necesariamente une segmentos de red con el mismo protocolo de enlace, o de nivel dos";
 choices[44][3] = "Todas las respuestas anteriores son correctas";
 answers[44] = choices[44][1];
 units[44] = "102";
 comments[44] = "Id Pregunta: 3764. ";


//  Id pregunta: 3810 AÃ±o de creación de pregunta: 2002-01-01
 questions[45]= "46)  Seg&uacute;n la recomendaci&oacute;n EIA/TIA 568:";
 choices[45]= new Array();
 choices[45][0] = "La distancia m&aacute;xima para el cableado horizontal var&iacute;a entre 70 m y 90 m";
 choices[45][1] = "La distancia entre equipo y roseta puede llegar a los 9 m";
 choices[45][2] = "Se consideran los cables coaxiales de 76 Ohm";
 choices[45][3] = "Ninguna de las anteriores";
 answers[45] = choices[45][0];
 units[45] = "99";
 comments[45] = "Id Pregunta: 3810. ";


//  Id pregunta: 3813 AÃ±o de creación de pregunta: 2002-01-01
 questions[46]= "47)  Se&ntilde;alar qu&eacute; afirmaci&oacute;n no es correcta. En una red de conmutaci&oacute;n de paquetes para evitar la congesti&oacute;n se puede:";
 choices[46]= new Array();
 choices[46][0] = "Reservar espacio suficiente de almacenamiento en los nodos";
 choices[46][1] = "Descartar paquetes";
 choices[46][2] = "En una red de conmutaci&oacute;n de paquetes no hay congesti&oacute;n";
 choices[46][3] = "Enviar paquetes de contenci&oacute;n";
 answers[46] = choices[46][2];
 units[46] = "101";
 comments[46] = "Id Pregunta: 3813. ";


//  Id pregunta: 3831 AÃ±o de creación de pregunta: 2002-01-01
 questions[47]= "48)  Si un encaminador (router) tiene cuatro interfaces f&iacute;sicas de red y esta encaminando los protocolos AppleTalk, OSI, y TCP/IP, &iquest;cu&aacute;ntas direcciones a nivel de red tendr&aacute; normalmente?:";
 choices[47]= new Array();
 choices[47][0] = "3";
 choices[47][1] = "4";
 choices[47][2] = "12";
 choices[47][3] = "1";
 answers[47] = choices[47][2];
 units[47] = "100";
 comments[47] = "Id Pregunta: 3831. NULL";


//  Id pregunta: 3832 AÃ±o de creación de pregunta: 2002-01-01
 questions[48]= "49)  Siguiendo la terminolog&iacute;a OSI, se&ntilde;alar qu&eacute; respuesta no se refiere a una de las categor&iacute;as en las que se puede dividir los procesos de aplicaci&oacute;n:";
 choices[48]= new Array();
 choices[48][0] = "Procesos de gesti&oacute;n del sistema";
 choices[48][1] = "Procesos de gesti&oacute;n de las aplicaciones";
 choices[48][2] = "Procesos de gesti&oacute;n del control de flujo";
 choices[48][3] = "Procesos de usuario";
 answers[48] = choices[48][2];
 units[48] = "100";
 comments[48] = "Id Pregunta: 3832. NULL";


//  Id pregunta: 3834 AÃ±o de creación de pregunta: 2002-01-01
 questions[49]= "50)  SIP es:";
 choices[49]= new Array();
 choices[49][0] = "una versi&oacute;n segura del protocolo IP";
 choices[49][1] = "un conjunto de protocolos para gesti&oacute;n de sesiones";
 choices[49][2] = "protocolo para instalaciones de software";
 choices[49][3] = "nada de lo anterior";
 answers[49] = choices[49][1];
 units[49] = "104";
 comments[49] = "Id Pregunta: 3834. ";


//  Id pregunta: 3844 AÃ±o de creación de pregunta: 2002-01-01
 questions[50]= "51)  TCP utiliza un algoritmo para control de flujo denominado Slow Start . Dicho algoritmo consiste en:  ";
 choices[50]= new Array();
 choices[50][0] = "Incrementar el tama&ntilde;o de la ventana de congesti&oacute;n de forma lineal";
 choices[50][1] = "Incrementar el tama&ntilde;o de la ventana de congesti&oacute;n de forma exponencial";
 choices[50][2] = "Reducir el tama&ntilde;o de la ventana de congesti&oacute;n de forma lineal";
 choices[50][3] = "Reducir el tama&ntilde;o de la ventana de congesti&oacute;n de forma exponencial";
 answers[50] = choices[50][1];
 units[50] = "101";
 comments[50] = "Id Pregunta: 3844. ";


//  Id pregunta: 3899 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Indicar la afirmaci&oacute;n falsa sobre SDH:";
 choices[51]= new Array();
 choices[51][0] = "Permite compatibilidad hacia adelante y hacia atr&aacute;s";
 choices[51][1] = "No permite la incorporaci&oacute;n de otras tecnolog&iacute;as de redes &oacute;pticas y de banda ancha";
 choices[51][2] = "SDH es el est&aacute;ndar europeo, mientras que SONET es el norteamericano";
 choices[51][3] = "Se dise&ntilde;&oacute; para sobrellevar las deficiencias de compatibilidad de los sistemas de transmisi&oacute;n PDH";
 answers[51] = choices[51][1];
 units[51] = "99";
 comments[51] = "Id Pregunta: 3899. ";


//  Id pregunta: 3946 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  El protocolo Internet versi&oacute;n 6 (IPv6) define un espacio de direcciones de:";
 choices[52]= new Array();
 choices[52][0] = "32 bits";
 choices[52][1] = "64 bits";
 choices[52][2] = "128 bits";
 choices[52][3] = "Ninguno de los anteriores";
 answers[52] = choices[52][2];
 units[52] = "100";
 comments[52] = "Id Pregunta: 3946. ";


//  Id pregunta: 3967 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Se&ntilde;ale que es falso respecto a IPv6";
 choices[53]= new Array();
 choices[53][0] = "La cabecera de IPv6 es menor que la de IPv4";
 choices[53][1] = "IPv6 soporte para autenticaci&oacute;n";
 choices[53][2] = "IPv6 soporte para encriptaci&oacute;n";
 choices[53][3] = "IPv6 direcciones de 16 bytes";
 answers[53] = choices[53][0];
 units[53] = "100";
 comments[53] = "Id Pregunta: 3967. ";


//  Id pregunta: 3981 AÃ±o de creación de pregunta: 2006-01-01
 questions[54]= "55)  Se&ntilde;ale la respuesta correcta:";
 choices[54]= new Array();
 choices[54][0] = "Cuando se usa selecci&oacute;n, existe una estaci&oacute;n de control y una o varias estaciones tributarios.";
 choices[54][1] = "En la contienda todas las estaciones pueden acceder en cualquier momento al circuito.";
 choices[54][2] = "Se denomina ventana al n&uacute;mero m&aacute;ximo de tramas que en un determinado momento pueden estar pendientes de confirmaci&oacute;n.";
 choices[54][3] = "Todas son verdaderas.";
 answers[54] = choices[54][3];
 units[54] = "101";
 comments[54] = "Id Pregunta: 3981. ";


//  Id pregunta: 4186 AÃ±o de creación de pregunta: 2006-01-01
 questions[55]= "56)  Respecto al protocolo IP es falso que";
 choices[55]= new Array();
 choices[55][0] = "En IPv6 las direcciones anycast tienen un rango de numeraci&oacute;n diferenciado";
 choices[55][1] = "IPv4 permite priorizaci&oacute;n de tr&aacute;fico";
 choices[55][2] = "IPv6 permite la asignaci&oacute;n de direcciones multicast permanentes";
 choices[55][3] = "Se puede transmitir IPv6 sobre redes IPv4";
 answers[55] = choices[55][0];
 units[55] = "100";
 comments[55] = "Id Pregunta: 4186. ";


//  Id pregunta: 4203 AÃ±o de creación de pregunta: 2006-01-01
 questions[56]= "57)  El MTBF asociado a la disponibilidad de un sistema formado por dos equipos id&eacute;nticos con reparto balanceado de la carga de trabajo";
 choices[56]= new Array();
 choices[56][0] = "Es mayor que el de cualquiera de ellos individualmente";
 choices[56][1] = "Es menor que el de cualquiera de ellos individualmente";
 choices[56][2] = "Es igual al de cualquiera de ellos individualmente";
 choices[56][3] = "No puede ser conocido a priori";
 answers[56] = choices[56][0];
 units[56] = "104";
 comments[56] = "Id Pregunta: 4203. ";


//  Id pregunta: 4207 AÃ±o de creación de pregunta: 2006-01-01
 questions[57]= "58)  La fibra &oacute;ptica monomodo m&aacute;s popular es";
 choices[57]= new Array();
 choices[57][0] = "9/125 um";
 choices[57][1] = "62.5/125 um";
 choices[57][2] = "50/125 um";
 choices[57][3] = "100/140 um";
 answers[57] = choices[57][0];
 units[57] = "99";
 comments[57] = "Id Pregunta: 4207. ";


//  Id pregunta: 4339 AÃ±o de creación de pregunta: 2007-01-01
 questions[58]= "59)  Una importante desventaja de emplear una topolog&iacute;a de conmutadores (switchs) jer&aacute;rquica en una LAN es";
 choices[58]= new Array();
 choices[58][0] = "El coste, pues se deben utilizar muchos conmutadores.";
 choices[58][1] = "La dependencia de un solo proveedor, ya que todos han de ser compatibles.";
 choices[58][2] = "Que una ca&iacute;da de un conmutador dejar&aacute; a dos subredes incomunicadas.";
 choices[58][3] = "Su obsolescencia, ya que es una topolog&iacute;a de los a&ntilde;os 80.";
 answers[58] = choices[58][2];
 units[58] = "100";
 comments[58] = "Id Pregunta: 4339. ";


//  Id pregunta: 4645 AÃ±o de creación de pregunta: 2007-01-01
 questions[59]= "60)  Para establecer una conexi&oacute;n TCP, el emisor env&iacute;a un segmento TCP en el que:";
 choices[59]= new Array();
 choices[59][0] = "el bit CON a 1 y el bit FIN a 0";
 choices[59][1] = "el bit CON a 1 y el bit ACK a 0.";
 choices[59][2] = "el bit SYN a 1 y el bit FIN a 0";
 choices[59][3] = "el bit SYN a 1 y el bit ACK a 0.";
 answers[59] = choices[59][2];
 units[59] = "100";
 comments[59] = "Id Pregunta: 4645. ";


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


//  Id pregunta: 4883 AÃ±o de creación de pregunta: 2007-01-01
 questions[61]= "62)  Dentro de un sistema de cableado estructurado el denominado &quot;subsistema horizontal&quot; es aquel que:";
 choices[61]= new Array();
 choices[61][0] = "Interconecta las plantas del edificio y los cuadros de distribuci&oacute;n de cada planta";
 choices[61][1] = "Interconecta las rosetas con el cuadro de distribuci&oacute;n de planta";
 choices[61][2] = "Interconecta edificios en el entorno de un campus";
 choices[61][3] = "Interconecta a todo el cableado de un edificio";
 answers[61] = choices[61][1];
 units[61] = "99";
 comments[61] = "Id Pregunta: 4883. NULL";


//  Id pregunta: 5028 AÃ±o de creación de pregunta: 2003-01-01
 questions[62]= "63)  En una red donde se utilizan redes virtuales (802.1q), &iquest;cu&aacute;l es el tama&ntilde;o m&aacute;ximo de las tramas etiquetadas quecirculan por la red?:";
 choices[62]= new Array();
 choices[62][0] = "1522 bytes";
 choices[62][1] = "1500 bytes";
 choices[62][2] = "1496 bytes";
 choices[62][3] = "1518 bytes";
 answers[62] = choices[62][0];
 units[62] = "100, 102";
 comments[62] = "Id Pregunta: 5028. Examen TIC A 2007";


//  Id pregunta: 5275 AÃ±o de creación de pregunta: 2003-01-01
 questions[63]= "64)  Indique que respuesta no es correcta. La red transeuropea sTESTA: ";
 choices[63]= new Array();
 choices[63][0] = "Corresponde con una de las infraestructuras y servicios comunes de IDABC.";
 choices[63][1] = "Conecta a trav&eacute;s de Internet las redes administrativas de los Estados Miembros y las instituciones europeas.";
 choices[63][2] = "Permite el acceso a los servicios paneuropeos de Administraci&oacute;n Electr&oacute;nica mediante el enlace SARA-sTESTA.";
 choices[63][3] = "Ahorra a los Departamentos de la Administraci&oacute;n el coste de enlaces independientes con administraciones de otros estados miembros";
 answers[63] = choices[63][1];
 units[63] = "103";
 comments[63] = "Id Pregunta: 5275. ";


//  Id pregunta: 5514 AÃ±o de creación de pregunta: 2003-01-01
 questions[64]= "65)  Indique c&oacute;mo podr&iacute;a interconectar dos ordenadores personales seg&uacute;n la tecnolog&iacute;a ethernet:";
 choices[64]= new Array();
 choices[64][0] = "Mediante un cable cruzado";
 choices[64][1] = "Mediante un cable sin cruzar o cable plano";
 choices[64][2] = "Mediante un dado de interconexi&oacute;n";
 choices[64][3] = "Mediante cualquiera de las tres opciones indicadas ";
 answers[64] = choices[64][0];
 units[64] = "99";
 comments[64] = "Id Pregunta: 5514. ";


//  Id pregunta: 5564 AÃ±o de creación de pregunta: 2003-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto al Resilient Packet Ring?";
 choices[65]= new Array();
 choices[65][0] = "Es una tecnolog&iacute;a de nivel 2";
 choices[65][1] = "Es el est&aacute;ndar 802.17";
 choices[65][2] = "Est&aacute; basado en una topolog&iacute;a de anillo dual";
 choices[65][3] = "Est&aacute; orientada a servicios s&iacute;ncronos";
 answers[65] = choices[65][3];
 units[65] = "101";
 comments[65] = "Id Pregunta: 5564. ";


//  Id pregunta: 5608 AÃ±o de creación de pregunta: 2003-01-01
 questions[66]= "67)  Ventajas de la versi&oacute;n SNMPv3 sobre SNMPv2";
 choices[66]= new Array();
 choices[66][0] = "SNMPv2 presentaba debilidades en la recuperaci&oacute;n de grandes cantidades de informaci&oacute;n.";
 choices[66][1] = "Introduce mecanismos de autentificaci&oacute;n, privacidad y control de accesos m&aacute;s solidos";
 choices[66][2] = "SNMPv3 introdujo nuevas operaciones: GetBulk, Inform, Report";
 choices[66][3] = "Ninguna de las anteriores";
 answers[66] = choices[66][1];
 units[66] = "104";
 comments[66] = "Id Pregunta: 5608. ";


//  Id pregunta: 5871 AÃ±o de creación de pregunta: 2009-01-01
 questions[67]= "68)  En referencia al direccionamiento IPv6 definido en el RFC 1884, indique cu&aacute;l de los apartados siguientes no se corresponde con un tipo de direcciones en IPv6:";
 choices[67]= new Array();
 choices[67][0] = "Unicast";
 choices[67][1] = "Multicast";
 choices[67][2] = "Anycast";
 choices[67][3] = "Broadcast";
 answers[67] = choices[67][3];
 units[67] = "100";
 comments[67] = "Id Pregunta: 5871. MAP 2008 A1";


//  Id pregunta: 5977 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  El protocolo de encaminamiento m&aacute;s adecuado a utilizar en un punto neutro de interconexi&oacute;n en el que varios proveedores de Internet intercambian tr&aacute;fico es:";
 choices[68]= new Array();
 choices[68][0] = "OSPF.";
 choices[68][1] = "No es adecuado usar encaminamiento din&aacute;mico, se recurre a tablas est&aacute;ticas.";
 choices[68][2] = "RIP.";
 choices[68][3] = "BGP-4.";
 answers[68] = choices[68][3];
 units[68] = "102";
 comments[68] = "Id Pregunta: 5977. TIC A 2009";


//  Id pregunta: 6049 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  Sobre el modelo de gesti&oacute;n TMN (Telecommunication Management Network):";
 choices[69]= new Array();
 choices[69][0] = "Es un modelo de gesti&oacute;n de red orientado a grandes operadores de telecomunicaciones";
 choices[69][1] = "Sus principios est&aacute;n recogidos en la recomendaci&oacute;n M.3010 de la UIT-T";
 choices[69][2] = "Es especialmente apropiado para redes de conmutaci&oacute;n de circuitos";
 choices[69][3] = "Todas las respuestas anteriores son correctas ";
 answers[69] = choices[69][3];
 units[69] = "104";
 comments[69] = "Id Pregunta: 6049. ";


//  Id pregunta: 6050 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  La organizaci&oacute;n que publica los est&aacute;ndares sobre SNMP es:";
 choices[70]= new Array();
 choices[70][0] = "UIT-T";
 choices[70][1] = "IETF";
 choices[70][2] = "ISO/IEC";
 choices[70][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[70] = choices[70][1];
 units[70] = "104";
 comments[70] = "Id Pregunta: 6050. ";


//  Id pregunta: 8174 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  La Recomendaci&oacute;n UIT-T I.411 &quot;Configuraciones de referencia de las interfaces Usuario-Red de la RDSI&quot;, define el punto de referencia T entre:";
 choices[71]= new Array();
 choices[71][0] = "La Terminaci&oacute;n de Red 1 (NT1) y la Terminaci&oacute;n de L&iacute;nea (LT).";
 choices[71][1] = "La Terminaci&oacute;n de Red 2 (NT2) y la Terminaci&oacute;n de Red 1 (NT1).";
 choices[71][2] = "El Equipo Terminal de Tipo 1 (TE1) y el Adaptador de Terminal (TA).";
 choices[71][3] = "El Equipo Terminal de Tipo 2 (TE2) y el Adaptador de Terminal (TA).";
 answers[71] = choices[71][1];
 units[71] = "103";
 comments[71] = "Id Pregunta: 8174. Examen TIC A1 2010";


//  Id pregunta: 8283 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  El formato de direcci&oacute;n EUI-64 es un formato est&aacute;ndar del IEEE, que permite a un nodo autoconfigurar o asignarse autom&aacute;ticamente su propia direcci&oacute;n IPv6 de nodo, a partir de la direcci&oacute;n IEEE 802 MAC de la tarjeta de red del:";
 choices[72]= new Array();
 choices[72][0] = "Router vecino y del prefijo de la direcci&oacute;n de red (/64) a la que est&aacute; conectado dicho nodo.";
 choices[72][1] = "Propio nodo y del prefijo de la direcci&oacute;n de red (/48) del router vecino al que est&aacute; conectado dicho nodo.";
 choices[72][2] = "Router vecino y del prefijo de la direcci&oacute;n de red (/48) a la que est&aacute; conectado dicho nodo.";
 choices[72][3] = "Propio nodo y del prefijo de la direcci&oacute;n de red (/64) a la que est&aacute; conectado dicho nodo.";
 answers[72] = choices[72][3];
 units[72] = "100";
 comments[72] = "Id Pregunta: 8283. Examen TIC A1 2010";


//  Id pregunta: 8466 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Las fibras monomodo:";
 choices[73]= new Array();
 choices[73][0] = "Se emplean normalmente en enlaces de de telecomunicaci&oacute;n de distancias largas";
 choices[73][1] = "Presentan la superficie de separaci&oacute;n entre el n&uacute;cleo y el revestimiento, claramente definida y diferenciada dando lugar a que los rayos luminosos se reflejen hacia el n&uacute;cleo formando diversos &aacute;ngulos";
 choices[73][2] = "Se caracterizan por una velocidad de flujo reducida";
 choices[73][3] = "Su instalaci&oacute;n es m&aacute;s sencilla que las multimodo";
 answers[73] = choices[73][0];
 units[73] = "99";
 comments[73] = "Id Pregunta: 8466. Analista Ayto. Madrid 2010";


//  Id pregunta: 8504 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes NO es un campo de control en el segmento TCP? ";
 choices[74]= new Array();
 choices[74][0] = "URG";
 choices[74][1] = "PSH";
 choices[74][2] = "END";
 choices[74][3] = "ACK";
 answers[74] = choices[74][2];
 units[74] = "100";
 comments[74] = "Id Pregunta: 8504. Examen TIC A2 2010";


//  Id pregunta: 8672 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Indique cu&aacute;l de las siguientes no es una entidad definida dentro de IP m&oacute;vil:";
 choices[75]= new Array();
 choices[75][0] = "Nodo local (Home Nodo)";
 choices[75][1] = "Agente local (Home Agent)";
 choices[75][2] = "Direcci&oacute;n de auxilio (Care-of-Address)";
 choices[75][3] = "Nodo m&oacute;vil (Mobile Nodo)";
 answers[75] = choices[75][0];
 units[75] = "100,109";
 comments[75] = "Id Pregunta: 8672. Examen UPM A2 2011";


//  Id pregunta: 8790 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre IPv6 es correcta?";
 choices[76]= new Array();
 choices[76][0] = "Las direcciones no son jer&aacute;rquicas y se asignan aleatoriamente";
 choices[76][1] = "Hay 2.7 billones de direcciones disponibles para asignar";
 choices[76][2] = "Las direcciones broadcast se reemplazan con direcciones multicast";
 choices[76][3] = "Un interfaz de red &uacute;nicamente podr&aacute; ser configurado con una &uacute;nica direcci&oacute;n";
 answers[76] = choices[76][2];
 units[76] = "100";
 comments[76] = "Id Pregunta: 8790. Examen UPM A2 2011";


//  Id pregunta: 8791 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  La longitud m&aacute;xima de un datagrama IP es";
 choices[77]= new Array();
 choices[77][0] = "32 KB";
 choices[77][1] = "64 KB";
 choices[77][2] = "128 KB";
 choices[77][3] = "512 KB";
 answers[77] = choices[77][1];
 units[77] = "100";
 comments[77] = "Id Pregunta: 8791. Examen UPM A2 2011";


//  Id pregunta: 8871 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  El primer paso para establecer conexiones sobre un enlace PPP conlleva:";
 choices[78]= new Array();
 choices[78][0] = "El nodo iniciador env&iacute;a tramas LCP (Link Control Protocol) para configurar el enlace de datos";
 choices[78][1] = "Antes de la activaci&oacute;n del enlace PPP, los routers a lo largo del path negocian las facilidades de autentificaci&oacute;n";
 choices[78][2] = "El nodo iniciador PPP env&iacute;a un mensaje de inicio de sesi&oacute;n a su vecino PPP m&aacute;s cercano";
 choices[78][3] = "El nodo iniciador PPP env&iacute;a un mensaje de inicio de sesi&oacute;n a todos los nodos adyacentes";
 answers[78] = choices[78][0];
 units[78] = "102";
 comments[78] = "Id Pregunta: 8871. Analista Ayto. Madrid 2010";


//  Id pregunta: 8889 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de los siguientes no es un ASE?";
 choices[79]= new Array();
 choices[79][0] = "ACSE";
 choices[79][1] = "MCSE";
 choices[79][2] = "RTSE";
 choices[79][3] = "ROSE";
 answers[79] = choices[79][1];
 units[79] = "100";
 comments[79] = "Id Pregunta: 8889. ";


//  Id pregunta: 8906 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  Dentro de las categor&iacute;as de cable con est&aacute;ndar oficial, &iquest;cu&aacute;l de las siguientes utilizar&iacute;a para implementar una red de &aacute;rea local con velocidad prevista de transmisi&oacute;n de 100Mbps? :";
 choices[80]= new Array();
 choices[80][0] = "Par trenzado sin apantallar Categor&iacute;a 2.";
 choices[80][1] = "UTP Categor&iacute;a 3.";
 choices[80][2] = "UTP Categor&iacute;a 5.";
 choices[80][3] = "Par trenzado sin apantallar categor&iacute;a 3";
 answers[80] = choices[80][2];
 units[80] = "99, 101";
 comments[80] = "Id Pregunta: 8906. Operador Ayto. Madrid 2010";


//  Id pregunta: 8999 AÃ±o de creación de pregunta: 2011-01-01
 questions[81]= "82)  &iquest;Qu&eacute; versiones de SNMP no implementan encriptaci&oacute;n de sus paquetes?";
 choices[81]= new Array();
 choices[81][0] = "v1 y v2";
 choices[81][1] = "v1 y v2c";
 choices[81][2] = "v1";
 choices[81][3] = "todas las versiones implementan encriptaci&oacute;n de sus paquetes";
 answers[81] = choices[81][1];
 units[81] = "104";
 comments[81] = "Id Pregunta: 8999. Examen UPM A2 2011";


//  Id pregunta: 9017 AÃ±o de creación de pregunta: 2011-01-01
 questions[82]= "83)  En un sistema de transmisi&oacute;n digital &hellip;";
 choices[82]= new Array();
 choices[82][0] = "El ruido es acumulativo.";
 choices[82][1] = "Cada repetidor puede regenerar la se&ntilde;al.";
 choices[82][2] = "No tiene influencia el ruido.";
 choices[82][3] = "Ninguna de las anteriores";
 answers[82] = choices[82][1];
 units[82] = "99";
 comments[82] = "Id Pregunta: 9017. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9021 AÃ±o de creación de pregunta: 2011-01-01
 questions[83]= "84)  Un articulista est&aacute; escribiendo sobre las ventajas econ&oacute;micas de los sistemas WDM (Wavelength-Division Multiplexing), que se manifiestan principalmente en los sistemas:";
 choices[83]= new Array();
 choices[83][0] = "De baja capacidad y elevado alcance.";
 choices[83][1] = "De alta capacidad y reducido alcance.";
 choices[83][2] = "De alta capacidad y elevado alcance.";
 choices[83][3] = "Ninguna de las anteriores";
 answers[83] = choices[83][2];
 units[83] = "99";
 comments[83] = "Id Pregunta: 9021. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9379 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  Acerca de las recomendaciones relativas a X.25, se puede afirmar:";
 choices[84]= new Array();
 choices[84][0] = "X.21 define el interfaz entre ETD y ETCD para terminales que operan en modo paquete en redes p&uacute;blicas";
 choices[84][1] = "X.25 especifica los procedimientos de conexi&oacute;n en redes p&uacute;blicas X.25 entre s&iacute;.";
 choices[84][2] = "X.75 define el Interfaz entre ETD y ETCD para un equipo de datos arr&iacute;tmico con acceso a la facilidad de empaquetado/desempaquetado de datos (PAD), en una red X.25";
 choices[84][3] = "X.75 especifica los procedimientos de conexi&oacute;n en redes p&uacute;blicas X.25 entre s&iacute;.";
 answers[84] = choices[84][3];
 units[84] = "101";
 comments[84] = "Id Pregunta: 9379. ";


//  Id pregunta: 9380 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  &iquest;De qu&eacute; est&aacute;ndar se estar&iacute;a hablando si se menciona una Interfaz aerea avanzada con velocidades de transmisi&oacute;n de 100 Mbps para dispositivos fijos y 1 Gbps para dispositivos m&oacute;viles?";
 choices[85]= new Array();
 choices[85][0] = "802.16e";
 choices[85][1] = "802.11-2012";
 choices[85][2] = "802.16m";
 choices[85][3] = "802.11ac";
 answers[85] = choices[85][2];
 units[85] = "101";
 comments[85] = "Id Pregunta: 9380. ";


//  Id pregunta: 9715 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  En relaci&oacute;n con los protocolos de encaminamiento";
 choices[86]= new Array();
 choices[86][0] = "RIP y OSPF son protocolos de vector distancia.";
 choices[86][1] = "IGRP y EIGRP son protocolos de estado de enlace.";
 choices[86][2] = "RIP es un protocolo de encaminamiento interno y BGP lo es de encaminamiento externo.";
 choices[86][3] = "IS-IS y OSPF son protocolos de encaminamiento externo.";
 answers[86] = choices[86][2];
 units[86] = "102";
 comments[86] = "Id Pregunta: 9715. Examen TIC-A1 2013";


//  Id pregunta: 9935 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes no es un campo de la cabecera IPv4?";
 choices[87]= new Array();
 choices[87][0] = "IHL.";
 choices[87][1] = "NF.";
 choices[87][2] = "TOS.";
 choices[87][3] = "OPCIONES.";
 answers[87] = choices[87][1];
 units[87] = "100";
 comments[87] = "Id Pregunta: 9935. NULL";


//  Id pregunta: 10111 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  El est&aacute;ndar Wimax est&aacute; especificado en la norma:";
 choices[88]= new Array();
 choices[88][0] = "IEEE 802.11";
 choices[88][1] = "IEEE 802.16";
 choices[88][2] = "IEEE 802.15";
 choices[88][3] = "IEEE 802.19";
 answers[88] = choices[88][1];
 units[88] = "101";
 comments[88] = "Id Pregunta: 10111. ";


//  Id pregunta: 10112 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  El est&aacute;ndar para definici&oacute;n de VLAN es:";
 choices[89]= new Array();
 choices[89][0] = "IEEE 802.1D";
 choices[89][1] = "IEEE 802.1P";
 choices[89][2] = "IEEE 802.1Q";
 choices[89][3] = "IEEE 802.2";
 answers[89] = choices[89][2];
 units[89] = "101";
 comments[89] = "Id Pregunta: 10112. ";


//  Id pregunta: 10114 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  MTU es:";
 choices[90]= new Array();
 choices[90][0] = "El tama&ntilde;o en bytes de la unidad de datos m&aacute;s grande que puede transmitirse por una red de comunicaciones";
 choices[90][1] = "El m&aacute;ximo retardo medido en segundos permitido entre dos nodos";
 choices[90][2] = "El tama&ntilde;o en bits de la unidad de datos m&aacute;s grande que puede transmitirse por una red de comunicaciones";
 choices[90][3] = "El m&aacute;ximo retardo medido en milisegundos permitido entre dos nodos";
 answers[90] = choices[90][0];
 units[90] = "101";
 comments[90] = "Id Pregunta: 10114. Maximum Transfer Unit";


//  Id pregunta: 10132 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  La principal mejora de SNMPv3 es:";
 choices[91]= new Array();
 choices[91][0] = "Mayor seguridad";
 choices[91][1] = "Mayor rendimiento";
 choices[91][2] = "Mayor eficacia";
 choices[91][3] = "Mayor simplicidad";
 answers[91] = choices[91][0];
 units[91] = "104";
 comments[91] = "Id Pregunta: 10132. ";


//  Id pregunta: 10297 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  En SNMP &iquest;qu&eacute; puerto utilizan las traps y en qu&eacute; sentido se transmiten?";
 choices[92]= new Array();
 choices[92][0] = "Puerto 162 y las env&iacute;a el agente al gestor.";
 choices[92][1] = "Puerto 162 y las env&iacute;a el gestor al agente.";
 choices[92][2] = "Puerto 161 y las env&iacute;a el agente al gestor.";
 choices[92][3] = "Puerto 161 y las env&iacute;a el gestor al agente.";
 answers[92] = choices[92][0];
 units[92] = "104";
 comments[92] = "Id Pregunta: 10297. TIC A2, libre, examen 2013";


//  Id pregunta: 10321 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  &iquest;Se pueden controlar el n&uacute;mero de impresiones que un usuario ha realizado en una impresora en red mediante el protocolo de gesti&oacute;n SNMP?";
 choices[93]= new Array();
 choices[93][0] = "Si, siempre y cuando en la MIB de la impresora se contemple este par&aacute;metro.";
 choices[93][1] = "No, necesitar&iacute;a una base de datos externa para almacenarlo.";
 choices[93][2] = "Si, s&oacute;lo mediante instalaci&oacute;n de firmware nuevo en la impresora.";
 choices[93][3] = "Si, pero con protocolos propietarios de la impresora.";
 answers[93] = choices[93][0];
 units[93] = "104";
 comments[93] = "Id Pregunta: 10321. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10539 AÃ±o de creación de pregunta: 2014-01-01
 questions[94]= "95)  Se&ntilde;ale la respuesta incorrecta respecto a MPLS y VPLS:";
 choices[94]= new Array();
 choices[94][0] = "RSVP-TE y LDP son protocolos de establecimiento de camino";
 choices[94][1] = "en MPLS el camino establecido es bidireccional";
 choices[94][2] = "VPLS permite conexiones muchos a muchos mientras que MPLS es punto a punto";
 choices[94][3] = "el campo de etiqueta en MPLS es de 20 bits";
 answers[94] = choices[94][1];
 units[94] = "100";
 comments[94] = "Id Pregunta: 10539. NULL";


//  Id pregunta: 10663 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Indique la afirmaci&oacute;n correcta:";
 choices[95]= new Array();
 choices[95][0] = "Ipv6 posibilita 2256 de direcciones de host diferentes.";
 choices[95][1] = "El encabezado de Ipv6 (sin opciones) es m&aacute;s corto que el de IPv4";
 choices[95][2] = "Con Ipv6 no es necesario el mecanismo de traducci&oacute;n de direcciones de red (NAT)";
 choices[95][3] = "Todas las anteriores son incorrectas.";
 answers[95] = choices[95][2];
 units[95] = "100";
 comments[95] = "Id Pregunta: 10663. ";


//  Id pregunta: 11353 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Las redes conmutadas ethernet, tienen una serie de ventajas. Se&ntilde;ale la que no se encuentra entre ellas";
 choices[96]= new Array();
 choices[96][0] = "Redes half-duplex";
 choices[96][1] = "Autonegociaci&oacute;n";
 choices[96][2] = "Trunking";
 choices[96][3] = "Uso del comando pause";
 answers[96] = choices[96][0];
 units[96] = "102";
 comments[96] = "Id Pregunta: 11353. ";


//  Id pregunta: 11569 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;De qu&eacute; tama&ntilde;o es el campo de comprobaci&oacute;n de erorres en la tecnolog&iacute;a Ethernet?";
 choices[97]= new Array();
 choices[97][0] = "16";
 choices[97][1] = "32";
 choices[97][2] = "64";
 choices[97][3] = "48";
 answers[97] = choices[97][1];
 units[97] = "100";
 comments[97] = "Id Pregunta: 11569. NULL";


//  Id pregunta: 11652 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En IPv6, desaparece el direccionamiento:";
 choices[98]= new Array();
 choices[98][0] = "Unicast";
 choices[98][1] = "Multicast";
 choices[98][2] = "Anycast";
 choices[98][3] = "Broadcast";
 answers[98] = choices[98][3];
 units[98] = "100";
 comments[98] = "Id Pregunta: 11652. ";


//  Id pregunta: 11699 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Una WAN ATM est&aacute;ndar corresponde a una red f&iacute;sica:";
 choices[99]= new Array();
 choices[99][0] = "Punto a punto";
 choices[99][1] = "Broadcast multi-acceso";
 choices[99][2] = "No broadcast multi-acceso";
 choices[99][3] = "Broadcast punto a multipunto";
 answers[99] = choices[99][2];
 units[99] = "102";
 comments[99] = "Id Pregunta: 11699. NULL";


