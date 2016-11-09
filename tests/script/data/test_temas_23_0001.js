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

//  Id pregunta: 1440 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Comparando los sistemas de compresi&oacute;n de video:";
 choices[0]= new Array();
 choices[0][0] = "La complejidad de compresi&oacute;n es mayor en MPEG-x que en H.26x";
 choices[0][1] = "El retardo producido por H.26x es mayor que el producido por MPEG-x";
 choices[0][2] = "La eficiencia es mayor en los algoritmos H.26x que en los algoritmos MPEG-x";
 choices[0][3] = "Todas las respuestas anteriores son correctas";
 answers[0] = choices[0][0];
 units[0] = "109";
 comments[0] = "Id Pregunta: 1440. ";


//  Id pregunta: 2938 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En telefon&iacute;a m&oacute;vil GSM, &iquest;qu&eacute; bases de datos se utilizan para almacenar datos de cliente?";
 choices[1]= new Array();
 choices[1][0] = "VLR y HLR";
 choices[1][1] = "EIR y HLR";
 choices[1][2] = "MSC y VLR";
 choices[1][3] = "EIR y MSC";
 answers[1] = choices[1][0];
 units[1] = "108";
 comments[1] = "Id Pregunta: 2938. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2972 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  La tecnolog&iacute;a de acceso m&uacute;ltiple por divisi&oacute;n en c&oacute;digo de banda ancha denominada WCDMA, es utilizado por el sitema de telecomunicaciones m&oacute;vil?";
 choices[2]= new Array();
 choices[2][0] = "GPS";
 choices[2][1] = "ATM";
 choices[2][2] = "TNM";
 choices[2][3] = "UMTS";
 answers[2] = choices[2][3];
 units[2] = "108";
 comments[2] = "Id Pregunta: 2972. Examen Julio 2003";


//  Id pregunta: 3014 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no se corresponden con las de FR?";
 choices[3]= new Array();
 choices[3][0] = "Orientado a conexi&oacute;n";
 choices[3][1] = "no fiable";
 choices[3][2] = "sin garant&iacute;as de caudal m&iacute;nimo";
 choices[3][3] = "ninguna de las anteriores";
 answers[3] = choices[3][2];
 units[3] = "109";
 comments[3] = "Id Pregunta: 3014. ";


//  Id pregunta: 3016 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas de las redes GPRS es falsa?";
 choices[4]= new Array();
 choices[4][0] = "Alcanza velocidades de hasta 115kbps";
 choices[4][1] = "Conmutaci&oacute;n de paquetes";
 choices[4][2] = "Es orientado a conexi&oacute;n";
 choices[4][3] = "La tarificaci&oacute;n se produce por volumen de datos intercambiado";
 answers[4] = choices[4][2];
 units[4] = "108";
 comments[4] = "Id Pregunta: 3016. ";


//  Id pregunta: 3027 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  La tecnolog&iacute;a que se basa en el protocolo SWAP (shared wireless access protocol) y que tiene como objetivo la conectividad sin cables dentro del hogar se llama:";
 choices[5]= new Array();
 choices[5][0] = "Bluetooth";
 choices[5][1] = "HomeRF";
 choices[5][2] = "HiperLAN/2";
 choices[5][3] = "IrLMP";
 answers[5] = choices[5][1];
 units[5] = "107";
 comments[5] = "Id Pregunta: 3027. TAI 2004";


//  Id pregunta: 3126 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;C&oacute;mo se llama el est&aacute;ndar  existente para la integraci&oacute;n de LAN en ATM?:";
 choices[6]= new Array();
 choices[6][0] = "LANE";
 choices[6][1] = "WLAN";
 choices[6][2] = "FDDI";
 choices[6][3] = "ANYLAN";
 answers[6] = choices[6][0];
 units[6] = "109";
 comments[6] = "Id Pregunta: 3126. ";


//  Id pregunta: 3127 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;C&oacute;mo se llaman los paquetes de longitud fija en ATM?:";
 choices[7]= new Array();
 choices[7][0] = "Pulsos";
 choices[7][1] = "Tramas";
 choices[7][2] = "Celdas";
 choices[7][3] = "R&aacute;fagas";
 answers[7] = choices[7][2];
 units[7] = "109";
 comments[7] = "Id Pregunta: 3127. ";


//  Id pregunta: 3222 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos de posicionamiento m&oacute;vil ofrece menor precisi&oacute;n?:";
 choices[8]= new Array();
 choices[8][0] = "A-GPS";
 choices[8][1] = "E-OTD";
 choices[8][2] = "CGI-TA";
 choices[8][3] = "TOA";
 answers[8] = choices[8][2];
 units[8] = "108";
 comments[8] = "Id Pregunta: 3222. ";


//  Id pregunta: 3246 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l es la relaci&oacute;n entre IMT-2000 y UMTS?:";
 choices[9]= new Array();
 choices[9][0] = "Es el mismo sistema";
 choices[9][1] = "UMTS forma parte de la familia IMT-2000";
 choices[9][2] = "IMT-2000 forma parte de la familia UMTS";
 choices[9][3] = "Son est&aacute;ndares diferentes";
 answers[9] = choices[9][1];
 units[9] = "108";
 comments[9] = "Id Pregunta: 3246. ";


//  Id pregunta: 3281 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; es el jitter?";
 choices[10]= new Array();
 choices[10][0] = "un dispositivo similar al router pero con mayor inteligencia a la hora de enrutar los paquetes";
 choices[10][1] = "la variabilidad del retardo en la transmisi&oacute;n de informaci&oacute;n por una red";
 choices[10][2] = "un envoltorio software a modo de cortafuegos que se instala sobre protocolos conocidos como TCP o FTP";
 choices[10][3] = "un hacker que se dedica a desenmascarar en la red a otros hackers";
 answers[10] = choices[10][1];
 units[10] = "109";
 comments[10] = "Id Pregunta: 3281. ";


//  Id pregunta: 3304 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Qu&eacute; protocolo se usa para enviar mensajes cortos en GSM por se&ntilde;alizaci&oacute;n SS7?:";
 choices[11]= new Array();
 choices[11][0] = "CAP";
 choices[11][1] = "MAP";
 choices[11][2] = "LAPD";
 choices[11][3] = "WAP";
 answers[11] = choices[11][1];
 units[11] = "108";
 comments[11] = "Id Pregunta: 3304. ";


//  Id pregunta: 3317 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Qu&eacute; velocidad de transmisi&oacute;n es m&aacute;s acorde con la tecnolog&iacute;a GPRS?:";
 choices[12]= new Array();
 choices[12][0] = "64 kbps";
 choices[12][1] = "256 kbps";
 choices[12][2] = "384 kbps";
 choices[12][3] = "115 kbps";
 answers[12] = choices[12][3];
 units[12] = "108";
 comments[12] = "Id Pregunta: 3317. ";


//  Id pregunta: 3326 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  A la funcionalidad que se cre&oacute; para permitir ofrecer servicios espec&iacute;ficos del operador de telefon&iacute;a m&oacute;vil, utilizando un mecanismo de transporte similar al de los servicios suplementarios del est&aacute;ndar GSM, se le denomina:";
 choices[13]= new Array();
 choices[13][0] = "VHE";
 choices[13][1] = "iMode";
 choices[13][2] = "USSD";
 choices[13][3] = "HSCSD";
 answers[13] = choices[13][2];
 units[13] = "107";
 comments[13] = "Id Pregunta: 3326. NULL";


//  Id pregunta: 3327 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  A la tecnolog&iacute;a que permite a un abonado disfrutar de servicios propios de su operadora cuando est&aacute; en itinerancia en otra operadora nacional o extranjera con la que se tengan acuerdos de roaming, se denomina:";
 choices[14]= new Array();
 choices[14][0] = "USSD";
 choices[14][1] = "CAMEL";
 choices[14][2] = "VHE";
 choices[14][3] = "I-Roaming";
 answers[14] = choices[14][1];
 units[14] = "107";
 comments[14] = "Id Pregunta: 3327. NULL";


//  Id pregunta: 3339 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Comparando las tecnolog&iacute;as ATM y Frame Relay:";
 choices[15]= new Array();
 choices[15][0] = "En ATM la informaci&oacute;n est&aacute; estructurada en celdas de tama&ntilde;o fijo de 53 octetos, de forma distinta a Frame Relay";
 choices[15][1] = "En Frame Relay no hay informaci&oacute;n de control de flujo, pero en ATM s&iacute;";
 choices[15][2] = "En ATM no hay informaci&oacute;n de control de errores, pero en Frame Relay s&iacute;";
 choices[15][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[15] = choices[15][0];
 units[15] = "109";
 comments[15] = "Id Pregunta: 3339. ";


//  Id pregunta: 3340 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Comparando WiFi y Bluetooth:";
 choices[16]= new Array();
 choices[16][0] = "Bluetooth es m&aacute;s lento que WiFi";
 choices[16][1] = "Bluetooth es m&aacute;s vers&aacute;til que WiFi";
 choices[16][2] = "Ambos operan en la banda de 2,4 GHz";
 choices[16][3] = "Todo lo anterior es cierto";
 answers[16] = choices[16][3];
 units[16] = "107";
 comments[16] = "Id Pregunta: 3340. NULL";


//  Id pregunta: 3342 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Con un &quot;m&oacute;dem&quot; RDSI, la llamada:";
 choices[17]= new Array();
 choices[17][0] = "Se establece cada vez que se intercambian datos";
 choices[17][1] = "Est&aacute; siempre establecida";
 choices[17][2] = "Puede ser configurable cu&aacute;ndo se quiere que se establezca la llamada";
 choices[17][3] = "Ninguna de las anteriores";
 answers[17] = choices[17][2];
 units[17] = "103,104,109";
 comments[17] = "Id Pregunta: 3342. ";


//  Id pregunta: 3346 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  CTI es:";
 choices[18]= new Array();
 choices[18][0] = "Computer Telephony Integration, el uso conjunto de telefon&iacute;a y ordenadores en el funcionamiento de un centro de atenci&oacute;n de llamadas";
 choices[18][1] = "el conjunto formado por la intranet, los tel&eacute;fonos de los puestos de ofim&aacute;tica y los ordenadores de los usuarios";
 choices[18][2] = "las siglas del Comit&eacute; para las Telecomunicaciones y la Innovaci&oacute;n, organismo sin &aacute;nimo de lucro encargado de observar las tendencias tecnol&oacute;gicas en telecomunicaciones y su aplicaci&oacute;n a los proyectos de la Administraci&oacute;n del Estado";
 choices[18][3] = "nada de lo anterior";
 answers[18] = choices[18][0];
 units[18] = "108";
 comments[18] = "Id Pregunta: 3346. ";


//  Id pregunta: 3414 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  GPS es:";
 choices[19]= new Array();
 choices[19][0] = "General Packet System, Sistema general de paquetes, protocolo de tipo general del que GPRS (General Packet Radio System) es su particularizaci&oacute;n para las comunicaciones v&iacute;a radio";
 choices[19][1] = "Gaussian Phase Shifting, cambio de fase gaussiano, tipo de modulaci&oacute;n usada com&uacute;nmente en los intercambios de informaci&oacute;n mediante t&eacute;cnicas telem&aacute;ticas";
 choices[19][2] = "Group Pulling System, sistema de ofrecimiento a grupos, muy usado en tecnolog&iacute;as de difusi&oacute;n multimedia (en especial TV digital y canales de internet) para enviar informaci&oacute;n a colectivos";
 choices[19][3] = "Global Positioning System, sistema de posicionamiento global, usado como m&eacute;todo de localizaci&oacute;n v&iacute;a radio y usando sat&eacute;lites para el c&aacute;lculo de las coordenadas";
 answers[19] = choices[19][3];
 units[19] = "108";
 comments[19] = "Id Pregunta: 3414. NULL";


//  Id pregunta: 3438 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  El proceso de multiplexaci&oacute;n:";
 choices[20]= new Array();
 choices[20][0] = "Permite a dispositivos ejecutar diferentes aplicaciones software al mismo tiempo";
 choices[20][1] = "Interconecta m&uacute;ltiples redes que usan diferentes medio f&iacute;sico de enlace";
 choices[20][2] = "Permite que la informaci&oacute;n de encaminamiento (routing) de diferentes protocolos se intercambie y se use para actualizar las tablas de encaminamiento";
 choices[20][3] = "Permite que datos de fuentes diferentes sean transmitidos simult&aacute;neamente sobre un &uacute;nico enlace";
 answers[20] = choices[20][3];
 units[20] = "99, 100, 105";
 comments[20] = "Id Pregunta: 3438. *: multiplexacion";


//  Id pregunta: 3443 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  El protocolo de aplicaciones inal&aacute;mbricas (WAP), para el acceso y creaci&oacute;n de informaci&oacute;n en internet, utiliza el lenguaje:";
 choices[21]= new Array();
 choices[21][0] = "HTML";
 choices[21][1] = "WML";
 choices[21][2] = "XML  ";
 choices[21][3] = "CGI";
 answers[21] = choices[21][1];
 units[21] = "108";
 comments[21] = "Id Pregunta: 3443. ";


//  Id pregunta: 3472 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  El servivio TMA, implantado por Telef&oacute;nica a principios de los a&ntilde;os 80, se basaba en tecnolog&iacute;a:";
 choices[22]= new Array();
 choices[22][0] = "TACS";
 choices[22][1] = "AMPS";
 choices[22][2] = "ETACS";
 choices[22][3] = "NMT";
 answers[22] = choices[22][3];
 units[22] = "108";
 comments[22] = "Id Pregunta: 3472. ";


//  Id pregunta: 3485 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  El uso de un sistema de intercambio electr&oacute;nico de datos (EDI):";
 choices[23]= new Array();
 choices[23][0] = "Exige la utilizaci&oacute;n de redes con una velocidad de transmisi&oacute;n media-alta";
 choices[23][1] = "Requiere la adquisici&oacute;n de un sistema propietario de correo electr&oacute;nico para la transferencia de informaci&oacute;n";
 choices[23][2] = "Permite el libre intercambio de texto, voz e imagen";
 choices[23][3] = "Constituye en s&iacute; mismo un entorno normalizado de intercambio de mensajes mediante un convenio";
 answers[23] = choices[23][3];
 units[23] = "109";
 comments[23] = "Id Pregunta: 3485. ";


//  Id pregunta: 3491 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En el acceso a l&iacute;neas y redes de comunicaciones, desde el bucle de abonado constituido por pares de cobre, la tecnolog&iacute;a que permite separar el flujo de datos del tr&aacute;fico telef&oacute;nico en origen, es:";
 choices[24]= new Array();
 choices[24][0] = "RDSI";
 choices[24][1] = "ADSL";
 choices[24][2] = "RTC";
 choices[24][3] = "TCP-IP";
 answers[24] = choices[24][1];
 units[24] = "107";
 comments[24] = "Id Pregunta: 3491. NULL";


//  Id pregunta: 3519 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  En Espa&ntilde;a la televisi&oacute;n por cable:";
 choices[25]= new Array();
 choices[25][0] = "Est&aacute; teniendo una implantaci&oacute;n similar a la existente en Alemania";
 choices[25][1] = "Carece de tecnolog&iacute;a suficiente para poder implantarse";
 choices[25][2] = "Se presta generalmente con redes h&iacute;bridasjunto a telefon&iacute;a y datos";
 choices[25][3] = "Todo lo anterior es correcto";
 answers[25] = choices[25][2];
 units[25] = "105";
 comments[25] = "Id Pregunta: 3519. ";


//  Id pregunta: 3570 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  En una celda ATM, si el campo PT contiene el valor 100:";
 choices[26]= new Array();
 choices[26][0] = "Es una celda de datos de usuario";
 choices[26][1] = "Es una celda de gesti&oacute;n de recursos";
 choices[26][2] = "Es una celda de datos de usuario pero indica extremo a extremo la congestion de trafico";
 choices[26][3] = "Es una celda asociada al segmento F5 de OAM";
 answers[26] = choices[26][3];
 units[26] = "109";
 comments[26] = "Id Pregunta: 3570. ";


//  Id pregunta: 3731 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Los nodos B en UMTS son equivalentes a:";
 choices[27]= new Array();
 choices[27][0] = "SGSN en GPRS";
 choices[27][1] = "MSC en GSM";
 choices[27][2] = "BTS en GSM";
 choices[27][3] = "SMSC en GSM";
 answers[27] = choices[27][2];
 units[27] = "108";
 comments[27] = "Id Pregunta: 3731. ";


//  Id pregunta: 3743 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Los sistemas de radio en los que los m&oacute;viles no est&aacute;n asignados a una &uacute;nica frecuencia sino que pueden usar una cualquiera de las frecuencias o canales disponibles se denomina:";
 choices[28]= new Array();
 choices[28][0] = "GSM";
 choices[28][1] = "TACS";
 choices[28][2] = "NMT";
 choices[28][3] = "Trunking";
 answers[28] = choices[28][3];
 units[28] = "108";
 comments[28] = "Id Pregunta: 3743. ";


//  Id pregunta: 3754 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Nombre y caracter&iacute;sticas del mecanismo de encriptado y autenticaci&oacute;n especificado en el est&aacute;ndar 802.11:";
 choices[29]= new Array();
 choices[29][0] = "WAP, con clave de hasta 40 bits";
 choices[29][1] = "WEP, con clave de hasta 40 bits";
 choices[29][2] = "WEP, con clave de hasta 128 bits";
 choices[29][3] = "WTLS, con clave de hasta 128 bits";
 answers[29] = choices[29][2];
 units[29] = "107";
 comments[29] = "Id Pregunta: 3754. NULL";


//  Id pregunta: 3773 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  PLC responde por:";
 choices[30]= new Array();
 choices[30][0] = "Power Limit Consumption";
 choices[30][1] = "Priority Lock Change";
 choices[30][2] = "Power Line Communication";
 choices[30][3] = "Protocol Link Conmutation";
 answers[30] = choices[30][2];
 units[30] = "107";
 comments[30] = "Id Pregunta: 3773. NULL";


//  Id pregunta: 3798 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Respecto de ADSL, puede decirse que:";
 choices[31]= new Array();
 choices[31][0] = "No requiere ning&uacute;n tipo de dispositivo conectado al PC";
 choices[31][1] = "Basta con un m&oacute;dem ADSL en casa del abonado";
 choices[31][2] = "Necesita que la central del abonado pueda dar el servicio";
 choices[31][3] = "El abonado ha de estar a como mucho 1000 m de su central";
 answers[31] = choices[31][2];
 units[31] = "107";
 comments[31] = "Id Pregunta: 3798. NULL";


//  Id pregunta: 3854 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  Con respecto a las l&iacute;neas PLC (POWER LINE COMMUNICATIONS) no es cierto que:";
 choices[32]= new Array();
 choices[32][0] = "Tiene problemas respecto a sus a prestaciones o a la velocidad debido al ruido y microcortes";
 choices[32][1] = "No es necesaria nueva regulaci&oacute;n debido a la que ya existe para las l&iacute;neas de potencia instaladas";
 choices[32][2] = "Requiere colocar amplificadores de desacoplamiento en cada transformador de media/baja tensi&oacute;n porque estos act&uacute;an como filtros para los datos";
 choices[32][3] = "Deben enfrentarse a todas las interferencias y perturbaciones presentes, debido a la amplia proliferaci&oacute;n de electrodom&eacute;sticos y otros dispositivos conectados";
 answers[32] = choices[32][1];
 units[32] = "107";
 comments[32] = "Id Pregunta: 3854. NULL";


//  Id pregunta: 3858 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  El modo de transferencia as&iacute;ncrono (ATM), utiliza:";
 choices[33]= new Array();
 choices[33][0] = "Celdas de tama&ntilde;o variable con una cabecera fija de 5 octetos y un campo de informaci&oacute;n variable de hasta 64 octetos.";
 choices[33][1] = "Celdas de tama&ntilde;o variable con una cabecera fija de 8 octetos, y un campo de informaci&oacute;n variable de hasta 48 octetos.";
 choices[33][2] = "Celdas de tama&ntilde;o fijo con una cabecera fija de 5 octetos y un campo de informaci&oacute;n fijo de 48 octetos.";
 choices[33][3] = "Celdas de tama&ntilde;o variable con una cabecera fija de 8 octetos y un campo de informaci&oacute;n fijo de 64 octetos.";
 answers[33] = choices[33][2];
 units[33] = "109";
 comments[33] = "Id Pregunta: 3858. Junta Andaluc&iacute;a";


//  Id pregunta: 3904 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  Sobre el Entorno Dom&eacute;stico Virtual o VHE (Virtual Home Environment) puede decirse que:";
 choices[34]= new Array();
 choices[34][0] = "Es un nuevo est&aacute;ndar de interfaz dom&oacute;tica entre electrodom&eacute;sticos";
 choices[34][1] = "Es un concepto ligado a la tecnolog&iacute;a UMTS";
 choices[34][2] = "Es una norma de intercomunicaci&oacute;n inal&aacute;mbrica para utilizar en el hogar";
 choices[34][3] = "Ninguna de las opciones anteriores es correcta";
 answers[34] = choices[34][1];
 units[34] = "108";
 comments[34] = "Id Pregunta: 3904. ";


//  Id pregunta: 3944 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Dentro de las Tecnolog&iacute;as de nivel acceso usadas en ATM se&ntilde;alar  la Falsa";
 choices[35]= new Array();
 choices[35][0] = "PSH";
 choices[35][1] = "SDH";
 choices[35][2] = "ATM";
 choices[35][3] = "SAR";
 answers[35] = choices[35][3];
 units[35] = "109";
 comments[35] = "Id Pregunta: 3944. ";


//  Id pregunta: 3959 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  La jerarqu&iacute;a digital plesi&oacute;crona (JDP o PDH):";
 choices[36]= new Array();
 choices[36][0] = "Tiene la misma normativa de niveles en Europa y en Estados Unidos";
 choices[36][1] = " Tiene la misma normativa de niveles en jap&oacute;n y en Estados Unidos";
 choices[36][2] = "Tiene la misma normativa de niveles para todo el mundo";
 choices[36][3] = "Son tres normativas distintas para cada &aacute;rea";
 answers[36] = choices[36][3];
 units[36] = "107";
 comments[36] = "Id Pregunta: 3959. NULL";


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


//  Id pregunta: 4001 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  En el caso de que una red de cable proporcione servicios de datos, &iquest;c&oacute;mo se denomina al equipo situado en la cabecera de la red que env&iacute;a y recibe los flujos de datos?";
 choices[38]= new Array();
 choices[38][0] = "Router";
 choices[38][1] = "Switch";
 choices[38][2] = "Gateway";
 choices[38][3] = "CMTS";
 answers[38] = choices[38][3];
 units[38] = "105";
 comments[38] = "Id Pregunta: 4001. ";


//  Id pregunta: 4014 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Con respecto a la tecnolog&iacute;a WIMAX, se&ntilde;ale qu&eacute; est&aacute;ndar del IEEE ha sido dise&ntilde;ado para soportar roaming entre c&eacute;lulas y movilidad urbana (baja velocidad):";
 choices[39]= new Array();
 choices[39][0] = "802.16";
 choices[39][1] = "802.16a";
 choices[39][2] = "802.16c";
 choices[39][3] = "802.16e";
 answers[39] = choices[39][3];
 units[39] = "107";
 comments[39] = "Id Pregunta: 4014. NULL";


//  Id pregunta: 4016 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l es el est&aacute;ndar de la ITU-T que designa a la tecnolog&iacute;a HDSL?";
 choices[40]= new Array();
 choices[40][0] = "G 992.1";
 choices[40][1] = "G 991.2";
 choices[40][2] = "G 992.2";
 choices[40][3] = "G 991.1";
 answers[40] = choices[40][3];
 units[40] = "107";
 comments[40] = "Id Pregunta: 4016. NULL";


//  Id pregunta: 4019 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  &iquest;En qu&eacute; banda de frecuencias funciona Bluetooth?";
 choices[41]= new Array();
 choices[41][0] = "3,5 GHz";
 choices[41][1] = "5 GHz";
 choices[41][2] = "1,8 GHz";
 choices[41][3] = "2,45 GHz";
 answers[41] = choices[41][3];
 units[41] = "107";
 comments[41] = "Id Pregunta: 4019. NULL";


//  Id pregunta: 4022 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  La arquitectura del protocolo de aplicaciones inal&aacute;mbricas WAP consta de las siguientes capas:";
 choices[42]= new Array();
 choices[42][0] = "Aplicaci&oacute;n, presentaci&oacute;n, sesi&oacute;n, transporte y f&iacute;sica.";
 choices[42][1] = "Aplicaci&oacute;n, sesi&oacute;n, transacci&oacute;n, seguridad, transporte y f&iacute;sica.";
 choices[42][2] = "Aplicaci&oacute;n, presentaci&oacute;n, sesi&oacute;n, transacci&oacute;n, transporte y f&iacute;sica.";
 choices[42][3] = "Aplicaci&oacute;n, sesi&oacute;n, seguridad, transporte, enlace y f&iacute;sica.";
 answers[42] = choices[42][1];
 units[42] = "108";
 comments[42] = "Id Pregunta: 4022. ";


//  Id pregunta: 4027 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  &iquest;Qu&eacute; modulaci&oacute;n se usa en GSM?";
 choices[43]= new Array();
 choices[43][0] = "QPSK";
 choices[43][1] = "BPSK";
 choices[43][2] = "QAM";
 choices[43][3] = "GMSK";
 answers[43] = choices[43][3];
 units[43] = "108";
 comments[43] = "Id Pregunta: 4027. ";


//  Id pregunta: 4032 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  &iquest;En qu&eacute; recomendaci&oacute;n se define el protocolo LAPF de Frame Relay?";
 choices[44]= new Array();
 choices[44][0] = "Q. 923";
 choices[44][1] = "Q. 920";
 choices[44][2] = "Q. 921";
 choices[44][3] = "Q. 922";
 answers[44] = choices[44][3];
 units[44] = "109";
 comments[44] = "Id Pregunta: 4032. ";


//  Id pregunta: 4033 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes acr&oacute;nimos relacionados con Frame Relay hace referencia al volumen de informaci&oacute;n comprometida?";
 choices[45]= new Array();
 choices[45][0] = "Be";
 choices[45][1] = "CIR";
 choices[45][2] = "Bc";
 choices[45][3] = "EIR";
 answers[45] = choices[45][2];
 units[45] = "109";
 comments[45] = "Id Pregunta: 4033. ";


//  Id pregunta: 4035 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  La ITU ha definido una serie de clases de servicio para ATM. La clase A se caracteriza por:";
 choices[46]= new Array();
 choices[46][0] = "Velocidad de acceso variable, retardo constante y no ser orientada a conexi&oacute;n";
 choices[46][1] = "Velocidad de acceso constante, retardo variable y ser orientada a conexi&oacute;n";
 choices[46][2] = "Velocidad de acceso variable, retardo variable y no ser orientada a conexi&oacute;n";
 choices[46][3] = "Velocidad de acceso constante, retardo constante y ser orientado a conexi&oacute;n";
 answers[46] = choices[46][3];
 units[46] = "109";
 comments[46] = "Id Pregunta: 4035. ";


//  Id pregunta: 4067 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  &iquest;Qu&eacute; se puede hacer con un telefono IP?";
 choices[47]= new Array();
 choices[47][0] = "Llamar a un telefono IP de otra red de otro edificio";
 choices[47][1] = "Llamar a otro telefono analogico";
 choices[47][2] = "Ser llamado por otro telefono analogico";
 choices[47][3] = "todos los anteriores";
 answers[47] = choices[47][3];
 units[47] = "117";
 comments[47] = "Id Pregunta: 4067. ";


//  Id pregunta: 4123 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  Cuando sincronizamos datos entre una PDA bluetooth y el PC usamos una red";
 choices[48]= new Array();
 choices[48][0] = "LAN";
 choices[48][1] = "PAN";
 choices[48][2] = "NAS";
 choices[48][3] = "MAN";
 answers[48] = choices[48][1];
 units[48] = "107";
 comments[48] = "Id Pregunta: 4123. NULL";


//  Id pregunta: 4205 AÃ±o de creación de pregunta: 2006-01-01
 questions[49]= "50)  MPLS";
 choices[49]= new Array();
 choices[49][0] = "Da soporte al desarrollo de Redes Privadas Virtuales (VPNs) extremo a extremo";
 choices[49][1] = "Se configura internamente en la red de un operador de telecomunicaciones (ISP)";
 choices[49][2] = "Dadas sus capacidades de calidad de servicio (QoS) es recomendado en redes LAN empresariales";
 choices[49][3] = "todas las anteriores";
 answers[49] = choices[49][1];
 units[49] = "109";
 comments[49] = "Id Pregunta: 4205. ";


//  Id pregunta: 4231 AÃ±o de creación de pregunta: 2006-01-01
 questions[50]= "51)  Se desea contratar el servicio Frame Relay con un operador de comunicaciones, para una conexi&oacute;n entre dos puntos. En este caso se deber&aacute; tener en cuenta que el CIR para los Circuitos Virtuales Permanentes (CVP) contratados deber&aacute; cumplir lo siguiente";
 choices[50]= new Array();
 choices[50][0] = "El CIR es mayor que la velocidad de acceso";
 choices[50][1] = "El CIR es menor o igual que la velocidad de acceso";
 choices[50][2] = "El CIR es igual en los dos sentidos del CVP";
 choices[50][3] = "El CIR es distinto en los dos sentidos del CVP";
 answers[50] = choices[50][1];
 units[50] = "109";
 comments[50] = "Id Pregunta: 4231. ";


//  Id pregunta: 4262 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  El protocolo RAS de la pila de protocolos H323 de la ITU:";
 choices[51]= new Array();
 choices[51][0] = "Son las siglas de Registration, Admission and Signalling";
 choices[51][1] = "Funciona sobre el protocolo de transporte TCP";
 choices[51][2] = "Es un protocolo de se&ntilde;alizacion entre los elementos de red y el Gateway";
 choices[51][3] = "El canal de se&ntilde;alizaci&oacute;n RAS se abre antes de que se establezca cualquier otro canal entre puntos extremos H.323";
 answers[51] = choices[51][3];
 units[51] = "109";
 comments[51] = "Id Pregunta: 4262. ";


//  Id pregunta: 4353 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  La telefon&iacute;a m&oacute;vil celular:";
 choices[52]= new Array();
 choices[52][0] = "Permite el paso din&aacute;mico de un terminal entre las c&eacute;lulas.";
 choices[52][1] = "No permite el cambio de c&eacute;lula durante la conversaci&oacute;n.";
 choices[52][2] = "Establece un tama&ntilde;o de c&eacute;lula mayor en ciudad que en espacios abiertos a fin de soportar la mayor densidad de tr&aacute;fico.";
 choices[52][3] = "S&oacute;lo funciona con tecnolog&iacute;a digital.";
 answers[52] = choices[52][0];
 units[52] = "108";
 comments[52] = "Id Pregunta: 4353. ";


//  Id pregunta: 4354 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  Para evitar las colisiones de paquetes, las redes inal&aacute;mbricas 802.11 WiFi pueden utilizar los siguientes mecanismos: I) CSMA/CA+ACK Carrier Sense Multiple Access with Collision Avoidance + Acknowledge). II) RTS/CTS (Request to Send/Clear to Send). III) OFDM (Orthogonal Frecuency Division Multiplexing).";
 choices[53]= new Array();
 choices[53][0] = "I y II.";
 choices[53][1] = "II y III.";
 choices[53][2] = "I y III.";
 choices[53][3] = "I, II y III.";
 answers[53] = choices[53][0];
 units[53] = "107";
 comments[53] = "Id Pregunta: 4354. NULL";


//  Id pregunta: 4419 AÃ±o de creación de pregunta: 2007-01-01
 questions[54]= "55)  El estandar IEEE 802.12 (100VG AnyLAN):";
 choices[54]= new Array();
 choices[54][0] = "Utiliza un m&eacute;todo de acceso de detecci&oacute;n de colisi&oacute;n.";
 choices[54][1] = "Utiliza un m&eacute;todo de acceso de prioridad de demanda.";
 choices[54][2] = "Utiliza un m&eacute;todo de acceso de impedimento de colisi&oacute;n.";
 choices[54][3] = "Utiliza un m&eacute;todo de acceso de paso de testigo.";
 answers[54] = choices[54][1];
 units[54] = "107";
 comments[54] = "Id Pregunta: 4419. NULL";


//  Id pregunta: 4431 AÃ±o de creación de pregunta: 2007-01-01
 questions[55]= "56)  &iquest;C&oacute;mo se denomina en telefon&iacute;a IP el elemento encargado de registrar los dispositivos que realizan llamadas usando la red IP?";
 choices[55]= new Array();
 choices[55][0] = "Gateway.";
 choices[55][1] = "Terminal.";
 choices[55][2] = "IVR";
 choices[55][3] = "Gatekeeper.";
 answers[55] = choices[55][3];
 units[55] = "109";
 comments[55] = "Id Pregunta: 4431. ";


//  Id pregunta: 4437 AÃ±o de creación de pregunta: 2007-01-01
 questions[56]= "57)  &iquest;Qu&eacute; se entiende por Indoor PLC?:";
 choices[56]= new Array();
 choices[56][0] = "MODEM que recoge la se&ntilde;al de la red el&eacute;ctrica a trav&eacute;s del enchufe.";
 choices[56][1] = "Vertiente de la tecnolog&iacute;a PLC que convierte la l&iacute;nea el&eacute;ctrica en una LAN.";
 choices[56][2] = "Equipo que conecta la red el&eacute;ctrica con la red de comunicaciones.";
 choices[56][3] = "Conjunto formado por el MODEM y el equipo terminal de datos que existen en la vivienda el usuario.";
 answers[56] = choices[56][1];
 units[56] = "107";
 comments[56] = "Id Pregunta: 4437. NULL";


//  Id pregunta: 4490 AÃ±o de creación de pregunta: 2007-01-01
 questions[57]= "58)  El sistema UMTS tiene asignadas en Europa bandas de trabajo en torno a Ia frecuencia de:";
 choices[57]= new Array();
 choices[57][0] = "900 MHz.";
 choices[57][1] = "2 GHz.";
 choices[57][2] = "11 GHz.";
 choices[57][3] = "5 GHz";
 answers[57] = choices[57][1];
 units[57] = "108";
 comments[57] = "Id Pregunta: 4490. ";


//  Id pregunta: 4592 AÃ±o de creación de pregunta: 2007-01-01
 questions[58]= "59)  Cual de las siguientes no es una ventaja de WiMax respecto a WIFI:";
 choices[58]= new Array();
 choices[58][0] = "el ancho los canales radio utilizados por WiMax es menor que los de WiFi";
 choices[58][1] = "WiMax utiliza un protocolo de control de acceso al medio CSMA evolucionado respecto al de WiFi";
 choices[58][2] = "WiMax soporta mas usuarios por cada canal radio";
 choices[58][3] = "WiMax permite el control autom&aacute;tico de potencia emitida";
 answers[58] = choices[58][1];
 units[58] = "107";
 comments[58] = "Id Pregunta: 4592. NULL";


//  Id pregunta: 4649 AÃ±o de creación de pregunta: 2007-01-01
 questions[59]= "60)  La tecnolog&iacute;a de radio LMDS (Local Multipoint Distribution System) se caracteriza entre otras cosas por ser:";
 choices[59]= new Array();
 choices[59][0] = "una tecnolog&iacute;a punto a punto";
 choices[59][1] = "no requiere de visibilidad directa entre enlaces";
 choices[59][2] = "tiene radios de cobertura t&iacute;picos mayores a 25 Km (kilometros)";
 choices[59][3] = "utilizada para entornos de alta concentraci&oacute;n de usuarios";
 answers[59] = choices[59][3];
 units[59] = "108";
 comments[59] = "Id Pregunta: 4649. ";


//  Id pregunta: 4664 AÃ±o de creación de pregunta: 2007-01-01
 questions[60]= "61)  HSDPA corresponde a la generaci&oacute;n m&oacute;vil";
 choices[60]= new Array();
 choices[60][0] = "4G";
 choices[60][1] = "3.5G";
 choices[60][2] = "5G";
 choices[60][3] = "Ninguna de las anteriores";
 answers[60] = choices[60][1];
 units[60] = "108";
 comments[60] = "Id Pregunta: 4664. ";


//  Id pregunta: 4768 AÃ±o de creación de pregunta: 2007-01-01
 questions[61]= "62)  En ATM, para la transmisi&oacute;n de servicios is&oacute;cronos se utilizan los protocolos de adaptaci&oacute;n AAL1 y AAL2. La diferencia entre ellos es";
 choices[61]= new Array();
 choices[61][0] = "AAL1 es de velocidad variable y AAL2 es de velocidad constante";
 choices[61][1] = "AAL1 es de velocidad constante y AAL2 es de velocidad variable";
 choices[61][2] = "AAL1 es orientado a conexi&oacute;n y AAL2 es de tipo datagrama";
 choices[61][3] = "AAL1 es de tipo datagrama y AAL2 es orientado a conexi&oacute;n";
 answers[61] = choices[61][1];
 units[61] = "109";
 comments[61] = "Id Pregunta: 4768. ";


//  Id pregunta: 4807 AÃ±o de creación de pregunta: 2007-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a ADSL (Asymmetrical Digital Subscriber Line) NO es cierta?";
 choices[62]= new Array();
 choices[62][0] = "Una caracter&iacute;stica importante de ADSL, definido en la recomendaci&oacute;n G.992.1 de ITU-T (InternationalTelecommunications Union-Telecommunications), es la compartici&oacute;n del espectro disponible en el partelef&oacute;nico con el servicio telef&oacute;nico, permitiendo el acceso simult&aacute;neo a ambos servicios. Esto se logramediante el empleo de unos filtros denominados &quot;splitters&quot;";
 choices[62][1] = "En un primer momento, las principales t&eacute;cnicas de modulaci&oacute;n utilizadas en ADSL eran CAP (Carrier-lessAmplitude and Phase Modulation) y DMT (Discrete Multi-Tone), aunque finalmente los organismos deestandarizaci&oacute;n se decantaron por esta &uacute;ltima";
 choices[62][2] = "ADSL2+ es una evoluci&oacute;n del sistema ADSL y ADSL2 basado en la recomendaci&oacute;n de la ITU-T G.992.5,que posibilita adem&aacute;s el uso de modulaci&oacute;n WCDMA (Wide Code Division Multiple Access)";
 choices[62][3] = "El est&aacute;ndar ITU-T G.992.2, tambi&eacute;n denominado &quot;G.Lite&quot; o &quot;ADSL Lite&quot; es una variante de ADSL queproporciona menor caudal, pero tiene la ventaja de no requerir splitters";
 answers[62] = choices[62][2];
 units[62] = "107";
 comments[62] = "Id Pregunta: 4807. NULL";


//  Id pregunta: 4981 AÃ±o de creación de pregunta: 2003-01-01
 questions[63]= "64)  Una caracter&iacute;stica de la tecnolog&iacute;a HSDPA (High Speed Downlink Packet Access) es:";
 choices[63]= new Array();
 choices[63][0] = "Adaptaci&oacute;n r&aacute;pida del enlace. La velocidad de transmisi&oacute;n de datos var&iacute;a de forma r&aacute;pida seg&uacute;n las condicionesdel canal de radio.";
 choices[63][1] = "Transmisi&oacute;n en canal no compartido. Se introduce un nuevo canal de transporte en el enlace descendentedenominado HS-DSCH (High-Speed Downlink Shared Channel).";
 choices[63][2] = "Los datos que se reciben de forma err&oacute;nea, debido a las condiciones de propagaci&oacute;n, no hay que solicitarlos denuevo al transmisor para su correcci&oacute;n.";
 choices[63][3] = "La modulaci&oacute;n normalmente empleada es 4-QAM.";
 answers[63] = choices[63][0];
 units[63] = "108";
 comments[63] = "Id Pregunta: 4981. Examen TIC B 2007";


//  Id pregunta: 5163 AÃ±o de creación de pregunta: 2003-01-01
 questions[64]= "65)  Una antena que radia la misma potencia en todas las direcciones es conocida como:";
 choices[64]= new Array();
 choices[64][0] = "De Marconi";
 choices[64][1] = "Hertziana";
 choices[64][2] = "Ionosf&eacute;rica";
 choices[64][3] = "Isotr&oacute;pica";
 answers[64] = choices[64][3];
 units[64] = "107";
 comments[64] = "Id Pregunta: 5163. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5301 AÃ±o de creación de pregunta: 2003-01-01
 questions[65]= "66)  Cu&aacute;l de las siguientes no es una clase de servicio ATM";
 choices[65]= new Array();
 choices[65][0] = "CBR";
 choices[65][1] = "HBR";
 choices[65][2] = "UBR";
 choices[65][3] = "NRT-VBR";
 answers[65] = choices[65][1];
 units[65] = "109";
 comments[65] = "Id Pregunta: 5301. ";


//  Id pregunta: 5578 AÃ±o de creación de pregunta: 2003-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de estas afirmaciones NO es correcta?";
 choices[66]= new Array();
 choices[66][0] = "La recomendaci&oacute;n aplicable para HDSL es la G991.1";
 choices[66][1] = "La recomendaci&oacute;n aplicable para ADSL-lite es G992.2";
 choices[66][2] = "La recomendaci&oacute;n aplicable para el ADSL2 es G992.3 y G992.4";
 choices[66][3] = "La recomendaci&oacute;n aplicable del SHDSL es la G992.1";
 answers[66] = choices[66][3];
 units[66] = "107";
 comments[66] = "Id Pregunta: 5578. NULL";


//  Id pregunta: 5863 AÃ±o de creación de pregunta: 2009-01-01
 questions[67]= "68)  Determine cu&aacute;l de las afirmaciones siguiente NO se corresponde con una caracter&iacute;stica definitoria de la tecnolog&iacute;a ATM:";
 choices[67]= new Array();
 choices[67][0] = "Las redes ATM est&aacute;n orientadas a la conexi&oacute;n, requiriendo del establecimiento de un circuito virtual antes de la trasferencia de informaci&oacute;n entre dos extremos";
 choices[67][1] = "ATM es independiente del trasporte f&iacute;sico, las celdas ATM pueden ser trasportadas en redes SONET, SDH, T3/E3 &Oacute; T1/E1";
 choices[67][2] = "ATM puede utilizarse tanto como plataforma de interconexi&oacute;n de redes, como una red para proporcionar servicios de banda ancha";
 choices[67][3] = "Las celdas son de longitud variable, con un m&aacute;ximo de 53 bytes, de los cuales 5 son de cabecera y los restantes son portadores de la informaci&oacute;n de usuario, gesti&oacute;n y se&ntilde;alizaci&oacute;n";
 answers[67] = choices[67][3];
 units[67] = "109";
 comments[67] = "Id Pregunta: 5863. MAP 2008 A1";


//  Id pregunta: 5911 AÃ±o de creación de pregunta: 2009-01-01
 questions[68]= "69)  Los fabricantes e investigadores hacen referencia a diversos factores determinantes en la calidad de la trasmisi&oacute;n de la voz; de entre los siguientes, determine el &quot;cr&iacute;tico&quot; para aplicaciones de tiempo real como la voz y el video sobre IP:";
 choices[68]= new Array();
 choices[68][0] = "Jitter";
 choices[68][1] = "Throughput";
 choices[68][2] = "Delay";
 choices[68][3] = "Packet Loss";
 answers[68] = choices[68][0];
 units[68] = "109";
 comments[68] = "Id Pregunta: 5911. MAP 2008 A1";


//  Id pregunta: 7267 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  En el &aacute;mbito del Frame Relay, el CIR se refiere";
 choices[69]= new Array();
 choices[69][0] = "Al ratio de ocupaci&oacute;n m&aacute;xima del canal";
 choices[69][1] = "A la velocidad m&iacute;nima comprometida";
 choices[69][2] = "Al porcentaje m&aacute;ximo de tramas err&oacute;neas garantizado";
 choices[69][3] = "A la velocidad m&aacute;xima asegurada";
 answers[69] = choices[69][1];
 units[69] = "109";
 comments[69] = "Id Pregunta: 7267. Examen TIC B 2009";


//  Id pregunta: 8323 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  La normativa que establece las condiciones t&eacute;cnicas para la emisi&oacute;n del servido de televisi&oacute;n digital terrestre (TDT) en alta definici&oacute;n, es: ";
 choices[70]= new Array();
 choices[70][0] = "Ley 7/2010. ";
 choices[70][1] = "Real Decreto 691/2010. ";
 choices[70][2] = "Directiva 98/48/CE. ";
 choices[70][3] = "Real Decreto 944/2005. ";
 answers[70] = choices[70][1];
 units[70] = "105, 110";
 comments[70] = "Id Pregunta: 8323. Examen TIC A2 2010";


//  Id pregunta: 8536 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  La tecnolog&iacute;a HSDPA presenta una capacidad m&aacute;xima de transferencia de informaci&oacute;n de:";
 choices[71]= new Array();
 choices[71][0] = "10,8 Mbps te&oacute;ricos.";
 choices[71][1] = "14 Mbps";
 choices[71][2] = "2 Mbps";
 choices[71][3] = "384 Kbps";
 answers[71] = choices[71][1];
 units[71] = "108";
 comments[71] = "Id Pregunta: 8536. Examen TIC A2 2010 interna";


//  Id pregunta: 8546 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;En qu&eacute; recomendaci&oacute;n de la Uni&oacute;n Internacional de Telecomunicaciones viene recogida la tecnolog&iacute;a ADSL-Lite?";
 choices[72]= new Array();
 choices[72][0] = "ITU G.992.1.";
 choices[72][1] = "ITU G.992.2";
 choices[72][2] = "ITU G.992.3.";
 choices[72][3] = "ITUG.992.4.";
 answers[72] = choices[72][1];
 units[72] = "107";
 comments[72] = "Id Pregunta: 8546. Examen TIC A2 2010 interna";


//  Id pregunta: 8680 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  a) A que componente del protocolo SIP corresponde la funci&oacute;n de &quot;aceptar peticiones de registros de usuarios y guardar la informaci&oacute;n de estas peticiones para suministrar un servicio de localizaci&oacute;n y traducci&oacute;n de direcciones en el dominio que controla&quot;:";
 choices[73]= new Array();
 choices[73][0] = "Proxy Server.";
 choices[73][1] = "Account Server.";
 choices[73][2] = "Redirect Server.";
 choices[73][3] = "Registrar Server.";
 answers[73] = choices[73][3];
 units[73] = "109";
 comments[73] = "Id Pregunta: 8680. Examen UPM A2 2011";


//  Id pregunta: 8683 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  En el subsistema de Operaci&oacute;n y Mantenimiento de GSM existe una Base de Datos denominada EIR (Equipment Identity Register). &iquest;Cu&aacute;l es su funci&oacute;n?";
 choices[74]= new Array();
 choices[74][0] = "Guardar la informaci&oacute;n de los m&oacute;viles bajo su &aacute;rea de cobertura en ese momento.";
 choices[74][1] = "Guardar la informaci&oacute;n de los m&oacute;viles que est&aacute;n autorizado para usar a red.";
 choices[74][2] = "Guardar la informaci&oacute;n de los m&oacute;viles que tienen prohibido utilizar- la red por alg&uacute;n motivo.";
 choices[74][3] = "Base de datos con la facturaci&oacute;n del m&oacute;vil que est&aacute; haciendo uso de la red.";
 answers[74] = choices[74][2];
 units[74] = "108";
 comments[74] = "Id Pregunta: 8683. Examen UPM A2 2011";


//  Id pregunta: 8912 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  El sistema de radiocomunicaciones digitales TETRA:";
 choices[75]= new Array();
 choices[75][0] = "Tiene capacidades de transmisi&oacute;n de datos.";
 choices[75][1] = "No permite comunicaciones uno a muchos.";
 choices[75][2] = "Permite una mayor densidad de usuarios que GSM.";
 choices[75][3] = "Es exclusivamente anal&oacute;gico";
 answers[75] = choices[75][0];
 units[75] = "108";
 comments[75] = "Id Pregunta: 8912. Operador Ayto. Madrid 2010";


//  Id pregunta: 8997 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Una red bluetooth de tipo piconet tiene un m&aacute;ximo de:";
 choices[76]= new Array();
 choices[76][0] = "1 maestro y 7 esclavos";
 choices[76][1] = "1 maestro y 15 esclavos";
 choices[76][2] = "1 maestro y 16 esclavos";
 choices[76][3] = "1 maestro y 32 esclavos";
 answers[76] = choices[76][0];
 units[76] = "107";
 comments[76] = "Id Pregunta: 8997. Examen UPM A2 2011";


//  Id pregunta: 9029 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de los siguientes no es un servidor de streaming?";
 choices[77]= new Array();
 choices[77][0] = "Wowza Media Server";
 choices[77][1] = "Icecast";
 choices[77][2] = "Darwin Streaming Server";
 choices[77][3] = "FlowCast";
 answers[77] = choices[77][3];
 units[77] = "117";
 comments[77] = "Id Pregunta: 9029. ";


//  Id pregunta: 9051 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Con respecto a las siguientes siglas:";
 choices[78]= new Array();
 choices[78][0] = "El IMEI es un identificador del dispositivo que se est&aacute; usando";
 choices[78][1] = "El msisdn es un n&uacute;mero &uacute;nico de identificaci&oacute;n de usario en la red.";
 choices[78][2] = "EL IMSI es el n&uacute;mero de identificaci&oacute;n de la tarjeta SIM";
 choices[78][3] = "Todas las anteriores";
 answers[78] = choices[78][3];
 units[78] = "108";
 comments[78] = "Id Pregunta: 9051. ";


//  Id pregunta: 9060 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  Respecto a LMDS:";
 choices[79]= new Array();
 choices[79][0] = "Al ser de frecuencias bajas, no tiene problemas con las zonas de sombra.";
 choices[79][1] = "Son redes de lento despliegue";
 choices[79][2] = "Funciona en la banda de los 28 a 31 Ghz y una difusi&oacute;n m&aacute;xima de 7 km";
 choices[79][3] = "Se la conoce como proveedor de servicios sin cable";
 answers[79] = choices[79][2];
 units[79] = "108";
 comments[79] = "Id Pregunta: 9060. NULL";


//  Id pregunta: 9384 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Seg&uacute;n la UIT, dentro de la denominaci&oacute;n 4G, se pueden incluir las siguientes tecnolog&iacute;as";
 choices[80]= new Array();
 choices[80][0] = "LTE";
 choices[80][1] = "WiMAX y LTE";
 choices[80][2] = "WiMAX";
 choices[80][3] = "LTE, WiMAX y HSPA+";
 answers[80] = choices[80][3];
 units[80] = "108";
 comments[80] = "Id Pregunta: 9384. NULL";


//  Id pregunta: 9389 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Indique cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[81]= new Array();
 choices[81][0] = "GSM (Global System Mobile) permite la utilizaci&oacute;n de los canales tanto para la transmisi&oacute;n de voz como de datos.";
 choices[81][1] = "GSM permite la utilizaci&oacute;n de t&eacute;cnicas de supresi&oacute;n de silencios.";
 choices[81][2] = "GSM emplea radiocanales de 5MHz de ancho de banda.";
 choices[81][3] = "Las recomendaciones GSM contemplan la posibilidad de utilizar un codificador de voz que permita dividir en ";
 answers[81] = choices[81][2];
 units[81] = "108";
 comments[81] = "Id Pregunta: 9389. Examen TIC A1 2011 Libre";


//  Id pregunta: 9393 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Ordene, de menor a mayor velocidad m&aacute;xima de transmisi&oacute;n de datos, las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles:";
 choices[82]= new Array();
 choices[82][0] = "GSM, GPRS, EDGE, HSPA+.";
 choices[82][1] = "GSM. GPRS, UMTS, HSCSD.";
 choices[82][2] = "GSM, HSUPA, GPRS, UMTS.";
 choices[82][3] = "Ninguna de las respuestas es correcta.";
 answers[82] = choices[82][0];
 units[82] = "108";
 comments[82] = "Id Pregunta: 9393. Examen Teleco Ayto Madrid 2010.";


//  Id pregunta: 9529 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  Un valor 3 en la escala MOS (Mean Opinion Score) indica que la calidad de la se&ntilde;al es:";
 choices[83]= new Array();
 choices[83][0] = "Adecuada";
 choices[83][1] = "Pobre";
 choices[83][2] = "Buena";
 choices[83][3] = "Ninguna de las anteriores es correcta";
 answers[83] = choices[83][0];
 units[83] = "117";
 comments[83] = "Id Pregunta: 9529. NULL";


//  Id pregunta: 9996 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de los siguientes NO es un modelo de reparto del espectro utilizado por GSM (Global System for Mobile communications)?";
 choices[84]= new Array();
 choices[84][0] = "SDMA, Space Division Multiple Access o acceso m&uacute;ltiple por divisi&oacute;n delespacio.";
 choices[84][1] = "TDMA, Time Division Multiple Access, o acceso m&uacute;ltiple por divisi&oacute;n deltiempo.";
 choices[84][2] = "CDMA, Cell Division Multiple Access o acceso m&uacute;ltiple por divisi&oacute;n entreceldas.";
 choices[84][3] = "FHMA, Frequency Hops Multiple Access o acceso m&uacute;ltiple por saltos defrecuencia.";
 answers[84] = choices[84][2];
 units[84] = "108";
 comments[84] = "Id Pregunta: 9996. ";


//  Id pregunta: 10072 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  El VLR en una arquitectura de red m&oacute;vil, es una base de datos:";
 choices[85]= new Array();
 choices[85][0] = "Donde est&aacute;n inscritos todos los clientes de un operador, que se utiliza para la gesti&oacute;n de abonados m&oacute;viles.";
 choices[85][1] = "Asociada a un MSC, donde se almacena informaci&oacute;n din&aacute;mica sobre los usuarios transe&uacute;ntes en el &aacute;rea geogr&aacute;fica cubierta por la MSC.";
 choices[85][2] = "Donde se guardan las identidades IMSI de los clientes junto con la clave secreta de identificaci&oacute;n de cada usuario.";
 choices[85][3] = "Que contiene las identidades de los equipos m&oacute;viles, el IMEI que permite identificar de forma inequ&iacute;voca a un terminal a escala internacional.";
 answers[85] = choices[85][1];
 units[85] = "108";
 comments[85] = "Id Pregunta: 10072. TIC A2, libre, Examen 2013";


//  Id pregunta: 10135 AÃ±o de creación de pregunta: 2010-01-01
 questions[86]= "87)  Conforme a DOCSIS y EuroDOCSIS los canales de cable tienen un ancho de:";
 choices[86]= new Array();
 choices[86][0] = "8 MHz en Europa";
 choices[86][1] = "6 MHz en Norte Am&eacute;rica ";
 choices[86][2] = "Las dos anteriores son ciertas";
 choices[86][3] = "Ninguno de los anteriores";
 answers[86] = choices[86][2];
 units[86] = "105";
 comments[86] = "Id Pregunta: 10135. ";


//  Id pregunta: 10142 AÃ±o de creación de pregunta: 2010-01-01
 questions[87]= "88)  La TDT utiliza como t&eacute;cnica de modulaci&oacute;n de nivel f&iacute;sico";
 choices[87]= new Array();
 choices[87][0] = "CDMA";
 choices[87][1] = "COFDM ";
 choices[87][2] = "64-QAM";
 choices[87][3] = "Ninguna de las anteriores";
 answers[87] = choices[87][1];
 units[87] = "105";
 comments[87] = "Id Pregunta: 10142. Ayuntamiento Madrid 2014";


//  Id pregunta: 10199 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Qu&eacute; grupo de trabajo del IEEE estandariza el mecanismo de seguridad WPA2 (Wireless Protective Access 2)?";
 choices[88]= new Array();
 choices[88][0] = "802.11f";
 choices[88][1] = "802.11h";
 choices[88][2] = "802.11i";
 choices[88][3] = "802.11r";
 answers[88] = choices[88][2];
 units[88] = "107";
 comments[88] = "Id Pregunta: 10199. NULL";


//  Id pregunta: 10202 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[89]= new Array();
 choices[89][0] = "Para el canal de subida utiliza la modulaci&oacute;n SD-FDMA y para el de bajada, OFDMA";
 choices[89][1] = "Utiliza IMS (IP Multimedia Subsystem) para transmitir informaci&oacute;n multimedia sobre IP";
 choices[89][2] = "Es compatible con las redes IEEE 802.16e";
 choices[89][3] = "Desaparecen los soft handovers y solo existen hard handovers al desaparecer los RNC e incorporarse a los eNode B";
 answers[89] = choices[89][2];
 units[89] = "108";
 comments[89] = "Id Pregunta: 10202. 4G busca la convergencia con WiMax en el est&aacute;ndar 802.16m";


//  Id pregunta: 10205 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[90]= new Array();
 choices[90][0] = "Para el canal de subida utiliza la modulaci&oacute;n WCDMA y para el de bajada, OFDMA";
 choices[90][1] = "Corresponde a la release 8 del 3GPP (3rd Generation Partnership Project)";
 choices[90][2] = "Usa una nueva interfaz aire basada en OFDMA (Orthogonal Frequency Division Multiple Access)";
 choices[90][3] = "El ancho de banda de los canales es variable entre 1,25MHz y 20MHz";
 answers[90] = choices[90][0];
 units[90] = "108";
 comments[90] = "Id Pregunta: 10205. Para el canal de subida usa SC-FDMA (Single Carrier FDMA)";


//  Id pregunta: 10206 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cual de las siguientes afirmaciones es correcta respecto a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles?";
 choices[91]= new Array();
 choices[91][0] = "Es compatible con las redes IEEE 802.16e";
 choices[91][1] = "Usa una nueva interfaz aire basada en OFDMA (Orthogonal Frequency Division Multiple Access) en vez de WCDMA (Wideband Code Division Multiple Access)";
 choices[91][2] = "Desaparecen los hard handovers y solo existen soft handovers";
 choices[91][3] = "En la arquitectura se introduce un nuevo elemento llamado MME (Mobility Management Entity) basado en la antigua HLR y AuC";
 answers[91] = choices[91][1];
 units[91] = "108";
 comments[91] = "Id Pregunta: 10206. 4G busca la convergencia con WiMax en el est&aacute;ndar 802.16m. Desaparecen los soft handovers y solo existen hard handovers al desaparecer los RNC e incorporarse a los eNode B. El nuevo elemento basado en la antigua HLR y AuC es HSS (Home Subscriber Server), ";


//  Id pregunta: 10439 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  Respecto al conjunto de normas H.323 de la UIT,";
 choices[92]= new Array();
 choices[92][0] = "se le puede a&ntilde;adir seguridad extremo a extremo con la recomendaci&oacute;n de la UIT H.235. ";
 choices[92][1] = "fue definida para redes de conmutaci&oacute;n de circuitos.";
 choices[92][2] = "permite audioconferencia pero no videoconferencia.";
 choices[92][3] = "se utiliza &uacute;nicamente con redes RDSI.";
 answers[92] = choices[92][0];
 units[92] = "117";
 comments[92] = "Id Pregunta: 10439. Examen TIC A1 2013";


//  Id pregunta: 10671 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Elija la afirmaci&oacute;n correcta sobre el est&aacute;ndar DOCSIS:";
 choices[93]= new Array();
 choices[93][0] = "Se puede emplear para proporcionar acceso a Internet sobre una infraestructura de red HFC.";
 choices[93][1] = "Permite a&ntilde;adir transferencias de datos de alta velocidad a un sistema de televisi&oacute;n por cable (CATV)";
 choices[93][2] = "La versi&oacute;n europea se denomina EuroDOCSIS.";
 choices[93][3] = "Todas las anteriores son correctas.";
 answers[93] = choices[93][3];
 units[93] = "105";
 comments[93] = "Id Pregunta: 10671. ";


//  Id pregunta: 10908 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n la norma de la ITU-T asociada a la recomendaci&oacute;n G.726, de Modulaci&oacute;n por impulsos codificados diferencial adaptativa, indicar la respuesta correcta que se corresponde con su bit rate (kbit/s):";
 choices[94]= new Array();
 choices[94][0] = "16, 24, 32 &oacute; 40";
 choices[94][1] = "6, 12, 24 &oacute; 48";
 choices[94][2] = "4, 8, 16 &oacute; 40";
 choices[94][3] = "8, 16, 32 &oacute; 64";
 answers[94] = choices[94][0];
 units[94] = "117";
 comments[94] = "Id Pregunta: 10908. Examen GSI 2014";


//  Id pregunta: 10911 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Se&ntilde;alar de las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles cu&aacute;l utiliza W-CDMA:";
 choices[95]= new Array();
 choices[95][0] = "GSM";
 choices[95][1] = "EDGE";
 choices[95][2] = "UMTS";
 choices[95][3] = "LTE";
 answers[95] = choices[95][2];
 units[95] = "108";
 comments[95] = "Id Pregunta: 10911. Examen GSI 2014";


//  Id pregunta: 10912 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  La red de acceso especificada para la tecnolog&iacute;a de comunicaciones m&oacute;viles LTE (Long Term Evolution) y que utiliza la tecnolog&iacute;a OFDMA para la comunicaci&oacute;n con los equipos de los usuarios se llama:";
 choices[96]= new Array();
 choices[96][0] = "E-UTRAN";
 choices[96][1] = "FFTN";
 choices[96][2] = "LMDS";
 choices[96][3] = "WIMAX";
 answers[96] = choices[96][0];
 units[96] = "108";
 comments[96] = "Id Pregunta: 10912. Examen GSI 2014";


//  Id pregunta: 10945 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Respecto a Bluetooth es correcto que:";
 choices[97]= new Array();
 choices[97][0] = "No utiliza la misma banda de frecuencia que Wi-Fi (802.11), por lo que no se interfieren mutuamente.";
 choices[97][1] = "Con 802.11 AMP puede llegar a 24 Mbps.";
 choices[97][2] = "Debe evitarse en entornos escolares debido a que emite radiaci&oacute;n ionizante.";
 choices[97][3] = "Debe emitirse con un m&iacute;nimo de 10 watios.";
 answers[97] = choices[97][1];
 units[97] = "107";
 comments[97] = "Id Pregunta: 10945. TIC A1 AGE 2014";


//  Id pregunta: 11563 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Campos de la cabecera Atm que tienen un uso similar con campos de la cabecera Frame Relay.";
 choices[98]= new Array();
 choices[98][0] = "Command and Response y Cell Loss";
 choices[98][1] = "DLCI y PT";
 choices[98][2] = "VPI y VCI";
 choices[98][3] = "DE y CLP";
 answers[98] = choices[98][3];
 units[98] = "109";
 comments[98] = "Id Pregunta: 11563. NULL";


//  Id pregunta: 11578 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l es la velocidad, el ancho de banda y la banda de frecuencias en las que operan las especificaciones 80211.ac?";
 choices[99]= new Array();
 choices[99][0] = "11 Mbps, 22 Mhz, 2.4 Ghz";
 choices[99][1] = "54 Mbps, 20 Mhz, 2.4 Ghz";
 choices[99][2] = "160 Mbps, 80Mhz o 60 Mhz, 5Ghz";
 choices[99][3] = "108Mbps, 40Mhz, 2.4Ghz y 5Ghz";
 answers[99] = choices[99][2];
 units[99] = "107";
 comments[99] = "Id Pregunta: 11578. NULL";


