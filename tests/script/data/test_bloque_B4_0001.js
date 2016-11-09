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

//  Id pregunta: 2893 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  La cooperaci&oacute;n de los Estados miembros para la utilizaci&oacute;n de la tecnolog&iacute;a de la informaci&oacute;n en todas las instituciones de la UE se realiza a trav&eacute;s del programa:";
 choices[0]= new Array();
 choices[0][0] = "TESTA II ";
 choices[0][1] = "IDABC";
 choices[0][2] = "INDALO";
 choices[0][3] = "HITA";
 answers[0] = choices[0][1];
 units[0] = "103";
 comments[0] = "Id Pregunta: 2893. ";


//  Id pregunta: 3008 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  &iquest;Es admisible cierto grado de inconsistencia temporal en la informaci&oacute;n dado sistemas como X.500 o LDAP?";
 choices[1]= new Array();
 choices[1][0] = "S&iacute;";
 choices[1][1] = "No";
 choices[1][2] = "S&iacute;, pero s&oacute;lo para LDAP";
 choices[1][3] = "ninguna de las anteriores";
 answers[1] = choices[1][0];
 units[1] = "106";
 comments[1] = "Id Pregunta: 3008. ";


//  Id pregunta: 3017 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;A que se corresponden las siglas DECT?";
 choices[2]= new Array();
 choices[2][0] = "Una red de microondas para uso militar";
 choices[2][1] = "Un sistema de telefonos inhal&aacute;brico";
 choices[2][2] = "Un sistema de telefon&iacute;na movil";
 choices[2][3] = "ninguna de las anteriores";
 answers[2] = choices[2][1];
 units[2] = "108";
 comments[2] = "Id Pregunta: 3017. ";


//  Id pregunta: 3045 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qu&eacute; afirmaci&oacute;n de las siguientes no es cierta respecto a SSL?";
 choices[3]= new Array();
 choices[3][0] = "Es el acr&oacute;nimo de Secure Sockets Layer, capa segura de interfaz con sockets";
 choices[3][1] = "Es un est&aacute;ndar de facto propuesto por Netscape, ampliamente disponible en servidores y navegadores web";
 choices[3][2] = "En su funcionamiento, se establece primeramente una clave de sesi&oacute;n para conseguir el cifrado del canal (confidencialidad)";
 choices[3][3] = "Es un protocolo cliente-servidor que requiere la autenticaci&oacute;n de ambas partes";
 answers[3] = choices[3][3];
 units[3] = "111";
 comments[3] = "Id Pregunta: 3045. NULL";


//  Id pregunta: 3157 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes afirmaciones no corresponde a la tecnolog&iacute;a ATM?:";
 choices[4]= new Array();
 choices[4][0] = "Es tecnolog&iacute;a de conmutaci&oacute;n de tipo 'Frame-Relay'";
 choices[4][1] = "Es tecnolog&iacute;a orientada a conexi&oacute;n, con tama&ntilde;o de paquete fijo de 53 bytes";
 choices[4][2] = "Permite multiplexar diferentes tipos de tr&aacute;fico, por ejemplo voz, datos y v&iacute;deo en circuitos virtuales";
 choices[4][3] = "Usa t&eacute;cnicas de multiplexaci&oacute;n estad&iacute;stica, pudiendo conmutar interfaces individuales de hasta 622 Mbit/s en la actualidad";
 answers[4] = choices[4][0];
 units[4] = "109";
 comments[4] = "Id Pregunta: 3157. ";


//  Id pregunta: 3216 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  El est&aacute;ndar de correo electr&oacute;nico desarrollado por ITU-T dentro de OSI es:";
 choices[5]= new Array();
 choices[5][0] = "SMTP (Simple Mail Transfer Protocol)";
 choices[5][1] = "MHS - X.400 (Message Handling System)";
 choices[5][2] = "PEM (Private Enhanced Mail)";
 choices[5][3] = "MIME (Multipurpose Internet Mail Extension)";
 answers[5] = choices[5][1];
 units[5] = "106";
 comments[5] = "Id Pregunta: 3216. ";


//  Id pregunta: 3309 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; se entiende por &quot;punto de sincronizaci&oacute;n principal&quot;?:";
 choices[6]= new Array();
 choices[6][0] = "En el nivel de red, se trata de nodos de cada subred encargados de sincronizar las comunicaciones que pasan por ellos";
 choices[6][1] = "En el nivel de enlace, son lugares de acceso a primitivas de servicio para control de flujo";
 choices[6][2] = "En el nivel de transporte, son puntos de sincronizaci&oacute;n de inicio y fin de una conexi&oacute;n";
 choices[6][3] = "En el nivel de sesi&oacute;n, son puntos que estructuran la transferencia de datos dividi&eacute;ndola en unidades de di&aacute;logo separadas";
 answers[6] = choices[6][3];
 units[6] = "100";
 comments[6] = "Id Pregunta: 3309. NULL";


//  Id pregunta: 3340 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Comparando WiFi y Bluetooth:";
 choices[7]= new Array();
 choices[7][0] = "Bluetooth es m&aacute;s lento que WiFi";
 choices[7][1] = "Bluetooth es m&aacute;s vers&aacute;til que WiFi";
 choices[7][2] = "Ambos operan en la banda de 2,4 GHz";
 choices[7][3] = "Todo lo anterior es cierto";
 answers[7] = choices[7][3];
 units[7] = "107";
 comments[7] = "Id Pregunta: 3340. NULL";


//  Id pregunta: 3360 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  De los t&eacute;rminos 'wander' y 'jitter' podemos decir:";
 choices[8]= new Array();
 choices[8][0] = "Que son lo mismo en terminolog&iacute;a americana e inglesa";
 choices[8][1] = "Que wander se refiere a oscilaciones de frecuencia a baja frecuencia y jitter a oscilaciones de frecuencia en alta frecuencia";
 choices[8][2] = "Que wander se refiere a oscilaciones de frecuencia a alta frecuencia y jitter a oscilaciones de frecuencia en baja frecuencia";
 choices[8][3] = "No existen los t&eacute;rminos wander ni jitter en telecomunicaciones";
 answers[8] = choices[8][1];
 units[8] = "99";
 comments[8] = "Id Pregunta: 3360. *: frecuencias";


//  Id pregunta: 3384 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El middleware puede definirse como un m&oacute;dulo intermedio que act&uacute;a como conductor entre dos m&oacute;dulos de software.  A este respecto, tambi&eacute;n se puede afirmar que:";
 choices[9]= new Array();
 choices[9][0] = "En una aplicaci&oacute;n cliente/servidor, el middleware permite independizar los procesos cliente y servidor";
 choices[9][1] = "La utilizaci&oacute;n del middleware en lugar de utilizar drectamente las APIs del sistema operativo, hace que en  muchas ocasiones se pierda 'potencia'";
 choices[9][2] = "En t&eacute;minos de programaci&oacute;n orientada a objetos, el middleware identifica diferentes objetos y conoce las propiedades que tienen asociadas, por lo que puede responder a peticiones referentes a los mismos";
 choices[9][3] = "Todas las respuestas anteriores son correctas";
 answers[9] = choices[9][3];
 units[9] = "113";
 comments[9] = "Id Pregunta: 3384. *: Middleware";


//  Id pregunta: 3428 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Indicar entre las siguientes normas del IEEE la que trata sobre redes Integradas de voz y datos:";
 choices[10]= new Array();
 choices[10][0] = "802.6";
 choices[10][1] = "802.7";
 choices[10][2] = "802.8";
 choices[10][3] = "802.9";
 answers[10] = choices[10][3];
 units[10] = "101";
 comments[10] = "Id Pregunta: 3428. ";


//  Id pregunta: 3459 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El protocolo SNMP:";
 choices[11]= new Array();
 choices[11][0] = "Es un protocolo de gesti&oacute;n de redes";
 choices[11][1] = "Es un protocolo de mensajer&iacute;a electr&oacute;nica";
 choices[11][2] = "Es un protocolo de gesti&oacute;n de protocolos";
 choices[11][3] = "Es un protocolo de mensajer&iacute;a simple";
 answers[11] = choices[11][0];
 units[11] = "104";
 comments[11] = "Id Pregunta: 3459. ";


//  Id pregunta: 3468 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El ruido t&eacute;rmico es una perturbaci&oacute;n:";
 choices[12]= new Array();
 choices[12][0] = "Debida a las diferencias en los coeficientes de dilataci&oacute;n de los conductores";
 choices[12][1] = "Aleatoria que aparece de forma natural en los conductores por agitaci&oacute;n de los electrones";
 choices[12][2] = "Igual a la temperatura a la cual la resistencia equivalente del dispositivo producir&iacute;a el ruido total observado";
 choices[12][3] = "Introducida en el proceso de cuantificaci&oacute;n";
 answers[12] = choices[12][1];
 units[12] = "99";
 comments[12] = "Id Pregunta: 3468. ";


//  Id pregunta: 3497 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En el modelo de referencia OSI para la interconexi&oacute;n de sistemas abiertos se definen una serie de niveles. &iquest;Cu&aacute;l o cuales de los siguientes deber&iacute;a soportar la red de conmutaci&oacute;n en un caso ideal?:";
 choices[13]= new Array();
 choices[13][0] = "Los tres primeros: f&iacute;sico, enlace y red";
 choices[13][1] = "El nivel 3: red";
 choices[13][2] = "Los niveles 3 y 4: transporte y red";
 choices[13][3] = "Los dos primeros niveles: f&iacute;sico y enlace";
 answers[13] = choices[13][0];
 units[13] = "100";
 comments[13] = "Id Pregunta: 3497. NULL";


//  Id pregunta: 3510 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En el protocolo HTTP, el m&eacute;todo de cliente TRACE:";
 choices[14]= new Array();
 choices[14][0] = "Pide al servidor que se declare a s&iacute; mismo dentro de la cabecera";
 choices[14][1] = "Pide a los proxies que se declaren a s&iacute; mismo dentro de la cabecera";
 choices[14][2] = "No existe";
 choices[14][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[14] = choices[14][1];
 units[14] = "112";
 comments[14] = "Id Pregunta: 3510. ";


//  Id pregunta: 3550 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En redes MAN, protocolo DQDB, se cumple que:";
 choices[15]= new Array();
 choices[15][0] = "Las celdas tienen longitud de 53 bytes";
 choices[15][1] = "Es compatible con ATM";
 choices[15][2] = "Tienen una carga &uacute;til de 48 bytes";
 choices[15][3] = "Todas las anteriores respuestas son correctas";
 answers[15] = choices[15][3];
 units[15] = "101";
 comments[15] = "Id Pregunta: 3550. ";


//  Id pregunta: 3579 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En una red TCP/IP, la conmutaci&oacute;n de nivel 4:";
 choices[16]= new Array();
 choices[16][0] = "No existe";
 choices[16][1] = "Se realiza mediante el identificador MAC del paquete IP";
 choices[16][2] = "Se realiza mediante el identificador de puerto del paquete IP";
 choices[16][3] = "Se realiza mediante el identificador de la direcci&oacute;n IP";
 answers[16] = choices[16][2];
 units[16] = "100";
 comments[16] = "Id Pregunta: 3579. NULL";


//  Id pregunta: 3585 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Indique qu&eacute; campo de los que se relacionan no est&aacute; incluido en la cabecera de segmento TCP:";
 choices[17]= new Array();
 choices[17][0] = "N&uacute;mero de paquetes enviados por la conexi&oacute;n";
 choices[17][1] = "Posici&oacute;n en bytes donde empiezan los bytes urgentes";
 choices[17][2] = "Direcciones IP de origen y destino";
 choices[17][3] = "Petici&oacute;n de resetear la sesi&oacute;n";
 answers[17] = choices[17][2];
 units[17] = "100";
 comments[17] = "Id Pregunta: 3585. NULL";


//  Id pregunta: 3643 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La t&eacute;cnica de acceso al medio utilizada en redes Ethernet se denomina:";
 choices[18]= new Array();
 choices[18][0] = "CSMA";
 choices[18][1] = "CSMA/CD";
 choices[18][2] = "CSMA/CA";
 choices[18][3] = "Ninguna de las anteriores";
 answers[18] = choices[18][1];
 units[18] = "101";
 comments[18] = "Id Pregunta: 3643. ";


//  Id pregunta: 3645 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La tecnolog&iacute;a de red de &aacute;rea local 100VG-AnyLAN:";
 choices[19]= new Array();
 choices[19][0] = "Utiliza el protocolo de acceso al medio CSMA/CD IEEE 802.3";
 choices[19][1] = "Utiliza el protocolo de acceso al medio por demanda de prioridad IEEE 802.12";
 choices[19][2] = "Requiere 8 pares trenzados de categor&iacute;a 3";
 choices[19][3] = "Todas las afirmaciones anteriores son falsas";
 answers[19] = choices[19][1];
 units[19] = "101";
 comments[19] = "Id Pregunta: 3645. ";


//  Id pregunta: 3655 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Un acceso RDSI:";
 choices[20]= new Array();
 choices[20][0] = "Precisa de una instalaci&oacute;n de cable espec&iacute;fica en casa del abonado";
 choices[20][1] = "Es un servicio que se proporciona sobre el par de hilos telef&oacute;nico";
 choices[20][2] = "Precisa tener contratados 2 canales de voz";
 choices[20][3] = "Ninguna de las anteriores de las respuestas anteriores es correcta";
 answers[20] = choices[20][1];
 units[20] = "103";
 comments[20] = "Id Pregunta: 3655. ";


//  Id pregunta: 3674 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Una empresa dispone de dos edificios de oficinas a ambos lados de una calle. Para conectarlos han decidido estudiar las alternativas disponibles. Indique la opci&oacute;n que sea mejor tanto t&eacute;cnica como econ&oacute;micamente:";
 choices[21]= new Array();
 choices[21][0] = "utilizaci&oacute;n de un enlace infrarrojos";
 choices[21][1] = "Utilizaci&oacute;n de una l&iacute;nea punto a punto arrendada a una empresa con concesi&oacute;n para ofrecer servicios portadores";
 choices[21][2] = "Contrataci&oacute;n de un servicio VSAT";
 choices[21][3] = "Solicitar del Ayuntamiento permiso de obra para la conexi&oacute;n permanente de una l&iacute;nea privada que atraviese la calle";
 answers[21] = choices[21][1];
 units[21] = "102";
 comments[21] = "Id Pregunta: 3674. ";


//  Id pregunta: 3686 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  La 'velocidad' seg&uacute;n demanda es propia de la t&eacute;cnica:";
 choices[22]= new Array();
 choices[22][0] = "ATM (Asynchronous Transfer Mode)";
 choices[22][1] = "STM (Synchronous Transfer Mode)";
 choices[22][2] = "ATM y STM";
 choices[22][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[22] = choices[22][0];
 units[22] = "109";
 comments[22] = "Id Pregunta: 3686. ";


//  Id pregunta: 3715 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Los circuitos de la red telef&oacute;nica conmutada anal&oacute;gica, vistos desde el interfaz LT - ETCD...:";
 choices[23]= new Array();
 choices[23][0] = "No est&aacute;n limitados en banda porque no hay multiplexaci&oacute;n de se&ntilde;ales";
 choices[23][1] = "Est&aacute;n limitados a una banda entre 300 Hz y 3.400 Hz";
 choices[23][2] = "Est&aacute;n limitados a 64 kbps";
 choices[23][3] = "Est&aacute;n limitados a 144 kbps";
 answers[23] = choices[23][1];
 units[23] = "108";
 comments[23] = "Id Pregunta: 3715. ";


//  Id pregunta: 3717 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Los conceptos de &quot;piconet&quot; y &quot;scatternet&quot; forman parte de la arquitectura de red utilizada con tecnolog&iacute;a:";
 choices[24]= new Array();
 choices[24][0] = "IrDA";
 choices[24][1] = "DECT";
 choices[24][2] = "Bluetooth";
 choices[24][3] = "WLAN";
 answers[24] = choices[24][2];
 units[24] = "107";
 comments[24] = "Id Pregunta: 3717. NULL";


//  Id pregunta: 3756 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  OSA Parlay es:";
 choices[25]= new Array();
 choices[25][0] = "Open Services Architecture, del Parlay Group, arquitectura que pretende establecer una capa de middleware para el desarrollo de aplicaciones est&aacute;ndares comunes para el desarrollo de servicios m&oacute;viles";
 choices[25][1] = "Open Software Association, con sede establecida en Parlay (Texas)";
 choices[25][2] = "Other Specification for Applicatios, un nuevo est&aacute;ndar dise&ntilde;ado por John Parlay (miembro destacado de ITU-T) que pretende establecer una capa universal de aplicaci&oacute;n que a&uacute;ne las capas de aplicaci&oacute;n de OSI y TCP/IP favoreciendo su total compatibilidad";
 choices[25][3] = "OSA Parlay no se corresponde con ning&uacute;n acr&oacute;nimo conocido";
 answers[25] = choices[25][0];
 units[25] = "108";
 comments[25] = "Id Pregunta: 3756. ";


//  Id pregunta: 3779 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Relativo a Frame Relay, &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?:";
 choices[26]= new Array();
 choices[26][0] = "Es un protocolo dise&ntilde;ado para trabajar sobre redes con alta tasa de errores";
 choices[26][1] = "Un usuario nunca podr&aacute; transmitir m&aacute;s datos de los contratados en el CIR";
 choices[26][2] = "Proporciona un servicio orientado a conexi&oacute;n no fiable";
 choices[26][3] = "En caso de congesti&oacute;n, las tramas son almacenadas y enviadas con posterioridad";
 answers[26] = choices[26][2];
 units[26] = "109";
 comments[26] = "Id Pregunta: 3779. ";


//  Id pregunta: 3831 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Si un encaminador (router) tiene cuatro interfaces f&iacute;sicas de red y esta encaminando los protocolos AppleTalk, OSI, y TCP/IP, &iquest;cu&aacute;ntas direcciones a nivel de red tendr&aacute; normalmente?:";
 choices[27]= new Array();
 choices[27][0] = "3";
 choices[27][1] = "4";
 choices[27][2] = "12";
 choices[27][3] = "1";
 answers[27] = choices[27][2];
 units[27] = "100";
 comments[27] = "Id Pregunta: 3831. NULL";


//  Id pregunta: 3862 AÃ±o de creación de pregunta: 2004-01-01
 questions[28]= "29)  Qu&eacute; servicio no ofrece DNS security";
 choices[28]= new Array();
 choices[28][0] = "Prueba del origen de datos";
 choices[28][1] = "Distribuci&oacute;n de clave p&uacute;blica";
 choices[28][2] = "Secreto del mensaje";
 choices[28][3] = "Autenticaci&oacute;n";
 answers[28] = choices[28][2];
 units[28] = "116";
 comments[28] = "Id Pregunta: 3862. Tanenbaum";


//  Id pregunta: 3904 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  Sobre el Entorno Dom&eacute;stico Virtual o VHE (Virtual Home Environment) puede decirse que:";
 choices[29]= new Array();
 choices[29][0] = "Es un nuevo est&aacute;ndar de interfaz dom&oacute;tica entre electrodom&eacute;sticos";
 choices[29][1] = "Es un concepto ligado a la tecnolog&iacute;a UMTS";
 choices[29][2] = "Es una norma de intercomunicaci&oacute;n inal&aacute;mbrica para utilizar en el hogar";
 choices[29][3] = "Ninguna de las opciones anteriores es correcta";
 answers[29] = choices[29][1];
 units[29] = "108";
 comments[29] = "Id Pregunta: 3904. ";


//  Id pregunta: 3909 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  &iquest;Qu&eacute; no se usa en la s&iacute;ntesis de voz?";
 choices[30]= new Array();
 choices[30][0] = " fonemas";
 choices[30][1] = " difonemas";
 choices[30][2] = "palabras";
 choices[30][3] = "semis&iacute;labas";
 answers[30] = choices[30][2];
 units[30] = "94";
 comments[30] = "Id Pregunta: 3909. ";


//  Id pregunta: 3933 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;C&uacute;antos canales tiene una trama MIC?:";
 choices[31]= new Array();
 choices[31][0] = "32";
 choices[31][1] = "16";
 choices[31][2] = "32, pero dos de ellos se utilizan para se&ntilde;alizaci&oacute;n y sincronismo";
 choices[31][3] = "Todas las respuestas anteriores son falsas";
 answers[31] = choices[31][2];
 units[31] = "103";
 comments[31] = "Id Pregunta: 3933. ";


//  Id pregunta: 3949 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  En las redes basadas en servidores centrales que utilizan el modelo b&aacute;sico cliente-servidor:";
 choices[32]= new Array();
 choices[32][0] = "Un ordenador pone sus recursos a disposici&oacute;n del resto de ordenadores de la red, de forma que cada estaci&oacute;n recupera datos del servidor y los procesa como si fuesen locales";
 choices[32][1] = "Cada ordenador conectado a la red puede compartir la informaci&oacute;n y los recursos determinados previamente con los dem&aacute;s ordenadores de la red";
 choices[32][2] = "Los ordenadores utilizan enlaces a trav&eacute;s de los puertos serie o paralelo para transferir archivos o compartir perif&eacute;ricos";
 choices[32][3] = "Los ordenadores se encuentran conectados permanentemente entre s&iacute;, a trav&eacute;s de un sistema cerrado punto a punto";
 answers[32] = choices[32][0];
 units[32] = "100";
 comments[32] = "Id Pregunta: 3949. NULL";


//  Id pregunta: 3962 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Ordenar los siguientes dispositivos seg&uacute;n nivel OSI a puente b gateway c router d repetidor";
 choices[33]= new Array();
 choices[33][0] = "d a c b ";
 choices[33][1] = "a b c d";
 choices[33][2] = "b c d a";
 choices[33][3] = "b a d c ";
 answers[33] = choices[33][0];
 units[33] = "100";
 comments[33] = "Id Pregunta: 3962. ";


//  Id pregunta: 3990 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Un router puede ser:";
 choices[34]= new Array();
 choices[34][0] = "S&oacute;lo un dispositivo hardware.";
 choices[34][1] = "S&oacute;lo un dispositivo software.";
 choices[34][2] = "Un dispositivo software, hardware o bien una combinaci&oacute;n de ellos.";
 choices[34][3] = "Ninguna de las anteriores es cierta";
 answers[34] = choices[34][2];
 units[34] = "102";
 comments[34] = "Id Pregunta: 3990. ";


//  Id pregunta: 4003 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l es el significado del acr&oacute;nimo DOCSIS?";
 choices[35]= new Array();
 choices[35][0] = "Data Over Coaxial Service Interface Specification";
 choices[35][1] = "Data Over Cable Service Internet Specification";
 choices[35][2] = "Data Over Coaxial Service Internet Specification";
 choices[35][3] = "Data Over Cable Service Interface Specification";
 answers[35] = choices[35][3];
 units[35] = "105";
 comments[35] = "Id Pregunta: 4003. ";


//  Id pregunta: 4057 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Existen experiencias de uso real de VoIP en Espa&ntilde;a";
 choices[36]= new Array();
 choices[36][0] = "Si";
 choices[36][1] = "No";
 choices[36][2] = "Si, pero solo en las AAPP";
 choices[36][3] = "No, porque a&uacute;n no hay regulaci&oacute;n que lo permita";
 answers[36] = choices[36][0];
 units[36] = "112";
 comments[36] = "Id Pregunta: 4057. ";


//  Id pregunta: 4147 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Cada uno de los equipos que, dentro de un servicio distribuido de detecci&oacute;n de intrusi&oacute;n, se instalan en los diferentes segmentos de red se llama";
 choices[37]= new Array();
 choices[37][0] = "cortafuegos";
 choices[37][1] = "sonda";
 choices[37][2] = "honeypot";
 choices[37][3] = "basti&oacute;n";
 answers[37] = choices[37][1];
 units[37] = "111";
 comments[37] = "Id Pregunta: 4147. NULL";


//  Id pregunta: 4184 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Utilizando los 4 pares de un cable categor&iacute;a 5 puedo transmitir";
 choices[38]= new Array();
 choices[38][0] = "Gigabit ethernet";
 choices[38][1] = "2 transmisiones Fast Ethernet simultaneas";
 choices[38][2] = "Fast Ethernet";
 choices[38][3] = "todas las anteriores";
 answers[38] = choices[38][3];
 units[38] = "99";
 comments[38] = "Id Pregunta: 4184. ";


//  Id pregunta: 4189 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Para listar las conexiones TCP/UDP abiertas en un servidor utilizo el comando";
 choices[39]= new Array();
 choices[39][0] = "ping";
 choices[39][1] = "netstat";
 choices[39][2] = "tracert o traceroute";
 choices[39][3] = "ipconfig / ifconfig";
 answers[39] = choices[39][1];
 units[39] = "100";
 comments[39] = "Id Pregunta: 4189. ";


//  Id pregunta: 4191 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Para ver los saltos en la ruta entre dos servidores utilizo el comando";
 choices[40]= new Array();
 choices[40][0] = "ping";
 choices[40][1] = "netstat";
 choices[40][2] = "tracert o traceroute";
 choices[40][3] = "ipconfig / ifconfig";
 answers[40] = choices[40][2];
 units[40] = "50";
 comments[40] = "Id Pregunta: 4191. ";


//  Id pregunta: 4194 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  No es cierto que la herramienta Nagios";
 choices[41]= new Array();
 choices[41][0] = "Puede monitorizar servicios TCP";
 choices[41][1] = "Es una alternativa a Bigbrother";
 choices[41][2] = "Puede utilizar agentes distintos a SNMP";
 choices[41][3] = "Puede ser instalada en Windows";
 answers[41] = choices[41][3];
 units[41] = "104";
 comments[41] = "Id Pregunta: 4194. ";


//  Id pregunta: 4198 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  El estandar 802.11n se centra en";
 choices[42]= new Array();
 choices[42][0] = "Calidad de Servicio (QoS) sobre redes WLAN";
 choices[42][1] = "Autenticaci&oacute;n y cifrado para redes WLAN";
 choices[42][2] = "Nueva generaci&oacute;n de WLAN de redes de, al menos, 100 Mbps (en proceso de definici&oacute;n en 2006)";
 choices[42][3] = "Intercambio de informaci&oacute;n de capacidad entre clientes y puntos de acceso en redes WLAN";
 answers[42] = choices[42][2];
 units[42] = "107";
 comments[42] = "Id Pregunta: 4198. NULL";


//  Id pregunta: 4207 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  La fibra &oacute;ptica monomodo m&aacute;s popular es";
 choices[43]= new Array();
 choices[43][0] = "9/125 um";
 choices[43][1] = "62.5/125 um";
 choices[43][2] = "50/125 um";
 choices[43][3] = "100/140 um";
 answers[43] = choices[43][0];
 units[43] = "99";
 comments[43] = "Id Pregunta: 4207. ";


//  Id pregunta: 4210 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  El t&eacute;rmino JigSaw se refiere a:";
 choices[44]= new Array();
 choices[44][0] = "Una plataforma de servidor Web basada en Java, cuyo principal objetivo es hacer demostraciones de nuevos protocolos y, al mismo tiempo, ofrecer una base de experimentaci&oacute;n en el &aacute;rea de software para servidor";
 choices[44][1] = "Una interfaz de programaci&oacute;n de aplicaciones (API) Web de cliente, de uso com&uacute;n y alta modularidad, cuyo principal prop&oacute;sito es el de servir como herramienta de pruebas para experimentos con protocolos";
 choices[44][2] = "Un lenguaje est&aacute;ndar utilizado por los componentes que intervienen en un sistema multimodal para comunicarse";
 choices[44][3] = "Un lenguaje de etiquetado utilizado para crear presentaciones multimedia din&aacute;micas a trav&eacute;s de la sincronizaci&oacute;n en tiempo y espacio de diversos elementos como audio, v&iacute;deo, texto y gr&aacute;ficos";
 answers[44] = choices[44][0];
 units[44] = "116";
 comments[44] = "Id Pregunta: 4210. ";


//  Id pregunta: 4220 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  Especifique de las siguientes normas aquella que pertenezca al nivel f&iacute;sico del modelo OSI";
 choices[45]= new Array();
 choices[45][0] = "X.214-ISO 8072";
 choices[45][1] = "RS-449";
 choices[45][2] = "X.215- ISO 8072";
 choices[45][3] = "802.3";
 answers[45] = choices[45][1];
 units[45] = "100";
 comments[45] = "Id Pregunta: 4220. NULL";


//  Id pregunta: 4223 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  Indique cual de las siguientes afirmaciones con relaci&oacute;n a la RDSI (Red Digital de Servicios Integrados) no es correcta:";
 choices[46]= new Array();
 choices[46][0] = "Utiliza el sistema de se&ntilde;alizaci&oacute;n por canal comun CCITT n&ordm; 7 (CCS7)";
 choices[46][1] = "Emplea el canal D para el transporte de se&ntilde;alizaci&oacute;n mediante conmutaci&oacute;n de paquetes";
 choices[46][2] = "La velocidad de los canales B tanto en los accesos b&aacute;sicos como en los primarios es de 64 Kbps";
 choices[46][3] = "La velocidad de los canales D tanto en los accesos b&aacute;sicos como en los primarios es de 16 Kbps";
 answers[46] = choices[46][3];
 units[46] = "103";
 comments[46] = "Id Pregunta: 4223. ";


//  Id pregunta: 4233 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  Cuando un navegador se conecta por primera vez a un servidor Web que usa cookies permanentes para identificaci&oacute;n:";
 choices[47]= new Array();
 choices[47][0] = "El navegador env&iacute;a al servidor, junto a la primera petici&oacute;n, una cookie con un n&uacute;mero identificativo generado por el navegador";
 choices[47][1] = "El servidor cuando entrega la primera p&aacute;gina html al navegador, escribe tambi&eacute;n una cookie en el disco del equipo del navegador";
 choices[47][2] = "El navegador, cuando recibe por primera vez una  p&aacute;gina del servidor, escribe en el disco de su equipo una cookie con el n&uacute;mero de identificaci&oacute;n enviado por el servidor";
 choices[47][3] = "La almacena en la cach&eacute; del navegador por ser una cookie permanente";
 answers[47] = choices[47][2];
 units[47] = "114";
 comments[47] = "Id Pregunta: 4233. ";


//  Id pregunta: 4647 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  De que canales y en que numero esta compuesto un enlace primario RDSI silo contratamos en Europa:";
 choices[48]= new Array();
 choices[48][0] = "2B+D";
 choices[48][1] = "30B+2D (el D a 64 Kbps)";
 choices[48][2] = "30B+D (el D a 16 Kbps)";
 choices[48][3] = "30B+D (el D a 64 Kbps)";
 answers[48] = choices[48][3];
 units[48] = "107";
 comments[48] = "Id Pregunta: 4647. NULL";


//  Id pregunta: 4718 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  Una de las ventajas del protocolo PPP respecto al SLIP es:";
 choices[49]= new Array();
 choices[49][0] = "Permite conexiones s&iacute;ncronas y as&iacute;ncronas";
 choices[49][1] = "Permite varios protocolos de red sobre &eacute;l";
 choices[49][2] = "Permite crear redes privadas virtuales";
 choices[49][3] = "Todas las respuestas son correctas";
 answers[49] = choices[49][3];
 units[49] = "100";
 comments[49] = "Id Pregunta: 4718. Examen 2006 JCYL";


//  Id pregunta: 4856 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  En el entorno de trabajo necesario para desarrollar applets, el m&eacute;todo init de la clase Applet:";
 choices[50]= new Array();
 choices[50][0] = "Es invocado autom&aacute;ticamente despu&eacute;s de que Java llame al m&eacute;todo start";
 choices[50][1] = "Se utiliza siempre que el applet necesita inicializaci&oacute;n";
 choices[50][2] = "Es invocado autom&aacute;ticamente cuando el usuario sale de la p&aacute;gina en la que se encuentra el applet";
 choices[50][3] = "S&oacute;lo es invocado cuando el navegador se cierra normalmente";
 answers[50] = choices[50][1];
 units[50] = "116";
 comments[50] = "Id Pregunta: 4856. ";


//  Id pregunta: 4974 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el protocolo Frame Relay es correcta?:";
 choices[51]= new Array();
 choices[51][0] = "Frame Relay tiene el grave inconveniente de su importante &ldquo;overhead&rdquo;, producido por los mecanismos de controlde errores y de flujo.";
 choices[51][1] = "Las especificaciones de Frame Relay fueron definidas por ANSI, fundamentalmente como medida para superar lalentitud de X.25, eliminando reconocimiento nodo a nodo.";
 choices[51][2] = "El protocolo Frame Relay opera en la capa 3 e inferiores del modelo OSI, y mediante la conmutaci&oacute;n de paquetes,a trav&eacute;s de una red de conmutadores, entre identificadores de conexi&oacute;n.";
 choices[51][3] = "Frame Relay es el nombre consuetudinario del protocolo ITU X-75.";
 answers[51] = choices[51][1];
 units[51] = "109";
 comments[51] = "Id Pregunta: 4974. Examen TIC B 2007";


//  Id pregunta: 5045 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  En el modelo de referencia fijado por Open System Interconection, de la International Standars Organization, el nivelque realiza la funci&oacute;n de seleccionar la mejor ruta para la comunicaci&oacute;n entre m&aacute;quinas ubicadas en redesgeogr&aacute;ficas distintas es el:";
 choices[52]= new Array();
 choices[52][0] = "Nivel 2";
 choices[52][1] = "Nivel 3";
 choices[52][2] = "Nivel 4";
 choices[52][3] = "Nivel 5";
 answers[52] = choices[52][1];
 units[52] = "100";
 comments[52] = "Id Pregunta: 5045. Examen TIC A 2007";


//  Id pregunta: 5303 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  En Frame Relay, el par&aacute;metro que indica la velocidad media de transmisi&oacute;n, que la red se compromete a transmitir como m&iacute;nimo es:";
 choices[53]= new Array();
 choices[53][0] = "CIR";
 choices[53][1] = "Bc";
 choices[53][2] = "PIR";
 choices[53][3] = "Be";
 answers[53] = choices[53][0];
 units[53] = "109";
 comments[53] = "Id Pregunta: 5303. ";


//  Id pregunta: 5571 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes opciones NO es necesaria para que una red ethernet pueda funcionar en modo d&uacute;plex completo?";
 choices[54]= new Array();
 choices[54][0] = "El medio f&iacute;sico permite la transmisi&oacute;n d&uacute;plex completa";
 choices[54][1] = "La distancia entre las dos estaciones es menor de 50 m";
 choices[54][2] = "Solo hay dos estaciones conectadas entre s&iacute;";
 choices[54][3] = "Las tarjetas de red de ambos equipos soportan el funcionamiento en modo d&uacute;plex completo";
 answers[54] = choices[54][1];
 units[54] = "102";
 comments[54] = "Id Pregunta: 5571. ";


//  Id pregunta: 5877 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes afirmaciones es CIERTA para los sistemas de comunicaciones m&oacute;viles?:";
 choices[55]= new Array();
 choices[55][0] = "La implementaci&oacute;n de Clase 1 de WTLS para WAP proporciona autenticaci&oacute;n terminal-servidor";
 choices[55][1] = "Con WTLS la negociaci&oacute;n de los datagramas se hace mediante UDP";
 choices[55][2] = "WTLS no admite la utilizaci&oacute;n de algoritmos criptogr&aacute;ficos basados en curvas el&iacute;pticas";
 choices[55][3] = "WML es el lenguaje de navegaci&oacute;n para terminales m&oacute;viles WAP";
 answers[55] = choices[55][3];
 units[55] = "108";
 comments[55] = "Id Pregunta: 5877. MAP 2008 A1";


//  Id pregunta: 5908 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  En referencia a la arquitectura Bluetooth, seleccione la opci&oacute;n correcta de entre las que aparecen a continuaci&oacute;n:";
 choices[56]= new Array();
 choices[56][0] = "La unidad b&aacute;sica de un sistema Bluetooth es una scatternet, que consta de un nodo maestro y hasta siete nodos esclavos activos a una distancia de 10 metros";
 choices[56][1] = "La unidad b&aacute;sica de un sistema Bluetooth es una piconet, que consta de un nodo maestro y hasta siete nodos esclavos activos a una distancia de 10 metros";
 choices[56][2] = "La unidad b&aacute;sica de un sistema Bluetooth es una scatternet, que consta de uno o m&aacute;s nodos maestros y m&aacute;s de siete nodos esclavos a una distancia de 10 metros";
 choices[56][3] = "La unidad b&aacute;sica de un sistema Bluetooth es una piconet, que consta de uno o m&aacute;s nodos maestro y mas de siete nodos esclavos a una distancia de 10 metros";
 answers[56] = choices[56][1];
 units[56] = "107";
 comments[56] = "Id Pregunta: 5908. MAP 2008 A1";


//  Id pregunta: 5911 AÃ±o de creación de pregunta: 2009-01-01
 questions[57]= "58)  Los fabricantes e investigadores hacen referencia a diversos factores determinantes en la calidad de la trasmisi&oacute;n de la voz; de entre los siguientes, determine el &quot;cr&iacute;tico&quot; para aplicaciones de tiempo real como la voz y el video sobre IP:";
 choices[57]= new Array();
 choices[57][0] = "Jitter";
 choices[57][1] = "Throughput";
 choices[57][2] = "Delay";
 choices[57][3] = "Packet Loss";
 answers[57] = choices[57][0];
 units[57] = "109";
 comments[57] = "Id Pregunta: 5911. MAP 2008 A1";


//  Id pregunta: 6348 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Qu&eacute; es MySpace?";
 choices[58]= new Array();
 choices[58][0] = "Una red social";
 choices[58][1] = "Un servicio FTP";
 choices[58][2] = "Un servicio de mensajer&iacute;a instant&aacute;nea";
 choices[58][3] = "Un escritorio virtual";
 answers[58] = choices[58][0];
 units[58] = "120";
 comments[58] = "Id Pregunta: 6348. NULL";


//  Id pregunta: 6481 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes NO es un algoritmo de enrutamiento?";
 choices[59]= new Array();
 choices[59][0] = "OSPF";
 choices[59][1] = "RIP";
 choices[59][2] = "BGP";
 choices[59][3] = "RARP";
 answers[59] = choices[59][3];
 units[59] = "102";
 comments[59] = "Id Pregunta: 6481. Castilla La Mancha 2009";


//  Id pregunta: 6561 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  GSM se caracteriza por";
 choices[60]= new Array();
 choices[60][0] = "Enlace ascendente 880-905 MHz";
 choices[60][1] = "Enlace ascendente 890-915 MHz";
 choices[60][2] = "Enlace descendente 890-915 MHz";
 choices[60][3] = "Todas las respuestas anteriores son incorrectos";
 answers[60] = choices[60][1];
 units[60] = "108";
 comments[60] = "Id Pregunta: 6561. NULL";


//  Id pregunta: 7274 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Entre las ventajas de la virtualizaci&oacute;n de hardware no se encuentra";
 choices[61]= new Array();
 choices[61][0] = "La reducci&oacute;n de costes de administraci&oacute;n";
 choices[61][1] = "La eficiencia energ&eacute;tica";
 choices[61][2] = "El incremento de rendimiento de las aplicaciones";
 choices[61][3] = "Mayor aprovechamiento de los servidores";
 answers[61] = choices[61][2];
 units[61] = "119";
 comments[61] = "Id Pregunta: 7274. NULL";


//  Id pregunta: 8209 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  El establecimiento de un directorio de direcciones de red IP, a partir del cual cada entidad u organismo de la AGE pueda establecer de manera independiente sus planes de numeraci&oacute;n IP, se incluye en:";
 choices[62]= new Array();
 choices[62][0] = "El Plan AVANZA.";
 choices[62][1] = "El Plan de direccionamiento e interconexi&oacute;n de redes en la Administraci&oacute;n.";
 choices[62][2] = "El Plan Estrat&eacute;gico para el desarrollo de la administraci&oacute;n electr&oacute;nica.";
 choices[62][3] = "El Plan de evaluaci&oacute;n de impacto de la Ley 11/2007.";
 answers[62] = choices[62][1];
 units[62] = "44";
 comments[62] = "Id Pregunta: 8209. Examen TIC A1 2010";


//  Id pregunta: 8288 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Un agente SNMP env&iacute;a traps a un sistema administrador de red a trav&eacute;s del puerto: ";
 choices[63]= new Array();
 choices[63][0] = "162.";
 choices[63][1] = "126.";
 choices[63][2] = "161.";
 choices[63][3] = "25.";
 answers[63] = choices[63][0];
 units[63] = "104";
 comments[63] = "Id Pregunta: 8288. Examen TIC A2 2010";


//  Id pregunta: 8307 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Un documento firmado digitalmente incluye la huella digital:";
 choices[64]= new Array();
 choices[64][0] = "De la clave del firmante, cifrada con su clave p&uacute;blica.";
 choices[64][1] = "De la clave p&uacute;blica del firmante, cifrada con su clave privada.";
 choices[64][2] = "Del documento firmado, cifrada con la clave del firmante.";
 choices[64][3] = "Del documento firmado, cifrada con la clave p&uacute;blica del firmante.";
 answers[64] = choices[64][2];
 units[64] = "111";
 comments[64] = "Id Pregunta: 8307. Examen TIC A2 2010";


//  Id pregunta: 8319 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  De las siguientes opciones, se&ntilde;ale aquella que representa la m&aacute;xima velocidad a la que un dispositivo inal&aacute;mbrico puede enviar datos conforme al est&aacute;ndar IEEE indicado:";
 choices[65]= new Array();
 choices[65][0] = "802.11a usando DSSS, a 11 Mbps. ";
 choices[65][1] = "802.11a usando DSSS, a 54 Mbps. ";
 choices[65][2] = "802.11b usando OFDM, a 54 Mbps";
 choices[65][3] = "802.11g usando OFDM, a 54 Mbps.";
 answers[65] = choices[65][3];
 units[65] = "107";
 comments[65] = "Id Pregunta: 8319. Examen TIC A2 2010";


//  Id pregunta: 8355 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  La compa&ntilde;&iacute;a que desarroll&oacute; la tecnolog&iacute;a JSP es:";
 choices[66]= new Array();
 choices[66][0] = "Sun Microsystems.";
 choices[66][1] = "Microsoft.";
 choices[66][2] = "Google.";
 choices[66][3] = "IBM.";
 answers[66] = choices[66][0];
 units[66] = "116";
 comments[66] = "Id Pregunta: 8355. Examen TIC A2 2010";


//  Id pregunta: 8385 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes protocolos de enrutamiento NO soporta VLSM (Variable Length Subnet Mask - M&aacute;scara de subred de tama&ntilde;o variable)?:";
 choices[67]= new Array();
 choices[67][0] = "RIPv2.";
 choices[67][1] = "EIGRP.";
 choices[67][2] = "IGRP.";
 choices[67][3] = "OSPF.";
 answers[67] = choices[67][2];
 units[67] = "112,102";
 comments[67] = "Id Pregunta: 8385. Examen TIC A2 2010";


//  Id pregunta: 8525 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Los routers para filtrado de paquetes (&quot;packet filtering&quot;):";
 choices[68]= new Array();
 choices[68][0] = "Son cortafuegos (firewalls) que operan en el nivel de aplicaci&oacute;n en su modalidad &quot;stateful inspection&quot;.";
 choices[68][1] = "Son firewalls que operan en el nivel de aplicaci&oacute;n en su modalidad &quot;stateless inspection&quot;.";
 choices[68][2] = "No son firewalls, sino dispositivos de encaminamiento (&quot;routing&quot;) que se pueden conectar a un cortafuegos como complemento de &eacute;ste";
 choices[68][3] = "Son firewalls que operan en el nivel de red.";
 answers[68] = choices[68][3];
 units[68] = "111";
 comments[68] = "Id Pregunta: 8525. Examen TIC A2 2010 interna";


//  Id pregunta: 8671 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Con respecto a los est&aacute;ndares de redes inal&aacute;mbricas &iquest;cu&aacute;l de las siguientes combinaciones es correcta?";
 choices[69]= new Array();
 choices[69][0] = "802.11a-2.4Ghz";
 choices[69][1] = "802.11b -2.4Ghz";
 choices[69][2] = "802.11g-5Ghz";
 choices[69][3] = "802.11x-2.4Ghz";
 answers[69] = choices[69][1];
 units[69] = "107";
 comments[69] = "Id Pregunta: 8671. Examen UPM A2 2011";


//  Id pregunta: 8674 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes mensajes del protocolo multicast PIM en modo disperso (PIM-SM) se env&iacute;a en modo unicast?";
 choices[70]= new Array();
 choices[70][0] = "Prune.";
 choices[70][1] = "Join.";
 choices[70][2] = "Register.";
 choices[70][3] = "Stop.";
 answers[70] = choices[70][2];
 units[70] = "101";
 comments[70] = "Id Pregunta: 8674. Examen UPM A2 2011";


//  Id pregunta: 8773 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Se ha puesto un servicio de DHCP en una subred. &iquest;Es posible que otra subred pueda usar el servicio DHCP y que este servicio asigne direcciones a los clientes de ambas?";
 choices[71]= new Array();
 choices[71][0] = "No, porque solo funciona con broadcast las peticiones.";
 choices[71][1] = "Si, porque las peticiones son unicast y llegar&aacute;n al servidor de DHCP";
 choices[71][2] = "Es posible pero hace falta un DHCP Relay.";
 choices[71][3] = "Si, con solo configurar el servidor DHCP para servir a la otra subred.";
 answers[71] = choices[71][2];
 units[71] = "100";
 comments[71] = "Id Pregunta: 8773. Examen UPM A2 2011";


//  Id pregunta: 8778 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Las actualizaciones de zonas entre servidores DNS se tienen lugar usando los puertos:";
 choices[72]= new Array();
 choices[72][0] = "53 TCP";
 choices[72][1] = "453 TCP";
 choices[72][2] = "456 UDP";
 choices[72][3] = "53 UDP";
 answers[72] = choices[72][0];
 units[72] = "100, 112";
 comments[72] = "Id Pregunta: 8778. Examen UPM A2 2011";


//  Id pregunta: 8802 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Qu&eacute; es un Scriptlet JSP?";
 choices[73]= new Array();
 choices[73][0] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;&mdash; y --&gt;";
 choices[73][1] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;* y *&gt;";
 choices[73][2] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;+ y +&gt;";
 choices[73][3] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;% y %&gt;";
 answers[73] = choices[73][3];
 units[73] = "116";
 comments[73] = "Id Pregunta: 8802. Examen UPM A2 2011";


//  Id pregunta: 9349 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Sobre los canales no estructurados en Europa:";
 choices[74]= new Array();
 choices[74][0] = "El H11 trabaja a 384 kbps agrupando 6 canales de 64 kbps";
 choices[74][1] = "El H0 trabaja a 1536 kbps, agrupando 24 canales de 64 kbps";
 choices[74][2] = "El H11 trabaja a 1920 Kbps, agrupando 30 canales de 64 kbps";
 choices[74][3] = "El H0 trabaja 384 kbps, agrupando 6 canales de 64 kbps";
 answers[74] = choices[74][3];
 units[74] = "103";
 comments[74] = "Id Pregunta: 9349. Pag. 6 astic 2011";


//  Id pregunta: 9469 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  En relaci&oacute;n al est&aacute;ndar X.400 indique la afirmaci&oacute;n verdadera";
 choices[75]= new Array();
 choices[75][0] = "Tiene que funcionar necesariamente sobre redes IP";
 choices[75][1] = "El Subsistema de transferencia de mensajes (MTS) contempla la definici&oacute;n de agentes de usuario (UA) que son los componentes l&oacute;gicos que interact&uacute;an con el usuario para el env&iacute;o y recepci&oacute;n de los mensajes electr&oacute;nicos";
 choices[75][2] = "Una MPDU puede ser de tres tipos: sondas, informes de notificaci&oacute;n o entrega y el mensaje en s&iacute;";
 choices[75][3] = "P2 es el protocolo definido para la comunicaci&oacute;n entre el MTA y el agente del usuario (UA) a trav&eacute;s del elemento MS o repositorio de mensajes";
 answers[75] = choices[75][2];
 units[75] = "106";
 comments[75] = "Id Pregunta: 9469. ";


//  Id pregunta: 9507 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  En el patr&oacute;n MVC, &iquest;d&oacute;nde situar&iacute;amos un contenedor EJB?";
 choices[76]= new Array();
 choices[76][0] = "En el modelo";
 choices[76][1] = "En la vista";
 choices[76][2] = "En el controlador";
 choices[76][3] = "En todos los anteriores";
 answers[76] = choices[76][0];
 units[76] = "116";
 comments[76] = "Id Pregunta: 9507. NULL";


//  Id pregunta: 9767 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  El ataque a SSL/TLS que permite extraer informaci&oacute;n sobre los tokens de login, email, etc en 30 segundos se llama:";
 choices[77]= new Array();
 choices[77][0] = "Beast Attack";
 choices[77][1] = "Crime";
 choices[77][2] = "Breach";
 choices[77][3] = "No existe dicho ataque";
 answers[77] = choices[77][2];
 units[77] = "111";
 comments[77] = "Id Pregunta: 9767. NULL";


//  Id pregunta: 9850 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  El proceso mediante el cual un usuario se autentica una vez en el sistema de la organizaci&oacute;n y es capaz de acceder al resto de servicios se denomina:";
 choices[78]= new Array();
 choices[78][0] = "Single Login On";
 choices[78][1] = "Simple Login On";
 choices[78][2] = "Single Sign On";
 choices[78][3] = "Simple Sign On";
 answers[78] = choices[78][2];
 units[78] = "118";
 comments[78] = "Id Pregunta: 9850. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9931 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  En el modelo OSI, el nivel clave para el sistema de seguridad es:";
 choices[79]= new Array();
 choices[79][0] = "N3.";
 choices[79][1] = "N4.";
 choices[79][2] = "N6.";
 choices[79][3] = "N7.";
 answers[79] = choices[79][2];
 units[79] = "100";
 comments[79] = "Id Pregunta: 9931. NULL";


//  Id pregunta: 10132 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  La principal mejora de SNMPv3 es:";
 choices[80]= new Array();
 choices[80][0] = "Mayor seguridad";
 choices[80][1] = "Mayor rendimiento";
 choices[80][2] = "Mayor eficacia";
 choices[80][3] = "Mayor simplicidad";
 answers[80] = choices[80][0];
 units[80] = "104";
 comments[80] = "Id Pregunta: 10132. ";


//  Id pregunta: 10135 AÃ±o de creación de pregunta: 2010-01-01
 questions[81]= "82)  Conforme a DOCSIS y EuroDOCSIS los canales de cable tienen un ancho de:";
 choices[81]= new Array();
 choices[81][0] = "8 MHz en Europa";
 choices[81][1] = "6 MHz en Norte Am&eacute;rica ";
 choices[81][2] = "Las dos anteriores son ciertas";
 choices[81][3] = "Ninguno de los anteriores";
 answers[81] = choices[81][2];
 units[81] = "105";
 comments[81] = "Id Pregunta: 10135. ";


//  Id pregunta: 10506 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cual de los siguientes no es un tipo de conector RJ?";
 choices[82]= new Array();
 choices[82][0] = "RJ-12";
 choices[82][1] = "RJ-45";
 choices[82][2] = "RJ-25";
 choices[82][3] = "Todos los anteriores son tipos de conectores RJ";
 answers[82] = choices[82][3];
 units[82] = "99";
 comments[82] = "Id Pregunta: 10506. ";


//  Id pregunta: 10508 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En la arquitectura X.400, &iquest;cual es el protocolo de comunicaci&oacute;n entre los Agentes de Usuario y el Repositorio de Mensajes?";
 choices[83]= new Array();
 choices[83][0] = "P2";
 choices[83][1] = "P7";
 choices[83][2] = "P3";
 choices[83][3] = "P1";
 answers[83] = choices[83][1];
 units[83] = "106";
 comments[83] = "Id Pregunta: 10508. http://www.x400.org/US/X400_Protocols.htm";


//  Id pregunta: 10539 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Se&ntilde;ale la respuesta incorrecta respecto a MPLS y VPLS:";
 choices[84]= new Array();
 choices[84][0] = "RSVP-TE y LDP son protocolos de establecimiento de camino";
 choices[84][1] = "en MPLS el camino establecido es bidireccional";
 choices[84][2] = "VPLS permite conexiones muchos a muchos mientras que MPLS es punto a punto";
 choices[84][3] = "el campo de etiqueta en MPLS es de 20 bits";
 answers[84] = choices[84][1];
 units[84] = "100";
 comments[84] = "Id Pregunta: 10539. NULL";


//  Id pregunta: 10655 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Indique cu&aacute;l de estos est&aacute;ndares especifica las normas de funcionamiento de la capa f&iacute;sica y de enlace en una WLAN:";
 choices[85]= new Array();
 choices[85][0] = "802.11b";
 choices[85][1] = "802.11g";
 choices[85][2] = "802.11ac";
 choices[85][3] = "Todos los anteriores.";
 answers[85] = choices[85][3];
 units[85] = "107.111";
 comments[85] = "Id Pregunta: 10655. ";


//  Id pregunta: 10912 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  La red de acceso especificada para la tecnolog&iacute;a de comunicaciones m&oacute;viles LTE (Long Term Evolution) y que utiliza la tecnolog&iacute;a OFDMA para la comunicaci&oacute;n con los equipos de los usuarios se llama:";
 choices[86]= new Array();
 choices[86][0] = "E-UTRAN";
 choices[86][1] = "FFTN";
 choices[86][2] = "LMDS";
 choices[86][3] = "WIMAX";
 answers[86] = choices[86][0];
 units[86] = "108";
 comments[86] = "Id Pregunta: 10912. Examen GSI 2014";


//  Id pregunta: 10942 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  En relaci&oacute;n con las soluciones MDM (Mobile Device Management), se&ntilde;ale la respuesta correcta:";
 choices[87]= new Array();
 choices[87][0] = "En ning&uacute;n caso contemplan la tendencia BYOD (Bring Your Own Device) que permite a los usuarios de una organizaci&oacute;n hacer uso de sus dispositivos m&oacute;viles personales para el acceso al entorno, servicios y datos corporativos.";
 choices[87][1] = "Sirven para gestionar la pol&iacute;tica de seguridad establecida en la organizaci&oacute;n no siendo adecuados para el inventario de dispositivos m&oacute;viles.";
 choices[87][2] = "Los fabricantes de las principales plataformas m&oacute;viles no proporcionan soluciones MDM por lo que hay que recurrir siempre a soluciones de terceros.";
 choices[87][3] = "Permiten la monitorizaci&oacute;n autom&aacute;tica de los dispositivos m&oacute;viles y la generaci&oacute;n de alertas al incumplirse la pol&iacute;tica de seguridad establecida en la organizaci&oacute;n.";
 answers[87] = choices[87][3];
 units[87] = "108";
 comments[87] = "Id Pregunta: 10942. TIC A1 AGE 2014";


//  Id pregunta: 11183 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;En qu&eacute; banda transmite UMTS?";
 choices[88]= new Array();
 choices[88][0] = "1.9-2.1 GHz";
 choices[88][1] = "2.4 GHz";
 choices[88][2] = "5 GHz";
 choices[88][3] = "10-66 GHz";
 answers[88] = choices[88][0];
 units[88] = "108";
 comments[88] = "Id Pregunta: 11183. ";


//  Id pregunta: 11312 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Se&ntilde;ale de entre los siguientes, cu&aacute;l no es un ataque en una red";
 choices[89]= new Array();
 choices[89][0] = "Ping de la muerte";
 choices[89][1] = "ARP poisoning";
 choices[89][2] = "Smurf";
 choices[89][3] = "Snicker";
 answers[89] = choices[89][3];
 units[89] = "111";
 comments[89] = "Id Pregunta: 11312. ";


//  Id pregunta: 11409 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Indique la afirmaci&oacute;n INCORRECTA seg&uacute;n la Ley 9/2014:";
 choices[90]= new Array();
 choices[90][0] = "Se regular&aacute; el derecho a acceder a los servicios de emergencia de forma gratuita.";
 choices[90][1] = "Se regular&aacute; el derecho a la continuidad del servicio.";
 choices[90][2] = "Se regular&aacute; el derecho a la utilizaci&oacute;n del servicio de contestador autom&aacute;tico de llamadas.";
 choices[90][3] = "Se regular&aacute; el derecho a la facturaci&oacute;n detallada, clara y sin errores.";
 answers[90] = choices[90][2];
 units[90] = "110";
 comments[90] = "Id Pregunta: 11409. ";


//  Id pregunta: 11412 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de las siguientes NO es una facultad del gobierno para la administraci&oacute;n del espectro?";
 choices[91]= new Array();
 choices[91][0] = "La adecuada utilizaci&oacute;n del espectro radioel&eacute;ctrico mediante el empleo de equipos y aparatos.";
 choices[91][1] = "El procedimiento de determinaci&oacute;n, control e inspecci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica tolerable y que no supongan un peligro para la salud p&uacute;blica.";
 choices[91][2] = "La determinaci&oacute;n, potestad sancionadora e inspecci&oacute;n de niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica.";
 choices[91][3] = "El procedimiento para la elaboraci&oacute;n de los planes de utilizaci&oacute;n del espectro radioel&eacute;ctrico.";
 answers[91] = choices[91][3];
 units[91] = "110";
 comments[91] = "Id Pregunta: 11412. ";


//  Id pregunta: 11438 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de las siguientes cuestiones sobre la Ley 9/2014 es incorrecta respecto a los derechos de los usuarios?";
 choices[92]= new Array();
 choices[92][0] = "Derecho a acceder a los servicios de emergencias de forma gratuita.";
 choices[92][1] = "Derecho a la continuidad de servicio.";
 choices[92][2] = "Derecho a la facturaci&oacute;n detallada, clara y sin errores.";
 choices[92][3] = "Derecho al cambio de operador, con conservaci&oacute;n de los n&uacute;meros en el plazo de dos d&iacute;as laborables.";
 answers[92] = choices[92][3];
 units[92] = "110";
 comments[92] = "Id Pregunta: 11438. ";


//  Id pregunta: 11450 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de estos no es un derecho del usuario final?";
 choices[93]= new Array();
 choices[93][0] = "Cambio de operador.";
 choices[93][1] = "Acceder a servicios de emergencia gratuitamente.";
 choices[93][2] = "Desconexi&oacute;n de ciertos servicios.";
 choices[93][3] = "Impedir, bajo pago de tasa, la identificaci&oacute;n de su l&iacute;nea.";
 answers[93] = choices[93][3];
 units[93] = "110";
 comments[93] = "Id Pregunta: 11450. ";


//  Id pregunta: 11471 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n la Ley 9/2014, &iquest;qui&eacute;n establece las condiciones para la habilitaci&oacute;n del ejercicio de los derechos de uso del dominio p&uacute;blico radioel&eacute;ctrico?:";
 choices[94]= new Array();
 choices[94][0] = "MINETUR.";
 choices[94][1] = "CNMC.";
 choices[94][2] = "El Gobierno.";
 choices[94][3] = "La SETSI.";
 answers[94] = choices[94][2];
 units[94] = "110";
 comments[94] = "Id Pregunta: 11471. ";


//  Id pregunta: 11567 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Las cabeceras de MPLS";
 choices[95]= new Array();
 choices[95][0] = "Pueden reutilizar campos de cabeceras de otros protocolos.";
 choices[95][1] = "Emplean enrutamiento desde origen por conmutaci&oacute;n de paquetes.";
 choices[95][2] = "Los routers son los mismos que se emplean en cualquier red IP";
 choices[95][3] = "La b y c son correctas.";
 answers[95] = choices[95][0];
 units[95] = "100";
 comments[95] = "Id Pregunta: 11567. NULL";


//  Id pregunta: 11650 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  El protocolo TCP se encuentra especificado en:";
 choices[96]= new Array();
 choices[96][0] = "RFC 793";
 choices[96][1] = "RFC 739";
 choices[96][2] = "RFC 791";
 choices[96][3] = "RFC 719";
 answers[96] = choices[96][0];
 units[96] = "100";
 comments[96] = "Id Pregunta: 11650. ";


//  Id pregunta: 11651 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  En IPv6, la etiqueta de flujo tiene una longitud de:";
 choices[97]= new Array();
 choices[97][0] = "8 bits";
 choices[97][1] = "16 bits";
 choices[97][2] = "20 bits";
 choices[97][3] = "No existe dicha etiqueta";
 answers[97] = choices[97][2];
 units[97] = "100";
 comments[97] = "Id Pregunta: 11651. ";


//  Id pregunta: 11696 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Un ABR (Router frontera de &aacute;rea) de OSPF:";
 choices[98]= new Array();
 choices[98][0] = "Debe disponer de varias interfaces conectadas al area Backbone";
 choices[98][1] = "Es un enrutador con dos interfaces, cada una de ellas conectada a un area OSPF diferente";
 choices[98][2] = "Un ABR debe disponer de una interfaz conectada al &aacute;rea backbone, y otra conectada a otra &aacute;rea OSPF";
 choices[98][3] = "Basta con que disponga de una interfaz conectada al &aacute;rea Backbone de OSPF";
 answers[98] = choices[98][2];
 units[98] = "102";
 comments[98] = "Id Pregunta: 11696. NULL";


//  Id pregunta: 11722 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; metodo de acceso es utilizado para establecer conexiones remotas de linea de comandos, manteniendo el ID de usuario, la contrase&ntilde;a y los contenidos de la sesi&oacute;n de manera privada?";
 choices[99]= new Array();
 choices[99][0] = "Telnet";
 choices[99][1] = "Consola";
 choices[99][2] = "Puerto auxiliar";
 choices[99][3] = "SSH";
 answers[99] = choices[99][3];
 units[99] = "111";
 comments[99] = "Id Pregunta: 11722. NULL";


