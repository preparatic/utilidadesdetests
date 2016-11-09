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

//  Id pregunta: 2914 AÃ±o de creación de pregunta: 2003-01-01
 questions[0]= "1)  En una red MPLS, &iquest; qu&eacute; funci&oacute;n realiza el LER?";
 choices[0]= new Array();
 choices[0][0] = "Es el elemento que conmuta etiquetas";
 choices[0][1] = "Es el nombre de un circuito virtual MPLS";
 choices[0][2] = "Es el elemento que inicia o termina el t&uacute;nel";
 choices[0][3] = "Es el elemento que conmuta el tr&aacute;fico en funci&oacute;n de las etiquetas";
 answers[0] = choices[0][2];
 units[0] = "100";
 comments[0] = "Id Pregunta: 2914. ITSEC";


//  Id pregunta: 2944 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  &iquest;Qu&eacute; no permite IP V6?";
 choices[1]= new Array();
 choices[1][0] = "Autenticaci&oacute;n";
 choices[1][1] = "Garantia de no repudio";
 choices[1][2] = "Cifrado";
 choices[1][3] = "Integridad";
 answers[1] = choices[1][1];
 units[1] = "100";
 comments[1] = "Id Pregunta: 2944. Similar a examen TIC SS A 2003";


//  Id pregunta: 2946 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes protocolos de la familia TCP/IP no pertenece al grupo de protocolos de la capa de aplicaci&oacute;n?:";
 choices[2]= new Array();
 choices[2][0] = "DNS: Sistema de nombres de dominio";
 choices[2][1] = "SNMP: Protocolo de gesti&oacute;n simple de red";
 choices[2][2] = "FTP: Protocolo de transferencia de archivos";
 choices[2][3] = "ARP: Protocolo de determinaci&oacute;n de direcciones";
 answers[2] = choices[2][3];
 units[2] = "100";
 comments[2] = "Id Pregunta: 2946. Examen TIC MAP B 2004";


//  Id pregunta: 2992 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Su ordenador tiene la direcci&oacute;n IP 10.2.40.16 y m&aacute;scara de subred de 26 bits. Indique cu&aacute;l de las siguientes direcciones IP puede corresponderse con su router por defecto";
 choices[3]= new Array();
 choices[3][0] = "10.2.40.64";
 choices[3][1] = "10.2.41.45";
 choices[3][2] = "10.2.40.63";
 choices[3][3] = "10.2.40.62";
 answers[3] = choices[3][3];
 units[3] = "100";
 comments[3] = "Id Pregunta: 2992. ";


//  Id pregunta: 3051 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Qu&eacute; objetos intervienen en el nivel de aplicaci&oacute;n de la arquitectura internet de 3 capas?:";
 choices[4]= new Array();
 choices[4][0] = "P&aacute;ginas HTML";
 choices[4][1] = "Objetos de negocio";
 choices[4][2] = "Componentes de base de datos";
 choices[4][3] = "Todas intervienen";
 answers[4] = choices[4][1];
 units[4] = "113";
 comments[4] = "Id Pregunta: 3051. ";


//  Id pregunta: 3115 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;A qu&eacute; nivel OSI hace referencia la norma RS-232-C?:";
 choices[5]= new Array();
 choices[5][0] = "Nivel 3";
 choices[5][1] = "Nivel 2";
 choices[5][2] = "Nivel 1";
 choices[5][3] = "No se puede identificar con ninguno de los niveles OSI ya que no est&aacute; reconocido como est&aacute;ndar &lsquo;de jure&rsquo;";
 answers[5] = choices[5][2];
 units[5] = "100";
 comments[5] = "Id Pregunta: 3115. NULL";


//  Id pregunta: 3120 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;C&oacute;mo se comunican una sonda RMON y un agente RMON?:";
 choices[6]= new Array();
 choices[6][0] = "Mediante mensajes SNMP";
 choices[6][1] = "Mediante mensajes LAP-B";
 choices[6][2] = "Mediante mensajes CMIP";
 choices[6][3] = "Mediante Data Streams";
 answers[6] = choices[6][0];
 units[6] = "104";
 comments[6] = "Id Pregunta: 3120. ";


//  Id pregunta: 3144 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta cuando se estudia la relaci&oacute;n entre la velocidad de transmisi&oacute;n de una se&ntilde;al digital y la frecuencia m&aacute;xima de la se&ntilde;al?:";
 choices[7]= new Array();
 choices[7][0] = "No existe ninguna relaci&oacute;n directa";
 choices[7][1] = "Cuanto mayor sea el ancho de banda de la se&ntilde;al, menor es la velocidad de transmisi&oacute;n";
 choices[7][2] = "Cuanto mayor sea la velocidad de transmisi&oacute;n, menor es el ancho de banda";
 choices[7][3] = "Cuanto menor sea el ancho de banda, menor es la velocidad de transmisi&oacute;n";
 answers[7] = choices[7][3];
 units[7] = "99";
 comments[7] = "Id Pregunta: 3144. NULL";


//  Id pregunta: 3160 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto de los protocolos de gesti&oacute;n de red SNMP y CMIP/CMIS no es cierta?:";
 choices[8]= new Array();
 choices[8][0] = "CMIS/CMIP soporta una arquitectura de objetos (entidades gestionables) m&aacute;s complejos que SNMP";
 choices[8][1] = "CMIS/CMIP contiene las especificaciones para el uso de protocolos SNMP sobre redes OSI mediante la norma CMOT";
 choices[8][2] = "Las aplicaciones de gesti&oacute;n de red basadas en protocolos SNMP est&aacute;n mucho m&aacute;s extendidas en el mercado que las basadas en CMIP";
 choices[8][3] = "CMIS/CMIP es desarrollo conjunto de CCITT e ISO, mientras que SNMP es producto de IETF";
 answers[8] = choices[8][1];
 units[8] = "104";
 comments[8] = "Id Pregunta: 3160. ";


//  Id pregunta: 3166 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no pertenece a un protocolo de transmisi&oacute;n orientado a bit?:";
 choices[9]= new Array();
 choices[9][0] = "Para detectar el principio y el final de una trama se utiliza una secuencia de bits, llamada bandera";
 choices[9][1] = "Utiliza para la supervisi&oacute;n de la comunicaci&oacute;n mensajes constituidos por uno o varios caracteres, llamados de control de la comunicaci&oacute;n, tomados de un c&oacute;digo preestablecido";
 choices[9][2] = "La trama es de formato fijo, constituida por campos de longitud determinada, excepto el campo de informaci&oacute;n";
 choices[9][3] = "Utiliza para la supervisi&oacute;n de la comunicaci&oacute;n campos de control con bits (o grupos de bits) cuyo significado est&aacute; dado por su posici&oacute;n";
 answers[9] = choices[9][1];
 units[9] = "100, 101";
 comments[9] = "Id Pregunta: 3166. ";


//  Id pregunta: 3187 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguiente elementos residen en la capa de aplicaci&oacute;n de la pila TCP/IP?:";
 choices[10]= new Array();
 choices[10][0] = "TFTP";
 choices[10][1] = "FTP";
 choices[10][2] = "DNS";
 choices[10][3] = "Todos los anteriores  ";
 answers[10] = choices[10][3];
 units[10] = "100";
 comments[10] = "Id Pregunta: 3187. NULL";


//  Id pregunta: 3260 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;ntos terminales pueden ser usados simult&aacute;neamente en una RDSI con acceso b&aacute;sico?:";
 choices[11]= new Array();
 choices[11][0] = "S&oacute;lo 1 canal puede estar ocupado en un momento determinado";
 choices[11][1] = "2, ya que puede haber comunicaciones simult&aacute;neas en los canales B de datos";
 choices[11][2] = "1 por cada canal B mientras que el canal D puede ser utilizado por varios terminales en modo paquete";
 choices[11][3] = "3, ya que cada canal solo puede ser utilizado por un terminal a la vez, independientemente de su tipo";
 answers[11] = choices[11][2];
 units[11] = "103";
 comments[11] = "Id Pregunta: 3260. ";


//  Id pregunta: 3270 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;En qu&eacute; nivel OSI act&uacute;an los repetidores?";
 choices[12]= new Array();
 choices[12][0] = "Enlace";
 choices[12][1] = "Red";
 choices[12][2] = "Transporte";
 choices[12][3] = "F&iacute;sico";
 answers[12] = choices[12][3];
 units[12] = "100";
 comments[12] = "Id Pregunta: 3270. ";


//  Id pregunta: 3342 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Con un &quot;m&oacute;dem&quot; RDSI, la llamada:";
 choices[13]= new Array();
 choices[13][0] = "Se establece cada vez que se intercambian datos";
 choices[13][1] = "Est&aacute; siempre establecida";
 choices[13][2] = "Puede ser configurable cu&aacute;ndo se quiere que se establezca la llamada";
 choices[13][3] = "Ninguna de las anteriores";
 answers[13] = choices[13][2];
 units[13] = "103,104,109";
 comments[13] = "Id Pregunta: 3342. ";


//  Id pregunta: 3360 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  De los t&eacute;rminos 'wander' y 'jitter' podemos decir:";
 choices[14]= new Array();
 choices[14][0] = "Que son lo mismo en terminolog&iacute;a americana e inglesa";
 choices[14][1] = "Que wander se refiere a oscilaciones de frecuencia a baja frecuencia y jitter a oscilaciones de frecuencia en alta frecuencia";
 choices[14][2] = "Que wander se refiere a oscilaciones de frecuencia a alta frecuencia y jitter a oscilaciones de frecuencia en baja frecuencia";
 choices[14][3] = "No existen los t&eacute;rminos wander ni jitter en telecomunicaciones";
 answers[14] = choices[14][1];
 units[14] = "99";
 comments[14] = "Id Pregunta: 3360. *: frecuencias";


//  Id pregunta: 3386 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El modelo para interconexi&oacute;n de sistemas abiertos (OSI) describe siete niveles. &iquest;D&oacute;nde est&aacute; situado ASN.1?:";
 choices[15]= new Array();
 choices[15][0] = "Presentaci&oacute;n";
 choices[15][1] = "Aplicaci&oacute;n";
 choices[15][2] = "Sesi&oacute;n";
 choices[15][3] = "Transporte";
 answers[15] = choices[15][0];
 units[15] = "100";
 comments[15] = "Id Pregunta: 3386. NULL";


//  Id pregunta: 3388 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El nivel 5 de OSI:";
 choices[16]= new Array();
 choices[16][0] = "Tiene como principal funci&oacute;n el control de la subred de comunicaciones";
 choices[16][1] = "Tiene como objetivo el ofrecer un servicio para que dos entidades puedan organizar y sincronizar su di&aacute;logo";
 choices[16][2] = "Realiza funciones de encaminamiento de la informaci&oacute;n";
 choices[16][3] = "Se subdivide en dos subniveles (LLC y MAC)";
 answers[16] = choices[16][1];
 units[16] = "100";
 comments[16] = "Id Pregunta: 3388. NULL";


//  Id pregunta: 3394 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El nivel encargado de la correcci&oacute;n definitiva de errores de comunicaci&oacute;n en el modelo de referencia OSI es:";
 choices[17]= new Array();
 choices[17][0] = "Sesi&oacute;n";
 choices[17][1] = "Red";
 choices[17][2] = "Transporte";
 choices[17][3] = "Enlace";
 answers[17] = choices[17][2];
 units[17] = "100";
 comments[17] = "Id Pregunta: 3394. NULL";


//  Id pregunta: 3399 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  El orden consecutivo de las capas definidas en OSI, es:";
 choices[18]= new Array();
 choices[18][0] = "F&iacute;sico, enlace, red, transporte, presentaci&oacute;n y aplicaci&oacute;n";
 choices[18][1] = "F&iacute;sico, enlace, red, transporte, comunicaci&oacute;n, presentaci&oacute;n y aplicaci&oacute;n";
 choices[18][2] = "F&iacute;sico, enlace, red, transporte, sesi&oacute;n, presentaci&oacute;n y aplicaci&oacute;n";
 choices[18][3] = "Enlace, red, transporte, comunicaci&oacute;n, presentaci&oacute;n y aplicaci&oacute;n";
 answers[18] = choices[18][2];
 units[18] = "100";
 comments[18] = "Id Pregunta: 3399. NULL";


//  Id pregunta: 3403 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Entre los equipos de interconexi&oacute;n de redes:";
 choices[19]= new Array();
 choices[19][0] = "Los bridges operan a nivel de red";
 choices[19][1] = "Los repetidores operan a nivel de MAC";
 choices[19][2] = "Los bridges realizan funciones de autoaprendizaje, filtrado y reenvio";
 choices[19][3] = "Las pasarelas o gateways son elementos de interconexi&oacute;n independientes del protocolo de nivel de red";
 answers[19] = choices[19][2];
 units[19] = "102";
 comments[19] = "Id Pregunta: 3403. ";


//  Id pregunta: 3424 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Indicar entre las siguientes normas del IEEE la que trata sobre redes de &aacute;rea metropolitana:";
 choices[20]= new Array();
 choices[20][0] = "802.6";
 choices[20][1] = "802.7";
 choices[20][2] = "802.8";
 choices[20][3] = "802.9";
 answers[20] = choices[20][0];
 units[20] = "101";
 comments[20] = "Id Pregunta: 3424. ";


//  Id pregunta: 3429 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Indicar entre las siguientes normas del IEEE la que trata sobre seguridad LAN/MAN interoperable:";
 choices[21]= new Array();
 choices[21][0] = "802.10";
 choices[21][1] = "802.11";
 choices[21][2] = "802.12";
 choices[21][3] = "802.13";
 answers[21] = choices[21][0];
 units[21] = "101";
 comments[21] = "Id Pregunta: 3429. ";


//  Id pregunta: 3448 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  El protocolo del stack TCP/IP que define el acceso interactivo a un ordenador remoto es:";
 choices[22]= new Array();
 choices[22][0] = "FTP";
 choices[22][1] = "WAIS";
 choices[22][2] = "Telnet";
 choices[22][3] = "Mail";
 answers[22] = choices[22][2];
 units[22] = "100";
 comments[22] = "Id Pregunta: 3448. NULL";


//  Id pregunta: 3482 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  El tr&aacute;fico perdido en un periodo de tiempo T :";
 choices[23]= new Array();
 choices[23][0] = "Se puede medir como el numero de llamadas perdidas Cl por la duraci&oacute;n media de las llamadas durante un tiempo T";
 choices[23][1] = "No tiene sentido pr&aacute;ctico porque no se pueden conocer realmente el n&uacute;mero de llamadas perdidas";
 choices[23][2] = "No puede medirse, s&oacute;lo puede medirse el n&uacute;mero de llamadas perdidas y nunca el tr&aacute;fico perdido";
 choices[23][3] = "Ninguna de las anteriores es v&aacute;lida";
 answers[23] = choices[23][2];
 units[23] = "99";
 comments[23] = "Id Pregunta: 3482. NULL";


//  Id pregunta: 3499 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En el modelo de referencia OSI, en una interfaz t&iacute;pica, la capa N+1 pasa una...... a la capa N, a trav&eacute;s del......:";
 choices[24]= new Array();
 choices[24][0] = "IDU, SAP";
 choices[24][1] = "IDU, ICI";
 choices[24][2] = "PDU, ICI";
 choices[24][3] = "PDU, SAP";
 answers[24] = choices[24][0];
 units[24] = "100";
 comments[24] = "Id Pregunta: 3499. NULL";


//  Id pregunta: 3505 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  En el modelo OSI un encaminador o router:";
 choices[25]= new Array();
 choices[25][0] = "Trabaja en el nivel 4";
 choices[25][1] = "Trabaja en el nivel 7";
 choices[25][2] = "Trabaja en el nivel 3";
 choices[25][3] = "Trabaja en el nivel 5";
 answers[25] = choices[25][2];
 units[25] = "102";
 comments[25] = "Id Pregunta: 3505. ";


//  Id pregunta: 3523 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  En HDLC, si un sistema inicia el enlace con SABM P, su estaci&oacute;n colateral, para establecer el enlace, le responder&aacute; con:";
 choices[26]= new Array();
 choices[26][0] = "SABM F";
 choices[26][1] = "SABM P";
 choices[26][2] = "UA F";
 choices[26][3] = "UA P";
 answers[26] = choices[26][2];
 units[26] = "100";
 comments[26] = "Id Pregunta: 3523. NULL";


//  Id pregunta: 3566 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  En un protocolo de nivel de enlace se denomina ventana a:";
 choices[27]= new Array();
 choices[27][0] = "Al env&iacute;o de una trama de control que indica al emisor que la trama de informaci&oacute;n ha llegado correctamente";
 choices[27][1] = "Al envio por el emisor de las tramas de informaci&oacute;n numeradas secuencialmente";
 choices[27][2] = "Al envio de los asentimientos numerados por cada una de las tramas de informaci&oacute;n recibidas";
 choices[27][3] = "Al n&uacute;mero m&aacute;ximo de tramas que en un momento dado pueden estar pendientes de confirmaci&oacute;n";
 answers[27] = choices[27][3];
 units[27] = "101";
 comments[27] = "Id Pregunta: 3566. ";


//  Id pregunta: 3583 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Indique la opci&oacute;n correcta respecto a la se&ntilde;alizaci&oacute;n en RDSI:";
 choices[28]= new Array();
 choices[28][0] = "El sistema de se&ntilde;alizaci&oacute;n en RDSI es por paquetes y canal com&uacute;n y se le conoce como CCS7";
 choices[28][1] = "El sistema de se&ntilde;alizaci&oacute;n en RDSI es por paquetes y canal asociado y se le conoce como CCS7";
 choices[28][2] = "El sistema de se&ntilde;alizaci&oacute;n en RDSI es por paquetes y canal com&uacute;n y se le conoce como CCS9";
 choices[28][3] = "Todas las respuestas anteriores son err&oacute;neas";
 answers[28] = choices[28][0];
 units[28] = "103";
 comments[28] = "Id Pregunta: 3583. ";


//  Id pregunta: 3585 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Indique qu&eacute; campo de los que se relacionan no est&aacute; incluido en la cabecera de segmento TCP:";
 choices[29]= new Array();
 choices[29][0] = "N&uacute;mero de paquetes enviados por la conexi&oacute;n";
 choices[29][1] = "Posici&oacute;n en bytes donde empiezan los bytes urgentes";
 choices[29][2] = "Direcciones IP de origen y destino";
 choices[29][3] = "Petici&oacute;n de resetear la sesi&oacute;n";
 answers[29] = choices[29][2];
 units[29] = "100";
 comments[29] = "Id Pregunta: 3585. NULL";


//  Id pregunta: 3593 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  La conocida RFC 793 se corresponde con:";
 choices[30]= new Array();
 choices[30][0] = "el protocolo TCP";
 choices[30][1] = "la arquitectura TCP/IP";
 choices[30][2] = "el protocolo IP";
 choices[30][3] = "el protocolo SMTP";
 answers[30] = choices[30][0];
 units[30] = "100";
 comments[30] = "Id Pregunta: 3593. NULL";


//  Id pregunta: 3600 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  La distancia m&aacute;xima entre estaciones en el est&aacute;ndar 10Base2 es de:";
 choices[31]= new Array();
 choices[31][0] = "100 metros";
 choices[31][1] = "185 metros";
 choices[31][2] = "200 metros";
 choices[31][3] = "500 metros";
 answers[31] = choices[31][1];
 units[31] = "99";
 comments[31] = "Id Pregunta: 3600. ";


//  Id pregunta: 3635 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  La recomendaci&oacute;n RFC-1006 define:";
 choices[32]= new Array();
 choices[32][0] = "Funciones de un protocolo de red";
 choices[32][1] = "El protocolo de transporte TCP";
 choices[32][2] = "El protocolo de transporte UDP";
 choices[32][3] = "Protocolo de convergencia de TCP a TP0";
 answers[32] = choices[32][3];
 units[32] = "100";
 comments[32] = "Id Pregunta: 3635. NULL";


//  Id pregunta: 3657 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Un BALUN:";
 choices[33]= new Array();
 choices[33][0] = "Es un adaptador de impedancias entre sistema asim&eacute;trico y sistema sim&eacute;trico.";
 choices[33][1] = "Adapta un conector RJ45 y BNC.";
 choices[33][2] = "Es un conector entre RJ11 y RJ45.";
 choices[33][3] = "S&oacute;lo se utiliza para fibra &oacute;ptica.";
 answers[33] = choices[33][0];
 units[33] = "99";
 comments[33] = "Id Pregunta: 3657. *: BALUN";


//  Id pregunta: 3663 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Un puente transparente aprende la direcci&oacute;n de los dispositivos:";
 choices[34]= new Array();
 choices[34][0] = "Examinado las direcciones MAC de las tramas entrantes y asoci&aacute;ndolas con una interfaz";
 choices[34][1] = "Examinando las direcciones de red de las tramas entrantes y asoci&aacute;ndolas con una interfaz";
 choices[34][2] = "Examinado las direcciones MAC de las tramas salientes y asoci&aacute;ndolas con una interfaz da salida";
 choices[34][3] = "Examinando las direcciones de red de las tramas salientes y asoci&aacute;ndolas con una interfaz de salida";
 answers[34] = choices[34][0];
 units[34] = "102";
 comments[34] = "Id Pregunta: 3663. ";


//  Id pregunta: 3669 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Una de las capas o niveles del modelo de referencia de interconexi&oacute;n de sistemas abiertos (OSI) no corresponde a la operaci&oacute;n de los dispositivos mencionados. &iquest;Cual?:";
 choices[35]= new Array();
 choices[35][0] = "F&iacute;sico - Repetidor (&ldquo;repeater&rdquo;), Concentrador (&ldquo;hub&rdquo;), M&oacute;dem, TR1, AT";
 choices[35][1] = "Enlace - Puente (&ldquo;bridge&rdquo;), Conmutador (&ldquo;switch&rdquo;)";
 choices[35][2] = "Enlace - Conector V.24, Conector V.35";
 choices[35][3] = "Red - Encaminador (&ldquo;router&rdquo;)";
 answers[35] = choices[35][2];
 units[35] = "100,101";
 comments[35] = "Id Pregunta: 3669. ";


//  Id pregunta: 3720 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Los conmutadores o switches LAN construyen una tabla de conmutaci&oacute;n que consiste en:";
 choices[36]= new Array();
 choices[36][0] = "Direcciones MAC y su interfaz de salida asociada";
 choices[36][1] = "Direcciones MAC y el n&uacute;mero de hops (elementos atravesados) hasta su destino";
 choices[36][2] = "Direcciones de red y su interfaz de salida apropiada";
 choices[36][3] = "Direcciones de red  y el n&uacute;mero de hops (elementos atravesados) hasta su destino";
 answers[36] = choices[36][0];
 units[36] = "102";
 comments[36] = "Id Pregunta: 3720. ";


//  Id pregunta: 3727 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  Los m&eacute;todos de control de acceso al medio de transmisi&oacute;n en las redes de &aacute;rea local describen las reglas que gobiernan cu&aacute;ndo los dispositivos est&aacute;n autorizados a transmitir, evit&aacute;ndose as&iacute; las colisiones.  Estos m&eacute;todos son:";
 choices[37]= new Array();
 choices[37][0] = "CSMA/CD y CSMA/CA";
 choices[37][1] = "Selecci&oacute;n o encuesta (&ldquo;polling&rdquo;), contienda o contenci&oacute;n y reserva o paso de testigo (&ldquo;token passing&rdquo;)";
 choices[37][2] = "Ethernet, IEEE 802.3 y IEEE 802.5";
 choices[37][3] = "Bus, &aacute;rbol y anillo";
 answers[37] = choices[37][1];
 units[37] = "101";
 comments[37] = "Id Pregunta: 3727. ";


//  Id pregunta: 3753 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  MPLS se encapsula en la torre de protocolos:";
 choices[38]= new Array();
 choices[38][0] = "por encima del protocolo IP y por debajo del protocolo TCP";
 choices[38][1] = "por encima del protocolo TCP y por debajo de otros protocolos de transporte";
 choices[38][2] = "por encima de los protocolos del nivel de enlace y por debajo de IP";
 choices[38][3] = "por encima de los protocolos del nivel de transporte";
 answers[38] = choices[38][2];
 units[38] = "102";
 comments[38] = "Id Pregunta: 3753. ";


//  Id pregunta: 3763 AÃ±o de creación de pregunta: 2002-01-01
 questions[39]= "40)  Para la conmutaci&oacute;n:";
 choices[39]= new Array();
 choices[39][0] = "La t&eacute;cnica &quot;cut through switching&quot; tiene la ventaja de tener una latencia menor";
 choices[39][1] = "La t&eacute;cnica &quot;cut through switching&quot; tiene la desventaja de transmitir paquetes err&oacute;neos";
 choices[39][2] = "La t&eacute;cnica &quot;store and fordward&quot; tiene las caracter&iacute;sticas opuestas a &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 choices[39][3] = "Todas las afirmaciones anteriores son correctas";
 answers[39] = choices[39][3];
 units[39] = "102";
 comments[39] = "Id Pregunta: 3763. ";


//  Id pregunta: 3794 AÃ±o de creación de pregunta: 2002-01-01
 questions[40]= "41)  Respecto a los est&aacute;ndares de comunicaciones inal&aacute;mbricas:";
 choices[40]= new Array();
 choices[40][0] = "WiFi y HomeRF son compatibles";
 choices[40][1] = "HomeRF est&aacute;, hoy por hoy, m&aacute;s implantada en el mercado asi&aacute;tico que WiFi";
 choices[40][2] = "WiFi responde por Wireless Fidelity";
 choices[40][3] = "Hay 3 tecnolog&iacute;as de despliegue de una red inal&aacute;mbrica: infraestructura, ad hoc, por extensi&oacute;n";
 answers[40] = choices[40][2];
 units[40] = "100";
 comments[40] = "Id Pregunta: 3794. NULL";


//  Id pregunta: 3820 AÃ±o de creación de pregunta: 2002-01-01
 questions[41]= "42)  Se&ntilde;ale la afirmaci&oacute;n err&oacute;nea respecto a los servicios de red:";
 choices[41]= new Array();
 choices[41][0] = "Los servicios de red orientados a conexi&oacute;n implican el uso de un encaminamiento &uacute;nico durante toda la duraci&oacute;n de una conexi&oacute;n.  El fallo de un dispositivo en red en cualquier punto a lo largo del encaminamiento seleccionado provocar&aacute; un fallo en la conex";
 choices[41][1] = "Los servicios de red no orientados a conexi&oacute;n no predeterminan el encaminamiento de los datos ni la secuencia de los paquetes de datos transmitidos.  Los paquetes de datos pueden ser encaminados sorteando fallos de dispositivos en red, y los recursos de r";
 choices[41][2] = "En los servicios de red no orientados a conexi&oacute;n, los paquetes de datos (datagramas) son recibidos en el mismo orden en que fueron transmitidos";
 choices[41][3] = "Los servicios de red no orientados a conexi&oacute;n son &uacute;tiles para la transmisi&oacute;n de paquetes de datos que permiten distintas demoras de propagaci&oacute;n y el reordenamiento de la secuencia de paquetes de datos en recepci&oacute;n";
 answers[41] = choices[41][2];
 units[41] = "101";
 comments[41] = "Id Pregunta: 3820. ";


//  Id pregunta: 3821 AÃ±o de creación de pregunta: 2002-01-01
 questions[42]= "43)  Se&ntilde;ale la afirmaci&oacute;n falsa relativa a la t&eacute;cnica de multiplexaci&oacute;n en el &aacute;mbito de las comunicaciones:";
 choices[42]= new Array();
 choices[42][0] = "Mejora la calidad de la se&ntilde;al transmitida";
 choices[42][1] = "Sirve para establecer varias comunicaciones independientes en un solo enlace";
 choices[42][2] = "Se puede realizar utilizando divisi&oacute;n en frecuencia o divisi&oacute;n en el tiempo";
 choices[42][3] = "Permite aprovechar al m&aacute;ximo la capacidad del enlace";
 answers[42] = choices[42][0];
 units[42] = "103";
 comments[42] = "Id Pregunta: 3821. ";


//  Id pregunta: 3822 AÃ±o de creación de pregunta: 2002-01-01
 questions[43]= "44)  Se&ntilde;ale la afirmaci&oacute;n verdadera en un sistema de transmisi&oacute;n de datos:";
 choices[43]= new Array();
 choices[43][0] = "El equipo terminal de datos dialoga con la l&iacute;nea de transmisi&oacute;n para emitir la se&ntilde;al";
 choices[43][1] = "El equipo terminal del circuito de datos es el origen o destino final de la comunicaci&oacute;n";
 choices[43][2] = "Un m&oacute;dem es un ejemplo de un equipo terminal de datos";
 choices[43][3] = "El equipo terminal de datos dialoga con el equipo terminal del circuito de datos pas&aacute;ndose la informaci&oacute;n que se quiere transmitir/recibir";
 answers[43] = choices[43][3];
 units[43] = "101";
 comments[43] = "Id Pregunta: 3822. ";


//  Id pregunta: 3849 AÃ±o de creación de pregunta: 2002-01-01
 questions[44]= "45)  Usaremos fibra &oacute;ptica, frente a cable coaxial o par trenzado, cuando:";
 choices[44]= new Array();
 choices[44][0] = "La red se instala en un entorno que exige inmunidad al ruido";
 choices[44][1] = "Es un factor determinante la facilidad de instalaci&oacute;n";
 choices[44][2] = "Se necesita construir el backbone en una WAN";
 choices[44][3] = "Se pondera muy alto el abaratamiento de costes";
 answers[44] = choices[44][2];
 units[44] = "99";
 comments[44] = "Id Pregunta: 3849. ";


//  Id pregunta: 3950 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  En las redes de ordenadores, en la topolog&iacute;a en estrella:";
 choices[45]= new Array();
 choices[45][0] = "Un ordenador se conecta con el siguiente y el &uacute;ltimo con el primero, formando un circuito cerrado";
 choices[45][1] = "Existe un nodo ra&iacute;z del que cuelgan uno o varios nodos";
 choices[45][2] = "Existe un nodo central o hub al que se conectan todos los ordenadores";
 choices[45][3] = "Cada uno de los nodos est&aacute; conectado con todos los dem&aacute;s";
 answers[45] = choices[45][2];
 units[45] = "101";
 comments[45] = "Id Pregunta: 3950. ";


//  Id pregunta: 4062 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  El protocolo de transporte TCP, est&aacute;ndar de internet, NO tiene entre sus caracter&iacute;sticas";
 choices[46]= new Array();
 choices[46][0] = "la entrega fiable de paquetes";
 choices[46][1] = "la detecci&oacute;n y el control de la congesti&oacute;n";
 choices[46][2] = "es orientado a conexi&oacute;n";
 choices[46][3] = "su RFC es 793";
 answers[46] = choices[46][1];
 units[46] = "112,100";
 comments[46] = "Id Pregunta: 4062. ";


//  Id pregunta: 4193 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  La herramienta MRTG";
 choices[47]= new Array();
 choices[47][0] = "Puede generar gr&aacute;ficas de cantidad de tr&aacute;fico";
 choices[47][1] = "Utiliza SNMP";
 choices[47][2] = "Es una herramienta gratuita";
 choices[47][3] = "todas las anteriores";
 answers[47] = choices[47][3];
 units[47] = "104";
 comments[47] = "Id Pregunta: 4193. ";


//  Id pregunta: 4194 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  No es cierto que la herramienta Nagios";
 choices[48]= new Array();
 choices[48][0] = "Puede monitorizar servicios TCP";
 choices[48][1] = "Es una alternativa a Bigbrother";
 choices[48][2] = "Puede utilizar agentes distintos a SNMP";
 choices[48][3] = "Puede ser instalada en Windows";
 answers[48] = choices[48][3];
 units[48] = "104";
 comments[48] = "Id Pregunta: 4194. ";


//  Id pregunta: 4206 AÃ±o de creación de pregunta: 2006-01-01
 questions[49]= "50)  La fibra &oacute;ptica m&aacute;s popular es";
 choices[49]= new Array();
 choices[49][0] = "9/125 um";
 choices[49][1] = "62.5/125 um";
 choices[49][2] = "50/125 um";
 choices[49][3] = "100/140 um";
 answers[49] = choices[49][1];
 units[49] = "99";
 comments[49] = "Id Pregunta: 4206. ";


//  Id pregunta: 4269 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  Indique cu&aacute;l de las siguientes no es una direcci&oacute;n IP correcta:";
 choices[50]= new Array();
 choices[50][0] = "115.26.13.4";
 choices[50][1] = "255.3.4.5";
 choices[50][2] = "10.0.0.1";
 choices[50][3] = "0.0.0.3";
 answers[50] = choices[50][1];
 units[50] = "99";
 comments[50] = "Id Pregunta: 4269. ";


//  Id pregunta: 4341 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de comunicaciones fue originalmente concebido como el est&aacute;ndar militar MIL-STD-1778?:";
 choices[51]= new Array();
 choices[51][0] = "IEEE 802.3.";
 choices[51][1] = "IEEE 802.11b.";
 choices[51][2] = "CCITT X 25.";
 choices[51][3] = "TCP.";
 answers[51] = choices[51][3];
 units[51] = "99";
 comments[51] = "Id Pregunta: 4341. ";


//  Id pregunta: 4420 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  &iquest;Qu&eacute; comando se utiliza para comprobar una conexi&oacute;n f&iacute;sica entre dos hosts?";
 choices[52]= new Array();
 choices[52][0] = "TPING.";
 choices[52][1] = "WINPING.";
 choices[52][2] = "TCPING.";
 choices[52][3] = "PING.";
 answers[52] = choices[52][3];
 units[52] = "100";
 comments[52] = "Id Pregunta: 4420. ";


//  Id pregunta: 4967 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  El principio de Frank-Condon, de especial importancia en las comunicaciones &oacute;pticas basadas en l&aacute;ser de semiconductor, establece que:";
 choices[53]= new Array();
 choices[53][0] = "La atenuaci&oacute;n de la se&ntilde;al disminuye con el cuadrado de la longitud de onda.";
 choices[53][1] = "S&oacute;lo son posibles transiciones con emisi&oacute;n de fotones cuando no hay cambio en la cantidad de movimiento delelectr&oacute;n.";
 choices[53][2] = "El ruido nodal es m&aacute;ximo en la fibra monomodo.";
 choices[53][3] = "El ruido nodal es m&iacute;nimo en la fibra monomodo.";
 answers[53] = choices[53][1];
 units[53] = "99";
 comments[53] = "Id Pregunta: 4967. Examen TIC B 2007";


//  Id pregunta: 5026 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  En relaci&oacute;n con las ventanas de cr&eacute;dito (de recepci&oacute;n y de envio) que utiliza el protocolo TCP para el control deflujo, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[54]= new Array();
 choices[54][0] = "Permiten que el emisor no tenga que esperar un ACK (acknowledge) para cada segmento de datostransmitido";
 choices[54][1] = "El tama&ntilde;o del b&uacute;fer de esta ventanas est&aacute; limitado a 4096 bytes";
 choices[54][2] = "Impiden que se reenv&iacute;en paquetes pasado un time-out";
 choices[54][3] = "Hace que el canal de comunicaci&oacute;n est&eacute; m&aacute;s tiempo ocupado para transmitir la misma informaci&oacute;n.";
 answers[54] = choices[54][0];
 units[54] = "100";
 comments[54] = "Id Pregunta: 5026. Examen TIC A 2007";


//  Id pregunta: 5045 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  En el modelo de referencia fijado por Open System Interconection, de la International Standars Organization, el nivelque realiza la funci&oacute;n de seleccionar la mejor ruta para la comunicaci&oacute;n entre m&aacute;quinas ubicadas en redesgeogr&aacute;ficas distintas es el:";
 choices[55]= new Array();
 choices[55][0] = "Nivel 2";
 choices[55][1] = "Nivel 3";
 choices[55][2] = "Nivel 4";
 choices[55][3] = "Nivel 5";
 answers[55] = choices[55][1];
 units[55] = "100";
 comments[55] = "Id Pregunta: 5045. Examen TIC A 2007";


//  Id pregunta: 5277 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Indique cu&aacute;l no es una ventaja de la fibra &oacute;ptica frente a los cableados de cobre:";
 choices[56]= new Array();
 choices[56][0] = "Mayor ancho de banda.";
 choices[56][1] = "Inmunidad al ruido electromagn&eacute;tico.";
 choices[56][2] = "Instalaci&oacute;n y conexionado m&aacute;s sencilla.";
 choices[56][3] = "Menor tama&ntilde;o y peso.";
 answers[56] = choices[56][2];
 units[56] = "99";
 comments[56] = "Id Pregunta: 5277. ";


//  Id pregunta: 5512 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  La red de conexi&oacute;n r&aacute;pida inaugurada por la Uni&oacute;n Europea en 2005 para atender la interconexi&oacute;n de investigadores europeos se denomina:";
 choices[57]= new Array();
 choices[57][0] = "TEIN2";
 choices[57][1] = "GEANT2";
 choices[57][2] = "ALICE";
 choices[57][3] = "DANTE";
 answers[57] = choices[57][1];
 units[57] = "103";
 comments[57] = "Id Pregunta: 5512. ";


//  Id pregunta: 5568 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.19 del IEEE?";
 choices[58]= new Array();
 choices[58][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[58][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[58][2] = "Resilient Packet Ring";
 choices[58][3] = "Traspaso entre redes";
 answers[58] = choices[58][1];
 units[58] = "101";
 comments[58] = "Id Pregunta: 5568. ";


//  Id pregunta: 6143 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  En relaci&oacute;n con los c&oacute;decs que se utilizan en sistemas de telefon&iacute;a:";
 choices[59]= new Array();
 choices[59][0] = "G.711 utiliza el algoritmo PCM y es el c&oacute;dec que garantiza la mayor calidad de sonido por lo que se suele utilizar en entornos LAN de VoIP";
 choices[59][1] = "G.729 es el algoritmo m&aacute;s extendido en sistemas de VoIP sobre WAN, ya que aunque tiene p&eacute;rdida por compresi&oacute;n la calidad de sonido (MOS) es buena";
 choices[59][2] = "El c&oacute;dec que se utiliza en GSM (GSM 06.10) proporciona una calidad de sonido peor que G.711 y G.729";
 choices[59][3] = "Todas las respuestas anteriores son correctas";
 answers[59] = choices[59][3];
 units[59] = "100, 109";
 comments[59] = "Id Pregunta: 6143. ";


//  Id pregunta: 6574 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[60]= new Array();
 choices[60][0] = "ICMP trabaja en la capa de enlace";
 choices[60][1] = "ICMP informa a los hosts, routers y otros dispositivos de problemas en la red";
 choices[60][2] = "ICMP es el principal componente de la utilidad ping";
 choices[60][3] = "Todas las respuestas anteriores son correctas";
 answers[60] = choices[60][0];
 units[60] = "100";
 comments[60] = "Id Pregunta: 6574. NULL";


//  Id pregunta: 6576 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Un protocolo de tunelado";
 choices[61]= new Array();
 choices[61][0] = "Mueve tramas de una red a otra";
 choices[61][1] = "Coloca dichas tramas en tramas encapsuladas enrutables";
 choices[61][2] = "A y B son correctas";
 choices[61][3] = "A y B son incorrectas";
 answers[61] = choices[61][2];
 units[61] = "101";
 comments[61] = "Id Pregunta: 6576. ";


//  Id pregunta: 7287 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Las redes de pr&oacute;xima generaci&oacute;n (NGN) son seg&uacute;n la UIT (uni&oacute;n internacional de telecomunicaciones):";
 choices[62]= new Array();
 choices[62][0] = "Las redes que engloban las nuevas tecnolog&iacute;as inal&aacute;mbricas, tambi&eacute;n conocidas como redes de cuarta generaci&oacute;n (4G)";
 choices[62][1] = "Las redes que ser&aacute;n desplegadas para la generaci&oacute;n del siglo XXI, las cuales garantizar&aacute;n una cobertura real del 100%";
 choices[62][2] = "Las redes de los pr&oacute;ximos a&ntilde;os, basadas en el protocolo Internet IP y que ser&aacute;n utilizadas para todo tipo de servicios";
 choices[62][3] = "Las futuras redes basadas en conmutaci&oacute;n de circuitos, que proporcionar&aacute;n una calidad de servicio superior y permitir&aacute;n comunicaciones de voz y datos a altas velocidades";
 answers[62] = choices[62][2];
 units[62] = "100, 107";
 comments[62] = "Id Pregunta: 7287. Examen TIC B 2009";


//  Id pregunta: 8216 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  En el modelo de referencia de Interconexi&oacute;n de sistemas abiertos (OSI/ISO), &iquest;cu&aacute;l es la afirmaci&oacute;n correcta?:";
 choices[63]= new Array();
 choices[63][0] = "Las normas de intercomunicaci&oacute;n entre capas constituyen cada protocolo.";
 choices[63][1] = "No todos los nodos participantes en una comunicaci&oacute;n necesitan implementar todas las capas del modelo.";
 choices[63][2] = "Cada entidad del nivel N se comunica directamente con su par.";
 choices[63][3] = "Al especificar cualquier servicio que una capa proporciona, se emplean siempre las primitivas REQUEST, INDICATION, RESPONSE, CONFIRM.";
 answers[63] = choices[63][1];
 units[63] = "100";
 comments[63] = "Id Pregunta: 8216. Examen TIC A1 2010";


//  Id pregunta: 8289 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Una red administrada a trav&eacute;s de SNMP contempla tres componentes claves. &iquest;Cu&aacute;l de los siguientes NO es uno de ellos?";
 choices[64]= new Array();
 choices[64][0] = "Dispositivos administrados. ";
 choices[64][1] = "Agentes.";
 choices[64][2] = "Sistemas administradores de red (NMS).";
 choices[64][3] = "Registro de ubicaci&oacute;n de visitantes (VLR).";
 answers[64] = choices[64][3];
 units[64] = "104";
 comments[64] = "Id Pregunta: 8289. Examen TIC A2 2010";


//  Id pregunta: 8445 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Una compa&ntilde;&iacute;a va a abrir una nueva sede asumiendo la subred 255.255.248.0,&iquest;Cu&aacute;l de las siguientes direcciones IP se podr&iacute;a asignar a un ordenador de la nuevasede?:";
 choices[65]= new Array();
 choices[65][0] = "a) 172.16.20.0";
 choices[65][1] = "172.16.24.45";
 choices[65][2] = "Ambas respuestas son correctas";
 choices[65][3] = "Ninguna respuesta es correcta";
 answers[65] = choices[65][2];
 units[65] = "100";
 comments[65] = "Id Pregunta: 8445. Analista Ayto. Madrid 2010";


//  Id pregunta: 8452 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l es uno de los inconvenientes de usar un Hub?:";
 choices[66]= new Array();
 choices[66][0] = "Un Hub no puede extender la distancia operativa de la red";
 choices[66][1] = "Un Hub no puede filtrar el tr&aacute;fico de la red";
 choices[66][2] = "Un Hub no puede amplificar se&ntilde;ales debilitadas";
 choices[66][3] = "Un Hub no cumple ninguna de las anteriores";
 answers[66] = choices[66][1];
 units[66] = "102";
 comments[66] = "Id Pregunta: 8452. Analista Ayto. Madrid 2010";


//  Id pregunta: 8453 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Un puente se caracteriza por:";
 choices[67]= new Array();
 choices[67][0] = "Operar en capa 3 del modelo OSI y utiliza direcciones MAC para tomar decisiones";
 choices[67][1] = "Opera en capa 2 del modelo OSI y utiliza direcciones MAC para tomar decisiones";
 choices[67][2] = "Operar en capa 3 del modelo OSI y utiliza direcciones IP para tomar decisiones";
 choices[67][3] = "Operar en capa 4 del modelo OSI y utiliza puertos TCP para tomar decisiones";
 answers[67] = choices[67][1];
 units[67] = "102";
 comments[67] = "Id Pregunta: 8453. Analista Ayto. Madrid 2010";


//  Id pregunta: 8479 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes operaciones se incorpora en SNMP v2?";
 choices[68]= new Array();
 choices[68][0] = "SetRequest";
 choices[68][1] = "GetBulkRequest";
 choices[68][2] = "GetNextRequest";
 choices[68][3] = "Trap";
 answers[68] = choices[68][1];
 units[68] = "104";
 comments[68] = "Id Pregunta: 8479. Examen TIC A2 2010 interna";


//  Id pregunta: 8484 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Sobre qu&eacute; protocolo se encapsulan los paquetes DHCP?";
 choices[69]= new Array();
 choices[69][0] = "HTTP.";
 choices[69][1] = "UDP.";
 choices[69][2] = "TCP.";
 choices[69][3] = "IP.";
 answers[69] = choices[69][1];
 units[69] = "100";
 comments[69] = "Id Pregunta: 8484. Examen TIC A2 2010 interna";


//  Id pregunta: 8627 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  En el contexto de las redes de cable, con objeto de permitir la asignaci&oacute;n din&aacute;mica de ancho de banda a los usuarios, &iquest;cu&aacute;les son las estrategias posibles de acceso a trav&eacute;s de m&oacute;dem?";
 choices[70]= new Array();
 choices[70][0] = "Por encaminamiento IP y basada en ATM";
 choices[70][1] = "A trav&eacute;s del nodo primario de la red y a trav&eacute;s del nodo secundario de la red";
 choices[70][2] = "Mediante solicitud-reserva y por contienda.";
 choices[70][3] = "En estrella y en &aacute;rbol.";
 answers[70] = choices[70][2];
 units[70] = "101, 102";
 comments[70] = "Id Pregunta: 8627. Examen TIC A2 2010 interna";


//  Id pregunta: 8655 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;En qu&eacute; recomendaci&oacute;n del ITU-T se especifican las caracter&iacute;sticas de las fibras &oacute;pticas monomodo &quot;non-zero dispersion-shifted&quot; (NZDSF) habitualmente utilizadas en DWDM?:";
 choices[71]= new Array();
 choices[71][0] = "G.653";
 choices[71][1] = "G.654";
 choices[71][2] = "G.655";
 choices[71][3] = "G.656";
 answers[71] = choices[71][2];
 units[71] = "99";
 comments[71] = "Id Pregunta: 8655. Examen UPM A2 2011";


//  Id pregunta: 8670 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Un acceso RDSI primario consta de";
 choices[72]= new Array();
 choices[72][0] = "Dos canales B y un canal D";
 choices[72][1] = "Dos canales B y ning&uacute;n canal D";
 choices[72][2] = "Treinta canales B y un canal D";
 choices[72][3] = "Treinta canales B y dos canales D";
 answers[72] = choices[72][2];
 units[72] = "103";
 comments[72] = "Id Pregunta: 8670. Examen UPM A2 2011";


//  Id pregunta: 8675 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  En una red MPLS, &iquest;qu&eacute; funci&oacute;n realiza el LSR?";
 choices[73]= new Array();
 choices[73][0] = "Es el elemento que conmuta etiquetas.";
 choices[73][1] = "Es el nombre de un circuito virtual MPLS.";
 choices[73][2] = "Es el elemento que inicia o termina el t&uacute;nel.";
 choices[73][3] = "Es el elemento que conmuta el tr&aacute;fico.";
 answers[73] = choices[73][0];
 units[73] = "100";
 comments[73] = "Id Pregunta: 8675. Examen UPM A2 2011";


//  Id pregunta: 8678 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Es posible hacer convivir varios protocolos incompatibles entre s&iacute; sobre una misma red?";
 choices[74]= new Array();
 choices[74][0] = "S&iacute;, utilizando tunneling o encapsulado de protocolos";
 choices[74][1] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia OSI";
 choices[74][2] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia TCP/IP";
 choices[74][3] = "No";
 answers[74] = choices[74][0];
 units[74] = "102";
 comments[74] = "Id Pregunta: 8678. Examen UPM A2 2011";


//  Id pregunta: 8770 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l es la versi&oacute;n extendida del protocolo BOOTP?";
 choices[75]= new Array();
 choices[75][0] = "DHCP";
 choices[75][1] = "RARP";
 choices[75][2] = "RTSP";
 choices[75][3] = "DNS";
 answers[75] = choices[75][0];
 units[75] = "100";
 comments[75] = "Id Pregunta: 8770. Examen TIC A2 2010 interna";


//  Id pregunta: 8870 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes asociaciones &ldquo;protocolos OSI - protocolos TCP/IP&rdquo; no es correcta?:";
 choices[76]= new Array();
 choices[76][0] = "X.500-SNMP";
 choices[76][1] = "SMTP-X.400";
 choices[76][2] = "FTAM-FTP";
 choices[76][3] = "SMTP-X.25";
 answers[76] = choices[76][0];
 units[76] = "100";
 comments[76] = "Id Pregunta: 8870. Analista Ayto. Madrid 2010";


//  Id pregunta: 8913 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes acciones NO es realizada por un switch de nivel 2?:";
 choices[77]= new Array();
 choices[77][0] = "Conversi&oacute;n de protocolos.";
 choices[77][1] = "Aprendizaje de direcciones MAC.";
 choices[77][2] = "Reducci&oacute;n de colisiones respecto a un hub.";
 choices[77][3] = "Posibilitar m&uacute;ltiples transmisiones simult&aacute;neas sin interferir en otras sub-redes";
 answers[77] = choices[77][0];
 units[77] = "102";
 comments[77] = "Id Pregunta: 8913. Operador Ayto. Madrid 2010";


//  Id pregunta: 9018 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  Cuando una l&iacute;nea de transmisi&oacute;n cumple la condici&oacute;n de Heaviside:";
 choices[78]= new Array();
 choices[78][0] = "El retardo es m&iacute;nimo.";
 choices[78][1] = "El retardo es m&aacute;ximo.";
 choices[78][2] = "El retardo es constante.";
 choices[78][3] = "No existe retardo";
 answers[78] = choices[78][2];
 units[78] = "99";
 comments[78] = "Id Pregunta: 9018. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9351 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Respecto de RDSI, se puede afirmar:";
 choices[79]= new Array();
 choices[79][0] = "En la capa de enlace, el canal D hace uso del Procedimiento de Acceso al Enlace en el Canal D (o LAPD)";
 choices[79][1] = "En la capa de enlace, el canal B hace uso del Procedimiento de Acceso al Enlace en el Canal B (o LAPB)";
 choices[79][2] = "La transmisi&oacute;n d&uacute;plex en la capa f&iacute;sica se efect&uacute;a a 192 kbps mediante tramas de 40 bits cada una y una duraci&oacute;n de 275 us";
 choices[79][3] = "En la capa de red, se usa el protocolo LAPB, para gestionar las conexiones";
 answers[79] = choices[79][0];
 units[79] = "103";
 comments[79] = "Id Pregunta: 9351. Pag. 8 astic 2011";


//  Id pregunta: 9356 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;Cu&aacute;ntos terminales pueden ser usados simult&aacute;neamente en una RDSI con acceso b&aacute;sico?:";
 choices[80]= new Array();
 choices[80][0] = "S&oacute;lo 1 canal B puede estar ocupado en un momento determinado, pero puede encolar lo que entre por el otro.";
 choices[80][1] = "3, ya que cada canal s&oacute;lo puede ser utilizado por un terminal a la vez, y con la compresi&oacute;n adecuada todos los canales permiten una comunicaci&oacute;n vocal.";
 choices[80][2] = "1 por cada canal B mientras que el canal D puede ser compartido por varios terminales en modo paquete.";
 choices[80][3] = "Los 8 terminales que puede soportar el acceso b&aacute;sico.";
 answers[80] = choices[80][2];
 units[80] = "103";
 comments[80] = "Id Pregunta: 9356. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";


//  Id pregunta: 9371 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  E-Line:";
 choices[81]= new Array();
 choices[81][0] = "Es un servicio que ofrecen los operadores de fibra de lineas dedicadas.";
 choices[81][1] = "Es un mecanismo para proporcionar comunicaciones punto a punto mediante t&uacute;neles IPSec.";
 choices[81][2] = "Es un mecanismo para proporcionar comunicaciones punto a punto, encapsulando el tr&aacute;fico Ethernet dentro de un tunel MPLS.";
 choices[81][3] = "Es un mecanismo para comunicar dos computadoras mediante PPP.";
 answers[81] = choices[81][2];
 units[81] = "101";
 comments[81] = "Id Pregunta: 9371. ";


//  Id pregunta: 9372 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  En un circuito virtual:";
 choices[82]= new Array();
 choices[82][0] = "El Equipo de Terminaci&oacute;n del Circuito de Datos (ETCD) es un nodo frontera de red, a trav&eacute;s del cual los datos del usuario atraviesan la misma hasta llegar al ETCD remoto.";
 choices[82][1] = "La Central de Conmutaci&oacute;n de Paquetes es la encargada del paso de paquetes al siguiente nodo dentro del circuito virtual establecido.";
 choices[82][2] = "Un Circuito de Datos es la conexi&oacute;n virtual establecida entre los dos ETCD (Equipos de Terminaci&oacute;n del Circuito de Datos) involucrados en una transmisi&oacute;n.";
 choices[82][3] = "Todas son correctas.";
 answers[82] = choices[82][3];
 units[82] = "101";
 comments[82] = "Id Pregunta: 9372. ";


//  Id pregunta: 9381 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  &iquest;A qu&eacute; est&aacute;ndar se refiere WirelessMan-Advanced?";
 choices[83]= new Array();
 choices[83][0] = "802.16m";
 choices[83][1] = "802.16e";
 choices[83][2] = "802.16k";
 choices[83][3] = "802.16-2009";
 answers[83] = choices[83][0];
 units[83] = "101";
 comments[83] = "Id Pregunta: 9381. ";


//  Id pregunta: 9865 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En el marco del modelo est&aacute;ndar de gesti&oacute;n de red definido por la ISO y la ITU-TX.700, son &aacute;reas de gesti&oacute;n: ";
 choices[84]= new Array();
 choices[84][0] = "la gesti&oacute;n de fallos, de contabilidad, de configuraci&oacute;n, de calidad defuncionamiento y de seguridad.";
 choices[84][1] = "la gesti&oacute;n de fallos, de la demanda, de configuraci&oacute;n, de rendimiento y deseguridad.";
 choices[84][2] = "la gesti&oacute;n de fallos, de monitorizaci&oacute;n, de configuraci&oacute;n y de seguridad";
 choices[84][3] = "la gesti&oacute;n de monitorizaci&oacute;n, de trazabilidad, de configuraci&oacute;n y de seguridad";
 answers[84] = choices[84][0];
 units[84] = "104";
 comments[84] = "Id Pregunta: 9865. TIC A1, Examen 2013";


//  Id pregunta: 9933 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l no es un fallo detectado en el modelo de referencia OSI?";
 choices[85]= new Array();
 choices[85][0] = "Se desarroll&oacute; antes de que se inventaran los protocolos, as&iacute; que no se sab&iacute;a qu&eacute; funcionalidad poner en cada capa.";
 choices[85][1] = "Las capas de red y enlace de datos est&aacute;n muy llenas y se han subdividido en subcapas, cada una con funciones distintas.";
 choices[85][2] = "La administraci&oacute;n de la red es clave en el modelo.";
 choices[85][3] = "El modelo est&aacute; dominado por una mentalidad de comunicaciones.";
 answers[85] = choices[85][2];
 units[85] = "100";
 comments[85] = "Id Pregunta: 9933. NULL";


//  Id pregunta: 10033 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  De las siguientes cabeceras IPv6 (RFC 2460), &iquest;cu&aacute;l de las siguientes cabeceras NO es de extensi&oacute;n?";
 choices[86]= new Array();
 choices[86][0] = "Fragmentacion. ";
 choices[86][1] = "Opciones de salto a salto.";
 choices[86][2] = "Autenticaci&oacute;n. ";
 choices[86][3] = "L&iacute;mite de saltos.";
 answers[86] = choices[86][3];
 units[86] = "100";
 comments[86] = "Id Pregunta: 10033. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10048 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  MPLS (Multiprotocol Label Switching) utiliza algunos conceptos, entre ellos:";
 choices[87]= new Array();
 choices[87][0] = "FEC (Forwarding Equivalent Class).";
 choices[87][1] = "LAPD (Link Access Protocol for D-channel).";
 choices[87][2] = "CIR (Commited Information Rate).";
 choices[87][3] = "MBS (Maximum Burst Size).";
 answers[87] = choices[87][0];
 units[87] = "100";
 comments[87] = "Id Pregunta: 10048. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10118 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Seleccionar la correcta:";
 choices[88]= new Array();
 choices[88][0] = "Tanto los router como los switches definen dominios de colisi&oacute;n y difusi&oacute;n";
 choices[88][1] = "Los router definen dominios de colisi&oacute;n pero no de difusi&oacute;n";
 choices[88][2] = "Los router definen dominios de difusi&oacute;n y de colisi&oacute;n";
 choices[88][3] = "Los switches definen dominios de colisi&oacute;n y difusi&oacute;n.";
 answers[88] = choices[88][2];
 units[88] = "102";
 comments[88] = "Id Pregunta: 10118. ";


//  Id pregunta: 10299 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En la administraci&oacute;n de un dispositivo switch &iquest;qu&eacute; es un trunk?";
 choices[89]= new Array();
 choices[89][0] = "Un puerto de velocidad GigaEthernet o 10 GigaEthernet.";
 choices[89][1] = "Un enlace que agrega tr&aacute;fico de varias VLANs.";
 choices[89][2] = "Un adaptador fibra - par trenzado.";
 choices[89][3] = "Una versi&oacute;n estable del firmware del dispositivo.";
 answers[89] = choices[89][1];
 units[89] = "102";
 comments[89] = "Id Pregunta: 10299. TIC A2, libre, examen 2013";


//  Id pregunta: 10505 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Cual de las siguientes normas se refiere a la Compatibilidad Electromagnetica?";
 choices[90]= new Array();
 choices[90][0] = "Real Decreto 158/2006";
 choices[90][1] = "Directiva 2004/108/CE";
 choices[90][2] = "Directiva 2006/123/CE";
 choices[90][3] = "Ninguna de las anteriores";
 answers[90] = choices[90][1];
 units[90] = "99";
 comments[90] = "Id Pregunta: 10505. El RD es el Real Decreto 1580/2006 y la directiva 2006/123 es la de servicios";


//  Id pregunta: 10919 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Si se quiere interconectar mediante fibra &oacute;ptica dos dispositivos separados a menos de 100 metros en un CPD a una velocidad de 40Gb/s, la categor&iacute;a m&iacute;nima de fibra &oacute;ptica a usar deber&iacute;a ser:";
 choices[91]= new Array();
 choices[91][0] = "OM2";
 choices[91][1] = "OM3";
 choices[91][2] = "OM4";
 choices[91][3] = "OM5";
 answers[91] = choices[91][2];
 units[91] = "103, 107";
 comments[91] = "Id Pregunta: 10919. Examen GSI 2014";


//  Id pregunta: 10924 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Para la instalaci&oacute;n del cableado estructurado de un edificio de oficinas, en el que se cuenta con redes Ethernet y Gigabit Ethernet, se&ntilde;ale la respuesta correcta:";
 choices[92]= new Array();
 choices[92][0] = "Es necesario contar con un switch FC en cada una de las plantas del edificio para la interconexi&oacute;n del cableado UTP/STP.";
 choices[92][1] = "Puede emplearse cableado UTP (Unshielded Twisted Pair) de la categor&iacute;a 1 y 2.";
 choices[92][2] = "Puede emplearse cableado UTP (Unshielded Twisted Pair) de la categor&iacute;a 5 y 6.";
 choices[92][3] = "Puede emplearse cableado UTP (Unshielded Twisted Pair) de la categor&iacute;a 3 y 4.";
 answers[92] = choices[92][2];
 units[92] = "99";
 comments[92] = "Id Pregunta: 10924. TIC A1 AGE 2014";


//  Id pregunta: 10974 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Al configurar una red Ethernet, es correcto que:";
 choices[93]= new Array();
 choices[93][0] = "El administrador de red debe hacer un listado de todas las direcciones MAC que se conectar&aacute;n.";
 choices[93][1] = "El administrador de red debe configurar en cada equipo la direcci&oacute;n MAC de la pasarela por defecto.";
 choices[93][2] = "El administrador de red debe instalar en todos los equipos la compatibilidad con 802.3 (Ethernet) y 802.4 (Gigabit Ethernet).";
 choices[93][3] = "El administrador de red debe establecer los segmentos de la red.";
 answers[93] = choices[93][3];
 units[93] = "101";
 comments[93] = "Id Pregunta: 10974. TIC A1 AGE 2014";


//  Id pregunta: 11180 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas se a&ntilde;ade en la Versi&oacute;n 3 del protocolo SNMP?";
 choices[94]= new Array();
 choices[94][0] = "Permite a los agentes informar de forma espontanea al gestor de un evento";
 choices[94][1] = "Enviar mensajes no solicitados al gestor";
 choices[94][2] = "Mecanismos de autentificaci&oacute;n, privacidad y control de accesos verdaderamente s&oacute;lidos.";
 choices[94][3] = "Permite que el agente informe espont&aacute;neamente de excepciones y errores en el protocolo";
 answers[94] = choices[94][2];
 units[94] = "104";
 comments[94] = "Id Pregunta: 11180. ";


//  Id pregunta: 11651 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En IPv6, la etiqueta de flujo tiene una longitud de:";
 choices[95]= new Array();
 choices[95][0] = "8 bits";
 choices[95][1] = "16 bits";
 choices[95][2] = "20 bits";
 choices[95][3] = "No existe dicha etiqueta";
 answers[95] = choices[95][2];
 units[95] = "100";
 comments[95] = "Id Pregunta: 11651. ";


//  Id pregunta: 11654 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Son protocolos de estado del enlace:";
 choices[96]= new Array();
 choices[96][0] = "OSPF y RIPv2";
 choices[96][1] = "IS-IS y OSPF";
 choices[96][2] = "IGRP y RIPv2";
 choices[96][3] = "RIPv2 e IS-IS";
 answers[96] = choices[96][1];
 units[96] = "102";
 comments[96] = "Id Pregunta: 11654. ";


//  Id pregunta: 11715 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l es la forma en que un administrador puede configurar VLAN?";
 choices[97]= new Array();
 choices[97][0] = "Est&aacute;ticamente o Dinamicamente";
 choices[97][1] = "Din&aacute;micamente o a trav&eacute;s de una base de datos de VLAN";
 choices[97][2] = "A trav&eacute;s de un servidor DHCP";
 choices[97][3] = "A trav&eacute;s de  una base de datos";
 answers[97] = choices[97][0];
 units[97] = "102";
 comments[97] = "Id Pregunta: 11715. NULL";


//  Id pregunta: 11716 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cuantos mensajes se intercambian durante el proceso de terminaci&oacute;n de la sesi&oacute;n TCP entre el cliente y el servidor?";
 choices[98]= new Array();
 choices[98][0] = "2";
 choices[98][1] = "4";
 choices[98][2] = "6";
 choices[98][3] = "8";
 answers[98] = choices[98][1];
 units[98] = "102";
 comments[98] = "Id Pregunta: 11716. NULL";


//  Id pregunta: 11755 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[99]= new Array();
 choices[99][0] = "OS1: Fibra monomodo, con una relaci&oacute;n n&uacute;cleo/revestimiento de 9/125 ?m. Supera distancias de 100 Km trabajando a 10 Gbps.";
 choices[99][1] = "OM1 (Optical Multimode 1): fibra &oacute;ptica multimodo, con relaci&oacute;n 62.5/125 ?m. Alcanza distancias m&aacute;ximas de 3000 metros a 10 Gbps.";
 choices[99][2] = "OM2: relaci&oacute;n 50/125 ?m, permite distancias m&aacute;ximas aproximadas de 500 metros a 1 Gbps.";
 choices[99][3] = "Ninguna es correcta";
 answers[99] = choices[99][2];
 units[99] = "99";
 comments[99] = "Id Pregunta: 11755. ";


