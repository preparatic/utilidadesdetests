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

//  Id pregunta: 2974 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  X.500 se constituye como un estandar de servicios de directorio electr&oacute;nico con caracter&iacute;sticas de:";
 choices[0]= new Array();
 choices[0][0] = "Actualizaci&oacute;n";
 choices[0][1] = "Acceso y actualizaci&oacute;n";
 choices[0][2] = "Modificaci&oacute;n ";
 choices[0][3] = "Ninguna de las anteriores";
 answers[0] = choices[0][1];
 units[0] = "106";
 comments[0] = "Id Pregunta: 2974. Examen Julio 2003";


//  Id pregunta: 2991 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes aseveraciones en relaci&oacute;n con el est&aacute;ndar IEEE 802.11 es falsa?";
 choices[1]= new Array();
 choices[1][0] = "Los estandares IEEE 802.11 son de libre distribuci&oacute;n";
 choices[1][1] = "La especificaci&oacute;n de la capa MAC (Medium Access Control) del IEEE 802.11 es el CSMA/CA";
 choices[1][2] = "El nivel MAC del IEEE 802.11 define tres tipos de tramas: datos, administraci&oacute;n y control ";
 choices[1][3] = "La especifici&oacute;n IEEE 802.11b define transmisiones con velocidades hasta 54Mbps";
 answers[1] = choices[1][3];
 units[1] = "107";
 comments[1] = "Id Pregunta: 2991. NULL";


//  Id pregunta: 3042 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Para que me sirve una sonda de intrusi&oacute;n?:";
 choices[2]= new Array();
 choices[2][0] = "No existe ese concepto";
 choices[2][1] = "Para devolver el ataque";
 choices[2][2] = "Para detectar actividades anormales o sospechosas en la red";
 choices[2][3] = "Para penetrar en un sistema";
 answers[2] = choices[2][2];
 units[2] = "111";
 comments[2] = "Id Pregunta: 3042. NULL";


//  Id pregunta: 3047 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qu&eacute; diferencia hay entre un servidor de ficheros y un servidor de bases de datos?:";
 choices[3]= new Array();
 choices[3][0] = "El servidor de ficheros devuelve el fichero entero y el de bases de datos s&oacute;lo el dato solicitado";
 choices[3][1] = "El servidor de ficheros es m&aacute;s barato";
 choices[3][2] = "No hay diferencia; es lo mismo";
 choices[3][3] = "Son ciertas &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 answers[3] = choices[3][3];
 units[3] = "113";
 comments[3] = "Id Pregunta: 3047. ";


//  Id pregunta: 3071 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  IRC es:";
 choices[4]= new Array();
 choices[4][0] = "Internet Relay Chat";
 choices[4][1] = "InfraRed Channel";
 choices[4][2] = "Investigation Resource Commitee";
 choices[4][3] = "Internet Resource Commitee";
 answers[4] = choices[4][0];
 units[4] = "112";
 comments[4] = "Id Pregunta: 3071. ";


//  Id pregunta: 3090 AÃ±o de creación de pregunta: 2005-01-01
 questions[5]= "6)  Seg&uacute;n la terminolog&iacute;a usual, la intrusi&oacute;n de un cracker en un servidor web, en el peor de los casos, puede afectar a:";
 choices[5]= new Array();
 choices[5][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[5][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[5][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[5][3] = "Todas las anteriores";
 answers[5] = choices[5][3];
 units[5] = "111";
 comments[5] = "Id Pregunta: 3090. NULL";


//  Id pregunta: 3105 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Respecto a los buscadores de internet:";
 choices[6]= new Array();
 choices[6][0] = "los basados en el modelo enciclopedia clasifican las p&aacute;ginas seg&uacute;n su contenido sint&aacute;ctico";
 choices[6][1] = "los basados en palabras clave construyen tablas o &iacute;ndices inversos a partir de las palabras clave de un texto";
 choices[6][2] = "los metabuscadores, al usar varios buscadores simult&aacute;neamente, son mejores que todos los buscadores que usan juntos";
 choices[6][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[6] = choices[6][1];
 units[6] = "112";
 comments[6] = "Id Pregunta: 3105. ";


//  Id pregunta: 3137 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las respuestas siguientes no se aplica a los servicios de red orientados a conexi&oacute;n?:";
 choices[7]= new Array();
 choices[7][0] = "Requiere que todas las conexiones sean expl&iacute;citamente establecidas y terminadas";
 choices[7][1] = "Requiere que a cada paquete se le a&ntilde;ada toda la direcci&oacute;n de encaminamiento antes de transmitirlo";
 choices[7][2] = "Predetermina el path desde la fuente al destino antes de transmitir los datos";
 choices[7][3] = "Reserva los recursos de red antes de transmitir los datos";
 answers[7] = choices[7][1];
 units[7] = "101";
 comments[7] = "Id Pregunta: 3137. ";


//  Id pregunta: 3144 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta cuando se estudia la relaci&oacute;n entre la velocidad de transmisi&oacute;n de una se&ntilde;al digital y la frecuencia m&aacute;xima de la se&ntilde;al?:";
 choices[8]= new Array();
 choices[8][0] = "No existe ninguna relaci&oacute;n directa";
 choices[8][1] = "Cuanto mayor sea el ancho de banda de la se&ntilde;al, menor es la velocidad de transmisi&oacute;n";
 choices[8][2] = "Cuanto mayor sea la velocidad de transmisi&oacute;n, menor es el ancho de banda";
 choices[8][3] = "Cuanto menor sea el ancho de banda, menor es la velocidad de transmisi&oacute;n";
 answers[8] = choices[8][3];
 units[8] = "99";
 comments[8] = "Id Pregunta: 3144. NULL";


//  Id pregunta: 3145 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta para un sistema intermedio o encaminador (router) de una red IP?:";
 choices[9]= new Array();
 choices[9][0] = "Un encaminador o router no puede fragmentar un datagrama";
 choices[9][1] = "Puede fragmentar un datagrama si es necesario pero no puede reensamblar los fragmentos";
 choices[9][2] = "Puede tanto fragmentar un datagrama como reensamblar los fragmentos";
 choices[9][3] = "Solo puede reensamblar los paquetes TCP orientados a conexi&oacute;n";
 answers[9] = choices[9][2];
 units[9] = "102";
 comments[9] = "Id Pregunta: 3145. ";


//  Id pregunta: 3156 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta respecto a los dispositivos a usar en la interconexi&oacute;n de redes locales?";
 choices[10]= new Array();
 choices[10][0] = "Los conmutadores se utilizan para resolver problemas de rendimiento de la red debido a anchos de banda peque&ntilde;os y embotellamientos";
 choices[10][1] = "Los encaminadores o routers son independientes del protocolo, ya que se sit&uacute;an en el nivel de red y eligen la ruta m&aacute;s eficiente de cada paquete que reciben";
 choices[10][2] = "El protocolo &quot;spanning tree&quot; tiene como misi&oacute;n evitar la formaci&oacute;n de bucles en la interconexi&oacute;n de elementos de una red";
 choices[10][3] = "Los repetidores obligan a que los 2 segmentos que interconectan tenga el mismo acceso al medio, la misma direcci&oacute;n de red y trabaje con los mismos protocolos";
 answers[10] = choices[10][1];
 units[10] = "102";
 comments[10] = "Id Pregunta: 3156. NULL";


//  Id pregunta: 3228 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes no es un protocolo del nivel de aplicaci&oacute;n del modelo OSI?:";
 choices[11]= new Array();
 choices[11][0] = "X.400";
 choices[11][1] = "FTAM";
 choices[11][2] = "X.500  ";
 choices[11][3] = "X.25";
 answers[11] = choices[11][3];
 units[11] = "100";
 comments[11] = "Id Pregunta: 3228. X.25 no pertenece al modelo OSI";


//  Id pregunta: 3292 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Qu&eacute; funci&oacute;n cumple el punto de referencia S en RDSI?:";
 choices[12]= new Array();
 choices[12][0] = "Conexi&oacute;n de un TR1 a un TR2";
 choices[12][1] = "Conexi&oacute;n de un TE1 o un TA a un TR2";
 choices[12][2] = "Conexi&oacute;n de un TE2 a un TR2";
 choices[12][3] = "Conexi&oacute;n de un TE1 a un TE2";
 answers[12] = choices[12][1];
 units[12] = "103";
 comments[12] = "Id Pregunta: 3292. ";


//  Id pregunta: 3304 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Qu&eacute; protocolo se usa para enviar mensajes cortos en GSM por se&ntilde;alizaci&oacute;n SS7?:";
 choices[13]= new Array();
 choices[13][0] = "CAP";
 choices[13][1] = "MAP";
 choices[13][2] = "LAPD";
 choices[13][3] = "WAP";
 answers[13] = choices[13][1];
 units[13] = "108";
 comments[13] = "Id Pregunta: 3304. ";


//  Id pregunta: 3329 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Abilene es:";
 choices[14]= new Array();
 choices[14][0] = "el nombre con el que se conoce en la comunidad cient&iacute;fica a Internet2";
 choices[14][1] = "un proyecto de red troncal de altas prestaciones que interconecta GigaPops y que da apoyo al proyecto Internet2 ";
 choices[14][2] = "un nuevo est&aacute;ndar con el que se pretende implantar IPv6 progresivamente sustituyendo a IPv4";
 choices[14][3] = "una entidad de I+D a nivel mundial encargada del desarrollo de tecnolog&iacute;a inal&aacute;mbrica para comunicaciones a nivel interestelar";
 answers[14] = choices[14][1];
 units[14] = "112";
 comments[14] = "Id Pregunta: 3329. ";


//  Id pregunta: 3380 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El localizador de recursos, URL, tiene como formato general:";
 choices[15]= new Array();
 choices[15][0] = "m&eacute;todo:/servidor[:puerto]//directorio/fichero";
 choices[15][1] = "servidor://m&eacute;todo[:puerto]//directorio/fichero";
 choices[15][2] = "m&eacute;todo://servidor[:puerto]/directorio/fichero";
 choices[15][3] = "m&eacute;todo://servidor[:direcci&oacute;n:puerto]/directorio/fichero";
 answers[15] = choices[15][2];
 units[15] = "112";
 comments[15] = "Id Pregunta: 3380. ";


//  Id pregunta: 3447 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El protocolo de gesti&oacute;n y administraci&oacute;n de redes que ha sido estandarizado por OSI es:";
 choices[16]= new Array();
 choices[16][0] = "SNMP (Simple Network Management Protocol)";
 choices[16][1] = "SMIP (Structure of Management Information Protocol)";
 choices[16][2] = "CMIP (Common Management Information Protocol)";
 choices[16][3] = "RMON (Remote Network Monitoring)";
 answers[16] = choices[16][2];
 units[16] = "104";
 comments[16] = "Id Pregunta: 3447. ";


//  Id pregunta: 3467 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El punto de referencia S del modelo RDSI es:";
 choices[17]= new Array();
 choices[17][0] = "La interfaz para terminales anal&oacute;gicos";
 choices[17][1] = "La interfaz con la l&iacute;nea de transmisi&oacute;n hacia la central p&uacute;blica";
 choices[17][2] = "La interfaz a 4 hilos para equipos RDSI";
 choices[17][3] = "La separaci&oacute;n entre las instalaciones de usuario y los equipos de transmisi&oacute;n, cuando existe TR2";
 answers[17] = choices[17][2];
 units[17] = "103";
 comments[17] = "Id Pregunta: 3467. ";


//  Id pregunta: 3523 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En HDLC, si un sistema inicia el enlace con SABM P, su estaci&oacute;n colateral, para establecer el enlace, le responder&aacute; con:";
 choices[18]= new Array();
 choices[18][0] = "SABM F";
 choices[18][1] = "SABM P";
 choices[18][2] = "UA F";
 choices[18][3] = "UA P";
 answers[18] = choices[18][2];
 units[18] = "100";
 comments[18] = "Id Pregunta: 3523. NULL";


//  Id pregunta: 3524 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En Internet se encuentran a menudo las siglas FAQ. &iquest;Qu&eacute; significan?:";
 choices[19]= new Array();
 choices[19][0] = "Un curso sobre el tema";
 choices[19][1] = "Las direcciones m&aacute;s relevantes respecto al tema";
 choices[19][2] = "Las preguntas m&aacute;s frecuentes que se hacen";
 choices[19][3] = "Un descripci&oacute;n del contenido del nodo en cuesi&oacute;n";
 answers[19] = choices[19][2];
 units[19] = "112";
 comments[19] = "Id Pregunta: 3524. ";


//  Id pregunta: 3543 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En notaci&oacute;n Kendall A/B/X/Y/Z: ";
 choices[20]= new Array();
 choices[20][0] = "B especifica la distribuci&oacute;n del tiempo de servicio.";
 choices[20][1] = "A especifica la distribuci&oacute;n de las llegadas al sistema.";
 choices[20][2] = "Las dos anteriores son ciertas.";
 choices[20][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[20] = choices[20][2];
 units[20] = "";
 comments[20] = "Id Pregunta: 3543. Kendall T&ordm; Colas";


//  Id pregunta: 3596 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  La direcci&oacute;n IP 192.168.42.127:";
 choices[21]= new Array();
 choices[21][0] = "Es una direcci&oacute;n de la red Internet";
 choices[21][1] = "Es una direcci&oacute;n de la red Internet, clase C";
 choices[21][2] = "Es una direcci&oacute;n de una red IP privada";
 choices[21][3] = "Es una direcci&oacute;n de la red Internet, clase B";
 answers[21] = choices[21][2];
 units[21] = "100";
 comments[21] = "Id Pregunta: 3596. NULL";


//  Id pregunta: 3658 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Un conjunto de redes administradas por una entidad com&uacute;n y que comparten una estrategia com&uacute;n de encaminamiento se conoce en la terminolog&iacute;a ISO como:";
 choices[22]= new Array();
 choices[22][0] = "Una LAN (RAL)";
 choices[22][1] = "Un &aacute;rea";
 choices[22][2] = "Un sistema aut&oacute;nomo";
 choices[22][3] = "Un dominio";
 answers[22] = choices[22][2];
 units[22] = "102";
 comments[22] = "Id Pregunta: 3658. ";


//  Id pregunta: 3668 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Una centralita telef&oacute;nica digital privada para RDSI, o un &ldquo;bridge&rdquo; &oacute; &ldquo;router&rdquo; de red de &aacute;rea local con puerto RDSI es un dispositivo:";
 choices[23]= new Array();
 choices[23][0] = "ET1";
 choices[23][1] = "ET2";
 choices[23][2] = "TR2";
 choices[23][3] = "AT";
 answers[23] = choices[23][2];
 units[23] = "103";
 comments[23] = "Id Pregunta: 3668. ";


//  Id pregunta: 3676 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Una red de conmutaci&oacute;n de paquetes en la que cada paquete viaja por una ruta diferente se dice que opera en modo:";
 choices[24]= new Array();
 choices[24][0] = "Circuito virtual permanente";
 choices[24][1] = "Circuito virtual conmutado";
 choices[24][2] = "Datagrama";
 choices[24][3] = "Multiplexaci&oacute;n estad&iacute;stica";
 answers[24] = choices[24][2];
 units[24] = "101";
 comments[24] = "Id Pregunta: 3676. ";


//  Id pregunta: 3701 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Las funciones del modelo OSI siguientes: criptograf&iacute;a, gesti&oacute;n de conversaciones, detecci&oacute;n de errores extremo a extremo, validaciones de tensiones el&eacute;ctricas, garantizar la conexi&oacute;n punto a punto; corresponden, por este orden, a los niveles OSI:";
 choices[25]= new Array();
 choices[25][0] = "Presentaci&oacute;n, aplicaci&oacute;n, transporte, f&iacute;sico, red";
 choices[25][1] = "Presentaci&oacute;n, sesi&oacute;n, transporte, f&iacute;sico, enlace";
 choices[25][2] = "Aplicaci&oacute;n, sesi&oacute;n, transporte, f&iacute;sico, red";
 choices[25][3] = "Aplicaci&oacute;n, sesi&oacute;n, red, enlace, transporte";
 answers[25] = choices[25][1];
 units[25] = "100";
 comments[25] = "Id Pregunta: 3701. NULL";


//  Id pregunta: 3725 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Los mensajes de respuesta HTTP de c&oacute;digo 5xx se corresponden con:";
 choices[26]= new Array();
 choices[26][0] = "error en el cliente";
 choices[26][1] = "redirecci&oacute;n por cambio de ubicaci&oacute;n del objeto pedido";
 choices[26][2] = "error en el servidor";
 choices[26][3] = "petici&oacute;n con &eacute;xito";
 answers[26] = choices[26][2];
 units[26] = "112";
 comments[26] = "Id Pregunta: 3725. ";


//  Id pregunta: 3730 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Los niveles superiores del modelo OSI se agrupan dentro del bloque de aplicaci&oacute;n mientras que los niveles bajos se agrupan en el:";
 choices[27]= new Array();
 choices[27][0] = "Bloque de compatibilidad de software";
 choices[27][1] = "Bloque de encaminamiento del tr&aacute;fico";
 choices[27][2] = "Bloque de transmisi&oacute;n";
 choices[27][3] = "Bloque de multiplexaci&oacute;n y detecci&oacute;n de errores";
 answers[27] = choices[27][2];
 units[27] = "100";
 comments[27] = "Id Pregunta: 3730. NULL";


//  Id pregunta: 3740 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Los sat&eacute;lites de comunicaciones utilizan frecuencias elevadas (bandas Ku y K )porque:";
 choices[28]= new Array();
 choices[28][0] = "Las ondas de mayor frecuencia permiten un mayor alcance y atravesar obst&aacute;culos";
 choices[28][1] = "Las frecuencias altas permiten enviar mayor cantidad de informaci&oacute;n por segundo";
 choices[28][2] = "En estas bandas la atenuaci&oacute;n es menor";
 choices[28][3] = "Aunque la atenuaci&oacute;n es menor en estas frecuencias su alcance es mayor";
 answers[28] = choices[28][1];
 units[28] = "108";
 comments[28] = "Id Pregunta: 3740. ";


//  Id pregunta: 3775 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Por B.E.R. entendemos:";
 choices[29]= new Array();
 choices[29][0] = "Basic Encoding Rules, reglas de codificaci&oacute;n b&aacute;sicas usadas en la definici&oacute;n de datos mediante ASN.1";
 choices[29][1] = "Binary Error Rate, tasa de error binaria que define la adecuaci&oacute;n de los canales de transmisi&oacute;n";
 choices[29][2] = "Las 2 respuestas anteriores son correctas";
 choices[29][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[29] = choices[29][2];
 units[29] = "101";
 comments[29] = "Id Pregunta: 3775. ";


//  Id pregunta: 3808 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Seg&uacute;n la norma X.400, &iquest;de cu&aacute;ntas partes consta un mensaje interpersonal (IM)?:";
 choices[30]= new Array();
 choices[30][0] = "Una";
 choices[30][1] = "Dos";
 choices[30][2] = "Tres";
 choices[30][3] = "Tantas como tipos de informaci&oacute;n contenga el mensaje";
 answers[30] = choices[30][1];
 units[30] = "106";
 comments[30] = "Id Pregunta: 3808. ";


//  Id pregunta: 3822 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Se&ntilde;ale la afirmaci&oacute;n verdadera en un sistema de transmisi&oacute;n de datos:";
 choices[31]= new Array();
 choices[31][0] = "El equipo terminal de datos dialoga con la l&iacute;nea de transmisi&oacute;n para emitir la se&ntilde;al";
 choices[31][1] = "El equipo terminal del circuito de datos es el origen o destino final de la comunicaci&oacute;n";
 choices[31][2] = "Un m&oacute;dem es un ejemplo de un equipo terminal de datos";
 choices[31][3] = "El equipo terminal de datos dialoga con el equipo terminal del circuito de datos pas&aacute;ndose la informaci&oacute;n que se quiere transmitir/recibir";
 answers[31] = choices[31][3];
 units[31] = "101";
 comments[31] = "Id Pregunta: 3822. ";


//  Id pregunta: 3848 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Uno de los siguientes no es un inconveniente de la telefon&iacute;a sobre IP. Indicar cu&aacute;l:";
 choices[32]= new Array();
 choices[32][0] = "degradaci&oacute;n de la calidad";
 choices[32][1] = "supresi&oacute;n de silencios";
 choices[32][2] = "falta actual de infraestructuras para soportar todo el tr&aacute;fico previsto";
 choices[32][3] = "problemas de ecos con los retardos";
 answers[32] = choices[32][1];
 units[32] = "108";
 comments[32] = "Id Pregunta: 3848. ";


//  Id pregunta: 3914 AÃ±o de creación de pregunta: 2004-01-01
 questions[33]= "34)  En un entorno de red, un pinchado de l&iacute;nea puede causar:";
 choices[33]= new Array();
 choices[33][0] = "Uso excesivo de CPU";
 choices[33][1] = "Acceso no autorizado a datos";
 choices[33][2] = "a) y b)";
 choices[33][3] = "Ninguna de las anteriores";
 answers[33] = choices[33][1];
 units[33] = "111";
 comments[33] = "Id Pregunta: 3914. NULL";


//  Id pregunta: 3945 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  El lenguaje comunmente utilizado para desarrollo de aplicaciones WAP es:";
 choices[34]= new Array();
 choices[34][0] = "WML";
 choices[34][1] = "C++";
 choices[34][2] = "Visual Basic";
 choices[34][3] = "Ninguno de los anteriores";
 answers[34] = choices[34][0];
 units[34] = "100";
 comments[34] = "Id Pregunta: 3945. ";


//  Id pregunta: 3999 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l fue el servicio para el que originalmente fueron dise&ntilde;adas las redes de cable?";
 choices[35]= new Array();
 choices[35][0] = "Televisi&oacute;n";
 choices[35][1] = "Telefon&iacute;a";
 choices[35][2] = "Transporte de datos";
 choices[35][3] = "Conexi&oacute;n a Internet";
 answers[35] = choices[35][0];
 units[35] = "105";
 comments[35] = "Id Pregunta: 3999. ";


//  Id pregunta: 4022 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  La arquitectura del protocolo de aplicaciones inal&aacute;mbricas WAP consta de las siguientes capas:";
 choices[36]= new Array();
 choices[36][0] = "Aplicaci&oacute;n, presentaci&oacute;n, sesi&oacute;n, transporte y f&iacute;sica.";
 choices[36][1] = "Aplicaci&oacute;n, sesi&oacute;n, transacci&oacute;n, seguridad, transporte y f&iacute;sica.";
 choices[36][2] = "Aplicaci&oacute;n, presentaci&oacute;n, sesi&oacute;n, transacci&oacute;n, transporte y f&iacute;sica.";
 choices[36][3] = "Aplicaci&oacute;n, sesi&oacute;n, seguridad, transporte, enlace y f&iacute;sica.";
 answers[36] = choices[36][1];
 units[36] = "108";
 comments[36] = "Id Pregunta: 4022. ";


//  Id pregunta: 4087 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Cual es el equivalente en .Net de los JSP de J2EE";
 choices[37]= new Array();
 choices[37][0] = "ASP.Net";
 choices[37][1] = "ASP.com";
 choices[37][2] = "ASP.org";
 choices[37][3] = "Ninguna de las anteriores";
 answers[37] = choices[37][0];
 units[37] = "115";
 comments[37] = "Id Pregunta: 4087. ";


//  Id pregunta: 4102 AÃ±o de creación de pregunta: 2004-01-01
 questions[38]= "39)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[38]= new Array();
 choices[38][0] = "El protocolo TCP/IP nace en la Universidad de Berkeley que lo incluy&oacute; en su UNIX.";
 choices[38][1] = "El protocolo TCP/IP fue creado por IBM que lo incluy&oacute; en su sistema operativo propietario y se extendi&oacute; posteriormente en el mercado.";
 choices[38][2] = "El protocolo TCP/IP nace con el objetivo de interconectar ordenadores de distintas clases.";
 choices[38][3] = "El protocolo TCP/IP nace con el objetivo de comunicar redes diferentes";
 answers[38] = choices[38][3];
 units[38] = "112";
 comments[38] = "Id Pregunta: 4102. ";


//  Id pregunta: 4173 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Si quiero autenticar a un usuario";
 choices[39]= new Array();
 choices[39][0] = "Le pido su nombre";
 choices[39][1] = "Le pido su DNI";
 choices[39][2] = "Le pido su nombre y lo compruebo en una lista";
 choices[39][3] = "todas las anteriores";
 answers[39] = choices[39][1];
 units[39] = "111";
 comments[39] = "Id Pregunta: 4173. NULL";


//  Id pregunta: 4221 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Indique cu&aacute;l de las siguientes afirmaciones sobre los lenguajes RDF y OWL empleados en la web sem&aacute;ntica es cierta";
 choices[40]= new Array();
 choices[40][0] = "La codificaci&oacute;n de un grafo RDF en forma de sentencias RDF debe ser siempre un documento XML bien formado";
 choices[40][1] = "La codificaci&oacute;n de un grafo RDF en forma de sentencias RDF debe ser siempre un documento XML v&aacute;lido";
 choices[40][2] = "En OWL DL, una clase no puede ser instancia de otra clase";
 choices[40][3] = "OWL Full ofrece garant&iacute;as computacionales de completitud";
 answers[40] = choices[40][2];
 units[40] = "69";
 comments[40] = "Id Pregunta: 4221. NULL";


//  Id pregunta: 4340 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l es el puerto est&aacute;ndar utilizado por el protocolo POP3?:";
 choices[41]= new Array();
 choices[41][0] = "21.";
 choices[41][1] = "23.";
 choices[41][2] = "25";
 choices[41][3] = "110";
 answers[41] = choices[41][3];
 units[41] = "112";
 comments[41] = "Id Pregunta: 4340. ";


//  Id pregunta: 4354 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  Para evitar las colisiones de paquetes, las redes inal&aacute;mbricas 802.11 WiFi pueden utilizar los siguientes mecanismos: I) CSMA/CA+ACK Carrier Sense Multiple Access with Collision Avoidance + Acknowledge). II) RTS/CTS (Request to Send/Clear to Send). III) OFDM (Orthogonal Frecuency Division Multiplexing).";
 choices[42]= new Array();
 choices[42][0] = "I y II.";
 choices[42][1] = "II y III.";
 choices[42][2] = "I y III.";
 choices[42][3] = "I, II y III.";
 answers[42] = choices[42][0];
 units[42] = "107";
 comments[42] = "Id Pregunta: 4354. NULL";


//  Id pregunta: 4432 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes no es un posible mecanismo de transmisi&oacute;n de voz sobre paquetes de datos?";
 choices[43]= new Array();
 choices[43][0] = "Voz sobre IP (VoIP).";
 choices[43][1] = "Voz sobre TCP (VoTCP).";
 choices[43][2] = "Voz sobre celdas (VoATM).";
 choices[43][3] = "Voz sobre tramas (VoFR).";
 answers[43] = choices[43][1];
 units[43] = "100";
 comments[43] = "Id Pregunta: 4432. NULL";


//  Id pregunta: 4653 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  En Frame Relay La CIR es:";
 choices[44]= new Array();
 choices[44][0] = "la m&aacute;xima velocidad de datos del canal";
 choices[44][1] = "La tasa de informaci&oacute;n contratada";
 choices[44][2] = "La m&aacute;xima cantidad de datos que la red conviene en transmitir en un intervalo de tiempo T";
 choices[44][3] = "es La m&aacute;xima cantidad de datos en exceso que la red intenta transmitir en un intervalo de tiempo T";
 answers[44] = choices[44][1];
 units[44] = "109";
 comments[44] = "Id Pregunta: 4653. ";


//  Id pregunta: 4689 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  La diferencia entre la fibra &oacute;ptica monomodo y multimodo radica, principalmente, en";
 choices[45]= new Array();
 choices[45][0] = "las frecuencias usadas";
 choices[45][1] = "los adaptadores usados";
 choices[45][2] = " la forma en que el haz se refleja dentro del n&uacute;cleo de la fibra";
 choices[45][3] = "Ninguna de las anteriores";
 answers[45] = choices[45][2];
 units[45] = "99";
 comments[45] = "Id Pregunta: 4689. Examen 2006 JCYL";


//  Id pregunta: 4730 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)   Cual de las siguientes tecnolog&iacute;as no sirve para la implementaci&oacute;n de redes privadas virtuales:";
 choices[46]= new Array();
 choices[46][0] = "SSH";
 choices[46][1] = "SLIP";
 choices[46][2] = "IPSEC";
 choices[46][3] = "SSL/TLS";
 answers[46] = choices[46][1];
 units[46] = "100";
 comments[46] = "Id Pregunta: 4730. Examen 2006 JCYL";


//  Id pregunta: 4845 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  La Ley Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, define el Servicio Universal en su T&iacute;tulo III, como el conjunto definido de servicios cuya prestaci&oacute;n se garantiza para todos los usuarios finales con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible. En relaci&oacute;n a suprestaci&oacute;n, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[47]= new Array();
 choices[47][0] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia podr&aacute; designar uno o m&aacute;s operadores diferentes para la prestaci&oacute;n de los diversos elementos del servicio universal, de manera que quede cubierta la totalidad delterritorio nacional";
 choices[47][1] = "Corresponde su prestaci&oacute;n, en todo caso, al operador u operadores con poder significativo en aquellos mercados considerados de referencia en relaci&oacute;n al servicio considerado";
 choices[47][2] = "El sistema de designaci&oacute;n de operadores encargados de garantizar la prestaci&oacute;n de los servicios, prestaciones y ofertas del servicio universal se establecer&aacute; mediante real decreto, con sujeci&oacute;n a los principios de eficiencia, objetividad, transparencia y no discriminaci&oacute;n sin excluir a priori la designaci&oacute;n de ninguna empresa. En todo caso, contemplar&aacute; un mecanismo de licitaci&oacute;n p&uacute;blica para dichos servicios, prestaciones y ofertas.";
 choices[47][3] = "La primera designaci&oacute;n de operador responsable de la prestaci&oacute;n del servicio universal se realiz&oacute; la citadaLey, y recay&oacute; en Telef&oacute;nica de Espa&ntilde;a, hasta el 31 de diciembre de 2005, en su condici&oacute;n de operadordominante en la prestaci&oacute;n del servicio telef&oacute;nico fijo";
 answers[47] = choices[47][2];
 units[47] = "110";
 comments[47] = "Id Pregunta: 4845. ";


//  Id pregunta: 5288 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  En una comparativa de UMTS frente a GSM, no es cierto que:";
 choices[48]= new Array();
 choices[48][0] = "UMTS utiliza frecuencias m&aacute;s elevadas";
 choices[48][1] = "En UMTS se producen menores p&eacute;rdidas de propagaci&oacute;n";
 choices[48][2] = "En UMTS el tama&ntilde;o de las c&eacute;lulas puede ser inferior";
 choices[48][3] = "La capacidad de una portadora de W-CDMA es mayor que la de una portadora GSM";
 answers[48] = choices[48][1];
 units[48] = "108";
 comments[48] = "Id Pregunta: 5288. ";


//  Id pregunta: 5567 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.18 del IEEE?";
 choices[49]= new Array();
 choices[49][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[49][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[49][2] = "Resilient Packet Ring";
 choices[49][3] = "Traspaso entre redes";
 answers[49] = choices[49][0];
 units[49] = "101";
 comments[49] = "Id Pregunta: 5567. ";


//  Id pregunta: 5604 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Los sistemas en el segunado nivel troncal trabajan en ";
 choices[50]= new Array();
 choices[50][0] = "La segunda ventana &oacute;ptica (1330nm). Es en estos nodos donde se realiza la inserci&oacute;n de programaci&oacute;n local resultando m&aacute;s econ&oacute;mico que se lleve a cabo a nivel el&eacute;ctrico.";
 choices[50][1] = "La tercera ventana &oacute;ptica (1550nm) con la ventaja de tener un mayor alcance.";
 choices[50][2] = "La segunda ventana &oacute;ptica (1330nm), ya que en dicha ventana existen amplificadores &oacute;pticos comerciales de alto rendimiento ";
 choices[50][3] = "La tercera ventana &oacute;ptica (1550nm) siendo necesario hacer una doble conversi&oacute;n (opto-el&eacute;ctrica y electro-&oacute;ptica)";
 answers[50] = choices[50][0];
 units[50] = "105";
 comments[50] = "Id Pregunta: 5604. ";


//  Id pregunta: 5923 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  En el conjunto de protocolos TCP/IP, &iquest;cu&aacute;ntos bits se reservan para identificar los n&uacute;meros de puerto en las cabeceras de control TCP y UDP?";
 choices[51]= new Array();
 choices[51][0] = "16";
 choices[51][1] = "24";
 choices[51][2] = "32";
 choices[51][3] = "64";
 answers[51] = choices[51][0];
 units[51] = "100";
 comments[51] = "Id Pregunta: 5923. MAP 2008 A1";


//  Id pregunta: 5940 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes son las siglas de una infraestructura de virtualizaci&oacute;n del kernel de Linux?";
 choices[52]= new Array();
 choices[52][0] = "VLM";
 choices[52][1] = "LVM";
 choices[52][2] = "VKM";
 choices[52][3] = "KVM";
 answers[52] = choices[52][3];
 units[52] = "119";
 comments[52] = "Id Pregunta: 5940. ";


//  Id pregunta: 5941 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  Respecto a la virtualizaci&oacute;n, se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[53]= new Array();
 choices[53][0] = "La virtualizaci&oacute;n se utilizaba en el entorno de los mainframes antes de que se popularizara sobre arquitecturas como ix86 &oacute; amd64";
 choices[53][1] = "Una de las virtudes de la virtualizaci&oacute;n es su bajo requerimiento de memoria RAM";
 choices[53][2] = "El ahorro de energ&iacute;a es una de las razones que impulsa el uso de la virtualizaci&oacute;n en entornos de servidor";
 choices[53][3] = "Xen es una herramienta de virtualizaci&oacute;n de software libre que naci&oacute; en el departamento de computaci&oacute;n de la Universidad de Cambridge";
 answers[53] = choices[53][1];
 units[53] = "119";
 comments[53] = "Id Pregunta: 5941. ";


//  Id pregunta: 5989 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Un servidor de telnet permite:";
 choices[54]= new Array();
 choices[54][0] = "A los usuarios entrar en otro ordenador y llevar a cabo tareas como si estuviesen trabajando en el ordenador remoto.";
 choices[54][1] = "Intercambiar informaci&oacute;n ofreciendo capacidades de discusi&oacute;n en tiempo real.";
 choices[54][2] = "Gestionar listas de correo, ya sea para env&iacute;o masivo o para gestionar foros de discusi&oacute;n.";
 choices[54][3] = "Distribuir contenido multimedia a las aplicaciones cliente.";
 answers[54] = choices[54][0];
 units[54] = "112";
 comments[54] = "Id Pregunta: 5989. TIC A 2009";


//  Id pregunta: 6158 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Indique la afirmaci&oacute;n correcta sobre los diferentes codecs de audio y video en videoconferencia H.323";
 choices[55]= new Array();
 choices[55][0] = "G711 y G722 son codecs de audio mientras que H261 y H263 son codecs  de video";
 choices[55][1] = "G711 y G722 son codecs de video mientras que H261 y H263 son codecs  de audio";
 choices[55][2] = "G711 y H261 son codecs de audio mientras que G722 y H263 son codecs  de video";
 choices[55][3] = "G711 y H261 son codecs de video mientras que G722 y H263 son codecs  de audio";
 answers[55] = choices[55][0];
 units[55] = "117";
 comments[55] = "Id Pregunta: 6158. ";


//  Id pregunta: 6163 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Con respecto al cifrado de los datos en videoconferencia:";
 choices[56]= new Array();
 choices[56][0] = "En H.320 sobre RDSI se desarrollaron los est&aacute;ndares H.233 y H.234.";
 choices[56][1] = "Para las videoconferencias basadas en H.323, se desarrollaron los est&aacute;ndares  H.235.";
 choices[56][2] = "Los sistemas basados en SIP usan SRTP.";
 choices[56][3] = "Todas las anteriores son correctas.";
 answers[56] = choices[56][3];
 units[56] = "117";
 comments[56] = "Id Pregunta: 6163. ";


//  Id pregunta: 6236 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;C&oacute;mo se denominan las interfaces de servicio de la implementaci&oacute;n del servicio de directorio de Microsoft en una red distribuida de computadores?";
 choices[57]= new Array();
 choices[57][0] = "ADSI";
 choices[57][1] = "LDAP";
 choices[57][2] = "AD";
 choices[57][3] = "ADIS";
 answers[57] = choices[57][0];
 units[57] = "115";
 comments[57] = "Id Pregunta: 6236. ";


//  Id pregunta: 6342 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes servicios o aplicaciones no se asocia a la Web 2.0?";
 choices[58]= new Array();
 choices[58][0] = "Facebook";
 choices[58][1] = "Wikipedia";
 choices[58][2] = "Flickr";
 choices[58][3] = "Geocities";
 answers[58] = choices[58][3];
 units[58] = "120";
 comments[58] = "Id Pregunta: 6342. NULL";


//  Id pregunta: 6492 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Para los servicios de telefon&iacute;a m&oacute;vil, el modo de propagaci&oacute;n de la se&ntilde;al radioel&eacute;ctrica es:";
 choices[59]= new Array();
 choices[59][0] = "Onda de superficie";
 choices[59][1] = "Onda ionosf&eacute;rica";
 choices[59][2] = "Onda espacial";
 choices[59][3] = "Onda de dispersi&oacute;n troposf&eacute;rica";
 answers[59] = choices[59][2];
 units[59] = "108";
 comments[59] = "Id Pregunta: 6492. Castilla La Mancha 2009";


//  Id pregunta: 6565 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  La velocidad de transmisi&oacute;n en GPRS queda limitada por:";
 choices[60]= new Array();
 choices[60][0] = "El n&uacute;mero de timeslots que pueda ofrecer la c&eacute;lula donde se encuentra el terminal";
 choices[60][1] = "De la capacidad m&aacute;xima del dispositivo m&oacute;vil";
 choices[60][2] = "Del esquema de codificaci&oacute;n";
 choices[60][3] = "Todas las respuestas anteriores son ciertas";
 answers[60] = choices[60][3];
 units[60] = "108";
 comments[60] = "Id Pregunta: 6565. NULL";


//  Id pregunta: 7254 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  MPLS (Multiprotocol Label Switching) opera:";
 choices[61]= new Array();
 choices[61][0] = "Sobre el protocolo IP, y por debajo del protocolo TCP";
 choices[61][1] = "Entre la capa de enlace de datos y la capa de red del modelo OSI";
 choices[61][2] = "Entre el protocolo TCP y los protocolos del nivel de Aplicaci&oacute;n";
 choices[61][3] = "Entre la capa del nivel de red y la capa de transporte del modelo TCP/IP";
 answers[61] = choices[61][1];
 units[61] = "100";
 comments[61] = "Id Pregunta: 7254. Examen TIC B 2009";


//  Id pregunta: 7267 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  En el &aacute;mbito del Frame Relay, el CIR se refiere";
 choices[62]= new Array();
 choices[62][0] = "Al ratio de ocupaci&oacute;n m&aacute;xima del canal";
 choices[62][1] = "A la velocidad m&iacute;nima comprometida";
 choices[62][2] = "Al porcentaje m&aacute;ximo de tramas err&oacute;neas garantizado";
 choices[62][3] = "A la velocidad m&aacute;xima asegurada";
 answers[62] = choices[62][1];
 units[62] = "109";
 comments[62] = "Id Pregunta: 7267. Examen TIC B 2009";


//  Id pregunta: 7270 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Los cortafuegos de filtrado de paquetes:";
 choices[63]= new Array();
 choices[63][0] = "Funcionan a nivel de red";
 choices[63][1] = "Funcionan a a nivel de aplicaci&oacute;n";
 choices[63][2] = "Funcionan a nivel de enlace";
 choices[63][3] = "Funcionan a nivel de sesi&oacute;n";
 answers[63] = choices[63][0];
 units[63] = "111";
 comments[63] = "Id Pregunta: 7270. Examen TIC B 2009";


//  Id pregunta: 7278 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  VMWare es un software de virtualiaci&oacute;n de ";
 choices[64]= new Array();
 choices[64][0] = "Sistema operativo";
 choices[64][1] = "Red";
 choices[64][2] = "Paravirtualizaci&oacute;n";
 choices[64][3] = "Hardware";
 answers[64] = choices[64][3];
 units[64] = "119";
 comments[64] = "Id Pregunta: 7278. NULL";


//  Id pregunta: 7281 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Los dos enfoques m&aacute;s habituales de la virtuailzaci&oacute;n de servidores o estaciones de trabajo son:";
 choices[65]= new Array();
 choices[65][0] = "Hospedada y mediante hipervisor (bare metal)";
 choices[65][1] = "Acoplada y mediante hipervisor (bare metal)";
 choices[65][2] = "Paralela y mediante hipervisor (bare metal)";
 choices[65][3] = "Acoplada y mediante CPM (Cross Platform Manager)";
 answers[65] = choices[65][0];
 units[65] = "119";
 comments[65] = "Id Pregunta: 7281. Examen TIC B 2009";


//  Id pregunta: 8164 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  En el marco de los servicios de Directorio, se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[66]= new Array();
 choices[66][0] = "El est&aacute;ndar X.500 define cuatro clases de objetos que pueden ser representados en el directorio y que se codifican utilizando la notaci&oacute;n ASN.1.";
 choices[66][1] = "El protocolo LDAP, para el acceso a directorios X.500, es una evoluci&oacute;n de DAP, que soporta OSI y TCP/IP.";
 choices[66][2] = "En su versi&oacute;n 2, LDAP incorpora la posibilidad de acceso an&oacute;nimo y la de acceso cifrado.";
 choices[66][3] = "La operaci&oacute;n de a&ntilde;adir una entrada a un directorio, s&oacute;lo requiere que el nombre distinguido (DN) de la entrada a a&ntilde;adir,no exista previamente en &eacute;l.";
 answers[66] = choices[66][0];
 units[66] = "106";
 comments[66] = "Id Pregunta: 8164. Examen TIC A1 2010";


//  Id pregunta: 8316 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  En el &aacute;mbito de las tecnolog&iacute;as de comunicaciones m&oacute;viles, el orden cronol&oacute;gico de protocolos, de mayor a menor antig&uuml;edad es:";
 choices[67]= new Array();
 choices[67][0] = "GSM, UMTS, HSUPA, HSDPA.";
 choices[67][1] = "GSM, UMTS, HSDPA, HSUPA.";
 choices[67][2] = "GSM, HSUPA, HSDPA, UMTS. ";
 choices[67][3] = "UMTS, GSM, HSDPA, HSUPA.";
 answers[67] = choices[67][1];
 units[67] = "108";
 comments[67] = "Id Pregunta: 8316. Examen TIC A2 2010";


//  Id pregunta: 8533 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Qu&eacute; m&eacute;todo de codificaci&oacute;n de la voz NO realiza compresi&oacute;n?";
 choices[68]= new Array();
 choices[68][0] = "LD-CELP (Low-Delay Code-Excited Linear Prediction).";
 choices[68][1] = "CS-ACELP (Conjugate-Structured Algebraic Code-Excited Linear Prediction)";
 choices[68][2] = "PCM (Pulse-Code Modulation).";
 choices[68][3] = "ADPCM (Adaptative Differential Pulse Code Modulation)";
 answers[68] = choices[68][2];
 units[68] = "117";
 comments[68] = "Id Pregunta: 8533. Examen TIC A2 2010 interna";


//  Id pregunta: 8655 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;En qu&eacute; recomendaci&oacute;n del ITU-T se especifican las caracter&iacute;sticas de las fibras &oacute;pticas monomodo &quot;non-zero dispersion-shifted&quot; (NZDSF) habitualmente utilizadas en DWDM?:";
 choices[69]= new Array();
 choices[69][0] = "G.653";
 choices[69][1] = "G.654";
 choices[69][2] = "G.655";
 choices[69][3] = "G.656";
 answers[69] = choices[69][2];
 units[69] = "99";
 comments[69] = "Id Pregunta: 8655. Examen UPM A2 2011";


//  Id pregunta: 8678 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Es posible hacer convivir varios protocolos incompatibles entre s&iacute; sobre una misma red?";
 choices[70]= new Array();
 choices[70][0] = "S&iacute;, utilizando tunneling o encapsulado de protocolos";
 choices[70][1] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia OSI";
 choices[70][2] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia TCP/IP";
 choices[70][3] = "No";
 answers[70] = choices[70][0];
 units[70] = "102";
 comments[70] = "Id Pregunta: 8678. Examen UPM A2 2011";


//  Id pregunta: 8876 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Respecto a AJAX es falso que:";
 choices[71]= new Array();
 choices[71][0] = "Reduce el volumen de informaci&oacute;n a intercambiar entre el cliente y el servidor frente al empleo del refresco de p&aacute;gina completa.";
 choices[71][1] = "No se puede emplear para desarrollar aplicaciones RIA.";
 choices[71][2] = "Existen m&uacute;ltiples liber&iacute;as para simplificar el desarrollo con AJAX.";
 choices[71][3] = "Son las siglas de Asynchronous JavaScript And XML.";
 answers[71] = choices[71][1];
 units[71] = "114";
 comments[71] = "Id Pregunta: 8876. Examen UPM A2 2011";


//  Id pregunta: 8924 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Las siglas SSL y TLS se refieren a:";
 choices[72]= new Array();
 choices[72][0] = "Diferentes estados l&oacute;gicos del microprocesador.";
 choices[72][1] = "Protocolos criptogr&aacute;ficos para establecer conexiones seguras a trav&eacute;s de una red.";
 choices[72][2] = "Sistemas de localizaci&oacute;n geod&eacute;sica para GPS.";
 choices[72][3] = "Diferentes tipos de memoria f&iacute;sica";
 answers[72] = choices[72][1];
 units[72] = "111";
 comments[72] = "Id Pregunta: 8924. Operador Ayto. Madrid 2010";


//  Id pregunta: 9044 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l es la capa del modelo OSI equivalente a Ethernet";
 choices[73]= new Array();
 choices[73][0] = "Capa F&iacute;sica de Datos";
 choices[73][1] = "Capa de Red";
 choices[73][2] = "Capa de Enlace de Datos";
 choices[73][3] = "Capa de Transporte";
 answers[73] = choices[73][2];
 units[73] = "100";
 comments[73] = "Id Pregunta: 9044. ";


//  Id pregunta: 9346 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Acerca de RDSI y sus diferentes servicios:";
 choices[74]= new Array();
 choices[74][0] = "Los servicios portadores soportan la comunicaci&oacute;n terminal a terminal";
 choices[74][1] = "Los teleservicios proporcionan capacidades adicionales para los servicios suplementearios y los servicios portadores.";
 choices[74][2] = "Los servicios suplementarios soportan la comunicaci&oacute;n terminal a terminal y controlan los procesos de comunicaci&oacute;n entre usuarios.";
 choices[74][3] = "Los teleservicios soportan la comunicaci&oacute;n terminal a terminal";
 answers[74] = choices[74][3];
 units[74] = "103";
 comments[74] = "Id Pregunta: 9346. Pag 9 temario ASTIC 2011";


//  Id pregunta: 9356 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;Cu&aacute;ntos terminales pueden ser usados simult&aacute;neamente en una RDSI con acceso b&aacute;sico?:";
 choices[75]= new Array();
 choices[75][0] = "S&oacute;lo 1 canal B puede estar ocupado en un momento determinado, pero puede encolar lo que entre por el otro.";
 choices[75][1] = "3, ya que cada canal s&oacute;lo puede ser utilizado por un terminal a la vez, y con la compresi&oacute;n adecuada todos los canales permiten una comunicaci&oacute;n vocal.";
 choices[75][2] = "1 por cada canal B mientras que el canal D puede ser compartido por varios terminales en modo paquete.";
 choices[75][3] = "Los 8 terminales que puede soportar el acceso b&aacute;sico.";
 answers[75] = choices[75][2];
 units[75] = "103";
 comments[75] = "Id Pregunta: 9356. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";


//  Id pregunta: 9383 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Se&ntilde;ale la respuesta incorrecta en relaci&oacute;n con 4G:";
 choices[76]= new Array();
 choices[76][0] = "Admite la utilizaci&oacute;n de antenas MIMO";
 choices[76][1] = "Para el servicio de voz utiliza el canal VOL, cuyo acceso se negocia previamente a trav&eacute;s del canal VOL-ALLOC";
 choices[76][2] = "Utiliza modulaciones adaptativas para el aprovechamiento &oacute;ptimo del canal.";
 choices[76][3] = "Utiliza multiplexaci&oacute;n estad&iacute;stica en el dominio de la frecuencia.";
 answers[76] = choices[76][1];
 units[76] = "108";
 comments[76] = "Id Pregunta: 9383. NULL";


//  Id pregunta: 9404 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Indique los factores que m&aacute;s intervienen en la calidad de la voz sobre IP";
 choices[77]= new Array();
 choices[77][0] = "La latencia y la variaci&oacute;n de latencia (Jitter) de la red de transmisi&oacute;n de paquetes.";
 choices[77][1] = "La calidad de los procesadores de se&ntilde;al (DSP) asociados al codec G.711.";
 choices[77][2] = "La utilizaci&oacute;n de SIP o H.323.";
 choices[77][3] = "Ninguna de las anteriores";
 answers[77] = choices[77][0];
 units[77] = "109";
 comments[77] = "Id Pregunta: 9404. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9425 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Si tuviese que fijar los l&iacute;mites de exposici&oacute;n en un nivel adecuado para la salud a la hora de instalar una antena, &iquest;Qu&eacute; normativa ser&iacute;a la de referencia?";
 choices[78]= new Array();
 choices[78][0] = "Real Decreto 1066/2001";
 choices[78][1] = "Ley 9/2014 General de Telecomunicaciones";
 choices[78][2] = "Ley 56/2007,de Medidas de Impulso de la Sociedad de la Informaci&oacute;n.";
 choices[78][3] = "Real Decreto 899/2009";
 answers[78] = choices[78][0];
 units[78] = "110";
 comments[78] = "Id Pregunta: 9425. ";


//  Id pregunta: 9432 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Las tasas en materia de telecomunicaciones tiene una serie de fines. Indique el falso:";
 choices[79]= new Array();
 choices[79][0] = "Cubrir los gastos administrativos que ocasione el trabajo de regulaci&oacute;n";
 choices[79][1] = "Cubrir los gastos que ocasionen la gesti&oacute;n, control y ejecuci&oacute;n del r&eacute;gimen establecido en la ley";
 choices[79][2] = "Cubrir los gastos relativos al fomento del despliegue de redes de telecomunicaci&oacute;n";
 choices[79][3] = "Cubrir los gastos de cooperaci&oacute;n internacional, armonizaci&oacute;n y normalizaci&oacute;n y el an&aacute;lisis de mercado";
 answers[79] = choices[79][2];
 units[79] = "110";
 comments[79] = "Id Pregunta: 9432. ";


//  Id pregunta: 9496 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto a JScript:";
 choices[80]= new Array();
 choices[80][0] = "Es una implementaci&oacute;n de Microsoft del est&aacute;ndar ECMAScript";
 choices[80][1] = "Es necesario declarar los tipos de datos";
 choices[80][2] = "Es sensible a las may&uacute;sculas y min&uacute;sculas para los nombres de funci&oacute;n";
 choices[80][3] = "Es un lenguaje interpretado y basado en objetos";
 answers[80] = choices[80][1];
 units[80] = "114";
 comments[80] = "Id Pregunta: 9496. NULL";


//  Id pregunta: 9861 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Indique la respuesta falsa:";
 choices[81]= new Array();
 choices[81][0] = "OAuth (Open Authorization) es un protocolo abierto que permite autorizaci&oacute;n segura de una API de modo est&aacute;ndar y simple para aplicaciones de escritorio, m&oacute;viles y web.";
 choices[81][1] = "OAuth y OpenID son protocolos id&eacute;nticos. ";
 choices[81][2] = "OpenID es un est&aacute;ndar de identificaci&oacute;n digital descentralizado, con el que un usuario puede identificarse en una p&aacute;gina web a trav&eacute;s de una URL o XRI.";
 choices[81][3] = "A diferencia de arquitecturas Single Sign-On, OpenId no especifica el mecanismo de autenticaci&oacute;n.";
 answers[81] = choices[81][1];
 units[81] = "118";
 comments[81] = "Id Pregunta: 9861. Oauth y OpenID son completamente diferentes. El resto de respuestas son ciertas.";


//  Id pregunta: 10041 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  El est&aacute;ndar ANSI/TIA-942 establece distintos niveles en relaci&oacute;n a ciertos requisitos de seguridad en los Centros de Proceso de Datos (CPD). &iquest;Cu&aacute;l es el nivel m&aacute;s exigente?a) Tier 5 b) Tier 4";
 choices[82]= new Array();
 choices[82][0] = "Tier 5 ";
 choices[82][1] = "Tier 4";
 choices[82][2] = "Tier 3 ";
 choices[82][3] = "Tier 0";
 answers[82] = choices[82][1];
 units[82] = "99";
 comments[82] = "Id Pregunta: 10041. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10064 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En MPLS, la asignaci&oacute;n de un paquete a un FEC (Forwarding Equivalence Class) tiene lugar:";
 choices[83]= new Array();
 choices[83][0] = "S&oacute;lo una vez, cuando el paquete entra en la red MPLS.";
 choices[83][1] = "Antes de entrar en la red MPLS, en el &uacute;ltimo router convencional conectado antes del primer nodo MPLS.";
 choices[83][2] = "Al iniciar una conexi&oacute;n de red, negociando el host de origen con el primer nodo MPLS el FEC a usar.";
 choices[83][3] = "Cuando el primer paquete abandona la red MPLS, y se ha podido descubrir la ruta por medios convencionales.";
 answers[83] = choices[83][0];
 units[83] = "100";
 comments[83] = "Id Pregunta: 10064. TIC A2, libre, examen 2013";


//  Id pregunta: 10107 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En el m&eacute;todo de acceso al medio CSMA-p, el emisor:";
 choices[84]= new Array();
 choices[84][0] = "Env&iacute;a datos en cuanto los tiene disponibles.";
 choices[84][1] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre";
 choices[84][2] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre con una probabilidad p";
 choices[84][3] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre con una probabilidad 1-p";
 answers[84] = choices[84][2];
 units[84] = "101";
 comments[84] = "Id Pregunta: 10107. ";


//  Id pregunta: 10205 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[85]= new Array();
 choices[85][0] = "Para el canal de subida utiliza la modulaci&oacute;n WCDMA y para el de bajada, OFDMA";
 choices[85][1] = "Corresponde a la release 8 del 3GPP (3rd Generation Partnership Project)";
 choices[85][2] = "Usa una nueva interfaz aire basada en OFDMA (Orthogonal Frequency Division Multiple Access)";
 choices[85][3] = "El ancho de banda de los canales es variable entre 1,25MHz y 20MHz";
 answers[85] = choices[85][0];
 units[85] = "108";
 comments[85] = "Id Pregunta: 10205. Para el canal de subida usa SC-FDMA (Single Carrier FDMA)";


//  Id pregunta: 10243 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Dentro del archivo struts-config existe el atributo &lt;exception&gt;, puedes se&ntilde;alar la respuesta correcta que explica la funci&oacute;n del elemento scope:";
 choices[86]= new Array();
 choices[86][0] = "El alcance del Objeto ActionError relativo al m&oacute;dulo o aplicaci&oacute;n web";
 choices[86][1] = "El contexto que se usa para acceder al objeto ActionError para esta Exception";
 choices[86][2] = "Resuelve el nombre del manejador de excepiones de la clase Java";
 choices[86][3] = "Hace referencia a la clase Java registrada para manejar estas excepciones";
 answers[86] = choices[86][1];
 units[86] = "116";
 comments[86] = "Id Pregunta: 10243. NULL";


//  Id pregunta: 10295 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l es el grupo de trabajo correspondiente al est&aacute;ndar WRAN (Wireless Regional Area Network)?:";
 choices[87]= new Array();
 choices[87][0] = "802.19";
 choices[87][1] = "802.20";
 choices[87][2] = "802.21";
 choices[87][3] = "802.22";
 answers[87] = choices[87][3];
 units[87] = "107";
 comments[87] = "Id Pregunta: 10295. TIC A2, libre, examen 2013";


//  Id pregunta: 10296 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  En redes de &aacute;rea local, &iquest;cu&aacute;l de los siguientes es un m&eacute;todo de acceso al medio compartido con escucha porcontienda?";
 choices[88]= new Array();
 choices[88][0] = "Paso de testigo en anillo.";
 choices[88][1] = "CSMA no persistente.";
 choices[88][2] = "ALOHA ranurado.";
 choices[88][3] = "Contenci&oacute;n.";
 answers[88] = choices[88][1];
 units[88] = "101";
 comments[88] = "Id Pregunta: 10296. TIC A2, libre, examen 2013";


//  Id pregunta: 10444 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas sobre las redes GPRS es FALSA?";
 choices[89]= new Array();
 choices[89][0] = "Puede alcanzar velocidades de hasta 236 kbps de descarga. ";
 choices[89][1] = "Son redes orientadas a conexi&oacute;n.";
 choices[89][2] = "Pueden ofrecer servicios de mensajer&iacute;a instant&aacute;nea.";
 choices[89][3] = "Ofrecen servicios de transmisi&oacute;n digital de datos.";
 answers[89] = choices[89][1];
 units[89] = "108";
 comments[89] = "Id Pregunta: 10444. Examen TIC A1 2013";


//  Id pregunta: 10504 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Cual es la impedancia de los cables definida en la ISO 11801 para las versiones de la norma posteriores a 2002?";
 choices[90]= new Array();
 choices[90][0] = "120 ?";
 choices[90][1] = "150 ?";
 choices[90][2] = "100 ?";
 choices[90][3] = "Todos los anteriores";
 answers[90] = choices[90][2];
 units[90] = "99";
 comments[90] = "Id Pregunta: 10504. A partir del 2002, solo se consideran validas las impedancias de 100 ?";


//  Id pregunta: 11228 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes pasos es incorrecto para desplegar un servlet en un servidor web?";
 choices[91]= new Array();
 choices[91][0] = "Indicando en el web.xml la URL a la que responder&aacute; y la clase que lo implementar&aacute;.";
 choices[91][1] = "Implementado la clase del servlet, que implementar&aacute; la interfaz de IhttpServlet.";
 choices[91][2] = "Implementado la clase del servlet, que heredar&aacute; de la clase abstracta HttpServlet.";
 choices[91][3] = "Copiar la clase compilada en el directorio del servidor WEB-INF\classes\.";
 answers[91] = choices[91][1];
 units[91] = "116";
 comments[91] = "Id Pregunta: 11228. ";


//  Id pregunta: 11331 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  De los servicios Java, indique la afirmaci&oacute;n que NO es correcta";
 choices[92]= new Array();
 choices[92][0] = "JPA ha reemplazado a los Entity beans, que desaparecieron en la versi&oacute;n 5 de Java";
 choices[92][1] = "JNI se utiliza para el acceso a directorios";
 choices[92][2] = "JAX-WS hace que la creaci&oacute;n de Web Services en Java sea m&aacute;s sencilla";
 choices[92][3] = "JAXP permite el acceso a ficheros XML";
 answers[92] = choices[92][1];
 units[92] = "116";
 comments[92] = "Id Pregunta: 11331. Es JNDI el que se corresponde con esa descripci&oacute;n";


//  Id pregunta: 11408 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  De acuerdo a la Ley 9/2014:";
 choices[93]= new Array();
 choices[93][0] = "La CNMC garantiza la conservaci&oacute;n del n&uacute;mero de abonado.";
 choices[93][1] = "El MINETUR garantiza la conservaci&oacute;n del n&uacute;mero de abonado.";
 choices[93][2] = "Los operadores garantizan la conservaci&oacute;n del n&uacute;mero de abonado.";
 choices[93][3] = "La SETSI garantiza la conservaci&oacute;n del n&uacute;mero de abonado.";
 answers[93] = choices[93][2];
 units[93] = "110";
 comments[93] = "Id Pregunta: 11408. ";


//  Id pregunta: 11453 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n la Ley 9/2014, la determinaci&oacute;n, control e inspecci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica tolerable corresponde a:";
 choices[94]= new Array();
 choices[94][0] = "CNMC.";
 choices[94][1] = "MINETUR.";
 choices[94][2] = "SETSI.";
 choices[94][3] = "Gobierno.";
 answers[94] = choices[94][3];
 units[94] = "110";
 comments[94] = "Id Pregunta: 11453. ";


//  Id pregunta: 11561 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  De los siguientes tipos de middlewares, &iquest;Cu&aacute;l de ellos permite de manera m&aacute;s sencilla la transformaci&oacute;n de mensajes, conversi&oacute;n de protocolos y enrutamiento de servicios, desde una perspectiva de red WAN?";
 choices[95]= new Array();
 choices[95][0] = "Estaci&oacute;n de Mensajer&iacute;a";
 choices[95][1] = "Motor de Integraci&oacute;n";
 choices[95][2] = "Cliente-Servidor";
 choices[95][3] = "ESB";
 answers[95] = choices[95][3];
 units[95] = "114";
 comments[95] = "Id Pregunta: 11561. NULL";


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


//  Id pregunta: 11578 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l es la velocidad, el ancho de banda y la banda de frecuencias en las que operan las especificaciones 80211.ac?";
 choices[97]= new Array();
 choices[97][0] = "11 Mbps, 22 Mhz, 2.4 Ghz";
 choices[97][1] = "54 Mbps, 20 Mhz, 2.4 Ghz";
 choices[97][2] = "160 Mbps, 80Mhz o 60 Mhz, 5Ghz";
 choices[97][3] = "108Mbps, 40Mhz, 2.4Ghz y 5Ghz";
 answers[97] = choices[97][2];
 units[97] = "107";
 comments[97] = "Id Pregunta: 11578. NULL";


//  Id pregunta: 11579 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  La velocidad y el ancho de banda en las celdas LTE es:";
 choices[98]= new Array();
 choices[98][0] = "Subida hasta 326Mbps y ancho de canal de 5Mhz";
 choices[98][1] = "Subida hasta 2Mbps y ancho de canal de 5Mhz";
 choices[98][2] = "Subida hasta 256Mbps y ancho de canal de 200Khz";
 choices[98][3] = "Subida hasta 1Gpbs y ancho de canal de 160Mhz";
 answers[98] = choices[98][0];
 units[98] = "107";
 comments[98] = "Id Pregunta: 11579. NULL";


//  Id pregunta: 11729 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Qu&eacute; dos algoritmos de cifrado se utilizan en IPsec VPN?";
 choices[99]= new Array();
 choices[99][0] = "3DES y AES";
 choices[99][1] = "AES y DH";
 choices[99][2] = "3DES y PSK";
 choices[99][3] = "IKE y PSK";
 answers[99] = choices[99][0];
 units[99] = "111";
 comments[99] = "Id Pregunta: 11729. NULL";


