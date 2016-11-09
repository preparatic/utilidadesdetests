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

//  Id pregunta: 2888 AÃ±o de creación de pregunta: 2005-01-01
 questions[0]= "1)  La red SARA (Intranet Administrativa) no tiene entre sus principales objetivos:";
 choices[0]= new Array();
 choices[0][0] = "Ser un &uacute;nico punto de conexi&oacute;n con las Comunidades Aut&oacute;nomas";
 choices[0][1] = "Conectar con la Uni&oacute;n Europea a trav&eacute;s de TESTA e IDA";
 choices[0][2] = "Conectar todos los edificios de la Administraci&oacute;n General del Estado";
 choices[0][3] = "Ser de utilidad en la implantaci&oacute;n de aplicaciones horizontales";
 answers[0] = choices[0][2];
 units[0] = "113.44";
 comments[0] = "Id Pregunta: 2888. NULL";


//  Id pregunta: 2940 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  El protocolo que permite llevar peticiones para bloques de dispositivos SCSI sobre una red IP es:";
 choices[1]= new Array();
 choices[1][0] = "uSCSI";
 choices[1][1] = "FCP";
 choices[1][2] = "iSCSI";
 choices[1][3] = "FCIP";
 answers[1] = choices[1][2];
 units[1] = "48,96,97";
 comments[1] = "Id Pregunta: 2940. Similar a examen TIC SS A 2004";


//  Id pregunta: 2951 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  En ADSL la velocidad de transmisi&oacute;n no depende de:";
 choices[2]= new Array();
 choices[2][0] = "La longitud del bucle de abonado local";
 choices[2][1] = "Los empalmes, conectores y distribuidores que haya para llevar la se&ntilde;al a distintos equipos en el domicilio del usuario";
 choices[2][2] = "Diafon&iacute;a";
 choices[2][3] = "Todas las anteriores.";
 answers[2] = choices[2][3];
 units[2] = "107";
 comments[2] = "Id Pregunta: 2951. Similar a examen TIC SS A 2003";


//  Id pregunta: 2969 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguentes no son funciones de la CNMC seg&uacute;n la Ley 9/2014, General de Telecomunicaciones?";
 choices[3]= new Array();
 choices[3][0] = "Establecer, cuando proceda, las obligaciones espec&iacute;ficas que correspondan a los operadores con poder significativo en mercados de referencia.";
 choices[3][1] = "Realizar las funciones de arbitraje, tanto de derecho como de equidad, que le sean sometidas por los operadores de comunicaciones electr&oacute;nicas en aplicaci&oacute;n de la Ley 60/2003, de 23 de diciembre, de Arbitraje.";
 choices[3][2] = "Gesti&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico.";
 choices[3][3] = "Fijar las caracter&iacute;sticas y condiciones para la conservaci&oacute;n de los n&uacute;meros en aplicaci&oacute;n de los aspectos t&eacute;cnicos y administrativos que mediante real decreto se establezcan para que &eacute;sta se lleve a cabo.";
 answers[3] = choices[3][2];
 units[3] = "110";
 comments[3] = "Id Pregunta: 2969. ";


//  Id pregunta: 2981 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  El protocolo ARP se basa en la creaci&oacute;n de?";
 choices[4]= new Array();
 choices[4][0] = "Tablas din&aacute;micas";
 choices[4][1] = "Tablas est&aacute;ticas";
 choices[4][2] = "bloding";
 choices[4][3] = "ninguna de las anteriores";
 answers[4] = choices[4][0];
 units[4] = "100";
 comments[4] = "Id Pregunta: 2981. Examen Julio 2003";


//  Id pregunta: 3077 AÃ±o de creación de pregunta: 2005-01-01
 questions[5]= "6)  La intrusi&oacute;n de un caballo de troya (Trojan Horse) en un ordenador puede afectar, en primer lugar a:";
 choices[5]= new Array();
 choices[5][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n almacenada";
 choices[5][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n almacenada";
 choices[5][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n almacenada";
 choices[5][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[5] = choices[5][0];
 units[5] = "111";
 comments[5] = "Id Pregunta: 3077. NULL";


//  Id pregunta: 3115 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;A qu&eacute; nivel OSI hace referencia la norma RS-232-C?:";
 choices[6]= new Array();
 choices[6][0] = "Nivel 3";
 choices[6][1] = "Nivel 2";
 choices[6][2] = "Nivel 1";
 choices[6][3] = "No se puede identificar con ninguno de los niveles OSI ya que no est&aacute; reconocido como est&aacute;ndar &lsquo;de jure&rsquo;";
 answers[6] = choices[6][2];
 units[6] = "100";
 comments[6] = "Id Pregunta: 3115. NULL";


//  Id pregunta: 3159 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones referidas al modelo de referencia de interconexi&oacute;n de sistemas abiertos de ISO es err&oacute;nea?:";
 choices[7]= new Array();
 choices[7][0] = "El nivel de presentaci&oacute;n da servicios al nivel de aplicaci&oacute;n y solicita revisi&oacute;n a trav&eacute;s de primitivas al nivel de sesi&oacute;n";
 choices[7][1] = "El bloque de transporte est&aacute; formado por los niveles f&iacute;sico, enlace, red y transporte";
 choices[7][2] = "El protocolo de nivel de presentaci&oacute;n regula el di&aacute;logo entre dos entes de nivel 5";
 choices[7][3] = "El nivel de red da servicio al nivel de transporte y solicita servicios del nivel enlace";
 answers[7] = choices[7][2];
 units[7] = "100";
 comments[7] = "Id Pregunta: 3159. Los tres niveles inferiores (f&iacute;sico, de enlace, de red) constituyen el bloque de transmisi&oacute;n. (depenndientes de la red de conmutaci&oacute;n) y los tres superiores est&aacute;n orientados a la aplicaci&oacute;n (funciones de comunicaci&oacute;n)";


//  Id pregunta: 3162 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes asociaciaciones protocolos OSI-protocolos TCP/IP no es correcta?:";
 choices[8]= new Array();
 choices[8][0] = "SMTP-X.400";
 choices[8][1] = "TELNET-VT";
 choices[8][2] = "FTAM-FTP";
 choices[8][3] = "X.500-SNMP";
 answers[8] = choices[8][3];
 units[8] = "100, 104, 106";
 comments[8] = "Id Pregunta: 3162. ";


//  Id pregunta: 3179 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes proposiciones no es correcta en lo relativo a GPRS?:";
 choices[9]= new Array();
 choices[9][0] = "La conmutaci&oacute;n en GRPS se realiza a nivel de paquetes de datos";
 choices[9][1] = "La red GRPS se puede comunicar con redes TCP/IP";
 choices[9][2] = "La tarificaci&oacute;n no tiene recargo de establecimiento de llamada y es por tiempo de conexi&oacute;n";
 choices[9][3] = "El acceso radio es por paquetes de datos";
 answers[9] = choices[9][2];
 units[9] = "108";
 comments[9] = "Id Pregunta: 3179. ";


//  Id pregunta: 3182 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes respuestas no describe las funciones de un repetidor?:";
 choices[10]= new Array();
 choices[10][0] = "Recibe, amplifica y retransmite las se&ntilde;ales recibidas";
 choices[10][1] = "Interconecta m&uacute;ltiples segmentos de LAN";
 choices[10][2] = "Previene del deterioro de la se&ntilde;al causado por las largas longitudes del cable";
 choices[10][3] = "Filtra el tr&aacute;fico basado en las direcciones MAC";
 answers[10] = choices[10][3];
 units[10] = "97";
 comments[10] = "Id Pregunta: 3182. NULL";


//  Id pregunta: 3225 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes no es protocolo OSI de nivel de aplicaci&oacute;n?:";
 choices[11]= new Array();
 choices[11][0] = "Transferencia de ficheros FTAM";
 choices[11][1] = "Correo electr&oacute;nico X.400";
 choices[11][2] = "Servicios de Directorio X.500";
 choices[11][3] = "Transferencia de correo electr&oacute;nico SMTP";
 answers[11] = choices[11][3];
 units[11] = "100";
 comments[11] = "Id Pregunta: 3225. SMTP es protocolo del nivel de aplicaci&oacute;n del modelo TCP/IP";


//  Id pregunta: 3261 AÃ±o de creación de pregunta: 2009-01-01
 questions[12]= "13)  En GPRS, es razonable facturar:";
 choices[12]= new Array();
 choices[12][0] = "por tiempo de conexi&oacute;n";
 choices[12][1] = "por n&uacute;mero de conexiones";
 choices[12][2] = "por portadoras en uso";
 choices[12][3] = "por volumen y calidad de servicio";
 answers[12] = choices[12][3];
 units[12] = "108";
 comments[12] = "Id Pregunta: 3261. ";


//  Id pregunta: 3284 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Qu&eacute; es fibra oscura?:";
 choices[13]= new Array();
 choices[13][0] = "Fibra &oacute;ptica que ha perdido sus propiedades y que se ha vuelto opaca";
 choices[13][1] = "Ramal de fibra &oacute;ptica que alquila un particular a un Operador de Telecomunicaciones sin electr&oacute;nica u optr&oacute;nica";
 choices[13][2] = "Un terminador de fibra &oacute;ptica para igualar la impedancia de la l&iacute;nea";
 choices[13][3] = "Fibra &oacute;ptica con impurezas";
 answers[13] = choices[13][1];
 units[13] = "99";
 comments[13] = "Id Pregunta: 3284. NULL";


//  Id pregunta: 3286 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Qu&eacute; es la MTU en un paquete IP?:";
 choices[14]= new Array();
 choices[14][0] = "El m&aacute;ximo uso de transmisi&oacute;n";
 choices[14][1] = "La mayor unidad posible de datos que puede ser enviada a trav&eacute;s de un medio f&iacute;sico";
 choices[14][2] = "El tama&ntilde;o del paquete IP";
 choices[14][3] = "Solo se utiliza en IPv6";
 answers[14] = choices[14][1];
 units[14] = "100";
 comments[14] = "Id Pregunta: 3286. ";


//  Id pregunta: 3332 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Al servicio que permite a un usuario transmitir una imagen est&aacute;tica de una c&aacute;mara, a trav&eacute;s de la l&iacute;nea telef&oacute;nica, a un usuario remotamente situado, se denomina:";
 choices[15]= new Array();
 choices[15][0] = "Videoconferencia";
 choices[15][1] = "Video de baja velocidad";
 choices[15][2] = "Bases de datos de im&aacute;genes";
 choices[15][3] = "No existe este servicio";
 answers[15] = choices[15][1];
 units[15] = "108";
 comments[15] = "Id Pregunta: 3332. ";


//  Id pregunta: 3343 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Con voz sobre IP:";
 choices[16]= new Array();
 choices[16][0] = "Se alcanza la misma calidad que con llamadas telef&oacute;nicas convencionales";
 choices[16][1] = "Se pueden realizar llamadas internacionales al mismo precio que una llamada local, el precio de la conexi&oacute;n con el nodo de acceso a Internet";
 choices[16][2] = "Las 2 respuestas anteriores son correctas";
 choices[16][3] = "Las 2 respuestas anteriores son falsas";
 answers[16] = choices[16][2];
 units[16] = "112";
 comments[16] = "Id Pregunta: 3343. *";


//  Id pregunta: 3364 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Dentro de la familia de protocolos TCP/IP, el protocolo RARP se emplea para:";
 choices[17]= new Array();
 choices[17][0] = "Establecer un protocolo de rearranque remoto que activa el demonio BOOTP";
 choices[17][1] = "Obtener la direcci&oacute;n Ethernet (48 bits) a partir de la direcci&oacute;n IP (32 bits)";
 choices[17][2] = "Obtener la direcci&oacute;n IP (32 bits) a partir de la direcci&oacute;n Ethernet (48 bits)";
 choices[17][3] = "Manejar la tabla de direcciones IP en el socket 250 de UDP";
 answers[17] = choices[17][2];
 units[17] = "100";
 comments[17] = "Id Pregunta: 3364. NULL";


//  Id pregunta: 3374 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Dentro del Modelo de Referencia OSI para la interconexi&oacute;n de sistemas abiertos:";
 choices[18]= new Array();
 choices[18][0] = "El formato de datos corresponde al nivel 6";
 choices[18][1] = "El enrutamiento de paquetes corresponde al nivel 4";
 choices[18][2] = "La multiplexaci&oacute;n de conexiones corresponde al nivel 2";
 choices[18][3] = "Todas las anteriores son ciertas";
 answers[18] = choices[18][0];
 units[18] = "100";
 comments[18] = "Id Pregunta: 3374. NULL";


//  Id pregunta: 3391 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  El nivel de enlace del modelo OSI tiene como funci&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "Enrutar los datos";
 choices[19][1] = "Conectar sistemas no enlazados directamente";
 choices[19][2] = "Transmitir informaci&oacute;n entre nodos conectados entre si directamente";
 choices[19][3] = "Mantener la integridad de los datos entre extremos de la red";
 answers[19] = choices[19][2];
 units[19] = "100";
 comments[19] = "Id Pregunta: 3391. NULL";


//  Id pregunta: 3406 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Ethernet:";
 choices[20]= new Array();
 choices[20][0] = "Fue inventada por Xerox y desarrollada por Xerox, Intel y DEC";
 choices[20][1] = "Fue inventada por Fujitsu y desarrollada por Fujitsu, Nortel y Cisco";
 choices[20][2] = "Fue inventada por Siemens y desarrollada por Siemens, Alcatel y Lucent";
 choices[20][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[20] = choices[20][0];
 units[20] = "101";
 comments[20] = "Id Pregunta: 3406. ";


//  Id pregunta: 3453 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  El protocolo HDLC&hellip;:";
 choices[21]= new Array();
 choices[21][0] = "Es un protocolo de nivel f&iacute;sico";
 choices[21][1] = "Es un protocolo a nivel de enlace";
 choices[21][2] = "Es un protocolo a nive de red";
 choices[21][3] = "Es un protocolo a nivel de transporte";
 answers[21] = choices[21][1];
 units[21] = "100";
 comments[21] = "Id Pregunta: 3453. NULL";


//  Id pregunta: 3478 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  El tipo de fibra &oacute;ptica que permite la transmisi&oacute;n a m&aacute;s velocidad es:";
 choices[22]= new Array();
 choices[22][0] = "&Iacute;ndice gradual";
 choices[22][1] = "Multimodo";
 choices[22][2] = "Fibra &oacute;ptica de salto de &iacute;ndice";
 choices[22][3] = "Monomodo";
 answers[22] = choices[22][3];
 units[22] = "99";
 comments[22] = "Id Pregunta: 3478. ";


//  Id pregunta: 3511 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  En el protocolo HTTP, el m&eacute;todo HEAD:";
 choices[23]= new Array();
 choices[23][0] = "Es lo mismo que GET";
 choices[23][1] = "Recupera el cuerpo o Body del mensaje";
 choices[23][2] = "Las cabeceras no aparecen en GET pero s&iacute; en HEAD";
 choices[23][3] = "Se utiliza normalmente para ver la existencia del documento o su longitud";
 answers[23] = choices[23][3];
 units[23] = "112";
 comments[23] = "Id Pregunta: 3511. ";


//  Id pregunta: 3602 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  La distancia m&aacute;xima entre estaciones en el est&aacute;ndard 10BaseT es de:";
 choices[24]= new Array();
 choices[24][0] = "100 metros";
 choices[24][1] = "185 metros";
 choices[24][2] = "200 metros";
 choices[24][3] = "500 metros";
 answers[24] = choices[24][0];
 units[24] = "99";
 comments[24] = "Id Pregunta: 3602. ";


//  Id pregunta: 3612 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  La interconexi&oacute;n de redes privadas a trav&eacute;s de la red 'p&uacute;blica' Internet manteniendo sus propias direcciones IP se consigue por medio de:";
 choices[25]= new Array();
 choices[25][0] = "Firewalls";
 choices[25][1] = "Proxies a nivel de aplicaci&oacute;n";
 choices[25][2] = "Tunneling o encapsulado";
 choices[25][3] = "Cifrado de las cabeceras IP";
 answers[25] = choices[25][2];
 units[25] = "103,113";
 comments[25] = "Id Pregunta: 3612. ";


//  Id pregunta: 3769 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Para usar DNS en una LAN que utiliza Traducciones de Direcciones (NAT) en el firewall:";
 choices[26]= new Array();
 choices[26][0] = "Es recomendable un DNS interno";
 choices[26][1] = "Es recomendable ofrecer el servicio DNS en el firewall";
 choices[26][2] = "Es necesario utilizar un DNS externo al existir NAT";
 choices[26][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[26] = choices[26][0];
 units[26] = "112";
 comments[26] = "Id Pregunta: 3769. ";


//  Id pregunta: 3796 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Respecto a WAP, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[27]= new Array();
 choices[27][0] = "Sustituye a GSM";
 choices[27][1] = "Es una evoluci&oacute;n de GPRS";
 choices[27][2] = "Puede implementarse sobre GPRS";
 choices[27][3] = "S&oacute;lo puede implementarse sobre GSM";
 answers[27] = choices[27][2];
 units[27] = "108";
 comments[27] = "Id Pregunta: 3796. ";


//  Id pregunta: 3804 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Se conoce como tiempo de vuelo a:";
 choices[28]= new Array();
 choices[28][0] = "El tiempo desde que el cabeza de un disco comienza su movimiento hasta que se posa sobre una pista concreta de la superficie del disco";
 choices[28][1] = "El tiempo desde que una se&ntilde;al (onda) sale de un emisor v&iacute;a radio (aire) hasta que llega a su destino";
 choices[28][2] = "El tiempo que transcurre desde que se pulsa una tecla hasta que el sistema responde al comando requerido";
 choices[28][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[28] = choices[28][1];
 units[28] = "108";
 comments[28] = "Id Pregunta: 3804. ";


//  Id pregunta: 3819 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[29]= new Array();
 choices[29][0] = "El mantenimiento del anillo se hace de forma centralizada en token ring y distribuida en token bus";
 choices[29][1] = "El mantenimiento del anillo se hace de forma centralizada en token ring y token bus";
 choices[29][2] = "El mantenimiento del anillo se hace de forma distribuida en token ring y token bus";
 choices[29][3] = "El mantenimiento del anillo se hace de forma centralizada en token bus y distribuida en token ring";
 answers[29] = choices[29][0];
 units[29] = "101";
 comments[29] = "Id Pregunta: 3819. ";


//  Id pregunta: 3825 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Se&ntilde;ale la opci&oacute;n que mejor indica la utilizaci&oacute;n de los cables de cuadretes:";
 choices[30]= new Array();
 choices[30][0] = "Los cables de cuadretes son indicados en transmisiones de baja frecuencia y en largas distancias";
 choices[30][1] = "Los cables de cuadretes se deben utilizar para transmisi&oacute;n de se&ntilde;ales de baja frecuencia y en distancias medias";
 choices[30][2] = "Los cables de cuadretes son indicados en transmisi&oacute;n de se&ntilde;ales de alta frecuencia y en distancias medias";
 choices[30][3] = "Los cables de cuadretes son los adecuados para transmisi&oacute;n de se&ntilde;ales de alta frecuencia y largas distancias";
 answers[30] = choices[30][2];
 units[30] = "99";
 comments[30] = "Id Pregunta: 3825. ";


//  Id pregunta: 3870 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  Qu&eacute; es falso respecto a XHTML";
 choices[31]= new Array();
 choices[31][0] = "Obliga a anidar las etiquetas adecuadamente";
 choices[31][1] = "Se adapta mejor a los navegadores m&aacute;s avanzados";
 choices[31][2] = "Obliga a encerrar entre comillas los valores de los atributos";
 choices[31][3] = "Cada documento tiene que especificar su tipo";
 answers[31] = choices[31][1];
 units[31] = "113";
 comments[31] = "Id Pregunta: 3870. Tanenbaum";


//  Id pregunta: 3921 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  Para la conservaci&oacute;n de la informaci&oacute;n sobre soporte electr&oacute;nico:";
 choices[32]= new Array();
 choices[32][0] = "Ser&aacute; &uacute;til disponer de un SAI (UPS).";
 choices[32][1] = "Conviene almacenar la configuraci&oacute;n de la red en un fichero contenido en el sistema a proteger.";
 choices[32][2] = "Podemos utilizar cualquier ordenador descatalogado que tengamos a mano.";
 choices[32][3] = "El soporte ha de ser tolerante a fallos.";
 answers[32] = choices[32][0];
 units[32] = "97";
 comments[32] = "Id Pregunta: 3921. NULL";


//  Id pregunta: 3968 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Sobre  SNMP indicar la correcta";
 choices[33]= new Array();
 choices[33][0] = "Conexi&oacute;n IP orientada a conexi&oacute;n";
 choices[33][1] = " Conexi&oacute;n IP no orientada a conexi&oacute;n";
 choices[33][2] = "Conexi&oacute;n UDP no orientada a conexi&oacute;n";
 choices[33][3] = "Conexi&oacute;n TCP orientada a conexi&oacute;n";
 answers[33] = choices[33][2];
 units[33] = "112";
 comments[33] = "Id Pregunta: 3968. ";


//  Id pregunta: 4005 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Con respecto al est&aacute;ndar de servicios de directorio X500 , el protocolo utilizado para intercambiar informaci&oacute;n administrativa entre dos DSA&rsquo;s (Directory Service Agent) se denomina:";
 choices[34]= new Array();
 choices[34][0] = "DMO";
 choices[34][1] = "DOP";
 choices[34][2] = "DMD";
 choices[34][3] = "DISP";
 answers[34] = choices[34][1];
 units[34] = "106";
 comments[34] = "Id Pregunta: 4005. ";


//  Id pregunta: 4008 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l es el puerto est&aacute;ndar TCP que usa el protocolo IMAP (&quot;Interactive Mail Access Protocol&quot;)?";
 choices[35]= new Array();
 choices[35][0] = "110";
 choices[35][1] = "25";
 choices[35][2] = "143";
 choices[35][3] = "21";
 answers[35] = choices[35][2];
 units[35] = "106";
 comments[35] = "Id Pregunta: 4008. ";


//  Id pregunta: 4019 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  &iquest;En qu&eacute; banda de frecuencias funciona Bluetooth?";
 choices[36]= new Array();
 choices[36][0] = "3,5 GHz";
 choices[36][1] = "5 GHz";
 choices[36][2] = "1,8 GHz";
 choices[36][3] = "2,45 GHz";
 answers[36] = choices[36][3];
 units[36] = "107";
 comments[36] = "Id Pregunta: 4019. NULL";


//  Id pregunta: 4024 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Ordene, de menor a mayor velocidad m&aacute;xima de transmisi&oacute;n de datos, las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles:";
 choices[37]= new Array();
 choices[37][0] = "HSCSD, GSM, GPRS, UMTS";
 choices[37][1] = "GSM. HSCSD, UMTS, GPRS";
 choices[37][2] = "GSM, HSCSD, GPRS, UMTS";
 choices[37][3] = "GSM, GPRS, HSCSD, UMTS";
 answers[37] = choices[37][2];
 units[37] = "108";
 comments[37] = "Id Pregunta: 4024. ";


//  Id pregunta: 4068 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  En la estructura de la actual internet podemos diferenciar varios niveles jer&aacute;rquicos";
 choices[38]= new Array();
 choices[38][0] = "3, red troncal - redes de proveedores de &aacute;mbito local - redes corporativas";
 choices[38][1] = "4, red troncal - redes de proveedores de tr&aacute;nsito y acceso internacional - redes de proveedores de acceso local - redes corporativas";
 choices[38][2] = "5, red troncal - redes de proveedores de tr&aacute;nsito y acceso internacional - redes de proveedores de acceso local - redes corporativas - redes locales";
 choices[38][3] = "Internet es la red de redes y no tiene ning&uacute;n tipo de jerarqu&iacute;a en sus infraestructuras";
 answers[38] = choices[38][1];
 units[38] = "112";
 comments[38] = "Id Pregunta: 4068. ";


//  Id pregunta: 4112 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Las siglas NNTP corresponden a:";
 choices[39]= new Array();
 choices[39][0] = "Native News Transport Protocol";
 choices[39][1] = "Native Network Transport Protocol";
 choices[39][2] = "Network News Transport Protocol";
 choices[39][3] = "Todas las anteriores son falsas";
 answers[39] = choices[39][2];
 units[39] = "112";
 comments[39] = "Id Pregunta: 4112. ";


//  Id pregunta: 4214 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  En la arquitectura de desarrollo Web bajo Java es cierto que:";
 choices[40]= new Array();
 choices[40][0] = "Java 2 Micro Edition es el entorno de ejecuci&oacute;n est&aacute;ndar para Java";
 choices[40][1] = "Los Java 2 Enterprise Edition blueprints son los que permiten verificar la compatibilidad de una plataforma Java";
 choices[40][2] = "Los servlets son usados para pasar contenido din&aacute;mico al cliente a trav&eacute;s de http";
 choices[40][3] = "Los servlets http no heredan los m&eacute;todos doGet() y doPost() de la clase httpServlet";
 answers[40] = choices[40][2];
 units[40] = "116";
 comments[40] = "Id Pregunta: 4214. ";


//  Id pregunta: 4222 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta para los protocolos de enlace orientados a car&aacute;cter?";
 choices[41]= new Array();
 choices[41][0] = "La sincronizaci&oacute;n se consigue gracias a que siempre hay un car&aacute;cter STX &oacute; SOH al comienzo de la trama y un car&aacute;cter ETX &oacute; ETB al final de la trama";
 choices[41][1] = "No es necesario el control de transparencia dado que el contenido de la trama se conoce gracias a la aparici&oacute;n de los caracteres de control";
 choices[41][2] = "El control de flujo mediante t&eacute;cnica de frenado brusco se consigue utilizando una trama de control wack";
 choices[41][3] = "Para la detecci&oacute;n de errores se protegen todos los caracteres transmitidos excepto las cabeceras";
 answers[41] = choices[41][2];
 units[41] = "100";
 comments[41] = "Id Pregunta: 4222. Control WACK :Wait After ACK";


//  Id pregunta: 4350 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  La red G&Eacute;ANT:";
 choices[42]= new Array();
 choices[42][0] = "Es una red basada en IPv6 de &aacute;mbito mundial, que constituye el n&uacute;cleo de Internet.";
 choices[42][1] = "Es una red basada en IPv6, que sirve de desarrollo e investigaci&oacute;n para la nueva Internet 2.";
 choices[42][2] = "Es la siguiente evoluci&oacute;n l&oacute;gica de la Intranet Administrativa que une a diversos organismos de la Administraci&oacute;n General del Estado.";
 choices[42][3] = "Es una red paneuropea de investigaci&oacute;n, formada por la uni&oacute;n de las redes de investigaci&oacute;n, financiada por la Uni&oacute;n Europea";
 answers[42] = choices[42][3];
 units[42] = "103";
 comments[42] = "Id Pregunta: 4350. ";


//  Id pregunta: 4435 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  En relaci&oacute;n con las diferencias entre Wi-fi y Wi-MAX, se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[43]= new Array();
 choices[43][0] = "El control y gesti&oacute;n de errores debe ser m&aacute;s importante en Wimax por ser m&aacute;s sensible el rango de frecuencias en que trabaja.";
 choices[43][1] = "Wimax est&aacute; dise&ntilde;ado para transporte de tr&aacute;fico multimedia mientras que Wi-fi, si bien podr&iacute;a soportarlo, no fue espec&iacute;ficamente dise&ntilde;ado para ello.";
 choices[43][2] = "Las frecuencias disponibles para Wimax est&aacute; en valores del espectro mayores que las disponibles para Wifi.";
 choices[43][3] = "Wimax fue inicialmente dise&ntilde;ado para conexiones inal&aacute;mbricas estacionarios mientras que Wifi est&aacute; dise&ntilde;ado para Ethernet m&oacute;vil.";
 answers[43] = choices[43][1];
 units[43] = "107";
 comments[43] = "Id Pregunta: 4435. NULL";


//  Id pregunta: 4451 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  En qu&eacute; capa del modelo de referencia OSI se localiza la subcapa de control de acceso al medio?";
 choices[44]= new Array();
 choices[44][0] = "Capa f&iacute;sica.";
 choices[44][1] = "Capa de sesi&oacute;n.";
 choices[44][2] = "Capa de transporte.";
 choices[44][3] = "Capa de enlace de datos.";
 answers[44] = choices[44][3];
 units[44] = "100";
 comments[44] = "Id Pregunta: 4451. NULL";


//  Id pregunta: 4539 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Las siglas CCNA se corresponden con:";
 choices[45]= new Array();
 choices[45][0] = "Una metodolog&iacute;a de gesti&oacute;n de proyectos en Tecnolog&iacute;as de is Informaci&oacute;n.";
 choices[45][1] = "Una metodolog&iacute;a para el an&aacute;lisis y gesti&oacute;n de riesgos en Tecnolog&iacute;as de Ia Informaci&oacute;n.";
 choices[45][2] = "Metodolog&iacute;a de gesti&oacute;n de Ia seguridad en las Tecnolog&iacute;as de Ia Informaci&oacute;n.";
 choices[45][3] = "Una certificaci&oacute;n de Cisco.";
 answers[45] = choices[45][3];
 units[45] = "";
 comments[45] = "Id Pregunta: 4539. ";


//  Id pregunta: 4589 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Cual es el tama&ntilde;o de cabecera en una unidad de datos del protocolo lPv6?";
 choices[46]= new Array();
 choices[46][0] = "es variable";
 choices[46][1] = "de 20 octetos";
 choices[46][2] = "de 40 octetos";
 choices[46][3] = "similar a lPv4";
 answers[46] = choices[46][2];
 units[46] = "100";
 comments[46] = "Id Pregunta: 4589. ";


//  Id pregunta: 4652 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  Los identificadores VPI/VCI tienen significado";
 choices[47]= new Array();
 choices[47][0] = "global para toda la red";
 choices[47][1] = "para cada conexi&oacute;n";
 choices[47][2] = "para cada enlace";
 choices[47][3] = "solo entre el terminal y el switch ATM";
 answers[47] = choices[47][2];
 units[47] = "";
 comments[47] = "Id Pregunta: 4652. ";


//  Id pregunta: 4732 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  En el servidor http Apache al configurarlo como HostnameLookUps On lo que hacemos es:";
 choices[48]= new Array();
 choices[48][0] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del fichero /etc/hosts para almacenar el nombre en el fichero de log";
 choices[48][1] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del servicio dns inverso para almacenar el nombre en el fichero de log";
 choices[48][2] = "Ver si la petici&oacute;n origen tiene un nombre asociado a trav&eacute;s del o los servicios de resoluci&oacute;n de nombres ip para almacenar el nombre en el fichero del log";
 choices[48][3] = "Almacena en el log la ip y tambi&eacute;n el nombre del sistema origen de la petici&oacute;n http";
 answers[48] = choices[48][2];
 units[48] = "112";
 comments[48] = "Id Pregunta: 4732. Examen 2006 JCYL";


//  Id pregunta: 4835 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto al protocolo Real-Time Transport Protocol (RTP) NO es cierta?";
 choices[49]= new Array();
 choices[49][0] = "Permite monitorizar la calidad del servicio que se est&aacute; ofreciendo para servicios con caracter&iacute;sticas detiempo real";
 choices[49][1] = "Proporciona servicios de entrega punto a punto de datos con caracter&iacute;sticas de tiempo real, como audio y";
 choices[49][2] = "Est&aacute; definido en la norma RFC (Request for Comments) 3550, la cual sustituye a la RFC 1889";
 choices[49][3] = "La mayor&iacute;a de las aplicaciones, como por ejemplo VoIP, utilizan RTP sobre UDP (User Datagram Protocol)con el fin de aprovechar los servicios de multiplexi&oacute;n y verificaci&oacute;n de datos (checksum) que ofrece esteprotocolo";
 answers[49] = choices[49][0];
 units[49] = "100, 117";
 comments[49] = "Id Pregunta: 4835. ";


//  Id pregunta: 4971 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Elena es una funcionaria que gracias a las nuevas medidas de conciliaci&oacute;n de la vida familiar y laboral trabajadesde su casa (teletrabajo) acudiendo al Ministerio puntualmente. Elena se conecta diariamente por Internet alhost ministerial, cuya direcci&oacute;n IP es 60.47.112.6. El ordenador cliente de Elena ayer ten&iacute;a la direcci&oacute;n IP192.168.0.3. Hoy se ha conectado de nuevo, y sin embargo su direcci&oacute;n IP es 192.168.0.2. Esto ocurre porque:";
 choices[50]= new Array();
 choices[50][0] = "El proveedor de acceso a Internet que utiliza Elena tiene un servidor DHCP (Dinamic Host ConfigurationProtocol) que asigna a Elena una direcci&oacute;n temporal en cada sesi&oacute;n.";
 choices[50][1] = "El proveedor de acceso a Internet que utiliza Elena utiliza un protocolo UTP que disminuye la direcci&oacute;n de losclientes en un octeto cada vez.";
 choices[50][2] = "Elena ha cambiado su tarjeta de acceso Ethernet de una con direcci&oacute;n A1-BD-33-6E-C7-BB a otra con direcci&oacute;nA1-BD-33-6E-C7-BA.";
 choices[50][3] = "Elena est&aacute; utilizando una conexi&oacute;n Wifi.";
 answers[50] = choices[50][0];
 units[50] = "100";
 comments[50] = "Id Pregunta: 4971. Examen TIC B 2007";


//  Id pregunta: 4981 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Una caracter&iacute;stica de la tecnolog&iacute;a HSDPA (High Speed Downlink Packet Access) es:";
 choices[51]= new Array();
 choices[51][0] = "Adaptaci&oacute;n r&aacute;pida del enlace. La velocidad de transmisi&oacute;n de datos var&iacute;a de forma r&aacute;pida seg&uacute;n las condicionesdel canal de radio.";
 choices[51][1] = "Transmisi&oacute;n en canal no compartido. Se introduce un nuevo canal de transporte en el enlace descendentedenominado HS-DSCH (High-Speed Downlink Shared Channel).";
 choices[51][2] = "Los datos que se reciben de forma err&oacute;nea, debido a las condiciones de propagaci&oacute;n, no hay que solicitarlos denuevo al transmisor para su correcci&oacute;n.";
 choices[51][3] = "La modulaci&oacute;n normalmente empleada es 4-QAM.";
 answers[51] = choices[51][0];
 units[51] = "108";
 comments[51] = "Id Pregunta: 4981. Examen TIC B 2007";


//  Id pregunta: 4991 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes NO es un servicio de Internet con arquitectura cliente/servidor?:";
 choices[52]= new Array();
 choices[52][0] = "ADSL";
 choices[52][1] = "Grupos noticias (news)";
 choices[52][2] = "FTP";
 choices[52][3] = "IRC";
 answers[52] = choices[52][0];
 units[52] = "112";
 comments[52] = "Id Pregunta: 4991. Examen TIC A 2007";


//  Id pregunta: 4999 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  El protocolo DHCP (&quot;Dynamic Host Configuration Protocol&quot;) permite:";
 choices[53]= new Array();
 choices[53][0] = "Resolver la direcci&oacute;n del nombre de un host.";
 choices[53][1] = "Eliminar paquetes TCP (Transmission Control Protocol)";
 choices[53][2] = "Asignar din&aacute;micamente direcciones IP";
 choices[53][3] = "Enrutar paquetes IP";
 answers[53] = choices[53][2];
 units[53] = "112";
 comments[53] = "Id Pregunta: 4999. Examen TIC A 2007";


//  Id pregunta: 5049 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  El algoritmo de cifrado IDEA es del tipo:";
 choices[54]= new Array();
 choices[54][0] = "Asim&eacute;trico";
 choices[54][1] = "Sim&eacute;trico por bloques";
 choices[54][2] = "Sim&eacute;trico de flujo";
 choices[54][3] = "Sim&eacute;trico de resumen (hash)";
 answers[54] = choices[54][1];
 units[54] = "111";
 comments[54] = "Id Pregunta: 5049. Examen TIC A 2007";


//  Id pregunta: 5129 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  La seguridad de los algoritmos de cifrado debe basarse en:";
 choices[55]= new Array();
 choices[55][0] = "Mantener el funcionamiento de los algoritmos en secreto.";
 choices[55][1] = "Utilizar sistemas propietarios.";
 choices[55][2] = "Demostrar su resistencia desde un punto de vista te&oacute;rico y pr&aacute;ctico.";
 choices[55][3] = "Utilizar tarjeta electr&oacute;nica";
 answers[55] = choices[55][2];
 units[55] = "111";
 comments[55] = "Id Pregunta: 5129. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5157 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  El protocolo SET:";
 choices[56]= new Array();
 choices[56][0] = "Es un protocolo para la realizaci&oacute;n de transacciones de pago seguras a trav&eacute;s de Internet.";
 choices[56][1] = "Es un protocolo para juegos en red.";
 choices[56][2] = "Es un protocolo para la interconexi&oacute;n de chats en Internet.";
 choices[56][3] = "Es un protocolo para la transmisi&oacute;n de voz comprimida a trav&eacute;s de Internet.";
 answers[56] = choices[56][0];
 units[56] = "70";
 comments[56] = "Id Pregunta: 5157. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5163 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  Una antena que radia la misma potencia en todas las direcciones es conocida como:";
 choices[57]= new Array();
 choices[57][0] = "De Marconi";
 choices[57][1] = "Hertziana";
 choices[57][2] = "Ionosf&eacute;rica";
 choices[57][3] = "Isotr&oacute;pica";
 answers[57] = choices[57][3];
 units[57] = "107";
 comments[57] = "Id Pregunta: 5163. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5166 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  &iquest;Qu&eacute; tama&ntilde;o de celda se utiliza en ATM (Asynchronous Transfer Mode)?";
 choices[58]= new Array();
 choices[58][0] = "Tiene un tama&ntilde;o variable, al tratarse de conmutaci&oacute;n de paquetes de longitud variable.";
 choices[58][1] = "53 bytes";
 choices[58][2] = "1024 bytes";
 choices[58][3] = "64 bytes";
 answers[58] = choices[58][1];
 units[58] = "109";
 comments[58] = "Id Pregunta: 5166. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5511 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  Indique cu&aacute;l de los siguientes no es un elemento de la arquitectura de la red europea TESTA-II:";
 choices[59]= new Array();
 choices[59][0] = "LocalDomain";
 choices[59][1] = "EuroDomain";
 choices[59][2] = "EuroNet";
 choices[59][3] = "EuroGate";
 answers[59] = choices[59][2];
 units[59] = "103";
 comments[59] = "Id Pregunta: 5511. ";


//  Id pregunta: 5564 AÃ±o de creación de pregunta: 2003-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto al Resilient Packet Ring?";
 choices[60]= new Array();
 choices[60][0] = "Es una tecnolog&iacute;a de nivel 2";
 choices[60][1] = "Es el est&aacute;ndar 802.17";
 choices[60][2] = "Est&aacute; basado en una topolog&iacute;a de anillo dual";
 choices[60][3] = "Est&aacute; orientada a servicios s&iacute;ncronos";
 answers[60] = choices[60][3];
 units[60] = "101";
 comments[60] = "Id Pregunta: 5564. ";


//  Id pregunta: 5566 AÃ±o de creación de pregunta: 2003-01-01
 questions[61]= "62)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.17 del IEEE?";
 choices[61]= new Array();
 choices[61][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[61][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[61][2] = "Resilient Packet Ring";
 choices[61][3] = "Traspaso entre redes";
 answers[61] = choices[61][2];
 units[61] = "101";
 comments[61] = "Id Pregunta: 5566. ";


//  Id pregunta: 5851 AÃ±o de creación de pregunta: 2009-01-01
 questions[62]= "63)  Respecto al correo electr&oacute;nico, &iquest;Qu&eacute; afirmaci&oacute;n NO es correcta?";
 choices[62]= new Array();
 choices[62][0] = "IMAP es un protocolo de env&iacute;o de correo";
 choices[62][1] = "POP es un protocolo de acceso a correo";
 choices[62][2] = "SMTP es un protocolo de transporte de mensajes";
 choices[62][3] = "MIME permite acentos en los mensajes de correo";
 answers[62] = choices[62][0];
 units[62] = "106";
 comments[62] = "Id Pregunta: 5851. Pregunta 31";


//  Id pregunta: 6046 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  En el &aacute;mbito del Single Sign-On, &iquest;c&oacute;mo se denomina a la informaci&oacute;n confidencial agrupada (nombre de usuario, contrase&ntilde;a, etc) que se precisa para acceder a las aplicaciones?";
 choices[63]= new Array();
 choices[63][0] = "Credenciales";
 choices[63][1] = "Federaci&oacute;n";
 choices[63][2] = "Cookies";
 choices[63][3] = "Login";
 answers[63] = choices[63][0];
 units[63] = "118";
 comments[63] = "Id Pregunta: 6046. ";


//  Id pregunta: 6048 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  GEANT2 es una red promovida por la UE para:";
 choices[64]= new Array();
 choices[64][0] = "El intercambio de datos entre las Administraciones Europeas";
 choices[64][1] = "La interconexi&oacute;n de la comunidad cient&iacute;fica y universitaria";
 choices[64][2] = "Las dos respuestas anteriores son correctas";
 choices[64][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[64] = choices[64][1];
 units[64] = "103";
 comments[64] = "Id Pregunta: 6048. ";


//  Id pregunta: 7260 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  La diferencia entre los protocolos POP  e IMAP es que:";
 choices[65]= new Array();
 choices[65][0] = "Uno es un protocolo de env&iacute;o de correo electr&oacute;nico, y el otro lo es de recepci&oacute;n";
 choices[65][1] = "Uno es un protocolo de env&iacute;o de correo electr&oacute;nico, y el otro lo es de env&iacute;o y recepci&oacute;n";
 choices[65][2] = "Uno establece una comunicaci&oacute;n bidireccional y el otro no";
 choices[65][3] = "La capa de ubicaci&oacute;n de cada uno de ellos en el modelo TCP/IP es distinta";
 answers[65] = choices[65][2];
 units[65] = "106";
 comments[65] = "Id Pregunta: 7260. Examen TIC B 2009";


//  Id pregunta: 7261 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  El sistema bluetooth posee las siguientes caracter&iacute;sticas. Se&ntilde;ale cu&aacute;l es la INCORRECTA";
 choices[66]= new Array();
 choices[66][0] = "Funciona en la banda de frecuencias ISM (2,45 GHz)";
 choices[66][1] = "Se corresponde con el est&aacute;ndar IEEE 802.15";
 choices[66][2] = "&quot;La topolog&iacute;a de las redes Bluetooth se conoce como &quot;&quot;micronet&quot;&quot; o microrred&quot;";
 choices[66][3] = "Bluetooth v2.0 permite alcanzar velocidades de hasta 3 Mbps";
 answers[66] = choices[66][2];
 units[66] = "107";
 comments[66] = "Id Pregunta: 7261. Examen TIC B 2009";


//  Id pregunta: 7268 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Un programa que se aloja en el ordenador y permite el acceso a usuarios externos, con el fin de obtener informaci&oacute;n o controlar la m&aacute;quina de forma remota, se denomina:";
 choices[67]= new Array();
 choices[67][0] = "Bot";
 choices[67][1] = "Virus";
 choices[67][2] = "Troyano";
 choices[67][3] = "Gusano";
 answers[67] = choices[67][2];
 units[67] = "111";
 comments[67] = "Id Pregunta: 7268. Examen TIC B 2009";


//  Id pregunta: 8279 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes PDUs se a&ntilde;ade en SNMPv2 con respecto a las de SNMPv1?:";
 choices[68]= new Array();
 choices[68][0] = "Trap.";
 choices[68][1] = "GetResponse.";
 choices[68][2] = "GetBulkRequest.";
 choices[68][3] = "GetNextRequest.";
 answers[68] = choices[68][2];
 units[68] = "104";
 comments[68] = "Id Pregunta: 8279. Examen TIC A1 2010";


//  Id pregunta: 8303 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  En relaci&oacute;n a IPSec se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[69]= new Array();
 choices[69][0] = "Se defini&oacute; originariamente en las RFCs 1825 y 1829.";
 choices[69][1] = "Tanto AH (Authentication Header) como ESP (Encapsulating Security Payload) proporcionan integridad y autenticaci&oacute;n en la comunicaci&oacute;n.";
 choices[69][2] = "En modo transporte con AH no es posible traducir direcciones mediante NAT transversal.";
 choices[69][3] = "ESP debe implementar obligatoriamente el algoritmo AES-CBC con claves de 128 bits";
 answers[69] = choices[69][2];
 units[69] = "111";
 comments[69] = "Id Pregunta: 8303. Examen TIC A2 2010";


//  Id pregunta: 8376 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Se&ntilde;ale cu&aacute;l de las siguientes opciones NO es una herramienta de benchmarking de aplicaciones web: ";
 choices[70]= new Array();
 choices[70][0] = "JMeter.";
 choices[70][1] = "OpenSTA.";
 choices[70][2] = "ApacheBench.";
 choices[70][3] = "Junit.";
 answers[70] = choices[70][3];
 units[70] = "112";
 comments[70] = "Id Pregunta: 8376. Examen TIC A2 2010";


//  Id pregunta: 8666 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Indicar entre las siguientes normas del IEEE la que trata sobre redes de fibra &oacute;ptica:";
 choices[71]= new Array();
 choices[71][0] = "802.6";
 choices[71][1] = "802.7";
 choices[71][2] = "802.8";
 choices[71][3] = "802.9";
 answers[71] = choices[71][2];
 units[71] = "101";
 comments[71] = "Id Pregunta: 8666. Examen UPM A2 2011";


//  Id pregunta: 8794 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;En qu&eacute; est&aacute;ndar se define el lenguaje SGML?";
 choices[72]= new Array();
 choices[72][0] = "ISO 8879";
 choices[72][1] = "RFC 8879";
 choices[72][2] = "IEEE 8879";
 choices[72][3] = "Ninguna de las anteriores";
 answers[72] = choices[72][0];
 units[72] = "69, 114";
 comments[72] = "Id Pregunta: 8794. Examen UPM A2 2011";


//  Id pregunta: 8930 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes archivos no utiliza el formato de archivo ZIP?";
 choices[73]= new Array();
 choices[73][0] = "WAR";
 choices[73][1] = "EAR";
 choices[73][2] = "JAR";
 choices[73][3] = "Todos los anteriores lo usan";
 answers[73] = choices[73][3];
 units[73] = "116";
 comments[73] = "Id Pregunta: 8930. ";


//  Id pregunta: 8979 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de virtualizaci&oacute;n?";
 choices[74]= new Array();
 choices[74][0] = "XEN";
 choices[74][1] = "KVM";
 choices[74][2] = "UML";
 choices[74][3] = "Todas lo son";
 answers[74] = choices[74][3];
 units[74] = "119";
 comments[74] = "Id Pregunta: 8979. ";


//  Id pregunta: 9008 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Dado que el espectro radioel&eacute;ctrico es considerado un recurso escaso por la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, el procedimiento para el otorgamiento de t&iacute;tulos habilitantes de uso privativo del espectro radioel&eacute;ctrico es:";
 choices[75]= new Array();
 choices[75][0] = "Es competencia de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n el otorgamiento de los t&iacute;tulos habilitantes salvo en los supuestos de otorgamiento por procedimiento de licitaci&oacute;n contemplado en el art&iacute;culo 63.";
 choices[75][1] = "La licitaci&oacute;n p&uacute;blica de las frecuencias para la obtenci&oacute;n de la concesi&oacute;n administrativa sujeta a los principios de publicidad, concurrencia y no discriminaci&oacute;n.";
 choices[75][2] = "Las dos anteriores son ciertas.";
 choices[75][3] = "Ninguna de las anteriores.";
 answers[75] = choices[75][2];
 units[75] = "110";
 comments[75] = "Id Pregunta: 9008. Teleco Ayto. Madrid 2010. Modificada seg&uacute;n Ley 9/2014";


//  Id pregunta: 9328 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;C&uacute;al de los siguientes aspectos NO se recogen en las";
 choices[76]= new Array();
 choices[76][0] = "El cableado deber&aacute; estar de acuerdo con los requerimientos de nivel f&iacute;sico de la iso 80211";
 choices[76][1] = "El cableado deber&aacute; estar de acuerdo con los requerimientos de nivel f&iacute;sico de la iso 8802";
 choices[76][2] = "Se deber&aacute; detallar la ubicaci&oacute;n de equipos activos en el cableado de backbone";
 choices[76][3] = "Se debe detallar el n&uacute;mero de z&oacute;calos del cableado horizontal";
 answers[76] = choices[76][3];
 units[76] = "99";
 comments[76] = "Id Pregunta: 9328. NULL";


//  Id pregunta: 9386 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Sobre el interfaz radio de LTE, se puede afirmar";
 choices[77]= new Array();
 choices[77][0] = "Utiliza WCDMA";
 choices[77][1] = "Utiliza unicamente FDD para la duplexaci&oacute;n.";
 choices[77][2] = "Utiliza OFDM para la bajada y FDMA de portadora simple en la subida";
 choices[77][3] = "Combina TDMA y FDMA";
 answers[77] = choices[77][2];
 units[77] = "108";
 comments[77] = "Id Pregunta: 9386. NULL";


//  Id pregunta: 9403 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  RTP (Real time protocol) se utiliza en ToIP (telefon&iacute;a IP) para";
 choices[78]= new Array();
 choices[78][0] = "Mantener sincronizados los relojes de los tel&eacute;fonos.";
 choices[78][1] = "Nada. Lo que se utiliza es RTCP (real time control protocol)";
 choices[78][2] = "Transmitir la voz: una vez codificada se encapsula como payload de RTP en datagramas UDP.";
 choices[78][3] = "Ninguna de las anteriores";
 answers[78] = choices[78][2];
 units[78] = "109";
 comments[78] = "Id Pregunta: 9403. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9514 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Cu&aacute;les de los siguientes m&eacute;todos no existe dentro de la clase abstracta HttpServlet?";
 choices[79]= new Array();
 choices[79][0] = "doGet()";
 choices[79][1] = "doDelete()";
 choices[79][2] = "doPut()";
 choices[79][3] = "Todos los m&eacute;todos anteriores existen en el clase HttpServlet";
 answers[79] = choices[79][3];
 units[79] = "116";
 comments[79] = "Id Pregunta: 9514. NULL";


//  Id pregunta: 10043 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;En qu&eacute; protocolo de encaminamiento se utiliza el Algoritmo de Dijkstra para el c&aacute;lculo de rutas?";
 choices[80]= new Array();
 choices[80][0] = "OSPF ";
 choices[80][1] = "RIP";
 choices[80][2] = "BGP";
 choices[80][3] = "EGP";
 answers[80] = choices[80][0];
 units[80] = "102";
 comments[80] = "Id Pregunta: 10043. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10233 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;En que casos una sesi&oacute;n ser&aacute; invalidada?:";
 choices[81]= new Array();
 choices[81][0] = "No se recibe una petici&oacute;n del cliente superado el plazo de session timeout";
 choices[81][1] = "El cliente envia una petici&oacute;n KILL_SESSION";
 choices[81][2] = "El contenedor de servlets invalida una sesi&oacute;n por sobrecarga en el servidor";
 choices[81][3] = "El usuario cierra la ventana del navegador";
 answers[81] = choices[81][0];
 units[81] = "116";
 comments[81] = "Id Pregunta: 10233. NULL";


//  Id pregunta: 10318 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;C&oacute;mo se llama la base de datos que tiene los par&aacute;metros de gesti&oacute;n de una red?";
 choices[82]= new Array();
 choices[82][0] = "MIB (Management Information Base).";
 choices[82][1] = "NMD (Network Management database).";
 choices[82][2] = "NMS (Network Management System).";
 choices[82][3] = "Ninguna de los anteriores.";
 answers[82] = choices[82][0];
 units[82] = "104";
 comments[82] = "Id Pregunta: 10318. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10498 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En el &aacute;mbito de las redes e internet, &iquest;qu&eacute; significan las siglas TOR?";
 choices[83]= new Array();
 choices[83][0] = "The Outer Router";
 choices[83][1] = "The Ominous Router";
 choices[83][2] = "The Onion Router";
 choices[83][3] = "Ninguna es correcta";
 answers[83] = choices[83][2];
 units[83] = "112";
 comments[83] = "Id Pregunta: 10498. http://es.wikipedia.org/wiki/Tor";


//  Id pregunta: 10657 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Seg&uacute;n la Ley 9/2014, la emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas es una infracci&oacute;n:";
 choices[84]= new Array();
 choices[84][0] = "Muy grave.";
 choices[84][1] = "Grave.";
 choices[84][2] = "Leve";
 choices[84][3] = "No es una infracci&oacute;n.";
 answers[84] = choices[84][1];
 units[84] = "110";
 comments[84] = "Id Pregunta: 10657. ";


//  Id pregunta: 10667 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[85]= new Array();
 choices[85][0] = "Con telnet toda la informaci&oacute;n entre cliente y servidor viaja cifrada.";
 choices[85][1] = "X11 dota de una interfaz gr&aacute;fica a los sistemas Microsoft.";
 choices[85][2] = "La infraestructura de escritorio virtual crea un entorno de sistema operativo independiente en el propio escritorio.";
 choices[85][3] = "Citrix es un software comercial para virtualizaci&oacute;n de escritorio.";
 answers[85] = choices[85][3];
 units[85] = "119";
 comments[85] = "Id Pregunta: 10667. ";


//  Id pregunta: 10670 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  En una granja de servidores:";
 choices[86]= new Array();
 choices[86][0] = "Los servidores suelen estar en localizaciones distintas.";
 choices[86][1] = "Los servidores se reparten las tareas que podr&iacute;a ejecutar un solo servidor.";
 choices[86][2] = "Suelen haber equipos de respaldo (backup)";
 choices[86][3] = "Ninguna de las anteriores.";
 answers[86] = choices[86][2];
 units[86] = "113";
 comments[86] = "Id Pregunta: 10670. ";


//  Id pregunta: 10911 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Se&ntilde;alar de las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles cu&aacute;l utiliza W-CDMA:";
 choices[87]= new Array();
 choices[87][0] = "GSM";
 choices[87][1] = "EDGE";
 choices[87][2] = "UMTS";
 choices[87][3] = "LTE";
 answers[87] = choices[87][2];
 units[87] = "108";
 comments[87] = "Id Pregunta: 10911. Examen GSI 2014";


//  Id pregunta: 10915 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Un proyecto europeo cuyo objetivo estrat&eacute;gico fue mejorar y potenciar el uso de la tecnolog&iacute;a PLC se denomin&oacute; proyecto:";
 choices[88]= new Array();
 choices[88][0] = "CORDIS";
 choices[88][1] = "OPERA";
 choices[88][2] = "Dublin Core";
 choices[88][3] = "POIROT";
 answers[88] = choices[88][1];
 units[88] = "107";
 comments[88] = "Id Pregunta: 10915. Examen GSI 2014";


//  Id pregunta: 10964 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Respecto a RTMP (Real Time Messaging Protocol), se&ntilde;ale la respuesta correcta:";
 choices[89]= new Array();
 choices[89][0] = "Junto con ICMP proporciona las funciones de monitorizaci&oacute;n y control de TCP/IP.";
 choices[89][1] = "Permite la gesti&oacute;n conjunta de mensajer&iacute;a instant&aacute;nea y mensajes cortos GSM.";
 choices[89][2] = "Se emplea para la emisi&oacute;n en tiempo real de streaming de v&iacute;deo.";
 choices[89][3] = "Define el est&aacute;ndar de comunicaciones para los procesadores de sistemas de tiempo real cr&iacute;tico.";
 answers[89] = choices[89][2];
 units[89] = "117";
 comments[89] = "Id Pregunta: 10964. TIC A1 AGE 2014";


//  Id pregunta: 11233 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  El fichero Enterprise Archive (.ear) de empaquetado de aplicaciones web.";
 choices[90]= new Array();
 choices[90][0] = "Uno o m&aacute;s ficheros WAR.";
 choices[90][1] = "Uno o m&aacute;s ficheros JAR con las clases de la aplicaci&oacute;n.";
 choices[90][2] = "Un descriptor de despliegue de la aplicaci&oacute;n.";
 choices[90][3] = "Todas las respuestas son correctas.";
 answers[90] = choices[90][3];
 units[90] = "116";
 comments[90] = "Id Pregunta: 11233. ";


//  Id pregunta: 11347 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Cu&aacute;l es el significado de las sigla RIP";
 choices[91]= new Array();
 choices[91][0] = "Routing Improved Protocol";
 choices[91][1] = "Routing Inner Protocol";
 choices[91][2] = "Routing Information Protocol";
 choices[91][3] = "Ninguna de las anteriores";
 answers[91] = choices[91][2];
 units[91] = "100";
 comments[91] = "Id Pregunta: 11347. ";


//  Id pregunta: 11418 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seg&uacute;n la Ley 9/2014, las decisiones de otorgamiento de uso de numeraci&oacute;n, direccionamiento y denominaci&oacute;n se adoptar&aacute;n y comunicar&aacute;n en un plazo m&aacute;ximo de:";
 choices[92]= new Array();
 choices[92][0] = "15 d&iacute;as.";
 choices[92][1] = "10 d&iacute;as.";
 choices[92][2] = "3 semanas cuando se apliquen procedimientos de selecci&oacute;n comparativa.";
 choices[92][3] = "6 semanas cuando se apliquen procedimientos de selecci&oacute;n comparativa.";
 answers[92] = choices[92][3];
 units[92] = "110";
 comments[92] = "Id Pregunta: 11418. ";


//  Id pregunta: 11428 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n la Ley 9/2014, mediante Real Decreto se regular&aacute;n derechos:";
 choices[93]= new Array();
 choices[93][0] = "Continuidad servicio.";
 choices[93][1] = "Continuidad servicio y obtener compensaci&oacute;n autom&aacute;tica sin interrupci&oacute;n.";
 choices[93][2] = "Continuidad servicio y obtener compensaci&oacute;n proporcional al tiempo de interrupci&oacute;n.";
 choices[93][3] = "Continuidad servicio, sin compensaci&oacute;n.";
 answers[93] = choices[93][1];
 units[93] = "110";
 comments[93] = "Id Pregunta: 11428. ";


//  Id pregunta: 11478 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l no es una facultad del Gobierno en la administraci&oacute;n del espectro seg&uacute;n la Ley 9/2014?";
 choices[94]= new Array();
 choices[94][0] = "Elaborar los planes de utilizaci&oacute;n del espectro.";
 choices[94][1] = "Gestionar las tasas asociadas a los t&iacute;tulos habilitantes de derechos de uso.";
 choices[94][2] = "Fijar condiciones proporcionadas sobre los t&iacute;tulos habilitantes.";
 choices[94][3] = "Velar por uso adecuado del espectro mediante uso de equipos y aparatos.";
 answers[94] = choices[94][1];
 units[94] = "110";
 comments[94] = "Id Pregunta: 11478. ";


//  Id pregunta: 11667 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  XACML es:";
 choices[95]= new Array();
 choices[95][0] = "Un est&aacute;ndar de firma de documentos.";
 choices[95][1] = "Un est&aacute;ndar que define un esquema XML para el intercambio de autorizaci&oacute;n y autenticaci&oacute;n.";
 choices[95][2] = "Un est&aacute;ndar basado en la especificaci&oacute;n XML para definir pol&iacute;ticas de control de acceso.";
 choices[95][3] = "Especifica un proceso para cifrar datos y representar esa informaci&oacute;n cifrada en XML.";
 answers[95] = choices[95][2];
 units[95] = "111";
 comments[95] = "Id Pregunta: 11667. ";


//  Id pregunta: 11676 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Se&ntilde;ale el c&oacute;dec que no aplica compresi&oacute;n de entre los siguientes:";
 choices[96]= new Array();
 choices[96][0] = "G.711";
 choices[96][1] = "G.726";
 choices[96][2] = "G.729";
 choices[96][3] = "iLBC";
 answers[96] = choices[96][0];
 units[96] = "109, 117";
 comments[96] = "Id Pregunta: 11676. ";


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


//  Id pregunta: 11701 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;cu&aacute;l no es un componente de SNMP?";
 choices[99]= new Array();
 choices[99][0] = "MIB";
 choices[99][1] = "SNMP manager";
 choices[99][2] = "SNMP agent";
 choices[99][3] = "Servidor Syslog";
 answers[99] = choices[99][3];
 units[99] = "104";
 comments[99] = "Id Pregunta: 11701. NULL";


