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

//  Id pregunta: 2928 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  En un entorno de servidor y cliente WWW, &iquest;cu&aacute;les de los siguientes lenguajes se utilizan para escribir c&oacute;digo que se ejecuta en el cliente?";
 choices[0]= new Array();
 choices[0][0] = "Java y JSP";
 choices[0][1] = "PHP y ASP";
 choices[0][2] = "JavaScript y Perl";
 choices[0][3] = "Java y JavaScript";
 answers[0] = choices[0][3];
 units[0] = "116";
 comments[0] = "Id Pregunta: 2928. ";


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


//  Id pregunta: 2944 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Qu&eacute; no permite IP V6?";
 choices[2]= new Array();
 choices[2][0] = "Autenticaci&oacute;n";
 choices[2][1] = "Garantia de no repudio";
 choices[2][2] = "Cifrado";
 choices[2][3] = "Integridad";
 answers[2] = choices[2][1];
 units[2] = "100";
 comments[2] = "Id Pregunta: 2944. Similar a examen TIC SS A 2003";


//  Id pregunta: 2950 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l es el primer nivel OSI en el que se produce comunicaci&oacute;n extremo-extremo?";
 choices[3]= new Array();
 choices[3][0] = "Red";
 choices[3][1] = "Transporte";
 choices[3][2] = "Sesi&oacute;n";
 choices[3][3] = "Presentaci&oacute;n";
 answers[3] = choices[3][1];
 units[3] = "100";
 comments[3] = "Id Pregunta: 2950. Similar a examen TIC SS A 2003";


//  Id pregunta: 3006 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  En qu&eacute; tipos se divide la fibra &oacute;ptica en funci&oacute;n de la forma de variaci&oacute;n del &iacute;ndice de refracci&oacute;n desde el eje de la fibra al exterior";
 choices[4]= new Array();
 choices[4][0] = "f.o. monomodo y multimodo";
 choices[4][1] = "f.o. de salto de &iacute;ndice y de &iacute;ndice gradual";
 choices[4][2] = "f.o. de emisores LED y emisores l&aacute;ser";
 choices[4][3] = "f.o. de &iacute;ndice anal&oacute;gico y digital";
 answers[4] = choices[4][1];
 units[4] = "99";
 comments[4] = "Id Pregunta: 3006. NULL";


//  Id pregunta: 3021 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  &iquest;Qu&eacute; diferencia, entre otras, hay entre S-HTTP y SSL?";
 choices[5]= new Array();
 choices[5][0] = "El protocolo SSL fue desarrollado por Enterprise Integration Technologies (EIT) y el S-HTTP por Netscape";
 choices[5][1] = "S-HTTP permite el cifrado pero no la autenticaci&oacute;n digital, SSL permite tanto el cifrado como la autenticaci&oacute;n digital";
 choices[5][2] = "S-HTTP funciona entre la capa TCP y la capa de aplicaci&oacute;n, SSL funciona en la de aplicaci&oacute;n";
 choices[5][3] = "S-HTTP solamente sirve para la navegaci&oacute;n web, mientras que SSL sirve para cualquier comunicaci&oacute;n";
 answers[5] = choices[5][3];
 units[5] = "111";
 comments[5] = "Id Pregunta: 3021. TAI 2004";


//  Id pregunta: 3068 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Indique cu&aacute;l de las opciones refleja m&aacute;s adecuadamente las caracter&iacute;sticas de un cable coaxial:";
 choices[6]= new Array();
 choices[6][0] = "Un cable coaxial es un medio de transmisi&oacute;n constituido por dos hilos conductores aislados entre si y dispuestos de forma paralela a lo largo de todo su recorrido";
 choices[6][1] = "Un cable coaxial est&aacute; constituido por dos hilos conductores paralelos aislados y recubiertos por una l&aacute;mina conductora";
 choices[6][2] = "Un cable coaxial est&aacute; constituido por un hilo conductor central rodeado de una lamina conductora conc&eacute;ntrica con &eacute;l y separado por un medio aislante";
 choices[6][3] = "Un cable coaxial est&aacute; constituido por un conjunto de conductores aislados entre si y torsionados sobre ellos mismos en grupos de cuatro, encerrados todos ellos por una lamina o cubierta conductora";
 answers[6] = choices[6][2];
 units[6] = "99";
 comments[6] = "Id Pregunta: 3068. ";


//  Id pregunta: 3151 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de los circuitos virtuales?:";
 choices[7]= new Array();
 choices[7][0] = "Un circuito virtual es un enlace dedicado o temporal entre dos o m&aacute;s estaciones finales en una malla de conmutaci&oacute;n de paquetes";
 choices[7][1] = "Un circuito virtual proporciona una sesi&oacute;n orientada a conexi&oacute;n entre dos puntos finales";
 choices[7][2] = "En circuito virtual conmutado las conexiones duran s&oacute;lo mientras se necesiten y se desconectan cuando la sesi&oacute;n se completa";
 choices[7][3] = "Por un mismo circuito virtual conmutado puede establecerse simult&aacute;neamente enlaces con diferentes estaciones finales de la red";
 answers[7] = choices[7][3];
 units[7] = "100";
 comments[7] = "Id Pregunta: 3151. NULL";


//  Id pregunta: 3203 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El algoritmo conocido como Spanning Tree Algorithm se usa:";
 choices[8]= new Array();
 choices[8][0] = "Para optimizar los caminos usados en redes complejas con routers";
 choices[8][1] = "Evitar bucles en redes con puentes transparentes que tienen varios path entre ellos";
 choices[8][2] = "Calcular los cambios a hacer en las configuraciones de los routers cuando alguno de ellos falla";
 choices[8][3] = "Se usa en redes de Token Bus para calcular a quien pasar el testigo (token) en caso de que la siguiente estaci&oacute;n no conteste (puede estar apagada o estropeada)";
 answers[8] = choices[8][1];
 units[8] = "102";
 comments[8] = "Id Pregunta: 3203. ";


//  Id pregunta: 3213 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El error 404 seg&uacute;n el protocolo HTTP indica:";
 choices[9]= new Array();
 choices[9][0] = "mensaje de petici&oacute;n no reconocido";
 choices[9][1] = "redirecci&oacute;n por cambio de ubicaci&oacute;n del objeto pedido";
 choices[9][2] = "versi&oacute;n HTTP no soportada";
 choices[9][3] = "el objeto pedido no se encuentra en el servidor";
 answers[9] = choices[9][3];
 units[9] = "112";
 comments[9] = "Id Pregunta: 3213. ";


//  Id pregunta: 3223 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes m&oacute;dulos no pertenece al  est&aacute;ndar de correo electr&oacute;nico X.400?:";
 choices[10]= new Array();
 choices[10][0] = "Agente de usuario";
 choices[10][1] = "Agente de transferencia de mensajes";
 choices[10][2] = "Agente de usuario remoto";
 choices[10][3] = "Agente de correo extendido";
 answers[10] = choices[10][3];
 units[10] = "106";
 comments[10] = "Id Pregunta: 3223. ";


//  Id pregunta: 3249 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;les de las siguientes afirmaciones corresponde a funciones o caracter&iacute;sticas de equipos puentes (bridges)?:";
 choices[11]= new Array();
 choices[11][0] = "Analizan la direcci&oacute;n destino del MAC (nivel 2 de OSI), pudiendo efectuar funciones de aprendizaje, filtrado y reenv&iacute;o";
 choices[11][1] = "Pueden interconectar redes tipo 802 que usan niveles 1 y 2 de OSI diferentes, pero no son transparentes a los protocolos de niveles superiores";
 choices[11][2] = "Su rendimiento (medido en paquetes/segundo) es menor que el de los equipos encaminadores (routers)";
 choices[11][3] = "Operan a nivel 3 de OSI, por lo que realizan funciones de filtrado, aislando el tr&aacute;fico de los segmentos conectados";
 answers[11] = choices[11][0];
 units[11] = "102";
 comments[11] = "Id Pregunta: 3249. ";


//  Id pregunta: 3262 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;De que trata el est&aacute;ndar IEEE 802.1.q?:";
 choices[12]= new Array();
 choices[12][0] = "De las VLAN (Virtual Local Area Network)";
 choices[12][1] = "De la capa f&iacute;sica de la red Ethernet";
 choices[12][2] = "No existe dicho est&aacute;ndar";
 choices[12][3] = "Del canal D de la RDSI";
 answers[12] = choices[12][0];
 units[12] = "102";
 comments[12] = "Id Pregunta: 3262. ";


//  Id pregunta: 3285 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Qu&eacute; es FTAM (File Transfer Access and Management)?:";
 choices[13]= new Array();
 choices[13][0] = "Un protocolo del nivel de presentaci&oacute;n para gesti&oacute;n de ficheros";
 choices[13][1] = "Una aplicaci&oacute;n para transferencia y compartici&oacute;n de archivos";
 choices[13][2] = "Una aplicaci&oacute;n para emulaci&oacute;n de terminales remotos";
 choices[13][3] = "Un protocolo de la capa TCP/IP para compartir archivos";
 answers[13] = choices[13][1];
 units[13] = "100";
 comments[13] = "Id Pregunta: 3285. ";


//  Id pregunta: 3310 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Qu&eacute; se entiende por 'modem de cable'?:";
 choices[14]= new Array();
 choices[14][0] = "A un cable inversor utilizado para la conexi&oacute;n entre dos dispositivos por el puerto serie";
 choices[14][1] = "A un cable utilizado para unir dos PCs por el puerto paralelo";
 choices[14][2] = "A un dispositivo que permite la transmisi&oacute;n de datos a alta velocidad a trav&eacute;s de una red de cable";
 choices[14][3] = "A un modem que no necesita fuente de alimentaci&oacute;n y que es del tama&ntilde;o de una 'caja de cerillas' que pr&aacute;cticamente que embutido en un cable";
 answers[14] = choices[14][2];
 units[14] = "105";
 comments[14] = "Id Pregunta: 3310. ";


//  Id pregunta: 3312 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Qu&eacute; tama&ntilde;o de celdas se utiliza en ATM?:";
 choices[15]= new Array();
 choices[15][0] = "Un m&aacute;ximo de 64 bytes";
 choices[15][1] = "El tama&ntilde;o m&aacute;ximo depende del contrato con el proveedor del servicio, siendo m&uacute;ltiplo de 64 bytes";
 choices[15][2] = "1024 bits";
 choices[15][3] = "424 bits";
 answers[15] = choices[15][3];
 units[15] = "109";
 comments[15] = "Id Pregunta: 3312. ";


//  Id pregunta: 3338 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Comparando las cabeceras IPv4 e IPV6:";
 choices[16]= new Array();
 choices[16][0] = "En IPv6 se mantiene el campo de checksum";
 choices[16][1] = "En IPv6 aparece nuevo el campo de versi&oacute;n";
 choices[16][2] = "El campo 'tiempo de vida' de IPv4 se transforma en el campo 'l&iacute;mite de saltos' de IPv6";
 choices[16][3] = "En IPv6 se sigue conservando como en IPv4 el campo de 'etiqueta de flujo'";
 answers[16] = choices[16][2];
 units[16] = "100";
 comments[16] = "Id Pregunta: 3338. NULL";


//  Id pregunta: 3402 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Entre las unidades de datos intercambiadas entre niveles pares y adyacentes del Modelo de Referencia OSI, cu&aacute;l de las siguientes combinaciones es cierta:";
 choices[17]= new Array();
 choices[17][0] = "PDU + PCI = SDU";
 choices[17][1] = "IDU + ICI = SDU";
 choices[17][2] = "SDU + PCI = PDU";
 choices[17][3] = "&quot;b&quot; y &quot;c&quot; son ciertas";
 answers[17] = choices[17][2];
 units[17] = "100";
 comments[17] = "Id Pregunta: 3402. NULL";


//  Id pregunta: 3408 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  FDDI (Fiber Distributed Data Interface) es:";
 choices[18]= new Array();
 choices[18][0] = "Una red de fibra &oacute;ptica tipo &lsquo;paso de testigo&rsquo; en anillo";
 choices[18][1] = "Una red de fibra &oacute;ptica compatible con Ethernet en el interface del transmisor/receptor";
 choices[18][2] = "Un protocolo utilizado en redes que operan a 100 Mbps";
 choices[18][3] = "Una interfaz &oacute;ptica para la distribuci&oacute;n de datos";
 answers[18] = choices[18][0];
 units[18] = "101";
 comments[18] = "Id Pregunta: 3408. ";


//  Id pregunta: 3491 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En el acceso a l&iacute;neas y redes de comunicaciones, desde el bucle de abonado constituido por pares de cobre, la tecnolog&iacute;a que permite separar el flujo de datos del tr&aacute;fico telef&oacute;nico en origen, es:";
 choices[19]= new Array();
 choices[19][0] = "RDSI";
 choices[19][1] = "ADSL";
 choices[19][2] = "RTC";
 choices[19][3] = "TCP-IP";
 answers[19] = choices[19][1];
 units[19] = "107";
 comments[19] = "Id Pregunta: 3491. NULL";


//  Id pregunta: 3635 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  La recomendaci&oacute;n RFC-1006 define:";
 choices[20]= new Array();
 choices[20][0] = "Funciones de un protocolo de red";
 choices[20][1] = "El protocolo de transporte TCP";
 choices[20][2] = "El protocolo de transporte UDP";
 choices[20][3] = "Protocolo de convergencia de TCP a TP0";
 answers[20] = choices[20][3];
 units[20] = "100";
 comments[20] = "Id Pregunta: 3635. NULL";


//  Id pregunta: 3644 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  La t&eacute;cnica de utilizar 'ventanas de transmisi&oacute;n y recepci&oacute;n' en los protocolos se utiliza fundamentalmente porque:";
 choices[21]= new Array();
 choices[21][0] = "Evita la necesidad de enviar 'reconocimientos negativos' a aquellas tramas que han llegado incorrectamente";
 choices[21][1] = "Aumenta el tiempo de utilizaci&oacute;n efectiva del canal";
 choices[21][2] = "Aumenta la velocidad de sincronismo entre transmisor y receptor";
 choices[21][3] = "Impide el desbordamiento de la memoria del receptor";
 answers[21] = choices[21][1];
 units[21] = "100";
 comments[21] = "Id Pregunta: 3644. NULL";


//  Id pregunta: 3673 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Una emisora de radiodifusi&oacute;n comercial es un ejemplo de sistemas de transmisi&oacute;n:";
 choices[22]= new Array();
 choices[22][0] = "Simplex";
 choices[22][1] = "Semiduplex";
 choices[22][2] = "Duplex";
 choices[22][3] = "Half duplex";
 answers[22] = choices[22][0];
 units[22] = "99";
 comments[22] = "Id Pregunta: 3673. ";


//  Id pregunta: 3675 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Una palabra muy usada cuando hablamos de velocidades de transmisi&oacute;n es 'baudio' que se define como:";
 choices[23]= new Array();
 choices[23][0] = "La velocidad de cambios de se&ntilde;alizaci&oacute;n por segundo en un canal";
 choices[23][1] = "N&uacute;mero de bits por segundo transmitidos por un canal";
 choices[23][2] = "Cambios de frecuencia por segundo en la se&ntilde;al por un canal";
 choices[23][3] = "Todas las respuestas anteriores son ciertas";
 answers[23] = choices[23][0];
 units[23] = "99";
 comments[23] = "Id Pregunta: 3675. ";


//  Id pregunta: 3677 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Una red de conmutaci&oacute;n de paquetes trabaja en modo datagrama cuando:";
 choices[24]= new Array();
 choices[24][0] = "La transmisi&oacute;n de paquetes no es orientada a la conexi&oacute;n";
 choices[24][1] = "Se establecen circuitos virtuales entre origen y destino";
 choices[24][2] = "Se establecen circuitos f&iacute;sicos entre origen y destino";
 choices[24][3] = "Los mensajes se dividen en paquetes de longitud fija para su env&iacute;o";
 answers[24] = choices[24][0];
 units[24] = "101";
 comments[24] = "Id Pregunta: 3677. ";


//  Id pregunta: 3742 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Los sistemas celulares se sustentan en dos conceptos principales que son:";
 choices[25]= new Array();
 choices[25][0] = "La reutilizaci&oacute;n de frecuencias y el dimensionamiento celular";
 choices[25][1] = "La difracci&oacute;n y la propagaci&oacute;n multitrayecto";
 choices[25][2] = "La modulaci&oacute;n y la separaci&oacute;n entre canales";
 choices[25][3] = "La distribuci&oacute;n de usuarios y la localizaci&oacute;n";
 answers[25] = choices[25][0];
 units[25] = "108";
 comments[25] = "Id Pregunta: 3742. ";


//  Id pregunta: 3759 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Para especificar un protocolo en el modelo OSI son necesarios:";
 choices[26]= new Array();
 choices[26][0] = "S&oacute;lo la descripci&oacute;n de las PDUs que lo forman, junto con su prop&oacute;sito y los campos que las forman";
 choices[26][1] = "La a) y la descripci&oacute;n de los servicios usados, procedimientos seguidos y descripci&oacute;n formal (usando por ejemplo ASN.1)";
 choices[26][2] = "La b) y adem&aacute;s la descripci&oacute;n del comportamiento interno-externo";
 choices[26][3] = "Un protocolo no se puede especificar libremente, ya que hay impuestas condiciones referentes al sistema operativo y/o los lenguajes de programaci&oacute;n que usen las m&aacute;quinas en las que se implante";
 answers[26] = choices[26][1];
 units[26] = "100";
 comments[26] = "Id Pregunta: 3759. NULL";


//  Id pregunta: 3781 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Respecto a  los distintos modos de transmisi&oacute;n en una comunicaci&oacute;n:";
 choices[27]= new Array();
 choices[27][0] = "La telefon&iacute;a convencional es de tipo d&uacute;plex, mientras que la telefon&iacute;a m&oacute;vil es semiduplex";
 choices[27][1] = "La radiofusi&oacute;n de televisi&oacute;n es de tipo semid&uacute;plex, transmite sonido e imagen en la misma portadora";
 choices[27][2] = "La radiofusi&oacute;n de se&ntilde;al musical en frecuencia modulada es un sistema simplex";
 choices[27][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[27] = choices[27][2];
 units[27] = "99";
 comments[27] = "Id Pregunta: 3781. *: transmision modulacion";


//  Id pregunta: 3815 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Se&ntilde;ale cu&aacute;l de los siguientes elementos NO es utilizado en las redes de fibra &oacute;ptica:";
 choices[28]= new Array();
 choices[28][0] = "Transceptor";
 choices[28][1] = "Repetidor";
 choices[28][2] = "Fibras &oacute;pticas";
 choices[28][3] = "Interfaces de RF";
 answers[28] = choices[28][3];
 units[28] = "105";
 comments[28] = "Id Pregunta: 3815. ";


//  Id pregunta: 3827 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Se&ntilde;ale la respuesta falsa respecto a los protocolos de gesti&oacute;n de red:";
 choices[29]= new Array();
 choices[29][0] = "El modelo de gesti&oacute;n OSI utiliza una base de informaci&oacute;n de gesti&oacute;n o MIB para almacenar la informaci&oacute;n estructurada que representa a los elementos de la red y sus atributos";
 choices[29][1] = "La estructura de informaci&oacute;n se denomina SMI (Estructura de informaci&oacute;n de Gestion) para estas estructuras el modelo OSI define un Sistema muy complejo de gesti&oacute;n orientado a objetos";
 choices[29][2] = "Con la especificaci&oacute;n SNMP versi&oacute;n 1 (Protocolo sencillo de gesti&oacute;n de red) no se puede comprobar el origen de un mensaje ni su autenficaci&oacute;n, lo que le hace vulnerable a ataques para modificar la configuraci&oacute;n de red";
 choices[29][3] = "SNMPv2 y SNMP son variantes de SMTP";
 answers[29] = choices[29][3];
 units[29] = "104";
 comments[29] = "Id Pregunta: 3827. ";


//  Id pregunta: 3835 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  SIP es:";
 choices[30]= new Array();
 choices[30][0] = "Particularizaci&oacute;n de GOSIP (Government OSI Profile) m&aacute;s ligera";
 choices[30][1] = "Un tipo de mensaje de H.323 para videotelefon&iacute;a";
 choices[30][2] = "Un protocolo de paquetizaci&oacute;n de voz que se ejecuta en los mediagateways";
 choices[30][3] = "Protocolo de voz sobre IP del IETF";
 answers[30] = choices[30][3];
 units[30] = "100";
 comments[30] = "Id Pregunta: 3835. NULL";


//  Id pregunta: 3842 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  SSL utiliza, entre otros, el siguiente algoritmo de cifrado sim&eacute;trico:";
 choices[31]= new Array();
 choices[31][0] = "AES";
 choices[31][1] = "LUCIFER";
 choices[31][2] = "2DES";
 choices[31][3] = "Ninguno de las anteriores";
 answers[31] = choices[31][0];
 units[31] = "111";
 comments[31] = "Id Pregunta: 3842. NULL";


//  Id pregunta: 3849 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Usaremos fibra &oacute;ptica, frente a cable coaxial o par trenzado, cuando:";
 choices[32]= new Array();
 choices[32][0] = "La red se instala en un entorno que exige inmunidad al ruido";
 choices[32][1] = "Es un factor determinante la facilidad de instalaci&oacute;n";
 choices[32][2] = "Se necesita construir el backbone en una WAN";
 choices[32][3] = "Se pondera muy alto el abaratamiento de costes";
 answers[32] = choices[32][2];
 units[32] = "99";
 comments[32] = "Id Pregunta: 3849. ";


//  Id pregunta: 3850 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  USB, refir&eacute;ndonos a interfaces, significa:";
 choices[33]= new Array();
 choices[33][0] = "Universal Synchronized Bus, Bus sincronizado universal";
 choices[33][1] = "Unstructured Serial Bits, Bits en serie no estructurados";
 choices[33][2] = "Universal Serial Bus, Bus serie universal";
 choices[33][3] = "Unstructured Synchronized Burst, R&aacute;faga sincronizada y no estructurada";
 answers[33] = choices[33][2];
 units[33] = "48";
 comments[33] = "Id Pregunta: 3850. ";


//  Id pregunta: 3855 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  Dentro de las Frecuencias de sat&eacute;lite de uso comercial  se encuentra la banda Ku(BSS) que tiene como aplicaci&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "Datos y TV a altas velocidades ";
 choices[34][1] = "Radiodifusi&oacute;n de televisi&oacute;n por sat&eacute;lite.";
 choices[34][2] = "VSAT, video e Internet ";
 choices[34][3] = "Datos, voz y video ";
 answers[34] = choices[34][1];
 units[34] = "108";
 comments[34] = "Id Pregunta: 3855. ";


//  Id pregunta: 3915 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Cuando una copia de seguridad copia los archivos creados o modificados desde la &uacute;ltima copia de seguridad normal o incremental, sin poner una marca de copiado a los archivos se habla de:";
 choices[35]= new Array();
 choices[35][0] = "Copia de seguridad incremental.";
 choices[35][1] = "Copia de seguridad diaria.";
 choices[35][2] = "Copia de seguridad intermedia.";
 choices[35][3] = "Copia de seguridad diferencial.";
 answers[35] = choices[35][3];
 units[35] = "97";
 comments[35] = "Id Pregunta: 3915. NULL";


//  Id pregunta: 3937 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  &iquest;Qu&eacute; est&aacute;ndar  WIFI es el que soporta simult&aacute;neamente las velocidades de 11Mbps y 54Mbps?";
 choices[36]= new Array();
 choices[36][0] = " 802.11a";
 choices[36][1] = "802.11b";
 choices[36][2] = "802.11g";
 choices[36][3] = "802.11x";
 answers[36] = choices[36][2];
 units[36] = "100";
 comments[36] = "Id Pregunta: 3937. ";


//  Id pregunta: 3942 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Con la API de Servlet con respecto a cookies se puede:";
 choices[37]= new Array();
 choices[37][0] = "S&oacute;lo se pueden leer cookies";
 choices[37][1] = "S&oacute;lo se pueden leer y especificar atributos de cookie pero no crear cookies";
 choices[37][2] = "Se pueden crear cookies";
 choices[37][3] = "S&oacute;lo se pueden situar los Cookies en las cabeceras de respuesta al cliente";
 answers[37] = choices[37][2];
 units[37] = "116";
 comments[37] = "Id Pregunta: 3942. Pregunta no perteneciente al test  del ex&aacute;men 2003 de SS (aunque en este ex&aacute;men hubo una pregunta de API de servlet)";


//  Id pregunta: 3977 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  En relaci&oacute;n a los cables de par trenzado UTP y STP, indique cu&aacute;l de las siguientes afirmaciones es cierta.";
 choices[38]= new Array();
 choices[38][0] = "Las categor&iacute;as 1 y 2 de UTP se emplean para transmisi&oacute;n de datos X.25";
 choices[38][1] = "La categor&iacute;a 4 de UTP especifica cables hasta 20 MHz, se utilizan para voz y datos hasta 16 Mbps";
 choices[38][2] = "El tipo 6 de cable STP emplea 4 pares trenzados de mayor calibre que los de tipo 1";
 choices[38][3] = "Los cables STP, a pesar de su menor inmunidad a las interferencias, son los de mayor implantaci&oacute;n en los cableados estructurados.";
 answers[38] = choices[38][1];
 units[38] = "99";
 comments[38] = "Id Pregunta: 3977. ";


//  Id pregunta: 3981 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Se&ntilde;ale la respuesta correcta:";
 choices[39]= new Array();
 choices[39][0] = "Cuando se usa selecci&oacute;n, existe una estaci&oacute;n de control y una o varias estaciones tributarios.";
 choices[39][1] = "En la contienda todas las estaciones pueden acceder en cualquier momento al circuito.";
 choices[39][2] = "Se denomina ventana al n&uacute;mero m&aacute;ximo de tramas que en un determinado momento pueden estar pendientes de confirmaci&oacute;n.";
 choices[39][3] = "Todas son verdaderas.";
 answers[39] = choices[39][3];
 units[39] = "101";
 comments[39] = "Id Pregunta: 3981. ";


//  Id pregunta: 4092 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Que es LAMP";
 choices[40]= new Array();
 choices[40][0] = "Una arquitectura web basada en software libre";
 choices[40][1] = "Una arquitectura web basada en j2ee";
 choices[40][2] = "Una arquitectura web basada en .Net";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = choices[40][0];
 units[40] = "62";
 comments[40] = "Id Pregunta: 4092. ";


//  Id pregunta: 4105 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Internet 2:";
 choices[41]= new Array();
 choices[41][0] = "Es una red telem&aacute;tica superpuesta a la red Internet y que hace las funciones de backup.";
 choices[41][1] = "Es una red de fibra &oacute;ptica cuyo backbone est&aacute; constituido por GigaPop.";
 choices[41][2] = "Prev&eacute; velocidades de hasta 622 Mbps para usuarios particulares.";
 choices[41][3] = "Ninguna respuesta es correcta";
 answers[41] = choices[41][2];
 units[41] = "112";
 comments[41] = "Id Pregunta: 4105. ";


//  Id pregunta: 4124 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  La tecnolog&iacute;a que permite varios canales independientes en una &uacute;nica fibra &oacute;ptica mediante el uso de diferentes frecuencias de luz se llama";
 choices[42]= new Array();
 choices[42][0] = "Multiplexado por divisi&oacute;n de frecuencia (FDM)";
 choices[42][1] = "Multiplexado por divisi&oacute;n de tiempo (TDM)";
 choices[42][2] = "Multiplexado por divisi&oacute;n densa de la longitud de onda (DWDM)";
 choices[42][3] = "Multiplexado tradicional (MUX)";
 answers[42] = choices[42][2];
 units[42] = "105";
 comments[42] = "Id Pregunta: 4124. ";


//  Id pregunta: 4187 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  Respecto al protocolo IP";
 choices[43]= new Array();
 choices[43][0] = "IPv6 no permite OSPF";
 choices[43][1] = "IPv4 no permite al origen de la comunicaci&oacute;n seleccionar el encaminamiento";
 choices[43][2] = "IPv6 permite al origen de la comunicaci&oacute;n seleccionar el encaminamiento";
 choices[43][3] = "ninguna de las anteriores";
 answers[43] = choices[43][2];
 units[43] = "100";
 comments[43] = "Id Pregunta: 4187. ";


//  Id pregunta: 4336 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  La tecnolog&iacute;a dominante hoy en d&iacute;a en el campo de las redes locales es:";
 choices[44]= new Array();
 choices[44][0] = "Ethernet.";
 choices[44][1] = "Arcnet";
 choices[44][2] = "Arpanet.";
 choices[44][3] = "Sarenet";
 answers[44] = choices[44][0];
 units[44] = "97";
 comments[44] = "Id Pregunta: 4336. NULL";


//  Id pregunta: 4537 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  El protocolo RIP:";
 choices[45]= new Array();
 choices[45][0] = "Es un protocolo de encaminamiento del tipo &quot;vector de distancia&quot;.";
 choices[45][1] = "Es un protocolo de encaminamiento del tipo &quot;estado del enlace&quot;.";
 choices[45][2] = "Es un protocolo de descarga de correo electr&oacute;nico desde un servidor web.";
 choices[45][3] = "Es un protocolo de interconexi&oacute;n de conmutadores.";
 answers[45] = choices[45][0];
 units[45] = "";
 comments[45] = "Id Pregunta: 4537. ";


//  Id pregunta: 4590 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Un puente como elemento de interconexi&oacute;n de redes en que capa del modelo OSI opera:";
 choices[46]= new Array();
 choices[46][0] = "enlace de datos";
 choices[46][1] = "red";
 choices[46][2] = "transporte";
 choices[46][3] = "ninguna de las anteriores";
 answers[46] = choices[46][0];
 units[46] = "99";
 comments[46] = "Id Pregunta: 4590. NULL";


//  Id pregunta: 4599 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  Respecto al acceso a Internet, Ia Ley General de telecomunicaciones:";
 choices[47]= new Array();
 choices[47][0] = "no menciona nada";
 choices[47][1] = "obliga a todos los operadores a prestar dicho servicio en localidades de mas de 1.000 habitantes.";
 choices[47][2] = "obliga a Telefonica de Espana, S.A. a prestarlo en todo el territorio nacional";
 choices[47][3] = "lo incluye dentro del servicio universal.";
 answers[47] = choices[47][3];
 units[47] = "110";
 comments[47] = "Id Pregunta: 4599. ";


//  Id pregunta: 4824 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes direcciones IP de host pertenece a cualquiera de los rangos de direcciones IP p&uacute;blicas?";
 choices[48]= new Array();
 choices[48][0] = "10.172.13.65";
 choices[48][1] = "172.16.223.125";
 choices[48][2] = "172.64.12.29";
 choices[48][3] = "192.168.23.252";
 answers[48] = choices[48][2];
 units[48] = "100";
 comments[48] = "Id Pregunta: 4824. NULL";


//  Id pregunta: 4972 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l es la versi&oacute;n ampliada del protocolo BOOTP?:";
 choices[49]= new Array();
 choices[49][0] = "DHCP.";
 choices[49][1] = "RARP.";
 choices[49][2] = "DNS.";
 choices[49][3] = "WINS.";
 answers[49] = choices[49][0];
 units[49] = "112";
 comments[49] = "Id Pregunta: 4972. Examen TIC B 2007";


//  Id pregunta: 4980 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Cu&aacute;l debe ser la frecuencia m&iacute;nima de muestreo de una se&ntilde;al anal&oacute;gica de voz transmitida por un canaltelef&oacute;nico para que pueda ser reconstruida con exactitud:";
 choices[50]= new Array();
 choices[50][0] = "8 muestras/segundo.";
 choices[50][1] = "8000 muestras/segundo.";
 choices[50][2] = "16 muestras/segundo.";
 choices[50][3] = "4000 muestras/segundo.";
 answers[50] = choices[50][1];
 units[50] = "108";
 comments[50] = "Id Pregunta: 4980. Examen TIC B 2007";


//  Id pregunta: 5304 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  El protocolo Frame Relay:";
 choices[51]= new Array();
 choices[51][0] = "Es no orientado a conexi&oacute;n";
 choices[51][1] = "Sus tramas tienen tama&ntilde;o fijo de 1024B";
 choices[51][2] = "S&oacute;lo permite Circuitos Virtuales Permanentes y no conmutados";
 choices[51][3] = "Es orientado a conexi&oacute;n";
 answers[51] = choices[51][3];
 units[51] = "109";
 comments[51] = "Id Pregunta: 5304. ";


//  Id pregunta: 5306 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Seg&uacute;n la Ley 9/2014, la determinaci&oacute;n de si la prestaci&oacute;n del servicio universal supone una causa injustificada para los operadores obligados a prestarlo corresponde a:";
 choices[52]= new Array();
 choices[52][0] = "Ministerio de Industria";
 choices[52][1] = "Gobierno";
 choices[52][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[52][3] = "Ninguno de los anteriores";
 answers[52] = choices[52][2];
 units[52] = "110";
 comments[52] = "Id Pregunta: 5306. ";


//  Id pregunta: 5579 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  En el marco de la liberalizaci&oacute;n de las telecomunicaciones, &iquest;Cu&aacute;les de las siguientes acciones NO se pretende fomentar mediante la desagregaci&oacute;n del bucle de abonado?";
 choices[53]= new Array();
 choices[53][0] = "Incrementar el n&uacute;mero de abonados";
 choices[53][1] = "Incrementar la penetraci&oacute;n de servicios de banda ancha";
 choices[53][2] = "Reducir el precio de los servicios avanzados de telecomunicaciones";
 choices[53][3] = "Favorecer la competencia enlas redes de acceso";
 answers[53] = choices[53][0];
 units[53] = "107";
 comments[53] = "Id Pregunta: 5579. NULL";


//  Id pregunta: 5785 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  &iquest;De acuerdo al est&aacute;ndar, cu&aacute;l es el ancho de banda que podr&aacute; obtener un usuario de una red UMTS R99 si se est&aacute; desplazando en un veh&iacute;culo a 40 km/h en un entorno urbano?";
 choices[54]= new Array();
 choices[54][0] = "2 Mbps independientemente de la situaci&oacute;n del usuario";
 choices[54][1] = "100 kbps";
 choices[54][2] = "144 Kbps";
 choices[54][3] = "384 kbps";
 answers[54] = choices[54][3];
 units[54] = "108";
 comments[54] = "Id Pregunta: 5785. ";


//  Id pregunta: 5868 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  En el &aacute;mbito de los patrones de dise&ntilde;o, &iquest;qu&eacute; es un singleton?";
 choices[55]= new Array();
 choices[55][0] = "Un objeto del que obtenemos referencias a otros";
 choices[55][1] = "Un objeto que adapta las llamadas a otro y act&uacute;a como intermediario";
 choices[55][2] = "Un objeto del que s&oacute;lo existe una instancia";
 choices[55][3] = "Una clase que no se puede instanciar";
 answers[55] = choices[55][2];
 units[55] = "116";
 comments[55] = "Id Pregunta: 5868. MAP 2008 A1";


//  Id pregunta: 5896 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  &iquest;Qu&eacute; tecnolog&iacute;as podemos utilizar, entre otras, para evitar utilizar c&oacute;digo Java en las p&aacute;ginas JSP?";
 choices[56]= new Array();
 choices[56][0] = "JSTL y EL";
 choices[56][1] = "Scriptlets";
 choices[56][2] = "JavaScript";
 choices[56][3] = "No es posible hacer tal cosa; toda p&aacute;gina JSP debe contener algo de c&oacute;digo Java";
 answers[56] = choices[56][0];
 units[56] = "116";
 comments[56] = "Id Pregunta: 5896. ";


//  Id pregunta: 6162 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Indique cual de las siguientes no es una funci&oacute;n de los gatekeepers:";
 choices[57]= new Array();
 choices[57][0] = "Control del Ancho de Banda.";
 choices[57][1] = "Rechazo de llamadas seg&uacute;n distintos criterios.";
 choices[57][2] = "Control de comunicaci&oacute;n con MCUs o gateways.";
 choices[57][3] = "Comunicaci&oacute;n con redes de conmutaci&oacute;n de circuitos.";
 answers[57] = choices[57][3];
 units[57] = "117";
 comments[57] = "Id Pregunta: 6162. ";


//  Id pregunta: 6453 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Qu&eacute; m&eacute;todo de HTTP se debe utilizar para comprobar la validez de una p&aacute;gina sin que la llamada retorne el cuerpo del mensaje?";
 choices[58]= new Array();
 choices[58][0] = "GET";
 choices[58][1] = "HEAD";
 choices[58][2] = "POST";
 choices[58][3] = "SERVICE";
 answers[58] = choices[58][1];
 units[58] = "112";
 comments[58] = "Id Pregunta: 6453. Castilla La Mancha 2009";


//  Id pregunta: 6484 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Respecto a las mejoras de la TDT (DVB-T), sobre la televisi&oacute;n anal&oacute;gica, se&ntilde;ale la afirmaci&oacute;n INCORRECTA";
 choices[59]= new Array();
 choices[59][0] = "TDT permite un mayor aprovechamiento del espectro";
 choices[59][1] = "TDT permite mayor calidad de imagen";
 choices[59][2] = "TDT permite interactividad";
 choices[59][3] = "TDT permite la visualizaci&oacute;n degradada ante un nivel de se&ntilde;al d&eacute;bil";
 answers[59] = choices[59][3];
 units[59] = "0";
 comments[59] = "Id Pregunta: 6484. Castilla La Mancha 2009";


//  Id pregunta: 6566 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  UMTS ";
 choices[60]= new Array();
 choices[60][0] = "Reutiliza el subsistema de red de GSM";
 choices[60][1] = "Reutiliza el subsistema de red de GPRS";
 choices[60][2] = "El sistema de acceso radio es nuevo";
 choices[60][3] = "Todas las respuestas anteriores son ciertas";
 answers[60] = choices[60][3];
 units[60] = "108";
 comments[60] = "Id Pregunta: 6566. NULL";


//  Id pregunta: 8300 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  El protocolo MPLS (Multiprotocol Label Switching), &iquest;entre qu&eacute; capas del modelo OSI opera? ";
 choices[61]= new Array();
 choices[61][0] = "Entre la capa f&iacute;sica y la de enlace de datos.";
 choices[61][1] = "Entre la capa de enlace de datos y la capa de red. ";
 choices[61][2] = "Entre la capa de red y la capa de transporte. ";
 choices[61][3] = "Entre la capa de transporte y las capas superiores.";
 answers[61] = choices[61][1];
 units[61] = "100";
 comments[61] = "Id Pregunta: 8300. Examen TIC A2 2010";


//  Id pregunta: 8310 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  La autoridad encargada de la asignaci&oacute;n de nombres de dominio de primer nivel gen&eacute;ricos (gTLD) y de c&oacute;digos de pa&iacute;ses (ocTLD) &uacute;nicos en lnternet es:";
 choices[62]= new Array();
 choices[62][0] = "IANA. ";
 choices[62][1] = "NIST.";
 choices[62][2] = "ICANN.";
 choices[62][3] = "IETF.";
 answers[62] = choices[62][2];
 units[62] = "112,42";
 comments[62] = "Id Pregunta: 8310. Examen TIC A2 2010";


//  Id pregunta: 8326 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  El protocolo LAPB:";
 choices[63]= new Array();
 choices[63][0] = "Se implementa en la capa de aplicaci&oacute;n del modelo OSI";
 choices[63][1] = "Utiliza tramas con el mismo formato que HDLC";
 choices[63][2] = "Utiliza todo el juego de comandos de HDLC";
 choices[63][3] = "Se implementa en la capa de red del modelo OSI";
 answers[63] = choices[63][1];
 units[63] = "101";
 comments[63] = "Id Pregunta: 8326. Analista Ayto. Madrid 2010";


//  Id pregunta: 8524 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Cu&aacute;nto overhead o sobrecarga genera cada paquete MPLS?";
 choices[64]= new Array();
 choices[64][0] = "4 bits.";
 choices[64][1] = "5 bits.";
 choices[64][2] = "32 bits.";
 choices[64][3] = "258 bits.";
 answers[64] = choices[64][2];
 units[64] = "100";
 comments[64] = "Id Pregunta: 8524. Examen TIC A2 2010 interna";


//  Id pregunta: 8540 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes algoritmos de cifrado NO se implementa en WiMax?";
 choices[65]= new Array();
 choices[65][0] = "3DES";
 choices[65][1] = "SEAL";
 choices[65][2] = "AES";
 choices[65][3] = "RSA";
 answers[65] = choices[65][1];
 units[65] = "107";
 comments[65] = "Id Pregunta: 8540. Examen TIC A2 2010 interna";


//  Id pregunta: 8591 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes opciones NO es un servidor de aplicaciones que cumple con la especificaci&oacute;n de Java EE?";
 choices[66]= new Array();
 choices[66][0] = "Apache Tomcat";
 choices[66][1] = "JBOSS";
 choices[66][2] = "WebSphere Application Server";
 choices[66][3] = "Glassfish";
 answers[66] = choices[66][0];
 units[66] = "115,116";
 comments[66] = "Id Pregunta: 8591. Examen TIC A2 2010 interna";


//  Id pregunta: 8663 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  En la tecnolog&iacute;a VDSL, &iquest;cu&aacute;ntos canales se utilizan para la transmisi&oacute;n de los datos?";
 choices[67]= new Array();
 choices[67][0] = "4 (2 de bajada y 2 para subida)";
 choices[67][1] = "3 (2 de bajada y 1 de subida)";
 choices[67][2] = "2 (1 de bajada y 1 de subida)";
 choices[67][3] = "5 (3 de bajada y 2 de subida)";
 answers[67] = choices[67][0];
 units[67] = "107";
 comments[67] = "Id Pregunta: 8663. Examen UPM A2 2011";


//  Id pregunta: 8727 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l es el protocolo que permite hacer tunneling en Fibre Channel?";
 choices[68]= new Array();
 choices[68][0] = "iSCSI";
 choices[68][1] = "sSCSI";
 choices[68][2] = "iFCP";
 choices[68][3] = "FCIP";
 answers[68] = choices[68][3];
 units[68] = "48";
 comments[68] = "Id Pregunta: 8727. Examen UPM A2 2011";


//  Id pregunta: 8889 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes no es un ASE?";
 choices[69]= new Array();
 choices[69][0] = "ACSE";
 choices[69][1] = "MCSE";
 choices[69][2] = "RTSE";
 choices[69][3] = "ROSE";
 answers[69] = choices[69][1];
 units[69] = "100";
 comments[69] = "Id Pregunta: 8889. ";


//  Id pregunta: 9022 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Un CSS (Cent Call Second) se emplea en telefon&iacute;a como una medida de tr&aacute;fico telef&oacute;nico (volumen de tr&aacute;fico). Un CCS es el tr&aacute;fico telef&oacute;nico causado por una llamada de 100 segundos de duraci&oacute;n. &iquest;Cuantos CSS tiene un Erlang?";
 choices[70]= new Array();
 choices[70][0] = "1 CSS.";
 choices[70][1] = "100 CSS.";
 choices[70][2] = "36 CSS.";
 choices[70][3] = "10 CSS";
 answers[70] = choices[70][2];
 units[70] = "104";
 comments[70] = "Id Pregunta: 9022. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9358 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l es la nomenclatura que indica la capa f&iacute;sica del est&aacute;ndar IEEE 802.3ba que permite la transmisi&oacute;n a 40 Gbps sobre fibra monomodo?";
 choices[71]= new Array();
 choices[71][0] = "40GBASE-KR4";
 choices[71][1] = "4GBASE-SR40";
 choices[71][2] = "40GBASE-SR4";
 choices[71][3] = "40GBASE-LR4";
 answers[71] = choices[71][3];
 units[71] = "99";
 comments[71] = "Id Pregunta: 9358. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Acceso Libre 2011.";


//  Id pregunta: 9397 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  MOS (&quot;Mean Opinion Score&quot;) es un &iacute;ndice subjetivo que sirve para medir la calidad de la voz. Su rango de valores est&aacute; entre 1 y 5. Si toma el valor 4, significa:";
 choices[72]= new Array();
 choices[72][0] = "La calidad es equiparable a una conversi&oacute;n cara a cara o escuchar la radio. ";
 choices[72][1] = "Apenas se entiende nada.";
 choices[72][2] = "Se perciben imperfecciones pero el sonido es claro";
 choices[72][3] = "Se requiere un esfuerzo considerable para seguir la comunicaci&oacute;n.";
 answers[72] = choices[72][2];
 units[72] = "109";
 comments[72] = "Id Pregunta: 9397. TIC AGE A2 2011 libre";


//  Id pregunta: 9470 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  Indique la afirmaci&oacute;n verdadera en relaci&oacute;n con el protocolo PEM de seguridad en el correo electr&oacute;nico";
 choices[73]= new Array();
 choices[73][0] = "PEM es un protocolo de seguridad extremo a extremo entre Agentes de Usuario (UA)";
 choices[73][1] = "PEM proporciona autenticaci&oacute;n en origen y confidencialidad, pero no proporciona integridad";
 choices[73][2] = "Sus siglas hacen referencia a &quot;Private Extended Mail&quot;";
 choices[73][3] = "Todas las anteriores son verdaderas";
 answers[73] = choices[73][0];
 units[73] = "106";
 comments[73] = "Id Pregunta: 9470. ";


//  Id pregunta: 9499 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Indica la afirmaci&oacute;n verdadera con respecto a los applets:";
 choices[74]= new Array();
 choices[74][0] = "Se descargan como documentos HTML y se ejecutan en el cliente";
 choices[74][1] = "El usuario no permite el acceso a los recursos locales por el s&oacute;lo hecho de aceptar un applet";
 choices[74][2] = "Se ejecutan en un componente independiente del navegador";
 choices[74][3] = "Todas las anteriores son ciertas";
 answers[74] = choices[74][3];
 units[74] = "114";
 comments[74] = "Id Pregunta: 9499. NULL";


//  Id pregunta: 9508 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;En qu&eacute; versi&oacute;n se produjo el cambio de nomenclatura de la plataforma Java, pas&aacute;ndose a denominar Java Platform cuando anteriormente se le denominaba Java 2?";
 choices[75]= new Array();
 choices[75][0] = "Entre la versi&oacute;n 1.1 y 1.2";
 choices[75][1] = "Entre la versi&oacute;n 1.3 y 1.4";
 choices[75][2] = "Entre la versi&oacute;n 1.4 y 5.0";
 choices[75][3] = "La plataforma Java nunca se denomin&oacute; Java 2";
 answers[75] = choices[75][2];
 units[75] = "116";
 comments[75] = "Id Pregunta: 9508. NULL";


//  Id pregunta: 9858 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Si el usuario A desea enviar un documento firmado digitalmente por &eacute;l al usuario B:";
 choices[76]= new Array();
 choices[76][0] = "El usuario A debe enviar el documento acompa&ntilde;ado del documento cifrado con la clave p&uacute;blica de B.";
 choices[76][1] = "El usuario A debe enviar el documento acompa&ntilde;ado del resultado de aplicar la funci&oacute;n hash al documento y &eacute;ste cifrado con la clave p&uacute;blica de B.";
 choices[76][2] = "El usuario A debe enviar el documento acompa&ntilde;ado del resultado de aplicar la funci&oacute;n hash al documento y &eacute;ste cifrado con la clave privada de A.";
 choices[76][3] = "El usuario A debe enviar el documento cifrado con la clave p&uacute;blica de B acompa&ntilde;ado del resultado de aplicar la funci&oacute;n hash al documento y todo cifrado con la clave privada de A.";
 answers[76] = choices[76][2];
 units[76] = "111";
 comments[76] = "Id Pregunta: 9858. Examen TIC del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 10062 AÃ±o de creación de pregunta: 2010-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de los siguientes NO es un mecanismo de control de la congesti&oacute;n en redes?";
 choices[77]= new Array();
 choices[77][0] = "Cubeta con ficha.";
 choices[77][1] = "Paquetes de estrangulamiento.";
 choices[77][2] = "Control de admisi&oacute;n.";
 choices[77][3] = "Vector distancia.";
 answers[77] = choices[77][3];
 units[77] = "102";
 comments[77] = "Id Pregunta: 10062. TIC A2, libre, examen 2013";


//  Id pregunta: 10127 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Cu&aacute;l de las siguientes no es un &aacute;rea de gesti&oacute;n de red seg&uacute;n el modelo de ISO:";
 choices[78]= new Array();
 choices[78][0] = "Fault Mangement";
 choices[78][1] = "Configuration Management";
 choices[78][2] = "Accounting Management";
 choices[78][3] = "Improvement Management";
 answers[78] = choices[78][3];
 units[78] = "104";
 comments[78] = "Id Pregunta: 10127. ";


//  Id pregunta: 10130 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  SNMPv3 est&aacute; definido en:";
 choices[79]= new Array();
 choices[79][0] = "RFC 3500";
 choices[79][1] = "RFC 3100";
 choices[79][2] = "RFC 3120-3125";
 choices[79][3] = "RFC 3410-3418";
 answers[79] = choices[79][3];
 units[79] = "104";
 comments[79] = "Id Pregunta: 10130. ";


//  Id pregunta: 10145 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Qu&eacute; es el dividendo digital?";
 choices[80]= new Array();
 choices[80][0] = "Una parte del espectro radioel&eacute;ctrico que ha quedado liberada tras la implantaci&oacute;n de la TDT.";
 choices[80][1] = "Una parte del espectro digital.";
 choices[80][2] = "Una compresi&oacute;n del espectro debido a la utilizaci&oacute;n de se&ntilde;ales digitales.";
 choices[80][3] = "Una reasignaci&oacute;n de frecuencias dentro de la banda que utiliza la TDT.";
 answers[80] = choices[80][0];
 units[80] = "105";
 comments[80] = "Id Pregunta: 10145. TIC A 2011";


//  Id pregunta: 10242 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En una aplicaci&oacute;n basada en Struts las solicitudes del cliente son interceptadas en primer lugar por:";
 choices[81]= new Array();
 choices[81][0] = "Un servlet que actua como controlador denominado ActionServlet";
 choices[81][1] = "Un JavaBean encargado de procesar la informaci&oacute;n denominado ActionForm";
 choices[81][2] = "Los objetos ActionMapping que analizan la direcci&oacute;n url y procesar la solicitud";
 choices[81][3] = "Un objeto ActionForward que renderiza una p&aacute;gina JSP";
 answers[81] = choices[81][0];
 units[81] = "116";
 comments[81] = "Id Pregunta: 10242. NULL";


//  Id pregunta: 10315 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Los conectores LC son:";
 choices[82]= new Array();
 choices[82][0] = "Conectores para PCI.";
 choices[82][1] = "Conectores de par trenzado.";
 choices[82][2] = "Conectores exclusivos para Mainframe.";
 choices[82][3] = "Conectores de fibra &oacute;ptica.";
 answers[82] = choices[82][3];
 units[82] = "99";
 comments[82] = "Id Pregunta: 10315. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10439 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Respecto al conjunto de normas H.323 de la UIT,";
 choices[83]= new Array();
 choices[83][0] = "se le puede a&ntilde;adir seguridad extremo a extremo con la recomendaci&oacute;n de la UIT H.235. ";
 choices[83][1] = "fue definida para redes de conmutaci&oacute;n de circuitos.";
 choices[83][2] = "permite audioconferencia pero no videoconferencia.";
 choices[83][3] = "se utiliza &uacute;nicamente con redes RDSI.";
 answers[83] = choices[83][0];
 units[83] = "117";
 comments[83] = "Id Pregunta: 10439. Examen TIC A1 2013";


//  Id pregunta: 10661 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Indique la afirmaci&oacute;n incorrecta:";
 choices[84]= new Array();
 choices[84][0] = "ActiveX es una evoluci&oacute;n de las tecnolog&iacute;as Component Object Model (COM) y Object Linking and Embedding (OLE).";
 choices[84][1] = "La tecnolog&iacute;a ActiveX est&aacute; limitada al sistema operativo Windows.";
 choices[84][2] = "Para introducir un control ActiveX en una p&aacute;gina HTML es necesario utilizar la etiqueta &lt;object&gt;";
 choices[84][3] = "Todas las anteriores son correctas.";
 answers[84] = choices[84][1];
 units[84] = "114";
 comments[84] = "Id Pregunta: 10661. ";


//  Id pregunta: 10671 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Elija la afirmaci&oacute;n correcta sobre el est&aacute;ndar DOCSIS:";
 choices[85]= new Array();
 choices[85][0] = "Se puede emplear para proporcionar acceso a Internet sobre una infraestructura de red HFC.";
 choices[85][1] = "Permite a&ntilde;adir transferencias de datos de alta velocidad a un sistema de televisi&oacute;n por cable (CATV)";
 choices[85][2] = "La versi&oacute;n europea se denomina EuroDOCSIS.";
 choices[85][3] = "Todas las anteriores son correctas.";
 answers[85] = choices[85][3];
 units[85] = "105";
 comments[85] = "Id Pregunta: 10671. ";


//  Id pregunta: 10884 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  En una red Ethernet 10BASE-T, un paquete de 1000 KBytes se transmite en:";
 choices[86]= new Array();
 choices[86][0] = "0,81 ms";
 choices[86][1] = "8,19 ms";
 choices[86][2] = "819 ms";
 choices[86][3] = "81,9 ms";
 answers[86] = choices[86][2];
 units[86] = "99";
 comments[86] = "Id Pregunta: 10884. Examen GSI 2014";


//  Id pregunta: 11182 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;C&oacute;mo se denominan los sistemas de comunicaciones m&oacute;viles que realizan la transmisi&oacute;n y recepci&oacute;n de forma secuencial en un sentido cada vez?";
 choices[87]= new Array();
 choices[87][0] = "Paralelos";
 choices[87][1] = "D&uacute;plex";
 choices[87][2] = "Semi-duplex";
 choices[87][3] = "Ninguno de los anteriores";
 answers[87] = choices[87][2];
 units[87] = "108";
 comments[87] = "Id Pregunta: 11182. ";


//  Id pregunta: 11190 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de los siguientes protocolos se utiliza para videoconferencia sobre IP?";
 choices[88]= new Array();
 choices[88][0] = "ITU H.320";
 choices[88][1] = "ITU H.243";
 choices[88][2] = "ITU H.249";
 choices[88][3] = "ITU H.323";
 answers[88] = choices[88][3];
 units[88] = "117";
 comments[88] = "Id Pregunta: 11190. ";


//  Id pregunta: 11306 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  En cuanto a la utilizaci&oacute;n de web services, se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[89]= new Array();
 choices[89][0] = "Los web services en .NET tienen la extensi&oacute;n WSDL";
 choices[89][1] = "El servicio web es descrito mediante un archivo IDL";
 choices[89][2] = "WSDL define el servicio web utilizando IDL";
 choices[89][3] = "XLAN fue definido en los primeros tiempos de desarrollo de web services como est&aacute;ndar abierto de comunicaci&oacute;n entre componentes";
 answers[89] = choices[89][2];
 units[89] = "115116";
 comments[89] = "Id Pregunta: 11306. Los web services en .NET tienen la extensi&oacute;n .asmx";


//  Id pregunta: 11322 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Las directivas JSP nos permiten configurar alguna informaci&oacute;n que pueda ser usada en nuestra p&aacute;gina JSP. Cu&aacute;l de las siguientes no es una directiva jsp";
 choices[90]= new Array();
 choices[90][0] = "DocRel";
 choices[90][1] = "Page";
 choices[90][2] = "Include";
 choices[90][3] = "Taglib";
 answers[90] = choices[90][0];
 units[90] = "115";
 comments[90] = "Id Pregunta: 11322. ";


//  Id pregunta: 11445 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Seg&uacute;n la Ley 9/2014, marque la respuesta correcta respecto a la protecci&oacute;n de datos personales y la privacidad en relaci&oacute;n con las gu&iacute;as de abonados:";
 choices[91]= new Array();
 choices[91][0] = "A figurar en las gu&iacute;as de abonados.";
 choices[91][1] = "A ser informado de la inclusi&oacute;n de sus datos en las gu&iacute;as de abonados.";
 choices[91][2] = "A no figurar en las gu&iacute;as de abonados.";
 choices[91][3] = "Todas las anteriores.";
 answers[91] = choices[91][3];
 units[91] = "110";
 comments[91] = "Id Pregunta: 11445. ";


//  Id pregunta: 11448 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seg&uacute;n la Ley 9/2014, si el MINETUR emite un informe negativo de una planificaci&oacute;n urbana o territorial, se podr&aacute; alegar:";
 choices[92]= new Array();
 choices[92][0] = "En el plazo m&aacute;ximo de tres meses.";
 choices[92][1] = "Nunca, ya que el informe emitido por MINETUR es negativo.";
 choices[92][2] = "En el plazo m&aacute;ximo de tres meses siempre y cuando el informe negativo permita modificar el informe.";
 choices[92][3] = "En el plazo m&aacute;ximo de un mes.";
 answers[92] = choices[92][3];
 units[92] = "110";
 comments[92] = "Id Pregunta: 11448. ";


//  Id pregunta: 11658 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En LTE, el S-GW:";
 choices[93]= new Array();
 choices[93][0] = "Es el punto de interconexi&oacute;n a redes IP externas.";
 choices[93][1] = "Une la red de acceso con el n&uacute;cleo de red.";
 choices[93][2] = "Gestiona la QoS en los servicios.";
 choices[93][3] = "Almacena y actualiza la base de datos que contiene la informaci&oacute;n de suscripci&oacute;n del usuario.";
 answers[93] = choices[93][1];
 units[93] = "108";
 comments[93] = "Id Pregunta: 11658. ";


//  Id pregunta: 11666 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  El perfil de XAdES en el que se a&ntilde;aden los certificados a los documentos firmados es:";
 choices[94]= new Array();
 choices[94][0] = "XAdES-A";
 choices[94][1] = "XAdES-C";
 choices[94][2] = "XAdES-X-L";
 choices[94][3] = "XAdES-X";
 answers[94] = choices[94][2];
 units[94] = "111";
 comments[94] = "Id Pregunta: 11666. ";


//  Id pregunta: 11692 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En qu&eacute; consiste el mecanismo de Sobrecarga NAT";
 choices[95]= new Array();
 choices[95][0] = "En la utilizaci&oacute;n de puertos para traducir una direccion interna local en una direccion interna global.";
 choices[95][1] = "En la utilizaci&oacute;n de puertos para traducir direcciones internas locales en una o m&aacute;s direcciones globales internas.";
 choices[95][2] = "Traduce una direccion local interna en una global interna";
 choices[95][3] = "Traduce una direccion local interna en otra direccion local interna";
 answers[95] = choices[95][1];
 units[95] = "111";
 comments[95] = "Id Pregunta: 11692. NULL";


//  Id pregunta: 11698 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Una WAN Frame-Relay est&aacute;ndar corresponde a una red f&iacute;sica:";
 choices[96]= new Array();
 choices[96][0] = "Punto a punto";
 choices[96][1] = "Broadcast multi-acceso";
 choices[96][2] = "No broadcast multi-acceso";
 choices[96][3] = "Broadcast punto a multipunto";
 answers[96] = choices[96][2];
 units[96] = "102";
 comments[96] = "Id Pregunta: 11698. NULL";


//  Id pregunta: 11706 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;cu&aacute;l es una caracter&iacute;stica de los ataques DoS?";
 choices[97]= new Array();
 choices[97][0] = "Siempre preceden a ataques de acceso";
 choices[97][1] = "Intentan comprometer la disponibilidad de un equipo, red, o aplicaci&oacute;n";
 choices[97][2] = "Un ejemplo de ellos es el escaneo de puertos";
 choices[97][3] = "Un ejemplo de ellos es el &quot;barrido de ping&quot;";
 answers[97] = choices[97][1];
 units[97] = "111";
 comments[97] = "Id Pregunta: 11706. NULL";


//  Id pregunta: 11740 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Cuando aumenta el n&uacute;mero de colisiones en una red LAN porque se ha aumentado el tr&aacute;fico en la misma, &iquest;qu&eacute; es necesario aplicar?:";
 choices[98]= new Array();
 choices[98][0] = "Segmentaci&oacute;n de la LAN";
 choices[98][1] = "Cambio de forma de conexi&oacute;n";
 choices[98][2] = "Cambio de troncal";
 choices[98][3] = "Cambio de Sistema de cableado estructurado";
 answers[98] = choices[98][0];
 units[98] = "99";
 comments[98] = "Id Pregunta: 11740. ";


//  Id pregunta: 11756 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Para que se utiliza el sistema de multiplexaci&oacute;n CWDM?";
 choices[99]= new Array();
 choices[99][0] = "dar soporte a aplicaciones de redes de &aacute;rea metropolitana, donde se busca no tanto alcanzar largas distancias sino reducci&oacute;n de costes";
 choices[99][1] = "se utiliza para el transporte de grandes cantidades de informaci&oacute;n a larga distancia";
 choices[99][2] = "Actualmente no se utiliza";
 choices[99][3] = "El sistema CWDM es interoperable con DWDM.";
 answers[99] = choices[99][0];
 units[99] = "99";
 comments[99] = "Id Pregunta: 11756. ";


