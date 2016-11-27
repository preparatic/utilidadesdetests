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

//  Id pregunta: 1257 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Las modulaciones angulares, respecto a las modulaciones lineales:";
 choices[0]= new Array();
 choices[0][0] = "Dan peor discriminaci&oacute;n en contra del ruido y la interferencia.";
 choices[0][1] = "Utilizan menor ancho de banda.";
 choices[0][2] = "Utilizan mayor energ&iacute;a para transmitir.";
 choices[0][3] = "Dan mejor discriminaci&oacute;n en contra del ruido y la interferencia.";
 answers[0] = choices[0][3];
 units[0] = "107, 108";
 comments[0] = "Id Pregunta: 1257. ";


//  Id pregunta: 2990 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Indicar cu&aacute;l de las siguientes afirmaciones sobre el estandar GPRS no es correcta";
 choices[1]= new Array();
 choices[1][0] = "La tarificaci&oacute;n es por la cantidad de tr&aacute;fico transmitido y por calidades de servicio";
 choices[1][1] = "Se asigna un canal por usuario que permanecer&aacute; asignado aunque no se envien datos";
 choices[1][2] = "La voz y los datos se multiplexan, permitiendo su envio y recepci&oacute;n simultaneamente";
 choices[1][3] = "La velocidad de conexi&oacute;n puede llegar a los 50kbps";
 answers[1] = choices[1][1];
 units[1] = "108";
 comments[1] = "Id Pregunta: 2990. ";


//  Id pregunta: 3007 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguiente definiciones se corresponde con la vulnerabilidad DDoS que puede producirse sobre nuestros sistemas?";
 choices[2]= new Array();
 choices[2][0] = "Suplantaci&oacute;n de la direcci&oacute;n IP";
 choices[2][1] = "Escuchas en red";
 choices[2][2] = "Denegaci&oacute;n de servicio Distribuido";
 choices[2][3] = "Ataques de desbordamiento de buffer";
 answers[2] = choices[2][2];
 units[2] = "111";
 comments[2] = "Id Pregunta: 3007. NULL";


//  Id pregunta: 3011 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;A qu&eacute; se corresponden las siglas 802.11f sobre redes inal&aacute;mbricas?";
 choices[3]= new Array();
 choices[3][0] = "A especificaciones de nivel f&iacute;sico ";
 choices[3][1] = "A especificaciones sobre calidad de servicio QoS";
 choices[3][2] = "A especificaciones de Seguridad";
 choices[3][3] = "A especificiaciones de comunicaci&oacute;n entre puntos de acceso";
 answers[3] = choices[3][3];
 units[3] = "107";
 comments[3] = "Id Pregunta: 3011. Es una recomendaci&oacute;n que permite mayor compatibilidad. Usa el protocolo IAPP que permite a un usuario itinerante cambiarse de un punto de acceso a otro mientras est&aacute; en movimiento sin importar qu&eacute; marcas de puntos de acceso se usan en la red.";


//  Id pregunta: 3038 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes no es un lenguaje de scripting?:";
 choices[4]= new Array();
 choices[4][0] = "JavaScript";
 choices[4][1] = "Jscript";
 choices[4][2] = "VBScript";
 choices[4][3] = "XMLScript";
 answers[4] = choices[4][3];
 units[4] = "114,115,116";
 comments[4] = "Id Pregunta: 3038. ";


//  Id pregunta: 3054 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  De las vulnerabilidades del software respecto a la seguridad inform&aacute;tica es falso que:";
 choices[5]= new Array();
 choices[5][0] = "el ataque de buffer overflow se basa en desbordar un buffer de memoria a la pila del sistema y forzar un retorno de una funci&oacute;n al sitio deseado";
 choices[5][1] = "el ataque m&aacute;s famoso en internet (gusano de internet) se basaba en fallo del software de los servidores HTTP en la entrega de p&aacute;ginas";
 choices[5][2] = "el ataque de IP spoofing consiste en falsificar la direcci&oacute;n IP para suplantar la identidad";
 choices[5][3] = "DDOS es un m&eacute;todo de ataque de denegaci&oacute;n del servicio de forma distribuida";
 answers[5] = choices[5][1];
 units[5] = "111";
 comments[5] = "Id Pregunta: 3054. NULL";


//  Id pregunta: 3074 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  La degradaci&oacute;n de la calidad de un sistema de transmisi&oacute;n se debe a las perturbaciones, se pueden distinguir varios tipos:";
 choices[6]= new Array();
 choices[6][0] = "La distorsi&oacute;n, se produce siempre en presencia de la se&ntilde;al y puede existir de dos tipos: directa e indirecta";
 choices[6][1] = "La intermodulaci&oacute;n consiste en la aparici&oacute;n en el receptor de nuevas componentes espectrales de primer orden debido a la mezcla de las componentes espectrales de la se&ntilde;al de informaci&oacute;n";
 choices[6][2] = "El ruido es un tipo de perturbaci&oacute;n de origen electromagn&eacute;tico, se consideran tres tipos : t&eacute;rmico, impulsivo y de cuantificaci&oacute;n";
 choices[6][3] = "La diafon&iacute;a produce en la funci&oacute;n de transferencia de extremo a extremo la aparici&oacute;n de frecuencias nuevas que no exist&iacute;an en la se&ntilde;al original";
 answers[6] = choices[6][2];
 units[6] = "99";
 comments[6] = "Id Pregunta: 3074. ";


//  Id pregunta: 3163 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes capas del modelo OSI se encarga de establecer puntos intermedios de sincronizaci&oacute;n para evitar p&eacute;rdida de informaci&oacute;n en caso de ca&iacute;das de la comunicaci&oacute;n?:";
 choices[7]= new Array();
 choices[7][0] = "La capa de enlace";
 choices[7][1] = "La capa de red";
 choices[7][2] = "La capa de transporte";
 choices[7][3] = "La capa de sesi&oacute;n";
 answers[7] = choices[7][3];
 units[7] = "100";
 comments[7] = "Id Pregunta: 3163. NULL";


//  Id pregunta: 3195 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Dentro del modelo OSI la funci&oacute;n de 'proporcionar puntos de chequeo que permita reiniciar la transmisi&oacute;n a partir del punto m&aacute;s cercano al posible fallo y no desde el principio', corresponde al nivel:";
 choices[8]= new Array();
 choices[8][0] = "Nivel de red";
 choices[8][1] = "Nivel de transporte";
 choices[8][2] = "Nivel de sesi&oacute;n";
 choices[8][3] = "Nivel de presentaci&oacute;n";
 answers[8] = choices[8][2];
 units[8] = "100";
 comments[8] = "Id Pregunta: 3195. NULL";


//  Id pregunta: 3211 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El entorno que utiliza un teletrabajador para conectarse con su empresa a trav&eacute;s de internet se denomina:";
 choices[9]= new Array();
 choices[9][0] = "intranet";
 choices[9][1] = "collaboration-net";
 choices[9][2] = "teleworking-net";
 choices[9][3] = "extranet";
 answers[9] = choices[9][3];
 units[9] = "113";
 comments[9] = "Id Pregunta: 3211. ";


//  Id pregunta: 3295 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; indica el teorema de Shannon?:";
 choices[10]= new Array();
 choices[10][0] = "La m&aacute;xima velocidad de transferencia de un canal  es  H*log(1+S/N), donde H es el ancho de banda del canal de transmisi&oacute;n y S/N es la relaci&oacute;n se&ntilde;al ruido";
 choices[10][1] = "La m&aacute;xima velocidad a la que se puede transmitir informaci&oacute;n digital binaria es el doble de la m&aacute;xima frecuencia del canal de transmisi&oacute;n";
 choices[10][2] = "La m&aacute;xima velocidad de transferencia de un canal  sujeto a ruido es directamente proporcional a la relaci&oacute;n se&ntilde;al ruido del canal";
 choices[10][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[10] = choices[10][0];
 units[10] = "97";
 comments[10] = "Id Pregunta: 3295. NULL";


//  Id pregunta: 3342 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Con un &quot;m&oacute;dem&quot; RDSI, la llamada:";
 choices[11]= new Array();
 choices[11][0] = "Se establece cada vez que se intercambian datos";
 choices[11][1] = "Est&aacute; siempre establecida";
 choices[11][2] = "Puede ser configurable cu&aacute;ndo se quiere que se establezca la llamada";
 choices[11][3] = "Ninguna de las anteriores";
 answers[11] = choices[11][2];
 units[11] = "103,104,109";
 comments[11] = "Id Pregunta: 3342. ";


//  Id pregunta: 3373 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Dentro del modelo de referencia OSI para la interconexi&oacute;n de sistemas abiertos se denominan primitivas a:";
 choices[12]= new Array();
 choices[12][0] = "Los servicios que al nivel inferior proporciona al nivel superior";
 choices[12][1] = "La interacci&oacute;n entre niveles adyacentes";
 choices[12][2] = "Los puntos de acceso al servicio";
 choices[12][3] = "Los multiples identificadores de conexi&oacute;n";
 answers[12] = choices[12][0];
 units[12] = "100";
 comments[12] = "Id Pregunta: 3373. NULL";


//  Id pregunta: 3430 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Indicar la afirmaci&oacute;n incorrecta:";
 choices[13]= new Array();
 choices[13][0] = "Un Gateway (pasarelas&iacute;ncrono no permite a los usuarios de ordenadores personales acceder a grandes ordenadores (mainframes)";
 choices[13][1] = "Un Gateway SNA permite la conexi&oacute;n a grandes ordenadores con arquitectura de comunicaciones SNA (System Network Arquitecture)";
 choices[13][2] = "Un Gateway PAD X.25 permite a los usuarios de ordenadores personales acceder a grandes ordenadores (mainframes)";
 choices[13][3] = "Los Gateways est&aacute;n pensados para facilitar el acceso entre sistemas o entornos que soportan diferentes protocolos y operan en los niveles m&aacute;s altos del modelo de referencia OSI (Interconexi&oacute;n de Sistemas Abiertos)";
 answers[13] = choices[13][0];
 units[13] = "102";
 comments[13] = "Id Pregunta: 3430. ";


//  Id pregunta: 3441 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  El protocolo ARP:";
 choices[14]= new Array();
 choices[14][0] = "S&oacute;lo funciona si hay un proxy configurado";
 choices[14][1] = "Permite relacionar puertos TCP y direcciones IP";
 choices[14][2] = "Permite relacionar puertos TCP  y direcciones MAC";
 choices[14][3] = "Ninguna de las anteriores";
 answers[14] = choices[14][3];
 units[14] = "100,102";
 comments[14] = "Id Pregunta: 3441. ";


//  Id pregunta: 3485 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El uso de un sistema de intercambio electr&oacute;nico de datos (EDI):";
 choices[15]= new Array();
 choices[15][0] = "Exige la utilizaci&oacute;n de redes con una velocidad de transmisi&oacute;n media-alta";
 choices[15][1] = "Requiere la adquisici&oacute;n de un sistema propietario de correo electr&oacute;nico para la transferencia de informaci&oacute;n";
 choices[15][2] = "Permite el libre intercambio de texto, voz e imagen";
 choices[15][3] = "Constituye en s&iacute; mismo un entorno normalizado de intercambio de mensajes mediante un convenio";
 answers[15] = choices[15][3];
 units[15] = "109";
 comments[15] = "Id Pregunta: 3485. ";


//  Id pregunta: 3499 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En el modelo de referencia OSI, en una interfaz t&iacute;pica, la capa N+1 pasa una...... a la capa N, a trav&eacute;s del......:";
 choices[16]= new Array();
 choices[16][0] = "IDU, SAP";
 choices[16][1] = "IDU, ICI";
 choices[16][2] = "PDU, ICI";
 choices[16][3] = "PDU, SAP";
 answers[16] = choices[16][0];
 units[16] = "100";
 comments[16] = "Id Pregunta: 3499. NULL";


//  Id pregunta: 3501 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En el modelo de referencia OSI, una comunicaci&oacute;n entre dos capas se denomina confirmada, si hay:";
 choices[17]= new Array();
 choices[17][0] = "Una petici&oacute;n y una respuesta";
 choices[17][1] = "Una petici&oacute;n, una respuesta y una confirmaci&oacute;n";
 choices[17][2] = "Una petici&oacute;n, una indicaci&oacute;n, una respuesta y una confirmaci&oacute;n";
 choices[17][3] = "Todas las anteriores son incompletas";
 answers[17] = choices[17][2];
 units[17] = "100";
 comments[17] = "Id Pregunta: 3501. NULL";


//  Id pregunta: 3509 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En el protocolo de transmisi&oacute;n s&iacute;ncrona HDLC ( High-level Data Link Control), &iquest;qu&eacute; no es una caracter&iacute;stica?:";
 choices[18]= new Array();
 choices[18][0] = "Cada bloque se inicia con &quot;01111110&quot;";
 choices[18][1] = "El indicador de fin de bloque es &quot;01111111&quot;";
 choices[18][2] = "Esta prohibido enviar secuencias de 6 o m&aacute;s '1'";
 choices[18][3] = "Por cada serie de 5 unos seguidos, se a&ntilde;ade un cero que el receptor eliminar&aacute;";
 answers[18] = choices[18][1];
 units[18] = "100";
 comments[18] = "Id Pregunta: 3509. NULL";


//  Id pregunta: 3532 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En las LAN el proceso 'token passing' o paso de testigo supone:";
 choices[19]= new Array();
 choices[19][0] = "Escuchar el tr&aacute;fico del testigo y transmitir si no se detecta nada";
 choices[19][1] = "Utilizar la posesi&oacute;n del testigo para garantizar el derecho a transmitir";
 choices[19][2] = "A&ntilde;adir tramas de testigo a las tramas de datos para acceder a la red";
 choices[19][3] = "El testigo circula en un anillo hasta que alcanza su destino";
 answers[19] = choices[19][1];
 units[19] = "101";
 comments[19] = "Id Pregunta: 3532. ";


//  Id pregunta: 3570 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En una celda ATM, si el campo PT contiene el valor 100:";
 choices[20]= new Array();
 choices[20][0] = "Es una celda de datos de usuario";
 choices[20][1] = "Es una celda de gesti&oacute;n de recursos";
 choices[20][2] = "Es una celda de datos de usuario pero indica extremo a extremo la congestion de trafico";
 choices[20][3] = "Es una celda asociada al segmento F5 de OAM";
 answers[20] = choices[20][3];
 units[20] = "109";
 comments[20] = "Id Pregunta: 3570. ";


//  Id pregunta: 3589 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  La capa de acceso al medio en una red de &aacute;rea local se denomina:";
 choices[21]= new Array();
 choices[21][0] = "MAC";
 choices[21][1] = "ADSL";
 choices[21][2] = "BUS";
 choices[21][3] = "LLC";
 answers[21] = choices[21][0];
 units[21] = "101";
 comments[21] = "Id Pregunta: 3589. ";


//  Id pregunta: 3598 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  La direcci&oacute;n IPv4 172.30.20.20:";
 choices[22]= new Array();
 choices[22][0] = "Es una direcci&oacute;n privada";
 choices[22][1] = "Es una direcci&oacute;n p&uacute;blica";
 choices[22][2] = "Es una direcci&oacute;n de clase C";
 choices[22][3] = "Es una direcci&oacute;n de clase D";
 answers[22] = choices[22][0];
 units[22] = "100";
 comments[22] = "Id Pregunta: 3598. NULL";


//  Id pregunta: 3617 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  La linea &quot;GET / HTTP/1.1&quot;, dentro de un mensaje HTTP significa:";
 choices[23]= new Array();
 choices[23][0] = "Pide un documento localizado en / ";
 choices[23][1] = "La versi&oacute;n HTTP es 1.1";
 choices[23][2] = "No tiene indicaci&oacute;n del servidor";
 choices[23][3] = "Todas las anteriores respuestas son correctas";
 answers[23] = choices[23][3];
 units[23] = "112";
 comments[23] = "Id Pregunta: 3617. ";


//  Id pregunta: 3663 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Un puente transparente aprende la direcci&oacute;n de los dispositivos:";
 choices[24]= new Array();
 choices[24][0] = "Examinado las direcciones MAC de las tramas entrantes y asoci&aacute;ndolas con una interfaz";
 choices[24][1] = "Examinando las direcciones de red de las tramas entrantes y asoci&aacute;ndolas con una interfaz";
 choices[24][2] = "Examinado las direcciones MAC de las tramas salientes y asoci&aacute;ndolas con una interfaz da salida";
 choices[24][3] = "Examinando las direcciones de red de las tramas salientes y asoci&aacute;ndolas con una interfaz de salida";
 answers[24] = choices[24][0];
 units[24] = "102";
 comments[24] = "Id Pregunta: 3663. ";


//  Id pregunta: 3670 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Una de las funciones de la Gesti&oacute;n de Red es la Funci&oacute;n de Contabilidad Indicar cu&aacute;l de las siguientes tareas no corresponde a esta funci&oacute;n:";
 choices[25]= new Array();
 choices[25][0] = "Evaluar el grado de utilizaci&oacute;n de la red";
 choices[25][1] = "Establecimiento de prioridades y fijaci&oacute;n de franjas de uso de la red";
 choices[25][2] = "Controlar el uso abusivo de determinados elementos";
 choices[25][3] = "Evaluar el rendimiento y calidad de servicio de la red";
 answers[25] = choices[25][3];
 units[25] = "104";
 comments[25] = "Id Pregunta: 3670. ";


//  Id pregunta: 3762 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Para interconectar diferentes redes de &aacute;rea local:";
 choices[26]= new Array();
 choices[26][0] = "Es necesario el uso de puentes";
 choices[26][1] = "Los routers posibilitan la conexi&oacute;n en una misma red de dos cableados diferentes";
 choices[26][2] = "Un bridge interconecta al cable troncal de un edificio el cable Ethernet de cada planta";
 choices[26][3] = "En la red en estrella todo el tr&aacute;fico pasa por el nodo central";
 answers[26] = choices[26][3];
 units[26] = "102";
 comments[26] = "Id Pregunta: 3762. ";


//  Id pregunta: 3765 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Para poder aumentar el rendimiento de los medios de comunicaci&oacute;n se han desarrollado diversos sistemas de multiplexaci&oacute;n. Elija la opci&oacute;n que considere cierta:";
 choices[27]= new Array();
 choices[27][0] = "Se dice que sobre un medio de transmisi&oacute;n se ha utilizado un sistema de multiplexaci&oacute;n por divisi&oacute;n en el tiempo cuando cada canal de entrada se modula sobre una portadora diferente";
 choices[27][1] = "Se dice que sobre un medio de transmisi&oacute;n se ha utilizado un sistema de multiplexaci&oacute;n por divisi&oacute;n en frecuencia cuando a cada canal de entrada se le asigna un per&iacute;odo de tiempo dentro de una trama";
 choices[27][2] = "Se dice que sobre un medio de transmisi&oacute;n se ha utilizado un sistema de multiplexaci&oacute;n por divisi&oacute;n en frecuencia cuando a cada canal de entrada se le asigna una frecuencia portadora distinta";
 choices[27][3] = "Se dice que sobre un medio de transmisi&oacute;n se ha utilizado un sistema de multiplexaci&oacute;n por divisi&oacute;n en el tiempo cuando a cada canal de entrada se le asigna una frecuencia entre las disponibles en el espectro del medio";
 answers[27] = choices[27][2];
 units[27] = "99";
 comments[27] = "Id Pregunta: 3765. *: multiplexacion";


//  Id pregunta: 3826 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Se&ntilde;ale la recomendaci&oacute;n del CCITT que permite la concatenaci&oacute;n de circuitos virtuales de redes X25 distintas:";
 choices[28]= new Array();
 choices[28][0] = "X.121";
 choices[28][1] = "X.300";
 choices[28][2] = "X.75";
 choices[28][3] = "X.31";
 answers[28] = choices[28][2];
 units[28] = "101";
 comments[28] = "Id Pregunta: 3826. ";


//  Id pregunta: 3838 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Sobre los algoritmos de encaminamiento utilizados por los &ldquo;routers&rdquo;, indique cual de las siguientes afirmaciones es err&oacute;nea:";
 choices[29]= new Array();
 choices[29][0] = "Mediante los algoritmos de estados de enlaces cada &ldquo;router&rdquo; env&iacute;a su tabla de encaminamiento completa a todos los dem&aacute;s &ldquo;routers&rdquo; en la red al producirse cualquier cambio en la tabla. As&iacute; act&uacute;a el protocolo OSPF";
 choices[29][1] = "Mediante los algoritmos de vector distancia (tambi&eacute;n conocidos como algoritmos Bellman-Ford) cada &ldquo;router&rdquo; env&iacute;a su tabla de encaminado completa s&oacute;lo a los &ldquo;routers&rdquo; vecinos a intervalos regulares.  As&iacute; act&uacute;a el protocolo RIP";
 choices[29][2] = "Mediante los algoritmos de estados de enlaces (tambi&eacute;n conocidos como &ldquo;shortest path first&rdquo;) cada &ldquo;router&rdquo; env&iacute;a determinada informacion relativa al estado de sus enlaces a los demas routers lo que les permite construir una vision tolpologica de la red ";
 choices[29][3] = "Los algoritmos de estados de enlaces son menos propensos a provocar un bucle de encaminamiento, ya que convergen (determinan el encaminamiento &oacute;ptimo) m&aacute;s r&aacute;pidamente";
 answers[29] = choices[29][0];
 units[29] = "101";
 comments[29] = "Id Pregunta: 3838. ";


//  Id pregunta: 3846 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Topolog&iacute;a de una red (indicar la respuesta err&oacute;nea):";
 choices[30]= new Array();
 choices[30][0] = "Se distingue entre topolog&iacute;a f&iacute;sica y topolog&iacute;a l&oacute;gica";
 choices[30][1] = "En una configuraci&oacute;n en estrella se pueden utilizar medios y velocidades de transmisi&oacute;n diferentes a lo largo de la red";
 choices[30][2] = "En una configuraci&oacute;n en Bus, todas las estaciones est&aacute;n conectadas a un &uacute;nico canal de comunicaciones";
 choices[30][3] = "En una configuraci&oacute;n en anillo, la aver&iacute;a de una estaci&oacute;n no afecta al servicio";
 answers[30] = choices[30][3];
 units[30] = "101";
 comments[30] = "Id Pregunta: 3846. ";


//  Id pregunta: 3877 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes servicios de telecomunicaciones no es de valor a&ntilde;adido?:";
 choices[31]= new Array();
 choices[31][0] = " Correo vocal.";
 choices[31][1] = " Servicios de transmisi&oacute;n de datos con conmutaci&oacute;n de circuitos.";
 choices[31][2] = "Intercambio electr&oacute;nico de datos.";
 choices[31][3] = "Almacenamiento y recuperaci&oacute;n de datos en l&iacute;nea.";
 answers[31] = choices[31][1];
 units[31] = "112";
 comments[31] = "Id Pregunta: 3877. Junta Andaluc&iacute;a";


//  Id pregunta: 3927 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes sistemas de cableado es conocido como &quot;cheapernet&quot;?";
 choices[32]= new Array();
 choices[32][0] = "El cable coaxial utilizado en el est&aacute;ndar 10Base5";
 choices[32][1] = "El cable coaxial utilizado en el est&aacute;ndar 10Base2";
 choices[32][2] = "El cable UTP de categor&iacute;a 3";
 choices[32][3] = "El cable STP de 150Ohm";
 answers[32] = choices[32][1];
 units[32] = "99";
 comments[32] = "Id Pregunta: 3927. ";


//  Id pregunta: 3983 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  &iquest;Qu&eacute; es falso sobre IPv6?";
 choices[33]= new Array();
 choices[33][0] = "::1 es la direcci&oacute;n de loopback.";
 choices[33][1] = "Las cabeceras de extensi&oacute;n no son examinadas ni procesadas por ning&uacute;n nodo a lo largo de la ruta de entrega de un paquete, excepto la de Opciones de Salto a Salto.";
 choices[33][2] = "El campo de la cabecera denominado &quot;cabecera siguiente&quot; utiliza los mismos valores que el campo &quot;protocolo&quot; de IPv4";
 choices[33][3] = "Todas son verdaderas.";
 answers[33] = choices[33][3];
 units[33] = "100";
 comments[33] = "Id Pregunta: 3983. ";


//  Id pregunta: 4048 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  &iquest;En cual de los siguientes lenguajes de programaci&oacute;n ser&iacute;a m&aacute;s razonable desarrollar un sistema operativo moderno?";
 choices[34]= new Array();
 choices[34][0] = "Java";
 choices[34][1] = "C#";
 choices[34][2] = "C / C++";
 choices[34][3] = "OS Builder";
 answers[34] = choices[34][2];
 units[34] = "52";
 comments[34] = "Id Pregunta: 4048. NULL";


//  Id pregunta: 4093 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Que es TRAM";
 choices[35]= new Array();
 choices[35][0] = "Una arquitectura web basada en software libre";
 choices[35][1] = "Una arquitectura web basada en j2ee";
 choices[35][2] = "Una arquitectura web basada en .Net";
 choices[35][3] = "Ninguna de las anteriores";
 answers[35] = choices[35][3];
 units[35] = "114,115, 116";
 comments[35] = "Id Pregunta: 4093. NULL";


//  Id pregunta: 4095 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  &iquest;Qu&eacute; tecnolog&iacute;a es util   para crear interfaces de usuario?";
 choices[36]= new Array();
 choices[36][0] = "JSF";
 choices[36][1] = "AJAX";
 choices[36][2] = "Ambas son utiles para crear interface de usuario";
 choices[36][3] = "Ninguna de las anteriores";
 answers[36] = choices[36][2];
 units[36] = "116";
 comments[36] = "Id Pregunta: 4095. ";


//  Id pregunta: 4119 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  La t&eacute;cnica usada para llevar a los visitantes a una nueva p&aacute;gina web cuando un URL ha cambiado se llama";
 choices[37]= new Array();
 choices[37][0] = "Redirecci&oacute;n";
 choices[37][1] = "CGI";
 choices[37][2] = "Identificador Uniforme de Recursos";
 choices[37][3] = "ASP";
 answers[37] = choices[37][0];
 units[37] = "112";
 comments[37] = "Id Pregunta: 4119. ";


//  Id pregunta: 4153 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Especificaci&oacute;n industrial que describe como m&oacute;viles, ordenadores y PDAs pueden interconectarse entre s&iacute; usando una conexi&oacute;n inal&aacute;mbrica de corta distancia";
 choices[38]= new Array();
 choices[38][0] = "Bluetooth";
 choices[38][1] = "EMI";
 choices[38][2] = "Wimax";
 choices[38][3] = "IrDA";
 answers[38] = choices[38][0];
 units[38] = "107";
 comments[38] = "Id Pregunta: 4153. NULL";


//  Id pregunta: 4196 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  El estandar 802.11i se centra en";
 choices[39]= new Array();
 choices[39][0] = "Calidad de Servicio (QoS) sobre redes WLAN";
 choices[39][1] = "Autenticaci&oacute;n y cifrado para redes WLAN";
 choices[39][2] = "Nueva generaci&oacute;n de WLAN de redes de, al menos, 100 Mbps (en proceso de definici&oacute;n en 2006)";
 choices[39][3] = "Intercambio de informaci&oacute;n de capacidad entre clientes y puntos de acceso en redes WLAN";
 answers[39] = choices[39][1];
 units[39] = "107";
 comments[39] = "Id Pregunta: 4196. NULL";


//  Id pregunta: 4229 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes organismos de normalizaci&oacute;n ha promovido el est&aacute;ndar GSM?";
 choices[40]= new Array();
 choices[40][0] = "ISO (International Standards Organization)";
 choices[40][1] = "IEEE (Institute of Electrical Engineers)";
 choices[40][2] = "ETSI (European Telecommunications Standards Institute)";
 choices[40][3] = "CEN (Comit&eacute; Europeo de Normalizaci&oacute;n)";
 answers[40] = choices[40][2];
 units[40] = "108";
 comments[40] = "Id Pregunta: 4229. ";


//  Id pregunta: 4269 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  Indique cu&aacute;l de las siguientes no es una direcci&oacute;n IP correcta:";
 choices[41]= new Array();
 choices[41][0] = "115.26.13.4";
 choices[41][1] = "255.3.4.5";
 choices[41][2] = "10.0.0.1";
 choices[41][3] = "0.0.0.3";
 answers[41] = choices[41][1];
 units[41] = "99";
 comments[41] = "Id Pregunta: 4269. ";


//  Id pregunta: 4339 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  Una importante desventaja de emplear una topolog&iacute;a de conmutadores (switchs) jer&aacute;rquica en una LAN es";
 choices[42]= new Array();
 choices[42][0] = "El coste, pues se deben utilizar muchos conmutadores.";
 choices[42][1] = "La dependencia de un solo proveedor, ya que todos han de ser compatibles.";
 choices[42][2] = "Que una ca&iacute;da de un conmutador dejar&aacute; a dos subredes incomunicadas.";
 choices[42][3] = "Su obsolescencia, ya que es una topolog&iacute;a de los a&ntilde;os 80.";
 answers[42] = choices[42][2];
 units[42] = "100";
 comments[42] = "Id Pregunta: 4339. ";


//  Id pregunta: 4422 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Un protocolo de comunicaci&oacute;n es:";
 choices[43]= new Array();
 choices[43][0] = "conjunto de reglas que gobiernan el formato de intercambio de mensajes entre niveles OSI de un mismo sistema.";
 choices[43][1] = "El conjunto de reglas que gobiernan c&oacute;mo va a proceder la comunicaci&oacute;n entre entidades pares de distintos sistemas.";
 choices[43][2] = "El conjunto de elementos f&iacute;sicos y l&oacute;gicos que relacionan dos niveles adyacentes de un sistema.";
 choices[43][3] = "Conjunto de primitivas y par&aacute;metros que concretan los servicios que se proporcionan a trav&eacute;s de la interfaz.";
 answers[43] = choices[43][1];
 units[43] = "";
 comments[43] = "Id Pregunta: 4422. ";


//  Id pregunta: 4431 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;C&oacute;mo se denomina en telefon&iacute;a IP el elemento encargado de registrar los dispositivos que realizan llamadas usando la red IP?";
 choices[44]= new Array();
 choices[44][0] = "Gateway.";
 choices[44][1] = "Terminal.";
 choices[44][2] = "IVR";
 choices[44][3] = "Gatekeeper.";
 answers[44] = choices[44][3];
 units[44] = "109";
 comments[44] = "Id Pregunta: 4431. ";


//  Id pregunta: 4490 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  El sistema UMTS tiene asignadas en Europa bandas de trabajo en torno a Ia frecuencia de:";
 choices[45]= new Array();
 choices[45][0] = "900 MHz.";
 choices[45][1] = "2 GHz.";
 choices[45][2] = "11 GHz.";
 choices[45][3] = "5 GHz";
 answers[45] = choices[45][1];
 units[45] = "108";
 comments[45] = "Id Pregunta: 4490. ";


//  Id pregunta: 4650 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  En los sistemas de radiocomunicaci&oacute;n, el concepto de PIRE es:";
 choices[46]= new Array();
 choices[46][0] = "La ganancla de la antena";
 choices[46][1] = "La potencla interna del elemento radlante";
 choices[46][2] = "el producto de la potencla suministrada por La antena por La ganancla isot&oacute;pica de esta";
 choices[46][3] = "la probabilidad de interferencla debida a La reflexi&oacute;n de la se&ntilde;al emitida.";
 answers[46] = choices[46][2];
 units[46] = "";
 comments[46] = "Id Pregunta: 4650. ";


//  Id pregunta: 4656 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  &iquest;Qu&eacute; protocolo de enrutamiento se utiliza principalmente entre los sistemas aut&oacute;nomos en Internet?";
 choices[47]= new Array();
 choices[47][0] = "OSPF";
 choices[47][1] = "RIP";
 choices[47][2] = "BGP";
 choices[47][3] = "RIP2";
 answers[47] = choices[47][2];
 units[47] = "";
 comments[47] = "Id Pregunta: 4656. ";


//  Id pregunta: 4809 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Entre las arquitecturas de redes de comunicaciones para interconexi&oacute;n de sistemas NO se encuentra:";
 choices[48]= new Array();
 choices[48][0] = "OSI (Open System Interconnection) de ISO (International Standards Organization)";
 choices[48][1] = "DNA (Digital Network Architecture), de la antigua DEC (Digital Equipment Corporation)";
 choices[48][2] = "SNA (System Network Architecture), de IBM";
 choices[48][3] = "ONS (Open Network Standard) del ITU-T (International Telecommunications Union - Telecommunications)";
 answers[48] = choices[48][3];
 units[48] = "102";
 comments[48] = "Id Pregunta: 4809. ";


//  Id pregunta: 4817 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos de ISOC (Internet Society) tiene la responsabilidad de desarrollar lasespecificaciones de est&aacute;ndares en Internet?";
 choices[49]= new Array();
 choices[49][0] = "IESG (Internet Engineering Steering Group)";
 choices[49][1] = "IETF (Internet Engineering Task Force)";
 choices[49][2] = "IAB (Internet Architecture Board)";
 choices[49][3] = "IANA (Internet Assigned Number Authority)";
 answers[49] = choices[49][1];
 units[49] = "112,42";
 comments[49] = "Id Pregunta: 4817. ";


//  Id pregunta: 4973 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n con SMTP (Simple Mail Transfer Protocol), definido en la RFC821:";
 choices[50]= new Array();
 choices[50][0] = "Puede transmitir ficheros ejecutables y objetos binarios en general.";
 choices[50][1] = "Se crea para superar las deficiencias de MIME (Multipurpose Internet Mail Extensi&oacute;n).";
 choices[50][2] = "Se limita a caracteres ASCII de 7 bits.";
 choices[50][3] = "Es un protocolo de nivel de Presentaci&oacute;n del modelo OSI.";
 answers[50] = choices[50][2];
 units[50] = "106";
 comments[50] = "Id Pregunta: 4973. Examen TIC B 2007";


//  Id pregunta: 4979 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  En ADSL, las velocidades de datos dependen de diversos factores. &iquest;Cu&aacute;l no es uno de ellos?:";
 choices[51]= new Array();
 choices[51][0] = "Longitud de la l&iacute;nea de cobre.";
 choices[51][1] = "La presencia de derivaciones puenteadas.";
 choices[51][2] = "La informaci&oacute;n de se&ntilde;alizaci&oacute;n que se debe transmitir simult&aacute;neamente.";
 choices[51][3] = "La interferencia de acoplamientos cruzados.";
 answers[51] = choices[51][2];
 units[51] = "107";
 comments[51] = "Id Pregunta: 4979. Examen TIC B 2007";


//  Id pregunta: 5290 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Respecto a las comunicaciones m&oacute;viles, el paso de la generaci&oacute;n 2G/2.5G a la generaci&oacute;n 3G ha requerido la realizaci&oacute;n de las inversiones m&aacute;s importantes";
 choices[52]= new Array();
 choices[52][0] = "En el acceso radio";
 choices[52][1] = "En la infraestructura de red, para permitir la conmutaci&oacute;n de paquetes";
 choices[52][2] = "No fue necesario modificar la infraestructura existente.";
 choices[52][3] = "Se hizo un despliegue totalmente nuevo, al basarse una en comunicaciones anal&oacute;gicas y otra en comunicadiones digitales";
 answers[52] = choices[52][0];
 units[52] = "108";
 comments[52] = "Id Pregunta: 5290. ";


//  Id pregunta: 5513 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Indique cu&aacute;l es una caracter&iacute;stica t&eacute;cnica de W-CDMA, utilizada en UMTS:";
 choices[53]= new Array();
 choices[53][0] = "Emplea radiocanales de 50MHz de ancho de banda";
 choices[53][1] = "Permite transmisiones multic&oacute;digo";
 choices[53][2] = "No admite duplexaci&oacute;n por divisi&oacute;n en frecuencia (FDD) ";
 choices[53][3] = "No admite duplexaci&oacute;n por divisi&oacute;n en el tiempo (TDD)";
 answers[53] = choices[53][1];
 units[53] = "108";
 comments[53] = "Id Pregunta: 5513. ";


//  Id pregunta: 5565 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as permiten la transmisi&oacute;n de datos sobre una infraestructura de fibra &oacute;ptica para una red de &aacute;rea metropolitana?";
 choices[54]= new Array();
 choices[54][0] = "DQDB";
 choices[54][1] = "CDDI";
 choices[54][2] = "HIPPI";
 choices[54][3] = "PDDI";
 answers[54] = choices[54][0];
 units[54] = "101";
 comments[54] = "Id Pregunta: 5565. ";


//  Id pregunta: 5614 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  La especificaci&oacute;n PKCS que define el formato de las claves privadas es:";
 choices[55]= new Array();
 choices[55][0] = "PKCS 1";
 choices[55][1] = "PKCS 5";
 choices[55][2] = "PKCS 8";
 choices[55][3] = "PKCS 6";
 answers[55] = choices[55][2];
 units[55] = "111";
 comments[55] = "Id Pregunta: 5614. NULL";


//  Id pregunta: 5945 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes no facilita la ergonom&iacute;a de un sitio Web 2.0?";
 choices[56]= new Array();
 choices[56][0] = "Universos Netvibes";
 choices[56][1] = "gadgets sociales";
 choices[56][2] = "widgets";
 choices[56][3] = "Mashups";
 answers[56] = choices[56][1];
 units[56] = "120";
 comments[56] = "Id Pregunta: 5945. ";


//  Id pregunta: 6231 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Con respecto a los IFRAMEs, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[57]= new Array();
 choices[57][0] = "Se puede utilizar para extraer porciones de informaci&oacute;n de un documento HTML para mostrarlas en un portlet. De esta forma, se pueden elegir las partes importantes del documento HTML mientras que se descartan aquellos elementos que el cliente es incapaz de mostrar.";
 choices[57][1] = "Se utiliza principalmente para la generaci&oacute;n web de documentos PDF.";
 choices[57][2] = "Es un elemento HTML que permite insertar o incrustar un documento HTML dentro de un documento HTML principal.";
 choices[57][3] = "Ninguna de las afirmaciones anteriores es correcta.";
 answers[57] = choices[57][2];
 units[57] = "114";
 comments[57] = "Id Pregunta: 6231. ";


//  Id pregunta: 6340 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Qui&eacute;n acu&ntilde;&oacute; el t&eacute;rmino 'Web 2.0'?";
 choices[58]= new Array();
 choices[58][0] = "Tim Berners-Lee";
 choices[58][1] = "Tim O'Reilly";
 choices[58][2] = "Vinton Cerf";
 choices[58][3] = "Richard Stallman";
 answers[58] = choices[58][1];
 units[58] = "120";
 comments[58] = "Id Pregunta: 6340. NULL";


//  Id pregunta: 6353 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes no es un objetivo o principio de la ley 9/2014?";
 choices[59]= new Array();
 choices[59][0] = "Fomentar la competencia efectiva en los mercados de telecomunicaciones";
 choices[59][1] = "Fomentar, en la medida de lo posible, la neutralidad tecnol&oacute;gica en la regulaci&oacute;n.";
 choices[59][2] = "Promover el desarrollo de la Sociedad de la Informaci&oacute;n";
 choices[59][3] = "Hacer posible el uso eficaz de los recursos limitados de telecomunicaciones";
 answers[59] = choices[59][2];
 units[59] = "110";
 comments[59] = "Id Pregunta: 6353. NULL";


//  Id pregunta: 6482 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;En qu&eacute; lenguaje est&aacute;n definidos los objetos gestionados en SNMP?";
 choices[60]= new Array();
 choices[60][0] = "C++";
 choices[60][1] = "ASN.1";
 choices[60][2] = "trap";
 choices[60][3] = "Java";
 answers[60] = choices[60][1];
 units[60] = "104";
 comments[60] = "Id Pregunta: 6482. Castilla La Mancha 2009";


//  Id pregunta: 6575 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Podemos definir ARP poisoning como";
 choices[61]= new Array();
 choices[61][0] = "Alteraci&oacute;n de la tabla ARP para que una direcci&oacute;n IP se corresponda con una MAC distinta a la que ten&iacute;a";
 choices[61][1] = "Con este ataque no se puede redirigir el tr&aacute;fico al ordenador del atacante";
 choices[61][2] = "A y B son correctas";
 choices[61][3] = "A y B son incorrectas";
 answers[61] = choices[61][0];
 units[61] = "100";
 comments[61] = "Id Pregunta: 6575. NULL";


//  Id pregunta: 6578 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  La telefon&iacute;a IP";
 choices[62]= new Array();
 choices[62][0] = "Combina datos, voz y video en un &uacute;nico paquete";
 choices[62][1] = "Separa la red de datos de la voz";
 choices[62][2] = "Los procesos utilizados no dependen del tiempo";
 choices[62][3] = "A y C son correctas";
 answers[62] = choices[62][0];
 units[62] = "117";
 comments[62] = "Id Pregunta: 6578. NULL";


//  Id pregunta: 7247 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;ntas direcciones IP ser&aacute;n asignadas en la subred 220.8.7.0/28, sin considerar las direcciones de subred y de broadcast?";
 choices[63]= new Array();
 choices[63][0] = "256";
 choices[63][1] = "254";
 choices[63][2] = "14";
 choices[63][3] = "28";
 answers[63] = choices[63][2];
 units[63] = "100";
 comments[63] = "Id Pregunta: 7247. Examen TIC B 2009";


//  Id pregunta: 7255 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Seg&uacute;n la RFC 2373 correpondiente a la arquitectura de direccionamiento para IPv6. El prefijo que es usado para direcciones multidifusi&oacute;n (multicast) es";
 choices[64]= new Array();
 choices[64][0] = "3F";
 choices[64][1] = "FE";
 choices[64][2] = "FC";
 choices[64][3] = "FF";
 answers[64] = choices[64][3];
 units[64] = "100";
 comments[64] = "Id Pregunta: 7255. Examen TIC B 2009";


//  Id pregunta: 8289 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Una red administrada a trav&eacute;s de SNMP contempla tres componentes claves. &iquest;Cu&aacute;l de los siguientes NO es uno de ellos?";
 choices[65]= new Array();
 choices[65][0] = "Dispositivos administrados. ";
 choices[65][1] = "Agentes.";
 choices[65][2] = "Sistemas administradores de red (NMS).";
 choices[65][3] = "Registro de ubicaci&oacute;n de visitantes (VLR).";
 answers[65] = choices[65][3];
 units[65] = "104";
 comments[65] = "Id Pregunta: 8289. Examen TIC A2 2010";


//  Id pregunta: 8297 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Hablando del modelo OSI &iquest;Cu&aacute;l de las siguientes parejas NO es correcta?";
 choices[66]= new Array();
 choices[66][0] = "Nivel 4 - HDLC. ";
 choices[66][1] = "Nivel 1 - CSMA/CD.";
 choices[66][2] = "Nivel 3 - X.25.";
 choices[66][3] = "Nivel 2 - LAPB";
 answers[66] = choices[66][0];
 units[66] = "100";
 comments[66] = "Id Pregunta: 8297. Examen TIC A2 2010";


//  Id pregunta: 8313 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l es el est&aacute;ndar correspondiente al m&eacute;todo de compresi&oacute;n ADPCM (Adaptative Differential Pulse Code Modulation) de la voz? ";
 choices[67]= new Array();
 choices[67][0] = "G.711.";
 choices[67][1] = "G.726.";
 choices[67][2] = "G.728. ";
 choices[67][3] = "G.729. ";
 answers[67] = choices[67][1];
 units[67] = "117";
 comments[67] = "Id Pregunta: 8313. Examen TIC A2 2010";


//  Id pregunta: 8503 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  En IPv4 la cabecera IP tiene un campo denominado TTL (Time To Live) que indica el n&uacute;mero m&aacute;ximo de encaminadores que un paquete puede atravesar, &iquest;Cu&aacute;l es &eacute;l rango de valores que puede tomar este campo? ";
 choices[68]= new Array();
 choices[68][0] = "0-15";
 choices[68][1] = "0-255";
 choices[68][2] = "0-5";
 choices[68][3] = "0-127";
 answers[68] = choices[68][1];
 units[68] = "100";
 comments[68] = "Id Pregunta: 8503. Examen TIC A2 2010";


//  Id pregunta: 8522 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes es un tipo de algoritmo de control de la congesti&oacute;n en redes conmutadas?";
 choices[69]= new Array();
 choices[69][0] = "Estado del enlace.";
 choices[69][1] = "Vector distancia.";
 choices[69][2] = "Inundaci&oacute;n de paquetes.";
 choices[69][3] = "Cubeta con goteo.";
 answers[69] = choices[69][3];
 units[69] = "104";
 comments[69] = "Id Pregunta: 8522. Examen TIC A2 2010 interna";


//  Id pregunta: 8543 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Qu&eacute; codec de v&iacute;deo se utiliza en la TDT para los canales en alta definici&oacute;n (HD)?";
 choices[70]= new Array();
 choices[70][0] = "Huffyuv.";
 choices[70][1] = "MPEG-4";
 choices[70][2] = "MPEG-2";
 choices[70][3] = "Sorenson.";
 answers[70] = choices[70][1];
 units[70] = "105";
 comments[70] = "Id Pregunta: 8543. Examen TIC A2 2010 interna";


//  Id pregunta: 8730 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Los protocolos b&aacute;sicos usados en una red de &aacute;rea de almacenamiento son:";
 choices[71]= new Array();
 choices[71][0] = "Fibre Channel Arbitrated Loop, Fibre Channel Switched y Small Computer System Interface";
 choices[71][1] = "Fibre Channel Arbitrated Loop y Fibre Channel Small Loop";
 choices[71][2] = "Small Computer System Interface y Fibre Channel Small Loop";
 choices[71][3] = "Fibre Channel Small Loop, Address Resolution Protocol y Network File System";
 answers[71] = choices[71][0];
 units[71] = "48";
 comments[71] = "Id Pregunta: 8730. Examen UPM A2 2011";


//  Id pregunta: 8770 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l es la versi&oacute;n extendida del protocolo BOOTP?";
 choices[72]= new Array();
 choices[72][0] = "DHCP";
 choices[72][1] = "RARP";
 choices[72][2] = "RTSP";
 choices[72][3] = "DNS";
 answers[72] = choices[72][0];
 units[72] = "100";
 comments[72] = "Id Pregunta: 8770. Examen TIC A2 2010 interna";


//  Id pregunta: 8772 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  El protocolo PXE utiliza los siguientes protocolos:";
 choices[73]= new Array();
 choices[73][0] = "BOOTP/DHCP, FTP y TCP/IP.";
 choices[73][1] = "TFTP, TCP/IP y direccionamiento est&aacute;tico en los clientes.";
 choices[73][2] = "TCP/IP, BOOTP/DHCP y TFTP.";
 choices[73][3] = "Ninguna de las anteriores.";
 answers[73] = choices[73][2];
 units[73] = "100";
 comments[73] = "Id Pregunta: 8772. Examen UPM A2 2011";


//  Id pregunta: 8909 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Indicar cu&aacute;l de las siguientes herramientas y protocolos permite el control remoto de puestos de usuario:";
 choices[74]= new Array();
 choices[74][0] = "NNTP.";
 choices[74][1] = "VNC.";
 choices[74][2] = "NTP.";
 choices[74][3] = "FTP";
 answers[74] = choices[74][1];
 units[74] = "118";
 comments[74] = "Id Pregunta: 8909. Operador Ayto. Madrid 2010";


//  Id pregunta: 9345 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  De entre las siguientes, existe una que no es una iniciativa comunitaria relacionada con el &aacute;mbito TIC:";
 choices[75]= new Array();
 choices[75][0] = "ISA";
 choices[75][1] = "eTIN";
 choices[75][2] = "IDAbc";
 choices[75][3] = "CIP 2007-2013";
 answers[75] = choices[75][1];
 units[75] = "103";
 comments[75] = "Id Pregunta: 9345. Fuente: Temario ASTIC p&aacute;gina 15 y ss 2011";


//  Id pregunta: 9350 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  DSS1 es:";
 choices[76]= new Array();
 choices[76][0] = "Un protocolo utilizado en ADSL, en la capa de red, para la gesti&oacute;n de conexiones con el DSLAM";
 choices[76][1] = "Un protocolo utilizado en RDSI, de la capa de red, para gesti&oacute;n de conexiones.";
 choices[76][2] = "Un protocolo utilizado en RDSI en la capa de enlace, para el control de acceso al canal D";
 choices[76][3] = "Un protocolo utilizado en ADSL, en la capa de enlace, para el acceso m&uacute;ltiple a los servicios";
 answers[76] = choices[76][1];
 units[76] = "103";
 comments[76] = "Id Pregunta: 9350. Pag. 8 astic 2011";


//  Id pregunta: 9360 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de estas afirmaciones es cierta en relaci&oacute;n con las redes de &aacute;rea local?";
 choices[77]= new Array();
 choices[77][0] = "El subnivel LLC se encarga del control l&oacute;gico del enlace, por lo que gestiona el tipo de acceso al medio.";
 choices[77][1] = "El subnivel MAC controla el acceso al medio, creando una trama que se adapta a la topolog&iacute;a de la red f&iacute;sica.";
 choices[77][2] = "El subnivel MAC se encarga del control l&oacute;gico del enlace.";
 choices[77][3] = "El subnivel MAC es el responsable de las funciones de entramado, control de errores y control de flujo.";
 answers[77] = choices[77][1];
 units[77] = "101";
 comments[77] = "Id Pregunta: 9360. pag. 5 ASTIC 2011";


//  Id pregunta: 9433 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Se&ntilde;ale, de entre las siguientes, la que es una infracci&oacute;n grave seg&uacute;n la ley 32/2003";
 choices[78]= new Array();
 choices[78][0] = "La interceptaci&oacute;n, sin autorizaci&oacute;n, de telecomunicaciones no destinadas al p&uacute;blico en general.";
 choices[78][1] = "El establecimiento de comunicaciones con estaciones no autorizadas.";
 choices[78][2] = "El incumplimiento de las condiciones determinantes de la adjudicaci&oacute;n y asignaci&oacute;n de los recursos de numeraci&oacute;n incluidos en los planes de numeraci&oacute;n ";
 choices[78][3] = "La falta de notificaci&oacute;n a la Administraci&oacute;n por el titular de una red de comunicaciones electr&oacute;nicas de los servicios que se est&eacute;n prestando a trav&eacute;s de ella cuando esta informaci&oacute;n sea exigible de acuerdo con la normativa aplicable.";
 answers[78] = choices[78][1];
 units[78] = "110";
 comments[78] = "Id Pregunta: 9433. ";


//  Id pregunta: 9511 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l es la API est&aacute;ndar para conectar programas desarrollados en Java con un sistema gestor de base de datos?";
 choices[79]= new Array();
 choices[79][0] = "JAXP";
 choices[79][1] = "StAX";
 choices[79][2] = "JAF";
 choices[79][3] = "JDBC";
 answers[79] = choices[79][3];
 units[79] = "116";
 comments[79] = "Id Pregunta: 9511. NULL";


//  Id pregunta: 9841 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Infraestructura de PKI. La autoridad de certificaci&oacute;n ra&iacute;z:";
 choices[80]= new Array();
 choices[80][0] = "No utiliza certificados digitales.";
 choices[80][1] = "Utiliza un certificado digital firmado por otra autoridad de certificaci&oacute;n.";
 choices[80][2] = "Utiliza un certifica digital autofirmado por ella misma.";
 choices[80][3] = "Utiliza un certificado digital emitido por la Administraci&oacute;n P&uacute;blica.";
 answers[80] = choices[80][2];
 units[80] = "111";
 comments[80] = "Id Pregunta: 9841. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";


//  Id pregunta: 10058 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En las comunicaciones a trav&eacute;s de sockets, &iquest;cu&aacute;l de las siguientes NO se corresponde con una primitiva?";
 choices[81]= new Array();
 choices[81][0] = "Bind ";
 choices[81][1] = "Listen";
 choices[81][2] = "Reject ";
 choices[81][3] = "Socket";
 answers[81] = choices[81][2];
 units[81] = "100";
 comments[81] = "Id Pregunta: 10058. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10078 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Qu&eacute; nombre recibe el est&aacute;ndar de Televisi&oacute;n Digital Terrestre utilizado en Europa?";
 choices[82]= new Array();
 choices[82][0] = "ATSC ";
 choices[82][1] = "ISDB-T";
 choices[82][2] = "DVB-T ";
 choices[82][3] = "EDTVB";
 answers[82] = choices[82][2];
 units[82] = "105";
 comments[82] = "Id Pregunta: 10078. TIC A2, libre, Examen 2013";


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


//  Id pregunta: 10202 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[85]= new Array();
 choices[85][0] = "Para el canal de subida utiliza la modulaci&oacute;n SD-FDMA y para el de bajada, OFDMA";
 choices[85][1] = "Utiliza IMS (IP Multimedia Subsystem) para transmitir informaci&oacute;n multimedia sobre IP";
 choices[85][2] = "Es compatible con las redes IEEE 802.16e";
 choices[85][3] = "Desaparecen los soft handovers y solo existen hard handovers al desaparecer los RNC e incorporarse a los eNode B";
 answers[85] = choices[85][2];
 units[85] = "108";
 comments[85] = "Id Pregunta: 10202. 4G busca la convergencia con WiMax en el est&aacute;ndar 802.16m";


//  Id pregunta: 10291 AÃ±o de creación de pregunta: 2010-01-01
 questions[86]= "87)  Una desventaja de la topolog&iacute;a f&iacute;sica de bus es que:";
 choices[86]= new Array();
 choices[86][0] = "Un fallo en el concentrador provoca el aislamiento de todos los nodos a &eacute;l conectados.";
 choices[86][1] = "Requiere m&aacute;s cable que la topolog&iacute;a en estrella.";
 choices[86][2] = "Es vulnerable a la atenuaci&oacute;n, ya que pierde se&ntilde;al a trav&eacute;s de la distancia del cable.";
 choices[86][3] = "Es compleja y dif&iacute;cil de arreglar.";
 answers[86] = choices[86][2];
 units[86] = "101";
 comments[86] = "Id Pregunta: 10291. TIC A2, libre, examen 2013";


//  Id pregunta: 10326 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cual no es una funci&oacute;n del servidor de aplicaciones?";
 choices[87]= new Array();
 choices[87][0] = "Multiplexar accesos a la base de datos mediante el gestor transaccional";
 choices[87][1] = "Aislar la l&oacute;gica de negocio de la capa de persistencia";
 choices[87][2] = "Reutilizar objetos de aplicaciones de departamentos distintos";
 choices[87][3] = "Adecuar los mapeos objeto-relacionales a las particularidades del diccionario de datos";
 answers[87] = choices[87][3];
 units[87] = "114";
 comments[87] = "Id Pregunta: 10326. ";


//  Id pregunta: 10892 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l es el tipo de la direcci&oacute;n IPv6 ::1/128?";
 choices[88]= new Array();
 choices[88][0] = "Loopback.";
 choices[88][1] = "Indefinida (Unspecified).";
 choices[88][2] = "Multicast.";
 choices[88][3] = "No es v&aacute;lida.";
 answers[88] = choices[88][0];
 units[88] = "100";
 comments[88] = "Id Pregunta: 10892. Examen GSI 2014";


//  Id pregunta: 10985 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Respecto a la imagen institucional en redes sociales de la AGE es correcto que:";
 choices[89]= new Array();
 choices[89][0] = "En las redes sociales que lo permitan, el fondo de todas las p&aacute;ginas tendr&aacute; color amarillo.";
 choices[89][1] = "El fondo de las p&aacute;ginas se dise&ntilde;ar&aacute; optimizado a un tama&ntilde;o para pantallas de 800 x 600 p&iacute;xeles de anchura.";
 choices[89][2] = "Las dimensiones de la imagen del perfil ser&aacute;n las mismas para todas las redes sociales.";
 choices[89][3] = "La imagen del perfil deber&aacute; incluir siempre la denominaci&oacute;n ministerial.";
 answers[89] = choices[89][0];
 units[89] = "120";
 comments[89] = "Id Pregunta: 10985. TIC A1 AGE 2014";


//  Id pregunta: 11191 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;A partir de cuanto tiempo de retardo hace que la calidad de una videoconferencia sea cr&iacute;tica?";
 choices[90]= new Array();
 choices[90][0] = "50 ms";
 choices[90][1] = "150 ms";
 choices[90][2] = "300 ms";
 choices[90][3] = "600 ms";
 answers[90] = choices[90][2];
 units[90] = "117";
 comments[90] = "Id Pregunta: 11191. ";


//  Id pregunta: 11332 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  La Ley General de Telecomunicaciones establece los conceptos por los que se puede aplicar tasa. Seleccione cu&aacute;l se corresponde con esta definici&oacute;n: &quot;para cubrir gastos por certificaciones registrales, la recepci&oacute;n de proyectos t&eacute;cnicos, cumplimiento de especificaciones t&eacute;cnicas de aparatos y equipos, etc.&quot;";
 choices[91]= new Array();
 choices[91][0] = "Tasa General de Operadores.";
 choices[91][1] = "Tasas por numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[91][2] = "Tasa por reserva del espacio radioel&eacute;ctrico";
 choices[91][3] = "Tasa de telecomunicaciones";
 answers[91] = choices[91][3];
 units[91] = "110";
 comments[91] = "Id Pregunta: 11332. ";


//  Id pregunta: 11415 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seg&uacute;n la Ley 9/2014, es un derecho del usuario de teleco:";
 choices[92]= new Array();
 choices[92][0] = "La desconexi&oacute;n de cualquier servicio, previa solicitud.";
 choices[92][1] = "Disponer de un 902 o comunicaci&oacute;n electr&oacute;nica como servicio de atenci&oacute;n al cliente.";
 choices[92][2] = "La continuidad del servicio.";
 choices[92][3] = "A ser informado, pleno pago de la tasa correspondiente, de la inclusi&oacute;n de sus datos en las gu&iacute;as de abonados.";
 answers[92] = choices[92][2];
 units[92] = "110";
 comments[92] = "Id Pregunta: 11415. ";


//  Id pregunta: 11460 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es INCORRECTA, en referencia a los derechos de los usuarios finales contenidos en la Ley 9/2014:";
 choices[93]= new Array();
 choices[93][0] = "Los usuarios finales tienen derecho a resolver el contrato con un operador en cualquier momento.";
 choices[93][1] = "Los usuarios finales tienen derecho a la continuidad del servicio y a obtener una compensaci&oacute;n autom&aacute;tica por su interrupci&oacute;n.";
 choices[93][2] = "El plazo de cambio de operador debe ser como m&aacute;ximo de un d&iacute;a.";
 choices[93][3] = "Los usuarios finales tienen derecho a la desconexi&oacute;n de determinados servicios.";
 answers[93] = choices[93][2];
 units[93] = "110";
 comments[93] = "Id Pregunta: 11460. ";


//  Id pregunta: 11464 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n la Ley 9/2014, se&ntilde;ale la respuesta falsa acerca de los Planes Nacionales de Numeraci&oacute;n, Direccionamiento y Denominaci&oacute;n:";
 choices[94]= new Array();
 choices[94][0] = "Elabora la propuesta del Plan el MINETUR.";
 choices[94][1] = "Lo aprueba el Gobierno por Real Decreto.";
 choices[94][2] = "Lo modifica el MINETUR por Orden.";
 choices[94][3] = "La modificaci&oacute;n exige el informe previo de la ORECE.";
 answers[94] = choices[94][3];
 units[94] = "110";
 comments[94] = "Id Pregunta: 11464. ";


//  Id pregunta: 11465 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n la Ley 9/2014, el usuario tiene derecho:";
 choices[95]= new Array();
 choices[95][0] = "A figurar en las gu&iacute;as de abonados.";
 choices[95][1] = "A no figurar en las gu&iacute;as de abonados.";
 choices[95][2] = "A ambas.";
 choices[95][3] = "A ninguna.";
 answers[95] = choices[95][2];
 units[95] = "110";
 comments[95] = "Id Pregunta: 11465. ";


//  Id pregunta: 11469 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Indique la respuesta correcta sobre la Ley 9/2014:";
 choices[96]= new Array();
 choices[96][0] = "La CNMC puede modificar la estructura y organizaci&oacute;n de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[96][1] = "El MINETUR puede modificar la estructura y organizaci&oacute;n de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[96][2] = "ORECE puede modificar cualquier punto de la Ley 9/2014.";
 choices[96][3] = "El MINETUR y ORECE siempre trabajan conjuntamente.";
 answers[96] = choices[96][1];
 units[96] = "110";
 comments[96] = "Id Pregunta: 11469. ";


//  Id pregunta: 11479 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n la Ley 9/2014, respecto a los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n:";
 choices[97]= new Array();
 choices[97][0] = "Podr&aacute;n ser modificados por el Gobierno.";
 choices[97][1] = "No podr&aacute;n sufrir ninguna modificaci&oacute;n tras ser aprobados.";
 choices[97][2] = "El MINETUR podr&aacute; modificarlo, previo informe de la CNMC.";
 choices[97][3] = "Podr&aacute;n ser modificados por la CNMC.";
 answers[97] = choices[97][2];
 units[97] = "110";
 comments[97] = "Id Pregunta: 11479. ";


//  Id pregunta: 11673 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  El JRE no contiene el nivel de:";
 choices[98]= new Array();
 choices[98][0] = "Herramientas de interfaz de usuario";
 choices[98][1] = "Despliegue";
 choices[98][2] = "Librer&iacute;as de integraci&oacute;n";
 choices[98][3] = "Contiene los 3 niveles";
 answers[98] = choices[98][3];
 units[98] = "116";
 comments[98] = "Id Pregunta: 11673. ";


//  Id pregunta: 11711 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera acerca de las VLANs?";
 choices[99]= new Array();
 choices[99][0] = "Se deben tener al menos dos VLANs definidas en cada red conmutada ";
 choices[99][1] = "Se deben tener al menos tres VLANs definidas en cada red conmutada ";
 choices[99][2] = "No deber&iacute;an tenerse m&aacute;s de 3 switches en cada red conmutada";
 choices[99][3] = "Actuan a nivel 2 del modelo OSI";
 answers[99] = choices[99][3];
 units[99] = "102";
 comments[99] = "Id Pregunta: 11711. NULL";


