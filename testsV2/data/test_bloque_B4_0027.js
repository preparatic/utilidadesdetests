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

//  Id pregunta: 2889 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  En su esquema de numeraci&oacute;n para redes IP, la Administraci&oacute;n ha utilizado:";
 choices[0]= new Array();
 choices[0][0] = "A cada Ministerio se le asigna una red de tipo B con numeraciones consecutivas a partir de 110 ... 129";
 choices[0][1] = "A cada Ministerio se le asigna un rango de direcciones IP , que van desde la 10.1.0.0 para el MAP increment&aacute;ndose el segundo componente para cada Departamento Ministerial importante";
 choices[0][2] = "Ha asignado direcciones IP de cara a la pr&oacute;xima introducci&oacute;n de IPv6 en que la extensi&oacute;n de direcciones aumenta y permitir&aacute; a cada ordenador de la administraci&oacute;n tener una &uacute;nica direcci&oacute;n IP";
 choices[0][3] = "La Administraci&oacute;n no se ha pronunciado al respecto,  lo que ha hecho ha sido estructurar las direcciones de correo electr&oacute;nico, dejando libres a los responsables de cada Deparamento la elecci&oacute;n de sus direcciones";
 answers[0] = choices[0][1];
 units[0] = "100";
 comments[0] = "Id Pregunta: 2889. NULL";


//  Id pregunta: 2932 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Respecto al est&aacute;ndar de criterios comunes Common Criteria ISO 15408-1 puede decirse que:";
 choices[1]= new Array();
 choices[1][0] = "El nivel de evaluaci&oacute;n EAL3 equivale en ITSEC al nivel de evaluaci&oacute;n E4";
 choices[1][1] = "El nivel de evaluaci&oacute;n EAL3 implica que se ha dise&ntilde;ado, probado y revisado met&oacute;dicamente";
 choices[1][2] = "El nivel de evaluaci&oacute;n EAL4 implica dise&ntilde;o y pruebas semi-formales";
 choices[1][3] = "Es un intento internacional por unificar los criterios utilizados en Estados Unidos y Europa, TCSEC e ITSEC";
 answers[1] = choices[1][3];
 units[1] = "111";
 comments[1] = "Id Pregunta: 2932. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2993 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Las cabeceras de extensi&oacute;n";
 choices[2]= new Array();
 choices[2][0] = "Pertenecen al protocolo ipv4";
 choices[2][1] = "Son todas obligatorias";
 choices[2][2] = "Perminten definir la ruta que siga un paquete IPv6";
 choices[2][3] = "Definen las opciones en una red Token Ring";
 answers[2] = choices[2][2];
 units[2] = "100";
 comments[2] = "Id Pregunta: 2993. NULL";


//  Id pregunta: 3048 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qu&eacute; es el spyware?:";
 choices[3]= new Array();
 choices[3][0] = "SW de alto secreto usado por los servicios de inteligencia de cada pa&iacute;s";
 choices[3][1] = "SW que diversas compa&ntilde;&iacute;as introducen en tu ordenador cuando te descargas algo de internet, para ver tus programas y tus usos y sacar estudios de mercado";
 choices[3][2] = "Es otro nombre de las conocidas cookies";
 choices[3][3] = "La denominaci&oacute;n es err&oacute;nea, no se refiere a nada";
 answers[3] = choices[3][1];
 units[3] = "111";
 comments[3] = "Id Pregunta: 3048. NULL";


//  Id pregunta: 3081 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Las siglas ADMD y PRMD se usan dentro la norma X.400 refiri&eacute;ndose a:";
 choices[4]= new Array();
 choices[4][0] = "Estas siglas no se usan en dicha norma";
 choices[4][1] = "Dominios p&uacute;blicos o privados";
 choices[4][2] = "Administraci&oacute;n y privacidad de los datos";
 choices[4][3] = "Ninguna de las respuestas anteriores";
 answers[4] = choices[4][1];
 units[4] = "106";
 comments[4] = "Id Pregunta: 3081. ";


//  Id pregunta: 3091 AÃ±o de creación de pregunta: 2005-01-01
 questions[5]= "6)  Seg&uacute;n la terminolog&iacute;a usual, la intrusi&oacute;n de un hacker en un servidor web afecta a:";
 choices[5]= new Array();
 choices[5][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[5][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[5][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[5][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[5] = choices[5][0];
 units[5] = "111";
 comments[5] = "Id Pregunta: 3091. NULL";


//  Id pregunta: 3169 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes es un m&eacute;todo de modulaci&oacute;n &oacute;ptica?:";
 choices[6]= new Array();
 choices[6][0] = "Modulaci&oacute;n directa";
 choices[6][1] = "Modulaci&oacute;n indirecta";
 choices[6][2] = "Modulaci&oacute;n de fase";
 choices[6][3] = "Modulaci&oacute;n interna";
 answers[6] = choices[6][0];
 units[6] = "97";
 comments[6] = "Id Pregunta: 3169. NULL";


//  Id pregunta: 3210 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El control de errores en la serie V de la ITU-T se trata en:";
 choices[7]= new Array();
 choices[7][0] = "V.1-V.8";
 choices[7][1] = "V.50-V.59";
 choices[7][2] = "V.100-V.140";
 choices[7][3] = "V.40-V.44";
 answers[7] = choices[7][3];
 units[7] = "42";
 comments[7] = "Id Pregunta: 3210. ";


//  Id pregunta: 3248 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l es la velocidad del canal D en un acceso primario RDSI en Europa?:";
 choices[8]= new Array();
 choices[8][0] = "16 kbps";
 choices[8][1] = "32 kbps";
 choices[8][2] = "64 kbps";
 choices[8][3] = "128 kbps";
 answers[8] = choices[8][2];
 units[8] = "103";
 comments[8] = "Id Pregunta: 3248. ";


//  Id pregunta: 3299 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Qu&eacute; nivel del modelo OSI subdividen los subniveles LLC y MAC especificados por el IEEE?:";
 choices[9]= new Array();
 choices[9][0] = "El nivel f&iacute;sico";
 choices[9][1] = "El nivel de enlace";
 choices[9][2] = "El nivel de red";
 choices[9][3] = "El nivel de transporte";
 answers[9] = choices[9][1];
 units[9] = "100";
 comments[9] = "Id Pregunta: 3299. NULL";


//  Id pregunta: 3302 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; &oacute;rbita es la m&aacute;s ventajosa para una operadora de telecomunicaciones en t&eacute;rminos de coste a la hora de poner un nuevo sat&eacute;lite?:";
 choices[10]= new Array();
 choices[10][0] = "La el&iacute;ptica";
 choices[10][1] = "La circular";
 choices[10][2] = "La ovoide";
 choices[10][3] = "La geoestacionaria";
 answers[10] = choices[10][3];
 units[10] = "108";
 comments[10] = "Id Pregunta: 3302. ";


//  Id pregunta: 3308 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Qu&eacute; relaci&oacute;n hay entre Jerarqu&iacute;a Digital S&iacute;ncrona y ATM?:";
 choices[11]= new Array();
 choices[11][0] = "Son dos est&aacute;ndares correspondientes al mismo nivel ISO-OSI, por lo que la decisi&oacute;n entre uno y otro es alternativa";
 choices[11][1] = "Las celdas ATM suelen viajar 'embebidas' en tramas JDS";
 choices[11][2] = "Las tramas JDS suelen viajar embebidas en tramas ATM";
 choices[11][3] = "ATM y JDS son dos nombres distintos para el mismo est&aacute;ndar";
 answers[11] = choices[11][1];
 units[11] = "109";
 comments[11] = "Id Pregunta: 3308. ";


//  Id pregunta: 3318 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Qu&eacute; velocidad de transmisi&oacute;n establece la norma 802.11g de comunicaciones inal&aacute;mbricas?:";
 choices[12]= new Array();
 choices[12][0] = "100 Mbps";
 choices[12][1] = "54 Mbps";
 choices[12][2] = "22 Mbps";
 choices[12][3] = "36 Mbps";
 answers[12] = choices[12][1];
 units[12] = "107";
 comments[12] = "Id Pregunta: 3318. NULL";


//  Id pregunta: 3390 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El nivel de enlace del modelo de referencia OSI:";
 choices[13]= new Array();
 choices[13][0] = "Determina cu&aacute;ntos y por donde son enviados los paquetes desde la fuente al destino";
 choices[13][1] = "Resuelve los problemas planteados por la falta de fiabilidad de los circuitos";
 choices[13][2] = "Se mantiene a la escucha por si el emisor env&iacute;a alg&uacute;n mensaje. Posteriormente determina cu&aacute;l es el destinatario del mismo";
 choices[13][3] = "Se asegura de que todos los caminos posibles entre el emisor y el receptor est&aacute;n operativos";
 answers[13] = choices[13][1];
 units[13] = "100";
 comments[13] = "Id Pregunta: 3390. NULL";


//  Id pregunta: 3393 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  El nivel de transporte de modelo OSI gestiona funciones como:";
 choices[14]= new Array();
 choices[14][0] = "Direccionamiento f&iacute;sico, secuenciamiento de tramas, control de flujo y notificaci&oacute;n de errores";
 choices[14][1] = "Compresi&oacute;n y encriptaci&oacute;n de datos";
 choices[14][2] = "Control de flujo, multiplexaci&oacute;n y gesti&oacute;n de errores";
 choices[14][3] = "Identificaci&oacute;n de los corresponsales y sincronizaci&oacute;n de la comunicaci&oacute;n";
 answers[14] = choices[14][2];
 units[14] = "100";
 comments[14] = "Id Pregunta: 3393. NULL";


//  Id pregunta: 3403 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Entre los equipos de interconexi&oacute;n de redes:";
 choices[15]= new Array();
 choices[15][0] = "Los bridges operan a nivel de red";
 choices[15][1] = "Los repetidores operan a nivel de MAC";
 choices[15][2] = "Los bridges realizan funciones de autoaprendizaje, filtrado y reenvio";
 choices[15][3] = "Las pasarelas o gateways son elementos de interconexi&oacute;n independientes del protocolo de nivel de red";
 answers[15] = choices[15][2];
 units[15] = "102";
 comments[15] = "Id Pregunta: 3403. ";


//  Id pregunta: 3435 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Indique la afirmaci&oacute;n incorrecta referente a la RDSI:";
 choices[16]= new Array();
 choices[16][0] = "Se puede realizar el acceso a trav&eacute;s de las l&iacute;neas existentes a dos hilos";
 choices[16][1] = "La se&ntilde;alizaci&oacute;n por canal com&uacute;n (CCS7) se realiza entre centrales";
 choices[16][2] = "El sistema de se&ntilde;alizaci&oacute;n para abonados digitales RDSI (DSS1) ha sido definido para su empleo entre centrales y equipos terminales";
 choices[16][3] = "El transporte de se&ntilde;alizaci&oacute;n (Canal D) no permite el empaquetamiento de datos";
 answers[16] = choices[16][3];
 units[16] = "103";
 comments[16] = "Id Pregunta: 3435. ";


//  Id pregunta: 3465 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El puerto 53 es usado com&uacute;nmente en internet para el protocolo:";
 choices[17]= new Array();
 choices[17][0] = "DNS";
 choices[17][1] = "HTTP";
 choices[17][2] = "FTP ";
 choices[17][3] = "Telnet";
 answers[17] = choices[17][0];
 units[17] = "112";
 comments[17] = "Id Pregunta: 3465. ";


//  Id pregunta: 3493 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En el concepto de ventana deslizante:";
 choices[18]= new Array();
 choices[18][0] = "El tama&ntilde;o de la ventana es el n&uacute;mero de paquetes a enviar sin esperar su reconocimiento";
 choices[18][1] = "La ventana avanza de posici&oacute;n seg&uacute;n el asentimiento de paquetes anteriormente enviados";
 choices[18][2] = "Los asentimientos pueden recibirse de forma desordenada";
 choices[18][3] = "Todo lo anterior es correcto";
 answers[18] = choices[18][3];
 units[18] = "100";
 comments[18] = "Id Pregunta: 3493. NULL";


//  Id pregunta: 3502 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En el modelo de referencia OSI, una interfaz:";
 choices[19]= new Array();
 choices[19][0] = "Define las primitivas y los servicios que una capa ofrece a todas las que est&aacute;n sobre ella";
 choices[19][1] = "Define los servicios y las primitivas que una capa ofrece a la inmediatamente superior";
 choices[19][2] = "Define la funcionalidad final que el sistema ofrece al usuario";
 choices[19][3] = "Define las reglas y convenios para que dos procesos en diferentes m&aacute;quinas comuniquen entre s&iacute;";
 answers[19] = choices[19][1];
 units[19] = "100";
 comments[19] = "Id Pregunta: 3502. NULL";


//  Id pregunta: 3508 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En el nivel de enlace, usado en redes locales, el subnivel que garantiza la independencia de las caracter&iacute;sticas f&iacute;sicas del medio de transmisi&oacute;n (par trenzado, cable coaxial, fibra &oacute;ptica...) es:";
 choices[20]= new Array();
 choices[20][0] = "El MAC (Medium Access Control)";
 choices[20][1] = "El LLC (Logical Link Control)";
 choices[20][2] = "Un puente";
 choices[20][3] = "Un repetidor";
 answers[20] = choices[20][0];
 units[20] = "100";
 comments[20] = "Id Pregunta: 3508. NULL";


//  Id pregunta: 3525 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En Internet, los distintos tipos de servicios utilizan protocolos espec&iacute;ficos. De las siguientes parejas servicios-protocolos, una es incorrecta. Se&ntilde;&aacute;lela:";
 choices[21]= new Array();
 choices[21][0] = "P&aacute;ginas Web-HTTP";
 choices[21][1] = "Correo electr&oacute;nico-SNMP";
 choices[21][2] = "Grupos de noticias-NNTP";
 choices[21][3] = "Transferencia de ficheros-FTP";
 answers[21] = choices[21][1];
 units[21] = "112";
 comments[21] = "Id Pregunta: 3525. ";


//  Id pregunta: 3526 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En IPv4, las direcciones que van desde 192.0.0.0 hasta 223.255.255.255 son del tipo:";
 choices[22]= new Array();
 choices[22][0] = "A";
 choices[22][1] = "B";
 choices[22][2] = "C";
 choices[22][3] = "D";
 answers[22] = choices[22][2];
 units[22] = "100";
 comments[22] = "Id Pregunta: 3526. NULL";


//  Id pregunta: 3561 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  En UMTS un terminal puede comunicarse simult&aacute;neamente a trav&eacute;s de dos celdas diferentes. Esto:";
 choices[23]= new Array();
 choices[23][0] = "Es cierto tambi&eacute;n en GSM";
 choices[23][1] = "Es cierto tambi&eacute;n en GPRS";
 choices[23][2] = "Es cierto s&oacute;lo en UMTS";
 choices[23][3] = "Ninguna de las anteriores";
 answers[23] = choices[23][2];
 units[23] = "108";
 comments[23] = "Id Pregunta: 3561. Handover soft/softer";


//  Id pregunta: 3562 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En un domicilio particular abonado a un &quot;acceso b&aacute;sico&quot; de RDSI:";
 choices[24]= new Array();
 choices[24][0] = "Siempre puede estar conectado a Internet y a su vez recibir una llamada telef&oacute;nica";
 choices[24][1] = "No puede estar conectado a Internet ya su vez recibir una llamada telef&oacute;nica";
 choices[24][2] = "Puede estar conectado a Internet y a su vez recibir una llamada telef&oacute;nica, solo en el caso de que disponga de un &quot;m&oacute;dem&quot; ADSL";
 choices[24][3] = "Ninguna de las anteriores es correcta";
 answers[24] = choices[24][0];
 units[24] = "103";
 comments[24] = "Id Pregunta: 3562. ";


//  Id pregunta: 3581 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Entre las limitaciones inherentes a las redes locales, que hacen necesaria la segmentaci&oacute;n y la interconexi&oacute;n, no se encuentra:";
 choices[25]= new Array();
 choices[25][0] = "limitaciones en el n&uacute;mero de hosts";
 choices[25][1] = "limitaciones de tecnolog&iacute;as disponibles y fabricantes";
 choices[25][2] = "limitaciones en el n&uacute;mero y tipo de nodos, as&iacute; como en su acceso";
 choices[25][3] = "limitaciones de la distancia a cubrir";
 answers[25] = choices[25][1];
 units[25] = "102";
 comments[25] = "Id Pregunta: 3581. ";


//  Id pregunta: 3615 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  La liberalizaci&oacute;n del sector de telecomunicaciones vino marcada por una serie de directivas comunitarias tendentes hacia un mercado en plena competencia. Marcar la directiva relativa a la competencia en los mercados de servicios de telecomunicaciones:";
 choices[26]= new Array();
 choices[26][0] = "Directiva  CE 2002/58";
 choices[26][1] = "Directiva  CE 2002/22";
 choices[26][2] = "Directiva  CE 2002/77";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = choices[26][2];
 units[26] = "110";
 comments[26] = "Id Pregunta: 3615. ";


//  Id pregunta: 3631 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  La prestaci&oacute;n de consentimiento expreso por parte del cliente o afectado  exige:";
 choices[27]= new Array();
 choices[27][0] = "Es valido el silencio por parte del destinatario";
 choices[27][1] = "La manifestaci&oacute;n de una voluntad libre, informada, espec&iacute;fica e inequ&iacute;voca (que no deje lugar a duda)";
 choices[27][2] = "Es v&aacute;lido el consentimiento oral";
 choices[27][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[27] = choices[27][1];
 units[27] = "110";
 comments[27] = "Id Pregunta: 3631. ";


//  Id pregunta: 3642 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  La sintaxis de transferencia en ASN.1:";
 choices[28]= new Array();
 choices[28][0] = "Est&aacute; definida dentro del nivel 5 del modelo OSI de ISO";
 choices[28][1] = "Es una sintaxis totalmente conceptual";
 choices[28][2] = "Fue reemplazada por las sintaxis abstractas";
 choices[28][3] = "Ninguna de las anteriores es verdadera";
 answers[28] = choices[28][3];
 units[28] = "100";
 comments[28] = "Id Pregunta: 3642. *: ASN1";


//  Id pregunta: 3652 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  La topolog&iacute;a m&aacute;s com&uacute;n de dise&ntilde;o de redes SDH es:";
 choices[29]= new Array();
 choices[29][0] = "malla completa o parcial";
 choices[29][1] = "anillo";
 choices[29][2] = "estrella";
 choices[29][3] = "&aacute;rbol";
 answers[29] = choices[29][1];
 units[29] = "101";
 comments[29] = "Id Pregunta: 3652. ";


//  Id pregunta: 3708 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Las unidades de informaci&oacute;n entre redes contienen una o m&aacute;s cabeceras que se usan para:";
 choices[30]= new Array();
 choices[30][0] = "Transportar datos a la aplicaci&oacute;n software receptora";
 choices[30][1] = "Evitar que los datos transmitidos por una estaci&oacute;n interfieran con los de otra";
 choices[30][2] = "Asegurar un acceso ordenado al medio f&iacute;sico";
 choices[30][3] = "Pasar informaci&oacute;n de control a los niveles OSI (o equivalentes) en el sistema de destino";
 answers[30] = choices[30][3];
 units[30] = "100";
 comments[30] = "Id Pregunta: 3708. NULL";


//  Id pregunta: 3751 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  MIB son unas siglas asociadas a:";
 choices[31]= new Array();
 choices[31][0] = "SGBD orientadas a objetos";
 choices[31][1] = "Lenguaje de programaci&oacute;n C++";
 choices[31][2] = "Sistemas de gesti&oacute;n de redes";
 choices[31][3] = "Sistemas OLAP";
 answers[31] = choices[31][2];
 units[31] = "104";
 comments[31] = "Id Pregunta: 3751. ";


//  Id pregunta: 3767 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Cu&aacute;ntos octetos usa IPv6 en el direccionamiento, considerando que IPv4 usa 4 octetos:";
 choices[32]= new Array();
 choices[32][0] = "6";
 choices[32][1] = "8";
 choices[32][2] = "14";
 choices[32][3] = "16";
 answers[32] = choices[32][3];
 units[32] = "100";
 comments[32] = "Id Pregunta: 3767. NULL";


//  Id pregunta: 3782 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Respecto a EDGE puede decirse que:";
 choices[33]= new Array();
 choices[33][0] = "Ha sustuido a GSM en gran parte de Europa";
 choices[33][1] = "Sustiuir&aacute; a UMTS en vista del fracaso de esta &uacute;ltima tecnolog&iacute;a";
 choices[33][2] = "Es un desarrollo paralelo a iMode con amplia implantaci&oacute;n en Jap&oacute;n y Norteam&eacute;rica";
 choices[33][3] = "Nada de lo anterior es cierto";
 answers[33] = choices[33][3];
 units[33] = "108";
 comments[33] = "Id Pregunta: 3782. ";


//  Id pregunta: 3799 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  RTP y RTCP son protocolos que habitualmente se situan:";
 choices[34]= new Array();
 choices[34][0] = "justo encima de TCP";
 choices[34][1] = "justo encima de UDP";
 choices[34][2] = "justo debajo de TCP";
 choices[34][3] = "justo debajo de UDP";
 answers[34] = choices[34][1];
 units[34] = "100";
 comments[34] = "Id Pregunta: 3799. NULL";


//  Id pregunta: 3802 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  SAP es:";
 choices[35]= new Array();
 choices[35][0] = "Service Access Protocol, Protocolo de Acceso al Servicio";
 choices[35][1] = "System Analysis Program, Programa de An&aacute;lisis de Sistema";
 choices[35][2] = "Service Access Point, Punto de Acceso al Servicio";
 choices[35][3] = "Sistema de Administraci&oacute;n P&uacute;blica";
 answers[35] = choices[35][2];
 units[35] = "112";
 comments[35] = "Id Pregunta: 3802. ";


//  Id pregunta: 3806 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Se pueden se&ntilde;alar como ventajas del EDI:";
 choices[36]= new Array();
 choices[36][0] = "Reduce los gastos de tratamiento de una transacci&oacute;n, as&iacute; como los de transmisi&oacute;n de la misma";
 choices[36][1] = "Se puede aplicar  a todo tipo de sectores de la industria, pero dentro de un pa&iacute;s";
 choices[36][2] = "No existen condicionantes legales para su implantaci&oacute;n";
 choices[36][3] = "Se trata de un sistema de futuro";
 answers[36] = choices[36][0];
 units[36] = "112";
 comments[36] = "Id Pregunta: 3806. ";


//  Id pregunta: 3818 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  Se&ntilde;ale entre los siguientes, cu&aacute;l es un par&aacute;metro de calidad en redes RDSI:";
 choices[37]= new Array();
 choices[37][0] = "Grado de servicio";
 choices[37][1] = "Alerting delay";
 choices[37][2] = "Bit error";
 choices[37][3] = "Todos son par&aacute;metros de calidad";
 answers[37] = choices[37][3];
 units[37] = "103";
 comments[37] = "Id Pregunta: 3818. ";


//  Id pregunta: 3843 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  STP proporciona:";
 choices[38]= new Array();
 choices[38][0] = "Puntos de acceso s&iacute;ncronos de transferencia de datos en RDSI";
 choices[38][1] = "Conmutaci&oacute;n de mensajes entre nodos de SS7";
 choices[38][2] = "Temporizaci&oacute;n exacta en redes WDM";
 choices[38][3] = "Nada de lo anterior es cierto";
 answers[38] = choices[38][1];
 units[38] = "103";
 comments[38] = "Id Pregunta: 3843. ";


//  Id pregunta: 3845 AÃ±o de creación de pregunta: 2002-01-01
 questions[39]= "40)  Tengo una p&aacute;gina web personal, pero para financiar gastos tengo alojados &quot;banners&quot;.&iquest;En qu&eacute; me afecta la LSSI?: ";
 choices[39]= new Array();
 choices[39][0] = "No me afecta para nada";
 choices[39][1] = "La LSSI es aplicable";
 choices[39][2] = "S&oacute;lo para la publicidad";
 choices[39][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[39] = choices[39][1];
 units[39] = "112,30";
 comments[39] = "Id Pregunta: 3845. ";


//  Id pregunta: 3863 AÃ±o de creación de pregunta: 2004-01-01
 questions[40]= "41)  El protocolo HTTP";
 choices[40]= new Array();
 choices[40][0] = "Obliga a los servidores a escuchar en el puerto 80";
 choices[40][1] = "Utiliza el formato MIME para las respuestas ";
 choices[40][2] = "Utiliza DNS y TCP para establecer la conexi&oacute;n con el servidor";
 choices[40][3] = "Est&aacute; basado en los comandos de Un&iacute;x";
 answers[40] = choices[40][1];
 units[40] = "113";
 comments[40] = "Id Pregunta: 3863. Tanenbaum";


//  Id pregunta: 3873 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas empleadas en METRICA V3, tiene por objeto la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las condiciones f&iacute;sicas de entorno?:";
 choices[41]= new Array();
 choices[41][0] = "Modelo Entidad / relaci&oacute;n.";
 choices[41][1] = "Diagrama de Despliegue.";
 choices[41][2] = "Diagrama de Flujo de Datos (DFD).";
 choices[41][3] = "Diagrama de Interacci&oacute;n.";
 answers[41] = choices[41][2];
 units[41] = "86";
 comments[41] = "Id Pregunta: 3873. Junta Andaluc&iacute;a";


//  Id pregunta: 3886 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  &iquest;Qu&eacute; es Javascript7:";
 choices[42]= new Array();
 choices[42][0] = " Un compilador de Java.";
 choices[42][1] = "Un generador de applets Java";
 choices[42][2] = " Un applet Java que se ejecuta de forma embebida desde un lenguaje de script.";
 choices[42][3] = "Un lenguaje de script basado en la sintaxis de Java.";
 answers[42] = choices[42][3];
 units[42] = "114";
 comments[42] = "Id Pregunta: 3886. Junta Andaluc&iacute;a";


//  Id pregunta: 3892 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  En el nivel de Enlace del modelo OSI, parada-espera, adelante-atr&aacute;s, y rechazo selectivo, son:";
 choices[43]= new Array();
 choices[43][0] = "M&eacute;todos de detecci&oacute;n de errores.";
 choices[43][1] = "Mecanismos de solicitud de repetici&oacute;n autom&aacute;tica (ARQ).";
 choices[43][2] = "Protocolos de control de enlace de alto nivel.";
 choices[43][3] = "Procedimientos de acceso al enlace.";
 answers[43] = choices[43][1];
 units[43] = "100";
 comments[43] = "Id Pregunta: 3892. Junta Andaluc&iacute;a";


//  Id pregunta: 3906 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  SSL son las iniciales de Secure Socket Layer, S-HTTP son las siglas de Secure HyperText Transfer Protocol, protocolos para la comunicaci&oacute;n segura entre dos ordenadores, normalmente entre un cliente y un servidor y su objetivo es similar, pero:";
 choices[44]= new Array();
 choices[44][0] = "SSL es m&aacute;s amplio que S-HTTP ya que puede ser utilizado como un intermediario entre el TCP/ IP y cualquier otro protocolo (por ejemplo, el HTTP) para a&ntilde;adir seguridad a cualquier tipo de comunicaci&oacute;n entre un cliente y un servidor.";
 choices[44][1] = "SSL es menos amplio que S-HTTP ya que es una parte de este que puede ser utilizada para a&ntilde;adir seguridad a cualquier tipo de comunicaci&oacute;n http entre un cliente y un servidor.";
 choices[44][2] = "S-HTTP sustituye al protocolo HTTP, aunque el cliente no est&eacute; preparado para utilizar ese nivel de seguridad, lo que no se puede conseguir con SSL, que necesita cliente y servidor preparados para utilizar ese nivel de seguridad.";
 choices[44][3] = "SSL sustituye al protocolo HTTP, aunque el cliente no est&eacute; preparado para utilizar ese nivel de seguridad, lo que no se puede conseguir con S-HTTP, que necesita cliente y servidor preparados para utilizar ese nivel de seguridad.";
 answers[44] = choices[44][0];
 units[44] = "111";
 comments[44] = "Id Pregunta: 3906. Junta Andaluc&iacute;a";


//  Id pregunta: 4031 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  En relaci&oacute;n con los m&eacute;todos de codificaci&oacute;n y compresi&oacute;n de voz, se&ntilde;ale qu&eacute; m&eacute;todo permite comprimir la voz humana llegando hasta los 8 kbps:";
 choices[45]= new Array();
 choices[45][0] = "CS-ACELP";
 choices[45][1] = "ADPCM";
 choices[45][2] = "LD-CELP";
 choices[45][3] = "PCM";
 answers[45] = choices[45][0];
 units[45] = "109";
 comments[45] = "Id Pregunta: 4031. ";


//  Id pregunta: 4037 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  El servicio universal definido en Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, debe permitir al usuario final la posibilidad de:";
 choices[46]= new Array();
 choices[46][0] = "Efectuar y recibir llamadas telef&oacute;nicas.";
 choices[46][1] = "Efectuar y recibir llamadas telef&oacute;nicas y permitir comunicaciones de fax.";
 choices[46][2] = "Efectuar y recibir llamadas telef&oacute;nicas y permitir comunicaciones de fax y datos a velocidad suficiente para acceder de forma funcional a Internet.";
 choices[46][3] = "Efectuar y recibir llamadas telef&oacute;nicas y permitir comunicaciones de datos a velocidad suficiente para acceder de forma funcional a Internet.";
 answers[46] = choices[46][2];
 units[46] = "110";
 comments[46] = "Id Pregunta: 4037. ";


//  Id pregunta: 4077 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  La red externa a la que se conecta el departamento de compras para comunicarse con sus proveedores se llama";
 choices[47]= new Array();
 choices[47][0] = "Intranet";
 choices[47][1] = "inter-intranet";
 choices[47][2] = "extranet abierta";
 choices[47][3] = "extranet";
 answers[47] = choices[47][3];
 units[47] = "113";
 comments[47] = "Id Pregunta: 4077. ";


//  Id pregunta: 4078 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  &iquest;Es posible distribuir en una granja de servidores la l&oacute;gica de negocio de una empresa?";
 choices[48]= new Array();
 choices[48][0] = "Si utilizando .Net";
 choices[48][1] = "Si utilizando J2EE";
 choices[48][2] = "Si usando software libre";
 choices[48][3] = "todas las anteriores son ciertas";
 answers[48] = choices[48][3];
 units[48] = "113";
 comments[48] = "Id Pregunta: 4078. ";


//  Id pregunta: 4113 AÃ±o de creación de pregunta: 2006-01-01
 questions[49]= "50)  Se&ntilde;ale la afirmaci&oacute;n correcta sobre NFS:";
 choices[49]= new Array();
 choices[49][0] = "NFS es un sistema de archivos distribuido para un entorno de red de &aacute;rea local.";
 choices[49][1] = "Permite acceder a ficheros remotos como si fueran ficheros del sistema local siempre que se est&eacute; dentro de la misma red de &aacute;rea local.";
 choices[49][2] = "Originalmente fue desarrollado por Sun Microsystems.";
 choices[49][3] = "Todas las anteriores son ciertas.";
 answers[49] = choices[49][3];
 units[49] = "112";
 comments[49] = "Id Pregunta: 4113. ";


//  Id pregunta: 4156 AÃ±o de creación de pregunta: 2006-01-01
 questions[50]= "51)  Metodolog&iacute;a administrativa de gesti&oacute;n de sistemas que establece procedimientos para la gesti&oacute;n de situaciones futuras probables";
 choices[50]= new Array();
 choices[50][0] = "Gesti&oacute;n de relaciones entre socios (PRM)";
 choices[50][1] = "Gesti&oacute;n basada en pol&iacute;ticas";
 choices[50][2] = "Tecnolog&iacute;a adaptativa";
 choices[50][3] = "Acuerdo de nivel de servicio (SLA)";
 answers[50] = choices[50][1];
 units[50] = "97";
 comments[50] = "Id Pregunta: 4156. NULL";


//  Id pregunta: 4164 AÃ±o de creación de pregunta: 2006-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes no es un servicio TCP?";
 choices[51]= new Array();
 choices[51][0] = "who";
 choices[51][1] = "whois";
 choices[51][2] = "finger";
 choices[51][3] = "identd";
 answers[51] = choices[51][0];
 units[51] = "100";
 comments[51] = "Id Pregunta: 4164. ";


//  Id pregunta: 4174 AÃ±o de creación de pregunta: 2006-01-01
 questions[52]= "53)  Si quiero autorizar a un usuario";
 choices[52]= new Array();
 choices[52][0] = "Le pido su nombre";
 choices[52][1] = "Le pido su DNI";
 choices[52][2] = "Compruebo la existencia de su nombre en una lista";
 choices[52][3] = "Le pregunto su n&uacute;mero de DNI";
 answers[52] = choices[52][2];
 units[52] = "111";
 comments[52] = "Id Pregunta: 4174. NULL";


//  Id pregunta: 4175 AÃ±o de creación de pregunta: 2006-01-01
 questions[53]= "54)  Un buen libro de claves podr&iacute;a ser";
 choices[53]= new Array();
 choices[53][0] = "Los n&uacute;meros primos de 128 cifras";
 choices[53][1] = "La gu&iacute;a de Paginas Blancas de Madrid 2005";
 choices[53][2] = "El CD &quot;Hung up&quot; de Madonna";
 choices[53][3] = "todas las anteriores";
 answers[53] = choices[53][3];
 units[53] = "111";
 comments[53] = "Id Pregunta: 4175. ";


//  Id pregunta: 4211 AÃ±o de creación de pregunta: 2006-01-01
 questions[54]= "55)  Indique cu&aacute;l de las siguientes afirmaciones es cierta referida a la arquitectura de desarrollo  .NET";
 choices[54]= new Array();
 choices[54][0] = "Biz Talk Server no resulta adecuado si el proceso implica m&uacute;ltiples documentos y servicios";
 choices[54][1] = "En el dise&ntilde;o de la capa de datos se puede disponer de uno o m&aacute;s or&iacute;genes de datos de tipos diferentes";
 choices[54][2] = "Se facilita el mantenimiento de la aplicaci&oacute;n si los componentes l&oacute;gicos de acceso a datos invocan a otros componentes l&oacute;gicos de acceso a datos";
 choices[54][3] = "Los componentes de interfaz de usuario no pueden restringir los tipos de entrada de datos, ya que esto &uacute;nicamente se permite en la base de datos";
 answers[54] = choices[54][1];
 units[54] = "59,115";
 comments[54] = "Id Pregunta: 4211. ";


//  Id pregunta: 4218 AÃ±o de creación de pregunta: 2006-01-01
 questions[55]= "56)  Las redes integradas de Datos y Voz se definen en el grupo de trabajo del IEEE";
 choices[55]= new Array();
 choices[55][0] = "802.9";
 choices[55][1] = "802.10";
 choices[55][2] = "802.11";
 choices[55][3] = "802.12";
 answers[55] = choices[55][0];
 units[55] = "101";
 comments[55] = "Id Pregunta: 4218. ";


//  Id pregunta: 4261 AÃ±o de creación de pregunta: 2007-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de  las siguientes afirmaciones est&aacute; recogida en la LLey 9/2014, de 9 de mayo, General de Telecomunicaciones?";
 choices[56]= new Array();
 choices[56][0] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia aprobar&aacute; los planes nacionales de numeracion y direccion";
 choices[56][1] = "El Gobierno podr&aacute; imponer  a los operadores, mediante Real Decreto, obligaciones de servicio p&uacute;blico en ciertos supuestos";
 choices[56][2] = "Tendr&aacute;n la consideraci&oacute;n de Autoridades Nacionales de Reglamentacion de Telecomunicaciones &uacute;nicamente el Gobierno y la Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[56][3] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia analizar&aacute; los mercados de referencia al por mayor y al por menor cada tres a&ntilde;os como m&iacute;nimo";
 answers[56] = choices[56][1];
 units[56] = "110";
 comments[56] = "Id Pregunta: 4261. ";


//  Id pregunta: 4546 AÃ±o de creación de pregunta: 2007-01-01
 questions[57]= "58)  La capa de adaptaci&oacute;n de ATM (AAL o ATM Adaptation Layer) com&uacute;nmente utilizada para la transmisi&oacute;n de datagramas IP sobre redes ATM es:";
 choices[57]= new Array();
 choices[57][0] = "AAL 5.";
 choices[57][1] = "AAL 1.";
 choices[57][2] = "AAL 3/4.";
 choices[57][3] = "AAL 2.";
 answers[57] = choices[57][0];
 units[57] = "109";
 comments[57] = "Id Pregunta: 4546. ";


//  Id pregunta: 4651 AÃ±o de creación de pregunta: 2007-01-01
 questions[58]= "59)  Cual de las siguientes no es una caracter&iacute;stica de DAB:";
 choices[58]= new Array();
 choices[58][0] = "utiliza m&uacute;ltiples portadoras en el mismo canal.";
 choices[58][1] = "permite emitir en redes de frecuencia &uacute;nica";
 choices[58][2] = "ofrece un canal radio de retorno";
 choices[58][3] = "ofrecer servicios de datos";
 answers[58] = choices[58][2];
 units[58] = "";
 comments[58] = "Id Pregunta: 4651. ";


//  Id pregunta: 4844 AÃ±o de creación de pregunta: 2007-01-01
 questions[59]= "60)  El protocolo DHCP (Dynamic Host Configuration Protocol) es una mejora o actualizaci&oacute;n de uno de los siguientesprotocolos:";
 choices[59]= new Array();
 choices[59][0] = "ARP (Address Resolution Protocol)";
 choices[59][1] = "RARP (Reverse Address Resolution Protocol)";
 choices[59][2] = "BOOTP (Bootstrap Protocol)";
 choices[59][3] = "IGMP (Internet Group Management Protocol)";
 answers[59] = choices[59][2];
 units[59] = "100";
 comments[59] = "Id Pregunta: 4844. ";


//  Id pregunta: 4949 AÃ±o de creación de pregunta: 2003-01-01
 questions[60]= "61)  Indique el API (Application Programming Interface) de JAVA que facilita el acceso a registros UDDI(Universal Description, Discovery and Integration):";
 choices[60]= new Array();
 choices[60][0] = "SAAJ";
 choices[60][1] = "JAXR";
 choices[60][2] = "SOAP";
 choices[60][3] = "STAX";
 answers[60] = choices[60][1];
 units[60] = "116";
 comments[60] = "Id Pregunta: 4949. Examen TIC B 2007";


//  Id pregunta: 5167 AÃ±o de creación de pregunta: 2009-01-01
 questions[61]= "62)  Seg&uacute;n la legislaci&oacute;n aplicable, forma parte del servicio universal:";
 choices[61]= new Array();
 choices[61][0] = "Una conexi&oacute;n que deber&aacute; permitir comunicaciones en banda ancha, en los t&eacute;rminos que se definan por la normativa vigente";
 choices[61][1] = "Una conexi&oacute;n con acceso a servicios de televisi&oacute;n sobre IP";
 choices[61][2] = "Una conexi&oacute;n a telefon&iacute;a m&oacute;vil GSM";
 choices[61][3] = "Una conexi&oacute;n que permita comunicaciones de datos a velocidad suficiente para acceder de forma fucional a Internet y a otras redes de &aacute;mbito privado";
 answers[61] = choices[61][0];
 units[61] = "110";
 comments[61] = "Id Pregunta: 5167. ";


//  Id pregunta: 5285 AÃ±o de creación de pregunta: 2003-01-01
 questions[62]= "63)  Indique cu&aacute;l de los siguientes no es un objeto integrado de ASP:";
 choices[62]= new Array();
 choices[62][0] = "Client";
 choices[62][1] = "Application";
 choices[62][2] = "Server";
 choices[62][3] = "Request";
 answers[62] = choices[62][0];
 units[62] = "115";
 comments[62] = "Id Pregunta: 5285. ";


//  Id pregunta: 5615 AÃ±o de creación de pregunta: 2003-01-01
 questions[63]= "64)  &iquest;Qu&eacute; es un SOCKS o un FWTK?";
 choices[63]= new Array();
 choices[63][0] = "Son servidores de contrase&ntilde;as y claves que protegen generalmente informaci&oacute;n vital mediante algoritmos de cifrado";
 choices[63][1] = "Servidores de autenticaci&oacute;n y proxy";
 choices[63][2] = "Servidores de nombres";
 choices[63][3] = "Ninguna de las anteriores";
 answers[63] = choices[63][1];
 units[63] = "111";
 comments[63] = "Id Pregunta: 5615. NULL";


//  Id pregunta: 5626 AÃ±o de creación de pregunta: 2003-01-01
 questions[64]= "65)  De los siguientes ataques, cu&aacute;l se corresponde con la obtenci&oacute;n de informaci&oacute;n de una red sin modificar la informaci&oacute;n ";
 choices[64]= new Array();
 choices[64][0] = "Explot";
 choices[64][1] = "Snooping";
 choices[64][2] = "Wardriving";
 choices[64][3] = "Teardrop";
 answers[64] = choices[64][1];
 units[64] = "111";
 comments[64] = "Id Pregunta: 5626. NULL";


//  Id pregunta: 5821 AÃ±o de creación de pregunta: 2009-01-01
 questions[65]= "66)  Con respecto a servidores y servicios que permiten conectar el entorno de las LAN con el mundo Internet, &iquest;cu&aacute;l de las afirmaciones siguientes es CIERTA para un &quot;servidor NAT&quot;?:";
 choices[65]= new Array();
 choices[65][0] = "Sirve para asignar din&aacute;micamente direcciones IP a los clientes que no las tienen asignadas est&aacute;ticamente en la configuraci&oacute;n inicial, realizando funciones de protecci&oacute;n contra ataques por reproducci&oacute;n";
 choices[65][1] = "Se utilizan para trasformar una serie de direcciones IP internas, que no pueden ser reconocidas para salir a Internet.";
 choices[65][2] = "Sirven para limitar las direcciones IP/URL&rsquo;s a las que los usuarios de la LAN de una organizaci&oacute;n pueden acceder a trav&eacute;s de Internet, garantizando integridad de los datos y autenticaci&oacute;n de origen v&iacute;a el algoritmo MD5";
 choices[65][3] = "Guardan informaci&oacute;n sobre las direcciones de los servidores (host) representativos de nombres de dominio sobre los que se tiene autorizaci&oacute;n de acceso, disponiendo de capacidad adicional para consultar informaci&oacute;n de DNS&rsquo;s que tengan los nombres de dominio y host de otros accesos que pudieran realizarse";
 answers[65] = choices[65][1];
 units[65] = "102";
 comments[65] = "Id Pregunta: 5821. MAP 2008 A1";


//  Id pregunta: 6545 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  La autenticaci&oacute;n fuerte requiere dos de los tres atributos de autenticaci&oacute;n, de entre los que se encuentran";
 choices[66]= new Array();
 choices[66][0] = "Algo que alguien sabe";
 choices[66][1] = "Algo que alguien tiene";
 choices[66][2] = "A y B son correctas";
 choices[66][3] = "A y B son incorrectas";
 answers[66] = choices[66][2];
 units[66] = "111";
 comments[66] = "Id Pregunta: 6545. NULL";


//  Id pregunta: 8175 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Indique la Potencia a la entrada del receptor del sistema de telecomunicaciones compuesto de los siguientes elementos:- Una antena receptora a la que le llega una Potencia de entrada de 10exp-8 mW.- Un amplificador con ganancia G1 = 1000.- Una longitud de cable de 10m con atenuaci&oacute;n del mismo de 0&rsquo;3 dB/m.- Un amplificador con ganancia G2 = 100.- Un receptor.";
 choices[67]= new Array();
 choices[67][0] = "-63 dBW.";
 choices[67][1] = "+33 dBm.";
 choices[67][2] = "1exp-6 W.";
 choices[67][3] = "-53 dBm.";
 answers[67] = choices[67][0];
 units[67] = "107";
 comments[67] = "Id Pregunta: 8175. Examen TIC A1 2010";


//  Id pregunta: 8219 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  En relaci&oacute;n a la seguridad en redes inal&aacute;mbricas, cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[68]= new Array();
 choices[68][0] = "Entre los mecanismos b&aacute;sicos de seguridad aplicables en redes inal&aacute;mbricas, se encuentran: 1. Ocultaci&oacute;n del SSID (identificador de red). 2. Filtrado MAC. 3. Ajuste de potencia. 4. Uso de mecanismos de autenticaci&oacute;n y cifrado.";
 choices[68][1] = "El ataque DoS, &quot;Clear Channel Assesments&quot;, basado en falsear el mecanismo CCA, afecta a dispositivos 802.11a, 802.11b y 802.11g.";
 choices[68][2] = "Una RSN &quot;Robust Security Network&quot; es una red de seguridad en la que todas las asociaciones entre sus miembros se basan en fuertes mecanismos criptogr&aacute;ficos y de autenticaci&oacute;n.";
 choices[68][3] = "AirMagnet, Airodump, Aireplay, Kismet y Netstumbler, son herramientas inform&aacute;ticas que permiten estudiar redes inal&aacute;mbricas.";
 answers[68] = choices[68][1];
 units[68] = "107";
 comments[68] = "Id Pregunta: 8219. Examen TIC A1 2010";


//  Id pregunta: 8428 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes normas del IEEE se utiliza para el control de acceso a red basada en puertos?";
 choices[69]= new Array();
 choices[69][0] = "802.1x";
 choices[69][1] = "802.3.ay";
 choices[69][2] = "802.11";
 choices[69][3] = "802.3.q";
 answers[69] = choices[69][0];
 units[69] = "101";
 comments[69] = "Id Pregunta: 8428. ";


//  Id pregunta: 8454 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  El est&aacute;ndar de la red X.25 especifica las siguientes capas de protocolos:";
 choices[70]= new Array();
 choices[70][0] = "Capa F&iacute;sica, de enlace y de paquete";
 choices[70][1] = "Capa F&iacute;sica, de enlace y de sesi&oacute;n";
 choices[70][2] = "Capa de transporte, de sesi&oacute;n y de presentaci&oacute;n";
 choices[70][3] = "Capa f&iacute;sica, de transporte y de presentaci&oacute;n";
 answers[70] = choices[70][0];
 units[70] = "103";
 comments[70] = "Id Pregunta: 8454. Analista Ayto. Madrid 2010";


//  Id pregunta: 8466 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Las fibras monomodo:";
 choices[71]= new Array();
 choices[71][0] = "Se emplean normalmente en enlaces de de telecomunicaci&oacute;n de distancias largas";
 choices[71][1] = "Presentan la superficie de separaci&oacute;n entre el n&uacute;cleo y el revestimiento, claramente definida y diferenciada dando lugar a que los rayos luminosos se reflejen hacia el n&uacute;cleo formando diversos &aacute;ngulos";
 choices[71][2] = "Se caracterizan por una velocidad de flujo reducida";
 choices[71][3] = "Su instalaci&oacute;n es m&aacute;s sencilla que las multimodo";
 answers[71] = choices[71][0];
 units[71] = "99";
 comments[71] = "Id Pregunta: 8466. Analista Ayto. Madrid 2010";


//  Id pregunta: 8476 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  En la traslaci&oacute;n del modelo OSI para su aplicaci&oacute;n a las redes de &aacute;rea local (LAN), es cierto que:";
 choices[72]= new Array();
 choices[72][0] = "El nivel de enlace se subdivide en subnivel LLC y subnivel MAC.";
 choices[72][1] = "El nivel f&iacute;sico se subdivide en subnivel LLC y subnivel MAC.";
 choices[72][2] = "Se establecen los tres niveles siguientes: nivel f&iacute;sico (que pasa a denominarse nivel LLC), nivel MAC y nivel de enlace.";
 choices[72][3] = "Los niveles f&iacute;sico y de enlace pasan de denominarse, respectivamente, nivel LLC y nivel MAC";
 answers[72] = choices[72][0];
 units[72] = "101";
 comments[72] = "Id Pregunta: 8476. Examen TIC A2 2010 interna";


//  Id pregunta: 8527 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  En un cortafuegos en modo SPI (Stateful Packet Inspection), se&ntilde;ale la opci&oacute;n verdadera:";
 choices[73]= new Array();
 choices[73][0] = "Trabaja exclusivamente en el nivel 3 de OSI.";
 choices[73][1] = "Permitir&aacute; el paso de un paquete solo si se dirige al puerto 80 de nuestro servidor.";
 choices[73][2] = "Tiene en cuenta la negociaci&oacute;n en 3 pasos (3 way handshake) del protocolo TCP/IP.";
 choices[73][3] = "No permite la conexi&oacute;n SSH ya que est&aacute; cifrada.";
 answers[73] = choices[73][2];
 units[73] = "111";
 comments[73] = "Id Pregunta: 8527. Examen TIC A2 2010 interna";


//  Id pregunta: 8530 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  La Web sem&aacute;ntica pretende dotar a la Web de mayor significado, gracias a una informaci&oacute;n mejor definida. Para ello se utilizan tecnolog&iacute;as como:";
 choices[74]= new Array();
 choices[74][0] = "RTF.";
 choices[74][1] = "RML.";
 choices[74][2] = "OWL.";
 choices[74][3] = "Jabsys.";
 answers[74] = choices[74][2];
 units[74] = "120";
 comments[74] = "Id Pregunta: 8530. Examen TIC A2 2010 interna";


//  Id pregunta: 8532 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  En relaci&oacute;n con la tecnolog&iacute;a ADSL, un multiplexor localizado en la central telef&oacute;nica que concentra el tr&aacute;fico de enlaces ADSL de usuario, se denomina:";
 choices[75]= new Array();
 choices[75][0] = "DSLAM";
 choices[75][1] = "DSLM";
 choices[75][2] = "ADSLM";
 choices[75][3] = "ADSLAM";
 answers[75] = choices[75][0];
 units[75] = "107";
 comments[75] = "Id Pregunta: 8532. Examen TIC A2 2010 interna";


//  Id pregunta: 8660 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  La se&ntilde;ales de banda Ku, &iquest;en que rango de frecuencias trabajan?";
 choices[76]= new Array();
 choices[76][0] = "1-8 MHz";
 choices[76][1] = "4-8 GHz";
 choices[76][2] = "12-18 GHz";
 choices[76][3] = "4-8 MHz";
 answers[76] = choices[76][2];
 units[76] = "108";
 comments[76] = "Id Pregunta: 8660. Examen UPM A2 2011";


//  Id pregunta: 8669 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  Cu&aacute;l de los siguientes elementos de seguridad opera en el nivel 3 del modelo OSI";
 choices[77]= new Array();
 choices[77][0] = "Proxy";
 choices[77][1] = "Firewall de filtrado de paquetes";
 choices[77][2] = "Antivirus";
 choices[77][3] = "Filtro anti SPAM";
 answers[77] = choices[77][1];
 units[77] = "111";
 comments[77] = "Id Pregunta: 8669. Examen UPM A2 2011";


//  Id pregunta: 8676 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  A qu&eacute; se denomina Single sign-on (SSO):";
 choices[78]= new Array();
 choices[78][0] = "Procedimiento de cifrado para autenticar a un usuario";
 choices[78][1] = "Procedimiento asociado al cifrado en Secure Sockets Layers (SSL)";
 choices[78][2] = "Es un procedimiento de autenticaci&oacute;n que habilita al usuario para acceder a varios sistemas con una sola instancia de identificaci&oacute;n";
 choices[78][3] = "Permite el acceso de los usuarios a servicios web a trav&eacute;s del protocolo HTTPS";
 answers[78] = choices[78][2];
 units[78] = "118";
 comments[78] = "Id Pregunta: 8676. Examen UPM A2 2011";


//  Id pregunta: 9001 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l es el tama&ntilde;o de las celdas ATM?";
 choices[79]= new Array();
 choices[79][0] = "48 octetos";
 choices[79][1] = "64 octetos";
 choices[79][2] = "53 octetos";
 choices[79][3] = "32 octetos";
 answers[79] = choices[79][2];
 units[79] = "109";
 comments[79] = "Id Pregunta: 9001. Examen UPM A2 2011";


//  Id pregunta: 9025 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  En una centralita que se une a la red p&uacute;blica mediante un primario RDSI:";
 choices[80]= new Array();
 choices[80][0] = "Se pueden establecer 30 comunicaciones en total (entre entrantes y salientes) de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[80][1] = "Se pueden establecer 30 comunicaciones entrantes y 30 salientes simult&aacute;neas con la red p&uacute;blica.";
 choices[80][2] = "Se pueden establecer 32 comunicaciones totales: 30 entrantes y 2 salientes, de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[80][3] = "Se pueden establecer 32 comunicaciones totales: 16 entrantes y 16 salientes, de forma simult&aacute;nea con la red p&uacute;blica.";
 answers[80] = choices[80][0];
 units[80] = "103";
 comments[80] = "Id Pregunta: 9025. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9336 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;Qu&eacute; conjunto de normas estandarizan los sistemas de cableado en clases?";
 choices[81]= new Array();
 choices[81][0] = "EIA/TIA 586";
 choices[81][1] = "SO/EIS DIS 11108";
 choices[81][2] = "EIA/TIA 568";
 choices[81][3] = "ISO/EIS DIS 11801";
 answers[81] = choices[81][3];
 units[81] = "99";
 comments[81] = "Id Pregunta: 9336. TIC a2 AGE 2011";


//  Id pregunta: 9337 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares IEEE para la transmisi&oacute;n de datos gigabit sobre Ethernet puede operar con fibra &oacute;ptica tanto monomodo como multimodo?";
 choices[82]= new Array();
 choices[82][0] = "1000BASE-SX";
 choices[82][1] = "1000BASE-LX";
 choices[82][2] = "1000BASE-TX";
 choices[82][3] = "1000BASE-CX";
 answers[82] = choices[82][1];
 units[82] = "99";
 comments[82] = "Id Pregunta: 9337. TIC a2 AGE 2011";


//  Id pregunta: 9781 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Se&ntilde;ale la afirmaci&oacute;n es correcta respecto a firmar digitalmente mediante XML Signature al usar WS-Security:";
 choices[83]= new Array();
 choices[83][0] = "WS-Security no contempla el uso de XML Signature por no adaptarse bien al modelo petici&oacute;n respuesta de Web Services.";
 choices[83][1] = "WS-Security contemplaba el uso de XML Signature en la versi&oacute;n 1.0 pero se abandon&oacute; en favor de XML DynaSign.";
 choices[83][2] = "WS-Security contempla el uso de XML Signature con algunas limitaciones, como recomendar el no usar Enveloped Signature Transform.";
 choices[83][3] = "WS-Security contempla el uso de XML Signature, sin establecer limitaciones ni extensiones especiales. ";
 answers[83] = choices[83][2];
 units[83] = "111";
 comments[83] = "Id Pregunta: 9781. Examen TIC A2 2013";


//  Id pregunta: 9791 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En el contexto de la seguridad, el shoulder surfing consiste en:";
 choices[84]= new Array();
 choices[84][0] = "Espiar a los usuarios modificando los navegadores web para obtener sus claves de acceso.";
 choices[84][1] = "Uso de aplicaciones intermedias llamadas shoulders para la obtenci&oacute;n de los datos de navegaci&oacute;n.";
 choices[84][2] = "Espiar f&iacute;sicamente a los usuarios, para obtener generalmente claves de acceso al sistema.";
 choices[84][3] = "Es un sin&oacute;nimo del ataque man in the middle ";
 answers[84] = choices[84][2];
 units[84] = "111";
 comments[84] = "Id Pregunta: 9791. Examen TIC A2 2013";


//  Id pregunta: 9845 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  El algoritmo RSA es un algoritmo:";
 choices[85]= new Array();
 choices[85][0] = "De triple clave.";
 choices[85][1] = "Asim&eacute;trico.";
 choices[85][2] = "De clave privada.";
 choices[85][3] = "Sim&eacute;trico.";
 answers[85] = choices[85][1];
 units[85] = "111";
 comments[85] = "Id Pregunta: 9845. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 10035 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l es la direcci&oacute;n multicast utilizada por el protocolo RIP v2 (Routing Information Protocol), seg&uacute;n RFC 2453, para enviar las actualizaciones de sus tablas?";
 choices[86]= new Array();
 choices[86][0] = "224.0.0.4 ";
 choices[86][1] = "224.0.0.5";
 choices[86][2] = "224.0.0.9 ";
 choices[86][3] = "224.0.0.22";
 answers[86] = choices[86][2];
 units[86] = "100";
 comments[86] = "Id Pregunta: 10035. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10045 AÃ±o de creación de pregunta: 2010-01-01
 questions[87]= "88)  La recomendaci&oacute;n X.25 de la ITU (International Telecommunication Union) se refiere a:";
 choices[87]= new Array();
 choices[87][0] = "Interfaz entre el equipo terminal de datos y el equipo de terminaci&oacute;n del circuito de datos para equipos terminales que funcionan en el modo paquete y est&aacute;n conectados a redes p&uacute;blicas de datos por circuitos especializados.";
 choices[87][1] = "Interfaz equipo terminal de datos/equipo de terminaci&oacute;n del circuito de datos para los equipos terminales de datos arr&iacute;tmicos con acceso a la facilidad de ensamblado/desensamblado de paquetes en una red p&uacute;blica de datos situada en elmismo pa&iacute;s.";
 choices[87][2] = "Utilizaci&oacute;n, en las redes p&uacute;blicas de datos, de equipos terminales de datos dise&ntilde;ados para su conexi&oacute;n con m&oacute;dems s&iacute;ncronos de la serie V.";
 choices[87][3] = "Interfaz entre el equipo terminal de datos y el equipo de terminaci&oacute;n del circuito de datos para funcionamiento s&iacute;ncrono en redes p&uacute;blicas de datos.";
 answers[87] = choices[87][0];
 units[87] = "103";
 comments[87] = "Id Pregunta: 10045. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10066 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Indicar de qu&eacute; zonas se encarga RIPE-NCC como Registro Regional de Internet (RIR):";
 choices[88]= new Array();
 choices[88][0] = "Am&eacute;rica Central, Am&eacute;rica del Norte y del Sur.";
 choices[88][1] = "Europa y Norte de &Aacute;frica.";
 choices[88][2] = "Europa, Am&eacute;rica Central y Am&eacute;rica del Sur.";
 choices[88][3] = "Europa, Oriente Medio y Asia Central.";
 answers[88] = choices[88][3];
 units[88] = "112";
 comments[88] = "Id Pregunta: 10066. TIC A2, libre, Examen 2013";


//  Id pregunta: 10119 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En la conmutaci&oacute;n de tramas Cut-through, el switch comienza a retransmitir la trama:";
 choices[89]= new Array();
 choices[89][0] = "En cuanto ha recibido los primeros 6 bytes";
 choices[89][1] = "En cuanto ha recibido los primeros 64 bytes";
 choices[89][2] = "Cuando ha recibido toda la trama";
 choices[89][3] = "Cuando ha recibido toda la trama y ha calculado el CRC";
 answers[89] = choices[89][0];
 units[89] = "102";
 comments[89] = "Id Pregunta: 10119. En cuanto recibe la direcci&oacute;n del siguiente nodo lo reenv&iacute;a.";


//  Id pregunta: 10200 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Cual de las siguientes afirmaciones es correcta respecto al estandar IEEE 802.11ac?";
 choices[90]= new Array();
 choices[90][0] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 5 GHz ampliando el ancho de banda hasta 80 MHz, usando hasta 4 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 choices[90][1] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 2,4 GHz ampliando el ancho de banda hasta 160 MHz, usando hasta 8 flujos MIMO y con modulaci&oacute;n de alta densidad (512 QAM)";
 choices[90][2] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 2,4 GHz ampliando el ancho de banda hasta 80 MHz, usando hasta 4 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 choices[90][3] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 5 GHz ampliando el ancho de banda hasta 160 MHz, usando hasta 8 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 answers[90] = choices[90][3];
 units[90] = "107";
 comments[90] = "Id Pregunta: 10200. NULL";


//  Id pregunta: 10668 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Qu&eacute; tipo de m&eacute;todo de acceso al medio es aquel en el que todos los nodos compiten por el uso del medio?";
 choices[91]= new Array();
 choices[91][0] = "Por contienda.";
 choices[91][1] = "Por contenci&oacute;n.";
 choices[91][2] = "Por paso de testigo.";
 choices[91][3] = "Por detecci&oacute;n de portadora.";
 answers[91] = choices[91][1];
 units[91] = "101";
 comments[91] = "Id Pregunta: 10668. ";


//  Id pregunta: 10919 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Si se quiere interconectar mediante fibra &oacute;ptica dos dispositivos separados a menos de 100 metros en un CPD a una velocidad de 40Gb/s, la categor&iacute;a m&iacute;nima de fibra &oacute;ptica a usar deber&iacute;a ser:";
 choices[92]= new Array();
 choices[92][0] = "OM2";
 choices[92][1] = "OM3";
 choices[92][2] = "OM4";
 choices[92][3] = "OM5";
 answers[92] = choices[92][2];
 units[92] = "103, 107";
 comments[92] = "Id Pregunta: 10919. Examen GSI 2014";


//  Id pregunta: 10992 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Respecto a los formatos de ficheros de im&aacute;genes, se&ntilde;ale la respuesta correcta:";
 choices[93]= new Array();
 choices[93][0] = "El formato de ficheros GIF utiliza un algoritmo de compresi&oacute;n sin p&eacute;rdidas hasta los 256 colores.";
 choices[93][1] = "El formato BMP es el formato t&iacute;pico usado por el sistema operativo Linux.";
 choices[93][2] = "Los archivos RAW son compatibles con los formatos TIFF y JPEG.";
 choices[93][3] = "El formato WMK es el m&aacute;s utilizado para los sistemas de grabaci&oacute;n de video.";
 answers[93] = choices[93][0];
 units[93] = "114";
 comments[93] = "Id Pregunta: 10992. TIC A1 AGE 2014";


//  Id pregunta: 11000 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  En el &aacute;mbito de la ciberseguridad, respecto de las APT (Advanced Persistent Threats), se&ntilde;ale la respuesta correcta:";
 choices[94]= new Array();
 choices[94][0] = "Una APT comprende distintas fases entre las que se encuentra la extracci&oacute;n de datos.";
 choices[94][1] = "Una APT no utiliza t&eacute;cnicas de ingenier&iacute;a social para lograr el acceso al sistema objetivo.";
 choices[94][2] = "Una APT es un conjunto de software malicioso con poca repercusi&oacute;n en el sistema objetivo y de f&aacute;cil detecci&oacute;n por las herramientas antivirus.";
 choices[94][3] = "Una APT consiste en ataques avanzados pr&oacute;ximos en el tiempo hacia objetivos generales e impersonales.";
 answers[94] = choices[94][0];
 units[94] = "111";
 comments[94] = "Id Pregunta: 11000. TIC A1 AGE 2014";


//  Id pregunta: 11235 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Respecto al Framework de Java Struts:";
 choices[95]= new Array();
 choices[95][0] = "El controlador consiste en un servlet llamado ActionServlet.";
 choices[95][1] = "No dispone  de una librer&iacute;a de etiquetas espec&iacute;fica (custom tag library).";
 choices[95][2] = " La &quot;uni&oacute;n&quot; de Struts 1 y JSF ha sido finalmente adoptada como la versi&oacute;n 2.0 de Apache Struts.";
 choices[95][3] = "No soporta internacionalizaci&oacute;n.";
 answers[95] = choices[95][0];
 units[95] = "116";
 comments[95] = "Id Pregunta: 11235. ";


//  Id pregunta: 11475 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n la Ley 9/2014, indique la respuesta CORRECTA:";
 choices[96]= new Array();
 choices[96][0] = "El MINETUR aprobar&aacute; por Real Decreto los planes nacionales de numeraci&oacute;n.";
 choices[96][1] = "El otorgamiento de derechos se har&aacute; en 3 semanas m&aacute;ximo en cualquier caso.";
 choices[96][2] = "El MINETUR podr&aacute; modificar mediante Real Decreto los planes nacionales de numeraci&oacute;n.";
 choices[96][3] = "La CNMC podr&aacute; fijar mediante circular las caracter&iacute;sticas de conservaci&oacute;n de numeraci&oacute;n.";
 answers[96] = choices[96][3];
 units[96] = "110";
 comments[96] = "Id Pregunta: 11475. ";


//  Id pregunta: 11565 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n el plan de frecuencias de las redes HFC, la banda de guarda se encuentra en el rango de:";
 choices[97]= new Array();
 choices[97][0] = "5 a 55 Mhz";
 choices[97][1] = "86 a 108 Mhz";
 choices[97][2] = "606 a 862 Mhz";
 choices[97][3] = "55 a 86 Mhz";
 answers[97] = choices[97][3];
 units[97] = "105";
 comments[97] = "Id Pregunta: 11565. NULL";


//  Id pregunta: 11573 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Se&ntilde;ale la respuesta incorrecta sobre ADSL 2";
 choices[98]= new Array();
 choices[98][0] = "Emplea un ancho de banda mayor que el ADSL original";
 choices[98][1] = "Puede emplear varias l&iacute;neas telef&oacute;nicas para un &uacute;nica comunicaci&oacute;n";
 choices[98][2] = "Est&aacute; basado en la tecnolog&iacute;a STTH";
 choices[98][3] = "Puede emplear el ancho de banda para telefon&iacute;a obteniendo un amayor velocidad de transmisi&oacute;n de datos.";
 answers[98] = choices[98][2];
 units[98] = "107";
 comments[98] = "Id Pregunta: 11573. NULL";


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


