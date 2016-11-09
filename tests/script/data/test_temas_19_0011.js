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

//  Id pregunta: 682 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  En I+D+I, &iquest;a qu&eacute; se refiere la segunda 'I'?";
 choices[0]= new Array();
 choices[0][0] = "A implementaci&oacute;n.";
 choices[0][1] = "A instalaci&oacute;n.";
 choices[0][2] = "A innovaci&oacute;n.";
 choices[0][3] = "A internet.";
 answers[0] = choices[0][2];
 units[0] = "103";
 comments[0] = "Id Pregunta: 682. ";


//  Id pregunta: 2931 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  &iquest;Qu&eacute; m&aacute;scara habr&iacute;a que aplicar para crear 8 subredes en una red de clase A?";
 choices[1]= new Array();
 choices[1][0] = "255.240.0.0";
 choices[1][1] = "255.192.0.0";
 choices[1][2] = "255.0.0.0";
 choices[1][3] = "2";
 answers[1] = choices[1][0];
 units[1] = "100";
 comments[1] = "Id Pregunta: 2931. Similar a examen TIC MAP A 2004. Con esa m&aacute;scara tendriamos hasta 14 subredes. Se aplica la formula  2N -2 donde N es la cantidad de bits que tenemosque robarle a la porci&oacute;n de host asignada por defecto a una clase A";


//  Id pregunta: 2971 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Dada la m&aacute;scara de red 255.240.0.0, &iquest;Cu&aacute;nta subredes ser&iacute;a posible incluir dentro de una red tipo A?";
 choices[2]= new Array();
 choices[2][0] = "Ninguna";
 choices[2][1] = "16";
 choices[2][2] = "14";
 choices[2][3] = "8";
 answers[2] = choices[2][2];
 units[2] = "100";
 comments[2] = "Id Pregunta: 2971. Examen Julio 2003 Se aplica la formula  2^N -2 donde N es la cantidad de bits que tenemosque robarle a la porci&oacute;n de host asignada por defecto a una clase A";


//  Id pregunta: 2981 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  El protocolo ARP se basa en la creaci&oacute;n de?";
 choices[3]= new Array();
 choices[3][0] = "Tablas din&aacute;micas";
 choices[3][1] = "Tablas est&aacute;ticas";
 choices[3][2] = "bloding";
 choices[3][3] = "ninguna de las anteriores";
 answers[3] = choices[3][0];
 units[3] = "100";
 comments[3] = "Id Pregunta: 2981. Examen Julio 2003";


//  Id pregunta: 2984 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Los bridges:";
 choices[4]= new Array();
 choices[4][0] = "Filtran y encaminan la informaci&oacute;n por el trayecto &oacute;ptimo permitiendo la interconexi&oacute;n de redes heterog&eacute;neas a niveles 1 y 2";
 choices[4][1] = "Son elementos para la interconexi&oacute;n que operan en los niveles superiores al de red";
 choices[4][2] = "Son dispositivos que se encargan de regenerar la se&ntilde;al entre los dos segmentos de red que interconectan";
 choices[4][3] = "Operan a nivel de MAC (nivel 2), por tanto son transparentes a los protocolos de niveles superiores";
 answers[4] = choices[4][3];
 units[4] = "102";
 comments[4] = "Id Pregunta: 2984. ";


//  Id pregunta: 2987 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  Un spanning tree es";
 choices[5]= new Array();
 choices[5][0] = "Un &aacute;rbol de recubrimiento de una red";
 choices[5][1] = "Un arbol de decisi&oacute;n para algoritmos de inteligencia artificial como id3";
 choices[5][2] = "Un &aacute;rbol de resoluci&oacute;n en l&oacute;gica";
 choices[5][3] = "Un &aacute;rbol de perif&eacute;ricos de un puerto USB";
 answers[5] = choices[5][0];
 units[5] = "101, 102";
 comments[5] = "Id Pregunta: 2987. ";


//  Id pregunta: 2995 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  En un switch ethernet";
 choices[6]= new Array();
 choices[6][0] = "todos los puertos trabajan a la misma velocidad";
 choices[6][1] = "puede adaptarse a las distintas velocidades de los host conectados de manera autom&aacute;tica";
 choices[6][2] = "hace labores de enrutamiento a nivel wan";
 choices[6][3] = "sirve &uacute;nicamente para conectar redes ethernet con token ring";
 answers[6] = choices[6][1];
 units[6] = "102";
 comments[6] = "Id Pregunta: 2995. ";


//  Id pregunta: 2998 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  De los siguientes n&uacute;meros de puertos TCP y UDP indicar la falsa:";
 choices[7]= new Array();
 choices[7][0] = "21 para FTP";
 choices[7][1] = "23 para TELNET";
 choices[7][2] = "110 para POP3";
 choices[7][3] = "80 para DNS";
 answers[7] = choices[7][3];
 units[7] = "100";
 comments[7] = "Id Pregunta: 2998. NULL";


//  Id pregunta: 3003 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  El protocolo IPv6 define un campo de direcciones de:";
 choices[8]= new Array();
 choices[8][0] = "32 bits";
 choices[8][1] = "64 bits";
 choices[8][2] = "128 bits";
 choices[8][3] = "ninguna de las anteriores";
 answers[8] = choices[8][2];
 units[8] = "100";
 comments[8] = "Id Pregunta: 3003. NULL";


//  Id pregunta: 3026 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[9]= new Array();
 choices[9][0] = "La direcci&oacute;n IP no se asocia a la m&aacute;quina sino a la interfaz de red";
 choices[9][1] = "Hay 256 puertos llamados bien conocidos (well known)";
 choices[9][2] = "La direcci&oacute;n Ip y el puerto determinan un socket";
 choices[9][3] = "Una aplicaci&oacute;n se identifica por un puerto";
 answers[9] = choices[9][1];
 units[9] = "100";
 comments[9] = "Id Pregunta: 3026. SS-A 2004. Los puertos bien conocidos (well-known ports) son aquellos menores a 1024 y que se utilizan para los servicios b&aacute;sicos en Internet";


//  Id pregunta: 3099 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Una transmisi&oacute;n half duplex describe:";
 choices[10]= new Array();
 choices[10][0] = "Un circuito de cuatro hilos";
 choices[10][1] = "Un cable con doble malla";
 choices[10][2] = "Una comunicaci&oacute;n alternativa en dos sentidos";
 choices[10][3] = "Todas las respuestas anteriores son ciertas";
 answers[10] = choices[10][2];
 units[10] = "100";
 comments[10] = "Id Pregunta: 3099. NULL";


//  Id pregunta: 3116 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;A qu&eacute; norma 802 del IEEE corresponden las recomendaciones sobre LAN con CSMA/CD?:";
 choices[11]= new Array();
 choices[11][0] = "802.1";
 choices[11][1] = "802.2";
 choices[11][2] = "802.3";
 choices[11][3] = "802.4";
 answers[11] = choices[11][2];
 units[11] = "100";
 comments[11] = "Id Pregunta: 3116. NULL";


//  Id pregunta: 3117 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;A qu&eacute; norma 802 del IEEE corresponden las recomendaciones sobre LAN en bus con paso de testigo?:";
 choices[12]= new Array();
 choices[12][0] = "802.4";
 choices[12][1] = "802.5";
 choices[12][2] = "802.6";
 choices[12][3] = "802.7";
 answers[12] = choices[12][0];
 units[12] = "100";
 comments[12] = "Id Pregunta: 3117. NULL";


//  Id pregunta: 3130 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de estas afirmaciones es cierta para un red de conmutaci&oacute;n de paquetes en modo datagrama?:";
 choices[13]= new Array();
 choices[13][0] = "Un paquete enviado posteriormente no puede llegar antes que otro enviado con anterioridad";
 choices[13][1] = "La red reordena los paquetes y los entrega en el destino en el orden de llegada ";
 choices[13][2] = "Cada paquete lleva en la cabecera informaci&oacute;n acerca del origen y el destino del paquete";
 choices[13][3] = "S&oacute;lo el paquete de llamada lleva en la cabecera informaci&oacute;n acerca del origen y el destino de la llamada";
 answers[13] = choices[13][2];
 units[13] = "100";
 comments[13] = "Id Pregunta: 3130. NULL";


//  Id pregunta: 3133 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de estas afirmaciones es verdadera respecto a TCP/IP?:";
 choices[14]= new Array();
 choices[14][0] = "TCP tiene el mismo formato de mensaje que IP";
 choices[14][1] = "UDP no es un protocolo TCP/IP";
 choices[14][2] = "Para que TCP/IP funciones es necesario disponer de un interfaz Ethernet";
 choices[14][3] = "Una m&aacute;quina con varias tarjetas de red tiene varias direcciones Internet";
 answers[14] = choices[14][3];
 units[14] = "100";
 comments[14] = "Id Pregunta: 3133. NULL";


//  Id pregunta: 3137 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de las respuestas siguientes no se aplica a los servicios de red orientados a conexi&oacute;n?:";
 choices[15]= new Array();
 choices[15][0] = "Requiere que todas las conexiones sean expl&iacute;citamente establecidas y terminadas";
 choices[15][1] = "Requiere que a cada paquete se le a&ntilde;ada toda la direcci&oacute;n de encaminamiento antes de transmitirlo";
 choices[15][2] = "Predetermina el path desde la fuente al destino antes de transmitir los datos";
 choices[15][3] = "Reserva los recursos de red antes de transmitir los datos";
 answers[15] = choices[15][1];
 units[15] = "101";
 comments[15] = "Id Pregunta: 3137. ";


//  Id pregunta: 3141 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes afirmaciones corresponde a funciones o caracter&iacute;sticas de equipos repetidores?:";
 choices[16]= new Array();
 choices[16][0] = "Operan a nivel de LLC, pudiendo usarse para la interconexi&oacute;n de LANs heterog&eacute;neas de nivel 1 y 2 de OSI";
 choices[16][1] = "Operan a nivel 1 de OSI, pudiendo usarse para conectar diferentes tipos de medio f&iacute;sico";
 choices[16][2] = "Pueden analizar direcci&oacute;n de origen y destino, efectuando funciones de filtrado, pero sobre medios f&iacute;sicos homog&eacute;neos";
 choices[16][3] = "Permiten aislar los diferentes segmentos separando el tr&aacute;fico de cada uno";
 answers[16] = choices[16][1];
 units[16] = "101, 102";
 comments[16] = "Id Pregunta: 3141. ";


//  Id pregunta: 3142 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta para una red de conmutaci&oacute;n de paquetes?:";
 choices[17]= new Array();
 choices[17][0] = "El tama&ntilde;o m&aacute;ximo del mensaje a transmitir entre aplicaci&oacute;n origen y destino, depende del tama&ntilde;o m&aacute;ximo del paquete, que viene impuesto por la red";
 choices[17][1] = "No se puede establecer dos circuitos virtuales simult&aacute;neos entere un mismo origen y un mismo destino, ya que la red no podr&iacute;a coordinar dos n&uacute;meros de canal l&oacute;gico con un mismo destino";
 choices[17][2] = "Siempre que se reduzca el tama&ntilde;o de los paquetes, el rendimiento (bytes de informaci&oacute;n transmitidos por unidad de tiempo) disminuir&aacute;, ya que se env&iacute;an los mismo bytes de cabecera, para menos bytes de informaci&oacute;n";
 choices[17][3] = "Todas las respuestas anteriores son falsas ";
 answers[17] = choices[17][2];
 units[17] = "101";
 comments[17] = "Id Pregunta: 3142. ";


//  Id pregunta: 3143 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto de la fibra &oacute;ptica?:";
 choices[18]= new Array();
 choices[18][0] = "La fibra &oacute;ptica monomodo permite mayor ancho de banda que la multimodo pero es m&aacute;s complicado de hacer el conexionado";
 choices[18][1] = "La fibra &oacute;ptica multimodo permite mayor ancho de banda que la monomodo pero es m&aacute;s complicado de hacer el conexionado";
 choices[18][2] = "La fibra &oacute;ptica monomodo permite menor ancho de banda que la multimodo";
 choices[18][3] = "Ninguna de las anteriores";
 answers[18] = choices[18][0];
 units[18] = "99";
 comments[18] = "Id Pregunta: 3143. NULL";


//  Id pregunta: 3151 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de los circuitos virtuales?:";
 choices[19]= new Array();
 choices[19][0] = "Un circuito virtual es un enlace dedicado o temporal entre dos o m&aacute;s estaciones finales en una malla de conmutaci&oacute;n de paquetes";
 choices[19][1] = "Un circuito virtual proporciona una sesi&oacute;n orientada a conexi&oacute;n entre dos puntos finales";
 choices[19][2] = "En circuito virtual conmutado las conexiones duran s&oacute;lo mientras se necesiten y se desconectan cuando la sesi&oacute;n se completa";
 choices[19][3] = "Por un mismo circuito virtual conmutado puede establecerse simult&aacute;neamente enlaces con diferentes estaciones finales de la red";
 answers[19] = choices[19][3];
 units[19] = "100";
 comments[19] = "Id Pregunta: 3151. NULL";


//  Id pregunta: 3165 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es cierta para una red de conmutaci&oacute;n de paquetes?:";
 choices[20]= new Array();
 choices[20][0] = "El camino queda establecido durante toda la comunicaci&oacute;n";
 choices[20][1] = "La longitud de las unidades de datos est&aacute; limitada";
 choices[20][2] = "Se recogen en el est&aacute;ndar X.25 de la ITU-T";
 choices[20][3] = "Se han definido dos modos b&aacute;sicos de operaci&oacute;n: datagrama y circuito virtual";
 answers[20] = choices[20][0];
 units[20] = "101";
 comments[20] = "Id Pregunta: 3165. ";


//  Id pregunta: 3183 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes respuestas referentes a las funciones de los distintos niveles OSI es falsa?:";
 choices[21]= new Array();
 choices[21][0] = "Las aplicaciones de correo electr&oacute;nico residen en el nivel de transporte";
 choices[21][1] = "Uno de los servicios que suministra el nivel de Sesi&oacute;n es permitir a un usuario entrar en un sistema remoto a tiempo compartido";
 choices[21][2] = "El nivel de presentaci&oacute;n se encarga del cifrado de la informaci&oacute;n por t&eacute;cnicas criptogr&aacute;ficas";
 choices[21][3] = "Las funciones del nivel de aplicaci&oacute;n est&aacute;n determinadas por los requerimientos de la aplicaci&oacute;n que cargue el usuario";
 answers[21] = choices[21][0];
 units[21] = "100";
 comments[21] = "Id Pregunta: 3183. NULL";


//  Id pregunta: 3230 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes podr&iacute;a ser usado en un sistema aut&oacute;nomo para enrutamiento?:";
 choices[22]= new Array();
 choices[22][0] = "BGP (Border Gateway Protocol)";
 choices[22][1] = "EGP (Exterior Gateway Protocol)";
 choices[22][2] = "AGP (Autonomous Gateway Protocol)";
 choices[22][3] = "RIP (Routing Information Protocol)";
 answers[22] = choices[22][3];
 units[22] = "102";
 comments[22] = "Id Pregunta: 3230. ";


//  Id pregunta: 3259 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  &iquest;Cu&aacute;ntos octetos usa la cabecera de la nueva versi&oacute;n de IP (Ipv6)?:";
 choices[23]= new Array();
 choices[23][0] = "32";
 choices[23][1] = "8";
 choices[23][2] = "12";
 choices[23][3] = "40";
 answers[23] = choices[23][3];
 units[23] = "100";
 comments[23] = "Id Pregunta: 3259. ";


//  Id pregunta: 3268 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  &iquest;En qu&eacute; consiste la funci&oacute;n de filtrado en un bridge?:";
 choices[24]= new Array();
 choices[24][0] = "Permitir el paso de determinadas frecuencias &uacute;nicamente";
 choices[24][1] = "Eliminaci&oacute;n de las tramas err&oacute;neas";
 choices[24][2] = "Separaci&oacute;n del tr&aacute;fico de dos subredes";
 choices[24][3] = "Los bridges (puentes) no tienen capacidad de filtrado, ya que operan al nivel de enlace";
 answers[24] = choices[24][2];
 units[24] = "102";
 comments[24] = "Id Pregunta: 3268. ";


//  Id pregunta: 3294 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;Qu&eacute; hecho no es correcto en la evoluci&oacute;n del protocolo TCP/IP?:";
 choices[25]= new Array();
 choices[25][0] = "El desarrollador inicial fue ARPANET";
 choices[25][1] = "La publicaci&oacute;n fue por IAB";
 choices[25][2] = "La financiaci&oacute;n corri&oacute; a cargo de DARPA";
 choices[25][3] = "El desarrollador final fue CERN";
 answers[25] = choices[25][3];
 units[25] = "100,112";
 comments[25] = "Id Pregunta: 3294. ";


//  Id pregunta: 3303 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Qu&eacute; organismo se encarga directamente de asignar los puertos en Internet, que son precisos a la hora de especificar los est&aacute;ndares?:";
 choices[26]= new Array();
 choices[26][0] = "IETF";
 choices[26][1] = "IESG";
 choices[26][2] = "ITU-T";
 choices[26][3] = "ICANN";
 answers[26] = choices[26][3];
 units[26] = "100,112";
 comments[26] = "Id Pregunta: 3303. ";


//  Id pregunta: 3438 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  El proceso de multiplexaci&oacute;n:";
 choices[27]= new Array();
 choices[27][0] = "Permite a dispositivos ejecutar diferentes aplicaciones software al mismo tiempo";
 choices[27][1] = "Interconecta m&uacute;ltiples redes que usan diferentes medio f&iacute;sico de enlace";
 choices[27][2] = "Permite que la informaci&oacute;n de encaminamiento (routing) de diferentes protocolos se intercambie y se use para actualizar las tablas de encaminamiento";
 choices[27][3] = "Permite que datos de fuentes diferentes sean transmitidos simult&aacute;neamente sobre un &uacute;nico enlace";
 answers[27] = choices[27][3];
 units[27] = "99, 100, 105";
 comments[27] = "Id Pregunta: 3438. *: multiplexacion";


//  Id pregunta: 3442 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  El protocolo CSMA/CD utilizado en el subnivel MAC de las LAN es propio de las redes:";
 choices[28]= new Array();
 choices[28][0] = "Ethernet";
 choices[28][1] = "Token ring";
 choices[28][2] = "Token bus";
 choices[28][3] = "Se puede emplear en cualquiera de las anteriores";
 answers[28] = choices[28][0];
 units[28] = "101";
 comments[28] = "Id Pregunta: 3442. ";


//  Id pregunta: 3444 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  El protocolo de comunicaciones denominado HDLC, es un protocolo orientado a:";
 choices[29]= new Array();
 choices[29][0] = "Car&aacute;cter, de modos: ARM, ABM y SRM";
 choices[29][1] = "Bit , de modos: ARM, ABM y SRM";
 choices[29][2] = "Car&aacute;cter, con cadencia secuencial";
 choices[29][3] = "Bit, con cadencia secuencial";
 answers[29] = choices[29][1];
 units[29] = "100";
 comments[29] = "Id Pregunta: 3444. NULL";


//  Id pregunta: 3461 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  El protocolo TCP (Transmisi&oacute;n Control Protocol):";
 choices[30]= new Array();
 choices[30][0] = "Es orientado a conexi&oacute;n y bidireccional";
 choices[30][1] = "Es orientado a conexi&oacute;n, pero no bidireccional";
 choices[30][2] = "Es no orientado a conexi&oacute;n y bidireccional";
 choices[30][3] = "Es no orientado a conexi&oacute;n, y no bidireccional";
 answers[30] = choices[30][0];
 units[30] = "100";
 comments[30] = "Id Pregunta: 3461. NULL";


//  Id pregunta: 3464 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  El protocolo X.10 es conocido en:";
 choices[31]= new Array();
 choices[31][0] = "Aplicaciones de telefon&iacute;a m&oacute;vil.";
 choices[31][1] = "Aplicaciones de radares.";
 choices[31][2] = "Aplicaciones dom&oacute;ticas.";
 choices[31][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[31] = choices[31][2];
 units[31] = "47, 100";
 comments[31] = "Id Pregunta: 3464. *: domotica";


//  Id pregunta: 3481 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  El topolog&iacute;a denominada FDDI (Fiber Distributed Data Interface) utiliza un m&eacute;todo de acceso al medio:";
 choices[32]= new Array();
 choices[32][0] = "Tipo CSMA/CD: se emite en cualquier momento y se detectan las colisiones";
 choices[32][1] = "Tipo  &lsquo;paso de testigo&rsquo; (Token Passing): es necesario la posesi&oacute;n del testigo para emitir";
 choices[32][2] = "Tipo TDM (multiplexaci&oacute;n por divisi&oacute;n en el tiempo): se asignan diferentes slots de tiempo a cada estaci&oacute;n";
 choices[32][3] = "Tipo FDM: la frecuencia de luz emitida por cada estaci&oacute;n es diferente con lo que no hay colisiones";
 answers[32] = choices[32][1];
 units[32] = "101";
 comments[32] = "Id Pregunta: 3481. ";


//  Id pregunta: 3520 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  En Ethernet, se usa un transceptor (transceiver) para:";
 choices[33]= new Array();
 choices[33][0] = "Para hacer una conexi&oacute;n de red de un dispositivo a un servidor";
 choices[33][1] = "Establecer conexiones entre tarjetas de interfaz de red";
 choices[33][2] = "Convertir se&ntilde;ales recibidas por una puerta para transmitirlas por otra";
 choices[33][3] = "Unir un cable desde una estaci&oacute;n al medio f&iacute;sico que constituye la red";
 answers[33] = choices[33][3];
 units[33] = "102";
 comments[33] = "Id Pregunta: 3520. ";


//  Id pregunta: 3548 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  En RDSI BA al decir que las interfaces son sim&eacute;tricas, nos referimos a:";
 choices[34]= new Array();
 choices[34][0] = "Igualdad de interfaces entre emisor y receptor";
 choices[34][1] = "Igual velocidad de entrada que de salida";
 choices[34][2] = "Igual velocidad de entrada que de salida, pero solo interfaces el&eacute;ctricas";
 choices[34][3] = "Igual velocidad de entrada que de salida, pero solo interfaces &oacute;pticas";
 answers[34] = choices[34][1];
 units[34] = "103";
 comments[34] = "Id Pregunta: 3548. ";


//  Id pregunta: 3549 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  En RDSI BA al decir que las interfaces son sim&eacute;tricas, y dependiendo de la velocidad las posibilidades tecnologicas son:";
 choices[35]= new Array();
 choices[35][0] = "Para 155 Mbps las interfaces son el&eacute;ctricas y &oacute;pticas";
 choices[35][1] = "Para 622 Mbps las interfaces son el&eacute;ctricas";
 choices[35][2] = "Para 155 Mbps las interfaces son &oacute;pticas solamente.";
 choices[35][3] = "Para ambas velocidades exclusivamente interfaces &oacute;pticas";
 answers[35] = choices[35][0];
 units[35] = "103";
 comments[35] = "Id Pregunta: 3549. ";


//  Id pregunta: 3568 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  En una arquitectura de red OSI la responsabilidad de dividir los mensajes en unidades adecuadas a las especificaciones contratadas con la red X25 es de:";
 choices[36]= new Array();
 choices[36][0] = "Del nivel de transporte que le pasa al de red las unidades que debe enviar y el cometido del de red es enviarlos";
 choices[36][1] = "Del nivel de red ya que debe segmentar los fragmentos que le pasa el nivel de transporte en paquetes aceptables por la red X25";
 choices[36][2] = "Del nivel de enlace ya que es el responsable de hacer las tramas que coloca en el enlace";
 choices[36][3] = "De ninguno de ellos ya que el software de red del proveedor lo hace por su cuenta, para dividir el mensaje en paquetes con la longitud que m&aacute;s le convenga a sus conmutadores";
 answers[36] = choices[36][1];
 units[36] = "101, 102";
 comments[36] = "Id Pregunta: 3568. ";


//  Id pregunta: 3577 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  En una red local en la que se tienen problemas de capacidad de la misma se ha decidido dividirla en dos segmentos. Indique cual de las opciones siguientes es la soluci&oacute;n t&eacute;cnica y econ&oacute;micamente m&aacute;s adecuada:";
 choices[37]= new Array();
 choices[37][0] = "Utilizaci&oacute;n de un gateway entre los segmentos";
 choices[37][1] = "Utilizaci&oacute;n de un repetidor entre los segmentos";
 choices[37][2] = "Utilizaci&oacute;n de un switch entre los segmentos";
 choices[37][3] = "Todas las opciones son igualmente adecuadas";
 answers[37] = choices[37][2];
 units[37] = "102";
 comments[37] = "Id Pregunta: 3577. ";


//  Id pregunta: 3599 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  La direcci&oacute;n loopback en IPv6 es:";
 choices[38]= new Array();
 choices[38][0] = "0:0:0:0:0:0:0:1";
 choices[38][1] = "0:0:0:0:0:0:0:0";
 choices[38][2] = "FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:";
 choices[38][3] = "F:F:F:F:F:F:F:F";
 answers[38] = choices[38][0];
 units[38] = "100";
 comments[38] = "Id Pregunta: 3599. NULL";


//  Id pregunta: 3679 AÃ±o de creación de pregunta: 2002-01-01
 questions[39]= "40)  Una transmisi&oacute;n de datos que consiste en un &uacute;nico paquete de datos se env&iacute;a a un subconjunto espec&iacute;fico de los nodos de una red se denomina:";
 choices[39]= new Array();
 choices[39][0] = "Broadcast";
 choices[39][1] = "Multicast";
 choices[39][2] = "Subnetcast";
 choices[39][3] = "Unicast";
 answers[39] = choices[39][1];
 units[39] = "100";
 comments[39] = "Id Pregunta: 3679. NULL";


//  Id pregunta: 3708 AÃ±o de creación de pregunta: 2002-01-01
 questions[40]= "41)  Las unidades de informaci&oacute;n entre redes contienen una o m&aacute;s cabeceras que se usan para:";
 choices[40]= new Array();
 choices[40][0] = "Transportar datos a la aplicaci&oacute;n software receptora";
 choices[40][1] = "Evitar que los datos transmitidos por una estaci&oacute;n interfieran con los de otra";
 choices[40][2] = "Asegurar un acceso ordenado al medio f&iacute;sico";
 choices[40][3] = "Pasar informaci&oacute;n de control a los niveles OSI (o equivalentes) en el sistema de destino";
 answers[40] = choices[40][3];
 units[40] = "100";
 comments[40] = "Id Pregunta: 3708. NULL";


//  Id pregunta: 3719 AÃ±o de creación de pregunta: 2002-01-01
 questions[41]= "42)  Los conectores que se insertan en los hubs 10 base T son del tipo:";
 choices[41]= new Array();
 choices[41][0] = "RJ11";
 choices[41][1] = "RJ45";
 choices[41][2] = "RJ37";
 choices[41][3] = "V.24";
 answers[41] = choices[41][1];
 units[41] = "99";
 comments[41] = "Id Pregunta: 3719. ";


//  Id pregunta: 3771 AÃ±o de creación de pregunta: 2002-01-01
 questions[42]= "43)  PCM es:";
 choices[42]= new Array();
 choices[42][0] = "Modulaci&oacute;n por codificaci&oacute;n de pulsos";
 choices[42][1] = "M&oacute;biles adaptados al uso con ordenadores personales";
 choices[42][2] = "Modulaci&oacute;n por codificaci&oacute;n de fase";
 choices[42][3] = "Personalizaci&oacute;n de canales multimedia";
 answers[42] = choices[42][0];
 units[42] = "99";
 comments[42] = "Id Pregunta: 3771. *:PCM";


//  Id pregunta: 3801 AÃ±o de creación de pregunta: 2002-01-01
 questions[43]= "44)  Sabiendo que se dice que una fibra monomodo es aquella que transmite un &uacute;nico modo de propagaci&oacute;n de un haz monocrom&aacute;tico de luz. Indique cu&aacute;l de las afirmaciones siguientes es verdadera: ";
 choices[43]= new Array();
 choices[43][0] = "Las fibras &oacute;pticas monomodo son las m&aacute;s adecuadas para la transmisi&oacute;n de se&ntilde;ales con un ancho de banda peque&ntilde;o y a grandes distancias";
 choices[43][1] = "La fibras &oacute;pticas monomodo son las adecuadas para transmitir se&ntilde;ales de gran ancho de banda y a grandes distancias";
 choices[43][2] = "Las fibras &oacute;pticas monomodo son &uacute;nicamente adecuadas para la transmisi&oacute;n de se&ntilde;ales anal&oacute;gicas";
 choices[43][3] = "Todas las anteriores respuestas son correctas";
 answers[43] = choices[43][1];
 units[43] = "99";
 comments[43] = "Id Pregunta: 3801. ";


//  Id pregunta: 3814 AÃ±o de creación de pregunta: 2002-01-01
 questions[44]= "45)  Se&ntilde;ale cu&aacute;l de las siguientes no es una arquitectura de comunicaciones:";
 choices[44]= new Array();
 choices[44][0] = "SNA";
 choices[44][1] = "SMTP";
 choices[44][2] = "OSI";
 choices[44][3] = "TCP/IP";
 answers[44] = choices[44][1];
 units[44] = "100";
 comments[44] = "Id Pregunta: 3814. NULL";


//  Id pregunta: 3823 AÃ±o de creación de pregunta: 2002-01-01
 questions[45]= "46)  Se&ntilde;ale la norma de IEEE que se refiere a redes LAN con CSMA/CD:";
 choices[45]= new Array();
 choices[45][0] = "802.1";
 choices[45][1] = "802.2";
 choices[45][2] = "802.3";
 choices[45][3] = "802.4";
 answers[45] = choices[45][2];
 units[45] = "100";
 comments[45] = "Id Pregunta: 3823. NULL";


//  Id pregunta: 3837 AÃ±o de creación de pregunta: 2002-01-01
 questions[46]= "47)  SOAP:";
 choices[46]= new Array();
 choices[46][0] = "Es una especificaci&oacute;n para el intercambio de informaci&oacute;n estructurada en entornos descentralizados-distribuidos";
 choices[46][1] = "Fue propuesta originalmente por Microsoft";
 choices[46][2] = "Ninguna de las anteriores es v&aacute;lida";
 choices[46][3] = "Las respuestas 'a' y 'b' son ciertas";
 answers[46] = choices[46][3];
 units[46] = "113";
 comments[46] = "Id Pregunta: 3837. ";


//  Id pregunta: 3838 AÃ±o de creación de pregunta: 2002-01-01
 questions[47]= "48)  Sobre los algoritmos de encaminamiento utilizados por los &ldquo;routers&rdquo;, indique cual de las siguientes afirmaciones es err&oacute;nea:";
 choices[47]= new Array();
 choices[47][0] = "Mediante los algoritmos de estados de enlaces cada &ldquo;router&rdquo; env&iacute;a su tabla de encaminamiento completa a todos los dem&aacute;s &ldquo;routers&rdquo; en la red al producirse cualquier cambio en la tabla. As&iacute; act&uacute;a el protocolo OSPF";
 choices[47][1] = "Mediante los algoritmos de vector distancia (tambi&eacute;n conocidos como algoritmos Bellman-Ford) cada &ldquo;router&rdquo; env&iacute;a su tabla de encaminado completa s&oacute;lo a los &ldquo;routers&rdquo; vecinos a intervalos regulares.  As&iacute; act&uacute;a el protocolo RIP";
 choices[47][2] = "Mediante los algoritmos de estados de enlaces (tambi&eacute;n conocidos como &ldquo;shortest path first&rdquo;) cada &ldquo;router&rdquo; env&iacute;a determinada informacion relativa al estado de sus enlaces a los demas routers lo que les permite construir una vision tolpologica de la red ";
 choices[47][3] = "Los algoritmos de estados de enlaces son menos propensos a provocar un bucle de encaminamiento, ya que convergen (determinan el encaminamiento &oacute;ptimo) m&aacute;s r&aacute;pidamente";
 answers[47] = choices[47][0];
 units[47] = "101";
 comments[47] = "Id Pregunta: 3838. ";


//  Id pregunta: 3918 AÃ±o de creación de pregunta: 2004-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre IPv6 es falsa?";
 choices[48]= new Array();
 choices[48][0] = "La longitud de la cabecera de los paquetes no es fija";
 choices[48][1] = "Usa direcciones de 128 bits";
 choices[48][2] = "Soporte intr&iacute;nseco de seguridad (Ipsec)";
 choices[48][3] = "Soporte de autoconfiguraci&oacute;n (los hosts determinan su direcci&oacute;n de manera autom&aacute;tica)";
 answers[48] = choices[48][0];
 units[48] = "100";
 comments[48] = "Id Pregunta: 3918. NULL";


//  Id pregunta: 3937 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;Qu&eacute; est&aacute;ndar  WIFI es el que soporta simult&aacute;neamente las velocidades de 11Mbps y 54Mbps?";
 choices[49]= new Array();
 choices[49][0] = " 802.11a";
 choices[49][1] = "802.11b";
 choices[49][2] = "802.11g";
 choices[49][3] = "802.11x";
 answers[49] = choices[49][2];
 units[49] = "100";
 comments[49] = "Id Pregunta: 3937. ";


//  Id pregunta: 3980 AÃ±o de creación de pregunta: 2006-01-01
 questions[50]= "51)  En el protocolo IPV6 las direcciones son de:";
 choices[50]= new Array();
 choices[50][0] = "16 bits";
 choices[50][1] = "16 bytes";
 choices[50][2] = "32 bits";
 choices[50][3] = "32 bytes";
 answers[50] = choices[50][1];
 units[50] = "100";
 comments[50] = "Id Pregunta: 3980. ";


//  Id pregunta: 3982 AÃ±o de creación de pregunta: 2006-01-01
 questions[51]= "52)  Se&ntilde;ale la respuesta falsa:";
 choices[51]= new Array();
 choices[51][0] = "ICMP es un protocolo de nivel 3.";
 choices[51][1] = "TCP es orientado a conexi&oacute;n y no confirmado.";
 choices[51][2] = "UDP es no orientado a conexi&oacute;n";
 choices[51][3] = "La cabecera de IPv4 tiene un campo de offset de 1.5 bytes.";
 answers[51] = choices[51][1];
 units[51] = "100";
 comments[51] = "Id Pregunta: 3982. ";


//  Id pregunta: 3983 AÃ±o de creación de pregunta: 2006-01-01
 questions[52]= "53)  &iquest;Qu&eacute; es falso sobre IPv6?";
 choices[52]= new Array();
 choices[52][0] = "::1 es la direcci&oacute;n de loopback.";
 choices[52][1] = "Las cabeceras de extensi&oacute;n no son examinadas ni procesadas por ning&uacute;n nodo a lo largo de la ruta de entrega de un paquete, excepto la de Opciones de Salto a Salto.";
 choices[52][2] = "El campo de la cabecera denominado &quot;cabecera siguiente&quot; utiliza los mismos valores que el campo &quot;protocolo&quot; de IPv4";
 choices[52][3] = "Todas son verdaderas.";
 answers[52] = choices[52][3];
 units[52] = "100";
 comments[52] = "Id Pregunta: 3983. ";


//  Id pregunta: 3986 AÃ±o de creación de pregunta: 2006-01-01
 questions[53]= "54)  En relaci&oacute;n a los switches, se&ntilde;ale la respuesta falsa:";
 choices[53]= new Array();
 choices[53][0] = "Tienen mayor rendimiento que los puentes, y pueden trabajar a la velocidad nominal (wire speed) de la interfaz.";
 choices[53][1] = "En la conmutaci&oacute;n &quot;store-and-forward&quot; recibe la trama y la retransmite si es correcta, tras haber comprobado el CRC.";
 choices[53][2] = "En la conmutaci&oacute;n &quot;cut-throutgh&quot; si el CRC es err&oacute;neo la trama no se retransmite";
 choices[53][3] = "Mediante &quot;cut-through libre de fragmentos&quot; se reciben 64 bytes antes de retransmitir.";
 answers[53] = choices[53][2];
 units[53] = "102";
 comments[53] = "Id Pregunta: 3986. ";


//  Id pregunta: 4212 AÃ±o de creación de pregunta: 2006-01-01
 questions[54]= "55)  La direcci&oacute;n  de broadcast de una red de &aacute;rea local clase A, siendo uno de sus nodos la direcci&oacute;n IP 100.254.254.254 es";
 choices[54]= new Array();
 choices[54][0] = "100.255.255.255";
 choices[54][1] = "0.0.0.255";
 choices[54][2] = "100.0.0.0";
 choices[54][3] = "100.254.254.255";
 answers[54] = choices[54][0];
 units[54] = "100";
 comments[54] = "Id Pregunta: 4212. ";


//  Id pregunta: 4219 AÃ±o de creación de pregunta: 2006-01-01
 questions[55]= "56)  El router es un dispositivo que se utiliza en la interconexi&oacute;n de redes y opera  seg&uacute;n el modelo OSI en el nivel de:";
 choices[55]= new Array();
 choices[55][0] = "transporte";
 choices[55][1] = "red";
 choices[55][2] = "f&iacute;sico";
 choices[55][3] = "enlace";
 answers[55] = choices[55][1];
 units[55] = "102";
 comments[55] = "Id Pregunta: 4219. ";


//  Id pregunta: 4220 AÃ±o de creación de pregunta: 2006-01-01
 questions[56]= "57)  Especifique de las siguientes normas aquella que pertenezca al nivel f&iacute;sico del modelo OSI";
 choices[56]= new Array();
 choices[56][0] = "X.214-ISO 8072";
 choices[56][1] = "RS-449";
 choices[56][2] = "X.215- ISO 8072";
 choices[56][3] = "802.3";
 answers[56] = choices[56][1];
 units[56] = "100";
 comments[56] = "Id Pregunta: 4220. NULL";


//  Id pregunta: 4223 AÃ±o de creación de pregunta: 2006-01-01
 questions[57]= "58)  Indique cual de las siguientes afirmaciones con relaci&oacute;n a la RDSI (Red Digital de Servicios Integrados) no es correcta:";
 choices[57]= new Array();
 choices[57][0] = "Utiliza el sistema de se&ntilde;alizaci&oacute;n por canal comun CCITT n&ordm; 7 (CCS7)";
 choices[57][1] = "Emplea el canal D para el transporte de se&ntilde;alizaci&oacute;n mediante conmutaci&oacute;n de paquetes";
 choices[57][2] = "La velocidad de los canales B tanto en los accesos b&aacute;sicos como en los primarios es de 64 Kbps";
 choices[57][3] = "La velocidad de los canales D tanto en los accesos b&aacute;sicos como en los primarios es de 16 Kbps";
 answers[57] = choices[57][3];
 units[57] = "103";
 comments[57] = "Id Pregunta: 4223. ";


//  Id pregunta: 4232 AÃ±o de creación de pregunta: 2006-01-01
 questions[58]= "59)  La sintaxis de transferencia OSI, los metaficheros gr&aacute;ficos, la sint&aacute;xis de procedimiento comercial y los elementos de mensajes y datos son normas:";
 choices[58]= new Array();
 choices[58][0] = "Sobre medios magn&eacute;ticos y &oacute;pticos";
 choices[58][1] = "Para representaci&oacute;n de informaci&oacute;n y datos intercambiados";
 choices[58][2] = "Del equipo l&oacute;gico";
 choices[58][3] = "Sobre juegos de caracteres y codificaci&oacute;n";
 answers[58] = choices[58][1];
 units[58] = "100";
 comments[58] = "Id Pregunta: 4232. ";


//  Id pregunta: 4338 AÃ±o de creación de pregunta: 2007-01-01
 questions[59]= "60)  Marcos es el administrador de una LAN Ethernet que consta de 10 estaciones de trabajo, 2 servidores y 3 impresoras, todo ello conectado a trav&eacute;s de un hub central de 20 puertos. El rendimiento de la red ha ca&iacute;do en picado como consecuencia de la instalaci&oacute;n de una nueva aplicaci&oacute;n, cr&iacute;tica para la Organizaci&oacute;n, que genera muchas colisiones de paquetes, ralentizando los accesos a datos y servicios. Los usuarios presionan al Director de Sistemas de Informaci&oacute;n para que se solucione el problema. El Director pide a Marcos su opini&oacute;n sobre la soluci&oacute;n m&aacute;s econ&oacute;mica y eficiente. El consejo de Marcos deber&iacute;a ser:";
 choices[59]= new Array();
 choices[59][0] = "Sustituir el cableado UTP por fibra &oacute;ptica para aumentar el ancho de banda.";
 choices[59][1] = "Sustituir los dos servidores actuales por un servidor tetraprocesador.";
 choices[59][2] = "Desinstalar la aplicaci&oacute;n que causa los problemas.";
 choices[59][3] = "Sustituir el hub por un switch.";
 answers[59] = choices[59][3];
 units[59] = "100";
 comments[59] = "Id Pregunta: 4338. ";


//  Id pregunta: 4421 AÃ±o de creación de pregunta: 2007-01-01
 questions[60]= "61)  &iquest;A qu&eacute; nivel del modelo OSI se realiza el encapsulamiento Frame Relay y HDLC?";
 choices[60]= new Array();
 choices[60][0] = "Red.";
 choices[60][1] = "Sesi&oacute;n.";
 choices[60][2] = "Enlace de datos.";
 choices[60][3] = "Transporte.";
 answers[60] = choices[60][2];
 units[60] = "100";
 comments[60] = "Id Pregunta: 4421. NULL";


//  Id pregunta: 4648 AÃ±o de creación de pregunta: 2007-01-01
 questions[61]= "62)  El protocolo CMIP de OSI se puede considerar el equivalente al siguiente protocolo de la familia TCP/IP:";
 choices[61]= new Array();
 choices[61][0] = "SMTP";
 choices[61][1] = "SNMP";
 choices[61][2] = "ARP";
 choices[61][3] = "HTTP";
 answers[61] = choices[61][1];
 units[61] = "100";
 comments[61] = "Id Pregunta: 4648. ";


//  Id pregunta: 4805 AÃ±o de creación de pregunta: 2007-01-01
 questions[62]= "63)  El protocolo IPv6 (Internet Protocol version 6):";
 choices[62]= new Array();
 choices[62][0] = "Tiene direcciones de red de 64 bits de longitud";
 choices[62][1] = "Recomienda que si el datagrama tiene varias cabeceras de extensi&oacute;n, la cabecera de encaminamiento(routing header) aparezca siempre antes que la cabecera de opciones salto a salto (hop-by-hop header)";
 choices[62][2] = "Aunque su cabecera es m&aacute;s grande que la del protocolo IPv4 (Internet Protocol version 4), tiene menoscampos. Esto hace que, por lo general, los routersrealicen menos procesamiento sobre losdatagramas, consiguiendo as&iacute; un encaminamiento m&aacute;s eficiente";
 choices[62][3] = "El campo etiqueta de flujo (flow label) basta para identificar un&iacute;vocamente a un flujo de paquetes";
 answers[62] = choices[62][2];
 units[62] = "100";
 comments[62] = "Id Pregunta: 4805. ";


//  Id pregunta: 4968 AÃ±o de creación de pregunta: 2003-01-01
 questions[63]= "64)  Los equipos utilizados para la interconexi&oacute;n de redes a nivel 5 seg&uacute;n el modelo OSI se denomina:";
 choices[63]= new Array();
 choices[63][0] = "Repetidores.";
 choices[63][1] = "Routers.";
 choices[63][2] = "Bridges.";
 choices[63][3] = "Gateways.";
 answers[63] = choices[63][3];
 units[63] = "102";
 comments[63] = "Id Pregunta: 4968. Examen TIC B 2007";


//  Id pregunta: 5079 AÃ±o de creación de pregunta: 2003-01-01
 questions[64]= "65)  En la estructura de la trama del protocolo HDLC (&quot;High level Data Link Control&quot;) el n&uacute;mero de bits del delimitadordel comienzo de la trama es:";
 choices[64]= new Array();
 choices[64][0] = "Variable";
 choices[64][1] = "8";
 choices[64][2] = "16";
 choices[64][3] = "32";
 answers[64] = choices[64][1];
 units[64] = "101";
 comments[64] = "Id Pregunta: 5079. Examen TIC A 2007";


//  Id pregunta: 5158 AÃ±o de creación de pregunta: 2003-01-01
 questions[65]= "66)  Indique el est&aacute;ndar en el que se basan las redes Ethernet:";
 choices[65]= new Array();
 choices[65][0] = "IEEE 802.2";
 choices[65][1] = "IEEE 802.3";
 choices[65][2] = "IEEE 802.4";
 choices[65][3] = "IEEE 802.5";
 answers[65] = choices[65][1];
 units[65] = "101";
 comments[65] = "Id Pregunta: 5158. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5567 AÃ±o de creación de pregunta: 2003-01-01
 questions[66]= "67)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.18 del IEEE?";
 choices[66]= new Array();
 choices[66][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[66][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[66][2] = "Resilient Packet Ring";
 choices[66][3] = "Traspaso entre redes";
 answers[66] = choices[66][0];
 units[66] = "101";
 comments[66] = "Id Pregunta: 5567. ";


//  Id pregunta: 5840 AÃ±o de creación de pregunta: 2009-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes opciones describe correctamente la estructura de una direcci&oacute;n MAC?";
 choices[67]= new Array();
 choices[67][0] = "C&oacute;digo de red de 16 bits m&aacute;s c&oacute;digo de serie de 16 bits";
 choices[67][1] = "C&oacute;digo del fabricante de 16 bits m&aacute;s c&oacute;digo de serie de 16 bits";
 choices[67][2] = "C&oacute;digo del fabricante de 24 bits m&aacute;s c&oacute;digo de serie de 24 bits";
 choices[67][3] = "Identidad de red de 24 bits m&aacute;s identidad de host de 24 bits";
 answers[67] = choices[67][2];
 units[67] = "101";
 comments[67] = "Id Pregunta: 5840. MAP 2008 A1";


//  Id pregunta: 5865 AÃ±o de creación de pregunta: 2009-01-01
 questions[68]= "69)  En referencia al direccionamiento de IPv6 definido en el RFC 1884, indique cu&aacute;l de los apartados siguientes es VERDADERO:";
 choices[68]= new Array();
 choices[68][0] = "Una direcci&oacute;n IPv6 tiene la forma x:x:x:x:x:x:x:x donde cada &quot;x&quot; representa un valor en hexadecimal correspondiente a 8 bits";
 choices[68][1] = "En una direcci&oacute;n IPv6, se pueden sustituir todas las apariciones de cadenas de ceros por &quot;::&quot;";
 choices[68][2] = "Una forma alternativa de representaci&oacute;n de las direcciones en un entorno mixto de IPv4 e IPv6 es d.d.d.d:x:x:x:x:x:x donde las &quot;d&quot; son los valores decimales de los 8bits m&aacute;s significativos de la direcci&oacute;n IPv4, y las &quot;x&quot; son valores hexadecimales de los tramos menos significativos de la direcci&oacute;n IPv6";
 choices[68][3] = "La direcci&oacute;n 0:0:0:0:0:0:0:0 es conocida como &quot;unspecified address&quot;. y nunca debe ser asignada a un nodo";
 answers[68] = choices[68][3];
 units[68] = "100";
 comments[68] = "Id Pregunta: 5865. MAP 2008 A1";


//  Id pregunta: 6110 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  El protocolo UDP proporciona servicios a las aplicaciones para:";
 choices[69]= new Array();
 choices[69][0] = "Controlar el flujo extremo a extremo.";
 choices[69][1] = "Eliminar paquetes duplicados.";
 choices[69][2] = "Multiplexar y demultiplexar.";
 choices[69][3] = "Reordenar paquetes.";
 answers[69] = choices[69][2];
 units[69] = "100";
 comments[69] = "Id Pregunta: 6110. TIC A 2009";


//  Id pregunta: 6141 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  &iquest;Qu&eacute; es el MOS (Mean Opinion Score)?";
 choices[70]= new Array();
 choices[70][0] = "Es una medida subjetiva de calidad de sonido, que se suele utilizar en sistemas de VoIP";
 choices[70][1] = "Es una de la pr&aacute;cticas que propone M&eacute;trica 3 para las reuniones de trabajo, junto con las reuniones, las entrevistas y el JAD (Joint Application Design)";
 choices[70][2] = "Es una t&eacute;cnica de estimaci&oacute;n de esfuerzo software, que se utiliza, por ejemplo, cuando no hay datos suficientes para estimar puntos funci&oacute;n";
 choices[70][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[70] = choices[70][0];
 units[70] = "100, 109";
 comments[70] = "Id Pregunta: 6141. ";


//  Id pregunta: 6186 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  Indique, cu&aacute;l de los siguientes elementos no forma parte de una Intranet:";
 choices[71]= new Array();
 choices[71][0] = "Nomina del personal.";
 choices[71][1] = "Tabl&oacute;n de Anuncios.";
 choices[71][2] = "Motor de b&uacute;squeda de documentaci&oacute;n.";
 choices[71][3] = "Procesador de Textos.";
 answers[71] = choices[71][3];
 units[71] = "113";
 comments[71] = "Id Pregunta: 6186. ";


//  Id pregunta: 6573 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  De las siguientes afirmaciones, &iquest;cu&aacute;l es la correcta?";
 choices[72]= new Array();
 choices[72][0] = "ARP y RARP son unos protocolos de facto para transmitir datos a trav&eacute;s de Internet";
 choices[72][1] = "ARP traduce la direcci&oacute;n IP a su correspondiente direcci&oacute;n MAC";
 choices[72][2] = "ICMP traduce la direcci&oacute;n MAC a su correspondiente direcci&oacute;n IP";
 choices[72][3] = "Todas las respuestas anteriores son correctas";
 answers[72] = choices[72][1];
 units[72] = "100";
 comments[72] = "Id Pregunta: 6573. NULL";


//  Id pregunta: 7246 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  &iquest;Qu&eacute; valor tiene el primer n&uacute;mero de una red de clase C en internet?";
 choices[73]= new Array();
 choices[73][0] = "Menor o igual que 127";
 choices[73][1] = "Entre 192 y 223";
 choices[73][2] = "Mayor o igual que 224";
 choices[73][3] = "Entre 128 y 191";
 answers[73] = choices[73][1];
 units[73] = "100";
 comments[73] = "Id Pregunta: 7246. Examen TIC B 2009";


//  Id pregunta: 7247 AÃ±o de creación de pregunta: 2010-01-01
 questions[74]= "75)  &iquest;Cu&aacute;ntas direcciones IP ser&aacute;n asignadas en la subred 220.8.7.0/28, sin considerar las direcciones de subred y de broadcast?";
 choices[74]= new Array();
 choices[74][0] = "256";
 choices[74][1] = "254";
 choices[74][2] = "14";
 choices[74][3] = "28";
 answers[74] = choices[74][2];
 units[74] = "100";
 comments[74] = "Id Pregunta: 7247. Examen TIC B 2009";


//  Id pregunta: 8296 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;ntas direcciones IP ser&aacute;n asignadas en la subred 134.141.0.0/24, sin considerar las direcciones de subred y de broadcast? ";
 choices[75]= new Array();
 choices[75][0] = "256";
 choices[75][1] = "254";
 choices[75][2] = "30";
 choices[75][3] = "64";
 answers[75] = choices[75][1];
 units[75] = "100";
 comments[75] = "Id Pregunta: 8296. Examen TIC A2 2010";


//  Id pregunta: 8381 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  La tecnolog&iacute;a de transmisi&oacute;n 100Base-FX:";
 choices[76]= new Array();
 choices[76][0] = "Utiliza cable UTP de categor&iacute;a 5 o superior.";
 choices[76][1] = "Tiene una longitud m&aacute;xima de 2 kil&oacute;metros para transmisiones half-duplex y 400 metros para transmisiones full-duplex.";
 choices[76][2] = "Es compatible con la tecnolog&iacute;a 10Base&bull;FL.";
 choices[76][3] = "Puede usar conectores MIC.";
 answers[76] = choices[76][3];
 units[76] = "99";
 comments[76] = "Id Pregunta: 8381. Examen TIC A2 2010";


//  Id pregunta: 8473 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Cual de las siguientes afirmaciones sobre los cables EIA/TIA/568B de categoria 6 es correcta?";
 choices[77]= new Array();
 choices[77][0] = "Tiene un ancho de banda de hasta 10 Ghz en cada par.";
 choices[77][1] = "Se suele usar para transmitir a velocidades de 1 Gbps.";
 choices[77][2] = "No permite implementar Power over Ethernet (PoE).";
 choices[77][3] = "S&oacute;lo est&aacute; disponible de forma experimental.";
 answers[77] = choices[77][1];
 units[77] = "99";
 comments[77] = "Id Pregunta: 8473. Examen TIC A2 2010 interna";


//  Id pregunta: 8474 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de los siguientes modos de propagaci&oacute;n de la fibra &oacute;ptica permite un mayor alcance y capacidad?";
 choices[78]= new Array();
 choices[78][0] = "Monomodo";
 choices[78][1] = "Multimodo con salto de &iacute;ndice de refracci&oacute;n.";
 choices[78][2] = "Multimodo con &iacute;ndice de refracci&oacute;n gradual. ";
 choices[78][3] = "Ultramodo de alta dispersi&oacute;n modal.";
 answers[78] = choices[78][0];
 units[78] = "99";
 comments[78] = "Id Pregunta: 8474. Examen TIC A2 2010 interna";


//  Id pregunta: 8657 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  La codificaci&oacute;n Manchester-Diferencial se utiliza en:";
 choices[79]= new Array();
 choices[79][0] = "Firma digital";
 choices[79][1] = "Modulaci&oacute;n de se&ntilde;ales";
 choices[79][2] = "T&eacute;cnicas criptogr&aacute;ficas";
 choices[79][3] = "Seguridad Wi-Fi";
 answers[79] = choices[79][1];
 units[79] = "99, 101";
 comments[79] = "Id Pregunta: 8657. Examen UPM A2 2011";


//  Id pregunta: 8661 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  De las siguientes, &iquest;cu&aacute;l no es una funci&oacute;n realizada por los mensajes enviados por el protocolo ICMP?";
 choices[80]= new Array();
 choices[80][0] = "Control de flujo";
 choices[80][1] = "Detecci&oacute;n de destinos inalcanzables";
 choices[80][2] = "Encapsulaci&oacute;n de datagramas";
 choices[80][3] = "Redirecci&oacute;n de rutas";
 answers[80] = choices[80][2];
 units[80] = "100";
 comments[80] = "Id Pregunta: 8661. Examen UPM A2 2011";


//  Id pregunta: 9014 AÃ±o de creación de pregunta: 2011-01-01
 questions[81]= "82)  &iquest;Qu&eacute; t&eacute;cnica pueden emplearse para corregir la interferencia entre s&iacute;mbolos en un demodulador digital?";
 choices[81]= new Array();
 choices[81][0] = "el filtrado de coseno alzado de la moduladora";
 choices[81][1] = "el filtrado de pre&eacute;nfasis de la moduladora";
 choices[81][2] = "el filtrado de de retardo de grupo constante";
 choices[81][3] = "Ninguna de las anteriores";
 answers[81] = choices[81][0];
 units[81] = "99";
 comments[81] = "Id Pregunta: 9014. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9325 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  &iquest;Qu&eacute; norma define el cableado";
 choices[82]= new Array();
 choices[82][0] = "ISO 50173";
 choices[82][1] = "ISO 11801";
 choices[82][2] = "ISO 18765";
 choices[82][3] = "ISO 80211";
 answers[82] = choices[82][1];
 units[82] = "99";
 comments[82] = "Id Pregunta: 9325. NULL";


//  Id pregunta: 9347 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  La red S-TESTA ";
 choices[83]= new Array();
 choices[83][0] = "Es accesible directamente desde cada Ministerio.";
 choices[83][1] = "El EuroDomain es un Dominio Local de servicios centralizados.";
 choices[83][2] = "Algunas aplicaciones que usan sus servicios son OLAF, DG TREN o DG FISH.";
 choices[83][3] = "Da acceso y opera a trav&eacute;s de Internet.";
 answers[83] = choices[83][2];
 units[83] = "103";
 comments[83] = "Id Pregunta: 9347. http://ec.europa.eu/isa/";


//  Id pregunta: 9350 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  DSS1 es:";
 choices[84]= new Array();
 choices[84][0] = "Un protocolo utilizado en ADSL, en la capa de red, para la gesti&oacute;n de conexiones con el DSLAM";
 choices[84][1] = "Un protocolo utilizado en RDSI, de la capa de red, para gesti&oacute;n de conexiones.";
 choices[84][2] = "Un protocolo utilizado en RDSI en la capa de enlace, para el control de acceso al canal D";
 choices[84][3] = "Un protocolo utilizado en ADSL, en la capa de enlace, para el acceso m&uacute;ltiple a los servicios";
 answers[84] = choices[84][1];
 units[84] = "103";
 comments[84] = "Id Pregunta: 9350. Pag. 8 astic 2011";


//  Id pregunta: 9352 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l es la velocidad disponible de un acceso primario RDSI en Europa?";
 choices[85]= new Array();
 choices[85][0] = "1544 Kbps";
 choices[85][1] = "64 Kbps";
 choices[85][2] = "2048 Kbps";
 choices[85][3] = "1024 Kbps";
 answers[85] = choices[85][2];
 units[85] = "103";
 comments[85] = "Id Pregunta: 9352. Pruebas selectivas para Gesti&oacute;n de Sistemas e Inform&aacute;tica de la UPM 2011. Libre";


//  Id pregunta: 9355 AÃ±o de creación de pregunta: 2013-01-01
 questions[86]= "87)  Indica cual de estas afirmaciones es cierta";
 choices[86]= new Array();
 choices[86][0] = "En RDSI igual que en RTB el descolgado del tel&eacute;fono produce un &quot;corto&quot; de tal forma que la corriente que pasa por el bucle indica a la central que el abonado ha descolgado.";
 choices[86][1] = "En RDSI el terminador de red aun siendo activo en caso de ca&iacute;da de la alimentaci&oacute;n local es capaz de establecer/mantener la conversaci&oacute;n.";
 choices[86][2] = "Los terminales que cuelgan de la RTB (Red Telef&oacute;nica B&aacute;sica) no pueden establecer ning&uacute;n tipo de comunicaci&oacute;n con los que cuelgan de la RDSI (Red Digital de Servicios Integrados).";
 choices[86][3] = "Todas las respuestas son correctas.";
 answers[86] = choices[86][1];
 units[86] = "103";
 comments[86] = "Id Pregunta: 9355. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";


//  Id pregunta: 9362 AÃ±o de creación de pregunta: 2013-01-01
 questions[87]= "88)  Una red utiliza CSMA/CD. Opera a 1 Gbps con un cable de 500 metros de largo sin repetidores. La velocidad de propagaci&oacute;n en el cable es de 200.000 km/s &iquest;Cu&aacute;l es el tama&ntilde;o m&iacute;nimo de la trama?";
 choices[87]= new Array();
 choices[87][0] = "5000 bits";
 choices[87][1] = "10000 bits";
 choices[87][2] = "1250 bytes";
 choices[87][3] = "1000 bits";
 answers[87] = choices[87][0];
 units[87] = "101";
 comments[87] = "Id Pregunta: 9362. ";


//  Id pregunta: 9373 AÃ±o de creación de pregunta: 2013-01-01
 questions[88]= "89)  El protocolo de nivel 2 utilizado en una l&iacute;nea punto a punto con Jerarqu&iacute;a Digital S&iacute;ncrona es:";
 choices[88]= new Array();
 choices[88][0] = "PPP";
 choices[88][1] = "LAPB";
 choices[88][2] = "L2TP";
 choices[88][3] = "L2F";
 answers[88] = choices[88][0];
 units[88] = "101";
 comments[88] = "Id Pregunta: 9373. ";


//  Id pregunta: 9928 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En IPv4 el n&uacute;mero m&aacute;ximo de fragmentos por datagrama son:";
 choices[89]= new Array();
 choices[89][0] = "8192.";
 choices[89][1] = "1024.";
 choices[89][2] = "512.";
 choices[89][3] = "2048.";
 answers[89] = choices[89][0];
 units[89] = "100";
 comments[89] = "Id Pregunta: 9928. NULL";


//  Id pregunta: 9929 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l es el orden de las primitivas de servicio?";
 choices[90]= new Array();
 choices[90][0] = "REQUEST &ndash; CONFIRM &ndash;INDICATION &ndash; RESPONSE.";
 choices[90][1] = "REQUEST &ndash; RESPONSE &ndash; INDICATION &ndash; CONFIRM.";
 choices[90][2] = "REQUEST &ndash; INDICATION &ndash; RESPONSE &ndash; CONFIRM.";
 choices[90][3] = "REQUEST &ndash; CONFIRM &ndash; RESPONSE &ndash; INDICATION.";
 answers[90] = choices[90][2];
 units[90] = "100";
 comments[90] = "Id Pregunta: 9929. NULL";


//  Id pregunta: 9930 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Qu&eacute; ASE (Elemento de Servicio de Aplicaci&oacute;n) usan todas las aplicaciones?";
 choices[91]= new Array();
 choices[91][0] = "ACSE (Association Control Service Element).";
 choices[91][1] = "RTSE (Reliable Transfer Service Element).";
 choices[91][2] = "ROSE (Remote Operation Service Element).";
 choices[91][3] = "ATSE (Application Transfer Service Element).";
 answers[91] = choices[91][0];
 units[91] = "100";
 comments[91] = "Id Pregunta: 9930. NULL";


//  Id pregunta: 9931 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  En el modelo OSI, el nivel clave para el sistema de seguridad es:";
 choices[92]= new Array();
 choices[92][0] = "N3.";
 choices[92][1] = "N4.";
 choices[92][2] = "N6.";
 choices[92][3] = "N7.";
 answers[92] = choices[92][2];
 units[92] = "100";
 comments[92] = "Id Pregunta: 9931. NULL";


//  Id pregunta: 10035 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l es la direcci&oacute;n multicast utilizada por el protocolo RIP v2 (Routing Information Protocol), seg&uacute;n RFC 2453, para enviar las actualizaciones de sus tablas?";
 choices[93]= new Array();
 choices[93][0] = "224.0.0.4 ";
 choices[93][1] = "224.0.0.5";
 choices[93][2] = "224.0.0.9 ";
 choices[93][3] = "224.0.0.22";
 answers[93] = choices[93][2];
 units[93] = "100";
 comments[93] = "Id Pregunta: 10035. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10302 AÃ±o de creación de pregunta: 2014-01-01
 questions[94]= "95)  En IPv6 (RFC 2460), &iquest;cu&aacute;nto ocupa el campo &quot;tipo de enrutamiento&quot;?";
 choices[94]= new Array();
 choices[94][0] = "15 bits.";
 choices[94][1] = "8 bits.";
 choices[94][2] = "10 bits.";
 choices[94][3] = "3 bits.";
 answers[94] = choices[94][1];
 units[94] = "100";
 comments[94] = "Id Pregunta: 10302. TIC A2, libre, examen 2013";


//  Id pregunta: 10304 AÃ±o de creación de pregunta: 2014-01-01
 questions[95]= "96)  Indicar cu&aacute;l de los siguientes NO es un modo de transferencia de datos utilizado por el protocolo HDLC (High Level Data Link Control):";
 choices[95]= new Array();
 choices[95][0] = "Modo de respuesta normal (NRM, Normal Response Mode).";
 choices[95][1] = "Modo balanceado as&iacute;ncrono (ABM, Asynchronous Balanced Mode).";
 choices[95][2] = "Modo de respuesta as&iacute;ncrono (ARM, Asynchronous Response Mode).";
 choices[95][3] = "Modo balanceado s&iacute;ncrono (SBM, Synchronous Balanced Mode).";
 answers[95] = choices[95][3];
 units[95] = "100";
 comments[95] = "Id Pregunta: 10304. TIC A2, libre, examen 2013";


//  Id pregunta: 10503 AÃ±o de creación de pregunta: 2014-01-01
 questions[96]= "97)  &iquest;Qu&eacute; estandar internacional especifica clases de cableado de proposito general?";
 choices[96]= new Array();
 choices[96][0] = "ISO/IEC 11801";
 choices[96][1] = "EN 50173";
 choices[96][2] = "ISO/IEC 18101";
 choices[96][3] = "EN 50137";
 answers[96] = choices[96][0];
 units[96] = "99";
 comments[96] = "Id Pregunta: 10503. ";


//  Id pregunta: 11336 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Cu&aacute;l de los siguientes es un algoritmo de encaminamiento de estado del enlace";
 choices[97]= new Array();
 choices[97][0] = "IS-IS";
 choices[97][1] = "IGRP";
 choices[97][2] = "BGP";
 choices[97][3] = "RIP";
 answers[97] = choices[97][0];
 units[97] = "102";
 comments[97] = "Id Pregunta: 11336. ";


//  Id pregunta: 11347 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Cu&aacute;l es el significado de las sigla RIP";
 choices[98]= new Array();
 choices[98][0] = "Routing Improved Protocol";
 choices[98][1] = "Routing Inner Protocol";
 choices[98][2] = "Routing Information Protocol";
 choices[98][3] = "Ninguna de las anteriores";
 answers[98] = choices[98][2];
 units[98] = "100";
 comments[98] = "Id Pregunta: 11347. ";


//  Id pregunta: 11649 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Se&ntilde;ale cu&aacute;l de los siguientes no es un conector de fibra &oacute;ptica:";
 choices[99]= new Array();
 choices[99][0] = "FC";
 choices[99][1] = "LC";
 choices[99][2] = "SC";
 choices[99][3] = "NC";
 answers[99] = choices[99][3];
 units[99] = "99";
 comments[99] = "Id Pregunta: 11649. ";


