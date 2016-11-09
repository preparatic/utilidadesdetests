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

//  Id pregunta: 3111 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;A qu&eacute; nivel de OSI es equivalente el protocolo IP (Internet Protocol)?:";
 choices[0]= new Array();
 choices[0][0] = "Enlace";
 choices[0][1] = "Red";
 choices[0][2] = "Transporte";
 choices[0][3] = "Comunicaci&oacute;n";
 answers[0] = choices[0][1];
 units[0] = "100";
 comments[0] = "Id Pregunta: 3111. NULL";


//  Id pregunta: 3145 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta para un sistema intermedio o encaminador (router) de una red IP?:";
 choices[1]= new Array();
 choices[1][0] = "Un encaminador o router no puede fragmentar un datagrama";
 choices[1][1] = "Puede fragmentar un datagrama si es necesario pero no puede reensamblar los fragmentos";
 choices[1][2] = "Puede tanto fragmentar un datagrama como reensamblar los fragmentos";
 choices[1][3] = "Solo puede reensamblar los paquetes TCP orientados a conexi&oacute;n";
 answers[1] = choices[1][2];
 units[1] = "102";
 comments[1] = "Id Pregunta: 3145. ";


//  Id pregunta: 3188 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Dentro del modelo de referencia OSI, &iquest;cu&aacute;l es el componente de los procesos de aplicaci&oacute;n que se encarga de ejecutar los protocolos de nivel de aplicaci&oacute;n, y de proporcionar los elementos de servicio del nivel de aplicaci&oacute;n?:";
 choices[2]= new Array();
 choices[2][0] = "La entidad de aplicaci&oacute;n";
 choices[2][1] = "Los CASEs (Common Aplication Service Elements)";
 choices[2][2] = "Los SASEs (Specific Aplication Service Elements)";
 choices[2][3] = "El stack de comunicaciones";
 answers[2] = choices[2][0];
 units[2] = "100";
 comments[2] = "Id Pregunta: 3188. NULL";


//  Id pregunta: 3290 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qu&eacute; es un puente (bridge) en el mundo de las comunicaciones?:";
 choices[3]= new Array();
 choices[3][0] = "Un equipo que enlaza varias redes a nivel 3 de OSI";
 choices[3][1] = "Un equipo que enlaza varias redes a nivel 4 de OSI";
 choices[3][2] = "Un equipo que enlaza varias redes a nivel 5 de OSI";
 choices[3][3] = "Nada de lo anterior  ";
 answers[3] = choices[3][3];
 units[3] = "102";
 comments[3] = "Id Pregunta: 3290. ";


//  Id pregunta: 3619 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  La norma FTAM, &iquest;en qu&eacute; nivel del est&aacute;ndar OSI se encuentra?:";
 choices[4]= new Array();
 choices[4][0] = "Nivel de red";
 choices[4][1] = "Nivel de transferencia de ficheros";
 choices[4][2] = "Nivel de transporte";
 choices[4][3] = "Nivel de aplicaci&oacute;n";
 answers[4] = choices[4][3];
 units[4] = "100";
 comments[4] = "Id Pregunta: 3619. NULL";


//  Id pregunta: 3654 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Un acceso RDSI primario consta de:";
 choices[5]= new Array();
 choices[5][0] = "2 canales B y un canal D";
 choices[5][1] = "2 canales B y ning&uacute;n canal D";
 choices[5][2] = "30 canales B y 1 canal D";
 choices[5][3] = "30 canales B y 2 canales D";
 answers[5] = choices[5][2];
 units[5] = "103";
 comments[5] = "Id Pregunta: 3654. ";


//  Id pregunta: 3660 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Un LED es:";
 choices[6]= new Array();
 choices[6][0] = "Un diodo emisor de luz, usado para generar luz a partir de energ&iacute;a el&eacute;ctrica, a menudo a modo de peque&ntilde;os pilotos de aviso";
 choices[6][1] = "Un tipo de vocoder que permite una generaci&oacute;n progresiva de la voz humana";
 choices[6][2] = "Un m&eacute;todo de gesti&oacute;n de proyectos espec&iacute;ficos de I+D con todas las particularidades que estos conllevan";
 choices[6][3] = "Nada de lo anterior";
 answers[6] = choices[6][0];
 units[6] = "99";
 comments[6] = "Id Pregunta: 3660. ";


//  Id pregunta: 3758 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Para conectar una intranet dispersa geogr&aacute;ficamente con aplicaciones cr&iacute;ticas, la mejor opci&oacute;n es:";
 choices[7]= new Array();
 choices[7][0] = "El acceso telef&oacute;nico conmutado";
 choices[7][1] = "Utilizar la t&eacute;cnica de Tunneling";
 choices[7][2] = "Utilizar l&iacute;neas privadas";
 choices[7][3] = "Utilizar Internet como mecanismo de interconexi&oacute;n de los equipos de la intranet";
 answers[7] = choices[7][1];
 units[7] = "113";
 comments[7] = "Id Pregunta: 3758. ";


//  Id pregunta: 3768 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Para una red de conmutaci&oacute;n de circuitos, &iquest;qu&eacute; tipo de encaminamiento no utilizar&iacute;a?:";
 choices[8]= new Array();
 choices[8][0] = "Encaminamiento fijo";
 choices[8][1] = "Encaminamiento aleatorio";
 choices[8][2] = "Encaminamiento adaptativo";
 choices[8][3] = "Encaminamiento por inundaci&oacute;n";
 answers[8] = choices[8][3];
 units[8] = "101";
 comments[8] = "Id Pregunta: 3768. ";


//  Id pregunta: 3961 AÃ±o de creación de pregunta: 2003-01-01
 questions[9]= "10)  Mediante qu&eacute; tecnolog&iacute;a se puede conectar un PC a sus perif&eacute;ricos de forma inal&aacute;mbrica";
 choices[9]= new Array();
 choices[9][0] = "IMODE";
 choices[9][1] = "OFDM";
 choices[9][2] = "BLUETOOTH";
 choices[9][3] = " WIFI";
 answers[9] = choices[9][2];
 units[9] = "100";
 comments[9] = "Id Pregunta: 3961. ";


//  Id pregunta: 3988 AÃ±o de creación de pregunta: 2006-01-01
 questions[10]= "11)  Sobre FDDI:";
 choices[10]= new Array();
 choices[10][0] = "Su est&aacute;ndar no est&aacute; recogido por la IEEE ni aceptado por ANSI";
 choices[10][1] = "Se conoce como X3T9.3";
 choices[10][2] = "Su equivalente en cobre es CDDI";
 choices[10][3] = "Todas son verdaderas";
 answers[10] = choices[10][2];
 units[10] = "101";
 comments[10] = "Id Pregunta: 3988. ";


//  Id pregunta: 4080 AÃ±o de creación de pregunta: 2006-01-01
 questions[11]= "12)  El teletrabajo por parte de un empleado de una empresa requiere un acceso";
 choices[11]= new Array();
 choices[11][0] = "a trav&eacute;s de su extranet, con los mecanismos de seguridad adecuados";
 choices[11][1] = "a su DMZ";
 choices[11][2] = "a su intranet";
 choices[11][3] = "requiere el establecimiento de un servidor VPN en el hogar del empleado";
 answers[11] = choices[11][2];
 units[11] = "113";
 comments[11] = "Id Pregunta: 4080. ";


//  Id pregunta: 4222 AÃ±o de creación de pregunta: 2006-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta para los protocolos de enlace orientados a car&aacute;cter?";
 choices[12]= new Array();
 choices[12][0] = "La sincronizaci&oacute;n se consigue gracias a que siempre hay un car&aacute;cter STX &oacute; SOH al comienzo de la trama y un car&aacute;cter ETX &oacute; ETB al final de la trama";
 choices[12][1] = "No es necesario el control de transparencia dado que el contenido de la trama se conoce gracias a la aparici&oacute;n de los caracteres de control";
 choices[12][2] = "El control de flujo mediante t&eacute;cnica de frenado brusco se consigue utilizando una trama de control wack";
 choices[12][3] = "Para la detecci&oacute;n de errores se protegen todos los caracteres transmitidos excepto las cabeceras";
 answers[12] = choices[12][2];
 units[12] = "100";
 comments[12] = "Id Pregunta: 4222. Control WACK :Wait After ACK";


//  Id pregunta: 4323 AÃ±o de creación de pregunta: 2007-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes elementos, de resultar inadecuado, podr&iacute;a facilitar un ataque de negaci&oacute;n de servicio en un sistema de informaci&oacute;n?";
 choices[13]= new Array();
 choices[13][0] = "La configuraci&oacute;n del router y reglas aplicadas.";
 choices[13][1] = "El dise&ntilde;o de la red interna.";
 choices[13][2] = "Las t&eacute;cnicas de revisi&oacute;n de auditoria.";
 choices[13][3] = "Las t&eacute;cnicas de prueba de auditoria";
 answers[13] = choices[13][0];
 units[13] = "100";
 comments[13] = "Id Pregunta: 4323. ";


//  Id pregunta: 5457 AÃ±o de creación de pregunta: 2003-01-01
 questions[14]= "15)  Diga cu&aacute;l de las siguientes afirmaciones es cierta";
 choices[14]= new Array();
 choices[14][0] = "En las WAN los retardos son altos, por la gran distancia que cubre";
 choices[14][1] = "Las WAN son las LAN inal&aacute;mbricas (Wireless).";
 choices[14][2] = "Las LAN, MAN y WAN son la misma cosa, solo cambia la distancia que abarcan";
 choices[14][3] = "Ninguna de las anteriores";
 answers[14] = choices[14][0];
 units[14] = "101";
 comments[14] = "Id Pregunta: 5457. Castilla y Le&oacute;n";


//  Id pregunta: 8384 AÃ±o de creación de pregunta: 2011-01-01
 questions[15]= "16)  Cu&aacute;l de los siguientes estados NO corresponde con ninguno de los estados en los que puede estar un puerto de un dispositivo de interconexi&oacute;n, seg&uacute;n lo definido en el est&aacute;ndar 802.1D para el protocolo Spanning Tree:";
 choices[15]= new Array();
 choices[15][0] = "Blocking (Bloqueando).";
 choices[15][1] = "Listening (Escuchando). ";
 choices[15][2] = "Learning (Aprendiendo).";
 choices[15][3] = "Receiving (Recibiendo).";
 answers[15] = choices[15][3];
 units[15] = "102";
 comments[15] = "Id Pregunta: 8384. Examen TIC A2 2010";


//  Id pregunta: 8544 AÃ±o de creación de pregunta: 2011-01-01
 questions[16]= "17)  1 &iquest;En qu&eacute; RFC se describe el modelo de seguridad basado en usuario (USM o User-basad Security Model) para la versi&oacute;n 3 de SNMP?";
 choices[16]= new Array();
 choices[16][0] = "RFC 1157.";
 choices[16][1] = "RFC 1441";
 choices[16][2] = "RFC 3414";
 choices[16][3] = "RFC 3854";
 answers[16] = choices[16][2];
 units[16] = "104";
 comments[16] = "Id Pregunta: 8544. Examen TIC A2 2010 interna";


//  Id pregunta: 8626 AÃ±o de creación de pregunta: 2011-01-01
 questions[17]= "18)  Un cable consistente en un n&uacute;cleo de vidrio con un alto Indice refracci&oacute;n, rodeada de una capa o revestimiento de material similar, pero con &iacute;ndice de refracci&oacute;n ligeramente menor, y, todo ello, envuelto en una cubierta do protecci&oacute;n totalmente opaca que le proporciona consistencia, es un cable:";
 choices[17]= new Array();
 choices[17][0] = "De par trenzado tipo BS/UTP (Braided ana screened unshielded twisteo pair).";
 choices[17][1] = "Coaxial de tipo thick";
 choices[17][2] = "De par trenzado tipo S/STP (Screened and shielded twisted pair)";
 choices[17][3] = "De fibra &oacute;ptica";
 answers[17] = choices[17][3];
 units[17] = "99";
 comments[17] = "Id Pregunta: 8626. Examen TIC A2 2010 interna";


//  Id pregunta: 9019 AÃ±o de creación de pregunta: 2011-01-01
 questions[18]= "19)  La funci&oacute;n de un repetidor en una l&iacute;nea telef&oacute;nica es &hellip;";
 choices[18]= new Array();
 choices[18][0] = "Amplificar la potencia de las se&ntilde;ales vocales.";
 choices[18][1] = "Compensar la atenuaci&oacute;n y corregir la deformaci&oacute;n de las corrientes vocales.";
 choices[18][2] = "Corregir la paradiafon&iacute;a de la l&iacute;nea.";
 choices[18][3] = "Ninguna de las anteriores";
 answers[18] = choices[18][1];
 units[18] = "99";
 comments[18] = "Id Pregunta: 9019. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9327 AÃ±o de creación de pregunta: 2013-01-01
 questions[19]= "20)  El efecto de la diafon&iacute;a en un cable se define como:";
 choices[19]= new Array();
 choices[19][0] = "La p&eacute;rdida de potencia en la se&ntilde;al debido a la emisi&oacute;n electromagnetica al ambiente.";
 choices[19][1] = "La variacion de la velocidad de propagacion de la se&ntilde;al en funcion de la frecuencia";
 choices[19][2] = "La interferencia electromagnetica producida entre se&ntilde;ales que discurren simultaneamente entre pares paralelos.";
 choices[19][3] = "Es la distorsion de la se&ntilde;al por la influencia de se&ntilde;ales espureas del ambiente.";
 answers[19] = choices[19][2];
 units[19] = "99";
 comments[19] = "Id Pregunta: 9327. NULL";


//  Id pregunta: 9331 AÃ±o de creación de pregunta: 2013-01-01
 questions[20]= "21)  Acerca de las ventanas de transmision en las fibras opticas, se puede afirmar";
 choices[20]= new Array();
 choices[20][0] = "son provocadas por la presencia del ion hidroxilo OH-";
 choices[20][1] = "la mas amplia es la primera ventana, entre los 0,8 y 0,9 micras";
 choices[20][2] = "alrededor de los 1550 nm existe una ventana de transmision.";
 choices[20][3] = "la tercera ventana obliga a usar transmisiones monomodo";
 answers[20] = choices[20][2];
 units[20] = "99";
 comments[20] = "Id Pregunta: 9331. NULL";


//  Id pregunta: 9926 AÃ±o de creación de pregunta: 2014-01-01
 questions[21]= "22)  En relaci&oacute;n con el campo TTL, indique la falsa:";
 choices[21]= new Array();
 choices[21][0] = "Sirve para limitar la vida de un paquete. ";
 choices[21][1] = "Evita que los paquetes est&eacute;n dando vueltas eternamente por la red.";
 choices[21][2] = "Permite una vida m&aacute;xima de 512 segundos.";
 choices[21][3] = "En la pr&aacute;ctica, cuenta saltos.";
 answers[21] = choices[21][2];
 units[21] = "100";
 comments[21] = "Id Pregunta: 9926. NULL";


//  Id pregunta: 10504 AÃ±o de creación de pregunta: 2014-01-01
 questions[22]= "23)  &iquest;Cual es la impedancia de los cables definida en la ISO 11801 para las versiones de la norma posteriores a 2002?";
 choices[22]= new Array();
 choices[22][0] = "120 ?";
 choices[22][1] = "150 ?";
 choices[22][2] = "100 ?";
 choices[22][3] = "Todos los anteriores";
 answers[22] = choices[22][2];
 units[22] = "99";
 comments[22] = "Id Pregunta: 10504. A partir del 2002, solo se consideran validas las impedancias de 100 ?";


//  Id pregunta: 10888 AÃ±o de creación de pregunta: 2015-01-01
 questions[23]= "24)  ICMP env&iacute;a mensajes en forma de datagramas que permiten al conjunto del protocolo TCP/IP realizar entre otras las siguientes funciones, se&ntilde;ale la FALSA:";
 choices[23]= new Array();
 choices[23][0] = "Control de flujo.";
 choices[23][1] = "Detecci&oacute;n de destinos inalcanzables.";
 choices[23][2] = "Encriptaci&oacute;n de paquetes.";
 choices[23][3] = "Pruebas de conectividad.";
 answers[23] = choices[23][2];
 units[23] = "100";
 comments[23] = "Id Pregunta: 10888. Examen GSI 2014";


