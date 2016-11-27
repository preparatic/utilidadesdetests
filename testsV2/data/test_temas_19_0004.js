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

//  Id pregunta: 2886 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  En TESTA II, el sistema de intercambio de informaci&oacute;n de productos farmac&eacute;uticos es:";
 choices[0]= new Array();
 choices[0][0] = "el sistema CARE";
 choices[0][1] = "el sistema EUDRANET";
 choices[0][2] = "el sistema STATEL";
 choices[0][3] = "el sistema EURES";
 answers[0] = choices[0][1];
 units[0] = "103";
 comments[0] = "Id Pregunta: 2886. ";


//  Id pregunta: 2923 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  &iquest;Es posible hacer convivir varios protocolos incompatibles entre s&iacute; sobre una misma red?";
 choices[1]= new Array();
 choices[1][0] = "S&iacute;, utilizando tunneling o encapsulado de protocolos";
 choices[1][1] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia OSI";
 choices[1][2] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia TCP/IP";
 choices[1][3] = "No";
 answers[1] = choices[1][0];
 units[1] = "100";
 comments[1] = "Id Pregunta: 2923. Similar a examen TIC SS A 2003";


//  Id pregunta: 2953 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l es el m&eacute;todo de acceso del est&aacute;ndar IEEE 802.4?";
 choices[2]= new Array();
 choices[2][0] = "CSMA/CD";
 choices[2][1] = "Token bus";
 choices[2][2] = "Token Ring";
 choices[2][3] = "Aloha ranurado";
 answers[2] = choices[2][1];
 units[2] = "101, 102";
 comments[2] = "Id Pregunta: 2953. Similar a examen TIC SS A 2003";


//  Id pregunta: 2955 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l es el bit del segmento TCP que le indica al receptor que entregue los datos inmediatamente a la aplicaci&oacute;n?";
 choices[3]= new Array();
 choices[3][0] = "ACK";
 choices[3][1] = "PSH";
 choices[3][2] = "RST";
 choices[3][3] = "PUT";
 answers[3] = choices[3][1];
 units[3] = "100";
 comments[3] = "Id Pregunta: 2955. Examen TIC MAP B 2004";


//  Id pregunta: 2961 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Qu&eacute; es cierto respecto a los dispositivos britge y switch de interconexi&oacute;n de redes lcoales";
 choices[4]= new Array();
 choices[4][0] = "El switch opera en el nivel 2 y el bridge en el nivel 3 del modelo OSI";
 choices[4][1] = "Los switches se suelen emplear para interconectar servidores y los bridges para interconectar LANs";
 choices[4][2] = "Un switch pueden interconectar distintos tipos de LAN y un bridge no";
 choices[4][3] = "En los switches cada puerto forma su dominio de colisi&oacute;n propio mientras que los bridges tienen varios dominios de colisi&oacute;n por puerto.";
 answers[4] = choices[4][1];
 units[4] = "102";
 comments[4] = "Id Pregunta: 2961. Tanenbaum";


//  Id pregunta: 3059 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  El l&aacute;ser, como fuente de luz, es:";
 choices[5]= new Array();
 choices[5][0] = "Un oscilador &oacute;ptico basado en la formaci&oacute;n de una onda electromagn&eacute;tica confinada dentro de una cavidad";
 choices[5][1] = "Un rayo luminoso compuesto de ondas de diversas frecuencias";
 choices[5][2] = "Un dispositivo &oacute;ptico con ganancia interna y voltaje de ruptura ";
 choices[5][3] = "Un dispositivo utilizado para seleccionar los componentes de una se&ntilde;al de acuerdo con sus frecuencias";
 answers[5] = choices[5][0];
 units[5] = "99";
 comments[5] = "Id Pregunta: 3059. ";


//  Id pregunta: 3063 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  En las transmisiones de se&ntilde;ales el&eacute;ctricas a las perturbaciones producidas en sistemas no lineales y que consisten en la aparici&oacute;n en el receptor de nuevas componentes espectrales de segundo orden se las llama:";
 choices[6]= new Array();
 choices[6][0] = "Distorsi&oacute;n no lineal";
 choices[6][1] = "Distorsi&oacute;n lineal de segundo orden";
 choices[6][2] = "Intermodulaci&oacute;n";
 choices[6][3] = "Paradiafon&iacute;a";
 answers[6] = choices[6][2];
 units[6] = "99";
 comments[6] = "Id Pregunta: 3063. ";


//  Id pregunta: 3066 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  En una arquitectura de tres capas el acceso a  los datos corresponde a la capa de:";
 choices[7]= new Array();
 choices[7][0] = "Presentaci&oacute;n";
 choices[7][1] = "Aplicaci&oacute;n";
 choices[7][2] = "Datos";
 choices[7][3] = "En realidad las tres capas manipulan los datos";
 answers[7] = choices[7][2];
 units[7] = "113";
 comments[7] = "Id Pregunta: 3066. ";


//  Id pregunta: 3073 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  La arquitectura Internet en tres capas diferencia:";
 choices[8]= new Array();
 choices[8][0] = "Nivel de presentaci&oacute;n, de aplicaci&oacute;n y de datos";
 choices[8][1] = "Nivel de navegador, de aplicaci&oacute;n y de datos";
 choices[8][2] = "Nivel de cliente, de servidor  y de navegador";
 choices[8][3] = "Las respuestas &lsquo;a&rsquo;, &lsquo;b&rsquo; y &lsquo;c&rsquo; son falsas";
 answers[8] = choices[8][0];
 units[8] = "113";
 comments[8] = "Id Pregunta: 3073. ";


//  Id pregunta: 3074 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  La degradaci&oacute;n de la calidad de un sistema de transmisi&oacute;n se debe a las perturbaciones, se pueden distinguir varios tipos:";
 choices[9]= new Array();
 choices[9][0] = "La distorsi&oacute;n, se produce siempre en presencia de la se&ntilde;al y puede existir de dos tipos: directa e indirecta";
 choices[9][1] = "La intermodulaci&oacute;n consiste en la aparici&oacute;n en el receptor de nuevas componentes espectrales de primer orden debido a la mezcla de las componentes espectrales de la se&ntilde;al de informaci&oacute;n";
 choices[9][2] = "El ruido es un tipo de perturbaci&oacute;n de origen electromagn&eacute;tico, se consideran tres tipos : t&eacute;rmico, impulsivo y de cuantificaci&oacute;n";
 choices[9][3] = "La diafon&iacute;a produce en la funci&oacute;n de transferencia de extremo a extremo la aparici&oacute;n de frecuencias nuevas que no exist&iacute;an en la se&ntilde;al original";
 answers[9] = choices[9][2];
 units[9] = "99";
 comments[9] = "Id Pregunta: 3074. ";


//  Id pregunta: 3155 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta respecto a los dispositivos a usar en la interconexi&oacute;n de redes locales?";
 choices[10]= new Array();
 choices[10][0] = "Los hubs o concentradores se suelen usar para implementar topolog&iacute;as en estrella f&iacute;sica, pero funcionando como un anillo o como un bus l&oacute;gico";
 choices[10][1] = "Los repetidores &uacute;nicamente sirven para repetir la se&ntilde;al transmitida evitando su atenuaci&oacute;n, ampliando as&iacute; la longitud del cable que soporta la red";
 choices[10][2] = "Los puentes ayudan a resolver el problema de limitaci&oacute;n de distancias junto con el de limitaci&oacute;n del n&uacute;mero de nodos en una red";
 choices[10][3] = "Las pasarelas sirven principalmente para enlazar redes de similares caracter&iacute;sticas";
 answers[10] = choices[10][3];
 units[10] = "102";
 comments[10] = "Id Pregunta: 3155. NULL";


//  Id pregunta: 3163 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes capas del modelo OSI se encarga de establecer puntos intermedios de sincronizaci&oacute;n para evitar p&eacute;rdida de informaci&oacute;n en caso de ca&iacute;das de la comunicaci&oacute;n?:";
 choices[11]= new Array();
 choices[11][0] = "La capa de enlace";
 choices[11][1] = "La capa de red";
 choices[11][2] = "La capa de transporte";
 choices[11][3] = "La capa de sesi&oacute;n";
 answers[11] = choices[11][3];
 units[11] = "100";
 comments[11] = "Id Pregunta: 3163. NULL";


//  Id pregunta: 3247 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l es la velocidad del canal D en un acceso b&aacute;sico RDSI en Europa?:";
 choices[12]= new Array();
 choices[12][0] = "8 Kbps";
 choices[12][1] = "16 Kbps";
 choices[12][2] = "32 Kbps";
 choices[12][3] = "64 Kbps";
 answers[12] = choices[12][1];
 units[12] = "103";
 comments[12] = "Id Pregunta: 3247. ";


//  Id pregunta: 3330 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Al est&aacute;ndar de facto para la programaci&oacute;n de aplicaciones que se comunican entre ellos usando un interfaz TCP/IP se le denomina:";
 choices[13]= new Array();
 choices[13][0] = "pipes";
 choices[13][1] = "sockets";
 choices[13][2] = "sem&aacute;foros";
 choices[13][3] = "ninguno de los anteriores";
 answers[13] = choices[13][1];
 units[13] = "113";
 comments[13] = "Id Pregunta: 3330. ";


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


//  Id pregunta: 3392 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El nivel de sesi&oacute;n del modelo de referencia OSI :";
 choices[15]= new Array();
 choices[15][0] = "Permite a un usuario que la sintaxis y la sem&aacute;ntica del mensaje sea entendida por el destinatario";
 choices[15][1] = "Se encarga de coordinar aplicaciones como el correo electr&oacute;nico o la transferencia de documentos";
 choices[15][2] = "Permite a un usuario entrar en un sistema remoto y, si es necesario, transferir ficheros entre dichos sistemas";
 choices[15][3] = "Asegura que todos los fragmentos del mensaje lleguen a su destino";
 answers[15] = choices[15][2];
 units[15] = "100";
 comments[15] = "Id Pregunta: 3392. NULL";


//  Id pregunta: 3430 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Indicar la afirmaci&oacute;n incorrecta:";
 choices[16]= new Array();
 choices[16][0] = "Un Gateway (pasarelas&iacute;ncrono no permite a los usuarios de ordenadores personales acceder a grandes ordenadores (mainframes)";
 choices[16][1] = "Un Gateway SNA permite la conexi&oacute;n a grandes ordenadores con arquitectura de comunicaciones SNA (System Network Arquitecture)";
 choices[16][2] = "Un Gateway PAD X.25 permite a los usuarios de ordenadores personales acceder a grandes ordenadores (mainframes)";
 choices[16][3] = "Los Gateways est&aacute;n pensados para facilitar el acceso entre sistemas o entornos que soportan diferentes protocolos y operan en los niveles m&aacute;s altos del modelo de referencia OSI (Interconexi&oacute;n de Sistemas Abiertos)";
 answers[16] = choices[16][0];
 units[16] = "102";
 comments[16] = "Id Pregunta: 3430. ";


//  Id pregunta: 3446 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El protocolo de gesti&oacute;n SNMP opera sobre el protocolo:";
 choices[17]= new Array();
 choices[17][0] = "UDP";
 choices[17][1] = "TCP";
 choices[17][2] = "&quot;a&quot; y &quot;b&quot; son ciertas";
 choices[17][3] = "&quot;a&quot; y &quot;b&quot; son falsas";
 answers[17] = choices[17][0];
 units[17] = "104";
 comments[17] = "Id Pregunta: 3446. ";


//  Id pregunta: 3453 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  El protocolo HDLC&hellip;:";
 choices[18]= new Array();
 choices[18][0] = "Es un protocolo de nivel f&iacute;sico";
 choices[18][1] = "Es un protocolo a nivel de enlace";
 choices[18][2] = "Es un protocolo a nive de red";
 choices[18][3] = "Es un protocolo a nivel de transporte";
 answers[18] = choices[18][1];
 units[18] = "100";
 comments[18] = "Id Pregunta: 3453. NULL";


//  Id pregunta: 3456 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  El protocolo que facilita un mecanismo para asignar din&aacute;micamente las direcciones IP, en el que las direcciones pueden ser rechazadas por los clientes, es:";
 choices[19]= new Array();
 choices[19][0] = "ARP";
 choices[19][1] = "RARP";
 choices[19][2] = "RIP";
 choices[19][3] = "DHCP";
 answers[19] = choices[19][3];
 units[19] = "100";
 comments[19] = "Id Pregunta: 3456. NULL";


//  Id pregunta: 3457 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  El protocolo SDLC es:";
 choices[20]= new Array();
 choices[20][0] = "Un protocolo est&aacute;ndar OSI de nivel 2";
 choices[20][1] = "Un protocolo 'propietario' de nivel 2";
 choices[20][2] = "Un protocolo est&aacute;ndar OSI de nivel 4";
 choices[20][3] = "Un protocolo 'propietario' de nivel 4";
 answers[20] = choices[20][1];
 units[20] = "100";
 comments[20] = "Id Pregunta: 3457. NULL";


//  Id pregunta: 3467 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  El punto de referencia S del modelo RDSI es:";
 choices[21]= new Array();
 choices[21][0] = "La interfaz para terminales anal&oacute;gicos";
 choices[21][1] = "La interfaz con la l&iacute;nea de transmisi&oacute;n hacia la central p&uacute;blica";
 choices[21][2] = "La interfaz a 4 hilos para equipos RDSI";
 choices[21][3] = "La separaci&oacute;n entre las instalaciones de usuario y los equipos de transmisi&oacute;n, cuando existe TR2";
 answers[21] = choices[21][2];
 units[21] = "103";
 comments[21] = "Id Pregunta: 3467. ";


//  Id pregunta: 3498 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En el modelo de referencia OSI, el nivel de red interactua directamente con:";
 choices[22]= new Array();
 choices[22][0] = "El nivel de aplicaci&oacute;n y el nivel f&iacute;sico";
 choices[22][1] = "El nivel de transporte, el nivel de enlace, y sus niveles 'iguales' en otros sistemas";
 choices[22][2] = "El nivel de presentaci&oacute;n, el nivel de sesi&oacute;n y el usuario final";
 choices[22][3] = "Todos los niveles altos y los niveles bajos en los otros sistemas";
 answers[22] = choices[22][1];
 units[22] = "100";
 comments[22] = "Id Pregunta: 3498. NULL";


//  Id pregunta: 3500 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  En el modelo de referencia OSI, los problemas planteados por la falta de fiabilidad de los circuitos como consecuencia de errores en los datos recibidos se resuelven en:";
 choices[23]= new Array();
 choices[23][0] = "El nivel f&iacute;sico";
 choices[23][1] = "El nivel de enlace";
 choices[23][2] = "El nivel de red";
 choices[23][3] = "El nivel de transporte";
 answers[23] = choices[23][1];
 units[23] = "100";
 comments[23] = "Id Pregunta: 3500. NULL";


//  Id pregunta: 3506 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En el modo de operaci&oacute;n denominado datagrama:";
 choices[24]= new Array();
 choices[24][0] = "Trabaja en modo 'conexi&oacute;n'";
 choices[24][1] = "Requiere el establecimiento previo de un circuito f&iacute;sico o virtual";
 choices[24][2] = "Los paquetes pueden viajar por rutas diferentes";
 choices[24][3] = "Requiere equipos terminales y software m&aacute;s sencillo";
 answers[24] = choices[24][2];
 units[24] = "100";
 comments[24] = "Id Pregunta: 3506. NULL";


//  Id pregunta: 3508 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  En el nivel de enlace, usado en redes locales, el subnivel que garantiza la independencia de las caracter&iacute;sticas f&iacute;sicas del medio de transmisi&oacute;n (par trenzado, cable coaxial, fibra &oacute;ptica...) es:";
 choices[25]= new Array();
 choices[25][0] = "El MAC (Medium Access Control)";
 choices[25][1] = "El LLC (Logical Link Control)";
 choices[25][2] = "Un puente";
 choices[25][3] = "Un repetidor";
 answers[25] = choices[25][0];
 units[25] = "100";
 comments[25] = "Id Pregunta: 3508. NULL";


//  Id pregunta: 3513 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  En el protocolo IPv6:";
 choices[26]= new Array();
 choices[26][0] = "El campo 'Traffic Class' tiene 8 bits de longitud";
 choices[26][1] = "El campo 'Priority' tiene 8 bits de longitud";
 choices[26][2] = "El campo 'Header CheckSum' tiene 8 bits de longitud";
 choices[26][3] = "El campo 'TOS' indica el tipo de servicio";
 answers[26] = choices[26][0];
 units[26] = "100";
 comments[26] = "Id Pregunta: 3513. NULL";


//  Id pregunta: 3514 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  En el protocolo IPv6:";
 choices[27]= new Array();
 choices[27][0] = "El campo 'Hop Limit' es similar al TTL en IP v4";
 choices[27][1] = "Los campos de direcciones tienen 128 bits de longitud";
 choices[27][2] = "No existe ning&uacute;n campo CRC de cabecera";
 choices[27][3] = "Todas las anteriores respuestas son correctas";
 answers[27] = choices[27][3];
 units[27] = "100";
 comments[27] = "Id Pregunta: 3514. NULL";


//  Id pregunta: 3541 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  En los sistemas de conmutaci&oacute;n de paquetes:";
 choices[28]= new Array();
 choices[28][0] = "Se pueden distinguir dos tipos fundamentales : datagrama y circuito l&oacute;gico";
 choices[28][1] = "En estas redes existe un tiempo de espera producido por la sobrecarga de paquetes en algunos nodos";
 choices[28][2] = "Los tiempos de espera se reducen mediante diversas t&eacute;cnicas de encaminamiento";
 choices[28][3] = "Para evitar la congesti&oacute;n de la red se estudian las rutas &oacute;ptimas para cada par de nodos y se guardan en un nodo central";
 answers[28] = choices[28][2];
 units[28] = "101";
 comments[28] = "Id Pregunta: 3541. ";


//  Id pregunta: 3559 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  En Token Ring , un monitor activo:";
 choices[29]= new Array();
 choices[29][0] = "Transmite mensajes de monitorizaci&oacute;n a cada servidor en el anillo para facilitar el balance de carga entre ellos";
 choices[29][1] = "Espera por los mensajes de error, entonces env&iacute;a mensajes de notificaci&oacute;n para limitar (o reordenar) el tr&aacute;fico";
 choices[29][2] = "Escucha la prioridad del testigo y cuando se detecta, reserva la prioridad para la estaci&oacute;n emisora";
 choices[29][3] = "Elimina las tramas no recogidas y es el punto central de informaci&oacute;n de 'timing' para un anillo";
 answers[29] = choices[29][3];
 units[29] = "101";
 comments[29] = "Id Pregunta: 3559. ";


//  Id pregunta: 3591 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  La codificaci&oacute;n Manchester tambi&eacute;n es conocida como:";
 choices[30]= new Array();
 choices[30][0] = "C&oacute;digo NRZ polar";
 choices[30][1] = "C&oacute;digo NRZ bipolar";
 choices[30][2] = "C&oacute;digo NRZ normal";
 choices[30][3] = "C&oacute;digo bifase";
 answers[30] = choices[30][3];
 units[30] = "100";
 comments[30] = "Id Pregunta: 3591. NULL";


//  Id pregunta: 3613 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  La ITU-T ha recogido en diversas recomendaciones la forma en que un terminal as&iacute;ncrono puede acceder a una red de conmutaci&oacute;n de paquetes. El conjunto de estas normas se conoce como la triple X. Indique cual de las siguientes opciones es verdadera:";
 choices[31]= new Array();
 choices[31][0] = "La triple X est&aacute; formada por las siguientes recomendaciones: X.3 que determina la forma en que se comunica el terminal con el Ensamblador\Desensamblador de Paquetes; la X.28 que indica las facilidades del Ensamblador\Desensamblador de Paquetes; y la X.29";
 choices[31][1] = "La triple X est&aacute; formada por las siguientes recomendaciones: X.3 que indica la forma el terminal de paquetes remoto puede controlar los par&aacute;metros del Ensamblador\Desensamblador de Paquetes; la X.28 que indica las facilidades del Ensamblador\Desensamblado";
 choices[31][2] = "La triple X est&aacute; formada por las siguientes recomendaciones: X.3 que indica las facilidades del Ensamblador\Desensamblador de Paquetes; la X.28 que determina la forma en que se comunica el terminal con el Ensamblador\Desensamblador de Paquetes; y la X.29";
 choices[31][3] = "La triple X est&aacute; formada por las siguientes recomendaciones: X.25 que indica las facilidades del Ensamblador\Desensamblador de Paquetes; la X.28 que determina la forma en que se comunica el terminal  con el Ensamblador\Desensamblador de Paquetes; y la X.7";
 answers[31] = choices[31][2];
 units[31] = "101";
 comments[31] = "Id Pregunta: 3613. ";


//  Id pregunta: 3664 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Un router IP puede intercambiar tr&aacute;fico IP:";
 choices[32]= new Array();
 choices[32][0] = "Entre un interfaz Ethernet y un interfaz STM-1";
 choices[32][1] = "S&oacute;lo entre interfaces de un mismo nivel";
 choices[32][2] = "Nunca si existen m&aacute;quinas UNIX y Windows en cada una de las redes que conecta";
 choices[32][3] = "Ninguna de las anteriores";
 answers[32] = choices[32][0];
 units[32] = "102";
 comments[32] = "Id Pregunta: 3664. ";


//  Id pregunta: 3680 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Uno de los protocolos m&aacute;s populares usados en las redes Ethernet (y 802.3) es el protocolo 'spanning tree' y es usado por los puentes:";
 choices[33]= new Array();
 choices[33][0] = "Puentes transparentes";
 choices[33][1] = "Puentes 'source routing'";
 choices[33][2] = "Puentes TCP/IP";
 choices[33][3] = "Ninguno de ellos";
 answers[33] = choices[33][0];
 units[33] = "102";
 comments[33] = "Id Pregunta: 3680. ";


//  Id pregunta: 3699 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Las fibras &oacute;pticas:";
 choices[34]= new Array();
 choices[34][0] = "Presentan mayor atenuaci&oacute;n que los pares coaxiales";
 choices[34][1] = "Se necesitan efectuar conversiones O/E y O/E en los terminales emisor y receptor, respectivamente";
 choices[34][2] = "La distorsi&oacute;n multimodo se produce, sobre todo en las de &iacute;ndice gradual";
 choices[34][3] = "Son inmunes a las interferencias electromagn&eacute;ticas";
 answers[34] = choices[34][3];
 units[34] = "99";
 comments[34] = "Id Pregunta: 3699. ";


//  Id pregunta: 3707 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Las tramas son las unidades del nivel de enlace mientras que los paquetes pertenecen al nivel de:";
 choices[35]= new Array();
 choices[35][0] = "Nivel o estrato f&iacute;sico";
 choices[35][1] = "Nivel o estrato de red";
 choices[35][2] = "Nivel o estrato de sesi&oacute;n";
 choices[35][3] = "Nivel o estrato de transporte";
 answers[35] = choices[35][1];
 units[35] = "100";
 comments[35] = "Id Pregunta: 3707. NULL";


//  Id pregunta: 3739 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Los puentes transparentes:";
 choices[36]= new Array();
 choices[36][0] = "Son lo mismo que los puentes 'Source Routing'";
 choices[36][1] = "Eliminan la direcci&oacute;n origen de cada trama que reciben";
 choices[36][2] = "No existen";
 choices[36][3] = "Aprenden las direcciones MAC de cada trama recibida y las guardan temporalmente, asoci&aacute;ndolas a un puerto.";
 answers[36] = choices[36][3];
 units[36] = "99";
 comments[36] = "Id Pregunta: 3739. ";


//  Id pregunta: 3816 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  Se&ntilde;ale cu&aacute;l de los siguientes protocolos realiza asignaci&oacute;n din&aacute;mica de direcciones IP:";
 choices[37]= new Array();
 choices[37][0] = "TCP";
 choices[37][1] = "DNS";
 choices[37][2] = "WINS";
 choices[37][3] = "DHCP";
 answers[37] = choices[37][3];
 units[37] = "113";
 comments[37] = "Id Pregunta: 3816. ";


//  Id pregunta: 3826 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  Se&ntilde;ale la recomendaci&oacute;n del CCITT que permite la concatenaci&oacute;n de circuitos virtuales de redes X25 distintas:";
 choices[38]= new Array();
 choices[38][0] = "X.121";
 choices[38][1] = "X.300";
 choices[38][2] = "X.75";
 choices[38][3] = "X.31";
 answers[38] = choices[38][2];
 units[38] = "101";
 comments[38] = "Id Pregunta: 3826. ";


//  Id pregunta: 3863 AÃ±o de creación de pregunta: 2004-01-01
 questions[39]= "40)  El protocolo HTTP";
 choices[39]= new Array();
 choices[39][0] = "Obliga a los servidores a escuchar en el puerto 80";
 choices[39][1] = "Utiliza el formato MIME para las respuestas ";
 choices[39][2] = "Utiliza DNS y TCP para establecer la conexi&oacute;n con el servidor";
 choices[39][3] = "Est&aacute; basado en los comandos de Un&iacute;x";
 answers[39] = choices[39][1];
 units[39] = "113";
 comments[39] = "Id Pregunta: 3863. Tanenbaum";


//  Id pregunta: 3883 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  &iquest;De qu&eacute; manera se puede balancear una granja de servidores?";
 choices[40]= new Array();
 choices[40][0] = "Se puede utilizar un balanceador hardware si hay comunicaci&oacute;n entre los nodos de la granja";
 choices[40][1] = "Se puede utilizar  un software cargado en cada nodo para repartir la carga entre los mismos";
 choices[40][2] = "Se puede hacer el balanceo con un balanceador hardware como con un balanceador software";
 choices[40][3] = "Ninguna de las respuestas es cierta";
 answers[40] = choices[40][2];
 units[40] = "113";
 comments[40] = "Id Pregunta: 3883. ";


//  Id pregunta: 3895 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  En un sistema de cableado estructurado IEEE 802.3 en UTP, la distancia m&aacute;xima horizontal ser&aacute; de 90 metros desde la terminaci&oacute;n mec&aacute;nica del armario repartidor de planta hasta la roseta, permiti&eacute;ndose desde &eacute;sta, hasta la estaci&oacute;n de trabajo o tel&eacute;fono";
 choices[41]= new Array();
 choices[41][0] = "1,5 metros m&aacute;s.";
 choices[41][1] = "3 metros m&aacute;s.";
 choices[41][2] = "4,5 metros m&aacute;s.";
 choices[41][3] = "Una distancia tal que la longitud total de este &uacute;ltimo latiguillo y la del armario repartidor, no supere los 10 metros.";
 answers[41] = choices[41][3];
 units[41] = "99";
 comments[41] = "Id Pregunta: 3895. Junta Andaluc&iacute;a";


//  Id pregunta: 3948 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  En la clasificaci&oacute;n de las redes de comunicaci&oacute;n por su extensi&oacute;n no se incluye:";
 choices[42]= new Array();
 choices[42][0] = "MAN (Metropolitan Area Network";
 choices[42][1] = "LAN (Local Area Network)";
 choices[42][2] = "SAN (State Areal Network)";
 choices[42][3] = "WAN (Wide Area Network)";
 answers[42] = choices[42][2];
 units[42] = "113,101";
 comments[42] = "Id Pregunta: 3948. ";


//  Id pregunta: 3962 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  Ordenar los siguientes dispositivos seg&uacute;n nivel OSI a puente b gateway c router d repetidor";
 choices[43]= new Array();
 choices[43][0] = "d a c b ";
 choices[43][1] = "a b c d";
 choices[43][2] = "b c d a";
 choices[43][3] = "b a d c ";
 answers[43] = choices[43][0];
 units[43] = "100";
 comments[43] = "Id Pregunta: 3962. ";


//  Id pregunta: 3978 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Se&ntilde;ale la respuesta falsa sobre el coaxial tipo &quot;thick&quot;:";
 choices[44]= new Array();
 choices[44][0] = "Utiliza un conector BNC.";
 choices[44][1] = "Su impedancia es de 50 Ohm";
 choices[44][2] = "La longitud m&aacute;xima del segmento es de 500 m.";
 choices[44][3] = "Todas son falsas";
 answers[44] = choices[44][0];
 units[44] = "99";
 comments[44] = "Id Pregunta: 3978. ";


//  Id pregunta: 3991 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  Respecto a los protocolos de routing:";
 choices[45]= new Array();
 choices[45][0] = "El protocolo de vector distancia es de routing interno (Interior Gateway Protocol).";
 choices[45][1] = "El IS-IS es utilizado como est&aacute;ndar de Internet.";
 choices[45][2] = "OSPF utiliza &aacute;reas dentro de un sistema aut&oacute;nomo, creando jerarqu&iacute;as.";
 choices[45][3] = "Todas son falsas";
 answers[45] = choices[45][0];
 units[45] = "102";
 comments[45] = "Id Pregunta: 3991. ";


//  Id pregunta: 4076 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es cierta?";
 choices[46]= new Array();
 choices[46][0] = "El modelo en dos capas no permite la distribuci&oacute;n en dos capas diferentes el interfaz de usuario y la l&oacute;gica de negocio";
 choices[46][1] = "El modelo en 3 capas permite situar en una capa separada los datos";
 choices[46][2] = "El modelo en 3 capas permite una mayor seguridad que el modelo en 2 capas";
 choices[46][3] = "El modelo en 2 capas permite separar en una capa separada los datos";
 answers[46] = choices[46][0];
 units[46] = "113";
 comments[46] = "Id Pregunta: 4076. ";


//  Id pregunta: 4135 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  Los mensajes enviados por alguien para saber qu&eacute; servicios de la red se encuentran activos se llaman";
 choices[47]= new Array();
 choices[47][0] = "robo de bits";
 choices[47][1] = "Lenguaje de descripci&oacute;n de servicios Web (WSDL)";
 choices[47][2] = "Identificador de Perfil de Servicio (SPI)";
 choices[47][3] = "escaneo de puertos";
 answers[47] = choices[47][3];
 units[47] = "100";
 comments[47] = "Id Pregunta: 4135. ";


//  Id pregunta: 4187 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  Respecto al protocolo IP";
 choices[48]= new Array();
 choices[48][0] = "IPv6 no permite OSPF";
 choices[48][1] = "IPv4 no permite al origen de la comunicaci&oacute;n seleccionar el encaminamiento";
 choices[48][2] = "IPv6 permite al origen de la comunicaci&oacute;n seleccionar el encaminamiento";
 choices[48][3] = "ninguna de las anteriores";
 answers[48] = choices[48][2];
 units[48] = "100";
 comments[48] = "Id Pregunta: 4187. ";


//  Id pregunta: 4218 AÃ±o de creación de pregunta: 2006-01-01
 questions[49]= "50)  Las redes integradas de Datos y Voz se definen en el grupo de trabajo del IEEE";
 choices[49]= new Array();
 choices[49][0] = "802.9";
 choices[49][1] = "802.10";
 choices[49][2] = "802.11";
 choices[49][3] = "802.12";
 answers[49] = choices[49][0];
 units[49] = "101";
 comments[49] = "Id Pregunta: 4218. ";


//  Id pregunta: 4688 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de la siguientes afirmaciones es falsa?";
 choices[50]= new Array();
 choices[50][0] = " El protocolo IPv6 admite direcciones en IPv4";
 choices[50][1] = "El protocolo ARP est&aacute; en la capa de aplicaci&oacute;n";
 choices[50][2] = "Los protocolos ARP y RARP tienen funciones inversas";
 choices[50][3] = "En IP se puede indicar que un datagrama no debe ser fragmentado";
 answers[50] = choices[50][1];
 units[50] = "100";
 comments[50] = "Id Pregunta: 4688. Examen 2006 JCYL";


//  Id pregunta: 4787 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  En que lenguaje esta especificada La MIB de SNMPv2 ";
 choices[51]= new Array();
 choices[51][0] = "XML";
 choices[51][1] = "HTML";
 choices[51][2] = "ASN1";
 choices[51][3] = "Java";
 answers[51] = choices[51][2];
 units[51] = "104";
 comments[51] = "Id Pregunta: 4787. ";


//  Id pregunta: 4854 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a los dispositivos para la interconexi&oacute;n de redes de &aacute;rea local NOes cierta?";
 choices[52]= new Array();
 choices[52][0] = "Un puerto de un switch (conmutador) puede pertenecer a m&aacute;s de una VLAN (Virtual Local Area Networks)";
 choices[52][1] = "Los bridges (puentes) y los switches son capaces de aprender qu&eacute; estaciones est&aacute;n conectadas a cada unode sus puertos a partir de la direcci&oacute;n MAC (Media Access Control) de origen de las tramas emitidas pordicha estaci&oacute;n";
 choices[52][2] = "Los hubs (concentradores) de tercera generaci&oacute;n incrementan el n&uacute;mero de dominios de broadcast";
 choices[52][3] = "Un switch permite el uso eficiente del ancho de banda al crear dominios de colisi&oacute;n m&aacute;s peque&ntilde;os";
 answers[52] = choices[52][2];
 units[52] = "100";
 comments[52] = "Id Pregunta: 4854. NULL";


//  Id pregunta: 4884 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a la gesti&oacute;n de redes NO es cierta?";
 choices[53]= new Array();
 choices[53][0] = "La base de informaci&oacute;n de administraci&oacute;n (MIB) tiene una estructura de base de datos y reside en laestaci&oacute;n de monitorizaci&oacute;n";
 choices[53][1] = "Uno de los modos de monitorizaci&oacute;n de SNMP (Simple Network Management Protocol) es el de sondeo, queconsiste en la interrupci&oacute;n por parte del agente SNMP a trav&eacute;s del puerto 162 de UDP (User DatagramProtocol)";
 choices[53][2] = "SNMPv3 (SNMP version 3) introduce capacidades de seguridad frente a las versiones anteriores, tales comocontrol de acceso, autenticaci&oacute;n y privacidad";
 choices[53][3] = "RMONv2 (Remote Monitoring version 2) permite la monitorizaci&oacute;n de segmentos de redes de &aacute;rea local y elchequeo de trafico a nivel de red y aplicaci&oacute;n";
 answers[53] = choices[53][0];
 units[53] = "104";
 comments[53] = "Id Pregunta: 4884. ";


//  Id pregunta: 5566 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.17 del IEEE?";
 choices[54]= new Array();
 choices[54][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[54][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[54][2] = "Resilient Packet Ring";
 choices[54][3] = "Traspaso entre redes";
 answers[54] = choices[54][2];
 units[54] = "101";
 comments[54] = "Id Pregunta: 5566. ";


//  Id pregunta: 5571 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes opciones NO es necesaria para que una red ethernet pueda funcionar en modo d&uacute;plex completo?";
 choices[55]= new Array();
 choices[55][0] = "El medio f&iacute;sico permite la transmisi&oacute;n d&uacute;plex completa";
 choices[55][1] = "La distancia entre las dos estaciones es menor de 50 m";
 choices[55][2] = "Solo hay dos estaciones conectadas entre s&iacute;";
 choices[55][3] = "Las tarjetas de red de ambos equipos soportan el funcionamiento en modo d&uacute;plex completo";
 answers[55] = choices[55][1];
 units[55] = "102";
 comments[55] = "Id Pregunta: 5571. ";


//  Id pregunta: 5607 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Las areas funcionales definidas por ISO que todo sistema de gesti&oacute;n de red debe cubrir son:";
 choices[56]= new Array();
 choices[56][0] = "Gesti&oacute;n de Configuraci&oacute;n, Gesti&oacute;n de Fallos, Gesti&oacute;n de Prestaciones, Gesti&oacute;n de Contabilidad, Gesti&oacute;n de Seguridad";
 choices[56][1] = "Gesti&oacute;n de Configuraci&oacute;n, Gesti&oacute;n de Fallos, Gesti&oacute;n de Prestaciones, Gesti&oacute;n de Funcionalidad, Gesti&oacute;n de Seguridad";
 choices[56][2] = "Gesti&oacute;n de Configuraci&oacute;n, Gesti&oacute;n de Mantenimiento, Gesti&oacute;n de Prestaciones, Gesti&oacute;n de Funcionalidad, Gesti&oacute;n de Seguridad";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = choices[56][0];
 units[56] = "104";
 comments[56] = "Id Pregunta: 5607. ";


//  Id pregunta: 5666 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  La cl&aacute;usula 1 del Manual Europeo para las Compras P&uacute;blicas de Sistemas Abiertos (EPHOS 2) establece que:";
 choices[57]= new Array();
 choices[57][0] = "El cableado ser&aacute; conforme a EIA/TIA 568";
 choices[57][1] = "El cableado deber&aacute; estar de acuerdo con los requerimientos del Nivel F&iacute;sico especificado en IS 8802-3.";
 choices[57][2] = "El cableado ser&aacute; conforme a ISO/IEC DIS 11801";
 choices[57][3] = "El cableado deber&aacute; estar de acuerdo con los requerimientos del Nivel F&iacute;sico especificado en EN 50081-1";
 answers[57] = choices[57][2];
 units[57] = "99";
 comments[57] = "Id Pregunta: 5666. ";


//  Id pregunta: 6099 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  El teorema de Nyquist establece que el n&uacute;mero m&aacute;ximo de baudios que puede transmitirse por un canal:";
 choices[58]= new Array();
 choices[58][0] = "Puede ser superior al doble de su ancho de banda.";
 choices[58][1] = "No puede ser superior al doble de su ancho de banda.";
 choices[58][2] = "No tiene l&iacute;mite alguno.";
 choices[58][3] = "No puede ser superior al ancho de banda.";
 answers[58] = choices[58][1];
 units[58] = "99";
 comments[58] = "Id Pregunta: 6099. TIC A 2009";


//  Id pregunta: 6479 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  El dispositivo que permite la interconexi&oacute;n de redes LAN y que trabaja en el nivel 2 del modelo OSI se denomina";
 choices[59]= new Array();
 choices[59][0] = "Repetidor";
 choices[59][1] = "Puente (bridge)";
 choices[59][2] = "Pasarela (gateway)";
 choices[59][3] = "Encaminador (router)";
 answers[59] = choices[59][1];
 units[59] = "102";
 comments[59] = "Id Pregunta: 6479. Castilla La Mancha 2009";


//  Id pregunta: 8278 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes algoritmos de encaminamiento est&aacute; basado en el estado del enlace?:";
 choices[60]= new Array();
 choices[60][0] = "RIP versi&oacute;n 1.";
 choices[60][1] = "OSPF.";
 choices[60][2] = "BGP.";
 choices[60][3] = "RIP versi&oacute;n 2.";
 answers[60] = choices[60][1];
 units[60] = "102";
 comments[60] = "Id Pregunta: 8278. Examen TIC A1 2010";


//  Id pregunta: 8279 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes PDUs se a&ntilde;ade en SNMPv2 con respecto a las de SNMPv1?:";
 choices[61]= new Array();
 choices[61][0] = "Trap.";
 choices[61][1] = "GetResponse.";
 choices[61][2] = "GetBulkRequest.";
 choices[61][3] = "GetNextRequest.";
 answers[61] = choices[61][2];
 units[61] = "104";
 comments[61] = "Id Pregunta: 8279. Examen TIC A1 2010";


//  Id pregunta: 8454 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  El est&aacute;ndar de la red X.25 especifica las siguientes capas de protocolos:";
 choices[62]= new Array();
 choices[62][0] = "Capa F&iacute;sica, de enlace y de paquete";
 choices[62][1] = "Capa F&iacute;sica, de enlace y de sesi&oacute;n";
 choices[62][2] = "Capa de transporte, de sesi&oacute;n y de presentaci&oacute;n";
 choices[62][3] = "Capa f&iacute;sica, de transporte y de presentaci&oacute;n";
 answers[62] = choices[62][0];
 units[62] = "103";
 comments[62] = "Id Pregunta: 8454. Analista Ayto. Madrid 2010";


//  Id pregunta: 8476 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  En la traslaci&oacute;n del modelo OSI para su aplicaci&oacute;n a las redes de &aacute;rea local (LAN), es cierto que:";
 choices[63]= new Array();
 choices[63][0] = "El nivel de enlace se subdivide en subnivel LLC y subnivel MAC.";
 choices[63][1] = "El nivel f&iacute;sico se subdivide en subnivel LLC y subnivel MAC.";
 choices[63][2] = "Se establecen los tres niveles siguientes: nivel f&iacute;sico (que pasa a denominarse nivel LLC), nivel MAC y nivel de enlace.";
 choices[63][3] = "Los niveles f&iacute;sico y de enlace pasan de denominarse, respectivamente, nivel LLC y nivel MAC";
 answers[63] = choices[63][0];
 units[63] = "101";
 comments[63] = "Id Pregunta: 8476. Examen TIC A2 2010 interna";


//  Id pregunta: 8503 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  En IPv4 la cabecera IP tiene un campo denominado TTL (Time To Live) que indica el n&uacute;mero m&aacute;ximo de encaminadores que un paquete puede atravesar, &iquest;Cu&aacute;l es &eacute;l rango de valores que puede tomar este campo? ";
 choices[64]= new Array();
 choices[64][0] = "0-15";
 choices[64][1] = "0-255";
 choices[64][2] = "0-5";
 choices[64][3] = "0-127";
 answers[64] = choices[64][1];
 units[64] = "100";
 comments[64] = "Id Pregunta: 8503. Examen TIC A2 2010";


//  Id pregunta: 8521 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  En la planificaci&oacute;n de la capacidad de los sistemas de informaci&oacute;n, una fase fundamental es la proyecci&oacute;n. Para ello se utilizan diversas t&eacute;cnicas, entre las que se encuentra la teor&iacute;a de colas. &iquest;Qu&eacute; valor ideal deber&iacute;a tomar el llamado factor de cola?";
 choices[65]= new Array();
 choices[65][0] = "Cualquier valor negativo.";
 choices[65][1] = "Fq=0.";
 choices[65][2] = "Fq=1.";
 choices[65][3] = "Infinito.";
 answers[65] = choices[65][2];
 units[65] = "104";
 comments[65] = "Id Pregunta: 8521. Examen TIC A2 2010 interna";


//  Id pregunta: 8522 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes es un tipo de algoritmo de control de la congesti&oacute;n en redes conmutadas?";
 choices[66]= new Array();
 choices[66][0] = "Estado del enlace.";
 choices[66][1] = "Vector distancia.";
 choices[66][2] = "Inundaci&oacute;n de paquetes.";
 choices[66][3] = "Cubeta con goteo.";
 answers[66] = choices[66][3];
 units[66] = "104";
 comments[66] = "Id Pregunta: 8522. Examen TIC A2 2010 interna";


//  Id pregunta: 8524 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;nto overhead o sobrecarga genera cada paquete MPLS?";
 choices[67]= new Array();
 choices[67][0] = "4 bits.";
 choices[67][1] = "5 bits.";
 choices[67][2] = "32 bits.";
 choices[67][3] = "258 bits.";
 answers[67] = choices[67][2];
 units[67] = "100";
 comments[67] = "Id Pregunta: 8524. Examen TIC A2 2010 interna";


//  Id pregunta: 8674 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes mensajes del protocolo multicast PIM en modo disperso (PIM-SM) se env&iacute;a en modo unicast?";
 choices[68]= new Array();
 choices[68][0] = "Prune.";
 choices[68][1] = "Join.";
 choices[68][2] = "Register.";
 choices[68][3] = "Stop.";
 answers[68] = choices[68][2];
 units[68] = "101";
 comments[68] = "Id Pregunta: 8674. Examen UPM A2 2011";


//  Id pregunta: 8677 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes es una nueva entidad funcional introducida por IP M&oacute;vil (RFC 3344)?";
 choices[69]= new Array();
 choices[69][0] = "Home Agent.";
 choices[69][1] = "Agent Advertisement.";
 choices[69][2] = "Mobility Agent.";
 choices[69][3] = "Agent Discovery.";
 answers[69] = choices[69][0];
 units[69] = "100";
 comments[69] = "Id Pregunta: 8677. Examen UPM A2 2011";


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


//  Id pregunta: 8769 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  La m&aacute;xima longitud de un datagrama IP es:";
 choices[71]= new Array();
 choices[71][0] = "128 Kbytes";
 choices[71][1] = "64 Kbytes.";
 choices[71][2] = "32 Kbytes";
 choices[71][3] = "No tiene longitud m&aacute;xima";
 answers[71] = choices[71][1];
 units[71] = "100";
 comments[71] = "Id Pregunta: 8769. Examen TIC A2 2010 interna";


//  Id pregunta: 8771 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Se ha comprado una c&aacute;mara IP que requiere m&aacute;s potencia de la habitual, m&aacute;s que con la normal IEEE 802.3.af. Esta c&aacute;mara funciona con la versi&oacute;n actualizada de IEEE 802.3af y requiere POE con mayor alimentaci&oacute;n. Como se llama esta norma si es que existe:";
 choices[72]= new Array();
 choices[72][0] = "IEEE 802.3at, PoE+ o PoE Plus.";
 choices[72][1] = "IEEE 802.3ag, o PoE extendido.";
 choices[72][2] = "PoE2.";
 choices[72][3] = "No existe una actualizaci&oacute;n del standard IEEE 802.3af";
 answers[72] = choices[72][0];
 units[72] = "101";
 comments[72] = "Id Pregunta: 8771. Examen UPM A2 2011";


//  Id pregunta: 9024 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  El sistema de se&ntilde;alizaci&oacute;n SS7:";
 choices[73]= new Array();
 choices[73][0] = "Se ocupa, entre otras cosas, del establecimiento de llamada.";
 choices[73][1] = "S&oacute;lo se emplea en RDSI.";
 choices[73][2] = "Permite realizar llamadas, pero no intercambiar informaci&oacute;n de usuario.";
 choices[73][3] = "Ninguna de las anteriores";
 answers[73] = choices[73][0];
 units[73] = "103";
 comments[73] = "Id Pregunta: 9024. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9328 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;C&uacute;al de los siguientes aspectos NO se recogen en las";
 choices[74]= new Array();
 choices[74][0] = "El cableado deber&aacute; estar de acuerdo con los requerimientos de nivel f&iacute;sico de la iso 80211";
 choices[74][1] = "El cableado deber&aacute; estar de acuerdo con los requerimientos de nivel f&iacute;sico de la iso 8802";
 choices[74][2] = "Se deber&aacute; detallar la ubicaci&oacute;n de equipos activos en el cableado de backbone";
 choices[74][3] = "Se debe detallar el n&uacute;mero de z&oacute;calos del cableado horizontal";
 answers[74] = choices[74][3];
 units[74] = "99";
 comments[74] = "Id Pregunta: 9328. NULL";


//  Id pregunta: 9357 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;Qu&eacute; cable de fibra &oacute;ptica de los que se indican a continuaci&oacute;n tiene las caracter&iacute;sticas que lo identifican como un cable de fibra monomodo?";
 choices[75]= new Array();
 choices[75][0] = "Fibra 62.5/125 um";
 choices[75][1] = "Fibra 50/125 um";
 choices[75][2] = "Fibra 200/380 um ";
 choices[75][3] = "Fibra 10/125 um";
 answers[75] = choices[75][3];
 units[75] = "99";
 comments[75] = "Id Pregunta: 9357. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Promoci&oacute;n interna 2011.";


//  Id pregunta: 9363 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Una red de anillo en contienda.";
 choices[76]= new Array();
 choices[76][0] = "Nunca se pasa un testigo";
 choices[76][1] = "Lo m&aacute;s razonable es utilizar este m&eacute;todo en situaciones de demanda baja de transmisi&oacute;n.";
 choices[76][2] = "Mejora las prestaciones de la red en situaciones alta demanda de transmisi&oacute;n.";
 choices[76][3] = "Es imposible detectar las colisiones bajo este esquema de funcionamiento.";
 answers[76] = choices[76][1];
 units[76] = "101";
 comments[76] = "Id Pregunta: 9363. ";


//  Id pregunta: 9370 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  En una red metropolitana Ethernet basada en MPLS";
 choices[77]= new Array();
 choices[77][0] = "En la red del operador se transportan tramas de Ethernet sobre MPLS";
 choices[77][1] = "Las tramas de Ethernet se transportan sobre MPLS y en la red del operador se vuelve a utilizar Ethernet como tecnolog&iacute;a para el transporte de MPLS.";
 choices[77][2] = "En la salida de las diferentes redes de &aacute;rea local que componen la red metropolitana, se a&ntilde;ade una cabecera IP sobre la que se aplican las etiquetas MPLS.";
 choices[77][3] = "Ninguna de las respuestas es correcta.";
 answers[77] = choices[77][1];
 units[77] = "101";
 comments[77] = "Id Pregunta: 9370. ";


//  Id pregunta: 9706 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  El protocolo TCP es un protocolo";
 choices[78]= new Array();
 choices[78][0] = "orientado a conexi&oacute;n, fiable y de flujo estructurado.";
 choices[78][1] = "orientado a conexi&oacute;n, fiable y de flujo no estructurado.";
 choices[78][2] = "orientado a conexi&oacute;n, no fiable y de flujo no estructurado.";
 choices[78][3] = "no orientado a conexi&oacute;n, no fiable y de flujo no estructurado.";
 answers[78] = choices[78][1];
 units[78] = "100";
 comments[78] = "Id Pregunta: 9706. Examen TIC-A1 2013";


//  Id pregunta: 9934 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  En la Capa de Sesi&oacute;n (nivel 5) &iquest;cu&aacute;ntos tipos de puntos de sincronizaci&oacute;n existen?";
 choices[79]= new Array();
 choices[79][0] = "2, uno mayor y otro menor.";
 choices[79][1] = "3, mayor, mediano y menor.";
 choices[79][2] = "Ninguno.";
 choices[79][3] = "Depende del protocolo implementado.";
 answers[79] = choices[79][0];
 units[79] = "100";
 comments[79] = "Id Pregunta: 9934. NULL";


//  Id pregunta: 10031 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Indicar cu&aacute;l de las siguientes direcciones IP puede ser asignada a un host en la siguiente subred 135.26.41.80/28";
 choices[80]= new Array();
 choices[80][0] = "135.26.41.94";
 choices[80][1] = "135.26.41.95";
 choices[80][2] = "135.26.41.96 ";
 choices[80][3] = "135.26.41.97";
 answers[80] = choices[80][0];
 units[80] = "100";
 comments[80] = "Id Pregunta: 10031. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10039 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;De qu&eacute; tipo es la direcci&oacute;n de IPv6 ff00::/8?";
 choices[81]= new Array();
 choices[81][0] = "No es v&aacute;lida.";
 choices[81][1] = "Unicast.";
 choices[81][2] = "Multicast. ";
 choices[81][3] = "Loopback.";
 answers[81] = choices[81][2];
 units[81] = "100";
 comments[81] = "Id Pregunta: 10039. TIC A2, promoci&oacute;n interna y libre, examen 2013";


//  Id pregunta: 10045 AÃ±o de creación de pregunta: 2010-01-01
 questions[82]= "83)  La recomendaci&oacute;n X.25 de la ITU (International Telecommunication Union) se refiere a:";
 choices[82]= new Array();
 choices[82][0] = "Interfaz entre el equipo terminal de datos y el equipo de terminaci&oacute;n del circuito de datos para equipos terminales que funcionan en el modo paquete y est&aacute;n conectados a redes p&uacute;blicas de datos por circuitos especializados.";
 choices[82][1] = "Interfaz equipo terminal de datos/equipo de terminaci&oacute;n del circuito de datos para los equipos terminales de datos arr&iacute;tmicos con acceso a la facilidad de ensamblado/desensamblado de paquetes en una red p&uacute;blica de datos situada en elmismo pa&iacute;s.";
 choices[82][2] = "Utilizaci&oacute;n, en las redes p&uacute;blicas de datos, de equipos terminales de datos dise&ntilde;ados para su conexi&oacute;n con m&oacute;dems s&iacute;ncronos de la serie V.";
 choices[82][3] = "Interfaz entre el equipo terminal de datos y el equipo de terminaci&oacute;n del circuito de datos para funcionamiento s&iacute;ncrono en redes p&uacute;blicas de datos.";
 answers[82] = choices[82][0];
 units[82] = "103";
 comments[82] = "Id Pregunta: 10045. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10108 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Las siglas CSMA/CD significan:";
 choices[83]= new Array();
 choices[83][0] = "Carrier Sense Multiple Access with Collision Detection";
 choices[83][1] = "Carrier Sense Multiple Access with Common Data";
 choices[83][2] = "Carrier Sense Multiple Access without Collision Data";
 choices[83][3] = "Clear Sense Multiple Access with Collision Detection";
 answers[83] = choices[83][0];
 units[83] = "101";
 comments[83] = "Id Pregunta: 10108. ";


//  Id pregunta: 10124 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Un acceso b&aacute;sico RDSI tiene:";
 choices[84]= new Array();
 choices[84][0] = "30 canales B de 64 kbps y 1 canal D de 64 kbps";
 choices[84][1] = "2 canales B de 64 kbps y 1 canal D de 16 kbps";
 choices[84][2] = "30 canales B de 16 kbps y 1 canal D de 16 kbps";
 choices[84][3] = "2 canales B de 16 kbps y 1 canal D de 16 kbps";
 answers[84] = choices[84][0];
 units[84] = "103";
 comments[84] = "Id Pregunta: 10124. ";


//  Id pregunta: 10318 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;C&oacute;mo se llama la base de datos que tiene los par&aacute;metros de gesti&oacute;n de una red?";
 choices[85]= new Array();
 choices[85][0] = "MIB (Management Information Base).";
 choices[85][1] = "NMD (Network Management database).";
 choices[85][2] = "NMS (Network Management System).";
 choices[85][3] = "Ninguna de los anteriores.";
 answers[85] = choices[85][0];
 units[85] = "104";
 comments[85] = "Id Pregunta: 10318. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10538 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  En IPv6, se&ntilde;ale el prefijo empleado para direcciones link-local:";
 choices[86]= new Array();
 choices[86][0] = "fd00::/8";
 choices[86][1] = "fe00::/64";
 choices[86][2] = "fe80::/64";
 choices[86][3] = "No existen las direcciones link-local en IPv6";
 answers[86] = choices[86][2];
 units[86] = "100";
 comments[86] = "Id Pregunta: 10538. NULL";


//  Id pregunta: 10540 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Se&ntilde;ale la respuesta correcta en lo referente a la detecci&oacute;n y correcci&oacute;n de errores en telecomunicaciones";
 choices[87]= new Array();
 choices[87][0] = "CRC (C&oacute;digo de Redundancia C&iacute;clico) permite detectar y corregir errores en recepci&oacute;n";
 choices[87][1] = "un c&oacute;digo Hamming de distancia 3 permite detectar 2 errores y corregir 1";
 choices[87][2] = "Reed-Solomon solamente permite detectar errores, no corregirlos";
 choices[87][3] = "todas las anteriores son incorrectas";
 answers[87] = choices[87][1];
 units[87] = "100";
 comments[87] = "Id Pregunta: 10540. NULL";


//  Id pregunta: 10541 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Qu&eacute; cabeceras del datagrama IP son revisadas por los routers intermedios en IPv6?";
 choices[88]= new Array();
 choices[88][0] = "todas las cabeceras";
 choices[88][1] = "ninguna";
 choices[88][2] = "todas las cabeceras menos las opcionales";
 choices[88][3] = "la cabecera hop-to-hop y el resto de cabeceras menos las cabeceras opcionales";
 answers[88] = choices[88][3];
 units[88] = "100";
 comments[88] = "Id Pregunta: 10541. NULL";


//  Id pregunta: 10882 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Tama&ntilde;o destinado en una trama b&aacute;sica Ethernet (IEEE 802.3-2012) para el payload:";
 choices[89]= new Array();
 choices[89][0] = "Tiene un m&iacute;nimo de 64 Bytes hasta un m&aacute;ximo de 1500 Bytes.";
 choices[89][1] = "Tiene un m&iacute;nimo de 16 Bytes hasta un m&aacute;ximo de 1000 Bytes.";
 choices[89][2] = "Tiene un m&iacute;nimo de 46 Bytes hasta un m&aacute;ximo de 1500 Bytes.";
 choices[89][3] = "Tiene un m&iacute;nimo de 32 Bytes hasta un m&aacute;ximo de 1000 Bytes.";
 answers[89] = choices[89][2];
 units[89] = "100";
 comments[89] = "Id Pregunta: 10882. Examen GSI 2014";


//  Id pregunta: 10914 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  En un escenario de movilidad IP &iquest;de qu&eacute; se encarga el Agente Base (Home Agent)?";
 choices[90]= new Array();
 choices[90][0] = "Es el nodo que cambia su punto de conexi&oacute;n a la red sin cambiar su direcci&oacute;n IP o perder las conexiones establecidas.";
 choices[90][1] = "Es el router situado en la red origen del nodo m&oacute;vil que intercepta el tr&aacute;fico destinado al nodo m&oacute;vil y se lo reenv&iacute;a mediante t&uacute;neles IP, realizando adem&aacute;s tareas de localizaci&oacute;n de los nodos m&oacute;viles.";
 choices[90][2] = "Es el router situado en la red visitada que proporciona servicios de encaminamiento a los nodos m&oacute;viles registrados.";
 choices[90][3] = "Es el router situado en la red visitada que facilita una nueva direcci&oacute;n IP al nodo m&oacute;vil.";
 answers[90] = choices[90][1];
 units[90] = "100";
 comments[90] = "Id Pregunta: 10914. Examen GSI 2014";


//  Id pregunta: 11177 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Qu&eacute; tipo de tr&aacute;fico proporciona el nivel de servicio A del est&aacute;ndar 802.17 Resilient Packet Ring?";
 choices[91]= new Array();
 choices[91][0] = "Tr&aacute;fico con requisitos latencia y jitter predecible";
 choices[91][1] = "Tr&aacute;fico con requisitos de baja latencia y bajo jitter";
 choices[91][2] = "Tr&aacute;fico con requisitos de baja latencia y alto jitter";
 choices[91][3] = "Tr&aacute;fico de servicios Best Effort";
 answers[91] = choices[91][1];
 units[91] = "101";
 comments[91] = "Id Pregunta: 11177. ";


//  Id pregunta: 11178 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes componentes es de nivel 2?";
 choices[92]= new Array();
 choices[92][0] = "Repetidores";
 choices[92][1] = "Puentes";
 choices[92][2] = "Enrutadores";
 choices[92][3] = "Concentradores";
 answers[92] = choices[92][1];
 units[92] = "102";
 comments[92] = "Id Pregunta: 11178. ";


//  Id pregunta: 11179 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes protocolos de encaminamiento es de nivel interno?";
 choices[93]= new Array();
 choices[93][0] = "OSPF";
 choices[93][1] = "IS-IS";
 choices[93][2] = "RIP";
 choices[93][3] = "Todos los anteriores";
 answers[93] = choices[93][3];
 units[93] = "103";
 comments[93] = "Id Pregunta: 11179. ";


//  Id pregunta: 11305 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Cu&aacute;l de las siguientes es una caracter&iacute;stca de SIP";
 choices[94]= new Array();
 choices[94][0] = "M&aacute;s cercano a http y datos";
 choices[94][1] = "Est&aacute;ndar de la ITU-T";
 choices[94][2] = "Las tareas de se&ntilde;alizaci&oacute;n dependen de un servidor central, con terminales &quot;tontos&quot; en los extremos.";
 choices[94][3] = "Presentado como evoluci&oacute;n de SS7, dise&ntilde;ado para el control de la se&ntilde;alizaci&oacute;n en redes de conmutaci&oacute;n de circuitos.";
 answers[94] = choices[94][0];
 units[94] = "104";
 comments[94] = "Id Pregunta: 11305. Es un est&aacute;ndar de IETF. ";


//  Id pregunta: 11323 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Qu&eacute; tipo de registro se corresponde DNS, se corresponde con esta definici&oacute;n: &quot;Este registro se usa en IPv6 para traducirnombres de hosts a direcciones IPv6.&quot;";
 choices[95]= new Array();
 choices[95][0] = "Tipo A";
 choices[95][1] = "Tipo AAAA";
 choices[95][2] = "Tipo CNAME";
 choices[95][3] = "Tipo NS";
 answers[95] = choices[95][1];
 units[95] = "113";
 comments[95] = "Id Pregunta: 11323. ";


//  Id pregunta: 11351 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En cuanto al formato de la cabecera IPv6, se&ntilde;ale la opci&oacute;n verdadera";
 choices[96]= new Array();
 choices[96][0] = "4 bits de versi&oacute;n, 8 bits de clase de tr&aacute;fico, 20 etiqueta de flujo";
 choices[96][1] = "4 bits de versi&oacute;n, 20 bits de clase de tr&aacute;fico, 8 etiqueta de flujo";
 choices[96][2] = "8 bits de versi&oacute;n, 8 bits de clase de tr&aacute;fico, 20 etiqueta de flujo";
 choices[96][3] = "4 bits de versi&oacute;n, 4 bits de clase de tr&aacute;fico, 20 etiqueta de flujo";
 answers[96] = choices[96][0];
 units[96] = "100";
 comments[96] = "Id Pregunta: 11351. ";


//  Id pregunta: 11685 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  La capa de Red del modelo OSI equivale a la capa siguiente del modelo TCP:";
 choices[97]= new Array();
 choices[97][0] = "Internet";
 choices[97][1] = "Application";
 choices[97][2] = "Red";
 choices[97][3] = "Data Link";
 answers[97] = choices[97][0];
 units[97] = "100";
 comments[97] = "Id Pregunta: 11685. NULL";


//  Id pregunta: 11690 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cuantos host puede poseer una red /30?";
 choices[98]= new Array();
 choices[98][0] = "1";
 choices[98][1] = "6";
 choices[98][2] = "2";
 choices[98][3] = "4";
 answers[98] = choices[98][2];
 units[98] = "100";
 comments[98] = "Id Pregunta: 11690. NULL";


//  Id pregunta: 11710 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; m&eacute;todo de conmutaci&oacute;n LAN ejecuta un CRC en cada trama?";
 choices[99]= new Array();
 choices[99][0] = "Metodo de corte";
 choices[99][1] = "Verificaci&oacute;n de fragmentos";
 choices[99][2] = "Libre de fragmentos";
 choices[99][3] = "Almacenamiento y env&iacute;o";
 answers[99] = choices[99][3];
 units[99] = "102";
 comments[99] = "Id Pregunta: 11710. NULL";


