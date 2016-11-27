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

//  Id pregunta: 1488 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes respuestas caracteriza FDDI?:";
 choices[0]= new Array();
 choices[0][0] = "Consiste en el control de dispositivos y datos que funcionan por desplazameinto de frecuencia";
 choices[0][1] = "Consiste en la t&eacute;cnica de control de los dispositivos para filtraje de datos en las redes de &aacute;rea local";
 choices[0][2] = "Consiste en dos bucles de fibra &oacute;ptica con protocolo de paso de testigo";
 choices[0][3] = "Consiste en un bucle de fibra &oacute;ptica que funciona como Ethernet (por contenci&oacute;n) pero a 100 Mbits/seg, y hay otro bucle como backup del primero";
 answers[0] = choices[0][2];
 units[0] = "101";
 comments[0] = "Id Pregunta: 1488. ";


//  Id pregunta: 2976 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  El estandar de IEEE 802.9 se correspond e con?";
 choices[1]= new Array();
 choices[1][0] = "fibra optica ";
 choices[1][1] = "voz y datos";
 choices[1][2] = "seguridad lan";
 choices[1][3] = "ninguna de las anteriores";
 answers[1] = choices[1][1];
 units[1] = "101";
 comments[1] = "Id Pregunta: 2976. Examen Julio 2003";


//  Id pregunta: 3002 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Dentro de la familia de protocolos TCP/IP hay algunos que se definen como no fiables en el sentido de que no aseguran la recepci&oacute;n final en el equipo destinatario de la informaci&oacute;n. De los siguientes indique cu&aacute;l es un protocolo fiable:";
 choices[2]= new Array();
 choices[2][0] = "IP";
 choices[2][1] = "UDP";
 choices[2][2] = "TCP";
 choices[2][3] = "FDDI";
 answers[2] = choices[2][2];
 units[2] = "100";
 comments[2] = "Id Pregunta: 3002. NULL";


//  Id pregunta: 3190 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Dentro del modelo OSI la funci&oacute;n de 'compresi&oacute;n de mensajes', corresponde al nivel:";
 choices[3]= new Array();
 choices[3][0] = "Nivel de red";
 choices[3][1] = "Nivel de transporte";
 choices[3][2] = "Nivel de sesi&oacute;n";
 choices[3][3] = "Nivel de presentaci&oacute;n";
 answers[3] = choices[3][3];
 units[3] = "100";
 comments[3] = "Id Pregunta: 3190. NULL";


//  Id pregunta: 3286 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Qu&eacute; es la MTU en un paquete IP?:";
 choices[4]= new Array();
 choices[4][0] = "El m&aacute;ximo uso de transmisi&oacute;n";
 choices[4][1] = "La mayor unidad posible de datos que puede ser enviada a trav&eacute;s de un medio f&iacute;sico";
 choices[4][2] = "El tama&ntilde;o del paquete IP";
 choices[4][3] = "Solo se utiliza en IPv6";
 answers[4] = choices[4][1];
 units[4] = "100";
 comments[4] = "Id Pregunta: 3286. ";


//  Id pregunta: 3293 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Qu&eacute; funci&oacute;n principal realiza una PABX?:";
 choices[5]= new Array();
 choices[5][0] = "Conmutaci&oacute;n";
 choices[5][1] = "Recogida de informaci&oacute;n de gesti&oacute;n de red";
 choices[5][2] = "Visualizaci&oacute;n de informaci&oacute;n de gesti&oacute;n de red";
 choices[5][3] = "Consulta bajo demanda de la informaci&oacute;n de gesti&oacute;n de red";
 answers[5] = choices[5][0];
 units[5] = "103";
 comments[5] = "Id Pregunta: 3293. ";


//  Id pregunta: 3336 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Cada cabecera de IPv6 tiene una longitud de:";
 choices[6]= new Array();
 choices[6][0] = "32 bytes";
 choices[6][1] = "36 bytes";
 choices[6][2] = "n&uacute;mero de bytes variable seg&uacute;n el tipo de cabecera";
 choices[6][3] = "40 bytes";
 answers[6] = choices[6][3];
 units[6] = "100";
 comments[6] = "Id Pregunta: 3336. NULL";


//  Id pregunta: 3384 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El middleware puede definirse como un m&oacute;dulo intermedio que act&uacute;a como conductor entre dos m&oacute;dulos de software.  A este respecto, tambi&eacute;n se puede afirmar que:";
 choices[7]= new Array();
 choices[7][0] = "En una aplicaci&oacute;n cliente/servidor, el middleware permite independizar los procesos cliente y servidor";
 choices[7][1] = "La utilizaci&oacute;n del middleware en lugar de utilizar drectamente las APIs del sistema operativo, hace que en  muchas ocasiones se pierda 'potencia'";
 choices[7][2] = "En t&eacute;minos de programaci&oacute;n orientada a objetos, el middleware identifica diferentes objetos y conoce las propiedades que tienen asociadas, por lo que puede responder a peticiones referentes a los mismos";
 choices[7][3] = "Todas las respuestas anteriores son correctas";
 answers[7] = choices[7][3];
 units[7] = "113";
 comments[7] = "Id Pregunta: 3384. *: Middleware";


//  Id pregunta: 3393 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El nivel de transporte de modelo OSI gestiona funciones como:";
 choices[8]= new Array();
 choices[8][0] = "Direccionamiento f&iacute;sico, secuenciamiento de tramas, control de flujo y notificaci&oacute;n de errores";
 choices[8][1] = "Compresi&oacute;n y encriptaci&oacute;n de datos";
 choices[8][2] = "Control de flujo, multiplexaci&oacute;n y gesti&oacute;n de errores";
 choices[8][3] = "Identificaci&oacute;n de los corresponsales y sincronizaci&oacute;n de la comunicaci&oacute;n";
 answers[8] = choices[8][2];
 units[8] = "100";
 comments[8] = "Id Pregunta: 3393. NULL";


//  Id pregunta: 3400 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El PLCP se incorpora como subnivel de:";
 choices[9]= new Array();
 choices[9][0] = "Nivel 2 de 802.11";
 choices[9][1] = "Nivel 1 de 802.11";
 choices[9][2] = "Nivel 1 de 802.3";
 choices[9][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[9] = choices[9][1];
 units[9] = "101,107";
 comments[9] = "Id Pregunta: 3400. ";


//  Id pregunta: 3435 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Indique la afirmaci&oacute;n incorrecta referente a la RDSI:";
 choices[10]= new Array();
 choices[10][0] = "Se puede realizar el acceso a trav&eacute;s de las l&iacute;neas existentes a dos hilos";
 choices[10][1] = "La se&ntilde;alizaci&oacute;n por canal com&uacute;n (CCS7) se realiza entre centrales";
 choices[10][2] = "El sistema de se&ntilde;alizaci&oacute;n para abonados digitales RDSI (DSS1) ha sido definido para su empleo entre centrales y equipos terminales";
 choices[10][3] = "El transporte de se&ntilde;alizaci&oacute;n (Canal D) no permite el empaquetamiento de datos";
 answers[10] = choices[10][3];
 units[10] = "103";
 comments[10] = "Id Pregunta: 3435. ";


//  Id pregunta: 3439 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El protocolo ANSI X 3.28:";
 choices[11]= new Array();
 choices[11][0] = "Es un protocolo orientado al bit";
 choices[11][1] = "Tiene tres modos de operaci&oacute;n: modo de respuesta normal, modo de respuesta s&iacute;ncrono y modo balanceado as&iacute;ncrono";
 choices[11][2] = "Existen tres tipos de tramas : informaci&oacute;n, supervisi&oacute;n y no numeradas";
 choices[11][3] = "Es un protocolo de control de enlace";
 answers[11] = choices[11][3];
 units[11] = "99";
 comments[11] = "Id Pregunta: 3439. NULL";


//  Id pregunta: 3441 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El protocolo ARP:";
 choices[12]= new Array();
 choices[12][0] = "S&oacute;lo funciona si hay un proxy configurado";
 choices[12][1] = "Permite relacionar puertos TCP y direcciones IP";
 choices[12][2] = "Permite relacionar puertos TCP  y direcciones MAC";
 choices[12][3] = "Ninguna de las anteriores";
 answers[12] = choices[12][3];
 units[12] = "100,102";
 comments[12] = "Id Pregunta: 3441. ";


//  Id pregunta: 3460 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El protocolo TCP (Protocolo de Control de Transmisi&oacute;n) es un protocolo a nivel de transporte orientado a conexi&oacute;n:";
 choices[13]= new Array();
 choices[13][0] = "Que fue desarrollado expresamente para Internet";
 choices[13][1] = "Que, al igual que el protocolo IP (Protocolo Interredes), son protocolos OSI (Interconexi&oacute;n de Sistemas Abiertos)";
 choices[13][2] = "Que no puede interoperar con protocolos de transporte OSI";
 choices[13][3] = "Que fue dise&ntilde;ado para garantizar la fiabilidad que no ofrece el protocolo IP para establecer comunicaciones fiables entre subredes de datos";
 answers[13] = choices[13][3];
 units[13] = "100";
 comments[13] = "Id Pregunta: 3460. NULL";


//  Id pregunta: 3476 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  El tiempo m&aacute;ximo de paso de datos de una estaci&oacute;n en una red Ethernet a 100 Mbits es:";
 choices[14]= new Array();
 choices[14][0] = "Igual al tiempo que tarda en propagarse un mensaje con longitud m&aacute;xima multiplicado por el n&uacute;mero de nodos en ese tramo";
 choices[14][1] = "No hay tiempo m&aacute;ximo";
 choices[14][2] = "Depende fundamentalmente de si el soporte es de cobre o de fibra &oacute;ptica";
 choices[14][3] = "No existe tiempo m&aacute;ximo ya que es inmediato, pues que el acceso al medio del mensaje lo hace en cuanto escucha que no hay tr&aacute;fico en la red";
 answers[14] = choices[14][1];
 units[14] = "101";
 comments[14] = "Id Pregunta: 3476. ";


//  Id pregunta: 3504 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En el modelo de referencia para interconexi&oacute;n de sistemas abiertos (ISO OSI) indicar cu&aacute;l de las siguientes respuestas es verdadera:";
 choices[15]= new Array();
 choices[15][0] = "El est&aacute;ndar RS-232-C se ha desarrollado para las l&iacute;neas de comunicaci&oacute;n de la capa f&iacute;sica";
 choices[15][1] = "El nivel de enlace corresponde a la l&iacute;nea 4";
 choices[15][2] = "El protocolo de enlace de datos se ocupa de la estandarizaci&oacute;n de las interfaces el&eacute;ctricas, mec&aacute;nicas y de se&ntilde;alizaci&oacute;n";
 choices[15][3] = "Es un modelo de 9 capas";
 answers[15] = choices[15][0];
 units[15] = "100";
 comments[15] = "Id Pregunta: 3504. NULL";


//  Id pregunta: 3526 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En IPv4, las direcciones que van desde 192.0.0.0 hasta 223.255.255.255 son del tipo:";
 choices[16]= new Array();
 choices[16][0] = "A";
 choices[16][1] = "B";
 choices[16][2] = "C";
 choices[16][3] = "D";
 answers[16] = choices[16][2];
 units[16] = "100";
 comments[16] = "Id Pregunta: 3526. NULL";


//  Id pregunta: 3540 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En los m&oacute;dems en banda base:";
 choices[17]= new Array();
 choices[17][0] = "No se realiza modulaci&oacute;n ni demodulaci&oacute;n.";
 choices[17][1] = "Emplean modulaci&oacute;n de amplitud con banda lateral &uacute;nica.";
 choices[17][2] = "Emplean modulaci&oacute;n QAM (modulaci&oacute;n en amplitud de cuadratura).";
 choices[17][3] = "Usan modulaci&oacute;n PSK y ASK combinadas.";
 answers[17] = choices[17][0];
 units[17] = "101";
 comments[17] = "Id Pregunta: 3540. modems";


//  Id pregunta: 3552 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En sistemas de informaci&oacute;n y comunicaciones, INAP es acr&oacute;nimo de:";
 choices[18]= new Array();
 choices[18][0] = "Integration Network Application Protocol";
 choices[18][1] = "Intelligent Network Application Protocol";
 choices[18][2] = "Inverse Naming Address Protocol";
 choices[18][3] = "Intelligent Network Application Part";
 answers[18] = choices[18][3];
 units[18] = "102";
 comments[18] = "Id Pregunta: 3552. ";


//  Id pregunta: 3573 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En una conexi&oacute;n V.90:";
 choices[19]= new Array();
 choices[19][0] = "Los m&oacute;dems siempre han de sincronizarse a 56k.";
 choices[19][1] = "Los m&oacute;dems no establecen protocolo de negociaci&oacute;n de par&aacute;metros previo a la conexi&oacute;n.";
 choices[19][2] = "La negociaci&oacute;n se hace v&iacute;a protocolos TCP.";
 choices[19][3] = "La velocidad de conexi&oacute;n se negocia entre los dos m&oacute;dem de acuerdo a las caracter&iacute;sticas de la l&iacute;nea.";
 answers[19] = choices[19][3];
 units[19] = "100, 103";
 comments[19] = "Id Pregunta: 3573. modems";


//  Id pregunta: 3578 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En una red que usa conmutaci&oacute;n de paquetes:";
 choices[20]= new Array();
 choices[20][0] = "La longitud de la unidades de datos (paquetes) que puedan presentarse a la red es ilimitada";
 choices[20][1] = "Cuanto mayor sea la longitud de los paquetes, mayor ser&aacute; el tiempo de espera hasta su retransmisi&oacute;n, por lo que se procurar&aacute; que tama&ntilde;o de los paquetes sea el menor posible";
 choices[20][2] = "Si un mensaje supera la m&aacute;xima longitud permitida, se divide en unidades de datos m&aacute;s peque&ntilde;as";
 choices[20][3] = "La ITU-T en su recomendaci&oacute;n X.25 no propone ning&uacute;n m&aacute;ximo para la longitud de los paquetes";
 answers[20] = choices[20][2];
 units[20] = "101";
 comments[20] = "Id Pregunta: 3578. ";


//  Id pregunta: 3579 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En una red TCP/IP, la conmutaci&oacute;n de nivel 4:";
 choices[21]= new Array();
 choices[21][0] = "No existe";
 choices[21][1] = "Se realiza mediante el identificador MAC del paquete IP";
 choices[21][2] = "Se realiza mediante el identificador de puerto del paquete IP";
 choices[21][3] = "Se realiza mediante el identificador de la direcci&oacute;n IP";
 answers[21] = choices[21][2];
 units[21] = "100";
 comments[21] = "Id Pregunta: 3579. NULL";


//  Id pregunta: 3587 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  La aplicaci&oacute;n 'traceroute' basada en ICMP:";
 choices[22]= new Array();
 choices[22][0] = "permite conocer si un sistema est&aacute; accesible";
 choices[22][1] = "permite establecer la ruta a seguir por un conjunto de datagramas IP";
 choices[22][2] = "permite conocer la ruta seguida por un datagrama IP";
 choices[22][3] = "permite obtener un mapa de la red utilizada";
 answers[22] = choices[22][2];
 units[22] = "100";
 comments[22] = "Id Pregunta: 3587. NULL";


//  Id pregunta: 3597 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  La direcci&oacute;n IP:";
 choices[23]= new Array();
 choices[23][0] = "Es &uacute;nica para cada tarjeta de red";
 choices[23][1] = "Es asignada por una entidad supranacional";
 choices[23][2] = "Puede ser modificada manualmente en UNIX";
 choices[23][3] = "Ninguna de las anteriores";
 answers[23] = choices[23][2];
 units[23] = "100";
 comments[23] = "Id Pregunta: 3597. NULL";


//  Id pregunta: 3610 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  La funci&oacute;n fundamental de un &quot;m&oacute;dem&quot; es:";
 choices[24]= new Array();
 choices[24][0] = "La adaptaci&oacute;n de las se&ntilde;ales digitales entre ordenadores, para su transmisi&oacute;n a trav&eacute;s de la l&iacute;nea telef&oacute;nica b&aacute;sica";
 choices[24][1] = "La adaptaci&oacute;n de las se&ntilde;ales anal&oacute;gicas entre ordenadores, para su transmisi&oacute;n a trav&eacute;s de la l&iacute;nea telef&oacute;nica b&aacute;sica";
 choices[24][2] = "La adaptaci&oacute;n de las se&ntilde;ales anal&oacute;gicas y digitales entre ordenadores, para su transmisi&oacute;n a trav&eacute;s de la l&iacute;nea telef&oacute;nica digital";
 choices[24][3] = "La adaptaci&oacute;n de las se&ntilde;ales anal&oacute;gicas entre ordenadores, para su transmisi&oacute;n a trav&eacute;s de un medio no anal&oacute;gico";
 answers[24] = choices[24][0];
 units[24] = "99";
 comments[24] = "Id Pregunta: 3610. modems";


//  Id pregunta: 3620 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  La norma IEEE 802.11a define una velocidad m&aacute;xima de transferencia de:";
 choices[25]= new Array();
 choices[25][0] = "11 Mbps";
 choices[25][1] = "11 MBps";
 choices[25][2] = "54 Mbps";
 choices[25][3] = "54 MBps";
 answers[25] = choices[25][2];
 units[25] = "101,107";
 comments[25] = "Id Pregunta: 3620. ";


//  Id pregunta: 3627 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  La operaci&oacute;n de gateways se entronca en:";
 choices[26]= new Array();
 choices[26][0] = "El nivel de enlace";
 choices[26][1] = "El nivel de aplicaci&oacute;n";
 choices[26][2] = "Interconexi&oacute;n de sistemas homogeneos";
 choices[26][3] = "Encaminadores y puentes";
 answers[26] = choices[26][1];
 units[26] = "102";
 comments[26] = "Id Pregunta: 3627. ";


//  Id pregunta: 3636 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  La Red Digital de Servicios Integrados (RDSI), permite los siguientes accesos o servicios:";
 choices[27]= new Array();
 choices[27][0] = "Circuitos virtuales permanentes";
 choices[27][1] = "Accesos B&aacute;sico 2B+D";
 choices[27][2] = "Circuitos virtuales punto a punto";
 choices[27][3] = "Todas las respuestas anteriores son correctas";
 answers[27] = choices[27][1];
 units[27] = "103";
 comments[27] = "Id Pregunta: 3636. ";


//  Id pregunta: 3645 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  La tecnolog&iacute;a de red de &aacute;rea local 100VG-AnyLAN:";
 choices[28]= new Array();
 choices[28][0] = "Utiliza el protocolo de acceso al medio CSMA/CD IEEE 802.3";
 choices[28][1] = "Utiliza el protocolo de acceso al medio por demanda de prioridad IEEE 802.12";
 choices[28][2] = "Requiere 8 pares trenzados de categor&iacute;a 3";
 choices[28][3] = "Todas las afirmaciones anteriores son falsas";
 answers[28] = choices[28][1];
 units[28] = "101";
 comments[28] = "Id Pregunta: 3645. ";


//  Id pregunta: 3646 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  La tecnolog&iacute;a de red de &aacute;rea local 10Base-T:";
 choices[29]= new Array();
 choices[29][0] = "Requiere cableado coaxial delgado";
 choices[29][1] = "Requiere cableado de pares trenzados de categor&iacute;a 5 como m&iacute;nimo";
 choices[29][2] = "Cumple el est&aacute;ndar IEEE 802.3";
 choices[29][3] = "Son ciertas las respuestas 'b' y 'c'";
 answers[29] = choices[29][2];
 units[29] = "101";
 comments[29] = "Id Pregunta: 3646. ";


//  Id pregunta: 3649 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  La tecnolog&iacute;a PUSH permite:";
 choices[30]= new Array();
 choices[30][0] = "Proteger la informaci&oacute;n mediante cifrado de la misma";
 choices[30][1] = "Establecer una conexi&oacute;n con un ordenador remoto";
 choices[30][2] = "Encaminar los datagramas a su destino";
 choices[30][3] = "Distribuir informaci&oacute;n en el momento oportuno";
 answers[30] = choices[30][3];
 units[30] = "113";
 comments[30] = "Id Pregunta: 3649. ";


//  Id pregunta: 3650 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  La tecnolog&iacute;a que pretende extender la banda ancha a los hogares usando Ethernet se denomina:";
 choices[31]= new Array();
 choices[31][0] = "Home Ethernet";
 choices[31][1] = "City Ethernet";
 choices[31][2] = "Instant Ethernet";
 choices[31][3] = "Ethernet To The Home";
 answers[31] = choices[31][3];
 units[31] = "101";
 comments[31] = "Id Pregunta: 3650. ";


//  Id pregunta: 3661 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Un m&oacute;dem que siga el est&aacute;ndar V34 puede alcanzar una velocidad de:";
 choices[32]= new Array();
 choices[32][0] = "14400 bps";
 choices[32][1] = "28800 bps";
 choices[32][2] = "56000 bps";
 choices[32][3] = "Ninguna de las anteriores";
 answers[32] = choices[32][1];
 units[32] = "99";
 comments[32] = "Id Pregunta: 3661. modems";


//  Id pregunta: 3673 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Una emisora de radiodifusi&oacute;n comercial es un ejemplo de sistemas de transmisi&oacute;n:";
 choices[33]= new Array();
 choices[33][0] = "Simplex";
 choices[33][1] = "Semiduplex";
 choices[33][2] = "Duplex";
 choices[33][3] = "Half duplex";
 answers[33] = choices[33][0];
 units[33] = "99";
 comments[33] = "Id Pregunta: 3673. ";


//  Id pregunta: 3674 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Una empresa dispone de dos edificios de oficinas a ambos lados de una calle. Para conectarlos han decidido estudiar las alternativas disponibles. Indique la opci&oacute;n que sea mejor tanto t&eacute;cnica como econ&oacute;micamente:";
 choices[34]= new Array();
 choices[34][0] = "utilizaci&oacute;n de un enlace infrarrojos";
 choices[34][1] = "Utilizaci&oacute;n de una l&iacute;nea punto a punto arrendada a una empresa con concesi&oacute;n para ofrecer servicios portadores";
 choices[34][2] = "Contrataci&oacute;n de un servicio VSAT";
 choices[34][3] = "Solicitar del Ayuntamiento permiso de obra para la conexi&oacute;n permanente de una l&iacute;nea privada que atraviese la calle";
 answers[34] = choices[34][1];
 units[34] = "102";
 comments[34] = "Id Pregunta: 3674. ";


//  Id pregunta: 3678 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Una red MAN es capaz de conectar estaciones de voz y datos en entornos metropolitanos, lo que suele entenderse por un di&aacute;metro de red de varias decenas de kil&oacute;metros. Entre estas se encuentra la denominada DQDB. Indique la opci&oacute;n correcta:";
 choices[35]= new Array();
 choices[35][0] = "DQDB significa Dual Queue Distributed Bus, y esta contenida en la norma IEEE 802.6";
 choices[35][1] = "DQDB significa Dual Queue Distributed Bus, y esta contenida en la norma IEEE 802.9";
 choices[35][2] = "DQDB significa Distributed Queue Dual Bus, y esta contenida en la norma IEEE 802.6";
 choices[35][3] = "DQDB significa Distributed Queue Dual Bus, y esta contenida en la norma IEEE 802.9";
 answers[35] = choices[35][2];
 units[35] = "101";
 comments[35] = "Id Pregunta: 3678. ";


//  Id pregunta: 3692 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Las direcciones anycast en IPv6 se caracterizan por:";
 choices[36]= new Array();
 choices[36][0] = "identificar a una &uacute;nica interfaz";
 choices[36][1] = "identificar a un conjunto de interfaces, y cada paquete enviado a una direcci&oacute;n anycast se entrega a una de ellas, eligi&eacute;ndose la mejor desde el punto de vista de la topoog&iacute;a de red";
 choices[36][2] = "identificar a un conjunto de interfaces, y cada paquete enviado a una direcci&oacute;n anycast se entrega a todas las interfaces";
 choices[36][3] = "ninguna de las anteriores respuestas es correcta";
 answers[36] = choices[36][1];
 units[36] = "100";
 comments[36] = "Id Pregunta: 3692. NULL";


//  Id pregunta: 3718 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  Los conceptos de arquitecturas de niveles est&aacute;n especificados en la siguiente norma de la ITU-T:";
 choices[37]= new Array();
 choices[37][0] = "X.400";
 choices[37][1] = "I.200";
 choices[37][2] = "X.500";
 choices[37][3] = "X.200";
 answers[37] = choices[37][3];
 units[37] = "113";
 comments[37] = "Id Pregunta: 3718. ";


//  Id pregunta: 3737 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  Los protocolos TP0 y TP2 de OSI est&aacute;n dise&ntilde;ados para redes de tipo A (fiables). &iquest;Cu&aacute;l de las siguentes afirmaciones es correcta?:";
 choices[38]= new Array();
 choices[38][0] = "TP0 no dispone de mecanismos de checksum y TP2 s&iacute;";
 choices[38][1] = "TP2 numera las TPDUs (Transport Protocolo Data Unit) y TP0 no";
 choices[38][2] = "En TP2 existen mecanismos de restablecimiento de la conexi&oacute;n mientras que en TP0 no";
 choices[38][3] = "Ambos permiten el multiplexado Ascendente (varias conexiones de transporte pueden usar la misma de red)";
 answers[38] = choices[38][1];
 units[38] = "100";
 comments[38] = "Id Pregunta: 3737. NULL";


//  Id pregunta: 3760 AÃ±o de creación de pregunta: 2002-01-01
 questions[39]= "40)  Para establecer una comunicaci&oacute;n punto a punto seg&uacute;n TCP/IP es necesario conocer:";
 choices[39]= new Array();
 choices[39][0] = "direcci&oacute;n y puerto origen";
 choices[39][1] = "direcci&oacute;n y puerto destino";
 choices[39][2] = "s&oacute;lo direcciones origen y destino";
 choices[39][3] = "las respuestas a) y b) son correctas";
 answers[39] = choices[39][3];
 units[39] = "100";
 comments[39] = "Id Pregunta: 3760. NULL";


//  Id pregunta: 3795 AÃ±o de creación de pregunta: 2002-01-01
 questions[40]= "41)  Respecto a las interfaces en RDSI:";
 choices[40]= new Array();
 choices[40][0] = "La interfaz R es la definida para poder conectar los equipos no RDSI (X21, RS232&hellip;) a la especificaci&oacute;n RDSI";
 choices[40][1] = "La interfaz R es la utilizada por los equipos remotos";
 choices[40][2] = "La Interfaz R est&aacute; todav&iacute;a indefinida pues depende de las compa&ntilde;&iacute;as proveedoras de servicio";
 choices[40][3] = "Todas las respuestas anteriores son err&oacute;neas";
 answers[40] = choices[40][0];
 units[40] = "103";
 comments[40] = "Id Pregunta: 3795. ";


//  Id pregunta: 3884 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  &iquest;En cu&aacute;l de las siguientes especificaciones de medio del est&aacute;ndar IEEE 802.3, el cable, cuando es de tipo coaxial, tiene una impedancia caracter&iacute;stica de 50 Ohmios?:";
 choices[41]= new Array();
 choices[41][0] = "Especificaciones de medio 10BASE2 y 10BASE5.";
 choices[41][1] = "Especificaci&oacute;n de medio 10BASE-FL.";
 choices[41][2] = " Especificaci&oacute;n de medio 10BASE-T.";
 choices[41][3] = " Especificaci&oacute;n de medio 10BROAD36.";
 answers[41] = choices[41][0];
 units[41] = "99";
 comments[41] = "Id Pregunta: 3884. Junta Andaluc&iacute;a";


//  Id pregunta: 3927 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes sistemas de cableado es conocido como &quot;cheapernet&quot;?";
 choices[42]= new Array();
 choices[42][0] = "El cable coaxial utilizado en el est&aacute;ndar 10Base5";
 choices[42][1] = "El cable coaxial utilizado en el est&aacute;ndar 10Base2";
 choices[42][2] = "El cable UTP de categor&iacute;a 3";
 choices[42][3] = "El cable STP de 150Ohm";
 answers[42] = choices[42][1];
 units[42] = "99";
 comments[42] = "Id Pregunta: 3927. ";


//  Id pregunta: 3984 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  En relaci&oacute;n con las redes de comunicaciones, &iquest;a qu&eacute; hace referencia el t&eacute;rmino &quot;VLAN trunking&quot;?";
 choices[43]= new Array();
 choices[43][0] = "Es el est&aacute;ndar 802.1Q";
 choices[43][1] = "Se refiere a etiquetar tramas ethernet";
 choices[43][2] = "Al proceso de transmitir m&uacute;ltiples VLAN por un &uacute;nico enlace";
 choices[43][3] = "A la se&ntilde;alizaci&oacute;n de VLAN";
 answers[43] = choices[43][2];
 units[43] = "101, 102";
 comments[43] = "Id Pregunta: 3984. ";


//  Id pregunta: 3992 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Se&ntilde;ale la respuesta correcta:";
 choices[44]= new Array();
 choices[44][0] = "IDABC tiene como objetivo la identificaci&oacute;n, promoci&oacute;n y desarrollo de servicios paneuropeos de e-administraci&oacute;n para los ciudadanos, las empresas y las administraciones, as&iacute; como de las infraestructuras y servicios necesarios para el despliegue.";
 choices[44][1] = "El comit&eacute; de gesti&oacute;n del programa se denomina Comit&eacute; de Servicios Paneuropeos de Administraci&oacute;n Electr&oacute;nica (CSPAE). ";
 choices[44][2] = "Sus antecesores son los programas IDA II (1999-2004) e IDA I (1995-1998)";
 choices[44][3] = "Todas son verdaderas";
 answers[44] = choices[44][3];
 units[44] = "103";
 comments[44] = "Id Pregunta: 3992. ";


//  Id pregunta: 3993 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  En el protocolo SNMPv2, un mensaje PDU GetRequest:";
 choices[45]= new Array();
 choices[45][0] = "Permite respuestas parciales al solicitar el valor de varios objetos.";
 choices[45][1] = "No permite respuestas parciales al solicitar el valor de varios objetos";
 choices[45][2] = "Es emitida por el agente al gestor.";
 choices[45][3] = "Es id&eacute;ntico al mensaje PDU GetBulkRequest.";
 answers[45] = choices[45][0];
 units[45] = "104";
 comments[45] = "Id Pregunta: 3993. ";


//  Id pregunta: 4065 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  Que tendencias se observan en los servicios de telecomunicaciones";
 choices[46]= new Array();
 choices[46][0] = "La convergencia de las redes de voz y datos";
 choices[46][1] = "La convergencia de las tecnolog&iacute;as de telefonia movil y las tecnolog&iacute;as wireless como wi-fi";
 choices[46][2] = "Ninguna de las anteriores";
 choices[46][3] = "tanto la opci&oacute;n a como la b";
 answers[46] = choices[46][3];
 units[46] = "102,107,108";
 comments[46] = "Id Pregunta: 4065. ";


//  Id pregunta: 4075 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  &iquest;Qu&eacute; beneficios puede tener la distribuci&oacute;n del software en varias maquinas ?";
 choices[47]= new Array();
 choices[47][0] = "Normalmente no presenta beneficios pero en algunas ocasiones es necesario";
 choices[47][1] = "Nunca tiene beneficios";
 choices[47][2] = "Es m&aacute;s optimo que los sistemas SMP";
 choices[47][3] = "Mayor disponibilidad";
 answers[47] = choices[47][3];
 units[47] = "113";
 comments[47] = "Id Pregunta: 4075. ";


//  Id pregunta: 4154 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  Capacidad que permite la descarga de actualizaciones software o bien la reconfiguraci&oacute;n de ordenadores por la noche, cuando normalmente est&aacute;n apagados";
 choices[48]= new Array();
 choices[48][0] = "firmware";
 choices[48][1] = "teclado virtual";
 choices[48][2] = "despertar remoto (remote wakeup)";
 choices[48][3] = "Autocomprobaci&oacute;n de arranque (Power-On Self-Test)";
 answers[48] = choices[48][2];
 units[48] = "113";
 comments[48] = "Id Pregunta: 4154. ";


//  Id pregunta: 4185 AÃ±o de creación de pregunta: 2006-01-01
 questions[49]= "50)  Para transmitir Gigabit Ethernet";
 choices[49]= new Array();
 choices[49][0] = "Es necesario un cableado de categoria 6";
 choices[49][1] = "Es necesaria fibra &oacute;ptica";
 choices[49][2] = "Se puede usar cable coaxial";
 choices[49][3] = "ninguna de las anteriores";
 answers[49] = choices[49][3];
 units[49] = "99";
 comments[49] = "Id Pregunta: 4185. ";


//  Id pregunta: 4224 AÃ±o de creación de pregunta: 2006-01-01
 questions[50]= "51)  Las SDU (Service Data Unit) son unidades de datos";
 choices[50]= new Array();
 choices[50][0] = "Que se intercambian entre  entidades hom&oacute;logas";
 choices[50][1] = "Que proporcionan informaci&oacute;n de control entre niveles";
 choices[50][2] = "Correspondientes a las primitivas de comunicaci&oacute;n";
 choices[50][3] = "Que deben ser tratados por el nivel superior (N+1) de forma transparente";
 answers[50] = choices[50][3];
 units[50] = "100";
 comments[50] = "Id Pregunta: 4224. ";


//  Id pregunta: 4226 AÃ±o de creación de pregunta: 2006-01-01
 questions[51]= "52)  Identifique el rango de frecuencias que se utiliza en el canal ascendente o de retorno en una red HFC (Hybrid Fiber Coaxial):";
 choices[51]= new Array();
 choices[51][0] = "De 50 a 550 Mhz";
 choices[51][1] = "De 5 a 50 MHz";
 choices[51][2] = "De 550 a 860 MHz";
 choices[51][3] = "De 5 a 860 MHz";
 answers[51] = choices[51][1];
 units[51] = "99";
 comments[51] = "Id Pregunta: 4226. ";


//  Id pregunta: 4333 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  Un Puente o Bridge:";
 choices[52]= new Array();
 choices[52][0] = "S&oacute;lo funcionan con TCP/IP.";
 choices[52][1] = "Puede dividir una red en dos segmentos.";
 choices[52][2] = "Permiten establecer una Topolog&iacute;a en Estrella en una red en BUS al garantizar la compatibilidad en el nivel 2 de OSI.";
 choices[52][3] = "Encaminan la informaci&oacute;n hacia el destino siguiendo el trayecto m&aacute;s corto por la red.";
 answers[52] = choices[52][1];
 units[52] = "100";
 comments[52] = "Id Pregunta: 4333. ";


//  Id pregunta: 4345 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  Mayte ha tecleado desde la l&iacute;nea de comandos del shell de su sistema operativo &ldquo;nslookup www.map.es [enter]&rdquo;. Este comando le dar&aacute; como respuesta en su pantalla:";
 choices[53]= new Array();
 choices[53][0] = "La direcci&oacute;n Ethernet del ordenador de Mayte.";
 choices[53][1] = "El tiempo que tarda un paquete de datos desde la m&aacute;quina de Mayte hasta el servidor del MAP.";
 choices[53][2] = "La direcci&oacute;n IP del MAP.";
 choices[53][3] = "La lista de directorios y archivos del directorio ra&iacute;z del MAP";
 answers[53] = choices[53][2];
 units[53] = "100";
 comments[53] = "Id Pregunta: 4345. ";


//  Id pregunta: 4535 AÃ±o de creación de pregunta: 2007-01-01
 questions[54]= "55)  El protocolo UDP (User Datagram Protocol):";
 choices[54]= new Array();
 choices[54][0] = "Es un protocolo de transporte perteneciente a Ia familia de protocolos TCP/IP no orientado a conexi&oacute;n.";
 choices[54][1] = "Es un protocolo de nivel de red perteneciente a Ia familia de protocolos TCP/IP.";
 choices[54][2] = "Es un protocolo de transporte perteneciente a la familia de protocolos TCP/IP orientado a conexi&oacute;n.";
 choices[54][3] = "Es el protocolo de transporte utilizado por el protocolo de aplicaci&oacute;n FTP.";
 answers[54] = choices[54][0];
 units[54] = "100";
 comments[54] = "Id Pregunta: 4535. ";


//  Id pregunta: 4590 AÃ±o de creación de pregunta: 2007-01-01
 questions[55]= "56)  Un puente como elemento de interconexi&oacute;n de redes en que capa del modelo OSI opera:";
 choices[55]= new Array();
 choices[55][0] = "enlace de datos";
 choices[55][1] = "red";
 choices[55][2] = "transporte";
 choices[55][3] = "ninguna de las anteriores";
 answers[55] = choices[55][0];
 units[55] = "99";
 comments[55] = "Id Pregunta: 4590. NULL";


//  Id pregunta: 4689 AÃ±o de creación de pregunta: 2007-01-01
 questions[56]= "57)  La diferencia entre la fibra &oacute;ptica monomodo y multimodo radica, principalmente, en";
 choices[56]= new Array();
 choices[56][0] = "las frecuencias usadas";
 choices[56][1] = "los adaptadores usados";
 choices[56][2] = " la forma en que el haz se refleja dentro del n&uacute;cleo de la fibra";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = choices[56][2];
 units[56] = "99";
 comments[56] = "Id Pregunta: 4689. Examen 2006 JCYL";


//  Id pregunta: 4824 AÃ±o de creación de pregunta: 2007-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes direcciones IP de host pertenece a cualquiera de los rangos de direcciones IP p&uacute;blicas?";
 choices[57]= new Array();
 choices[57][0] = "10.172.13.65";
 choices[57][1] = "172.16.223.125";
 choices[57][2] = "172.64.12.29";
 choices[57][3] = "192.168.23.252";
 answers[57] = choices[57][2];
 units[57] = "100";
 comments[57] = "Id Pregunta: 4824. NULL";


//  Id pregunta: 4834 AÃ±o de creación de pregunta: 2007-01-01
 questions[58]= "59)  &iquest;Cu&aacute;ntos bits ocupa la cabecera de un mensaje ICMPv4 (Internet Control Message Protocol version 4)?";
 choices[58]= new Array();
 choices[58][0] = "32";
 choices[58][1] = "64";
 choices[58][2] = "128";
 choices[58][3] = "256";
 answers[58] = choices[58][1];
 units[58] = "100";
 comments[58] = "Id Pregunta: 4834. ";


//  Id pregunta: 4835 AÃ±o de creación de pregunta: 2007-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto al protocolo Real-Time Transport Protocol (RTP) NO es cierta?";
 choices[59]= new Array();
 choices[59][0] = "Permite monitorizar la calidad del servicio que se est&aacute; ofreciendo para servicios con caracter&iacute;sticas detiempo real";
 choices[59][1] = "Proporciona servicios de entrega punto a punto de datos con caracter&iacute;sticas de tiempo real, como audio y";
 choices[59][2] = "Est&aacute; definido en la norma RFC (Request for Comments) 3550, la cual sustituye a la RFC 1889";
 choices[59][3] = "La mayor&iacute;a de las aplicaciones, como por ejemplo VoIP, utilizan RTP sobre UDP (User Datagram Protocol)con el fin de aprovechar los servicios de multiplexi&oacute;n y verificaci&oacute;n de datos (checksum) que ofrece esteprotocolo";
 answers[59] = choices[59][0];
 units[59] = "100, 117";
 comments[59] = "Id Pregunta: 4835. ";


//  Id pregunta: 4844 AÃ±o de creación de pregunta: 2007-01-01
 questions[60]= "61)  El protocolo DHCP (Dynamic Host Configuration Protocol) es una mejora o actualizaci&oacute;n de uno de los siguientesprotocolos:";
 choices[60]= new Array();
 choices[60][0] = "ARP (Address Resolution Protocol)";
 choices[60][1] = "RARP (Reverse Address Resolution Protocol)";
 choices[60][2] = "BOOTP (Bootstrap Protocol)";
 choices[60][3] = "IGMP (Internet Group Management Protocol)";
 answers[60] = choices[60][2];
 units[60] = "100";
 comments[60] = "Id Pregunta: 4844. ";


//  Id pregunta: 5160 AÃ±o de creación de pregunta: 2003-01-01
 questions[61]= "62)  Un HUB es un dispositivo de interconexi&oacute;n utilizado para:";
 choices[61]= new Array();
 choices[61][0] = "Enlazar LANs separadas y proporcionar filtrado de paquetes entre ellas.";
 choices[61][1] = "Interconectar redes con protocolos y arquitecturas completamente diferentes, a todos los niveles de comunicaci&oacute;n.";
 choices[61][2] = "Concentrar y organizar el cableado en una red de &aacute;rea local.";
 choices[61][3] = "Controlar las comunicaciones, permit&eacute;ndolas o prohibi&eacute;ndolas seg&uacute;n las pol&iacute;ticas de red que haya definido la organizaci&oacute;n responsable de la red.";
 answers[61] = choices[61][2];
 units[61] = "102";
 comments[61] = "Id Pregunta: 5160. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5565 AÃ±o de creación de pregunta: 2003-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as permiten la transmisi&oacute;n de datos sobre una infraestructura de fibra &oacute;ptica para una red de &aacute;rea metropolitana?";
 choices[62]= new Array();
 choices[62][0] = "DQDB";
 choices[62][1] = "CDDI";
 choices[62][2] = "HIPPI";
 choices[62][3] = "PDDI";
 answers[62] = choices[62][0];
 units[62] = "101";
 comments[62] = "Id Pregunta: 5565. ";


//  Id pregunta: 5923 AÃ±o de creación de pregunta: 2009-01-01
 questions[63]= "64)  En el conjunto de protocolos TCP/IP, &iquest;cu&aacute;ntos bits se reservan para identificar los n&uacute;meros de puerto en las cabeceras de control TCP y UDP?";
 choices[63]= new Array();
 choices[63][0] = "16";
 choices[63][1] = "24";
 choices[63][2] = "32";
 choices[63][3] = "64";
 answers[63] = choices[63][0];
 units[63] = "100";
 comments[63] = "Id Pregunta: 5923. MAP 2008 A1";


//  Id pregunta: 5992 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  En el encaminamiento por vector distancia:";
 choices[64]= new Array();
 choices[64][0] = "Cada router env&iacute;a su LSP a toda la red.";
 choices[64][1] = "Se pueden emplear varias m&eacute;tricas.";
 choices[64][2] = "Se produce el problema de cuenta a infinito.";
 choices[64][3] = "El algoritmo correspondiente tambi&eacute;n es conocido como algoritmo de Dijkstra.";
 answers[64] = choices[64][2];
 units[64] = "102";
 comments[64] = "Id Pregunta: 5992. TIC A 2009";


//  Id pregunta: 6066 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Cuando un sistema en una red local env&iacute;a un datagrama IP a otro sistema en una subred distinta, utiliza el protocolo ARP para obtener:";
 choices[65]= new Array();
 choices[65][0] = "La direcci&oacute;n MAC del sistema final destino.";
 choices[65][1] = "La direcci&oacute;n IP del sistema final destino.";
 choices[65][2] = "La identificaci&oacute;n del puerto TCP o UDP del sistema final destino.";
 choices[65][3] = "La direcci&oacute;n MAC del router.";
 answers[65] = choices[65][3];
 units[65] = "100";
 comments[65] = "Id Pregunta: 6066. TIC A 2009";


//  Id pregunta: 6090 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  En IPv6, un datagrama enviado a una direcci&oacute;n de grupo de interfaces tipo &quot;anycast&quot; se encamina hacia:";
 choices[66]= new Array();
 choices[66][0] = "Todas las interfaces conectadas a la misma subred en donde se origin&oacute; el datagrama.";
 choices[66][1] = "Aquellas interfaces en otras subredes diferentes de donde se origin&oacute; el datagrama.";
 choices[66][2] = "Cualquier interfaz que se encuentre topol&oacute;gicamente en la subred m&aacute;s alejada.";
 choices[66][3] = "La interfaz m&aacute;s cercana (en t&eacute;rminos de medida de distancia del protocolo de encaminamiento).";
 answers[66] = choices[66][3];
 units[66] = "100";
 comments[66] = "Id Pregunta: 6090. TIC A 2009";


//  Id pregunta: 6579 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  El protocolo IP";
 choices[67]= new Array();
 choices[67][0] = "Define el datagrama";
 choices[67][1] = "Define el esquema de direccionamiento";
 choices[67][2] = "Mueve los datos entre la capa de red y de transporte";
 choices[67][3] = "Todas las respuestas anteriores son correctas";
 answers[67] = choices[67][3];
 units[67] = "100";
 comments[67] = "Id Pregunta: 6579. NULL";


//  Id pregunta: 8295 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  El protocolo FTP es un protocolo: ";
 choices[68]= new Array();
 choices[68][0] = "Seguro.";
 choices[68][1] = "Orientado a conexi&oacute;n.";
 choices[68][2] = "De nivel de enlace.";
 choices[68][3] = "Dise&ntilde;ado para gestionar se&ntilde;alizaci&oacute;n de red. ";
 answers[68] = choices[68][1];
 units[68] = "100";
 comments[68] = "Id Pregunta: 8295. Examen TIC A2 2010";


//  Id pregunta: 8299 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Una direcci&oacute;n IP identifica:";
 choices[69]= new Array();
 choices[69][0] = "Una conexi&oacute;n. ";
 choices[69][1] = "Una interfaz de tarjeta de red.";
 choices[69][2] = "Un ordenador.";
 choices[69][3] = "Una aplicaci&oacute;n interactiva. ";
 answers[69] = choices[69][1];
 units[69] = "100";
 comments[69] = "Id Pregunta: 8299. Examen TIC A2 2010";


//  Id pregunta: 8300 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  El protocolo MPLS (Multiprotocol Label Switching), &iquest;entre qu&eacute; capas del modelo OSI opera? ";
 choices[70]= new Array();
 choices[70][0] = "Entre la capa f&iacute;sica y la de enlace de datos.";
 choices[70][1] = "Entre la capa de enlace de datos y la capa de red. ";
 choices[70][2] = "Entre la capa de red y la capa de transporte. ";
 choices[70][3] = "Entre la capa de transporte y las capas superiores.";
 answers[70] = choices[70][1];
 units[70] = "100";
 comments[70] = "Id Pregunta: 8300. Examen TIC A2 2010";


//  Id pregunta: 8480 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Qu&eacute; es una DMZ o zona desmilitarizada?";
 choices[71]= new Array();
 choices[71][0] = "Es una subred perimetral aislada por cortafuegos aunque visible desde Internet.";
 choices[71][1] = "a) Es una subred libre de ataques externos, donde residen -entre otros- servidores con bases de datos criticas.";
 choices[71][2] = "Es una subred desde la que se permiten conexiones a la red interna, por estar la primera desmilitarizada.";
 choices[71][3] = "Es un tipo de honeypot.";
 answers[71] = choices[71][0];
 units[71] = "113";
 comments[71] = "Id Pregunta: 8480. Examen TIC A2 2010 interna";


//  Id pregunta: 8481 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l es el well-known port del protocolo SNMP en el modo petici&oacute;n-respuesta?";
 choices[72]= new Array();
 choices[72][0] = "169.";
 choices[72][1] = "161.";
 choices[72][2] = "171.";
 choices[72][3] = "179.";
 answers[72] = choices[72][1];
 units[72] = "104";
 comments[72] = "Id Pregunta: 8481. Examen TIC A2 2010 interna";


//  Id pregunta: 8482 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta, considerando diferencias entre IPv4 e IPv6?";
 choices[73]= new Array();
 choices[73][0] = "Ipv6 duplica el tama&ntilde;o de la direcci&oacute;n desde los 32 bits a los 64 bits.";
 choices[73][1] = "Algunos campos de la cabecera de Ipv4 han sido eliminados o convertidos en opcionales para reducir el coste de proceso normal de los paquetes y limitar el coste en ancho de banda de la cabecera Ipv6.";
 choices[73][2] = "IPV6 complica la cabecera, al a&ntilde;adir campos a los que ya tenia la cabecea Ipv4, para permitir mayor capacidad de configuraci&oacute;n, lo que supone, por contra, un mayor coste de proceso, que se compensar&aacute; por la mayor potencia del hardware.";
 choices[73][3] = "IPv6 triplica el tama&ntilde;o de la direcci&oacute;n desde los 32 bits a los 96 bits.";
 answers[73] = choices[73][1];
 units[73] = "100";
 comments[73] = "Id Pregunta: 8482. Examen TIC A2 2010 interna";


//  Id pregunta: 8659 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Los tipos de direcciones en IPv6 son los siguientes:";
 choices[74]= new Array();
 choices[74][0] = "Unicast, Multicast y Anycast";
 choices[74][1] = "Unicast y Multicast";
 choices[74][2] = "Somecast y Groupcast";
 choices[74][3] = "Somecast, Multicast y Worldcast";
 answers[74] = choices[74][0];
 units[74] = "100";
 comments[74] = "Id Pregunta: 8659. Examen UPM A2 2011";


//  Id pregunta: 8774 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  a) &iquest;Cu&aacute;l de las siguientes cabeceras de extensi&oacute;n no est&aacute; especificada en la RFC 2460 que desarrolla las especificaciones de el protocolo IPv6?";
 choices[75]= new Array();
 choices[75][0] = "Hop-By-Hop Options";
 choices[75][1] = "Routing (Type 0)";
 choices[75][2] = "Fragment";
 choices[75][3] = "Authentication Header";
 answers[75] = choices[75][3];
 units[75] = "100";
 comments[75] = "Id Pregunta: 8774. Examen UPM A2 2011";


//  Id pregunta: 8996 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Las estaciones conectadas a una red de &aacute;rea local por medio de tarjetas de red de tipo Ethernet";
 choices[76]= new Array();
 choices[76][0] = "Acceden al medio de transmisi&oacute;n de forma aleatoria, por lo que pueden producirse colisiones.";
 choices[76][1] = "Acceden al medio de transmisi&oacute;n en per&iacute;odos de tiempo predeterminados, por lo que nunca se producen colisiones.";
 choices[76][2] = "Acceden al medio de transmisi&oacute;n en diferentes frecuencias de trabajo, por lo que pueden acceder varias simult&aacute;neamente sin que se produzcan colisiones.";
 choices[76][3] = "Nunca acceden si tras un primer intento se detect&oacute; una colisi&oacute;n.";
 answers[76] = choices[76][0];
 units[76] = "101";
 comments[76] = "Id Pregunta: 8996. Examen UPM A2 2011";


//  Id pregunta: 9349 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Sobre los canales no estructurados en Europa:";
 choices[77]= new Array();
 choices[77][0] = "El H11 trabaja a 384 kbps agrupando 6 canales de 64 kbps";
 choices[77][1] = "El H0 trabaja a 1536 kbps, agrupando 24 canales de 64 kbps";
 choices[77][2] = "El H11 trabaja a 1920 Kbps, agrupando 30 canales de 64 kbps";
 choices[77][3] = "El H0 trabaja 384 kbps, agrupando 6 canales de 64 kbps";
 answers[77] = choices[77][3];
 units[77] = "103";
 comments[77] = "Id Pregunta: 9349. Pag. 6 astic 2011";


//  Id pregunta: 9366 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Resilient Packet Ring";
 choices[78]= new Array();
 choices[78][0] = "Es una tecnolog&iacute;a de nivel 3.";
 choices[78][1] = "Es una tecnolog&iacute;a obsoleta.";
 choices[78][2] = "Es incompatible con Ethernet.";
 choices[78][3] = "Es una tecnolog&iacute;a de nivel 2.";
 answers[78] = choices[78][3];
 units[78] = "101";
 comments[78] = "Id Pregunta: 9366. ";


//  Id pregunta: 9782 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Se&ntilde;ale cu&aacute;l de las siguientes opciones est&aacute; basada en el protocolo ICMP:";
 choices[79]= new Array();
 choices[79][0] = "SMTP";
 choices[79][1] = "SNMP";
 choices[79][2] = "PING";
 choices[79][3] = "DNS ";
 answers[79] = choices[79][2];
 units[79] = "100";
 comments[79] = "Id Pregunta: 9782. Examen TIC A2 2013";


//  Id pregunta: 10034 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  El puerto 69 es utilizado por:";
 choices[80]= new Array();
 choices[80][0] = "TFTP (Trivial File Transfer Protocol).";
 choices[80][1] = "Finger.";
 choices[80][2] = "IMAP (Internet Message Access Protocol).";
 choices[80][3] = "SFTP (Secure File Transfer Protocol).";
 answers[80] = choices[80][0];
 units[80] = "100";
 comments[80] = "Id Pregunta: 10034. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10036 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Qu&eacute; protocolo utiliza la orden &quot;traceroute&quot; para obtener la ruta que se sigue desde nuestro equipo hasta otro en Internet?";
 choices[81]= new Array();
 choices[81][0] = "Ping ";
 choices[81][1] = "ICMP";
 choices[81][2] = "PPP";
 choices[81][3] = "RSVP";
 answers[81] = choices[81][1];
 units[81] = "100";
 comments[81] = "Id Pregunta: 10036. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10038 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Un equipo con la direcci&oacute;n IP 128.0.235.56/27 &iquest;Qu&eacute; m&aacute;scara de red, direcci&oacute;n de red y direcci&oacute;n de broadcast tiene?";
 choices[82]= new Array();
 choices[82][0] = "M&aacute;scara 255.255.255.224, red 128.0.235.32, broadcast 128.0.235.63";
 choices[82][1] = "M&aacute;scara 255.255.255.0, red 128.0.235.0, broadcast 128.0.235.255";
 choices[82][2] = "M&aacute;scara 255.255.255.192, red 128.0.235.0, broadcast 128.0.235.63";
 choices[82][3] = "M&aacute;scara 255.255.255.128, red 128.0.235.0, broadcast 128.0.235.127";
 answers[82] = choices[82][0];
 units[82] = "100";
 comments[82] = "Id Pregunta: 10038. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10060 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En una empresa con 2.000 puestos de usuario en su red local de comunicaciones existen 3 subredes con estos direccionamientos: red A: 10.X.X.X, red B: 192.168.1.X y red C: 195.57.72.X.Teniendo en cuenta que en la ubicaci&oacute;n de los equipos de usuarios y servidores se busca mantener la red operativa y a la vez con la m&aacute;xima seguridad posible, &iquest;d&oacute;nde se ubicar&iacute;an los servidores de Base de Datos de los que se alimentan tanto los servidores web p&uacute;blicos como los de la intranet?";
 choices[83]= new Array();
 choices[83][0] = "Red A.";
 choices[83][1] = "Red B.";
 choices[83][2] = "Red C.";
 choices[83][3] = "Habr&iacute;a dos servidores de bases de datos, el p&uacute;blico en la red C y el privado en la red B.";
 answers[83] = choices[83][1];
 units[83] = "100";
 comments[83] = "Id Pregunta: 10060. TIC A2, libre, Examen 2013";


//  Id pregunta: 10117 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Cu&aacute;l de los siguientes equipos trabaja a nivel 1 de red:";
 choices[84]= new Array();
 choices[84][0] = "Router";
 choices[84][1] = "Switch";
 choices[84][2] = "Bridge";
 choices[84][3] = "Hub";
 answers[84] = choices[84][3];
 units[84] = "102";
 comments[84] = "Id Pregunta: 10117. ";


//  Id pregunta: 10130 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  SNMPv3 est&aacute; definido en:";
 choices[85]= new Array();
 choices[85][0] = "RFC 3500";
 choices[85][1] = "RFC 3100";
 choices[85][2] = "RFC 3120-3125";
 choices[85][3] = "RFC 3410-3418";
 answers[85] = choices[85][3];
 units[85] = "104";
 comments[85] = "Id Pregunta: 10130. ";


//  Id pregunta: 10440 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  En el direccionamiento IPv4, clase C ";
 choices[86]= new Array();
 choices[86][0] = "los tres primeros bits est&aacute;n fijados a 110, y se pueden tener 2^21 redes con 254 nodos posibles. ";
 choices[86][1] = "los tres primeros bits est&aacute;n fijados a 101, y se pueden tener 2^21 redes  con 254 nodos posibles. ";
 choices[86][2] = "los tres primeros bits est&aacute;n fijados a 110, y se pueden tener 2^22 redes  con 126 nodos posibles. ";
 choices[86][3] = "los tres primeros bits est&aacute;n fijados a 101, y se pueden tener 2^22 redes  con 128 nodos posibles. ";
 answers[86] = choices[86][0];
 units[86] = "100";
 comments[86] = "Id Pregunta: 10440. Examen TIC A1 2013";


//  Id pregunta: 10662 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  El teorema de Nyquist establece que:";
 choices[87]= new Array();
 choices[87][0] = "El n&uacute;mero m&aacute;ximo de baudios que puede transmitirse por un canal no puede ser superior al doble de su ancho de banda.";
 choices[87][1] = "La relaci&oacute;n se&ntilde;al a ruido presente en el medio de transmisi&oacute;n no puede ser superior al doble de su ancho de banda.";
 choices[87][2] = "La eficiencia espectral es la relaci&oacute;n entre la velocidad de transmisi&oacute;n y el n&uacute;mero m&aacute;ximo de baudios que pueden transmitirse.";
 choices[87][3] = "Ninguna de las anteriores.";
 answers[87] = choices[87][0];
 units[87] = "99";
 comments[87] = "Id Pregunta: 10662. ";


//  Id pregunta: 10795 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l es la direcci&oacute;n de red de una direcci&oacute;n IP: 192.168.30.200 cuya m&aacute;scara es 255.255.255.128?";
 choices[88]= new Array();
 choices[88][0] = "192.168.30.0";
 choices[88][1] = "192.168.30.128";
 choices[88][2] = "192.168.30.255";
 choices[88][3] = "192.168.30.200";
 answers[88] = choices[88][1];
 units[88] = "100";
 comments[88] = "Id Pregunta: 10795. Examen GSI 2014";


//  Id pregunta: 10880 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  La direcci&oacute;n can&oacute;nica de un puente o bridge es la direcci&oacute;n:";
 choices[89]= new Array();
 choices[89][0] = "MAC del interface principal del puente.";
 choices[89][1] = "IP del interface principal del puente.";
 choices[89][2] = "MAC del puente.";
 choices[89][3] = "Del interface de rango num&eacute;rico m&aacute;s alto del puente.";
 answers[89] = choices[89][2];
 units[89] = "102";
 comments[89] = "Id Pregunta: 10880. Examen GSI 2014";


//  Id pregunta: 10885 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  El protocolo DHCP (Dynamic Host Configuration Protocol) y DHCPv6 (DHCP for IPv6) est&aacute;n definidos en los documentos:";
 choices[90]= new Array();
 choices[90][0] = "RFC 792 y RFC 4361, respectivamente.";
 choices[90][1] = "RFC 826 y RFC 3315, respectivamente.";
 choices[90][2] = "RFC 1034 y RFC 4361, respectivamente.";
 choices[90][3] = "RFC 2131 y RFC 3315, respectivamente.";
 answers[90] = choices[90][3];
 units[90] = "100";
 comments[90] = "Id Pregunta: 10885. Examen GSI 2014";


//  Id pregunta: 10889 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Se&ntilde;ale cu&aacute;l de las siguientes direcciones IP puede ser asignada a un host en la siguiente subred 132.26.41.90/26:";
 choices[91]= new Array();
 choices[91][0] = "132.26.41.128";
 choices[91][1] = "132.26.41.127";
 choices[91][2] = "132.26.41.124";
 choices[91][3] = "132.26.41.55";
 answers[91] = choices[91][2];
 units[91] = "100";
 comments[91] = "Id Pregunta: 10889. Examen GSI 2014";


//  Id pregunta: 10892 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l es el tipo de la direcci&oacute;n IPv6 ::1/128?";
 choices[92]= new Array();
 choices[92][0] = "Loopback.";
 choices[92][1] = "Indefinida (Unspecified).";
 choices[92][2] = "Multicast.";
 choices[92][3] = "No es v&aacute;lida.";
 answers[92] = choices[92][0];
 units[92] = "100";
 comments[92] = "Id Pregunta: 10892. Examen GSI 2014";


//  Id pregunta: 11005 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Respecto a la intranet de un ministerio se&ntilde;ale la respuesta correcta:";
 choices[93]= new Array();
 choices[93][0] = "No puede estar conectada a la Red Sara, para evitar fugas de informaci&oacute;n.";
 choices[93][1] = "Se incluye dentro de la zona desmilitarizada p&uacute;blica (DMZ), para garantizar el acceso por teletrabajo.";
 choices[93][2] = "No podr&aacute; usar un nombre interno como ministerio.age en su certificado SSL a partir de 2016.";
 choices[93][3] = "Debe usar el direccionamiento privado 10.0.0.0/24, 192.168.0.0/16 y 172.16.0.0/16.";
 answers[93] = choices[93][2];
 units[93] = "113";
 comments[93] = "Id Pregunta: 11005. TIC A1 AGE 2014";


//  Id pregunta: 11301 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  De las siguientes opciones se&ntilde;ale la que no corresponde a una caracter&iacute;stica de las redes de banda ancha";
 choices[94]= new Array();
 choices[94][0] = "Se cambia la informaci&oacute;n de impulsos digitales por ondas moduladas.";
 choices[94][1] = "Conexion permanente, permitiendo a su vez la utilizacion de otra banda diferente del medio para otros fines";
 choices[94][2] = "Las se&ntilde;ales digitales pueden ser transmitidas directamente sin actuar sobre ellas";
 choices[94][3] = "Se utilizan dos o m&aacute;s canales de datos simult&aacute;neos en una &uacute;nica conexi&oacute;n";
 answers[94] = choices[94][2];
 units[94] = "99";
 comments[94] = "Id Pregunta: 11301. Es una caracter&iacute;stica de la banda base";


//  Id pregunta: 11566 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Las direcciones IPv6 que permiten la configuraci&oacute;n autom&aacute;tica cuando no hay routers presentes son:";
 choices[95]= new Array();
 choices[95][0] = "Global Multicast";
 choices[95][1] = "Link Unique Address";
 choices[95][2] = "Link Local";
 choices[95][3] = "Este procedimiento no est&aacute; permitido por el protocolo IPv6";
 answers[95] = choices[95][2];
 units[95] = "100";
 comments[95] = "Id Pregunta: 11566. NULL";


//  Id pregunta: 11575 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En el protocolo IPv6:";
 choices[96]= new Array();
 choices[96][0] = "No se pueden fragmentar paquetes.";
 choices[96][1] = "Las cabeceras AH y ESP se procesan en cada router.";
 choices[96][2] = "Incorpora mecanismos para crear circuitos virtuales.";
 choices[96][3] = "Se ofrecen servicios espec&iacute;ficos para TCPv6";
 answers[96] = choices[96][2];
 units[96] = "100";
 comments[96] = "Id Pregunta: 11575. NULL";


//  Id pregunta: 11697 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l no es una caracteristica de PPP?";
 choices[97]= new Array();
 choices[97][0] = "Se puede usar en circuitos anal&oacute;gicos";
 choices[97][1] = "solo soporta IP";
 choices[97][2] = "es capaz de encapsular varios protocolos";
 choices[97][3] = "Proporciona correcci&oacute;n de errores";
 answers[97] = choices[97][1];
 units[97] = "102";
 comments[97] = "Id Pregunta: 11697. NULL";


//  Id pregunta: 11701 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;cu&aacute;l no es un componente de SNMP?";
 choices[98]= new Array();
 choices[98][0] = "MIB";
 choices[98][1] = "SNMP manager";
 choices[98][2] = "SNMP agent";
 choices[98][3] = "Servidor Syslog";
 answers[98] = choices[98][3];
 units[98] = "104";
 comments[98] = "Id Pregunta: 11701. NULL";


//  Id pregunta: 11705 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Qu&eacute; direcci&oacute;n multicast utiliza RIPng";
 choices[99]= new Array();
 choices[99][0] = "FF02::9";
 choices[99][1] = "FF02::1";
 choices[99][2] = "FF02:A";
 choices[99][3] = "FF02::6";
 answers[99] = choices[99][0];
 units[99] = "102";
 comments[99] = "Id Pregunta: 11705. NULL";


