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

//  Id pregunta: 1494 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; se entiende por audioconferencia?:";
 choices[0]= new Array();
 choices[0][0] = "Servicio que permite a m&aacute;s de dos usuarios participar simult&aacute;neamente en una &uacute;nica conversaci&oacute;n";
 choices[0][1] = "Servicio que permite a un usuario telef&oacute;nico depositar mensajes de voz en un audiobuz&oacute;n";
 choices[0][2] = "Servicio que suministra una informaci&oacute;n grabada de tipo gen&eacute;rico";
 choices[0][3] = "Servicio de telefon&iacute;a m&oacute;vil en grupo cerrado de usuarios";
 answers[0] = choices[0][0];
 units[0] = "117";
 comments[0] = "Id Pregunta: 1494. ";


//  Id pregunta: 2925 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En relaci&oacute;n con GPRS se&ntilde;ale la opci&oacute;n incorrecta";
 choices[1]= new Array();
 choices[1][0] = "El acceso radio es por paquetes de datos";
 choices[1][1] = "Hasta 8 usuarios pueden compartir eficientemente un &uacute;nico timeslot de radio";
 choices[1][2] = "La tarificaci&oacute;n es por tiempo de conexi&oacute;n";
 choices[1][3] = "La red GPRS se puede comunicar con redes TCP/IP";
 answers[1] = choices[1][2];
 units[1] = "108";
 comments[1] = "Id Pregunta: 2925. Similar a examen TIC SS A 2003";


//  Id pregunta: 2943 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Dentro de la capa OSI, la funci&oacute;n de cifrado de datos se realiza en el nivel de:";
 choices[2]= new Array();
 choices[2][0] = "Red";
 choices[2][1] = "Transporte";
 choices[2][2] = "Sesi&oacute;n";
 choices[2][3] = "Presentaci&oacute;n";
 answers[2] = choices[2][3];
 units[2] = "100";
 comments[2] = "Id Pregunta: 2943. Similar a examen TIC SS A 2003";


//  Id pregunta: 3029 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Al ataque criptogr&aacute;fico consistente en el barrido del espacio de claves se le denomina:";
 choices[3]= new Array();
 choices[3][0] = "criptoan&aacute;lisis lineal";
 choices[3][1] = "criptoan&aacute;lisis continuo";
 choices[3][2] = "sweep-attack";
 choices[3][3] = "fuerza bruta";
 answers[3] = choices[3][3];
 units[3] = "111";
 comments[3] = "Id Pregunta: 3029. NULL";


//  Id pregunta: 3034 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes direcciones es v&aacute;lida para un equipo conectado y accesible directamente desde Internet?:";
 choices[4]= new Array();
 choices[4][0] = "256.198.234.12";
 choices[4][1] = "10.128.179.54";
 choices[4][2] = "192.139.234.12";
 choices[4][3] = "127.34.156.0";
 answers[4] = choices[4][2];
 units[4] = "100";
 comments[4] = "Id Pregunta: 3034. NULL";


//  Id pregunta: 3058 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Dentro del objeto ASP Server el m&eacute;todo que detiene la ejecuci&oacute;n de la p&aacute;gina actual y transfiere el control a la p&aacute;gina indicada en &ldquo;url&rdquo;, llevando el entorno del usuario actual a la nueva p&aacute;gina se denomina:";
 choices[5]= new Array();
 choices[5][0] = "Transfer (&ldquo;url&rdquo;)";
 choices[5][1] = "Execute (&ldquo;url&rdquo;)";
 choices[5][2] = "GotoURL (&ldquo;url&rdquo;)";
 choices[5][3] = "GoURL (&ldquo;url&rdquo;)";
 answers[5] = choices[5][1];
 units[5] = "115";
 comments[5] = "Id Pregunta: 3058. ";


//  Id pregunta: 3099 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Una transmisi&oacute;n half duplex describe:";
 choices[6]= new Array();
 choices[6][0] = "Un circuito de cuatro hilos";
 choices[6][1] = "Un cable con doble malla";
 choices[6][2] = "Una comunicaci&oacute;n alternativa en dos sentidos";
 choices[6][3] = "Todas las respuestas anteriores son ciertas";
 answers[6] = choices[6][2];
 units[6] = "100";
 comments[6] = "Id Pregunta: 3099. NULL";


//  Id pregunta: 3100 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Correo electr&oacute;nico, compartici&oacute;n de documentos FTP y/o WWW, directorio, agenda, listas de tareas&hellip; Todos ellos son:";
 choices[7]= new Array();
 choices[7][0] = "herramientas groupware s&iacute;ncronas";
 choices[7][1] = "protocolos y aplicaciones TCP/IP";
 choices[7][2] = "herramientas groupware as&iacute;ncronas";
 choices[7][3] = "aplicaciones ofim&aacute;ticas instaladas por defecto en cualquier PDA";
 answers[7] = choices[7][2];
 units[7] = "107";
 comments[7] = "Id Pregunta: 3100. NULL";


//  Id pregunta: 3128 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;C&oacute;mo se suele representar la trama de un STM-1 en SDH?";
 choices[8]= new Array();
 choices[8][0] = "como una fila de 2430 octetos separados por bloques funcionales";
 choices[8][1] = "como una matriz de 270 filas y 9 columnas de octetos separados en bloques funcionales";
 choices[8][2] = "como una columna de 2430 octetos separados por bloques funcionales";
 choices[8][3] = "como una matriz de 270 columnas y 9 filas de octetos separados en bloques funcionales";
 answers[8] = choices[8][3];
 units[8] = "109";
 comments[8] = "Id Pregunta: 3128. ";


//  Id pregunta: 3189 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Dentro del modelo OSI la funci&oacute;n de 'compatibilizaci&oacute;n de ficheros de distintos formatos', corresponde al nivel:";
 choices[9]= new Array();
 choices[9][0] = "Nivel de red";
 choices[9][1] = "Nivel de transporte";
 choices[9][2] = "Nivel de sesi&oacute;n";
 choices[9][3] = "Nivel de presentaci&oacute;n";
 answers[9] = choices[9][3];
 units[9] = "100";
 comments[9] = "Id Pregunta: 3189. NULL";


//  Id pregunta: 3197 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Dentro del modelo OSI, podemos afirmar que:";
 choices[10]= new Array();
 choices[10][0] = "El nivel 2 no hay control de flujo";
 choices[10][1] = "El nivel 3 se enfrenta a problemas de encaminamiento";
 choices[10][2] = "El nivel 4 se encarga de los problemas de interconexi&oacute;n de redes";
 choices[10][3] = "En el nivel 5 se tratan los aspectos sint&aacute;ctico y sem&aacute;ntico de la informaci&oacute;n";
 answers[10] = choices[10][1];
 units[10] = "100";
 comments[10] = "Id Pregunta: 3197. NULL";


//  Id pregunta: 3233 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes protocolos env&iacute;a, tal y como indica su especificaci&oacute;n, &quot;traps&quot;?:";
 choices[11]= new Array();
 choices[11][0] = "SNMP";
 choices[11][1] = "UDP";
 choices[11][2] = "HTTP";
 choices[11][3] = "FTP";
 answers[11] = choices[11][0];
 units[11] = "104";
 comments[11] = "Id Pregunta: 3233. ";


//  Id pregunta: 3241 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l es la distancia m&aacute;xima entre estaciones en el est&aacute;ndar 10Base5?:";
 choices[12]= new Array();
 choices[12][0] = "100 metros";
 choices[12][1] = "185 metros";
 choices[12][2] = "200 metros";
 choices[12][3] = "500 metros";
 answers[12] = choices[12][3];
 units[12] = "97";
 comments[12] = "Id Pregunta: 3241. NULL";


//  Id pregunta: 3246 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l es la relaci&oacute;n entre IMT-2000 y UMTS?:";
 choices[13]= new Array();
 choices[13][0] = "Es el mismo sistema";
 choices[13][1] = "UMTS forma parte de la familia IMT-2000";
 choices[13][2] = "IMT-2000 forma parte de la familia UMTS";
 choices[13][3] = "Son est&aacute;ndares diferentes";
 answers[13] = choices[13][1];
 units[13] = "108";
 comments[13] = "Id Pregunta: 3246. ";


//  Id pregunta: 3351 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Cuando una estaci&oacute;n Token Ring detecta un problema serio en la red:";
 choices[14]= new Array();
 choices[14][0] = "La estaci&oacute;n que lo detecta envia una trama de advertencia ('beacon') que define el dominio del fallo";
 choices[14][1] = "La estaci&oacute;n espera que el servidor local m&aacute;s cercano reconfigure las tablas de direcciones";
 choices[14][2] = "La estaci&oacute;n transmite mensajes exploratorios a sus siguientes vecinos activos ";
 choices[14][3] = "La estaci&oacute;n escucha por tr&aacute;fico y si no oye nada, manda testigos a todas las estaciones activas locales (en el anillo)";
 answers[14] = choices[14][0];
 units[14] = "102";
 comments[14] = "Id Pregunta: 3351. ";


//  Id pregunta: 3362 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Del protocolo IKE de IPSec podemos decir:";
 choices[15]= new Array();
 choices[15][0] = "que su componente OAKLEY usa el m&eacute;todo de Diffie-Helman modificado para la generaci&oacute;n e intercambio de claves";
 choices[15][1] = "que tiene 3 componentes: ISAKMP, SA y OAKLEY";
 choices[15][2] = "que s&oacute;lo se usa en modo t&uacute;nel, ya que el modo transporte no cifra la cabecera IP original";
 choices[15][3] = "nada de lo anterior es cierto";
 answers[15] = choices[15][0];
 units[15] = "111";
 comments[15] = "Id Pregunta: 3362. Consultar rfc 2409";


//  Id pregunta: 3381 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El m&eacute;todo de Okumura-Hata se usa para:";
 choices[16]= new Array();
 choices[16][0] = "Resoluci&oacute;n de conflictos en negociaciones cuando los contendientes no desean verse en persona";
 choices[16][1] = "Calcular el coste de aplicaci&oacute;n de una u otra estrategia de adquisici&oacute;n de bienes y servicios inform&aacute;ticos y de telecomunicaci&oacute;n";
 choices[16][2] = "C&aacute;lculo de coberturas en enlaces radioel&eacute;ctricos";
 choices[16][3] = "No existe el m&eacute;todo de Okumura-Hata";
 answers[16] = choices[16][2];
 units[16] = "108";
 comments[16] = "Id Pregunta: 3381. ";


//  Id pregunta: 3409 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Frame Relay se caracteriza por ofrecer un servicio:";
 choices[17]= new Array();
 choices[17][0] = "Orientado a conexi&oacute;n";
 choices[17][1] = "Fiable";
 choices[17][2] = "Sin garant&iacute;as de caudal m&iacute;nimo";
 choices[17][3] = "Con correcci&oacute;n de errores cada vez que se env&iacute;a un paquete al nodo siguiente";
 answers[17] = choices[17][0];
 units[17] = "109";
 comments[17] = "Id Pregunta: 3409. ";


//  Id pregunta: 3411 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Funciones como contabilidad, enrutamiento, control de flujo, control de congesti&oacute;n o direccionamiento pertenecen al:";
 choices[18]= new Array();
 choices[18][0] = "nivel de transporte";
 choices[18][1] = "nivel de enlace";
 choices[18][2] = "nivel de red";
 choices[18][3] = "son funciones presentes en varios niveles";
 answers[18] = choices[18][3];
 units[18] = "100";
 comments[18] = "Id Pregunta: 3411. NULL";


//  Id pregunta: 3413 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Gen&eacute;ricamente, xDSL es un conjunto de t&eacute;cnicas para:";
 choices[19]= new Array();
 choices[19][0] = "Transmitir a trav&eacute;s de l&iacute;neas de cobre a alta velocidad";
 choices[19][1] = "Transmitir a trav&eacute;s de l&iacute;neas &oacute;pticas a alta velocidad";
 choices[19][2] = "Transmitir por ondas de radio";
 choices[19][3] = "Transmitir utilizando sat&eacute;lites";
 answers[19] = choices[19][0];
 units[19] = "107";
 comments[19] = "Id Pregunta: 3413. NULL";


//  Id pregunta: 3426 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Indicar entre las siguientes normas del IEEE la que trata sobre redes de fibra &oacute;ptica:";
 choices[20]= new Array();
 choices[20][0] = "802.6";
 choices[20][1] = "802.7";
 choices[20][2] = "802.8";
 choices[20][3] = "802.9";
 answers[20] = choices[20][2];
 units[20] = "101";
 comments[20] = "Id Pregunta: 3426. ";


//  Id pregunta: 3432 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Indicar la respuesta verdadera respecto a la pila de protocolos TCP/IP:";
 choices[21]= new Array();
 choices[21][0] = "NNTP usa UDP";
 choices[21][1] = "NTP utiliza &uacute;nicamente TCP";
 choices[21][2] = "FTP utiliza TCP";
 choices[21][3] = "NTP no es necesario en un entorno multihost";
 answers[21] = choices[21][2];
 units[21] = "100";
 comments[21] = "Id Pregunta: 3432. NULL";


//  Id pregunta: 3476 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  El tiempo m&aacute;ximo de paso de datos de una estaci&oacute;n en una red Ethernet a 100 Mbits es:";
 choices[22]= new Array();
 choices[22][0] = "Igual al tiempo que tarda en propagarse un mensaje con longitud m&aacute;xima multiplicado por el n&uacute;mero de nodos en ese tramo";
 choices[22][1] = "No hay tiempo m&aacute;ximo";
 choices[22][2] = "Depende fundamentalmente de si el soporte es de cobre o de fibra &oacute;ptica";
 choices[22][3] = "No existe tiempo m&aacute;ximo ya que es inmediato, pues que el acceso al medio del mensaje lo hace en cuanto escucha que no hay tr&aacute;fico en la red";
 answers[22] = choices[22][1];
 units[22] = "101";
 comments[22] = "Id Pregunta: 3476. ";


//  Id pregunta: 3495 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  En el entorno de las redes inal&aacute;mbricas se denomina &quot;hot-spot&quot;:";
 choices[23]= new Array();
 choices[23][0] = "A la zona de cobertura con mayor demanda de tr&aacute;fico";
 choices[23][1] = "A los emplazamientos con cobertura WiFi";
 choices[23][2] = "A zonas de cobertura con potenciales problemas de interferencias";
 choices[23][3] = "A las zonas de sombra";
 answers[23] = choices[23][1];
 units[23] = "107";
 comments[23] = "Id Pregunta: 3495. NULL";


//  Id pregunta: 3557 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En telefon&iacute;a m&oacute;vil, &iquest;cu&aacute;l de los siguientes sistemas permite mayor densidad de tr&aacute;fico?:";
 choices[24]= new Array();
 choices[24][0] = "DECT";
 choices[24][1] = "DCS 1800";
 choices[24][2] = "GSM ";
 choices[24][3] = "NMT";
 answers[24] = choices[24][0];
 units[24] = "108";
 comments[24] = "Id Pregunta: 3557. ";


//  Id pregunta: 3592 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  La conocida norma de m&oacute;dems V.90 lleva por t&iacute;tulo:";
 choices[25]= new Array();
 choices[25][0] = "&quot;Par constituido por un m&oacute;dem digital y un m&oacute;dem anal&oacute;gico para uso en la red telef&oacute;nica p&uacute;blica conmutada (RTPC) a velocidades de se&ntilde;alizaci&oacute;n de datos de hasta 56000 bps en sentido descendente y hasta 33000 bps en sentido ascendente&quot;";
 choices[25][1] = "&quot;M&oacute;dem digital que funciona a velocidades de se&ntilde;alizaci&oacute;n de datos de hasta 64000 bps para uso en una conexi&oacute;n con conmutaci&oacute;n de circuitos a 4 hilos y en circuitos digitales arrendados punto a punto a 4 hilos&quot;";
 choices[25][2] = "&quot;M&oacute;dem para voz y datos simult&aacute;neos que funciona a una velocidad de se&ntilde;alizaci&oacute;n de voz m&aacute;s datos de 4800 bps, con conmutaci&oacute;n autom&aacute;tica opcional a velocidades de se&ntilde;alizaci&oacute;n de hasta 14400 bps para datos solamente, destinado al uso de la red telef&oacute;nica";
 choices[25][3] = "&quot;Familia de m&oacute;dems d&uacute;plex a 2 hilos que funcionan a velocidades binarias de hasta 9600 bps para uso en la red telef&oacute;nica general conmutada y en circuitos arrendados de tipo telef&oacute;nico&quot;";
 answers[25] = choices[25][0];
 units[25] = "103";
 comments[25] = "Id Pregunta: 3592. modems";


//  Id pregunta: 3611 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  La interconexi&oacute;n de intranets puede llevarse a cabo mediante:";
 choices[26]= new Array();
 choices[26][0] = "repetidores y concentradores a nivel f&iacute;sico, encaminadores a nivel de enlace, puentes a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 choices[26][1] = "repetidores, concentradores y encaminadores a nivel f&iacute;sico, puentes a nivel de enlace y pasarelas a nivel de aplicaci&oacute;n";
 choices[26][2] = "repetidores y concentradores a nivel f&iacute;sico, puentes a nivel de enlace, encaminadores a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 choices[26][3] = "repetidores a nivel f&iacute;sico, concentradores y puentes a nivel de enlace, encaminadores a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 answers[26] = choices[26][2];
 units[26] = "100,103,113";
 comments[26] = "Id Pregunta: 3611. NULL";


//  Id pregunta: 3664 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Un router IP puede intercambiar tr&aacute;fico IP:";
 choices[27]= new Array();
 choices[27][0] = "Entre un interfaz Ethernet y un interfaz STM-1";
 choices[27][1] = "S&oacute;lo entre interfaces de un mismo nivel";
 choices[27][2] = "Nunca si existen m&aacute;quinas UNIX y Windows en cada una de las redes que conecta";
 choices[27][3] = "Ninguna de las anteriores";
 answers[27] = choices[27][0];
 units[27] = "102";
 comments[27] = "Id Pregunta: 3664. ";


//  Id pregunta: 3710 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Las velocidades de transmisi&oacute;n y de modulaci&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "Son siempre iguales";
 choices[28][1] = "La de transmisi&oacute;n s&oacute;lo puede ser mayor o igual a la de modulaci&oacute;n";
 choices[28][2] = "La de modulaci&oacute;n s&oacute;lo puede ser mayor o igual que la de transmisi&oacute;n";
 choices[28][3] = "La velocidad de transmisi&oacute;n puede ser mayor, menor o igual que la de modulaci&oacute;n, seg&uacute;n el caso";
 answers[28] = choices[28][1];
 units[28] = "99";
 comments[28] = "Id Pregunta: 3710. *: transmision modulacion";


//  Id pregunta: 3811 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Seg&uacute;n las RFCs 822 y 2822, sobre el formato de los mensajes de correo electr&oacute;nico, &eacute;stos se componen de:";
 choices[29]= new Array();
 choices[29][0] = "sobre, cabeceras y cuerpo";
 choices[29][1] = "cabeceras, cuerpo y cola";
 choices[29][2] = "sobre, cabeceras, cuerpo y cola";
 choices[29][3] = "cabeceras y cuerpo";
 answers[29] = choices[29][0];
 units[29] = "106";
 comments[29] = "Id Pregunta: 3811. ";


//  Id pregunta: 3833 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  SIM equivale a:";
 choices[30]= new Array();
 choices[30][0] = "Software for IMSI of Mobiles";
 choices[30][1] = "Secure Identification of Mobile Subscriber";
 choices[30][2] = "Subscriber Identity Module";
 choices[30][3] = "Synchronous Internet Media";
 answers[30] = choices[30][2];
 units[30] = "108";
 comments[30] = "Id Pregunta: 3833. ";


//  Id pregunta: 3847 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Tras ser extraidos los datos por la estaci&oacute;n destino en una red  Token Ring &oacute; IEEE 802.5:";
 choices[31]= new Array();
 choices[31][0] = "Se devuelve un acuse de recibo ('acknowledgment')  antes de liberar el testigo";
 choices[31][1] = "La trama de datos circula hasta completar una vuelta entera hasta que es eliminada por la estaci&oacute;n emisora";
 choices[31][2] = "Se altera el testigo (que se convierte en una secuencia de cabecera de trama)";
 choices[31][3] = "La estaci&oacute;n a&ntilde;ade informaci&oacute;n adicional al testigo antes de retransmitir la trama";
 answers[31] = choices[31][1];
 units[31] = "101, 102";
 comments[31] = "Id Pregunta: 3847. ";


//  Id pregunta: 3852 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  WLL es:";
 choices[32]= new Array();
 choices[32][0] = "Una DLL para dispositivos wireless";
 choices[32][1] = "Una t&eacute;cnica de dise&ntilde;o de enlaces o links a p&aacute;ginas web";
 choices[32][2] = "Un bucle local inal&aacute;mbrico de abonado en telefon&iacute;a fija";
 choices[32][3] = "Nada de lo anterior";
 answers[32] = choices[32][2];
 units[32] = "103";
 comments[32] = "Id Pregunta: 3852. ";


//  Id pregunta: 3867 AÃ±o de creación de pregunta: 2004-01-01
 questions[33]= "34)  Qu&eacute; m&eacute;todo no se emplea para generar contenido din&aacute;mico en el servidor";
 choices[33]= new Array();
 choices[33][0] = "JavaScript";
 choices[33][1] = "CGI";
 choices[33][2] = "JSP";
 choices[33][3] = "ASP ";
 answers[33] = choices[33][0];
 units[33] = "114";
 comments[33] = "Id Pregunta: 3867. Tanenbaum";


//  Id pregunta: 3902 AÃ±o de creación de pregunta: 2004-01-01
 questions[34]= "35)  Es posible la transmisi&oacute;n de datos entre dispositivos que siguen el estandar 802.11a y dispositivos que siguen el estandar 802.11b";
 choices[34]= new Array();
 choices[34][0] = "S&iacute;, porque ambos son dispositivos inal&aacute;mbricos WiFi";
 choices[34][1] = "No, porque su radio m&aacute;ximo de acci&oacute;n es diferente";
 choices[34][2] = "No";
 choices[34][3] = "Si siempre que utilicen el mismo canal dentro de la banda de frecuencias en que transmiten.";
 answers[34] = choices[34][2];
 units[34] = "107";
 comments[34] = "Id Pregunta: 3902. Porque operan en distintas frecuencias.";


//  Id pregunta: 3972 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Una de las siguientes afirmaciones no es correcta:";
 choices[35]= new Array();
 choices[35][0] = "El protocolo SIP se utiliza en la red de transporte de una red UMTS";
 choices[35][1] = "H.323 y SIP son protocolos que se utilizan en VoIP (Voz sobre IP)";
 choices[35][2] = "H.323 es un protocolo mucho m&aacute;s sencillo de implementar que SIP";
 choices[35][3] = "Los primeros productos comerciales de VoIP utilizaban H.323";
 answers[35] = choices[35][2];
 units[35] = "109";
 comments[35] = "Id Pregunta: 3972. ";


//  Id pregunta: 4025 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l es el ancho de banda de separaci&oacute;n entre las portadoras ascendentes y descendentes en GSM?";
 choices[36]= new Array();
 choices[36][0] = "15 MHz";
 choices[36][1] = "25 MHz";
 choices[36][2] = "35 MHz";
 choices[36][3] = "45 MHz";
 answers[36] = choices[36][3];
 units[36] = "108";
 comments[36] = "Id Pregunta: 4025. ";


//  Id pregunta: 4038 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  De acuerdo con la Ley 9/2014, General de Telecomunicaciones, y con respecto a la utilizaci&oacute;n de los servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico en general, no est&aacute; definido como un derecho de los consumidores y usuarios finales:";
 choices[37]= new Array();
 choices[37][0] = "El derecho de desconexi&oacute;n de cualquier servicio, previa solicitud del usuario.";
 choices[37][1] = "El derecho a obtener una compensaci&oacute;n por la interrupci&oacute;n del servicio.";
 choices[37][2] = "El derecho a recibir informaci&oacute;n comparable, pertinente y actualizada sobre la calidad de los servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico.";
 choices[37][3] = "El derecho a elegir un m&eacute;todo de pago para el abono de los correspondientes servicios entre los com&uacute;nmente utilizados en el tr&aacute;fico comercial.";
 answers[37] = choices[37][0];
 units[37] = "110";
 comments[37] = "Id Pregunta: 4038. ";


//  Id pregunta: 4042 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  El art&iacute;culo 25 de la Ley 9/2014 de Telecomunicaciones define el servicio universal como &lt;&lt;el conjunto de servicios cuya prestaci&oacute;n se garantiza para todos los usuarios finales &hellip; :";
 choices[38]= new Array();
 choices[38][0] = "&hellip; con independencia de su localicaci&oacute;n geogr&aacute;fica&gt;&gt;";
 choices[38][1] = "&hellip; con independencia de su localicaci&oacute;n geogr&aacute;fica y con una calidad determinada&gt;&gt;";
 choices[38][2] = "&hellip; con independencia de su localicaci&oacute;n geogr&aacute;fica y a un precio asequible&gt;&gt;";
 choices[38][3] = "&hellip; con independencia de su localicaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible&gt;&gt;";
 answers[38] = choices[38][3];
 units[38] = "110";
 comments[38] = "Id Pregunta: 4042. ";


//  Id pregunta: 4049 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  &iquest;Qu&eacute; se suele encontrar en una DMZ?";
 choices[39]= new Array();
 choices[39][0] = "un proxy de  correo";
 choices[39][1] = "un cache web";
 choices[39][2] = "un server web";
 choices[39][3] = "todas las anteriores";
 answers[39] = choices[39][3];
 units[39] = "111";
 comments[39] = "Id Pregunta: 4049. NULL";


//  Id pregunta: 4054 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Un buen sistema de gesti&oacute;n de contrase&ntilde;as se caracteriza por";
 choices[40]= new Array();
 choices[40][0] = "El sistema, si procede, permitir&aacute; a los usuarios que seleccionen sus contrase&ntilde;as";
 choices[40][1] = "Las contrase&ntilde;as de los usuarios con m&aacute;s privilegios se cambiar&aacute;n con mayor frecuencia";
 choices[40][2] = "El sistema no mantendr&aacute; un registro de las &uacute;ltimas contrase&ntilde;as usadas, manteniendo s&oacute;lo la actual";
 choices[40][3] = "A y B son correctas";
 answers[40] = choices[40][3];
 units[40] = "111";
 comments[40] = "Id Pregunta: 4054. NULL";


//  Id pregunta: 4109 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Webmail es:";
 choices[41]= new Array();
 choices[41][0] = "Una soluci&oacute;n de correo electr&oacute;nico a trav&eacute;s de Internet en la que s&oacute;lo necesitas un programa de correo electr&oacute;nico especializado que accede a trav&eacute;s del protocolo POP3.";
 choices[41][1] = "Una soluci&oacute;n de correo electr&oacute;nico a trav&eacute;s de Internet en la que s&oacute;lo necesitas un Navegador.";
 choices[41][2] = "a) y b) son ciertas";
 choices[41][3] = "a) y b) son falsas";
 answers[41] = choices[41][1];
 units[41] = "112";
 comments[41] = "Id Pregunta: 4109. ";


//  Id pregunta: 4130 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Los elementos XML de tipo y atributo deben tener una identidad &uacute;nica en el &aacute;mbito del";
 choices[42]= new Array();
 choices[42][0] = "servidor o sitio";
 choices[42][1] = "espacio de nombres ";
 choices[42][2] = "nombre de dominio";
 choices[42][3] = "nombre de dominio completamente cualificado (FQDM)";
 answers[42] = choices[42][1];
 units[42] = "69";
 comments[42] = "Id Pregunta: 4130. NULL";


//  Id pregunta: 4132 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  Las im&aacute;genes se utilizan para";
 choices[43]= new Array();
 choices[43][0] = "la realizaci&oacute;n de un backup t&iacute;pico";
 choices[43][1] = "almacenar datos antiguos para asegurar la compatibilidad";
 choices[43][2] = "para recuperar datos en caso de desastre";
 choices[43][3] = "todas las anteriores";
 answers[43] = choices[43][2];
 units[43] = "97";
 comments[43] = "Id Pregunta: 4132. NULL";


//  Id pregunta: 4176 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  La primera tarea a realizar en un plan de continuidad de negocio es";
 choices[44]= new Array();
 choices[44][0] = "Duplicar los equipos cr&iacute;ticos";
 choices[44][1] = "Hacer una copia de seguridad de todos los datos";
 choices[44][2] = "Realizar un an&aacute;lisis de la criticidad de los diferentes recursos ante posibles situaciones de emergencia";
 choices[44][3] = "Evaluar la habilidad del personal para responder adecuadamente a situaciones de emergencia";
 answers[44] = choices[44][2];
 units[44] = "97";
 comments[44] = "Id Pregunta: 4176. NULL";


//  Id pregunta: 4199 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  Estandar que permite redes inal&aacute;mbricas con frecuencias de 2.4 GHz.";
 choices[45]= new Array();
 choices[45][0] = "802.11a";
 choices[45][1] = "802.11b";
 choices[45][2] = "802.11g";
 choices[45][3] = "B y C son correctas";
 answers[45] = choices[45][3];
 units[45] = "107";
 comments[45] = "Id Pregunta: 4199. NULL";


//  Id pregunta: 4333 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Un Puente o Bridge:";
 choices[46]= new Array();
 choices[46][0] = "S&oacute;lo funcionan con TCP/IP.";
 choices[46][1] = "Puede dividir una red en dos segmentos.";
 choices[46][2] = "Permiten establecer una Topolog&iacute;a en Estrella en una red en BUS al garantizar la compatibilidad en el nivel 2 de OSI.";
 choices[46][3] = "Encaminan la informaci&oacute;n hacia el destino siguiendo el trayecto m&aacute;s corto por la red.";
 answers[46] = choices[46][1];
 units[46] = "100";
 comments[46] = "Id Pregunta: 4333. ";


//  Id pregunta: 4426 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes clases de servicio es m&aacute;s adecuada en ATM para la transmisi&oacute;n de video comprimido en tiempo real?";
 choices[47]= new Array();
 choices[47][0] = "UBR";
 choices[47][1] = "VBR-NTR";
 choices[47][2] = "VBR-RT";
 choices[47][3] = "CBR";
 answers[47] = choices[47][2];
 units[47] = "109";
 comments[47] = "Id Pregunta: 4426. ";


//  Id pregunta: 4434 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l es el ancho de banda que podr&aacute; obtener un usuario de una red UMTS si se est&aacute; desplazando en un veh&iacute;culo a 40 km/h en un entorno urbano?";
 choices[48]= new Array();
 choices[48][0] = "2 Mbps independientemente de la situaci&oacute;n del usuario";
 choices[48][1] = "100 kbps";
 choices[48][2] = "144 Kbps";
 choices[48][3] = "384 kbps";
 answers[48] = choices[48][3];
 units[48] = "108";
 comments[48] = "Id Pregunta: 4434. ";


//  Id pregunta: 4486 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  Indique cual de las siguientes afirmaciones es falsa:";
 choices[49]= new Array();
 choices[49][0] = "Acceden al medio de transmisi&oacute;n en periodos de tiempo predeterminados, por lo que nunca se producen colisiones.";
 choices[49][1] = "El algoritmo de &aacute;rbol de extensi&oacute;n (spanning tree algorithm) es utilizado par los dispositivos puentes (o &quot;bridges&quot;) para construir topolog&iacute;as de interconexi&oacute;n de LAN's libres de bucles.";
 choices[49][2] = "Los encaminadores o routers deben tener implementadas las funcionalidades de los 7 niveles del modelo de referencia OSI para descubrir las rutas de encaminamiento adecuadas.";
 choices[49][3] = "Las pasarelas o gateways permiten, entre otras funcionalidades Ia implementaci&oacute;n de servicios NAT de traducci&oacute;n de direcciones IP.";
 answers[49] = choices[49][2];
 units[49] = "102";
 comments[49] = "Id Pregunta: 4486. ";


//  Id pregunta: 4598 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  Cual de los siguientes servicios o redes est&aacute;n sujetos al &aacute;mbito de aplicaci&oacute;n de la Ley 9/2014 General de Telecomunicaciones";
 choices[50]= new Array();
 choices[50][0] = "los contenidos difundidos a trav&eacute;s del servicio de radiodifusi&oacute;n sonora";
 choices[50][1] = "los contenidos difundidos a trav&eacute;s del servicio de radiodifusi&oacute;n televisiva";
 choices[50][2] = "las redes de televisi&oacute;n por cable";
 choices[50][3] = "servicios que suministren contenidos transmitidos mediante redes y servicios de comunicaciones electr&oacute;nicas";
 answers[50] = choices[50][2];
 units[50] = "110";
 comments[50] = "Id Pregunta: 4598. ";


//  Id pregunta: 5276 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Indique cu&aacute;l de los siguientes no es un servicio b&aacute;sico de la red SARA de las administraciones:";
 choices[51]= new Array();
 choices[51][0] = "SMTP";
 choices[51][1] = "PROXY";
 choices[51][2] = "DHCP";
 choices[51][3] = "DNS";
 answers[51] = choices[51][2];
 units[51] = "103";
 comments[51] = "Id Pregunta: 5276. ";


//  Id pregunta: 5668 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;Cual de las siguientes empresas no est&aacute; entre las que desarrollaron originalmente el protocolo WS-Security?";
 choices[52]= new Array();
 choices[52][0] = "IBM";
 choices[52][1] = "Microsoft";
 choices[52][2] = "VeriSign";
 choices[52][3] = "SUN";
 answers[52] = choices[52][3];
 units[52] = "113";
 comments[52] = "Id Pregunta: 5668. ";


//  Id pregunta: 5871 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  En referencia al direccionamiento IPv6 definido en el RFC 1884, indique cu&aacute;l de los apartados siguientes no se corresponde con un tipo de direcciones en IPv6:";
 choices[53]= new Array();
 choices[53][0] = "Unicast";
 choices[53][1] = "Multicast";
 choices[53][2] = "Anycast";
 choices[53][3] = "Broadcast";
 answers[53] = choices[53][3];
 units[53] = "100";
 comments[53] = "Id Pregunta: 5871. MAP 2008 A1";


//  Id pregunta: 5897 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  &iquest;Qu&eacute; tecnolog&iacute;a de las siguientes es m&aacute;s adecuada para generar contenido HTML din&aacute;mico en una aplicaci&oacute;n Java EE?";
 choices[54]= new Array();
 choices[54][0] = "Servlets";
 choices[54][1] = "JSP";
 choices[54][2] = "JNI";
 choices[54][3] = "JAXP";
 answers[54] = choices[54][1];
 units[54] = "116";
 comments[54] = "Id Pregunta: 5897. ";


//  Id pregunta: 5977 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  El protocolo de encaminamiento m&aacute;s adecuado a utilizar en un punto neutro de interconexi&oacute;n en el que varios proveedores de Internet intercambian tr&aacute;fico es:";
 choices[55]= new Array();
 choices[55][0] = "OSPF.";
 choices[55][1] = "No es adecuado usar encaminamiento din&aacute;mico, se recurre a tablas est&aacute;ticas.";
 choices[55][2] = "RIP.";
 choices[55][3] = "BGP-4.";
 answers[55] = choices[55][3];
 units[55] = "102";
 comments[55] = "Id Pregunta: 5977. TIC A 2009";


//  Id pregunta: 6138 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Indique la opci&oacute;n FALSA. Dentro del servicio universal definido por la Ley 9/2014, General de Telecomunicaciones, se debe garantizar:";
 choices[56]= new Array();
 choices[56][0] = "El acceso funcional a internet a velocidad suficiente.";
 choices[56][1] = "Una gu&iacute;a general de n&uacute;meros de abonados.";
 choices[56][2] = "Una cobertura suficiente que permita el acceso a la red de telefon&iacute;a m&oacute;vil.";
 choices[56][3] = "Una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago en todo el territorio nacional.";
 answers[56] = choices[56][2];
 units[56] = "110";
 comments[56] = "Id Pregunta: 6138. TIC A 2009";


//  Id pregunta: 6160 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[57]= new Array();
 choices[57][0] = "Las MCUs permiten sesiones de videoconferencia multipunto con tres o mas localizaciones.";
 choices[57][1] = "Las soluciones de videoconferencia sin MCUs requieren un menor ancho de banda.";
 choices[57][2] = "En las soluciones de videoconferencia con MCU cada equipo env&iacute;a la informaci&oacute;n de audio y video con la MCU y esta la env&iacute;a al destinatario. ";
 choices[57][3] = "Las soluciones de videoconferencia sin MCU necesitan equipos con mayor coste.";
 answers[57] = choices[57][1];
 units[57] = "117";
 comments[57] = "Id Pregunta: 6160. ";


//  Id pregunta: 6475 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes elementos NO est&aacute; incluido en el directorio privado WEB-INF de una aplicaci&oacute;n Web?";
 choices[58]= new Array();
 choices[58][0] = "Un archivo web.xml";
 choices[58][1] = "Un subdirectorio llamado classes";
 choices[58][2] = "Documentos de Microsoft Office";
 choices[58][3] = "Un subdirectorio lib para contener los archivos JAR utilizados por la aplicaci&oacute;n Web";
 answers[58] = choices[58][2];
 units[58] = "116";
 comments[58] = "Id Pregunta: 6475. Castilla La Mancha 2009";


//  Id pregunta: 6539 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Cu&aacute;l de las siguientes opciones no es una tecnolog&iacute;a de administraci&oacute;n de seguridad centralizadas?";
 choices[59]= new Array();
 choices[59][0] = "TACACS+";
 choices[59][1] = "Radius";
 choices[59][2] = "Un grupo de trabajo peer-to-peer";
 choices[59][3] = "Diameter";
 answers[59] = choices[59][2];
 units[59] = "111";
 comments[59] = "Id Pregunta: 6539. NULL";


//  Id pregunta: 6560 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 3.5G?";
 choices[60]= new Array();
 choices[60][0] = "Tecnolog&iacute;a HSDPA";
 choices[60][1] = "Capacidad enlace descendente: hasta 14.4 Mbps";
 choices[60][2] = "El uso del canal descendente puede ser compartido por varios usuarios";
 choices[60][3] = "Todas las respuestas anteriores son correctas";
 answers[60] = choices[60][3];
 units[60] = "108";
 comments[60] = "Id Pregunta: 6560. NULL";


//  Id pregunta: 6563 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  GPRS no se caracteriza por";
 choices[61]= new Array();
 choices[61][0] = "Los paquetes se envian a intervalos de tiempo irregulares";
 choices[61][1] = "El nodo GGSN es el nodo pasarela que realiza la interfaz con las redes de datos externas";
 choices[61][2] = "No requiere gesti&oacute;n de movilidad";
 choices[61][3] = "Todas las respuestas anteriores son correctas";
 answers[61] = choices[61][2];
 units[61] = "108";
 comments[61] = "Id Pregunta: 6563. NULL";


//  Id pregunta: 6572 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto al modelo OSI?";
 choices[62]= new Array();
 choices[62][0] = "La capa 5 establece, mantiene y cierra el di&aacute;logo entre dos aplicaciones. Controla la organizaci&oacute;n del di&aacute;logo y su sincronizaci&oacute;n";
 choices[62][1] = "La capa 4 proporciona enrutamiento, direccionamiento y fragmentaci&oacute;n de paquetes. Esta capa determina rutas alternativas para evitar congesti&oacute;n de red.";
 choices[62][2] = "La capa 3 proporciona transmisiones extremo a extremo";
 choices[62][3] = "La capa 2 proporciona enrutamiento, direccionamiento y fragmentaci&oacute;n de paquetes. Esta capa determina rutas alternativas para evitar congesti&oacute;n de red.";
 answers[62] = choices[62][0];
 units[62] = "100";
 comments[62] = "Id Pregunta: 6572. NULL";


//  Id pregunta: 8167 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Respecto al API, Streaming API for XML (StAX), indicar la afirmaci&oacute;n correcta:";
 choices[63]= new Array();
 choices[63][0] = "Emplea &quot;push parsing&quot;.";
 choices[63][1] = "Permite vistas XML de datos no XML.";
 choices[63][2] = "Es un API unidireccional.";
 choices[63][3] = "El cliente del API no controla el thread de la aplicaci&oacute;n.";
 answers[63] = choices[63][1];
 units[63] = "116";
 comments[63] = "Id Pregunta: 8167. Examen TIC A1 2010";


//  Id pregunta: 8350 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)   &iquest;Para que sirve la palabra clave &quot;static&quot; en Java? ";
 choices[64]= new Array();
 choices[64][0] = "Indica que aquel rn&eacute;todo o variable que precede es constante, es decir, no puede modificarse";
 choices[64][1] = "Permite indicar que el m&eacute;todo o la variable al que precede pertenece a la clase en lugar de al objeto";
 choices[64][2] = "Indica que la variable o m&eacute;todo al que precede no puede ser accedida desde otras clases";
 choices[64][3] = "Indica que la variable o m&eacute;todo al que precede no puede ser accedida desde la dase a la que pertenece.";
 answers[64] = choices[64][1];
 units[64] = "116";
 comments[64] = "Id Pregunta: 8350. Examen TIC A2 2010";


//  Id pregunta: 8451 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  El est&aacute;ndar 802.11b mas conocido como Wifi, trabaja en la banda libre de:";
 choices[65]= new Array();
 choices[65][0] = "2.4 GHz";
 choices[65][1] = "2.4 MHz";
 choices[65][2] = "2.4 THz";
 choices[65][3] = "2 GHz";
 answers[65] = choices[65][0];
 units[65] = "107";
 comments[65] = "Id Pregunta: 8451. Analista Ayto. Madrid 2010";


//  Id pregunta: 8464 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  El .NET Framework 3.5, facilita tareas de programaci&oacute;n de gesti&oacute;n de cadenas de texto, colecciones de datos, conectividad con base de datos, acceso a fichero, entre otros; adem&aacute;s incluye tipos para soportar varios escenarios de desarrollo especializado. &iquest;Cu&aacute;l de los siguientes servicios o aplicaciones pueden desarrollarse sobre .NET Framework?:";
 choices[66]= new Array();
 choices[66][0] = "Windows Forms";
 choices[66][1] = "Web Services";
 choices[66][2] = "Ambos";
 choices[66][3] = "Ninguno";
 answers[66] = choices[66][2];
 units[66] = "115";
 comments[66] = "Id Pregunta: 8464. Analista Ayto. Madrid 2010";


//  Id pregunta: 8521 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  En la planificaci&oacute;n de la capacidad de los sistemas de informaci&oacute;n, una fase fundamental es la proyecci&oacute;n. Para ello se utilizan diversas t&eacute;cnicas, entre las que se encuentra la teor&iacute;a de colas. &iquest;Qu&eacute; valor ideal deber&iacute;a tomar el llamado factor de cola?";
 choices[67]= new Array();
 choices[67][0] = "Cualquier valor negativo.";
 choices[67][1] = "Fq=0.";
 choices[67][2] = "Fq=1.";
 choices[67][3] = "Infinito.";
 answers[67] = choices[67][2];
 units[67] = "104";
 comments[67] = "Id Pregunta: 8521. Examen TIC A2 2010 interna";


//  Id pregunta: 8523 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Qu&eacute; tama&ntilde;o tiene una celda ATM?";
 choices[68]= new Array();
 choices[68][0] = "48 bytes, de los cuales 44 son para transmisi&oacute;n de informaci&oacute;n y, el resto, para uso de campos de control.";
 choices[68][1] = "El campo de direcci&oacute;n o cabecera tiene una longitud de 2 octetos, ampiable hasta 4 y un campo de informaci&oacute;n de entre 1 y 8000 bytes (1600 por defecto).";
 choices[68][2] = "Los doce primeros octetos est&aacute;n presentes en cada celda, como cabecera de control, con un cuerpo de informaci&oacute;n de longitud variable.";
 choices[68][3] = "53 bytes, de los cuales 48 (opcionalmente 44) son para trasiego de informaci&oacute;n y, los restantes, para uso de campos de control (cabecera) con datos de direccionamiento";
 answers[68] = choices[68][3];
 units[68] = "109";
 comments[68] = "Id Pregunta: 8523. Examen TIC A2 2010 interna";


//  Id pregunta: 8626 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Un cable consistente en un n&uacute;cleo de vidrio con un alto Indice refracci&oacute;n, rodeada de una capa o revestimiento de material similar, pero con &iacute;ndice de refracci&oacute;n ligeramente menor, y, todo ello, envuelto en una cubierta do protecci&oacute;n totalmente opaca que le proporciona consistencia, es un cable:";
 choices[69]= new Array();
 choices[69][0] = "De par trenzado tipo BS/UTP (Braided ana screened unshielded twisteo pair).";
 choices[69][1] = "Coaxial de tipo thick";
 choices[69][2] = "De par trenzado tipo S/STP (Screened and shielded twisted pair)";
 choices[69][3] = "De fibra &oacute;ptica";
 answers[69] = choices[69][3];
 units[69] = "99";
 comments[69] = "Id Pregunta: 8626. Examen TIC A2 2010 interna";


//  Id pregunta: 8686 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  En el protocolo MPLS, la cabecera de las etiquetas MPLS, NO contiene el siguiente item:";
 choices[70]= new Array();
 choices[70][0] = "Comprobaci&oacute;n de redundancia c&iacute;clica (4 bits)";
 choices[70][1] = "Tiempo de vida (8 bits)";
 choices[70][2] = "Flag que determina final de la pila de etiquetas (1 bit)";
 choices[70][3] = "Tipo de tr&aacute;fico (3 bits) usado para se&ntilde;alar la calidad de servicio";
 answers[70] = choices[70][0];
 units[70] = "100";
 comments[70] = "Id Pregunta: 8686. Examen UPM A2 2011";


//  Id pregunta: 8771 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Se ha comprado una c&aacute;mara IP que requiere m&aacute;s potencia de la habitual, m&aacute;s que con la normal IEEE 802.3.af. Esta c&aacute;mara funciona con la versi&oacute;n actualizada de IEEE 802.3af y requiere POE con mayor alimentaci&oacute;n. Como se llama esta norma si es que existe:";
 choices[71]= new Array();
 choices[71][0] = "IEEE 802.3at, PoE+ o PoE Plus.";
 choices[71][1] = "IEEE 802.3ag, o PoE extendido.";
 choices[71][2] = "PoE2.";
 choices[71][3] = "No existe una actualizaci&oacute;n del standard IEEE 802.3af";
 answers[71] = choices[71][0];
 units[71] = "101";
 comments[71] = "Id Pregunta: 8771. Examen UPM A2 2011";


//  Id pregunta: 9387 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  Se&ntilde;ale la respuesta correcta acerca de LTE:";
 choices[72]= new Array();
 choices[72][0] = "El HSS (Home Subscriber Server) es una base de datos distribuida que contiene informaci&oacute;n de los usuarios, sin entrar en funciones de Autenticaci&oacute;n, funci&oacute;n que lleva a cabo el eAUC.";
 choices[72][1] = "El Serving Gateway (SGW) tiene la funci&oacute;n de reenv&iacute;o y enrutado de paquetes de usuario, adem&aacute;s de ser el elemento que gestiona la movilidad entre eNodosB. Tambi&eacute;n gestiona la movilidad entre diferentes tecnolog&iacute;as de 3GPP. ";
 choices[72][2] = "El PGW (PDN Gateway) tiene la funci&oacute;n de reenv&iacute;o y enrutado de paquetes de usuario, adem&aacute;s de ser el elemento que gestiona la movilidad entre eNodosB. Tambi&eacute;n gestiona la movilidad entre diferentes tecnolog&iacute;as de 3GPP. ";
 choices[72][3] = "El MME (Mobility Management Entity) es un elemento responsable del control de la estaci&oacute;n base, siendo el interfaz a la red conmutada de LTE";
 answers[72] = choices[72][1];
 units[72] = "108";
 comments[72] = "Id Pregunta: 9387. NULL";


//  Id pregunta: 9400 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes redes WAN esta orientada a conexi&oacute;n?";
 choices[73]= new Array();
 choices[73][0] = "Una red IP";
 choices[73][1] = "Una red ATM.";
 choices[73][2] = "Una red UMTS.";
 choices[73][3] = "Ninguna de las anteriores";
 answers[73] = choices[73][1];
 units[73] = "109";
 comments[73] = "Id Pregunta: 9400. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9427 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Hay dos operadores que para operar en un determinado territorio ejercen el derecho de ocupaci&oacute;n de propiedad p&uacute;blica o privada. Sin embargo, por motivos de ordenaci&oacute;n urbana, no pueden ejercer esos derechos por separado.";
 choices[74]= new Array();
 choices[74][0] = "Uno de los dos deber&aacute; renunciar a su derecho de ocupaci&oacute;n.";
 choices[74][1] = "La Administraci&oacute;n competente en ordenaci&oacute;n urbana, podr&aacute; instar de manera motivada al Ministerio de Industria, Energ&iacute;a y Turismo el inicio del procedimiento para imponer el uso compartido recogido en el Art&iacute;culo 32.2.";
 choices[74][2] = "La Administraci&oacute;n competente en ordenaci&oacute;n urbana, previo tr&aacute;mite de informaci&oacute;n p&uacute;blica, determinar&aacute; una soluci&oacute;n que permita el ejercicio de los derechos de ocupaci&oacute;n de dominio p&uacute;blico o propiedad privada por separado.";
 choices[74][3] = "No se trata de un elemento que regule la ley 9/2014, General de Telecomunicaciones";
 answers[74] = choices[74][1];
 units[74] = "110";
 comments[74] = "Id Pregunta: 9427. ";


//  Id pregunta: 9471 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  Respecto al est&aacute;ndar de servicios de directorio X.500, se&ntilde;ale la afirmaci&oacute;n falsa";
 choices[75]= new Array();
 choices[75][0] = "El DIB se divide en distintos trozos de informaci&oacute;n que se estructuran en una jerarqu&iacute;a en &aacute;rbol denominada DIT";
 choices[75][1] = "Cada parte del DIB se almacena en un servidor denominado DSA";
 choices[75][2] = "El intercambio de informaci&oacute;n entre dos DSA est&aacute; basado en los protocolos DSP y DOP";
 choices[75][3] = "El DSA se comunica con el DIB utilizando el protocolo DAP";
 answers[75] = choices[75][3];
 units[75] = "106";
 comments[75] = "Id Pregunta: 9471. ";


//  Id pregunta: 9501 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de los siguientes elementos no es un plugin?";
 choices[76]= new Array();
 choices[76][0] = "Lector Acrobat de Adobe";
 choices[76][1] = "Quicktime de Apple";
 choices[76][2] = "Cosmoplayer de Platinum";
 choices[76][3] = "Todos los anteriores son plugins";
 answers[76] = choices[76][3];
 units[76] = "114";
 comments[76] = "Id Pregunta: 9501. NULL";


//  Id pregunta: 9794 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  El Lenguaje de Ontolog&iacute;as Web (OWL) proporciona tres sublenguajes, cada uno con nivel de expresividad mayor que el anterior. Se&ntilde;ale el que NO es correcto:";
 choices[77]= new Array();
 choices[77][0] = "OWL Lite.";
 choices[77][1] = "OWL DL.";
 choices[77][2] = "OWL Extension.";
 choices[77][3] = "OWL Full.";
 answers[77] = choices[77][2];
 units[77] = "120";
 comments[77] = "Id Pregunta: 9794. Examen TIC A2 2013";


//  Id pregunta: 9843 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l es el m&eacute;todo que se recomienda para proteger los datos en una WLAN?";
 choices[78]= new Array();
 choices[78][0] = "Utilizar el cifrado.";
 choices[78][1] = "Utilizar el SSID de no difusi&oacute;n.";
 choices[78][2] = "Establecer la energ&iacute;a transmitida al ajuste m&aacute;s s&oacute;lido.";
 choices[78][3] = "Utilizar el canal 7 en lugar de cualquier otro canal en los espectros de 2,4 GHz.";
 answers[78] = choices[78][0];
 units[78] = "111";
 comments[78] = "Id Pregunta: 9843. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";


//  Id pregunta: 9857 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Respecto a la seguridad en redes, indique qu&eacute; es un exploit.";
 choices[79]= new Array();
 choices[79][0] = "Es un malware dise&ntilde;ado para aprovechar la vulnerabilidad de un software.";
 choices[79][1] = "Persona que accede a datos no autorizados.";
 choices[79][2] = "Adware que modifica la p&aacute;gina de inicio de los navegadores de Internet sin el consentimiento del usuario.";
 choices[79][3] = "Software utilizado para la suplantaci&oacute;n de la identidad de un usuario de la red.";
 answers[79] = choices[79][0];
 units[79] = "111";
 comments[79] = "Id Pregunta: 9857. Examen TIC del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9935 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de los siguientes no es un campo de la cabecera IPv4?";
 choices[80]= new Array();
 choices[80][0] = "IHL.";
 choices[80][1] = "NF.";
 choices[80][2] = "TOS.";
 choices[80][3] = "OPCIONES.";
 answers[80] = choices[80][1];
 units[80] = "100";
 comments[80] = "Id Pregunta: 9935. NULL";


//  Id pregunta: 10038 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Un equipo con la direcci&oacute;n IP 128.0.235.56/27 &iquest;Qu&eacute; m&aacute;scara de red, direcci&oacute;n de red y direcci&oacute;n de broadcast tiene?";
 choices[81]= new Array();
 choices[81][0] = "M&aacute;scara 255.255.255.224, red 128.0.235.32, broadcast 128.0.235.63";
 choices[81][1] = "M&aacute;scara 255.255.255.0, red 128.0.235.0, broadcast 128.0.235.255";
 choices[81][2] = "M&aacute;scara 255.255.255.192, red 128.0.235.0, broadcast 128.0.235.63";
 choices[81][3] = "M&aacute;scara 255.255.255.128, red 128.0.235.0, broadcast 128.0.235.127";
 answers[81] = choices[81][0];
 units[81] = "100";
 comments[81] = "Id Pregunta: 10038. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10061 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Los fuegos de clase D son los que implican:";
 choices[82]= new Array();
 choices[82][0] = "Combustibles s&oacute;lidos como papel, cart&oacute;n, madera, pl&aacute;sticos, etc.";
 choices[82][1] = "Metales y aleaciones: magnesio, sodio, etc.";
 choices[82][2] = "Combustibles l&iacute;quidos, por ejemplo: aceite, derivados del petr&oacute;leo, etc.";
 choices[82][3] = "Gases: butano, metano, propano, etc.";
 answers[82] = choices[82][1];
 units[82] = "";
 comments[82] = "Id Pregunta: 10061. TIC A2, libre, Examen 2013";


//  Id pregunta: 10230 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Se&ntilde;ala el m&eacute;todo que es usado para obtener un par&aacute;metro de inicializaci&oacute;n desde ServletContext:";
 choices[83]= new Array();
 choices[83][0] = "Object getInitParameter(int index)";
 choices[83][1] = "Object getInitParameter(String name)";
 choices[83][2] = "String getInitParameter(String name)";
 choices[83][3] = "String getParameter(String name)";
 answers[83] = choices[83][2];
 units[83] = "116";
 comments[83] = "Id Pregunta: 10230. NULL";


//  Id pregunta: 10237 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  La tecnolog&iacute;a que nos permite trabajar en Java con servicios de directorio como LDAP, Active Directory, se conoce como:";
 choices[84]= new Array();
 choices[84][0] = "Java Messaging Services (JMS)";
 choices[84][1] = "Java Naming and Directory Interface (JNDI)";
 choices[84][2] = "Remote Method Invocation (RMI)";
 choices[84][3] = "JavaBeans Activation Framework (JMF)";
 answers[84] = choices[84][1];
 units[84] = "116";
 comments[84] = "Id Pregunta: 10237. NULL";


//  Id pregunta: 10509 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Si el c&oacute;digo de respuesta de un servidor SMTP, que cumple la RFC 821, es 501, podemos decir que:";
 choices[85]= new Array();
 choices[85][0] = "La operaci&oacute;n se ha realizado con &eacute;xito.";
 choices[85][1] = "Se ha producido un Error Temporal. Es posible que, volver a mandar el comando, con el mismo formato pasado un tiempo, produzca un resultado satisfactorio";
 choices[85][2] = "Se ha producido un Error, debido a que los parametros del comando enviado no tienen la sintaxis correcta.";
 choices[85][3] = "No podemos decir nada";
 answers[85] = choices[85][2];
 units[85] = "106";
 comments[85] = "Id Pregunta: 10509. http://tools.ietf.org/html/rfc821#page-35";


//  Id pregunta: 10658 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de estas tecnolog&iacute;as inal&aacute;mbricas puede alcanzar una cobertura de hasta 80 kil&oacute;metros?";
 choices[86]= new Array();
 choices[86][0] = "Zigbee";
 choices[86][1] = "WiMAX";
 choices[86][2] = "Ethernet";
 choices[86][3] = "Wibree";
 answers[86] = choices[86][1];
 units[86] = "107";
 comments[86] = "Id Pregunta: 10658. ";


//  Id pregunta: 10663 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Indique la afirmaci&oacute;n correcta:";
 choices[87]= new Array();
 choices[87][0] = "Ipv6 posibilita 2256 de direcciones de host diferentes.";
 choices[87][1] = "El encabezado de Ipv6 (sin opciones) es m&aacute;s corto que el de IPv4";
 choices[87][2] = "Con Ipv6 no es necesario el mecanismo de traducci&oacute;n de direcciones de red (NAT)";
 choices[87][3] = "Todas las anteriores son incorrectas.";
 answers[87] = choices[87][2];
 units[87] = "100";
 comments[87] = "Id Pregunta: 10663. ";


//  Id pregunta: 10891 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Seg&uacute;n RFC 2460, se&ntilde;ale de las siguientes cabeceras IPv6 cu&aacute;l es una cabecera de extensi&oacute;n:";
 choices[88]= new Array();
 choices[88][0] = "Cabecera Siguiente.";
 choices[88][1] = "Fragmento.";
 choices[88][2] = "L&iacute;mite de Saltos.";
 choices[88][3] = "Longitud de la Carga &Uacute;til.";
 answers[88] = choices[88][1];
 units[88] = "100";
 comments[88] = "Id Pregunta: 10891. Examen GSI 2014";


//  Id pregunta: 10897 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  El tama&ntilde;o de una cabecera MPLS seg&uacute;n la RFC 3032, es de:";
 choices[89]= new Array();
 choices[89][0] = "20 bits.";
 choices[89][1] = "32 bits.";
 choices[89][2] = "48 bits.";
 choices[89][3] = "64 bits.";
 answers[89] = choices[89][1];
 units[89] = "100";
 comments[89] = "Id Pregunta: 10897. Examen GSI 2014";


//  Id pregunta: 10943 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  La Estrategia de Ciberseguridad Nacional fue aprobada por el Consejo Nacional de Seguridad en:";
 choices[90]= new Array();
 choices[90][0] = "Septiembre de 2012.";
 choices[90][1] = "Diciembre de 2013.";
 choices[90][2] = "Enero de 2014.";
 choices[90][3] = "Enero de 2011.";
 answers[90] = choices[90][1];
 units[90] = "111";
 comments[90] = "Id Pregunta: 10943. TIC A1 AGE 2014";


//  Id pregunta: 10999 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En relaci&oacute;n con jquery, se&ntilde;ale la respuesta correcta:";
 choices[91]= new Array();
 choices[91][0] = "Es una biblioteca disponible en Java 6 y 7 que facilita la realizaci&oacute;n de consultas a bases de datos relacionales.";
 choices[91][1] = "Es una biblioteca de Javascript para simplificar la interacci&oacute;n con p&aacute;ginas web.";
 choices[91][2] = "Es un est&aacute;ndar abierto que facilita la realizaci&oacute;n de consultas a bases de datos relacionales.";
 choices[91][3] = "Es una biblioteca para el acceso a almacenes de datos y big data, que permite la interacci&oacute;n del usuario final con los datos agregados y de detalle.";
 answers[91] = choices[91][1];
 units[91] = "114";
 comments[91] = "Id Pregunta: 10999. TIC A1 AGE 2014";


//  Id pregunta: 11353 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Las redes conmutadas ethernet, tienen una serie de ventajas. Se&ntilde;ale la que no se encuentra entre ellas";
 choices[92]= new Array();
 choices[92][0] = "Redes half-duplex";
 choices[92][1] = "Autonegociaci&oacute;n";
 choices[92][2] = "Trunking";
 choices[92][3] = "Uso del comando pause";
 answers[92] = choices[92][0];
 units[92] = "102";
 comments[92] = "Id Pregunta: 11353. ";


//  Id pregunta: 11432 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de los siguientes no es un derecho del usuario de telecomunicaciones?:";
 choices[93]= new Array();
 choices[93][0] = "A oponerse a recibir llamadas comerciales no deseadas, en todo caso.";
 choices[93][1] = "A que no se traten sus datos de localizaci&oacute;n, en todo caso.";
 choices[93][2] = "A no figurar en las gu&iacute;as de abonados, en todo caso.";
 choices[93][3] = "Ninguno es un derecho del usuario.";
 answers[93] = choices[93][3];
 units[93] = "110";
 comments[93] = "Id Pregunta: 11432. ";


//  Id pregunta: 11442 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n la Ley 9/2014, &iquest;qui&eacute;n establece los procedimientos para la habilitaci&oacute;n del ejercicio de los derechos del uso del dominio p&uacute;blico radioel&eacute;ctrico?:";
 choices[94]= new Array();
 choices[94][0] = "La CNMC.";
 choices[94][1] = "El gobierno.";
 choices[94][2] = "El Estado.";
 choices[94][3] = "El MINETUR.";
 answers[94] = choices[94][1];
 units[94] = "110";
 comments[94] = "Id Pregunta: 11442. ";


//  Id pregunta: 11518 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Qu&eacute; afirmaci&oacute;n respecto al protocolo SSL NO es cierta?";
 choices[95]= new Array();
 choices[95][0] = "Responde por Secure Socket Layer.";
 choices[95][1] = "Es un est&aacute;ndar de facto propuesto por Netscape, ampliamente disponible en servidores y navegadores web.";
 choices[95][2] = "En su funcionamiento se establece primeramente una clave de sesi&oacute;n para conseguir el cifrado del canal. (confidencialidad)";
 choices[95][3] = "Es un protocolo cliente-servidor que requiere la autenticaci&oacute;n de ambas partes.";
 answers[95] = choices[95][3];
 units[95] = "111";
 comments[95] = "Id Pregunta: 11518. NULL";


//  Id pregunta: 11570 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  El nivel de enlace para la se&ntilde;alizaci&oacute;n por canal D de un enlace RDSI es:";
 choices[96]= new Array();
 choices[96][0] = "V.120";
 choices[96][1] = "LAPB";
 choices[96][2] = "Q.921";
 choices[96][3] = "Q.931";
 answers[96] = choices[96][2];
 units[96] = "109";
 comments[96] = "Id Pregunta: 11570. NULL";


//  Id pregunta: 11571 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l es un protocolo estandar para la gesti&oacute;n de VLANs?";
 choices[97]= new Array();
 choices[97][0] = "VTP";
 choices[97][1] = "GVRP";
 choices[97][2] = "HSRP";
 choices[97][3] = "VRRP";
 answers[97] = choices[97][1];
 units[97] = "109";
 comments[97] = "Id Pregunta: 11571. a) protocolo de CISCO. c) y d) protocolos de redundancia. ";


//  Id pregunta: 11718 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; sucede si se pierde el primer paquete de una transferencia TFTP? ";
 choices[98]= new Array();
 choices[98][0] = "La aplicaci&oacute;n TFTP volver&aacute; a intentar la solicitud si no se recibe una respuesta. ";
 choices[98][1] = "El router del siguiente salto o la puerta de enlace predeterminada proporcionar&aacute;n una respuesta con un c&oacute;digo de error. ";
 choices[98][2] = "El cliente esperar&aacute; indefinidamente la respuesta. ";
 choices[98][3] = " La capa de transporte volver&aacute; a intentar la consulta si no se recibe una respuesta.";
 answers[98] = choices[98][0];
 units[98] = "111";
 comments[98] = "Id Pregunta: 11718. NULL";


//  Id pregunta: 11719 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Qu&eacute; campo de la cabecera TCP se utiliza, entre otros, para confirmar la recepci&oacute;n de los datos? ";
 choices[99]= new Array();
 choices[99][0] = "numero de secuencia";
 choices[99][1] = "checksum";
 choices[99][2] = "flag FIN";
 choices[99][3] = "flag SYN";
 answers[99] = choices[99][0];
 units[99] = "102";
 comments[99] = "Id Pregunta: 11719. NULL";


