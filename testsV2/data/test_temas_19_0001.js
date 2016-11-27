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

//  Id pregunta: 1495 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Cuando la transmisi&oacute;n de datos entre dos sistemas se caracteriza por llevar un bit de comienzo y un bit de parada, separando a cada unidad de informaci&oacute;n, se trata de:";
 choices[0]= new Array();
 choices[0][0] = "Comunicaci&oacute;n s&iacute;ncrona";
 choices[0][1] = "Comunicaci&oacute;n as&iacute;ncrona";
 choices[0][2] = "Comunicaci&oacute;n semiduplex (half-duplex)";
 choices[0][3] = "Comunicaci&oacute;n duplex (full-duplex)";
 answers[0] = choices[0][1];
 units[0] = "100";
 comments[0] = "Id Pregunta: 1495. *: transmision datos";


//  Id pregunta: 2962 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Qu&eacute; es falso respecto a Network Address Translation:";
 choices[1]= new Array();
 choices[1][0] = "Opera en el nivel de red";
 choices[1][1] = "Realiza cambios en la direcci&oacute;n del paquete TCP";
 choices[1][2] = "Realiza cambios en la direcci&oacute;n del paquete IP";
 choices[1][3] = "Realiza cambios en el puerto origen del paquete TCP";
 answers[1] = choices[1][1];
 units[1] = "100";
 comments[1] = "Id Pregunta: 2962. Tanenbaum. Para evitar la ambig&uuml;edad, para los protocolos TCP y UDP, se cambian os n&uacute;meros de puerto as&iacute; como la combinaci&oacute;n de la informaci&oacute;n de IP y puerto en el paquete devuelto.";


//  Id pregunta: 2967 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  El sistema cableado del tipo conocido como de Par Trenzado sin Apantallar es:";
 choices[2]= new Array();
 choices[2][0] = "STP";
 choices[2][1] = "UTP";
 choices[2][2] = "FTP";
 choices[2][3] = "OM1";
 answers[2] = choices[2][1];
 units[2] = "99";
 comments[2] = "Id Pregunta: 2967. NULL";


//  Id pregunta: 2997 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa en relaci&oacute;n al protocolo IPv6?";
 choices[3]= new Array();
 choices[3][0] = "Maneja direcciones de 16 bytes";
 choices[3][1] = "La cabecera del protocolo se ha ampliado respecto a la de IPv4";
 choices[3][2] = "Incluye funciones de autenticaci&oacute;n";
 choices[3][3] = "Incluye funciones de encriptaciones";
 answers[3] = choices[3][1];
 units[3] = "100";
 comments[3] = "Id Pregunta: 2997. Aunque la cabecera IPv6 tiene mayor tama&ntilde;o, los campos menos utilizados de IP v4 se han movido a OPCIONES";


//  Id pregunta: 3064 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En los dispositivos de red se utiliza el 'buffering' para:";
 choices[4]= new Array();
 choices[4][0] = "Almacenar temporalmente los datos recibidos hasta que puedan ser procesados";
 choices[4][1] = "Informar al origen del tr&aacute;fico de que deber&iacute;a usarse control de flujo";
 choices[4][2] = "Emitir el ACK de las tranmisiones que se han recibido";
 choices[4][3] = "Impedir que los dispositivos fuente (emisores) transmitan datos a menos que se les pida expl&iacute;citamente";
 answers[4] = choices[4][0];
 units[4] = "100";
 comments[4] = "Id Pregunta: 3064. NULL";


//  Id pregunta: 3068 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Indique cu&aacute;l de las opciones refleja m&aacute;s adecuadamente las caracter&iacute;sticas de un cable coaxial:";
 choices[5]= new Array();
 choices[5][0] = "Un cable coaxial es un medio de transmisi&oacute;n constituido por dos hilos conductores aislados entre si y dispuestos de forma paralela a lo largo de todo su recorrido";
 choices[5][1] = "Un cable coaxial est&aacute; constituido por dos hilos conductores paralelos aislados y recubiertos por una l&aacute;mina conductora";
 choices[5][2] = "Un cable coaxial est&aacute; constituido por un hilo conductor central rodeado de una lamina conductora conc&eacute;ntrica con &eacute;l y separado por un medio aislante";
 choices[5][3] = "Un cable coaxial est&aacute; constituido por un conjunto de conductores aislados entre si y torsionados sobre ellos mismos en grupos de cuatro, encerrados todos ellos por una lamina o cubierta conductora";
 answers[5] = choices[5][2];
 units[5] = "99";
 comments[5] = "Id Pregunta: 3068. ";


//  Id pregunta: 3096 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Una Bridge CA:";
 choices[6]= new Array();
 choices[6][0] = "Es un dispositivo de nivel 3 (Red) en el modelo OSI, que se encarga de unir 2 redes, en este caso, una inalambrica y una terrestre";
 choices[6][1] = "Es un dispositivo de nivel 2 (Enlace) en el modelo OSI, que se encarga de unir 2 redes, en este caso, una inalambrica y una terrestre";
 choices[6][2] = "Es una autoridad de certificaci&oacute;n que tiene certificados cruzados con otras muchas CA, pero que no expide certificados, simplemente vale para hacer que los de las otras CA sean interoperables entre si";
 choices[6][3] = "Todas son falsas";
 answers[6] = choices[6][2];
 units[6] = "102";
 comments[6] = "Id Pregunta: 3096. ";


//  Id pregunta: 3131 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de estas afirmaciones es cierta para una red de conmutaci&oacute;n de circuitos?:";
 choices[7]= new Array();
 choices[7][0] = "No es necesario establecer una llamada";
 choices[7][1] = "Una vez establecida la llamada es posible establecer otra llamada por el mismo circuito";
 choices[7][2] = "Una vez establecida la llamada no es posible establecer otra llamada por el mismo circuito";
 choices[7][3] = "No existe ning&uacute;n tipo de encaminamiento";
 answers[7] = choices[7][2];
 units[7] = "101";
 comments[7] = "Id Pregunta: 3131. ";


//  Id pregunta: 3139 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de IPv6 es correcta?:";
 choices[8]= new Array();
 choices[8][0] = "Existe una cabecera principal y cabeceras de extensi&oacute;n";
 choices[8][1] = "La cabecera se ha complicado y ha crecido bastante, al tener que incorporar algunos elementos como la seguridad y el esquema de direccionamiento extendido. El tama&ntilde;o ahora es de 64 bytes frente a los 20 bytes de IPv4";
 choices[8][2] = "Las nuevas direcciones tienen 20 bytes";
 choices[8][3] = "Todas son incorrectas";
 answers[8] = choices[8][0];
 units[8] = "100";
 comments[8] = "Id Pregunta: 3139. NULL";


//  Id pregunta: 3141 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes afirmaciones corresponde a funciones o caracter&iacute;sticas de equipos repetidores?:";
 choices[9]= new Array();
 choices[9][0] = "Operan a nivel de LLC, pudiendo usarse para la interconexi&oacute;n de LANs heterog&eacute;neas de nivel 1 y 2 de OSI";
 choices[9][1] = "Operan a nivel 1 de OSI, pudiendo usarse para conectar diferentes tipos de medio f&iacute;sico";
 choices[9][2] = "Pueden analizar direcci&oacute;n de origen y destino, efectuando funciones de filtrado, pero sobre medios f&iacute;sicos homog&eacute;neos";
 choices[9][3] = "Permiten aislar los diferentes segmentos separando el tr&aacute;fico de cada uno";
 answers[9] = choices[9][1];
 units[9] = "101, 102";
 comments[9] = "Id Pregunta: 3141. ";


//  Id pregunta: 3149 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto al modelo OSI de ISO?";
 choices[10]= new Array();
 choices[10][0] = "El modelo no especifica relaci&oacute;n de ning&uacute;n tipo ni con lenguajes de programaci&oacute;n ni con sistemas operativos";
 choices[10][1] = "El modelo no contempla aspectos relativos a los interfaces de la aplicaci&oacute;n ni a los usuarios";
 choices[10][2] = "El modelo describe el comportamiento externo y la estructura interna de los sistemas ";
 choices[10][3] = "Todas las respuestas anteriores son falsas";
 answers[10] = choices[10][2];
 units[10] = "100";
 comments[10] = "Id Pregunta: 3149. NULL";


//  Id pregunta: 3172 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes funciones no corresponde al nivel de transporte?:";
 choices[11]= new Array();
 choices[11][0] = "Dividir en fragmentos mas peque&ntilde;os la informaci&oacute;n que acepta del nivel de sesi&oacute;n, y pasarlos al nivel de red";
 choices[11][1] = "Asegurar el trasvase de informaci&oacute;n entre los 2 extremos de la comunicaci&oacute;n";
 choices[11][2] = "Permitir la comunicaci&oacute;n simult&aacute;nea de varias sesiones de trabajo";
 choices[11][3] = "Transportar la informaci&oacute;n entre nodos de conmutaci&oacute;n conectados directamente entre si";
 answers[11] = choices[11][3];
 units[11] = "100";
 comments[11] = "Id Pregunta: 3172. NULL";


//  Id pregunta: 3228 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes no es un protocolo del nivel de aplicaci&oacute;n del modelo OSI?:";
 choices[12]= new Array();
 choices[12][0] = "X.400";
 choices[12][1] = "FTAM";
 choices[12][2] = "X.500  ";
 choices[12][3] = "X.25";
 answers[12] = choices[12][3];
 units[12] = "100";
 comments[12] = "Id Pregunta: 3228. X.25 no pertenece al modelo OSI";


//  Id pregunta: 3234 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes protocolos no pertenece a la capa de aplicaci&oacute;n en la arquitectura TCP/IP?:";
 choices[13]= new Array();
 choices[13][0] = "SLIP";
 choices[13][1] = "SMTP";
 choices[13][2] = "DNS";
 choices[13][3] = "RPC";
 answers[13] = choices[13][0];
 units[13] = "100, 106, 116, 112";
 comments[13] = "Id Pregunta: 3234. ";


//  Id pregunta: 3249 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;les de las siguientes afirmaciones corresponde a funciones o caracter&iacute;sticas de equipos puentes (bridges)?:";
 choices[14]= new Array();
 choices[14][0] = "Analizan la direcci&oacute;n destino del MAC (nivel 2 de OSI), pudiendo efectuar funciones de aprendizaje, filtrado y reenv&iacute;o";
 choices[14][1] = "Pueden interconectar redes tipo 802 que usan niveles 1 y 2 de OSI diferentes, pero no son transparentes a los protocolos de niveles superiores";
 choices[14][2] = "Su rendimiento (medido en paquetes/segundo) es menor que el de los equipos encaminadores (routers)";
 choices[14][3] = "Operan a nivel 3 de OSI, por lo que realizan funciones de filtrado, aislando el tr&aacute;fico de los segmentos conectados";
 answers[14] = choices[14][0];
 units[14] = "102";
 comments[14] = "Id Pregunta: 3249. ";


//  Id pregunta: 3263 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;D&oacute;nde se define el punto de referencia R en RDSI?:";
 choices[15]= new Array();
 choices[15][0] = "Entre el ET2 (Equipo terminal de tipo 2) y el adaptador de terminales";
 choices[15][1] = "Entre el ET1 (Equipo terminal de tipo 1) y el adaptador de terminales";
 choices[15][2] = "Entre el TR1 y el TR2";
 choices[15][3] = "Entre el equipo de usaurio y el TR2 o TR1 cuando no hay TR2";
 answers[15] = choices[15][0];
 units[15] = "103";
 comments[15] = "Id Pregunta: 3263. ";


//  Id pregunta: 3267 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;En qu&eacute; consiste el denominado MAC - Control de acceso al medio?:";
 choices[16]= new Array();
 choices[16][0] = "Es el protocolo de aplicaciones usado en redes punto a punto";
 choices[16][1] = "Es un mecanismo de seguridad en redes de comunicaciones para controlar el acceso a la informaci&oacute;n";
 choices[16][2] = "Es un subnivel del nivel de enlace de datos encargado de regular el acceso al medio de transmisi&oacute;n";
 choices[16][3] = "Es el mecanismo de transmisi&oacute;n espec&iacute;fico de las redes Ethernet";
 answers[16] = choices[16][2];
 units[16] = "100";
 comments[16] = "Id Pregunta: 3267. ";


//  Id pregunta: 3276 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Qu&eacute; afirmaci&oacute;n de las siguientes respecto del funcionamiento de TCP/IP no es cierta?";
 choices[17]= new Array();
 choices[17][0] = "Los routers no mantienen estado de las posibles conexiones extremo a extremo, y a nivel de red no existe el concepto de conexi&oacute;n";
 choices[17][1] = "Los paquetes entre un mismo par &lt;origen, destino&gt;, una vez seleccionada la ruta adecuada, deben seguir la misma ruta hasta el final de la transmisi&oacute;n";
 choices[17][2] = "No se garantiza capacidad m&iacute;nima, ni retardo m&aacute;ximo, ni variaciones acotadas de los retardos";
 choices[17][3] = "No se garantiza la entrega ni el orden de entrega, aunque s&iacute; la integridad del segmento";
 answers[17] = choices[17][1];
 units[17] = "100";
 comments[17] = "Id Pregunta: 3276. ";


//  Id pregunta: 3279 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Qu&eacute; elemento de la especificaci&oacute;n de RDSI ser&iacute;a una centralita digital de abonado?:";
 choices[18]= new Array();
 choices[18][0] = "Un TR1";
 choices[18][1] = "Un TR2";
 choices[18][2] = "RDSI no contempla el concepto de central de abonado, por lo que esta ser&iacute;a un equipo terminal (ET1) m&aacute;s";
 choices[18][3] = "RDSI no contempla el concepto de central de abonado, por lo que esta ser&iacute;a un equipo terminal (ET2) m&aacute;s";
 answers[18] = choices[18][1];
 units[18] = "103";
 comments[18] = "Id Pregunta: 3279. ";


//  Id pregunta: 3296 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  &iquest;Qu&eacute; mecanismo de acceso al medio utiliza una red Token Ring?:";
 choices[19]= new Array();
 choices[19][0] = "Interrogaci&oacute;n y respuesta (Polling Selecting)";
 choices[19][1] = "Paso de testigo";
 choices[19][2] = "CSMA/CD";
 choices[19][3] = "DQDB";
 answers[19] = choices[19][1];
 units[19] = "100";
 comments[19] = "Id Pregunta: 3296. NULL";


//  Id pregunta: 3300 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  &iquest;Qu&eacute; nos dice el teorema del muestreo o teorema de Nyquist?:";
 choices[20]= new Array();
 choices[20][0] = "Que la frecuencia de muestreo debe ser mayor o igual que el doble del ancho de banda m&aacute;ximo de la se&ntilde;al para evitar p&eacute;rdidas en la transmisi&oacute;n (recuperar la se&ntilde;al exacta sin distorsi&oacute;n)";
 choices[20][1] = "Que la frecuencia de muestreo debe ser menor o igual que el doble del ancho de banda m&aacute;ximo de la se&ntilde;al para evitar p&eacute;rdidas en la transmisi&oacute;n (recuperar la se&ntilde;al exacta sin distorsi&oacute;n)";
 choices[20][2] = "Que la frecuencia de muestreo debe ser mayor o igual que el triple del ancho de banda m&aacute;ximo de la se&ntilde;al para evitar p&eacute;rdidas en la transmisi&oacute;n (recuperar la se&ntilde;al exacta sin distorsi&oacute;n)";
 choices[20][3] = "Que la frecuencia de muestreo debe ser mayor o igual que el cu&aacute;druple del ancho de banda m&aacute;ximo de la se&ntilde;al para evitar p&eacute;rdidas en la transmisi&oacute;n (recuperar la se&ntilde;al exacta sin distorsi&oacute;n)";
 answers[20] = choices[20][0];
 units[20] = "99";
 comments[20] = "Id Pregunta: 3300. NULL";


//  Id pregunta: 3355 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  De las siguientes funciones, &iquest;cu&aacute;l no es propia del protocolo de nivel de red?:";
 choices[21]= new Array();
 choices[21][0] = "Conmutaci&oacute;n";
 choices[21][1] = "Encaminamiento";
 choices[21][2] = "Multiplexaci&oacute;n";
 choices[21][3] = "Tarificaci&oacute;n";
 answers[21] = choices[21][3];
 units[21] = "100";
 comments[21] = "Id Pregunta: 3355. NULL";


//  Id pregunta: 3378 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  El hacer subredes (subnetting) en redes IP permite:";
 choices[22]= new Array();
 choices[22][0] = "Un esquema de direccionamiento jer&aacute;rquico que mejora la flexibilidad de la red";
 choices[22][1] = "Al administrador de la red, obtener m&aacute;s direcciones de una direcci&oacute;n dada IP";
 choices[22][2] = "Que el 'mundo exterior' conozca mejor la estructura interna de nuestra red";
 choices[22][3] = "Que nuestra red pueda formar parte del www";
 answers[22] = choices[22][0];
 units[22] = "100";
 comments[22] = "Id Pregunta: 3378. NULL";


//  Id pregunta: 3390 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  El nivel de enlace del modelo de referencia OSI:";
 choices[23]= new Array();
 choices[23][0] = "Determina cu&aacute;ntos y por donde son enviados los paquetes desde la fuente al destino";
 choices[23][1] = "Resuelve los problemas planteados por la falta de fiabilidad de los circuitos";
 choices[23][2] = "Se mantiene a la escucha por si el emisor env&iacute;a alg&uacute;n mensaje. Posteriormente determina cu&aacute;l es el destinatario del mismo";
 choices[23][3] = "Se asegura de que todos los caminos posibles entre el emisor y el receptor est&aacute;n operativos";
 answers[23] = choices[23][1];
 units[23] = "100";
 comments[23] = "Id Pregunta: 3390. NULL";


//  Id pregunta: 3411 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Funciones como contabilidad, enrutamiento, control de flujo, control de congesti&oacute;n o direccionamiento pertenecen al:";
 choices[24]= new Array();
 choices[24][0] = "nivel de transporte";
 choices[24][1] = "nivel de enlace";
 choices[24][2] = "nivel de red";
 choices[24][3] = "son funciones presentes en varios niveles";
 answers[24] = choices[24][3];
 units[24] = "100";
 comments[24] = "Id Pregunta: 3411. NULL";


//  Id pregunta: 3423 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Indicar entre las siguientes normas del IEEE la que trata sobre &lsquo;Demand Priority Access Method&rsquo;:";
 choices[25]= new Array();
 choices[25][0] = "802.10";
 choices[25][1] = "802.11";
 choices[25][2] = "802.12";
 choices[25][3] = "802.13";
 answers[25] = choices[25][2];
 units[25] = "101";
 comments[25] = "Id Pregunta: 3423. ";


//  Id pregunta: 3434 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Indique cu&aacute;l de las siguientes informaciones sobre la interconexi&oacute;n de redes locales desde el punto de vista del hardware es correcta:";
 choices[26]= new Array();
 choices[26][0] = "Las funciones del Enrutador consiste en compatibilizar dos medios de transmisi&oacute;n a nivel f&iacute;sico";
 choices[26][1] = "Los Repetidores operan posibilitando la conexi&oacute;n de elementos de red a nivel de enlace dentro del subnivel MAC (Medium Access Control)";
 choices[26][2] = "El Puente compatibiliza elementos de dos redes locales a nivel de red";
 choices[26][3] = "Las Pasarelas operan a nivel de transporte o en niveles superiores";
 answers[26] = choices[26][3];
 units[26] = "102";
 comments[26] = "Id Pregunta: 3434. ";


//  Id pregunta: 3436 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  El primer paso para establecer conexiones sobre un enlace PPP conlleva:";
 choices[27]= new Array();
 choices[27][0] = "El nodo iniciador PPP env&iacute;a un mensaje de inicio de sesi&oacute;n a su vecino PPP m&aacute;s cercano";
 choices[27][1] = "Antes de la activaci&oacute;n del enlace PPP, los routers a lo largo del path negocian las facilidades de autentificaci&oacute;n";
 choices[27][2] = "Los nodos PPP se anuncian para obtenci&oacute;n din&aacute;mica de direcci&oacute;n o preguntan a los servidores para uqe se les asigne una direcci&oacute;n";
 choices[27][3] = "El nodo iniciador envia tramas LCP (Link Control Protocol) para configurar el enlace de datos";
 answers[27] = choices[27][3];
 units[27] = "101";
 comments[27] = "Id Pregunta: 3436. ";


//  Id pregunta: 3449 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  El protocolo en que est&aacute;n basados los niveles inferiores del modelo OSI de la ISO es:";
 choices[28]= new Array();
 choices[28][0] = "SDLC";
 choices[28][1] = "EBCDIC";
 choices[28][2] = "HDLC";
 choices[28][3] = "X.400";
 answers[28] = choices[28][2];
 units[28] = "100";
 comments[28] = "Id Pregunta: 3449. NULL";


//  Id pregunta: 3477 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  El tiempo que tarda un terminal en poner una trama en la red:";
 choices[29]= new Array();
 choices[29][0] = "En las redes Ethernet no depende de la ocupaci&oacute;n de su segmento de red";
 choices[29][1] = "Es mejor en una red Token Ring que en una Ethernet si la red est&aacute; muy cargada";
 choices[29][2] = "No tiene cota m&aacute;xima en una red Token Bus";
 choices[29][3] = "Tiene una cota m&aacute;xima en una red Ethernet";
 answers[29] = choices[29][1];
 units[29] = "101";
 comments[29] = "Id Pregunta: 3477. ";


//  Id pregunta: 3517 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  En el tipo de conmutaci&oacute;n de paquetes conocido como datagrama:";
 choices[30]= new Array();
 choices[30][0] = "Los paquetes no han de llegar ordenados";
 choices[30][1] = "Se establece un enlace l&oacute;gico entre emisor y receptor";
 choices[30][2] = "Los mensajes no se trocean";
 choices[30][3] = "Los paquetes han de llegar ordenados";
 answers[30] = choices[30][0];
 units[30] = "101";
 comments[30] = "Id Pregunta: 3517. ";


//  Id pregunta: 3522 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  En funci&oacute;n del &aacute;rea geogr&aacute;fica que cubran y de sus caracter&iacute;sticas, se puede decir:";
 choices[31]= new Array();
 choices[31][0] = "Las redes de comunicaci&oacute;n se dividen en LAN (&aacute;rea local) y WAN (&aacute;rea extendida)";
 choices[31][1] = "Las redes WAN ofrecen bajas tasas de error";
 choices[31][2] = "En una red LAN los costes derivados del uso de la red pueden depender del tr&aacute;fico";
 choices[31][3] = "Las redes WAN pueden almacenar datos y despu&eacute;s enviarlos";
 answers[31] = choices[31][3];
 units[31] = "101";
 comments[31] = "Id Pregunta: 3522. ";


//  Id pregunta: 3528 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  En la provisi&oacute;n de conexi&oacute;n del nivel de transporte al nivel de sesi&oacute;n del modelo OSI:";
 choices[32]= new Array();
 choices[32][0] = "Es posible el soporte simult&aacute;neo de varias conexiones de sesi&oacute;n por una sola conexi&oacute;n de transporte";
 choices[32][1] = "Una conexi&oacute;n de sesi&oacute;n no puede ser soportada por varias conexiones de transporte secuencialmente";
 choices[32][2] = "No es posible el soporte secuencial de varias conexiones de sesi&oacute;n por una de transporte";
 choices[32][3] = "Una sola conexi&oacute;n de sesi&oacute;n puede ser soportada por varias conexiones de transporte secuencialmente";
 answers[32] = choices[32][3];
 units[32] = "100";
 comments[32] = "Id Pregunta: 3528. NULL";


//  Id pregunta: 3550 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  En redes MAN, protocolo DQDB, se cumple que:";
 choices[33]= new Array();
 choices[33][0] = "Las celdas tienen longitud de 53 bytes";
 choices[33][1] = "Es compatible con ATM";
 choices[33][2] = "Tienen una carga &uacute;til de 48 bytes";
 choices[33][3] = "Todas las anteriores respuestas son correctas";
 answers[33] = choices[33][3];
 units[33] = "101";
 comments[33] = "Id Pregunta: 3550. ";


//  Id pregunta: 3596 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  La direcci&oacute;n IP 192.168.42.127:";
 choices[34]= new Array();
 choices[34][0] = "Es una direcci&oacute;n de la red Internet";
 choices[34][1] = "Es una direcci&oacute;n de la red Internet, clase C";
 choices[34][2] = "Es una direcci&oacute;n de una red IP privada";
 choices[34][3] = "Es una direcci&oacute;n de la red Internet, clase B";
 answers[34] = choices[34][2];
 units[34] = "100";
 comments[34] = "Id Pregunta: 3596. NULL";


//  Id pregunta: 3601 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  La distancia m&aacute;xima entre estaciones en el est&aacute;ndard 10Base5 es de:";
 choices[35]= new Array();
 choices[35][0] = "100 metros";
 choices[35][1] = "185 metros";
 choices[35][2] = "200 metros";
 choices[35][3] = "500 metros";
 answers[35] = choices[35][3];
 units[35] = "99";
 comments[35] = "Id Pregunta: 3601. ";


//  Id pregunta: 3602 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  La distancia m&aacute;xima entre estaciones en el est&aacute;ndard 10BaseT es de:";
 choices[36]= new Array();
 choices[36][0] = "100 metros";
 choices[36][1] = "185 metros";
 choices[36][2] = "200 metros";
 choices[36][3] = "500 metros";
 answers[36] = choices[36][0];
 units[36] = "99";
 comments[36] = "Id Pregunta: 3602. ";


//  Id pregunta: 3637 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  La red digital de servicios integrados (RDSI):";
 choices[37]= new Array();
 choices[37][0] = "Procede de la evoluci&oacute;n de la red telef&oacute;nica conmutada";
 choices[37][1] = "El acceso b&aacute;sico disponen de dos canales B (64 Kbit/s) que emplean conmutaci&oacute;n de paquetes";
 choices[37][2] = "El acceso desde el terminal de abonado se realiza mediante fibra &oacute;ptica";
 choices[37][3] = "El acceso b&aacute;sico no se puede utilizar para conexi&oacute;n de centralitas digitales PABX's";
 answers[37] = choices[37][0];
 units[37] = "103";
 comments[37] = "Id Pregunta: 3637. ";


//  Id pregunta: 3640 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  La RFC que contiene las especificaciones del protocolo IPv6 es:";
 choices[38]= new Array();
 choices[38][0] = "1945";
 choices[38][1] = "1884";
 choices[38][2] = "2460";
 choices[38][3] = "2584";
 answers[38] = choices[38][2];
 units[38] = "100";
 comments[38] = "Id Pregunta: 3640. NULL";


//  Id pregunta: 3655 AÃ±o de creación de pregunta: 2002-01-01
 questions[39]= "40)  Un acceso RDSI:";
 choices[39]= new Array();
 choices[39][0] = "Precisa de una instalaci&oacute;n de cable espec&iacute;fica en casa del abonado";
 choices[39][1] = "Es un servicio que se proporciona sobre el par de hilos telef&oacute;nico";
 choices[39][2] = "Precisa tener contratados 2 canales de voz";
 choices[39][3] = "Ninguna de las anteriores de las respuestas anteriores es correcta";
 answers[39] = choices[39][1];
 units[39] = "103";
 comments[39] = "Id Pregunta: 3655. ";


//  Id pregunta: 3658 AÃ±o de creación de pregunta: 2002-01-01
 questions[40]= "41)  Un conjunto de redes administradas por una entidad com&uacute;n y que comparten una estrategia com&uacute;n de encaminamiento se conoce en la terminolog&iacute;a ISO como:";
 choices[40]= new Array();
 choices[40][0] = "Una LAN (RAL)";
 choices[40][1] = "Un &aacute;rea";
 choices[40][2] = "Un sistema aut&oacute;nomo";
 choices[40][3] = "Un dominio";
 answers[40] = choices[40][2];
 units[40] = "102";
 comments[40] = "Id Pregunta: 3658. ";


//  Id pregunta: 3675 AÃ±o de creación de pregunta: 2002-01-01
 questions[41]= "42)  Una palabra muy usada cuando hablamos de velocidades de transmisi&oacute;n es 'baudio' que se define como:";
 choices[41]= new Array();
 choices[41][0] = "La velocidad de cambios de se&ntilde;alizaci&oacute;n por segundo en un canal";
 choices[41][1] = "N&uacute;mero de bits por segundo transmitidos por un canal";
 choices[41][2] = "Cambios de frecuencia por segundo en la se&ntilde;al por un canal";
 choices[41][3] = "Todas las respuestas anteriores son ciertas";
 answers[41] = choices[41][0];
 units[41] = "99";
 comments[41] = "Id Pregunta: 3675. ";


//  Id pregunta: 3729 AÃ±o de creación de pregunta: 2002-01-01
 questions[42]= "43)  Los m&oacute;dems usan t&eacute;cnicas de modulaci&oacute;n para transmitir datos sobre las l&iacute;neas telef&oacute;nicas. Indique cu&aacute;l de las siguientes no es una de estas t&eacute;cnicas:";
 choices[42]= new Array();
 choices[42][0] = "Modulaci&oacute;n de fase";
 choices[42][1] = "Modulaci&oacute;n de frecuencia";
 choices[42][2] = "Modulaci&oacute;n QAM";
 choices[42][3] = "Modulaci&oacute;n PCM";
 answers[42] = choices[42][3];
 units[42] = "99";
 comments[42] = "Id Pregunta: 3729. modems";


//  Id pregunta: 3788 AÃ±o de creación de pregunta: 2002-01-01
 questions[43]= "44)  Respecto a las normas internacionales de conmutaci&oacute;n de paquetes, es cierto que:";
 choices[43]= new Array();
 choices[43][0] = "X.75 especifica la interfaz entre DTE y DCE para terminales en modo paquete ";
 choices[43][1] = "X.29 es similar a X.28 pero para terminales de tecnolog&iacute;a posterior";
 choices[43][2] = "X.28 especifica el interfaz DTE-DCE para terminales de datos arr&iacute;tmicos";
 choices[43][3] = "X.28 especifica los procedimientos de control para circuitos internacionales";
 answers[43] = choices[43][2];
 units[43] = "103";
 comments[43] = "Id Pregunta: 3788. ";


//  Id pregunta: 3843 AÃ±o de creación de pregunta: 2002-01-01
 questions[44]= "45)  STP proporciona:";
 choices[44]= new Array();
 choices[44][0] = "Puntos de acceso s&iacute;ncronos de transferencia de datos en RDSI";
 choices[44][1] = "Conmutaci&oacute;n de mensajes entre nodos de SS7";
 choices[44][2] = "Temporizaci&oacute;n exacta en redes WDM";
 choices[44][3] = "Nada de lo anterior es cierto";
 answers[44] = choices[44][1];
 units[44] = "103";
 comments[44] = "Id Pregunta: 3843. ";


//  Id pregunta: 3847 AÃ±o de creación de pregunta: 2002-01-01
 questions[45]= "46)  Tras ser extraidos los datos por la estaci&oacute;n destino en una red  Token Ring &oacute; IEEE 802.5:";
 choices[45]= new Array();
 choices[45][0] = "Se devuelve un acuse de recibo ('acknowledgment')  antes de liberar el testigo";
 choices[45][1] = "La trama de datos circula hasta completar una vuelta entera hasta que es eliminada por la estaci&oacute;n emisora";
 choices[45][2] = "Se altera el testigo (que se convierte en una secuencia de cabecera de trama)";
 choices[45][3] = "La estaci&oacute;n a&ntilde;ade informaci&oacute;n adicional al testigo antes de retransmitir la trama";
 answers[45] = choices[45][1];
 units[45] = "101, 102";
 comments[45] = "Id Pregunta: 3847. ";


//  Id pregunta: 3871 AÃ±o de creación de pregunta: 2004-01-01
 questions[46]= "47)  HTML";
 choices[46]= new Array();
 choices[46][0] = "Define reglas para el intercambio de mensajes";
 choices[46][1] = "Permite incorporar plantillas XSL";
 choices[46][2] = "Es un lenguaje que describe c&oacute;mo se formatean los mensajes";
 choices[46][3] = "Todas son ciertas";
 answers[46] = choices[46][2];
 units[46] = "113";
 comments[46] = "Id Pregunta: 3871. Tanenbaum";


//  Id pregunta: 3932 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Cu&aacute;ntas clases de redes est&aacute;n definidas en Internet?";
 choices[47]= new Array();
 choices[47][0] = "Tres";
 choices[47][1] = "Cuatro";
 choices[47][2] = "Cinco";
 choices[47][3] = "Seis";
 answers[47] = choices[47][1];
 units[47] = "100";
 comments[47] = "Id Pregunta: 3932. Red Troncal, Redes de Proveedores de Tr&aacute;nsito y Acceso Internacional, Redes de Proveedores de Acceso Local, Redes Corporativas";


//  Id pregunta: 3945 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  El lenguaje comunmente utilizado para desarrollo de aplicaciones WAP es:";
 choices[48]= new Array();
 choices[48][0] = "WML";
 choices[48][1] = "C++";
 choices[48][2] = "Visual Basic";
 choices[48][3] = "Ninguno de los anteriores";
 answers[48] = choices[48][0];
 units[48] = "100";
 comments[48] = "Id Pregunta: 3945. ";


//  Id pregunta: 3947 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  En el modelo OSI de ISO indicar cu&aacute;l de los siguientes p&aacute;rrafos describe el nivel de Sesi&oacute;n:";
 choices[49]= new Array();
 choices[49][0] = "Proporciona el control de di&aacute;logo, con el fin de mantener un registro en la parte que est&aacute; hablando en cierto momento y proporciona facilidades en la sincronizaci&oacute;n";
 choices[49][1] = "Es una colecci&oacute;n de varios protocolos para actividades comunes, como el correo electr&oacute;nico, la transferencia de archivos y la conexi&oacute;n entre terminales remotos a las computadoras en una red";
 choices[49][2] = "Es la que se encarga de la elecci&oacute;n de la mejor ruta, conectando con orientaci&oacute;n a conexi&oacute;n o sin ella";
 choices[49][3] = "Es la que se encarga de los mecanismos de detecci&oacute;n y correcci&oacute;n de errores";
 answers[49] = choices[49][0];
 units[49] = "100";
 comments[49] = "Id Pregunta: 3947. ";


//  Id pregunta: 3948 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  En la clasificaci&oacute;n de las redes de comunicaci&oacute;n por su extensi&oacute;n no se incluye:";
 choices[50]= new Array();
 choices[50][0] = "MAN (Metropolitan Area Network";
 choices[50][1] = "LAN (Local Area Network)";
 choices[50][2] = "SAN (State Areal Network)";
 choices[50][3] = "WAN (Wide Area Network)";
 answers[50] = choices[50][2];
 units[50] = "113,101";
 comments[50] = "Id Pregunta: 3948. ";


//  Id pregunta: 3989 AÃ±o de creación de pregunta: 2006-01-01
 questions[51]= "52)  La t&eacute;cnica NAT no permite:";
 choices[51]= new Array();
 choices[51][0] = "Implementar una pasarela FTP.";
 choices[51][1] = "Optimizar el uso de direccionamiento IP p&uacute;blico.";
 choices[51][2] = "Aislar el espacio de direccionamiento p&uacute;blico del privado.";
 choices[51][3] = "Asignar direcciones din&aacute;micas para acceso a Internet.";
 answers[51] = choices[51][0];
 units[51] = "102";
 comments[51] = "Id Pregunta: 3989. ";


//  Id pregunta: 3994 AÃ±o de creación de pregunta: 2006-01-01
 questions[52]= "53)  En relaci&oacute;n a la gesti&oacute;n de red (se&ntilde;ale la falsa):";
 choices[52]= new Array();
 choices[52][0] = "Los modelos de gesti&oacute;n se pueden clasificar seg&uacute;n el grado de descentralizaci&oacute;n, el dominio, el grado de heterogeneidad y la jerarqu&iacute;a organizativa";
 choices[52][1] = "El est&aacute;ndar de OSI es SNMP (Symple Network Management Protocol)";
 choices[52][2] = "CMIP y SNMP utilizan MIB";
 choices[52][3] = "Todas son verdaderas";
 answers[52] = choices[52][1];
 units[52] = "104";
 comments[52] = "Id Pregunta: 3994. ";


//  Id pregunta: 4081 AÃ±o de creación de pregunta: 2006-01-01
 questions[53]= "54)  Un proxy o apoderado permite";
 choices[53]= new Array();
 choices[53][0] = "realizar funciones de repetidor, ocultando la m&aacute;quina solicitante";
 choices[53][1] = "disponer de una memoria temporal para almacenar las p&aacute;ginas web m&aacute;s visitadas";
 choices[53][2] = "traducir las direcciones internas a externas y viceversa";
 choices[53][3] = "Todas  las respuestas son correctas";
 answers[53] = choices[53][3];
 units[53] = "113";
 comments[53] = "Id Pregunta: 4081. ";


//  Id pregunta: 4184 AÃ±o de creación de pregunta: 2006-01-01
 questions[54]= "55)  Utilizando los 4 pares de un cable categor&iacute;a 5 puedo transmitir";
 choices[54]= new Array();
 choices[54][0] = "Gigabit ethernet";
 choices[54][1] = "2 transmisiones Fast Ethernet simultaneas";
 choices[54][2] = "Fast Ethernet";
 choices[54][3] = "todas las anteriores";
 answers[54] = choices[54][3];
 units[54] = "99";
 comments[54] = "Id Pregunta: 4184. ";


//  Id pregunta: 4189 AÃ±o de creación de pregunta: 2006-01-01
 questions[55]= "56)  Para listar las conexiones TCP/UDP abiertas en un servidor utilizo el comando";
 choices[55]= new Array();
 choices[55][0] = "ping";
 choices[55][1] = "netstat";
 choices[55][2] = "tracert o traceroute";
 choices[55][3] = "ipconfig / ifconfig";
 answers[55] = choices[55][1];
 units[55] = "100";
 comments[55] = "Id Pregunta: 4189. ";


//  Id pregunta: 4718 AÃ±o de creación de pregunta: 2007-01-01
 questions[56]= "57)  Una de las ventajas del protocolo PPP respecto al SLIP es:";
 choices[56]= new Array();
 choices[56][0] = "Permite conexiones s&iacute;ncronas y as&iacute;ncronas";
 choices[56][1] = "Permite varios protocolos de red sobre &eacute;l";
 choices[56][2] = "Permite crear redes privadas virtuales";
 choices[56][3] = "Todas las respuestas son correctas";
 answers[56] = choices[56][3];
 units[56] = "100";
 comments[56] = "Id Pregunta: 4718. Examen 2006 JCYL";


//  Id pregunta: 4730 AÃ±o de creación de pregunta: 2007-01-01
 questions[57]= "58)   Cual de las siguientes tecnolog&iacute;as no sirve para la implementaci&oacute;n de redes privadas virtuales:";
 choices[57]= new Array();
 choices[57][0] = "SSH";
 choices[57][1] = "SLIP";
 choices[57][2] = "IPSEC";
 choices[57][3] = "SSL/TLS";
 answers[57] = choices[57][1];
 units[57] = "100";
 comments[57] = "Id Pregunta: 4730. Examen 2006 JCYL";


//  Id pregunta: 4769 AÃ±o de creación de pregunta: 2007-01-01
 questions[58]= "59)  En el marco de las redes telem&aacute;ticas transeruopeas, la red s-TESTA";
 choices[58]= new Array();
 choices[58][0] = "Es la red Transversal Espa&ntilde;ola de Servicios Telem&aacute;ticos entre Administraciones, encargada de interconectar las distintas administraciones auton&oacute;micas";
 choices[58][1] = "Es una red IP aislada de Internet que interconecta las redes administrativas de los Estados miembros y de las Agencias e Instituciones europeas";
 choices[58][2] = "Es una red basada en tecnolog&iacute;a inal&aacute;mbrica, que pretende dar cobertura para el aacceso libre a Internet a todos los ciudadanos de la Uni&oacute;n Europea";
 choices[58][3] = "Ninguna de las anteriores";
 answers[58] = choices[58][1];
 units[58] = "103";
 comments[58] = "Id Pregunta: 4769. ";


//  Id pregunta: 4795 AÃ±o de creación de pregunta: 2007-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas a los protocolos de transporte TCP (Transport Control Protocol) yUDP (User Datagram Protocol) es cierta?";
 choices[59]= new Array();
 choices[59][0] = "No existe forma de determinar si un datagrama UDP se ha recibido con errores";
 choices[59][1] = "TCP no debe ser usado por aplicaciones que requieran una entrega fiable de datos";
 choices[59][2] = "TCP es un protocolo de transporte orientado a conexi&oacute;n pero no fiable, ya que se transporta sobre IP(Internet Protocol), que es un protocolo de red no fiable";
 choices[59][3] = "Si durante la transmisi&oacute;n se da&ntilde;a un datagrama, UDP lo detecta pero no lo retransmite";
 answers[59] = choices[59][3];
 units[59] = "100";
 comments[59] = "Id Pregunta: 4795. NULL";


//  Id pregunta: 4809 AÃ±o de creación de pregunta: 2007-01-01
 questions[60]= "61)  Entre las arquitecturas de redes de comunicaciones para interconexi&oacute;n de sistemas NO se encuentra:";
 choices[60]= new Array();
 choices[60][0] = "OSI (Open System Interconnection) de ISO (International Standards Organization)";
 choices[60][1] = "DNA (Digital Network Architecture), de la antigua DEC (Digital Equipment Corporation)";
 choices[60][2] = "SNA (System Network Architecture), de IBM";
 choices[60][3] = "ONS (Open Network Standard) del ITU-T (International Telecommunications Union - Telecommunications)";
 answers[60] = choices[60][3];
 units[60] = "102";
 comments[60] = "Id Pregunta: 4809. ";


//  Id pregunta: 4815 AÃ±o de creación de pregunta: 2007-01-01
 questions[61]= "62)  Un administrador de red ha de asignar direcciones IP est&aacute;ticas a los servidores en la subred 192.168.20.24/29.Teniendo en cuenta que al router se le asigna la primera de las direcciones &uacute;tiles de dicha subred, &iquest;cu&aacute;l ser&iacute;a laconfiguraci&oacute;n IP a definir en uno de los citados servidores si se le quiere reservar la &uacute;ltima direcci&oacute;n IP asignabledentro de dicho rango?";
 choices[61]= new Array();
 choices[61][0] = "Direcci&oacute;n IP: 192.168.20.31. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada:192.168.20.25";
 choices[61][1] = "Direcci&oacute;n IP: 192.168.20.254. M&aacute;scara de red: 255.255.255.0. Puerta de enlace predeterminada:192.168.20.1";
 choices[61][2] = "Direcci&oacute;n IP: 192.168.20.30. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada:192.168.20.25";
 choices[61][3] = "Direcci&oacute;n IP: 192.168.20.28. M&aacute;scara de red: 255.255.255.248 Puerta de enlace predeterminada:192.168.20.1";
 answers[61] = choices[61][2];
 units[61] = "100";
 comments[61] = "Id Pregunta: 4815. ";


//  Id pregunta: 4874 AÃ±o de creación de pregunta: 2007-01-01
 questions[62]= "63)  En el BGP (Border Gateway Protocol), se define como atributo obligatorio:";
 choices[62]= new Array();
 choices[62][0] = "La preferencia local";
 choices[62][1] = "El agregado at&oacute;mico";
 choices[62][2] = "El pr&oacute;ximo salto";
 choices[62][3] = "El agregador";
 answers[62] = choices[62][2];
 units[62] = "102";
 comments[62] = "Id Pregunta: 4874. ";


//  Id pregunta: 4970 AÃ±o de creación de pregunta: 2003-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l es el componente de SNMP que define las reglas para describir los objetos gestionados y c&oacute;mo losprotocolos sometidos a la gesti&oacute;n pueden acceder a ellos?:";
 choices[63]= new Array();
 choices[63][0] = "MIB (Management Information Base).";
 choices[63][1] = "PDU (Packet Data Unit).";
 choices[63][2] = "CMIS (Common Management Information Services).";
 choices[63][3] = "SMI (Structure of Management Information).";
 answers[63] = choices[63][3];
 units[63] = "104";
 comments[63] = "Id Pregunta: 4970. Examen TIC B 2007";


//  Id pregunta: 5035 AÃ±o de creación de pregunta: 2003-01-01
 questions[64]= "65)  Indique cu&aacute;l de las siguientes recomendaciones pertenece a las realizadas por el UIT-T:";
 choices[64]= new Array();
 choices[64][0] = "Serie X &ndash; orientadas a la transmisi&oacute;n de datos en redes anal&oacute;gicas telef&oacute;nicas.";
 choices[64][1] = "Serie V &ndash; orientadas a redes de datos y comunicaciones en sistemas abiertos";
 choices[64][2] = "Serie D &ndash; orientadas a la transmisi&oacute;n de documentos";
 choices[64][3] = "Serie I &ndash; red digital de servicios integrados";
 answers[64] = choices[64][3];
 units[64] = "99";
 comments[64] = "Id Pregunta: 5035. Examen TIC A 2007";


//  Id pregunta: 5064 AÃ±o de creación de pregunta: 2003-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes grupos de trabajo del IEEE dedica su actividad al campo de las redes de &aacute;reametropolitana?:";
 choices[65]= new Array();
 choices[65][0] = "802.3";
 choices[65][1] = "802.4";
 choices[65][2] = "802.5";
 choices[65][3] = "802.6";
 answers[65] = choices[65][3];
 units[65] = "101";
 comments[65] = "Id Pregunta: 5064. Examen TIC A 2007";


//  Id pregunta: 5156 AÃ±o de creación de pregunta: 2003-01-01
 questions[66]= "67)  En el modelo de referencia TCP/IP:";
 choices[66]= new Array();
 choices[66][0] = "No se definen las capas de sesi&oacute;n ni de aplicaci&oacute;n.";
 choices[66][1] = "No se definen las capas de red ni de sesi&oacute;n.";
 choices[66][2] = "No se definen las capas de presentaci&oacute;n ni de aplicaci&oacute;n.";
 choices[66][3] = "No se definen las capas de sesi&oacute;n ni de presentaci&oacute;n.";
 answers[66] = choices[66][3];
 units[66] = "100";
 comments[66] = "Id Pregunta: 5156. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5161 AÃ±o de creación de pregunta: 2003-01-01
 questions[67]= "68)  &iquest;Cu&aacute;ntos canales telef&oacute;nicos de voz (tipo B) soporta el Acceso RDSI Primario?";
 choices[67]= new Array();
 choices[67][0] = "2";
 choices[67][1] = "30";
 choices[67][2] = "24";
 choices[67][3] = "120";
 answers[67] = choices[67][1];
 units[67] = "103";
 comments[67] = "Id Pregunta: 5161. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5563 AÃ±o de creación de pregunta: 2003-01-01
 questions[68]= "69)  En el protoloc IPv6, &iquest;cu&aacute;l ser&iacute;a la primera cabecera adicional despu&eacute;s de la cabecera IPv6?";
 choices[68]= new Array();
 choices[68][0] = "Cualquiera, no llevan un orden determinado";
 choices[68][1] = "Cabecera salto a salto";
 choices[68][2] = "Cabecera de autenticaci&oacute;n";
 choices[68][3] = "Cabecera de encaminamiento";
 answers[68] = choices[68][1];
 units[68] = "100";
 comments[68] = "Id Pregunta: 5563. ";


//  Id pregunta: 5821 AÃ±o de creación de pregunta: 2009-01-01
 questions[69]= "70)  Con respecto a servidores y servicios que permiten conectar el entorno de las LAN con el mundo Internet, &iquest;cu&aacute;l de las afirmaciones siguientes es CIERTA para un &quot;servidor NAT&quot;?:";
 choices[69]= new Array();
 choices[69][0] = "Sirve para asignar din&aacute;micamente direcciones IP a los clientes que no las tienen asignadas est&aacute;ticamente en la configuraci&oacute;n inicial, realizando funciones de protecci&oacute;n contra ataques por reproducci&oacute;n";
 choices[69][1] = "Se utilizan para trasformar una serie de direcciones IP internas, que no pueden ser reconocidas para salir a Internet.";
 choices[69][2] = "Sirven para limitar las direcciones IP/URL&rsquo;s a las que los usuarios de la LAN de una organizaci&oacute;n pueden acceder a trav&eacute;s de Internet, garantizando integridad de los datos y autenticaci&oacute;n de origen v&iacute;a el algoritmo MD5";
 choices[69][3] = "Guardan informaci&oacute;n sobre las direcciones de los servidores (host) representativos de nombres de dominio sobre los que se tiene autorizaci&oacute;n de acceso, disponiendo de capacidad adicional para consultar informaci&oacute;n de DNS&rsquo;s que tengan los nombres de dominio y host de otros accesos que pudieran realizarse";
 answers[69] = choices[69][1];
 units[69] = "102";
 comments[69] = "Id Pregunta: 5821. MAP 2008 A1";


//  Id pregunta: 5844 AÃ±o de creación de pregunta: 2009-01-01
 questions[70]= "71)  De entre los siguientes protocolos de encaminamiento interno, indique cu&aacute;l era clasificado por CISCO como h&iacute;brido por utilizar algoritmos basados en Vector Distancia y algoritmos basados en el Estado del Enlace";
 choices[70]= new Array();
 choices[70][0] = "EIGRP (Enhanced Interior Gateway Routing Protocol)";
 choices[70][1] = "IGRP (Interior Gateway Routing Protocol)";
 choices[70][2] = "OSPF (Open Shortest Path First)";
 choices[70][3] = "RIPv2 (Routing Information Protocol ver. 2)";
 answers[70] = choices[70][0];
 units[70] = "102";
 comments[70] = "Id Pregunta: 5844. MAP 2008 A1";


//  Id pregunta: 6047 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  El programa marco de la UE para la innovaci&oacute;n y competitividad se denomina:";
 choices[71]= new Array();
 choices[71][0] = "eTEN";
 choices[71][1] = "IDA";
 choices[71][2] = "CIP";
 choices[71][3] = "Ninguna de las respuestas es correcta";
 answers[71] = choices[71][2];
 units[71] = "103";
 comments[71] = "Id Pregunta: 6047. ";


//  Id pregunta: 6482 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  &iquest;En qu&eacute; lenguaje est&aacute;n definidos los objetos gestionados en SNMP?";
 choices[72]= new Array();
 choices[72][0] = "C++";
 choices[72][1] = "ASN.1";
 choices[72][2] = "trap";
 choices[72][3] = "Java";
 answers[72] = choices[72][1];
 units[72] = "104";
 comments[72] = "Id Pregunta: 6482. Castilla La Mancha 2009";


//  Id pregunta: 6485 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  En relaci&oacute;n con la transmisi&oacute;n en frecuencias radioel&eacute;ctricas, el medio de transmisi&oacute;n influye en la propagaci&oacute;n a trav&eacute;s de un conjunto de fen&oacute;menos f&iacute;sicos &iquest;Cu&aacute;l NO es uno de ellos?";
 choices[73]= new Array();
 choices[73][0] = "Reflexi&oacute;n";
 choices[73][1] = "Dispersi&oacute;n crom&aacute;tica";
 choices[73][2] = "Difracci&oacute;n";
 choices[73][3] = "Absorci&oacute;n";
 answers[73] = choices[73][1];
 units[73] = "99";
 comments[73] = "Id Pregunta: 6485. Castilla La Mancha 2009";


//  Id pregunta: 7256 AÃ±o de creación de pregunta: 2010-01-01
 questions[74]= "75)  La funci&oacute;n de un hub es ";
 choices[74]= new Array();
 choices[74][0] = "Reenviar los paquetes en funci&oacute;n de la direcci&oacute;n MAC de destino";
 choices[74][1] = "Repetir la informaci&oacute;n que llega a un puerto por el resto de puertos";
 choices[74][2] = "Dirigir correctamente tr&aacute;fico de una red a otra";
 choices[74][3] = "Asignar diferentes preferencias a los mensajes que fluyen por la red";
 answers[74] = choices[74][1];
 units[74] = "102";
 comments[74] = "Id Pregunta: 7256. Examen TIC B 2009";


//  Id pregunta: 8378 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  La longitud de onda alrededor de la cual un medio de transmisi&oacute;n basado en fibra &oacute;ptica se dice que est&aacute; trabajando en 3&ordf; ventana es: ";
 choices[75]= new Array();
 choices[75][0] = "750 nm.";
 choices[75][1] = "820 nm.";
 choices[75][2] = "1310 nm.";
 choices[75][3] = "1550 nm.";
 answers[75] = choices[75][3];
 units[75] = "99";
 comments[75] = "Id Pregunta: 8378. Examen TIC A2 2010";


//  Id pregunta: 8656 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  En la recomendaci&oacute;n X.25, la capa f&iacute;sica en la interfaz est&aacute; definida por el protocolo:";
 choices[76]= new Array();
 choices[76][0] = "V.25";
 choices[76][1] = "V.21";
 choices[76][2] = "X.21";
 choices[76][3] = "X.24";
 answers[76] = choices[76][2];
 units[76] = "103";
 comments[76] = "Id Pregunta: 8656. Examen UPM A2 2011";


//  Id pregunta: 8658 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  En una fibra &oacute;ptica multimodo de &iacute;ndice escalonado:";
 choices[77]= new Array();
 choices[77][0] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica e inferior al del revestimiento";
 choices[77][1] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica e inferior al del revestimiento";
 choices[77][2] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica y superior al del revestimiento";
 choices[77][3] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica y superior al del revestimiento";
 answers[77] = choices[77][3];
 units[77] = "99";
 comments[77] = "Id Pregunta: 8658. Examen UPM A2 2011";


//  Id pregunta: 8872 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  HDLC define tres tipos de estaciones, dos configuraciones de enlace y tres modos de operaci&oacute;n para la transferencia de los datos. Se&ntilde;ale la respuesta correcta en relaci&oacute;n a dichas definiciones:";
 choices[78]= new Array();
 choices[78][0] = "La Configuraci&oacute;n de Enlace no Balanceada est&aacute; formada por una estaci&oacute;n primaria y una o m&aacute;s estaciones secundarias y &uacute;nicamente se permite la transmisi&oacute;n semi-duplex";
 choices[78][1] = "El modo de respuesta normal (NRM) se utiliza en la configuraci&oacute;n no balanceada";
 choices[78][2] = "El modo de respuesta as&iacute;ncrono (ARM) se utiliza en la configuraci&oacute;n balanceada.";
 choices[78][3] = "Solamente existen dos tipos de estaciones, primaria y secundaria";
 answers[78] = choices[78][1];
 units[78] = "100";
 comments[78] = "Id Pregunta: 8872. Analista Ayto. Madrid 2010";


//  Id pregunta: 8888 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;C&oacute;mo se llama la PDU de nivel 3?";
 choices[79]= new Array();
 choices[79][0] = "Paquete";
 choices[79][1] = "SPDU";
 choices[79][2] = "Trama";
 choices[79][3] = "TPDU";
 answers[79] = choices[79][0];
 units[79] = "100";
 comments[79] = "Id Pregunta: 8888. NULL";


//  Id pregunta: 8926 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  Es una caracter&iacute;stica de la fibra &oacute;ptica:";
 choices[80]= new Array();
 choices[80][0] = "Un ancho de banda de 800Mhz.";
 choices[80][1] = "Gran resistencia a interferencias y ruido.";
 choices[80][2] = "El bajo coste de su instalaci&oacute;n.";
 choices[80][3] = "La facilidad de su instalaci&oacute;n";
 answers[80] = choices[80][1];
 units[80] = "99";
 comments[80] = "Id Pregunta: 8926. Operador Ayto. Madrid 2010";


//  Id pregunta: 9334 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos NO se corresponde con un tipo de cable?";
 choices[81]= new Array();
 choices[81][0] = "UTP - Unshielded Twisted Pair.";
 choices[81][1] = "STP - Shielded Twisted Pair.";
 choices[81][2] = "US/ STP - UnShielded Screened Twisted Pair.";
 choices[81][3] = "FTP - Foiled Twisted Pair.";
 answers[81] = choices[81][2];
 units[81] = "99";
 comments[81] = "Id Pregunta: 9334. TIC_a1_ejer_AGE_2011";


//  Id pregunta: 9336 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  &iquest;Qu&eacute; conjunto de normas estandarizan los sistemas de cableado en clases?";
 choices[82]= new Array();
 choices[82][0] = "EIA/TIA 586";
 choices[82][1] = "SO/EIS DIS 11108";
 choices[82][2] = "EIA/TIA 568";
 choices[82][3] = "ISO/EIS DIS 11801";
 answers[82] = choices[82][3];
 units[82] = "99";
 comments[82] = "Id Pregunta: 9336. TIC a2 AGE 2011";


//  Id pregunta: 10042 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  De entre los siguientes, &iquest;qu&eacute; protocolo es utilizado para reservar recursos de red a una determinada aplicaci&oacute;n?";
 choices[83]= new Array();
 choices[83][0] = "RSVP ";
 choices[83][1] = "ARP";
 choices[83][2] = "802.1ar ";
 choices[83][3] = "H.264";
 answers[83] = choices[83][0];
 units[83] = "100, 109";
 comments[83] = "Id Pregunta: 10042. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10062 AÃ±o de creación de pregunta: 2010-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de los siguientes NO es un mecanismo de control de la congesti&oacute;n en redes?";
 choices[84]= new Array();
 choices[84][0] = "Cubeta con ficha.";
 choices[84][1] = "Paquetes de estrangulamiento.";
 choices[84][2] = "Control de admisi&oacute;n.";
 choices[84][3] = "Vector distancia.";
 answers[84] = choices[84][3];
 units[84] = "102";
 comments[84] = "Id Pregunta: 10062. TIC A2, libre, examen 2013";


//  Id pregunta: 10063 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes canales de acceso NO se emplea en RDSI?";
 choices[85]= new Array();
 choices[85][0] = "B ";
 choices[85][1] = "D";
 choices[85][2] = "H ";
 choices[85][3] = "I";
 answers[85] = choices[85][3];
 units[85] = "103, 109";
 comments[85] = "Id Pregunta: 10063. TIC A2, libre, Examen 2013";


//  Id pregunta: 10120 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Los enlaces por los que se env&iacute;an datos de m&aacute;s de una VLAN se denominan:";
 choices[86]= new Array();
 choices[86][0] = "M&uacute;ltiples";
 choices[86][1] = "Trunk";
 choices[86][2] = "VLAN- Link";
 choices[86][3] = "Data-Link";
 answers[86] = choices[86][1];
 units[86] = "102";
 comments[86] = "Id Pregunta: 10120. ";


//  Id pregunta: 10121 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En el encaminamiento por vector-distancia cada router:";
 choices[87]= new Array();
 choices[87][0] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos los destinos. ";
 choices[87][1] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos los destinos.";
 choices[87][2] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos sus vecinos.";
 choices[87][3] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos sus vecinos.";
 answers[87] = choices[87][0];
 units[87] = "102";
 comments[87] = "Id Pregunta: 10121. ";


//  Id pregunta: 10122 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  En el encaminamiento por estado de los enlaces cada router:";
 choices[88]= new Array();
 choices[88][0] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos los destinos. ";
 choices[88][1] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos los destinos.";
 choices[88][2] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos sus vecinos.";
 choices[88][3] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos sus vecinos.";
 answers[88] = choices[88][3];
 units[88] = "102";
 comments[88] = "Id Pregunta: 10122. ";


//  Id pregunta: 10133 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  La operaci&oacute;n TRAP de SNMP permite:";
 choices[89]= new Array();
 choices[89][0] = "Solicitar informaci&oacute;n desde el gestor";
 choices[89][1] = "Actualizar informaci&oacute;n desde el gestor al agente";
 choices[89][2] = "Enviar informaci&oacute;n desde el agente al gestor sin que la solicite";
 choices[89][3] = "Enviar informaci&oacute;n de un agente a otro";
 answers[89] = choices[89][2];
 units[89] = "104";
 comments[89] = "Id Pregunta: 10133. ";


//  Id pregunta: 10320 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de los siguientes puertos utiliza el protocolo SNMP?";
 choices[90]= new Array();
 choices[90][0] = "110";
 choices[90][1] = "119";
 choices[90][2] = "161";
 choices[90][3] = "25";
 answers[90] = choices[90][2];
 units[90] = "104";
 comments[90] = "Id Pregunta: 10320. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10447 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)   Indique la opci&oacute;n verdadera.";
 choices[91]= new Array();
 choices[91][0] = "En la jerarqu&iacute;a digital plesi&oacute;crona un E1 proporciona 4 Mbps.";
 choices[91][1] = "En la jerarqu&iacute;a digital plesi&oacute;crona un E3 proporciona 32 Mbps.";
 choices[91][2] = "En la jerarqu&iacute;a digital s&iacute;ncrona un STM1 proporciona 140 Mbps.";
 choices[91][3] = "En la jerarqu&iacute;a digital s&iacute;ncrona un STM1 proporciona 155 Mbps. ";
 answers[91] = choices[91][3];
 units[91] = "103";
 comments[91] = "Id Pregunta: 10447. Examen TIC A1 2013";


//  Id pregunta: 10890 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Indique a qu&eacute; subred pertenece la siguiente direcci&oacute;n de broadcast 95.25.46.159:";
 choices[92]= new Array();
 choices[92][0] = "95.25.30.128/27";
 choices[92][1] = "95.25.30.128/25";
 choices[92][2] = "95.25.46.128/27";
 choices[92][3] = "95.25.46.128/25";
 answers[92] = choices[92][2];
 units[92] = "100";
 comments[92] = "Id Pregunta: 10890. Examen GSI 2014";


//  Id pregunta: 10891 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n RFC 2460, se&ntilde;ale de las siguientes cabeceras IPv6 cu&aacute;l es una cabecera de extensi&oacute;n:";
 choices[93]= new Array();
 choices[93][0] = "Cabecera Siguiente.";
 choices[93][1] = "Fragmento.";
 choices[93][2] = "L&iacute;mite de Saltos.";
 choices[93][3] = "Longitud de la Carga &Uacute;til.";
 answers[93] = choices[93][1];
 units[93] = "100";
 comments[93] = "Id Pregunta: 10891. Examen GSI 2014";


//  Id pregunta: 10958 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Para la direcci&oacute;n de loopback, es correcto que:";
 choices[94]= new Array();
 choices[94][0] = "Se ha reservado una direcci&oacute;n en IPv4 (127.0.0.1) y una direcci&oacute;n en IPv6 (::127.0.0.1)";
 choices[94][1] = "Se ha reservado una direcci&oacute;n en IPv4 (127.0.0.1) y una direcci&oacute;n en IPv6 (::1)";
 choices[94][2] = "Se han reservado 256 direcciones en IPv4 (127.0.0.0/24) y 256 direcciones en IPv6 (::127.0.0.1-255)";
 choices[94][3] = "Se han reservado 16.777.214 direcciones en IPv4 (127.0.0.0/8) y una direcci&oacute;n en IPv6 (::1)";
 answers[94] = choices[94][3];
 units[94] = "100";
 comments[94] = "Id Pregunta: 10958. TIC A1 AGE 2014";


//  Id pregunta: 11176 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes Grupos de Trabajo del Comit&eacute; de Estandarizaci&oacute;n 802 permanece Activo?";
 choices[95]= new Array();
 choices[95][0] = "802.3 CSMA/CD Ethernet";
 choices[95][1] = "802.14 Redes CATV";
 choices[95][2] = "802.10 Seguridad en Est&aacute;ndares IEEE";
 choices[95][3] = "802.4 Token Bus";
 answers[95] = choices[95][0];
 units[95] = "101";
 comments[95] = "Id Pregunta: 11176. ";


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


//  Id pregunta: 11686 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Al conectar un PC a un switch se debe usar;";
 choices[97]= new Array();
 choices[97][0] = "Straight-through cable";
 choices[97][1] = "Consola";
 choices[97][2] = "Crossover cable";
 choices[97][3] = "RJ 11";
 answers[97] = choices[97][0];
 units[97] = "99";
 comments[97] = "Id Pregunta: 11686. NULL";


//  Id pregunta: 11717 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; factor determina en TCP el tama&ntilde;o de ventana? ";
 choices[98]= new Array();
 choices[98][0] = "la cantidad de datos que el destino puede procesar a la vez ";
 choices[98][1] = " el n&uacute;mero de servicios incluidos en el segmento TCP ";
 choices[98][2] = " la cantidad de datos que la fuente es capaz de enviar de una sola vez ";
 choices[98][3] = "la cantidad de datos a transmitir";
 answers[98] = choices[98][0];
 units[98] = "102";
 comments[98] = "Id Pregunta: 11717. NULL";


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


